exports.ids = [15];
exports.modules = {

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Store.vue?vue&type=template&id=3a3ed2ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isCollection)?_c('button',{on:{"click":function($event){return _vm.handleAddCollection(_vm.book)}}},[_vm._ssrNode("<span class=\"sr-only\"> 收藏 </span> <img"+(_vm._ssrAttr("src",__webpack_require__(73)))+"> "),_vm._t("default",null,{"note":_vm.note})],2):_c('button',{on:{"click":function($event){return _vm.handleDelCollection(_vm.book.bookId)}}},[_vm._ssrNode("<span class=\"sr-only\"> 取消收藏 </span> <img"+(_vm._ssrAttr("src",__webpack_require__(72)))+"> "),_vm._t("default",null,{"note":_vm.note})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content/Store.vue?vue&type=template&id=3a3ed2ac&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content/Store.vue?vue&type=script&lang=js&
//
//
//
//
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
// CONCATENATED MODULE: ./components/content/Store.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_Storevue_type_script_lang_js_ = (Storevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content/Store.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_Storevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b043d822"
  
)

/* harmony default export */ var Store = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjE4ODcgNS41MTcxNUwxMC4yMjE1IDQuOTQwNThMOC40NDgxIDEuMzQ1MjdDOC4zOTk2NiAxLjI0NjgzIDguMzE5OTggMS4xNjcxNCA4LjIyMTU0IDEuMTE4NzFDNy45NzQ2NiAwLjk5NjgzMiA3LjY3NDY2IDEuMDk4MzkgNy41NTEyMiAxLjM0NTI3TDUuNzc3NzkgNC45NDA1OEwxLjgxMDYgNS41MTcxNUMxLjcwMTIzIDUuNTMyNzcgMS42MDEyMyA1LjU4NDMzIDEuNTI0NjYgNS42NjI0NkMxLjQzMjEgNS43NTc1OSAxLjM4MTEgNS44ODU1OCAxLjM4Mjg2IDYuMDE4M0MxLjM4NDYxIDYuMTUxMDMgMS40Mzg5OSA2LjI3NzYyIDEuNTM0MDQgNi4zNzAyN0w0LjQwNDM1IDkuMTY4NzFMMy43MjYyMyAxMy4xMjAzQzMuNzEwMzIgMTMuMjEyMiAzLjcyMDUgMTMuMzA2NyAzLjc1NTU5IDEzLjM5MzJDMy43OTA2OCAxMy40Nzk2IDMuODQ5MjkgMTMuNTU0NSAzLjkyNDc3IDEzLjYwOTNDNC4wMDAyNSAxMy42NjQxIDQuMDg5NTggMTMuNjk2NyA0LjE4MjYzIDEzLjcwMzNDNC4yNzU2OCAxMy43MSA0LjM2ODczIDEzLjY5MDQgNC40NTEyMyAxMy42NDY4TDcuOTk5NjYgMTEuNzgxMkwxMS41NDgxIDEzLjY0NjhDMTEuNjQ1IDEzLjY5ODQgMTEuNzU3NSAxMy43MTU2IDExLjg2NTMgMTMuNjk2OEMxMi4xMzcyIDEzLjY1IDEyLjMyIDEzLjM5MjEgMTIuMjczMSAxMy4xMjAzTDExLjU5NSA5LjE2ODcxTDE0LjQ2NTMgNi4zNzAyN0MxNC41NDM0IDYuMjkzNzEgMTQuNTk1IDYuMTkzNzEgMTQuNjEwNiA2LjA4NDMzQzE0LjY1MjggNS44MTA4OSAxNC40NjIyIDUuNTU3NzcgMTQuMTg4NyA1LjUxNzE1WiIgZmlsbD0iI0VCNzUxMyIvPgo8L3N2Zz4K"

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM3NjkgNy41MzMzM0wxMi4zNDM2IDcuMTgzMzNMMTAuNzY4NiAzLjQ3NUMxMC40ODUyIDIuOCA5LjUxODU2IDIuOCA5LjIzNTIzIDMuNDc1TDcuNjYwMjIgNy4xOTE2N0wzLjYzNTIzIDcuNTMzMzNDMi45MDE4OSA3LjU5MTY3IDIuNjAxODkgOC41MDgzMyAzLjE2MDIyIDguOTkxNjZMNi4yMTg1NiAxMS42NDE3TDUuMzAxODkgMTUuNTc1QzUuMTM1MjMgMTYuMjkxNyA1LjkxMDIyIDE2Ljg1ODMgNi41NDM1NiAxNi40NzVMMTAuMDAxOSAxNC4zOTE3TDEzLjQ2MDIgMTYuNDgzM0MxNC4wOTM2IDE2Ljg2NjcgMTQuODY4NiAxNi4zIDE0LjcwMTkgMTUuNTgzM0wxMy43ODUyIDExLjY0MTdMMTYuODQzNiA4Ljk5MTY2QzE3LjQwMTkgOC41MDgzMyAxNy4xMTAyIDcuNTkxNjcgMTYuMzc2OSA3LjUzMzMzWk0xMC4wMDE5IDEyLjgzMzNMNi44Njg1NiAxNC43MjVMNy43MDE4OSAxMS4xNTgzTDQuOTM1MjMgOC43NTgzM0w4LjU4NTIzIDguNDQxNjdMMTAuMDAxOSA1LjA4MzMzTDExLjQyNjkgOC40NUwxNS4wNzY5IDguNzY2NjdMMTIuMzEwMiAxMS4xNjY3TDEzLjE0MzYgMTQuNzMzM0wxMC4wMDE5IDEyLjgzMzNaIiBmaWxsPSIjMzYzNjM2Ii8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=content-store.js.map