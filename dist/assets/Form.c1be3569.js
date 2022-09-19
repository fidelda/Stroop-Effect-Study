import{g as Ha,r as X,o as Ga,w as Bt,i as hr,a as Mr,b as ja,c as M,d as Ka,e as Qa,p as Ri,u as x,f as xi,n as Ai,h as Ya,j as qa,D as N,k as R,l as k,m as K,q as Je,s as Ce,t as H,F as ht,v as fn,x as b,y as Xa,T as Ja,Z as Jn,O as z,C as Za,z as el,U as tl,A as dt,B as Vr,E as Qe,G as ue,H as on,I as Ot,J as be,K as nl,L as rl,M as Br,N as il}from"./index.423219ed.js";import{_ as ol}from"./_plugin-vue_export-helper.cdc0426e.js";function Ni(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,r)=>(t.includes(r)||(n[r]=x(e[r])),n),{})}function dn(e){return typeof e=="function"}function sl(e){return Ka(e)||Qa(e)}function Oo(e,t,n){let r=e;const i=t.split(".");for(let o=0;o<i.length;o++){if(!r[i[o]])return n;r=r[i[o]]}return r}function Zn(e,t,n){return M(()=>e.some(r=>Oo(t,r,{[n]:!1})[n]))}function ki(e,t,n){return M(()=>e.reduce((r,i)=>{const o=Oo(t,i,{[n]:!1})[n]||[];return r.concat(o)},[]))}function Ro(e,t,n,r){return e.call(r,x(t),x(n),r)}function xo(e){return e.$valid!==void 0?!e.$valid:!e}function al(e,t,n,r,i,o,s){let{$lazy:a,$rewardEarly:l}=i,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,d=arguments.length>10?arguments[10]:void 0;const h=X(!!r.value),p=X(0);n.value=!1;const _=Bt([t,r].concat(u,d),()=>{if(a&&!r.value||l&&!f.value&&!n.value)return;let v;try{v=Ro(e,t,c,s)}catch(m){v=Promise.reject(m)}p.value++,n.value=!!p.value,h.value=!1,Promise.resolve(v).then(m=>{p.value--,n.value=!!p.value,o.value=m,h.value=xo(m)}).catch(m=>{p.value--,n.value=!!p.value,o.value=m,h.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:h,$unwatch:_}}function ll(e,t,n,r,i,o,s,a){let{$lazy:l,$rewardEarly:u}=r;const c=()=>({}),f=M(()=>{if(l&&!n.value||u&&!a.value)return!1;let d=!0;try{const h=Ro(e,t,s,o);i.value=h,d=xo(h)}catch(h){i.value=h}return d});return{$unwatch:c,$invalid:f}}function ul(e,t,n,r,i,o,s,a,l,u,c){const f=X(!1),d=e.$params||{},h=X(null);let p,_;e.$async?{$invalid:p,$unwatch:_}=al(e.$validator,t,f,n,r,h,i,e.$watchTargets,l,u,c):{$invalid:p,$unwatch:_}=ll(e.$validator,t,n,r,h,i,l,u);const v=e.$message;return{$message:dn(v)?M(()=>v(Ni({$pending:f,$invalid:p,$params:Ni(d),$model:t,$response:h,$validator:o,$propertyPath:a,$property:s}))):v||"",$params:d,$pending:f,$invalid:p,$response:h,$unwatch:_}}function cl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=x(e),n=Object.keys(t),r={},i={},o={};let s=null;return n.forEach(a=>{const l=t[a];switch(!0){case dn(l.$validator):r[a]=l;break;case dn(l):r[a]={$validator:l};break;case a==="$validationGroups":s=l;break;case a.startsWith("$"):o[a]=l;break;default:i[a]=l}}),{rules:r,nestedValidators:i,config:o,validationGroups:s}}function fl(){}const dl="__root";function Ao(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(i){return Promise.reject(i)}}function hl(e,t){return Ao(e,fl,t)}function pl(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function vl(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function _l(e,t,n,r,i,o,s,a,l){const u=Object.keys(e),c=r.get(i,e),f=X(!1),d=X(!1),h=X(0);if(c){if(!c.$partial)return c;c.$unwatch(),f.value=c.$dirty.value}const p={$dirty:f,$path:i,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return u.length?(u.forEach(_=>{p[_]=ul(e[_],t,p.$dirty,o,s,_,n,i,l,d,h)}),p.$externalResults=M(()=>a.value?[].concat(a.value).map((_,v)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${v}`,$message:_,$params:{},$response:null,$pending:!1})):[]),p.$invalid=M(()=>{const _=u.some(v=>x(p[v].$invalid));return d.value=_,!!p.$externalResults.value.length||_}),p.$pending=M(()=>u.some(_=>x(p[_].$pending))),p.$error=M(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=M(()=>u.filter(_=>x(p[_].$invalid)).map(_=>{const v=p[_];return Mr({$propertyPath:i,$property:n,$validator:_,$uid:`${i}-${_}`,$message:v.$message,$params:v.$params,$response:v.$response,$pending:v.$pending})}).concat(p.$externalResults.value)),p.$errors=M(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>u.forEach(_=>{p[_].$unwatch()}),p.$commit=()=>{d.value=!0,h.value=Date.now()},r.set(i,e,p),p):(c&&r.set(i,e,p),p)}function ml(e,t,n,r,i,o,s){const a=Object.keys(e);return a.length?a.reduce((l,u)=>(l[u]=pr({validations:e[u],state:t,key:u,parentKey:n,resultsCache:r,globalConfig:i,instance:o,externalResults:s}),l),{}):{}}function gl(e,t,n){const r=M(()=>[t,n].filter(p=>p).reduce((p,_)=>p.concat(Object.values(x(_))),[])),i=M({get(){return e.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){e.$dirty.value=p}}),o=M(()=>{const p=x(e.$silentErrors)||[],_=r.value.filter(v=>(x(v).$silentErrors||[]).length).reduce((v,m)=>v.concat(...m.$silentErrors),[]);return p.concat(_)}),s=M(()=>{const p=x(e.$errors)||[],_=r.value.filter(v=>(x(v).$errors||[]).length).reduce((v,m)=>v.concat(...m.$errors),[]);return p.concat(_)}),a=M(()=>r.value.some(p=>p.$invalid)||x(e.$invalid)||!1),l=M(()=>r.value.some(p=>x(p.$pending))||x(e.$pending)||!1),u=M(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||i.value),c=M(()=>i.value?l.value||a.value:!1),f=()=>{e.$touch(),r.value.forEach(p=>{p.$touch()})},d=()=>{e.$commit(),r.value.forEach(p=>{p.$commit()})},h=()=>{e.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&f(),{$dirty:i,$errors:s,$invalid:a,$anyDirty:u,$error:c,$pending:l,$touch:f,$reset:h,$silentErrors:o,$commit:d}}function pr(e){const t=vl(function(){return Xn(),pl(function(){if(v.$rewardEarly)return Oi(),hl(Ai)},function(){return Ao(Ai,function(){return new Promise(W=>{if(!qn.value)return W(!Yn.value);const je=Bt(qn,()=>{W(!Yn.value),je()})})})})});let{validations:n,state:r,key:i,parentKey:o,childResults:s,resultsCache:a,globalConfig:l={},instance:u,externalResults:c}=e;const f=o?`${o}.${i}`:i,{rules:d,nestedValidators:h,config:p,validationGroups:_}=cl(n),v=Object.assign({},l,p),m=i?M(()=>{const W=x(r);return W?x(W[i]):void 0}):r,y=Object.assign({},x(c)||{}),S=M(()=>{const W=x(c);return i?W?x(W[i]):void 0:W}),F=_l(d,m,i,a,f,v,u,S,r),U=ml(h,m,f,a,v,u,S),le={};_&&Object.entries(_).forEach(W=>{let[je,Pe]=W;le[je]={$invalid:Zn(Pe,U,"$invalid"),$error:Zn(Pe,U,"$error"),$pending:Zn(Pe,U,"$pending"),$errors:ki(Pe,U,"$errors"),$silentErrors:ki(Pe,U,"$silentErrors")}});const{$dirty:Tt,$errors:Fa,$invalid:Yn,$anyDirty:Ma,$error:Va,$pending:qn,$touch:Xn,$reset:Ba,$silentErrors:$a,$commit:Oi}=gl(F,U,s),Ua=i?M({get:()=>x(m),set:W=>{Tt.value=!0;const je=x(r),Pe=x(c);Pe&&(Pe[i]=y[i]),hr(je[i])?je[i].value=W:je[i]=W}}):null;i&&v.$autoDirty&&Bt(m,()=>{Tt.value||Xn();const W=x(c);W&&(W[i]=y[i])},{flush:"sync"});function Wa(W){return(s.value||{})[W]}function za(){hr(c)?c.value=y:Object.keys(y).length===0?Object.keys(c).forEach(W=>{delete c[W]}):Object.assign(c,y)}return Mr(Object.assign({},F,{$model:Ua,$dirty:Tt,$error:Va,$errors:Fa,$invalid:Yn,$anyDirty:Ma,$pending:qn,$touch:Xn,$reset:Ba,$path:f||dl,$silentErrors:$a,$validate:t,$commit:Oi},s&&{$getResultsForChild:Wa,$clearExternalResults:za,$validationGroups:le},U))}class yl{constructor(){this.storage=new Map}set(t,n,r){this.storage.set(t,{rules:n,result:r})}checkRulesValidity(t,n,r){const i=Object.keys(r),o=Object.keys(n);return o.length!==i.length||!o.every(a=>i.includes(a))?!1:o.every(a=>n[a].$params?Object.keys(n[a].$params).every(l=>x(r[a].$params[l])===x(n[a].$params[l])):!0)}get(t,n){const r=this.storage.get(t);if(!r)return;const{rules:i,result:o}=r,s=this.checkRulesValidity(t,n,i),a=o.$unwatch?o.$unwatch:()=>({});return s?o:{$dirty:o.$dirty,$partial:!0,$unwatch:a}}}const un={COLLECT_ALL:!0,COLLECT_NONE:!1},Pi=Symbol("vuelidate#injectChildResults"),Li=Symbol("vuelidate#removeChildResults");function bl(e){let{$scope:t,instance:n}=e;const r={},i=X([]),o=M(()=>i.value.reduce((c,f)=>(c[f]=x(r[f]),c),{}));function s(c,f){let{$registerAs:d,$scope:h,$stopPropagation:p}=f;p||t===un.COLLECT_NONE||h===un.COLLECT_NONE||t!==un.COLLECT_ALL&&t!==h||(r[d]=c,i.value.push(d))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],s);function a(c){i.value=i.value.filter(f=>f!==c),delete r[c]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const l=xi(Pi,[]);Ri(Pi,n.__vuelidateInjectInstances);const u=xi(Li,[]);return Ri(Li,n.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:l,removeValidationResultsFromParent:u}}function No(e){return new Proxy(e,{get(t,n){return typeof t[n]=="object"?No(t[n]):M(()=>t[n])}})}let Di=0;function wl(e,t){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=e,e=void 0,t=void 0);let{$registerAs:i,$scope:o=un.COLLECT_ALL,$stopPropagation:s,$externalResults:a,currentVueInstance:l}=r;const u=l||((n=Ha())===null||n===void 0?void 0:n.proxy),c=u?u.$options:{};i||(Di+=1,i=`_vuelidate_${Di}`);const f=X({}),d=new yl,{childResults:h,sendValidationResultsToParent:p,removeValidationResultsFromParent:_}=u?bl({$scope:o,instance:u}):{childResults:X({})};if(!e&&c.validations){const v=c.validations;t=X({}),Ga(()=>{t.value=u,Bt(()=>dn(v)?v.call(t.value,new No(t.value)):v,m=>{f.value=pr({validations:m,state:t,childResults:h,resultsCache:d,globalConfig:r,instance:u,externalResults:a||u.vuelidateExternalResults})},{immediate:!0})}),r=c.validationsConfig||r}else{const v=hr(e)||sl(e)?e:Mr(e||{});Bt(v,m=>{f.value=pr({validations:m,state:t,childResults:h,resultsCache:d,globalConfig:r,instance:u!=null?u:{},externalResults:a})},{immediate:!0})}return u&&(p.forEach(v=>v(f,{$registerAs:i,$scope:o,$stopPropagation:s})),ja(()=>_.forEach(v=>v(i)))),M(()=>Object.assign({},x(f.value),h.value))}const ko=e=>{if(e=x(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length};function st(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=>(r=x(r),!ko(r)||t.every(i=>i.test(r)))}st(/^[a-zA-Z]*$/);st(/^[a-zA-Z0-9]*$/);st(/^\d*(\.\d+)?$/);const Cl=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;st(Cl);function El(e){return typeof e=="string"&&(e=e.trim()),ko(e)}var Rt={$validator:El,$message:"Value is required",$params:{type:"required"}};const Il=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;st(Il);st(/(^[0-9]*$)|(^-[0-9]+$)/);st(/^[-]?\d*(\.\d+)?$/);const Po=Ya("datastore",()=>({uid:X(),device:X(),concentration:X(),age_group:X(),dyslexia:X(),dyscalculia:X()}));var vr=function(e,t){return vr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},vr(e,t)};function $(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");vr(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Be=function(){return Be=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Be.apply(this,arguments)};function Lo(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function Do(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function ce(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ie(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function $e(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g=function(e,t){if(!e)throw wt(t)},wt=function(e){return new Error("Firebase Database ("+Fo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mo=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Sl=function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{var o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},$r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4,d=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(d=64)),r.push(n[c],n[f],n[d],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mo(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Sl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var l=i<e.length,u=l?n[e.charAt(i)]:64;++i;var c=i<e.length,f=c?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();var d=o<<2|a>>4;if(r.push(d),u!==64){var h=a<<4&240|u>>2;if(r.push(h),f!==64){var p=u<<6&192|f;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Vo=function(e){var t=Mo(e);return $r.encodeByteArray(t,!0)},Fi=function(e){return Vo(e).replace(/\./g,"")},Mi=function(e){try{return $r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e){return $t(void 0,e)}function $t(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)!t.hasOwnProperty(r)||!Tl(r)||(e[r]=$t(e[r],t[r]));return e}function Tl(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se=function(){function e(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){t.resolve=n,t.reject=r})}return e.prototype.wrapCallback=function(t){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof t=="function"&&(n.promise.catch(function(){}),t.length===1?t(r):t(r,i))}},e}();/**
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
 */function Ol(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=Be({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Fi(JSON.stringify(n)),Fi(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $o(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rl())}function xl(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Al(){return typeof self=="object"&&self.self===self}function Nl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uo(){return Fo.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kl="FirebaseError",Pl=function(e){$(t,e);function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=kl,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Ur.prototype.create),o}return t}(Error),Ur=function(){function e(t,n,r){this.service=t,this.serviceName=n,this.errors=r}return e.prototype.create=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+t,s=this.errors[t],a=s?Ll(s,i):"Error",l=this.serviceName+": "+a+" ("+o+").",u=new Pl(o,l,i);return u},e}();function Ll(e,t){return e.replace(Dl,function(n,r){var i=t[r];return i!=null?String(i):"<"+r+"?>"})}var Dl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){return JSON.parse(e)}function G(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Ut(Mi(o[0])||""),n=Ut(Mi(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Fl=function(e){var t=Wo(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ml=function(e){var t=Wo(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function rt(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function _r(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hn(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(e){for(var t=[],n=function(l,u){Array.isArray(u)?u.forEach(function(c){t.push(encodeURIComponent(l)+"="+encodeURIComponent(c))}):t.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bl=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(t,n){n||(n=0);var r=this.W_;if(typeof t=="string")for(var i=0;i<16;i++)r[i]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var s=this.chain_[0],a=this.chain_[1],l=this.chain_[2],u=this.chain_[3],c=this.chain_[4],f,d,i=0;i<80;i++){i<40?i<20?(f=u^a&(l^u),d=1518500249):(f=a^l^u,d=1859775393):i<60?(f=a&l|u&(a|l),d=2400959708):(f=a^l^u,d=3395469782);var o=(s<<5|s>>>27)+f+c+d+r[i]&4294967295;c=u,u=l,l=(a<<30|a>>>2)&4294967295,a=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},e.prototype.update=function(t,n){if(t!=null){n===void 0&&(n=t.length);for(var r=n-this.blockSize,i=0,o=this.buf_,s=this.inbuf_;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}},e.prototype.digest=function(){var t=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[i]=this.chain_[r]>>o&255,++i;return t},e}();function $l(e,t){var n=new Ul(e,t);return n.subscribe.bind(n)}var Ul=function(){function e(t,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(r)}).catch(function(i){r.error(i)})}return e.prototype.next=function(t){this.forEachObserver(function(n){n.next(t)})},e.prototype.error=function(t){this.forEachObserver(function(n){n.error(t)}),this.close(t)},e.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},e.prototype.subscribe=function(t,n,r){var i=this,o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wl(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=er),o.error===void 0&&(o.error=er),o.complete===void 0&&(o.complete=er);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),s},e.prototype.unsubscribeOne=function(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},e.prototype.forEachObserver=function(t){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,t)},e.prototype.sendOne=function(t,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[t]!==void 0)try{n(r.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},e.prototype.close=function(t){var n=this;this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},e}();function Wl(e,t){if(typeof e!="object"||e===null)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&typeof e[i]=="function")return!0}return!1}function er(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w=function(e,t,n,r){var i;if(r<t?i="at least "+t:r>n&&(i=n===0?"none":"no more than "+n),i){var o=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function ae(e,t){return e+" failed: "+t+" argument "}function Q(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(ae(e,t)+"must be a valid function.")}function Vi(e,t,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(ae(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zl=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,g(r<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Rn=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function he(e){return e&&e._delegate?e._delegate:e}var Kt=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var Ye="[DEFAULT]";/**
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
 */var zo=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new se;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(Gl(t))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}try{for(var i=ce(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=ie(o.value,2),a=s[0],l=s[1],u=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:u});l.resolve(c)}catch{}}}catch(f){n={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=Ye),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return Lo(this,void 0,void 0,function(){var t;return Do(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all($e($e([],ie(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),ie(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=Ye),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=Ye),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var i=t.options,o=i===void 0?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=ce(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var c=ie(u.value,2),f=c[0],d=c[1],h=this.normalizeInstanceIdentifier(f);s===h&&d.resolve(a)}}catch(p){n={error:p}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);var s=this.instances.get(i);return s&&t(s,i),function(){o.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,i,o=this.onInitCallbacks.get(n);if(!!o)try{for(var s=ce(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(t,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Hl(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=Ye),this.component?this.component.multipleInstances?t:Ye:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Hl(e){return e===Ye?void 0:e}function Gl(e){return e.instantiationMode==="EAGER"}/**
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
 */var Ho=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new zo(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/*! *****************************************************************************
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
***************************************************************************** */function ye(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Wr=[],P;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(P||(P={}));var Go={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},jl=P.INFO,Kl=(Ke={},Ke[P.DEBUG]="log",Ke[P.VERBOSE]="log",Ke[P.INFO]="info",Ke[P.WARN]="warn",Ke[P.ERROR]="error",Ke),Ql=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=new Date().toISOString(),o=Kl[t];if(o)console[o].apply(console,ye(["["+i+"]  "+e.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}},jo=function(){function e(t){this.name=t,this._logLevel=jl,this._logHandler=Ql,this._userLogHandler=null,Wr.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in P))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(t){this._logLevel=typeof t=="string"?Go[t]:t},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ye([this,P.DEBUG],t)),this._logHandler.apply(this,ye([this,P.DEBUG],t))},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ye([this,P.VERBOSE],t)),this._logHandler.apply(this,ye([this,P.VERBOSE],t))},e.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ye([this,P.INFO],t)),this._logHandler.apply(this,ye([this,P.INFO],t))},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ye([this,P.WARN],t)),this._logHandler.apply(this,ye([this,P.WARN],t))},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,ye([this,P.ERROR],t)),this._logHandler.apply(this,ye([this,P.ERROR],t))},e}();function Yl(e){Wr.forEach(function(t){t.setLogLevel(e)})}function ql(e,t){for(var n=function(s){var a=null;t&&t.level&&(a=Go[t.level]),e===null?s.userLogHandler=null:s.userLogHandler=function(l,u){for(var c=[],f=2;f<arguments.length;f++)c[f-2]=arguments[f];var d=c.map(function(h){if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(function(h){return h}).join(" ");u>=(a!=null?a:l.logLevel)&&e({level:P[u].toLowerCase(),message:d,args:c,type:l.name})}},r=0,i=Wr;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */var Le,Xl=(Le={},Le["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",Le["bad-app-name"]="Illegal App name: '{$appName}",Le["duplicate-app"]="Firebase App named '{$appName}' already exists",Le["app-deleted"]="Firebase App named '{$appName}' already deleted",Le["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Le["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Le),ft=new Ur("app","Firebase",Xl),Ko="@firebase/app",Jl="0.6.30",Zl="@firebase/analytics",eu="@firebase/app-check",tu="@firebase/auth",nu="@firebase/database",ru="@firebase/functions",iu="@firebase/installations",ou="@firebase/messaging",su="@firebase/performance",au="@firebase/remote-config",lu="@firebase/storage",uu="@firebase/firestore",cu="firebase-wrapper";/**
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
 */var Z,pn="[DEFAULT]",fu=(Z={},Z[Ko]="fire-core",Z[Zl]="fire-analytics",Z[eu]="fire-app-check",Z[tu]="fire-auth",Z[nu]="fire-rtdb",Z[ru]="fire-fn",Z[iu]="fire-iid",Z[ou]="fire-fcm",Z[su]="fire-perf",Z[au]="fire-rc",Z[lu]="fire-gcs",Z[uu]="fire-fst",Z["fire-js"]="fire-js",Z[cu]="fire-js-all",Z);/**
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
 */var vt=new jo("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn=function(){function e(t,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=Bo(t),this.container=new Ho(n.name),this._addComponent(new Kt("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var t=this;return new Promise(function(n){t.checkDestroyed_(),n()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(n){return n.delete()}))}).then(function(){t.isDeleted_=!0})},e.prototype._getService=function(t,n){var r;n===void 0&&(n=pn),this.checkDestroyed_();var i=this.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},e.prototype._removeServiceInstance=function(t,n){n===void 0&&(n=pn),this.container.getProvider(t).clearInstance(n)},e.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(n){vt.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,n)}},e.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw ft.create("app-deleted",{appName:this.name_})},e}();cn.prototype.name&&cn.prototype.options||cn.prototype.delete||console.log("dc");var du="8.10.0";/**
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
 */function hu(e){var t={},n=new Map,r={__esModule:!0,initializeApp:s,app:o,registerVersion:u,setLogLevel:Yl,onLog:c,apps:null,SDK_VERSION:du,INTERNAL:{registerComponent:l,removeApp:i,components:n,useAsService:f}};r.default=r,Object.defineProperty(r,"apps",{get:a});function i(d){delete t[d]}function o(d){if(d=d||pn,!fe(t,d))throw ft.create("no-app",{appName:d});return t[d]}o.App=e;function s(d,h){if(h===void 0&&(h={}),typeof h!="object"||h===null){var p=h;h={name:p}}var _=h;_.name===void 0&&(_.name=pn);var v=_.name;if(typeof v!="string"||!v)throw ft.create("bad-app-name",{appName:String(v)});if(fe(t,v))throw ft.create("duplicate-app",{appName:v});var m=new e(d,_,r);return t[v]=m,m}function a(){return Object.keys(t).map(function(d){return t[d]})}function l(d){var h=d.name;if(n.has(h))return vt.debug("There were multiple attempts to register component "+h+"."),d.type==="PUBLIC"?r[h]:null;if(n.set(h,d),d.type==="PUBLIC"){var p=function(y){if(y===void 0&&(y=o()),typeof y[h]!="function")throw ft.create("invalid-app-argument",{appName:h});return y[h]()};d.serviceProps!==void 0&&$t(p,d.serviceProps),r[h]=p,e.prototype[h]=function(){for(var y=[],S=0;S<arguments.length;S++)y[S]=arguments[S];var F=this._getService.bind(this,h);return F.apply(this,d.multipleInstances?y:[])}}for(var _=0,v=Object.keys(t);_<v.length;_++){var m=v[_];t[m]._addComponent(d)}return d.type==="PUBLIC"?r[h]:null}function u(d,h,p){var _,v=(_=fu[d])!==null&&_!==void 0?_:d;p&&(v+="-"+p);var m=v.match(/\s|\//),y=h.match(/\s|\//);if(m||y){var S=['Unable to register library "'+v+'" with version "'+h+'":'];m&&S.push('library name "'+v+'" contains illegal characters (whitespace or "/")'),m&&y&&S.push("and"),y&&S.push('version name "'+h+'" contains illegal characters (whitespace or "/")'),vt.warn(S.join(" "));return}l(new Kt(v+"-version",function(){return{library:v,version:h}},"VERSION"))}function c(d,h){if(d!==null&&typeof d!="function")throw ft.create("invalid-log-argument");ql(d,h)}function f(d,h){if(h==="serverAuth")return null;var p=h;return p}return r}/**
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
 */function Qo(){var e=hu(cn);e.INTERNAL=Be(Be({},e.INTERNAL),{createFirebaseNamespace:Qo,extendNamespace:t,createSubscribe:$l,ErrorFactory:Ur,deepExtend:$t});function t(n){$t(e,n)}return e}var zr=Qo();/**
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
 */var pu=function(){function e(t){this.container=t}return e.prototype.getPlatformInfoString=function(){var t=this.container.getProviders();return t.map(function(n){if(vu(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},e}();function vu(e){var t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}/**
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
 */function _u(e,t){e.INTERNAL.registerComponent(new Kt("platform-logger",function(n){return new pu(n)},"PRIVATE")),e.registerVersion(Ko,Jl,t),e.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Al()&&self.firebase!==void 0){vt.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var Bi=self.firebase.SDK_VERSION;Bi&&Bi.indexOf("LITE")>=0&&vt.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var mu=zr.initializeApp;zr.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return xl()&&vt.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),mu.apply(void 0,e)};var Qt=zr;_u(Qt);var gu="firebase",Yo="8.10.1";/**
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
 */Qt.registerVersion(gu,Yo,"app");Qt.SDK_VERSION=Yo;var yu="@firebase/database",bu="0.11.0";/**
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
 */var qo="";function Xo(e){qo=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wu=function(){function e(t){this.domStorage_=t,this.prefix_="firebase:"}return e.prototype.set=function(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),G(n))},e.prototype.get=function(t){var n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ut(n)},e.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},e.prototype.prefixedName_=function(t){return this.prefix_+t},e.prototype.toString=function(){return this.domStorage_.toString()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cu=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}return e.prototype.set=function(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n},e.prototype.get=function(t){return fe(this.cache_,t)?this.cache_[t]:null},e.prototype.remove=function(t){delete this.cache_[t]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new wu(t)}}catch{}return new Cu},Ze=Jo("localStorage"),mr=Jo("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=new jo("@firebase/database"),Zo=function(){var e=1;return function(){return e++}}(),es=function(e){var t=zl(e),n=new Bl;n.update(t);var r=n.digest();return $r.encodeByteArray(r)},Yt=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=Yt.apply(null,i):typeof i=="object"?n+=G(i):n+=i,n+=" "}return n},tt=null,$i=!0,ts=function(e,t){g(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(pt.logLevel=P.VERBOSE,tt=pt.log.bind(pt),t&&mr.set("logging_enabled",!0)):typeof e=="function"?tt=e:(tt=null,mr.remove("logging_enabled"))},Y=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if($i===!0&&($i=!1,tt===null&&mr.get("logging_enabled")===!0&&ts(!0)),tt){var n=Yt.apply(null,e);tt(n)}},qt=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Y.apply(void 0,$e([e],ie(t)))}},gr=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+Yt.apply(void 0,$e([],ie(e)));pt.error(n)},Te=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+Yt.apply(void 0,$e([],ie(e)));throw pt.error(n),new Error(n)},J=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+Yt.apply(void 0,$e([],ie(e)));pt.warn(n)},Eu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xn=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Iu=function(e){if(document.readyState==="complete")e();else{var t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ke="[MIN_NAME]",Oe="[MAX_NAME]",at=function(e,t){if(e===t)return 0;if(e===ke||t===Oe)return-1;if(t===ke||e===Oe)return 1;var n=vn(e),r=vn(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1},Su=function(e,t){return e===t?0:e<t?-1:1},xt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+G(t))},Hr=function(e){if(typeof e!="object"||e===null)return G(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)i!==0&&(r+=","),r+=G(t[i]),r+=":",r+=Hr(e[t[i]]);return r+="}",r},ns=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function j(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var rs=function(e){g(!xn(e),"Invalid JSON number");var t=11,n=52,r=(1<<t-1)-1,i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));var u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();var c=u.join(""),f="";for(l=0;l<64;l+=8){var d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Tu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ou=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ru(e,t){var n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}var xu=new RegExp("^-?(0*)\\d{1,10}$"),is=-2147483648,Gr=2147483647,vn=function(e){if(xu.test(e)){var t=Number(e);if(t>=is&&t<=Gr)return t}return null},Ct=function(e){try{e()}catch(t){setTimeout(function(){var n=t.stack||"";throw J("Exception was thrown by user callback.",n),t},Math.floor(0))}},Au=function(){var e=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pt=function(e,t){var n=setTimeout(e,t);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */var Nu=function(){function e(t,n){var r=this;this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return e.prototype.getToken=function(t){var n=this;return this.appCheck?this.appCheck.getToken(t):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){J('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ku=function(){function e(t,n,r){var i=this;this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return e.prototype.getToken=function(t){var n=this;return this.auth_?this.auth_.getToken(t).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(t)})},e.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(t)},e}(),Lt=function(){function e(t){this.accessToken=t}return e.prototype.getToken=function(t){return Promise.resolve({accessToken:this.accessToken})},e.prototype.addTokenChangeListener=function(t){t(this.accessToken)},e.prototype.removeTokenChangeListener=function(t){},e.prototype.notifyForInvalidToken=function(){},e.OWNER="owner",e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr="5",os="v",ss="s",as="r",ls="f",us=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cs="ls",Pu="p",yr="ac",fs="websocket",ds="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr=function(){function e(t,n,r,i,o,s,a){o===void 0&&(o=!1),s===void 0&&(s=""),a===void 0&&(a=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ze.get("host:"+t)||this._host}return e.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},e.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ze.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),e.prototype.toString=function(){var t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},e.prototype.toURLString=function(){var t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+t+this.host+"/"+n},e}();function Lu(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function hs(e,t,n){g(typeof t=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");var r;if(t===fs)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===ds)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Lu(e)&&(n.ns=e.namespace);var i=[];return j(n,function(o,s){i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Du=function(){function e(){this.counters_={}}return e.prototype.incrementCounter=function(t,n){n===void 0&&(n=1),fe(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n},e.prototype.get=function(){return Bo(this.counters_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr={},nr={};function Qr(e){var t=e.toString();return tr[t]||(tr[t]=new Du),tr[t]}function Fu(e,t){var n=e.toString();return nr[n]||(nr[n]=t()),nr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mu=function(){function e(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(t,n){var r=this;this.pendingResponses[t]=n;for(var i=function(){var a=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var l=function(c){a[c]&&Ct(function(){r.onMessage_(a[c])})},u=0;u<a.length;++u)l(u);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var s=i();if(s==="break")break}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui="start",Vu="close",Bu="pLPCommand",$u="pRTLPCB",ps="id",vs="pw",_s="ser",Uu="cb",Wu="seg",zu="ts",Hu="d",Gu="dframe",ms=1870,gs=30,ju=ms-gs,Ku=25e3,Qu=3e4,Yr=function(){function e(t,n,r,i,o,s,a){var l=this;this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qt(t),this.stats_=Qr(n),this.urlFn=function(u){return l.appCheckToken&&(u[yr]=l.appCheckToken),hs(n,ds,u)}}return e.prototype.open=function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mu(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(Qu)),Iu(function(){if(!r.isClosed_){r.scriptTagHolder=new Yu(function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=ie(s,5),u=l[0],c=l[1],f=l[2];if(l[3],l[4],r.incrementIncomingBytes_(s),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,u===Ui)r.id=c,r.password=f;else if(u===Vu)c?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(c,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+u)},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=ie(s,2),u=l[0],c=l[1];r.incrementIncomingBytes_(s),r.myPacketOrderer.handleResponse(u,c)},function(){r.onClosed_()},r.urlFn);var i={};i[Ui]="t",i[_s]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[Uu]=r.scriptTagHolder.uniqueCallbackIdentifier),i[os]=jr,r.transportSessionId&&(i[ss]=r.transportSessionId),r.lastSessionId&&(i[cs]=r.lastSessionId),r.applicationId&&(i[Pu]=r.applicationId),r.appCheckToken&&(i[yr]=r.appCheckToken),typeof location<"u"&&location.hostname&&us.test(location.hostname)&&(i[as]=ls);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return e.forceAllow_?!0:!e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tu()&&!Ou()},e.prototype.markConnectionHealthy=function(){},e.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},e.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},e.prototype.send=function(t){var n=G(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=Vo(n),i=ns(r,ju),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(t,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[Gu]="t",r[ps]=t,r[vs]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},e.prototype.incrementIncomingBytes_=function(t){var n=G(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},e}(),Yu=function(){function e(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zo(),window[Bu+this.uniqueCallbackIdentifier]=t,window[$u+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}var a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Y("frame writing exception"),l.stack&&Y(l.stack),Y(l)}}}return e.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{var n=t.contentWindow.document;n||Y("No IE domain setting required")}catch{var r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},e.prototype.close=function(){var t=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){t.myIFrame!==null&&(document.body.removeChild(t.myIFrame),t.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},e.prototype.startLongPoll=function(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););},e.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var t={};t[ps]=this.myID,t[vs]=this.myPW,t[_s]=this.currentSerial;for(var n=this.urlFn(t),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+gs+r.length<=ms){var s=this.pendingSegs.shift();r=r+"&"+Wu+i+"="+s.seg+"&"+zu+i+"="+s.ts+"&"+Hu+i+"="+s.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},e.prototype.enqueueSegment=function(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()},e.prototype.addLongPollTag_=function(t,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(Ku)),s=function(){clearTimeout(o),i()};this.addTag(t,s)},e.prototype.addTag=function(t,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){Y("Long-poll script failed to load: "+t),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qu=16384,Xu=45e3,_n=null;typeof MozWebSocket<"u"?_n=MozWebSocket:typeof WebSocket<"u"&&(_n=WebSocket);var Xe=function(){function e(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qt(this.connId),this.stats_=Qr(n),this.connURL=e.connectionURL_(n,s,a,i),this.nodeAdmin=n.nodeAdmin}return e.connectionURL_=function(t,n,r,i){var o={};return o[os]=jr,typeof location<"u"&&location.hostname&&us.test(location.hostname)&&(o[as]=ls),n&&(o[ss]=n),r&&(o[cs]=r),i&&(o[yr]=i),hs(t,fs,o)},e.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ze.set("previous_websocket_failure",!0);try{var i,o,s,a;if(!Uo()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new _n(this.connURL,[],o)}}catch(u){this.log_("Error instantiating WebSocket.");var l=u.message||u.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(u){r.handleIncomingFrame(u)},this.mySock.onerror=function(u){r.log_("WebSocket error.  Closing connection.");var c=u.message||u.data;c&&r.log_(c),r.onClosed_()}},e.prototype.start=function(){},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){var t=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&_n!==null&&!e.forceDisallow_},e.previouslyFailed=function(){return Ze.isInMemoryStorage||Ze.get("previous_websocket_failure")===!0},e.prototype.markConnectionHealthy=function(){Ze.remove("previous_websocket_failure")},e.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=Ut(n);this.onMessage(r)}},e.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},e.prototype.extractFrameCount_=function(t){if(g(this.frames===null,"We already have a frame buffer"),t.length<=6){var n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t},e.prototype.handleIncomingFrame=function(t){if(this.mySock!==null){var n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},e.prototype.send=function(t){this.resetKeepAlive();var n=G(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=ns(n,qu);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},e.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},e.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},e.prototype.resetKeepAlive=function(){var t=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(Xu))},e.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},e.responsesRequiredToBeHealthy=2,e.healthyTimeout=3e4,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ju=function(){function e(t){this.initTransports_(t)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[Yr,Xe]},enumerable:!1,configurable:!0}),e.prototype.initTransports_=function(t){var n,r,i=Xe&&Xe.isAvailable(),o=i&&!Xe.previouslyFailed();if(t.webSocketOnly&&(i||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Xe];else{var s=this.transports_=[];try{for(var a=ce(e.ALL_TRANSPORTS),l=a.next();!l.done;l=a.next()){var u=l.value;u&&u.isAvailable()&&s.push(u)}}catch(c){n={error:c}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}},e.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},e.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu=6e4,ec=5e3,tc=10*1024,nc=100*1024,rr="t",Wi="d",rc="s",zi="r",ic="e",Hi="o",Gi="a",ji="n",Ki="p",oc="h",ys=function(){function e(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qt("c:"+this.id+":"),this.transportManager_=new Ju(n),this.log_("Connection created"),this.start_()}return e.prototype.start_=function(){var t=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=Pt(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>nc?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>tc?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(o)))},e.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.disconnReceiver_=function(t){var n=this;return function(r){t===n.conn_?n.onConnectionLost_(r):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},e.prototype.connReceiver_=function(t){var n=this;return function(r){n.state_!==2&&(t===n.rx_?n.onPrimaryMessageReceived_(r):t===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},e.prototype.sendRequest=function(t){var n={t:"d",d:t};this.sendData_(n)},e.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},e.prototype.onSecondaryControl_=function(t){if(rr in t){var n=t[rr];n===Gi?this.upgradeIfSecondaryHealthy_():n===zi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},e.prototype.onSecondaryMessageReceived_=function(t){var n=xt("t",t),r=xt("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},e.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ki,d:{}}}))},e.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ji,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},e.prototype.onPrimaryMessageReceived_=function(t){var n=xt("t",t),r=xt("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},e.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},e.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},e.prototype.onControl_=function(t){var n=xt(rr,t);if(Wi in t){var r=t[Wi];if(n===oc)this.onHandshake_(r);else if(n===ji){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rc?this.onConnectionShutdown_(r):n===zi?this.onReset_(r):n===ic?gr("Server Error: "+r):n===Hi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gr("Unknown control packet command: "+n)}},e.prototype.onHandshake_=function(t){var n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jr!==r&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())},e.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)},e.prototype.startUpgrade_=function(t){var n=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),Pt(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(Zu))},e.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())},e.prototype.onConnectionEstablished_=function(t,n){var r=this;this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pt(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(ec))},e.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ki,d:{}}}))},e.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()},e.prototype.onConnectionLost_=function(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ze.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},e.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},e.prototype.sendData_=function(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)},e.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},e.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bs=function(){function e(){}return e.prototype.put=function(t,n,r,i){},e.prototype.merge=function(t,n,r,i){},e.prototype.refreshAuthToken=function(t){},e.prototype.refreshAppCheckToken=function(t){},e.prototype.onDisconnectPut=function(t,n,r){},e.prototype.onDisconnectMerge=function(t,n,r){},e.prototype.onDisconnectCancel=function(t,n){},e.prototype.reportStats=function(t){},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws=function(){function e(t){this.allowedEvents_=t,this.listeners_={},g(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[t]))for(var i=$e([],ie(this.listeners_[t])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},e.prototype.on=function(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});var i=this.getInitialEvent(t);i&&n.apply(r,i)},e.prototype.off=function(t,n,r){this.validateEventType_(t);for(var i=this.listeners_[t]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},e.prototype.validateEventType_=function(t){g(this.allowedEvents_.find(function(n){return n===t}),"Unknown event: "+t)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qi=function(e){$(t,e);function t(){var n=e.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$o()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return g(n==="online","Unknown event type: "+n),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi=32,qi=768,A=function(){function e(t,n){if(n===void 0){this.pieces_=t.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}return e.prototype.toString=function(){for(var t="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"},e}();function O(){return new A("")}function E(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ue(e){return e.pieces_.length-e.pieceNum_}function L(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new A(e.pieces_,t)}function qr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sc(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Wt(e,t){return t===void 0&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function Cs(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new A(t,0)}function V(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof A)for(var r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else for(var i=t.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new A(n,0)}function I(e){return e.pieceNum_>=e.pieces_.length}function oe(e,t){var n=E(e),r=E(t);if(n===null)return t;if(n===r)return oe(L(e),L(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ac(e,t){for(var n=Wt(e,0),r=Wt(t,0),i=0;i<n.length&&i<r.length;i++){var o=at(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Xr(e,t){if(Ue(e)!==Ue(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function pe(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Ue(e)>Ue(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var lc=function(){function e(t,n){this.errorPrefix_=n,this.parts_=Wt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=Rn(this.parts_[r]);Es(this)}return e}();function uc(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Rn(t),Es(e)}function cc(e){var t=e.parts_.pop();e.byteLength_-=Rn(t),e.parts_.length>0&&(e.byteLength_-=1)}function Es(e){if(e.byteLength_>qi)throw new Error(e.errorPrefix_+"has a key path longer than "+qi+" bytes ("+e.byteLength_+").");if(e.parts_.length>Yi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yi+") or object contains a cycle "+qe(e))}function qe(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fc=function(e){$(t,e);function t(){var n=e.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return g(n==="visible","Unknown event type: "+n),[this.visible_]},t}(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At=1e3,dc=60*5*1e3,hc=3*1e3,Xi=30*1e3,pc=1.3,vc=3e4,_c="server_kill",Ji=3,nt=function(e){$(t,e);function t(n,r,i,o,s,a,l,u){var c=e.call(this)||this;if(c.repoInfo_=n,c.applicationId_=r,c.onDataUpdate_=i,c.onConnectStatus_=o,c.onServerInfoUpdate_=s,c.authTokenProvider_=a,c.appCheckTokenProvider_=l,c.authOverride_=u,c.id=t.nextPersistentConnectionId_++,c.log_=qt("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=At,c.maxReconnectDelay_=dc,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,u&&!Uo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return fc.getInstance().on("visible",c.onVisible_,c),n.host.indexOf("fblocal")===-1&&Qi.getInstance().on("online",c.onOnline_,c),c}return t.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,s={r:o,a:n,b:r};this.log_(G(s)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[o]=i)},t.prototype.get=function(n){var r=this;this.initConnection_();var i=new se,o={p:n._path.toString(),q:n._queryObject},s={action:"g",request:o,onComplete:function(l){var u=l.d;l.s==="ok"?(r.onDataUpdate_(o.p,u,!1,null),i.resolve(u)):i.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var l=r.outstandingGets_[a];l===void 0||s!==l||(delete r.outstandingGets_[a],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+a+" timed out on connection"),i.reject(new Error("Client is offline.")))},hc),this.connected_&&this.sendGet_(a),i.promise},t.prototype.listen=function(n,r,i,o){this.initConnection_();var s=n._queryIdentifier,a=n._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");var l={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)},t.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},t.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),s=i._queryIdentifier;this.log_("Listen on "+o+" for "+s);var a={p:o},l="q";n.tag&&(a.q=i._queryObject,a.t=n.tag),a.h=n.hashFn(),this.sendRequest(l,a,function(u){var c=u.d,f=u.s;t.warnOnListenWarnings_(c,i);var d=r.listens.get(o)&&r.listens.get(o).get(s);d===n&&(r.log_("listen response",u),f!=="ok"&&r.removeListen_(o,s),n.onComplete&&n.onComplete(f,c))})},t.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&fe(n,"w")){var i=rt(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',s=r._path.toString();J("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(s+" to your security rules for better performance."))}}},t.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},t.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||Ml(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xi)},t.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},t.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=Fl(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(s){var a=s.s,l=s.d||"error";n.authToken_===r&&(a==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(a,l))})}},t.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},t.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var s=this.removeListen_(i,o);s&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},t.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var s={p:n},a="n";o&&(s.q=i,s.t=o),this.sendRequest(a,s)},t.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},t.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},t.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},t.prototype.sendOnDisconnect_=function(n,r,i,o){var s={p:r,d:i};this.log_("onDisconnect "+n,s),this.sendRequest(n,s,function(a){o&&setTimeout(function(){o(a.s,a.d)},Math.floor(0))})},t.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},t.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},t.prototype.putInternal=function(n,r,i,o,s){this.initConnection_();var a={p:r,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:n,request:a,onComplete:o}),this.outstandingPutCount_++;var l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+r)},t.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,s=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(a){r.log_(i+" response",a),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),s&&s(a.s,a.d)})},t.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var s=o.s;if(s!=="ok"){var a=o.d;r.log_("reportStats","Error sending stats: "+a)}})}},t.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+G(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},t.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):gr("Unrecognized action received from server: "+G(n)+`
Are you using the latest client?`)},t.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},t.prototype.scheduleConnect_=function(n){var r=this;g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},t.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},t.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},t.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},t.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>vc&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pc)}this.onConnectStatus_(!1)},t.prototype.establishConnection_=function(){return Lo(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c,f,d,h,p,_,v=this;return Do(this,function(m){switch(m.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+t.nextConnectionId_++,s=this.lastSessionId,a=!1,l=null,u=function(){l?l.close():(a=!0,i())},c=function(y){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(y)},this.realtime_={close:u,sendRequest:c},f=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,m.label=1;case 1:return m.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)])];case 2:return d=ie.apply(void 0,[m.sent(),2]),h=d[0],p=d[1],a?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,l=new ys(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(y){J(y+" ("+v.repoInfo_.toString()+")"),v.interrupt(_c)},s)),[3,4];case 3:return _=m.sent(),this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&J(_),u()),[3,4];case 4:return[2]}})})},t.prototype.interrupt=function(n){Y("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},t.prototype.resume=function(n){Y("Resuming connection for reason: "+n),delete this.interruptReasons_[n],_r(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))},t.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},t.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},t.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(s){return Hr(s)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},t.prototype.removeListen_=function(n,r){var i=new A(n).toString(),o;if(this.listens.has(i)){var s=this.listens.get(i);o=s.get(r),s.delete(r),s.size===0&&this.listens.delete(i)}else o=void 0;return o},t.prototype.onAuthRevoked_=function(n,r){Y("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ji&&(this.reconnectDelay_=Xi,this.authTokenProvider_.notifyForInvalidToken()))},t.prototype.onAppCheckRevoked_=function(n,r){Y("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ji&&this.appCheckTokenProvider_.notifyForInvalidToken())},t.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},t.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var s=ce(this.listens.values()),a=s.next();!a.done;a=s.next()){var l=a.value;try{for(var u=(i=void 0,ce(l.values())),c=u.next();!c.done;c=u.next()){var f=c.value;this.sendListen_(f)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}}catch(p){n={error:p}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var h=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(h.action,h.pathString,h.data,h.onComplete)}for(var d=0;d<this.outstandingGets_.length;d++)this.outstandingGets_[d]&&this.sendGet_(d)},t.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+qo.replace(/\./g,"-")]=1,$o()?n["framework.cordova"]=1:Nl()&&(n["framework.reactnative"]=1),this.reportStats(n)},t.prototype.shouldReconnect_=function(){var n=Qi.getInstance().currentlyOnline();return _r(this.interruptReasons_)&&n},t.nextPersistentConnectionId_=0,t.nextConnectionId_=0,t}(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function(){function e(t,n){this.name=t,this.node=n}return e.Wrap=function(t,n){return new e(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(t,n){var r=new T(ke,t),i=new T(ke,n);return this.compare(r,i)!==0},e.prototype.minPost=function(){return T.MIN},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn,Is=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return sn},set:function(n){sn=n},enumerable:!1,configurable:!0}),t.prototype.compare=function(n,r){return at(n.name,r.name)},t.prototype.isDefinedOn=function(n){throw wt("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(n,r){return!1},t.prototype.minPost=function(){return T.MIN},t.prototype.maxPost=function(){return new T(Oe,sn)},t.prototype.makePost=function(n,r){return g(typeof n=="string","KeyIndex indexValue must always be a string."),new T(n,sn)},t.prototype.toString=function(){return".key"},t}(An),Se=new Is;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an=function(){function e(t,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}return e.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n},e.prototype.hasNext=function(){return this.nodeStack_.length>0},e.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},e}(),we=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=r!=null?r:e.RED,this.left=i!=null?i:Ae.EMPTY_NODE,this.right=o!=null?o:Ae.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},e.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},e.prototype.minKey=function(){return this.min_().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(t,n,r){var i=this,o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()},e.prototype.removeMin_=function(){if(this.left.isEmpty())return Ae.EMPTY_NODE;var t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()},e.prototype.remove=function(t,n){var r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()},e.prototype.isRed_=function(){return this.color},e.prototype.fixUp_=function(){var t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},e.prototype.moveRedLeft_=function(){var t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t},e.prototype.moveRedRight_=function(){var t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t},e.prototype.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)},e.prototype.checkMaxDepth_=function(){var t=this.check_();return Math.pow(2,t)<=this.count()+1},e.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)},e.RED=!0,e.BLACK=!1,e}(),mc=function(){function e(){}return e.prototype.copy=function(t,n,r,i,o){return this},e.prototype.insert=function(t,n,r){return new we(t,n,null)},e.prototype.remove=function(t,n){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(t){return!1},e.prototype.reverseTraversal=function(t){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.check_=function(){return 0},e.prototype.isRed_=function(){return!1},e}(),Ae=function(){function e(t,n){n===void 0&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}return e.prototype.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,we.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,we.BLACK,null,null))},e.prototype.get=function(t){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},e.prototype.getPredecessorKey=function(t){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.root_.isEmpty()},e.prototype.count=function(){return this.root_.count()},e.prototype.minKey=function(){return this.root_.minKey()},e.prototype.maxKey=function(){return this.root_.maxKey()},e.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},e.prototype.getIterator=function(t){return new an(this.root_,null,this.comparator_,!1,t)},e.prototype.getIteratorFrom=function(t,n){return new an(this.root_,t,this.comparator_,!1,n)},e.prototype.getReverseIteratorFrom=function(t,n){return new an(this.root_,t,this.comparator_,!0,n)},e.prototype.getReverseIterator=function(t){return new an(this.root_,null,this.comparator_,!0,t)},e.EMPTY_NODE=new mc,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e,t){return at(e.name,t.name)}function Jr(e,t){return at(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br;function yc(e){br=e}var Ss=function(e){return typeof e=="number"?"number:"+rs(e):"string:"+e},Ts=function(e){if(e.isLeafNode()){var t=e.val();g(typeof t=="string"||typeof t=="number"||typeof t=="object"&&fe(t,".sv"),"Priority must be a string or number.")}else g(e===br||e.isEmpty(),"priority of unexpected type.");g(e===br||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi,_t=function(){function e(t,n){n===void 0&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ts(this.priorityNode_)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return Zi},set:function(t){Zi=t},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.priorityNode_},e.prototype.updatePriority=function(t){return new e(this.value_,t)},e.prototype.getImmediateChild=function(t){return t===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return I(t)?this:E(t)===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(t,n){return null},e.prototype.updateImmediateChild=function(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},e.prototype.updateChild=function(t,n){var r=E(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(g(r!==".priority"||Ue(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(t),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(t,n){return!1},e.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Ss(this.priorityNode_.val())+":");var n=typeof this.value_;t+=n+":",n==="number"?t+=rs(this.value_):t+=this.value_,this.lazyHash_=es(t)}return this.lazyHash_},e.prototype.getValue=function(){return this.value_},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(g(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},e.prototype.compareToLeafNode_=function(t){var n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(r);return g(i>=0,"Unknown leaf type: "+n),g(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode()){var n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Os,Rs;function bc(e){Os=e}function wc(e){Rs=e}var Cc=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),s=i.compareTo(o);return s===0?at(n.name,r.name):s},t.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},t.prototype.minPost=function(){return T.MIN},t.prototype.maxPost=function(){return new T(Oe,new _t("[PRIORITY-POST]",Rs))},t.prototype.makePost=function(n,r){var i=Os(n);return new T(r,new _t("[PRIORITY-POST]",i))},t.prototype.toString=function(){return".priority"},t}(An),D=new Cc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ec=Math.log(2),Ic=function(){function e(t){var n=function(o){return parseInt(Math.log(o)/Ec,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(t+1),this.current_=this.count-1;var i=r(this.count);this.bits_=t+1&i}return e.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_);return this.current_--,t},e}(),mn=function(e,t,n,r){e.sort(t);var i=function(l,u){var c=u-l,f,d;if(c===0)return null;if(c===1)return f=e[l],d=n?n(f):f,new we(d,f.node,we.BLACK,null,null);var h=parseInt(c/2,10)+l,p=i(l,h),_=i(h+1,u);return f=e[h],d=n?n(f):f,new we(d,f.node,we.BLACK,p,_)},o=function(l){for(var u=null,c=null,f=e.length,d=function(m,y){var S=f-m,F=f;f-=m;var U=i(S+1,F),le=e[S],Tt=n?n(le):le;h(new we(Tt,le.node,y,null,U))},h=function(m){u?(u.left=m,u=m):(c=m,u=m)},p=0;p<l.count;++p){var _=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));_?d(v,we.BLACK):(d(v,we.BLACK),d(v,we.RED))}return c},s=new Ic(e.length),a=o(s);return new Ae(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir,ct={},gn=function(){function e(t,n){this.indexes_=t,this.indexSet_=n}return Object.defineProperty(e,"Default",{get:function(){return g(ct&&D,"ChildrenNode.ts has not been loaded"),ir=ir||new e({".priority":ct},{".priority":D}),ir},enumerable:!1,configurable:!0}),e.prototype.get=function(t){var n=rt(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Ae?n:null},e.prototype.hasIndex=function(t){return fe(this.indexSet_,t.toString())},e.prototype.addIndex=function(t,n){g(t!==Se,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(T.Wrap),s=o.getNext();s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();var a;i?a=mn(r,t.getCompare()):a=ct;var l=t.toString(),u=Be({},this.indexSet_);u[l]=t;var c=Be({},this.indexes_);return c[l]=a,new e(c,u)},e.prototype.addToIndexes=function(t,n){var r=this,i=hn(this.indexes_,function(o,s){var a=rt(r.indexSet_,s);if(g(a,"Missing index implementation for "+s),o===ct)if(a.isDefinedOn(t.node)){for(var l=[],u=n.getIterator(T.Wrap),c=u.getNext();c;)c.name!==t.name&&l.push(c),c=u.getNext();return l.push(t),mn(l,a.getCompare())}else return ct;else{var f=n.get(t.name),d=o;return f&&(d=d.remove(new T(t.name,f))),d.insert(t,t.node)}});return new e(i,this.indexSet_)},e.prototype.removeFromIndexes=function(t,n){var r=hn(this.indexes_,function(i){if(i===ct)return i;var o=n.get(t.name);return o?i.remove(new T(t.name,o)):i});return new e(r,this.indexSet_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,C=function(){function e(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ts(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return Nt||(Nt=new e(new Ae(Jr),null,gn.Default))},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.priorityNode_||Nt},e.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},e.prototype.getImmediateChild=function(t){if(t===".priority")return this.getPriority();var n=this.children_.get(t);return n===null?Nt:n},e.prototype.getChild=function(t){var n=E(t);return n===null?this:this.getImmediateChild(n).getChild(L(t))},e.prototype.hasChild=function(t){return this.children_.get(t)!==null},e.prototype.updateImmediateChild=function(t,n){if(g(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);var r=new T(t,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));var s=i.isEmpty()?Nt:this.priorityNode_;return new e(i,s,o)},e.prototype.updateChild=function(t,n){var r=E(t);if(r===null)return n;g(E(t)!==".priority"||Ue(t)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(L(t),n);return this.updateImmediateChild(r,i)},e.prototype.isEmpty=function(){return this.children_.isEmpty()},e.prototype.numChildren=function(){return this.children_.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(D,function(l,u){n[l]=u.val(t),r++,o&&e.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):o=!1}),!t&&o&&i<2*r){var s=[];for(var a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.getPriority().isEmpty()||(t+="priority:"+Ss(this.getPriority().val())+":"),this.forEachChild(D,function(n,r){var i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":es(t)}return this.lazyHash_},e.prototype.getPredecessorChildName=function(t,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new T(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)},e.prototype.getFirstChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},e.prototype.getFirstChild=function(t){var n=this.getFirstChildName(t);return n?new T(n,this.children_.get(n)):null},e.prototype.getLastChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},e.prototype.getLastChild=function(t){var n=this.getLastChildName(t);return n?new T(n,this.children_.get(n)):null},e.prototype.forEachChild=function(t,n){var r=this.resolveIndex_(t);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},e.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},e.prototype.getIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,function(s){return s});for(var i=this.children_.getIteratorFrom(t.name,T.Wrap),o=i.peek();o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i},e.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},e.prototype.getReverseIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,function(s){return s});for(var i=this.children_.getReverseIteratorFrom(t.name,T.Wrap),o=i.peek();o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i},e.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Xt?-1:0},e.prototype.withIndex=function(t){if(t===Se||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},e.prototype.isIndexed=function(t){return t===Se||this.indexMap_.hasIndex(t)},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode())return!1;var n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(D),i=n.getIterator(D),o=r.getNext(),s=i.getNext();o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1},e.prototype.resolveIndex_=function(t){return t===Se?null:this.indexMap_.get(t.toString())},e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,e}(),Sc=function(e){$(t,e);function t(){return e.call(this,new Ae(Jr),C.EMPTY_NODE,gn.Default)||this}return t.prototype.compareTo=function(n){return n===this?0:1},t.prototype.equals=function(n){return n===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(n){return C.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(C),Xt=new Sc;Object.defineProperties(T,{MIN:{value:new T(ke,C.EMPTY_NODE)},MAX:{value:new T(Oe,Xt)}});Is.__EMPTY_NODE=C.EMPTY_NODE;_t.__childrenNodeConstructor=C;yc(Xt);wc(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tc=!0;function B(e,t){if(t===void 0&&(t=null),e===null)return C.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),g(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){var n=e;return new _t(n,B(t))}if(!(e instanceof Array)&&Tc){var r=[],i=!1,o=e;if(j(o,function(u,c){if(u.substring(0,1)!=="."){var f=B(c);f.isEmpty()||(i=i||!f.getPriority().isEmpty(),r.push(new T(u,f)))}}),r.length===0)return C.EMPTY_NODE;var s=mn(r,gc,function(u){return u.name},Jr);if(i){var a=mn(r,D.getCompare());return new C(s,B(t),new gn({".priority":a},{".priority":D}))}else return new C(s,B(t),gn.Default)}else{var l=C.EMPTY_NODE;return j(e,function(u,c){if(fe(e,u)&&u.substring(0,1)!=="."){var f=B(c);(f.isLeafNode()||!f.isEmpty())&&(l=l.updateImmediateChild(u,f))}}),l.updatePriority(B(t))}}bc(B);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(e){$(t,e);function t(n){var r=e.call(this)||this;return r.indexPath_=n,g(!I(n)&&E(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return t.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),s=i.compareTo(o);return s===0?at(n.name,r.name):s},t.prototype.makePost=function(n,r){var i=B(n),o=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(r,o)},t.prototype.maxPost=function(){var n=C.EMPTY_NODE.updateChild(this.indexPath_,Xt);return new T(Oe,n)},t.prototype.toString=function(){return Wt(this.indexPath_,0).join("/")},t}(An);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oc=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?at(n.name,r.name):i},t.prototype.isDefinedOn=function(n){return!0},t.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},t.prototype.minPost=function(){return T.MIN},t.prototype.maxPost=function(){return T.MAX},t.prototype.makePost=function(n,r){var i=B(n);return new T(r,i)},t.prototype.toString=function(){return".value"},t}(An),ei=new Oc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wr="-",xs="z",As=786,Rc=function(){var e=0,t=[];return function(n){var r=n===e;e=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=mt.charAt(n%64),n=Math.floor(n/64);g(n===0,"Cannot push at time == 0");var s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=mt.charAt(t[i]);return g(s.length===20,"nextPushId: Length should be 20."),s}}(),eo=function(e){if(e===""+Gr)return wr;var t=vn(e);if(t!=null)return""+(t+1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<As)return n.push(wr),n.join("");for(var i=n.length-1;i>=0&&n[i]===xs;)i--;if(i===-1)return Oe;var o=n[i],s=mt.charAt(mt.indexOf(o)+1);return n[i]=s,n.slice(0,i+1).join("")},to=function(e){if(e===""+is)return ke;var t=vn(e);if(t!=null)return""+(t-1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===wr?n.length===1?""+Gr:(delete n[n.length-1],n.join("")):(n[n.length-1]=mt.charAt(mt.indexOf(n[n.length-1])-1),n.join("")+xs.repeat(As-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){return{type:"value",snapshotNode:e}}function gt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function zt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ht(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function xc(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(){function e(t){this.index_=t}return e.prototype.updateChild=function(t,n,r,i,o,s){g(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(zt(n,a)):g(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(gt(n,r)):s.trackChildChange(Ht(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)},e.prototype.updateFullNode=function(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(D,function(i,o){n.hasChild(i)||r.trackChildChange(zt(i,o))}),n.isLeafNode()||n.forEachChild(D,function(i,o){if(t.hasChild(i)){var s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(Ht(i,o,s))}else r.trackChildChange(gt(i,o))})),n.withIndex(this.index_)},e.prototype.updatePriority=function(t,n){return t.isEmpty()?C.EMPTY_NODE:t.updatePriority(n)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.index_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ks=function(){function e(t){this.indexedFilter_=new ti(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},e.prototype.updateChild=function(t,n,r,i,o,s){return this.matches(new T(n,r))||(r=C.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)},e.prototype.updateFullNode=function(t,n,r){n.isLeafNode()&&(n=C.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);var o=this;return n.forEachChild(D,function(s,a){o.matches(new T(s,a))||(i=i.updateImmediateChild(s,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(t){if(t.hasStart()){var n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()},e.getEndPost_=function(t){if(t.hasEnd()){var n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ac=function(){function e(t){this.rangedFilter_=new ks(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return e.prototype.updateChild=function(t,n,r,i,o,s){return this.rangedFilter_.matches(new T(n,r))||(r=C.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)},e.prototype.updateFullNode=function(t,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var s=0;o.hasNext()&&s<this.limit_;){var a=o.getNext(),l=void 0;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);var u=void 0,c=void 0,f=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var d=this.index_.getCompare();f=function(v,m){return d(m,v)}}else o=i.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();for(var s=0,h=!1;o.hasNext();){var a=o.getNext();!h&&f(u,a)<=0&&(h=!0);var l=h&&s<this.limit_&&f(a,c)<=0;l?s++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},e.prototype.getIndex=function(){return this.index_},e.prototype.fullLimitUpdateChild_=function(t,n,r,i,o){var s;if(this.reverse_){var a=this.index_.getCompare();s=function(y,S){return a(S,y)}}else s=this.index_.getCompare();var l=t;g(l.numChildren()===this.limit_,"");var u=new T(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(l.hasChild(n)){for(var d=l.getImmediateChild(n),h=i.getChildAfterChild(this.index_,c,this.reverse_);h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);var p=h==null?1:s(h,u),_=f&&!r.isEmpty()&&p>=0;if(_)return o!=null&&o.trackChildChange(Ht(n,r,d)),l.updateImmediateChild(n,r);o!=null&&o.trackChildChange(zt(n,d));var v=l.updateImmediateChild(n,C.EMPTY_NODE),m=h!=null&&this.rangedFilter_.matches(h);return m?(o!=null&&o.trackChildChange(gt(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}else return r.isEmpty()?t:f&&s(c,u)>=0?(o!=null&&(o.trackChildChange(zt(c.name,c.node)),o.trackChildChange(gt(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,C.EMPTY_NODE)):t},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}return e.prototype.hasStart=function(){return this.startSet_},e.prototype.hasStartAfter=function(){return this.startAfterSet_},e.prototype.hasEndBefore=function(){return this.endBeforeSet_},e.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},e.prototype.getIndexStartValue=function(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},e.prototype.getIndexStartName=function(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ke},e.prototype.hasEnd=function(){return this.endSet_},e.prototype.getIndexEndValue=function(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},e.prototype.getIndexEndName=function(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oe},e.prototype.hasLimit=function(){return this.limitSet_},e.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},e.prototype.getLimit=function(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_},e.prototype.getIndex=function(){return this.index_},e.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===D},e.prototype.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}();function Nc(e){return e.loadsAllData()?new ti(e.getIndex()):e.hasLimit()?new Ac(e):new ks(e)}function kc(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Pc(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Cr(e,t,n){var r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Lc(e,t,n){var r;if(e.index_===Se)typeof t=="string"&&(t=eo(t)),r=Cr(e,t,n);else{var i=void 0;n==null?i=Oe:i=eo(n),r=Cr(e,t,i)}return r.startAfterSet_=!0,r}function Er(e,t,n){var r=e.copy();return r.endSet_=!0,t===void 0&&(t=null),r.indexEndValue_=t,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Dc(e,t,n){var r,i;return e.index_===Se?(typeof t=="string"&&(t=to(t)),i=Er(e,t,n)):(n==null?r=ke:r=to(n),i=Er(e,t,r)),i.endBeforeSet_=!0,i}function Nn(e,t){var n=e.copy();return n.index_=t,n}function no(e){var t={};if(e.isDefault())return t;var n;return e.index_===D?n="$priority":e.index_===ei?n="$value":e.index_===Se?n="$key":(g(e.index_ instanceof Zr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=G(n),e.startSet_&&(t.startAt=G(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+G(e.indexStartName_))),e.endSet_&&(t.endAt=G(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+G(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ro(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==D&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc=function(e){$(t,e);function t(n,r,i,o){var s=e.call(this)||this;return s.repoInfo_=n,s.onDataUpdate_=r,s.authTokenProvider_=i,s.appCheckTokenProvider_=o,s.log_=qt("p:rest:"),s.listens_={},s}return t.prototype.reportStats=function(n){throw new Error("Method not implemented.")},t.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(g(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},t.prototype.listen=function(n,r,i,o){var s=this,a=n._path.toString();this.log_("Listen called for "+a+" "+n._queryIdentifier);var l=t.getListenId_(n,i),u={};this.listens_[l]=u;var c=no(n._queryParams);this.restRequest_(a+".json",c,function(f,d){var h=d;if(f===404&&(h=null,f=null),f===null&&s.onDataUpdate_(a,h,!1,i),rt(s.listens_,l)===u){var p;f?f===401?p="permission_denied":p="rest_error:"+f:p="ok",o(p,null)}})},t.prototype.unlisten=function(n,r){var i=t.getListenId_(n,r);delete this.listens_[i]},t.prototype.get=function(n){var r=this,i=no(n._queryParams),o=n._path.toString(),s=new se;return this.restRequest_(o+".json",i,function(a,l){var u=l;a===404&&(u=null,a=null),a===null?(r.onDataUpdate_(o,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise},t.prototype.refreshAuthToken=function(n){},t.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(s){var a=ie(s,2),l=a[0],u=a[1];l&&l.accessToken&&(r.auth=l.accessToken),u&&u.token&&(r.ac=u.token);var c=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+Vl(r);o.log_("Sending REST request for "+c);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(i&&f.readyState===4){o.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);var d=null;if(f.status>=200&&f.status<300){try{d=Ut(f.responseText)}catch{J("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,d)}else f.status!==401&&f.status!==404&&J("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})},t}(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc=function(){function e(){this.rootNode_=C.EMPTY_NODE}return e.prototype.getNode=function(t){return this.rootNode_.getChild(t)},e.prototype.updateSnapshot=function(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return{value:null,children:new Map}}function Et(e,t,n){if(I(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{var r=E(t);e.children.has(r)||e.children.set(r,yn());var i=e.children.get(r);t=L(t),Et(i,t,n)}}function Ir(e,t){if(I(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;var n=e.value;return e.value=null,n.forEachChild(D,function(o,s){Et(e,new A(o),s)}),Ir(e,t)}else if(e.children.size>0){var r=E(t);if(t=L(t),e.children.has(r)){var i=Ir(e.children.get(r),t);i&&e.children.delete(r)}return e.children.size===0}else return!0}function Sr(e,t,n){e.value!==null?n(t,e.value):Vc(e,function(r,i){var o=new A(t.toString()+"/"+r);Sr(i,o,n)})}function Vc(e,t){e.children.forEach(function(n,r){t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ls=function(){function e(t){this.collection_=t,this.last_=null}return e.prototype.get=function(){var t=this.collection_.get(),n=Be({},t);return this.last_&&j(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=t,n},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=10*1e3,Bc=30*1e3,$c=5*60*1e3,Uc=function(){function e(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ls(t);var r=io+(Bc-io)*Math.random();Pt(this.reportStats_.bind(this),Math.floor(r))}return e.prototype.reportStats_=function(){var t=this,n=this.statsListener_.get(),r={},i=!1;j(n,function(o,s){s>0&&fe(t.statsToReport_,o)&&(r[o]=s,i=!0)}),i&&this.server_.reportStats(r),Pt(this.reportStats_.bind(this),Math.floor(Math.random()*2*$c))},e}();function Wc(e,t){e.statsToReport_[t]=!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function ni(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ri(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ii(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zc=function(){function e(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Ee.ACK_USER_WRITE,this.source=ni()}return e.prototype.operationForChild=function(t){if(I(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new A(t));return new e(O(),n,this.revert)}else return g(E(this.path)===t,"operationForChild called for unrelated child."),new e(L(this.path),this.affectedTree,this.revert)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ds=function(){function e(t,n){this.source=t,this.path=n,this.type=Ee.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return I(this.path)?new e(this.source,O()):new e(this.source,L(this.path))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(){function e(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Ee.OVERWRITE}return e.prototype.operationForChild=function(t){return I(this.path)?new e(this.source,O(),this.snap.getImmediateChild(t)):new e(this.source,L(this.path),this.snap)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi=function(){function e(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Ee.MERGE}return e.prototype.operationForChild=function(t){if(I(this.path)){var n=this.children.subtree(new A(t));return n.isEmpty()?null:n.value?new kn(this.source,O(),n.value):new e(this.source,O(),n)}else return g(E(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,L(this.path),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We=function(){function e(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}return e.prototype.isFullyInitialized=function(){return this.fullyInitialized_},e.prototype.isFiltered=function(){return this.filtered_},e.prototype.isCompleteForPath=function(t){if(I(t))return this.isFullyInitialized()&&!this.filtered_;var n=E(t);return this.isCompleteForChild(n)},e.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},e.prototype.getNode=function(){return this.node_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hc=function(){function e(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}return e}();function Gc(e,t,n,r){var i=[],o=[];return t.forEach(function(s){s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(xc(s.childName,s.snapshotNode))}),kt(e,i,"child_removed",t,r,n),kt(e,i,"child_added",t,r,n),kt(e,i,"child_moved",o,r,n),kt(e,i,"child_changed",t,r,n),kt(e,i,"value",t,r,n),i}function kt(e,t,n,r,i,o){var s=r.filter(function(a){return a.type===n});s.sort(function(a,l){return Kc(e,a,l)}),s.forEach(function(a){var l=jc(e,a,o);i.forEach(function(u){u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function jc(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Kc(e,t,n){if(t.childName==null||n.childName==null)throw wt("Should only compare child_ events.");var r=new T(t.childName,t.snapshotNode),i=new T(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e,t){return{eventCache:e,serverCache:t}}function Dt(e,t,n,r){return Pn(new We(t,n,r),e.serverCache)}function Fs(e,t,n,r){return Pn(e.eventCache,new We(t,n,r))}function bn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function it(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or,Qc=function(){return or||(or=new Ae(Su)),or},de=function(){function e(t,n){n===void 0&&(n=Qc()),this.value=t,this.children=n}return e.fromObject=function(t){var n=new e(null);return j(t,function(r,i){n=n.set(new A(r),i)}),n},e.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(t,n){if(this.value!=null&&n(this.value))return{path:O(),value:this.value};if(I(t))return null;var r=E(t),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(L(t),n);if(o!=null){var s=V(new A(r),o.path);return{path:s,value:o.value}}else return null}else return null},e.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},e.prototype.subtree=function(t){if(I(t))return this;var n=E(t),r=this.children.get(n);return r!==null?r.subtree(L(t)):new e(null)},e.prototype.set=function(t,n){if(I(t))return new e(n,this.children);var r=E(t),i=this.children.get(r)||new e(null),o=i.set(L(t),n),s=this.children.insert(r,o);return new e(this.value,s)},e.prototype.remove=function(t){if(I(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=E(t),r=this.children.get(n);if(r){var i=r.remove(L(t)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new e(null):new e(this.value,o)}else return this},e.prototype.get=function(t){if(I(t))return this.value;var n=E(t),r=this.children.get(n);return r?r.get(L(t)):null},e.prototype.setTree=function(t,n){if(I(t))return n;var r=E(t),i=this.children.get(r)||new e(null),o=i.setTree(L(t),n),s=void 0;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new e(this.value,s)},e.prototype.fold=function(t){return this.fold_(O(),t)},e.prototype.fold_=function(t,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(V(t,i),n)}),n(t,this.value,r)},e.prototype.findOnPath=function(t,n){return this.findOnPath_(t,O(),n)},e.prototype.findOnPath_=function(t,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(I(t))return null;var o=E(t),s=this.children.get(o);return s?s.findOnPath_(L(t),V(n,o),r):null},e.prototype.foreachOnPath=function(t,n){return this.foreachOnPath_(t,O(),n)},e.prototype.foreachOnPath_=function(t,n,r){if(I(t))return this;this.value&&r(n,this.value);var i=E(t),o=this.children.get(i);return o?o.foreachOnPath_(L(t),V(n,i),r):new e(null)},e.prototype.foreach=function(t){this.foreach_(O(),t)},e.prototype.foreach_=function(t,n){this.children.inorderTraversal(function(r,i){i.foreach_(V(t,r),n)}),this.value&&n(t,this.value)},e.prototype.foreachChild=function(t){this.children.inorderTraversal(function(n,r){r.value&&t(n,r.value)})},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne=function(){function e(t){this.writeTree_=t}return e.empty=function(){return new e(new de(null))},e}();function Ft(e,t,n){if(I(t))return new Ne(new de(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){var i=r.path,o=r.value,s=oe(i,t);return o=o.updateChild(s,n),new Ne(e.writeTree_.set(i,o))}else{var a=new de(n),l=e.writeTree_.setTree(t,a);return new Ne(l)}}function Tr(e,t,n){var r=e;return j(n,function(i,o){r=Ft(r,V(t,i),o)}),r}function oo(e,t){if(I(t))return Ne.empty();var n=e.writeTree_.setTree(t,new de(null));return new Ne(n)}function Or(e,t){return lt(e,t)!=null}function lt(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(oe(n.path,t)):null}function so(e){var t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(D,function(r,i){t.push(new T(r,i))}):e.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&t.push(new T(r,i.value))}),t}function Me(e,t){if(I(t))return e;var n=lt(e,t);return n!=null?new Ne(new de(n)):new Ne(e.writeTree_.subtree(t))}function Rr(e){return e.writeTree_.isEmpty()}function yt(e,t){return Ms(O(),e.writeTree_,t)}function Ms(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal(function(i,o){i===".priority"?(g(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Ms(V(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(V(e,".priority"),r)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){return Us(t,e)}function Yc(e,t,n,r,i){g(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ft(e.visibleWrites,t,n)),e.lastWriteId=r}function qc(e,t,n,r){g(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Tr(e.visibleWrites,t,n),e.lastWriteId=r}function Xc(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Jc(e,t){var n=e.allWrites.findIndex(function(u){return u.writeId===t});g(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,s=e.allWrites.length-1;i&&s>=0;){var a=e.allWrites[s];a.visible&&(s>=n&&Zc(a,r.path)?i=!1:pe(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return ef(e),!0;if(r.snap)e.visibleWrites=oo(e.visibleWrites,r.path);else{var l=r.children;j(l,function(u){e.visibleWrites=oo(e.visibleWrites,V(r.path,u))})}return!0}else return!1}function Zc(e,t){if(e.snap)return pe(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&pe(V(e.path,n),t))return!0;return!1}function ef(e){e.visibleWrites=Vs(e.allWrites,tf,O()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function tf(e){return e.visible}function Vs(e,t,n){for(var r=Ne.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var s=o.path,a=void 0;if(o.snap)pe(n,s)?(a=oe(n,s),r=Ft(r,a,o.snap)):pe(s,n)&&(a=oe(s,n),r=Ft(r,O(),o.snap.getChild(a)));else if(o.children){if(pe(n,s))a=oe(n,s),r=Tr(r,a,o.children);else if(pe(s,n))if(a=oe(s,n),I(a))r=Tr(r,O(),o.children);else{var l=rt(o.children,E(a));if(l){var u=l.getChild(L(a));r=Ft(r,O(),u)}}}else throw wt("WriteRecord should have .snap or .children")}}return r}function Bs(e,t,n,r,i){if(!r&&!i){var o=lt(e.visibleWrites,t);if(o!=null)return o;var s=Me(e.visibleWrites,t);if(Rr(s))return n;if(n==null&&!Or(s,O()))return null;var a=n||C.EMPTY_NODE;return yt(s,a)}else{var l=Me(e.visibleWrites,t);if(!i&&Rr(l))return n;if(!i&&n==null&&!Or(l,O()))return null;var u=function(d){return(d.visible||i)&&(!r||!~r.indexOf(d.writeId))&&(pe(d.path,t)||pe(t,d.path))},c=Vs(e.allWrites,u,t),a=n||C.EMPTY_NODE;return yt(c,a)}}function nf(e,t,n){var r=C.EMPTY_NODE,i=lt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(D,function(a,l){r=r.updateImmediateChild(a,l)}),r;if(n){var o=Me(e.visibleWrites,t);return n.forEachChild(D,function(a,l){var u=yt(Me(o,new A(a)),l);r=r.updateImmediateChild(a,u)}),so(o).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}else{var s=Me(e.visibleWrites,t);return so(s).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}}function rf(e,t,n,r,i){g(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=V(t,n);if(Or(e.visibleWrites,o))return null;var s=Me(e.visibleWrites,o);return Rr(s)?i.getChild(n):yt(s,i.getChild(n))}function of(e,t,n,r){var i=V(t,n),o=lt(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var s=Me(e.visibleWrites,i);return yt(s,r.getNode().getImmediateChild(n))}else return null}function sf(e,t){return lt(e.visibleWrites,t)}function af(e,t,n,r,i,o,s){var a,l=Me(e.visibleWrites,t),u=lt(l,O());if(u!=null)a=u;else if(n!=null)a=yt(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){for(var c=[],f=s.getCompare(),d=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s),h=d.getNext();h&&c.length<i;)f(h,r)!==0&&c.push(h),h=d.getNext();return c}else return[]}function lf(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function wn(e,t,n,r){return Bs(e.writeTree,e.treePath,t,n,r)}function si(e,t){return nf(e.writeTree,e.treePath,t)}function ao(e,t,n,r){return rf(e.writeTree,e.treePath,t,n,r)}function Cn(e,t){return sf(e.writeTree,V(e.treePath,t))}function uf(e,t,n,r,i,o){return af(e.writeTree,e.treePath,t,n,r,i,o)}function ai(e,t,n){return of(e.writeTree,e.treePath,t,n)}function $s(e,t){return Us(V(e.treePath,t),e.writeTree)}function Us(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cf=function(){function e(){this.changeMap=new Map}return e.prototype.trackChildChange=function(t){var n=t.type,r=t.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Ht(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,zt(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,gt(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Ht(r,t.snapshotNode,i.oldSnap));else throw wt("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)},e.prototype.getChanges=function(){return Array.from(this.changeMap.values())},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ff=function(){function e(){}return e.prototype.getCompleteChild=function(t){return null},e.prototype.getChildAfterChild=function(t,n,r){return null},e}(),Ws=new ff,li=function(){function e(t,n,r){r===void 0&&(r=null),this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}return e.prototype.getCompleteChild=function(t){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);var r=this.optCompleteServerCache_!=null?new We(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ai(this.writes_,t,r)},e.prototype.getChildAfterChild=function(t,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:it(this.viewCache_),o=uf(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(e){return{filter:e}}function hf(e,t){g(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),g(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function pf(e,t,n,r,i){var o=new cf,s,a;if(n.type===Ee.OVERWRITE){var l=n;l.source.fromUser?s=xr(e,t,l.path,l.snap,r,i,o):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!I(l.path),s=En(e,t,l.path,l.snap,r,i,a,o))}else if(n.type===Ee.MERGE){var u=n;u.source.fromUser?s=_f(e,t,u.path,u.children,r,i,o):(g(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=Ar(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Ee.ACK_USER_WRITE){var c=n;c.revert?s=yf(e,t,c.path,r,i,o):s=mf(e,t,c.path,c.affectedTree,r,i,o)}else if(n.type===Ee.LISTEN_COMPLETE)s=gf(e,t,n.path,r,o);else throw wt("Unknown operation type: "+n.type);var f=o.getChanges();return vf(t,s,f),{viewCache:s,changes:f}}function vf(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=bn(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Ns(bn(t)))}}function zs(e,t,n,r,i,o){var s=t.eventCache;if(Cn(r,n)!=null)return t;var a=void 0,l=void 0;if(I(n))if(g(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var u=it(t),c=u instanceof C?u:C.EMPTY_NODE,f=si(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,o)}else{var d=wn(r,it(t));a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{var h=E(n);if(h===".priority"){g(Ue(n)===1,"Can't have a priority with additional path components");var p=s.getNode();l=t.serverCache.getNode();var _=ao(r,n,p,l);_!=null?a=e.filter.updatePriority(p,_):a=s.getNode()}else{var v=L(n),m=void 0;if(s.isCompleteForChild(h)){l=t.serverCache.getNode();var y=ao(r,n,s.getNode(),l);y!=null?m=s.getNode().getImmediateChild(h).updateChild(v,y):m=s.getNode().getImmediateChild(h)}else m=ai(r,h,t.serverCache);m!=null?a=e.filter.updateChild(s.getNode(),h,m,v,i,o):a=s.getNode()}}return Dt(t,a,s.isFullyInitialized()||I(n),e.filter.filtersNodes())}function En(e,t,n,r,i,o,s,a){var l=t.serverCache,u,c=s?e.filter:e.filter.getIndexedFilter();if(I(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){var f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{var d=E(n);if(!l.isCompleteForPath(n)&&Ue(n)>1)return t;var h=L(n),p=l.getNode().getImmediateChild(d),_=p.updateChild(h,r);d===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),d,_,h,Ws,null)}var v=Fs(t,u,l.isFullyInitialized()||I(n),c.filtersNodes()),m=new li(i,v,o);return zs(e,v,n,i,m,a)}function xr(e,t,n,r,i,o,s){var a=t.eventCache,l,u,c=new li(i,t,o);if(I(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Dt(t,u,!0,e.filter.filtersNodes());else{var f=E(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Dt(t,u,a.isFullyInitialized(),a.isFiltered());else{var d=L(n),h=a.getNode().getImmediateChild(f),p=void 0;if(I(d))p=r;else{var _=c.getCompleteChild(f);_!=null?qr(d)===".priority"&&_.getChild(Cs(d)).isEmpty()?p=_:p=_.updateChild(d,r):p=C.EMPTY_NODE}if(h.equals(p))l=t;else{var v=e.filter.updateChild(a.getNode(),f,p,d,c,s);l=Dt(t,v,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function lo(e,t){return e.eventCache.isCompleteForChild(t)}function _f(e,t,n,r,i,o,s){var a=t;return r.foreach(function(l,u){var c=V(n,l);lo(t,E(c))&&(a=xr(e,a,c,u,i,o,s))}),r.foreach(function(l,u){var c=V(n,l);lo(t,E(c))||(a=xr(e,a,c,u,i,o,s))}),a}function uo(e,t,n){return n.foreach(function(r,i){t=t.updateChild(r,i)}),t}function Ar(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var l=t,u;I(n)?u=r:u=new de(null).setTree(n,r);var c=t.serverCache.getNode();return u.children.inorderTraversal(function(f,d){if(c.hasChild(f)){var h=t.serverCache.getNode().getImmediateChild(f),p=uo(e,h,d);l=En(e,l,new A(f),p,i,o,s,a)}}),u.children.inorderTraversal(function(f,d){var h=!t.serverCache.isCompleteForChild(f)&&d.value===void 0;if(!c.hasChild(f)&&!h){var p=t.serverCache.getNode().getImmediateChild(f),_=uo(e,p,d);l=En(e,l,new A(f),_,i,o,s,a)}}),l}function mf(e,t,n,r,i,o,s){if(Cn(i,n)!=null)return t;var a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(I(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return En(e,t,n,l.getNode().getChild(n),i,o,a,s);if(I(n)){var u=new de(null);return l.getNode().forEachChild(Se,function(f,d){u=u.set(new A(f),d)}),Ar(e,t,n,u,i,o,a,s)}else return t}else{var c=new de(null);return r.foreach(function(f,d){var h=V(n,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),Ar(e,t,n,c,i,o,a,s)}}function gf(e,t,n,r,i){var o=t.serverCache,s=Fs(t,o.getNode(),o.isFullyInitialized()||I(n),o.isFiltered());return zs(e,s,n,r,Ws,i)}function yf(e,t,n,r,i,o){var s;if(Cn(r,n)!=null)return t;var a=new li(r,t,i),l=t.eventCache.getNode(),u=void 0;if(I(n)||E(n)===".priority"){var c=void 0;if(t.serverCache.isFullyInitialized())c=wn(r,it(t));else{var f=t.serverCache.getNode();g(f instanceof C,"serverChildren would be complete if leaf node"),c=si(r,f)}c=c,u=e.filter.updateFullNode(l,c,o)}else{var d=E(n),h=ai(r,d,t.serverCache);h==null&&t.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?u=e.filter.updateChild(l,d,h,L(n),a,o):t.eventCache.getNode().hasChild(d)?u=e.filter.updateChild(l,d,C.EMPTY_NODE,L(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=wn(r,it(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||Cn(r,O())!=null,Dt(t,u,s,e.filter.filtersNodes())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bf=function(){function e(t,n){this.query_=t,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new ti(r.getIndex()),o=Nc(r);this.processor_=df(o);var s=n.serverCache,a=n.eventCache,l=i.updateFullNode(C.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(C.EMPTY_NODE,a.getNode(),null),c=new We(l,s.isFullyInitialized(),i.filtersNodes()),f=new We(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Pn(f,c),this.eventGenerator_=new Hc(this.query_)}return Object.defineProperty(e.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),e}();function wf(e){return e.viewCache_.serverCache.getNode()}function Cf(e){return bn(e.viewCache_)}function Ef(e,t){var n=it(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!I(t)&&!n.getImmediateChild(E(t)).isEmpty())?n.getChild(t):null}function co(e){return e.eventRegistrations_.length===0}function If(e,t){e.eventRegistrations_.push(t)}function fo(e,t,n){var r=[];if(n){g(t==null,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach(function(l){var u=l.createCancelEvent(n,i);u&&r.push(u)})}if(t){for(var o=[],s=0;s<e.eventRegistrations_.length;++s){var a=e.eventRegistrations_[s];if(!a.matches(t))o.push(a);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function ho(e,t,n,r){t.type===Ee.MERGE&&t.source.queryId!==null&&(g(it(e.viewCache_),"We should always have a full cache before handling merges"),g(bn(e.viewCache_),"Missing event cache, even though we have a server cache"));var i=e.viewCache_,o=pf(e.processor_,i,t,n,r);return hf(e.processor_,o.viewCache),g(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Hs(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Sf(e,t){var n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(D,function(o,s){r.push(gt(o,s))})}return n.isFullyInitialized()&&r.push(Ns(n.getNode())),Hs(e,r,n.getNode(),t)}function Hs(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return Gc(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In,Gs=function(){function e(){this.views=new Map}return e}();function Tf(e){g(!In,"__referenceConstructor has already been defined"),In=e}function Of(){return g(In,"Reference.ts has not been loaded"),In}function Rf(e){return e.views.size===0}function ui(e,t,n,r){var i,o,s=t.source.queryId;if(s!==null){var a=e.views.get(s);return g(a!=null,"SyncTree gave us an op for an invalid query."),ho(a,t,n,r)}else{var l=[];try{for(var u=ce(e.views.values()),c=u.next();!c.done;c=u.next()){var a=c.value;l=l.concat(ho(a,t,n,r))}}catch(f){i={error:f}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}return l}}function js(e,t,n,r,i){var o=t._queryIdentifier,s=e.views.get(o);if(!s){var a=wn(n,i?r:null),l=!1;a?l=!0:r instanceof C?(a=si(n,r),l=!1):(a=C.EMPTY_NODE,l=!1);var u=Pn(new We(a,l,!1),new We(r,i,!1));return new bf(t,u)}return s}function xf(e,t,n,r,i,o){var s=js(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),If(s,n),Sf(s,n)}function Af(e,t,n,r){var i,o,s=t._queryIdentifier,a=[],l=[],u=ze(e);if(s==="default")try{for(var c=ce(e.views.entries()),f=c.next();!f.done;f=c.next()){var d=ie(f.value,2),h=d[0],p=d[1];l=l.concat(fo(p,n,r)),co(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||a.push(p.query))}}catch(_){i={error:_}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}else{var p=e.views.get(s);p&&(l=l.concat(fo(p,n,r)),co(p)&&(e.views.delete(s),p.query._queryParams.loadsAllData()||a.push(p.query)))}return u&&!ze(e)&&a.push(new(Of())(t._repo,t._path)),{removed:a,events:l}}function Ks(e){var t,n,r=[];try{for(var i=ce(e.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.query._queryParams.loadsAllData()||r.push(s)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}function Ve(e,t){var n,r,i=null;try{for(var o=ce(e.views.values()),s=o.next();!s.done;s=o.next()){var a=s.value;i=i||Ef(a,t)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function Qs(e,t){var n=t._queryParams;if(n.loadsAllData())return Dn(e);var r=t._queryIdentifier;return e.views.get(r)}function Ys(e,t){return Qs(e,t)!=null}function ze(e){return Dn(e)!=null}function Dn(e){var t,n;try{for(var r=ce(e.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;function Nf(e){g(!Sn,"__referenceConstructor has already been defined"),Sn=e}function kf(){return g(Sn,"Reference.ts has not been loaded"),Sn}var Pf=1,po=function(){function e(t){this.listenProvider_=t,this.syncPointTree_=new de(null),this.pendingWriteTree_=lf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return e}();function ci(e,t,n,r,i){return Yc(e.pendingWriteTree_,t,n,r,i),i?It(e,new kn(ni(),t,n)):[]}function Lf(e,t,n,r){qc(e.pendingWriteTree_,t,n,r);var i=de.fromObject(n);return It(e,new oi(ni(),t,i))}function De(e,t,n){n===void 0&&(n=!1);var r=Xc(e.pendingWriteTree_,t),i=Jc(e.pendingWriteTree_,t);if(i){var o=new de(null);return r.snap!=null?o=o.set(O(),!0):j(r.children,function(s){o=o.set(new A(s),!0)}),It(e,new zc(r.path,o,n))}else return[]}function Jt(e,t,n){return It(e,new kn(ri(),t,n))}function Df(e,t,n){var r=de.fromObject(n);return It(e,new oi(ri(),t,r))}function Ff(e,t){return It(e,new Ds(ri(),t))}function Mf(e,t,n){var r=fi(e,n);if(r){var i=di(r),o=i.path,s=i.queryId,a=oe(o,t),l=new Ds(ii(s),a);return hi(e,o,l)}else return[]}function Nr(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),s=[];if(o&&(t._queryIdentifier==="default"||Ys(o,t))){var a=Af(o,t,n,r);Rf(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));var l=a.removed;s=a.events;var u=l.findIndex(function(y){return y._queryParams.loadsAllData()})!==-1,c=e.syncPointTree_.findOnPath(i,function(y,S){return ze(S)});if(u&&!c){var f=e.syncPointTree_.subtree(i);if(!f.isEmpty())for(var d=Uf(f),h=0;h<d.length;++h){var p=d[h],_=p.query,v=Js(e,p);e.listenProvider_.startListening(Mt(_),Tn(e,_),v.hashFn,v.onComplete)}}if(!c&&l.length>0&&!r)if(u){var m=null;e.listenProvider_.stopListening(Mt(t),m)}else l.forEach(function(y){var S=e.queryToTagMap.get(Mn(y));e.listenProvider_.stopListening(Mt(y),S)});Wf(e,l)}return s}function Vf(e,t,n,r){var i=fi(e,r);if(i!=null){var o=di(i),s=o.path,a=o.queryId,l=oe(s,t),u=new kn(ii(a),l,n);return hi(e,s,u)}else return[]}function Bf(e,t,n,r){var i=fi(e,r);if(i){var o=di(i),s=o.path,a=o.queryId,l=oe(s,t),u=de.fromObject(n),c=new oi(ii(a),l,u);return hi(e,s,c)}else return[]}function vo(e,t,n){var r=t._path,i=null,o=!1;e.syncPointTree_.foreachOnPath(r,function(_,v){var m=oe(_,r);i=i||Ve(v,m),o=o||ze(v)});var s=e.syncPointTree_.get(r);s?(o=o||ze(s),i=i||Ve(s,O())):(s=new Gs,e.syncPointTree_=e.syncPointTree_.set(r,s));var a;if(i!=null)a=!0;else{a=!1,i=C.EMPTY_NODE;var l=e.syncPointTree_.subtree(r);l.foreachChild(function(_,v){var m=Ve(v,O());m&&(i=i.updateImmediateChild(_,m))})}var u=Ys(s,t);if(!u&&!t._queryParams.loadsAllData()){var c=Mn(t);g(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");var f=zf();e.queryToTagMap.set(c,f),e.tagToQueryMap.set(f,c)}var d=Ln(e.pendingWriteTree_,r),h=xf(s,t,n,d,i,a);if(!u&&!o){var p=Qs(s,t);h=h.concat(Hf(e,t,p))}return h}function Fn(e,t,n){var r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,function(s,a){var l=oe(s,t),u=Ve(a,l);if(u)return u});return Bs(i,t,o,n,r)}function $f(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,function(u,c){var f=oe(u,n);r=r||Ve(c,f)});var i=e.syncPointTree_.get(n);i?r=r||Ve(i,O()):(i=new Gs,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=r!=null,s=o?new We(r,!0,!1):null,a=Ln(e.pendingWriteTree_,t._path),l=js(i,t,a,o?s.getNode():C.EMPTY_NODE,o);return Cf(l)}function It(e,t){return qs(t,e.syncPointTree_,null,Ln(e.pendingWriteTree_,O()))}function qs(e,t,n,r){if(I(e.path))return Xs(e,t,n,r);var i=t.get(O());n==null&&i!=null&&(n=Ve(i,O()));var o=[],s=E(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){var u=n?n.getImmediateChild(s):null,c=$s(r,s);o=o.concat(qs(a,l,u,c))}return i&&(o=o.concat(ui(i,e,r,n))),o}function Xs(e,t,n,r){var i=t.get(O());n==null&&i!=null&&(n=Ve(i,O()));var o=[];return t.children.inorderTraversal(function(s,a){var l=n?n.getImmediateChild(s):null,u=$s(r,s),c=e.operationForChild(s);c&&(o=o.concat(Xs(c,a,l,u)))}),i&&(o=o.concat(ui(i,e,r,n))),o}function Js(e,t){var n=t.query,r=Tn(e,n);return{hashFn:function(){var i=wf(t)||C.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?Mf(e,n._path,r):Ff(e,n._path);var o=Ru(i,n);return Nr(e,n,null,o)}}}function Tn(e,t){var n=Mn(t);return e.queryToTagMap.get(n)}function Mn(e){return e._path.toString()+"$"+e._queryIdentifier}function fi(e,t){return e.tagToQueryMap.get(t)}function di(e){var t=e.indexOf("$");return g(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new A(e.substr(0,t))}}function hi(e,t,n){var r=e.syncPointTree_.get(t);g(r,"Missing sync point for query tag that we're tracking");var i=Ln(e.pendingWriteTree_,t);return ui(r,n,i,null)}function Uf(e){return e.fold(function(t,n,r){if(n&&ze(n)){var i=Dn(n);return[i]}else{var o=[];return n&&(o=Ks(n)),j(r,function(s,a){o=o.concat(a)}),o}})}function Mt(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(kf())(e._repo,e._path):e}function Wf(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Mn(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function zf(){return Pf++}function Hf(e,t,n){var r=t._path,i=Tn(e,t),o=Js(e,n),s=e.listenProvider_.startListening(Mt(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)g(!ze(a.value),"If we're adding a query, it shouldn't be shadowed");else for(var l=a.fold(function(f,d,h){if(!I(f)&&d&&ze(d))return[Dn(d).query];var p=[];return d&&(p=p.concat(Ks(d).map(function(_){return _.query}))),j(h,function(_,v){p=p.concat(v)}),p}),u=0;u<l.length;++u){var c=l[u];e.listenProvider_.stopListening(Mt(c),Tn(e,c))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gf=function(){function e(t){this.node_=t}return e.prototype.getImmediateChild=function(t){var n=this.node_.getImmediateChild(t);return new e(n)},e.prototype.node=function(){return this.node_},e}(),jf=function(){function e(t,n){this.syncTree_=t,this.path_=n}return e.prototype.getImmediateChild=function(t){var n=V(this.path_,t);return new e(this.syncTree_,n)},e.prototype.node=function(){return Fn(this.syncTree_,this.path_)},e}(),Kf=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},_o=function(e,t,n){if(!e||typeof e!="object")return e;if(g(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return Qf(e[".sv"],t,n);if(typeof e[".sv"]=="object")return Yf(e[".sv"],t);g(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},Qf=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+e)}},Yf=function(e,t,n){e.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;typeof r!="number"&&g(!1,"Unexpected increment value: "+r);var i=t.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,s=o.getValue();return typeof s!="number"?r:s+r},Zs=function(e,t,n,r){return vi(t,new jf(n,e),r)},pi=function(e,t,n){return vi(e,new Gf(t),n)};function vi(e,t,n){var r=e.getPriority().val(),i=_o(r,t.getImmediateChild(".priority"),n),o;if(e.isLeafNode()){var s=e,a=_o(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new _t(a,B(i)):e}else{var l=e;return o=l,i!==l.getPriority().val()&&(o=o.updatePriority(new _t(i))),l.forEachChild(D,function(u,c){var f=vi(c,t.getImmediateChild(u),n);f!==c&&(o=o.updateImmediateChild(u,f))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i=function(){function e(t,n,r){t===void 0&&(t=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=t,this.parent=n,this.node=r}return e}();function Vn(e,t){for(var n=t instanceof A?t:new A(t),r=e,i=E(n);i!==null;){var o=rt(r.node.children,i)||{children:{},childCount:0};r=new _i(i,r,o),n=L(n),i=E(n)}return r}function ut(e){return e.node.value}function mi(e,t){e.node.value=t,kr(e)}function ea(e){return e.node.childCount>0}function qf(e){return ut(e)===void 0&&!ea(e)}function Bn(e,t){j(e.node.children,function(n,r){t(new _i(n,e,r))})}function ta(e,t,n,r){n&&!r&&t(e),Bn(e,function(i){ta(i,t,!0,r)}),n&&r&&t(e)}function Xf(e,t,n){for(var r=n?e:e.parent;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Zt(e){return new A(e.parent===null?e.name:Zt(e.parent)+"/"+e.name)}function kr(e){e.parent!==null&&Jf(e.parent,e.name,e)}function Jf(e,t,n){var r=qf(n),i=fe(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,kr(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,kr(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zf=/[\[\].#$\/\u0000-\u001F\u007F]/,ed=/[\[\].#$\u0000-\u001F\u007F]/,sr=10*1024*1024,$n=function(e){return typeof e=="string"&&e.length!==0&&!Zf.test(e)},na=function(e){return typeof e=="string"&&e.length!==0&&!ed.test(e)},td=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),na(e)},Gt=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!xn(e)||e&&typeof e=="object"&&fe(e,".sv")},Re=function(e,t,n,r){r&&t===void 0||en(ae(e,"value"),t,n)},en=function(e,t,n){var r=n instanceof A?new lc(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+qe(r));if(typeof t=="function")throw new Error(e+"contains a function "+qe(r)+" with contents = "+t.toString());if(xn(t))throw new Error(e+"contains "+t.toString()+" "+qe(r));if(typeof t=="string"&&t.length>sr/3&&Rn(t)>sr)throw new Error(e+"contains a string greater than "+sr+" utf8 bytes "+qe(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){var i=!1,o=!1;if(j(t,function(s,a){if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!$n(s)))throw new Error(e+" contains an invalid key ("+s+") "+qe(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uc(r,s),en(e,a,r),cc(r)}),i&&o)throw new Error(e+' contains ".value" child '+qe(r)+" in addition to actual children.")}},nd=function(e,t){var n,r;for(n=0;n<t.length;n++){r=t[n];for(var i=Wt(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!$n(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(ac);var s=null;for(n=0;n<t.length;n++){if(r=t[n],s!==null&&pe(s,r))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},ra=function(e,t,n,r){if(!(r&&t===void 0)){var i=ae(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var o=[];j(t,function(s,a){var l=new A(s);if(en(i,a,V(n,l)),qr(l)===".priority"&&!Gt(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),nd(i,o)}},gi=function(e,t,n){if(!(n&&t===void 0)){if(xn(t))throw new Error(ae(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Gt(t))throw new Error(ae(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},rd=function(e,t,n){if(!(n&&t===void 0))switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ae(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},tn=function(e,t,n,r){if(!(r&&n===void 0)&&!$n(n))throw new Error(ae(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},jt=function(e,t,n,r){if(!(r&&n===void 0)&&!na(n))throw new Error(ae(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},id=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jt(e,t,n,r)},ve=function(e,t){if(E(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},ia=function(e,t){var n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!$n(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!td(n))throw new Error(ae(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},od=function(e,t,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(ae(e,t)+"must be a boolean.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sd=function(){function e(){this.eventLists_=[],this.recursionDepth_=0}return e}();function Un(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();n!==null&&!Xr(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function yi(e,t,n){Un(e,n),oa(e,function(r){return Xr(r,t)})}function _e(e,t,n){Un(e,n),oa(e,function(r){return pe(r,t)||pe(t,r)})}function oa(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var o=i.path;t(o)?(ad(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ad(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(n!==null){e.events[t]=null;var r=n.getEventRunner();tt&&Y("event: "+n.toString()),Ct(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sa="repo_interrupt",ld=25,ud=function(){function e(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yn(),this.transactionQueueTree_=new _i,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function cd(e,t,n){if(e.stats_=Qr(e.repoInfo_),e.forceRestClient_||Au())e.server_=new Fc(e.repoInfo_,function(r,i,o,s){mo(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(function(){return go(e,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new nt(e.repoInfo_,t,function(r,i,o,s){mo(e,r,i,o,s)},function(r){go(e,r)},function(r){dd(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(function(r){e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(function(r){e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=Fu(e.repoInfo_,function(){return new Uc(e.stats_,e.server_)}),e.infoData_=new Mc,e.infoSyncTree_=new po({startListening:function(r,i,o,s){var a=[],l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Jt(e.infoSyncTree_,r._path,l),setTimeout(function(){s("ok")},0)),a},stopListening:function(){}}),bi(e,"connected",!1),e.serverSyncTree_=new po({startListening:function(r,i,o,s){return e.server_.listen(r,o,i,function(a,l){var u=s(a,l);_e(e.eventQueue_,r._path,u)}),[]},stopListening:function(r,i){e.server_.unlisten(r,i)}})}function aa(e){var t=e.infoData_.getNode(new A(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function nn(e){return Kf({timestamp:aa(e)})}function mo(e,t,n,r,i){e.dataUpdateCount++;var o=new A(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var s=[];if(i)if(r){var a=hn(n,function(d){return B(d)});s=Bf(e.serverSyncTree_,o,a,i)}else{var l=B(n);s=Vf(e.serverSyncTree_,o,l,i)}else if(r){var u=hn(n,function(d){return B(d)});s=Df(e.serverSyncTree_,o,u)}else{var c=B(n);s=Jt(e.serverSyncTree_,o,c)}var f=o;s.length>0&&(f=bt(e,o)),_e(e.eventQueue_,f,s)}function fd(e,t){e.interceptServerDataCallback_=t}function go(e,t){bi(e,"connected",t),t===!1&&vd(e)}function dd(e,t){j(t,function(n,r){bi(e,n,r)})}function bi(e,t,n){var r=new A("/.info/"+t),i=B(n);e.infoData_.updateSnapshot(r,i);var o=Jt(e.infoSyncTree_,r,i);_e(e.eventQueue_,r,o)}function Wn(e){return e.nextWriteId_++}function hd(e,t){var n=$f(e.serverSyncTree_,t);return n!=null?Promise.resolve(n):e.server_.get(t).then(function(r){var i=B(r).withIndex(t._queryParams.getIndex()),o=Jt(e.serverSyncTree_,t._path,i);return yi(e.eventQueue_,t._path,o),Promise.resolve(i)},function(r){return St(e,"get for query "+G(t)+" failed: "+r),Promise.reject(new Error(r))})}function wi(e,t,n,r,i){St(e,"set",{path:t.toString(),value:n,priority:r});var o=nn(e),s=B(n,r),a=Fn(e.serverSyncTree_,t),l=pi(s,a,o),u=Wn(e),c=ci(e.serverSyncTree_,t,l,u,!0);Un(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),function(d,h){var p=d==="ok";p||J("set at "+t+" failed: "+d);var _=De(e.serverSyncTree_,u,!p);_e(e.eventQueue_,t,_),He(e,i,d,h)});var f=Ei(e,t);bt(e,f),_e(e.eventQueue_,f,[])}function pd(e,t,n,r){St(e,"update",{path:t.toString(),value:n});var i=!0,o=nn(e),s={};if(j(n,function(u,c){i=!1,s[u]=Zs(V(t,u),B(c),e.serverSyncTree_,o)}),i)Y("update() called with empty data.  Don't do anything."),He(e,r,"ok",void 0);else{var a=Wn(e),l=Lf(e.serverSyncTree_,t,s,a);Un(e.eventQueue_,l),e.server_.merge(t.toString(),n,function(u,c){var f=u==="ok";f||J("update at "+t+" failed: "+u);var d=De(e.serverSyncTree_,a,!f),h=d.length>0?bt(e,t):t;_e(e.eventQueue_,h,d),He(e,r,u,c)}),j(n,function(u){var c=Ei(e,V(t,u));bt(e,c)}),_e(e.eventQueue_,t,[])}}function vd(e){St(e,"onDisconnectEvents");var t=nn(e),n=yn();Sr(e.onDisconnect_,O(),function(i,o){var s=Zs(i,o,e.serverSyncTree_,t);Et(n,i,s)});var r=[];Sr(n,O(),function(i,o){r=r.concat(Jt(e.serverSyncTree_,i,o));var s=Ei(e,i);bt(e,s)}),e.onDisconnect_=yn(),_e(e.eventQueue_,O(),r)}function _d(e,t,n){e.server_.onDisconnectCancel(t.toString(),function(r,i){r==="ok"&&Ir(e.onDisconnect_,t),He(e,n,r,i)})}function yo(e,t,n,r){var i=B(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),function(o,s){o==="ok"&&Et(e.onDisconnect_,t,i),He(e,r,o,s)})}function md(e,t,n,r,i){var o=B(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),function(s,a){s==="ok"&&Et(e.onDisconnect_,t,o),He(e,i,s,a)})}function gd(e,t,n,r){if(_r(n)){Y("onDisconnect().update() called with empty data.  Don't do anything."),He(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,function(i,o){i==="ok"&&j(n,function(s,a){var l=B(a);Et(e.onDisconnect_,V(t,s),l)}),He(e,r,i,o)})}function yd(e,t,n){var r;E(t._path)===".info"?r=vo(e.infoSyncTree_,t,n):r=vo(e.serverSyncTree_,t,n),yi(e.eventQueue_,t._path,r)}function Pr(e,t,n){var r;E(t._path)===".info"?r=Nr(e.infoSyncTree_,t,n):r=Nr(e.serverSyncTree_,t,n),yi(e.eventQueue_,t._path,r)}function la(e){e.persistentConnection_&&e.persistentConnection_.interrupt(sa)}function bd(e){e.persistentConnection_&&e.persistentConnection_.resume(sa)}function wd(e,t){if(t===void 0&&(t=!1),!(typeof console>"u")){var n;t?(e.statsListener_||(e.statsListener_=new Ls(e.stats_)),n=e.statsListener_.get()):n=e.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);j(n,function(i,o){for(var s=i,a=i.length;a<r+2;a++)s+=" ";console.log(s+o)})}}function Cd(e,t){e.stats_.incrementCounter(t),Wc(e.statsReporter_,t)}function St(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),Y.apply(void 0,$e([r],ie(t)))}function He(e,t,n,r){t&&Ct(function(){if(n==="ok")t(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var s=new Error(o);s.code=i,t(s)}})}function Ed(e,t,n,r,i,o){St(e,"transaction on "+t);var s={path:t,update:n,onComplete:r,status:null,order:Zo(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ci(e,t,void 0);s.currentInputSnapshot=a;var l=s.update(a.val());if(l===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{en("transaction failed: Data returned ",l,s.path),s.status=0;var u=Vn(e.transactionQueueTree_,t),c=ut(u)||[];c.push(s),mi(u,c);var f=void 0;if(typeof l=="object"&&l!==null&&fe(l,".priority"))f=rt(l,".priority"),g(Gt(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var d=Fn(e.serverSyncTree_,t)||C.EMPTY_NODE;f=d.getPriority().val()}var h=nn(e),p=B(l,f),_=pi(p,a,h);s.currentOutputSnapshotRaw=p,s.currentOutputSnapshotResolved=_,s.currentWriteId=Wn(e);var v=ci(e.serverSyncTree_,t,_,s.currentWriteId,s.applyLocally);_e(e.eventQueue_,t,v),zn(e,e.transactionQueueTree_)}}function Ci(e,t,n){return Fn(e.serverSyncTree_,t,n)||C.EMPTY_NODE}function zn(e,t){if(t===void 0&&(t=e.transactionQueueTree_),t||Hn(e,t),ut(t)){var n=ca(e,t);g(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&Id(e,Zt(t),n)}else ea(t)&&Bn(t,function(i){zn(e,i)})}function Id(e,t,n){for(var r=n.map(function(d){return d.currentWriteId}),i=Ci(e,t,r),o=i,s=i.hash(),a=0;a<n.length;a++){var l=n[a];g(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;var u=oe(t,l.path);o=o.updateChild(u,l.currentOutputSnapshotRaw)}var c=o.val(!0),f=t;e.server_.put(f.toString(),c,function(d){St(e,"transaction put response",{path:f.toString(),status:d});var h=[];if(d==="ok"){for(var p=[],_=function(m){n[m].status=2,h=h.concat(De(e.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(function(){return n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)}),n[m].unwatcher()},v=0;v<n.length;v++)_(v);Hn(e,Vn(e.transactionQueueTree_,t)),zn(e,e.transactionQueueTree_),_e(e.eventQueue_,t,h);for(var v=0;v<p.length;v++)Ct(p[v])}else{if(d==="datastale")for(var v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{J("transaction at "+f.toString()+" failed: "+d);for(var v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=d}bt(e,t)}},s)}function bt(e,t){var n=ua(e,t),r=Zt(n),i=ca(e,n);return Sd(e,i,r),r}function Sd(e,t,n){if(t.length!==0){for(var r=[],i=[],o=t.filter(function(u){return u.status===0}),s=o.map(function(u){return u.currentWriteId}),a=function(u){var c=t[u],f=oe(n,c.path),d=!1,h;if(g(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,h=c.abortReason,i=i.concat(De(e.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ld)d=!0,h="maxretry",i=i.concat(De(e.serverSyncTree_,c.currentWriteId,!0));else{var p=Ci(e,c.path,s);c.currentInputSnapshot=p;var _=t[u].update(p.val());if(_!==void 0){en("transaction failed: Data returned ",_,c.path);var v=B(_),m=typeof _=="object"&&_!=null&&fe(_,".priority");m||(v=v.updatePriority(p.getPriority()));var y=c.currentWriteId,S=nn(e),F=pi(v,p,S);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=F,c.currentWriteId=Wn(e),s.splice(s.indexOf(y),1),i=i.concat(ci(e.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(De(e.serverSyncTree_,y,!0))}else d=!0,h="nodata",i=i.concat(De(e.serverSyncTree_,c.currentWriteId,!0))}_e(e.eventQueue_,n,i),i=[],d&&(t[u].status=2,function(U){setTimeout(U,Math.floor(0))}(t[u].unwatcher),t[u].onComplete&&(h==="nodata"?r.push(function(){return t[u].onComplete(null,!1,t[u].currentInputSnapshot)}):r.push(function(){return t[u].onComplete(new Error(h),!1,null)})))},l=0;l<t.length;l++)a(l);Hn(e,e.transactionQueueTree_);for(var l=0;l<r.length;l++)Ct(r[l]);zn(e,e.transactionQueueTree_)}}function ua(e,t){var n,r=e.transactionQueueTree_;for(n=E(t);n!==null&&ut(r)===void 0;)r=Vn(r,n),t=L(t),n=E(t);return r}function ca(e,t){var n=[];return fa(e,t,n),n.sort(function(r,i){return r.order-i.order}),n}function fa(e,t,n){var r=ut(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Bn(t,function(o){fa(e,o,n)})}function Hn(e,t){var n=ut(t);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,mi(t,n.length>0?n:void 0)}Bn(t,function(o){Hn(e,o)})}function Ei(e,t){var n=Zt(ua(e,t)),r=Vn(e.transactionQueueTree_,t);return Xf(r,function(i){ar(e,i)}),ar(e,r),ta(r,function(i){ar(e,i)}),n}function ar(e,t){var n=ut(t);if(n){for(var r=[],i=[],o=-1,s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(g(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(g(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(De(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?mi(t,void 0):n.length=o+1,_e(e.eventQueue_,Zt(t),i);for(var s=0;s<r.length;s++)Ct(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Od(e){var t,n,r={};e.charAt(0)==="?"&&(e=e.substring(1));try{for(var i=ce(e.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(s.length!==0){var a=s.split("=");a.length===2?r[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):J("Invalid query segment '"+s+"' in query '"+e+"'")}}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}var Lr=function(e,t){var n=Rd(e),r=n.namespace;n.domain==="firebase.com"&&Te(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Te("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Eu();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kr(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new A(n.pathString)}},Rd=function(e){var t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){var u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));var c=e.indexOf("/");c===-1&&(c=e.length);var f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(i=Td(e.substring(c,f)));var d=Od(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;var h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var da=function(){function e(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return e.prototype.getPath=function(){var t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+G(this.snapshot.exportVal())},e}(),ha=function(){function e(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path.toString()+":cancel"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa=function(){function e(t,n){this.snapshotCallback=t,this.cancelCallback=n}return e.prototype.onValue=function(t,n){this.snapshotCallback.call(null,t,n)},e.prototype.onCancel=function(t){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)},Object.defineProperty(e.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),e.prototype.matches=function(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context},e}();/**
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
 */var xd=function(){function e(t,n){this._repo=t,this._path=n}return e.prototype.cancel=function(){var t=new se;return _d(this._repo,this._path,t.wrapCallback(function(){})),t.promise},e.prototype.remove=function(){ve("OnDisconnect.remove",this._path);var t=new se;return yo(this._repo,this._path,null,t.wrapCallback(function(){})),t.promise},e.prototype.set=function(t){ve("OnDisconnect.set",this._path),Re("OnDisconnect.set",t,this._path,!1);var n=new se;return yo(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e.prototype.setWithPriority=function(t,n){ve("OnDisconnect.setWithPriority",this._path),Re("OnDisconnect.setWithPriority",t,this._path,!1),gi("OnDisconnect.setWithPriority",n,!1);var r=new se;return md(this._repo,this._path,t,n,r.wrapCallback(function(){})),r.promise},e.prototype.update=function(t){ve("OnDisconnect.update",this._path),ra("OnDisconnect.update",t,this._path,!1);var n=new se;return gd(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e}();/**
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
 */var me=function(){function e(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(e.prototype,"key",{get:function(){return I(this._path)?null:qr(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ref",{get:function(){return new xe(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryIdentifier",{get:function(){var t=ro(this._queryParams),n=Hr(t);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryObject",{get:function(){return ro(this._queryParams)},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){if(t=he(t),!(t instanceof e))return!1;var n=this._repo===t._repo,r=Xr(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i},e.prototype.toJSON=function(){return this.toString()},e.prototype.toString=function(){return this._repo.toString()+sc(this._path)},e}();function Gn(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function Ge(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Se){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var o=e.getIndexStartName();if(o!==ke)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){var s=e.getIndexEndName();if(s!==Oe)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===D){if(t!=null&&!Gt(t)||n!=null&&!Gt(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g(e.getIndex()instanceof Zr||e.getIndex()===ei,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function jn(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var xe=function(e){$(t,e);function t(n,r){return e.call(this,n,r,new Ps,!1)||this}return Object.defineProperty(t.prototype,"parent",{get:function(){var n=Cs(this._path);return n===null?null:new t(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),t}(me),Kn=function(){function e(t,n,r){this._node=t,this.ref=n,this._index=r}return Object.defineProperty(e.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),e.prototype.child=function(t){var n=new A(t),r=ot(this.ref,t);return new e(this._node.getChild(n),r,D)},e.prototype.exists=function(){return!this._node.isEmpty()},e.prototype.exportVal=function(){return this._node.val(!0)},e.prototype.forEach=function(t){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return t(new e(o,ot(n.ref,i),D))})},e.prototype.hasChild=function(t){var n=new A(t);return!this._node.getChild(n).isEmpty()},e.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},e.prototype.toJSON=function(){return this.exportVal()},e.prototype.val=function(){return this._node.val()},e}();function va(e,t){return e=he(e),e._checkNotDeleted("ref"),t!==void 0?ot(e._root,t):e._root}function bo(e,t){e=he(e),e._checkNotDeleted("refFromURL");var n=Lr(t,e._repo.repoInfo_.nodeAdmin);ia("refFromURL",n);var r=n.repoInfo;return!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host&&Te("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),va(e,n.path.toString())}function ot(e,t){return e=he(e),E(e._path)===null?id("child","path",t,!1):jt("child","path",t,!1),new xe(e._repo,V(e._path,t))}function Ad(e,t){e=he(e),ve("push",e._path),Re("push",t,e._path,!0);var n=aa(e._repo),r=Rc(n),i=ot(e,r),o=ot(e,r),s;return t!=null?s=Ii(o,t).then(function(){return o}):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Nd(e){return ve("remove",e._path),Ii(e,null)}function Ii(e,t){e=he(e),ve("set",e._path),Re("set",t,e._path,!1);var n=new se;return wi(e._repo,e._path,t,null,n.wrapCallback(function(){})),n.promise}function kd(e,t){e=he(e),ve("setPriority",e._path),gi("setPriority",t,!1);var n=new se;return wi(e._repo,V(e._path,".priority"),t,null,n.wrapCallback(function(){})),n.promise}function Pd(e,t,n){if(ve("setWithPriority",e._path),Re("setWithPriority",t,e._path,!1),gi("setWithPriority",n,!1),e.key===".length"||e.key===".keys")throw"setWithPriority failed: "+e.key+" is a read-only object.";var r=new se;return wi(e._repo,e._path,t,n,r.wrapCallback(function(){})),r.promise}function Ld(e,t){ra("update",t,e._path,!1);var n=new se;return pd(e._repo,e._path,t,n.wrapCallback(function(){})),n.promise}function Dd(e){return e=he(e),hd(e._repo,e).then(function(t){return new Kn(t,new xe(e._repo,e._path),e._queryParams.getIndex())})}var _a=function(){function e(t){this.callbackContext=t}return e.prototype.respondsTo=function(t){return t==="value"},e.prototype.createEvent=function(t,n){var r=n._queryParams.getIndex();return new da("value",this,new Kn(t.snapshotNode,new xe(n._repo,n._path),r))},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,null)}},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new ha(this,t,n):null},e.prototype.matches=function(t){return t instanceof e?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1},e.prototype.hasAnyCallback=function(){return this.callbackContext!==null},e}(),ma=function(){function e(t,n){this.eventType=t,this.callbackContext=n}return e.prototype.respondsTo=function(t){var n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new ha(this,t,n):null},e.prototype.createEvent=function(t,n){g(t.childName!=null,"Child events should have a childName.");var r=ot(new xe(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new da(t.type,this,new Kn(t.snapshotNode,r,i),t.prevName)},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,t.prevName)}},e.prototype.matches=function(t){return t instanceof e?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1},e.prototype.hasAnyCallback=function(){return!!this.callbackContext},e}();function rn(e,t,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var s=n,a=function(c,f){Pr(e._repo,e,u),s(c,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}var l=new pa(n,o||void 0),u=t==="value"?new _a(l):new ma(t,l);return yd(e._repo,e,u),function(){return Pr(e._repo,e,u)}}function Dr(e,t,n,r){return rn(e,"value",t,n,r)}function wo(e,t,n,r){return rn(e,"child_added",t,n,r)}function Co(e,t,n,r){return rn(e,"child_changed",t,n,r)}function Eo(e,t,n,r){return rn(e,"child_moved",t,n,r)}function Io(e,t,n,r){return rn(e,"child_removed",t,n,r)}function So(e,t,n){var r=null,i=n?new pa(n):null;t==="value"?r=new _a(i):t&&(r=new ma(t,i)),Pr(e._repo,e,r)}var Ie=function(){function e(){}return e}(),ga=function(e){$(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Re("endAt",this._value,n._path,!0);var r=Er(n._queryParams,this._value,this._key);if(jn(r),Ge(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new me(n._repo,n._path,r,n._orderByCalled)},t}(Ie);function Fd(e,t){return tn("endAt","key",t,!0),new ga(e,t)}var Md=function(e){$(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Re("endBefore",this._value,n._path,!1);var r=Dc(n._queryParams,this._value,this._key);if(jn(r),Ge(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new me(n._repo,n._path,r,n._orderByCalled)},t}(Ie);function Vd(e,t){return tn("endBefore","key",t,!0),new Md(e,t)}var ya=function(e){$(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Re("startAt",this._value,n._path,!0);var r=Cr(n._queryParams,this._value,this._key);if(jn(r),Ge(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new me(n._repo,n._path,r,n._orderByCalled)},t}(Ie);function Bd(e,t){return e===void 0&&(e=null),tn("startAt","key",t,!0),new ya(e,t)}var $d=function(e){$(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Re("startAfter",this._value,n._path,!1);var r=Lc(n._queryParams,this._value,this._key);if(jn(r),Ge(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new me(n._repo,n._path,r,n._orderByCalled)},t}(Ie);function Ud(e,t){return tn("startAfter","key",t,!0),new $d(e,t)}var Wd=function(e){$(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new me(n._repo,n._path,kc(n._queryParams,this._limit),n._orderByCalled)},t}(Ie);function zd(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Wd(e)}var Hd=function(e){$(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new me(n._repo,n._path,Pc(n._queryParams,this._limit),n._orderByCalled)},t}(Ie);function Gd(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Hd(e)}var jd=function(e){$(t,e);function t(n){var r=e.call(this)||this;return r._path=n,r}return t.prototype._apply=function(n){Gn(n,"orderByChild");var r=new A(this._path);if(I(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Zr(r),o=Nn(n._queryParams,i);return Ge(o),new me(n._repo,n._path,o,!0)},t}(Ie);function Kd(e){if(e==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(e==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(e==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return jt("orderByChild","path",e,!1),new jd(e)}var Qd=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Gn(n,"orderByKey");var r=Nn(n._queryParams,Se);return Ge(r),new me(n._repo,n._path,r,!0)},t}(Ie);function Yd(){return new Qd}var qd=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Gn(n,"orderByPriority");var r=Nn(n._queryParams,D);return Ge(r),new me(n._repo,n._path,r,!0)},t}(Ie);function Xd(){return new qd}var Jd=function(e){$(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){Gn(n,"orderByValue");var r=Nn(n._queryParams,ei);return Ge(r),new me(n._repo,n._path,r,!0)},t}(Ie);function Zd(){return new Jd}var eh=function(e){$(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){if(Re("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ga(this._value,this._key)._apply(new ya(this._value,this._key)._apply(n))},t}(Ie);function th(e,t){return tn("equalTo","key",t,!0),new eh(e,t)}function ge(e){for(var t,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=he(e);try{for(var s=ce(r),a=s.next();!a.done;a=s.next()){var l=a.value;o=l._apply(o)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return o}Tf(xe);Nf(xe);/**
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
 */var nh="FIREBASE_DATABASE_EMULATOR_HOST",Fr={},ba=!1;function rh(e,t,n,r){e.repoInfo_=new Kr(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function wa(e,t,n,r,i){var o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||Te("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var s=Lr(o,i),a=s.repoInfo,l,u=void 0;typeof process<"u"&&(u=process.env[nh]),u?(l=!0,o="http://"+u+"?ns="+a.namespace,s=Lr(o,i),a=s.repoInfo):l=!s.repoInfo.secure;var c=i&&l?new Lt(Lt.OWNER):new ku(e.name,e.options,t);ia("Invalid Firebase Database URL",s),I(s.path)||Te("Database URL must point to the root of a Firebase Database (not including a child path).");var f=oh(a,e,c,new Nu(e.name,n));return new ah(f,e)}function ih(e,t){var n=Fr[t];(!n||n[e.key]!==e)&&Te("Database "+t+"("+e.repoInfo_+") has already been deleted."),la(e),delete n[e.key]}function oh(e,t,n,r){var i=Fr[t.name];i||(i={},Fr[t.name]=i);var o=i[e.toURLString()];return o&&Te("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ud(e,ba,n,r),i[e.toURLString()]=o,o}function sh(e){ba=e}var ah=function(){function e(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(e.prototype,"_repo",{get:function(){return this._instanceStarted||(cd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new xe(this._repo,O())),this._rootInternal},enumerable:!1,configurable:!0}),e.prototype._delete=function(){return this._rootInternal!==null&&(ih(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},e.prototype._checkNotDeleted=function(t){this._rootInternal===null&&Te("Cannot call "+t+" on a deleted database.")},e}();function lh(e,t,n,r){r===void 0&&(r={}),e=he(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Te("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Te('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Lt(Lt.OWNER);else if(r.mockUserToken){var s=typeof r.mockUserToken=="string"?r.mockUserToken:Ol(r.mockUserToken,e.app.options.projectId);o=new Lt(s)}rh(i,t,n,o)}function uh(e){e=he(e),e._checkNotDeleted("goOffline"),la(e._repo)}function ch(e){e=he(e),e._checkNotDeleted("goOnline"),bd(e._repo)}/**
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
 */var fh={".sv":"timestamp"};function dh(){return fh}function hh(e){return{".sv":{increment:e}}}/**
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
 */var ph=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();function vh(e,t,n){var r;if(e=he(e),ve("Reference.transaction",e._path),e.key===".length"||e.key===".keys")throw"Reference.transaction failed: "+e.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new se,s=function(l,u,c){var f=null;l?o.reject(l):(f=new Kn(c,new xe(e._repo,e._path),D),o.resolve(new ph(u,f)))},a=Dr(e,function(){});return Ed(e._repo,e._path,t,s,a,i),o.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _h=function(){function e(t){this._delegate=t}return e.prototype.cancel=function(t){w("OnDisconnect.cancel",0,1,arguments.length),Q("OnDisconnect.cancel","onComplete",t,!0);var n=this._delegate.cancel();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.remove=function(t){w("OnDisconnect.remove",0,1,arguments.length),Q("OnDisconnect.remove","onComplete",t,!0);var n=this._delegate.remove();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.set=function(t,n){w("OnDisconnect.set",1,2,arguments.length),Q("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(t);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.setWithPriority=function(t,n,r){w("OnDisconnect.setWithPriority",2,3,arguments.length),Q("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(t,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(t,n){if(w("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){for(var r={},i=0;i<t.length;++i)r[""+i]=t[i];t=r,J("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Q("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(t);return n&&o.then(function(){return n(null)},function(s){return n(s)}),o},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mh=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return w("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt=function(){function e(t,n){this._database=t,this._delegate=n}return e.prototype.val=function(){return w("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},e.prototype.exportVal=function(){return w("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},e.prototype.toJSON=function(){return w("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.exists=function(){return w("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},e.prototype.child=function(t){return w("DataSnapshot.child",0,1,arguments.length),t=String(t),jt("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))},e.prototype.hasChild=function(t){return w("DataSnapshot.hasChild",1,1,arguments.length),jt("DataSnapshot.hasChild","path",t,!1),this._delegate.hasChild(t)},e.prototype.getPriority=function(){return w("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},e.prototype.forEach=function(t){var n=this;return w("DataSnapshot.forEach",1,1,arguments.length),Q("DataSnapshot.forEach","action",t,!1),this._delegate.forEach(function(r){return t(new e(n._database,r))})},e.prototype.hasChildren=function(){return w("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(e.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),e.prototype.numChildren=function(){return w("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},e.prototype.getRef=function(){return w("DataSnapshot.ref",0,0,arguments.length),new et(this._database,this._delegate.ref)},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),e}(),Ca=function(){function e(t,n){this.database=t,this._delegate=n}return e.prototype.on=function(t,n,r,i){var o=this,s;w("Query.on",2,4,arguments.length),Q("Query.on","callback",n,!1);var a=e.getCancelAndContextArgs_("Query.on",r,i),l=function(c,f){n.call(a.context,new Vt(o.database,c),f)};l.userCallback=n,l.context=a.context;var u=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(t){case"value":return Dr(this._delegate,l,u),n;case"child_added":return wo(this._delegate,l,u),n;case"child_removed":return Io(this._delegate,l,u),n;case"child_changed":return Co(this._delegate,l,u),n;case"child_moved":return Eo(this._delegate,l,u),n;default:throw new Error(ae("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},e.prototype.off=function(t,n,r){if(w("Query.off",0,3,arguments.length),rd("Query.off",t,!0),Q("Query.off","callback",n,!0),Vi("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,So(this._delegate,t,i)}else So(this._delegate,t)},e.prototype.get=function(){var t=this;return Dd(this._delegate).then(function(n){return new Vt(t.database,n)})},e.prototype.once=function(t,n,r,i){var o=this;w("Query.once",1,4,arguments.length),Q("Query.once","callback",n,!0);var s=e.getCancelAndContextArgs_("Query.once",r,i),a=new se,l=function(c,f){var d=new Vt(o.database,c);n&&n.call(s.context,d,f),a.resolve(d)};l.userCallback=n,l.context=s.context;var u=function(c){s.cancel&&s.cancel.call(s.context,c),a.reject(c)};switch(t){case"value":Dr(this._delegate,l,u,{onlyOnce:!0});break;case"child_added":wo(this._delegate,l,u,{onlyOnce:!0});break;case"child_removed":Io(this._delegate,l,u,{onlyOnce:!0});break;case"child_changed":Co(this._delegate,l,u,{onlyOnce:!0});break;case"child_moved":Eo(this._delegate,l,u,{onlyOnce:!0});break;default:throw new Error(ae("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise},e.prototype.limitToFirst=function(t){return w("Query.limitToFirst",1,1,arguments.length),new e(this.database,ge(this._delegate,zd(t)))},e.prototype.limitToLast=function(t){return w("Query.limitToLast",1,1,arguments.length),new e(this.database,ge(this._delegate,Gd(t)))},e.prototype.orderByChild=function(t){return w("Query.orderByChild",1,1,arguments.length),new e(this.database,ge(this._delegate,Kd(t)))},e.prototype.orderByKey=function(){return w("Query.orderByKey",0,0,arguments.length),new e(this.database,ge(this._delegate,Yd()))},e.prototype.orderByPriority=function(){return w("Query.orderByPriority",0,0,arguments.length),new e(this.database,ge(this._delegate,Xd()))},e.prototype.orderByValue=function(){return w("Query.orderByValue",0,0,arguments.length),new e(this.database,ge(this._delegate,Zd()))},e.prototype.startAt=function(t,n){return t===void 0&&(t=null),w("Query.startAt",0,2,arguments.length),new e(this.database,ge(this._delegate,Bd(t,n)))},e.prototype.startAfter=function(t,n){return t===void 0&&(t=null),w("Query.startAfter",0,2,arguments.length),new e(this.database,ge(this._delegate,Ud(t,n)))},e.prototype.endAt=function(t,n){return t===void 0&&(t=null),w("Query.endAt",0,2,arguments.length),new e(this.database,ge(this._delegate,Fd(t,n)))},e.prototype.endBefore=function(t,n){return t===void 0&&(t=null),w("Query.endBefore",0,2,arguments.length),new e(this.database,ge(this._delegate,Vd(t,n)))},e.prototype.equalTo=function(t,n){return w("Query.equalTo",1,2,arguments.length),new e(this.database,ge(this._delegate,th(t,n)))},e.prototype.toString=function(){return w("Query.toString",0,0,arguments.length),this._delegate.toString()},e.prototype.toJSON=function(){return w("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.isEqual=function(t){if(w("Query.isEqual",1,1,arguments.length),!(t instanceof e)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)},e.getCancelAndContextArgs_=function(t,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Q(t,"cancel",i.cancel,!0),i.context=r,Vi(t,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(ae(t,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(e.prototype,"ref",{get:function(){return new et(this.database,new xe(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),e}(),et=function(e){$(t,e);function t(n,r){var i=e.call(this,n,new me(r._repo,r._path,new Ps,!1))||this;return i.database=n,i._delegate=r,i}return t.prototype.getKey=function(){return w("Reference.key",0,0,arguments.length),this._delegate.key},t.prototype.child=function(n){return w("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new t(this.database,ot(this._delegate,n))},t.prototype.getParent=function(){w("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new t(this.database,n):null},t.prototype.getRoot=function(){return w("Reference.root",0,0,arguments.length),new t(this.database,this._delegate.root)},t.prototype.set=function(n,r){w("Reference.set",1,2,arguments.length),Q("Reference.set","onComplete",r,!0);var i=Ii(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(n,r){if(w("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ve("Reference.update",this._delegate._path),Q("Reference.update","onComplete",r,!0);var s=Ld(this._delegate,n);return r&&s.then(function(){return r(null)},function(a){return r(a)}),s},t.prototype.setWithPriority=function(n,r,i){w("Reference.setWithPriority",2,3,arguments.length),Q("Reference.setWithPriority","onComplete",i,!0);var o=Pd(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(s){return i(s)}),o},t.prototype.remove=function(n){w("Reference.remove",0,1,arguments.length),Q("Reference.remove","onComplete",n,!0);var r=Nd(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.transaction=function(n,r,i){var o=this;w("Reference.transaction",1,3,arguments.length),Q("Reference.transaction","transactionUpdate",n,!1),Q("Reference.transaction","onComplete",r,!0),od("Reference.transaction","applyLocally",i,!0);var s=vh(this._delegate,n,{applyLocally:i}).then(function(a){return new mh(a.committed,new Vt(o.database,a.snapshot))});return r&&s.then(function(a){return r(null,a.committed,a.snapshot)},function(a){return r(a,!1,null)}),s},t.prototype.setPriority=function(n,r){w("Reference.setPriority",1,2,arguments.length),Q("Reference.setPriority","onComplete",r,!0);var i=kd(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.push=function(n,r){var i=this;w("Reference.push",0,2,arguments.length),Q("Reference.push","onComplete",r,!0);var o=Ad(this._delegate,n),s=o.then(function(l){return new t(i.database,l)});r&&s.then(function(){return r(null)},function(l){return r(l)});var a=new t(this.database,o);return a.then=s.then.bind(s),a.catch=s.catch.bind(s,void 0),a},t.prototype.onDisconnect=function(){return ve("Reference.onDisconnect",this._delegate._path),new _h(new xd(this._delegate._repo,this._delegate._path))},Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),t}(Ca);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On=function(){function e(t,n){var r=this;this._delegate=t,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return e.prototype.useEmulator=function(t,n,r){r===void 0&&(r={}),lh(this._delegate,t,n,r)},e.prototype.ref=function(t){if(w("database.ref",0,1,arguments.length),t instanceof et){var n=bo(this._delegate,t.toString());return new et(this,n)}else{var n=va(this._delegate,t);return new et(this,n)}},e.prototype.refFromURL=function(t){var n="database.refFromURL";w(n,1,1,arguments.length);var r=bo(this._delegate,t);return new et(this,r)},e.prototype.goOffline=function(){return w("database.goOffline",0,0,arguments.length),uh(this._delegate)},e.prototype.goOnline=function(){return w("database.goOnline",0,0,arguments.length),ch(this._delegate)},e.ServerValue={TIMESTAMP:dh(),increment:function(t){return hh(t)}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gh=function(){Xe.forceDisallow(),Yr.forceAllow()},yh=function(){Yr.forceDisallow()},bh=function(){return Xe.isAvailable()},wh=function(e,t){var n=e._delegate._repo.persistentConnection_;n.securityDebugCallback_=t},Ch=function(e,t){wd(e._delegate._repo,t)},Eh=function(e,t){Cd(e._delegate._repo,t)},Ih=function(e){return e._delegate._repo.dataUpdateCount},Sh=function(e,t){return fd(e._delegate._repo,t)};function Th(e){var t=e.app,n=e.url,r=e.version,i=e.customAuthImpl,o=e.namespace,s=e.nodeAdmin,a=s===void 0?!1:s;Xo(r);var l=new zo("auth-internal",new Ho("database-standalone"));return l.setComponent(new Kt("auth-internal",function(){return i},"PRIVATE")),{instance:new On(wa(t,l,void 0,n,a),t),namespace:o}}var Oh=Object.freeze({__proto__:null,forceLongPolling:gh,forceWebSockets:yh,isWebSocketsAvailable:bh,setSecurityDebugCallback:wh,stats:Ch,statsIncrementCounter:Eh,dataUpdateCount:Ih,interceptServerData:Sh,initStandalone:Th});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rh=nt;nt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};nt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var xh=ys,Ah=function(e){var t=nt.prototype.put;return nt.prototype.put=function(n,r,i,o){o!==void 0&&(o=e()),t.call(this,n,r,i,o)},function(){nt.prototype.put=t}},Nh=Kr,kh=function(e){return e._delegate._queryIdentifier},Ph=function(e){sh(e)},Lh=Object.freeze({__proto__:null,DataConnection:Rh,RealTimeConnection:xh,hijackHash:Ah,ConnectionTarget:Nh,queryIdentifier:kh,forceRestClient:Ph});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dh=On.ServerValue;function Fh(e){Xo(e.SDK_VERSION),e.INTERNAL.registerComponent(new Kt("database",function(t,n){var r=n.instanceIdentifier,i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new On(wa(i,o,s,r),i)},"PUBLIC").setServiceProps({Reference:et,Query:Ca,Database:On,DataSnapshot:Vt,enableLogging:ts,INTERNAL:Oh,ServerValue:Dh,TEST_ACCESS:Lh}).setMultipleInstances(!0)),e.registerVersion(yu,bu)}Fh(Qt);const Mh={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},Vh=Qt.initializeApp(Mh).database();function Bh(){const e=Po();Vh.ref("users/"+e.uid).set({device:e.device,concentration:e.concentration,age_group:e.age_group,dyslexia:e.dyslexia,dyscalculia:e.dyscalculia})}var ln,$h=new Uint8Array(16);function Ea(){if(!ln&&(ln=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ln))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ln($h)}const Uh=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ia(e){return typeof e=="string"&&Uh.test(e)}var q=[];for(var lr=0;lr<256;++lr)q.push((lr+256).toString(16).substr(1));function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(q[e[t+0]]+q[e[t+1]]+q[e[t+2]]+q[e[t+3]]+"-"+q[e[t+4]]+q[e[t+5]]+"-"+q[e[t+6]]+q[e[t+7]]+"-"+q[e[t+8]]+q[e[t+9]]+"-"+q[e[t+10]]+q[e[t+11]]+q[e[t+12]]+q[e[t+13]]+q[e[t+14]]+q[e[t+15]]).toLowerCase();if(!Ia(n))throw TypeError("Stringified UUID is invalid");return n}var To,ur,cr=0,fr=0;function Wh(e,t,n){var r=t&&n||0,i=t||new Array(16);e=e||{};var o=e.node||To,s=e.clockseq!==void 0?e.clockseq:ur;if(o==null||s==null){var a=e.random||(e.rng||Ea)();o==null&&(o=To=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),s==null&&(s=ur=(a[6]<<8|a[7])&16383)}var l=e.msecs!==void 0?e.msecs:Date.now(),u=e.nsecs!==void 0?e.nsecs:fr+1,c=l-cr+(u-fr)/1e4;if(c<0&&e.clockseq===void 0&&(s=s+1&16383),(c<0||l>cr)&&e.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");cr=l,fr=u,ur=s,l+=122192928e5;var f=((l&268435455)*1e4+u)%4294967296;i[r++]=f>>>24&255,i[r++]=f>>>16&255,i[r++]=f>>>8&255,i[r++]=f&255;var d=l/4294967296*1e4&268435455;i[r++]=d>>>8&255,i[r++]=d&255,i[r++]=d>>>24&15|16,i[r++]=d>>>16&255,i[r++]=s>>>8|128,i[r++]=s&255;for(var h=0;h<6;++h)i[r+h]=o[h];return t||Si(i)}function zh(e){if(!Ia(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=t&255,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=t&255,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=t&255,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=t&255,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=t&255,n}function Hh(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}var Gh="6ba7b810-9dad-11d1-80b4-00c04fd430c8",jh="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Sa(e,t,n){function r(i,o,s,a){if(typeof i=="string"&&(i=Hh(i)),typeof o=="string"&&(o=zh(o)),o.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l=new Uint8Array(16+i.length);if(l.set(o),l.set(i,o.length),l=n(l),l[6]=l[6]&15|t,l[8]=l[8]&63|128,s){a=a||0;for(var u=0;u<16;++u)s[a+u]=l[u];return s}return Si(l)}try{r.name=e}catch{}return r.DNS=Gh,r.URL=jh,r}function Kh(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return Qh(Yh(qh(e),e.length*8))}function Qh(e){for(var t=[],n=e.length*32,r="0123456789abcdef",i=0;i<n;i+=8){var o=e[i>>5]>>>i%32&255,s=parseInt(r.charAt(o>>>4&15)+r.charAt(o&15),16);t.push(s)}return t}function Ta(e){return(e+64>>>9<<4)+14+1}function Yh(e,t){e[t>>5]|=128<<t%32,e[Ta(t)-1]=t;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,s=0;s<e.length;s+=16){var a=n,l=r,u=i,c=o;n=ee(n,r,i,o,e[s],7,-680876936),o=ee(o,n,r,i,e[s+1],12,-389564586),i=ee(i,o,n,r,e[s+2],17,606105819),r=ee(r,i,o,n,e[s+3],22,-1044525330),n=ee(n,r,i,o,e[s+4],7,-176418897),o=ee(o,n,r,i,e[s+5],12,1200080426),i=ee(i,o,n,r,e[s+6],17,-1473231341),r=ee(r,i,o,n,e[s+7],22,-45705983),n=ee(n,r,i,o,e[s+8],7,1770035416),o=ee(o,n,r,i,e[s+9],12,-1958414417),i=ee(i,o,n,r,e[s+10],17,-42063),r=ee(r,i,o,n,e[s+11],22,-1990404162),n=ee(n,r,i,o,e[s+12],7,1804603682),o=ee(o,n,r,i,e[s+13],12,-40341101),i=ee(i,o,n,r,e[s+14],17,-1502002290),r=ee(r,i,o,n,e[s+15],22,1236535329),n=te(n,r,i,o,e[s+1],5,-165796510),o=te(o,n,r,i,e[s+6],9,-1069501632),i=te(i,o,n,r,e[s+11],14,643717713),r=te(r,i,o,n,e[s],20,-373897302),n=te(n,r,i,o,e[s+5],5,-701558691),o=te(o,n,r,i,e[s+10],9,38016083),i=te(i,o,n,r,e[s+15],14,-660478335),r=te(r,i,o,n,e[s+4],20,-405537848),n=te(n,r,i,o,e[s+9],5,568446438),o=te(o,n,r,i,e[s+14],9,-1019803690),i=te(i,o,n,r,e[s+3],14,-187363961),r=te(r,i,o,n,e[s+8],20,1163531501),n=te(n,r,i,o,e[s+13],5,-1444681467),o=te(o,n,r,i,e[s+2],9,-51403784),i=te(i,o,n,r,e[s+7],14,1735328473),r=te(r,i,o,n,e[s+12],20,-1926607734),n=ne(n,r,i,o,e[s+5],4,-378558),o=ne(o,n,r,i,e[s+8],11,-2022574463),i=ne(i,o,n,r,e[s+11],16,1839030562),r=ne(r,i,o,n,e[s+14],23,-35309556),n=ne(n,r,i,o,e[s+1],4,-1530992060),o=ne(o,n,r,i,e[s+4],11,1272893353),i=ne(i,o,n,r,e[s+7],16,-155497632),r=ne(r,i,o,n,e[s+10],23,-1094730640),n=ne(n,r,i,o,e[s+13],4,681279174),o=ne(o,n,r,i,e[s],11,-358537222),i=ne(i,o,n,r,e[s+3],16,-722521979),r=ne(r,i,o,n,e[s+6],23,76029189),n=ne(n,r,i,o,e[s+9],4,-640364487),o=ne(o,n,r,i,e[s+12],11,-421815835),i=ne(i,o,n,r,e[s+15],16,530742520),r=ne(r,i,o,n,e[s+2],23,-995338651),n=re(n,r,i,o,e[s],6,-198630844),o=re(o,n,r,i,e[s+7],10,1126891415),i=re(i,o,n,r,e[s+14],15,-1416354905),r=re(r,i,o,n,e[s+5],21,-57434055),n=re(n,r,i,o,e[s+12],6,1700485571),o=re(o,n,r,i,e[s+3],10,-1894986606),i=re(i,o,n,r,e[s+10],15,-1051523),r=re(r,i,o,n,e[s+1],21,-2054922799),n=re(n,r,i,o,e[s+8],6,1873313359),o=re(o,n,r,i,e[s+15],10,-30611744),i=re(i,o,n,r,e[s+6],15,-1560198380),r=re(r,i,o,n,e[s+13],21,1309151649),n=re(n,r,i,o,e[s+4],6,-145523070),o=re(o,n,r,i,e[s+11],10,-1120210379),i=re(i,o,n,r,e[s+2],15,718787259),r=re(r,i,o,n,e[s+9],21,-343485551),n=Fe(n,a),r=Fe(r,l),i=Fe(i,u),o=Fe(o,c)}return[n,r,i,o]}function qh(e){if(e.length===0)return[];for(var t=e.length*8,n=new Uint32Array(Ta(t)),r=0;r<t;r+=8)n[r>>5]|=(e[r/8]&255)<<r%32;return n}function Fe(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Xh(e,t){return e<<t|e>>>32-t}function Qn(e,t,n,r,i,o){return Fe(Xh(Fe(Fe(t,e),Fe(r,o)),i),n)}function ee(e,t,n,r,i,o,s){return Qn(t&n|~t&r,e,t,i,o,s)}function te(e,t,n,r,i,o,s){return Qn(t&r|n&~r,e,t,i,o,s)}function ne(e,t,n,r,i,o,s){return Qn(t^n^r,e,t,i,o,s)}function re(e,t,n,r,i,o,s){return Qn(n^(t|~r),e,t,i,o,s)}var Jh=Sa("v3",48,Kh);const Zh=Jh;function ep(e,t,n){e=e||{};var r=e.random||(e.rng||Ea)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return Si(r)}function tp(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function dr(e,t){return e<<t|e>>>32-t}function np(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var i=0;i<r.length;++i)e.push(r.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,s=Math.ceil(o/16),a=new Array(s),l=0;l<s;++l){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=e[l*64+c*4]<<24|e[l*64+c*4+1]<<16|e[l*64+c*4+2]<<8|e[l*64+c*4+3];a[l]=u}a[s-1][14]=(e.length-1)*8/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=(e.length-1)*8&4294967295;for(var f=0;f<s;++f){for(var d=new Uint32Array(80),h=0;h<16;++h)d[h]=a[f][h];for(var p=16;p<80;++p)d[p]=dr(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var _=n[0],v=n[1],m=n[2],y=n[3],S=n[4],F=0;F<80;++F){var U=Math.floor(F/20),le=dr(_,5)+tp(U,v,m,y)+S+t[U]+d[F]>>>0;S=y,y=m,m=dr(v,30)>>>0,v=_,_=le}n[0]=n[0]+_>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+y>>>0,n[4]=n[4]+S>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var rp=Sa("v5",80,np);const ip=rp;var op={v1:Wh,v3:Zh,v4:ep,v5:ip},sp=qa();function ap(e){e.addEventListener("mousedown",Oa)}function lp(e){e.removeEventListener("mousedown",Oa)}function up(e){let t=document.createElement("span");t.className="p-ink",t.setAttribute("role","presentation"),e.appendChild(t),t.addEventListener("animationend",Ra)}function cp(e){let t=xa(e);t&&(lp(e),t.removeEventListener("animationend",Ra),t.remove())}function Oa(e){let t=e.currentTarget,n=xa(t);if(!n||getComputedStyle(n,null).display==="none")return;if(N.removeClass(n,"p-ink-active"),!N.getHeight(n)&&!N.getWidth(n)){let s=Math.max(N.getOuterWidth(t),N.getOuterHeight(t));n.style.height=s+"px",n.style.width=s+"px"}let r=N.getOffset(t),i=e.pageX-r.left+document.body.scrollTop-N.getWidth(n)/2,o=e.pageY-r.top+document.body.scrollLeft-N.getHeight(n)/2;n.style.top=o+"px",n.style.left=i+"px",N.addClass(n,"p-ink-active")}function Ra(e){N.removeClass(e.currentTarget,"p-ink-active")}function xa(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const Ti={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(up(e),ap(e))},unmounted(e){cp(e)}};var Aa={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){(!t||t.length!==(e||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const n=this.isBoth(),r=this.isHorizontal(),i=this.first,{numToleratedItems:o}=this.calculateNumItems(),s=this.itemSize,a=(c=0,f)=>c<=f?0:c,l=(c,f)=>c*f,u=(c=0,f=0)=>this.scrollTo({left:c,top:f,behavior:t});if(n){const c={rows:a(e[0],o[0]),cols:a(e[1],o[1])};(c.rows!==i.rows||c.cols!==i.cols)&&u(l(c.cols,s[1]),l(c.rows,s[0]))}else{const c=a(e,o);c!==i&&(r?u(l(c,s),0):u(0,l(c,s)))}},scrollInView(e,t,n="auto"){if(t){const r=this.isBoth(),i=this.isHorizontal(),{first:o,viewport:s}=this.getRenderedRange(),a=(c=0,f=0)=>this.scrollTo({left:c,top:f,behavior:n}),l=t==="to-start",u=t==="to-end";if(l){if(r)s.first.rows-o.rows>e[0]?a(s.first.cols*this.itemSize[1],(s.first.rows-1)*this.itemSize[0]):s.first.cols-o.cols>e[1]&&a((s.first.cols-1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.first-o>e){const c=(s.first-1)*this.itemSize;i?a(c,0):a(0,c)}}else if(u){if(r)s.last.rows-o.rows<=e[0]+1?a(s.first.cols*this.itemSize[1],(s.first.rows+1)*this.itemSize[0]):s.last.cols-o.cols<=e[1]+1&&a((s.first.cols+1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.last-o<=e+1){const c=(s.first+1)*this.itemSize;i?a(c,0):a(0,c)}}}else this.scrollToIndex(e,n)},getRenderedRange(){const e=(r,i)=>Math.floor(r/(i||r));let t=this.first,n=0;if(this.element){const r=this.isBoth(),i=this.isHorizontal(),o=this.element.scrollTop,s=this.element.scrollLeft;r?(t={rows:e(o,this.itemSize[0]),cols:e(s,this.itemSize[1])},n={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(i?s:o,this.itemSize),n=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:n}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),n=this.itemSize,r=this.getContentPosition(),i=this.element?this.element.offsetWidth-r.left:0,o=this.element?this.element.offsetHeight-r.top:0,s=(c,f)=>Math.ceil(c/(f||c)),a=c=>Math.ceil(c/2),l=e?{rows:s(o,n[0]),cols:s(i,n[1])}:s(t?i:o,n),u=this.d_numToleratedItems||(e?[a(l.rows),a(l.cols)]:a(l));return{numItemsInViewport:l,numToleratedItems:u}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:n,numToleratedItems:r}=this.calculateNumItems(),i=(s,a,l,u)=>this.getLast(s+a+(s<l?2:3)*l,u),o=e?{rows:i(t.rows,n.rows,r[0]),cols:i(t.cols,n.cols,r[1],!0)}:i(t,n,r);this.last=o,this.numItemsInViewport=n,this.d_numToleratedItems=r,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:n.rows}).map(()=>Array.from({length:n.cols})):Array.from({length:n})),this.lazy&&this.$emit("lazy-load",{first:t,last:o})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),n=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),r=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),i=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:n,top:r,bottom:i,x:t+n,y:r+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),n=this.element.parentElement,r=this.scrollWidth||`${this.element.offsetWidth||n.offsetWidth}px`,i=this.scrollHeight||`${this.element.offsetHeight||n.offsetHeight}px`,o=(s,a)=>this.element.style[s]=a;e||t?(o("height",i),o("width",r)):o("height",i)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),n=this.isHorizontal(),r=this.getContentPosition(),i=(o,s,a,l=0)=>this.spacerStyle={...this.spacerStyle,[`${o}`]:(s||[]).length*a+l+"px"};t?(i("height",e,this.itemSize[0],r.y),i("width",this.columns||e[1],this.itemSize[1],r.x)):n?i("width",this.columns||e,this.itemSize,r.x):i("height",e,this.itemSize,r.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),n=this.isHorizontal(),r=e?e.first:this.first,i=(s,a)=>s*a,o=(s=0,a=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${s}px, ${a}px, 0)`}};if(t)o(i(r.cols,this.itemSize[1]),i(r.rows,this.itemSize[0]));else{const s=i(r,this.itemSize);n?o(s,0):o(0,s)}}},onScrollPositionChange(e){const t=e.target,n=this.isBoth(),r=this.isHorizontal(),i=this.getContentPosition(),o=(v,m)=>v?v>m?v-m:v:0,s=(v,m)=>Math.floor(v/(m||v)),a=(v,m,y,S,F,U)=>v<=F?F:U?y-S-F:m+F-1,l=(v,m,y,S,F,U,le)=>v<=U?0:Math.max(0,le?v<m?y:v-U:v>m?y:v-2*U),u=(v,m,y,S,F,U)=>{let le=m+S+2*F;return v>=F&&(le+=F+1),this.getLast(le,U)},c=o(t.scrollTop,i.top),f=o(t.scrollLeft,i.left);let d=n?{rows:0,cols:0}:0,h=this.last,p=!1,_=this.lastScrollPos;if(n){const v=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=f,y={rows:s(c,this.itemSize[0]),cols:s(f,this.itemSize[1])},S={rows:a(y.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],v),cols:a(y.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};d={rows:l(y.rows,S.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],v),cols:l(y.cols,S.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},h={rows:u(y.rows,d.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(y.cols,d.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},p=d.rows!==this.first.rows||h.rows!==this.last.rows||d.cols!==this.first.cols||h.cols!==this.last.cols,_={top:c,left:f}}else{const v=r?f:c,m=this.lastScrollPos<=v,y=s(v,this.itemSize),S=a(y,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);d=l(y,S,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),h=u(y,d,this.last,this.numItemsInViewport,this.d_numToleratedItems),p=d!==this.first||h!==this.last,_=v}return{first:d,last:h,isRangeChanged:p,scrollPos:_}},onScrollChange(e){const{first:t,last:n,isRangeChanged:r,scrollPos:i}=this.onScrollPositionChange(e);if(r){const o={first:t,last:n};this.setContentPosition(o),this.first=t,this.last=n,this.lastScrollPos=i,this.$emit("scroll-index-change",o),this.lazy&&this.$emit("lazy-load",o)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,n=this.isBoth()?this.first.rows+e:this.first+e;return{index:n,count:t,first:n===0,last:n===t-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions(e,t){let n=this.loaderArr.length;return{index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0,...t}},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const fp=["tabindex"],dp={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function hp(e,t,n,r,i,o){return n.disabled?(R(),k(ht,{key:1},[K(e.$slots,"default"),K(e.$slots,"content",{items:n.items,rows:n.items,columns:o.loadedColumns})],64)):(R(),k("div",{key:0,ref:o.elementRef,class:H(o.containerClass),tabindex:n.tabindex,style:Je(n.style),onScroll:t[0]||(t[0]=(...s)=>o.onScroll&&o.onScroll(...s))},[K(e.$slots,"content",{styleClass:o.contentClass,items:o.loadedItems,getItemOptions:o.getOptions,loading:i.d_loading,getLoaderOptions:o.getLoaderOptions,itemSize:n.itemSize,rows:o.loadedRows,columns:o.loadedColumns,contentRef:o.contentRef,spacerStyle:i.spacerStyle,contentStyle:i.contentStyle,vertical:o.isVertical(),horizontal:o.isHorizontal(),both:o.isBoth()},()=>[b("div",{ref:o.contentRef,class:H(o.contentClass),style:Je(i.contentStyle)},[(R(!0),k(ht,null,fn(o.loadedItems,(s,a)=>K(e.$slots,"item",{key:a,item:s,options:o.getOptions(a)})),128))],6)]),n.showSpacer?(R(),k("div",{key:0,class:"p-virtualscroller-spacer",style:Je(i.spacerStyle)},null,4)):Ce("",!0),!n.loaderDisabled&&n.showLoader&&i.d_loading?(R(),k("div",{key:1,class:H(o.loaderClass)},[e.$slots&&e.$slots.loader?(R(!0),k(ht,{key:0},fn(i.loaderArr,(s,a)=>K(e.$slots,"loader",{key:a,options:o.getLoaderOptions(a,o.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})),128)):(R(),k("i",dp))],2)):Ce("",!0)],46,fp))}function pp(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var vp=`
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
`;pp(vp);Aa.render=hp;var Na={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=N.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function _p(e,t,n,r,i,o){return o.inline?K(e.$slots,"default",{key:0}):i.mounted?(R(),Xa(Ja,{key:1,to:n.appendTo},[K(e.$slots,"default")],8,["to"])):Ce("",!0)}Na.render=_p;var ka={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Jn.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?z.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?z.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?z.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?z.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return z.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return z.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&N.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&N.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.focused=!0,this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&z.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||N.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){if(e.relatedTarget===this.$refs.focusInput){const n=N.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)");N.focus(n)}else N.focus(this.$refs.focusInput)},onLastHiddenFocus(){N.focus(this.$refs.firstHiddenFocusableElementOnOverlay)},onOptionSelect(e,t,n=!0){const r=this.getOptionValue(t);this.updateModel(e,r),n&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){sp.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const n=e.currentTarget,r=n.value.length;n.setSelectionRange(r,r),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(N.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){Jn.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&N.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){Jn.clear(e)},alignOverlay(){this.appendTo==="self"?N.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=N.getOuterWidth(this.$el)+"px",N.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Za(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!N.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return N.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return z.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return z.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?z.findLastIndex(this.visibleOptions.slice(0,e),n=>this.isValidOption(n)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,r=!1;return this.focusedOptionIndex!==-1?(n=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)),n=n===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)):n+this.focusedOptionIndex):n=this.visibleOptions.findIndex(i=>this.isOptionMatched(i)),n!==-1&&(r=!0),n===-1&&this.focusedOptionIndex===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,n=N.findSingle(this.list,`li[id="${t}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,n,r)=>{t.push({optionGroup:n,group:!0,index:r});const i=this.getOptionGroupChildren(n);return i&&i.forEach(o=>t.push(o)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?el.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption(){return z.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return z.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},id(){return this.$attrs.id||tl()},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:Ti},components:{VirtualScroller:Aa,Portal:Na}};const mp=["id"],gp=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],yp=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],bp={class:"p-dropdown-trigger"},wp={key:0,class:"p-dropdown-header"},Cp={class:"p-dropdown-filter-container"},Ep=["value","placeholder","aria-owns","aria-activedescendant"],Ip=b("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),Sp={role:"status","aria-live":"polite",class:"p-hidden-accessible"},Tp=["id"],Op=["id"],Rp=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],xp={key:0,class:"p-dropdown-empty-message",role:"option"},Ap={key:1,class:"p-dropdown-empty-message",role:"option"},Np={key:0,role:"status","aria-live":"polite",class:"p-hidden-accessible"},kp={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function Pp(e,t,n,r,i,o){const s=dt("VirtualScroller"),a=dt("Portal"),l=Vr("ripple");return R(),k("div",{ref:"container",id:o.id,class:H(o.containerClass),onClick:t[16]||(t[16]=(...u)=>o.onContainerClick&&o.onContainerClick(...u))},[n.editable?(R(),k("input",Qe({key:0,ref:"focusInput",id:n.inputId,type:"text",style:n.inputStyle,class:o.inputStyleClass,value:o.editableInputValue,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,disabled:n.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":i.focused?o.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...u)=>o.onFocus&&o.onFocus(...u)),onBlur:t[1]||(t[1]=(...u)=>o.onBlur&&o.onBlur(...u)),onKeydown:t[2]||(t[2]=(...u)=>o.onKeyDown&&o.onKeyDown(...u)),onInput:t[3]||(t[3]=(...u)=>o.onEditableInput&&o.onEditableInput(...u))},n.inputProps),null,16,gp)):(R(),k("span",Qe({key:1,ref:"focusInput",id:n.inputId,style:n.inputStyle,class:o.inputStyleClass,tabindex:n.disabled?-1:n.tabindex,role:"combobox","aria-label":e.ariaLabel||(o.label==="p-emptylabel"?void 0:o.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":i.focused?o.focusedOptionId:void 0,"aria-disabled":n.disabled,onFocus:t[4]||(t[4]=(...u)=>o.onFocus&&o.onFocus(...u)),onBlur:t[5]||(t[5]=(...u)=>o.onBlur&&o.onBlur(...u)),onKeydown:t[6]||(t[6]=(...u)=>o.onKeyDown&&o.onKeyDown(...u))},n.inputProps),[K(e.$slots,"value",{value:n.modelValue,placeholder:n.placeholder},()=>[Ot(be(o.label==="p-emptylabel"?"\xA0":o.label||"empty"),1)])],16,yp)),n.showClear&&n.modelValue!=null?(R(),k("i",Qe({key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[7]||(t[7]=(...u)=>o.onClearClick&&o.onClearClick(...u))},n.clearIconProps),null,16)):Ce("",!0),b("div",bp,[K(e.$slots,"indicator",{},()=>[b("span",{class:H(o.dropdownIconClass),"aria-hidden":"true"},null,2)])]),ue(a,{appendTo:n.appendTo},{default:on(()=>[ue(nl,{name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},{default:on(()=>[i.overlayVisible?(R(),k("div",Qe({key:0,ref:o.overlayRef,style:n.panelStyle,class:o.panelStyleClass,onClick:t[14]||(t[14]=(...u)=>o.onOverlayClick&&o.onOverlayClick(...u)),onKeydown:t[15]||(t[15]=(...u)=>o.onOverlayKeyDown&&o.onOverlayKeyDown(...u))},n.panelProps),[b("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...u)=>o.onFirstHiddenFocus&&o.onFirstHiddenFocus(...u))},null,544),K(e.$slots,"header",{value:n.modelValue,options:o.visibleOptions}),n.filter?(R(),k("div",wp,[b("div",Cp,[b("input",Qe({ref:"filterInput",type:"text",value:i.filterValue,onVnodeUpdated:t[9]||(t[9]=(...u)=>o.onFilterUpdated&&o.onFilterUpdated(...u)),class:"p-dropdown-filter p-inputtext p-component",placeholder:n.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":o.focusedOptionId,onKeydown:t[10]||(t[10]=(...u)=>o.onFilterKeyDown&&o.onFilterKeyDown(...u)),onBlur:t[11]||(t[11]=(...u)=>o.onFilterBlur&&o.onFilterBlur(...u)),onInput:t[12]||(t[12]=(...u)=>o.onFilterChange&&o.onFilterChange(...u))},n.filterInputProps),null,16,Ep),Ip]),b("span",Sp,be(o.filterResultMessageText),1)])):Ce("",!0),b("div",{class:"p-dropdown-items-wrapper",style:Je({"max-height":o.virtualScrollerDisabled?n.scrollHeight:""})},[ue(s,Qe({ref:o.virtualScrollerRef},n.virtualScrollerOptions,{items:o.visibleOptions,style:{height:n.scrollHeight},tabindex:-1,disabled:o.virtualScrollerDisabled}),rl({content:on(({styleClass:u,contentRef:c,items:f,getItemOptions:d,contentStyle:h,itemSize:p})=>[b("ul",{ref:_=>o.listRef(_,c),id:o.id+"_list",class:H(["p-dropdown-items",u]),style:Je(h),role:"listbox"},[(R(!0),k(ht,null,fn(f,(_,v)=>(R(),k(ht,{key:o.getOptionRenderKey(_,o.getOptionIndex(v,d))},[o.isOptionGroup(_)?(R(),k("li",{key:0,id:o.id+"_"+o.getOptionIndex(v,d),style:Je({height:p?p+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[K(e.$slots,"optiongroup",{option:_.optionGroup,index:o.getOptionIndex(v,d)},()=>[Ot(be(o.getOptionGroupLabel(_.optionGroup)),1)])],12,Op)):Br((R(),k("li",{key:1,id:o.id+"_"+o.getOptionIndex(v,d),style:Je({height:p?p+"px":void 0}),class:H(["p-dropdown-item",{"p-highlight":o.isSelected(_),"p-focus":i.focusedOptionIndex===o.getOptionIndex(v,d),"p-disabled":o.isOptionDisabled(_)}]),role:"option","aria-label":o.getOptionLabel(_),"aria-selected":o.isSelected(_),"aria-disabled":o.isOptionDisabled(_),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(v,d)),onClick:m=>o.onOptionSelect(m,_),onMousemove:m=>o.onOptionMouseMove(m,o.getOptionIndex(v,d))},[K(e.$slots,"option",{option:_,index:o.getOptionIndex(v,d)},()=>[Ot(be(o.getOptionLabel(_)),1)])],46,Rp)),[[l]])],64))),128)),i.filterValue&&(!f||f&&f.length===0)?(R(),k("li",xp,[K(e.$slots,"emptyfilter",{},()=>[Ot(be(o.emptyFilterMessageText),1)])])):!n.options||n.options&&n.options.length===0?(R(),k("li",Ap,[K(e.$slots,"empty",{},()=>[Ot(be(o.emptyMessageText),1)])])):Ce("",!0)],14,Tp),!n.options||n.options&&n.options.length===0?(R(),k("span",Np,be(o.emptyMessageText),1)):Ce("",!0),b("span",kp,be(o.selectedMessageText),1)]),_:2},[e.$slots.loader?{name:"loader",fn:on(({options:u})=>[K(e.$slots,"loader",{options:u})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),K(e.$slots,"footer",{value:n.modelValue,options:o.visibleOptions}),b("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...u)=>o.onLastHiddenFocus&&o.onLastHiddenFocus(...u))},null,544)],16)):Ce("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,mp)}function Lp(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Dp=`
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
`;Lp(Dp);ka.render=Pp;var Pa={name:"SelectButton",emits:["update:modelValue","focus","blur","change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,unselectable:{type:Boolean,default:!0},disabled:Boolean,dataKey:null,"aria-labelledby":{type:String,default:null}},data(){return{focusedIndex:0}},mounted(){this.defaultTabIndexes()},methods:{defaultTabIndexes(){let e=N.find(this.$refs.container,".p-button"),t=N.findSingle(this.$refs.container,".p-highlight");for(let n=0;n<e.length;n++)(N.hasClass(e[n],"p-highlight")&&z.equals(e[n],t)||t===null&&n==0)&&(this.focusedIndex=n)},getOptionLabel(e){return this.optionLabel?z.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?z.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?z.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?z.resolveFieldData(e,this.optionDisabled):!1},onOptionSelect(e,t,n){if(this.disabled||this.isOptionDisabled(t))return;let r=this.isSelected(t);if(r&&!this.unselectable)return;let i=this.getOptionValue(t),o;this.multiple?r?o=this.modelValue.filter(s=>!z.equals(s,i,this.equalityKey)):o=this.modelValue?[...this.modelValue,i]:[i]:o=r?null:i,this.focusedIndex=n,this.$emit("update:modelValue",o),this.$emit("change",{event:e,value:o})},isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.modelValue){for(let r of this.modelValue)if(z.equals(r,n,this.equalityKey)){t=!0;break}}}else t=z.equals(this.modelValue,n,this.equalityKey);return t},onKeydown(e,t,n){switch(e.code){case"Space":{this.onOptionSelect(e,t,n),e.preventDefault();break}case"ArrowDown":case"ArrowRight":{this.changeTabIndexes(e,"next"),e.preventDefault();break}case"ArrowUp":case"ArrowLeft":{this.changeTabIndexes(e,"prev"),e.preventDefault();break}}},changeTabIndexes(e,t){let n,r;for(let i=0;i<=this.$refs.container.children.length-1;i++)this.$refs.container.children[i].getAttribute("tabindex")==="0"&&(n={elem:this.$refs.container.children[i],index:i});t==="prev"?n.index===0?r=this.$refs.container.children.length-1:r=n.index-1:n.index===this.$refs.container.children.length-1?r=0:r=n.index+1,this.focusedIndex=r,this.$refs.container.children[r].focus()},onFocus(e){this.$emit("focus",e)},onBlur(e,t){e.target&&e.relatedTarget&&e.target.parentElement!==e.relatedTarget.parentElement&&this.defaultTabIndexes(),this.$emit("blur",e,t)},getButtonClass(e){return["p-button p-component",{"p-highlight":this.isSelected(e),"p-disabled":this.isOptionDisabled(e)}]}},computed:{containerClass(){return["p-selectbutton p-buttonset p-component",{"p-disabled":this.disabled}]},equalityKey(){return this.optionValue?null:this.dataKey}},directives:{ripple:Ti}};const Fp=["aria-labelledby"],Mp=["tabindex","aria-label","role","aria-checked","aria-disabled","onClick","onKeydown","onBlur"],Vp={class:"p-button-label"};function Bp(e,t,n,r,i,o){const s=Vr("ripple");return R(),k("div",{ref:"container",class:H(o.containerClass),role:"group","aria-labelledby":e.ariaLabelledby},[(R(!0),k(ht,null,fn(n.options,(a,l)=>Br((R(),k("div",{key:o.getOptionRenderKey(a),tabindex:l===i.focusedIndex?"0":"-1","aria-label":o.getOptionLabel(a),role:n.multiple?"checkbox":"radio","aria-checked":o.isSelected(a),"aria-disabled":n.optionDisabled,class:H(o.getButtonClass(a,l)),onClick:u=>o.onOptionSelect(u,a,l),onKeydown:u=>o.onKeydown(u,a,l),onFocus:t[0]||(t[0]=u=>o.onFocus(u)),onBlur:u=>o.onBlur(u,a)},[K(e.$slots,"option",{option:a,index:l},()=>[b("span",Vp,be(o.getOptionLabel(a)),1)])],42,Mp)),[[s]])),128))],10,Fp)}Pa.render=Bp;var La={name:"RadioButton",emits:["click","update:modelValue","change","focus","blur"],props:{value:null,modelValue:null,name:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{focused:!1}},methods:{onClick(e){this.disabled||(this.$emit("click",e),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",e))},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)}},computed:{checked(){return this.modelValue!=null&&z.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.disabled,"p-radiobutton-focused":this.focused}]}}};const $p={class:"p-hidden-accessible"},Up=["id","name","checked","disabled","value","aria-labelledby","aria-label"],Wp=b("div",{class:"p-radiobutton-icon"},null,-1),zp=[Wp];function Hp(e,t,n,r,i,o){return R(),k("div",{class:H(o.containerClass),onClick:t[2]||(t[2]=s=>o.onClick(s))},[b("div",$p,[b("input",Qe({ref:"input",id:n.inputId,type:"radio",class:n.inputClass,style:n.inputStyle,name:n.name,checked:o.checked,disabled:n.disabled,value:n.value,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=(...s)=>o.onFocus&&o.onFocus(...s)),onBlur:t[1]||(t[1]=(...s)=>o.onBlur&&o.onBlur(...s))},n.inputProps),null,16,Up)]),b("div",{ref:"box",class:H(["p-radiobutton-box",{"p-highlight":o.checked,"p-disabled":n.disabled,"p-focus":i.focused}])},zp,2)],2)}La.render=Hp;var Da={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:Ti}};const Gp=["aria-label","disabled"],jp={class:"p-button-label"};function Kp(e,t,n,r,i,o){const s=Vr("ripple");return Br((R(),k("button",{class:H(o.buttonClass),type:"button","aria-label":o.defaultAriaLabel,disabled:o.disabled},[K(e.$slots,"default",{},()=>[n.loading&&!n.icon?(R(),k("span",{key:0,class:H(o.iconStyleClass)},null,2)):Ce("",!0),n.icon?(R(),k("span",{key:1,class:H(o.iconStyleClass)},null,2)):Ce("",!0),b("span",jp,be(n.label||"\xA0"),1),n.badge?(R(),k("span",{key:2,class:H(o.badgeStyleClass)},be(n.badge),3)):Ce("",!0)])],10,Gp)),[[s]])}Da.render=Kp;const Qp={name:"Form",components:{Dropdown:ka,SelectButton:Pa,RadioButton:La,Button:Da},setup:()=>({v$:wl()}),data(){return{uid:"",device:"",devices:[{label:"Mouse",value:"Mouse"},{label:"Touchscreen",value:"Touchscreen"},{label:"Pen",value:"Pen"},{label:"Trackpad",value:"Trackpad"},{label:"Other",value:"Other"}],concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],age_group:"",dyslexia:"",dyscalculia:"",submitted:!1}},validations(){return{device:{required:Rt},concentration:{required:Rt},age_group:{required:Rt},dyslexia:{required:Rt},dyscalculia:{required:Rt}}},created(){this.uid=op.v4()},methods:{handleSubmit(e){if(this.submitted=!0,e)this.storeData(),this.$router.push("about");else return},storeData(){const e=Po();e.uid=this.uid,e.device=this.device,e.concentration=this.concentration.value,e.age_group=Number(this.age_group),e.dyslexia=this.dyslexia=="Yes",e.dyscalculia=this.dyscalculia=="Yes",Bh()}}},Yp={class:"main-wrapper"},qp=b("h1",{class:"page-title"},"Human Cognition Study",-1),Xp=b("p",{class:"subtitle"},"Please fill out the form to begin with the study",-1),Jp={class:"form-field-content-wrapper"},Zp=b("p",{class:"form-field-text"},"What is your method of input?",-1),ev={class:"form-field-content-wrapper"},tv=b("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applies to you:",-1),nv=b("p",{class:"form-field-quote"},'"I am in a calm environment with enough light and I am able to concentrate."',-1),rv={class:"form-field-content-wrapper"},iv=b("p",{class:"form-field-radiobutton-text"},"Please select your age group:",-1),ov={class:"form-field-radiobutton-wrapper"},sv=b("label",{class:"radiobutton-text",for:"group1"},"18 - 35",-1),av={class:"form-field-radiobutton-wrapper"},lv=b("label",{class:"radiobutton-text",for:"group2"},"35 - 55",-1),uv={class:"form-field-radiobutton-wrapper"},cv=b("label",{class:"radiobutton-text",for:"group3"},"55+",-1),fv={class:"form-field-content-wrapper"},dv=b("p",{class:"form-field-radiobutton-text"},"Do you have dyslexia or any other reading disability?",-1),hv={class:"form-field-radiobutton-wrapper"},pv=b("label",{class:"radiobutton-text",for:"yes1"},"Yes",-1),vv={class:"form-field-radiobutton-wrapper"},_v=b("label",{class:"radiobutton-text",for:"no1"},"No",-1),mv={class:"form-field-content-wrapper"},gv=b("p",{class:"form-field-radiobutton-text"},"Do you have dyscalculia?",-1),yv={class:"form-field-radiobutton-wrapper"},bv=b("label",{class:"radiobutton-text",for:"yes2"},"Yes",-1),wv={class:"form-field-radiobutton-wrapper"},Cv=b("label",{class:"radiobutton-text",for:"no2"},"No",-1),Ev={class:"form-button-wrapper"};function Iv(e,t,n,r,i,o){const s=dt("Dropdown"),a=dt("SelectButton"),l=dt("RadioButton"),u=dt("Button");return R(),k("main",Yp,[qp,Xp,b("form",{class:"form-wrapper",onSubmit:t[9]||(t[9]=il(c=>o.handleSubmit(!e.v$.$invalid),["prevent"]))},[b("div",{class:H(["form-field",{"p-error":e.v$.device.$invalid&&i.submitted}])},[b("div",Jp,[Zp,ue(s,{class:"form-dropdown",modelValue:e.v$.device.$model,"onUpdate:modelValue":t[0]||(t[0]=c=>e.v$.device.$model=c),options:i.devices,optionLabel:"label",optionValue:"value",autoWidth:"false",placeholder:"Select an input"},null,8,["modelValue","options"])])],2),b("div",{class:H(["form-field",{"p-error":e.v$.concentration.$invalid&&i.submitted}])},[b("div",ev,[tv,nv,ue(a,{class:"form-selectbutton",modelValue:e.v$.concentration.$model,"onUpdate:modelValue":t[1]||(t[1]=c=>e.v$.concentration.$model=c),options:i.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),b("div",{class:H(["form-field",{"p-error":e.v$.age_group.$invalid&&i.submitted}])},[b("div",rv,[iv,b("div",ov,[ue(l,{class:"form-radiobutton",inputId:"group1",name:"age_group",value:"1",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[2]||(t[2]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),sv]),b("div",av,[ue(l,{class:"form-radiobutton",inputId:"group2",name:"age_group",value:"2",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[3]||(t[3]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),lv]),b("div",uv,[ue(l,{class:"form-radiobutton",inputId:"group3",name:"age_group",value:"3",modelValue:e.v$.age_group.$model,"onUpdate:modelValue":t[4]||(t[4]=c=>e.v$.age_group.$model=c)},null,8,["modelValue"]),cv])])],2),b("div",{class:H(["form-field",{"p-error":e.v$.dyslexia.$invalid&&i.submitted}])},[b("div",fv,[dv,b("div",hv,[ue(l,{class:"form-radiobutton",inputId:"yes1",name:"dyslexia",value:"Yes",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[5]||(t[5]=c=>e.v$.dyslexia.$model=c)},null,8,["modelValue"]),pv]),b("div",vv,[ue(l,{class:"form-radiobutton",inputId:"no1",name:"dyslexia",value:"No",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[6]||(t[6]=c=>e.v$.dyslexia.$model=c)},null,8,["modelValue"]),_v])])],2),b("div",{class:H(["form-field",{"p-error":e.v$.dyscalculia.$invalid&&i.submitted}])},[b("div",mv,[gv,b("div",yv,[ue(l,{class:"form-radiobutton",inputId:"yes2",name:"dyscalculia",value:"Yes",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[7]||(t[7]=c=>e.v$.dyscalculia.$model=c)},null,8,["modelValue"]),bv]),b("div",wv,[ue(l,{class:"form-radiobutton",inputId:"no2",name:"dyscalculia",value:"No",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[8]||(t[8]=c=>e.v$.dyscalculia.$model=c)},null,8,["modelValue"]),Cv])])],2),b("div",Ev,[ue(u,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const Ov=ol(Qp,[["render",Iv]]);export{Ov as default};
