$( document ).ready( function () {
	var coperionOverlayEl = $( '.mycoperion' );
	var coperionCloseButtonEl = $( '.mycoperion-close-button' );

	$( '.komponenten-order-button' ).click( function () {
		coperionOverlayEl.addClass( 'is-active' );
		setTimeout( function () {
			coperionOverlayEl.addClass( 'is-visible' );
		}, 10 );
	} );

	coperionCloseButtonEl.click( function () {
		coperionOverlayEl.removeClass( 'is-visible' );

		setTimeout( function () {
			coperionOverlayEl.removeClass( 'is-active' );
		}, 300 );
	} );
} );