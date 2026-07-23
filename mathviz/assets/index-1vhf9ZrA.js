(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),E=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},D=/-\w/g,O=E(e=>e.replace(D,e=>e.slice(1).toUpperCase())),ee=/\B([A-Z])/g,k=E(e=>e.replace(ee,`-$1`).toLowerCase()),te=E(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=E(e=>e?`on${te(e)}`:``),re=(e,t)=>!Object.is(e,t),ie=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ae=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se,ce=()=>se||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function le(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?pe(r):le(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var ue=/;(?![^(]*\))/g,de=/:([^]+)/,fe=/\/\*[^]*?\*\//g;function pe(e){let t={};return e.replace(fe,``).split(ue).forEach(e=>{if(e){let n=e.split(de);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function me(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=me(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}function be(e,t){return e.findIndex(e=>ye(e,t))}var xe=e=>!!(e&&e.__v_isRef===!0),Se=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?xe(e)?Se(e.value):JSON.stringify(e,Ce,2):String(e),Ce=(e,t)=>xe(t)?Ce(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:_(t)?we(t):v(t)&&!d(t)&&!C(t)?String(t):t,we=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,A,Te=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=A,!e&&A&&(this.index=(A.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){this._on>0&&--this._on===0&&(A=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ee(){return A}var j,M=new WeakSet,De=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&A.active&&A.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,M.has(this)&&(M.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ae(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ue(this),Ne(this);let e=j,t=ze;j=this,ze=!0;try{return this.fn()}finally{Pe(this),j=e,ze=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Le(e);this.deps=this.depsTail=void 0,Ue(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?M.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fe(this)&&this.run()}get dirty(){return Fe(this)}},N=0,Oe,ke;function Ae(e,t=!1){if(e.flags|=8,t){e.next=ke,ke=e;return}e.next=Oe,Oe=e}function je(){N++}function Me(){if(--N>0)return;if(ke){let e=ke;for(ke=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Oe;){let t=Oe;for(Oe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ne(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Pe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Le(r),Re(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Fe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ie(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ie(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===We)||(e.globalVersion=We,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fe(e))))return;e.flags|=2;let t=e.dep,n=j,r=ze;j=e,ze=!0;try{Ne(e);let n=e.fn(e._value);(t.version===0||re(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,ze=r,Pe(e),e.flags&=-3}}function Le(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Le(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Re(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var ze=!0,Be=[];function Ve(){Be.push(ze),ze=!1}function He(){let e=Be.pop();ze=e===void 0?!0:e}function Ue(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var We=0,Ge=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ke=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!ze||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Ge(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,We++,this.notify(e)}notify(e){je();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Me()}}};function qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Je=new WeakMap,Ye=Symbol(``),Xe=Symbol(``),Ze=Symbol(``);function Qe(e,t,n){if(ze&&j){let t=Je.get(e);t||Je.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ke),r.map=t,r.key=n),r.track()}}function $e(e,t,n,r,i,a){let o=Je.get(e);if(!o){We++;return}let s=e=>{e&&e.trigger()};if(je(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ze||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ze)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`delete`:i||(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`set`:f(e)&&s(o.get(Ye));break}}Me()}function et(e){let t=Ht(e);return t===e?t:(Qe(t,`iterate`,Ze),Bt(e)?t:t.map(Wt))}function tt(e){return Qe(e=Ht(e),`iterate`,Ze),e}function nt(e,t){return zt(e)?Gt(Rt(e)?Wt(t):t):Wt(t)}var rt={__proto__:null,[Symbol.iterator](){return it(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return et(this).concat(...e.map(e=>d(e)?et(e):e))},entries(){return it(this,`entries`,e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ot(this,`every`,e,t,void 0,arguments)},filter(e,t){return ot(this,`filter`,e,t,e=>e.map(e=>nt(this,e)),arguments)},find(e,t){return ot(this,`find`,e,t,e=>nt(this,e),arguments)},findIndex(e,t){return ot(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ot(this,`findLast`,e,t,e=>nt(this,e),arguments)},findLastIndex(e,t){return ot(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ot(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ct(this,`includes`,e)},indexOf(...e){return ct(this,`indexOf`,e)},join(e){return et(this).join(e)},lastIndexOf(...e){return ct(this,`lastIndexOf`,e)},map(e,t){return ot(this,`map`,e,t,void 0,arguments)},pop(){return lt(this,`pop`)},push(...e){return lt(this,`push`,e)},reduce(e,...t){return st(this,`reduce`,e,t)},reduceRight(e,...t){return st(this,`reduceRight`,e,t)},shift(){return lt(this,`shift`)},some(e,t){return ot(this,`some`,e,t,void 0,arguments)},splice(...e){return lt(this,`splice`,e)},toReversed(){return et(this).toReversed()},toSorted(e){return et(this).toSorted(e)},toSpliced(...e){return et(this).toSpliced(...e)},unshift(...e){return lt(this,`unshift`,e)},values(){return it(this,`values`,e=>nt(this,e))}};function it(e,t,n){let r=tt(e),i=r[t]();return r!==e&&!Bt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var at=Array.prototype;function ot(e,t,n,r,i,a){let o=tt(e),s=o!==e&&!Bt(e),c=o[t];if(c!==at[t]){let t=c.apply(e,a);return s?Wt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,nt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function st(e,t,n,r){let i=tt(e),a=i!==e&&!Bt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=nt(e,t)),n.call(this,t,nt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?nt(e,c):c}function ct(e,t,n){let r=Ht(e);Qe(r,`iterate`,Ze);let i=r[t](...n);return(i===-1||i===!1)&&Vt(n[0])?(n[0]=Ht(n[0]),r[t](...n)):i}function lt(e,t,n=[]){Ve(),je();let r=Ht(e)[t].apply(e,n);return Me(),He(),r}var ut=e(`__proto__,__v_isRef,__isVue`),dt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ft(e){_(e)||(e=String(e));let t=Ht(this);return Qe(t,`has`,e),t.hasOwnProperty(e)}var pt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?jt:At:i?kt:Ot).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=rt[t]))return e;if(t===`hasOwnProperty`)return ft}let o=Reflect.get(e,t,Kt(e)?e:n);if((_(t)?dt.has(t):ut(t))||(r||Qe(e,`get`,t),i))return o;if(Kt(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?It(e):e}return v(o)?r?It(o):Pt(o):o}},mt=class extends pt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=zt(i);if(!Bt(n)&&!zt(n)&&(i=Ht(i),n=Ht(n)),!a&&Kt(i)&&!Kt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Kt(e)?e:r);return e===Ht(r)&&(o?re(n,i)&&$e(e,`set`,t,n,i):$e(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&$e(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!dt.has(t))&&Qe(e,`has`,t),n}ownKeys(e){return Qe(e,`iterate`,d(e)?`length`:Ye),Reflect.ownKeys(e)}},ht=class extends pt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},gt=new mt,_t=new ht,vt=new mt(!0),yt=e=>e,bt=e=>Reflect.getPrototypeOf(e);function xt(e,t,n){return function(...r){let i=this.__v_raw,a=Ht(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?yt:t?Gt:Wt;return!t&&Qe(a,`iterate`,l?Xe:Ye),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function St(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ct(e,t){let n={get(n){let r=this.__v_raw,i=Ht(r),a=Ht(n);e||(re(n,a)&&Qe(i,`get`,n),Qe(i,`get`,a));let{has:o}=bt(i),s=t?yt:e?Gt:Wt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&Qe(Ht(t),`iterate`,Ye),t.size},has(t){let n=this.__v_raw,r=Ht(n),i=Ht(t);return e||(re(t,i)&&Qe(r,`has`,t),Qe(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=Ht(a),s=t?yt:e?Gt:Wt;return!e&&Qe(o,`iterate`,Ye),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:St(`add`),set:St(`set`),delete:St(`delete`),clear:St(`clear`)}:{add(e){let n=Ht(this),r=bt(n),i=Ht(e),a=!t&&!Bt(e)&&!zt(e)?i:e;return r.has.call(n,a)||re(e,a)&&r.has.call(n,e)||re(i,a)&&r.has.call(n,i)||(n.add(a),$e(n,`add`,a,a)),this},set(e,n){!t&&!Bt(n)&&!zt(n)&&(n=Ht(n));let r=Ht(this),{has:i,get:a}=bt(r),o=i.call(r,e);o||=(e=Ht(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?re(n,s)&&$e(r,`set`,e,n,s):$e(r,`add`,e,n),this},delete(e){let t=Ht(this),{has:n,get:r}=bt(t),i=n.call(t,e);i||=(e=Ht(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&$e(t,`delete`,e,void 0,a),o},clear(){let e=Ht(this),t=e.size!==0,n=e.clear();return t&&$e(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=xt(r,e,t)}),n}function wt(e,t){let n=Ct(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Tt={get:wt(!1,!1)},Et={get:wt(!1,!0)},Dt={get:wt(!0,!1)},Ot=new WeakMap,kt=new WeakMap,At=new WeakMap,jt=new WeakMap;function Mt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Nt(e){return e.__v_skip||!Object.isExtensible(e)?0:Mt(S(e))}function Pt(e){return zt(e)?e:Lt(e,!1,gt,Tt,Ot)}function Ft(e){return Lt(e,!1,vt,Et,kt)}function It(e){return Lt(e,!0,_t,Dt,At)}function Lt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Nt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Rt(e){return zt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Bt(e){return!!(e&&e.__v_isShallow)}function Vt(e){return e?!!e.__v_raw:!1}function Ht(e){let t=e&&e.__v_raw;return t?Ht(t):e}function Ut(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&ae(e,`__v_skip`,!0),e}var Wt=e=>v(e)?Pt(e):e,Gt=e=>v(e)?It(e):e;function Kt(e){return e?e.__v_isRef===!0:!1}function qt(e){return Jt(e,!1)}function Jt(e,t){return Kt(e)?e:new Yt(e,t)}var Yt=class{constructor(e,t){this.dep=new Ke,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ht(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Bt(e)||zt(e);e=n?e:Ht(e),re(e,t)&&(this._rawValue=e,this._value=n?e:Wt(e),this.dep.trigger())}};function Xt(e){return Kt(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:Xt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Kt(i)&&!Kt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return Rt(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ke(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=We-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return Ae(this,!0),!0}get value(){let e=this.dep.track();return Ie(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function en(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new $t(r,i,n)}var tn={},nn=new WeakMap,rn=void 0;function an(e,t=!1,n=rn){if(n){let t=nn.get(n);t||nn.set(n,t=[]),t.push(e)}}function on(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Bt(e)||o===!1||o===0?sn(e,1):sn(e),m,g,_,v,y=!1,b=!1;if(Kt(e)?(g=()=>e.value,y=Bt(e)):Rt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Rt(e)||Bt(e)),g=()=>e.map(e=>{if(Kt(e))return e.value;if(Rt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ve();try{_()}finally{He()}}let t=rn;rn=m;try{return f?f(e,3,[v]):e(v)}finally{rn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>sn(e(),t)}let x=Ee(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(tn):tn,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>re(e,C[t])):re(e,C))){_&&_();let t=rn;rn=m;try{let t=[e,C===tn?void 0:b&&C[0]===tn?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{rn=t}}}else m.run()};return u&&u(w),m=new De(g),m.scheduler=l?()=>l(w,!1):w,v=e=>an(e,!1,m),_=m.onStop=()=>{let e=nn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();nn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function sn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Kt(e))sn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)sn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{sn(e,t,n)});else if(C(e)){for(let r in e)sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&sn(e[r],t,n)}return e}function cn(e,t,n,r){try{return r?e(...r):e()}catch(e){un(e,t,n)}}function ln(e,t,n,r){if(h(e)){let i=cn(e,t,n,r);return i&&y(i)&&i.catch(e=>{un(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ln(e[a],t,n,r));return i}}function un(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ve(),cn(o,null,10,[e,i,a]),He();return}}dn(e,r,a,i,s)}function dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var fn=[],pn=-1,mn=[],hn=null,gn=0,_n=Promise.resolve(),vn=null;function yn(e){let t=vn||_n;return e?t.then(this?e.bind(this):e):t}function bn(e){let t=pn+1,n=fn.length;for(;t<n;){let r=t+n>>>1,i=fn[r],a=En(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function xn(e){if(!(e.flags&1)){let t=En(e),n=fn[fn.length-1];!n||!(e.flags&2)&&t>=En(n)?fn.push(e):fn.splice(bn(t),0,e),e.flags|=1,Sn()}}function Sn(){vn||=_n.then(Dn)}function Cn(e){d(e)?mn.push(...e):hn&&e.id===-1?hn.splice(gn+1,0,e):e.flags&1||(mn.push(e),e.flags|=1),Sn()}function wn(e,t,n=pn+1){for(;n<fn.length;n++){let t=fn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;fn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Tn(e){if(mn.length){let e=[...new Set(mn)].sort((e,t)=>En(e)-En(t));if(mn.length=0,hn){hn.push(...e);return}for(hn=e,gn=0;gn<hn.length;gn++){let e=hn[gn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}hn=null,gn=0}}var En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Dn(e){try{for(pn=0;pn<fn.length;pn++){let e=fn[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<fn.length;pn++){let e=fn[pn];e&&(e.flags&=-2)}pn=-1,fn.length=0,Tn(e),vn=null,(fn.length||mn.length)&&Dn(e)}}var On=null,kn=null;function An(e){let t=On;return On=e,kn=e&&e.type.__scopeId||null,t}function jn(e,t=On,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ri(-1);let i=An(t),a;try{a=e(...n)}finally{An(i),r._d&&Ri(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Mn(e,n){if(On===null)return e;let r=wa(On),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&sn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Nn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ve(),ln(c,n,8,[e.el,s,e,t]),He())}}function Pn(e,t){if(ca){let n=ca.provides,r=ca.parent&&ca.parent.provides;r===n&&(n=ca.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){let r=la();if(r||zr){let i=zr?zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var In=Symbol.for(`v-scx`),Ln=()=>Fn(In);function Rn(e,t,n){return zn(e,t,n)}function zn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ha){if(c===`sync`){let e=Ln();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=ca;u.call=(e,t,n)=>ln(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{gi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():xn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=on(e,n,u);return ha&&(f?f.push(h):d&&h()),h}function Bn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Vn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=fa(this),s=zn(i,a.bind(r),n);return o(),s}function Vn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Hn=Symbol(`_vte`),Un=e=>e.__isTeleport,Wn=Symbol(`_leaveCb`);function Gn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function qn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Jn=new WeakMap;function Yn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Yn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Zn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Yn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?wa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=Ht(v),b=v===t?i:e=>qn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&qn(_,t));if(m!=null&&m!==p){if(Xn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Kt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))cn(p,f,12,[l,_]);else{let t=g(p),n=Kt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Jn.delete(e)};t.id=-1,Jn.set(e,t),gi(t,r)}else Xn(e),i()}}}function Xn(e){let t=Jn.get(e);t&&(t.flags|=8,Jn.delete(e))}ce().requestIdleCallback,ce().cancelIdleCallback;var Zn=e=>!!e.type.__asyncLoader,Qn=e=>e.type.__isKeepAlive;function $n(e,t){tr(e,`a`,t)}function er(e,t){tr(e,`da`,t)}function tr(e,t,n=ca){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(rr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Qn(e.parent.vnode)&&nr(r,t,n,e),e=e.parent}}function nr(e,t,n,r){let i=rr(t,e,r,!0);ur(()=>{c(r[t],i)},n)}function rr(e,t,n=ca,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ve();let i=fa(n),a=ln(t,n,e,r);return i(),He(),a};return r?i.unshift(a):i.push(a),a}}var ir=e=>(t,n=ca)=>{(!ha||e===`sp`)&&rr(e,(...e)=>t(...e),n)},ar=ir(`bm`),or=ir(`m`),sr=ir(`bu`),cr=ir(`u`),lr=ir(`bum`),ur=ir(`um`),dr=ir(`sp`),fr=ir(`rtg`),pr=ir(`rtc`);function mr(e,t=ca){rr(`ec`,e,t)}var hr=Symbol.for(`v-ndc`),gr=e=>e?ma(e)?wa(e):gr(e.parent):null,_r=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Er(e),$forceUpdate:e=>e.f||=()=>{xn(e.update)},$nextTick:e=>e.n||=yn.bind(e.proxy),$watch:e=>Bn.bind(e)}),vr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),yr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(vr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else xr&&(s[n]=0)}let d=_r[n],f,p;if(d)return n===`$attrs`&&Qe(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return vr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||vr(n,c)||u(o,c)||u(i,c)||u(_r,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function br(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var xr=!0;function Sr(e){let t=Er(e),n=e.proxy,i=e.ctx;xr=!1,t.beforeCreate&&wr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:ee,expose:k,inheritAttrs:te,components:ne,directives:re,filters:ie}=t;if(u&&Cr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Pt(t))}if(xr=!0,o)for(let e in o){let t=o[e],a=Ea({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Tr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Pn(t,e[t])})}f&&wr(f,e,`c`);function ae(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ae(ar,p),ae(or,m),ae(sr,g),ae(cr,_),ae($n,y),ae(er,b),ae(mr,O),ae(pr,E),ae(fr,D),ae(lr,S),ae(ur,w),ae(dr,ee),d(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),te!=null&&(e.inheritAttrs=te),ne&&(e.components=ne),re&&(e.directives=re),ee&&Kn(e)}function Cr(e,t,n=r){d(e)&&(e=jr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Fn(r.from||n,r.default,!0):Fn(r.from||n):Fn(r),Kt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function wr(e,t,n){ln(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tr(e,t,n,r){let i=r.includes(`.`)?Vn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Rn(i,n)}else if(h(e))Rn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Tr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Rn(i,r,e)}}function Er(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Dr(c,e,o,!0)),Dr(c,t,o)),v(t)&&a.set(t,c),c}function Dr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Dr(e,a,n,!0),i&&i.forEach(t=>Dr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Or[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Or={data:kr,props:Pr,emits:Pr,methods:Nr,computed:Nr,beforeCreate:Mr,created:Mr,beforeMount:Mr,mounted:Mr,beforeUpdate:Mr,updated:Mr,beforeDestroy:Mr,beforeUnmount:Mr,destroyed:Mr,unmounted:Mr,activated:Mr,deactivated:Mr,errorCaptured:Mr,serverPrefetch:Mr,components:Nr,directives:Nr,watch:Fr,provide:kr,inject:Ar};function kr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Ar(e,t){return Nr(jr(e),jr(t))}function jr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Mr(e,t){return e?[...new Set([].concat(e,t))]:t}function Nr(e,t){return e?s(Object.create(null),e,t):t}function Pr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),br(e),br(t??{})):t}function Fr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Mr(e[r],t[r]);return n}function Ir(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Lr=0;function Rr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Ir(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Lr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Da,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||qi(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,wa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(ln(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=zr;zr=l;try{return e()}finally{zr=t}}};return l}}var zr=null,Br=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${k(t)}Modifiers`];function Vr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Br(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(oe)));let c,l=i[c=ne(n)]||i[c=ne(O(n))];!l&&o&&(l=i[c=ne(k(n))]),l&&ln(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ln(u,e,6,a)}}var Hr=new WeakMap;function Ur(e,t,n=!1){let r=n?Hr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Ur(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Wr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,k(t))||u(e,t))}function Gr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=An(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ea(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ea(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Kr(c)}}catch(t){Ni.length=0,un(t,e,1),v=qi(ji)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=qr(y,a)),b=Xi(b,y,!1,!0))}return n.dirs&&(b=Xi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(b,n.transition),v=b,An(_),v}var Kr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},qr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Xr(o,r,n)&&!Wr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Yr(r,o,l):!0:!!o;return!1}function Yr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Xr(t,e,a)&&!Wr(n,a))return!0}return!1}function Xr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function Zr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Qr={},$r=()=>Object.create(Qr),ei=e=>Object.getPrototypeOf(e)===Qr;function ti(e,t,n,r=!1){let i={},a=$r();e.propsDefaults=Object.create(null),ri(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ft(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ni(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Ht(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Wr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=O(o);i[t]=ii(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ri(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=k(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ii(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&$e(e.attrs,`set`,``)}function ri(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=O(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Wr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=Ht(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ii(a,n,s,i[s],e,!u(i,s))}}return s}function ii(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=fa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===k(n))&&(r=!0))}return r}var ai=new WeakMap;function oi(e,r,i=!1){let a=i?ai:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=oi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=O(c[e]);si(n)&&(l[n]=t)}else if(c)for(let e in c){let t=O(e);if(si(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function si(e){return e[0]!==`$`&&!T(e)}var ci=e=>e===`_`||e===`_ctx`||e===`$stable`,li=e=>d(e)?e.map(ea):[ea(e)],ui=(e,t,n)=>{if(t._n)return t;let r=jn((...e)=>li(t(...e)),n);return r._c=!1,r},di=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ci(n))continue;let i=e[n];if(h(i))t[n]=ui(n,i,r);else if(i!=null){let e=li(i);t[n]=()=>e}}},fi=(e,t)=>{let n=li(t);e.slots.default=()=>n},pi=(e,t,n)=>{for(let r in t)(n||!ci(r))&&(e[r]=t[r])},mi=(e,t,n)=>{let r=e.slots=$r();if(e.vnode.shapeFlag&32){let e=t._;e?(pi(r,t,n),n&&ae(r,`_`,e,!0)):di(t,r)}else t&&fi(e,t)},hi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:pi(a,n,r):(o=!n.$stable,di(n,a)),s=n}else n&&(fi(e,n),s={default:1});if(o)for(let e in a)!ci(e)&&s[e]==null&&delete a[e]},gi=Oi;function _i(e){return vi(e)}function vi(e,i){let a=ce();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ui(e,t)&&(r=ye(e),me(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ai:y(e,t,n,r);break;case ji:b(e,t,n,r);break;case Mi:e??x(t,n,r,o);break;case ki:ne(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?re(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?Yn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Yn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)E(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},E=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,yi(e,a),s,u),_&&Nn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ia(f,r,e)}_&&Nn(e,null,r,`beforeMount`);let v=xi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&gi(()=>{try{f&&ia(f,r,e),v&&g.enter(d),_&&Nn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Di(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?ta(e[l]):ea(e[l]),t,n,r,i,a,o,s)},ee=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&bi(r,!1),(g=h.onVnodeBeforeUpdate)&&ia(g,r,n,e),f&&Nn(n,e,r,`beforeUpdate`),r&&bi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?k(e.dynamicChildren,d,l,r,i,yi(n,a),o):s||ue(e,n,l,null,r,i,yi(n,a),o,!1),u>0){if(u&16)te(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&te(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&gi(()=>{g&&ia(g,r,n,e),f&&Nn(n,e,r,`updated`)},i)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===ki||!Ui(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},te=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ne=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Si(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},re=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ae(t,n,r,i,a,o,c):oe(e,t,c)},ae=(e,t,n,r,i,a,o)=>{let s=e.component=sa(e,r,i);if(Qn(e)&&(s.ctx.renderer=Se),ga(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=qi(ji);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(Jr(e,t,n))if(r.asyncDep&&!r.asyncResolved){le(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=wi(e);if(n){t&&(t.el=c.el,le(e,t,o)),n.asyncDep.then(()=>{gi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;bi(e,!1),t?(t.el=c.el,le(e,t,o)):t=c,n&&ie(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ia(d,s,t,c),bi(e,!0);let f=Gr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&Zr(e,f.el),r&&gi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&gi(()=>ia(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Zn(t);if(bi(e,!1),l&&ie(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ia(o,d,t),bi(e,!0),s&&we){let t=()=>{e.subTree=Gr(e),we(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Gr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&gi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;gi(()=>ia(o,d,e),i)}(t.shapeFlag&256||d&&Zn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&gi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new De(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>xn(u),bi(e,!0),l()},le=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ni(e,t.props,r,n),hi(e,t.children,n),Ve(),wn(e),He()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}else if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?ta(t[p]):ea(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):O(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ta(t[u]):ea(t[u]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ta(t[p]):ea(t[p]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ta(t[u]):ea(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)me(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ta(t[u]):ea(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){me(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ui(n,t[_])){i=_;break}i===void 0?me(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Ci(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ei(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===ki){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Mi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),gi(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Wn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ve(),Yn(s,null,n,e,!0),He()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Zn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ia(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Nn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==ki||d>0&&d&64)?ve(l,t,n,!1,!0):(a===ki&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&gi(()=>{_&&ia(_,t,e),h&&Nn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===ki){ge(n,r);return}if(t===Mi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ti(c),Ti(l),r&&ie(r),i.stop(),a&&(a.flags|=8,me(o,e,t,n)),s&&gi(s,t),gi(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Hn];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,wn(r),Tn(),!1)},Se={p:v,um:me,m:pe,r:he,mt:ae,mc:O,pc:ue,pbc:k,n:ye,o:e},Ce,we;return i&&([Ce,we]=i(Se)),{render:xe,hydrate:Ce,createApp:Rr(xe,Ce)}}function yi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function bi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ta(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Si(t,a)),a.type===Ai&&(a.patchFlag===-1&&(a=i[e]=ta(a)),a.el=t.el),a.type===ji&&!a.el&&(a.el=t.el)}}function Ci(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function wi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wi(t)}function Ti(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ei(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ei(t.subTree):null}var Di=e=>e.__isSuspense;function Oi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Cn(e)}var ki=Symbol.for(`v-fgt`),Ai=Symbol.for(`v-txt`),ji=Symbol.for(`v-cmt`),Mi=Symbol.for(`v-stc`),Ni=[],Pi=null;function Fi(e=!1){Ni.push(Pi=e?null:[])}function Ii(){Ni.pop(),Pi=Ni[Ni.length-1]||null}var Li=1;function Ri(e,t=!1){Li+=e,e<0&&Pi&&t&&(Pi.hasOnce=!0)}function zi(e){return e.dynamicChildren=Li>0?Pi||n:null,Ii(),Li>0&&Pi&&Pi.push(e),e}function Bi(e,t,n,r,i,a){return zi(Ki(e,t,n,r,i,a,!0))}function Vi(e,t,n,r,i){return zi(qi(e,t,n,r,i,!0))}function Hi(e){return e?e.__v_isVNode===!0:!1}function Ui(e,t){return e.type===t.type&&e.key===t.key}var Wi=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Kt(e)||h(e)?{i:On,r:e,k:t,f:!!n}:e);function Ki(e,t=null,n=null,r=0,i=null,a=e===ki?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gi(t),scopeId:kn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:On};return s?(na(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Li>0&&!o&&Pi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Pi.push(c),c}var qi=Ji;function Ji(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===hr)&&(e=ji),Hi(e)){let r=Xi(e,t,!0);return n&&na(r,n),Li>0&&!a&&Pi&&(r.shapeFlag&6?Pi[Pi.indexOf(e)]=r:Pi.push(r)),r.patchFlag=-2,r}if(Ta(e)&&(e=e.__vccOpts),t){t=Yi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=me(e)),v(n)&&(Vt(n)&&!d(n)&&(n=s({},n)),t.style=le(n))}let o=g(e)?1:Di(e)?128:Un(e)?64:v(e)?4:h(e)?2:0;return Ki(e,t,n,r,i,o,a,!0)}function Yi(e){return e?Vt(e)||ei(e)?s({},e):e:null}function Xi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ra(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Wi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Gi(t)):[a,Gi(t)]:Gi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ki?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xi(e.ssContent),ssFallback:e.ssFallback&&Xi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Gn(u,c.clone(u)),u}function Zi(e=` `,t=0){return qi(Ai,null,e,t)}function Qi(e,t){let n=qi(Mi,null,e);return n.staticCount=t,n}function $i(e=``,t=!1){return t?(Fi(),Vi(ji,null,e)):qi(ji,null,e)}function ea(e){return e==null||typeof e==`boolean`?qi(ji):d(e)?qi(ki,null,e.slice()):Hi(e)?ta(e):qi(Ai,null,String(e))}function ta(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xi(e)}function na(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),na(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ei(t)?t._ctx=On:r===3&&On&&(On.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:On},n=32):(t=String(t),r&64?(n=16,t=[Zi(t)]):n=8);e.children=t,e.shapeFlag|=n}function ra(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=me([t.class,r.class]));else if(e===`style`)t.style=le([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ia(e,t,n,r=null){ln(e,t,7,[n,r])}var aa=Ir(),oa=0;function sa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||aa,o={uid:oa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(i,a),emitsOptions:Ur(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Vr.bind(null,o),e.ce&&e.ce(o),o}var ca=null,la=()=>ca||On,ua,da;{let e=ce(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ua=t(`__VUE_INSTANCE_SETTERS__`,e=>ca=e),da=t(`__VUE_SSR_SETTERS__`,e=>ha=e)}var fa=e=>{let t=ca;return ua(e),e.scope.on(),()=>{e.scope.off(),ua(t)}},pa=()=>{ca&&ca.scope.off(),ua(null)};function ma(e){return e.vnode.shapeFlag&4}var ha=!1;function ga(e,t=!1,n=!1){t&&da(t);let{props:r,children:i}=e.vnode,a=ma(e);ti(e,r,a,t),mi(e,i,n||t);let o=a?_a(e,t):void 0;return t&&da(!1),o}function _a(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yr);let{setup:r}=n;if(r){Ve();let n=e.setupContext=r.length>1?Ca(e):null,i=fa(e),a=cn(r,e,0,[e.props,n]),o=y(a);if(He(),i(),(o||e.sp)&&!Zn(e)&&Kn(e),o){if(a.then(pa,pa),t)return a.then(n=>{va(e,n,t)}).catch(t=>{un(t,e,0)});e.asyncDep=a}else va(e,a,t)}else xa(e,t)}function va(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Qt(t)),xa(e,n)}var ya,ba;function xa(e,t,n){let i=e.type;if(!e.render){if(!t&&ya&&!i.render){let t=i.template||Er(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ya(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,ba&&ba(e)}{let t=fa(e);Ve();try{Sr(e)}finally{He(),t()}}}var Sa={get(e,t){return Qe(e,`get`,``),e[t]}};function Ca(e){return{attrs:new Proxy(e.attrs,Sa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function wa(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _r)return _r[n](e)},has(e,t){return t in e||t in _r}}):e.proxy}function Ta(e){return h(e)&&`__vccOpts`in e}var Ea=(e,t)=>en(e,t,ha),Da=`3.5.32`,Oa=void 0,ka=typeof window<`u`&&window.trustedTypes;if(ka)try{Oa=ka.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Aa=Oa?e=>Oa.createHTML(e):e=>e,ja=`http://www.w3.org/2000/svg`,Ma=`http://www.w3.org/1998/Math/MathML`,Na=typeof document<`u`?document:null,Pa=Na&&Na.createElement(`template`),Fa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Na.createElementNS(ja,e):t===`mathml`?Na.createElementNS(Ma,e):n?Na.createElement(e,{is:n}):Na.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Na.createTextNode(e),createComment:e=>Na.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Na.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Pa.innerHTML=Aa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Pa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ia=Symbol(`_vtc`);function La(e,t,n){let r=e[Ia];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ra=Symbol(`_vod`),za=Symbol(`_vsh`),Ba=Symbol(``),Va=/(?:^|;)\s*display\s*:/;function Ha(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wa(r,t,``)}else for(let e in t)n[e]??Wa(r,e,``);for(let e in n)e===`display`&&(a=!0),Wa(r,e,n[e])}else if(i){if(t!==n){let e=r[Ba];e&&(n+=`;`+e),r.cssText=n,a=Va.test(n)}}else t&&e.removeAttribute(`style`);Ra in e&&(e[Ra]=a?r.display:``,e[za]&&(r.display=`none`))}var Ua=/\s*!important$/;function Wa(e,t,n){if(d(n))n.forEach(n=>Wa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=qa(e,t);Ua.test(n)?e.setProperty(k(r),n.replace(Ua,``),`important`):e[r]=n}}var Ga=[`Webkit`,`Moz`,`ms`],Ka={};function qa(e,t){let n=Ka[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return Ka[t]=r;r=te(r);for(let n=0;n<Ga.length;n++){let i=Ga[n]+r;if(i in e)return Ka[t]=i}return t}var Ja=`http://www.w3.org/1999/xlink`;function Ya(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Xa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Aa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Za(e,t,n,r){e.addEventListener(t,n,r)}function Qa(e,t,n,r){e.removeEventListener(t,n,r)}var $a=Symbol(`_vei`);function eo(e,t,n,r,i=null){let a=e[$a]||(e[$a]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=no(t);r?Za(e,n,a[t]=oo(r,i),s):o&&(Qa(e,n,o,s),a[t]=void 0)}}var to=/(?:Once|Passive|Capture)$/;function no(e){let t;if(to.test(e)){t={};let n;for(;n=e.match(to);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):k(e.slice(2)),t]}var ro=0,io=Promise.resolve(),ao=()=>ro||=(io.then(()=>ro=0),Date.now());function oo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ln(so(e,n.value),t,5,[e])};return n.value=e,n.attached=ao(),n}function so(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var co=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?La(e,r,c):t===`style`?Ha(e,n,r):a(t)?o(t)||eo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):uo(e,t,r,c))?(Xa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ya(e,t,r,c,s,t!==`value`)):e._isVueCE&&(fo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Xa(e,O(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ya(e,t,r,c))};function uo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&co(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return co(t)&&g(n)?!1:t in e}function fo(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var po=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ie(t,e):t};function mo(e){e.target.composing=!0}function ho(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var go=Symbol(`_assign`);function _o(e,t,n){return t&&(e=e.trim()),n&&(e=oe(e)),e}var vo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[go]=po(i);let a=r||i.props&&i.props.type===`number`;Za(e,t?`change`:`input`,t=>{t.target.composing||e[go](_o(e.value,n,a))}),(n||a)&&Za(e,`change`,()=>{e.value=_o(e.value,n,a)}),t||(Za(e,`compositionstart`,mo),Za(e,`compositionend`,ho),Za(e,`change`,ho))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[go]=po(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?oe(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},yo={deep:!0,created(e,t,n){e[go]=po(n),Za(e,`change`,()=>{let t=e._modelValue,n=Co(e),r=e.checked,i=e[go];if(d(t)){let e=be(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(wo(e,r))})},mounted:bo,beforeUpdate(e,t,n){e[go]=po(n),bo(e,t,n)}};function bo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=be(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=ye(t,wo(e,!0))}e.checked!==i&&(e.checked=i)}var xo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=p(t);Za(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?oe(Co(e)):Co(e));e[go](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,yn(()=>{e._assigning=!1})}),e[go]=po(r)},mounted(e,{value:t}){So(e,t)},beforeUpdate(e,t,n){e[go]=po(n)},updated(e,{value:t}){e._assigning||So(e,t)}};function So(e,t){let n=e.multiple,r=d(t);if(!(n&&!r&&!p(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Co(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=be(t,o)>-1}else a.selected=t.has(o);else if(ye(Co(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Co(e){return`_value`in e?e._value:e.value}function wo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var To=s({patchProp:lo},Fa),Eo;function Do(){return Eo||=_i(To)}var Oo=((...e)=>{let t=Do().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Ao(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ko(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ko(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Ao(e){return g(e)?document.querySelector(e):e}var jo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},No=1e3,Po=1001,Fo=1002,Io=1003,Lo=1004,Ro=1005,zo=1006,Bo=1007,Vo=1008,Ho=1009,Uo=1010,Wo=1011,Go=1012,Ko=1013,qo=1014,Jo=1015,Yo=1016,Xo=1017,Zo=1018,Qo=1020,$o=35902,es=35899,ts=1021,ns=1022,rs=1023,is=1026,as=1027,os=1028,ss=1029,cs=1030,ls=1031,us=1033,ds=33776,fs=33777,ps=33778,ms=33779,hs=35840,gs=35841,_s=35842,vs=35843,ys=36196,bs=37492,xs=37496,Ss=37488,Cs=37489,ws=37490,Ts=37491,Es=37808,Ds=37809,Os=37810,ks=37811,As=37812,js=37813,Ms=37814,Ns=37815,Ps=37816,Fs=37817,Is=37818,Ls=37819,Rs=37820,zs=37821,Bs=36492,Vs=36494,Hs=36495,Us=36283,Ws=36284,Gs=36285,Ks=36286,qs=2300,Js=2301,Ys=2302,Xs=2303,Zs=2400,Qs=2401,$s=2402,ec=3200,tc=`srgb`,nc=`srgb-linear`,rc=`linear`,ic=`srgb`,ac=7680,oc=35044,sc=2e3;function cc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function uc(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function dc(){let e=uc(`canvas`);return e.style.display=`block`,e}var fc={},pc=null;function mc(...e){let t=`THREE.`+e.shift();pc?pc(`log`,t,...e):console.log(t,...e)}function hc(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=hc(e);let t=`THREE.`+e.shift();if(pc)pc(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=hc(e);let t=`THREE.`+e.shift();if(pc)pc(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function gc(...e){let t=e.join(` `);t in fc||(fc[t]=!0,P(...e))}function _c(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var vc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},yc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},bc=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),xc=1234567,Sc=Math.PI/180,Cc=180/Math.PI;function wc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bc[e&255]+bc[e>>8&255]+bc[e>>16&255]+bc[e>>24&255]+`-`+bc[t&255]+bc[t>>8&255]+`-`+bc[t>>16&15|64]+bc[t>>24&255]+`-`+bc[n&63|128]+bc[n>>8&255]+`-`+bc[n>>16&255]+bc[n>>24&255]+bc[r&255]+bc[r>>8&255]+bc[r>>16&255]+bc[r>>24&255]).toLowerCase()}function Tc(e,t,n){return Math.max(t,Math.min(n,e))}function Ec(e,t){return(e%t+t)%t}function Dc(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Oc(e,t,n){return e===t?0:(n-e)/(t-e)}function kc(e,t,n){return(1-n)*e+n*t}function Ac(e,t,n,r){return kc(e,t,1-Math.exp(-n*r))}function jc(e,t=1){return t-Math.abs(Ec(e,t*2)-t)}function Mc(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Nc(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Pc(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Fc(e,t){return e+Math.random()*(t-e)}function Ic(e){return e*(.5-Math.random())}function Lc(e){e!==void 0&&(xc=e);let t=xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rc(e){return e*Sc}function zc(e){return e*Cc}function Bc(e){return(e&e-1)==0&&e!==0}function Vc(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Hc(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Uc(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Wc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Gc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Kc={DEG2RAD:Sc,RAD2DEG:Cc,generateUUID:wc,clamp:Tc,euclideanModulo:Ec,mapLinear:Dc,inverseLerp:Oc,lerp:kc,damp:Ac,pingpong:jc,smoothstep:Mc,smootherstep:Nc,randInt:Pc,randFloat:Fc,randFloatSpread:Ic,seededRandom:Lc,degToRad:Rc,radToDeg:zc,isPowerOfTwo:Bc,ceilPowerOfTwo:Vc,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:Uc,normalize:Gc,denormalize:Wc},qc=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tc(this.x,e.x,t.x),this.y=Tc(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tc(this.x,e,t),this.y=Tc(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tc(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jc=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tc(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tc(this.x,e.x,t.x),this.y=Tc(this.y,e.y,t.y),this.z=Tc(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tc(this.x,e,t),this.y=Tc(this.y,e,t),this.z=Tc(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tc(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new I,Xc=new Jc,Zc=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Zc,$c=new Zc().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new Zc().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tl(){let e={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=rl(e.r),e.g=rl(e.g),e.b=rl(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=il(e.r),e.g=il(e.g),e.b=il(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?rc:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return gc(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return gc(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[nc]:{primaries:t,whitePoint:r,transfer:rc,toXYZ:$c,fromXYZ:el,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tc},outputColorSpaceConfig:{drawingBufferColorSpace:tc}},[tc]:{primaries:t,whitePoint:r,transfer:ic,toXYZ:$c,fromXYZ:el,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tc}}}),e}var nl=tl();function rl(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function il(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var al,ol=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{al===void 0&&(al=uc(`canvas`)),al.width=e.width,al.height=e.height;let t=al.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=al}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=uc(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=rl(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(rl(t[e]/255)*255):t[e]=rl(t[e]);return{data:t,width:e.width,height:e.height}}else return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},sl=0,cl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:sl++}),this.uuid=wc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ll(r[t].image)):e.push(ll(r[t]))}else e=ll(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ll(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ol.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var ul=0,dl=new I,fl=class e extends yc{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Po,i=Po,a=zo,o=Vo,s=rs,c=Ho,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:ul++}),this.uuid=wc(),this.name=``,this.source=new cl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new qc(0,0),this.repeat=new qc(1,1),this.center=new qc(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zc,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x-=Math.floor(e.x);break;case Po:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y-=Math.floor(e.y);break;case Po:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fl.DEFAULT_IMAGE=null,fl.DEFAULT_MAPPING=300,fl.DEFAULT_ANISOTROPY=1;var pl=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tc(this.x,e.x,t.x),this.y=Tc(this.y,e.y,t.y),this.z=Tc(this.z,e.z,t.z),this.w=Tc(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tc(this.x,e,t),this.y=Tc(this.y,e,t),this.z=Tc(this.z,e,t),this.w=Tc(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends yc{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zo,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pl(0,0,e,t),this.scissorTest=!1,this.viewport=new pl(0,0,e,t),this.textures=[];let r=new fl({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:zo,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},hl=class extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gl=class extends fl{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Io,this.minFilter=Io,this.wrapR=Po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},_l=class extends fl{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Io,this.minFilter=Io,this.wrapR=Po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vl=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/yl.setFromMatrixColumn(e,0).length(),i=1/yl.setFromMatrixColumn(e,1).length(),a=1/yl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xl,e,Sl)}lookAt(e,t,n){let r=this.elements;return Tl.subVectors(e,t),Tl.lengthSq()===0&&(Tl.z=1),Tl.normalize(),Cl.crossVectors(n,Tl),Cl.lengthSq()===0&&(Math.abs(n.z)===1?Tl.x+=1e-4:Tl.z+=1e-4,Tl.normalize(),Cl.crossVectors(n,Tl)),Cl.normalize(),wl.crossVectors(Tl,Cl),r[0]=Cl.x,r[4]=wl.x,r[8]=Tl.x,r[1]=Cl.y,r[5]=wl.y,r[9]=Tl.y,r[2]=Cl.z,r[6]=wl.z,r[10]=Tl.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],ie=r[7],ae=r[11],oe=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*ie,i[8]=a*C+o*D+s*te+c*ae,i[12]=a*w+o*O+s*ne+c*oe,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*ie,i[9]=l*C+u*D+d*te+f*ae,i[13]=l*w+u*O+d*ne+f*oe,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*ie,i[10]=p*C+m*D+h*te+g*ae,i[14]=p*w+m*O+h*ne+g*oe,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*ie,i[11]=_*C+v*D+y*te+b*ae,i[15]=_*w+v*O+y*ne+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=yl.set(r[0],r[1],r[2]).length(),o=yl.set(r[4],r[5],r[6]).length(),s=yl.set(r[8],r[9],r[10]).length();i<0&&(a=-a),bl.copy(this);let c=1/a,l=1/o,u=1/s;return bl.elements[0]*=c,bl.elements[1]*=c,bl.elements[2]*=c,bl.elements[4]*=l,bl.elements[5]*=l,bl.elements[6]*=l,bl.elements[8]*=u,bl.elements[9]*=u,bl.elements[10]*=u,t.setFromRotationMatrix(bl),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=sc,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=sc,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yl=new I,bl=new vl,xl=new I(0,0,0),Sl=new I(1,1,1),Cl=new I,wl=new I,Tl=new I,El=new vl,Dl=new Jc,Ol=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Tc(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Tc(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Tc(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Tc(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Tc(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Tc(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ol.DEFAULT_ORDER=`XYZ`;var kl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Al=0,jl=new I,Ml=new Jc,Nl=new vl,Pl=new I,Fl=new I,Il=new I,Ll=new Jc,Rl=new I(1,0,0),zl=new I(0,1,0),Bl=new I(0,0,1),Vl={type:`added`},Hl={type:`removed`},Ul={type:`childadded`,child:null},Wl={type:`childremoved`,child:null},Gl=class e extends yc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:Al++}),this.uuid=wc(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new Ol,r=new Jc,i=new I(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vl},normalMatrix:{value:new Zc}}),this.matrix=new vl,this.matrixWorld=new vl,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ml.setFromAxisAngle(e,t),this.quaternion.multiply(Ml),this}rotateOnWorldAxis(e,t){return Ml.setFromAxisAngle(e,t),this.quaternion.premultiply(Ml),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nl.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pl.copy(e):Pl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nl.lookAt(Fl,Pl,this.up):Nl.lookAt(Pl,Fl,this.up),this.quaternion.setFromRotationMatrix(Nl),r&&(Nl.extractRotation(r.matrixWorld),Ml.setFromRotationMatrix(Nl),this.quaternion.premultiply(Ml.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hl),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nl.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nl.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nl),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,e,Il),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,Ll,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Gl.DEFAULT_UP=new I(0,1,0),Gl.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kl=class extends Gl{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ql={type:`move`},Jl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ql)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xl={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Ql(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var $l=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tc){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nl.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nl.workingColorSpace){return this.r=e,this.g=t,this.b=n,nl.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nl.workingColorSpace){if(e=Ec(e,1),t=Tc(t,0,1),n=Tc(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ql(i,r,e+1/3),this.g=Ql(i,r,e),this.b=Ql(i,r,e-1/3)}return nl.colorSpaceToWorking(this,r),this}setStyle(e,t=tc){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tc){let n=Yl[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tc){return nl.workingToColorSpace(eu.copy(this),e),Math.round(Tc(eu.r*255,0,255))*65536+Math.round(Tc(eu.g*255,0,255))*256+Math.round(Tc(eu.b*255,0,255))}getHexString(e=tc){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nl.workingColorSpace){nl.workingToColorSpace(eu.copy(this),t);let n=eu.r,r=eu.g,i=eu.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=nl.workingColorSpace){return nl.workingToColorSpace(eu.copy(this),t),e.r=eu.r,e.g=eu.g,e.b=eu.b,e}getStyle(e=tc){nl.workingToColorSpace(eu.copy(this),e);let t=eu.r,n=eu.g,r=eu.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Xl),this.setHSL(Xl.h+e,Xl.s+t,Xl.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xl),e.getHSL(Zl);let n=kc(Xl.h,Zl.h,t),r=kc(Xl.s,Zl.s,t),i=kc(Xl.l,Zl.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},eu=new $l;$l.NAMES=Yl;var tu=class extends Gl{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ol,this.environmentIntensity=1,this.environmentRotation=new Ol,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nu=new I,ru=new I,iu=new I,au=new I,ou=new I,su=new I,cu=new I,lu=new I,uu=new I,du=new I,fu=new pl,pu=new pl,mu=new pl,hu=class e{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nu.subVectors(e,t),r.cross(nu);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){nu.subVectors(r,t),ru.subVectors(n,t),iu.subVectors(e,t);let a=nu.dot(nu),o=nu.dot(ru),s=nu.dot(iu),c=ru.dot(ru),l=ru.dot(iu),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,au)===null?!1:au.x>=0&&au.y>=0&&au.x+au.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,au)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,au.x),s.addScaledVector(a,au.y),s.addScaledVector(o,au.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return fu.setScalar(0),pu.setScalar(0),mu.setScalar(0),fu.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fu,i.x),a.addScaledVector(pu,i.y),a.addScaledVector(mu,i.z),a}static isFrontFacing(e,t,n,r){return nu.subVectors(n,t),ru.subVectors(e,t),nu.cross(ru).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nu.subVectors(this.c,this.b),ru.subVectors(this.a,this.b),nu.cross(ru).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ou.subVectors(r,n),su.subVectors(i,n),lu.subVectors(e,n);let s=ou.dot(lu),c=su.dot(lu);if(s<=0&&c<=0)return t.copy(n);uu.subVectors(e,r);let l=ou.dot(uu),u=su.dot(uu);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ou,a);du.subVectors(e,i);let f=ou.dot(du),p=su.dot(du);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(su,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return cu.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(cu,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ou,a).addScaledVector(su,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gu=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vu.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vu.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,vu):vu.fromBufferAttribute(r,t),vu.applyMatrix4(e.matrixWorld),this.expandByPoint(vu);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),yu.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vu),vu.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eu),Du.subVectors(this.max,Eu),bu.subVectors(e.a,Eu),xu.subVectors(e.b,Eu),Su.subVectors(e.c,Eu),Cu.subVectors(xu,bu),wu.subVectors(Su,xu),Tu.subVectors(bu,Su);let t=[0,-Cu.z,Cu.y,0,-wu.z,wu.y,0,-Tu.z,Tu.y,Cu.z,0,-Cu.x,wu.z,0,-wu.x,Tu.z,0,-Tu.x,-Cu.y,Cu.x,0,-wu.y,wu.x,0,-Tu.y,Tu.x,0];return!Au(t,bu,xu,Su,Du)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,bu,xu,Su,Du))?!1:(Ou.crossVectors(Cu,wu),t=[Ou.x,Ou.y,Ou.z],Au(t,bu,xu,Su,Du))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vu).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vu).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_u[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_u[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_u[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_u[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_u[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_u[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_u[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_u[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_u),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_u=[new I,new I,new I,new I,new I,new I,new I,new I],vu=new I,yu=new gu,bu=new I,xu=new I,Su=new I,Cu=new I,wu=new I,Tu=new I,Eu=new I,Du=new I,Ou=new I,ku=new I;function Au(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ku.fromArray(e,a);let o=i.x*Math.abs(ku.x)+i.y*Math.abs(ku.y)+i.z*Math.abs(ku.z),s=t.dot(ku),c=n.dot(ku),l=r.dot(ku);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ju=new I,Mu=new qc,Nu=0,Pu=class extends yc{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:Nu++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Jo,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mu.fromBufferAttribute(this,t),Mu.applyMatrix3(e),this.setXY(t,Mu.x,Mu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ju.fromBufferAttribute(this,t),ju.applyMatrix3(e),this.setXYZ(t,ju.x,ju.y,ju.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ju.fromBufferAttribute(this,t),ju.applyMatrix4(e),this.setXYZ(t,ju.x,ju.y,ju.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ju.fromBufferAttribute(this,t),ju.applyNormalMatrix(e),this.setXYZ(t,ju.x,ju.y,ju.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ju.fromBufferAttribute(this,t),ju.transformDirection(e),this.setXYZ(t,ju.x,ju.y,ju.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gc(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gc(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gc(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gc(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gc(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gc(t,this.array),n=Gc(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gc(t,this.array),n=Gc(n,this.array),r=Gc(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Gc(t,this.array),n=Gc(n,this.array),r=Gc(r,this.array),i=Gc(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Fu=class extends Pu{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Iu=class extends Pu{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Lu=class extends Pu{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ru=new gu,zu=new I,Bu=new I,Vu=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ru.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zu.subVectors(e,this.center);let t=zu.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(zu,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zu.copy(e.center).add(Bu)),this.expandByPoint(zu.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hu=0,Uu=new vl,Wu=new Gl,Gu=new I,Ku=new gu,qu=new gu,Ju=new I,Yu=class e extends yc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Hu++}),this.uuid=wc(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?Iu:Fu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Zc().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Uu.makeRotationFromQuaternion(e),this.applyMatrix4(Uu),this}rotateX(e){return Uu.makeRotationX(e),this.applyMatrix4(Uu),this}rotateY(e){return Uu.makeRotationY(e),this.applyMatrix4(Uu),this}rotateZ(e){return Uu.makeRotationZ(e),this.applyMatrix4(Uu),this}translate(e,t,n){return Uu.makeTranslation(e,t,n),this.applyMatrix4(Uu),this}scale(e,t,n){return Uu.makeScale(e,t,n),this.applyMatrix4(Uu),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gu).negate(),this.translate(Gu.x,Gu.y,Gu.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Lu(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ku.setFromBufferAttribute(n),this.morphTargetsRelative?(Ju.addVectors(this.boundingBox.min,Ku.min),this.boundingBox.expandByPoint(Ju),Ju.addVectors(this.boundingBox.max,Ku.max),this.boundingBox.expandByPoint(Ju)):(this.boundingBox.expandByPoint(Ku.min),this.boundingBox.expandByPoint(Ku.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Ku.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qu.setFromBufferAttribute(n),this.morphTargetsRelative?(Ju.addVectors(Ku.min,qu.min),Ku.expandByPoint(Ju),Ju.addVectors(Ku.max,qu.max),Ku.expandByPoint(Ju)):(Ku.expandByPoint(qu.min),Ku.expandByPoint(qu.max))}Ku.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ju.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ju));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ju.fromBufferAttribute(a,t),o&&(Gu.fromBufferAttribute(e,t),Ju.add(Gu)),r=Math.max(r,n.distanceToSquared(Ju))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Pu(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new I,s[e]=new I;let c=new I,l=new I,u=new I,d=new qc,f=new qc,p=new qc,m=new I,h=new I;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new I,y=new I,b=new I,x=new I;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Pu(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new I,i=new I,a=new I,o=new I,s=new I,c=new I,l=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ju.fromBufferAttribute(e,t),Ju.normalize(),e.setXYZ(t,Ju.x,Ju.y,Ju.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Pu(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xu=0,Zu=class extends yc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Xu++}),this.uuid=wc(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $l(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Qu=new I,$u=new I,ed=new I,td=new I,nd=new I,rd=new I,id=new I,ad=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qu)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qu.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qu.copy(this.origin).addScaledVector(this.direction,t),Qu.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$u.copy(e).add(t).multiplyScalar(.5),ed.copy(t).sub(e).normalize(),td.copy(this.origin).sub($u);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ed),o=td.dot(this.direction),s=-td.dot(ed),c=td.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy($u).addScaledVector(ed,d),f}intersectSphere(e,t){Qu.subVectors(e.center,this.origin);let n=Qu.dot(this.direction),r=Qu.dot(Qu)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qu)!==null}intersectTriangle(e,t,n,r,i){nd.subVectors(t,e),rd.subVectors(n,e),id.crossVectors(nd,rd);let a=this.direction.dot(id),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;td.subVectors(this.origin,e);let s=o*this.direction.dot(rd.crossVectors(td,rd));if(s<0)return null;let c=o*this.direction.dot(nd.cross(td));if(c<0||s+c>a)return null;let l=-o*td.dot(id);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},od=class extends Zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new $l(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ol,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sd=new vl,cd=new ad,ld=new Vu,ud=new I,dd=new I,fd=new I,pd=new I,md=new I,hd=new I,gd=new I,_d=new I,vd=class extends Gl{constructor(e=new Yu,t=new od){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hd.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(md.fromBufferAttribute(s,e),a?hd.addScaledVector(md,r):hd.addScaledVector(md.sub(t),r))}t.add(hd)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ld.copy(n.boundingSphere),ld.applyMatrix4(i),cd.copy(e.ray).recast(e.near),!(ld.containsPoint(cd.origin)===!1&&(cd.intersectSphere(ld,ud)===null||cd.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(sd.copy(i).invert(),cd.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&cd.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cd)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bd(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bd(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bd(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bd(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function yd(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_d.copy(s),_d.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_d);return l<n.near||l>n.far?null:{distance:l,point:_d.clone(),object:e}}function bd(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,dd),e.getVertexPosition(c,fd),e.getVertexPosition(l,pd);let u=yd(e,t,n,r,dd,fd,pd,gd);if(u){let e=new I;hu.getBarycoord(gd,dd,fd,pd,e),i&&(u.uv=hu.getInterpolatedAttribute(i,s,c,l,e,new qc)),a&&(u.uv1=hu.getInterpolatedAttribute(a,s,c,l,e,new qc)),o&&(u.normal=hu.getInterpolatedAttribute(o,s,c,l,e,new I),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new I,materialIndex:0};hu.getNormal(dd,fd,pd,t.normal),u.face=t,u.barycoord=e}return u}var xd=class extends fl{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Io,l=Io,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sd=new I,Cd=new I,wd=new Zc,Td=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sd.subVectors(n,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Sd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wd.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ed=new Vu,Dd=new qc(.5,.5),Od=new I,kd=class{constructor(e=new Td,t=new Td,n=new Td,r=new Td,i=new Td,a=new Td){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sc,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ed.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ed.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ed)}intersectsSprite(e){return Ed.center.set(0,0,0),Ed.radius=.7071067811865476+Dd.distanceTo(e.center),Ed.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ed)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Od.x=r.normal.x>0?e.max.x:e.min.x,Od.y=r.normal.y>0?e.max.y:e.min.y,Od.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Od)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ad=class extends Zu{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new $l(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jd=new I,Md=new I,Nd=new vl,Pd=new ad,Fd=new Vu,Id=new I,Ld=new I,Rd=class extends Gl{constructor(e=new Yu,t=new Ad){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)jd.fromBufferAttribute(t,e-1),Md.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=jd.distanceTo(Md);e.setAttribute(`lineDistance`,new Lu(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fd.copy(n.boundingSphere),Fd.applyMatrix4(r),Fd.radius+=i,e.ray.intersectsSphere(Fd)===!1)return;Nd.copy(r).invert(),Pd.copy(e.ray).applyMatrix4(Nd);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=zd(this,e,Pd,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=zd(this,e,Pd,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=zd(this,e,Pd,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=zd(this,e,Pd,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function zd(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(jd.fromBufferAttribute(s,i),Md.fromBufferAttribute(s,a),n.distanceSqToSegment(jd,Md,Id,Ld)>r)return;Id.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Id);if(!(c<t.near||c>t.far))return{distance:c,point:Ld.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Bd=new I,Vd=new I,Hd=class extends Rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Bd.fromBufferAttribute(t,e),Vd.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Bd.distanceTo(Vd);e.setAttribute(`lineDistance`,new Lu(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ud=class extends fl{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wd=class extends fl{constructor(e,t,n=qo,r,i,a,o=Io,s=Io,c,l=is,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gd=class extends Wd{constructor(e,t=qo,n=301,r,i,a=Io,o=Io,s,c=is){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kd=class extends fl{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qd=class e extends Yu{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Lu(c,3)),this.setAttribute(`normal`,new Lu(l,3)),this.setAttribute(`uv`,new Lu(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new I;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Jd=class e extends Yu{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Lu(i,3)),this.setAttribute(`normal`,new Lu(i.slice(),3)),this.setAttribute(`uv`,new Lu(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new I,r=new I,i=new I;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new I;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new I;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new I,t=new I,n=new I,r=new I,o=new qc,s=new qc,c=new qc;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Yd=class e extends Jd{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Xd=class e extends Yu{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Lu(p,3)),this.setAttribute(`normal`,new Lu(m,3)),this.setAttribute(`uv`,new Lu(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Zd=class e extends Yu{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new I,d=new I,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Lu(p,3)),this.setAttribute(`normal`,new Lu(m,3)),this.setAttribute(`uv`,new Lu(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Qd=class e extends Yu{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new I,f=new I,p=new I;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Lu(c,3)),this.setAttribute(`normal`,new Lu(l,3)),this.setAttribute(`uv`,new Lu(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},$d=class e extends Yu{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new I,d=new I,f=new I,p=new I,m=new I,h=new I,g=new I;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new Lu(s,3)),this.setAttribute(`normal`,new Lu(c,3)),this.setAttribute(`uv`,new Lu(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};function ef(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(nf(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(nf(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function tf(e){let t={};for(let n=0;n<e.length;n++){let r=ef(e[n]);for(let e in r)t[e]=r[e]}return t}function nf(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rf(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function af(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nl.workingColorSpace}var of={clone:ef,merge:tf},sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lf=class extends Zu{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ef(e.uniforms),this.uniformsGroups=rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uf=class extends lf{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},df=class extends Zu{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new $l(16777215),this.specular=new $l(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $l(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qc(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ol,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ff=class extends Zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pf=class extends Zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var hf=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},gf=class extends hf{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qs:i=e,o=2*t-n;break;case $s:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Qs:a=e,s=2*n-t;break;case $s:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},_f=class extends hf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},vf=class extends hf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yf=class extends hf{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},bf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=mf(t,this.TimeBufferType),this.values=mf(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mf(e.times,Array),values:mf(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case Ys:t=this.InterpolantFactoryMethodSmooth;break;case Xs:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return Ys;case this.InterpolantFactoryMethodBezier:return Xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&lc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ys,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};bf.prototype.ValueTypeName=``,bf.prototype.TimeBufferType=Float32Array,bf.prototype.ValueBufferType=Float32Array,bf.prototype.DefaultInterpolation=Js;var xf=class extends bf{constructor(e,t,n){super(e,t,n)}};xf.prototype.ValueTypeName=`bool`,xf.prototype.ValueBufferType=Array,xf.prototype.DefaultInterpolation=qs,xf.prototype.InterpolantFactoryMethodLinear=void 0,xf.prototype.InterpolantFactoryMethodSmooth=void 0;var Sf=class extends bf{constructor(e,t,n,r){super(e,t,n,r)}};Sf.prototype.ValueTypeName=`color`;var Cf=class extends bf{constructor(e,t,n,r){super(e,t,n,r)}};Cf.prototype.ValueTypeName=`number`;var wf=class extends hf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Jc.slerpFlat(i,0,a,c-o,a,c,s);return i}},Tf=class extends bf{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new wf(this.times,this.values,this.getValueSize(),e)}};Tf.prototype.ValueTypeName=`quaternion`,Tf.prototype.InterpolantFactoryMethodSmooth=void 0;var Ef=class extends bf{constructor(e,t,n){super(e,t,n)}};Ef.prototype.ValueTypeName=`string`,Ef.prototype.ValueBufferType=Array,Ef.prototype.DefaultInterpolation=qs,Ef.prototype.InterpolantFactoryMethodLinear=void 0,Ef.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends bf{constructor(e,t,n,r){super(e,t,n,r)}};Df.prototype.ValueTypeName=`vector`;var Of=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},kf=class{constructor(e){this.manager=e===void 0?Of:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};kf.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Af=class extends Gl{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new $l(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},jf=new vl,Mf=new I,Nf=new I,Pf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qc(512,512),this.mapType=Ho,this.map=null,this.mapPass=null,this.matrix=new vl,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new qc(1,1),this._viewportCount=1,this._viewports=[new pl(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mf),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),jf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ff=new I,If=new Jc,Lf=new I,Rf=class extends Gl{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new vl,this.projectionMatrix=new vl,this.projectionMatrixInverse=new vl,this.coordinateSystem=sc,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ff,If,Lf),Lf.x===1&&Lf.y===1&&Lf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ff,If,Lf.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ff,If,Lf),Lf.x===1&&Lf.y===1&&Lf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ff,If,Lf.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zf=new I,Bf=new qc,Vf=new qc,Hf=class extends Rf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zf.x,zf.y).multiplyScalar(-e/zf.z),zf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zf.x,zf.y).multiplyScalar(-e/zf.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,Vf),t.subVectors(Vf,Bf)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Uf=class extends Pf{constructor(){super(new Hf(90,1,.5,500)),this.isPointLightShadow=!0}},Wf=class extends Af{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gf=class extends Rf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kf=class extends Af{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},qf=-90,Jf=1,Yf=class extends Gl{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Hf(qf,Jf,e,t);r.layers=this.layers,this.add(r);let i=new Hf(qf,Jf,e,t);i.layers=this.layers,this.add(i);let a=new Hf(qf,Jf,e,t);a.layers=this.layers,this.add(a);let o=new Hf(qf,Jf,e,t);o.layers=this.layers,this.add(o);let s=new Hf(qf,Jf,e,t);s.layers=this.layers,this.add(s);let c=new Hf(qf,Jf,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xf=class extends Hf{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zf=`\\[\\]\\.:\\/`,Qf=RegExp(`[`+Zf+`]`,`g`),$f=`[^`+Zf+`]`,ep=`[^`+Zf.replace(`\\.`,``)+`]`,tp=`((?:WC+[\\/:])*)`.replace(`WC`,$f),np=`(WCOD+)?`.replace(`WCOD`,ep),rp=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,$f),ip=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,$f),ap=RegExp(`^`+tp+np+rp+ip+`$`),op=[`material`,`materials`,`bones`,`map`],sp=class{constructor(e,t,n){let r=n||cp.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},cp=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Qf,``)}static parseTrackName(e){let t=ap.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);op.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};cp.Composite=sp,cp.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},cp.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},cp.prototype.GetterByBindingType=[cp.prototype._getValue_direct,cp.prototype._getValue_array,cp.prototype._getValue_arrayElement,cp.prototype._getValue_toArray],cp.prototype.SetterByBindingTypeAndVersioning=[[cp.prototype._setValue_direct,cp.prototype._setValue_direct_setNeedsUpdate,cp.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cp.prototype._setValue_array,cp.prototype._setValue_array_setNeedsUpdate,cp.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cp.prototype._setValue_arrayElement,cp.prototype._setValue_arrayElement_setNeedsUpdate,cp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cp.prototype._setValue_fromArray,cp.prototype._setValue_fromArray_setNeedsUpdate,cp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lp=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Tc(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tc(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var up=class extends Hd{constructor(e=10,t=10,n=4473924,r=8947848){n=new $l(n),r=new $l(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Yu;l.setAttribute(`position`,new Lu(s,3)),l.setAttribute(`color`,new Lu(c,3));let u=new Ad({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},dp=class extends Hd{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Yu;r.setAttribute(`position`,new Lu(t,3)),r.setAttribute(`color`,new Lu(n,3));let i=new Ad({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new $l,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},fp=class extends yc{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){P(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function pp(e,t,n,r){let i=mp(r);switch(n){case ts:return e*t;case os:return e*t/i.components*i.byteLength;case ss:return e*t/i.components*i.byteLength;case cs:return e*t*2/i.components*i.byteLength;case ls:return e*t*2/i.components*i.byteLength;case ns:return e*t*3/i.components*i.byteLength;case rs:return e*t*4/i.components*i.byteLength;case us:return e*t*4/i.components*i.byteLength;case ds:case fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gs:case vs:return Math.max(e,16)*Math.max(t,8)/4;case hs:case _s:return Math.max(e,8)*Math.max(t,8)/2;case ys:case bs:case Ss:case Cs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xs:case ws:case Ts:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Es:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ds:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Os:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ks:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case As:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case js:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ms:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ns:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ps:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Is:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ls:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rs:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zs:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Bs:case Vs:case Hs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Us:case Ws:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gs:case Ks:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function mp(e){switch(e){case Ho:case Uo:return{byteLength:1,components:1};case Go:case Wo:case Yo:return{byteLength:2,components:1};case Xo:case Zo:return{byteLength:2,components:4};case qo:case Ko:case Jo:return{byteLength:4,components:1};case $o:case es:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function hp(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function gp(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _p={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},L={common:{diffuse:{value:new $l(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zc},alphaMap:{value:null},alphaMapTransform:{value:new Zc},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zc}},envmap:{envMap:{value:null},envMapRotation:{value:new Zc},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zc}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zc}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zc},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zc},normalScale:{value:new qc(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zc},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zc}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zc}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zc}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $l(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new $l(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zc},alphaTest:{value:0},uvTransform:{value:new Zc}},sprite:{diffuse:{value:new $l(16777215)},opacity:{value:1},center:{value:new qc(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zc},alphaMap:{value:null},alphaMapTransform:{value:new Zc},alphaTest:{value:0}}},vp={basic:{uniforms:tf([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.fog]),vertexShader:_p.meshbasic_vert,fragmentShader:_p.meshbasic_frag},lambert:{uniforms:tf([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new $l(0)},envMapIntensity:{value:1}}]),vertexShader:_p.meshlambert_vert,fragmentShader:_p.meshlambert_frag},phong:{uniforms:tf([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new $l(0)},specular:{value:new $l(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_p.meshphong_vert,fragmentShader:_p.meshphong_frag},standard:{uniforms:tf([L.common,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.roughnessmap,L.metalnessmap,L.fog,L.lights,{emissive:{value:new $l(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_p.meshphysical_vert,fragmentShader:_p.meshphysical_frag},toon:{uniforms:tf([L.common,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.gradientmap,L.fog,L.lights,{emissive:{value:new $l(0)}}]),vertexShader:_p.meshtoon_vert,fragmentShader:_p.meshtoon_frag},matcap:{uniforms:tf([L.common,L.bumpmap,L.normalmap,L.displacementmap,L.fog,{matcap:{value:null}}]),vertexShader:_p.meshmatcap_vert,fragmentShader:_p.meshmatcap_frag},points:{uniforms:tf([L.points,L.fog]),vertexShader:_p.points_vert,fragmentShader:_p.points_frag},dashed:{uniforms:tf([L.common,L.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_p.linedashed_vert,fragmentShader:_p.linedashed_frag},depth:{uniforms:tf([L.common,L.displacementmap]),vertexShader:_p.depth_vert,fragmentShader:_p.depth_frag},normal:{uniforms:tf([L.common,L.bumpmap,L.normalmap,L.displacementmap,{opacity:{value:1}}]),vertexShader:_p.meshnormal_vert,fragmentShader:_p.meshnormal_frag},sprite:{uniforms:tf([L.sprite,L.fog]),vertexShader:_p.sprite_vert,fragmentShader:_p.sprite_frag},background:{uniforms:{uvTransform:{value:new Zc},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_p.background_vert,fragmentShader:_p.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zc}},vertexShader:_p.backgroundCube_vert,fragmentShader:_p.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_p.cube_vert,fragmentShader:_p.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_p.equirect_vert,fragmentShader:_p.equirect_frag},distance:{uniforms:tf([L.common,L.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_p.distance_vert,fragmentShader:_p.distance_frag},shadow:{uniforms:tf([L.lights,L.fog,{color:{value:new $l(0)},opacity:{value:1}}]),vertexShader:_p.shadow_vert,fragmentShader:_p.shadow_frag}};vp.physical={uniforms:tf([vp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zc},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zc},clearcoatNormalScale:{value:new qc(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zc},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zc},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zc},sheen:{value:0},sheenColor:{value:new $l(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zc},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zc},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zc},transmissionSamplerSize:{value:new qc},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zc},attenuationDistance:{value:0},attenuationColor:{value:new $l(0)},specularColor:{value:new $l(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zc},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zc},anisotropyVector:{value:new qc},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zc}}]),vertexShader:_p.meshphysical_vert,fragmentShader:_p.meshphysical_frag};var yp={r:0,b:0,g:0},bp=new vl,xp=new Zc;xp.set(-1,0,0,0,1,0,0,0,1);function Sp(e,t,n,r,i,a){let o=new $l(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new vd(new qd(1,1,1),new lf({name:`BackgroundCubeMaterial`,uniforms:ef(vp.backgroundCube.uniforms),vertexShader:vp.backgroundCube.vertexShader,fragmentShader:vp.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xp),l.material.toneMapped=nl.getTransfer(i.colorSpace)!==ic,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vd(new Xd(2,2),new lf({name:`BackgroundMaterial`,uniforms:ef(vp.background.uniforms),vertexShader:vp.background.vertexShader,fragmentShader:vp.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=nl.getTransfer(i.colorSpace)!==ic,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(yp,af(e)),n.buffers.color.setClear(yp.r,yp.g,yp.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Cp(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wp(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Tp(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ep(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Td,s=new Zc,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Dp=4,Op=[.125,.215,.35,.446,.526,.582],kp=20,Ap=256,jp=new Gf,Mp=new $l,Np=null,Pp=0,Fp=0,Ip=!1,Lp=new I,Rp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Lp}=i;Np=this._renderer.getRenderTarget(),Pp=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Np,Pp,Fp),this._renderer.xr.enabled=Ip,e.scissorTest=!1,Vp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Np=this._renderer.getRenderTarget(),Pp=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zo,minFilter:zo,generateMipmaps:!1,type:Yo,format:rs,colorSpace:nc,depthBuffer:!1},r=Bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Up(r,e,t),this._ggxMaterial=Hp(r,e,t)}return r}_compileMaterial(e){let t=new vd(new Yu,e);this._renderer.compile(t,jp)}_sceneToCubeUV(e,t,n,r,i){let a=new Hf(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Mp),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vd(new qd,new od({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Mp),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Vp(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Vp(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,jp)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Dp?n-d+Dp:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Vp(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,jp),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Vp(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,jp)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&F(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*kp-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):kp;m>kp&&P(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kp}`);let h=[],g=0;for(let e=0;e<kp;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Vp(t,3*v*(r>_-Dp?r-_+Dp:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,jp)}};function zp(e){let t=[],n=[],r=[],i=e,a=e-Dp+1+Op.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Dp?s=Op[o-e+Dp-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Yu;h.setAttribute(`position`,new Pu(f,3)),h.setAttribute(`uv`,new Pu(p,2)),h.setAttribute(`faceIndex`,new Pu(m,1)),r.push(new vd(h,null)),i>Dp&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Bp(e,t,n){let r=new hl(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Vp(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Hp(e,t,n){return new lf({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ap,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Up(e,t,n){let r=new Float32Array(kp),i=new I(0,1,0);return new lf({name:`SphericalGaussianBlur`,defines:{n:kp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wp(){return new lf({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gp(){return new lf({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var qp=class extends hl{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new Ud([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qd(5,5,5),i=new lf({name:`CubemapFromEquirect`,uniforms:ef(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vd(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=zo),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Jp(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new qp(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Rp(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Rp(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Yp(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&gc(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xp(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Iu:Fu)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zp(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Qp(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $p(e,t,n){let r=new WeakMap,i=new pl;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new gl(h,p,m,u);g.type=Jo,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new qc(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function em(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var tm={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function nm(e,t,n,r,i){let a=new hl(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new Wd(t,n):void 0}),o=new hl(t,n,{type:Yo,depthBuffer:!1,stencilBuffer:!1}),s=new Yu;s.setAttribute(`position`,new Lu([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new Lu([0,2,0,0,2,0],2));let c=new uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new vd(s,c),u=new Gf(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},nl.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=tm[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var rm=new fl,im=new Wd(1,1),am=new gl,om=new _l,sm=new Ud,cm=[],lm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function pm(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=cm[i];if(a===void 0&&(a=new Float32Array(i),cm[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function mm(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function hm(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function gm(e,t){let n=lm[t];n===void 0&&(n=new Int32Array(t),lm[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _m(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mm(n,t))return;e.uniform2fv(this.addr,t),hm(n,t)}}function ym(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mm(n,t))return;e.uniform3fv(this.addr,t),hm(n,t)}}function bm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mm(n,t))return;e.uniform4fv(this.addr,t),hm(n,t)}}function xm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mm(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hm(n,t)}else{if(mm(n,r))return;fm.set(r),e.uniformMatrix2fv(this.addr,!1,fm),hm(n,r)}}function Sm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mm(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hm(n,t)}else{if(mm(n,r))return;dm.set(r),e.uniformMatrix3fv(this.addr,!1,dm),hm(n,r)}}function Cm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mm(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hm(n,t)}else{if(mm(n,r))return;um.set(r),e.uniformMatrix4fv(this.addr,!1,um),hm(n,r)}}function wm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Tm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mm(n,t))return;e.uniform2iv(this.addr,t),hm(n,t)}}function Em(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mm(n,t))return;e.uniform3iv(this.addr,t),hm(n,t)}}function Dm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mm(n,t))return;e.uniform4iv(this.addr,t),hm(n,t)}}function Om(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function km(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mm(n,t))return;e.uniform2uiv(this.addr,t),hm(n,t)}}function Am(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mm(n,t))return;e.uniform3uiv(this.addr,t),hm(n,t)}}function jm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mm(n,t))return;e.uniform4uiv(this.addr,t),hm(n,t)}}function Mm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(im.compareFunction=n.isReversedDepthBuffer()?518:515,a=im):a=rm,n.setTexture2D(t||a,i)}function Nm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||om,i)}function Pm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||sm,i)}function Fm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||am,i)}function Im(e){switch(e){case 5126:return _m;case 35664:return vm;case 35665:return ym;case 35666:return bm;case 35674:return xm;case 35675:return Sm;case 35676:return Cm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Dm;case 5125:return Om;case 36294:return km;case 36295:return Am;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Fm}}function Lm(e,t){e.uniform1fv(this.addr,t)}function Rm(e,t){let n=pm(t,this.size,2);e.uniform2fv(this.addr,n)}function zm(e,t){let n=pm(t,this.size,3);e.uniform3fv(this.addr,n)}function Bm(e,t){let n=pm(t,this.size,4);e.uniform4fv(this.addr,n)}function Vm(e,t){let n=pm(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Hm(e,t){let n=pm(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Um(e,t){let n=pm(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Wm(e,t){e.uniform1iv(this.addr,t)}function Gm(e,t){e.uniform2iv(this.addr,t)}function Km(e,t){e.uniform3iv(this.addr,t)}function qm(e,t){e.uniform4iv(this.addr,t)}function Jm(e,t){e.uniform1uiv(this.addr,t)}function Ym(e,t){e.uniform2uiv(this.addr,t)}function Xm(e,t){e.uniform3uiv(this.addr,t)}function Zm(e,t){e.uniform4uiv(this.addr,t)}function Qm(e,t,n){let r=this.cache,i=t.length,a=gm(n,i);mm(r,a)||(e.uniform1iv(this.addr,a),hm(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?im:rm;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function $m(e,t,n){let r=this.cache,i=t.length,a=gm(n,i);mm(r,a)||(e.uniform1iv(this.addr,a),hm(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||om,a[e])}function eh(e,t,n){let r=this.cache,i=t.length,a=gm(n,i);mm(r,a)||(e.uniform1iv(this.addr,a),hm(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||sm,a[e])}function th(e,t,n){let r=this.cache,i=t.length,a=gm(n,i);mm(r,a)||(e.uniform1iv(this.addr,a),hm(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||am,a[e])}function nh(e){switch(e){case 5126:return Lm;case 35664:return Rm;case 35665:return zm;case 35666:return Bm;case 35674:return Vm;case 35675:return Hm;case 35676:return Um;case 5124:case 35670:return Wm;case 35667:case 35671:return Gm;case 35668:case 35672:return Km;case 35669:case 35673:return qm;case 5125:return Jm;case 36294:return Ym;case 36295:return Xm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return eh;case 36289:case 36303:case 36311:case 36292:return th}}var rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}},ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nh(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function sh(e,t){e.seq.push(t),e.map[t.id]=t}function ch(e,t,n){let r=e.name,i=r.length;for(oh.lastIndex=0;;){let a=oh.exec(r),o=oh.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){sh(n,l===void 0?new rh(s,e,t):new ih(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ah(s),sh(n,e)),n=e}}}var lh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ch(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function uh(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var dh=37297,fh=0;function ph(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var mh=new Zc;function hh(e){nl._getMatrix(mh,nl.workingColorSpace,e);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(nl.getTransfer(e)){case rc:return[t,`LinearTransferOETF`];case ic:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function gh(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ph(e.getShaderSource(t),r)}else return i}function _h(e,t){let n=hh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var vh={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function yh(e,t){let n=vh[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bh=new I;function xh(){return nl.getLuminanceCoefficients(bh),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bh.x.toFixed(4)}, ${bh.y.toFixed(4)}, ${bh.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Sh(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Th).join(`
`)}function Ch(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wh(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Th(e){return e!==``}function Eh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oh=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(e){return e.replace(Oh,jh)}var Ah=new Map;function jh(e,t){let n=_p[t];if(n===void 0){let e=Ah.get(t);if(e!==void 0)n=_p[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return kh(n)}var Mh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(e){return e.replace(Mh,Ph)}function Ph(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ih={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Lh(e){return Ih[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Rh={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function zh(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Rh[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Bh={302:`ENVMAP_MODE_REFRACTION`};function Vh(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Bh[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Hh={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Uh(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Hh[e.combine]||`ENVMAP_BLENDING_NONE`}function Wh(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Gh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Lh(n),l=zh(n),u=Vh(n),d=Uh(n),f=Wh(n),p=Sh(n),m=Ch(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Th).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Th).join(`
`),_.length>0&&(_+=`
`)):(g=[Fh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Th).join(`
`),_=[Fh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:_p.tonemapping_pars_fragment,n.toneMapping===0?``:yh(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,_p.colorspace_pars_fragment,_h(`linearToOutputTexel`,n.outputColorSpace),xh(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Th).join(`
`)),o=kh(o),o=Eh(o,n),o=Dh(o,n),s=kh(s),s=Eh(s,n),s=Dh(s,n),o=Nh(o),s=Nh(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=uh(i,i.VERTEX_SHADER,y),S=uh(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=gh(i,x,`vertex`),n=gh(i,S,`fragment`);F(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new lh(i,h),T=wh(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,dh)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fh++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Kh=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=Kh++,this.code=e,this.usedTimes=0}};function Yh(e){return e===1030||e===37490||e===36285}function Xh(e,t,n,r,i,a){let o=new kl,s=new qh,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=vp[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),ee=s.getVertexShaderID(i),k=s.getFragmentShaderID(i);let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!x,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.dispersion>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=ge&&!!i.anisotropyMap,Ce=_e&&!!i.clearcoatMap,we=_e&&!!i.clearcoatNormalMap,A=_e&&!!i.clearcoatRoughnessMap,Te=ye&&!!i.iridescenceMap,Ee=ye&&!!i.iridescenceThicknessMap,j=be&&!!i.sheenColorMap,M=be&&!!i.sheenRoughnessMap,De=!!i.specularMap,N=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=xe&&!!i.transmissionMap,Ae=xe&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nl.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&x.mapping,envMapCubeUVHeight:S,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&Yh(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Se,clearcoat:_e,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:A,dispersion:ve,iridescence:ye,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:be,sheenColorMap:j,sheenRoughnessMap:M,specularMap:De,specularColorMap:N,specularIntensityMap:Oe,transmission:xe,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:ce&&m(i.aoMap.channel),lightMapUv:le&&m(i.lightMap.channel),bumpMapUv:ue&&m(i.bumpMap.channel),normalMapUv:de&&m(i.normalMap.channel),displacementMapUv:fe&&m(i.displacementMap.channel),emissiveMapUv:pe&&m(i.emissiveMap.channel),metalnessMapUv:me&&m(i.metalnessMap.channel),roughnessMapUv:he&&m(i.roughnessMap.channel),anisotropyMapUv:Se&&m(i.anisotropyMap.channel),clearcoatMapUv:Ce&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:j&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:M&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:N&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||ge),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&nl.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&nl.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=vp[t];n=of.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Gh(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Zh(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Qh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $h(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function eg(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Qh),r.length>1&&r.sort(t||$h),i.length>1&&i.sort(t||$h)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function tg(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new eg,e.set(t,[i])):n>=r.length?(i=new eg,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ng(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new I,color:new $l};break;case`SpotLight`:n={position:new I,direction:new I,color:new $l,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new I,color:new $l,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new I,skyColor:new $l,groundColor:new $l};break;case`RectAreaLight`:n={color:new $l,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function rg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qc};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qc};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qc,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ig=0;function ag(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function og(e){let t=new ng,n=rg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new I);let i=new I,a=new vl,o=new vl;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ag);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=L.LTC_FLOAT_1,r.rectAreaLTC2=L.LTC_FLOAT_2):(r.rectAreaLTC1=L.LTC_HALF_1,r.rectAreaLTC2=L.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ig++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function sg(e){let t=new og(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function cg(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new sg(e),t.set(n,[a])):r>=i.length?(a=new sg(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],fg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],pg=new vl,mg=new I,hg=new I;function gg(e,t,n){let r=new kd,i=new qc,a=new qc,o=new pl,s=new ff,c=new pf,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new lf({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qc},radius:{value:4}},vertexShader:lg,fragmentShader:ug}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Yu;m.setAttribute(`position`,new Pu(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new vd(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new hl(i.x,i.y,{format:cs,type:Yo,minFilter:zo,magFilter:zo,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Wd(i.x,i.y,Jo),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=is,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Io,d.map.depthTexture.magFilter=Io}else l.isPointLight?(d.map=new qp(i.x),d.map.depthTexture=new Gd(i.x,qo)):(d.map=new hl(i.x,i.y),d.map.depthTexture=new Wd(i.x,i.y,qo)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=is,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=zo,d.map.depthTexture.magFilter=zo):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Io,d.map.depthTexture.magFilter=Io);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),mg.setFromMatrixPosition(l.matrixWorld),e.position.copy(mg),hg.copy(e.position),hg.add(dg[t]),e.up.copy(fg[t]),e.lookAt(hg),e.updateMatrixWorld(),n.makeTranslation(-mg.x,-mg.y,-mg.z),pg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(pg,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new hl(i.x,i.y,{format:cs,type:Yo})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function _g(e,t){function n(){let t=!1,n=new pl,r=null,i=new pl(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=vc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $l(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new pl().fromArray(ce),de=new pl().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Ce(!1),we(1),me(e.CULL_FACE),xe(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(he(e.BLEND),g=!1);return}if(g===!1&&(me(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ye[n],ye[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Ce(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function we(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function A(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Te(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function Ee(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function j(t){t===void 0&&(t=e.TEXTURE0+ne-1),oe!==t&&(e.activeTexture(t),oe=t)}function M(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+ne-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function De(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function N(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Be(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new $l(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:Ce,setCullFace:we,setLineWidth:A,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:j,bindTexture:M,unbindTexture:De,compressedTexImage2D:N,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:ze,viewport:Be,reset:Ue}}function vg(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qc,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):uc(`canvas`)}function g(e,t,n){let r=1,i=N(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?rc:nl.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function k(){return O}function te(e){O=e}function ne(){let e=O;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ce={[No]:e.REPEAT,[Po]:e.CLAMP_TO_EDGE,[Fo]:e.MIRRORED_REPEAT},le={[Io]:e.NEAREST,[Lo]:e.NEAREST_MIPMAP_NEAREST,[Ro]:e.NEAREST_MIPMAP_LINEAR,[zo]:e.LINEAR,[Bo]:e.LINEAR_MIPMAP_NEAREST,[Vo]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ce[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ce[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ce[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,le[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,le[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=pe(n.start,r.width,4),c=pe(t.start,r.width,4);n.start<=i+1&&a===c&&pe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=fe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=nl.getPrimaries(nl.workingColorSpace),r=o.colorSpace===``?null:nl.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=De(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);de(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===as,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&me(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023)if(r!==null)if(C){if(T)if(o.layerUpdates.size>0){let t=pp(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T)if(o.layerUpdates.size>0){let i=pp(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w)if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=e.RGBA,i=e.RGBA,a=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,r,i,a,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=N(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=N(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,s){if(o.image.length!==6)return;let c=fe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=nl.getPrimaries(nl.workingColorSpace),r=o.colorSpace===``?null:nl.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=De(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);de(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=N(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),j(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;j(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);j(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),de(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ie(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)j(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)j(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&j(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),de(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),de(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let we=[],A=[];function Te(t){if(t.samples>0){if(j(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,A.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(we.push(l),A.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,A)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function j(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function M(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(nl.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function N(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yg(e,t){function n(n,r=``){let i,a=nl.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new lf({vertexShader:bg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vd(new Xd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cg=class extends yc{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Sg,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new qc,C=null,w=new Hf;w.viewport=new pl;let T=new Hf;T.viewport=new pl;let E=[w,T],D=new Xf,O=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Jl,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Jl,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Jl,b[e]=t),t.getHandSpace()};function k(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,ee=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?as:is,a=_.stencil?Qo:qo);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hl(d.textureWidth,d.textureHeight,{format:rs,type:Ho,depthTexture:new Wd(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hl(f.framebufferWidth,f.framebufferHeight,{format:rs,type:Ho,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new I,ie=new I;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||ee!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,ee=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;oe(D,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),se(e,D,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Cc*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Hf,o.layers.enable(n),o.viewport=new pl,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Kd,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ue=new hp;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},wg=new vl,Tg=new Zc;Tg.set(-1,0,0,0,1,0,0,0,1);function Eg(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,af(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Tg),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Dg(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kg=null;function Ag(){return kg===null&&(kg=new xd(Og,16,16,cs,Yo),kg.name=`DFG_LUT`,kg.minFilter=zo,kg.magFilter=zo,kg.wrapS=Po,kg.wrapT=Po,kg.generateMipmaps=!1,kg.needsUpdate=!0),kg}var jg=class{constructor(e={}){let{canvas:t=dc(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ho}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([us,ls,ss]),g=new Set([Ho,qo,Go,Qo,Xo,Zo]),_=new Uint32Array(4),v=new Int32Array(4),y=new I,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null;this._outputColorSpace=tc;let O=0,ee=0,k=null,te=-1,ne=null,re=new pl,ie=new pl,ae=null,oe=new $l(0),se=0,ce=t.width,le=t.height,ue=1,de=null,fe=null,pe=new pl(0,0,ce,le),me=new pl(0,0,ce,le),he=!1,ge=new kd,_e=!1,ve=!1,ye=new vl,be=new I,xe=new pl,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return k===null?ue:1}let A=n;function Te(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),A===null){let t=`webgl2`;if(A=Te(t,e),A===null)throw Te(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw F(`WebGLRenderer: `+e.message),e}let Ee,j,M,De,N,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge;function Ke(){Ee=new Yp(A),Ee.init(),Ue=new yg(A,Ee),j=new Tp(A,Ee,e,Ue),M=new _g(A,Ee),j.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),De=new Qp(A),N=new Zh,Oe=new vg(A,Ee,M,N,j,Ue,De),ke=new Jp(T),Ae=new gp(A),We=new Cp(A,Ae),je=new Xp(A,Ae,De,We),Me=new em(A,je,Ae,We,De),Be=new $p(A,j,Oe),Le=new Ep(N),Ne=new Xh(T,ke,Ee,j,We,Le),Pe=new Eg(T,N),Fe=new tg,Ie=new cg(Ee),ze=new Sp(T,ke,M,Me,p,s),Re=new gg(T,Me,j),Ge=new Dg(A,De,j,M),Ve=new wp(A,Ee,De),He=new Zp(A,Ee,De),De.programs=Ne.programs,T.capabilities=j,T.extensions=Ee,T.properties=N,T.renderLists=Fe,T.shadowMap=Re,T.state=M,T.info=De}Ke(),m!==1009&&(w=new nm(m,t.width,t.height,r,i));let qe=new Cg(T,A);this.xr=qe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){if(qe.isPresenting){P(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){F(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),M.viewport(re.copy(pe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),M.scissor(ie.copy(me).multiplyScalar(ue).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){M.setScissorTest(he=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(k!==null){let t=k.texture.format;e=h.has(t)}if(e){let e=k.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,A.clearBufferiv(A.COLOR,0,v))}else r|=A.COLOR_BUFFER_BIT}t&&(r|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&A.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),N.dispose(),ke.dispose(),Me.dispose(),We.dispose(),Ge.dispose(),Ne.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,rt),qe.removeEventListener(`sessionend`,it),at.stop()};function Je(e){e.preventDefault(),mc(`WebGLRenderer: Context Lost.`),E=!0}function Ye(){mc(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ke(),De.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function Xe(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),Qe(t)}function Qe(e){$e(e),N.remove(e)}function $e(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ht(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;We.setup(i,r,s,n,c);let h,g=Ve;if(c!==null&&(h=Ae.get(c),g=He,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*we()),g.setMode(A.LINES)):g.setMode(A.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*we()),i.isLineSegments?g.setMode(A.LINES):i.isLineLoop?g.setMode(A.LINE_LOOP):g.setMode(A.LINE_STRIP)}else i.isPoints?g.setMode(A.POINTS):i.isSprite&&g.setMode(A.TRIANGLES);if(i.isBatchedMesh)if(Ee.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(A,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function et(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,dt(e,t,n),e.side=0,e.needsUpdate=!0,dt(e,t,n),e.side=2):dt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Ie.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];et(a,n,e),r.add(a)}else et(t,n,e),r.add(t)}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){N.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let tt=null;function nt(e){tt&&tt(e)}function rt(){at.stop()}function it(){at.start()}let at=new hp;at.setAnimationLoop(nt),typeof self<`u`&&at.setContext(self),this.setAnimationLoop=function(e){tt=e,qe.setAnimationLoop(e),e===null?at.stop():at.start()},qe.addEventListener(`sessionstart`,rt),qe.addEventListener(`sessionend`,it),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=qe.enabled===!0&&qe.isPresenting===!0,r=w!==null&&(k===null||n)&&w.begin(T,k);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(t),t=qe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,k),x=Ie.get(e,C.length),x.init(t),x.state.textureUnits=Oe.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(ye,sc,t.reversedDepth),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),b=Fe.get(e,S.length),b.init(),S.push(b),qe.enabled===!0&&qe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ot(e,t,-1/0,T.sortObjects)}ot(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(de,fe),Ce=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ce&&ze.addToRenderList(b,e),this.info.render.frame++,_e===!0&&Le.beginShadows();let i=x.state.shadowsArray;if(Re.render(i,e,t),_e===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ct(n,r,e,a)}Ce&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];st(b,e,n,n.viewport)}}else r.length>0&&ct(n,r,e,t),Ce&&ze.render(e),st(b,e,t)}k!==null&&ee===0&&(Oe.updateMultisampleRenderTarget(k),Oe.updateRenderTargetMipmap(k)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),We.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],Oe.setTextureUnits(x.state.textureUnits),_e===!0&&Le.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ot(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ge.intersectsSprite(e)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let t=Me.update(e),i=e.material;i.visible&&b.push(e,t,i,n,xe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ge.intersectsObject(e))){let t=Me.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),xe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,xe.z,o)}}else i.visible&&b.push(e,t,i,n,xe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ot(i[e],t,n,r)}function st(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Le.setGlobalState(T.clippingPlanes,n),r&&M.viewport(re.copy(r)),i.length>0&&lt(i,t,n),a.length>0&&lt(a,t,n),o.length>0&&lt(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ee.has(`EXT_color_buffer_half_float`)||Ee.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new hl(1,1,{generateMipmaps:!0,type:e?Yo:Ho,minFilter:Vo,samples:Math.max(4,j.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nl.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&ze.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Le.setGlobalState(T.clippingPlanes,r),lt(e,n,r),Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a),Ee.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ut(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function lt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ut(o,t,n,s,l,c)}}function ut(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function dt(e,t,n){t.isScene!==!0&&(t=Se);let r=N.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return pt(e,s),d}else s.uniforms=Ne.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),pt(e,s),r.needsLights=_t(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ft(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=lh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function pt(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function mt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ht(e,t,n,r,i){t.isScene!==!0&&(t=Se),Oe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:nl.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ne)){let t=e===ne&&r.id===te;Le.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=dt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(M.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=mt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(A,`projectionMatrix`,e.projectionMatrix),O.setValue(A,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(A,be.setFromMatrixPosition(e.matrixWorld)),j.logarithmicDepthBuffer&&O.setValue(A,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(A,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(A,`directionalShadowMap`,y.state.directionalShadowMap,Oe),y.state.spotShadowMap.length>0&&O.setValue(A,`spotShadowMap`,y.state.spotShadowMap,Oe),y.state.pointShadowMap.length>0&&O.setValue(A,`pointShadowMap`,y.state.pointShadowMap,Oe)),i.isSkinnedMesh){O.setOptional(A,i,`bindMatrix`),O.setOptional(A,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(A,`boneTexture`,e.boneTexture,Oe))}i.isBatchedMesh&&(O.setOptional(A,i,`batchingTexture`),O.setValue(A,`batchingTexture`,i._matricesTexture,Oe),O.setOptional(A,i,`batchingIdTexture`),O.setValue(A,`batchingIdTexture`,i._indirectTexture,Oe),O.setOptional(A,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(A,`batchingColorTexture`,i._colorsTexture,Oe));let re=n.morphAttributes;if((re.position!==void 0||re.normal!==void 0||re.color!==void 0)&&Be.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(A,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Ag()),w){if(O.setValue(A,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&gt(ee,E),a&&r.fog===!0&&Pe.refreshFogUniforms(ee,a),Pe.refreshMaterialUniforms(ee,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}lh.upload(A,ft(v),ee,Oe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(lh.upload(A,ft(v),ee,Oe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(A,`center`,i.center),O.setValue(A,`modelViewMatrix`,i.modelViewMatrix),O.setValue(A,`normalMatrix`,i.normalMatrix),O.setValue(A,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ge.update(n,S),Ge.bind(n,S)}}return S}function gt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function _t(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let vt=A.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){k=e,O=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(A.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,M.viewport(re),M.scissor(ie),M.setScissorTest(ae),te=-1;return}else if(o.__webglFramebuffer===void 0)Oe.setupRenderTarget(e);else if(o.__hasExternalTextures)Oe.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Oe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Oe.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(pe).multiplyScalar(ue).floor(),ie.copy(me).multiplyScalar(ue).floor(),ae=he;if(n!==0&&(r=vt),M.bindFramebuffer(A.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(re),M.scissor(ie),M.setScissorTest(ae),i){let r=N.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,t.__webglTexture,n)}te=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(A.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s),!j.textureFormatReadable(c)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!j.textureTypeReadable(l)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&A.readPixels(t,n,r,i,Ue.convert(c),Ue.convert(l),a)}finally{let e=k===null?null:N.get(k).__webglFramebuffer;M.bindFramebuffer(A.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(A.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s),!j.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!j.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,d),A.bufferData(A.PIXEL_PACK_BUFFER,a.byteLength,A.STREAM_READ),A.readPixels(t,n,r,i,Ue.convert(l),Ue.convert(u),0);let f=k===null?null:N.get(k).__webglFramebuffer;M.bindFramebuffer(A.FRAMEBUFFER,f);let p=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await _c(A,p,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,d),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,a),A.deleteBuffer(d),A.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Oe.setTexture2D(e,0),A.copyTexSubImage2D(A.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()};let yt=A.createFramebuffer(),bt=A.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ue.convert(t.format),_=Ue.convert(t.type),v;t.isData3DTexture?(Oe.setTexture3D(t,0),v=A.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Oe.setTexture2DArray(t,0),v=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(t,0),v=A.TEXTURE_2D),M.activeTexture(A.TEXTURE0),M.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(A.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(A.UNPACK_ROW_LENGTH),b=M.getParameter(A.UNPACK_IMAGE_HEIGHT),x=M.getParameter(A.UNPACK_SKIP_PIXELS),S=M.getParameter(A.UNPACK_SKIP_ROWS),C=M.getParameter(A.UNPACK_SKIP_IMAGES);M.pixelStorei(A.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(A.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(A.UNPACK_SKIP_PIXELS,l),M.pixelStorei(A.UNPACK_SKIP_ROWS,u),M.pixelStorei(A.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(A.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),A.blitFramebuffer(l,u,o,s,f,p,o,s,A.DEPTH_BUFFER_BIT,A.NEAREST);M.bindFramebuffer(A.READ_FRAMEBUFFER,null),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(A.READ_FRAMEBUFFER,yt),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,bt);for(let e=0;e<c;e++)w?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,n.__webglTexture,i),T?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,r.__webglTexture,a),i===0?T?A.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):A.copyTexSubImage2D(v,a,f,p,l,u,o,s):A.blitFramebuffer(l,u,o,s,f,p,o,s,A.COLOR_BUFFER_BIT,A.NEAREST);M.bindFramebuffer(A.READ_FRAMEBUFFER,null),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?A.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(A.UNPACK_ROW_LENGTH,y),M.pixelStorei(A.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(A.UNPACK_SKIP_PIXELS,x),M.pixelStorei(A.UNPACK_SKIP_ROWS,S),M.pixelStorei(A.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&A.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&Oe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Oe.setTextureCube(e,0):e.isData3DTexture?Oe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Oe.setTexture2DArray(e,0):Oe.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){O=0,ee=0,k=null,M.reset(),We.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return sc}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nl._getDrawingBufferColorSpace(e),t.unpackColorSpace=nl._getUnpackColorSpace()}},Mg={type:`change`},Ng={type:`start`},Pg={type:`end`},Fg=new ad,Ig=new Td,Lg=Math.cos(70*Kc.DEG2RAD),Rg=new I,zg=2*Math.PI,Bg={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vg=1e-6,Hg=class extends fp{constructor(e,t=null){super(e,t),this.state=Bg.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:jo.ROTATE,MIDDLE:jo.DOLLY,RIGHT:jo.PAN},this.touches={ONE:Mo.ROTATE,TWO:Mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Jc,this._lastTargetPosition=new I,this._quat=new Jc().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lp,this._sphericalDelta=new lp,this._scale=1,this._panOffset=new I,this._rotateStart=new qc,this._rotateEnd=new qc,this._rotateDelta=new qc,this._panStart=new qc,this._panEnd=new qc,this._panDelta=new qc,this._dollyStart=new qc,this._dollyEnd=new qc,this._dollyDelta=new qc,this._dollyDirection=new I,this._mouse=new qc,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wg.bind(this),this._onPointerDown=Ug.bind(this),this._onPointerUp=Gg.bind(this),this._onContextMenu=Qg.bind(this),this._onMouseWheel=Jg.bind(this),this._onKeyDown=Yg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=Zg.bind(this),this._onMouseDown=Kg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=$g.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mg),this.update(),this.state=Bg.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Rg.copy(t).sub(this.target),Rg.applyQuaternion(this._quat),this._spherical.setFromVector3(Rg),this.autoRotate&&this.state===Bg.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=zg:n>Math.PI&&(n-=zg),r<-Math.PI?r+=zg:r>Math.PI&&(r-=zg),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Rg.setFromSpherical(this._spherical),Rg.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rg),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Rg.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new I(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new I(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Rg.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Fg.origin.copy(this.object.position),Fg.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fg.direction))<Lg?this.object.lookAt(this.target):(Ig.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fg.intersectPlane(Ig,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Vg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vg||this._lastTargetPosition.distanceToSquared(this.target)>Vg?(this.dispatchEvent(Mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?zg/60/60*this.autoRotateSpeed:zg/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rg.setFromMatrixColumn(t,0),Rg.multiplyScalar(-e),this._panOffset.add(Rg)}_panUp(e,t){this.screenSpacePanning===!0?Rg.setFromMatrixColumn(t,1):(Rg.setFromMatrixColumn(t,0),Rg.crossVectors(this.object.up,Rg)),Rg.multiplyScalar(e),this._panOffset.add(Rg)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Rg.copy(r).sub(this.target);let i=Rg.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zg*this._rotateDelta.x/t.clientHeight),this._rotateUp(zg*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zg*this._rotateDelta.x/t.clientHeight),this._rotateUp(zg*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qc,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ug(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Wg(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Gg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Pg),this.state=Bg.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Kg(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Bg.DOLLY;break;case jo.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Bg.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Bg.ROTATE}break;case jo.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Bg.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Bg.PAN}break;default:this.state=Bg.NONE}this.state!==Bg.NONE&&this.dispatchEvent(Ng)}function qg(e){switch(this.state){case Bg.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Bg.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Bg.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Jg(e){this.enabled===!1||this.enableZoom===!1||this.state!==Bg.NONE||(e.preventDefault(),this.dispatchEvent(Ng),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Pg))}function Yg(e){this.enabled!==!1&&this._handleKeyDown(e)}function Xg(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Mo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Bg.TOUCH_ROTATE;break;case Mo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Bg.TOUCH_PAN;break;default:this.state=Bg.NONE}break;case 2:switch(this.touches.TWO){case Mo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Bg.TOUCH_DOLLY_PAN;break;case Mo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Bg.TOUCH_DOLLY_ROTATE;break;default:this.state=Bg.NONE}break;default:this.state=Bg.NONE}this.state!==Bg.NONE&&this.dispatchEvent(Ng)}function Zg(e){switch(this._trackPointer(e),this.state){case Bg.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Bg.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Bg.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Bg.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Bg.NONE}}function Qg(e){this.enabled!==!1&&e.preventDefault()}function $g(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function e_(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var R=class e extends Error{constructor(t,n){var r=`KaTeX parse error: `+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var s=o.lexer.input;i=o.start,a=o.end,i===s.length?r+=` at end of input: `:r+=` at position `+(i+1)+`: `;var c=s.slice(i,a).replace(/[^]/g,`$&̲`),l=i>15?`…`+s.slice(i-15,i):s.slice(0,i),u=a+15<s.length?s.slice(a,a+15)+`…`:s.slice(a);r+=l+c+u}super(r),this.name=`ParseError`,Object.setPrototypeOf(this,e.prototype),this.position=i,i!=null&&a!=null&&(this.length=a-i),this.rawMessage=t}},t_=/([A-Z])/g,n_=e=>e.replace(t_,`-$1`).toLowerCase(),r_={"&":`&amp;`,">":`&gt;`,"<":`&lt;`,'"':`&quot;`,"'":`&#x27;`},i_=/[&><"']/g,a_=e=>String(e).replace(i_,e=>r_[e]),o_=e=>e.type===`ordgroup`||e.type===`color`?e.body.length===1?o_(e.body[0]):e:e.type===`font`?o_(e.body):e,s_=new Set([`mathord`,`textord`,`atom`]),c_=e=>s_.has(o_(e).type),l_=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==`:`||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():`_relative`},u_={displayMode:{type:`boolean`,description:`Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,cli:`-d, --display-mode`},output:{type:{enum:[`htmlAndMathml`,`html`,`mathml`]},description:`Determines the markup language of the output.`,cli:`-F, --format <type>`},leqno:{type:`boolean`,description:`Render display math in leqno style (left-justified tags).`},fleqn:{type:`boolean`,description:`Render display math flush left.`},throwOnError:{type:`boolean`,default:!0,cli:`-t, --no-throw-on-error`,cliDescription:`Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`},errorColor:{type:`string`,default:`#cc0000`,cli:`-c, --error-color <color>`,cliDescription:`A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,cliProcessor:e=>`#`+e},macros:{type:`object`,cli:`-m, --macro <def>`,cliDescription:`Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:`number`,description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:`--min-rule-thickness <size>`,cliProcessor:parseFloat},colorIsTextColor:{type:`boolean`,description:`Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,cli:`-b, --color-is-text-color`},strict:{type:[{enum:[`warn`,`ignore`,`error`]},`boolean`,`function`],description:`Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,cli:`-S, --strict`,cliDefault:!1},trust:{type:[`boolean`,`function`],description:`Trust the input, enabling all HTML features such as \\url.`,cli:`-T, --trust`},maxSize:{type:`number`,default:1/0,description:`If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,processor:e=>Math.max(0,e),cli:`-s, --max-size <n>`,cliProcessor:parseInt},maxExpand:{type:`number`,default:1e3,description:`Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,processor:e=>Math.max(0,e),cli:`-e, --max-expand <n>`,cliProcessor:e=>e===`Infinity`?1/0:parseInt(e)},globalGroup:{type:`boolean`,cli:!1}};function d_(e){if(`default`in e)return e.default;var t=e.type,n=Array.isArray(t)?t[0]:t;if(typeof n!=`string`)return n.enum[0];switch(n){case`boolean`:return!1;case`string`:return``;case`number`:return 0;case`object`:return{}}}var f_=class{constructor(e){e===void 0&&(e={}),e||={};for(var t of Object.keys(u_)){var n=u_[t],r=e[t];this[t]=r===void 0?d_(n):n.processor?n.processor(r):r}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r==`function`&&(r=r(e,t,n)),!(!r||r===`ignore`)){if(r===!0||r===`error`)throw new R(`LaTeX-incompatible input and strict mode is set to 'error': `+(t+` [`+e+`]`),n);r===`warn`?typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)):typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r==`function`)try{r=r(e,t,n)}catch{r=`error`}return!r||r===`ignore`?!1:r===!0||r===`error`?!0:r===`warn`?(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)),!1):(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`)),!1)}isTrusted(e){if(`url`in e&&e.url&&!e.protocol){var t=l_(e.url);if(t==null)return!1;e.protocol=t}return!!(typeof this.trust==`function`?this.trust(e):this.trust)}},p_=class{constructor(e,t,n){this.id=e,this.size=t,this.cramped=n}sup(){return S_[C_[this.id]]}sub(){return S_[w_[this.id]]}fracNum(){return S_[T_[this.id]]}fracDen(){return S_[E_[this.id]]}cramp(){return S_[D_[this.id]]}text(){return S_[O_[this.id]]}isTight(){return this.size>=2}},m_=0,h_=1,g_=2,__=3,v_=4,y_=5,b_=6,x_=7,S_=[new p_(m_,0,!1),new p_(h_,0,!0),new p_(g_,1,!1),new p_(__,1,!0),new p_(v_,2,!1),new p_(y_,2,!0),new p_(b_,3,!1),new p_(x_,3,!0)],C_=[v_,y_,v_,y_,b_,x_,b_,x_],w_=[y_,y_,y_,y_,x_,x_,x_,x_],T_=[g_,__,v_,y_,b_,x_,b_,x_],E_=[__,__,y_,y_,x_,x_,x_,x_],D_=[h_,h_,__,__,y_,y_,x_,x_],O_=[m_,h_,g_,__,g_,__,g_,__],k_={DISPLAY:S_[m_],TEXT:S_[g_],SCRIPT:S_[v_],SCRIPTSCRIPT:S_[b_]},A_=[{name:`latin`,blocks:[[256,591],[768,879]]},{name:`cyrillic`,blocks:[[1024,1279]]},{name:`armenian`,blocks:[[1328,1423]]},{name:`brahmic`,blocks:[[2304,4255]]},{name:`georgian`,blocks:[[4256,4351]]},{name:`cjk`,blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:`hangul`,blocks:[[44032,55215]]}];function j_(e){for(var t=0;t<A_.length;t++)for(var n=A_[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var M_=[];A_.forEach(e=>e.blocks.forEach(e=>M_.push(...e)));function N_(e){for(var t=0;t<M_.length;t+=2)if(e>=M_[t]&&e<=M_[t+1])return!0;return!1}var P_=e=>e+` `+e,F_=80,I_=function(e,t){return`M95,`+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+` -`+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},L_=function(e,t){return`M263,`+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+` -`+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},R_=function(e,t){return`M983 `+(10+e+t)+`
l`+e/3.13+` -`+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},z_=function(e,t){return`M424,`+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+` -`+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+` `+t+`
h400000v`+(40+e)+`h-400000z`},B_=function(e,t){return`M473,`+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+` -`+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+` `+t+`h400000v`+(40+e)+`H1017.7z`},V_=function(e){var t=e/2;return`M400000 `+e+` H0 L`+t+` 0 l65 45 L145 `+(e-80)+` H400000z`},H_=function(e,t,n){var r=n-54-t-e;return`M702 `+(e+t)+`H400000`+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+`H400000v`+(40+e)+`H742z`},U_=function(e,t,n){t=1e3*t;var r=``;switch(e){case`sqrtMain`:r=I_(t,F_);break;case`sqrtSize1`:r=L_(t,F_);break;case`sqrtSize2`:r=R_(t,F_);break;case`sqrtSize3`:r=z_(t,F_);break;case`sqrtSize4`:r=B_(t,F_);break;case`sqrtTall`:r=H_(t,F_,n)}return r},W_=function(e,t){switch(e){case`⎜`:return P_(`M291 0 H417 V`+t+` H291z`);case`∣`:return P_(`M145 0 H188 V`+t+` H145z`);case`∥`:return P_(`M145 0 H188 V`+t+` H145z`)+P_(`M367 0 H410 V`+t+` H367z`);case`⎟`:return P_(`M457 0 H583 V`+t+` H457z`);case`⎢`:return P_(`M319 0 H403 V`+t+` H319z`);case`⎥`:return P_(`M263 0 H347 V`+t+` H263z`);case`⎪`:return P_(`M384 0 H504 V`+t+` H384z`);case`⏐`:return P_(`M312 0 H355 V`+t+` H312z`);case`‖`:return P_(`M257 0 H300 V`+t+` H257z`)+P_(`M478 0 H521 V`+t+` H478z`);default:return``}},G_={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:P_(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`),leftbracketunder:P_(`M0 0 h120 V290 H399995 v120 H0z`),leftbracketover:P_(`M0 440 h120 V150 H399995 v-120 H0z`),leftmapsto:P_(`M40 281 V448H0V74H40V241H400000v40z`),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:P_(`M0 50 h400000 v40H0z m0 194h40000v40H0z`),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:P_(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`),rightbracketunder:P_(`M399995 0 h-120 V290 H0 v120 H400000z`),rightbracketover:P_(`M399995 440 h-120 V150 H0 v-120 H399995z`),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},K_=function(e,t){switch(e){case`lbrack`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+` v1759 h84z`;case`rbrack`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+` v1759 h84z`;case`vert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z`;case`doublevert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+` v585 h43z`;case`lfloor`:return`M319 602 V0 H403 V602 v`+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`rfloor`:return`M319 602 V0 H403 V602 v`+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`lceil`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+` v602 h84z`;case`rceil`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+` v602 h84z`;case`lparen`:return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case`rparen`:return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw Error(`Unknown stretchy delimiter.`)}},q_=class{constructor(e){this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e=``,t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>e.toText()).join(``)}},J_={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Y_={ex:!0,em:!0,mu:!0},X_=function(e){return typeof e!=`string`&&(e=e.unit),e in J_||e in Y_||e===`ex`},Z_=function(e,t){var n;if(e.unit in J_)n=J_[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit===`mu`)n=t.fontMetrics().cssEmPerMu;else{var r=t.style.isTight()?t.havingStyle(t.style.text()):t;if(e.unit===`ex`)n=r.fontMetrics().xHeight;else if(e.unit===`em`)n=r.fontMetrics().quad;else throw new R(`Invalid unit: '`+e.unit+`'`);r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},z=function(e){return+e.toFixed(4)+`em`},Q_=function(e){return e.filter(e=>e).join(` `)},$_=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push(`mtight`);var r=t.getColor();r&&(this.style.color=r)}},ev=function(e){var t=document.createElement(e);t.className=Q_(this.classes);for(var n of Object.keys(this.style))t.style[n]=this.style[n];for(var r of Object.keys(this.attributes))t.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t},tv=/[\s"'>/=\x00-\x1f]/,nv=function(e){var t=`<`+e;this.classes.length&&(t+=` class="`+a_(Q_(this.classes))+`"`);var n=``;for(var r of Object.keys(this.style))n+=n_(r)+`:`+this.style[r]+`;`;n&&(t+=` style="`+a_(n)+`"`);for(var i of Object.keys(this.attributes)){if(tv.test(i))throw new R(`Invalid attribute name '`+i+`'`);t+=` `+i+`="`+a_(this.attributes[i])+`"`}t+=`>`;for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+=`</`+e+`>`,t},rv=class{constructor(e,t,n,r){$_.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return ev.call(this,`span`)}toMarkup(){return nv.call(this,`span`)}},iv=class{constructor(e,t,n,r){$_.call(this,t,r),this.children=n||[],this.setAttribute(`href`,e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return ev.call(this,`a`)}toMarkup(){return nv.call(this,`a`)}},av=class{constructor(e,t,n){this.alt=t,this.src=e,this.classes=[`mord`],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement(`img`);e.src=this.src,e.alt=this.alt,e.className=`mord`;for(var t of Object.keys(this.style))e.style[t]=this.style[t];return e}toMarkup(){var e=`<img src="`+a_(this.src)+`"`+(` alt="`+a_(this.alt)+`"`),t=``;for(var n of Object.keys(this.style))t+=n_(n)+`:`+this.style[n]+`;`;return t&&(e+=` style="`+a_(t)+`"`),e+=`'/>`,e}},ov={î:`ı̂`,ï:`ı̈`,í:`ı́`,ì:`ı̀`},sv=class{constructor(e,t,n,r,i,a,o,s){this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=a||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var c=j_(this.text.charCodeAt(0));c&&this.classes.push(c+`_fallback`),/[îïíì]/.test(this.text)&&(this.text=ov[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement(`span`),t.style.marginRight=z(this.italic)),this.classes.length>0&&(t||=document.createElement(`span`),t.className=Q_(this.classes));for(var n of Object.keys(this.style))t||=document.createElement(`span`),t.style[n]=this.style[n];return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t=`<span`;this.classes.length&&(e=!0,t+=` class="`,t+=a_(Q_(this.classes)),t+=`"`);var n=``;this.italic>0&&(n+=`margin-right:`+z(this.italic)+`;`);for(var r of Object.keys(this.style))n+=n_(r)+`:`+this.style[r]+`;`;n&&(e=!0,t+=` style="`+a_(n)+`"`);var i=a_(this.text);return e?(t+=`>`,t+=i,t+=`</span>`,t):i}},cv=class{constructor(e,t){this.children=e||[],this.attributes=t||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<svg xmlns="http://www.w3.org/2000/svg"`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+a_(this.attributes[t])+`"`;e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</svg>`,e}},lv=class{constructor(e,t){this.pathName=e,this.alternate=t}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return this.alternate?e.setAttribute(`d`,this.alternate):e.setAttribute(`d`,G_[this.pathName]),e}toMarkup(){return this.alternate?`<path d="`+a_(this.alternate)+`"/>`:`<path d="`+a_(G_[this.pathName])+`"/>`}},uv=class{constructor(e){this.attributes=e||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);return e}toMarkup(){var e=`<line`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+a_(this.attributes[t])+`"`;return e+=`/>`,e}};function dv(e){if(e instanceof sv)return e;throw Error(`Expected symbolNode but got `+String(e)+`.`)}function fv(e){if(e instanceof rv)return e;throw Error(`Expected span<HtmlDomNode> but got `+String(e)+`.`)}var pv=e=>e instanceof rv||e instanceof iv||e instanceof q_,mv={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},hv={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},gv={Å:`A`,Ð:`D`,Þ:`o`,å:`a`,ð:`d`,þ:`o`,А:`A`,Б:`B`,В:`B`,Г:`F`,Д:`A`,Е:`E`,Ж:`K`,З:`3`,И:`N`,Й:`N`,К:`K`,Л:`N`,М:`M`,Н:`H`,О:`O`,П:`N`,Р:`P`,С:`C`,Т:`T`,У:`y`,Ф:`O`,Х:`X`,Ц:`U`,Ч:`h`,Ш:`W`,Щ:`W`,Ъ:`B`,Ы:`X`,Ь:`B`,Э:`3`,Ю:`X`,Я:`R`,а:`a`,б:`b`,в:`a`,г:`r`,д:`y`,е:`e`,ж:`m`,з:`e`,и:`n`,й:`n`,к:`n`,л:`n`,м:`m`,н:`n`,о:`o`,п:`n`,р:`p`,с:`c`,т:`o`,у:`y`,ф:`b`,х:`x`,ц:`n`,ч:`n`,ш:`w`,щ:`w`,ъ:`a`,ы:`m`,ь:`a`,э:`e`,ю:`m`,я:`r`};function _v(e,t){mv[e]=t}function vv(e,t,n){if(!mv[t])throw Error(`Font metrics not found for font: `+t+`.`);var r=e.charCodeAt(0),i=mv[t][r];if(!i&&e[0]in gv&&(r=gv[e[0]].charCodeAt(0),i=mv[t][r]),!i&&n===`text`&&N_(r)&&(i=mv[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var yv={};function bv(e){var t=e>=5?0:e>=3?1:2;if(!yv[t]){var n=yv[t]={cssEmPerMu:hv.quad[t]/18};for(var r in hv)hv.hasOwnProperty(r)&&(n[r]=hv[r][t])}return yv[t]}var xv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Sv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Cv={math:{},text:{}};function B(e,t,n,r,i,a){Cv[e][i]={font:t,group:n,replace:r},a&&r&&(Cv[e][r]=Cv[e][i])}var V=`math`,H=`text`,U=`main`,W=`ams`,wv=`accent-token`,G=`bin`,Tv=`close`,Ev=`inner`,K=`mathord`,Dv=`op-token`,Ov=`open`,kv=`punct`,q=`rel`,Av=`spacing`,J=`textord`;B(V,U,q,`≡`,`\\equiv`,!0),B(V,U,q,`≺`,`\\prec`,!0),B(V,U,q,`≻`,`\\succ`,!0),B(V,U,q,`∼`,`\\sim`,!0),B(V,U,q,`⊥`,`\\perp`),B(V,U,q,`⪯`,`\\preceq`,!0),B(V,U,q,`⪰`,`\\succeq`,!0),B(V,U,q,`≃`,`\\simeq`,!0),B(V,U,q,`∣`,`\\mid`,!0),B(V,U,q,`≪`,`\\ll`,!0),B(V,U,q,`≫`,`\\gg`,!0),B(V,U,q,`≍`,`\\asymp`,!0),B(V,U,q,`∥`,`\\parallel`),B(V,U,q,`⋈`,`\\bowtie`,!0),B(V,U,q,`⌣`,`\\smile`,!0),B(V,U,q,`⊑`,`\\sqsubseteq`,!0),B(V,U,q,`⊒`,`\\sqsupseteq`,!0),B(V,U,q,`≐`,`\\doteq`,!0),B(V,U,q,`⌢`,`\\frown`,!0),B(V,U,q,`∋`,`\\ni`,!0),B(V,U,q,`∝`,`\\propto`,!0),B(V,U,q,`⊢`,`\\vdash`,!0),B(V,U,q,`⊣`,`\\dashv`,!0),B(V,U,q,`∋`,`\\owns`),B(V,U,kv,`.`,`\\ldotp`),B(V,U,kv,`⋅`,`\\cdotp`),B(V,U,kv,`⋅`,`·`),B(H,U,J,`⋅`,`·`),B(V,U,J,`#`,`\\#`),B(H,U,J,`#`,`\\#`),B(V,U,J,`&`,`\\&`),B(H,U,J,`&`,`\\&`),B(V,U,J,`ℵ`,`\\aleph`,!0),B(V,U,J,`∀`,`\\forall`,!0),B(V,U,J,`ℏ`,`\\hbar`,!0),B(V,U,J,`∃`,`\\exists`,!0),B(V,U,J,`∇`,`\\nabla`,!0),B(V,U,J,`♭`,`\\flat`,!0),B(V,U,J,`ℓ`,`\\ell`,!0),B(V,U,J,`♮`,`\\natural`,!0),B(V,U,J,`♣`,`\\clubsuit`,!0),B(V,U,J,`℘`,`\\wp`,!0),B(V,U,J,`♯`,`\\sharp`,!0),B(V,U,J,`♢`,`\\diamondsuit`,!0),B(V,U,J,`ℜ`,`\\Re`,!0),B(V,U,J,`♡`,`\\heartsuit`,!0),B(V,U,J,`ℑ`,`\\Im`,!0),B(V,U,J,`♠`,`\\spadesuit`,!0),B(V,U,J,`§`,`\\S`,!0),B(H,U,J,`§`,`\\S`),B(V,U,J,`¶`,`\\P`,!0),B(H,U,J,`¶`,`\\P`),B(V,U,J,`†`,`\\dag`),B(H,U,J,`†`,`\\dag`),B(H,U,J,`†`,`\\textdagger`),B(V,U,J,`‡`,`\\ddag`),B(H,U,J,`‡`,`\\ddag`),B(H,U,J,`‡`,`\\textdaggerdbl`),B(V,U,Tv,`⎱`,`\\rmoustache`,!0),B(V,U,Ov,`⎰`,`\\lmoustache`,!0),B(V,U,Tv,`⟯`,`\\rgroup`,!0),B(V,U,Ov,`⟮`,`\\lgroup`,!0),B(V,U,G,`∓`,`\\mp`,!0),B(V,U,G,`⊖`,`\\ominus`,!0),B(V,U,G,`⊎`,`\\uplus`,!0),B(V,U,G,`⊓`,`\\sqcap`,!0),B(V,U,G,`∗`,`\\ast`),B(V,U,G,`⊔`,`\\sqcup`,!0),B(V,U,G,`◯`,`\\bigcirc`,!0),B(V,U,G,`∙`,`\\bullet`,!0),B(V,U,G,`‡`,`\\ddagger`),B(V,U,G,`≀`,`\\wr`,!0),B(V,U,G,`⨿`,`\\amalg`),B(V,U,G,`&`,`\\And`),B(V,U,q,`⟵`,`\\longleftarrow`,!0),B(V,U,q,`⇐`,`\\Leftarrow`,!0),B(V,U,q,`⟸`,`\\Longleftarrow`,!0),B(V,U,q,`⟶`,`\\longrightarrow`,!0),B(V,U,q,`⇒`,`\\Rightarrow`,!0),B(V,U,q,`⟹`,`\\Longrightarrow`,!0),B(V,U,q,`↔`,`\\leftrightarrow`,!0),B(V,U,q,`⟷`,`\\longleftrightarrow`,!0),B(V,U,q,`⇔`,`\\Leftrightarrow`,!0),B(V,U,q,`⟺`,`\\Longleftrightarrow`,!0),B(V,U,q,`↦`,`\\mapsto`,!0),B(V,U,q,`⟼`,`\\longmapsto`,!0),B(V,U,q,`↗`,`\\nearrow`,!0),B(V,U,q,`↩`,`\\hookleftarrow`,!0),B(V,U,q,`↪`,`\\hookrightarrow`,!0),B(V,U,q,`↘`,`\\searrow`,!0),B(V,U,q,`↼`,`\\leftharpoonup`,!0),B(V,U,q,`⇀`,`\\rightharpoonup`,!0),B(V,U,q,`↙`,`\\swarrow`,!0),B(V,U,q,`↽`,`\\leftharpoondown`,!0),B(V,U,q,`⇁`,`\\rightharpoondown`,!0),B(V,U,q,`↖`,`\\nwarrow`,!0),B(V,U,q,`⇌`,`\\rightleftharpoons`,!0),B(V,W,q,`≮`,`\\nless`,!0),B(V,W,q,``,`\\@nleqslant`),B(V,W,q,``,`\\@nleqq`),B(V,W,q,`⪇`,`\\lneq`,!0),B(V,W,q,`≨`,`\\lneqq`,!0),B(V,W,q,``,`\\@lvertneqq`),B(V,W,q,`⋦`,`\\lnsim`,!0),B(V,W,q,`⪉`,`\\lnapprox`,!0),B(V,W,q,`⊀`,`\\nprec`,!0),B(V,W,q,`⋠`,`\\npreceq`,!0),B(V,W,q,`⋨`,`\\precnsim`,!0),B(V,W,q,`⪹`,`\\precnapprox`,!0),B(V,W,q,`≁`,`\\nsim`,!0),B(V,W,q,``,`\\@nshortmid`),B(V,W,q,`∤`,`\\nmid`,!0),B(V,W,q,`⊬`,`\\nvdash`,!0),B(V,W,q,`⊭`,`\\nvDash`,!0),B(V,W,q,`⋪`,`\\ntriangleleft`),B(V,W,q,`⋬`,`\\ntrianglelefteq`,!0),B(V,W,q,`⊊`,`\\subsetneq`,!0),B(V,W,q,``,`\\@varsubsetneq`),B(V,W,q,`⫋`,`\\subsetneqq`,!0),B(V,W,q,``,`\\@varsubsetneqq`),B(V,W,q,`≯`,`\\ngtr`,!0),B(V,W,q,``,`\\@ngeqslant`),B(V,W,q,``,`\\@ngeqq`),B(V,W,q,`⪈`,`\\gneq`,!0),B(V,W,q,`≩`,`\\gneqq`,!0),B(V,W,q,``,`\\@gvertneqq`),B(V,W,q,`⋧`,`\\gnsim`,!0),B(V,W,q,`⪊`,`\\gnapprox`,!0),B(V,W,q,`⊁`,`\\nsucc`,!0),B(V,W,q,`⋡`,`\\nsucceq`,!0),B(V,W,q,`⋩`,`\\succnsim`,!0),B(V,W,q,`⪺`,`\\succnapprox`,!0),B(V,W,q,`≆`,`\\ncong`,!0),B(V,W,q,``,`\\@nshortparallel`),B(V,W,q,`∦`,`\\nparallel`,!0),B(V,W,q,`⊯`,`\\nVDash`,!0),B(V,W,q,`⋫`,`\\ntriangleright`),B(V,W,q,`⋭`,`\\ntrianglerighteq`,!0),B(V,W,q,``,`\\@nsupseteqq`),B(V,W,q,`⊋`,`\\supsetneq`,!0),B(V,W,q,``,`\\@varsupsetneq`),B(V,W,q,`⫌`,`\\supsetneqq`,!0),B(V,W,q,``,`\\@varsupsetneqq`),B(V,W,q,`⊮`,`\\nVdash`,!0),B(V,W,q,`⪵`,`\\precneqq`,!0),B(V,W,q,`⪶`,`\\succneqq`,!0),B(V,W,q,``,`\\@nsubseteqq`),B(V,W,G,`⊴`,`\\unlhd`),B(V,W,G,`⊵`,`\\unrhd`),B(V,W,q,`↚`,`\\nleftarrow`,!0),B(V,W,q,`↛`,`\\nrightarrow`,!0),B(V,W,q,`⇍`,`\\nLeftarrow`,!0),B(V,W,q,`⇏`,`\\nRightarrow`,!0),B(V,W,q,`↮`,`\\nleftrightarrow`,!0),B(V,W,q,`⇎`,`\\nLeftrightarrow`,!0),B(V,W,q,`△`,`\\vartriangle`),B(V,W,J,`ℏ`,`\\hslash`),B(V,W,J,`▽`,`\\triangledown`),B(V,W,J,`◊`,`\\lozenge`),B(V,W,J,`Ⓢ`,`\\circledS`),B(V,W,J,`®`,`\\circledR`),B(H,W,J,`®`,`\\circledR`),B(V,W,J,`∡`,`\\measuredangle`,!0),B(V,W,J,`∄`,`\\nexists`),B(V,W,J,`℧`,`\\mho`),B(V,W,J,`Ⅎ`,`\\Finv`,!0),B(V,W,J,`⅁`,`\\Game`,!0),B(V,W,J,`‵`,`\\backprime`),B(V,W,J,`▲`,`\\blacktriangle`),B(V,W,J,`▼`,`\\blacktriangledown`),B(V,W,J,`■`,`\\blacksquare`),B(V,W,J,`⧫`,`\\blacklozenge`),B(V,W,J,`★`,`\\bigstar`),B(V,W,J,`∢`,`\\sphericalangle`,!0),B(V,W,J,`∁`,`\\complement`,!0),B(V,W,J,`ð`,`\\eth`,!0),B(H,U,J,`ð`,`ð`),B(V,W,J,`╱`,`\\diagup`),B(V,W,J,`╲`,`\\diagdown`),B(V,W,J,`□`,`\\square`),B(V,W,J,`□`,`\\Box`),B(V,W,J,`◊`,`\\Diamond`),B(V,W,J,`¥`,`\\yen`,!0),B(H,W,J,`¥`,`\\yen`,!0),B(V,W,J,`✓`,`\\checkmark`,!0),B(H,W,J,`✓`,`\\checkmark`),B(V,W,J,`ℶ`,`\\beth`,!0),B(V,W,J,`ℸ`,`\\daleth`,!0),B(V,W,J,`ℷ`,`\\gimel`,!0),B(V,W,J,`ϝ`,`\\digamma`,!0),B(V,W,J,`ϰ`,`\\varkappa`),B(V,W,Ov,`┌`,`\\@ulcorner`,!0),B(V,W,Tv,`┐`,`\\@urcorner`,!0),B(V,W,Ov,`└`,`\\@llcorner`,!0),B(V,W,Tv,`┘`,`\\@lrcorner`,!0),B(V,W,q,`≦`,`\\leqq`,!0),B(V,W,q,`⩽`,`\\leqslant`,!0),B(V,W,q,`⪕`,`\\eqslantless`,!0),B(V,W,q,`≲`,`\\lesssim`,!0),B(V,W,q,`⪅`,`\\lessapprox`,!0),B(V,W,q,`≊`,`\\approxeq`,!0),B(V,W,G,`⋖`,`\\lessdot`),B(V,W,q,`⋘`,`\\lll`,!0),B(V,W,q,`≶`,`\\lessgtr`,!0),B(V,W,q,`⋚`,`\\lesseqgtr`,!0),B(V,W,q,`⪋`,`\\lesseqqgtr`,!0),B(V,W,q,`≑`,`\\doteqdot`),B(V,W,q,`≓`,`\\risingdotseq`,!0),B(V,W,q,`≒`,`\\fallingdotseq`,!0),B(V,W,q,`∽`,`\\backsim`,!0),B(V,W,q,`⋍`,`\\backsimeq`,!0),B(V,W,q,`⫅`,`\\subseteqq`,!0),B(V,W,q,`⋐`,`\\Subset`,!0),B(V,W,q,`⊏`,`\\sqsubset`,!0),B(V,W,q,`≼`,`\\preccurlyeq`,!0),B(V,W,q,`⋞`,`\\curlyeqprec`,!0),B(V,W,q,`≾`,`\\precsim`,!0),B(V,W,q,`⪷`,`\\precapprox`,!0),B(V,W,q,`⊲`,`\\vartriangleleft`),B(V,W,q,`⊴`,`\\trianglelefteq`),B(V,W,q,`⊨`,`\\vDash`,!0),B(V,W,q,`⊪`,`\\Vvdash`,!0),B(V,W,q,`⌣`,`\\smallsmile`),B(V,W,q,`⌢`,`\\smallfrown`),B(V,W,q,`≏`,`\\bumpeq`,!0),B(V,W,q,`≎`,`\\Bumpeq`,!0),B(V,W,q,`≧`,`\\geqq`,!0),B(V,W,q,`⩾`,`\\geqslant`,!0),B(V,W,q,`⪖`,`\\eqslantgtr`,!0),B(V,W,q,`≳`,`\\gtrsim`,!0),B(V,W,q,`⪆`,`\\gtrapprox`,!0),B(V,W,G,`⋗`,`\\gtrdot`),B(V,W,q,`⋙`,`\\ggg`,!0),B(V,W,q,`≷`,`\\gtrless`,!0),B(V,W,q,`⋛`,`\\gtreqless`,!0),B(V,W,q,`⪌`,`\\gtreqqless`,!0),B(V,W,q,`≖`,`\\eqcirc`,!0),B(V,W,q,`≗`,`\\circeq`,!0),B(V,W,q,`≜`,`\\triangleq`,!0),B(V,W,q,`∼`,`\\thicksim`),B(V,W,q,`≈`,`\\thickapprox`),B(V,W,q,`⫆`,`\\supseteqq`,!0),B(V,W,q,`⋑`,`\\Supset`,!0),B(V,W,q,`⊐`,`\\sqsupset`,!0),B(V,W,q,`≽`,`\\succcurlyeq`,!0),B(V,W,q,`⋟`,`\\curlyeqsucc`,!0),B(V,W,q,`≿`,`\\succsim`,!0),B(V,W,q,`⪸`,`\\succapprox`,!0),B(V,W,q,`⊳`,`\\vartriangleright`),B(V,W,q,`⊵`,`\\trianglerighteq`),B(V,W,q,`⊩`,`\\Vdash`,!0),B(V,W,q,`∣`,`\\shortmid`),B(V,W,q,`∥`,`\\shortparallel`),B(V,W,q,`≬`,`\\between`,!0),B(V,W,q,`⋔`,`\\pitchfork`,!0),B(V,W,q,`∝`,`\\varpropto`),B(V,W,q,`◀`,`\\blacktriangleleft`),B(V,W,q,`∴`,`\\therefore`,!0),B(V,W,q,`∍`,`\\backepsilon`),B(V,W,q,`▶`,`\\blacktriangleright`),B(V,W,q,`∵`,`\\because`,!0),B(V,W,q,`⋘`,`\\llless`),B(V,W,q,`⋙`,`\\gggtr`),B(V,W,G,`⊲`,`\\lhd`),B(V,W,G,`⊳`,`\\rhd`),B(V,W,q,`≂`,`\\eqsim`,!0),B(V,U,q,`⋈`,`\\Join`),B(V,W,q,`≑`,`\\Doteq`,!0),B(V,W,G,`∔`,`\\dotplus`,!0),B(V,W,G,`∖`,`\\smallsetminus`),B(V,W,G,`⋒`,`\\Cap`,!0),B(V,W,G,`⋓`,`\\Cup`,!0),B(V,W,G,`⩞`,`\\doublebarwedge`,!0),B(V,W,G,`⊟`,`\\boxminus`,!0),B(V,W,G,`⊞`,`\\boxplus`,!0),B(V,W,G,`⋇`,`\\divideontimes`,!0),B(V,W,G,`⋉`,`\\ltimes`,!0),B(V,W,G,`⋊`,`\\rtimes`,!0),B(V,W,G,`⋋`,`\\leftthreetimes`,!0),B(V,W,G,`⋌`,`\\rightthreetimes`,!0),B(V,W,G,`⋏`,`\\curlywedge`,!0),B(V,W,G,`⋎`,`\\curlyvee`,!0),B(V,W,G,`⊝`,`\\circleddash`,!0),B(V,W,G,`⊛`,`\\circledast`,!0),B(V,W,G,`⋅`,`\\centerdot`),B(V,W,G,`⊺`,`\\intercal`,!0),B(V,W,G,`⋒`,`\\doublecap`),B(V,W,G,`⋓`,`\\doublecup`),B(V,W,G,`⊠`,`\\boxtimes`,!0),B(V,W,q,`⇢`,`\\dashrightarrow`,!0),B(V,W,q,`⇠`,`\\dashleftarrow`,!0),B(V,W,q,`⇇`,`\\leftleftarrows`,!0),B(V,W,q,`⇆`,`\\leftrightarrows`,!0),B(V,W,q,`⇚`,`\\Lleftarrow`,!0),B(V,W,q,`↞`,`\\twoheadleftarrow`,!0),B(V,W,q,`↢`,`\\leftarrowtail`,!0),B(V,W,q,`↫`,`\\looparrowleft`,!0),B(V,W,q,`⇋`,`\\leftrightharpoons`,!0),B(V,W,q,`↶`,`\\curvearrowleft`,!0),B(V,W,q,`↺`,`\\circlearrowleft`,!0),B(V,W,q,`↰`,`\\Lsh`,!0),B(V,W,q,`⇈`,`\\upuparrows`,!0),B(V,W,q,`↿`,`\\upharpoonleft`,!0),B(V,W,q,`⇃`,`\\downharpoonleft`,!0),B(V,U,q,`⊶`,`\\origof`,!0),B(V,U,q,`⊷`,`\\imageof`,!0),B(V,W,q,`⊸`,`\\multimap`,!0),B(V,W,q,`↭`,`\\leftrightsquigarrow`,!0),B(V,W,q,`⇉`,`\\rightrightarrows`,!0),B(V,W,q,`⇄`,`\\rightleftarrows`,!0),B(V,W,q,`↠`,`\\twoheadrightarrow`,!0),B(V,W,q,`↣`,`\\rightarrowtail`,!0),B(V,W,q,`↬`,`\\looparrowright`,!0),B(V,W,q,`↷`,`\\curvearrowright`,!0),B(V,W,q,`↻`,`\\circlearrowright`,!0),B(V,W,q,`↱`,`\\Rsh`,!0),B(V,W,q,`⇊`,`\\downdownarrows`,!0),B(V,W,q,`↾`,`\\upharpoonright`,!0),B(V,W,q,`⇂`,`\\downharpoonright`,!0),B(V,W,q,`⇝`,`\\rightsquigarrow`,!0),B(V,W,q,`⇝`,`\\leadsto`),B(V,W,q,`⇛`,`\\Rrightarrow`,!0),B(V,W,q,`↾`,`\\restriction`),B(V,U,J,`‘`,"`"),B(V,U,J,`$`,`\\$`),B(H,U,J,`$`,`\\$`),B(H,U,J,`$`,`\\textdollar`),B(V,U,J,`%`,`\\%`),B(H,U,J,`%`,`\\%`),B(V,U,J,`_`,`\\_`),B(H,U,J,`_`,`\\_`),B(H,U,J,`_`,`\\textunderscore`),B(V,U,J,`∠`,`\\angle`,!0),B(V,U,J,`∞`,`\\infty`,!0),B(V,U,J,`′`,`\\prime`),B(V,U,J,`△`,`\\triangle`),B(V,U,J,`Γ`,`\\Gamma`,!0),B(V,U,J,`Δ`,`\\Delta`,!0),B(V,U,J,`Θ`,`\\Theta`,!0),B(V,U,J,`Λ`,`\\Lambda`,!0),B(V,U,J,`Ξ`,`\\Xi`,!0),B(V,U,J,`Π`,`\\Pi`,!0),B(V,U,J,`Σ`,`\\Sigma`,!0),B(V,U,J,`Υ`,`\\Upsilon`,!0),B(V,U,J,`Φ`,`\\Phi`,!0),B(V,U,J,`Ψ`,`\\Psi`,!0),B(V,U,J,`Ω`,`\\Omega`,!0),B(V,U,J,`A`,`Α`),B(V,U,J,`B`,`Β`),B(V,U,J,`E`,`Ε`),B(V,U,J,`Z`,`Ζ`),B(V,U,J,`H`,`Η`),B(V,U,J,`I`,`Ι`),B(V,U,J,`K`,`Κ`),B(V,U,J,`M`,`Μ`),B(V,U,J,`N`,`Ν`),B(V,U,J,`O`,`Ο`),B(V,U,J,`P`,`Ρ`),B(V,U,J,`T`,`Τ`),B(V,U,J,`X`,`Χ`),B(V,U,J,`¬`,`\\neg`,!0),B(V,U,J,`¬`,`\\lnot`),B(V,U,J,`⊤`,`\\top`),B(V,U,J,`⊥`,`\\bot`),B(V,U,J,`∅`,`\\emptyset`),B(V,W,J,`∅`,`\\varnothing`),B(V,U,K,`α`,`\\alpha`,!0),B(V,U,K,`β`,`\\beta`,!0),B(V,U,K,`γ`,`\\gamma`,!0),B(V,U,K,`δ`,`\\delta`,!0),B(V,U,K,`ϵ`,`\\epsilon`,!0),B(V,U,K,`ζ`,`\\zeta`,!0),B(V,U,K,`η`,`\\eta`,!0),B(V,U,K,`θ`,`\\theta`,!0),B(V,U,K,`ι`,`\\iota`,!0),B(V,U,K,`κ`,`\\kappa`,!0),B(V,U,K,`λ`,`\\lambda`,!0),B(V,U,K,`μ`,`\\mu`,!0),B(V,U,K,`ν`,`\\nu`,!0),B(V,U,K,`ξ`,`\\xi`,!0),B(V,U,K,`ο`,`\\omicron`,!0),B(V,U,K,`π`,`\\pi`,!0),B(V,U,K,`ρ`,`\\rho`,!0),B(V,U,K,`σ`,`\\sigma`,!0),B(V,U,K,`τ`,`\\tau`,!0),B(V,U,K,`υ`,`\\upsilon`,!0),B(V,U,K,`ϕ`,`\\phi`,!0),B(V,U,K,`χ`,`\\chi`,!0),B(V,U,K,`ψ`,`\\psi`,!0),B(V,U,K,`ω`,`\\omega`,!0),B(V,U,K,`ε`,`\\varepsilon`,!0),B(V,U,K,`ϑ`,`\\vartheta`,!0),B(V,U,K,`ϖ`,`\\varpi`,!0),B(V,U,K,`ϱ`,`\\varrho`,!0),B(V,U,K,`ς`,`\\varsigma`,!0),B(V,U,K,`φ`,`\\varphi`,!0),B(V,U,G,`∗`,`*`,!0),B(V,U,G,`+`,`+`),B(V,U,G,`−`,`-`,!0),B(V,U,G,`⋅`,`\\cdot`,!0),B(V,U,G,`∘`,`\\circ`,!0),B(V,U,G,`÷`,`\\div`,!0),B(V,U,G,`±`,`\\pm`,!0),B(V,U,G,`×`,`\\times`,!0),B(V,U,G,`∩`,`\\cap`,!0),B(V,U,G,`∪`,`\\cup`,!0),B(V,U,G,`∖`,`\\setminus`,!0),B(V,U,G,`∧`,`\\land`),B(V,U,G,`∨`,`\\lor`),B(V,U,G,`∧`,`\\wedge`,!0),B(V,U,G,`∨`,`\\vee`,!0),B(V,U,J,`√`,`\\surd`),B(V,U,Ov,`⟨`,`\\langle`,!0),B(V,U,Ov,`∣`,`\\lvert`),B(V,U,Ov,`∥`,`\\lVert`),B(V,U,Tv,`?`,`?`),B(V,U,Tv,`!`,`!`),B(V,U,Tv,`⟩`,`\\rangle`,!0),B(V,U,Tv,`∣`,`\\rvert`),B(V,U,Tv,`∥`,`\\rVert`),B(V,U,q,`=`,`=`),B(V,U,q,`:`,`:`),B(V,U,q,`≈`,`\\approx`,!0),B(V,U,q,`≅`,`\\cong`,!0),B(V,U,q,`≥`,`\\ge`),B(V,U,q,`≥`,`\\geq`,!0),B(V,U,q,`←`,`\\gets`),B(V,U,q,`>`,`\\gt`,!0),B(V,U,q,`∈`,`\\in`,!0),B(V,U,q,``,`\\@not`),B(V,U,q,`⊂`,`\\subset`,!0),B(V,U,q,`⊃`,`\\supset`,!0),B(V,U,q,`⊆`,`\\subseteq`,!0),B(V,U,q,`⊇`,`\\supseteq`,!0),B(V,W,q,`⊈`,`\\nsubseteq`,!0),B(V,W,q,`⊉`,`\\nsupseteq`,!0),B(V,U,q,`⊨`,`\\models`),B(V,U,q,`←`,`\\leftarrow`,!0),B(V,U,q,`≤`,`\\le`),B(V,U,q,`≤`,`\\leq`,!0),B(V,U,q,`<`,`\\lt`,!0),B(V,U,q,`→`,`\\rightarrow`,!0),B(V,U,q,`→`,`\\to`),B(V,W,q,`≱`,`\\ngeq`,!0),B(V,W,q,`≰`,`\\nleq`,!0),B(V,U,Av,`\xA0`,`\\ `),B(V,U,Av,`\xA0`,`\\space`),B(V,U,Av,`\xA0`,`\\nobreakspace`),B(H,U,Av,`\xA0`,`\\ `),B(H,U,Av,`\xA0`,` `),B(H,U,Av,`\xA0`,`\\space`),B(H,U,Av,`\xA0`,`\\nobreakspace`),B(V,U,Av,null,`\\nobreak`),B(V,U,Av,null,`\\allowbreak`),B(V,U,kv,`,`,`,`),B(V,U,kv,`;`,`;`),B(V,W,G,`⊼`,`\\barwedge`,!0),B(V,W,G,`⊻`,`\\veebar`,!0),B(V,U,G,`⊙`,`\\odot`,!0),B(V,U,G,`⊕`,`\\oplus`,!0),B(V,U,G,`⊗`,`\\otimes`,!0),B(V,U,J,`∂`,`\\partial`,!0),B(V,U,G,`⊘`,`\\oslash`,!0),B(V,W,G,`⊚`,`\\circledcirc`,!0),B(V,W,G,`⊡`,`\\boxdot`,!0),B(V,U,G,`△`,`\\bigtriangleup`),B(V,U,G,`▽`,`\\bigtriangledown`),B(V,U,G,`†`,`\\dagger`),B(V,U,G,`⋄`,`\\diamond`),B(V,U,G,`⋆`,`\\star`),B(V,U,G,`◃`,`\\triangleleft`),B(V,U,G,`▹`,`\\triangleright`),B(V,U,Ov,`{`,`\\{`),B(H,U,J,`{`,`\\{`),B(H,U,J,`{`,`\\textbraceleft`),B(V,U,Tv,`}`,`\\}`),B(H,U,J,`}`,`\\}`),B(H,U,J,`}`,`\\textbraceright`),B(V,U,Ov,`{`,`\\lbrace`),B(V,U,Tv,`}`,`\\rbrace`),B(V,U,Ov,`[`,`\\lbrack`,!0),B(H,U,J,`[`,`\\lbrack`,!0),B(V,U,Tv,`]`,`\\rbrack`,!0),B(H,U,J,`]`,`\\rbrack`,!0),B(V,U,Ov,`(`,`\\lparen`,!0),B(V,U,Tv,`)`,`\\rparen`,!0),B(H,U,J,`<`,`\\textless`,!0),B(H,U,J,`>`,`\\textgreater`,!0),B(V,U,Ov,`⌊`,`\\lfloor`,!0),B(V,U,Tv,`⌋`,`\\rfloor`,!0),B(V,U,Ov,`⌈`,`\\lceil`,!0),B(V,U,Tv,`⌉`,`\\rceil`,!0),B(V,U,J,`\\`,`\\backslash`),B(V,U,J,`∣`,`|`),B(V,U,J,`∣`,`\\vert`),B(H,U,J,`|`,`\\textbar`,!0),B(V,U,J,`∥`,`\\|`),B(V,U,J,`∥`,`\\Vert`),B(H,U,J,`∥`,`\\textbardbl`),B(H,U,J,`~`,`\\textasciitilde`),B(H,U,J,`\\`,`\\textbackslash`),B(H,U,J,`^`,`\\textasciicircum`),B(V,U,q,`↑`,`\\uparrow`,!0),B(V,U,q,`⇑`,`\\Uparrow`,!0),B(V,U,q,`↓`,`\\downarrow`,!0),B(V,U,q,`⇓`,`\\Downarrow`,!0),B(V,U,q,`↕`,`\\updownarrow`,!0),B(V,U,q,`⇕`,`\\Updownarrow`,!0),B(V,U,Dv,`∐`,`\\coprod`),B(V,U,Dv,`⋁`,`\\bigvee`),B(V,U,Dv,`⋀`,`\\bigwedge`),B(V,U,Dv,`⨄`,`\\biguplus`),B(V,U,Dv,`⋂`,`\\bigcap`),B(V,U,Dv,`⋃`,`\\bigcup`),B(V,U,Dv,`∫`,`\\int`),B(V,U,Dv,`∫`,`\\intop`),B(V,U,Dv,`∬`,`\\iint`),B(V,U,Dv,`∭`,`\\iiint`),B(V,U,Dv,`∏`,`\\prod`),B(V,U,Dv,`∑`,`\\sum`),B(V,U,Dv,`⨂`,`\\bigotimes`),B(V,U,Dv,`⨁`,`\\bigoplus`),B(V,U,Dv,`⨀`,`\\bigodot`),B(V,U,Dv,`∮`,`\\oint`),B(V,U,Dv,`∯`,`\\oiint`),B(V,U,Dv,`∰`,`\\oiiint`),B(V,U,Dv,`⨆`,`\\bigsqcup`),B(V,U,Dv,`∫`,`\\smallint`),B(H,U,Ev,`…`,`\\textellipsis`),B(V,U,Ev,`…`,`\\mathellipsis`),B(H,U,Ev,`…`,`\\ldots`,!0),B(V,U,Ev,`…`,`\\ldots`,!0),B(V,U,Ev,`⋯`,`\\@cdots`,!0),B(V,U,Ev,`⋱`,`\\ddots`,!0),B(V,U,J,`⋮`,`\\varvdots`),B(H,U,J,`⋮`,`\\varvdots`),B(V,U,wv,`ˊ`,`\\acute`),B(V,U,wv,`ˋ`,`\\grave`),B(V,U,wv,`¨`,`\\ddot`),B(V,U,wv,`~`,`\\tilde`),B(V,U,wv,`ˉ`,`\\bar`),B(V,U,wv,`˘`,`\\breve`),B(V,U,wv,`ˇ`,`\\check`),B(V,U,wv,`^`,`\\hat`),B(V,U,wv,`⃗`,`\\vec`),B(V,U,wv,`˙`,`\\dot`),B(V,U,wv,`˚`,`\\mathring`),B(V,U,K,``,`\\@imath`),B(V,U,K,``,`\\@jmath`),B(V,U,J,`ı`,`ı`),B(V,U,J,`ȷ`,`ȷ`),B(H,U,J,`ı`,`\\i`,!0),B(H,U,J,`ȷ`,`\\j`,!0),B(H,U,J,`ß`,`\\ss`,!0),B(H,U,J,`æ`,`\\ae`,!0),B(H,U,J,`œ`,`\\oe`,!0),B(H,U,J,`ø`,`\\o`,!0),B(H,U,J,`Æ`,`\\AE`,!0),B(H,U,J,`Œ`,`\\OE`,!0),B(H,U,J,`Ø`,`\\O`,!0),B(H,U,wv,`ˊ`,`\\'`),B(H,U,wv,`ˋ`,"\\`"),B(H,U,wv,`ˆ`,`\\^`),B(H,U,wv,`˜`,`\\~`),B(H,U,wv,`ˉ`,`\\=`),B(H,U,wv,`˘`,`\\u`),B(H,U,wv,`˙`,`\\.`),B(H,U,wv,`¸`,`\\c`),B(H,U,wv,`˚`,`\\r`),B(H,U,wv,`ˇ`,`\\v`),B(H,U,wv,`¨`,`\\"`),B(H,U,wv,`˝`,`\\H`),B(H,U,wv,`◯`,`\\textcircled`);var jv={"--":!0,"---":!0,"``":!0,"''":!0};B(H,U,J,`–`,`--`,!0),B(H,U,J,`–`,`\\textendash`),B(H,U,J,`—`,`---`,!0),B(H,U,J,`—`,`\\textemdash`),B(H,U,J,`‘`,"`",!0),B(H,U,J,`‘`,`\\textquoteleft`),B(H,U,J,`’`,`'`,!0),B(H,U,J,`’`,`\\textquoteright`),B(H,U,J,`“`,"``",!0),B(H,U,J,`“`,`\\textquotedblleft`),B(H,U,J,`”`,`''`,!0),B(H,U,J,`”`,`\\textquotedblright`),B(V,U,J,`°`,`\\degree`,!0),B(H,U,J,`°`,`\\degree`),B(H,U,J,`°`,`\\textdegree`,!0),B(V,U,J,`£`,`\\pounds`),B(V,U,J,`£`,`\\mathsterling`,!0),B(H,U,J,`£`,`\\pounds`),B(H,U,J,`£`,`\\textsterling`,!0),B(V,W,J,`✠`,`\\maltese`),B(H,W,J,`✠`,`\\maltese`);for(var Mv=`0123456789/@."`,Nv=0;Nv<Mv.length;Nv++){var Pv=Mv.charAt(Nv);B(V,U,J,Pv,Pv)}for(var Fv=`0123456789!@*()-=+";:?/.,`,Iv=0;Iv<Fv.length;Iv++){var Lv=Fv.charAt(Iv);B(H,U,J,Lv,Lv)}for(var Rv=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,zv=0;zv<Rv.length;zv++){var Bv=Rv.charAt(zv);B(V,U,K,Bv,Bv),B(H,U,J,Bv,Bv)}B(V,W,J,`C`,`ℂ`),B(H,W,J,`C`,`ℂ`),B(V,W,J,`H`,`ℍ`),B(H,W,J,`H`,`ℍ`),B(V,W,J,`N`,`ℕ`),B(H,W,J,`N`,`ℕ`),B(V,W,J,`P`,`ℙ`),B(H,W,J,`P`,`ℙ`),B(V,W,J,`Q`,`ℚ`),B(H,W,J,`Q`,`ℚ`),B(V,W,J,`R`,`ℝ`),B(H,W,J,`R`,`ℝ`),B(V,W,J,`Z`,`ℤ`),B(H,W,J,`Z`,`ℤ`),B(V,U,K,`h`,`ℎ`),B(H,U,K,`h`,`ℎ`);for(var Y=``,Vv=0;Vv<Rv.length;Vv++){var Hv=Rv.charAt(Vv);Y=String.fromCharCode(55349,56320+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56372+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56424+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56580+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56684+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56736+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56788+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56840+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56944+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Vv<26&&(Y=String.fromCharCode(55349,56632+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y),Y=String.fromCharCode(55349,56476+Vv),B(V,U,K,Hv,Y),B(H,U,J,Hv,Y))}Y=String.fromCharCode(55349,56668),B(V,U,K,`k`,Y),B(H,U,J,`k`,Y);for(var Uv=0;Uv<10;Uv++){var Wv=Uv.toString();Y=String.fromCharCode(55349,57294+Uv),B(V,U,K,Wv,Y),B(H,U,J,Wv,Y),Y=String.fromCharCode(55349,57314+Uv),B(V,U,K,Wv,Y),B(H,U,J,Wv,Y),Y=String.fromCharCode(55349,57324+Uv),B(V,U,K,Wv,Y),B(H,U,J,Wv,Y),Y=String.fromCharCode(55349,57334+Uv),B(V,U,K,Wv,Y),B(H,U,J,Wv,Y)}for(var Gv=`ÐÞþ`,Kv=0;Kv<Gv.length;Kv++){var qv=Gv.charAt(Kv);B(V,U,K,qv,qv),B(H,U,J,qv,qv)}var Jv=[[`mathbf`,`textbf`,`Main-Bold`],[`mathbf`,`textbf`,`Main-Bold`],[`mathnormal`,`textit`,`Math-Italic`],[`mathnormal`,`textit`,`Math-Italic`],[`boldsymbol`,`boldsymbol`,`Main-BoldItalic`],[`boldsymbol`,`boldsymbol`,`Main-BoldItalic`],[`mathscr`,`textscr`,`Script-Regular`],[``,``,``],[``,``,``],[``,``,``],[`mathfrak`,`textfrak`,`Fraktur-Regular`],[`mathfrak`,`textfrak`,`Fraktur-Regular`],[`mathbb`,`textbb`,`AMS-Regular`],[`mathbb`,`textbb`,`AMS-Regular`],[`mathboldfrak`,`textboldfrak`,`Fraktur-Regular`],[`mathboldfrak`,`textboldfrak`,`Fraktur-Regular`],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathitsf`,`textitsf`,`SansSerif-Italic`],[`mathitsf`,`textitsf`,`SansSerif-Italic`],[``,``,``],[``,``,``],[`mathtt`,`texttt`,`Typewriter-Regular`],[`mathtt`,`texttt`,`Typewriter-Regular`]],Yv=[[`mathbf`,`textbf`,`Main-Bold`],[``,``,``],[`mathsf`,`textsf`,`SansSerif-Regular`],[`mathboldsf`,`textboldsf`,`SansSerif-Bold`],[`mathtt`,`texttt`,`Typewriter-Regular`]],Xv=(e,t)=>{var n=e.charCodeAt(0),r=e.charCodeAt(1),i=(n-55296)*1024+(r-56320)+65536,a=t===`math`?0:1;if(119808<=i&&i<120484){var o=Math.floor((i-119808)/26);return[Jv[o][2],Jv[o][a]]}else if(120782<=i&&i<=120831){var s=Math.floor((i-120782)/10);return[Yv[s][2],Yv[s][a]]}else if(i===120485||i===120486)return[Jv[0][2],Jv[0][a]];else if(120486<i&&i<120782)return[``,``];else throw new R(`Unsupported character: `+e)},Zv=function(e,t,n){if(Cv[n][e]){var r=Cv[n][e].replace;r&&(e=r)}return{value:e,metrics:vv(e,t,n)}},Qv=function(e,t,n,r,i){var a=Zv(e,t,n),o=a.metrics;e=a.value;var s;if(o){var c=o.italic;(n===`text`||r&&r.font===`mathit`)&&(c=0),s=new sv(e,o.height,o.depth,c,o.skew,o.width,i)}else typeof console<`u`&&console.warn(`No character metrics `+(`for '`+e+`' in style '`+t+`' and mode '`+n+`'`)),s=new sv(e,0,0,0,0,0,i);if(r){s.maxFontSize=r.sizeMultiplier,r.style.isTight()&&s.classes.push(`mtight`);var l=r.getColor();l&&(s.style.color=l)}return s},$v=function(e,t,n,r){return r===void 0&&(r=[]),n.font===`boldsymbol`&&Zv(e,`Main-Bold`,t).metrics?Qv(e,`Main-Bold`,t,n,r.concat([`mathbf`])):e===`\\`||Cv[t][e].font===`main`?Qv(e,`Main-Regular`,t,n,r):Qv(e,`AMS-Regular`,t,n,r.concat([`amsrm`]))},ey=function(e,t,n,r,i){return i!==`textord`&&Zv(e,`Math-BoldItalic`,t).metrics?{fontName:`Math-BoldItalic`,fontClass:`boldsymbol`}:{fontName:`Main-Bold`,fontClass:`mathbf`}},ty=function(e,t,n){var r=e.mode,i=e.text,a=[`mord`],o=r===`math`||r===`text`&&t.font,s=o?t.font:t.fontFamily,c=``,l=``;if(i.charCodeAt(0)===55349&&([c,l]=Xv(i,r)),c.length>0)return Qv(i,c,r,t,a.concat(l));if(s){var u,d;if(s===`boldsymbol`){var f=ey(i,r,t,a,n);u=f.fontName,d=[f.fontClass]}else o?(u=my[s].fontName,d=[s]):(u=py(s,t.fontWeight,t.fontShape),d=[s,t.fontWeight,t.fontShape]);if(Zv(i,u,r).metrics)return Qv(i,u,r,t,a.concat(d));if(jv.hasOwnProperty(i)&&u.slice(0,10)===`Typewriter`){for(var p=[],m=0;m<i.length;m++)p.push(Qv(i[m],u,r,t,a.concat(d)));return cy(p)}}if(n===`mathord`)return Qv(i,`Math-Italic`,r,t,a.concat([`mathnormal`]));if(n===`textord`){var h=Cv[r][i]&&Cv[r][i].font;if(h===`ams`)return Qv(i,py(`amsrm`,t.fontWeight,t.fontShape),r,t,a.concat(`amsrm`,t.fontWeight,t.fontShape));if(h===`main`||!h)return Qv(i,py(`textrm`,t.fontWeight,t.fontShape),r,t,a.concat(t.fontWeight,t.fontShape));var g=py(h,t.fontWeight,t.fontShape);return Qv(i,g,r,t,a.concat(g,t.fontWeight,t.fontShape))}else throw Error(`unexpected type: `+n+` in makeOrd`)},ny=(e,t)=>{if(Q_(e.classes)!==Q_(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass(`mathnormal`))return!1;if(e.classes.length===1){var n=e.classes[0];if(n===`mbin`||n===`mord`)return!1}for(var r of Object.keys(e.style))if(e.style[r]!==t.style[r])return!1;for(var i of Object.keys(t.style))if(e.style[i]!==t.style[i])return!1;return!0},ry=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof sv&&r instanceof sv&&ny(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},iy=function(e){for(var t=0,n=0,r=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},X=function(e,t,n,r){var i=new rv(e,t,n,r);return iy(i),i},ay=(e,t,n,r)=>new rv(e,t,n,r),oy=function(e,t,n){var r=X([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=z(r.height),r.maxFontSize=1,r},sy=function(e,t,n,r){var i=new iv(e,t,n,r);return iy(i),i},cy=function(e){var t=new q_(e);return iy(t),t},ly=function(e,t){return e instanceof q_?X([],[e],t):e},uy=function(e){if(e.positionType===`individualShift`){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,a=1;a<t.length;a++){var o=-t[a].shift-i-t[a].elem.depth,s=o-(t[a-1].elem.height+t[a-1].elem.depth);i+=o,n.push({type:`kern`,size:s}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType===`top`){for(var l=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];l-=d.type===`kern`?d.size:d.elem.height+d.elem.depth}c=l}else if(e.positionType===`bottom`)c=-e.positionData;else{var f=e.children[0];if(f.type!==`elem`)throw Error(`First child must have type "elem".`);if(e.positionType===`shift`)c=-f.elem.depth-e.positionData;else if(e.positionType===`firstBaseline`)c=-f.elem.depth;else throw Error(`Invalid positionType `+e.positionType+`.`)}return{children:e.children,depth:c}},dy=function(e,t){for(var{children:n,depth:r}=uy(e),i=0,a=0;a<n.length;a++){var o=n[a];if(o.type===`elem`){var s=o.elem;i=Math.max(i,s.maxFontSize,s.height)}}i+=2;var c=X([`pstrut`],[]);c.style.height=z(i);for(var l=[],u=r,d=r,f=r,p=0;p<n.length;p++){var m=n[p];if(m.type===`kern`)f+=m.size;else{var h=m.elem,g=m.wrapperClasses||[],_=m.wrapperStyle||{},v=X(g,[c,h],void 0,_);v.style.top=z(-i-f-h.depth),m.marginLeft&&(v.style.marginLeft=m.marginLeft),m.marginRight&&(v.style.marginRight=m.marginRight),l.push(v),f+=h.height+h.depth}u=Math.min(u,f),d=Math.max(d,f)}var y=X([`vlist`],l);y.style.height=z(d);var b;if(u<0){var x=X([`vlist`],[X([],[])]);x.style.height=z(-u),b=[X([`vlist-r`],[y,X([`vlist-s`],[new sv(`​`)])]),X([`vlist-r`],[x])]}else b=[X([`vlist-r`],[y])];var S=X([`vlist-t`],b);return b.length===2&&S.classes.push(`vlist-t2`),S.height=d,S.depth=-u,S},fy=(e,t)=>{var n=X([`mspace`],[],t),r=Z_(e,t);return n.style.marginRight=z(r),n},py=function(e,t,n){var r=``;switch(e){case`amsrm`:r=`AMS`;break;case`textrm`:r=`Main`;break;case`textsf`:r=`SansSerif`;break;case`texttt`:r=`Typewriter`;break;default:r=e}var i=t===`textbf`&&n===`textit`?`BoldItalic`:t===`textbf`?`Bold`:t===`textit`?`Italic`:`Regular`;return r+`-`+i},my={mathbf:{variant:`bold`,fontName:`Main-Bold`},mathrm:{variant:`normal`,fontName:`Main-Regular`},textit:{variant:`italic`,fontName:`Main-Italic`},mathit:{variant:`italic`,fontName:`Main-Italic`},mathnormal:{variant:`italic`,fontName:`Math-Italic`},mathsfit:{variant:`sans-serif-italic`,fontName:`SansSerif-Italic`},mathbb:{variant:`double-struck`,fontName:`AMS-Regular`},mathcal:{variant:`script`,fontName:`Caligraphic-Regular`},mathfrak:{variant:`fraktur`,fontName:`Fraktur-Regular`},mathscr:{variant:`script`,fontName:`Script-Regular`},mathsf:{variant:`sans-serif`,fontName:`SansSerif-Regular`},mathtt:{variant:`monospace`,fontName:`Typewriter-Regular`}},hy={vec:[`vec`,.471,.714],oiintSize1:[`oiintSize1`,.957,.499],oiintSize2:[`oiintSize2`,1.472,.659],oiiintSize1:[`oiiintSize1`,1.304,.499],oiiintSize2:[`oiiintSize2`,1.98,.659]},gy=function(e,t){var[n,r,i]=hy[e],a=ay([`overlay`],[new cv([new lv(n)],{width:z(r),height:z(i),style:`width:`+z(r),viewBox:`0 0 `+1e3*r+` `+1e3*i,preserveAspectRatio:`xMinYMin`})],t);return a.height=i,a.style.height=z(i),a.style.width=z(r),a},_y={number:3,unit:`mu`},vy={number:4,unit:`mu`},yy={number:5,unit:`mu`},by={mord:{mop:_y,mbin:vy,mrel:yy,minner:_y},mop:{mord:_y,mop:_y,mrel:yy,minner:_y},mbin:{mord:vy,mop:vy,mopen:vy,minner:vy},mrel:{mord:yy,mop:yy,mopen:yy,minner:yy},mopen:{},mclose:{mop:_y,mbin:vy,mrel:yy,minner:_y},mpunct:{mord:_y,mop:_y,mrel:yy,mopen:_y,mclose:_y,mpunct:_y,minner:_y},minner:{mord:_y,mop:_y,mbin:vy,mrel:yy,mopen:_y,mpunct:_y,minner:_y}},xy={mord:{mop:_y},mop:{mord:_y,mop:_y},mbin:{},mrel:{},mopen:{},mclose:{mop:_y},mpunct:{},minner:{mop:_y}},Sy={},Cy={},wy={};function Z(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},c=0;c<n.length;++c)Sy[n[c]]=s;t&&(a&&(Cy[t]=a),o&&(wy[t]=o))}function Ty(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;Z({type:t,names:[],props:{numArgs:0},handler(){throw Error(`Should never be called.`)},htmlBuilder:n,mathmlBuilder:r})}var Ey=function(e){return e.type===`ordgroup`&&e.body.length===1?e.body[0]:e},Dy=function(e){return e.type===`ordgroup`?e.body:[e]},Oy=new Set([`leftmost`,`mbin`,`mopen`,`mrel`,`mop`,`mpunct`]),ky=new Set([`rightmost`,`mrel`,`mclose`,`mpunct`]),Ay={display:k_.DISPLAY,text:k_.TEXT,script:k_.SCRIPT,scriptscript:k_.SCRIPTSCRIPT},jy={mord:`mord`,mop:`mop`,mbin:`mbin`,mrel:`mrel`,mopen:`mopen`,mclose:`mclose`,mpunct:`mpunct`,minner:`minner`},My=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],a=0;a<e.length;a++){var o=Ry(e[a],t);if(o instanceof q_){var s=o.children;i.push(...s)}else i.push(o)}if(ry(i),!n)return i;var c=t;if(e.length===1){var l=e[0];l.type===`sizing`?c=t.havingSize(l.size):l.type===`styling`&&(c=t.havingStyle(Ay[l.style]))}var u=X([r[0]||`leftmost`],[],t),d=X([r[1]||`rightmost`],[],t),f=n===`root`;return Ny(i,(e,t)=>{var n=t.classes[0],r=e.classes[0];n===`mbin`&&ky.has(r)?t.classes[0]=`mord`:r===`mbin`&&Oy.has(n)&&(e.classes[0]=`mord`)},{node:u},d,f),Ny(i,(e,t)=>{var n=Iy(t),r=Iy(e),i=n&&r?e.hasClass(`mtight`)?xy[n]?.[r]:by[n]?.[r]:null;if(i)return fy(i,c)},{node:u},d,f),i},Ny=function(e,t,n,r,i){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],s=Py(o);if(s){Ny(s.children,t,n,null,i);continue}var c=!o.hasClass(`mspace`);if(c){var l=t(o,n.node);l&&(n.insertAfter?n.insertAfter(l):(e.unshift(l),a++))}c?n.node=o:i&&o.hasClass(`newline`)&&(n.node=X([`leftmost`])),n.insertAfter=(t=>n=>{e.splice(t+1,0,n),a++})(a)}r&&e.pop()},Py=function(e){return e instanceof q_||e instanceof iv||e instanceof rv&&e.hasClass(`enclosing`)?e:null},Fy=function(e,t){var n=Py(e);if(n){var r=n.children;if(r.length){if(t===`right`)return Fy(r[r.length-1],`right`);if(t===`left`)return Fy(r[0],`left`)}}return e},Iy=function(e,t){return e?(t&&(e=Fy(e,t)),jy[e.classes[0]]||null):null},Ly=function(e,t){var n=[`nulldelimiter`].concat(e.baseSizingClasses());return X(t.concat(n))},Ry=function(e,t,n){if(!e)return X();if(Cy[e.type]){var r=Cy[e.type](e,t);if(n&&t.size!==n.size){r=X(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new R(`Got group of unknown type: '`+e.type+`'`)};function zy(e,t){var n=X([`base`],e,t),r=X([`strut`]);return r.style.height=z(n.height+n.depth),n.depth&&(r.style.verticalAlign=z(-n.depth)),n.children.unshift(r),n}function By(e,t){var n=null;e.length===1&&e[0].type===`tag`&&(n=e[0].tag,e=e[0].body);var r=My(e,t,`root`),i;r.length===2&&r[1].hasClass(`tag`)&&(i=r.pop());for(var a=[],o=[],s=0;s<r.length;s++)if(o.push(r[s]),r[s].hasClass(`mbin`)||r[s].hasClass(`mrel`)||r[s].hasClass(`allowbreak`)){for(var c=!1;s<r.length-1&&r[s+1].hasClass(`mspace`)&&!r[s+1].hasClass(`newline`);)s++,o.push(r[s]),r[s].hasClass(`nobreak`)&&(c=!0);c||(a.push(zy(o,t)),o=[])}else r[s].hasClass(`newline`)&&(o.pop(),o.length>0&&(a.push(zy(o,t)),o=[]),a.push(r[s]));o.length>0&&a.push(zy(o,t));var l;n?(l=zy(My(n,t,!0),t),l.classes=[`tag`],a.push(l)):i&&a.push(i);var u=X([`katex-html`],a);if(u.setAttribute(`aria-hidden`,`true`),l){var d=l.children[0];d.style.height=z(u.height+u.depth),u.depth&&(d.style.verticalAlign=z(-u.depth))}return u}function Vy(e){return new q_(e)}var Q=class{constructor(e,t,n){this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Q_(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Hy&&this.children[n+1]instanceof Hy){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Hy;)r+=this.children[++n].toText();e.appendChild(new Hy(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<`+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`,e+=a_(this.attributes[t]),e+=`"`);this.classes.length>0&&(e+=` class ="`+a_(Q_(this.classes))+`"`),e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</`+this.type+`>`,e}toText(){return this.children.map(e=>e.toText()).join(``)}},Hy=class{constructor(e){this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return a_(this.toText())}toText(){return this.text}},Uy=class{constructor(e){this.width=e,e>=.05555&&e<=.05556?this.character=` `:e>=.1666&&e<=.1667?this.character=` `:e>=.2222&&e<=.2223?this.character=` `:e>=.2777&&e<=.2778?this.character=`  `:e>=-.05556&&e<=-.05555?this.character=` ⁣`:e>=-.1667&&e<=-.1666?this.character=` ⁣`:e>=-.2223&&e<=-.2222?this.character=` ⁣`:e>=-.2778&&e<=-.2777?this.character=` ⁣`:this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`mspace`);return e.setAttribute(`width`,z(this.width)),e}toMarkup(){return this.character?`<mtext>`+this.character+`</mtext>`:`<mspace width="`+z(this.width)+`"/>`}toText(){return this.character?this.character:` `}},Wy=new Set([`\\imath`,`\\jmath`]),Gy=new Set([`mrow`,`mtable`]),Ky=function(e,t,n){return Cv[t][e]&&Cv[t][e].replace&&e.charCodeAt(0)!==55349&&!(jv.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)===`tt`||n.font&&n.font.slice(4,6)===`tt`))&&(e=Cv[t][e].replace),new Hy(e)},qy=function(e){return e.length===1?e[0]:new Q(`mrow`,e)},Jy=function(e,t){if(t.fontFamily===`texttt`)return`monospace`;if(t.fontFamily===`textsf`)return t.fontShape===`textit`&&t.fontWeight===`textbf`?`sans-serif-bold-italic`:t.fontShape===`textit`?`sans-serif-italic`:t.fontWeight===`textbf`?`bold-sans-serif`:`sans-serif`;if(t.fontShape===`textit`&&t.fontWeight===`textbf`)return`bold-italic`;if(t.fontShape===`textit`)return`italic`;if(t.fontWeight===`textbf`)return`bold`;var n=t.font;if(!n||n===`mathnormal`)return null;var r=e.mode;if(n===`mathit`)return`italic`;if(n===`boldsymbol`)return e.type===`textord`?`bold`:`bold-italic`;if(n===`mathbf`)return`bold`;if(n===`mathbb`)return`double-struck`;if(n===`mathsfit`)return`sans-serif-italic`;if(n===`mathfrak`)return`fraktur`;if(n===`mathscr`||n===`mathcal`)return`script`;if(n===`mathsf`)return`sans-serif`;if(n===`mathtt`)return`monospace`;var i=e.text;if(Wy.has(i))return null;if(Cv[r][i]){var a=Cv[r][i].replace;a&&(i=a)}var o=my[n].fontName;return vv(i,o,r)?my[n].variant:null};function Yy(e){if(!e)return!1;if(e.type===`mi`&&e.children.length===1){var t=e.children[0];return t instanceof Hy&&t.text===`.`}else if(e.type===`mo`&&e.children.length===1&&e.getAttribute(`separator`)===`true`&&e.getAttribute(`lspace`)===`0em`&&e.getAttribute(`rspace`)===`0em`){var n=e.children[0];return n instanceof Hy&&n.text===`,`}else return!1}var Xy=function(e,t,n){if(e.length===1){var r=Qy(e[0],t);return n&&r instanceof Q&&r.type===`mo`&&(r.setAttribute(`lspace`,`0em`),r.setAttribute(`rspace`,`0em`)),[r]}for(var i=[],a,o=0;o<e.length;o++){var s=Qy(e[o],t);if(s instanceof Q&&a instanceof Q){if(s.type===`mtext`&&a.type===`mtext`&&s.getAttribute(`mathvariant`)===a.getAttribute(`mathvariant`)){a.children.push(...s.children);continue}else if(s.type===`mn`&&a.type===`mn`){a.children.push(...s.children);continue}else if(Yy(s)&&a.type===`mn`){a.children.push(...s.children);continue}else if(s.type===`mn`&&Yy(a))s.children=[...a.children,...s.children],i.pop();else if((s.type===`msup`||s.type===`msub`)&&s.children.length>=1&&(a.type===`mn`||Yy(a))){var c=s.children[0];c instanceof Q&&c.type===`mn`&&(c.children=[...a.children,...c.children],i.pop())}else if(a.type===`mi`&&a.children.length===1){var l=a.children[0];if(l instanceof Hy&&l.text===`̸`&&(s.type===`mo`||s.type===`mi`||s.type===`mn`)){var u=s.children[0];u instanceof Hy&&u.text.length>0&&(u.text=u.text.slice(0,1)+`̸`+u.text.slice(1),i.pop())}}}i.push(s),a=s}return i},Zy=function(e,t,n){return qy(Xy(e,t,n))},Qy=function(e,t){if(!e)return new Q(`mrow`);if(wy[e.type])return wy[e.type](e,t);throw new R(`Got group of unknown type: '`+e.type+`'`)};function $y(e,t,n,r,i){var a=Xy(e,n),o=a.length===1&&a[0]instanceof Q&&Gy.has(a[0].type)?a[0]:new Q(`mrow`,a),s=new Q(`annotation`,[new Hy(t)]);s.setAttribute(`encoding`,`application/x-tex`);var c=new Q(`math`,[new Q(`semantics`,[o,s])]);return c.setAttribute(`xmlns`,`http://www.w3.org/1998/Math/MathML`),r&&c.setAttribute(`display`,`block`),X([i?`katex`:`katex-mathml`],[c])}var eb=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],tb=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],nb=function(e,t){return t.size<2?e:eb[e-1][t.size-1]},rb=class e{constructor(t){this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||``,this.fontFamily=t.fontFamily||``,this.fontWeight=t.fontWeight||``,this.fontShape=t.fontShape||``,this.sizeMultiplier=tb[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(n,t),new e(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:nb(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:tb[e-1]})}havingBaseStyle(t){t||=this.style.text();var n=nb(e.BASESIZE,t);return this.size===n&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:``})}withTextFontWeight(e){return this.extend({fontWeight:e,font:``})}withTextFontShape(e){return this.extend({fontShape:e,font:``})}sizingClasses(e){return e.size===this.size?[]:[`sizing`,`reset-size`+e.size,`size`+this.size]}baseSizingClasses(){return this.size===e.BASESIZE?[]:[`sizing`,`reset-size`+this.size,`size`+e.BASESIZE]}fontMetrics(){return this._fontMetrics||=bv(this.size),this._fontMetrics}getColor(){return this.phantom?`transparent`:this.color}};rb.BASESIZE=6;var ib=function(e){return new rb({style:e.displayMode?k_.DISPLAY:k_.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},ab=function(e,t){if(t.displayMode){var n=[`katex-display`];t.leqno&&n.push(`leqno`),t.fleqn&&n.push(`fleqn`),e=X(n,[e])}return e},ob=function(e,t,n){var r=ib(n),i;return n.output===`mathml`?$y(e,t,r,n.displayMode,!0):(i=n.output===`html`?X([`katex`],[By(e,r)]):X([`katex`],[$y(e,t,r,n.displayMode,!1),By(e,r)]),ab(i,n))},sb=function(e,t,n){return ab(X([`katex`],[By(e,ib(n))]),n)},cb={widehat:`^`,widecheck:`ˇ`,widetilde:`~`,utilde:`~`,overleftarrow:`←`,underleftarrow:`←`,xleftarrow:`←`,overrightarrow:`→`,underrightarrow:`→`,xrightarrow:`→`,underbrace:`⏟`,overbrace:`⏞`,underbracket:`⎵`,overbracket:`⎴`,overgroup:`⏠`,undergroup:`⏡`,overleftrightarrow:`↔`,underleftrightarrow:`↔`,xleftrightarrow:`↔`,Overrightarrow:`⇒`,xRightarrow:`⇒`,overleftharpoon:`↼`,xleftharpoonup:`↼`,overrightharpoon:`⇀`,xrightharpoonup:`⇀`,xLeftarrow:`⇐`,xLeftrightarrow:`⇔`,xhookleftarrow:`↩`,xhookrightarrow:`↪`,xmapsto:`↦`,xrightharpoondown:`⇁`,xleftharpoondown:`↽`,xrightleftharpoons:`⇌`,xleftrightharpoons:`⇋`,xtwoheadleftarrow:`↞`,xtwoheadrightarrow:`↠`,xlongequal:`=`,xtofrom:`⇄`,xrightleftarrows:`⇄`,xrightequilibrium:`⇌`,xleftequilibrium:`⇋`,"\\cdrightarrow":`→`,"\\cdleftarrow":`←`,"\\cdlongequal":`=`},lb=function(e){var t=new Q(`mo`,[new Hy(cb[e.replace(/^\\/,``)])]);return t.setAttribute(`stretchy`,`true`),t},ub={overrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],overleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],underrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],underleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],xrightarrow:[[`rightarrow`],1.469,522,`xMaxYMin`],"\\cdrightarrow":[[`rightarrow`],3,522,`xMaxYMin`],xleftarrow:[[`leftarrow`],1.469,522,`xMinYMin`],"\\cdleftarrow":[[`leftarrow`],3,522,`xMinYMin`],Overrightarrow:[[`doublerightarrow`],.888,560,`xMaxYMin`],xRightarrow:[[`doublerightarrow`],1.526,560,`xMaxYMin`],xLeftarrow:[[`doubleleftarrow`],1.526,560,`xMinYMin`],overleftharpoon:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoonup:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoondown:[[`leftharpoondown`],.888,522,`xMinYMin`],overrightharpoon:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoonup:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoondown:[[`rightharpoondown`],.888,522,`xMaxYMin`],xlongequal:[[`longequal`],.888,334,`xMinYMin`],"\\cdlongequal":[[`longequal`],3,334,`xMinYMin`],xtwoheadleftarrow:[[`twoheadleftarrow`],.888,334,`xMinYMin`],xtwoheadrightarrow:[[`twoheadrightarrow`],.888,334,`xMaxYMin`],overleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],overbrace:[[`leftbrace`,`midbrace`,`rightbrace`],1.6,548],underbrace:[[`leftbraceunder`,`midbraceunder`,`rightbraceunder`],1.6,548],underleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],xleftrightarrow:[[`leftarrow`,`rightarrow`],1.75,522],xLeftrightarrow:[[`doubleleftarrow`,`doublerightarrow`],1.75,560],xrightleftharpoons:[[`leftharpoondownplus`,`rightharpoonplus`],1.75,716],xleftrightharpoons:[[`leftharpoonplus`,`rightharpoondownplus`],1.75,716],xhookleftarrow:[[`leftarrow`,`righthook`],1.08,522],xhookrightarrow:[[`lefthook`,`rightarrow`],1.08,522],overlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],underlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],overbracket:[[`leftbracketover`,`rightbracketover`],1.6,440],underbracket:[[`leftbracketunder`,`rightbracketunder`],1.6,410],overgroup:[[`leftgroup`,`rightgroup`],.888,342],undergroup:[[`leftgroupunder`,`rightgroupunder`],.888,342],xmapsto:[[`leftmapsto`,`rightarrow`],1.5,522],xtofrom:[[`leftToFrom`,`rightToFrom`],1.75,528],xrightleftarrows:[[`baraboveleftarrow`,`rightarrowabovebar`],1.75,901],xrightequilibrium:[[`baraboveshortleftharpoon`,`rightharpoonaboveshortbar`],1.75,716],xleftequilibrium:[[`shortbaraboveleftharpoon`,`shortrightharpoonabovebar`],1.75,716]},db=new Set([`widehat`,`widecheck`,`widetilde`,`utilde`]),fb=function(e,t){function n(){var n=4e5,r=e.label.slice(1);if(db.has(r)){var i=e,a=i.base.type===`ordgroup`?i.base.body.length:1,o,s,c;if(a>5)r===`widehat`||r===`widecheck`?(o=420,n=2364,c=.42,s=r+`4`):(o=312,n=2340,c=.34,s=`tilde4`);else{var l=[1,1,2,2,3,3][a];r===`widehat`||r===`widecheck`?(n=[0,1062,2364,2364,2364][l],o=[0,239,300,360,420][l],c=[0,.24,.3,.3,.36,.42][l],s=r+l):(n=[0,600,1033,2339,2340][l],o=[0,260,286,306,312][l],c=[0,.26,.286,.3,.306,.34][l],s=`tilde`+l)}return{span:ay([],[new cv([new lv(s)],{width:`100%`,height:z(c),viewBox:`0 0 `+n+` `+o,preserveAspectRatio:`none`})],t),minWidth:0,height:c}}else{var u=[],d=ub[r],[f,p,m]=d,h=m/1e3,g=f.length,_,v;if(g===1){var y=d[3];_=[`hide-tail`],v=[y]}else if(g===2)_=[`halfarrow-left`,`halfarrow-right`],v=[`xMinYMin`,`xMaxYMin`];else if(g===3)_=[`brace-left`,`brace-center`,`brace-right`],v=[`xMinYMin`,`xMidYMin`,`xMaxYMin`];else throw Error(`Correct katexImagesData or update code here to support
                    `+g+` children.`);for(var b=0;b<g;b++){var x=new cv([new lv(f[b])],{width:`400em`,height:z(h),viewBox:`0 0 `+n+` `+m,preserveAspectRatio:v[b]+` slice`}),S=ay([_[b]],[x],t);if(g===1)return{span:S,minWidth:p,height:h};S.style.height=z(h),u.push(S)}return{span:X([`stretchy`],u,t),minWidth:p,height:h}}}var{span:r,minWidth:i,height:a}=n();return r.height=a,r.style.height=z(a),i>0&&(r.style.minWidth=z(i)),r},pb=function(e,t,n,r,i){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=X([`stretchy`,t],[],i),t===`fbox`){var s=i.color&&i.getColor();s&&(a.style.borderColor=s)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new uv({x1:`0`,y1:`0`,x2:`100%`,y2:`100%`,"stroke-width":`0.046em`})),/^x?cancel$/.test(t)&&c.push(new uv({x1:`0`,y1:`100%`,x2:`100%`,y2:`0`,"stroke-width":`0.046em`})),a=ay([],[new cv(c,{width:`100%`,height:z(o)})],i)}return a.height=o,a.style.height=z(o),a};function mb(e,t){if(!e||e.type!==t)throw Error(`Expected node of type `+t+`, but got `+(e?`node of type `+e.type:String(e)));return e}function hb(e){var t=gb(e);if(!t)throw Error(`Expected node of symbol group type, but got `+(e?`node of type `+e.type:String(e)));return t}function gb(e){return e&&(e.type===`atom`||Sv.hasOwnProperty(e.type))?e:null}var _b=e=>{if(e instanceof sv)return e;if(pv(e)&&e.children.length===1)return _b(e.children[0])},vb=(e,t)=>{var n,r,i;e&&e.type===`supsub`?(r=mb(e.base,`accent`),n=r.base,e.base=n,i=fv(Ry(e,t)),e.base=r):(r=mb(e,`accent`),n=r.base);var a=Ry(n,t.havingCrampedStyle()),o=r.isShifty&&c_(n),s=0;o&&(s=_b(a)?.skew??0);var c=r.label===`\\c`,l=c?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),u;if(r.isStretchy)u=fb(r,t),u=dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`elem`,elem:u,wrapperClasses:[`svg-align`],wrapperStyle:s>0?{width:`calc(100% - `+z(2*s)+`)`,marginLeft:z(2*s)}:void 0}]});else{var d,f;r.label===`\\vec`?(d=gy(`vec`,t),f=hy.vec[1]):(d=ty({type:`textord`,mode:r.mode,text:r.label},t,`textord`),d=dv(d),d.italic=0,f=d.width,c&&(l+=d.depth)),u=X([`accent-body`],[d]);var p=r.label===`\\textcircled`;p&&(u.classes.push(`accent-full`),l=a.height);var m=s;p||(m-=f/2),u.style.left=z(m),r.label===`\\textcircled`&&(u.style.top=`.2em`),u=dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:-l},{type:`elem`,elem:u}]})}var h=X([`mord`,`accent`],[u],t);return i?(i.children[0]=h,i.height=Math.max(h.height,i.height),i.classes[0]=`mord`,i):h},yb=(e,t)=>{var n=e.isStretchy?lb(e.label):new Q(`mo`,[Ky(e.label,e.mode)]),r=new Q(`mover`,[Qy(e.base,t),n]);return r.setAttribute(`accent`,`true`),r},bb=new RegExp([`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`].map(e=>`\\`+e).join(`|`));Z({type:`accent`,names:[`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`,`\\widecheck`,`\\widehat`,`\\widetilde`,`\\overrightarrow`,`\\overleftarrow`,`\\Overrightarrow`,`\\overleftrightarrow`,`\\overgroup`,`\\overlinesegment`,`\\overleftharpoon`,`\\overrightharpoon`],props:{numArgs:1},handler:(e,t)=>{var n=Ey(t[0]),r=!bb.test(e.funcName),i=!r||e.funcName===`\\widehat`||e.funcName===`\\widetilde`||e.funcName===`\\widecheck`;return{type:`accent`,mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:vb,mathmlBuilder:yb}),Z({type:`accent`,names:[`\\'`,"\\`",`\\^`,`\\~`,`\\=`,`\\u`,`\\.`,`\\"`,`\\c`,`\\r`,`\\H`,`\\v`,`\\textcircled`],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`primitive`]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r===`math`&&(e.parser.settings.reportNonstrict(`mathVsTextAccents`,`LaTeX's accent `+e.funcName+` works only in text mode`),r=`text`),{type:`accent`,mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:vb,mathmlBuilder:yb}),Z({type:`accentUnder`,names:[`\\underleftarrow`,`\\underrightarrow`,`\\underleftrightarrow`,`\\undergroup`,`\\underlinesegment`,`\\utilde`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`accentUnder`,mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=Ry(e.base,t),r=fb(e,t),i=e.label===`\\utilde`?.12:0;return X([`mord`,`accentunder`],[dy({positionType:`top`,positionData:n.height,children:[{type:`elem`,elem:r,wrapperClasses:[`svg-align`]},{type:`kern`,size:i},{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=lb(e.label),r=new Q(`munder`,[Qy(e.base,t),n]);return r.setAttribute(`accentunder`,`true`),r}});var xb=e=>{var t=new Q(`mpadded`,e?[e]:[]);return t.setAttribute(`width`,`+0.6em`),t.setAttribute(`lspace`,`0.3em`),t};Z({type:`xArrow`,names:[`\\xleftarrow`,`\\xrightarrow`,`\\xLeftarrow`,`\\xRightarrow`,`\\xleftrightarrow`,`\\xLeftrightarrow`,`\\xhookleftarrow`,`\\xhookrightarrow`,`\\xmapsto`,`\\xrightharpoondown`,`\\xrightharpoonup`,`\\xleftharpoondown`,`\\xleftharpoonup`,`\\xrightleftharpoons`,`\\xleftrightharpoons`,`\\xlongequal`,`\\xtwoheadrightarrow`,`\\xtwoheadleftarrow`,`\\xtofrom`,`\\xrightleftarrows`,`\\xrightequilibrium`,`\\xleftequilibrium`,`\\\\cdrightarrow`,`\\\\cdleftarrow`,`\\\\cdlongequal`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:`xArrow`,mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=ly(Ry(e.body,r,t),t),a=e.label.slice(0,2)===`\\x`?`x`:`cd`;i.classes.push(a+`-arrow-pad`);var o;e.below&&(r=t.havingStyle(n.sub()),o=ly(Ry(e.below,r,t),t),o.classes.push(a+`-arrow-pad`));var s=fb(e,t),c=-t.fontMetrics().axisHeight+.5*s.height,l=-t.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label===`\\xleftequilibrium`)&&(l-=i.depth);var u;if(o){var d=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;u=dy({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c},{type:`elem`,elem:o,shift:d}]})}else u=dy({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c}]});return u.children[0].children[0].children[1].classes.push(`svg-align`),X([`mrel`,`x-arrow`],[u],t)},mathmlBuilder(e,t){var n=lb(e.label);n.setAttribute(`minsize`,e.label.charAt(0)===`x`?`1.75em`:`3.0em`);var r;if(e.body){var i=xb(Qy(e.body,t));r=e.below?new Q(`munderover`,[n,xb(Qy(e.below,t)),i]):new Q(`mover`,[n,i])}else e.below?r=new Q(`munder`,[n,xb(Qy(e.below,t))]):(r=xb(),r=new Q(`mover`,[n,r]));return r}});function Sb(e,t){var n=My(e.body,t,!0);return X([e.mclass],n,t)}function Cb(e,t){var n,r=Xy(e.body,t);return e.mclass===`minner`?n=new Q(`mpadded`,r):e.mclass===`mord`?e.isCharacterBox?(n=r[0],n.type=`mi`):n=new Q(`mi`,r):(e.isCharacterBox?(n=r[0],n.type=`mo`):n=new Q(`mo`,r),e.mclass===`mbin`?(n.attributes.lspace=`0.22em`,n.attributes.rspace=`0.22em`):e.mclass===`mpunct`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0.17em`):e.mclass===`mopen`||e.mclass===`mclose`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0em`):e.mclass===`minner`&&(n.attributes.lspace=`0.0556em`,n.attributes.width=`+0.1111em`)),n}Z({type:`mclass`,names:[`\\mathord`,`\\mathbin`,`\\mathrel`,`\\mathopen`,`\\mathclose`,`\\mathpunct`,`\\mathinner`],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`mclass`,mode:n.mode,mclass:`m`+r.slice(5),body:Dy(i),isCharacterBox:c_(i)}},htmlBuilder:Sb,mathmlBuilder:Cb});var wb=e=>{var t=e.type===`ordgroup`&&e.body.length?e.body[0]:e;return t.type===`atom`&&(t.family===`bin`||t.family===`rel`)?`m`+t.family:`mord`};Z({type:`mclass`,names:[`\\@binrel`],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:`mclass`,mode:n.mode,mclass:wb(t[0]),body:Dy(t[1]),isCharacterBox:c_(t[1])}}}),Z({type:`mclass`,names:[`\\stackrel`,`\\overset`,`\\underset`],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],o=r===`\\stackrel`?`mrel`:wb(i),s={type:`op`,mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!==`\\stackrel`,body:Dy(i)},c={type:`supsub`,mode:a.mode,base:s,sup:r===`\\underset`?null:a,sub:r===`\\underset`?a:null};return{type:`mclass`,mode:n.mode,mclass:o,body:[c],isCharacterBox:c_(c)}},htmlBuilder:Sb,mathmlBuilder:Cb}),Z({type:`pmb`,names:[`\\pmb`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`pmb`,mode:n.mode,mclass:wb(t[0]),body:Dy(t[0])}},htmlBuilder(e,t){var n=My(e.body,t,!0),r=X([e.mclass],n,t);return r.style.textShadow=`0.02em 0.01em 0.04px`,r},mathmlBuilder(e,t){var n=new Q(`mstyle`,Xy(e.body,t));return n.setAttribute(`style`,`text-shadow: 0.02em 0.01em 0.04px`),n}});var Tb={">":`\\\\cdrightarrow`,"<":`\\\\cdleftarrow`,"=":`\\\\cdlongequal`,A:`\\uparrow`,V:`\\downarrow`,"|":`\\Vert`,".":`no arrow`},Eb=()=>({type:`styling`,body:[],mode:`math`,style:`display`}),Db=e=>e.type===`textord`&&e.text===`@`,Ob=(e,t)=>(e.type===`mathord`||e.type===`atom`)&&e.text===t;function kb(e,t,n){var r=Tb[e];switch(r){case`\\\\cdrightarrow`:case`\\\\cdleftarrow`:return n.callFunction(r,[t[0]],[t[1]]);case`\\uparrow`:case`\\downarrow`:var i=n.callFunction(`\\\\cdleft`,[t[0]],[]),a={type:`atom`,text:r,mode:`math`,family:`rel`},o={type:`ordgroup`,mode:`math`,body:[i,n.callFunction(`\\Big`,[a],[]),n.callFunction(`\\\\cdright`,[t[1]],[])]};return n.callFunction(`\\\\cdparent`,[o],[]);case`\\\\cdlongequal`:return n.callFunction(`\\\\cdlongequal`,[],[]);case`\\Vert`:return n.callFunction(`\\Big`,[{type:`textord`,text:`\\Vert`,mode:`math`}],[]);default:return{type:`textord`,text:` `,mode:`math`}}}function Ab(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set(`\\cr`,`\\\\\\relax`),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,`\\\\`)),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n===`&`||n===`\\\\`)e.consume();else if(n===`\\end`){t[t.length-1].length===0&&t.pop();break}else throw new R(`Expected \\\\ or \\cr or \\end`,e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],s=Eb(),c=0;c<o.length;c++)if(!Db(o[c]))s.body.push(o[c]);else{r.push(s),c+=1;var l=hb(o[c]).text,u=[,,];if(u[0]={type:`ordgroup`,mode:`math`,body:[]},u[1]={type:`ordgroup`,mode:`math`,body:[]},!`=|.`.includes(l))if(`<>AV`.includes(l))for(var d=0;d<2;d++){for(var f=!0,p=c+1;p<o.length;p++){if(Ob(o[p],l)){f=!1,c=p;break}if(Db(o[p]))throw new R(`Missing a `+l+` character to complete a CD arrow.`,o[p]);u[d].body.push(o[p])}if(f)throw new R(`Missing a `+l+` character to complete a CD arrow.`,o[c])}else throw new R(`Expected one of "<>AV=|." after @`,o[c]);var m={type:`styling`,body:[kb(l,u,e)],mode:`math`,style:`display`};r.push(m),s=Eb()}a%2==0?r.push(s):r.shift(),r=[],i.push(r)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:`math`,body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:Array(i[0].length).fill({type:`align`,align:`c`,pregap:.25,postgap:.25}),colSeparationType:`CD`,hLinesBeforeRow:Array(i.length+1).fill([])}}Z({type:`cdlabel`,names:[`\\\\cdleft`,`\\\\cdright`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`cdlabel`,mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=ly(Ry(e.label,n,t),t);return r.classes.push(`cd-label-`+e.side),r.style.bottom=z(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new Q(`mrow`,[Qy(e.label,t)]);return n=new Q(`mpadded`,[n]),n.setAttribute(`width`,`0`),e.side===`left`&&n.setAttribute(`lspace`,`-1width`),n.setAttribute(`voffset`,`0.7em`),n=new Q(`mstyle`,[n]),n.setAttribute(`displaystyle`,`false`),n.setAttribute(`scriptlevel`,`1`),n}}),Z({type:`cdlabelparent`,names:[`\\\\cdparent`],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:`cdlabelparent`,mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=ly(Ry(e.fragment,t),t);return n.classes.push(`cd-vert-arrow`),n},mathmlBuilder(e,t){return new Q(`mrow`,[Qy(e.fragment,t)])}}),Z({type:`textord`,names:[`\\@char`],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=mb(t[0],`ordgroup`).body,i=``,a=0;a<r.length;a++){var o=mb(r[a],`textord`);i+=o.text}var s=parseInt(i),c;if(isNaN(s))throw new R(`\\@char has non-numeric argument `+i);if(s<0||s>=1114111)throw new R(`\\@char with invalid code point `+i);return s<=65535?c=String.fromCharCode(s):(s-=65536,c=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:`textord`,mode:n.mode,text:c}}});var jb=(e,t)=>cy(My(e.body,t.withColor(e.color),!1)),Mb=(e,t)=>{var n=new Q(`mstyle`,Xy(e.body,t.withColor(e.color)));return n.setAttribute(`mathcolor`,e.color),n};Z({type:`color`,names:[`\\textcolor`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`original`]},handler(e,t){var{parser:n}=e,r=mb(t[0],`color-token`).color,i=t[1];return{type:`color`,mode:n.mode,color:r,body:Dy(i)}},htmlBuilder:jb,mathmlBuilder:Mb}),Z({type:`color`,names:[`\\color`],props:{numArgs:1,allowedInText:!0,argTypes:[`color`]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=mb(t[0],`color-token`).color;n.gullet.macros.set(`\\current@color`,i);var a=n.parseExpression(!0,r);return{type:`color`,mode:n.mode,color:i,body:a}},htmlBuilder:jb,mathmlBuilder:Mb}),Z({type:`cr`,names:[`\\\\`],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text===`[`?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior(`newLineInDisplayMode`,`In LaTeX, \\\\ or \\newline does nothing in display mode`);return{type:`cr`,mode:r.mode,newLine:a,size:i&&mb(i,`size`).value}},htmlBuilder(e,t){var n=X([`mspace`],[],t);return e.newLine&&(n.classes.push(`newline`),e.size&&(n.style.marginTop=z(Z_(e.size,t)))),n},mathmlBuilder(e,t){var n=new Q(`mspace`);return e.newLine&&(n.setAttribute(`linebreak`,`newline`),e.size&&n.setAttribute(`height`,z(Z_(e.size,t)))),n}});var Nb={"\\global":`\\global`,"\\long":`\\\\globallong`,"\\\\globallong":`\\\\globallong`,"\\def":`\\gdef`,"\\gdef":`\\gdef`,"\\edef":`\\xdef`,"\\xdef":`\\xdef`,"\\let":`\\\\globallet`,"\\futurelet":`\\\\globalfuture`},Pb=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new R(`Expected a control sequence`,e);return t},Fb=e=>{var t=e.gullet.popToken();return t.text===`=`&&(t=e.gullet.popToken(),t.text===` `&&(t=e.gullet.popToken())),t},Ib=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i??=(n.noexpand=!0,{tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};Z({type:`internal`,names:[`\\global`,`\\long`,`\\\\globallong`],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(Nb[r.text])return(n===`\\global`||n===`\\\\globallong`)&&(r.text=Nb[r.text]),mb(t.parseFunction(),`internal`);throw new R(`Invalid token after macro prefix`,r)}}),Z({type:`internal`,names:[`\\def`,`\\gdef`,`\\edef`,`\\xdef`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new R(`Expected a control sequence`,r);for(var a=0,o,s=[[]];t.gullet.future().text!==`{`;)if(r=t.gullet.popToken(),r.text===`#`){if(t.gullet.future().text===`{`){o=t.gullet.future(),s[a].push(`{`);break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new R(`Invalid argument number "`+r.text+`"`);if(parseInt(r.text)!==a+1)throw new R(`Argument number "`+r.text+`" out of order`);a++,s.push([])}else if(r.text===`EOF`)throw new R(`Expected a macro definition`);else s[a].push(r.text);var{tokens:c}=t.gullet.consumeArg();return o&&c.unshift(o),(n===`\\edef`||n===`\\xdef`)&&(c=t.gullet.expandTokens(c),c.reverse()),t.gullet.macros.set(i,{tokens:c,numArgs:a,delimiters:s},n===Nb[n]),{type:`internal`,mode:t.mode}}}),Z({type:`internal`,names:[`\\let`,`\\\\globallet`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Pb(t.gullet.popToken());return t.gullet.consumeSpaces(),Ib(t,r,Fb(t),n===`\\\\globallet`),{type:`internal`,mode:t.mode}}}),Z({type:`internal`,names:[`\\futurelet`,`\\\\globalfuture`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Pb(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return Ib(t,r,a,n===`\\\\globalfuture`),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:`internal`,mode:t.mode}}});var Lb=function(e,t,n){var r=vv(Cv.math[e]&&Cv.math[e].replace||e,t,n);if(!r)throw Error(`Unsupported symbol `+e+` and font size `+t+`.`);return r},Rb=function(e,t,n,r){var i=n.havingBaseStyle(t),a=X(r.concat(i.sizingClasses(n)),[e],n),o=i.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=i.sizeMultiplier,a},zb=function(e,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push(`delimcenter`),e.style.top=z(i),e.height-=i,e.depth+=i},Bb=function(e,t,n,r,i,a){var o=Rb(Qv(e,`Main-Regular`,i,r),t,r,a);return n&&zb(o,r,t),o},Vb=function(e,t,n,r){return Qv(e,`Size`+t+`-Regular`,n,r)},Hb=function(e,t,n,r,i,a){var o=Vb(e,t,i,r),s=Rb(X([`delimsizing`,`size`+t],[o],r),k_.TEXT,r,a);return n&&zb(s,r,k_.TEXT),s},Ub=function(e,t,n){return{type:`elem`,elem:X([`delimsizinginner`,t===`Size1-Regular`?`delim-size1`:`delim-size4`],[X([],[Qv(e,t,n)])])}},Wb=function(e,t,n){var r=mv[`Size4-Regular`][e.charCodeAt(0)]?mv[`Size4-Regular`][e.charCodeAt(0)][4]:mv[`Size1-Regular`][e.charCodeAt(0)][4],i=ay([],[new cv([new lv(`inner`,W_(e,Math.round(1e3*t)))],{width:z(r),height:z(t),style:`width:`+z(r),viewBox:`0 0 `+1e3*r+` `+Math.round(1e3*t),preserveAspectRatio:`xMinYMin`})],n);return i.height=t,i.style.height=z(t),i.style.width=z(r),{type:`elem`,elem:i}},Gb=.008,Kb={type:`kern`,size:-1*Gb},qb=new Set([`|`,`\\lvert`,`\\rvert`,`\\vert`]),Jb=new Set([`\\|`,`\\lVert`,`\\rVert`,`\\Vert`]),Yb=function(e,t,n,r,i,a){var o,s,c,l,u=``,d=0;o=c=l=e,s=null;var f=`Size1-Regular`;e===`\\uparrow`?c=l=`⏐`:e===`\\Uparrow`?c=l=`‖`:e===`\\downarrow`?o=c=`⏐`:e===`\\Downarrow`?o=c=`‖`:e===`\\updownarrow`?(o=`\\uparrow`,c=`⏐`,l=`\\downarrow`):e===`\\Updownarrow`?(o=`\\Uparrow`,c=`‖`,l=`\\Downarrow`):qb.has(e)?(c=`∣`,u=`vert`,d=333):Jb.has(e)?(c=`∥`,u=`doublevert`,d=556):e===`[`||e===`\\lbrack`?(o=`⎡`,c=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lbrack`,d=667):e===`]`||e===`\\rbrack`?(o=`⎤`,c=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rbrack`,d=667):e===`\\lfloor`||e===`⌊`?(c=o=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lfloor`,d=667):e===`\\lceil`||e===`⌈`?(o=`⎡`,c=l=`⎢`,f=`Size4-Regular`,u=`lceil`,d=667):e===`\\rfloor`||e===`⌋`?(c=o=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rfloor`,d=667):e===`\\rceil`||e===`⌉`?(o=`⎤`,c=l=`⎥`,f=`Size4-Regular`,u=`rceil`,d=667):e===`(`||e===`\\lparen`?(o=`⎛`,c=`⎜`,l=`⎝`,f=`Size4-Regular`,u=`lparen`,d=875):e===`)`||e===`\\rparen`?(o=`⎞`,c=`⎟`,l=`⎠`,f=`Size4-Regular`,u=`rparen`,d=875):e===`\\{`||e===`\\lbrace`?(o=`⎧`,s=`⎨`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\}`||e===`\\rbrace`?(o=`⎫`,s=`⎬`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lgroup`||e===`⟮`?(o=`⎧`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\rgroup`||e===`⟯`?(o=`⎫`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lmoustache`||e===`⎰`?(o=`⎧`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):(e===`\\rmoustache`||e===`⎱`)&&(o=`⎫`,l=`⎩`,c=`⎪`,f=`Size4-Regular`);var p=Lb(o,f,i),m=p.height+p.depth,h=Lb(c,f,i),g=h.height+h.depth,_=Lb(l,f,i),v=_.height+_.depth,y=0,b=1;if(s!==null){var x=Lb(s,f,i);y=x.height+x.depth,b=2}var S=m+v+y,C=S+Math.max(0,Math.ceil((t-S)/(b*g)))*b*g,w=r.fontMetrics().axisHeight;n&&(w*=r.sizeMultiplier);var T=C/2-w,E=[];if(u.length>0){var D=C-m-v,O=Math.round(C*1e3),ee=K_(u,Math.round(D*1e3)),k=new lv(u,ee),te=z(d/1e3),ne=z(O/1e3),re=ay([],[new cv([k],{width:te,height:ne,viewBox:`0 0 `+d+` `+O})],r);re.height=O/1e3,re.style.width=te,re.style.height=ne,E.push({type:`elem`,elem:re})}else{if(E.push(Ub(l,f,i)),E.push(Kb),s===null){var ie=C-m-v+2*Gb;E.push(Wb(c,ie,r))}else{var ae=(C-m-v-y)/2+2*Gb;E.push(Wb(c,ae,r)),E.push(Kb),E.push(Ub(s,f,i)),E.push(Kb),E.push(Wb(c,ae,r))}E.push(Kb),E.push(Ub(o,f,i))}var oe=r.havingBaseStyle(k_.TEXT);return Rb(X([`delimsizing`,`mult`],[dy({positionType:`bottom`,positionData:T,children:E})],oe),k_.TEXT,r,a)},Xb=80,Zb=.08,Qb=function(e,t,n,r,i){return ay([`hide-tail`],[new cv([new lv(e,U_(e,r,n))],{width:`400em`,height:z(t),viewBox:`0 0 400000 `+n,preserveAspectRatio:`xMinYMin slice`})],i)},$b=function(e,t){var n=t.havingBaseSizing(),r=lx(`\\surd`,e*n.sizeMultiplier,sx,n),i=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,s=0,c=0,l=0,u;return r.type===`small`?(l=1e3+1e3*a+Xb,e<1?i=1:e<1.4&&(i=.7),s=(1+a+Zb)/i,c=(1+a)/i,o=Qb(`sqrtMain`,s,l,a,t),o.style.minWidth=`0.853em`,u=.833/i):r.type===`large`?(l=(1e3+Xb)*rx[r.size],c=(rx[r.size]+a)/i,s=(rx[r.size]+a+Zb)/i,o=Qb(`sqrtSize`+r.size,s,l,a,t),o.style.minWidth=`1.02em`,u=1/i):(s=e+a+Zb,c=e+a,l=Math.floor(1e3*e+a)+Xb,o=Qb(`sqrtTall`,s,l,a,t),o.style.minWidth=`0.742em`,u=1.056),o.height=c,o.style.height=z(s),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*i}},ex=new Set([`(`,`\\lparen`,`)`,`\\rparen`,`[`,`\\lbrack`,`]`,`\\rbrack`,`\\{`,`\\lbrace`,`\\}`,`\\rbrace`,`\\lfloor`,`\\rfloor`,`⌊`,`⌋`,`\\lceil`,`\\rceil`,`⌈`,`⌉`,`\\surd`]),tx=new Set([`\\uparrow`,`\\downarrow`,`\\updownarrow`,`\\Uparrow`,`\\Downarrow`,`\\Updownarrow`,`|`,`\\|`,`\\vert`,`\\Vert`,`\\lvert`,`\\rvert`,`\\lVert`,`\\rVert`,`\\lgroup`,`\\rgroup`,`⟮`,`⟯`,`\\lmoustache`,`\\rmoustache`,`⎰`,`⎱`]),nx=new Set([`<`,`>`,`\\langle`,`\\rangle`,`/`,`\\backslash`,`\\lt`,`\\gt`]),rx=[0,1.2,1.8,2.4,3],ix=function(e,t,n,r,i){if(e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`),ex.has(e)||nx.has(e))return Hb(e,t,!1,n,r,i);if(tx.has(e))return Yb(e,rx[t],!1,n,r,i);throw new R(`Illegal delimiter: '`+e+`'`)},ax=[{type:`small`,style:k_.SCRIPTSCRIPT},{type:`small`,style:k_.SCRIPT},{type:`small`,style:k_.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4}],ox=[{type:`small`,style:k_.SCRIPTSCRIPT},{type:`small`,style:k_.SCRIPT},{type:`small`,style:k_.TEXT},{type:`stack`}],sx=[{type:`small`,style:k_.SCRIPTSCRIPT},{type:`small`,style:k_.SCRIPT},{type:`small`,style:k_.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4},{type:`stack`}],cx=function(e){if(e.type===`small`)return`Main-Regular`;if(e.type===`large`)return`Size`+e.size+`-Regular`;if(e.type===`stack`)return`Size4-Regular`;var t=e.type;throw Error(`Add support for delim type '`+t+`' here.`)},lx=function(e,t,n,r){for(var i=Math.min(2,3-r.style.size);i<n.length;i++){var a=n[i];if(a.type===`stack`)break;var o=Lb(e,cx(a),`math`),s=o.height+o.depth;if(a.type===`small`){var c=r.havingBaseStyle(a.style);s*=c.sizeMultiplier}if(s>t)return a}return n[n.length-1]},ux=function(e,t,n,r,i,a){e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`);var o=nx.has(e)?ax:ex.has(e)?sx:ox,s=lx(e,t,o,r);return s.type===`small`?Bb(e,s.style,n,r,i,a):s.type===`large`?Hb(e,s.size,n,r,i,a):Yb(e,t,n,r,i,a)},dx=function(e,t,n,r,i,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,s=901,c=5/r.fontMetrics().ptPerEm,l=Math.max(t-o,n+o);return ux(e,Math.max(l/500*s,2*l-c),!0,r,i,a)},fx={"\\bigl":{mclass:`mopen`,size:1},"\\Bigl":{mclass:`mopen`,size:2},"\\biggl":{mclass:`mopen`,size:3},"\\Biggl":{mclass:`mopen`,size:4},"\\bigr":{mclass:`mclose`,size:1},"\\Bigr":{mclass:`mclose`,size:2},"\\biggr":{mclass:`mclose`,size:3},"\\Biggr":{mclass:`mclose`,size:4},"\\bigm":{mclass:`mrel`,size:1},"\\Bigm":{mclass:`mrel`,size:2},"\\biggm":{mclass:`mrel`,size:3},"\\Biggm":{mclass:`mrel`,size:4},"\\big":{mclass:`mord`,size:1},"\\Big":{mclass:`mord`,size:2},"\\bigg":{mclass:`mord`,size:3},"\\Bigg":{mclass:`mord`,size:4}},px=new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));function mx(e,t){var n=gb(e);if(n&&px.has(n.text))return n;throw n?new R(`Invalid delimiter '`+n.text+`' after '`+t.funcName+`'`,e):new R(`Invalid delimiter type '`+e.type+`'`,e)}Z({type:`delimsizing`,names:[`\\bigl`,`\\Bigl`,`\\biggl`,`\\Biggl`,`\\bigr`,`\\Bigr`,`\\biggr`,`\\Biggr`,`\\bigm`,`\\Bigm`,`\\biggm`,`\\Biggm`,`\\big`,`\\Big`,`\\bigg`,`\\Bigg`],props:{numArgs:1,argTypes:[`primitive`]},handler:(e,t)=>{var n=mx(t[0],e);return{type:`delimsizing`,mode:e.parser.mode,size:fx[e.funcName].size,mclass:fx[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim===`.`?X([e.mclass]):ix(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!==`.`&&t.push(Ky(e.delim,e.mode));var n=new Q(`mo`,t);e.mclass===`mopen`||e.mclass===`mclose`?n.setAttribute(`fence`,`true`):n.setAttribute(`fence`,`false`),n.setAttribute(`stretchy`,`true`);var r=z(rx[e.size]);return n.setAttribute(`minsize`,r),n.setAttribute(`maxsize`,r),n}});function hx(e){if(!e.body)throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`)}Z({type:`leftright-right`,names:[`\\right`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get(`\\current@color`);if(n&&typeof n!=`string`)throw new R(`\\current@color set to non-string in \\right`);return{type:`leftright-right`,mode:e.parser.mode,delim:mx(t[0],e).text,color:n}}}),Z({type:`leftright`,names:[`\\left`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=mx(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect(`\\right`,!1);var a=mb(r.parseFunction(),`leftright-right`);return{type:`leftright`,mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{hx(e);for(var n=My(e.body,t,!0,[`mopen`,`mclose`]),r=0,i=0,a=!1,o=0;o<n.length;o++)n[o].isMiddle?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i));r*=t.sizeMultiplier,i*=t.sizeMultiplier;var s=e.left===`.`?Ly(t,[`mopen`]):dx(e.left,r,i,t,e.mode,[`mopen`]);if(n.unshift(s),a)for(var c=1;c<n.length;c++){var l=n[c].isMiddle;l&&(n[c]=dx(l.delim,r,i,l.options,e.mode,[]))}var u;if(e.right===`.`)u=Ly(t,[`mclose`]);else{var d=e.rightColor?t.withColor(e.rightColor):t;u=dx(e.right,r,i,d,e.mode,[`mclose`])}return n.push(u),X([`minner`],n,t)},mathmlBuilder:(e,t)=>{hx(e);var n=Xy(e.body,t);if(e.left!==`.`){var r=new Q(`mo`,[Ky(e.left,e.mode)]);r.setAttribute(`fence`,`true`),n.unshift(r)}if(e.right!==`.`){var i=new Q(`mo`,[Ky(e.right,e.mode)]);i.setAttribute(`fence`,`true`),e.rightColor&&i.setAttribute(`mathcolor`,e.rightColor),n.push(i)}return qy(n)}}),Z({type:`middle`,names:[`\\middle`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=mx(t[0],e);if(!e.parser.leftrightDepth)throw new R(`\\middle without preceding \\left`,n);return{type:`middle`,mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;if(e.delim===`.`)n=Ly(t,[]);else{n=ix(e.delim,1,t,e.mode,[]);var r={delim:e.delim,options:t};n.isMiddle=r}return n},mathmlBuilder:(e,t)=>{var n=new Q(`mo`,[e.delim===`\\vert`||e.delim===`|`?Ky(`|`,`text`):Ky(e.delim,e.mode)]);return n.setAttribute(`fence`,`true`),n.setAttribute(`lspace`,`0.05em`),n.setAttribute(`rspace`,`0.05em`),n}});var gx=(e,t)=>{var n=ly(Ry(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o=0,s=c_(e.body);if(r===`sout`)a=X([`stretchy`,`sout`]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r===`phase`){var c=Z_({number:.6,unit:`pt`},t),l=Z_({number:.35,unit:`ex`},t),u=t.havingBaseSizing();i/=u.sizeMultiplier;var d=n.height+n.depth+c+l;n.style.paddingLeft=z(d/2+c);var f=Math.floor(1e3*d*i);a=ay([`hide-tail`],[new cv([new lv(`phase`,V_(f))],{width:`400em`,height:z(f/1e3),viewBox:`0 0 400000 `+f,preserveAspectRatio:`xMinYMin slice`})],t),a.style.height=z(d),o=n.depth+c+l}else{/cancel/.test(r)?s||n.classes.push(`cancel-pad`):r===`angl`?n.classes.push(`anglpad`):n.classes.push(`boxpad`);var p=0,m=0,h=0;/box/.test(r)?(h=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),p=t.fontMetrics().fboxsep+(r===`colorbox`?0:h),m=p):r===`angl`?(h=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),p=4*h,m=Math.max(0,.25-n.depth)):(p=s?.2:0,m=p),a=pb(n,r,p,m,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle=`solid`,a.style.borderWidth=z(h)):r===`angl`&&h!==.049&&(a.style.borderTopWidth=z(h),a.style.borderRightWidth=z(h)),o=n.depth+m,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var g;if(e.backgroundColor)g=dy({positionType:`individualShift`,children:[{type:`elem`,elem:a,shift:o},{type:`elem`,elem:n,shift:0}]});else{var _=/cancel|phase/.test(r)?[`svg-align`]:[];g=dy({positionType:`individualShift`,children:[{type:`elem`,elem:n,shift:0},{type:`elem`,elem:a,shift:o,wrapperClasses:_}]})}return/cancel/.test(r)&&(g.height=n.height,g.depth=n.depth),/cancel/.test(r)&&!s?X([`mord`,`cancel-lap`],[g],t):X([`mord`],[g],t)},_x=(e,t)=>{var n=0,r=new Q(e.label.includes(`colorbox`)?`mpadded`:`menclose`,[Qy(e.body,t)]);switch(e.label){case`\\cancel`:r.setAttribute(`notation`,`updiagonalstrike`);break;case`\\bcancel`:r.setAttribute(`notation`,`downdiagonalstrike`);break;case`\\phase`:r.setAttribute(`notation`,`phasorangle`);break;case`\\sout`:r.setAttribute(`notation`,`horizontalstrike`);break;case`\\fbox`:r.setAttribute(`notation`,`box`);break;case`\\angl`:r.setAttribute(`notation`,`actuarial`);break;case`\\fcolorbox`:case`\\colorbox`:if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute(`width`,`+`+2*n+`pt`),r.setAttribute(`height`,`+`+2*n+`pt`),r.setAttribute(`lspace`,n+`pt`),r.setAttribute(`voffset`,n+`pt`),e.label===`\\fcolorbox`){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute(`style`,`border: `+z(i)+` solid `+e.borderColor)}break;case`\\xcancel`:r.setAttribute(`notation`,`updiagonalstrike downdiagonalstrike`);break}return e.backgroundColor&&r.setAttribute(`mathbackground`,e.backgroundColor),r};Z({type:`enclose`,names:[`\\colorbox`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`text`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=mb(t[0],`color-token`).color,o=t[1];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:gx,mathmlBuilder:_x}),Z({type:`enclose`,names:[`\\fcolorbox`],props:{numArgs:3,allowedInText:!0,argTypes:[`color`,`color`,`text`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=mb(t[0],`color-token`).color,o=mb(t[1],`color-token`).color,s=t[2];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:s}},htmlBuilder:gx,mathmlBuilder:_x}),Z({type:`enclose`,names:[`\\fbox`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\fbox`,body:t[0]}}}),Z({type:`enclose`,names:[`\\cancel`,`\\bcancel`,`\\xcancel`,`\\phase`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:gx,mathmlBuilder:_x}),Z({type:`enclose`,names:[`\\sout`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e;n.mode===`math`&&n.settings.reportNonstrict(`mathVsSout`,`LaTeX's \\sout works only in text mode`);var i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:gx,mathmlBuilder:_x}),Z({type:`enclose`,names:[`\\angl`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\angl`,body:t[0]}}});var vx={};function yx(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},c=0;c<n.length;++c)vx[n[c]]=s;a&&(Cy[t]=a),o&&(wy[t]=o)}var bx={};function $(e,t){bx[e]=t}var xx=class e{constructor(e,t,n){this.lexer=e,this.start=t,this.end=n}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new e(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}},Sx=class e{constructor(e,t){this.text=e,this.loc=t}range(t,n){return new e(n,xx.range(this,t))}};function Cx(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n===`\\relax`&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n===`\\hline`||n===`\\hdashline`;)e.consume(),t.push(n===`\\hdashline`),e.consumeSpaces(),n=e.fetch().text;return t}var wx=e=>{if(!e.parser.settings.displayMode)throw new R(`{`+e.envName+`} can be used only in display mode.`)},Tx=new Set([`gather`,`gather*`]);function Ex(e){if(!e.includes(`ed`))return!e.includes(`*`)}function Dx(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:s,autoTag:c,singleRow:l,emptySingleRow:u,maxNumCols:d,leqno:f}=t;if(e.gullet.beginGroup(),l||e.gullet.macros.set(`\\cr`,`\\\\\\relax`),!o){var p=e.gullet.expandMacroAsText(`\\arraystretch`);if(p==null)o=1;else if(o=parseFloat(p),!o||o<0)throw new R(`Invalid \\arraystretch: `+p)}e.gullet.beginGroup();var m=[],h=[m],g=[],_=[],v=c==null?void 0:[];function y(){c&&e.gullet.macros.set(`\\@eqnsw`,`1`,!0)}function b(){v&&(e.gullet.macros.get(`\\df@tag`)?(v.push(e.subparse([new Sx(`\\df@tag`)])),e.gullet.macros.set(`\\df@tag`,void 0,!0)):v.push(!!c&&e.gullet.macros.get(`\\@eqnsw`)===`1`))}for(y(),_.push(Cx(e));;){var x=e.parseExpression(!1,l?`\\end`:`\\\\`);e.gullet.endGroup(),e.gullet.beginGroup();var S={type:`ordgroup`,mode:e.mode,body:x};n&&(S={type:`styling`,mode:e.mode,style:n,body:[S]}),m.push(S);var C=e.fetch().text;if(C===`&`){if(d&&m.length===d){if(l||s)throw new R(`Too many tab characters: &`,e.nextToken);e.settings.reportNonstrict(`textEnv`,`Too few columns specified in the {array} column argument.`)}e.consume()}else if(C===`\\end`){b(),m.length===1&&S.type===`styling`&&S.body.length===1&&S.body[0].type===`ordgroup`&&S.body[0].body.length===0&&(h.length>1||!u)&&h.pop(),_.length<h.length+1&&_.push([]);break}else if(C===`\\\\`){e.consume();var w=void 0;e.gullet.future().text!==` `&&(w=e.parseSizeGroup(!0)),g.push(w?w.value:null),b(),_.push(Cx(e)),m=[],h.push(m),y()}else throw new R(`Expected & or \\\\ or \\cr or \\end`,e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:e.mode,addJot:i,arraystretch:o,body:h,cols:a,rowGaps:g,hskipBeforeAndAfter:r,hLinesBeforeRow:_,colSeparationType:s,tags:v,leqno:f}}function Ox(e){return e.slice(0,1)===`d`?`display`:`text`}var kx=function(e,t){var n,r,i=e.body.length,a=e.hLinesBeforeRow,o=0,s=Array(i),c=[],l=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;e.colSeparationType&&e.colSeparationType===`small`&&(d=.2778*(t.havingStyle(k_.SCRIPT).sizeMultiplier/t.sizeMultiplier));var f=e.colSeparationType===`CD`?Z_({number:3,unit:`ex`},t):12*u,p=3*u,m=e.arraystretch*f,h=.7*m,g=.3*m,_=0;function v(e){for(var t=0;t<e.length;++t)t>0&&(_+=.25),c.push({pos:_,isDashed:e[t]})}for(v(a[0]),n=0;n<e.body.length;++n){var y=e.body[n],b=h,x=g;o<y.length&&(o=y.length);var S=Array(y.length);for(r=0;r<y.length;++r){var C=Ry(y[r],t);x<C.depth&&(x=C.depth),b<C.height&&(b=C.height),S[r]=C}var w=e.rowGaps[n],T=0;w&&(T=Z_(w,t),T>0&&(T+=g,x<T&&(x=T),T=0)),e.addJot&&n<e.body.length-1&&(x+=p),S.height=b,S.depth=x,_+=b,S.pos=_,_+=x+T,s[n]=S,v(a[n+1])}var E=_/2+t.fontMetrics().axisHeight,D=e.cols||[],O=[],ee,k,te=[];if(e.tags&&e.tags.some(e=>e))for(n=0;n<i;++n){var ne=s[n],re=ne.pos-E,ie=e.tags[n],ae=void 0;ae=ie===!0?X([`eqn-num`],[],t):ie===!1?X([],[],t):X([],My(ie,t,!0),t),ae.depth=ne.depth,ae.height=ne.height,te.push({type:`elem`,elem:ae,shift:re})}for(r=0,k=0;r<o||k<D.length;++r,++k){for(var oe=D[k],se=!0;(ce=oe)?.type===`separator`;){var ce;if(se||(ee=X([`arraycolsep`],[]),ee.style.width=z(t.fontMetrics().doubleRuleSep),O.push(ee)),oe.separator===`|`||oe.separator===`:`){var le=oe.separator===`|`?`solid`:`dashed`,ue=X([`vertical-separator`],[],t);ue.style.height=z(_),ue.style.borderRightWidth=z(l),ue.style.borderRightStyle=le,ue.style.margin=`0 `+z(-l/2);var de=_-E;de&&(ue.style.verticalAlign=z(-de)),O.push(ue)}else throw new R(`Invalid separator type: `+oe.separator);k++,oe=D[k],se=!1}if(!(r>=o)){var fe=void 0;(r>0||e.hskipBeforeAndAfter)&&(fe=oe?.pregap??d,fe!==0&&(ee=X([`arraycolsep`],[]),ee.style.width=z(fe),O.push(ee)));var pe=[];for(n=0;n<i;++n){var me=s[n],he=me[r];if(he){var ge=me.pos-E;he.depth=me.depth,he.height=me.height,pe.push({type:`elem`,elem:he,shift:ge})}}var _e=dy({positionType:`individualShift`,children:pe}),ve=X([`col-align-`+(oe?.align||`c`)],[_e]);O.push(ve),(r<o-1||e.hskipBeforeAndAfter)&&(fe=oe?.postgap??d,fe!==0&&(ee=X([`arraycolsep`],[]),ee.style.width=z(fe),O.push(ee)))}}var ye=X([`mtable`],O);if(c.length>0){for(var be=oy(`hline`,t,l),xe=oy(`hdashline`,t,l),Se=[{type:`elem`,elem:ye,shift:0}];c.length>0;){var Ce=c.pop(),we=Ce.pos-E;Ce.isDashed?Se.push({type:`elem`,elem:xe,shift:we}):Se.push({type:`elem`,elem:be,shift:we})}ye=dy({positionType:`individualShift`,children:Se})}if(te.length===0)return X([`mord`],[ye],t);var A=X([`tag`],[dy({positionType:`individualShift`,children:te})],t);return cy([ye,A])},Ax={c:`center `,l:`left `,r:`right `},jx=function(e,t){for(var n=[],r=new Q(`mtd`,[],[`mtr-glue`]),i=new Q(`mtd`,[],[`mml-eqn-num`]),a=0;a<e.body.length;a++){for(var o=e.body[a],s=[],c=0;c<o.length;c++)s.push(new Q(`mtd`,[Qy(o[c],t)]));e.tags&&e.tags[a]&&(s.unshift(r),s.push(r),e.leqno?s.unshift(i):s.push(i)),n.push(new Q(`mtr`,s))}var l=new Q(`mtable`,n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);l.setAttribute(`rowspacing`,z(u));var d=``,f=``;if(e.cols&&e.cols.length>0){var p=e.cols,m=``,h=!1,g=0,_=p.length;p[0].type===`separator`&&(d+=`top `,g=1),p[p.length-1].type===`separator`&&(d+=`bottom `,--_);for(var v=g;v<_;v++){var y=p[v];y.type===`align`?(f+=Ax[y.align],h&&(m+=`none `),h=!0):y.type===`separator`&&(h&&=(m+=y.separator===`|`?`solid `:`dashed `,!1))}l.setAttribute(`columnalign`,f.trim()),/[sd]/.test(m)&&l.setAttribute(`columnlines`,m.trim())}if(e.colSeparationType===`align`){for(var b=e.cols||[],x=``,S=1;S<b.length;S++)x+=S%2?`0em `:`1em `;l.setAttribute(`columnspacing`,x.trim())}else e.colSeparationType===`alignat`||e.colSeparationType===`gather`?l.setAttribute(`columnspacing`,`0em`):e.colSeparationType===`small`?l.setAttribute(`columnspacing`,`0.2778em`):e.colSeparationType===`CD`?l.setAttribute(`columnspacing`,`0.5em`):l.setAttribute(`columnspacing`,`1em`);var C=``,w=e.hLinesBeforeRow;d+=w[0].length>0?`left `:``,d+=w[w.length-1].length>0?`right `:``;for(var T=1;T<w.length-1;T++)C+=w[T].length===0?`none `:w[T][0]?`dashed `:`solid `;return/[sd]/.test(C)&&l.setAttribute(`rowlines`,C.trim()),d!==``&&(l=new Q(`menclose`,[l]),l.setAttribute(`notation`,d.trim())),e.arraystretch&&e.arraystretch<1&&(l=new Q(`mstyle`,[l]),l.setAttribute(`scriptlevel`,`1`)),l},Mx=function(e,t){e.envName.includes(`ed`)||wx(e);var n=[],r=e.envName.includes(`at`)?`alignat`:`align`,i=e.envName===`split`,a=Dx(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:Ex(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},`display`),o=0,s=0,c={type:`ordgroup`,mode:e.mode,body:[]};if(t[0]&&t[0].type===`ordgroup`){for(var l=``,u=0;u<t[0].body.length;u++){var d=mb(t[0].body[u],`textord`);l+=d.text}o=Number(l),s=o*2}var f=!s;a.body.forEach(function(e){for(var t=1;t<e.length;t+=2)mb(mb(e[t],`styling`).body[0],`ordgroup`).body.unshift(c);if(f)s<e.length&&(s=e.length);else{var n=e.length/2;if(o<n)throw new R(`Too many math in a row: `+(`expected `+o+`, but got `+n),e[0])}});for(var p=0;p<s;++p){var m=`r`,h=0;p%2==1?m=`l`:p>0&&f&&(h=1),n[p]={type:`align`,align:m,pregap:h,postgap:0}}return a.colSeparationType=f?`align`:`alignat`,a};yx({type:`array`,names:[`array`,`darray`],props:{numArgs:1},handler(e,t){var n=(gb(t[0])?[t[0]]:mb(t[0],`ordgroup`).body).map(function(e){var t=hb(e).text;if(`lcr`.includes(t))return{type:`align`,align:t};if(t===`|`)return{type:`separator`,separator:`|`};if(t===`:`)return{type:`separator`,separator:`:`};throw new R(`Unknown column alignment: `+t,e)}),r={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return Dx(e.parser,r,Ox(e.envName))},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`matrix`,`pmatrix`,`bmatrix`,`Bmatrix`,`vmatrix`,`Vmatrix`,`matrix*`,`pmatrix*`,`bmatrix*`,`Bmatrix*`,`vmatrix*`,`Vmatrix*`],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:[`(`,`)`],bmatrix:[`[`,`]`],Bmatrix:[`\\{`,`\\}`],vmatrix:[`|`,`|`],Vmatrix:[`\\Vert`,`\\Vert`]}[e.envName.replace(`*`,``)],n=`c`,r={hskipBeforeAndAfter:!1,cols:[{type:`align`,align:n}]};if(e.envName.charAt(e.envName.length-1)===`*`){var i=e.parser;if(i.consumeSpaces(),i.fetch().text===`[`){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,!`lcr`.includes(n))throw new R(`Expected l or c or r`,i.nextToken);i.consume(),i.consumeSpaces(),i.expect(`]`),i.consume(),r.cols=[{type:`align`,align:n}]}}var a=Dx(e.parser,r,Ox(e.envName)),o=Math.max(0,...a.body.map(e=>e.length));return a.cols=Array(o).fill({type:`align`,align:n}),t?{type:`leftright`,mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`smallmatrix`],props:{numArgs:0},handler(e){var t=Dx(e.parser,{arraystretch:.5},`script`);return t.colSeparationType=`small`,t},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`subarray`],props:{numArgs:1},handler(e,t){var n=(gb(t[0])?[t[0]]:mb(t[0],`ordgroup`).body).map(function(e){var t=hb(e).text;if(`lc`.includes(t))return{type:`align`,align:t};throw new R(`Unknown column alignment: `+t,e)});if(n.length>1)throw new R(`{subarray} can contain only one column`);var r={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5},i=Dx(e.parser,r,`script`);if(i.body.length>0&&i.body[0].length>1)throw new R(`{subarray} can contain only one column`);return i},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`cases`,`dcases`,`rcases`,`drcases`],props:{numArgs:0},handler(e){var t=Dx(e.parser,{arraystretch:1.2,cols:[{type:`align`,align:`l`,pregap:0,postgap:1},{type:`align`,align:`l`,pregap:0,postgap:0}]},Ox(e.envName));return{type:`leftright`,mode:e.mode,body:[t],left:e.envName.includes(`r`)?`.`:`\\{`,right:e.envName.includes(`r`)?`\\}`:`.`,rightColor:void 0}},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`align`,`align*`,`aligned`,`split`],props:{numArgs:0},handler:Mx,htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`gathered`,`gather`,`gather*`],props:{numArgs:0},handler(e){Tx.has(e.envName)&&wx(e);var t={cols:[{type:`align`,align:`c`}],addJot:!0,colSeparationType:`gather`,autoTag:Ex(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Dx(e.parser,t,`display`)},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`alignat`,`alignat*`,`alignedat`],props:{numArgs:1},handler:Mx,htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`equation`,`equation*`],props:{numArgs:0},handler(e){wx(e);var t={autoTag:Ex(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Dx(e.parser,t,`display`)},htmlBuilder:kx,mathmlBuilder:jx}),yx({type:`array`,names:[`CD`],props:{numArgs:0},handler(e){return wx(e),Ab(e.parser)},htmlBuilder:kx,mathmlBuilder:jx}),$(`\\nonumber`,`\\gdef\\@eqnsw{0}`),$(`\\notag`,`\\nonumber`),Z({type:`text`,names:[`\\hline`,`\\hdashline`],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new R(e.funcName+` valid only within array environment`)}});var Nx=vx;Z({type:`environment`,names:[`\\begin`,`\\end`],props:{numArgs:1,argTypes:[`text`]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!==`ordgroup`)throw new R(`Invalid environment name`,i);for(var a=``,o=0;o<i.body.length;++o)a+=mb(i.body[o],`textord`).text;if(r===`\\begin`){if(!Nx.hasOwnProperty(a))throw new R(`No such environment: `+a,i);var s=Nx[a],{args:c,optArgs:l}=n.parseArguments(`\\begin{`+a+`}`,s),u={mode:n.mode,envName:a,parser:n},d=s.handler(u,c,l);n.expect(`\\end`,!1);var f=n.nextToken,p=mb(n.parseFunction(),`environment`);if(p.name!==a)throw new R(`Mismatch: \\begin{`+a+`} matched by \\end{`+p.name+`}`,f);return d}return{type:`environment`,mode:n.mode,name:a,nameGroup:i}}});var Px=(e,t)=>{var n=e.font,r=t.withFont(n);return Ry(e.body,r)},Fx=(e,t)=>{var n=e.font,r=t.withFont(n);return Qy(e.body,r)},Ix={"\\Bbb":`\\mathbb`,"\\bold":`\\mathbf`,"\\frak":`\\mathfrak`,"\\bm":`\\boldsymbol`};Z({type:`font`,names:[`\\mathrm`,`\\mathit`,`\\mathbf`,`\\mathnormal`,`\\mathsfit`,`\\mathbb`,`\\mathcal`,`\\mathfrak`,`\\mathscr`,`\\mathsf`,`\\mathtt`,`\\Bbb`,`\\bold`,`\\frak`],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=Ey(t[0]),a=r;return a in Ix&&(a=Ix[a]),{type:`font`,mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:Px,mathmlBuilder:Fx}),Z({type:`mclass`,names:[`\\boldsymbol`,`\\bm`],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`mclass`,mode:n.mode,mclass:wb(r),body:[{type:`font`,mode:n.mode,font:`boldsymbol`,body:r}],isCharacterBox:c_(r)}}}),Z({type:`font`,names:[`\\rm`,`\\sf`,`\\tt`,`\\bf`,`\\it`,`\\cal`],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,o=n.parseExpression(!0,i);return{type:`font`,mode:a,font:`math`+r.slice(1),body:{type:`ordgroup`,mode:n.mode,body:o}}},htmlBuilder:Px,mathmlBuilder:Fx});var Lx=(e,t)=>{var n=t.style,r=n.fracNum(),i=n.fracDen(),a=t.havingStyle(r),o=Ry(e.numer,a,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,c=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<c?c:o.depth}a=t.havingStyle(i);var l=Ry(e.denom,a,t),u,d,f;e.hasBarLine?(e.barSize?(d=Z_(e.barSize,t),u=oy(`frac-line`,t,d)):u=oy(`frac-line`,t),d=u.height,f=u.height):(u=null,d=0,f=t.fontMetrics().defaultRuleThickness);var p,m,h;n.size===k_.DISPLAY.size?(p=t.fontMetrics().num1,m=d>0?3*f:7*f,h=t.fontMetrics().denom1):(d>0?(p=t.fontMetrics().num2,m=f):(p=t.fontMetrics().num3,m=3*f),h=t.fontMetrics().denom2);var g;if(u){var _=t.fontMetrics().axisHeight;p-o.depth-(_+.5*d)<m&&(p+=m-(p-o.depth-(_+.5*d))),_-.5*d-(l.height-h)<m&&(h+=m-(_-.5*d-(l.height-h)));var v=-(_-.5*d);g=dy({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:u,shift:v},{type:`elem`,elem:o,shift:-p}]})}else{var y=p-o.depth-(l.height-h);y<m&&(p+=.5*(m-y),h+=.5*(m-y)),g=dy({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:o,shift:-p}]})}a=t.havingStyle(n),g.height*=a.sizeMultiplier/t.sizeMultiplier,g.depth*=a.sizeMultiplier/t.sizeMultiplier;var b=n.size===k_.DISPLAY.size?t.fontMetrics().delim1:n.size===k_.SCRIPTSCRIPT.size?t.havingStyle(k_.SCRIPT).fontMetrics().delim2:t.fontMetrics().delim2,x=e.leftDelim==null?Ly(t,[`mopen`]):ux(e.leftDelim,b,!0,t.havingStyle(n),e.mode,[`mopen`]),S=e.continued?X([]):e.rightDelim==null?Ly(t,[`mclose`]):ux(e.rightDelim,b,!0,t.havingStyle(n),e.mode,[`mclose`]);return X([`mord`].concat(a.sizingClasses(t)),[x,X([`mfrac`],[g]),S],t)},Rx=(e,t)=>{var n=new Q(`mfrac`,[Qy(e.numer,t),Qy(e.denom,t)]);if(!e.hasBarLine)n.setAttribute(`linethickness`,`0px`);else if(e.barSize){var r=Z_(e.barSize,t);n.setAttribute(`linethickness`,z(r))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var a=new Q(`mo`,[new Hy(e.leftDelim.replace(`\\`,``))]);a.setAttribute(`fence`,`true`),i.push(a)}if(i.push(n),e.rightDelim!=null){var o=new Q(`mo`,[new Hy(e.rightDelim.replace(`\\`,``))]);o.setAttribute(`fence`,`true`),i.push(o)}return qy(i)}return n},zx=(e,t)=>t?{type:`styling`,mode:e.mode,style:t,body:[e]}:e;Z({type:`genfrac`,names:[`\\cfrac`,`\\dfrac`,`\\frac`,`\\tfrac`,`\\dbinom`,`\\binom`,`\\tbinom`,`\\\\atopfrac`,`\\\\bracefrac`,`\\\\brackfrac`],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],o,s=null,c=null;switch(r){case`\\cfrac`:case`\\dfrac`:case`\\frac`:case`\\tfrac`:o=!0;break;case`\\\\atopfrac`:o=!1;break;case`\\dbinom`:case`\\binom`:case`\\tbinom`:o=!1,s=`(`,c=`)`;break;case`\\\\bracefrac`:o=!1,s=`\\{`,c=`\\}`;break;case`\\\\brackfrac`:o=!1,s=`[`,c=`]`;break;default:throw Error(`Unrecognized genfrac command`)}var l=r===`\\cfrac`,u=null;return l||r.startsWith(`\\d`)?u=`display`:r.startsWith(`\\t`)&&(u=`text`),zx({type:`genfrac`,mode:n.mode,numer:i,denom:a,continued:l,hasBarLine:o,leftDelim:s,rightDelim:c,barSize:null},u)},htmlBuilder:Lx,mathmlBuilder:Rx}),Z({type:`infix`,names:[`\\over`,`\\choose`,`\\atop`,`\\brace`,`\\brack`],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case`\\over`:i=`\\frac`;break;case`\\choose`:i=`\\binom`;break;case`\\atop`:i=`\\\\atopfrac`;break;case`\\brace`:i=`\\\\bracefrac`;break;case`\\brack`:i=`\\\\brackfrac`;break;default:throw Error(`Unrecognized infix genfrac command`)}return{type:`infix`,mode:t.mode,replaceWith:i,token:r}}});var Bx=[`display`,`text`,`script`,`scriptscript`],Vx=function(e){var t=null;return e.length>0&&(t=e,t=t===`.`?null:t),t};Z({type:`genfrac`,names:[`\\genfrac`],props:{numArgs:6,allowedInArgument:!0,argTypes:[`math`,`math`,`size`,`text`,`math`,`math`]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=Ey(t[0]),o=a.type===`atom`&&a.family===`open`?Vx(a.text):null,s=Ey(t[1]),c=s.type===`atom`&&s.family===`close`?Vx(s.text):null,l=mb(t[2],`size`),u,d=null;l.isBlank?u=!0:(d=l.value,u=d.number>0);var f=null,p=t[3];if(p.type===`ordgroup`){if(p.body.length>0){var m=mb(p.body[0],`textord`);f=Bx[Number(m.text)]}}else p=mb(p,`textord`),f=Bx[Number(p.text)];return zx({type:`genfrac`,mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:o,rightDelim:c},f)}}),Z({type:`infix`,names:[`\\above`],props:{numArgs:1,argTypes:[`size`],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:`infix`,mode:n.mode,replaceWith:`\\\\abovefrac`,size:mb(t[0],`size`).value,token:i}}}),Z({type:`genfrac`,names:[`\\\\abovefrac`],props:{numArgs:3,argTypes:[`math`,`size`,`math`]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=mb(t[1],`infix`).size;if(!a)throw Error(`\\\\abovefrac expected size, but got `+String(a));var o=t[2],s=a.number>0;return{type:`genfrac`,mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:s,barSize:a,leftDelim:null,rightDelim:null}}});var Hx=(e,t)=>{var n=t.style,r,i;e.type===`supsub`?(r=e.sup?Ry(e.sup,t.havingStyle(n.sup()),t):Ry(e.sub,t.havingStyle(n.sub()),t),i=mb(e.base,`horizBrace`)):i=mb(e,`horizBrace`);var a=Ry(i.base,t.havingBaseStyle(k_.DISPLAY)),o=fb(i,t),s;if(i.isOver?(s=dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:.1},{type:`elem`,elem:o}]}),s.children[0].children[0].children[1].classes.push(`svg-align`)):(s=dy({positionType:`bottom`,positionData:a.depth+.1+o.height,children:[{type:`elem`,elem:o},{type:`kern`,size:.1},{type:`elem`,elem:a}]}),s.children[0].children[0].children[0].classes.push(`svg-align`)),r){var c=X([`minner`,i.isOver?`mover`:`munder`],[s],t);s=i.isOver?dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:c},{type:`kern`,size:.2},{type:`elem`,elem:r}]}):dy({positionType:`bottom`,positionData:c.depth+.2+r.height+r.depth,children:[{type:`elem`,elem:r},{type:`kern`,size:.2},{type:`elem`,elem:c}]})}return X([`minner`,i.isOver?`mover`:`munder`],[s],t)};Z({type:`horizBrace`,names:[`\\overbrace`,`\\underbrace`,`\\overbracket`,`\\underbracket`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`horizBrace`,mode:n.mode,label:r,isOver:r.includes(`\\over`),base:t[0]}},htmlBuilder:Hx,mathmlBuilder:(e,t)=>{var n=lb(e.label);return new Q(e.isOver?`mover`:`munder`,[Qy(e.base,t),n])}}),Z({type:`href`,names:[`\\href`],props:{numArgs:2,argTypes:[`url`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=mb(t[0],`url`).url;return n.settings.isTrusted({command:`\\href`,url:i})?{type:`href`,mode:n.mode,href:i,body:Dy(r)}:n.formatUnsupportedCmd(`\\href`)},htmlBuilder:(e,t)=>{var n=My(e.body,t,!1);return sy(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=Zy(e.body,t);return n instanceof Q||(n=new Q(`mrow`,[n])),n.setAttribute(`href`,e.href),n}}),Z({type:`href`,names:[`\\url`],props:{numArgs:1,argTypes:[`url`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=mb(t[0],`url`).url;if(!n.settings.isTrusted({command:`\\url`,url:r}))return n.formatUnsupportedCmd(`\\url`);for(var i=[],a=0;a<r.length;a++){var o=r[a];o===`~`&&(o=`\\textasciitilde`),i.push({type:`textord`,mode:`text`,text:o})}var s={type:`text`,mode:n.mode,font:`\\texttt`,body:i};return{type:`href`,mode:n.mode,href:r,body:Dy(s)}}}),Z({type:`hbox`,names:[`\\hbox`],props:{numArgs:1,argTypes:[`text`],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:`hbox`,mode:n.mode,body:Dy(t[0])}},htmlBuilder(e,t){return cy(My(e.body,t,!1))},mathmlBuilder(e,t){return new Q(`mrow`,Xy(e.body,t))}}),Z({type:`html`,names:[`\\htmlClass`,`\\htmlId`,`\\htmlStyle`,`\\htmlData`],props:{numArgs:2,argTypes:[`raw`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=mb(t[0],`raw`).string,o=t[1];n.settings.strict&&n.settings.reportNonstrict(`htmlExtension`,`HTML extension is disabled on strict mode`);var s,c={};switch(r){case`\\htmlClass`:c.class=a,s={command:`\\htmlClass`,class:a};break;case`\\htmlId`:c.id=a,s={command:`\\htmlId`,id:a};break;case`\\htmlStyle`:c.style=a,s={command:`\\htmlStyle`,style:a};break;case`\\htmlData`:for(var l=a.split(`,`),u=0;u<l.length;u++){var d=l[u],f=d.indexOf(`=`);if(f<0)throw new R(`\\htmlData key/value '`+d+`' missing equals sign`);var p=d.slice(0,f),m=d.slice(f+1);c[`data-`+p.trim()]=m}s={command:`\\htmlData`,attributes:c};break;default:throw Error(`Unrecognized html command`)}return n.settings.isTrusted(s)?{type:`html`,mode:n.mode,attributes:c,body:Dy(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=My(e.body,t,!1),r=[`enclosing`];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=X(r,n,t);for(var a in e.attributes)a!==`class`&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>Zy(e.body,t)}),Z({type:`htmlmathml`,names:[`\\html@mathml`],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`htmlmathml`,mode:n.mode,html:Dy(t[0]),mathml:Dy(t[1])}},htmlBuilder:(e,t)=>cy(My(e.html,t,!1)),mathmlBuilder:(e,t)=>Zy(e.mathml,t)});var Ux=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:`bp`};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new R(`Invalid size: '`+e+`' in \\includegraphics`);var n={number:+(t[1]+t[2]),unit:t[3]};if(!X_(n))throw new R(`Invalid unit: '`+n.unit+`' in \\includegraphics.`);return n};Z({type:`includegraphics`,names:[`\\includegraphics`],props:{numArgs:1,numOptionalArgs:1,argTypes:[`raw`,`url`],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:`em`},a={number:.9,unit:`em`},o={number:0,unit:`em`},s=``;if(n[0])for(var c=mb(n[0],`raw`).string.split(`,`),l=0;l<c.length;l++){var u=c[l].split(`=`);if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case`alt`:s=d;break;case`width`:i=Ux(d);break;case`height`:a=Ux(d);break;case`totalheight`:o=Ux(d);break;default:throw new R(`Invalid key: '`+u[0]+`' in \\includegraphics.`)}}}var f=mb(t[0],`url`).url;return s===``&&(s=f,s=s.replace(/^.*[\\/]/,``),s=s.substring(0,s.lastIndexOf(`.`))),r.settings.isTrusted({command:`\\includegraphics`,url:f})?{type:`includegraphics`,mode:r.mode,alt:s,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd(`\\includegraphics`)},htmlBuilder:(e,t)=>{var n=Z_(e.height,t),r=0;e.totalheight.number>0&&(r=Z_(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=Z_(e.width,t));var a={height:z(n+r)};i>0&&(a.width=z(i)),r>0&&(a.verticalAlign=z(-r));var o=new av(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new Q(`mglyph`,[]);n.setAttribute(`alt`,e.alt);var r=Z_(e.height,t),i=0;if(e.totalheight.number>0&&(i=Z_(e.totalheight,t)-r,n.setAttribute(`valign`,z(-i))),n.setAttribute(`height`,z(r+i)),e.width.number>0){var a=Z_(e.width,t);n.setAttribute(`width`,z(a))}return n.setAttribute(`src`,e.src),n}}),Z({type:`kern`,names:[`\\kern`,`\\mkern`,`\\hskip`,`\\mskip`],props:{numArgs:1,argTypes:[`size`],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=mb(t[0],`size`);if(n.settings.strict){var a=r[1]===`m`,o=i.value.unit===`mu`;a?(o||n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` supports only mu units, `+(`not `+i.value.unit+` units`)),n.mode!==`math`&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` works only in math mode`)):o&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` doesn't support mu units`)}return{type:`kern`,mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return fy(e.dimension,t)},mathmlBuilder(e,t){return new Uy(Z_(e.dimension,t))}}),Z({type:`lap`,names:[`\\mathllap`,`\\mathrlap`,`\\mathclap`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`lap`,mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment===`clap`?(n=X([],[Ry(e.body,t)]),n=X([`inner`],[n],t)):n=X([`inner`],[Ry(e.body,t)]);var r=X([`fix`],[]),i=X([e.alignment],[n,r],t),a=X([`strut`]);return a.style.height=z(i.height+i.depth),i.depth&&(a.style.verticalAlign=z(-i.depth)),i.children.unshift(a),i=X([`thinbox`],[i],t),X([`mord`,`vbox`],[i],t)},mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[Qy(e.body,t)]);if(e.alignment!==`rlap`){var r=e.alignment===`llap`?`-1`:`-0.5`;n.setAttribute(`lspace`,r+`width`)}return n.setAttribute(`width`,`0px`),n}}),Z({type:`styling`,names:[`\\(`,`$`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode(`math`);var a=n===`\\(`?`\\)`:`$`,o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:`styling`,mode:r.mode,style:`text`,body:o}}}),Z({type:`text`,names:[`\\)`,`\\]`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new R(`Mismatched `+e.funcName)}});var Wx=(e,t)=>{switch(t.style.size){case k_.DISPLAY.size:return e.display;case k_.TEXT.size:return e.text;case k_.SCRIPT.size:return e.script;case k_.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Z({type:`mathchoice`,names:[`\\mathchoice`],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`mathchoice`,mode:n.mode,display:Dy(t[0]),text:Dy(t[1]),script:Dy(t[2]),scriptscript:Dy(t[3])}},htmlBuilder:(e,t)=>cy(My(Wx(e,t),t,!1)),mathmlBuilder:(e,t)=>Zy(Wx(e,t),t)});var Gx=(e,t,n,r,i,a,o)=>{e=X([],[e]);var s=n&&c_(n),c,l;if(t){var u=Ry(t,r.havingStyle(i.sup()),r);l={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var d=Ry(n,r.havingStyle(i.sub()),r);c={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var f;if(l&&c)f=dy({positionType:`bottom`,positionData:r.fontMetrics().bigOpSpacing5+c.elem.height+c.elem.depth+c.kern+e.depth+o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:z(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:z(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else if(c)f=dy({positionType:`top`,positionData:e.height-o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:z(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e}]});else if(l)f=dy({positionType:`bottom`,positionData:e.depth+o,children:[{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:z(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else return e;var p=[f];if(c&&a!==0&&!s){var m=X([`mspace`],[],r);m.style.marginRight=z(a),p.unshift(m)}return X([`mop`,`op-limits`],p,r)},Kx=new Set([`\\smallint`]),qx=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=mb(e.base,`op`),i=!0):a=mb(e,`op`);var o=t.style,s=!1;o.size===k_.DISPLAY.size&&a.symbol&&!Kx.has(a.name)&&(s=!0);var c;if(a.symbol){var l=s?`Size2-Regular`:`Size1-Regular`,u=``;if((a.name===`\\oiint`||a.name===`\\oiiint`)&&(u=a.name.slice(1),a.name=u===`oiint`?`\\iint`:`\\iiint`),c=Qv(a.name,l,`math`,t,[`mop`,`op-symbol`,s?`large-op`:`small-op`]),u.length>0){var d=c.italic,f=gy(u+`Size`+(s?`2`:`1`),t);c=dy({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:0},{type:`elem`,elem:f,shift:s?.08:0}]}),a.name=`\\`+u,c.classes.unshift(`mop`),c.italic=d}}else if(a.body){var p=My(a.body,t,!0);p.length===1&&p[0]instanceof sv?(c=p[0],c.classes[0]=`mop`):c=X([`mop`],p,t)}else{for(var m=[],h=1;h<a.name.length;h++)m.push($v(a.name[h],a.mode,t));c=X([`mop`],m,t)}var g=0,_=0;return(c instanceof sv||a.name===`\\oiint`||a.name===`\\oiiint`)&&!a.suppressBaseShift&&(g=(c.height-c.depth)/2-t.fontMetrics().axisHeight,_=c.italic||0),i?Gx(c,n,r,t,o,_,g):(g&&(c.style.position=`relative`,c.style.top=z(g)),c)},Jx=(e,t)=>{var n;if(e.symbol)n=new Q(`mo`,[Ky(e.name,e.mode)]),Kx.has(e.name)&&n.setAttribute(`largeop`,`false`);else if(e.body)n=new Q(`mo`,Xy(e.body,t));else{n=new Q(`mi`,[new Hy(e.name.slice(1))]);var r=new Q(`mo`,[Ky(`⁡`,`text`)]);n=e.parentIsSupSub?new Q(`mrow`,[n,r]):Vy([n,r])}return n},Yx={"∏":`\\prod`,"∐":`\\coprod`,"∑":`\\sum`,"⋀":`\\bigwedge`,"⋁":`\\bigvee`,"⋂":`\\bigcap`,"⋃":`\\bigcup`,"⨀":`\\bigodot`,"⨁":`\\bigoplus`,"⨂":`\\bigotimes`,"⨄":`\\biguplus`,"⨆":`\\bigsqcup`};Z({type:`op`,names:`\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(`.`),props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=Yx[i]),{type:`op`,mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:qx,mathmlBuilder:Jx}),Z({type:`op`,names:[`\\mathop`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`op`,mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Dy(r)}},htmlBuilder:qx,mathmlBuilder:Jx});var Xx={"∫":`\\int`,"∬":`\\iint`,"∭":`\\iiint`,"∮":`\\oint`,"∯":`\\oiint`,"∰":`\\oiiint`};Z({type:`op`,names:`\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`),props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:qx,mathmlBuilder:Jx}),Z({type:`op`,names:[`\\det`,`\\gcd`,`\\inf`,`\\lim`,`\\max`,`\\min`,`\\Pr`,`\\sup`],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:qx,mathmlBuilder:Jx}),Z({type:`op`,names:[`\\int`,`\\iint`,`\\iiint`,`\\oint`,`\\oiint`,`\\oiiint`,`∫`,`∬`,`∭`,`∮`,`∯`,`∰`],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=Xx[r]),{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:qx,mathmlBuilder:Jx});var Zx=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=mb(e.base,`operatorname`),i=!0):a=mb(e,`operatorname`);var o;if(a.body.length>0){for(var s=My(a.body.map(e=>{var t=`text`in e?e.text:void 0;return typeof t==`string`?{type:`textord`,mode:e.mode,text:t}:e}),t.withFont(`mathrm`),!0),c=0;c<s.length;c++){var l=s[c];l instanceof sv&&(l.text=l.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`))}o=X([`mop`],s,t)}else o=X([`mop`],[],t);return i?Gx(o,n,r,t,t.style,0,0):o};Z({type:`operatorname`,names:[`\\operatorname@`,`\\operatornamewithlimits`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`operatorname`,mode:n.mode,body:Dy(i),alwaysHandleSupSub:r===`\\operatornamewithlimits`,limits:!1,parentIsSupSub:!1}},htmlBuilder:Zx,mathmlBuilder:(e,t)=>{for(var n=Xy(e.body,t.withFont(`mathrm`)),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof Uy))if(a instanceof Q)switch(a.type){case`mi`:case`mn`:case`mspace`:case`mtext`:break;case`mo`:var o=a.children[0];a.children.length===1&&o instanceof Hy?o.text=o.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`):r=!1;break;default:r=!1}else r=!1}r&&(n=[new Hy(n.map(e=>e.toText()).join(``))]);var s=new Q(`mi`,n);s.setAttribute(`mathvariant`,`normal`);var c=new Q(`mo`,[Ky(`⁡`,`text`)]);return e.parentIsSupSub?new Q(`mrow`,[s,c]):Vy([s,c])}}),$(`\\operatorname`,`\\@ifstar\\operatornamewithlimits\\operatorname@`),Ty({type:`ordgroup`,htmlBuilder(e,t){return e.semisimple?cy(My(e.body,t,!1)):X([`mord`],My(e.body,t,!0),t)},mathmlBuilder(e,t){return Zy(e.body,t,!0)}}),Z({type:`overline`,names:[`\\overline`],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:`overline`,mode:n.mode,body:r}},htmlBuilder(e,t){var n=Ry(e.body,t.havingCrampedStyle()),r=oy(`overline-line`,t),i=t.fontMetrics().defaultRuleThickness;return X([`mord`,`overline`],[dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:n},{type:`kern`,size:3*i},{type:`elem`,elem:r},{type:`kern`,size:i}]})],t)},mathmlBuilder(e,t){var n=new Q(`mo`,[new Hy(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Q(`mover`,[Qy(e.body,t),n]);return r.setAttribute(`accent`,`true`),r}}),Z({type:`phantom`,names:[`\\phantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`phantom`,mode:n.mode,body:Dy(r)}},htmlBuilder:(e,t)=>cy(My(e.body,t.withPhantom(),!1)),mathmlBuilder:(e,t)=>new Q(`mphantom`,Xy(e.body,t))}),$(`\\hphantom`,`\\smash{\\phantom{#1}}`),Z({type:`vphantom`,names:[`\\vphantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`vphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>X([`mord`,`rlap`],[X([`inner`],[Ry(e.body,t.withPhantom())]),X([`fix`],[])],t),mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[new Q(`mphantom`,Xy(Dy(e.body),t))]);return n.setAttribute(`width`,`0px`),n}}),Z({type:`raisebox`,names:[`\\raisebox`],props:{numArgs:2,argTypes:[`size`,`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e,r=mb(t[0],`size`).value,i=t[1];return{type:`raisebox`,mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=Ry(e.body,t);return dy({positionType:`shift`,positionData:-Z_(e.dy,t),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){var n=new Q(`mpadded`,[Qy(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute(`voffset`,r),n}}),Z({type:`internal`,names:[`\\relax`],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:`internal`,mode:t.mode}}}),Z({type:`rule`,names:[`\\rule`],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`size`,`size`,`size`]},handler(e,t,n){var{parser:r}=e,i=n[0],a=mb(t[0],`size`),o=mb(t[1],`size`);return{type:`rule`,mode:r.mode,shift:i&&mb(i,`size`).value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=X([`mord`,`rule`],[],t),r=Z_(e.width,t),i=Z_(e.height,t),a=e.shift?Z_(e.shift,t):0;return n.style.borderRightWidth=z(r),n.style.borderTopWidth=z(i),n.style.bottom=z(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=Z_(e.width,t),r=Z_(e.height,t),i=e.shift?Z_(e.shift,t):0,a=t.color&&t.getColor()||`black`,o=new Q(`mspace`);o.setAttribute(`mathbackground`,a),o.setAttribute(`width`,z(n)),o.setAttribute(`height`,z(r));var s=new Q(`mpadded`,[o]);return i>=0?s.setAttribute(`height`,z(i)):(s.setAttribute(`height`,z(i)),s.setAttribute(`depth`,z(-i))),s.setAttribute(`voffset`,z(i)),s}});function Qx(e,t,n){for(var r=My(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf(`sizing`);o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]===`reset-size`+t.size&&(r[a].classes[o+1]=`reset-size`+n.size),r[a].height*=i,r[a].depth*=i}return cy(r)}var $x=[`\\tiny`,`\\sixptsize`,`\\scriptsize`,`\\footnotesize`,`\\small`,`\\normalsize`,`\\large`,`\\Large`,`\\LARGE`,`\\huge`,`\\Huge`];Z({type:`sizing`,names:$x,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:`sizing`,mode:i.mode,size:$x.indexOf(r)+1,body:a}},htmlBuilder:(e,t)=>{var n=t.havingSize(e.size);return Qx(e.body,n,t)},mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=new Q(`mstyle`,Xy(e.body,n));return r.setAttribute(`mathsize`,z(n.sizeMultiplier)),r}}),Z({type:`smash`,names:[`\\smash`],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,o=n[0]&&mb(n[0],`ordgroup`);if(o)for(var s=``,c=0;c<o.body.length;++c){var l=o.body[c];if(s=hb(l).text,s===`t`)i=!0;else if(s===`b`)a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=t[0];return{type:`smash`,mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=X([],[Ry(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0),e.smashDepth&&(n.depth=0),e.smashHeight&&e.smashDepth)return X([`mord`,`smash`],[n],t);if(n.children)for(var r=0;r<n.children.length;r++)e.smashHeight&&(n.children[r].height=0),e.smashDepth&&(n.children[r].depth=0);return X([`mord`],[dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=new Q(`mpadded`,[Qy(e.body,t)]);return e.smashHeight&&n.setAttribute(`height`,`0px`),e.smashDepth&&n.setAttribute(`depth`,`0px`),n}}),Z({type:`sqrt`,names:[`\\sqrt`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:`sqrt`,mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=Ry(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=ly(n,t);var r=t.fontMetrics().defaultRuleThickness,i=r;t.style.id<k_.TEXT.id&&(i=t.fontMetrics().xHeight);var a=r+i/4,{span:o,ruleWidth:s,advanceWidth:c}=$b(n.height+n.depth+a+r,t),l=o.height-s;l>n.height+n.depth+a&&(a=(a+l-n.height-n.depth)/2);var u=o.height-n.height-a-s;n.style.paddingLeft=z(c);var d=dy({positionType:`firstBaseline`,children:[{type:`elem`,elem:n,wrapperClasses:[`svg-align`]},{type:`kern`,size:-(n.height+u)},{type:`elem`,elem:o},{type:`kern`,size:s}]});if(e.index){var f=t.havingStyle(k_.SCRIPTSCRIPT),p=Ry(e.index,f,t);return X([`mord`,`sqrt`],[X([`root`],[dy({positionType:`shift`,positionData:-(.6*(d.height-d.depth)),children:[{type:`elem`,elem:p}]})]),d],t)}else return X([`mord`,`sqrt`],[d],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new Q(`mroot`,[Qy(n,t),Qy(r,t)]):new Q(`msqrt`,[Qy(n,t)])}});var eS={display:k_.DISPLAY,text:k_.TEXT,script:k_.SCRIPT,scriptscript:k_.SCRIPTSCRIPT};Z({type:`styling`,names:[`\\displaystyle`,`\\textstyle`,`\\scriptstyle`,`\\scriptscriptstyle`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);return{type:`styling`,mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=eS[e.style],r=t.havingStyle(n).withFont(``);return Qx(e.body,r,t)},mathmlBuilder(e,t){var n=eS[e.style],r=t.havingStyle(n),i=new Q(`mstyle`,Xy(e.body,r)),a={display:[`0`,`true`],text:[`0`,`false`],script:[`1`,`false`],scriptscript:[`2`,`false`]}[e.style];return i.setAttribute(`scriptlevel`,a[0]),i.setAttribute(`displaystyle`,a[1]),i}});var tS=function(e,t){var n=e.base;return n?n.type===`op`?n.limits&&(t.style.size===k_.DISPLAY.size||n.alwaysHandleSupSub)?qx:null:n.type===`operatorname`?n.alwaysHandleSupSub&&(t.style.size===k_.DISPLAY.size||n.limits)?Zx:null:n.type===`accent`?c_(n.base)?vb:null:n.type===`horizBrace`&&!e.sub===n.isOver?Hx:null:null};Ty({type:`supsub`,htmlBuilder(e,t){var n=tS(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,o=Ry(r,t),s,c,l=t.fontMetrics(),u=0,d=0,f=r&&c_(r);if(i){var p=t.havingStyle(t.style.sup());s=Ry(i,p,t),f||(u=o.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(a){var m=t.havingStyle(t.style.sub());c=Ry(a,m,t),f||(d=o.depth+m.fontMetrics().subDrop*m.sizeMultiplier/t.sizeMultiplier)}var h=t.style===k_.DISPLAY?l.sup1:t.style.cramped?l.sup3:l.sup2,g=t.sizeMultiplier,_=z(.5/l.ptPerEm/g),v=null;if(c){var y=e.base&&e.base.type===`op`&&e.base.name&&(e.base.name===`\\oiint`||e.base.name===`\\oiiint`);(o instanceof sv||y)&&(v=z(-o.italic))}var b;if(s&&c){u=Math.max(u,h,s.depth+.25*l.xHeight),d=Math.max(d,l.sub2);var x=4*l.defaultRuleThickness;if(u-s.depth-(c.height-d)<x){d=x-(u-s.depth)+c.height;var S=.8*l.xHeight-(u-s.depth);S>0&&(u+=S,d-=S)}b=dy({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:d,marginRight:_,marginLeft:v},{type:`elem`,elem:s,shift:-u,marginRight:_}]})}else if(c)d=Math.max(d,l.sub1,c.height-.8*l.xHeight),b=dy({positionType:`shift`,positionData:d,children:[{type:`elem`,elem:c,marginLeft:v,marginRight:_}]});else if(s)u=Math.max(u,h,s.depth+.25*l.xHeight),b=dy({positionType:`shift`,positionData:-u,children:[{type:`elem`,elem:s,marginRight:_}]});else throw Error(`supsub must have either sup or sub.`);return X([Iy(o,`right`)||`mord`],[o,X([`msupsub`],[b])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type===`horizBrace`&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type===`op`||e.base.type===`operatorname`)&&(e.base.parentIsSupSub=!0);var a=[Qy(e.base,t)];e.sub&&a.push(Qy(e.sub,t)),e.sup&&a.push(Qy(e.sup,t));var o;if(n)o=r?`mover`:`munder`;else if(!e.sub){var s=e.base;o=s&&s.type===`op`&&s.limits&&(t.style===k_.DISPLAY||s.alwaysHandleSupSub)||s&&s.type===`operatorname`&&s.alwaysHandleSupSub&&(s.limits||t.style===k_.DISPLAY)?`mover`:`msup`}else if(e.sup){var c=e.base;o=c&&c.type===`op`&&c.limits&&t.style===k_.DISPLAY||c&&c.type===`operatorname`&&c.alwaysHandleSupSub&&(t.style===k_.DISPLAY||c.limits)?`munderover`:`msubsup`}else{var l=e.base;o=l&&l.type===`op`&&l.limits&&(t.style===k_.DISPLAY||l.alwaysHandleSupSub)||l&&l.type===`operatorname`&&l.alwaysHandleSupSub&&(l.limits||t.style===k_.DISPLAY)?`munder`:`msub`}return new Q(o,a)}}),Ty({type:`atom`,htmlBuilder(e,t){return $v(e.text,e.mode,t,[`m`+e.family])},mathmlBuilder(e,t){var n=new Q(`mo`,[Ky(e.text,e.mode)]);if(e.family===`bin`){var r=Jy(e,t);r===`bold-italic`&&n.setAttribute(`mathvariant`,r)}else e.family===`punct`?n.setAttribute(`separator`,`true`):(e.family===`open`||e.family===`close`)&&n.setAttribute(`stretchy`,`false`);return n}});var nS={mi:`italic`,mn:`normal`,mtext:`normal`};Ty({type:`mathord`,htmlBuilder(e,t){return ty(e,t,`mathord`)},mathmlBuilder(e,t){var n=new Q(`mi`,[Ky(e.text,e.mode,t)]),r=Jy(e,t)||`italic`;return r!==nS[n.type]&&n.setAttribute(`mathvariant`,r),n}}),Ty({type:`textord`,htmlBuilder(e,t){return ty(e,t,`textord`)},mathmlBuilder(e,t){var n=Ky(e.text,e.mode,t),r=Jy(e,t)||`normal`,i=e.mode===`text`?new Q(`mtext`,[n]):/[0-9]/.test(e.text)?new Q(`mn`,[n]):e.text===`\\prime`?new Q(`mo`,[n]):new Q(`mi`,[n]);return r!==nS[i.type]&&i.setAttribute(`mathvariant`,r),i}});var rS={"\\nobreak":`nobreak`,"\\allowbreak":`allowbreak`},iS={" ":{},"\\ ":{},"~":{className:`nobreak`},"\\space":{},"\\nobreakspace":{className:`nobreak`}};Ty({type:`spacing`,htmlBuilder(e,t){if(iS.hasOwnProperty(e.text)){var n=iS[e.text].className||``;if(e.mode===`text`){var r=ty(e,t,`textord`);return r.classes.push(n),r}else return X([`mspace`,n],[$v(e.text,e.mode,t)],t)}else if(rS.hasOwnProperty(e.text))return X([`mspace`,rS[e.text]],[],t);else throw new R(`Unknown type of space "`+e.text+`"`)},mathmlBuilder(e,t){var n;if(iS.hasOwnProperty(e.text))n=new Q(`mtext`,[new Hy(`\xA0`)]);else if(rS.hasOwnProperty(e.text))return new Q(`mspace`);else throw new R(`Unknown type of space "`+e.text+`"`);return n}});var aS=()=>{var e=new Q(`mtd`,[]);return e.setAttribute(`width`,`50%`),e};Ty({type:`tag`,mathmlBuilder(e,t){var n=new Q(`mtable`,[new Q(`mtr`,[aS(),new Q(`mtd`,[Zy(e.body,t)]),aS(),new Q(`mtd`,[Zy(e.tag,t)])])]);return n.setAttribute(`width`,`100%`),n}});var oS={"\\text":void 0,"\\textrm":`textrm`,"\\textsf":`textsf`,"\\texttt":`texttt`,"\\textnormal":`textrm`},sS={"\\textbf":`textbf`,"\\textmd":`textmd`},cS={"\\textit":`textit`,"\\textup":`textup`},lS=(e,t)=>{var n=e.font;return n?oS[n]?t.withTextFontFamily(oS[n]):sS[n]?t.withTextFontWeight(sS[n]):n===`\\emph`?t.fontShape===`textit`?t.withTextFontShape(`textup`):t.withTextFontShape(`textit`):t.withTextFontShape(cS[n]):t};Z({type:`text`,names:[`\\text`,`\\textrm`,`\\textsf`,`\\texttt`,`\\textnormal`,`\\textbf`,`\\textmd`,`\\textit`,`\\textup`,`\\emph`],props:{numArgs:1,argTypes:[`text`],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`text`,mode:n.mode,body:Dy(i),font:r}},htmlBuilder(e,t){var n=lS(e,t);return X([`mord`,`text`],My(e.body,n,!0),n)},mathmlBuilder(e,t){var n=lS(e,t);return Zy(e.body,n)}}),Z({type:`underline`,names:[`\\underline`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`underline`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Ry(e.body,t),r=oy(`underline-line`,t),i=t.fontMetrics().defaultRuleThickness;return X([`mord`,`underline`],[dy({positionType:`top`,positionData:n.height,children:[{type:`kern`,size:i},{type:`elem`,elem:r},{type:`kern`,size:3*i},{type:`elem`,elem:n}]})],t)},mathmlBuilder(e,t){var n=new Q(`mo`,[new Hy(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Q(`munder`,[Qy(e.body,t),n]);return r.setAttribute(`accentunder`,`true`),r}}),Z({type:`vcenter`,names:[`\\vcenter`],props:{numArgs:1,argTypes:[`original`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`vcenter`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Ry(e.body,t),r=t.fontMetrics().axisHeight;return dy({positionType:`shift`,positionData:.5*(n.height-r-(n.depth+r)),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){return new Q(`mrow`,[new Q(`mpadded`,[Qy(e.body,t)],[`vcenter`])])}}),Z({type:`verb`,names:[`\\verb`],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new R(`\\verb ended by end of line instead of matching delimiter`)},htmlBuilder(e,t){for(var n=uS(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o===`~`&&(o=`\\textasciitilde`),r.push(Qv(o,`Typewriter-Regular`,e.mode,i,[`mord`,`texttt`]))}return X([`mord`,`text`].concat(i.sizingClasses(t)),ry(r),i)},mathmlBuilder(e,t){var n=new Q(`mtext`,[new Hy(uS(e))]);return n.setAttribute(`mathvariant`,`monospace`),n}});var uS=e=>e.body.replace(/ /g,e.star?`␣`:`\xA0`),dS=Sy,fS=`[ \r
	]`,pS=`\\\\[a-zA-Z@]+`,mS=`\\\\[^\ud800-\udfff]`,hS=`(`+pS+`)`+fS+`*`,gS=`\\\\(
|[ \r	]+
?)[ \r	]*`,_S=`[̀-ͯ]`,vS=RegExp(_S+`+$`),yS=`(`+fS+`+)|`+(gS+`|`)+`([!-\\[\\]-‧‪-퟿豈-￿]`+(_S+`*`)+`|[\ud800-\udbff][\udc00-\udfff]`+(_S+`*`)+`|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5`+(`|`+hS)+(`|`+mS+`)`),bS=class{constructor(e,t){this.input=e,this.settings=t,this.tokenRegex=new RegExp(yS,`g`),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Sx(`EOF`,new xx(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new R(`Unexpected character: '`+e[t]+`'`,new Sx(e[t],new xx(this,t,t+1)));var r=n[6]||n[3]||(n[2]?`\\ `:` `);if(this.catcodes[r]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict(`commentAtEnd`,`% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)):this.tokenRegex.lastIndex=i+1,this.lex()}return new Sx(r,new xx(this,t,this.tokenRegex.lastIndex))}},xS=class{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new R(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}},SS=bx;$(`\\noexpand`,function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}}),$(`\\expandafter`,function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}}),$(`\\@firstoftwo`,function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),$(`\\@secondoftwo`,function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),$(`\\@ifnextchar`,function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),$(`\\@ifstar`,`\\@ifnextchar *{\\@firstoftwo{#1}}`),$(`\\TextOrMath`,function(e){var t=e.consumeArgs(2);return e.mode===`text`?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var CS={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};$(`\\char`,function(e){var t=e.popToken(),n,r=0;if(t.text===`'`)n=8,t=e.popToken();else if(t.text===`"`)n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]===`\\`)r=t.text.charCodeAt(1);else if(t.text===`EOF`)throw new R("\\char` missing argument");else r=t.text.charCodeAt(0);else n=10;if(n){if(r=CS[t.text],r==null||r>=n)throw new R(`Invalid base-`+n+` digit `+t.text);for(var i;(i=CS[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return`\\@char{`+r+`}`});var wS=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new R(`\\newcommand's first argument must be a macro name`);var a=i[0].text,o=e.isDefined(a);if(o&&!t)throw new R(`\\newcommand{`+a+`} attempting to redefine `+(a+`; use \\renewcommand`));if(!o&&!n)throw new R(`\\renewcommand{`+a+`} when command `+a+` does not yet exist; use \\newcommand`);var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text===`[`){for(var c=``,l=e.expandNextToken();l.text!==`]`&&l.text!==`EOF`;)c+=l.text,l=e.expandNextToken();if(!c.match(/^\s*[0-9]+\s*$/))throw new R(`Invalid number of arguments: `+c);s=parseInt(c),i=e.consumeArg().tokens}return o&&r||e.macros.set(a,{tokens:i,numArgs:s}),``};$(`\\newcommand`,e=>wS(e,!1,!0,!1)),$(`\\renewcommand`,e=>wS(e,!0,!1,!1)),$(`\\providecommand`,e=>wS(e,!0,!0,!0)),$(`\\message`,e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(e=>e.text).join(``)),``}),$(`\\errmessage`,e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(e=>e.text).join(``)),``}),$(`\\show`,e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),dS[n],Cv.math[n],Cv.text[n]),``}),$(`\\bgroup`,`{`),$(`\\egroup`,`}`),$(`~`,`\\nobreakspace`),$(`\\lq`,"`"),$(`\\rq`,`'`),$(`\\aa`,`\\r a`),$(`\\AA`,`\\r A`),$(`\\textcopyright`,"\\html@mathml{\\textcircled{c}}{\\char`©}"),$(`\\copyright`,`\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`),$(`\\textregistered`,"\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),$(`ℬ`,`\\mathscr{B}`),$(`ℰ`,`\\mathscr{E}`),$(`ℱ`,`\\mathscr{F}`),$(`ℋ`,`\\mathscr{H}`),$(`ℐ`,`\\mathscr{I}`),$(`ℒ`,`\\mathscr{L}`),$(`ℳ`,`\\mathscr{M}`),$(`ℛ`,`\\mathscr{R}`),$(`ℭ`,`\\mathfrak{C}`),$(`ℌ`,`\\mathfrak{H}`),$(`ℨ`,`\\mathfrak{Z}`),$(`\\Bbbk`,`\\Bbb{k}`),$(`\\llap`,`\\mathllap{\\textrm{#1}}`),$(`\\rlap`,`\\mathrlap{\\textrm{#1}}`),$(`\\clap`,`\\mathclap{\\textrm{#1}}`),$(`\\mathstrut`,`\\vphantom{(}`),$(`\\underbar`,`\\underline{\\text{#1}}`),$(`\\not`,`\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`),$(`\\neq`,"\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),$(`\\ne`,`\\neq`),$(`≠`,`\\neq`),$(`\\notin`,"\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),$(`∉`,`\\notin`),$(`≘`,"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),$(`≙`,"\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),$(`≚`,"\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),$(`≛`,"\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),$(`≝`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),$(`≞`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),$(`≟`,"\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),$(`⟂`,`\\perp`),$(`‼`,`\\mathclose{!\\mkern-0.8mu!}`),$(`∌`,`\\notni`),$(`⌜`,`\\ulcorner`),$(`⌝`,`\\urcorner`),$(`⌞`,`\\llcorner`),$(`⌟`,`\\lrcorner`),$(`©`,`\\copyright`),$(`®`,`\\textregistered`),$(`\\ulcorner`,`\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),$(`\\urcorner`,`\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),$(`\\llcorner`,`\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),$(`\\lrcorner`,`\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),$(`\\vdots`,`{\\varvdots\\rule{0pt}{15pt}}`),$(`⋮`,`\\vdots`),$(`\\varGamma`,`\\mathit{\\Gamma}`),$(`\\varDelta`,`\\mathit{\\Delta}`),$(`\\varTheta`,`\\mathit{\\Theta}`),$(`\\varLambda`,`\\mathit{\\Lambda}`),$(`\\varXi`,`\\mathit{\\Xi}`),$(`\\varPi`,`\\mathit{\\Pi}`),$(`\\varSigma`,`\\mathit{\\Sigma}`),$(`\\varUpsilon`,`\\mathit{\\Upsilon}`),$(`\\varPhi`,`\\mathit{\\Phi}`),$(`\\varPsi`,`\\mathit{\\Psi}`),$(`\\varOmega`,`\\mathit{\\Omega}`),$(`\\substack`,`\\begin{subarray}{c}#1\\end{subarray}`),$(`\\colon`,`\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`),$(`\\boxed`,`\\fbox{$\\displaystyle{#1}$}`),$(`\\iff`,`\\DOTSB\\;\\Longleftrightarrow\\;`),$(`\\implies`,`\\DOTSB\\;\\Longrightarrow\\;`),$(`\\impliedby`,`\\DOTSB\\;\\Longleftarrow\\;`),$(`\\dddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),$(`\\ddddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);var TS={",":`\\dotsc`,"\\not":`\\dotsb`,"+":`\\dotsb`,"=":`\\dotsb`,"<":`\\dotsb`,">":`\\dotsb`,"-":`\\dotsb`,"*":`\\dotsb`,":":`\\dotsb`,"\\DOTSB":`\\dotsb`,"\\coprod":`\\dotsb`,"\\bigvee":`\\dotsb`,"\\bigwedge":`\\dotsb`,"\\biguplus":`\\dotsb`,"\\bigcap":`\\dotsb`,"\\bigcup":`\\dotsb`,"\\prod":`\\dotsb`,"\\sum":`\\dotsb`,"\\bigotimes":`\\dotsb`,"\\bigoplus":`\\dotsb`,"\\bigodot":`\\dotsb`,"\\bigsqcup":`\\dotsb`,"\\And":`\\dotsb`,"\\longrightarrow":`\\dotsb`,"\\Longrightarrow":`\\dotsb`,"\\longleftarrow":`\\dotsb`,"\\Longleftarrow":`\\dotsb`,"\\longleftrightarrow":`\\dotsb`,"\\Longleftrightarrow":`\\dotsb`,"\\mapsto":`\\dotsb`,"\\longmapsto":`\\dotsb`,"\\hookrightarrow":`\\dotsb`,"\\doteq":`\\dotsb`,"\\mathbin":`\\dotsb`,"\\mathrel":`\\dotsb`,"\\relbar":`\\dotsb`,"\\Relbar":`\\dotsb`,"\\xrightarrow":`\\dotsb`,"\\xleftarrow":`\\dotsb`,"\\DOTSI":`\\dotsi`,"\\int":`\\dotsi`,"\\oint":`\\dotsi`,"\\iint":`\\dotsi`,"\\iiint":`\\dotsi`,"\\iiiint":`\\dotsi`,"\\idotsint":`\\dotsi`,"\\DOTSX":`\\dotsx`},ES=new Set([`bin`,`rel`]);$(`\\dots`,function(e){var t=`\\dotso`,n=e.expandAfterFuture().text;return n in TS?t=TS[n]:(n.slice(0,4)===`\\not`||n in Cv.math&&ES.has(Cv.math[n].group))&&(t=`\\dotsb`),t});var DS={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};$(`\\dotso`,function(e){return e.future().text in DS?`\\ldots\\,`:`\\ldots`}),$(`\\dotsc`,function(e){var t=e.future().text;return t in DS&&t!==`,`?`\\ldots\\,`:`\\ldots`}),$(`\\cdots`,function(e){return e.future().text in DS?`\\@cdots\\,`:`\\@cdots`}),$(`\\dotsb`,`\\cdots`),$(`\\dotsm`,`\\cdots`),$(`\\dotsi`,`\\!\\cdots`),$(`\\dotsx`,`\\ldots\\,`),$(`\\DOTSI`,`\\relax`),$(`\\DOTSB`,`\\relax`),$(`\\DOTSX`,`\\relax`),$(`\\tmspace`,`\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),$(`\\,`,`\\tmspace+{3mu}{.1667em}`),$(`\\thinspace`,`\\,`),$(`\\>`,`\\mskip{4mu}`),$(`\\:`,`\\tmspace+{4mu}{.2222em}`),$(`\\medspace`,`\\:`),$(`\\;`,`\\tmspace+{5mu}{.2777em}`),$(`\\thickspace`,`\\;`),$(`\\!`,`\\tmspace-{3mu}{.1667em}`),$(`\\negthinspace`,`\\!`),$(`\\negmedspace`,`\\tmspace-{4mu}{.2222em}`),$(`\\negthickspace`,`\\tmspace-{5mu}{.277em}`),$(`\\enspace`,`\\kern.5em `),$(`\\enskip`,`\\hskip.5em\\relax`),$(`\\quad`,`\\hskip1em\\relax`),$(`\\qquad`,`\\hskip2em\\relax`),$(`\\tag`,`\\@ifstar\\tag@literal\\tag@paren`),$(`\\tag@paren`,`\\tag@literal{({#1})}`),$(`\\tag@literal`,e=>{if(e.macros.get(`\\df@tag`))throw new R(`Multiple \\tag`);return`\\gdef\\df@tag{\\text{#1}}`}),$(`\\bmod`,`\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`),$(`\\pod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`),$(`\\pmod`,`\\pod{{\\rm mod}\\mkern6mu#1}`),$(`\\mod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`),$(`\\newline`,`\\\\\\relax`),$(`\\TeX`,`\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);var OS=z(mv[`Main-Regular`][84][1]-.7*mv[`Main-Regular`][65][1]);$(`\\LaTeX`,`\\textrm{\\html@mathml{`+(`L\\kern-.36em\\raisebox{`+OS+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{LaTeX}}`),$(`\\KaTeX`,`\\textrm{\\html@mathml{`+(`K\\kern-.17em\\raisebox{`+OS+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{KaTeX}}`),$(`\\hspace`,`\\@ifstar\\@hspacer\\@hspace`),$(`\\@hspace`,`\\hskip #1\\relax`),$(`\\@hspacer`,`\\rule{0pt}{0pt}\\hskip #1\\relax`),$(`\\ordinarycolon`,`:`),$(`\\vcentcolon`,`\\mathrel{\\mathop\\ordinarycolon}`),$(`\\dblcolon`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`),$(`\\coloneqq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`),$(`\\Coloneqq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`),$(`\\coloneq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`),$(`\\Coloneq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`),$(`\\eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`),$(`\\Eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`),$(`\\eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`),$(`\\Eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`),$(`\\colonapprox`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`),$(`\\Colonapprox`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`),$(`\\colonsim`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`),$(`\\Colonsim`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`),$(`∷`,`\\dblcolon`),$(`∹`,`\\eqcolon`),$(`≔`,`\\coloneqq`),$(`≕`,`\\eqqcolon`),$(`⩴`,`\\Coloneqq`),$(`\\ratio`,`\\vcentcolon`),$(`\\coloncolon`,`\\dblcolon`),$(`\\colonequals`,`\\coloneqq`),$(`\\coloncolonequals`,`\\Coloneqq`),$(`\\equalscolon`,`\\eqqcolon`),$(`\\equalscoloncolon`,`\\Eqqcolon`),$(`\\colonminus`,`\\coloneq`),$(`\\coloncolonminus`,`\\Coloneq`),$(`\\minuscolon`,`\\eqcolon`),$(`\\minuscoloncolon`,`\\Eqcolon`),$(`\\coloncolonapprox`,`\\Colonapprox`),$(`\\coloncolonsim`,`\\Colonsim`),$(`\\simcolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\simcoloncolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\approxcolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\approxcoloncolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\notni`,"\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),$(`\\limsup`,`\\DOTSB\\operatorname*{lim\\,sup}`),$(`\\liminf`,`\\DOTSB\\operatorname*{lim\\,inf}`),$(`\\injlim`,`\\DOTSB\\operatorname*{inj\\,lim}`),$(`\\projlim`,`\\DOTSB\\operatorname*{proj\\,lim}`),$(`\\varlimsup`,`\\DOTSB\\operatorname*{\\overline{lim}}`),$(`\\varliminf`,`\\DOTSB\\operatorname*{\\underline{lim}}`),$(`\\varinjlim`,`\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),$(`\\varprojlim`,`\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),$(`\\gvertneqq`,`\\html@mathml{\\@gvertneqq}{≩}`),$(`\\lvertneqq`,`\\html@mathml{\\@lvertneqq}{≨}`),$(`\\ngeqq`,`\\html@mathml{\\@ngeqq}{≱}`),$(`\\ngeqslant`,`\\html@mathml{\\@ngeqslant}{≱}`),$(`\\nleqq`,`\\html@mathml{\\@nleqq}{≰}`),$(`\\nleqslant`,`\\html@mathml{\\@nleqslant}{≰}`),$(`\\nshortmid`,`\\html@mathml{\\@nshortmid}{∤}`),$(`\\nshortparallel`,`\\html@mathml{\\@nshortparallel}{∦}`),$(`\\nsubseteqq`,`\\html@mathml{\\@nsubseteqq}{⊈}`),$(`\\nsupseteqq`,`\\html@mathml{\\@nsupseteqq}{⊉}`),$(`\\varsubsetneq`,`\\html@mathml{\\@varsubsetneq}{⊊}`),$(`\\varsubsetneqq`,`\\html@mathml{\\@varsubsetneqq}{⫋}`),$(`\\varsupsetneq`,`\\html@mathml{\\@varsupsetneq}{⊋}`),$(`\\varsupsetneqq`,`\\html@mathml{\\@varsupsetneqq}{⫌}`),$(`\\imath`,`\\html@mathml{\\@imath}{ı}`),$(`\\jmath`,`\\html@mathml{\\@jmath}{ȷ}`),$(`\\llbracket`,"\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),$(`\\rrbracket`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),$(`⟦`,`\\llbracket`),$(`⟧`,`\\rrbracket`),$(`\\lBrace`,"\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),$(`\\rBrace`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),$(`⦃`,`\\lBrace`),$(`⦄`,`\\rBrace`),$(`\\minuso`,"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),$(`⦵`,`\\minuso`),$(`\\darr`,`\\downarrow`),$(`\\dArr`,`\\Downarrow`),$(`\\Darr`,`\\Downarrow`),$(`\\lang`,`\\langle`),$(`\\rang`,`\\rangle`),$(`\\uarr`,`\\uparrow`),$(`\\uArr`,`\\Uparrow`),$(`\\Uarr`,`\\Uparrow`),$(`\\N`,`\\mathbb{N}`),$(`\\R`,`\\mathbb{R}`),$(`\\Z`,`\\mathbb{Z}`),$(`\\alef`,`\\aleph`),$(`\\alefsym`,`\\aleph`),$(`\\Alpha`,`\\mathrm{A}`),$(`\\Beta`,`\\mathrm{B}`),$(`\\bull`,`\\bullet`),$(`\\Chi`,`\\mathrm{X}`),$(`\\clubs`,`\\clubsuit`),$(`\\cnums`,`\\mathbb{C}`),$(`\\Complex`,`\\mathbb{C}`),$(`\\Dagger`,`\\ddagger`),$(`\\diamonds`,`\\diamondsuit`),$(`\\empty`,`\\emptyset`),$(`\\Epsilon`,`\\mathrm{E}`),$(`\\Eta`,`\\mathrm{H}`),$(`\\exist`,`\\exists`),$(`\\harr`,`\\leftrightarrow`),$(`\\hArr`,`\\Leftrightarrow`),$(`\\Harr`,`\\Leftrightarrow`),$(`\\hearts`,`\\heartsuit`),$(`\\image`,`\\Im`),$(`\\infin`,`\\infty`),$(`\\Iota`,`\\mathrm{I}`),$(`\\isin`,`\\in`),$(`\\Kappa`,`\\mathrm{K}`),$(`\\larr`,`\\leftarrow`),$(`\\lArr`,`\\Leftarrow`),$(`\\Larr`,`\\Leftarrow`),$(`\\lrarr`,`\\leftrightarrow`),$(`\\lrArr`,`\\Leftrightarrow`),$(`\\Lrarr`,`\\Leftrightarrow`),$(`\\Mu`,`\\mathrm{M}`),$(`\\natnums`,`\\mathbb{N}`),$(`\\Nu`,`\\mathrm{N}`),$(`\\Omicron`,`\\mathrm{O}`),$(`\\plusmn`,`\\pm`),$(`\\rarr`,`\\rightarrow`),$(`\\rArr`,`\\Rightarrow`),$(`\\Rarr`,`\\Rightarrow`),$(`\\real`,`\\Re`),$(`\\reals`,`\\mathbb{R}`),$(`\\Reals`,`\\mathbb{R}`),$(`\\Rho`,`\\mathrm{P}`),$(`\\sdot`,`\\cdot`),$(`\\sect`,`\\S`),$(`\\spades`,`\\spadesuit`),$(`\\sub`,`\\subset`),$(`\\sube`,`\\subseteq`),$(`\\supe`,`\\supseteq`),$(`\\Tau`,`\\mathrm{T}`),$(`\\thetasym`,`\\vartheta`),$(`\\weierp`,`\\wp`),$(`\\Zeta`,`\\mathrm{Z}`),$(`\\argmin`,`\\DOTSB\\operatorname*{arg\\,min}`),$(`\\argmax`,`\\DOTSB\\operatorname*{arg\\,max}`),$(`\\plim`,`\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),$(`\\bra`,`\\mathinner{\\langle{#1}|}`),$(`\\ket`,`\\mathinner{|{#1}\\rangle}`),$(`\\braket`,`\\mathinner{\\langle{#1}\\rangle}`),$(`\\Bra`,`\\left\\langle#1\\right|`),$(`\\Ket`,`\\left|#1\\right\\rangle`);var kS=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get(`|`),s=t.macros.get(`\\|`);t.macros.beginGroup();var c=t=>n=>{e&&(n.macros.set(`|`,o),i.length&&n.macros.set(`\\|`,s));var a=t;return!t&&i.length&&n.future().text===`|`&&(n.popToken(),a=!0),{tokens:a?i:r,numArgs:0}};t.macros.set(`|`,c(!1)),i.length&&t.macros.set(`\\|`,c(!0));var l=t.consumeArg().tokens,u=t.expandTokens([...a,...l,...n]);return t.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};$(`\\bra@ket`,kS(!1)),$(`\\bra@set`,kS(!0)),$(`\\Braket`,`\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`),$(`\\Set`,`\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`),$(`\\set`,`\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),$(`\\angln`,`{\\angl n}`),$(`\\blue`,`\\textcolor{##6495ed}{#1}`),$(`\\orange`,`\\textcolor{##ffa500}{#1}`),$(`\\pink`,`\\textcolor{##ff00af}{#1}`),$(`\\red`,`\\textcolor{##df0030}{#1}`),$(`\\green`,`\\textcolor{##28ae7b}{#1}`),$(`\\gray`,`\\textcolor{gray}{#1}`),$(`\\purple`,`\\textcolor{##9d38bd}{#1}`),$(`\\blueA`,`\\textcolor{##ccfaff}{#1}`),$(`\\blueB`,`\\textcolor{##80f6ff}{#1}`),$(`\\blueC`,`\\textcolor{##63d9ea}{#1}`),$(`\\blueD`,`\\textcolor{##11accd}{#1}`),$(`\\blueE`,`\\textcolor{##0c7f99}{#1}`),$(`\\tealA`,`\\textcolor{##94fff5}{#1}`),$(`\\tealB`,`\\textcolor{##26edd5}{#1}`),$(`\\tealC`,`\\textcolor{##01d1c1}{#1}`),$(`\\tealD`,`\\textcolor{##01a995}{#1}`),$(`\\tealE`,`\\textcolor{##208170}{#1}`),$(`\\greenA`,`\\textcolor{##b6ffb0}{#1}`),$(`\\greenB`,`\\textcolor{##8af281}{#1}`),$(`\\greenC`,`\\textcolor{##74cf70}{#1}`),$(`\\greenD`,`\\textcolor{##1fab54}{#1}`),$(`\\greenE`,`\\textcolor{##0d923f}{#1}`),$(`\\goldA`,`\\textcolor{##ffd0a9}{#1}`),$(`\\goldB`,`\\textcolor{##ffbb71}{#1}`),$(`\\goldC`,`\\textcolor{##ff9c39}{#1}`),$(`\\goldD`,`\\textcolor{##e07d10}{#1}`),$(`\\goldE`,`\\textcolor{##a75a05}{#1}`),$(`\\redA`,`\\textcolor{##fca9a9}{#1}`),$(`\\redB`,`\\textcolor{##ff8482}{#1}`),$(`\\redC`,`\\textcolor{##f9685d}{#1}`),$(`\\redD`,`\\textcolor{##e84d39}{#1}`),$(`\\redE`,`\\textcolor{##bc2612}{#1}`),$(`\\maroonA`,`\\textcolor{##ffbde0}{#1}`),$(`\\maroonB`,`\\textcolor{##ff92c6}{#1}`),$(`\\maroonC`,`\\textcolor{##ed5fa6}{#1}`),$(`\\maroonD`,`\\textcolor{##ca337c}{#1}`),$(`\\maroonE`,`\\textcolor{##9e034e}{#1}`),$(`\\purpleA`,`\\textcolor{##ddd7ff}{#1}`),$(`\\purpleB`,`\\textcolor{##c6b9fc}{#1}`),$(`\\purpleC`,`\\textcolor{##aa87ff}{#1}`),$(`\\purpleD`,`\\textcolor{##7854ab}{#1}`),$(`\\purpleE`,`\\textcolor{##543b78}{#1}`),$(`\\mintA`,`\\textcolor{##f5f9e8}{#1}`),$(`\\mintB`,`\\textcolor{##edf2df}{#1}`),$(`\\mintC`,`\\textcolor{##e0e5cc}{#1}`),$(`\\grayA`,`\\textcolor{##f6f7f7}{#1}`),$(`\\grayB`,`\\textcolor{##f0f1f2}{#1}`),$(`\\grayC`,`\\textcolor{##e3e5e6}{#1}`),$(`\\grayD`,`\\textcolor{##d6d8da}{#1}`),$(`\\grayE`,`\\textcolor{##babec2}{#1}`),$(`\\grayF`,`\\textcolor{##888d93}{#1}`),$(`\\grayG`,`\\textcolor{##626569}{#1}`),$(`\\grayH`,`\\textcolor{##3b3e40}{#1}`),$(`\\grayI`,`\\textcolor{##21242c}{#1}`),$(`\\kaBlue`,`\\textcolor{##314453}{#1}`),$(`\\kaGreen`,`\\textcolor{##71B307}{#1}`);var AS={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},jS=class{constructor(e,t,n){this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new xS(SS,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new bS(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!==`[`)return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg([`]`])}else ({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new Sx(`EOF`,n.loc)),this.pushTokens(r),new Sx(``,xx.range(t,n))}consumeSpaces(){for(;this.future().text===` `;)this.stack.pop()}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),i,a=0,o=0;do{if(i=this.popToken(),t.push(i),i.text===`{`)++a;else if(i.text===`}`){if(--a,a===-1)throw new R(`Extra }`,i)}else if(i.text===`EOF`)throw new R(`Unexpected end of input in a macro argument, expected '`+(e&&n?e[o]:`}`)+`'`,i);if(e&&n)if((a===0||a===1&&e[o]===`{`)&&i.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text===`{`&&t[t.length-1].text===`}`&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new R(`The length of delimiters doesn't match the number of args!`);for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new R(`Use of the macro doesn't match its definition`,i)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new R(`Too many expansions: infinite loop or need to increase maxExpand setting`)}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]===`\\`&&!this.isDefined(n))throw new R(`Undefined control sequence: `+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text===`#`){if(o===0)throw new R(`Incomplete placeholder at end of macro body`,s);if(s=i[--o],s.text===`#`)i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...a[s.text-1]);else throw new R(`Not a valid argument number`,s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text=`\\relax`),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Sx(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&=(r.noexpand=!1,!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(e=>e.text).join(``)}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t==`function`?t(this):t;if(typeof r==`string`){var i=0;if(r.includes(`#`))for(var a=r.replace(/##/g,``);a.includes(`#`+(i+1));)++i;for(var o=new bS(r,this.settings),s=[],c=o.lex();c.text!==`EOF`;)s.push(c),c=o.lex();return s.reverse(),{tokens:s,numArgs:i}}return r}isDefined(e){return this.macros.has(e)||dS.hasOwnProperty(e)||Cv.math.hasOwnProperty(e)||Cv.text.hasOwnProperty(e)||AS.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t==null?dS.hasOwnProperty(e)&&!dS[e].primitive:typeof t==`string`||typeof t==`function`||!t.unexpandable}},MS=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,NS=Object.freeze({"₊":`+`,"₋":`-`,"₌":`=`,"₍":`(`,"₎":`)`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,ₐ:`a`,ₑ:`e`,ₕ:`h`,ᵢ:`i`,ⱼ:`j`,ₖ:`k`,ₗ:`l`,ₘ:`m`,ₙ:`n`,ₒ:`o`,ₚ:`p`,ᵣ:`r`,ₛ:`s`,ₜ:`t`,ᵤ:`u`,ᵥ:`v`,ₓ:`x`,ᵦ:`β`,ᵧ:`γ`,ᵨ:`ρ`,ᵩ:`ϕ`,ᵪ:`χ`,"⁺":`+`,"⁻":`-`,"⁼":`=`,"⁽":`(`,"⁾":`)`,"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,ᴬ:`A`,ᴮ:`B`,ᴰ:`D`,ᴱ:`E`,ᴳ:`G`,ᴴ:`H`,ᴵ:`I`,ᴶ:`J`,ᴷ:`K`,ᴸ:`L`,ᴹ:`M`,ᴺ:`N`,ᴼ:`O`,ᴾ:`P`,ᴿ:`R`,ᵀ:`T`,ᵁ:`U`,ⱽ:`V`,ᵂ:`W`,ᵃ:`a`,ᵇ:`b`,ᶜ:`c`,ᵈ:`d`,ᵉ:`e`,ᶠ:`f`,ᵍ:`g`,ʰ:`h`,ⁱ:`i`,ʲ:`j`,ᵏ:`k`,ˡ:`l`,ᵐ:`m`,ⁿ:`n`,ᵒ:`o`,ᵖ:`p`,ʳ:`r`,ˢ:`s`,ᵗ:`t`,ᵘ:`u`,ᵛ:`v`,ʷ:`w`,ˣ:`x`,ʸ:`y`,ᶻ:`z`,ᵝ:`β`,ᵞ:`γ`,ᵟ:`δ`,ᵠ:`ϕ`,ᵡ:`χ`,ᶿ:`θ`}),PS={"́":{text:`\\'`,math:`\\acute`},"̀":{text:"\\`",math:`\\grave`},"̈":{text:`\\"`,math:`\\ddot`},"̃":{text:`\\~`,math:`\\tilde`},"̄":{text:`\\=`,math:`\\bar`},"̆":{text:`\\u`,math:`\\breve`},"̌":{text:`\\v`,math:`\\check`},"̂":{text:`\\^`,math:`\\hat`},"̇":{text:`\\.`,math:`\\dot`},"̊":{text:`\\r`,math:`\\mathring`},"̋":{text:`\\H`},"̧":{text:`\\c`}},FS={á:`á`,à:`à`,ä:`ä`,ǟ:`ǟ`,ã:`ã`,ā:`ā`,ă:`ă`,ắ:`ắ`,ằ:`ằ`,ẵ:`ẵ`,ǎ:`ǎ`,â:`â`,ấ:`ấ`,ầ:`ầ`,ẫ:`ẫ`,ȧ:`ȧ`,ǡ:`ǡ`,å:`å`,ǻ:`ǻ`,ḃ:`ḃ`,ć:`ć`,ḉ:`ḉ`,č:`č`,ĉ:`ĉ`,ċ:`ċ`,ç:`ç`,ď:`ď`,ḋ:`ḋ`,ḑ:`ḑ`,é:`é`,è:`è`,ë:`ë`,ẽ:`ẽ`,ē:`ē`,ḗ:`ḗ`,ḕ:`ḕ`,ĕ:`ĕ`,ḝ:`ḝ`,ě:`ě`,ê:`ê`,ế:`ế`,ề:`ề`,ễ:`ễ`,ė:`ė`,ȩ:`ȩ`,ḟ:`ḟ`,ǵ:`ǵ`,ḡ:`ḡ`,ğ:`ğ`,ǧ:`ǧ`,ĝ:`ĝ`,ġ:`ġ`,ģ:`ģ`,ḧ:`ḧ`,ȟ:`ȟ`,ĥ:`ĥ`,ḣ:`ḣ`,ḩ:`ḩ`,í:`í`,ì:`ì`,ï:`ï`,ḯ:`ḯ`,ĩ:`ĩ`,ī:`ī`,ĭ:`ĭ`,ǐ:`ǐ`,î:`î`,ǰ:`ǰ`,ĵ:`ĵ`,ḱ:`ḱ`,ǩ:`ǩ`,ķ:`ķ`,ĺ:`ĺ`,ľ:`ľ`,ļ:`ļ`,ḿ:`ḿ`,ṁ:`ṁ`,ń:`ń`,ǹ:`ǹ`,ñ:`ñ`,ň:`ň`,ṅ:`ṅ`,ņ:`ņ`,ó:`ó`,ò:`ò`,ö:`ö`,ȫ:`ȫ`,õ:`õ`,ṍ:`ṍ`,ṏ:`ṏ`,ȭ:`ȭ`,ō:`ō`,ṓ:`ṓ`,ṑ:`ṑ`,ŏ:`ŏ`,ǒ:`ǒ`,ô:`ô`,ố:`ố`,ồ:`ồ`,ỗ:`ỗ`,ȯ:`ȯ`,ȱ:`ȱ`,ő:`ő`,ṕ:`ṕ`,ṗ:`ṗ`,ŕ:`ŕ`,ř:`ř`,ṙ:`ṙ`,ŗ:`ŗ`,ś:`ś`,ṥ:`ṥ`,š:`š`,ṧ:`ṧ`,ŝ:`ŝ`,ṡ:`ṡ`,ş:`ş`,ẗ:`ẗ`,ť:`ť`,ṫ:`ṫ`,ţ:`ţ`,ú:`ú`,ù:`ù`,ü:`ü`,ǘ:`ǘ`,ǜ:`ǜ`,ǖ:`ǖ`,ǚ:`ǚ`,ũ:`ũ`,ṹ:`ṹ`,ū:`ū`,ṻ:`ṻ`,ŭ:`ŭ`,ǔ:`ǔ`,û:`û`,ů:`ů`,ű:`ű`,ṽ:`ṽ`,ẃ:`ẃ`,ẁ:`ẁ`,ẅ:`ẅ`,ŵ:`ŵ`,ẇ:`ẇ`,ẘ:`ẘ`,ẍ:`ẍ`,ẋ:`ẋ`,ý:`ý`,ỳ:`ỳ`,ÿ:`ÿ`,ỹ:`ỹ`,ȳ:`ȳ`,ŷ:`ŷ`,ẏ:`ẏ`,ẙ:`ẙ`,ź:`ź`,ž:`ž`,ẑ:`ẑ`,ż:`ż`,Á:`Á`,À:`À`,Ä:`Ä`,Ǟ:`Ǟ`,Ã:`Ã`,Ā:`Ā`,Ă:`Ă`,Ắ:`Ắ`,Ằ:`Ằ`,Ẵ:`Ẵ`,Ǎ:`Ǎ`,Â:`Â`,Ấ:`Ấ`,Ầ:`Ầ`,Ẫ:`Ẫ`,Ȧ:`Ȧ`,Ǡ:`Ǡ`,Å:`Å`,Ǻ:`Ǻ`,Ḃ:`Ḃ`,Ć:`Ć`,Ḉ:`Ḉ`,Č:`Č`,Ĉ:`Ĉ`,Ċ:`Ċ`,Ç:`Ç`,Ď:`Ď`,Ḋ:`Ḋ`,Ḑ:`Ḑ`,É:`É`,È:`È`,Ë:`Ë`,Ẽ:`Ẽ`,Ē:`Ē`,Ḗ:`Ḗ`,Ḕ:`Ḕ`,Ĕ:`Ĕ`,Ḝ:`Ḝ`,Ě:`Ě`,Ê:`Ê`,Ế:`Ế`,Ề:`Ề`,Ễ:`Ễ`,Ė:`Ė`,Ȩ:`Ȩ`,Ḟ:`Ḟ`,Ǵ:`Ǵ`,Ḡ:`Ḡ`,Ğ:`Ğ`,Ǧ:`Ǧ`,Ĝ:`Ĝ`,Ġ:`Ġ`,Ģ:`Ģ`,Ḧ:`Ḧ`,Ȟ:`Ȟ`,Ĥ:`Ĥ`,Ḣ:`Ḣ`,Ḩ:`Ḩ`,Í:`Í`,Ì:`Ì`,Ï:`Ï`,Ḯ:`Ḯ`,Ĩ:`Ĩ`,Ī:`Ī`,Ĭ:`Ĭ`,Ǐ:`Ǐ`,Î:`Î`,İ:`İ`,Ĵ:`Ĵ`,Ḱ:`Ḱ`,Ǩ:`Ǩ`,Ķ:`Ķ`,Ĺ:`Ĺ`,Ľ:`Ľ`,Ļ:`Ļ`,Ḿ:`Ḿ`,Ṁ:`Ṁ`,Ń:`Ń`,Ǹ:`Ǹ`,Ñ:`Ñ`,Ň:`Ň`,Ṅ:`Ṅ`,Ņ:`Ņ`,Ó:`Ó`,Ò:`Ò`,Ö:`Ö`,Ȫ:`Ȫ`,Õ:`Õ`,Ṍ:`Ṍ`,Ṏ:`Ṏ`,Ȭ:`Ȭ`,Ō:`Ō`,Ṓ:`Ṓ`,Ṑ:`Ṑ`,Ŏ:`Ŏ`,Ǒ:`Ǒ`,Ô:`Ô`,Ố:`Ố`,Ồ:`Ồ`,Ỗ:`Ỗ`,Ȯ:`Ȯ`,Ȱ:`Ȱ`,Ő:`Ő`,Ṕ:`Ṕ`,Ṗ:`Ṗ`,Ŕ:`Ŕ`,Ř:`Ř`,Ṙ:`Ṙ`,Ŗ:`Ŗ`,Ś:`Ś`,Ṥ:`Ṥ`,Š:`Š`,Ṧ:`Ṧ`,Ŝ:`Ŝ`,Ṡ:`Ṡ`,Ş:`Ş`,Ť:`Ť`,Ṫ:`Ṫ`,Ţ:`Ţ`,Ú:`Ú`,Ù:`Ù`,Ü:`Ü`,Ǘ:`Ǘ`,Ǜ:`Ǜ`,Ǖ:`Ǖ`,Ǚ:`Ǚ`,Ũ:`Ũ`,Ṹ:`Ṹ`,Ū:`Ū`,Ṻ:`Ṻ`,Ŭ:`Ŭ`,Ǔ:`Ǔ`,Û:`Û`,Ů:`Ů`,Ű:`Ű`,Ṽ:`Ṽ`,Ẃ:`Ẃ`,Ẁ:`Ẁ`,Ẅ:`Ẅ`,Ŵ:`Ŵ`,Ẇ:`Ẇ`,Ẍ:`Ẍ`,Ẋ:`Ẋ`,Ý:`Ý`,Ỳ:`Ỳ`,Ÿ:`Ÿ`,Ỹ:`Ỹ`,Ȳ:`Ȳ`,Ŷ:`Ŷ`,Ẏ:`Ẏ`,Ź:`Ź`,Ž:`Ž`,Ẑ:`Ẑ`,Ż:`Ż`,ά:`ά`,ὰ:`ὰ`,ᾱ:`ᾱ`,ᾰ:`ᾰ`,έ:`έ`,ὲ:`ὲ`,ή:`ή`,ὴ:`ὴ`,ί:`ί`,ὶ:`ὶ`,ϊ:`ϊ`,ΐ:`ΐ`,ῒ:`ῒ`,ῑ:`ῑ`,ῐ:`ῐ`,ό:`ό`,ὸ:`ὸ`,ύ:`ύ`,ὺ:`ὺ`,ϋ:`ϋ`,ΰ:`ΰ`,ῢ:`ῢ`,ῡ:`ῡ`,ῠ:`ῠ`,ώ:`ώ`,ὼ:`ὼ`,Ύ:`Ύ`,Ὺ:`Ὺ`,Ϋ:`Ϋ`,Ῡ:`Ῡ`,Ῠ:`Ῠ`,Ώ:`Ώ`,Ὼ:`Ὼ`},IS=class e{constructor(e,t){this.mode=`math`,this.gullet=new jS(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new R(`Expected '`+e+`', got '`+this.fetch().text+`'`,this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken??=this.gullet.expandNextToken(),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set(`\\color`,`\\textcolor`);try{var e=this.parseExpression(!1);return this.expect(`EOF`),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Sx(`}`)),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect(`}`),this.nextToken=t,n}parseExpression(t,n){for(var r=[];;){this.mode===`math`&&this.consumeSpaces();var i=this.fetch();if(e.endOfExpression.has(i.text)||n&&i.text===n||t&&dS[i.text]&&dS[i.text].infix)break;var a=this.parseAtom(n);if(!a)break;a.type!==`internal`&&r.push(a)}return this.mode===`text`&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var i=e[r];if(i.type===`infix`){if(t!==-1)throw new R(`only one infix operator per group`,i.token);t=r,n=i.replaceWith}}if(t!==-1&&n){var a,o,s=e.slice(0,t),c=e.slice(t+1);return a=s.length===1&&s[0].type===`ordgroup`?s[0]:{type:`ordgroup`,mode:this.mode,body:s},o=c.length===1&&c[0].type===`ordgroup`?c[0]:{type:`ordgroup`,mode:this.mode,body:c},[n===`\\\\abovefrac`?this.callFunction(n,[a,e[t],o],[]):this.callFunction(n,[a,o],[])]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do r=this.parseGroup(e);while(r?.type===`internal`);if(!r)throw new R(`Expected group after '`+n+`'`,t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:`textord`,mode:`text`,text:e[n]});var r={type:`text`,mode:this.mode,body:t};return{type:`color`,mode:this.mode,color:this.settings.errorColor,body:[r]}}parseAtom(e){var t=this.parseGroup(`atom`,e);if(t?.type===`internal`||this.mode===`text`)return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text===`\\limits`||i.text===`\\nolimits`){if(t&&t.type===`op`)t.limits=i.text===`\\limits`,t.alwaysHandleSupSub=!0;else if(t&&t.type===`operatorname`)t.alwaysHandleSupSub&&(t.limits=i.text===`\\limits`);else throw new R(`Limit controls must follow a math operator`,i);this.consume()}else if(i.text===`^`){if(n)throw new R(`Double superscript`,i);n=this.handleSupSubscript(`superscript`)}else if(i.text===`_`){if(r)throw new R(`Double subscript`,i);r=this.handleSupSubscript(`subscript`)}else if(i.text===`'`){if(n)throw new R(`Double superscript`,i);var a={type:`textord`,mode:this.mode,text:`\\prime`},o=[a];for(this.consume();this.fetch().text===`'`;)o.push(a),this.consume();this.fetch().text===`^`&&o.push(this.handleSupSubscript(`superscript`)),n={type:`ordgroup`,mode:this.mode,body:o}}else if(NS[i.text]){var s=MS.test(i.text),c=[];for(c.push(new Sx(NS[i.text])),this.consume();;){var l=this.fetch().text;if(!NS[l]||MS.test(l)!==s)break;c.unshift(new Sx(NS[l])),this.consume()}var u=this.subparse(c);s?r={type:`ordgroup`,mode:`math`,body:u}:n={type:`ordgroup`,mode:`math`,body:u}}else break}return n||r?{type:`supsub`,mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,i=dS[r];if(!i)return null;if(this.consume(),t&&t!==`atom`&&!i.allowedInArgument)throw new R(`Got function '`+r+`' with no arguments`+(t?` as `+t:``),n);if(this.mode===`text`&&!i.allowedInText)throw new R(`Can't use function '`+r+`' in text mode`,n);if(this.mode===`math`&&i.allowedInMath===!1)throw new R(`Can't use function '`+r+`' in math mode`,n);var{args:a,optArgs:o}=this.parseArguments(r,i);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,i){var a={funcName:e,parser:this,token:r,breakOnTokenText:i},o=dS[e];if(o&&o.handler)return o.handler(a,t,n);throw new R(`No function handler for `+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],i=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],s=a<t.numOptionalArgs;(`primitive`in t&&t.primitive&&o==null||t.type===`sqrt`&&a===1&&i[0]==null)&&(o=`primitive`);var c=this.parseGroupOfType(`argument to '`+e+`'`,o,s);if(s)i.push(c);else if(c!=null)r.push(c);else throw new R(`Null argument, please report this as a bug`)}return{args:r,optArgs:i}}parseGroupOfType(e,t,n){switch(t){case`color`:return this.parseColorGroup(n);case`size`:return this.parseSizeGroup(n);case`url`:return this.parseUrlGroup(n);case`math`:case`text`:return this.parseArgumentGroup(n,t);case`hbox`:var r=this.parseArgumentGroup(n,`text`);return r==null?null:{type:`styling`,mode:r.mode,body:[r],style:`text`};case`raw`:var i=this.parseStringGroup(`raw`,n);return i==null?null:{type:`raw`,mode:`text`,string:i.text};case`primitive`:if(n)throw new R(`A primitive argument cannot be optional`);var a=this.parseGroup(e);if(a==null)throw new R(`Expected group as `+e,this.fetch());return a;case`original`:case null:case void 0:return this.parseArgumentGroup(n);default:throw new R(`Unknown group type as `+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===` `;)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r=``,i;(i=this.fetch()).text!==`EOF`;)r+=i.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,i=``,a;(a=this.fetch()).text!==`EOF`&&e.test(i+a.text);)r=a,i+=r.text,this.consume();if(i===``)throw new R(`Invalid `+t+`: '`+n.text+`'`,n);return n.range(r,i)}parseColorGroup(e){var t=this.parseStringGroup(`color`,e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new R(`Invalid color: '`+t.text+`'`,t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r=`#`+r),{type:`color-token`,mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),t=!e&&this.gullet.future().text!==`{`?this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,`size`):this.parseStringGroup(`size`,e),!t)return null;!e&&t.text.length===0&&(t.text=`0pt`,n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new R(`Invalid size: '`+t.text+`'`,t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!X_(i))throw new R(`Invalid unit: '`+i.unit+`'`,t);return{type:`size`,mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode(`%`,13),this.gullet.lexer.setCatcode(`~`,12);var t=this.parseStringGroup(`url`,e);if(this.gullet.lexer.setCatcode(`%`,14),this.gullet.lexer.setCatcode(`~`,13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,`$1`);return{type:`url`,mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,`EOF`);this.expect(`EOF`),this.gullet.endGroup();var a={type:`ordgroup`,mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,i;if(r===`{`||r===`\\begingroup`){this.consume();var a=r===`{`?`}`:`\\endgroup`;this.gullet.beginGroup();var o=this.parseExpression(!1,a),s=this.fetch();this.expect(a),this.gullet.endGroup(),i={type:`ordgroup`,mode:this.mode,loc:xx.range(n,s),body:o,semisimple:r===`\\begingroup`||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&r[0]===`\\`&&!AS.hasOwnProperty(r)){if(this.settings.throwOnError)throw new R(`Undefined control sequence: `+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type===`textord`){var i=r.text,a=e[n+1];if(!(!a||a.type!==`textord`)){if(i===`-`&&a.text===`-`){var o=e[n+2];n+1<t&&o&&o.type===`textord`&&o.text===`-`?(e.splice(n,3,{type:`textord`,mode:`text`,loc:xx.range(r,o),text:`---`}),t-=2):(e.splice(n,2,{type:`textord`,mode:`text`,loc:xx.range(r,a),text:`--`}),--t)}(i===`'`||i==="`")&&a.text===i&&(e.splice(n,2,{type:`textord`,mode:`text`,loc:xx.range(r,a),text:i+i}),--t)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)===`*`;if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new R(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:`verb`,mode:`text`,body:n,star:r}}FS.hasOwnProperty(t[0])&&!Cv[this.mode][t[0]]&&(this.settings.strict&&this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Accented Unicode text character "`+t[0]+`" used in math mode`,e),t=FS[t[0]]+t.slice(1));var i=vS.exec(t);i&&(t=t.substring(0,i.index),t===`i`?t=`ı`:t===`j`&&(t=`ȷ`));var a;if(Cv[this.mode][t]){this.settings.strict&&this.mode===`math`&&Gv.includes(t)&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Latin-1/Unicode text character "`+t[0]+`" used in math mode`,e);var o=Cv[this.mode][t].group,s=xx.range(e),c;if(xv.hasOwnProperty(o)){var l=o;c={type:`atom`,mode:this.mode,family:l,loc:s,text:t}}else c={type:o,mode:this.mode,loc:s,text:t};a=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(N_(t.charCodeAt(0))?this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Unicode text character "`+t[0]+`" used in math mode`,e):this.settings.reportNonstrict(`unknownSymbol`,`Unrecognized Unicode character "`+t[0]+`"`+(` (`+t.charCodeAt(0)+`)`),e)),a={type:`textord`,mode:`text`,loc:xx.range(e),text:t};else return null;if(this.consume(),i)for(var u=0;u<i[0].length;u++){var d=i[0][u];if(!PS[d])throw new R(`Unknown accent ' `+d+`'`,e);var f=PS[d][this.mode]||PS[d].text;if(!f)throw new R(`Accent `+d+` unsupported in `+this.mode+` mode`,e);a={type:`accent`,mode:this.mode,loc:xx.range(e),label:f,isStretchy:!1,isShifty:!0,base:a}}return a}};IS.endOfExpression=new Set([`}`,`\\endgroup`,`\\end`,`\\right`,`&`]);var LS=function(e,t){if(!(typeof e==`string`||e instanceof String))throw TypeError(`KaTeX can only parse string typed expression`);var n=new IS(e,t);delete n.gullet.macros.current[`\\df@tag`];var r=n.parse();if(delete n.gullet.macros.current[`\\current@color`],delete n.gullet.macros.current[`\\color`],n.gullet.macros.get(`\\df@tag`)){if(!t.displayMode)throw new R(`\\tag works only in display equations`);r=[{type:`tag`,mode:`text`,body:r,tag:n.subparse([new Sx(`\\df@tag`)])}]}return r},RS=function(e,t,n){t.textContent=``;var r=HS(e,n).toNode();t.appendChild(r)};typeof document<`u`&&document.compatMode!==`CSS1Compat`&&(typeof console<`u`&&console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`),RS=function(){throw new R(`KaTeX doesn't work in quirks mode.`)});var zS=function(e,t){return HS(e,t).toMarkup()},BS=function(e,t){return LS(e,new f_(t))},VS=function(e,t,n){if(n.throwOnError||!(e instanceof R))throw e;var r=X([`katex-error`],[new sv(t)]);return r.setAttribute(`title`,e.toString()),r.setAttribute(`style`,`color:`+n.errorColor),r},HS=function(e,t){var n=new f_(t);try{return ob(LS(e,n),e,n)}catch(t){return VS(t,e,n)}},US={version:`0.16.45`,render:RS,renderToString:zS,ParseError:R,SETTINGS_SCHEMA:u_,__parse:BS,__renderToDomTree:HS,__renderToHTMLTree:function(e,t){var n=new f_(t);try{return sb(LS(e,n),e,n)}catch(t){return VS(t,e,n)}},__setFontMetrics:_v,__defineSymbol:B,__defineFunction:Z,__defineMacro:$,__domTree:{Span:rv,Anchor:iv,SymbolNode:sv,SvgNode:cv,PathNode:lv,LineNode:uv}},WS=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},GS={class:`math-viz-container`},KS={class:`formula-title`},qS=[`innerHTML`],JS={class:`formula-description`},YS={class:`visualization`},XS={class:`ui-panel`},ZS={class:`form-group`},QS={class:`form-group`},$S={class:`val`},eC={class:`form-group`},tC={class:`form-group`},nC=WS({__name:`MathViz`,setup(e){let t=qt(null),n=qt(`mobius`),r=qt(``),i=qt(.2),a=qt(!0),o=qt(!0),s=qt(`#ffffff`),c,l,u,d,f,p,m,h=0;or(()=>{g(),ie(),ce(),window.addEventListener(`resize`,le)}),lr(()=>{window.removeEventListener(`resize`,le),u&&u.dispose()});function g(){let e=t.value;c=new tu,c.background=new $l(1710618);let n=e.clientWidth,r=e.clientHeight;l=new Hf(75,n/r,.1,1e3),l.position.set(5,5,5),u=new jg({antialias:!0}),u.setSize(n,r),u.setPixelRatio(window.devicePixelRatio),e.appendChild(u.domElement),d=new Hg(l,u.domElement),d.enableDamping=!0,d.dampingFactor=.05;let i=new Kf(16777215);c.add(i);let a=new Wf(16777215,3,100);a.position.set(10,10,10),c.add(a);let o=new Wf(16777215,2,100);o.position.set(-10,-10,-10),c.add(o);let s=new Wf(16777215,2,100);s.position.set(0,15,0),c.add(s),p=new up(10,10,6710886,3355443),c.add(p),m=new dp(5),c.add(m),re()}function _(){let e=new Zd(2,32,32);return e.scale(1.5,1,1),e}function v(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=(n*n-r*r)*.1;t.setZ(e,i)}return e.computeVertexNormals(),e}function y(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=(n*n+r*r)*.1;t.setZ(e,i)}return e.computeVertexNormals(),e}function b(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=Math.max(-1.4,Math.min(1.4,n+r)),a=Math.tan(i)*.2;t.setZ(e,a)}return e.computeVertexNormals(),e}function x(){let e=new Xd(6,4,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e);t.getY(e);let r=Math.cos(n*2)*.5;t.setZ(e,r)}return e.computeVertexNormals(),e}function S(){let e=new Xd(6,4,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e);t.getY(e);let r=Math.sin(n*2)*.5;t.setZ(e,r)}return e.computeVertexNormals(),e}function C(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=Math.sin(n*2)*Math.cos(r*2)*.5;t.setZ(e,i)}return e.computeVertexNormals(),e}function w(){let e=new Xd(6,4,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e);t.getY(e);let r=Math.max(-1.4,Math.min(1.4,n*2)),i=1/Math.tan(r)*.2;t.setZ(e,i)}return e.computeVertexNormals(),e}function T(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=Math.exp(-(n*n+r*r))*2;t.setZ(e,i)}return e.computeVertexNormals(),e}function E(){let e=new Xd(6,4,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e);t.getY(e);let r=Math.max(-1.5,Math.min(1.5,n)),i=(Math.exp(r*2)-Math.exp(-r*2))/2*.2;t.setZ(e,i)}return e.computeVertexNormals(),e}function D(){return new Yd(2)}function O(){let e=[],t=1e3;for(let n=0;n<=t;n++){let r=n/t*Math.PI*4,i=Math.sqrt(2)*Math.cos(r)/(1+Math.sin(r)*Math.sin(r)),a=Math.sqrt(2)*Math.sin(r)*Math.cos(r)/(1+Math.sin(r)*Math.sin(r));e.push(new I(i*2,a*2,0))}return new Yu().setFromPoints(e)}function ee(){let e=[],t=1e3;for(let n=0;n<=t;n++){let r=n/t*Math.PI*8,i=Math.exp(.1*r),a=i*Math.cos(r)*.5,o=i*Math.sin(r)*.5,s=r*.1;e.push(new I(a,o,s))}return new Yu().setFromPoints(e)}function k(){return new $d(1,.3,100,16,2,3)}function te(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=Math.sin(n)*Math.cos(r)*.5;t.setZ(e,i)}return e.computeVertexNormals(),e}function ne(){let e=new Xd(6,6,50,50),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=(n*n-r*r)*.1;t.setZ(e,i)}return e.computeVertexNormals(),e}function re(){f&&(c.remove(f),f.geometry.dispose(),f.material.dispose());let e,t,r=new $l(s.value);switch(n.value){case`sphere`:e=new Zd(2,32,32),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`torus`:e=new Qd(1.5,.5,16,100),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`wave`:e=te(),t=new df({color:r,wireframe:!0,side:2,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`saddle`:e=ne(),t=new df({color:r,wireframe:!0,side:2,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`ellipse`:e=_(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`hyperbola`:e=v(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`paraboloid`:e=y(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`tangent`:e=b(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`cos`:e=x(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`sin`:e=S(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`trig`:e=C(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`cot`:e=w(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`exp`:e=T(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`sinh`:e=E(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break;case`octahedron`:e=D(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.5,shininess:100});break;case`lemniscate`:e=O(),t=new Ad({color:r,linewidth:2});break;case`logspiral`:e=ee(),t=new Ad({color:r,linewidth:2});break;case`mobius`:e=k(),t=new df({color:r,wireframe:!0,transparent:!0,opacity:.9,emissive:r,emissiveIntensity:.3});break}f=t instanceof Ad?new Rd(e,t):new vd(e,t),c.add(f)}function ie(){let e=``;switch(n.value){case`sphere`:e=`x^2 + y^2 + z^2 = r^2`;break;case`torus`:e=`(sqrt{x^2 + y^2} - R)^2 + z^2 = r^2`;break;case`wave`:e=`z = sin(x) cos(y)`;break;case`saddle`:e=`z = x^2 - y^2`;break;case`ellipse`:e=`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`;break;case`hyperbola`:e=`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`;break;case`paraboloid`:e=`z = x^2 + y^2`;break;case`tangent`:e=`z = 	an(x + y)`;break;case`cos`:e=`z = cos(x)`;break;case`sin`:e=`z = sin(x)`;break;case`trig`:e=`z = sin(x) cos(y)`;break;case`cot`:e=`z = cot(x)`;break;case`exp`:e=`z = e^{-(x^2 + y^2)}`;break;case`sinh`:e=`z = sinh(x)`;break;case`octahedron`:e=`|x| + |y| + |z| = 1`;break;case`lemniscate`:e=`(x^2 + y^2)^2 = x^2 - y^2`;break;case`logspiral`:e=`r = e^{a	heta}`;break;case`mobius`:e=`	ext{莫比乌斯带}`;break}try{r.value=US.renderToString(e,{throwOnError:!1})}catch(e){console.error(`KaTeX rendering error:`,e)}re()}function ae(){p.visible=a.value}function oe(){m.visible=o.value}function se(){switch(n.value){case`mobius`:return`莫比乌斯带是一种只有一个面和一条边的曲面，由德国数学家奥古斯特·莫比乌斯于1858年发现。`;case`sphere`:return`球体是三维空间中到定点距离等于定长的所有点的集合，是最基本的几何体之一。`;case`torus`:return`圆环是由一个圆绕着与它共面但不相交的轴旋转一周所形成的几何体。`;case`wave`:return`波浪面是一种周期性起伏的曲面，常见于水波、声波等自然现象的可视化。`;case`saddle`:return`马鞍面是一种双曲抛物面，形状像马鞍，在数学中具有重要的几何性质。`;case`ellipse`:return`椭圆是平面上到两个定点（焦点）的距离之和为常数的点的轨迹，是圆锥曲线的一种。`;case`hyperbola`:return`双曲线是平面上到两个定点（焦点）的距离之差为常数的点的轨迹，是圆锥曲线的一种。`;case`paraboloid`:return`抛物面是由抛物线绕其轴旋转而成的曲面，在光学和工程中有广泛应用。`;case`tangent`:return`正切曲面是由正切函数形成的曲面，在数学分析中具有重要的研究价值。`;case`cos`:return`余弦函数是三角函数的一种，表示邻边与斜边的比值，在数学和物理中有广泛应用。`;case`sin`:return`正弦函数是三角函数的一种，表示对边与斜边的比值，在数学和物理中有广泛应用。`;case`trig`:return`三角函数曲面是由多种三角函数组合而成的复杂曲面，展示了三角函数的丰富性。`;case`cot`:return`余切函数是三角函数的一种，表示邻边与对边的比值，是正切函数的倒数。`;case`exp`:return`指数函数是一种重要的数学函数，增长率非常快，在自然科学和工程中广泛应用。`;case`sinh`:return`双曲正弦函数是双曲函数的一种，与正弦函数有类似的性质，但定义在双曲线上。`;case`octahedron`:return`八面体是柏拉图立体之一，由八个等边三角形围成，具有高度的对称性。`;case`lemniscate`:return`双纽线是一种形如“∞”的曲线，由瑞士数学家雅各布·伯努利于1694年发现。`;case`logspiral`:return`对数螺旋线是一种螺旋线，其角度与半径的对数成正比，在自然界中广泛存在。`;default:return`数学公式可视化是理解数学概念的重要工具，通过3D展示帮助我们直观理解抽象的数学原理。`}}function ce(){if(requestAnimationFrame(ce),h+=.01*i.value,f){if(f.rotation.y+=.005*i.value,n.value===`wave`){let e=f.geometry.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),r=e.getY(t),i=Math.sin(n+h)*Math.cos(r+h)*.5;e.setZ(t,i)}e.needsUpdate=!0,f.geometry.computeVertexNormals()}if(n.value===`saddle`){let e=f.geometry.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),r=e.getY(t),i=(n*n-r*r)*.1*Math.sin(h*.5);e.setZ(t,i)}e.needsUpdate=!0,f.geometry.computeVertexNormals()}}d.update(),u.render(c,l)}function le(){let e=t.value;if(!e)return;let n=e.clientWidth,r=e.clientHeight;l.aspect=n/r,l.updateProjectionMatrix(),u.setSize(n,r)}return(e,s)=>(Fi(),Bi(`div`,GS,[Ki(`div`,KS,[r.value?(Fi(),Bi(`div`,{key:0,innerHTML:r.value},null,8,qS)):$i(``,!0)]),Ki(`div`,JS,Se(se()),1),s[10]||=Ki(`div`,{class:`operation-hints`},` 鼠标左键旋转 | 右键平移 | 滚轮缩放 `,-1),Ki(`div`,YS,[Ki(`div`,{ref_key:`container`,ref:t,class:`graph-container`},null,512)]),Ki(`div`,XS,[s[9]||=Ki(`div`,{class:`version-tag`},`v1.8`,-1),Ki(`div`,ZS,[s[5]||=Ki(`label`,null,`选择公式类型：`,-1),Mn(Ki(`select`,{"onUpdate:modelValue":s[0]||=e=>n.value=e,onChange:ie},[...s[4]||=[Qi(`<option value="mobius" data-v-c58f6a4b>莫比乌斯带</option><option value="sphere" data-v-c58f6a4b>球体</option><option value="torus" data-v-c58f6a4b>圆环</option><option value="wave" data-v-c58f6a4b>波浪面</option><option value="saddle" data-v-c58f6a4b>马鞍面</option><option value="ellipse" data-v-c58f6a4b>椭圆</option><option value="hyperbola" data-v-c58f6a4b>双曲线</option><option value="paraboloid" data-v-c58f6a4b>抛物面</option><option value="tangent" data-v-c58f6a4b>正切曲面</option><option value="cos" data-v-c58f6a4b>余弦函数</option><option value="sin" data-v-c58f6a4b>正弦函数</option><option value="trig" data-v-c58f6a4b>三角函数曲面</option><option value="cot" data-v-c58f6a4b>余切函数</option><option value="exp" data-v-c58f6a4b>指数函数</option><option value="sinh" data-v-c58f6a4b>双曲正弦函数</option><option value="octahedron" data-v-c58f6a4b>八面体</option><option value="lemniscate" data-v-c58f6a4b>双纽线</option><option value="logspiral" data-v-c58f6a4b>对数螺旋线</option>`,18)]],544),[[xo,n.value]])]),Ki(`div`,QS,[s[6]||=Ki(`label`,null,`动画速度：`,-1),Mn(Ki(`input`,{type:`range`,min:`0`,max:`10`,step:`0.1`,"onUpdate:modelValue":s[1]||=e=>i.value=e},null,512),[[vo,i.value,void 0,{number:!0}]]),Ki(`span`,$S,Se(i.value.toFixed(1))+`x`,1)]),Ki(`div`,eC,[Ki(`label`,null,[Mn(Ki(`input`,{type:`checkbox`,"onUpdate:modelValue":s[2]||=e=>a.value=e,onChange:ae},null,544),[[yo,a.value]]),s[7]||=Zi(` 显示网格`,-1)])]),Ki(`div`,tC,[Ki(`label`,null,[Mn(Ki(`input`,{type:`checkbox`,"onUpdate:modelValue":s[3]||=e=>o.value=e,onChange:oe},null,544),[[yo,o.value]]),s[8]||=Zi(` 显示坐标轴`,-1)])])])]))}},[[`__scopeId`,`data-v-c58f6a4b`]]);Oo({__name:`App`,setup(e){return(e,t)=>(Fi(),Vi(nC))}}).mount(`#app`);