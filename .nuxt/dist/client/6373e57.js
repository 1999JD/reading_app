(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{424:function(t,e,r){t.exports=r.p+"img/tkb.0c425cc.png"},427:function(t,e,r){t.exports=r.p+"img/test-btn-decoration.bb13794.png"},434:function(t,e,r){"use strict";var n=r(13),o=r(3),c=r(107),l=r(18),f=r(14),_=r(54),v=r(235),d=r(76),m=r(234),h=r(6),N=r(62),E=r(77).f,I=r(41).f,x=r(17).f,w=r(440).trim,C="Number",A=o.Number,k=A.prototype,y=_(N(k))==C,T=function(t){if(d(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,c,l,f,code,_=m(t,"number");if("string"==typeof _&&_.length>2)if(43===(e=(_=w(_)).charCodeAt(0))||45===e){if(88===(r=_.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(_.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+_}for(l=(c=_.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+_};if(c(C,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(y?h((function(){k.valueOf.call(r)})):_(r)!=C)?v(new A(T(e)),r,F):T(e)},M=n?E(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;M.length>O;O++)f(A,S=M[O])&&!f(F,S)&&x(F,S,I(A,S));F.prototype=k,k.constructor=F,l(o,C,F)}},440:function(t,e,r){var n=r(22),o=r(10),c="["+r(441)+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),_=function(t){return function(e){var r=o(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},441:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},469:function(t,e,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("78f07dff",content,!0,{sourceMap:!1})},517:function(t,e,r){"use strict";r(469)},518:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.result__check[data-v-2ce348a1]{\n  background-color:#a5cef3;\n  box-shadow:0 2px 4px rgba(68,68,68,.25)\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},554:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__question__avatar"},[e("img",{attrs:{src:r(424),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative right-3 block w-11 ml-auto"},[e("img",{attrs:{src:r(427),alt:""}})])}],o=(r(434),{name:"TestEndBubble",props:{total:{type:Number,default:0}}}),c=(r(517),r(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"test__question__wrap"},[t._m(0),t._v(" "),r("div",{staticClass:"test__question__bubble p-7.5 text-base text-center"},[r("p",{staticClass:"mb-3"},[t._v(t._s(t.total)+"/"+t._s(t.total))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("您已完成作答")]),t._v(" "),r("p",{staticClass:"mb-1.5"},[t._v("進一步查看結果吧!")]),t._v(" "),t._m(1),t._v(" "),r("button",{staticClass:"result__check block w-52 mx-auto mb-4 py-2 shadow-md rounded-2xl"},[t._v("\n      查看結果\n    ")])])])}),n,!1,null,"2ce348a1",null);e.default=component.exports}}]);