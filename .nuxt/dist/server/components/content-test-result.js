exports.ids = [18];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("89c15ff6", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestResult_vue_vue_type_style_index_0_id_0520fbce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestResult_vue_vue_type_style_index_0_id_0520fbce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestResult_vue_vue_type_style_index_0_id_0520fbce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestResult_vue_vue_type_style_index_0_id_0520fbce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestResult_vue_vue_type_style_index_0_id_0520fbce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(66);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n[data-v-0520fbce]:host{\n  --percent:0;\n  --maskStatus:bg-white\n}\n.test__question__result[data-v-0520fbce]{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width:16.25rem;\n  height:17.25rem;\n  background-size:cover;\n  background-position:center;\n  background-repeat:no-repeat\n}\n.turntable__outside[data-v-0520fbce]{\n  overflow:hidden;\n  border-radius:9999px;\n  -webkit-clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%);\n          clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%)\n}\n.turntable__outside[data-v-0520fbce]:before{\n  content:\"\";\n  position:absolute;\n  z-index:10;\n  display:block;\n  height:100%;\n  width:50%;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity));\n  transform-origin:right center;\n  transform:var(--percent)\n}\n.turntable__outside[data-v-0520fbce]:after{\n  content:\"\";\n  transform-origin:bottom center;\n  transform:rotate(90deg);\n  background-color:var(--maskStatus);\n  display:block;\n  height:50%\n}\n.turntable__inside[data-v-0520fbce]{\n  width:94px;\n  height:94px;\n  background-color:#fffbd8;\n  color:#976500\n}\n.turntable__center-position[data-v-0520fbce]{\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  margin:auto\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/TestResult.vue?vue&type=template&id=0520fbce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"test__question__wrap"},[_vm._ssrNode("<div class=\"test__question__avatar\" data-v-0520fbce><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt data-v-0520fbce></div> <div class=\"test__question__bubble test__question__result\" data-v-0520fbce><div class=\"relative w-35 h-35 mt-6 mx-auto mb-8 bg-white rounded-full\" data-v-0520fbce><div class=\"turntable__outside turntable__center-position w-31 h-31\""+(_vm._ssrStyle(null,{
          '--percent': _vm.percent,
          '--maskStatus': _vm.maskStatus,
          'clip-path': _vm.outsideStatus,
        }, null))+" data-v-0520fbce></div> <div class=\"\n          turntable__inside turntable__center-position\n          z-30\n          flex flex-col\n          justify-center\n          items-center\n          bg-yellow\n          rounded-full\n        \" data-v-0520fbce><p class=\"text-4xl\" data-v-0520fbce>"+_vm._ssrEscape(_vm._s(_vm.score))+"</p> <span class=\"text-base\" data-v-0520fbce>分</span></div></div> <p class=\"text-2xl text-white text-center font-bold\" data-v-0520fbce>"+_vm._ssrEscape("\n      共答對"+_vm._s(_vm.count)+"題\n    ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content/TestResult.vue?vue&type=template&id=0520fbce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/TestResult.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TestResultvue_type_script_lang_js_ = ({
  name: 'TestResult',
  props: {
    total: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    percent() {
      return `rotate(${360 / this.total * this.count}deg)`;
    },

    maskStatus() {
      return 360 / this.total * this.count > 180 ? '#FFC651' : 'white';
    },

    outsideStatus() {
      return 360 / this.total * this.count > 180 ? 'unset' : 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)';
    },

    score() {
      return 100 / this.total * this.count;
    }

  }
});
// CONCATENATED MODULE: ./components/content/TestResult.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_TestResultvue_type_script_lang_js_ = (TestResultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content/TestResult.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_TestResultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0520fbce",
  "5b949f31"
  
)

/* harmony default export */ var TestResult = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tkb.0c425cc.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-star.57cd018.jpeg";

/***/ })

};;
//# sourceMappingURL=content-test-result.js.map