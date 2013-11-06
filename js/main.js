( function( $, w, undefined ){

	"use strict";

	var MYAPP = window.MYAPP = window.MYAPP || {};

	MYAPP.UTIL = {
		exec: function( controller, action ) {
			var ns = MYAPP,
			action = ( action === undefined ) ? 'init' : action;

			if ( controller !== '' && ns[ controller ] && typeof ns[ controller ][ action ] == 'function' ) {
				ns[controller][action]();
			}
		},
		init: function() {
			var el = document.getElementById( 'myapp' ),
			controller = el.getAttribute( 'data-controller' ),
			actions = el.getAttribute( 'data-action' );

			MYAPP.UTIL.exec( 'common' );
			MYAPP.UTIL.exec( controller );

			// do all the actions too.
			$.each( actions.split( /\s+/ ),function( i, action ){
				MYAPP.UTIL.exec( controller, action );
			} );
		}
	};


	// Common to the whole app/site
	MYAPP.common = ( function(){
		var moduleVariable = '';
		var privateFunction = function(){};
		var init = function(){ console.log( 'common.init' ); };

		return {
			init: init
		}
	} )();


	// Example module for the homepage (index.html)
	MYAPP.module = ( function(){
		var moduleVariable = '';
		var privateFunction = function(){};
		var init = function(){ console.log( 'module.init' ); };
		var action1 = function(){ console.log( 'module.action1' ); };
		var action2 = function(){ console.log( 'module.action2' ); };

		return {
			init: init,
			action1: action1,
			action2: action2
		}
	} )();


	// Example module for page1 (page1.html)
	// MYAPP.page1 = ( function(){
	// 	var moduleVariable = '';
	// 	var privateFunction = function(){};
	// 	var init = function(){ console.log( 'page1.init' ); };
	// 	var action1 = function(){ console.log( 'page1.action1' ); };
	// 	var action2 = function(){ console.log( 'page1.action2' ); };

	// 	return {
	// 		init: init,
	// 		action1: action1,
	// 		action2: action2
	// 	}
	// } )();


	// Example module for page2 (page2.html)
	// MYAPP.page2 = ( function(){
	// 	var moduleVariable = '';
	// 	var privateFunction = function(){};
	// 	var init = function(){ console.log( 'page2.init' ); };

	// 	return {
	// 		init: init
	// 	}
	// } )();

} )( jQuery, window );

$( document ).ready( MYAPP.UTIL.init );
