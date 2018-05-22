/*global $, moment*/

// moment.js wird benutzt für alle datums variablen: http://momentjs.com/docs/#/displaying/format/


var startWeek = 18;//42;
var endWeek = 23;//47;

$(document).ready( function () {
	var timelineEl = $( '#timeline' );
	var scaleEl = $( '.timeline-scale', timelineEl );
	var popupEl = $( '#timeline-popup' );
	var optionsEl = $( '#timeline-timespan-options', timelineEl );
	var timelineData;
	var currentTimelineSpanId;

	getTimelineData().then( function ( newTimelineData ) {

		timelineData = newTimelineData;
		
		init();
		render();
	} );

	function init () {
		currentTimelineSpanId = Object.keys( timelineData.timespans )[0];
		hiddenEvents.init();
		popupEl.find( '.timeline-popup-close-button' ).on( 'click', closePopup );
		timelineEl.find( '#timeline-timespan-selected' ).on( 'click', toggleSelection );
	}

	function render () {
		if ( timelineData ) {
			renderDetails();
		}
	}

	function renderDetails () {
		requestAnimationFrame( function () {
			var now = getCurrentMoment();

			var currentTimelineSpan = timelineData.timespans[currentTimelineSpanId];
			var halfTimeSpanSeconds = ~~( currentTimelineSpan.asSeconds() / 2 );

			var timelineSpanStart = moment( now ).subtract( halfTimeSpanSeconds, 'seconds' );
			var timelineSpanEnd = moment( now ).add( halfTimeSpanSeconds, 'seconds' );

			var allEventsInTimespan = timelineData.events.filter( function ( event ) {
				return event.date.isAfter( timelineSpanStart ) && event.date.isBefore( timelineSpanEnd );
			} );

			// remove all events that were displayed before
			timelineEl.find( '.event-button' ).remove();

			// show all current events
			var timelineSpanStartTimestamp = parseInt( timelineSpanStart.format( 'x' ), 10 );
			var timelineSpanEndTimestamp = parseInt( timelineSpanEnd.format( 'x' ), 10 );
			var nowTimestamp = parseInt( now.format( 'x' ), 10 );

			allEventsInTimespan.forEach( function ( event, eventIndex ) {
				var eventTimestamp = parseInt( event.date.format( 'x' ), 10 );
				var eventPositionInTimeline = ( eventTimestamp - timelineSpanStartTimestamp ) / ( timelineSpanEndTimestamp - timelineSpanStartTimestamp );
				var eventX = eventPositionInTimeline * 100;
				var eventIsInPast = eventTimestamp <= nowTimestamp;

				var eventEl = $( '<button class="event-button type-' + event.type + '" id="button-' + event.id + '">' + event.title + '</button>' );
				eventEl.css( 'left', eventX + '%' );
				eventEl.attr( 'data-event-id', event.id );
				eventEl.addClass( eventIsInPast ? 'is-in-past' : 'is-in-future' );
				eventEl.on( 'click', function () {
					openDetailPopup( event, eventX, eventIsInPast );
				} );

				timelineEl.append( eventEl );
			} );

			Object.keys( timelineData.timespans ).forEach( function ( timespan, index ) {
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

			// update scale
			scaleEl.find( '.scale-item' ).remove();
			
			var scaleItemDurationInSeconds = moment.duration( 1, 'hour' ).asMilliseconds();
			var scaleFormat = 'HH:mm';

			if ( currentTimelineSpanId.toLowerCase() === 'week' ) {
				scaleItemDurationInSeconds = moment.duration( 1, 'day' ).asMilliseconds();
				scaleFormat = 'ddd, MMM D';
			}

			if ( currentTimelineSpanId.toLowerCase() === 'month' ) {
				scaleItemDurationInSeconds = moment.duration( 1, 'day' ).asMilliseconds();
				scaleFormat = 'M/D';
			}

			if ( currentTimelineSpanId.toLowerCase() === 'hour' ) {
				scaleItemDurationInSeconds = moment.duration( 5, 'minutes' ).asMilliseconds();
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
		} );
	}

	function openDetailPopup ( eventData, eventX, isEventInPast ) {
		popupEl[isEventInPast ? 'addClass' : 'removeClass']( 'is-in-past' );

		var headlineEl = $( '#timeline-popup-title', popupEl );
		headlineEl.text( eventData.title );

		var descriptionEl = $( '#timeline-popup-description', popupEl );
		$( descriptionEl ).html( eventData.description );

		var imageEl = $( '#timeline-popup-image', popupEl );
		imageEl.attr( 'src', eventData.image );

		popupEl.attr( 'data-type', eventData.type );
		popupEl.addClass( 'is-active' );
		popupEl.find( '.timeline-popup-arrow' ).css( 'left', eventX + '%' );

		var timeEl = popupEl.find( '#timeline-popup-time' );
		timeEl.attr( 'datetime', eventData.date.format( 'YYYY-MM-DDTHH:mm:ssZ') );
		timeEl.text( eventData.date.format( 'MMMM Do YYYY, h:mm:ss a') );

		if ( eventData.image_big ) {
			popupEl.find( '#timeline-big-image' ).attr( 'src', eventData.image_big );
			popupEl.addClass( 'has-big-image' );
		} else {
			popupEl.removeClass( 'has-big-image' );
		}
	}

	function closePopup () {
		popupEl.removeClass( 'is-active' );
	}

	function selectTimespan ( timespan ) {
		currentTimelineSpanId = timespan;
		closeSelection();
		closePopup();
		render();
	}

	function closeSelection () {
		optionsEl.removeClass( 'is-active' );
	}

	function toggleSelection () {
		optionsEl.toggleClass( 'is-active' );
	}

	// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
	// addTimelineEvent( {
	// 	id: 'meine-id',
	// 	date: moment( '2016-10-14 09:30:26' ),
	// 	type: 'setup',
	// 	title: 'mein titel',
	// 	description: 'my description yo',
	// 	image: 'images/test/img.svg'
	// },
	// nach 3 sekunden wieder runternehmen von der timeline
	// 3000 );
	function addTimelineEvent ( eventData, deleteAfter ) {

		if (
			eventData &&
			eventData.id &&
			eventData.date &&
			eventData.date.isValid &&
			eventData.date.isValid() &&
			eventData.type &&
			eventData.title &&
			eventData.description &&
			eventData.image
		) {
			timelineData.events.push( eventData );

			if ( deleteAfter ) {
				setTimeout( function () {
					removeTimelineEvent( eventData.id );
				}, deleteAfter );
			}

			render();
		} else {
			console.log( 'YO. DEIN EVENT IS FALSCH FORMATIERT. BITTE DIESES FORMAT NUTZEN:', JSON.stringify( timelineData.events[0], null, '  ' ) );
		}
	}

	function removeTimelineEvent ( removeId ) {
		var eventIndex = -1;

		timelineData.events
			.forEach( function ( event, index ) {
				if ( event.id === removeId ) {
					eventIndex = index;
				}
			} );

		if ( eventIndex !== -1 ) {
			timelineData.events.splice( eventIndex, 1 );
		}

		render();
	}

	render();
	setInterval( render, 5000 );

	window.removeTimelineEvent = removeTimelineEvent;
	window.addTimelineEvent = addTimelineEvent;
} );

function getTimelineData () {
	var data =  { };

	var startDate = moment().week( startWeek ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );
	var endDate = moment().week( endWeek ).isoWeekday( 1 ).hour( 0 ).minute( 0 ).second( 0 );

	var startDateTimestamp = parseInt( startDate.format( 'x' ), 10 );
	var endDateTimestamp = parseInt( endDate.format( 'x' ), 10 );

	var eventCount = 200;

	var eventTypes = [
		'maintenance',
		'error',
		'setup'
	];

	var timelineSpans = {
		'Week': moment.duration( 1, 'weeks' ),
		'Day': moment.duration( 1, 'days' ),
		'Hour': moment.duration( 1, 'hours' ),
		'Month': moment.duration( 1, 'month' ),
	};

	var events = [ ];

	// beispiel für die 'echten Daten'
	// var events = [
	// 	{
	// 		// event id, kann eindeutige zahlen kombination sein
	// 		id: 'event-121312',
	//
	// 		// event datum
	// 		date: moment( '2016-10-14 09:30:26' ),
	//
	// 		// event typ: setup, maintenance oder was auch immer
	// 		type: 'setup',
	//
	// 		title: 'Event Title blabla',
	// 		description: 'hello 123',
	//
	// 		image: 'img/events/testImage.svg'
	// 	}
	// ]

	// var events = [
	// 	{
	// 		id:'event-1',
	// 		date: moment( startDate ).hours( 9 ).minutes( 30 ).seconds( 26 ),
	// 		type: 'maintenance',
	// 		title: 'Maintenance: ZXD',
	// 		description: 'Bearings and Sealings on ZXD- rotary valve below XXXX have been replaced during Inspection after 8.000 operating hours.',
	// 		image: 'img/events/2016-09-28-event.png'
	// 	},

	// 	{
	// 		id:'event-2',
	// 		date: moment( startDate ).add( 1, 'day' ).hours( 9 ).minutes( 30 ).seconds( 26 ),
	// 		type: 'error',
	// 		title: 'Error #0246',
	// 		description: 'Analysis revealed: Suction conveying line was blocked. Conveying pressure = - 500 mbar.',
	// 		image: 'img/events/2016-09-27-event.png'
	// 	},
	// 	{
	// 		id:'event-3',
	// 		date: moment( startDate ).add( 2, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),// moment( '2016-09-30 15:30:26' ),
	// 		type: 'setup',
	// 		title: 'Leakage in Conveying System / Wear in Rotary Valve',
	// 		description: 'Conveying pressure constantly increasing for 5 hours. Solution: Performance was increased.',
	// 		image: 'img/events/2016-09-29-event.png'
	// 	},
	// 	{
	// 		id:'event-121312',
	// 		date: moment( startDate ).add( 3, 'days' ).hours( 14 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 14:30:26' ),
	// 		type: 'error',
	// 		title: 'Störmeldung #0248: Zu geringer Drehmoment',
	// 		description: 'Analyse ergab: Geringer Druck aufgrund niedriger Drehzahl.',
	// 		image: 'img/events/placeholder-event.jpg'
	// 	},
	// 	{
	// 		id:'event-121312',
	// 		date: moment( startDate ).add( 4, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 19:30:26' ),
	// 		type: 'error',
	// 		title: 'Störmeldung #0249: Maschine XY schaltet sich bei laufender Dosierung ab',
	// 		description: 'Analyse ergab: Leerlaufmoment war zu hoch eingestellt.',
	// 		image: 'img/events/placeholder-event.jpg'
	// 	},
	// 	{
	// 		id:'event-121312',
	// 		date: moment( startDate ).add( 5, 'days' ).hours( 15 ).minutes( 30 ).seconds( 26 ),//moment( '2016-09-26 19:30:26' ),
	// 		type: 'error',
	// 		title: 'Störmeldung #0249: Maschine XY schaltet sich bei laufender Dosierung ab',
	// 		description: 'Analyse ergab: Leerlaufmoment war zu hoch eingestellt.',
	// 		image: 'img/events/placeholder-event.jpg'
	// 	}
	// ];

	return $.ajax({
		dataType: "json",
		url : "daten/timeline/events.json"
	}).then( function ( eventsData ) {

		// event.date.replace("xx", "W3Schools")
		var currentDay = new Date().getDate();
		currentDay = parseInt(currentDay);

		return eventsData.map( function ( event ) {

		 	var dataDay = parseInt(event.date.substring(8,10));
		 	var currentMonth = new Date().getMonth();
			currentMonth = parseInt(currentMonth + 1);
			var currentYear = new Date().getFullYear();

		 	if (currentDay < 15) {
		 		
		 		if (dataDay > (15 + currentDay)) {
		 			console.log("letzer monat > 24");
		 			currentMonth = currentMonth - 1;

		 		} 

		 	} else if (currentDay > 15) {
		 		
		 		if (dataDay < (currentDay - 15)) {

		 			currentMonth = currentMonth + 1;

		 		}

		 	}


		 	if (currentMonth == 0) {

 				currentMonth = 12;
 				currentYear = currentYear - 1;

 			}

 			if (currentMonth > 12) {

 				currentMonth = "01";
 				currentYear = currentYear + 1;

 			}

		 	var setDate = event.date;
		 	setDate = setDate.replace("xx", currentMonth);
		 	setDate = setDate.replace("yyyy", currentYear);

			event.date = moment( setDate );
			return event;


		} );
	} )
	.then( function ( eventsData ) {
		data.events = eventsData;
		data.startDate = startDate;
		data.endDate = endDate;
		data.timespans = timelineSpans;
		data.eventTypes = eventTypes;
		console.log( data );
		return data;
	} );


	// return fetch( 'daten/timeline/events.json' )
	// 	.then( function ( res ) {
	// 		console.log(res.json());
	// 		return res.json();
	// 	} )
	// 	.then( function ( eventsData ) {
	// 		return eventsData.map( function ( event ) {
	// 			event.date = moment( event.date );
	// 			return event;
	// 		} );
	// 	} )
	// 	.then( function ( eventsData ) {
	// 		data.events = eventsData;
	// 		data.startDate = startDate;
	// 		data.endDate = endDate;
	// 		data.timespans = timelineSpans;
	// 		data.eventTypes = eventTypes;
	// 		console.log( data );
	// 		return data;
	// 	} );

	// return data;
}

function getCurrentMoment () {
	var now = moment();

	// den jetzigen zeitpunkt faken, so dass wir events angezeigt bekommen
	if ( now.week() < startWeek ) {
		now = moment().week( startWeek );
	}
	return now;
}

function randomNumber ( min, max, round ) {
	return round ?
		Math.round( min + Math.random() * ( max - min ) ) :
		min + Math.random() * ( max - min );
}

// http://stackoverflow.com/a/20948347
function addWeekdays(date, days) {
  date = moment(date); // use a clone
  while (days > 0) {
    date = date.add(1, 'days');
    // decrease "days" only if it's a weekday.
    if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
      days -= 1;
    }
  }
  return date;
}


var hiddenEvents = {

	data: "",

	init: function() {

		hiddenEvents.loadData();
		$(".hiddenEvents .hiddenMaintenance").on('click', function() {
			hiddenEvents.maintenance();
		});

		$(".hiddenEvents .hiddenError").on('click', function() {
			hiddenEvents.error();
		});

		$(".hiddenError-Forwarding .knob").removeClass("loaded");

	},

	loadData: function() {

		// $.ajax({
		// 	dataType: "json",
		// 	url : "daten/_hiddenEvents/events.json",
		// 	success : function (data) {
		// 			hiddenEvents.data = data;
		// 			// console.log(hiddenEvents.data);
		// 	}
		// });

		return $.ajax({
			dataType: "json",
			url : "daten/timeline/push-messages.json"
			}).then( function ( pushMessages ) {
				hiddenEvents.pushMessages = pushMessages;
		} );

		return $.ajax({
			dataType: "json",
			url : "daten/timeline/errors.json"
			}).then( function ( errorMessages ) {
				hiddenEvents.errorMessages = errorMessages;
			} );

	},

	maintenance: function() {

		if (hiddenEvents.pushMessages && hiddenEvents.pushMessages.length > 0) {

			var size = hiddenEvents.pushMessages.length;
			var rand = Math.random() * (size - 1) + 1;
			var data = hiddenEvents.pushMessages[parseInt(rand)];

			$(".hiddenEventPopups .hiddenMaintenance-Message .text").html('<b>' + data.title + '</b><br /></br>' + data.description + '<br /></br>' + data.question + '</br></br>');
			$(".hiddenEventPopups .hiddenMaintenance-Response .text").html( data.response );

			$(".hiddenMaintenance-Message").addClass("active");


			$(".hiddenMaintenance-Message .decline").on('click', function() {
				$(".hiddenMaintenance-Message").removeClass("active");
			});

			$(".hiddenMaintenance-Message .accept").on('click', function() {
				$(".hiddenMaintenance-Message").removeClass("active");
				$(".hiddenMaintenance-Response").addClass("active");

				// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
				addTimelineEvent( {
						id: data.id,
						date: moment( data.date ),
						type: data.maintenance,
						title: data.title,
						description: data.description,
						image: data.image
					},
					// nach 3 sekunden wieder runternehmen von der timeline
					1200000
				);

				setTimeout( function () {
					$(".hiddenMaintenance-Response").removeClass("active");
				}, 2000);
			} );
		}

	},

	error: function() {

		if (hiddenEvents.errorMessages && hiddenEvents.errorMessages.length > 0) {
			

				var size = hiddenEvents.errorMessages.length;
				var rand = Math.random() * (size - 1) + 1;
				var data = hiddenEvents.errorMessages[parseInt(rand)];

				$(".hiddenEventPopups .hiddenError-Message .title").html( data.title );
				$('.hiddenEventPopups .hiddenError-Message .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$('.hiddenEventPopups .hiddenError-Response .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$('.hiddenEventPopups .hiddenError-Forwarding .hiddenErrorHeader').css("background-image", "url("+data.image+")");
				$(".hiddenEventPopups .hiddenError-Message .text").html( '<p>' + data.description + '</p>' );
				$(".hiddenEventPopups .hiddenError-Forwarding .title").html(data.title);
				$(".hiddenEventPopups .hiddenError-Response .title").html(data.title);
				$(".hiddenError-Message").addClass("active");


				// Forwarding

				$(".hiddenError-Message .buttons .intern").on('click', function() {
					$(".hiddenError-Message").removeClass("active");
					$(".hiddenEventPopups .hiddenError-Forwarding .text").html(data.intern);
					$(".hiddenError-Forwarding").addClass("active");
					setTimeout(function(){
						$(".hiddenError-Forwarding .knob").addClass("loaded");
					}, 500);
					setTimeout(function(){
						$(".hiddenError-Forwarding").removeClass("active");
						$(".hiddenError-Forwarding .knob").removeClass("loaded");

						$(".hiddenEventPopups .hiddenError-Response .text").html(data.response_intern);
						$(".hiddenError-Response").addClass("active");

						setTimeout(function(){
							$(".hiddenError-Response").removeClass("active");
						}, 7000);

						hiddenEvents.sendError(data);

					}, 3000);
				});

				$(".hiddenError-Message .buttons .coperion").on('click', function() {
					$(".hiddenError-Message").removeClass("active");
					$(".hiddenEventPopups .hiddenError-Forwarding .text").html(data.coperion);
					$(".hiddenError-Forwarding").addClass("active");
					setTimeout(function(){
						$(".hiddenError-Forwarding .knob").addClass("loaded");
					}, 500);
					setTimeout(function(){
						$(".hiddenError-Forwarding").removeClass("active");
						$(".hiddenError-Forwarding .knob").removeClass("loaded");

						$(".hiddenEventPopups .hiddenError-Response .text").html(data.response_coperion);
						$(".hiddenError-Response").addClass("active");

						setTimeout(function(){
							$(".hiddenError-Response").removeClass("active");
						}, 7000);

						hiddenEvents.sendError(data);

					}, 3000);
				});





					// $(".hiddenMaintenance-Message .decline").on('click', function() {
					// 	$(".hiddenMaintenance-Message").removeClass("active");
					// });
		}

	},

	sendError: function(data) {

		// EIN EVENT AUF DER TIMELINE HINZUFÜGEN:
		addTimelineEvent( {
			id: data.title,
			date: moment(),
			type: "error",
			title: data.title,
			description: data.description,
			image: data.image
		},
		// nach 3 sekunden wieder runternehmen von der timeline
		1200000 );

	}

}
