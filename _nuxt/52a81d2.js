(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{431:function(t,n,e){t.exports=e.p+"img/tkb.0c425cc.png"},432:function(t,n,e){t.exports=e.p+"img/user.2fbb8d0.png"},433:function(t,n,e){t.exports=e.p+"img/bg-star.57cd018.jpeg"},434:function(t,n,e){t.exports=e.p+"img/test-btn-decoration.bb13794.png"},435:function(t,n,e){t.exports=e.p+"img/banner.9973700.jpg"},436:function(t,n,e){t.exports=e.p+"img/tag-title.c30faac.png"},437:function(t,n,e){var map={"./404.jpeg":239,"./account-bg.jpg":240,"./banner.jpg":435,"./bg-star.jpeg":433,"./sampleBook.jpg":438,"./tag-title.png":436,"./test-btn-decoration.png":434,"./tkb.png":431,"./user.png":432};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=437},438:function(t,n,e){t.exports=e.p+"img/sampleBook.95a4218.jpg"},673:function(t,n,e){"use strict";e.r(n);var o={name:"CateRecommend",props:{books:{type:Array,default:function(){return[]}}}},r=e(2),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ul",{staticClass:"m-6"},t._l(t.books,(function(n){return o("li",{key:n.bookId,staticClass:"flex gap-3 mb-3",on:{click:function(e){return t.$router.push("/content/media/"+n.bookId)}}},[o("div",{staticClass:"w-24 flex-shrink-0"},[o("img",{staticClass:"max-w-full h-auto rounded",attrs:{src:e(437)("./"+n.imgSrc)}})]),t._v(" "),o("div",{class:[n.bookId===t.books.length-1?"":"border-solid border-b-2"]},[o("h3",{staticClass:"mb-1 text- font-medium"},[t._v(t._s(n.name))]),t._v(" "),o("p",{staticClass:"mb-2 line-clamp-3"},[t._v(t._s(n.desc))]),t._v(" "),o("div",{staticClass:"text-gray-subInfo text-xs"},[o("p",{staticClass:"mb-2"},[t._v(t._s(n.author))]),t._v(" "),o("p",{staticClass:"mb-3"},[t._v(t._s(n.publishTime))])])])])})),0)}),[],!1,null,null,null);n.default=component.exports}}]);