exports.ids = [1];
exports.modules = {

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/AcctInput.vue?vue&type=template&id=8c1b3270&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"account__input__wrap"},[_vm._ssrNode("<span class=\"account__input__help\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.errorMessage)+"\n  ")+"</span> <span class=\"account__label\">帳號</span> <input type=\"text\" placeholder=\"example@mail.com\""+(_vm._ssrAttr("value",(_vm.userInput)))+" class=\"account__input\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/account/AcctInput.vue?vue&type=template&id=8c1b3270&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/AcctInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AcctInputvue_type_script_lang_js_ = ({
  name: 'Input',

  data() {
    return {
      userInput: '',
      errorMessage: ''
    };
  },

  methods: {
    async handleInput(event) {
      this.$emit('input', event.target.value);
      this.errorMessage = await this.$validateFunctions.inputValidate('account', this.userInput);
    }

  }
});
// CONCATENATED MODULE: ./components/account/AcctInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_AcctInputvue_type_script_lang_js_ = (AcctInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/account/AcctInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_AcctInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "349aa339"
  
)

/* harmony default export */ var AcctInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=account-acct-input.js.map