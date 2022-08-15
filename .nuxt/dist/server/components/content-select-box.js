exports.ids = [15];
exports.modules = {

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

/***/ 79:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjI4ODMgOS4yOTAwNkMxNi44OTgzIDguOTAwMDYgMTYuMjY4MyA4LjkwMDA2IDE1Ljg3ODMgOS4yOTAwNkwxMS45OTgzIDEzLjE3MDFMOC4xMTgyNyA5LjI5MDA2QzcuNzI4MjcgOC45MDAwNiA3LjA5ODI3IDguOTAwMDYgNi43MDgyNyA5LjI5MDA2QzYuMzE4MjcgOS42ODAwNiA2LjMxODI3IDEwLjMxMDEgNi43MDgyNyAxMC43MDAxTDExLjI5ODMgMTUuMjkwMUMxMS42ODgzIDE1LjY4MDEgMTIuMzE4MyAxNS42ODAxIDEyLjcwODMgMTUuMjkwMUwxNy4yOTgzIDEwLjcwMDFDMTcuNjc4MyAxMC4zMjAxIDE3LjY3ODMgOS42ODAwNiAxNy4yODgzIDkuMjkwMDZaIiBmaWxsPSIjMzYzNjM2Ii8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=content-select-box.js.map