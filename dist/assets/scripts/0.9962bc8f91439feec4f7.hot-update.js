webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _slickCarousel = __webpack_require__(5);
	
	var _slickCarousel2 = _interopRequireDefault(_slickCarousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		function initModals() {
			console.log('modals inited');
			// Show modal
			(0, _jquery2.default)('[data-link="modal"]').on('click', function () {
				var link = (0, _jquery2.default)(this).attr('href') || (0, _jquery2.default)(this).data('href');
				var modal = (0, _jquery2.default)(link);
	
				(0, _jquery2.default)(modal).addClass('active');
			});
			// Hide modal on cross click
			(0, _jquery2.default)('.modal').on('click', '.close', function () {
				(0, _jquery2.default)(this).closest('.modal').removeClass('active');
			});
			// Hide modal on empty place click
			(0, _jquery2.default)(document).on('click', function (e) {
				var target = e.target;
	
				if ((0, _jquery2.default)(target).hasClass('modal')) {
					(0, _jquery2.default)('.modal').removeClass('active');
				}
			});
		}
	
		function megaMenusScrollHandle() {
			var yOffset = -(0, _jquery2.default)(window).scrollTop() + 15;
			var megaMenus = (0, _jquery2.default)('.js-mega-menu');
	
			_jquery2.default.each(megaMenus, function (idx, elem) {
				if ((0, _jquery2.default)(elem).css('position') === 'fixed') {
					(0, _jquery2.default)(elem).css('transform', 'translateY(' + yOffset + 'px)');
				}
			});
		}
	
		function initSliders() {
			(0, _jquery2.default)('.slider.single-item').slick({
				dots: true,
				infinite: false
			});
	
			(0, _jquery2.default)('.slider.items').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: true,
				infinite: false,
				prevArrow: '<button type="button" class="slick-prev slick-arrow--blue">Previous</button>'
			});
		}
	
		(0, _jquery2.default)(document).ready(function () {
			(0, _svg4everybody2.default)();
			initModals();
			initSliders();
			_slickCarousel2.default;
	
			(0, _jquery2.default)(window).on('scroll', megaMenusScrollHandle);
		});
	});

/***/ })
])
//# sourceMappingURL=0.9962bc8f91439feec4f7.hot-update.js.map