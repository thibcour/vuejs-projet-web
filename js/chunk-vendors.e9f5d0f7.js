(self["webpackChunkprojet_web"]=self["webpackChunkprojet_web"]||[]).push([[504],{4046:function(e,t,n){"use strict";n.d(t,{$L:function(){return U},$g:function(){return R},A4:function(){return p},Am:function(){return Y},As:function(){return j},Cv:function(){return q},FA:function(){return B},Fy:function(){return C},Hk:function(){return o},I9:function(){return J},Im:function(){return Z},K3:function(){return l},KA:function(){return u},Ku:function(){return le},OE:function(){return ae},T9:function(){return E},Tj:function(){return b},Uj:function(){return h},XA:function(){return T},ZQ:function(){return I},bD:function(){return X},cY:function(){return S},dI:function(){return oe},eX:function(){return L},g:function(){return z},gR:function(){return G},gz:function(){return ee},hp:function(){return Q},jZ:function(){return A},kH:function(){return H},kj:function(){return se},lT:function(){return M},lV:function(){return P},qc:function(){return $},sr:function(){return k},tD:function(){return te},u:function(){return d},vA:function(){return r},yU:function(){return w},yw:function(){return W},zW:function(){return D}});n(4979),n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=e[n++],s=e[n++],a=e[n++],l=((7&r)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],o=r+1<e.length,s=o?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],o=r<e.length,s=o?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==s||null==l||null==h)throw new c;const d=t<<2|s>>4;if(i.push(d),64!==l){const e=s<<4&240|l>>2;if(i.push(e),64!==h){const e=l<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=s(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&m(n)&&(e[n]=f(e[n],t[n]));return e}function m(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=()=>_().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_MAPBOX_ACCESS_TOKEN:"pk.eyJ1IjoidGlibzYxIiwiYSI6ImNsc2ttaWd5NDA0anEya3JuN2F4cWJheDIifQ.8Y7HydMrAImeaYD6xPm_vg",VUE_APP_RAPIDAPI_KEY:"5818b544fbmsh184225c5e112a26p1525a3jsn5a009fd1a04f",BASE_URL:"/vuejs-projet-web/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},x=()=>{try{return g()||y()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=x())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=x())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=x())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function M(){const e=I();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function D(){try{return"object"===typeof indexedDB}catch(e){return!1}}function L(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?F(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`,a=new z(i,s,n);return a}}function F(e,t){return e.replace(N,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return JSON.parse(e)}function j(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=U(d(o[0])||""),n=U(d(o[1])||""),r=o[2],i=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:i,signature:r}},q=function(e){const t=V(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},$=function(e){const t=V(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function X(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(K(n)&&K(o)){if(!X(n,o))return!1}else if(n!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function K(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function J(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^s&(a^l),r=1518500249):(i=s^a^l,r=1859775393):u<60?(i=s&a|l&(s|a),r=2400959708):(i=s^a^l,r=3395469782);const e=(o<<5|o>>>27)+i+c+r+n[u]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;while(i<t){if(0===o)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else while(i<t)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=ie(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=re),void 0===i.error&&(i.error=re),void 0===i.complete&&(i.complete=re);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ie(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ae=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){return e&&e._delegate?e._delegate:e}},8576:function(e,t,n){"use strict";n(4114);var i=n(657),r=n(7691),o="value",s="\n  ",a={};function l(e){var t=Array.isArray(e),n=function(n){return t?e[n]:e};return function(i){var r=c(a.plainArray,i);if(r)return r;if(t&&i.length!==e.length)return"an array with "+e.length+" items";for(var o=0;o<i.length;o++)if(r=c(n(o),i[o]),r)return[o].concat(r)}}function c(e,t){if(null!=t||e.hasOwnProperty("__required")){var n=e(t);return n?Array.isArray(n)?n:[n]:void 0}}function u(e,t){var n=e.length,i=e[n-1],s=e.slice(0,n-1);return 0===s.length&&(s=[o]),t=r(t,{path:s}),"function"===typeof i?i(t):f(t,d(i))}function h(e){return e.length<2?e[0]:2===e.length?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e.slice(-1)}function d(e){return"must be "+p(e)+"."}function p(e){return/^an? /.test(e)?e:/^[aeiou]/i.test(e)?"an "+e:/^[a-z]/i.test(e)?"a "+e:e}function f(e,t){var n=m(e.path),i=e.path.join(".")+" "+t,r=n?"Item at position ":"";return r+i}function m(e){return"number"==typeof e[e.length-1]||"number"==typeof e[0]}function _(e){return Object.keys(e||{}).map((function(t){return{key:t,value:e[t]}}))}a.assert=function(e,t){return t=t||{},function(n){var i=c(e,n);if(i){var r=u(i,t);throw t.apiName&&(r=t.apiName+": "+r),new Error(r)}}},a.shape=function(e){var t=_(e);return function(e){var n,i,r=c(a.plainObject,e);if(r)return r;for(var l=[],h=0;h<t.length;h++)n=t[h].key,i=t[h].value,r=c(i,e[n]),r&&l.push([n].concat(r));return l.length<2?l[0]:function(e){l=l.map((function(t){var n=t[0],i=u(t,e).split("\n").join(s);return"- "+n+": "+i}));var t=e.path.join("."),n=t===o?"":" of "+t;return"The following properties"+n+" have invalid values:"+s+l.join(s)}}},a.strictShape=function(e){var t=a.shape(e);return function(n){var i=t(n);if(i)return i;var r=Object.keys(n).reduce((function(t,n){return void 0===e[n]&&t.push(n),t}),[]);return 0!==r.length?function(){return"The following keys are invalid: "+r.join(", ")}:void 0}},a.arrayOf=function(e){return l(e)},a.tuple=function(){var e=Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments);return l(e)},a.required=function(e){function t(t){return null==t?function(e){return f(e,m(e.path)?"cannot be undefined/null.":"is required.")}:e.apply(this,arguments)}return t.__required=!0,t},a.oneOfType=function(){var e=Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments);return function(t){var n=e.map((function(e){return c(e,t)})).filter(Boolean);if(n.length===e.length)return n.every((function(e){return 1===e.length&&"string"===typeof e[0]}))?h(n.map((function(e){return e[0]}))):n.reduce((function(e,t){return t.length>e.length?t:e}))}},a.equal=function(e){return function(t){if(t!==e)return JSON.stringify(e)}},a.oneOf=function(){var e=Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments),t=e.map((function(e){return a.equal(e)}));return a.oneOfType.apply(this,t)},a.range=function(e){var t=e[0],n=e[1];return function(e){var i=c(a.number,e);if(i||e<t||e>n)return"number between "+t+" & "+n+" (inclusive)"}},a.any=function(){},a.boolean=function(e){if("boolean"!==typeof e)return"boolean"},a.number=function(e){if("number"!==typeof e)return"number"},a.plainArray=function(e){if(!Array.isArray(e))return"array"},a.plainObject=function(e){if(!i(e))return"object"},a.string=function(e){if("string"!==typeof e)return"string"},a.func=function(e){if("function"!==typeof e)return"function"},a.validate=c,a.processMessage=u,e.exports=a},657:function(e){"use strict";var t=Object.prototype.toString;e.exports=function(e){var n;return"[object Object]"===t.call(e)&&(n=Object.getPrototypeOf(e),null===n||n===Object.getPrototypeOf({}))}},8627:function(e,t,n){"use strict";n(4114);var i=n(5588).Ak;function r(e){this.origin=e.origin||"https://api.mapbox.com",this.endpoint="events/v2",this.access_token=e.accessToken,this.version="0.2.0",this.sessionID=this.generateSessionID(),this.userAgent=this.getUserAgent(),this.options=e,this.send=this.send.bind(this),this.countries=e.countries?e.countries.split(","):null,this.types=e.types?e.types.split(","):null,this.bbox=e.bbox?e.bbox:null,this.language=e.language?e.language.split(","):null,this.limit=e.limit?+e.limit:null,this.locale=navigator.language||null,this.enableEventLogging=this.shouldEnableLogging(e),this.eventQueue=new Array,this.flushInterval=e.flushInterval||1e3,this.maxQueueSize=e.maxQueueSize||100,this.timer=this.flushInterval?setTimeout(this.flush.bind(this),this.flushInterval):null,this.lastSentInput="",this.lastSentIndex=0}r.prototype={select:function(e,t){var n=this.getSelectedIndex(e,t),i=this.getEventPayload("search.select",t);if(i.resultIndex=n,i.resultPlaceName=e.place_name,i.resultId=e.id,(n!==this.lastSentIndex||i.queryString!==this.lastSentInput)&&-1!=n&&(this.lastSentIndex=n,this.lastSentInput=i.queryString,i.queryString))return this.push(i)},start:function(e){var t=this.getEventPayload("search.start",e);if(t.queryString)return this.push(t)},keyevent:function(e,t){if(e.key&&!e.metaKey&&-1===[9,27,37,39,13,38,40].indexOf(e.keyCode)){var n=this.getEventPayload("search.keystroke",t);if(n.lastAction=e.key,n.queryString)return this.push(n)}},send:function(e,t){if(!this.enableEventLogging)return t?t():void 0;var n=this.getRequestOptions(e);this.request(n,function(e){return e?this.handleError(e,t):t?t():void 0}.bind(this))},getRequestOptions:function(e){Array.isArray(e)||(e=[e]);var t={method:"POST",host:this.origin,path:this.endpoint+"?access_token="+this.access_token,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return t},getEventPayload:function(e,t){var n;n=t.options.proximity?"object"===typeof t.options.proximity?[t.options.proximity.longitude,t.options.proximity.latitude]:"ip"===t.options.proximity?[999,999]:t.options.proximity:null;var i=t._map?t._map.getZoom():void 0,r={event:e,created:+new Date,sessionIdentifier:this.sessionID,country:this.countries,userAgent:this.userAgent,language:this.language,bbox:this.bbox,types:this.types,endpoint:"mapbox.places",autocomplete:t.options.autocomplete,fuzzyMatch:t.options.fuzzyMatch,proximity:n,limit:t.options.limit,routing:t.options.routing,worldview:t.options.worldview,mapZoom:i,keyboardLocale:this.locale};return"search.select"===e?r.queryString=t.inputString:"search.select"!=e&&t._inputEl?r.queryString=t._inputEl.value:r.queryString=t.inputString,r},request:function(e,t){var n=new XMLHttpRequest;for(var i in n.onreadystatechange=function(){if(4==this.readyState)return 204==this.status?t(null):t(this.statusText)},n.open(e.method,e.host+"/"+e.path,!0),e.headers){var r=e.headers[i];n.setRequestHeader(i,r)}n.send(e.body)},handleError:function(e,t){if(t)return t(e)},generateSessionID:function(){return i()},getUserAgent:function(){return"mapbox-gl-geocoder."+this.version+"."+navigator.userAgent},getSelectedIndex:function(e,t){if(t._typeahead){var n=t._typeahead.data,i=e.id,r=n.map((function(e){return e.id})),o=r.indexOf(i);return o}},shouldEnableLogging:function(e){return!1!==e.enableEventLogging&&((!e.origin||"https://api.mapbox.com"===e.origin)&&(!e.localGeocoder&&!e.filter))},flush:function(){this.eventQueue.length>0&&(this.send(this.eventQueue),this.eventQueue=new Array),this.timer&&clearTimeout(this.timer),this.flushInterval&&(this.timer=setTimeout(this.flush.bind(this),this.flushInterval))},push:function(e,t){this.eventQueue.push(e),(this.eventQueue.length>=this.maxQueueSize||t)&&this.flush()},remove:function(){this.flush()}},e.exports=r},8036:function(e){e.exports={fr:{name:"France",bbox:[[-4.59235,41.380007],[9.560016,51.148506]]},us:{name:"United States",bbox:[[-171.791111,18.91619],[-66.96466,71.357764]]},ru:{name:"Russia",bbox:[[19.66064,41.151416],[190.10042,81.2504]]},ca:{name:"Canada",bbox:[[-140.99778,41.675105],[-52.648099,83.23324]]}}},3250:function(e){function t(){}t.prototype={isSupport:function(){return Boolean(window.navigator.geolocation)},getCurrentPosition:function(){const e={enableHighAccuracy:!0};return new Promise((function(t,n){window.navigator.geolocation.getCurrentPosition(t,n,e)}))}},e.exports=t},8832:function(e,t,n){"use strict";var i=n(7735),r=n(2952),o=n(7691),s=n(9774).EventEmitter,a=n(8036),l=n(7784),c=n(4946),u=n(8627),h=n(2975),d=n(4060),p=n(3250),f=n(6793);const m={FORWARD:0,LOCAL:1,REVERSE:2};function _(){var e=document.createElement("div");return e.className="mapboxgl-ctrl-geocoder--powered-by",e.innerHTML='<a href="https://www.mapbox.com/search-service" target="_blank">Powered by Mapbox</a>',e}function g(e){this._eventEmitter=new s,this.options=o({},this.options,e),this.inputString="",this.fresh=!0,this.lastSelected=null,this.geolocation=new p}g.prototype={options:{zoom:16,flyTo:!0,trackProximity:!0,minLength:2,reverseGeocode:!1,flipCoordinates:!1,limit:5,origin:"https://api.mapbox.com",enableEventLogging:!0,marker:!0,mapboxgl:null,collapsed:!1,clearAndBlurOnEsc:!1,clearOnBlur:!1,enableGeolocation:!1,addressAccuracy:"street",getItemValue:function(e){return e.place_name},render:function(e){var t=e.place_name.split(",");return'<div class="mapboxgl-ctrl-geocoder--suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title">'+t[0]+'</div><div class="mapboxgl-ctrl-geocoder--suggestion-address">'+t.splice(1,t.length).join(",")+"</div></div>"}},addTo:function(e){function t(e,t){if(!document.body.contains(t))throw new Error("Element provided to #addTo() exists, but is not in the DOM");const n=e.onAdd();t.appendChild(n)}if(e._controlContainer)e.addControl(this);else if(e instanceof HTMLElement)t(this,e);else{if("string"!=typeof e)throw new Error("Error: addTo must be a mapbox-gl-js map, an html element, or a CSS selector query for a single html element");{const n=document.querySelectorAll(e);if(0===n.length)throw new Error("Element ",e,"not found.");if(n.length>1)throw new Error("Geocoder can only be added to a single html element");t(this,n[0])}}},onAdd:function(e){if(e&&"string"!=typeof e&&(this._map=e),this.setLanguage(),this.options.localGeocoderOnly||(this.geocoderService=c(l({accessToken:this.options.accessToken,origin:this.options.origin}))),this.options.localGeocoderOnly&&!this.options.localGeocoder)throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");this.eventManager=new u(this.options),this._onChange=this._onChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onPaste=this._onPaste.bind(this),this._onBlur=this._onBlur.bind(this),this._showButton=this._showButton.bind(this),this._hideButton=this._hideButton.bind(this),this._onQueryResult=this._onQueryResult.bind(this),this.clear=this.clear.bind(this),this._updateProximity=this._updateProximity.bind(this),this._collapse=this._collapse.bind(this),this._unCollapse=this._unCollapse.bind(this),this._clear=this._clear.bind(this),this._clearOnBlur=this._clearOnBlur.bind(this),this._geolocateUser=this._geolocateUser.bind(this);var t=this.container=document.createElement("div");t.className="mapboxgl-ctrl-geocoder mapboxgl-ctrl";var n=this.createIcon("search",'<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');this._inputEl=document.createElement("input"),this._inputEl.type="text",this._inputEl.className="mapboxgl-ctrl-geocoder--input",this.setPlaceholder(),this.options.collapsed&&(this._collapse(),this.container.addEventListener("mouseenter",this._unCollapse),this.container.addEventListener("mouseleave",this._collapse),this._inputEl.addEventListener("focus",this._unCollapse)),(this.options.collapsed||this.options.clearOnBlur)&&this._inputEl.addEventListener("blur",this._onBlur),this._inputEl.addEventListener("keydown",r(this._onKeyDown,200)),this._inputEl.addEventListener("paste",this._onPaste),this._inputEl.addEventListener("change",this._onChange),this.container.addEventListener("mouseenter",this._showButton),this.container.addEventListener("mouseleave",this._hideButton),this._inputEl.addEventListener("keyup",function(e){this.eventManager.keyevent(e,this)}.bind(this));var o=document.createElement("div");o.classList.add("mapboxgl-ctrl-geocoder--pin-right"),this._clearEl=document.createElement("button"),this._clearEl.setAttribute("aria-label","Clear"),this._clearEl.addEventListener("click",this.clear),this._clearEl.className="mapboxgl-ctrl-geocoder--button";var s=this.createIcon("close",'<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');if(this._clearEl.appendChild(s),this._loadingEl=this.createIcon("loading",'<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'),o.appendChild(this._clearEl),o.appendChild(this._loadingEl),t.appendChild(n),t.appendChild(this._inputEl),t.appendChild(o),this.options.enableGeolocation&&this.geolocation.isSupport()){this._geolocateEl=document.createElement("button"),this._geolocateEl.setAttribute("aria-label","Geolocate"),this._geolocateEl.addEventListener("click",this._geolocateUser),this._geolocateEl.className="mapboxgl-ctrl-geocoder--button";var a=this.createIcon("geolocate",'<path d="M12.999 3.677L2.042 8.269c-.962.403-.747 1.823.29 1.912l5.032.431.431 5.033c.089 1.037 1.509 1.252 1.912.29l4.592-10.957c.345-.822-.477-1.644-1.299-1.299z" fill="#4264fb"/>');this._geolocateEl.appendChild(a),o.appendChild(this._geolocateEl),this._showGeolocateButton()}var h=this._typeahead=new i(this._inputEl,[],{filter:!1,minLength:this.options.minLength,limit:this.options.limit});this.setRenderFunction(this.options.render),h.getItemValue=this.options.getItemValue;var d=h.list.draw,p=this._footerNode=_();return h.list.draw=function(){d.call(this),p.addEventListener("mousedown",function(){this.selectingListItem=!0}.bind(this)),p.addEventListener("mouseup",function(){this.selectingListItem=!1}.bind(this)),this.element.appendChild(p)},this.mapMarker=null,this._handleMarker=this._handleMarker.bind(this),this._map&&(this.options.trackProximity&&(this._updateProximity(),this._map.on("moveend",this._updateProximity)),this._mapboxgl=this.options.mapboxgl,!this._mapboxgl&&this.options.marker&&(console.error("No mapboxgl detected in options. Map markers are disabled. Please set options.mapboxgl."),this.options.marker=!1)),t},_geolocateUser:function(){this._hideGeolocateButton(),this._showLoadingIcon(),this.geolocation.getCurrentPosition().then(function(e){this._hideLoadingIcon();const t={geometry:{type:"Point",coordinates:[e.coords.longitude,e.coords.latitude]}};this._handleMarker(t),this._fly(t),this._typeahead.clear(),this._typeahead.selected=!0,this.lastSelected=JSON.stringify(t),this._showClearButton(),this.fresh=!1;const n={limit:1,language:[this.options.language],query:t.geometry.coordinates,types:["address"]};if(this.options.localGeocoderOnly){const e=t.geometry.coordinates[0]+","+t.geometry.coordinates[1];this._setInputValue(e),this._eventEmitter.emit("result",{result:t})}else this.geocoderService.reverseGeocode(n).send().then(function(e){const n=e.body.features[0];if(n){const e=f.transformFeatureToGeolocationText(n,this.options.addressAccuracy);this._setInputValue(e),n.user_coordinates=t.geometry.coordinates,this._eventEmitter.emit("result",{result:n})}else this._eventEmitter.emit("result",{result:{user_coordinates:t.geometry.coordinates}})}.bind(this))}.bind(this)).catch(function(e){1===e.code?this._renderUserDeniedGeolocationError():this._renderLocationError(),this._hideLoadingIcon(),this._showGeolocateButton(),this._hideAttribution()}.bind(this))},createIcon:function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("class","mapboxgl-ctrl-geocoder--icon mapboxgl-ctrl-geocoder--icon-"+e),n.setAttribute("viewBox","0 0 18 18"),n.setAttribute("xml:space","preserve"),n.setAttribute("width",18),n.setAttribute("height",18),n.innerHTML=t,n},onRemove:function(){return this.container.parentNode.removeChild(this.container),this.options.trackProximity&&this._map&&this._map.off("moveend",this._updateProximity),this._removeMarker(),this._map=null,this},_setInputValue:function(e){this._inputEl.value=e,setTimeout(function(){this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0)}.bind(this),1)},_onPaste:function(e){var t=(e.clipboardData||window.clipboardData).getData("text");t.length>=this.options.minLength&&this._geocode(t)},_onKeyDown:function(e){var t=27,n=9;if(e.keyCode===t&&this.options.clearAndBlurOnEsc)return this._clear(e),this._inputEl.blur();var i=e.target&&e.target.shadowRoot?e.target.shadowRoot.activeElement:e.target,r=i?i.value:"";if(!r)return this.fresh=!0,e.keyCode!==n&&this.clear(e),this._showGeolocateButton(),this._hideClearButton();this._hideGeolocateButton(),e.metaKey||-1!==[n,t,37,39,13,38,40].indexOf(e.keyCode)||i.value.length>=this.options.minLength&&this._geocode(i.value)},_showButton:function(){this._typeahead.selected&&this._showClearButton()},_hideButton:function(){this._typeahead.selected&&this._hideClearButton()},_showClearButton:function(){this._clearEl.style.display="block"},_hideClearButton:function(){this._clearEl.style.display="none"},_showGeolocateButton:function(){this._geolocateEl&&this.geolocation.isSupport()&&(this._geolocateEl.style.display="block")},_hideGeolocateButton:function(){this._geolocateEl&&(this._geolocateEl.style.display="none")},_showLoadingIcon:function(){this._loadingEl.style.display="block"},_hideLoadingIcon:function(){this._loadingEl.style.display="none"},_showAttribution:function(){this._footerNode.style.display="block"},_hideAttribution:function(){this._footerNode.style.display="none"},_onBlur:function(e){this.options.clearOnBlur&&this._clearOnBlur(e),this.options.collapsed&&this._collapse()},_onChange:function(){var e=this._typeahead.selected;e&&JSON.stringify(e)!==this.lastSelected&&(this._hideClearButton(),this.options.flyTo&&this._fly(e),this.options.marker&&this._mapboxgl&&this._handleMarker(e),this._inputEl.focus(),this._inputEl.scrollLeft=0,this._inputEl.setSelectionRange(0,0),this.lastSelected=JSON.stringify(e),this._eventEmitter.emit("result",{result:e}),this.eventManager.select(e,this))},_fly:function(e){var t;if(e.properties&&a[e.properties.short_code])t=o({},this.options.flyTo),this._map&&this._map.fitBounds(a[e.properties.short_code].bbox,t);else if(e.bbox){var n=e.bbox;t=o({},this.options.flyTo),this._map&&this._map.fitBounds([[n[0],n[1]],[n[2],n[3]]],t)}else{var i={zoom:this.options.zoom};t=o({},i,this.options.flyTo),e.center?t.center=e.center:e.geometry&&e.geometry.type&&"Point"===e.geometry.type&&e.geometry.coordinates&&(t.center=e.geometry.coordinates),this._map&&this._map.flyTo(t)}},_requestType:function(e,t){var n;return n=e.localGeocoderOnly?m.LOCAL:e.reverseGeocode&&f.REVERSE_GEOCODE_COORD_RGX.test(t)?m.REVERSE:m.FORWARD,n},_setupConfig:function(e,t){const n=["bbox","limit","proximity","countries","types","language","reverseMode","mode","autocomplete","fuzzyMatch","routing","worldview"],i=/[\s,]+/;var r=this,s=n.reduce((function(e,t){if(void 0===r.options[t]||null===r.options[t])return e;["countries","types","language"].indexOf(t)>-1?e[t]=r.options[t].split(i):e[t]=r.options[t];const n="number"===typeof r.options[t].longitude&&"number"===typeof r.options[t].latitude;if("proximity"===t&&n){const n=r.options[t].longitude,i=r.options[t].latitude;e[t]=[n,i]}return e}),{});switch(e){case m.REVERSE:var a=t.split(i).map((function(e){return parseFloat(e,10)}));r.options.flipCoordinates||a.reverse(),!s.types||s.types[0],s=o(s,{query:a,limit:1}),["proximity","autocomplete","fuzzyMatch","bbox"].forEach((function(e){e in s&&delete s[e]}));break;case m.FORWARD:{const e=t.trim(),n=/^(-?\d{1,3}(\.\d{0,256})?)[, ]+(-?\d{1,3}(\.\d{0,256})?)?$/;n.test(e)&&(t=t.replace(/,/g," ")),s=o(s,{query:t})}break}return s},_geocode:function(e){this.inputString=e,this._showLoadingIcon(),this._eventEmitter.emit("loading",{query:e});const t=this._requestType(this.options,e),n=this._setupConfig(t,e);var i;switch(t){case m.LOCAL:i=Promise.resolve();break;case m.FORWARD:i=this.geocoderService.forwardGeocode(n).send();break;case m.REVERSE:i=this.geocoderService.reverseGeocode(n).send();break}var r=this.options.localGeocoder&&this.options.localGeocoder(e)||[],o=[],s=null;return i.catch(function(e){s=e}.bind(this)).then(function(t){this._hideLoadingIcon();var i={};return t?"200"==t.statusCode&&(i=t.body,i.request=t.request,i.headers=t.headers):i={type:"FeatureCollection",features:[]},i.config=n,this.fresh&&(this.eventManager.start(this),this.fresh=!1),i.features=i.features?r.concat(i.features):r,this.options.externalGeocoder?(o=this.options.externalGeocoder(e,i.features)||Promise.resolve([]),o.then((function(e){return i.features=i.features?e.concat(i.features):e,i}),(function(){return i}))):i}.bind(this)).then(function(e){if(s)throw s;this.options.filter&&e.features.length&&(e.features=e.features.filter(this.options.filter)),e.features.length?(this._showClearButton(),this._hideGeolocateButton(),this._showAttribution(),this._eventEmitter.emit("results",e),this._typeahead.update(e.features)):(this._hideClearButton(),this._hideAttribution(),this._typeahead.selected=null,this._renderNoResults(),this._eventEmitter.emit("results",e))}.bind(this)).catch(function(e){this._hideLoadingIcon(),this._hideAttribution(),r.length&&this.options.localGeocoder||o.length&&this.options.externalGeocoder?(this._showClearButton(),this._hideGeolocateButton(),this._typeahead.update(r)):(this._hideClearButton(),this._typeahead.selected=null,this._renderError()),this._eventEmitter.emit("results",{features:r}),this._eventEmitter.emit("error",{error:e})}.bind(this)),i},_clear:function(e){e&&e.preventDefault(),this._inputEl.value="",this._typeahead.selected=null,this._typeahead.clear(),this._onChange(),this._hideClearButton(),this._showGeolocateButton(),this._removeMarker(),this.lastSelected=null,this._eventEmitter.emit("clear"),this.fresh=!0},clear:function(e){this._clear(e),this._inputEl.focus()},_clearOnBlur:function(e){var t=this;e.relatedTarget&&t._clear(e)},_onQueryResult:function(e){var t=e.body;if(t.features.length){var n=t.features[0];this._typeahead.selected=n,this._inputEl.value=n.place_name,this._onChange()}},_updateProximity:function(){if(this._map&&this.options.trackProximity)if(this._map.getZoom()>9){var e=this._map.getCenter().wrap();this.setProximity({longitude:e.lng,latitude:e.lat},!1)}else this.setProximity(null,!1)},_collapse:function(){this._inputEl.value||this._inputEl===document.activeElement||this.container.classList.add("mapboxgl-ctrl-geocoder--collapsed")},_unCollapse:function(){this.container.classList.remove("mapboxgl-ctrl-geocoder--collapsed")},query:function(e){return this._geocode(e).then(this._onQueryResult),this},_renderError:function(){var e="<div class='mapbox-gl-geocoder--error'>There was an error reaching the server</div>";this._renderMessage(e)},_renderLocationError:function(){var e="<div class='mapbox-gl-geocoder--error'>A location error has occurred</div>";this._renderMessage(e)},_renderNoResults:function(){var e="<div class='mapbox-gl-geocoder--error mapbox-gl-geocoder--no-results'>No results found</div>";this._renderMessage(e)},_renderUserDeniedGeolocationError:function(){var e="<div class='mapbox-gl-geocoder--error'>Geolocation permission denied</div>";this._renderMessage(e)},_renderMessage:function(e){this._typeahead.update([]),this._typeahead.selected=null,this._typeahead.clear(),this._typeahead.renderError(e)},_getPlaceholderText:function(){if(this.options.placeholder)return this.options.placeholder;if(this.options.language){var e=this.options.language.split(",")[0],t=d.language(e),n=h.placeholder[t];if(n)return n}return"Search"},setInput:function(e,t){return void 0===t&&(t=!1),this._inputEl.value=e,this._typeahead.selected=null,this._typeahead.clear(),e.length>=this.options.minLength&&(t?this._geocode(e):this._onChange()),this},setProximity:function(e,t=!0){return this.options.proximity=e,t&&(this.options.trackProximity=!1),this},getProximity:function(){return this.options.proximity},setRenderFunction:function(e){return e&&"function"==typeof e&&(this._typeahead.render=e),this},getRenderFunction:function(){return this._typeahead.render},setLanguage:function(e){var t=navigator.language||navigator.userLanguage||navigator.browserLanguage;return this.options.language=e||this.options.language||t,this},getLanguage:function(){return this.options.language},getZoom:function(){return this.options.zoom},setZoom:function(e){return this.options.zoom=e,this},getFlyTo:function(){return this.options.flyTo},setFlyTo:function(e){return this.options.flyTo=e,this},getPlaceholder:function(){return this.options.placeholder},setPlaceholder:function(e){return this.options.placeholder=e||this._getPlaceholderText(),this._inputEl.placeholder=this.options.placeholder,this._inputEl.setAttribute("aria-label",this.options.placeholder),this},getBbox:function(){return this.options.bbox},setBbox:function(e){return this.options.bbox=e,this},getCountries:function(){return this.options.countries},setCountries:function(e){return this.options.countries=e,this},getTypes:function(){return this.options.types},setTypes:function(e){return this.options.types=e,this},getMinLength:function(){return this.options.minLength},setMinLength:function(e){return this.options.minLength=e,this._typeahead&&(this._typeahead.options.minLength=e),this},getLimit:function(){return this.options.limit},setLimit:function(e){return this.options.limit=e,this._typeahead&&(this._typeahead.options.limit=e),this},getFilter:function(){return this.options.filter},setFilter:function(e){return this.options.filter=e,this},setOrigin:function(e){return this.options.origin=e,this.geocoderService=c(l({accessToken:this.options.accessToken,origin:this.options.origin})),this},getOrigin:function(){return this.options.origin},setAccessToken:function(e){return this.options.accessToken=e,this.geocoderService=c(l({accessToken:this.options.accessToken,origin:this.options.origin})),this},setAutocomplete:function(e){return this.options.autocomplete=e,this},getAutocomplete:function(){return this.options.autocomplete},setFuzzyMatch:function(e){return this.options.fuzzyMatch=e,this},getFuzzyMatch:function(){return this.options.fuzzyMatch},setRouting:function(e){return this.options.routing=e,this},getRouting:function(){return this.options.routing},setWorldview:function(e){return this.options.worldview=e,this},getWorldview:function(){return this.options.worldview},_handleMarker:function(e){if(this._map){this._removeMarker();var t={color:"#4668F2"},n=o({},t,this.options.marker);return this.mapMarker=new this._mapboxgl.Marker(n),e.center?this.mapMarker.setLngLat(e.center).addTo(this._map):e.geometry&&e.geometry.type&&"Point"===e.geometry.type&&e.geometry.coordinates&&this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map),this}},_removeMarker:function(){this.mapMarker&&(this.mapMarker.remove(),this.mapMarker=null)},on:function(e,t){return this._eventEmitter.on(e,t),this},off:function(e,t){return this._eventEmitter.removeListener(e,t),this.eventManager.remove(),this}},e.exports=g},2975:function(e){"use strict";var t={de:"Suche",it:"Ricerca",en:"Search",nl:"Zoeken",fr:"Chercher",ca:"Cerca",he:"לחפש",ja:"サーチ",lv:"Meklēt",pt:"Procurar",sr:"Претрага",zh:"搜索",cs:"Vyhledávání",hu:"Keresés",ka:"ძიება",nb:"Søke",sk:"Vyhľadávanie",th:"ค้นหา",fi:"Hae",is:"Leita",ko:"수색",pl:"Szukaj",sl:"Iskanje",fa:"جستجو",ru:"Поиск"};e.exports={placeholder:t}},6793:function(e){function t(e,t){const i=n(e),r=["address","street","place","country"];var o;if("function"===typeof t)return t(i);const s=r.indexOf(t);return o=-1===s?r:r.slice(s),o.reduce((function(e,t){return i[t]?(""!==e&&(e+=", "),e+i[t]):e}),"")}function n(e){const t=e.address||"",n=e.text||"",i=e.place_name||"",r=i.split(",")[0],o={address:r,houseNumber:t,street:n,placeName:i};return e.context.forEach((function(e){const t=e.id.split(".")[0];o[t]=e.text})),o}const i=/^[ ]*(-?\d{1,3}(\.\d{0,256})?)[, ]+(-?\d{1,3}(\.\d{0,256})?)[ ]*$/;e.exports={transformFeatureToGeolocationText:t,getAddressInfo:n,REVERSE_GEOCODE_COORD_RGX:i}},7784:function(e,t,n){"use strict";var i=n(5939);e.exports=i},5939:function(e,t,n){"use strict";var i=n(595),r=n(1240);function o(e){r.call(this,e)}function s(e){return new o(e)}o.prototype=Object.create(r.prototype),o.prototype.constructor=o,o.prototype.sendRequest=i.browserSend,o.prototype.abortRequest=i.browserAbort,e.exports=s},595:function(e,t,n){"use strict";var i=n(4872),r=n(9437),o=n(3673),s=n(6222),a={};function l(e){var t=a[e.id];t&&(t.abort(),delete a[e.id])}function c(e,t){return new i(e,{body:t.response,headers:s(t.getAllResponseHeaders()),statusCode:t.status})}function u(e){var t=e.total,n=e.loaded,i=100*n/t;return{total:t,transferred:n,percent:i}}function h(e,t){return new Promise((function(n,i){t.onprogress=function(t){e.emitter.emit(o.EVENT_PROGRESS_DOWNLOAD,u(t))};var s=e.file;s&&(t.upload.onprogress=function(t){e.emitter.emit(o.EVENT_PROGRESS_UPLOAD,u(t))}),t.onerror=function(e){i(e)},t.onabort=function(){var t=new r({request:e,type:o.ERROR_REQUEST_ABORTED});i(t)},t.onload=function(){if(delete a[e.id],t.status<200||t.status>=400){var o=new r({request:e,body:t.response,statusCode:t.status});i(o)}else n(t)};var l=e.body;"string"===typeof l?t.send(l):l?t.send(JSON.stringify(l)):s?t.send(s):t.send(),a[e.id]=t})).then((function(t){return c(e,t)}))}function d(e,t){var n=e.url(t),i=new window.XMLHttpRequest;return i.open(e.method,n),Object.keys(e.headers).forEach((function(t){i.setRequestHeader(t,e.headers[t])})),i}function p(e){return Promise.resolve().then((function(){var t=d(e,e.client.accessToken);return h(e,t)}))}e.exports={browserAbort:l,sendRequestXhr:h,browserSend:p,createRequestXhr:d}},1240:function(e,t,n){"use strict";var i=n(4311),r=n(5558),o=n(3673);function s(e){if(!e||!e.accessToken)throw new Error("Cannot create a client without an access token");i(e.accessToken),this.accessToken=e.accessToken,this.origin=e.origin||o.API_ORIGIN}s.prototype.createRequest=function(e){return new r(this,e)},e.exports=s},9437:function(e,t,n){"use strict";var i=n(3673);function r(e){var t,n=e.type||i.ERROR_HTTP;if(e.body)try{t=JSON.parse(e.body)}catch(o){t=e.body}else t=null;var r=e.message||null;r||("string"===typeof t?r=t:t&&"string"===typeof t.message?r=t.message:n===i.ERROR_REQUEST_ABORTED&&(r="Request aborted")),this.message=r,this.type=n,this.statusCode=e.statusCode||null,this.request=e.request,this.body=t}e.exports=r},5558:function(e,t,n){"use strict";var i=n(4311),r=n(7691),o=n(431),s=n(4763),a=n(3673),l=1;function c(e,t){if(!e)throw new Error("MapiRequest requires a client");if(!t||!t.path||!t.method)throw new Error("MapiRequest requires an options object with path and method properties");var n={};t.body&&(n["content-type"]="application/json");var i=r(n,t.headers),s=Object.keys(i).reduce((function(e,t){return e[t.toLowerCase()]=i[t],e}),{});this.id=l++,this._options=t,this.emitter=new o,this.client=e,this.response=null,this.error=null,this.sent=!1,this.aborted=!1,this.path=t.path,this.method=t.method,this.origin=t.origin||e.origin,this.query=t.query||{},this.params=t.params||{},this.body=t.body||null,this.file=t.file||null,this.encoding=t.encoding||"utf8",this.sendFileAs=t.sendFileAs||null,this.headers=s}c.prototype.url=function(e){var t=s.prependOrigin(this.path,this.origin);t=s.appendQueryObject(t,this.query);var n=this.params,o=null==e?this.client.accessToken:e;if(o){t=s.appendQueryParam(t,"access_token",o);var a=i(o).user;n=r({ownerId:a},n)}return t=s.interpolateRouteParams(t,n),t},c.prototype.send=function(){var e=this;if(e.sent)throw new Error("This request has already been sent. Check the response and error properties. Create a new request with clone().");return e.sent=!0,e.client.sendRequest(e).then((function(t){return e.response=t,e.emitter.emit(a.EVENT_RESPONSE,t),t}),(function(t){throw e.error=t,e.emitter.emit(a.EVENT_ERROR,t),t}))},c.prototype.abort=function(){this._nextPageRequest&&(this._nextPageRequest.abort(),delete this._nextPageRequest),this.response||this.error||this.aborted||(this.aborted=!0,this.client.abortRequest(this))},c.prototype.eachPage=function(e){var t=this;function n(n){function i(){delete t._nextPageRequest;var e=n.nextPage();e&&(t._nextPageRequest=e,r(e))}e(null,n,i)}function i(t){e(t,null,(function(){}))}function r(e){e.send().then(n,i)}r(this)},c.prototype.clone=function(){return this._extend()},c.prototype._extend=function(e){var t=r(this._options,e);return new c(this.client,t)},e.exports=c},4872:function(e,t,n){"use strict";var i=n(8270);function r(e,t){this.request=e,this.headers=t.headers,this.rawBody=t.body,this.statusCode=t.statusCode;try{this.body=JSON.parse(t.body||"{}")}catch(n){this.body=t.body}this.links=i(this.headers.link)}r.prototype.hasNextPage=function(){return!!this.links.next},r.prototype.nextPage=function(){return this.hasNextPage()?this.request._extend({path:this.links.next.url}):null},e.exports=r},3673:function(e){"use strict";e.exports={API_ORIGIN:"https://api.mapbox.com",EVENT_PROGRESS_DOWNLOAD:"downloadProgress",EVENT_PROGRESS_UPLOAD:"uploadProgress",EVENT_ERROR:"error",EVENT_RESPONSE:"response",ERROR_HTTP:"HttpError",ERROR_REQUEST_ABORTED:"RequestAbortedError"}},6222:function(e){"use strict";function t(e){var t=e.indexOf(":"),n=e.substring(0,t).trim().toLowerCase(),i=e.substring(t+1).trim();return{name:n,value:i}}function n(e){var n={};return e?(e.trim().split(/[\r|\n]+/).forEach((function(e){var i=t(e);n[i.name]=i.value})),n):n}e.exports=n},8270:function(e){"use strict";function t(e){var t=e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);return t?{key:t[1],value:t[2]}:null}function n(e){var n=e.match(/<?([^>]*)>(.*)/);if(!n)return null;var i=n[1],r=n[2].split(";"),o=null,s=r.reduce((function(e,n){var i=t(n);return i?"rel"===i.key?(o||(o=i.value),e):(e[i.key]=i.value,e):e}),{});return o?{url:i,rel:o,params:s}:null}function i(e){return e?e.split(/,\s*</).reduce((function(e,t){var i=n(t);if(!i)return e;var r=i.rel.split(/\s+/);return r.forEach((function(t){e[t]||(e[t]={url:i.url,params:i.params})})),e}),{}):{}}e.exports=i},4763:function(e){"use strict";function t(e){return e.map(encodeURIComponent).join(",")}function n(e){return Array.isArray(e)?t(e):encodeURIComponent(String(e))}function i(e,t,i){if(!1===i||null===i)return e;var r=/\?/.test(e)?"&":"?",o=encodeURIComponent(t);return void 0!==i&&""!==i&&!0!==i&&(o+="="+n(i)),""+e+r+o}function r(e,t){if(!t)return e;var n=e;return Object.keys(t).forEach((function(e){var r=t[e];void 0!==r&&(Array.isArray(r)&&(r=r.filter((function(e){return null!==e&&void 0!==e})).join(",")),n=i(n,e,r))})),n}function o(e,t){if(!t)return e;if("http"===e.slice(0,4))return e;var n="/"===e[0]?"":"/";return""+t.replace(/\/$/,"")+n+e}function s(e,t){return t?e.replace(/\/:([a-zA-Z0-9]+)/g,(function(e,i){var r=t[i];if(void 0===r)throw new Error("Unspecified route parameter "+i);var o=n(r);return"/"+o})):e}e.exports={appendQueryObject:r,appendQueryParam:i,prependOrigin:o,interpolateRouteParams:s}},431:function(e,t,n){"use strict";n(4114);var i=Object.prototype.hasOwnProperty,r="~";function o(){}function s(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,i,o){if("function"!==typeof n)throw new TypeError("The listener must be a function");var a=new s(n,i||e,o),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],a]:e._events[l].push(a):(e._events[l]=a,e._eventsCount++),e}function l(e,t){0===--e._eventsCount?e._events=new o:delete e._events[t]}function c(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(r=!1)),c.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)i.call(e,t)&&n.push(r?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,o,s){var a=r?r+e:e;if(!this._events[a])return!1;var l,c,u=this._events[a],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,o),!0;case 6:return u.fn.call(u.context,t,n,i,o,s),!0}for(c=1,l=new Array(h-1);c<h;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var d,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),h){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(d=1,l=new Array(h-1);d<h;d++)l[d-1]=arguments[d];u[c].fn.apply(u[c].context,l)}}return!0},c.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return l(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||l(this,o);else{for(var a=0,c=[],u=s.length;a<u;a++)(s[a].fn!==t||i&&!s[a].once||n&&s[a].context!==n)&&c.push(s[a]);c.length?this._events[o]=1===c.length?c[0]:c:l(this,o)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&l(this,t)):(this._events=new o,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,e.exports=c},4946:function(e,t,n){"use strict";var i=n(7691),r=n(4607),o=n(9872),s=n(3400),a=n(9640),l={},c=["country","region","postcode","district","place","locality","neighborhood","address","poi","poi.landmark"];l.forwardGeocode=function(e){r.assertShape({query:r.required(r.string),mode:r.oneOf("mapbox.places","mapbox.places-permanent"),countries:r.arrayOf(r.string),proximity:r.oneOf(r.coordinates,"ip"),types:r.arrayOf(r.oneOf(c)),autocomplete:r.boolean,bbox:r.arrayOf(r.number),limit:r.number,language:r.arrayOf(r.string),routing:r.boolean,fuzzyMatch:r.boolean,worldview:r.string})(e),e.mode=e.mode||"mapbox.places";var t=s(i({country:e.countries},o(e,["proximity","types","autocomplete","bbox","limit","language","routing","fuzzyMatch","worldview"])));return this.client.createRequest({method:"GET",path:"/geocoding/v5/:mode/:query.json",params:o(e,["mode","query"]),query:t})},l.reverseGeocode=function(e){r.assertShape({query:r.required(r.coordinates),mode:r.oneOf("mapbox.places","mapbox.places-permanent"),countries:r.arrayOf(r.string),types:r.arrayOf(r.oneOf(c)),bbox:r.arrayOf(r.number),limit:r.number,language:r.arrayOf(r.string),reverseMode:r.oneOf("distance","score"),routing:r.boolean,worldview:r.string})(e),e.mode=e.mode||"mapbox.places";var t=s(i({country:e.countries},o(e,["country","types","bbox","limit","language","reverseMode","routing","worldview"])));return this.client.createRequest({method:"GET",path:"/geocoding/v5/:mode/:query.json",params:o(e,["mode","query"]),query:t})},e.exports=a(l)},9640:function(e,t,n){"use strict";var i=n(1240),r=n(5939);function o(e){return function(t){var n;n=i.prototype.isPrototypeOf(t)?t:r(t);var o=Object.create(e);return o.client=n,o}}e.exports=o},5013:function(e){"use strict";function t(e,t){return Object.keys(e).reduce((function(n,i){return n[i]=t(i,e[i]),n}),{})}e.exports=t},9872:function(e){"use strict";function t(e,t){var n=function(e,n){return-1!==t.indexOf(e)&&void 0!==n};return"function"===typeof t&&(n=t),Object.keys(e).filter((function(t){return n(t,e[t])})).reduce((function(t,n){return t[n]=e[n],t}),{})}e.exports=t},3400:function(e,t,n){"use strict";var i=n(5013);function r(e){return i(e,(function(e,t){return"boolean"===typeof t?JSON.stringify(t):t}))}e.exports=r},4607:function(e,t,n){"use strict";var i=n(7691),r=n(8576);function o(e){if("undefined"!==typeof window){if(e instanceof n.g.Blob||e instanceof n.g.ArrayBuffer)return;return"Blob or ArrayBuffer"}if("string"!==typeof e&&void 0===e.pipe)return"Filename or Readable stream"}function s(e,t){return r.assert(r.strictShape(e),t)}function a(e){var t="date";if("boolean"===typeof e)return t;try{var n=new Date(e);if(n.getTime&&isNaN(n.getTime()))return t}catch(i){return t}}function l(e){return r.tuple(r.number,r.number)(e)}e.exports=i(r,{file:o,date:a,coordinates:l,assertShape:s})},4311:function(e,t,n){"use strict";var i=n(8349),r={};function o(e){if(r[e])return r[e];var t=e.split("."),n=t[0],i=t[1];if(!i)throw new Error("Invalid token");var o=s(i),l={usage:n,user:o.u};return a(o,"a")&&(l.authorization=o.a),a(o,"exp")&&(l.expires=1e3*o.exp),a(o,"iat")&&(l.created=1e3*o.iat),a(o,"scopes")&&(l.scopes=o.scopes),a(o,"client")&&(l.client=o.client),a(o,"ll")&&(l.lastLogin=o.ll),a(o,"iu")&&(l.impersonator=o.iu),r[e]=l,l}function s(e){try{return JSON.parse(i.decode(e))}catch(t){throw new Error("Invalid token")}}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=o},144:function(e,t,n){"use strict";n.d(t,{C4:function(){return y},EW:function(){return ke},Gc:function(){return ge},IG:function(){return Se},IJ:function(){return Le},KR:function(){return De},Kh:function(){return _e},Pr:function(){return Ne},R1:function(){return Be},X2:function(){return u},bl:function(){return v},fE:function(){return we},g8:function(){return xe},hZ:function(){return M},i9:function(){return Re},ju:function(){return Ee},o5:function(){return c},u4:function(){return P},uY:function(){return a},ux:function(){return Te},yC:function(){return s}});n(4114);var i=n(4232);let r,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new s(e)}function l(e,t=r){t&&t.active&&t.effects.push(e)}function c(){return r}class u{constructor(e,t,n,i){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,l(this,i)}get dirty(){if(1===this._dirtyLevel){y();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(h(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=m,t=o;try{return m=!0,o=this,this._runnings++,d(this),this.fn()}finally{p(this),this._runnings--,o=t,m=e}}stop(){var e;this.active&&(d(this),p(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function h(e){return e.value}function d(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let m=!0,_=0;const g=[];function y(){g.push(m),m=!1}function v(){const e=g.pop();m=void 0===e||e}function x(){_++}function b(){_--;while(!_&&E.length)E.shift()()}function w(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&f(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const E=[];function T(e,t,n){x();for(const i of e.keys())if(i._dirtyLevel<t&&e.get(i)===i._trackId){const e=i._dirtyLevel;i._dirtyLevel=t,0===e&&(i._shouldSchedule=!0,i.trigger())}S(e),b()}function S(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,E.push(t.scheduler))}const C=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},I=new WeakMap,A=Symbol(""),k=Symbol("");function P(e,t,n){if(m&&o){let t=I.get(e);t||I.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=C((()=>t.delete(n)))),w(o,i,void 0)}}function M(e,t,n,r,o,s){const a=I.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,i.cy)(e)){const e=Number(r);a.forEach(((t,n)=>{("length"===n||!(0,i.Bm)(n)&&n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,i.cy)(e)?(0,i.yI)(n)&&l.push(a.get("length")):(l.push(a.get(A)),(0,i.CE)(e)&&l.push(a.get(k)));break;case"delete":(0,i.cy)(e)||(l.push(a.get(A)),(0,i.CE)(e)&&l.push(a.get(k)));break;case"set":(0,i.CE)(e)&&l.push(a.get(A));break}x();for(const i of l)i&&T(i,2,void 0);b()}const R=(0,i.pD)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.Bm)),L=O();function O(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Te(this);for(let t=0,r=this.length;t<r;t++)P(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Te)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){y(),x();const n=Te(this)[t].apply(this,e);return b(),v(),n}})),e}function z(e){const t=Te(this);return P(t,"has",e),t.hasOwnProperty(e)}class B{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const r=this._isReadonly,o=this._shallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(r?o?pe:de:o?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,i.cy)(e);if(!r){if(s&&(0,i.$3)(L,t))return Reflect.get(L,t,n);if("hasOwnProperty"===t)return z}const a=Reflect.get(e,t,n);return((0,i.Bm)(t)?D.has(t):R(t))?a:(r||P(e,"get",t),o?a:Re(a)?s&&(0,i.yI)(t)?a:a.value:(0,i.Gv)(a)?r?ye(a):_e(a):a)}}class F extends B{constructor(e=!1){super(!1,e)}set(e,t,n,r){let o=e[t];if(!this._shallow){const t=be(o);if(we(n)||be(n)||(o=Te(o),n=Te(n)),!(0,i.cy)(e)&&Re(o)&&!Re(n))return!t&&(o.value=n,!0)}const s=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,r);return e===Te(r)&&(s?(0,i.$H)(n,o)&&M(e,"set",t,n,o):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&M(e,"delete",t,void 0,r),o}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&D.has(t)||P(e,"has",t),n}ownKeys(e){return P(e,"iterate",(0,i.cy)(e)?"length":A),Reflect.ownKeys(e)}}class N extends B{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const U=new F,j=new N,V=new F(!0),q=e=>e,$=e=>Reflect.getPrototypeOf(e);function G(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Te(e),s=Te(t);n||((0,i.$H)(t,s)&&P(o,"get",t),P(o,"get",s));const{has:a}=$(o),l=r?q:n?Ie:Ce;return a.call(o,t)?l(e.get(t)):a.call(o,s)?l(e.get(s)):void(e!==o&&e.get(t))}function W(e,t=!1){const n=this["__v_raw"],r=Te(n),o=Te(e);return t||((0,i.$H)(e,o)&&P(r,"has",e),P(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Z(e,t=!1){return e=e["__v_raw"],!t&&P(Te(e),"iterate",A),Reflect.get(e,"size",e)}function H(e){e=Te(e);const t=Te(this),n=$(t),i=n.has.call(t,e);return i||(t.add(e),M(t,"add",e,e)),this}function X(e,t){t=Te(t);const n=Te(this),{has:r,get:o}=$(n);let s=r.call(n,e);s||(e=Te(e),s=r.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,i.$H)(t,a)&&M(n,"set",e,t,a):M(n,"add",e,t),this}function K(e){const t=Te(this),{has:n,get:i}=$(t);let r=n.call(t,e);r||(e=Te(e),r=n.call(t,e));const o=i?i.call(t,e):void 0,s=t.delete(e);return r&&M(t,"delete",e,void 0,o),s}function Y(){const e=Te(this),t=0!==e.size,n=void 0,i=e.clear();return t&&M(e,"clear",void 0,void 0,n),i}function J(e,t){return function(n,i){const r=this,o=r["__v_raw"],s=Te(o),a=t?q:e?Ie:Ce;return!e&&P(s,"iterate",A),o.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function Q(e,t,n){return function(...r){const o=this["__v_raw"],s=Te(o),a=(0,i.CE)(s),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=o[e](...r),h=n?q:t?Ie:Ce;return!t&&P(s,"iterate",c?k:A),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ee(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function te(){const e={get(e){return G(this,e)},get size(){return Z(this)},has:W,add:H,set:X,delete:K,clear:Y,forEach:J(!1,!1)},t={get(e){return G(this,e,!1,!0)},get size(){return Z(this)},has:W,add:H,set:X,delete:K,clear:Y,forEach:J(!1,!0)},n={get(e){return G(this,e,!0)},get size(){return Z(this,!0)},has(e){return W.call(this,e,!0)},add:ee("add"),set:ee("set"),delete:ee("delete"),clear:ee("clear"),forEach:J(!0,!1)},i={get(e){return G(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return W.call(this,e,!0)},add:ee("add"),set:ee("set"),delete:ee("delete"),clear:ee("clear"),forEach:J(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=Q(r,!1,!1),n[r]=Q(r,!0,!1),t[r]=Q(r,!1,!0),i[r]=Q(r,!0,!0)})),[e,n,t,i]}const[ne,ie,re,oe]=te();function se(e,t){const n=t?e?oe:re:e?ie:ne;return(t,r,o)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.$3)(n,r)&&r in t?n:t,r,o)}const ae={get:se(!1,!1)},le={get:se(!1,!0)},ce={get:se(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,i.Zf)(e))}function _e(e){return be(e)?e:ve(e,!1,U,ae,ue)}function ge(e){return ve(e,!1,V,le,he)}function ye(e){return ve(e,!0,j,ce,de)}function ve(e,t,n,r,o){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=me(e);if(0===a)return e;const l=new Proxy(e,2===a?r:n);return o.set(e,l),l}function xe(e){return be(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return xe(e)||be(e)}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Se(e){return(0,i.yQ)(e,"__v_skip",!0),e}const Ce=e=>(0,i.Gv)(e)?_e(e):e,Ie=e=>(0,i.Gv)(e)?ye(e):e;class Ae{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>Me(this,1)),(()=>this.dep&&S(this.dep))),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Te(this);return e._cacheable&&!e.effect.dirty||(0,i.$H)(e._value,e._value=e.effect.run())&&Me(e,2),Pe(e),e.effect._dirtyLevel>=1&&Me(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ke(e,t,n=!1){let r,o;const s=(0,i.Tn)(e);s?(r=e,o=i.tE):(r=e.get,o=e.set);const a=new Ae(r,o,s||!o,n);return a}function Pe(e){m&&o&&(e=Te(e),w(o,e.dep||(e.dep=C((()=>e.dep=void 0),e instanceof Ae?e:void 0)),void 0))}function Me(e,t=2,n){e=Te(e);const i=e.dep;i&&T(i,t,void 0)}function Re(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Oe(e,!1)}function Le(e){return Oe(e,!0)}function Oe(e,t){return Re(e)?e:new ze(e,t)}class ze{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Te(e),this._value=t?e:Ce(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||be(e);e=t?e:Te(e),(0,i.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ce(e),Me(this,2,e))}}function Be(e){return Re(e)?e.value:e}const Fe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Ne(e){return xe(e)?e:new Proxy(e,Fe)}},6768:function(e,t,n){"use strict";n.d(t,{$u:function(){return Oe},CE:function(){return en},Df:function(){return ve},EW:function(){return Vn},FK:function(){return qt},Gt:function(){return pt},Gy:function(){return ce},K9:function(){return Lt},Lk:function(){return ln},MZ:function(){return ye},OW:function(){return me},Q3:function(){return fn},QP:function(){return he},Qi:function(){return O},WQ:function(){return ft},bF:function(){return cn},bo:function(){return oe},dY:function(){return y},eW:function(){return pn},g2:function(){return G},h:function(){return qn},jt:function(){return z},k6:function(){return B},nI:function(){return Tn},pI:function(){return Ve},pM:function(){return xe},pR:function(){return pe},qL:function(){return s},sV:function(){return De},uX:function(){return Xt},wB:function(){return ee}});n(4114);var i=n(144),r=n(4232);function o(e,t,n,i){let r;try{r=i?e(...i):e()}catch(o){a(o,t,n)}return r}function s(e,t,n,i){if((0,r.Tn)(e)){const s=o(e,t,n,i);return s&&(0,r.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}const l=[];for(let r=0;r<e.length;r++)l.push(s(e[r],t,n,i));return l}function a(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,r,s])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const p=[];let f=null,m=0;const _=Promise.resolve();let g=null;function y(e){const t=g||_;return e?t.then(this?e.bind(this):e):t}function v(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=h[i],o=C(r);o<e||o===e&&r.pre?t=i+1:n=i}return t}function x(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(v(e.id),0,e),b())}function b(){c||u||(u=!0,g=_.then(A))}function w(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,r.cy)(e)?p.push(...e):f&&f.includes(e,e.allowRecurse?m+1:m)||p.push(e),b()}function T(e,t,n=(c?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function S(e){if(p.length){const e=[...new Set(p)].sort(((e,t)=>C(e)-C(t)));if(p.length=0,f)return void f.push(...e);for(f=e,m=0;m<f.length;m++)f[m]();f=null,m=0}}const C=e=>null==e.id?1/0:e.id,I=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){u=!1,c=!0,h.sort(I);r.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,S(e),c=!1,g=null,(h.length||p.length)&&A(e)}}function k(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.MZ;let o=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:s}=i[e]||r.MZ;s&&(o=n.map((e=>(0,r.Kg)(e)?e.trim():e))),t&&(o=n.map(r.bB))}let c;let u=i[c=(0,r.rU)(t)]||i[c=(0,r.rU)((0,r.PT)(t))];!u&&a&&(u=i[c=(0,r.rU)((0,r.Tg)(t))]),u&&s(u,e,6,o);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,s(h,e,6,o)}}function P(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},l=!1;if(!(0,r.Tn)(e)){const i=e=>{const n=P(e,t,!0);n&&(l=!0,(0,r.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||l?((0,r.cy)(s)?s.forEach((e=>a[e]=null)):(0,r.X$)(a,s),(0,r.Gv)(e)&&i.set(e,a),a):((0,r.Gv)(e)&&i.set(e,null),null)}function M(e,t){return!(!e||!(0,r.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,r.$3)(e,(0,r.Tg)(t))||(0,r.$3)(e,t))}let R=null,D=null;function L(e){const t=R;return R=e,D=e&&e.type.__scopeId||null,t}function O(e){D=e}function z(){D=null}function B(e,t=R,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Jt(-1);const r=L(t);let o;try{o=e(...n)}finally{L(r),i._d&&Jt(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function F(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:p,data:f,setupState:m,ctx:_,inheritAttrs:g}=e;let y,v;const x=L(e);try{if(4&n.shapeFlag){const e=o||i,t=e;y=mn(d.call(t,e,p,s,m,f,_)),v=u}else{const e=t;0,y=mn(e.length>1?e(s,{attrs:u,slots:c,emit:h}):e(s,null)),v=t.props?u:N(u)}}catch(w){Zt.length=0,a(w,e,1),y=cn(Gt)}let b=y;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(l&&e.some(r.CP)&&(v=U(v,l)),b=dn(b,v))}return n.dirs&&(b=dn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,L(x),y}const N=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const i in e)(0,r.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function j(e,t,n){const{props:i,children:r,component:o}=e,{props:s,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==s&&(i?!s||V(i,s,c):!!s);if(1024&l)return!0;if(16&l)return i?V(i,s,c):!!s;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==i[n]&&!M(c,n))return!0}}return!1}function V(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(t[o]!==e[o]&&!M(n,o))return!0}return!1}function q({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const $="components";function G(e,t){return Z($,e,!0,t)||e}const W=Symbol.for("v-ndc");function Z(e,t,n=!0,i=!1){const o=R||En;if(o){const n=o.type;if(e===$){const e=Un(n,!1);if(e&&(e===t||e===(0,r.PT)(t)||e===(0,r.ZH)((0,r.PT)(t))))return n}const s=H(o[e]||n[e],t)||H(o.appContext[e],t);return!s&&i?n:s}}function H(e,t){return e&&(e[t]||e[(0,r.PT)(t)]||e[(0,r.ZH)((0,r.PT)(t))])}const X=e=>e.__isSuspense;function K(e,t){t&&t.pendingBranch?(0,r.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const Y=Symbol.for("v-scx"),J=()=>{{const e=ft(Y);return e}};const Q={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:l,once:c,onTrack:u,onTrigger:h}=r.MZ){if(t&&c){const e=t;t=(...t)=>{e(...t),C()}}const d=En,p=e=>!0===a?e:re(e,!1===a?1:void 0);let f,m,_=!1,g=!1;if((0,i.i9)(e)?(f=()=>e.value,_=(0,i.fE)(e)):(0,i.g8)(e)?(f=()=>p(e),_=!0):(0,r.cy)(e)?(g=!0,_=e.some((e=>(0,i.g8)(e)||(0,i.fE)(e))),f=()=>e.map((e=>(0,i.i9)(e)?e.value:(0,i.g8)(e)?p(e):(0,r.Tn)(e)?o(e,d,2):void 0))):f=(0,r.Tn)(e)?t?()=>o(e,d,2):()=>(m&&m(),s(e,d,3,[v])):r.tE,t&&a){const e=f;f=()=>re(e())}let y,v=e=>{m=T.onStop=()=>{o(e,d,4),m=T.onStop=void 0}};if(Rn){if(v=r.tE,t?n&&s(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==l)return r.tE;{const e=J();y=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(Q):Q;const w=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(a||_||(g?e.some(((e,t)=>(0,r.$H)(e,b[t]))):(0,r.$H)(e,b)))&&(m&&m(),s(t,d,3,[e,b===Q?void 0:g&&b[0]===Q?[]:b,v]),b=e)}else T.run()};let E;w.allowRecurse=!!t,"sync"===l?E=w:"post"===l?E=()=>Dt(w,d&&d.suspense):(w.pre=!0,d&&(w.id=d.uid),E=()=>x(w));const T=new i.X2(f,r.tE,E),S=(0,i.o5)(),C=()=>{T.stop(),S&&(0,r.TF)(S.effects,T)};return t?n?w():b=T.run():"post"===l?Dt(T.run.bind(T),d&&d.suspense):T.run(),y&&y.push(C),C}function ne(e,t,n){const i=this.proxy,o=(0,r.Kg)(e)?e.includes(".")?ie(i,e):()=>i[e]:e.bind(i,i);let s;(0,r.Tn)(t)?s=t:(s=t.handler,n=t);const a=In(this),l=te(o,s.bind(i),n);return a(),l}function ie(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function re(e,t,n=0,o){if(!(0,r.Gv)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(o=o||new Set,o.has(e))return e;if(o.add(e),(0,i.i9)(e))re(e.value,t,n,o);else if((0,r.cy)(e))for(let i=0;i<e.length;i++)re(e[i],t,n,o);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{re(e,t,n,o)}));else if((0,r.Qd)(e))for(const i in e)re(e[i],t,n,o);return e}function oe(e,t){if(null===R)return e;const n=Nn(R)||R.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,s,a,l=r.MZ]=t[o];e&&((0,r.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&re(s),i.push({dir:e,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return e}function se(e,t,n,r){const o=e.dirs,a=t&&t.dirs;for(let l=0;l<o.length;l++){const c=o[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.C4)(),s(u,n,8,[e.el,c,e,t]),(0,i.bl)())}}const ae=Symbol("_leaveCb"),le=Symbol("_enterCb");function ce(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De((()=>{e.isMounted=!0})),ze((()=>{e.isUnmounting=!0})),e}const ue=[Function,Array],he={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},de={name:"BaseTransition",props:he,setup(e,{slots:t}){const n=Tn(),r=ce();let o;return()=>{const s=t.default&&ve(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Gt){0,a=t,e=!0;break}}const l=(0,i.ux)(e),{mode:c}=l;if(r.isLeaving)return _e(a);const u=ge(a);if(!u)return _e(a);const h=me(u,l,r,n);ye(u,h);const d=n.subTree,p=d&&ge(d);let f=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,f=!0)}if(p&&p.type!==Gt&&(!rn(u,p)||f)){const e=me(p,l,r,n);if(ye(p,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},_e(a);"in-out"===c&&u.type!==Gt&&(e.delayLeave=(e,t,n)=>{const i=fe(r,p);i[String(p.key)]=p,e[ae]=()=>{t(),e[ae]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},pe=de;function fe(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function me(e,t,n,i){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:x}=t,b=String(e.key),w=fe(n,e),E=(e,t)=>{e&&s(e,i,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,r.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:l,beforeEnter(t){let i=c;if(!n.isMounted){if(!o)return;i=g||c}t[ae]&&t[ae](!0);const r=w[b];r&&rn(e,r)&&r.el[ae]&&r.el[ae](),E(i,[t])},enter(e){let t=u,i=h,r=d;if(!n.isMounted){if(!o)return;t=y||u,i=v||h,r=x||d}let s=!1;const a=e[le]=t=>{s||(s=!0,E(t?r:i,[e]),S.delayedLeave&&S.delayedLeave(),e[le]=void 0)};t?T(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t[le]&&t[le](!0),n.isUnmounting)return i();E(p,[t]);let o=!1;const s=t[ae]=n=>{o||(o=!0,i(),E(n?_:m,[t]),t[ae]=void 0,w[r]===e&&delete w[r])};w[r]=e,f?T(f,[t,s]):s()},clone(e){return me(e,t,n,i)}};return S}function _e(e){if(we(e))return e=dn(e),e.children=null,e}function ge(e){return we(e)?e.children?e.children[0]:void 0:e}function ye(e,t){6&e.shapeFlag&&e.component?ye(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ve(e,t=!1,n){let i=[],r=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===qt?(128&s.patchFlag&&r++,i=i.concat(ve(s.children,t,a))):(t||s.type!==Gt)&&i.push(null!=a?dn(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function xe(e,t){return(0,r.Tn)(e)?(()=>(0,r.X$)({name:e.name},t,{setup:e}))():e}const be=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const we=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ee(e,t){return(0,r.cy)(e)?e.some((e=>Ee(e,t))):(0,r.Kg)(e)?e.split(",").includes(t):!!(0,r.gd)(e)&&e.test(t)}function Te(e,t){Ce(e,"a",t)}function Se(e,t){Ce(e,"da",t)}function Ce(e,t,n=En){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Pe(t,i,n),n){let e=n.parent;while(e&&e.parent)we(e.parent.vnode)&&Ie(i,t,n,e),e=e.parent}}function Ie(e,t,n,i){const o=Pe(t,e,i,!0);Be((()=>{(0,r.TF)(i[t],o)}),n)}function Ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ke(e){return 128&e.shapeFlag?e.ssContent:e}function Pe(e,t,n=En,r=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.C4)();const o=In(n),a=s(t,n,e,r);return o(),(0,i.bl)(),a});return r?o.unshift(a):o.push(a),a}}const Me=e=>(t,n=En)=>(!Rn||"sp"===e)&&Pe(e,((...e)=>t(...e)),n),Re=Me("bm"),De=Me("m"),Le=Me("bu"),Oe=Me("u"),ze=Me("bum"),Be=Me("um"),Fe=Me("sp"),Ne=Me("rtg"),Ue=Me("rtc");function je(e,t=En){Pe("ec",e,t)}function Ve(e,t,n,i){let o;const s=n&&n[i];if((0,r.cy)(e)||(0,r.Kg)(e)){o=new Array(e.length);for(let n=0,i=e.length;n<i;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,r.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];o[i]=t(e[r],r,i,s&&s[i])}}else o=[];return n&&(n[i]=o),o}const qe=e=>e?kn(e)?Nn(e)||e.proxy:qe(e.parent):null,$e=(0,r.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qe(e.parent),$root:e=>qe(e.root),$emit:e=>e.emit,$options:e=>Qe(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,x(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>ne.bind(e)}),Ge=(e,t)=>e!==r.MZ&&!e.__isScriptSetup&&(0,r.$3)(e,t),We={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ge(o,t))return l[t]=1,o[t];if(s!==r.MZ&&(0,r.$3)(s,t))return l[t]=2,s[t];if((h=e.propsOptions[0])&&(0,r.$3)(h,t))return l[t]=3,a[t];if(n!==r.MZ&&(0,r.$3)(n,t))return l[t]=4,n[t];He&&(l[t]=0)}}const d=$e[t];let p,f;return d?("$attrs"===t&&(0,i.u4)(e,"get",t),d(e)):(p=c.__cssModules)&&(p=p[t])?p:n!==r.MZ&&(0,r.$3)(n,t)?(l[t]=4,n[t]):(f=u.config.globalProperties,(0,r.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return Ge(o,t)?(o[t]=n,!0):i!==r.MZ&&(0,r.$3)(i,t)?(i[t]=n,!0):!(0,r.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let l;return!!n[a]||e!==r.MZ&&(0,r.$3)(e,a)||Ge(t,a)||(l=s[0])&&(0,r.$3)(l,a)||(0,r.$3)(i,a)||(0,r.$3)($e,a)||(0,r.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ze(e){return(0,r.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let He=!0;function Xe(e){const t=Qe(e),n=e.proxy,o=e.ctx;He=!1,t.beforeCreate&&Ye(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:_,activated:g,deactivated:y,beforeDestroy:v,beforeUnmount:x,destroyed:b,unmounted:w,render:E,renderTracked:T,renderTriggered:S,errorCaptured:C,serverPrefetch:I,expose:A,inheritAttrs:k,components:P,directives:M,filters:R}=t,D=null;if(h&&Ke(h,o,D),l)for(const i in l){const e=l[i];(0,r.Tn)(e)&&(o[i]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,r.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(He=!0,a)for(const i in a){const e=a[i],t=(0,r.Tn)(e)?e.bind(n,n):(0,r.Tn)(e.get)?e.get.bind(n,n):r.tE;0;const s=!(0,r.Tn)(e)&&(0,r.Tn)(e.set)?e.set.bind(n):r.tE,l=Vn({get:t,set:s});Object.defineProperty(o,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)Je(c[i],o,n,i);if(u){const e=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{pt(t,e[t])}))}function L(e,t){(0,r.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ye(d,e,"c"),L(Re,p),L(De,f),L(Le,m),L(Oe,_),L(Te,g),L(Se,y),L(je,C),L(Ue,T),L(Ne,S),L(ze,x),L(Be,w),L(Fe,I),(0,r.cy)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===r.tE&&(e.render=E),null!=k&&(e.inheritAttrs=k),P&&(e.components=P),M&&(e.directives=M)}function Ke(e,t,n=r.tE){(0,r.cy)(e)&&(e=rt(e));for(const o in e){const n=e[o];let s;s=(0,r.Gv)(n)?"default"in n?ft(n.from||o,n.default,!0):ft(n.from||o):ft(n),(0,i.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Ye(e,t,n){s((0,r.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,i){const o=i.includes(".")?ie(n,i):()=>n[i];if((0,r.Kg)(e)){const n=t[e];(0,r.Tn)(n)&&ee(o,n)}else if((0,r.Tn)(e))ee(o,e.bind(n));else if((0,r.Gv)(e))if((0,r.cy)(e))e.forEach((e=>Je(e,t,n,i)));else{const i=(0,r.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.Tn)(i)&&ee(o,i,e)}else 0}function Qe(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let c;return l?c=l:o.length||n||i?(c={},o.length&&o.forEach((e=>et(c,e,a,!0))),et(c,t,a)):c=t,(0,r.Gv)(t)&&s.set(t,c),c}function et(e,t,n,i=!1){const{mixins:r,extends:o}=t;o&&et(e,o,n,!0),r&&r.forEach((t=>et(e,t,n,!0)));for(const s in t)if(i&&"expose"===s);else{const i=tt[s]||n&&n[s];e[s]=i?i(e[s],t[s]):t[s]}return e}const tt={data:nt,props:at,emits:at,methods:st,computed:st,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:st,directives:st,watch:lt,provide:nt,inject:it};function nt(e,t){return t?e?function(){return(0,r.X$)((0,r.Tn)(e)?e.call(this,this):e,(0,r.Tn)(t)?t.call(this,this):t)}:t:e}function it(e,t){return st(rt(e),rt(t))}function rt(e){if((0,r.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?(0,r.X$)(Object.create(null),e,t):t}function at(e,t){return e?(0,r.cy)(e)&&(0,r.cy)(t)?[...new Set([...e,...t])]:(0,r.X$)(Object.create(null),Ze(e),Ze(null!=t?t:{})):t}function lt(e,t){if(!e)return t;if(!t)return e;const n=(0,r.X$)(Object.create(null),e);for(const i in t)n[i]=ot(e[i],t[i]);return n}function ct(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ut=0;function ht(e,t){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const o=ct(),s=new WeakSet;let a=!1;const l=o.app={_uid:ut++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:$n,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,r.Tn)(e.install)?(s.add(e),e.install(l,...t)):(0,r.Tn)(e)&&(s.add(e),e(l,...t))),l},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),l},component(e,t){return t?(o.components[e]=t,l):o.components[e]},directive(e,t){return t?(o.directives[e]=t,l):o.directives[e]},mount(r,s,c){if(!a){0;const u=cn(n,i);return u.appContext=o,!0===c?c="svg":!1===c&&(c=void 0),s&&t?t(u,r):e(u,r,c),a=!0,l._container=r,r.__vue_app__=l,Nn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return o.provides[e]=t,l},runWithContext(e){dt=l;try{return e()}finally{dt=null}}};return l}}let dt=null;function pt(e,t){if(En){let n=En.provides;const i=En.parent&&En.parent.provides;i===n&&(n=En.provides=Object.create(i)),n[e]=t}else 0}function ft(e,t,n=!1){const i=En||R;if(i||dt){const o=i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:dt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,r.Tn)(t)?t.call(i&&i.proxy):t}else 0}function mt(e,t,n,o=!1){const s={},a={};(0,r.yQ)(a,on,1),e.propsDefaults=Object.create(null),gt(e,t,s,a);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:(0,i.Gc)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function _t(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.ux)(s),[u]=e.propsOptions;let h=!1;if(!(o||l>0)||16&l){let i;gt(e,t,s,a)&&(h=!0);for(const o in c)t&&((0,r.$3)(t,o)||(i=(0,r.Tg)(o))!==o&&(0,r.$3)(t,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=yt(u,c,o,void 0,e,!0)):delete s[o]);if(a!==c)for(const e in a)t&&(0,r.$3)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let o=n[i];if(M(e.emitsOptions,o))continue;const l=t[o];if(u)if((0,r.$3)(a,o))l!==a[o]&&(a[o]=l,h=!0);else{const t=(0,r.PT)(o);s[t]=yt(u,c,t,l,e,!1)}else l!==a[o]&&(a[o]=l,h=!0)}}h&&(0,i.hZ)(e,"set","$attrs")}function gt(e,t,n,o){const[s,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.SU)(i))continue;const u=t[i];let h;s&&(0,r.$3)(s,h=(0,r.PT)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:M(e.emitsOptions,i)||i in o&&u===o[i]||(o[i]=u,c=!0)}if(a){const t=(0,i.ux)(n),o=l||r.MZ;for(let i=0;i<a.length;i++){const l=a[i];n[l]=yt(s,t,l,o[l],e,!(0,r.$3)(o,l))}}return c}function yt(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=(0,r.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(e)){const{propsDefaults:r}=o;if(n in r)i=r[n];else{const s=In(o);i=r[n]=e.call(null,t),s()}}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}function vt(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},l=[];let c=!1;if(!(0,r.Tn)(e)){const i=e=>{c=!0;const[n,i]=vt(e,t,!0);(0,r.X$)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!c)return(0,r.Gv)(e)&&i.set(e,r.Oj),r.Oj;if((0,r.cy)(s))for(let h=0;h<s.length;h++){0;const e=(0,r.PT)(s[h]);xt(e)&&(a[e]=r.MZ)}else if(s){0;for(const e in s){const t=(0,r.PT)(e);if(xt(t)){const n=s[e],i=a[t]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n);if(i){const e=Et(Boolean,i.type),n=Et(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.$3)(i,"default"))&&l.push(t)}}}}const u=[a,l];return(0,r.Gv)(e)&&i.set(e,u),u}function xt(e){return"$"!==e[0]}function bt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function wt(e,t){return bt(e)===bt(t)}function Et(e,t){return(0,r.cy)(t)?t.findIndex((t=>wt(t,e))):(0,r.Tn)(t)&&wt(t,e)?0:-1}const Tt=e=>"_"===e[0]||"$stable"===e,St=e=>(0,r.cy)(e)?e.map(mn):[mn(e)],Ct=(e,t,n)=>{if(t._n)return t;const i=B(((...e)=>St(t(...e))),n);return i._c=!1,i},It=(e,t,n)=>{const i=e._ctx;for(const o in e){if(Tt(o))continue;const n=e[o];if((0,r.Tn)(n))t[o]=Ct(o,n,i);else if(null!=n){0;const e=St(n);t[o]=()=>e}}},At=(e,t)=>{const n=St(t);e.slots.default=()=>n},kt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.ux)(t),(0,r.yQ)(t,"_",n)):It(t,e.slots={})}else e.slots={},t&&At(e,t);(0,r.yQ)(e.slots,on,1)},Pt=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,r.X$)(o,t),n||1!==e||delete o._):(s=!t.$stable,It(t,o)),a=t}else t&&(At(e,t),a={default:1});if(s)for(const r in o)Tt(r)||null!=a[r]||delete o[r]};function Mt(e,t,n,s,a=!1){if((0,r.cy)(e))return void e.forEach(((e,i)=>Mt(e,t&&((0,r.cy)(t)?t[i]:t),n,s,a)));if(be(s)&&!a)return;const l=4&s.shapeFlag?Nn(s.component)||s.component.proxy:s.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===r.MZ?u.refs={}:u.refs,f=u.setupState;if(null!=d&&d!==h&&((0,r.Kg)(d)?(p[d]=null,(0,r.$3)(f,d)&&(f[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))o(h,u,12,[c,p]);else{const t=(0,r.Kg)(h),o=(0,i.i9)(h),s=e.f;if(t||o){const i=()=>{if(s){const n=t?(0,r.$3)(f,h)?f[h]:p[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,l):(0,r.cy)(n)?n.includes(l)||n.push(l):t?(p[h]=[l],(0,r.$3)(f,h)&&(f[h]=p[h])):(h.value=[l],e.k&&(p[e.k]=h.value))}else t?(p[h]=c,(0,r.$3)(f,h)&&(f[h]=c)):o&&(h.value=c,e.k&&(p[e.k]=c))};a||s?i():(i.id=-1,Dt(i,n))}else 0}}function Rt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Dt=K;function Lt(e){return Ot(e)}function Ot(e,t){Rt();const n=(0,r.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=r.tE,insertStaticContent:_}=e,g=(e,t,n,i=null,r=null,o=null,s=void 0,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!rn(e,t)&&(i=J(e),Z(e,r,o,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case $t:y(e,t,n,i);break;case Gt:v(e,t,n,i);break;case Wt:null==e&&b(t,n,i,s);break;case qt:L(e,t,n,i,r,o,s,a,l);break;default:1&h?I(e,t,n,i,r,o,s,a,l):6&h?O(e,t,n,i,r,o,s,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,o,s,a,l,te)}null!=u&&r&&Mt(u,e&&e.ref,o,t||e,!t)},y=(e,t,n,i)=>{if(null==e)o(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},v=(e,t,n,i)=>{null==e?o(t.el=u(t.children||""),n,i):t.el=e.el},b=(e,t,n,i)=>{[e.el,e.anchor]=_(e.children,t,n,i,e.el,e.anchor)},E=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),o(e,n,i),e=r;o(t,n,i)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},I=(e,t,n,i,r,o,s,a,l)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?A(t,n,i,r,o,s,a,l):M(e,t,r,o,s,a,l)},A=(e,t,n,i,s,c,u,h)=>{let p,f;const{props:m,shapeFlag:_,transition:g,dirs:y}=e;if(p=e.el=l(e.type,c,m&&m.is,m),8&_?d(p,e.children):16&_&&P(e.children,p,null,i,s,zt(e,c),u,h),y&&se(e,null,i,"created"),k(p,e,e.scopeId,u,i),m){for(const t in m)"value"===t||(0,r.SU)(t)||a(p,t,null,m[t],c,e.children,i,s,Y);"value"in m&&a(p,"value",null,m.value,c),(f=m.onVnodeBeforeMount)&&vn(f,i,e)}y&&se(e,null,i,"beforeMount");const v=Ft(s,g);v&&g.beforeEnter(p),o(p,t,n),((f=m&&m.onVnodeMounted)||v||y)&&Dt((()=>{f&&vn(f,i,e),v&&g.enter(p),y&&se(e,null,i,"mounted")}),s)},k=(e,t,n,i,r)=>{if(n&&m(e,n),i)for(let o=0;o<i.length;o++)m(e,i[o]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;k(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},P=(e,t,n,i,r,o,s,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?_n(e[c]):mn(e[c]);g(null,l,t,n,i,r,o,s,a)}},M=(e,t,n,i,o,s,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r.MZ,m=t.props||r.MZ;let _;if(n&&Bt(n,!1),(_=m.onVnodeBeforeUpdate)&&vn(_,n,t,e),p&&se(t,e,n,"beforeUpdate"),n&&Bt(n,!0),h?R(e.dynamicChildren,h,c,n,i,zt(t,o),s):l||V(e,t,c,null,n,i,zt(t,o),s,!1),u>0){if(16&u)D(c,t,f,m,n,i,o);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,o),4&u&&a(c,"style",f.style,m.style,o),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const s=r[t],l=f[s],u=m[s];u===l&&"value"!==s||a(c,s,l,u,o,e.children,n,i,Y)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||D(c,t,f,m,n,i,o);((_=m.onVnodeUpdated)||p)&&Dt((()=>{_&&vn(_,n,t,e),p&&se(t,e,n,"updated")}),i)},R=(e,t,n,i,r,o,s)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===qt||!rn(l,c)||70&l.shapeFlag)?p(l.el):n;g(l,c,u,null,i,r,o,s,!0)}},D=(e,t,n,i,o,s,l)=>{if(n!==i){if(n!==r.MZ)for(const c in n)(0,r.SU)(c)||c in i||a(e,c,n[c],null,l,t.children,o,s,Y);for(const c in i){if((0,r.SU)(c))continue;const u=i[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,o,s,Y)}"value"in i&&a(e,"value",n.value,i.value,l)}},L=(e,t,n,i,r,s,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(o(h,n,i),o(d,n,i),P(t.children||[],n,d,r,s,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(R(e.dynamicChildren,f,n,r,s,a,l),(null!=t.key||r&&t===r.subTree)&&Nt(e,t,!0)):V(e,t,n,d,r,s,a,l,u)},O=(e,t,n,i,r,o,s,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,s,l):z(t,n,i,r,o,s,l):B(e,t,l)},z=(e,t,n,i,r,o,s)=>{const a=e.component=wn(e,i,r);if(we(e)&&(a.ctx.renderer=te),Dn(a),a.asyncDep){if(r&&r.registerDep(a,N),!e.el){const e=a.subTree=cn(Gt);v(null,e,t,n)}}else N(a,e,t,n,r,o,s)},B=(e,t,n)=>{const i=t.component=e.component;if(j(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void U(i,t,n);i.next=t,w(i.update),i.effect.dirty=!0,i.update()}else t.el=e.el,i.vnode=t},N=(e,t,n,o,s,a,l)=>{const c=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:o,vnode:u}=e;{const n=jt(e);if(n)return t&&(t.el=u.el,U(e,t,l)),void n.asyncDep.then((()=>{e.isUnmounted||c()}))}let h,d=t;0,Bt(e,!1),t?(t.el=u.el,U(e,t,l)):t=u,n&&(0,r.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&vn(h,o,t,u),Bt(e,!0);const f=F(e);0;const m=e.subTree;e.subTree=f,g(m,f,p(m.el),J(m),e,s,a),t.el=f.el,null===d&&q(e,f.el),i&&Dt(i,s),(h=t.props&&t.props.onVnodeUpdated)&&Dt((()=>vn(h,o,t,u)),s)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=be(t);if(Bt(e,!1),u&&(0,r.DY)(u),!p&&(i=c&&c.onVnodeBeforeMount)&&vn(i,d,t),Bt(e,!0),l&&ie){const n=()=>{e.subTree=F(e),ie(l,e.subTree,e,s,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=F(e);0,g(null,i,n,o,e,s,a),t.el=i.el}if(h&&Dt(h,s),!p&&(i=c&&c.onVnodeMounted)){const e=t;Dt((()=>vn(i,d,e)),s)}(256&t.shapeFlag||d&&be(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Dt(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new i.X2(c,r.tE,(()=>x(h)),e.scope),h=e.update=()=>{u.dirty&&u.run()};h.id=e.uid,Bt(e,!0),h()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,_t(e,t.props,r,n),Pt(e,t.children,n),(0,i.C4)(),T(e),(0,i.bl)()},V=(e,t,n,i,r,o,s,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void G(c,h,n,i,r,o,s,a,l);if(256&p)return void $(c,h,n,i,r,o,s,a,l)}8&f?(16&u&&Y(c,r,o),h!==c&&d(n,h)):16&u?16&f?G(c,h,n,i,r,o,s,a,l):Y(c,r,o,!0):(8&u&&d(n,""),16&f&&P(h,n,i,r,o,s,a,l))},$=(e,t,n,i,o,s,a,l,c)=>{e=e||r.Oj,t=t||r.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=c?_n(t[p]):mn(t[p]);g(e[p],i,n,null,o,s,a,l,c)}u>h?Y(e,o,s,!0,!1,d):P(t,n,i,o,s,a,l,c,d)},G=(e,t,n,i,o,s,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],r=t[u]=c?_n(t[u]):mn(t[u]);if(!rn(i,r))break;g(i,r,n,null,o,s,a,l,c),u++}while(u<=d&&u<=p){const i=e[d],r=t[p]=c?_n(t[p]):mn(t[p]);if(!rn(i,r))break;g(i,r,n,null,o,s,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)g(null,t[u]=c?_n(t[u]):mn(t[u]),n,r,o,s,a,l,c),u++}}else if(u>p)while(u<=d)Z(e[u],o,s,!0),u++;else{const f=u,m=u,_=new Map;for(u=m;u<=p;u++){const e=t[u]=c?_n(t[u]):mn(t[u]);null!=e.key&&_.set(e.key,u)}let y,v=0;const x=p-m+1;let b=!1,w=0;const E=new Array(x);for(u=0;u<x;u++)E[u]=0;for(u=f;u<=d;u++){const i=e[u];if(v>=x){Z(i,o,s,!0);continue}let r;if(null!=i.key)r=_.get(i.key);else for(y=m;y<=p;y++)if(0===E[y-m]&&rn(i,t[y])){r=y;break}void 0===r?Z(i,o,s,!0):(E[r-m]=u+1,r>=w?w=r:b=!0,g(i,t[r],n,null,o,s,a,l,c),v++)}const T=b?Ut(E):r.Oj;for(y=T.length-1,u=x-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?g(null,r,n,d,o,s,a,l,c):b&&(y<0||u!==T[y]?W(r,n,d,2):y--)}}},W=(e,t,n,i,r=null)=>{const{el:s,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,te);if(a===qt){o(s,t,n);for(let e=0;e<c.length;e++)W(c[e],t,n,i);return void o(e.anchor,t,n)}if(a===Wt)return void E(e,t,n);const h=2!==i&&1&u&&l;if(h)if(0===i)l.beforeEnter(s),o(s,t,n),Dt((()=>l.enter(s)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,a=()=>o(s,t,n),c=()=>{e(s,(()=>{a(),r&&r()}))};i?i(s,a,c):c()}else o(s,t,n)},Z=(e,t,n,i=!1,r=!1)=>{const{type:o,props:s,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Mt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!be(e);let m;if(f&&(m=s&&s.onVnodeBeforeUnmount)&&vn(m,t,e),6&u)K(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&se(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,i):c&&(o!==qt||h>0&&64&h)?Y(c,t,n,!1,!0):(o===qt&&384&h||!r&&16&u)&&Y(l,t,n),i&&H(e)}(f&&(m=s&&s.onVnodeUnmounted)||p)&&Dt((()=>{m&&vn(m,t,e),p&&se(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===qt)return void X(n,i);if(t===Wt)return void C(e);const o=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,s=()=>t(n,o);i?i(e.el,o,s):s()}else o()},X=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},K=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:l}=e;i&&(0,r.DY)(i),o.stop(),s&&(s.active=!1,Z(a,e,t,n)),l&&Dt(l,t),Dt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,i=!1,r=!1,o=0)=>{for(let s=o;s<e.length;s++)Z(e[s],t,n,i,r)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el);let Q=!1;const ee=(e,t,n)=>{null==e?t._vnode&&Z(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),Q||(Q=!0,T(),S(),Q=!1),t._vnode=e},te={p:g,um:Z,m:W,r:H,mt:z,mc:P,pc:V,pbc:R,n:J,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:ht(ee,ne)}}function zt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nt(e,t,n=!1){const i=e.children,o=t.children;if((0,r.cy)(i)&&(0,r.cy)(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=_n(o[r]),t.el=e.el),n||Nt(e,t)),t.type===$t&&(t.el=e.el)}}function Ut(e){const t=e.slice(),n=[0];let i,r,o,s,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<l?o=a+1:s=a;l<e[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function jt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jt(t)}const Vt=e=>e.__isTeleport;const qt=Symbol.for("v-fgt"),$t=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Wt=Symbol.for("v-stc"),Zt=[];let Ht=null;function Xt(e=!1){Zt.push(Ht=e?null:[])}function Kt(){Zt.pop(),Ht=Zt[Zt.length-1]||null}let Yt=1;function Jt(e){Yt+=e}function Qt(e){return e.dynamicChildren=Yt>0?Ht||r.Oj:null,Kt(),Yt>0&&Ht&&Ht.push(e),e}function en(e,t,n,i,r,o){return Qt(ln(e,t,n,i,r,o,!0))}function tn(e,t,n,i,r){return Qt(cn(e,t,n,i,r,!0))}function nn(e){return!!e&&!0===e.__v_isVNode}function rn(e,t){return e.type===t.type&&e.key===t.key}const on="__vInternal",sn=({key:e})=>null!=e?e:null,an=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.Kg)(e)||(0,i.i9)(e)||(0,r.Tn)(e)?{i:R,r:e,k:t,f:!!n}:e:null);function ln(e,t=null,n=null,i=0,o=null,s=(e===qt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sn(t),ref:t&&an(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:R};return l?(gn(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.Kg)(n)?8:16),Yt>0&&!a&&Ht&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&Ht.push(c),c}const cn=un;function un(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==W||(e=Gt),nn(e)){const i=dn(e,t,!0);return n&&gn(i,n),Yt>0&&!a&&Ht&&(6&i.shapeFlag?Ht[Ht.indexOf(e)]=i:Ht.push(i)),i.patchFlag|=-2,i}if(jn(e)&&(e=e.__vccOpts),t){t=hn(t);let{class:e,style:n}=t;e&&!(0,r.Kg)(e)&&(t.class=(0,r.C4)(e)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),t.style=(0,r.Tr)(n))}const l=(0,r.Kg)(e)?1:X(e)?128:Vt(e)?64:(0,r.Gv)(e)?4:(0,r.Tn)(e)?2:0;return ln(e,t,n,o,s,l,a,!0)}function hn(e){return e?(0,i.ju)(e)||on in e?(0,r.X$)({},e):e:null}function dn(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,l=t?yn(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sn(l),ref:t&&t.ref?n&&o?(0,r.cy)(o)?o.concat(an(t)):[o,an(t)]:an(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dn(e.ssContent),ssFallback:e.ssFallback&&dn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c}function pn(e=" ",t=0){return cn($t,null,e,t)}function fn(e="",t=!1){return t?(Xt(),tn(Gt,null,e)):cn(Gt,null,e)}function mn(e){return null==e||"boolean"===typeof e?cn(Gt):(0,r.cy)(e)?cn(qt,null,e.slice()):"object"===typeof e?_n(e):cn($t,null,String(e))}function _n(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:dn(e)}function gn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),gn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||on in t?3===i&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,r.Tn)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&i?(n=16,t=[pn(t)]):n=8);e.children=t,e.shapeFlag|=n}function yn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C4)([t.class,i.class]));else if("style"===e)t.style=(0,r.Tr)([t.style,i.style]);else if((0,r.Mp)(e)){const n=t[e],o=i[e];!o||n===o||(0,r.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function vn(e,t,n,i=null){s(e,t,7,[n,i])}const xn=ct();let bn=0;function wn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||xn,a={uid:bn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vt(o,s),emitsOptions:P(o,s),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:o.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=k.bind(null,a),e.ce&&e.ce(a),a}let En=null;const Tn=()=>En||R;let Sn,Cn;{const e=(0,r.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach((t=>t(e))):i[0](e)}};Sn=t("__VUE_INSTANCE_SETTERS__",(e=>En=e)),Cn=t("__VUE_SSR_SETTERS__",(e=>Rn=e))}const In=e=>{const t=En;return Sn(e),e.scope.on(),()=>{e.scope.off(),Sn(t)}},An=()=>{En&&En.scope.off(),Sn(null)};function kn(e){return 4&e.vnode.shapeFlag}let Pn,Mn,Rn=!1;function Dn(e,t=!1){t&&Cn(t);const{props:n,children:i}=e.vnode,r=kn(e);mt(e,n,r,t),kt(e,i);const o=r?Ln(e,t):void 0;return t&&Cn(!1),o}function Ln(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.IG)(new Proxy(e.ctx,We));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Fn(e):null,l=In(e);(0,i.C4)();const c=o(s,e,0,[e.props,n]);if((0,i.bl)(),l(),(0,r.yL)(c)){if(c.then(An,An),t)return c.then((n=>{On(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else On(e,c,t)}else zn(e,t)}function On(e,t,n){(0,r.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),zn(e,n)}function zn(e,t,n){const o=e.type;if(!e.render){if(!t&&Pn&&!o.render){const t=o.template||Qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,l=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:s},i),a);o.render=Pn(t,l)}}e.render=o.render||r.tE,Mn&&Mn(e)}{const t=In(e);(0,i.C4)();try{Xe(e)}finally{(0,i.bl)(),t()}}}function Bn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,i.u4)(e,"get","$attrs"),t[n]}}))}function Fn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Bn(e)},slots:e.slots,emit:e.emit,expose:t}}function Nn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in $e?$e[n](e):void 0},has(e,t){return t in e||t in $e}}))}function Un(e,t=!0){return(0,r.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function jn(e){return(0,r.Tn)(e)&&"__vccOpts"in e}const Vn=(e,t)=>(0,i.EW)(e,t,Rn);function qn(e,t,n){const i=arguments.length;return 2===i?(0,r.Gv)(t)&&!(0,r.cy)(t)?nn(t)?cn(e,null,[t]):cn(e,t):cn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&nn(n)&&(n=[n]),cn(e,t,n))}const $n="3.4.15"},5130:function(e,t,n){"use strict";n.d(t,{D$:function(){return Ee},Ef:function(){return Ie},Jo:function(){return _e},XL:function(){return ge},u1:function(){return ye}});n(4114);var i=n(6768),r=n(4232),o=n(144);
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,c=l&&l.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r="svg"===t?l.createElementNS(s,e):"mathml"===t?l.createElementNS(a,e):l.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,o){const s=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===o||!(r=r.nextSibling))break}else{c.innerHTML="svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e;const r=c.content;if("svg"===i||"mathml"===i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",p=Symbol("_vtc"),f=(e,{slots:t})=>(0,i.h)(i.pR,v(e),t);f.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_=f.props=(0,r.X$)({},i.QP,m),g=(e,t=[])=>{(0,r.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,r.cy)(e)?e.some((e=>e.length>1)):e.length>1);function v(e){const t={};for(const r in e)r in m||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,_=x(o),v=_&&_[0],b=_&&_[1],{onBeforeEnter:S,onEnter:I,onEnterCancelled:A,onLeave:k,onLeaveCancelled:M,onBeforeAppear:R=S,onAppear:D=I,onAppearCancelled:L=A}=t,O=(e,t,n)=>{E(e,t?h:l),E(e,t?u:a),n&&n()},z=(e,t)=>{e._isLeaving=!1,E(e,d),E(e,f),E(e,p),t&&t()},B=e=>(t,n)=>{const r=e?D:I,o=()=>O(t,e,n);g(r,[t,o]),T((()=>{E(t,e?c:s),w(t,e?h:l),y(r)||C(t,i,v,o)}))};return(0,r.X$)(t,{onBeforeEnter(e){g(S,[e]),w(e,s),w(e,a)},onBeforeAppear(e){g(R,[e]),w(e,c),w(e,u)},onEnter:B(!1),onAppear:B(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>z(e,t);w(e,d),P(),w(e,p),T((()=>{e._isLeaving&&(E(e,d),w(e,f),y(k)||C(e,i,b,n))})),g(k,[e,n])},onEnterCancelled(e){O(e,!1),g(A,[e])},onAppearCancelled(e){O(e,!0),g(L,[e])},onLeaveCancelled(e){z(e),g(M,[e])}})}function x(e){if(null==e)return null;if((0,r.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,r.Ro)(e);return t}function w(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[p]||(e[p]=new Set)).add(t)}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[p];n&&(n.delete(t),n.size||(e[p]=void 0))}function T(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function C(e,t,n,i){const r=e._endId=++S,o=()=>{r===e._endId&&i()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=I(e,t);if(!s)return i();const c=s+"end";let u=0;const h=()=>{e.removeEventListener(c,d),o()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function I(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(`${h}Delay`),o=i(`${h}Duration`),s=A(r,o),a=i(`${d}Delay`),l=i(`${d}Duration`),c=A(a,l);let u=null,p=0,f=0;t===h?s>0&&(u=h,p=s,f=o.length):t===d?c>0&&(u=d,p=c,f=l.length):(p=Math.max(s,c),u=p>0?s>c?h:d:null,f=u?u===h?o.length:l.length:0);const m=u===h&&/\b(transform|all)(,|$)/.test(i(`${h}Property`).toString());return{type:u,timeout:p,propCount:f,hasTransform:m}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>k(t)+k(e[n]))))}function k(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function P(){return document.body.offsetHeight}function M(e,t,n){const i=e[p];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const R=Symbol("_vod");const D=Symbol("");function L(e,t,n){const i=e.style,o=i.display,s=(0,r.Kg)(n);if(n&&!s){if(t&&!(0,r.Kg)(t))for(const e in t)null==n[e]&&z(i,e,"");for(const e in n)z(i,e,n[e])}else if(s){if(t!==n){const e=i[D];e&&(n+=";"+e),i.cssText=n}}else t&&e.removeAttribute("style");R in e&&(i.display=o)}const O=/\s*!important$/;function z(e,t,n){if((0,r.cy)(n))n.forEach((n=>z(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=N(e,t);O.test(n)?e.setProperty((0,r.Tg)(i),n.replace(O,""),"important"):e[i]=n}}const B=["Webkit","Moz","ms"],F={};function N(e,t){const n=F[t];if(n)return n;let i=(0,r.PT)(t);if("filter"!==i&&i in e)return F[t]=i;i=(0,r.ZH)(i);for(let r=0;r<B.length;r++){const n=B[r]+i;if(n in e)return F[t]=n}return t}const U="http://www.w3.org/1999/xlink";function j(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(U,t.slice(6,t.length)):e.setAttributeNS(U,t,n);else{const i=(0,r.J$)(t);null==n||i&&!(0,r.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function V(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);const l=e.tagName;if("value"===t&&"PROGRESS"!==l&&!l.includes("-")){e._value=n;const i="OPTION"===l?e.getAttribute("value"):e.value,r=null==n?"":n;return i!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function q(e,t,n,i){e.addEventListener(t,n,i)}function $(e,t,n,i){e.removeEventListener(t,n,i)}const G=Symbol("_vei");function W(e,t,n,i,r=null){const o=e[G]||(e[G]={}),s=o[t];if(i&&s)s.value=i;else{const[n,a]=H(t);if(i){const s=o[t]=J(i,r);q(e,n,s,a)}else s&&($(e,n,s,a),o[t]=void 0)}}const Z=/(?:Once|Passive|Capture)$/;function H(e){let t;if(Z.test(e)){let n;t={};while(n=e.match(Z))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.Tg)(e.slice(2));return[n,t]}let X=0;const K=Promise.resolve(),Y=()=>X||(K.then((()=>X=0)),X=Date.now());function J(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)(Q(e,n.value),t,5,[e])};return n.value=e,n.attached=Y(),n}function Q(e,t){if((0,r.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ee=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,te=(e,t,n,i,o,s,a,l,c)=>{const u="svg"===o;"class"===t?M(e,i,u):"style"===t?L(e,n,i):(0,r.Mp)(t)?(0,r.CP)(t)||W(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ne(e,t,i,u))?V(e,t,i,s,a,l,c):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),j(e,t,i,u))};function ne(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&ee(t)&&(0,r.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ee(t)||!(0,r.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ie=new WeakMap,re=new WeakMap,oe=Symbol("_moveCb"),se=Symbol("_enterCb"),ae={name:"TransitionGroup",props:(0,r.X$)({},_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.nI)(),r=(0,i.Gy)();let s,a;return(0,i.$u)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!he(s[0].el,n.vnode.el,t))return;s.forEach(le),s.forEach(ce);const i=s.filter(ue);P(),i.forEach((e=>{const n=e.el,i=n.style;w(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n[oe]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n[oe]=null,E(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const l=(0,o.ux)(e),c=v(l);let u=l.tag||i.FK;s=a,a=t.default?(0,i.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.MZ)(t,(0,i.OW)(t,c,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.MZ)(t,(0,i.OW)(t,c,r,n)),ie.set(t,t.el.getBoundingClientRect())}return(0,i.bF)(u,null,a)}}};ae.props;function le(e){const t=e.el;t[oe]&&t[oe](),t[se]&&t[se]()}function ce(e){re.set(e,e.el.getBoundingClientRect())}function ue(e){const t=ie.get(e),n=re.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function he(e,t,n){const i=e.cloneNode(),r=e[p];r&&r.forEach((e=>{e.split(/\s+/).forEach((e=>e&&i.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&i.classList.add(e))),i.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(i);const{hasTransform:s}=I(i);return o.removeChild(i),s}const de=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.cy)(t)?e=>(0,r.DY)(t,e):t};function pe(e){e.target.composing=!0}function fe(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const me=Symbol("_assign"),_e={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e[me]=de(o);const s=i||o.props&&"number"===o.props.type;q(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.bB)(i)),e[me](i)})),n&&q(e,"change",(()=>{e.value=e.value.trim()})),t||(q(e,"compositionstart",pe),q(e,"compositionend",fe),q(e,"change",fe))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e[me]=de(s),e.composing)return;const a=o||"number"===e.type?(0,r.bB)(e.value):e.value,l=null==t?"":t;if(a!==l){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===l)return}e.value=l}}};const ge={created(e,{value:t},n){e.checked=(0,r.BX)(t,n.props.value),e[me]=de(n),q(e,"change",(()=>{e[me](xe(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e[me]=de(i),t!==n&&(e.checked=(0,r.BX)(t,i.props.value))}},ye={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=(0,r.vM)(t);q(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.bB)(xe(e)):xe(e)));e[me](e.multiple?s?new Set(t):t:t[0]),e._assigning=!0,(0,i.dY)((()=>{e._assigning=!1}))})),e[me]=de(o)},mounted(e,{value:t,oldValue:n,modifiers:{number:i}}){ve(e,t,n,i)},beforeUpdate(e,t,n){e[me]=de(n)},updated(e,{value:t,oldValue:n,modifiers:{number:i}}){e._assigning||ve(e,t,n,i)}};function ve(e,t,n,i){const o=e.multiple,s=(0,r.cy)(t);if((!o||s||(0,r.vM)(t))&&(!s||!(0,r.BX)(t,n))){for(let n=0,a=e.options.length;n<a;n++){const a=e.options[n],l=xe(a);if(o)if(s){const e=typeof l;a.selected="string"===e||"number"===e?t.includes(i?(0,r.bB)(l):l):(0,r.u3)(t,l)>-1}else a.selected=t.has(l);else if((0,r.BX)(xe(a),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}o||-1===e.selectedIndex||(e.selectedIndex=-1)}}function xe(e){return"_value"in e?e._value:e.value}const be=["ctrl","shift","alt","meta"],we={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>be.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ee=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(n,...i)=>{for(let e=0;e<t.length;e++){const i=we[t[e]];if(i&&i(n,t))return}return e(n,...i)})},Te=(0,r.X$)({patchProp:te},u);let Se;function Ce(){return Se||(Se=(0,i.K9)(Te))}const Ie=(...e)=>{const t=Ce().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ke(e);if(!i)return;const o=t._component;(0,r.Tn)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,Ae(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Ae(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ke(e){if((0,r.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){"use strict";n.d(t,{$3:function(){return p},$H:function(){return B},BH:function(){return G},BX:function(){return ne},Bm:function(){return b},C4:function(){return Y},CE:function(){return m},CP:function(){return c},DY:function(){return F},Gv:function(){return w},J$:function(){return Q},Kg:function(){return x},MZ:function(){return r},Mp:function(){return l},NO:function(){return a},Oj:function(){return o},PT:function(){return R},Qd:function(){return I},Ro:function(){return j},SU:function(){return k},TF:function(){return h},Tg:function(){return L},Tn:function(){return v},Tr:function(){return W},We:function(){return q},X$:function(){return u},Y2:function(){return ee},ZH:function(){return O},Zf:function(){return C},bB:function(){return U},cy:function(){return f},gd:function(){return y},pD:function(){return i},rU:function(){return z},tE:function(){return s},u3:function(){return ie},vM:function(){return _},v_:function(){return re},yI:function(){return A},yL:function(){return E},yQ:function(){return N}});n(4114);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var _="store";function g(e){return void 0===e&&(e=null),(0,i.WQ)(null!==e?e:_)}function y(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function v(e){return null!==e&&"object"===typeof e}function x(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),T(e,n,t)}function T(e,t,n){var o=e._state,s=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,l={},c={},u=(0,r.uY)(!0);u.run((function(){y(a,(function(t,n){l[n]=b(t,e),c[n]=(0,i.EW)((function(){return l[n]()})),Object.defineProperty(e.getters,n,{get:function(){return c[n].value},enumerable:!0})}))})),e._state=(0,r.Kh)({data:t}),e._scope=u,e.strict&&M(e),o&&n&&e._withCommit((function(){o.data=null})),s&&s.stop()}function S(e,t,n,i,r){var o=!n.length,s=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=i),!o&&!r){var a=R(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=i.state}))}var c=i.context=C(e,s,n);i.forEachMutation((function(t,n){var i=s+n;A(e,i,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:s+n,r=t.handler||t;k(e,i,r,c)})),i.forEachGetter((function(t,n){var i=s+n;P(e,i,t,c)})),i.forEachChild((function(i,o){S(e,t,n.concat(o),i,r)}))}function C(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var o=D(n,i,r),s=o.payload,a=o.options,l=o.type;return a&&a.root||(l=t+l),e.dispatch(l,s)},commit:i?e.commit:function(n,i,r){var o=D(n,i,r),s=o.payload,a=o.options,l=o.type;a&&a.root||(l=t+l),e.commit(l,s,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return R(e.state,n)}}}),r}function I(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function A(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function k(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return x(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function P(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function M(e){(0,i.wB)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return v(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var L="vuex bindings",O="vuex:mutations",z="vuex:actions",B="vuex",F=0;function N(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L]},(function(n){n.addTimelineLayer({id:O,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:z,label:"Vuex Actions",color:U}),n.addInspector({id:B,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===B)if(n.filter){var i=[];W(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[G(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===B){var i=n.nodeId;I(t,i),n.state=Z(X(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===B){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(B),n.sendInspectorState(B),n.addTimelineEvent({layerId:O,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=F++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:z,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:z,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var U=8702998,j=6710886,V=16777215,q={label:"namespaced",textColor:V,backgroundColor:j};function $(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function G(e,t){return{id:t||"root",label:$(t),tags:e.namespaced?[q]:[],children:Object.keys(e._children).map((function(n){return G(e._children[n],t+n+"/")}))}}function W(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[q]:[]}),Object.keys(t._children).forEach((function(r){W(e,t._children[r],n,i+r+"/")}))}function Z(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var o=H(t);r.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?$(e):e,editable:!1,value:K((function(){return o[e]}))}}))}return r}function H(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,o=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[o]=K((function(){return e[n]}))}else t[n]=K((function(){return e[n]}))})),t}function X(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var o=e[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function K(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){y(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&y(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&y(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&y(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,J);var Q=function(e){this.register([],e,!1)};function ee(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;ee(e.concat(i),t.getChild(i),n.modules[i])}}Q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Q.prototype.update=function(e){ee([],this.root,e)},Q.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new Y(t,n);if(0===e.length)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&y(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},Q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},Q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function te(e){return new ne(e)}var ne=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,s=this,a=s.dispatch,l=s.commit;this.dispatch=function(e,t){return a.call(o,e,t)},this.commit=function(e,t,n){return l.call(o,e,t,n)},this.strict=i;var c=this._modules.root.state;S(this,c,[],this._modules.root),T(this,c),n.forEach((function(e){return e(t)}))},ie={state:{configurable:!0}};ne.prototype.install=function(e,t){e.provide(t||_,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&N(e,this)},ie.state.get=function(){return this._state.data},ie.state.set=function(e){0},ne.prototype.commit=function(e,t,n){var i=this,r=D(e,t,n),o=r.type,s=r.payload,a=(r.options,{type:o,payload:s}),l=this._mutations[o];l&&(this._withCommit((function(){l.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},ne.prototype.dispatch=function(e,t){var n=this,i=D(e,t),r=i.type,o=i.payload,s={type:r,payload:o},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(c){0}t(e)}))}))}},ne.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},ne.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},ne.prototype.watch=function(e,t,n){var r=this;return(0,i.wB)((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},ne.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ne.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),T(this,this.state)},ne.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},ne.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ne.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},ne.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ne.prototype,ie);se((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=ae(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var o=ae(this.$store,"mapMutations",e);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var o=ae(this.$store,"mapActions",e);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function re(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||v(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var i=e._modulesNamespaceMap[n];return i}},7691:function(e){e.exports=n;var t=Object.prototype.hasOwnProperty;function n(){for(var e={},n=0;n<arguments.length;n++){var i=arguments[n];for(var r in i)t.call(i,r)&&(e[r]=i[r])}return e}},9306:function(e,t,n){"use strict";var i=n(4901),r=n(6823),o=TypeError;e.exports=function(e){if(i(e))return e;throw new o(r(e)+" is not a function")}},3506:function(e,t,n){"use strict";var i=n(3925),r=String,o=TypeError;e.exports=function(e){if(i(e))return e;throw new o("Can't set "+r(e)+" as a prototype")}},679:function(e,t,n){"use strict";var i=n(1625),r=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw new r("Incorrect invocation")}},8551:function(e,t,n){"use strict";var i=n(34),r=String,o=TypeError;e.exports=function(e){if(i(e))return e;throw new o(r(e)+" is not an object")}},7811:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4644:function(e,t,n){"use strict";var i,r,o,s=n(7811),a=n(3724),l=n(4475),c=n(4901),u=n(34),h=n(9297),d=n(6955),p=n(6823),f=n(6699),m=n(6840),_=n(2106),g=n(1625),y=n(2787),v=n(2967),x=n(8227),b=n(3392),w=n(1181),E=w.enforce,T=w.get,S=l.Int8Array,C=S&&S.prototype,I=l.Uint8ClampedArray,A=I&&I.prototype,k=S&&y(S),P=C&&y(C),M=Object.prototype,R=l.TypeError,D=x("toStringTag"),L=b("TYPED_ARRAY_TAG"),O="TypedArrayConstructor",z=s&&!!v&&"Opera"!==d(l.opera),B=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},N={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(F,t)||h(N,t)},j=function(e){var t=y(e);if(u(t)){var n=T(t);return n&&h(n,O)?n[O]:j(t)}},V=function(e){if(!u(e))return!1;var t=d(e);return h(F,t)||h(N,t)},q=function(e){if(V(e))return e;throw new R("Target is not a typed array")},$=function(e){if(c(e)&&(!v||g(k,e)))return e;throw new R(p(e)+" is not a typed array constructor")},G=function(e,t,n,i){if(a){if(n)for(var r in F){var o=l[r];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(c){}}}P[e]&&!n||m(P,e,n?t:z&&C[e]||t,i)}},W=function(e,t,n){var i,r;if(a){if(v){if(n)for(i in F)if(r=l[i],r&&h(r,e))try{delete r[e]}catch(o){}if(k[e]&&!n)return;try{return m(k,e,n?t:z&&k[e]||t)}catch(o){}}for(i in F)r=l[i],!r||r[e]&&!n||m(r,e,t)}};for(i in F)r=l[i],o=r&&r.prototype,o?E(o)[O]=r:z=!1;for(i in N)r=l[i],o=r&&r.prototype,o&&(E(o)[O]=r);if((!z||!c(k)||k===Function.prototype)&&(k=function(){throw new R("Incorrect invocation")},z))for(i in F)l[i]&&v(l[i],k);if((!z||!P||P===M)&&(P=k.prototype,z))for(i in F)l[i]&&v(l[i].prototype,P);if(z&&y(A)!==P&&v(A,P),a&&!h(P,D))for(i in B=!0,_(P,D,{configurable:!0,get:function(){return u(this)?this[L]:void 0}}),F)l[i]&&f(l[i],L,i);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:z,TYPED_ARRAY_TAG:B&&L,aTypedArray:q,aTypedArrayConstructor:$,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:j,isView:U,isTypedArray:V,TypedArray:k,TypedArrayPrototype:P}},5370:function(e,t,n){"use strict";var i=n(6198);e.exports=function(e,t,n){var r=0,o=arguments.length>2?n:i(t),s=new e(o);while(o>r)s[r]=t[r++];return s}},9617:function(e,t,n){"use strict";var i=n(5397),r=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a,l=i(t),c=o(l),u=r(s,c);if(e&&n!==n){while(c>u)if(a=l[u++],a!==a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){"use strict";var i=n(3724),r=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){"use strict";var i=n(6198);e.exports=function(e,t){for(var n=i(e),r=new t(n),o=0;o<n;o++)r[o]=e[n-o-1];return r}},9928:function(e,t,n){"use strict";var i=n(6198),r=n(1291),o=RangeError;e.exports=function(e,t,n,s){var a=i(e),l=r(n),c=l<0?a+l:l;if(c>=a||c<0)throw new o("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===c?s:e[h];return u}},4576:function(e,t,n){"use strict";var i=n(9504),r=i({}.toString),o=i("".slice);e.exports=function(e){return o(r(e),8,-1)}},6955:function(e,t,n){"use strict";var i=n(2140),r=n(4901),o=n(4576),s=n(8227),a=s("toStringTag"),l=Object,c="Arguments"===o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),a))?n:c?o(t):"Object"===(i=o(t))&&r(t.callee)?"Arguments":i}},7740:function(e,t,n){"use strict";var i=n(9297),r=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=r(t),l=s.f,c=o.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||l(e,h,c(t,h))}}},2211:function(e,t,n){"use strict";var i=n(9039);e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){"use strict";var i=n(3724),r=n(4913),o=n(6980);e.exports=i?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){"use strict";var i=n(283),r=n(4913);e.exports=function(e,t,n){return n.get&&i(n.get,t,{getter:!0}),n.set&&i(n.set,t,{setter:!0}),r.f(e,t,n)}},6840:function(e,t,n){"use strict";var i=n(4901),r=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(i(n)&&o(n,c,a),a.global)l?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){"use strict";var i=n(4475),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},3724:function(e,t,n){"use strict";var i=n(9039);e.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){"use strict";var i=n(4475),r=n(34),o=i.document,s=r(o)&&r(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9392:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){"use strict";var i,r,o=n(4475),s=n(9392),a=o.process,l=o.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&s&&(i=s.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){"use strict";var i=n(9504),r=Error,o=i("".replace),s=function(e){return String(new r(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(s);e.exports=function(e,t){if(l&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6518:function(e,t,n){"use strict";var i=n(4475),r=n(7347).f,o=n(6699),s=n(6840),a=n(9433),l=n(7740),c=n(2796);e.exports=function(e,t){var n,u,h,d,p,f,m=e.target,_=e.global,g=e.stat;if(u=_?i:g?i[m]||a(m,{}):i[m]&&i[m].prototype,u)for(h in t){if(p=t[h],e.dontCallGetSet?(f=r(u,h),d=f&&f.value):d=u[h],n=c(_?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),s(u,h,p,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){"use strict";var i=n(9039);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var i=n(616),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},350:function(e,t,n){"use strict";var i=n(3724),r=n(9297),o=Function.prototype,s=i&&Object.getOwnPropertyDescriptor,a=r(o,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},6706:function(e,t,n){"use strict";var i=n(9504),r=n(9306);e.exports=function(e,t,n){try{return i(r(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},9504:function(e,t,n){"use strict";var i=n(616),r=Function.prototype,o=r.call,s=i&&r.bind.bind(o,o);e.exports=i?s:function(e){return function(){return o.apply(e,arguments)}}},7751:function(e,t,n){"use strict";var i=n(4475),r=n(4901),o=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(i[e]):i[e]&&i[e][t]}},5966:function(e,t,n){"use strict";var i=n(9306),r=n(4117);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},4475:function(e,t,n){"use strict";var i=function(e){return e&&e.Math===Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||i("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var i=n(9504),r=n(8981),o=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(r(e),t)}},421:function(e){"use strict";e.exports={}},5917:function(e,t,n){"use strict";var i=n(3724),r=n(9039),o=n(4055);e.exports=!i&&!r((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var i=n(9504),r=n(9039),o=n(4576),s=Object,a=i("".split);e.exports=r((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3167:function(e,t,n){"use strict";var i=n(4901),r=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&i(s=t.constructor)&&s!==n&&r(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3706:function(e,t,n){"use strict";var i=n(9504),r=n(4901),o=n(7629),s=i(Function.toString);r(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},1181:function(e,t,n){"use strict";var i,r,o,s=n(8622),a=n(4475),l=n(34),c=n(6699),u=n(9297),h=n(7629),d=n(6119),p=n(421),f="Object already initialized",m=a.TypeError,_=a.WeakMap,g=function(e){return o(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var v=h.state||(h.state=new _);v.get=v.get,v.has=v.has,v.set=v.set,i=function(e,t){if(v.has(e))throw new m(f);return t.facade=e,v.set(e,t),t},r=function(e){return v.get(e)||{}},o=function(e){return v.has(e)}}else{var x=d("state");p[x]=!0,i=function(e,t){if(u(e,x))throw new m(f);return t.facade=e,c(e,x,t),t},r=function(e){return u(e,x)?e[x]:{}},o=function(e){return u(e,x)}}e.exports={set:i,get:r,has:o,enforce:g,getterFor:y}},4376:function(e,t,n){"use strict";var i=n(4576);e.exports=Array.isArray||function(e){return"Array"===i(e)}},1108:function(e,t,n){"use strict";var i=n(6955);e.exports=function(e){var t=i(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var i=n(9039),r=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=l[a(e)];return n===u||n!==c&&(r(t)?i(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var i=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},3925:function(e,t,n){"use strict";var i=n(34);e.exports=function(e){return i(e)||null===e}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var i=n(7751),r=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&o(t.prototype,a(e))}},6198:function(e,t,n){"use strict";var i=n(8014);e.exports=function(e){return i(e.length)}},283:function(e,t,n){"use strict";var i=n(9504),r=n(9039),o=n(4901),s=n(9297),a=n(3724),l=n(350).CONFIGURABLE,c=n(3706),u=n(1181),h=u.enforce,d=u.get,p=String,f=Object.defineProperty,m=i("".slice),_=i("".replace),g=i([].join),y=a&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),v=String(String).split("String"),x=e.exports=function(e,t,n){"Symbol("===m(p(t),0,7)&&(t="["+_(p(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||l&&e.name!==t)&&(a?f(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=h(e);return s(i,"source")||(i.source=g(v,"string"==typeof t?t:"")),e};Function.prototype.toString=x((function(){return o(this)&&d(this).source||c(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?n:t)(i)}},2603:function(e,t,n){"use strict";var i=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},4913:function(e,t,n){"use strict";var i=n(3724),r=n(5917),o=n(8686),s=n(8551),a=n(6969),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";t.f=i?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var i=u(e,t);i&&i[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(s(e),t=a(t),s(n),r)try{return c(e,t,n)}catch(i){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var i=n(3724),r=n(9565),o=n(8773),s=n(6980),a=n(5397),l=n(6969),c=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return s(!r(o.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var i=n(1828),r=n(8727),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){"use strict";var i=n(9297),r=n(4901),o=n(8981),s=n(6119),a=n(2211),l=s("IE_PROTO"),c=Object,u=c.prototype;e.exports=a?c.getPrototypeOf:function(e){var t=o(e);if(i(t,l))return t[l];var n=t.constructor;return r(n)&&t instanceof n?n.prototype:t instanceof c?u:null}},1625:function(e,t,n){"use strict";var i=n(9504);e.exports=i({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var i=n(9504),r=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),l=i([].push);e.exports=function(e,t){var n,i=o(e),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);while(t.length>c)r(i,n=t[c++])&&(~s(u,n)||l(u,n));return u}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){"use strict";var i=n(6706),r=n(8551),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,i){return r(n),o(i),t?e(n,i):n.__proto__=i,n}}():void 0)},4270:function(e,t,n){"use strict";var i=n(9565),r=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!o(a=i(n,e)))return a;if(r(n=e.valueOf)&&!o(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!o(a=i(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var i=n(7751),r=n(9504),o=n(8480),s=n(3717),a=n(8551),l=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?l(t,n(e)):t}},7750:function(e,t,n){"use strict";var i=n(4117),r=TypeError;e.exports=function(e){if(i(e))throw new r("Can't call method on "+e);return e}},6119:function(e,t,n){"use strict";var i=n(5745),r=n(3392),o=i("keys");e.exports=function(e){return o[e]||(o[e]=r(e))}},7629:function(e,t,n){"use strict";var i=n(4475),r=n(9433),o="__core-js_shared__",s=i[o]||r(o,{});e.exports=s},5745:function(e,t,n){"use strict";var i=n(6395),r=n(7629);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"})},4495:function(e,t,n){"use strict";var i=n(7388),r=n(9039),o=n(4475),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},5610:function(e,t,n){"use strict";var i=n(1291),r=Math.max,o=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):o(n,t)}},5854:function(e,t,n){"use strict";var i=n(2777),r=TypeError;e.exports=function(e){var t=i(e,"number");if("number"==typeof t)throw new r("Can't convert number to bigint");return BigInt(t)}},5397:function(e,t,n){"use strict";var i=n(7055),r=n(7750);e.exports=function(e){return i(r(e))}},1291:function(e,t,n){"use strict";var i=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},8014:function(e,t,n){"use strict";var i=n(1291),r=Math.min;e.exports=function(e){var t=i(e);return t>0?r(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var i=n(7750),r=Object;e.exports=function(e){return r(i(e))}},2777:function(e,t,n){"use strict";var i=n(9565),r=n(34),o=n(757),s=n(5966),a=n(4270),l=n(8227),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!r(e)||o(e))return e;var n,l=s(e,u);if(l){if(void 0===t&&(t="default"),n=i(l,e,t),!r(n)||o(n))return n;throw new c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var i=n(2777),r=n(757);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},2140:function(e,t,n){"use strict";var i=n(8227),r=i("toStringTag"),o={};o[r]="z",e.exports="[object z]"===String(o)},655:function(e,t,n){"use strict";var i=n(6955),r=String;e.exports=function(e){if("Symbol"===i(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var i=n(9504),r=0,o=Math.random(),s=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++r+o,36)}},7040:function(e,t,n){"use strict";var i=n(4495);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var i=n(3724),r=n(9039);e.exports=i&&r((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){"use strict";var i=n(4475),r=n(4901),o=i.WeakMap;e.exports=r(o)&&/native code/.test(String(o))},8227:function(e,t,n){"use strict";var i=n(4475),r=n(5745),o=n(9297),s=n(3392),a=n(4495),l=n(7040),c=i.Symbol,u=r("wks"),h=l?c["for"]||c:c&&c.withoutSetter||s;e.exports=function(e){return o(u,e)||(u[e]=a&&o(c,e)?c[e]:h("Symbol."+e)),u[e]}},4114:function(e,t,n){"use strict";var i=n(6518),r=n(8981),o=n(6198),s=n(4527),a=n(6837),l=n(9039),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=c||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=r(this),n=o(t),i=arguments.length;a(n+i);for(var l=0;l<i;l++)t[n]=arguments[l],n++;return s(t,n),n}})},7467:function(e,t,n){"use strict";var i=n(7628),r=n(4644),o=r.aTypedArray,s=r.exportTypedArrayMethod,a=r.getTypedArrayConstructor;s("toReversed",(function(){return i(o(this),a(this))}))},4732:function(e,t,n){"use strict";var i=n(4644),r=n(9504),o=n(9306),s=n(5370),a=i.aTypedArray,l=i.getTypedArrayConstructor,c=i.exportTypedArrayMethod,u=r(i.TypedArrayPrototype.sort);c("toSorted",(function(e){void 0!==e&&o(e);var t=a(this),n=s(l(t),t);return u(n,e)}))},9577:function(e,t,n){"use strict";var i=n(9928),r=n(4644),o=n(1108),s=n(1291),a=n(5854),l=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=l(this),r=s(e),u=o(n)?a(t):+t;return i(n,c(n),r,u)}}["with"],!h)},4979:function(e,t,n){"use strict";var i=n(6518),r=n(4475),o=n(7751),s=n(6980),a=n(4913).f,l=n(9297),c=n(679),u=n(3167),h=n(2603),d=n(5002),p=n(6193),f=n(3724),m=n(6395),_="DOMException",g=o("Error"),y=o(_),v=function(){c(this,x);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),i=new y(t,n),r=new g(t);return r.name=_,a(i,"stack",s(1,p(r.stack,1))),u(i,this,v),i},x=v.prototype=y.prototype,b="stack"in new g(_),w="stack"in new y(1,2),E=y&&f&&Object.getOwnPropertyDescriptor(r,_),T=!!E&&!(E.writable&&E.configurable),S=b&&!T&&!w;i({global:!0,constructor:!0,forced:m||S},{DOMException:S?v:y});var C=o(_),I=C.prototype;if(I.constructor!==C)for(var A in m||a(I,"constructor",s(1,C)),d)if(l(d,A)){var k=d[A],P=k.s;l(C,P)||a(C,P,s(6,k.c))}},4603:function(e,t,n){"use strict";var i=n(6840),r=n(9504),o=n(655),s=n(2812),a=URLSearchParams,l=a.prototype,c=r(l.append),u=r(l["delete"]),h=r(l.forEach),d=r([].push),p=new a("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&i(l,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var i=[];h(this,(function(e,t){d(i,{key:t,value:e})})),s(t,1);var r,a=o(e),l=o(n),p=0,f=0,m=!1,_=i.length;while(p<_)r=i[p++],m||r.key===a?(m=!0,u(this,r.key)):f++;while(f<_)r=i[f++],r.key===a&&r.value===l||c(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var i=n(6840),r=n(9504),o=n(655),s=n(2812),a=URLSearchParams,l=a.prototype,c=r(l.getAll),u=r(l.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||i(l,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var i=c(this,e);s(t,1);var r=o(n),a=0;while(a<i.length)if(i[a++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var i=n(3724),r=n(9504),o=n(2106),s=URLSearchParams.prototype,a=r(s.forEach);i&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){"use strict";n.d(t,{MF:function(){return me},j6:function(){return he},om:function(){return ue},Sx:function(){return ge},Wp:function(){return _e},KO:function(){return ye}});n(4114);var i=n(852),r=n(1363),o=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function _(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(w(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){y=e(y)}function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),w(h.get(this))}:function(...t){return w(e.apply(E(this),t))}:function(t,...n){const i=e.call(E(this),t,...n);return p.set(i,t.sort?t.sort():[t]),w(i)}}function b(e){return"function"===typeof e?x(e):(e instanceof IDBTransaction&&g(e),s(e,c())?new Proxy(e,y):e)}function w(e){if(e instanceof IDBRequest)return _(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=w(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(w(s.result),e.oldVersion,e.newVersion,w(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],I=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=C.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!S.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return I.set(t,o),o}v((e=>({...e,get:(t,n,i)=>A(t,n)||e.get(t,n,i),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const M="@firebase/app",R="0.9.29",D=new r.Vy("@firebase/app"),L="@firebase/app-compat",O="@firebase/analytics-compat",z="@firebase/analytics",B="@firebase/app-check-compat",F="@firebase/app-check",N="@firebase/auth",U="@firebase/auth-compat",j="@firebase/database",V="@firebase/database-compat",q="@firebase/functions",$="@firebase/functions-compat",G="@firebase/installations",W="@firebase/installations-compat",Z="@firebase/messaging",H="@firebase/messaging-compat",X="@firebase/performance",K="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="10.9.0",oe="[DEFAULT]",se={[M]:"fire-core",[L]:"fire-core-compat",[z]:"fire-analytics",[O]:"fire-analytics-compat",[F]:"fire-app-check",[B]:"fire-app-check-compat",[N]:"fire-auth",[U]:"fire-auth-compat",[j]:"fire-rtdb",[V]:"fire-rtdb-compat",[q]:"fire-fn",[$]:"fire-fn-compat",[G]:"fire-iid",[W]:"fire-iid-compat",[Z]:"fire-fcm",[H]:"fire-fcm-compat",[X]:"fire-perf",[K]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new o.FA("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=re;function _e(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!==typeof s||!s)throw pe.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw pe.create("no-options");const a=ae.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(r,a.config))return a;throw pe.create("duplicate-app",{appName:s})}const l=new i.h1(s);for(const i of le.values())l.addComponent(i);const c=new fe(n,r,l);return ae.set(s,c),c}function ge(e=oe){const t=ae.get(e);if(!t&&e===oe&&(0,o.T9)())return _e();if(!t)throw pe.create("no-app",{appName:e});return t}function ye(e,t,n){var r;let o=null!==(r=se[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ue(new i.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="firebase-heartbeat-database",xe=1,be="firebase-heartbeat-store";let we=null;function Ee(){return we||(we=T(ve,xe,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(be)}catch(n){console.warn(n)}}}}).catch((e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})}))),we}async function Te(e){try{const t=await Ee(),n=t.transaction(be),i=await n.objectStore(be).get(Ce(e));return await n.done,i}catch(t){if(t instanceof o.g)D.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Se(e,t){try{const n=await Ee(),i=n.transaction(be,"readwrite"),r=i.objectStore(be);await r.put(t,Ce(e)),await i.done}catch(n){if(n instanceof o.g)D.warn(n.message);else{const e=pe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=1024,Ae=2592e6;class ke{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Pe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:i}=Me(this._heartbeatsCache.heartbeats),r=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Me(e,t=Ie){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){ue(new i.uA("platform-logger",(e=>new k(e)),"PRIVATE")),ue(new i.uA("heartbeat",(e=>new ke(e)),"PRIVATE")),ye(M,R,e),ye(M,R,"esm2017"),ye("fire-js","")}Le("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return c},uA:function(){return r}});var i=n(4046);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return r},Vy:function(){return c}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},8355:function(e,t,n){"use strict";n.d(t,{A:function(){return Vt}});var i={};n.r(i),n.d(i,{hasBrowserEnv:function(){return Re},hasStandardBrowserEnv:function(){return De},hasStandardBrowserWebWorkerEnv:function(){return Le}});n(7467),n(4732),n(9577),n(4114);function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const n=o.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),l=e=>(e=e.toLowerCase(),t=>a(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,h=c("undefined");function d(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const p=l("ArrayBuffer");function f(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t}const m=c("string"),_=c("function"),g=c("number"),y=e=>null!==e&&"object"===typeof e,v=e=>!0===e||!1===e,x=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b=l("Date"),w=l("File"),E=l("Blob"),T=l("FileList"),S=e=>y(e)&&_(e.pipe),C=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||_(e.append)&&("formdata"===(t=a(e))||"object"===t&&_(e.toString)&&"[object FormData]"===e.toString()))},I=l("URLSearchParams"),A=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let i,r;if("object"!==typeof e&&(e=[e]),u(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function P(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;while(r-- >0)if(i=n[r],t===i.toLowerCase())return i;return null}const M=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),R=e=>!h(e)&&e!==M;function D(){const{caseless:e}=R(this)&&this||{},t={},n=(n,i)=>{const r=e&&P(t,i)||i;x(t[r])&&x(n)?t[r]=D(t[r],n):x(n)?t[r]=D({},n):u(n)?t[r]=n.slice():t[r]=n};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&k(arguments[i],n);return t}const L=(e,t,n,{allOwnKeys:i}={})=>(k(t,((t,i)=>{n&&_(t)?e[i]=r(t,n):e[i]=t}),{allOwnKeys:i}),e),O=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),z=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},B=(e,t,n,i)=>{let r,o,a;const l={};if(t=t||{},null==e)return t;do{r=Object.getOwnPropertyNames(e),o=r.length;while(o-- >0)a=r[o],i&&!i(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},F=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},N=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},U=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),j=(e,t)=>{const n=e&&e[Symbol.iterator],i=n.call(e);let r;while((r=i.next())&&!r.done){const n=r.value;t.call(e,n[0],n[1])}},V=(e,t)=>{let n;const i=[];while(null!==(n=e.exec(t)))i.push(n);return i},q=l("HTMLFormElement"),$=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),G=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),W=l("RegExp"),Z=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};k(n,((n,r)=>{let o;!1!==(o=t(n,r,e))&&(i[r]=o||n)})),Object.defineProperties(e,i)},H=e=>{Z(e,((t,n)=>{if(_(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];_(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},X=(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?i(e):i(String(e).split(t)),n},K=()=>{},Y=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",Q="0123456789",ee={DIGIT:Q,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+Q},te=(e=16,t=ee.ALPHA_DIGIT)=>{let n="";const{length:i}=t;while(e--)n+=t[Math.random()*i|0];return n};function ne(e){return!!(e&&_(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ie=e=>{const t=new Array(10),n=(e,i)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=u(e)?[]:{};return k(e,((e,t)=>{const o=n(e,i+1);!h(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)},re=l("AsyncFunction"),oe=e=>e&&(y(e)||_(e))&&_(e.then)&&_(e.catch);var se={isArray:u,isArrayBuffer:p,isBuffer:d,isFormData:C,isArrayBufferView:f,isString:m,isNumber:g,isBoolean:v,isObject:y,isPlainObject:x,isUndefined:h,isDate:b,isFile:w,isBlob:E,isRegExp:W,isFunction:_,isStream:S,isURLSearchParams:I,isTypedArray:U,isFileList:T,forEach:k,merge:D,extend:L,trim:A,stripBOM:O,inherits:z,toFlatObject:B,kindOf:a,kindOfTest:l,endsWith:F,toArray:N,forEachEntry:j,matchAll:V,isHTMLForm:q,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Z,freezeMethods:H,toObjectSet:X,toCamelCase:$,noop:K,toFiniteNumber:Y,findKey:P,global:M,isContextDefined:R,ALPHABET:ee,generateString:te,isSpecCompliantForm:ne,toJSONObject:ie,isAsyncFn:re,isThenable:oe};function ae(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}se.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:se.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const le=ae.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(ae,ce),Object.defineProperty(le,"isAxiosError",{value:!0}),ae.from=(e,t,n,i,r,o)=>{const s=Object.create(le);return se.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ae.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var ue=ae,he=null;function de(e){return se.isPlainObject(e)||se.isArray(e)}function pe(e){return se.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map((function(e,t){return e=pe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function me(e){return se.isArray(e)&&!e.some(de)}const _e=se.toFlatObject(se,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ge(e,t,n){if(!se.isObject(e))throw new TypeError("target must be an object");t=t||new(he||FormData),n=se.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!se.isUndefined(t[e])}));const i=n.metaTokens,r=n.visitor||u,o=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,l=a&&se.isSpecCompliantForm(t);if(!se.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(se.isDate(e))return e.toISOString();if(!l&&se.isBlob(e))throw new ue("Blob is not supported. Use a Buffer instead.");return se.isArrayBuffer(e)||se.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,r){let a=e;if(e&&!r&&"object"===typeof e)if(se.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(se.isArray(e)&&me(e)||(se.isFileList(e)||se.endsWith(n,"[]"))&&(a=se.toArray(e)))return n=pe(n),a.forEach((function(e,i){!se.isUndefined(e)&&null!==e&&t.append(!0===s?fe([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!de(e)||(t.append(fe(r,n,o),c(e)),!1)}const h=[],d=Object.assign(_e,{defaultVisitor:u,convertValue:c,isVisitable:de});function p(e,n){if(!se.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),se.forEach(e,(function(e,i){const o=!(se.isUndefined(e)||null===e)&&r.call(t,e,se.isString(i)?i.trim():i,n,d);!0===o&&p(e,n?n.concat(i):[i])})),h.pop()}}if(!se.isObject(e))throw new TypeError("data must be an object");return p(e),t}var ye=ge;function ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function xe(e,t){this._pairs=[],e&&ye(e,this,t)}const be=xe.prototype;be.append=function(e,t){this._pairs.push([e,t])},be.toString=function(e){const t=e?function(t){return e.call(this,t,ve)}:ve;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var we=xe;function Ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Te(e,t,n){if(!t)return e;const i=n&&n.encode||Ee,r=n&&n.serialize;let o;if(o=r?r(t,n):se.isURLSearchParams(t)?t.toString():new we(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}class Se{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){se.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Ce=Se,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ae=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:we),ke="undefined"!==typeof FormData?FormData:null,Pe="undefined"!==typeof Blob?Blob:null,Me={isBrowser:!0,classes:{URLSearchParams:Ae,FormData:ke,Blob:Pe},protocols:["http","https","file","blob","url","data"]};const Re="undefined"!==typeof window&&"undefined"!==typeof document,De=(e=>Re&&["ReactNative","NativeScript","NS"].indexOf(e)<0)("undefined"!==typeof navigator&&navigator.product),Le=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Oe={...i,...Me};function ze(e,t){return ye(e,new Oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return Oe.isNode&&se.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Be(e){return se.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Fe(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}function Ne(e){function t(e,n,i,r){let o=e[r++];if("__proto__"===o)return!0;const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&se.isArray(i)?i.length:o,a)return se.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&se.isObject(i[o])||(i[o]=[]);const l=t(e,n,i[o],r);return l&&se.isArray(i[o])&&(i[o]=Fe(i[o])),!s}if(se.isFormData(e)&&se.isFunction(e.entries)){const n={};return se.forEachEntry(e,((e,i)=>{t(Be(e),i,n,0)})),n}return null}var Ue=Ne;function je(e,t,n){if(se.isString(e))try{return(t||JSON.parse)(e),se.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}const Ve={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=se.isObject(e);r&&se.isHTMLForm(e)&&(e=new FormData(e));const o=se.isFormData(e);if(o)return i?JSON.stringify(Ue(e)):e;if(se.isArrayBuffer(e)||se.isBuffer(e)||se.isStream(e)||se.isFile(e)||se.isBlob(e))return e;if(se.isArrayBufferView(e))return e.buffer;if(se.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ze(e,this.formSerializer).toString();if((s=se.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ye(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),je(e)):e}],transformResponse:[function(e){const t=this.transitional||Ve.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&se.isString(e)&&(n&&!this.responseType||i)){const n=t&&t.silentJSONParsing,o=!n&&i;try{return JSON.parse(e)}catch(r){if(o){if("SyntaxError"===r.name)throw ue.from(r,ue.ERR_BAD_RESPONSE,this,null,this.response);throw r}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};se.forEach(["delete","get","head","post","put","patch"],(e=>{Ve.headers[e]={}}));var qe=Ve;const $e=se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ge=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&$e[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const We=Symbol("internals");function Ze(e){return e&&String(e).trim().toLowerCase()}function He(e){return!1===e||null==e?e:se.isArray(e)?e.map(He):String(e)}function Xe(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;while(i=n.exec(e))t[i[1]]=i[2];return t}const Ke=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ye(e,t,n,i,r){return se.isFunction(i)?i.call(this,t,n):(r&&(t=n),se.isString(t)?se.isString(i)?-1!==t.indexOf(i):se.isRegExp(i)?i.test(t):void 0:void 0)}function Je(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Qe(e,t){const n=se.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}class et{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=Ze(t);if(!r)throw new Error("header name must be a non-empty string");const o=se.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=He(e))}const o=(e,t)=>se.forEach(e,((e,n)=>r(e,n,t)));return se.isPlainObject(e)||e instanceof this.constructor?o(e,t):se.isString(e)&&(e=e.trim())&&!Ke(e)?o(Ge(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Ze(e),e){const n=se.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Xe(e);if(se.isFunction(t))return t.call(this,e,n);if(se.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ze(e),e){const n=se.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ye(this,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Ze(e),e){const r=se.findKey(n,e);!r||t&&!Ye(n,n[r],r,t)||(delete n[r],i=!0)}}return se.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;while(n--){const r=t[n];e&&!Ye(this,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return se.forEach(this,((i,r)=>{const o=se.findKey(n,r);if(o)return t[o]=He(i),void delete t[r];const s=e?Je(r):String(r).trim();s!==r&&delete t[r],t[s]=He(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return se.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&se.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[We]=this[We]={accessors:{}},n=t.accessors,i=this.prototype;function r(e){const t=Ze(e);n[t]||(Qe(i,e),n[t]=!0)}return se.isArray(e)?e.forEach(r):r(e),this}}et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),se.reduceDescriptors(et.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),se.freezeMethods(et);var tt=et;function nt(e,t){const n=this||qe,i=t||n,r=tt.from(i.headers);let o=i.data;return se.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function it(e){return!(!e||!e.__CANCEL__)}function rt(e,t,n){ue.call(this,null==e?"canceled":e,ue.ERR_CANCELED,t,n),this.name="CanceledError"}se.inherits(rt,ue,{__CANCEL__:!0});var ot=rt;n(4979);function st(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var at=Oe.hasStandardBrowserEnv?{write(e,t,n,i,r,o){const s=[e+"="+encodeURIComponent(t)];se.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),se.isString(i)&&s.push("path="+i),se.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ct(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ut(e,t){return e&&!lt(t)?ct(e,t):t}var ht=Oe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=se.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function dt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pt(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let u=s,h=0;while(u!==o)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-r<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}var ft=pt;function mt(e,t){let n=0;const i=ft(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a),c=o<=s;n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}const _t="undefined"!==typeof XMLHttpRequest;var gt=_t&&function(e){return new Promise((function(t,n){let i=e.data;const r=tt.from(e.headers).normalize();let o,s,{responseType:a,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}if(se.isFormData(i))if(Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv)r.setContentType(!1);else if(!1!==(s=r.getContentType())){const[e,...t]=s?s.split(";").map((e=>e.trim())).filter(Boolean):[];r.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const h=ut(e.baseURL,e.url);function d(){if(!u)return;const i=tt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),r=a&&"text"!==a&&"json"!==a?u.response:u.responseText,o={data:r,status:u.status,statusText:u.statusText,headers:i,config:e,request:u};st((function(e){t(e),c()}),(function(e){n(e),c()}),o),u=null}if(u.open(e.method.toUpperCase(),Te(h,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new ue("Request aborted",ue.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ue("Network Error",ue.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Ie;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ue(t,i.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,u)),u=null},Oe.hasStandardBrowserEnv&&(l&&se.isFunction(l)&&(l=l(e)),l||!1!==l&&ht(h))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&at.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in u&&se.forEach(r.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),se.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&u.addEventListener("progress",mt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",mt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{u&&(n(!t||t.type?new ot(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const p=dt(h);p&&-1===Oe.protocols.indexOf(p)?n(new ue("Unsupported protocol "+p+":",ue.ERR_BAD_REQUEST,e)):u.send(i||null)}))};const yt={http:he,xhr:gt};se.forEach(yt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const vt=e=>`- ${e}`,xt=e=>se.isFunction(e)||null===e||!1===e;var bt={getAdapter:e=>{e=se.isArray(e)?e:[e];const{length:t}=e;let n,i;const r={};for(let o=0;o<t;o++){let t;if(n=e[o],i=n,!xt(n)&&(i=yt[(t=String(n)).toLowerCase()],void 0===i))throw new ue(`Unknown adapter '${t}'`);if(i)break;r[t||"#"+o]=i}if(!i){const e=Object.entries(r).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(vt).join("\n"):" "+vt(e[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return i},adapters:yt};function wt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ot(null,e)}function Et(e){wt(e),e.headers=tt.from(e.headers),e.data=nt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=bt.getAdapter(e.adapter||qe.adapter);return t(e).then((function(t){return wt(e),t.data=nt.call(e,e.transformResponse,t),t.headers=tt.from(t.headers),t}),(function(t){return it(t)||(wt(e),t&&t.response&&(t.response.data=nt.call(e,e.transformResponse,t.response),t.response.headers=tt.from(t.response.headers))),Promise.reject(t)}))}const Tt=e=>e instanceof tt?e.toJSON():e;function St(e,t){t=t||{};const n={};function i(e,t,n){return se.isPlainObject(e)&&se.isPlainObject(t)?se.merge.call({caseless:n},e,t):se.isPlainObject(t)?se.merge({},t):se.isArray(t)?t.slice():t}function r(e,t,n){return se.isUndefined(t)?se.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!se.isUndefined(t))return i(void 0,t)}function s(e,t){return se.isUndefined(t)?se.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Tt(e),Tt(t),!0)};return se.forEach(Object.keys(Object.assign({},e,t)),(function(i){const o=l[i]||r,s=o(e[i],t[i],i);se.isUndefined(s)&&o!==a||(n[i]=s)})),n}const Ct="1.6.7",It={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{It[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const At={};function kt(e,t,n){if("object"!==typeof e)throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;while(r-- >0){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new ue("option "+o+" must be "+n,ue.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ue("Unknown option "+o,ue.ERR_BAD_OPTION)}}It.transitional=function(e,t,n){function i(e,t){return"[Axios v"+Ct+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new ue(i(r," has been removed"+(t?" in "+t:"")),ue.ERR_DEPRECATED);return t&&!At[r]&&(At[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var Pt={assertOptions:kt,validators:It};const Mt=Pt.validators;class Rt{constructor(e){this.defaults=e,this.interceptors={request:new Ce,response:new Ce}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=St(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;void 0!==n&&Pt.assertOptions(n,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),null!=i&&(se.isFunction(i)?t.paramsSerializer={serialize:i}:Pt.assertOptions(i,{encode:Mt.function,serialize:Mt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&se.merge(r.common,r[t.method]);r&&se.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=tt.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Et.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);while(h<u)c=c.then(e[h++],e[h++]);return c}u=s.length;let d=t;h=0;while(h<u){const e=s[h++],t=s[h++];try{d=e(d)}catch(p){t.call(this,p);break}}try{c=Et.call(this,d)}catch(p){return Promise.reject(p)}h=0,u=l.length;while(h<u)c=c.then(l[h++],l[h++]);return c}getUri(e){e=St(this.defaults,e);const t=ut(e.baseURL,e.url);return Te(t,e.params,e.paramsSerializer)}}se.forEach(["delete","get","head","options"],(function(e){Rt.prototype[e]=function(t,n){return this.request(St(n||{},{method:e,url:t,data:(n||{}).data}))}})),se.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(St(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Rt.prototype[e]=t(),Rt.prototype[e+"Form"]=t(!0)}));var Dt=Rt;class Lt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new ot(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Lt((function(t){e=t}));return{token:t,cancel:e}}}var Ot=Lt;function zt(e){return function(t){return e.apply(null,t)}}function Bt(e){return se.isObject(e)&&!0===e.isAxiosError}const Ft={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ft).forEach((([e,t])=>{Ft[t]=e}));var Nt=Ft;function Ut(e){const t=new Dt(e),n=r(Dt.prototype.request,t);return se.extend(n,Dt.prototype,t,{allOwnKeys:!0}),se.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Ut(St(e,t))},n}const jt=Ut(qe);jt.Axios=Dt,jt.CanceledError=ot,jt.CancelToken=Ot,jt.isCancel=it,jt.VERSION=Ct,jt.toFormData=ye,jt.AxiosError=ue,jt.Cancel=jt.CanceledError,jt.all=function(e){return Promise.all(e)},jt.spread=zt,jt.isAxiosError=Bt,jt.mergeConfig=St,jt.AxiosHeaders=tt,jt.formToJSON=e=>Ue(se.isHTMLForm(e)?new FormData(e):e),jt.getAdapter=bt.getAdapter,jt.HttpStatusCode=Nt,jt.default=jt;var Vt=jt},6400:function(e,t,n){"use strict";n.d(t,{Wp:function(){return i.Wp}});var i=n(3405),r="firebase",o="10.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,o,"app")},5600:function(e,t,n){"use strict";n.d(t,{eJ:function(){return Lt},hG:function(){return qt},xI:function(){return Yi},hg:function(){return Ut},x9:function(){return Ot},CI:function(){return Vt},r7:function(){return Bt},eG:function(){return jt}});n(4114),n(4603),n(7566),n(8721);var i=n(4046),r=n(3405),o=n(1363);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.FA("auth","Firebase",l()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function p(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function m(e,...t){return g(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},c()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function x(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function w(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(w()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,x(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){x(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,r,o={}){return D(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),A.fetch()(O(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},k),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw _(e,a,s);f(e,a)}}catch(o){if(o instanceof i.g)throw o;f(e,"network-request-failed",{message:String(o)})}}async function L(e,t,n,i,r={}){const o=await R(e,t,n,i,r);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function O(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?I(e.config,r):`${e.config.apiScheme}://${r}`}function z(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return void 0!==e&&void 0!==e.enterprise}class U{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return z(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return R(e,"GET","/v2/recaptchaConfig",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return R(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return R(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=Z(r);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:$(W(o.auth_time)),issuedAtTime:$(W(o.iat)),expirationTime:$(W(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function Z(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(o){return p("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function H(e){const t=Z(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&K(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,i=await e.getIdToken(),r=await X(e,q(n,{idToken:i}));y(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ne(o.providerUserInfo):[],a=te(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ee(e){const t=(0,i.Ku)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=O(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function re(e,t){return R(e,"POST","/v2/accounts:revokeToken",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ie(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new oe;return n&&(y("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(y("string"===typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(y("number"===typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ae{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:x,isAnonymous:b,providerData:w,stsTokenManager:E}=t;y(v&&E,e,"internal-error");const T=oe.fromJSON(this.name,E);y("string"===typeof v,e,"internal-error"),se(u,e.name),se(h,e.name),y("boolean"===typeof x,e,"internal-error"),y("boolean"===typeof b,e,"internal-error"),se(d,e.name),se(p,e.name),se(f,e.name),se(m,e.name),se(_,e.name),se(g,e.name);const S=new ae({uid:v,auth:e,email:h,emailVerified:x,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(S.providerData=w.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new oe;i.updateFromServerResponse(t);const r=new ae({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Q(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ce(e){x(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(x(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ue.type="NONE";const he=ue;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=de(this.userKey,i.apiKey,r),this.fullPersistenceKey=de("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(ce(he),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||ce(he);const o=de(n,e.config.apiKey,e.name);let s=null;for(const c of t)try{const t=await c._get(o);if(t){const n=ae._fromJSON(e,t);c!==r&&(s=n),r=c;break}}catch(l){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(l){}}))),new pe(r,e,n)):new pe(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ye(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xe(t))return"Blackberry";if(be(t))return"Webos";if(_e(t))return"Safari";if((t.includes("chrome/")||ge(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function _e(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ge(e=(0,i.ZQ)()){return/crios\//i.test(e)}function ye(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function ve(e=(0,i.ZQ)()){return/android/i.test(e)}function xe(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function be(e=(0,i.ZQ)()){return/webos/i.test(e)}function we(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ee(e=(0,i.ZQ)()){var t;return we(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return(0,i.lT)()&&10===document.documentMode}function Se(e=(0,i.ZQ)()){return we(e)||ve(e)||be(e)||xe(e)||/windows phone/i.test(e)||ye(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=fe((0,i.ZQ)());break;case"Worker":n=`${fe((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t={}){return R(e,"GET","/v2/passwordPolicy",M(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=6;class Me{constructor(e){var t,n,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Pe,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.Ku)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ce(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ke(this),t=new Me(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await re(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(s,this,"internal-error"),s.then((()=>{o||r(this.currentUser)})),"function"===typeof t){const r=e.addObserver(t,n,i);return()=>{o=!0,r()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ze(e){Oe=e}function Be(e){return Oe.loadJS(e)}function Fe(){return Oe.recaptchaEnterpriseScript}function Ne(){return Oe.gapiScript}function Ue(e){return`__${e}${Math.floor(1e6*Math.random())}`}const je="recaptcha-enterprise",Ve="NO_RECAPTCHA";class qe{constructor(e){this.type=je,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{j(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new U(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;N(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ve)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&N(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Fe();0!==t.length&&(t+=n),Be(t).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function $e(e,t,n,i=!1){const r=new qe(e);let o;try{o=await r.verify(n)}catch(a){o=await r.verify(n,!0)}const s=Object.assign({},t);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ge(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await $e(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await $e(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function Ze(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ce);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function He(e,t,n){const i=De(e);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Xe(t),{host:s,port:a}=Ke(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Je()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ke(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ye(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return R(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}async function it(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Qe{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new rt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new rt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,t,"signInWithPassword",tt);case"emailLink":return nt(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,n,"signUpPassword",et);case"emailLink":return it(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="http://localhost";class at extends Qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new at(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:st,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",M(e,t))}async function ct(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t))}async function ut(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const ht={["USER_NOT_FOUND"]:"user-not-found"};async function dt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,n),ht)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ct(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ut(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new pt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class _t{constructor(e){var t,n,r,o,s,a;const l=(0,i.I9)((0,i.hp)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=ft(null!==(r=l["mode"])&&void 0!==r?r:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(o=l["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=l["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=mt(e);try{return new _t(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(){this.providerId=gt.PROVIDER_ID}static credential(e,t){return rt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_t.parseLink(t);return y(n,"argument-error"),rt._fromEmailAndCode(e,n.code,n.tenantId)}}gt.PROVIDER_ID="password",gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends yt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends vt{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends vt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return bt.credential(t,n)}catch(i){return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends vt{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch(t){return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com",wt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends vt{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Et.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return L(e,"POST","/v1/accounts:signUp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.TWITTER_SIGN_IN_METHOD="twitter.com",Et.PROVIDER_ID="twitter.com";class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ae._fromIdTokenResponse(e,n,i),o=Ct(n),s=new St({user:r,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ct(n);return new St({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends i.g{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new It(e,t,n,i)}}function At(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw It._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t,n=!1){const i=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await X(e,At(i,r,t,e),n);y(o.idToken,i,"internal-error");const s=Z(o.idToken);y(s,i,"internal-error");const{sub:a}=s;return y(e.uid===a,i,"user-mismatch"),St._forOperation(e,r,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t,n=!1){const i="signIn",r=await At(e,i,t),o=await St._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function Rt(e,t){return Mt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Lt(e,t,n){const i=De(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=Ge(i,r,"signUpPassword",Tt),s=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t})),a=await St._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(a.user),a}function Ot(e,t,n){return Rt((0,i.Ku)(e),gt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zt(e,t){return R(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.Ku)(e),o=await r.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,zt(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find((({providerId:e})=>"password"===e));l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ft(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Nt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Ut(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function jt(e){(0,i.Ku)(e).useDeviceLanguage()}function Vt(e){return(0,i.Ku)(e).signOut()}async function qt(e){return(0,i.Ku)(e).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function Gt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}function Wt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function Zt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}new WeakMap;const Ht="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){const e=(0,i.ZQ)();return _e(e)||we(e)}const Yt=1e3,Jt=10;class Qt extends Xt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kt()&&Ce(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Te()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qt.type="LOCAL";const en=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Xt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tn.type="SESSION";const nn=tn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new on(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await rn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.receivers=[];class an{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=sn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function cn(e){ln().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return"undefined"!==typeof ln()["WorkerGlobalScope"]&&"function"===typeof ln()["importScripts"]}async function hn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function dn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function pn(){return un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="firebaseLocalStorageDb",mn=1,_n="firebaseLocalStorage",gn="fbase_key";class yn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vn(e,t){return e.transaction([_n],t?"readwrite":"readonly").objectStore(_n)}function xn(){const e=indexedDB.deleteDatabase(fn);return new yn(e).toPromise()}function bn(){const e=indexedDB.open(fn,mn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(_n,{keyPath:gn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(_n)?t(n):(n.close(),await xn(),t(await bn()))}))}))}async function wn(e,t,n){const i=vn(e,!0).put({[gn]:t,value:n});return new yn(i).toPromise()}async function En(e,t){const n=vn(e,!1).get(t),i=await new yn(n).toPromise();return void 0===i?null:i.value}function Tn(e,t){const n=vn(e,!0).delete(t);return new yn(n).toPromise()}const Sn=800,Cn=3;class In{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await bn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Cn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=on._getInstance(pn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await hn(),!this.activeServiceWorker)return;this.sender=new an(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&dn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bn();return await wn(e,Ht,"1"),await Tn(e,Ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>En(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Tn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vn(e,!1).getAll();return new yn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}In.type="LOCAL";const An=In;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",M(e,t))}function Pn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}function Mn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ue("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn="recaptcha";async function Dn(e,t,n){var i;const r=await n.verify();try{let o;if(y("string"===typeof r,e,"argument-error"),y(n.type===Rn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){y("enroll"===t.type,e,"internal-error");const n=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;y(n,e,"missing-multi-factor-info");const s=await kn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await lt(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln{constructor(e){this.providerId=Ln.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Dn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ln.credentialFromTaggedObject(t)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(e,t){return t?ce(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.PROVIDER_ID="phone",Ln.PHONE_SIGN_IN_METHOD="phone";class zn extends Qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Bn(e){return Mt(e.auth,new zn(e),e.bypassAuthState)}function Fn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Pt(n,new zn(e),e.bypassAuthState)}async function Nn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),kt(n,new zn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bn;case"linkViaPopup":case"linkViaRedirect":return Nn;case"reauthViaPopup":case"reauthViaRedirect":return Fn;default:f(this.auth,"internal-error")}}resolve(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new C(2e3,1e4);class Vn extends Un{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const e=sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,jn.get())};e()}}Vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn="pendingRedirect",$n=new Map;class Gn extends Un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await Wn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Wn(e,t){const n=Xn(t),i=Hn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Zn(e,t){$n.set(e._key(),t)}function Hn(e){return ce(e._redirectPersistence)}function Xn(e){return de(qn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(e,t,n=!1){const i=De(e),r=On(i,t),o=new Gn(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yn=6e5;class Jn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ti(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ei(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ei({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ti(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ei(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e,t={}){return R(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ri=/^https?/;async function oi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ni(e);for(const i of t)try{if(si(i))return}catch(n){}f(e,"unauthorized-domain")}function si(e){const t=b(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ri.test(n))return!1;if(ii.test(e))return i===e;const r=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+r+"|"+r+")$","i");return o.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new C(3e4,6e4);function li(){const e=ln().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ci(e){return new Promise(((t,n)=>{var i,r,o;function s(){li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{li(),n(m(e,"network-request-failed"))},timeout:ai.get()})}if(null===(r=null===(i=ln().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=ln().gapi)||void 0===o?void 0:o.load)){const t=Ue("iframefcb");return ln()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Be(`${Ne()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ui=null,e}))}let ui=null;function hi(e){return ui=ui||ci(e),ui}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new C(5e3,15e3),pi="__/auth/iframe",fi="emulator/auth/iframe",mi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_i=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gi(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?I(t,fi):`https://${e.config.authDomain}/${pi}`,o={apiKey:t.apiKey,appName:e.name,v:r.MF},s=_i.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function yi(e){const t=await hi(e),n=ln().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:gi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mi,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=m(e,"network-request-failed"),o=ln().setTimeout((()=>{i(r)}),di.get());function s(){ln().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xi=500,bi=600,wi="_blank",Ei="http://localhost";class Ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Si(e,t,n,r=xi,o=bi){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},vi),{width:r.toString(),height:o.toString(),top:s,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(l=ge(u)?wi:n),me(u)&&(t=t||Ei,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ee(u)&&"_self"!==l)return Ci(t||"",l),new Ti(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Ti(d)}function Ci(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="__/auth/handler",Ai="emulator/auth/handler",ki=encodeURIComponent("fac");async function Pi(e,t,n,o,s,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(t instanceof yt){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof vt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];const u=await e._getAppCheckToken(),h=u?`#${ki}=${encodeURIComponent(u)}`:"";return`${Mi(e)}?${(0,i.Am)(c).slice(1)}${h}`}function Mi({config:e}){return e.emulator?I(e,Ai):`https://${e.authDomain}/${Ii}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="webStorageSupport";class Di{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nn,this._completeRedirectFn=Kn,this._overrideRedirectResult=Zn}async _openPopup(e,t,n,i){var r;x(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Pi(e,t,n,b(),i);return Si(e,o,sn())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await Pi(e,t,n,b(),i);return cn(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(x(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yi(e),n=new Jn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ri,{type:Ri},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ri];void 0!==r&&t(!!r),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Se()||_e()||we()}}const Li=Di;class Oi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class zi extends Oi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zi(e)}_finalizeEnroll(e,t,n){return Gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Pn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Bi{constructor(){}static assertion(e){return zi._fromCredential(e)}}Bi.FACTOR_ID="phone";class Fi{static assertionForEnrollment(e,t){return Ni._fromSecret(e,t)}static assertionForSignIn(e,t){return Ni._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;y("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await Wt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ui._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Fi.FACTOR_ID="totp";class Ni extends Oi{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ni(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ni(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),Zt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Mn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ui{constructor(e,t,n,i,r,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ui(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(ji(e)||ji(t))&&(i=!0),i&&(ji(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ji(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ji(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Vi="@firebase/auth",qi="1.6.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wi(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=i.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},c=new Re(i,r,o,l);return Ze(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new $i(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Vi,qi,Gi(e)),(0,r.KO)(Vi,qi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=300,Hi=(0,i.XA)("authIdTokenMaxAge")||Zi;let Xi=null;const Ki=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Hi)return;const r=null===n||void 0===n?void 0:n.token;Xi!==r&&(Xi=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Yi(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=We(e,{popupRedirectResolver:Li,persistence:[An,en,nn]}),o=(0,i.XA)("authTokenSyncURL");if(o&&o.match(/^\/[^\/].*/)){const e=Ki(o);Nt(n,e,(()=>e(n.currentUser))),Ft(n,(t=>e(t)))}const s=(0,i.Tj)("auth");return s&&He(n,`http://${s}`),n}function Ji(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}ze({loadJS(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Ji().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Wi("Browser")},4161:function(e,t,n){"use strict";n.d(t,{Jt:function(){return Js},C3:function(){return ha},Zy:function(){return na},KR:function(){return Zs},TF:function(){return Xs},hZ:function(){return Ks},yo:function(){return Ys}});n(4114);var i=n(3405),r=n(852),o=n(4046),s=n(1363);const a="@firebase/database",l="1.0.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),m=p("sessionStorage"),_=new s.Vy("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,o.kj)(e),n=new o.gz;n.update(t);const i=n.digest();return o.K3.encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?(0,o.As)(i):i,t+=" "}return t};let x=null,b=!0;const w=function(e,t){(0,o.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=s.$b.VERBOSE,x=_.log.bind(_),t&&m.set("logging_enabled",!0)):"function"===typeof e?x=e:(x=null,m.remove("logging_enabled"))},E=function(...e){if(!0===b&&(b=!1,null===x&&!0===m.get("logging_enabled")&&w(!0)),x){const t=v.apply(null,e);x(t)}},T=function(e){return function(...t){E(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);_.error(t)},C=function(...e){const t=`FIREBASE FATAL ERROR: ${v(...e)}`;throw _.error(t),new Error(t)},I=function(...e){const t="FIREBASE WARNING: "+v(...e);_.warn(t)},A=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if((0,o.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},M="[MIN_NAME]",R="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===M||t===R)return-1;if(t===M||e===R)return 1;{const n=W(e),i=W(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},O=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.As)(t))},z=function(e){if("object"!==typeof e||null===e)return(0,o.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.As)(t[i]),n+=":",n+=z(e[t[i]]);return n+="}",n},B=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const N=function(e){(0,o.vA)(!k(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,a,l,c;0===e?(s=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const q=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,G=2147483647,W=function(e){if(q.test(e)){const t=Number(e);if(t>=$&&t<=G)return t}return null},Z=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw I("Exception was thrown by user callback.",e),t}),Math.floor(0))}},H=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},X=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){I(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',I(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,o.vA)("string"===typeof t,"typeof type must == string"),(0,o.vA)("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return F(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},me={};function _e(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Z((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",xe="close",be="pLPCommand",we="pRTLPCB",Ee="id",Te="pw",Se="ser",Ce="cb",Ie="seg",Ae="ts",ke="d",Pe="dframe",Me=1870,Re=30,De=Me-Re,Le=25e3,Oe=3e4;class ze{constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Oe)),P((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Be(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==xe)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ve]="t",e[Se]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ce]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Q,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ze.forceAllow_=!0}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){return!(0,o.$g)()&&(!!ze.forceAllow_||!ze.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.KA)(t),i=B(n,De);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Ee]=e,n[Te]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Be{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Be.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Te]=this.myPW,e[Se]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Me))break;{const e=this.pendingSegs.shift();n=n+"&"+Ie+i+"="+e.seg+"&"+Ae+i+"="+e.ts+"&"+ke+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Le)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,o.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ne=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class je{constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=_e(t),this.connURL=je.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s[ee]=Q,!(0,o.$g)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(s[ne]=ie),t&&(s[te]=t),n&&(s[oe]=n),i&&(s[ae]=i),r&&(s[se]=r),de(e,le,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,o.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Q}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_MAPBOX_ACCESS_TOKEN:"pk.eyJ1IjoidGlibzYxIiwiYSI6ImNsc2ttaWd5NDA0anEya3JuN2F4cWJheDIifQ.8Y7HydMrAImeaYD6xPm_vg",VUE_APP_RAPIDAPI_KEY:"5818b544fbmsh184225c5e112a26p1525a3jsn5a009fd1a04f",BASE_URL:"/vuejs-projet-web/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ue(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!je.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=B(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ne))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ze,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe=6e4,$e=5e3,Ge=10240,We=102400,Ze="t",He="d",Xe="s",Ke="r",Ye="e",Je="o",Qe="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=X((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>We?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ge?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ze in e){const t=e[Ze];t===Qe?this.upgradeIfSecondaryHealthy_():t===Ke?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=O("t",e),n=O("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=O("t",e),n=O("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=O(Ze,e);if(He in e){const n=e[He];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Xe?this.onConnectionShutdown_(n):t===Ke?this.onReset_(n):t===Ye?S("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Q!==n&&I("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),X((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(qe))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):X((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor($e))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,o.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function xt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return xt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){const n=_t(e,0),i=_t(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=D(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Et(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.OE)(this.parts_[n]);It(this)}}function St(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.OE)(t),It(e)}function Ct(e){const t=e.parts_.pop();e.byteLength_-=(0,o.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function It(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+At(e))}function At(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new kt}getInitialEvent(e){return(0,o.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=1e3,Mt=3e5,Rt=3e4,Dt=1.3,Lt=3e4,Ot="server_kill",zt=3;class Bt extends rt{constructor(e,t,n,i,r,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pt,this.maxReconnectDelay_=Mt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,o.As)(r)),(0,o.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new o.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.vA)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},o="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(o,r,(r=>{const o=r["d"],s=r["s"];Bt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.gR)(e,"w")){const n=(0,o.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();I(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(o,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o["h"]=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=Pt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,r=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,n())},c=function(e){(0,o.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{I(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ot)}),r))}catch(S){this.log_("Failed to get token: "+S),s||(this.repoInfo_.nodeAdmin&&I(S),l())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>z(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,(0,o.jZ)()?e["framework.cordova"]=1:(0,o.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.Im)(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0,Bt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(M,e),i=new Ft(M,t);return 0!==this.compare(n,i)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class jt extends Nt{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,o.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(R,Ut)}makePost(e,t){return(0,o.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,Ut)}toString(){return".key"}}const Vt=new jt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:$t.RED,this.left=null!=i?i:Wt.EMPTY_NODE,this.right=null!=r?r:Wt.EMPTY_NODE}copy(e,t,n,i,r){return new $t(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Wt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0,$t.BLACK=!1;class Gt{copy(e,t,n,i,r){return this}insert(e,t,n){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,t=Wt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Wt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e,t){return D(e.name,t.name)}function Ht(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;function Kt(e){Xt=e}Wt.EMPTY_NODE=new Gt;const Yt=function(e){return"number"===typeof e?"number:"+N(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.gR)(t,".sv"),"Priority must be a string or number.")}else(0,o.vA)(e===Xt||e.isEmpty(),"priority of unexpected type.");(0,o.vA)(e===Xt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?N(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,o.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),r=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.vA)(i>=0,"Unknown leaf type: "+t),(0,o.vA)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Nt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?D(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(R,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new $t(a,s.node,$t.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=r(t,l),u=r(l+1,i);return s=e[l],a=n?n(s):s,new $t(a,s.node,$t.BLACK,c,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const c=r(o+1,a),u=e[o],h=n?n(u):u;l(new $t(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,$t.BLACK):(a(i,$t.BLACK),a(i,$t.RED))}return o},s=new cn(e.length),a=o(s);return new Wt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.vA)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new pn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,o.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Wt?t:null}hasIndex(e){return(0,o.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.vA)(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ft.Wrap);let s,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();s=i?un(n,e.getCompare()):dn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=s,new pn(u,c)}addToIndexes(e,t){const n=(0,o.kH)(this.indexes_,((n,i)=>{const r=(0,o.yw)(this.indexSet_,i);if((0,o.vA)(r,"Missing index implementation for "+i),n===dn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ft.Wrap);let o=i.getNext();while(o)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),un(n,r.getCompare())}return dn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ft(e.name,i))),r.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.kH)(this.indexes_,(n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new Ft(e.name,i)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&(0,o.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new mn(new Wt(Ht),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?fn:this.priorityNode_;return new mn(i,o,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(an,((o,s)=>{t[o]=s.val(e),n++,r&&mn.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends mn{constructor(){super(new Wt(Ht),mn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const gn=new _n;Object.defineProperties(Ft,{MIN:{value:new Ft(M,mn.EMPTY_NODE)},MAX:{value:new Ft(R,gn)}}),jt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Kt(gn),on(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function vn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,vn(t))}if(e instanceof Array||!yn){let n=mn.EMPTY_NODE;return F(e,((t,i)=>{if((0,o.gR)(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(vn(t))}{const n=[];let i=!1;const r=e;if(F(r,((e,t)=>{if("."!==e.substring(0,1)){const r=vn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ft(e,r)))}})),0===n.length)return mn.EMPTY_NODE;const o=un(n,Zt,(e=>e.name),Ht);if(i){const e=un(n,an.getCompare());return new mn(o,vn(t),new pn({".priority":e},{".priority":an}))}return new mn(o,vn(t),pn.Default)}}rn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn extends Nt{constructor(e){super(),this.indexPath_=e,(0,o.vA)(!vt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?D(e.name,t.name):r}makePost(e,t){const n=vn(e),i=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,i)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Ft(R,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Nt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=vn(e);return new Ft(t,n)}toString(){return".value"}}const wn=new bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Sn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Cn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function In(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){(0,o.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Sn(t,a)):(0,o.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Tn(t,n)):s.trackChildChange(Cn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,i)=>{t.hasChild(e)||n.trackChildChange(Sn(e,i))})),t.isLeafNode()||t.forEachChild(an,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Cn(t,i,r))}else n.trackChildChange(Tn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.indexedFilter_=new An(e.getIndex()),this.index_=e.getIndex(),this.startPost_=kn.getStartPost_(e),this.endPost_=kn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,o){return this.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(mn.EMPTY_NODE);const r=this;return t.forEachChild(an,((e,t)=>{r.matches(new Ft(e,t))||(i=i.updateImmediateChild(e,mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new kn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(mn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.vA)(a.numChildren()===this.limit_,"");const l=new Ft(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=i.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(Cn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Sn(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),i=null!=o&&this.rangedFilter_.matches(o);return i?(null!=r&&r.trackChildChange(Tn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(c,l)>=0?(null!=r&&(r.trackChildChange(Sn(c.name,c.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,mn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:M}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Mn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rn(e){return e.loadsAllData()?new An(e.getIndex()):e.hasLimit()?new Pn(e):new kn(e)}function Dn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===an?n="$priority":e.index_===wn?n="$value":e.index_===Vt?n="$key":((0,o.vA)(e.index_ instanceof xn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ln(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=On.getListenId_(e,n),a={};this.listens_[s]=a;const l=Dn(e._queryParams);this.restRequest_(r+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),(0,o.yw)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=On.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Dn(e._queryParams),n=e._path.toString(),i=new o.cY;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.Am)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.$L)(a.responseText)}catch(e){I("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&I("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return{value:null,children:new Map}}function Fn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Bn());const r=e.children.get(i);t=pt(t),Fn(r,t,n)}}function Nn(e,t,n){null!==e.value?n(t,e.value):Un(e,((e,i)=>{const r=new ct(t.toString()+"/"+e);Nn(i,r,n)}))}function Un(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e4,qn=3e4,$n=3e5;class Gn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jn(e);const n=Vn+(qn-Vn)*Math.random();X(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,o.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),X(this.reportStats_.bind(this),Math.floor(2*Math.random()*$n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;function Zn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Wn||(Wn={}));class Kn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Wn.ACK_USER_WRITE,this.source=Zn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return(0,o.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Kn(ut(),t,this.revert)}}return(0,o.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Kn(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.source=e,this.path=t,this.type=Wn.LISTEN_COMPLETE}operationForChild(e){return vt(this.path)?new Yn(this.source,ut()):new Yn(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Wn.OVERWRITE}operationForChild(e){return vt(this.path)?new Jn(this.source,ut(),this.snap.getImmediateChild(e)):new Jn(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Wn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Jn(this.source,ut(),t.value):new Qn(this.source,ut(),t)}return(0,o.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ni(e,t,n,i){const r=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(In(t.childName,t.snapshotNode))})),ii(e,r,"child_removed",t,i,n),ii(e,r,"child_added",t,i,n),ii(e,r,"child_moved",o,i,n),ii(e,r,"child_changed",t,i,n),ii(e,r,"value",t,i,n),r}function ii(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>oi(e,t,n))),s.forEach((n=>{const i=ri(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ri(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function oi(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.Hk)("Should only compare child_ events.");const i=new Ft(t.childName,t.snapshotNode),r=new Ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){return{eventCache:e,serverCache:t}}function ai(e,t,n,i){return si(new ei(t,n,i),e.serverCache)}function li(e,t,n,i){return si(e.eventCache,new ei(t,n,i))}function ci(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ui(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;const di=()=>(hi||(hi=new Wt(L)),hi);class pi{constructor(e,t=di()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return F(e,((e,n)=>{t=t.set(new ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(vt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=yt(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(vt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new pi(null)}}set(e,t){if(vt(e))return new pi(t,this.children);{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.set(pt(e),t),o=this.children.insert(n,r);return new pi(this.value,o)}}remove(e){if(vt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new pi(null):new pi(this.value,r)}return this}}get(e){if(vt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.setTree(pt(e),t);let o;return o=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new pi(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(yt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),yt(t,i),n):new pi(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new pi(null))}}function mi(e,t,n){if(vt(t))return new fi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=xt(r,t);return o=o.updateChild(s,n),new fi(e.writeTree_.set(r,o))}{const i=new pi(n),r=e.writeTree_.setTree(t,i);return new fi(r)}}}function _i(e,t,n){let i=e;return F(n,((e,n)=>{i=mi(i,yt(t,e),n)})),i}function gi(e,t){if(vt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new fi(n)}}function yi(e,t){return null!=vi(e,t)}function vi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(xt(n.path,t)):null}function xi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new Ft(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))})),t}function bi(e,t){if(vt(t))return e;{const n=vi(e,t);return new fi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function wi(e){return e.writeTree_.isEmpty()}function Ei(e,t){return Ti(ut(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,o.vA)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ti(yt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e,t){return Hi(t,e)}function Ci(e,t,n,i,r){(0,o.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=mi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ii(e,t,n,i){(0,o.vA)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=_i(e.visibleWrites,t,n),e.lastWriteId=i}function Ai(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function ki(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Pi(t,i.path)?r=!1:Et(i.path,t.path)&&(s=!0)),a--}if(r){if(s)return Mi(e),!0;if(i.snap)e.visibleWrites=gi(e.visibleWrites,i.path);else{const t=i.children;F(t,(t=>{e.visibleWrites=gi(e.visibleWrites,yt(i.path,t))}))}return!0}return!1}function Pi(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(yt(e.path,n),t))return!0;return!1}function Mi(e){e.visibleWrites=Di(e.allWrites,Ri,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ri(e){return e.visible}function Di(e,t,n){let i=fi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Et(n,e)?(t=xt(n,e),i=mi(i,t,s.snap)):Et(e,n)&&(t=xt(e,n),i=mi(i,ut(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.Hk)("WriteRecord should have .snap or .children");if(Et(n,e))t=xt(n,e),i=_i(i,t,s.children);else if(Et(e,n))if(t=xt(e,n),vt(t))i=_i(i,ut(),s.children);else{const e=(0,o.yw)(s.children,ht(t));if(e){const n=e.getChild(pt(t));i=mi(i,ut(),n)}}}}}return i}function Li(e,t,n,i,r){if(i||r){const o=bi(e.visibleWrites,t);if(!r&&wi(o))return n;if(r||null!=n||yi(o,ut())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},s=Di(e.allWrites,o,t),a=n||mn.EMPTY_NODE;return Ei(s,a)}return null}{const i=vi(e.visibleWrites,t);if(null!=i)return i;{const i=bi(e.visibleWrites,t);if(wi(i))return n;if(null!=n||yi(i,ut())){const e=n||mn.EMPTY_NODE;return Ei(i,e)}return null}}}function Oi(e,t,n){let i=mn.EMPTY_NODE;const r=vi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(an,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=bi(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=Ei(bi(r,new ct(e)),t);i=i.updateImmediateChild(e,n)})),xi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=bi(e.visibleWrites,t);return xi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function zi(e,t,n,i,r){(0,o.vA)(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=yt(t,n);if(yi(e.visibleWrites,s))return null;{const t=bi(e.visibleWrites,s);return wi(t)?r.getChild(n):Ei(t,r.getChild(n))}}function Bi(e,t,n,i){const r=yt(t,n),o=vi(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n)){const t=bi(e.visibleWrites,r);return Ei(t,i.getNode().getImmediateChild(n))}return null}function Fi(e,t){return vi(e.visibleWrites,t)}function Ni(e,t,n,i,r,o,s){let a;const l=bi(e.visibleWrites,t),c=vi(l,ut());if(null!=c)a=c;else{if(null==n)return[];a=Ei(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function Ui(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function ji(e,t,n,i){return Li(e.writeTree,e.treePath,t,n,i)}function Vi(e,t){return Oi(e.writeTree,e.treePath,t)}function qi(e,t,n,i){return zi(e.writeTree,e.treePath,t,n,i)}function $i(e,t){return Fi(e.writeTree,yt(e.treePath,t))}function Gi(e,t,n,i,r,o){return Ni(e.writeTree,e.treePath,t,n,i,r,o)}function Wi(e,t,n){return Bi(e.writeTree,e.treePath,t,n)}function Zi(e,t){return Hi(yt(e.treePath,t),e.writeTree)}function Hi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Cn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Sn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,o.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Cn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Yi=new Ki;class Ji{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ui(this.viewCache_),r=Gi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){return{filter:e}}function er(e,t){(0,o.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function tr(e,t,n,i,r){const s=new Xi;let a,l;if(n.type===Wn.OVERWRITE){const c=n;c.source.fromUser?a=or(e,t,c.path,c.snap,i,r,s):((0,o.vA)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!vt(c.path),a=rr(e,t,c.path,c.snap,i,r,l,s))}else if(n.type===Wn.MERGE){const c=n;c.source.fromUser?a=ar(e,t,c.path,c.children,i,r,s):((0,o.vA)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=cr(e,t,c.path,c.children,i,r,l,s))}else if(n.type===Wn.ACK_USER_WRITE){const o=n;a=o.revert?dr(e,t,o.path,i,r,s):ur(e,t,o.path,o.affectedTree,i,r,s)}else{if(n.type!==Wn.LISTEN_COMPLETE)throw(0,o.Hk)("Unknown operation type: "+n.type);a=hr(e,t,n.path,i,s)}const c=s.getChanges();return nr(t,a,c),{viewCache:a,changes:c}}function nr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=ci(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(En(ci(t)))}}function ir(e,t,n,i,r,s){const a=t.eventCache;if(null!=$i(i,n))return t;{let l,c;if(vt(n))if((0,o.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ui(t),r=n instanceof mn?n:mn.EMPTY_NODE,o=Vi(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=ji(i,ui(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){(0,o.vA)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const s=qi(i,n,r,c);l=null!=s?e.filter.updatePriority(r,s):a.getNode()}else{const o=pt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=qi(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=Wi(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,o,r,s):a.getNode()}}return ai(t,l,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function rr(e,t,n,i,r,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(vt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ht(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),o=l.getNode().getImmediateChild(e),s=o.updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,r,Yi,null)}const h=li(t,c,l.isFullyInitialized()||vt(n),u.filtersNodes()),d=new Ji(r,h,o);return ir(e,h,n,r,d,a)}function or(e,t,n,i,r,o,s){const a=t.eventCache;let l,c;const u=new Ji(r,t,o);if(vt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=ai(t,c,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=ai(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=pt(n),c=a.getNode().getImmediateChild(r);let h;if(vt(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,i):mn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),r,h,o,u,s);l=ai(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function sr(e,t){return e.eventCache.isCompleteForChild(t)}function ar(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,l)=>{const c=yt(n,i);sr(t,ht(c))&&(a=or(e,a,c,l,r,o,s))})),i.foreach(((i,l)=>{const c=yt(n,i);sr(t,ht(c))||(a=or(e,a,c,l,r,o,s))})),a}function lr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function cr(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=vt(n)?i:new pi(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=lr(e,l,i);c=rr(e,c,new ct(n),u,r,o,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=lr(e,l,i);c=rr(e,c,new ct(n),u,r,o,s,a)}})),c}function ur(e,t,n,i,r,o,s){if(null!=$i(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(vt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rr(e,t,n,l.getNode().getChild(n),r,o,a,s);if(vt(n)){let i=new pi(null);return l.getNode().forEachChild(Vt,((e,t)=>{i=i.set(new ct(e),t)})),cr(e,t,n,i,r,o,a,s)}return t}{let c=new pi(null);return i.foreach(((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),cr(e,t,n,c,r,o,a,s)}}function hr(e,t,n,i,r){const o=t.serverCache,s=li(t,o.getNode(),o.isFullyInitialized()||vt(n),o.isFiltered());return ir(e,s,n,i,Yi,r)}function dr(e,t,n,i,r,s){let a;if(null!=$i(i,n))return t;{const l=new Ji(i,t,r),c=t.eventCache.getNode();let u;if(vt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=ji(i,ui(t));else{const e=t.serverCache.getNode();(0,o.vA)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Vi(i,e)}u=e.filter.updateFullNode(c,n,s)}else{const r=ht(n);let o=Wi(i,r,t.serverCache);null==o&&t.serverCache.isCompleteForChild(r)&&(o=c.getImmediateChild(r)),u=null!=o?e.filter.updateChild(c,r,o,pt(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,mn.EMPTY_NODE,pt(n),l,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ji(i,ui(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=$i(i,ut()),ai(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new An(n.getIndex()),r=Rn(n);this.processor_=Qi(r);const o=t.serverCache,s=t.eventCache,a=i.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),c=new ei(a,o.isFullyInitialized(),i.filtersNodes()),u=new ei(l,s.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(u,c),this.eventGenerator_=new ti(this.query_)}get query(){return this.query_}}function fr(e){return e.viewCache_.serverCache.getNode()}function mr(e){return ci(e.viewCache_)}function _r(e,t){const n=ui(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gr(e){return 0===e.eventRegistrations_.length}function yr(e,t){e.eventRegistrations_.push(t)}function vr(e,t,n){const i=[];if(n){(0,o.vA)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function xr(e,t,n,i){t.type===Wn.MERGE&&null!==t.source.queryId&&((0,o.vA)(ui(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.vA)(ci(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=tr(e.processor_,r,t,n,i);return er(e.processor_,s.viewCache),(0,o.vA)(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,wr(e,s.changes,s.viewCache.eventCache.getNode(),null)}function br(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,((e,t)=>{i.push(Tn(e,t))}))}return n.isFullyInitialized()&&i.push(En(n.getNode())),wr(e,i,n.getNode(),t)}function wr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ni(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er,Tr;class Sr{constructor(){this.views=new Map}}function Cr(e){(0,o.vA)(!Er,"__referenceConstructor has already been defined"),Er=e}function Ir(){return(0,o.vA)(Er,"Reference.ts has not been loaded"),Er}function Ar(e){return 0===e.views.size}function kr(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return(0,o.vA)(null!=s,"SyncTree gave us an op for an invalid query."),xr(s,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(xr(o,t,n,i));return r}}function Pr(e,t,n,i,r){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=ji(n,r?i:null),o=!1;e?o=!0:i instanceof mn?(e=Vi(n,i),o=!1):(e=mn.EMPTY_NODE,o=!1);const s=si(new ei(e,o,!1),new ei(i,r,!1));return new pr(t,s)}return s}function Mr(e,t,n,i,r,o){const s=Pr(e,t,i,r,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),yr(s,n),br(s,n)}function Rr(e,t,n,i){const r=t._queryIdentifier,o=[];let s=[];const a=Br(e);if("default"===r)for(const[l,c]of e.views.entries())s=s.concat(vr(c,n,i)),gr(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const t=e.views.get(r);t&&(s=s.concat(vr(t,n,i)),gr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Br(e)&&o.push(new(Ir())(t._repo,t._path)),{removed:o,events:s}}function Dr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Lr(e,t){let n=null;for(const i of e.views.values())n=n||_r(i,t);return n}function Or(e,t){const n=t._queryParams;if(n.loadsAllData())return Fr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function zr(e,t){return null!=Or(e,t)}function Br(e){return null!=Fr(e)}function Fr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){(0,o.vA)(!Tr,"__referenceConstructor has already been defined"),Tr=e}function Ur(){return(0,o.vA)(Tr,"Reference.ts has not been loaded"),Tr}let jr=1;class Vr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=Ui(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qr(e,t,n,i,r){return Ci(e.pendingWriteTree_,t,n,i,r),r?no(e,new Jn(Zn(),t,n)):[]}function $r(e,t,n,i){Ii(e.pendingWriteTree_,t,n,i);const r=pi.fromObject(n);return no(e,new Qn(Zn(),t,r))}function Gr(e,t,n=!1){const i=Ai(e.pendingWriteTree_,t),r=ki(e.pendingWriteTree_,t);if(r){let t=new pi(null);return null!=i.snap?t=t.set(ut(),!0):F(i.children,(e=>{t=t.set(new ct(e),!0)})),no(e,new Kn(i.path,t,n))}return[]}function Wr(e,t,n){return no(e,new Jn(Hn(),t,n))}function Zr(e,t,n){const i=pi.fromObject(n);return no(e,new Qn(Hn(),t,i))}function Hr(e,t){return no(e,new Yn(Hn(),t))}function Xr(e,t,n){const i=lo(e,n);if(i){const n=co(i),r=n.path,o=n.queryId,s=xt(r,t),a=new Yn(Xn(o),s);return uo(e,r,a)}return[]}function Kr(e,t,n,i,r=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||zr(s,t))){const l=Rr(s,t,n,i);Ar(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(o,((e,t)=>Br(t)));if(n&&!r){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=ho(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,o=oo(e,i);e.listenProvider_.startListening(po(r),so(e,r),o.hashFn,o.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(po(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(ao(t));e.listenProvider_.stopListening(po(t),n)}))}fo(e,c)}return a}function Yr(e,t,n,i){const r=lo(e,i);if(null!=r){const i=co(r),o=i.path,s=i.queryId,a=xt(o,t),l=new Jn(Xn(s),a,n);return uo(e,o,l)}return[]}function Jr(e,t,n,i){const r=lo(e,i);if(r){const i=co(r),o=i.path,s=i.queryId,a=xt(o,t),l=pi.fromObject(n),c=new Qn(Xn(s),a,l);return uo(e,o,c)}return[]}function Qr(e,t,n,i=!1){const r=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=xt(e,r);s=s||Lr(t,n),a=a||Br(t)}));let l,c=e.syncPointTree_.get(r);if(c?(a=a||Br(c),s=s||Lr(c,ut())):(c=new Sr,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)l=!0;else{l=!1,s=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Lr(t,ut());n&&(s=s.updateImmediateChild(e,n))}))}const u=zr(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=ao(t);(0,o.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=mo();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Si(e.pendingWriteTree_,r);let d=Mr(c,t,n,h,s,l);if(!u&&!a&&!i){const n=Or(c,t);d=d.concat(_o(e,t,n))}return d}function eo(e,t,n){const i=!0,r=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=xt(e,t),r=Lr(n,i);if(r)return r}));return Li(r,t,o,n,i)}function to(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=xt(e,n);i=i||Lr(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Lr(r,ut()):(r=new Sr,e.syncPointTree_=e.syncPointTree_.set(n,r));const o=null!=i,s=o?new ei(i,!0,!1):null,a=Si(e.pendingWriteTree_,t._path),l=Pr(r,t,a,o?s.getNode():mn.EMPTY_NODE,o);return mr(l)}function no(e,t){return io(t,e.syncPointTree_,null,Si(e.pendingWriteTree_,ut()))}function io(e,t,n,i){if(vt(e.path))return ro(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Lr(r,ut()));let o=[];const s=ht(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Zi(i,s);o=o.concat(io(a,l,e,t))}return r&&(o=o.concat(kr(r,e,i,n))),o}}function ro(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Lr(r,ut()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=Zi(i,t),l=e.operationForChild(t);l&&(o=o.concat(ro(l,r,s,a)))})),r&&(o=o.concat(kr(r,e,i,n))),o}function oo(e,t){const n=t.query,i=so(e,n);return{hashFn:()=>{const e=fr(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Xr(e,n._path,i):Hr(e,n._path);{const i=V(t,n);return Kr(e,n,null,i)}}}}function so(e,t){const n=ao(t);return e.queryToTagMap.get(n)}function ao(e){return e._path.toString()+"$"+e._queryIdentifier}function lo(e,t){return e.tagToQueryMap.get(t)}function co(e){const t=e.indexOf("$");return(0,o.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function uo(e,t,n){const i=e.syncPointTree_.get(t);(0,o.vA)(i,"Missing sync point for query tag that we're tracking");const r=Si(e.pendingWriteTree_,t);return kr(i,n,r,null)}function ho(e){return e.fold(((e,t,n)=>{if(t&&Br(t)){const e=Fr(t);return[e]}{let e=[];return t&&(e=Dr(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}function po(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ur())(e._repo,e._path):e}function fo(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ao(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function mo(){return jr++}function _o(e,t,n){const i=t._path,r=so(e,t),s=oo(e,n),a=e.listenProvider_.startListening(po(t),r,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(i);if(r)(0,o.vA)(!Br(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!vt(e)&&t&&Br(t))return[Fr(t).query];{let e=[];return t&&(e=e.concat(Dr(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(po(i),so(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new go(t)}node(){return this.node_}}class yo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new yo(this.syncTree_,t)}node(){return eo(this.syncTree_,this.path_)}}const vo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},xo=function(e,t,n){return e&&"object"===typeof e?((0,o.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?bo(e[".sv"],t,n):"object"===typeof e[".sv"]?wo(e[".sv"],t):void(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},bo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.vA)(!1,"Unexpected server value: "+e)}},wo=function(e,t,n){e.hasOwnProperty("increment")||(0,o.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,o.vA)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,o.vA)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r,a=s.getValue();return"number"!==typeof a?i:a+i},Eo=function(e,t,n,i){return So(t,new yo(n,e),i)},To=function(e,t,n){return So(e,new go(t),n)};function So(e,t,n){const i=e.getPriority().val(),r=xo(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=xo(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new nn(o,vn(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new nn(r))),i.forEachChild(an,((e,i)=>{const r=So(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Io(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ht(n);while(null!==r){const e=(0,o.yw)(i.node.children,r)||{children:{},childCount:0};i=new Co(r,i,e),n=pt(n),r=ht(n)}return i}function Ao(e){return e.node.value}function ko(e,t){e.node.value=t,zo(e)}function Po(e){return e.node.childCount>0}function Mo(e){return void 0===Ao(e)&&!Po(e)}function Ro(e,t){F(e.node.children,((n,i)=>{t(new Co(n,e,i))}))}function Do(e,t,n,i){n&&!i&&t(e),Ro(e,(e=>{Do(e,t,!0,i)})),n&&i&&t(e)}function Lo(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Oo(e){return new ct(null===e.parent?e.name:Oo(e.parent)+"/"+e.name)}function zo(e){null!==e.parent&&Bo(e.parent,e.name,e)}function Bo(e,t,n){const i=Mo(n),r=(0,o.gR)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,zo(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,zo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=/[\[\].#$\/\u0000-\u001F\u007F]/,No=/[\[\].#$\u0000-\u001F\u007F]/,Uo=10485760,jo=function(e){return"string"===typeof e&&0!==e.length&&!Fo.test(e)},Vo=function(e){return"string"===typeof e&&0!==e.length&&!No.test(e)},qo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vo(e)},$o=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!k(e)||e&&"object"===typeof e&&(0,o.gR)(e,".sv")},Go=function(e,t,n,i){i&&void 0===t||Wo((0,o.dI)(e,"value"),t,n)},Wo=function(e,t,n){const i=n instanceof ct?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+At(i));if("function"===typeof t)throw new Error(e+"contains a function "+At(i)+" with contents = "+t.toString());if(k(t))throw new Error(e+"contains "+t.toString()+" "+At(i));if("string"===typeof t&&t.length>Uo/3&&(0,o.OE)(t)>Uo)throw new Error(e+"contains a string greater than "+Uo+" utf8 bytes "+At(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(F(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!jo(t)))throw new Error(e+" contains an invalid key ("+t+") "+At(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');St(i,t),Wo(e,o,i),Ct(i)})),n&&r)throw new Error(e+' contains ".value" child '+At(i)+" in addition to actual children.")}},Zo=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=_t(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!jo(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(bt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Et(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Ho=function(e,t,n,i){if(i&&void 0===t)return;const r=(0,o.dI)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];F(t,((e,t)=>{const i=new ct(e);if(Wo(r,t,yt(n,i)),".priority"===ft(i)&&!$o(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),Zo(r,s)},Xo=function(e,t,n,i){if((!i||void 0!==n)&&!Vo(n))throw new Error((0,o.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ko=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xo(e,t,n,i)},Yo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Jo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!jo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qo(n))throw new Error((0,o.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function es(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function ts(e,t,n){es(e,n),is(e,(e=>wt(e,t)))}function ns(e,t,n){es(e,n),is(e,(e=>Et(e,t)||Et(t,e)))}function is(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const o=r.path;t(o)?(rs(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function rs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();x&&E("event: "+n.toString()),Z(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="repo_interrupt",ss=25;class as{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bn(),this.transactionQueueTree_=new Co,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ls(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||H())e.server_=new On(e.repoInfo_,((t,n,i,r)=>{hs(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ds(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Bt(e.repoInfo_,t,((t,n,i,r)=>{hs(e,t,n,i,r)}),(t=>{ds(e,t)}),(t=>{ps(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Gn(e.stats_,e.server_))),e.infoData_=new zn,e.infoSyncTree_=new Vr({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Wr(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),fs(e,"connected",!1),e.serverSyncTree_=new Vr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);ns(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function cs(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function us(e){return vo({timestamp:cs(e)})}function hs(e,t,n,i,r){e.dataUpdateCount++;const s=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,o.kH)(n,(e=>vn(e)));a=Jr(e.serverSyncTree_,s,t,r)}else{const t=vn(n);a=Yr(e.serverSyncTree_,s,t,r)}else if(i){const t=(0,o.kH)(n,(e=>vn(e)));a=Zr(e.serverSyncTree_,s,t)}else{const t=vn(n);a=Wr(e.serverSyncTree_,s,t)}let l=s;a.length>0&&(l=As(e,s)),ns(e.eventQueue_,l,a)}function ds(e,t){fs(e,"connected",t),!1===t&&vs(e)}function ps(e,t){F(t,((t,n)=>{fs(e,t,n)}))}function fs(e,t,n){const i=new ct("/.info/"+t),r=vn(n);e.infoData_.updateSnapshot(i,r);const o=Wr(e.infoSyncTree_,i,r);ns(e.eventQueue_,i,o)}function ms(e){return e.nextWriteId_++}function _s(e,t,n){const i=to(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=vn(i).withIndex(t._queryParams.getIndex());let o;if(Qr(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Wr(e.serverSyncTree_,t._path,r);else{const n=so(e.serverSyncTree_,t);o=Yr(e.serverSyncTree_,t._path,r,n)}return ns(e.eventQueue_,t._path,o),Kr(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Es(e,"get for query "+(0,o.As)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function gs(e,t,n,i,r){Es(e,"set",{path:t.toString(),value:n,priority:i});const o=us(e),s=vn(n,i),a=eo(e.serverSyncTree_,t),l=To(s,a,o),c=ms(e),u=qr(e.serverSyncTree_,t,l,c,!0);es(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||I("set at "+t+" failed: "+n);const s=Gr(e.serverSyncTree_,c,!o);ns(e.eventQueue_,t,s),Ts(e,r,n,i)}));const h=Ls(e,t);As(e,h),ns(e.eventQueue_,h,[])}function ys(e,t,n,i){Es(e,"update",{path:t.toString(),value:n});let r=!0;const o=us(e),s={};if(F(n,((n,i)=>{r=!1,s[n]=Eo(yt(t,n),vn(i),e.serverSyncTree_,o)})),r)E("update() called with empty data.  Don't do anything."),Ts(e,i,"ok",void 0);else{const r=ms(e),o=$r(e.serverSyncTree_,t,s,r);es(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||I("update at "+t+" failed: "+n);const a=Gr(e.serverSyncTree_,r,!s),l=a.length>0?As(e,t):t;ns(e.eventQueue_,l,a),Ts(e,i,n,o)})),F(n,(n=>{const i=Ls(e,yt(t,n));As(e,i)})),ns(e.eventQueue_,t,[])}}function vs(e){Es(e,"onDisconnectEvents");const t=us(e),n=Bn();Nn(e.onDisconnect_,ut(),((i,r)=>{const o=Eo(i,r,e.serverSyncTree_,t);Fn(n,i,o)}));let i=[];Nn(n,ut(),((t,n)=>{i=i.concat(Wr(e.serverSyncTree_,t,n));const r=Ls(e,t);As(e,r)})),e.onDisconnect_=Bn(),ns(e.eventQueue_,ut(),i)}function xs(e,t,n){let i;i=".info"===ht(t._path)?Qr(e.infoSyncTree_,t,n):Qr(e.serverSyncTree_,t,n),ts(e.eventQueue_,t._path,i)}function bs(e,t,n){let i;i=".info"===ht(t._path)?Kr(e.infoSyncTree_,t,n):Kr(e.serverSyncTree_,t,n),ts(e.eventQueue_,t._path,i)}function ws(e){e.persistentConnection_&&e.persistentConnection_.interrupt(os)}function Es(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function Ts(e,t,n,i){t&&Z((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function Ss(e,t,n){return eo(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function Cs(e,t=e.transactionQueueTree_){if(t||Ds(e,t),Ao(t)){const n=Ms(e,t);(0,o.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Is(e,Oo(t),n)}else Po(t)&&Ro(t,(t=>{Cs(e,t)}))}function Is(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Ss(e,t,i);let s=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=xt(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const l=s.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{Es(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Gr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ds(e,Io(e.transactionQueueTree_,t)),Cs(e,e.transactionQueueTree_),ns(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Z(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{I("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}As(e,t)}}),a)}function As(e,t){const n=Ps(e,t),i=Oo(n),r=Ms(e,n);return ks(e,r,i),i}function ks(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const s=t[l],c=xt(n,s.path);let u,h=!1;if((0,o.vA)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,r=r.concat(Gr(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=ss)h=!0,u="maxretry",r=r.concat(Gr(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Ss(e,s.path,a);s.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Wo("transaction failed: Data returned ",i,s.path);let t=vn(i);const l="object"===typeof i&&null!=i&&(0,o.gR)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=s.currentWriteId,u=us(e),h=To(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ms(e),a.splice(a.indexOf(c),1),r=r.concat(qr(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),r=r.concat(Gr(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",r=r.concat(Gr(e.serverSyncTree_,s.currentWriteId,!0))}ns(e.eventQueue_,n,r),r=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}Ds(e,e.transactionQueueTree_);for(let o=0;o<i.length;o++)Z(i[o]);Cs(e,e.transactionQueueTree_)}function Ps(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Ao(i))i=Io(i,n),t=pt(t),n=ht(t);return i}function Ms(e,t){const n=[];return Rs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Rs(e,t,n){const i=Ao(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ro(t,(t=>{Rs(e,t,n)}))}function Ds(e,t){const n=Ao(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ko(t,n.length>0?n:void 0)}Ro(t,(t=>{Ds(e,t)}))}function Ls(e,t){const n=Oo(Ps(e,t)),i=Io(e.transactionQueueTree_,t);return Lo(i,(t=>{Os(e,t)})),Os(e,i),Do(i,(t=>{Os(e,t)})),n}function Os(e,t){const n=Ao(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.vA)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Gr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ko(t,void 0):n.length=s+1,ns(e.eventQueue_,Oo(t),r);for(let e=0;e<i.length;e++)Z(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Bs(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):I(`Invalid query segment '${n}' in query '${e}'`)}return t}const Fs=function(e,t){const n=Ns(e),i=n.namespace;"firebase.com"===n.domain&&C(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||C("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ct(n.pathString)}},Ns=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=zs(e.substring(u,h)));const d=Bs(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}},Us="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.As)(this.snapshot.exportVal())}}class Vs{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:ft(this._path)}get ref(){return new Gs(this._repo,this._path)}get _queryIdentifier(){const e=Ln(this._queryParams),t=z(e);return"{}"===t?"default":t}get _queryObject(){return Ln(this._queryParams)}isEqual(e){if(e=(0,o.Ku)(e),!(e instanceof $s))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Gs extends $s{constructor(e,t){super(e,t,new Mn,!1)}get parent(){const e=gt(this._path);return null===e?null:new Gs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ws{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Hs(this.ref,e);return new Ws(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Ws(n,Hs(this.ref,t),an))))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zs(e,t){return e=(0,o.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?Hs(e._root,t):e._root}function Hs(e,t){return e=(0,o.Ku)(e),null===ht(e._path)?Ko("child","path",t,!1):Xo("child","path",t,!1),new Gs(e._repo,yt(e._path,t))}function Xs(e){return Yo("remove",e._path),Ks(e,null)}function Ks(e,t){e=(0,o.Ku)(e),Yo("set",e._path),Go("set",t,e._path,!1);const n=new o.cY;return gs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ys(e,t){Ho("update",t,e._path,!1);const n=new o.cY;return ys(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Js(e){e=(0,o.Ku)(e);const t=new qs((()=>{})),n=new Qs(t);return _s(e._repo,e,n).then((t=>new Ws(t,new Gs(e._repo,e._path),e._queryParams.getIndex())))}class Qs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new js("value",this,new Ws(e.snapshotNode,new Gs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vs(this,e,t):null}matches(e){return e instanceof Qs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ea{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vs(this,e,t):null}createEvent(e,t){(0,o.vA)(null!=e.childName,"Child events should have a childName.");const n=Hs(new Gs(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new js(e.type,this,new Ws(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ea&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ta(e,t,n,i,r){let o;if("object"===typeof i&&(o=void 0,r=i),"function"===typeof i&&(o=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{bs(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const s=new qs(n,o||void 0),a="value"===t?new Qs(s):new ea(t,s);return xs(e._repo,e,a),()=>bs(e._repo,e,a)}function na(e,t,n,i){return ta(e,"value",t,n,i)}Cr(Gs),Nr(Gs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ia="FIREBASE_DATABASE_EMULATOR_HOST",ra={};let oa=!1;function sa(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function aa(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||C("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=Fs(o,r),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_MAPBOX_ACCESS_TOKEN:"pk.eyJ1IjoidGlibzYxIiwiYSI6ImNsc2ttaWd5NDA0anEya3JuN2F4cWJheDIifQ.8Y7HydMrAImeaYD6xPm_vg",VUE_APP_RAPIDAPI_KEY:"5818b544fbmsh184225c5e112a26p1525a3jsn5a009fd1a04f",BASE_URL:"/vuejs-projet-web/"}[ia]),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=Fs(o,r),c=l.repoInfo):s=!l.repoInfo.secure;const u=r&&s?new J(J.OWNER):new Y(e.name,e.options,t);Jo("Invalid Firebase Database URL",l),vt(l.path)||C("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ca(c,e,u,new K(e.name,n));return new ua(h,e)}function la(e,t){const n=ra[t];n&&n[e.key]===e||C(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ws(e),delete n[e.key]}function ca(e,t,n,i){let r=ra[t.name];r||(r={},ra[t.name]=r);let o=r[e.toURLString()];return o&&C("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new as(e,oa,n,i),r[e.toURLString()]=o,o}class ua{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ls(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gs(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(la(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&C("Cannot call "+e+" on a deleted database.")}}function ha(e=(0,i.Sx)(),t){const n=(0,i.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.yU)("database");e&&da(n,...e)}return n}function da(e,t,n,i={}){e=(0,o.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&C("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&C('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new J(J.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,o.Fy)(i.mockUserToken,e.app.options.projectId);s=new J(t)}sa(r,t,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pa(e){u(i.MF),(0,i.om)(new r.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return aa(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(a,l,e),(0,i.KO)(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Bt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};pa()},7844:function(e,t,n){"use strict";n.d(t,{qk:function(){return yt},c7:function(){return xt},KR:function(){return vt},bp:function(){return gt}});n(4979),n(4114),n(7467),n(4732),n(9577);var i=n(3405),r=n(4046),o=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5,u=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends r.g{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,p;function f(e){return"storage/"+e}function m(){const e="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,e)}function _(e){return new h(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function g(e){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,e)}function v(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function x(e){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function b(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new h(d.CANCELED,"User canceled the upload/download.")}function E(e){return new h(d.INVALID_URL,"Invalid URL '"+e+"'.")}function T(e){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function S(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new h(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(e){return new h(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function P(e){return new h(d.INVALID_ARGUMENT,e)}function M(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function R(e){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new h(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function L(e){throw new h(d.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(i){return new O(e,"")}if(""===n.path)return n;throw T(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},m=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",g=new RegExp(`^https?://${m}/${i}/${_}`,"i"),y={bucket:1,path:2},v=[{regex:a,indices:l,postModify:r},{regex:p,indices:f,postModify:c},{regex:g,indices:y,postModify:c}];for(let s=0;s<v.length;s++){const t=v[s],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new O(e,r),t.postModify(n);break}}if(null==n)throw E(e);return n}}class z{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t,n){let i=1,r=null,o=null,s=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(p,l())}),t)}function d(){o&&clearTimeout(o)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);const n=l()||s;if(n)return d(),void u.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let f=!1;function m(e){f||(f=!0,d(),c||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,m(!0)}),n),m}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return void 0!==e}function U(e){return"function"===typeof e}function j(e){return"object"===typeof e&&!Array.isArray(e)}function V(e){return"string"===typeof e||e instanceof String}function q(e){return $()&&e instanceof Blob}function $(){return"undefined"!==typeof Blob}function G(e,t,n,i){if(i<t)throw P(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw P(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t,n){let i=t;return null==n&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function Z(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){const n=e>=500&&e<600,i=[408,429],r=-1!==i.indexOf(e),o=-1!==t.indexOf(e);return n||r||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(p||(p={}));class X{constructor(e,t,n,i,r,o,s,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===p.NO_ERROR,r=n.getStatus();if(!t||H(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===p.ABORT;return void e(!1,new K(!1,null,t))}const o=-1!==this.successCodes_.indexOf(r);e(!0,new K(o,n))}))},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());N(e)?n(e):n()}catch(o){i(o)}else if(null!==r){const e=m();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?M():w();i(e)}else{const e=b();i(e)}};this.canceled_?t(!1,new K(!1,null,!0)):this.backoffId_=B(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class K{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Y(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function J(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Q(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,i,r,o,s=!0){const a=Z(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return Q(c,t),Y(c,n),J(c,o),ee(c,i),new X(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ie(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if($())return new Blob(e);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function re(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if("undefined"===typeof atob)throw k("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function le(e,t){switch(e){case se.RAW:return new ae(ce(t));case se.BASE64:case se.BASE64URL:return new ae(he(e,t));case se.DATA_URL:return new ae(pe(t),fe(t))}throw m()}function ce(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=i,o=e.charCodeAt(++n);i=65536|(1023&r)<<10|1023&o,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320===(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function ue(e){let t;try{t=decodeURIComponent(e)}catch(n){throw D(se.DATA_URL,"Malformed data URL.")}return ce(t)}function he(e,t){switch(e){case se.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){const t=n?"-":"_";throw D(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case se.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){const t=n?"+":"/";throw D(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(r){if(r.message.includes("polyfill"))throw r;throw D(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw D(se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=me(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function pe(e){const t=new de(e);return t.base64?he(se.BASE64,t.rest):ue(t.rest)}function fe(e){const t=new de(e);return t.contentType}function me(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){let n=0,i="";q(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,i=re(n,e,t);return null===i?null:new _e(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new _e(n,!0)}}static getBlob(...e){if($()){const t=e.map((e=>e instanceof _e?e.data_:e));return new _e(ie.apply(null,t))}{const t=e.map((e=>V(e)?le(se.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const i=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]})),new _e(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){let t;try{t=JSON.parse(e)}catch(n){return null}return j(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ve(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function xe(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){return t}class we{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||be}}let Ee=null;function Te(e){return!V(e)||e.length<2?e:xe(e)}function Se(){if(Ee)return Ee;const e=[];function t(e,t){return Te(t)}e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));const n=new we("name");function i(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new we("size");return r.xform=i,e.push(r),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Ee=e,Ee}function Ce(e,t){function n(){const n=e["bucket"],i=e["fullPath"],r=new O(n,i);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function Ie(e,t,n){const i={type:"file"},r=n.length;for(let o=0;o<r;o++){const e=n[o];i[e.local]=e.xform(i,t[e.server])}return Ce(i,e),i}function Ae(e,t,n){const i=ge(t);if(null===i)return null;const r=i;return Ie(e,r,n)}function ke(e,t,n,i){const r=ge(t);if(null===r)return null;if(!V(r["downloadTokens"]))return null;const o=r["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),l=a.map((t=>{const r=e["bucket"],o=e["fullPath"],a="/b/"+s(r)+"/o/"+s(o),l=W(a,n,i),c=Z({alt:"media",token:t});return l+c}));return l[0]}function Pe(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){if(!e)throw m()}function De(e,t){function n(n,i){const r=Ae(e,i,t);return Re(null!==r),r}return n}function Le(e,t){function n(n,i){const r=Ae(e,i,t);return Re(null!==r),ke(r,i,e.host,e._protocol)}return n}function Oe(e){function t(t,n){let i;return i=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===t.getStatus()?g(e.bucket):403===t.getStatus()?x(e.path):n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}return t}function ze(e){const t=Oe(e);function n(n,i){let r=t(n,i);return 404===n.getStatus()&&(r=_(e.path)),r.serverResponse=i.serverResponse,r}return n}function Be(e,t,n){const i=t.fullServerUrl(),r=W(i,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Me(r,o,De(e,n),s);return a.errorHandler=ze(t),a}function Fe(e,t,n){const i=t.fullServerUrl(),r=W(i,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Me(r,o,Le(e,n),s);return a.errorHandler=ze(t),a}function Ne(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ue(e,t,n){const i=Object.assign({},n);return i["fullPath"]=e.path,i["size"]=t.size(),i["contentType"]||(i["contentType"]=Ne(null,t)),i}function je(e,t,n,i,r){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const c=Ue(t,i,r),u=Pe(c,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",p=_e.getBlob(h,i,d);if(null===p)throw C();const f={name:c["fullPath"]},m=W(o,e.host,e._protocol),_="POST",g=e.maxUploadRetryTime,y=new Me(m,_,De(e,n),g);return y.urlParams=f,y.headers=s,y.body=p.uploadData(),y.errorHandler=Oe(t),y}class Ve{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function qe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){Re(!1)}const i=t||["active"];return Re(!!n&&-1!==i.indexOf(n)),n}function $e(e,t,n,i,r){const o=t.bucketOnlyServerUrl(),s=Ue(t,i,r),a={name:s["fullPath"]},l=W(o,e.host,e._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Pe(s,n),d=e.maxUploadRetryTime;function p(e){let t;qe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Re(!1)}return Re(V(t)),t}const f=new Me(l,c,p,d);return f.urlParams=a,f.headers=u,f.body=h,f.errorHandler=Oe(t),f}function Ge(e,t,n,i){const r={"X-Goog-Upload-Command":"query"};function o(e){const t=qe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Re(!1)}n||Re(!1);const r=Number(n);return Re(!isNaN(r)),new Ve(r,i.size(),"final"===t)}const s="POST",a=e.maxUploadRetryTime,l=new Me(n,s,o,a);return l.headers=r,l.errorHandler=Oe(t),l}const We=262144;function Ze(e,t,n,i,r,o,s,a){const l=new Ve(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw I();const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const h=l.current,d=h+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=i.slice(h,d);if(null===m)throw C();function _(e,n){const r=qe(e,["active","final"]),s=l.current+u,a=i.size();let c;return c="final"===r?De(t,o)(e,n):null,new Ve(s,a,"final"===r,c)}const g="POST",y=t.maxUploadRetryTime,v=new Me(n,g,_,y);return v.headers=f,v.body=m.uploadData(),v.progressCallback=a||null,v.errorHandler=Oe(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xe(e){switch(e){case"running":case"pausing":case"canceling":return He.RUNNING;case"paused":return He.PAUSED;case"success":return He.SUCCESS;case"canceled":return He.CANCELED;case"error":return He.ERROR;default:return He.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,n){const i=U(e)||null!=t||null!=n;if(i)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je=null;class Qe{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,i){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw L("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw L("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class et extends Qe{initXhr(){this.xhr_.responseType="text"}}function tt(){return Je?Je():new et}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Se(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(H(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,u),this._needToFetchStatus=!0,void this.completeTransitions_();e=b()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,tt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const i=Ge(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,tt,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=We*this._chunkMultiplier,t=new Ve(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let o;try{o=Ze(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,tt,i,r,!1);this._request=s,s.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=We*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Be(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,tt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=je(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,tt,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=w(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const r=new Ke(t||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Xe(this._state)){case He.SUCCESS:Ye(this._resolve.bind(null,this.snapshot))();break;case He.CANCELED:case He.ERROR:const t=this._reject;Ye(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Xe(this._state);switch(t){case He.RUNNING:case He.PAUSED:e.next&&Ye(e.next.bind(e,this.snapshot))();break;case He.SUCCESS:e.complete&&Ye(e.complete.bind(e))();break;case He.CANCELED:case He.ERROR:e.error&&Ye(e.error.bind(e,this._error))();break;default:e.error&&Ye(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new it(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xe(this._location.path)}get storage(){return this._service}get parent(){const e=ye(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new it(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw R(e)}}function rt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new nt(e,new _e(t),n)}function ot(e){e._throwIfRoot("getDownloadURL");const t=Fe(e.storage,e._location,Se());return e.storage.makeRequestWithTokens(t,tt).then((e=>{if(null===e)throw A();return e}))}function st(e,t){const n=ve(e._location.path,t),i=new O(e._location.bucket,n);return new it(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return/^[A-Za-z]+:\/\//.test(e)}function lt(e,t){return new it(e,t)}function ct(e,t){if(e instanceof pt){const n=e;if(null==n._bucket)throw S();const i=new it(n,n._bucket);return null!=t?ct(i,t):i}return void 0!==t?st(e,t):e}function ut(e,t){if(t&&at(t)){if(e instanceof pt)return lt(e,t);throw P("To use ref(service, url), the first argument must be a Storage instance.")}return ct(e,t)}function ht(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:O.makeFromBucketSpec(n,e)}function dt(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=i;o&&(e._overrideAuthToken="string"===typeof o?o:(0,r.Fy)(o,e.app.options.projectId))}class pt{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=i?O.makeFromBucketSpec(i,this._host):ht(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=ht(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new it(this,e)}_makeRequest(e,t,n,i,r=!0){if(this._deleted)return new z(M());{const o=te(e,this._appId,n,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const ft="@firebase/storage",mt="0.12.2",_t="storage";function gt(e,t,n){return e=(0,r.Ku)(e),rt(e,t,n)}function yt(e){return e=(0,r.Ku)(e),ot(e)}function vt(e,t){return e=(0,r.Ku)(e),ut(e,t)}function xt(e=(0,i.Sx)(),t){e=(0,r.Ku)(e);const n=(0,i.j6)(e,_t),o=n.getImmediate({identifier:t}),s=(0,r.yU)("storage");return s&&bt(o,...s),o}function bt(e,t,n,i={}){dt(e,t,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new pt(n,r,o,t,i.MF)}function Et(){(0,i.om)(new o.uA(_t,wt,"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(ft,mt,""),(0,i.KO)(ft,mt,"esm2017")}Et()},5588:function(e,t,n){"use strict";n.d(t,{Ak:function(){return i}});n(7467),n(4732),n(9577);let i=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>(t&=63,e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_",e)),"")},1387:function(e,t,n){"use strict";n.d(t,{LA:function(){return N},aE:function(){return tt},rd:function(){return it}});n(4114);var i=n(6768),r=n(144);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const i in t){const r=t[i];n[i]=u(r)?r.map(e):e(r)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function p(e,t,n="/"){let i,r={},o="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),r=e(o)),a>-1&&(i=i||t.slice(0,a),s=t.slice(a,t.length)),i=b(null!=i?i:t,n),{fullPath:i+(o&&"?")+o+s,path:i,query:r,hash:s}}function f(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&g(t.matched[i],n.matched[r])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!v(e[n],t[n]))return!1;return!0}function v(e,t){return u(e)?x(e,t):u(t)?x(t,e):e===t}function x(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let o,s,a=n.length-1;for(o=0;o<i.length;o++)if(s=i[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var w,E;(function(e){e["pop"]="pop",e["push"]="push"})(w||(w={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function C(e,t){return e.replace(S,"#")+t}function I(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function k(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=I(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function P(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function R(e,t){M.set(e,t)}function D(e){const t=M.get(e);return M.delete(e),t}let L=()=>location.protocol+"//"+location.host;function O(e,t){const{pathname:n,search:i,hash:r}=t,o=e.indexOf("#");if(o>-1){let t=r.includes(e.slice(o))?e.slice(o).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+i+r}function z(e,t,n,i){let r=[],o=[],s=null;const l=({state:o})=>{const a=O(e,location),l=n.value,c=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===l)return void(s=null);u=c?o.position-c.position:0}else i(a);r.forEach((e=>{e(n.value,l,{delta:u,type:w.pop,direction:u?u>0?E.forward:E.back:E.unknown})}))};function c(){s=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function B(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?A():null}}function F(e){const{history:t,location:n}=window,i={value:O(e,n)},r={value:t.state};function o(i,o,s){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:L()+e+i;try{t[s?"replaceState":"pushState"](o,"",l),r.value=o}catch(c){console.error(c),n[s?"replace":"assign"](l)}}function s(e,n){const s=a({},t.state,B(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});o(e,s,!0),i.value=e}function l(e,n){const s=a({},r.value,t.state,{forward:e,scroll:A()});o(s.current,s,!0);const l=a({},B(i.value,e,null),{position:s.position+1},n);o(e,l,!1),i.value=e}return r.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:l,replace:s}}function N(e){e=T(e);const t=F(e),n=z(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=a({location:"",base:e,go:i,createHref:C.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function U(e){return"string"===typeof e||e&&"object"===typeof e}function j(e){return"string"===typeof e||"symbol"===typeof e}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var $;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})($||($={}));function G(e,t){return a(new Error,{type:e,[q]:!0},t)}function W(e,t){return e instanceof Error&&q in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",H={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function K(e,t){const n=a({},H,t),i=[];let r=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let t=0;t<a.length;t++){const i=a[t];let s=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(X,"\\$&"),s+=40;else if(1===i.type){const{value:e,repeatable:n,optional:l,regexp:c}=i;o.push({name:e,repeatable:n,optional:l});const u=c||Z;if(u!==Z){s+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),r+=d,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function l(e){const t=e.match(s),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=o[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,l=o in t?t[o]:"";if(u(l)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${o}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n||"/"}return{re:s,score:i,keys:o,parse:l,stringify:c}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function J(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=Y(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(Q(i))return 1;if(Q(r))return-1}return r.length-i.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let o;function s(){o&&r.push(o),o=[]}let a,l=0,c="",u="";function h(){c&&(0===n?o.push({type:0,value:c}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),s(),r}function ie(e,t,n){const i=K(ne(e.path),n);const r=a(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function re(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function o(e,n,i){const r=!i,l=se(e);l.aliasOf=i&&i.record;const h=ue(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let p,f;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&i+a)}if(p=ie(t,n,h),i?i.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),r&&e.name&&!le(p)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],p,i&&i.children[t])}i=i||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&u(p)}return f?()=>{s(f)}:c}function s(e){if(j(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function l(){return n}function u(e){let t=0;while(t<n.length&&J(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!le(e)&&i.set(e.record.name,e)}function h(e,t){let r,o,s,l={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw G(1,{location:e});0,s=r.record.name,l=a(oe(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,r.keys.map((e=>e.name)))),o=r.stringify(l)}else if("path"in e)o=e.path,r=n.find((e=>e.re.test(o))),r&&(l=r.parse(o),s=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw G(1,{location:e,currentLocation:t});s=r.record.name,l=a({},t.params,e.params),o=r.stringify(l)}const c=[];let u=r;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:l,matched:c,meta:ce(c)}}return t=ue({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:l,getRecordMatcher:r}}function oe(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="object"===typeof n?n[i]:n;return t}function le(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ue(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,pe=/&/g,fe=/\//g,me=/=/g,_e=/\?/g,ge=/\+/g,ye=/%5B/g,ve=/%5D/g,xe=/%5E/g,be=/%60/g,we=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function Ce(e){return encodeURI(""+e).replace(Ee,"|").replace(ye,"[").replace(ve,"]")}function Ie(e){return Ce(e).replace(we,"{").replace(Te,"}").replace(xe,"^")}function Ae(e){return Ce(e).replace(ge,"%2B").replace(Se,"+").replace(de,"%23").replace(pe,"%26").replace(be,"`").replace(we,"{").replace(Te,"}").replace(xe,"^")}function ke(e){return Ae(e).replace(me,"%3D")}function Pe(e){return Ce(e).replace(de,"%23").replace(_e,"%3F")}function Me(e){return null==e?"":Pe(e).replace(fe,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(ge," "),n=e.indexOf("="),o=Re(n<0?e:e.slice(0,n)),s=n<0?null:Re(e.slice(n+1));if(o in t){let e=t[o];u(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Le(e){let t="";for(let n in e){const i=e[n];if(n=ke(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=u(i)?i.map((e=>e&&Ae(e))):[i&&Ae(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Oe(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=u(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const ze=Symbol(""),Be=Symbol(""),Fe=Symbol(""),Ne=Symbol(""),Ue=Symbol("");function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ve(e,t,n,i,r){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((s,a)=>{const l=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):U(e)?a(G(2,{from:t,to:e})):(o&&i.enterCallbacks[r]===o&&"function"===typeof e&&o.push(e),s())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function qe(e,t,n,i){const r=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if($e(a)){const s=a.__vccOpts||a,l=s[t];l&&r.push(Ve(l,n,i,o,e))}else{let l=a();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(r)?r.default:r;o.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&Ve(c,n,i,o,e)()}))))}}}return r}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,i.WQ)(Fe),n=(0,i.WQ)(Ne),o=(0,i.EW)((()=>t.resolve((0,r.R1)(e.to)))),s=(0,i.EW)((()=>{const{matched:e}=o.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const s=r.findIndex(g.bind(null,i));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(i)===a&&r[r.length-1].path!==a?r.findIndex(g.bind(null,e[t-2])):s})),a=(0,i.EW)((()=>s.value>-1&&Xe(n.params,o.value.params))),l=(0,i.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function u(n={}){return He(n)?t[(0,r.R1)(e.replace)?"replace":"push"]((0,r.R1)(e.to)).catch(c):Promise.resolve()}return{route:o,href:(0,i.EW)((()=>o.value.href)),isActive:a,isExactActive:l,navigate:u}}const We=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,r.Kh)(Ge(e)),{options:o}=(0,i.WQ)(Fe),s=(0,i.EW)((()=>({[Ye(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ze=We;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,i.WQ)(Ue),s=(0,i.EW)((()=>e.route||o.value)),l=(0,i.WQ)(Be,0),c=(0,i.EW)((()=>{let e=(0,r.R1)(l);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,i.EW)((()=>s.value.matched[c.value]));(0,i.Gt)(Be,(0,i.EW)((()=>c.value+1))),(0,i.Gt)(ze,u),(0,i.Gt)(Ue,s);const h=(0,r.KR)();return(0,i.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[i,r,o])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&g(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,o=e.name,l=u.value,c=l&&l.components[o];if(!c)return Qe(n.default,{Component:c,route:r});const d=l.props[o],p=d?!0===d?r.params:"function"===typeof d?d(r):d:null,f=e=>{e.component.isUnmounted&&(l.instances[o]=null)},m=(0,i.h)(c,a({},p,t,{onVnodeUnmounted:f,ref:h}));return Qe(n.default,{Component:m,route:r})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Je;function tt(e){const t=re(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Le,h=e.history;const d=je(),m=je(),g=je(),y=(0,r.IJ)(V);let v=V;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=l.bind(null,(e=>""+e)),b=l.bind(null,Me),E=l.bind(null,Re);function T(e,n){let i,r;return j(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function M(e,i){if(i=a({},i||y.value),"string"===typeof e){const r=p(n,e,i.path),o=t.resolve({path:r.path},i),s=h.createHref(r.fullPath);return a(r,o,{params:E(o.params),hash:Re(r.hash),redirectedFrom:void 0,href:s})}let r;if("path"in e)r=a({},e,{path:p(n,e.path,i.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];r=a({},e,{params:b(t)}),i.params=b(i.params)}const o=t.resolve(r,i),l=e.hash||"";o.params=x(E(o.params));const c=f(s,a({},e,{hash:Ie(l),path:o.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:s===Le?Oe(e.query):e.query||{}},o,{redirectedFrom:void 0,href:u})}function L(e){return"string"===typeof e?p(n,e,y.value.path):a({},e)}function O(e,t){if(v!==e)return G(8,{from:t,to:e})}function z(e){return N(e)}function B(e){return z(a(L(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=L(i):{path:i},i.params={}),a({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function N(e,t){const n=v=M(e),i=y.value,r=e.state,o=e.force,l=!0===e.replace,c=F(n);if(c)return N(a(L(c),{state:"object"===typeof c?a({},r,c.state):r,force:o,replace:l}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&_(s,i,n)&&(h=G(16,{to:u,from:i}),ie(i,i,!0,!1)),(h?Promise.resolve(h):$(u,i)).catch((e=>W(e)?W(e,2)?e:ne(e):ee(e,u,i))).then((e=>{if(e){if(W(e,2))return N(a({replace:l},L(e.to),{state:"object"===typeof e.to?a({},r,e.to.state):r,force:o}),t||u)}else e=H(u,i,!0,l,r);return Z(u,i,e),e}))}function U(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[i,r,o]=nt(e,t);n=qe(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Ve(i,e,t))}));const s=U.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const i of d.list())n.push(Ve(i,e,t));return n.push(s),ce(n)})).then((()=>{n=qe(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Ve(i,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const i of o)if(i.beforeEnter)if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push(Ve(r,e,t));else n.push(Ve(i.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(o,"beforeRouteEnter",e,t),n.push(s),ce(n)))).then((()=>{n=[];for(const i of m.list())n.push(Ve(i,e,t));return n.push(s),ce(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function Z(e,t,n){g.list().forEach((i=>q((()=>i(e,t,n)))))}function H(e,t,n,i,r){const s=O(e,t);if(s)return s;const l=t===V,c=o?history.state:{};n&&(i||l?h.replace(e.fullPath,a({scroll:l&&c&&c.scroll},r)):h.push(e.fullPath,r)),y.value=e,ie(e,t,n,l),ne()}let X;function K(){X||(X=h.listen(((e,t,n)=>{if(!le.listening)return;const i=M(e),r=F(i);if(r)return void N(a(r,{replace:!0}),i).catch(c);v=i;const s=y.value;o&&R(P(s.fullPath,n.delta),A()),$(i,s).catch((e=>W(e,12)?e:W(e,2)?(N(e.to,i).then((e=>{W(e,20)&&!n.delta&&n.type===w.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,i,s)))).then((e=>{e=e||H(i,s,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===w.pop&&W(e,20)&&h.go(-1,!1)),Z(i,s,e)})).catch(c)})))}let Y,J=je(),Q=je();function ee(e,t,n){ne(e);const i=Q.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&y.value!==V?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function ne(e){return Y||(Y=!e,K(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function ie(t,n,r,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const l=!r&&D(P(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>a(t,n,l))).then((e=>e&&k(e))).catch((e=>ee(e,t,n)))}const oe=e=>h.go(e);let se;const ae=new Set,le={currentRoute:y,listening:!0,addRoute:T,removeRoute:S,hasRoute:I,getRoutes:C,resolve:M,options:e,push:z,replace:B,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:d.add,beforeResolve:m.add,afterEach:g.add,onError:Q.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ze),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(y)}),o&&!se&&y.value===V&&(se=!0,z(h.location).catch((e=>{0})));const n={};for(const r in V)Object.defineProperty(n,r,{get:()=>y.value[r],enumerable:!0});e.provide(Fe,t),e.provide(Ne,(0,r.Gc)(n)),e.provide(Ue,y);const i=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=V,X&&X(),X=null,y.value=V,se=!1,Y=!1),i()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>q(t)))),Promise.resolve())}return le}function nt(e,t){const n=[],i=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>g(e,o)))?i.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>g(e,a)))||r.push(a))}return[n,i,r]}function it(){return(0,i.WQ)(Fe)}}}]);
//# sourceMappingURL=chunk-vendors.e9f5d0f7.js.map