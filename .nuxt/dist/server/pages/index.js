exports.ids = [41,5];
exports.modules = {

/***/ 107:
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
  
  var style0 = __webpack_require__(92)
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b8e6f0a2", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check.jpg": 197,
	"./location.jpg": 198,
	"./notebook.jpg": 199,
	"./subscribe.jpg": 200
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
webpackContext.id = 196;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.9f00bd8.jpg";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/location.27fe6fb.jpg";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/notebook.9978d54.jpg";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/subscribe.6a3dbf7.jpg";

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_463a3ce5_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_463a3ce5_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_463a3ce5_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_463a3ce5_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_463a3ce5_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.active[data-v-463a3ce5]:after{\n  content:\"\";\n  position:absolute;\n  bottom:-0.375rem;\n  left:0px;\n  height:0.25rem;\n  width:2rem;\n  border-radius:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(141, 141, 141, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=463a3ce5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"px-6 pt-3 bg-primary\" data-v-463a3ce5><div class=\"banner\" data-v-463a3ce5><img"+(_vm._ssrAttr("src",__webpack_require__(70)))+" data-v-463a3ce5></div></div> "),_vm._ssrNode("<nav class=\"box-border flex justify-evenly py-6 bg-primary\" data-v-463a3ce5>","</nav>",_vm._l((_vm.links),function(link){return _c('NuxtLink',{key:link.title,attrs:{"to":link.to}},[_c('div',{staticClass:"w-fist p-1 mx-auto mb-2 rounded-lg shadow-md bg-white"},[_c('div',{staticClass:"w-10"},[_c('img',{attrs:{"src":__webpack_require__(196)("./" + (link.src)),"alt":link.alt}})])]),_vm._v("\n      "+_vm._s(link.title)+"\n    ")])}),1),_vm._ssrNode(" <div class=\"flex justify-around py-3 bg-gray-100 shadow-md\" data-v-463a3ce5>"+(_vm._ssrList((_vm.mainEntries),function(entry){return ("<button type=\"button\""+(_vm._ssrClass(null,[entry.active && 'active', 'block relative w-8 text-center']))+" data-v-463a3ce5>"+_vm._ssrEscape("\n      "+_vm._s(entry.title)+"\n    ")+"</button>")}))+"</div> "),_c('CommonBookSubEntry'),_vm._ssrNode(" "),_c(_vm.show,{tag:"component",attrs:{"books":_vm.books}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=463a3ce5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Index',
  loading: true,

  data() {
    return {
      links: [{
        title: '線下活動',
        to: '/',
        src: 'location.jpg',
        alt: ''
      }, {
        title: 'TKB書城',
        to: '/',
        src: 'notebook.jpg',
        alt: ''
      }, {
        title: '訂閱方案',
        to: '/test',
        src: 'subscribe.jpg',
        alt: ''
      }, {
        title: '每日簽到',
        to: '/',
        src: 'check.jpg',
        alt: ''
      }],
      mainEntries: [{
        title: '最新',
        name: 'Latest',
        active: true
      }, {
        title: '熱門',
        name: 'Hit',
        active: false
      }, {
        title: '推薦',
        name: 'Recommend',
        active: false
      }, {
        title: '精選',
        name: 'Featured',
        active: false
      }],
      show: 'IndexCateLatest',
      books: [{
        bookId: 0,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 1000
      }, {
        bookId: 1,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 32
      }, {
        bookId: 2,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }, {
        bookId: 3,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }, {
        bookId: 4,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }, {
        bookId: 5,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }, {
        bookId: 6,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }, {
        bookId: 7,
        name: '素養人才',
        imgSrc: 'sampleBook.jpg',
        desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        publishTime: '2020-10-11',
        download: 352
      }]
    };
  },

  watchQuery(newQuery, oldQuery) {
    // 偵測到 newQuery 就發新的 api ?
    return {
      newQuery,
      oldQuery
    };
  },

  methods: {
    switchMainEntry(entryName) {
      this.mainEntries.forEach(element => {
        element.active = element.name === entryName;
      });
      this.show = `IndexCate${entryName}`;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "463a3ce5",
  "1608c3da"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBookSubEntry: __webpack_require__(107).default})


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.df3bca8.jpg";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1bf2c86e", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookSubEntry_vue_vue_type_style_index_0_id_e0ad56dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
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
//# sourceMappingURL=index.js.map