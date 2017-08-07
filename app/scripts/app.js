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
			if ($(elem).css('position') === 'fixed'){
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


	$(document).ready(() => {
		svg4everybody();
		initModals();
		initSliders();
		initSelect2();

		// var docWidth = document.documentElement.offsetWidth;

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
