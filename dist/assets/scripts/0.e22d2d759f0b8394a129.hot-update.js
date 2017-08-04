webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
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
		function handleScroll(e) {
			console.log(e);
		}
		function initMegaMenu() {
			console.log('mega-menus inited');
			var megaMenus = (0, _jquery2.default)('.js-mega-menu');
	
			console.log(megaMenus);
			var scrolled = void 0;
			(0, _jquery2.default)(window).on('scroll', handleScroll);
		}
	
		(0, _jquery2.default)(document).ready(function () {
			(0, _svg4everybody2.default)();
			initModals();
			initMegaMenu();
		});
	});

/***/ })
])
//# sourceMappingURL=0.e22d2d759f0b8394a129.hot-update.js.map