!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var o=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var r=t&&t.prototype instanceof u?t:u,a=Object.create(r.prototype),i=new C(o||[]);return a._invoke=function(e,t,n){var o="suspendedStart";return function(r,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw a;return T()}for(n.method=r,n.arg=a;;){var i=n.delegate;if(i){var s=v(i,n);if(s){if(s===c)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=h(e,t,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var c={};function u(){}function d(){}function f(){}var p={};p[r]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(E([])));b&&b!==t&&n.call(b,r)&&(p=b);var g=f.prototype=u.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var o;this._invoke=function(r,a){function i(){return new t((function(o,i){!function o(r,a,i,s){var l=h(e[r],e,a);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){o("next",e,i,s)}),(function(e){o("throw",e,i,s)})):t.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return o("throw",e,i,s)}))}s(l.arg)}(r,a,o,i)}))}return o=o?o.then(i,i):i()}}function v(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,v(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,c;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function E(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=g.constructor=f,f.constructor=d,d.displayName=s(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),w.prototype[a]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var i=new w(l(t,n,o,r),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),s(g,i,"Generator"),g[r]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=E,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=o}catch(e){Function("r","regeneratorRuntime = r")(o)}},function(e,t,n){var o=n(3),r=n(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],h=n[l]||0,c="".concat(l," ").concat(h);n[l]=h+1;var u=s(c),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:c,updater:b(d,t),references:1}),o.push(c)}return o}function h(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var a=m++;n=p||(p=h(t)),o=d.bind(null,n,a,!1),r=d.bind(null,n,a,!0)}else n=h(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);i[r].references--}for(var a=l(e,t),h=0;h<n.length;h++){var c=s(n[h]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\nclub-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n}",""]),t.default=r},function(e,t){class n extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this._shadowRoot.innerHTML="\n            <style>\n                * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n                \n                :host {\n                    display: block;\n                    width: 100%;\n                    background-color: cornflowerblue;\n                    color: white;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                }\n                \n                h2 {\n                    padding: 16px;\n                }\n            </style>\n            <h2>Club Finder</h2>\n        "}}customElements.define("app-bar",n)},function(e,t){class n extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}set clickEvent(e){this._clickEvent=e,this.render()}get value(){return this._shadowRoot.querySelector("#searchElement").value}render(){this._shadowRoot.innerHTML='\n            <style>\n                .search-container {\n                    max-width: 800px;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                    padding: 16px;\n                    border-radius: 5px;\n                    display: flex;\n                    position: sticky;\n                    top: 10px;\n                    background-color: white;\n                }\n            \n                .search-container>input {\n                    width: 75%;\n                    padding: 16px;\n                    border: 0;\n                    border-bottom: 1px solid cornflowerblue;\n                    font-weight: bold;\n                }\n            \n                .search-container>input:focus {\n                    outline: 0;\n                    border-bottom: 2px solid cornflowerblue;\n                }\n            \n                .search-container>input:focus::placeholder {\n                    font-weight: bold;\n                }\n            \n                .search-container>input::placeholder {\n                    color: cornflowerblue;\n                    font-weight: normal;\n                }\n            \n                .search-container>button {\n                    width: 23%;\n                    cursor: pointer;\n                    margin-left: auto;\n                    padding: 16px;\n                    background-color: cornflowerblue;\n                    color: white;\n                    border: 0;\n                    text-transform: uppercase;\n                }\n            </style>\n            \n            <div id="search-container" class="search-container">\n                <input placeholder="Search football club" id="searchElement" type="search">\n                <button id="searchButtonElement" type="submit">Search</button>\n            </div>\n        ',this._shadowRoot.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}customElements.define("search-bar",n)},function(e,t){class n extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}set club(e){this._club=e,this.render()}render(){this._shadowRoot.innerHTML=`\n            <style>\n                * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n\n                :host {\n                    display: block;\n                    margin-bottom: 18px;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                    border-radius: 10px;\n                    overflow: hidden;\n                }\n            \n                .fan-art-club {\n                    width: 100%;\n                    max-height: 300px;\n                    object-fit: cover;\n                    object-position: center;\n                }\n            \n                .club-info {\n                    padding: 24px;\n                }\n            \n                .club-info>h2 {\n                    font-weight: lighter;\n                }\n            \n                .club-info>p {\n                    margin-top: 10px;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    display: -webkit-box;\n                    -webkit-box-orient: vertical;\n                    -webkit-line-clamp: 10;\n                    /* number of lines to show */\n                }\n            </style>\n            <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">\n            <div class="club-info">\n                <h2>${this._club.name}</h2>\n                <p>${this._club.description}</p>\n            </div>\n        `}}customElements.define("club-item",n)},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(5),n(6),n(7);class o extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}set clubs(e){this._clubs=e,this.render()}render(){this._shadowRoot.innerHTML="\n            <style>\n                :host {\n                    display: block;\n                    margin-top: 32px;\n                    width: 100%;\n                    padding: 16px;\n                }\n            \n                :host>.placeholder {\n                    font-weight: lighter;\n                    color: rgba(0, 0, 0, 0.5);\n                    -webkit-user-select: none;\n                    -moz-user-select: none;\n                    -ms-user-select: none;\n                    user-select: none;\n                }\n            </style>\n        ",this._clubs.forEach(e=>{const t=document.createElement("club-item");t.club=e,this._shadowRoot.appendChild(t)})}renderError(e){this._shadowRoot.innerHTML="\n                <style>\n                placeholder {\n                    font-weight: lighter;\n                    color: rgba(0, 0, 0, 0.5);\n                    -webkit-user-select: none;\n                    -moz-user-select: none;\n                    -ms-user-select: none;\n                    user-select: none;\n                }\n            </style>\n        ",this._shadowRoot.innerHTML+=`<h2 class="placeholder">${e}</h2>`}}customElements.define("club-list",o);var r=[{name:"Arsenal",stadium:"Emirates Stadium",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg",description:"Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football. One of the most successful clubs in English football, they have won 13 First Division and Premier League titles and a joint record 11 FA Cups. Arsenal's success has been particularly consistent: the club has accumulated the second most points in English top-flight football, hold the ongoing record for the longest uninterrupted period in the top flight, and would be placed first in an aggregated league of the entire 20th century. Arsenal is the second side to complete an English top-flight season unbeaten (in the 2003–04 season), playing almost twice as many matches as the previous invincibles Preston North End in the 1888–89 season. Arsenal was founded in 1886 in Woolwich and in 1893 became the first club from the south of England to join the Football League. In 1913, they moved north across the city to Arsenal Stadium in Highbury. In the 1930s, they won five League Championship titles and two FA Cups. After a lean period in the post-war years they won the League and FA Cup Double, in the 1970–71 season, and in the 1990s and first decade of the 21st century, won two more Doubles and reached the 2006 UEFA Champions League Final. Since neighbouring Tottenham Hotspur, the two clubs have had a fierce rivalry, the North London derby. Arsenal have one of the highest incomes and largest fanbases in the world. The club was named the fifth most valuable association football club in the world, valued at £1.3 billion in 2014."},{name:"Aston Villa",stadium:"Villa Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg",description:"Aston Villa Football Club (/ˈæstən ˈvɪllə/; also known as Villa, The Villa, The Villans, The Lions) are a professional football club based in Witton, Birmingham, who play in the Premier League, the highest level of English football. Founded in 1874, they have played at their current home ground, Villa Park, since 1897. Aston Villa were founder members of The Football League in 1888. They were also founder members of the Premier League in 1992, and have remained there ever since. The club were floated by the previous owner and chairman Doug Ellis, but in 2006 full control was acquired by American businessman Randy Lerner. Lerner announced on 12 May 2014 that he is selling the club. Aston Villa are among the oldest and the most successful football clubs in the history of English football. Villa won the 1981–82 European Cup, and are thus one of five English clubs to win what is now the UEFA Champions League. They have the fourth highest total of major honours won by an English club, having won the First Division Championship seven times (most recently in the 1980–81 season), the FA Cup seven times (last won in 1957), the Football League Cup five times (last won in 1996) and the UEFA Super Cup in 1982. The club have also produced more England national team players than any other side, currently having produced 72. They have a fierce local rivalry with Birmingham City. The Second City derby between Aston Villa and Birmingham City has been played since 1879. The club's traditional kit colours are claret shirts with sky blue sleeves, white shorts and sky blue socks. Their traditional badge is of a rampant gold lion on a light blue background with the club's motto \"Prepared\" underneath; a modified version of this was adopted in 2007."},{name:"Bournemouth",stadium:"Dean Court",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg",description:"A.F.C. Bournemouth is a football club playing in the Championship, the second tier in the English football league system. The club plays at Dean Court in Kings Park, Boscombe, Bournemouth, Dorset and have been in existence since 1899. Nicknamed The Cherries, the team traditionally played in red shirts with white sleeves until 1971, when the strip was changed to red and black stripes, similar to that of A.C. Milan. A predominantly red shirt was chosen for the 2004–05 and 2005–06 seasons before announcing a return to the stripes for the 2006–07 season due to fan demand. After narrowly avoiding relegation from the Football League in the 2008–09 season, Bournemouth were promoted to League One at the end of the 2009–10. After making the League One play-off semi-finals in 2010–11 and achieving a mid-table finish in 2011–12, Bournemouth won promotion to the Championship at the end of the 2012–13 season, putting them in the second tier of the league for only the second time in their history. Although the exact date of the club's foundation is not known, there is proof that it was formed in the autumn of 1899 out of the remains of the older Boscombe St. John's Lads’ Institute F.C. The club was originally known as Boscombe F.C.. The first President was Mr. J.C. Nutt. In their first season 1889–90 Boscombe F.C. competed in the Bournemouth and District Junior League. They also played in the Hants Junior Cup. During the first two seasons they played on a football pitch in Castlemain Avenue, Pokesdown. From their third season the team played on a pitch in King's Park. In the season of 1905–06 Boscombe F.C. graduated to senior amateur football. In 1910 the club was granted a long lease upon some wasteland next to Kings Park, as the clubs football ground, by their president Mr. J.E. Cooper-Dean. With their own ground, named Dean Court after the benefactor, the club continued to thrive and dominated the local football scene. Also in 1910 the club signed their first professional football player B. Penton. Around about this time the club obtained their nickname 'The Cherries'. Foremost there are two tales on how the club gained this pet name. First, because of the cherry-red striped shirts that the team played in and, perhaps more plausible, because Dean Court was built adjacent to the Cooper-Dean estate, which encompassed numerous cherry orchards. For the first time during the season of 1913–14 the club competed in the F.A. Cup. The clubs progress was halted in 1914 with the outbreak of the war and Boscombe F.C. returned to the Hampshire league. In 1920 the Third Division was formed and Boscombe were promoted to the Southern League, with moderate success."},{name:"Brighton",stadium:"Falmer Stadium",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg",description:'Brighton and Hove Albion Football Club /ˈbraɪtən ən ˈhoʊv/ is an English football club based in the coastal city of Brighton & Hove, East Sussex. It is often referred to just as Brighton. They currently play in the Football League Championship, the second tier of the English football league system. The team is nicknamed the "Seagulls" or "Albion". The team has historically played in blue and white stripes, though this changed to all white briefly in the 1970s and again to plain blue during the club\'s most successful spell in the 1980s. Crystal Palace is considered the club\'s main rival, although the grounds are 40 miles apart. Founded in 1901, Brighton played their early professional football in the Southern League before being elected to the Football League in 1920. The club enjoyed greatest prominence between 1979 and 1983 when they played in the First Division and reached the 1983 FA Cup Final, losing to Manchester United after a replay. They were relegated from the top division in the same season. Mismanagement brought Brighton close to relegation from the Football League to the Conference which they narrowly avoided in 1997 and 1998. A boardroom takeover saved Brighton from liquidation, and following successive promotions they returned to the second tier of English football in 2002 and have played in the second and third tiers ever since.'},{name:"Chelsea",stadium:"Stamford Bridge",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg",description:"helsea Football Club /ˈtʃɛlsiː/ are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football. The club's home ground is the 41,837-seat Stamford Bridge stadium, where they have played since their establishment.\\r\\n\\r\\nChelsea had their first major success in 1955, winning the league championship, and won various cup competitions during the 1960s, 1970s, 1990s and 2000s. The club have enjoyed their greatest period of success in the past two decades, winning 15 major trophies since 1997. Domestically, Chelsea have won four league titles, seven FA Cups, four League Cups and four FA Community Shields, while in continental competitions they have won two UEFA Cup Winners' Cups, one UEFA Super Cup, one UEFA Europa League and one UEFA Champions League. Chelsea are the only London club to win the UEFA Champions League, and one of four clubs, and the only British club, to have won all three main UEFA club competitions.\\r\\n\\r\\nChelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s. The club have sustained the fifth highest average all-time attendance in English football. Their average home gate for the 2012–13 season was 41,462, the sixth highest in the Premier League. Since July 2003, Chelsea have been owned by Russian billionaire Roman Abramovich. In April 2013 they were ranked by Forbes Magazine as the seventh most valuable football club in the world, at £588 million ($901 million), an increase of 18% from the previous year."},{name:"Crystal Palace",staidum:"Selhurst Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg",description:"Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the highest level in English football, the Premier League. Since 1964, the club have mostly played in the top two leagues of English football. The club was founded in 1905 at the site of the famous Crystal Palace Exhibition building by the owners of the FA Cup Final stadium, who wanted their own team to play at the historic venue. Palace applied to be elected to The Football League, but this was rejected and they instead joined the Southern Football League Second Division, playing home games at The Crystal Palace, inspiration for the club's initial nickname, \\\"The Glaziers\\\". Palace won the Division and promotion in their first season, and played in the Southern League First Division for the next fifteen years.\\r\\n\\r\\nIn 1920 the Southern League Division One formed the Football League Third Division. Palace won the division and gained promotion to the Second Division, where they spent four seasons before suffering relegation to the Third Division South. In 1958 a league re-organisation saw Palace become founder members of Division Four. Over the next eleven years the club moved from the lowest rung of English Football to the highest, reaching the First Division in 1969, and staying in the top division for four seasons before suffering successive relegations. In 1973 the club modernised its image, changing the nickname from The Glaziers to \\\"The Eagles\\\" and ending the 68-year association with claret and blue by introducing the red-and-blue vertical stripes now associated with the club. The club stabilised itself in the top two divisions with promotions in 1977 and 1979, the latter saw the club crowned as Division Two Champions. The period between 1989–91 was a successful time for the club. They reached an FA Cup Final in 1990, won the Full Members Cup in 1991, and achieved third place in the top division in the 1990–1991 season. Palace became founder members of the Premier League in 1992, but were relegated the same season, despite achieving 49 points which is still a Premier League record for a relegated club. The club then achieved promotion back to the Premier League three times in 1994, 1997 and 2004, but each time suffered relegation at the end of the following season. Palace entered administration in both 2000 and 2010, and are now owned by a consortium of four. The club were promoted back to the Premier League with a 1–0 win over Watford in the Football League play-offs in May 2013.\\r\\n\\r\\nCrystal Palace initially played their games in the grounds of The Crystal Palace, but the First World War saw them forced to move out, and they enjoyed a number of seasons at both the Herne Hill Velodrome and The Nest. Since 1924, Palace have played their home games at Selhurst Park. Their home colours are red and blue vertical stripes, though prior to 1973 they wore claret and pale blue after the fashion of Aston Villa. They have a fierce rivalry with M23 neighbours Brighton & Hove Albion, with whom they have contested the M23 derby 98 times and also enjoy a strong rivalry with fellow South London team Millwall. The club's kit is currently made by Macron, and the shirt sponsor is Neteller. The club captain is Mile Jedinak and the current player of the year is Julian Speroni. Edmund Goodman is the club's longest serving manager, and Jim Cannon has made the most appearances for the club. Peter Simpson is the club's top scorer for both one season and overall, netting 54 and 165 respectively. The highest transfer fee received has been for Wilfried Zaha from Manchester United in January 2013."},{name:"Everton",stadium:"Goodison Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg",description:"Everton Football Club /ˈɛvərtən/ are an English professional football club based in Liverpool, and currently playing in the Premier League. The club have competed in the top division for a record 110 seasons (missing only four seasons, in the second tier) and have won the League Championship nine times.\\r\\n\\r\\nFormed in 1878, Everton were founding members of The Football League in 1888 and won their first league championship two seasons later. Following four league titles and two FA Cup wins, Everton experienced a lull in the immediate post World War Two period until a revival in the 1960s which saw the club win two league championships and an FA Cup. The mid-1980s represented their most recent period of sustained success, with two League Championship successes, an FA Cup, and the 1985 European Cup Winners' Cup. The club's most recent major trophy was the 1995 FA Cup. The club's supporters are known as Evertonians.\\r\\n\\r\\nEverton have a rivalry with neighbours Liverpool and the two sides contest the Merseyside derby. The club have been based at Goodison Park since 1892, after moving from Anfield after a row over its rent.\\r\\n\\r\\nThe club's home colours are royal blue shirts and white shorts. Everton player Dixie Dean scored a record 60 league goals in the 1927–28 season."}];var a=class{static searchClub(e){return new Promise((t,n)=>{const o=r.filter(t=>t.name.toUpperCase().includes(e.toUpperCase()));o.length?t(o):n(e+" is not found")})}};var i=()=>{const e=document.querySelector("search-bar"),t=document.querySelector("club-list"),n=e=>{t.clubs=e},o=e=>{t.renderError(e)};e.clickEvent=async()=>{try{const t=await a.searchClub(e.value);n(t)}catch(e){o(e)}}};document.addEventListener("DOMContentLoaded",i)}]);