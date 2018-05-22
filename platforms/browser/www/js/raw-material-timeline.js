/*global $, moment, tableData, Promise, accounting*/

// moment.js wird benutzt für alle datums variablen: http://momentjs.com/docs/#/displaying/format/


var rawTimeline = {

	rawTimelineSelectedComponentId: -1,
	isShowingOverView: false,

	setSelectedComponent: function ( componentId ) {
		rawTimeline.rawTimelineSelectedComponentId = componentId;
		rawTimeline.render();
	},

	setOverview: function ( newIsOverview ) {
		rawTimeline.isShowingOverView = newIsOverview;
	},

	init: function() {
		var timelineEl = $( '#app-tab2 #raw-material-timeline' );
		var scaleEl = $( '.timeline-scale', timelineEl );
		var popupEl = $( '#app-tab2 #timeline-popup' );
		var optionsEl = $( '#timeline-timespan-options', timelineEl );
		var currentTimelineSpanId = Object.keys( getTimespans() )[0];

		popupEl.find( '#app-tab2 .timeline-popup-close-button' ).on( 'click', closePopup );

		var selectionButtonEl = timelineEl.find( '#timeline-timespan-selected' );

		selectionButtonEl.on( 'click', toggleSelection );

		var allocations = [ ];

		function start () {
			getAllocationsInTimespan( getTimelineBorders() ).then( function ( productionAllocations ) {
				allocations = productionAllocations;

				return productionAllocations;
			} );

			addFillOverlays();
			rawTimeline.render();
			setInterval( rawTimeline.render, 5000 );
			
			getAllocationsInTimespan( getTimelineBorders() ).then( function ( allocations ) {
				return getCurrentAllocation( getTimelineBorders() ).then( function ( currentAllocation ) {
					return {
						currentAllocation: currentAllocation,
						allocations: allocations
					};
				} );
			} ).then( function ( allocationData ) {
				if ( allocationData.currentAllocation ) {
					showAllocation( allocationData.currentAllocation, allocationData.allocations[allocationData.currentAllocation.index + 1] );
				}
			} );
		}

		function addFillOverlays () {
			var overlayWrapperEl = $( '#app-tab2 #anlage-ansicht-3d .fill-overlays' );

			$( '#app-tab2 [data-component-id]' ).each( function ( index, el ) {
				var componentEl = $( el );
				var componentId = componentEl.attr( 'data-component-id' );

				var svgStr = '<svg class="fill-overlay">';
	            svgStr += '<rect class="fill-layer" x="0" y="100%" width="100%" height="0%" style="fill:#f9d817;" />';
	            svgStr += '<rect class="fill-layer" x="0" y="100%" width="100%" height="0%" style="fill:#ebcd15;" />';
	            svgStr += '<rect class="fill-layer" x="0" y="100%" width="100%" height="0%" style="fill:#d6ba18" />';
	            svgStr +='</svg>';

	            var svgEl = $( svgStr );
	            svgEl.attr( 'fill-overlay-id', componentId );

				overlayWrapperEl.append( svgEl );
			} );
			// $( '#anlage-ansicht-3d .fill-overlays' ).append( )
		}

		function render () {
			requestAnimationFrame( function () {
				if ( allocations.length ) {
					var now = getCurrentMoment();
					var borders = getTimelineBorders();

					// remove all allocations that were displayed before
					timelineEl.find( '.allocation' ).remove();

					var prevAllocationContent = false;
					var nextAllocationContent = false;

					var useShiftBlocks = currentTimelineSpanId === 'week';
					var currentShiftLength = 0;
					var currentShiftStartX = 0;
					var currentShiftEndX = 0;

					var allocationEl;

					// Draw Allocation buttons
					allocations.forEach( function ( allocation, allocationIndex ) {
						var allocationContent = getAllocationContent( allocation, 'allocation' );
						var allocationHour = getAllocationContent( allocation, 'hourOfProduction' );

						if ( allocationContent ) {
							prevAllocationContent = getAllocationContent( allocations[allocationIndex - 1], 'allocation' );
							nextAllocationContent = getAllocationContent( allocations[allocationIndex + 1], 'allocation' );
							
							var startX = 0;
							var endX = 1;

							var allocationStartTimestamp = parseInt( allocation.start.format( 'x' ), 10 );
							var allocationEndTimestamp = parseInt( allocation.end.format( 'x' ), 10 );
							
							var spanStartTimestamp = borders.start.timestamp;
							var spanEndTimestamp = borders.end.timestamp;
							var spanDuration = spanEndTimestamp - spanStartTimestamp;

							var allocationDuration = moment.duration( 1, 'hour' ).asMilliseconds();

							if ( currentTimelineSpanId.toLowerCase() === 'week' ) {
								allocationDuration = moment.duration( 1, 'day' ).asMilliseconds();
							}

							var times = ~~( spanStartTimestamp / allocationDuration ) + 1;
							var delta = ( allocationDuration * times ) - spanStartTimestamp;

							if ( allocation.start.isAfter( borders.start.moment ) ) {
								startX = ( allocationStartTimestamp - spanStartTimestamp + delta ) / spanDuration;
							}

							if ( allocation.end.isBefore( borders.end.moment ) ) {
								endX = ( allocationEndTimestamp - spanStartTimestamp + delta ) / spanDuration;
							}

							if ( useShiftBlocks ) {
								if ( prevAllocationContent !== allocationContent ) {
									allocationEl = $( '<div class="allocation"><span class="allocation-text">' + allocationContent + '</span></div>' )[0];
									allocationEl.setAttribute( 'data-type', allocationContent.toLowerCase() );

									allocationEl.addEventListener( 'click', function () {
										$(this).siblings(".allocation").removeClass("-touched");
										$(this).addClass("-touched");
										showAllocation( allocation, allocations[allocationIndex + 1] );
									} );

									timelineEl[0].appendChild( allocationEl );
									
									currentShiftStartX = startX;
									currentShiftEndX = startX + 1;

									var leftPercent = mapRange( currentShiftStartX, 0, 1, 0, 100 );
									allocationEl.style.left = leftPercent + '%';
								}

								currentShiftEndX = endX;

								var widthPercent = mapRange( currentShiftEndX - currentShiftStartX, 0, 1, 0, 100 );

								allocationEl.style.width = widthPercent + '%';

							} else {
								allocationEl = $( '<div class="allocation"><span class="allocation-text">' + allocationContent + '</span></div>' )[0];
								allocationEl.setAttribute( 'data-type', allocationContent.toLowerCase() );
																
								timelineEl[0].appendChild( allocationEl );

								allocationEl.addEventListener( 'click', function () {
									$(this).siblings(".allocation").removeClass("-touched");
									$(this).addClass("-touched");
									showAllocation( allocation, allocations[allocationIndex + 1] );
								} );

								allocationEl.style.left = ( startX * 100 ) + '%';
								allocationEl.style.width = ( ( endX - startX ) * 100 ) + '%';
							}

							if ( allocationContent !== prevAllocationContent ) {
								allocationEl.classList.add( 'is-first-of-kind' );
							}

							if ( allocationContent !== nextAllocationContent ) {
								allocationEl.classList.add( 'is-last-of-kind' );
							}

							if ( allocation.start.isBefore( now ) && allocation.end.isAfter( now ) ) {
								allocationEl.classList.add( 'is-current' );
								allocationEl.setAttribute( 'data-index', allocationIndex );
							}

							if ( allocation.start.isAfter( now ) ) {
								allocationEl.classList.add( 'is-in-future' );
							}

							if ( allocation.end.isBefore( now ) ) {
								allocationEl.classList.add( 'is-in-past' );
							}
						}
					} );

					Object.keys( getTimespans() ).forEach( function ( timespan, index ) {
						var optionEl = timelineEl.find( '[data-timespan="' + timespan + '"]' );

						if ( ! optionEl.length ) {
							optionEl = $( '<button class="timeline-option" data-timespan="' + timespan + '">' + timespan + '</button>' );

							optionEl.on( 'click', function () {
								selectTimespan( timespan );
							} );

							optionsEl.append( optionEl );
						}

						if ( timespan === currentTimelineSpanId ) {
							optionEl.addClass( 'is-selected' );
						} else {
							optionEl.removeClass( 'is-selected' );
						}
					} );

					var selectedEl = $( '#timeline-timespan-selected', timelineEl );
					selectedEl.text( currentTimelineSpanId );

					// update scale;
					
					var timelineSpanStartTimestamp = borders.start.timestamp;
					var timelineSpanEndTimestamp = borders.end.timestamp;
					scaleEl.find( '.scale-item' ).remove();
			
					var scaleItemDurationInSeconds = moment.duration( 1, 'hour' ).asMilliseconds();
					var scaleFormat = 'HH:mm';

					if ( currentTimelineSpanId.toLowerCase() === 'week' ) {
						scaleItemDurationInSeconds = moment.duration( 1, 'day' ).asMilliseconds();
						scaleFormat = 'ddd, MMM D';
					}

					if ( currentTimelineSpanId.toLowerCase() === 'shift' ) {
						scaleItemDurationInSeconds = moment.duration( 1, 'hour' ).asMilliseconds();
						scaleFormat = 'HH:mm';
					}

					var times = ~~( timelineSpanStartTimestamp / scaleItemDurationInSeconds ) + 1;
					var scaleStartSec = ( scaleItemDurationInSeconds * times );
					var scaleItemWidth = scaleItemDurationInSeconds / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );

					for ( var secondsInTimeline = scaleStartSec; secondsInTimeline < timelineSpanEndTimestamp; secondsInTimeline += scaleItemDurationInSeconds ) {
						var scaleItemX = ( secondsInTimeline - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
						var scaleItemText = moment( secondsInTimeline, 'x' ).format( scaleFormat );
						var scaleItemEl = $( '<div class="scale-item">' + scaleItemText + '</div>' );
						
						scaleItemEl.css( {
							width: ( scaleItemWidth * 100 ) + '%',
							left: ( scaleItemX * 100 ) + '%'
						} );

						scaleEl.append( scaleItemEl );
					}
				}
			} );
		}

		function showAllocation ( allocation, nextAllocation ) {
			var startOfDayInSecs = parseInt( moment( allocation.start ).hour( 0 ).minute( 0 ).second( 0 ).format( 'X' ), 10 );
			var endOfDayInSecs = parseInt( moment( allocation.start ).hour( 23 ).minute( 59 ).second( 59 ).format( 'X' ), 10 );
			var dayDurationInSecs = endOfDayInSecs - startOfDayInSecs;
			var allocationStartInSecs = parseInt( allocation.start.format( 'X' ), 10 );

			var infoEl = $( '#app-tab2 #first-row-rohstoffe > .ui-tabs-panel[aria-hidden="false"]' );
			var wrapperEl = $( '#rohstoffe-recipe', infoEl );

			var allocationContent = getAllocationContent( allocation, 'allocation' );
			var recipe = getAllocationContent( allocation, 'recipe' );

			wrapperEl.attr( 'data-recipe', allocationContent.toLowerCase() );

			if ( allocationContent.toLowerCase() === 'setup' && nextAllocation ) {
				recipe = getAllocationContent( nextAllocation, 'recipe' );
			}
			
			// UPDATE RECIPE EL
			if ( recipe ) {
				wrapperEl.addClass( 'is-active' );
				wrapperEl.addClass( 'is-showing-recipe' );
			} else {
				wrapperEl.removeClass( 'is-showing-recipe' );
				wrapperEl.removeClass( 'is-active' );
				wrapperEl.removeClass( 'is-showing-recipe' );
			}

			$( '.recipe-number', infoEl ).text( allocationContent );

			if ( nextAllocation ) {
				var nextAllocationContent = getAllocationContent( nextAllocation, 'allocation' );
				
				var nextEl = $( '.recipe-next-text', infoEl );
				nextEl.text( nextAllocationContent );
			}

			// UPDATE BARS
			var tableEl = $( '#app-tab2 .ui-tabs-panel[aria-hidden="false"]' );

			var rawmaterialBarContainerEls = $( '.rohstoffe-fuellstoff', infoEl );

			if ( recipe && recipe.length ) {
				var barLeft = 0;

				rawmaterialBarContainerEls.each( function ( index, el ) {
					var containerEl = $( el );
					var barEl = $( '.knob', el );
					var percentEl = $( '.rohstoffe-percent', el );
					var throughputValueEl = $( '.rohstoffe-value', el );
					var titleEl = $( '.rohstoffe-title', el );
					var subtitleEl = $( '.rohstoffe-subtitle', el );

					var value = Math.round( recipe[index].throughput.value );
					var percentage = Math.round( recipe[index].percentage * 100 );
					var unit = recipe[index].throughput.unit;

					throughputValueEl.text( accounting.formatNumber( value ) + ' ' + unit );
					percentEl.text( percentage + '%' );
					titleEl.text( recipe[index].material.longname );
					subtitleEl.text( recipe[index].material.title );
					
					barEl
						.css( 'left', barLeft + '%' )
						.css( 'width', percentage + '%' );

					barLeft += percentage;
				} );

				rawmaterialBarContainerEls.addClass( 'is-active' );
			} else {
				rawmaterialBarContainerEls.removeClass( 'is-active' );
			}
															
			allocation.production.data.forEach( function ( allocationData, componentIndex ) {
				allocationData = allocationData[0];
				
				var componentEl = $( '#app-tab2 [data-component-id="' + componentIndex + '"]' );
				
				if ( componentEl.length && allocationData.layers && allocationData.layers.length ) {
					
					var rowCounter = 0;

					var layers = [ ];

					if ( allocationData.amount.value ) {
						layers = allocationData.layers;
					}

					layers.forEach( function ( layer, layerIndex ) {
						layer.forEach( function ( charge, chargeIndes ) {
							var rowEl = $( 'tr:nth-child(' + ( rowCounter + 2 ) + ')', componentEl );
						
							if ( ! rowEl.length ) {
								var tableEl = $( '.rohstoffe-fuellstaende', componentEl );
								var rowStr = '<tr class="rohstoffe-element">';
								rowStr += '<td class="rohstoffe-bold">Polyethylen</td>';
								rowStr += '<td data-content="amount"><span class="value">9000</span><span class="unit">kg</span></td>';
								// rowStr += '<td data-content="materialcode"><span class="value">0093458035</span></td>';
								rowStr += '<td data-content="losnummer"><span class="value">9023809</span></td>';
								// rowStr += '<td data-content="lieferant"><span class="value">123456</span></td>';
								rowStr += '</tr>';

								rowEl = $( rowStr );
								tableEl.append( rowEl );
							}

							var titleEl = $( '.rohstoffe-bold', rowEl );
							titleEl.text( charge.material.longname );

							var amountEl = $( '[data-content="amount"]', rowEl );
							amountEl.text( accounting.formatNumber( allocationData.amount.value ) + ' ' + allocationData.amount.unit );

							var losnummerEl = $( '[data-content="losnummer"]', rowEl );
							losnummerEl.text( charge.chargeIndex );
							
							rowCounter++;
						} );
					} );

					var rowEls = componentEl.find( '#app-tab2 .rohstoffe-fuellstaende' );

					if ( rowEls.length > rowCounter ) {
						rowEls.each( function ( index, el ) {
							if ( index >= rowCounter ) {
								$( el ).remove();
							}
						} );
					}
				}

				var fillOverlayEl = $( '#app-tab2 [fill-overlay-id="' + componentIndex +'"]' );
				var layerEls = fillOverlayEl.find( '.fill-layer' );

				if ( fillOverlayEl.length && layerEls ) {
					
					layerEls.each( function ( elIndex, el ) {
						var layerEl = $( el );
						// var elIndex = layerEls.length - elIndex - 1;
						
						if ( allocationData.layers && allocationData.layers[elIndex] ) {
							var maxHeight = allocationData.fillLevel;
							var layerCount = allocationData.layers.length;
							var layerHeight = maxHeight / layerCount;
							var y = ( 1 - layerHeight ) - ( layerHeight * elIndex );

							layerEl.attr( {
								height: layerHeight * 100 + '%',
								y: y * 100 + '%',
								opacity: 1
							} );
						} else {
							layerEl.attr( {
								height: 0,
								y: '100%',
								opacity: 0
							} );
						}
					} );
				}
			} );
		}

		function closePopup () {
			popupEl.removeClass( 'is-active' );
		}

		function selectTimespan ( timespan ) {
			currentTimelineSpanId = timespan;

			getAllocationsInTimespan( getTimelineBorders() ).then( function ( productionAllocations ) {
				allocations = productionAllocations;
				render();
			} );

			closeSelection();
		}

		function closeSelection () {
			optionsEl.removeClass( 'is-active' );
		}

		function toggleSelection () {
			optionsEl.toggleClass( 'is-active' );
		}

		function getCurrentTimespan () {
			return getTimespans()[currentTimelineSpanId];
		}

		function getAllocationContent ( allocation, key ) {
			var allocationContent = false;

			if (
				allocation &&
				allocation.production &&
				allocation.production.data &&
				allocation.production.data.length &&
				allocation.production.data[0] &&
				allocation.production.data[0][0]
			) {
				allocationContent = allocation.production.data[0][0][key];
			}

			return allocationContent;
		}

		function getTimelineBorders () {
			var now = getCurrentMoment();
			var currentTimelineSpan = getTimespans()[currentTimelineSpanId];
			var halfTimeSpanSeconds = ~~( currentTimelineSpan.asSeconds() / 2 );
			
			var timelineSpanStart = moment( now ).subtract( halfTimeSpanSeconds, 'seconds' );
			var timelineSpanEnd = moment( now ).add( halfTimeSpanSeconds, 'seconds' );

			var timelineSpanStartTimestamp = parseInt( timelineSpanStart.format( 'x' ), 10 );
			var timelineSpanEndTimestamp = parseInt( timelineSpanEnd.format( 'x' ), 10 );

			return {
				start: {
					moment: timelineSpanStart,
					timestamp: timelineSpanStartTimestamp
				},
				end: {
					moment: timelineSpanEnd,
					timestamp: timelineSpanEndTimestamp
				}
			};
		}

		function getCurrentAllocation ( borders ) {
			var now = getCurrentMoment();

			return getAllocationsInTimespan( borders ).then( function ( allocations ) {
				var currentAllocations = allocations.filter( function ( allocation, index ) {
					return ( ( allocation.start.isBefore( now ) || allocation.start.isSame( now ) ) && ( allocation.end.isAfter( now ) || allocation.end.isSame( now ) ) );
				} );

				return currentAllocations[0];
			} );
		}

		function getAllocationsInTimespan ( borders ) {
			var productionHours = borders.end.moment.diff( borders.start.moment, 'hours' );
			var productionDates = [ ];

			for ( var hourIndex = 0; hourIndex < productionHours; ++hourIndex ) {
				productionDates.push( tableData.getProductionAtHour( hourIndex ) );
			}

			return Promise.all( productionDates ).then( function ( productionDates ) {
				return productionDates.map( function ( productionData, index ) {
					return {
						start: moment( borders.start.moment ).add( index, 'hours' ),
						end: moment( borders.start.moment ).add( index, 'hours' ).add( 59, 'minutes' ).add( 59, 'seconds' ),
						production: productionData,
						index: index
					};
				} );
			} );
		}

		function getTimespans () {
			return {
				'week': moment.duration( 1, 'weeks' ),
				'day': moment.duration( 1, 'days' ),
				'shift': moment.duration( 8, 'hours' )
			};
		}

		function getAllocationType ( allocations, types ) {
			var index = allocations.length;
			
			var value = Math.sin( index );
			
			return types[Math.round( mapRange( value, -1, 1, 0, types.length - 1 ) )];
		} 

		function getCurrentMoment () {
			var now = moment();

			// den jetzigen zeitpunkt faken, so dass wir events angezeigt bekommen
			if ( now.week() < 42 ) {
				now = moment().week( 42 );
			}
			return now;
		}

		function randomNumber ( min, max, round ) {
			return round ?
				Math.round( min + Math.random() * ( max - min ) ) :
				min + Math.random() * ( max - min );
		}

		function mapRange ( value, inMin, inMax, outMin, outMax, clampResult ) {
			var result = ( ( value - inMin ) / ( inMax - inMin ) * ( outMax - outMin ) + outMin );

			if ( clampResult ) {
				if ( outMin > outMax ) {
					result = Math.min( Math.max( result, outMax ), outMin );
				} else {
					result = Math.min( Math.max( result, outMin ), outMax );
				}
			}

			return result;
		}

		rawTimeline.render = render;

		start();
	}
};

$(document).ready( function () {
	rawTimeline.init();
});
