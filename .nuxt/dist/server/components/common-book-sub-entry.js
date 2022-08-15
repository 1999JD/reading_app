exports.ids = [5];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BookSubEntry.vue?vue&type=template&id=e0ad56dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pl-6 whitespace-nowrap shadow-md"},[_vm._ssrNode((_vm._ssrList((_vm.subEntries),function(menu){return ("<div data-v-e0ad56dc><div"+(_vm._ssrClass(null,[
        _vm.$route.name === 'index' ? 'py-3' : 'py-1.5',
        'selectbar__wrap' ]))+" data-v-e0ad56dc><h3 class=\"selectbar__title\" data-v-e0ad56dc>"+_vm._ssrEscape(_vm._s(menu.cateCH))+"</h3> <div class=\"selectbar__list overflow-x-scroll no-scrollbar\" data-v-e0ad56dc>"+(_vm._ssrList((menu.items),function(entry){return ("<a href=\"#\""+(_vm._ssrClass(null,[
            entry.title === _vm.conditions[menu.cate] && 'active',
            'selectbar__list__item' ]))+" data-v-e0ad56dc>"+_vm._ssrEscape("\n          "+_vm._s(entry.title)+"\n        ")+"</a>")}))+"</div></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/BookSubEntry.vue?vue&type=template&id=e0ad56dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BookSubEntry.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BookSubEntryvue_type_script_lang_js_ = ({
  name: 'SubEntries',

  data() {
    return {
      subEntries: [{
        cate: 'grade',
        cateCH: '年級',
        items: [{
          title: '國小',
          to: './'
        }, {
          title: '國中',
          to: './'
        }, {
          title: '高中',
          to: './'
        }]
      }, {
        cate: 'field',
        cateCH: '領域',
        items: [{
          title: '全部',
          to: './'
        }, {
          title: '國文',
          to: './'
        }, {
          title: '英文',
          to: './'
        }, {
          title: '數學',
          to: './'
        }, {
          title: '社會',
          to: './'
        }, {
          title: '自然科學',
          to: './'
        }]
      }],
      conditions: {}
    };
  },

  created() {
    const subEntries = this.subEntries;
    const newQuery = { ...this.$route.query
    };

    for (const element of subEntries) {
      if (!Object.keys(newQuery).includes(element.cate)) {
        // 如果沒有 就塞進去
        newQuery[element.cate] = element.items[0].title;
        continue;
      } // 如果有，進一步檢查值是否正確


      const hasTitle = element.items.findIndex(itemobj => itemobj.title === newQuery[element.cate]);
      if (hasTitle === -1) // 如果沒有這個值，就塞進去
        newQuery[element.cate] = element.items[0].title;
    }

    for (const queryKey of Object.keys(newQuery)) {
      const hasKey = subEntries.findIndex(element => {
        return element.cate === queryKey;
      });
      if (hasKey === -1) delete newQuery[queryKey];
    }

    this.$router.replace({
      query: newQuery
    }).then(() => {
      this.conditions = newQuery;
    }).catch(() => {
      this.conditions = newQuery;
    });
  },

  methods: {
    handleSelect(cate, item) {
      if (this.conditions[cate] !== item) this.conditions[cate] = item;
      this.$router.replace({
        query: { ...this.conditions
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/common/BookSubEntry.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_BookSubEntryvue_type_script_lang_js_ = (BookSubEntryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/BookSubEntry.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_BookSubEntryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e0ad56dc",
  "4337bf23"
  
)

/* harmony default export */ var BookSubEntry = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1bf2c86e", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.selectbar__wrap[data-v-e0ad56dc]{\n  display:flex;\n  align-items:center\n}\n.selectbar__title[data-v-e0ad56dc]{\n  margin-right:1.5rem;\n  font-weight:500\n}\n.selectbar__list[data-v-e0ad56dc]{\n  display:flex;\n  flex-grow:1\n}\n.selectbar__list__item[data-v-e0ad56dc]{\n  margin-right:1rem;\n  display:block;\n  flex-shrink:0;\n  border-radius:0.75rem;\n  padding-left:0.625rem;\n  padding-right:0.625rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  text-align:center\n}\n.active[data-v-e0ad56dc]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=common-book-sub-entry.js.map