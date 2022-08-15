exports.ids = [22];
exports.modules = {

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4bfbeeb4", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateHit_vue_vue_type_style_index_0_id_4bc8702c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateHit_vue_vue_type_style_index_0_id_4bc8702c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateHit_vue_vue_type_style_index_0_id_4bc8702c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateHit_vue_vue_type_style_index_0_id_4bc8702c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CateHit_vue_vue_type_style_index_0_id_4bc8702c_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.slide_item[data-v-4bc8702c]{\n  margin-right:10%;\n  margin-left:10%;\n  position:relative;\n  width:40%;\n  flex-shrink:0;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  padding:0.625rem;\n  padding-top:1rem;\n  --tw-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-property:transform;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateHit.vue?vue&type=template&id=4bc8702c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-10"},[_vm._ssrNode("<h2 class=\"\n      w-fit\n      m-auto\n      mb-4\n      pb-1\n      text-base\n      font-medium\n      border-b-4 border-solid border-third\n    \" data-v-4bc8702c>\n    熱門排行\n  </h2> "),_vm._ssrNode("<div class=\"w-full py-4 overflow-hidden\" data-v-4bc8702c>","</div>",[_c('ul',{directives:[{name:"drag",rawName:"v-drag:x",arg:"x"}],ref:"slide",staticClass:"slide flex left-1/5",on:{"mousedown":_vm.handleMouseDown}},[_vm._ssrNode((_vm._ssrList((_vm.books),function(book,index){return ("<li"+(_vm._ssrClass(null,[
          index === _vm.currentIndex && 'transform scale-110',
          'slide_item' ]))+" data-v-4bc8702c><div class=\"w-28 m-auto\" data-v-4bc8702c><img"+(_vm._ssrAttr("src",__webpack_require__(72)("./" + (book.imgSrc))))+" class=\"shadow-sm\" data-v-4bc8702c></div> <h3 class=\"mt-4 mb-2 text-center\" data-v-4bc8702c>"+_vm._ssrEscape(_vm._s(book.name)+_vm._s(index))+"</h3> <p class=\"mb-4\" data-v-4bc8702c>"+_vm._ssrEscape(_vm._s(book.desc))+"</p> <span class=\"text-gray-400 text-xs\" data-v-4bc8702c>"+_vm._ssrEscape("\n          觀看人數："+_vm._s(book.download)+"\n        ")+"</span></li>")})))])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/CateHit.vue?vue&type=template&id=4bc8702c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/CateHit.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CateHitvue_type_script_lang_js_ = ({
  name: 'CateHit',
  props: {
    books: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      startPos: 0,
      endPos: 0,
      currentIndex: 0,
      isDragging: false
    };
  },

  mounted() {
    window.addEventListener('mouseup', this.handleDragEnd);
  },

  beforeDestroy() {
    window.removeEventListener('mouseup', this.handleDragEnd);
  },

  methods: {
    getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    },

    handleMouseDown(event) {
      this.startPos = this.getPositionX(event);
      this.isDragging = true;
    },

    handleDragEnd(event) {
      this.endPos = this.getPositionX(event);
      const moveby = this.endPos - this.startPos;
      this.isDragging = false;

      if (Math.abs(moveby) > window.innerWidth / 3) {
        if (moveby > 0 && this.currentIndex) this.currentIndex--;else if (moveby < 0 && this.currentIndex < this.books.length - 1) this.currentIndex++;
      }

      this.$refs.slide.style.left = `${this.currentIndex * -60 + 20}%`; // 60 為 3/5 ，即為一個 slide item 的寬度},
    }

  }
});
// CONCATENATED MODULE: ./components/index/CateHit.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_CateHitvue_type_script_lang_js_ = (CateHitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/index/CateHit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_CateHitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bc8702c",
  "4b60f0aa"
  
)

/* harmony default export */ var CateHit = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=index-cate-hit.js.map