(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{453:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM4NzMgOC45NDY2NEMxMi45MDczIDguNDI2NjQgMTMuNzQ3MyA4LjQyNjY0IDE0LjI2NzMgOC45NDY2NEwyMC4zODczIDE1LjA2NjZDMjAuOTA3MyAxNS41ODY2IDIwLjkwNzMgMTYuNDI2NiAyMC4zODczIDE2Ljk0NjZMMTQuMjY3MyAyMy4wNjY2QzEzLjc0NzMgMjMuNTg2NiAxMi45MDczIDIzLjU4NjYgMTIuMzg3MyAyMy4wNjY2QzExLjg2NzMgMjIuNTQ2NiAxMS44NjczIDIxLjcwNjYgMTIuMzg3MyAyMS4xODY2TDE3LjU2MDcgMTZMMTIuMzg3MyAxMC44MjY2QzExLjg2NzMgMTAuMzA2NiAxMS44ODA3IDkuNDUzMzEgMTIuMzg3MyA4Ljk0NjY0WiIgZmlsbD0iIzM2MzYzNiIvPgo8L3N2Zz4K"},544:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("28e8b36d",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";n(544)},618:function(t,e,n){var o=n(51)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\n.arrow[data-v-6c5e4bb0]{\n  position:absolute;\n  top:0px;\n  bottom:0px;\n  margin-top:auto;\n  margin-bottom:auto;\n  height:3.5rem;\n  width:3rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 241, 207, var(--tw-bg-opacity));\n  opacity:0.8\n}\n.settings__setting[data-v-6c5e4bb0]{\n  margin-bottom:0.5rem;\n  display:flex;\n  height:2.25rem;\n  align-items:center;\n  border-radius:1rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-left:0.625rem;\n  padding-right:0.625rem\n}\n.settings__title[data-v-6c5e4bb0]{\n  margin-right:0.875rem\n}\n.settings__button--font[data-v-6c5e4bb0]{\n  z-index:0;\n  margin-right:1.5rem;\n  margin-bottom:0.5rem;\n  width:1rem;\n  align-self:flex-end;\n  text-align:center;\n  line-height:1\n}\n.active--font[data-v-6c5e4bb0]{\n  position:relative\n}\n.active--font[data-v-6c5e4bb0]:before{\n  content:"";\n  position:absolute;\n  left:0px;\n  right:0px;\n  bottom:0px;\n  z-index:-1;\n  margin-left:auto;\n  margin-right:auto;\n  height:0.25rem;\n  width:100%;\n  border-radius:0.125rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity))\n}\n.settings__button--bg[data-v-6c5e4bb0]{\n  margin-right:0.75rem;\n  height:1.5rem;\n  width:1.5rem;\n  border-radius:9999px;\n  --tw-shadow:0px 2px 4px rgba(174, 174, 174, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.active--bg[data-v-6c5e4bb0]{\n  border-width:4px;\n  --tw-border-opacity:1;\n  border-color:rgba(255, 198, 81, var(--tw-border-opacity))\n}\n.settings__button--direction[data-v-6c5e4bb0]{\n  margin-right:0.75rem;\n  display:flex;\n  height:1.5rem;\n  width:1.5rem;\n  align-items:center;\n  justify-content:center;\n  border-radius:9999px;\n  --tw-shadow:0px 2px 4px rgba(174, 174, 174, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.active--direction[data-v-6c5e4bb0]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 198, 81, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},646:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(38),n(56),n(109),n(578),n(580)),c=n.p+"assets/media/sample.epub",l={name:"Reading",layout:"ebook",props:{settingOpen:{type:Boolean,default:!1},catalogOpen:{type:Boolean,default:!1},penUse:{type:Boolean,default:!1}},data:function(){return{book:{},bookReady:!1,rendition:{},progress:0,navigation:{},locations:{},location:0,bookAvailable:!0,catalog:[],url:c,ebookStyle:{bgColor:"bg-white",fontSize:18,writingMode:"horizontal-tb"},settings:{fontSize:[{fontSizeClass:"text-sm",fontSize:14},{fontSizeClass:"text-lg",fontSize:18},{fontSizeClass:"text-2xl",fontSize:20},{fontSizeClass:"text-2.5xl",fontSize:24}],bgColor:["bg-white","bg-blue","bg-red"]}}},mounted:function(){var t=this;this.book=Object(r.a)(this.url),this.rendition=this.book.renderTo("viewer",{width:.75*window.innerWidth,height:.75*window.innerHeight}),this.book.rendition.display(),this.book.ready.then((function(){return t.navigation=t.book.navigation,t.book.locations.generate(100)})).then((function(e){t.locations=t.book.locations,t.rendition.themes.fontSize(t.ebookStyle.fontSize+"px"),t.rendition.themes.default({html:{"writing-mode":"".concat(t.ebookStyle.writingMode," !important")}}),t.bookReady=!0})),this.book.loaded.navigation.then((function(e){t.catalog=e.toc.map((function(t){return{label:t.label,href:t.href}}))}));var e=this;this.rendition.on("selected",(function(t,n){e.penUse&&this.book.rendition.annotations.highlight(t)}))},methods:{prevPage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("rtl"!==t.book.package.metadata.direction){e.next=5;break}return e.next=3,t.rendition.next();case 3:e.next=7;break;case 5:return e.next=7,t.rendition.prev();case 7:return e.next=9,t.onPressButtonChangePage();case 9:case"end":return e.stop()}}),e)})))()},nextPage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("rtl"!==t.book.package.metadata.direction){e.next=5;break}return e.next=3,t.rendition.prev();case 3:e.next=7;break;case 5:return e.next=7,t.rendition.next();case 7:return e.next=9,t.onPressButtonChangePage();case 9:case"end":return e.stop()}}),e)})))()},onProgressChange:function(progress){this.progress=progress;var t=progress/100;this.location=t>0?this.locations.cfiFromPercentage(t):0,this.rendition.display(this.location)},onProgressInput:function(progress){var t=progress/100;this.location=t>0?this.locations.cfiFromPercentage(t):0},onPressButtonChangePage:function(){if(this.bookReady){var t=this.rendition.currentLocation(),progress=Math.floor(1e4*this.locations.percentageFromCfi(t.start.cfi).toFixed(5))/100;this.progress=progress,this.onProgressInput(progress)}else setTimeout(this.onProgressInput,1e3)},handleSwitchBgColor:function(t){this.ebookStyle.bgColor=t},handleSwitchFontsize:function(t){this.ebookStyle.fontSize=t,this.rendition.themes.fontSize(t+"px")},handleSwitchChapter:function(t){this.rendition.display(t)}}},d=(n(617),n(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.ebookStyle.bgColor,"flex-grow relative"]},[o("client-only",[o("section",{staticClass:"w-full flex justify-center",attrs:{id:"viewer"}}),t._v(" "),o("button",{staticClass:"arrow left-6",attrs:{id:"prev"},on:{click:t.prevPage}},[o("img",{attrs:{src:n(150),alt:""}})]),t._v(" "),o("button",{staticClass:"arrow right-6",attrs:{id:"next"},on:{click:t.nextPage}},[o("img",{attrs:{src:n(453),alt:""}})]),t._v(" "),o("div",{staticClass:"progress-wrapper box-border absolute bottom-2 w-full px-6"},[o("input",{ref:"progress",staticClass:"progress w-full mb-0.5",attrs:{type:"range",max:"100",min:"0",step:"0.01",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}}),t._v(" "),o("p",{staticClass:"text-center"},[o("span",{staticClass:"text-primary-dark"},[t._v(t._s(t.progress)+"% ")]),t._v("/ 100%\n      ")])]),t._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:t.catalogOpen,expression:"catalogOpen"}],staticClass:"absolute -bottom-px w-full py-4 px-6 bg-primary rounded-t-2xl"},[o("h3",{staticClass:"mb-3 pb-2 text-base font-medium border-b"},[t._v("目錄")]),t._v(" "),o("ul",t._l(t.catalog,(function(e){return o("li",{key:e.label,staticClass:"mb-3"},[o("p",{staticClass:"cursor-pointer",on:{click:function(n){return t.handleSwitchChapter(e.href)}}},[t._v("\n            "+t._s(e.label)+"\n          ")])])})),0)]),t._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:t.settingOpen,expression:"settingOpen"}],staticClass:"absolute -bottom-px w-full px-8 py-10 bg-primary rounded-t-2xl"},[o("ul",[o("li",{staticClass:"settings__setting"},[o("h3",{staticClass:"settings__title"},[t._v("字型大小")]),t._v(" "),t._l(t.settings.fontSize,(function(e){return o("button",{key:e.fontSizeClass,class:[e.fontSize===t.ebookStyle.fontSize&&"active--font",e.fontSizeClass,"settings__button--font"],on:{click:function(n){return t.handleSwitchFontsize(e.fontSize)}}},[t._v("\n            A\n          ")])}))],2),t._v(" "),o("li",{staticClass:"settings__setting"},[o("h3",{staticClass:"settings__title"},[t._v("背景顏色")]),t._v(" "),t._l(t.settings.bgColor,(function(e){return o("button",{key:e,class:[e===t.ebookStyle.bgColor&&"active--bg",e,"settings__button--bg"],on:{click:function(n){return t.handleSwitchBgColor(e)}}})}))],2)])])])],1)}),[],!1,null,"6c5e4bb0",null);e.default=component.exports}}]);