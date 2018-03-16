/*
 * Lead Generation Landing Page Scripts
 * Author: Vanessa Coles
 * Author URL: http://vcoles.com
 * License:
 */

'use_strict';

// jQuery plugins here
$(document).ready(function() {

	// Sticky navigation
	(function() {
		const navigation = $('.navigation');
		const topBar = $('.top-bar');
		let topBarHeight = topBar.outerHeight();

		$(window).scroll(function() {
			if ($(this).scrollTop() > topBarHeight) {
				navigation.addClass('fixed-nav');
			} else {
				navigation.removeClass('fixed-nav');
			}
		});
	})();

	// Back to top button
	(function() {
		const backToTop = $('.back-to-top');
		let offset = 300;
		let duration = 500;

		// Show/hide the button
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				backToTop.fadeIn(duration);
			} else {
				backToTop.fadeOut(duration);
			}
		});

		// Animate scroll to top
		backToTop.click(function() {
			$('html, body').animate({scrollTop: 0}, 600);
			return false;
		});
	})();

	// Smooth scroll to anchor links
	let scrollLink = new SmoothScroll('a[href*="#"], [data-scroll]', {
		speed: 600,
		offset: 75
	});

	/*
	 * Info box sliding hover effect
	 * Inspired by @link http://jsfiddle.net/5wPQa/2/
	 */

	/*
	(function() {
		// Cache info boxes container and add slider element
		const infoWrap = $('.section-info .row');
		infoWrap.append('<div class="slider"></div>');

		const slider = $('.slider');

		// Cache infoboxes
		const infoBoxes = infoWrap.children(); // $('.info-box-wrapper')
		const firstInfoBox = infoBoxes.first();

		// Get the initial position
		let left = firstInfoBox.position().left; // 0
		let width = firstInfoBox.width();

		// Set initial slider position
		slider.css({'left' : left, 'width' : width});

		// Slide effect animation
		infoBoxes.mouseenter(function() {
			let left = $(this).position().left;
			let width = $(this).width();

			slider.stop().animate({
				'left' : left,
				'width' : width
			});
		});

	})();
	*/

});