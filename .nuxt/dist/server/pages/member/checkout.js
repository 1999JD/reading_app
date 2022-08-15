exports.ids = [43,15,27];
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/checkout.vue?vue&type=template&id=0bfe3ecc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"pt-4 px-6 pb-20"},[_vm._ssrNode("<section class=\"mb-2 border rounded overflow-hidden\"><h3 class=\"mb-7.5 py-2 text-center\">訂單資訊</h3> <ul class=\"mx-4 border-b\">"+(_vm._ssrList((_vm.shoppingList),function(item){return ("<li class=\"flex gap-1.5 mb-6 p-2 rounded-lg\"><div class=\"flex-grow-0 flex-shrink-0 w-13\"><img"+(_vm._ssrAttr("src",__webpack_require__(72)("./" + (item.imgSrc))))+" alt></div> <div><h3 class=\"mb-1.5 font-medium line-clamp-1\">"+_vm._ssrEscape(_vm._s(item.name))+"</h3> <p class=\"mb-1.5 text-xs\">"+_vm._ssrEscape("作者："+_vm._s(item.author))+"</p> <p>"+_vm._ssrEscape("$"+_vm._s(item.price))+"</p></div></li>")}))+"</ul> <dl class=\"w-fit ml-auto mr-4 pt-4 pb-3\"><div class=\"flex justify-between mb-3\"><dt class=\"w-18\">商品數量</dt> <dd class=\"text-tangerine font-medium\">"+_vm._ssrEscape(_vm._s(_vm.shoppingList.length))+"</dd></div> <div class=\"flex gap-4\"><dt class=\"w-18\">訂購總金額</dt> <dd class=\"text-tangerine font-medium\">"+_vm._ssrEscape("$"+_vm._s(_vm.sum))+"</dd></div></dl> <button class=\"ml-4 mb-4 text-tangerine underline\">使用優惠券</button></section> "),_vm._ssrNode("<section class=\"mb-8 px-6 py-3\">","</section>",[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<fieldset>","</fieldset>",[_c('MemberReceiptTitle',[_vm._v("訂購人資訊 ")]),_vm._ssrNode(" <label class=\"checkout__wrap\"><span class=\"checkout__label\">會員帳號</span> <input type=\"text\" placeholder=\"登入本會員使用的帳號\" class=\"checkout__input\"></label> <label class=\"checkout__wrap\"><span class=\"checkout__label\">姓名</span> <input type=\"text\" placeholder=\"林大一\" class=\"checkout__input\"></label> <label class=\"checkout__wrap\"><span class=\"checkout__label\">手機</span> <input type=\"text\" placeholder=\"0912345678\" class=\"checkout__input\"></label> <label class=\"block mb-10\"><span class=\"checkout__label\">信箱</span> <input type=\"email\" placeholder=\"sample@reading.com.tw\" class=\"checkout__input\"></label>")],2),_vm._ssrNode(" "),_vm._ssrNode("<fieldset class=\"mb-10\">","</fieldset>",[_c('MemberReceiptTitle',[_vm._v("付款方式")]),_vm._ssrNode(" "),_c('ContentSelectBox',{attrs:{"select-value":_vm.paymentValue,"options":_vm.paymentOptions},model:{value:(_vm.paymentValue),callback:function ($$v) {_vm.paymentValue=$$v},expression:"paymentValue"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<fieldset>","</fieldset>",[_c('MemberReceiptTitle',[_vm._v("發票資訊 ")]),_vm._ssrNode(" <div class=\"grid grid-cols-2 mb-4\"><label class=\"flex items-center\"><input type=\"radio\" name=\"receipt\" class=\"checkout__radio\"> <span class=\"checkout__label\">個人(兩聯式)</span></label> <label class=\"flex items-center\"><input type=\"radio\" name=\"receipt\" class=\"checkout__radio\"> <span class=\"checkout__label\"> 公司(三聯式) </span></label></div> <label class=\"checkout__wrap\"><span class=\"checkout__label\">姓名或公司名稱</span> <input type=\"text\" class=\"checkout__input\"></label> <label class=\"checkout__wrap\"><span class=\"checkout__label\">統一編號</span> <input type=\"text\" class=\"checkout__input\"></label> <h4 class=\"mb-4\">送貨地址</h4> <div class=\"grid grid-cols-2\"><label class=\"flex items-center mb-4\"><input type=\"radio\" name=\"address\" class=\"checkout__radio\"> <span class=\"checkout__label\">台灣</span></label> <label class=\"flex\"><input type=\"radio\" name=\"address\" class=\"checkout__radio\"> <span class=\"checkout__label\">非台灣</span></label></div> "),_vm._ssrNode("<div class=\"grid grid-cols-2 gap-x-7 mb-4 justify-items-stretch\">","</div>",[_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<span class=\"checkout__label\">縣市選擇</span> "),_c('ContentSelectBox',{attrs:{"placeholder":"請選擇","select-value":_vm.countyValue,"options":_vm.countyOptions},model:{value:(_vm.countyValue),callback:function ($$v) {_vm.countyValue=$$v},expression:"countyValue"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<span class=\"checkout__label\">鄉鎮選擇</span> "),_c('ContentSelectBox',{attrs:{"placeholder":"請選擇","select-value":_vm.districtValue,"options":_vm.districtOptions},model:{value:(_vm.districtValue),callback:function ($$v) {_vm.districtValue=$$v},expression:"districtValue"}})],2)],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"輸入詳細地址\" class=\"checkout__input\">")],2)],2)]),_vm._ssrNode(" <button class=\"block w-44 mx-auto mb-18 py-3 text-center bg-yellow rounded\">\n    立即付款\n  </button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/checkout.vue?vue&type=template&id=0bfe3ecc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/checkout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  name: 'Checkout',

  data() {
    return {
      paymentValue: '',
      paymentOptions: [{
        label: '線上刷卡',
        input: 'cash'
      }, {
        label: 'LINEPAY',
        input: 'linepay'
      }, {
        label: 'ATM轉帳',
        input: 'atm'
      }, {
        label: '現金(臨櫃)',
        input: 'cash'
      }],
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
  },

  computed: {
    shoppingList() {
      return this.$store.state.billList;
    },

    sum() {
      if (this.shoppingList.length <= 0) return 0;

      const reducer = (previousValue, currentValue) => previousValue + currentValue;

      const priceArr = this.shoppingList.map(item => item.price);
      return priceArr.reduce(reducer);
    }

  }
});
// CONCATENATED MODULE: ./pages/member/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/member/checkout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "288c98ba"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberReceiptTitle: __webpack_require__(108).default,ContentSelectBox: __webpack_require__(109).default})


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tkb.0c425cc.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.2fbb8d0.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-star.57cd018.jpeg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-btn-decoration.bb13794.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.df3bca8.jpg";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag-title.c30faac.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.jpeg": 28,
	"./account-bg.jpg": 29,
	"./banner.jpg": 70,
	"./bg-star.jpeg": 68,
	"./sampleBook.jpg": 73,
	"./tag-title.png": 71,
	"./test-btn-decoration.png": 69,
	"./tkb.png": 66,
	"./user.png": 67
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
webpackContext.id = 72;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sampleBook.47efd69.jpg";

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
//# sourceMappingURL=checkout.js.map