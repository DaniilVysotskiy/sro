import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
import select2 from 'select2';

$(() => {
	function initModals() {
		// Show modal
		$('[data-link="modal"]').on('click', function () {
			const link = $(this).attr('href') || $(this).data('href');
			const modal = $(link);

			$(modal).addClass('active');
		});
		// Hide modal on cross click
		$('.modal').on('click', '.close', function () {
			$(this).closest('.modal').removeClass('active');
		});
		// Hide modal on empty place click
		$(document).on('click', function (e) {
			const target = e.target;

			if ($(target).hasClass('modal')) {
				$('.modal').removeClass('active');
			}
		});
	}

	function megaMenusScrollHandle() {
		const yOffset = -$(window).scrollTop() + 15;
		const megaMenus = $('.js-mega-menu');

		$.each(megaMenus, (idx, elem) => {
			if ($(elem).css('position') === 'fixed') {
				$(elem).css('transform', 'translateY(' + yOffset + 'px)');
			}
		});
	}

	function initSliders() {
		$('.slider.single-item').slick({
			dots: true,
			infinite: false
		});

		$('.slider.items').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	function initSelect2() {
		$('#choose-city').select2({
			minimumResultsForSearch: Infinity
		});
	}

	function isMobile() {
		if ($(window).width() < 1140) {
			let touch = 'ontouchstart' in document.documentElement ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0;

			if (touch) { // remove all :hover stylesheets
				try { // prevent exception on browsers not supporting DOM styleSheets properly
					for (let si in document.styleSheets) {
						let styleSheet = document.styleSheets[si];
						if (!styleSheet.rules) { continue; }

						for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
							if (!styleSheet.rules[ri].selectorText) { continue; }

							if (styleSheet.rules[ri].selectorText.match(':hover')) {
								styleSheet.deleteRule(ri);
							}
						}
					}
				}catch (ex) {}
			}
			return true;
		} else {
			return false;
		}
	}

	function handleClickOnMenu() {
		$(this).toggleClass('active');
		$(this).children('.dropdown').toggle();
	}

	function dropdownToggleActivation() {
		if (isMobile()) {
			$('.hasDropdown').on('click', handleClickOnMenu);
		} else {
			$('.hasDropdown').off('click', handleClickOnMenu);
		}
	}


	$(document).ready(() => {
		svg4everybody();
		initModals();
		initSliders();
		initSelect2();
		dropdownToggleActivation();

		// let docWidth = document.documentElement.offsetWidth;

		// [].forEach.call(
		// 	document.querySelectorAll('*'),
		// 	function(el) {
		// 		if (el.offsetWidth > docWidth) {
		// 			console.log(el);
		// 		}
		// 	}
		// );

		$(window).on('scroll', megaMenusScrollHandle);
	});

});
