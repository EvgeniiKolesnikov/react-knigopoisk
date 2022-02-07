(this["webpackJsonpreact-knigopoisk"]=this["webpackJsonpreact-knigopoisk"]||[]).push([[0],{33:function(t,e,c){},57:function(t,e,c){},59:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){},64:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){},74:function(t,e,c){"use strict";c.r(e);var n={};c.r(n),c.d(n,"fetchData",(function(){return f})),c.d(n,"setDataQuery",(function(){return m})),c.d(n,"setDataPage",(function(){return I}));var a,i=c(1),o=c.n(i),r=c(9),D=c.n(r),s=(c(33),c(6)),l=c(5),u=c(4),d=c(15),A=c.n(d),Q=c(24),j=c(10),b=c.n(j);!function(t){t.FETCH_DATA_LOADING="FETCH_DATA_LOADING",t.FETCH_DATA_SUCESS="FETCH_DATA_SUCESS",t.FETCH_DATA_ERROR="FETCH_DATA_ERROR",t.SET_DATA_QUERY="SET_DATA_QUERY",t.SET_DATA_PAGE="SET_DATA_PAGE"}(a||(a={}));var g=null,f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c="https://openlibrary.org/search.json";return function(){var n=Object(Q.a)(A.a.mark((function n(i){var o;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g&&g.cancel(),g=b.a.CancelToken.source(),i({type:a.FETCH_DATA_LOADING}),n.next=6,b.a.get(c,{params:{q:t,page:e},cancelToken:g.token});case 6:o=n.sent,i({type:a.FETCH_DATA_SUCESS,payload:o.data}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),b.a.isCancel(n.t0)||i({type:a.FETCH_DATA_ERROR,payload:"".concat(n.t0)});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()};function m(t){return{type:a.SET_DATA_QUERY,payload:t}}function I(t){return{type:a.SET_DATA_PAGE,payload:t}}var v=function(){var t=Object(l.b)();return Object(u.bindActionCreators)(n,t)},O=l.c,p=(c(57),c(0)),h=function(){var t=Object(i.useState)(""),e=Object(s.a)(t,2),c=e[0],n=e[1],a=v(),o=a.fetchData,r=a.setDataQuery,D=a.setDataPage,l=O((function(t){return t.data})),u=l.query,d=l.page,A=(l.data,l.loading);Object(i.useEffect)((function(){d>=1&&o(u,d),console.log("query = ".concat(u,", page = ").concat(d,", load new page, ").concat(A))}),[u,d]),Object(i.useEffect)((function(){var t=setTimeout((function(){Q()}),1e3);return function(){clearTimeout(t)}}),[c]);var Q=function(){var t;!c&&(null===(t=document.getElementById("searchInput"))||void 0===t||t.focus()),c!==u&&(D(1),r(c))};return Object(p.jsx)("div",{className:"input",children:Object(p.jsxs)("div",{className:"input__box",children:[Object(p.jsx)("input",{className:"input__control",id:"searchInput",placeholder:". . .",type:"search",name:"search",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441",value:c,onKeyDown:function(t){"Enter"===t.key&&Q()},onChange:function(t){return n(t.target.value)}}),Object(p.jsx)("div",{className:"input__clear",id:"searchClear",unselectable:"on",onClick:function(){return n("")},style:c?{display:"block"}:{display:"none"}}),Object(p.jsx)("button",{className:"input__button",id:"searchButton",onClick:function(){return Q()}})]})})},x=(c(59),function(){return Object(p.jsx)("div",{className:"preloader",children:Object(p.jsxs)("div",{className:"banter-loader",children:[Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"}),Object(p.jsx)("div",{className:"banter-loader__box"})]})})}),T=(c(60),function(){return Object(p.jsx)("div",{className:"preloader-mini"})}),E=(c(61),function(){var t=O((function(t){return t.data})),e=t.data,c=t.loading,n=t.error,a=t.query,o=t.page;return Object(i.useEffect)((function(){!c&&e&&(e.totalPages=e.num_found?Math.floor(e.num_found/100)+1:0,console.log("query = ".concat(a,", page = ").concat(o,", totalPages = ").concat(e.totalPages)),console.log(e))}),[e,c]),Object(p.jsxs)("div",{className:"books-list",children:[c&&1===o&&Object(p.jsx)(x,{}),c&&o>1&&Object(p.jsx)(T,{}),n&&Object(p.jsx)(F,{}),0===(null===e||void 0===e?void 0:e.docs.length)&&e.q&&!c&&Object(p.jsx)(G,{}),(!c||o>1)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"books-list__container",children:null===e||void 0===e?void 0:e.docs.map((function(t){return Object(p.jsx)(k,{book:t},t.key)}))}),e&&Object(p.jsx)(S,{})]})]})}),S=(c(62),function(){var t=O((function(t){return t.data})).data,e=0;return(null===t||void 0===t?void 0:t.num_found)&&(e=((null===t||void 0===t?void 0:t.num_found)-t.start)/100>1?t.start+100:null===t||void 0===t?void 0:t.num_found),Object(p.jsx)("div",{className:"books-list-info",children:Object(p.jsxs)("div",{className:"books-list-info__title",children:["\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043a\u043d\u0438\u0433: ",e," / ",null===t||void 0===t?void 0:t.numFound]})})}),y=(c(63),function(t){var e=t.children,c=Object(i.useState)(!1),n=Object(s.a)(c,2),a=n[0],o=n[1],r=v().setDataPage,D=O((function(t){return t.data})),l=D.data,u=D.loading,d=D.page;Object(i.useEffect)((function(){!u&&l&&o(!1)}),[u]);return Object(p.jsx)("div",{className:"scroll",onScroll:function(t){var e=t.currentTarget;e.scrollTop+e.offsetHeight+120>=e.scrollHeight&&!a&&!u&&l&&d<l.totalPages&&(o(!0),r(d+1))},children:e})}),N=c.p+"static/media/book_cover.ae72d0eb.png",k=(c(64),o.a.memo((function(t){var e=t.book,c=(e.key,e.author_name),n=e.cover_i,a=e.isbn,i=e.title;return Object(p.jsxs)("div",{className:"book-card",children:[Object(p.jsx)("div",{className:"book-card__img-container",children:Object(p.jsx)("img",{className:"book-card__img",alt:"book cover",src:n?"https://covers.openlibrary.org/b/id/".concat(n,"-M.jpg?default=false"):a?"https://covers.openlibrary.org/b/isbn/".concat(a[0],"-M.jpg?default=false"):N,onError:function(t){t.currentTarget.onerror=null,t.currentTarget.src=N}})}),Object(p.jsxs)("div",{className:"book-card__description",children:[Object(p.jsx)("div",{className:"book-card__title",children:i}),c&&Object(p.jsx)("div",{className:"book-card__author",children:c.join(", ")})]})]})}))),F=(c(65),function(){var t=O((function(t){return t.data})).error;return Object(p.jsxs)("div",{className:"error",children:[Object(p.jsx)("div",{className:"error__title",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(p.jsx)("div",{className:"error__message",children:t})]})}),C=(c(66),c.p+"static/media/sun.d4bd2412.png"),w=c(25),_=c(26),R=function(){function t(){Object(w.a)(this,t)}return Object(_.a)(t,null,[{key:"loadTheme",value:function(){var t=localStorage.getItem("colorTheme"),e=t?JSON.parse(t):"sun";return"moon"===e&&document.documentElement.setAttribute("theme","moon"),e}},{key:"toggleTheme",value:function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.setItem("colorTheme",JSON.stringify("sun"))):(document.documentElement.setAttribute("theme","moon"),localStorage.setItem("colorTheme",JSON.stringify("moon")))}}]),t}(),H=function(){var t=Object(i.useState)(R.loadTheme()),e=Object(s.a)(t,2),c=e[0],n=e[1];return Object(p.jsx)("div",{className:"theme",onClick:function(){R.toggleTheme(),n(R.loadTheme())},title:"\u0422\u0435\u043c\u0430: ".concat("sun"===c?"\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0434\u0435\u043d\u044c \u0432 \u042f.\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0435":"\u0442\u0451\u043c\u043d\u0430\u044f \u043d\u043e\u0447\u044c \u0432 \u042f.\u0422\u0430\u043a\u0441\u0438"),children:Object(p.jsxs)("div",{className:"theme__icon ".concat(c),children:[Object(p.jsx)("img",{className:"theme__img",src:C,alt:"sun"}),Object(p.jsx)("img",{className:"theme__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC9FBMVEUAAAD/gAD/uQD/tgD/tQD/twD/qgD/tgD/tQD/tQD/tQD/tQD/tAD/tAD/tAD/tQD//wD/tQD/tAD/tQD/tQD/tQD/vwD/uAD/tQD/tgD/rwD/tAD/tQD/tQD/uQD/tQD/tQD/swD/tAD/uwD/tAD/tQD/vwD/tQD/tQD/tAD/tQD/tQD/tQD/twD/tAD/tQD/tQD/tQD/tgD/tQD/tgD/tQD/tQD/tAD/tgD/tQD/tQD/tgD/swD/tQD/swD/qgD/tQD/swD/tQD/tQD/swD/tQD/tQD/tQD/sQD/tgD/tQD/tQD/tgD/tgD/tQD/tQD/sQD/swD/tQD/tQD/tQD/tQD/tQD/tgD/tQD/uQD/tgD/tQD/tAD/swD/tQD/vwD/tQD/tQD/tgD/tgD/tgD/tQD/tAD/tQD/tQD/tAD/uAD/tQD/tQD/tQD/twD/tAD/tQD/tAD/tgD/tQD/tQD/tgD/tAD/tQD/tAD/tAD/tAD/tQD/tQD/tgD/tQD/tgD/tQD/tQD/tAD/tQD/tQD/tQD/tAD/tQD/tQD/tAD/swD/tQD/swD/zAD/tQD/tQD/tQD/tQD/tAD/tgD/tgD/tgD/tQD/tgD/tAD/tAD/tQD/tQD/tQD/tQD/tgD/tAD/tAD/tgD/tQD/twD/tQD/tQD/sgD/tQD/tQD/qgD/tQD/tQD/tgD/tgD/tgD/tgD/tQD/tAD/tQD/tQD/twD/tgD/tgD/tQD/tAD/tQD/tgD/uAD/sQD/tQD/tQD/tAD/tAD/tQD/tQD/tgD/tQD/tQD/rgD/tQD/tAD/tgD/tgD/tQD/tQD/tQD/tQD/tQD/tQD/twD/twD/tQD/tQD/tQD/tgD/tQD/tQD/tQD/tQD/tAD/tQD/tQD/tQD/tQD/uAD/swD/tQD/tQD/tgD/tQD/swD/tAD/tQD/tAD/tAD/tQD/tQD/tgD/tAD/tQD/tAD/tAD/tgD/tQD/tAD/tgD/tgD/tAD/tQD/tgD/tQD/tQDaK0V1AAAA+3RSTlMAAhZNzC4GXtm3aONHVdvTAddjN8TpCCSsgRCP+fwd6LMvTg+T5ARM4oIYov0gZu+5Xez3DqOoQeWA7gcemFED7RS6oTlTWvgNiLSyZSPY/ho2T/WOZPtJhwuZ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",alt:"moon"})]})})},M=(c(67),c.p+"static/media/logo.8516c8eb.png"),X=function(){return Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{className:"logo__img",src:M,alt:"SiteLogoBook"})})},B=(c(68),c.p+"static/media/logo_text_ru.4e26240d.png"),q=function(){return Object(p.jsx)("div",{className:"logoText",children:Object(p.jsx)("img",{className:"logoText__img",src:B,alt:"SiteLogoText"})})},G=(c(69),function(){return Object(p.jsxs)("div",{className:"zero-book",children:[Object(p.jsx)("div",{className:"zero-book__title",children:"\u041a\u043d\u0438\u0433\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}),Object(p.jsx)("div",{className:"zero-book__text",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."}),Object(p.jsx)("div",{className:"zero-book__text",children:"\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u0438 \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0442\u0435."})]})}),L=(c(70),function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsx)(X,{}),Object(p.jsx)(q,{}),Object(p.jsx)(h,{}),Object(p.jsx)(H,{})]})})}),Z=(c(71),function(t){var e=t.children;return Object(p.jsx)("main",{className:"main",children:Object(p.jsx)("div",{className:"main__container",children:e})})}),z=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L,{}),Object(p.jsx)(Z,{children:Object(p.jsx)(y,{children:Object(p.jsx)(E,{})})})]})},V=c(27),Y=c(28),K=c(3),P=c(11),W=c.n(P),U={data:null,loading:!1,error:null,page:1,query:""},J=Object(u.combineReducers)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0,c=function(t,e){if(W.a.isArray(t))return W.a.concat(t,e)};switch(e.type){case a.FETCH_DATA_LOADING:return Object(K.a)(Object(K.a)({},t),{},{loading:!0,error:null});case a.FETCH_DATA_SUCESS:return Object(K.a)(Object(K.a)({},t),{},{loading:!1,error:null,data:1===t.page?e.payload:W.a.mergeWith(t.data,e.payload,c)});case a.FETCH_DATA_ERROR:return Object(K.a)(Object(K.a)({},t),{},{loading:!1,error:e.payload,data:null});case a.SET_DATA_QUERY:return Object(K.a)(Object(K.a)({},t),{},{query:e.payload});case a.SET_DATA_PAGE:return Object(K.a)(Object(K.a)({},t),{},{page:e.payload});default:return t}}}),$=Object(u.createStore)(J,Object(V.composeWithDevTools)(Object(u.applyMiddleware)(Y.a)));D.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(l.a,{store:$,children:Object(p.jsx)(z,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.9aff33ee.chunk.js.map