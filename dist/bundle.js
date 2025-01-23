(()=>{var e,t,r,n,a={349:function(e){e.exports=(()=>{"use strict";var e={870:(e,t,r)=>{r.r(t),r.d(t,{createEndpoint:()=>a,expose:()=>c,proxy:()=>m,proxyMarker:()=>n,releaseProxy:()=>o,transfer:()=>g,transferHandlers:()=>l,windowEndpoint:()=>h,wrap:()=>p});const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>s(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return c(e,t),[r,[r]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:a,type:o,path:s}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(b);let p;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),r=s.reduce(((e,t)=>e[t]),e);switch(o){case 0:p=r;break;case 1:t[s.slice(-1)[0]]=b(n.data.value),p=!0;break;case 2:p=r.apply(t,l);break;case 3:p=m(new r(...l));break;case 4:{const{port1:t,port2:r}=new MessageChannel;c(e,r),p=g(t,[t])}break;case 5:p=void 0}}catch(e){p={value:e,[i]:0}}Promise.resolve(p).catch((e=>({value:e,[i]:0}))).then((e=>{const[n,i]=y(e);t.postMessage(Object.assign(Object.assign({},n),{id:a}),i),5===o&&(t.removeEventListener("message",r),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return _(e,[],t)}function v(e){if(e)throw new Error("Proxy has been released and is not useable")}function _(e,t=[],r=function(){}){let n=!1;const i=new Proxy(r,{get(r,a){if(v(n),a===o)return()=>w(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),n=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const r=w(e,{type:0,path:t.map((e=>e.toString()))}).then(b);return r.then.bind(r)}return _(e,[...t,a])},set(r,a,o){v(n);const[i,s]=y(o);return w(e,{type:1,path:[...t,a].map((e=>e.toString())),value:i},s).then(b)},apply(r,o,i){v(n);const s=t[t.length-1];if(s===a)return w(e,{type:4}).then(b);if("bind"===s)return _(e,t.slice(0,-1));const[l,c]=f(i);return w(e,{type:2,path:t.map((e=>e.toString())),argumentList:l},c).then(b)},construct(r,a){v(n);const[o,i]=f(a);return w(e,{type:3,path:t.map((e=>e.toString())),argumentList:o},i).then(b)}});return i}function f(e){const t=e.map(y);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const d=new WeakMap;function g(e,t){return d.set(e,t),e}function m(e){return Object.assign(e,{[n]:!0})}function h(e,t=self,r="*"){return{postMessage:(t,n)=>e.postMessage(t,r,n),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function y(e){for(const[t,r]of l)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:3,name:t,value:n},a]}return[{type:0,value:e},d.get(e)||[]]}function b(e){switch(e.type){case 3:return l.get(e.name).deserialize(e.value);case 0:return e.value}}function w(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}},162:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const i=o(r(870));async function s(e){if(e.data&&"eval"===e.data.action){const t=new Int32Array(e.data.notify,0,2),r=new Uint8Array(e.data.notify,8);let n;try{n={ok:await u(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),n={err:String(t)}}const a=(new TextEncoder).encode(JSON.stringify(n));r.set(a,0),t[1]=a.length,Atomics.notify(t,0)}}function l(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let r=1,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,r++;t.unshift(e.tagName.toLowerCase()+":nth-child("+r+")")}e=e.parentElement}return t.join(" > ")}function c(e){return Object.keys(e)}async function u(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const r={};for(const n of e.columns)"selector"===n?r.selector=l(t):"parent"===n?t.parentElement&&(r.parent=t.parentElement?l(t.parentElement):null):"idx"===n||(r[n]=t[n]);return r}));if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const r=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const n=document.createElement(e.value.tagName);for(const t of c(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can't be set`);n[t]=e.value[t]}return r.appendChild(n),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const r=[];for(const n of c(e.value)){const a=e.value[n];if("parent"!==n){if("idx"!==n&&"selector"!==n&&a!==t[n]){if(console.log("SETTING ",n,t[n],"->",a),"tagName"===n)throw Error("can't change tagName");r.push(n)}}else if(a!==l(t.parentElement)){const e=document.querySelectorAll(a);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const n of r)t[n]=e.value[n];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,r,n=1/0){const a=new Worker(t),o=i.wrap(a),l=await o.SplitFileHttpDatabase(r,e,void 0,n);return a.addEventListener("message",s),{db:l,worker:o,configs:e}}},432:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),a(r(162),t)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(432)})()},44:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var n=r(349);const a=new URL(r(860),r.b),o=new URL(r(664),r.b);let i;try{i=await(0,n.createDbWorker)([{from:"inline",config:{serverMode:"full",url:"/stuff-plus-simple/dist/test.db",requestChunkSize:4096}}],a.toString(),o.toString())}catch(u){console.log(u)}class s{static async load(){const e=document.getElementById("pName").value,t=document.getElementById("pId").value,r=document.getElementById("sortBy").value,n=Object.freeze({pid:"pitcher_id",pn:"pitcher_name",FF_avg_x_rv100:"FF_avg_x_rv100",SI_avg_x_rv100:"SI_avg_x_rv100",FC_avg_x_rv100:"FC_avg_x_rv100",CH_avg_x_rv100:"CH_avg_x_rv100",FS_avg_x_rv100:"FS_avg_x_rv100",FO_avg_x_rv100:"FO_avg_x_rv100",SC_avg_x_rv100:"SC_avg_x_rv100",CU_avg_x_rv100:"CU_avg_x_rv100",KC_avg_x_rv100:"KC_avg_x_rv100",CS_avg_x_rv100:"CS_avg_x_rv100",SL_avg_x_rv100:"SL_avg_x_rv100",ST_avg_x_rv100:"ST_avg_x_rv100",SV_avg_x_rv100:"SV_avg_x_rv100",KN_avg_x_rv100:"KN_avg_x_rv100"});l();const a=await i.db.query(`select * from pitchers where pitcher_name like '%${e}%' and pitcher_id like '%${t}%' order by ${n[r]} ${direction}`);for(let e=0;e<a.length;e++)c(a[e])}}function l(){const e=document.getElementById("dataTable");for(;e.rows.length>1;)e.deleteRow(1)}function c(e){const t=document.getElementById("dataTable").insertRow(1);t.insertCell(0).innerHTML=e.pitcher_id,t.insertCell(1).innerHTML=e.pitcher_name,t.insertCell(2).innerHTML=e.FF_avg_x_rv100,t.insertCell(3).innerHTML=e.SI_avg_x_rv100,t.insertCell(4).innerHTML=e.FC_avg_x_rv100,t.insertCell(5).innerHTML=e.CH_avg_x_rv100,t.insertCell(6).innerHTML=e.FS_avg_x_rv100,t.insertCell(7).innerHTML=e.FO_avg_x_rv100,t.insertCell(8).innerHTML=e.SC_avg_x_rv100,t.insertCell(9).innerHTML=e.CU_avg_x_rv100,t.insertCell(10).innerHTML=e.KC_avg_x_rv100,t.insertCell(11).innerHTML=e.CS_avg_x_rv100,t.insertCell(12).innerHTML=e.SL_avg_x_rv100,t.insertCell(13).innerHTML=e.ST_avg_x_rv100,t.insertCell(14).innerHTML=e.SV_avg_x_rv100,t.insertCell(15).innerHTML=e.KN_avg_x_rv100}window.EntryPoint=s,t()}catch(p){t(p)}}),1)},664:(e,t,r)=>{"use strict";e.exports=r.p+"8a2a3c8efae774018112.wasm"},860:(e,t,r)=>{"use strict";e.exports=r.p+"fc82d4328c52d317f789.js"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return a[e].call(r.exports,r,r.exports,i),r.exports}i.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(a,o,i)=>{var s;i&&((s=[]).d=-1);var l,c,u,p=new Set,v=a.exports,_=new Promise(((e,t)=>{u=t,c=e}));_[t]=v,_[e]=e=>(s&&e(s),p.forEach(e),_.catch((e=>{}))),a.exports=_,o((a=>{var o;l=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{i[t]=e,n(o)}),(e=>{i[r]=e,n(o)}));var i={};return i[e]=e=>e(o),i}}var s={};return s[e]=e=>{},s[t]=a,s})))(a);var i=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(o=()=>t(i)).r=0;var r=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(o.r++,e.push(o)));l.map((t=>t[e](r)))}));return o.r?c:i()}),(e=>(e?u(_[r]=e):c(v),n(s)))),s&&s.d<0&&(s.d=0)},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i(44)})();