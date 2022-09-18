import{g as ts,r as G,b as ns,w as bt,i as Vn,d as cr,e as rs,f as x,h as is,j as os,p as Xr,u as R,k as Jr,n as Zr,l as as,_ as ss,m as ft,o as us,c as ls,a as T,q as cs,s as F,t as ce,v as fs,x as hs,y as ds,z as Yi}from"./index.76c3e042.js";function ei(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=R(t[r])),n),{})}function zt(t){return typeof t=="function"}function ps(t){return is(t)||os(t)}function qi(t,e,n){let r=t;const i=e.split(".");for(let o=0;o<i.length;o++){if(!r[i[o]])return n;r=r[i[o]]}return r}function Pn(t,e,n){return x(()=>t.some(r=>qi(e,r,{[n]:!1})[n]))}function ti(t,e,n){return x(()=>t.reduce((r,i)=>{const o=qi(e,i,{[n]:!1})[n]||[];return r.concat(o)},[]))}function Ki(t,e,n,r){return t.call(r,R(e),R(n),r)}function Xi(t){return t.$valid!==void 0?!t.$valid:!t}function vs(t,e,n,r,i,o,a){let{$lazy:s,$rewardEarly:u}=i,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const d=G(!!r.value),p=G(0);n.value=!1;const _=bt([e,r].concat(l,h),()=>{if(s&&!r.value||u&&!f.value&&!n.value)return;let v;try{v=Ki(t,e,c,a)}catch(y){v=Promise.reject(y)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(v).then(y=>{p.value--,n.value=!!p.value,o.value=y,d.value=Xi(y)}).catch(y=>{p.value--,n.value=!!p.value,o.value=y,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:_}}function _s(t,e,n,r,i,o,a,s){let{$lazy:u,$rewardEarly:l}=r;const c=()=>({}),f=x(()=>{if(u&&!n.value||l&&!s.value)return!1;let h=!0;try{const d=Ki(t,e,a,o);i.value=d,h=Xi(d)}catch(d){i.value=d}return h});return{$unwatch:c,$invalid:f}}function gs(t,e,n,r,i,o,a,s,u,l,c){const f=G(!1),h=t.$params||{},d=G(null);let p,_;t.$async?{$invalid:p,$unwatch:_}=vs(t.$validator,e,f,n,r,d,i,t.$watchTargets,u,l,c):{$invalid:p,$unwatch:_}=_s(t.$validator,e,n,r,d,i,u,l);const v=t.$message;return{$message:zt(v)?x(()=>v(ei({$pending:f,$invalid:p,$params:ei(h),$model:e,$response:d,$validator:o,$propertyPath:s,$property:a}))):v||"",$params:h,$pending:f,$invalid:p,$response:d,$unwatch:_}}function ys(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=R(t),n=Object.keys(e),r={},i={},o={};let a=null;return n.forEach(s=>{const u=e[s];switch(!0){case zt(u.$validator):r[s]=u;break;case zt(u):r[s]={$validator:u};break;case s==="$validationGroups":a=u;break;case s.startsWith("$"):o[s]=u;break;default:i[s]=u}}),{rules:r,nestedValidators:i,config:o,validationGroups:a}}function ms(){}const Es="__root";function Ji(t,e,n){if(n)return e?e(t()):t();try{var r=Promise.resolve(t());return e?r.then(e):r}catch(i){return Promise.reject(i)}}function Cs(t,e){return Ji(t,ms,e)}function bs(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function ws(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(r){return Promise.reject(r)}}}function Ss(t,e,n,r,i,o,a,s,u){const l=Object.keys(t),c=r.get(i,t),f=G(!1),h=G(!1),d=G(0);if(c){if(!c.$partial)return c;c.$unwatch(),f.value=c.$dirty.value}const p={$dirty:f,$path:i,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return l.length?(l.forEach(_=>{p[_]=gs(t[_],e,p.$dirty,o,a,_,n,i,u,h,d)}),p.$externalResults=x(()=>s.value?[].concat(s.value).map((_,v)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${v}`,$message:_,$params:{},$response:null,$pending:!1})):[]),p.$invalid=x(()=>{const _=l.some(v=>R(p[v].$invalid));return h.value=_,!!p.$externalResults.value.length||_}),p.$pending=x(()=>l.some(_=>R(p[_].$pending))),p.$error=x(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=x(()=>l.filter(_=>R(p[_].$invalid)).map(_=>{const v=p[_];return cr({$propertyPath:i,$property:n,$validator:_,$uid:`${i}-${_}`,$message:v.$message,$params:v.$params,$response:v.$response,$pending:v.$pending})}).concat(p.$externalResults.value)),p.$errors=x(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>l.forEach(_=>{p[_].$unwatch()}),p.$commit=()=>{h.value=!0,d.value=Date.now()},r.set(i,t,p),p):(c&&r.set(i,t,p),p)}function Is(t,e,n,r,i,o,a){const s=Object.keys(t);return s.length?s.reduce((u,l)=>(u[l]=Bn({validations:t[l],state:e,key:l,parentKey:n,resultsCache:r,globalConfig:i,instance:o,externalResults:a}),u),{}):{}}function Ts(t,e,n){const r=x(()=>[e,n].filter(p=>p).reduce((p,_)=>p.concat(Object.values(R(_))),[])),i=x({get(){return t.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){t.$dirty.value=p}}),o=x(()=>{const p=R(t.$silentErrors)||[],_=r.value.filter(v=>(R(v).$silentErrors||[]).length).reduce((v,y)=>v.concat(...y.$silentErrors),[]);return p.concat(_)}),a=x(()=>{const p=R(t.$errors)||[],_=r.value.filter(v=>(R(v).$errors||[]).length).reduce((v,y)=>v.concat(...y.$errors),[]);return p.concat(_)}),s=x(()=>r.value.some(p=>p.$invalid)||R(t.$invalid)||!1),u=x(()=>r.value.some(p=>R(p.$pending))||R(t.$pending)||!1),l=x(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||i.value),c=x(()=>i.value?u.value||s.value:!1),f=()=>{t.$touch(),r.value.forEach(p=>{p.$touch()})},h=()=>{t.$commit(),r.value.forEach(p=>{p.$commit()})},d=()=>{t.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&f(),{$dirty:i,$errors:a,$invalid:s,$anyDirty:l,$error:c,$pending:u,$touch:f,$reset:d,$silentErrors:o,$commit:h}}function Bn(t){const e=ws(function(){return On(),bs(function(){if(v.$rewardEarly)return Kr(),Cs(Zr)},function(){return Ji(Zr,function(){return new Promise($=>{if(!An.value)return $(!Nn.value);const xe=bt(An,()=>{$(!Nn.value),xe()})})})})});let{validations:n,state:r,key:i,parentKey:o,childResults:a,resultsCache:s,globalConfig:u={},instance:l,externalResults:c}=t;const f=o?`${o}.${i}`:i,{rules:h,nestedValidators:d,config:p,validationGroups:_}=ys(n),v=Object.assign({},u,p),y=i?x(()=>{const $=R(r);return $?R($[i]):void 0}):r,w=Object.assign({},R(c)||{}),D=x(()=>{const $=R(c);return i?$?R($[i]):void 0:$}),_e=Ss(h,y,i,s,f,v,l,D,r),ie=Is(d,y,f,s,v,l,D),Ye={};_&&Object.entries(_).forEach($=>{let[xe,Ee]=$;Ye[xe]={$invalid:Pn(Ee,ie,"$invalid"),$error:Pn(Ee,ie,"$error"),$pending:Pn(Ee,ie,"$pending"),$errors:ti(Ee,ie,"$errors"),$silentErrors:ti(Ee,ie,"$silentErrors")}});const{$dirty:ct,$errors:Qa,$invalid:Nn,$anyDirty:Ya,$error:qa,$pending:An,$touch:On,$reset:Ka,$silentErrors:Xa,$commit:Kr}=Ts(_e,ie,a),Ja=i?x({get:()=>R(y),set:$=>{ct.value=!0;const xe=R(r),Ee=R(c);Ee&&(Ee[i]=w[i]),Vn(xe[i])?xe[i].value=$:xe[i]=$}}):null;i&&v.$autoDirty&&bt(y,()=>{ct.value||On();const $=R(c);$&&($[i]=w[i])},{flush:"sync"});function Za($){return(a.value||{})[$]}function es(){Vn(c)?c.value=w:Object.keys(w).length===0?Object.keys(c).forEach($=>{delete c[$]}):Object.assign(c,w)}return cr(Object.assign({},_e,{$model:Ja,$dirty:ct,$error:qa,$errors:Qa,$invalid:Nn,$anyDirty:Ya,$pending:An,$touch:On,$reset:Ka,$path:f||Es,$silentErrors:Xa,$validate:e,$commit:Kr},a&&{$getResultsForChild:Za,$clearExternalResults:es,$validationGroups:Ye},ie))}class Rs{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const i=Object.keys(r),o=Object.keys(n);return o.length!==i.length||!o.every(s=>i.includes(s))?!1:o.every(s=>n[s].$params?Object.keys(n[s].$params).every(u=>R(r[s].$params[u])===R(n[s].$params[u])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:i,result:o}=r,a=this.checkRulesValidity(e,n,i),s=o.$unwatch?o.$unwatch:()=>({});return a?o:{$dirty:o.$dirty,$partial:!0,$unwatch:s}}}const Gt={COLLECT_ALL:!0,COLLECT_NONE:!1},ni=Symbol("vuelidate#injectChildResults"),ri=Symbol("vuelidate#removeChildResults");function Ns(t){let{$scope:e,instance:n}=t;const r={},i=G([]),o=x(()=>i.value.reduce((c,f)=>(c[f]=R(r[f]),c),{}));function a(c,f){let{$registerAs:h,$scope:d,$stopPropagation:p}=f;p||e===Gt.COLLECT_NONE||d===Gt.COLLECT_NONE||e!==Gt.COLLECT_ALL&&e!==d||(r[h]=c,i.value.push(h))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],a);function s(c){i.value=i.value.filter(f=>f!==c),delete r[c]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],s);const u=Jr(ni,[]);Xr(ni,n.__vuelidateInjectInstances);const l=Jr(ri,[]);return Xr(ri,n.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:u,removeValidationResultsFromParent:l}}function Zi(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?Zi(e[n]):x(()=>e[n])}})}let ii=0;function As(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:i,$scope:o=Gt.COLLECT_ALL,$stopPropagation:a,$externalResults:s,currentVueInstance:u}=r;const l=u||((n=ts())===null||n===void 0?void 0:n.proxy),c=l?l.$options:{};i||(ii+=1,i=`_vuelidate_${ii}`);const f=G({}),h=new Rs,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:_}=l?Ns({$scope:o,instance:l}):{childResults:G({})};if(!t&&c.validations){const v=c.validations;e=G({}),ns(()=>{e.value=l,bt(()=>zt(v)?v.call(e.value,new Zi(e.value)):v,y=>{f.value=Bn({validations:y,state:e,childResults:d,resultsCache:h,globalConfig:r,instance:l,externalResults:s||l.vuelidateExternalResults})},{immediate:!0})}),r=c.validationsConfig||r}else{const v=Vn(t)||ps(t)?t:cr(t||{});bt(v,y=>{f.value=Bn({validations:y,state:e,childResults:d,resultsCache:h,globalConfig:r,instance:l!=null?l:{},externalResults:s})},{immediate:!0})}return l&&(p.forEach(v=>v(f,{$registerAs:i,$scope:o,$stopPropagation:a})),rs(()=>_.forEach(v=>v(i)))),x(()=>Object.assign({},R(f.value),d.value))}const eo=t=>{if(t=R(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length};function je(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=R(r),!eo(r)||e.every(i=>i.test(r)))}je(/^[a-zA-Z]*$/);je(/^[a-zA-Z0-9]*$/);je(/^\d*(\.\d+)?$/);const Os=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;je(Os);function Ps(t){return typeof t=="string"&&(t=t.trim()),eo(t)}var qe={$validator:Ps,$message:"Value is required",$params:{type:"required"}};const xs=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;je(xs);je(/(^[0-9]*$)|(^-[0-9]+$)/);je(/^[-]?\d*(\.\d+)?$/);const to=as("datastore",()=>({uid:G(),device:G(),concentration:G(),ageGroup:G(),dyslexia:G(),dyscalculia:G()}));var Un=function(t,e){return Un=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Un(t,e)};function M(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Un(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ie=function(){return Ie=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ie.apply(this,arguments)};function no(t,e,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(c){try{l(r.next(c))}catch(f){a(f)}}function u(c){try{l(r.throw(c))}catch(f){a(f)}}function l(c){c.done?o(c.value):i(c.value).then(s,u)}l((r=r.apply(t,e||[])).next())})}function ro(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function K(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function H(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],a;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function Te(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g=function(t,e){if(!t)throw ot(e)},ot=function(t){return new Error("Firebase Database ("+io.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oo=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ks=function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=t[n++],a=t[n++],s=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{var o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],a=i+1<t.length,s=a?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4,h=(s&15)<<2|l>>6,d=l&63;u||(d=64,a||(h=64)),r.push(n[c],n[f],n[h],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oo(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ks(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],a=i<t.length,s=a?n[t.charAt(i)]:0;++i;var u=i<t.length,l=u?n[t.charAt(i)]:64;++i;var c=i<t.length,f=c?n[t.charAt(i)]:64;if(++i,o==null||s==null||l==null||f==null)throw Error();var h=o<<2|s>>4;if(r.push(h),l!==64){var d=s<<4&240|l>>2;if(r.push(d),f!==64){var p=l<<6&192|f;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ao=function(t){var e=oo(t);return fr.encodeByteArray(e,!0)},oi=function(t){return ao(t).replace(/\./g,"")},ai=function(t){try{return fr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return wt(void 0,t)}function wt(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)!e.hasOwnProperty(r)||!Ds(r)||(t[r]=wt(t[r],e[r]));return t}function Ds(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})}return t.prototype.wrapCallback=function(e){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(r):e(r,i))}},t}();/**
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
 */function Ls(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Ie({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),s="";return[oi(JSON.stringify(n)),oi(JSON.stringify(a)),s].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ms())}function Fs(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $s(){return typeof self=="object"&&self.self===self}function Ws(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lo(){return io.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vs="FirebaseError",Bs=function(t){M(e,t);function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=Vs,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,hr.prototype.create),o}return e}(Error),hr=function(){function t(e,n,r){this.service=e,this.serviceName=n,this.errors=r}return t.prototype.create=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+e,a=this.errors[e],s=a?Us(a,i):"Error",u=this.serviceName+": "+s+" ("+o+").",l=new Bs(o,u,i);return l},t}();function Us(t,e){return t.replace(Gs,function(n,r){var i=e[r];return i!=null?String(i):"<"+r+"?>"})}var Gs=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return JSON.parse(t)}function W(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var co=function(t){var e={},n={},r={},i="";try{var o=t.split(".");e=St(ai(o[0])||""),n=St(ai(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},js=function(t){var e=co(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zs=function(t){var e=co(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Be(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gn(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ht(t,e,n){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){for(var e=[],n=function(u,l){Array.isArray(l)?l.forEach(function(c){e.push(encodeURIComponent(u)+"="+encodeURIComponent(c))}):e.push(encodeURIComponent(u)+"="+encodeURIComponent(l))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],a=o[0],s=o[1];n(a,s)}return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qs=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,n){n||(n=0);var r=this.W_;if(typeof e=="string")for(var i=0;i<16;i++)r[i]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var a=this.chain_[0],s=this.chain_[1],u=this.chain_[2],l=this.chain_[3],c=this.chain_[4],f,h,i=0;i<80;i++){i<40?i<20?(f=l^s&(u^l),h=1518500249):(f=s^u^l,h=1859775393):i<60?(f=s&u|l&(s|u),h=2400959708):(f=s^u^l,h=3395469782);var o=(a<<5|a>>>27)+f+c+h+r[i]&4294967295;c=l,l=u,u=(s<<30|s>>>2)&4294967295,s=a,a=o}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},t.prototype.update=function(e,n){if(e!=null){n===void 0&&(n=e.length);for(var r=n-this.blockSize,i=0,o=this.buf_,a=this.inbuf_;i<n;){if(a===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}else for(;i<n;)if(o[a]=e[i],++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=n}},t.prototype.digest=function(){var e=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e},t}();function Ys(t,e){var n=new qs(t,e);return n.subscribe.bind(n)}var qs=function(){function t(e,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(r)}).catch(function(i){r.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,r){var i=this,o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ks(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=xn),o.error===void 0&&(o.error=xn),o.complete===void 0&&(o.complete=xn);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),a},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[e]!==void 0)try{n(r.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function Ks(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&typeof t[i]=="function")return!0}return!1}function xn(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(t,e,n,r){var i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){var o=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function q(t,e){return t+" failed: "+e+" argument "}function B(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(q(t,e)+"must be a valid function.")}function si(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(q(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xs=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,g(r<t.length,"Surrogate pair missing trail surrogate.");var a=t.charCodeAt(r)-56320;i=65536+(o<<10)+a}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},un=function(t){for(var e=0,n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Z(t){return t&&t._delegate?t._delegate:t}var Ot=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var De="[DEFAULT]";/**
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
 */var fo=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new Y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Zs(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}try{for(var i=K(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=H(o.value,2),s=a[0],u=a[1],l=this.normalizeInstanceIdentifier(s);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(f){n={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=De),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return no(this,void 0,void 0,function(){var e;return ro(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Te(Te([],H(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),H(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=De),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=De),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,o=i===void 0?{}:i,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=K(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=H(l.value,2),f=c[0],h=c[1],d=this.normalizeInstanceIdentifier(f);a===d&&h.resolve(s)}}catch(p){n={error:p}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return s},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);var a=this.instances.get(i);return a&&e(a,i),function(){o.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,o=this.onInitCallbacks.get(n);if(!!o)try{for(var a=K(o),s=a.next();!s.done;s=a.next()){var u=s.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Js(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=De),this.component?this.component.multipleInstances?e:De:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Js(t){return t===De?void 0:t}function Zs(t){return t.instantiationMode==="EAGER"}/**
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
 */var ho=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new fo(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
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
***************************************************************************** */function ae(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,dr=[],A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));var po={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},eu=A.INFO,tu=(ke={},ke[A.DEBUG]="log",ke[A.VERBOSE]="log",ke[A.INFO]="info",ke[A.WARN]="warn",ke[A.ERROR]="error",ke),nu=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=new Date().toISOString(),o=tu[e];if(o)console[o].apply(console,ae(["["+i+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},vo=function(){function t(e){this.name=e,this._logLevel=eu,this._logHandler=nu,this._userLogHandler=null,dr.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in A))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?po[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ae([this,A.DEBUG],e)),this._logHandler.apply(this,ae([this,A.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ae([this,A.VERBOSE],e)),this._logHandler.apply(this,ae([this,A.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ae([this,A.INFO],e)),this._logHandler.apply(this,ae([this,A.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ae([this,A.WARN],e)),this._logHandler.apply(this,ae([this,A.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ae([this,A.ERROR],e)),this._logHandler.apply(this,ae([this,A.ERROR],e))},t}();function ru(t){dr.forEach(function(e){e.setLogLevel(t)})}function iu(t,e){for(var n=function(a){var s=null;e&&e.level&&(s=po[e.level]),t===null?a.userLogHandler=null:a.userLogHandler=function(u,l){for(var c=[],f=2;f<arguments.length;f++)c[f-2]=arguments[f];var h=c.map(function(d){if(d==null)return null;if(typeof d=="string")return d;if(typeof d=="number"||typeof d=="boolean")return d.toString();if(d instanceof Error)return d.message;try{return JSON.stringify(d)}catch{return null}}).filter(function(d){return d}).join(" ");l>=(s!=null?s:u.logLevel)&&t({level:A[l].toLowerCase(),message:h,args:c,type:u.name})}},r=0,i=dr;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */var Ce,ou=(Ce={},Ce["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",Ce["bad-app-name"]="Illegal App name: '{$appName}",Ce["duplicate-app"]="Firebase App named '{$appName}' already exists",Ce["app-deleted"]="Firebase App named '{$appName}' already deleted",Ce["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Ce["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Ce),Xe=new hr("app","Firebase",ou),_o="@firebase/app",au="0.6.30",su="@firebase/analytics",uu="@firebase/app-check",lu="@firebase/auth",cu="@firebase/database",fu="@firebase/functions",hu="@firebase/installations",du="@firebase/messaging",pu="@firebase/performance",vu="@firebase/remote-config",_u="@firebase/storage",gu="@firebase/firestore",yu="firebase-wrapper";/**
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
 */var z,Qt="[DEFAULT]",mu=(z={},z[_o]="fire-core",z[su]="fire-analytics",z[uu]="fire-app-check",z[lu]="fire-auth",z[cu]="fire-rtdb",z[fu]="fire-fn",z[hu]="fire-iid",z[du]="fire-fcm",z[pu]="fire-perf",z[vu]="fire-rc",z[_u]="fire-gcs",z[gu]="fire-fst",z["fire-js"]="fire-js",z[yu]="fire-js-all",z);/**
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
 */var Ze=new vo("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt=function(){function t(e,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=so(e),this.container=new ho(n.name),this._addComponent(new Ot("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),t.prototype.delete=function(){var e=this;return new Promise(function(n){e.checkDestroyed_(),n()}).then(function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map(function(n){return n.delete()}))}).then(function(){e.isDeleted_=!0})},t.prototype._getService=function(e,n){var r;n===void 0&&(n=Qt),this.checkDestroyed_();var i=this.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},t.prototype._removeServiceInstance=function(e,n){n===void 0&&(n=Qt),this.container.getProvider(e).clearInstance(n)},t.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(n){Ze.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,n)}},t.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},t.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},t.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw Xe.create("app-deleted",{appName:this.name_})},t}();jt.prototype.name&&jt.prototype.options||jt.prototype.delete||console.log("dc");var Eu="8.10.0";/**
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
 */function Cu(t){var e={},n=new Map,r={__esModule:!0,initializeApp:a,app:o,registerVersion:l,setLogLevel:ru,onLog:c,apps:null,SDK_VERSION:Eu,INTERNAL:{registerComponent:u,removeApp:i,components:n,useAsService:f}};r.default=r,Object.defineProperty(r,"apps",{get:s});function i(h){delete e[h]}function o(h){if(h=h||Qt,!X(e,h))throw Xe.create("no-app",{appName:h});return e[h]}o.App=t;function a(h,d){if(d===void 0&&(d={}),typeof d!="object"||d===null){var p=d;d={name:p}}var _=d;_.name===void 0&&(_.name=Qt);var v=_.name;if(typeof v!="string"||!v)throw Xe.create("bad-app-name",{appName:String(v)});if(X(e,v))throw Xe.create("duplicate-app",{appName:v});var y=new t(h,_,r);return e[v]=y,y}function s(){return Object.keys(e).map(function(h){return e[h]})}function u(h){var d=h.name;if(n.has(d))return Ze.debug("There were multiple attempts to register component "+d+"."),h.type==="PUBLIC"?r[d]:null;if(n.set(d,h),h.type==="PUBLIC"){var p=function(w){if(w===void 0&&(w=o()),typeof w[d]!="function")throw Xe.create("invalid-app-argument",{appName:d});return w[d]()};h.serviceProps!==void 0&&wt(p,h.serviceProps),r[d]=p,t.prototype[d]=function(){for(var w=[],D=0;D<arguments.length;D++)w[D]=arguments[D];var _e=this._getService.bind(this,d);return _e.apply(this,h.multipleInstances?w:[])}}for(var _=0,v=Object.keys(e);_<v.length;_++){var y=v[_];e[y]._addComponent(h)}return h.type==="PUBLIC"?r[d]:null}function l(h,d,p){var _,v=(_=mu[h])!==null&&_!==void 0?_:h;p&&(v+="-"+p);var y=v.match(/\s|\//),w=d.match(/\s|\//);if(y||w){var D=['Unable to register library "'+v+'" with version "'+d+'":'];y&&D.push('library name "'+v+'" contains illegal characters (whitespace or "/")'),y&&w&&D.push("and"),w&&D.push('version name "'+d+'" contains illegal characters (whitespace or "/")'),Ze.warn(D.join(" "));return}u(new Ot(v+"-version",function(){return{library:v,version:d}},"VERSION"))}function c(h,d){if(h!==null&&typeof h!="function")throw Xe.create("invalid-log-argument");iu(h,d)}function f(h,d){if(d==="serverAuth")return null;var p=d;return p}return r}/**
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
 */function go(){var t=Cu(jt);t.INTERNAL=Ie(Ie({},t.INTERNAL),{createFirebaseNamespace:go,extendNamespace:e,createSubscribe:Ys,ErrorFactory:hr,deepExtend:wt});function e(n){wt(t,n)}return t}var pr=go();/**
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
 */var bu=function(){function t(e){this.container=e}return t.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map(function(n){if(wu(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},t}();function wu(t){var e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}/**
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
 */function Su(t,e){t.INTERNAL.registerComponent(new Ot("platform-logger",function(n){return new bu(n)},"PRIVATE")),t.registerVersion(_o,au,e),t.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($s()&&self.firebase!==void 0){Ze.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var ui=self.firebase.SDK_VERSION;ui&&ui.indexOf("LITE")>=0&&Ze.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var Iu=pr.initializeApp;pr.initializeApp=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Fs()&&Ze.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),Iu.apply(void 0,t)};var Pt=pr;Su(Pt);var Tu="firebase",yo="8.10.1";/**
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
 */Pt.registerVersion(Tu,yo,"app");Pt.SDK_VERSION=yo;var Ru="@firebase/database",Nu="0.11.0";/**
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
 */var mo="";function Eo(t){mo=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Au=function(){function t(e){this.domStorage_=e,this.prefix_="firebase:"}return t.prototype.set=function(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(n))},t.prototype.get=function(e){var n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:St(n)},t.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},t.prototype.prefixedName_=function(e){return this.prefix_+e},t.prototype.toString=function(){return this.domStorage_.toString()},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ou=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n},t.prototype.get=function(e){return X(this.cache_,e)?this.cache_[e]:null},t.prototype.remove=function(e){delete this.cache_[e]},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Co=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){var e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Au(e)}}catch{}return new Ou},Fe=Co("localStorage"),jn=Co("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je=new vo("@firebase/database"),bo=function(){var t=1;return function(){return t++}}(),wo=function(t){var e=Xs(t),n=new Qs;n.update(e);var r=n.digest();return fr.encodeByteArray(r)},xt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n="",r=0;r<t.length;r++){var i=t[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=xt.apply(null,i):typeof i=="object"?n+=W(i):n+=i,n+=" "}return n},We=null,li=!0,So=function(t,e){g(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Je.logLevel=A.VERBOSE,We=Je.log.bind(Je),e&&jn.set("logging_enabled",!0)):typeof t=="function"?We=t:(We=null,jn.remove("logging_enabled"))},U=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(li===!0&&(li=!1,We===null&&jn.get("logging_enabled")===!0&&So(!0)),We){var n=xt.apply(null,t);We(n)}},kt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];U.apply(void 0,Te([t],H(e)))}},zn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE INTERNAL ERROR: "+xt.apply(void 0,Te([],H(t)));Je.error(n)},he=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE FATAL ERROR: "+xt.apply(void 0,Te([],H(t)));throw Je.error(n),new Error(n)},j=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE WARNING: "+xt.apply(void 0,Te([],H(t)));Je.warn(n)},Pu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&j("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ln=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xu=function(t){if(document.readyState==="complete")t();else{var e=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},me="[MIN_NAME]",de="[MAX_NAME]",ze=function(t,e){if(t===e)return 0;if(t===me||e===de)return-1;if(e===me||t===de)return 1;var n=Yt(t),r=Yt(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1},ku=function(t,e){return t===e?0:t<e?-1:1},ht=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+W(e))},vr=function(t){if(typeof t!="object"||t===null)return W(t);var e=[];for(var n in t)e.push(n);e.sort();for(var r="{",i=0;i<e.length;i++)i!==0&&(r+=","),r+=W(e[i]),r+=":",r+=vr(t[e[i]]);return r+="}",r},Io=function(t,e){var n=t.length;if(n<=e)return[t];for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function V(t,e){for(var n in t)t.hasOwnProperty(n)&&e(n,t[n])}var To=function(t){g(!ln(t),"Invalid JSON number");var e=11,n=52,r=(1<<e-1)-1,i,o,a,s,u;t===0?(o=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=s+r,a=Math.round(t*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));var l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();var c=l.join(""),f="";for(u=0;u<64;u+=8){var h=parseInt(c.substr(u,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},Du=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mu(t,e){var n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");var r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}var Fu=new RegExp("^-?(0*)\\d{1,10}$"),Ro=-2147483648,_r=2147483647,Yt=function(t){if(Fu.test(t)){var e=Number(t);if(e>=Ro&&e<=_r)return e}return null},at=function(t){try{t()}catch(e){setTimeout(function(){var n=e.stack||"";throw j("Exception was thrown by user callback.",n),e},Math.floor(0))}},$u=function(){var t=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_t=function(t,e){var n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */var Wu=function(){function t(e,n){var r=this;this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return t.prototype.getToken=function(e){var n=this;return this.appCheck?this.appCheck.getToken(e):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){j('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vu=function(){function t(e,n,r){var i=this;this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return t.prototype.getToken=function(e){var n=this;return this.auth_?this.auth_.getToken(e).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(U("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(e)})},t.prototype.removeTokenChangeListener=function(e){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',j(e)},t}(),gt=function(){function t(e){this.accessToken=e}return t.prototype.getToken=function(e){return Promise.resolve({accessToken:this.accessToken})},t.prototype.addTokenChangeListener=function(e){e(this.accessToken)},t.prototype.removeTokenChangeListener=function(e){},t.prototype.notifyForInvalidToken=function(){},t.OWNER="owner",t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr="5",No="v",Ao="s",Oo="r",Po="f",xo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ko="ls",Bu="p",Hn="ac",Do="websocket",Lo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr=function(){function t(e,n,r,i,o,a,s){o===void 0&&(o=!1),a===void 0&&(a=""),s===void 0&&(s=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fe.get("host:"+e)||this._host}return t.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},t.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(t.prototype,"host",{get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fe.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},t.prototype.toURLString=function(){var e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+e+this.host+"/"+n},t}();function Uu(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mo(t,e,n){g(typeof e=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");var r;if(e===Do)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lo)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Uu(t)&&(n.ns=t.namespace);var i=[];return V(n,function(o,a){i.push(o+"="+a)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gu=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(e,n){n===void 0&&(n=1),X(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n},t.prototype.get=function(){return so(this.counters_)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn={},Dn={};function mr(t){var e=t.toString();return kn[e]||(kn[e]=new Gu),kn[e]}function ju(t,e){var n=t.toString();return Dn[n]||(Dn[n]=e()),Dn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zu=function(){function t(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(e,n){var r=this;this.pendingResponses[e]=n;for(var i=function(){var s=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var u=function(c){s[c]&&at(function(){r.onMessage_(s[c])})},l=0;l<s.length;++l)u(l);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var a=i();if(a==="break")break}},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ci="start",Hu="close",Qu="pLPCommand",Yu="pRTLPCB",Fo="id",$o="pw",Wo="ser",qu="cb",Ku="seg",Xu="ts",Ju="d",Zu="dframe",Vo=1870,Bo=30,el=Vo-Bo,tl=25e3,nl=3e4,Er=function(){function t(e,n,r,i,o,a,s){var u=this;this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=a,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kt(e),this.stats_=mr(n),this.urlFn=function(l){return u.appCheckToken&&(l[Hn]=u.appCheckToken),Mo(n,Lo,l)}}return t.prototype.open=function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(nl)),xu(function(){if(!r.isClosed_){r.scriptTagHolder=new rl(function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=H(a,5),l=u[0],c=u[1],f=u[2];if(u[3],u[4],r.incrementIncomingBytes_(a),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,l===ci)r.id=c,r.password=f;else if(l===Hu)c?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(c,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+l)},function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=H(a,2),l=u[0],c=u[1];r.incrementIncomingBytes_(a),r.myPacketOrderer.handleResponse(l,c)},function(){r.onClosed_()},r.urlFn);var i={};i[ci]="t",i[Wo]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[qu]=r.scriptTagHolder.uniqueCallbackIdentifier),i[No]=gr,r.transportSessionId&&(i[Ao]=r.transportSessionId),r.lastSessionId&&(i[ko]=r.lastSessionId),r.applicationId&&(i[Bu]=r.applicationId),r.appCheckToken&&(i[Hn]=r.appCheckToken),typeof location<"u"&&location.hostname&&xo.test(location.hostname)&&(i[Oo]=Po);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_?!0:!t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Du()&&!Lu()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(e){var n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=ao(n),i=Io(r,el),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(e,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[Zu]="t",r[Fo]=e,r[$o]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},t.prototype.incrementIncomingBytes_=function(e){var n=W(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},t}(),rl=function(){function t(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bo(),window[Qu+this.uniqueCallbackIdentifier]=e,window[Yu+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(u){U("frame writing exception"),u.stack&&U(u.stack),U(u)}}}return t.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{var n=e.contentWindow.document;n||U("No IE domain setting required")}catch{var r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},t.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){e.myIFrame!==null&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},t.prototype.startLongPoll=function(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););},t.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[Fo]=this.myID,e[$o]=this.myPW,e[Wo]=this.currentSerial;for(var n=this.urlFn(e),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+Bo+r.length<=Vo){var a=this.pendingSegs.shift();r=r+"&"+Ku+i+"="+a.seg+"&"+Xu+i+"="+a.ts+"&"+Ju+i+"="+a.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},t.prototype.enqueueSegment=function(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()},t.prototype.addLongPollTag_=function(e,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(tl)),a=function(){clearTimeout(o),i()};this.addTag(e,a)},t.prototype.addTag=function(e,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){U("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var il=16384,ol=45e3,qt=null;typeof MozWebSocket<"u"?qt=MozWebSocket:typeof WebSocket<"u"&&(qt=WebSocket);var Me=function(){function t(e,n,r,i,o,a,s){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kt(this.connId),this.stats_=mr(n),this.connURL=t.connectionURL_(n,a,s,i),this.nodeAdmin=n.nodeAdmin}return t.connectionURL_=function(e,n,r,i){var o={};return o[No]=gr,typeof location<"u"&&location.hostname&&xo.test(location.hostname)&&(o[Oo]=Po),n&&(o[Ao]=n),r&&(o[ko]=r),i&&(o[Hn]=i),Mo(e,Do,o)},t.prototype.open=function(e,n){var r=this;this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fe.set("previous_websocket_failure",!0);try{var i,o,a,s;if(!lo()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qt(this.connURL,[],o)}}catch(l){this.log_("Error instantiating WebSocket.");var u=l.message||l.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(l){r.handleIncomingFrame(l)},this.mySock.onerror=function(l){r.log_("WebSocket error.  Closing connection.");var c=l.message||l.data;c&&r.log_(c),r.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&qt!==null&&!t.forceDisallow_},t.previouslyFailed=function(){return Fe.isInMemoryStorage||Fe.get("previous_websocket_failure")===!0},t.prototype.markConnectionHealthy=function(){Fe.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=St(n);this.onMessage(r)}},t.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},t.prototype.extractFrameCount_=function(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){var n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e},t.prototype.handleIncomingFrame=function(e){if(this.mySock!==null){var n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},t.prototype.send=function(e){this.resetKeepAlive();var n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=Io(n,il);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(ol))},t.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var al=function(){function t(e){this.initTransports_(e)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Er,Me]},enumerable:!1,configurable:!0}),t.prototype.initTransports_=function(e){var n,r,i=Me&&Me.isAvailable(),o=i&&!Me.previouslyFailed();if(e.webSocketOnly&&(i||j("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Me];else{var a=this.transports_=[];try{for(var s=K(t.ALL_TRANSPORTS),u=s.next();!u.done;u=s.next()){var l=u.value;l&&l.isAvailable()&&a.push(l)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sl=6e4,ul=5e3,ll=10*1024,cl=100*1024,Ln="t",fi="d",fl="s",hi="r",hl="e",di="o",pi="a",vi="n",_i="p",dl="h",Uo=function(){function t(e,n,r,i,o,a,s,u,l,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=a,this.onReady_=s,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kt("c:"+this.id+":"),this.transportManager_=new al(n),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var e=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=_t(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>cl?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>ll?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(o)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(e){var n=this;return function(r){e===n.conn_?n.onConnectionLost_(r):e===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},t.prototype.connReceiver_=function(e){var n=this;return function(r){n.state_!==2&&(e===n.rx_?n.onPrimaryMessageReceived_(r):e===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},t.prototype.sendRequest=function(e){var n={t:"d",d:e};this.sendData_(n)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(e){if(Ln in e){var n=e[Ln];n===pi?this.upgradeIfSecondaryHealthy_():n===hi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===di&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(e){var n=ht("t",e),r=ht("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_i,d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(e){var n=ht("t",e),r=ht("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},t.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(e){var n=ht(Ln,e);if(fi in e){var r=e[fi];if(n===dl)this.onHandshake_(r);else if(n===vi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fl?this.onConnectionShutdown_(r):n===hi?this.onReset_(r):n===hl?zn("Server Error: "+r):n===di?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zn("Unknown control packet command: "+n)}},t.prototype.onHandshake_=function(e){var n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gr!==r&&j("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},t.prototype.startUpgrade_=function(e){var n=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),_t(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(sl))},t.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(e,n){var r=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_t(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(ul))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_i,d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()},t.prototype.onConnectionLost_=function(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},t.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)},t.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Go=function(){function t(){}return t.prototype.put=function(e,n,r,i){},t.prototype.merge=function(e,n,r,i){},t.prototype.refreshAuthToken=function(e){},t.prototype.refreshAppCheckToken=function(e){},t.prototype.onDisconnectPut=function(e,n,r){},t.prototype.onDisconnectMerge=function(e,n,r){},t.prototype.onDisconnectCancel=function(e,n){},t.prototype.reportStats=function(e){},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=function(){function t(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[e]))for(var i=Te([],H(this.listeners_[e])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},t.prototype.on=function(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});var i=this.getInitialEvent(e);i&&n.apply(r,i)},t.prototype.off=function(e,n,r){this.validateEventType_(e);for(var i=this.listeners_[e]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},t.prototype.validateEventType_=function(e){g(this.allowedEvents_.find(function(n){return n===e}),"Unknown event: "+e)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi=function(t){M(e,t);function e(){var n=t.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uo()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return g(n==="online","Unknown event type: "+n),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi=32,mi=768,N=function(){function t(e,n){if(n===void 0){this.pieces_=e.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}return t.prototype.toString=function(){for(var e="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"},t}();function I(){return new N("")}function C(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Re(t){return t.pieces_.length-t.pieceNum_}function O(t){var e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function Cr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pl(t){for(var e="",n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function It(t,e){return e===void 0&&(e=0),t.pieces_.slice(t.pieceNum_+e)}function zo(t){if(t.pieceNum_>=t.pieces_.length)return null;for(var e=[],n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function k(t,e){for(var n=[],r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof N)for(var r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else for(var i=e.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new N(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function Q(t,e){var n=C(t),r=C(e);if(n===null)return e;if(n===r)return Q(O(t),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vl(t,e){for(var n=It(t,0),r=It(e,0),i=0;i<n.length&&i<r.length;i++){var o=ze(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function br(t,e){if(Re(t)!==Re(e))return!1;for(var n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ee(t,e){var n=t.pieceNum_,r=e.pieceNum_;if(Re(t)>Re(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}var _l=function(){function t(e,n){this.errorPrefix_=n,this.parts_=It(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=un(this.parts_[r]);Ho(this)}return t}();function gl(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=un(e),Ho(t)}function yl(t){var e=t.parts_.pop();t.byteLength_-=un(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ho(t){if(t.byteLength_>mi)throw new Error(t.errorPrefix_+"has a key path longer than "+mi+" bytes ("+t.byteLength_+").");if(t.parts_.length>yi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yi+") or object contains a cycle "+Le(t))}function Le(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ml=function(t){M(e,t);function e(){var n=t.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return g(n==="visible","Unknown event type: "+n),[this.visible_]},e}(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=1e3,El=60*5*1e3,Cl=3*1e3,Ei=30*1e3,bl=1.3,wl=3e4,Sl="server_kill",Ci=3,Ve=function(t){M(e,t);function e(n,r,i,o,a,s,u,l){var c=t.call(this)||this;if(c.repoInfo_=n,c.applicationId_=r,c.onDataUpdate_=i,c.onConnectStatus_=o,c.onServerInfoUpdate_=a,c.authTokenProvider_=s,c.appCheckTokenProvider_=u,c.authOverride_=l,c.id=e.nextPersistentConnectionId_++,c.log_=kt("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=dt,c.maxReconnectDelay_=El,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,l&&!lo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return ml.getInstance().on("visible",c.onVisible_,c),n.host.indexOf("fblocal")===-1&&gi.getInstance().on("online",c.onOnline_,c),c}return e.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,a={r:o,a:n,b:r};this.log_(W(a)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[o]=i)},e.prototype.get=function(n){var r=this;this.initConnection_();var i=new Y,o={p:n._path.toString(),q:n._queryObject},a={action:"g",request:o,onComplete:function(u){var l=u.d;u.s==="ok"?(r.onDataUpdate_(o.p,l,!1,null),i.resolve(l)):i.reject(l)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;var s=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var u=r.outstandingGets_[s];u===void 0||a!==u||(delete r.outstandingGets_[s],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+s+" timed out on connection"),i.reject(new Error("Client is offline.")))},Cl),this.connected_&&this.sendGet_(s),i.promise},e.prototype.listen=function(n,r,i,o){this.initConnection_();var a=n._queryIdentifier,s=n._path.toString();this.log_("Listen called for "+s+" "+a),this.listens.has(s)||this.listens.set(s,new Map),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(s).has(a),"listen() called twice for same path/queryId.");var u={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(s).set(a,u),this.connected_&&this.sendListen_(u)},e.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},e.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),a=i._queryIdentifier;this.log_("Listen on "+o+" for "+a);var s={p:o},u="q";n.tag&&(s.q=i._queryObject,s.t=n.tag),s.h=n.hashFn(),this.sendRequest(u,s,function(l){var c=l.d,f=l.s;e.warnOnListenWarnings_(c,i);var h=r.listens.get(o)&&r.listens.get(o).get(a);h===n&&(r.log_("listen response",l),f!=="ok"&&r.removeListen_(o,a),n.onComplete&&n.onComplete(f,c))})},e.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&X(n,"w")){var i=Be(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',a=r._path.toString();j("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(a+" to your security rules for better performance."))}}},e.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||zs(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ei)},e.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},e.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=js(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(a){var s=a.s,u=a.d||"error";n.authToken_===r&&(s==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(s,u))})}},e.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},e.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var a=this.removeListen_(i,o);a&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},e.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var a={p:n},s="n";o&&(a.q=i,a.t=o),this.sendRequest(s,a)},e.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},e.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},e.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},e.prototype.sendOnDisconnect_=function(n,r,i,o){var a={p:r,d:i};this.log_("onDisconnect "+n,a),this.sendRequest(n,a,function(s){o&&setTimeout(function(){o(s.s,s.d)},Math.floor(0))})},e.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},e.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},e.prototype.putInternal=function(n,r,i,o,a){this.initConnection_();var s={p:r,d:i};a!==void 0&&(s.h=a),this.outstandingPuts_.push({action:n,request:s,onComplete:o}),this.outstandingPutCount_++;var u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+r)},e.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,a=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(s){r.log_(i+" response",s),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),a&&a(s.s,s.d)})},e.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var a=o.s;if(a!=="ok"){var s=o.d;r.log_("reportStats","Error sending stats: "+s)}})}},e.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+W(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},e.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):zn("Unrecognized action received from server: "+W(n)+`
Are you using the latest client?`)},e.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(n){var r=this;g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},e.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},e.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},e.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>wl&&(this.reconnectDelay_=dt),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bl)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){return no(this,void 0,void 0,function(){var n,r,i,o,a,s,u,l,c,f,h,d,p,_,v=this;return ro(this,function(y){switch(y.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+e.nextConnectionId_++,a=this.lastSessionId,s=!1,u=null,l=function(){u?u.close():(s=!0,i())},c=function(w){g(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(w)},this.realtime_={close:l,sendRequest:c},f=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)])];case 2:return h=H.apply(void 0,[y.sent(),2]),d=h[0],p=h[1],s?U("getToken() completed but was canceled"):(U("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,u=new Uo(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(w){j(w+" ("+v.repoInfo_.toString()+")"),v.interrupt(Sl)},a)),[3,4];case 3:return _=y.sent(),this.log_("Failed to get token: "+_),s||(this.repoInfo_.nodeAdmin&&j(_),l()),[3,4];case 4:return[2]}})})},e.prototype.interrupt=function(n){U("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(n){U("Resuming connection for reason: "+n),delete this.interruptReasons_[n],Gn(this.interruptReasons_)&&(this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},e.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(a){return vr(a)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},e.prototype.removeListen_=function(n,r){var i=new N(n).toString(),o;if(this.listens.has(i)){var a=this.listens.get(i);o=a.get(r),a.delete(r),a.size===0&&this.listens.delete(i)}else o=void 0;return o},e.prototype.onAuthRevoked_=function(n,r){U("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ci&&(this.reconnectDelay_=Ei,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onAppCheckRevoked_=function(n,r){U("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ci&&this.appCheckTokenProvider_.notifyForInvalidToken())},e.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},e.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var a=K(this.listens.values()),s=a.next();!s.done;s=a.next()){var u=s.value;try{for(var l=(i=void 0,K(u.values())),c=l.next();!c.done;c=l.next()){var f=c.value;this.sendListen_(f)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}}}catch(p){n={error:p}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},e.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+mo.replace(/\./g,"-")]=1,uo()?n["framework.cordova"]=1:Ws()&&(n["framework.reactnative"]=1),this.reportStats(n)},e.prototype.shouldReconnect_=function(){var n=gi.getInstance().currentlyOnline();return Gn(this.interruptReasons_)&&n},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(Go);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S=function(){function t(e,n){this.name=e,this.node=n}return t.Wrap=function(e,n){return new t(e,n)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(e,n){var r=new S(me,e),i=new S(me,n);return this.compare(r,i)!==0},t.prototype.minPost=function(){return S.MIN},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt,Qo=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return Bt},set:function(n){Bt=n},enumerable:!1,configurable:!0}),e.prototype.compare=function(n,r){return ze(n.name,r.name)},e.prototype.isDefinedOn=function(n){throw ot("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(n,r){return!1},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return new S(de,Bt)},e.prototype.makePost=function(n,r){return g(typeof n=="string","KeyIndex indexValue must always be a string."),new S(n,Bt)},e.prototype.toString=function(){return".key"},e}(cn),fe=new Qo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut=function(){function t(e,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var a=1;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}return t.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},t}(),se=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:t.RED,this.left=i!=null?i:ge.EMPTY_NODE,this.right=o!=null?o:ge.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(e,n,r){var i=this,o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()},t.prototype.removeMin_=function(){if(this.left.isEmpty())return ge.EMPTY_NODE;var e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()},t.prototype.remove=function(e,n){var r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()},t.prototype.isRed_=function(){return this.color},t.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},t.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e},t.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e},t.prototype.rotateLeft_=function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},t.prototype.rotateRight_=function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},t.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)},t.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},t.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),Il=function(){function t(){}return t.prototype.copy=function(e,n,r,i,o){return this},t.prototype.insert=function(e,n,r){return new se(e,n,null)},t.prototype.remove=function(e,n){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(e){return!1},t.prototype.reverseTraversal=function(e){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),ge=function(){function t(e,n){n===void 0&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,se.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,se.BLACK,null,null))},t.prototype.get=function(e){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},t.prototype.getPredecessorKey=function(e){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},t.prototype.getIterator=function(e){return new Ut(this.root_,null,this.comparator_,!1,e)},t.prototype.getIteratorFrom=function(e,n){return new Ut(this.root_,e,this.comparator_,!1,n)},t.prototype.getReverseIteratorFrom=function(e,n){return new Ut(this.root_,e,this.comparator_,!0,n)},t.prototype.getReverseIterator=function(e){return new Ut(this.root_,null,this.comparator_,!0,e)},t.EMPTY_NODE=new Il,t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return ze(t.name,e.name)}function wr(t,e){return ze(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn;function Rl(t){Qn=t}var Yo=function(t){return typeof t=="number"?"number:"+To(t):"string:"+t},qo=function(t){if(t.isLeafNode()){var e=t.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&X(e,".sv"),"Priority must be a string or number.")}else g(t===Qn||t.isEmpty(),"priority of unexpected type.");g(t===Qn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bi,et=function(){function t(e,n){n===void 0&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qo(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return bi},set:function(e){bi=e},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return e===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return b(e)?this:C(e)===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(e,n){return null},t.prototype.updateImmediateChild=function(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=C(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(g(r!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(e,n){return!1},t.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yo(this.priorityNode_.val())+":");var n=typeof this.value_;e+=n+":",n==="number"?e+=To(this.value_):e+=this.value_,this.lazyHash_=wo(e)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=typeof e.value_,r=typeof this.value_,i=t.VALUE_TYPE_ORDER.indexOf(n),o=t.VALUE_TYPE_ORDER.indexOf(r);return g(i>=0,"Unknown leaf type: "+n),g(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ko,Xo;function Nl(t){Ko=t}function Al(t){Xo=t}var Ol=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),a=i.compareTo(o);return a===0?ze(n.name,r.name):a},e.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return new S(de,new et("[PRIORITY-POST]",Xo))},e.prototype.makePost=function(n,r){var i=Ko(n);return new S(r,new et("[PRIORITY-POST]",i))},e.prototype.toString=function(){return".priority"},e}(cn),P=new Ol;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pl=Math.log(2),xl=function(){function t(e){var n=function(o){return parseInt(Math.log(o)/Pl,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(e+1),this.current_=this.count-1;var i=r(this.count);this.bits_=e+1&i}return t.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},t}(),Kt=function(t,e,n,r){t.sort(e);var i=function(u,l){var c=l-u,f,h;if(c===0)return null;if(c===1)return f=t[u],h=n?n(f):f,new se(h,f.node,se.BLACK,null,null);var d=parseInt(c/2,10)+u,p=i(u,d),_=i(d+1,l);return f=t[d],h=n?n(f):f,new se(h,f.node,se.BLACK,p,_)},o=function(u){for(var l=null,c=null,f=t.length,h=function(y,w){var D=f-y,_e=f;f-=y;var ie=i(D+1,_e),Ye=t[D],ct=n?n(Ye):Ye;d(new se(ct,Ye.node,w,null,ie))},d=function(y){l?(l.left=y,l=y):(c=y,l=y)},p=0;p<u.count;++p){var _=u.nextBitIsOne(),v=Math.pow(2,u.count-(p+1));_?h(v,se.BLACK):(h(v,se.BLACK),h(v,se.RED))}return c},a=new xl(t.length),s=o(a);return new ge(r||e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn,Ke={},Xt=function(){function t(e,n){this.indexes_=e,this.indexSet_=n}return Object.defineProperty(t,"Default",{get:function(){return g(Ke&&P,"ChildrenNode.ts has not been loaded"),Mn=Mn||new t({".priority":Ke},{".priority":P}),Mn},enumerable:!1,configurable:!0}),t.prototype.get=function(e){var n=Be(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ge?n:null},t.prototype.hasIndex=function(e){return X(this.indexSet_,e.toString())},t.prototype.addIndex=function(e,n){g(e!==fe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(S.Wrap),a=o.getNext();a;)i=i||e.isDefinedOn(a.node),r.push(a),a=o.getNext();var s;i?s=Kt(r,e.getCompare()):s=Ke;var u=e.toString(),l=Ie({},this.indexSet_);l[u]=e;var c=Ie({},this.indexes_);return c[u]=s,new t(c,l)},t.prototype.addToIndexes=function(e,n){var r=this,i=Ht(this.indexes_,function(o,a){var s=Be(r.indexSet_,a);if(g(s,"Missing index implementation for "+a),o===Ke)if(s.isDefinedOn(e.node)){for(var u=[],l=n.getIterator(S.Wrap),c=l.getNext();c;)c.name!==e.name&&u.push(c),c=l.getNext();return u.push(e),Kt(u,s.getCompare())}else return Ke;else{var f=n.get(e.name),h=o;return f&&(h=h.remove(new S(e.name,f))),h.insert(e,e.node)}});return new t(i,this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){var r=Ht(this.indexes_,function(i){if(i===Ke)return i;var o=n.get(e.name);return o?i.remove(new S(e.name,o)):i});return new t(r,this.indexSet_)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,E=function(){function t(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return pt||(pt=new t(new ge(wr),null,Xt.Default))},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||pt},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(e){if(e===".priority")return this.getPriority();var n=this.children_.get(e);return n===null?pt:n},t.prototype.getChild=function(e){var n=C(e);return n===null?this:this.getImmediateChild(n).getChild(O(e))},t.prototype.hasChild=function(e){return this.children_.get(e)!==null},t.prototype.updateImmediateChild=function(e,n){if(g(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);var r=new S(e,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));var a=i.isEmpty()?pt:this.priorityNode_;return new t(i,a,o)},t.prototype.updateChild=function(e,n){var r=C(e);if(r===null)return n;g(C(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(O(e),n);return this.updateImmediateChild(r,i)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(P,function(u,l){n[u]=l.val(e),r++,o&&t.INTEGER_REGEXP_.test(u)?i=Math.max(i,Number(u)):o=!1}),!e&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.getPriority().isEmpty()||(e+="priority:"+Yo(this.getPriority().val())+":"),this.forEachChild(P,function(n,r){var i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wo(e)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(e,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new S(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)},t.prototype.getFirstChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},t.prototype.getFirstChild=function(e){var n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null},t.prototype.getLastChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},t.prototype.getLastChild=function(e){var n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null},t.prototype.forEachChild=function(e,n){var r=this.resolveIndex_(e);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},t.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},t.prototype.getIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,function(a){return a});for(var i=this.children_.getIteratorFrom(e.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i},t.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},t.prototype.getReverseIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,function(a){return a});for(var i=this.children_.getReverseIteratorFrom(e.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i},t.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dt?-1:0},t.prototype.withIndex=function(e){if(e===fe||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(e){return e===fe||this.indexMap_.hasIndex(e)},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(P),i=n.getIterator(P),o=r.getNext(),a=i.getNext();o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=r.getNext(),a=i.getNext()}return o===null&&a===null}else return!1;else return!1},t.prototype.resolveIndex_=function(e){return e===fe?null:this.indexMap_.get(e.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),kl=function(t){M(e,t);function e(){return t.call(this,new ge(wr),E.EMPTY_NODE,Xt.Default)||this}return e.prototype.compareTo=function(n){return n===this?0:1},e.prototype.equals=function(n){return n===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(n){return E.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(E),Dt=new kl;Object.defineProperties(S,{MIN:{value:new S(me,E.EMPTY_NODE)},MAX:{value:new S(de,Dt)}});Qo.__EMPTY_NODE=E.EMPTY_NODE;et.__childrenNodeConstructor=E;Rl(Dt);Al(Dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dl=!0;function L(t,e){if(e===void 0&&(e=null),t===null)return E.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){var n=t;return new et(n,L(e))}if(!(t instanceof Array)&&Dl){var r=[],i=!1,o=t;if(V(o,function(l,c){if(l.substring(0,1)!=="."){var f=L(c);f.isEmpty()||(i=i||!f.getPriority().isEmpty(),r.push(new S(l,f)))}}),r.length===0)return E.EMPTY_NODE;var a=Kt(r,Tl,function(l){return l.name},wr);if(i){var s=Kt(r,P.getCompare());return new E(a,L(e),new Xt({".priority":s},{".priority":P}))}else return new E(a,L(e),Xt.Default)}else{var u=E.EMPTY_NODE;return V(t,function(l,c){if(X(t,l)&&l.substring(0,1)!=="."){var f=L(c);(f.isLeafNode()||!f.isEmpty())&&(u=u.updateImmediateChild(l,f))}}),u.updatePriority(L(e))}}Nl(L);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=function(t){M(e,t);function e(n){var r=t.call(this)||this;return r.indexPath_=n,g(!b(n)&&C(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return e.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),a=i.compareTo(o);return a===0?ze(n.name,r.name):a},e.prototype.makePost=function(n,r){var i=L(n),o=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(r,o)},e.prototype.maxPost=function(){var n=E.EMPTY_NODE.updateChild(this.indexPath_,Dt);return new S(de,n)},e.prototype.toString=function(){return It(this.indexPath_,0).join("/")},e}(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ll=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?ze(n.name,r.name):i},e.prototype.isDefinedOn=function(n){return!0},e.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return S.MAX},e.prototype.makePost=function(n,r){var i=L(n);return new S(r,i)},e.prototype.toString=function(){return".value"},e}(cn),Ir=new Ll;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yn="-",Jo="z",Zo=786,Ml=function(){var t=0,e=[];return function(n){var r=n===t;t=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=tt.charAt(n%64),n=Math.floor(n/64);g(n===0,"Cannot push at time == 0");var a=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=tt.charAt(e[i]);return g(a.length===20,"nextPushId: Length should be 20."),a}}(),wi=function(t){if(t===""+_r)return Yn;var e=Yt(t);if(e!=null)return""+(e+1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);if(n.length<Zo)return n.push(Yn),n.join("");for(var i=n.length-1;i>=0&&n[i]===Jo;)i--;if(i===-1)return de;var o=n[i],a=tt.charAt(tt.indexOf(o)+1);return n[i]=a,n.slice(0,i+1).join("")},Si=function(t){if(t===""+Ro)return me;var e=Yt(t);if(e!=null)return""+(e-1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===Yn?n.length===1?""+_r:(delete n[n.length-1],n.join("")):(n[n.length-1]=tt.charAt(tt.indexOf(n[n.length-1])-1),n.join("")+Jo.repeat(Zo-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return{type:"value",snapshotNode:t}}function nt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Tt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fl(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr=function(){function t(e){this.index_=e}return t.prototype.updateChild=function(e,n,r,i,o,a){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(n);return s.getChild(i).equals(r.getChild(i))&&s.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(Tt(n,s)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?a.trackChildChange(nt(n,r)):a.trackChildChange(Rt(n,r,s))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)},t.prototype.updateFullNode=function(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(P,function(i,o){n.hasChild(i)||r.trackChildChange(Tt(i,o))}),n.isLeafNode()||n.forEachChild(P,function(i,o){if(e.hasChild(i)){var a=e.getImmediateChild(i);a.equals(o)||r.trackChildChange(Rt(i,o,a))}else r.trackChildChange(nt(i,o))})),n.withIndex(this.index_)},t.prototype.updatePriority=function(e,n){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(n)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta=function(){function t(e){this.indexedFilter_=new Tr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},t.prototype.updateChild=function(e,n,r,i,o,a){return this.matches(new S(n,r))||(r=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,a)},t.prototype.updateFullNode=function(e,n,r){n.isLeafNode()&&(n=E.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(E.EMPTY_NODE);var o=this;return n.forEachChild(P,function(a,s){o.matches(new S(a,s))||(i=i.updateImmediateChild(a,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(e){if(e.hasStart()){var n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()},t.getEndPost_=function(e){if(e.hasEnd()){var n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l=function(){function t(e){this.rangedFilter_=new ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}return t.prototype.updateChild=function(e,n,r,i,o,a){return this.rangedFilter_.matches(new S(n,r))||(r=E.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,a):this.fullLimitUpdateChild_(e,n,r,o,a)},t.prototype.updateFullNode=function(e,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=E.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;o.hasNext()&&a<this.limit_;){var s=o.getNext(),u=void 0;if(this.reverse_?u=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:u=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,u)i=i.updateImmediateChild(s.name,s.node),a++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(E.EMPTY_NODE);var l=void 0,c=void 0,f=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),l=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();f=function(v,y){return h(y,v)}}else o=i.getIterator(this.index_),l=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();for(var a=0,d=!1;o.hasNext();){var s=o.getNext();!d&&f(l,s)<=0&&(d=!0);var u=d&&a<this.limit_&&f(s,c)<=0;u?a++:i=i.updateImmediateChild(s.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(e,n,r,i,o){var a;if(this.reverse_){var s=this.index_.getCompare();a=function(w,D){return s(D,w)}}else a=this.index_.getCompare();var u=e;g(u.numChildren()===this.limit_,"");var l=new S(n,r),c=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(u.hasChild(n)){for(var h=u.getImmediateChild(n),d=i.getChildAfterChild(this.index_,c,this.reverse_);d!=null&&(d.name===n||u.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var p=d==null?1:a(d,l),_=f&&!r.isEmpty()&&p>=0;if(_)return o!=null&&o.trackChildChange(Rt(n,r,h)),u.updateImmediateChild(n,r);o!=null&&o.trackChildChange(Tt(n,h));var v=u.updateImmediateChild(n,E.EMPTY_NODE),y=d!=null&&this.rangedFilter_.matches(d);return y?(o!=null&&o.trackChildChange(nt(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}else return r.isEmpty()?e:f&&a(c,l)>=0?(o!=null&&(o.trackChildChange(Tt(c.name,c.node)),o.trackChildChange(nt(n,r))),u.updateImmediateChild(n,r).updateImmediateChild(c.name,E.EMPTY_NODE)):e},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.hasStartAfter=function(){return this.startAfterSet_},t.prototype.hasEndBefore=function(){return this.endBeforeSet_},t.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},t.prototype.getIndexStartValue=function(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:me},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:de},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},t.prototype.getLimit=function(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===P},t.prototype.copy=function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t}();function Wl(t){return t.loadsAllData()?new Tr(t.getIndex()):t.hasLimit()?new $l(t):new ta(t)}function Vl(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Bl(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function qn(t,e,n){var r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Ul(t,e,n){var r;if(t.index_===fe)typeof e=="string"&&(e=wi(e)),r=qn(t,e,n);else{var i=void 0;n==null?i=de:i=wi(n),r=qn(t,e,i)}return r.startAfterSet_=!0,r}function Kn(t,e,n){var r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Gl(t,e,n){var r,i;return t.index_===fe?(typeof e=="string"&&(e=Si(e)),i=Kn(t,e,n)):(n==null?r=me:r=Si(n),i=Kn(t,e,r)),i.endBeforeSet_=!0,i}function fn(t,e){var n=t.copy();return n.index_=e,n}function Ii(t){var e={};if(t.isDefault())return e;var n;return t.index_===P?n="$priority":t.index_===Ir?n="$value":t.index_===fe?n="$key":(g(t.index_ instanceof Sr,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=W(n),t.startSet_&&(e.startAt=W(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+W(t.indexStartName_))),t.endSet_&&(e.endAt=W(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+W(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ti(t){var e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;var n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==P&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jl=function(t){M(e,t);function e(n,r,i,o){var a=t.call(this)||this;return a.repoInfo_=n,a.onDataUpdate_=r,a.authTokenProvider_=i,a.appCheckTokenProvider_=o,a.log_=kt("p:rest:"),a.listens_={},a}return e.prototype.reportStats=function(n){throw new Error("Method not implemented.")},e.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(g(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},e.prototype.listen=function(n,r,i,o){var a=this,s=n._path.toString();this.log_("Listen called for "+s+" "+n._queryIdentifier);var u=e.getListenId_(n,i),l={};this.listens_[u]=l;var c=Ii(n._queryParams);this.restRequest_(s+".json",c,function(f,h){var d=h;if(f===404&&(d=null,f=null),f===null&&a.onDataUpdate_(s,d,!1,i),Be(a.listens_,u)===l){var p;f?f===401?p="permission_denied":p="rest_error:"+f:p="ok",o(p,null)}})},e.prototype.unlisten=function(n,r){var i=e.getListenId_(n,r);delete this.listens_[i]},e.prototype.get=function(n){var r=this,i=Ii(n._queryParams),o=n._path.toString(),a=new Y;return this.restRequest_(o+".json",i,function(s,u){var l=u;s===404&&(l=null,s=null),s===null?(r.onDataUpdate_(o,l,!1,null),a.resolve(l)):a.reject(new Error(l))}),a.promise},e.prototype.refreshAuthToken=function(n){},e.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(a){var s=H(a,2),u=s[0],l=s[1];u&&u.accessToken&&(r.auth=u.accessToken),l&&l.token&&(r.ac=l.token);var c=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+Hs(r);o.log_("Sending REST request for "+c);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(i&&f.readyState===4){o.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);var h=null;if(f.status>=200&&f.status<300){try{h=St(f.responseText)}catch{j("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&j("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})},e}(Go);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zl=function(){function t(){this.rootNode_=E.EMPTY_NODE}return t.prototype.getNode=function(e){return this.rootNode_.getChild(e)},t.prototype.updateSnapshot=function(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return{value:null,children:new Map}}function st(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{var r=C(e);t.children.has(r)||t.children.set(r,Jt());var i=t.children.get(r);e=O(e),st(i,e,n)}}function Xn(t,e){if(b(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;var n=t.value;return t.value=null,n.forEachChild(P,function(o,a){st(t,new N(o),a)}),Xn(t,e)}else if(t.children.size>0){var r=C(e);if(e=O(e),t.children.has(r)){var i=Xn(t.children.get(r),e);i&&t.children.delete(r)}return t.children.size===0}else return!0}function Jn(t,e,n){t.value!==null?n(e,t.value):Hl(t,function(r,i){var o=new N(e.toString()+"/"+r);Jn(i,o,n)})}function Hl(t,e){t.children.forEach(function(n,r){e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ra=function(){function t(e){this.collection_=e,this.last_=null}return t.prototype.get=function(){var e=this.collection_.get(),n=Ie({},e);return this.last_&&V(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=e,n},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri=10*1e3,Ql=30*1e3,Yl=5*60*1e3,ql=function(){function t(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ra(e);var r=Ri+(Ql-Ri)*Math.random();_t(this.reportStats_.bind(this),Math.floor(r))}return t.prototype.reportStats_=function(){var e=this,n=this.statsListener_.get(),r={},i=!1;V(n,function(o,a){a>0&&X(e.statsToReport_,o)&&(r[o]=a,i=!0)}),i&&this.server_.reportStats(r),_t(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yl))},t}();function Kl(t,e){t.statsToReport_[e]=!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ue||(ue={}));function Rr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ar(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xl=function(){function t(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ue.ACK_USER_WRITE,this.source=Rr()}return t.prototype.operationForChild=function(e){if(b(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new N(e));return new t(I(),n,this.revert)}else return g(C(this.path)===e,"operationForChild called for unrelated child."),new t(O(this.path),this.affectedTree,this.revert)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia=function(){function t(e,n){this.source=e,this.path=n,this.type=ue.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return b(this.path)?new t(this.source,I()):new t(this.source,O(this.path))},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn=function(){function t(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ue.OVERWRITE}return t.prototype.operationForChild=function(e){return b(this.path)?new t(this.source,I(),this.snap.getImmediateChild(e)):new t(this.source,O(this.path),this.snap)},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or=function(){function t(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ue.MERGE}return t.prototype.operationForChild=function(e){if(b(this.path)){var n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new hn(this.source,I(),n.value):new t(this.source,I(),n)}else return g(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,O(this.path),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne=function(){function t(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;var n=C(e);return this.isCompleteForChild(n)},t.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},t.prototype.getNode=function(){return this.node_},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jl=function(){function t(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}return t}();function Zl(t,e,n,r){var i=[],o=[];return e.forEach(function(a){a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(Fl(a.childName,a.snapshotNode))}),vt(t,i,"child_removed",e,r,n),vt(t,i,"child_added",e,r,n),vt(t,i,"child_moved",o,r,n),vt(t,i,"child_changed",e,r,n),vt(t,i,"value",e,r,n),i}function vt(t,e,n,r,i,o){var a=r.filter(function(s){return s.type===n});a.sort(function(s,u){return tc(t,s,u)}),a.forEach(function(s){var u=ec(t,s,o);i.forEach(function(l){l.respondsTo(s.type)&&e.push(l.createEvent(u,t.query_))})})}function ec(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tc(t,e,n){if(e.childName==null||n.childName==null)throw ot("Should only compare child_ events.");var r=new S(e.childName,e.snapshotNode),i=new S(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){return{eventCache:t,serverCache:e}}function yt(t,e,n,r){return dn(new Ne(e,n,r),t.serverCache)}function oa(t,e,n,r){return dn(t.eventCache,new Ne(e,n,r))}function Zt(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ue(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn,nc=function(){return Fn||(Fn=new ge(ku)),Fn},J=function(){function t(e,n){n===void 0&&(n=nc()),this.value=e,this.children=n}return t.fromObject=function(e){var n=new t(null);return V(e,function(r,i){n=n.set(new N(r),i)}),n},t.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(e,n){if(this.value!=null&&n(this.value))return{path:I(),value:this.value};if(b(e))return null;var r=C(e),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(O(e),n);if(o!=null){var a=k(new N(r),o.path);return{path:a,value:o.value}}else return null}else return null},t.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},t.prototype.subtree=function(e){if(b(e))return this;var n=C(e),r=this.children.get(n);return r!==null?r.subtree(O(e)):new t(null)},t.prototype.set=function(e,n){if(b(e))return new t(n,this.children);var r=C(e),i=this.children.get(r)||new t(null),o=i.set(O(e),n),a=this.children.insert(r,o);return new t(this.value,a)},t.prototype.remove=function(e){if(b(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=C(e),r=this.children.get(n);if(r){var i=r.remove(O(e)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new t(null):new t(this.value,o)}else return this},t.prototype.get=function(e){if(b(e))return this.value;var n=C(e),r=this.children.get(n);return r?r.get(O(e)):null},t.prototype.setTree=function(e,n){if(b(e))return n;var r=C(e),i=this.children.get(r)||new t(null),o=i.setTree(O(e),n),a=void 0;return o.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,o),new t(this.value,a)},t.prototype.fold=function(e){return this.fold_(I(),e)},t.prototype.fold_=function(e,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(k(e,i),n)}),n(e,this.value,r)},t.prototype.findOnPath=function(e,n){return this.findOnPath_(e,I(),n)},t.prototype.findOnPath_=function(e,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(b(e))return null;var o=C(e),a=this.children.get(o);return a?a.findOnPath_(O(e),k(n,o),r):null},t.prototype.foreachOnPath=function(e,n){return this.foreachOnPath_(e,I(),n)},t.prototype.foreachOnPath_=function(e,n,r){if(b(e))return this;this.value&&r(n,this.value);var i=C(e),o=this.children.get(i);return o?o.foreachOnPath_(O(e),k(n,i),r):new t(null)},t.prototype.foreach=function(e){this.foreach_(I(),e)},t.prototype.foreach_=function(e,n){this.children.inorderTraversal(function(r,i){i.foreach_(k(e,r),n)}),this.value&&n(e,this.value)},t.prototype.foreachChild=function(e){this.children.inorderTraversal(function(n,r){r.value&&e(n,r.value)})},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye=function(){function t(e){this.writeTree_=e}return t.empty=function(){return new t(new J(null))},t}();function mt(t,e,n){if(b(e))return new ye(new J(n));var r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){var i=r.path,o=r.value,a=Q(i,e);return o=o.updateChild(a,n),new ye(t.writeTree_.set(i,o))}else{var s=new J(n),u=t.writeTree_.setTree(e,s);return new ye(u)}}function Zn(t,e,n){var r=t;return V(n,function(i,o){r=mt(r,k(e,i),o)}),r}function Ni(t,e){if(b(e))return ye.empty();var n=t.writeTree_.setTree(e,new J(null));return new ye(n)}function er(t,e){return He(t,e)!=null}function He(t,e){var n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Q(n.path,e)):null}function Ai(t){var e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(P,function(r,i){e.push(new S(r,i))}):t.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&e.push(new S(r,i.value))}),e}function we(t,e){if(b(e))return t;var n=He(t,e);return n!=null?new ye(new J(n)):new ye(t.writeTree_.subtree(e))}function tr(t){return t.writeTree_.isEmpty()}function rt(t,e){return aa(I(),t.writeTree_,e)}function aa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);var r=null;return e.children.inorderTraversal(function(i,o){i===".priority"?(g(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=aa(k(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(k(t,".priority"),r)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){return ca(e,t)}function rc(t,e,n,r,i){g(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=mt(t.visibleWrites,e,n)),t.lastWriteId=r}function ic(t,e,n,r){g(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Zn(t.visibleWrites,e,n),t.lastWriteId=r}function oc(t,e){for(var n=0;n<t.allWrites.length;n++){var r=t.allWrites[n];if(r.writeId===e)return r}return null}function ac(t,e){var n=t.allWrites.findIndex(function(l){return l.writeId===e});g(n>=0,"removeWrite called with nonexistent writeId.");var r=t.allWrites[n];t.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=t.allWrites.length-1;i&&a>=0;){var s=t.allWrites[a];s.visible&&(a>=n&&sc(s,r.path)?i=!1:ee(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return uc(t),!0;if(r.snap)t.visibleWrites=Ni(t.visibleWrites,r.path);else{var u=r.children;V(u,function(l){t.visibleWrites=Ni(t.visibleWrites,k(r.path,l))})}return!0}else return!1}function sc(t,e){if(t.snap)return ee(t.path,e);for(var n in t.children)if(t.children.hasOwnProperty(n)&&ee(k(t.path,n),e))return!0;return!1}function uc(t){t.visibleWrites=sa(t.allWrites,lc,I()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lc(t){return t.visible}function sa(t,e,n){for(var r=ye.empty(),i=0;i<t.length;++i){var o=t[i];if(e(o)){var a=o.path,s=void 0;if(o.snap)ee(n,a)?(s=Q(n,a),r=mt(r,s,o.snap)):ee(a,n)&&(s=Q(a,n),r=mt(r,I(),o.snap.getChild(s)));else if(o.children){if(ee(n,a))s=Q(n,a),r=Zn(r,s,o.children);else if(ee(a,n))if(s=Q(a,n),b(s))r=Zn(r,I(),o.children);else{var u=Be(o.children,C(s));if(u){var l=u.getChild(O(s));r=mt(r,I(),l)}}}else throw ot("WriteRecord should have .snap or .children")}}return r}function ua(t,e,n,r,i){if(!r&&!i){var o=He(t.visibleWrites,e);if(o!=null)return o;var a=we(t.visibleWrites,e);if(tr(a))return n;if(n==null&&!er(a,I()))return null;var s=n||E.EMPTY_NODE;return rt(a,s)}else{var u=we(t.visibleWrites,e);if(!i&&tr(u))return n;if(!i&&n==null&&!er(u,I()))return null;var l=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(ee(h.path,e)||ee(e,h.path))},c=sa(t.allWrites,l,e),s=n||E.EMPTY_NODE;return rt(c,s)}}function cc(t,e,n){var r=E.EMPTY_NODE,i=He(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(P,function(s,u){r=r.updateImmediateChild(s,u)}),r;if(n){var o=we(t.visibleWrites,e);return n.forEachChild(P,function(s,u){var l=rt(we(o,new N(s)),u);r=r.updateImmediateChild(s,l)}),Ai(o).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}else{var a=we(t.visibleWrites,e);return Ai(a).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}}function fc(t,e,n,r,i){g(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=k(e,n);if(er(t.visibleWrites,o))return null;var a=we(t.visibleWrites,o);return tr(a)?i.getChild(n):rt(a,i.getChild(n))}function hc(t,e,n,r){var i=k(e,n),o=He(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var a=we(t.visibleWrites,i);return rt(a,r.getNode().getImmediateChild(n))}else return null}function dc(t,e){return He(t.visibleWrites,e)}function pc(t,e,n,r,i,o,a){var s,u=we(t.visibleWrites,e),l=He(u,I());if(l!=null)s=l;else if(n!=null)s=rt(u,n);else return[];if(s=s.withIndex(a),!s.isEmpty()&&!s.isLeafNode()){for(var c=[],f=a.getCompare(),h=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=h.getNext();d&&c.length<i;)f(d,r)!==0&&c.push(d),d=h.getNext();return c}else return[]}function vc(){return{visibleWrites:ye.empty(),allWrites:[],lastWriteId:-1}}function en(t,e,n,r){return ua(t.writeTree,t.treePath,e,n,r)}function Pr(t,e){return cc(t.writeTree,t.treePath,e)}function Oi(t,e,n,r){return fc(t.writeTree,t.treePath,e,n,r)}function tn(t,e){return dc(t.writeTree,k(t.treePath,e))}function _c(t,e,n,r,i,o){return pc(t.writeTree,t.treePath,e,n,r,i,o)}function xr(t,e,n){return hc(t.writeTree,t.treePath,e,n)}function la(t,e){return ca(k(t.treePath,e),t.writeTree)}function ca(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gc=function(){function t(){this.changeMap=new Map}return t.prototype.trackChildChange=function(e){var n=e.type,r=e.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Rt(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,Tt(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,nt(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Rt(r,e.snapshotNode,i.oldSnap));else throw ot("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)},t.prototype.getChanges=function(){return Array.from(this.changeMap.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yc=function(){function t(){}return t.prototype.getCompleteChild=function(e){return null},t.prototype.getChildAfterChild=function(e,n,r){return null},t}(),fa=new yc,kr=function(){function t(e,n,r){r===void 0&&(r=null),this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}return t.prototype.getCompleteChild=function(e){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);var r=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xr(this.writes_,e,r)},t.prototype.getChildAfterChild=function(e,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ue(this.viewCache_),o=_c(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return{filter:t}}function Ec(t,e){g(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Cc(t,e,n,r,i){var o=new gc,a,s;if(n.type===ue.OVERWRITE){var u=n;u.source.fromUser?a=nr(t,e,u.path,u.snap,r,i,o):(g(u.source.fromServer,"Unknown source."),s=u.source.tagged||e.serverCache.isFiltered()&&!b(u.path),a=nn(t,e,u.path,u.snap,r,i,s,o))}else if(n.type===ue.MERGE){var l=n;l.source.fromUser?a=wc(t,e,l.path,l.children,r,i,o):(g(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered(),a=rr(t,e,l.path,l.children,r,i,s,o))}else if(n.type===ue.ACK_USER_WRITE){var c=n;c.revert?a=Tc(t,e,c.path,r,i,o):a=Sc(t,e,c.path,c.affectedTree,r,i,o)}else if(n.type===ue.LISTEN_COMPLETE)a=Ic(t,e,n.path,r,o);else throw ot("Unknown operation type: "+n.type);var f=o.getChanges();return bc(e,a,f),{viewCache:a,changes:f}}function bc(t,e,n){var r=e.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Zt(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ea(Zt(e)))}}function ha(t,e,n,r,i,o){var a=e.eventCache;if(tn(r,n)!=null)return e;var s=void 0,u=void 0;if(b(n))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){var l=Ue(e),c=l instanceof E?l:E.EMPTY_NODE,f=Pr(r,c);s=t.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{var h=en(r,Ue(e));s=t.filter.updateFullNode(e.eventCache.getNode(),h,o)}else{var d=C(n);if(d===".priority"){g(Re(n)===1,"Can't have a priority with additional path components");var p=a.getNode();u=e.serverCache.getNode();var _=Oi(r,n,p,u);_!=null?s=t.filter.updatePriority(p,_):s=a.getNode()}else{var v=O(n),y=void 0;if(a.isCompleteForChild(d)){u=e.serverCache.getNode();var w=Oi(r,n,a.getNode(),u);w!=null?y=a.getNode().getImmediateChild(d).updateChild(v,w):y=a.getNode().getImmediateChild(d)}else y=xr(r,d,e.serverCache);y!=null?s=t.filter.updateChild(a.getNode(),d,y,v,i,o):s=a.getNode()}}return yt(e,s,a.isFullyInitialized()||b(n),t.filter.filtersNodes())}function nn(t,e,n,r,i,o,a,s){var u=e.serverCache,l,c=a?t.filter:t.filter.getIndexedFilter();if(b(n))l=c.updateFullNode(u.getNode(),r,null);else if(c.filtersNodes()&&!u.isFiltered()){var f=u.getNode().updateChild(n,r);l=c.updateFullNode(u.getNode(),f,null)}else{var h=C(n);if(!u.isCompleteForPath(n)&&Re(n)>1)return e;var d=O(n),p=u.getNode().getImmediateChild(h),_=p.updateChild(d,r);h===".priority"?l=c.updatePriority(u.getNode(),_):l=c.updateChild(u.getNode(),h,_,d,fa,null)}var v=oa(e,l,u.isFullyInitialized()||b(n),c.filtersNodes()),y=new kr(i,v,o);return ha(t,v,n,i,y,s)}function nr(t,e,n,r,i,o,a){var s=e.eventCache,u,l,c=new kr(i,e,o);if(b(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,a),u=yt(e,l,!0,t.filter.filtersNodes());else{var f=C(n);if(f===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),u=yt(e,l,s.isFullyInitialized(),s.isFiltered());else{var h=O(n),d=s.getNode().getImmediateChild(f),p=void 0;if(b(h))p=r;else{var _=c.getCompleteChild(f);_!=null?Cr(h)===".priority"&&_.getChild(zo(h)).isEmpty()?p=_:p=_.updateChild(h,r):p=E.EMPTY_NODE}if(d.equals(p))u=e;else{var v=t.filter.updateChild(s.getNode(),f,p,h,c,a);u=yt(e,v,s.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Pi(t,e){return t.eventCache.isCompleteForChild(e)}function wc(t,e,n,r,i,o,a){var s=e;return r.foreach(function(u,l){var c=k(n,u);Pi(e,C(c))&&(s=nr(t,s,c,l,i,o,a))}),r.foreach(function(u,l){var c=k(n,u);Pi(e,C(c))||(s=nr(t,s,c,l,i,o,a))}),s}function xi(t,e,n){return n.foreach(function(r,i){e=e.updateChild(r,i)}),e}function rr(t,e,n,r,i,o,a,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;var u=e,l;b(n)?l=r:l=new J(null).setTree(n,r);var c=e.serverCache.getNode();return l.children.inorderTraversal(function(f,h){if(c.hasChild(f)){var d=e.serverCache.getNode().getImmediateChild(f),p=xi(t,d,h);u=nn(t,u,new N(f),p,i,o,a,s)}}),l.children.inorderTraversal(function(f,h){var d=!e.serverCache.isCompleteForChild(f)&&h.value===void 0;if(!c.hasChild(f)&&!d){var p=e.serverCache.getNode().getImmediateChild(f),_=xi(t,p,h);u=nn(t,u,new N(f),_,i,o,a,s)}}),u}function Sc(t,e,n,r,i,o,a){if(tn(i,n)!=null)return e;var s=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(b(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return nn(t,e,n,u.getNode().getChild(n),i,o,s,a);if(b(n)){var l=new J(null);return u.getNode().forEachChild(fe,function(f,h){l=l.set(new N(f),h)}),rr(t,e,n,l,i,o,s,a)}else return e}else{var c=new J(null);return r.foreach(function(f,h){var d=k(n,f);u.isCompleteForPath(d)&&(c=c.set(f,u.getNode().getChild(d)))}),rr(t,e,n,c,i,o,s,a)}}function Ic(t,e,n,r,i){var o=e.serverCache,a=oa(e,o.getNode(),o.isFullyInitialized()||b(n),o.isFiltered());return ha(t,a,n,r,fa,i)}function Tc(t,e,n,r,i,o){var a;if(tn(r,n)!=null)return e;var s=new kr(r,e,i),u=e.eventCache.getNode(),l=void 0;if(b(n)||C(n)===".priority"){var c=void 0;if(e.serverCache.isFullyInitialized())c=en(r,Ue(e));else{var f=e.serverCache.getNode();g(f instanceof E,"serverChildren would be complete if leaf node"),c=Pr(r,f)}c=c,l=t.filter.updateFullNode(u,c,o)}else{var h=C(n),d=xr(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=u.getImmediateChild(h)),d!=null?l=t.filter.updateChild(u,h,d,O(n),s,o):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(u,h,E.EMPTY_NODE,O(n),s,o):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=en(r,Ue(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,o)))}return a=e.serverCache.isFullyInitialized()||tn(r,I())!=null,yt(e,l,a,t.filter.filtersNodes())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rc=function(){function t(e,n){this.query_=e,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new Tr(r.getIndex()),o=Wl(r);this.processor_=mc(o);var a=n.serverCache,s=n.eventCache,u=i.updateFullNode(E.EMPTY_NODE,a.getNode(),null),l=o.updateFullNode(E.EMPTY_NODE,s.getNode(),null),c=new Ne(u,a.isFullyInitialized(),i.filtersNodes()),f=new Ne(l,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=dn(f,c),this.eventGenerator_=new Jl(this.query_)}return Object.defineProperty(t.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),t}();function Nc(t){return t.viewCache_.serverCache.getNode()}function Ac(t){return Zt(t.viewCache_)}function Oc(t,e){var n=Ue(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(C(e)).isEmpty())?n.getChild(e):null}function ki(t){return t.eventRegistrations_.length===0}function Pc(t,e){t.eventRegistrations_.push(e)}function Di(t,e,n){var r=[];if(n){g(e==null,"A cancel should cancel all event registrations.");var i=t.query._path;t.eventRegistrations_.forEach(function(u){var l=u.createCancelEvent(n,i);l&&r.push(l)})}if(e){for(var o=[],a=0;a<t.eventRegistrations_.length;++a){var s=t.eventRegistrations_[a];if(!s.matches(e))o.push(s);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(a+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return r}function Li(t,e,n,r){e.type===ue.MERGE&&e.source.queryId!==null&&(g(Ue(t.viewCache_),"We should always have a full cache before handling merges"),g(Zt(t.viewCache_),"Missing event cache, even though we have a server cache"));var i=t.viewCache_,o=Cc(t.processor_,i,e,n,r);return Ec(t.processor_,o.viewCache),g(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,da(t,o.changes,o.viewCache.eventCache.getNode(),null)}function xc(t,e){var n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(P,function(o,a){r.push(nt(o,a))})}return n.isFullyInitialized()&&r.push(ea(n.getNode())),da(t,r,n.getNode(),e)}function da(t,e,n,r){var i=r?[r]:t.eventRegistrations_;return Zl(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn,pa=function(){function t(){this.views=new Map}return t}();function kc(t){g(!rn,"__referenceConstructor has already been defined"),rn=t}function Dc(){return g(rn,"Reference.ts has not been loaded"),rn}function Lc(t){return t.views.size===0}function Dr(t,e,n,r){var i,o,a=e.source.queryId;if(a!==null){var s=t.views.get(a);return g(s!=null,"SyncTree gave us an op for an invalid query."),Li(s,e,n,r)}else{var u=[];try{for(var l=K(t.views.values()),c=l.next();!c.done;c=l.next()){var s=c.value;u=u.concat(Li(s,e,n,r))}}catch(f){i={error:f}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}return u}}function va(t,e,n,r,i){var o=e._queryIdentifier,a=t.views.get(o);if(!a){var s=en(n,i?r:null),u=!1;s?u=!0:r instanceof E?(s=Pr(n,r),u=!1):(s=E.EMPTY_NODE,u=!1);var l=dn(new Ne(s,u,!1),new Ne(r,i,!1));return new Rc(e,l)}return a}function Mc(t,e,n,r,i,o){var a=va(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),Pc(a,n),xc(a,n)}function Fc(t,e,n,r){var i,o,a=e._queryIdentifier,s=[],u=[],l=Ae(t);if(a==="default")try{for(var c=K(t.views.entries()),f=c.next();!f.done;f=c.next()){var h=H(f.value,2),d=h[0],p=h[1];u=u.concat(Di(p,n,r)),ki(p)&&(t.views.delete(d),p.query._queryParams.loadsAllData()||s.push(p.query))}}catch(_){i={error:_}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}else{var p=t.views.get(a);p&&(u=u.concat(Di(p,n,r)),ki(p)&&(t.views.delete(a),p.query._queryParams.loadsAllData()||s.push(p.query)))}return l&&!Ae(t)&&s.push(new(Dc())(e._repo,e._path)),{removed:s,events:u}}function _a(t){var e,n,r=[];try{for(var i=K(t.views.values()),o=i.next();!o.done;o=i.next()){var a=o.value;a.query._queryParams.loadsAllData()||r.push(a)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}function Se(t,e){var n,r,i=null;try{for(var o=K(t.views.values()),a=o.next();!a.done;a=o.next()){var s=a.value;i=i||Oc(s,e)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function ga(t,e){var n=e._queryParams;if(n.loadsAllData())return vn(t);var r=e._queryIdentifier;return t.views.get(r)}function ya(t,e){return ga(t,e)!=null}function Ae(t){return vn(t)!=null}function vn(t){var e,n;try{for(var r=K(t.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(a){e={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;function $c(t){g(!on,"__referenceConstructor has already been defined"),on=t}function Wc(){return g(on,"Reference.ts has not been loaded"),on}var Vc=1,Mi=function(){function t(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=vc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return t}();function Lr(t,e,n,r,i){return rc(t.pendingWriteTree_,e,n,r,i),i?ut(t,new hn(Rr(),e,n)):[]}function Bc(t,e,n,r){ic(t.pendingWriteTree_,e,n,r);var i=J.fromObject(n);return ut(t,new Or(Rr(),e,i))}function be(t,e,n){n===void 0&&(n=!1);var r=oc(t.pendingWriteTree_,e),i=ac(t.pendingWriteTree_,e);if(i){var o=new J(null);return r.snap!=null?o=o.set(I(),!0):V(r.children,function(a){o=o.set(new N(a),!0)}),ut(t,new Xl(r.path,o,n))}else return[]}function Lt(t,e,n){return ut(t,new hn(Nr(),e,n))}function Uc(t,e,n){var r=J.fromObject(n);return ut(t,new Or(Nr(),e,r))}function Gc(t,e){return ut(t,new ia(Nr(),e))}function jc(t,e,n){var r=Mr(t,n);if(r){var i=Fr(r),o=i.path,a=i.queryId,s=Q(o,e),u=new ia(Ar(a),s);return $r(t,o,u)}else return[]}function ir(t,e,n,r){var i=e._path,o=t.syncPointTree_.get(i),a=[];if(o&&(e._queryIdentifier==="default"||ya(o,e))){var s=Fc(o,e,n,r);Lc(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));var u=s.removed;a=s.events;var l=u.findIndex(function(w){return w._queryParams.loadsAllData()})!==-1,c=t.syncPointTree_.findOnPath(i,function(w,D){return Ae(D)});if(l&&!c){var f=t.syncPointTree_.subtree(i);if(!f.isEmpty())for(var h=Yc(f),d=0;d<h.length;++d){var p=h[d],_=p.query,v=Ca(t,p);t.listenProvider_.startListening(Et(_),an(t,_),v.hashFn,v.onComplete)}}if(!c&&u.length>0&&!r)if(l){var y=null;t.listenProvider_.stopListening(Et(e),y)}else u.forEach(function(w){var D=t.queryToTagMap.get(gn(w));t.listenProvider_.stopListening(Et(w),D)});qc(t,u)}return a}function zc(t,e,n,r){var i=Mr(t,r);if(i!=null){var o=Fr(i),a=o.path,s=o.queryId,u=Q(a,e),l=new hn(Ar(s),u,n);return $r(t,a,l)}else return[]}function Hc(t,e,n,r){var i=Mr(t,r);if(i){var o=Fr(i),a=o.path,s=o.queryId,u=Q(a,e),l=J.fromObject(n),c=new Or(Ar(s),u,l);return $r(t,a,c)}else return[]}function Fi(t,e,n){var r=e._path,i=null,o=!1;t.syncPointTree_.foreachOnPath(r,function(_,v){var y=Q(_,r);i=i||Se(v,y),o=o||Ae(v)});var a=t.syncPointTree_.get(r);a?(o=o||Ae(a),i=i||Se(a,I())):(a=new pa,t.syncPointTree_=t.syncPointTree_.set(r,a));var s;if(i!=null)s=!0;else{s=!1,i=E.EMPTY_NODE;var u=t.syncPointTree_.subtree(r);u.foreachChild(function(_,v){var y=Se(v,I());y&&(i=i.updateImmediateChild(_,y))})}var l=ya(a,e);if(!l&&!e._queryParams.loadsAllData()){var c=gn(e);g(!t.queryToTagMap.has(c),"View does not exist, but we have a tag");var f=Kc();t.queryToTagMap.set(c,f),t.tagToQueryMap.set(f,c)}var h=pn(t.pendingWriteTree_,r),d=Mc(a,e,n,h,i,s);if(!l&&!o){var p=ga(a,e);d=d.concat(Xc(t,e,p))}return d}function _n(t,e,n){var r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,function(a,s){var u=Q(a,e),l=Se(s,u);if(l)return l});return ua(i,e,o,n,r)}function Qc(t,e){var n=e._path,r=null;t.syncPointTree_.foreachOnPath(n,function(l,c){var f=Q(l,n);r=r||Se(c,f)});var i=t.syncPointTree_.get(n);i?r=r||Se(i,I()):(i=new pa,t.syncPointTree_=t.syncPointTree_.set(n,i));var o=r!=null,a=o?new Ne(r,!0,!1):null,s=pn(t.pendingWriteTree_,e._path),u=va(i,e,s,o?a.getNode():E.EMPTY_NODE,o);return Ac(u)}function ut(t,e){return ma(e,t.syncPointTree_,null,pn(t.pendingWriteTree_,I()))}function ma(t,e,n,r){if(b(t.path))return Ea(t,e,n,r);var i=e.get(I());n==null&&i!=null&&(n=Se(i,I()));var o=[],a=C(t.path),s=t.operationForChild(a),u=e.children.get(a);if(u&&s){var l=n?n.getImmediateChild(a):null,c=la(r,a);o=o.concat(ma(s,u,l,c))}return i&&(o=o.concat(Dr(i,t,r,n))),o}function Ea(t,e,n,r){var i=e.get(I());n==null&&i!=null&&(n=Se(i,I()));var o=[];return e.children.inorderTraversal(function(a,s){var u=n?n.getImmediateChild(a):null,l=la(r,a),c=t.operationForChild(a);c&&(o=o.concat(Ea(c,s,u,l)))}),i&&(o=o.concat(Dr(i,t,r,n))),o}function Ca(t,e){var n=e.query,r=an(t,n);return{hashFn:function(){var i=Nc(e)||E.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?jc(t,n._path,r):Gc(t,n._path);var o=Mu(i,n);return ir(t,n,null,o)}}}function an(t,e){var n=gn(e);return t.queryToTagMap.get(n)}function gn(t){return t._path.toString()+"$"+t._queryIdentifier}function Mr(t,e){return t.tagToQueryMap.get(e)}function Fr(t){var e=t.indexOf("$");return g(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function $r(t,e,n){var r=t.syncPointTree_.get(e);g(r,"Missing sync point for query tag that we're tracking");var i=pn(t.pendingWriteTree_,e);return Dr(r,n,i,null)}function Yc(t){return t.fold(function(e,n,r){if(n&&Ae(n)){var i=vn(n);return[i]}else{var o=[];return n&&(o=_a(n)),V(r,function(a,s){o=o.concat(s)}),o}})}function Et(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Wc())(t._repo,t._path):t}function qc(t,e){for(var n=0;n<e.length;++n){var r=e[n];if(!r._queryParams.loadsAllData()){var i=gn(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Kc(){return Vc++}function Xc(t,e,n){var r=e._path,i=an(t,e),o=Ca(t,n),a=t.listenProvider_.startListening(Et(e),i,o.hashFn,o.onComplete),s=t.syncPointTree_.subtree(r);if(i)g(!Ae(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold(function(f,h,d){if(!b(f)&&h&&Ae(h))return[vn(h).query];var p=[];return h&&(p=p.concat(_a(h).map(function(_){return _.query}))),V(d,function(_,v){p=p.concat(v)}),p}),l=0;l<u.length;++l){var c=u[l];t.listenProvider_.stopListening(Et(c),an(t,c))}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jc=function(){function t(e){this.node_=e}return t.prototype.getImmediateChild=function(e){var n=this.node_.getImmediateChild(e);return new t(n)},t.prototype.node=function(){return this.node_},t}(),Zc=function(){function t(e,n){this.syncTree_=e,this.path_=n}return t.prototype.getImmediateChild=function(e){var n=k(this.path_,e);return new t(this.syncTree_,n)},t.prototype.node=function(){return _n(this.syncTree_,this.path_)},t}(),ef=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$i=function(t,e,n){if(!t||typeof t!="object")return t;if(g(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tf(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nf(t[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tf=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+t)}},nf=function(t,e,n){t.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(t,null,2));var r=t.increment;typeof r!="number"&&g(!1,"Unexpected increment value: "+r);var i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,a=o.getValue();return typeof a!="number"?r:a+r},ba=function(t,e,n,r){return Vr(e,new Zc(n,t),r)},Wr=function(t,e,n){return Vr(t,new Jc(e),n)};function Vr(t,e,n){var r=t.getPriority().val(),i=$i(r,e.getImmediateChild(".priority"),n),o;if(t.isLeafNode()){var a=t,s=$i(a.getValue(),e,n);return s!==a.getValue()||i!==a.getPriority().val()?new et(s,L(i)):t}else{var u=t;return o=u,i!==u.getPriority().val()&&(o=o.updatePriority(new et(i))),u.forEachChild(P,function(l,c){var f=Vr(c,e.getImmediateChild(l),n);f!==c&&(o=o.updateImmediateChild(l,f))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=function(){function t(e,n,r){e===void 0&&(e=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=e,this.parent=n,this.node=r}return t}();function yn(t,e){for(var n=e instanceof N?e:new N(e),r=t,i=C(n);i!==null;){var o=Be(r.node.children,i)||{children:{},childCount:0};r=new Br(i,r,o),n=O(n),i=C(n)}return r}function Qe(t){return t.node.value}function Ur(t,e){t.node.value=e,or(t)}function wa(t){return t.node.childCount>0}function rf(t){return Qe(t)===void 0&&!wa(t)}function mn(t,e){V(t.node.children,function(n,r){e(new Br(n,t,r))})}function Sa(t,e,n,r){n&&!r&&e(t),mn(t,function(i){Sa(i,e,!0,r)}),n&&r&&e(t)}function of(t,e,n){for(var r=n?t:t.parent;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Mt(t){return new N(t.parent===null?t.name:Mt(t.parent)+"/"+t.name)}function or(t){t.parent!==null&&af(t.parent,t.name,t)}function af(t,e,n){var r=rf(n),i=X(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,or(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,or(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sf=/[\[\].#$\/\u0000-\u001F\u007F]/,uf=/[\[\].#$\u0000-\u001F\u007F]/,$n=10*1024*1024,En=function(t){return typeof t=="string"&&t.length!==0&&!sf.test(t)},Ia=function(t){return typeof t=="string"&&t.length!==0&&!uf.test(t)},lf=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ia(t)},Nt=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ln(t)||t&&typeof t=="object"&&X(t,".sv")},pe=function(t,e,n,r){r&&e===void 0||Ft(q(t,"value"),e,n)},Ft=function(t,e,n){var r=n instanceof N?new _l(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Le(r));if(typeof e=="function")throw new Error(t+"contains a function "+Le(r)+" with contents = "+e.toString());if(ln(e))throw new Error(t+"contains "+e.toString()+" "+Le(r));if(typeof e=="string"&&e.length>$n/3&&un(e)>$n)throw new Error(t+"contains a string greater than "+$n+" utf8 bytes "+Le(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){var i=!1,o=!1;if(V(e,function(a,s){if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!En(a)))throw new Error(t+" contains an invalid key ("+a+") "+Le(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gl(r,a),Ft(t,s,r),yl(r)}),i&&o)throw new Error(t+' contains ".value" child '+Le(r)+" in addition to actual children.")}},cf=function(t,e){var n,r;for(n=0;n<e.length;n++){r=e[n];for(var i=It(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!En(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vl);var a=null;for(n=0;n<e.length;n++){if(r=e[n],a!==null&&ee(a,r))throw new Error(t+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString());a=r}},Ta=function(t,e,n,r){if(!(r&&e===void 0)){var i=q(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");var o=[];V(e,function(a,s){var u=new N(a);if(Ft(i,s,k(n,u)),Cr(u)===".priority"&&!Nt(s))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(u)}),cf(i,o)}},Gr=function(t,e,n){if(!(n&&e===void 0)){if(ln(e))throw new Error(q(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nt(e))throw new Error(q(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ff=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(q(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},$t=function(t,e,n,r){if(!(r&&n===void 0)&&!En(n))throw new Error(q(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},At=function(t,e,n,r){if(!(r&&n===void 0)&&!Ia(n))throw new Error(q(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hf=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),At(t,e,n,r)},te=function(t,e){if(C(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ra=function(t,e){var n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!En(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lf(n))throw new Error(q(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},df=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(q(t,e)+"must be a boolean.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pf=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t}();function Cn(t,e){for(var n=null,r=0;r<e.length;r++){var i=e[r],o=i.getPath();n!==null&&!br(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function jr(t,e,n){Cn(t,n),Na(t,function(r){return br(r,e)})}function ne(t,e,n){Cn(t,n),Na(t,function(r){return ee(r,e)||ee(e,r)})}function Na(t,e){t.recursionDepth_++;for(var n=!0,r=0;r<t.eventLists_.length;r++){var i=t.eventLists_[r];if(i){var o=i.path;e(o)?(vf(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vf(t){for(var e=0;e<t.events.length;e++){var n=t.events[e];if(n!==null){t.events[e]=null;var r=n.getEventRunner();We&&U("event: "+n.toString()),at(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa="repo_interrupt",_f=25,gf=function(){function t(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jt(),this.transactionQueueTree_=new Br,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t}();function yf(t,e,n){if(t.stats_=mr(t.repoInfo_),t.forceRestClient_||$u())t.server_=new jl(t.repoInfo_,function(r,i,o,a){Wi(t,r,i,o,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(function(){return Vi(t,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ve(t.repoInfo_,e,function(r,i,o,a){Wi(t,r,i,o,a)},function(r){Vi(t,r)},function(r){Ef(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(function(r){t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(function(r){t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ju(t.repoInfo_,function(){return new ql(t.stats_,t.server_)}),t.infoData_=new zl,t.infoSyncTree_=new Mi({startListening:function(r,i,o,a){var s=[],u=t.infoData_.getNode(r._path);return u.isEmpty()||(s=Lt(t.infoSyncTree_,r._path,u),setTimeout(function(){a("ok")},0)),s},stopListening:function(){}}),zr(t,"connected",!1),t.serverSyncTree_=new Mi({startListening:function(r,i,o,a){return t.server_.listen(r,o,i,function(s,u){var l=a(s,u);ne(t.eventQueue_,r._path,l)}),[]},stopListening:function(r,i){t.server_.unlisten(r,i)}})}function Oa(t){var e=t.infoData_.getNode(new N(".info/serverTimeOffset")),n=e.val()||0;return new Date().getTime()+n}function Wt(t){return ef({timestamp:Oa(t)})}function Wi(t,e,n,r,i){t.dataUpdateCount++;var o=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;var a=[];if(i)if(r){var s=Ht(n,function(h){return L(h)});a=Hc(t.serverSyncTree_,o,s,i)}else{var u=L(n);a=zc(t.serverSyncTree_,o,u,i)}else if(r){var l=Ht(n,function(h){return L(h)});a=Uc(t.serverSyncTree_,o,l)}else{var c=L(n);a=Lt(t.serverSyncTree_,o,c)}var f=o;a.length>0&&(f=it(t,o)),ne(t.eventQueue_,f,a)}function mf(t,e){t.interceptServerDataCallback_=e}function Vi(t,e){zr(t,"connected",e),e===!1&&wf(t)}function Ef(t,e){V(e,function(n,r){zr(t,n,r)})}function zr(t,e,n){var r=new N("/.info/"+e),i=L(n);t.infoData_.updateSnapshot(r,i);var o=Lt(t.infoSyncTree_,r,i);ne(t.eventQueue_,r,o)}function bn(t){return t.nextWriteId_++}function Cf(t,e){var n=Qc(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(function(r){var i=L(r).withIndex(e._queryParams.getIndex()),o=Lt(t.serverSyncTree_,e._path,i);return jr(t.eventQueue_,e._path,o),Promise.resolve(i)},function(r){return lt(t,"get for query "+W(e)+" failed: "+r),Promise.reject(new Error(r))})}function Hr(t,e,n,r,i){lt(t,"set",{path:e.toString(),value:n,priority:r});var o=Wt(t),a=L(n,r),s=_n(t.serverSyncTree_,e),u=Wr(a,s,o),l=bn(t),c=Lr(t.serverSyncTree_,e,u,l,!0);Cn(t.eventQueue_,c),t.server_.put(e.toString(),a.val(!0),function(h,d){var p=h==="ok";p||j("set at "+e+" failed: "+h);var _=be(t.serverSyncTree_,l,!p);ne(t.eventQueue_,e,_),Oe(t,i,h,d)});var f=Yr(t,e);it(t,f),ne(t.eventQueue_,f,[])}function bf(t,e,n,r){lt(t,"update",{path:e.toString(),value:n});var i=!0,o=Wt(t),a={};if(V(n,function(l,c){i=!1,a[l]=ba(k(e,l),L(c),t.serverSyncTree_,o)}),i)U("update() called with empty data.  Don't do anything."),Oe(t,r,"ok",void 0);else{var s=bn(t),u=Bc(t.serverSyncTree_,e,a,s);Cn(t.eventQueue_,u),t.server_.merge(e.toString(),n,function(l,c){var f=l==="ok";f||j("update at "+e+" failed: "+l);var h=be(t.serverSyncTree_,s,!f),d=h.length>0?it(t,e):e;ne(t.eventQueue_,d,h),Oe(t,r,l,c)}),V(n,function(l){var c=Yr(t,k(e,l));it(t,c)}),ne(t.eventQueue_,e,[])}}function wf(t){lt(t,"onDisconnectEvents");var e=Wt(t),n=Jt();Jn(t.onDisconnect_,I(),function(i,o){var a=ba(i,o,t.serverSyncTree_,e);st(n,i,a)});var r=[];Jn(n,I(),function(i,o){r=r.concat(Lt(t.serverSyncTree_,i,o));var a=Yr(t,i);it(t,a)}),t.onDisconnect_=Jt(),ne(t.eventQueue_,I(),r)}function Sf(t,e,n){t.server_.onDisconnectCancel(e.toString(),function(r,i){r==="ok"&&Xn(t.onDisconnect_,e),Oe(t,n,r,i)})}function Bi(t,e,n,r){var i=L(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),function(o,a){o==="ok"&&st(t.onDisconnect_,e,i),Oe(t,r,o,a)})}function If(t,e,n,r,i){var o=L(n,r);t.server_.onDisconnectPut(e.toString(),o.val(!0),function(a,s){a==="ok"&&st(t.onDisconnect_,e,o),Oe(t,i,a,s)})}function Tf(t,e,n,r){if(Gn(n)){U("onDisconnect().update() called with empty data.  Don't do anything."),Oe(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,function(i,o){i==="ok"&&V(n,function(a,s){var u=L(s);st(t.onDisconnect_,k(e,a),u)}),Oe(t,r,i,o)})}function Rf(t,e,n){var r;C(e._path)===".info"?r=Fi(t.infoSyncTree_,e,n):r=Fi(t.serverSyncTree_,e,n),jr(t.eventQueue_,e._path,r)}function ar(t,e,n){var r;C(e._path)===".info"?r=ir(t.infoSyncTree_,e,n):r=ir(t.serverSyncTree_,e,n),jr(t.eventQueue_,e._path,r)}function Pa(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Aa)}function Nf(t){t.persistentConnection_&&t.persistentConnection_.resume(Aa)}function Af(t,e){if(e===void 0&&(e=!1),!(typeof console>"u")){var n;e?(t.statsListener_||(t.statsListener_=new ra(t.stats_)),n=t.statsListener_.get()):n=t.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);V(n,function(i,o){for(var a=i,s=i.length;s<r+2;s++)a+=" ";console.log(a+o)})}}function Of(t,e){t.stats_.incrementCounter(e),Kl(t.statsReporter_,e)}function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r="";t.persistentConnection_&&(r=t.persistentConnection_.id+":"),U.apply(void 0,Te([r],H(e)))}function Oe(t,e,n,r){e&&at(function(){if(n==="ok")e(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var a=new Error(o);a.code=i,e(a)}})}function Pf(t,e,n,r,i,o){lt(t,"transaction on "+e);var a={path:e,update:n,onComplete:r,status:null,order:bo(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},s=Qr(t,e,void 0);a.currentInputSnapshot=s;var u=a.update(s.val());if(u===void 0)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Ft("transaction failed: Data returned ",u,a.path),a.status=0;var l=yn(t.transactionQueueTree_,e),c=Qe(l)||[];c.push(a),Ur(l,c);var f=void 0;if(typeof u=="object"&&u!==null&&X(u,".priority"))f=Be(u,".priority"),g(Nt(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=_n(t.serverSyncTree_,e)||E.EMPTY_NODE;f=h.getPriority().val()}var d=Wt(t),p=L(u,f),_=Wr(p,s,d);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=_,a.currentWriteId=bn(t);var v=Lr(t.serverSyncTree_,e,_,a.currentWriteId,a.applyLocally);ne(t.eventQueue_,e,v),wn(t,t.transactionQueueTree_)}}function Qr(t,e,n){return _n(t.serverSyncTree_,e,n)||E.EMPTY_NODE}function wn(t,e){if(e===void 0&&(e=t.transactionQueueTree_),e||Sn(t,e),Qe(e)){var n=ka(t,e);g(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&xf(t,Mt(e),n)}else wa(e)&&mn(e,function(i){wn(t,i)})}function xf(t,e,n){for(var r=n.map(function(h){return h.currentWriteId}),i=Qr(t,e,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var l=Q(e,u.path);o=o.updateChild(l,u.currentOutputSnapshotRaw)}var c=o.val(!0),f=e;t.server_.put(f.toString(),c,function(h){lt(t,"transaction put response",{path:f.toString(),status:h});var d=[];if(h==="ok"){for(var p=[],_=function(y){n[y].status=2,d=d.concat(be(t.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&p.push(function(){return n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)}),n[y].unwatcher()},v=0;v<n.length;v++)_(v);Sn(t,yn(t.transactionQueueTree_,e)),wn(t,t.transactionQueueTree_),ne(t.eventQueue_,e,d);for(var v=0;v<p.length;v++)at(p[v])}else{if(h==="datastale")for(var v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{j("transaction at "+f.toString()+" failed: "+h);for(var v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=h}it(t,e)}},a)}function it(t,e){var n=xa(t,e),r=Mt(n),i=ka(t,n);return kf(t,i,r),r}function kf(t,e,n){if(e.length!==0){for(var r=[],i=[],o=e.filter(function(l){return l.status===0}),a=o.map(function(l){return l.currentWriteId}),s=function(l){var c=e[l],f=Q(n,c.path),h=!1,d;if(g(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(be(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=_f)h=!0,d="maxretry",i=i.concat(be(t.serverSyncTree_,c.currentWriteId,!0));else{var p=Qr(t,c.path,a);c.currentInputSnapshot=p;var _=e[l].update(p.val());if(_!==void 0){Ft("transaction failed: Data returned ",_,c.path);var v=L(_),y=typeof _=="object"&&_!=null&&X(_,".priority");y||(v=v.updatePriority(p.getPriority()));var w=c.currentWriteId,D=Wt(t),_e=Wr(v,p,D);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=_e,c.currentWriteId=bn(t),a.splice(a.indexOf(w),1),i=i.concat(Lr(t.serverSyncTree_,c.path,_e,c.currentWriteId,c.applyLocally)),i=i.concat(be(t.serverSyncTree_,w,!0))}else h=!0,d="nodata",i=i.concat(be(t.serverSyncTree_,c.currentWriteId,!0))}ne(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(ie){setTimeout(ie,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(function(){return e[l].onComplete(null,!1,e[l].currentInputSnapshot)}):r.push(function(){return e[l].onComplete(new Error(d),!1,null)})))},u=0;u<e.length;u++)s(u);Sn(t,t.transactionQueueTree_);for(var u=0;u<r.length;u++)at(r[u]);wn(t,t.transactionQueueTree_)}}function xa(t,e){var n,r=t.transactionQueueTree_;for(n=C(e);n!==null&&Qe(r)===void 0;)r=yn(r,n),e=O(e),n=C(e);return r}function ka(t,e){var n=[];return Da(t,e,n),n.sort(function(r,i){return r.order-i.order}),n}function Da(t,e,n){var r=Qe(e);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);mn(e,function(o){Da(t,o,n)})}function Sn(t,e){var n=Qe(e);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ur(e,n.length>0?n:void 0)}mn(e,function(o){Sn(t,o)})}function Yr(t,e){var n=Mt(xa(t,e)),r=yn(t.transactionQueueTree_,e);return of(r,function(i){Wn(t,i)}),Wn(t,r),Sa(r,function(i){Wn(t,i)}),n}function Wn(t,e){var n=Qe(e);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(g(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(g(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(be(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Ur(e,void 0):n.length=o+1,ne(t.eventQueue_,Mt(e),i);for(var a=0;a<r.length;a++)at(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Lf(t){var e,n,r={};t.charAt(0)==="?"&&(t=t.substring(1));try{for(var i=K(t.split("&")),o=i.next();!o.done;o=i.next()){var a=o.value;if(a.length!==0){var s=a.split("=");s.length===2?r[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):j("Invalid query segment '"+a+"' in query '"+t+"'")}}}catch(u){e={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}var sr=function(t,e){var n=Mf(t),r=n.namespace;n.domain==="firebase.com"&&he(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Pu();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yr(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new N(n.pathString)}},Mf=function(t){var e="",n="",r="",i="",o="",a=!0,s="https",u=443;if(typeof t=="string"){var l=t.indexOf("//");l>=0&&(s=t.substring(0,l-1),t=t.substring(l+2));var c=t.indexOf("/");c===-1&&(c=t.length);var f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=Df(t.substring(c,f)));var h=Lf(t.substring(Math.min(t.length,f)));l=e.indexOf(":"),l>=0?(a=s==="https"||s==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;var d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{var p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),o=r}"ns"in h&&(o=h.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var La=function(){function t(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return t.prototype.getPath=function(){var e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())},t}(),Ma=function(){function t(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa=function(){function t(e,n){this.snapshotCallback=e,this.cancelCallback=n}return t.prototype.onValue=function(e,n){this.snapshotCallback.call(null,e,n)},t.prototype.onCancel=function(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)},Object.defineProperty(t.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),t.prototype.matches=function(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context},t}();/**
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
 */var Ff=function(){function t(e,n){this._repo=e,this._path=n}return t.prototype.cancel=function(){var e=new Y;return Sf(this._repo,this._path,e.wrapCallback(function(){})),e.promise},t.prototype.remove=function(){te("OnDisconnect.remove",this._path);var e=new Y;return Bi(this._repo,this._path,null,e.wrapCallback(function(){})),e.promise},t.prototype.set=function(e){te("OnDisconnect.set",this._path),pe("OnDisconnect.set",e,this._path,!1);var n=new Y;return Bi(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t.prototype.setWithPriority=function(e,n){te("OnDisconnect.setWithPriority",this._path),pe("OnDisconnect.setWithPriority",e,this._path,!1),Gr("OnDisconnect.setWithPriority",n,!1);var r=new Y;return If(this._repo,this._path,e,n,r.wrapCallback(function(){})),r.promise},t.prototype.update=function(e){te("OnDisconnect.update",this._path),Ta("OnDisconnect.update",e,this._path,!1);var n=new Y;return Tf(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t}();/**
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
 */var re=function(){function t(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(t.prototype,"key",{get:function(){return b(this._path)?null:Cr(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new ve(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryIdentifier",{get:function(){var e=Ti(this._queryParams),n=vr(e);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryObject",{get:function(){return Ti(this._queryParams)},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){if(e=Z(e),!(e instanceof t))return!1;var n=this._repo===e._repo,r=br(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i},t.prototype.toJSON=function(){return this.toString()},t.prototype.toString=function(){return this._repo.toString()+pl(this._path)},t}();function In(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Pe(t){var e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===fe){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){var o=t.getIndexStartName();if(o!==me)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){var a=t.getIndexEndName();if(a!==de)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===P){if(e!=null&&!Nt(e)||n!=null&&!Nt(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g(t.getIndex()instanceof Sr||t.getIndex()===Ir,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Tn(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var ve=function(t){M(e,t);function e(n,r){return t.call(this,n,r,new na,!1)||this}return Object.defineProperty(e.prototype,"parent",{get:function(){var n=zo(this._path);return n===null?null:new e(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),e}(re),Rn=function(){function t(e,n,r){this._node=e,this.ref=n,this._index=r}return Object.defineProperty(t.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),t.prototype.child=function(e){var n=new N(e),r=Ge(this.ref,e);return new t(this._node.getChild(n),r,P)},t.prototype.exists=function(){return!this._node.isEmpty()},t.prototype.exportVal=function(){return this._node.val(!0)},t.prototype.forEach=function(e){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return e(new t(o,Ge(n.ref,i),P))})},t.prototype.hasChild=function(e){var n=new N(e);return!this._node.getChild(n).isEmpty()},t.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},t.prototype.toJSON=function(){return this.exportVal()},t.prototype.val=function(){return this._node.val()},t}();function $a(t,e){return t=Z(t),t._checkNotDeleted("ref"),e!==void 0?Ge(t._root,e):t._root}function Ui(t,e){t=Z(t),t._checkNotDeleted("refFromURL");var n=sr(e,t._repo.repoInfo_.nodeAdmin);Ra("refFromURL",n);var r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&he("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),$a(t,n.path.toString())}function Ge(t,e){return t=Z(t),C(t._path)===null?hf("child","path",e,!1):At("child","path",e,!1),new ve(t._repo,k(t._path,e))}function $f(t,e){t=Z(t),te("push",t._path),pe("push",e,t._path,!0);var n=Oa(t._repo),r=Ml(n),i=Ge(t,r),o=Ge(t,r),a;return e!=null?a=qr(o,e).then(function(){return o}):a=Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Wf(t){return te("remove",t._path),qr(t,null)}function qr(t,e){t=Z(t),te("set",t._path),pe("set",e,t._path,!1);var n=new Y;return Hr(t._repo,t._path,e,null,n.wrapCallback(function(){})),n.promise}function Vf(t,e){t=Z(t),te("setPriority",t._path),Gr("setPriority",e,!1);var n=new Y;return Hr(t._repo,k(t._path,".priority"),e,null,n.wrapCallback(function(){})),n.promise}function Bf(t,e,n){if(te("setWithPriority",t._path),pe("setWithPriority",e,t._path,!1),Gr("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";var r=new Y;return Hr(t._repo,t._path,e,n,r.wrapCallback(function(){})),r.promise}function Uf(t,e){Ta("update",e,t._path,!1);var n=new Y;return bf(t._repo,t._path,e,n.wrapCallback(function(){})),n.promise}function Gf(t){return t=Z(t),Cf(t._repo,t).then(function(e){return new Rn(e,new ve(t._repo,t._path),t._queryParams.getIndex())})}var Wa=function(){function t(e){this.callbackContext=e}return t.prototype.respondsTo=function(e){return e==="value"},t.prototype.createEvent=function(e,n){var r=n._queryParams.getIndex();return new La("value",this,new Rn(e.snapshotNode,new ve(n._repo,n._path),r))},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,null)}},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Ma(this,e,n):null},t.prototype.matches=function(e){return e instanceof t?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1},t.prototype.hasAnyCallback=function(){return this.callbackContext!==null},t}(),Va=function(){function t(e,n){this.eventType=e,this.callbackContext=n}return t.prototype.respondsTo=function(e){var n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Ma(this,e,n):null},t.prototype.createEvent=function(e,n){g(e.childName!=null,"Child events should have a childName.");var r=Ge(new ve(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new La(e.type,this,new Rn(e.snapshotNode,r,i),e.prevName)},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,e.prevName)}},t.prototype.matches=function(e){return e instanceof t?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1},t.prototype.hasAnyCallback=function(){return!!this.callbackContext},t}();function Vt(t,e,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var a=n,s=function(c,f){ar(t._repo,t,l),a(c,f)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u=new Fa(n,o||void 0),l=e==="value"?new Wa(u):new Va(e,u);return Rf(t._repo,t,l),function(){return ar(t._repo,t,l)}}function ur(t,e,n,r){return Vt(t,"value",e,n,r)}function Gi(t,e,n,r){return Vt(t,"child_added",e,n,r)}function ji(t,e,n,r){return Vt(t,"child_changed",e,n,r)}function zi(t,e,n,r){return Vt(t,"child_moved",e,n,r)}function Hi(t,e,n,r){return Vt(t,"child_removed",e,n,r)}function Qi(t,e,n){var r=null,i=n?new Fa(n):null;e==="value"?r=new Wa(i):e&&(r=new Va(e,i)),ar(t._repo,t,r)}var le=function(){function t(){}return t}(),Ba=function(t){M(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){pe("endAt",this._value,n._path,!0);var r=Kn(n._queryParams,this._value,this._key);if(Tn(r),Pe(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new re(n._repo,n._path,r,n._orderByCalled)},e}(le);function jf(t,e){return $t("endAt","key",e,!0),new Ba(t,e)}var zf=function(t){M(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){pe("endBefore",this._value,n._path,!1);var r=Gl(n._queryParams,this._value,this._key);if(Tn(r),Pe(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new re(n._repo,n._path,r,n._orderByCalled)},e}(le);function Hf(t,e){return $t("endBefore","key",e,!0),new zf(t,e)}var Ua=function(t){M(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){pe("startAt",this._value,n._path,!0);var r=qn(n._queryParams,this._value,this._key);if(Tn(r),Pe(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new re(n._repo,n._path,r,n._orderByCalled)},e}(le);function Qf(t,e){return t===void 0&&(t=null),$t("startAt","key",e,!0),new Ua(t,e)}var Yf=function(t){M(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){pe("startAfter",this._value,n._path,!1);var r=Ul(n._queryParams,this._value,this._key);if(Tn(r),Pe(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new re(n._repo,n._path,r,n._orderByCalled)},e}(le);function qf(t,e){return $t("startAfter","key",e,!0),new Yf(t,e)}var Kf=function(t){M(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new re(n._repo,n._path,Vl(n._queryParams,this._limit),n._orderByCalled)},e}(le);function Xf(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Kf(t)}var Jf=function(t){M(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new re(n._repo,n._path,Bl(n._queryParams,this._limit),n._orderByCalled)},e}(le);function Zf(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Jf(t)}var eh=function(t){M(e,t);function e(n){var r=t.call(this)||this;return r._path=n,r}return e.prototype._apply=function(n){In(n,"orderByChild");var r=new N(this._path);if(b(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Sr(r),o=fn(n._queryParams,i);return Pe(o),new re(n._repo,n._path,o,!0)},e}(le);function th(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return At("orderByChild","path",t,!1),new eh(t)}var nh=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){In(n,"orderByKey");var r=fn(n._queryParams,fe);return Pe(r),new re(n._repo,n._path,r,!0)},e}(le);function rh(){return new nh}var ih=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){In(n,"orderByPriority");var r=fn(n._queryParams,P);return Pe(r),new re(n._repo,n._path,r,!0)},e}(le);function oh(){return new ih}var ah=function(t){M(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){In(n,"orderByValue");var r=fn(n._queryParams,Ir);return Pe(r),new re(n._repo,n._path,r,!0)},e}(le);function sh(){return new ah}var uh=function(t){M(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){if(pe("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ba(this._value,this._key)._apply(new Ua(this._value,this._key)._apply(n))},e}(le);function lh(t,e){return $t("equalTo","key",e,!0),new uh(t,e)}function oe(t){for(var e,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=Z(t);try{for(var a=K(r),s=a.next();!s.done;s=a.next()){var u=s.value;o=u._apply(o)}}catch(l){e={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o}kc(ve);$c(ve);/**
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
 */var ch="FIREBASE_DATABASE_EMULATOR_HOST",lr={},Ga=!1;function fh(t,e,n,r){t.repoInfo_=new yr(e+":"+n,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function ja(t,e,n,r,i){var o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),U("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");var a=sr(o,i),s=a.repoInfo,u,l=void 0;typeof process<"u"&&(l=process.env[ch]),l?(u=!0,o="http://"+l+"?ns="+s.namespace,a=sr(o,i),s=a.repoInfo):u=!a.repoInfo.secure;var c=i&&u?new gt(gt.OWNER):new Vu(t.name,t.options,e);Ra("Invalid Firebase Database URL",a),b(a.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");var f=dh(s,t,c,new Wu(t.name,n));return new vh(f,t)}function hh(t,e){var n=lr[e];(!n||n[t.key]!==t)&&he("Database "+e+"("+t.repoInfo_+") has already been deleted."),Pa(t),delete n[t.key]}function dh(t,e,n,r){var i=lr[e.name];i||(i={},lr[e.name]=i);var o=i[t.toURLString()];return o&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new gf(t,Ga,n,r),i[t.toURLString()]=o,o}function ph(t){Ga=t}var vh=function(){function t(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(t.prototype,"_repo",{get:function(){return this._instanceStarted||(yf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new ve(this._repo,I())),this._rootInternal},enumerable:!1,configurable:!0}),t.prototype._delete=function(){return this._rootInternal!==null&&(hh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},t.prototype._checkNotDeleted=function(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")},t}();function _h(t,e,n,r){r===void 0&&(r={}),t=Z(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&he("Cannot call useEmulator() after instance has already been initialized.");var i=t._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new gt(gt.OWNER);else if(r.mockUserToken){var a=typeof r.mockUserToken=="string"?r.mockUserToken:Ls(r.mockUserToken,t.app.options.projectId);o=new gt(a)}fh(i,e,n,o)}function gh(t){t=Z(t),t._checkNotDeleted("goOffline"),Pa(t._repo)}function yh(t){t=Z(t),t._checkNotDeleted("goOnline"),Nf(t._repo)}/**
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
 */var mh={".sv":"timestamp"};function Eh(){return mh}function Ch(t){return{".sv":{increment:t}}}/**
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
 */var bh=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();function wh(t,e,n){var r;if(t=Z(t),te("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new Y,a=function(u,l,c){var f=null;u?o.reject(u):(f=new Rn(c,new ve(t._repo,t._path),P),o.resolve(new bh(l,f)))},s=ur(t,function(){});return Pf(t._repo,t._path,e,a,s,i),o.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sh=function(){function t(e){this._delegate=e}return t.prototype.cancel=function(e){m("OnDisconnect.cancel",0,1,arguments.length),B("OnDisconnect.cancel","onComplete",e,!0);var n=this._delegate.cancel();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.remove=function(e){m("OnDisconnect.remove",0,1,arguments.length),B("OnDisconnect.remove","onComplete",e,!0);var n=this._delegate.remove();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.set=function(e,n){m("OnDisconnect.set",1,2,arguments.length),B("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(e);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.setWithPriority=function(e,n,r){m("OnDisconnect.setWithPriority",2,3,arguments.length),B("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(e,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(e,n){if(m("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){for(var r={},i=0;i<e.length;++i)r[""+i]=e[i];e=r,j("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}B("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(e);return n&&o.then(function(){return n(null)},function(a){return n(a)}),o},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return m("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct=function(){function t(e,n){this._database=e,this._delegate=n}return t.prototype.val=function(){return m("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},t.prototype.exportVal=function(){return m("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},t.prototype.toJSON=function(){return m("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.exists=function(){return m("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},t.prototype.child=function(e){return m("DataSnapshot.child",0,1,arguments.length),e=String(e),At("DataSnapshot.child","path",e,!1),new t(this._database,this._delegate.child(e))},t.prototype.hasChild=function(e){return m("DataSnapshot.hasChild",1,1,arguments.length),At("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)},t.prototype.getPriority=function(){return m("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},t.prototype.forEach=function(e){var n=this;return m("DataSnapshot.forEach",1,1,arguments.length),B("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(function(r){return e(new t(n._database,r))})},t.prototype.hasChildren=function(){return m("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(t.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),t.prototype.numChildren=function(){return m("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},t.prototype.getRef=function(){return m("DataSnapshot.ref",0,0,arguments.length),new $e(this._database,this._delegate.ref)},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),t}(),za=function(){function t(e,n){this.database=e,this._delegate=n}return t.prototype.on=function(e,n,r,i){var o=this,a;m("Query.on",2,4,arguments.length),B("Query.on","callback",n,!1);var s=t.getCancelAndContextArgs_("Query.on",r,i),u=function(c,f){n.call(s.context,new Ct(o.database,c),f)};u.userCallback=n,u.context=s.context;var l=(a=s.cancel)===null||a===void 0?void 0:a.bind(s.context);switch(e){case"value":return ur(this._delegate,u,l),n;case"child_added":return Gi(this._delegate,u,l),n;case"child_removed":return Hi(this._delegate,u,l),n;case"child_changed":return ji(this._delegate,u,l),n;case"child_moved":return zi(this._delegate,u,l),n;default:throw new Error(q("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},t.prototype.off=function(e,n,r){if(m("Query.off",0,3,arguments.length),ff("Query.off",e,!0),B("Query.off","callback",n,!0),si("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,Qi(this._delegate,e,i)}else Qi(this._delegate,e)},t.prototype.get=function(){var e=this;return Gf(this._delegate).then(function(n){return new Ct(e.database,n)})},t.prototype.once=function(e,n,r,i){var o=this;m("Query.once",1,4,arguments.length),B("Query.once","callback",n,!0);var a=t.getCancelAndContextArgs_("Query.once",r,i),s=new Y,u=function(c,f){var h=new Ct(o.database,c);n&&n.call(a.context,h,f),s.resolve(h)};u.userCallback=n,u.context=a.context;var l=function(c){a.cancel&&a.cancel.call(a.context,c),s.reject(c)};switch(e){case"value":ur(this._delegate,u,l,{onlyOnce:!0});break;case"child_added":Gi(this._delegate,u,l,{onlyOnce:!0});break;case"child_removed":Hi(this._delegate,u,l,{onlyOnce:!0});break;case"child_changed":ji(this._delegate,u,l,{onlyOnce:!0});break;case"child_moved":zi(this._delegate,u,l,{onlyOnce:!0});break;default:throw new Error(q("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise},t.prototype.limitToFirst=function(e){return m("Query.limitToFirst",1,1,arguments.length),new t(this.database,oe(this._delegate,Xf(e)))},t.prototype.limitToLast=function(e){return m("Query.limitToLast",1,1,arguments.length),new t(this.database,oe(this._delegate,Zf(e)))},t.prototype.orderByChild=function(e){return m("Query.orderByChild",1,1,arguments.length),new t(this.database,oe(this._delegate,th(e)))},t.prototype.orderByKey=function(){return m("Query.orderByKey",0,0,arguments.length),new t(this.database,oe(this._delegate,rh()))},t.prototype.orderByPriority=function(){return m("Query.orderByPriority",0,0,arguments.length),new t(this.database,oe(this._delegate,oh()))},t.prototype.orderByValue=function(){return m("Query.orderByValue",0,0,arguments.length),new t(this.database,oe(this._delegate,sh()))},t.prototype.startAt=function(e,n){return e===void 0&&(e=null),m("Query.startAt",0,2,arguments.length),new t(this.database,oe(this._delegate,Qf(e,n)))},t.prototype.startAfter=function(e,n){return e===void 0&&(e=null),m("Query.startAfter",0,2,arguments.length),new t(this.database,oe(this._delegate,qf(e,n)))},t.prototype.endAt=function(e,n){return e===void 0&&(e=null),m("Query.endAt",0,2,arguments.length),new t(this.database,oe(this._delegate,jf(e,n)))},t.prototype.endBefore=function(e,n){return e===void 0&&(e=null),m("Query.endBefore",0,2,arguments.length),new t(this.database,oe(this._delegate,Hf(e,n)))},t.prototype.equalTo=function(e,n){return m("Query.equalTo",1,2,arguments.length),new t(this.database,oe(this._delegate,lh(e,n)))},t.prototype.toString=function(){return m("Query.toString",0,0,arguments.length),this._delegate.toString()},t.prototype.toJSON=function(){return m("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.isEqual=function(e){if(m("Query.isEqual",1,1,arguments.length),!(e instanceof t)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)},t.getCancelAndContextArgs_=function(e,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,B(e,"cancel",i.cancel,!0),i.context=r,si(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(q(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(t.prototype,"ref",{get:function(){return new $e(this.database,new ve(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),t}(),$e=function(t){M(e,t);function e(n,r){var i=t.call(this,n,new re(r._repo,r._path,new na,!1))||this;return i.database=n,i._delegate=r,i}return e.prototype.getKey=function(){return m("Reference.key",0,0,arguments.length),this._delegate.key},e.prototype.child=function(n){return m("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new e(this.database,Ge(this._delegate,n))},e.prototype.getParent=function(){m("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new e(this.database,n):null},e.prototype.getRoot=function(){return m("Reference.root",0,0,arguments.length),new e(this.database,this._delegate.root)},e.prototype.set=function(n,r){m("Reference.set",1,2,arguments.length),B("Reference.set","onComplete",r,!0);var i=qr(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(n,r){if(m("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,j("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}te("Reference.update",this._delegate._path),B("Reference.update","onComplete",r,!0);var a=Uf(this._delegate,n);return r&&a.then(function(){return r(null)},function(s){return r(s)}),a},e.prototype.setWithPriority=function(n,r,i){m("Reference.setWithPriority",2,3,arguments.length),B("Reference.setWithPriority","onComplete",i,!0);var o=Bf(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(a){return i(a)}),o},e.prototype.remove=function(n){m("Reference.remove",0,1,arguments.length),B("Reference.remove","onComplete",n,!0);var r=Wf(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.transaction=function(n,r,i){var o=this;m("Reference.transaction",1,3,arguments.length),B("Reference.transaction","transactionUpdate",n,!1),B("Reference.transaction","onComplete",r,!0),df("Reference.transaction","applyLocally",i,!0);var a=wh(this._delegate,n,{applyLocally:i}).then(function(s){return new Ih(s.committed,new Ct(o.database,s.snapshot))});return r&&a.then(function(s){return r(null,s.committed,s.snapshot)},function(s){return r(s,!1,null)}),a},e.prototype.setPriority=function(n,r){m("Reference.setPriority",1,2,arguments.length),B("Reference.setPriority","onComplete",r,!0);var i=Vf(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.push=function(n,r){var i=this;m("Reference.push",0,2,arguments.length),B("Reference.push","onComplete",r,!0);var o=$f(this._delegate,n),a=o.then(function(u){return new e(i.database,u)});r&&a.then(function(){return r(null)},function(u){return r(u)});var s=new e(this.database,o);return s.then=a.then.bind(a),s.catch=a.catch.bind(a,void 0),s},e.prototype.onDisconnect=function(){return te("Reference.onDisconnect",this._delegate._path),new Sh(new Ff(this._delegate._repo,this._delegate._path))},Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),e}(za);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn=function(){function t(e,n){var r=this;this._delegate=e,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return t.prototype.useEmulator=function(e,n,r){r===void 0&&(r={}),_h(this._delegate,e,n,r)},t.prototype.ref=function(e){if(m("database.ref",0,1,arguments.length),e instanceof $e){var n=Ui(this._delegate,e.toString());return new $e(this,n)}else{var n=$a(this._delegate,e);return new $e(this,n)}},t.prototype.refFromURL=function(e){var n="database.refFromURL";m(n,1,1,arguments.length);var r=Ui(this._delegate,e);return new $e(this,r)},t.prototype.goOffline=function(){return m("database.goOffline",0,0,arguments.length),gh(this._delegate)},t.prototype.goOnline=function(){return m("database.goOnline",0,0,arguments.length),yh(this._delegate)},t.ServerValue={TIMESTAMP:Eh(),increment:function(e){return Ch(e)}},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Th=function(){Me.forceDisallow(),Er.forceAllow()},Rh=function(){Er.forceDisallow()},Nh=function(){return Me.isAvailable()},Ah=function(t,e){var n=t._delegate._repo.persistentConnection_;n.securityDebugCallback_=e},Oh=function(t,e){Af(t._delegate._repo,e)},Ph=function(t,e){Of(t._delegate._repo,e)},xh=function(t){return t._delegate._repo.dataUpdateCount},kh=function(t,e){return mf(t._delegate._repo,e)};function Dh(t){var e=t.app,n=t.url,r=t.version,i=t.customAuthImpl,o=t.namespace,a=t.nodeAdmin,s=a===void 0?!1:a;Eo(r);var u=new fo("auth-internal",new ho("database-standalone"));return u.setComponent(new Ot("auth-internal",function(){return i},"PRIVATE")),{instance:new sn(ja(e,u,void 0,n,s),e),namespace:o}}var Lh=Object.freeze({__proto__:null,forceLongPolling:Th,forceWebSockets:Rh,isWebSocketsAvailable:Nh,setSecurityDebugCallback:Ah,stats:Oh,statsIncrementCounter:Ph,dataUpdateCount:xh,interceptServerData:kh,initStandalone:Dh});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mh=Ve;Ve.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ve.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};var Fh=Uo,$h=function(t){var e=Ve.prototype.put;return Ve.prototype.put=function(n,r,i,o){o!==void 0&&(o=t()),e.call(this,n,r,i,o)},function(){Ve.prototype.put=e}},Wh=yr,Vh=function(t){return t._delegate._queryIdentifier},Bh=function(t){ph(t)},Uh=Object.freeze({__proto__:null,DataConnection:Mh,RealTimeConnection:Fh,hijackHash:$h,ConnectionTarget:Wh,queryIdentifier:Vh,forceRestClient:Bh});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gh=sn.ServerValue;function jh(t){Eo(t.SDK_VERSION),t.INTERNAL.registerComponent(new Ot("database",function(e,n){var r=n.instanceIdentifier,i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new sn(ja(i,o,a,r),i)},"PUBLIC").setServiceProps({Reference:$e,Query:za,Database:sn,DataSnapshot:Ct,enableLogging:So,INTERNAL:Lh,ServerValue:Gh,TEST_ACCESS:Uh}).setMultipleInstances(!0)),t.registerVersion(Ru,Nu)}jh(Pt);const zh={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},Hh=Pt.initializeApp(zh).database();function Qh(){const t=to();Hh.ref("users/"+t.uid).set({device:t.device,concentration:t.concentration,ageGroup:t.ageGroup,dyslexia:t.dyslexia,dyscalculia:t.dyscalculia})}const Yh={setup:()=>({v$:As()}),data(){return{uid:"",device:"",concentration:null,ageGroup:"",dyslexia:null,dyscalculia:null,accept:null,submitted:!1,devices:[{label:"Mouse",value:"Mouse"},{label:"Touchscreen",value:"Touchscreen"},{label:"Pen",value:"Pen"},{label:"Trackpad",value:"Trackpad"},{label:"Other",value:"Other"}],numToStatement:t=>t==1?"Very Bad (1)":t==2?"Bad (2)":t==3?"Good (3)":t==4?"Very Good (4)":" "}},validations(){return{device:{required:qe},concentration:{required:qe},ageGroup:{required:qe},dyslexia:{required:qe},dyscalculia:{required:qe},accept:{required:qe}}},created(){this.uid=this.gen_uid(),console.log(this.uid)},mounted(){},methods:{handleSubmit(t){if(this.submitted=!0,t)this.storeData(),this.$router.push("about");else return},storeData(){const t=to();t.uid=this.uid,t.device=this.device,t.concentration=this.concentration,t.ageGroup=Number(this.ageGroup),t.dyslexia=this.dyslexia=="Yes",t.dyscalculia=this.dyscalculia=="Yes",Qh()},gen_uid(){var t=window.navigator,e=window.screen,n=t.mimeTypes.length;return n+=t.userAgent.replace(/\D+/g,""),n+=t.plugins.length,n+=e.height||"",n+=e.width||"",n+=e.pixelDepth||"",n}}},Ha=t=>(hs("data-v-5467d512"),t=t(),ds(),t),qh={class:"form-demo"},Kh={class:"flex justify-content-center"},Xh={class:"card"},Jh=Ha(()=>T("h3",{class:"text-center"},"Please fill out the form to begin with the study.",-1)),Zh={class:"field"},ed={class:"field"},td=Yi(" Rate how well this statement applies from 1-4: "),nd=Ha(()=>T("br",null,null,-1)),rd=Yi(' "I am in a calm environment with enough light and I am able to concentrate." '),id=[td,nd,rd],od={class:"field"},ad={class:"field-radiobutton"},sd={class:"field-radiobutton"},ud={class:"field"},ld={class:"field-radiobutton"},cd={class:"field-radiobutton"},fd={class:"field"},hd={class:"field-radiobutton"},dd={class:"field-radiobutton"},pd={class:"field-checkbox"};function vd(t,e,n,r,i,o){const a=ft("Dropdown"),s=ft("Slider"),u=ft("RadioButton"),l=ft("Checkbox"),c=ft("Button");return us(),ls("div",qh,[T("div",Kh,[T("div",Xh,[Jh,T("form",{onSubmit:e[9]||(e[9]=cs(f=>o.handleSubmit(!t.v$.$invalid),["prevent"])),class:"p-fluid"},[T("div",Zh,[T("h4",{class:F({"p-error":t.v$.device.$invalid&&i.submitted})},"What is your method of input?",2),ce(a,{modelValue:t.v$.device.$model,"onUpdate:modelValue":e[0]||(e[0]=f=>t.v$.device.$model=f),class:F({"p-invalid":t.v$.device.$invalid&&i.submitted}),options:i.devices,optionLabel:"label",optionValue:"value",placeholder:"Select an input"},null,8,["modelValue","class","options"])]),T("div",ed,[T("h4",{class:F({"p-error":t.v$.concentration.$invalid&&i.submitted})},id,2),ce(s,{modelValue:t.v$.concentration.$model,"onUpdate:modelValue":e[1]||(e[1]=f=>t.v$.concentration.$model=f),class:F({"p-invalid":t.v$.concentration.$invalid&&i.submitted}),id:"concentration-slider",min:1,max:4},null,8,["modelValue","class"]),T("h4",{id:"concentration-text",class:F({"p-error":t.v$.concentration.$invalid&&i.submitted})},"Rating: "+fs(i.numToStatement(i.concentration)),3)]),T("div",od,[T("h4",{class:F({"p-error":t.v$.ageGroup.$invalid&&i.submitted})},"Please select your age group:",2),T("div",ad,[ce(u,{inputId:"group1",name:"ageGroup",value:"1",modelValue:t.v$.ageGroup.$model,"onUpdate:modelValue":e[2]||(e[2]=f=>t.v$.ageGroup.$model=f),class:F({"p-invalid":t.v$.ageGroup.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"group1",class:F({"p-error":t.v$.ageGroup.$invalid&&i.submitted})},"0-17 years",2)]),T("div",sd,[ce(u,{inputId:"group2",name:"ageGroup",value:"2",modelValue:t.v$.ageGroup.$model,"onUpdate:modelValue":e[3]||(e[3]=f=>t.v$.ageGroup.$model=f),class:F({"p-invalid":t.v$.ageGroup.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"group2",class:F({"p-error":t.v$.ageGroup.$invalid&&i.submitted})},"18-23 years",2)])]),T("div",ud,[T("h4",{class:F({"p-error":t.v$.dyslexia.$invalid&&i.submitted})},"Do you have dyslexia or any other reading disability?",2),T("div",ld,[ce(u,{inputId:"yes1",name:"dyslexia",value:"Yes",modelValue:t.v$.dyslexia.$model,"onUpdate:modelValue":e[4]||(e[4]=f=>t.v$.dyslexia.$model=f),class:F({"p-invalid":t.v$.dyslexia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"yes1",class:F({"p-error":t.v$.dyslexia.$invalid&&i.submitted})},"Yes",2)]),T("div",cd,[ce(u,{inputId:"no1",name:"dyslexia",value:"No",modelValue:t.v$.dyslexia.$model,"onUpdate:modelValue":e[5]||(e[5]=f=>t.v$.dyslexia.$model=f),class:F({"p-invalid":t.v$.dyslexia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"no1",class:F({"p-error":t.v$.dyslexia.$invalid&&i.submitted})},"No",2)])]),T("div",fd,[T("h4",{class:F({"p-error":t.v$.dyscalculia.$invalid&&i.submitted})},"Do you have dyscalculia?",2),T("div",hd,[ce(u,{inputId:"yes2",name:"dyscalculia",value:"Yes",modelValue:t.v$.dyscalculia.$model,"onUpdate:modelValue":e[6]||(e[6]=f=>t.v$.dyscalculia.$model=f),class:F({"p-invalid":t.v$.dyscalculia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"yes2",class:F({"p-error":t.v$.dyscalculia.$invalid&&i.submitted})},"Yes",2)]),T("div",dd,[ce(u,{inputId:"no2",name:"dyscalculia",value:"No",modelValue:t.v$.dyscalculia.$model,"onUpdate:modelValue":e[7]||(e[7]=f=>t.v$.dyscalculia.$model=f),class:F({"p-invalid":t.v$.dyscalculia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"no2",class:F({"p-error":t.v$.dyscalculia.$invalid&&i.submitted})},"No",2)])]),T("div",pd,[ce(l,{id:"accept",name:"accept",value:"Accept",modelValue:t.v$.accept.$model,"onUpdate:modelValue":e[8]||(e[8]=f=>t.v$.accept.$model=f),class:F({"p-invalid":t.v$.accept.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"accept",class:F({"p-error":t.v$.accept.$invalid&&i.submitted})},"I agree to the terms and conditions",2)]),ce(c,{type:"submit",label:"Submit",class:"mt-2"})],32)])])])}const gd=ss(Yh,[["render",vd],["__scopeId","data-v-5467d512"]]);export{gd as default};
