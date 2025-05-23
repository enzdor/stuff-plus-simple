/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sql.js-httpvfs/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/index.js ***!
  \***************************************************/
/***/ (function(module) {

eval("!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,(function(){return(()=>{\"use strict\";var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>l,proxy:()=>v,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>g,wrap:()=>f});const r=Symbol(\"Comlink.proxy\"),o=Symbol(\"Comlink.endpoint\"),a=Symbol(\"Comlink.releaseProxy\"),i=Symbol(\"Comlink.thrown\"),s=e=>\"object\"==typeof e&&null!==e||\"function\"==typeof e,c=new Map([[\"proxy\",{canHandle:e=>s(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e))}],[\"throw\",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener(\"message\",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let f;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),n=s.reduce(((e,t)=>e[t]),e);switch(a){case 0:f=n;break;case 1:t[s.slice(-1)[0]]=w(r.data.value),f=!0;break;case 2:f=n.apply(t,c);break;case 3:f=v(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;l(e,n),f=y(t,[t])}break;case 5:f=void 0}}catch(e){f={value:e,[i]:0}}Promise.resolve(f).catch((e=>({value:e,[i]:0}))).then((e=>{const[r,i]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),i),5===a&&(t.removeEventListener(\"message\",n),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return\"MessagePort\"===e.constructor.name})(e)&&e.close()}function f(e,t){return d(e,[],t)}function p(e){if(e)throw new Error(\"Proxy has been released and is not useable\")}function d(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,o){if(p(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),r=!0}));if(\"then\"===o){if(0===t.length)return{then:()=>i};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return d(e,[...t,o])},set(n,o,a){p(r);const[i,s]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:i},s).then(w)},apply(n,a,i){p(r);const s=t[t.length-1];if(s===o)return E(e,{type:4}).then(w);if(\"bind\"===s)return d(e,t.slice(0,-1));const[c,l]=m(i);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(n,o){p(r);const[a,i]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},i).then(w)}});return i}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function y(e,t){return h.set(e,t),e}function v(e){return Object.assign(e,{[r]:!0})}function g(e,t=self,n=\"*\"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join(\"-\");e.addEventListener(\"message\",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener(\"message\",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,\"default\",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)\"default\"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,\"__esModule\",{value:!0}),t.createDbWorker=void 0;const i=a(n(870));async function s(e){if(e.data&&\"eval\"===e.data.action){const t=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);let r;try{r={ok:await u(e.data.request)}}catch(t){console.error(\"worker request error\",e.data.request,t),r={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(r));n.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if(\"BODY\"===e.tagName)return\"body\";const t=[];for(;e.parentElement&&\"BODY\"!==e.tagName;){if(e.id){t.unshift(\"#\"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+\":nth-child(\"+n+\")\")}e=e.parentElement}return t.join(\" > \")}function l(e){return Object.keys(e)}async function u(e){if(console.log(\"dom vtable request\",e),\"select\"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)\"selector\"===r?n.selector=c(t):\"parent\"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):\"idx\"===r||(n[r]=t[r]);return n}));if(\"insert\"===e.type){if(!e.value.parent)throw Error('\"parent\" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error(\"tagName must be set for inserting\");const r=document.createElement(e.value.tagName);for(const t of l(e.value))if(null!==e.value[t]){if(\"tagName\"===t||\"parent\"===t)continue;if(\"idx\"===t||\"selector\"===t)throw Error(`${t} can't be set`);r[t]=e.value[t]}return n.appendChild(r),null}if(\"update\"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of l(e.value)){const o=e.value[r];if(\"parent\"!==r){if(\"idx\"!==r&&\"selector\"!==r&&o!==t[r]){if(console.log(\"SETTING \",r,t[r],\"->\",o),\"tagName\"===r)throw Error(\"can't change tagName\");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set(\"WORKERSQLPROXIES\",{canHandle:e=>!1,serialize(e){throw Error(\"no\")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,n,r=1/0){const o=new Worker(t),a=i.wrap(o),c=await a.SplitFileHttpDatabase(n,e,void 0,r);return o.addEventListener(\"message\",s),{db:c,worker:a,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)\"default\"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,\"__esModule\",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n(432)})()}));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sql.js-httpvfs */ \"./node_modules/sql.js-httpvfs/dist/index.js\");\n/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst workerUrl = new URL(\n\t/* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sqlite.worker.js */ \"./node_modules/sql.js-httpvfs/dist/sqlite.worker.js\"), __webpack_require__.b\n);\nconst wasmUrl = new URL(/* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sql-wasm.wasm */ \"./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm\"), __webpack_require__.b);\n\nlet worker;\n\ntry {\n\tworker = await (0,sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__.createDbWorker)(\n\t\t[\n\t\t\t{\n\t\t\t\tfrom: \"inline\",\n\t\t\t\tconfig: {\n\t\t\t\t\tserverMode: \"full\",\n\t\t\t\t\t// production path is /stuff-plus-simple/dist/test.db\n\t\t\t\t\t// dev path is        /dist/test.db\n\t\t\t\t\turl: \"/dist/test.db\",\n\t\t\t\t\t// url: \"/stuff-plus-simple/dist/test.db\",\n\t\t\t\t\trequestChunkSize: 4096,\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\tworkerUrl.toString(),\n\t\twasmUrl.toString()\n\t);\n} catch (e) {\n\tconsole.log(e)\n}\n\n\n\nclass EntryPoint {\n\tstatic async loadPlus() {\n\n\t\tconst pitcherName = document.getElementById(\"pNamePlus\").value\n\t\tconst pitcherId = document.getElementById(\"pIdPlus\").value\n\t\tconst sortBy = document.getElementById(\"sortByPlus\").value\n\t\tconst direction = document.getElementById(\"directionPlus\").value\n\t\tconst variable = document.getElementById(\"variablePlus\").value\n\t\tconst season = document.getElementById(\"seasonPlus\").value\n\t\tlet minimumN = document.getElementById(\"minimumNPlus\").value\n\t\tif (minimumN == \"\") {\n\t\t\tminimumN = \"0\"\n\t\t}\n\t\tlet limit = document.getElementById(\"limitPlus\").value\n\t\tif (limit == \"\") {\n\t\t\tlimit = \"100000\"\n\t\t}\n\n\t\tcleanTable('dataTablePlus')\n\n\t\t// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);\n\t\tconst result = await worker.db.query(`\n\t\t\tselect * from ${variable}\n\t\t\tinner join pitchers\n\t\t\ton ${variable}.pitcher_id = pitchers.pitcher_id\n\t\t\twhere pitcher_name like '%${pitcherName}%' \n\t\t\tand season like '%${season}%'\n\t\t\tand pitchers.pitcher_id like '%${pitcherId}%' \n\t\t\tand N > ${minimumN}\n\t\t\torder by ${sortBy} ${direction}\n\t\t\tlimit ${limit}\n\t\t`);\n\n\t\tfor (let i = 0; i < result.length; i++) {\n\t\t\tnewRowPlus(result[i])\n\t\t}\n\t\treturn\n\t}\n\n\tstatic async loadNumber() {\n\n\t\tconst pitcherName = document.getElementById(\"pNameNumber\").value\n\t\tconst pitcherId = document.getElementById(\"pIdNumber\").value\n\t\tconst sortBy = document.getElementById(\"sortByNumber\").value\n\t\tconst direction = document.getElementById(\"directionNumber\").value\n\t\tconst season = document.getElementById(\"seasonNumber\").value\n\t\tlet limit = document.getElementById(\"limitNumber\").value\n\t\tif (limit == \"\") {\n\t\t\tlimit = \"100000\"\n\t\t}\n\n\t\tcleanTable('dataTableNumber')\n\n\t\t// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);\n\t\tconst result = await worker.db.query(`\n\t\t\tselect * from stuff_plus\n\t\t\tinner join pitchers\n\t\t\ton stuff_plus.pitcher_id = pitchers.pitcher_id\n\t\t\twhere pitcher_name like '%${pitcherName}%' \n\t\t\tand season like '%${season}%'\n\t\t\tand pitchers.pitcher_id like '%${pitcherId}%' \n\t\t\torder by ${sortBy} ${direction}\n\t\t\tlimit ${limit}\n\t\t`);\n\n\t\tfor (let i = 0; i < result.length; i++) {\n\t\t\tnewRowNumber(result[i])\n\t\t}\n\t\treturn\n\t}\n\n\tstatic async loadRegressor() {\n\n\t\tconst pitcherName = document.getElementById(\"pNameRegressor\").value\n\t\tconst pitcherId = document.getElementById(\"pIdRegressor\").value\n\t\tconst sortBy = document.getElementById(\"sortByRegressor\").value\n\t\tconst direction = document.getElementById(\"directionRegressor\").value\n\t\tconst season = document.getElementById(\"seasonRegressor\").value\n\t\tconst pitchType = document.getElementById(\"pitchTypeRegressor\").value\n\t\tlet minimumPtn = document.getElementById(\"minimumPtnRegressor\").value\n\t\tif (minimumPtn == \"\") {\n\t\t\tminimumPtn = \"0\"\n\t\t}\n\t\tconsole.log(minimumPtn)\n\t\tlet limit = document.getElementById(\"limitRegressor\").value\n\t\tif (limit == \"\") {\n\t\t\tlimit = \"100000\"\n\t\t}\n\n\t\tcleanTable('dataTableRegressor')\n\n\t\t// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);\n\t\tconst result = await worker.db.query(`\n\t\t\tselect * from stuff_regressors\n\t\t\tinner join pitchers\n\t\t\ton stuff_regressors.pitcher_id = pitchers.pitcher_id\n\t\t\tleft join stuff_plus on stuff_regressors.pitcher_id = stuff_plus.pitcher_id\n\t\t\tand stuff_regressors.season = stuff_plus.season\n\t\t\twhere pitcher_name like '%${pitcherName}%' \n\t\t\tand stuff_regressors.season like '%${season}%'\n\t\t\tand pitch_type like '%${pitchType}%'\n\t\t\tand pitchers.pitcher_id like '%${pitcherId}%' \n\t\t\tand\n\t\t\t(case\n\t\t\t\twhen stuff_regressors.pitch_type like 'FF' then FF_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'SI' then SI_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'FC' then FC_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'CH' then CH_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'FS' then FS_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'FO' then FO_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'SC' then SC_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'CU' then CU_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'KC' then KC_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'CS' then CS_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'SL' then SL_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'ST' then ST_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'SV' then SV_n > ${minimumPtn}\n\t\t\t\twhen stuff_regressors.pitch_type like 'KN' then KN_n > ${minimumPtn}\n\t\t\tend)\n\t\t\torder by ${sortBy} ${direction}\n\t\t\tlimit ${limit}\n\t\t`);\n\t\tconsole.log(result)\n\t\t/*\n\t\t*/\n\n\t\tfor (let i = 0; i < result.length; i++) {\n\t\t\tnewRowRegressor(result[i])\n\t\t}\n\t\treturn\n\t}\n\n\tstatic async loadPlayground() {\n\t\ttry {\n\t\t\tconst input = document.getElementById(\"playground-input\").value\n\n\t\t\tconst result = await worker.db.query(input)\n\t\t\tconst columns = Object.keys(result[0]);\n\n\t\t\tconst rawText = [\n\t\t\t\tcolumns.join(\"|\"),\n\t\t\t\t\"-\".repeat(columns.join(\"|\").length),\n\t\t\t\t...result.map(row => columns.map(col => row[col] !== null ? row[col] : '').join(\"|\")) // Join each row's values with a pipe (|) separator\n\t\t\t].join(\"\\n\");\n\t\t\tdocument.getElementById(\"playground-output\").innerHTML = rawText\n\t\t} catch (e) {\n\t\t\tdocument.getElementById(\"playground-output\").innerHTML = e\n\t\t}\n\t}\n\n\tstatic hideRest(toNotHide) {\n\t\tlet not = document.getElementById(toNotHide)\n\t\tlet titleNot = document.getElementById('h-' + toNotHide)\n\t\tnot.style.display = \"block\";\n\t\ttitleNot.style.color = \"blue\";\n\n\t\tconst opts = ['plus-search', 'number-search', 'regressor-search', 'playground-search']\n\t\tconst index = opts.indexOf(toNotHide)\n\t\topts.splice(index, 1)\n\n\t\tfor (let i in opts) {\n\t\t\tlet theDiv = document.getElementById(opts[i])\n\t\t\tlet titletheDiv = document.getElementById('h-' + opts[i])\n\t\t\ttheDiv.style.display = \"none\";\n\t\t\ttitletheDiv.style.color = \"black\";\n\t\t}\n\t}\n}\n\nfunction cleanTable(tableName) {\n\tconst table = document.getElementById(tableName)\n\n\twhile (table.rows.length > 1) {\n\t\ttable.deleteRow(1)\n\t}\n}\n\n\nfunction newRowPlus(rowValues) {\n\tconst table = document.getElementById('dataTablePlus')\n\tconst row = table.insertRow(1)\n\n\tconst id = row.insertCell(0)\n\tid.innerHTML = rowValues.pitcher_id\n\tconst name = row.insertCell(1)\n\tname.innerHTML = rowValues.pitcher_name\n\tconst FF_avg_x_rv100 = row.insertCell(2)\n\tFF_avg_x_rv100.innerHTML = rowValues.FF_avg_x_rv100\n\tconst SI_avg_x_rv100 = row.insertCell(3)\n\tSI_avg_x_rv100.innerHTML = rowValues.SI_avg_x_rv100\n\tconst FC_avg_x_rv100 = row.insertCell(4)\n\tFC_avg_x_rv100.innerHTML = rowValues.FC_avg_x_rv100\n\tconst CH_avg_x_rv100 = row.insertCell(5)\n\tCH_avg_x_rv100.innerHTML = rowValues.CH_avg_x_rv100\n\tconst FS_avg_x_rv100 = row.insertCell(6)\n\tFS_avg_x_rv100.innerHTML = rowValues.FS_avg_x_rv100\n\tconst FO_avg_x_rv100 = row.insertCell(7)\n\tFO_avg_x_rv100.innerHTML = rowValues.FO_avg_x_rv100\n\tconst SC_avg_x_rv100 = row.insertCell(8)\n\tSC_avg_x_rv100.innerHTML = rowValues.SC_avg_x_rv100\n\tconst CU_avg_x_rv100 = row.insertCell(9)\n\tCU_avg_x_rv100.innerHTML = rowValues.CU_avg_x_rv100\n\tconst KC_avg_x_rv100 = row.insertCell(10)\n\tKC_avg_x_rv100.innerHTML = rowValues.KC_avg_x_rv100\n\tconst CS_avg_x_rv100 = row.insertCell(11)\n\tCS_avg_x_rv100.innerHTML = rowValues.CS_avg_x_rv100\n\tconst SL_avg_x_rv100 = row.insertCell(12)\n\tSL_avg_x_rv100.innerHTML = rowValues.SL_avg_x_rv100\n\tconst ST_avg_x_rv100 = row.insertCell(13)\n\tST_avg_x_rv100.innerHTML = rowValues.ST_avg_x_rv100\n\tconst SV_avg_x_rv100 = row.insertCell(14)\n\tSV_avg_x_rv100.innerHTML = rowValues.SV_avg_x_rv100\n\tconst KN_avg_x_rv100 = row.insertCell(15)\n\tKN_avg_x_rv100.innerHTML = rowValues.KN_avg_x_rv100\n\tconst ovr = row.insertCell(16)\n\tovr.innerHTML = rowValues.arsenal_avg\n\tconst seasonYear = row.insertCell(17)\n\tseasonYear.innerHTML = rowValues.season\n\n}\n\nfunction newRowNumber(rowValues) {\n\tconst table = document.getElementById('dataTableNumber')\n\tconst row = table.insertRow(1)\n\n\tconst id = row.insertCell(0)\n\tid.innerHTML = rowValues.pitcher_id\n\tconst name = row.insertCell(1)\n\tname.innerHTML = rowValues.pitcher_name\n\tconst FF_n = row.insertCell(2)\n\tFF_n.innerHTML = rowValues.FF_n\n\tconst SI_n = row.insertCell(3)\n\tSI_n.innerHTML = rowValues.SI_n\n\tconst FC_n = row.insertCell(4)\n\tFC_n.innerHTML = rowValues.FC_n\n\tconst CH_n = row.insertCell(5)\n\tCH_n.innerHTML = rowValues.CH_n\n\tconst FS_n = row.insertCell(6)\n\tFS_n.innerHTML = rowValues.FS_n\n\tconst FO_n = row.insertCell(7)\n\tFO_n.innerHTML = rowValues.FO_n\n\tconst SC_n = row.insertCell(8)\n\tSC_n.innerHTML = rowValues.SC_n\n\tconst CU_n = row.insertCell(9)\n\tCU_n.innerHTML = rowValues.CU_n\n\tconst KC_n = row.insertCell(10)\n\tKC_n.innerHTML = rowValues.KC_n\n\tconst CS_n = row.insertCell(11)\n\tCS_n.innerHTML = rowValues.CS_n\n\tconst SL_n = row.insertCell(12)\n\tSL_n.innerHTML = rowValues.SL_n\n\tconst ST_n = row.insertCell(13)\n\tST_n.innerHTML = rowValues.ST_n\n\tconst SV_n = row.insertCell(14)\n\tSV_n.innerHTML = rowValues.SV_n\n\tconst KN_n = row.insertCell(15)\n\tKN_n.innerHTML = rowValues.KN_n\n\tconst N = row.insertCell(16)\n\tN.innerHTML = rowValues.N\n\tconst seasonYear = row.insertCell(17)\n\tseasonYear.innerHTML = rowValues.season\n\n}\n\nfunction newRowRegressor(rowValues) {\n\tconst table = document.getElementById('dataTableRegressor')\n\tconst row = table.insertRow(1)\n\n\tconst pitcherId = row.insertCell(0);\n\tpitcherId.innerHTML = rowValues.pitcher_id;\n\tconst name = row.insertCell(1);\n\tname.innerHTML = rowValues.pitcher_name;\n\tconst pitchType = row.insertCell(2);\n\tpitchType.innerHTML = rowValues.pitch_type;\n\tconst releaseSpeed = row.insertCell(3);\n\treleaseSpeed.innerHTML = rowValues.release_speed;\n\tconst releasePosX = row.insertCell(4);\n\treleasePosX.innerHTML = rowValues.release_pos_x;\n\tconst releasePosY = row.insertCell(5);\n\treleasePosY.innerHTML = rowValues.release_pos_y;\n\tconst releasePosZ = row.insertCell(6);\n\treleasePosZ.innerHTML = rowValues.release_pos_z;\n\tconst pfxX = row.insertCell(7);\n\tpfxX.innerHTML = rowValues.pfx_x;\n\tconst pfxZ = row.insertCell(8);\n\tpfxZ.innerHTML = rowValues.pfx_z;\n\tconst vx0 = row.insertCell(9);\n\tvx0.innerHTML = rowValues.vx0;\n\tconst vy0 = row.insertCell(10);\n\tvy0.innerHTML = rowValues.vy0;\n\tconst vz0 = row.insertCell(11);\n\tvz0.innerHTML = rowValues.vz0;\n\tconst ax = row.insertCell(12);\n\tax.innerHTML = rowValues.ax;\n\tconst ay = row.insertCell(13);\n\tay.innerHTML = rowValues.ay;\n\tconst az = row.insertCell(14);\n\taz.innerHTML = rowValues.az;\n\tconst releaseSpinRate = row.insertCell(15);\n\treleaseSpinRate.innerHTML = rowValues.release_spin_rate;\n\tconst spinAxis = row.insertCell(16);\n\tspinAxis.innerHTML = rowValues.spin_axis;\n\tconst releaseExtension = row.insertCell(17);\n\treleaseExtension.innerHTML = rowValues.release_extension;\n\tconst vaa = row.insertCell(18);\n\tvaa.innerHTML = rowValues.vaa;\n\tconst haa = row.insertCell(19);\n\thaa.innerHTML = rowValues.haa;\n\tconst abs_axis_differential = row.insertCell(20);\n\tabs_axis_differential.innerHTML = rowValues.abs_axis_differential;\n\tconst coors = row.insertCell(21);\n\tcoors.innerHTML = rowValues.coors;\n\tconst stuffPlus = row.insertCell(22);\n\tstuffPlus.innerHTML = rowValues.stuff_plus;\n\tconst season = row.insertCell(23);\n\tseason.innerHTML = rowValues.season;\n\n}\n\nwindow.EntryPoint = EntryPoint\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm":
/*!********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8a2a3c8efae774018112.wasm\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sqlite.worker.js":
/*!***********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sqlite.worker.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9181ee78cd72b9be8ba3.js\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sqlite.worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;