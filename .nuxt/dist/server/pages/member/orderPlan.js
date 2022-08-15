exports.ids = [46];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("06db620a", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderPlan_vue_vue_type_style_index_0_id_40bd4fb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderPlan_vue_vue_type_style_index_0_id_40bd4fb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderPlan_vue_vue_type_style_index_0_id_40bd4fb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderPlan_vue_vue_type_style_index_0_id_40bd4fb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderPlan_vue_vue_type_style_index_0_id_40bd4fb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.title[data-v-40bd4fb2]:after,.title[data-v-40bd4fb2]:before{\n  content:\"\";\n  flex-grow:1;\n  height:2px;\n  background-color:#e8e8e8\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/orderPlan.vue?vue&type=template&id=40bd4fb2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"mt-6 mb-28 px-4"},[_vm._ssrNode("<div class=\"title flex items-center mb-5\" data-v-40bd4fb2><h2 class=\"px-3 text-center text-xl font-medium\" data-v-40bd4fb2>訂閱方案</h2></div> "),_vm._ssrNode("<ul class=\"pt-5 pb-4\" data-v-40bd4fb2>","</ul>",_vm._l((_vm.plans),function(plan){return _vm._ssrNode("<li class=\"\n        w-60\n        mx-auto\n        mb-6\n        text-center\n        rounded-lg\n        overflow-hidden\n        shadow-md\n      \" data-v-40bd4fb2>","</li>",[_vm._ssrNode("<div class=\"py-4 text-white\""+(_vm._ssrStyle(null,{ 'background-color': plan.bgColor }, null))+" data-v-40bd4fb2><h3 class=\"mb-4 text-xl\" data-v-40bd4fb2>"+_vm._ssrEscape(_vm._s(plan.title))+"</h3> <p class=\"text-3.5xl\" data-v-40bd4fb2>"+_vm._ssrEscape("\n          $"+_vm._s(plan.price)+"/")+"<span class=\"text-base\" data-v-40bd4fb2>"+_vm._ssrEscape(" "+_vm._s(plan.unit))+"</span></p></div> "),_vm._ssrNode("<div class=\"bg-white p-4 pb-6\" data-v-40bd4fb2>","</div>",[_vm._ssrNode("<p class=\"mb-4 leading-normal\" data-v-40bd4fb2>"+_vm._ssrEscape(_vm._s(plan.desc))+"</p> "),_c('NuxtLink',{staticClass:"block w-44 py-2.5 mx-auto bg-primary shadow-sm rounded-2xl",attrs:{"to":"/member/orderReceipt"}},[_vm._v("\n          訂閱\n        ")])],2)],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/orderPlan.vue?vue&type=template&id=40bd4fb2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/orderPlan.vue?vue&type=script&lang=js&
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
/* harmony default export */ var orderPlanvue_type_script_lang_js_ = ({
  name: 'Orders',

  data() {
    return {
      plans: [{
        title: '月訂閱',
        price: 150,
        unit: '月',
        desc: '原價$225。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
        bgColor: '#E8746E'
      }, {
        title: '季訂閱',
        price: 800,
        unit: '季',
        desc: '原價$900。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
        bgColor: '#FFC651'
      }, {
        title: '年訂閱',
        price: 1500,
        unit: '年',
        desc: '原價$2,200。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
        bgColor: '#6AD8D8'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/member/orderPlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_orderPlanvue_type_script_lang_js_ = (orderPlanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/member/orderPlan.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_orderPlanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "40bd4fb2",
  "4a895eec"
  
)

/* harmony default export */ var orderPlan = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=orderPlan.js.map