!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),u=new n.default({enablePrettyUrl:!0,rules:[]});console.log(u)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);String.prototype.escapeRegexp=function(){return this.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Object.prototype.buildQueryString=function(){var e=this;return Object.keys(this).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")};var u=function(){function e(e){this.enablePrettyUrl=e.enablePrettyUrl,this.rules=this.buildRules(e.rules)}return e.prototype.buildRules=function(e){for(var t=[],r=0,u=e;r<u.length;r++){var o=u[r];t.push(new n.default(o.name,o.route))}return t},e.prototype.createUrl=function(e,t){for(var r=e,n=0,u=this.rules;n<u.length;n++){var o=u[n],i=o.createUrl(e,t);if(!1!==i)return i}return r},e}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this.name=e,this.route=t}return e.prototype.createUrl=function(e,t){if(void 0===t&&(t={}),e!==this.route)return!1;var r,n=/<([\w._-]+):?([^>]+)?>/g,u=this.name,o=!0;do{if(r=n.exec(this.name)){var i=r[0],l=r[1],c=r[2],a=new RegExp(c);if(!a.test(t[l])){o=!1;break}u=u.replace(new RegExp(i.escapeRegexp()),t[l])}}while(r);return o?u:this.route+"?"+t.buildQueryString()},e}();t.default=n}]);