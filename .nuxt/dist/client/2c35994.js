(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{424:function(t,n,e){t.exports=e.p+"img/tkb.0c425cc.png"},425:function(t,n,e){t.exports=e.p+"img/user.2fbb8d0.png"},426:function(t,n,e){t.exports=e.p+"img/bg-star.57cd018.jpeg"},427:function(t,n,e){t.exports=e.p+"img/test-btn-decoration.bb13794.png"},428:function(t,n,e){t.exports=e.p+"img/banner.df3bca8.jpg"},429:function(t,n,e){t.exports=e.p+"img/tag-title.c30faac.png"},431:function(t,n,e){var map={"./404.jpeg":232,"./account-bg.jpg":233,"./banner.jpg":428,"./bg-star.jpeg":426,"./sampleBook.jpg":432,"./tag-title.png":429,"./test-btn-decoration.png":427,"./tkb.png":424,"./user.png":425};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=431},432:function(t,n,e){t.exports=e.p+"img/sampleBook.47efd69.jpg"},544:function(t,n,e){var content=e(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("4bfbeeb4",content,!0,{sourceMap:!1})},635:function(t,n,e){"use strict";e(544)},636:function(t,n,e){var r=e(50)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.slide_item[data-v-4bc8702c]{\n  margin-right:10%;\n  margin-left:10%;\n  position:relative;\n  width:40%;\n  flex-shrink:0;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  padding:0.625rem;\n  padding-top:1rem;\n  --tw-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-property:transform;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},664:function(t,n,e){"use strict";e.r(n);e(63),e(64);var r={name:"CateHit",props:{books:{type:Array,default:function(){return[]}}},data:function(){return{startPos:0,endPos:0,currentIndex:0,isDragging:!1}},mounted:function(){window.addEventListener("mouseup",this.handleDragEnd)},beforeDestroy:function(){window.removeEventListener("mouseup",this.handleDragEnd)},methods:{getPositionX:function(t){return t.type.includes("mouse")?t.pageX:t.touches[0].clientX},handleMouseDown:function(t){this.startPos=this.getPositionX(t),this.isDragging=!0},handleDragEnd:function(t){this.endPos=this.getPositionX(t);var n=this.endPos-this.startPos;this.isDragging=!1,Math.abs(n)>window.innerWidth/3&&(n>0&&this.currentIndex?this.currentIndex--:n<0&&this.currentIndex<this.books.length-1&&this.currentIndex++),this.$refs.slide.style.left="".concat(-60*this.currentIndex+20,"%")}}},o=(e(635),e(2)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"py-10"},[r("h2",{staticClass:"\n      w-fit\n      m-auto\n      mb-4\n      pb-1\n      text-base\n      font-medium\n      border-b-4 border-solid border-third\n    "},[t._v("\n    熱門排行\n  ")]),t._v(" "),r("div",{staticClass:"w-full py-4 overflow-hidden"},[r("ul",{directives:[{name:"drag",rawName:"v-drag:x",arg:"x"}],ref:"slide",staticClass:"slide flex left-1/5",on:{mousedown:t.handleMouseDown}},t._l(t.books,(function(n,o){return r("li",{key:n.bookId,class:[o===t.currentIndex&&"transform scale-110","slide_item"]},[r("div",{staticClass:"w-28 m-auto"},[r("img",{staticClass:"shadow-sm",attrs:{src:e(431)("./"+n.imgSrc)}})]),t._v(" "),r("h3",{staticClass:"mt-4 mb-2 text-center"},[t._v(t._s(n.name)+t._s(o))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v(t._s(n.desc))]),t._v(" "),r("span",{staticClass:"text-gray-400 text-xs"},[t._v("\n          觀看人數："+t._s(n.download)+"\n        ")])])})),0)])])}),[],!1,null,"4bc8702c",null);n.default=component.exports}}]);