/*
 * Lead Generation Landing Page Scripts
 * Author: Vanessa Coles
 * Author URL: http://vcoles.com
 * License:
 */

'use_strict';

// jQuery plugins here
$(document).ready(function() {

	(function() {
		const topBar = $('.top-bar');
		const body = $('body');

		// Get the top bar height
		topBarHeight = topBar.outerHeight();

		// Add a padding to body to align with top of header
		body.css('paddingTop', topBarHeight);
	})();


	/*
	 * Info box sliding hover effect
	 * Inspired by @link http://jsfiddle.net/5wPQa/2/
	 */
	(function() {

		// Cache the row containing the info-boxes
		const infoWrap = $('.section-info .row');
		// Cache slider
		const slideEffect = $('.sliding-hover-effect');
		// Cache info boxes and get the first box and reset
		const infoBoxes = infoWrap.children();
		const firstInfoBox = infoWrap.children('.info-box-wrapper:first-child');
		const left = firstInfoBox.parent().position().left; // 0
		let width = firstInfoBox.width();

		// Log values to console
		console.log(left, width);

		// Add a new element for slider
		infoWrap.append('<div class="sliding-hover-effect"></div>');

		// Set initial slider position
		slideEffect.css({'left' : left, 'width' : width});

		// Slide effect animation
		infoBoxes.mouseenter(function() {
			let left = $(this).parent().position().left;
			let width = $(this).width();

			slideEffect.stop().animate({
				'left' : left,
				'width' : width
			});
		});

	})();

});