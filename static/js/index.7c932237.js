(function(n){function e(e){for(var o,r,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,u=1;u<t.length;u++){var s=t[u];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var o={},i={index:0},a=[];function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=i[n]=[e,o]}));e.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(n){return r.p+"static/js/"+({"pages-detail-detail":"pages-detail-detail","pages-index-index":"pages-index-index","pages-news-news":"pages-news-news","pages-user-user":"pages-user-user"}[n]||n)+"."+{"pages-detail-detail":"94d2807a","pages-index-index":"67e76ea9","pages-news-news":"4a06b0a5","pages-user-user":"53d823c4"}[n]+".js"}(n);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(c);var t=i[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}i[n]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=n,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="./",r.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("9a0f")},"148e":function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-view{box-sizing:border-box}",""]),n.exports=e},"3a33":function(n,e,t){"use strict";t.r(e);var o=t("5e63"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},"5e63":function(n,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},"60db":function(n,e,t){"use strict";t.r(e);var o=t("c756"),i=t("3a33");for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("daf3");var r=t("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=u.exports},"6c60":function(n,e,t){"use strict";(function(n){var e=t("4ea4").default;t("13d5"),t("d3b7"),t("ddb0"),t("ac1f"),t("5319");var o=e(t("e143")),i={keys:function(){return[]}};n["____27BD633____"]=!0,delete n["____27BD633____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#42b146",backgroundColor:"#F8F8F8"},uniIdRouter:{},tabBar:{iconWidth:"46rpx",iconfontSrc:"static/iconfont/iconfont.ttf",color:"#666",selectedColor:"#42b146",list:[{text:"首页",pagePath:"pages/index/index",iconfont:{text:"",selectedText:""},iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"发现",pagePath:"pages/news/news",iconfont:{text:"",selectedText:""},iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"我的",pagePath:"pages/user/user",iconfont:{text:"",selectedText:""},iconPath:"",selectedIconPath:"",redDot:!1,badge:""}],backgroundColor:"",borderStyle:"black"}},n.__uniConfig.compilerVersion="3.7.3",n.__uniConfig.darkmode=!1,n.__uniConfig.themeConfig={},n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__27BD633",n.__uniConfig.appName="新闻案例_练习",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.aMapKey=void 0,n.__uniConfig.aMapSecurityJsCode=void 0,n.__uniConfig.aMapServiceHost=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=i.keys().reduce((function(n,e){var t=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=i(e);return Object.assign(n[t]||(n[t]={}),o.common||o),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("711e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-user-user",(function(n){var e={component:t.e("pages-user-user").then(function(){return n(t("cdd2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-news-news",(function(n){var e={component:t.e("pages-news-news").then(function(){return n(t("00f4"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-detail-detail",(function(n){var e={component:t.e("pages-detail-detail").then(function(){return n(t("0336"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"NEWS"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/user/user",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"ME",enablePullDownRefresh:!1})},[n("pages-user-user",{slot:"page"})])}},meta:{id:2,name:"pages-user-user",isNVue:!1,maxWidth:0,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/news/news",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"HI~",enablePullDownRefresh:!1})},[n("pages-news-news",{slot:"page"})])}},meta:{id:3,name:"pages-news-news",isNVue:!1,maxWidth:0,pagePath:"pages/news/news",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/detail/detail",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"详情",enablePullDownRefresh:!1})},[n("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:44}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("c8ba"))},"9a0f":function(n,e,t){"use strict";var o=t("4ea4").default;t("d3b7");var i=o(t("5530")),a=o(t("53ca"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("6c60"),t("1c31");var r=o(t("60db")),u=o(t("e143"));u.default.config.productionTip=!1,r.default.mpType="app";try{uni.addInterceptor({returnValue:function(n){return function(n){return!!n&&("object"===(0,a.default)(n)||"function"===typeof n)&&"function"===typeof n.then}(n)?new Promise((function(e,t){n.then((function(n){n[0]?t(n[0]):e(n[1])}))})):n}})}catch(c){}var s=new u.default((0,i.default)({},r.default));s.$mount()},a8b9:function(n,e,t){var o=t("148e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("4f06").default;i("0dd5a7ff",o,!0,{sourceMap:!1,shadowMode:!1})},c756:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var o=function(){var n=this.$createElement,e=this._self._c||n;return e("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},daf3:function(n,e,t){"use strict";var o=t("a8b9"),i=t.n(o);i.a}});