(window.webpackJsonp=window.webpackJsonp||[]).push([[49,29],{431:function(t,e,r){t.exports=r.p+"img/tkb.0c425cc.png"},432:function(t,e,r){t.exports=r.p+"img/user.2fbb8d0.png"},433:function(t,e,r){t.exports=r.p+"img/bg-star.57cd018.jpeg"},434:function(t,e,r){t.exports=r.p+"img/test-btn-decoration.bb13794.png"},435:function(t,e,r){t.exports=r.p+"img/banner.9973700.jpg"},436:function(t,e,r){t.exports=r.p+"img/tag-title.c30faac.png"},437:function(t,e,r){var map={"./404.jpeg":239,"./account-bg.jpg":240,"./banner.jpg":435,"./bg-star.jpeg":433,"./sampleBook.jpg":438,"./tag-title.png":436,"./test-btn-decoration.png":434,"./tkb.png":431,"./user.png":432};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=437},438:function(t,e,r){t.exports=r.p+"img/sampleBook.95a4218.jpg"},472:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("a617819a",content,!0,{sourceMap:!1})},518:function(t,e,r){"use strict";r(472)},519:function(t,e,r){var o=r(51)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\n.decoration[data-v-ff60867e]:before{\n  content:"";\n  position:absolute;\n  top:0px;\n  bottom:0px;\n  left:-0.125rem;\n  margin-top:auto;\n  margin-bottom:auto;\n  display:block;\n  height:1.5rem;\n  width:0.125rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},559:function(t,e,r){"use strict";r.r(e);var o={name:"Record",props:{orderData:{type:Object,default:function(){return{}}}}},n=(r(518),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"record mt-6 mb-6 p-4 bg-primary rounded"},[o("div",{staticClass:"flex mb-1.5 py-1.5 px-3 bg-white rounded"},[o("div",{staticClass:"flex-shrink-0 w-20 h-24 mr-6 bg-gray-300"},[o("img",{attrs:{src:r(437)("./"+t.orderData.imgSrc),alt:t.orderData.name},on:{click:function(e){return t.$router.push("/content/ebook/"+t.orderData.bookId)}}})]),t._v(" "),o("ul",[o("li",{staticClass:"flex mb-4"},[o("h3",{staticClass:"mr-10"},[t._v("商品名稱")]),t._v(" "),o("p",{staticClass:"text-center flex-grow"},[t._v(t._s(t.orderData.name))])]),t._v(" "),o("li",{staticClass:"flex mb-4"},[o("h3",{staticClass:"mr-10"},[t._v("訂單編號")]),t._v(" "),o("p",{staticClass:"text-center flex-grow text-gray-order"},[t._v("\n          "+t._s(t.orderData.orderNumber)+"\n        ")])]),t._v(" "),o("li",{staticClass:"flex mb-4"},[o("h3",{staticClass:"mr-10"},[t._v("訂購時間")]),t._v(" "),o("p",{staticClass:"text-center flex-grow text-gray-order"},[t._v("\n          "+t._s(t.orderData.time)+"\n        ")])])])]),t._v(" "),o("div",{staticClass:"bg-white pt-2 pb-3 px-1.5 text-center"},[o("ul",{staticClass:"grid grid-cols-3"},[o("li",{},[o("h3",{staticClass:"mb-3"},[t._v("訂單金額")]),t._v(" "),o("p",{staticClass:"text-tangerine"},[t._v("$"+t._s(t.orderData.price))])]),t._v(" "),o("li",{staticClass:"decoration relative"},[o("h3",{staticClass:"mb-3"},[t._v("付款方式")]),t._v(" "),o("p",{staticClass:"text-tangerine"},[t._v(t._s(t.orderData.pay))])]),t._v(" "),o("li",{staticClass:"decoration relative"},[o("h3",{staticClass:"mb-3"},[t._v("訂單狀態")]),t._v(" "),o("p",{staticClass:"text-tangerine"},[t._v(t._s(t.orderData.status))])])])])])}),[],!1,null,"ff60867e",null);e.default=component.exports},658:function(t,e,r){"use strict";r.r(e);var o={name:"Records",data:function(){return{orders:[{bookId:1,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:103856820,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:2,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:103822220,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:3,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:103856821,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:4,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:144456822,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:5,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:703856823,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:6,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:663856824,time:"2021-08-01",price:350,pay:"信用卡",status:"已完成"},{bookId:7,imgSrc:"sampleBook.jpg",name:"園子習慣",orderNumber:103856925,time:"2021-08-01",price:350,pay:"信用卡",status:"完成"}]}}},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"mt-6 mx-6 mb-20"},[r("ul",t._l(t.orders,(function(t){return r("MemberRecord",{key:t.orderNumber,attrs:{"order-data":t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MemberRecord:r(559).default})}}]);