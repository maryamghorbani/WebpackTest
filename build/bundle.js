!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="build/",e(e.s=29)}([function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var f=0;f<t.length;f++){var u=[].concat(t[f]);r&&i[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n,e){"use strict";var r=e(1),i=e.n(r),a=e(10),o=i()((function(t){return t[1]}));o.i(a.a),o.push([t.i,"body {\n  font-family: 'vazir';\n}\n\n.img-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid darkred;\n  padding: 10px;\n  flex-direction: column;\n}",""]),n.a=o},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Regular.eot"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Bold.eot"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Thin.eot"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Light.eot"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Medium.eot"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Black.eot"},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),o=[];function f(t){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],i=0;i<t.length;i++){var a=t[i],u=n.base?a[0]+n.base:a[0],c=e[u]||0,s="".concat(u," ").concat(c);e[u]=c+1;var l=f(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(d)):o.push({identifier:s,updater:b(d,n),references:1}),r.push(s)}return r}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,l=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function d(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,i);else{var a=document.createTextNode(i),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a)}}function p(t,n,e){var r=e.css,i=e.media,a=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,n){var e,r,i;if(n.singleton){var a=h++;e=m||(m=c(n)),r=d.bind(null,e,a,!1),i=d.bind(null,e,a,!0)}else e=c(n),r=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=f(e[r]);o[i].references--}for(var a=u(t,n),c=0;c<e.length;c++){var s=f(e[c]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}e=a}}}},function(t,n,e){"use strict";var r=e(1),i=e.n(r),a=e(0),o=e.n(a),f=e(3),u=e(11),c=e(12),s=e(13),l=e(4),d=e(14),p=e(15),m=e(16),h=e(5),b=e(17),y=e(18),v=e(19),g=e(6),w=e(20),z=e(21),V=e(22),x=e(7),T=e(23),M=e(24),j=e(25),C=e(8),S=e(26),k=e(27),B=e(28),O=i()((function(t){return t[1]})),L=o()(f.a),E=o()(f.a,{hash:"?#iefix"}),_=o()(u.a),I=o()(c.a),N=o()(s.a),P=o()(l.a),R=o()(l.a,{hash:"?#iefix"}),A=o()(d.a),H=o()(p.a),q=o()(m.a),F=o()(h.a),U=o()(h.a,{hash:"?#iefix"}),D=o()(b.a),J=o()(y.a),Q=o()(v.a),$=o()(g.a),G=o()(g.a,{hash:"?#iefix"}),K=o()(w.a),W=o()(z.a),X=o()(V.a),Y=o()(x.a),Z=o()(x.a,{hash:"?#iefix"}),tt=o()(T.a),nt=o()(M.a),et=o()(j.a),rt=o()(C.a),it=o()(C.a,{hash:"?#iefix"}),at=o()(S.a),ot=o()(k.a),ft=o()(B.a);O.push([t.i,"@font-face {\n  font-family: Vazir;\n  src: url("+L+");\n  src: url("+E+") format('embedded-opentype'),\n       url("+_+") format('woff2'),\n       url("+I+") format('woff'),\n       url("+N+") format('truetype');\n  font-weight: normal;\n  font-display:swap;\n}\n\n@font-face {\n  font-family: Vazir;\n  src: url("+P+");\n  src: url("+R+") format('embedded-opentype'),\n       url("+A+") format('woff2'),\n       url("+H+") format('woff'),\n       url("+q+") format('truetype');\n  font-weight: bold;\n  font-display:swap;\n}\n\n@font-face {\n  font-family: Vazir;\n  src: url("+F+");\n  src: url("+U+") format('embedded-opentype'),\n       url("+D+") format('woff2'),\n       url("+J+") format('woff'),\n       url("+Q+") format('truetype');\n  font-weight: 100;\n  font-display:swap;\n}\n\n@font-face {\n  font-family: Vazir;\n  src: url("+$+");\n  src: url("+G+") format('embedded-opentype'),\n       url("+K+") format('woff2'),\n       url("+W+") format('woff'),\n       url("+X+") format('truetype');\n  font-weight: 300;\n  font-display:swap;\n}\n\n@font-face {\n  font-family: Vazir;\n  src: url("+Y+");\n  src: url("+Z+") format('embedded-opentype'),\n       url("+tt+") format('woff2'),\n       url("+nt+") format('woff'),\n       url("+et+") format('truetype');\n  font-weight: 500;\n  font-display:swap;\n}\n\n@font-face {\n  font-family: Vazir;\n  src: url("+rt+");\n  src: url("+it+") format('embedded-opentype'),\n       url("+at+") format('woff2'),\n       url("+ot+") format('woff'),\n       url("+ft+") format('truetype');\n  font-weight: 900;\n  font-display:swap;\n}",""]),n.a=O},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Regular.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Regular.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Regular.ttf"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Bold.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Bold.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Bold.ttf"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Thin.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Thin.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Thin.ttf"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Light.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Light.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Light.ttf"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Medium.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Medium.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Medium.ttf"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Black.woff2"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Black.woff"},function(t,n,e){"use strict";n.a="build/fonts/Vazir-Black.ttf"},function(t,n,e){"use strict";e.r(n);var r=e(9),i=e.n(r),a=e(2),o={insert:"head",singleton:!1};i()(a.a,o),a.a.locals;function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,(e=[{key:"crateImageTag",value:function(){var t=document.createElement("img");return t.alt="My Image",t.classList.add("image"),t.src="build/images/1.png",t}},{key:"createTextTag",value:function(){var t=document.createElement("h2");return t.innerHTML="سلام مریم",t}},{key:"render",value:function(){var t=document.createElement("div");return t.classList.add("img-box"),t.appendChild(this.crateImageTag()),t.appendChild(this.createTextTag()),t}}])&&f(n.prototype,e),r&&f(n,r),t}());document.querySelector("#app").appendChild(u.render())}]);