import{R as Xi,_ as ea,s as ta,u as na,r as gt}from"./0plugin-vue0export-helper.23b4dbfd.js";import{d as ra,r as ia,p as oa,o as N,c as P,a as K,n as Qe,b as xe,e as J,F as st,f as en,g as b,D as B,h as sa,T as aa,Z as Vn,O as V,C as la,i as ua,U as ca,j as ot,k as Ji,m as ze,l as ie,w as qt,q as bt,t as Ee,s as fa,u as ha,v as Zi,x as da}from"./index.eb154640.js";const Jn=ra("user",()=>{const e=ia({uid:"",device:"",concentration:0,age_group:0,dyslexia:!1,dyscalculia:!1,study_group:0});return{user:e,insertFormValues:(i,o,s,a,l,u,c)=>{e.value.uid=i,e.value.device=o,e.value.concentration=s,e.value.age_group=a,e.value.dyslexia=l,e.value.dyscalculia=u,e.value.study_group=c},uid:()=>e.value.uid,study_group:()=>e.value.study_group}});var Zn=function(e,t){return Zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Zn(e,t)};function F(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Zn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Le=function(){return Le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Le.apply(this,arguments)};function eo(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function to(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function oe(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Z(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function De(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}/**
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
 */var no={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */var _=function(e,t){if(!e)throw pt(t)},pt=function(e){return new Error("Firebase Database ("+no.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */var ro=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pa=function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{var o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4,h=(a&15)<<2|u>>6,d=u&63;l||(d=64,s||(h=64)),r.push(n[c],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ro(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var l=i<e.length,u=l?n[e.charAt(i)]:64;++i;var c=i<e.length,f=c?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();var h=o<<2|a>>4;if(r.push(h),u!==64){var d=a<<4&240|u>>2;if(r.push(d),f!==64){var v=u<<6&192|f;r.push(v)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},io=function(e){var t=ro(e);return wr.encodeByteArray(t,!0)},ai=function(e){return io(e).replace(/\./g,"")},li=function(e){try{return wr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function oo(e){return Nt(void 0,e)}function Nt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)!t.hasOwnProperty(r)||!va(r)||(e[r]=Nt(e[r],t[r]));return e}function va(e){return e!=="__proto__"}/**
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
 */var ne=function(){function e(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){t.resolve=n,t.reject=r})}return e.prototype.wrapCallback=function(t){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof t=="function"&&(n.promise.catch(function(){}),t.length===1?t(r):t(r,i))}},e}();/**
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
 */function _a(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=Le({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ai(JSON.stringify(n)),ai(JSON.stringify(s)),a].join(".")}/**
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
 */function ma(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function so(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ma())}function ya(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ga(){return typeof self=="object"&&self.self===self}function ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ao(){return no.NODE_ADMIN===!0}/**
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
 */var wa="FirebaseError",Ca=function(e){F(t,e);function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=wa,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Cr.prototype.create),o}return t}(Error),Cr=function(){function e(t,n,r){this.service=t,this.serviceName=n,this.errors=r}return e.prototype.create=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+t,s=this.errors[t],a=s?Ia(s,i):"Error",l=this.serviceName+": "+a+" ("+o+").",u=new Ca(o,l,i);return u},e}();function Ia(e,t){return e.replace(Ea,function(n,r){var i=t[r];return i!=null?String(i):"<"+r+"?>"})}var Ea=/\{\$([^}]+)}/g;/**
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
 */function kt(e){return JSON.parse(e)}function U(e){return JSON.stringify(e)}/**
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
 */var lo=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=kt(li(o[0])||""),n=kt(li(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Sa=function(e){var t=lo(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ta=function(e){var t=lo(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function se(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Xe(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function er(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tn(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}/**
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
 */function Oa(e){for(var t=[],n=function(l,u){Array.isArray(u)?u.forEach(function(c){t.push(encodeURIComponent(l)+"="+encodeURIComponent(c))}):t.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return t.length?"&"+t.join("&"):""}/**
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
 */var Ra=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(t,n){n||(n=0);var r=this.W_;if(typeof t=="string")for(var i=0;i<16;i++)r[i]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var s=this.chain_[0],a=this.chain_[1],l=this.chain_[2],u=this.chain_[3],c=this.chain_[4],f,h,i=0;i<80;i++){i<40?i<20?(f=u^a&(l^u),h=1518500249):(f=a^l^u,h=1859775393):i<60?(f=a&l|u&(a|l),h=2400959708):(f=a^l^u,h=3395469782);var o=(s<<5|s>>>27)+f+c+h+r[i]&4294967295;c=u,u=l,l=(a<<30|a>>>2)&4294967295,a=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},e.prototype.update=function(t,n){if(t!=null){n===void 0&&(n=t.length);for(var r=n-this.blockSize,i=0,o=this.buf_,s=this.inbuf_;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}},e.prototype.digest=function(){var t=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[i]=this.chain_[r]>>o&255,++i;return t},e}();function xa(e,t){var n=new Aa(e,t);return n.subscribe.bind(n)}var Aa=function(){function e(t,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(r)}).catch(function(i){r.error(i)})}return e.prototype.next=function(t){this.forEachObserver(function(n){n.next(t)})},e.prototype.error=function(t){this.forEachObserver(function(n){n.error(t)}),this.close(t)},e.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},e.prototype.subscribe=function(t,n,r){var i=this,o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Na(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=Bn),o.error===void 0&&(o.error=Bn),o.complete===void 0&&(o.complete=Bn);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),s},e.prototype.unsubscribeOne=function(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},e.prototype.forEachObserver=function(t){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,t)},e.prototype.sendOne=function(t,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[t]!==void 0)try{n(r.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},e.prototype.close=function(t){var n=this;this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},e}();function Na(e,t){if(typeof e!="object"||e===null)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&typeof e[i]=="function")return!0}return!1}function Bn(){}/**
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
 */var w=function(e,t,n,r){var i;if(r<t?i="at least "+t:r>n&&(i=n===0?"none":"no more than "+n),i){var o=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function re(e,t){return e+" failed: "+t+" argument "}function z(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(re(e,t)+"must be a valid function.")}function ui(e,t,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(re(e,t)+"must be a valid context object.")}/**
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
 */var ka=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,_(r<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},mn=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function le(e){return e&&e._delegate?e._delegate:e}var Vt=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var He="[DEFAULT]";/**
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
 */var uo=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new ne;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(La(t))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}try{for(var i=oe(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=Z(o.value,2),a=s[0],l=s[1],u=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:u});l.resolve(c)}catch{}}}catch(f){n={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=He),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return eo(this,void 0,void 0,function(){var t;return to(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(De(De([],Z(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Z(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=He),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=He),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var i=t.options,o=i===void 0?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=oe(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var c=Z(u.value,2),f=c[0],h=c[1],d=this.normalizeInstanceIdentifier(f);s===d&&h.resolve(a)}}catch(v){n={error:v}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);var s=this.instances.get(i);return s&&t(s,i),function(){o.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,i,o=this.onInitCallbacks.get(n);if(!!o)try{for(var s=oe(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(t,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Pa(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=He),this.component?this.component.multipleInstances?t:He:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Pa(e){return e===He?void 0:e}function La(e){return e.instantiationMode==="EAGER"}/**
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
 */var co=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new uo(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function pe(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}/**
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
 */var We,Ir=[],x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));var fo={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Da=x.INFO,Fa=(We={},We[x.DEBUG]="log",We[x.VERBOSE]="log",We[x.INFO]="info",We[x.WARN]="warn",We[x.ERROR]="error",We),Ma=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=new Date().toISOString(),o=Fa[t];if(o)console[o].apply(console,pe(["["+i+"]  "+e.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}},ho=function(){function e(t){this.name=t,this._logLevel=Da,this._logHandler=Ma,this._userLogHandler=null,Ir.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in x))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(t){this._logLevel=typeof t=="string"?fo[t]:t},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,x.DEBUG],t)),this._logHandler.apply(this,pe([this,x.DEBUG],t))},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,x.VERBOSE],t)),this._logHandler.apply(this,pe([this,x.VERBOSE],t))},e.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,x.INFO],t)),this._logHandler.apply(this,pe([this,x.INFO],t))},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,x.WARN],t)),this._logHandler.apply(this,pe([this,x.WARN],t))},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,x.ERROR],t)),this._logHandler.apply(this,pe([this,x.ERROR],t))},e}();function Va(e){Ir.forEach(function(t){t.setLogLevel(e)})}function Ba(e,t){for(var n=function(s){var a=null;t&&t.level&&(a=fo[t.level]),e===null?s.userLogHandler=null:s.userLogHandler=function(l,u){for(var c=[],f=2;f<arguments.length;f++)c[f-2]=arguments[f];var h=c.map(function(d){if(d==null)return null;if(typeof d=="string")return d;if(typeof d=="number"||typeof d=="boolean")return d.toString();if(d instanceof Error)return d.message;try{return JSON.stringify(d)}catch{return null}}).filter(function(d){return d}).join(" ");u>=(a!=null?a:l.logLevel)&&e({level:x[u].toLowerCase(),message:h,args:c,type:l.name})}},r=0,i=Ir;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */var Re,Ua=(Re={},Re["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",Re["bad-app-name"]="Illegal App name: '{$appName}",Re["duplicate-app"]="Firebase App named '{$appName}' already exists",Re["app-deleted"]="Firebase App named '{$appName}' already deleted",Re["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Re["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Re),it=new Cr("app","Firebase",Ua),po="@firebase/app",Wa="0.6.30",za="@firebase/analytics",Ha="@firebase/app-check",Ga="@firebase/auth",Ka="@firebase/database",Qa="@firebase/functions",ja="@firebase/installations",Ya="@firebase/messaging",qa="@firebase/performance",$a="@firebase/remote-config",Xa="@firebase/storage",Ja="@firebase/firestore",Za="firebase-wrapper";/**
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
 */var j,nn="[DEFAULT]",el=(j={},j[po]="fire-core",j[za]="fire-analytics",j[Ha]="fire-app-check",j[Ga]="fire-auth",j[Ka]="fire-rtdb",j[Qa]="fire-fn",j[ja]="fire-iid",j[Ya]="fire-fcm",j[qa]="fire-perf",j[$a]="fire-rc",j[Xa]="fire-gcs",j[Ja]="fire-fst",j["fire-js"]="fire-js",j[Za]="fire-js-all",j);/**
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
 */var lt=new ho("@firebase/app");/**
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
 */var Zt=function(){function e(t,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=oo(t),this.container=new co(n.name),this._addComponent(new Vt("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var t=this;return new Promise(function(n){t.checkDestroyed_(),n()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(n){return n.delete()}))}).then(function(){t.isDeleted_=!0})},e.prototype._getService=function(t,n){var r;n===void 0&&(n=nn),this.checkDestroyed_();var i=this.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},e.prototype._removeServiceInstance=function(t,n){n===void 0&&(n=nn),this.container.getProvider(t).clearInstance(n)},e.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(n){lt.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,n)}},e.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw it.create("app-deleted",{appName:this.name_})},e}();Zt.prototype.name&&Zt.prototype.options||Zt.prototype.delete||console.log("dc");var tl="8.10.0";/**
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
 */function nl(e){var t={},n=new Map,r={__esModule:!0,initializeApp:s,app:o,registerVersion:u,setLogLevel:Va,onLog:c,apps:null,SDK_VERSION:tl,INTERNAL:{registerComponent:l,removeApp:i,components:n,useAsService:f}};r.default=r,Object.defineProperty(r,"apps",{get:a});function i(h){delete t[h]}function o(h){if(h=h||nn,!se(t,h))throw it.create("no-app",{appName:h});return t[h]}o.App=e;function s(h,d){if(d===void 0&&(d={}),typeof d!="object"||d===null){var v=d;d={name:v}}var m=d;m.name===void 0&&(m.name=nn);var p=m.name;if(typeof p!="string"||!p)throw it.create("bad-app-name",{appName:String(p)});if(se(t,p))throw it.create("duplicate-app",{appName:p});var y=new e(h,m,r);return t[p]=y,y}function a(){return Object.keys(t).map(function(h){return t[h]})}function l(h){var d=h.name;if(n.has(d))return lt.debug("There were multiple attempts to register component "+d+"."),h.type==="PUBLIC"?r[d]:null;if(n.set(d,h),h.type==="PUBLIC"){var v=function(g){if(g===void 0&&(g=o()),typeof g[d]!="function")throw it.create("invalid-app-argument",{appName:d});return g[d]()};h.serviceProps!==void 0&&Nt(v,h.serviceProps),r[d]=v,e.prototype[d]=function(){for(var g=[],T=0;T<arguments.length;T++)g[T]=arguments[T];var M=this._getService.bind(this,d);return M.apply(this,h.multipleInstances?g:[])}}for(var m=0,p=Object.keys(t);m<p.length;m++){var y=p[m];t[y]._addComponent(h)}return h.type==="PUBLIC"?r[d]:null}function u(h,d,v){var m,p=(m=el[h])!==null&&m!==void 0?m:h;v&&(p+="-"+v);var y=p.match(/\s|\//),g=d.match(/\s|\//);if(y||g){var T=['Unable to register library "'+p+'" with version "'+d+'":'];y&&T.push('library name "'+p+'" contains illegal characters (whitespace or "/")'),y&&g&&T.push("and"),g&&T.push('version name "'+d+'" contains illegal characters (whitespace or "/")'),lt.warn(T.join(" "));return}l(new Vt(p+"-version",function(){return{library:p,version:d}},"VERSION"))}function c(h,d){if(h!==null&&typeof h!="function")throw it.create("invalid-log-argument");Ba(h,d)}function f(h,d){if(d==="serverAuth")return null;var v=d;return v}return r}/**
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
 */function vo(){var e=nl(Zt);e.INTERNAL=Le(Le({},e.INTERNAL),{createFirebaseNamespace:vo,extendNamespace:t,createSubscribe:xa,ErrorFactory:Cr,deepExtend:Nt});function t(n){Nt(e,n)}return e}var Er=vo();/**
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
 */var rl=function(){function e(t){this.container=t}return e.prototype.getPlatformInfoString=function(){var t=this.container.getProviders();return t.map(function(n){if(il(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},e}();function il(e){var t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}/**
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
 */function ol(e,t){e.INTERNAL.registerComponent(new Vt("platform-logger",function(n){return new rl(n)},"PRIVATE")),e.registerVersion(po,Wa,t),e.registerVersion("fire-js","")}/**
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
 */if(ga()&&self.firebase!==void 0){lt.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var ci=self.firebase.SDK_VERSION;ci&&ci.indexOf("LITE")>=0&&lt.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var sl=Er.initializeApp;Er.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ya()&&lt.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),sl.apply(void 0,e)};var Bt=Er;ol(Bt);var al="firebase",_o="8.10.1";/**
 * @license
 * Copyright 2018 Google LLC
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
 */Bt.registerVersion(al,_o,"app");Bt.SDK_VERSION=_o;var ll="@firebase/database",ul="0.11.0";/**
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
 */var mo="";function yo(e){mo=e}/**
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
 */var cl=function(){function e(t){this.domStorage_=t,this.prefix_="firebase:"}return e.prototype.set=function(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),U(n))},e.prototype.get=function(t){var n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:kt(n)},e.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},e.prototype.prefixedName_=function(t){return this.prefix_+t},e.prototype.toString=function(){return this.domStorage_.toString()},e}();/**
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
 */var fl=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}return e.prototype.set=function(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n},e.prototype.get=function(t){return se(this.cache_,t)?this.cache_[t]:null},e.prototype.remove=function(t){delete this.cache_[t]},e}();/**
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
 */var go=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new cl(t)}}catch{}return new fl},je=go("localStorage"),tr=go("sessionStorage");/**
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
 */var at=new ho("@firebase/database"),bo=function(){var e=1;return function(){return e++}}(),wo=function(e){var t=ka(e),n=new Ra;n.update(t);var r=n.digest();return wr.encodeByteArray(r)},Ut=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=Ut.apply(null,i):typeof i=="object"?n+=U(i):n+=i,n+=" "}return n},qe=null,fi=!0,Co=function(e,t){_(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(at.logLevel=x.VERBOSE,qe=at.log.bind(at),t&&tr.set("logging_enabled",!0)):typeof e=="function"?qe=e:(qe=null,tr.remove("logging_enabled"))},H=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(fi===!0&&(fi=!1,qe===null&&tr.get("logging_enabled")===!0&&Co(!0)),qe){var n=Ut.apply(null,e);qe(n)}},Wt=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];H.apply(void 0,De([e],Z(t)))}},nr=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+Ut.apply(void 0,De([],Z(e)));at.error(n)},be=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+Ut.apply(void 0,De([],Z(e)));throw at.error(n),new Error(n)},Q=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+Ut.apply(void 0,De([],Z(e)));at.warn(n)},hl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yn=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},dl=function(e){if(document.readyState==="complete")e();else{var t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Oe="[MIN_NAME]",we="[MAX_NAME]",et=function(e,t){if(e===t)return 0;if(e===Oe||t===we)return-1;if(t===Oe||e===we)return 1;var n=rn(e),r=rn(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1},pl=function(e,t){return e===t?0:e<t?-1:1},wt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+U(t))},Sr=function(e){if(typeof e!="object"||e===null)return U(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)i!==0&&(r+=","),r+=U(t[i]),r+=":",r+=Sr(e[t[i]]);return r+="}",r},Io=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function W(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Eo=function(e){_(!yn(e),"Invalid JSON number");var t=11,n=52,r=(1<<t-1)-1,i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));var u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();var c=u.join(""),f="";for(l=0;l<64;l+=8){var h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},vl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_l=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ml(e,t){var n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}var yl=new RegExp("^-?(0*)\\d{1,10}$"),So=-2147483648,Tr=2147483647,rn=function(e){if(yl.test(e)){var t=Number(e);if(t>=So&&t<=Tr)return t}return null},vt=function(e){try{e()}catch(t){setTimeout(function(){var n=t.stack||"";throw Q("Exception was thrown by user callback.",n),t},Math.floor(0))}},gl=function(){var e=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},St=function(e,t){var n=setTimeout(e,t);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */var bl=function(){function e(t,n){var r=this;this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return e.prototype.getToken=function(t){var n=this;return this.appCheck?this.appCheck.getToken(t):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){Q('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},e}();/**
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
 */var wl=function(){function e(t,n,r){var i=this;this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return e.prototype.getToken=function(t){var n=this;return this.auth_?this.auth_.getToken(t).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(H("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(t)})},e.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(t)},e}(),Tt=function(){function e(t){this.accessToken=t}return e.prototype.getToken=function(t){return Promise.resolve({accessToken:this.accessToken})},e.prototype.addTokenChangeListener=function(t){t(this.accessToken)},e.prototype.removeTokenChangeListener=function(t){},e.prototype.notifyForInvalidToken=function(){},e.OWNER="owner",e}();/**
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
 */var Or="5",To="v",Oo="s",Ro="r",xo="f",Ao=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,No="ls",Cl="p",rr="ac",ko="websocket",Po="long_polling";/**
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
 */var Rr=function(){function e(t,n,r,i,o,s,a){o===void 0&&(o=!1),s===void 0&&(s=""),a===void 0&&(a=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=je.get("host:"+t)||this._host}return e.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},e.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&je.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),e.prototype.toString=function(){var t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},e.prototype.toURLString=function(){var t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+t+this.host+"/"+n},e}();function Il(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Lo(e,t,n){_(typeof t=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");var r;if(t===ko)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Po)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Il(e)&&(n.ns=e.namespace);var i=[];return W(n,function(o,s){i.push(o+"="+s)}),r+i.join("&")}/**
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
 */var El=function(){function e(){this.counters_={}}return e.prototype.incrementCounter=function(t,n){n===void 0&&(n=1),se(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n},e.prototype.get=function(){return oo(this.counters_)},e}();/**
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
 */var Un={},Wn={};function xr(e){var t=e.toString();return Un[t]||(Un[t]=new El),Un[t]}function Sl(e,t){var n=e.toString();return Wn[n]||(Wn[n]=t()),Wn[n]}/**
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
 */var Tl=function(){function e(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(t,n){var r=this;this.pendingResponses[t]=n;for(var i=function(){var a=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var l=function(c){a[c]&&vt(function(){r.onMessage_(a[c])})},u=0;u<a.length;++u)l(u);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var s=i();if(s==="break")break}},e}();/**
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
 */var hi="start",Ol="close",Rl="pLPCommand",xl="pRTLPCB",Do="id",Fo="pw",Mo="ser",Al="cb",Nl="seg",kl="ts",Pl="d",Ll="dframe",Vo=1870,Bo=30,Dl=Vo-Bo,Fl=25e3,Ml=3e4,Ar=function(){function e(t,n,r,i,o,s,a){var l=this;this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wt(t),this.stats_=xr(n),this.urlFn=function(u){return l.appCheckToken&&(u[rr]=l.appCheckToken),Lo(n,Po,u)}}return e.prototype.open=function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Tl(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(Ml)),dl(function(){if(!r.isClosed_){r.scriptTagHolder=new Vl(function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=Z(s,5),u=l[0],c=l[1],f=l[2];if(l[3],l[4],r.incrementIncomingBytes_(s),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,u===hi)r.id=c,r.password=f;else if(u===Ol)c?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(c,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+u)},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=Z(s,2),u=l[0],c=l[1];r.incrementIncomingBytes_(s),r.myPacketOrderer.handleResponse(u,c)},function(){r.onClosed_()},r.urlFn);var i={};i[hi]="t",i[Mo]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[Al]=r.scriptTagHolder.uniqueCallbackIdentifier),i[To]=Or,r.transportSessionId&&(i[Oo]=r.transportSessionId),r.lastSessionId&&(i[No]=r.lastSessionId),r.applicationId&&(i[Cl]=r.applicationId),r.appCheckToken&&(i[rr]=r.appCheckToken),typeof location<"u"&&location.hostname&&Ao.test(location.hostname)&&(i[Ro]=xo);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return e.forceAllow_?!0:!e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vl()&&!_l()},e.prototype.markConnectionHealthy=function(){},e.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},e.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},e.prototype.send=function(t){var n=U(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=io(n),i=Io(r,Dl),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(t,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[Ll]="t",r[Do]=t,r[Fo]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},e.prototype.incrementIncomingBytes_=function(t){var n=U(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},e}(),Vl=function(){function e(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bo(),window[Rl+this.uniqueCallbackIdentifier]=t,window[xl+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}var a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){H("frame writing exception"),l.stack&&H(l.stack),H(l)}}}return e.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{var n=t.contentWindow.document;n||H("No IE domain setting required")}catch{var r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},e.prototype.close=function(){var t=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){t.myIFrame!==null&&(document.body.removeChild(t.myIFrame),t.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},e.prototype.startLongPoll=function(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););},e.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var t={};t[Do]=this.myID,t[Fo]=this.myPW,t[Mo]=this.currentSerial;for(var n=this.urlFn(t),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+Bo+r.length<=Vo){var s=this.pendingSegs.shift();r=r+"&"+Nl+i+"="+s.seg+"&"+kl+i+"="+s.ts+"&"+Pl+i+"="+s.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},e.prototype.enqueueSegment=function(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()},e.prototype.addLongPollTag_=function(t,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(Fl)),s=function(){clearTimeout(o),i()};this.addTag(t,s)},e.prototype.addTag=function(t,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){H("Long-poll script failed to load: "+t),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},e}();/**
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
 */var Bl=16384,Ul=45e3,on=null;typeof MozWebSocket<"u"?on=MozWebSocket:typeof WebSocket<"u"&&(on=WebSocket);var Ke=function(){function e(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wt(this.connId),this.stats_=xr(n),this.connURL=e.connectionURL_(n,s,a,i),this.nodeAdmin=n.nodeAdmin}return e.connectionURL_=function(t,n,r,i){var o={};return o[To]=Or,typeof location<"u"&&location.hostname&&Ao.test(location.hostname)&&(o[Ro]=xo),n&&(o[Oo]=n),r&&(o[No]=r),i&&(o[rr]=i),Lo(t,ko,o)},e.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,je.set("previous_websocket_failure",!0);try{var i,o,s,a;if(!ao()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new on(this.connURL,[],o)}}catch(u){this.log_("Error instantiating WebSocket.");var l=u.message||u.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(u){r.handleIncomingFrame(u)},this.mySock.onerror=function(u){r.log_("WebSocket error.  Closing connection.");var c=u.message||u.data;c&&r.log_(c),r.onClosed_()}},e.prototype.start=function(){},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){var t=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&on!==null&&!e.forceDisallow_},e.previouslyFailed=function(){return je.isInMemoryStorage||je.get("previous_websocket_failure")===!0},e.prototype.markConnectionHealthy=function(){je.remove("previous_websocket_failure")},e.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=kt(n);this.onMessage(r)}},e.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},e.prototype.extractFrameCount_=function(t){if(_(this.frames===null,"We already have a frame buffer"),t.length<=6){var n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t},e.prototype.handleIncomingFrame=function(t){if(this.mySock!==null){var n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},e.prototype.send=function(t){this.resetKeepAlive();var n=U(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=Io(n,Bl);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},e.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},e.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},e.prototype.resetKeepAlive=function(){var t=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(Ul))},e.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},e.responsesRequiredToBeHealthy=2,e.healthyTimeout=3e4,e}();/**
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
 */var Wl=function(){function e(t){this.initTransports_(t)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[Ar,Ke]},enumerable:!1,configurable:!0}),e.prototype.initTransports_=function(t){var n,r,i=Ke&&Ke.isAvailable(),o=i&&!Ke.previouslyFailed();if(t.webSocketOnly&&(i||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Ke];else{var s=this.transports_=[];try{for(var a=oe(e.ALL_TRANSPORTS),l=a.next();!l.done;l=a.next()){var u=l.value;u&&u.isAvailable()&&s.push(u)}}catch(c){n={error:c}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}},e.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},e.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},e}();/**
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
 */var zl=6e4,Hl=5e3,Gl=10*1024,Kl=100*1024,zn="t",di="d",Ql="s",pi="r",jl="e",vi="o",_i="a",mi="n",yi="p",Yl="h",Uo=function(){function e(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wt("c:"+this.id+":"),this.transportManager_=new Wl(n),this.log_("Connection created"),this.start_()}return e.prototype.start_=function(){var t=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=St(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>Kl?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>Gl?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(o)))},e.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.disconnReceiver_=function(t){var n=this;return function(r){t===n.conn_?n.onConnectionLost_(r):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},e.prototype.connReceiver_=function(t){var n=this;return function(r){n.state_!==2&&(t===n.rx_?n.onPrimaryMessageReceived_(r):t===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},e.prototype.sendRequest=function(t){var n={t:"d",d:t};this.sendData_(n)},e.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},e.prototype.onSecondaryControl_=function(t){if(zn in t){var n=t[zn];n===_i?this.upgradeIfSecondaryHealthy_():n===pi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},e.prototype.onSecondaryMessageReceived_=function(t){var n=wt("t",t),r=wt("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},e.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yi,d:{}}}))},e.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_i,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},e.prototype.onPrimaryMessageReceived_=function(t){var n=wt("t",t),r=wt("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},e.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},e.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},e.prototype.onControl_=function(t){var n=wt(zn,t);if(di in t){var r=t[di];if(n===Yl)this.onHandshake_(r);else if(n===mi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ql?this.onConnectionShutdown_(r):n===pi?this.onReset_(r):n===jl?nr("Server Error: "+r):n===vi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nr("Unknown control packet command: "+n)}},e.prototype.onHandshake_=function(t){var n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Or!==r&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())},e.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)},e.prototype.startUpgrade_=function(t){var n=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),St(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(zl))},e.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())},e.prototype.onConnectionEstablished_=function(t,n){var r=this;this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):St(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(Hl))},e.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yi,d:{}}}))},e.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()},e.prototype.onConnectionLost_=function(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},e.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},e.prototype.sendData_=function(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)},e.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},e.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}();/**
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
 */var Wo=function(){function e(){}return e.prototype.put=function(t,n,r,i){},e.prototype.merge=function(t,n,r,i){},e.prototype.refreshAuthToken=function(t){},e.prototype.refreshAppCheckToken=function(t){},e.prototype.onDisconnectPut=function(t,n,r){},e.prototype.onDisconnectMerge=function(t,n,r){},e.prototype.onDisconnectCancel=function(t,n){},e.prototype.reportStats=function(t){},e}();/**
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
 */var zo=function(){function e(t){this.allowedEvents_=t,this.listeners_={},_(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[t]))for(var i=De([],Z(this.listeners_[t])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},e.prototype.on=function(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});var i=this.getInitialEvent(t);i&&n.apply(r,i)},e.prototype.off=function(t,n,r){this.validateEventType_(t);for(var i=this.listeners_[t]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},e.prototype.validateEventType_=function(t){_(this.allowedEvents_.find(function(n){return n===t}),"Unknown event: "+t)},e}();/**
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
 */var gi=function(e){F(t,e);function t(){var n=e.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!so()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return _(n==="online","Unknown event type: "+n),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(zo);/**
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
 */var bi=32,wi=768,R=function(){function e(t,n){if(n===void 0){this.pieces_=t.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}return e.prototype.toString=function(){for(var t="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"},e}();function O(){return new R("")}function I(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Fe(e){return e.pieces_.length-e.pieceNum_}function A(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new R(e.pieces_,t)}function Nr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ql(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Pt(e,t){return t===void 0&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function Ho(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new R(t,0)}function L(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof R)for(var r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else for(var i=t.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new R(n,0)}function E(e){return e.pieceNum_>=e.pieces_.length}function ee(e,t){var n=I(e),r=I(t);if(n===null)return t;if(n===r)return ee(A(e),A(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function $l(e,t){for(var n=Pt(e,0),r=Pt(t,0),i=0;i<n.length&&i<r.length;i++){var o=et(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function kr(e,t){if(Fe(e)!==Fe(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ue(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Fe(e)>Fe(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Xl=function(){function e(t,n){this.errorPrefix_=n,this.parts_=Pt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=mn(this.parts_[r]);Go(this)}return e}();function Jl(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=mn(t),Go(e)}function Zl(e){var t=e.parts_.pop();e.byteLength_-=mn(t),e.parts_.length>0&&(e.byteLength_-=1)}function Go(e){if(e.byteLength_>wi)throw new Error(e.errorPrefix_+"has a key path longer than "+wi+" bytes ("+e.byteLength_+").");if(e.parts_.length>bi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bi+") or object contains a cycle "+Ge(e))}function Ge(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */var eu=function(e){F(t,e);function t(){var n=e.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return _(n==="visible","Unknown event type: "+n),[this.visible_]},t}(zo);/**
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
 */var Ct=1e3,tu=60*5*1e3,nu=3*1e3,Ci=30*1e3,ru=1.3,iu=3e4,ou="server_kill",Ii=3,$e=function(e){F(t,e);function t(n,r,i,o,s,a,l,u){var c=e.call(this)||this;if(c.repoInfo_=n,c.applicationId_=r,c.onDataUpdate_=i,c.onConnectStatus_=o,c.onServerInfoUpdate_=s,c.authTokenProvider_=a,c.appCheckTokenProvider_=l,c.authOverride_=u,c.id=t.nextPersistentConnectionId_++,c.log_=Wt("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=Ct,c.maxReconnectDelay_=tu,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,u&&!ao())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return eu.getInstance().on("visible",c.onVisible_,c),n.host.indexOf("fblocal")===-1&&gi.getInstance().on("online",c.onOnline_,c),c}return t.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,s={r:o,a:n,b:r};this.log_(U(s)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[o]=i)},t.prototype.get=function(n){var r=this;this.initConnection_();var i=new ne,o={p:n._path.toString(),q:n._queryObject},s={action:"g",request:o,onComplete:function(l){var u=l.d;l.s==="ok"?(r.onDataUpdate_(o.p,u,!1,null),i.resolve(u)):i.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var l=r.outstandingGets_[a];l===void 0||s!==l||(delete r.outstandingGets_[a],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+a+" timed out on connection"),i.reject(new Error("Client is offline.")))},nu),this.connected_&&this.sendGet_(a),i.promise},t.prototype.listen=function(n,r,i,o){this.initConnection_();var s=n._queryIdentifier,a=n._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),_(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");var l={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)},t.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},t.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),s=i._queryIdentifier;this.log_("Listen on "+o+" for "+s);var a={p:o},l="q";n.tag&&(a.q=i._queryObject,a.t=n.tag),a.h=n.hashFn(),this.sendRequest(l,a,function(u){var c=u.d,f=u.s;t.warnOnListenWarnings_(c,i);var h=r.listens.get(o)&&r.listens.get(o).get(s);h===n&&(r.log_("listen response",u),f!=="ok"&&r.removeListen_(o,s),n.onComplete&&n.onComplete(f,c))})},t.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&se(n,"w")){var i=Xe(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',s=r._path.toString();Q("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(s+" to your security rules for better performance."))}}},t.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},t.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||Ta(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ci)},t.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},t.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=Sa(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(s){var a=s.s,l=s.d||"error";n.authToken_===r&&(a==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(a,l))})}},t.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},t.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),_(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var s=this.removeListen_(i,o);s&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},t.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var s={p:n},a="n";o&&(s.q=i,s.t=o),this.sendRequest(a,s)},t.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},t.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},t.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},t.prototype.sendOnDisconnect_=function(n,r,i,o){var s={p:r,d:i};this.log_("onDisconnect "+n,s),this.sendRequest(n,s,function(a){o&&setTimeout(function(){o(a.s,a.d)},Math.floor(0))})},t.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},t.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},t.prototype.putInternal=function(n,r,i,o,s){this.initConnection_();var a={p:r,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:n,request:a,onComplete:o}),this.outstandingPutCount_++;var l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+r)},t.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,s=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(a){r.log_(i+" response",a),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),s&&s(a.s,a.d)})},t.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var s=o.s;if(s!=="ok"){var a=o.d;r.log_("reportStats","Error sending stats: "+a)}})}},t.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+U(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},t.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):nr("Unrecognized action received from server: "+U(n)+`
Are you using the latest client?`)},t.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},t.prototype.scheduleConnect_=function(n){var r=this;_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},t.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},t.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},t.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},t.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>iu&&(this.reconnectDelay_=Ct),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ru)}this.onConnectStatus_(!1)},t.prototype.establishConnection_=function(){return eo(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c,f,h,d,v,m,p=this;return to(this,function(y){switch(y.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+t.nextConnectionId_++,s=this.lastSessionId,a=!1,l=null,u=function(){l?l.close():(a=!0,i())},c=function(g){_(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(g)},this.realtime_={close:u,sendRequest:c},f=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)])];case 2:return h=Z.apply(void 0,[y.sent(),2]),d=h[0],v=h[1],a?H("getToken() completed but was canceled"):(H("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=v&&v.token,l=new Uo(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(g){Q(g+" ("+p.repoInfo_.toString()+")"),p.interrupt(ou)},s)),[3,4];case 3:return m=y.sent(),this.log_("Failed to get token: "+m),a||(this.repoInfo_.nodeAdmin&&Q(m),u()),[3,4];case 4:return[2]}})})},t.prototype.interrupt=function(n){H("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},t.prototype.resume=function(n){H("Resuming connection for reason: "+n),delete this.interruptReasons_[n],er(this.interruptReasons_)&&(this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0))},t.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},t.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},t.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(s){return Sr(s)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},t.prototype.removeListen_=function(n,r){var i=new R(n).toString(),o;if(this.listens.has(i)){var s=this.listens.get(i);o=s.get(r),s.delete(r),s.size===0&&this.listens.delete(i)}else o=void 0;return o},t.prototype.onAuthRevoked_=function(n,r){H("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ii&&(this.reconnectDelay_=Ci,this.authTokenProvider_.notifyForInvalidToken()))},t.prototype.onAppCheckRevoked_=function(n,r){H("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ii&&this.appCheckTokenProvider_.notifyForInvalidToken())},t.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},t.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var s=oe(this.listens.values()),a=s.next();!a.done;a=s.next()){var l=a.value;try{for(var u=(i=void 0,oe(l.values())),c=u.next();!c.done;c=u.next()){var f=c.value;this.sendListen_(f)}}catch(v){i={error:v}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}}catch(v){n={error:v}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},t.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+mo.replace(/\./g,"-")]=1,so()?n["framework.cordova"]=1:ba()&&(n["framework.reactnative"]=1),this.reportStats(n)},t.prototype.shouldReconnect_=function(){var n=gi.getInstance().currentlyOnline();return er(this.interruptReasons_)&&n},t.nextPersistentConnectionId_=0,t.nextConnectionId_=0,t}(Wo);/**
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
 */var S=function(){function e(t,n){this.name=t,this.node=n}return e.Wrap=function(t,n){return new e(t,n)},e}();/**
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
 */var gn=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(t,n){var r=new S(Oe,t),i=new S(Oe,n);return this.compare(r,i)!==0},e.prototype.minPost=function(){return S.MIN},e}();/**
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
 */var $t,Ko=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return $t},set:function(n){$t=n},enumerable:!1,configurable:!0}),t.prototype.compare=function(n,r){return et(n.name,r.name)},t.prototype.isDefinedOn=function(n){throw pt("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(n,r){return!1},t.prototype.minPost=function(){return S.MIN},t.prototype.maxPost=function(){return new S(we,$t)},t.prototype.makePost=function(n,r){return _(typeof n=="string","KeyIndex indexValue must always be a string."),new S(n,$t)},t.prototype.toString=function(){return".key"},t}(gn),ge=new Ko;/**
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
 */var Xt=function(){function e(t,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}return e.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n},e.prototype.hasNext=function(){return this.nodeStack_.length>0},e.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},e}(),ve=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=r!=null?r:e.RED,this.left=i!=null?i:Se.EMPTY_NODE,this.right=o!=null?o:Se.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},e.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},e.prototype.minKey=function(){return this.min_().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(t,n,r){var i=this,o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()},e.prototype.removeMin_=function(){if(this.left.isEmpty())return Se.EMPTY_NODE;var t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()},e.prototype.remove=function(t,n){var r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Se.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()},e.prototype.isRed_=function(){return this.color},e.prototype.fixUp_=function(){var t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},e.prototype.moveRedLeft_=function(){var t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t},e.prototype.moveRedRight_=function(){var t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t},e.prototype.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)},e.prototype.checkMaxDepth_=function(){var t=this.check_();return Math.pow(2,t)<=this.count()+1},e.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)},e.RED=!0,e.BLACK=!1,e}(),su=function(){function e(){}return e.prototype.copy=function(t,n,r,i,o){return this},e.prototype.insert=function(t,n,r){return new ve(t,n,null)},e.prototype.remove=function(t,n){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(t){return!1},e.prototype.reverseTraversal=function(t){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.check_=function(){return 0},e.prototype.isRed_=function(){return!1},e}(),Se=function(){function e(t,n){n===void 0&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}return e.prototype.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,ve.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,ve.BLACK,null,null))},e.prototype.get=function(t){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},e.prototype.getPredecessorKey=function(t){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.root_.isEmpty()},e.prototype.count=function(){return this.root_.count()},e.prototype.minKey=function(){return this.root_.minKey()},e.prototype.maxKey=function(){return this.root_.maxKey()},e.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},e.prototype.getIterator=function(t){return new Xt(this.root_,null,this.comparator_,!1,t)},e.prototype.getIteratorFrom=function(t,n){return new Xt(this.root_,t,this.comparator_,!1,n)},e.prototype.getReverseIteratorFrom=function(t,n){return new Xt(this.root_,t,this.comparator_,!0,n)},e.prototype.getReverseIterator=function(t){return new Xt(this.root_,null,this.comparator_,!0,t)},e.EMPTY_NODE=new su,e}();/**
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
 */function au(e,t){return et(e.name,t.name)}function Pr(e,t){return et(e,t)}/**
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
 */var ir;function lu(e){ir=e}var Qo=function(e){return typeof e=="number"?"number:"+Eo(e):"string:"+e},jo=function(e){if(e.isLeafNode()){var t=e.val();_(typeof t=="string"||typeof t=="number"||typeof t=="object"&&se(t,".sv"),"Priority must be a string or number.")}else _(e===ir||e.isEmpty(),"priority of unexpected type.");_(e===ir||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */var Ei,ut=function(){function e(t,n){n===void 0&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jo(this.priorityNode_)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return Ei},set:function(t){Ei=t},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.priorityNode_},e.prototype.updatePriority=function(t){return new e(this.value_,t)},e.prototype.getImmediateChild=function(t){return t===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return E(t)?this:I(t)===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(t,n){return null},e.prototype.updateImmediateChild=function(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},e.prototype.updateChild=function(t,n){var r=I(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(_(r!==".priority"||Fe(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(t),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(t,n){return!1},e.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qo(this.priorityNode_.val())+":");var n=typeof this.value_;t+=n+":",n==="number"?t+=Eo(this.value_):t+=this.value_,this.lazyHash_=wo(t)}return this.lazyHash_},e.prototype.getValue=function(){return this.value_},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(_(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},e.prototype.compareToLeafNode_=function(t){var n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(r);return _(i>=0,"Unknown leaf type: "+n),_(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode()){var n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();/**
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
 */var Yo,qo;function uu(e){Yo=e}function cu(e){qo=e}var fu=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),s=i.compareTo(o);return s===0?et(n.name,r.name):s},t.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},t.prototype.minPost=function(){return S.MIN},t.prototype.maxPost=function(){return new S(we,new ut("[PRIORITY-POST]",qo))},t.prototype.makePost=function(n,r){var i=Yo(n);return new S(r,new ut("[PRIORITY-POST]",i))},t.prototype.toString=function(){return".priority"},t}(gn),k=new fu;/**
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
 */var hu=Math.log(2),du=function(){function e(t){var n=function(o){return parseInt(Math.log(o)/hu,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(t+1),this.current_=this.count-1;var i=r(this.count);this.bits_=t+1&i}return e.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_);return this.current_--,t},e}(),sn=function(e,t,n,r){e.sort(t);var i=function(l,u){var c=u-l,f,h;if(c===0)return null;if(c===1)return f=e[l],h=n?n(f):f,new ve(h,f.node,ve.BLACK,null,null);var d=parseInt(c/2,10)+l,v=i(l,d),m=i(d+1,u);return f=e[d],h=n?n(f):f,new ve(h,f.node,ve.BLACK,v,m)},o=function(l){for(var u=null,c=null,f=e.length,h=function(y,g){var T=f-y,M=f;f-=y;var te=i(T+1,M),ye=e[T],Zs=n?n(ye):ye;d(new ve(Zs,ye.node,g,null,te))},d=function(y){u?(u.left=y,u=y):(c=y,u=y)},v=0;v<l.count;++v){var m=l.nextBitIsOne(),p=Math.pow(2,l.count-(v+1));m?h(p,ve.BLACK):(h(p,ve.BLACK),h(p,ve.RED))}return c},s=new du(e.length),a=o(s);return new Se(r||t,a)};/**
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
 */var Hn,rt={},an=function(){function e(t,n){this.indexes_=t,this.indexSet_=n}return Object.defineProperty(e,"Default",{get:function(){return _(rt&&k,"ChildrenNode.ts has not been loaded"),Hn=Hn||new e({".priority":rt},{".priority":k}),Hn},enumerable:!1,configurable:!0}),e.prototype.get=function(t){var n=Xe(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Se?n:null},e.prototype.hasIndex=function(t){return se(this.indexSet_,t.toString())},e.prototype.addIndex=function(t,n){_(t!==ge,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(S.Wrap),s=o.getNext();s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();var a;i?a=sn(r,t.getCompare()):a=rt;var l=t.toString(),u=Le({},this.indexSet_);u[l]=t;var c=Le({},this.indexes_);return c[l]=a,new e(c,u)},e.prototype.addToIndexes=function(t,n){var r=this,i=tn(this.indexes_,function(o,s){var a=Xe(r.indexSet_,s);if(_(a,"Missing index implementation for "+s),o===rt)if(a.isDefinedOn(t.node)){for(var l=[],u=n.getIterator(S.Wrap),c=u.getNext();c;)c.name!==t.name&&l.push(c),c=u.getNext();return l.push(t),sn(l,a.getCompare())}else return rt;else{var f=n.get(t.name),h=o;return f&&(h=h.remove(new S(t.name,f))),h.insert(t,t.node)}});return new e(i,this.indexSet_)},e.prototype.removeFromIndexes=function(t,n){var r=tn(this.indexes_,function(i){if(i===rt)return i;var o=n.get(t.name);return o?i.remove(new S(t.name,o)):i});return new e(r,this.indexSet_)},e}();/**
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
 */var It,C=function(){function e(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jo(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return It||(It=new e(new Se(Pr),null,an.Default))},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.priorityNode_||It},e.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},e.prototype.getImmediateChild=function(t){if(t===".priority")return this.getPriority();var n=this.children_.get(t);return n===null?It:n},e.prototype.getChild=function(t){var n=I(t);return n===null?this:this.getImmediateChild(n).getChild(A(t))},e.prototype.hasChild=function(t){return this.children_.get(t)!==null},e.prototype.updateImmediateChild=function(t,n){if(_(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);var r=new S(t,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));var s=i.isEmpty()?It:this.priorityNode_;return new e(i,s,o)},e.prototype.updateChild=function(t,n){var r=I(t);if(r===null)return n;_(I(t)!==".priority"||Fe(t)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(A(t),n);return this.updateImmediateChild(r,i)},e.prototype.isEmpty=function(){return this.children_.isEmpty()},e.prototype.numChildren=function(){return this.children_.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(k,function(l,u){n[l]=u.val(t),r++,o&&e.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):o=!1}),!t&&o&&i<2*r){var s=[];for(var a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.getPriority().isEmpty()||(t+="priority:"+Qo(this.getPriority().val())+":"),this.forEachChild(k,function(n,r){var i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":wo(t)}return this.lazyHash_},e.prototype.getPredecessorChildName=function(t,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new S(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)},e.prototype.getFirstChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},e.prototype.getFirstChild=function(t){var n=this.getFirstChildName(t);return n?new S(n,this.children_.get(n)):null},e.prototype.getLastChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},e.prototype.getLastChild=function(t){var n=this.getLastChildName(t);return n?new S(n,this.children_.get(n)):null},e.prototype.forEachChild=function(t,n){var r=this.resolveIndex_(t);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},e.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},e.prototype.getIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,function(s){return s});for(var i=this.children_.getIteratorFrom(t.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i},e.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},e.prototype.getReverseIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,function(s){return s});for(var i=this.children_.getReverseIteratorFrom(t.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i},e.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===zt?-1:0},e.prototype.withIndex=function(t){if(t===ge||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},e.prototype.isIndexed=function(t){return t===ge||this.indexMap_.hasIndex(t)},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode())return!1;var n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(k),i=n.getIterator(k),o=r.getNext(),s=i.getNext();o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1},e.prototype.resolveIndex_=function(t){return t===ge?null:this.indexMap_.get(t.toString())},e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,e}(),pu=function(e){F(t,e);function t(){return e.call(this,new Se(Pr),C.EMPTY_NODE,an.Default)||this}return t.prototype.compareTo=function(n){return n===this?0:1},t.prototype.equals=function(n){return n===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(n){return C.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(C),zt=new pu;Object.defineProperties(S,{MIN:{value:new S(Oe,C.EMPTY_NODE)},MAX:{value:new S(we,zt)}});Ko.__EMPTY_NODE=C.EMPTY_NODE;ut.__childrenNodeConstructor=C;lu(zt);cu(zt);/**
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
 */var vu=!0;function D(e,t){if(t===void 0&&(t=null),e===null)return C.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),_(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){var n=e;return new ut(n,D(t))}if(!(e instanceof Array)&&vu){var r=[],i=!1,o=e;if(W(o,function(u,c){if(u.substring(0,1)!=="."){var f=D(c);f.isEmpty()||(i=i||!f.getPriority().isEmpty(),r.push(new S(u,f)))}}),r.length===0)return C.EMPTY_NODE;var s=sn(r,au,function(u){return u.name},Pr);if(i){var a=sn(r,k.getCompare());return new C(s,D(t),new an({".priority":a},{".priority":k}))}else return new C(s,D(t),an.Default)}else{var l=C.EMPTY_NODE;return W(e,function(u,c){if(se(e,u)&&u.substring(0,1)!=="."){var f=D(c);(f.isLeafNode()||!f.isEmpty())&&(l=l.updateImmediateChild(u,f))}}),l.updatePriority(D(t))}}uu(D);/**
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
 */var Lr=function(e){F(t,e);function t(n){var r=e.call(this)||this;return r.indexPath_=n,_(!E(n)&&I(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return t.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),s=i.compareTo(o);return s===0?et(n.name,r.name):s},t.prototype.makePost=function(n,r){var i=D(n),o=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(r,o)},t.prototype.maxPost=function(){var n=C.EMPTY_NODE.updateChild(this.indexPath_,zt);return new S(we,n)},t.prototype.toString=function(){return Pt(this.indexPath_,0).join("/")},t}(gn);/**
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
 */var _u=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?et(n.name,r.name):i},t.prototype.isDefinedOn=function(n){return!0},t.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},t.prototype.minPost=function(){return S.MIN},t.prototype.maxPost=function(){return S.MAX},t.prototype.makePost=function(n,r){var i=D(n);return new S(r,i)},t.prototype.toString=function(){return".value"},t}(gn),Dr=new _u;/**
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
 */var ct="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",or="-",$o="z",Xo=786,mu=function(){var e=0,t=[];return function(n){var r=n===e;e=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=ct.charAt(n%64),n=Math.floor(n/64);_(n===0,"Cannot push at time == 0");var s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=ct.charAt(t[i]);return _(s.length===20,"nextPushId: Length should be 20."),s}}(),Si=function(e){if(e===""+Tr)return or;var t=rn(e);if(t!=null)return""+(t+1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<Xo)return n.push(or),n.join("");for(var i=n.length-1;i>=0&&n[i]===$o;)i--;if(i===-1)return we;var o=n[i],s=ct.charAt(ct.indexOf(o)+1);return n[i]=s,n.slice(0,i+1).join("")},Ti=function(e){if(e===""+So)return Oe;var t=rn(e);if(t!=null)return""+(t-1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===or?n.length===1?""+Tr:(delete n[n.length-1],n.join("")):(n[n.length-1]=ct.charAt(ct.indexOf(n[n.length-1])-1),n.join("")+$o.repeat(Xo-n.length))};/**
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
 */function Jo(e){return{type:"value",snapshotNode:e}}function ft(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Lt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Dt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function yu(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */var Fr=function(){function e(t){this.index_=t}return e.prototype.updateChild=function(t,n,r,i,o,s){_(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(Lt(n,a)):_(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ft(n,r)):s.trackChildChange(Dt(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)},e.prototype.updateFullNode=function(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(k,function(i,o){n.hasChild(i)||r.trackChildChange(Lt(i,o))}),n.isLeafNode()||n.forEachChild(k,function(i,o){if(t.hasChild(i)){var s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(Dt(i,o,s))}else r.trackChildChange(ft(i,o))})),n.withIndex(this.index_)},e.prototype.updatePriority=function(t,n){return t.isEmpty()?C.EMPTY_NODE:t.updatePriority(n)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.index_},e}();/**
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
 */var Zo=function(){function e(t){this.indexedFilter_=new Fr(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},e.prototype.updateChild=function(t,n,r,i,o,s){return this.matches(new S(n,r))||(r=C.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)},e.prototype.updateFullNode=function(t,n,r){n.isLeafNode()&&(n=C.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);var o=this;return n.forEachChild(k,function(s,a){o.matches(new S(s,a))||(i=i.updateImmediateChild(s,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(t){if(t.hasStart()){var n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()},e.getEndPost_=function(t){if(t.hasEnd()){var n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()},e}();/**
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
 */var gu=function(){function e(t){this.rangedFilter_=new Zo(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return e.prototype.updateChild=function(t,n,r,i,o,s){return this.rangedFilter_.matches(new S(n,r))||(r=C.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)},e.prototype.updateFullNode=function(t,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var s=0;o.hasNext()&&s<this.limit_;){var a=o.getNext(),l=void 0;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);var u=void 0,c=void 0,f=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();f=function(p,y){return h(y,p)}}else o=i.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();for(var s=0,d=!1;o.hasNext();){var a=o.getNext();!d&&f(u,a)<=0&&(d=!0);var l=d&&s<this.limit_&&f(a,c)<=0;l?s++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},e.prototype.getIndex=function(){return this.index_},e.prototype.fullLimitUpdateChild_=function(t,n,r,i,o){var s;if(this.reverse_){var a=this.index_.getCompare();s=function(g,T){return a(T,g)}}else s=this.index_.getCompare();var l=t;_(l.numChildren()===this.limit_,"");var u=new S(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(l.hasChild(n)){for(var h=l.getImmediateChild(n),d=i.getChildAfterChild(this.index_,c,this.reverse_);d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var v=d==null?1:s(d,u),m=f&&!r.isEmpty()&&v>=0;if(m)return o!=null&&o.trackChildChange(Dt(n,r,h)),l.updateImmediateChild(n,r);o!=null&&o.trackChildChange(Lt(n,h));var p=l.updateImmediateChild(n,C.EMPTY_NODE),y=d!=null&&this.rangedFilter_.matches(d);return y?(o!=null&&o.trackChildChange(ft(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}else return r.isEmpty()?t:f&&s(c,u)>=0?(o!=null&&(o.trackChildChange(Lt(c.name,c.node)),o.trackChildChange(ft(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,C.EMPTY_NODE)):t},e}();/**
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
 */var es=function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=k}return e.prototype.hasStart=function(){return this.startSet_},e.prototype.hasStartAfter=function(){return this.startAfterSet_},e.prototype.hasEndBefore=function(){return this.endBeforeSet_},e.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},e.prototype.getIndexStartValue=function(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},e.prototype.getIndexStartName=function(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oe},e.prototype.hasEnd=function(){return this.endSet_},e.prototype.getIndexEndValue=function(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},e.prototype.getIndexEndName=function(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:we},e.prototype.hasLimit=function(){return this.limitSet_},e.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},e.prototype.getLimit=function(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_},e.prototype.getIndex=function(){return this.index_},e.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===k},e.prototype.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}();function bu(e){return e.loadsAllData()?new Fr(e.getIndex()):e.hasLimit()?new gu(e):new Zo(e)}function wu(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Cu(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function sr(e,t,n){var r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Iu(e,t,n){var r;if(e.index_===ge)typeof t=="string"&&(t=Si(t)),r=sr(e,t,n);else{var i=void 0;n==null?i=we:i=Si(n),r=sr(e,t,i)}return r.startAfterSet_=!0,r}function ar(e,t,n){var r=e.copy();return r.endSet_=!0,t===void 0&&(t=null),r.indexEndValue_=t,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Eu(e,t,n){var r,i;return e.index_===ge?(typeof t=="string"&&(t=Ti(t)),i=ar(e,t,n)):(n==null?r=Oe:r=Ti(n),i=ar(e,t,r)),i.endBeforeSet_=!0,i}function bn(e,t){var n=e.copy();return n.index_=t,n}function Oi(e){var t={};if(e.isDefault())return t;var n;return e.index_===k?n="$priority":e.index_===Dr?n="$value":e.index_===ge?n="$key":(_(e.index_ instanceof Lr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=U(n),e.startSet_&&(t.startAt=U(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+U(e.indexStartName_))),e.endSet_&&(t.endAt=U(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+U(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ri(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==k&&(t.i=e.index_.toString()),t}/**
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
 */var Su=function(e){F(t,e);function t(n,r,i,o){var s=e.call(this)||this;return s.repoInfo_=n,s.onDataUpdate_=r,s.authTokenProvider_=i,s.appCheckTokenProvider_=o,s.log_=Wt("p:rest:"),s.listens_={},s}return t.prototype.reportStats=function(n){throw new Error("Method not implemented.")},t.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(_(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},t.prototype.listen=function(n,r,i,o){var s=this,a=n._path.toString();this.log_("Listen called for "+a+" "+n._queryIdentifier);var l=t.getListenId_(n,i),u={};this.listens_[l]=u;var c=Oi(n._queryParams);this.restRequest_(a+".json",c,function(f,h){var d=h;if(f===404&&(d=null,f=null),f===null&&s.onDataUpdate_(a,d,!1,i),Xe(s.listens_,l)===u){var v;f?f===401?v="permission_denied":v="rest_error:"+f:v="ok",o(v,null)}})},t.prototype.unlisten=function(n,r){var i=t.getListenId_(n,r);delete this.listens_[i]},t.prototype.get=function(n){var r=this,i=Oi(n._queryParams),o=n._path.toString(),s=new ne;return this.restRequest_(o+".json",i,function(a,l){var u=l;a===404&&(u=null,a=null),a===null?(r.onDataUpdate_(o,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise},t.prototype.refreshAuthToken=function(n){},t.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(s){var a=Z(s,2),l=a[0],u=a[1];l&&l.accessToken&&(r.auth=l.accessToken),u&&u.token&&(r.ac=u.token);var c=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+Oa(r);o.log_("Sending REST request for "+c);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(i&&f.readyState===4){o.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);var h=null;if(f.status>=200&&f.status<300){try{h=kt(f.responseText)}catch{Q("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&Q("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})},t}(Wo);/**
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
 */var Tu=function(){function e(){this.rootNode_=C.EMPTY_NODE}return e.prototype.getNode=function(t){return this.rootNode_.getChild(t)},e.prototype.updateSnapshot=function(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)},e}();/**
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
 */function ln(){return{value:null,children:new Map}}function _t(e,t,n){if(E(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{var r=I(t);e.children.has(r)||e.children.set(r,ln());var i=e.children.get(r);t=A(t),_t(i,t,n)}}function lr(e,t){if(E(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;var n=e.value;return e.value=null,n.forEachChild(k,function(o,s){_t(e,new R(o),s)}),lr(e,t)}else if(e.children.size>0){var r=I(t);if(t=A(t),e.children.has(r)){var i=lr(e.children.get(r),t);i&&e.children.delete(r)}return e.children.size===0}else return!0}function ur(e,t,n){e.value!==null?n(t,e.value):Ou(e,function(r,i){var o=new R(t.toString()+"/"+r);ur(i,o,n)})}function Ou(e,t){e.children.forEach(function(n,r){t(r,n)})}/**
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
 */var ts=function(){function e(t){this.collection_=t,this.last_=null}return e.prototype.get=function(){var t=this.collection_.get(),n=Le({},t);return this.last_&&W(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=t,n},e}();/**
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
 */var xi=10*1e3,Ru=30*1e3,xu=5*60*1e3,Au=function(){function e(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ts(t);var r=xi+(Ru-xi)*Math.random();St(this.reportStats_.bind(this),Math.floor(r))}return e.prototype.reportStats_=function(){var t=this,n=this.statsListener_.get(),r={},i=!1;W(n,function(o,s){s>0&&se(t.statsToReport_,o)&&(r[o]=s,i=!0)}),i&&this.server_.reportStats(r),St(this.reportStats_.bind(this),Math.floor(Math.random()*2*xu))},e}();function Nu(e,t){e.statsToReport_[t]=!0}/**
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
 */var _e;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function Mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Br(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */var ku=function(){function e(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=_e.ACK_USER_WRITE,this.source=Mr()}return e.prototype.operationForChild=function(t){if(E(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new R(t));return new e(O(),n,this.revert)}else return _(I(this.path)===t,"operationForChild called for unrelated child."),new e(A(this.path),this.affectedTree,this.revert)},e}();/**
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
 */var ns=function(){function e(t,n){this.source=t,this.path=n,this.type=_e.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return E(this.path)?new e(this.source,O()):new e(this.source,A(this.path))},e}();/**
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
 */var wn=function(){function e(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=_e.OVERWRITE}return e.prototype.operationForChild=function(t){return E(this.path)?new e(this.source,O(),this.snap.getImmediateChild(t)):new e(this.source,A(this.path),this.snap)},e}();/**
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
 */var Ur=function(){function e(t,n,r){this.source=t,this.path=n,this.children=r,this.type=_e.MERGE}return e.prototype.operationForChild=function(t){if(E(this.path)){var n=this.children.subtree(new R(t));return n.isEmpty()?null:n.value?new wn(this.source,O(),n.value):new e(this.source,O(),n)}else return _(I(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,A(this.path),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}();/**
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
 */var Me=function(){function e(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}return e.prototype.isFullyInitialized=function(){return this.fullyInitialized_},e.prototype.isFiltered=function(){return this.filtered_},e.prototype.isCompleteForPath=function(t){if(E(t))return this.isFullyInitialized()&&!this.filtered_;var n=I(t);return this.isCompleteForChild(n)},e.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},e.prototype.getNode=function(){return this.node_},e}();/**
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
 */var Pu=function(){function e(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}return e}();function Lu(e,t,n,r){var i=[],o=[];return t.forEach(function(s){s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(yu(s.childName,s.snapshotNode))}),Et(e,i,"child_removed",t,r,n),Et(e,i,"child_added",t,r,n),Et(e,i,"child_moved",o,r,n),Et(e,i,"child_changed",t,r,n),Et(e,i,"value",t,r,n),i}function Et(e,t,n,r,i,o){var s=r.filter(function(a){return a.type===n});s.sort(function(a,l){return Fu(e,a,l)}),s.forEach(function(a){var l=Du(e,a,o);i.forEach(function(u){u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function Du(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Fu(e,t,n){if(t.childName==null||n.childName==null)throw pt("Should only compare child_ events.");var r=new S(t.childName,t.snapshotNode),i=new S(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function Cn(e,t){return{eventCache:e,serverCache:t}}function Ot(e,t,n,r){return Cn(new Me(t,n,r),e.serverCache)}function rs(e,t,n,r){return Cn(e.eventCache,new Me(t,n,r))}function un(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Je(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */var Gn,Mu=function(){return Gn||(Gn=new Se(pl)),Gn},ae=function(){function e(t,n){n===void 0&&(n=Mu()),this.value=t,this.children=n}return e.fromObject=function(t){var n=new e(null);return W(t,function(r,i){n=n.set(new R(r),i)}),n},e.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(t,n){if(this.value!=null&&n(this.value))return{path:O(),value:this.value};if(E(t))return null;var r=I(t),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(A(t),n);if(o!=null){var s=L(new R(r),o.path);return{path:s,value:o.value}}else return null}else return null},e.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},e.prototype.subtree=function(t){if(E(t))return this;var n=I(t),r=this.children.get(n);return r!==null?r.subtree(A(t)):new e(null)},e.prototype.set=function(t,n){if(E(t))return new e(n,this.children);var r=I(t),i=this.children.get(r)||new e(null),o=i.set(A(t),n),s=this.children.insert(r,o);return new e(this.value,s)},e.prototype.remove=function(t){if(E(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=I(t),r=this.children.get(n);if(r){var i=r.remove(A(t)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new e(null):new e(this.value,o)}else return this},e.prototype.get=function(t){if(E(t))return this.value;var n=I(t),r=this.children.get(n);return r?r.get(A(t)):null},e.prototype.setTree=function(t,n){if(E(t))return n;var r=I(t),i=this.children.get(r)||new e(null),o=i.setTree(A(t),n),s=void 0;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new e(this.value,s)},e.prototype.fold=function(t){return this.fold_(O(),t)},e.prototype.fold_=function(t,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(L(t,i),n)}),n(t,this.value,r)},e.prototype.findOnPath=function(t,n){return this.findOnPath_(t,O(),n)},e.prototype.findOnPath_=function(t,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(E(t))return null;var o=I(t),s=this.children.get(o);return s?s.findOnPath_(A(t),L(n,o),r):null},e.prototype.foreachOnPath=function(t,n){return this.foreachOnPath_(t,O(),n)},e.prototype.foreachOnPath_=function(t,n,r){if(E(t))return this;this.value&&r(n,this.value);var i=I(t),o=this.children.get(i);return o?o.foreachOnPath_(A(t),L(n,i),r):new e(null)},e.prototype.foreach=function(t){this.foreach_(O(),t)},e.prototype.foreach_=function(t,n){this.children.inorderTraversal(function(r,i){i.foreach_(L(t,r),n)}),this.value&&n(t,this.value)},e.prototype.foreachChild=function(t){this.children.inorderTraversal(function(n,r){r.value&&t(n,r.value)})},e}();/**
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
 */var Te=function(){function e(t){this.writeTree_=t}return e.empty=function(){return new e(new ae(null))},e}();function Rt(e,t,n){if(E(t))return new Te(new ae(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){var i=r.path,o=r.value,s=ee(i,t);return o=o.updateChild(s,n),new Te(e.writeTree_.set(i,o))}else{var a=new ae(n),l=e.writeTree_.setTree(t,a);return new Te(l)}}function cr(e,t,n){var r=e;return W(n,function(i,o){r=Rt(r,L(t,i),o)}),r}function Ai(e,t){if(E(t))return Te.empty();var n=e.writeTree_.setTree(t,new ae(null));return new Te(n)}function fr(e,t){return tt(e,t)!=null}function tt(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ee(n.path,t)):null}function Ni(e){var t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(k,function(r,i){t.push(new S(r,i))}):e.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&t.push(new S(r,i.value))}),t}function ke(e,t){if(E(t))return e;var n=tt(e,t);return n!=null?new Te(new ae(n)):new Te(e.writeTree_.subtree(t))}function hr(e){return e.writeTree_.isEmpty()}function ht(e,t){return is(O(),e.writeTree_,t)}function is(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal(function(i,o){i===".priority"?(_(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=is(L(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(L(e,".priority"),r)),n}/**
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
 */function In(e,t){return ls(t,e)}function Vu(e,t,n,r,i){_(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Rt(e.visibleWrites,t,n)),e.lastWriteId=r}function Bu(e,t,n,r){_(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=cr(e.visibleWrites,t,n),e.lastWriteId=r}function Uu(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Wu(e,t){var n=e.allWrites.findIndex(function(u){return u.writeId===t});_(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,s=e.allWrites.length-1;i&&s>=0;){var a=e.allWrites[s];a.visible&&(s>=n&&zu(a,r.path)?i=!1:ue(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return Hu(e),!0;if(r.snap)e.visibleWrites=Ai(e.visibleWrites,r.path);else{var l=r.children;W(l,function(u){e.visibleWrites=Ai(e.visibleWrites,L(r.path,u))})}return!0}else return!1}function zu(e,t){if(e.snap)return ue(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&ue(L(e.path,n),t))return!0;return!1}function Hu(e){e.visibleWrites=os(e.allWrites,Gu,O()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Gu(e){return e.visible}function os(e,t,n){for(var r=Te.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var s=o.path,a=void 0;if(o.snap)ue(n,s)?(a=ee(n,s),r=Rt(r,a,o.snap)):ue(s,n)&&(a=ee(s,n),r=Rt(r,O(),o.snap.getChild(a)));else if(o.children){if(ue(n,s))a=ee(n,s),r=cr(r,a,o.children);else if(ue(s,n))if(a=ee(s,n),E(a))r=cr(r,O(),o.children);else{var l=Xe(o.children,I(a));if(l){var u=l.getChild(A(a));r=Rt(r,O(),u)}}}else throw pt("WriteRecord should have .snap or .children")}}return r}function ss(e,t,n,r,i){if(!r&&!i){var o=tt(e.visibleWrites,t);if(o!=null)return o;var s=ke(e.visibleWrites,t);if(hr(s))return n;if(n==null&&!fr(s,O()))return null;var a=n||C.EMPTY_NODE;return ht(s,a)}else{var l=ke(e.visibleWrites,t);if(!i&&hr(l))return n;if(!i&&n==null&&!fr(l,O()))return null;var u=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(ue(h.path,t)||ue(t,h.path))},c=os(e.allWrites,u,t),a=n||C.EMPTY_NODE;return ht(c,a)}}function Ku(e,t,n){var r=C.EMPTY_NODE,i=tt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(k,function(a,l){r=r.updateImmediateChild(a,l)}),r;if(n){var o=ke(e.visibleWrites,t);return n.forEachChild(k,function(a,l){var u=ht(ke(o,new R(a)),l);r=r.updateImmediateChild(a,u)}),Ni(o).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}else{var s=ke(e.visibleWrites,t);return Ni(s).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}}function Qu(e,t,n,r,i){_(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=L(t,n);if(fr(e.visibleWrites,o))return null;var s=ke(e.visibleWrites,o);return hr(s)?i.getChild(n):ht(s,i.getChild(n))}function ju(e,t,n,r){var i=L(t,n),o=tt(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var s=ke(e.visibleWrites,i);return ht(s,r.getNode().getImmediateChild(n))}else return null}function Yu(e,t){return tt(e.visibleWrites,t)}function qu(e,t,n,r,i,o,s){var a,l=ke(e.visibleWrites,t),u=tt(l,O());if(u!=null)a=u;else if(n!=null)a=ht(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){for(var c=[],f=s.getCompare(),h=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s),d=h.getNext();d&&c.length<i;)f(d,r)!==0&&c.push(d),d=h.getNext();return c}else return[]}function $u(){return{visibleWrites:Te.empty(),allWrites:[],lastWriteId:-1}}function cn(e,t,n,r){return ss(e.writeTree,e.treePath,t,n,r)}function Wr(e,t){return Ku(e.writeTree,e.treePath,t)}function ki(e,t,n,r){return Qu(e.writeTree,e.treePath,t,n,r)}function fn(e,t){return Yu(e.writeTree,L(e.treePath,t))}function Xu(e,t,n,r,i,o){return qu(e.writeTree,e.treePath,t,n,r,i,o)}function zr(e,t,n){return ju(e.writeTree,e.treePath,t,n)}function as(e,t){return ls(L(e.treePath,t),e.writeTree)}function ls(e,t){return{treePath:e,writeTree:t}}/**
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
 */var Ju=function(){function e(){this.changeMap=new Map}return e.prototype.trackChildChange=function(t){var n=t.type,r=t.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Dt(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,Lt(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ft(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Dt(r,t.snapshotNode,i.oldSnap));else throw pt("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)},e.prototype.getChanges=function(){return Array.from(this.changeMap.values())},e}();/**
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
 */var Zu=function(){function e(){}return e.prototype.getCompleteChild=function(t){return null},e.prototype.getChildAfterChild=function(t,n,r){return null},e}(),us=new Zu,Hr=function(){function e(t,n,r){r===void 0&&(r=null),this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}return e.prototype.getCompleteChild=function(t){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);var r=this.optCompleteServerCache_!=null?new Me(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,t,r)},e.prototype.getChildAfterChild=function(t,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Je(this.viewCache_),o=Xu(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]},e}();/**
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
 */function ec(e){return{filter:e}}function tc(e,t){_(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),_(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function nc(e,t,n,r,i){var o=new Ju,s,a;if(n.type===_e.OVERWRITE){var l=n;l.source.fromUser?s=dr(e,t,l.path,l.snap,r,i,o):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!E(l.path),s=hn(e,t,l.path,l.snap,r,i,a,o))}else if(n.type===_e.MERGE){var u=n;u.source.fromUser?s=ic(e,t,u.path,u.children,r,i,o):(_(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=pr(e,t,u.path,u.children,r,i,a,o))}else if(n.type===_e.ACK_USER_WRITE){var c=n;c.revert?s=ac(e,t,c.path,r,i,o):s=oc(e,t,c.path,c.affectedTree,r,i,o)}else if(n.type===_e.LISTEN_COMPLETE)s=sc(e,t,n.path,r,o);else throw pt("Unknown operation type: "+n.type);var f=o.getChanges();return rc(t,s,f),{viewCache:s,changes:f}}function rc(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=un(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Jo(un(t)))}}function cs(e,t,n,r,i,o){var s=t.eventCache;if(fn(r,n)!=null)return t;var a=void 0,l=void 0;if(E(n))if(_(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var u=Je(t),c=u instanceof C?u:C.EMPTY_NODE,f=Wr(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,o)}else{var h=cn(r,Je(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var d=I(n);if(d===".priority"){_(Fe(n)===1,"Can't have a priority with additional path components");var v=s.getNode();l=t.serverCache.getNode();var m=ki(r,n,v,l);m!=null?a=e.filter.updatePriority(v,m):a=s.getNode()}else{var p=A(n),y=void 0;if(s.isCompleteForChild(d)){l=t.serverCache.getNode();var g=ki(r,n,s.getNode(),l);g!=null?y=s.getNode().getImmediateChild(d).updateChild(p,g):y=s.getNode().getImmediateChild(d)}else y=zr(r,d,t.serverCache);y!=null?a=e.filter.updateChild(s.getNode(),d,y,p,i,o):a=s.getNode()}}return Ot(t,a,s.isFullyInitialized()||E(n),e.filter.filtersNodes())}function hn(e,t,n,r,i,o,s,a){var l=t.serverCache,u,c=s?e.filter:e.filter.getIndexedFilter();if(E(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){var f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{var h=I(n);if(!l.isCompleteForPath(n)&&Fe(n)>1)return t;var d=A(n),v=l.getNode().getImmediateChild(h),m=v.updateChild(d,r);h===".priority"?u=c.updatePriority(l.getNode(),m):u=c.updateChild(l.getNode(),h,m,d,us,null)}var p=rs(t,u,l.isFullyInitialized()||E(n),c.filtersNodes()),y=new Hr(i,p,o);return cs(e,p,n,i,y,a)}function dr(e,t,n,r,i,o,s){var a=t.eventCache,l,u,c=new Hr(i,t,o);if(E(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Ot(t,u,!0,e.filter.filtersNodes());else{var f=I(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ot(t,u,a.isFullyInitialized(),a.isFiltered());else{var h=A(n),d=a.getNode().getImmediateChild(f),v=void 0;if(E(h))v=r;else{var m=c.getCompleteChild(f);m!=null?Nr(h)===".priority"&&m.getChild(Ho(h)).isEmpty()?v=m:v=m.updateChild(h,r):v=C.EMPTY_NODE}if(d.equals(v))l=t;else{var p=e.filter.updateChild(a.getNode(),f,v,h,c,s);l=Ot(t,p,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Pi(e,t){return e.eventCache.isCompleteForChild(t)}function ic(e,t,n,r,i,o,s){var a=t;return r.foreach(function(l,u){var c=L(n,l);Pi(t,I(c))&&(a=dr(e,a,c,u,i,o,s))}),r.foreach(function(l,u){var c=L(n,l);Pi(t,I(c))||(a=dr(e,a,c,u,i,o,s))}),a}function Li(e,t,n){return n.foreach(function(r,i){t=t.updateChild(r,i)}),t}function pr(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var l=t,u;E(n)?u=r:u=new ae(null).setTree(n,r);var c=t.serverCache.getNode();return u.children.inorderTraversal(function(f,h){if(c.hasChild(f)){var d=t.serverCache.getNode().getImmediateChild(f),v=Li(e,d,h);l=hn(e,l,new R(f),v,i,o,s,a)}}),u.children.inorderTraversal(function(f,h){var d=!t.serverCache.isCompleteForChild(f)&&h.value===void 0;if(!c.hasChild(f)&&!d){var v=t.serverCache.getNode().getImmediateChild(f),m=Li(e,v,h);l=hn(e,l,new R(f),m,i,o,s,a)}}),l}function oc(e,t,n,r,i,o,s){if(fn(i,n)!=null)return t;var a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(E(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return hn(e,t,n,l.getNode().getChild(n),i,o,a,s);if(E(n)){var u=new ae(null);return l.getNode().forEachChild(ge,function(f,h){u=u.set(new R(f),h)}),pr(e,t,n,u,i,o,a,s)}else return t}else{var c=new ae(null);return r.foreach(function(f,h){var d=L(n,f);l.isCompleteForPath(d)&&(c=c.set(f,l.getNode().getChild(d)))}),pr(e,t,n,c,i,o,a,s)}}function sc(e,t,n,r,i){var o=t.serverCache,s=rs(t,o.getNode(),o.isFullyInitialized()||E(n),o.isFiltered());return cs(e,s,n,r,us,i)}function ac(e,t,n,r,i,o){var s;if(fn(r,n)!=null)return t;var a=new Hr(r,t,i),l=t.eventCache.getNode(),u=void 0;if(E(n)||I(n)===".priority"){var c=void 0;if(t.serverCache.isFullyInitialized())c=cn(r,Je(t));else{var f=t.serverCache.getNode();_(f instanceof C,"serverChildren would be complete if leaf node"),c=Wr(r,f)}c=c,u=e.filter.updateFullNode(l,c,o)}else{var h=I(n),d=zr(r,h,t.serverCache);d==null&&t.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=e.filter.updateChild(l,h,d,A(n),a,o):t.eventCache.getNode().hasChild(h)?u=e.filter.updateChild(l,h,C.EMPTY_NODE,A(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=cn(r,Je(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||fn(r,O())!=null,Ot(t,u,s,e.filter.filtersNodes())}/**
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
 */var lc=function(){function e(t,n){this.query_=t,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new Fr(r.getIndex()),o=bu(r);this.processor_=ec(o);var s=n.serverCache,a=n.eventCache,l=i.updateFullNode(C.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(C.EMPTY_NODE,a.getNode(),null),c=new Me(l,s.isFullyInitialized(),i.filtersNodes()),f=new Me(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Cn(f,c),this.eventGenerator_=new Pu(this.query_)}return Object.defineProperty(e.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),e}();function uc(e){return e.viewCache_.serverCache.getNode()}function cc(e){return un(e.viewCache_)}function fc(e,t){var n=Je(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!E(t)&&!n.getImmediateChild(I(t)).isEmpty())?n.getChild(t):null}function Di(e){return e.eventRegistrations_.length===0}function hc(e,t){e.eventRegistrations_.push(t)}function Fi(e,t,n){var r=[];if(n){_(t==null,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach(function(l){var u=l.createCancelEvent(n,i);u&&r.push(u)})}if(t){for(var o=[],s=0;s<e.eventRegistrations_.length;++s){var a=e.eventRegistrations_[s];if(!a.matches(t))o.push(a);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function Mi(e,t,n,r){t.type===_e.MERGE&&t.source.queryId!==null&&(_(Je(e.viewCache_),"We should always have a full cache before handling merges"),_(un(e.viewCache_),"Missing event cache, even though we have a server cache"));var i=e.viewCache_,o=nc(e.processor_,i,t,n,r);return tc(e.processor_,o.viewCache),_(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,fs(e,o.changes,o.viewCache.eventCache.getNode(),null)}function dc(e,t){var n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(k,function(o,s){r.push(ft(o,s))})}return n.isFullyInitialized()&&r.push(Jo(n.getNode())),fs(e,r,n.getNode(),t)}function fs(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return Lu(e.eventGenerator_,t,n,i)}/**
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
 */var dn,hs=function(){function e(){this.views=new Map}return e}();function pc(e){_(!dn,"__referenceConstructor has already been defined"),dn=e}function vc(){return _(dn,"Reference.ts has not been loaded"),dn}function _c(e){return e.views.size===0}function Gr(e,t,n,r){var i,o,s=t.source.queryId;if(s!==null){var a=e.views.get(s);return _(a!=null,"SyncTree gave us an op for an invalid query."),Mi(a,t,n,r)}else{var l=[];try{for(var u=oe(e.views.values()),c=u.next();!c.done;c=u.next()){var a=c.value;l=l.concat(Mi(a,t,n,r))}}catch(f){i={error:f}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}return l}}function ds(e,t,n,r,i){var o=t._queryIdentifier,s=e.views.get(o);if(!s){var a=cn(n,i?r:null),l=!1;a?l=!0:r instanceof C?(a=Wr(n,r),l=!1):(a=C.EMPTY_NODE,l=!1);var u=Cn(new Me(a,l,!1),new Me(r,i,!1));return new lc(t,u)}return s}function mc(e,t,n,r,i,o){var s=ds(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),hc(s,n),dc(s,n)}function yc(e,t,n,r){var i,o,s=t._queryIdentifier,a=[],l=[],u=Ve(e);if(s==="default")try{for(var c=oe(e.views.entries()),f=c.next();!f.done;f=c.next()){var h=Z(f.value,2),d=h[0],v=h[1];l=l.concat(Fi(v,n,r)),Di(v)&&(e.views.delete(d),v.query._queryParams.loadsAllData()||a.push(v.query))}}catch(m){i={error:m}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}else{var v=e.views.get(s);v&&(l=l.concat(Fi(v,n,r)),Di(v)&&(e.views.delete(s),v.query._queryParams.loadsAllData()||a.push(v.query)))}return u&&!Ve(e)&&a.push(new(vc())(t._repo,t._path)),{removed:a,events:l}}function ps(e){var t,n,r=[];try{for(var i=oe(e.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.query._queryParams.loadsAllData()||r.push(s)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}function Pe(e,t){var n,r,i=null;try{for(var o=oe(e.views.values()),s=o.next();!s.done;s=o.next()){var a=s.value;i=i||fc(a,t)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function vs(e,t){var n=t._queryParams;if(n.loadsAllData())return En(e);var r=t._queryIdentifier;return e.views.get(r)}function _s(e,t){return vs(e,t)!=null}function Ve(e){return En(e)!=null}function En(e){var t,n;try{for(var r=oe(e.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return null}/**
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
 */var pn;function gc(e){_(!pn,"__referenceConstructor has already been defined"),pn=e}function bc(){return _(pn,"Reference.ts has not been loaded"),pn}var wc=1,Vi=function(){function e(t){this.listenProvider_=t,this.syncPointTree_=new ae(null),this.pendingWriteTree_=$u(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return e}();function Kr(e,t,n,r,i){return Vu(e.pendingWriteTree_,t,n,r,i),i?mt(e,new wn(Mr(),t,n)):[]}function Cc(e,t,n,r){Bu(e.pendingWriteTree_,t,n,r);var i=ae.fromObject(n);return mt(e,new Ur(Mr(),t,i))}function Ae(e,t,n){n===void 0&&(n=!1);var r=Uu(e.pendingWriteTree_,t),i=Wu(e.pendingWriteTree_,t);if(i){var o=new ae(null);return r.snap!=null?o=o.set(O(),!0):W(r.children,function(s){o=o.set(new R(s),!0)}),mt(e,new ku(r.path,o,n))}else return[]}function Ht(e,t,n){return mt(e,new wn(Vr(),t,n))}function Ic(e,t,n){var r=ae.fromObject(n);return mt(e,new Ur(Vr(),t,r))}function Ec(e,t){return mt(e,new ns(Vr(),t))}function Sc(e,t,n){var r=Qr(e,n);if(r){var i=jr(r),o=i.path,s=i.queryId,a=ee(o,t),l=new ns(Br(s),a);return Yr(e,o,l)}else return[]}function vr(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),s=[];if(o&&(t._queryIdentifier==="default"||_s(o,t))){var a=yc(o,t,n,r);_c(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));var l=a.removed;s=a.events;var u=l.findIndex(function(g){return g._queryParams.loadsAllData()})!==-1,c=e.syncPointTree_.findOnPath(i,function(g,T){return Ve(T)});if(u&&!c){var f=e.syncPointTree_.subtree(i);if(!f.isEmpty())for(var h=xc(f),d=0;d<h.length;++d){var v=h[d],m=v.query,p=gs(e,v);e.listenProvider_.startListening(xt(m),vn(e,m),p.hashFn,p.onComplete)}}if(!c&&l.length>0&&!r)if(u){var y=null;e.listenProvider_.stopListening(xt(t),y)}else l.forEach(function(g){var T=e.queryToTagMap.get(Tn(g));e.listenProvider_.stopListening(xt(g),T)});Ac(e,l)}return s}function Tc(e,t,n,r){var i=Qr(e,r);if(i!=null){var o=jr(i),s=o.path,a=o.queryId,l=ee(s,t),u=new wn(Br(a),l,n);return Yr(e,s,u)}else return[]}function Oc(e,t,n,r){var i=Qr(e,r);if(i){var o=jr(i),s=o.path,a=o.queryId,l=ee(s,t),u=ae.fromObject(n),c=new Ur(Br(a),l,u);return Yr(e,s,c)}else return[]}function Bi(e,t,n){var r=t._path,i=null,o=!1;e.syncPointTree_.foreachOnPath(r,function(m,p){var y=ee(m,r);i=i||Pe(p,y),o=o||Ve(p)});var s=e.syncPointTree_.get(r);s?(o=o||Ve(s),i=i||Pe(s,O())):(s=new hs,e.syncPointTree_=e.syncPointTree_.set(r,s));var a;if(i!=null)a=!0;else{a=!1,i=C.EMPTY_NODE;var l=e.syncPointTree_.subtree(r);l.foreachChild(function(m,p){var y=Pe(p,O());y&&(i=i.updateImmediateChild(m,y))})}var u=_s(s,t);if(!u&&!t._queryParams.loadsAllData()){var c=Tn(t);_(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");var f=Nc();e.queryToTagMap.set(c,f),e.tagToQueryMap.set(f,c)}var h=In(e.pendingWriteTree_,r),d=mc(s,t,n,h,i,a);if(!u&&!o){var v=vs(s,t);d=d.concat(kc(e,t,v))}return d}function Sn(e,t,n){var r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,function(s,a){var l=ee(s,t),u=Pe(a,l);if(u)return u});return ss(i,t,o,n,r)}function Rc(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,function(u,c){var f=ee(u,n);r=r||Pe(c,f)});var i=e.syncPointTree_.get(n);i?r=r||Pe(i,O()):(i=new hs,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=r!=null,s=o?new Me(r,!0,!1):null,a=In(e.pendingWriteTree_,t._path),l=ds(i,t,a,o?s.getNode():C.EMPTY_NODE,o);return cc(l)}function mt(e,t){return ms(t,e.syncPointTree_,null,In(e.pendingWriteTree_,O()))}function ms(e,t,n,r){if(E(e.path))return ys(e,t,n,r);var i=t.get(O());n==null&&i!=null&&(n=Pe(i,O()));var o=[],s=I(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){var u=n?n.getImmediateChild(s):null,c=as(r,s);o=o.concat(ms(a,l,u,c))}return i&&(o=o.concat(Gr(i,e,r,n))),o}function ys(e,t,n,r){var i=t.get(O());n==null&&i!=null&&(n=Pe(i,O()));var o=[];return t.children.inorderTraversal(function(s,a){var l=n?n.getImmediateChild(s):null,u=as(r,s),c=e.operationForChild(s);c&&(o=o.concat(ys(c,a,l,u)))}),i&&(o=o.concat(Gr(i,e,r,n))),o}function gs(e,t){var n=t.query,r=vn(e,n);return{hashFn:function(){var i=uc(t)||C.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?Sc(e,n._path,r):Ec(e,n._path);var o=ml(i,n);return vr(e,n,null,o)}}}function vn(e,t){var n=Tn(t);return e.queryToTagMap.get(n)}function Tn(e){return e._path.toString()+"$"+e._queryIdentifier}function Qr(e,t){return e.tagToQueryMap.get(t)}function jr(e){var t=e.indexOf("$");return _(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new R(e.substr(0,t))}}function Yr(e,t,n){var r=e.syncPointTree_.get(t);_(r,"Missing sync point for query tag that we're tracking");var i=In(e.pendingWriteTree_,t);return Gr(r,n,i,null)}function xc(e){return e.fold(function(t,n,r){if(n&&Ve(n)){var i=En(n);return[i]}else{var o=[];return n&&(o=ps(n)),W(r,function(s,a){o=o.concat(a)}),o}})}function xt(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(bc())(e._repo,e._path):e}function Ac(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Tn(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function Nc(){return wc++}function kc(e,t,n){var r=t._path,i=vn(e,t),o=gs(e,n),s=e.listenProvider_.startListening(xt(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)_(!Ve(a.value),"If we're adding a query, it shouldn't be shadowed");else for(var l=a.fold(function(f,h,d){if(!E(f)&&h&&Ve(h))return[En(h).query];var v=[];return h&&(v=v.concat(ps(h).map(function(m){return m.query}))),W(d,function(m,p){v=v.concat(p)}),v}),u=0;u<l.length;++u){var c=l[u];e.listenProvider_.stopListening(xt(c),vn(e,c))}return s}/**
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
 */var Pc=function(){function e(t){this.node_=t}return e.prototype.getImmediateChild=function(t){var n=this.node_.getImmediateChild(t);return new e(n)},e.prototype.node=function(){return this.node_},e}(),Lc=function(){function e(t,n){this.syncTree_=t,this.path_=n}return e.prototype.getImmediateChild=function(t){var n=L(this.path_,t);return new e(this.syncTree_,n)},e.prototype.node=function(){return Sn(this.syncTree_,this.path_)},e}(),Dc=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Ui=function(e,t,n){if(!e||typeof e!="object")return e;if(_(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return Fc(e[".sv"],t,n);if(typeof e[".sv"]=="object")return Mc(e[".sv"],t);_(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},Fc=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+e)}},Mc=function(e,t,n){e.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;typeof r!="number"&&_(!1,"Unexpected increment value: "+r);var i=t.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,s=o.getValue();return typeof s!="number"?r:s+r},bs=function(e,t,n,r){return $r(t,new Lc(n,e),r)},qr=function(e,t,n){return $r(e,new Pc(t),n)};function $r(e,t,n){var r=e.getPriority().val(),i=Ui(r,t.getImmediateChild(".priority"),n),o;if(e.isLeafNode()){var s=e,a=Ui(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new ut(a,D(i)):e}else{var l=e;return o=l,i!==l.getPriority().val()&&(o=o.updatePriority(new ut(i))),l.forEachChild(k,function(u,c){var f=$r(c,t.getImmediateChild(u),n);f!==c&&(o=o.updateImmediateChild(u,f))}),o}}/**
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
 */var Xr=function(){function e(t,n,r){t===void 0&&(t=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=t,this.parent=n,this.node=r}return e}();function On(e,t){for(var n=t instanceof R?t:new R(t),r=e,i=I(n);i!==null;){var o=Xe(r.node.children,i)||{children:{},childCount:0};r=new Xr(i,r,o),n=A(n),i=I(n)}return r}function nt(e){return e.node.value}function Jr(e,t){e.node.value=t,_r(e)}function ws(e){return e.node.childCount>0}function Vc(e){return nt(e)===void 0&&!ws(e)}function Rn(e,t){W(e.node.children,function(n,r){t(new Xr(n,e,r))})}function Cs(e,t,n,r){n&&!r&&t(e),Rn(e,function(i){Cs(i,t,!0,r)}),n&&r&&t(e)}function Bc(e,t,n){for(var r=n?e:e.parent;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Gt(e){return new R(e.parent===null?e.name:Gt(e.parent)+"/"+e.name)}function _r(e){e.parent!==null&&Uc(e.parent,e.name,e)}function Uc(e,t,n){var r=Vc(n),i=se(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,_r(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,_r(e))}/**
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
 */var Wc=/[\[\].#$\/\u0000-\u001F\u007F]/,zc=/[\[\].#$\u0000-\u001F\u007F]/,Kn=10*1024*1024,xn=function(e){return typeof e=="string"&&e.length!==0&&!Wc.test(e)},Is=function(e){return typeof e=="string"&&e.length!==0&&!zc.test(e)},Hc=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Is(e)},Ft=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!yn(e)||e&&typeof e=="object"&&se(e,".sv")},Ce=function(e,t,n,r){r&&t===void 0||Kt(re(e,"value"),t,n)},Kt=function(e,t,n){var r=n instanceof R?new Xl(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ge(r));if(typeof t=="function")throw new Error(e+"contains a function "+Ge(r)+" with contents = "+t.toString());if(yn(t))throw new Error(e+"contains "+t.toString()+" "+Ge(r));if(typeof t=="string"&&t.length>Kn/3&&mn(t)>Kn)throw new Error(e+"contains a string greater than "+Kn+" utf8 bytes "+Ge(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){var i=!1,o=!1;if(W(t,function(s,a){if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!xn(s)))throw new Error(e+" contains an invalid key ("+s+") "+Ge(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jl(r,s),Kt(e,a,r),Zl(r)}),i&&o)throw new Error(e+' contains ".value" child '+Ge(r)+" in addition to actual children.")}},Gc=function(e,t){var n,r;for(n=0;n<t.length;n++){r=t[n];for(var i=Pt(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!xn(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort($l);var s=null;for(n=0;n<t.length;n++){if(r=t[n],s!==null&&ue(s,r))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Es=function(e,t,n,r){if(!(r&&t===void 0)){var i=re(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var o=[];W(t,function(s,a){var l=new R(s);if(Kt(i,a,L(n,l)),Nr(l)===".priority"&&!Ft(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),Gc(i,o)}},Zr=function(e,t,n){if(!(n&&t===void 0)){if(yn(t))throw new Error(re(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ft(t))throw new Error(re(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Kc=function(e,t,n){if(!(n&&t===void 0))switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(re(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},Qt=function(e,t,n,r){if(!(r&&n===void 0)&&!xn(n))throw new Error(re(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Mt=function(e,t,n,r){if(!(r&&n===void 0)&&!Is(n))throw new Error(re(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qc=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mt(e,t,n,r)},ce=function(e,t){if(I(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Ss=function(e,t){var n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!xn(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hc(n))throw new Error(re(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},jc=function(e,t,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(re(e,t)+"must be a boolean.")};/**
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
 */var Yc=function(){function e(){this.eventLists_=[],this.recursionDepth_=0}return e}();function An(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();n!==null&&!kr(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ei(e,t,n){An(e,n),Ts(e,function(r){return kr(r,t)})}function fe(e,t,n){An(e,n),Ts(e,function(r){return ue(r,t)||ue(t,r)})}function Ts(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var o=i.path;t(o)?(qc(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function qc(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(n!==null){e.events[t]=null;var r=n.getEventRunner();qe&&H("event: "+n.toString()),vt(r)}}}/**
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
 */var Os="repo_interrupt",$c=25,Xc=function(){function e(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ln(),this.transactionQueueTree_=new Xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function Jc(e,t,n){if(e.stats_=xr(e.repoInfo_),e.forceRestClient_||gl())e.server_=new Su(e.repoInfo_,function(r,i,o,s){Wi(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(function(){return zi(e,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new $e(e.repoInfo_,t,function(r,i,o,s){Wi(e,r,i,o,s)},function(r){zi(e,r)},function(r){ef(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(function(r){e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(function(r){e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=Sl(e.repoInfo_,function(){return new Au(e.stats_,e.server_)}),e.infoData_=new Tu,e.infoSyncTree_=new Vi({startListening:function(r,i,o,s){var a=[],l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ht(e.infoSyncTree_,r._path,l),setTimeout(function(){s("ok")},0)),a},stopListening:function(){}}),ti(e,"connected",!1),e.serverSyncTree_=new Vi({startListening:function(r,i,o,s){return e.server_.listen(r,o,i,function(a,l){var u=s(a,l);fe(e.eventQueue_,r._path,u)}),[]},stopListening:function(r,i){e.server_.unlisten(r,i)}})}function Rs(e){var t=e.infoData_.getNode(new R(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function jt(e){return Dc({timestamp:Rs(e)})}function Wi(e,t,n,r,i){e.dataUpdateCount++;var o=new R(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var s=[];if(i)if(r){var a=tn(n,function(h){return D(h)});s=Oc(e.serverSyncTree_,o,a,i)}else{var l=D(n);s=Tc(e.serverSyncTree_,o,l,i)}else if(r){var u=tn(n,function(h){return D(h)});s=Ic(e.serverSyncTree_,o,u)}else{var c=D(n);s=Ht(e.serverSyncTree_,o,c)}var f=o;s.length>0&&(f=dt(e,o)),fe(e.eventQueue_,f,s)}function Zc(e,t){e.interceptServerDataCallback_=t}function zi(e,t){ti(e,"connected",t),t===!1&&rf(e)}function ef(e,t){W(t,function(n,r){ti(e,n,r)})}function ti(e,t,n){var r=new R("/.info/"+t),i=D(n);e.infoData_.updateSnapshot(r,i);var o=Ht(e.infoSyncTree_,r,i);fe(e.eventQueue_,r,o)}function Nn(e){return e.nextWriteId_++}function tf(e,t){var n=Rc(e.serverSyncTree_,t);return n!=null?Promise.resolve(n):e.server_.get(t).then(function(r){var i=D(r).withIndex(t._queryParams.getIndex()),o=Ht(e.serverSyncTree_,t._path,i);return ei(e.eventQueue_,t._path,o),Promise.resolve(i)},function(r){return yt(e,"get for query "+U(t)+" failed: "+r),Promise.reject(new Error(r))})}function ni(e,t,n,r,i){yt(e,"set",{path:t.toString(),value:n,priority:r});var o=jt(e),s=D(n,r),a=Sn(e.serverSyncTree_,t),l=qr(s,a,o),u=Nn(e),c=Kr(e.serverSyncTree_,t,l,u,!0);An(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),function(h,d){var v=h==="ok";v||Q("set at "+t+" failed: "+h);var m=Ae(e.serverSyncTree_,u,!v);fe(e.eventQueue_,t,m),Be(e,i,h,d)});var f=ii(e,t);dt(e,f),fe(e.eventQueue_,f,[])}function nf(e,t,n,r){yt(e,"update",{path:t.toString(),value:n});var i=!0,o=jt(e),s={};if(W(n,function(u,c){i=!1,s[u]=bs(L(t,u),D(c),e.serverSyncTree_,o)}),i)H("update() called with empty data.  Don't do anything."),Be(e,r,"ok",void 0);else{var a=Nn(e),l=Cc(e.serverSyncTree_,t,s,a);An(e.eventQueue_,l),e.server_.merge(t.toString(),n,function(u,c){var f=u==="ok";f||Q("update at "+t+" failed: "+u);var h=Ae(e.serverSyncTree_,a,!f),d=h.length>0?dt(e,t):t;fe(e.eventQueue_,d,h),Be(e,r,u,c)}),W(n,function(u){var c=ii(e,L(t,u));dt(e,c)}),fe(e.eventQueue_,t,[])}}function rf(e){yt(e,"onDisconnectEvents");var t=jt(e),n=ln();ur(e.onDisconnect_,O(),function(i,o){var s=bs(i,o,e.serverSyncTree_,t);_t(n,i,s)});var r=[];ur(n,O(),function(i,o){r=r.concat(Ht(e.serverSyncTree_,i,o));var s=ii(e,i);dt(e,s)}),e.onDisconnect_=ln(),fe(e.eventQueue_,O(),r)}function of(e,t,n){e.server_.onDisconnectCancel(t.toString(),function(r,i){r==="ok"&&lr(e.onDisconnect_,t),Be(e,n,r,i)})}function Hi(e,t,n,r){var i=D(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),function(o,s){o==="ok"&&_t(e.onDisconnect_,t,i),Be(e,r,o,s)})}function sf(e,t,n,r,i){var o=D(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),function(s,a){s==="ok"&&_t(e.onDisconnect_,t,o),Be(e,i,s,a)})}function af(e,t,n,r){if(er(n)){H("onDisconnect().update() called with empty data.  Don't do anything."),Be(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,function(i,o){i==="ok"&&W(n,function(s,a){var l=D(a);_t(e.onDisconnect_,L(t,s),l)}),Be(e,r,i,o)})}function lf(e,t,n){var r;I(t._path)===".info"?r=Bi(e.infoSyncTree_,t,n):r=Bi(e.serverSyncTree_,t,n),ei(e.eventQueue_,t._path,r)}function mr(e,t,n){var r;I(t._path)===".info"?r=vr(e.infoSyncTree_,t,n):r=vr(e.serverSyncTree_,t,n),ei(e.eventQueue_,t._path,r)}function xs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Os)}function uf(e){e.persistentConnection_&&e.persistentConnection_.resume(Os)}function cf(e,t){if(t===void 0&&(t=!1),!(typeof console>"u")){var n;t?(e.statsListener_||(e.statsListener_=new ts(e.stats_)),n=e.statsListener_.get()):n=e.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);W(n,function(i,o){for(var s=i,a=i.length;a<r+2;a++)s+=" ";console.log(s+o)})}}function ff(e,t){e.stats_.incrementCounter(t),Nu(e.statsReporter_,t)}function yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),H.apply(void 0,De([r],Z(t)))}function Be(e,t,n,r){t&&vt(function(){if(n==="ok")t(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var s=new Error(o);s.code=i,t(s)}})}function hf(e,t,n,r,i,o){yt(e,"transaction on "+t);var s={path:t,update:n,onComplete:r,status:null,order:bo(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ri(e,t,void 0);s.currentInputSnapshot=a;var l=s.update(a.val());if(l===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{Kt("transaction failed: Data returned ",l,s.path),s.status=0;var u=On(e.transactionQueueTree_,t),c=nt(u)||[];c.push(s),Jr(u,c);var f=void 0;if(typeof l=="object"&&l!==null&&se(l,".priority"))f=Xe(l,".priority"),_(Ft(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=Sn(e.serverSyncTree_,t)||C.EMPTY_NODE;f=h.getPriority().val()}var d=jt(e),v=D(l,f),m=qr(v,a,d);s.currentOutputSnapshotRaw=v,s.currentOutputSnapshotResolved=m,s.currentWriteId=Nn(e);var p=Kr(e.serverSyncTree_,t,m,s.currentWriteId,s.applyLocally);fe(e.eventQueue_,t,p),kn(e,e.transactionQueueTree_)}}function ri(e,t,n){return Sn(e.serverSyncTree_,t,n)||C.EMPTY_NODE}function kn(e,t){if(t===void 0&&(t=e.transactionQueueTree_),t||Pn(e,t),nt(t)){var n=Ns(e,t);_(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&df(e,Gt(t),n)}else ws(t)&&Rn(t,function(i){kn(e,i)})}function df(e,t,n){for(var r=n.map(function(h){return h.currentWriteId}),i=ri(e,t,r),o=i,s=i.hash(),a=0;a<n.length;a++){var l=n[a];_(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;var u=ee(t,l.path);o=o.updateChild(u,l.currentOutputSnapshotRaw)}var c=o.val(!0),f=t;e.server_.put(f.toString(),c,function(h){yt(e,"transaction put response",{path:f.toString(),status:h});var d=[];if(h==="ok"){for(var v=[],m=function(y){n[y].status=2,d=d.concat(Ae(e.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&v.push(function(){return n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)}),n[y].unwatcher()},p=0;p<n.length;p++)m(p);Pn(e,On(e.transactionQueueTree_,t)),kn(e,e.transactionQueueTree_),fe(e.eventQueue_,t,d);for(var p=0;p<v.length;p++)vt(v[p])}else{if(h==="datastale")for(var p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Q("transaction at "+f.toString()+" failed: "+h);for(var p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=h}dt(e,t)}},s)}function dt(e,t){var n=As(e,t),r=Gt(n),i=Ns(e,n);return pf(e,i,r),r}function pf(e,t,n){if(t.length!==0){for(var r=[],i=[],o=t.filter(function(u){return u.status===0}),s=o.map(function(u){return u.currentWriteId}),a=function(u){var c=t[u],f=ee(n,c.path),h=!1,d;if(_(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(Ae(e.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$c)h=!0,d="maxretry",i=i.concat(Ae(e.serverSyncTree_,c.currentWriteId,!0));else{var v=ri(e,c.path,s);c.currentInputSnapshot=v;var m=t[u].update(v.val());if(m!==void 0){Kt("transaction failed: Data returned ",m,c.path);var p=D(m),y=typeof m=="object"&&m!=null&&se(m,".priority");y||(p=p.updatePriority(v.getPriority()));var g=c.currentWriteId,T=jt(e),M=qr(p,v,T);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=M,c.currentWriteId=Nn(e),s.splice(s.indexOf(g),1),i=i.concat(Kr(e.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),i=i.concat(Ae(e.serverSyncTree_,g,!0))}else h=!0,d="nodata",i=i.concat(Ae(e.serverSyncTree_,c.currentWriteId,!0))}fe(e.eventQueue_,n,i),i=[],h&&(t[u].status=2,function(te){setTimeout(te,Math.floor(0))}(t[u].unwatcher),t[u].onComplete&&(d==="nodata"?r.push(function(){return t[u].onComplete(null,!1,t[u].currentInputSnapshot)}):r.push(function(){return t[u].onComplete(new Error(d),!1,null)})))},l=0;l<t.length;l++)a(l);Pn(e,e.transactionQueueTree_);for(var l=0;l<r.length;l++)vt(r[l]);kn(e,e.transactionQueueTree_)}}function As(e,t){var n,r=e.transactionQueueTree_;for(n=I(t);n!==null&&nt(r)===void 0;)r=On(r,n),t=A(t),n=I(t);return r}function Ns(e,t){var n=[];return ks(e,t,n),n.sort(function(r,i){return r.order-i.order}),n}function ks(e,t,n){var r=nt(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Rn(t,function(o){ks(e,o,n)})}function Pn(e,t){var n=nt(t);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Jr(t,n.length>0?n:void 0)}Rn(t,function(o){Pn(e,o)})}function ii(e,t){var n=Gt(As(e,t)),r=On(e.transactionQueueTree_,t);return Bc(r,function(i){Qn(e,i)}),Qn(e,r),Cs(r,function(i){Qn(e,i)}),n}function Qn(e,t){var n=nt(t);if(n){for(var r=[],i=[],o=-1,s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(_(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(_(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Ae(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Jr(t,void 0):n.length=o+1,fe(e.eventQueue_,Gt(t),i);for(var s=0;s<r.length;s++)vt(r[s])}}/**
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
 */function vf(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function _f(e){var t,n,r={};e.charAt(0)==="?"&&(e=e.substring(1));try{for(var i=oe(e.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(s.length!==0){var a=s.split("=");a.length===2?r[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):Q("Invalid query segment '"+s+"' in query '"+e+"'")}}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}var yr=function(e,t){var n=mf(e),r=n.namespace;n.domain==="firebase.com"&&be(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hl();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rr(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new R(n.pathString)}},mf=function(e){var t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){var u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));var c=e.indexOf("/");c===-1&&(c=e.length);var f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(i=vf(e.substring(c,f)));var h=_f(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;var d=t.slice(0,u);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),o=r}"ns"in h&&(o=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */var Ps=function(){function e(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return e.prototype.getPath=function(){var t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())},e}(),Ls=function(){function e(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path.toString()+":cancel"},e}();/**
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
 */var Ds=function(){function e(t,n){this.snapshotCallback=t,this.cancelCallback=n}return e.prototype.onValue=function(t,n){this.snapshotCallback.call(null,t,n)},e.prototype.onCancel=function(t){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)},Object.defineProperty(e.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),e.prototype.matches=function(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context},e}();/**
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
 */var yf=function(){function e(t,n){this._repo=t,this._path=n}return e.prototype.cancel=function(){var t=new ne;return of(this._repo,this._path,t.wrapCallback(function(){})),t.promise},e.prototype.remove=function(){ce("OnDisconnect.remove",this._path);var t=new ne;return Hi(this._repo,this._path,null,t.wrapCallback(function(){})),t.promise},e.prototype.set=function(t){ce("OnDisconnect.set",this._path),Ce("OnDisconnect.set",t,this._path,!1);var n=new ne;return Hi(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e.prototype.setWithPriority=function(t,n){ce("OnDisconnect.setWithPriority",this._path),Ce("OnDisconnect.setWithPriority",t,this._path,!1),Zr("OnDisconnect.setWithPriority",n,!1);var r=new ne;return sf(this._repo,this._path,t,n,r.wrapCallback(function(){})),r.promise},e.prototype.update=function(t){ce("OnDisconnect.update",this._path),Es("OnDisconnect.update",t,this._path,!1);var n=new ne;return af(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e}();/**
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
 */var he=function(){function e(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(e.prototype,"key",{get:function(){return E(this._path)?null:Nr(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ref",{get:function(){return new Ie(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryIdentifier",{get:function(){var t=Ri(this._queryParams),n=Sr(t);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryObject",{get:function(){return Ri(this._queryParams)},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){if(t=le(t),!(t instanceof e))return!1;var n=this._repo===t._repo,r=kr(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i},e.prototype.toJSON=function(){return this.toString()},e.prototype.toString=function(){return this._repo.toString()+ql(this._path)},e}();function Ln(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function Ue(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===ge){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var o=e.getIndexStartName();if(o!==Oe)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){var s=e.getIndexEndName();if(s!==we)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===k){if(t!=null&&!Ft(t)||n!=null&&!Ft(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(_(e.getIndex()instanceof Lr||e.getIndex()===Dr,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Dn(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var Ie=function(e){F(t,e);function t(n,r){return e.call(this,n,r,new es,!1)||this}return Object.defineProperty(t.prototype,"parent",{get:function(){var n=Ho(this._path);return n===null?null:new t(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),t}(he),Fn=function(){function e(t,n,r){this._node=t,this.ref=n,this._index=r}return Object.defineProperty(e.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),e.prototype.child=function(t){var n=new R(t),r=Ze(this.ref,t);return new e(this._node.getChild(n),r,k)},e.prototype.exists=function(){return!this._node.isEmpty()},e.prototype.exportVal=function(){return this._node.val(!0)},e.prototype.forEach=function(t){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return t(new e(o,Ze(n.ref,i),k))})},e.prototype.hasChild=function(t){var n=new R(t);return!this._node.getChild(n).isEmpty()},e.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},e.prototype.toJSON=function(){return this.exportVal()},e.prototype.val=function(){return this._node.val()},e}();function Fs(e,t){return e=le(e),e._checkNotDeleted("ref"),t!==void 0?Ze(e._root,t):e._root}function Gi(e,t){e=le(e),e._checkNotDeleted("refFromURL");var n=yr(t,e._repo.repoInfo_.nodeAdmin);Ss("refFromURL",n);var r=n.repoInfo;return!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host&&be("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Fs(e,n.path.toString())}function Ze(e,t){return e=le(e),I(e._path)===null?Qc("child","path",t,!1):Mt("child","path",t,!1),new Ie(e._repo,L(e._path,t))}function gf(e,t){e=le(e),ce("push",e._path),Ce("push",t,e._path,!0);var n=Rs(e._repo),r=mu(n),i=Ze(e,r),o=Ze(e,r),s;return t!=null?s=oi(o,t).then(function(){return o}):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function bf(e){return ce("remove",e._path),oi(e,null)}function oi(e,t){e=le(e),ce("set",e._path),Ce("set",t,e._path,!1);var n=new ne;return ni(e._repo,e._path,t,null,n.wrapCallback(function(){})),n.promise}function wf(e,t){e=le(e),ce("setPriority",e._path),Zr("setPriority",t,!1);var n=new ne;return ni(e._repo,L(e._path,".priority"),t,null,n.wrapCallback(function(){})),n.promise}function Cf(e,t,n){if(ce("setWithPriority",e._path),Ce("setWithPriority",t,e._path,!1),Zr("setWithPriority",n,!1),e.key===".length"||e.key===".keys")throw"setWithPriority failed: "+e.key+" is a read-only object.";var r=new ne;return ni(e._repo,e._path,t,n,r.wrapCallback(function(){})),r.promise}function If(e,t){Es("update",t,e._path,!1);var n=new ne;return nf(e._repo,e._path,t,n.wrapCallback(function(){})),n.promise}function Ef(e){return e=le(e),tf(e._repo,e).then(function(t){return new Fn(t,new Ie(e._repo,e._path),e._queryParams.getIndex())})}var Ms=function(){function e(t){this.callbackContext=t}return e.prototype.respondsTo=function(t){return t==="value"},e.prototype.createEvent=function(t,n){var r=n._queryParams.getIndex();return new Ps("value",this,new Fn(t.snapshotNode,new Ie(n._repo,n._path),r))},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,null)}},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Ls(this,t,n):null},e.prototype.matches=function(t){return t instanceof e?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1},e.prototype.hasAnyCallback=function(){return this.callbackContext!==null},e}(),Vs=function(){function e(t,n){this.eventType=t,this.callbackContext=n}return e.prototype.respondsTo=function(t){var n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Ls(this,t,n):null},e.prototype.createEvent=function(t,n){_(t.childName!=null,"Child events should have a childName.");var r=Ze(new Ie(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Ps(t.type,this,new Fn(t.snapshotNode,r,i),t.prevName)},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,t.prevName)}},e.prototype.matches=function(t){return t instanceof e?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1},e.prototype.hasAnyCallback=function(){return!!this.callbackContext},e}();function Yt(e,t,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var s=n,a=function(c,f){mr(e._repo,e,u),s(c,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}var l=new Ds(n,o||void 0),u=t==="value"?new Ms(l):new Vs(t,l);return lf(e._repo,e,u),function(){return mr(e._repo,e,u)}}function gr(e,t,n,r){return Yt(e,"value",t,n,r)}function Ki(e,t,n,r){return Yt(e,"child_added",t,n,r)}function Qi(e,t,n,r){return Yt(e,"child_changed",t,n,r)}function ji(e,t,n,r){return Yt(e,"child_moved",t,n,r)}function Yi(e,t,n,r){return Yt(e,"child_removed",t,n,r)}function qi(e,t,n){var r=null,i=n?new Ds(n):null;t==="value"?r=new Ms(i):t&&(r=new Vs(t,i)),mr(e._repo,e,r)}var me=function(){function e(){}return e}(),Bs=function(e){F(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ce("endAt",this._value,n._path,!0);var r=ar(n._queryParams,this._value,this._key);if(Dn(r),Ue(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new he(n._repo,n._path,r,n._orderByCalled)},t}(me);function Sf(e,t){return Qt("endAt","key",t,!0),new Bs(e,t)}var Tf=function(e){F(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ce("endBefore",this._value,n._path,!1);var r=Eu(n._queryParams,this._value,this._key);if(Dn(r),Ue(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new he(n._repo,n._path,r,n._orderByCalled)},t}(me);function Of(e,t){return Qt("endBefore","key",t,!0),new Tf(e,t)}var Us=function(e){F(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ce("startAt",this._value,n._path,!0);var r=sr(n._queryParams,this._value,this._key);if(Dn(r),Ue(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new he(n._repo,n._path,r,n._orderByCalled)},t}(me);function Rf(e,t){return e===void 0&&(e=null),Qt("startAt","key",t,!0),new Us(e,t)}var xf=function(e){F(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ce("startAfter",this._value,n._path,!1);var r=Iu(n._queryParams,this._value,this._key);if(Dn(r),Ue(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new he(n._repo,n._path,r,n._orderByCalled)},t}(me);function Af(e,t){return Qt("startAfter","key",t,!0),new xf(e,t)}var Nf=function(e){F(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new he(n._repo,n._path,wu(n._queryParams,this._limit),n._orderByCalled)},t}(me);function kf(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Nf(e)}var Pf=function(e){F(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new he(n._repo,n._path,Cu(n._queryParams,this._limit),n._orderByCalled)},t}(me);function Lf(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Pf(e)}var Df=function(e){F(t,e);function t(n){var r=e.call(this)||this;return r._path=n,r}return t.prototype._apply=function(n){Ln(n,"orderByChild");var r=new R(this._path);if(E(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Lr(r),o=bn(n._queryParams,i);return Ue(o),new he(n._repo,n._path,o,!0)},t}(me);function Ff(e){if(e==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(e==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(e==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Mt("orderByChild","path",e,!1),new Df(e)}var Mf=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Ln(n,"orderByKey");var r=bn(n._queryParams,ge);return Ue(r),new he(n._repo,n._path,r,!0)},t}(me);function Vf(){return new Mf}var Bf=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Ln(n,"orderByPriority");var r=bn(n._queryParams,k);return Ue(r),new he(n._repo,n._path,r,!0)},t}(me);function Uf(){return new Bf}var Wf=function(e){F(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Ln(n,"orderByValue");var r=bn(n._queryParams,Dr);return Ue(r),new he(n._repo,n._path,r,!0)},t}(me);function zf(){return new Wf}var Hf=function(e){F(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){if(Ce("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Bs(this._value,this._key)._apply(new Us(this._value,this._key)._apply(n))},t}(me);function Gf(e,t){return Qt("equalTo","key",t,!0),new Hf(e,t)}function de(e){for(var t,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=le(e);try{for(var s=oe(r),a=s.next();!a.done;a=s.next()){var l=a.value;o=l._apply(o)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return o}pc(Ie);gc(Ie);/**
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
 */var Kf="FIREBASE_DATABASE_EMULATOR_HOST",br={},Ws=!1;function Qf(e,t,n,r){e.repoInfo_=new Rr(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function zs(e,t,n,r,i){var o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),H("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var s=yr(o,i),a=s.repoInfo,l,u=void 0;typeof process<"u"&&(u=process.env[Kf]),u?(l=!0,o="http://"+u+"?ns="+a.namespace,s=yr(o,i),a=s.repoInfo):l=!s.repoInfo.secure;var c=i&&l?new Tt(Tt.OWNER):new wl(e.name,e.options,t);Ss("Invalid Firebase Database URL",s),E(s.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");var f=Yf(a,e,c,new bl(e.name,n));return new $f(f,e)}function jf(e,t){var n=br[t];(!n||n[e.key]!==e)&&be("Database "+t+"("+e.repoInfo_+") has already been deleted."),xs(e),delete n[e.key]}function Yf(e,t,n,r){var i=br[t.name];i||(i={},br[t.name]=i);var o=i[e.toURLString()];return o&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Xc(e,Ws,n,r),i[e.toURLString()]=o,o}function qf(e){Ws=e}var $f=function(){function e(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(e.prototype,"_repo",{get:function(){return this._instanceStarted||(Jc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new Ie(this._repo,O())),this._rootInternal},enumerable:!1,configurable:!0}),e.prototype._delete=function(){return this._rootInternal!==null&&(jf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},e.prototype._checkNotDeleted=function(t){this._rootInternal===null&&be("Cannot call "+t+" on a deleted database.")},e}();function Xf(e,t,n,r){r===void 0&&(r={}),e=le(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&be("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Tt(Tt.OWNER);else if(r.mockUserToken){var s=typeof r.mockUserToken=="string"?r.mockUserToken:_a(r.mockUserToken,e.app.options.projectId);o=new Tt(s)}Qf(i,t,n,o)}function Jf(e){e=le(e),e._checkNotDeleted("goOffline"),xs(e._repo)}function Zf(e){e=le(e),e._checkNotDeleted("goOnline"),uf(e._repo)}/**
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
 */var eh={".sv":"timestamp"};function th(){return eh}function nh(e){return{".sv":{increment:e}}}/**
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
 */var rh=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();function ih(e,t,n){var r;if(e=le(e),ce("Reference.transaction",e._path),e.key===".length"||e.key===".keys")throw"Reference.transaction failed: "+e.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new ne,s=function(l,u,c){var f=null;l?o.reject(l):(f=new Fn(c,new Ie(e._repo,e._path),k),o.resolve(new rh(u,f)))},a=gr(e,function(){});return hf(e._repo,e._path,t,s,a,i),o.promise}/**
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
 */var oh=function(){function e(t){this._delegate=t}return e.prototype.cancel=function(t){w("OnDisconnect.cancel",0,1,arguments.length),z("OnDisconnect.cancel","onComplete",t,!0);var n=this._delegate.cancel();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.remove=function(t){w("OnDisconnect.remove",0,1,arguments.length),z("OnDisconnect.remove","onComplete",t,!0);var n=this._delegate.remove();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.set=function(t,n){w("OnDisconnect.set",1,2,arguments.length),z("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(t);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.setWithPriority=function(t,n,r){w("OnDisconnect.setWithPriority",2,3,arguments.length),z("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(t,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(t,n){if(w("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){for(var r={},i=0;i<t.length;++i)r[""+i]=t[i];t=r,Q("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}z("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(t);return n&&o.then(function(){return n(null)},function(s){return n(s)}),o},e}();/**
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
 */var sh=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return w("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();/**
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
 */var At=function(){function e(t,n){this._database=t,this._delegate=n}return e.prototype.val=function(){return w("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},e.prototype.exportVal=function(){return w("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},e.prototype.toJSON=function(){return w("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.exists=function(){return w("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},e.prototype.child=function(t){return w("DataSnapshot.child",0,1,arguments.length),t=String(t),Mt("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))},e.prototype.hasChild=function(t){return w("DataSnapshot.hasChild",1,1,arguments.length),Mt("DataSnapshot.hasChild","path",t,!1),this._delegate.hasChild(t)},e.prototype.getPriority=function(){return w("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},e.prototype.forEach=function(t){var n=this;return w("DataSnapshot.forEach",1,1,arguments.length),z("DataSnapshot.forEach","action",t,!1),this._delegate.forEach(function(r){return t(new e(n._database,r))})},e.prototype.hasChildren=function(){return w("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(e.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),e.prototype.numChildren=function(){return w("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},e.prototype.getRef=function(){return w("DataSnapshot.ref",0,0,arguments.length),new Ye(this._database,this._delegate.ref)},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),e}(),Hs=function(){function e(t,n){this.database=t,this._delegate=n}return e.prototype.on=function(t,n,r,i){var o=this,s;w("Query.on",2,4,arguments.length),z("Query.on","callback",n,!1);var a=e.getCancelAndContextArgs_("Query.on",r,i),l=function(c,f){n.call(a.context,new At(o.database,c),f)};l.userCallback=n,l.context=a.context;var u=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(t){case"value":return gr(this._delegate,l,u),n;case"child_added":return Ki(this._delegate,l,u),n;case"child_removed":return Yi(this._delegate,l,u),n;case"child_changed":return Qi(this._delegate,l,u),n;case"child_moved":return ji(this._delegate,l,u),n;default:throw new Error(re("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},e.prototype.off=function(t,n,r){if(w("Query.off",0,3,arguments.length),Kc("Query.off",t,!0),z("Query.off","callback",n,!0),ui("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,qi(this._delegate,t,i)}else qi(this._delegate,t)},e.prototype.get=function(){var t=this;return Ef(this._delegate).then(function(n){return new At(t.database,n)})},e.prototype.once=function(t,n,r,i){var o=this;w("Query.once",1,4,arguments.length),z("Query.once","callback",n,!0);var s=e.getCancelAndContextArgs_("Query.once",r,i),a=new ne,l=function(c,f){var h=new At(o.database,c);n&&n.call(s.context,h,f),a.resolve(h)};l.userCallback=n,l.context=s.context;var u=function(c){s.cancel&&s.cancel.call(s.context,c),a.reject(c)};switch(t){case"value":gr(this._delegate,l,u,{onlyOnce:!0});break;case"child_added":Ki(this._delegate,l,u,{onlyOnce:!0});break;case"child_removed":Yi(this._delegate,l,u,{onlyOnce:!0});break;case"child_changed":Qi(this._delegate,l,u,{onlyOnce:!0});break;case"child_moved":ji(this._delegate,l,u,{onlyOnce:!0});break;default:throw new Error(re("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise},e.prototype.limitToFirst=function(t){return w("Query.limitToFirst",1,1,arguments.length),new e(this.database,de(this._delegate,kf(t)))},e.prototype.limitToLast=function(t){return w("Query.limitToLast",1,1,arguments.length),new e(this.database,de(this._delegate,Lf(t)))},e.prototype.orderByChild=function(t){return w("Query.orderByChild",1,1,arguments.length),new e(this.database,de(this._delegate,Ff(t)))},e.prototype.orderByKey=function(){return w("Query.orderByKey",0,0,arguments.length),new e(this.database,de(this._delegate,Vf()))},e.prototype.orderByPriority=function(){return w("Query.orderByPriority",0,0,arguments.length),new e(this.database,de(this._delegate,Uf()))},e.prototype.orderByValue=function(){return w("Query.orderByValue",0,0,arguments.length),new e(this.database,de(this._delegate,zf()))},e.prototype.startAt=function(t,n){return t===void 0&&(t=null),w("Query.startAt",0,2,arguments.length),new e(this.database,de(this._delegate,Rf(t,n)))},e.prototype.startAfter=function(t,n){return t===void 0&&(t=null),w("Query.startAfter",0,2,arguments.length),new e(this.database,de(this._delegate,Af(t,n)))},e.prototype.endAt=function(t,n){return t===void 0&&(t=null),w("Query.endAt",0,2,arguments.length),new e(this.database,de(this._delegate,Sf(t,n)))},e.prototype.endBefore=function(t,n){return t===void 0&&(t=null),w("Query.endBefore",0,2,arguments.length),new e(this.database,de(this._delegate,Of(t,n)))},e.prototype.equalTo=function(t,n){return w("Query.equalTo",1,2,arguments.length),new e(this.database,de(this._delegate,Gf(t,n)))},e.prototype.toString=function(){return w("Query.toString",0,0,arguments.length),this._delegate.toString()},e.prototype.toJSON=function(){return w("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.isEqual=function(t){if(w("Query.isEqual",1,1,arguments.length),!(t instanceof e)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)},e.getCancelAndContextArgs_=function(t,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,z(t,"cancel",i.cancel,!0),i.context=r,ui(t,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(re(t,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(e.prototype,"ref",{get:function(){return new Ye(this.database,new Ie(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),e}(),Ye=function(e){F(t,e);function t(n,r){var i=e.call(this,n,new he(r._repo,r._path,new es,!1))||this;return i.database=n,i._delegate=r,i}return t.prototype.getKey=function(){return w("Reference.key",0,0,arguments.length),this._delegate.key},t.prototype.child=function(n){return w("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new t(this.database,Ze(this._delegate,n))},t.prototype.getParent=function(){w("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new t(this.database,n):null},t.prototype.getRoot=function(){return w("Reference.root",0,0,arguments.length),new t(this.database,this._delegate.root)},t.prototype.set=function(n,r){w("Reference.set",1,2,arguments.length),z("Reference.set","onComplete",r,!0);var i=oi(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(n,r){if(w("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ce("Reference.update",this._delegate._path),z("Reference.update","onComplete",r,!0);var s=If(this._delegate,n);return r&&s.then(function(){return r(null)},function(a){return r(a)}),s},t.prototype.setWithPriority=function(n,r,i){w("Reference.setWithPriority",2,3,arguments.length),z("Reference.setWithPriority","onComplete",i,!0);var o=Cf(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(s){return i(s)}),o},t.prototype.remove=function(n){w("Reference.remove",0,1,arguments.length),z("Reference.remove","onComplete",n,!0);var r=bf(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.transaction=function(n,r,i){var o=this;w("Reference.transaction",1,3,arguments.length),z("Reference.transaction","transactionUpdate",n,!1),z("Reference.transaction","onComplete",r,!0),jc("Reference.transaction","applyLocally",i,!0);var s=ih(this._delegate,n,{applyLocally:i}).then(function(a){return new sh(a.committed,new At(o.database,a.snapshot))});return r&&s.then(function(a){return r(null,a.committed,a.snapshot)},function(a){return r(a,!1,null)}),s},t.prototype.setPriority=function(n,r){w("Reference.setPriority",1,2,arguments.length),z("Reference.setPriority","onComplete",r,!0);var i=wf(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.push=function(n,r){var i=this;w("Reference.push",0,2,arguments.length),z("Reference.push","onComplete",r,!0);var o=gf(this._delegate,n),s=o.then(function(l){return new t(i.database,l)});r&&s.then(function(){return r(null)},function(l){return r(l)});var a=new t(this.database,o);return a.then=s.then.bind(s),a.catch=s.catch.bind(s,void 0),a},t.prototype.onDisconnect=function(){return ce("Reference.onDisconnect",this._delegate._path),new oh(new yf(this._delegate._repo,this._delegate._path))},Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),t}(Hs);/**
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
 */var _n=function(){function e(t,n){var r=this;this._delegate=t,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return e.prototype.useEmulator=function(t,n,r){r===void 0&&(r={}),Xf(this._delegate,t,n,r)},e.prototype.ref=function(t){if(w("database.ref",0,1,arguments.length),t instanceof Ye){var n=Gi(this._delegate,t.toString());return new Ye(this,n)}else{var n=Fs(this._delegate,t);return new Ye(this,n)}},e.prototype.refFromURL=function(t){var n="database.refFromURL";w(n,1,1,arguments.length);var r=Gi(this._delegate,t);return new Ye(this,r)},e.prototype.goOffline=function(){return w("database.goOffline",0,0,arguments.length),Jf(this._delegate)},e.prototype.goOnline=function(){return w("database.goOnline",0,0,arguments.length),Zf(this._delegate)},e.ServerValue={TIMESTAMP:th(),increment:function(t){return nh(t)}},e}();/**
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
 */var ah=function(){Ke.forceDisallow(),Ar.forceAllow()},lh=function(){Ar.forceDisallow()},uh=function(){return Ke.isAvailable()},ch=function(e,t){var n=e._delegate._repo.persistentConnection_;n.securityDebugCallback_=t},fh=function(e,t){cf(e._delegate._repo,t)},hh=function(e,t){ff(e._delegate._repo,t)},dh=function(e){return e._delegate._repo.dataUpdateCount},ph=function(e,t){return Zc(e._delegate._repo,t)};function vh(e){var t=e.app,n=e.url,r=e.version,i=e.customAuthImpl,o=e.namespace,s=e.nodeAdmin,a=s===void 0?!1:s;yo(r);var l=new uo("auth-internal",new co("database-standalone"));return l.setComponent(new Vt("auth-internal",function(){return i},"PRIVATE")),{instance:new _n(zs(t,l,void 0,n,a),t),namespace:o}}var _h=Object.freeze({__proto__:null,forceLongPolling:ah,forceWebSockets:lh,isWebSocketsAvailable:uh,setSecurityDebugCallback:ch,stats:fh,statsIncrementCounter:hh,dataUpdateCount:dh,interceptServerData:ph,initStandalone:vh});/**
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
 */var mh=$e;$e.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};$e.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var yh=Uo,gh=function(e){var t=$e.prototype.put;return $e.prototype.put=function(n,r,i,o){o!==void 0&&(o=e()),t.call(this,n,r,i,o)},function(){$e.prototype.put=t}},bh=Rr,wh=function(e){return e._delegate._queryIdentifier},Ch=function(e){qf(e)},Ih=Object.freeze({__proto__:null,DataConnection:mh,RealTimeConnection:yh,hijackHash:gh,ConnectionTarget:bh,queryIdentifier:wh,forceRestClient:Ch});/**
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
 */var Eh=_n.ServerValue;function Sh(e){yo(e.SDK_VERSION),e.INTERNAL.registerComponent(new Vt("database",function(t,n){var r=n.instanceIdentifier,i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new _n(zs(i,o,s,r),i)},"PUBLIC").setServiceProps({Reference:Ye,Query:Hs,Database:_n,DataSnapshot:At,enableLogging:Co,INTERNAL:_h,ServerValue:Eh,TEST_ACCESS:Ih}).setMultipleInstances(!0)),e.registerVersion(ll,ul)}Sh(Bt);const Th={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},Oh=Bt.initializeApp(Th),Rh=Oh.database();function xh(){const e=Jn();Rh.ref("users/"+e.user.uid).set({device:e.user.device,concentration:e.user.concentration,age_group:e.user.age_group,dyslexia:e.user.dyslexia,dyscalculia:e.user.dyscalculia,study_group:e.user.study_group})}var Jt,Ah=new Uint8Array(16);function Gs(){if(!Jt&&(Jt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Jt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Jt(Ah)}const Nh=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ks(e){return typeof e=="string"&&Nh.test(e)}var G=[];for(var jn=0;jn<256;++jn)G.push((jn+256).toString(16).substr(1));function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(G[e[t+0]]+G[e[t+1]]+G[e[t+2]]+G[e[t+3]]+"-"+G[e[t+4]]+G[e[t+5]]+"-"+G[e[t+6]]+G[e[t+7]]+"-"+G[e[t+8]]+G[e[t+9]]+"-"+G[e[t+10]]+G[e[t+11]]+G[e[t+12]]+G[e[t+13]]+G[e[t+14]]+G[e[t+15]]).toLowerCase();if(!Ks(n))throw TypeError("Stringified UUID is invalid");return n}var $i,Yn,qn=0,$n=0;function kh(e,t,n){var r=t&&n||0,i=t||new Array(16);e=e||{};var o=e.node||$i,s=e.clockseq!==void 0?e.clockseq:Yn;if(o==null||s==null){var a=e.random||(e.rng||Gs)();o==null&&(o=$i=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),s==null&&(s=Yn=(a[6]<<8|a[7])&16383)}var l=e.msecs!==void 0?e.msecs:Date.now(),u=e.nsecs!==void 0?e.nsecs:$n+1,c=l-qn+(u-$n)/1e4;if(c<0&&e.clockseq===void 0&&(s=s+1&16383),(c<0||l>qn)&&e.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");qn=l,$n=u,Yn=s,l+=122192928e5;var f=((l&268435455)*1e4+u)%4294967296;i[r++]=f>>>24&255,i[r++]=f>>>16&255,i[r++]=f>>>8&255,i[r++]=f&255;var h=l/4294967296*1e4&268435455;i[r++]=h>>>8&255,i[r++]=h&255,i[r++]=h>>>24&15|16,i[r++]=h>>>16&255,i[r++]=s>>>8|128,i[r++]=s&255;for(var d=0;d<6;++d)i[r+d]=o[d];return t||si(i)}function Ph(e){if(!Ks(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=t&255,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=t&255,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=t&255,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=t&255,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=t&255,n}function Lh(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}var Dh="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Fh="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Qs(e,t,n){function r(i,o,s,a){if(typeof i=="string"&&(i=Lh(i)),typeof o=="string"&&(o=Ph(o)),o.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l=new Uint8Array(16+i.length);if(l.set(o),l.set(i,o.length),l=n(l),l[6]=l[6]&15|t,l[8]=l[8]&63|128,s){a=a||0;for(var u=0;u<16;++u)s[a+u]=l[u];return s}return si(l)}try{r.name=e}catch{}return r.DNS=Dh,r.URL=Fh,r}function Mh(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return Vh(Bh(Uh(e),e.length*8))}function Vh(e){for(var t=[],n=e.length*32,r="0123456789abcdef",i=0;i<n;i+=8){var o=e[i>>5]>>>i%32&255,s=parseInt(r.charAt(o>>>4&15)+r.charAt(o&15),16);t.push(s)}return t}function js(e){return(e+64>>>9<<4)+14+1}function Bh(e,t){e[t>>5]|=128<<t%32,e[js(t)-1]=t;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,s=0;s<e.length;s+=16){var a=n,l=r,u=i,c=o;n=Y(n,r,i,o,e[s],7,-680876936),o=Y(o,n,r,i,e[s+1],12,-389564586),i=Y(i,o,n,r,e[s+2],17,606105819),r=Y(r,i,o,n,e[s+3],22,-1044525330),n=Y(n,r,i,o,e[s+4],7,-176418897),o=Y(o,n,r,i,e[s+5],12,1200080426),i=Y(i,o,n,r,e[s+6],17,-1473231341),r=Y(r,i,o,n,e[s+7],22,-45705983),n=Y(n,r,i,o,e[s+8],7,1770035416),o=Y(o,n,r,i,e[s+9],12,-1958414417),i=Y(i,o,n,r,e[s+10],17,-42063),r=Y(r,i,o,n,e[s+11],22,-1990404162),n=Y(n,r,i,o,e[s+12],7,1804603682),o=Y(o,n,r,i,e[s+13],12,-40341101),i=Y(i,o,n,r,e[s+14],17,-1502002290),r=Y(r,i,o,n,e[s+15],22,1236535329),n=q(n,r,i,o,e[s+1],5,-165796510),o=q(o,n,r,i,e[s+6],9,-1069501632),i=q(i,o,n,r,e[s+11],14,643717713),r=q(r,i,o,n,e[s],20,-373897302),n=q(n,r,i,o,e[s+5],5,-701558691),o=q(o,n,r,i,e[s+10],9,38016083),i=q(i,o,n,r,e[s+15],14,-660478335),r=q(r,i,o,n,e[s+4],20,-405537848),n=q(n,r,i,o,e[s+9],5,568446438),o=q(o,n,r,i,e[s+14],9,-1019803690),i=q(i,o,n,r,e[s+3],14,-187363961),r=q(r,i,o,n,e[s+8],20,1163531501),n=q(n,r,i,o,e[s+13],5,-1444681467),o=q(o,n,r,i,e[s+2],9,-51403784),i=q(i,o,n,r,e[s+7],14,1735328473),r=q(r,i,o,n,e[s+12],20,-1926607734),n=$(n,r,i,o,e[s+5],4,-378558),o=$(o,n,r,i,e[s+8],11,-2022574463),i=$(i,o,n,r,e[s+11],16,1839030562),r=$(r,i,o,n,e[s+14],23,-35309556),n=$(n,r,i,o,e[s+1],4,-1530992060),o=$(o,n,r,i,e[s+4],11,1272893353),i=$(i,o,n,r,e[s+7],16,-155497632),r=$(r,i,o,n,e[s+10],23,-1094730640),n=$(n,r,i,o,e[s+13],4,681279174),o=$(o,n,r,i,e[s],11,-358537222),i=$(i,o,n,r,e[s+3],16,-722521979),r=$(r,i,o,n,e[s+6],23,76029189),n=$(n,r,i,o,e[s+9],4,-640364487),o=$(o,n,r,i,e[s+12],11,-421815835),i=$(i,o,n,r,e[s+15],16,530742520),r=$(r,i,o,n,e[s+2],23,-995338651),n=X(n,r,i,o,e[s],6,-198630844),o=X(o,n,r,i,e[s+7],10,1126891415),i=X(i,o,n,r,e[s+14],15,-1416354905),r=X(r,i,o,n,e[s+5],21,-57434055),n=X(n,r,i,o,e[s+12],6,1700485571),o=X(o,n,r,i,e[s+3],10,-1894986606),i=X(i,o,n,r,e[s+10],15,-1051523),r=X(r,i,o,n,e[s+1],21,-2054922799),n=X(n,r,i,o,e[s+8],6,1873313359),o=X(o,n,r,i,e[s+15],10,-30611744),i=X(i,o,n,r,e[s+6],15,-1560198380),r=X(r,i,o,n,e[s+13],21,1309151649),n=X(n,r,i,o,e[s+4],6,-145523070),o=X(o,n,r,i,e[s+11],10,-1120210379),i=X(i,o,n,r,e[s+2],15,718787259),r=X(r,i,o,n,e[s+9],21,-343485551),n=Ne(n,a),r=Ne(r,l),i=Ne(i,u),o=Ne(o,c)}return[n,r,i,o]}function Uh(e){if(e.length===0)return[];for(var t=e.length*8,n=new Uint32Array(js(t)),r=0;r<t;r+=8)n[r>>5]|=(e[r/8]&255)<<r%32;return n}function Ne(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Wh(e,t){return e<<t|e>>>32-t}function Mn(e,t,n,r,i,o){return Ne(Wh(Ne(Ne(t,e),Ne(r,o)),i),n)}function Y(e,t,n,r,i,o,s){return Mn(t&n|~t&r,e,t,i,o,s)}function q(e,t,n,r,i,o,s){return Mn(t&r|n&~r,e,t,i,o,s)}function $(e,t,n,r,i,o,s){return Mn(t^n^r,e,t,i,o,s)}function X(e,t,n,r,i,o,s){return Mn(n^(t|~r),e,t,i,o,s)}var zh=Qs("v3",48,Mh);const Hh=zh;function Gh(e,t,n){e=e||{};var r=e.random||(e.rng||Gs)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return si(r)}function Kh(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function Xn(e,t){return e<<t|e>>>32-t}function Qh(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var i=0;i<r.length;++i)e.push(r.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,s=Math.ceil(o/16),a=new Array(s),l=0;l<s;++l){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=e[l*64+c*4]<<24|e[l*64+c*4+1]<<16|e[l*64+c*4+2]<<8|e[l*64+c*4+3];a[l]=u}a[s-1][14]=(e.length-1)*8/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=(e.length-1)*8&4294967295;for(var f=0;f<s;++f){for(var h=new Uint32Array(80),d=0;d<16;++d)h[d]=a[f][d];for(var v=16;v<80;++v)h[v]=Xn(h[v-3]^h[v-8]^h[v-14]^h[v-16],1);for(var m=n[0],p=n[1],y=n[2],g=n[3],T=n[4],M=0;M<80;++M){var te=Math.floor(M/20),ye=Xn(m,5)+Kh(te,p,y,g)+T+t[te]+h[M]>>>0;T=g,g=y,y=Xn(p,30)>>>0,p=m,m=ye}n[0]=n[0]+m>>>0,n[1]=n[1]+p>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+T>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var jh=Qs("v5",80,Qh);const Yh=jh;var qh={v1:kh,v3:Hh,v4:Gh,v5:Yh},$h=oa(),Ys={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){(!t||t.length!==(e||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const n=this.isBoth(),r=this.isHorizontal(),i=this.first,{numToleratedItems:o}=this.calculateNumItems(),s=this.itemSize,a=(c=0,f)=>c<=f?0:c,l=(c,f)=>c*f,u=(c=0,f=0)=>this.scrollTo({left:c,top:f,behavior:t});if(n){const c={rows:a(e[0],o[0]),cols:a(e[1],o[1])};(c.rows!==i.rows||c.cols!==i.cols)&&u(l(c.cols,s[1]),l(c.rows,s[0]))}else{const c=a(e,o);c!==i&&(r?u(l(c,s),0):u(0,l(c,s)))}},scrollInView(e,t,n="auto"){if(t){const r=this.isBoth(),i=this.isHorizontal(),{first:o,viewport:s}=this.getRenderedRange(),a=(c=0,f=0)=>this.scrollTo({left:c,top:f,behavior:n}),l=t==="to-start",u=t==="to-end";if(l){if(r)s.first.rows-o.rows>e[0]?a(s.first.cols*this.itemSize[1],(s.first.rows-1)*this.itemSize[0]):s.first.cols-o.cols>e[1]&&a((s.first.cols-1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.first-o>e){const c=(s.first-1)*this.itemSize;i?a(c,0):a(0,c)}}else if(u){if(r)s.last.rows-o.rows<=e[0]+1?a(s.first.cols*this.itemSize[1],(s.first.rows+1)*this.itemSize[0]):s.last.cols-o.cols<=e[1]+1&&a((s.first.cols+1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.last-o<=e+1){const c=(s.first+1)*this.itemSize;i?a(c,0):a(0,c)}}}else this.scrollToIndex(e,n)},getRenderedRange(){const e=(r,i)=>Math.floor(r/(i||r));let t=this.first,n=0;if(this.element){const r=this.isBoth(),i=this.isHorizontal(),o=this.element.scrollTop,s=this.element.scrollLeft;r?(t={rows:e(o,this.itemSize[0]),cols:e(s,this.itemSize[1])},n={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(i?s:o,this.itemSize),n=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:n}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),n=this.itemSize,r=this.getContentPosition(),i=this.element?this.element.offsetWidth-r.left:0,o=this.element?this.element.offsetHeight-r.top:0,s=(c,f)=>Math.ceil(c/(f||c)),a=c=>Math.ceil(c/2),l=e?{rows:s(o,n[0]),cols:s(i,n[1])}:s(t?i:o,n),u=this.d_numToleratedItems||(e?[a(l.rows),a(l.cols)]:a(l));return{numItemsInViewport:l,numToleratedItems:u}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:n,numToleratedItems:r}=this.calculateNumItems(),i=(s,a,l,u)=>this.getLast(s+a+(s<l?2:3)*l,u),o=e?{rows:i(t.rows,n.rows,r[0]),cols:i(t.cols,n.cols,r[1],!0)}:i(t,n,r);this.last=o,this.numItemsInViewport=n,this.d_numToleratedItems=r,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:n.rows}).map(()=>Array.from({length:n.cols})):Array.from({length:n})),this.lazy&&this.$emit("lazy-load",{first:t,last:o})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),n=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),r=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),i=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:n,top:r,bottom:i,x:t+n,y:r+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),n=this.element.parentElement,r=this.scrollWidth||`${this.element.offsetWidth||n.offsetWidth}px`,i=this.scrollHeight||`${this.element.offsetHeight||n.offsetHeight}px`,o=(s,a)=>this.element.style[s]=a;e||t?(o("height",i),o("width",r)):o("height",i)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),n=this.isHorizontal(),r=this.getContentPosition(),i=(o,s,a,l=0)=>this.spacerStyle={...this.spacerStyle,[`${o}`]:(s||[]).length*a+l+"px"};t?(i("height",e,this.itemSize[0],r.y),i("width",this.columns||e[1],this.itemSize[1],r.x)):n?i("width",this.columns||e,this.itemSize,r.x):i("height",e,this.itemSize,r.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),n=this.isHorizontal(),r=e?e.first:this.first,i=(s,a)=>s*a,o=(s=0,a=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${s}px, ${a}px, 0)`}};if(t)o(i(r.cols,this.itemSize[1]),i(r.rows,this.itemSize[0]));else{const s=i(r,this.itemSize);n?o(s,0):o(0,s)}}},onScrollPositionChange(e){const t=e.target,n=this.isBoth(),r=this.isHorizontal(),i=this.getContentPosition(),o=(p,y)=>p?p>y?p-y:p:0,s=(p,y)=>Math.floor(p/(y||p)),a=(p,y,g,T,M,te)=>p<=M?M:te?g-T-M:y+M-1,l=(p,y,g,T,M,te,ye)=>p<=te?0:Math.max(0,ye?p<y?g:p-te:p>y?g:p-2*te),u=(p,y,g,T,M,te)=>{let ye=y+T+2*M;return p>=M&&(ye+=M+1),this.getLast(ye,te)},c=o(t.scrollTop,i.top),f=o(t.scrollLeft,i.left);let h=n?{rows:0,cols:0}:0,d=this.last,v=!1,m=this.lastScrollPos;if(n){const p=this.lastScrollPos.top<=c,y=this.lastScrollPos.left<=f,g={rows:s(c,this.itemSize[0]),cols:s(f,this.itemSize[1])},T={rows:a(g.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],p),cols:a(g.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],y)};h={rows:l(g.rows,T.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],p),cols:l(g.cols,T.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],y)},d={rows:u(g.rows,h.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(g.cols,h.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},v=h.rows!==this.first.rows||d.rows!==this.last.rows||h.cols!==this.first.cols||d.cols!==this.last.cols,m={top:c,left:f}}else{const p=r?f:c,y=this.lastScrollPos<=p,g=s(p,this.itemSize),T=a(g,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,y);h=l(g,T,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,y),d=u(g,h,this.last,this.numItemsInViewport,this.d_numToleratedItems),v=h!==this.first||d!==this.last,m=p}return{first:h,last:d,isRangeChanged:v,scrollPos:m}},onScrollChange(e){const{first:t,last:n,isRangeChanged:r,scrollPos:i}=this.onScrollPositionChange(e);if(r){const o={first:t,last:n};this.setContentPosition(o),this.first=t,this.last=n,this.lastScrollPos=i,this.$emit("scroll-index-change",o),this.lazy&&this.$emit("lazy-load",o)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,n=this.isBoth()?this.first.rows+e:this.first+e;return{index:n,count:t,first:n===0,last:n===t-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions(e,t){let n=this.loaderArr.length;return{index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0,...t}},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const Xh=["tabindex"],Jh={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function Zh(e,t,n,r,i,o){return n.disabled?(N(),P(st,{key:1},[K(e.$slots,"default"),K(e.$slots,"content",{items:n.items,rows:n.items,columns:o.loadedColumns})],64)):(N(),P("div",{key:0,ref:o.elementRef,class:J(o.containerClass),tabindex:n.tabindex,style:Qe(n.style),onScroll:t[0]||(t[0]=(...s)=>o.onScroll&&o.onScroll(...s))},[K(e.$slots,"content",{styleClass:o.contentClass,items:o.loadedItems,getItemOptions:o.getOptions,loading:i.d_loading,getLoaderOptions:o.getLoaderOptions,itemSize:n.itemSize,rows:o.loadedRows,columns:o.loadedColumns,contentRef:o.contentRef,spacerStyle:i.spacerStyle,contentStyle:i.contentStyle,vertical:o.isVertical(),horizontal:o.isHorizontal(),both:o.isBoth()},()=>[b("div",{ref:o.contentRef,class:J(o.contentClass),style:Qe(i.contentStyle)},[(N(!0),P(st,null,en(o.loadedItems,(s,a)=>K(e.$slots,"item",{key:a,item:s,options:o.getOptions(a)})),128))],6)]),n.showSpacer?(N(),P("div",{key:0,class:"p-virtualscroller-spacer",style:Qe(i.spacerStyle)},null,4)):xe("",!0),!n.loaderDisabled&&n.showLoader&&i.d_loading?(N(),P("div",{key:1,class:J(o.loaderClass)},[e.$slots&&e.$slots.loader?(N(!0),P(st,{key:0},en(i.loaderArr,(s,a)=>K(e.$slots,"loader",{key:a,options:o.getLoaderOptions(a,o.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})),128)):(N(),P("i",Jh))],2)):xe("",!0)],46,Xh))}function ed(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var td=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
`;ed(td);Ys.render=Zh;var qs={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=B.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function nd(e,t,n,r,i,o){return o.inline?K(e.$slots,"default",{key:0}):i.mounted?(N(),sa(aa,{key:1,to:n.appendTo},[K(e.$slots,"default")],8,["to"])):xe("",!0)}qs.render=nd;var $s={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Vn.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?V.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?V.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?V.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?V.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return V.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return V.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&B.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&B.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.focused=!0,this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&V.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||B.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){if(e.relatedTarget===this.$refs.focusInput){const n=B.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)");B.focus(n)}else B.focus(this.$refs.focusInput)},onLastHiddenFocus(){B.focus(this.$refs.firstHiddenFocusableElementOnOverlay)},onOptionSelect(e,t,n=!0){const r=this.getOptionValue(t);this.updateModel(e,r),n&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){$h.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const n=e.currentTarget,r=n.value.length;n.setSelectionRange(r,r),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(B.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){Vn.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&B.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){Vn.clear(e)},alignOverlay(){this.appendTo==="self"?B.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=B.getOuterWidth(this.$el)+"px",B.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new la(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!B.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return B.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return V.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return V.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?V.findLastIndex(this.visibleOptions.slice(0,e),n=>this.isValidOption(n)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,r=!1;return this.focusedOptionIndex!==-1?(n=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)),n=n===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)):n+this.focusedOptionIndex):n=this.visibleOptions.findIndex(i=>this.isOptionMatched(i)),n!==-1&&(r=!0),n===-1&&this.focusedOptionIndex===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,n=B.findSingle(this.list,`li[id="${t}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,n,r)=>{t.push({optionGroup:n,group:!0,index:r});const i=this.getOptionGroupChildren(n);return i&&i.forEach(o=>t.push(o)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?ua.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption(){return V.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return V.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},id(){return this.$attrs.id||ca()},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:Xi},components:{VirtualScroller:Ys,Portal:qs}};const rd=["id"],id=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],od=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],sd={class:"p-dropdown-trigger"},ad={key:0,class:"p-dropdown-header"},ld={class:"p-dropdown-filter-container"},ud=["value","placeholder","aria-owns","aria-activedescendant"],cd=b("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),fd={role:"status","aria-live":"polite",class:"p-hidden-accessible"},hd=["id"],dd=["id"],pd=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],vd={key:0,class:"p-dropdown-empty-message",role:"option"},_d={key:1,class:"p-dropdown-empty-message",role:"option"},md={key:0,role:"status","aria-live":"polite",class:"p-hidden-accessible"},yd={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function gd(e,t,n,r,i,o){const s=ot("VirtualScroller"),a=ot("Portal"),l=Ji("ripple");return N(),P("div",{ref:"container",id:o.id,class:J(o.containerClass),onClick:t[16]||(t[16]=(...u)=>o.onContainerClick&&o.onContainerClick(...u))},[n.editable?(N(),P("input",ze({key:0,ref:"focusInput",id:n.inputId,type:"text",style:n.inputStyle,class:o.inputStyleClass,value:o.editableInputValue,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,disabled:n.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":i.focused?o.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...u)=>o.onFocus&&o.onFocus(...u)),onBlur:t[1]||(t[1]=(...u)=>o.onBlur&&o.onBlur(...u)),onKeydown:t[2]||(t[2]=(...u)=>o.onKeyDown&&o.onKeyDown(...u)),onInput:t[3]||(t[3]=(...u)=>o.onEditableInput&&o.onEditableInput(...u))},n.inputProps),null,16,id)):(N(),P("span",ze({key:1,ref:"focusInput",id:n.inputId,style:n.inputStyle,class:o.inputStyleClass,tabindex:n.disabled?-1:n.tabindex,role:"combobox","aria-label":e.ariaLabel||(o.label==="p-emptylabel"?void 0:o.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":i.focused?o.focusedOptionId:void 0,"aria-disabled":n.disabled,onFocus:t[4]||(t[4]=(...u)=>o.onFocus&&o.onFocus(...u)),onBlur:t[5]||(t[5]=(...u)=>o.onBlur&&o.onBlur(...u)),onKeydown:t[6]||(t[6]=(...u)=>o.onKeyDown&&o.onKeyDown(...u))},n.inputProps),[K(e.$slots,"value",{value:n.modelValue,placeholder:n.placeholder},()=>[bt(Ee(o.label==="p-emptylabel"?"\xA0":o.label||"empty"),1)])],16,od)),n.showClear&&n.modelValue!=null?(N(),P("i",ze({key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[7]||(t[7]=(...u)=>o.onClearClick&&o.onClearClick(...u))},n.clearIconProps),null,16)):xe("",!0),b("div",sd,[K(e.$slots,"indicator",{},()=>[b("span",{class:J(o.dropdownIconClass),"aria-hidden":"true"},null,2)])]),ie(a,{appendTo:n.appendTo},{default:qt(()=>[ie(fa,{name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},{default:qt(()=>[i.overlayVisible?(N(),P("div",ze({key:0,ref:o.overlayRef,style:n.panelStyle,class:o.panelStyleClass,onClick:t[14]||(t[14]=(...u)=>o.onOverlayClick&&o.onOverlayClick(...u)),onKeydown:t[15]||(t[15]=(...u)=>o.onOverlayKeyDown&&o.onOverlayKeyDown(...u))},n.panelProps),[b("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...u)=>o.onFirstHiddenFocus&&o.onFirstHiddenFocus(...u))},null,544),K(e.$slots,"header",{value:n.modelValue,options:o.visibleOptions}),n.filter?(N(),P("div",ad,[b("div",ld,[b("input",ze({ref:"filterInput",type:"text",value:i.filterValue,onVnodeUpdated:t[9]||(t[9]=(...u)=>o.onFilterUpdated&&o.onFilterUpdated(...u)),class:"p-dropdown-filter p-inputtext p-component",placeholder:n.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":o.focusedOptionId,onKeydown:t[10]||(t[10]=(...u)=>o.onFilterKeyDown&&o.onFilterKeyDown(...u)),onBlur:t[11]||(t[11]=(...u)=>o.onFilterBlur&&o.onFilterBlur(...u)),onInput:t[12]||(t[12]=(...u)=>o.onFilterChange&&o.onFilterChange(...u))},n.filterInputProps),null,16,ud),cd]),b("span",fd,Ee(o.filterResultMessageText),1)])):xe("",!0),b("div",{class:"p-dropdown-items-wrapper",style:Qe({"max-height":o.virtualScrollerDisabled?n.scrollHeight:""})},[ie(s,ze({ref:o.virtualScrollerRef},n.virtualScrollerOptions,{items:o.visibleOptions,style:{height:n.scrollHeight},tabindex:-1,disabled:o.virtualScrollerDisabled}),ha({content:qt(({styleClass:u,contentRef:c,items:f,getItemOptions:h,contentStyle:d,itemSize:v})=>[b("ul",{ref:m=>o.listRef(m,c),id:o.id+"_list",class:J(["p-dropdown-items",u]),style:Qe(d),role:"listbox"},[(N(!0),P(st,null,en(f,(m,p)=>(N(),P(st,{key:o.getOptionRenderKey(m,o.getOptionIndex(p,h))},[o.isOptionGroup(m)?(N(),P("li",{key:0,id:o.id+"_"+o.getOptionIndex(p,h),style:Qe({height:v?v+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[K(e.$slots,"optiongroup",{option:m.optionGroup,index:o.getOptionIndex(p,h)},()=>[bt(Ee(o.getOptionGroupLabel(m.optionGroup)),1)])],12,dd)):Zi((N(),P("li",{key:1,id:o.id+"_"+o.getOptionIndex(p,h),style:Qe({height:v?v+"px":void 0}),class:J(["p-dropdown-item",{"p-highlight":o.isSelected(m),"p-focus":i.focusedOptionIndex===o.getOptionIndex(p,h),"p-disabled":o.isOptionDisabled(m)}]),role:"option","aria-label":o.getOptionLabel(m),"aria-selected":o.isSelected(m),"aria-disabled":o.isOptionDisabled(m),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(p,h)),onClick:y=>o.onOptionSelect(y,m),onMousemove:y=>o.onOptionMouseMove(y,o.getOptionIndex(p,h))},[K(e.$slots,"option",{option:m,index:o.getOptionIndex(p,h)},()=>[bt(Ee(o.getOptionLabel(m)),1)])],46,pd)),[[l]])],64))),128)),i.filterValue&&(!f||f&&f.length===0)?(N(),P("li",vd,[K(e.$slots,"emptyfilter",{},()=>[bt(Ee(o.emptyFilterMessageText),1)])])):!n.options||n.options&&n.options.length===0?(N(),P("li",_d,[K(e.$slots,"empty",{},()=>[bt(Ee(o.emptyMessageText),1)])])):xe("",!0)],14,hd),!n.options||n.options&&n.options.length===0?(N(),P("span",md,Ee(o.emptyMessageText),1)):xe("",!0),b("span",yd,Ee(o.selectedMessageText),1)]),_:2},[e.$slots.loader?{name:"loader",fn:qt(({options:u})=>[K(e.$slots,"loader",{options:u})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),K(e.$slots,"footer",{value:n.modelValue,options:o.visibleOptions}),b("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...u)=>o.onLastHiddenFocus&&o.onLastHiddenFocus(...u))},null,544)],16)):xe("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,rd)}function bd(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var wd=`
.p-dropdown {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;bd(wd);$s.render=gd;var Xs={name:"SelectButton",emits:["update:modelValue","focus","blur","change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,unselectable:{type:Boolean,default:!0},disabled:Boolean,dataKey:null,"aria-labelledby":{type:String,default:null}},data(){return{focusedIndex:0}},mounted(){this.defaultTabIndexes()},methods:{defaultTabIndexes(){let e=B.find(this.$refs.container,".p-button"),t=B.findSingle(this.$refs.container,".p-highlight");for(let n=0;n<e.length;n++)(B.hasClass(e[n],"p-highlight")&&V.equals(e[n],t)||t===null&&n==0)&&(this.focusedIndex=n)},getOptionLabel(e){return this.optionLabel?V.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?V.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?V.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?V.resolveFieldData(e,this.optionDisabled):!1},onOptionSelect(e,t,n){if(this.disabled||this.isOptionDisabled(t))return;let r=this.isSelected(t);if(r&&!this.unselectable)return;let i=this.getOptionValue(t),o;this.multiple?r?o=this.modelValue.filter(s=>!V.equals(s,i,this.equalityKey)):o=this.modelValue?[...this.modelValue,i]:[i]:o=r?null:i,this.focusedIndex=n,this.$emit("update:modelValue",o),this.$emit("change",{event:e,value:o})},isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.modelValue){for(let r of this.modelValue)if(V.equals(r,n,this.equalityKey)){t=!0;break}}}else t=V.equals(this.modelValue,n,this.equalityKey);return t},onKeydown(e,t,n){switch(e.code){case"Space":{this.onOptionSelect(e,t,n),e.preventDefault();break}case"ArrowDown":case"ArrowRight":{this.changeTabIndexes(e,"next"),e.preventDefault();break}case"ArrowUp":case"ArrowLeft":{this.changeTabIndexes(e,"prev"),e.preventDefault();break}}},changeTabIndexes(e,t){let n,r;for(let i=0;i<=this.$refs.container.children.length-1;i++)this.$refs.container.children[i].getAttribute("tabindex")==="0"&&(n={elem:this.$refs.container.children[i],index:i});t==="prev"?n.index===0?r=this.$refs.container.children.length-1:r=n.index-1:n.index===this.$refs.container.children.length-1?r=0:r=n.index+1,this.focusedIndex=r,this.$refs.container.children[r].focus()},onFocus(e){this.$emit("focus",e)},onBlur(e,t){e.target&&e.relatedTarget&&e.target.parentElement!==e.relatedTarget.parentElement&&this.defaultTabIndexes(),this.$emit("blur",e,t)},getButtonClass(e){return["p-button p-component",{"p-highlight":this.isSelected(e),"p-disabled":this.isOptionDisabled(e)}]}},computed:{containerClass(){return["p-selectbutton p-buttonset p-component",{"p-disabled":this.disabled}]},equalityKey(){return this.optionValue?null:this.dataKey}},directives:{ripple:Xi}};const Cd=["aria-labelledby"],Id=["tabindex","aria-label","role","aria-checked","aria-disabled","onClick","onKeydown","onBlur"],Ed={class:"p-button-label"};function Sd(e,t,n,r,i,o){const s=Ji("ripple");return N(),P("div",{ref:"container",class:J(o.containerClass),role:"group","aria-labelledby":e.ariaLabelledby},[(N(!0),P(st,null,en(n.options,(a,l)=>Zi((N(),P("div",{key:o.getOptionRenderKey(a),tabindex:l===i.focusedIndex?"0":"-1","aria-label":o.getOptionLabel(a),role:n.multiple?"checkbox":"radio","aria-checked":o.isSelected(a),"aria-disabled":n.optionDisabled,class:J(o.getButtonClass(a,l)),onClick:u=>o.onOptionSelect(u,a,l),onKeydown:u=>o.onKeydown(u,a,l),onFocus:t[0]||(t[0]=u=>o.onFocus(u)),onBlur:u=>o.onBlur(u,a)},[K(e.$slots,"option",{option:a,index:l},()=>[b("span",Ed,Ee(o.getOptionLabel(a)),1)])],42,Id)),[[s]])),128))],10,Cd)}Xs.render=Sd;var Js={name:"RadioButton",emits:["click","update:modelValue","change","focus","blur"],props:{value:null,modelValue:null,name:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{focused:!1}},methods:{onClick(e){this.disabled||(this.$emit("click",e),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",e))},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)}},computed:{checked(){return this.modelValue!=null&&V.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.disabled,"p-radiobutton-focused":this.focused}]}}};const Td={class:"p-hidden-accessible"},Od=["id","name","checked","disabled","value","aria-labelledby","aria-label"],Rd=b("div",{class:"p-radiobutton-icon"},null,-1),xd=[Rd];function Ad(e,t,n,r,i,o){return N(),P("div",{class:J(o.containerClass),onClick:t[2]||(t[2]=s=>o.onClick(s))},[b("div",Td,[b("input",ze({ref:"input",id:n.inputId,type:"radio",class:n.inputClass,style:n.inputStyle,name:n.name,checked:o.checked,disabled:n.disabled,value:n.value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=(...s)=>o.onFocus&&o.onFocus(...s)),onBlur:t[1]||(t[1]=(...s)=>o.onBlur&&o.onBlur(...s))},n.inputProps),null,16,Od)]),b("div",{ref:"box",class:J(["p-radiobutton-box",{"p-highlight":o.checked,"p-disabled":n.disabled,"p-focus":i.focused}])},xd,2)],2)}Js.render=Ad;const Nd={name:"Form",components:{Dropdown:$s,SelectButton:Xs,RadioButton:Js,Button:ta},setup:()=>({v$:na(),store:Jn()}),data(){return{uid:"",device:"",devices:[{label:"Mouse",value:"Mouse"},{label:"Touchscreen",value:"Touchscreen"},{label:"Pen",value:"Pen"},{label:"Trackpad",value:"Trackpad"},{label:"Other",value:"Other"}],concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],age_group:"",dyslexia:"",dyscalculia:"",study_group:null,submitted:!1}},validations(){return{device:{required:gt},concentration:{required:gt},age_group:{required:gt},dyslexia:{required:gt},dyscalculia:{required:gt}}},methods:{handleSubmit(e){if(this.submitted=!0,e)this.uid=qh.v4(),this.study_group=Math.floor(Math.random()*2)+1,this.storeData(),this.$router.push("about");else return},storeData(){Jn().insertFormValues(this.uid,this.device,Number(this.concentration.value),Number(this.age_group),this.dyslexia=="Yes",this.dyscalculia=="Yes",this.study_group),xh()}}},kd={class:"main-wrapper"},Pd=b("h1",{class:"page-title"},"Human Cognition Study",-1),Ld=b("p",{class:"subtitle"},"Please fill out the form to begin with the study",-1),Dd={class:"form-field-content-wrapper"},Fd=b("p",{class:"form-field-text"},"What is your method of input?",-1),Md={class:"form-field-content-wrapper"},Vd=b("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applies to you:",-1),Bd=b("p",{class:"form-field-quote"},'"I am in a calm environment with enough light and I am able to concentrate."',-1),Ud={class:"form-field-content-wrapper"},Wd=b("p",{class:"form-field-radiobutton-text"},"Please select your age group:",-1),zd={class:"form-field-radiobutton-wrapper"},Hd=b("label",{class:"radiobutton-text",for:"group1"},"18 - 35",-1),Gd={class:"form-field-radiobutton-wrapper"},Kd=b("label",{class:"radiobutton-text",for:"group2"},"35 - 55",-1),Qd={class:"form-field-radiobutton-wrapper"},jd=b("label",{class:"radiobutton-text",for:"group3"},"55+",-1),Yd={class:"form-field-content-wrapper"},qd=b("p",{class:"form-field-radiobutton-text"},"Do you have dyslexia or any other reading disability?",-1),$d={class:"form-field-radiobutton-wrapper"},Xd=b("label",{class:"radiobutton-text",for:"yes1"},"Yes",-1),Jd={class:"form-field-radiobutton-wrapper"},Zd=b("label",{class:"radiobutton-text",for:"no1"},"No",-1),ep={class:"form-field-content-wrapper"},tp=b("p",{class:"form-field-radiobutton-text"},"Do you have dyscalculia?",-1),np={class:"form-field-radiobutton-wrapper"},rp=b("label",{class:"radiobutton-text",for:"yes2"},"Yes",-1),ip={class:"form-field-radiobutton-wrapper"},op=b("label",{class:"radiobutton-text",for:"no2"},"No",-1),sp={class:"form-button-wrapper"};function ap(e,t,n,r,i,o){const s=ot("Dropdown"),a=ot("SelectButton"),l=ot("RadioButton"),u=ot("Button");return N(),P("main",kd,[Pd,Ld,b("form",{class:"form-wrapper",onSubmit:t[9]||(t[9]=da(c=>o.handleSubmit(!e.v$.$invalid),["prevent"]))},[b("div",{class:J(["form-field",{"p-error":e.v$.device.$invalid&&i.submitted}])},[b("div",Dd,[Fd,ie(s,{class:"form-dropdown",modelValue:e.v$.device.$model,"onUpdate:modelValue":t[0]||(t[0]=c=>e.v$.device.$model=c),options:i.devices,optionLabel:"label",optionValue:"value",autoWidth:"false",placeholder:"Select an input"},null,8,["modelValue","options"])])],2),b("div",{class:J(["form-field",{"p-error":e.v$.concentration.$invalid&&i.submitted}])},[b("div",Md,[Vd,Bd,ie(a,{class:"form-selectbutton",modelValue:e.v$.concentration.$model,"onUpdate:modelValue":t[1]||(t[1]=c=>e.v$.concentration.$model=c),options:i.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),b("div",{class:J(["form-field",{"p-error":e.v$.age_group.$invalid&&i.submitted}])},[b("div",Ud,[Wd,b("div",zd,[ie(l,{class:"form-radiobutton",inputId:"group1",name:"age_group",value:"1",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[2]||(t[2]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),Hd]),b("div",Gd,[ie(l,{class:"form-radiobutton",inputId:"group2",name:"age_group",value:"2",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[3]||(t[3]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),Kd]),b("div",Qd,[ie(l,{class:"form-radiobutton",inputId:"group3",name:"age_group",value:"3",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[4]||(t[4]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),jd])])],2),b("div",{class:J(["form-field",{"p-error":e.v$.dyslexia.$invalid&&i.submitted}])},[b("div",Yd,[qd,b("div",$d,[ie(l,{class:"form-radiobutton",inputId:"yes1",name:"dyslexia",value:"Yes",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[5]||(t[5]=c=>e.v$.dyslexia.$model=c)},null,8,["modelValue"]),Xd]),b("div",Jd,[ie(l,{class:"form-radiobutton",inputId:"no1",name:"dyslexia",value:"No",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[6]||(t[6]=c=>e.v$.dyslexia.$model=c)},null,8,["modelValue"]),Zd])])],2),b("div",{class:J(["form-field",{"p-error":e.v$.dyscalculia.$invalid&&i.submitted}])},[b("div",ep,[tp,b("div",np,[ie(l,{class:"form-radiobutton",inputId:"yes2",name:"dyscalculia",value:"Yes",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[7]||(t[7]=c=>e.v$.dyscalculia.$model=c)},null,8,["modelValue"]),rp]),b("div",ip,[ie(l,{class:"form-radiobutton",inputId:"no2",name:"dyscalculia",value:"No",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[8]||(t[8]=c=>e.v$.dyscalculia.$model=c)},null,8,["modelValue"]),op])])],2),b("div",sp,[ie(u,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const cp=ea(Nd,[["render",ap]]);export{cp as default};
