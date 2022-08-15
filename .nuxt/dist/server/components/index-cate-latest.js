exports.ids = [22];
exports.modules = {

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("367cd6d2", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateLatest_vue_vue_type_style_index_0_id_1ac32e70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateLatest_vue_vue_type_style_index_0_id_1ac32e70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateLatest_vue_vue_type_style_index_0_id_1ac32e70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateLatest_vue_vue_type_style_index_0_id_1ac32e70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateLatest_vue_vue_type_style_index_0_id_1ac32e70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(69);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.title[data-v-1ac32e70]{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  margin-bottom:1rem;\n  width:5rem;\n  text-align:center;\n  font-weight:500;\n  line-height:2rem\n}\n.card__img[data-v-1ac32e70]{\n  width:112px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateLatest.vue?vue&type=template&id=1ac32e70&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"mt-9 mb-13"},[_vm._ssrNode((_vm._ssrList((_vm.books),function(subCate){return ("<section data-v-1ac32e70><h2 class=\"title\" data-v-1ac32e70>"+_vm._ssrEscape(_vm._s(subCate.cate))+"</h2> <ul class=\"\n        flex\n        gap-4\n        mb-10\n        px-6\n        overflow-x-auto overflow-y-hidden\n        no-scrollbar\n      \" data-v-1ac32e70>"+(_vm._ssrList((subCate.books),function(book){return ("<li data-v-1ac32e70><div class=\"card__img mb-2 rounded\" data-v-1ac32e70><img"+(_vm._ssrAttr("src",__webpack_require__(70)("./" + (book.src))))+" class=\"w-full h-auto\" data-v-1ac32e70></div> <h3 class=\"mb-2 text-center text-base\" data-v-1ac32e70>"+_vm._ssrEscape(_vm._s(book.title))+"</h3> <p class=\"line-clamp-3\" data-v-1ac32e70>"+_vm._ssrEscape(_vm._s(book.intro))+"</p></li>")}))+"</ul></section>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/CateLatest.vue?vue&type=template&id=1ac32e70&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateLatest.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var CateLatestvue_type_script_lang_js_ = ({
  name: 'CateLatest',

  data() {
    return {
      books: [{
        title: 'week',
        cate: '本周',
        books: [{
          bookId: 1,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 2,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 3,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 4,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容是內容是內容'
        }]
      }, {
        title: 'latest',
        cate: '近期',
        books: [{
          bookId: 5,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 6,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 7,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }, {
          bookId: 8,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: '素養人才',
          intro: '我是內容我是內容我是內容我是內容我是內容我是內容'
        }]
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/index/CateLatest.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_CateLatestvue_type_script_lang_js_ = (CateLatestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/index/CateLatest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_CateLatestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ac32e70",
  "d79bf8c2"
  
)

/* harmony default export */ var CateLatest = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=index-cate-latest.js.map