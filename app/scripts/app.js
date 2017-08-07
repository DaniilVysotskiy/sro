import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';

$(() => {
	function initModals() {
		console.log('modals inited');
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
			prevArrow: '<button type="button" class="slick-prev slick-arrow--blue">Previous</button>'
		});
	}


	$(document).ready(() => {
		svg4everybody();
		initModals();
		initSliders();

		$(window).on('scroll', megaMenusScrollHandle);
	});

});
