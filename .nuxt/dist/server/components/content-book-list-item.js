exports.ids = [7];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earphone.5af43fe.png";

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/BookListItem.vue?vue&type=template&id=14663f2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flex relative bg-primary mb-6 p-4 rounded-lg"},[_vm._ssrNode("<div class=\"w-24 mr-2 flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(72)("./" + (_vm.book.src))))+(_vm._ssrAttr("alt",_vm.book.alt))+"></div> <div class=\"flex-grow-1\"><h3 class=\"mb-3 font-medium text-base\">"+_vm._ssrEscape(_vm._s(_vm.book.title))+"</h3> <ul><li class=\"mb-1\">"+_vm._ssrEscape("作者: "+_vm._s(_vm.book.author))+"</li> <li class=\"mb-1\">"+_vm._ssrEscape("出版社: "+_vm._s(_vm.book.publisher))+"</li> <li class=\"mb-1\">"+_vm._ssrEscape("出版日期: "+_vm._s(_vm.book.publicationDate))+"</li></ul> <span class=\"absolute right-2 bottom-2 text-gray-order\">"+_vm._ssrEscape("下載量 :"+_vm._s(_vm.book.download))+"</span></div> "),_c('NuxtLink',{staticClass:"block absolute top-2.5 right-2 w-6",attrs:{"to":("/content/media/" + (_vm.book.id))}},[_c('img',{attrs:{"src":__webpack_require__(113),"alt":""}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content/BookListItem.vue?vue&type=template&id=14663f2a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/BookListItem.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BookListItemvue_type_script_lang_js_ = ({
  name: 'BookListItem',
  props: {
    book: {
      type: Object,

      default() {
        return {
          id: 0,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
          src: '~/assets/img/sampleBook.jpg',
          alt: 'book'
        };
      }

    }
  }
});
// CONCATENATED MODULE: ./components/content/BookListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_BookListItemvue_type_script_lang_js_ = (BookListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content/BookListItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_BookListItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3fbedabc"
  
)

/* harmony default export */ var BookListItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tkb.0c425cc.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.2fbb8d0.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-star.57cd018.jpeg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-btn-decoration.bb13794.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.df3bca8.jpg";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag-title.c30faac.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.jpeg": 28,
	"./account-bg.jpg": 29,
	"./banner.jpg": 70,
	"./bg-star.jpeg": 68,
	"./sampleBook.jpg": 73,
	"./tag-title.png": 71,
	"./test-btn-decoration.png": 69,
	"./tkb.png": 66,
	"./user.png": 67
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
webpackContext.id = 72;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sampleBook.47efd69.jpg";

/***/ })

};;
//# sourceMappingURL=content-book-list-item.js.map