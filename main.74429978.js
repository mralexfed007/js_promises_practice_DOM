parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("body");function n(){return new Promise(function(e,n){document.addEventListener("mousedown",function(n){n.preventDefault(),e("First promise was resolved")}),setTimeout(function(){n("First promise was rejected")},3e3)})}function t(){return new Promise(function(e){document.addEventListener("mousedown",function(n){n.preventDefault(),0!==n.button&&2!==n.button||e("Second promise was resolved")})})}function o(){var e=!1,n=!1;return new Promise(function(t){document.addEventListener("mousedown",function(o){0===o.button?e=!0:2===o.button&&(n=!0),!0===e&&!0===n&&t("Third promise was resolved")})})}function r(n){var t=document.createElement("div");t.dataset.qa="notification",t.textContent=n,e.append(t)}var u=n(),i=t(),s=o();u.then(r,r),i.then(r),s.then(r);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.74429978.js.map