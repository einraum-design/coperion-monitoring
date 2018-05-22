$( document ).ready( function () {
	var headerEl = $( '#header' );
	// var clockEl = $( '<div class="clock"></div>' );
	// headerEl.append( clockEl );

	var dateEl = $("[data-role='currentDate']");
	var timeEl = $("[data-role='currentTime']");


	setInterval( updateClock, 1000 );

	updateClock();

	function updateClock () {
		requestAnimationFrame( function () {
			// clockEl.text( moment().format( 'ddd MMM D HH:mm' ) );
			dateEl.text( moment().format( 'ddd MMM D' ) );
			timeEl.text( moment().format( 'HH:mm' ) );
		} );
	}
} );
