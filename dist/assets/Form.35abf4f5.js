import{g as vo,r as ie,o as bo,w as at,i as gn,a as Vn,b as wo,c as L,d as Co,e as Io,p as _s,u as E,f as ys,n as vs,h as So,j as Eo,D as O,k as S,l as R,m as z,q as Te,s as le,t as V,F as Ue,v as St,x as y,y as To,T as Oo,Z as Xt,O as M,C as Ro,z as xo,U as No,A as Be,B as $n,E as Ie,G as ne,H as vt,I as Ze,J as oe,K as Ao,L as ko,M as Bn,N as Do}from"./index.75c7d4e8.js";import{_ as Lo}from"./_plugin-vue_export-helper.cdc0426e.js";function bs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,s)=>(e.includes(s)||(n[s]=E(t[s])),n),{})}function Et(t){return typeof t=="function"}function Po(t){return Co(t)||Io(t)}function gi(t,e,n){let s=t;const i=e.split(".");for(let r=0;r<i.length;r++){if(!s[i[r]])return n;s=s[i[r]]}return s}function Jt(t,e,n){return L(()=>t.some(s=>gi(e,s,{[n]:!1})[n]))}function ws(t,e,n){return L(()=>t.reduce((s,i)=>{const r=gi(e,i,{[n]:!1})[n]||[];return s.concat(r)},[]))}function _i(t,e,n,s){return t.call(s,E(e),E(n),s)}function yi(t){return t.$valid!==void 0?!t.$valid:!t}function Mo(t,e,n,s,i,r,o){let{$lazy:l,$rewardEarly:c}=i,a=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,d=arguments.length>10?arguments[10]:void 0;const m=ie(!!s.value),f=ie(0);n.value=!1;const g=at([e,s].concat(a,d),()=>{if(l&&!s.value||c&&!h.value&&!n.value)return;let p;try{p=_i(t,e,u,o)}catch(v){p=Promise.reject(v)}f.value++,n.value=!!f.value,m.value=!1,Promise.resolve(p).then(v=>{f.value--,n.value=!!f.value,r.value=v,m.value=yi(v)}).catch(v=>{f.value--,n.value=!!f.value,r.value=v,m.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:m,$unwatch:g}}function Fo(t,e,n,s,i,r,o,l){let{$lazy:c,$rewardEarly:a}=s;const u=()=>({}),h=L(()=>{if(c&&!n.value||a&&!l.value)return!1;let d=!0;try{const m=_i(t,e,o,r);i.value=m,d=yi(m)}catch(m){i.value=m}return d});return{$unwatch:u,$invalid:h}}function Vo(t,e,n,s,i,r,o,l,c,a,u){const h=ie(!1),d=t.$params||{},m=ie(null);let f,g;t.$async?{$invalid:f,$unwatch:g}=Mo(t.$validator,e,h,n,s,m,i,t.$watchTargets,c,a,u):{$invalid:f,$unwatch:g}=Fo(t.$validator,e,n,s,m,i,c,a);const p=t.$message;return{$message:Et(p)?L(()=>p(bs({$pending:h,$invalid:f,$params:bs(d),$model:e,$response:m,$validator:r,$propertyPath:l,$property:o}))):p||"",$params:d,$pending:h,$invalid:f,$response:m,$unwatch:g}}function $o(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=E(t),n=Object.keys(e),s={},i={},r={};let o=null;return n.forEach(l=>{const c=e[l];switch(!0){case Et(c.$validator):s[l]=c;break;case Et(c):s[l]={$validator:c};break;case l==="$validationGroups":o=c;break;case l.startsWith("$"):r[l]=c;break;default:i[l]=c}}),{rules:s,nestedValidators:i,config:r,validationGroups:o}}function Bo(){}const Ho="__root";function vi(t,e,n){if(n)return e?e(t()):t();try{var s=Promise.resolve(t());return e?s.then(e):s}catch(i){return Promise.reject(i)}}function Uo(t,e){return vi(t,Bo,e)}function zo(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function Wo(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(s){return Promise.reject(s)}}}function Ko(t,e,n,s,i,r,o,l,c){const a=Object.keys(t),u=s.get(i,t),h=ie(!1),d=ie(!1),m=ie(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const f={$dirty:h,$path:i,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return a.length?(a.forEach(g=>{f[g]=Vo(t[g],e,f.$dirty,r,o,g,n,i,c,d,m)}),f.$externalResults=L(()=>l.value?[].concat(l.value).map((g,p)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${p}`,$message:g,$params:{},$response:null,$pending:!1})):[]),f.$invalid=L(()=>{const g=a.some(p=>E(f[p].$invalid));return d.value=g,!!f.$externalResults.value.length||g}),f.$pending=L(()=>a.some(g=>E(f[g].$pending))),f.$error=L(()=>f.$dirty.value?f.$pending.value||f.$invalid.value:!1),f.$silentErrors=L(()=>a.filter(g=>E(f[g].$invalid)).map(g=>{const p=f[g];return Vn({$propertyPath:i,$property:n,$validator:g,$uid:`${i}-${g}`,$message:p.$message,$params:p.$params,$response:p.$response,$pending:p.$pending})}).concat(f.$externalResults.value)),f.$errors=L(()=>f.$dirty.value?f.$silentErrors.value:[]),f.$unwatch=()=>a.forEach(g=>{f[g].$unwatch()}),f.$commit=()=>{d.value=!0,m.value=Date.now()},s.set(i,t,f),f):(u&&s.set(i,t,f),f)}function Go(t,e,n,s,i,r,o){const l=Object.keys(t);return l.length?l.reduce((c,a)=>(c[a]=_n({validations:t[a],state:e,key:a,parentKey:n,resultsCache:s,globalConfig:i,instance:r,externalResults:o}),c),{}):{}}function jo(t,e,n){const s=L(()=>[e,n].filter(f=>f).reduce((f,g)=>f.concat(Object.values(E(g))),[])),i=L({get(){return t.$dirty.value||(s.value.length?s.value.every(f=>f.$dirty):!1)},set(f){t.$dirty.value=f}}),r=L(()=>{const f=E(t.$silentErrors)||[],g=s.value.filter(p=>(E(p).$silentErrors||[]).length).reduce((p,v)=>p.concat(...v.$silentErrors),[]);return f.concat(g)}),o=L(()=>{const f=E(t.$errors)||[],g=s.value.filter(p=>(E(p).$errors||[]).length).reduce((p,v)=>p.concat(...v.$errors),[]);return f.concat(g)}),l=L(()=>s.value.some(f=>f.$invalid)||E(t.$invalid)||!1),c=L(()=>s.value.some(f=>E(f.$pending))||E(t.$pending)||!1),a=L(()=>s.value.some(f=>f.$dirty)||s.value.some(f=>f.$anyDirty)||i.value),u=L(()=>i.value?c.value||l.value:!1),h=()=>{t.$touch(),s.value.forEach(f=>{f.$touch()})},d=()=>{t.$commit(),s.value.forEach(f=>{f.$commit()})},m=()=>{t.$reset(),s.value.forEach(f=>{f.$reset()})};return s.value.length&&s.value.every(f=>f.$dirty)&&h(),{$dirty:i,$errors:o,$invalid:l,$anyDirty:a,$error:u,$pending:c,$touch:h,$reset:m,$silentErrors:r,$commit:d}}function _n(t){const e=Wo(function(){return Qt(),zo(function(){if(p.$rewardEarly)return gs(),Uo(vs)},function(){return vi(vs,function(){return new Promise(P=>{if(!Yt.value)return P(!qt.value);const Ce=at(Yt,()=>{P(!qt.value),Ce()})})})})});let{validations:n,state:s,key:i,parentKey:r,childResults:o,resultsCache:l,globalConfig:c={},instance:a,externalResults:u}=t;const h=r?`${r}.${i}`:i,{rules:d,nestedValidators:m,config:f,validationGroups:g}=$o(n),p=Object.assign({},c,f),v=i?L(()=>{const P=E(s);return P?E(P[i]):void 0}):s,I=Object.assign({},E(u)||{}),F=L(()=>{const P=E(u);return i?P?E(P[i]):void 0:P}),$=Ko(d,v,i,l,h,p,a,F,s),H=Go(m,v,h,l,p,a,F),de={};g&&Object.entries(g).forEach(P=>{let[Ce,_e]=P;de[Ce]={$invalid:Jt(_e,H,"$invalid"),$error:Jt(_e,H,"$error"),$pending:Jt(_e,H,"$pending"),$errors:ws(_e,H,"$errors"),$silentErrors:ws(_e,H,"$silentErrors")}});const{$dirty:jt,$errors:uo,$invalid:qt,$anyDirty:ho,$error:fo,$pending:Yt,$touch:Qt,$reset:po,$silentErrors:mo,$commit:gs}=jo($,H,o),go=i?L({get:()=>E(v),set:P=>{jt.value=!0;const Ce=E(s),_e=E(u);_e&&(_e[i]=I[i]),gn(Ce[i])?Ce[i].value=P:Ce[i]=P}}):null;i&&p.$autoDirty&&at(v,()=>{jt.value||Qt();const P=E(u);P&&(P[i]=I[i])},{flush:"sync"});function _o(P){return(o.value||{})[P]}function yo(){gn(u)?u.value=I:Object.keys(I).length===0?Object.keys(u).forEach(P=>{delete u[P]}):Object.assign(u,I)}return Vn(Object.assign({},$,{$model:go,$dirty:jt,$error:fo,$errors:uo,$invalid:qt,$anyDirty:ho,$pending:Yt,$touch:Qt,$reset:po,$path:h||Ho,$silentErrors:mo,$validate:e,$commit:gs},o&&{$getResultsForChild:_o,$clearExternalResults:yo,$validationGroups:de},H))}class qo{constructor(){this.storage=new Map}set(e,n,s){this.storage.set(e,{rules:n,result:s})}checkRulesValidity(e,n,s){const i=Object.keys(s),r=Object.keys(n);return r.length!==i.length||!r.every(l=>i.includes(l))?!1:r.every(l=>n[l].$params?Object.keys(n[l].$params).every(c=>E(s[l].$params[c])===E(n[l].$params[c])):!0)}get(e,n){const s=this.storage.get(e);if(!s)return;const{rules:i,result:r}=s,o=this.checkRulesValidity(e,n,i),l=r.$unwatch?r.$unwatch:()=>({});return o?r:{$dirty:r.$dirty,$partial:!0,$unwatch:l}}}const It={COLLECT_ALL:!0,COLLECT_NONE:!1},Cs=Symbol("vuelidate#injectChildResults"),Is=Symbol("vuelidate#removeChildResults");function Yo(t){let{$scope:e,instance:n}=t;const s={},i=ie([]),r=L(()=>i.value.reduce((u,h)=>(u[h]=E(s[h]),u),{}));function o(u,h){let{$registerAs:d,$scope:m,$stopPropagation:f}=h;f||e===It.COLLECT_NONE||m===It.COLLECT_NONE||e!==It.COLLECT_ALL&&e!==m||(s[d]=u,i.value.push(d))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function l(u){i.value=i.value.filter(h=>h!==u),delete s[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],l);const c=ys(Cs,[]);_s(Cs,n.__vuelidateInjectInstances);const a=ys(Is,[]);return _s(Is,n.__vuelidateRemoveInstances),{childResults:r,sendValidationResultsToParent:c,removeValidationResultsFromParent:a}}function bi(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?bi(e[n]):L(()=>e[n])}})}let Ss=0;function Qo(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(s=t,t=void 0,e=void 0);let{$registerAs:i,$scope:r=It.COLLECT_ALL,$stopPropagation:o,$externalResults:l,currentVueInstance:c}=s;const a=c||((n=vo())===null||n===void 0?void 0:n.proxy),u=a?a.$options:{};i||(Ss+=1,i=`_vuelidate_${Ss}`);const h=ie({}),d=new qo,{childResults:m,sendValidationResultsToParent:f,removeValidationResultsFromParent:g}=a?Yo({$scope:r,instance:a}):{childResults:ie({})};if(!t&&u.validations){const p=u.validations;e=ie({}),bo(()=>{e.value=a,at(()=>Et(p)?p.call(e.value,new bi(e.value)):p,v=>{h.value=_n({validations:v,state:e,childResults:m,resultsCache:d,globalConfig:s,instance:a,externalResults:l||a.vuelidateExternalResults})},{immediate:!0})}),s=u.validationsConfig||s}else{const p=gn(t)||Po(t)?t:Vn(t||{});at(p,v=>{h.value=_n({validations:v,state:e,childResults:m,resultsCache:d,globalConfig:s,instance:a!=null?a:{},externalResults:l})},{immediate:!0})}return a&&(f.forEach(p=>p(h,{$registerAs:i,$scope:r,$stopPropagation:o})),wo(()=>g.forEach(p=>p(i)))),L(()=>Object.assign({},E(h.value),m.value))}const wi=t=>{if(t=E(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length};function Me(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s=>(s=E(s),!wi(s)||e.every(i=>i.test(s)))}Me(/^[a-zA-Z]*$/);Me(/^[a-zA-Z0-9]*$/);Me(/^\d*(\.\d+)?$/);const Xo=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;Me(Xo);function Jo(t){return typeof t=="string"&&(t=t.trim()),wi(t)}var et={$validator:Jo,$message:"Value is required",$params:{type:"required"}};const Zo=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;Me(Zo);Me(/(^[0-9]*$)|(^-[0-9]+$)/);Me(/^[-]?\d*(\.\d+)?$/);const yn=So("user",()=>{const t=ie({uid:"",device:"",concentration:0,age_group:0,dyslexia:!1,dyscalculia:!1});return{user:t,insertFormValues:(n,s,i,r,o,l)=>{t.value.uid=n,t.value.device=s,t.value.concentration=i,t.value.age_group=r,t.value.dyslexia=o,t.value.dyscalculia=l}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(t,e){if(!t)throw Ye(e)},Ye=function(t){return new Error("Firebase Database ("+Ci.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},el=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,m=a&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ii(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):el(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),a!==64){const m=l<<4&240|a>>2;if(s.push(m),h!==64){const f=a<<6&192|h;s.push(f)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Si=function(t){const e=Ii(t);return Hn.encodeByteArray(e,!0)},Ei=function(t){return Si(t).replace(/\./g,"")},Es=function(t){try{return Hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){return Ti(void 0,t)}function Ti(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nl(n)||(t[n]=Ti(t[n],e[n]));return t}function nl(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sl())}function il(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ri(){return Ci.NODE_ADMIN===!0}function rl(){return typeof indexedDB=="object"}function ol(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="FirebaseError";class pt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ll,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?al(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pt(i,l,s)}}function al(t,e){return t.replace(cl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const cl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return JSON.parse(t)}function j(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ct(Es(r[0])||""),n=ct(Es(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ul=function(t){const e=Ni(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hl=function(t){const e=Ni(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ge(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ts(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tt(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Os(r)&&Os(o)){if(!vn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Os(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Un(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vt=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Se="[DEFAULT]";/**
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
 */class ml{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ft;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_l(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gl(t){return t===Se?void 0:t}function _l(t){return t.instantiationMode==="EAGER"}/**
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
 */class yl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ml(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const vl={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},bl=N.INFO,wl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Cl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wl[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ai{constructor(e){this.name=e,this._logLevel=bl,this._logHandler=Cl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Il=(t,e)=>e.some(n=>t instanceof n);let Rs,xs;function Sl(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function El(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ki=new WeakMap,bn=new WeakMap,Di=new WeakMap,Zt=new WeakMap,zn=new WeakMap;function Tl(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ve(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ki.set(n,t)}).catch(()=>{}),zn.set(e,t),e}function Ol(t){if(bn.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});bn.set(t,e)}let wn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Di.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rl(t){wn=t(wn)}function xl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(en(this),e,...n);return Di.set(s,e.sort?e.sort():[e]),ve(s)}:El().includes(t)?function(...e){return t.apply(en(this),e),ve(ki.get(this))}:function(...e){return ve(t.apply(en(this),e))}}function Nl(t){return typeof t=="function"?xl(t):(t instanceof IDBTransaction&&Ol(t),Il(t,Sl())?new Proxy(t,wn):t)}function ve(t){if(t instanceof IDBRequest)return Tl(t);if(Zt.has(t))return Zt.get(t);const e=Nl(t);return e!==t&&(Zt.set(t,e),zn.set(e,t)),e}const en=t=>zn.get(t);function Al(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ve(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ve(o.result),c.oldVersion,c.newVersion,ve(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const kl=["get","getKey","getAll","getAllKeys","count"],Dl=["put","add","delete","clear"],tn=new Map;function Ns(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Dl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kl.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return tn.set(e,r),r}Rl(t=>({...t,get:(e,n,s)=>Ns(e,n)||t.get(e,n,s),has:(e,n)=>!!Ns(e,n)||t.has(e,n)}));/**
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
 */class Ll{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cn="@firebase/app",As="0.7.33";/**
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
 */const Ne=new Ai("@firebase/app"),Ml="@firebase/app-compat",Fl="@firebase/analytics-compat",Vl="@firebase/analytics",$l="@firebase/app-check-compat",Bl="@firebase/app-check",Hl="@firebase/auth",Ul="@firebase/auth-compat",zl="@firebase/database",Wl="@firebase/database-compat",Kl="@firebase/functions",Gl="@firebase/functions-compat",jl="@firebase/installations",ql="@firebase/installations-compat",Yl="@firebase/messaging",Ql="@firebase/messaging-compat",Xl="@firebase/performance",Jl="@firebase/performance-compat",Zl="@firebase/remote-config",ea="@firebase/remote-config-compat",ta="@firebase/storage",na="@firebase/storage-compat",sa="@firebase/firestore",ia="@firebase/firestore-compat",ra="firebase",oa="9.10.0";/**
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
 */const Li="[DEFAULT]",la={[Cn]:"fire-core",[Ml]:"fire-core-compat",[Vl]:"fire-analytics",[Fl]:"fire-analytics-compat",[Bl]:"fire-app-check",[$l]:"fire-app-check-compat",[Hl]:"fire-auth",[Ul]:"fire-auth-compat",[zl]:"fire-rtdb",[Wl]:"fire-rtdb-compat",[Kl]:"fire-fn",[Gl]:"fire-fn-compat",[jl]:"fire-iid",[ql]:"fire-iid-compat",[Yl]:"fire-fcm",[Ql]:"fire-fcm-compat",[Xl]:"fire-perf",[Jl]:"fire-perf-compat",[Zl]:"fire-rc",[ea]:"fire-rc-compat",[ta]:"fire-gcs",[na]:"fire-gcs-compat",[sa]:"fire-fst",[ia]:"fire-fst-compat","fire-js":"fire-js",[ra]:"fire-js-all"};/**
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
 */const Ot=new Map,In=new Map;function aa(t,e){try{t.container.addComponent(e)}catch(n){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(In.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;In.set(e,t);for(const n of Ot.values())aa(n,t);return!0}function ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ua={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ae=new xi("app","Firebase",ua);/**
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
 */class ha{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
 */const da=oa;function fa(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Li,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});const i=Ot.get(s);if(i){if(vn(t,i.options)&&vn(n,i.config))return i;throw Ae.create("duplicate-app",{appName:s})}const r=new yl(s);for(const l of In.values())r.addComponent(l);const o=new ha(t,n,r);return Ot.set(s,o),o}function pa(t=Li){const e=Ot.get(t);if(!e)throw Ae.create("no-app",{appName:t});return e}function ze(t,e,n){var s;let i=(s=la[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(l.join(" "));return}Rt(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ma="firebase-heartbeat-database",ga=1,ht="firebase-heartbeat-store";let nn=null;function Pi(){return nn||(nn=Al(ma,ga,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ht)}}}).catch(t=>{throw Ae.create("idb-open",{originalErrorMessage:t.message})})),nn}async function _a(t){var e;try{return(await Pi()).transaction(ht).objectStore(ht).get(Mi(t))}catch(n){if(n instanceof pt)Ne.warn(n.message);else{const s=Ae.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ne.warn(s.message)}}}async function ks(t,e){var n;try{const i=(await Pi()).transaction(ht,"readwrite");return await i.objectStore(ht).put(e,Mi(t)),i.done}catch(s){if(s instanceof pt)Ne.warn(s.message);else{const i=Ae.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ne.warn(i.message)}}}function Mi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ya=1024,va=30*24*60*60*1e3;class ba{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ca(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ds();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=va}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ds(),{heartbeatsToSend:n,unsentEntries:s}=wa(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ds(){return new Date().toISOString().substring(0,10)}function wa(t,e=ya){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ls(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ls(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ca{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rl()?ol().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _a(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ls(t){return Ei(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ia(t){Rt(new ut("platform-logger",e=>new Ll(e),"PRIVATE")),Rt(new ut("heartbeat",e=>new ba(e),"PRIVATE")),ze(Cn,As,t),ze(Cn,As,"esm2017"),ze("fire-js","")}Ia("");var Sa="firebase",Ea="9.10.0";/**
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
 */ze(Sa,Ea,"app");const Ps="@firebase/database",Ms="0.13.6";/**
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
 */let Fi="";function Ta(t){Fi=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ct(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Oa(e)}}catch{}return new Ra},Oe=Vi("localStorage"),Sn=Vi("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new Ai("@firebase/database"),xa=function(){let t=1;return function(){return t++}}(),$i=function(t){const e=pl(t),n=new fl;n.update(e);const s=n.digest();return Hn.encodeByteArray(s)},mt=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mt.apply(null,s):typeof s=="object"?e+=j(s):e+=s,e+=" "}return e};let xe=null,Fs=!0;const Na=function(t,e){_(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(We.logLevel=N.VERBOSE,xe=We.log.bind(We),e&&Sn.set("logging_enabled",!0)):typeof t=="function"?xe=t:(xe=null,Sn.remove("logging_enabled"))},J=function(...t){if(Fs===!0&&(Fs=!1,xe===null&&Sn.get("logging_enabled")===!0&&Na(!0)),xe){const e=mt.apply(null,t);xe(e)}},gt=function(t){return function(...e){J(t,...e)}},En=function(...t){const e="FIREBASE INTERNAL ERROR: "+mt(...t);We.error(e)},ke=function(...t){const e=`FIREBASE FATAL ERROR: ${mt(...t)}`;throw We.error(e),new Error(e)},te=function(...t){const e="FIREBASE WARNING: "+mt(...t);We.warn(e)},Aa=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ka=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},je="[MIN_NAME]",De="[MAX_NAME]",Qe=function(t,e){if(t===e)return 0;if(t===je||e===De)return-1;if(e===je||t===De)return 1;{const n=Vs(t),s=Vs(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Da=function(t,e){return t===e?0:t<e?-1:1},tt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+j(e))},Wn=function(t){if(typeof t!="object"||t===null)return j(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=j(e[s]),n+=":",n+=Wn(t[e[s]]);return n+="}",n},Hi=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ui=function(t){_(!Bi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},La=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pa=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ma=new RegExp("^-?(0*)\\d{1,10}$"),Fa=-2147483648,Va=2147483647,Vs=function(t){if(Ma.test(t)){const e=Number(t);if(e>=Fa&&e<=Va)return e}return null},Xe=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw te("Exception was thrown by user callback.",n),e},Math.floor(0))}},$a=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ba{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(J("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="5",zi="v",Wi="s",Ki="r",Gi="f",ji=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qi="ls",Yi="p",On="ac",Qi="websocket",Xi="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function za(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ji(t,e,n){_(typeof e=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");let s;if(e===Qi)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xi)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);za(t)&&(n.ns=t.namespace);const i=[];return re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.counters_={}}incrementCounter(e,n=1){ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={},rn={};function Gn(t){const e=t.toString();return sn[e]||(sn[e]=new Wa),sn[e]}function Ka(t,e){const n=t.toString();return rn[n]||(rn[n]=e()),rn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xe(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="start",ja="close",qa="pLPCommand",Ya="pRTLPCB",Zi="id",er="pw",tr="ser",Qa="cb",Xa="seg",Ja="ts",Za="d",ec="dframe",nr=1870,sr=30,tc=nr-sr,nc=25e3,sc=3e4;class He{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gt(e),this.stats_=Gn(n),this.urlFn=c=>(this.appCheckToken&&(c[On]=this.appCheckToken),Ji(n,Xi,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ga(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sc)),ka(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jn((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$s)this.id=l,this.password=c;else if(o===ja)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$s]="t",s[tr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Qa]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zi]=Kn,this.transportSessionId&&(s[Wi]=this.transportSessionId),this.lastSessionId&&(s[qi]=this.lastSessionId),this.applicationId&&(s[Yi]=this.applicationId),this.appCheckToken&&(s[On]=this.appCheckToken),typeof location<"u"&&location.hostname&&ji.test(location.hostname)&&(s[Ki]=Gi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){He.forceAllow_=!0}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){return He.forceAllow_?!0:!He.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!La()&&!Pa()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Si(n),i=Hi(s,tc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ec]="t",s[Zi]=e,s[er]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=j(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jn{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xa(),window[qa+this.uniqueCallbackIdentifier]=e,window[Ya+this.uniqueCallbackIdentifier]=n,this.myIFrame=jn.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){J("frame writing exception"),l.stack&&J(l.stack),J(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||J("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zi]=this.myID,e[er]=this.myPW,e[tr]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sr+s.length<=nr;){const o=this.pendingSegs.shift();s=s+"&"+Xa+i+"="+o.seg+"&"+Ja+i+"="+o.ts+"&"+Za+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(nc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{J("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=16384,rc=45e3;let xt=null;typeof MozWebSocket<"u"?xt=MozWebSocket:typeof WebSocket<"u"&&(xt=WebSocket);class ae{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gt(this.connId),this.stats_=Gn(n),this.connURL=ae.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[zi]=Kn,typeof location<"u"&&location.hostname&&ji.test(location.hostname)&&(o[Ki]=Gi),n&&(o[Wi]=n),s&&(o[qi]=s),i&&(o[On]=i),r&&(o[Yi]=r),Ji(e,Qi,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oe.set("previous_websocket_failure",!0);try{let s;Ri(),this.mySock=new xt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xt!==null&&!ae.forceDisallow_}static previouslyFailed(){return Oe.isInMemoryStorage||Oe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ct(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hi(n,ic);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rc))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2;ae.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[He,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ae&&ae.isAvailable();let s=n&&!ae.previouslyFailed();if(e.webSocketOnly&&(n||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ae];else{const i=this.transports_=[];for(const r of dt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);dt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=6e4,lc=5e3,ac=10*1024,cc=100*1024,on="t",Bs="d",uc="s",Hs="r",hc="e",Us="o",zs="a",Ws="n",Ks="p",dc="h";class fc{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gt("c:"+this.id+":"),this.transportManager_=new dt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ac?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(on in e){const n=e[on];n===zs?this.upgradeIfSecondaryHealthy_():n===Hs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Us&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=tt("t",e),s=tt("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ks,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ws,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=tt("t",e),s=tt("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=tt(on,e);if(Bs in e){const s=e[Bs];if(n===dc)this.onHandshake_(s);else if(n===Ws){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uc?this.onConnectionShutdown_(s):n===Hs?this.onReset_(s):n===hc?En("Server Error: "+s):n===Us?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):En("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kn!==s&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),rt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ks,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends rr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nt}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=32,js=768;class D{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function x(){return new D("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function we(t){return t.pieces_.length-t.pieceNum_}function k(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new D(t.pieces_,e)}function or(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pc(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ar(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new D(e,0)}function B(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new D(n,0)}function w(t){return t.pieceNum_>=t.pieces_.length}function se(t,e){const n=b(t),s=b(e);if(n===null)return e;if(n===s)return se(k(t),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cr(t,e){if(we(t)!==we(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ce(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(we(t)>we(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class mc{constructor(e,n){this.errorPrefix_=n,this.parts_=lr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vt(this.parts_[s]);ur(this)}}function gc(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vt(e),ur(t)}function _c(t){const e=t.parts_.pop();t.byteLength_-=Vt(e),t.parts_.length>0&&(t.byteLength_-=1)}function ur(t){if(t.byteLength_>js)throw new Error(t.errorPrefix_+"has a key path longer than "+js+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gs)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gs+") or object contains a cycle "+Ee(t))}function Ee(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends rr{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qn}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=1e3,yc=60*5*1e3,qs=30*1e3,vc=1.3,bc=3e4,wc="server_kill",Ys=3;class pe extends ir{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=pe.nextPersistentConnectionId_++,this.log_=gt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nt,this.maxReconnectDelay_=yc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ri())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(j(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ft,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;pe.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ge(e,"w")){const s=Ge(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ul(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):En("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bc&&(this.reconnectDelay_=nt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){_(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?J("getToken() completed but was canceled"):(J("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new fc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{te(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(wc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&te(h),c())}}}interrupt(e){J("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){J("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ts(this.interruptReasons_)&&(this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Wn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){J("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ys&&(this.reconnectDelay_=qs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){J("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ys&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fi.replace(/\./g,"-")]=1,Oi()?e["framework.cordova"]=1:il()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nt.getInstance().currentlyOnline();return Ts(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new C(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new C(je,e),i=new C(je,n);return this.compare(s,i)!==0}minPost(){return C.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt;class hr extends Bt{static get __EMPTY_NODE(){return bt}static set __EMPTY_NODE(e){bt=e}compare(e,n){return Qe(e.name,n.name)}isDefinedOn(e){throw Ye("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return C.MIN}maxPost(){return new C(De,bt)}makePost(e,n){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new C(e,bt)}toString(){return".key"}}const Ke=new hr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class W{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:W.RED,this.left=i!=null?i:ee.EMPTY_NODE,this.right=r!=null?r:ee.EMPTY_NODE}copy(e,n,s,i,r){return new W(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}W.RED=!0;W.BLACK=!1;class Cc{copy(e,n,s,i,r){return this}insert(e,n,s){return new W(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ee{constructor(e,n=ee.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ee(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,W.BLACK,null,null))}remove(e){return new ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,W.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wt(this.root_,null,this.comparator_,!0,e)}}ee.EMPTY_NODE=new Cc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){return Qe(t.name,e.name)}function Yn(t,e){return Qe(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;function Sc(t){Rn=t}const dr=function(t){return typeof t=="number"?"number:"+Ui(t):"string:"+t},fr=function(t){if(t.isLeafNode()){const e=t.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ge(e,".sv"),"Priority must be a string or number.")}else _(t===Rn||t.isEmpty(),"priority of unexpected type.");_(t===Rn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class U{constructor(e,n=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fr(this.priorityNode_)}static set __childrenNodeConstructor(e){Qs=e}static get __childrenNodeConstructor(){return Qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:b(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=b(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||we(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dr(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ui(this.value_):e+=this.value_,this.lazyHash_=$i(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=U.VALUE_TYPE_ORDER.indexOf(n),r=U.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+n),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr,mr;function Ec(t){pr=t}function Tc(t){mr=t}class Oc extends Bt{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Qe(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return C.MIN}maxPost(){return new C(De,new U("[PRIORITY-POST]",mr))}makePost(e,n){const s=pr(e);return new C(n,new U("[PRIORITY-POST]",s))}toString(){return".priority"}}const Z=new Oc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=Math.log(2);class xc{constructor(e){const n=r=>parseInt(Math.log(r)/Rc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const At=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new W(d,h.node,W.BLACK,null,null);{const m=parseInt(u/2,10)+c,f=i(c,m),g=i(m+1,a);return h=t[m],d=n?n(h):h,new W(d,h.node,W.BLACK,f,g)}},r=function(c){let a=null,u=null,h=t.length;const d=function(f,g){const p=h-f,v=h;h-=f;const I=i(p+1,v),F=t[p],$=n?n(F):F;m(new W($,F.node,g,null,I))},m=function(f){a?(a.left=f,a=f):(u=f,a=f)};for(let f=0;f<c.count;++f){const g=c.nextBitIsOne(),p=Math.pow(2,c.count-(f+1));g?d(p,W.BLACK):(d(p,W.BLACK),d(p,W.RED))}return u},o=new xc(t.length),l=r(o);return new ee(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const $e={};class fe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return _($e&&Z,"ChildrenNode.ts has not been loaded"),ln=ln||new fe({".priority":$e},{".priority":Z}),ln}get(e){const n=Ge(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ee?n:null}hasIndex(e){return ge(this.indexSet_,e.toString())}addIndex(e,n){_(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(C.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=At(s,e.getCompare()):l=$e;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new fe(u,a)}addToIndexes(e,n){const s=Tt(this.indexes_,(i,r)=>{const o=Ge(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===$e)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(C.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),At(l,o.getCompare())}else return $e;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new C(e.name,l))),c.insert(e,e.node)}});return new fe(s,this.indexSet_)}removeFromIndexes(e,n){const s=Tt(this.indexes_,i=>{if(i===$e)return i;{const r=n.get(e.name);return r?i.remove(new C(e.name,r)):i}});return new fe(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st;class T{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&fr(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return st||(st=new T(new ee(Yn),null,fe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?st:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(_(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new C(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?st:this.priorityNode_;return new T(i,o,r)}}updateChild(e,n){const s=b(e);if(s===null)return n;{_(b(e)!==".priority"||we(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(k(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),s++,r&&T.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dr(this.getPriority().val())+":"),this.forEachChild(Z,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":$i(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new C(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new C(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new C(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,C.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,C.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_t?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Z),i=n.getIterator(Z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Nc extends T{constructor(){super(new ee(Yn),T.EMPTY_NODE,fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const _t=new Nc;Object.defineProperties(C,{MIN:{value:new C(je,T.EMPTY_NODE)},MAX:{value:new C(De,_t)}});hr.__EMPTY_NODE=T.EMPTY_NODE;U.__childrenNodeConstructor=T;Sc(_t);Tc(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=!0;function G(t,e=null){if(t===null)return T.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new U(n,G(e))}if(!(t instanceof Array)&&Ac){const n=[];let s=!1;if(re(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=G(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new C(o,c)))}}),n.length===0)return T.EMPTY_NODE;const r=At(n,Ic,o=>o.name,Yn);if(s){const o=At(n,Z.getCompare());return new T(r,G(e),new fe({".priority":o},{".priority":Z}))}else return new T(r,G(e),fe.Default)}else{let n=T.EMPTY_NODE;return re(t,(s,i)=>{if(ge(t,s)&&s.substring(0,1)!=="."){const r=G(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(G(e))}}Ec(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends Bt{constructor(e){super(),this.indexPath_=e,_(!w(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Qe(e.name,n.name):r}makePost(e,n){const s=G(e),i=T.EMPTY_NODE.updateChild(this.indexPath_,s);return new C(n,i)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,_t);return new C(De,e)}toString(){return lr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Bt{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Qe(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return C.MIN}maxPost(){return C.MAX}makePost(e,n){const s=G(e);return new C(n,s)}toString(){return".value"}}const Lc=new Dc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return{type:"value",snapshotNode:t}}function Mc(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fc(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vc(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:De}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Js(t){const e={};if(t.isDefault())return e;let n;return t.index_===Z?n="$priority":t.index_===Lc?n="$value":t.index_===Ke?n="$key":(_(t.index_ instanceof kc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=j(n),t.startSet_&&(e.startAt=j(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+j(t.indexStartName_))),t.endSet_&&(e.endAt=j(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+j(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zs(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ir{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kt.getListenId_(e,s),l={};this.listens_[o]=l;const c=Js(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Ge(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=kt.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Js(e._queryParams),s=e._path.toString(),i=new Ft;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dl(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ct(l.responseText)}catch{te("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&te("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return{value:null,children:new Map}}function gr(t,e,n){if(w(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=b(e);t.children.has(s)||t.children.set(s,Dt());const i=t.children.get(s);e=k(e),gr(i,e,n)}}function xn(t,e,n){t.value!==null?n(e,t.value):Bc(t,(s,i)=>{const r=new D(e.toString()+"/"+s);xn(i,r,n)})}function Bc(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=10*1e3,Uc=30*1e3,zc=5*60*1e3;class Wc{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Hc(e);const s=ei+(Uc-ei)*Math.random();rt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;re(e,(i,r)=>{r>0&&ge(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),rt(this.reportStats_.bind(this),Math.floor(Math.random()*2*zc))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function _r(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=he.ACK_USER_WRITE,this.source=_r()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new D(e));return new Lt(x(),n,this.revert)}}else return _(b(this.path)===e,"operationForChild called for unrelated child."),new Lt(k(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=he.OVERWRITE}operationForChild(e){return w(this.path)?new Le(this.source,x(),this.snap.getImmediateChild(e)):new Le(this.source,k(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=he.MERGE}operationForChild(e){if(w(this.path)){const n=this.children.subtree(new D(e));return n.isEmpty()?null:n.value?new Le(this.source,x(),n.value):new ft(this.source,x(),n)}else return _(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ft(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Kc(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vc(o.childName,o.snapshotNode))}),it(t,i,"child_removed",e,s,n),it(t,i,"child_added",e,s,n),it(t,i,"child_moved",r,s,n),it(t,i,"child_changed",e,s,n),it(t,i,"value",e,s,n),i}function it(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>jc(t,l,c)),o.forEach(l=>{const c=Gc(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Gc(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jc(t,e,n){if(e.childName==null||n.childName==null)throw Ye("Should only compare child_ events.");const s=new C(e.childName,e.snapshotNode),i=new C(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){return{eventCache:t,serverCache:e}}function ot(t,e,n,s){return br(new Xn(e,n,s),t.serverCache)}function wr(t,e,n,s){return br(t.eventCache,new Xn(e,n,s))}function Nn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;const qc=()=>(an||(an=new ee(Da)),an);class A{constructor(e,n=qc()){this.value=e,this.children=n}static fromObject(e){let n=new A(null);return re(e,(s,i)=>{n=n.set(new D(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:x(),value:this.value};if(w(e))return null;{const s=b(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(k(e),n);return r!=null?{path:B(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const n=b(e),s=this.children.get(n);return s!==null?s.subtree(k(e)):new A(null)}}set(e,n){if(w(e))return new A(n,this.children);{const s=b(e),r=(this.children.get(s)||new A(null)).set(k(e),n),o=this.children.insert(s,r);return new A(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const n=b(e),s=this.children.get(n);if(s){const i=s.remove(k(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const n=b(e),s=this.children.get(n);return s?s.get(k(e)):null}}setTree(e,n){if(w(e))return n;{const s=b(e),r=(this.children.get(s)||new A(null)).setTree(k(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new A(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(B(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,x(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(w(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(k(e),B(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,x(),n)}foreachOnPath_(e,n,s){if(w(e))return this;{this.value&&s(n,this.value);const i=b(e),r=this.children.get(i);return r?r.foreachOnPath_(k(e),B(n,i),s):new A(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(B(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.writeTree_=e}static empty(){return new ue(new A(null))}}function lt(t,e,n){if(w(e))return new ue(new A(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=se(i,e);return r=r.updateChild(o,n),new ue(t.writeTree_.set(i,r))}else{const i=new A(n),r=t.writeTree_.setTree(e,i);return new ue(r)}}}function ti(t,e,n){let s=t;return re(n,(i,r)=>{s=lt(s,B(e,i),r)}),s}function ni(t,e){if(w(e))return ue.empty();{const n=t.writeTree_.setTree(e,new A(null));return new ue(n)}}function An(t,e){return Fe(t,e)!=null}function Fe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(se(n.path,e)):null}function si(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(s,i)=>{e.push(new C(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new C(s,i.value))}),e}function be(t,e){if(w(e))return t;{const n=Fe(t,e);return n!=null?new ue(new A(n)):new ue(t.writeTree_.subtree(e))}}function kn(t){return t.writeTree_.isEmpty()}function qe(t,e){return Cr(x(),t.writeTree_,e)}function Cr(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Cr(B(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(B(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){return Rr(e,t)}function Yc(t,e,n,s,i){_(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=lt(t.visibleWrites,e,n)),t.lastWriteId=s}function Qc(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Xc(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);_(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Jc(l,s.path)?i=!1:ce(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Zc(t),!0;if(s.snap)t.visibleWrites=ni(t.visibleWrites,s.path);else{const l=s.children;re(l,c=>{t.visibleWrites=ni(t.visibleWrites,B(s.path,c))})}return!0}else return!1}function Jc(t,e){if(t.snap)return ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ce(B(t.path,n),e))return!0;return!1}function Zc(t){t.visibleWrites=Sr(t.allWrites,eu,x()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eu(t){return t.visible}function Sr(t,e,n){let s=ue.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ce(n,o)?(l=se(n,o),s=lt(s,l,r.snap)):ce(o,n)&&(l=se(o,n),s=lt(s,x(),r.snap.getChild(l)));else if(r.children){if(ce(n,o))l=se(n,o),s=ti(s,l,r.children);else if(ce(o,n))if(l=se(o,n),w(l))s=ti(s,x(),r.children);else{const c=Ge(r.children,b(l));if(c){const a=c.getChild(k(l));s=lt(s,x(),a)}}}else throw Ye("WriteRecord should have .snap or .children")}}return s}function Er(t,e,n,s,i){if(!s&&!i){const r=Fe(t.visibleWrites,e);if(r!=null)return r;{const o=be(t.visibleWrites,e);if(kn(o))return n;if(n==null&&!An(o,x()))return null;{const l=n||T.EMPTY_NODE;return qe(o,l)}}}else{const r=be(t.visibleWrites,e);if(!i&&kn(r))return n;if(!i&&n==null&&!An(r,x()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(ce(a.path,e)||ce(e,a.path))},l=Sr(t.allWrites,o,e),c=n||T.EMPTY_NODE;return qe(l,c)}}}function tu(t,e,n){let s=T.EMPTY_NODE;const i=Fe(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=be(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const c=qe(be(r,new D(o)),l);s=s.updateImmediateChild(o,c)}),si(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=be(t.visibleWrites,e);return si(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function nu(t,e,n,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=B(e,n);if(An(t.visibleWrites,r))return null;{const o=be(t.visibleWrites,r);return kn(o)?i.getChild(n):qe(o,i.getChild(n))}}function su(t,e,n,s){const i=B(e,n),r=Fe(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=be(t.visibleWrites,i);return qe(o,s.getNode().getImmediateChild(n))}else return null}function iu(t,e){return Fe(t.visibleWrites,e)}function ru(t,e,n,s,i,r,o){let l;const c=be(t.visibleWrites,e),a=Fe(c,x());if(a!=null)l=a;else if(n!=null)l=qe(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function ou(){return{visibleWrites:ue.empty(),allWrites:[],lastWriteId:-1}}function Dn(t,e,n,s){return Er(t.writeTree,t.treePath,e,n,s)}function Tr(t,e){return tu(t.writeTree,t.treePath,e)}function ii(t,e,n,s){return nu(t.writeTree,t.treePath,e,n,s)}function Pt(t,e){return iu(t.writeTree,B(t.treePath,e))}function lu(t,e,n,s,i,r){return ru(t.writeTree,t.treePath,e,n,s,i,r)}function Jn(t,e,n){return su(t.writeTree,t.treePath,e,n)}function Or(t,e){return Rr(B(t.treePath,e),t.writeTree)}function Rr(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Xs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Fc(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mc(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xs(s,e.snapshotNode,i.oldSnap));else throw Ye("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const xr=new cu;class Zn{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jn(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pe(this.viewCache_),r=lu(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function uu(t,e){_(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hu(t,e,n,s,i){const r=new au;let o,l;if(n.type===he.OVERWRITE){const a=n;a.source.fromUser?o=Ln(t,e,a.path,a.snap,s,i,r):(_(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!w(a.path),o=Mt(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===he.MERGE){const a=n;a.source.fromUser?o=fu(t,e,a.path,a.children,s,i,r):(_(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Pn(t,e,a.path,a.children,s,i,l,r))}else if(n.type===he.ACK_USER_WRITE){const a=n;a.revert?o=gu(t,e,a.path,s,i,r):o=pu(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===he.LISTEN_COMPLETE)o=mu(t,e,n.path,s,r);else throw Ye("Unknown operation type: "+n.type);const c=r.getChanges();return du(e,o,c),{viewCache:o,changes:c}}function du(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nn(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pc(Nn(e)))}}function Nr(t,e,n,s,i,r){const o=e.eventCache;if(Pt(s,n)!=null)return e;{let l,c;if(w(n))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Pe(e),u=a instanceof T?a:T.EMPTY_NODE,h=Tr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=Dn(s,Pe(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=b(n);if(a===".priority"){_(we(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=ii(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=k(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=ii(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(a).updateChild(u,d):h=o.getNode().getImmediateChild(a)}else h=Jn(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return ot(e,l,o.isFullyInitialized()||w(n),t.filter.filtersNodes())}}function Mt(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(w(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),m,null)}else{const m=b(n);if(!c.isCompleteForPath(n)&&we(n)>1)return e;const f=k(n),p=c.getNode().getImmediateChild(m).updateChild(f,s);m===".priority"?a=u.updatePriority(c.getNode(),p):a=u.updateChild(c.getNode(),m,p,f,xr,null)}const h=wr(e,a,c.isFullyInitialized()||w(n),u.filtersNodes()),d=new Zn(i,h,r);return Nr(t,h,n,i,d,l)}function Ln(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Zn(i,e,r);if(w(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ot(e,a,!0,t.filter.filtersNodes());else{const h=b(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ot(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=k(n),m=l.getNode().getImmediateChild(h);let f;if(w(d))f=s;else{const g=u.getCompleteChild(h);g!=null?or(d)===".priority"&&g.getChild(ar(d)).isEmpty()?f=g:f=g.updateChild(d,s):f=T.EMPTY_NODE}if(m.equals(f))c=e;else{const g=t.filter.updateChild(l.getNode(),h,f,d,u,o);c=ot(e,g,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ri(t,e){return t.eventCache.isCompleteForChild(e)}function fu(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=B(n,c);ri(e,b(u))&&(l=Ln(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=B(n,c);ri(e,b(u))||(l=Ln(t,l,u,a,i,r,o))}),l}function oi(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pn(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;w(n)?a=s:a=new A(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),f=oi(t,m,d);c=Mt(t,c,new D(h),f,i,r,o,l)}}),a.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!m){const f=e.serverCache.getNode().getImmediateChild(h),g=oi(t,f,d);c=Mt(t,c,new D(h),g,i,r,o,l)}}),c}function pu(t,e,n,s,i,r,o){if(Pt(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(w(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Mt(t,e,n,c.getNode().getChild(n),i,r,l,o);if(w(n)){let a=new A(null);return c.getNode().forEachChild(Ke,(u,h)=>{a=a.set(new D(u),h)}),Pn(t,e,n,a,i,r,l,o)}else return e}else{let a=new A(null);return s.foreach((u,h)=>{const d=B(n,u);c.isCompleteForPath(d)&&(a=a.set(u,c.getNode().getChild(d)))}),Pn(t,e,n,a,i,r,l,o)}}function mu(t,e,n,s,i){const r=e.serverCache,o=wr(e,r.getNode(),r.isFullyInitialized()||w(n),r.isFiltered());return Nr(t,o,n,s,xr,i)}function gu(t,e,n,s,i,r){let o;if(Pt(s,n)!=null)return e;{const l=new Zn(s,e,i),c=e.eventCache.getNode();let a;if(w(n)||b(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Dn(s,Pe(e));else{const h=e.serverCache.getNode();_(h instanceof T,"serverChildren would be complete if leaf node"),u=Tr(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=b(n);let h=Jn(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,k(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,T.EMPTY_NODE,k(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dn(s,Pe(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||Pt(s,x())!=null,ot(e,a,o,t.filter.filtersNodes())}}function _u(t,e){const n=Pe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!w(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function li(t,e,n,s){e.type===he.MERGE&&e.source.queryId!==null&&(_(Pe(t.viewCache_),"We should always have a full cache before handling merges"),_(Nn(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hu(t.processor_,i,e,n,s);return uu(t.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function yu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Kc(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;function vu(t){_(!ai,"__referenceConstructor has already been defined"),ai=t}function es(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),li(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(li(o,e,n,s));return r}}function ts(t,e){let n=null;for(const s of t.views.values())n=n||_u(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;function bu(t){_(!ci,"__referenceConstructor has already been defined"),ci=t}class ui{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=ou(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ar(t,e,n,s,i){return Yc(t.pendingWriteTree_,e,n,s,i),i?Ut(t,new Le(_r(),e,n)):[]}function Re(t,e,n=!1){const s=Qc(t.pendingWriteTree_,e);if(Xc(t.pendingWriteTree_,e)){let r=new A(null);return s.snap!=null?r=r.set(x(),!0):re(s.children,o=>{r=r.set(new D(o),!0)}),Ut(t,new Lt(s.path,r,n))}else return[]}function Ht(t,e,n){return Ut(t,new Le(yr(),e,n))}function wu(t,e,n){const s=A.fromObject(n);return Ut(t,new ft(yr(),e,s))}function Cu(t,e,n,s){const i=Lr(t,s);if(i!=null){const r=Pr(i),o=r.path,l=r.queryId,c=se(o,e),a=new Le(vr(l),c,n);return Mr(t,o,a)}else return[]}function Iu(t,e,n,s){const i=Lr(t,s);if(i){const r=Pr(i),o=r.path,l=r.queryId,c=se(o,e),a=A.fromObject(n),u=new ft(vr(l),c,a);return Mr(t,o,u)}else return[]}function ns(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=se(o,e),a=ts(l,c);if(a)return a});return Er(i,e,r,n,!0)}function Ut(t,e){return kr(e,t.syncPointTree_,null,Ir(t.pendingWriteTree_,x()))}function kr(t,e,n,s){if(w(t.path))return Dr(t,e,n,s);{const i=e.get(x());n==null&&i!=null&&(n=ts(i,x()));let r=[];const o=b(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Or(s,o);r=r.concat(kr(l,c,a,u))}return i&&(r=r.concat(es(i,t,s,n))),r}}function Dr(t,e,n,s){const i=e.get(x());n==null&&i!=null&&(n=ts(i,x()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Or(s,o),u=t.operationForChild(o);u&&(r=r.concat(Dr(u,l,c,a)))}),i&&(r=r.concat(es(i,t,s,n))),r}function Lr(t,e){return t.tagToQueryMap.get(e)}function Pr(t){const e=t.indexOf("$");return _(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new D(t.substr(0,e))}}function Mr(t,e,n){const s=t.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=Ir(t.pendingWriteTree_,e);return es(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ss(n)}node(){return this.node_}}class is{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=B(this.path_,e);return new is(this.syncTree_,n)}node(){return ns(this.syncTree_,this.path_)}}const Su=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hi=function(t,e,n){if(!t||typeof t!="object")return t;if(_(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Eu(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Tu(t[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Eu=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+t)}},Tu=function(t,e,n){t.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ou=function(t,e,n,s){return rs(e,new is(n,t),s)},Fr=function(t,e,n){return rs(t,new ss(e),n)};function rs(t,e,n){const s=t.getPriority().val(),i=hi(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=hi(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new U(l,G(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new U(i))),o.forEachChild(Z,(l,c)=>{const a=rs(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ls(t,e){let n=e instanceof D?e:new D(e),s=t,i=b(n);for(;i!==null;){const r=Ge(s.node.children,i)||{children:{},childCount:0};s=new os(i,s,r),n=k(n),i=b(n)}return s}function Je(t){return t.node.value}function Vr(t,e){t.node.value=e,Mn(t)}function $r(t){return t.node.childCount>0}function Ru(t){return Je(t)===void 0&&!$r(t)}function zt(t,e){re(t.node.children,(n,s)=>{e(new os(n,t,s))})}function Br(t,e,n,s){n&&!s&&e(t),zt(t,i=>{Br(i,e,!0,s)}),n&&s&&e(t)}function xu(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function yt(t){return new D(t.parent===null?t.name:yt(t.parent)+"/"+t.name)}function Mn(t){t.parent!==null&&Nu(t.parent,t.name,t)}function Nu(t,e,n){const s=Ru(n),i=ge(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Mn(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mn(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=/[\[\].#$\/\u0000-\u001F\u007F]/,ku=/[\[\].#$\u0000-\u001F\u007F]/,cn=10*1024*1024,Hr=function(t){return typeof t=="string"&&t.length!==0&&!Au.test(t)},Ur=function(t){return typeof t=="string"&&t.length!==0&&!ku.test(t)},Du=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ur(t)},Lu=function(t,e,n,s){s&&e===void 0||as(Un(t,"value"),e,n)},as=function(t,e,n){const s=n instanceof D?new mc(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ee(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ee(s)+" with contents = "+e.toString());if(Bi(e))throw new Error(t+"contains "+e.toString()+" "+Ee(s));if(typeof e=="string"&&e.length>cn/3&&Vt(e)>cn)throw new Error(t+"contains a string greater than "+cn+" utf8 bytes "+Ee(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hr(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ee(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gc(s,o),as(t,l,s),_c(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ee(s)+" in addition to actual children.")}},zr=function(t,e,n,s){if(!(s&&n===void 0)&&!Ur(n))throw new Error(Un(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Pu=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zr(t,e,n,s)},Mu=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Fu=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Du(n))throw new Error(Un(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!cr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function me(t,e,n){Wr(t,n),$u(t,s=>ce(s,e)||ce(e,s))}function $u(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Bu(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Bu(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();xe&&J("event: "+n.toString()),Xe(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="repo_interrupt",Uu=25;class zu{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dt(),this.transactionQueueTree_=new os,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wu(t,e,n){if(t.stats_=Gn(t.repoInfo_),t.forceRestClient_||$a())t.server_=new kt(t.repoInfo_,(s,i,r,o)=>{di(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fi(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pe(t.repoInfo_,e,(s,i,r,o)=>{di(t,s,i,r,o)},s=>{fi(t,s)},s=>{Gu(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ka(t.repoInfo_,()=>new Wc(t.stats_,t.server_)),t.infoData_=new $c,t.infoSyncTree_=new ui({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ht(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),us(t,"connected",!1),t.serverSyncTree_=new ui({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);me(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ku(t){const n=t.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cs(t){return Su({timestamp:Ku(t)})}function di(t,e,n,s,i){t.dataUpdateCount++;const r=new D(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Tt(n,a=>G(a));o=Iu(t.serverSyncTree_,r,c,i)}else{const c=G(n);o=Cu(t.serverSyncTree_,r,c,i)}else if(s){const c=Tt(n,a=>G(a));o=wu(t.serverSyncTree_,r,c)}else{const c=G(n);o=Ht(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Wt(t,r)),me(t.eventQueue_,l,o)}function fi(t,e){us(t,"connected",e),e===!1&&qu(t)}function Gu(t,e){re(e,(n,s)=>{us(t,n,s)})}function us(t,e,n){const s=new D("/.info/"+e),i=G(n);t.infoData_.updateSnapshot(s,i);const r=Ht(t.infoSyncTree_,s,i);me(t.eventQueue_,s,r)}function Kr(t){return t.nextWriteId_++}function ju(t,e,n,s,i){hs(t,"set",{path:e.toString(),value:n,priority:s});const r=cs(t),o=G(n,s),l=ns(t.serverSyncTree_,e),c=Fr(o,l,r),a=Kr(t),u=Ar(t.serverSyncTree_,e,c,a,!0);Wr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const f=d==="ok";f||te("set at "+e+" failed: "+d);const g=Re(t.serverSyncTree_,a,!f);me(t.eventQueue_,e,g),Qu(t,i,d,m)});const h=Qr(t,e);Wt(t,h),me(t.eventQueue_,h,[])}function qu(t){hs(t,"onDisconnectEvents");const e=cs(t),n=Dt();xn(t.onDisconnect_,x(),(i,r)=>{const o=Ou(i,r,t.serverSyncTree_,e);gr(n,i,o)});let s=[];xn(n,x(),(i,r)=>{s=s.concat(Ht(t.serverSyncTree_,i,r));const o=Qr(t,i);Wt(t,o)}),t.onDisconnect_=Dt(),me(t.eventQueue_,x(),s)}function Yu(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Hu)}function hs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),J(n,...e)}function Qu(t,e,n,s){e&&Xe(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Gr(t,e,n){return ns(t.serverSyncTree_,e,n)||T.EMPTY_NODE}function ds(t,e=t.transactionQueueTree_){if(e||Kt(t,e),Je(e)){const n=qr(t,e);_(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Xu(t,yt(e),n)}else $r(e)&&zt(e,n=>{ds(t,n)})}function Xu(t,e,n){const s=n.map(a=>a.currentWriteId),i=Gr(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=se(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{hs(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Re(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Kt(t,ls(t.transactionQueueTree_,e)),ds(t,t.transactionQueueTree_),me(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Xe(h[d])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{te("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}Wt(t,e)}},o)}function Wt(t,e){const n=jr(t,e),s=yt(n),i=qr(t,n);return Ju(t,i,s),s}function Ju(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=se(n,c.path);let u=!1,h;if(_(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Re(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Uu)u=!0,h="maxretry",i=i.concat(Re(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Gr(t,c.path,o);c.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){as("transaction failed: Data returned ",m,c.path);let f=G(m);typeof m=="object"&&m!=null&&ge(m,".priority")||(f=f.updatePriority(d.getPriority()));const p=c.currentWriteId,v=cs(t),I=Fr(f,d,v);c.currentOutputSnapshotRaw=f,c.currentOutputSnapshotResolved=I,c.currentWriteId=Kr(t),o.splice(o.indexOf(p),1),i=i.concat(Ar(t.serverSyncTree_,c.path,I,c.currentWriteId,c.applyLocally)),i=i.concat(Re(t.serverSyncTree_,p,!0))}else u=!0,h="nodata",i=i.concat(Re(t.serverSyncTree_,c.currentWriteId,!0))}me(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Kt(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Xe(s[l]);ds(t,t.transactionQueueTree_)}function jr(t,e){let n,s=t.transactionQueueTree_;for(n=b(e);n!==null&&Je(s)===void 0;)s=ls(s,n),e=k(e),n=b(e);return s}function qr(t,e){const n=[];return Yr(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yr(t,e,n){const s=Je(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zt(e,i=>{Yr(t,i,n)})}function Kt(t,e){const n=Je(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Vr(e,n.length>0?n:void 0)}zt(e,s=>{Kt(t,s)})}function Qr(t,e){const n=yt(jr(t,e)),s=ls(t.transactionQueueTree_,e);return xu(s,i=>{un(t,i)}),un(t,s),Br(s,i=>{un(t,i)}),n}function un(t,e){const n=Je(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(_(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Re(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vr(e,void 0):n.length=r+1,me(t.eventQueue_,yt(e),i);for(let o=0;o<s.length;o++)Xe(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):te(`Invalid query segment '${n}' in query '${t}'`)}return e}const pi=function(t,e){const n=th(t),s=n.namespace;n.domain==="firebase.com"&&ke(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ke("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Aa();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ua(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new D(n.pathString)}},th=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Zu(t.substring(u,h)));const d=eh(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const m=e.slice(0,a);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const f=e.indexOf(".");s=e.substring(0,f).toLowerCase(),n=e.substring(f+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class fs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return w(this._path)?null:or(this._path)}get ref(){return new Ve(this._repo,this._path)}get _queryIdentifier(){const e=Zs(this._queryParams),n=Wn(e);return n==="{}"?"default":n}get _queryObject(){return Zs(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof fs))return!1;const n=this._repo===e._repo,s=cr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pc(this._path)}}class Ve extends fs{constructor(e,n){super(e,n,new Qn,!1)}get parent(){const e=ar(this._path);return e===null?null:new Ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function nh(t,e){return t=$t(t),t._checkNotDeleted("ref"),e!==void 0?sh(t._root,e):t._root}function sh(t,e){return t=$t(t),b(t._path)===null?Pu("child","path",e,!1):zr("child","path",e,!1),new Ve(t._repo,B(t._path,e))}function ih(t,e){t=$t(t),Mu("set",t._path),Lu("set",e,t._path,!1);const n=new Ft;return ju(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}vu(Ve);bu(Ve);/**
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
 */const rh="FIREBASE_DATABASE_EMULATOR_HOST",Fn={};let oh=!1;function lh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ke("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),J("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pi(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[rh]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=pi(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Tn(Tn.OWNER):new Ha(t.name,t.options,e);Fu("Invalid Firebase Database URL",o),w(o.path)||ke("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ch(l,t,u,new Ba(t.name,n));return new uh(h,t)}function ah(t,e){const n=Fn[e];(!n||n[t.key]!==t)&&ke(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yu(t),delete n[t.key]}function ch(t,e,n,s){let i=Fn[e.name];i||(i={},Fn[e.name]=i);let r=i[t.toURLString()];return r&&ke("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new zu(t,oh,n,s),i[t.toURLString()]=r,r}class uh{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ve(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ah(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ke("Cannot call "+e+" on a deleted database.")}}function hh(t=pa(),e){return ca(t,"database").getImmediate({identifier:e})}/**
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
 */function dh(t){Ta(da),Rt(new ut("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ze(Ps,Ms,t),ze(Ps,Ms,"esm2017")}pe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dh();const fh={apiKey:"AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",authDomain:"cognitive-people.firebaseapp.com",databaseURL:"https://cognitive-people-default-rtdb.firebaseio.com",projectId:"cognitive-people",storageBucket:"cognitive-people.appspot.com",messagingSenderId:"178995537344",appId:"1:178995537344:web:947b048cd023d737d49425"},ph=fa(fh),mh=hh(ph);function gh(t,e,n,s,i,r){ih(nh(mh,"users/"+t),{device:e,concentration:n,age_group:s,dyslexia:i,dyscalculia:r})}function _h(){const t=yn();gh(t.user.uid,t.user.device,t.user.concentration,t.user.age_group,t.user.dyscalculia,t.user.dyscalculia)}var Ct,yh=new Uint8Array(16);function Xr(){if(!Ct&&(Ct=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ct))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ct(yh)}const vh=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Jr(t){return typeof t=="string"&&vh.test(t)}var K=[];for(var hn=0;hn<256;++hn)K.push((hn+256).toString(16).substr(1));function ps(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(K[t[e+0]]+K[t[e+1]]+K[t[e+2]]+K[t[e+3]]+"-"+K[t[e+4]]+K[t[e+5]]+"-"+K[t[e+6]]+K[t[e+7]]+"-"+K[t[e+8]]+K[t[e+9]]+"-"+K[t[e+10]]+K[t[e+11]]+K[t[e+12]]+K[t[e+13]]+K[t[e+14]]+K[t[e+15]]).toLowerCase();if(!Jr(n))throw TypeError("Stringified UUID is invalid");return n}var mi,dn,fn=0,pn=0;function bh(t,e,n){var s=e&&n||0,i=e||new Array(16);t=t||{};var r=t.node||mi,o=t.clockseq!==void 0?t.clockseq:dn;if(r==null||o==null){var l=t.random||(t.rng||Xr)();r==null&&(r=mi=[l[0]|1,l[1],l[2],l[3],l[4],l[5]]),o==null&&(o=dn=(l[6]<<8|l[7])&16383)}var c=t.msecs!==void 0?t.msecs:Date.now(),a=t.nsecs!==void 0?t.nsecs:pn+1,u=c-fn+(a-pn)/1e4;if(u<0&&t.clockseq===void 0&&(o=o+1&16383),(u<0||c>fn)&&t.nsecs===void 0&&(a=0),a>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");fn=c,pn=a,dn=o,c+=122192928e5;var h=((c&268435455)*1e4+a)%4294967296;i[s++]=h>>>24&255,i[s++]=h>>>16&255,i[s++]=h>>>8&255,i[s++]=h&255;var d=c/4294967296*1e4&268435455;i[s++]=d>>>8&255,i[s++]=d&255,i[s++]=d>>>24&15|16,i[s++]=d>>>16&255,i[s++]=o>>>8|128,i[s++]=o&255;for(var m=0;m<6;++m)i[s+m]=r[m];return e||ps(i)}function wh(t){if(!Jr(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=e&255,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=e&255,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=e&255,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=e&255,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=e&255,n}function Ch(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}var Ih="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Sh="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Zr(t,e,n){function s(i,r,o,l){if(typeof i=="string"&&(i=Ch(i)),typeof r=="string"&&(r=wh(r)),r.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+i.length);if(c.set(r),c.set(i,r.length),c=n(c),c[6]=c[6]&15|e,c[8]=c[8]&63|128,o){l=l||0;for(var a=0;a<16;++a)o[l+a]=c[a];return o}return ps(c)}try{s.name=t}catch{}return s.DNS=Ih,s.URL=Sh,s}function Eh(t){if(typeof t=="string"){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return Th(Oh(Rh(t),t.length*8))}function Th(t){for(var e=[],n=t.length*32,s="0123456789abcdef",i=0;i<n;i+=8){var r=t[i>>5]>>>i%32&255,o=parseInt(s.charAt(r>>>4&15)+s.charAt(r&15),16);e.push(o)}return e}function eo(t){return(t+64>>>9<<4)+14+1}function Oh(t,e){t[e>>5]|=128<<e%32,t[eo(e)-1]=e;for(var n=1732584193,s=-271733879,i=-1732584194,r=271733878,o=0;o<t.length;o+=16){var l=n,c=s,a=i,u=r;n=q(n,s,i,r,t[o],7,-680876936),r=q(r,n,s,i,t[o+1],12,-389564586),i=q(i,r,n,s,t[o+2],17,606105819),s=q(s,i,r,n,t[o+3],22,-1044525330),n=q(n,s,i,r,t[o+4],7,-176418897),r=q(r,n,s,i,t[o+5],12,1200080426),i=q(i,r,n,s,t[o+6],17,-1473231341),s=q(s,i,r,n,t[o+7],22,-45705983),n=q(n,s,i,r,t[o+8],7,1770035416),r=q(r,n,s,i,t[o+9],12,-1958414417),i=q(i,r,n,s,t[o+10],17,-42063),s=q(s,i,r,n,t[o+11],22,-1990404162),n=q(n,s,i,r,t[o+12],7,1804603682),r=q(r,n,s,i,t[o+13],12,-40341101),i=q(i,r,n,s,t[o+14],17,-1502002290),s=q(s,i,r,n,t[o+15],22,1236535329),n=Y(n,s,i,r,t[o+1],5,-165796510),r=Y(r,n,s,i,t[o+6],9,-1069501632),i=Y(i,r,n,s,t[o+11],14,643717713),s=Y(s,i,r,n,t[o],20,-373897302),n=Y(n,s,i,r,t[o+5],5,-701558691),r=Y(r,n,s,i,t[o+10],9,38016083),i=Y(i,r,n,s,t[o+15],14,-660478335),s=Y(s,i,r,n,t[o+4],20,-405537848),n=Y(n,s,i,r,t[o+9],5,568446438),r=Y(r,n,s,i,t[o+14],9,-1019803690),i=Y(i,r,n,s,t[o+3],14,-187363961),s=Y(s,i,r,n,t[o+8],20,1163531501),n=Y(n,s,i,r,t[o+13],5,-1444681467),r=Y(r,n,s,i,t[o+2],9,-51403784),i=Y(i,r,n,s,t[o+7],14,1735328473),s=Y(s,i,r,n,t[o+12],20,-1926607734),n=Q(n,s,i,r,t[o+5],4,-378558),r=Q(r,n,s,i,t[o+8],11,-2022574463),i=Q(i,r,n,s,t[o+11],16,1839030562),s=Q(s,i,r,n,t[o+14],23,-35309556),n=Q(n,s,i,r,t[o+1],4,-1530992060),r=Q(r,n,s,i,t[o+4],11,1272893353),i=Q(i,r,n,s,t[o+7],16,-155497632),s=Q(s,i,r,n,t[o+10],23,-1094730640),n=Q(n,s,i,r,t[o+13],4,681279174),r=Q(r,n,s,i,t[o],11,-358537222),i=Q(i,r,n,s,t[o+3],16,-722521979),s=Q(s,i,r,n,t[o+6],23,76029189),n=Q(n,s,i,r,t[o+9],4,-640364487),r=Q(r,n,s,i,t[o+12],11,-421815835),i=Q(i,r,n,s,t[o+15],16,530742520),s=Q(s,i,r,n,t[o+2],23,-995338651),n=X(n,s,i,r,t[o],6,-198630844),r=X(r,n,s,i,t[o+7],10,1126891415),i=X(i,r,n,s,t[o+14],15,-1416354905),s=X(s,i,r,n,t[o+5],21,-57434055),n=X(n,s,i,r,t[o+12],6,1700485571),r=X(r,n,s,i,t[o+3],10,-1894986606),i=X(i,r,n,s,t[o+10],15,-1051523),s=X(s,i,r,n,t[o+1],21,-2054922799),n=X(n,s,i,r,t[o+8],6,1873313359),r=X(r,n,s,i,t[o+15],10,-30611744),i=X(i,r,n,s,t[o+6],15,-1560198380),s=X(s,i,r,n,t[o+13],21,1309151649),n=X(n,s,i,r,t[o+4],6,-145523070),r=X(r,n,s,i,t[o+11],10,-1120210379),i=X(i,r,n,s,t[o+2],15,718787259),s=X(s,i,r,n,t[o+9],21,-343485551),n=ye(n,l),s=ye(s,c),i=ye(i,a),r=ye(r,u)}return[n,s,i,r]}function Rh(t){if(t.length===0)return[];for(var e=t.length*8,n=new Uint32Array(eo(e)),s=0;s<e;s+=8)n[s>>5]|=(t[s/8]&255)<<s%32;return n}function ye(t,e){var n=(t&65535)+(e&65535),s=(t>>16)+(e>>16)+(n>>16);return s<<16|n&65535}function xh(t,e){return t<<e|t>>>32-e}function Gt(t,e,n,s,i,r){return ye(xh(ye(ye(e,t),ye(s,r)),i),n)}function q(t,e,n,s,i,r,o){return Gt(e&n|~e&s,t,e,i,r,o)}function Y(t,e,n,s,i,r,o){return Gt(e&s|n&~s,t,e,i,r,o)}function Q(t,e,n,s,i,r,o){return Gt(e^n^s,t,e,i,r,o)}function X(t,e,n,s,i,r,o){return Gt(n^(e|~s),t,e,i,r,o)}var Nh=Zr("v3",48,Eh);const Ah=Nh;function kh(t,e,n){t=t||{};var s=t.random||(t.rng||Xr)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=s[i];return e}return ps(s)}function Dh(t,e,n,s){switch(t){case 0:return e&n^~e&s;case 1:return e^n^s;case 2:return e&n^e&s^n&s;case 3:return e^n^s}}function mn(t,e){return t<<e|t>>>32-e}function Lh(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){var s=unescape(encodeURIComponent(t));t=[];for(var i=0;i<s.length;++i)t.push(s.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var r=t.length/4+2,o=Math.ceil(r/16),l=new Array(o),c=0;c<o;++c){for(var a=new Uint32Array(16),u=0;u<16;++u)a[u]=t[c*64+u*4]<<24|t[c*64+u*4+1]<<16|t[c*64+u*4+2]<<8|t[c*64+u*4+3];l[c]=a}l[o-1][14]=(t.length-1)*8/Math.pow(2,32),l[o-1][14]=Math.floor(l[o-1][14]),l[o-1][15]=(t.length-1)*8&4294967295;for(var h=0;h<o;++h){for(var d=new Uint32Array(80),m=0;m<16;++m)d[m]=l[h][m];for(var f=16;f<80;++f)d[f]=mn(d[f-3]^d[f-8]^d[f-14]^d[f-16],1);for(var g=n[0],p=n[1],v=n[2],I=n[3],F=n[4],$=0;$<80;++$){var H=Math.floor($/20),de=mn(g,5)+Dh(H,p,v,I)+F+e[H]+d[$]>>>0;F=I,I=v,v=mn(p,30)>>>0,p=g,g=de}n[0]=n[0]+g>>>0,n[1]=n[1]+p>>>0,n[2]=n[2]+v>>>0,n[3]=n[3]+I>>>0,n[4]=n[4]+F>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var Ph=Zr("v5",80,Lh);const Mh=Ph;var Fh={v1:bh,v3:Ah,v4:kh,v5:Mh},Vh=Eo();function $h(t){t.addEventListener("mousedown",to)}function Bh(t){t.removeEventListener("mousedown",to)}function Hh(t){let e=document.createElement("span");e.className="p-ink",e.setAttribute("role","presentation"),t.appendChild(e),e.addEventListener("animationend",no)}function Uh(t){let e=so(t);e&&(Bh(t),e.removeEventListener("animationend",no),e.remove())}function to(t){let e=t.currentTarget,n=so(e);if(!n||getComputedStyle(n,null).display==="none")return;if(O.removeClass(n,"p-ink-active"),!O.getHeight(n)&&!O.getWidth(n)){let o=Math.max(O.getOuterWidth(e),O.getOuterHeight(e));n.style.height=o+"px",n.style.width=o+"px"}let s=O.getOffset(e),i=t.pageX-s.left+document.body.scrollTop-O.getWidth(n)/2,r=t.pageY-s.top+document.body.scrollLeft-O.getHeight(n)/2;n.style.top=r+"px",n.style.left=i+"px",O.addClass(n,"p-ink-active")}function no(t){O.removeClass(t.currentTarget,"p-ink-active")}function so(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const ms={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(Hh(t),$h(t))},unmounted(t){Uh(t)}};var io={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,watch:{numToleratedItems(t){this.d_numToleratedItems=t},loading(t){this.d_loading=t},items(t,e){(!e||e.length!==(t||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(t){this.element&&this.element.scrollTo(t)},scrollToIndex(t,e="auto"){const n=this.isBoth(),s=this.isHorizontal(),i=this.first,{numToleratedItems:r}=this.calculateNumItems(),o=this.itemSize,l=(u=0,h)=>u<=h?0:u,c=(u,h)=>u*h,a=(u=0,h=0)=>this.scrollTo({left:u,top:h,behavior:e});if(n){const u={rows:l(t[0],r[0]),cols:l(t[1],r[1])};(u.rows!==i.rows||u.cols!==i.cols)&&a(c(u.cols,o[1]),c(u.rows,o[0]))}else{const u=l(t,r);u!==i&&(s?a(c(u,o),0):a(0,c(u,o)))}},scrollInView(t,e,n="auto"){if(e){const s=this.isBoth(),i=this.isHorizontal(),{first:r,viewport:o}=this.getRenderedRange(),l=(u=0,h=0)=>this.scrollTo({left:u,top:h,behavior:n}),c=e==="to-start",a=e==="to-end";if(c){if(s)o.first.rows-r.rows>t[0]?l(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-r.cols>t[1]&&l((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-r>t){const u=(o.first-1)*this.itemSize;i?l(u,0):l(0,u)}}else if(a){if(s)o.last.rows-r.rows<=t[0]+1?l(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-r.cols<=t[1]+1&&l((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-r<=t+1){const u=(o.first+1)*this.itemSize;i?l(u,0):l(0,u)}}}else this.scrollToIndex(t,n)},getRenderedRange(){const t=(s,i)=>Math.floor(s/(i||s));let e=this.first,n=0;if(this.element){const s=this.isBoth(),i=this.isHorizontal(),r=this.element.scrollTop,o=this.element.scrollLeft;s?(e={rows:t(r,this.itemSize[0]),cols:t(o,this.itemSize[1])},n={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols}):(e=t(i?o:r,this.itemSize),n=e+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:e,last:n}}},calculateNumItems(){const t=this.isBoth(),e=this.isHorizontal(),n=this.itemSize,s=this.getContentPosition(),i=this.element?this.element.offsetWidth-s.left:0,r=this.element?this.element.offsetHeight-s.top:0,o=(u,h)=>Math.ceil(u/(h||u)),l=u=>Math.ceil(u/2),c=t?{rows:o(r,n[0]),cols:o(i,n[1])}:o(e?i:r,n),a=this.d_numToleratedItems||(t?[l(c.rows),l(c.cols)]:l(c));return{numItemsInViewport:c,numToleratedItems:a}},calculateOptions(){const t=this.isBoth(),e=this.first,{numItemsInViewport:n,numToleratedItems:s}=this.calculateNumItems(),i=(o,l,c,a)=>this.getLast(o+l+(o<c?2:3)*c,a),r=t?{rows:i(e.rows,n.rows,s[0]),cols:i(e.cols,n.cols,s[1],!0)}:i(e,n,s);this.last=r,this.numItemsInViewport=n,this.d_numToleratedItems=s,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:n.rows}).map(()=>Array.from({length:n.cols})):Array.from({length:n})),this.lazy&&this.$emit("lazy-load",{first:e,last:r})},getLast(t=0,e){return this.items?Math.min(e?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition(){if(this.content){const t=getComputedStyle(this.content),e=parseInt(t.paddingLeft,10)+Math.max(parseInt(t.left,10),0),n=parseInt(t.paddingRight,10)+Math.max(parseInt(t.right,10),0),s=parseInt(t.paddingTop,10)+Math.max(parseInt(t.top,10),0),i=parseInt(t.paddingBottom,10)+Math.max(parseInt(t.bottom,10),0);return{left:e,right:n,top:s,bottom:i,x:e+n,y:s+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const t=this.isBoth(),e=this.isHorizontal(),n=this.element.parentElement,s=this.scrollWidth||`${this.element.offsetWidth||n.offsetWidth}px`,i=this.scrollHeight||`${this.element.offsetHeight||n.offsetHeight}px`,r=(o,l)=>this.element.style[o]=l;t||e?(r("height",i),r("width",s)):r("height",i)}},setSpacerSize(){const t=this.items;if(t){const e=this.isBoth(),n=this.isHorizontal(),s=this.getContentPosition(),i=(r,o,l,c=0)=>this.spacerStyle={...this.spacerStyle,[`${r}`]:(o||[]).length*l+c+"px"};e?(i("height",t,this.itemSize[0],s.y),i("width",this.columns||t[1],this.itemSize[1],s.x)):n?i("width",this.columns||t,this.itemSize,s.x):i("height",t,this.itemSize,s.y)}},setContentPosition(t){if(this.content){const e=this.isBoth(),n=this.isHorizontal(),s=t?t.first:this.first,i=(o,l)=>o*l,r=(o=0,l=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${o}px, ${l}px, 0)`}};if(e)r(i(s.cols,this.itemSize[1]),i(s.rows,this.itemSize[0]));else{const o=i(s,this.itemSize);n?r(o,0):r(0,o)}}},onScrollPositionChange(t){const e=t.target,n=this.isBoth(),s=this.isHorizontal(),i=this.getContentPosition(),r=(p,v)=>p?p>v?p-v:p:0,o=(p,v)=>Math.floor(p/(v||p)),l=(p,v,I,F,$,H)=>p<=$?$:H?I-F-$:v+$-1,c=(p,v,I,F,$,H,de)=>p<=H?0:Math.max(0,de?p<v?I:p-H:p>v?I:p-2*H),a=(p,v,I,F,$,H)=>{let de=v+F+2*$;return p>=$&&(de+=$+1),this.getLast(de,H)},u=r(e.scrollTop,i.top),h=r(e.scrollLeft,i.left);let d=n?{rows:0,cols:0}:0,m=this.last,f=!1,g=this.lastScrollPos;if(n){const p=this.lastScrollPos.top<=u,v=this.lastScrollPos.left<=h,I={rows:o(u,this.itemSize[0]),cols:o(h,this.itemSize[1])},F={rows:l(I.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],p),cols:l(I.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],v)};d={rows:c(I.rows,F.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],p),cols:c(I.cols,F.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],v)},m={rows:a(I.rows,d.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:a(I.cols,d.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},f=d.rows!==this.first.rows||m.rows!==this.last.rows||d.cols!==this.first.cols||m.cols!==this.last.cols,g={top:u,left:h}}else{const p=s?h:u,v=this.lastScrollPos<=p,I=o(p,this.itemSize),F=l(I,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,v);d=c(I,F,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,v),m=a(I,d,this.last,this.numItemsInViewport,this.d_numToleratedItems),f=d!==this.first||m!==this.last,g=p}return{first:d,last:m,isRangeChanged:f,scrollPos:g}},onScrollChange(t){const{first:e,last:n,isRangeChanged:s,scrollPos:i}=this.onScrollPositionChange(t);if(s){const r={first:e,last:n};this.setContentPosition(r),this.first=e,this.last=n,this.lastScrollPos=i,this.$emit("scroll-index-change",r),this.lazy&&this.$emit("lazy-load",r)}},onScroll(t){if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:e}=this.onScrollPositionChange(t);e&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(t)},getOptions(t){const e=(this.items||[]).length,n=this.isBoth()?this.first.rows+t:this.first+t;return{index:n,count:e,first:n===0,last:n===e-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions(t,e){let n=this.loaderArr.length;return{index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0,...e}},elementRef(t){this.element=t},contentRef(t){this.content=t}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const t=this.items;return t&&!this.d_loading?this.isBoth()?t.slice(this.first.rows,this.last.rows).map(e=>this.columns?e:e.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?t:t.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const t=this.isBoth(),e=this.isHorizontal();if(t||e)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}}};const zh=["tabindex"],Wh={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function Kh(t,e,n,s,i,r){return n.disabled?(S(),R(Ue,{key:1},[z(t.$slots,"default"),z(t.$slots,"content",{items:n.items,rows:n.items,columns:r.loadedColumns})],64)):(S(),R("div",{key:0,ref:r.elementRef,class:V(r.containerClass),tabindex:n.tabindex,style:Te(n.style),onScroll:e[0]||(e[0]=(...o)=>r.onScroll&&r.onScroll(...o))},[z(t.$slots,"content",{styleClass:r.contentClass,items:r.loadedItems,getItemOptions:r.getOptions,loading:i.d_loading,getLoaderOptions:r.getLoaderOptions,itemSize:n.itemSize,rows:r.loadedRows,columns:r.loadedColumns,contentRef:r.contentRef,spacerStyle:i.spacerStyle,contentStyle:i.contentStyle,vertical:r.isVertical(),horizontal:r.isHorizontal(),both:r.isBoth()},()=>[y("div",{ref:r.contentRef,class:V(r.contentClass),style:Te(i.contentStyle)},[(S(!0),R(Ue,null,St(r.loadedItems,(o,l)=>z(t.$slots,"item",{key:l,item:o,options:r.getOptions(l)})),128))],6)]),n.showSpacer?(S(),R("div",{key:0,class:"p-virtualscroller-spacer",style:Te(i.spacerStyle)},null,4)):le("",!0),!n.loaderDisabled&&n.showLoader&&i.d_loading?(S(),R("div",{key:1,class:V(r.loaderClass)},[t.$slots&&t.$slots.loader?(S(!0),R(Ue,{key:0},St(i.loaderArr,(o,l)=>z(t.$slots,"loader",{key:l,options:r.getLoaderOptions(l,r.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})),128)):(S(),R("i",Wh))],2)):le("",!0)],46,zh))}function Gh(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var jh=`
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
`;Gh(jh);io.render=Kh;var ro={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=O.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function qh(t,e,n,s,i,r){return r.inline?z(t.$slots,"default",{key:0}):i.mounted?(S(),To(Oo,{key:1,to:n.appendTo},[z(t.$slots,"default")],8,["to"])):le("",!0)}ro.render=qh;var oo={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Xt.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(t,e){return this.virtualScrollerDisabled?t:e&&e(t).index},getOptionLabel(t){return this.optionLabel?M.resolveFieldData(t,this.optionLabel):t},getOptionValue(t){return this.optionValue?M.resolveFieldData(t,this.optionValue):t},getOptionRenderKey(t,e){return(this.dataKey?M.resolveFieldData(t,this.dataKey):this.getOptionLabel(t))+"_"+e},isOptionDisabled(t){return this.optionDisabled?M.resolveFieldData(t,this.optionDisabled):!1},isOptionGroup(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel(t){return M.resolveFieldData(t,this.optionGroupLabel)},getOptionGroupChildren(t){return M.resolveFieldData(t,this.optionGroupChildren)},getAriaPosInset(t){return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(e=>this.isOptionGroup(e)).length:t)+1},show(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,t&&O.focus(this.$refs.focusInput)},hide(t){const e=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),t&&O.focus(this.$refs.focusInput)};setTimeout(()=>{e()},0)},onFocus(t){this.focused=!0,this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",t)},onBlur(t){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t)},onKeyDown(t){const e=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,this.editable);break;case"Home":this.onHomeKey(t,this.editable);break;case"End":this.onEndKey(t,this.editable);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Space":this.onSpaceKey(t,this.editable);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"Backspace":this.onBackspaceKey(t,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e&&M.isPrintableCharacter(t.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(t,t.key));break}},onEditableInput(t){const e=t.target.value;this.searchValue="",!this.searchOptions(t,e)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",e)},onContainerClick(t){this.disabled||this.loading||O.hasClass(t.target,"p-dropdown-clear-icon")||t.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(t){this.updateModel(t,null)},onFirstHiddenFocus(t){if(t.relatedTarget===this.$refs.focusInput){const n=O.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)");O.focus(n)}else O.focus(this.$refs.focusInput)},onLastHiddenFocus(){O.focus(this.$refs.firstHiddenFocusableElementOnOverlay)},onOptionSelect(t,e,n=!0){const s=this.getOptionValue(e);this.updateModel(t,s),n&&this.hide(!0)},onOptionMouseMove(t,e){this.focusOnHover&&this.changeFocusedOptionIndex(t,e)},onFilterChange(t){const e=t.target.value;this.filterValue=e,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:e}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(t){Vh.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey(t){const e=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(t,e),!this.overlayVisible&&this.show(),t.preventDefault()},onArrowUpKey(t,e=!1){if(t.altKey&&!e)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{const n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(t,n),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey(t,e=!1){e&&(this.focusedOptionIndex=-1)},onHomeKey(t,e=!1){e?(t.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(t,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),t.preventDefault()},onEndKey(t,e=!1){if(e){const n=t.currentTarget,s=n.value.length;n.setSelectionRange(s,s),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(t,this.findLastOptionIndex()),!this.overlayVisible&&this.show();t.preventDefault()},onPageUpKey(t){this.scrollInView(0),t.preventDefault()},onPageDownKey(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey(t){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(t),t.preventDefault()},onSpaceKey(t,e=!1){!e&&this.onEnterKey(t)},onEscapeKey(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey(t,e=!1){e||(this.overlayVisible&&this.hasFocusableElements()?(O.focus(this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(t,e=!1){e&&!this.overlayVisible&&this.show()},onOverlayEnter(t){Xt.set("overlay",t,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&O.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(t){Xt.clear(t)},alignOverlay(){this.appendTo==="self"?O.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=O.getOuterWidth(this.$el)+"px",O.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{this.overlayVisible&&this.overlay&&!this.$el.contains(t.target)&&!this.overlay.contains(t.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ro(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!O.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return O.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(t){return this.isValidOption(t)&&this.getOptionLabel(t).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(t){return t&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption(t){return this.isValidOption(t)&&this.isSelected(t)},isSelected(t){return M.equals(this.modelValue,this.getOptionValue(t),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(t=>this.isValidOption(t))},findLastOptionIndex(){return M.findLastIndex(this.visibleOptions,t=>this.isValidOption(t))},findNextOptionIndex(t){const e=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(n=>this.isValidOption(n)):-1;return e>-1?e+t+1:t},findPrevOptionIndex(t){const e=t>0?M.findLastIndex(this.visibleOptions.slice(0,t),n=>this.isValidOption(n)):-1;return e>-1?e:t},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(t=>this.isValidSelectedOption(t)):-1},findFirstFocusedOptionIndex(){const t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex(){const t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions(t,e){this.searchValue=(this.searchValue||"")+e;let n=-1,s=!1;return this.focusedOptionIndex!==-1?(n=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)),n=n===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)):n+this.focusedOptionIndex):n=this.visibleOptions.findIndex(i=>this.isOptionMatched(i)),n!==-1&&(s=!0),n===-1&&this.focusedOptionIndex===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(t,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s},changeFocusedOptionIndex(t,e){this.focusedOptionIndex!==e&&(this.focusedOptionIndex=e,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[e],!1))},scrollInView(t=-1){const e=t!==-1?`${this.id}_${t}`:this.focusedOptionId,n=O.findSingle(this.list,`li[id="${e}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(t!==-1?t:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(t,e){this.$emit("update:modelValue",e),this.$emit("change",{originalEvent:t,value:e})},flatOptions(t){return(t||[]).reduce((e,n,s)=>{e.push({optionGroup:n,group:!0,index:s});const i=this.getOptionGroupChildren(n);return i&&i.forEach(r=>e.push(r)),e},[])},overlayRef(t){this.overlay=t},listRef(t,e){this.list=t,e&&e(t)},virtualScrollerRef(t){this.virtualScroller=t}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]},visibleOptions(){const t=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?xo.filter(t,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):t},hasSelectedOption(){return M.isNotEmpty(this.modelValue)},label(){const t=this.findSelectedOptionIndex();return t!==-1?this.getOptionLabel(this.visibleOptions[t]):this.placeholder||"p-emptylabel"},editableInputValue(){const t=this.findSelectedOptionIndex();return t!==-1?this.getOptionLabel(this.visibleOptions[t]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return M.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},id(){return this.$attrs.id||No()},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(t=>!this.isOptionGroup(t)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:ms},components:{VirtualScroller:io,Portal:ro}};const Yh=["id"],Qh=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],Xh=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],Jh={class:"p-dropdown-trigger"},Zh={key:0,class:"p-dropdown-header"},ed={class:"p-dropdown-filter-container"},td=["value","placeholder","aria-owns","aria-activedescendant"],nd=y("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),sd={role:"status","aria-live":"polite",class:"p-hidden-accessible"},id=["id"],rd=["id"],od=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],ld={key:0,class:"p-dropdown-empty-message",role:"option"},ad={key:1,class:"p-dropdown-empty-message",role:"option"},cd={key:0,role:"status","aria-live":"polite",class:"p-hidden-accessible"},ud={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function hd(t,e,n,s,i,r){const o=Be("VirtualScroller"),l=Be("Portal"),c=$n("ripple");return S(),R("div",{ref:"container",id:r.id,class:V(r.containerClass),onClick:e[16]||(e[16]=(...a)=>r.onContainerClick&&r.onContainerClick(...a))},[n.editable?(S(),R("input",Ie({key:0,ref:"focusInput",id:n.inputId,type:"text",style:n.inputStyle,class:r.inputStyleClass,value:r.editableInputValue,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,disabled:n.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":r.id+"_list","aria-activedescendant":i.focused?r.focusedOptionId:void 0,onFocus:e[0]||(e[0]=(...a)=>r.onFocus&&r.onFocus(...a)),onBlur:e[1]||(e[1]=(...a)=>r.onBlur&&r.onBlur(...a)),onKeydown:e[2]||(e[2]=(...a)=>r.onKeyDown&&r.onKeyDown(...a)),onInput:e[3]||(e[3]=(...a)=>r.onEditableInput&&r.onEditableInput(...a))},n.inputProps),null,16,Qh)):(S(),R("span",Ie({key:1,ref:"focusInput",id:n.inputId,style:n.inputStyle,class:r.inputStyleClass,tabindex:n.disabled?-1:n.tabindex,role:"combobox","aria-label":t.ariaLabel||(r.label==="p-emptylabel"?void 0:r.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":i.overlayVisible,"aria-controls":r.id+"_list","aria-activedescendant":i.focused?r.focusedOptionId:void 0,"aria-disabled":n.disabled,onFocus:e[4]||(e[4]=(...a)=>r.onFocus&&r.onFocus(...a)),onBlur:e[5]||(e[5]=(...a)=>r.onBlur&&r.onBlur(...a)),onKeydown:e[6]||(e[6]=(...a)=>r.onKeyDown&&r.onKeyDown(...a))},n.inputProps),[z(t.$slots,"value",{value:n.modelValue,placeholder:n.placeholder},()=>[Ze(oe(r.label==="p-emptylabel"?"\xA0":r.label||"empty"),1)])],16,Xh)),n.showClear&&n.modelValue!=null?(S(),R("i",Ie({key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:e[7]||(e[7]=(...a)=>r.onClearClick&&r.onClearClick(...a))},n.clearIconProps),null,16)):le("",!0),y("div",Jh,[z(t.$slots,"indicator",{},()=>[y("span",{class:V(r.dropdownIconClass),"aria-hidden":"true"},null,2)])]),ne(l,{appendTo:n.appendTo},{default:vt(()=>[ne(Ao,{name:"p-connected-overlay",onEnter:r.onOverlayEnter,onAfterEnter:r.onOverlayAfterEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},{default:vt(()=>[i.overlayVisible?(S(),R("div",Ie({key:0,ref:r.overlayRef,style:n.panelStyle,class:r.panelStyleClass,onClick:e[14]||(e[14]=(...a)=>r.onOverlayClick&&r.onOverlayClick(...a)),onKeydown:e[15]||(e[15]=(...a)=>r.onOverlayKeyDown&&r.onOverlayKeyDown(...a))},n.panelProps),[y("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[8]||(e[8]=(...a)=>r.onFirstHiddenFocus&&r.onFirstHiddenFocus(...a))},null,544),z(t.$slots,"header",{value:n.modelValue,options:r.visibleOptions}),n.filter?(S(),R("div",Zh,[y("div",ed,[y("input",Ie({ref:"filterInput",type:"text",value:i.filterValue,onVnodeUpdated:e[9]||(e[9]=(...a)=>r.onFilterUpdated&&r.onFilterUpdated(...a)),class:"p-dropdown-filter p-inputtext p-component",placeholder:n.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":r.id+"_list","aria-activedescendant":r.focusedOptionId,onKeydown:e[10]||(e[10]=(...a)=>r.onFilterKeyDown&&r.onFilterKeyDown(...a)),onBlur:e[11]||(e[11]=(...a)=>r.onFilterBlur&&r.onFilterBlur(...a)),onInput:e[12]||(e[12]=(...a)=>r.onFilterChange&&r.onFilterChange(...a))},n.filterInputProps),null,16,td),nd]),y("span",sd,oe(r.filterResultMessageText),1)])):le("",!0),y("div",{class:"p-dropdown-items-wrapper",style:Te({"max-height":r.virtualScrollerDisabled?n.scrollHeight:""})},[ne(o,Ie({ref:r.virtualScrollerRef},n.virtualScrollerOptions,{items:r.visibleOptions,style:{height:n.scrollHeight},tabindex:-1,disabled:r.virtualScrollerDisabled}),ko({content:vt(({styleClass:a,contentRef:u,items:h,getItemOptions:d,contentStyle:m,itemSize:f})=>[y("ul",{ref:g=>r.listRef(g,u),id:r.id+"_list",class:V(["p-dropdown-items",a]),style:Te(m),role:"listbox"},[(S(!0),R(Ue,null,St(h,(g,p)=>(S(),R(Ue,{key:r.getOptionRenderKey(g,r.getOptionIndex(p,d))},[r.isOptionGroup(g)?(S(),R("li",{key:0,id:r.id+"_"+r.getOptionIndex(p,d),style:Te({height:f?f+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[z(t.$slots,"optiongroup",{option:g.optionGroup,index:r.getOptionIndex(p,d)},()=>[Ze(oe(r.getOptionGroupLabel(g.optionGroup)),1)])],12,rd)):Bn((S(),R("li",{key:1,id:r.id+"_"+r.getOptionIndex(p,d),style:Te({height:f?f+"px":void 0}),class:V(["p-dropdown-item",{"p-highlight":r.isSelected(g),"p-focus":i.focusedOptionIndex===r.getOptionIndex(p,d),"p-disabled":r.isOptionDisabled(g)}]),role:"option","aria-label":r.getOptionLabel(g),"aria-selected":r.isSelected(g),"aria-disabled":r.isOptionDisabled(g),"aria-setsize":r.ariaSetSize,"aria-posinset":r.getAriaPosInset(r.getOptionIndex(p,d)),onClick:v=>r.onOptionSelect(v,g),onMousemove:v=>r.onOptionMouseMove(v,r.getOptionIndex(p,d))},[z(t.$slots,"option",{option:g,index:r.getOptionIndex(p,d)},()=>[Ze(oe(r.getOptionLabel(g)),1)])],46,od)),[[c]])],64))),128)),i.filterValue&&(!h||h&&h.length===0)?(S(),R("li",ld,[z(t.$slots,"emptyfilter",{},()=>[Ze(oe(r.emptyFilterMessageText),1)])])):!n.options||n.options&&n.options.length===0?(S(),R("li",ad,[z(t.$slots,"empty",{},()=>[Ze(oe(r.emptyMessageText),1)])])):le("",!0)],14,id),!n.options||n.options&&n.options.length===0?(S(),R("span",cd,oe(r.emptyMessageText),1)):le("",!0),y("span",ud,oe(r.selectedMessageText),1)]),_:2},[t.$slots.loader?{name:"loader",fn:vt(({options:a})=>[z(t.$slots,"loader",{options:a})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),z(t.$slots,"footer",{value:n.modelValue,options:r.visibleOptions}),y("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[13]||(e[13]=(...a)=>r.onLastHiddenFocus&&r.onLastHiddenFocus(...a))},null,544)],16)):le("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,Yh)}function dd(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var fd=`
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
`;dd(fd);oo.render=hd;var lo={name:"SelectButton",emits:["update:modelValue","focus","blur","change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,unselectable:{type:Boolean,default:!0},disabled:Boolean,dataKey:null,"aria-labelledby":{type:String,default:null}},data(){return{focusedIndex:0}},mounted(){this.defaultTabIndexes()},methods:{defaultTabIndexes(){let t=O.find(this.$refs.container,".p-button"),e=O.findSingle(this.$refs.container,".p-highlight");for(let n=0;n<t.length;n++)(O.hasClass(t[n],"p-highlight")&&M.equals(t[n],e)||e===null&&n==0)&&(this.focusedIndex=n)},getOptionLabel(t){return this.optionLabel?M.resolveFieldData(t,this.optionLabel):t},getOptionValue(t){return this.optionValue?M.resolveFieldData(t,this.optionValue):t},getOptionRenderKey(t){return this.dataKey?M.resolveFieldData(t,this.dataKey):this.getOptionLabel(t)},isOptionDisabled(t){return this.optionDisabled?M.resolveFieldData(t,this.optionDisabled):!1},onOptionSelect(t,e,n){if(this.disabled||this.isOptionDisabled(e))return;let s=this.isSelected(e);if(s&&!this.unselectable)return;let i=this.getOptionValue(e),r;this.multiple?s?r=this.modelValue.filter(o=>!M.equals(o,i,this.equalityKey)):r=this.modelValue?[...this.modelValue,i]:[i]:r=s?null:i,this.focusedIndex=n,this.$emit("update:modelValue",r),this.$emit("change",{event:t,value:r})},isSelected(t){let e=!1,n=this.getOptionValue(t);if(this.multiple){if(this.modelValue){for(let s of this.modelValue)if(M.equals(s,n,this.equalityKey)){e=!0;break}}}else e=M.equals(this.modelValue,n,this.equalityKey);return e},onKeydown(t,e,n){switch(t.code){case"Space":{this.onOptionSelect(t,e,n),t.preventDefault();break}case"ArrowDown":case"ArrowRight":{this.changeTabIndexes(t,"next"),t.preventDefault();break}case"ArrowUp":case"ArrowLeft":{this.changeTabIndexes(t,"prev"),t.preventDefault();break}}},changeTabIndexes(t,e){let n,s;for(let i=0;i<=this.$refs.container.children.length-1;i++)this.$refs.container.children[i].getAttribute("tabindex")==="0"&&(n={elem:this.$refs.container.children[i],index:i});e==="prev"?n.index===0?s=this.$refs.container.children.length-1:s=n.index-1:n.index===this.$refs.container.children.length-1?s=0:s=n.index+1,this.focusedIndex=s,this.$refs.container.children[s].focus()},onFocus(t){this.$emit("focus",t)},onBlur(t,e){t.target&&t.relatedTarget&&t.target.parentElement!==t.relatedTarget.parentElement&&this.defaultTabIndexes(),this.$emit("blur",t,e)},getButtonClass(t){return["p-button p-component",{"p-highlight":this.isSelected(t),"p-disabled":this.isOptionDisabled(t)}]}},computed:{containerClass(){return["p-selectbutton p-buttonset p-component",{"p-disabled":this.disabled}]},equalityKey(){return this.optionValue?null:this.dataKey}},directives:{ripple:ms}};const pd=["aria-labelledby"],md=["tabindex","aria-label","role","aria-checked","aria-disabled","onClick","onKeydown","onBlur"],gd={class:"p-button-label"};function _d(t,e,n,s,i,r){const o=$n("ripple");return S(),R("div",{ref:"container",class:V(r.containerClass),role:"group","aria-labelledby":t.ariaLabelledby},[(S(!0),R(Ue,null,St(n.options,(l,c)=>Bn((S(),R("div",{key:r.getOptionRenderKey(l),tabindex:c===i.focusedIndex?"0":"-1","aria-label":r.getOptionLabel(l),role:n.multiple?"checkbox":"radio","aria-checked":r.isSelected(l),"aria-disabled":n.optionDisabled,class:V(r.getButtonClass(l,c)),onClick:a=>r.onOptionSelect(a,l,c),onKeydown:a=>r.onKeydown(a,l,c),onFocus:e[0]||(e[0]=a=>r.onFocus(a)),onBlur:a=>r.onBlur(a,l)},[z(t.$slots,"option",{option:l,index:c},()=>[y("span",gd,oe(r.getOptionLabel(l)),1)])],42,md)),[[o]])),128))],10,pd)}lo.render=_d;var ao={name:"RadioButton",emits:["click","update:modelValue","change","focus","blur"],props:{value:null,modelValue:null,name:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{focused:!1}},methods:{onClick(t){this.disabled||(this.$emit("click",t),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",t))},onFocus(t){this.focused=!0,this.$emit("focus",t)},onBlur(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked(){return this.modelValue!=null&&M.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.disabled,"p-radiobutton-focused":this.focused}]}}};const yd={class:"p-hidden-accessible"},vd=["id","name","checked","disabled","value","aria-labelledby","aria-label"],bd=y("div",{class:"p-radiobutton-icon"},null,-1),wd=[bd];function Cd(t,e,n,s,i,r){return S(),R("div",{class:V(r.containerClass),onClick:e[2]||(e[2]=o=>r.onClick(o))},[y("div",yd,[y("input",Ie({ref:"input",id:n.inputId,type:"radio",class:n.inputClass,style:n.inputStyle,name:n.name,checked:r.checked,disabled:n.disabled,value:n.value,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,onFocus:e[0]||(e[0]=(...o)=>r.onFocus&&r.onFocus(...o)),onBlur:e[1]||(e[1]=(...o)=>r.onBlur&&r.onBlur(...o))},n.inputProps),null,16,vd)]),y("div",{ref:"box",class:V(["p-radiobutton-box",{"p-highlight":r.checked,"p-disabled":n.disabled,"p-focus":i.focused}])},wd,2)],2)}ao.render=Cd;var co={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:ms}};const Id=["aria-label","disabled"],Sd={class:"p-button-label"};function Ed(t,e,n,s,i,r){const o=$n("ripple");return Bn((S(),R("button",{class:V(r.buttonClass),type:"button","aria-label":r.defaultAriaLabel,disabled:r.disabled},[z(t.$slots,"default",{},()=>[n.loading&&!n.icon?(S(),R("span",{key:0,class:V(r.iconStyleClass)},null,2)):le("",!0),n.icon?(S(),R("span",{key:1,class:V(r.iconStyleClass)},null,2)):le("",!0),y("span",Sd,oe(n.label||"\xA0"),1),n.badge?(S(),R("span",{key:2,class:V(r.badgeStyleClass)},oe(n.badge),3)):le("",!0)])],10,Id)),[[o]])}co.render=Ed;const Td={name:"Form",components:{Dropdown:oo,SelectButton:lo,RadioButton:ao,Button:co},setup:()=>({v$:Qo(),store:yn()}),data(){return{uid:"",device:"",devices:[{label:"Mouse",value:"Mouse"},{label:"Touchscreen",value:"Touchscreen"},{label:"Pen",value:"Pen"},{label:"Trackpad",value:"Trackpad"},{label:"Other",value:"Other"}],concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],age_group:"",dyslexia:"",dyscalculia:"",submitted:!1}},validations(){return{device:{required:et},concentration:{required:et},age_group:{required:et},dyslexia:{required:et},dyscalculia:{required:et}}},created(){this.uid=Fh.v4()},methods:{handleSubmit(t){if(this.submitted=!0,t)this.storeData(),this.$router.push("about");else return},storeData(){const t=yn();t.insertFormValues(this.uid,this.device,Number(this.concentration.value),Number(this.age_group),this.dyslexia=="Yes",this.dyscalculia=="Yes"),console.log(t.user.uid),console.log(t.user.device),console.log(t.user.concentration),console.log(t.user.age_group),console.log(t.user.dyslexia),console.log(t.user.dyscalculia),_h()}}},Od={class:"main-wrapper"},Rd=y("h1",{class:"page-title"},"Human Cognition Study",-1),xd=y("p",{class:"subtitle"},"Please fill out the form to begin with the study",-1),Nd={class:"form-field-content-wrapper"},Ad=y("p",{class:"form-field-text"},"What is your method of input?",-1),kd={class:"form-field-content-wrapper"},Dd=y("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applies to you:",-1),Ld=y("p",{class:"form-field-quote"},'"I am in a calm environment with enough light and I am able to concentrate."',-1),Pd={class:"form-field-content-wrapper"},Md=y("p",{class:"form-field-radiobutton-text"},"Please select your age group:",-1),Fd={class:"form-field-radiobutton-wrapper"},Vd=y("label",{class:"radiobutton-text",for:"group1"},"18 - 35",-1),$d={class:"form-field-radiobutton-wrapper"},Bd=y("label",{class:"radiobutton-text",for:"group2"},"35 - 55",-1),Hd={class:"form-field-radiobutton-wrapper"},Ud=y("label",{class:"radiobutton-text",for:"group3"},"55+",-1),zd={class:"form-field-content-wrapper"},Wd=y("p",{class:"form-field-radiobutton-text"},"Do you have dyslexia or any other reading disability?",-1),Kd={class:"form-field-radiobutton-wrapper"},Gd=y("label",{class:"radiobutton-text",for:"yes1"},"Yes",-1),jd={class:"form-field-radiobutton-wrapper"},qd=y("label",{class:"radiobutton-text",for:"no1"},"No",-1),Yd={class:"form-field-content-wrapper"},Qd=y("p",{class:"form-field-radiobutton-text"},"Do you have dyscalculia?",-1),Xd={class:"form-field-radiobutton-wrapper"},Jd=y("label",{class:"radiobutton-text",for:"yes2"},"Yes",-1),Zd={class:"form-field-radiobutton-wrapper"},ef=y("label",{class:"radiobutton-text",for:"no2"},"No",-1),tf={class:"form-button-wrapper"};function nf(t,e,n,s,i,r){const o=Be("Dropdown"),l=Be("SelectButton"),c=Be("RadioButton"),a=Be("Button");return S(),R("main",Od,[Rd,xd,y("form",{class:"form-wrapper",onSubmit:e[9]||(e[9]=Do(u=>r.handleSubmit(!t.v$.$invalid),["prevent"]))},[y("div",{class:V(["form-field",{"p-error":t.v$.device.$invalid&&i.submitted}])},[y("div",Nd,[Ad,ne(o,{class:"form-dropdown",modelValue:t.v$.device.$model,"onUpdate:modelValue":e[0]||(e[0]=u=>t.v$.device.$model=u),options:i.devices,optionLabel:"label",optionValue:"value",autoWidth:"false",placeholder:"Select an input"},null,8,["modelValue","options"])])],2),y("div",{class:V(["form-field",{"p-error":t.v$.concentration.$invalid&&i.submitted}])},[y("div",kd,[Dd,Ld,ne(l,{class:"form-selectbutton",modelValue:t.v$.concentration.$model,"onUpdate:modelValue":e[1]||(e[1]=u=>t.v$.concentration.$model=u),options:i.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),y("div",{class:V(["form-field",{"p-error":t.v$.age_group.$invalid&&i.submitted}])},[y("div",Pd,[Md,y("div",Fd,[ne(c,{class:"form-radiobutton",inputId:"group1",name:"age_group",value:"1",modelValue:t.v$.age_group.$model,"onUpdate:modelValue":e[2]||(e[2]=u=>t.v$.age_group.$model=u)},null,8,["modelValue"]),Vd]),y("div",$d,[ne(c,{class:"form-radiobutton",inputId:"group2",name:"age_group",value:"2",modelValue:t.v$.age_group.$model,"onUpdate:modelValue":e[3]||(e[3]=u=>t.v$.age_group.$model=u)},null,8,["modelValue"]),Bd]),y("div",Hd,[ne(c,{class:"form-radiobutton",inputId:"group3",name:"age_group",value:"3",modelValue:t.v$.age_group.$model,"onUpdate:modelValue":e[4]||(e[4]=u=>t.v$.age_group.$model=u)},null,8,["modelValue"]),Ud])])],2),y("div",{class:V(["form-field",{"p-error":t.v$.dyslexia.$invalid&&i.submitted}])},[y("div",zd,[Wd,y("div",Kd,[ne(c,{class:"form-radiobutton",inputId:"yes1",name:"dyslexia",value:"Yes",modelValue:t.v$.dyslexia.$model,"onUpdate:modelValue":e[5]||(e[5]=u=>t.v$.dyslexia.$model=u)},null,8,["modelValue"]),Gd]),y("div",jd,[ne(c,{class:"form-radiobutton",inputId:"no1",name:"dyslexia",value:"No",modelValue:t.v$.dyslexia.$model,"onUpdate:modelValue":e[6]||(e[6]=u=>t.v$.dyslexia.$model=u)},null,8,["modelValue"]),qd])])],2),y("div",{class:V(["form-field",{"p-error":t.v$.dyscalculia.$invalid&&i.submitted}])},[y("div",Yd,[Qd,y("div",Xd,[ne(c,{class:"form-radiobutton",inputId:"yes2",name:"dyscalculia",value:"Yes",modelValue:t.v$.dyscalculia.$model,"onUpdate:modelValue":e[7]||(e[7]=u=>t.v$.dyscalculia.$model=u)},null,8,["modelValue"]),Jd]),y("div",Zd,[ne(c,{class:"form-radiobutton",inputId:"no2",name:"dyscalculia",value:"No",modelValue:t.v$.dyscalculia.$model,"onUpdate:modelValue":e[8]||(e[8]=u=>t.v$.dyscalculia.$model=u)},null,8,["modelValue"]),ef])])],2),y("div",tf,[ne(a,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const of=Lo(Td,[["render",nf]]);export{of as default};
