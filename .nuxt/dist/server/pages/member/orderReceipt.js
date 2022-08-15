exports.ids = [47,15,27];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member/ReceiptTitle.vue?vue&type=template&id=58b5ca22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('legend',{staticClass:"flex items-center mb-4"},[_vm._ssrNode("<div class=\"w-6 mr-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt></div> "),_vm._ssrNode("<h3 class=\"text-base font-medium\">","</h3>",[_vm._t("default")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/member/ReceiptTitle.vue?vue&type=template&id=58b5ca22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member/ReceiptTitle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ReceiptTitlevue_type_script_lang_js_ = ({
  name: 'RectiptTitle'
});
// CONCATENATED MODULE: ./components/member/ReceiptTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_ReceiptTitlevue_type_script_lang_js_ = (ReceiptTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/member/ReceiptTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_ReceiptTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c2b1a8e"
  
)

/* harmony default export */ var ReceiptTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/SelectBox.vue?vue&type=template&id=4d5f57a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<button class=\"\n      block\n      relative\n      w-full\n      py-2.5\n      pl-4\n      pr-7\n      bg-white\n      text-left\n      border border-gray-300\n      rounded\n    \"><p"+(_vm._ssrClass(null,[!_vm.hasChosen && 'text-gray-500', 'element']))+">"+_vm._ssrEscape("\n      "+_vm._s(_vm.hasChosen ? _vm.selectValue : _vm.placeholder)+"\n    ")+"</p> <div class=\"absolute top-2 right-2 w-5 h-5\"><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt class=\"element\"></div></button> <ul class=\"\n      absolute\n      top-over\n      w-full\n      py-2\n      px-4\n      bg-white\n      rounded\n      shadow-sm\n      overflow-hidden\n    \""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+">"+(_vm._ssrList((_vm.options),function(option,index){return ("<li"+(_vm._ssrClass(null,[index !== _vm.options.length - 1 && ' border-b ']))+"><label"+(_vm._ssrAttr("for",option.label))+" class=\"\n          element\n          block\n          w-full\n          px-1\n          py-2\n          rounded\n          cursor-pointer\n          hover:bg-yellow hover:text-white\n        \">"+_vm._ssrEscape(_vm._s(option.label))+"</label> <input"+(_vm._ssrAttr("id",option.label))+" type=\"radio\" name=\"platform\""+(_vm._ssrAttr("value",option.input))+" class=\"hidden\"></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content/SelectBox.vue?vue&type=template&id=4d5f57a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/SelectBox.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SelectBoxvue_type_script_lang_js_ = ({
  name: 'SelectBox',
  props: {
    name: {
      type: String,
      default: 'address'
    },
    placeholder: {
      type: String,
      default: '點擊展開選擇'
    },
    selectValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      show: false,
      hasChosen: false,
      focus: false
    };
  },

  mounted() {
    document.addEventListener('mousedown', event => {
      if (event.target.classList.contains('element')) return;
      this.show = false;
    });
  },

  methods: {
    handleInputSelect(value) {
      this.$emit('input', value);
      this.show = false;
      this.hasChosen = true;
    },

    handleClickButton() {
      this.show = !this.show;
    }

  }
});
// CONCATENATED MODULE: ./components/content/SelectBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_SelectBoxvue_type_script_lang_js_ = (SelectBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content/SelectBox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_SelectBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f1db83d"
  
)

/* harmony default export */ var SelectBox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("36972f38", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderReceipt_vue_vue_type_style_index_0_id_35f4f726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderReceipt_vue_vue_type_style_index_0_id_35f4f726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderReceipt_vue_vue_type_style_index_0_id_35f4f726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderReceipt_vue_vue_type_style_index_0_id_35f4f726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderReceipt_vue_vue_type_style_index_0_id_35f4f726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\nlabel span[data-v-35f4f726]{\n  margin-bottom:0.25rem;\n  display:block\n}\ninput[type=email][data-v-35f4f726], input[type=number][data-v-35f4f726], input[type=text][data-v-35f4f726]{\n  width:100%;\n  border-radius:0.25rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/orderReceipt.vue?vue&type=template&id=35f4f726&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-8 mb-32 mx-6 px-6 py-5"},[_vm._ssrNode("<form data-v-35f4f726>","</form>",[_vm._ssrNode("<fieldset class=\"mb-6\" data-v-35f4f726>","</fieldset>",[_c('MemberReceiptTitle',[_vm._v(" 訂閱方案 ")]),_vm._ssrNode(" <label class=\"flex items-center mb-4\" data-v-35f4f726><input type=\"radio\" name=\"plan\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 月訂閱：150元（每月自動扣款） </span></label> <label class=\"flex items-center mb-4\" data-v-35f4f726><input type=\"radio\" name=\"plan\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 季訂閱：800元（每3個月自動扣款） </span></label> <label class=\"flex mb-6\" data-v-35f4f726><input type=\"radio\" name=\"plan\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 年訂閱：1,500元（12個月一次付清） </span></label> <h4 class=\"mb-3\" data-v-35f4f726>用戶類型</h4> <div class=\"flex\" data-v-35f4f726><label class=\"flex items-center mb-4 mr-6\" data-v-35f4f726><input type=\"radio\" name=\"identity\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 個人 </span></label> <label class=\"flex items-center mb-4\" data-v-35f4f726><input type=\"radio\" name=\"identity\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 公司 </span></label></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<fieldset data-v-35f4f726>","</fieldset>",[_c('MemberReceiptTitle',[_vm._v("訂購人資訊 ")]),_vm._ssrNode(" <label class=\"checkout__wrap\" data-v-35f4f726><span class=\"checkout__label\" data-v-35f4f726>會員帳號</span> <input type=\"text\" placeholder=\"登入本會員使用的帳號\" class=\"checkout__input\" data-v-35f4f726></label> <label class=\"checkout__wrap\" data-v-35f4f726><span class=\"checkout__label\" data-v-35f4f726>姓名</span> <input type=\"text\" placeholder=\"林大一\" class=\"checkout__input\" data-v-35f4f726></label> <label class=\"checkout__wrap\" data-v-35f4f726><span class=\"checkout__label\" data-v-35f4f726> 手機 </span> <input type=\"text\" placeholder=\"0912345678\" class=\"checkout__input\" data-v-35f4f726></label> <label class=\"block mb-10\" data-v-35f4f726><span data-v-35f4f726>信箱</span> <input type=\"email\" placeholder=\"sample@reading.com.tw\" class=\"checkout__input\" data-v-35f4f726></label>")],2),_vm._ssrNode(" "),_vm._ssrNode("<fieldset data-v-35f4f726>","</fieldset>",[_c('MemberReceiptTitle',[_vm._v("發票資訊 ")]),_vm._ssrNode(" <div class=\"grid grid-cols-2 mb-4\" data-v-35f4f726><label class=\"flex items-center\" data-v-35f4f726><input type=\"radio\" name=\"receipt\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726>個人(兩聯式)</span></label> <label class=\"flex items-center\" data-v-35f4f726><input type=\"radio\" name=\"receipt\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726> 公司(三聯式) </span></label></div> <label class=\"checkout__wrap\" data-v-35f4f726><span class=\"checkout__label\" data-v-35f4f726>姓名或公司名稱</span> <input type=\"text\" class=\"checkout__input\" data-v-35f4f726></label> <label class=\"checkout__wrap\" data-v-35f4f726><span class=\"checkout__label\" data-v-35f4f726>統一編號</span> <input type=\"text\" class=\"checkout__input\" data-v-35f4f726></label> <h4 class=\"mb-4\" data-v-35f4f726>發票寄送地址</h4> <div class=\"grid grid-cols-2\" data-v-35f4f726><label class=\"flex items-center mb-4\" data-v-35f4f726><input type=\"radio\" name=\"address\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726>台灣</span></label> <label class=\"flex\" data-v-35f4f726><input type=\"radio\" name=\"address\" class=\"checkout__radio\" data-v-35f4f726> <span data-v-35f4f726>非台灣</span></label></div> "),_vm._ssrNode("<div class=\"grid grid-cols-2 gap-x-7 mb-4 justify-items-stretch\" data-v-35f4f726>","</div>",[_vm._ssrNode("<label class=\"block\" data-v-35f4f726>","</label>",[_vm._ssrNode("<span class=\"checkout__label\" data-v-35f4f726>縣市選擇</span> "),_c('ContentSelectBox',{attrs:{"placeholder":"請選擇","select-value":_vm.countyValue,"options":_vm.countyOptions},model:{value:(_vm.countyValue),callback:function ($$v) {_vm.countyValue=$$v},expression:"countyValue"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\" data-v-35f4f726>","</label>",[_vm._ssrNode("<span class=\"checkout__label\" data-v-35f4f726>鄉鎮選擇</span> "),_c('ContentSelectBox',{attrs:{"placeholder":"請選擇","select-value":_vm.districtValue,"options":_vm.districtOptions},model:{value:(_vm.districtValue),callback:function ($$v) {_vm.districtValue=$$v},expression:"districtValue"}})],2)],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"輸入詳細地址\" class=\"checkout__input\" data-v-35f4f726>")],2),_vm._ssrNode(" <p class=\"mb-12 text-tangerine text-center leading-normal\" data-v-35f4f726>\n      *依統一發票使用辦法規定：個人發票一經開立，不得任意更改或改開公司戶發票。\n    </p> <button class=\"\n        block\n        w-44\n        mx-auto\n        mb-5\n        py-2.5\n        bg-yellow\n        rounded-2xl\n        shadow-sm\n      \" data-v-35f4f726>\n      立即付款\n    </button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/orderReceipt.vue?vue&type=template&id=35f4f726&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/orderReceipt.vue?vue&type=script&lang=js&
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
/* harmony default export */ var orderReceiptvue_type_script_lang_js_ = ({
  name: 'SubReceipt',

  data() {
    return {
      countyValue: '',
      countyOptions: [{
        label: '高雄',
        input: '高雄'
      }, {
        label: '台北',
        input: '台北'
      }],
      districtValue: '',
      districtOptions: [{
        label: '新莊',
        input: '新莊'
      }, {
        label: '三重',
        input: '三重'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/member/orderReceipt.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_orderReceiptvue_type_script_lang_js_ = (orderReceiptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/member/orderReceipt.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_orderReceiptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "35f4f726",
  "301448e7"
  
)

/* harmony default export */ var orderReceipt = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberReceiptTitle: __webpack_require__(108).default,ContentSelectBox: __webpack_require__(109).default})


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjI4ODMgOS4yOTAwNkMxNi44OTgzIDguOTAwMDYgMTYuMjY4MyA4LjkwMDA2IDE1Ljg3ODMgOS4yOTAwNkwxMS45OTgzIDEzLjE3MDFMOC4xMTgyNyA5LjI5MDA2QzcuNzI4MjcgOC45MDAwNiA3LjA5ODI3IDguOTAwMDYgNi43MDgyNyA5LjI5MDA2QzYuMzE4MjcgOS42ODAwNiA2LjMxODI3IDEwLjMxMDEgNi43MDgyNyAxMC43MDAxTDExLjI5ODMgMTUuMjkwMUMxMS42ODgzIDE1LjY4MDEgMTIuMzE4MyAxNS42ODAxIDEyLjcwODMgMTUuMjkwMUwxNy4yOTgzIDEwLjcwMDFDMTcuNjc4MyAxMC4zMjAxIDE3LjY3ODMgOS42ODAwNiAxNy4yODgzIDkuMjkwMDZaIiBmaWxsPSIjMzYzNjM2Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDNIN0M1LjkgMyA1LjAxIDMuOSA1LjAxIDVMNSAyMUwxMiAxOEwxOSAyMVY1QzE5IDMuOSAxOC4xIDMgMTcgM1oiIGZpbGw9IiNFODc0NkUiLz4KPC9zdmc+Cg=="

/***/ })

};;
//# sourceMappingURL=orderReceipt.js.map