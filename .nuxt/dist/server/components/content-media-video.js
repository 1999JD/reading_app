exports.ids = [13,6];
exports.modules = {

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0888c8f3", content, true, context)
};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./exampleVideo.mp4": 205,
	"./exampleVideo2.mp4": 206
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
webpackContext.id = 204;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/exampleVideo.867b6ab.mp4";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/exampleVideo2.b16b5b2.mp4";

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVideo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.video-wrap{\n  width:366px;\n  height:214px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/MediaVideo.vue?vue&type=template&id=1b204764&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 mb-3"},[_vm._ssrNode("<div class=\"video-wrap mb-2.5\"><video controls=\"controls\" class=\"w-full h-full rounded-md\"><source"+(_vm._ssrAttr("src",__webpack_require__(204)("./" + _vm.fileName + ".mp4")))+"></video></div> "),_vm._ssrNode("<div class=\"flex justify-end\">","</div>",[_c('CommonStore',{staticClass:"w-7 mr-10",attrs:{"book":_vm.book},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var note = ref.note;
return [_c('span',{staticClass:"whitespace-nowrap"},[_vm._v(_vm._s(note))])]}}])}),_vm._ssrNode(" <button class=\"w-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+" class=\"m-auto\"> <span> 下載 </span></button>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content/MediaVideo.vue?vue&type=template&id=1b204764&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/MediaVideo.vue?vue&type=script&lang=js&
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

/* harmony default export */ var MediaVideovue_type_script_lang_js_ = ({
  name: 'Video',

  data() {
    return {
      fileName: 'exampleVideo',
      book: {
        bookId: 1,
        name: '素養人才',
        desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小容',
        author: '一路',
        publishTime: '2021-06-30',
        imgSrc: 'sampleBook.jpg',
        imgAlt: ''
      }
    };
  },

  created() {
    // 暫時的
    this.book.bookId = parseInt(this.$route.params.id);
  },

  methods: { ...Object(external_vuex_["mapActions"])(['handleAddCollection'])
  }
});
// CONCATENATED MODULE: ./components/content/MediaVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_MediaVideovue_type_script_lang_js_ = (MediaVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content/MediaVideo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_MediaVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5744cad9"
  
)

/* harmony default export */ var MediaVideo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonStore: __webpack_require__(88).default})


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjE4ODcgNS41MTcxNUwxMC4yMjE1IDQuOTQwNThMOC40NDgxIDEuMzQ1MjdDOC4zOTk2NiAxLjI0NjgzIDguMzE5OTggMS4xNjcxNCA4LjIyMTU0IDEuMTE4NzFDNy45NzQ2NiAwLjk5NjgzMiA3LjY3NDY2IDEuMDk4MzkgNy41NTEyMiAxLjM0NTI3TDUuNzc3NzkgNC45NDA1OEwxLjgxMDYgNS41MTcxNUMxLjcwMTIzIDUuNTMyNzcgMS42MDEyMyA1LjU4NDMzIDEuNTI0NjYgNS42NjI0NkMxLjQzMjEgNS43NTc1OSAxLjM4MTEgNS44ODU1OCAxLjM4Mjg2IDYuMDE4M0MxLjM4NDYxIDYuMTUxMDMgMS40Mzg5OSA2LjI3NzYyIDEuNTM0MDQgNi4zNzAyN0w0LjQwNDM1IDkuMTY4NzFMMy43MjYyMyAxMy4xMjAzQzMuNzEwMzIgMTMuMjEyMiAzLjcyMDUgMTMuMzA2NyAzLjc1NTU5IDEzLjM5MzJDMy43OTA2OCAxMy40Nzk2IDMuODQ5MjkgMTMuNTU0NSAzLjkyNDc3IDEzLjYwOTNDNC4wMDAyNSAxMy42NjQxIDQuMDg5NTggMTMuNjk2NyA0LjE4MjYzIDEzLjcwMzNDNC4yNzU2OCAxMy43MSA0LjM2ODczIDEzLjY5MDQgNC40NTEyMyAxMy42NDY4TDcuOTk5NjYgMTEuNzgxMkwxMS41NDgxIDEzLjY0NjhDMTEuNjQ1IDEzLjY5ODQgMTEuNzU3NSAxMy43MTU2IDExLjg2NTMgMTMuNjk2OEMxMi4xMzcyIDEzLjY1IDEyLjMyIDEzLjM5MjEgMTIuMjczMSAxMy4xMjAzTDExLjU5NSA5LjE2ODcxTDE0LjQ2NTMgNi4zNzAyN0MxNC41NDM0IDYuMjkzNzEgMTQuNTk1IDYuMTkzNzEgMTQuNjEwNiA2LjA4NDMzQzE0LjY1MjggNS44MTA4OSAxNC40NjIyIDUuNTU3NzcgMTQuMTg4NyA1LjUxNzE1WiIgZmlsbD0iI0VCNzUxMyIvPgo8L3N2Zz4K"

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM3NjkgNy41MzMzM0wxMi4zNDM2IDcuMTgzMzNMMTAuNzY4NiAzLjQ3NUMxMC40ODUyIDIuOCA5LjUxODU2IDIuOCA5LjIzNTIzIDMuNDc1TDcuNjYwMjIgNy4xOTE2N0wzLjYzNTIzIDcuNTMzMzNDMi45MDE4OSA3LjU5MTY3IDIuNjAxODkgOC41MDgzMyAzLjE2MDIyIDguOTkxNjZMNi4yMTg1NiAxMS42NDE3TDUuMzAxODkgMTUuNTc1QzUuMTM1MjMgMTYuMjkxNyA1LjkxMDIyIDE2Ljg1ODMgNi41NDM1NiAxNi40NzVMMTAuMDAxOSAxNC4zOTE3TDEzLjQ2MDIgMTYuNDgzM0MxNC4wOTM2IDE2Ljg2NjcgMTQuODY4NiAxNi4zIDE0LjcwMTkgMTUuNTgzM0wxMy43ODUyIDExLjY0MTdMMTYuODQzNiA4Ljk5MTY2QzE3LjQwMTkgOC41MDgzMyAxNy4xMTAyIDcuNTkxNjcgMTYuMzc2OSA3LjUzMzMzWk0xMC4wMDE5IDEyLjgzMzNMNi44Njg1NiAxNC43MjVMNy43MDE4OSAxMS4xNTgzTDQuOTM1MjMgOC43NTgzM0w4LjU4NTIzIDguNDQxNjdMMTAuMDAxOSA1LjA4MzMzTDExLjQyNjkgOC40NUwxNS4wNzY5IDguNzY2NjdMMTIuMzEwMiAxMS4xNjY3TDEzLjE0MzYgMTQuNzMzM0wxMC4wMDE5IDEyLjgzMzNaIiBmaWxsPSIjMzYzNjM2Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/download.cbd0992.svg";

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Store.vue?vue&type=template&id=5e7fb2d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isCollection)?_c('button',{on:{"click":function($event){return _vm.handleAddCollection(_vm.book)}}},[_vm._ssrNode("<span class=\"sr-only\"> 收藏 </span> <img"+(_vm._ssrAttr("src",__webpack_require__(73)))+"> "),_vm._t("default",null,{"note":_vm.note})],2):_c('button',{on:{"click":function($event){return _vm.handleDelCollection(_vm.book.bookId)}}},[_vm._ssrNode("<span class=\"sr-only\"> 取消收藏 </span> <img"+(_vm._ssrAttr("src",__webpack_require__(72)))+"> "),_vm._t("default",null,{"note":_vm.note})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Store.vue?vue&type=template&id=5e7fb2d2&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Store.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Storevue_type_script_lang_js_ = ({
  name: 'Store',
  props: {
    book: {
      type: Object,

      default() {
        return {
          bookId: 0
        };
      }

    }
  },
  computed: {
    isCollection() {
      return this.$store.getters.isCollection(this.book.bookId);
    },

    note() {
      return this.isCollection ? '取消' : '收藏';
    }

  },
  methods: { ...Object(external_vuex_["mapActions"])(['handleAddCollection', 'handleDelCollection'])
  }
});
// CONCATENATED MODULE: ./components/common/Store.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Storevue_type_script_lang_js_ = (Storevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/Store.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Storevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54d4f709"
  
)

/* harmony default export */ var Store = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=content-media-video.js.map