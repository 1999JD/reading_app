exports.ids = [23];
exports.modules = {

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateRecommend.vue?vue&type=template&id=0afd9abd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"m-6"},[_vm._ssrNode((_vm._ssrList((_vm.books),function(book){return ("<li class=\"flex gap-3 mb-3\"><div class=\"w-24 flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(70)("./" + (book.imgSrc))))+" class=\"max-w-full h-auto rounded\"></div> <div"+(_vm._ssrClass(null,[
        book.bookId === _vm.books.length - 1
          ? ''
          : 'border-solid border-b-2' ]))+"><h3 class=\"mb-1 text- font-medium\">"+_vm._ssrEscape(_vm._s(book.name))+"</h3> <p class=\"mb-2 line-clamp-3\">"+_vm._ssrEscape(_vm._s(book.desc))+"</p> <div class=\"text-gray-subInfo text-xs\"><p class=\"mb-2\">"+_vm._ssrEscape(_vm._s(book.author))+"</p> <p class=\"mb-3\">"+_vm._ssrEscape(_vm._s(book.publishTime))+"</p></div></div></li>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/CateRecommend.vue?vue&type=template&id=0afd9abd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateRecommend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CateRecommendvue_type_script_lang_js_ = ({
  name: 'CateRecommend',
  props: {
    books: {
      type: Array,

      default() {
        return [];
      }

    }
  }
});
// CONCATENATED MODULE: ./components/index/CateRecommend.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_CateRecommendvue_type_script_lang_js_ = (CateRecommendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/index/CateRecommend.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_CateRecommendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03c10854"
  
)

/* harmony default export */ var CateRecommend = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tkb.0c425cc.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.2fbb8d0.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-star.57cd018.jpeg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-btn-decoration.bb13794.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.df3bca8.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag-title.c30faac.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.jpeg": 28,
	"./account-bg.jpg": 29,
	"./banner.jpg": 68,
	"./bg-star.jpeg": 66,
	"./sampleBook.jpg": 71,
	"./tag-title.png": 69,
	"./test-btn-decoration.png": 67,
	"./tkb.png": 64,
	"./user.png": 65
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 70;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sampleBook.47efd69.jpg";

/***/ })

};;
//# sourceMappingURL=index-cate-recommend.js.map