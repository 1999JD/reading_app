(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{431:function(t,o,n){t.exports=n.p+"img/tkb.0c425cc.png"},432:function(t,o,n){t.exports=n.p+"img/user.2fbb8d0.png"},433:function(t,o,n){t.exports=n.p+"img/bg-star.57cd018.jpeg"},434:function(t,o,n){t.exports=n.p+"img/test-btn-decoration.bb13794.png"},435:function(t,o,n){t.exports=n.p+"img/banner.9973700.jpg"},436:function(t,o,n){t.exports=n.p+"img/tag-title.c30faac.png"},437:function(t,o,n){var map={"./404.jpeg":239,"./account-bg.jpg":240,"./banner.jpg":435,"./bg-star.jpeg":433,"./sampleBook.jpg":438,"./tag-title.png":436,"./test-btn-decoration.png":434,"./tkb.png":431,"./user.png":432};function e(t){var o=r(t);return n(o)}function r(t){if(!n.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=r,t.exports=e,e.id=437},438:function(t,o,n){t.exports=n.p+"img/sampleBook.95a4218.jpg"},553:function(t,o,n){var content=n(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("27844d1a",content,!0,{sourceMap:!1})},644:function(t,o,n){"use strict";n(553)},645:function(t,o,n){var e=n(51),r=n(149),c=n(436),l=e((function(i){return i[1]})),d=r(c);l.push([t.i,"/*purgecss start ignore*/\n.title[data-v-d3962680]{\n  background-image:url("+d+");\n  margin-bottom:1rem;\n  width:5rem;\n  text-align:center;\n  font-weight:500;\n  line-height:2rem\n}\n.card__img[data-v-d3962680]{\n  width:112px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},672:function(t,o,n){"use strict";n.r(o);var e={name:"CateLatest",data:function(){return{books:[{title:"week",cate:"本周",books:[{bookId:1,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:2,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:3,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:4,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容是內容是內容"}]},{title:"latest",cate:"近期",books:[{bookId:5,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:6,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:7,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"},{bookId:8,title:"原子習慣",src:"sampleBook.jpg",alt:"原子習慣",intro:"我是內容我是內容我是內容我是內容我是內容我是內容"}]}]}}},r=(n(644),n(2)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("main",{staticClass:"mt-9 mb-13"},t._l(t.books,(function(o){return e("section",{key:o.cate},[e("h2",{staticClass:"title"},[t._v(t._s(o.cate))]),t._v(" "),e("ul",{staticClass:"\n        flex\n        gap-4\n        mb-10\n        px-6\n        overflow-x-auto overflow-y-hidden\n        no-scrollbar\n      "},t._l(o.books,(function(o){return e("li",{key:o.bookId,on:{click:function(n){return t.$router.push("/content/media/"+o.bookId)}}},[e("div",{staticClass:"card__img mb-2 rounded"},[e("img",{staticClass:"w-full h-auto",attrs:{src:n(437)("./"+o.src)}})]),t._v(" "),e("h3",{staticClass:"mb-2 text-center text-base"},[t._v(t._s(o.title))]),t._v(" "),e("p",{staticClass:"line-clamp-3"},[t._v(t._s(o.intro))])])})),0)])})),0)}),[],!1,null,"d3962680",null);o.default=component.exports}}]);