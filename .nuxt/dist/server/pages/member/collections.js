exports.ids = [43,24];
exports.modules = {

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member/Collection.vue?vue&type=template&id=7b07e65c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flex relative mb-3"},[_vm._ssrNode("<div class=\"flex-shrink-0 w-24 mr-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(70)("./" + (_vm.collection.imgSrc))))+(_vm._ssrAttr("alt",_vm.collection.name))+"></div> <div"+(_vm._ssrClass(null,[
      _vm.index + 1 === _vm.arrLength ? '' : 'border-b-2 border-gray-divide',
      'flex-grow' ]))+"><h3 class=\"mb-1 text-base font-medium leading-none\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.collection.name)+"\n    ")+"</h3> <p class=\"min-h-12 mb-2 line-clamp-3\">"+_vm._ssrEscape(_vm._s(_vm.collection.desc))+"</p> <div class=\"text-gray-subInfo text-xs\"><p class=\"mb-2\">"+_vm._ssrEscape("作者："+_vm._s(_vm.collection.author))+"</p> <p class=\"mb-3\">"+_vm._ssrEscape(_vm._s(_vm.collection.publishTime)+"出版")+"</p></div></div> <div class=\"flex absolute right-0\"><div class=\"w-4 mr-0.5\"><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt=\"收藏icon\"></div> <span class=\"text-tangerine whitespace-nowrap\">取消</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/member/Collection.vue?vue&type=template&id=7b07e65c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member/Collection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Collectionvue_type_script_lang_js_ = ({
  name: 'Collection',
  props: {
    collection: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    arrLength: {
      type: Number,
      default: 0
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])(['handleDelCollection'])
  }
});
// CONCATENATED MODULE: ./components/member/Collection.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_Collectionvue_type_script_lang_js_ = (Collectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/member/Collection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_Collectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c1f2d8d2"
  
)

/* harmony default export */ var Collection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/collections.vue?vue&type=template&id=1f1eba1f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"mt-8 mx-6"},[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.collections),function(collection,index){return _c('MemberCollection',{key:collection.id,attrs:{"collection":collection,"index":index,"arr-length":_vm.collections.length}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/member/collections.vue?vue&type=template&id=1f1eba1f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/collections.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var collectionsvue_type_script_lang_js_ = ({
  name: 'Favorites',
  computed: {
    collections() {
      return this.$store.state.collections;
    }

  }
});
// CONCATENATED MODULE: ./pages/member/collections.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_collectionsvue_type_script_lang_js_ = (collectionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/member/collections.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_collectionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "07dfe670"
  
)

/* harmony default export */ var collections = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberCollection: __webpack_require__(163).default})


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tkb.0c425cc.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.2fbb8d0.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-star.57cd018.jpeg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-btn-decoration.bb13794.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.df3bca8.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag-title.c30faac.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.jpeg": 28,
	"./account-bg.jpg": 29,
	"./banner.jpg": 68,
	"./bg-star.jpeg": 66,
	"./sampleBook.jpg": 71,
	"./tag-title.png": 69,
	"./test-btn-decoration.png": 67,
	"./tkb.png": 64,
	"./user.png": 65
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
webpackContext.id = 70;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sampleBook.47efd69.jpg";

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjE4ODcgNS41MTcxNUwxMC4yMjE1IDQuOTQwNThMOC40NDgxIDEuMzQ1MjdDOC4zOTk2NiAxLjI0NjgzIDguMzE5OTggMS4xNjcxNCA4LjIyMTU0IDEuMTE4NzFDNy45NzQ2NiAwLjk5NjgzMiA3LjY3NDY2IDEuMDk4MzkgNy41NTEyMiAxLjM0NTI3TDUuNzc3NzkgNC45NDA1OEwxLjgxMDYgNS41MTcxNUMxLjcwMTIzIDUuNTMyNzcgMS42MDEyMyA1LjU4NDMzIDEuNTI0NjYgNS42NjI0NkMxLjQzMjEgNS43NTc1OSAxLjM4MTEgNS44ODU1OCAxLjM4Mjg2IDYuMDE4M0MxLjM4NDYxIDYuMTUxMDMgMS40Mzg5OSA2LjI3NzYyIDEuNTM0MDQgNi4zNzAyN0w0LjQwNDM1IDkuMTY4NzFMMy43MjYyMyAxMy4xMjAzQzMuNzEwMzIgMTMuMjEyMiAzLjcyMDUgMTMuMzA2NyAzLjc1NTU5IDEzLjM5MzJDMy43OTA2OCAxMy40Nzk2IDMuODQ5MjkgMTMuNTU0NSAzLjkyNDc3IDEzLjYwOTNDNC4wMDAyNSAxMy42NjQxIDQuMDg5NTggMTMuNjk2NyA0LjE4MjYzIDEzLjcwMzNDNC4yNzU2OCAxMy43MSA0LjM2ODczIDEzLjY5MDQgNC40NTEyMyAxMy42NDY4TDcuOTk5NjYgMTEuNzgxMkwxMS41NDgxIDEzLjY0NjhDMTEuNjQ1IDEzLjY5ODQgMTEuNzU3NSAxMy43MTU2IDExLjg2NTMgMTMuNjk2OEMxMi4xMzcyIDEzLjY1IDEyLjMyIDEzLjM5MjEgMTIuMjczMSAxMy4xMjAzTDExLjU5NSA5LjE2ODcxTDE0LjQ2NTMgNi4zNzAyN0MxNC41NDM0IDYuMjkzNzEgMTQuNTk1IDYuMTkzNzEgMTQuNjEwNiA2LjA4NDMzQzE0LjY1MjggNS44MTA4OSAxNC40NjIyIDUuNTU3NzcgMTQuMTg4NyA1LjUxNzE1WiIgZmlsbD0iI0VCNzUxMyIvPgo8L3N2Zz4K"

/***/ })

};;
//# sourceMappingURL=collections.js.map