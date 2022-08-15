module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/account-acct-input","2":"components/account-cfm-pwd-input","3":"components/account-modal","4":"components/account-pwd-input","5":"components/common-book-sub-entry","6":"components/common-store","7":"components/content-ebook-arrow-button","8":"components/content-ebook-range","9":"components/content-ebook-settings","10":"components/content-media-audio","11":"components/content-media-nav","12":"components/content-media-remark","13":"components/content-media-video","14":"components/content-select-box","15":"components/content-store","16":"components/content-test-end-bubble","17":"components/content-test-question","18":"components/content-test-result","19":"components/content-test-user-answer","20":"components/index-cate-featured","21":"components/index-cate-hit","22":"components/index-cate-latest","23":"components/index-cate-recommend","24":"components/member-collection","25":"components/member-icon","26":"components/member-receipt-title","27":"components/member-record","28":"components/svg-ebook-cart","29":"components/svg-ebook-reading","30":"pages/account/forgetPassword","31":"pages/account/login","32":"pages/account/register","33":"pages/account/resetPassword","34":"pages/content/ebook/_id","35":"pages/content/ebook/reading/_id","36":"pages/content/index","37":"pages/content/media/_id","38":"pages/content/paperbook/_id","39":"pages/content/test/_id","40":"pages/index","41":"pages/member/cart","42":"pages/member/checkout","43":"pages/member/collections","44":"pages/member/index","45":"pages/member/orderPlan","46":"pages/member/orderReceipt","47":"pages/member/records"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYxMjcgOC45NDY2NEMxOS4wOTI3IDguNDI2NjQgMTguMjUyNyA4LjQyNjY0IDE3LjczMjcgOC45NDY2NEwxMS42MTI3IDE1LjA2NjZDMTEuMDkyNyAxNS41ODY2IDExLjA5MjcgMTYuNDI2NiAxMS42MTI3IDE2Ljk0NjZMMTcuNzMyNyAyMy4wNjY2QzE4LjI1MjcgMjMuNTg2NiAxOS4wOTI3IDIzLjU4NjYgMTkuNjEyNyAyMy4wNjY2QzIwLjEzMjcgMjIuNTQ2NiAyMC4xMzI3IDIxLjcwNjYgMTkuNjEyNyAyMS4xODY2TDE0LjQzOTMgMTZMMTkuNjEyNyAxMC44MjY2QzIwLjEzMjcgMTAuMzA2NiAyMC4xMTkzIDkuNDUzMzEgMTkuNjEyNyA4Ljk0NjY0WiIgZmlsbD0iIzM2MzYzNiIvPgo8L3N2Zz4K"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("300093af", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bb094e60", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0b6c38b1", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/message.65f6175.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/SearchHeader.vue?vue&type=template&id=58f861f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header"+(_vm._ssrClass(null,[
      _vm.open ? 'shadow-md' : '',
      'flex justify-center fixed z-30 top-0 w-full bg-primary transition delay-100' ]))+" data-v-58f861f8>","</header>",[_vm._ssrNode("<button type=\"button\" class=\"absolute top-0 bottom-0 left-6\" data-v-58f861f8>","</button>",[_c('SvgHeaderHam')],1),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"relative block w-full mx-16 p-2.5\" data-v-58f861f8>","</label>",[_vm._ssrNode("<input type=\"text\" class=\"w-full pl-8 py-1.5 rounded-lg leading-none\" data-v-58f861f8> "),_vm._ssrNode("<button type=\"button\" class=\"absolute top-0 bottom-0 left-5\" data-v-58f861f8>","</button>",[_c('SvgHeaderSearch')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<button type=\"button\" class=\"absolute top-0 bottom-0 my-auto right-6\" data-v-58f861f8>","</button>",[_vm._ssrNode("<p class=\"\n          absolute\n          top-1\n          left-3\n          px-2\n          py-1\n          rounded-full\n          bg-yellow\n          text-2xs text-white\n        \" data-v-58f861f8>"+_vm._ssrEscape("\n        "+_vm._s(_vm.shoppingList.length)+"\n      ")+"</p> "),_c('SvgHeaderCart')],2)],2),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.open ? 'open' : 'close'}},[_c('LayoutSideBar',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],on:{"onClick":_vm.handleCloseSidebar}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/SearchHeader.vue?vue&type=template&id=58f861f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/SearchHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchHeadervue_type_script_lang_js_ = ({
  name: 'Default',

  data() {
    return {
      open: false
    };
  },

  computed: {
    shoppingList() {
      return this.$store.state.shoppingList;
    }

  },
  methods: {
    handleCloseSidebar() {
      this.open = false;
    }

  }
});
// CONCATENATED MODULE: ./components/layout/SearchHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_SearchHeadervue_type_script_lang_js_ = (SearchHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/SearchHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_SearchHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58f861f8",
  "177d1604"
  
)

/* harmony default export */ var SearchHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgHeaderHam: __webpack_require__(58).default,SvgHeaderSearch: __webpack_require__(20).default,SvgHeaderCart: __webpack_require__(59).default,LayoutSideBar: __webpack_require__(60).default})


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Search.vue?vue&type=template&id=5eeb92ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M8.74912 13.7501C10.0752 13.7501 11.347 13.2233 12.2846 12.2856C13.2223 11.3479 13.7491 10.0762 13.7491 8.75009C13.7491 7.42401 13.2223 6.15224 12.2846 5.21456C11.347 4.27688 10.0752 3.75009 8.74912 3.75009C7.42303 3.75009 6.15126 4.27688 5.21358 5.21456C4.2759 6.15224 3.74912 7.42401 3.74912 8.75009C3.74912 10.0762 4.2759 11.3479 5.21358 12.2856C6.15126 13.2233 7.42303 13.7501 8.74912 13.7501ZM14.0158 12.8384L16.9991 15.8218C17.0787 15.8987 17.1421 15.9907 17.1857 16.0924C17.2293 16.1941 17.2522 16.3035 17.2531 16.4141C17.2539 16.5248 17.2328 16.6345 17.1908 16.7369C17.1488 16.8392 17.0869 16.9322 17.0086 17.0104C16.9303 17.0886 16.8372 17.1504 16.7348 17.1922C16.6323 17.2341 16.5226 17.2551 16.4119 17.254C16.3013 17.253 16.192 17.2299 16.0903 17.1862C15.9887 17.1425 15.8968 17.0789 15.82 16.9993L12.8366 14.0159C11.497 15.0558 9.81144 15.5461 8.12308 15.3869C6.43471 15.2278 4.87045 14.4312 3.74874 13.1593C2.62703 11.8874 2.03219 10.2359 2.08531 8.54086C2.13842 6.84585 2.83551 5.23478 4.03466 4.03563C5.2338 2.83648 6.84487 2.1394 8.53989 2.08628C10.2349 2.03316 11.8865 2.62801 13.1583 3.74972C14.4302 4.87143 15.2268 6.43569 15.3859 8.12405C15.5451 9.81242 15.0548 11.498 14.0149 12.8376L14.0158 12.8384Z\" fill=\"black\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/header/Search.vue?vue&type=template&id=5eeb92ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  name: 'SvgSearch'
});
// CONCATENATED MODULE: ./components/svg/header/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/header/Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e59693a"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Book.vue?vue&type=template&id=ede170ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 612.057 612.057"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"32px","height":"32px","viewBox":"0 0 612.057 612.057","xml:space":"preserve"}},[_vm._ssrNode("<path d=\"M412.585,233.896c2.187,12.403,12.91,21.406,25.49,21.406c1.482,0,2.98-0.129,4.467-0.387l77.481-13.611\n\t\t\tc6.812-1.192,12.754-4.967,16.718-10.63c3.963-5.651,5.49-12.512,4.298-19.319L515.887,68.072\n\t\t\tc-2.167-12.407-12.87-21.414-25.454-21.414c-1.498,0-3.009,0.133-4.491,0.395l-77.47,13.607\n\t\t\tc-6.815,1.181-12.757,4.955-16.733,10.618c-3.963,5.652-5.494,12.508-4.31,19.328L412.585,233.896z M404.936,80.531\n\t\t\tc1.494-2.131,3.729-3.549,6.312-4l77.486-13.611c0.563-0.097,1.14-0.149,1.704-0.149c4.736,0,8.765,3.396,9.582,8.077\n\t\t\tl25.152,143.286c0.451,2.566-0.125,5.156-1.619,7.291c-1.494,2.135-3.734,3.557-6.309,4.008l-77.47,13.611\n\t\t\tc-5.409,0.935-10.396-2.703-11.318-7.936L403.308,87.842C402.856,85.26,403.437,82.666,404.936,80.531z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M215.836,527.465h127.653c14.268,0,27.126-12.08,27.126-26.353v-371.84l64.918,373.121\n\t\t\tc2.167,12.411,12.556,21.043,25.14,21.043c0,0-0.157,0-0.153,0c1.503,0,2.945,0.238,4.427-0.023L590.67,501.54\n\t\t\tc14.014-2.498,23.412-15.839,20.975-29.877l-79.049-450.29C530.408,8.975,519.697,0,507.122,0c-1.495,0-3.01,0.141-4.492,0.403\n\t\t\tL376.879,22.478c-4.745,0.833-9.067,3.871-12.592,6.977c-4.722-6.36-12.282-9.539-20.794-9.539H215.841\n\t\t\tc-14.272,0-26.489,9.712-26.489,23.979v457.213C189.352,515.385,201.569,527.465,215.836,527.465z M373.37,42.356\n\t\t\tc1.49-2.131,3.727-3.553,6.288-4.004l125.756-22.066c0.571-0.101,1.144-0.149,1.703-0.149c4.737,0,8.773,3.396,9.6,8.073\n\t\t\tl79.033,450.317c0.922,5.306-2.643,10.389-7.924,11.332l-125.747,22.058c-5.313,0.938-10.381-2.683-11.295-7.927L371.759,49.651\n\t\t\tC371.304,47.082,371.876,44.491,373.37,42.356z M205.464,43.895c0-5.386,4.987-7.871,10.373-7.871h127.653\n\t\t\tc5.39,0.004,11.018,2.485,11.018,7.871v457.213c0,5.39-5.628,10.24-11.014,10.24H215.841c-5.386,0-10.373-4.851-10.373-10.24\n\t\t\tV43.895H205.464z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M240.336,257.578h78.654c14.268,0,27.456-10.88,27.456-25.148V86.952c0-14.276-13.188-26.755-27.456-26.755h-78.654\n\t\t\tc-14.268,0-26.815,12.479-26.815,26.755V232.43C213.521,246.697,226.068,257.578,240.336,257.578z M229.633,86.952\n\t\t\tc0-5.394,5.317-10.643,10.703-10.643h78.654c5.386,0,11.343,5.249,11.343,10.643V232.43c0,5.386-5.957,9.035-11.343,9.035h-78.654\n\t\t\tc-5.386,0-10.703-3.649-10.703-9.035V86.952z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M26.19,527.465h127.657c14.264,0,27.444-12.08,27.444-26.353V43.895c0-14.268-13.184-23.984-27.444-23.984H26.19\n\t\t\tc-14.26,0.004-26.163,9.716-26.163,23.984v457.213C0.027,515.385,11.931,527.465,26.19,527.465z M16.14,43.895\n\t\t\tc0-5.386,4.672-7.867,10.05-7.867h127.657c5.377,0,11.335,2.481,11.335,7.867v457.213c0,5.39-5.958,10.24-11.331,10.24H26.19\n\t\t\tc-5.378,0.004-10.05-4.847-10.05-10.24V43.895z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M50.678,257.578h78.67c14.268,0,27.778-10.88,27.778-25.148V86.952c0-14.276-13.51-26.755-27.778-26.755h-78.67\n\t\t\tc-14.26,0-26.481,12.475-26.481,26.755V232.43C24.196,246.697,36.418,257.578,50.678,257.578z M40.309,86.952\n\t\t\tc0-5.394,4.991-10.643,10.369-10.643h78.67c5.382,0,11.666,5.249,11.666,10.643V232.43c0,5.386-6.28,9.035-11.666,9.035h-78.67\n\t\t\tc-5.378,0-10.369-3.649-10.369-9.035V86.952z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/footer/Book.vue?vue&type=template&id=ede170ae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Book.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Bookvue_type_script_lang_js_ = ({
  name: 'SvgBook'
});
// CONCATENATED MODULE: ./components/svg/footer/Book.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_Bookvue_type_script_lang_js_ = (Bookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/footer/Book.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_Bookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e8847cd4"
  
)

/* harmony default export */ var Book = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Home.vue?vue&type=template&id=47eaa885&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"32","height":"32","viewBox":"0 0 32 32","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M6.66667 16H4L16 4L28 16H25.3333\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M6.66602 16V25.3333C6.66602 26.0406 6.94697 26.7189 7.44706 27.219C7.94716 27.719 8.62544 28 9.33268 28H22.666C23.3733 28 24.0515 27.719 24.5516 27.219C25.0517 26.7189 25.3327 26.0406 25.3327 25.3333V16\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M13.334 16H18.6673V21.3333H13.334V16Z\" stroke=\"#363636\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/footer/Home.vue?vue&type=template&id=47eaa885&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'SvgHome'
});
// CONCATENATED MODULE: ./components/svg/footer/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/footer/Home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1172dee8"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Member.vue?vue&type=template&id=085033f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"32","height":"32","viewBox":"0 0 32 32","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M15.9993 2.66675C8.63935 2.66675 2.66602 8.64008 2.66602 16.0001C2.66602 23.3601 8.63935 29.3334 15.9993 29.3334C23.3594 29.3334 29.3327 23.3601 29.3327 16.0001C29.3327 8.64008 23.3594 2.66675 15.9993 2.66675ZM9.42602 24.3734C9.99935 23.1734 13.4927 22.0001 15.9993 22.0001C18.506 22.0001 22.0127 23.1734 22.5727 24.3734C20.7593 25.8134 18.4793 26.6668 15.9993 26.6668C13.5193 26.6668 11.2393 25.8134 9.42602 24.3734ZM24.4794 22.4401C22.5727 20.1201 17.946 19.3334 15.9993 19.3334C14.0527 19.3334 9.42602 20.1201 7.51935 22.4401C6.15935 20.6534 5.33268 18.4268 5.33268 16.0001C5.33268 10.1201 10.1193 5.33342 15.9993 5.33342C21.8793 5.33342 26.666 10.1201 26.666 16.0001C26.666 18.4268 25.8393 20.6534 24.4794 22.4401ZM15.9993 8.00008C13.4127 8.00008 11.3327 10.0801 11.3327 12.6667C11.3327 15.2534 13.4127 17.3334 15.9993 17.3334C18.586 17.3334 20.666 15.2534 20.666 12.6667C20.666 10.0801 18.586 8.00008 15.9993 8.00008ZM15.9993 14.6667C14.8927 14.6667 13.9993 13.7734 13.9993 12.6667C13.9993 11.5601 14.8927 10.6667 15.9993 10.6667C17.106 10.6667 17.9993 11.5601 17.9993 12.6667C17.9993 13.7734 17.106 14.6667 15.9993 14.6667Z\" fill=\"#363636\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/footer/Member.vue?vue&type=template&id=085033f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/footer/Member.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Membervue_type_script_lang_js_ = ({
  name: 'SvgMember'
});
// CONCATENATED MODULE: ./components/svg/footer/Member.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_Membervue_type_script_lang_js_ = (Membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/footer/Member.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_Membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d1200f2"
  
)

/* harmony default export */ var Member = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"readingApp\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"readingApp\"},{\"hid\":\"author\",\"name\":\"author\",\"content\":\"Me\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"## Build Setup\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"readingApp\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"readingApp\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"## Build Setup\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.e3e9fb.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.e3e9fb.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.e7bfdf7a.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/404.c8cfb80.jpeg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/account-bg.20a2d5f.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwNjUgMS4zMzMzM0M0LjMyMDY1IDEuMzMzMzMgMS4zMzM5OCA0LjMyIDEuMzMzOTggOEMxLjMzMzk4IDExLjY4IDQuMzIwNjUgMTQuNjY2NyA4LjAwMDY1IDE0LjY2NjdDMTEuNjgwNyAxNC42NjY3IDE0LjY2NzMgMTEuNjggMTQuNjY3MyA4QzE0LjY2NzMgNC4zMiAxMS42ODA3IDEuMzMzMzMgOC4wMDA2NSAxLjMzMzMzWk04LjAwMDY1IDEzLjMzMzNDNS4wNTM5OSAxMy4zMzMzIDIuNjY3MzIgMTAuOTQ2NyAyLjY2NzMyIDhDMi42NjczMiA1LjA1MzMzIDUuMDUzOTkgMi42NjY2NiA4LjAwMDY1IDIuNjY2NjZDMTAuOTQ3MyAyLjY2NjY2IDEzLjMzNCA1LjA1MzMzIDEzLjMzNCA4QzEzLjMzNCAxMC45NDY3IDEwLjk0NzMgMTMuMzMzMyA4LjAwMDY1IDEzLjMzMzNaIiBmaWxsPSIjNjQ2NDY0Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwNjUgMS4zMzMzM0M0LjMyMDY1IDEuMzMzMzMgMS4zMzM5OCA0LjMyIDEuMzMzOTggOEMxLjMzMzk4IDExLjY4IDQuMzIwNjUgMTQuNjY2NyA4LjAwMDY1IDE0LjY2NjdDMTEuNjgwNyAxNC42NjY3IDE0LjY2NzMgMTEuNjggMTQuNjY3MyA4QzE0LjY2NzMgNC4zMiAxMS42ODA3IDEuMzMzMzMgOC4wMDA2NSAxLjMzMzMzWk04LjAwMDY1IDEzLjMzMzNDNS4wNTM5OSAxMy4zMzMzIDIuNjY3MzIgMTAuOTQ2NyAyLjY2NzMyIDhDMi42NjczMiA1LjA1MzMzIDUuMDUzOTkgMi42NjY2NiA4LjAwMDY1IDIuNjY2NjZDMTAuOTQ3MyAyLjY2NjY2IDEzLjMzNCA1LjA1MzMzIDEzLjMzNCA4QzEzLjMzNCAxMC45NDY3IDEwLjk0NzMgMTMuMzMzMyA4LjAwMDY1IDEzLjMzMzNaIiBmaWxsPSIjNjQ2NDY0Ii8+CjxwYXRoIGQ9Ik03Ljk5OTM1IDExLjMzMzNDOS44NDAzIDExLjMzMzMgMTEuMzMyNyA5Ljg0MDk1IDExLjMzMjcgOC4wMDAwMUMxMS4zMzI3IDYuMTU5MDYgOS44NDAzIDQuNjY2NjcgNy45OTkzNSA0LjY2NjY3QzYuMTU4NCA0LjY2NjY3IDQuNjY2MDIgNi4xNTkwNiA0LjY2NjAyIDguMDAwMDFDNC42NjYwMiA5Ljg0MDk1IDYuMTU4NCAxMS4zMzMzIDcuOTk5MzUgMTEuMzMzM1oiIGZpbGw9IiM2NDY0NjQiLz4KPC9zdmc+Cg=="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjAwMDcgNS4zMzMzN0MxNy4yODA3IDUuMzMzMzcgNS4zMzM5OCAxNy4yOCA1LjMzMzk4IDMyQzUuMzMzOTggNDYuNzIgMTcuMjgwNyA1OC42NjY3IDMyLjAwMDcgNTguNjY2N0M0Ni43MjA3IDU4LjY2NjcgNTguNjY3MyA0Ni43MiA1OC42NjczIDMyQzU4LjY2NzMgMTcuMjggNDYuNzIwNyA1LjMzMzM3IDMyLjAwMDcgNS4zMzMzN1pNMzIuMDAwNyAxMy4zMzM0QzM2LjQyNzMgMTMuMzMzNCA0MC4wMDA3IDE2LjkwNjcgNDAuMDAwNyAyMS4zMzM0QzQwLjAwMDcgMjUuNzYgMzYuNDI3MyAyOS4zMzM0IDMyLjAwMDcgMjkuMzMzNEMyNy41NzQgMjkuMzMzNCAyNC4wMDA3IDI1Ljc2IDI0LjAwMDcgMjEuMzMzNEMyNC4wMDA3IDE2LjkwNjcgMjcuNTc0IDEzLjMzMzQgMzIuMDAwNyAxMy4zMzM0Wk0zMi4wMDA3IDUxLjJDMjUuMzM0IDUxLjIgMTkuNDQwNyA0Ny43ODY3IDE2LjAwMDcgNDIuNjEzNEMxNi4wODA3IDM3LjMwNjcgMjYuNjY3MyAzNC40IDMyLjAwMDcgMzQuNEMzNy4zMDczIDM0LjQgNDcuOTIwNyAzNy4zMDY3IDQ4LjAwMDcgNDIuNjEzNEM0NC41NjA3IDQ3Ljc4NjcgMzguNjY3MyA1MS4yIDMyLjAwMDcgNTEuMloiIGZpbGw9IiMzNjM2MzYiLz4KPC9zdmc+Cg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjMzNCA0LjY2NjYzSDQuNjY3MzJDMy4zODM5OCA0LjY2NjYzIDIuMzMzOTggNS43MTY2MyAyLjMzMzk4IDYuOTk5OTZWMjFDMi4zMzM5OCAyMi4yODMzIDMuMzgzOTggMjMuMzMzMyA0LjY2NzMyIDIzLjMzMzNIMjMuMzM0QzI0LjYxNzMgMjMuMzMzMyAyNS42NjczIDIyLjI4MzMgMjUuNjY3MyAyMVY2Ljk5OTk2QzI1LjY2NzMgNS43MTY2MyAyNC42MTczIDQuNjY2NjMgMjMuMzM0IDQuNjY2NjNaTTIyLjg2NzMgOS42MjQ5NkwxNS4yMzczIDE0LjM5NjZDMTQuNDc5IDE0Ljg3NSAxMy41MjIzIDE0Ljg3NSAxMi43NjQgMTQuMzk2Nkw1LjEzMzk4IDkuNjI0OTZDNC44NDIzMiA5LjQzODI5IDQuNjY3MzIgOS4xMjMyOSA0LjY2NzMyIDguNzg0OTZDNC42NjczMiA4LjAwMzI5IDUuNTE4OTggNy41MzY2MyA2LjE4Mzk4IDcuOTQ0OTZMMTQuMDAwNyAxMi44MzMzTDIxLjgxNzMgNy45NDQ5NkMyMi40ODIzIDcuNTM2NjMgMjMuMzM0IDguMDAzMjkgMjMuMzM0IDguNzg0OTZDMjMuMzM0IDkuMTIzMjkgMjMuMTU5IDkuNDM4MjkgMjIuODY3MyA5LjYyNDk2WiIgZmlsbD0iIzMyMzIzMiIvPgo8L3N2Zz4K"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/settings.f09250a.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
module.exports = __webpack_require__(57);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  store,
  route,
  redirect
}) {
  if (!store.state.auth.loggedIn && route.name.includes('member')) {
    redirect('/account/login');
  }

  let heading;
  const routeName = route.name;

  if (routeName === 'account-login') {
    if (store.state.auth.loggedIn) {
      redirect('/');
    }
  }

  switch (routeName) {
    case 'content-media-id':
      heading = '現正播放';
      break;

    case 'content-paperbook-id':
      heading = '書籍簡介';
      break;

    case 'content-ebook-id':
      heading = '書籍簡介';
      break;

    case 'content-test-id':
      heading = '測驗挑戰';
      break;

    case 'content-ebook-reading-id':
      heading = '現正閱讀';
      break;

    case 'member-cart':
      heading = '購物清單';
      break;

    case 'member-collections':
      heading = '我的收藏';
      break;

    case 'member-orderPlan':
      heading = '訂購專區';
      break;

    case 'member-orderReceipt':
      heading = '訂購專區';
      break;

    case 'member-checkout':
      heading = '付款資訊';
      break;

    case 'member-records':
      heading = '購買紀錄';
      break;

    case 'account-login':
      heading = '會員登入';
      break;

    case 'account-register':
      heading = '歡迎註冊 !';
      break;

    case 'account-resetPassword':
      heading = '我要修改密碼';
      break;

    case 'account-forgetPassword':
      heading = '忘記密碼';
      break;
  }

  store.commit('setHeading', heading);
  console.log(heading, routeName);
  let backRoute = '/member';
  app.router.beforeEach((to, from, next) => {
    if (to.path === '/member/cart' && from.path !== '/member/checkout') {
      backRoute = from.path;
      store.commit('setBackRoute', backRoute);
      next();
    } else next();
  });
  store.commit('setBackRoute', backRoute);
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchHeader_vue_vue_type_style_index_0_id_58f861f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchHeader_vue_vue_type_style_index_0_id_58f861f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchHeader_vue_vue_type_style_index_0_id_58f861f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchHeader_vue_vue_type_style_index_0_id_58f861f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchHeader_vue_vue_type_style_index_0_id_58f861f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.close-enter-active[data-v-58f861f8],.close-leave-active[data-v-58f861f8],.open-enter-active[data-v-58f861f8],.open-leave-active[data-v-58f861f8]{\n  transition:left .5s\n}\n.open-enter[data-v-58f861f8],.open-leave-to[data-v-58f861f8]{\n  left:-100%\n}\n.open-enter-to[data-v-58f861f8],.open-leave[data-v-58f861f8]{\n  left:0\n}\n.close-enter[data-v-58f861f8],.close-leave-to[data-v-58f861f8]{\n  left:-100%\n}\n.close-enter-to[data-v-58f861f8],.close-leave[data-v-58f861f8]{\n  left:0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_3f1118d7_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_3f1118d7_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_3f1118d7_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_3f1118d7_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_3f1118d7_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\nnav[data-v-3f1118d7]{\n  height:calc(100vh - 52px)\n}\nh2[data-v-3f1118d7]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  text-align:center\n}\na[data-v-3f1118d7], button[data-v-3f1118d7]{\n  display:block;\n  padding-left:2.25rem;\n  padding-right:2.25rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  line-height:1rem\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("382a115c", content, true)

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(31);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.9 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.account__btn{\n  display:block;\n  width:100%;\n  border-radius:1.5rem;\n  border-width:1px;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity));\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  text-align:center;\n  font-size:1rem;\n  line-height:1.5rem\n}\n\n.account__input__wrap{\n  position:relative;\n  margin-bottom:1.5rem;\n  display:block\n}\n\n.account__label{\n  margin-bottom:0.5rem;\n  display:block;\n  font-size:1rem;\n  line-height:1.5rem\n}\n\n.account__input{\n  width:100%;\n  border-radius:1.5rem;\n  border-width:1px\n}\n\n.account__input:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 198, 81, var(--tw-border-opacity));\n}\n\n.account__input{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  padding-right:2.5rem;\n  padding-left:0.75rem;\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.account__input:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.account__input__help{\n  position:absolute;\n  right:0.5rem;\n  bottom:-1rem;\n  white-space:nowrap;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(220, 38, 38, var(--tw-text-opacity))\n}\n\n.account__eye{\n  position:absolute;\n  top:0px;\n  right:1.25rem;\n  bottom:0px;\n  margin:auto;\n  height:1.25rem;\n  width:1.25rem\n}\n\n.account__input::-moz-placeholder{\n  --tw-text-opacity:1;\n  color:rgba(196, 196, 196, var(--tw-text-opacity));\n  opacity:1\n}\n\n.account__input:-ms-input-placeholder{\n  --tw-text-opacity:1;\n  color:rgba(196, 196, 196, var(--tw-text-opacity));\n  opacity:1\n}\n\n.account__input::placeholder{\n  --tw-text-opacity:1;\n  color:rgba(196, 196, 196, var(--tw-text-opacity));\n  opacity:1\n}\n\n.account__input::-ms-input-placeholder{\n  --tw-text-opacity:1;\n  color:rgba(196, 196, 196, var(--tw-text-opacity))\n}\n\n.account__input::-ms-input-placeholder{\n  --tw-text-opacity:1;\n  color:rgba(196, 196, 196, var(--tw-text-opacity))\n}\n\n.checkout__input{\n  width:100%;\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  border-radius:0.25rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(196, 196, 196, var(--tw-border-opacity));\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n.checkout__input:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.checkout__wrap{\n  margin-bottom:1rem;\n  display:block\n}\n\n.checkout__label{\n  margin-bottom:0.25rem;\n  display:block\n}\n\n.checkout__radio{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none\n}\n\n.checkout__radio:before{\n  content:\"\";\n  display:inline-block;\n  height:1rem;\n  width:1rem;\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n.checkout__radio:checked:before{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n}\n\n.test__question__wrap{\n  display:flex;\n  gap:0.625rem\n}\n\n.test__question__avatar{\n  height:3rem;\n  width:3rem;\n  border-radius:9999px\n}\n\n.test__question__bubble{\n  margin-bottom:2rem;\n  box-sizing:border-box;\n  width:15rem;\n  border-radius:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  --tw-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.no-scrollbar::-webkit-scrollbar,body::-webkit-scrollbar{\n  display:none\n}\n\n.no-scrollbar{\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n\n.sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0, 0, 0, 0);\n  white-space:nowrap;\n  border-width:0;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-x-0{\n  left:0px;\n  right:0px;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.top-1{\n  top:0.25rem;\n}\n\n.top-2{\n  top:0.5rem;\n}\n\n.top-3{\n  top:0.75rem;\n}\n\n.top-6{\n  top:1.5rem;\n}\n\n.top-13{\n  top:3.25rem;\n}\n\n.top-16{\n  top:4rem;\n}\n\n.-top-33{\n  top:-8.25rem;\n}\n\n.top-over{\n  top:calc(100% + 1px);\n}\n\n.right-0{\n  right:0px;\n}\n\n.right-2{\n  right:0.5rem;\n}\n\n.right-3{\n  right:0.75rem;\n}\n\n.right-6{\n  right:1.5rem;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.bottom-2{\n  bottom:0.5rem;\n}\n\n.bottom-20{\n  bottom:5rem;\n}\n\n.bottom-24{\n  bottom:6rem;\n}\n\n.-bottom-1{\n  bottom:-0.25rem;\n}\n\n.-bottom-6{\n  bottom:-1.5rem;\n}\n\n.-bottom-px{\n  bottom:-1px;\n}\n\n.-bottom-1\\.5{\n  bottom:-0.375rem;\n}\n\n.left-0{\n  left:0px;\n}\n\n.left-3{\n  left:0.75rem;\n}\n\n.left-5{\n  left:1.25rem;\n}\n\n.left-6{\n  left:1.5rem;\n}\n\n.-left-0{\n  left:0px;\n}\n\n.-left-0\\.5{\n  left:-0.125rem;\n}\n\n.left-1\\/5{\n  left:20%;\n}\n\n.z-0{\n  z-index:0;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.z-20{\n  z-index:20;\n}\n\n.z-30{\n  z-index:30;\n}\n\n.-z-1{\n  z-index:-1;\n}\n\n.m-6{\n  margin:1.5rem;\n}\n\n.m-auto{\n  margin:auto;\n}\n\n.mx-3{\n  margin-left:0.75rem;\n  margin-right:0.75rem;\n}\n\n.mx-4{\n  margin-left:1rem;\n  margin-right:1rem;\n}\n\n.mx-5{\n  margin-left:1.25rem;\n  margin-right:1.25rem;\n}\n\n.mx-6{\n  margin-left:1.5rem;\n  margin-right:1.5rem;\n}\n\n.mx-7{\n  margin-left:1.75rem;\n  margin-right:1.75rem;\n}\n\n.mx-10{\n  margin-left:2.5rem;\n  margin-right:2.5rem;\n}\n\n.mx-16{\n  margin-left:4rem;\n  margin-right:4rem;\n}\n\n.mx-20{\n  margin-left:5rem;\n  margin-right:5rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-2{\n  margin-top:0.5rem;\n  margin-bottom:0.5rem;\n}\n\n.my-9{\n  margin-top:2.25rem;\n  margin-bottom:2.25rem;\n}\n\n.my-auto{\n  margin-top:auto;\n  margin-bottom:auto;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-9{\n  margin-top:2.25rem;\n}\n\n.mt-12{\n  margin-top:3rem;\n}\n\n.-mt-1{\n  margin-top:-0.25rem;\n}\n\n.mr-0{\n  margin-right:0px;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mr-3{\n  margin-right:0.75rem;\n}\n\n.mr-4{\n  margin-right:1rem;\n}\n\n.mr-6{\n  margin-right:1.5rem;\n}\n\n.mr-7{\n  margin-right:1.75rem;\n}\n\n.mr-10{\n  margin-right:2.5rem;\n}\n\n.mr-0\\.5{\n  margin-right:0.125rem;\n}\n\n.mr-1\\.5{\n  margin-right:0.375rem;\n}\n\n.mb-0{\n  margin-bottom:0px;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.mb-7{\n  margin-bottom:1.75rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.mb-10{\n  margin-bottom:2.5rem;\n}\n\n.mb-12{\n  margin-bottom:3rem;\n}\n\n.mb-20{\n  margin-bottom:5rem;\n}\n\n.mb-28{\n  margin-bottom:7rem;\n}\n\n.mb-32{\n  margin-bottom:8rem;\n}\n\n.mb-0\\.5{\n  margin-bottom:0.125rem;\n}\n\n.mb-1\\.5{\n  margin-bottom:0.375rem;\n}\n\n.mb-2\\.5{\n  margin-bottom:0.625rem;\n}\n\n.ml-0{\n  margin-left:0px;\n}\n\n.ml-1{\n  margin-left:0.25rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.ml-auto{\n  margin-left:auto;\n}\n\n.box-border{\n  box-sizing:border-box;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.contents{\n  display:contents;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-0{\n  height:0px;\n}\n\n.h-1{\n  height:0.25rem;\n}\n\n.h-2{\n  height:0.5rem;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-5{\n  height:1.25rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-9{\n  height:2.25rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-13{\n  height:3.25rem;\n}\n\n.h-14{\n  height:3.5rem;\n}\n\n.h-18{\n  height:4.5rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.h-31{\n  height:7.75rem;\n}\n\n.h-35{\n  height:8.75rem;\n}\n\n.h-82{\n  height:20.5rem;\n}\n\n.h-auto{\n  height:auto;\n}\n\n.h-px{\n  height:1px;\n}\n\n.h-0\\.5{\n  height:0.125rem;\n}\n\n.h-2\\.5{\n  height:0.625rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.h-fit{\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content;\n}\n\n.min-h-12{\n  min-height:3rem;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.min-h-account-main{\n  min-height:28.875rem;\n}\n\n.w-0{\n  width:0px;\n}\n\n.w-2{\n  width:0.5rem;\n}\n\n.w-3{\n  width:0.75rem;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-5{\n  width:1.25rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-7{\n  width:1.75rem;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.w-9{\n  width:2.25rem;\n}\n\n.w-10{\n  width:2.5rem;\n}\n\n.w-11{\n  width:2.75rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-13{\n  width:3.25rem;\n}\n\n.w-16{\n  width:4rem;\n}\n\n.w-18{\n  width:4.5rem;\n}\n\n.w-20{\n  width:5rem;\n}\n\n.w-24{\n  width:6rem;\n}\n\n.w-28{\n  width:7rem;\n}\n\n.w-31{\n  width:7.75rem;\n}\n\n.w-35{\n  width:8.75rem;\n}\n\n.w-44{\n  width:11rem;\n}\n\n.w-45{\n  width:11.25rem;\n}\n\n.w-52{\n  width:13rem;\n}\n\n.w-60{\n  width:15rem;\n}\n\n.w-67{\n  width:16.75rem;\n}\n\n.w-80{\n  width:20rem;\n}\n\n.w-0\\.5{\n  width:0.125rem;\n}\n\n.w-2\\.5{\n  width:0.625rem;\n}\n\n.w-3\\.5{\n  width:0.875rem;\n}\n\n.w-2\\/4{\n  width:50%;\n}\n\n.w-2\\/5{\n  width:40%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.w-fit{\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n}\n\n.max-w-full{\n  max-width:100%;\n}\n\n.max-w-account-modal{\n  max-width:204px;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.flex-grow-0{\n  flex-grow:0;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-5{\n  --tw-translate-y:-1.25rem;\n}\n\n.scale-110{\n  --tw-scale-x:1.1;\n  --tw-scale-y:1.1;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3{\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-around{\n  justify-content:space-around;\n}\n\n.justify-evenly{\n  justify-content:space-evenly;\n}\n\n.justify-items-stretch{\n  justify-items:stretch;\n}\n\n.gap-1{\n  gap:0.25rem;\n}\n\n.gap-2{\n  gap:0.5rem;\n}\n\n.gap-3{\n  gap:0.75rem;\n}\n\n.gap-4{\n  gap:1rem;\n}\n\n.gap-1\\.5{\n  gap:0.375rem;\n}\n\n.gap-2\\.5{\n  gap:0.625rem;\n}\n\n.gap-3\\.5{\n  gap:0.875rem;\n}\n\n.gap-x-7{\n  -moz-column-gap:1.75rem;\n       column-gap:1.75rem;\n}\n\n.self-end{\n  align-self:flex-end;\n}\n\n.self-center{\n  align-self:center;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-x-auto{\n  overflow-x:auto;\n}\n\n.overflow-y-hidden{\n  overflow-y:hidden;\n}\n\n.overflow-x-scroll{\n  overflow-x:scroll;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-xl{\n  border-radius:0.75rem;\n}\n\n.rounded-2xl{\n  border-radius:1rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.rounded-t-lg{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem;\n}\n\n.rounded-t-2xl{\n  border-top-left-radius:1rem;\n  border-top-right-radius:1rem;\n}\n\n.border-4{\n  border-width:4px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-b-4{\n  border-bottom-width:4px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-solid{\n  border-style:solid;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(196, 196, 196, var(--tw-border-opacity));\n}\n\n.border-yellow{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 198, 81, var(--tw-border-opacity));\n}\n\n.bg-transparent{\n  background-color:transparent;\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(248, 248, 248, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(196, 196, 196, var(--tw-bg-opacity));\n}\n\n.bg-gray-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(141, 141, 141, var(--tw-bg-opacity));\n}\n\n.bg-red{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 185, 170, var(--tw-bg-opacity));\n}\n\n.bg-yellow{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity));\n}\n\n.bg-blue{\n  --tw-bg-opacity:1;\n  background-color:rgba(169, 226, 227, var(--tw-bg-opacity));\n}\n\n.bg-primary{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-yellow:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity));\n}\n\n.bg-cover{\n  background-size:cover;\n}\n\n.bg-center{\n  background-position:center;\n}\n\n.bg-no-repeat{\n  background-repeat:no-repeat;\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-3{\n  padding:0.75rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.p-7{\n  padding:1.75rem;\n}\n\n.p-2\\.5{\n  padding:0.625rem;\n}\n\n.px-1{\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.px-9{\n  padding-left:2.25rem;\n  padding-right:2.25rem;\n}\n\n.px-1\\.5{\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n}\n\n.px-2\\.5{\n  padding-left:0.625rem;\n  padding-right:0.625rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.py-5{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n}\n\n.py-6{\n  padding-top:1.5rem;\n  padding-bottom:1.5rem;\n}\n\n.py-10{\n  padding-top:2.5rem;\n  padding-bottom:2.5rem;\n}\n\n.py-11{\n  padding-top:2.75rem;\n  padding-bottom:2.75rem;\n}\n\n.py-1\\.5{\n  padding-top:0.375rem;\n  padding-bottom:0.375rem;\n}\n\n.py-2\\.5{\n  padding-top:0.625rem;\n  padding-bottom:0.625rem;\n}\n\n.py-3\\.5{\n  padding-top:0.875rem;\n  padding-bottom:0.875rem;\n}\n\n.pt-2{\n  padding-top:0.5rem;\n}\n\n.pt-3{\n  padding-top:0.75rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-5{\n  padding-top:1.25rem;\n}\n\n.pt-6{\n  padding-top:1.5rem;\n}\n\n.pt-3\\.5{\n  padding-top:0.875rem;\n}\n\n.pr-7{\n  padding-right:1.75rem;\n}\n\n.pb-1{\n  padding-bottom:0.25rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.pb-3{\n  padding-bottom:0.75rem;\n}\n\n.pb-4{\n  padding-bottom:1rem;\n}\n\n.pb-5{\n  padding-bottom:1.25rem;\n}\n\n.pb-6{\n  padding-bottom:1.5rem;\n}\n\n.pb-9{\n  padding-bottom:2.25rem;\n}\n\n.pb-16{\n  padding-bottom:4rem;\n}\n\n.pb-20{\n  padding-bottom:5rem;\n}\n\n.pb-px{\n  padding-bottom:1px;\n}\n\n.pb-3\\.5{\n  padding-bottom:0.875rem;\n}\n\n.pl-3{\n  padding-left:0.75rem;\n}\n\n.pl-4{\n  padding-left:1rem;\n}\n\n.pl-6{\n  padding-left:1.5rem;\n}\n\n.pl-8{\n  padding-left:2rem;\n}\n\n.pl-10{\n  padding-left:2.5rem;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.align-middle{\n  vertical-align:middle;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-5{\n  line-height:1.25rem;\n}\n\n.leading-8{\n  line-height:2rem;\n}\n\n.leading-none{\n  line-height:1;\n}\n\n.leading-normal{\n  line-height:1.5;\n}\n\n.leading-loose{\n  line-height:2;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(141, 141, 141, var(--tw-text-opacity));\n}\n\n.text-primary{\n  --tw-text-opacity:1;\n  color:rgba(255, 241, 207, var(--tw-text-opacity));\n}\n\n.text-tangerine{\n  --tw-text-opacity:1;\n  color:rgba(235, 117, 19, var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.opacity-70{\n  opacity:0.7;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-sm{\n  --tw-shadow:0px 2px 4px rgba(174, 174, 174, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.drop-shadow{\n  --tw-drop-shadow:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));\n}\n\n.invert{\n  --tw-invert:invert(100%);\n}\n\n.sepia{\n  --tw-sepia:sepia(100%);\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.delay-100{\n  transition-delay:100ms;\n}\n\n.line-clamp-1{\n  overflow:hidden;\n  display:-webkit-box;\n  -webkit-box-orient:vertical;\n  -webkit-line-clamp:1;\n}\n\n.line-clamp-2{\n  overflow:hidden;\n  display:-webkit-box;\n  -webkit-box-orient:vertical;\n  -webkit-line-clamp:2;\n}\n\n.line-clamp-3{\n  overflow:hidden;\n  display:-webkit-box;\n  -webkit-box-orient:vertical;\n  -webkit-line-clamp:3;\n}\n\nbody{\n  color:#363636;\n  font-family:\"Noto Sans TC\",sans-serif;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  line-height:1rem\n}\n\nimg{\n  display:block;\n  height:auto;\n  width:100%\n}\n\ninput:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\na{\n  display:block\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("005fa62c", content, true)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\nhtml{\n  scroll-behavior:smooth\n}\n\n.page-enter-active,.page-leave-active{\n  transition:opacity .5s\n}\n\n.page-enter,.page-leave-to{\n  opacity:0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_id_2d75d722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_id_2d75d722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_id_2d75d722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_id_2d75d722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_account_vue_vue_type_style_index_0_id_2d75d722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(29);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.banner[data-v-2d75d722]{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat:no-repeat;\n  background-size:cover\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account-big.svg": 32,
	"./account.svg": 51,
	"./books.png": 52,
	"./catalog.svg": 53,
	"./mailbox.svg": 33,
	"./message.svg": 17,
	"./pen-line.svg": 54,
	"./settings.svg": 34,
	"./store-tag.svg": 55
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
webpackContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/account.a123db1.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB7VbbbdswFJVkwwbsj6obyBNYAfz6qztBsoHdCdQNak8QZ4IoG3QDq39+AVUnCLuBPg3Dj5xjiAAtiEwAyUCA5AAUJd4r3nNJ3strWZ/46LB7vd4zei9HJna73Q1farXaX53OarVqqQO+77vVatXf7/cijmNhvYIqJz6dTpFt23+U8TbaXaPR+HI8Hm00D9+/0f5JBfzzDf8M1ck6nc7QcZxHzgnSAmRuQCIxEXDOD8cRMKIqxllFGBQXP+If1XC3251jbI7PBLo/UhI/rVfALTjphFhKL12BZ+0Eth3C4BgtAYHpcrmccbzf788x5mMbW6ZVcNJeYLm/Yj9tTMI9jXN0L3RokIM0jm7abDZb0jhxOBym6Nx6vT62DJAE3CRJXL5st1tO7OboJqoOPJdeJSA1iaLowsvNZsNzFWH1bi0DCm8BAfl3GsyO41yMQeJRJz/bSPsnNCEHsawufgwyulPFYFKpVNrp8gvo/kIfZSdfr9chSNzr5CoBxvNEZZ5VZBRwQvmNlZP6TzTASMjzErIHdFq5YxUETvmMBzL1UivHio3y5IUJMMToJZMSs6BOzu3KkxcmQNBL9rrEg7ANdfJSCKSJhgc5yPNysVjwoEZ58lIIEIiMEJ2rWwVdYiqNgEw8eA1McpyF4CoECOllXhgrco8heRUCaZzzHhkZ5EIN2VIJEDgLTExD1csMLuSlE0AlFL4lMUl56QTUxISz4JvkDMnSCRDSS7yONSrnG5i141UIyMQEL0dq4pGlG14nrEN5KM+3IQtM5XYj2tlJMdktdDz5nRallgEhWsDEBBIh+nt836EJ1ozyZi29LFch60I06cQDyrqZWj0ZXSiKwWDAiooFyX+0Ge8E6xPvDS9phY3vACX97gAAAABJRU5ErkJggg=="

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/catalog.2699dff.svg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pen-line.39f875b.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjk5NjEgNEg4Ljk5NjA5QzguNDY1ODQgNC4wMDA2IDcuOTU3NDggNC4yMTE1IDcuNTgyNTQgNC41ODY0NEM3LjIwNzU5IDQuOTYxMzkgNi45OTY2OSA1LjQ2OTc1IDYuOTk2MDkgNlYyOEM2Ljk5NjA5IDI4LjE3ODUgNy4wNDM4NyAyOC4zNTM4IDcuMTM0NDggMjguNTA3NkM3LjIyNTA4IDI4LjY2MTQgNy4zNTUyIDI4Ljc4ODEgNy41MTEzMiAyOC44NzQ2QzcuNjY3NDUgMjguOTYxMiA3Ljg0MzkgMjkuMDA0MyA4LjAyMjM0IDI4Ljk5OTdDOC4yMDA3OSAyOC45OTUgOC4zNzQ3MiAyOC45NDI2IDguNTI2MDkgMjguODQ4TDE1Ljk5NTMgMjQuMTc5M0wyMy40NjYyIDI4Ljg0OEMyMy42MTc2IDI4Ljk0MjYgMjMuNzkxNSAyOC45OTUgMjMuOTcgMjguOTk5N0MyNC4xNDg0IDI5LjAwNDMgMjQuMzI0OSAyOC45NjEyIDI0LjQ4MSAyOC44NzQ2QzI0LjYzNzEgMjguNzg4MSAyNC43NjcyIDI4LjY2MTQgMjQuODU3OCAyOC41MDc2QzI0Ljk0ODQgMjguMzUzOCAyNC45OTYyIDI4LjE3ODUgMjQuOTk2MiAyOFY2QzI0Ljk5NTYgNS40Njk3NSAyNC43ODQ3IDQuOTYxMzkgMjQuNDA5OCA0LjU4NjQ0QzI0LjAzNDggNC4yMTE1IDIzLjUyNjUgNC4wMDA2IDIyLjk5NjIgNEgyMi45OTYxWk0yMi45OTYxIDI2LjE5NTlMMTYuNTI1MiAyMi4xNTJDMTYuMzY2MyAyMi4wNTI3IDE2LjE4MjYgMjIgMTUuOTk1MiAyMkMxNS44MDc4IDIyIDE1LjYyNDIgMjIuMDUyNyAxNS40NjUyIDIyLjE1Mkw4Ljk5NjIyIDI2LjE5NThWNkgyMi45OTYyTDIyLjk5NjEgMjYuMTk1OVoiIGZpbGw9IiMzNjM2MzYiLz4KPC9zdmc+Cg=="

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
// import Vue from 'vue'
const state = () => ({
  heading: 'default',
  backRoute: 'default',
  auth: {
    user: {
      name: 'Joyce'
    },
    loggedIn: false
  },
  collections: [{
    bookId: 1,
    name: '素養人才',
    desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小容',
    author: '一路',
    publishTime: '2021-06-30',
    imgSrc: 'sampleBook.jpg',
    imgAlt: ''
  }, {
    bookId: 2,
    name: '人才人才',
    desc: '書本小標內容書本小標內容',
    author: '一路',
    publishTime: '2021-06-30',
    imgSrc: 'sampleBook.jpg',
    imgAlt: ''
  }, {
    bookId: 3,
    name: '素養素養素養',
    desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
    author: '一路',
    publishTime: '2021-06-30',
    imgSrc: 'sampleBook.jpg',
    imgAlt: ''
  }],
  shoppingList: [{
    bookId: 0,
    name: '教育情緣 - 回首七十人生教育路回首七十人生',
    author: '吳清基',
    imgSrc: 'sampleBook.jpg',
    price: 225,
    checked: false
  }, {
    bookId: 1,
    checked: true,
    imgSrc: 'sampleBook.jpg',
    name: '教育情緣 - 回首七十人生教育路',
    author: '吳清基',
    price: 300
  }],
  billList: []
});
const getters = {
  isCollection: state => bookId => {
    const isTheSame = state.collections.findIndex(element => element.bookId === bookId);
    if (isTheSame !== -1) return true;else return false;
  }
};
const actions = {
  handleAddCollection({
    commit
  }, payload) {
    // console.log(Vue.store.state.heading)
    commit('addCollection', { ...payload
    });
  },

  handleDelCollection({
    commit
  }, payload) {
    commit('delCollections', payload);
  },

  handleAddShoppingList({
    commit
  }, payload) {
    commit('addShoppingList', { ...payload
    });
  },

  handleDelShoppingList({
    commit
  }) {
    commit('delShoppingList');
  },

  handleLogin({
    commit
  }, isLogin) {
    commit('setLogin', isLogin);
  }

};
const mutations = {
  setHeading(state, heading) {
    state.heading = heading;
  },

  setBackRoute(state, route) {
    state.backRoute = route;
  },

  addCollection(state, payload) {
    if (!state.auth.loggedIn) {
      alert('請登入再完成此操作');
      return false;
    }

    state.collections.push({ ...payload
    });
  },

  delCollections(state, bookId) {
    state.collections = state.collections.filter(element => {
      return element.bookId !== bookId;
    });
  },

  checkShoppingListItem(state, bookId) {
    const isBook = state.shoppingList.findIndex(element => element.bookId === bookId);
    state.shoppingList[isBook].checked = !state.shoppingList[isBook].checked;
  },

  selectAllShoppingListItem(state, payload) {
    state.shoppingList.forEach(element => {
      element.checked = payload;
    });
  },

  addShoppingList(state, payload) {
    const isExist = state.shoppingList.findIndex(element => element.bookId === payload.bookId);

    if (isExist !== -1) {
      alert('此商品已在購物車');
      return false;
    }

    const newBook = {
      bookId: payload.bookId,
      checked: false,
      imgSrc: payload.imgSrc,
      name: payload.name,
      author: payload.author,
      price: payload.price
    };
    state.shoppingList.push(newBook);
    alert('加入成功');
    return false;
  },

  delShoppingList(state) {
    const msg = '您真的確定要刪除嗎？\n\n請確認！';
    if (!confirm(msg)) return false;
    state.shoppingList = state.shoppingList.filter(element => {
      return element.checked === false;
    });
  },

  beforeJumpToCheckout(state) {
    state.billList = state.shoppingList.filter(element => {
      return element.checked === true;
    });
    if (state.billList.length !== 0) this.$router.push('/member/checkout');else {
      alert('您未挑選任何商品');
      return false;
    }
  },

  setLogin(state, isLogin) {
    state.auth.loggedIn = isLogin;
  }

};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AccountAcctInput", function() { return AccountAcctInput; });
__webpack_require__.d(components_namespaceObject, "AccountCfmPwdInput", function() { return AccountCfmPwdInput; });
__webpack_require__.d(components_namespaceObject, "AccountModal", function() { return AccountModal; });
__webpack_require__.d(components_namespaceObject, "AccountPwdInput", function() { return AccountPwdInput; });
__webpack_require__.d(components_namespaceObject, "CommonBookSubEntry", function() { return CommonBookSubEntry; });
__webpack_require__.d(components_namespaceObject, "CommonStore", function() { return CommonStore; });
__webpack_require__.d(components_namespaceObject, "ContentEbookArrowButton", function() { return ContentEbookArrowButton; });
__webpack_require__.d(components_namespaceObject, "ContentEbookRange", function() { return ContentEbookRange; });
__webpack_require__.d(components_namespaceObject, "ContentEbookSettings", function() { return ContentEbookSettings; });
__webpack_require__.d(components_namespaceObject, "ContentMediaAudio", function() { return ContentMediaAudio; });
__webpack_require__.d(components_namespaceObject, "ContentMediaNav", function() { return ContentMediaNav; });
__webpack_require__.d(components_namespaceObject, "ContentMediaRemark", function() { return ContentMediaRemark; });
__webpack_require__.d(components_namespaceObject, "ContentMediaVideo", function() { return ContentMediaVideo; });
__webpack_require__.d(components_namespaceObject, "ContentSelectBox", function() { return ContentSelectBox; });
__webpack_require__.d(components_namespaceObject, "ContentStore", function() { return ContentStore; });
__webpack_require__.d(components_namespaceObject, "ContentTestEndBubble", function() { return ContentTestEndBubble; });
__webpack_require__.d(components_namespaceObject, "ContentTestQuestion", function() { return ContentTestQuestion; });
__webpack_require__.d(components_namespaceObject, "ContentTestResult", function() { return ContentTestResult; });
__webpack_require__.d(components_namespaceObject, "ContentTestUserAnswer", function() { return ContentTestUserAnswer; });
__webpack_require__.d(components_namespaceObject, "IndexCateFeatured", function() { return IndexCateFeatured; });
__webpack_require__.d(components_namespaceObject, "IndexCateHit", function() { return IndexCateHit; });
__webpack_require__.d(components_namespaceObject, "IndexCateLatest", function() { return IndexCateLatest; });
__webpack_require__.d(components_namespaceObject, "IndexCateRecommend", function() { return IndexCateRecommend; });
__webpack_require__.d(components_namespaceObject, "LayoutBackHeader", function() { return LayoutBackHeader; });
__webpack_require__.d(components_namespaceObject, "LayoutEbookFooterNav", function() { return LayoutEbookFooterNav; });
__webpack_require__.d(components_namespaceObject, "LayoutSearchHeader", function() { return LayoutSearchHeader; });
__webpack_require__.d(components_namespaceObject, "LayoutSideBar", function() { return LayoutSideBar; });
__webpack_require__.d(components_namespaceObject, "MemberCollection", function() { return MemberCollection; });
__webpack_require__.d(components_namespaceObject, "MemberIcon", function() { return MemberIcon; });
__webpack_require__.d(components_namespaceObject, "MemberReceiptTitle", function() { return MemberReceiptTitle; });
__webpack_require__.d(components_namespaceObject, "MemberRecord", function() { return MemberRecord; });
__webpack_require__.d(components_namespaceObject, "SvgEbookCart", function() { return SvgEbookCart; });
__webpack_require__.d(components_namespaceObject, "SvgEbookReading", function() { return SvgEbookReading; });
__webpack_require__.d(components_namespaceObject, "SvgFooterBook", function() { return SvgFooterBook; });
__webpack_require__.d(components_namespaceObject, "SvgFooterHome", function() { return SvgFooterHome; });
__webpack_require__.d(components_namespaceObject, "SvgFooterMember", function() { return SvgFooterMember; });
__webpack_require__.d(components_namespaceObject, "SvgHeaderCart", function() { return SvgHeaderCart; });
__webpack_require__.d(components_namespaceObject, "SvgHeaderHam", function() { return SvgHeaderHam; });
__webpack_require__.d(components_namespaceObject, "SvgHeaderSearch", function() { return SvgHeaderSearch; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(3);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(24);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['layoutContent'] = __webpack_require__(37);
middleware['layoutContent'] = middleware['layoutContent'].default || middleware['layoutContent'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(25);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _721c7d06 = () => interopDefault(__webpack_require__.e(/* import() | pages/content/index */ 36).then(__webpack_require__.bind(null, 214)));

const _242206ec = () => interopDefault(__webpack_require__.e(/* import() | pages/member/index */ 44).then(__webpack_require__.bind(null, 215)));

const _864f634e = () => interopDefault(__webpack_require__.e(/* import() | pages/account/forgetPassword */ 30).then(__webpack_require__.bind(null, 216)));

const _0245ad70 = () => interopDefault(__webpack_require__.e(/* import() | pages/account/login */ 31).then(__webpack_require__.bind(null, 217)));

const _edcfead8 = () => interopDefault(__webpack_require__.e(/* import() | pages/account/register */ 32).then(__webpack_require__.bind(null, 218)));

const _4e9f712e = () => interopDefault(__webpack_require__.e(/* import() | pages/account/resetPassword */ 33).then(__webpack_require__.bind(null, 219)));

const _e123be14 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/cart */ 41).then(__webpack_require__.bind(null, 220)));

const _1a29a11c = () => interopDefault(__webpack_require__.e(/* import() | pages/member/checkout */ 42).then(__webpack_require__.bind(null, 221)));

const _2197fea2 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/collections */ 43).then(__webpack_require__.bind(null, 222)));

const _7a491231 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/orderPlan */ 45).then(__webpack_require__.bind(null, 223)));

const _bd225c40 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/orderReceipt */ 46).then(__webpack_require__.bind(null, 224)));

const _3ba2a848 = () => interopDefault(__webpack_require__.e(/* import() | pages/member/records */ 47).then(__webpack_require__.bind(null, 225)));

const _41cdf221 = () => interopDefault(__webpack_require__.e(/* import() | pages/content/ebook/reading/_id */ 35).then(__webpack_require__.bind(null, 213)));

const _72a3a4a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/content/ebook/_id */ 34).then(__webpack_require__.bind(null, 226)));

const _13981dba = () => interopDefault(__webpack_require__.e(/* import() | pages/content/media/_id */ 37).then(__webpack_require__.bind(null, 227)));

const _4cc131cb = () => interopDefault(__webpack_require__.e(/* import() | pages/content/paperbook/_id */ 38).then(__webpack_require__.bind(null, 228)));

const _3c1daa3c = () => interopDefault(__webpack_require__.e(/* import() | pages/content/test/_id */ 39).then(__webpack_require__.bind(null, 229)));

const _5da38493 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 40).then(__webpack_require__.bind(null, 230)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/content",
    component: _721c7d06,
    name: "content"
  }, {
    path: "/member",
    component: _242206ec,
    name: "member"
  }, {
    path: "/account/forgetPassword",
    component: _864f634e,
    name: "account-forgetPassword"
  }, {
    path: "/account/login",
    component: _0245ad70,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _edcfead8,
    name: "account-register"
  }, {
    path: "/account/resetPassword",
    component: _4e9f712e,
    name: "account-resetPassword"
  }, {
    path: "/member/cart",
    component: _e123be14,
    name: "member-cart"
  }, {
    path: "/member/checkout",
    component: _1a29a11c,
    name: "member-checkout"
  }, {
    path: "/member/collections",
    component: _2197fea2,
    name: "member-collections"
  }, {
    path: "/member/orderPlan",
    component: _7a491231,
    name: "member-orderPlan"
  }, {
    path: "/member/orderReceipt",
    component: _bd225c40,
    name: "member-orderReceipt"
  }, {
    path: "/member/records",
    component: _3ba2a848,
    name: "member-records"
  }, {
    path: "/content/ebook/reading/:id?",
    component: _41cdf221,
    name: "content-ebook-reading-id"
  }, {
    path: "/content/ebook/:id?",
    component: _72a3a4a4,
    name: "content-ebook-id"
  }, {
    path: "/content/media/:id?",
    component: _13981dba,
    name: "content-media-id"
  }, {
    path: "/content/paperbook/:id?",
    component: _4cc131cb,
    name: "content-paperbook-id"
  }, {
    path: "/content/test/:id?",
    component: _3c1daa3c,
    name: "content-test-id"
  }, {
    path: "/",
    component: _5da38493,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=50622795&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('LayoutSearchHeader'),_vm._ssrNode(" <p class=\"my-13 text-center text-xl\">Sorry，您所訪問的頁面不存在 !</p> <div class=\"w-67 mx-auto\"><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt=\"404圖片\"></div> "),_c('NuxtLink',{staticClass:"\n      block\n      w-44\n      mx-auto\n      py-2.5\n      bg-yellow\n      text-center\n      rounded-2xl\n      shadow-sm\n    ",attrs:{"to":"/"}},[_vm._v("\n    返回首頁\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=50622795&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: {
    error: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "46fbd7d5"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);

/* nuxt-component-imports */
installComponents(error_component, {LayoutSearchHeader: __webpack_require__(19).default})

// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "6f26df80"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/tailwind.css
var tailwind = __webpack_require__(44);

// EXTERNAL MODULE: ./assets/css/animation.css
var animation = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/account.vue?vue&type=template&id=2d75d722&scoped=true&
var accountvue_type_template_id_2d75d722_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"banner box-border h-82 bg-primary\" data-v-2d75d722></div> "),_vm._ssrNode("<div class=\"relative -top-33 px-6\" data-v-2d75d722>","</div>",[_vm._ssrNode("<h2 class=\"mb-3 text-2xl font-medium\" data-v-2d75d722>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$store.state.heading)+"\n    ")+"</h2> "),_vm._ssrNode("<main class=\"rounded-lg min-h-account-main py-10 px-8 shadow-md bg-white\" data-v-2d75d722>","</main>",[_c('nuxt')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"fixed bottom-0 w-full bg-white shadow-md\" data-v-2d75d722>","</footer>",[_vm._ssrNode("<div class=\"flex justify-between mx-10 my-2 text-center\" data-v-2d75d722>","</div>",[_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/content"}},[_c('SvgFooterBook',{staticClass:"mb-2"}),_vm._v(" 書城\n      ")],1),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/"}},[_c('SvgFooterHome',{staticClass:"mb-2"}),_vm._v(" 首頁\n      ")],1),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/member"}},[_c('SvgFooterMember',{staticClass:"mb-2"}),_vm._v(" 我的\n      ")],1)],2)])],2)}
var accountvue_type_template_id_2d75d722_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/account.vue?vue&type=template&id=2d75d722&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/account.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  name: 'Auth',
  middleware: 'layoutContent'
});
// CONCATENATED MODULE: ./layouts/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/account.vue



function account_injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var account_component = Object(componentNormalizer["a" /* default */])(
  layouts_accountvue_type_script_lang_js_,
  accountvue_type_template_id_2d75d722_scoped_true_render,
  accountvue_type_template_id_2d75d722_scoped_true_staticRenderFns,
  false,
  account_injectStyles,
  "2d75d722",
  "2f2efc3a"
  
)

/* harmony default export */ var account = (account_component.exports);

/* nuxt-component-imports */
installComponents(account_component, {SvgFooterBook: __webpack_require__(21).default,SvgFooterHome: __webpack_require__(22).default,SvgFooterMember: __webpack_require__(23).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=53cbd58f&
var defaultvue_type_template_id_53cbd58f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[(_vm.$route.name === 'index' || _vm.$route.name === 'content')?_c('LayoutSearchHeader'):(_vm.$route.name === 'member')?_c('div',{staticStyle:{"margin-top":"-52px"}}):_c('LayoutBackHeader'),_vm._ssrNode(" <div class=\"h-13\"></div>"+_vm._ssrEscape("\n  "+_vm._s(_vm.error)+"\n  ")),_c('Nuxt'),_vm._ssrNode(" <div class=\"h-18\"></div> "),_vm._ssrNode("<footer class=\"fixed bottom-0 w-full bg-white shadow-md\">","</footer>",[_vm._ssrNode("<div class=\"flex justify-between mx-10 my-2 text-center\">","</div>",[_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/content"}},[_c('SvgFooterBook',{staticClass:"mb-2"}),_vm._v(" 書城\n      ")],1),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/"}},[_c('SvgFooterHome',{staticClass:"mb-2"}),_vm._v(" 首頁\n      ")],1),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"flex flex-col justify-center",attrs:{"to":"/member"}},[_c('SvgFooterMember',{staticClass:"mb-2"}),_vm._v(" 我的\n      ")],1)],2)])],2)}
var defaultvue_type_template_id_53cbd58f_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=53cbd58f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'DefaultLayout',
  middleware: 'layoutContent',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_53cbd58f_render,
  defaultvue_type_template_id_53cbd58f_staticRenderFns,
  false,
  null,
  null,
  "3cf9c364"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {LayoutSearchHeader: __webpack_require__(19).default,LayoutBackHeader: __webpack_require__(61).default,SvgFooterBook: __webpack_require__(21).default,SvgFooterHome: __webpack_require__(22).default,SvgFooterMember: __webpack_require__(23).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ebook.vue?vue&type=template&id=08a361b7&
var ebookvue_type_template_id_08a361b7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col min-h-screen"},[_vm._ssrNode("<header class=\"flex justify-center items-center fixed z-20 w-full bg-primary\">","</header>",[_vm._ssrNode("<a class=\"\n        self-center\n        absolute\n        left-6\n        top-0\n        bottom-0\n        w-6\n        h-fit\n        m-auto\n        bg-white\n        rounded-full\n      \"><img"+(_vm._ssrAttr("src",__webpack_require__(12)))+" alt=\"返回按鈕\"></a> "),_vm._ssrNode("<label class=\"relative block w-full mx-16 p-2.5\">","</label>",[_vm._ssrNode("<input type=\"text\" placeholder=\"搜尋內文\" class=\"w-full pl-8 py-1.5 rounded-lg leading-none\"> "),_vm._ssrNode("<button type=\"button\" class=\"absolute top-0 bottom-0 left-5\">","</button>",[_c('SvgHeaderSearch')],1)],2),_vm._ssrNode(" <button type=\"button\" class=\"absolute top-0 bottom-0 my-auto right-6\"><img"+(_vm._ssrAttr("src",__webpack_require__(17)))+" alt=\"訊息中心\"></button>")],2),_vm._ssrNode(" <div class=\"h-13\"></div> "),_c('NuxtChild',{attrs:{"setting-open":_vm.settingOpen,"catalog-open":_vm.catalogOpen,"pen-use":_vm.penUse},on:{"onClickSetting":_vm.handleOpenSetting,"onClickCatalog":_vm.handleOpenCatalog,"onClickPen":_vm.handleUsePen}}),_vm._ssrNode(" <div class=\"h-18\"></div> "),_c('LayoutEbookFooterNav',{on:{"onClickSetting":_vm.handleOpenSetting,"onClickCatalog":_vm.handleOpenCatalog,"onClickPen":_vm.handleUsePen}})],2)}
var ebookvue_type_template_id_08a361b7_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/ebook.vue?vue&type=template&id=08a361b7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ebook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ebookvue_type_script_lang_js_ = ({
  name: 'Ebook',

  data() {
    return {
      settingOpen: false,
      catalogOpen: false,
      penUse: false
    };
  },

  methods: {
    handleOpenSetting() {
      this.settingOpen = !this.settingOpen;
      this.catalogOpen = false;
      this.penUse = false;
    },

    handleOpenCatalog() {
      this.catalogOpen = !this.catalogOpen;
      this.settingOpen = false;
      this.penUse = false;
    },

    handleUsePen() {
      this.penUse = !this.penUse;
      this.settingOpen = false;
      this.catalogOpen = false;
    }

  }
});
// CONCATENATED MODULE: ./layouts/ebook.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_ebookvue_type_script_lang_js_ = (ebookvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/ebook.vue





/* normalize component */

var ebook_component = Object(componentNormalizer["a" /* default */])(
  layouts_ebookvue_type_script_lang_js_,
  ebookvue_type_template_id_08a361b7_render,
  ebookvue_type_template_id_08a361b7_staticRenderFns,
  false,
  null,
  null,
  "29d3b39b"
  
)

/* harmony default export */ var ebook = (ebook_component.exports);

/* nuxt-component-imports */
installComponents(ebook_component, {SvgHeaderSearch: __webpack_require__(20).default,LayoutEbookFooterNav: __webpack_require__(62).default})

// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_account": sanitizeComponent(account),
  "_default": sanitizeComponent(layouts_default),
  "_ebook": sanitizeComponent(ebook)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(56), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AccountAcctInput = () => __webpack_require__.e(/* import() | components/account-acct-input */ 1).then(__webpack_require__.bind(null, 87)).then(c => wrapFunctional(c.default || c));
const AccountCfmPwdInput = () => __webpack_require__.e(/* import() | components/account-cfm-pwd-input */ 2).then(__webpack_require__.bind(null, 161)).then(c => wrapFunctional(c.default || c));
const AccountModal = () => __webpack_require__.e(/* import() | components/account-modal */ 3).then(__webpack_require__.bind(null, 162)).then(c => wrapFunctional(c.default || c));
const AccountPwdInput = () => __webpack_require__.e(/* import() | components/account-pwd-input */ 4).then(__webpack_require__.bind(null, 84)).then(c => wrapFunctional(c.default || c));
const CommonBookSubEntry = () => __webpack_require__.e(/* import() | components/common-book-sub-entry */ 5).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const CommonStore = () => __webpack_require__.e(/* import() | components/common-store */ 6).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c));
const ContentEbookArrowButton = () => __webpack_require__.e(/* import() | components/content-ebook-arrow-button */ 7).then(__webpack_require__.bind(null, 231)).then(c => wrapFunctional(c.default || c));
const ContentEbookRange = () => __webpack_require__.e(/* import() | components/content-ebook-range */ 8).then(__webpack_require__.bind(null, 232)).then(c => wrapFunctional(c.default || c));
const ContentEbookSettings = () => __webpack_require__.e(/* import() | components/content-ebook-settings */ 9).then(__webpack_require__.bind(null, 233)).then(c => wrapFunctional(c.default || c));
const ContentMediaAudio = () => __webpack_require__.e(/* import() | components/content-media-audio */ 10).then(__webpack_require__.bind(null, 234)).then(c => wrapFunctional(c.default || c));
const ContentMediaNav = () => __webpack_require__.e(/* import() | components/content-media-nav */ 11).then(__webpack_require__.bind(null, 165)).then(c => wrapFunctional(c.default || c));
const ContentMediaRemark = () => __webpack_require__.e(/* import() | components/content-media-remark */ 12).then(__webpack_require__.bind(null, 166)).then(c => wrapFunctional(c.default || c));
const ContentMediaVideo = () => __webpack_require__.e(/* import() | components/content-media-video */ 13).then(__webpack_require__.bind(null, 235)).then(c => wrapFunctional(c.default || c));
const ContentSelectBox = () => __webpack_require__.e(/* import() | components/content-select-box */ 14).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const ContentStore = () => __webpack_require__.e(/* import() | components/content-store */ 15).then(__webpack_require__.bind(null, 236)).then(c => wrapFunctional(c.default || c));
const ContentTestEndBubble = () => __webpack_require__.e(/* import() | components/content-test-end-bubble */ 16).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const ContentTestQuestion = () => __webpack_require__.e(/* import() | components/content-test-question */ 17).then(__webpack_require__.bind(null, 167)).then(c => wrapFunctional(c.default || c));
const ContentTestResult = () => __webpack_require__.e(/* import() | components/content-test-result */ 18).then(__webpack_require__.bind(null, 169)).then(c => wrapFunctional(c.default || c));
const ContentTestUserAnswer = () => __webpack_require__.e(/* import() | components/content-test-user-answer */ 19).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const IndexCateFeatured = () => __webpack_require__.e(/* import() | components/index-cate-featured */ 20).then(__webpack_require__.bind(null, 237)).then(c => wrapFunctional(c.default || c));
const IndexCateHit = () => __webpack_require__.e(/* import() | components/index-cate-hit */ 21).then(__webpack_require__.bind(null, 238)).then(c => wrapFunctional(c.default || c));
const IndexCateLatest = () => __webpack_require__.e(/* import() | components/index-cate-latest */ 22).then(__webpack_require__.bind(null, 239)).then(c => wrapFunctional(c.default || c));
const IndexCateRecommend = () => __webpack_require__.e(/* import() | components/index-cate-recommend */ 23).then(__webpack_require__.bind(null, 240)).then(c => wrapFunctional(c.default || c));
const LayoutBackHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c));
const LayoutEbookFooterNav = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 62)).then(c => wrapFunctional(c.default || c));
const LayoutSearchHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19)).then(c => wrapFunctional(c.default || c));
const LayoutSideBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 60)).then(c => wrapFunctional(c.default || c));
const MemberCollection = () => __webpack_require__.e(/* import() | components/member-collection */ 24).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const MemberIcon = () => __webpack_require__.e(/* import() | components/member-icon */ 25).then(__webpack_require__.bind(null, 160)).then(c => wrapFunctional(c.default || c));
const MemberReceiptTitle = () => __webpack_require__.e(/* import() | components/member-receipt-title */ 26).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const MemberRecord = () => __webpack_require__.e(/* import() | components/member-record */ 27).then(__webpack_require__.bind(null, 164)).then(c => wrapFunctional(c.default || c));
const SvgEbookCart = () => __webpack_require__.e(/* import() | components/svg-ebook-cart */ 28).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const SvgEbookReading = () => __webpack_require__.e(/* import() | components/svg-ebook-reading */ 29).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c));
const SvgFooterBook = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)).then(c => wrapFunctional(c.default || c));
const SvgFooterHome = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22)).then(c => wrapFunctional(c.default || c));
const SvgFooterMember = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c));
const SvgHeaderCart = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const SvgHeaderHam = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const SvgHeaderSearch = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(26);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/api'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(18);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.e3e9fb.png",
    "120x120": "/_nuxt/icons/icon_120x120.e3e9fb.png",
    "144x144": "/_nuxt/icons/icon_144x144.e3e9fb.png",
    "152x152": "/_nuxt/icons/icon_152x152.e3e9fb.png",
    "192x192": "/_nuxt/icons/icon_192x192.e3e9fb.png",
    "384x384": "/_nuxt/icons/icon_384x384.e3e9fb.png",
    "512x512": "/_nuxt/icons/icon_512x512.e3e9fb.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.e3e9fb.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.e3e9fb.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.e3e9fb.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.e3e9fb.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.e3e9fb.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.e3e9fb.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.e3e9fb.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.e3e9fb.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.e3e9fb.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.e3e9fb.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// CONCATENATED MODULE: ./api/index.js
/* harmony default export */ var api_0 = (axios => ({
  // fake api as example
  apiFake() {
    return axios.get('');
  }

}));
// CONCATENATED MODULE: ./plugins/axios.js
// import https from 'https'

/* harmony default export */ var plugins_axios = (({
  $axios,
  redirect
}, inject) => {
  // $axios.defaults.httpsAgent = new https.Agent({
  //   rejectUnauthorized:
  //     false
  // })
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code !== 200) {
      redirect('/');
    }
  });
  const api = api_0($axios);
  inject('api', api);
});
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(2);

// CONCATENATED MODULE: ./plugins/yup.js

const schemaAccount = external_yup_["object"]({
  accountRequired: external_yup_["string"]().required(),
  accountFormat: external_yup_["string"]().email()
});
const schemaPassword = external_yup_["object"]({
  passwordRequired: external_yup_["string"]().required()
});
const schemaSetPassword = external_yup_["object"]({
  passwordRequired: external_yup_["string"]().required(),
  passwordFormat: external_yup_["string"]().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
});
const schemaLogin = external_yup_["object"]({
  account: external_yup_["string"]().required().email(),
  password: external_yup_["string"]().required()
});
const schemaRegister = external_yup_["object"]({
  account: external_yup_["string"]().required().email(),
  settingPassword: external_yup_["string"]().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
  confirmPassword: external_yup_["string"]().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
});
const schemaReset = external_yup_["object"]({
  oldPassword: external_yup_["string"]().required(),
  newPassword: external_yup_["string"]().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
  cfmPassword: external_yup_["string"]().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
});

const inputValidate = async (field, userInput) => {
  if (field === 'account') {
    for (const condition in schemaAccount.fields) {
      const result = await schemaAccount.fields[condition].isValid(userInput);

      if (result === false) {
        return condition === 'accountRequired' ? '此欄必填' : '格式錯誤';
      }
    }
  } else if (field === 'password') {
    const result = await schemaPassword.fields.passwordRequired.isValid(userInput);
    return result === false ? '此欄必填' : '';
  } else if (field === 'setPassword') {
    for (const condition in schemaSetPassword.fields) {
      const result = await schemaSetPassword.fields[condition].isValid(userInput);

      if (result === false) {
        return condition === 'passwordRequired' ? '此欄必填' : '格式錯誤';
      }
    }
  }
};

const mulPwdVal = async userInput => {
  const conditions = external_yup_["object"]().shape({
    length: external_yup_["string"]().matches(/(?=^.{8,15}$)/),
    case: external_yup_["string"]().matches(/(?=.*[a-z])(?=.*[A-Z])/),
    hasNumber: external_yup_["string"]().matches(/(?=.*\d)/)
  });
  const results = [];

  for (const condition in conditions.fields) {
    const result = await conditions.fields[condition].isValid(userInput);

    if (!result) {
      results.push(condition);
    }
  }

  return results;
};

const allFormValidate = async (field, userInput) => {
  const formSchemas = {
    register: schemaRegister,
    login: schemaLogin,
    reset: schemaReset
  };
  let result;
  await formSchemas[field].isValid(userInput).then(valid => result = valid).catch(_err => result = false);
  return result;
};

/* harmony default export */ var yup = (({
  store,
  redirect
}, inject) => {
  const userLogin = async userInfo => {
    if (!(await allFormValidate('login', userInfo))) {
      alert('格式錯誤，請檢查後再送出');
      return false;
    }

    store.dispatch('handleLogin', true);
    redirect({
      name: 'index'
    });
  };

  const validateFunctions = {
    inputValidate,
    mulPwdVal,
    allFormValidate,
    userLogin
  };
  inject('validateFunctions', validateFunctions);
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ./pwa/icon.plugin.js (mode: 'all')

 // Source: ../plugins/axios.js (mode: 'all')

 // Source: ../plugins/yup.js (mode: 'all')

 // Source: ../plugins/drag.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "literacy_reading_apps",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "script": [{
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjszip\u002F3.1.5\u002Fjszip.min.js"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (typeof yup === 'function') {
    await yup(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Ham.vue?vue&type=template&id=4a65f5d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<rect x=\"2\" y=\"5\" width=\"20\" height=\"2\" rx=\"1\" fill=\"black\"></rect> <rect x=\"2\" y=\"11\" width=\"20\" height=\"2\" rx=\"1\" fill=\"black\"></rect> <rect x=\"2\" y=\"17\" width=\"20\" height=\"2\" rx=\"1\" fill=\"black\"></rect>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/header/Ham.vue?vue&type=template&id=4a65f5d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Ham.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Hamvue_type_script_lang_js_ = ({
  name: 'SvgHam'
});
// CONCATENATED MODULE: ./components/svg/header/Ham.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_Hamvue_type_script_lang_js_ = (Hamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/header/Ham.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_Hamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4dc29ee9"
  
)

/* harmony default export */ var Ham = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Cart.vue?vue&type=template&id=475d847a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M19.8482 12.4025L20.9879 6.13416C21.0076 6.02607 21.0032 5.91499 20.9752 5.80877C20.9472 5.70255 20.8962 5.60378 20.8258 5.51943C20.7554 5.4351 20.6674 5.36725 20.5679 5.32069C20.4684 5.27413 20.3599 5.25 20.25 5.25H5.12597L4.66809 2.73169C4.6054 2.386 4.42329 2.07331 4.15356 1.8482C3.88383 1.62309 3.54361 1.49985 3.19228 1.5H1.5C1.30109 1.5 1.11032 1.57902 0.96967 1.71967C0.829018 1.86032 0.75 2.05109 0.75 2.25C0.75 2.44891 0.829018 2.63968 0.96967 2.78033C1.11032 2.92098 1.30109 3 1.5 3H3.19219L5.76619 17.1565C5.40001 17.479 5.13099 17.8972 4.98935 18.3642C4.84771 18.8311 4.83905 19.3283 4.96436 19.7999C5.08966 20.2715 5.34395 20.6988 5.69869 21.0338C6.05342 21.3689 6.49454 21.5984 6.9725 21.6966C7.45046 21.7948 7.94634 21.7578 8.40445 21.5898C8.86255 21.4217 9.26473 21.1293 9.56583 20.7453C9.86692 20.3614 10.055 19.9011 10.109 19.4161C10.1629 18.9311 10.0806 18.4408 9.87122 18H14.8788C14.6351 18.5139 14.5649 19.093 14.6787 19.6502C14.7926 20.2074 15.0844 20.7126 15.5102 21.0897C15.9359 21.4667 16.4727 21.6953 17.0396 21.741C17.6065 21.7866 18.1729 21.6469 18.6535 21.3429C19.1341 21.0388 19.503 20.5869 19.7046 20.0551C19.9062 19.5233 19.9296 18.9404 19.7713 18.3941C19.613 17.8479 19.2815 17.3678 18.8268 17.0262C18.3721 16.6846 17.8187 16.4999 17.25 16.5H7.17141L6.76228 14.25H17.6345C18.1615 14.2502 18.6718 14.0654 19.0764 13.7277C19.481 13.39 19.7542 12.921 19.8482 12.4025ZM8.625 19.125C8.625 19.3475 8.55902 19.565 8.4354 19.75C8.31179 19.935 8.13609 20.0792 7.93052 20.1644C7.72495 20.2495 7.49875 20.2718 7.28052 20.2284C7.0623 20.185 6.86184 20.0778 6.70451 19.9205C6.54717 19.7632 6.44003 19.5627 6.39662 19.3445C6.35321 19.1262 6.37549 18.9 6.46064 18.6945C6.54578 18.4889 6.68998 18.3132 6.87498 18.1896C7.05999 18.066 7.2775 18 7.5 18C7.79827 18.0003 8.08423 18.119 8.29514 18.3299C8.50605 18.5408 8.62468 18.8267 8.625 19.125ZM18.375 19.125C18.375 19.3475 18.309 19.565 18.1854 19.75C18.0618 19.935 17.8861 20.0792 17.6805 20.1644C17.475 20.2495 17.2488 20.2718 17.0305 20.2284C16.8123 20.185 16.6118 20.0778 16.4545 19.9205C16.2972 19.7632 16.19 19.5627 16.1466 19.3445C16.1032 19.1262 16.1255 18.9 16.2106 18.6945C16.2958 18.4889 16.44 18.3132 16.625 18.1896C16.81 18.066 17.0275 18 17.25 18C17.5483 18.0003 17.8342 18.119 18.0451 18.3299C18.2561 18.5408 18.3747 18.8267 18.375 19.125ZM5.39869 6.75H19.3513L18.3724 12.1342C18.341 12.3071 18.25 12.4634 18.1151 12.5759C17.9803 12.6885 17.8102 12.7501 17.6346 12.75H6.48956L5.39869 6.75Z\" fill=\"#363636\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/header/Cart.vue?vue&type=template&id=475d847a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/header/Cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cartvue_type_script_lang_js_ = ({
  name: 'SvgCart'
});
// CONCATENATED MODULE: ./components/svg/header/Cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_Cartvue_type_script_lang_js_ = (Cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/header/Cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_Cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f6d519b"
  
)

/* harmony default export */ var Cart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/SideBar.vue?vue&type=template&id=3f1118d7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"fixed z-20 w-80 top-13 bg-white filter drop-shadow"},[_vm._ssrNode("<h2 data-v-3f1118d7>訂購專區</h2> "),_vm._l((_vm.orderLinks),function(item){return _c('NuxtLink',{key:item.title,attrs:{"to":item.to}},[_vm._v("\n    "+_vm._s(item.title)+"\n  ")])}),_vm._ssrNode(" <h2 data-v-3f1118d7>會員專區</h2> "),_vm._l((_vm.memberLinks),function(item){return _c('NuxtLink',{key:item.title,attrs:{"to":item.to}},[_vm._v("\n    "+_vm._s(item.title)+"\n  ")])}),_vm._ssrNode(" "+((_vm.$store.state.auth.loggedIn)?("<a href=\"javascript:void(0)\" data-v-3f1118d7>登出</a>"):("<a href=\"javascript:void(0)\" data-v-3f1118d7>登入</a>")))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/SideBar.vue?vue&type=template&id=3f1118d7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/SideBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({
  name: 'SideMenu',

  data() {
    return {
      orderLinks: [{
        title: '熱門商品',
        to: '/member/hit'
      }, {
        title: '訂閱方案',
        to: '/member/orderPlan'
      }, {
        title: '團購方案',
        to: '/member/groupBuy'
      }, {
        title: '周邊商品',
        to: '/member/merch'
      }],
      memberLinks: [{
        title: '購買紀錄',
        to: '/member/records'
      }, {
        title: '里程碑',
        to: '/member/milestone'
      }, {
        title: '我的收藏',
        to: '/member/collections'
      }, {
        title: '優惠卷',
        to: '/member/coupon'
      }]
    };
  },

  methods: {
    handleLogin() {
      this.$router.push('/account/login');
    },

    handleLogout() {
      this.$store.dispatch('handleLogin', false);
    }

  }
});
// CONCATENATED MODULE: ./components/layout/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/SideBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_SideBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f1118d7",
  "12c912a3"
  
)

/* harmony default export */ var SideBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/BackHeader.vue?vue&type=template&id=51d89f3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"flex justify-center items-center fixed z-20 w-full bg-primary py-4"},[_vm._ssrNode("<a class=\"\n      self-center\n      absolute\n      left-6\n      top-0\n      bottom-0\n      w-6\n      h-fit\n      m-auto\n      bg-white\n      rounded-full\n    \"><img"+(_vm._ssrAttr("src",__webpack_require__(12)))+" alt=\"返回按鈕\"></a> <p class=\"text-base leading-5 font-medium\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.$store.state.heading)+"\n  ")+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/BackHeader.vue?vue&type=template&id=51d89f3c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/BackHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BackHeadervue_type_script_lang_js_ = ({
  name: 'BackHeader'
});
// CONCATENATED MODULE: ./components/layout/BackHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_BackHeadervue_type_script_lang_js_ = (BackHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/BackHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_BackHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "470ac1bd"
  
)

/* harmony default export */ var BackHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/EbookFooterNav.vue?vue&type=template&id=9f3790cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"fixed bottom-0 w-full bg-white shadow-md"},[_vm._ssrNode("<div class=\"flex justify-between mx-10 my-2\">"+(_vm._ssrList((_vm.footerButtons),function(button){return ("<button class=\"flex flex-col justify-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)("./" + (button.src))))+(_vm._ssrAttr("alt",button.alt))+" class=\"mb-2\">"+_vm._ssrEscape("\n      "+_vm._s(button.title)+"\n    ")+"</button>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/EbookFooterNav.vue?vue&type=template&id=9f3790cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/EbookFooterNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EbookFooterNavvue_type_script_lang_js_ = ({
  data() {
    return {
      footerButtons: [{
        title: '目錄',
        src: 'catalog.svg',
        alt: '目錄',
        handler: 'onClickCatalog'
      }, {
        title: '筆記',
        src: 'pen-line.svg',
        alt: '筆記',
        handler: 'onClickPen'
      }, {
        title: '收藏',
        src: 'store-tag.svg',
        alt: '收藏',
        handler: ''
      }, {
        title: '設定',
        src: 'settings.svg',
        alt: '設定',
        handler: 'onClickSetting'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/layout/EbookFooterNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_EbookFooterNavvue_type_script_lang_js_ = (EbookFooterNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/EbookFooterNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_EbookFooterNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d46a77a"
  
)

/* harmony default export */ var EbookFooterNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("epubjs");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map