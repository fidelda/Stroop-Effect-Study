import{g as Es,r as j,b as Cs,w as Nt,i as Zn,d as wr,e as bs,f as k,h as ws,j as Is,p as fi,u as R,k as hi,n as di,l as Ss,_ as Ts,m as gt,o as Rs,c as Ns,a as T,q as As,s as F,t as _e,v as Os,x as Ps,y as xs,z as lo}from"./index.386e255b.js";function pi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,r)=>(t.includes(r)||(n[r]=R(e[r])),n),{})}function Jt(e){return typeof e=="function"}function ks(e){return ws(e)||Is(e)}function co(e,t,n){let r=e;const i=t.split(".");for(let o=0;o<i.length;o++){if(!r[i[o]])return n;r=r[i[o]]}return r}function Vn(e,t,n){return k(()=>e.some(r=>co(t,r,{[n]:!1})[n]))}function vi(e,t,n){return k(()=>e.reduce((r,i)=>{const o=co(t,i,{[n]:!1})[n]||[];return r.concat(o)},[]))}function fo(e,t,n,r){return e.call(r,R(t),R(n),r)}function ho(e){return e.$valid!==void 0?!e.$valid:!e}function Ds(e,t,n,r,i,o,a){let{$lazy:s,$rewardEarly:u}=i,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const d=j(!!r.value),p=j(0);n.value=!1;const _=Nt([t,r].concat(l,h),()=>{if(s&&!r.value||u&&!f.value&&!n.value)return;let v;try{v=fo(e,t,c,a)}catch(y){v=Promise.reject(y)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(v).then(y=>{p.value--,n.value=!!p.value,o.value=y,d.value=ho(y)}).catch(y=>{p.value--,n.value=!!p.value,o.value=y,d.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:d,$unwatch:_}}function Ls(e,t,n,r,i,o,a,s){let{$lazy:u,$rewardEarly:l}=r;const c=()=>({}),f=k(()=>{if(u&&!n.value||l&&!s.value)return!1;let h=!0;try{const d=fo(e,t,a,o);i.value=d,h=ho(d)}catch(d){i.value=d}return h});return{$unwatch:c,$invalid:f}}function Ms(e,t,n,r,i,o,a,s,u,l,c){const f=j(!1),h=e.$params||{},d=j(null);let p,_;e.$async?{$invalid:p,$unwatch:_}=Ds(e.$validator,t,f,n,r,d,i,e.$watchTargets,u,l,c):{$invalid:p,$unwatch:_}=Ls(e.$validator,t,n,r,d,i,u,l);const v=e.$message;return{$message:Jt(v)?k(()=>v(pi({$pending:f,$invalid:p,$params:pi(h),$model:t,$response:d,$validator:o,$propertyPath:s,$property:a}))):v||"",$params:h,$pending:f,$invalid:p,$response:d,$unwatch:_}}function Fs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=R(e),n=Object.keys(t),r={},i={},o={};let a=null;return n.forEach(s=>{const u=t[s];switch(!0){case Jt(u.$validator):r[s]=u;break;case Jt(u):r[s]={$validator:u};break;case s==="$validationGroups":a=u;break;case s.startsWith("$"):o[s]=u;break;default:i[s]=u}}),{rules:r,nestedValidators:i,config:o,validationGroups:a}}function $s(){}const Vs="__root";function po(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(i){return Promise.reject(i)}}function Ws(e,t){return po(e,$s,t)}function Us(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function Bs(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function Gs(e,t,n,r,i,o,a,s,u){const l=Object.keys(e),c=r.get(i,e),f=j(!1),h=j(!1),d=j(0);if(c){if(!c.$partial)return c;c.$unwatch(),f.value=c.$dirty.value}const p={$dirty:f,$path:i,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return l.length?(l.forEach(_=>{p[_]=Ms(e[_],t,p.$dirty,o,a,_,n,i,u,h,d)}),p.$externalResults=k(()=>s.value?[].concat(s.value).map((_,v)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${v}`,$message:_,$params:{},$response:null,$pending:!1})):[]),p.$invalid=k(()=>{const _=l.some(v=>R(p[v].$invalid));return h.value=_,!!p.$externalResults.value.length||_}),p.$pending=k(()=>l.some(_=>R(p[_].$pending))),p.$error=k(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=k(()=>l.filter(_=>R(p[_].$invalid)).map(_=>{const v=p[_];return wr({$propertyPath:i,$property:n,$validator:_,$uid:`${i}-${_}`,$message:v.$message,$params:v.$params,$response:v.$response,$pending:v.$pending})}).concat(p.$externalResults.value)),p.$errors=k(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>l.forEach(_=>{p[_].$unwatch()}),p.$commit=()=>{h.value=!0,d.value=Date.now()},r.set(i,e,p),p):(c&&r.set(i,e,p),p)}function js(e,t,n,r,i,o,a){const s=Object.keys(e);return s.length?s.reduce((u,l)=>(u[l]=er({validations:e[l],state:t,key:l,parentKey:n,resultsCache:r,globalConfig:i,instance:o,externalResults:a}),u),{}):{}}function Hs(e,t,n){const r=k(()=>[t,n].filter(p=>p).reduce((p,_)=>p.concat(Object.values(R(_))),[])),i=k({get(){return e.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){e.$dirty.value=p}}),o=k(()=>{const p=R(e.$silentErrors)||[],_=r.value.filter(v=>(R(v).$silentErrors||[]).length).reduce((v,y)=>v.concat(...y.$silentErrors),[]);return p.concat(_)}),a=k(()=>{const p=R(e.$errors)||[],_=r.value.filter(v=>(R(v).$errors||[]).length).reduce((v,y)=>v.concat(...y.$errors),[]);return p.concat(_)}),s=k(()=>r.value.some(p=>p.$invalid)||R(e.$invalid)||!1),u=k(()=>r.value.some(p=>R(p.$pending))||R(e.$pending)||!1),l=k(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||i.value),c=k(()=>i.value?u.value||s.value:!1),f=()=>{e.$touch(),r.value.forEach(p=>{p.$touch()})},h=()=>{e.$commit(),r.value.forEach(p=>{p.$commit()})},d=()=>{e.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&f(),{$dirty:i,$errors:a,$invalid:s,$anyDirty:l,$error:c,$pending:u,$touch:f,$reset:d,$silentErrors:o,$commit:h}}function er(e){const t=Bs(function(){return $n(),Us(function(){if(v.$rewardEarly)return ci(),Ws(di)},function(){return po(di,function(){return new Promise($=>{if(!Fn.value)return $(!Mn.value);const Ve=Nt(Fn,()=>{$(!Mn.value),Ve()})})})})});let{validations:n,state:r,key:i,parentKey:o,childResults:a,resultsCache:s,globalConfig:u={},instance:l,externalResults:c}=e;const f=o?`${o}.${i}`:i,{rules:h,nestedValidators:d,config:p,validationGroups:_}=Fs(n),v=Object.assign({},u,p),y=i?k(()=>{const $=R(r);return $?R($[i]):void 0}):r,C=Object.assign({},R(c)||{}),A=k(()=>{const $=R(c);return i?$?R($[i]):void 0:$}),Z=Gs(h,y,i,s,f,v,l,A,r),ee=js(d,y,f,s,v,l,A),Se={};_&&Object.entries(_).forEach($=>{let[Ve,Te]=$;Se[Ve]={$invalid:Vn(Te,ee,"$invalid"),$error:Vn(Te,ee,"$error"),$pending:Vn(Te,ee,"$pending"),$errors:vi(Te,ee,"$errors"),$silentErrors:vi(Te,ee,"$silentErrors")}});const{$dirty:_t,$errors:hs,$invalid:Mn,$anyDirty:ds,$error:ps,$pending:Fn,$touch:$n,$reset:vs,$silentErrors:_s,$commit:ci}=Hs(Z,ee,a),gs=i?k({get:()=>R(y),set:$=>{_t.value=!0;const Ve=R(r),Te=R(c);Te&&(Te[i]=C[i]),Zn(Ve[i])?Ve[i].value=$:Ve[i]=$}}):null;i&&v.$autoDirty&&Nt(y,()=>{_t.value||$n();const $=R(c);$&&($[i]=C[i])},{flush:"sync"});function ys($){return(a.value||{})[$]}function ms(){Zn(c)?c.value=C:Object.keys(C).length===0?Object.keys(c).forEach($=>{delete c[$]}):Object.assign(c,C)}return wr(Object.assign({},Z,{$model:gs,$dirty:_t,$error:ps,$errors:hs,$invalid:Mn,$anyDirty:ds,$pending:Fn,$touch:$n,$reset:vs,$path:f||Vs,$silentErrors:_s,$validate:t,$commit:ci},a&&{$getResultsForChild:ys,$clearExternalResults:ms,$validationGroups:Se},ee))}class zs{constructor(){this.storage=new Map}set(t,n,r){this.storage.set(t,{rules:n,result:r})}checkRulesValidity(t,n,r){const i=Object.keys(r),o=Object.keys(n);return o.length!==i.length||!o.every(s=>i.includes(s))?!1:o.every(s=>n[s].$params?Object.keys(n[s].$params).every(u=>R(r[s].$params[u])===R(n[s].$params[u])):!0)}get(t,n){const r=this.storage.get(t);if(!r)return;const{rules:i,result:o}=r,a=this.checkRulesValidity(t,n,i),s=o.$unwatch?o.$unwatch:()=>({});return a?o:{$dirty:o.$dirty,$partial:!0,$unwatch:s}}}const Kt={COLLECT_ALL:!0,COLLECT_NONE:!1},_i=Symbol("vuelidate#injectChildResults"),gi=Symbol("vuelidate#removeChildResults");function Qs(e){let{$scope:t,instance:n}=e;const r={},i=j([]),o=k(()=>i.value.reduce((c,f)=>(c[f]=R(r[f]),c),{}));function a(c,f){let{$registerAs:h,$scope:d,$stopPropagation:p}=f;p||t===Kt.COLLECT_NONE||d===Kt.COLLECT_NONE||t!==Kt.COLLECT_ALL&&t!==d||(r[h]=c,i.value.push(h))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],a);function s(c){i.value=i.value.filter(f=>f!==c),delete r[c]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],s);const u=hi(_i,[]);fi(_i,n.__vuelidateInjectInstances);const l=hi(gi,[]);return fi(gi,n.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:u,removeValidationResultsFromParent:l}}function vo(e){return new Proxy(e,{get(t,n){return typeof t[n]=="object"?vo(t[n]):k(()=>t[n])}})}let yi=0;function Ys(e,t){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=e,e=void 0,t=void 0);let{$registerAs:i,$scope:o=Kt.COLLECT_ALL,$stopPropagation:a,$externalResults:s,currentVueInstance:u}=r;const l=u||((n=Es())===null||n===void 0?void 0:n.proxy),c=l?l.$options:{};i||(yi+=1,i=`_vuelidate_${yi}`);const f=j({}),h=new zs,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:_}=l?Qs({$scope:o,instance:l}):{childResults:j({})};if(!e&&c.validations){const v=c.validations;t=j({}),Cs(()=>{t.value=l,Nt(()=>Jt(v)?v.call(t.value,new vo(t.value)):v,y=>{f.value=er({validations:y,state:t,childResults:d,resultsCache:h,globalConfig:r,instance:l,externalResults:s||l.vuelidateExternalResults})},{immediate:!0})}),r=c.validationsConfig||r}else{const v=Zn(e)||ks(e)?e:wr(e||{});Nt(v,y=>{f.value=er({validations:y,state:t,childResults:d,resultsCache:h,globalConfig:r,instance:l!=null?l:{},externalResults:s})},{immediate:!0})}return l&&(p.forEach(v=>v(f,{$registerAs:i,$scope:o,$stopPropagation:a})),bs(()=>_.forEach(v=>v(i)))),k(()=>Object.assign({},R(f.value),d.value))}const _o=e=>{if(e=R(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length};function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=>(r=R(r),!_o(r)||t.every(i=>i.test(r)))}Xe(/^[a-zA-Z]*$/);Xe(/^[a-zA-Z0-9]*$/);Xe(/^\d*(\.\d+)?$/);const qs=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;Xe(qs);function Ks(e){return typeof e=="string"&&(e=e.trim()),_o(e)}var tt={$validator:Ks,$message:"Value is required",$params:{type:"required"}};const Xs=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;Xe(Xs);Xe(/(^[0-9]*$)|(^-[0-9]+$)/);Xe(/^[-]?\d*(\.\d+)?$/);const go=Ss("datastore",()=>({uid:j(),device:j(),concentration:j(),ageGroup:j(),dyslexia:j(),dyscalculia:j()}));var tr=function(e,t){return tr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},tr(e,t)};function M(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");tr(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function yo(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(c){try{l(r.next(c))}catch(f){a(f)}}function u(c){try{l(r.throw(c))}catch(f){a(f)}}function l(c){c.done?o(c.value):i(c.value).then(s,u)}l((r=r.apply(e,t||[])).next())})}function mo(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function re(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function X(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function ke(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g=function(e,t){if(!e)throw ft(t)},ft=function(e){return new Error("Firebase Database ("+Eo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Co=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Js=function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=e[n++],a=e[n++],s=e[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{var o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,l=u?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4,h=(s&15)<<2|l>>6,d=l&63;u||(d=64,a||(h=64)),r.push(n[c],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Co(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Js(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length,s=a?n[e.charAt(i)]:0;++i;var u=i<e.length,l=u?n[e.charAt(i)]:64;++i;var c=i<e.length,f=c?n[e.charAt(i)]:64;if(++i,o==null||s==null||l==null||f==null)throw Error();var h=o<<2|s>>4;if(r.push(h),l!==64){var d=s<<4&240|l>>2;if(r.push(d),f!==64){var p=l<<6&192|f;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},bo=function(e){var t=Co(e);return Ir.encodeByteArray(t,!0)},mi=function(e){return bo(e).replace(/\./g,"")},Ei=function(e){try{return Ir.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return At(void 0,e)}function At(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)!t.hasOwnProperty(r)||!Zs(r)||(e[r]=At(e[r],t[r]));return e}function Zs(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te=function(){function e(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){t.resolve=n,t.reject=r})}return e.prototype.wrapCallback=function(t){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof t=="function"&&(n.promise.catch(function(){}),t.length===1?t(r):t(r,i))}},e}();/**
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
 */function eu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=xe({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[mi(JSON.stringify(n)),mi(JSON.stringify(a)),s].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Io(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tu())}function nu(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ru(){return typeof self=="object"&&self.self===self}function iu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function So(){return Eo.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ou="FirebaseError",au=function(e){M(t,e);function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=ou,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Sr.prototype.create),o}return t}(Error),Sr=function(){function e(t,n,r){this.service=t,this.serviceName=n,this.errors=r}return e.prototype.create=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+t,a=this.errors[t],s=a?su(a,i):"Error",u=this.serviceName+": "+s+" ("+o+").",l=new au(o,u,i);return l},e}();function su(e,t){return e.replace(uu,function(n,r){var i=t[r];return i!=null?String(i):"<"+r+"?>"})}var uu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var To=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Ot(Ei(o[0])||""),n=Ot(Ei(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},lu=function(e){var t=To(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cu=function(e){var t=To(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ye(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function nr(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zt(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e){for(var t=[],n=function(u,l){Array.isArray(l)?l.forEach(function(c){t.push(encodeURIComponent(u)+"="+encodeURIComponent(c))}):t.push(encodeURIComponent(u)+"="+encodeURIComponent(l))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],a=o[0],s=o[1];n(a,s)}return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hu=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(t,n){n||(n=0);var r=this.W_;if(typeof t=="string")for(var i=0;i<16;i++)r[i]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(var i=0;i<16;i++)r[i]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(var i=16;i<80;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=(o<<1|o>>>31)&4294967295}for(var a=this.chain_[0],s=this.chain_[1],u=this.chain_[2],l=this.chain_[3],c=this.chain_[4],f,h,i=0;i<80;i++){i<40?i<20?(f=l^s&(u^l),h=1518500249):(f=s^u^l,h=1859775393):i<60?(f=s&u|l&(s|u),h=2400959708):(f=s^u^l,h=3395469782);var o=(a<<5|a>>>27)+f+c+h+r[i]&4294967295;c=l,l=u,u=(s<<30|s>>>2)&4294967295,s=a,a=o}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},e.prototype.update=function(t,n){if(t!=null){n===void 0&&(n=t.length);for(var r=n-this.blockSize,i=0,o=this.buf_,a=this.inbuf_;i<n;){if(a===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[a]=t.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}else for(;i<n;)if(o[a]=t[i],++a,++i,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=n}},e.prototype.digest=function(){var t=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);for(var i=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[i]=this.chain_[r]>>o&255,++i;return t},e}();function du(e,t){var n=new pu(e,t);return n.subscribe.bind(n)}var pu=function(){function e(t,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(r)}).catch(function(i){r.error(i)})}return e.prototype.next=function(t){this.forEachObserver(function(n){n.next(t)})},e.prototype.error=function(t){this.forEachObserver(function(n){n.error(t)}),this.close(t)},e.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},e.prototype.subscribe=function(t,n,r){var i=this,o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vu(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=Wn),o.error===void 0&&(o.error=Wn),o.complete===void 0&&(o.complete=Wn);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),a},e.prototype.unsubscribeOne=function(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},e.prototype.forEachObserver=function(t){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,t)},e.prototype.sendOne=function(t,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[t]!==void 0)try{n(r.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},e.prototype.close=function(t){var n=this;this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},e}();function vu(e,t){if(typeof e!="object"||e===null)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&typeof e[i]=="function")return!0}return!1}function Wn(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(e,t,n,r){var i;if(r<t?i="at least "+t:r>n&&(i=n===0?"none":"no more than "+n),i){var o=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function ne(e,t){return e+" failed: "+t+" argument "}function U(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(ne(e,t)+"must be a valid function.")}function Ci(e,t,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(ne(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _u=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,g(r<e.length,"Surrogate pair missing trail surrogate.");var a=e.charCodeAt(r)-56320;i=65536+(o<<10)+a}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vn=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function ae(e){return e&&e._delegate?e._delegate:e}var Mt=function(){function e(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var Ue="[DEFAULT]";/**
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
 */var Ro=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var r=new te;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,r;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(yu(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}try{for(var i=re(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=X(o.value,2),s=a[0],u=a[1],l=this.normalizeInstanceIdentifier(s);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(f){n={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=Ue),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return yo(this,void 0,void 0,function(){var t;return mo(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(ke(ke([],X(t.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),X(t.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=Ue),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=Ue),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,r;t===void 0&&(t={});var i=t.options,o=i===void 0?{}:i,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=re(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=X(l.value,2),f=c[0],h=c[1],d=this.normalizeInstanceIdentifier(f);a===d&&h.resolve(s)}}catch(p){n={error:p}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return s},e.prototype.onInit=function(t,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);var a=this.instances.get(i);return a&&t(a,i),function(){o.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var r,i,o=this.onInitCallbacks.get(n);if(!!o)try{for(var a=re(o),s=a.next();!s.done;s=a.next()){var u=s.value;try{u(t,n)}catch{}}}catch(l){r={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,r=t.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:gu(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=Ue),this.component?this.component.multipleInstances?t:Ue:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function gu(e){return e===Ue?void 0:e}function yu(e){return e.instantiationMode==="EAGER"}/**
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
 */var No=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new Ro(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/*! *****************************************************************************
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
***************************************************************************** */function he(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Tr=[],O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));var Ao={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},mu=O.INFO,Eu=(We={},We[O.DEBUG]="log",We[O.VERBOSE]="log",We[O.INFO]="info",We[O.WARN]="warn",We[O.ERROR]="error",We),Cu=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=new Date().toISOString(),o=Eu[t];if(o)console[o].apply(console,he(["["+i+"]  "+e.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}},Oo=function(){function e(t){this.name=t,this._logLevel=mu,this._logHandler=Cu,this._userLogHandler=null,Tr.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in O))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(t){this._logLevel=typeof t=="string"?Ao[t]:t},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,he([this,O.DEBUG],t)),this._logHandler.apply(this,he([this,O.DEBUG],t))},e.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,he([this,O.VERBOSE],t)),this._logHandler.apply(this,he([this,O.VERBOSE],t))},e.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,he([this,O.INFO],t)),this._logHandler.apply(this,he([this,O.INFO],t))},e.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,he([this,O.WARN],t)),this._logHandler.apply(this,he([this,O.WARN],t))},e.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,he([this,O.ERROR],t)),this._logHandler.apply(this,he([this,O.ERROR],t))},e}();function bu(e){Tr.forEach(function(t){t.setLogLevel(e)})}function wu(e,t){for(var n=function(a){var s=null;t&&t.level&&(s=Ao[t.level]),e===null?a.userLogHandler=null:a.userLogHandler=function(u,l){for(var c=[],f=2;f<arguments.length;f++)c[f-2]=arguments[f];var h=c.map(function(d){if(d==null)return null;if(typeof d=="string")return d;if(typeof d=="number"||typeof d=="boolean")return d.toString();if(d instanceof Error)return d.message;try{return JSON.stringify(d)}catch{return null}}).filter(function(d){return d}).join(" ");l>=(s!=null?s:u.logLevel)&&e({level:O[l].toLowerCase(),message:h,args:c,type:u.name})}},r=0,i=Tr;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */var Re,Iu=(Re={},Re["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",Re["bad-app-name"]="Illegal App name: '{$appName}",Re["duplicate-app"]="Firebase App named '{$appName}' already exists",Re["app-deleted"]="Firebase App named '{$appName}' already deleted",Re["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Re["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Re),rt=new Sr("app","Firebase",Iu),Po="@firebase/app",Su="0.6.30",Tu="@firebase/analytics",Ru="@firebase/app-check",Nu="@firebase/auth",Au="@firebase/database",Ou="@firebase/functions",Pu="@firebase/installations",xu="@firebase/messaging",ku="@firebase/performance",Du="@firebase/remote-config",Lu="@firebase/storage",Mu="@firebase/firestore",Fu="firebase-wrapper";/**
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
 */var z,en="[DEFAULT]",$u=(z={},z[Po]="fire-core",z[Tu]="fire-analytics",z[Ru]="fire-app-check",z[Nu]="fire-auth",z[Au]="fire-rtdb",z[Ou]="fire-fn",z[Pu]="fire-iid",z[xu]="fire-fcm",z[ku]="fire-perf",z[Du]="fire-rc",z[Lu]="fire-gcs",z[Mu]="fire-fst",z["fire-js"]="fire-js",z[Fu]="fire-js-all",z);/**
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
 */var ot=new Oo("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt=function(){function e(t,n,r){var i=this;this.firebase_=r,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=wo(t),this.container=new No(n.name),this._addComponent(new Mt("app",function(){return i},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return i._addComponent(o)})}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var t=this;return new Promise(function(n){t.checkDestroyed_(),n()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(n){return n.delete()}))}).then(function(){t.isDeleted_=!0})},e.prototype._getService=function(t,n){var r;n===void 0&&(n=en),this.checkDestroyed_();var i=this.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})},e.prototype._removeServiceInstance=function(t,n){n===void 0&&(n=en),this.container.getProvider(t).clearInstance(n)},e.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(n){ot.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,n)}},e.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw rt.create("app-deleted",{appName:this.name_})},e}();Xt.prototype.name&&Xt.prototype.options||Xt.prototype.delete||console.log("dc");var Vu="8.10.0";/**
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
 */function Wu(e){var t={},n=new Map,r={__esModule:!0,initializeApp:a,app:o,registerVersion:l,setLogLevel:bu,onLog:c,apps:null,SDK_VERSION:Vu,INTERNAL:{registerComponent:u,removeApp:i,components:n,useAsService:f}};r.default=r,Object.defineProperty(r,"apps",{get:s});function i(h){delete t[h]}function o(h){if(h=h||en,!ie(t,h))throw rt.create("no-app",{appName:h});return t[h]}o.App=e;function a(h,d){if(d===void 0&&(d={}),typeof d!="object"||d===null){var p=d;d={name:p}}var _=d;_.name===void 0&&(_.name=en);var v=_.name;if(typeof v!="string"||!v)throw rt.create("bad-app-name",{appName:String(v)});if(ie(t,v))throw rt.create("duplicate-app",{appName:v});var y=new e(h,_,r);return t[v]=y,y}function s(){return Object.keys(t).map(function(h){return t[h]})}function u(h){var d=h.name;if(n.has(d))return ot.debug("There were multiple attempts to register component "+d+"."),h.type==="PUBLIC"?r[d]:null;if(n.set(d,h),h.type==="PUBLIC"){var p=function(C){if(C===void 0&&(C=o()),typeof C[d]!="function")throw rt.create("invalid-app-argument",{appName:d});return C[d]()};h.serviceProps!==void 0&&At(p,h.serviceProps),r[d]=p,e.prototype[d]=function(){for(var C=[],A=0;A<arguments.length;A++)C[A]=arguments[A];var Z=this._getService.bind(this,d);return Z.apply(this,h.multipleInstances?C:[])}}for(var _=0,v=Object.keys(t);_<v.length;_++){var y=v[_];t[y]._addComponent(h)}return h.type==="PUBLIC"?r[d]:null}function l(h,d,p){var _,v=(_=$u[h])!==null&&_!==void 0?_:h;p&&(v+="-"+p);var y=v.match(/\s|\//),C=d.match(/\s|\//);if(y||C){var A=['Unable to register library "'+v+'" with version "'+d+'":'];y&&A.push('library name "'+v+'" contains illegal characters (whitespace or "/")'),y&&C&&A.push("and"),C&&A.push('version name "'+d+'" contains illegal characters (whitespace or "/")'),ot.warn(A.join(" "));return}u(new Mt(v+"-version",function(){return{library:v,version:d}},"VERSION"))}function c(h,d){if(h!==null&&typeof h!="function")throw rt.create("invalid-log-argument");wu(h,d)}function f(h,d){if(d==="serverAuth")return null;var p=d;return p}return r}/**
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
 */function xo(){var e=Wu(Xt);e.INTERNAL=xe(xe({},e.INTERNAL),{createFirebaseNamespace:xo,extendNamespace:t,createSubscribe:du,ErrorFactory:Sr,deepExtend:At});function t(n){At(e,n)}return e}var Rr=xo();/**
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
 */var Uu=function(){function e(t){this.container=t}return e.prototype.getPlatformInfoString=function(){var t=this.container.getProviders();return t.map(function(n){if(Bu(n)){var r=n.getImmediate();return r.library+"/"+r.version}else return null}).filter(function(n){return n}).join(" ")},e}();function Bu(e){var t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}/**
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
 */function Gu(e,t){e.INTERNAL.registerComponent(new Mt("platform-logger",function(n){return new Uu(n)},"PRIVATE")),e.registerVersion(Po,Su,t),e.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ru()&&self.firebase!==void 0){ot.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var bi=self.firebase.SDK_VERSION;bi&&bi.indexOf("LITE")>=0&&ot.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var ju=Rr.initializeApp;Rr.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nu()&&ot.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),ju.apply(void 0,e)};var Ft=Rr;Gu(Ft);var Hu="firebase",ko="8.10.1";/**
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
 */Ft.registerVersion(Hu,ko,"app");Ft.SDK_VERSION=ko;var zu="@firebase/database",Qu="0.11.0";/**
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
 */var Do="";function Lo(e){Do=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yu=function(){function e(t){this.domStorage_=t,this.prefix_="firebase:"}return e.prototype.set=function(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),V(n))},e.prototype.get=function(t){var n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ot(n)},e.prototype.remove=function(t){this.domStorage_.removeItem(this.prefixedName_(t))},e.prototype.prefixedName_=function(t){return this.prefix_+t},e.prototype.toString=function(){return this.domStorage_.toString()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qu=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}return e.prototype.set=function(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n},e.prototype.get=function(t){return ie(this.cache_,t)?this.cache_[t]:null},e.prototype.remove=function(t){delete this.cache_[t]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mo=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Yu(t)}}catch{}return new qu},je=Mo("localStorage"),rr=Mo("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it=new Oo("@firebase/database"),Fo=function(){var e=1;return function(){return e++}}(),$o=function(e){var t=_u(e),n=new hu;n.update(t);var r=n.digest();return Ir.encodeByteArray(r)},$t=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=$t.apply(null,i):typeof i=="object"?n+=V(i):n+=i,n+=" "}return n},ze=null,wi=!0,Vo=function(e,t){g(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(it.logLevel=O.VERBOSE,ze=it.log.bind(it),t&&rr.set("logging_enabled",!0)):typeof e=="function"?ze=e:(ze=null,rr.remove("logging_enabled"))},B=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(wi===!0&&(wi=!1,ze===null&&rr.get("logging_enabled")===!0&&Vo(!0)),ze){var n=$t.apply(null,e);ze(n)}},Vt=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];B.apply(void 0,ke([e],X(t)))}},ir=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+$t.apply(void 0,ke([],X(e)));it.error(n)},ye=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+$t.apply(void 0,ke([],X(e)));throw it.error(n),new Error(n)},H=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+$t.apply(void 0,ke([],X(e)));it.warn(n)},Ku=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&H("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_n=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Xu=function(e){if(document.readyState==="complete")e();else{var t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ie="[MIN_NAME]",me="[MAX_NAME]",Je=function(e,t){if(e===t)return 0;if(e===Ie||t===me)return-1;if(t===Ie||e===me)return 1;var n=tn(e),r=tn(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1},Ju=function(e,t){return e===t?0:e<t?-1:1},yt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+V(t))},Nr=function(e){if(typeof e!="object"||e===null)return V(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)i!==0&&(r+=","),r+=V(t[i]),r+=":",r+=Nr(e[t[i]]);return r+="}",r},Wo=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function W(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Uo=function(e){g(!_n(e),"Invalid JSON number");var t=11,n=52,r=(1<<t-1)-1,i,o,a,s,u;e===0?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=s+r,a=Math.round(e*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));var l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();var c=l.join(""),f="";for(u=0;u<64;u+=8){var h=parseInt(c.substr(u,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},Zu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},el=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tl(e,t){var n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}var nl=new RegExp("^-?(0*)\\d{1,10}$"),Bo=-2147483648,Ar=2147483647,tn=function(e){if(nl.test(e)){var t=Number(e);if(t>=Bo&&t<=Ar)return t}return null},ht=function(e){try{e()}catch(t){setTimeout(function(){var n=t.stack||"";throw H("Exception was thrown by user callback.",n),t},Math.floor(0))}},rl=function(){var e=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bt=function(e,t){var n=setTimeout(e,t);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */var il=function(){function e(t,n){var r=this;this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return e.prototype.getToken=function(t){var n=this;return this.appCheck?this.appCheck.getToken(t):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){H('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ol=function(){function e(t,n,r){var i=this;this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return e.prototype.getToken=function(t){var n=this;return this.auth_?this.auth_.getToken(t).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(t).then(r,i):r(null)},0)})},e.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(t)})},e.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(t)})},e.prototype.notifyForInvalidToken=function(){var t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',H(t)},e}(),wt=function(){function e(t){this.accessToken=t}return e.prototype.getToken=function(t){return Promise.resolve({accessToken:this.accessToken})},e.prototype.addTokenChangeListener=function(t){t(this.accessToken)},e.prototype.removeTokenChangeListener=function(t){},e.prototype.notifyForInvalidToken=function(){},e.OWNER="owner",e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or="5",Go="v",jo="s",Ho="r",zo="f",Qo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yo="ls",al="p",or="ac",qo="websocket",Ko="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr=function(){function e(t,n,r,i,o,a,s){o===void 0&&(o=!1),a===void 0&&(a=""),s===void 0&&(s=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=s,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=je.get("host:"+t)||this._host}return e.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},e.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&je.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),e.prototype.toString=function(){var t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t},e.prototype.toURLString=function(){var t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+t+this.host+"/"+n},e}();function sl(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Xo(e,t,n){g(typeof t=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");var r;if(t===qo)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Ko)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);sl(e)&&(n.ns=e.namespace);var i=[];return W(n,function(o,a){i.push(o+"="+a)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ul=function(){function e(){this.counters_={}}return e.prototype.incrementCounter=function(t,n){n===void 0&&(n=1),ie(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n},e.prototype.get=function(){return wo(this.counters_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un={},Bn={};function xr(e){var t=e.toString();return Un[t]||(Un[t]=new ul),Un[t]}function ll(e,t){var n=e.toString();return Bn[n]||(Bn[n]=t()),Bn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cl=function(){function e(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(t,n){var r=this;this.pendingResponses[t]=n;for(var i=function(){var s=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var u=function(c){s[c]&&ht(function(){r.onMessage_(s[c])})},l=0;l<s.length;++l)u(l);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var a=i();if(a==="break")break}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii="start",fl="close",hl="pLPCommand",dl="pRTLPCB",Jo="id",Zo="pw",ea="ser",pl="cb",vl="seg",_l="ts",gl="d",yl="dframe",ta=1870,na=30,ml=ta-na,El=25e3,Cl=3e4,kr=function(){function e(t,n,r,i,o,a,s){var u=this;this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=a,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vt(t),this.stats_=xr(n),this.urlFn=function(l){return u.appCheckToken&&(l[or]=u.appCheckToken),Xo(n,Ko,l)}}return e.prototype.open=function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cl(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(Cl)),Xu(function(){if(!r.isClosed_){r.scriptTagHolder=new bl(function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=X(a,5),l=u[0],c=u[1],f=u[2];if(u[3],u[4],r.incrementIncomingBytes_(a),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,l===Ii)r.id=c,r.password=f;else if(l===fl)c?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(c,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+l)},function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];var u=X(a,2),l=u[0],c=u[1];r.incrementIncomingBytes_(a),r.myPacketOrderer.handleResponse(l,c)},function(){r.onClosed_()},r.urlFn);var i={};i[Ii]="t",i[ea]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[pl]=r.scriptTagHolder.uniqueCallbackIdentifier),i[Go]=Or,r.transportSessionId&&(i[jo]=r.transportSessionId),r.lastSessionId&&(i[Yo]=r.lastSessionId),r.applicationId&&(i[al]=r.applicationId),r.appCheckToken&&(i[or]=r.appCheckToken),typeof location<"u"&&location.hostname&&Qo.test(location.hostname)&&(i[Ho]=zo);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return e.forceAllow_?!0:!e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zu()&&!el()},e.prototype.markConnectionHealthy=function(){},e.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},e.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},e.prototype.send=function(t){var n=V(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=bo(n),i=Wo(r,ml),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(t,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[yl]="t",r[Jo]=t,r[Zo]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},e.prototype.incrementIncomingBytes_=function(t){var n=V(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},e}(),bl=function(){function e(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fo(),window[hl+this.uniqueCallbackIdentifier]=t,window[dl+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var a=document.domain;o='<script>document.domain="'+a+'";<\/script>'}var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(u){B("frame writing exception"),u.stack&&B(u.stack),B(u)}}}return e.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{var n=t.contentWindow.document;n||B("No IE domain setting required")}catch{var r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},e.prototype.close=function(){var t=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){t.myIFrame!==null&&(document.body.removeChild(t.myIFrame),t.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},e.prototype.startLongPoll=function(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););},e.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var t={};t[Jo]=this.myID,t[Zo]=this.myPW,t[ea]=this.currentSerial;for(var n=this.urlFn(t),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+na+r.length<=ta){var a=this.pendingSegs.shift();r=r+"&"+vl+i+"="+a.seg+"&"+_l+i+"="+a.ts+"&"+gl+i+"="+a.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},e.prototype.enqueueSegment=function(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()},e.prototype.addLongPollTag_=function(t,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(El)),a=function(){clearTimeout(o),i()};this.addTag(t,a)},e.prototype.addTag=function(t,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){B("Long-poll script failed to load: "+t),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wl=16384,Il=45e3,nn=null;typeof MozWebSocket<"u"?nn=MozWebSocket:typeof WebSocket<"u"&&(nn=WebSocket);var Ge=function(){function e(t,n,r,i,o,a,s){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vt(this.connId),this.stats_=xr(n),this.connURL=e.connectionURL_(n,a,s,i),this.nodeAdmin=n.nodeAdmin}return e.connectionURL_=function(t,n,r,i){var o={};return o[Go]=Or,typeof location<"u"&&location.hostname&&Qo.test(location.hostname)&&(o[Ho]=zo),n&&(o[jo]=n),r&&(o[Yo]=r),i&&(o[or]=i),Xo(t,qo,o)},e.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,je.set("previous_websocket_failure",!0);try{var i,o,a,s;if(!So()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new nn(this.connURL,[],o)}}catch(l){this.log_("Error instantiating WebSocket.");var u=l.message||l.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(l){r.handleIncomingFrame(l)},this.mySock.onerror=function(l){r.log_("WebSocket error.  Closing connection.");var c=l.message||l.data;c&&r.log_(c),r.onClosed_()}},e.prototype.start=function(){},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){var t=!1;if(typeof navigator<"u"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&nn!==null&&!e.forceDisallow_},e.previouslyFailed=function(){return je.isInMemoryStorage||je.get("previous_websocket_failure")===!0},e.prototype.markConnectionHealthy=function(){je.remove("previous_websocket_failure")},e.prototype.appendFrame_=function(t){if(this.frames.push(t),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=Ot(n);this.onMessage(r)}},e.prototype.handleNewFrameCount_=function(t){this.totalFrames=t,this.frames=[]},e.prototype.extractFrameCount_=function(t){if(g(this.frames===null,"We already have a frame buffer"),t.length<=6){var n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t},e.prototype.handleIncomingFrame=function(t){if(this.mySock!==null){var n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},e.prototype.send=function(t){this.resetKeepAlive();var n=V(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=Wo(n,wl);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},e.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},e.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},e.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},e.prototype.resetKeepAlive=function(){var t=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){t.mySock&&t.sendString_("0"),t.resetKeepAlive()},Math.floor(Il))},e.prototype.sendString_=function(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},e.responsesRequiredToBeHealthy=2,e.healthyTimeout=3e4,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sl=function(){function e(t){this.initTransports_(t)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[kr,Ge]},enumerable:!1,configurable:!0}),e.prototype.initTransports_=function(t){var n,r,i=Ge&&Ge.isAvailable(),o=i&&!Ge.previouslyFailed();if(t.webSocketOnly&&(i||H("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[Ge];else{var a=this.transports_=[];try{for(var s=re(e.ALL_TRANSPORTS),u=s.next();!u.done;u=s.next()){var l=u.value;l&&l.isAvailable()&&a.push(l)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},e.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},e.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tl=6e4,Rl=5e3,Nl=10*1024,Al=100*1024,Gn="t",Si="d",Ol="s",Ti="r",Pl="e",Ri="o",Ni="a",Ai="n",Oi="p",xl="h",ra=function(){function e(t,n,r,i,o,a,s,u,l,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=a,this.onReady_=s,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vt("c:"+this.id+":"),this.transportManager_=new Sl(n),this.log_("Connection created"),this.start_()}return e.prototype.start_=function(){var t=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){t.conn_&&t.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=bt(function(){t.healthyTimeout_=null,t.isHealthy_||(t.conn_&&t.conn_.bytesReceived>Al?(t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy."),t.isHealthy_=!0,t.conn_.markConnectionHealthy()):t.conn_&&t.conn_.bytesSent>Nl?t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive."):(t.log_("Closing unhealthy connection after timeout."),t.close()))},Math.floor(o)))},e.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.disconnReceiver_=function(t){var n=this;return function(r){t===n.conn_?n.onConnectionLost_(r):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},e.prototype.connReceiver_=function(t){var n=this;return function(r){n.state_!==2&&(t===n.rx_?n.onPrimaryMessageReceived_(r):t===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},e.prototype.sendRequest=function(t){var n={t:"d",d:t};this.sendData_(n)},e.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},e.prototype.onSecondaryControl_=function(t){if(Gn in t){var n=t[Gn];n===Ni?this.upgradeIfSecondaryHealthy_():n===Ti?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ri&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},e.prototype.onSecondaryMessageReceived_=function(t){var n=yt("t",t),r=yt("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},e.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Oi,d:{}}}))},e.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ni,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ai,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},e.prototype.onPrimaryMessageReceived_=function(t){var n=yt("t",t),r=yt("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},e.prototype.onDataMessage_=function(t){this.onPrimaryResponse_(),this.onMessage_(t)},e.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},e.prototype.onControl_=function(t){var n=yt(Gn,t);if(Si in t){var r=t[Si];if(n===xl)this.onHandshake_(r);else if(n===Ai){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ol?this.onConnectionShutdown_(r):n===Ti?this.onReset_(r):n===Pl?ir("Server Error: "+r):n===Ri?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+n)}},e.prototype.onHandshake_=function(t){var n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Or!==r&&H("Protocol version mismatch detected"),this.tryStartUpgrade_())},e.prototype.tryStartUpgrade_=function(){var t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)},e.prototype.startUpgrade_=function(t){var n=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),bt(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(Tl))},e.prototype.onReset_=function(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())},e.prototype.onConnectionEstablished_=function(t,n){var r=this;this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bt(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(Rl))},e.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Oi,d:{}}}))},e.prototype.onSecondaryConnectionLost_=function(){var t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()},e.prototype.onConnectionLost_=function(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},e.prototype.onConnectionShutdown_=function(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()},e.prototype.sendData_=function(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)},e.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},e.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia=function(){function e(){}return e.prototype.put=function(t,n,r,i){},e.prototype.merge=function(t,n,r,i){},e.prototype.refreshAuthToken=function(t){},e.prototype.refreshAppCheckToken=function(t){},e.prototype.onDisconnectPut=function(t,n,r){},e.prototype.onDisconnectMerge=function(t,n,r){},e.prototype.onDisconnectCancel=function(t,n){},e.prototype.reportStats=function(t){},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oa=function(){function e(t){this.allowedEvents_=t,this.listeners_={},g(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[t]))for(var i=ke([],X(this.listeners_[t])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},e.prototype.on=function(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});var i=this.getInitialEvent(t);i&&n.apply(r,i)},e.prototype.off=function(t,n,r){this.validateEventType_(t);for(var i=this.listeners_[t]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},e.prototype.validateEventType_=function(t){g(this.allowedEvents_.find(function(n){return n===t}),"Unknown event: "+t)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi=function(e){M(t,e);function t(){var n=e.call(this,["online"])||this;return n.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Io()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return g(n==="online","Unknown event type: "+n),[this.online_]},t.prototype.currentlyOnline=function(){return this.online_},t}(oa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi=32,ki=768,N=function(){function e(t,n){if(n===void 0){this.pieces_=t.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}return e.prototype.toString=function(){for(var t="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"},e}();function S(){return new N("")}function b(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function De(e){return e.pieces_.length-e.pieceNum_}function P(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new N(e.pieces_,t)}function Dr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function kl(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Pt(e,t){return t===void 0&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function aa(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new N(t,0)}function D(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof N)for(var r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else for(var i=t.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new N(n,0)}function w(e){return e.pieceNum_>=e.pieces_.length}function J(e,t){var n=b(e),r=b(t);if(n===null)return t;if(n===r)return J(P(e),P(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Dl(e,t){for(var n=Pt(e,0),r=Pt(t,0),i=0;i<n.length&&i<r.length;i++){var o=Je(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Lr(e,t){if(De(e)!==De(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function se(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(De(e)>De(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Ll=function(){function e(t,n){this.errorPrefix_=n,this.parts_=Pt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=vn(this.parts_[r]);sa(this)}return e}();function Ml(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=vn(t),sa(e)}function Fl(e){var t=e.parts_.pop();e.byteLength_-=vn(t),e.parts_.length>0&&(e.byteLength_-=1)}function sa(e){if(e.byteLength_>ki)throw new Error(e.errorPrefix_+"has a key path longer than "+ki+" bytes ("+e.byteLength_+").");if(e.parts_.length>xi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xi+") or object contains a cycle "+Be(e))}function Be(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l=function(e){M(t,e);function t(){var n=e.call(this,["visible"])||this,r,i;return typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",r="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(n){return g(n==="visible","Unknown event type: "+n),[this.visible_]},t}(oa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=1e3,Vl=60*5*1e3,Wl=3*1e3,Di=30*1e3,Ul=1.3,Bl=3e4,Gl="server_kill",Li=3,Qe=function(e){M(t,e);function t(n,r,i,o,a,s,u,l){var c=e.call(this)||this;if(c.repoInfo_=n,c.applicationId_=r,c.onDataUpdate_=i,c.onConnectStatus_=o,c.onServerInfoUpdate_=a,c.authTokenProvider_=s,c.appCheckTokenProvider_=u,c.authOverride_=l,c.id=t.nextPersistentConnectionId_++,c.log_=Vt("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=mt,c.maxReconnectDelay_=Vl,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,l&&!So())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return $l.getInstance().on("visible",c.onVisible_,c),n.host.indexOf("fblocal")===-1&&Pi.getInstance().on("online",c.onOnline_,c),c}return t.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,a={r:o,a:n,b:r};this.log_(V(a)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[o]=i)},t.prototype.get=function(n){var r=this;this.initConnection_();var i=new te,o={p:n._path.toString(),q:n._queryObject},a={action:"g",request:o,onComplete:function(u){var l=u.d;u.s==="ok"?(r.onDataUpdate_(o.p,l,!1,null),i.resolve(l)):i.reject(l)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;var s=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var u=r.outstandingGets_[s];u===void 0||a!==u||(delete r.outstandingGets_[s],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+s+" timed out on connection"),i.reject(new Error("Client is offline.")))},Wl),this.connected_&&this.sendGet_(s),i.promise},t.prototype.listen=function(n,r,i,o){this.initConnection_();var a=n._queryIdentifier,s=n._path.toString();this.log_("Listen called for "+s+" "+a),this.listens.has(s)||this.listens.set(s,new Map),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(s).has(a),"listen() called twice for same path/queryId.");var u={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(s).set(a,u),this.connected_&&this.sendListen_(u)},t.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},t.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),a=i._queryIdentifier;this.log_("Listen on "+o+" for "+a);var s={p:o},u="q";n.tag&&(s.q=i._queryObject,s.t=n.tag),s.h=n.hashFn(),this.sendRequest(u,s,function(l){var c=l.d,f=l.s;t.warnOnListenWarnings_(c,i);var h=r.listens.get(o)&&r.listens.get(o).get(a);h===n&&(r.log_("listen response",l),f!=="ok"&&r.removeListen_(o,a),n.onComplete&&n.onComplete(f,c))})},t.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&ie(n,"w")){var i=Ye(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',a=r._path.toString();H("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(a+" to your security rules for better performance."))}}},t.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},t.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||cu(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Di)},t.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},t.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=lu(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(a){var s=a.s,u=a.d||"error";n.authToken_===r&&(s==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(s,u))})}},t.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},t.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),g(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var a=this.removeListen_(i,o);a&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},t.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var a={p:n},s="n";o&&(a.q=i,a.t=o),this.sendRequest(s,a)},t.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},t.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},t.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},t.prototype.sendOnDisconnect_=function(n,r,i,o){var a={p:r,d:i};this.log_("onDisconnect "+n,a),this.sendRequest(n,a,function(s){o&&setTimeout(function(){o(s.s,s.d)},Math.floor(0))})},t.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},t.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},t.prototype.putInternal=function(n,r,i,o,a){this.initConnection_();var s={p:r,d:i};a!==void 0&&(s.h=a),this.outstandingPuts_.push({action:n,request:s,onComplete:o}),this.outstandingPutCount_++;var u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+r)},t.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,a=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(s){r.log_(i+" response",s),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),a&&a(s.s,s.d)})},t.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var a=o.s;if(a!=="ok"){var s=o.d;r.log_("reportStats","Error sending stats: "+s)}})}},t.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+V(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},t.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):ir("Unrecognized action received from server: "+V(n)+`
Are you using the latest client?`)},t.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},t.prototype.scheduleConnect_=function(n){var r=this;g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},t.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},t.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},t.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},t.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>Bl&&(this.reconnectDelay_=mt),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ul)}this.onConnectStatus_(!1)},t.prototype.establishConnection_=function(){return yo(this,void 0,void 0,function(){var n,r,i,o,a,s,u,l,c,f,h,d,p,_,v=this;return mo(this,function(y){switch(y.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+t.nextConnectionId_++,a=this.lastSessionId,s=!1,u=null,l=function(){u?u.close():(s=!0,i())},c=function(C){g(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(C)},this.realtime_={close:l,sendRequest:c},f=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)])];case 2:return h=X.apply(void 0,[y.sent(),2]),d=h[0],p=h[1],s?B("getToken() completed but was canceled"):(B("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,u=new ra(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(C){H(C+" ("+v.repoInfo_.toString()+")"),v.interrupt(Gl)},a)),[3,4];case 3:return _=y.sent(),this.log_("Failed to get token: "+_),s||(this.repoInfo_.nodeAdmin&&H(_),l()),[3,4];case 4:return[2]}})})},t.prototype.interrupt=function(n){B("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},t.prototype.resume=function(n){B("Resuming connection for reason: "+n),delete this.interruptReasons_[n],nr(this.interruptReasons_)&&(this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0))},t.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},t.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},t.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(a){return Nr(a)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},t.prototype.removeListen_=function(n,r){var i=new N(n).toString(),o;if(this.listens.has(i)){var a=this.listens.get(i);o=a.get(r),a.delete(r),a.size===0&&this.listens.delete(i)}else o=void 0;return o},t.prototype.onAuthRevoked_=function(n,r){B("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Li&&(this.reconnectDelay_=Di,this.authTokenProvider_.notifyForInvalidToken()))},t.prototype.onAppCheckRevoked_=function(n,r){B("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Li&&this.appCheckTokenProvider_.notifyForInvalidToken())},t.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},t.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var a=re(this.listens.values()),s=a.next();!s.done;s=a.next()){var u=s.value;try{for(var l=(i=void 0,re(u.values())),c=l.next();!c.done;c=l.next()){var f=c.value;this.sendListen_(f)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}}}catch(p){n={error:p}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},t.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+Do.replace(/\./g,"-")]=1,Io()?n["framework.cordova"]=1:iu()&&(n["framework.reactnative"]=1),this.reportStats(n)},t.prototype.shouldReconnect_=function(){var n=Pi.getInstance().currentlyOnline();return nr(this.interruptReasons_)&&n},t.nextPersistentConnectionId_=0,t.nextConnectionId_=0,t}(ia);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I=function(){function e(t,n){this.name=t,this.node=n}return e.Wrap=function(t,n){return new e(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(t,n){var r=new I(Ie,t),i=new I(Ie,n);return this.compare(r,i)!==0},e.prototype.minPost=function(){return I.MIN},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt,ua=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return Qt},set:function(n){Qt=n},enumerable:!1,configurable:!0}),t.prototype.compare=function(n,r){return Je(n.name,r.name)},t.prototype.isDefinedOn=function(n){throw ft("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(n,r){return!1},t.prototype.minPost=function(){return I.MIN},t.prototype.maxPost=function(){return new I(me,Qt)},t.prototype.makePost=function(n,r){return g(typeof n=="string","KeyIndex indexValue must always be a string."),new I(n,Qt)},t.prototype.toString=function(){return".key"},t}(gn),ge=new ua;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt=function(){function e(t,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var a=1;!t.isEmpty();)if(t=t,a=n?r(t.key,n):1,i&&(a*=-1),a<0)this.isReverse_?t=t.left:t=t.right;else if(a===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}return e.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n},e.prototype.hasNext=function(){return this.nodeStack_.length>0},e.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}},e}(),de=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=r!=null?r:e.RED,this.left=i!=null?i:be.EMPTY_NODE,this.right=o!=null?o:be.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)},e.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},e.prototype.minKey=function(){return this.min_().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(t,n,r){var i=this,o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()},e.prototype.removeMin_=function(){if(this.left.isEmpty())return be.EMPTY_NODE;var t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()},e.prototype.remove=function(t,n){var r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()},e.prototype.isRed_=function(){return this.color},e.prototype.fixUp_=function(){var t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t},e.prototype.moveRedLeft_=function(){var t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t},e.prototype.moveRedRight_=function(){var t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t},e.prototype.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.colorFlip_=function(){var t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)},e.prototype.checkMaxDepth_=function(){var t=this.check_();return Math.pow(2,t)<=this.count()+1},e.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)},e.RED=!0,e.BLACK=!1,e}(),jl=function(){function e(){}return e.prototype.copy=function(t,n,r,i,o){return this},e.prototype.insert=function(t,n,r){return new de(t,n,null)},e.prototype.remove=function(t,n){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(t){return!1},e.prototype.reverseTraversal=function(t){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.check_=function(){return 0},e.prototype.isRed_=function(){return!1},e}(),be=function(){function e(t,n){n===void 0&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}return e.prototype.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,de.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,de.BLACK,null,null))},e.prototype.get=function(t){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},e.prototype.getPredecessorKey=function(t){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.root_.isEmpty()},e.prototype.count=function(){return this.root_.count()},e.prototype.minKey=function(){return this.root_.minKey()},e.prototype.maxKey=function(){return this.root_.maxKey()},e.prototype.inorderTraversal=function(t){return this.root_.inorderTraversal(t)},e.prototype.reverseTraversal=function(t){return this.root_.reverseTraversal(t)},e.prototype.getIterator=function(t){return new Yt(this.root_,null,this.comparator_,!1,t)},e.prototype.getIteratorFrom=function(t,n){return new Yt(this.root_,t,this.comparator_,!1,n)},e.prototype.getReverseIteratorFrom=function(t,n){return new Yt(this.root_,t,this.comparator_,!0,n)},e.prototype.getReverseIterator=function(t){return new Yt(this.root_,null,this.comparator_,!0,t)},e.EMPTY_NODE=new jl,e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e,t){return Je(e.name,t.name)}function Mr(e,t){return Je(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar;function zl(e){ar=e}var la=function(e){return typeof e=="number"?"number:"+Uo(e):"string:"+e},ca=function(e){if(e.isLeafNode()){var t=e.val();g(typeof t=="string"||typeof t=="number"||typeof t=="object"&&ie(t,".sv"),"Priority must be a string or number.")}else g(e===ar||e.isEmpty(),"priority of unexpected type.");g(e===ar||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi,at=function(){function e(t,n){n===void 0&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ca(this.priorityNode_)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return Mi},set:function(t){Mi=t},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.priorityNode_},e.prototype.updatePriority=function(t){return new e(this.value_,t)},e.prototype.getImmediateChild=function(t){return t===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return w(t)?this:b(t)===".priority"?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(t,n){return null},e.prototype.updateImmediateChild=function(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},e.prototype.updateChild=function(t,n){var r=b(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(g(r!==".priority"||De(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(t),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(t,n){return!1},e.prototype.val=function(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+la(this.priorityNode_.val())+":");var n=typeof this.value_;t+=n+":",n==="number"?t+=Uo(this.value_):t+=this.value_,this.lazyHash_=$o(t)}return this.lazyHash_},e.prototype.getValue=function(){return this.value_},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(g(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},e.prototype.compareToLeafNode_=function(t){var n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(r);return g(i>=0,"Unknown leaf type: "+n),g(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode()){var n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fa,ha;function Ql(e){fa=e}function Yl(e){ha=e}var ql=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),a=i.compareTo(o);return a===0?Je(n.name,r.name):a},t.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},t.prototype.minPost=function(){return I.MIN},t.prototype.maxPost=function(){return new I(me,new at("[PRIORITY-POST]",ha))},t.prototype.makePost=function(n,r){var i=fa(n);return new I(r,new at("[PRIORITY-POST]",i))},t.prototype.toString=function(){return".priority"},t}(gn),x=new ql;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kl=Math.log(2),Xl=function(){function e(t){var n=function(o){return parseInt(Math.log(o)/Kl,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(t+1),this.current_=this.count-1;var i=r(this.count);this.bits_=t+1&i}return e.prototype.nextBitIsOne=function(){var t=!(this.bits_&1<<this.current_);return this.current_--,t},e}(),rn=function(e,t,n,r){e.sort(t);var i=function(u,l){var c=l-u,f,h;if(c===0)return null;if(c===1)return f=e[u],h=n?n(f):f,new de(h,f.node,de.BLACK,null,null);var d=parseInt(c/2,10)+u,p=i(u,d),_=i(d+1,l);return f=e[d],h=n?n(f):f,new de(h,f.node,de.BLACK,p,_)},o=function(u){for(var l=null,c=null,f=e.length,h=function(y,C){var A=f-y,Z=f;f-=y;var ee=i(A+1,Z),Se=e[A],_t=n?n(Se):Se;d(new de(_t,Se.node,C,null,ee))},d=function(y){l?(l.left=y,l=y):(c=y,l=y)},p=0;p<u.count;++p){var _=u.nextBitIsOne(),v=Math.pow(2,u.count-(p+1));_?h(v,de.BLACK):(h(v,de.BLACK),h(v,de.RED))}return c},a=new Xl(e.length),s=o(a);return new be(r||t,s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn,nt={},on=function(){function e(t,n){this.indexes_=t,this.indexSet_=n}return Object.defineProperty(e,"Default",{get:function(){return g(nt&&x,"ChildrenNode.ts has not been loaded"),jn=jn||new e({".priority":nt},{".priority":x}),jn},enumerable:!1,configurable:!0}),e.prototype.get=function(t){var n=Ye(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof be?n:null},e.prototype.hasIndex=function(t){return ie(this.indexSet_,t.toString())},e.prototype.addIndex=function(t,n){g(t!==ge,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(I.Wrap),a=o.getNext();a;)i=i||t.isDefinedOn(a.node),r.push(a),a=o.getNext();var s;i?s=rn(r,t.getCompare()):s=nt;var u=t.toString(),l=xe({},this.indexSet_);l[u]=t;var c=xe({},this.indexes_);return c[u]=s,new e(c,l)},e.prototype.addToIndexes=function(t,n){var r=this,i=Zt(this.indexes_,function(o,a){var s=Ye(r.indexSet_,a);if(g(s,"Missing index implementation for "+a),o===nt)if(s.isDefinedOn(t.node)){for(var u=[],l=n.getIterator(I.Wrap),c=l.getNext();c;)c.name!==t.name&&u.push(c),c=l.getNext();return u.push(t),rn(u,s.getCompare())}else return nt;else{var f=n.get(t.name),h=o;return f&&(h=h.remove(new I(t.name,f))),h.insert(t,t.node)}});return new e(i,this.indexSet_)},e.prototype.removeFromIndexes=function(t,n){var r=Zt(this.indexes_,function(i){if(i===nt)return i;var o=n.get(t.name);return o?i.remove(new I(t.name,o)):i});return new e(r,this.indexSet_)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,E=function(){function e(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ca(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return Et||(Et=new e(new be(Mr),null,on.Default))},enumerable:!1,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.priorityNode_||Et},e.prototype.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},e.prototype.getImmediateChild=function(t){if(t===".priority")return this.getPriority();var n=this.children_.get(t);return n===null?Et:n},e.prototype.getChild=function(t){var n=b(t);return n===null?this:this.getImmediateChild(n).getChild(P(t))},e.prototype.hasChild=function(t){return this.children_.get(t)!==null},e.prototype.updateImmediateChild=function(t,n){if(g(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);var r=new I(t,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));var a=i.isEmpty()?Et:this.priorityNode_;return new e(i,a,o)},e.prototype.updateChild=function(t,n){var r=b(t);if(r===null)return n;g(b(t)!==".priority"||De(t)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(P(t),n);return this.updateImmediateChild(r,i)},e.prototype.isEmpty=function(){return this.children_.isEmpty()},e.prototype.numChildren=function(){return this.children_.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(x,function(u,l){n[u]=l.val(t),r++,o&&e.INTEGER_REGEXP_.test(u)?i=Math.max(i,Number(u)):o=!1}),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(this.lazyHash_===null){var t="";this.getPriority().isEmpty()||(t+="priority:"+la(this.getPriority().val())+":"),this.forEachChild(x,function(n,r){var i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":$o(t)}return this.lazyHash_},e.prototype.getPredecessorChildName=function(t,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new I(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)},e.prototype.getFirstChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},e.prototype.getFirstChild=function(t){var n=this.getFirstChildName(t);return n?new I(n,this.children_.get(n)):null},e.prototype.getLastChildName=function(t){var n=this.resolveIndex_(t);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},e.prototype.getLastChild=function(t){var n=this.getLastChildName(t);return n?new I(n,this.children_.get(n)):null},e.prototype.forEachChild=function(t,n){var r=this.resolveIndex_(t);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},e.prototype.getIterator=function(t){return this.getIteratorFrom(t.minPost(),t)},e.prototype.getIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,function(a){return a});for(var i=this.children_.getIteratorFrom(t.name,I.Wrap),o=i.peek();o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i},e.prototype.getReverseIterator=function(t){return this.getReverseIteratorFrom(t.maxPost(),t)},e.prototype.getReverseIteratorFrom=function(t,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,function(a){return a});for(var i=this.children_.getReverseIteratorFrom(t.name,I.Wrap),o=i.peek();o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i},e.prototype.compareTo=function(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Wt?-1:0},e.prototype.withIndex=function(t){if(t===ge||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},e.prototype.isIndexed=function(t){return t===ge||this.indexMap_.hasIndex(t)},e.prototype.equals=function(t){if(t===this)return!0;if(t.isLeafNode())return!1;var n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(x),i=n.getIterator(x),o=r.getNext(),a=i.getNext();o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=r.getNext(),a=i.getNext()}return o===null&&a===null}else return!1;else return!1},e.prototype.resolveIndex_=function(t){return t===ge?null:this.indexMap_.get(t.toString())},e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,e}(),Jl=function(e){M(t,e);function t(){return e.call(this,new be(Mr),E.EMPTY_NODE,on.Default)||this}return t.prototype.compareTo=function(n){return n===this?0:1},t.prototype.equals=function(n){return n===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(n){return E.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(E),Wt=new Jl;Object.defineProperties(I,{MIN:{value:new I(Ie,E.EMPTY_NODE)},MAX:{value:new I(me,Wt)}});ua.__EMPTY_NODE=E.EMPTY_NODE;at.__childrenNodeConstructor=E;zl(Wt);Yl(Wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zl=!0;function L(e,t){if(t===void 0&&(t=null),e===null)return E.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),g(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){var n=e;return new at(n,L(t))}if(!(e instanceof Array)&&Zl){var r=[],i=!1,o=e;if(W(o,function(l,c){if(l.substring(0,1)!=="."){var f=L(c);f.isEmpty()||(i=i||!f.getPriority().isEmpty(),r.push(new I(l,f)))}}),r.length===0)return E.EMPTY_NODE;var a=rn(r,Hl,function(l){return l.name},Mr);if(i){var s=rn(r,x.getCompare());return new E(a,L(t),new on({".priority":s},{".priority":x}))}else return new E(a,L(t),on.Default)}else{var u=E.EMPTY_NODE;return W(e,function(l,c){if(ie(e,l)&&l.substring(0,1)!=="."){var f=L(c);(f.isLeafNode()||!f.isEmpty())&&(u=u.updateImmediateChild(l,f))}}),u.updatePriority(L(t))}}Ql(L);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr=function(e){M(t,e);function t(n){var r=e.call(this)||this;return r.indexPath_=n,g(!w(n)&&b(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return t.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},t.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},t.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),a=i.compareTo(o);return a===0?Je(n.name,r.name):a},t.prototype.makePost=function(n,r){var i=L(n),o=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(r,o)},t.prototype.maxPost=function(){var n=E.EMPTY_NODE.updateChild(this.indexPath_,Wt);return new I(me,n)},t.prototype.toString=function(){return Pt(this.indexPath_,0).join("/")},t}(gn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?Je(n.name,r.name):i},t.prototype.isDefinedOn=function(n){return!0},t.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},t.prototype.minPost=function(){return I.MIN},t.prototype.maxPost=function(){return I.MAX},t.prototype.makePost=function(n,r){var i=L(n);return new I(r,i)},t.prototype.toString=function(){return".value"},t}(gn),$r=new ec;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sr="-",da="z",pa=786,tc=function(){var e=0,t=[];return function(n){var r=n===e;e=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=st.charAt(n%64),n=Math.floor(n/64);g(n===0,"Cannot push at time == 0");var a=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=st.charAt(t[i]);return g(a.length===20,"nextPushId: Length should be 20."),a}}(),Fi=function(e){if(e===""+Ar)return sr;var t=tn(e);if(t!=null)return""+(t+1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);if(n.length<pa)return n.push(sr),n.join("");for(var i=n.length-1;i>=0&&n[i]===da;)i--;if(i===-1)return me;var o=n[i],a=st.charAt(st.indexOf(o)+1);return n[i]=a,n.slice(0,i+1).join("")},$i=function(e){if(e===""+Bo)return Ie;var t=tn(e);if(t!=null)return""+(t-1);for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===sr?n.length===1?""+Ar:(delete n[n.length-1],n.join("")):(n[n.length-1]=st.charAt(st.indexOf(n[n.length-1])-1),n.join("")+da.repeat(pa-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){return{type:"value",snapshotNode:e}}function ut(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function xt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function nc(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(){function e(t){this.index_=t}return e.prototype.updateChild=function(t,n,r,i,o,a){g(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=t.getImmediateChild(n);return s.getChild(i).equals(r.getChild(i))&&s.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?t.hasChild(n)?a.trackChildChange(xt(n,s)):g(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?a.trackChildChange(ut(n,r)):a.trackChildChange(kt(n,r,s))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)},e.prototype.updateFullNode=function(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(x,function(i,o){n.hasChild(i)||r.trackChildChange(xt(i,o))}),n.isLeafNode()||n.forEachChild(x,function(i,o){if(t.hasChild(i)){var a=t.getImmediateChild(i);a.equals(o)||r.trackChildChange(kt(i,o,a))}else r.trackChildChange(ut(i,o))})),n.withIndex(this.index_)},e.prototype.updatePriority=function(t,n){return t.isEmpty()?E.EMPTY_NODE:t.updatePriority(n)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.index_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _a=function(){function e(t){this.indexedFilter_=new Vr(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t)}return e.prototype.getStartPost=function(){return this.startPost_},e.prototype.getEndPost=function(){return this.endPost_},e.prototype.matches=function(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0},e.prototype.updateChild=function(t,n,r,i,o,a){return this.matches(new I(n,r))||(r=E.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,a)},e.prototype.updateFullNode=function(t,n,r){n.isLeafNode()&&(n=E.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(E.EMPTY_NODE);var o=this;return n.forEachChild(x,function(a,s){o.matches(new I(a,s))||(i=i.updateImmediateChild(a,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.indexedFilter_},e.prototype.getIndex=function(){return this.index_},e.getStartPost_=function(t){if(t.hasStart()){var n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()},e.getEndPost_=function(t){if(t.hasEnd()){var n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rc=function(){function e(t){this.rangedFilter_=new _a(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}return e.prototype.updateChild=function(t,n,r,i,o,a){return this.rangedFilter_.matches(new I(n,r))||(r=E.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,a):this.fullLimitUpdateChild_(t,n,r,o,a)},e.prototype.updateFullNode=function(t,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=E.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;o.hasNext()&&a<this.limit_;){var s=o.getNext(),u=void 0;if(this.reverse_?u=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:u=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,u)i=i.updateImmediateChild(s.name,s.node),a++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(E.EMPTY_NODE);var l=void 0,c=void 0,f=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),l=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();f=function(v,y){return h(y,v)}}else o=i.getIterator(this.index_),l=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();for(var a=0,d=!1;o.hasNext();){var s=o.getNext();!d&&f(l,s)<=0&&(d=!0);var u=d&&a<this.limit_&&f(s,c)<=0;u?a++:i=i.updateImmediateChild(s.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)},e.prototype.updatePriority=function(t,n){return t},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},e.prototype.getIndex=function(){return this.index_},e.prototype.fullLimitUpdateChild_=function(t,n,r,i,o){var a;if(this.reverse_){var s=this.index_.getCompare();a=function(C,A){return s(A,C)}}else a=this.index_.getCompare();var u=t;g(u.numChildren()===this.limit_,"");var l=new I(n,r),c=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(u.hasChild(n)){for(var h=u.getImmediateChild(n),d=i.getChildAfterChild(this.index_,c,this.reverse_);d!=null&&(d.name===n||u.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var p=d==null?1:a(d,l),_=f&&!r.isEmpty()&&p>=0;if(_)return o!=null&&o.trackChildChange(kt(n,r,h)),u.updateImmediateChild(n,r);o!=null&&o.trackChildChange(xt(n,h));var v=u.updateImmediateChild(n,E.EMPTY_NODE),y=d!=null&&this.rangedFilter_.matches(d);return y?(o!=null&&o.trackChildChange(ut(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}else return r.isEmpty()?t:f&&a(c,l)>=0?(o!=null&&(o.trackChildChange(xt(c.name,c.node)),o.trackChildChange(ut(n,r))),u.updateImmediateChild(n,r).updateImmediateChild(c.name,E.EMPTY_NODE)):t},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga=function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=x}return e.prototype.hasStart=function(){return this.startSet_},e.prototype.hasStartAfter=function(){return this.startAfterSet_},e.prototype.hasEndBefore=function(){return this.endBeforeSet_},e.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},e.prototype.getIndexStartValue=function(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},e.prototype.getIndexStartName=function(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ie},e.prototype.hasEnd=function(){return this.endSet_},e.prototype.getIndexEndValue=function(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},e.prototype.getIndexEndName=function(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:me},e.prototype.hasLimit=function(){return this.limitSet_},e.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},e.prototype.getLimit=function(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_},e.prototype.getIndex=function(){return this.index_},e.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===x},e.prototype.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}();function ic(e){return e.loadsAllData()?new Vr(e.getIndex()):e.hasLimit()?new rc(e):new _a(e)}function oc(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function ac(e,t){var n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function ur(e,t,n){var r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function sc(e,t,n){var r;if(e.index_===ge)typeof t=="string"&&(t=Fi(t)),r=ur(e,t,n);else{var i=void 0;n==null?i=me:i=Fi(n),r=ur(e,t,i)}return r.startAfterSet_=!0,r}function lr(e,t,n){var r=e.copy();return r.endSet_=!0,t===void 0&&(t=null),r.indexEndValue_=t,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function uc(e,t,n){var r,i;return e.index_===ge?(typeof t=="string"&&(t=$i(t)),i=lr(e,t,n)):(n==null?r=Ie:r=$i(n),i=lr(e,t,r)),i.endBeforeSet_=!0,i}function yn(e,t){var n=e.copy();return n.index_=t,n}function Vi(e){var t={};if(e.isDefault())return t;var n;return e.index_===x?n="$priority":e.index_===$r?n="$value":e.index_===ge?n="$key":(g(e.index_ instanceof Fr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=V(n),e.startSet_&&(t.startAt=V(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+V(e.indexStartName_))),e.endSet_&&(t.endAt=V(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+V(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Wi(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==x&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lc=function(e){M(t,e);function t(n,r,i,o){var a=e.call(this)||this;return a.repoInfo_=n,a.onDataUpdate_=r,a.authTokenProvider_=i,a.appCheckTokenProvider_=o,a.log_=Vt("p:rest:"),a.listens_={},a}return t.prototype.reportStats=function(n){throw new Error("Method not implemented.")},t.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(g(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},t.prototype.listen=function(n,r,i,o){var a=this,s=n._path.toString();this.log_("Listen called for "+s+" "+n._queryIdentifier);var u=t.getListenId_(n,i),l={};this.listens_[u]=l;var c=Vi(n._queryParams);this.restRequest_(s+".json",c,function(f,h){var d=h;if(f===404&&(d=null,f=null),f===null&&a.onDataUpdate_(s,d,!1,i),Ye(a.listens_,u)===l){var p;f?f===401?p="permission_denied":p="rest_error:"+f:p="ok",o(p,null)}})},t.prototype.unlisten=function(n,r){var i=t.getListenId_(n,r);delete this.listens_[i]},t.prototype.get=function(n){var r=this,i=Vi(n._queryParams),o=n._path.toString(),a=new te;return this.restRequest_(o+".json",i,function(s,u){var l=u;s===404&&(l=null,s=null),s===null?(r.onDataUpdate_(o,l,!1,null),a.resolve(l)):a.reject(new Error(l))}),a.promise},t.prototype.refreshAuthToken=function(n){},t.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(a){var s=X(a,2),u=s[0],l=s[1];u&&u.accessToken&&(r.auth=u.accessToken),l&&l.token&&(r.ac=l.token);var c=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+fu(r);o.log_("Sending REST request for "+c);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(i&&f.readyState===4){o.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);var h=null;if(f.status>=200&&f.status<300){try{h=Ot(f.responseText)}catch{H("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&H("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})},t}(ia);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cc=function(){function e(){this.rootNode_=E.EMPTY_NODE}return e.prototype.getNode=function(t){return this.rootNode_.getChild(t)},e.prototype.updateSnapshot=function(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return{value:null,children:new Map}}function dt(e,t,n){if(w(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{var r=b(t);e.children.has(r)||e.children.set(r,an());var i=e.children.get(r);t=P(t),dt(i,t,n)}}function cr(e,t){if(w(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;var n=e.value;return e.value=null,n.forEachChild(x,function(o,a){dt(e,new N(o),a)}),cr(e,t)}else if(e.children.size>0){var r=b(t);if(t=P(t),e.children.has(r)){var i=cr(e.children.get(r),t);i&&e.children.delete(r)}return e.children.size===0}else return!0}function fr(e,t,n){e.value!==null?n(t,e.value):fc(e,function(r,i){var o=new N(t.toString()+"/"+r);fr(i,o,n)})}function fc(e,t){e.children.forEach(function(n,r){t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya=function(){function e(t){this.collection_=t,this.last_=null}return e.prototype.get=function(){var t=this.collection_.get(),n=xe({},t);return this.last_&&W(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=t,n},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=10*1e3,hc=30*1e3,dc=5*60*1e3,pc=function(){function e(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ya(t);var r=Ui+(hc-Ui)*Math.random();bt(this.reportStats_.bind(this),Math.floor(r))}return e.prototype.reportStats_=function(){var t=this,n=this.statsListener_.get(),r={},i=!1;W(n,function(o,a){a>0&&ie(t.statsToReport_,o)&&(r[o]=a,i=!0)}),i&&this.server_.reportStats(r),bt(this.reportStats_.bind(this),Math.floor(Math.random()*2*dc))},e}();function vc(e,t){e.statsToReport_[t]=!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pe||(pe={}));function Wr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ur(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Br(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c=function(){function e(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=pe.ACK_USER_WRITE,this.source=Wr()}return e.prototype.operationForChild=function(t){if(w(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new N(t));return new e(S(),n,this.revert)}else return g(b(this.path)===t,"operationForChild called for unrelated child."),new e(P(this.path),this.affectedTree,this.revert)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma=function(){function e(t,n){this.source=t,this.path=n,this.type=pe.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return w(this.path)?new e(this.source,S()):new e(this.source,P(this.path))},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn=function(){function e(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=pe.OVERWRITE}return e.prototype.operationForChild=function(t){return w(this.path)?new e(this.source,S(),this.snap.getImmediateChild(t)):new e(this.source,P(this.path),this.snap)},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr=function(){function e(t,n,r){this.source=t,this.path=n,this.children=r,this.type=pe.MERGE}return e.prototype.operationForChild=function(t){if(w(this.path)){var n=this.children.subtree(new N(t));return n.isEmpty()?null:n.value?new mn(this.source,S(),n.value):new e(this.source,S(),n)}else return g(b(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,P(this.path),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le=function(){function e(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}return e.prototype.isFullyInitialized=function(){return this.fullyInitialized_},e.prototype.isFiltered=function(){return this.filtered_},e.prototype.isCompleteForPath=function(t){if(w(t))return this.isFullyInitialized()&&!this.filtered_;var n=b(t);return this.isCompleteForChild(n)},e.prototype.isCompleteForChild=function(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)},e.prototype.getNode=function(){return this.node_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gc=function(){function e(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}return e}();function yc(e,t,n,r){var i=[],o=[];return t.forEach(function(a){a.type==="child_changed"&&e.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(nc(a.childName,a.snapshotNode))}),Ct(e,i,"child_removed",t,r,n),Ct(e,i,"child_added",t,r,n),Ct(e,i,"child_moved",o,r,n),Ct(e,i,"child_changed",t,r,n),Ct(e,i,"value",t,r,n),i}function Ct(e,t,n,r,i,o){var a=r.filter(function(s){return s.type===n});a.sort(function(s,u){return Ec(e,s,u)}),a.forEach(function(s){var u=mc(e,s,o);i.forEach(function(l){l.respondsTo(s.type)&&t.push(l.createEvent(u,e.query_))})})}function mc(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Ec(e,t,n){if(t.childName==null||n.childName==null)throw ft("Should only compare child_ events.");var r=new I(t.childName,t.snapshotNode),i=new I(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e,t){return{eventCache:e,serverCache:t}}function It(e,t,n,r){return En(new Le(t,n,r),e.serverCache)}function Ea(e,t,n,r){return En(e.eventCache,new Le(t,n,r))}function sn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function qe(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn,Cc=function(){return Hn||(Hn=new be(Ju)),Hn},oe=function(){function e(t,n){n===void 0&&(n=Cc()),this.value=t,this.children=n}return e.fromObject=function(t){var n=new e(null);return W(t,function(r,i){n=n.set(new N(r),i)}),n},e.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(t,n){if(this.value!=null&&n(this.value))return{path:S(),value:this.value};if(w(t))return null;var r=b(t),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(P(t),n);if(o!=null){var a=D(new N(r),o.path);return{path:a,value:o.value}}else return null}else return null},e.prototype.findRootMostValueAndPath=function(t){return this.findRootMostMatchingPathAndValue(t,function(){return!0})},e.prototype.subtree=function(t){if(w(t))return this;var n=b(t),r=this.children.get(n);return r!==null?r.subtree(P(t)):new e(null)},e.prototype.set=function(t,n){if(w(t))return new e(n,this.children);var r=b(t),i=this.children.get(r)||new e(null),o=i.set(P(t),n),a=this.children.insert(r,o);return new e(this.value,a)},e.prototype.remove=function(t){if(w(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=b(t),r=this.children.get(n);if(r){var i=r.remove(P(t)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new e(null):new e(this.value,o)}else return this},e.prototype.get=function(t){if(w(t))return this.value;var n=b(t),r=this.children.get(n);return r?r.get(P(t)):null},e.prototype.setTree=function(t,n){if(w(t))return n;var r=b(t),i=this.children.get(r)||new e(null),o=i.setTree(P(t),n),a=void 0;return o.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,o),new e(this.value,a)},e.prototype.fold=function(t){return this.fold_(S(),t)},e.prototype.fold_=function(t,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(D(t,i),n)}),n(t,this.value,r)},e.prototype.findOnPath=function(t,n){return this.findOnPath_(t,S(),n)},e.prototype.findOnPath_=function(t,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(w(t))return null;var o=b(t),a=this.children.get(o);return a?a.findOnPath_(P(t),D(n,o),r):null},e.prototype.foreachOnPath=function(t,n){return this.foreachOnPath_(t,S(),n)},e.prototype.foreachOnPath_=function(t,n,r){if(w(t))return this;this.value&&r(n,this.value);var i=b(t),o=this.children.get(i);return o?o.foreachOnPath_(P(t),D(n,i),r):new e(null)},e.prototype.foreach=function(t){this.foreach_(S(),t)},e.prototype.foreach_=function(t,n){this.children.inorderTraversal(function(r,i){i.foreach_(D(t,r),n)}),this.value&&n(t,this.value)},e.prototype.foreachChild=function(t){this.children.inorderTraversal(function(n,r){r.value&&t(n,r.value)})},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we=function(){function e(t){this.writeTree_=t}return e.empty=function(){return new e(new oe(null))},e}();function St(e,t,n){if(w(t))return new we(new oe(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){var i=r.path,o=r.value,a=J(i,t);return o=o.updateChild(a,n),new we(e.writeTree_.set(i,o))}else{var s=new oe(n),u=e.writeTree_.setTree(t,s);return new we(u)}}function hr(e,t,n){var r=e;return W(n,function(i,o){r=St(r,D(t,i),o)}),r}function Bi(e,t){if(w(t))return we.empty();var n=e.writeTree_.setTree(t,new oe(null));return new we(n)}function dr(e,t){return Ze(e,t)!=null}function Ze(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(J(n.path,t)):null}function Gi(e){var t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(x,function(r,i){t.push(new I(r,i))}):e.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&t.push(new I(r,i.value))}),t}function Oe(e,t){if(w(t))return e;var n=Ze(e,t);return n!=null?new we(new oe(n)):new we(e.writeTree_.subtree(t))}function pr(e){return e.writeTree_.isEmpty()}function lt(e,t){return Ca(S(),e.writeTree_,t)}function Ca(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal(function(i,o){i===".priority"?(g(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=Ca(D(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(D(e,".priority"),r)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e,t){return Sa(t,e)}function bc(e,t,n,r,i){g(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=St(e.visibleWrites,t,n)),e.lastWriteId=r}function wc(e,t,n,r){g(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=hr(e.visibleWrites,t,n),e.lastWriteId=r}function Ic(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Sc(e,t){var n=e.allWrites.findIndex(function(l){return l.writeId===t});g(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&Tc(s,r.path)?i=!1:se(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return Rc(e),!0;if(r.snap)e.visibleWrites=Bi(e.visibleWrites,r.path);else{var u=r.children;W(u,function(l){e.visibleWrites=Bi(e.visibleWrites,D(r.path,l))})}return!0}else return!1}function Tc(e,t){if(e.snap)return se(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&se(D(e.path,n),t))return!0;return!1}function Rc(e){e.visibleWrites=ba(e.allWrites,Nc,S()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Nc(e){return e.visible}function ba(e,t,n){for(var r=we.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)se(n,a)?(s=J(n,a),r=St(r,s,o.snap)):se(a,n)&&(s=J(a,n),r=St(r,S(),o.snap.getChild(s)));else if(o.children){if(se(n,a))s=J(n,a),r=hr(r,s,o.children);else if(se(a,n))if(s=J(a,n),w(s))r=hr(r,S(),o.children);else{var u=Ye(o.children,b(s));if(u){var l=u.getChild(P(s));r=St(r,S(),l)}}}else throw ft("WriteRecord should have .snap or .children")}}return r}function wa(e,t,n,r,i){if(!r&&!i){var o=Ze(e.visibleWrites,t);if(o!=null)return o;var a=Oe(e.visibleWrites,t);if(pr(a))return n;if(n==null&&!dr(a,S()))return null;var s=n||E.EMPTY_NODE;return lt(a,s)}else{var u=Oe(e.visibleWrites,t);if(!i&&pr(u))return n;if(!i&&n==null&&!dr(u,S()))return null;var l=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(se(h.path,t)||se(t,h.path))},c=ba(e.allWrites,l,t),s=n||E.EMPTY_NODE;return lt(c,s)}}function Ac(e,t,n){var r=E.EMPTY_NODE,i=Ze(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(x,function(s,u){r=r.updateImmediateChild(s,u)}),r;if(n){var o=Oe(e.visibleWrites,t);return n.forEachChild(x,function(s,u){var l=lt(Oe(o,new N(s)),u);r=r.updateImmediateChild(s,l)}),Gi(o).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}else{var a=Oe(e.visibleWrites,t);return Gi(a).forEach(function(s){r=r.updateImmediateChild(s.name,s.node)}),r}}function Oc(e,t,n,r,i){g(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=D(t,n);if(dr(e.visibleWrites,o))return null;var a=Oe(e.visibleWrites,o);return pr(a)?i.getChild(n):lt(a,i.getChild(n))}function Pc(e,t,n,r){var i=D(t,n),o=Ze(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var a=Oe(e.visibleWrites,i);return lt(a,r.getNode().getImmediateChild(n))}else return null}function xc(e,t){return Ze(e.visibleWrites,t)}function kc(e,t,n,r,i,o,a){var s,u=Oe(e.visibleWrites,t),l=Ze(u,S());if(l!=null)s=l;else if(n!=null)s=lt(u,n);else return[];if(s=s.withIndex(a),!s.isEmpty()&&!s.isLeafNode()){for(var c=[],f=a.getCompare(),h=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=h.getNext();d&&c.length<i;)f(d,r)!==0&&c.push(d),d=h.getNext();return c}else return[]}function Dc(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function un(e,t,n,r){return wa(e.writeTree,e.treePath,t,n,r)}function jr(e,t){return Ac(e.writeTree,e.treePath,t)}function ji(e,t,n,r){return Oc(e.writeTree,e.treePath,t,n,r)}function ln(e,t){return xc(e.writeTree,D(e.treePath,t))}function Lc(e,t,n,r,i,o){return kc(e.writeTree,e.treePath,t,n,r,i,o)}function Hr(e,t,n){return Pc(e.writeTree,e.treePath,t,n)}function Ia(e,t){return Sa(D(e.treePath,t),e.writeTree)}function Sa(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc=function(){function e(){this.changeMap=new Map}return e.prototype.trackChildChange=function(t){var n=t.type,r=t.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,kt(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,xt(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ut(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,kt(r,t.snapshotNode,i.oldSnap));else throw ft("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)},e.prototype.getChanges=function(){return Array.from(this.changeMap.values())},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc=function(){function e(){}return e.prototype.getCompleteChild=function(t){return null},e.prototype.getChildAfterChild=function(t,n,r){return null},e}(),Ta=new Fc,zr=function(){function e(t,n,r){r===void 0&&(r=null),this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}return e.prototype.getCompleteChild=function(t){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);var r=this.optCompleteServerCache_!=null?new Le(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hr(this.writes_,t,r)},e.prototype.getChildAfterChild=function(t,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),o=Lc(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){return{filter:e}}function Vc(e,t){g(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),g(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Wc(e,t,n,r,i){var o=new Mc,a,s;if(n.type===pe.OVERWRITE){var u=n;u.source.fromUser?a=vr(e,t,u.path,u.snap,r,i,o):(g(u.source.fromServer,"Unknown source."),s=u.source.tagged||t.serverCache.isFiltered()&&!w(u.path),a=cn(e,t,u.path,u.snap,r,i,s,o))}else if(n.type===pe.MERGE){var l=n;l.source.fromUser?a=Bc(e,t,l.path,l.children,r,i,o):(g(l.source.fromServer,"Unknown source."),s=l.source.tagged||t.serverCache.isFiltered(),a=_r(e,t,l.path,l.children,r,i,s,o))}else if(n.type===pe.ACK_USER_WRITE){var c=n;c.revert?a=Hc(e,t,c.path,r,i,o):a=Gc(e,t,c.path,c.affectedTree,r,i,o)}else if(n.type===pe.LISTEN_COMPLETE)a=jc(e,t,n.path,r,o);else throw ft("Unknown operation type: "+n.type);var f=o.getChanges();return Uc(t,a,f),{viewCache:a,changes:f}}function Uc(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=sn(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(va(sn(t)))}}function Ra(e,t,n,r,i,o){var a=t.eventCache;if(ln(r,n)!=null)return t;var s=void 0,u=void 0;if(w(n))if(g(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var l=qe(t),c=l instanceof E?l:E.EMPTY_NODE,f=jr(r,c);s=e.filter.updateFullNode(t.eventCache.getNode(),f,o)}else{var h=un(r,qe(t));s=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var d=b(n);if(d===".priority"){g(De(n)===1,"Can't have a priority with additional path components");var p=a.getNode();u=t.serverCache.getNode();var _=ji(r,n,p,u);_!=null?s=e.filter.updatePriority(p,_):s=a.getNode()}else{var v=P(n),y=void 0;if(a.isCompleteForChild(d)){u=t.serverCache.getNode();var C=ji(r,n,a.getNode(),u);C!=null?y=a.getNode().getImmediateChild(d).updateChild(v,C):y=a.getNode().getImmediateChild(d)}else y=Hr(r,d,t.serverCache);y!=null?s=e.filter.updateChild(a.getNode(),d,y,v,i,o):s=a.getNode()}}return It(t,s,a.isFullyInitialized()||w(n),e.filter.filtersNodes())}function cn(e,t,n,r,i,o,a,s){var u=t.serverCache,l,c=a?e.filter:e.filter.getIndexedFilter();if(w(n))l=c.updateFullNode(u.getNode(),r,null);else if(c.filtersNodes()&&!u.isFiltered()){var f=u.getNode().updateChild(n,r);l=c.updateFullNode(u.getNode(),f,null)}else{var h=b(n);if(!u.isCompleteForPath(n)&&De(n)>1)return t;var d=P(n),p=u.getNode().getImmediateChild(h),_=p.updateChild(d,r);h===".priority"?l=c.updatePriority(u.getNode(),_):l=c.updateChild(u.getNode(),h,_,d,Ta,null)}var v=Ea(t,l,u.isFullyInitialized()||w(n),c.filtersNodes()),y=new zr(i,v,o);return Ra(e,v,n,i,y,s)}function vr(e,t,n,r,i,o,a){var s=t.eventCache,u,l,c=new zr(i,t,o);if(w(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,a),u=It(t,l,!0,e.filter.filtersNodes());else{var f=b(n);if(f===".priority")l=e.filter.updatePriority(t.eventCache.getNode(),r),u=It(t,l,s.isFullyInitialized(),s.isFiltered());else{var h=P(n),d=s.getNode().getImmediateChild(f),p=void 0;if(w(h))p=r;else{var _=c.getCompleteChild(f);_!=null?Dr(h)===".priority"&&_.getChild(aa(h)).isEmpty()?p=_:p=_.updateChild(h,r):p=E.EMPTY_NODE}if(d.equals(p))u=t;else{var v=e.filter.updateChild(s.getNode(),f,p,h,c,a);u=It(t,v,s.isFullyInitialized(),e.filter.filtersNodes())}}}return u}function Hi(e,t){return e.eventCache.isCompleteForChild(t)}function Bc(e,t,n,r,i,o,a){var s=t;return r.foreach(function(u,l){var c=D(n,u);Hi(t,b(c))&&(s=vr(e,s,c,l,i,o,a))}),r.foreach(function(u,l){var c=D(n,u);Hi(t,b(c))||(s=vr(e,s,c,l,i,o,a))}),s}function zi(e,t,n){return n.foreach(function(r,i){t=t.updateChild(r,i)}),t}function _r(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u=t,l;w(n)?l=r:l=new oe(null).setTree(n,r);var c=t.serverCache.getNode();return l.children.inorderTraversal(function(f,h){if(c.hasChild(f)){var d=t.serverCache.getNode().getImmediateChild(f),p=zi(e,d,h);u=cn(e,u,new N(f),p,i,o,a,s)}}),l.children.inorderTraversal(function(f,h){var d=!t.serverCache.isCompleteForChild(f)&&h.value===void 0;if(!c.hasChild(f)&&!d){var p=t.serverCache.getNode().getImmediateChild(f),_=zi(e,p,h);u=cn(e,u,new N(f),_,i,o,a,s)}}),u}function Gc(e,t,n,r,i,o,a){if(ln(i,n)!=null)return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(r.value!=null){if(w(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return cn(e,t,n,u.getNode().getChild(n),i,o,s,a);if(w(n)){var l=new oe(null);return u.getNode().forEachChild(ge,function(f,h){l=l.set(new N(f),h)}),_r(e,t,n,l,i,o,s,a)}else return t}else{var c=new oe(null);return r.foreach(function(f,h){var d=D(n,f);u.isCompleteForPath(d)&&(c=c.set(f,u.getNode().getChild(d)))}),_r(e,t,n,c,i,o,s,a)}}function jc(e,t,n,r,i){var o=t.serverCache,a=Ea(t,o.getNode(),o.isFullyInitialized()||w(n),o.isFiltered());return Ra(e,a,n,r,Ta,i)}function Hc(e,t,n,r,i,o){var a;if(ln(r,n)!=null)return t;var s=new zr(r,t,i),u=t.eventCache.getNode(),l=void 0;if(w(n)||b(n)===".priority"){var c=void 0;if(t.serverCache.isFullyInitialized())c=un(r,qe(t));else{var f=t.serverCache.getNode();g(f instanceof E,"serverChildren would be complete if leaf node"),c=jr(r,f)}c=c,l=e.filter.updateFullNode(u,c,o)}else{var h=b(n),d=Hr(r,h,t.serverCache);d==null&&t.serverCache.isCompleteForChild(h)&&(d=u.getImmediateChild(h)),d!=null?l=e.filter.updateChild(u,h,d,P(n),s,o):t.eventCache.getNode().hasChild(h)?l=e.filter.updateChild(u,h,E.EMPTY_NODE,P(n),s,o):l=u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=un(r,qe(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,o)))}return a=t.serverCache.isFullyInitialized()||ln(r,S())!=null,It(t,l,a,e.filter.filtersNodes())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zc=function(){function e(t,n){this.query_=t,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new Vr(r.getIndex()),o=ic(r);this.processor_=$c(o);var a=n.serverCache,s=n.eventCache,u=i.updateFullNode(E.EMPTY_NODE,a.getNode(),null),l=o.updateFullNode(E.EMPTY_NODE,s.getNode(),null),c=new Le(u,a.isFullyInitialized(),i.filtersNodes()),f=new Le(l,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=En(f,c),this.eventGenerator_=new gc(this.query_)}return Object.defineProperty(e.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),e}();function Qc(e){return e.viewCache_.serverCache.getNode()}function Yc(e){return sn(e.viewCache_)}function qc(e,t){var n=qe(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!w(t)&&!n.getImmediateChild(b(t)).isEmpty())?n.getChild(t):null}function Qi(e){return e.eventRegistrations_.length===0}function Kc(e,t){e.eventRegistrations_.push(t)}function Yi(e,t,n){var r=[];if(n){g(t==null,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach(function(u){var l=u.createCancelEvent(n,i);l&&r.push(l)})}if(t){for(var o=[],a=0;a<e.eventRegistrations_.length;++a){var s=e.eventRegistrations_[a];if(!s.matches(t))o.push(s);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(a+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function qi(e,t,n,r){t.type===pe.MERGE&&t.source.queryId!==null&&(g(qe(e.viewCache_),"We should always have a full cache before handling merges"),g(sn(e.viewCache_),"Missing event cache, even though we have a server cache"));var i=e.viewCache_,o=Wc(e.processor_,i,t,n,r);return Vc(e.processor_,o.viewCache),g(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Na(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Xc(e,t){var n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(x,function(o,a){r.push(ut(o,a))})}return n.isFullyInitialized()&&r.push(va(n.getNode())),Na(e,r,n.getNode(),t)}function Na(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return yc(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn,Aa=function(){function e(){this.views=new Map}return e}();function Jc(e){g(!fn,"__referenceConstructor has already been defined"),fn=e}function Zc(){return g(fn,"Reference.ts has not been loaded"),fn}function ef(e){return e.views.size===0}function Qr(e,t,n,r){var i,o,a=t.source.queryId;if(a!==null){var s=e.views.get(a);return g(s!=null,"SyncTree gave us an op for an invalid query."),qi(s,t,n,r)}else{var u=[];try{for(var l=re(e.views.values()),c=l.next();!c.done;c=l.next()){var s=c.value;u=u.concat(qi(s,t,n,r))}}catch(f){i={error:f}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}return u}}function Oa(e,t,n,r,i){var o=t._queryIdentifier,a=e.views.get(o);if(!a){var s=un(n,i?r:null),u=!1;s?u=!0:r instanceof E?(s=jr(n,r),u=!1):(s=E.EMPTY_NODE,u=!1);var l=En(new Le(s,u,!1),new Le(r,i,!1));return new zc(t,l)}return a}function tf(e,t,n,r,i,o){var a=Oa(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),Kc(a,n),Xc(a,n)}function nf(e,t,n,r){var i,o,a=t._queryIdentifier,s=[],u=[],l=Me(e);if(a==="default")try{for(var c=re(e.views.entries()),f=c.next();!f.done;f=c.next()){var h=X(f.value,2),d=h[0],p=h[1];u=u.concat(Yi(p,n,r)),Qi(p)&&(e.views.delete(d),p.query._queryParams.loadsAllData()||s.push(p.query))}}catch(_){i={error:_}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}else{var p=e.views.get(a);p&&(u=u.concat(Yi(p,n,r)),Qi(p)&&(e.views.delete(a),p.query._queryParams.loadsAllData()||s.push(p.query)))}return l&&!Me(e)&&s.push(new(Zc())(t._repo,t._path)),{removed:s,events:u}}function Pa(e){var t,n,r=[];try{for(var i=re(e.views.values()),o=i.next();!o.done;o=i.next()){var a=o.value;a.query._queryParams.loadsAllData()||r.push(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}function Pe(e,t){var n,r,i=null;try{for(var o=re(e.views.values()),a=o.next();!a.done;a=o.next()){var s=a.value;i=i||qc(s,t)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function xa(e,t){var n=t._queryParams;if(n.loadsAllData())return bn(e);var r=t._queryIdentifier;return e.views.get(r)}function ka(e,t){return xa(e,t)!=null}function Me(e){return bn(e)!=null}function bn(e){var t,n;try{for(var r=re(e.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(a){t={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;function rf(e){g(!hn,"__referenceConstructor has already been defined"),hn=e}function of(){return g(hn,"Reference.ts has not been loaded"),hn}var af=1,Ki=function(){function e(t){this.listenProvider_=t,this.syncPointTree_=new oe(null),this.pendingWriteTree_=Dc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return e}();function Yr(e,t,n,r,i){return bc(e.pendingWriteTree_,t,n,r,i),i?pt(e,new mn(Wr(),t,n)):[]}function sf(e,t,n,r){wc(e.pendingWriteTree_,t,n,r);var i=oe.fromObject(n);return pt(e,new Gr(Wr(),t,i))}function Ne(e,t,n){n===void 0&&(n=!1);var r=Ic(e.pendingWriteTree_,t),i=Sc(e.pendingWriteTree_,t);if(i){var o=new oe(null);return r.snap!=null?o=o.set(S(),!0):W(r.children,function(a){o=o.set(new N(a),!0)}),pt(e,new _c(r.path,o,n))}else return[]}function Ut(e,t,n){return pt(e,new mn(Ur(),t,n))}function uf(e,t,n){var r=oe.fromObject(n);return pt(e,new Gr(Ur(),t,r))}function lf(e,t){return pt(e,new ma(Ur(),t))}function cf(e,t,n){var r=qr(e,n);if(r){var i=Kr(r),o=i.path,a=i.queryId,s=J(o,t),u=new ma(Br(a),s);return Xr(e,o,u)}else return[]}function gr(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),a=[];if(o&&(t._queryIdentifier==="default"||ka(o,t))){var s=nf(o,t,n,r);ef(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));var u=s.removed;a=s.events;var l=u.findIndex(function(C){return C._queryParams.loadsAllData()})!==-1,c=e.syncPointTree_.findOnPath(i,function(C,A){return Me(A)});if(l&&!c){var f=e.syncPointTree_.subtree(i);if(!f.isEmpty())for(var h=pf(f),d=0;d<h.length;++d){var p=h[d],_=p.query,v=Ma(e,p);e.listenProvider_.startListening(Tt(_),dn(e,_),v.hashFn,v.onComplete)}}if(!c&&u.length>0&&!r)if(l){var y=null;e.listenProvider_.stopListening(Tt(t),y)}else u.forEach(function(C){var A=e.queryToTagMap.get(In(C));e.listenProvider_.stopListening(Tt(C),A)});vf(e,u)}return a}function ff(e,t,n,r){var i=qr(e,r);if(i!=null){var o=Kr(i),a=o.path,s=o.queryId,u=J(a,t),l=new mn(Br(s),u,n);return Xr(e,a,l)}else return[]}function hf(e,t,n,r){var i=qr(e,r);if(i){var o=Kr(i),a=o.path,s=o.queryId,u=J(a,t),l=oe.fromObject(n),c=new Gr(Br(s),u,l);return Xr(e,a,c)}else return[]}function Xi(e,t,n){var r=t._path,i=null,o=!1;e.syncPointTree_.foreachOnPath(r,function(_,v){var y=J(_,r);i=i||Pe(v,y),o=o||Me(v)});var a=e.syncPointTree_.get(r);a?(o=o||Me(a),i=i||Pe(a,S())):(a=new Aa,e.syncPointTree_=e.syncPointTree_.set(r,a));var s;if(i!=null)s=!0;else{s=!1,i=E.EMPTY_NODE;var u=e.syncPointTree_.subtree(r);u.foreachChild(function(_,v){var y=Pe(v,S());y&&(i=i.updateImmediateChild(_,y))})}var l=ka(a,t);if(!l&&!t._queryParams.loadsAllData()){var c=In(t);g(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");var f=_f();e.queryToTagMap.set(c,f),e.tagToQueryMap.set(f,c)}var h=Cn(e.pendingWriteTree_,r),d=tf(a,t,n,h,i,s);if(!l&&!o){var p=xa(a,t);d=d.concat(gf(e,t,p))}return d}function wn(e,t,n){var r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,function(a,s){var u=J(a,t),l=Pe(s,u);if(l)return l});return wa(i,t,o,n,r)}function df(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,function(l,c){var f=J(l,n);r=r||Pe(c,f)});var i=e.syncPointTree_.get(n);i?r=r||Pe(i,S()):(i=new Aa,e.syncPointTree_=e.syncPointTree_.set(n,i));var o=r!=null,a=o?new Le(r,!0,!1):null,s=Cn(e.pendingWriteTree_,t._path),u=Oa(i,t,s,o?a.getNode():E.EMPTY_NODE,o);return Yc(u)}function pt(e,t){return Da(t,e.syncPointTree_,null,Cn(e.pendingWriteTree_,S()))}function Da(e,t,n,r){if(w(e.path))return La(e,t,n,r);var i=t.get(S());n==null&&i!=null&&(n=Pe(i,S()));var o=[],a=b(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var l=n?n.getImmediateChild(a):null,c=Ia(r,a);o=o.concat(Da(s,u,l,c))}return i&&(o=o.concat(Qr(i,e,r,n))),o}function La(e,t,n,r){var i=t.get(S());n==null&&i!=null&&(n=Pe(i,S()));var o=[];return t.children.inorderTraversal(function(a,s){var u=n?n.getImmediateChild(a):null,l=Ia(r,a),c=e.operationForChild(a);c&&(o=o.concat(La(c,s,u,l)))}),i&&(o=o.concat(Qr(i,e,r,n))),o}function Ma(e,t){var n=t.query,r=dn(e,n);return{hashFn:function(){var i=Qc(t)||E.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?cf(e,n._path,r):lf(e,n._path);var o=tl(i,n);return gr(e,n,null,o)}}}function dn(e,t){var n=In(t);return e.queryToTagMap.get(n)}function In(e){return e._path.toString()+"$"+e._queryIdentifier}function qr(e,t){return e.tagToQueryMap.get(t)}function Kr(e){var t=e.indexOf("$");return g(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new N(e.substr(0,t))}}function Xr(e,t,n){var r=e.syncPointTree_.get(t);g(r,"Missing sync point for query tag that we're tracking");var i=Cn(e.pendingWriteTree_,t);return Qr(r,n,i,null)}function pf(e){return e.fold(function(t,n,r){if(n&&Me(n)){var i=bn(n);return[i]}else{var o=[];return n&&(o=Pa(n)),W(r,function(a,s){o=o.concat(s)}),o}})}function Tt(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(of())(e._repo,e._path):e}function vf(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=In(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function _f(){return af++}function gf(e,t,n){var r=t._path,i=dn(e,t),o=Ma(e,n),a=e.listenProvider_.startListening(Tt(t),i,o.hashFn,o.onComplete),s=e.syncPointTree_.subtree(r);if(i)g(!Me(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold(function(f,h,d){if(!w(f)&&h&&Me(h))return[bn(h).query];var p=[];return h&&(p=p.concat(Pa(h).map(function(_){return _.query}))),W(d,function(_,v){p=p.concat(v)}),p}),l=0;l<u.length;++l){var c=u[l];e.listenProvider_.stopListening(Tt(c),dn(e,c))}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yf=function(){function e(t){this.node_=t}return e.prototype.getImmediateChild=function(t){var n=this.node_.getImmediateChild(t);return new e(n)},e.prototype.node=function(){return this.node_},e}(),mf=function(){function e(t,n){this.syncTree_=t,this.path_=n}return e.prototype.getImmediateChild=function(t){var n=D(this.path_,t);return new e(this.syncTree_,n)},e.prototype.node=function(){return wn(this.syncTree_,this.path_)},e}(),Ef=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Ji=function(e,t,n){if(!e||typeof e!="object")return e;if(g(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return Cf(e[".sv"],t,n);if(typeof e[".sv"]=="object")return bf(e[".sv"],t);g(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},Cf=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+e)}},bf=function(e,t,n){e.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;typeof r!="number"&&g(!1,"Unexpected increment value: "+r);var i=t.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,a=o.getValue();return typeof a!="number"?r:a+r},Fa=function(e,t,n,r){return Zr(t,new mf(n,e),r)},Jr=function(e,t,n){return Zr(e,new yf(t),n)};function Zr(e,t,n){var r=e.getPriority().val(),i=Ji(r,t.getImmediateChild(".priority"),n),o;if(e.isLeafNode()){var a=e,s=Ji(a.getValue(),t,n);return s!==a.getValue()||i!==a.getPriority().val()?new at(s,L(i)):e}else{var u=e;return o=u,i!==u.getPriority().val()&&(o=o.updatePriority(new at(i))),u.forEachChild(x,function(l,c){var f=Zr(c,t.getImmediateChild(l),n);f!==c&&(o=o.updateImmediateChild(l,f))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei=function(){function e(t,n,r){t===void 0&&(t=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=t,this.parent=n,this.node=r}return e}();function Sn(e,t){for(var n=t instanceof N?t:new N(t),r=e,i=b(n);i!==null;){var o=Ye(r.node.children,i)||{children:{},childCount:0};r=new ei(i,r,o),n=P(n),i=b(n)}return r}function et(e){return e.node.value}function ti(e,t){e.node.value=t,yr(e)}function $a(e){return e.node.childCount>0}function wf(e){return et(e)===void 0&&!$a(e)}function Tn(e,t){W(e.node.children,function(n,r){t(new ei(n,e,r))})}function Va(e,t,n,r){n&&!r&&t(e),Tn(e,function(i){Va(i,t,!0,r)}),n&&r&&t(e)}function If(e,t,n){for(var r=n?e:e.parent;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Bt(e){return new N(e.parent===null?e.name:Bt(e.parent)+"/"+e.name)}function yr(e){e.parent!==null&&Sf(e.parent,e.name,e)}function Sf(e,t,n){var r=wf(n),i=ie(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,yr(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,yr(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tf=/[\[\].#$\/\u0000-\u001F\u007F]/,Rf=/[\[\].#$\u0000-\u001F\u007F]/,zn=10*1024*1024,Rn=function(e){return typeof e=="string"&&e.length!==0&&!Tf.test(e)},Wa=function(e){return typeof e=="string"&&e.length!==0&&!Rf.test(e)},Nf=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Wa(e)},Dt=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!_n(e)||e&&typeof e=="object"&&ie(e,".sv")},Ee=function(e,t,n,r){r&&t===void 0||Gt(ne(e,"value"),t,n)},Gt=function(e,t,n){var r=n instanceof N?new Ll(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Be(r));if(typeof t=="function")throw new Error(e+"contains a function "+Be(r)+" with contents = "+t.toString());if(_n(t))throw new Error(e+"contains "+t.toString()+" "+Be(r));if(typeof t=="string"&&t.length>zn/3&&vn(t)>zn)throw new Error(e+"contains a string greater than "+zn+" utf8 bytes "+Be(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){var i=!1,o=!1;if(W(t,function(a,s){if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!Rn(a)))throw new Error(e+" contains an invalid key ("+a+") "+Be(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ml(r,a),Gt(e,s,r),Fl(r)}),i&&o)throw new Error(e+' contains ".value" child '+Be(r)+" in addition to actual children.")}},Af=function(e,t){var n,r;for(n=0;n<t.length;n++){r=t[n];for(var i=Pt(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Rn(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(Dl);var a=null;for(n=0;n<t.length;n++){if(r=t[n],a!==null&&se(a,r))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString());a=r}},Ua=function(e,t,n,r){if(!(r&&t===void 0)){var i=ne(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var o=[];W(t,function(a,s){var u=new N(a);if(Gt(i,s,D(n,u)),Dr(u)===".priority"&&!Dt(s))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(u)}),Af(i,o)}},ni=function(e,t,n){if(!(n&&t===void 0)){if(_n(t))throw new Error(ne(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Dt(t))throw new Error(ne(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Of=function(e,t,n){if(!(n&&t===void 0))switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ne(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},jt=function(e,t,n,r){if(!(r&&n===void 0)&&!Rn(n))throw new Error(ne(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Lt=function(e,t,n,r){if(!(r&&n===void 0)&&!Wa(n))throw new Error(ne(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Pf=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lt(e,t,n,r)},ue=function(e,t){if(b(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Ba=function(e,t){var n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Rn(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Nf(n))throw new Error(ne(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},xf=function(e,t,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(ne(e,t)+"must be a boolean.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kf=function(){function e(){this.eventLists_=[],this.recursionDepth_=0}return e}();function Nn(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();n!==null&&!Lr(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ri(e,t,n){Nn(e,n),Ga(e,function(r){return Lr(r,t)})}function le(e,t,n){Nn(e,n),Ga(e,function(r){return se(r,t)||se(t,r)})}function Ga(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var o=i.path;t(o)?(Df(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Df(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(n!==null){e.events[t]=null;var r=n.getEventRunner();ze&&B("event: "+n.toString()),ht(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ja="repo_interrupt",Lf=25,Mf=function(){function e(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=an(),this.transactionQueueTree_=new ei,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function Ff(e,t,n){if(e.stats_=xr(e.repoInfo_),e.forceRestClient_||rl())e.server_=new lc(e.repoInfo_,function(r,i,o,a){Zi(e,r,i,o,a)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(function(){return eo(e,!0)},0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Qe(e.repoInfo_,t,function(r,i,o,a){Zi(e,r,i,o,a)},function(r){eo(e,r)},function(r){Vf(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(function(r){e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(function(r){e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=ll(e.repoInfo_,function(){return new pc(e.stats_,e.server_)}),e.infoData_=new cc,e.infoSyncTree_=new Ki({startListening:function(r,i,o,a){var s=[],u=e.infoData_.getNode(r._path);return u.isEmpty()||(s=Ut(e.infoSyncTree_,r._path,u),setTimeout(function(){a("ok")},0)),s},stopListening:function(){}}),ii(e,"connected",!1),e.serverSyncTree_=new Ki({startListening:function(r,i,o,a){return e.server_.listen(r,o,i,function(s,u){var l=a(s,u);le(e.eventQueue_,r._path,l)}),[]},stopListening:function(r,i){e.server_.unlisten(r,i)}})}function Ha(e){var t=e.infoData_.getNode(new N(".info/serverTimeOffset")),n=t.val()||0;return new Date().getTime()+n}function Ht(e){return Ef({timestamp:Ha(e)})}function Zi(e,t,n,r,i){e.dataUpdateCount++;var o=new N(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=Zt(n,function(h){return L(h)});a=hf(e.serverSyncTree_,o,s,i)}else{var u=L(n);a=ff(e.serverSyncTree_,o,u,i)}else if(r){var l=Zt(n,function(h){return L(h)});a=uf(e.serverSyncTree_,o,l)}else{var c=L(n);a=Ut(e.serverSyncTree_,o,c)}var f=o;a.length>0&&(f=ct(e,o)),le(e.eventQueue_,f,a)}function $f(e,t){e.interceptServerDataCallback_=t}function eo(e,t){ii(e,"connected",t),t===!1&&Bf(e)}function Vf(e,t){W(t,function(n,r){ii(e,n,r)})}function ii(e,t,n){var r=new N("/.info/"+t),i=L(n);e.infoData_.updateSnapshot(r,i);var o=Ut(e.infoSyncTree_,r,i);le(e.eventQueue_,r,o)}function An(e){return e.nextWriteId_++}function Wf(e,t){var n=df(e.serverSyncTree_,t);return n!=null?Promise.resolve(n):e.server_.get(t).then(function(r){var i=L(r).withIndex(t._queryParams.getIndex()),o=Ut(e.serverSyncTree_,t._path,i);return ri(e.eventQueue_,t._path,o),Promise.resolve(i)},function(r){return vt(e,"get for query "+V(t)+" failed: "+r),Promise.reject(new Error(r))})}function oi(e,t,n,r,i){vt(e,"set",{path:t.toString(),value:n,priority:r});var o=Ht(e),a=L(n,r),s=wn(e.serverSyncTree_,t),u=Jr(a,s,o),l=An(e),c=Yr(e.serverSyncTree_,t,u,l,!0);Nn(e.eventQueue_,c),e.server_.put(t.toString(),a.val(!0),function(h,d){var p=h==="ok";p||H("set at "+t+" failed: "+h);var _=Ne(e.serverSyncTree_,l,!p);le(e.eventQueue_,t,_),Fe(e,i,h,d)});var f=si(e,t);ct(e,f),le(e.eventQueue_,f,[])}function Uf(e,t,n,r){vt(e,"update",{path:t.toString(),value:n});var i=!0,o=Ht(e),a={};if(W(n,function(l,c){i=!1,a[l]=Fa(D(t,l),L(c),e.serverSyncTree_,o)}),i)B("update() called with empty data.  Don't do anything."),Fe(e,r,"ok",void 0);else{var s=An(e),u=sf(e.serverSyncTree_,t,a,s);Nn(e.eventQueue_,u),e.server_.merge(t.toString(),n,function(l,c){var f=l==="ok";f||H("update at "+t+" failed: "+l);var h=Ne(e.serverSyncTree_,s,!f),d=h.length>0?ct(e,t):t;le(e.eventQueue_,d,h),Fe(e,r,l,c)}),W(n,function(l){var c=si(e,D(t,l));ct(e,c)}),le(e.eventQueue_,t,[])}}function Bf(e){vt(e,"onDisconnectEvents");var t=Ht(e),n=an();fr(e.onDisconnect_,S(),function(i,o){var a=Fa(i,o,e.serverSyncTree_,t);dt(n,i,a)});var r=[];fr(n,S(),function(i,o){r=r.concat(Ut(e.serverSyncTree_,i,o));var a=si(e,i);ct(e,a)}),e.onDisconnect_=an(),le(e.eventQueue_,S(),r)}function Gf(e,t,n){e.server_.onDisconnectCancel(t.toString(),function(r,i){r==="ok"&&cr(e.onDisconnect_,t),Fe(e,n,r,i)})}function to(e,t,n,r){var i=L(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),function(o,a){o==="ok"&&dt(e.onDisconnect_,t,i),Fe(e,r,o,a)})}function jf(e,t,n,r,i){var o=L(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),function(a,s){a==="ok"&&dt(e.onDisconnect_,t,o),Fe(e,i,a,s)})}function Hf(e,t,n,r){if(nr(n)){B("onDisconnect().update() called with empty data.  Don't do anything."),Fe(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,function(i,o){i==="ok"&&W(n,function(a,s){var u=L(s);dt(e.onDisconnect_,D(t,a),u)}),Fe(e,r,i,o)})}function zf(e,t,n){var r;b(t._path)===".info"?r=Xi(e.infoSyncTree_,t,n):r=Xi(e.serverSyncTree_,t,n),ri(e.eventQueue_,t._path,r)}function mr(e,t,n){var r;b(t._path)===".info"?r=gr(e.infoSyncTree_,t,n):r=gr(e.serverSyncTree_,t,n),ri(e.eventQueue_,t._path,r)}function za(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ja)}function Qf(e){e.persistentConnection_&&e.persistentConnection_.resume(ja)}function Yf(e,t){if(t===void 0&&(t=!1),!(typeof console>"u")){var n;t?(e.statsListener_||(e.statsListener_=new ya(e.stats_)),n=e.statsListener_.get()):n=e.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);W(n,function(i,o){for(var a=i,s=i.length;s<r+2;s++)a+=" ";console.log(a+o)})}}function qf(e,t){e.stats_.incrementCounter(t),vc(e.statsReporter_,t)}function vt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),B.apply(void 0,ke([r],X(t)))}function Fe(e,t,n,r){t&&ht(function(){if(n==="ok")t(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var a=new Error(o);a.code=i,t(a)}})}function Kf(e,t,n,r,i,o){vt(e,"transaction on "+t);var a={path:t,update:n,onComplete:r,status:null,order:Fo(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},s=ai(e,t,void 0);a.currentInputSnapshot=s;var u=a.update(s.val());if(u===void 0)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Gt("transaction failed: Data returned ",u,a.path),a.status=0;var l=Sn(e.transactionQueueTree_,t),c=et(l)||[];c.push(a),ti(l,c);var f=void 0;if(typeof u=="object"&&u!==null&&ie(u,".priority"))f=Ye(u,".priority"),g(Dt(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=wn(e.serverSyncTree_,t)||E.EMPTY_NODE;f=h.getPriority().val()}var d=Ht(e),p=L(u,f),_=Jr(p,s,d);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=_,a.currentWriteId=An(e);var v=Yr(e.serverSyncTree_,t,_,a.currentWriteId,a.applyLocally);le(e.eventQueue_,t,v),On(e,e.transactionQueueTree_)}}function ai(e,t,n){return wn(e.serverSyncTree_,t,n)||E.EMPTY_NODE}function On(e,t){if(t===void 0&&(t=e.transactionQueueTree_),t||Pn(e,t),et(t)){var n=Ya(e,t);g(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&Xf(e,Bt(t),n)}else $a(t)&&Tn(t,function(i){On(e,i)})}function Xf(e,t,n){for(var r=n.map(function(h){return h.currentWriteId}),i=ai(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var l=J(t,u.path);o=o.updateChild(l,u.currentOutputSnapshotRaw)}var c=o.val(!0),f=t;e.server_.put(f.toString(),c,function(h){vt(e,"transaction put response",{path:f.toString(),status:h});var d=[];if(h==="ok"){for(var p=[],_=function(y){n[y].status=2,d=d.concat(Ne(e.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&p.push(function(){return n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)}),n[y].unwatcher()},v=0;v<n.length;v++)_(v);Pn(e,Sn(e.transactionQueueTree_,t)),On(e,e.transactionQueueTree_),le(e.eventQueue_,t,d);for(var v=0;v<p.length;v++)ht(p[v])}else{if(h==="datastale")for(var v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{H("transaction at "+f.toString()+" failed: "+h);for(var v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=h}ct(e,t)}},a)}function ct(e,t){var n=Qa(e,t),r=Bt(n),i=Ya(e,n);return Jf(e,i,r),r}function Jf(e,t,n){if(t.length!==0){for(var r=[],i=[],o=t.filter(function(l){return l.status===0}),a=o.map(function(l){return l.currentWriteId}),s=function(l){var c=t[l],f=J(n,c.path),h=!1,d;if(g(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(Ne(e.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Lf)h=!0,d="maxretry",i=i.concat(Ne(e.serverSyncTree_,c.currentWriteId,!0));else{var p=ai(e,c.path,a);c.currentInputSnapshot=p;var _=t[l].update(p.val());if(_!==void 0){Gt("transaction failed: Data returned ",_,c.path);var v=L(_),y=typeof _=="object"&&_!=null&&ie(_,".priority");y||(v=v.updatePriority(p.getPriority()));var C=c.currentWriteId,A=Ht(e),Z=Jr(v,p,A);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=Z,c.currentWriteId=An(e),a.splice(a.indexOf(C),1),i=i.concat(Yr(e.serverSyncTree_,c.path,Z,c.currentWriteId,c.applyLocally)),i=i.concat(Ne(e.serverSyncTree_,C,!0))}else h=!0,d="nodata",i=i.concat(Ne(e.serverSyncTree_,c.currentWriteId,!0))}le(e.eventQueue_,n,i),i=[],h&&(t[l].status=2,function(ee){setTimeout(ee,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(d==="nodata"?r.push(function(){return t[l].onComplete(null,!1,t[l].currentInputSnapshot)}):r.push(function(){return t[l].onComplete(new Error(d),!1,null)})))},u=0;u<t.length;u++)s(u);Pn(e,e.transactionQueueTree_);for(var u=0;u<r.length;u++)ht(r[u]);On(e,e.transactionQueueTree_)}}function Qa(e,t){var n,r=e.transactionQueueTree_;for(n=b(t);n!==null&&et(r)===void 0;)r=Sn(r,n),t=P(t),n=b(t);return r}function Ya(e,t){var n=[];return qa(e,t,n),n.sort(function(r,i){return r.order-i.order}),n}function qa(e,t,n){var r=et(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Tn(t,function(o){qa(e,o,n)})}function Pn(e,t){var n=et(t);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ti(t,n.length>0?n:void 0)}Tn(t,function(o){Pn(e,o)})}function si(e,t){var n=Bt(Qa(e,t)),r=Sn(e.transactionQueueTree_,t);return If(r,function(i){Qn(e,i)}),Qn(e,r),Va(r,function(i){Qn(e,i)}),n}function Qn(e,t){var n=et(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(g(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(g(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(Ne(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ti(t,void 0):n.length=o+1,le(e.eventQueue_,Bt(t),i);for(var a=0;a<r.length;a++)ht(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function eh(e){var t,n,r={};e.charAt(0)==="?"&&(e=e.substring(1));try{for(var i=re(e.split("&")),o=i.next();!o.done;o=i.next()){var a=o.value;if(a.length!==0){var s=a.split("=");s.length===2?r[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):H("Invalid query segment '"+a+"' in query '"+e+"'")}}}catch(u){t={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}var Er=function(e,t){var n=th(e),r=n.namespace;n.domain==="firebase.com"&&ye(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ye("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ku();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pr(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new N(n.pathString)}},th=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if(typeof e=="string"){var l=e.indexOf("//");l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));var c=e.indexOf("/");c===-1&&(c=e.length);var f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(i=Zf(e.substring(c,f)));var h=eh(e.substring(Math.min(e.length,f)));l=t.indexOf(":"),l>=0?(a=s==="https"||s==="wss",u=parseInt(t.substring(l+1),10)):l=t.length;var d=t.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in h&&(o=h.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ka=function(){function e(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return e.prototype.getPath=function(){var t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())},e}(),Xa=function(){function e(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path.toString()+":cancel"},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja=function(){function e(t,n){this.snapshotCallback=t,this.cancelCallback=n}return e.prototype.onValue=function(t,n){this.snapshotCallback.call(null,t,n)},e.prototype.onCancel=function(t){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)},Object.defineProperty(e.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),e.prototype.matches=function(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context},e}();/**
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
 */var nh=function(){function e(t,n){this._repo=t,this._path=n}return e.prototype.cancel=function(){var t=new te;return Gf(this._repo,this._path,t.wrapCallback(function(){})),t.promise},e.prototype.remove=function(){ue("OnDisconnect.remove",this._path);var t=new te;return to(this._repo,this._path,null,t.wrapCallback(function(){})),t.promise},e.prototype.set=function(t){ue("OnDisconnect.set",this._path),Ee("OnDisconnect.set",t,this._path,!1);var n=new te;return to(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e.prototype.setWithPriority=function(t,n){ue("OnDisconnect.setWithPriority",this._path),Ee("OnDisconnect.setWithPriority",t,this._path,!1),ni("OnDisconnect.setWithPriority",n,!1);var r=new te;return jf(this._repo,this._path,t,n,r.wrapCallback(function(){})),r.promise},e.prototype.update=function(t){ue("OnDisconnect.update",this._path),Ua("OnDisconnect.update",t,this._path,!1);var n=new te;return Hf(this._repo,this._path,t,n.wrapCallback(function(){})),n.promise},e}();/**
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
 */var ce=function(){function e(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(e.prototype,"key",{get:function(){return w(this._path)?null:Dr(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ref",{get:function(){return new Ce(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryIdentifier",{get:function(){var t=Wi(this._queryParams),n=Nr(t);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_queryObject",{get:function(){return Wi(this._queryParams)},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){if(t=ae(t),!(t instanceof e))return!1;var n=this._repo===t._repo,r=Lr(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i},e.prototype.toJSON=function(){return this.toString()},e.prototype.toString=function(){return this._repo.toString()+kl(this._path)},e}();function xn(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function $e(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===ge){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var o=e.getIndexStartName();if(o!==Ie)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){var a=e.getIndexEndName();if(a!==me)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===x){if(t!=null&&!Dt(t)||n!=null&&!Dt(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(g(e.getIndex()instanceof Fr||e.getIndex()===$r,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function kn(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var Ce=function(e){M(t,e);function t(n,r){return e.call(this,n,r,new ga,!1)||this}return Object.defineProperty(t.prototype,"parent",{get:function(){var n=aa(this._path);return n===null?null:new t(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),t}(ce),Dn=function(){function e(t,n,r){this._node=t,this.ref=n,this._index=r}return Object.defineProperty(e.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),e.prototype.child=function(t){var n=new N(t),r=Ke(this.ref,t);return new e(this._node.getChild(n),r,x)},e.prototype.exists=function(){return!this._node.isEmpty()},e.prototype.exportVal=function(){return this._node.val(!0)},e.prototype.forEach=function(t){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return t(new e(o,Ke(n.ref,i),x))})},e.prototype.hasChild=function(t){var n=new N(t);return!this._node.getChild(n).isEmpty()},e.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},e.prototype.toJSON=function(){return this.exportVal()},e.prototype.val=function(){return this._node.val()},e}();function Za(e,t){return e=ae(e),e._checkNotDeleted("ref"),t!==void 0?Ke(e._root,t):e._root}function no(e,t){e=ae(e),e._checkNotDeleted("refFromURL");var n=Er(t,e._repo.repoInfo_.nodeAdmin);Ba("refFromURL",n);var r=n.repoInfo;return!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host&&ye("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Za(e,n.path.toString())}function Ke(e,t){return e=ae(e),b(e._path)===null?Pf("child","path",t,!1):Lt("child","path",t,!1),new Ce(e._repo,D(e._path,t))}function rh(e,t){e=ae(e),ue("push",e._path),Ee("push",t,e._path,!0);var n=Ha(e._repo),r=tc(n),i=Ke(e,r),o=Ke(e,r),a;return t!=null?a=ui(o,t).then(function(){return o}):a=Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function ih(e){return ue("remove",e._path),ui(e,null)}function ui(e,t){e=ae(e),ue("set",e._path),Ee("set",t,e._path,!1);var n=new te;return oi(e._repo,e._path,t,null,n.wrapCallback(function(){})),n.promise}function oh(e,t){e=ae(e),ue("setPriority",e._path),ni("setPriority",t,!1);var n=new te;return oi(e._repo,D(e._path,".priority"),t,null,n.wrapCallback(function(){})),n.promise}function ah(e,t,n){if(ue("setWithPriority",e._path),Ee("setWithPriority",t,e._path,!1),ni("setWithPriority",n,!1),e.key===".length"||e.key===".keys")throw"setWithPriority failed: "+e.key+" is a read-only object.";var r=new te;return oi(e._repo,e._path,t,n,r.wrapCallback(function(){})),r.promise}function sh(e,t){Ua("update",t,e._path,!1);var n=new te;return Uf(e._repo,e._path,t,n.wrapCallback(function(){})),n.promise}function uh(e){return e=ae(e),Wf(e._repo,e).then(function(t){return new Dn(t,new Ce(e._repo,e._path),e._queryParams.getIndex())})}var es=function(){function e(t){this.callbackContext=t}return e.prototype.respondsTo=function(t){return t==="value"},e.prototype.createEvent=function(t,n){var r=n._queryParams.getIndex();return new Ka("value",this,new Dn(t.snapshotNode,new Ce(n._repo,n._path),r))},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,null)}},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Xa(this,t,n):null},e.prototype.matches=function(t){return t instanceof e?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1},e.prototype.hasAnyCallback=function(){return this.callbackContext!==null},e}(),ts=function(){function e(t,n){this.eventType=t,this.callbackContext=n}return e.prototype.respondsTo=function(t){var n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n},e.prototype.createCancelEvent=function(t,n){return this.callbackContext.hasCancelCallback?new Xa(this,t,n):null},e.prototype.createEvent=function(t,n){g(t.childName!=null,"Child events should have a childName.");var r=Ke(new Ce(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Ka(t.type,this,new Dn(t.snapshotNode,r,i),t.prevName)},e.prototype.getEventRunner=function(t){var n=this;return t.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(t.error)}:function(){return n.callbackContext.onValue(t.snapshot,t.prevName)}},e.prototype.matches=function(t){return t instanceof e?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1},e.prototype.hasAnyCallback=function(){return!!this.callbackContext},e}();function zt(e,t,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var a=n,s=function(c,f){mr(e._repo,e,l),a(c,f)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u=new Ja(n,o||void 0),l=t==="value"?new es(u):new ts(t,u);return zf(e._repo,e,l),function(){return mr(e._repo,e,l)}}function Cr(e,t,n,r){return zt(e,"value",t,n,r)}function ro(e,t,n,r){return zt(e,"child_added",t,n,r)}function io(e,t,n,r){return zt(e,"child_changed",t,n,r)}function oo(e,t,n,r){return zt(e,"child_moved",t,n,r)}function ao(e,t,n,r){return zt(e,"child_removed",t,n,r)}function so(e,t,n){var r=null,i=n?new Ja(n):null;t==="value"?r=new es(i):t&&(r=new ts(t,i)),mr(e._repo,e,r)}var ve=function(){function e(){}return e}(),ns=function(e){M(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ee("endAt",this._value,n._path,!0);var r=lr(n._queryParams,this._value,this._key);if(kn(r),$e(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ce(n._repo,n._path,r,n._orderByCalled)},t}(ve);function lh(e,t){return jt("endAt","key",t,!0),new ns(e,t)}var ch=function(e){M(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ee("endBefore",this._value,n._path,!1);var r=uc(n._queryParams,this._value,this._key);if(kn(r),$e(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ce(n._repo,n._path,r,n._orderByCalled)},t}(ve);function fh(e,t){return jt("endBefore","key",t,!0),new ch(e,t)}var rs=function(e){M(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ee("startAt",this._value,n._path,!0);var r=ur(n._queryParams,this._value,this._key);if(kn(r),$e(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ce(n._repo,n._path,r,n._orderByCalled)},t}(ve);function hh(e,t){return e===void 0&&(e=null),jt("startAt","key",t,!0),new rs(e,t)}var dh=function(e){M(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){Ee("startAfter",this._value,n._path,!1);var r=sc(n._queryParams,this._value,this._key);if(kn(r),$e(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ce(n._repo,n._path,r,n._orderByCalled)},t}(ve);function ph(e,t){return jt("startAfter","key",t,!0),new dh(e,t)}var vh=function(e){M(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ce(n._repo,n._path,oc(n._queryParams,this._limit),n._orderByCalled)},t}(ve);function _h(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new vh(e)}var gh=function(e){M(t,e);function t(n){var r=e.call(this)||this;return r._limit=n,r}return t.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ce(n._repo,n._path,ac(n._queryParams,this._limit),n._orderByCalled)},t}(ve);function yh(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new gh(e)}var mh=function(e){M(t,e);function t(n){var r=e.call(this)||this;return r._path=n,r}return t.prototype._apply=function(n){xn(n,"orderByChild");var r=new N(this._path);if(w(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Fr(r),o=yn(n._queryParams,i);return $e(o),new ce(n._repo,n._path,o,!0)},t}(ve);function Eh(e){if(e==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(e==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(e==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Lt("orderByChild","path",e,!1),new mh(e)}var Ch=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){xn(n,"orderByKey");var r=yn(n._queryParams,ge);return $e(r),new ce(n._repo,n._path,r,!0)},t}(ve);function bh(){return new Ch}var wh=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){xn(n,"orderByPriority");var r=yn(n._queryParams,x);return $e(r),new ce(n._repo,n._path,r,!0)},t}(ve);function Ih(){return new wh}var Sh=function(e){M(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._apply=function(n){xn(n,"orderByValue");var r=yn(n._queryParams,$r);return $e(r),new ce(n._repo,n._path,r,!0)},t}(ve);function Th(){return new Sh}var Rh=function(e){M(t,e);function t(n,r){var i=e.call(this)||this;return i._value=n,i._key=r,i}return t.prototype._apply=function(n){if(Ee("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ns(this._value,this._key)._apply(new rs(this._value,this._key)._apply(n))},t}(ve);function Nh(e,t){return jt("equalTo","key",t,!0),new Rh(e,t)}function fe(e){for(var t,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=ae(e);try{for(var a=re(r),s=a.next();!s.done;s=a.next()){var u=s.value;o=u._apply(o)}}catch(l){t={error:l}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o}Jc(Ce);rf(Ce);/**
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
 */var Ah="FIREBASE_DATABASE_EMULATOR_HOST",br={},is=!1;function Oh(e,t,n,r){e.repoInfo_=new Pr(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function os(e,t,n,r,i){var o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||ye("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),B("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var a=Er(o,i),s=a.repoInfo,u,l=void 0;typeof process<"u"&&(l=process.env[Ah]),l?(u=!0,o="http://"+l+"?ns="+s.namespace,a=Er(o,i),s=a.repoInfo):u=!a.repoInfo.secure;var c=i&&u?new wt(wt.OWNER):new ol(e.name,e.options,t);Ba("Invalid Firebase Database URL",a),w(a.path)||ye("Database URL must point to the root of a Firebase Database (not including a child path).");var f=xh(s,e,c,new il(e.name,n));return new Dh(f,e)}function Ph(e,t){var n=br[t];(!n||n[e.key]!==e)&&ye("Database "+t+"("+e.repoInfo_+") has already been deleted."),za(e),delete n[e.key]}function xh(e,t,n,r){var i=br[t.name];i||(i={},br[t.name]=i);var o=i[e.toURLString()];return o&&ye("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Mf(e,is,n,r),i[e.toURLString()]=o,o}function kh(e){is=e}var Dh=function(){function e(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(e.prototype,"_repo",{get:function(){return this._instanceStarted||(Ff(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,S())),this._rootInternal},enumerable:!1,configurable:!0}),e.prototype._delete=function(){return this._rootInternal!==null&&(Ph(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},e.prototype._checkNotDeleted=function(t){this._rootInternal===null&&ye("Cannot call "+t+" on a deleted database.")},e}();function Lh(e,t,n,r){r===void 0&&(r={}),e=ae(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ye("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ye('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wt(wt.OWNER);else if(r.mockUserToken){var a=typeof r.mockUserToken=="string"?r.mockUserToken:eu(r.mockUserToken,e.app.options.projectId);o=new wt(a)}Oh(i,t,n,o)}function Mh(e){e=ae(e),e._checkNotDeleted("goOffline"),za(e._repo)}function Fh(e){e=ae(e),e._checkNotDeleted("goOnline"),Qf(e._repo)}/**
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
 */var $h={".sv":"timestamp"};function Vh(){return $h}function Wh(e){return{".sv":{increment:e}}}/**
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
 */var Uh=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();function Bh(e,t,n){var r;if(e=ae(e),ue("Reference.transaction",e._path),e.key===".length"||e.key===".keys")throw"Reference.transaction failed: "+e.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new te,a=function(u,l,c){var f=null;u?o.reject(u):(f=new Dn(c,new Ce(e._repo,e._path),x),o.resolve(new Uh(l,f)))},s=Cr(e,function(){});return Kf(e._repo,e._path,t,a,s,i),o.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gh=function(){function e(t){this._delegate=t}return e.prototype.cancel=function(t){m("OnDisconnect.cancel",0,1,arguments.length),U("OnDisconnect.cancel","onComplete",t,!0);var n=this._delegate.cancel();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.remove=function(t){m("OnDisconnect.remove",0,1,arguments.length),U("OnDisconnect.remove","onComplete",t,!0);var n=this._delegate.remove();return t&&n.then(function(){return t(null)},function(r){return t(r)}),n},e.prototype.set=function(t,n){m("OnDisconnect.set",1,2,arguments.length),U("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(t);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.setWithPriority=function(t,n,r){m("OnDisconnect.setWithPriority",2,3,arguments.length),U("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(t,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(t,n){if(m("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){for(var r={},i=0;i<t.length;++i)r[""+i]=t[i];t=r,H("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}U("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(t);return n&&o.then(function(){return n(null)},function(a){return n(a)}),o},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jh=function(){function e(t,n){this.committed=t,this.snapshot=n}return e.prototype.toJSON=function(){return m("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=function(){function e(t,n){this._database=t,this._delegate=n}return e.prototype.val=function(){return m("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},e.prototype.exportVal=function(){return m("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},e.prototype.toJSON=function(){return m("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.exists=function(){return m("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},e.prototype.child=function(t){return m("DataSnapshot.child",0,1,arguments.length),t=String(t),Lt("DataSnapshot.child","path",t,!1),new e(this._database,this._delegate.child(t))},e.prototype.hasChild=function(t){return m("DataSnapshot.hasChild",1,1,arguments.length),Lt("DataSnapshot.hasChild","path",t,!1),this._delegate.hasChild(t)},e.prototype.getPriority=function(){return m("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},e.prototype.forEach=function(t){var n=this;return m("DataSnapshot.forEach",1,1,arguments.length),U("DataSnapshot.forEach","action",t,!1),this._delegate.forEach(function(r){return t(new e(n._database,r))})},e.prototype.hasChildren=function(){return m("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(e.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),e.prototype.numChildren=function(){return m("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},e.prototype.getRef=function(){return m("DataSnapshot.ref",0,0,arguments.length),new He(this._database,this._delegate.ref)},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),e}(),as=function(){function e(t,n){this.database=t,this._delegate=n}return e.prototype.on=function(t,n,r,i){var o=this,a;m("Query.on",2,4,arguments.length),U("Query.on","callback",n,!1);var s=e.getCancelAndContextArgs_("Query.on",r,i),u=function(c,f){n.call(s.context,new Rt(o.database,c),f)};u.userCallback=n,u.context=s.context;var l=(a=s.cancel)===null||a===void 0?void 0:a.bind(s.context);switch(t){case"value":return Cr(this._delegate,u,l),n;case"child_added":return ro(this._delegate,u,l),n;case"child_removed":return ao(this._delegate,u,l),n;case"child_changed":return io(this._delegate,u,l),n;case"child_moved":return oo(this._delegate,u,l),n;default:throw new Error(ne("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},e.prototype.off=function(t,n,r){if(m("Query.off",0,3,arguments.length),Of("Query.off",t,!0),U("Query.off","callback",n,!0),Ci("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,so(this._delegate,t,i)}else so(this._delegate,t)},e.prototype.get=function(){var t=this;return uh(this._delegate).then(function(n){return new Rt(t.database,n)})},e.prototype.once=function(t,n,r,i){var o=this;m("Query.once",1,4,arguments.length),U("Query.once","callback",n,!0);var a=e.getCancelAndContextArgs_("Query.once",r,i),s=new te,u=function(c,f){var h=new Rt(o.database,c);n&&n.call(a.context,h,f),s.resolve(h)};u.userCallback=n,u.context=a.context;var l=function(c){a.cancel&&a.cancel.call(a.context,c),s.reject(c)};switch(t){case"value":Cr(this._delegate,u,l,{onlyOnce:!0});break;case"child_added":ro(this._delegate,u,l,{onlyOnce:!0});break;case"child_removed":ao(this._delegate,u,l,{onlyOnce:!0});break;case"child_changed":io(this._delegate,u,l,{onlyOnce:!0});break;case"child_moved":oo(this._delegate,u,l,{onlyOnce:!0});break;default:throw new Error(ne("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise},e.prototype.limitToFirst=function(t){return m("Query.limitToFirst",1,1,arguments.length),new e(this.database,fe(this._delegate,_h(t)))},e.prototype.limitToLast=function(t){return m("Query.limitToLast",1,1,arguments.length),new e(this.database,fe(this._delegate,yh(t)))},e.prototype.orderByChild=function(t){return m("Query.orderByChild",1,1,arguments.length),new e(this.database,fe(this._delegate,Eh(t)))},e.prototype.orderByKey=function(){return m("Query.orderByKey",0,0,arguments.length),new e(this.database,fe(this._delegate,bh()))},e.prototype.orderByPriority=function(){return m("Query.orderByPriority",0,0,arguments.length),new e(this.database,fe(this._delegate,Ih()))},e.prototype.orderByValue=function(){return m("Query.orderByValue",0,0,arguments.length),new e(this.database,fe(this._delegate,Th()))},e.prototype.startAt=function(t,n){return t===void 0&&(t=null),m("Query.startAt",0,2,arguments.length),new e(this.database,fe(this._delegate,hh(t,n)))},e.prototype.startAfter=function(t,n){return t===void 0&&(t=null),m("Query.startAfter",0,2,arguments.length),new e(this.database,fe(this._delegate,ph(t,n)))},e.prototype.endAt=function(t,n){return t===void 0&&(t=null),m("Query.endAt",0,2,arguments.length),new e(this.database,fe(this._delegate,lh(t,n)))},e.prototype.endBefore=function(t,n){return t===void 0&&(t=null),m("Query.endBefore",0,2,arguments.length),new e(this.database,fe(this._delegate,fh(t,n)))},e.prototype.equalTo=function(t,n){return m("Query.equalTo",1,2,arguments.length),new e(this.database,fe(this._delegate,Nh(t,n)))},e.prototype.toString=function(){return m("Query.toString",0,0,arguments.length),this._delegate.toString()},e.prototype.toJSON=function(){return m("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},e.prototype.isEqual=function(t){if(m("Query.isEqual",1,1,arguments.length),!(t instanceof e)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)},e.getCancelAndContextArgs_=function(t,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,U(t,"cancel",i.cancel,!0),i.context=r,Ci(t,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(ne(t,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(e.prototype,"ref",{get:function(){return new He(this.database,new Ce(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),e}(),He=function(e){M(t,e);function t(n,r){var i=e.call(this,n,new ce(r._repo,r._path,new ga,!1))||this;return i.database=n,i._delegate=r,i}return t.prototype.getKey=function(){return m("Reference.key",0,0,arguments.length),this._delegate.key},t.prototype.child=function(n){return m("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new t(this.database,Ke(this._delegate,n))},t.prototype.getParent=function(){m("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new t(this.database,n):null},t.prototype.getRoot=function(){return m("Reference.root",0,0,arguments.length),new t(this.database,this._delegate.root)},t.prototype.set=function(n,r){m("Reference.set",1,2,arguments.length),U("Reference.set","onComplete",r,!0);var i=ui(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(n,r){if(m("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,H("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ue("Reference.update",this._delegate._path),U("Reference.update","onComplete",r,!0);var a=sh(this._delegate,n);return r&&a.then(function(){return r(null)},function(s){return r(s)}),a},t.prototype.setWithPriority=function(n,r,i){m("Reference.setWithPriority",2,3,arguments.length),U("Reference.setWithPriority","onComplete",i,!0);var o=ah(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(a){return i(a)}),o},t.prototype.remove=function(n){m("Reference.remove",0,1,arguments.length),U("Reference.remove","onComplete",n,!0);var r=ih(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.transaction=function(n,r,i){var o=this;m("Reference.transaction",1,3,arguments.length),U("Reference.transaction","transactionUpdate",n,!1),U("Reference.transaction","onComplete",r,!0),xf("Reference.transaction","applyLocally",i,!0);var a=Bh(this._delegate,n,{applyLocally:i}).then(function(s){return new jh(s.committed,new Rt(o.database,s.snapshot))});return r&&a.then(function(s){return r(null,s.committed,s.snapshot)},function(s){return r(s,!1,null)}),a},t.prototype.setPriority=function(n,r){m("Reference.setPriority",1,2,arguments.length),U("Reference.setPriority","onComplete",r,!0);var i=oh(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.push=function(n,r){var i=this;m("Reference.push",0,2,arguments.length),U("Reference.push","onComplete",r,!0);var o=rh(this._delegate,n),a=o.then(function(u){return new t(i.database,u)});r&&a.then(function(){return r(null)},function(u){return r(u)});var s=new t(this.database,o);return s.then=a.then.bind(a),s.catch=a.catch.bind(a,void 0),s},t.prototype.onDisconnect=function(){return ue("Reference.onDisconnect",this._delegate._path),new Gh(new nh(this._delegate._repo,this._delegate._path))},Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),t}(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn=function(){function e(t,n){var r=this;this._delegate=t,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return e.prototype.useEmulator=function(t,n,r){r===void 0&&(r={}),Lh(this._delegate,t,n,r)},e.prototype.ref=function(t){if(m("database.ref",0,1,arguments.length),t instanceof He){var n=no(this._delegate,t.toString());return new He(this,n)}else{var n=Za(this._delegate,t);return new He(this,n)}},e.prototype.refFromURL=function(t){var n="database.refFromURL";m(n,1,1,arguments.length);var r=no(this._delegate,t);return new He(this,r)},e.prototype.goOffline=function(){return m("database.goOffline",0,0,arguments.length),Mh(this._delegate)},e.prototype.goOnline=function(){return m("database.goOnline",0,0,arguments.length),Fh(this._delegate)},e.ServerValue={TIMESTAMP:Vh(),increment:function(t){return Wh(t)}},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hh=function(){Ge.forceDisallow(),kr.forceAllow()},zh=function(){kr.forceDisallow()},Qh=function(){return Ge.isAvailable()},Yh=function(e,t){var n=e._delegate._repo.persistentConnection_;n.securityDebugCallback_=t},qh=function(e,t){Yf(e._delegate._repo,t)},Kh=function(e,t){qf(e._delegate._repo,t)},Xh=function(e){return e._delegate._repo.dataUpdateCount},Jh=function(e,t){return $f(e._delegate._repo,t)};function Zh(e){var t=e.app,n=e.url,r=e.version,i=e.customAuthImpl,o=e.namespace,a=e.nodeAdmin,s=a===void 0?!1:a;Lo(r);var u=new Ro("auth-internal",new No("database-standalone"));return u.setComponent(new Mt("auth-internal",function(){return i},"PRIVATE")),{instance:new pn(os(t,u,void 0,n,s),t),namespace:o}}var ed=Object.freeze({__proto__:null,forceLongPolling:Hh,forceWebSockets:zh,isWebSocketsAvailable:Qh,setSecurityDebugCallback:Yh,stats:qh,statsIncrementCounter:Kh,dataUpdateCount:Xh,interceptServerData:Jh,initStandalone:Zh});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var td=Qe;Qe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Qe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var nd=ra,rd=function(e){var t=Qe.prototype.put;return Qe.prototype.put=function(n,r,i,o){o!==void 0&&(o=e()),t.call(this,n,r,i,o)},function(){Qe.prototype.put=t}},id=Pr,od=function(e){return e._delegate._queryIdentifier},ad=function(e){kh(e)},sd=Object.freeze({__proto__:null,DataConnection:td,RealTimeConnection:nd,hijackHash:rd,ConnectionTarget:id,queryIdentifier:od,forceRestClient:ad});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ud=pn.ServerValue;function ld(e){Lo(e.SDK_VERSION),e.INTERNAL.registerComponent(new Mt("database",function(t,n){var r=n.instanceIdentifier,i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return new pn(os(i,o,a,r),i)},"PUBLIC").setServiceProps({Reference:He,Query:as,Database:pn,DataSnapshot:Rt,enableLogging:Vo,INTERNAL:ed,ServerValue:ud,TEST_ACCESS:sd}).setMultipleInstances(!0)),e.registerVersion(zu,Qu)}ld(Ft);const cd={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},fd=Ft.initializeApp(cd).database();function hd(){const e=go();fd.ref("users/"+e.uid).set({device:e.device,concentration:e.concentration,ageGroup:e.ageGroup,dyslexia:e.dyslexia,dyscalculia:e.dyscalculia})}var qt,dd=new Uint8Array(16);function ss(){if(!qt&&(qt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!qt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return qt(dd)}const pd=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function us(e){return typeof e=="string"&&pd.test(e)}var G=[];for(var Yn=0;Yn<256;++Yn)G.push((Yn+256).toString(16).substr(1));function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(G[e[t+0]]+G[e[t+1]]+G[e[t+2]]+G[e[t+3]]+"-"+G[e[t+4]]+G[e[t+5]]+"-"+G[e[t+6]]+G[e[t+7]]+"-"+G[e[t+8]]+G[e[t+9]]+"-"+G[e[t+10]]+G[e[t+11]]+G[e[t+12]]+G[e[t+13]]+G[e[t+14]]+G[e[t+15]]).toLowerCase();if(!us(n))throw TypeError("Stringified UUID is invalid");return n}var uo,qn,Kn=0,Xn=0;function vd(e,t,n){var r=t&&n||0,i=t||new Array(16);e=e||{};var o=e.node||uo,a=e.clockseq!==void 0?e.clockseq:qn;if(o==null||a==null){var s=e.random||(e.rng||ss)();o==null&&(o=uo=[s[0]|1,s[1],s[2],s[3],s[4],s[5]]),a==null&&(a=qn=(s[6]<<8|s[7])&16383)}var u=e.msecs!==void 0?e.msecs:Date.now(),l=e.nsecs!==void 0?e.nsecs:Xn+1,c=u-Kn+(l-Xn)/1e4;if(c<0&&e.clockseq===void 0&&(a=a+1&16383),(c<0||u>Kn)&&e.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Kn=u,Xn=l,qn=a,u+=122192928e5;var f=((u&268435455)*1e4+l)%4294967296;i[r++]=f>>>24&255,i[r++]=f>>>16&255,i[r++]=f>>>8&255,i[r++]=f&255;var h=u/4294967296*1e4&268435455;i[r++]=h>>>8&255,i[r++]=h&255,i[r++]=h>>>24&15|16,i[r++]=h>>>16&255,i[r++]=a>>>8|128,i[r++]=a&255;for(var d=0;d<6;++d)i[r+d]=o[d];return t||li(i)}function _d(e){if(!us(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=t&255,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=t&255,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=t&255,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=t&255,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=t&255,n}function gd(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}var yd="6ba7b810-9dad-11d1-80b4-00c04fd430c8",md="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function ls(e,t,n){function r(i,o,a,s){if(typeof i=="string"&&(i=gd(i)),typeof o=="string"&&(o=_d(o)),o.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+i.length);if(u.set(o),u.set(i,o.length),u=n(u),u[6]=u[6]&15|t,u[8]=u[8]&63|128,a){s=s||0;for(var l=0;l<16;++l)a[s+l]=u[l];return a}return li(u)}try{r.name=e}catch{}return r.DNS=yd,r.URL=md,r}function Ed(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return Cd(bd(wd(e),e.length*8))}function Cd(e){for(var t=[],n=e.length*32,r="0123456789abcdef",i=0;i<n;i+=8){var o=e[i>>5]>>>i%32&255,a=parseInt(r.charAt(o>>>4&15)+r.charAt(o&15),16);t.push(a)}return t}function cs(e){return(e+64>>>9<<4)+14+1}function bd(e,t){e[t>>5]|=128<<t%32,e[cs(t)-1]=t;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,a=0;a<e.length;a+=16){var s=n,u=r,l=i,c=o;n=Q(n,r,i,o,e[a],7,-680876936),o=Q(o,n,r,i,e[a+1],12,-389564586),i=Q(i,o,n,r,e[a+2],17,606105819),r=Q(r,i,o,n,e[a+3],22,-1044525330),n=Q(n,r,i,o,e[a+4],7,-176418897),o=Q(o,n,r,i,e[a+5],12,1200080426),i=Q(i,o,n,r,e[a+6],17,-1473231341),r=Q(r,i,o,n,e[a+7],22,-45705983),n=Q(n,r,i,o,e[a+8],7,1770035416),o=Q(o,n,r,i,e[a+9],12,-1958414417),i=Q(i,o,n,r,e[a+10],17,-42063),r=Q(r,i,o,n,e[a+11],22,-1990404162),n=Q(n,r,i,o,e[a+12],7,1804603682),o=Q(o,n,r,i,e[a+13],12,-40341101),i=Q(i,o,n,r,e[a+14],17,-1502002290),r=Q(r,i,o,n,e[a+15],22,1236535329),n=Y(n,r,i,o,e[a+1],5,-165796510),o=Y(o,n,r,i,e[a+6],9,-1069501632),i=Y(i,o,n,r,e[a+11],14,643717713),r=Y(r,i,o,n,e[a],20,-373897302),n=Y(n,r,i,o,e[a+5],5,-701558691),o=Y(o,n,r,i,e[a+10],9,38016083),i=Y(i,o,n,r,e[a+15],14,-660478335),r=Y(r,i,o,n,e[a+4],20,-405537848),n=Y(n,r,i,o,e[a+9],5,568446438),o=Y(o,n,r,i,e[a+14],9,-1019803690),i=Y(i,o,n,r,e[a+3],14,-187363961),r=Y(r,i,o,n,e[a+8],20,1163531501),n=Y(n,r,i,o,e[a+13],5,-1444681467),o=Y(o,n,r,i,e[a+2],9,-51403784),i=Y(i,o,n,r,e[a+7],14,1735328473),r=Y(r,i,o,n,e[a+12],20,-1926607734),n=q(n,r,i,o,e[a+5],4,-378558),o=q(o,n,r,i,e[a+8],11,-2022574463),i=q(i,o,n,r,e[a+11],16,1839030562),r=q(r,i,o,n,e[a+14],23,-35309556),n=q(n,r,i,o,e[a+1],4,-1530992060),o=q(o,n,r,i,e[a+4],11,1272893353),i=q(i,o,n,r,e[a+7],16,-155497632),r=q(r,i,o,n,e[a+10],23,-1094730640),n=q(n,r,i,o,e[a+13],4,681279174),o=q(o,n,r,i,e[a],11,-358537222),i=q(i,o,n,r,e[a+3],16,-722521979),r=q(r,i,o,n,e[a+6],23,76029189),n=q(n,r,i,o,e[a+9],4,-640364487),o=q(o,n,r,i,e[a+12],11,-421815835),i=q(i,o,n,r,e[a+15],16,530742520),r=q(r,i,o,n,e[a+2],23,-995338651),n=K(n,r,i,o,e[a],6,-198630844),o=K(o,n,r,i,e[a+7],10,1126891415),i=K(i,o,n,r,e[a+14],15,-1416354905),r=K(r,i,o,n,e[a+5],21,-57434055),n=K(n,r,i,o,e[a+12],6,1700485571),o=K(o,n,r,i,e[a+3],10,-1894986606),i=K(i,o,n,r,e[a+10],15,-1051523),r=K(r,i,o,n,e[a+1],21,-2054922799),n=K(n,r,i,o,e[a+8],6,1873313359),o=K(o,n,r,i,e[a+15],10,-30611744),i=K(i,o,n,r,e[a+6],15,-1560198380),r=K(r,i,o,n,e[a+13],21,1309151649),n=K(n,r,i,o,e[a+4],6,-145523070),o=K(o,n,r,i,e[a+11],10,-1120210379),i=K(i,o,n,r,e[a+2],15,718787259),r=K(r,i,o,n,e[a+9],21,-343485551),n=Ae(n,s),r=Ae(r,u),i=Ae(i,l),o=Ae(o,c)}return[n,r,i,o]}function wd(e){if(e.length===0)return[];for(var t=e.length*8,n=new Uint32Array(cs(t)),r=0;r<t;r+=8)n[r>>5]|=(e[r/8]&255)<<r%32;return n}function Ae(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Id(e,t){return e<<t|e>>>32-t}function Ln(e,t,n,r,i,o){return Ae(Id(Ae(Ae(t,e),Ae(r,o)),i),n)}function Q(e,t,n,r,i,o,a){return Ln(t&n|~t&r,e,t,i,o,a)}function Y(e,t,n,r,i,o,a){return Ln(t&r|n&~r,e,t,i,o,a)}function q(e,t,n,r,i,o,a){return Ln(t^n^r,e,t,i,o,a)}function K(e,t,n,r,i,o,a){return Ln(n^(t|~r),e,t,i,o,a)}var Sd=ls("v3",48,Ed);const Td=Sd;function Rd(e,t,n){e=e||{};var r=e.random||(e.rng||ss)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return li(r)}function Nd(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function Jn(e,t){return e<<t|e>>>32-t}function Ad(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var i=0;i<r.length;++i)e.push(r.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,a=Math.ceil(o/16),s=new Array(a),u=0;u<a;++u){for(var l=new Uint32Array(16),c=0;c<16;++c)l[c]=e[u*64+c*4]<<24|e[u*64+c*4+1]<<16|e[u*64+c*4+2]<<8|e[u*64+c*4+3];s[u]=l}s[a-1][14]=(e.length-1)*8/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=(e.length-1)*8&4294967295;for(var f=0;f<a;++f){for(var h=new Uint32Array(80),d=0;d<16;++d)h[d]=s[f][d];for(var p=16;p<80;++p)h[p]=Jn(h[p-3]^h[p-8]^h[p-14]^h[p-16],1);for(var _=n[0],v=n[1],y=n[2],C=n[3],A=n[4],Z=0;Z<80;++Z){var ee=Math.floor(Z/20),Se=Jn(_,5)+Nd(ee,v,y,C)+A+t[ee]+h[Z]>>>0;A=C,C=y,y=Jn(v,30)>>>0,v=_,_=Se}n[0]=n[0]+_>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+C>>>0,n[4]=n[4]+A>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var Od=ls("v5",80,Ad);const Pd=Od;var xd={v1:vd,v3:Td,v4:Rd,v5:Pd};const kd={setup:()=>({v$:Ys()}),data(){return{uid:"",device:"",concentration:null,ageGroup:"",dyslexia:null,dyscalculia:null,accept:null,submitted:!1,devices:[{label:"Mouse",value:"Mouse"},{label:"Touchscreen",value:"Touchscreen"},{label:"Pen",value:"Pen"},{label:"Trackpad",value:"Trackpad"},{label:"Other",value:"Other"}],numToStatement:e=>e==1?"Very Bad (1)":e==2?"Bad (2)":e==3?"Good (3)":e==4?"Very Good (4)":" "}},validations(){return{device:{required:tt},concentration:{required:tt},ageGroup:{required:tt},dyslexia:{required:tt},dyscalculia:{required:tt},accept:{required:tt}}},created(){this.uid=xd.v4(),console.log(this.uid)},mounted(){},methods:{handleSubmit(e){if(this.submitted=!0,e)this.storeData(),this.$router.push("about");else return},storeData(){const e=go();e.uid=this.uid,e.device=this.device,e.concentration=this.concentration,e.ageGroup=Number(this.ageGroup),e.dyslexia=this.dyslexia=="Yes",e.dyscalculia=this.dyscalculia=="Yes",hd()}}},fs=e=>(Ps("data-v-02edb832"),e=e(),xs(),e),Dd={class:"form-demo"},Ld={class:"flex justify-content-center"},Md={class:"card"},Fd=fs(()=>T("h3",{class:"text-center"},"Please fill out the form to begin with the study.",-1)),$d={class:"field"},Vd={class:"field"},Wd=lo(" Rate how well this statement applies from 1-4: "),Ud=fs(()=>T("br",null,null,-1)),Bd=lo(' "I am in a calm environment with enough light and I am able to concentrate." '),Gd=[Wd,Ud,Bd],jd={class:"field"},Hd={class:"field-radiobutton"},zd={class:"field-radiobutton"},Qd={class:"field"},Yd={class:"field-radiobutton"},qd={class:"field-radiobutton"},Kd={class:"field"},Xd={class:"field-radiobutton"},Jd={class:"field-radiobutton"},Zd={class:"field-checkbox"};function ep(e,t,n,r,i,o){const a=gt("Dropdown"),s=gt("Slider"),u=gt("RadioButton"),l=gt("Checkbox"),c=gt("Button");return Rs(),Ns("div",Dd,[T("div",Ld,[T("div",Md,[Fd,T("form",{onSubmit:t[9]||(t[9]=As(f=>o.handleSubmit(!e.v$.$invalid),["prevent"])),class:"p-fluid"},[T("div",$d,[T("h4",{class:F({"p-error":e.v$.device.$invalid&&i.submitted})},"What is your method of input?",2),_e(a,{modelValue:e.v$.device.$model,"onUpdate:modelValue":t[0]||(t[0]=f=>e.v$.device.$model=f),class:F({"p-invalid":e.v$.device.$invalid&&i.submitted}),options:i.devices,optionLabel:"label",optionValue:"value",placeholder:"Select an input"},null,8,["modelValue","class","options"])]),T("div",Vd,[T("h4",{class:F({"p-error":e.v$.concentration.$invalid&&i.submitted})},Gd,2),_e(s,{modelValue:e.v$.concentration.$model,"onUpdate:modelValue":t[1]||(t[1]=f=>e.v$.concentration.$model=f),class:F({"p-invalid":e.v$.concentration.$invalid&&i.submitted}),id:"concentration-slider",min:1,max:4},null,8,["modelValue","class"]),T("h4",{id:"concentration-text",class:F({"p-error":e.v$.concentration.$invalid&&i.submitted})},"Rating: "+Os(i.numToStatement(i.concentration)),3)]),T("div",jd,[T("h4",{class:F({"p-error":e.v$.ageGroup.$invalid&&i.submitted})},"Please select your age group:",2),T("div",Hd,[_e(u,{inputId:"group1",name:"ageGroup",value:"1",modelValue:e.v$.ageGroup.$model,"onUpdate:modelValue":t[2]||(t[2]=f=>e.v$.ageGroup.$model=f),class:F({"p-invalid":e.v$.ageGroup.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"group1",class:F({"p-error":e.v$.ageGroup.$invalid&&i.submitted})},"0-17 years",2)]),T("div",zd,[_e(u,{inputId:"group2",name:"ageGroup",value:"2",modelValue:e.v$.ageGroup.$model,"onUpdate:modelValue":t[3]||(t[3]=f=>e.v$.ageGroup.$model=f),class:F({"p-invalid":e.v$.ageGroup.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"group2",class:F({"p-error":e.v$.ageGroup.$invalid&&i.submitted})},"18-23 years",2)])]),T("div",Qd,[T("h4",{class:F({"p-error":e.v$.dyslexia.$invalid&&i.submitted})},"Do you have dyslexia or any other reading disability?",2),T("div",Yd,[_e(u,{inputId:"yes1",name:"dyslexia",value:"Yes",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[4]||(t[4]=f=>e.v$.dyslexia.$model=f),class:F({"p-invalid":e.v$.dyslexia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"yes1",class:F({"p-error":e.v$.dyslexia.$invalid&&i.submitted})},"Yes",2)]),T("div",qd,[_e(u,{inputId:"no1",name:"dyslexia",value:"No",modelValue:e.v$.dyslexia.$model,"onUpdate:modelValue":t[5]||(t[5]=f=>e.v$.dyslexia.$model=f),class:F({"p-invalid":e.v$.dyslexia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"no1",class:F({"p-error":e.v$.dyslexia.$invalid&&i.submitted})},"No",2)])]),T("div",Kd,[T("h4",{class:F({"p-error":e.v$.dyscalculia.$invalid&&i.submitted})},"Do you have dyscalculia?",2),T("div",Xd,[_e(u,{inputId:"yes2",name:"dyscalculia",value:"Yes",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[6]||(t[6]=f=>e.v$.dyscalculia.$model=f),class:F({"p-invalid":e.v$.dyscalculia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"yes2",class:F({"p-error":e.v$.dyscalculia.$invalid&&i.submitted})},"Yes",2)]),T("div",Jd,[_e(u,{inputId:"no2",name:"dyscalculia",value:"No",modelValue:e.v$.dyscalculia.$model,"onUpdate:modelValue":t[7]||(t[7]=f=>e.v$.dyscalculia.$model=f),class:F({"p-invalid":e.v$.dyscalculia.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"no2",class:F({"p-error":e.v$.dyscalculia.$invalid&&i.submitted})},"No",2)])]),T("div",Zd,[_e(l,{id:"accept",name:"accept",value:"Accept",modelValue:e.v$.accept.$model,"onUpdate:modelValue":t[8]||(t[8]=f=>e.v$.accept.$model=f),class:F({"p-invalid":e.v$.accept.$invalid&&i.submitted})},null,8,["modelValue","class"]),T("label",{for:"accept",class:F({"p-error":e.v$.accept.$invalid&&i.submitted})},"I agree to the terms and conditions",2)]),_e(c,{type:"submit",label:"Submit",class:"mt-2"})],32)])])])}const np=Ts(kd,[["render",ep],["__scopeId","data-v-02edb832"]]);export{np as default};
