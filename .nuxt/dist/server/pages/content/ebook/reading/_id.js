exports.ids = [36];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28e8b36d", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c5e4bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c5e4bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c5e4bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c5e4bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6c5e4bb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.arrow[data-v-6c5e4bb0]{\n  position:absolute;\n  top:0px;\n  bottom:0px;\n  margin-top:auto;\n  margin-bottom:auto;\n  height:3.5rem;\n  width:3rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  opacity:0.8\n}\n.settings__setting[data-v-6c5e4bb0]{\n  margin-bottom:0.5rem;\n  display:flex;\n  height:2.25rem;\n  align-items:center;\n  border-radius:1rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-left:0.625rem;\n  padding-right:0.625rem\n}\n.settings__title[data-v-6c5e4bb0]{\n  margin-right:0.875rem\n}\n.settings__button--font[data-v-6c5e4bb0]{\n  z-index:0;\n  margin-right:1.5rem;\n  margin-bottom:0.5rem;\n  width:1rem;\n  align-self:flex-end;\n  text-align:center;\n  line-height:1\n}\n.active--font[data-v-6c5e4bb0]{\n  position:relative\n}\n.active--font[data-v-6c5e4bb0]:before{\n  content:\"\";\n  position:absolute;\n  left:0px;\n  right:0px;\n  bottom:0px;\n  z-index:-1;\n  margin-left:auto;\n  margin-right:auto;\n  height:0.25rem;\n  width:100%;\n  border-radius:0.125rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity))\n}\n.settings__button--bg[data-v-6c5e4bb0]{\n  margin-right:0.75rem;\n  height:1.5rem;\n  width:1.5rem;\n  border-radius:9999px;\n  --tw-shadow:0px 2px 4px rgba(174, 174, 174, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.active--bg[data-v-6c5e4bb0]{\n  border-width:4px;\n  --tw-border-opacity:1;\n  border-color:rgba(255, 198, 81, var(--tw-border-opacity))\n}\n.settings__button--direction[data-v-6c5e4bb0]{\n  margin-right:0.75rem;\n  display:flex;\n  height:1.5rem;\n  width:1.5rem;\n  align-items:center;\n  justify-content:center;\n  border-radius:9999px;\n  --tw-shadow:0px 2px 4px rgba(174, 174, 174, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.active--direction[data-v-6c5e4bb0]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/content/ebook/reading/_id.vue?vue&type=template&id=6c5e4bb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.ebookStyle.bgColor, 'flex-grow relative']},[_c('client-only',[_c('section',{staticClass:"w-full flex justify-center",attrs:{"id":"viewer"}}),_vm._v(" "),_c('button',{staticClass:"arrow left-6",attrs:{"id":"prev"},on:{"click":_vm.prevPage}},[_c('img',{attrs:{"src":__webpack_require__(12),"alt":""}})]),_vm._v(" "),_c('button',{staticClass:"arrow right-6",attrs:{"id":"next"},on:{"click":_vm.nextPage}},[_c('img',{attrs:{"src":__webpack_require__(83),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"progress-wrapper box-border absolute bottom-2 w-full px-6"},[_c('input',{ref:"progress",staticClass:"progress w-full mb-0.5",attrs:{"type":"range","max":"100","min":"0","step":"0.01","disabled":!_vm.bookAvailable},domProps:{"value":_vm.progress},on:{"change":function($event){return _vm.onProgressChange($event.target.value)},"input":function($event){return _vm.onProgressInput($event.target.value)}}}),_vm._v(" "),_c('p',{staticClass:"text-center"},[_c('span',{staticClass:"text-primary-dark"},[_vm._v(_vm._s(_vm.progress)+"% ")]),_vm._v("/ 100%\n      ")])]),_vm._v(" "),_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.catalogOpen),expression:"catalogOpen"}],staticClass:"absolute -bottom-px w-full py-4 px-6 bg-primary rounded-t-2xl"},[_c('h3',{staticClass:"mb-3 pb-2 text-base font-medium border-b"},[_vm._v("目錄")]),_vm._v(" "),_c('ul',_vm._l((_vm.catalog),function(chapter){return _c('li',{key:chapter.label,staticClass:"mb-3"},[_c('p',{staticClass:"cursor-pointer",on:{"click":function($event){return _vm.handleSwitchChapter(chapter.href)}}},[_vm._v("\n            "+_vm._s(chapter.label)+"\n          ")])])}),0)]),_vm._v(" "),_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.settingOpen),expression:"settingOpen"}],staticClass:"absolute -bottom-px w-full px-8 py-10 bg-primary rounded-t-2xl"},[_c('ul',[_c('li',{staticClass:"settings__setting"},[_c('h3',{staticClass:"settings__title"},[_vm._v("字型大小")]),_vm._v(" "),_vm._l((_vm.settings.fontSize),function(item){return _c('button',{key:item.fontSizeClass,class:[
              item.fontSize === _vm.ebookStyle.fontSize && 'active--font',
              item.fontSizeClass,
              'settings__button--font' ],on:{"click":function($event){return _vm.handleSwitchFontsize(item.fontSize)}}},[_vm._v("\n            A\n          ")])})],2),_vm._v(" "),_c('li',{staticClass:"settings__setting"},[_c('h3',{staticClass:"settings__title"},[_vm._v("背景顏色")]),_vm._v(" "),_vm._l((_vm.settings.bgColor),function(color){return _c('button',{key:color,class:[
              color === _vm.ebookStyle.bgColor && 'active--bg',
              color,
              'settings__button--bg' ],on:{"click":function($event){return _vm.handleSwitchBgColor(color)}}})})],2)])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/content/ebook/reading/_id.vue?vue&type=template&id=6c5e4bb0&scoped=true&

// EXTERNAL MODULE: external "epubjs"
var external_epubjs_ = __webpack_require__(65);
var external_epubjs_default = /*#__PURE__*/__webpack_require__.n(external_epubjs_);

// CONCATENATED MODULE: ./assets/media/sample.epub
/* harmony default export */ var sample = (__webpack_require__.p + "assets/media/sample.epub");
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/content/ebook/reading/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'Reading',
  layout: 'ebook',
  props: {
    settingOpen: {
      type: Boolean,
      default: false
    },
    catalogOpen: {
      type: Boolean,
      default: false
    },
    penUse: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      book: {},
      bookReady: false,
      rendition: {},
      progress: 0,
      navigation: {},
      locations: {},
      location: 0,
      bookAvailable: true,
      catalog: [],
      url: sample,
      ebookStyle: {
        bgColor: 'bg-white',
        fontSize: 18,
        writingMode: 'horizontal-tb'
      },
      settings: {
        fontSize: [{
          fontSizeClass: 'text-sm',
          fontSize: 14
        }, {
          fontSizeClass: 'text-lg',
          fontSize: 18
        }, {
          fontSizeClass: 'text-2xl',
          fontSize: 20
        }, {
          fontSizeClass: 'text-2.5xl',
          fontSize: 24
        }],
        bgColor: ['bg-white', 'bg-blue', 'bg-red']
      }
    };
  },

  mounted() {
    this.book = external_epubjs_default()(this.url);
    this.rendition = this.book.renderTo('viewer', {
      width: window.innerWidth * 0.75,
      height: window.innerHeight * 0.75
    });
    this.book.rendition.display();
    this.book.ready.then(() => {
      this.navigation = this.book.navigation;
      return this.book.locations.generate(100);
    }).then(_result => {
      this.locations = this.book.locations;
      this.rendition.themes.fontSize(this.ebookStyle.fontSize + 'px');
      this.rendition.themes.default({
        html: {
          'writing-mode': `${this.ebookStyle.writingMode} !important`
        }
      });
      this.bookReady = true;
    });
    this.book.loaded.navigation.then(navigation => {
      this.catalog = navigation.toc.map(chapter => {
        return {
          label: chapter.label,
          href: chapter.href
        };
      });
    });
    const vm = this;
    this.rendition.on('selected', function (cfiRange, _contents) {
      const penUse = vm.penUse;
      if (penUse) this.book.rendition.annotations.highlight(cfiRange); // rendition.display(cfiRange);
    });
  },

  methods: {
    async prevPage() {
      this.book.package.metadata.direction === 'rtl' ? await this.rendition.next() : await this.rendition.prev();
      await this.onPressButtonChangePage();
    },

    async nextPage() {
      this.book.package.metadata.direction === 'rtl' ? await this.rendition.prev() : await this.rendition.next();
      await this.onPressButtonChangePage();
    },

    onProgressChange(progress) {
      this.progress = progress;
      const percentage = progress / 100;
      this.location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
      this.rendition.display(this.location);
    },

    onProgressInput(progress) {
      const percentage = progress / 100;
      this.location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
    },

    onPressButtonChangePage() {
      if (!this.bookReady) {
        setTimeout(this.onProgressInput, 1000);
        return;
      }

      const currentLocation = this.rendition.currentLocation();
      const progress = Math.floor(this.locations.percentageFromCfi(currentLocation.start.cfi).toFixed(5) * 10000) / 100;
      this.progress = progress;
      this.onProgressInput(progress);
    },

    handleSwitchBgColor(color) {
      this.ebookStyle.bgColor = color;
    },

    handleSwitchFontsize(fontSize) {
      this.ebookStyle.fontSize = fontSize;
      this.rendition.themes.fontSize(fontSize + 'px');
    },

    handleSwitchChapter(href) {
      this.rendition.display(href);
    }

  }
});
// CONCATENATED MODULE: ./pages/content/ebook/reading/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var reading_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/content/ebook/reading/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reading_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c5e4bb0",
  "0eec7030"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM4NzMgOC45NDY2NEMxMi45MDczIDguNDI2NjQgMTMuNzQ3MyA4LjQyNjY0IDE0LjI2NzMgOC45NDY2NEwyMC4zODczIDE1LjA2NjZDMjAuOTA3MyAxNS41ODY2IDIwLjkwNzMgMTYuNDI2NiAyMC4zODczIDE2Ljk0NjZMMTQuMjY3MyAyMy4wNjY2QzEzLjc0NzMgMjMuNTg2NiAxMi45MDczIDIzLjU4NjYgMTIuMzg3MyAyMy4wNjY2QzExLjg2NzMgMjIuNTQ2NiAxMS44NjczIDIxLjcwNjYgMTIuMzg3MyAyMS4xODY2TDE3LjU2MDcgMTZMMTIuMzg3MyAxMC44MjY2QzExLjg2NzMgMTAuMzA2NiAxMS44ODA3IDkuNDUzMzEgMTIuMzg3MyA4Ljk0NjY0WiIgZmlsbD0iIzM2MzYzNiIvPgo8L3N2Zz4K"

/***/ })

};;
//# sourceMappingURL=_id.js.map