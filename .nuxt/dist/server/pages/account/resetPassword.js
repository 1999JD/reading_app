exports.ids = [34,4];
exports.modules = {

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/resetPassword.vue?vue&type=template&id=2f74ac6d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form>","</form>",[_c('AccountPwdInput',{attrs:{"field":"password"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(" 舊密碼")]},proxy:true}]),model:{value:(_vm.reset.oldPassword),callback:function ($$v) {_vm.$set(_vm.reset, "oldPassword", $$v)},expression:"reset.oldPassword"}}),_vm._ssrNode(" "),_c('AccountPwdInput',{attrs:{"field":"setPassword"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(" 新密碼")]},proxy:true}]),model:{value:(_vm.reset.newPassword),callback:function ($$v) {_vm.$set(_vm.reset, "newPassword", $$v)},expression:"reset.newPassword"}}),_vm._ssrNode(" "),_c('AccountPwdInput',{staticClass:"mb-10",attrs:{"field":"setPassword"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(" 確認密碼")]},proxy:true}]),model:{value:(_vm.reset.cfmPassword),callback:function ($$v) {_vm.$set(_vm.reset, "cfmPassword", $$v)},expression:"reset.cfmPassword"}}),_vm._ssrNode(" <button type=\"submit\" class=\"account__btn\">完成</button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/resetPassword.vue?vue&type=template&id=2f74ac6d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/resetPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var resetPasswordvue_type_script_lang_js_ = ({
  name: 'ResetPassword',
  layout: 'account',
  middleware: 'auth',

  data() {
    return {
      reset: {
        oldPassword: '',
        newPassword: '',
        cfmPassword: ''
      }
    };
  },

  methods: {
    async userResetPassword() {
      if (!(await this.$validateFunctions.allFormValidate('reset', this.reset))) {
        alert('格式不對，請檢查後重填');
        return false;
      }

      if (this.reset.newPassword !== this.reset.cfmPassword) {
        alert('新密碼與確認密碼不同');
        return false;
      }

      alert('成功更換密碼');
    }

  }
});
// CONCATENATED MODULE: ./pages/account/resetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_resetPasswordvue_type_script_lang_js_ = (resetPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account/resetPassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_resetPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53d418b0"
  
)

/* harmony default export */ var resetPassword = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AccountPwdInput: __webpack_require__(86).default})


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTkiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNFQjc1MTMiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNOC44ODg2NyAyMC41NTU1TDExLjY2NjQgMTcuNzc3N0wxNy4yMjIgMjMuMzMzM0wyOC4zMzMxIDEyLjIyMjJMMzEuMTEwOSAxNC45OTk5TDE3LjIyMiAyOC44ODg4TDguODg4NjcgMjAuNTU1NVoiIGZpbGw9IiNFQjc1MTMiIHN0cm9rZT0iI0VCNzUxMyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4xNDk4IDUuNjY2MDlMNy41NDM5MiAxMS40MjVMMy45MjU3OCA4LjQwOTU2TDQuNjA4NDUgNy41OTAzNkw3LjM5MDMyIDkuOTA4MjJMMTEuMzE3OCA1LjAwMDQ5TDEyLjE0OTggNS42NjYwOVoiIGZpbGw9IiNFQjc1MTMiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Ij48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-big.svg": 76,
	"./check.svg": 77,
	"./eye-off.svg": 81,
	"./eye-open.svg": 82,
	"./times.svg": 78
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
webpackContext.id = 80;

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSAyLjVMMTcuNSAxNy41IiBzdHJva2U9IiNCOUI5QjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjgxODc1IDguODIyNTFDOC41MDYwMSA5LjEzNTAyIDguMzMwMjMgOS41NTg5NyA4LjMzMDA4IDEwLjAwMTFDOC4zMjk5MiAxMC40NDMyIDguNTA1NCAxMC44NjczIDguODE3OTIgMTEuMThDOS4xMzA0MyAxMS40OTI3IDkuNTU0MzggMTEuNjY4NSA5Ljk5NjQ5IDExLjY2ODdDMTAuNDM4NiAxMS42Njg4IDEwLjg2MjcgMTEuNDkzNCAxMS4xNzU0IDExLjE4MDgiIHN0cm9rZT0iI0I5QjlCOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0LjQ2MzUgMTQuNDU3NEMxMy4xMDQzIDE1LjM3NDEgMTEuNjE3NyAxNS44MzMyIDkuOTk5MzUgMTUuODMzMkM2LjY2NjAyIDE1LjgzMzIgMy44ODg1MiAxMy44ODkxIDEuNjY2MDIgOS45OTk4OUMyLjgwNjg1IDguMDA0MDUgNC4wOTM1MiA2LjUyMDcyIDUuNTI2MDIgNS41NDkwNU03LjgwMTg1IDQuNDcwNzJDOC41MTYzNiA0LjI2NjMyIDkuMjU2MTggNC4xNjM5MiA5Ljk5OTM1IDQuMTY2NTVDMTMuMzMyNyA0LjE2NjU1IDE2LjExMDIgNi4xMTA3MiAxOC4zMzI3IDkuOTk5ODlDMTcuNjg0MyAxMS4xMzQxIDE2Ljk4OTMgMTIuMTAzMiAxNi4yNDY4IDEyLjkwNjZMNy44MDE4NSA0LjQ3MDcyWiIgc3Ryb2tlPSIjQjlCOUI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk4NyAxMS42NjY4QzEwLjkxOTIgMTEuNjY2OCAxMS42NjU0IDEwLjkyMDYgMTEuNjY1NCAxMC4wMDAyQzExLjY2NTQgOS4wNzk2OSAxMC45MTkyIDguMzMzNSA5Ljk5ODcgOC4zMzM1QzkuMDc4MjIgOC4zMzM1IDguMzMyMDMgOS4wNzk2OSA4LjMzMjAzIDEwLjAwMDJDOC4zMzIwMyAxMC45MjA2IDkuMDc4MjIgMTEuNjY2OCA5Ljk5ODcgMTEuNjY2OFoiIHN0cm9rZT0iI0I5QjlCOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjMzMjcgMTAuMDAwMUMxNi4xMTAyIDEzLjg4OTIgMTMuMzMyNyAxNS44MzM0IDkuOTk5MzUgMTUuODMzNEM2LjY2NjAyIDE1LjgzMzQgMy44ODg1MiAxMy44ODkyIDEuNjY2MDIgMTAuMDAwMUMzLjg4ODUyIDYuMTEwOTIgNi42NjYwMiA0LjE2Njc1IDkuOTk5MzUgNC4xNjY3NUMxMy4zMzI3IDQuMTY2NzUgMTYuMTEwMiA2LjExMDkyIDE4LjMzMjcgMTAuMDAwMVoiIHN0cm9rZT0iI0I5QjlCOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/PwdInput.vue?vue&type=template&id=8f2de06c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"account__input__wrap mb-4"},[_vm._ssrNode("<span class=\"account__label\">","</span>",[_vm._t("label",function(){return [_vm._v("密碼")]})],2),_vm._ssrNode(" <div class=\"relative\"><button class=\"account__eye\"><img"+(_vm._ssrAttr("src",__webpack_require__(80)("./" + (_vm.eyeOpen ? 'eye-open' : 'eye-off') + ".svg")))+"></button> "+(((_vm.eyeOpen ? 'text' : 'password')==='checkbox')?("<input placeholder=\"至少8位字元、英文字母大小寫與數字\" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.userInput)?_vm._i(_vm.userInput,null)>-1:(_vm.userInput)))+" class=\"account__input\">"):((_vm.eyeOpen ? 'text' : 'password')==='radio')?("<input placeholder=\"至少8位字元、英文字母大小寫與數字\" type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.userInput,null)))+" class=\"account__input\">"):("<input placeholder=\"至少8位字元、英文字母大小寫與數字\""+(_vm._ssrAttr("type",_vm.eyeOpen ? 'text' : 'password'))+(_vm._ssrAttr("value",(_vm.userInput)))+" class=\"account__input\">"))+"</div> <span class=\"account__input__help\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.errorMessage)+"\n  ")+"</span>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/account/PwdInput.vue?vue&type=template&id=8f2de06c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/PwdInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PwdInputvue_type_script_lang_js_ = ({
  name: 'PwdInputWrap',
  props: {
    field: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      eyeOpen: false,
      userInput: '',
      errorMessage: ''
    };
  },

  methods: {
    handleEyeOpen() {
      this.eyeOpen = !this.eyeOpen;
    },

    async handleInput(event) {
      this.$emit('input', event.target.value);
      this.errorMessage = await this.$validateFunctions.inputValidate(this.field, this.userInput);
    }

  }
});
// CONCATENATED MODULE: ./components/account/PwdInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_PwdInputvue_type_script_lang_js_ = (PwdInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/account/PwdInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_PwdInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ea078bb"
  
)

/* harmony default export */ var PwdInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=resetPassword.js.map