webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initModals() {
		//Show modal
		(0, _jquery2.default)('[data-link="modal"]').on('click', function () {
			var link = (0, _jquery2.default)(this).attr('href') || (0, _jquery2.default)(this).data('href');
			var modal = (0, _jquery2.default)(link);
	
			(0, _jquery2.default)(modal).addClass('active');
		});
		//Hide modal on cross click
		(0, _jquery2.default)('.modal').on('click', '.close', function () {
			(0, _jquery2.default)(this).closest('.modal').removeClass('active');
		});
		//Hide modal on empty place click
		(0, _jquery2.default)(document).on('click', function (e) {
			var target = e.target;
	
			if ((0, _jquery2.default)(target).hasClass('modal')) {
				(0, _jquery2.default)('.modal').removeClass('active');
			}
		});
	}
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		initModals();
	});

/***/ })
])
//# sourceMappingURL=0.03386777ef90b61f774c.hot-update.js.map