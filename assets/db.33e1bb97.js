import{u as ua}from"./index.4502a972.js";var En=function(t,e){return En=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},En(t,e)};function k(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");En(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ve=function(){return ve=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ve.apply(this,arguments)};function gi(t,e,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(f){try{l(r.next(f))}catch(c){a(c)}}function u(f){try{l(r.throw(f))}catch(c){a(c)}}function l(f){f.done?o(f.value):i(f.value).then(s,u)}l((r=r.apply(t,e||[])).next())})}function yi(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(f){return u([l,f])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(f){l=[6,f],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function G(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function _e(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}/**
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
 */var mi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */var v=function(t,e){if(!t)throw ze(e)},ze=function(t){return new Error("Firebase Database ("+mi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */var Ei=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},la=function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=t[n++],a=t[n++],s=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{var o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],a=i+1<t.length,s=a?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,f=o>>2,c=(o&3)<<4|s>>4,h=(s&15)<<2|l>>6,d=l&63;u||(d=64,a||(h=64)),r.push(n[f],n[c],n[h],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ei(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):la(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],a=i<t.length,s=a?n[t.charAt(i)]:0;++i;var u=i<t.length,l=u?n[t.charAt(i)]:64;++i;var f=i<t.length,c=f?n[t.charAt(i)]:64;if(++i,o==null||s==null||l==null||c==null)throw Error();var h=o<<2|s>>4;if(r.push(h),l!==64){var d=s<<4&240|l>>2;if(r.push(d),c!==64){var p=l<<6&192|c;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ci=function(t){var e=Ei(t);return Hn.encodeByteArray(e,!0)},Rr=function(t){return Ci(t).replace(/\./g,"")},Nr=function(t){try{return Hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bi(t){return st(void 0,t)}function st(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)!e.hasOwnProperty(r)||!fa(r)||(t[r]=st(t[r],e[r]));return t}function fa(t){return t!=="__proto__"}/**
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
 */var H=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})}return t.prototype.wrapCallback=function(e){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(r):e(r,i))}},t}();/**
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
 */function ca(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=ve({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),s="";return[Rr(JSON.stringify(n)),Rr(JSON.stringify(a)),s].join(".")}/**
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
 */function ha(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ha())}function da(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pa(){return typeof self=="object"&&self.self===self}function va(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Si(){return mi.NODE_ADMIN===!0}/**
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
 */var _a="FirebaseError",ga=function(t){k(e,t);function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=_a,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Qn.prototype.create),o}return e}(Error),Qn=function(){function t(e,n,r){this.service=e,this.serviceName=n,this.errors=r}return t.prototype.create=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+e,a=this.errors[e],s=a?ya(a,i):"Error",u=this.serviceName+": "+s+" ("+o+").",l=new ga(o,u,i);return l},t}();function ya(t,e){return t.replace(ma,function(n,r){var i=e[r];return i!=null?String(i):"<"+r+"?>"})}var ma=/\{\$([^}]+)}/g;/**
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
 */function ut(t){return JSON.parse(t)}function D(t){return JSON.stringify(t)}/**
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
 */var Ii=function(t){var e={},n={},r={},i="";try{var o=t.split(".");e=ut(Nr(o[0])||""),n=ut(Nr(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ea=function(t){var e=Ii(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ca=function(t){var e=Ii(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function j(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pe(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cn(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nt(t,e,n){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}/**
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
 */function ba(t){for(var e=[],n=function(u,l){Array.isArray(l)?l.forEach(function(f){e.push(encodeURIComponent(u)+"="+encodeURIComponent(f))}):e.push(encodeURIComponent(u)+"="+encodeURIComponent(l))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],a=o[0],s=o[1];n(a,s)}return e.length?"&"+e.join("&"):""}/**
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
 */var wa=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,n){n||(n=0);var r=this.W_;if(typeof e=="string")for(var i=0;i<16;i++)r[i]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var a=this.chain_[0],s=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4],c,h,i=0;i<80;i++){i<40?i<20?(c=l^s&(u^l),h=1518500249):(c=s^u^l,h=1859775393):i<60?(c=s&u|l&(s|u),h=2400959708):(c=s^u^l,h=3395469782);var o=(a<<5|a>>>27)+c+f+h+r[i]&4294967295;f=l,l=u,u=(s<<30|s>>>2)&4294967295,s=a,a=o}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},t.prototype.update=function(e,n){if(e!=null){n===void 0&&(n=e.length);for(var r=n-this.blockSize,i=0,o=this.buf_,a=this.inbuf_;i<n;){if(a===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}else for(;i<n;)if(o[a]=e[i],++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=n}},t.prototype.digest=function(){var e=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e},t}();function Sa(t,e){var n=new Ia(t,e);return n.subscribe.bind(n)}var Ia=function(){function t(e,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(r)}).catch(function(i){r.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,r){var i=this,o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ta(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=hn),o.error===void 0&&(o.error=hn),o.complete===void 0&&(o.complete=hn);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),a},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[e]!==void 0)try{n(r.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function Ta(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&typeof t[i]=="function")return!0}return!1}function hn(){}/**
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
 */var m=function(t,e,n,r){var i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){var o=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function Q(t,e){return t+" failed: "+e+" argument "}function M(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Q(t,e)+"must be a valid function.")}function Ar(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Q(t,e)+"must be a valid context object.")}/**
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
 */var Ra=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,v(r<t.length,"Surrogate pair missing trail surrogate.");var a=t.charCodeAt(r)-56320;i=65536+(o<<10)+a}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qt=function(t){for(var e=0,n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}var pt=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var we="[DEFAULT]";/**
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
 */var Ti=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new H;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Aa(e))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}try{for(var i=G(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=U(o.value,2),s=a[0],u=a[1],l=this.normalizeInstanceIdentifier(s);try{var f=this.getOrInitializeService({instanceIdentifier:l});u.resolve(f)}catch{}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=we),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return gi(this,void 0,void 0,function(){var e;return yi(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(_e(_e([],U(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),U(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=we),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=we),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,o=i===void 0?{}:i,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=G(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var f=U(l.value,2),c=f[0],h=f[1],d=this.normalizeInstanceIdentifier(c);a===d&&h.resolve(s)}}catch(p){n={error:p}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return s},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);var a=this.instances.get(i);return a&&e(a,i),function(){o.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,o=this.onInitCallbacks.get(n);if(!!o)try{for(var a=G(o),s=a.next();!s.done;s=a.next()){var u=s.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Na(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=we),this.component?this.component.multipleInstances?e:we:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Na(t){return t===we?void 0:t}function Aa(t){return t.instantiationMode==="EAGER"}/**
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
 */var Ri=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new Ti(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
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
***************************************************************************** */function Z(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}/**
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
 */var be,Gn=[],R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));var Ni={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Pa=R.INFO,Oa=(be={},be[R.DEBUG]="log",be[R.VERBOSE]="log",be[R.INFO]="info",be[R.WARN]="warn",be[R.ERROR]="error",be),ka=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=new Date().toISOString(),o=Oa[e];if(o)console[o].apply(console,Z(["["+i+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Ai=function(){function t(e){this.name=e,this._logLevel=Pa,this._logHandler=ka,this._userLogHandler=null,Gn.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in R))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Ni[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Z([this,R.DEBUG],e)),this._logHandler.apply(this,Z([this,R.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Z([this,R.VERBOSE],e)),this._logHandler.apply(this,Z([this,R.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Z([this,R.INFO],e)),this._logHandler.apply(this,Z([this,R.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Z([this,R.WARN],e)),this._logHandler.apply(this,Z([this,R.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Z([this,R.ERROR],e)),this._logHandler.apply(this,Z([this,R.ERROR],e))},t}();function xa(t){Gn.forEach(function(e){e.setLogLevel(t)})}function Da(t,e){for(var n=function(a){var s=null;e&&e.level&&(s=Ni[e.level]),t===null?a.userLogHandler=null:a.userLogHandler=function(u,l){for(var f=[],c=2;c<arguments.length;c++)f[c-2]=arguments[c];var h=f.map(function(d){if(d==null)return null;if(typeof d=="string")return d;if(typeof d=="number"||typeof d=="boolean")return d.toString();if(d instanceof Error)return d.message;try{return JSON.stringify(d)}catch{return null}}).filter(function(d){return d}).join(" ");l>=(s!=null?s:u.logLevel)&&t({level:R[l].toLowerCase(),message:h,args:f,type:u.name})}},r=0,i=Gn;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */var ce,La=(ce={},ce["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",ce["bad-app-name"]="Illegal App name: '{$appName}",ce["duplicate-app"]="Firebase App named '{$appName}' already exists",ce["app-deleted"]="Firebase App named '{$appName}' already deleted",ce["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",ce["invalid-log-argument"]="First argument to `onLog` must be null or a function.",ce),We=new Qn("app","Firebase",La),Pi="@firebase/app",Ma="0.6.30",Fa="@firebase/analytics",Wa="@firebase/app-check",Ba="@firebase/auth",Ua="@firebase/database",Va="@firebase/functions",Ha="@firebase/installations",Qa="@firebase/messaging",Ga="@firebase/performance",ja="@firebase/remote-config",za="@firebase/storage",Ya="@firebase/firestore",$a="firebase-wrapper";/**
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
 */var B,At="[DEFAULT]",qa=(B={},B[Pi]="fire-core",B[Fa]="fire-analytics",B[Wa]="fire-app-check",B[Ba]="fire-auth",B[Ua]="fire-rtdb",B[Va]="fire-fn",B[Ha]="fire-iid",B[Qa]="fire-fcm",B[Ga]="fire-perf",B[ja]="fire-rc",B[za]="fire-gcs",B[Ya]="fire-fst",B["fire-js"]="fire-js",B[$a]="fire-js-all",B);/**
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
 */var Ue=new Ai("@firebase/app");/**
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
 */var Rt=function(){function t(e,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=bi(e),this.container=new Ri(n.name),this._addComponent(new pt("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),t.prototype.delete=function(){var e=this;return new Promise(function(n){e.checkDestroyed_(),n()}).then(function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map(function(n){return n.delete()}))}).then(function(){e.isDeleted_=!0})},t.prototype._getService=function(e,n){var r;n===void 0&&(n=At),this.checkDestroyed_();var i=this.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},t.prototype._removeServiceInstance=function(e,n){n===void 0&&(n=At),this.container.getProvider(e).clearInstance(n)},t.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(n){Ue.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,n)}},t.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},t.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},t.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw We.create("app-deleted",{appName:this.name_})},t}();Rt.prototype.name&&Rt.prototype.options||Rt.prototype.delete||console.log("dc");var Ka="8.10.0";/**
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
 */function Xa(t){var e={},n=new Map,r={__esModule:!0,initializeApp:a,app:o,registerVersion:l,setLogLevel:xa,onLog:f,apps:null,SDK_VERSION:Ka,INTERNAL:{registerComponent:u,removeApp:i,components:n,useAsService:c}};r.default=r,Object.defineProperty(r,"apps",{get:s});function i(h){delete e[h]}function o(h){if(h=h||At,!j(e,h))throw We.create("no-app",{appName:h});return e[h]}o.App=t;function a(h,d){if(d===void 0&&(d={}),typeof d!="object"||d===null){var p=d;d={name:p}}var g=d;g.name===void 0&&(g.name=At);var _=g.name;if(typeof _!="string"||!_)throw We.create("bad-app-name",{appName:String(_)});if(j(e,_))throw We.create("duplicate-app",{appName:_});var y=new t(h,g,r);return e[_]=y,y}function s(){return Object.keys(e).map(function(h){return e[h]})}function u(h){var d=h.name;if(n.has(d))return Ue.debug("There were multiple attempts to register component "+d+"."),h.type==="PUBLIC"?r[d]:null;if(n.set(d,h),h.type==="PUBLIC"){var p=function(I){if(I===void 0&&(I=o()),typeof I[d]!="function")throw We.create("invalid-app-argument",{appName:d});return I[d]()};h.serviceProps!==void 0&&st(p,h.serviceProps),r[d]=p,t.prototype[d]=function(){for(var I=[],x=0;x<arguments.length;x++)I[x]=arguments[x];var Me=this._getService.bind(this,d);return Me.apply(this,h.multipleInstances?I:[])}}for(var g=0,_=Object.keys(e);g<_.length;g++){var y=_[g];e[y]._addComponent(h)}return h.type==="PUBLIC"?r[d]:null}function l(h,d,p){var g,_=(g=qa[h])!==null&&g!==void 0?g:h;p&&(_+="-"+p);var y=_.match(/\s|\//),I=d.match(/\s|\//);if(y||I){var x=['Unable to register library "'+_+'" with version "'+d+'":'];y&&x.push('library name "'+_+'" contains illegal characters (whitespace or "/")'),y&&I&&x.push("and"),I&&x.push('version name "'+d+'" contains illegal characters (whitespace or "/")'),Ue.warn(x.join(" "));return}u(new pt(_+"-version",function(){return{library:_,version:d}},"VERSION"))}function f(h,d){if(h!==null&&typeof h!="function")throw We.create("invalid-log-argument");Da(h,d)}function c(h,d){if(d==="serverAuth")return null;var p=d;return p}return r}/**
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
 */function Oi(){var t=Xa(Rt);t.INTERNAL=ve(ve({},t.INTERNAL),{createFirebaseNamespace:Oi,extendNamespace:e,createSubscribe:Sa,ErrorFactory:Qn,deepExtend:st});function e(n){st(t,n)}return t}var jn=Oi();/**
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
 */var Ja=function(){function t(e){this.container=e}return t.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map(function(n){if(Za(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},t}();function Za(t){var e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}/**
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
 */function es(t,e){t.INTERNAL.registerComponent(new pt("platform-logger",function(n){return new Ja(n)},"PRIVATE")),t.registerVersion(Pi,Ma,e),t.registerVersion("fire-js","")}/**
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
 */if(pa()&&self.firebase!==void 0){Ue.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var Pr=self.firebase.SDK_VERSION;Pr&&Pr.indexOf("LITE")>=0&&Ue.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var ts=jn.initializeApp;jn.initializeApp=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return da()&&Ue.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),ts.apply(void 0,t)};var vt=jn;es(vt);var ns="firebase",ki="8.10.1";/**
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
 */vt.registerVersion(ns,ki,"app");vt.SDK_VERSION=ki;var rs="@firebase/database",is="0.11.0";/**
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
 */var xi="";function Di(t){xi=t}/**
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
 */var os=function(){function t(e){this.domStorage_=e,this.prefix_="firebase:"}return t.prototype.set=function(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(n))},t.prototype.get=function(e){var n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ut(n)},t.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},t.prototype.prefixedName_=function(e){return this.prefix_+e},t.prototype.toString=function(){return this.domStorage_.toString()},t}();/**
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
 */var as=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n},t.prototype.get=function(e){return j(this.cache_,e)?this.cache_[e]:null},t.prototype.remove=function(e){delete this.cache_[e]},t}();/**
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
 */var Li=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){var e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new os(e)}}catch{}return new as},Te=Li("localStorage"),bn=Li("sessionStorage");/**
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
 */var Be=new Ai("@firebase/database"),Mi=function(){var t=1;return function(){return t++}}(),Fi=function(t){var e=Ra(t),n=new wa;n.update(e);var r=n.digest();return Hn.encodeByteArray(r)},_t=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n="",r=0;r<t.length;r++){var i=t[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=_t.apply(null,i):typeof i=="object"?n+=D(i):n+=i,n+=" "}return n},Ne=null,Or=!0,Wi=function(t,e){v(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Be.logLevel=R.VERBOSE,Ne=Be.log.bind(Be),e&&bn.set("logging_enabled",!0)):typeof t=="function"?Ne=t:(Ne=null,bn.remove("logging_enabled"))},F=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(Or===!0&&(Or=!1,Ne===null&&bn.get("logging_enabled")===!0&&Wi(!0)),Ne){var n=_t.apply(null,t);Ne(n)}},gt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];F.apply(void 0,_e([t],U(e)))}},wn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE INTERNAL ERROR: "+_t.apply(void 0,_e([],U(t)));Be.error(n)},ie=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE FATAL ERROR: "+_t.apply(void 0,_e([],U(t)));throw Be.error(n),new Error(n)},W=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE WARNING: "+_t.apply(void 0,_e([],U(t)));Be.warn(n)},ss=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&W("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gt=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},us=function(t){if(document.readyState==="complete")t();else{var e=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fe="[MIN_NAME]",oe="[MAX_NAME]",xe=function(t,e){if(t===e)return 0;if(t===fe||e===oe)return-1;if(e===fe||t===oe)return 1;var n=Pt(t),r=Pt(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1},ls=function(t,e){return t===e?0:t<e?-1:1},Xe=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+D(e))},zn=function(t){if(typeof t!="object"||t===null)return D(t);var e=[];for(var n in t)e.push(n);e.sort();for(var r="{",i=0;i<e.length;i++)i!==0&&(r+=","),r+=D(e[i]),r+=":",r+=zn(t[e[i]]);return r+="}",r},Bi=function(t,e){var n=t.length;if(n<=e)return[t];for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function L(t,e){for(var n in t)t.hasOwnProperty(n)&&e(n,t[n])}var Ui=function(t){v(!Gt(t),"Invalid JSON number");var e=11,n=52,r=(1<<e-1)-1,i,o,a,s,u;t===0?(o=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=s+r,a=Math.round(t*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));var l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();var f=l.join(""),c="";for(u=0;u<64;u+=8){var h=parseInt(f.substr(u,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},fs=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cs=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hs(t,e){var n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");var r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}var ds=new RegExp("^-?(0*)\\d{1,10}$"),Vi=-2147483648,Yn=2147483647,Pt=function(t){if(ds.test(t)){var e=Number(t);if(e>=Vi&&e<=Yn)return e}return null},Ye=function(t){try{t()}catch(e){setTimeout(function(){var n=e.stack||"";throw W("Exception was thrown by user callback.",n),e},Math.floor(0))}},ps=function(){var t=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},tt=function(t,e){var n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */var vs=function(){function t(e,n){var r=this;this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return t.prototype.getToken=function(e){var n=this;return this.appCheck?this.appCheck.getToken(e):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){W('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},t}();/**
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
 */var _s=function(){function t(e,n,r){var i=this;this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return t.prototype.getToken=function(e){var n=this;return this.auth_?this.auth_.getToken(e).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(e)})},t.prototype.removeTokenChangeListener=function(e){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',W(e)},t}(),nt=function(){function t(e){this.accessToken=e}return t.prototype.getToken=function(e){return Promise.resolve({accessToken:this.accessToken})},t.prototype.addTokenChangeListener=function(e){e(this.accessToken)},t.prototype.removeTokenChangeListener=function(e){},t.prototype.notifyForInvalidToken=function(){},t.OWNER="owner",t}();/**
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
 */var $n="5",Hi="v",Qi="s",Gi="r",ji="f",zi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yi="ls",gs="p",Sn="ac",$i="websocket",qi="long_polling";/**
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
 */var qn=function(){function t(e,n,r,i,o,a,s){o===void 0&&(o=!1),a===void 0&&(a=""),s===void 0&&(s=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Te.get("host:"+e)||this._host}return t.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},t.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(t.prototype,"host",{get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Te.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},t.prototype.toURLString=function(){var e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+e+this.host+"/"+n},t}();function ys(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ki(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");var r;if(e===$i)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qi)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ys(t)&&(n.ns=t.namespace);var i=[];return L(n,function(o,a){i.push(o+"="+a)}),r+i.join("&")}/**
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
 */var ms=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(e,n){n===void 0&&(n=1),j(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n},t.prototype.get=function(){return bi(this.counters_)},t}();/**
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
 */var dn={},pn={};function Kn(t){var e=t.toString();return dn[e]||(dn[e]=new ms),dn[e]}function Es(t,e){var n=t.toString();return pn[n]||(pn[n]=e()),pn[n]}/**
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
 */var Cs=function(){function t(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(e,n){var r=this;this.pendingResponses[e]=n;for(var i=function(){var s=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var u=function(f){s[f]&&Ye(function(){r.onMessage_(s[f])})},l=0;l<s.length;++l)u(l);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var a=i();if(a==="break")break}},t}();/**
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
 */var kr="start",bs="close",ws="pLPCommand",Ss="pRTLPCB",Xi="id",Ji="pw",Zi="ser",Is="cb",Ts="seg",Rs="ts",Ns="d",As="dframe",eo=1870,to=30,Ps=eo-to,Os=25e3,ks=3e4,Xn=function(){function t(e,n,r,i,o,a,s){var u=this;this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=a,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gt(e),this.stats_=Kn(n),this.urlFn=function(l){return u.appCheckToken&&(l[Sn]=u.appCheckToken),Ki(n,qi,l)}}return t.prototype.open=function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cs(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(ks)),us(function(){if(!r.isClosed_){r.scriptTagHolder=new xs(function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=U(a,5),l=u[0],f=u[1],c=u[2];if(u[3],u[4],r.incrementIncomingBytes_(a),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,l===kr)r.id=f,r.password=c;else if(l===bs)f?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(f,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+l)},function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=U(a,2),l=u[0],f=u[1];r.incrementIncomingBytes_(a),r.myPacketOrderer.handleResponse(l,f)},function(){r.onClosed_()},r.urlFn);var i={};i[kr]="t",i[Zi]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[Is]=r.scriptTagHolder.uniqueCallbackIdentifier),i[Hi]=$n,r.transportSessionId&&(i[Qi]=r.transportSessionId),r.lastSessionId&&(i[Yi]=r.lastSessionId),r.applicationId&&(i[gs]=r.applicationId),r.appCheckToken&&(i[Sn]=r.appCheckToken),typeof location<"u"&&location.hostname&&zi.test(location.hostname)&&(i[Gi]=ji);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_?!0:!t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fs()&&!cs()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(e){var n=D(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=Ci(n),i=Bi(r,Ps),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(e,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[As]="t",r[Xi]=e,r[Ji]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},t.prototype.incrementIncomingBytes_=function(e){var n=D(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},t}(),xs=function(){function t(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mi(),window[ws+this.uniqueCallbackIdentifier]=e,window[Ss+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(u){F("frame writing exception"),u.stack&&F(u.stack),F(u)}}}return t.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{var n=e.contentWindow.document;n||F("No IE domain setting required")}catch{var r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},t.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){e.myIFrame!==null&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},t.prototype.startLongPoll=function(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););},t.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[Xi]=this.myID,e[Ji]=this.myPW,e[Zi]=this.currentSerial;for(var n=this.urlFn(e),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+to+r.length<=eo){var a=this.pendingSegs.shift();r=r+"&"+Ts+i+"="+a.seg+"&"+Rs+i+"="+a.ts+"&"+Ns+i+"="+a.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},t.prototype.enqueueSegment=function(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()},t.prototype.addLongPollTag_=function(e,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(Os)),a=function(){clearTimeout(o),i()};this.addTag(e,a)},t.prototype.addTag=function(e,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){F("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},t}();/**
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
 */var Ds=16384,Ls=45e3,Ot=null;typeof MozWebSocket<"u"?Ot=MozWebSocket:typeof WebSocket<"u"&&(Ot=WebSocket);var Ie=function(){function t(e,n,r,i,o,a,s){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gt(this.connId),this.stats_=Kn(n),this.connURL=t.connectionURL_(n,a,s,i),this.nodeAdmin=n.nodeAdmin}return t.connectionURL_=function(e,n,r,i){var o={};return o[Hi]=$n,typeof location<"u"&&location.hostname&&zi.test(location.hostname)&&(o[Gi]=ji),n&&(o[Qi]=n),r&&(o[Yi]=r),i&&(o[Sn]=i),Ki(e,$i,o)},t.prototype.open=function(e,n){var r=this;this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Te.set("previous_websocket_failure",!0);try{var i,o,a,s;if(!Si()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ot(this.connURL,[],o)}}catch(l){this.log_("Error instantiating WebSocket.");var u=l.message||l.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(l){r.handleIncomingFrame(l)},this.mySock.onerror=function(l){r.log_("WebSocket error.  Closing connection.");var f=l.message||l.data;f&&r.log_(f),r.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ot!==null&&!t.forceDisallow_},t.previouslyFailed=function(){return Te.isInMemoryStorage||Te.get("previous_websocket_failure")===!0},t.prototype.markConnectionHealthy=function(){Te.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=ut(n);this.onMessage(r)}},t.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},t.prototype.extractFrameCount_=function(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){var n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e},t.prototype.handleIncomingFrame=function(e){if(this.mySock!==null){var n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},t.prototype.send=function(e){this.resetKeepAlive();var n=D(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=Bi(n,Ds);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(Ls))},t.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}();/**
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
 */var Ms=function(){function t(e){this.initTransports_(e)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Xn,Ie]},enumerable:!1,configurable:!0}),t.prototype.initTransports_=function(e){var n,r,i=Ie&&Ie.isAvailable(),o=i&&!Ie.previouslyFailed();if(e.webSocketOnly&&(i||W("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Ie];else{var a=this.transports_=[];try{for(var s=G(t.ALL_TRANSPORTS),u=s.next();!u.done;u=s.next()){var l=u.value;l&&l.isAvailable()&&a.push(l)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}();/**
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
 */var Fs=6e4,Ws=5e3,Bs=10*1024,Us=100*1024,vn="t",xr="d",Vs="s",Dr="r",Hs="e",Lr="o",Mr="a",Fr="n",Wr="p",Qs="h",no=function(){function t(e,n,r,i,o,a,s,u,l,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=a,this.onReady_=s,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gt("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var e=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=tt(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>Us?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>Bs?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(o)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(e){var n=this;return function(r){e===n.conn_?n.onConnectionLost_(r):e===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},t.prototype.connReceiver_=function(e){var n=this;return function(r){n.state_!==2&&(e===n.rx_?n.onPrimaryMessageReceived_(r):e===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},t.prototype.sendRequest=function(e){var n={t:"d",d:e};this.sendData_(n)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(e){if(vn in e){var n=e[vn];n===Mr?this.upgradeIfSecondaryHealthy_():n===Dr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(e){var n=Xe("t",e),r=Xe("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wr,d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(e){var n=Xe("t",e),r=Xe("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},t.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(e){var n=Xe(vn,e);if(xr in e){var r=e[xr];if(n===Qs)this.onHandshake_(r);else if(n===Fr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Vs?this.onConnectionShutdown_(r):n===Dr?this.onReset_(r):n===Hs?wn("Server Error: "+r):n===Lr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wn("Unknown control packet command: "+n)}},t.prototype.onHandshake_=function(e){var n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$n!==r&&W("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},t.prototype.startUpgrade_=function(e){var n=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),tt(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(Fs))},t.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(e,n){var r=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tt(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(Ws))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wr,d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()},t.prototype.onConnectionLost_=function(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Te.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},t.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)},t.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}();/**
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
 */var ro=function(){function t(){}return t.prototype.put=function(e,n,r,i){},t.prototype.merge=function(e,n,r,i){},t.prototype.refreshAuthToken=function(e){},t.prototype.refreshAppCheckToken=function(e){},t.prototype.onDisconnectPut=function(e,n,r){},t.prototype.onDisconnectMerge=function(e,n,r){},t.prototype.onDisconnectCancel=function(e,n){},t.prototype.reportStats=function(e){},t}();/**
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
 */var io=function(){function t(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[e]))for(var i=_e([],U(this.listeners_[e])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},t.prototype.on=function(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});var i=this.getInitialEvent(e);i&&n.apply(r,i)},t.prototype.off=function(e,n,r){this.validateEventType_(e);for(var i=this.listeners_[e]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},t.prototype.validateEventType_=function(e){v(this.allowedEvents_.find(function(n){return n===e}),"Unknown event: "+e)},t}();/**
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
 */var Br=function(t){k(e,t);function e(){var n=t.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wi()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return v(n==="online","Unknown event type: "+n),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(io);/**
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
 */var Ur=32,Vr=768,T=function(){function t(e,n){if(n===void 0){this.pieces_=e.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}return t.prototype.toString=function(){for(var e="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"},t}();function S(){return new T("")}function C(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ge(t){return t.pieces_.length-t.pieceNum_}function N(t){var e=t.pieceNum_;return e<t.pieces_.length&&e++,new T(t.pieces_,e)}function Jn(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gs(t){for(var e="",n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lt(t,e){return e===void 0&&(e=0),t.pieces_.slice(t.pieceNum_+e)}function oo(t){if(t.pieceNum_>=t.pieces_.length)return null;for(var e=[],n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new T(e,0)}function P(t,e){for(var n=[],r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof T)for(var r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else for(var i=e.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new T(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function V(t,e){var n=C(t),r=C(e);if(n===null)return e;if(n===r)return V(N(t),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function js(t,e){for(var n=lt(t,0),r=lt(e,0),i=0;i<n.length&&i<r.length;i++){var o=xe(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Zn(t,e){if(ge(t)!==ge(e))return!1;for(var n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $(t,e){var n=t.pieceNum_,r=e.pieceNum_;if(ge(t)>ge(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}var zs=function(){function t(e,n){this.errorPrefix_=n,this.parts_=lt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=Qt(this.parts_[r]);ao(this)}return t}();function Ys(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qt(e),ao(t)}function $s(t){var e=t.parts_.pop();t.byteLength_-=Qt(e),t.parts_.length>0&&(t.byteLength_-=1)}function ao(t){if(t.byteLength_>Vr)throw new Error(t.errorPrefix_+"has a key path longer than "+Vr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ur)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ur+") or object contains a cycle "+Se(t))}function Se(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */var qs=function(t){k(e,t);function e(){var n=t.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return v(n==="visible","Unknown event type: "+n),[this.visible_]},e}(io);/**
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
 */var Je=1e3,Ks=60*5*1e3,Xs=3*1e3,Hr=30*1e3,Js=1.3,Zs=3e4,eu="server_kill",Qr=3,Ae=function(t){k(e,t);function e(n,r,i,o,a,s,u,l){var f=t.call(this)||this;if(f.repoInfo_=n,f.applicationId_=r,f.onDataUpdate_=i,f.onConnectStatus_=o,f.onServerInfoUpdate_=a,f.authTokenProvider_=s,f.appCheckTokenProvider_=u,f.authOverride_=l,f.id=e.nextPersistentConnectionId_++,f.log_=gt("p:"+f.id+":"),f.interruptReasons_={},f.listens=new Map,f.outstandingPuts_=[],f.outstandingGets_=[],f.outstandingPutCount_=0,f.outstandingGetCount_=0,f.onDisconnectRequestQueue_=[],f.connected_=!1,f.reconnectDelay_=Je,f.maxReconnectDelay_=Ks,f.securityDebugCallback_=null,f.lastSessionId=null,f.establishConnectionTimer_=null,f.visible_=!1,f.requestCBHash_={},f.requestNumber_=0,f.realtime_=null,f.authToken_=null,f.appCheckToken_=null,f.forceTokenRefresh_=!1,f.invalidAuthTokenCount_=0,f.invalidAppCheckTokenCount_=0,f.firstConnection_=!0,f.lastConnectionAttemptTime_=null,f.lastConnectionEstablishedTime_=null,l&&!Si())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return qs.getInstance().on("visible",f.onVisible_,f),n.host.indexOf("fblocal")===-1&&Br.getInstance().on("online",f.onOnline_,f),f}return e.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,a={r:o,a:n,b:r};this.log_(D(a)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[o]=i)},e.prototype.get=function(n){var r=this;this.initConnection_();var i=new H,o={p:n._path.toString(),q:n._queryObject},a={action:"g",request:o,onComplete:function(u){var l=u.d;u.s==="ok"?(r.onDataUpdate_(o.p,l,!1,null),i.resolve(l)):i.reject(l)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;var s=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var u=r.outstandingGets_[s];u===void 0||a!==u||(delete r.outstandingGets_[s],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+s+" timed out on connection"),i.reject(new Error("Client is offline.")))},Xs),this.connected_&&this.sendGet_(s),i.promise},e.prototype.listen=function(n,r,i,o){this.initConnection_();var a=n._queryIdentifier,s=n._path.toString();this.log_("Listen called for "+s+" "+a),this.listens.has(s)||this.listens.set(s,new Map),v(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(s).has(a),"listen() called twice for same path/queryId.");var u={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(s).set(a,u),this.connected_&&this.sendListen_(u)},e.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},e.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),a=i._queryIdentifier;this.log_("Listen on "+o+" for "+a);var s={p:o},u="q";n.tag&&(s.q=i._queryObject,s.t=n.tag),s.h=n.hashFn(),this.sendRequest(u,s,function(l){var f=l.d,c=l.s;e.warnOnListenWarnings_(f,i);var h=r.listens.get(o)&&r.listens.get(o).get(a);h===n&&(r.log_("listen response",l),c!=="ok"&&r.removeListen_(o,a),n.onComplete&&n.onComplete(c,f))})},e.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&j(n,"w")){var i=Pe(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',a=r._path.toString();W("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(a+" to your security rules for better performance."))}}},e.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||Ca(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hr)},e.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},e.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=Ea(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(a){var s=a.s,u=a.d||"error";n.authToken_===r&&(s==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(s,u))})}},e.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},e.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),v(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var a=this.removeListen_(i,o);a&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},e.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var a={p:n},s="n";o&&(a.q=i,a.t=o),this.sendRequest(s,a)},e.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},e.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},e.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},e.prototype.sendOnDisconnect_=function(n,r,i,o){var a={p:r,d:i};this.log_("onDisconnect "+n,a),this.sendRequest(n,a,function(s){o&&setTimeout(function(){o(s.s,s.d)},Math.floor(0))})},e.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},e.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},e.prototype.putInternal=function(n,r,i,o,a){this.initConnection_();var s={p:r,d:i};a!==void 0&&(s.h=a),this.outstandingPuts_.push({action:n,request:s,onComplete:o}),this.outstandingPutCount_++;var u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+r)},e.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,a=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(s){r.log_(i+" response",s),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),a&&a(s.s,s.d)})},e.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var a=o.s;if(a!=="ok"){var s=o.d;r.log_("reportStats","Error sending stats: "+s)}})}},e.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+D(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},e.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):wn("Unrecognized action received from server: "+D(n)+`
Are you using the latest client?`)},e.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(n){var r=this;v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},e.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},e.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},e.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>Zs&&(this.reconnectDelay_=Je),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Js)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){return gi(this,void 0,void 0,function(){var n,r,i,o,a,s,u,l,f,c,h,d,p,g,_=this;return yi(this,function(y){switch(y.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+e.nextConnectionId_++,a=this.lastSessionId,s=!1,u=null,l=function(){u?u.close():(s=!0,i())},f=function(I){v(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(I)},this.realtime_={close:l,sendRequest:f},c=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)])];case 2:return h=U.apply(void 0,[y.sent(),2]),d=h[0],p=h[1],s?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,u=new no(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(I){W(I+" ("+_.repoInfo_.toString()+")"),_.interrupt(eu)},a)),[3,4];case 3:return g=y.sent(),this.log_("Failed to get token: "+g),s||(this.repoInfo_.nodeAdmin&&W(g),l()),[3,4];case 4:return[2]}})})},e.prototype.interrupt=function(n){F("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(n){F("Resuming connection for reason: "+n),delete this.interruptReasons_[n],Cn(this.interruptReasons_)&&(this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},e.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(a){return zn(a)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},e.prototype.removeListen_=function(n,r){var i=new T(n).toString(),o;if(this.listens.has(i)){var a=this.listens.get(i);o=a.get(r),a.delete(r),a.size===0&&this.listens.delete(i)}else o=void 0;return o},e.prototype.onAuthRevoked_=function(n,r){F("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qr&&(this.reconnectDelay_=Hr,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onAppCheckRevoked_=function(n,r){F("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qr&&this.appCheckTokenProvider_.notifyForInvalidToken())},e.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},e.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var a=G(this.listens.values()),s=a.next();!s.done;s=a.next()){var u=s.value;try{for(var l=(i=void 0,G(u.values())),f=l.next();!f.done;f=l.next()){var c=f.value;this.sendListen_(c)}}catch(p){i={error:p}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}}}catch(p){n={error:p}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},e.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+xi.replace(/\./g,"-")]=1,wi()?n["framework.cordova"]=1:va()&&(n["framework.reactnative"]=1),this.reportStats(n)},e.prototype.shouldReconnect_=function(){var n=Br.getInstance().currentlyOnline();return Cn(this.interruptReasons_)&&n},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(ro);/**
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
 */var w=function(){function t(e,n){this.name=e,this.node=n}return t.Wrap=function(e,n){return new t(e,n)},t}();/**
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
 */var jt=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(e,n){var r=new w(fe,e),i=new w(fe,n);return this.compare(r,i)!==0},t.prototype.minPost=function(){return w.MIN},t}();/**
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
 */var It,so=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return It},set:function(n){It=n},enumerable:!1,configurable:!0}),e.prototype.compare=function(n,r){return xe(n.name,r.name)},e.prototype.isDefinedOn=function(n){throw ze("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(n,r){return!1},e.prototype.minPost=function(){return w.MIN},e.prototype.maxPost=function(){return new w(oe,It)},e.prototype.makePost=function(n,r){return v(typeof n=="string","KeyIndex indexValue must always be a string."),new w(n,It)},e.prototype.toString=function(){return".key"},e}(jt),re=new so;/**
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
 */var Tt=function(){function t(e,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var a=1;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}return t.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},t}(),ee=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:t.RED,this.left=i!=null?i:ue.EMPTY_NODE,this.right=o!=null?o:ue.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(e,n,r){var i=this,o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()},t.prototype.removeMin_=function(){if(this.left.isEmpty())return ue.EMPTY_NODE;var e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()},t.prototype.remove=function(e,n){var r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()},t.prototype.isRed_=function(){return this.color},t.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},t.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e},t.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e},t.prototype.rotateLeft_=function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},t.prototype.rotateRight_=function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},t.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)},t.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},t.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),tu=function(){function t(){}return t.prototype.copy=function(e,n,r,i,o){return this},t.prototype.insert=function(e,n,r){return new ee(e,n,null)},t.prototype.remove=function(e,n){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(e){return!1},t.prototype.reverseTraversal=function(e){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),ue=function(){function t(e,n){n===void 0&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ee.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))},t.prototype.get=function(e){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},t.prototype.getPredecessorKey=function(e){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},t.prototype.getIterator=function(e){return new Tt(this.root_,null,this.comparator_,!1,e)},t.prototype.getIteratorFrom=function(e,n){return new Tt(this.root_,e,this.comparator_,!1,n)},t.prototype.getReverseIteratorFrom=function(e,n){return new Tt(this.root_,e,this.comparator_,!0,n)},t.prototype.getReverseIterator=function(e){return new Tt(this.root_,null,this.comparator_,!0,e)},t.EMPTY_NODE=new tu,t}();/**
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
 */function nu(t,e){return xe(t.name,e.name)}function er(t,e){return xe(t,e)}/**
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
 */var In;function ru(t){In=t}var uo=function(t){return typeof t=="number"?"number:"+Ui(t):"string:"+t},lo=function(t){if(t.isLeafNode()){var e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&j(e,".sv"),"Priority must be a string or number.")}else v(t===In||t.isEmpty(),"priority of unexpected type.");v(t===In||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */var Gr,Ve=function(){function t(e,n){n===void 0&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lo(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return Gr},set:function(e){Gr=e},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return e===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return b(e)?this:C(e)===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(e,n){return null},t.prototype.updateImmediateChild=function(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=C(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(v(r!==".priority"||ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(e,n){return!1},t.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+uo(this.priorityNode_.val())+":");var n=typeof this.value_;e+=n+":",n==="number"?e+=Ui(this.value_):e+=this.value_,this.lazyHash_=Fi(e)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=typeof e.value_,r=typeof this.value_,i=t.VALUE_TYPE_ORDER.indexOf(n),o=t.VALUE_TYPE_ORDER.indexOf(r);return v(i>=0,"Unknown leaf type: "+n),v(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}();/**
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
 */var fo,co;function iu(t){fo=t}function ou(t){co=t}var au=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),a=i.compareTo(o);return a===0?xe(n.name,r.name):a},e.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},e.prototype.minPost=function(){return w.MIN},e.prototype.maxPost=function(){return new w(oe,new Ve("[PRIORITY-POST]",co))},e.prototype.makePost=function(n,r){var i=fo(n);return new w(r,new Ve("[PRIORITY-POST]",i))},e.prototype.toString=function(){return".priority"},e}(jt),A=new au;/**
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
 */var su=Math.log(2),uu=function(){function t(e){var n=function(o){return parseInt(Math.log(o)/su,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(e+1),this.current_=this.count-1;var i=r(this.count);this.bits_=e+1&i}return t.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},t}(),kt=function(t,e,n,r){t.sort(e);var i=function(u,l){var f=l-u,c,h;if(f===0)return null;if(f===1)return c=t[u],h=n?n(c):c,new ee(h,c.node,ee.BLACK,null,null);var d=parseInt(f/2,10)+u,p=i(u,d),g=i(d+1,l);return c=t[d],h=n?n(c):c,new ee(h,c.node,ee.BLACK,p,g)},o=function(u){for(var l=null,f=null,c=t.length,h=function(y,I){var x=c-y,Me=c;c-=y;var fn=i(x+1,Me),cn=t[x],sa=n?n(cn):cn;d(new ee(sa,cn.node,I,null,fn))},d=function(y){l?(l.left=y,l=y):(f=y,l=y)},p=0;p<u.count;++p){var g=u.nextBitIsOne(),_=Math.pow(2,u.count-(p+1));g?h(_,ee.BLACK):(h(_,ee.BLACK),h(_,ee.RED))}return f},a=new uu(t.length),s=o(a);return new ue(r||e,s)};/**
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
 */var _n,Fe={},xt=function(){function t(e,n){this.indexes_=e,this.indexSet_=n}return Object.defineProperty(t,"Default",{get:function(){return v(Fe&&A,"ChildrenNode.ts has not been loaded"),_n=_n||new t({".priority":Fe},{".priority":A}),_n},enumerable:!1,configurable:!0}),t.prototype.get=function(e){var n=Pe(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ue?n:null},t.prototype.hasIndex=function(e){return j(this.indexSet_,e.toString())},t.prototype.addIndex=function(e,n){v(e!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(w.Wrap),a=o.getNext();a;)i=i||e.isDefinedOn(a.node),r.push(a),a=o.getNext();var s;i?s=kt(r,e.getCompare()):s=Fe;var u=e.toString(),l=ve({},this.indexSet_);l[u]=e;var f=ve({},this.indexes_);return f[u]=s,new t(f,l)},t.prototype.addToIndexes=function(e,n){var r=this,i=Nt(this.indexes_,function(o,a){var s=Pe(r.indexSet_,a);if(v(s,"Missing index implementation for "+a),o===Fe)if(s.isDefinedOn(e.node)){for(var u=[],l=n.getIterator(w.Wrap),f=l.getNext();f;)f.name!==e.name&&u.push(f),f=l.getNext();return u.push(e),kt(u,s.getCompare())}else return Fe;else{var c=n.get(e.name),h=o;return c&&(h=h.remove(new w(e.name,c))),h.insert(e,e.node)}});return new t(i,this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){var r=Nt(this.indexes_,function(i){if(i===Fe)return i;var o=n.get(e.name);return o?i.remove(new w(e.name,o)):i});return new t(r,this.indexSet_)},t}();/**
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
 */var Ze,E=function(){function t(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lo(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return Ze||(Ze=new t(new ue(er),null,xt.Default))},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||Ze},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(e){if(e===".priority")return this.getPriority();var n=this.children_.get(e);return n===null?Ze:n},t.prototype.getChild=function(e){var n=C(e);return n===null?this:this.getImmediateChild(n).getChild(N(e))},t.prototype.hasChild=function(e){return this.children_.get(e)!==null},t.prototype.updateImmediateChild=function(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);var r=new w(e,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));var a=i.isEmpty()?Ze:this.priorityNode_;return new t(i,a,o)},t.prototype.updateChild=function(e,n){var r=C(e);if(r===null)return n;v(C(e)!==".priority"||ge(e)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(N(e),n);return this.updateImmediateChild(r,i)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(A,function(u,l){n[u]=l.val(e),r++,o&&t.INTEGER_REGEXP_.test(u)?i=Math.max(i,Number(u)):o=!1}),!e&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.getPriority().isEmpty()||(e+="priority:"+uo(this.getPriority().val())+":"),this.forEachChild(A,function(n,r){var i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fi(e)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(e,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new w(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)},t.prototype.getFirstChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},t.prototype.getFirstChild=function(e){var n=this.getFirstChildName(e);return n?new w(n,this.children_.get(n)):null},t.prototype.getLastChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},t.prototype.getLastChild=function(e){var n=this.getLastChildName(e);return n?new w(n,this.children_.get(n)):null},t.prototype.forEachChild=function(e,n){var r=this.resolveIndex_(e);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},t.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},t.prototype.getIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,function(a){return a});for(var i=this.children_.getIteratorFrom(e.name,w.Wrap),o=i.peek();o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i},t.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},t.prototype.getReverseIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,function(a){return a});for(var i=this.children_.getReverseIteratorFrom(e.name,w.Wrap),o=i.peek();o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i},t.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yt?-1:0},t.prototype.withIndex=function(e){if(e===re||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(e){return e===re||this.indexMap_.hasIndex(e)},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(A),i=n.getIterator(A),o=r.getNext(),a=i.getNext();o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=r.getNext(),a=i.getNext()}return o===null&&a===null}else return!1;else return!1},t.prototype.resolveIndex_=function(e){return e===re?null:this.indexMap_.get(e.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),lu=function(t){k(e,t);function e(){return t.call(this,new ue(er),E.EMPTY_NODE,xt.Default)||this}return e.prototype.compareTo=function(n){return n===this?0:1},e.prototype.equals=function(n){return n===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(n){return E.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(E),yt=new lu;Object.defineProperties(w,{MIN:{value:new w(fe,E.EMPTY_NODE)},MAX:{value:new w(oe,yt)}});so.__EMPTY_NODE=E.EMPTY_NODE;Ve.__childrenNodeConstructor=E;ru(yt);ou(yt);/**
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
 */var fu=!0;function O(t,e){if(e===void 0&&(e=null),t===null)return E.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){var n=t;return new Ve(n,O(e))}if(!(t instanceof Array)&&fu){var r=[],i=!1,o=t;if(L(o,function(l,f){if(l.substring(0,1)!=="."){var c=O(f);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),r.push(new w(l,c)))}}),r.length===0)return E.EMPTY_NODE;var a=kt(r,nu,function(l){return l.name},er);if(i){var s=kt(r,A.getCompare());return new E(a,O(e),new xt({".priority":s},{".priority":A}))}else return new E(a,O(e),xt.Default)}else{var u=E.EMPTY_NODE;return L(t,function(l,f){if(j(t,l)&&l.substring(0,1)!=="."){var c=O(f);(c.isLeafNode()||!c.isEmpty())&&(u=u.updateImmediateChild(l,c))}}),u.updatePriority(O(e))}}iu(O);/**
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
 */var tr=function(t){k(e,t);function e(n){var r=t.call(this)||this;return r.indexPath_=n,v(!b(n)&&C(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return e.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),a=i.compareTo(o);return a===0?xe(n.name,r.name):a},e.prototype.makePost=function(n,r){var i=O(n),o=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new w(r,o)},e.prototype.maxPost=function(){var n=E.EMPTY_NODE.updateChild(this.indexPath_,yt);return new w(oe,n)},e.prototype.toString=function(){return lt(this.indexPath_,0).join("/")},e}(jt);/**
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
 */var cu=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?xe(n.name,r.name):i},e.prototype.isDefinedOn=function(n){return!0},e.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},e.prototype.minPost=function(){return w.MIN},e.prototype.maxPost=function(){return w.MAX},e.prototype.makePost=function(n,r){var i=O(n);return new w(r,i)},e.prototype.toString=function(){return".value"},e}(jt),nr=new cu;/**
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
 */var He="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tn="-",ho="z",po=786,hu=function(){var t=0,e=[];return function(n){var r=n===t;t=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=He.charAt(n%64),n=Math.floor(n/64);v(n===0,"Cannot push at time == 0");var a=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=He.charAt(e[i]);return v(a.length===20,"nextPushId: Length should be 20."),a}}(),jr=function(t){if(t===""+Yn)return Tn;var e=Pt(t);if(e!=null)return""+(e+1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);if(n.length<po)return n.push(Tn),n.join("");for(var i=n.length-1;i>=0&&n[i]===ho;)i--;if(i===-1)return oe;var o=n[i],a=He.charAt(He.indexOf(o)+1);return n[i]=a,n.slice(0,i+1).join("")},zr=function(t){if(t===""+Vi)return fe;var e=Pt(t);if(e!=null)return""+(e-1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===Tn?n.length===1?""+Yn:(delete n[n.length-1],n.join("")):(n[n.length-1]=He.charAt(He.indexOf(n[n.length-1])-1),n.join("")+ho.repeat(po-n.length))};/**
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
 */function vo(t){return{type:"value",snapshotNode:t}}function Qe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ft(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ct(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function du(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */var rr=function(){function t(e){this.index_=e}return t.prototype.updateChild=function(e,n,r,i,o,a){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(n);return s.getChild(i).equals(r.getChild(i))&&s.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(ft(n,s)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?a.trackChildChange(Qe(n,r)):a.trackChildChange(ct(n,r,s))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)},t.prototype.updateFullNode=function(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(A,function(i,o){n.hasChild(i)||r.trackChildChange(ft(i,o))}),n.isLeafNode()||n.forEachChild(A,function(i,o){if(e.hasChild(i)){var a=e.getImmediateChild(i);a.equals(o)||r.trackChildChange(ct(i,o,a))}else r.trackChildChange(Qe(i,o))})),n.withIndex(this.index_)},t.prototype.updatePriority=function(e,n){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(n)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}();/**
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
 */var _o=function(){function t(e){this.indexedFilter_=new rr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},t.prototype.updateChild=function(e,n,r,i,o,a){return this.matches(new w(n,r))||(r=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,a)},t.prototype.updateFullNode=function(e,n,r){n.isLeafNode()&&(n=E.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(E.EMPTY_NODE);var o=this;return n.forEachChild(A,function(a,s){o.matches(new w(a,s))||(i=i.updateImmediateChild(a,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(e){if(e.hasStart()){var n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()},t.getEndPost_=function(e){if(e.hasEnd()){var n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()},t}();/**
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
 */var pu=function(){function t(e){this.rangedFilter_=new _o(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}return t.prototype.updateChild=function(e,n,r,i,o,a){return this.rangedFilter_.matches(new w(n,r))||(r=E.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,a):this.fullLimitUpdateChild_(e,n,r,o,a)},t.prototype.updateFullNode=function(e,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=E.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;o.hasNext()&&a<this.limit_;){var s=o.getNext(),u=void 0;if(this.reverse_?u=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:u=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,u)i=i.updateImmediateChild(s.name,s.node),a++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(E.EMPTY_NODE);var l=void 0,f=void 0,c=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),l=this.rangedFilter_.getEndPost(),f=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();c=function(_,y){return h(y,_)}}else o=i.getIterator(this.index_),l=this.rangedFilter_.getStartPost(),f=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var a=0,d=!1;o.hasNext();){var s=o.getNext();!d&&c(l,s)<=0&&(d=!0);var u=d&&a<this.limit_&&c(s,f)<=0;u?a++:i=i.updateImmediateChild(s.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(e,n,r,i,o){var a;if(this.reverse_){var s=this.index_.getCompare();a=function(I,x){return s(x,I)}}else a=this.index_.getCompare();var u=e;v(u.numChildren()===this.limit_,"");var l=new w(n,r),f=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(u.hasChild(n)){for(var h=u.getImmediateChild(n),d=i.getChildAfterChild(this.index_,f,this.reverse_);d!=null&&(d.name===n||u.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var p=d==null?1:a(d,l),g=c&&!r.isEmpty()&&p>=0;if(g)return o!=null&&o.trackChildChange(ct(n,r,h)),u.updateImmediateChild(n,r);o!=null&&o.trackChildChange(ft(n,h));var _=u.updateImmediateChild(n,E.EMPTY_NODE),y=d!=null&&this.rangedFilter_.matches(d);return y?(o!=null&&o.trackChildChange(Qe(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}else return r.isEmpty()?e:c&&a(f,l)>=0?(o!=null&&(o.trackChildChange(ft(f.name,f.node)),o.trackChildChange(Qe(n,r))),u.updateImmediateChild(n,r).updateImmediateChild(f.name,E.EMPTY_NODE)):e},t}();/**
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
 */var go=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=A}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.hasStartAfter=function(){return this.startAfterSet_},t.prototype.hasEndBefore=function(){return this.endBeforeSet_},t.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},t.prototype.getIndexStartValue=function(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fe},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:oe},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},t.prototype.getLimit=function(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===A},t.prototype.copy=function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t}();function vu(t){return t.loadsAllData()?new rr(t.getIndex()):t.hasLimit()?new pu(t):new _o(t)}function _u(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function gu(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Rn(t,e,n){var r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function yu(t,e,n){var r;if(t.index_===re)typeof e=="string"&&(e=jr(e)),r=Rn(t,e,n);else{var i=void 0;n==null?i=oe:i=jr(n),r=Rn(t,e,i)}return r.startAfterSet_=!0,r}function Nn(t,e,n){var r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function mu(t,e,n){var r,i;return t.index_===re?(typeof e=="string"&&(e=zr(e)),i=Nn(t,e,n)):(n==null?r=fe:r=zr(n),i=Nn(t,e,r)),i.endBeforeSet_=!0,i}function zt(t,e){var n=t.copy();return n.index_=e,n}function Yr(t){var e={};if(t.isDefault())return e;var n;return t.index_===A?n="$priority":t.index_===nr?n="$value":t.index_===re?n="$key":(v(t.index_ instanceof tr,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=D(n),t.startSet_&&(e.startAt=D(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+D(t.indexStartName_))),t.endSet_&&(e.endAt=D(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+D(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $r(t){var e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;var n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==A&&(e.i=t.index_.toString()),e}/**
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
 */var Eu=function(t){k(e,t);function e(n,r,i,o){var a=t.call(this)||this;return a.repoInfo_=n,a.onDataUpdate_=r,a.authTokenProvider_=i,a.appCheckTokenProvider_=o,a.log_=gt("p:rest:"),a.listens_={},a}return e.prototype.reportStats=function(n){throw new Error("Method not implemented.")},e.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(v(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},e.prototype.listen=function(n,r,i,o){var a=this,s=n._path.toString();this.log_("Listen called for "+s+" "+n._queryIdentifier);var u=e.getListenId_(n,i),l={};this.listens_[u]=l;var f=Yr(n._queryParams);this.restRequest_(s+".json",f,function(c,h){var d=h;if(c===404&&(d=null,c=null),c===null&&a.onDataUpdate_(s,d,!1,i),Pe(a.listens_,u)===l){var p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",o(p,null)}})},e.prototype.unlisten=function(n,r){var i=e.getListenId_(n,r);delete this.listens_[i]},e.prototype.get=function(n){var r=this,i=Yr(n._queryParams),o=n._path.toString(),a=new H;return this.restRequest_(o+".json",i,function(s,u){var l=u;s===404&&(l=null,s=null),s===null?(r.onDataUpdate_(o,l,!1,null),a.resolve(l)):a.reject(new Error(l))}),a.promise},e.prototype.refreshAuthToken=function(n){},e.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(a){var s=U(a,2),u=s[0],l=s[1];u&&u.accessToken&&(r.auth=u.accessToken),l&&l.token&&(r.ac=l.token);var f=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+ba(r);o.log_("Sending REST request for "+f);var c=new XMLHttpRequest;c.onreadystatechange=function(){if(i&&c.readyState===4){o.log_("REST Response for "+f+" received. status:",c.status,"response:",c.responseText);var h=null;if(c.status>=200&&c.status<300){try{h=ut(c.responseText)}catch{W("Failed to parse JSON response for "+f+": "+c.responseText)}i(null,h)}else c.status!==401&&c.status!==404&&W("Got unsuccessful REST response for "+f+" Status: "+c.status),i(c.status);i=null}},c.open("GET",f,!0),c.send()})},e}(ro);/**
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
 */var Cu=function(){function t(){this.rootNode_=E.EMPTY_NODE}return t.prototype.getNode=function(e){return this.rootNode_.getChild(e)},t.prototype.updateSnapshot=function(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)},t}();/**
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
 */function Dt(){return{value:null,children:new Map}}function $e(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{var r=C(e);t.children.has(r)||t.children.set(r,Dt());var i=t.children.get(r);e=N(e),$e(i,e,n)}}function An(t,e){if(b(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;var n=t.value;return t.value=null,n.forEachChild(A,function(o,a){$e(t,new T(o),a)}),An(t,e)}else if(t.children.size>0){var r=C(e);if(e=N(e),t.children.has(r)){var i=An(t.children.get(r),e);i&&t.children.delete(r)}return t.children.size===0}else return!0}function Pn(t,e,n){t.value!==null?n(e,t.value):bu(t,function(r,i){var o=new T(e.toString()+"/"+r);Pn(i,o,n)})}function bu(t,e){t.children.forEach(function(n,r){e(r,n)})}/**
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
 */var yo=function(){function t(e){this.collection_=e,this.last_=null}return t.prototype.get=function(){var e=this.collection_.get(),n=ve({},e);return this.last_&&L(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=e,n},t}();/**
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
 */var qr=10*1e3,wu=30*1e3,Su=5*60*1e3,Iu=function(){function t(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yo(e);var r=qr+(wu-qr)*Math.random();tt(this.reportStats_.bind(this),Math.floor(r))}return t.prototype.reportStats_=function(){var e=this,n=this.statsListener_.get(),r={},i=!1;L(n,function(o,a){a>0&&j(e.statsToReport_,o)&&(r[o]=a,i=!0)}),i&&this.server_.reportStats(r),tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Su))},t}();function Tu(t,e){t.statsToReport_[e]=!0}/**
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
 */var te;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function ir(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function or(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ar(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */var Ru=function(){function t(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=te.ACK_USER_WRITE,this.source=ir()}return t.prototype.operationForChild=function(e){if(b(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new T(e));return new t(S(),n,this.revert)}else return v(C(this.path)===e,"operationForChild called for unrelated child."),new t(N(this.path),this.affectedTree,this.revert)},t}();/**
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
 */var mo=function(){function t(e,n){this.source=e,this.path=n,this.type=te.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return b(this.path)?new t(this.source,S()):new t(this.source,N(this.path))},t}();/**
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
 */var Yt=function(){function t(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=te.OVERWRITE}return t.prototype.operationForChild=function(e){return b(this.path)?new t(this.source,S(),this.snap.getImmediateChild(e)):new t(this.source,N(this.path),this.snap)},t}();/**
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
 */var sr=function(){function t(e,n,r){this.source=e,this.path=n,this.children=r,this.type=te.MERGE}return t.prototype.operationForChild=function(e){if(b(this.path)){var n=this.children.subtree(new T(e));return n.isEmpty()?null:n.value?new Yt(this.source,S(),n.value):new t(this.source,S(),n)}else return v(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,N(this.path),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}();/**
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
 */var ye=function(){function t(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;var n=C(e);return this.isCompleteForChild(n)},t.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},t.prototype.getNode=function(){return this.node_},t}();/**
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
 */var Nu=function(){function t(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}return t}();function Au(t,e,n,r){var i=[],o=[];return e.forEach(function(a){a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(du(a.childName,a.snapshotNode))}),et(t,i,"child_removed",e,r,n),et(t,i,"child_added",e,r,n),et(t,i,"child_moved",o,r,n),et(t,i,"child_changed",e,r,n),et(t,i,"value",e,r,n),i}function et(t,e,n,r,i,o){var a=r.filter(function(s){return s.type===n});a.sort(function(s,u){return Ou(t,s,u)}),a.forEach(function(s){var u=Pu(t,s,o);i.forEach(function(l){l.respondsTo(s.type)&&e.push(l.createEvent(u,t.query_))})})}function Pu(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ou(t,e,n){if(e.childName==null||n.childName==null)throw ze("Should only compare child_ events.");var r=new w(e.childName,e.snapshotNode),i=new w(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function $t(t,e){return{eventCache:t,serverCache:e}}function rt(t,e,n,r){return $t(new ye(e,n,r),t.serverCache)}function Eo(t,e,n,r){return $t(t.eventCache,new ye(e,n,r))}function Lt(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Oe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */var gn,ku=function(){return gn||(gn=new ue(ls)),gn},z=function(){function t(e,n){n===void 0&&(n=ku()),this.value=e,this.children=n}return t.fromObject=function(e){var n=new t(null);return L(e,function(r,i){n=n.set(new T(r),i)}),n},t.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(e,n){if(this.value!=null&&n(this.value))return{path:S(),value:this.value};if(b(e))return null;var r=C(e),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(N(e),n);if(o!=null){var a=P(new T(r),o.path);return{path:a,value:o.value}}else return null}else return null},t.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},t.prototype.subtree=function(e){if(b(e))return this;var n=C(e),r=this.children.get(n);return r!==null?r.subtree(N(e)):new t(null)},t.prototype.set=function(e,n){if(b(e))return new t(n,this.children);var r=C(e),i=this.children.get(r)||new t(null),o=i.set(N(e),n),a=this.children.insert(r,o);return new t(this.value,a)},t.prototype.remove=function(e){if(b(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=C(e),r=this.children.get(n);if(r){var i=r.remove(N(e)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new t(null):new t(this.value,o)}else return this},t.prototype.get=function(e){if(b(e))return this.value;var n=C(e),r=this.children.get(n);return r?r.get(N(e)):null},t.prototype.setTree=function(e,n){if(b(e))return n;var r=C(e),i=this.children.get(r)||new t(null),o=i.setTree(N(e),n),a=void 0;return o.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,o),new t(this.value,a)},t.prototype.fold=function(e){return this.fold_(S(),e)},t.prototype.fold_=function(e,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(P(e,i),n)}),n(e,this.value,r)},t.prototype.findOnPath=function(e,n){return this.findOnPath_(e,S(),n)},t.prototype.findOnPath_=function(e,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(b(e))return null;var o=C(e),a=this.children.get(o);return a?a.findOnPath_(N(e),P(n,o),r):null},t.prototype.foreachOnPath=function(e,n){return this.foreachOnPath_(e,S(),n)},t.prototype.foreachOnPath_=function(e,n,r){if(b(e))return this;this.value&&r(n,this.value);var i=C(e),o=this.children.get(i);return o?o.foreachOnPath_(N(e),P(n,i),r):new t(null)},t.prototype.foreach=function(e){this.foreach_(S(),e)},t.prototype.foreach_=function(e,n){this.children.inorderTraversal(function(r,i){i.foreach_(P(e,r),n)}),this.value&&n(e,this.value)},t.prototype.foreachChild=function(e){this.children.inorderTraversal(function(n,r){r.value&&e(n,r.value)})},t}();/**
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
 */var le=function(){function t(e){this.writeTree_=e}return t.empty=function(){return new t(new z(null))},t}();function it(t,e,n){if(b(e))return new le(new z(n));var r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){var i=r.path,o=r.value,a=V(i,e);return o=o.updateChild(a,n),new le(t.writeTree_.set(i,o))}else{var s=new z(n),u=t.writeTree_.setTree(e,s);return new le(u)}}function On(t,e,n){var r=t;return L(n,function(i,o){r=it(r,P(e,i),o)}),r}function Kr(t,e){if(b(e))return le.empty();var n=t.writeTree_.setTree(e,new z(null));return new le(n)}function kn(t,e){return De(t,e)!=null}function De(t,e){var n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(V(n.path,e)):null}function Xr(t){var e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(A,function(r,i){e.push(new w(r,i))}):t.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&e.push(new w(r,i.value))}),e}function de(t,e){if(b(e))return t;var n=De(t,e);return n!=null?new le(new z(n)):new le(t.writeTree_.subtree(e))}function xn(t){return t.writeTree_.isEmpty()}function Ge(t,e){return Co(S(),t.writeTree_,e)}function Co(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);var r=null;return e.children.inorderTraversal(function(i,o){i===".priority"?(v(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Co(P(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(P(t,".priority"),r)),n}/**
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
 */function qt(t,e){return Io(e,t)}function xu(t,e,n,r,i){v(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=it(t.visibleWrites,e,n)),t.lastWriteId=r}function Du(t,e,n,r){v(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=On(t.visibleWrites,e,n),t.lastWriteId=r}function Lu(t,e){for(var n=0;n<t.allWrites.length;n++){var r=t.allWrites[n];if(r.writeId===e)return r}return null}function Mu(t,e){var n=t.allWrites.findIndex(function(l){return l.writeId===e});v(n>=0,"removeWrite called with nonexistent writeId.");var r=t.allWrites[n];t.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=t.allWrites.length-1;i&&a>=0;){var s=t.allWrites[a];s.visible&&(a>=n&&Fu(s,r.path)?i=!1:$(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return Wu(t),!0;if(r.snap)t.visibleWrites=Kr(t.visibleWrites,r.path);else{var u=r.children;L(u,function(l){t.visibleWrites=Kr(t.visibleWrites,P(r.path,l))})}return!0}else return!1}function Fu(t,e){if(t.snap)return $(t.path,e);for(var n in t.children)if(t.children.hasOwnProperty(n)&&$(P(t.path,n),e))return!0;return!1}function Wu(t){t.visibleWrites=bo(t.allWrites,Bu,S()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bu(t){return t.visible}function bo(t,e,n){for(var r=le.empty(),i=0;i<t.length;++i){var o=t[i];if(e(o)){var a=o.path,s=void 0;if(o.snap)$(n,a)?(s=V(n,a),r=it(r,s,o.snap)):$(a,n)&&(s=V(a,n),r=it(r,S(),o.snap.getChild(s)));else if(o.children){if($(n,a))s=V(n,a),r=On(r,s,o.children);else if($(a,n))if(s=V(a,n),b(s))r=On(r,S(),o.children);else{var u=Pe(o.children,C(s));if(u){var l=u.getChild(N(s));r=it(r,S(),l)}}}else throw ze("WriteRecord should have .snap or .children")}}return r}function wo(t,e,n,r,i){if(!r&&!i){var o=De(t.visibleWrites,e);if(o!=null)return o;var a=de(t.visibleWrites,e);if(xn(a))return n;if(n==null&&!kn(a,S()))return null;var s=n||E.EMPTY_NODE;return Ge(a,s)}else{var u=de(t.visibleWrites,e);if(!i&&xn(u))return n;if(!i&&n==null&&!kn(u,S()))return null;var l=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&($(h.path,e)||$(e,h.path))},f=bo(t.allWrites,l,e),s=n||E.EMPTY_NODE;return Ge(f,s)}}function Uu(t,e,n){var r=E.EMPTY_NODE,i=De(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(A,function(s,u){r=r.updateImmediateChild(s,u)}),r;if(n){var o=de(t.visibleWrites,e);return n.forEachChild(A,function(s,u){var l=Ge(de(o,new T(s)),u);r=r.updateImmediateChild(s,l)}),Xr(o).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}else{var a=de(t.visibleWrites,e);return Xr(a).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}}function Vu(t,e,n,r,i){v(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=P(e,n);if(kn(t.visibleWrites,o))return null;var a=de(t.visibleWrites,o);return xn(a)?i.getChild(n):Ge(a,i.getChild(n))}function Hu(t,e,n,r){var i=P(e,n),o=De(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var a=de(t.visibleWrites,i);return Ge(a,r.getNode().getImmediateChild(n))}else return null}function Qu(t,e){return De(t.visibleWrites,e)}function Gu(t,e,n,r,i,o,a){var s,u=de(t.visibleWrites,e),l=De(u,S());if(l!=null)s=l;else if(n!=null)s=Ge(u,n);else return[];if(s=s.withIndex(a),!s.isEmpty()&&!s.isLeafNode()){for(var f=[],c=a.getCompare(),h=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=h.getNext();d&&f.length<i;)c(d,r)!==0&&f.push(d),d=h.getNext();return f}else return[]}function ju(){return{visibleWrites:le.empty(),allWrites:[],lastWriteId:-1}}function Mt(t,e,n,r){return wo(t.writeTree,t.treePath,e,n,r)}function ur(t,e){return Uu(t.writeTree,t.treePath,e)}function Jr(t,e,n,r){return Vu(t.writeTree,t.treePath,e,n,r)}function Ft(t,e){return Qu(t.writeTree,P(t.treePath,e))}function zu(t,e,n,r,i,o){return Gu(t.writeTree,t.treePath,e,n,r,i,o)}function lr(t,e,n){return Hu(t.writeTree,t.treePath,e,n)}function So(t,e){return Io(P(t.treePath,e),t.writeTree)}function Io(t,e){return{treePath:t,writeTree:e}}/**
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
 */var Yu=function(){function t(){this.changeMap=new Map}return t.prototype.trackChildChange=function(e){var n=e.type,r=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,ct(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,ft(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,Qe(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,ct(r,e.snapshotNode,i.oldSnap));else throw ze("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)},t.prototype.getChanges=function(){return Array.from(this.changeMap.values())},t}();/**
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
 */var $u=function(){function t(){}return t.prototype.getCompleteChild=function(e){return null},t.prototype.getChildAfterChild=function(e,n,r){return null},t}(),To=new $u,fr=function(){function t(e,n,r){r===void 0&&(r=null),this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}return t.prototype.getCompleteChild=function(e){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);var r=this.optCompleteServerCache_!=null?new ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,r)},t.prototype.getChildAfterChild=function(e,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oe(this.viewCache_),o=zu(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]},t}();/**
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
 */function qu(t){return{filter:t}}function Ku(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xu(t,e,n,r,i){var o=new Yu,a,s;if(n.type===te.OVERWRITE){var u=n;u.source.fromUser?a=Dn(t,e,u.path,u.snap,r,i,o):(v(u.source.fromServer,"Unknown source."),s=u.source.tagged||e.serverCache.isFiltered()&&!b(u.path),a=Wt(t,e,u.path,u.snap,r,i,s,o))}else if(n.type===te.MERGE){var l=n;l.source.fromUser?a=Zu(t,e,l.path,l.children,r,i,o):(v(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered(),a=Ln(t,e,l.path,l.children,r,i,s,o))}else if(n.type===te.ACK_USER_WRITE){var f=n;f.revert?a=nl(t,e,f.path,r,i,o):a=el(t,e,f.path,f.affectedTree,r,i,o)}else if(n.type===te.LISTEN_COMPLETE)a=tl(t,e,n.path,r,o);else throw ze("Unknown operation type: "+n.type);var c=o.getChanges();return Ju(e,a,c),{viewCache:a,changes:c}}function Ju(t,e,n){var r=e.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Lt(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(vo(Lt(e)))}}function Ro(t,e,n,r,i,o){var a=e.eventCache;if(Ft(r,n)!=null)return e;var s=void 0,u=void 0;if(b(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){var l=Oe(e),f=l instanceof E?l:E.EMPTY_NODE,c=ur(r,f);s=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{var h=Mt(r,Oe(e));s=t.filter.updateFullNode(e.eventCache.getNode(),h,o)}else{var d=C(n);if(d===".priority"){v(ge(n)===1,"Can't have a priority with additional path components");var p=a.getNode();u=e.serverCache.getNode();var g=Jr(r,n,p,u);g!=null?s=t.filter.updatePriority(p,g):s=a.getNode()}else{var _=N(n),y=void 0;if(a.isCompleteForChild(d)){u=e.serverCache.getNode();var I=Jr(r,n,a.getNode(),u);I!=null?y=a.getNode().getImmediateChild(d).updateChild(_,I):y=a.getNode().getImmediateChild(d)}else y=lr(r,d,e.serverCache);y!=null?s=t.filter.updateChild(a.getNode(),d,y,_,i,o):s=a.getNode()}}return rt(e,s,a.isFullyInitialized()||b(n),t.filter.filtersNodes())}function Wt(t,e,n,r,i,o,a,s){var u=e.serverCache,l,f=a?t.filter:t.filter.getIndexedFilter();if(b(n))l=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){var c=u.getNode().updateChild(n,r);l=f.updateFullNode(u.getNode(),c,null)}else{var h=C(n);if(!u.isCompleteForPath(n)&&ge(n)>1)return e;var d=N(n),p=u.getNode().getImmediateChild(h),g=p.updateChild(d,r);h===".priority"?l=f.updatePriority(u.getNode(),g):l=f.updateChild(u.getNode(),h,g,d,To,null)}var _=Eo(e,l,u.isFullyInitialized()||b(n),f.filtersNodes()),y=new fr(i,_,o);return Ro(t,_,n,i,y,s)}function Dn(t,e,n,r,i,o,a){var s=e.eventCache,u,l,f=new fr(i,e,o);if(b(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,a),u=rt(e,l,!0,t.filter.filtersNodes());else{var c=C(n);if(c===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),u=rt(e,l,s.isFullyInitialized(),s.isFiltered());else{var h=N(n),d=s.getNode().getImmediateChild(c),p=void 0;if(b(h))p=r;else{var g=f.getCompleteChild(c);g!=null?Jn(h)===".priority"&&g.getChild(oo(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=E.EMPTY_NODE}if(d.equals(p))u=e;else{var _=t.filter.updateChild(s.getNode(),c,p,h,f,a);u=rt(e,_,s.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Zr(t,e){return t.eventCache.isCompleteForChild(e)}function Zu(t,e,n,r,i,o,a){var s=e;return r.foreach(function(u,l){var f=P(n,u);Zr(e,C(f))&&(s=Dn(t,s,f,l,i,o,a))}),r.foreach(function(u,l){var f=P(n,u);Zr(e,C(f))||(s=Dn(t,s,f,l,i,o,a))}),s}function ei(t,e,n){return n.foreach(function(r,i){e=e.updateChild(r,i)}),e}function Ln(t,e,n,r,i,o,a,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;var u=e,l;b(n)?l=r:l=new z(null).setTree(n,r);var f=e.serverCache.getNode();return l.children.inorderTraversal(function(c,h){if(f.hasChild(c)){var d=e.serverCache.getNode().getImmediateChild(c),p=ei(t,d,h);u=Wt(t,u,new T(c),p,i,o,a,s)}}),l.children.inorderTraversal(function(c,h){var d=!e.serverCache.isCompleteForChild(c)&&h.value===void 0;if(!f.hasChild(c)&&!d){var p=e.serverCache.getNode().getImmediateChild(c),g=ei(t,p,h);u=Wt(t,u,new T(c),g,i,o,a,s)}}),u}function el(t,e,n,r,i,o,a){if(Ft(i,n)!=null)return e;var s=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(b(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Wt(t,e,n,u.getNode().getChild(n),i,o,s,a);if(b(n)){var l=new z(null);return u.getNode().forEachChild(re,function(c,h){l=l.set(new T(c),h)}),Ln(t,e,n,l,i,o,s,a)}else return e}else{var f=new z(null);return r.foreach(function(c,h){var d=P(n,c);u.isCompleteForPath(d)&&(f=f.set(c,u.getNode().getChild(d)))}),Ln(t,e,n,f,i,o,s,a)}}function tl(t,e,n,r,i){var o=e.serverCache,a=Eo(e,o.getNode(),o.isFullyInitialized()||b(n),o.isFiltered());return Ro(t,a,n,r,To,i)}function nl(t,e,n,r,i,o){var a;if(Ft(r,n)!=null)return e;var s=new fr(r,e,i),u=e.eventCache.getNode(),l=void 0;if(b(n)||C(n)===".priority"){var f=void 0;if(e.serverCache.isFullyInitialized())f=Mt(r,Oe(e));else{var c=e.serverCache.getNode();v(c instanceof E,"serverChildren would be complete if leaf node"),f=ur(r,c)}f=f,l=t.filter.updateFullNode(u,f,o)}else{var h=C(n),d=lr(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=u.getImmediateChild(h)),d!=null?l=t.filter.updateChild(u,h,d,N(n),s,o):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(u,h,E.EMPTY_NODE,N(n),s,o):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Mt(r,Oe(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,o)))}return a=e.serverCache.isFullyInitialized()||Ft(r,S())!=null,rt(e,l,a,t.filter.filtersNodes())}/**
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
 */var rl=function(){function t(e,n){this.query_=e,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new rr(r.getIndex()),o=vu(r);this.processor_=qu(o);var a=n.serverCache,s=n.eventCache,u=i.updateFullNode(E.EMPTY_NODE,a.getNode(),null),l=o.updateFullNode(E.EMPTY_NODE,s.getNode(),null),f=new ye(u,a.isFullyInitialized(),i.filtersNodes()),c=new ye(l,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=$t(c,f),this.eventGenerator_=new Nu(this.query_)}return Object.defineProperty(t.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),t}();function il(t){return t.viewCache_.serverCache.getNode()}function ol(t){return Lt(t.viewCache_)}function al(t,e){var n=Oe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(C(e)).isEmpty())?n.getChild(e):null}function ti(t){return t.eventRegistrations_.length===0}function sl(t,e){t.eventRegistrations_.push(e)}function ni(t,e,n){var r=[];if(n){v(e==null,"A cancel should cancel all event registrations.");var i=t.query._path;t.eventRegistrations_.forEach(function(u){var l=u.createCancelEvent(n,i);l&&r.push(l)})}if(e){for(var o=[],a=0;a<t.eventRegistrations_.length;++a){var s=t.eventRegistrations_[a];if(!s.matches(e))o.push(s);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(a+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return r}function ri(t,e,n,r){e.type===te.MERGE&&e.source.queryId!==null&&(v(Oe(t.viewCache_),"We should always have a full cache before handling merges"),v(Lt(t.viewCache_),"Missing event cache, even though we have a server cache"));var i=t.viewCache_,o=Xu(t.processor_,i,e,n,r);return Ku(t.processor_,o.viewCache),v(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,No(t,o.changes,o.viewCache.eventCache.getNode(),null)}function ul(t,e){var n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(A,function(o,a){r.push(Qe(o,a))})}return n.isFullyInitialized()&&r.push(vo(n.getNode())),No(t,r,n.getNode(),e)}function No(t,e,n,r){var i=r?[r]:t.eventRegistrations_;return Au(t.eventGenerator_,e,n,i)}/**
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
 */var Bt,Ao=function(){function t(){this.views=new Map}return t}();function ll(t){v(!Bt,"__referenceConstructor has already been defined"),Bt=t}function fl(){return v(Bt,"Reference.ts has not been loaded"),Bt}function cl(t){return t.views.size===0}function cr(t,e,n,r){var i,o,a=e.source.queryId;if(a!==null){var s=t.views.get(a);return v(s!=null,"SyncTree gave us an op for an invalid query."),ri(s,e,n,r)}else{var u=[];try{for(var l=G(t.views.values()),f=l.next();!f.done;f=l.next()){var s=f.value;u=u.concat(ri(s,e,n,r))}}catch(c){i={error:c}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}return u}}function Po(t,e,n,r,i){var o=e._queryIdentifier,a=t.views.get(o);if(!a){var s=Mt(n,i?r:null),u=!1;s?u=!0:r instanceof E?(s=ur(n,r),u=!1):(s=E.EMPTY_NODE,u=!1);var l=$t(new ye(s,u,!1),new ye(r,i,!1));return new rl(e,l)}return a}function hl(t,e,n,r,i,o){var a=Po(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),sl(a,n),ul(a,n)}function dl(t,e,n,r){var i,o,a=e._queryIdentifier,s=[],u=[],l=me(t);if(a==="default")try{for(var f=G(t.views.entries()),c=f.next();!c.done;c=f.next()){var h=U(c.value,2),d=h[0],p=h[1];u=u.concat(ni(p,n,r)),ti(p)&&(t.views.delete(d),p.query._queryParams.loadsAllData()||s.push(p.query))}}catch(g){i={error:g}}finally{try{c&&!c.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}else{var p=t.views.get(a);p&&(u=u.concat(ni(p,n,r)),ti(p)&&(t.views.delete(a),p.query._queryParams.loadsAllData()||s.push(p.query)))}return l&&!me(t)&&s.push(new(fl())(e._repo,e._path)),{removed:s,events:u}}function Oo(t){var e,n,r=[];try{for(var i=G(t.views.values()),o=i.next();!o.done;o=i.next()){var a=o.value;a.query._queryParams.loadsAllData()||r.push(a)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}function pe(t,e){var n,r,i=null;try{for(var o=G(t.views.values()),a=o.next();!a.done;a=o.next()){var s=a.value;i=i||al(s,e)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function ko(t,e){var n=e._queryParams;if(n.loadsAllData())return Kt(t);var r=e._queryIdentifier;return t.views.get(r)}function xo(t,e){return ko(t,e)!=null}function me(t){return Kt(t)!=null}function Kt(t){var e,n;try{for(var r=G(t.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(a){e={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return null}/**
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
 */var Ut;function pl(t){v(!Ut,"__referenceConstructor has already been defined"),Ut=t}function vl(){return v(Ut,"Reference.ts has not been loaded"),Ut}var _l=1,ii=function(){function t(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=ju(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return t}();function hr(t,e,n,r,i){return xu(t.pendingWriteTree_,e,n,r,i),i?qe(t,new Yt(ir(),e,n)):[]}function gl(t,e,n,r){Du(t.pendingWriteTree_,e,n,r);var i=z.fromObject(n);return qe(t,new sr(ir(),e,i))}function he(t,e,n){n===void 0&&(n=!1);var r=Lu(t.pendingWriteTree_,e),i=Mu(t.pendingWriteTree_,e);if(i){var o=new z(null);return r.snap!=null?o=o.set(S(),!0):L(r.children,function(a){o=o.set(new T(a),!0)}),qe(t,new Ru(r.path,o,n))}else return[]}function mt(t,e,n){return qe(t,new Yt(or(),e,n))}function yl(t,e,n){var r=z.fromObject(n);return qe(t,new sr(or(),e,r))}function ml(t,e){return qe(t,new mo(or(),e))}function El(t,e,n){var r=dr(t,n);if(r){var i=pr(r),o=i.path,a=i.queryId,s=V(o,e),u=new mo(ar(a),s);return vr(t,o,u)}else return[]}function Mn(t,e,n,r){var i=e._path,o=t.syncPointTree_.get(i),a=[];if(o&&(e._queryIdentifier==="default"||xo(o,e))){var s=dl(o,e,n,r);cl(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));var u=s.removed;a=s.events;var l=u.findIndex(function(I){return I._queryParams.loadsAllData()})!==-1,f=t.syncPointTree_.findOnPath(i,function(I,x){return me(x)});if(l&&!f){var c=t.syncPointTree_.subtree(i);if(!c.isEmpty())for(var h=Sl(c),d=0;d<h.length;++d){var p=h[d],g=p.query,_=Mo(t,p);t.listenProvider_.startListening(ot(g),Vt(t,g),_.hashFn,_.onComplete)}}if(!f&&u.length>0&&!r)if(l){var y=null;t.listenProvider_.stopListening(ot(e),y)}else u.forEach(function(I){var x=t.queryToTagMap.get(Jt(I));t.listenProvider_.stopListening(ot(I),x)});Il(t,u)}return a}function Cl(t,e,n,r){var i=dr(t,r);if(i!=null){var o=pr(i),a=o.path,s=o.queryId,u=V(a,e),l=new Yt(ar(s),u,n);return vr(t,a,l)}else return[]}function bl(t,e,n,r){var i=dr(t,r);if(i){var o=pr(i),a=o.path,s=o.queryId,u=V(a,e),l=z.fromObject(n),f=new sr(ar(s),u,l);return vr(t,a,f)}else return[]}function oi(t,e,n){var r=e._path,i=null,o=!1;t.syncPointTree_.foreachOnPath(r,function(g,_){var y=V(g,r);i=i||pe(_,y),o=o||me(_)});var a=t.syncPointTree_.get(r);a?(o=o||me(a),i=i||pe(a,S())):(a=new Ao,t.syncPointTree_=t.syncPointTree_.set(r,a));var s;if(i!=null)s=!0;else{s=!1,i=E.EMPTY_NODE;var u=t.syncPointTree_.subtree(r);u.foreachChild(function(g,_){var y=pe(_,S());y&&(i=i.updateImmediateChild(g,y))})}var l=xo(a,e);if(!l&&!e._queryParams.loadsAllData()){var f=Jt(e);v(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");var c=Tl();t.queryToTagMap.set(f,c),t.tagToQueryMap.set(c,f)}var h=qt(t.pendingWriteTree_,r),d=hl(a,e,n,h,i,s);if(!l&&!o){var p=ko(a,e);d=d.concat(Rl(t,e,p))}return d}function Xt(t,e,n){var r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,function(a,s){var u=V(a,e),l=pe(s,u);if(l)return l});return wo(i,e,o,n,r)}function wl(t,e){var n=e._path,r=null;t.syncPointTree_.foreachOnPath(n,function(l,f){var c=V(l,n);r=r||pe(f,c)});var i=t.syncPointTree_.get(n);i?r=r||pe(i,S()):(i=new Ao,t.syncPointTree_=t.syncPointTree_.set(n,i));var o=r!=null,a=o?new ye(r,!0,!1):null,s=qt(t.pendingWriteTree_,e._path),u=Po(i,e,s,o?a.getNode():E.EMPTY_NODE,o);return ol(u)}function qe(t,e){return Do(e,t.syncPointTree_,null,qt(t.pendingWriteTree_,S()))}function Do(t,e,n,r){if(b(t.path))return Lo(t,e,n,r);var i=e.get(S());n==null&&i!=null&&(n=pe(i,S()));var o=[],a=C(t.path),s=t.operationForChild(a),u=e.children.get(a);if(u&&s){var l=n?n.getImmediateChild(a):null,f=So(r,a);o=o.concat(Do(s,u,l,f))}return i&&(o=o.concat(cr(i,t,r,n))),o}function Lo(t,e,n,r){var i=e.get(S());n==null&&i!=null&&(n=pe(i,S()));var o=[];return e.children.inorderTraversal(function(a,s){var u=n?n.getImmediateChild(a):null,l=So(r,a),f=t.operationForChild(a);f&&(o=o.concat(Lo(f,s,u,l)))}),i&&(o=o.concat(cr(i,t,r,n))),o}function Mo(t,e){var n=e.query,r=Vt(t,n);return{hashFn:function(){var i=il(e)||E.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?El(t,n._path,r):ml(t,n._path);var o=hs(i,n);return Mn(t,n,null,o)}}}function Vt(t,e){var n=Jt(e);return t.queryToTagMap.get(n)}function Jt(t){return t._path.toString()+"$"+t._queryIdentifier}function dr(t,e){return t.tagToQueryMap.get(e)}function pr(t){var e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new T(t.substr(0,e))}}function vr(t,e,n){var r=t.syncPointTree_.get(e);v(r,"Missing sync point for query tag that we're tracking");var i=qt(t.pendingWriteTree_,e);return cr(r,n,i,null)}function Sl(t){return t.fold(function(e,n,r){if(n&&me(n)){var i=Kt(n);return[i]}else{var o=[];return n&&(o=Oo(n)),L(r,function(a,s){o=o.concat(s)}),o}})}function ot(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vl())(t._repo,t._path):t}function Il(t,e){for(var n=0;n<e.length;++n){var r=e[n];if(!r._queryParams.loadsAllData()){var i=Jt(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Tl(){return _l++}function Rl(t,e,n){var r=e._path,i=Vt(t,e),o=Mo(t,n),a=t.listenProvider_.startListening(ot(e),i,o.hashFn,o.onComplete),s=t.syncPointTree_.subtree(r);if(i)v(!me(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold(function(c,h,d){if(!b(c)&&h&&me(h))return[Kt(h).query];var p=[];return h&&(p=p.concat(Oo(h).map(function(g){return g.query}))),L(d,function(g,_){p=p.concat(_)}),p}),l=0;l<u.length;++l){var f=u[l];t.listenProvider_.stopListening(ot(f),Vt(t,f))}return a}/**
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
 */var Nl=function(){function t(e){this.node_=e}return t.prototype.getImmediateChild=function(e){var n=this.node_.getImmediateChild(e);return new t(n)},t.prototype.node=function(){return this.node_},t}(),Al=function(){function t(e,n){this.syncTree_=e,this.path_=n}return t.prototype.getImmediateChild=function(e){var n=P(this.path_,e);return new t(this.syncTree_,n)},t.prototype.node=function(){return Xt(this.syncTree_,this.path_)},t}(),Pl=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ai=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ol(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kl(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ol=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},kl=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));var r=t.increment;typeof r!="number"&&v(!1,"Unexpected increment value: "+r);var i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,a=o.getValue();return typeof a!="number"?r:a+r},Fo=function(t,e,n,r){return gr(e,new Al(n,t),r)},_r=function(t,e,n){return gr(t,new Nl(e),n)};function gr(t,e,n){var r=t.getPriority().val(),i=ai(r,e.getImmediateChild(".priority"),n),o;if(t.isLeafNode()){var a=t,s=ai(a.getValue(),e,n);return s!==a.getValue()||i!==a.getPriority().val()?new Ve(s,O(i)):t}else{var u=t;return o=u,i!==u.getPriority().val()&&(o=o.updatePriority(new Ve(i))),u.forEachChild(A,function(l,f){var c=gr(f,e.getImmediateChild(l),n);c!==f&&(o=o.updateImmediateChild(l,c))}),o}}/**
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
 */var yr=function(){function t(e,n,r){e===void 0&&(e=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=e,this.parent=n,this.node=r}return t}();function Zt(t,e){for(var n=e instanceof T?e:new T(e),r=t,i=C(n);i!==null;){var o=Pe(r.node.children,i)||{children:{},childCount:0};r=new yr(i,r,o),n=N(n),i=C(n)}return r}function Le(t){return t.node.value}function mr(t,e){t.node.value=e,Fn(t)}function Wo(t){return t.node.childCount>0}function xl(t){return Le(t)===void 0&&!Wo(t)}function en(t,e){L(t.node.children,function(n,r){e(new yr(n,t,r))})}function Bo(t,e,n,r){n&&!r&&e(t),en(t,function(i){Bo(i,e,!0,r)}),n&&r&&e(t)}function Dl(t,e,n){for(var r=n?t:t.parent;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Et(t){return new T(t.parent===null?t.name:Et(t.parent)+"/"+t.name)}function Fn(t){t.parent!==null&&Ll(t.parent,t.name,t)}function Ll(t,e,n){var r=xl(n),i=j(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Fn(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fn(t))}/**
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
 */var Ml=/[\[\].#$\/\u0000-\u001F\u007F]/,Fl=/[\[\].#$\u0000-\u001F\u007F]/,yn=10*1024*1024,tn=function(t){return typeof t=="string"&&t.length!==0&&!Ml.test(t)},Uo=function(t){return typeof t=="string"&&t.length!==0&&!Fl.test(t)},Wl=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uo(t)},ht=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gt(t)||t&&typeof t=="object"&&j(t,".sv")},ae=function(t,e,n,r){r&&e===void 0||Ct(Q(t,"value"),e,n)},Ct=function(t,e,n){var r=n instanceof T?new zs(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Se(r));if(typeof e=="function")throw new Error(t+"contains a function "+Se(r)+" with contents = "+e.toString());if(Gt(e))throw new Error(t+"contains "+e.toString()+" "+Se(r));if(typeof e=="string"&&e.length>yn/3&&Qt(e)>yn)throw new Error(t+"contains a string greater than "+yn+" utf8 bytes "+Se(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){var i=!1,o=!1;if(L(e,function(a,s){if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!tn(a)))throw new Error(t+" contains an invalid key ("+a+") "+Se(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ys(r,a),Ct(t,s,r),$s(r)}),i&&o)throw new Error(t+' contains ".value" child '+Se(r)+" in addition to actual children.")}},Bl=function(t,e){var n,r;for(n=0;n<e.length;n++){r=e[n];for(var i=lt(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!tn(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(js);var a=null;for(n=0;n<e.length;n++){if(r=e[n],a!==null&&$(a,r))throw new Error(t+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString());a=r}},Vo=function(t,e,n,r){if(!(r&&e===void 0)){var i=Q(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");var o=[];L(e,function(a,s){var u=new T(a);if(Ct(i,s,P(n,u)),Jn(u)===".priority"&&!ht(s))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(u)}),Bl(i,o)}},Er=function(t,e,n){if(!(n&&e===void 0)){if(Gt(e))throw new Error(Q(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ht(e))throw new Error(Q(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ul=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Q(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},bt=function(t,e,n,r){if(!(r&&n===void 0)&&!tn(n))throw new Error(Q(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},dt=function(t,e,n,r){if(!(r&&n===void 0)&&!Uo(n))throw new Error(Q(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vl=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dt(t,e,n,r)},q=function(t,e){if(C(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ho=function(t,e){var n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wl(n))throw new Error(Q(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},Hl=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Q(t,e)+"must be a boolean.")};/**
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
 */var Ql=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t}();function nn(t,e){for(var n=null,r=0;r<e.length;r++){var i=e[r],o=i.getPath();n!==null&&!Zn(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function Cr(t,e,n){nn(t,n),Qo(t,function(r){return Zn(r,e)})}function K(t,e,n){nn(t,n),Qo(t,function(r){return $(r,e)||$(e,r)})}function Qo(t,e){t.recursionDepth_++;for(var n=!0,r=0;r<t.eventLists_.length;r++){var i=t.eventLists_[r];if(i){var o=i.path;e(o)?(Gl(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Gl(t){for(var e=0;e<t.events.length;e++){var n=t.events[e];if(n!==null){t.events[e]=null;var r=n.getEventRunner();Ne&&F("event: "+n.toString()),Ye(r)}}}/**
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
 */var Go="repo_interrupt",jl=25,zl=function(){function t(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ql,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dt(),this.transactionQueueTree_=new yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t}();function Yl(t,e,n){if(t.stats_=Kn(t.repoInfo_),t.forceRestClient_||ps())t.server_=new Eu(t.repoInfo_,function(r,i,o,a){si(t,r,i,o,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(function(){return ui(t,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ae(t.repoInfo_,e,function(r,i,o,a){si(t,r,i,o,a)},function(r){ui(t,r)},function(r){ql(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(function(r){t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(function(r){t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Es(t.repoInfo_,function(){return new Iu(t.stats_,t.server_)}),t.infoData_=new Cu,t.infoSyncTree_=new ii({startListening:function(r,i,o,a){var s=[],u=t.infoData_.getNode(r._path);return u.isEmpty()||(s=mt(t.infoSyncTree_,r._path,u),setTimeout(function(){a("ok")},0)),s},stopListening:function(){}}),br(t,"connected",!1),t.serverSyncTree_=new ii({startListening:function(r,i,o,a){return t.server_.listen(r,o,i,function(s,u){var l=a(s,u);K(t.eventQueue_,r._path,l)}),[]},stopListening:function(r,i){t.server_.unlisten(r,i)}})}function jo(t){var e=t.infoData_.getNode(new T(".info/serverTimeOffset")),n=e.val()||0;return new Date().getTime()+n}function wt(t){return Pl({timestamp:jo(t)})}function si(t,e,n,r,i){t.dataUpdateCount++;var o=new T(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;var a=[];if(i)if(r){var s=Nt(n,function(h){return O(h)});a=bl(t.serverSyncTree_,o,s,i)}else{var u=O(n);a=Cl(t.serverSyncTree_,o,u,i)}else if(r){var l=Nt(n,function(h){return O(h)});a=yl(t.serverSyncTree_,o,l)}else{var f=O(n);a=mt(t.serverSyncTree_,o,f)}var c=o;a.length>0&&(c=je(t,o)),K(t.eventQueue_,c,a)}function $l(t,e){t.interceptServerDataCallback_=e}function ui(t,e){br(t,"connected",e),e===!1&&Jl(t)}function ql(t,e){L(e,function(n,r){br(t,n,r)})}function br(t,e,n){var r=new T("/.info/"+e),i=O(n);t.infoData_.updateSnapshot(r,i);var o=mt(t.infoSyncTree_,r,i);K(t.eventQueue_,r,o)}function rn(t){return t.nextWriteId_++}function Kl(t,e){var n=wl(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(function(r){var i=O(r).withIndex(e._queryParams.getIndex()),o=mt(t.serverSyncTree_,e._path,i);return Cr(t.eventQueue_,e._path,o),Promise.resolve(i)},function(r){return Ke(t,"get for query "+D(e)+" failed: "+r),Promise.reject(new Error(r))})}function wr(t,e,n,r,i){Ke(t,"set",{path:e.toString(),value:n,priority:r});var o=wt(t),a=O(n,r),s=Xt(t.serverSyncTree_,e),u=_r(a,s,o),l=rn(t),f=hr(t.serverSyncTree_,e,u,l,!0);nn(t.eventQueue_,f),t.server_.put(e.toString(),a.val(!0),function(h,d){var p=h==="ok";p||W("set at "+e+" failed: "+h);var g=he(t.serverSyncTree_,l,!p);K(t.eventQueue_,e,g),Ee(t,i,h,d)});var c=Ir(t,e);je(t,c),K(t.eventQueue_,c,[])}function Xl(t,e,n,r){Ke(t,"update",{path:e.toString(),value:n});var i=!0,o=wt(t),a={};if(L(n,function(l,f){i=!1,a[l]=Fo(P(e,l),O(f),t.serverSyncTree_,o)}),i)F("update() called with empty data.  Don't do anything."),Ee(t,r,"ok",void 0);else{var s=rn(t),u=gl(t.serverSyncTree_,e,a,s);nn(t.eventQueue_,u),t.server_.merge(e.toString(),n,function(l,f){var c=l==="ok";c||W("update at "+e+" failed: "+l);var h=he(t.serverSyncTree_,s,!c),d=h.length>0?je(t,e):e;K(t.eventQueue_,d,h),Ee(t,r,l,f)}),L(n,function(l){var f=Ir(t,P(e,l));je(t,f)}),K(t.eventQueue_,e,[])}}function Jl(t){Ke(t,"onDisconnectEvents");var e=wt(t),n=Dt();Pn(t.onDisconnect_,S(),function(i,o){var a=Fo(i,o,t.serverSyncTree_,e);$e(n,i,a)});var r=[];Pn(n,S(),function(i,o){r=r.concat(mt(t.serverSyncTree_,i,o));var a=Ir(t,i);je(t,a)}),t.onDisconnect_=Dt(),K(t.eventQueue_,S(),r)}function Zl(t,e,n){t.server_.onDisconnectCancel(e.toString(),function(r,i){r==="ok"&&An(t.onDisconnect_,e),Ee(t,n,r,i)})}function li(t,e,n,r){var i=O(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),function(o,a){o==="ok"&&$e(t.onDisconnect_,e,i),Ee(t,r,o,a)})}function ef(t,e,n,r,i){var o=O(n,r);t.server_.onDisconnectPut(e.toString(),o.val(!0),function(a,s){a==="ok"&&$e(t.onDisconnect_,e,o),Ee(t,i,a,s)})}function tf(t,e,n,r){if(Cn(n)){F("onDisconnect().update() called with empty data.  Don't do anything."),Ee(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,function(i,o){i==="ok"&&L(n,function(a,s){var u=O(s);$e(t.onDisconnect_,P(e,a),u)}),Ee(t,r,i,o)})}function nf(t,e,n){var r;C(e._path)===".info"?r=oi(t.infoSyncTree_,e,n):r=oi(t.serverSyncTree_,e,n),Cr(t.eventQueue_,e._path,r)}function Wn(t,e,n){var r;C(e._path)===".info"?r=Mn(t.infoSyncTree_,e,n):r=Mn(t.serverSyncTree_,e,n),Cr(t.eventQueue_,e._path,r)}function zo(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Go)}function rf(t){t.persistentConnection_&&t.persistentConnection_.resume(Go)}function of(t,e){if(e===void 0&&(e=!1),!(typeof console>"u")){var n;e?(t.statsListener_||(t.statsListener_=new yo(t.stats_)),n=t.statsListener_.get()):n=t.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);L(n,function(i,o){for(var a=i,s=i.length;s<r+2;s++)a+=" ";console.log(a+o)})}}function af(t,e){t.stats_.incrementCounter(e),Tu(t.statsReporter_,e)}function Ke(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r="";t.persistentConnection_&&(r=t.persistentConnection_.id+":"),F.apply(void 0,_e([r],U(e)))}function Ee(t,e,n,r){e&&Ye(function(){if(n==="ok")e(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var a=new Error(o);a.code=i,e(a)}})}function sf(t,e,n,r,i,o){Ke(t,"transaction on "+e);var a={path:e,update:n,onComplete:r,status:null,order:Mi(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},s=Sr(t,e,void 0);a.currentInputSnapshot=s;var u=a.update(s.val());if(u===void 0)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Ct("transaction failed: Data returned ",u,a.path),a.status=0;var l=Zt(t.transactionQueueTree_,e),f=Le(l)||[];f.push(a),mr(l,f);var c=void 0;if(typeof u=="object"&&u!==null&&j(u,".priority"))c=Pe(u,".priority"),v(ht(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=Xt(t.serverSyncTree_,e)||E.EMPTY_NODE;c=h.getPriority().val()}var d=wt(t),p=O(u,c),g=_r(p,s,d);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=g,a.currentWriteId=rn(t);var _=hr(t.serverSyncTree_,e,g,a.currentWriteId,a.applyLocally);K(t.eventQueue_,e,_),on(t,t.transactionQueueTree_)}}function Sr(t,e,n){return Xt(t.serverSyncTree_,e,n)||E.EMPTY_NODE}function on(t,e){if(e===void 0&&(e=t.transactionQueueTree_),e||an(t,e),Le(e)){var n=$o(t,e);v(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&uf(t,Et(e),n)}else Wo(e)&&en(e,function(i){on(t,i)})}function uf(t,e,n){for(var r=n.map(function(h){return h.currentWriteId}),i=Sr(t,e,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var l=V(e,u.path);o=o.updateChild(l,u.currentOutputSnapshotRaw)}var f=o.val(!0),c=e;t.server_.put(c.toString(),f,function(h){Ke(t,"transaction put response",{path:c.toString(),status:h});var d=[];if(h==="ok"){for(var p=[],g=function(y){n[y].status=2,d=d.concat(he(t.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&p.push(function(){return n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)}),n[y].unwatcher()},_=0;_<n.length;_++)g(_);an(t,Zt(t.transactionQueueTree_,e)),on(t,t.transactionQueueTree_),K(t.eventQueue_,e,d);for(var _=0;_<p.length;_++)Ye(p[_])}else{if(h==="datastale")for(var _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{W("transaction at "+c.toString()+" failed: "+h);for(var _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=h}je(t,e)}},a)}function je(t,e){var n=Yo(t,e),r=Et(n),i=$o(t,n);return lf(t,i,r),r}function lf(t,e,n){if(e.length!==0){for(var r=[],i=[],o=e.filter(function(l){return l.status===0}),a=o.map(function(l){return l.currentWriteId}),s=function(l){var f=e[l],c=V(n,f.path),h=!1,d;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)h=!0,d=f.abortReason,i=i.concat(he(t.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=jl)h=!0,d="maxretry",i=i.concat(he(t.serverSyncTree_,f.currentWriteId,!0));else{var p=Sr(t,f.path,a);f.currentInputSnapshot=p;var g=e[l].update(p.val());if(g!==void 0){Ct("transaction failed: Data returned ",g,f.path);var _=O(g),y=typeof g=="object"&&g!=null&&j(g,".priority");y||(_=_.updatePriority(p.getPriority()));var I=f.currentWriteId,x=wt(t),Me=_r(_,p,x);f.currentOutputSnapshotRaw=_,f.currentOutputSnapshotResolved=Me,f.currentWriteId=rn(t),a.splice(a.indexOf(I),1),i=i.concat(hr(t.serverSyncTree_,f.path,Me,f.currentWriteId,f.applyLocally)),i=i.concat(he(t.serverSyncTree_,I,!0))}else h=!0,d="nodata",i=i.concat(he(t.serverSyncTree_,f.currentWriteId,!0))}K(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(fn){setTimeout(fn,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(function(){return e[l].onComplete(null,!1,e[l].currentInputSnapshot)}):r.push(function(){return e[l].onComplete(new Error(d),!1,null)})))},u=0;u<e.length;u++)s(u);an(t,t.transactionQueueTree_);for(var u=0;u<r.length;u++)Ye(r[u]);on(t,t.transactionQueueTree_)}}function Yo(t,e){var n,r=t.transactionQueueTree_;for(n=C(e);n!==null&&Le(r)===void 0;)r=Zt(r,n),e=N(e),n=C(e);return r}function $o(t,e){var n=[];return qo(t,e,n),n.sort(function(r,i){return r.order-i.order}),n}function qo(t,e,n){var r=Le(e);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);en(e,function(o){qo(t,o,n)})}function an(t,e){var n=Le(e);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,mr(e,n.length>0?n:void 0)}en(e,function(o){an(t,o)})}function Ir(t,e){var n=Et(Yo(t,e)),r=Zt(t.transactionQueueTree_,e);return Dl(r,function(i){mn(t,i)}),mn(t,r),Bo(r,function(i){mn(t,i)}),n}function mn(t,e){var n=Le(e);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(v(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(v(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(he(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?mr(e,void 0):n.length=o+1,K(t.eventQueue_,Et(e),i);for(var a=0;a<r.length;a++)Ye(r[a])}}/**
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
 */function ff(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cf(t){var e,n,r={};t.charAt(0)==="?"&&(t=t.substring(1));try{for(var i=G(t.split("&")),o=i.next();!o.done;o=i.next()){var a=o.value;if(a.length!==0){var s=a.split("=");s.length===2?r[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):W("Invalid query segment '"+a+"' in query '"+t+"'")}}}catch(u){e={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}var Bn=function(t,e){var n=hf(t),r=n.namespace;n.domain==="firebase.com"&&ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ss();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qn(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new T(n.pathString)}},hf=function(t){var e="",n="",r="",i="",o="",a=!0,s="https",u=443;if(typeof t=="string"){var l=t.indexOf("//");l>=0&&(s=t.substring(0,l-1),t=t.substring(l+2));var f=t.indexOf("/");f===-1&&(f=t.length);var c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=ff(t.substring(f,c)));var h=cf(t.substring(Math.min(t.length,c)));l=e.indexOf(":"),l>=0?(a=s==="https"||s==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;var d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{var p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),o=r}"ns"in h&&(o=h.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}};/**
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
 */var Ko=function(){function t(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return t.prototype.getPath=function(){var e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())},t}(),Xo=function(){function t(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}();/**
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
 */var Jo=function(){function t(e,n){this.snapshotCallback=e,this.cancelCallback=n}return t.prototype.onValue=function(e,n){this.snapshotCallback.call(null,e,n)},t.prototype.onCancel=function(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)},Object.defineProperty(t.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),t.prototype.matches=function(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context},t}();/**
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
 */var df=function(){function t(e,n){this._repo=e,this._path=n}return t.prototype.cancel=function(){var e=new H;return Zl(this._repo,this._path,e.wrapCallback(function(){})),e.promise},t.prototype.remove=function(){q("OnDisconnect.remove",this._path);var e=new H;return li(this._repo,this._path,null,e.wrapCallback(function(){})),e.promise},t.prototype.set=function(e){q("OnDisconnect.set",this._path),ae("OnDisconnect.set",e,this._path,!1);var n=new H;return li(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t.prototype.setWithPriority=function(e,n){q("OnDisconnect.setWithPriority",this._path),ae("OnDisconnect.setWithPriority",e,this._path,!1),Er("OnDisconnect.setWithPriority",n,!1);var r=new H;return ef(this._repo,this._path,e,n,r.wrapCallback(function(){})),r.promise},t.prototype.update=function(e){q("OnDisconnect.update",this._path),Vo("OnDisconnect.update",e,this._path,!1);var n=new H;return tf(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t}();/**
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
 */var X=function(){function t(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(t.prototype,"key",{get:function(){return b(this._path)?null:Jn(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new se(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryIdentifier",{get:function(){var e=$r(this._queryParams),n=zn(e);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryObject",{get:function(){return $r(this._queryParams)},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){if(e=Y(e),!(e instanceof t))return!1;var n=this._repo===e._repo,r=Zn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i},t.prototype.toJSON=function(){return this.toString()},t.prototype.toString=function(){return this._repo.toString()+Gs(this._path)},t}();function sn(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ce(t){var e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===re){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){var o=t.getIndexStartName();if(o!==fe)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){var a=t.getIndexEndName();if(a!==oe)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===A){if(e!=null&&!ht(e)||n!=null&&!ht(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(v(t.getIndex()instanceof tr||t.getIndex()===nr,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function un(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var se=function(t){k(e,t);function e(n,r){return t.call(this,n,r,new go,!1)||this}return Object.defineProperty(e.prototype,"parent",{get:function(){var n=oo(this._path);return n===null?null:new e(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),e}(X),ln=function(){function t(e,n,r){this._node=e,this.ref=n,this._index=r}return Object.defineProperty(t.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),t.prototype.child=function(e){var n=new T(e),r=ke(this.ref,e);return new t(this._node.getChild(n),r,A)},t.prototype.exists=function(){return!this._node.isEmpty()},t.prototype.exportVal=function(){return this._node.val(!0)},t.prototype.forEach=function(e){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return e(new t(o,ke(n.ref,i),A))})},t.prototype.hasChild=function(e){var n=new T(e);return!this._node.getChild(n).isEmpty()},t.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},t.prototype.toJSON=function(){return this.exportVal()},t.prototype.val=function(){return this._node.val()},t}();function Zo(t,e){return t=Y(t),t._checkNotDeleted("ref"),e!==void 0?ke(t._root,e):t._root}function fi(t,e){t=Y(t),t._checkNotDeleted("refFromURL");var n=Bn(e,t._repo.repoInfo_.nodeAdmin);Ho("refFromURL",n);var r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&ie("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),Zo(t,n.path.toString())}function ke(t,e){return t=Y(t),C(t._path)===null?Vl("child","path",e,!1):dt("child","path",e,!1),new se(t._repo,P(t._path,e))}function pf(t,e){t=Y(t),q("push",t._path),ae("push",e,t._path,!0);var n=jo(t._repo),r=hu(n),i=ke(t,r),o=ke(t,r),a;return e!=null?a=Tr(o,e).then(function(){return o}):a=Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function vf(t){return q("remove",t._path),Tr(t,null)}function Tr(t,e){t=Y(t),q("set",t._path),ae("set",e,t._path,!1);var n=new H;return wr(t._repo,t._path,e,null,n.wrapCallback(function(){})),n.promise}function _f(t,e){t=Y(t),q("setPriority",t._path),Er("setPriority",e,!1);var n=new H;return wr(t._repo,P(t._path,".priority"),e,null,n.wrapCallback(function(){})),n.promise}function gf(t,e,n){if(q("setWithPriority",t._path),ae("setWithPriority",e,t._path,!1),Er("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";var r=new H;return wr(t._repo,t._path,e,n,r.wrapCallback(function(){})),r.promise}function yf(t,e){Vo("update",e,t._path,!1);var n=new H;return Xl(t._repo,t._path,e,n.wrapCallback(function(){})),n.promise}function mf(t){return t=Y(t),Kl(t._repo,t).then(function(e){return new ln(e,new se(t._repo,t._path),t._queryParams.getIndex())})}var ea=function(){function t(e){this.callbackContext=e}return t.prototype.respondsTo=function(e){return e==="value"},t.prototype.createEvent=function(e,n){var r=n._queryParams.getIndex();return new Ko("value",this,new ln(e.snapshotNode,new se(n._repo,n._path),r))},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,null)}},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Xo(this,e,n):null},t.prototype.matches=function(e){return e instanceof t?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1},t.prototype.hasAnyCallback=function(){return this.callbackContext!==null},t}(),ta=function(){function t(e,n){this.eventType=e,this.callbackContext=n}return t.prototype.respondsTo=function(e){var n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Xo(this,e,n):null},t.prototype.createEvent=function(e,n){v(e.childName!=null,"Child events should have a childName.");var r=ke(new se(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ko(e.type,this,new ln(e.snapshotNode,r,i),e.prevName)},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,e.prevName)}},t.prototype.matches=function(e){return e instanceof t?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1},t.prototype.hasAnyCallback=function(){return!!this.callbackContext},t}();function St(t,e,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var a=n,s=function(f,c){Wn(t._repo,t,l),a(f,c)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u=new Jo(n,o||void 0),l=e==="value"?new ea(u):new ta(e,u);return nf(t._repo,t,l),function(){return Wn(t._repo,t,l)}}function Un(t,e,n,r){return St(t,"value",e,n,r)}function ci(t,e,n,r){return St(t,"child_added",e,n,r)}function hi(t,e,n,r){return St(t,"child_changed",e,n,r)}function di(t,e,n,r){return St(t,"child_moved",e,n,r)}function pi(t,e,n,r){return St(t,"child_removed",e,n,r)}function vi(t,e,n){var r=null,i=n?new Jo(n):null;e==="value"?r=new ea(i):e&&(r=new ta(e,i)),Wn(t._repo,t,r)}var ne=function(){function t(){}return t}(),na=function(t){k(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){ae("endAt",this._value,n._path,!0);var r=Nn(n._queryParams,this._value,this._key);if(un(r),Ce(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new X(n._repo,n._path,r,n._orderByCalled)},e}(ne);function Ef(t,e){return bt("endAt","key",e,!0),new na(t,e)}var Cf=function(t){k(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){ae("endBefore",this._value,n._path,!1);var r=mu(n._queryParams,this._value,this._key);if(un(r),Ce(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new X(n._repo,n._path,r,n._orderByCalled)},e}(ne);function bf(t,e){return bt("endBefore","key",e,!0),new Cf(t,e)}var ra=function(t){k(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){ae("startAt",this._value,n._path,!0);var r=Rn(n._queryParams,this._value,this._key);if(un(r),Ce(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new X(n._repo,n._path,r,n._orderByCalled)},e}(ne);function wf(t,e){return t===void 0&&(t=null),bt("startAt","key",e,!0),new ra(t,e)}var Sf=function(t){k(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){ae("startAfter",this._value,n._path,!1);var r=yu(n._queryParams,this._value,this._key);if(un(r),Ce(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new X(n._repo,n._path,r,n._orderByCalled)},e}(ne);function If(t,e){return bt("startAfter","key",e,!0),new Sf(t,e)}var Tf=function(t){k(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new X(n._repo,n._path,_u(n._queryParams,this._limit),n._orderByCalled)},e}(ne);function Rf(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Tf(t)}var Nf=function(t){k(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new X(n._repo,n._path,gu(n._queryParams,this._limit),n._orderByCalled)},e}(ne);function Af(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Nf(t)}var Pf=function(t){k(e,t);function e(n){var r=t.call(this)||this;return r._path=n,r}return e.prototype._apply=function(n){sn(n,"orderByChild");var r=new T(this._path);if(b(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new tr(r),o=zt(n._queryParams,i);return Ce(o),new X(n._repo,n._path,o,!0)},e}(ne);function Of(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return dt("orderByChild","path",t,!1),new Pf(t)}var kf=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){sn(n,"orderByKey");var r=zt(n._queryParams,re);return Ce(r),new X(n._repo,n._path,r,!0)},e}(ne);function xf(){return new kf}var Df=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){sn(n,"orderByPriority");var r=zt(n._queryParams,A);return Ce(r),new X(n._repo,n._path,r,!0)},e}(ne);function Lf(){return new Df}var Mf=function(t){k(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){sn(n,"orderByValue");var r=zt(n._queryParams,nr);return Ce(r),new X(n._repo,n._path,r,!0)},e}(ne);function Ff(){return new Mf}var Wf=function(t){k(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){if(ae("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new na(this._value,this._key)._apply(new ra(this._value,this._key)._apply(n))},e}(ne);function Bf(t,e){return bt("equalTo","key",e,!0),new Wf(t,e)}function J(t){for(var e,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=Y(t);try{for(var a=G(r),s=a.next();!s.done;s=a.next()){var u=s.value;o=u._apply(o)}}catch(l){e={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o}ll(se);pl(se);/**
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
 */var Uf="FIREBASE_DATABASE_EMULATOR_HOST",Vn={},ia=!1;function Vf(t,e,n,r){t.repoInfo_=new qn(e+":"+n,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function oa(t,e,n,r,i){var o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");var a=Bn(o,i),s=a.repoInfo,u,l=void 0;typeof process<"u"&&(l=process.env[Uf]),l?(u=!0,o="http://"+l+"?ns="+s.namespace,a=Bn(o,i),s=a.repoInfo):u=!a.repoInfo.secure;var f=i&&u?new nt(nt.OWNER):new _s(t.name,t.options,e);Ho("Invalid Firebase Database URL",a),b(a.path)||ie("Database URL must point to the root of a Firebase Database (not including a child path).");var c=Qf(s,t,f,new vs(t.name,n));return new jf(c,t)}function Hf(t,e){var n=Vn[e];(!n||n[t.key]!==t)&&ie("Database "+e+"("+t.repoInfo_+") has already been deleted."),zo(t),delete n[t.key]}function Qf(t,e,n,r){var i=Vn[e.name];i||(i={},Vn[e.name]=i);var o=i[t.toURLString()];return o&&ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new zl(t,ia,n,r),i[t.toURLString()]=o,o}function Gf(t){ia=t}var jf=function(){function t(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(t.prototype,"_repo",{get:function(){return this._instanceStarted||(Yl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new se(this._repo,S())),this._rootInternal},enumerable:!1,configurable:!0}),t.prototype._delete=function(){return this._rootInternal!==null&&(Hf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},t.prototype._checkNotDeleted=function(e){this._rootInternal===null&&ie("Cannot call "+e+" on a deleted database.")},t}();function zf(t,e,n,r){r===void 0&&(r={}),t=Y(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ie("Cannot call useEmulator() after instance has already been initialized.");var i=t._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new nt(nt.OWNER);else if(r.mockUserToken){var a=typeof r.mockUserToken=="string"?r.mockUserToken:ca(r.mockUserToken,t.app.options.projectId);o=new nt(a)}Vf(i,e,n,o)}function Yf(t){t=Y(t),t._checkNotDeleted("goOffline"),zo(t._repo)}function $f(t){t=Y(t),t._checkNotDeleted("goOnline"),rf(t._repo)}/**
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
 */var qf={".sv":"timestamp"};function Kf(){return qf}function Xf(t){return{".sv":{increment:t}}}/**
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
 */var Jf=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();function Zf(t,e,n){var r;if(t=Y(t),q("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new H,a=function(u,l,f){var c=null;u?o.reject(u):(c=new ln(f,new se(t._repo,t._path),A),o.resolve(new Jf(l,c)))},s=Un(t,function(){});return sf(t._repo,t._path,e,a,s,i),o.promise}/**
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
 */var ec=function(){function t(e){this._delegate=e}return t.prototype.cancel=function(e){m("OnDisconnect.cancel",0,1,arguments.length),M("OnDisconnect.cancel","onComplete",e,!0);var n=this._delegate.cancel();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.remove=function(e){m("OnDisconnect.remove",0,1,arguments.length),M("OnDisconnect.remove","onComplete",e,!0);var n=this._delegate.remove();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.set=function(e,n){m("OnDisconnect.set",1,2,arguments.length),M("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(e);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.setWithPriority=function(e,n,r){m("OnDisconnect.setWithPriority",2,3,arguments.length),M("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(e,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(e,n){if(m("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){for(var r={},i=0;i<e.length;++i)r[""+i]=e[i];e=r,W("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}M("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(e);return n&&o.then(function(){return n(null)},function(a){return n(a)}),o},t}();/**
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
 */var tc=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return m("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();/**
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
 */var at=function(){function t(e,n){this._database=e,this._delegate=n}return t.prototype.val=function(){return m("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},t.prototype.exportVal=function(){return m("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},t.prototype.toJSON=function(){return m("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.exists=function(){return m("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},t.prototype.child=function(e){return m("DataSnapshot.child",0,1,arguments.length),e=String(e),dt("DataSnapshot.child","path",e,!1),new t(this._database,this._delegate.child(e))},t.prototype.hasChild=function(e){return m("DataSnapshot.hasChild",1,1,arguments.length),dt("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)},t.prototype.getPriority=function(){return m("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},t.prototype.forEach=function(e){var n=this;return m("DataSnapshot.forEach",1,1,arguments.length),M("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(function(r){return e(new t(n._database,r))})},t.prototype.hasChildren=function(){return m("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(t.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),t.prototype.numChildren=function(){return m("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},t.prototype.getRef=function(){return m("DataSnapshot.ref",0,0,arguments.length),new Re(this._database,this._delegate.ref)},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),t}(),aa=function(){function t(e,n){this.database=e,this._delegate=n}return t.prototype.on=function(e,n,r,i){var o=this,a;m("Query.on",2,4,arguments.length),M("Query.on","callback",n,!1);var s=t.getCancelAndContextArgs_("Query.on",r,i),u=function(f,c){n.call(s.context,new at(o.database,f),c)};u.userCallback=n,u.context=s.context;var l=(a=s.cancel)===null||a===void 0?void 0:a.bind(s.context);switch(e){case"value":return Un(this._delegate,u,l),n;case"child_added":return ci(this._delegate,u,l),n;case"child_removed":return pi(this._delegate,u,l),n;case"child_changed":return hi(this._delegate,u,l),n;case"child_moved":return di(this._delegate,u,l),n;default:throw new Error(Q("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},t.prototype.off=function(e,n,r){if(m("Query.off",0,3,arguments.length),Ul("Query.off",e,!0),M("Query.off","callback",n,!0),Ar("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,vi(this._delegate,e,i)}else vi(this._delegate,e)},t.prototype.get=function(){var e=this;return mf(this._delegate).then(function(n){return new at(e.database,n)})},t.prototype.once=function(e,n,r,i){var o=this;m("Query.once",1,4,arguments.length),M("Query.once","callback",n,!0);var a=t.getCancelAndContextArgs_("Query.once",r,i),s=new H,u=function(f,c){var h=new at(o.database,f);n&&n.call(a.context,h,c),s.resolve(h)};u.userCallback=n,u.context=a.context;var l=function(f){a.cancel&&a.cancel.call(a.context,f),s.reject(f)};switch(e){case"value":Un(this._delegate,u,l,{onlyOnce:!0});break;case"child_added":ci(this._delegate,u,l,{onlyOnce:!0});break;case"child_removed":pi(this._delegate,u,l,{onlyOnce:!0});break;case"child_changed":hi(this._delegate,u,l,{onlyOnce:!0});break;case"child_moved":di(this._delegate,u,l,{onlyOnce:!0});break;default:throw new Error(Q("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise},t.prototype.limitToFirst=function(e){return m("Query.limitToFirst",1,1,arguments.length),new t(this.database,J(this._delegate,Rf(e)))},t.prototype.limitToLast=function(e){return m("Query.limitToLast",1,1,arguments.length),new t(this.database,J(this._delegate,Af(e)))},t.prototype.orderByChild=function(e){return m("Query.orderByChild",1,1,arguments.length),new t(this.database,J(this._delegate,Of(e)))},t.prototype.orderByKey=function(){return m("Query.orderByKey",0,0,arguments.length),new t(this.database,J(this._delegate,xf()))},t.prototype.orderByPriority=function(){return m("Query.orderByPriority",0,0,arguments.length),new t(this.database,J(this._delegate,Lf()))},t.prototype.orderByValue=function(){return m("Query.orderByValue",0,0,arguments.length),new t(this.database,J(this._delegate,Ff()))},t.prototype.startAt=function(e,n){return e===void 0&&(e=null),m("Query.startAt",0,2,arguments.length),new t(this.database,J(this._delegate,wf(e,n)))},t.prototype.startAfter=function(e,n){return e===void 0&&(e=null),m("Query.startAfter",0,2,arguments.length),new t(this.database,J(this._delegate,If(e,n)))},t.prototype.endAt=function(e,n){return e===void 0&&(e=null),m("Query.endAt",0,2,arguments.length),new t(this.database,J(this._delegate,Ef(e,n)))},t.prototype.endBefore=function(e,n){return e===void 0&&(e=null),m("Query.endBefore",0,2,arguments.length),new t(this.database,J(this._delegate,bf(e,n)))},t.prototype.equalTo=function(e,n){return m("Query.equalTo",1,2,arguments.length),new t(this.database,J(this._delegate,Bf(e,n)))},t.prototype.toString=function(){return m("Query.toString",0,0,arguments.length),this._delegate.toString()},t.prototype.toJSON=function(){return m("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.isEqual=function(e){if(m("Query.isEqual",1,1,arguments.length),!(e instanceof t)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)},t.getCancelAndContextArgs_=function(e,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,M(e,"cancel",i.cancel,!0),i.context=r,Ar(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Q(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(t.prototype,"ref",{get:function(){return new Re(this.database,new se(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),t}(),Re=function(t){k(e,t);function e(n,r){var i=t.call(this,n,new X(r._repo,r._path,new go,!1))||this;return i.database=n,i._delegate=r,i}return e.prototype.getKey=function(){return m("Reference.key",0,0,arguments.length),this._delegate.key},e.prototype.child=function(n){return m("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new e(this.database,ke(this._delegate,n))},e.prototype.getParent=function(){m("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new e(this.database,n):null},e.prototype.getRoot=function(){return m("Reference.root",0,0,arguments.length),new e(this.database,this._delegate.root)},e.prototype.set=function(n,r){m("Reference.set",1,2,arguments.length),M("Reference.set","onComplete",r,!0);var i=Tr(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(n,r){if(m("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,W("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}q("Reference.update",this._delegate._path),M("Reference.update","onComplete",r,!0);var a=yf(this._delegate,n);return r&&a.then(function(){return r(null)},function(s){return r(s)}),a},e.prototype.setWithPriority=function(n,r,i){m("Reference.setWithPriority",2,3,arguments.length),M("Reference.setWithPriority","onComplete",i,!0);var o=gf(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(a){return i(a)}),o},e.prototype.remove=function(n){m("Reference.remove",0,1,arguments.length),M("Reference.remove","onComplete",n,!0);var r=vf(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.transaction=function(n,r,i){var o=this;m("Reference.transaction",1,3,arguments.length),M("Reference.transaction","transactionUpdate",n,!1),M("Reference.transaction","onComplete",r,!0),Hl("Reference.transaction","applyLocally",i,!0);var a=Zf(this._delegate,n,{applyLocally:i}).then(function(s){return new tc(s.committed,new at(o.database,s.snapshot))});return r&&a.then(function(s){return r(null,s.committed,s.snapshot)},function(s){return r(s,!1,null)}),a},e.prototype.setPriority=function(n,r){m("Reference.setPriority",1,2,arguments.length),M("Reference.setPriority","onComplete",r,!0);var i=_f(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.push=function(n,r){var i=this;m("Reference.push",0,2,arguments.length),M("Reference.push","onComplete",r,!0);var o=pf(this._delegate,n),a=o.then(function(u){return new e(i.database,u)});r&&a.then(function(){return r(null)},function(u){return r(u)});var s=new e(this.database,o);return s.then=a.then.bind(a),s.catch=a.catch.bind(a,void 0),s},e.prototype.onDisconnect=function(){return q("Reference.onDisconnect",this._delegate._path),new ec(new df(this._delegate._repo,this._delegate._path))},Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),e}(aa);/**
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
 */var Ht=function(){function t(e,n){var r=this;this._delegate=e,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return t.prototype.useEmulator=function(e,n,r){r===void 0&&(r={}),zf(this._delegate,e,n,r)},t.prototype.ref=function(e){if(m("database.ref",0,1,arguments.length),e instanceof Re){var n=fi(this._delegate,e.toString());return new Re(this,n)}else{var n=Zo(this._delegate,e);return new Re(this,n)}},t.prototype.refFromURL=function(e){var n="database.refFromURL";m(n,1,1,arguments.length);var r=fi(this._delegate,e);return new Re(this,r)},t.prototype.goOffline=function(){return m("database.goOffline",0,0,arguments.length),Yf(this._delegate)},t.prototype.goOnline=function(){return m("database.goOnline",0,0,arguments.length),$f(this._delegate)},t.ServerValue={TIMESTAMP:Kf(),increment:function(e){return Xf(e)}},t}();/**
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
 */var nc=function(){Ie.forceDisallow(),Xn.forceAllow()},rc=function(){Xn.forceDisallow()},ic=function(){return Ie.isAvailable()},oc=function(t,e){var n=t._delegate._repo.persistentConnection_;n.securityDebugCallback_=e},ac=function(t,e){of(t._delegate._repo,e)},sc=function(t,e){af(t._delegate._repo,e)},uc=function(t){return t._delegate._repo.dataUpdateCount},lc=function(t,e){return $l(t._delegate._repo,e)};function fc(t){var e=t.app,n=t.url,r=t.version,i=t.customAuthImpl,o=t.namespace,a=t.nodeAdmin,s=a===void 0?!1:a;Di(r);var u=new Ti("auth-internal",new Ri("database-standalone"));return u.setComponent(new pt("auth-internal",function(){return i},"PRIVATE")),{instance:new Ht(oa(e,u,void 0,n,s),e),namespace:o}}var cc=Object.freeze({__proto__:null,forceLongPolling:nc,forceWebSockets:rc,isWebSocketsAvailable:ic,setSecurityDebugCallback:oc,stats:ac,statsIncrementCounter:sc,dataUpdateCount:uc,interceptServerData:lc,initStandalone:fc});/**
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
 */var hc=Ae;Ae.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ae.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};var dc=no,pc=function(t){var e=Ae.prototype.put;return Ae.prototype.put=function(n,r,i,o){o!==void 0&&(o=t()),e.call(this,n,r,i,o)},function(){Ae.prototype.put=e}},vc=qn,_c=function(t){return t._delegate._queryIdentifier},gc=function(t){Gf(t)},yc=Object.freeze({__proto__:null,DataConnection:hc,RealTimeConnection:dc,hijackHash:pc,ConnectionTarget:vc,queryIdentifier:_c,forceRestClient:gc});/**
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
 */var mc=Ht.ServerValue;function Ec(t){Di(t.SDK_VERSION),t.INTERNAL.registerComponent(new pt("database",function(e,n){var r=n.instanceIdentifier,i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new Ht(oa(i,o,a,r),i)},"PUBLIC").setServiceProps({Reference:Re,Query:aa,Database:Ht,DataSnapshot:at,enableLogging:Wi,INTERNAL:cc,ServerValue:mc,TEST_ACCESS:yc}).setMultipleInstances(!0)),t.registerVersion(rs,is)}Ec(vt);const Cc={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},bc=vt.initializeApp(Cc),_i=bc.database();function Sc(){const t=ua();if(t.user.uid=="")return;_i.ref("users/"+t.user.uid+"/user_data").set({device:t.user.device,concentration_before:t.user.concentration_before,concentration_after:t.user.concentration_after,age_group:t.user.age_group,dyslexia:t.user.dyslexia,dyscalculia:t.user.dyscalculia,study_group:t.user.study_group});const e=t.user.trials;for(let n=0;n<e.size;n++){const r=e.get(n),i=n<10?"0":"";_i.ref("users/"+t.user.uid+"/trials/trial_"+i+n).set({correct_img:r.correct_img,clicked_img:r.clicked_img,is_user_right:r.is_user_right,time:r.time})}}export{Sc as w};
