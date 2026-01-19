var Rm=e=>{throw TypeError(e)};var ac=(e,t,n)=>t.has(e)||Rm("Cannot "+n);var L=(e,t,n)=>(ac(e,t,"read from private field"),n?n.call(e):t.get(e)),fe=(e,t,n)=>t.has(e)?Rm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ee=(e,t,n,r)=>(ac(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Xe=(e,t,n)=>(ac(e,t,"access private method"),n);var Ra=(e,t,n,r)=>({set _(i){ee(e,t,i,n)},get _(){return L(e,t,r)}});function DC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qx={exports:{}},wu={},Xx={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),MC=Symbol.for("react.portal"),NC=Symbol.for("react.fragment"),jC=Symbol.for("react.strict_mode"),LC=Symbol.for("react.profiler"),OC=Symbol.for("react.provider"),_C=Symbol.for("react.context"),FC=Symbol.for("react.forward_ref"),zC=Symbol.for("react.suspense"),BC=Symbol.for("react.memo"),VC=Symbol.for("react.lazy"),Im=Symbol.iterator;function UC(e){return e===null||typeof e!="object"?null:(e=Im&&e[Im]||e["@@iterator"],typeof e=="function"?e:null)}var Jx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zx=Object.assign,e0={};function Oo(e,t,n){this.props=e,this.context=t,this.refs=e0,this.updater=n||Jx}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function t0(){}t0.prototype=Oo.prototype;function dh(e,t,n){this.props=e,this.context=t,this.refs=e0,this.updater=n||Jx}var fh=dh.prototype=new t0;fh.constructor=dh;Zx(fh,Oo.prototype);fh.isPureReactComponent=!0;var Dm=Array.isArray,n0=Object.prototype.hasOwnProperty,hh={current:null},r0={key:!0,ref:!0,__self:!0,__source:!0};function i0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)n0.call(t,r)&&!r0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:e,key:o,ref:s,props:i,_owner:hh.current}}function $C(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ph(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function HC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mm=/\/+/g;function lc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?HC(""+e.key):t.toString(36)}function al(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ca:case MC:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+lc(s,0):r,Dm(i)?(n="",e!=null&&(n=e.replace(Mm,"$&/")+"/"),al(i,t,n,"",function(u){return u})):i!=null&&(ph(i)&&(i=$C(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dm(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+lc(o,a);s+=al(o,t,n,l,i)}else if(l=UC(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+lc(o,a++),s+=al(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ia(e,t,n){if(e==null)return e;var r=[],i=0;return al(e,r,"","",function(o){return t.call(n,o,i++)}),r}function WC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},ll={transition:null},qC={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:hh};function o0(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Ia,forEach:function(e,t,n){Ia(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ia(e,function(){t++}),t},toArray:function(e){return Ia(e,function(t){return t})||[]},only:function(e){if(!ph(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Oo;oe.Fragment=NC;oe.Profiler=LC;oe.PureComponent=dh;oe.StrictMode=jC;oe.Suspense=zC;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;oe.act=o0;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zx({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=hh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)n0.call(t,l)&&!r0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ca,type:e.type,key:i,ref:o,props:r,_owner:s}};oe.createContext=function(e){return e={$$typeof:_C,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:OC,_context:e},e.Consumer=e};oe.createElement=i0;oe.createFactory=function(e){var t=i0.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:FC,render:e}};oe.isValidElement=ph;oe.lazy=function(e){return{$$typeof:VC,_payload:{_status:-1,_result:e},_init:WC}};oe.memo=function(e,t){return{$$typeof:BC,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=ll.transition;ll.transition={};try{e()}finally{ll.transition=t}};oe.unstable_act=o0;oe.useCallback=function(e,t){return mt.current.useCallback(e,t)};oe.useContext=function(e){return mt.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};oe.useEffect=function(e,t){return mt.current.useEffect(e,t)};oe.useId=function(){return mt.current.useId()};oe.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return mt.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};oe.useRef=function(e){return mt.current.useRef(e)};oe.useState=function(e){return mt.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return mt.current.useTransition()};oe.version="18.3.1";Xx.exports=oe;var b=Xx.exports;const V=xu(b),s0=DC({__proto__:null,default:V},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GC=b,KC=Symbol.for("react.element"),YC=Symbol.for("react.fragment"),QC=Object.prototype.hasOwnProperty,XC=GC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JC={key:!0,ref:!0,__self:!0,__source:!0};function a0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)QC.call(t,r)&&!JC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:KC,type:e,key:o,ref:s,props:i,_owner:XC.current}}wu.Fragment=YC;wu.jsx=a0;wu.jsxs=a0;Qx.exports=wu;var x=Qx.exports,l0={exports:{}},zt={},u0={exports:{}},c0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,j){var k=I.length;I.push(j);e:for(;0<k;){var Y=k-1>>>1,K=I[Y];if(0<i(K,j))I[Y]=j,I[k]=K,k=Y;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],k=I.pop();if(k!==j){I[0]=k;e:for(var Y=0,K=I.length,E=K>>>1;Y<E;){var X=2*(Y+1)-1,me=I[X],le=X+1,se=I[le];if(0>i(me,k))le<K&&0>i(se,me)?(I[Y]=se,I[le]=k,Y=le):(I[Y]=me,I[X]=k,Y=X);else if(le<K&&0>i(se,k))I[Y]=se,I[le]=k,Y=le;else break e}}return j}function i(I,j){var k=I.sortIndex-j.sortIndex;return k!==0?k:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,h=3,f=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function S(I){if(g=!1,v(I),!m)if(n(l)!==null)m=!0,G(C);else{var j=n(u);j!==null&&U(S,j.startTime-I)}}function C(I,j){m=!1,g&&(g=!1,p(R),R=-1),f=!0;var k=h;try{for(v(j),c=n(l);c!==null&&(!(c.expirationTime>j)||I&&!O());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,h=c.priorityLevel;var K=Y(c.expirationTime<=j);j=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(l)&&r(l),v(j)}else r(l);c=n(l)}if(c!==null)var E=!0;else{var X=n(u);X!==null&&U(S,X.startTime-j),E=!1}return E}finally{c=null,h=k,f=!1}}var T=!1,A=null,R=-1,M=5,P=-1;function O(){return!(e.unstable_now()-P<M)}function N(){if(A!==null){var I=e.unstable_now();P=I;var j=!0;try{j=A(!0,I)}finally{j?H():(T=!1,A=null)}}else T=!1}var H;if(typeof y=="function")H=function(){y(N)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,$=_.port2;_.port1.onmessage=N,H=function(){$.postMessage(null)}}else H=function(){w(N,0)};function G(I){A=I,T||(T=!0,H())}function U(I,j){R=w(function(){I(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,G(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var k=h;h=j;try{return I()}finally{h=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var k=h;h=I;try{return j()}finally{h=k}},e.unstable_scheduleCallback=function(I,j,k){var Y=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,I){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,I={id:d++,callback:j,priorityLevel:I,startTime:k,expirationTime:K,sortIndex:-1},k>Y?(I.sortIndex=k,t(u,I),n(l)===null&&I===n(u)&&(g?(p(R),R=-1):g=!0,U(S,k-Y))):(I.sortIndex=K,t(l,I),m||f||(m=!0,G(C))),I},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(I){var j=h;return function(){var k=h;h=j;try{return I.apply(this,arguments)}finally{h=k}}}})(c0);u0.exports=c0;var ZC=u0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=b,_t=ZC;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,Ms={};function ji(e,t){To(e,t),To(e+"Capture",t)}function To(e,t){for(Ms[e]=t,e=0;e<t.length;e++)d0.add(t[e])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},jm={};function nE(e){return wd.call(jm,e)?!0:wd.call(Nm,e)?!1:tE.test(e)?jm[e]=!0:(Nm[e]=!0,!1)}function rE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function iE(e,t,n,r){if(t===null||typeof t>"u"||rE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function gh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yh(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(iE(t,n,i,r)&&(n=null),r||i===null?nE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),p0=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Qo(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,uc;function us(e){if(uc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||""}return`
`+uc+e}var cc=!1;function dc(e,t){if(!e||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?us(e):""}function oE(e){switch(e.tag){case 5:return us(e.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return e=dc(e.type,!1),e;case 11:return e=dc(e.type.render,!1),e;case 1:return e=dc(e.type,!0),e;default:return""}}function Td(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hi:return"Fragment";case $i:return"Portal";case bd:return"Profiler";case vh:return"StrictMode";case kd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h0:return(e.displayName||"Context")+".Consumer";case f0:return(e._context.displayName||"Context")+".Provider";case xh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wh:return t=e.displayName||null,t!==null?t:Td(e.type)||"Memo";case wr:t=e._payload,e=e._init;try{return Td(e(t))}catch{}}return null}function sE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Td(t);case 8:return t===vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function m0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function aE(e){var t=m0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ma(e){e._valueTracker||(e._valueTracker=aE(e))}function g0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=m0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cd(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Om(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function y0(e,t){t=t.checked,t!=null&&yh(e,"checked",t,!1)}function Ed(e,t){y0(e,t);var n=Ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pd(e,t.type,Ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _m(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pd(e,t,n){(t!=="number"||Il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cs=Array.isArray;function oo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(cs(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ur(n)}}function v0(e,t){var n=Ur(t.value),r=Ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function x0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?x0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,w0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ns(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(e){lE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ms[t]=ms[e]})});function b0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ms.hasOwnProperty(e)&&ms[e]?(""+t).trim():t+"px"}function k0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var uE=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(e,t){if(t){if(uE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Dd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function bh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nd=null,so=null,ao=null;function Bm(e){if(e=ha(e)){if(typeof Nd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Cu(t),Nd(e.stateNode,e.type,t))}}function S0(e){so?ao?ao.push(e):ao=[e]:so=e}function T0(){if(so){var e=so,t=ao;if(ao=so=null,Bm(e),t)for(e=0;e<t.length;e++)Bm(t[e])}}function C0(e,t){return e(t)}function E0(){}var fc=!1;function P0(e,t,n){if(fc)return e(t,n);fc=!0;try{return C0(e,t,n)}finally{fc=!1,(so!==null||ao!==null)&&(E0(),T0())}}function js(e,t){var n=e.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var jd=!1;if(Qn)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){jd=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{jd=!1}function cE(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var gs=!1,Dl=null,Ml=!1,Ld=null,dE={onError:function(e){gs=!0,Dl=e}};function fE(e,t,n,r,i,o,s,a,l){gs=!1,Dl=null,cE.apply(dE,arguments)}function hE(e,t,n,r,i,o,s,a,l){if(fE.apply(this,arguments),gs){if(gs){var u=Dl;gs=!1,Dl=null}else throw Error(F(198));Ml||(Ml=!0,Ld=u)}}function Li(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function A0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vm(e){if(Li(e)!==e)throw Error(F(188))}function pE(e){var t=e.alternate;if(!t){if(t=Li(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vm(i),e;if(o===r)return Vm(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function R0(e){return e=pE(e),e!==null?I0(e):null}function I0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=I0(e);if(t!==null)return t;e=e.sibling}return null}var D0=_t.unstable_scheduleCallback,Um=_t.unstable_cancelCallback,mE=_t.unstable_shouldYield,gE=_t.unstable_requestPaint,je=_t.unstable_now,yE=_t.unstable_getCurrentPriorityLevel,kh=_t.unstable_ImmediatePriority,M0=_t.unstable_UserBlockingPriority,Nl=_t.unstable_NormalPriority,vE=_t.unstable_LowPriority,N0=_t.unstable_IdlePriority,bu=null,Dn=null;function xE(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(bu,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:kE,wE=Math.log,bE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(wE(e)/bE|0)|0}var ja=64,La=4194304;function ds(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ds(a):(o&=s,o!==0&&(r=ds(o)))}else s=n&~i,s!==0?r=ds(s):o!==0&&(r=ds(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pn(t),i=1<<n,r|=e[n],t&=~i;return r}function SE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=SE(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Od(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function j0(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function hc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function CE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function L0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var O0,Th,_0,F0,z0,_d=!1,Oa=[],Nr=null,jr=null,Lr=null,Ls=new Map,Os=new Map,kr=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(e,t){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Ls.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(t.pointerId)}}function Jo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ha(t),t!==null&&Th(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function PE(e,t,n,r,i){switch(t){case"focusin":return Nr=Jo(Nr,e,t,n,r,i),!0;case"dragenter":return jr=Jo(jr,e,t,n,r,i),!0;case"mouseover":return Lr=Jo(Lr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ls.set(o,Jo(Ls.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Os.set(o,Jo(Os.get(o)||null,e,t,n,r,i)),!0}return!1}function B0(e){var t=fi(e.target);if(t!==null){var n=Li(t);if(n!==null){if(t=n.tag,t===13){if(t=A0(n),t!==null){e.blockedOn=t,z0(e.priority,function(){_0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Md=r,n.target.dispatchEvent(r),Md=null}else return t=ha(n),t!==null&&Th(t),e.blockedOn=n,!1;t.shift()}return!0}function Hm(e,t,n){ul(e)&&n.delete(t)}function AE(){_d=!1,Nr!==null&&ul(Nr)&&(Nr=null),jr!==null&&ul(jr)&&(jr=null),Lr!==null&&ul(Lr)&&(Lr=null),Ls.forEach(Hm),Os.forEach(Hm)}function Zo(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,AE)))}function _s(e){function t(i){return Zo(i,e)}if(0<Oa.length){Zo(Oa[0],e);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nr!==null&&Zo(Nr,e),jr!==null&&Zo(jr,e),Lr!==null&&Zo(Lr,e),Ls.forEach(t),Os.forEach(t),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&kr.shift()}var lo=rr.ReactCurrentBatchConfig,Ll=!0;function RE(e,t,n,r){var i=pe,o=lo.transition;lo.transition=null;try{pe=1,Ch(e,t,n,r)}finally{pe=i,lo.transition=o}}function IE(e,t,n,r){var i=pe,o=lo.transition;lo.transition=null;try{pe=4,Ch(e,t,n,r)}finally{pe=i,lo.transition=o}}function Ch(e,t,n,r){if(Ll){var i=Fd(e,t,n,r);if(i===null)Sc(e,t,r,Ol,n),$m(e,r);else if(PE(i,e,t,n,r))r.stopPropagation();else if($m(e,r),t&4&&-1<EE.indexOf(e)){for(;i!==null;){var o=ha(i);if(o!==null&&O0(o),o=Fd(e,t,n,r),o===null&&Sc(e,t,r,Ol,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sc(e,t,r,null,n)}}var Ol=null;function Fd(e,t,n,r){if(Ol=null,e=bh(r),e=fi(e),e!==null)if(t=Li(e),t===null)e=null;else if(n=t.tag,n===13){if(e=A0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ol=e,null}function V0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case kh:return 1;case M0:return 4;case Nl:case vE:return 16;case N0:return 536870912;default:return 16}default:return 16}}var Rr=null,Eh=null,cl=null;function U0(){if(cl)return cl;var e,t=Eh,n=t.length,r,i="value"in Rr?Rr.value:Rr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return cl=i.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function Wm(){return!1}function Bt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_a:Wm,this.isPropagationStopped=Wm,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Bt(_o),fa=Ie({},_o,{view:0,detail:0}),DE=Bt(fa),pc,mc,es,ku=Ie({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(pc=e.screenX-es.screenX,mc=e.screenY-es.screenY):mc=pc=0,es=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),qm=Bt(ku),ME=Ie({},ku,{dataTransfer:0}),NE=Bt(ME),jE=Ie({},fa,{relatedTarget:0}),gc=Bt(jE),LE=Ie({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),OE=Bt(LE),_E=Ie({},_o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),FE=Bt(_E),zE=Ie({},_o,{data:0}),Gm=Bt(zE),BE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $E(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UE[e])?!!t[e]:!1}function Ah(){return $E}var HE=Ie({},fa,{key:function(e){if(e.key){var t=BE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WE=Bt(HE),qE=Ie({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Bt(qE),GE=Ie({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),KE=Bt(GE),YE=Ie({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),QE=Bt(YE),XE=Ie({},ku,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),JE=Bt(XE),ZE=[9,13,27,32],Rh=Qn&&"CompositionEvent"in window,ys=null;Qn&&"documentMode"in document&&(ys=document.documentMode);var eP=Qn&&"TextEvent"in window&&!ys,$0=Qn&&(!Rh||ys&&8<ys&&11>=ys),Ym=" ",Qm=!1;function H0(e,t){switch(e){case"keyup":return ZE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function tP(e,t){switch(e){case"compositionend":return W0(t);case"keypress":return t.which!==32?null:(Qm=!0,Ym);case"textInput":return e=t.data,e===Ym&&Qm?null:e;default:return null}}function nP(e,t){if(Wi)return e==="compositionend"||!Rh&&H0(e,t)?(e=U0(),cl=Eh=Rr=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $0&&t.locale!=="ko"?null:t.data;default:return null}}var rP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rP[e.type]:t==="textarea"}function q0(e,t,n,r){S0(r),t=_l(t,"onChange"),0<t.length&&(n=new Ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vs=null,Fs=null;function iP(e){rw(e,0)}function Su(e){var t=Ki(e);if(g0(t))return e}function oP(e,t){if(e==="change")return t}var G0=!1;if(Qn){var yc;if(Qn){var vc="oninput"in document;if(!vc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),vc=typeof Jm.oninput=="function"}yc=vc}else yc=!1;G0=yc&&(!document.documentMode||9<document.documentMode)}function Zm(){vs&&(vs.detachEvent("onpropertychange",K0),Fs=vs=null)}function K0(e){if(e.propertyName==="value"&&Su(Fs)){var t=[];q0(t,Fs,e,bh(e)),P0(iP,t)}}function sP(e,t,n){e==="focusin"?(Zm(),vs=t,Fs=n,vs.attachEvent("onpropertychange",K0)):e==="focusout"&&Zm()}function aP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Su(Fs)}function lP(e,t){if(e==="click")return Su(t)}function uP(e,t){if(e==="input"||e==="change")return Su(t)}function cP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:cP;function zs(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wd.call(t,i)||!yn(e[i],t[i]))return!1}return!0}function eg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tg(e,t){var n=eg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function Y0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Y0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Q0(){for(var e=window,t=Il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dP(e){var t=Q0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tg(n,o);var s=tg(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fP=Qn&&"documentMode"in document&&11>=document.documentMode,qi=null,zd=null,xs=null,Bd=!1;function ng(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||qi==null||qi!==Il(r)||(r=qi,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xs&&zs(xs,r)||(xs=r,r=_l(zd,"onSelect"),0<r.length&&(t=new Ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qi)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},xc={},X0={};Qn&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Tu(e){if(xc[e])return xc[e];if(!Gi[e])return e;var t=Gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in X0)return xc[e]=t[n];return e}var J0=Tu("animationend"),Z0=Tu("animationiteration"),ew=Tu("animationstart"),tw=Tu("transitionend"),nw=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){nw.set(e,t),ji(t,[e])}for(var wc=0;wc<rg.length;wc++){var bc=rg[wc],hP=bc.toLowerCase(),pP=bc[0].toUpperCase()+bc.slice(1);Qr(hP,"on"+pP)}Qr(J0,"onAnimationEnd");Qr(Z0,"onAnimationIteration");Qr(ew,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(tw,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mP=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function ig(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hE(r,t,void 0,e),e.currentTarget=null}function rw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ig(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ig(i,a,u),o=l}}}if(Ml)throw e=Ld,Ml=!1,Ld=null,e}function be(e,t){var n=t[Wd];n===void 0&&(n=t[Wd]=new Set);var r=e+"__bubble";n.has(r)||(iw(t,e,2,!1),n.add(r))}function kc(e,t,n){var r=0;t&&(r|=4),iw(n,e,r,t)}var za="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[za]){e[za]=!0,d0.forEach(function(n){n!=="selectionchange"&&(mP.has(n)||kc(n,!1,e),kc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[za]||(t[za]=!0,kc("selectionchange",!1,t))}}function iw(e,t,n,r){switch(V0(t)){case 1:var i=RE;break;case 4:i=IE;break;default:i=Ch}n=i.bind(null,t,n,e),i=void 0,!jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=fi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}P0(function(){var u=o,d=bh(n),c=[];e:{var h=nw.get(e);if(h!==void 0){var f=Ph,m=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":f=WE;break;case"focusin":m="focus",f=gc;break;case"focusout":m="blur",f=gc;break;case"beforeblur":case"afterblur":f=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=KE;break;case J0:case Z0:case ew:f=OE;break;case tw:f=QE;break;case"scroll":f=DE;break;case"wheel":f=JE;break;case"copy":case"cut":case"paste":f=FE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Km}var g=(t&4)!==0,w=!g&&e==="scroll",p=g?h!==null?h+"Capture":null:h;g=[];for(var y=u,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=js(y,p),S!=null&&g.push(Vs(y,S,v)))),w)break;y=y.return}0<g.length&&(h=new f(h,m,null,n,d),c.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Md&&(m=n.relatedTarget||n.fromElement)&&(fi(m)||m[Xn]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?fi(m):null,m!==null&&(w=Li(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(g=qm,S="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(g=Km,S="onPointerLeave",p="onPointerEnter",y="pointer"),w=f==null?h:Ki(f),v=m==null?h:Ki(m),h=new g(S,y+"leave",f,n,d),h.target=w,h.relatedTarget=v,S=null,fi(d)===u&&(g=new g(p,y+"enter",m,n,d),g.target=v,g.relatedTarget=w,S=g),w=S,f&&m)t:{for(g=f,p=m,y=0,v=g;v;v=Bi(v))y++;for(v=0,S=p;S;S=Bi(S))v++;for(;0<y-v;)g=Bi(g),y--;for(;0<v-y;)p=Bi(p),v--;for(;y--;){if(g===p||p!==null&&g===p.alternate)break t;g=Bi(g),p=Bi(p)}g=null}else g=null;f!==null&&og(c,h,f,g,!1),m!==null&&w!==null&&og(c,w,m,g,!0)}}e:{if(h=u?Ki(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var C=oP;else if(Xm(h))if(G0)C=uP;else{C=aP;var T=sP}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=lP);if(C&&(C=C(e,u))){q0(c,C,n,d);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Pd(h,"number",h.value)}switch(T=u?Ki(u):window,e){case"focusin":(Xm(T)||T.contentEditable==="true")&&(qi=T,zd=u,xs=null);break;case"focusout":xs=zd=qi=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,ng(c,n,d);break;case"selectionchange":if(fP)break;case"keydown":case"keyup":ng(c,n,d)}var A;if(Rh)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Wi?H0(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&($0&&n.locale!=="ko"&&(Wi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wi&&(A=U0()):(Rr=d,Eh="value"in Rr?Rr.value:Rr.textContent,Wi=!0)),T=_l(u,R),0<T.length&&(R=new Gm(R,e,null,n,d),c.push({event:R,listeners:T}),A?R.data=A:(A=W0(n),A!==null&&(R.data=A)))),(A=eP?tP(e,n):nP(e,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}rw(c,t)})}function Vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _l(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=js(e,n),o!=null&&r.unshift(Vs(e,o,i)),o=js(e,t),o!=null&&r.push(Vs(e,o,i))),e=e.return}return r}function Bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function og(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=js(n,o),l!=null&&s.unshift(Vs(n,l,a))):i||(l=js(n,o),l!=null&&s.push(Vs(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gP=/\r\n?/g,yP=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(gP,`
`).replace(yP,"")}function Ba(e,t,n){if(t=sg(t),sg(e)!==t&&n)throw Error(F(425))}function Fl(){}var Vd=null,Ud=null;function $d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,vP=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,xP=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(e){return ag.resolve(null).then(e).catch(wP)}:Hd;function wP(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_s(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(t)}function Or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Fo,Us="__reactProps$"+Fo,Xn="__reactContainer$"+Fo,Wd="__reactEvents$"+Fo,bP="__reactListeners$"+Fo,kP="__reactHandles$"+Fo;function fi(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lg(e);e!==null;){if(n=e[Rn])return n;e=lg(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[Rn]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Cu(e){return e[Us]||null}var qd=[],Yi=-1;function Xr(e){return{current:e}}function ke(e){0>Yi||(e.current=qd[Yi],qd[Yi]=null,Yi--)}function xe(e,t){Yi++,qd[Yi]=e.current,e.current=t}var $r={},it=Xr($r),kt=Xr(!1),Pi=$r;function Co(e,t){var n=e.type.contextTypes;if(!n)return $r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function zl(){ke(kt),ke(it)}function ug(e,t,n){if(it.current!==$r)throw Error(F(168));xe(it,t),xe(kt,n)}function ow(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,sE(e)||"Unknown",i));return Ie({},n,r)}function Bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$r,Pi=it.current,xe(it,e),xe(kt,kt.current),!0}function cg(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=ow(e,t,Pi),r.__reactInternalMemoizedMergedChildContext=e,ke(kt),ke(it),xe(it,e)):ke(kt),xe(kt,n)}var Wn=null,Eu=!1,Cc=!1;function sw(e){Wn===null?Wn=[e]:Wn.push(e)}function SP(e){Eu=!0,sw(e)}function Jr(){if(!Cc&&Wn!==null){Cc=!0;var e=0,t=pe;try{var n=Wn;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wn=null,Eu=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(e+1)),D0(kh,Jr),i}finally{pe=t,Cc=!1}}return null}var Qi=[],Xi=0,Vl=null,Ul=0,Ht=[],Wt=0,Ai=null,Gn=1,Kn="";function li(e,t){Qi[Xi++]=Ul,Qi[Xi++]=Vl,Vl=e,Ul=t}function aw(e,t,n){Ht[Wt++]=Gn,Ht[Wt++]=Kn,Ht[Wt++]=Ai,Ai=e;var r=Gn;e=Kn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var o=32-pn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gn=1<<32-pn(t)+i|n<<i|r,Kn=o+e}else Gn=1<<o|n<<i|r,Kn=e}function Dh(e){e.return!==null&&(li(e,1),aw(e,1,0))}function Mh(e){for(;e===Vl;)Vl=Qi[--Xi],Qi[Xi]=null,Ul=Qi[--Xi],Qi[Xi]=null;for(;e===Ai;)Ai=Ht[--Wt],Ht[Wt]=null,Kn=Ht[--Wt],Ht[Wt]=null,Gn=Ht[--Wt],Ht[Wt]=null}var jt=null,Nt=null,Ce=!1,hn=null;function lw(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Nt=Or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ai!==null?{id:Gn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Nt=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kd(e){if(Ce){var t=Nt;if(t){var n=t;if(!dg(e,t)){if(Gd(e))throw Error(F(418));t=Or(n.nextSibling);var r=jt;t&&dg(e,t)?lw(r,n):(e.flags=e.flags&-4097|2,Ce=!1,jt=e)}}else{if(Gd(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ce=!1,jt=e}}}function fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Va(e){if(e!==jt)return!1;if(!Ce)return fg(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$d(e.type,e.memoizedProps)),t&&(t=Nt)){if(Gd(e))throw uw(),Error(F(418));for(;t;)lw(e,t),t=Or(t.nextSibling)}if(fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=Or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=jt?Or(e.stateNode.nextSibling):null;return!0}function uw(){for(var e=Nt;e;)e=Or(e.nextSibling)}function Eo(){Nt=jt=null,Ce=!1}function Nh(e){hn===null?hn=[e]:hn.push(e)}var TP=rr.ReactCurrentBatchConfig;function ts(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hg(e){var t=e._init;return t(e._payload)}function cw(e){function t(p,y){if(e){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function r(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function i(p,y){return p=Br(p,y),p.index=0,p.sibling=null,p}function o(p,y,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,S){return y===null||y.tag!==6?(y=Mc(v,p.mode,S),y.return=p,y):(y=i(y,v),y.return=p,y)}function l(p,y,v,S){var C=v.type;return C===Hi?d(p,y,v.props.children,S,v.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&hg(C)===y.type)?(S=i(y,v.props),S.ref=ts(p,y,v),S.return=p,S):(S=vl(v.type,v.key,v.props,null,p.mode,S),S.ref=ts(p,y,v),S.return=p,S)}function u(p,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Nc(v,p.mode,S),y.return=p,y):(y=i(y,v.children||[]),y.return=p,y)}function d(p,y,v,S,C){return y===null||y.tag!==7?(y=Ti(v,p.mode,S,C),y.return=p,y):(y=i(y,v),y.return=p,y)}function c(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Mc(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return v=vl(y.type,y.key,y.props,null,p.mode,v),v.ref=ts(p,null,y),v.return=p,v;case $i:return y=Nc(y,p.mode,v),y.return=p,y;case wr:var S=y._init;return c(p,S(y._payload),v)}if(cs(y)||Qo(y))return y=Ti(y,p.mode,v,null),y.return=p,y;Ua(p,y)}return null}function h(p,y,v,S){var C=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(p,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return v.key===C?l(p,y,v,S):null;case $i:return v.key===C?u(p,y,v,S):null;case wr:return C=v._init,h(p,y,C(v._payload),S)}if(cs(v)||Qo(v))return C!==null?null:d(p,y,v,S,null);Ua(p,v)}return null}function f(p,y,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(y,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return p=p.get(S.key===null?v:S.key)||null,l(y,p,S,C);case $i:return p=p.get(S.key===null?v:S.key)||null,u(y,p,S,C);case wr:var T=S._init;return f(p,y,v,T(S._payload),C)}if(cs(S)||Qo(S))return p=p.get(v)||null,d(y,p,S,C,null);Ua(y,S)}return null}function m(p,y,v,S){for(var C=null,T=null,A=y,R=y=0,M=null;A!==null&&R<v.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var P=h(p,A,v[R],S);if(P===null){A===null&&(A=M);break}e&&A&&P.alternate===null&&t(p,A),y=o(P,y,R),T===null?C=P:T.sibling=P,T=P,A=M}if(R===v.length)return n(p,A),Ce&&li(p,R),C;if(A===null){for(;R<v.length;R++)A=c(p,v[R],S),A!==null&&(y=o(A,y,R),T===null?C=A:T.sibling=A,T=A);return Ce&&li(p,R),C}for(A=r(p,A);R<v.length;R++)M=f(A,p,R,v[R],S),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?R:M.key),y=o(M,y,R),T===null?C=M:T.sibling=M,T=M);return e&&A.forEach(function(O){return t(p,O)}),Ce&&li(p,R),C}function g(p,y,v,S){var C=Qo(v);if(typeof C!="function")throw Error(F(150));if(v=C.call(v),v==null)throw Error(F(151));for(var T=C=null,A=y,R=y=0,M=null,P=v.next();A!==null&&!P.done;R++,P=v.next()){A.index>R?(M=A,A=null):M=A.sibling;var O=h(p,A,P.value,S);if(O===null){A===null&&(A=M);break}e&&A&&O.alternate===null&&t(p,A),y=o(O,y,R),T===null?C=O:T.sibling=O,T=O,A=M}if(P.done)return n(p,A),Ce&&li(p,R),C;if(A===null){for(;!P.done;R++,P=v.next())P=c(p,P.value,S),P!==null&&(y=o(P,y,R),T===null?C=P:T.sibling=P,T=P);return Ce&&li(p,R),C}for(A=r(p,A);!P.done;R++,P=v.next())P=f(A,p,R,P.value,S),P!==null&&(e&&P.alternate!==null&&A.delete(P.key===null?R:P.key),y=o(P,y,R),T===null?C=P:T.sibling=P,T=P);return e&&A.forEach(function(N){return t(p,N)}),Ce&&li(p,R),C}function w(p,y,v,S){if(typeof v=="object"&&v!==null&&v.type===Hi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:e:{for(var C=v.key,T=y;T!==null;){if(T.key===C){if(C=v.type,C===Hi){if(T.tag===7){n(p,T.sibling),y=i(T,v.props.children),y.return=p,p=y;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wr&&hg(C)===T.type){n(p,T.sibling),y=i(T,v.props),y.ref=ts(p,T,v),y.return=p,p=y;break e}n(p,T);break}else t(p,T);T=T.sibling}v.type===Hi?(y=Ti(v.props.children,p.mode,S,v.key),y.return=p,p=y):(S=vl(v.type,v.key,v.props,null,p.mode,S),S.ref=ts(p,y,v),S.return=p,p=S)}return s(p);case $i:e:{for(T=v.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(p,y.sibling),y=i(y,v.children||[]),y.return=p,p=y;break e}else{n(p,y);break}else t(p,y);y=y.sibling}y=Nc(v,p.mode,S),y.return=p,p=y}return s(p);case wr:return T=v._init,w(p,y,T(v._payload),S)}if(cs(v))return m(p,y,v,S);if(Qo(v))return g(p,y,v,S);Ua(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(p,y.sibling),y=i(y,v),y.return=p,p=y):(n(p,y),y=Mc(v,p.mode,S),y.return=p,p=y),s(p)):n(p,y)}return w}var Po=cw(!0),dw=cw(!1),$l=Xr(null),Hl=null,Ji=null,jh=null;function Lh(){jh=Ji=Hl=null}function Oh(e){var t=$l.current;ke($l),e._currentValue=t}function Yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function uo(e,t){Hl=e,jh=Ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},Ji===null){if(Hl===null)throw Error(F(308));Ji=e,Hl.dependencies={lanes:0,firstContext:e}}else Ji=Ji.next=e;return t}var hi=null;function _h(e){hi===null?hi=[e]:hi.push(e)}function fw(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_h(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jn(e,r)}function Jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var br=!1;function Fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jn(e,n)}return i=r.interleaved,i===null?(t.next=t,_h(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jn(e,n)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}function pg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var i=e.updateQueue;br=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,f=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,g=a;switch(h=t,f=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){c=m.call(f,c,h);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,h=typeof m=="function"?m.call(f,c,h):m,h==null)break e;c=Ie({},c,h);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=f,l=c):d=d.next=f,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ii|=s,e.lanes=s,e.memoizedState=c}}function mg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var pa={},Mn=Xr(pa),$s=Xr(pa),Hs=Xr(pa);function pi(e){if(e===pa)throw Error(F(174));return e}function zh(e,t){switch(xe(Hs,t),xe($s,e),xe(Mn,pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rd(t,e)}ke(Mn),xe(Mn,t)}function Ao(){ke(Mn),ke($s),ke(Hs)}function pw(e){pi(Hs.current);var t=pi(Mn.current),n=Rd(t,e.type);t!==n&&(xe($s,e),xe(Mn,n))}function Bh(e){$s.current===e&&(ke(Mn),ke($s))}var Pe=Xr(0);function ql(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ec=[];function Vh(){for(var e=0;e<Ec.length;e++)Ec[e]._workInProgressVersionPrimary=null;Ec.length=0}var hl=rr.ReactCurrentDispatcher,Pc=rr.ReactCurrentBatchConfig,Ri=0,Re=null,Ve=null,He=null,Gl=!1,ws=!1,Ws=0,CP=0;function Je(){throw Error(F(321))}function Uh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function $h(e,t,n,r,i,o){if(Ri=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?RP:IP,e=n(r,i),ws){o=0;do{if(ws=!1,Ws=0,25<=o)throw Error(F(301));o+=1,He=Ve=null,t.updateQueue=null,hl.current=DP,e=n(r,i)}while(ws)}if(hl.current=Kl,t=Ve!==null&&Ve.next!==null,Ri=0,He=Ve=Re=null,Gl=!1,t)throw Error(F(300));return e}function Hh(){var e=Ws!==0;return Ws=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Re.memoizedState=He=e:He=He.next=e,He}function Jt(){if(Ve===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=He===null?Re.memoizedState:He.next;if(t!==null)He=t,Ve=e;else{if(e===null)throw Error(F(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},He===null?Re.memoizedState=He=e:He=He.next=e}return He}function qs(e,t){return typeof t=="function"?t(e):t}function Ac(e){var t=Jt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Ri&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,Re.lanes|=d,Ii|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,yn(r,t.memoizedState)||(bt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,Ii|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rc(e){var t=Jt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yn(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mw(){}function gw(e,t){var n=Re,r=Jt(),i=t(),o=!yn(r.memoizedState,i);if(o&&(r.memoizedState=i,bt=!0),r=r.queue,Wh(xw.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Gs(9,vw.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(F(349));Ri&30||yw(n,t,i)}return i}function yw(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vw(e,t,n,r){t.value=n,t.getSnapshot=r,ww(t)&&bw(e)}function xw(e,t,n){return n(function(){ww(t)&&bw(e)})}function ww(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function bw(e){var t=Jn(e,1);t!==null&&mn(t,e,1,-1)}function gg(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qs,lastRenderedState:e},t.queue=e,e=e.dispatch=AP.bind(null,Re,e),[t.memoizedState,e]}function Gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kw(){return Jt().memoizedState}function pl(e,t,n,r){var i=Tn();Re.flags|=e,i.memoizedState=Gs(1|t,n,void 0,r===void 0?null:r)}function Pu(e,t,n,r){var i=Jt();r=r===void 0?null:r;var o=void 0;if(Ve!==null){var s=Ve.memoizedState;if(o=s.destroy,r!==null&&Uh(r,s.deps)){i.memoizedState=Gs(t,n,o,r);return}}Re.flags|=e,i.memoizedState=Gs(1|t,n,o,r)}function yg(e,t){return pl(8390656,8,e,t)}function Wh(e,t){return Pu(2048,8,e,t)}function Sw(e,t){return Pu(4,2,e,t)}function Tw(e,t){return Pu(4,4,e,t)}function Cw(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ew(e,t,n){return n=n!=null?n.concat([e]):null,Pu(4,4,Cw.bind(null,t,e),n)}function qh(){}function Pw(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Aw(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rw(e,t,n){return Ri&21?(yn(n,t)||(n=j0(),Re.lanes|=n,Ii|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=n)}function EP(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Pc.transition;Pc.transition={};try{e(!1),t()}finally{pe=n,Pc.transition=r}}function Iw(){return Jt().memoizedState}function PP(e,t,n){var r=zr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dw(e))Mw(t,n);else if(n=fw(e,t,n,r),n!==null){var i=pt();mn(n,e,r,i),Nw(n,t,r)}}function AP(e,t,n){var r=zr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dw(e))Mw(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,s)){var l=t.interleaved;l===null?(i.next=i,_h(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=fw(e,t,i,r),n!==null&&(i=pt(),mn(n,e,r,i),Nw(n,t,r))}}function Dw(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Mw(e,t){ws=Gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}var Kl={readContext:Xt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},RP={readContext:Xt,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:yg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pl(4194308,4,Cw.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return pl(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=PP.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:gg,useDebugValue:qh,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=gg(!1),t=e[0];return e=EP.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=Tn();if(Ce){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),qe===null)throw Error(F(349));Ri&30||yw(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yg(xw.bind(null,r,o,e),[e]),r.flags|=2048,Gs(9,vw.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tn(),t=qe.identifierPrefix;if(Ce){var n=Kn,r=Gn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ws++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=CP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},IP={readContext:Xt,useCallback:Pw,useContext:Xt,useEffect:Wh,useImperativeHandle:Ew,useInsertionEffect:Sw,useLayoutEffect:Tw,useMemo:Aw,useReducer:Ac,useRef:kw,useState:function(){return Ac(qs)},useDebugValue:qh,useDeferredValue:function(e){var t=Jt();return Rw(t,Ve.memoizedState,e)},useTransition:function(){var e=Ac(qs)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:mw,useSyncExternalStore:gw,useId:Iw,unstable_isNewReconciler:!1},DP={readContext:Xt,useCallback:Pw,useContext:Xt,useEffect:Wh,useImperativeHandle:Ew,useInsertionEffect:Sw,useLayoutEffect:Tw,useMemo:Aw,useReducer:Rc,useRef:kw,useState:function(){return Rc(qs)},useDebugValue:qh,useDeferredValue:function(e){var t=Jt();return Ve===null?t.memoizedState=e:Rw(t,Ve.memoizedState,e)},useTransition:function(){var e=Rc(qs)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:mw,useSyncExternalStore:gw,useId:Iw,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Au={isMounted:function(e){return(e=e._reactInternals)?Li(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=zr(e),o=Yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(mn(t,e,i,r),fl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=zr(e),o=Yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(mn(t,e,i,r),fl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=zr(e),i=Yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,r),t!==null&&(mn(t,e,r,n),fl(t,e,r))}};function vg(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zs(n,r)||!zs(i,o):!0}function jw(e,t,n){var r=!1,i=$r,o=t.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=St(t)?Pi:it.current,r=t.contextTypes,o=(r=r!=null)?Co(e,i):$r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Au,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function Xd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=St(t)?Pi:it.current,i.context=Co(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Au.enqueueReplaceState(i,i.state,null),Wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ro(e,t){try{var n="",r=t;do n+=oE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ic(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var MP=typeof WeakMap=="function"?WeakMap:Map;function Lw(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ql||(Ql=!0,uf=r),Jd(e,t)},n}function Ow(e,t,n){n=Yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jd(e,t),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new MP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qP.bind(null,e,t,n),t.then(e,e))}function bg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var NP=rr.ReactCurrentOwner,bt=!1;function ut(e,t,n,r){t.child=e===null?dw(t,null,n,r):Po(t,e.child,n,r)}function Sg(e,t,n,r,i){n=n.render;var o=t.ref;return uo(t,i),r=$h(e,t,n,r,o,i),n=Hh(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ce&&n&&Dh(t),t.flags|=1,ut(e,t,r,i),t.child)}function Tg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ep(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_w(e,t,o,r,i)):(e=vl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(s,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=Br(o,r),e.ref=t.ref,e.return=t,t.child=e}function _w(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zs(o,r)&&e.ref===t.ref)if(bt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return Zd(e,t,n,r,i)}function Fw(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(eo,Dt),Dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(eo,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(eo,Dt),Dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(eo,Dt),Dt|=r;return ut(e,t,i,n),t.child}function zw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zd(e,t,n,r,i){var o=St(n)?Pi:it.current;return o=Co(t,o),uo(t,i),n=$h(e,t,n,r,o,i),r=Hh(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ce&&r&&Dh(t),t.flags|=1,ut(e,t,n,i),t.child)}function Cg(e,t,n,r,i){if(St(n)){var o=!0;Bl(t)}else o=!1;if(uo(t,i),t.stateNode===null)ml(e,t),jw(t,n,r),Xd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=St(n)?Pi:it.current,u=Co(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&xg(t,s,r,u),br=!1;var h=t.memoizedState;s.state=h,Wl(t,r,s,i),l=t.memoizedState,a!==r||h!==l||kt.current||br?(typeof d=="function"&&(Qd(t,n,d,r),l=t.memoizedState),(a=br||vg(t,n,a,r,h,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hw(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ln(t.type,a),s.props=u,c=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=St(n)?Pi:it.current,l=Co(t,l));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||h!==l)&&xg(t,s,r,l),br=!1,h=t.memoizedState,s.state=h,Wl(t,r,s,i);var m=t.memoizedState;a!==c||h!==m||kt.current||br?(typeof f=="function"&&(Qd(t,n,f,r),m=t.memoizedState),(u=br||vg(t,n,u,r,h,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ef(e,t,n,r,o,i)}function ef(e,t,n,r,i,o){zw(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&cg(t,n,!1),Zn(e,t,o);r=t.stateNode,NP.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Po(t,e.child,null,o),t.child=Po(t,null,a,o)):ut(e,t,a,o),t.memoizedState=r.state,i&&cg(t,n,!0),t.child}function Bw(e){var t=e.stateNode;t.pendingContext?ug(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ug(e,t.context,!1),zh(e,t.containerInfo)}function Eg(e,t,n,r,i){return Eo(),Nh(i),t.flags|=256,ut(e,t,n,r),t.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vw(e,t,n){var r=t.pendingProps,i=Pe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Pe,i&1),e===null)return Kd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Du(s,r,0,null),e=Ti(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=nf(n),t.memoizedState=tf,e):Gh(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jP(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Br(a,o):(o=Ti(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?nf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=tf,r}return o=e.child,e=o.sibling,r=Br(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gh(e,t){return t=Du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $a(e,t,n,r){return r!==null&&Nh(r),Po(t,e.child,null,n),e=Gh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jP(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ic(Error(F(422))),$a(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Du({mode:"visible",children:r.children},i,0,null),o=Ti(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Po(t,e.child,null,s),t.child.memoizedState=nf(s),t.memoizedState=tf,o);if(!(t.mode&1))return $a(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(F(419)),r=Ic(o,r,void 0),$a(e,t,s,r)}if(a=(s&e.childLanes)!==0,bt||a){if(r=qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jn(e,i),mn(r,e,i,-1))}return Zh(),r=Ic(Error(F(421))),$a(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=GP.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=Or(i.nextSibling),jt=t,Ce=!0,hn=null,e!==null&&(Ht[Wt++]=Gn,Ht[Wt++]=Kn,Ht[Wt++]=Ai,Gn=e.id,Kn=e.overflow,Ai=t),t=Gh(t,r.children),t.flags|=4096,t)}function Pg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yd(e.return,t,n)}function Dc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uw(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ut(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pg(e,n,t);else if(e.tag===19)Pg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ql(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ql(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,o);break;case"together":Dc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ml(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ii|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function LP(e,t,n){switch(t.tag){case 3:Bw(t),Eo();break;case 5:pw(t);break;case 1:St(t.type)&&Bl(t);break;case 4:zh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe($l,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Vw(e,t,n):(xe(Pe,Pe.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);xe(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uw(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Fw(e,t,n)}return Zn(e,t,n)}var $w,rf,Hw,Ww;$w=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};Hw=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pi(Mn.current);var o=null;switch(n){case"input":i=Cd(e,i),r=Cd(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=Ad(e,i),r=Ad(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fl)}Id(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ms.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ww=function(e,t,n,r){n!==r&&(t.flags|=4)};function ns(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function OP(e,t,n){var r=t.pendingProps;switch(Mh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return St(t.type)&&zl(),Ze(t),null;case 3:return r=t.stateNode,Ao(),ke(kt),ke(it),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(ff(hn),hn=null))),rf(e,t),Ze(t),null;case 5:Bh(t);var i=pi(Hs.current);if(n=t.type,e!==null&&t.stateNode!=null)Hw(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ze(t),null}if(e=pi(Mn.current),Va(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rn]=t,r[Us]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<fs.length;i++)be(fs[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Om(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Fm(r,o),be("invalid",r)}Id(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",""+a]):Ms.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&be("scroll",r)}switch(n){case"input":Ma(r),_m(r,o,!0);break;case"textarea":Ma(r),zm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=x0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Rn]=t,e[Us]=r,$w(e,t,!1,!1),t.stateNode=e;e:{switch(s=Dd(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<fs.length;i++)be(fs[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":Om(e,r),i=Cd(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),be("invalid",e);break;case"textarea":Fm(e,r),i=Ad(e,r),be("invalid",e);break;default:i=r}Id(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?k0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ns(e,l):typeof l=="number"&&Ns(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ms.hasOwnProperty(o)?l!=null&&o==="onScroll"&&be("scroll",e):l!=null&&yh(e,o,l,s))}switch(n){case"input":Ma(e),_m(e,r,!1);break;case"textarea":Ma(e),zm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ur(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?oo(e,!!r.multiple,o,!1):r.defaultValue!=null&&oo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Ww(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=pi(Hs.current),pi(Mn.current),Va(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rn]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ke(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Nt!==null&&t.mode&1&&!(t.flags&128))uw(),Eo(),t.flags|=98560,o=!1;else if(o=Va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Rn]=t}else Eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else hn!==null&&(ff(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?$e===0&&($e=3):Zh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ao(),rf(e,t),e===null&&Bs(t.stateNode.containerInfo),Ze(t),null;case 10:return Oh(t.type._context),Ze(t),null;case 17:return St(t.type)&&zl(),Ze(t),null;case 19:if(ke(Pe),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ns(o,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ql(e),s!==null){for(t.flags|=128,ns(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Pe,Pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Io&&(t.flags|=128,r=!0,ns(o,!1),t.lanes=4194304)}else{if(!r)if(e=ql(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ns(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ce)return Ze(t),null}else 2*je()-o.renderingStartTime>Io&&n!==1073741824&&(t.flags|=128,r=!0,ns(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=Pe.current,xe(Pe,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Jh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Dt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function _P(e,t){switch(Mh(t),t.tag){case 1:return St(t.type)&&zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),ke(kt),ke(it),Vh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bh(t),null;case 13:if(ke(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Pe),null;case 4:return Ao(),null;case 10:return Oh(t.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var Ha=!1,tt=!1,FP=typeof WeakSet=="function"?WeakSet:Set,q=null;function Zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function of(e,t,n){try{n()}catch(r){Me(e,t,r)}}var Ag=!1;function zP(e,t){if(Vd=Ll,e=Q0(),Ih(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=e,h=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(f=c.firstChild)!==null;)h=c,c=f;for(;;){if(c===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(f=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},Ll=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,p=t.stateNode,y=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:ln(t.type,g),w);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){Me(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return m=Ag,Ag=!1,m}function bs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&of(t,n,o)}i=i.next}while(i!==r)}}function Ru(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qw(e){var t=e.alternate;t!==null&&(e.alternate=null,qw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Us],delete t[Wd],delete t[bP],delete t[kP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gw(e){return e.tag===5||e.tag===3||e.tag===4}function Rg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fl));else if(r!==4&&(e=e.child,e!==null))for(af(e,t,n),e=e.sibling;e!==null;)af(e,t,n),e=e.sibling}function lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lf(e,t,n),e=e.sibling;e!==null;)lf(e,t,n),e=e.sibling}var Ge=null,fn=!1;function hr(e,t,n){for(n=n.child;n!==null;)Kw(e,t,n),n=n.sibling}function Kw(e,t,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:tt||Zi(n,t);case 6:var r=Ge,i=fn;Ge=null,hr(e,t,n),Ge=r,fn=i,Ge!==null&&(fn?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(fn?(e=Ge,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),_s(e)):Tc(Ge,n.stateNode));break;case 4:r=Ge,i=fn,Ge=n.stateNode.containerInfo,fn=!0,hr(e,t,n),Ge=r,fn=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&of(n,t,s),i=i.next}while(i!==r)}hr(e,t,n);break;case 1:if(!tt&&(Zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,t,a)}hr(e,t,n);break;case 21:hr(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,hr(e,t,n),tt=r):hr(e,t,n);break;default:hr(e,t,n)}}function Ig(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new FP),t.forEach(function(r){var i=KP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,fn=!1;break e;case 3:Ge=a.stateNode.containerInfo,fn=!0;break e;case 4:Ge=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(Ge===null)throw Error(F(160));Kw(o,s,i),Ge=null,fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yw(t,e),t=t.sibling}function Yw(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(t,e),Sn(e),r&4){try{bs(3,e,e.return),Ru(3,e)}catch(g){Me(e,e.return,g)}try{bs(5,e,e.return)}catch(g){Me(e,e.return,g)}}break;case 1:rn(t,e),Sn(e),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(rn(t,e),Sn(e),r&512&&n!==null&&Zi(n,n.return),e.flags&32){var i=e.stateNode;try{Ns(i,"")}catch(g){Me(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&y0(i,o),Dd(a,s);var u=Dd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?k0(i,c):d==="dangerouslySetInnerHTML"?w0(i,c):d==="children"?Ns(i,c):yh(i,d,c,u)}switch(a){case"input":Ed(i,o);break;case"textarea":v0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?oo(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?oo(i,!!o.multiple,o.defaultValue,!0):oo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Us]=o}catch(g){Me(e,e.return,g)}}break;case 6:if(rn(t,e),Sn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Me(e,e.return,g)}}break;case 3:if(rn(t,e),Sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(t.containerInfo)}catch(g){Me(e,e.return,g)}break;case 4:rn(t,e),Sn(e);break;case 13:rn(t,e),Sn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qh=je())),r&4&&Ig(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||d,rn(t,e),tt=u):rn(t,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(c=q=d;q!==null;){switch(h=q,f=h.child,h.tag){case 0:case 11:case 14:case 15:bs(4,h,h.return);break;case 1:Zi(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Me(r,n,g)}}break;case 5:Zi(h,h.return);break;case 22:if(h.memoizedState!==null){Mg(c);continue}}f!==null?(f.return=h,q=f):Mg(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b0("display",s))}catch(g){Me(e,e.return,g)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){Me(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rn(t,e),Sn(e),r&4&&Ig(e);break;case 21:break;default:rn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ns(i,""),r.flags&=-33);var o=Rg(e);lf(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rg(e);af(e,a,s);break;default:throw Error(F(161))}}catch(l){Me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function BP(e,t,n){q=e,Qw(e)}function Qw(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ha;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=Ha;var u=tt;if(Ha=s,(tt=l)&&!u)for(q=i;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?Ng(i):l!==null?(l.return=s,q=l):Ng(i);for(;o!==null;)q=o,Qw(o),o=o.sibling;q=i,Ha=a,tt=u}Dg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):Dg(e)}}function Dg(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Ru(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mg(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mg(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&_s(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||t.flags&512&&sf(t)}catch(h){Me(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Mg(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Ng(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ru(4,t)}catch(l){Me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Me(t,i,l)}}var o=t.return;try{sf(t)}catch(l){Me(t,o,l)}break;case 5:var s=t.return;try{sf(t)}catch(l){Me(t,s,l)}}}catch(l){Me(t,t.return,l)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var VP=Math.ceil,Yl=rr.ReactCurrentDispatcher,Kh=rr.ReactCurrentOwner,Yt=rr.ReactCurrentBatchConfig,ce=0,qe=null,ze=null,Ye=0,Dt=0,eo=Xr(0),$e=0,Ks=null,Ii=0,Iu=0,Yh=0,ks=null,wt=null,Qh=0,Io=1/0,Hn=null,Ql=!1,uf=null,Fr=null,Wa=!1,Ir=null,Xl=0,Ss=0,cf=null,gl=-1,yl=0;function pt(){return ce&6?je():gl!==-1?gl:gl=je()}function zr(e){return e.mode&1?ce&2&&Ye!==0?Ye&-Ye:TP.transition!==null?(yl===0&&(yl=j0()),yl):(e=pe,e!==0||(e=window.event,e=e===void 0?16:V0(e.type)),e):1}function mn(e,t,n,r){if(50<Ss)throw Ss=0,cf=null,Error(F(185));da(e,n,r),(!(ce&2)||e!==qe)&&(e===qe&&(!(ce&2)&&(Iu|=n),$e===4&&Sr(e,Ye)),Tt(e,r),n===1&&ce===0&&!(t.mode&1)&&(Io=je()+500,Eu&&Jr()))}function Tt(e,t){var n=e.callbackNode;TE(e,t);var r=jl(e,e===qe?Ye:0);if(r===0)n!==null&&Um(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Um(n),t===1)e.tag===0?SP(jg.bind(null,e)):sw(jg.bind(null,e)),xP(function(){!(ce&6)&&Jr()}),n=null;else{switch(L0(r)){case 1:n=kh;break;case 4:n=M0;break;case 16:n=Nl;break;case 536870912:n=N0;break;default:n=Nl}n=i1(n,Xw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xw(e,t){if(gl=-1,yl=0,ce&6)throw Error(F(327));var n=e.callbackNode;if(co()&&e.callbackNode!==n)return null;var r=jl(e,e===qe?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jl(e,r);else{t=r;var i=ce;ce|=2;var o=Zw();(qe!==e||Ye!==t)&&(Hn=null,Io=je()+500,Si(e,t));do try{HP();break}catch(a){Jw(e,a)}while(!0);Lh(),Yl.current=o,ce=i,ze!==null?t=0:(qe=null,Ye=0,t=$e)}if(t!==0){if(t===2&&(i=Od(e),i!==0&&(r=i,t=df(e,i))),t===1)throw n=Ks,Si(e,0),Sr(e,r),Tt(e,je()),n;if(t===6)Sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!UP(i)&&(t=Jl(e,r),t===2&&(o=Od(e),o!==0&&(r=o,t=df(e,o))),t===1))throw n=Ks,Si(e,0),Sr(e,r),Tt(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:ui(e,wt,Hn);break;case 3:if(Sr(e,r),(r&130023424)===r&&(t=Qh+500-je(),10<t)){if(jl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hd(ui.bind(null,e,wt,Hn),t);break}ui(e,wt,Hn);break;case 4:if(Sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VP(r/1960))-r,10<r){e.timeoutHandle=Hd(ui.bind(null,e,wt,Hn),r);break}ui(e,wt,Hn);break;case 5:ui(e,wt,Hn);break;default:throw Error(F(329))}}}return Tt(e,je()),e.callbackNode===n?Xw.bind(null,e):null}function df(e,t){var n=ks;return e.current.memoizedState.isDehydrated&&(Si(e,t).flags|=256),e=Jl(e,t),e!==2&&(t=wt,wt=n,t!==null&&ff(t)),e}function ff(e){wt===null?wt=e:wt.push.apply(wt,e)}function UP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sr(e,t){for(t&=~Yh,t&=~Iu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),r=1<<n;e[n]=-1,t&=~r}}function jg(e){if(ce&6)throw Error(F(327));co();var t=jl(e,0);if(!(t&1))return Tt(e,je()),null;var n=Jl(e,t);if(e.tag!==0&&n===2){var r=Od(e);r!==0&&(t=r,n=df(e,r))}if(n===1)throw n=Ks,Si(e,0),Sr(e,t),Tt(e,je()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ui(e,wt,Hn),Tt(e,je()),null}function Xh(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Io=je()+500,Eu&&Jr())}}function Di(e){Ir!==null&&Ir.tag===0&&!(ce&6)&&co();var t=ce;ce|=1;var n=Yt.transition,r=pe;try{if(Yt.transition=null,pe=1,e)return e()}finally{pe=r,Yt.transition=n,ce=t,!(ce&6)&&Jr()}}function Jh(){Dt=eo.current,ke(eo)}function Si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vP(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Ao(),ke(kt),ke(it),Vh();break;case 5:Bh(r);break;case 4:Ao();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:Oh(r.type._context);break;case 22:case 23:Jh()}n=n.return}if(qe=e,ze=e=Br(e.current,null),Ye=Dt=t,$e=0,Ks=null,Yh=Iu=Ii=0,wt=ks=null,hi!==null){for(t=0;t<hi.length;t++)if(n=hi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}hi=null}return e}function Jw(e,t){do{var n=ze;try{if(Lh(),hl.current=Kl,Gl){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Ri=0,He=Ve=Re=null,ws=!1,Ws=0,Kh.current=null,n===null||n.return===null){$e=1,Ks=t,ze=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=bg(s);if(f!==null){f.flags&=-257,kg(f,s,a,o,t),f.mode&1&&wg(o,u,t),t=f,l=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}else{if(!(t&1)){wg(o,u,t),Zh();break e}l=Error(F(426))}}else if(Ce&&a.mode&1){var w=bg(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),kg(w,s,a,o,t),Nh(Ro(l,a));break e}}o=l=Ro(l,a),$e!==4&&($e=2),ks===null?ks=[o]:ks.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Lw(o,l,t);pg(o,p);break e;case 1:a=l;var y=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Ow(o,a,t);pg(o,S);break e}}o=o.return}while(o!==null)}t1(n)}catch(C){t=C,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Zw(){var e=Yl.current;return Yl.current=Kl,e===null?Kl:e}function Zh(){($e===0||$e===3||$e===2)&&($e=4),qe===null||!(Ii&268435455)&&!(Iu&268435455)||Sr(qe,Ye)}function Jl(e,t){var n=ce;ce|=2;var r=Zw();(qe!==e||Ye!==t)&&(Hn=null,Si(e,t));do try{$P();break}catch(i){Jw(e,i)}while(!0);if(Lh(),ce=n,Yl.current=r,ze!==null)throw Error(F(261));return qe=null,Ye=0,$e}function $P(){for(;ze!==null;)e1(ze)}function HP(){for(;ze!==null&&!mE();)e1(ze)}function e1(e){var t=r1(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?t1(e):ze=t,Kh.current=null}function t1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_P(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,ze=null;return}}else if(n=OP(n,t,Dt),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);$e===0&&($e=5)}function ui(e,t,n){var r=pe,i=Yt.transition;try{Yt.transition=null,pe=1,WP(e,t,n,r)}finally{Yt.transition=i,pe=r}return null}function WP(e,t,n,r){do co();while(Ir!==null);if(ce&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(CE(e,o),e===qe&&(ze=qe=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,i1(Nl,function(){return co(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var s=pe;pe=1;var a=ce;ce|=4,Kh.current=null,zP(e,n),Yw(n,e),dP(Ud),Ll=!!Vd,Ud=Vd=null,e.current=n,BP(n),gE(),ce=a,pe=s,Yt.transition=o}else e.current=n;if(Wa&&(Wa=!1,Ir=e,Xl=i),o=e.pendingLanes,o===0&&(Fr=null),xE(n.stateNode),Tt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ql)throw Ql=!1,e=uf,uf=null,e;return Xl&1&&e.tag!==0&&co(),o=e.pendingLanes,o&1?e===cf?Ss++:(Ss=0,cf=e):Ss=0,Jr(),null}function co(){if(Ir!==null){var e=L0(Xl),t=Yt.transition,n=pe;try{if(Yt.transition=null,pe=16>e?16:e,Ir===null)var r=!1;else{if(e=Ir,Ir=null,Xl=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,q=e.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:bs(8,d,o)}var c=d.child;if(c!==null)c.return=d,q=c;else for(;q!==null;){d=q;var h=d.sibling,f=d.return;if(qw(d),d===u){q=null;break}if(h!==null){h.return=f,q=h;break}q=f}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bs(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,q=p;break e}q=o.return}}var y=e.current;for(q=y;q!==null;){s=q;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,q=v;else e:for(s=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ru(9,a)}}catch(C){Me(a,a.return,C)}if(a===s){q=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,q=S;break e}q=a.return}}if(ce=i,Jr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(bu,e)}catch{}r=!0}return r}finally{pe=n,Yt.transition=t}}return!1}function Lg(e,t,n){t=Ro(n,t),t=Lw(e,t,1),e=_r(e,t,1),t=pt(),e!==null&&(da(e,1,t),Tt(e,t))}function Me(e,t,n){if(e.tag===3)Lg(e,e,n);else for(;t!==null;){if(t.tag===3){Lg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){e=Ro(n,e),e=Ow(t,e,1),t=_r(t,e,1),e=pt(),t!==null&&(da(t,1,e),Tt(t,e));break}}t=t.return}}function qP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ye&n)===n&&($e===4||$e===3&&(Ye&130023424)===Ye&&500>je()-Qh?Si(e,0):Yh|=n),Tt(e,t)}function n1(e,t){t===0&&(e.mode&1?(t=La,La<<=1,!(La&130023424)&&(La=4194304)):t=1);var n=pt();e=Jn(e,t),e!==null&&(da(e,t,n),Tt(e,n))}function GP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n1(e,n)}function KP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),n1(e,n)}var r1;r1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return bt=!1,LP(e,t,n);bt=!!(e.flags&131072)}else bt=!1,Ce&&t.flags&1048576&&aw(t,Ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ml(e,t),e=t.pendingProps;var i=Co(t,it.current);uo(t,n),i=$h(null,t,r,e,i,n);var o=Hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(o=!0,Bl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fh(t),i.updater=Au,t.stateNode=i,i._reactInternals=t,Xd(t,r,e,n),t=ef(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Dh(t),ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ml(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=QP(r),e=ln(r,e),i){case 0:t=Zd(null,t,r,e,n);break e;case 1:t=Cg(null,t,r,e,n);break e;case 11:t=Sg(null,t,r,e,n);break e;case 14:t=Tg(null,t,r,ln(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Zd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Cg(e,t,r,i,n);case 3:e:{if(Bw(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hw(e,t),Wl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ro(Error(F(423)),t),t=Eg(e,t,r,n,i);break e}else if(r!==i){i=Ro(Error(F(424)),t),t=Eg(e,t,r,n,i);break e}else for(Nt=Or(t.stateNode.containerInfo.firstChild),jt=t,Ce=!0,hn=null,n=dw(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===i){t=Zn(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return pw(t),e===null&&Kd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,$d(r,i)?s=null:o!==null&&$d(r,o)&&(t.flags|=32),zw(e,t),ut(e,t,s,n),t.child;case 6:return e===null&&Kd(t),null;case 13:return Vw(e,t,n);case 4:return zh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Po(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Sg(e,t,r,i,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,xe($l,r._currentValue),r._currentValue=s,o!==null)if(yn(o.value,s)){if(o.children===i.children&&!kt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Yd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,uo(t,n),i=Xt(i),r=r(i),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,i=ln(r,t.pendingProps),i=ln(r.type,i),Tg(e,t,r,i,n);case 15:return _w(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),ml(e,t),t.tag=1,St(r)?(e=!0,Bl(t)):e=!1,uo(t,n),jw(t,r,i),Xd(t,r,i,n),ef(null,t,r,!0,e,n);case 19:return Uw(e,t,n);case 22:return Fw(e,t,n)}throw Error(F(156,t.tag))};function i1(e,t){return D0(e,t)}function YP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,r){return new YP(e,t,n,r)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function QP(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xh)return 11;if(e===wh)return 14}return 2}function Br(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ep(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Hi:return Ti(n.children,i,o,t);case vh:s=8,i|=8;break;case bd:return e=Gt(12,n,t,i|2),e.elementType=bd,e.lanes=o,e;case kd:return e=Gt(13,n,t,i),e.elementType=kd,e.lanes=o,e;case Sd:return e=Gt(19,n,t,i),e.elementType=Sd,e.lanes=o,e;case p0:return Du(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case f0:s=10;break e;case h0:s=9;break e;case xh:s=11;break e;case wh:s=14;break e;case wr:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ti(e,t,n,r){return e=Gt(7,e,r,t),e.lanes=n,e}function Du(e,t,n,r){return e=Gt(22,e,r,t),e.elementType=p0,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function Nc(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function XP(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tp(e,t,n,r,i,o,s,a,l){return e=new XP(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(o),e}function JP(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function o1(e){if(!e)return $r;e=e._reactInternals;e:{if(Li(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(St(n))return ow(e,n,t)}return t}function s1(e,t,n,r,i,o,s,a,l){return e=tp(n,r,!0,e,i,o,s,a,l),e.context=o1(null),n=e.current,r=pt(),i=zr(n),o=Yn(r,i),o.callback=t??null,_r(n,o,i),e.current.lanes=i,da(e,i,r),Tt(e,r),e}function Mu(e,t,n,r){var i=t.current,o=pt(),s=zr(i);return n=o1(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(i,t,s),e!==null&&(mn(e,i,s,o),fl(e,i,s)),s}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function np(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function ZP(){return null}var a1=typeof reportError=="function"?reportError:function(e){console.error(e)};function rp(e){this._internalRoot=e}Nu.prototype.render=rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Mu(e,t,null,null)};Nu.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Di(function(){Mu(null,e,null,null)}),t[Xn]=null}};function Nu(e){this._internalRoot=e}Nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=F0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kr.length&&t!==0&&t<kr[n].priority;n++);kr.splice(n,0,e),n===0&&B0(e)}};function ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _g(){}function eA(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Zl(s);o.call(u)}}var s=s1(t,r,e,0,null,!1,!1,"",_g);return e._reactRootContainer=s,e[Xn]=s.current,Bs(e.nodeType===8?e.parentNode:e),Di(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zl(l);a.call(u)}}var l=tp(e,0,!1,null,null,!1,!1,"",_g);return e._reactRootContainer=l,e[Xn]=l.current,Bs(e.nodeType===8?e.parentNode:e),Di(function(){Mu(t,l,n,r)}),l}function Lu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Zl(s);a.call(l)}}Mu(t,s,e,i)}else s=eA(n,t,e,i,r);return Zl(s)}O0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ds(t.pendingLanes);n!==0&&(Sh(t,n|1),Tt(t,je()),!(ce&6)&&(Io=je()+500,Jr()))}break;case 13:Di(function(){var r=Jn(e,1);if(r!==null){var i=pt();mn(r,e,1,i)}}),np(e,1)}};Th=function(e){if(e.tag===13){var t=Jn(e,134217728);if(t!==null){var n=pt();mn(t,e,134217728,n)}np(e,134217728)}};_0=function(e){if(e.tag===13){var t=zr(e),n=Jn(e,t);if(n!==null){var r=pt();mn(n,e,t,r)}np(e,t)}};F0=function(){return pe};z0=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Nd=function(e,t,n){switch(t){case"input":if(Ed(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Cu(r);if(!i)throw Error(F(90));g0(r),Ed(r,i)}}}break;case"textarea":v0(e,n);break;case"select":t=n.value,t!=null&&oo(e,!!n.multiple,t,!1)}};C0=Xh;E0=Di;var tA={usingClientEntryPoint:!1,Events:[ha,Ki,Cu,S0,T0,Xh]},rs={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nA={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=R0(e),e===null?null:e.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||ZP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{bu=qa.inject(nA),Dn=qa}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tA;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(t))throw Error(F(200));return JP(e,t,null,n)};zt.createRoot=function(e,t){if(!ip(e))throw Error(F(299));var n=!1,r="",i=a1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,Bs(e.nodeType===8?e.parentNode:e),new rp(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=R0(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Di(e)};zt.hydrate=function(e,t,n){if(!ju(t))throw Error(F(200));return Lu(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!ip(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=a1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=s1(t,null,e,1,n??null,i,!1,o,s),e[Xn]=t.current,Bs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Nu(t)};zt.render=function(e,t,n){if(!ju(t))throw Error(F(200));return Lu(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!ju(e))throw Error(F(40));return e._reactRootContainer?(Di(function(){Lu(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};zt.unstable_batchedUpdates=Xh;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ju(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Lu(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function l1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1)}catch(e){console.error(e)}}l1(),l0.exports=zt;var ma=l0.exports;const u1=xu(ma);var c1,Fg=ma;c1=Fg.createRoot,Fg.hydrateRoot;const rA=1,iA=1e6;let jc=0;function oA(){return jc=(jc+1)%Number.MAX_SAFE_INTEGER,jc.toString()}const Lc=new Map,zg=e=>{if(Lc.has(e))return;const t=setTimeout(()=>{Lc.delete(e),Ts({type:"REMOVE_TOAST",toastId:e})},iA);Lc.set(e,t)},sA=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,rA)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?zg(n):e.toasts.forEach(r=>{zg(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},xl=[];let wl={toasts:[]};function Ts(e){wl=sA(wl,e),xl.forEach(t=>{t(wl)})}function aA({...e}){const t=oA(),n=i=>Ts({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Ts({type:"DISMISS_TOAST",toastId:t});return Ts({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function lA(){const[e,t]=b.useState(wl);return b.useEffect(()=>(xl.push(t),()=>{const n=xl.indexOf(t);n>-1&&xl.splice(n,1)}),[e]),{...e,toast:aA,dismiss:n=>Ts({type:"DISMISS_TOAST",toastId:n})}}function Ue(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Bg(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function d1(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Bg(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Bg(e[i],null)}}}}function vn(...e){return b.useCallback(d1(...e),e)}function Ou(e,t=[]){let n=[];function r(o,s){const a=b.createContext(s),l=n.length;n=[...n,s];const u=c=>{var p;const{scope:h,children:f,...m}=c,g=((p=h==null?void 0:h[e])==null?void 0:p[l])||a,w=b.useMemo(()=>m,Object.values(m));return x.jsx(g.Provider,{value:w,children:f})};u.displayName=o+"Provider";function d(c,h){var g;const f=((g=h==null?void 0:h[e])==null?void 0:g[l])||a,m=b.useContext(f);if(m)return m;if(s!==void 0)return s;throw new Error(`\`${c}\` must be used within \`${o}\``)}return[u,d]}const i=()=>{const o=n.map(s=>b.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return b.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,uA(i,...t)]}function uA(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const c=l(o)[`__scope${u}`];return{...a,...c}},{});return b.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function eu(e){const t=dA(e),n=b.forwardRef((r,i)=>{const{children:o,...s}=r,a=b.Children.toArray(o),l=a.find(hA);if(l){const u=l.props.children,d=a.map(c=>c===l?b.Children.count(u)>1?b.Children.only(null):b.isValidElement(u)?u.props.children:null:c);return x.jsx(t,{...s,ref:i,children:b.isValidElement(u)?b.cloneElement(u,void 0,d):null})}return x.jsx(t,{...s,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var cA=eu("Slot");function dA(e){const t=b.forwardRef((n,r)=>{const{children:i,...o}=n;if(b.isValidElement(i)){const s=mA(i),a=pA(o,i.props);return i.type!==b.Fragment&&(a.ref=r?d1(r,s):s),b.cloneElement(i,a)}return b.Children.count(i)>1?b.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var f1=Symbol("radix.slottable");function fA(e){const t=({children:n})=>x.jsx(x.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=f1,t}function hA(e){return b.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===f1}function pA(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{const l=o(...a);return i(...a),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function mA(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function gA(e){const t=e+"CollectionProvider",[n,r]=Ou(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:w,children:p}=g,y=V.useRef(null),v=V.useRef(new Map).current;return x.jsx(i,{scope:w,itemMap:v,collectionRef:y,children:p})};s.displayName=t;const a=e+"CollectionSlot",l=eu(a),u=V.forwardRef((g,w)=>{const{scope:p,children:y}=g,v=o(a,p),S=vn(w,v.collectionRef);return x.jsx(l,{ref:S,children:y})});u.displayName=a;const d=e+"CollectionItemSlot",c="data-radix-collection-item",h=eu(d),f=V.forwardRef((g,w)=>{const{scope:p,children:y,...v}=g,S=V.useRef(null),C=vn(w,S),T=o(d,p);return V.useEffect(()=>(T.itemMap.set(S,{ref:S,...v}),()=>void T.itemMap.delete(S))),x.jsx(h,{[c]:"",ref:C,children:y})});f.displayName=d;function m(g){const w=o(e+"CollectionConsumer",g);return V.useCallback(()=>{const y=w.collectionRef.current;if(!y)return[];const v=Array.from(y.querySelectorAll(`[${c}]`));return Array.from(w.itemMap.values()).sort((T,A)=>v.indexOf(T.ref.current)-v.indexOf(A.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:s,Slot:u,ItemSlot:f},m,r]}var yA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ct=yA.reduce((e,t)=>{const n=eu(`Primitive.${t}`),r=b.forwardRef((i,o)=>{const{asChild:s,...a}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(l,{...a,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function h1(e,t){e&&ma.flushSync(()=>e.dispatchEvent(t))}function Hr(e){const t=b.useRef(e);return b.useEffect(()=>{t.current=e}),b.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function vA(e,t=globalThis==null?void 0:globalThis.document){const n=Hr(e);b.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var xA="DismissableLayer",hf="dismissableLayer.update",wA="dismissableLayer.pointerDownOutside",bA="dismissableLayer.focusOutside",Vg,p1=b.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),op=b.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,u=b.useContext(p1),[d,c]=b.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=b.useState({}),m=vn(t,A=>c(A)),g=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),p=g.indexOf(w),y=d?g.indexOf(d):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,S=y>=p,C=SA(A=>{const R=A.target,M=[...u.branches].some(P=>P.contains(R));!S||M||(i==null||i(A),s==null||s(A),A.defaultPrevented||a==null||a())},h),T=TA(A=>{const R=A.target;[...u.branches].some(P=>P.contains(R))||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},h);return vA(A=>{y===u.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},h),b.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Vg=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Ug(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Vg)}},[d,h,n,u]),b.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Ug())},[d,u]),b.useEffect(()=>{const A=()=>f({});return document.addEventListener(hf,A),()=>document.removeEventListener(hf,A)},[]),x.jsx(Ct.div,{...l,ref:m,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Ue(e.onFocusCapture,T.onFocusCapture),onBlurCapture:Ue(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:Ue(e.onPointerDownCapture,C.onPointerDownCapture)})});op.displayName=xA;var kA="DismissableLayerBranch",m1=b.forwardRef((e,t)=>{const n=b.useContext(p1),r=b.useRef(null),i=vn(t,r);return b.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),x.jsx(Ct.div,{...e,ref:i})});m1.displayName=kA;function SA(e,t=globalThis==null?void 0:globalThis.document){const n=Hr(e),r=b.useRef(!1),i=b.useRef(()=>{});return b.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){g1(wA,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function TA(e,t=globalThis==null?void 0:globalThis.document){const n=Hr(e),r=b.useRef(!1);return b.useEffect(()=>{const i=o=>{o.target&&!r.current&&g1(bA,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ug(){const e=new CustomEvent(hf);document.dispatchEvent(e)}function g1(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?h1(i,o):i.dispatchEvent(o)}var CA=op,EA=m1,Wr=globalThis!=null&&globalThis.document?b.useLayoutEffect:()=>{},PA="Portal",y1=b.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,o]=b.useState(!1);Wr(()=>o(!0),[]);const s=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?u1.createPortal(x.jsx(Ct.div,{...r,ref:t}),s):null});y1.displayName=PA;function AA(e,t){return b.useReducer((n,r)=>t[n][r]??n,e)}var sp=e=>{const{present:t,children:n}=e,r=RA(t),i=typeof n=="function"?n({present:r.isPresent}):b.Children.only(n),o=vn(r.ref,IA(i));return typeof n=="function"||r.isPresent?b.cloneElement(i,{ref:o}):null};sp.displayName="Presence";function RA(e){const[t,n]=b.useState(),r=b.useRef(null),i=b.useRef(e),o=b.useRef("none"),s=e?"mounted":"unmounted",[a,l]=AA(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return b.useEffect(()=>{const u=Ga(r.current);o.current=a==="mounted"?u:"none"},[a]),Wr(()=>{const u=r.current,d=i.current;if(d!==e){const h=o.current,f=Ga(u);e?l("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Wr(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,c=f=>{const g=Ga(r.current).includes(f.animationName);if(f.target===t&&g&&(l("ANIMATION_END"),!i.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},h=f=>{f.target===t&&(o.current=Ga(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:b.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Ga(e){return(e==null?void 0:e.animationName)||"none"}function IA(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var DA=s0[" useInsertionEffect ".trim().toString()]||Wr;function MA({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,s]=NA({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:i;{const d=b.useRef(e!==void 0);b.useEffect(()=>{const c=d.current;c!==a&&console.warn(`${r} is changing from ${c?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const u=b.useCallback(d=>{var c;if(a){const h=jA(d)?d(e):d;h!==e&&((c=s.current)==null||c.call(s,h))}else o(d)},[a,e,o,s]);return[l,u]}function NA({defaultProp:e,onChange:t}){const[n,r]=b.useState(e),i=b.useRef(n),o=b.useRef(t);return DA(()=>{o.current=t},[t]),b.useEffect(()=>{var s;i.current!==n&&((s=o.current)==null||s.call(o,n),i.current=n)},[n,i]),[n,r,o]}function jA(e){return typeof e=="function"}var LA=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),OA="VisuallyHidden",_u=b.forwardRef((e,t)=>x.jsx(Ct.span,{...e,ref:t,style:{...LA,...e.style}}));_u.displayName=OA;var _A=_u,ap="ToastProvider",[lp,FA,zA]=gA("Toast"),[v1,nU]=Ou("Toast",[zA]),[BA,Fu]=v1(ap),x1=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=b.useState(null),[u,d]=b.useState(0),c=b.useRef(!1),h=b.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${ap}\`. Expected non-empty \`string\`.`),x.jsx(lp.Provider,{scope:t,children:x.jsx(BA,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:b.useCallback(()=>d(f=>f+1),[]),onToastRemove:b.useCallback(()=>d(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:c,isClosePausedRef:h,children:s})})};x1.displayName=ap;var w1="ToastViewport",VA=["F8"],pf="toast.viewportPause",mf="toast.viewportResume",b1=b.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=VA,label:i="Notifications ({hotkey})",...o}=e,s=Fu(w1,n),a=FA(n),l=b.useRef(null),u=b.useRef(null),d=b.useRef(null),c=b.useRef(null),h=vn(t,c,s.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=s.toastCount>0;b.useEffect(()=>{const w=p=>{var v;r.length!==0&&r.every(S=>p[S]||p.code===S)&&((v=c.current)==null||v.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[r]),b.useEffect(()=>{const w=l.current,p=c.current;if(m&&w&&p){const y=()=>{if(!s.isClosePausedRef.current){const T=new CustomEvent(pf);p.dispatchEvent(T),s.isClosePausedRef.current=!0}},v=()=>{if(s.isClosePausedRef.current){const T=new CustomEvent(mf);p.dispatchEvent(T),s.isClosePausedRef.current=!1}},S=T=>{!w.contains(T.relatedTarget)&&v()},C=()=>{w.contains(document.activeElement)||v()};return w.addEventListener("focusin",y),w.addEventListener("focusout",S),w.addEventListener("pointermove",y),w.addEventListener("pointerleave",C),window.addEventListener("blur",y),window.addEventListener("focus",v),()=>{w.removeEventListener("focusin",y),w.removeEventListener("focusout",S),w.removeEventListener("pointermove",y),w.removeEventListener("pointerleave",C),window.removeEventListener("blur",y),window.removeEventListener("focus",v)}}},[m,s.isClosePausedRef]);const g=b.useCallback(({tabbingDirection:w})=>{const y=a().map(v=>{const S=v.ref.current,C=[S,...e2(S)];return w==="forwards"?C:C.reverse()});return(w==="forwards"?y.reverse():y).flat()},[a]);return b.useEffect(()=>{const w=c.current;if(w){const p=y=>{var C,T,A;const v=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!v){const R=document.activeElement,M=y.shiftKey;if(y.target===w&&M){(C=u.current)==null||C.focus();return}const N=g({tabbingDirection:M?"backwards":"forwards"}),H=N.findIndex(_=>_===R);Oc(N.slice(H+1))?y.preventDefault():M?(T=u.current)==null||T.focus():(A=d.current)==null||A.focus()}};return w.addEventListener("keydown",p),()=>w.removeEventListener("keydown",p)}},[a,g]),x.jsxs(EA,{ref:l,role:"region","aria-label":i.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:m?void 0:"none"},children:[m&&x.jsx(gf,{ref:u,onFocusFromOutsideViewport:()=>{const w=g({tabbingDirection:"forwards"});Oc(w)}}),x.jsx(lp.Slot,{scope:n,children:x.jsx(Ct.ol,{tabIndex:-1,...o,ref:h})}),m&&x.jsx(gf,{ref:d,onFocusFromOutsideViewport:()=>{const w=g({tabbingDirection:"backwards"});Oc(w)}})]})});b1.displayName=w1;var k1="ToastFocusProxy",gf=b.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=Fu(k1,n);return x.jsx(_u,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const a=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(a))&&r()}})});gf.displayName=k1;var ga="Toast",UA="toast.swipeStart",$A="toast.swipeMove",HA="toast.swipeCancel",WA="toast.swipeEnd",S1=b.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=MA({prop:r,defaultProp:i??!0,onChange:o,caller:ga});return x.jsx(sp,{present:n||a,children:x.jsx(KA,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:Hr(e.onPause),onResume:Hr(e.onResume),onSwipeStart:Ue(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ue(e.onSwipeMove,u=>{const{x:d,y:c}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${c}px`)}),onSwipeCancel:Ue(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ue(e.onSwipeEnd,u=>{const{x:d,y:c}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${c}px`),l(!1)})})})});S1.displayName=ga;var[qA,GA]=v1(ga,{onClose(){}}),KA=b.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:d,onSwipeMove:c,onSwipeCancel:h,onSwipeEnd:f,...m}=e,g=Fu(ga,n),[w,p]=b.useState(null),y=vn(t,_=>p(_)),v=b.useRef(null),S=b.useRef(null),C=i||g.duration,T=b.useRef(0),A=b.useRef(C),R=b.useRef(0),{onToastAdd:M,onToastRemove:P}=g,O=Hr(()=>{var $;(w==null?void 0:w.contains(document.activeElement))&&(($=g.viewport)==null||$.focus()),s()}),N=b.useCallback(_=>{!_||_===1/0||(window.clearTimeout(R.current),T.current=new Date().getTime(),R.current=window.setTimeout(O,_))},[O]);b.useEffect(()=>{const _=g.viewport;if(_){const $=()=>{N(A.current),u==null||u()},G=()=>{const U=new Date().getTime()-T.current;A.current=A.current-U,window.clearTimeout(R.current),l==null||l()};return _.addEventListener(pf,G),_.addEventListener(mf,$),()=>{_.removeEventListener(pf,G),_.removeEventListener(mf,$)}}},[g.viewport,C,l,u,N]),b.useEffect(()=>{o&&!g.isClosePausedRef.current&&N(C)},[o,C,g.isClosePausedRef,N]),b.useEffect(()=>(M(),()=>P()),[M,P]);const H=b.useMemo(()=>w?I1(w):null,[w]);return g.viewport?x.jsxs(x.Fragment,{children:[H&&x.jsx(YA,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),x.jsx(qA,{scope:n,onClose:O,children:ma.createPortal(x.jsx(lp.ItemSlot,{scope:n,children:x.jsx(CA,{asChild:!0,onEscapeKeyDown:Ue(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||O(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:x.jsx(Ct.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":g.swipeDirection,...m,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Ue(e.onKeyDown,_=>{_.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:Ue(e.onPointerDown,_=>{_.button===0&&(v.current={x:_.clientX,y:_.clientY})}),onPointerMove:Ue(e.onPointerMove,_=>{if(!v.current)return;const $=_.clientX-v.current.x,G=_.clientY-v.current.y,U=!!S.current,I=["left","right"].includes(g.swipeDirection),j=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,k=I?j(0,$):0,Y=I?0:j(0,G),K=_.pointerType==="touch"?10:2,E={x:k,y:Y},X={originalEvent:_,delta:E};U?(S.current=E,Ka($A,c,X,{discrete:!1})):$g(E,g.swipeDirection,K)?(S.current=E,Ka(UA,d,X,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs($)>K||Math.abs(G)>K)&&(v.current=null)}),onPointerUp:Ue(e.onPointerUp,_=>{const $=S.current,G=_.target;if(G.hasPointerCapture(_.pointerId)&&G.releasePointerCapture(_.pointerId),S.current=null,v.current=null,$){const U=_.currentTarget,I={originalEvent:_,delta:$};$g($,g.swipeDirection,g.swipeThreshold)?Ka(WA,f,I,{discrete:!0}):Ka(HA,h,I,{discrete:!0}),U.addEventListener("click",j=>j.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),YA=e=>{const{__scopeToast:t,children:n,...r}=e,i=Fu(ga,t),[o,s]=b.useState(!1),[a,l]=b.useState(!1);return JA(()=>s(!0)),b.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:x.jsx(y1,{asChild:!0,children:x.jsx(_u,{...r,children:o&&x.jsxs(x.Fragment,{children:[i.label," ",n]})})})},QA="ToastTitle",T1=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return x.jsx(Ct.div,{...r,ref:t})});T1.displayName=QA;var XA="ToastDescription",C1=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return x.jsx(Ct.div,{...r,ref:t})});C1.displayName=XA;var E1="ToastAction",P1=b.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?x.jsx(R1,{altText:n,asChild:!0,children:x.jsx(up,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${E1}\`. Expected non-empty \`string\`.`),null)});P1.displayName=E1;var A1="ToastClose",up=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=GA(A1,n);return x.jsx(R1,{asChild:!0,children:x.jsx(Ct.button,{type:"button",...r,ref:t,onClick:Ue(e.onClick,i.onClose)})})});up.displayName=A1;var R1=b.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return x.jsx(Ct.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function I1(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),ZA(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...I1(r))}}),t}function Ka(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?h1(i,o):i.dispatchEvent(o)}var $g=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function JA(e=()=>{}){const t=Hr(e);Wr(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function ZA(e){return e.nodeType===e.ELEMENT_NODE}function e2(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Oc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var t2=x1,D1=b1,M1=S1,N1=T1,j1=C1,L1=P1,O1=up;function _1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function F1(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_1(e))&&(r&&(r+=" "),r+=t);return r}const Hg=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Wg=F1,z1=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Wg(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],c=o==null?void 0:o[u];if(d===null)return null;const h=Hg(d)||Hg(c);return i[u][h]}),a=n&&Object.entries(n).reduce((u,d)=>{let[c,h]=d;return h===void 0||(u[c]=h),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:c,className:h,...f}=d;return Object.entries(f).every(m=>{let[g,w]=m;return Array.isArray(w)?w.includes({...o,...a}[g]):{...o,...a}[g]===w})?[...u,c,h]:u},[]);return Wg(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>b.createElement("svg",{ref:l,...r2,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:B1("lucide",i),...a},[...s.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(i2,{ref:o,iconNode:t,className:B1(`lucide-${n2(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=he("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=he("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=he("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=he("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=he("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=he("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=he("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=he("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=he("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=he("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pp="-",T2=e=>{const t=E2(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(pp);return a[0]===""&&a.length!==1&&a.shift(),q1(a,t)||C2(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},q1=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?q1(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(pp);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},qg=/^\[(.+)\]$/,C2=e=>{if(qg.test(e)){const t=qg.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},E2=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return A2(Object.entries(e.classGroups),n).forEach(([o,s])=>{xf(s,r,o,t)}),r},xf=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Gg(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(P2(i)){xf(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{xf(s,Gg(t,o),n,r)})})},Gg=(e,t)=>{let n=e;return t.split(pp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},P2=e=>e.isThemeGetter,A2=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[n,i]}):e,R2=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},G1="!",I2=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=a=>{const l=[];let u=0,d=0,c;for(let w=0;w<a.length;w++){let p=a[w];if(u===0){if(p===i&&(r||a.slice(w,w+o)===t)){l.push(a.slice(d,w)),d=w+o;continue}if(p==="/"){c=w;continue}}p==="["?u++:p==="]"&&u--}const h=l.length===0?a:a.substring(d),f=h.startsWith(G1),m=f?h.substring(1):h,g=c&&c>d?c-d:void 0;return{modifiers:l,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:s}):s},D2=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},M2=e=>({cache:R2(e.cacheSize),parseClassName:I2(e),...T2(e)}),N2=/\s+/,j2=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(N2);let a="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:d,hasImportantModifier:c,baseClassName:h,maybePostfixModifierPosition:f}=n(u);let m=!!f,g=r(m?h.substring(0,f):h);if(!g){if(!m){a=u+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=u+(a.length>0?" "+a:a);continue}m=!1}const w=D2(d).join(":"),p=c?w+G1:w,y=p+g;if(o.includes(y))continue;o.push(y);const v=i(g,m);for(let S=0;S<v.length;++S){const C=v[S];o.push(p+C)}a=u+(a.length>0?" "+a:a)}return a};function L2(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=K1(t))&&(r&&(r+=" "),r+=n);return r}const K1=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=K1(e[r]))&&(n&&(n+=" "),n+=t);return n};function O2(e,...t){let n,r,i,o=s;function s(l){const u=t.reduce((d,c)=>c(d),e());return n=M2(u),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const u=r(l);if(u)return u;const d=j2(l,n);return i(l,d),d}return function(){return o(L2.apply(null,arguments))}}const we=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Y1=/^\[(?:([a-z-]+):)?(.+)\]$/i,_2=/^\d+\/\d+$/,F2=new Set(["px","full","screen"]),z2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,B2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,V2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,U2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Un=e=>fo(e)||F2.has(e)||_2.test(e),pr=e=>zo(e,"length",X2),fo=e=>!!e&&!Number.isNaN(Number(e)),_c=e=>zo(e,"number",fo),is=e=>!!e&&Number.isInteger(Number(e)),H2=e=>e.endsWith("%")&&fo(e.slice(0,-1)),te=e=>Y1.test(e),mr=e=>z2.test(e),W2=new Set(["length","size","percentage"]),q2=e=>zo(e,W2,Q1),G2=e=>zo(e,"position",Q1),K2=new Set(["image","url"]),Y2=e=>zo(e,K2,Z2),Q2=e=>zo(e,"",J2),os=()=>!0,zo=(e,t,n)=>{const r=Y1.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},X2=e=>B2.test(e)&&!V2.test(e),Q1=()=>!1,J2=e=>U2.test(e),Z2=e=>$2.test(e),eR=()=>{const e=we("colors"),t=we("spacing"),n=we("blur"),r=we("brightness"),i=we("borderColor"),o=we("borderRadius"),s=we("borderSpacing"),a=we("borderWidth"),l=we("contrast"),u=we("grayscale"),d=we("hueRotate"),c=we("invert"),h=we("gap"),f=we("gradientColorStops"),m=we("gradientColorStopPositions"),g=we("inset"),w=we("margin"),p=we("opacity"),y=we("padding"),v=we("saturate"),S=we("scale"),C=we("sepia"),T=we("skew"),A=we("space"),R=we("translate"),M=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",te,t],N=()=>[te,t],H=()=>["",Un,pr],_=()=>["auto",fo,te],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",te],k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[fo,te];return{cacheSize:500,separator:":",theme:{colors:[os],spacing:[Un,pr],blur:["none","",mr,te],brightness:Y(),borderColor:[e],borderRadius:["none","","full",mr,te],borderSpacing:N(),borderWidth:H(),contrast:Y(),grayscale:j(),hueRotate:Y(),invert:j(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[H2,pr],inset:O(),margin:O(),opacity:Y(),padding:N(),saturate:Y(),scale:Y(),sepia:j(),skew:Y(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[mr]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),te]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",is,te]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",is,te]}],"grid-cols":[{"grid-cols":[os]}],"col-start-end":[{col:["auto",{span:["full",is,te]},te]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[os]}],"row-start-end":[{row:["auto",{span:[is,te]},te]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[mr]},mr]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",mr,pr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_c]}],"font-family":[{font:[os]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",fo,_c]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Un,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Un,pr]}],"underline-offset":[{"underline-offset":["auto",Un,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),G2]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",q2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Y2]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Un,te]}],"outline-w":[{outline:[Un,pr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Un,pr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",mr,Q2]}],"shadow-color":[{shadow:[os]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",mr,te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[c]}],saturate:[{saturate:[v]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[is,te]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Un,pr,_c]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tR=O2(eR);function Ft(...e){return tR(F1(e))}const nR=t2,X1=b.forwardRef(({className:e,...t},n)=>x.jsx(D1,{ref:n,className:Ft("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));X1.displayName=D1.displayName;const rR=z1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),J1=b.forwardRef(({className:e,variant:t,...n},r)=>x.jsx(M1,{ref:r,className:Ft(rR({variant:t}),e),...n}));J1.displayName=M1.displayName;const iR=b.forwardRef(({className:e,...t},n)=>x.jsx(L1,{ref:n,className:Ft("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));iR.displayName=L1.displayName;const Z1=b.forwardRef(({className:e,...t},n)=>x.jsx(O1,{ref:n,className:Ft("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:x.jsx(hp,{className:"h-4 w-4"})}));Z1.displayName=O1.displayName;const eb=b.forwardRef(({className:e,...t},n)=>x.jsx(N1,{ref:n,className:Ft("text-sm font-semibold",e),...t}));eb.displayName=N1.displayName;const tb=b.forwardRef(({className:e,...t},n)=>x.jsx(j1,{ref:n,className:Ft("text-sm opacity-90",e),...t}));tb.displayName=j1.displayName;function oR(){const{toasts:e}=lA();return x.jsxs(nR,{children:[e.map(function({id:t,title:n,description:r,action:i,...o}){return x.jsxs(J1,{...o,children:[x.jsxs("div",{className:"grid gap-1",children:[n&&x.jsx(eb,{children:n}),r&&x.jsx(tb,{children:r})]}),i,x.jsx(Z1,{})]},t)}),x.jsx(X1,{})]})}var Kg=["light","dark"],sR="(prefers-color-scheme: dark)",aR=b.createContext(void 0),lR={setTheme:e=>{},themes:[]},uR=()=>{var e;return(e=b.useContext(aR))!=null?e:lR};b.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let u=o==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(m=>`'${m}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,c=i?Kg.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(m,g=!1,w=!0)=>{let p=s?s[m]:m,y=g?m+"|| ''":`'${p}'`,v="";return i&&w&&!g&&Kg.includes(m)&&(v+=`d.style.colorScheme = '${m}';`),n==="class"?g||p?v+=`c.add(${y})`:v+="null":p&&(v+=`d[s](n,${y})`),v},f=e?`!function(){${d}${h(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sR}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}${u?"":"else{"+h(o,!1,!1)+"}"}${c}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${c}}catch(t){}}();`;return b.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:f}})});var cR=e=>{switch(e){case"success":return hR;case"info":return mR;case"warning":return pR;case"error":return gR;default:return null}},dR=Array(12).fill(0),fR=({visible:e,className:t})=>V.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},V.createElement("div",{className:"sonner-spinner"},dR.map((n,r)=>V.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),hR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),pR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),mR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),gR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),yR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},V.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),vR=()=>{let[e,t]=V.useState(document.hidden);return V.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},wf=1,xR=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:wf++,o=this.toasts.find(a=>a.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:n}),{...a,...e,id:i,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,o,s=r.then(async l=>{if(o=["resolve",l],V.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(bR(l)&&!l.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(l):t.success,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async l=>{if(o=["reject",l],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>s.then(()=>o[0]==="reject"?u(o[1]):l(o[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||wf++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},xt=new xR,wR=(e,t)=>{let n=(t==null?void 0:t.id)||wf++;return xt.addToast({title:e,...t,id:n}),n},bR=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",kR=wR,SR=()=>xt.toasts,TR=()=>xt.getActiveToasts();Object.assign(kR,{success:xt.success,info:xt.info,warning:xt.warning,error:xt.error,custom:xt.custom,message:xt.message,promise:xt.promise,dismiss:xt.dismiss,loading:xt.loading},{getHistory:SR,getToasts:TR});function CR(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}CR(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ya(e){return e.label!==void 0}var ER=3,PR="32px",AR="16px",Yg=4e3,RR=356,IR=14,DR=20,MR=200;function on(...e){return e.filter(Boolean).join(" ")}function NR(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var jR=e=>{var t,n,r,i,o,s,a,l,u,d,c;let{invert:h,toast:f,unstyled:m,interacting:g,setHeights:w,visibleToasts:p,heights:y,index:v,toasts:S,expanded:C,removeToast:T,defaultRichColors:A,closeButton:R,style:M,cancelButtonStyle:P,actionButtonStyle:O,className:N="",descriptionClassName:H="",duration:_,position:$,gap:G,loadingIcon:U,expandByDefault:I,classNames:j,icons:k,closeButtonAriaLabel:Y="Close toast",pauseWhenPageIsHidden:K}=e,[E,X]=V.useState(null),[me,le]=V.useState(null),[se,st]=V.useState(!1),[at,yt]=V.useState(!1),[Pt,ar]=V.useState(!1),[bn,_i]=V.useState(!1),[Fi,ni]=V.useState(!1),[zi,ri]=V.useState(0),[Bn,Yo]=V.useState(0),ii=V.useRef(f.duration||_||Yg),Aa=V.useRef(null),Vn=V.useRef(null),ic=v===0,oc=v+1<=p,D=f.type,B=f.dismissible!==!1,J=f.className||"",re=f.descriptionClassName||"",de=V.useMemo(()=>y.findIndex(Z=>Z.toastId===f.id)||0,[y,f.id]),At=V.useMemo(()=>{var Z;return(Z=f.closeButton)!=null?Z:R},[f.closeButton,R]),kn=V.useMemo(()=>f.duration||_||Yg,[f.duration,_]),Rt=V.useRef(0),Vt=V.useRef(0),lr=V.useRef(0),Oe=V.useRef(null),[ur,Zt]=$.split("-"),Pm=V.useMemo(()=>y.reduce((Z,ge,Te)=>Te>=de?Z:Z+ge.height,0),[y,de]),Am=vR(),RC=f.invert||h,sc=D==="loading";Vt.current=V.useMemo(()=>de*G+Pm,[de,Pm]),V.useEffect(()=>{ii.current=kn},[kn]),V.useEffect(()=>{st(!0)},[]),V.useEffect(()=>{let Z=Vn.current;if(Z){let ge=Z.getBoundingClientRect().height;return Yo(ge),w(Te=>[{toastId:f.id,height:ge,position:f.position},...Te]),()=>w(Te=>Te.filter(en=>en.toastId!==f.id))}},[w,f.id]),V.useLayoutEffect(()=>{if(!se)return;let Z=Vn.current,ge=Z.style.height;Z.style.height="auto";let Te=Z.getBoundingClientRect().height;Z.style.height=ge,Yo(Te),w(en=>en.find(tn=>tn.toastId===f.id)?en.map(tn=>tn.toastId===f.id?{...tn,height:Te}:tn):[{toastId:f.id,height:Te,position:f.position},...en])},[se,f.title,f.description,w,f.id]);let cr=V.useCallback(()=>{yt(!0),ri(Vt.current),w(Z=>Z.filter(ge=>ge.toastId!==f.id)),setTimeout(()=>{T(f)},MR)},[f,T,w,Vt]);V.useEffect(()=>{if(f.promise&&D==="loading"||f.duration===1/0||f.type==="loading")return;let Z;return C||g||K&&Am?(()=>{if(lr.current<Rt.current){let ge=new Date().getTime()-Rt.current;ii.current=ii.current-ge}lr.current=new Date().getTime()})():ii.current!==1/0&&(Rt.current=new Date().getTime(),Z=setTimeout(()=>{var ge;(ge=f.onAutoClose)==null||ge.call(f,f),cr()},ii.current)),()=>clearTimeout(Z)},[C,g,f,D,K,Am,cr]),V.useEffect(()=>{f.delete&&cr()},[cr,f.delete]);function IC(){var Z,ge,Te;return k!=null&&k.loading?V.createElement("div",{className:on(j==null?void 0:j.loader,(Z=f==null?void 0:f.classNames)==null?void 0:Z.loader,"sonner-loader"),"data-visible":D==="loading"},k.loading):U?V.createElement("div",{className:on(j==null?void 0:j.loader,(ge=f==null?void 0:f.classNames)==null?void 0:ge.loader,"sonner-loader"),"data-visible":D==="loading"},U):V.createElement(fR,{className:on(j==null?void 0:j.loader,(Te=f==null?void 0:f.classNames)==null?void 0:Te.loader),visible:D==="loading"})}return V.createElement("li",{tabIndex:0,ref:Vn,className:on(N,J,j==null?void 0:j.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,j==null?void 0:j.default,j==null?void 0:j[D],(n=f==null?void 0:f.classNames)==null?void 0:n[D]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:A,"data-styled":!(f.jsx||f.unstyled||m),"data-mounted":se,"data-promise":!!f.promise,"data-swiped":Fi,"data-removed":at,"data-visible":oc,"data-y-position":ur,"data-x-position":Zt,"data-index":v,"data-front":ic,"data-swiping":Pt,"data-dismissible":B,"data-type":D,"data-invert":RC,"data-swipe-out":bn,"data-swipe-direction":me,"data-expanded":!!(C||I&&se),style:{"--index":v,"--toasts-before":v,"--z-index":S.length-v,"--offset":`${at?zi:Vt.current}px`,"--initial-height":I?"auto":`${Bn}px`,...M,...f.style},onDragEnd:()=>{ar(!1),X(null),Oe.current=null},onPointerDown:Z=>{sc||!B||(Aa.current=new Date,ri(Vt.current),Z.target.setPointerCapture(Z.pointerId),Z.target.tagName!=="BUTTON"&&(ar(!0),Oe.current={x:Z.clientX,y:Z.clientY}))},onPointerUp:()=>{var Z,ge,Te,en;if(bn||!B)return;Oe.current=null;let tn=Number(((Z=Vn.current)==null?void 0:Z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),dr=Number(((ge=Vn.current)==null?void 0:ge.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),oi=new Date().getTime()-((Te=Aa.current)==null?void 0:Te.getTime()),nn=E==="x"?tn:dr,fr=Math.abs(nn)/oi;if(Math.abs(nn)>=DR||fr>.11){ri(Vt.current),(en=f.onDismiss)==null||en.call(f,f),le(E==="x"?tn>0?"right":"left":dr>0?"down":"up"),cr(),_i(!0),ni(!1);return}ar(!1),X(null)},onPointerMove:Z=>{var ge,Te,en,tn;if(!Oe.current||!B||((ge=window.getSelection())==null?void 0:ge.toString().length)>0)return;let dr=Z.clientY-Oe.current.y,oi=Z.clientX-Oe.current.x,nn=(Te=e.swipeDirections)!=null?Te:NR($);!E&&(Math.abs(oi)>1||Math.abs(dr)>1)&&X(Math.abs(oi)>Math.abs(dr)?"x":"y");let fr={x:0,y:0};E==="y"?(nn.includes("top")||nn.includes("bottom"))&&(nn.includes("top")&&dr<0||nn.includes("bottom")&&dr>0)&&(fr.y=dr):E==="x"&&(nn.includes("left")||nn.includes("right"))&&(nn.includes("left")&&oi<0||nn.includes("right")&&oi>0)&&(fr.x=oi),(Math.abs(fr.x)>0||Math.abs(fr.y)>0)&&ni(!0),(en=Vn.current)==null||en.style.setProperty("--swipe-amount-x",`${fr.x}px`),(tn=Vn.current)==null||tn.style.setProperty("--swipe-amount-y",`${fr.y}px`)}},At&&!f.jsx?V.createElement("button",{"aria-label":Y,"data-disabled":sc,"data-close-button":!0,onClick:sc||!B?()=>{}:()=>{var Z;cr(),(Z=f.onDismiss)==null||Z.call(f,f)},className:on(j==null?void 0:j.closeButton,(i=f==null?void 0:f.classNames)==null?void 0:i.closeButton)},(o=k==null?void 0:k.close)!=null?o:yR):null,f.jsx||b.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:V.createElement(V.Fragment,null,D||f.icon||f.promise?V.createElement("div",{"data-icon":"",className:on(j==null?void 0:j.icon,(s=f==null?void 0:f.classNames)==null?void 0:s.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||IC():null,f.type!=="loading"?f.icon||(k==null?void 0:k[D])||cR(D):null):null,V.createElement("div",{"data-content":"",className:on(j==null?void 0:j.content,(a=f==null?void 0:f.classNames)==null?void 0:a.content)},V.createElement("div",{"data-title":"",className:on(j==null?void 0:j.title,(l=f==null?void 0:f.classNames)==null?void 0:l.title)},typeof f.title=="function"?f.title():f.title),f.description?V.createElement("div",{"data-description":"",className:on(H,re,j==null?void 0:j.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)},typeof f.description=="function"?f.description():f.description):null),b.isValidElement(f.cancel)?f.cancel:f.cancel&&Ya(f.cancel)?V.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||P,onClick:Z=>{var ge,Te;Ya(f.cancel)&&B&&((Te=(ge=f.cancel).onClick)==null||Te.call(ge,Z),cr())},className:on(j==null?void 0:j.cancelButton,(d=f==null?void 0:f.classNames)==null?void 0:d.cancelButton)},f.cancel.label):null,b.isValidElement(f.action)?f.action:f.action&&Ya(f.action)?V.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||O,onClick:Z=>{var ge,Te;Ya(f.action)&&((Te=(ge=f.action).onClick)==null||Te.call(ge,Z),!Z.defaultPrevented&&cr())},className:on(j==null?void 0:j.actionButton,(c=f==null?void 0:f.classNames)==null?void 0:c.actionButton)},f.action.label):null))};function Qg(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function LR(e,t){let n={};return[e,t].forEach((r,i)=>{let o=i===1,s=o?"--mobile-offset":"--offset",a=o?AR:PR;function l(u){["top","right","bottom","left"].forEach(d=>{n[`${s}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${s}-${u}`]=a:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var OR=b.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:u,theme:d="light",richColors:c,duration:h,style:f,visibleToasts:m=ER,toastOptions:g,dir:w=Qg(),gap:p=IR,loadingIcon:y,icons:v,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:C}=e,[T,A]=V.useState([]),R=V.useMemo(()=>Array.from(new Set([r].concat(T.filter(K=>K.position).map(K=>K.position)))),[T,r]),[M,P]=V.useState([]),[O,N]=V.useState(!1),[H,_]=V.useState(!1),[$,G]=V.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=V.useRef(null),I=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=V.useRef(null),k=V.useRef(!1),Y=V.useCallback(K=>{A(E=>{var X;return(X=E.find(me=>me.id===K.id))!=null&&X.delete||xt.dismiss(K.id),E.filter(({id:me})=>me!==K.id)})},[]);return V.useEffect(()=>xt.subscribe(K=>{if(K.dismiss){A(E=>E.map(X=>X.id===K.id?{...X,delete:!0}:X));return}setTimeout(()=>{u1.flushSync(()=>{A(E=>{let X=E.findIndex(me=>me.id===K.id);return X!==-1?[...E.slice(0,X),{...E[X],...K},...E.slice(X+1)]:[K,...E]})})})}),[]),V.useEffect(()=>{if(d!=="system"){G(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let K=window.matchMedia("(prefers-color-scheme: dark)");try{K.addEventListener("change",({matches:E})=>{G(E?"dark":"light")})}catch{K.addListener(({matches:X})=>{try{G(X?"dark":"light")}catch(me){console.error(me)}})}},[d]),V.useEffect(()=>{T.length<=1&&N(!1)},[T]),V.useEffect(()=>{let K=E=>{var X,me;i.every(le=>E[le]||E.code===le)&&(N(!0),(X=U.current)==null||X.focus()),E.code==="Escape"&&(document.activeElement===U.current||(me=U.current)!=null&&me.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[i]),V.useEffect(()=>{if(U.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,k.current=!1)}},[U.current]),V.createElement("section",{ref:t,"aria-label":`${S} ${I}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},R.map((K,E)=>{var X;let[me,le]=K.split("-");return T.length?V.createElement("ol",{key:K,dir:w==="auto"?Qg():w,tabIndex:-1,ref:U,className:a,"data-sonner-toaster":!0,"data-theme":$,"data-y-position":me,"data-lifted":O&&T.length>1&&!o,"data-x-position":le,style:{"--front-toast-height":`${((X=M[0])==null?void 0:X.height)||0}px`,"--width":`${RR}px`,"--gap":`${p}px`,...f,...LR(l,u)},onBlur:se=>{k.current&&!se.currentTarget.contains(se.relatedTarget)&&(k.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:se=>{se.target instanceof HTMLElement&&se.target.dataset.dismissible==="false"||k.current||(k.current=!0,j.current=se.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{H||N(!1)},onDragEnd:()=>N(!1),onPointerDown:se=>{se.target instanceof HTMLElement&&se.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},T.filter(se=>!se.position&&E===0||se.position===K).map((se,st)=>{var at,yt;return V.createElement(jR,{key:se.id,icons:v,index:st,toast:se,defaultRichColors:c,duration:(at=g==null?void 0:g.duration)!=null?at:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:m,closeButton:(yt=g==null?void 0:g.closeButton)!=null?yt:s,interacting:H,position:K,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:Y,toasts:T.filter(Pt=>Pt.position==se.position),heights:M.filter(Pt=>Pt.position==se.position),setHeights:P,expandByDefault:o,gap:p,loadingIcon:y,expanded:O,pauseWhenPageIsHidden:C,swipeDirections:e.swipeDirections})})):null}))});const _R=({...e})=>{const{theme:t="system"}=uR();return x.jsx(OR,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},FR=["top","right","bottom","left"],qr=Math.min,Mt=Math.max,tu=Math.round,Qa=Math.floor,Nn=e=>({x:e,y:e}),zR={left:"right",right:"left",bottom:"top",top:"bottom"},BR={start:"end",end:"start"};function bf(e,t,n){return Mt(e,qr(t,n))}function er(e,t){return typeof e=="function"?e(t):e}function tr(e){return e.split("-")[0]}function Bo(e){return e.split("-")[1]}function mp(e){return e==="x"?"y":"x"}function gp(e){return e==="y"?"height":"width"}const VR=new Set(["top","bottom"]);function In(e){return VR.has(tr(e))?"y":"x"}function yp(e){return mp(In(e))}function UR(e,t,n){n===void 0&&(n=!1);const r=Bo(e),i=yp(e),o=gp(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=nu(s)),[s,nu(s)]}function $R(e){const t=nu(e);return[kf(e),t,kf(t)]}function kf(e){return e.replace(/start|end/g,t=>BR[t])}const Xg=["left","right"],Jg=["right","left"],HR=["top","bottom"],WR=["bottom","top"];function qR(e,t,n){switch(e){case"top":case"bottom":return n?t?Jg:Xg:t?Xg:Jg;case"left":case"right":return t?HR:WR;default:return[]}}function GR(e,t,n,r){const i=Bo(e);let o=qR(tr(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(kf)))),o}function nu(e){return e.replace(/left|right|bottom|top/g,t=>zR[t])}function KR(e){return{top:0,right:0,bottom:0,left:0,...e}}function nb(e){return typeof e!="number"?KR(e):{top:e,right:e,bottom:e,left:e}}function ru(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Zg(e,t,n){let{reference:r,floating:i}=e;const o=In(t),s=yp(t),a=gp(s),l=tr(t),u=o==="y",d=r.x+r.width/2-i.width/2,c=r.y+r.height/2-i.height/2,h=r[a]/2-i[a]/2;let f;switch(l){case"top":f={x:d,y:r.y-i.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:c};break;case"left":f={x:r.x-i.width,y:c};break;default:f={x:r.x,y:r.y}}switch(Bo(t)){case"start":f[s]-=h*(n&&u?-1:1);break;case"end":f[s]+=h*(n&&u?-1:1);break}return f}const YR=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:c}=Zg(u,r,l),h=r,f={},m=0;for(let g=0;g<a.length;g++){const{name:w,fn:p}=a[g],{x:y,y:v,data:S,reset:C}=await p({x:d,y:c,initialPlacement:r,placement:h,strategy:i,middlewareData:f,rects:u,platform:s,elements:{reference:e,floating:t}});d=y??d,c=v??c,f={...f,[w]:{...f[w],...S}},C&&m<=50&&(m++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(u=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:d,y:c}=Zg(u,h,l)),g=-1)}return{x:d,y:c,placement:h,strategy:i,middlewareData:f}};async function Ys(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:h=!1,padding:f=0}=er(t,e),m=nb(f),w=a[h?c==="floating"?"reference":"floating":c],p=ru(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(w)))==null||n?w:w.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),y=c==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,v=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),S=await(o.isElement==null?void 0:o.isElement(v))?await(o.getScale==null?void 0:o.getScale(v))||{x:1,y:1}:{x:1,y:1},C=ru(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:l}):y);return{top:(p.top-C.top+m.top)/S.y,bottom:(C.bottom-p.bottom+m.bottom)/S.y,left:(p.left-C.left+m.left)/S.x,right:(C.right-p.right+m.right)/S.x}}const QR=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:d=0}=er(e,t)||{};if(u==null)return{};const c=nb(d),h={x:n,y:r},f=yp(i),m=gp(f),g=await s.getDimensions(u),w=f==="y",p=w?"top":"left",y=w?"bottom":"right",v=w?"clientHeight":"clientWidth",S=o.reference[m]+o.reference[f]-h[f]-o.floating[m],C=h[f]-o.reference[f],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let A=T?T[v]:0;(!A||!await(s.isElement==null?void 0:s.isElement(T)))&&(A=a.floating[v]||o.floating[m]);const R=S/2-C/2,M=A/2-g[m]/2-1,P=qr(c[p],M),O=qr(c[y],M),N=P,H=A-g[m]-O,_=A/2-g[m]/2+R,$=bf(N,_,H),G=!l.arrow&&Bo(i)!=null&&_!==$&&o.reference[m]/2-(_<N?P:O)-g[m]/2<0,U=G?_<N?_-N:_-H:0;return{[f]:h[f]+U,data:{[f]:$,centerOffset:_-$-U,...G&&{alignmentOffset:U}},reset:G}}}),XR=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...w}=er(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const p=tr(i),y=In(a),v=tr(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),C=h||(v||!g?[nu(a)]:$R(a)),T=m!=="none";!h&&T&&C.push(...GR(a,g,m,S));const A=[a,...C],R=await Ys(t,w),M=[];let P=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&M.push(R[p]),c){const _=UR(i,s,S);M.push(R[_[0]],R[_[1]])}if(P=[...P,{placement:i,overflows:M}],!M.every(_=>_<=0)){var O,N;const _=(((O=o.flip)==null?void 0:O.index)||0)+1,$=A[_];if($&&(!(c==="alignment"?y!==In($):!1)||P.every(I=>I.overflows[0]>0&&In(I.placement)===y)))return{data:{index:_,overflows:P},reset:{placement:$}};let G=(N=P.filter(U=>U.overflows[0]<=0).sort((U,I)=>U.overflows[1]-I.overflows[1])[0])==null?void 0:N.placement;if(!G)switch(f){case"bestFit":{var H;const U=(H=P.filter(I=>{if(T){const j=In(I.placement);return j===y||j==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(j=>j>0).reduce((j,k)=>j+k,0)]).sort((I,j)=>I[1]-j[1])[0])==null?void 0:H[0];U&&(G=U);break}case"initialPlacement":G=a;break}if(i!==G)return{reset:{placement:G}}}return{}}}};function ey(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ty(e){return FR.some(t=>e[t]>=0)}const JR=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=er(e,t);switch(r){case"referenceHidden":{const o=await Ys(t,{...i,elementContext:"reference"}),s=ey(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ty(s)}}}case"escaped":{const o=await Ys(t,{...i,altBoundary:!0}),s=ey(o,n.floating);return{data:{escapedOffsets:s,escaped:ty(s)}}}default:return{}}}}},rb=new Set(["left","top"]);async function ZR(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=tr(n),a=Bo(n),l=In(n)==="y",u=rb.has(s)?-1:1,d=o&&l?-1:1,c=er(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),l?{x:f*d,y:h*u}:{x:h*u,y:f*d}}const eI=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=t,l=await ZR(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},tI=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...l}=er(e,t),u={x:n,y:r},d=await Ys(t,l),c=In(tr(i)),h=mp(c);let f=u[h],m=u[c];if(o){const w=h==="y"?"top":"left",p=h==="y"?"bottom":"right",y=f+d[w],v=f-d[p];f=bf(y,f,v)}if(s){const w=c==="y"?"top":"left",p=c==="y"?"bottom":"right",y=m+d[w],v=m-d[p];m=bf(y,m,v)}const g=a.fn({...t,[h]:f,[c]:m});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:o,[c]:s}}}}}},nI=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=er(e,t),d={x:n,y:r},c=In(i),h=mp(c);let f=d[h],m=d[c];const g=er(a,t),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const v=h==="y"?"height":"width",S=o.reference[h]-o.floating[v]+w.mainAxis,C=o.reference[h]+o.reference[v]-w.mainAxis;f<S?f=S:f>C&&(f=C)}if(u){var p,y;const v=h==="y"?"width":"height",S=rb.has(tr(i)),C=o.reference[c]-o.floating[v]+(S&&((p=s.offset)==null?void 0:p[c])||0)+(S?0:w.crossAxis),T=o.reference[c]+o.reference[v]+(S?0:((y=s.offset)==null?void 0:y[c])||0)-(S?w.crossAxis:0);m<C?m=C:m>T&&(m=T)}return{[h]:f,[c]:m}}}},rI=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...u}=er(e,t),d=await Ys(t,u),c=tr(i),h=Bo(i),f=In(i)==="y",{width:m,height:g}=o.floating;let w,p;c==="top"||c==="bottom"?(w=c,p=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(p=c,w=h==="end"?"top":"bottom");const y=g-d.top-d.bottom,v=m-d.left-d.right,S=qr(g-d[w],y),C=qr(m-d[p],v),T=!t.middlewareData.shift;let A=S,R=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=y),T&&!h){const P=Mt(d.left,0),O=Mt(d.right,0),N=Mt(d.top,0),H=Mt(d.bottom,0);f?R=m-2*(P!==0||O!==0?P+O:Mt(d.left,d.right)):A=g-2*(N!==0||H!==0?N+H:Mt(d.top,d.bottom))}await l({...t,availableWidth:R,availableHeight:A});const M=await s.getDimensions(a.floating);return m!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function zu(){return typeof window<"u"}function Vo(e){return ib(e)?(e.nodeName||"").toLowerCase():"#document"}function Lt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fn(e){var t;return(t=(ib(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ib(e){return zu()?e instanceof Node||e instanceof Lt(e).Node:!1}function xn(e){return zu()?e instanceof Element||e instanceof Lt(e).Element:!1}function On(e){return zu()?e instanceof HTMLElement||e instanceof Lt(e).HTMLElement:!1}function ny(e){return!zu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Lt(e).ShadowRoot}const iI=new Set(["inline","contents"]);function va(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=wn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!iI.has(i)}const oI=new Set(["table","td","th"]);function sI(e){return oI.has(Vo(e))}const aI=[":popover-open",":modal"];function Bu(e){return aI.some(t=>{try{return e.matches(t)}catch{return!1}})}const lI=["transform","translate","scale","rotate","perspective"],uI=["transform","translate","scale","rotate","perspective","filter"],cI=["paint","layout","strict","content"];function vp(e){const t=xp(),n=xn(e)?wn(e):e;return lI.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||uI.some(r=>(n.willChange||"").includes(r))||cI.some(r=>(n.contain||"").includes(r))}function dI(e){let t=Gr(e);for(;On(t)&&!Do(t);){if(vp(t))return t;if(Bu(t))return null;t=Gr(t)}return null}function xp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const fI=new Set(["html","body","#document"]);function Do(e){return fI.has(Vo(e))}function wn(e){return Lt(e).getComputedStyle(e)}function Vu(e){return xn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Vo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ny(e)&&e.host||Fn(e);return ny(t)?t.host:t}function ob(e){const t=Gr(e);return Do(t)?e.ownerDocument?e.ownerDocument.body:e.body:On(t)&&va(t)?t:ob(t)}function Qs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=ob(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Lt(i);if(o){const a=Sf(s);return t.concat(s,s.visualViewport||[],va(i)?i:[],a&&n?Qs(a):[])}return t.concat(i,Qs(i,[],n))}function Sf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sb(e){const t=wn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=On(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,a=tu(n)!==o||tu(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function wp(e){return xn(e)?e:e.contextElement}function ho(e){const t=wp(e);if(!On(t))return Nn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=sb(t);let s=(o?tu(n.width):n.width)/r,a=(o?tu(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const hI=Nn(0);function ab(e){const t=Lt(e);return!xp()||!t.visualViewport?hI:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pI(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Lt(e)?!1:t}function Mi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=wp(e);let s=Nn(1);t&&(r?xn(r)&&(s=ho(r)):s=ho(e));const a=pI(o,n,r)?ab(o):Nn(0);let l=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,d=i.width/s.x,c=i.height/s.y;if(o){const h=Lt(o),f=r&&xn(r)?Lt(r):r;let m=h,g=Sf(m);for(;g&&r&&f!==m;){const w=ho(g),p=g.getBoundingClientRect(),y=wn(g),v=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,S=p.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,u*=w.y,d*=w.x,c*=w.y,l+=v,u+=S,m=Lt(g),g=Sf(m)}}return ru({width:d,height:c,x:l,y:u})}function bp(e,t){const n=Vu(e).scrollLeft;return t?t.left+n:Mi(Fn(e)).left+n}function lb(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:bp(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function mI(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=Fn(r),a=t?Bu(t.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},u=Nn(1);const d=Nn(0),c=On(r);if((c||!c&&!o)&&((Vo(r)!=="body"||va(s))&&(l=Vu(r)),On(r))){const f=Mi(r);u=ho(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const h=s&&!c&&!o?lb(s,l,!0):Nn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x+h.x,y:n.y*u.y-l.scrollTop*u.y+d.y+h.y}}function gI(e){return Array.from(e.getClientRects())}function yI(e){const t=Fn(e),n=Vu(e),r=e.ownerDocument.body,i=Mt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Mt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+bp(e);const a=-n.scrollTop;return wn(r).direction==="rtl"&&(s+=Mt(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function vI(e,t){const n=Lt(e),r=Fn(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const u=xp();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}const xI=new Set(["absolute","fixed"]);function wI(e,t){const n=Mi(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=On(e)?ho(e):Nn(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=r*o.y;return{width:s,height:a,x:l,y:u}}function ry(e,t,n){let r;if(t==="viewport")r=vI(e,n);else if(t==="document")r=yI(Fn(e));else if(xn(t))r=wI(t,n);else{const i=ab(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ru(r)}function ub(e,t){const n=Gr(e);return n===t||!xn(n)||Do(n)?!1:wn(n).position==="fixed"||ub(n,t)}function bI(e,t){const n=t.get(e);if(n)return n;let r=Qs(e,[],!1).filter(a=>xn(a)&&Vo(a)!=="body"),i=null;const o=wn(e).position==="fixed";let s=o?Gr(e):e;for(;xn(s)&&!Do(s);){const a=wn(s),l=vp(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&xI.has(i.position)||va(s)&&!l&&ub(e,s))?r=r.filter(d=>d!==s):i=a,s=Gr(s)}return t.set(e,r),r}function kI(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Bu(t)?[]:bI(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,d)=>{const c=ry(t,d,i);return u.top=Mt(c.top,u.top),u.right=qr(c.right,u.right),u.bottom=qr(c.bottom,u.bottom),u.left=Mt(c.left,u.left),u},ry(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function SI(e){const{width:t,height:n}=sb(e);return{width:t,height:n}}function TI(e,t,n){const r=On(t),i=Fn(t),o=n==="fixed",s=Mi(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Nn(0);function u(){l.x=bp(i)}if(r||!r&&!o)if((Vo(t)!=="body"||va(i))&&(a=Vu(t)),r){const f=Mi(t,!0,o,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&u();o&&!r&&i&&u();const d=i&&!r&&!o?lb(i,a):Nn(0),c=s.left+a.scrollLeft-l.x-d.x,h=s.top+a.scrollTop-l.y-d.y;return{x:c,y:h,width:s.width,height:s.height}}function Fc(e){return wn(e).position==="static"}function iy(e,t){if(!On(e)||wn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Fn(e)===n&&(n=n.ownerDocument.body),n}function cb(e,t){const n=Lt(e);if(Bu(e))return n;if(!On(e)){let i=Gr(e);for(;i&&!Do(i);){if(xn(i)&&!Fc(i))return i;i=Gr(i)}return n}let r=iy(e,t);for(;r&&sI(r)&&Fc(r);)r=iy(r,t);return r&&Do(r)&&Fc(r)&&!vp(r)?n:r||dI(e)||n}const CI=async function(e){const t=this.getOffsetParent||cb,n=this.getDimensions,r=await n(e.floating);return{reference:TI(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function EI(e){return wn(e).direction==="rtl"}const PI={convertOffsetParentRelativeRectToViewportRelativeRect:mI,getDocumentElement:Fn,getClippingRect:kI,getOffsetParent:cb,getElementRects:CI,getClientRects:gI,getDimensions:SI,getScale:ho,isElement:xn,isRTL:EI};function db(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function AI(e,t){let n=null,r;const i=Fn(e);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:h,height:f}=u;if(a||t(),!h||!f)return;const m=Qa(c),g=Qa(i.clientWidth-(d+h)),w=Qa(i.clientHeight-(c+f)),p=Qa(d),v={rootMargin:-m+"px "+-g+"px "+-w+"px "+-p+"px",threshold:Mt(0,qr(1,l))||1};let S=!0;function C(T){const A=T[0].intersectionRatio;if(A!==l){if(!S)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!db(u,e.getBoundingClientRect())&&s(),S=!1}try{n=new IntersectionObserver(C,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,v)}n.observe(e)}return s(!0),o}function RI(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=wp(e),d=i||o?[...u?Qs(u):[],...Qs(t)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const c=u&&a?AI(u,n):null;let h=-1,f=null;s&&(f=new ResizeObserver(p=>{let[y]=p;y&&y.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),n()}),u&&!l&&f.observe(u),f.observe(t));let m,g=l?Mi(e):null;l&&w();function w(){const p=Mi(e);g&&!db(g,p)&&n(),g=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),o&&y.removeEventListener("resize",n)}),c==null||c(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const II=eI,DI=tI,MI=XR,NI=rI,jI=JR,oy=QR,LI=nI,OI=(e,t,n)=>{const r=new Map,i={platform:PI,...n},o={...i.platform,_c:r};return YR(e,t,{...i,platform:o})};var _I=typeof document<"u",FI=function(){},bl=_I?b.useLayoutEffect:FI;function iu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!iu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!iu(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function fb(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function sy(e,t){const n=fb(e);return Math.round(t*n)/n}function zc(e){const t=b.useRef(e);return bl(()=>{t.current=e}),t}function zI(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[d,c]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=b.useState(r);iu(h,r)||f(r);const[m,g]=b.useState(null),[w,p]=b.useState(null),y=b.useCallback(I=>{I!==T.current&&(T.current=I,g(I))},[]),v=b.useCallback(I=>{I!==A.current&&(A.current=I,p(I))},[]),S=o||m,C=s||w,T=b.useRef(null),A=b.useRef(null),R=b.useRef(d),M=l!=null,P=zc(l),O=zc(i),N=zc(u),H=b.useCallback(()=>{if(!T.current||!A.current)return;const I={placement:t,strategy:n,middleware:h};O.current&&(I.platform=O.current),OI(T.current,A.current,I).then(j=>{const k={...j,isPositioned:N.current!==!1};_.current&&!iu(R.current,k)&&(R.current=k,ma.flushSync(()=>{c(k)}))})},[h,t,n,O,N]);bl(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,c(I=>({...I,isPositioned:!1})))},[u]);const _=b.useRef(!1);bl(()=>(_.current=!0,()=>{_.current=!1}),[]),bl(()=>{if(S&&(T.current=S),C&&(A.current=C),S&&C){if(P.current)return P.current(S,C,H);H()}},[S,C,H,P,M]);const $=b.useMemo(()=>({reference:T,floating:A,setReference:y,setFloating:v}),[y,v]),G=b.useMemo(()=>({reference:S,floating:C}),[S,C]),U=b.useMemo(()=>{const I={position:n,left:0,top:0};if(!G.floating)return I;const j=sy(G.floating,d.x),k=sy(G.floating,d.y);return a?{...I,transform:"translate("+j+"px, "+k+"px)",...fb(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:k}},[n,a,G.floating,d.x,d.y]);return b.useMemo(()=>({...d,update:H,refs:$,elements:G,floatingStyles:U}),[d,H,$,G,U])}const BI=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?oy({element:r.current,padding:i}).fn(n):{}:r?oy({element:r,padding:i}).fn(n):{}}}},VI=(e,t)=>({...II(e),options:[e,t]}),UI=(e,t)=>({...DI(e),options:[e,t]}),$I=(e,t)=>({...LI(e),options:[e,t]}),HI=(e,t)=>({...MI(e),options:[e,t]}),WI=(e,t)=>({...NI(e),options:[e,t]}),qI=(e,t)=>({...jI(e),options:[e,t]}),GI=(e,t)=>({...BI(e),options:[e,t]});var KI="Arrow",hb=b.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return x.jsx(Ct.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:x.jsx("polygon",{points:"0,0 30,0 15,10"})})});hb.displayName=KI;var YI=hb;function QI(e){const[t,n]=b.useState(void 0);return Wr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var pb="Popper",[mb,gb]=Ou(pb),[rU,yb]=mb(pb),vb="PopperAnchor",xb=b.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=yb(vb,n),s=b.useRef(null),a=vn(t,s);return b.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:x.jsx(Ct.div,{...i,ref:a})});xb.displayName=vb;var kp="PopperContent",[XI,JI]=mb(kp),wb=b.forwardRef((e,t)=>{var se,st,at,yt,Pt,ar;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:c="partial",hideWhenDetached:h=!1,updatePositionStrategy:f="optimized",onPlaced:m,...g}=e,w=yb(kp,n),[p,y]=b.useState(null),v=vn(t,bn=>y(bn)),[S,C]=b.useState(null),T=QI(S),A=(T==null?void 0:T.width)??0,R=(T==null?void 0:T.height)??0,M=r+(o!=="center"?"-"+o:""),P=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(u)?u:[u],N=O.length>0,H={padding:P,boundary:O.filter(eD),altBoundary:N},{refs:_,floatingStyles:$,placement:G,isPositioned:U,middlewareData:I}=zI({strategy:"fixed",placement:M,whileElementsMounted:(...bn)=>RI(...bn,{animationFrame:f==="always"}),elements:{reference:w.anchor},middleware:[VI({mainAxis:i+R,alignmentAxis:s}),l&&UI({mainAxis:!0,crossAxis:!1,limiter:c==="partial"?$I():void 0,...H}),l&&HI({...H}),WI({...H,apply:({elements:bn,rects:_i,availableWidth:Fi,availableHeight:ni})=>{const{width:zi,height:ri}=_i.reference,Bn=bn.floating.style;Bn.setProperty("--radix-popper-available-width",`${Fi}px`),Bn.setProperty("--radix-popper-available-height",`${ni}px`),Bn.setProperty("--radix-popper-anchor-width",`${zi}px`),Bn.setProperty("--radix-popper-anchor-height",`${ri}px`)}}),S&&GI({element:S,padding:a}),tD({arrowWidth:A,arrowHeight:R}),h&&qI({strategy:"referenceHidden",...H})]}),[j,k]=Sb(G),Y=Hr(m);Wr(()=>{U&&(Y==null||Y())},[U,Y]);const K=(se=I.arrow)==null?void 0:se.x,E=(st=I.arrow)==null?void 0:st.y,X=((at=I.arrow)==null?void 0:at.centerOffset)!==0,[me,le]=b.useState();return Wr(()=>{p&&le(window.getComputedStyle(p).zIndex)},[p]),x.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:U?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[(yt=I.transformOrigin)==null?void 0:yt.x,(Pt=I.transformOrigin)==null?void 0:Pt.y].join(" "),...((ar=I.hide)==null?void 0:ar.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:x.jsx(XI,{scope:n,placedSide:j,onArrowChange:C,arrowX:K,arrowY:E,shouldHideArrow:X,children:x.jsx(Ct.div,{"data-side":j,"data-align":k,...g,ref:v,style:{...g.style,animation:U?void 0:"none"}})})})});wb.displayName=kp;var bb="PopperArrow",ZI={top:"bottom",right:"left",bottom:"top",left:"right"},kb=b.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=JI(bb,r),s=ZI[o.placedSide];return x.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:x.jsx(YI,{...i,ref:n,style:{...i.style,display:"block"}})})});kb.displayName=bb;function eD(e){return e!==null}var tD=e=>({name:"transformOrigin",options:e,fn(t){var w,p,y;const{placement:n,rects:r,middlewareData:i}=t,s=((w=i.arrow)==null?void 0:w.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,d]=Sb(n),c={start:"0%",center:"50%",end:"100%"}[d],h=(((p=i.arrow)==null?void 0:p.x)??0)+a/2,f=(((y=i.arrow)==null?void 0:y.y)??0)+l/2;let m="",g="";return u==="bottom"?(m=s?c:`${h}px`,g=`${-l}px`):u==="top"?(m=s?c:`${h}px`,g=`${r.floating.height+l}px`):u==="right"?(m=`${-l}px`,g=s?c:`${f}px`):u==="left"&&(m=`${r.floating.width+l}px`,g=s?c:`${f}px`),{data:{x:m,y:g}}}});function Sb(e){const[t,n="center"]=e.split("-");return[t,n]}var nD=xb,rD=wb,iD=kb,[Uu,iU]=Ou("Tooltip",[gb]),Sp=gb(),Tb="TooltipProvider",oD=700,ay="tooltip.open",[sD,Cb]=Uu(Tb),Eb=e=>{const{__scopeTooltip:t,delayDuration:n=oD,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=b.useRef(!0),a=b.useRef(!1),l=b.useRef(0);return b.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),x.jsx(sD,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:b.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:b.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:b.useCallback(u=>{a.current=u},[]),disableHoverableContent:i,children:o})};Eb.displayName=Tb;var Pb="Tooltip",[oU,$u]=Uu(Pb),Tf="TooltipTrigger",aD=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=$u(Tf,n),o=Cb(Tf,n),s=Sp(n),a=b.useRef(null),l=vn(t,a,i.onTriggerChange),u=b.useRef(!1),d=b.useRef(!1),c=b.useCallback(()=>u.current=!1,[]);return b.useEffect(()=>()=>document.removeEventListener("pointerup",c),[c]),x.jsx(nD,{asChild:!0,...s,children:x.jsx(Ct.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Ue(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ue(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Ue(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",c,{once:!0})}),onFocus:Ue(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:Ue(e.onBlur,i.onClose),onClick:Ue(e.onClick,i.onClose)})})});aD.displayName=Tf;var lD="TooltipPortal",[sU,uD]=Uu(lD,{forceMount:void 0}),Mo="TooltipContent",Ab=b.forwardRef((e,t)=>{const n=uD(Mo,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=$u(Mo,e.__scopeTooltip);return x.jsx(sp,{present:r||s.open,children:s.disableHoverableContent?x.jsx(Rb,{side:i,...o,ref:t}):x.jsx(cD,{side:i,...o,ref:t})})}),cD=b.forwardRef((e,t)=>{const n=$u(Mo,e.__scopeTooltip),r=Cb(Mo,e.__scopeTooltip),i=b.useRef(null),o=vn(t,i),[s,a]=b.useState(null),{trigger:l,onClose:u}=n,d=i.current,{onPointerInTransitChange:c}=r,h=b.useCallback(()=>{a(null),c(!1)},[c]),f=b.useCallback((m,g)=>{const w=m.currentTarget,p={x:m.clientX,y:m.clientY},y=mD(p,w.getBoundingClientRect()),v=gD(p,y),S=yD(g.getBoundingClientRect()),C=xD([...v,...S]);a(C),c(!0)},[c]);return b.useEffect(()=>()=>h(),[h]),b.useEffect(()=>{if(l&&d){const m=w=>f(w,d),g=w=>f(w,l);return l.addEventListener("pointerleave",m),d.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",m),d.removeEventListener("pointerleave",g)}}},[l,d,f,h]),b.useEffect(()=>{if(s){const m=g=>{const w=g.target,p={x:g.clientX,y:g.clientY},y=(l==null?void 0:l.contains(w))||(d==null?void 0:d.contains(w)),v=!vD(p,s);y?h():v&&(h(),u())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[l,d,s,u,h]),x.jsx(Rb,{...e,ref:o})}),[dD,fD]=Uu(Pb,{isInside:!1}),hD=fA("TooltipContent"),Rb=b.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=e,l=$u(Mo,n),u=Sp(n),{onClose:d}=l;return b.useEffect(()=>(document.addEventListener(ay,d),()=>document.removeEventListener(ay,d)),[d]),b.useEffect(()=>{if(l.trigger){const c=h=>{const f=h.target;f!=null&&f.contains(l.trigger)&&d()};return window.addEventListener("scroll",c,{capture:!0}),()=>window.removeEventListener("scroll",c,{capture:!0})}},[l.trigger,d]),x.jsx(op,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:c=>c.preventDefault(),onDismiss:d,children:x.jsxs(rD,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[x.jsx(hD,{children:r}),x.jsx(dD,{scope:n,isInside:!0,children:x.jsx(_A,{id:l.contentId,role:"tooltip",children:i||r})})]})})});Ab.displayName=Mo;var Ib="TooltipArrow",pD=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Sp(n);return fD(Ib,n).isInside?null:x.jsx(iD,{...i,...r,ref:t})});pD.displayName=Ib;function mD(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function gD(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function yD(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function vD(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const a=t[o],l=t[s],u=a.x,d=a.y,c=l.x,h=l.y;d>r!=h>r&&n<(c-u)*(r-d)/(h-d)+u&&(i=!i)}return i}function xD(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),wD(t)}function wD(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var bD=Eb,Db=Ab;const kD=bD,SD=b.forwardRef(({className:e,sideOffset:t=4,...n},r)=>x.jsx(Db,{ref:r,sideOffset:t,className:Ft("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));SD.displayName=Db.displayName;var Hu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Wu=typeof window>"u"||"Deno"in globalThis;function un(){}function TD(e,t){return typeof e=="function"?e(t):e}function CD(e){return typeof e=="number"&&e>=0&&e!==1/0}function ED(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Cf(e,t){return typeof e=="function"?e(t):e}function PD(e,t){return typeof e=="function"?e(t):e}function ly(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==Tp(s,t.options))return!1}else if(!Js(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||o&&!o(t))}function uy(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Xs(t.options.mutationKey)!==Xs(o))return!1}else if(!Js(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Tp(e,t){return((t==null?void 0:t.queryKeyHashFn)||Xs)(e)}function Xs(e){return JSON.stringify(e,(t,n)=>Ef(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Js(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Js(e[n],t[n])):!1}function Mb(e,t){if(e===t)return e;const n=cy(e)&&cy(t);if(n||Ef(e)&&Ef(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,a=n?[]:{},l=new Set(r);let u=0;for(let d=0;d<s;d++){const c=n?d:o[d];(!n&&l.has(c)||n)&&e[c]===void 0&&t[c]===void 0?(a[c]=void 0,u++):(a[c]=Mb(e[c],t[c]),a[c]===e[c]&&e[c]!==void 0&&u++)}return i===s&&u===i?e:a}return t}function cy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ef(e){if(!dy(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!dy(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function dy(e){return Object.prototype.toString.call(e)==="[object Object]"}function AD(e){return new Promise(t=>{setTimeout(t,e)})}function RD(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Mb(e,t):t}function ID(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function DD(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Cp=Symbol();function Nb(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Cp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var yi,Tr,go,Ux,MD=(Ux=class extends Hu{constructor(){super();fe(this,yi);fe(this,Tr);fe(this,go);ee(this,go,t=>{if(!Wu&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,Tr)||this.setEventListener(L(this,go))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Tr))==null||t.call(this),ee(this,Tr,void 0))}setEventListener(t){var n;ee(this,go,t),(n=L(this,Tr))==null||n.call(this),ee(this,Tr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){L(this,yi)!==t&&(ee(this,yi,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof L(this,yi)=="boolean"?L(this,yi):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},yi=new WeakMap,Tr=new WeakMap,go=new WeakMap,Ux),jb=new MD,yo,Cr,vo,$x,ND=($x=class extends Hu{constructor(){super();fe(this,yo,!0);fe(this,Cr);fe(this,vo);ee(this,vo,t=>{if(!Wu&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,Cr)||this.setEventListener(L(this,vo))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Cr))==null||t.call(this),ee(this,Cr,void 0))}setEventListener(t){var n;ee(this,vo,t),(n=L(this,Cr))==null||n.call(this),ee(this,Cr,t(this.setOnline.bind(this)))}setOnline(t){L(this,yo)!==t&&(ee(this,yo,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return L(this,yo)}},yo=new WeakMap,Cr=new WeakMap,vo=new WeakMap,$x),ou=new ND;function jD(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function LD(e){return Math.min(1e3*2**e,3e4)}function Lb(e){return(e??"online")==="online"?ou.isOnline():!0}var Ob=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Bc(e){return e instanceof Ob}function _b(e){let t=!1,n=0,r=!1,i;const o=jD(),s=g=>{var w;r||(h(new Ob(g)),(w=e.abort)==null||w.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>jb.isFocused()&&(e.networkMode==="always"||ou.isOnline())&&e.canRun(),d=()=>Lb(e.networkMode)&&e.canRun(),c=g=>{var w;r||(r=!0,(w=e.onSuccess)==null||w.call(e,g),i==null||i(),o.resolve(g))},h=g=>{var w;r||(r=!0,(w=e.onError)==null||w.call(e,g),i==null||i(),o.reject(g))},f=()=>new Promise(g=>{var w;i=p=>{(r||u())&&g(p)},(w=e.onPause)==null||w.call(e)}).then(()=>{var g;i=void 0,r||(g=e.onContinue)==null||g.call(e)}),m=()=>{if(r)return;let g;const w=n===0?e.initialPromise:void 0;try{g=w??e.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(c).catch(p=>{var T;if(r)return;const y=e.retry??(Wu?0:3),v=e.retryDelay??LD,S=typeof v=="function"?v(n,p):v,C=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,p);if(t||!C){h(p);return}n++,(T=e.onFail)==null||T.call(e,n,p),AD(S).then(()=>u()?void 0:f()).then(()=>{t?h(p):m()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?m():f().then(m),o)}}var OD=e=>setTimeout(e,0);function _D(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=OD;const o=a=>{t?e.push(a):i(()=>{n(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var ct=_D(),vi,Hx,Fb=(Hx=class{constructor(){fe(this,vi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),CD(this.gcTime)&&ee(this,vi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Wu?1/0:5*60*1e3))}clearGcTimeout(){L(this,vi)&&(clearTimeout(L(this,vi)),ee(this,vi,void 0))}},vi=new WeakMap,Hx),xo,xi,$t,wi,et,la,bi,cn,$n,Wx,FD=(Wx=class extends Fb{constructor(t){super();fe(this,cn);fe(this,xo);fe(this,xi);fe(this,$t);fe(this,wi);fe(this,et);fe(this,la);fe(this,bi);ee(this,bi,!1),ee(this,la,t.defaultOptions),this.setOptions(t.options),this.observers=[],ee(this,wi,t.client),ee(this,$t,L(this,wi).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ee(this,xo,BD(this.options)),this.state=t.state??L(this,xo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=L(this,et))==null?void 0:t.promise}setOptions(t){this.options={...L(this,la),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,$t).remove(this)}setData(t,n){const r=RD(this.state.data,t,this.options);return Xe(this,cn,$n).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Xe(this,cn,$n).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=L(this,et))==null?void 0:r.promise;return(i=L(this,et))==null||i.cancel(t),n?n.then(un).catch(un):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,xo))}isActive(){return this.observers.some(t=>PD(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Cp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Cf(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!ED(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,et))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,et))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),L(this,$t).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(L(this,et)&&(L(this,bi)?L(this,et).cancel({revert:!0}):L(this,et).cancelRetry()),this.scheduleGc()),L(this,$t).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xe(this,cn,$n).call(this,{type:"invalidate"})}fetch(t,n){var u,d,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,et))return L(this,et).continueRetry(),L(this,et).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(f=>f.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(ee(this,bi,!0),r.signal)})},o=()=>{const h=Nb(this.options,n),m=(()=>{const g={client:L(this,wi),queryKey:this.queryKey,meta:this.meta};return i(g),g})();return ee(this,bi,!1),this.options.persister?this.options.persister(h,m,this):h(m)},a=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:L(this,wi),state:this.state,fetchFn:o};return i(h),h})();(u=this.options.behavior)==null||u.onFetch(a,this),ee(this,xi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Xe(this,cn,$n).call(this,{type:"fetch",meta:(c=a.fetchOptions)==null?void 0:c.meta});const l=h=>{var f,m,g,w;Bc(h)&&h.silent||Xe(this,cn,$n).call(this,{type:"error",error:h}),Bc(h)||((m=(f=L(this,$t).config).onError)==null||m.call(f,h,this),(w=(g=L(this,$t).config).onSettled)==null||w.call(g,this.state.data,h,this)),this.scheduleGc()};return ee(this,et,_b({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var f,m,g,w;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(p){l(p);return}(m=(f=L(this,$t).config).onSuccess)==null||m.call(f,h,this),(w=(g=L(this,$t).config).onSettled)==null||w.call(g,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,f)=>{Xe(this,cn,$n).call(this,{type:"failed",failureCount:h,error:f})},onPause:()=>{Xe(this,cn,$n).call(this,{type:"pause"})},onContinue:()=>{Xe(this,cn,$n).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),L(this,et).start()}},xo=new WeakMap,xi=new WeakMap,$t=new WeakMap,wi=new WeakMap,et=new WeakMap,la=new WeakMap,bi=new WeakMap,cn=new WeakSet,$n=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...zD(r.data,this.options),fetchMeta:t.meta??null};case"success":return ee(this,xi,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Bc(i)&&i.revert&&L(this,xi)?{...L(this,xi),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),ct.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),L(this,$t).notify({query:this,type:"updated",action:t})})},Wx);function zD(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Lb(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function BD(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var En,qx,VD=(qx=class extends Hu{constructor(t={}){super();fe(this,En);this.config=t,ee(this,En,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??Tp(i,n);let s=this.get(o);return s||(s=new FD({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){L(this,En).has(t.queryHash)||(L(this,En).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=L(this,En).get(t.queryHash);n&&(t.destroy(),n===t&&L(this,En).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ct.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return L(this,En).get(t)}getAll(){return[...L(this,En).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>ly(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>ly(t,r)):n}notify(t){ct.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ct.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ct.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},En=new WeakMap,qx),Pn,lt,ki,An,yr,Gx,UD=(Gx=class extends Fb{constructor(t){super();fe(this,An);fe(this,Pn);fe(this,lt);fe(this,ki);this.mutationId=t.mutationId,ee(this,lt,t.mutationCache),ee(this,Pn,[]),this.state=t.state||$D(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){L(this,Pn).includes(t)||(L(this,Pn).push(t),this.clearGcTimeout(),L(this,lt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ee(this,Pn,L(this,Pn).filter(n=>n!==t)),this.scheduleGc(),L(this,lt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){L(this,Pn).length||(this.state.status==="pending"?this.scheduleGc():L(this,lt).remove(this))}continue(){var t;return((t=L(this,ki))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,a,l,u,d,c,h,f,m,g,w,p,y,v,S,C,T,A,R;const n=()=>{Xe(this,An,yr).call(this,{type:"continue"})};ee(this,ki,_b({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(M,P)=>{Xe(this,An,yr).call(this,{type:"failed",failureCount:M,error:P})},onPause:()=>{Xe(this,An,yr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,lt).canRun(this)}));const r=this.state.status==="pending",i=!L(this,ki).canStart();try{if(r)n();else{Xe(this,An,yr).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(o=L(this,lt).config).onMutate)==null?void 0:s.call(o,t,this));const P=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));P!==this.state.context&&Xe(this,An,yr).call(this,{type:"pending",context:P,variables:t,isPaused:i})}const M=await L(this,ki).start();return await((d=(u=L(this,lt).config).onSuccess)==null?void 0:d.call(u,M,t,this.state.context,this)),await((h=(c=this.options).onSuccess)==null?void 0:h.call(c,M,t,this.state.context)),await((m=(f=L(this,lt).config).onSettled)==null?void 0:m.call(f,M,null,this.state.variables,this.state.context,this)),await((w=(g=this.options).onSettled)==null?void 0:w.call(g,M,null,t,this.state.context)),Xe(this,An,yr).call(this,{type:"success",data:M}),M}catch(M){try{throw await((y=(p=L(this,lt).config).onError)==null?void 0:y.call(p,M,t,this.state.context,this)),await((S=(v=this.options).onError)==null?void 0:S.call(v,M,t,this.state.context)),await((T=(C=L(this,lt).config).onSettled)==null?void 0:T.call(C,void 0,M,this.state.variables,this.state.context,this)),await((R=(A=this.options).onSettled)==null?void 0:R.call(A,void 0,M,t,this.state.context)),M}finally{Xe(this,An,yr).call(this,{type:"error",error:M})}}finally{L(this,lt).runNext(this)}}},Pn=new WeakMap,lt=new WeakMap,ki=new WeakMap,An=new WeakSet,yr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ct.batch(()=>{L(this,Pn).forEach(r=>{r.onMutationUpdate(t)}),L(this,lt).notify({mutation:this,type:"updated",action:t})})},Gx);function $D(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var qn,dn,ua,Kx,HD=(Kx=class extends Hu{constructor(t={}){super();fe(this,qn);fe(this,dn);fe(this,ua);this.config=t,ee(this,qn,new Set),ee(this,dn,new Map),ee(this,ua,0)}build(t,n,r){const i=new UD({mutationCache:this,mutationId:++Ra(this,ua)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){L(this,qn).add(t);const n=Xa(t);if(typeof n=="string"){const r=L(this,dn).get(n);r?r.push(t):L(this,dn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(L(this,qn).delete(t)){const n=Xa(t);if(typeof n=="string"){const r=L(this,dn).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&L(this,dn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Xa(t);if(typeof n=="string"){const r=L(this,dn).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Xa(t);if(typeof n=="string"){const i=(r=L(this,dn).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ct.batch(()=>{L(this,qn).forEach(t=>{this.notify({type:"removed",mutation:t})}),L(this,qn).clear(),L(this,dn).clear()})}getAll(){return Array.from(L(this,qn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>uy(n,r))}findAll(t={}){return this.getAll().filter(n=>uy(t,n))}notify(t){ct.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ct.batch(()=>Promise.all(t.map(n=>n.continue().catch(un))))}},qn=new WeakMap,dn=new WeakMap,ua=new WeakMap,Kx);function Xa(e){var t;return(t=e.options.scope)==null?void 0:t.id}function fy(e){return{onFetch:(t,n)=>{var d,c,h,f,m;const r=t.options,i=(h=(c=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:c.fetchMore)==null?void 0:h.direction,o=((f=t.state.data)==null?void 0:f.pages)||[],s=((m=t.state.data)==null?void 0:m.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let g=!1;const w=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},p=Nb(t.options,t.fetchOptions),y=async(v,S,C)=>{if(g)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const A=(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:S,direction:C?"backward":"forward",meta:t.options.meta};return w(O),O})(),R=await p(A),{maxPages:M}=t.options,P=C?DD:ID;return{pages:P(v.pages,R,M),pageParams:P(v.pageParams,S,M)}};if(i&&o.length){const v=i==="backward",S=v?WD:hy,C={pages:o,pageParams:s},T=S(r,C);a=await y(C,T,v)}else{const v=e??o.length;do{const S=l===0?s[0]??r.initialPageParam:hy(r,a);if(l>0&&S==null)break;a=await y(a,S),l++}while(l<v)}return a};t.options.persister?t.fetchFn=()=>{var g,w;return(w=(g=t.options).persister)==null?void 0:w.call(g,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function hy(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function WD(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var De,Er,Pr,wo,bo,Ar,ko,So,Yx,qD=(Yx=class{constructor(e={}){fe(this,De);fe(this,Er);fe(this,Pr);fe(this,wo);fe(this,bo);fe(this,Ar);fe(this,ko);fe(this,So);ee(this,De,e.queryCache||new VD),ee(this,Er,e.mutationCache||new HD),ee(this,Pr,e.defaultOptions||{}),ee(this,wo,new Map),ee(this,bo,new Map),ee(this,Ar,0)}mount(){Ra(this,Ar)._++,L(this,Ar)===1&&(ee(this,ko,jb.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,De).onFocus())})),ee(this,So,ou.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,De).onOnline())})))}unmount(){var e,t;Ra(this,Ar)._--,L(this,Ar)===0&&((e=L(this,ko))==null||e.call(this),ee(this,ko,void 0),(t=L(this,So))==null||t.call(this),ee(this,So,void 0))}isFetching(e){return L(this,De).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return L(this,Er).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,De).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=L(this,De).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Cf(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return L(this,De).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=L(this,De).get(r.queryHash),o=i==null?void 0:i.state.data,s=TD(t,o);if(s!==void 0)return L(this,De).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return ct.batch(()=>L(this,De).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,De).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=L(this,De);ct.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=L(this,De);return ct.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=ct.batch(()=>L(this,De).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(un).catch(un)}invalidateQueries(e,t={}){return ct.batch(()=>(L(this,De).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=ct.batch(()=>L(this,De).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(un)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(un)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=L(this,De).build(this,t);return n.isStaleByTime(Cf(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(un).catch(un)}fetchInfiniteQuery(e){return e.behavior=fy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(un).catch(un)}ensureInfiniteQueryData(e){return e.behavior=fy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ou.isOnline()?L(this,Er).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,De)}getMutationCache(){return L(this,Er)}getDefaultOptions(){return L(this,Pr)}setDefaultOptions(e){ee(this,Pr,e)}setQueryDefaults(e,t){L(this,wo).set(Xs(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...L(this,wo).values()],n={};return t.forEach(r=>{Js(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){L(this,bo).set(Xs(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...L(this,bo).values()],n={};return t.forEach(r=>{Js(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...L(this,Pr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Tp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Cp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...L(this,Pr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){L(this,De).clear(),L(this,Er).clear()}},De=new WeakMap,Er=new WeakMap,Pr=new WeakMap,wo=new WeakMap,bo=new WeakMap,Ar=new WeakMap,ko=new WeakMap,So=new WeakMap,Yx),GD=b.createContext(void 0),KD=({client:e,children:t})=>(b.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),x.jsx(GD.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(this,arguments)}var Dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dr||(Dr={}));const py="popstate";function YD(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Pf("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:su(i)}return XD(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zb(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function QD(){return Math.random().toString(36).substr(2,8)}function my(e,t){return{usr:e.state,key:e.key,idx:t}}function Pf(e,t,n,r){return n===void 0&&(n=null),Zs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Uo(t):t,{state:n,key:t&&t.key||r||QD()})}function su(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Uo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function XD(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Dr.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Zs({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=Dr.Pop;let w=d(),p=w==null?null:w-u;u=w,l&&l({action:a,location:g.location,delta:p})}function h(w,p){a=Dr.Push;let y=Pf(g.location,w,p);u=d()+1;let v=my(y,u),S=g.createHref(y);try{s.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:a,location:g.location,delta:1})}function f(w,p){a=Dr.Replace;let y=Pf(g.location,w,p);u=d();let v=my(y,u),S=g.createHref(y);s.replaceState(v,"",S),o&&l&&l({action:a,location:g.location,delta:0})}function m(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof w=="string"?w:su(w);return y=y.replace(/ $/,"%20"),Le(p,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,p)}let g={get action(){return a},get location(){return e(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(py,c),l=w,()=>{i.removeEventListener(py,c),l=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let p=m(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:f,go(w){return s.go(w)}};return g}var gy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gy||(gy={}));function JD(e,t,n){return n===void 0&&(n="/"),ZD(e,t,n,!1)}function ZD(e,t,n,r){let i=typeof t=="string"?Uo(t):t,o=Ep(i.pathname||"/",n);if(o==null)return null;let s=Bb(e);eM(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=dM(o);a=uM(s[l],u,r)}return a}function Bb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vr([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bb(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:aM(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Vb(o.path))i(o,s,l)}),t}function Vb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Vb(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function eM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tM=/^:[\w-]+$/,nM=3,rM=2,iM=1,oM=10,sM=-2,yy=e=>e==="*";function aM(e,t){let n=e.split("/"),r=n.length;return n.some(yy)&&(r+=sM),t&&(r+=rM),n.filter(i=>!yy(i)).reduce((i,o)=>i+(tM.test(o)?nM:o===""?iM:oM),r)}function lM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function uM(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",c=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:Vr([o,c.pathname]),pathnameBase:mM(Vr([o,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(o=Vr([o,c.pathnameBase]))}return s}function vy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cM(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let g=a[c]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const m=a[c];return f&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function cM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zb(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zb(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ep(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Uo(e):e;return{pathname:n?n.startsWith("/")?n:hM(n,t):t,search:gM(r),hash:yM(i)}}function hM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e,t){let n=pM(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Uo(e):(i=Zs({},e),Le(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?t[c]:"/"}let l=fM(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Vr=e=>e.join("/").replace(/\/\/+/g,"/"),mM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ub=["post","put","patch","delete"];new Set(Ub);const xM=["get",...Ub];new Set(xM);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}const Rp=b.createContext(null),wM=b.createContext(null),Zr=b.createContext(null),qu=b.createContext(null),ir=b.createContext({outlet:null,matches:[],isDataRoute:!1}),$b=b.createContext(null);function bM(e,t){let{relative:n}=t===void 0?{}:t;$o()||Le(!1);let{basename:r,navigator:i}=b.useContext(Zr),{hash:o,pathname:s,search:a}=Gb(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Vr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function $o(){return b.useContext(qu)!=null}function or(){return $o()||Le(!1),b.useContext(qu).location}function Hb(e){b.useContext(Zr).static||b.useLayoutEffect(e)}function Wb(){let{isDataRoute:e}=b.useContext(ir);return e?jM():kM()}function kM(){$o()||Le(!1);let e=b.useContext(Rp),{basename:t,future:n,navigator:r}=b.useContext(Zr),{matches:i}=b.useContext(ir),{pathname:o}=or(),s=JSON.stringify(Pp(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return Hb(()=>{a.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Ap(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Vr([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,s,o,e])}function qb(){let{matches:e}=b.useContext(ir),t=e[e.length-1];return t?t.params:{}}function Gb(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Zr),{matches:i}=b.useContext(ir),{pathname:o}=or(),s=JSON.stringify(Pp(i,r.v7_relativeSplatPath));return b.useMemo(()=>Ap(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function SM(e,t){return TM(e,t)}function TM(e,t,n,r){$o()||Le(!1);let{navigator:i}=b.useContext(Zr),{matches:o}=b.useContext(ir),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=or(),d;if(t){var c;let w=typeof t=="string"?Uo(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||Le(!1),d=w}else d=u;let h=d.pathname||"/",f=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=JD(e,{pathname:f}),g=RM(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&g?b.createElement(qu.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Dr.Pop}},g):g}function CM(){let e=NM(),t=vM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const EM=b.createElement(CM,null);class PM extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(ir.Provider,{value:this.props.routeContext},b.createElement($b.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AM(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Rp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ir.Provider,{value:t},r)}function RM(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||Le(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:f}=n,m=c.route.loader&&h[c.route.id]===void 0&&(!f||f[c.route.id]===void 0);if(c.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,h)=>{let f,m=!1,g=null,w=null;n&&(f=a&&c.route.id?a[c.route.id]:void 0,g=c.route.errorElement||EM,l&&(u<0&&h===0?(m=!0,w=null):u===h&&(m=!0,w=c.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),y=()=>{let v;return f?v=g:m?v=w:c.route.Component?v=b.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,b.createElement(AM,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?b.createElement(PM,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var Kb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kb||{}),au=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(au||{});function IM(e){let t=b.useContext(Rp);return t||Le(!1),t}function DM(e){let t=b.useContext(wM);return t||Le(!1),t}function MM(e){let t=b.useContext(ir);return t||Le(!1),t}function Yb(e){let t=MM(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function NM(){var e;let t=b.useContext($b),n=DM(au.UseRouteError),r=Yb(au.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jM(){let{router:e}=IM(Kb.UseNavigateStable),t=Yb(au.UseNavigateStable),n=b.useRef(!1);return Hb(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ea({fromRouteId:t},o)))},[e,t])}function LM(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Af(e){let{to:t,replace:n,state:r,relative:i}=e;$o()||Le(!1);let{future:o,static:s}=b.useContext(Zr),{matches:a}=b.useContext(ir),{pathname:l}=or(),u=Wb(),d=Ap(t,Pp(a,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function vr(e){Le(!1)}function OM(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:o,static:s=!1,future:a}=e;$o()&&Le(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:o,static:s,future:ea({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Uo(r));let{pathname:d="/",search:c="",hash:h="",state:f=null,key:m="default"}=r,g=b.useMemo(()=>{let w=Ep(d,l);return w==null?null:{location:{pathname:w,search:c,hash:h,state:f,key:m},navigationType:i}},[l,d,c,h,f,m,i]);return g==null?null:b.createElement(Zr.Provider,{value:u},b.createElement(qu.Provider,{children:n,value:g}))}function _M(e){let{children:t,location:n}=e;return SM(Rf(t),n)}new Promise(()=>{});function Rf(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Rf(r.props.children,o));return}r.type!==vr&&Le(!1),!r.props.index||!r.props.children||Le(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Rf(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function If(){return If=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},If.apply(this,arguments)}function FM(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function BM(e,t){return e.button===0&&(!t||t==="_self")&&!zM(e)}const VM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UM="6";try{window.__reactRouterVersion=UM}catch{}const $M="startTransition",xy=s0[$M];function HM(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=YD({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&xy?xy(()=>l(c)):l(c)},[l,u]);return b.useLayoutEffect(()=>s.listen(d),[s,d]),b.useEffect(()=>LM(r),[r]),b.createElement(OM,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const WM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:c}=t,h=FM(t,VM),{basename:f}=b.useContext(Zr),m,g=!1;if(typeof u=="string"&&qM.test(u)&&(m=u,WM))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Ep(S.pathname,f);S.origin===v.origin&&C!=null?u=C+S.search+S.hash:g=!0}catch{}let w=bM(u,{relative:i}),p=GM(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:c});function y(v){r&&r(v),v.defaultPrevented||p(v)}return b.createElement("a",If({},h,{href:m||w,onClick:g||o?r:y,ref:n,target:l}))});var wy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wy||(wy={}));var by;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function GM(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Wb(),u=or(),d=Gb(e,{relative:s});return b.useCallback(c=>{if(BM(c,n)){c.preventDefault();let h=r!==void 0?r:su(u)===su(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}const Qb=b.createContext(void 0);function KM({children:e}){const[t,n]=b.useState(()=>localStorage.getItem("portfolio-theme")||"dark");b.useEffect(()=>{const i=window.document.documentElement;i.classList.remove("light","dark"),i.classList.add(t),localStorage.setItem("portfolio-theme",t)},[t]);const r=()=>{n(i=>i==="dark"?"light":"dark")};return x.jsx(Qb.Provider,{value:{theme:t,toggleTheme:r},children:e})}function Xb(){const e=b.useContext(Qb);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}function YM(){const{pathname:e}=or();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Ip=b.createContext({});function Dp(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Jb=typeof window<"u",Zb=Jb?b.useLayoutEffect:b.useEffect,Gu=b.createContext(null);function Mp(e,t){e.indexOf(t)===-1&&e.push(t)}function Np(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const _n=(e,t,n)=>n>t?t:n<e?e:n;let Ku=()=>{},No=()=>{};const nr={},ek=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function tk(e){return typeof e=="object"&&e!==null}const nk=e=>/^0[^.\s]+$/u.test(e);function jp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Qt=e=>e,QM=(e,t)=>n=>t(e(n)),xa=(...e)=>e.reduce(QM),ta=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Lp{constructor(){this.subscriptions=[]}add(t){return Mp(this.subscriptions,t),()=>Np(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=e=>e*1e3,Kt=e=>e/1e3;function rk(e,t){return t?e*(1e3/t):0}const ik=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,XM=1e-7,JM=12;function ZM(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=ik(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>XM&&++a<JM);return s}function wa(e,t,n,r){if(e===t&&n===r)return Qt;const i=o=>ZM(o,0,1,e,n);return o=>o===0||o===1?o:ik(i(o),t,r)}const ok=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,sk=e=>t=>1-e(1-t),ak=wa(.33,1.53,.69,.99),Op=sk(ak),lk=ok(Op),uk=e=>(e*=2)<1?.5*Op(e):.5*(2-Math.pow(2,-10*(e-1))),_p=e=>1-Math.sin(Math.acos(e)),ck=sk(_p),dk=ok(_p),eN=wa(.42,0,1,1),tN=wa(0,0,.58,1),fk=wa(.42,0,.58,1),nN=e=>Array.isArray(e)&&typeof e[0]!="number",hk=e=>Array.isArray(e)&&typeof e[0]=="number",ky={linear:Qt,easeIn:eN,easeInOut:fk,easeOut:tN,circIn:_p,circInOut:dk,circOut:ck,backIn:Op,backInOut:lk,backOut:ak,anticipate:uk},rN=e=>typeof e=="string",Sy=e=>{if(hk(e)){No(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,i]=e;return wa(t,n,r,i)}else if(rN(e))return No(ky[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),ky[e];return e},Ja=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Ty={value:null,addProjectionMetrics:null};function iN(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(c){s.has(c)&&(d.schedule(c),e()),l++,c(a)}const d={schedule:(c,h=!1,f=!1)=>{const g=f&&i?n:r;return h&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{r.delete(c),s.delete(c)},process:c=>{if(a=c,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(u),t&&Ty.value&&Ty.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,d.process(c))}};return d}const oN=40;function pk(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ja.reduce((v,S)=>(v[S]=iN(o,t?S:void 0),v),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:d,update:c,preRender:h,render:f,postRender:m}=s,g=()=>{const v=nr.useManualTiming?i.timestamp:performance.now();n=!1,nr.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,oN),1)),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),d.process(i),c.process(i),h.process(i),f.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},w=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Ja.reduce((v,S)=>{const C=s[S];return v[S]=(T,A=!1,R=!1)=>(n||w(),C.schedule(T,A,R)),v},{}),cancel:v=>{for(let S=0;S<Ja.length;S++)s[Ja[S]].cancel(v)},state:i,steps:s}}const{schedule:Se,cancel:Kr,state:Ke,steps:Uc}=pk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qt,!0);let kl;function sN(){kl=void 0}const ft={now:()=>(kl===void 0&&ft.set(Ke.isProcessing||nr.useManualTiming?Ke.timestamp:performance.now()),kl),set:e=>{kl=e,queueMicrotask(sN)}},mk=e=>t=>typeof t=="string"&&t.startsWith(e),gk=mk("--"),aN=mk("var(--"),Fp=e=>aN(e)?lN.test(e.split("/*")[0].trim()):!1,lN=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Cy(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Ho={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},na={...Ho,transform:e=>_n(0,1,e)},Za={...Ho,default:1},Cs=e=>Math.round(e*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function uN(e){return e==null}const cN=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bp=(e,t)=>n=>!!(typeof n=="string"&&cN.test(n)&&n.startsWith(e)||t&&!uN(n)&&Object.prototype.hasOwnProperty.call(n,t)),yk=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(zp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},dN=e=>_n(0,255,e),$c={...Ho,transform:e=>Math.round(dN(e))},mi={test:Bp("rgb","red"),parse:yk("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+$c.transform(e)+", "+$c.transform(t)+", "+$c.transform(n)+", "+Cs(na.transform(r))+")"};function fN(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Df={test:Bp("#"),parse:fN,transform:mi.transform},ba=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),xr=ba("deg"),Ln=ba("%"),W=ba("px"),hN=ba("vh"),pN=ba("vw"),Ey={...Ln,parse:e=>Ln.parse(e)/100,transform:e=>Ln.transform(e*100)},to={test:Bp("hsl","hue"),parse:yk("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ln.transform(Cs(t))+", "+Ln.transform(Cs(n))+", "+Cs(na.transform(r))+")"},Fe={test:e=>mi.test(e)||Df.test(e)||to.test(e),parse:e=>mi.test(e)?mi.parse(e):to.test(e)?to.parse(e):Df.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mi.transform(e):to.transform(e),getAnimatableNone:e=>{const t=Fe.parse(e);return t.alpha=0,Fe.transform(t)}},mN=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gN(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zp))==null?void 0:t.length)||0)+(((n=e.match(mN))==null?void 0:n.length)||0)>0}const vk="number",xk="color",yN="var",vN="var(",Py="${}",xN=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ra(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(xN,l=>(Fe.test(l)?(r.color.push(o),i.push(xk),n.push(Fe.parse(l))):l.startsWith(vN)?(r.var.push(o),i.push(yN),n.push(l)):(r.number.push(o),i.push(vk),n.push(parseFloat(l))),++o,Py)).split(Py);return{values:n,split:a,indexes:r,types:i}}function wk(e){return ra(e).values}function bk(e){const{split:t,types:n}=ra(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===vk?o+=Cs(i[s]):a===xk?o+=Fe.transform(i[s]):o+=i[s]}return o}}const wN=e=>typeof e=="number"?0:Fe.test(e)?Fe.getAnimatableNone(e):e;function bN(e){const t=wk(e);return bk(e)(t.map(wN))}const Yr={test:gN,parse:wk,createTransformer:bk,getAnimatableNone:bN};function Hc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kN({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Hc(l,a,e+1/3),o=Hc(l,a,e),s=Hc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function lu(e,t){return n=>n>0?t:e}const Ae=(e,t,n)=>e+(t-e)*n,Wc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},SN=[Df,mi,to],TN=e=>SN.find(t=>t.test(e));function Ay(e){const t=TN(e);if(Ku(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===to&&(n=kN(n)),n}const Ry=(e,t)=>{const n=Ay(e),r=Ay(t);if(!n||!r)return lu(e,t);const i={...n};return o=>(i.red=Wc(n.red,r.red,o),i.green=Wc(n.green,r.green,o),i.blue=Wc(n.blue,r.blue,o),i.alpha=Ae(n.alpha,r.alpha,o),mi.transform(i))},Mf=new Set(["none","hidden"]);function CN(e,t){return Mf.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function EN(e,t){return n=>Ae(e,t,n)}function Vp(e){return typeof e=="number"?EN:typeof e=="string"?Fp(e)?lu:Fe.test(e)?Ry:RN:Array.isArray(e)?kk:typeof e=="object"?Fe.test(e)?Ry:PN:lu}function kk(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Vp(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function PN(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function AN(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const RN=(e,t)=>{const n=Yr.createTransformer(t),r=ra(e),i=ra(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Mf.has(e)&&!i.values.length||Mf.has(t)&&!r.values.length?CN(e,t):xa(kk(AN(r,i),i.values),n):(Ku(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),lu(e,t))};function Sk(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ae(e,t,n):Vp(e)(e,t)}const IN=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(t,n),stop:()=>Kr(t),now:()=>Ke.isProcessing?Ke.timestamp:ft.now()}},Tk=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},uu=2e4;function Up(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<uu;)t+=n,r=e.next(t);return t>=uu?1/0:t}function DN(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Up(r),uu);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Kt(i)}}const MN=5;function Ck(e,t,n){const r=Math.max(t-MN,0);return rk(n-e(r),t-r)}const Ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qc=.001;function NN({duration:e=Ee.duration,bounce:t=Ee.bounce,velocity:n=Ee.velocity,mass:r=Ee.mass}){let i,o;Ku(e<=jn(Ee.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-t;s=_n(Ee.minDamping,Ee.maxDamping,s),e=_n(Ee.minDuration,Ee.maxDuration,Kt(e)),s<1?(i=u=>{const d=u*s,c=d*e,h=d-n,f=Nf(u,s),m=Math.exp(-c);return qc-h/f*m},o=u=>{const c=u*s*e,h=c*n+n,f=Math.pow(s,2)*Math.pow(u,2)*e,m=Math.exp(-c),g=Nf(Math.pow(u,2),s);return(-i(u)+qc>0?-1:1)*((h-f)*m)/g}):(i=u=>{const d=Math.exp(-u*e),c=(u-n)*e+1;return-qc+d*c},o=u=>{const d=Math.exp(-u*e),c=(n-u)*(e*e);return d*c});const a=5/e,l=LN(i,o,a);if(e=jn(e),isNaN(l))return{stiffness:Ee.stiffness,damping:Ee.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const jN=12;function LN(e,t,n){let r=n;for(let i=1;i<jN;i++)r=r-e(r)/t(r);return r}function Nf(e,t){return e*Math.sqrt(1-t*t)}const ON=["duration","bounce"],_N=["stiffness","damping","mass"];function Iy(e,t){return t.some(n=>e[n]!==void 0)}function FN(e){let t={velocity:Ee.velocity,stiffness:Ee.stiffness,damping:Ee.damping,mass:Ee.mass,isResolvedFromDuration:!1,...e};if(!Iy(e,_N)&&Iy(e,ON))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*_n(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ee.mass,stiffness:i,damping:o}}else{const n=NN(e);t={...t,...n,mass:Ee.mass},t.isResolvedFromDuration=!0}return t}function cu(e=Ee.visualDuration,t=Ee.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:d,duration:c,velocity:h,isResolvedFromDuration:f}=FN({...n,velocity:-Kt(n.velocity||0)}),m=h||0,g=u/(2*Math.sqrt(l*d)),w=s-o,p=Kt(Math.sqrt(l/d)),y=Math.abs(w)<5;r||(r=y?Ee.restSpeed.granular:Ee.restSpeed.default),i||(i=y?Ee.restDelta.granular:Ee.restDelta.default);let v;if(g<1){const C=Nf(p,g);v=T=>{const A=Math.exp(-g*p*T);return s-A*((m+g*p*w)/C*Math.sin(C*T)+w*Math.cos(C*T))}}else if(g===1)v=C=>s-Math.exp(-p*C)*(w+(m+p*w)*C);else{const C=p*Math.sqrt(g*g-1);v=T=>{const A=Math.exp(-g*p*T),R=Math.min(C*T,300);return s-A*((m+g*p*w)*Math.sinh(R)+C*w*Math.cosh(R))/C}}const S={calculatedDuration:f&&c||null,next:C=>{const T=v(C);if(f)a.done=C>=c;else{let A=C===0?m:0;g<1&&(A=C===0?jn(m):Ck(v,C,T));const R=Math.abs(A)<=r,M=Math.abs(s-T)<=i;a.done=R&&M}return a.value=a.done?s:T,a},toString:()=>{const C=Math.min(Up(S),uu),T=Tk(A=>S.next(C*A).value,C,30);return C+"ms "+T},toTransition:()=>{}};return S}cu.applyToOptions=e=>{const t=DN(e,100,cu);return e.ease=t.ease,e.duration=jn(t.duration),e.type="keyframes",e};function jf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const c=e[0],h={done:!1,value:c},f=R=>a!==void 0&&R<a||l!==void 0&&R>l,m=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let g=n*t;const w=c+g,p=s===void 0?w:s(w);p!==w&&(g=p-c);const y=R=>-g*Math.exp(-R/r),v=R=>p+y(R),S=R=>{const M=y(R),P=v(R);h.done=Math.abs(M)<=u,h.value=h.done?p:P};let C,T;const A=R=>{f(h.value)&&(C=R,T=cu({keyframes:[h.value,m(h.value)],velocity:Ck(v,R,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return A(0),{calculatedDuration:null,next:R=>{let M=!1;return!T&&C===void 0&&(M=!0,S(R),A(R)),C!==void 0&&R>=C?T.next(R-C):(!M&&S(R),h)}}}function zN(e,t,n){const r=[],i=n||nr.mix||Sk,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Qt:t;a=xa(l,a)}r.push(a)}return r}function BN(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(No(o===t.length,"Both input and output ranges must be the same length","range-length"),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=zN(t,r,i),l=a.length,u=d=>{if(s&&d<e[0])return t[0];let c=0;if(l>1)for(;c<e.length-2&&!(d<e[c+1]);c++);const h=ta(e[c],e[c+1],d);return a[c](h)};return n?d=>u(_n(e[0],e[o-1],d)):u}function VN(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ta(0,t,r);e.push(Ae(n,1,i))}}function UN(e){const t=[0];return VN(t,e.length-1),t}function $N(e,t){return e.map(n=>n*t)}function HN(e,t){return e.map(()=>t||fk).splice(0,e.length-1)}function Es({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=nN(r)?r.map(Sy):Sy(r),o={done:!1,value:t[0]},s=$N(n&&n.length===t.length?n:UN(t),e),a=BN(s,t,{ease:Array.isArray(i)?i:HN(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const WN=e=>e!==null;function $p(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(WN),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const qN={decay:jf,inertia:jf,tween:Es,keyframes:Es,spring:cu};function Ek(e){typeof e.type=="string"&&(e.type=qN[e.type])}class Hp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const GN=e=>e/100;class Wp extends Hp{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Ek(t);const{type:n=Es,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||Es;l!==Es&&typeof a[0]!="number"&&(this.mixKeyframes=xa(GN,Sk(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Up(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:c,repeatType:h,repeatDelay:f,type:m,onUpdate:g,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const p=this.currentTime-u*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,S=r;if(c){const R=Math.min(this.currentTime,i)/a;let M=Math.floor(R),P=R%1;!P&&R>=1&&(P=1),P===1&&M--,M=Math.min(M,c+1),!!(M%2)&&(h==="reverse"?(P=1-P,f&&(P-=f/a)):h==="mirror"&&(S=s)),v=_n(0,1,P)*a}const C=y?{done:!1,value:d[0]}:S.next(v);o&&(C.value=o(C.value));let{done:T}=C;!y&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&m!==jf&&(C.value=$p(d,this.options,w,this.speed)),g&&g(C.value),A&&this.finish(),C}then(t,n){return this.finished.then(t,n)}get duration(){return Kt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Kt(t)}get time(){return Kt(this.currentTime)}set time(t){var n;t=jn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(ft.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Kt(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=IN,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function KN(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const gi=e=>e*180/Math.PI,Lf=e=>{const t=gi(Math.atan2(e[1],e[0]));return Of(t)},YN={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Lf,rotateZ:Lf,skewX:e=>gi(Math.atan(e[1])),skewY:e=>gi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Of=e=>(e=e%360,e<0&&(e+=360),e),Dy=Lf,My=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ny=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),QN={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:My,scaleY:Ny,scale:e=>(My(e)+Ny(e))/2,rotateX:e=>Of(gi(Math.atan2(e[6],e[5]))),rotateY:e=>Of(gi(Math.atan2(-e[2],e[0]))),rotateZ:Dy,rotate:Dy,skewX:e=>gi(Math.atan(e[4])),skewY:e=>gi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _f(e){return e.includes("scale")?1:0}function Ff(e,t){if(!e||e==="none")return _f(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=QN,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=YN,i=a}if(!i)return _f(t);const o=r[t],s=i[1].split(",").map(JN);return typeof o=="function"?o(s):s[o]}const XN=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ff(n,t)};function JN(e){return parseFloat(e.trim())}const Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set(Wo),jy=e=>e===Ho||e===W,ZN=new Set(["x","y","z"]),ej=Wo.filter(e=>!ZN.has(e));function tj(e){const t=[];return ej.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ff(t,"x"),y:(e,{transform:t})=>Ff(t,"y")};Mr.translateX=Mr.x;Mr.translateY=Mr.y;const Ci=new Set;let zf=!1,Bf=!1,Vf=!1;function Pk(){if(Bf){const e=Array.from(Ci).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=tj(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bf=!1,zf=!1,Ci.forEach(e=>e.complete(Vf)),Ci.clear()}function Ak(){Ci.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Bf=!0)})}function nj(){Vf=!0,Ak(),Pk(),Vf=!1}class qp{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(Ci.add(this),zf||(zf=!0,Se.read(Ak),Se.resolveKeyframes(Pk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}KN(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ci.delete(this)}cancel(){this.state==="scheduled"&&(Ci.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rj=e=>e.startsWith("--");function ij(e,t,n){rj(t)?e.style.setProperty(t,n):e.style[t]=n}const oj=jp(()=>window.ScrollTimeline!==void 0),sj={};function aj(e,t){const n=jp(e);return()=>sj[t]??n()}const Rk=aj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hs([0,.65,.55,1]),circOut:hs([.55,0,1,.45]),backIn:hs([.31,.01,.66,-.59]),backOut:hs([.33,1.53,.69,.99])};function Ik(e,t){if(e)return typeof e=="function"?Rk()?Tk(e,t):"ease-out":hk(e)?hs(e):Array.isArray(e)?e.map(n=>Ik(n,t)||Ly.easeOut):Ly[e]}function lj(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},u=void 0){const d={[t]:n};l&&(d.offset=l);const c=Ik(a,i);Array.isArray(c)&&(d.easing=c);const h={delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),e.animate(d,h)}function Dk(e){return typeof e=="function"&&"applyToOptions"in e}function uj({type:e,...t}){return Dk(e)&&Rk()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class cj extends Hp{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,No(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=uj(t);this.animation=lj(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=$p(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):ij(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Kt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Kt(t)}get time(){return Kt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&oj()?(this.animation.timeline=t,Qt):n(this)}}const Mk={anticipate:uk,backInOut:lk,circInOut:dk};function dj(e){return e in Mk}function fj(e){typeof e.ease=="string"&&dj(e.ease)&&(e.ease=Mk[e.ease])}const Gc=10;class hj extends cj{constructor(t){fj(t),Ek(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Wp({...s,autoplay:!1}),l=Math.max(Gc,ft.now()-this.startTime),u=_n(0,Gc,l-Gc);n.setWithVelocity(a.sample(Math.max(0,l-u)).value,a.sample(l).value,u),a.stop()}}const Oy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yr.test(e)||e==="0")&&!e.startsWith("url("));function pj(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mj(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Oy(i,t),a=Oy(o,t);return Ku(s===a,`You are trying to animate ${t} from "${i}" to "${o}". "${s?o:i}" is not an animatable value.`,"value-not-animatable"),!s||!a?!1:pj(e)||(n==="spring"||Dk(n))&&r}function Uf(e){e.duration=0,e.type="keyframes"}const gj=new Set(["opacity","clipPath","filter","transform"]),yj=jp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vj(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return yj()&&n&&gj.has(n)&&(n!=="transform"||!u)&&!l&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const xj=40;class wj extends Hp{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:u,element:d,...c}){var m;super(),this.stop=()=>{var g,w;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=ft.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:u,element:d,...c},f=(d==null?void 0:d.KeyframeResolver)||qp;this.keyframeResolver=new f(a,(g,w,p)=>this.onKeyframesResolved(g,w,h,!p),l,u,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:u,onUpdate:d}=r;this.resolvedAt=ft.now(),mj(t,o,s,a)||((nr.instantAnimations||!l)&&(d==null||d($p(t,r,n))),t[0]=t[t.length-1],Uf(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>xj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},f=!u&&vj(h)?new hj({...h,element:h.motionValue.owner.current}):new Wp(h);f.finished.then(()=>this.notifyFinished()).catch(Qt),this.pendingTimeline&&(this.stopTimeline=f.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=f}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),nj()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const bj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kj(e){const t=bj.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}const Sj=4;function Nk(e,t,n=1){No(n<=Sj,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=kj(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return ek(s)?parseFloat(s):s}return Fp(i)?Nk(i,t,n+1):i}function Gp(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const Tj={type:"spring",stiffness:500,damping:25,restSpeed:10},Cj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ej={type:"keyframes",duration:.8},Pj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Aj=(e,{keyframes:t})=>t.length>2?Ej:qo.has(e)?e.startsWith("scale")?Cj(t[1]):Tj:Pj;function Rj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Ij=e=>e!==null;function Dj(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Ij),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}function jk(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Kp=(e,t,n,r={},i,o)=>s=>{const a=Gp(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-jn(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};Rj(a)||Object.assign(d,Aj(e,d)),d.duration&&(d.duration=jn(d.duration)),d.repeatDelay&&(d.repeatDelay=jn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let c=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Uf(d),d.delay===0&&(c=!0)),(nr.instantAnimations||nr.skipAnimations)&&(c=!0,Uf(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,c&&!o&&t.get()!==void 0){const h=Dj(d.keyframes,a);if(h!==void 0){Se.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new Wp(d):new wj(d)},Lk=new Set(["width","height","top","left","right","bottom",...Wo]),_y=30,Mj=e=>!isNaN(parseFloat(e));class Nj{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=ft.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Mj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Lp);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_y)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_y);return rk(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jo(e,t){return new Nj(e,t)}function Fy(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Yp(e,t,n,r){if(typeof t=="function"){const[i,o]=Fy(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Fy(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function po(e,t,n){const r=e.getProps();return Yp(r,t,n!==void 0?n:r.custom,e)}const $f=e=>Array.isArray(e);function jj(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,jo(n))}function Lj(e){return $f(e)?e[e.length-1]||0:e}function Oj(e,t){const n=po(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Lj(o[s]);jj(e,s,a)}}const nt=e=>!!(e&&e.getVelocity);function _j(e){return!!(nt(e)&&e.add)}function Hf(e,t){const n=e.getValue("willChange");if(_j(n))return n.add(t);if(!n&&nr.WillChange){const r=new nr.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Qp(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Fj="framerAppearId",Ok="data-"+Qp(Fj);function _k(e){return e.props[Ok]}function zj({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Fk(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const c=e.getValue(d,e.latestValues[d]??null),h=a[d];if(h===void 0||u&&zj(u,d))continue;const f={delay:n,...Gp(o||{},d)},m=c.get();if(m!==void 0&&!c.isAnimating&&!Array.isArray(h)&&h===m&&!f.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const p=_k(e);if(p){const y=window.MotionHandoffAnimation(p,d,Se);y!==null&&(f.startTime=y,g=!0)}}Hf(e,d),c.start(Kp(d,c,h,e.shouldReduceMotion&&Lk.has(d)?{type:!1}:f,e,g));const w=c.animation;w&&l.push(w)}return s&&Promise.all(l).then(()=>{Se.update(()=>{s&&Oj(e,s)})}),l}function Wf(e,t,n={}){var l;const r=po(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Fk(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:c,staggerDirection:h}=i;return Bj(e,t,u,d,c,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Bj(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(Wf(l,t,{...s,delay:n+(typeof r=="function"?0:r)+jk(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function Vj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Wf(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Wf(e,t,n);else{const i=typeof t=="function"?po(e,t,n.custom):t;r=Promise.all(Fk(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Uj={test:e=>e==="auto",parse:e=>e},zk=e=>t=>t.test(e),Bk=[Ho,W,Ln,xr,pN,hN,Uj],zy=e=>Bk.find(zk(e));function $j(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||nk(e):!0}const Hj=new Set(["brightness","contrast","saturate","opacity"]);function Wj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zp)||[];if(!r)return e;const i=n.replace(r,"");let o=Hj.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const qj=/\b([a-z-]*)\(.*?\)/gu,qf={...Yr,getAnimatableNone:e=>{const t=e.match(qj);return t?t.map(Wj).join(" "):e}},By={...Ho,transform:Math.round},Gj={rotate:xr,rotateX:xr,rotateY:xr,rotateZ:xr,scale:Za,scaleX:Za,scaleY:Za,scaleZ:Za,skew:xr,skewX:xr,skewY:xr,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:na,originX:Ey,originY:Ey,originZ:W},Xp={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,...Gj,zIndex:By,fillOpacity:na,strokeOpacity:na,numOctaves:By},Kj={...Xp,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:qf,WebkitFilter:qf},Vk=e=>Kj[e];function Uk(e,t){let n=Vk(e);return n!==qf&&(n=Yr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Yj=new Set(["auto","none","0"]);function Qj(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Yj.has(o)&&ra(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Uk(n,i)}class Xj extends qp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let c=t[d];if(typeof c=="string"&&(c=c.trim(),Fp(c))){const h=Nk(c,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Lk.has(r)||t.length!==2)return;const[i,o]=t,s=zy(i),a=zy(o),l=Cy(i),u=Cy(o);if(l!==u&&Mr[r]){this.needsMeasurement=!0;return}if(s!==a)if(jy(s)&&jy(a))for(let d=0;d<t.length;d++){const c=t[d];typeof c=="string"&&(t[d]=parseFloat(c))}else Mr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||$j(t[i]))&&r.push(i);r.length&&Qj(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Mr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Jj(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const $k=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Hk(e){return tk(e)&&"offsetHeight"in e}const{schedule:Jp,cancel:aU}=pk(queueMicrotask,!1),an={x:!1,y:!1};function Wk(){return an.x||an.y}function Zj(e){return e==="x"||e==="y"?an[e]?null:(an[e]=!0,()=>{an[e]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}function qk(e,t){const n=Jj(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Vy(e){return!(e.pointerType==="touch"||Wk())}function eL(e,t,n={}){const[r,i,o]=qk(e,n),s=a=>{if(!Vy(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const d=c=>{Vy(c)&&(u(c),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const Gk=(e,t)=>t?e===t?!0:Gk(e,t.parentElement):!1,Zp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,tL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Kk(e){return tL.has(e.tagName)||e.isContentEditable===!0}const Sl=new WeakSet;function Uy(e){return t=>{t.key==="Enter"&&e(t)}}function Kc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const nL=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Uy(()=>{if(Sl.has(n))return;Kc(n,"down");const i=Uy(()=>{Kc(n,"up")}),o=()=>Kc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function $y(e){return Zp(e)&&!Wk()}function rL(e,t,n={}){const[r,i,o]=qk(e,n),s=a=>{const l=a.currentTarget;if(!$y(a))return;Sl.add(l);const u=t(l,a),d=(f,m)=>{window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",h),Sl.has(l)&&Sl.delete(l),$y(f)&&typeof u=="function"&&u(f,{success:m})},c=f=>{d(f,l===window||l===document||n.useGlobalTarget||Gk(l,f.target))},h=f=>{d(f,!1)};window.addEventListener("pointerup",c,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),Hk(a)&&(a.addEventListener("focus",u=>nL(u,i)),!Kk(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Yk(e){return tk(e)&&"ownerSVGElement"in e}function iL(e){return Yk(e)&&e.tagName==="svg"}const oL=[...Bk,Fe,Yr],sL=e=>oL.find(zk(e)),Hy=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:Hy(),y:Hy()}),Wy=()=>({min:0,max:0}),Be=()=>({x:Wy(),y:Wy()}),Gf={current:null},Qk={current:!1},aL=typeof window<"u";function lL(){if(Qk.current=!0,!!aL)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gf.current=e.matches;e.addEventListener("change",t),t()}else Gf.current=!1}const uL=new WeakMap;function Yu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ia(e){return typeof e=="string"||Array.isArray(e)}const em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tm=["initial",...em];function Qu(e){return Yu(e.animate)||tm.some(t=>ia(e[t]))}function Xk(e){return!!(Qu(e)||e.variants)}function cL(e,t,n){for(const r in t){const i=t[r],o=n[r];if(nt(i))e.addValue(r,i);else if(nt(o))e.addValue(r,jo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,jo(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const qy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let du={};function Jk(e){du=e}function dL(){return du}class fL{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=ft.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Se.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Qu(n),this.isVariantNode=Xk(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...c}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in c){const f=c[h];l[h]!==void 0&&nt(f)&&f.set(l[h])}}mount(t){var n;this.current=t,uL.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Qk.current||lL(),this.shouldReduceMotion=Gf.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Kr(this.notifyUpdate),Kr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=qo.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in du){const n=du[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<qy.length;r++){const i=qy[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=cL(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=jo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(ek(r)||nk(r))?r=parseFloat(r):!sL(r)&&Yr.test(n)&&(r=Uk(t,n)),this.setBaseTarget(t,nt(r)?r.get():r)),nt(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Yp(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!nt(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Lp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Jp.render(this.render)}}class ei{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Zk extends fL{constructor(){super(...arguments),this.KeyframeResolver=Xj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;nt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function eS({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hL({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pL(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Yc(e){return e===void 0||e===1}function Kf({scale:e,scaleX:t,scaleY:n}){return!Yc(e)||!Yc(t)||!Yc(n)}function ci(e){return Kf(e)||tS(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function tS(e){return Gy(e.x)||Gy(e.y)}function Gy(e){return e&&e!=="0%"}function fu(e,t,n){const r=e-n,i=t*r;return n+i}function Ky(e,t,n,r,i){return i!==void 0&&(e=fu(e,i,r)),fu(e,n,r)+t}function Yf(e,t=0,n=1,r,i){e.min=Ky(e.min,t,n,r,i),e.max=Ky(e.max,t,n,r,i)}function nS(e,{x:t,y:n}){Yf(e.x,t.translate,t.scale,t.originPoint),Yf(e.y,n.translate,n.scale,n.originPoint)}const Yy=.999999999999,Qy=1.0000000000001;function mL(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&io(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,nS(e,s)),r&&ci(o.latestValues)&&io(e,o.latestValues))}t.x<Qy&&t.x>Yy&&(t.x=1),t.y<Qy&&t.y>Yy&&(t.y=1)}function ro(e,t){e.min=e.min+t,e.max=e.max+t}function Xy(e,t,n,r,i=.5){const o=Ae(e.min,e.max,i);Yf(e,t,n,o,r)}function io(e,t){Xy(e.x,t.x,t.scaleX,t.scale,t.originX),Xy(e.y,t.y,t.scaleY,t.scale,t.originY)}function rS(e,t){return eS(pL(e.getBoundingClientRect(),t))}function gL(e,t,n){const r=rS(e,n),{scroll:i}=t;return i&&(ro(r.x,i.offset.x),ro(r.y,i.offset.y)),r}const yL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vL=Wo.length;function xL(e,t,n){let r="",i=!0;for(let o=0;o<vL;o++){const s=Wo[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=$k(a,Xp[s]);if(!l){i=!1;const d=yL[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function nm(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(qo.has(l)){s=!0;continue}else if(gk(l)){i[l]=u;continue}else{const d=$k(u,Xp[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=xL(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function iS(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Jy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ss={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=Jy(e,t.target.x),r=Jy(e,t.target.y);return`${n}% ${r}%`}},wL={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yr.parse(e);if(i.length>5)return r;const o=Yr.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=Ae(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Qf={borderRadius:{...ss,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ss,borderTopRightRadius:ss,borderBottomLeftRadius:ss,borderBottomRightRadius:ss,boxShadow:wL};function oS(e,{layout:t,layoutId:n}){return qo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Qf[e]||e==="opacity")}function rm(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(nt(r[a])||i&&nt(i[a])||oS(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function bL(e){return window.getComputedStyle(e)}class kL extends Zk{constructor(){super(...arguments),this.type="html",this.renderInstance=iS}readValueFromInstance(t,n){var r;if(qo.has(n))return(r=this.projection)!=null&&r.isProjecting?_f(n):XN(t,n);{const i=bL(t),o=(gk(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return rS(t,n)}build(t,n,r){nm(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return rm(t,n,r)}}const SL={offset:"stroke-dashoffset",array:"stroke-dasharray"},TL={offset:"strokeDashoffset",array:"strokeDasharray"};function CL(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?SL:TL;e[o.offset]=W.transform(-r);const s=W.transform(t),a=W.transform(n);e[o.array]=`${s} ${a}`}const EL=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function sS(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,u,d){if(nm(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:c,style:h}=e;c.transform&&(h.transform=c.transform,delete c.transform),(h.transform||c.transformOrigin)&&(h.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete c.transformBox);for(const f of EL)c[f]!==void 0&&(h[f]=c[f],delete c[f]);t!==void 0&&(c.x=t),n!==void 0&&(c.y=n),r!==void 0&&(c.scale=r),i!==void 0&&CL(c,i,o,s,!1)}const aS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),lS=e=>typeof e=="string"&&e.toLowerCase()==="svg";function PL(e,t,n,r){iS(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(aS.has(i)?i:Qp(i),t.attrs[i])}function uS(e,t,n){const r=rm(e,t,n);for(const i in e)if(nt(e[i])||nt(t[i])){const o=Wo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class AL extends Zk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(qo.has(n)){const r=Vk(n);return r&&r.default||0}return n=aS.has(n)?n:Qp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return uS(t,n,r)}build(t,n,r){sS(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){PL(t,n,r,i)}mount(t){this.isSVGTag=lS(t.tagName),super.mount(t)}}const RL=tm.length;function cS(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?cS(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<RL;n++){const r=tm[n],i=e.props[r];(ia(i)||i===!1)&&(t[r]=i)}return t}function dS(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const IL=[...em].reverse(),DL=em.length;function ML(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Vj(e,n,r)))}function NL(e){let t=ML(e),n=Zy(),r=!0;const i=l=>(u,d)=>{var h;const c=po(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(c){const{transition:f,transitionEnd:m,...g}=c;u={...u,...g,...m}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,d=cS(e.parent)||{},c=[],h=new Set;let f={},m=1/0;for(let w=0;w<DL;w++){const p=IL[w],y=n[p],v=u[p]!==void 0?u[p]:d[p],S=ia(v),C=p===l?y.isActive:null;C===!1&&(m=w);let T=v===d[p]&&v!==u[p]&&S;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),y.protectedKeys={...f},!y.isActive&&C===null||!v&&!y.prevProp||Yu(v)||typeof v=="boolean")continue;const A=jL(y.prevProp,v);let R=A||p===l&&y.isActive&&!T&&S||w>m&&S,M=!1;const P=Array.isArray(v)?v:[v];let O=P.reduce(i(p),{});C===!1&&(O={});const{prevResolvedValues:N={}}=y,H={...N,...O},_=U=>{R=!0,h.has(U)&&(M=!0,h.delete(U)),y.needsAnimating[U]=!0;const I=e.getValue(U);I&&(I.liveStyle=!1)};for(const U in H){const I=O[U],j=N[U];if(f.hasOwnProperty(U))continue;let k=!1;$f(I)&&$f(j)?k=!dS(I,j):k=I!==j,k?I!=null?_(U):h.add(U):I!==void 0&&h.has(U)?_(U):y.protectedKeys[U]=!0}y.prevProp=v,y.prevResolvedValues=O,y.isActive&&(f={...f,...O}),r&&e.blockInitialAnimation&&(R=!1);const $=T&&A;R&&(!$||M)&&c.push(...P.map(U=>{const I={type:p};if(typeof U=="string"&&r&&!$&&e.manuallyAnimateOnMount&&e.parent){const{parent:j}=e,k=po(j,U);if(j.enteringChildren&&k){const{delayChildren:Y}=k.transition||{};I.delay=jk(j.enteringChildren,e,Y)}}return{animation:U,options:I}}))}if(h.size){const w={};if(typeof u.initial!="boolean"){const p=po(e,Array.isArray(u.initial)?u.initial[0]:u.initial);p&&p.transition&&(w.transition=p.transition)}h.forEach(p=>{const y=e.getBaseTarget(p),v=e.getValue(p);v&&(v.liveStyle=!0),w[p]=y??null}),c.push({animation:w})}let g=!!c.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(c):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)==null||c.forEach(h=>{var f;return(f=h.animationState)==null?void 0:f.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Zy()}}}function jL(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!dS(t,e):!1}function si(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zy(){return{animate:si(!0),whileInView:si(),whileHover:si(),whileTap:si(),whileDrag:si(),whileFocus:si(),exit:si()}}const fS=1e-4,LL=1-fS,OL=1+fS,hS=.01,_L=0-hS,FL=0+hS;function ht(e){return e.max-e.min}function zL(e,t,n){return Math.abs(e-t)<=n}function ev(e,t,n,r=.5){e.origin=r,e.originPoint=Ae(t.min,t.max,e.origin),e.scale=ht(n)/ht(t),e.translate=Ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=LL&&e.scale<=OL||isNaN(e.scale))&&(e.scale=1),(e.translate>=_L&&e.translate<=FL||isNaN(e.translate))&&(e.translate=0)}function Ps(e,t,n,r){ev(e.x,t.x,n.x,r?r.originX:void 0),ev(e.y,t.y,n.y,r?r.originY:void 0)}function tv(e,t,n){e.min=n.min+t.min,e.max=e.min+ht(t)}function BL(e,t,n){tv(e.x,t.x,n.x),tv(e.y,t.y,n.y)}function nv(e,t,n){e.min=t.min-n.min,e.max=e.min+ht(t)}function hu(e,t,n){nv(e.x,t.x,n.x),nv(e.y,t.y,n.y)}function rv(e,t,n,r,i){return e-=t,e=fu(e,1/n,r),i!==void 0&&(e=fu(e,1/i,r)),e}function VL(e,t=0,n=1,r=.5,i,o=e,s=e){if(Ln.test(t)&&(t=parseFloat(t),t=Ae(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=Ae(o.min,o.max,r);e===o&&(a-=t),e.min=rv(e.min,t,n,a,i),e.max=rv(e.max,t,n,a,i)}function iv(e,t,[n,r,i],o,s){VL(e,t[n],t[r],t[i],t.scale,o,s)}const UL=["x","scaleX","originX"],$L=["y","scaleY","originY"];function ov(e,t,n,r){iv(e.x,t,UL,n?n.x:void 0,r?r.x:void 0),iv(e.y,t,$L,n?n.y:void 0,r?r.y:void 0)}function sv(e,t){e.min=t.min,e.max=t.max}function sn(e,t){sv(e.x,t.x),sv(e.y,t.y)}function av(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function lv(e){return e.translate===0&&e.scale===1}function pS(e){return lv(e.x)&&lv(e.y)}function uv(e,t){return e.min===t.min&&e.max===t.max}function HL(e,t){return uv(e.x,t.x)&&uv(e.y,t.y)}function cv(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function mS(e,t){return cv(e.x,t.x)&&cv(e.y,t.y)}function dv(e){return ht(e.x)/ht(e.y)}function fv(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ut(e){return[e("x"),e("y")]}function WL(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:c,rotateY:h,skewX:f,skewY:m}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),c&&(r+=`rotateX(${c}deg) `),h&&(r+=`rotateY(${h}deg) `),f&&(r+=`skewX(${f}deg) `),m&&(r+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const gS=["TopLeft","TopRight","BottomLeft","BottomRight"],qL=gS.length,hv=e=>typeof e=="string"?parseFloat(e):e,pv=e=>typeof e=="number"||W.test(e);function GL(e,t,n,r,i,o){i?(e.opacity=Ae(0,n.opacity??1,KL(r)),e.opacityExit=Ae(t.opacity??1,0,YL(r))):o&&(e.opacity=Ae(t.opacity??1,n.opacity??1,r));for(let s=0;s<qL;s++){const a=`border${gS[s]}Radius`;let l=mv(t,a),u=mv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||pv(l)===pv(u)?(e[a]=Math.max(Ae(hv(l),hv(u),r),0),(Ln.test(u)||Ln.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Ae(t.rotate||0,n.rotate||0,r))}function mv(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const KL=yS(0,.5,ck),YL=yS(.5,.95,Qt);function yS(e,t,n){return r=>r<e?0:r>t?1:n(ta(e,t,r))}function QL(e,t){const n=ft.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Kr(r),e(o-t))};return Se.setup(r,!0),()=>Kr(r)}function oa(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Tl(e){return nt(e)?e.get():e}function XL(e,t,n){const r=nt(e)?e:jo(e);return r.start(Kp("",r,t,n)),r.animation}const JL=(e,t)=>e.depth-t.depth;class ZL{constructor(){this.children=[],this.isDirty=!1}add(t){Mp(this.children,t),this.isDirty=!0}remove(t){Np(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(JL),this.isDirty=!1,this.children.forEach(t)}}class eO{constructor(){this.members=[]}add(t){Mp(this.members,t),t.scheduleRender()}remove(t){if(Np(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Cl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Qc=["","X","Y","Z"],tO=1e3;let nO=0;function Xc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vS(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=_k(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&vS(r)}function xS({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=nO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(oO),this.nodes.forEach(uO),this.nodes.forEach(cO),this.nodes.forEach(sO)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZL)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Lp),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Yk(s)&&!iL(s),this.instance=s;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,c=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{c=window.innerWidth}),e(s,()=>{const f=window.innerWidth;f!==c&&(c=f,this.root.updateBlockedByResize=!0,d&&d(),d=QL(h,250),Cl.hasAnimatedSinceResize&&(Cl.hasAnimatedSinceResize=!1,this.nodes.forEach(vv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:c,hasRelativeLayoutChanged:h,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||mO,{onLayoutAnimationStart:g,onLayoutAnimationComplete:w}=u.getProps(),p=!this.targetLayout||!mS(this.targetLayout,f),y=!c&&h;if(this.options.layoutRoot||this.resumeFrom||y||c&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Gp(m,"layout"),onPlay:g,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,y)}else c||vv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dO),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const c=this.path[d];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lO),this.nodes.forEach(rO),this.nodes.forEach(iO)):this.nodes.forEach(yv),this.clearAllSnapshots();const a=ft.now();Ke.delta=_n(0,1e3/60,a-Ke.timestamp),Ke.timestamp=a,Ke.isProcessing=!0,Uc.update.process(Ke),Uc.preRender.process(Ke),Uc.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aO),this.sharedNodes.forEach(fO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!pS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||ci(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),gO(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return Be();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(yO))){const{scroll:d}=this.root;d&&(ro(a.x,d.offset.x),ro(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=Be();if(sn(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:c,options:h}=d;d!==this.root&&c&&h.layoutScroll&&(c.wasRoot&&sn(a,s),ro(a.x,c.offset.x),ro(a.y,c.offset.y))}return a}applyTransform(s,a=!1){const l=Be();sn(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&io(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ci(d.latestValues)&&io(l,d.latestValues)}return ci(this.latestValues)&&io(l,this.latestValues),l}removeTransform(s){const a=Be();sn(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ci(u.latestValues))continue;Kf(u.latestValues)&&u.updateSnapshot();const d=Be(),c=u.measurePageBox();sn(d,c),ov(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return ci(this.latestValues)&&ov(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:c}=this.options;if(!this.layout||!(d||c))return;this.resolvedRelativeTargetAt=Ke.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sn(this.target,this.layout.layoutBox),nS(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Kf(this.parent.latestValues)||tS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),hu(this.relativeTargetOrigin,a,l),sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;sn(this.layoutCorrected,this.layout.layoutBox);const c=this.treeScale.x,h=this.treeScale.y;mL(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Be());const{target:f}=s;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(av(this.prevProjectionDelta.x,this.projectionDelta.x),av(this.prevProjectionDelta.y,this.projectionDelta.y)),Ps(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==c||this.treeScale.y!==h||!fv(this.projectionDelta.x,this.prevProjectionDelta.x)||!fv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},c=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Be(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=f!==m,w=this.getStack(),p=!w||w.members.length<=1,y=!!(g&&!p&&this.options.crossfade===!0&&!this.path.some(pO));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const C=S/1e3;xv(c.x,s.x,C),xv(c.y,s.y,C),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hu(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),hO(this.relativeTarget,this.relativeTargetOrigin,h,C),v&&HL(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Be()),sn(v,this.relativeTarget)),g&&(this.animationValues=d,GL(d,u,this.latestValues,C,y,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Cl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jo(0)),this.currentAnimation=XL(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&wS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Be();const c=ht(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+c;const h=ht(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}sn(a,l),io(a,d),Ps(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new eO),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Xc("z",s,u,this.animationValues);for(let d=0;d<Qc.length;d++)Xc(`rotate${Qc[d]}`,s,u,this.animationValues),Xc(`skew${Qc[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=Tl(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=Tl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ci(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let c=WL(this.projectionDeltaWithTransform,this.treeScale,d);l&&(c=l(d,c)),s.transform=c;const{x:h,y:f}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${f.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Qf){if(d[m]===void 0)continue;const{correct:g,applyTo:w,isCSSVariable:p}=Qf[m],y=c==="none"?d[m]:g(d[m],u);if(w){const v=w.length;for(let S=0;S<v;S++)s[w[S]]=y}else p?this.options.visualElement.renderState.vars[m]=y:s[m]=y}this.options.layoutId&&(s.pointerEvents=u===this?Tl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(gv),this.root.sharedNodes.clear()}}}function rO(e){e.updateLayout()}function iO(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Ut(c=>{const h=s?t.measuredBox[c]:t.layoutBox[c],f=ht(h);h.min=r[c].min,h.max=h.min+f}):wS(o,t.layoutBox,r)&&Ut(c=>{const h=s?t.measuredBox[c]:t.layoutBox[c],f=ht(r[c]);h.max=h.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+f)});const a=no();Ps(a,r,t.layoutBox);const l=no();s?Ps(l,e.applyTransform(i,!0),t.measuredBox):Ps(l,r,t.layoutBox);const u=!pS(a);let d=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:h,layout:f}=c;if(h&&f){const m=Be();hu(m,t.layoutBox,h.layoutBox);const g=Be();hu(g,r,f.layoutBox),mS(m,g)||(d=!0),c.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=m,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function oO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function sO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function aO(e){e.clearSnapshot()}function gv(e){e.clearMeasurements()}function yv(e){e.isLayoutDirty=!1}function lO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uO(e){e.resolveTargetDelta()}function cO(e){e.calcProjection()}function dO(e){e.resetSkewAndRotation()}function fO(e){e.removeLeadSnapshot()}function xv(e,t,n){e.translate=Ae(t.translate,0,n),e.scale=Ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function wv(e,t,n,r){e.min=Ae(t.min,n.min,r),e.max=Ae(t.max,n.max,r)}function hO(e,t,n,r){wv(e.x,t.x,n.x,r),wv(e.y,t.y,n.y,r)}function pO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const mO={duration:.45,ease:[.4,0,.1,1]},bv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),kv=bv("applewebkit/")&&!bv("chrome/")?Math.round:Qt;function Sv(e){e.min=kv(e.min),e.max=kv(e.max)}function gO(e){Sv(e.x),Sv(e.y)}function wS(e,t,n){return e==="position"||e==="preserve-aspect"&&!zL(dv(t),dv(n),.2)}function yO(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const vO=xS({attachResizeListener:(e,t)=>oa(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jc={current:void 0},bS=xS({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jc.current){const e=new vO({});e.mount(window),e.setOptions({layoutScroll:!0}),Jc.current=e}return Jc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),im=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Tv(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function xO(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Tv(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Tv(e[i],null)}}}}function wO(...e){return b.useCallback(xO(...e),e)}class bO extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Hk(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function kO({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=b.useId(),o=b.useRef(null),s=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=b.useContext(im),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=wO(o,l);return b.useInsertionEffect(()=>{const{width:c,height:h,top:f,left:m,right:g}=s.current;if(t||!o.current||!c||!h)return;const w=n==="left"?`left: ${m}`:`right: ${g}`;o.current.dataset.motionPopId=i;const p=document.createElement("style");a&&(p.nonce=a);const y=r??document.head;return y.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${h}px !important;
            ${w}px !important;
            top: ${f}px !important;
          }
        `),()=>{y.contains(p)&&y.removeChild(p)}},[t]),x.jsx(bO,{isPresent:t,childRef:o,sizeRef:s,children:b.cloneElement(e,{ref:u})})}const SO=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:l})=>{const u=Dp(TO),d=b.useId();let c=!0,h=b.useMemo(()=>(c=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:f=>{u.set(f,!0);for(const m of u.values())if(!m)return;r&&r()},register:f=>(u.set(f,!1),()=>u.delete(f))}),[n,u,r]);return o&&c&&(h={...h}),b.useMemo(()=>{u.forEach((f,m)=>u.set(m,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=x.jsx(kO,{isPresent:n,anchorX:a,root:l,children:e})),x.jsx(Gu.Provider,{value:h,children:e})};function TO(){return new Map}function kS(e=!0){const t=b.useContext(Gu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=b.useId();b.useEffect(()=>{if(e)return i(o)},[e]);const s=b.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const el=e=>e.key||"";function Cv(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Ev=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:l})=>{const[u,d]=kS(s),c=b.useMemo(()=>Cv(e),[e]),h=s&&!u?[]:c.map(el),f=b.useRef(!0),m=b.useRef(c),g=Dp(()=>new Map),w=b.useRef(new Set),[p,y]=b.useState(c),[v,S]=b.useState(c);Zb(()=>{f.current=!1,m.current=c;for(let A=0;A<v.length;A++){const R=el(v[A]);h.includes(R)?(g.delete(R),w.current.delete(R)):g.get(R)!==!0&&g.set(R,!1)}},[v,h.length,h.join("-")]);const C=[];if(c!==p){let A=[...c];for(let R=0;R<v.length;R++){const M=v[R],P=el(M);h.includes(P)||(A.splice(R,0,M),C.push(M))}return o==="wait"&&C.length&&(A=C),S(Cv(A)),y(c),null}const{forceRender:T}=b.useContext(Ip);return x.jsx(x.Fragment,{children:v.map(A=>{const R=el(A),M=s&&!u?!1:c===v||h.includes(R),P=()=>{if(w.current.has(R))return;if(w.current.add(R),g.has(R))g.set(R,!0);else return;let O=!0;g.forEach(N=>{N||(O=!1)}),O&&(T==null||T(),S(m.current),s&&(d==null||d()),r&&r())};return x.jsx(SO,{isPresent:M,initial:!f.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:l,onExitComplete:M?void 0:P,anchorX:a,children:A},R)})})},SS=b.createContext({strict:!1}),Pv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Av=!1;function CO(){if(Av)return;const e={};for(const t in Pv)e[t]={isEnabled:n=>Pv[t].some(r=>!!n[r])};Jk(e),Av=!0}function TS(){return CO(),dL()}function EO(e){const t=TS();for(const n in e)t[n]={...t[n],...e[n]};Jk(t)}const PO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||PO.has(e)}let CS=e=>!pu(e);function AO(e){typeof e=="function"&&(CS=t=>t.startsWith("on")?!pu(t):e(t))}try{AO(require("@emotion/is-prop-valid").default)}catch{}function RO(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(CS(i)||n===!0&&pu(i)||!t&&!pu(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Xu=b.createContext({});function IO(e,t){if(Qu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ia(n)?n:void 0,animate:ia(r)?r:void 0}}return e.inherit!==!1?t:{}}function DO(e){const{initial:t,animate:n}=IO(e,b.useContext(Xu));return b.useMemo(()=>({initial:t,animate:n}),[Rv(t),Rv(n)])}function Rv(e){return Array.isArray(e)?e.join(" "):e}const om=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ES(e,t,n){for(const r in t)!nt(t[r])&&!oS(r,n)&&(e[r]=t[r])}function MO({transformTemplate:e},t){return b.useMemo(()=>{const n=om();return nm(n,t,e),Object.assign({},n.vars,n.style)},[t])}function NO(e,t){const n=e.style||{},r={};return ES(r,n,e),Object.assign(r,MO(e,t)),r}function jO(e,t){const n={},r=NO(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const PS=()=>({...om(),attrs:{}});function LO(e,t,n,r){const i=b.useMemo(()=>{const o=PS();return sS(o,t,lS(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};ES(o,e.style,e),i.style={...o,...i.style}}return i}const OO=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sm(e){return typeof e!="string"||e.includes("-")?!1:!!(OO.indexOf(e)>-1||/[A-Z]/u.test(e))}function _O(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??sm(e)?LO:jO)(t,r,i,e),u=RO(t,typeof e=="string",o),d=e!==b.Fragment?{...u,...l,ref:n}:{},{children:c}=t,h=b.useMemo(()=>nt(c)?c.get():c,[c]);return b.createElement(e,{...d,children:h})}function FO({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:zO(n,r,i,e),renderState:t()}}function zO(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=Tl(o[h]);let{initial:s,animate:a}=e;const l=Qu(e),u=Xk(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const c=d?a:s;if(c&&typeof c!="boolean"&&!Yu(c)){const h=Array.isArray(c)?c:[c];for(let f=0;f<h.length;f++){const m=Yp(e,h[f]);if(m){const{transitionEnd:g,transition:w,...p}=m;for(const y in p){let v=p[y];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[y]=v)}for(const y in g)i[y]=g[y]}}}return i}const AS=e=>(t,n)=>{const r=b.useContext(Xu),i=b.useContext(Gu),o=()=>FO(e,t,r,i);return n?o():Dp(o)},BO=AS({scrapeMotionValuesFromProps:rm,createRenderState:om}),VO=AS({scrapeMotionValuesFromProps:uS,createRenderState:PS}),UO=Symbol.for("motionComponentSymbol");function $O(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const RS=b.createContext({});function ps(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function HO(e,t,n,r,i,o){var w,p;const{visualElement:s}=b.useContext(Xu),a=b.useContext(SS),l=b.useContext(Gu),u=b.useContext(im).reducedMotion,d=b.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const c=d.current,h=b.useContext(RS);c&&!c.projection&&i&&(c.type==="html"||c.type==="svg")&&WO(d.current,n,i,h);const f=b.useRef(!1);b.useInsertionEffect(()=>{c&&f.current&&c.update(n,l)});const m=n[Ok],g=b.useRef(!!m&&!((w=window.MotionHandoffIsComplete)!=null&&w.call(window,m))&&((p=window.MotionHasOptimisedAnimation)==null?void 0:p.call(window,m)));return Zb(()=>{c&&(f.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),c.scheduleRenderMicrotask(),g.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(!g.current&&c.animationState&&c.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,m)}),g.current=!1),c.enteringChildren=void 0)}),c}function WO(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:IS(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&ps(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u})}function IS(e){if(e)return e.options.allowProjection!==!1?e.projection:IS(e.parent)}function Zc(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&EO(r);const o=n?n==="svg":sm(e),s=o?VO:BO;function a(u,d){let c;const h={...b.useContext(im),...u,layoutId:qO(u)},{isStatic:f}=h,m=DO(u),g=s(u,f);if(!f&&Jb){GO();const w=KO(h);c=w.MeasureLayout,m.visualElement=HO(e,g,h,i,w.ProjectionNode,o)}return x.jsxs(Xu.Provider,{value:m,children:[c&&m.visualElement?x.jsx(c,{visualElement:m.visualElement,...h}):null,_O(e,u,$O(g,m.visualElement,d),g,f,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=b.forwardRef(a);return l[UO]=e,l}function qO({layoutId:e}){const t=b.useContext(Ip).id;return t&&e!==void 0?t+"-"+e:e}function GO(e,t){b.useContext(SS).strict}function KO(e){const t=TS(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function YO(e,t){if(typeof Proxy>"u")return Zc;const n=new Map,r=(o,s)=>Zc(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Zc(s,void 0,e,t)),n.get(s))})}const QO=(e,t)=>t.isSVG??sm(e)?new AL(t):new kL(t,{allowProjection:e!==b.Fragment});class XO extends ei{constructor(t){super(t),t.animationState||(t.animationState=NL(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let JO=0;class ZO extends ei{constructor(){super(...arguments),this.id=JO++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const e_={animation:{Feature:XO},exit:{Feature:ZO}};function ka(e){return{point:{x:e.pageX,y:e.pageY}}}const t_=e=>t=>Zp(t)&&e(t,ka(t));function As(e,t,n,r){return oa(e,t,t_(n),r)}const DS=({current:e})=>e?e.ownerDocument.defaultView:null,Iv=(e,t)=>Math.abs(e-t);function n_(e,t){const n=Iv(e.x,t.x),r=Iv(e.y,t.y);return Math.sqrt(n**2+r**2)}const Dv=new Set(["auto","scroll"]);class MS{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=td(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=n_(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!g)return;const{point:w}=f,{timestamp:p}=Ke;this.history.push({...w,timestamp:p});const{onStart:y,onMove:v}=this.handlers;m||(y&&y(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ed(m,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:g,onSessionEnd:w,resumeAnimation:p}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=td(f.type==="pointercancel"?this.lastMoveEventInfo:ed(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,y),w&&w(f,y)},!Zp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=ka(t),u=ed(l,this.transformPagePoint),{point:d}=u,{timestamp:c}=Ke;this.history=[{...d,timestamp:c}];const{onSessionStart:h}=n;h&&h(t,td(u,this.history)),this.removeListeners=xa(As(this.contextWindow,"pointermove",this.handlePointerMove),As(this.contextWindow,"pointerup",this.handlePointerUp),As(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Dv.has(r.overflowX)||Dv.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Kr(this.updatePoint)}}function ed(e,t){return t?{point:t(e.point)}:e}function Mv(e,t){return{x:e.x-t.x,y:e.y-t.y}}function td({point:e},t){return{point:e,delta:Mv(e,NS(t)),offset:Mv(e,r_(t)),velocity:i_(t,.1)}}function r_(e){return e[0]}function NS(e){return e[e.length-1]}function i_(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=NS(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>jn(t)));)n--;if(!r)return{x:0,y:0};const o=Kt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function o_(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ae(n,e,r.max):Math.min(e,n)),e}function Nv(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function s_(e,{top:t,left:n,bottom:r,right:i}){return{x:Nv(e.x,n,i),y:Nv(e.y,t,r)}}function jv(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function a_(e,t){return{x:jv(e.x,t.x),y:jv(e.y,t.y)}}function l_(e,t){let n=.5;const r=ht(e),i=ht(t);return i>r?n=ta(t.min,t.max-r,e.min):r>i&&(n=ta(e.min,e.max-i,t.min)),_n(0,1,n)}function u_(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xf=.35;function c_(e=Xf){return e===!1?e=0:e===!0&&(e=Xf),{x:Lv(e,"left","right"),y:Lv(e,"top","bottom")}}function Lv(e,t,n){return{min:Ov(e,t),max:Ov(e,n)}}function Ov(e,t){return typeof e=="number"?e:e[t]||0}const d_=new WeakMap;class f_{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=c=>{n?(this.stopAnimation(),this.snapToCursor(ka(c).point)):this.pauseAnimation()},s=(c,h)=>{this.stopAnimation();const{drag:f,dragPropagation:m,onDragStart:g}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Zj(f),!this.openDragLock))return;this.latestPointerEvent=c,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ut(p=>{let y=this.getAxisMotionValue(p).get()||0;if(Ln.test(y)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[p];S&&(y=ht(S)*(parseFloat(y)/100))}}this.originPoint[p]=y}),g&&Se.postRender(()=>g(c,h)),Hf(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(c,h)=>{this.latestPointerEvent=c,this.latestPanInfo=h;const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:g,onDrag:w}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:p}=h;if(m&&this.currentDirection===null){this.currentDirection=h_(p),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),w&&w(c,h)},l=(c,h)=>{this.latestPointerEvent=c,this.latestPanInfo=h,this.stop(c,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Ut(c=>{var h;return this.getAnimationState(c)==="paused"&&((h=this.getAxisMotionValue(c).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new MS(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:DS(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&Se.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!tl(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=o_(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&ps(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=s_(r.layoutBox,t):this.constraints=!1,this.elastic=c_(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ut(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=u_(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ps(t))return!1;const r=t.current;No(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=gL(r,i.root,this.visualElement.getTransformPagePoint());let s=a_(i.layout.layoutBox,o);if(n){const a=n(hL(s));this.hasMutatedConstraints=!!a,a&&(s=eS(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ut(d=>{if(!tl(d,n,this.currentDirection))return;let c=l&&l[d]||{};s&&(c={min:0,max:0});const h=i?200:1e6,f=i?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...o,...c};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Hf(this.visualElement,t),r.start(Kp(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ut(n=>{const{drag:r}=this.getProps();if(!tl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-Ae(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ps(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ut(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=l_({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ut(s=>{if(!tl(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(Ae(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;d_.set(this.visualElement,this);const t=this.visualElement.current,n=As(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!Kk(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ps(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(r);const s=oa(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ut(d=>{const c=this.getAxisMotionValue(d);c&&(this.originPoint[d]+=l[d].translate,c.set(c.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Xf,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function tl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function h_(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class p_ extends ei{constructor(t){super(t),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new f_(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const _v=e=>(t,n)=>{e&&Se.postRender(()=>e(t,n))};class m_ extends ei{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(t){this.session=new MS(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:DS(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_v(t),onStart:_v(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&Se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=As(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nd=!1;class g_ extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),nd&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Cl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,nd=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||Se.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Jp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;nd=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function jS(e){const[t,n]=kS(),r=b.useContext(Ip);return x.jsx(g_,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(RS),isPresent:t,safeToRemove:n})}const y_={pan:{Feature:m_},drag:{Feature:p_,ProjectionNode:bS,MeasureLayout:jS}};function Fv(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&Se.postRender(()=>o(t,ka(t)))}class v_ extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=eL(t,(n,r)=>(Fv(this.node,r,"Start"),i=>Fv(this.node,i,"End"))))}unmount(){}}class x_ extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xa(oa(this.node.current,"focus",()=>this.onFocus()),oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zv(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&Se.postRender(()=>o(t,ka(t)))}class w_ extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=rL(t,(n,r)=>(zv(this.node,r,"Start"),(i,{success:o})=>zv(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jf=new WeakMap,rd=new WeakMap,b_=e=>{const t=Jf.get(e.target);t&&t(e)},k_=e=>{e.forEach(b_)};function S_({root:e,...t}){const n=e||document;rd.has(n)||rd.set(n,{});const r=rd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(k_,{root:e,...t})),r[i]}function T_(e,t,n){const r=S_(t);return Jf.set(e,n),r.observe(e),()=>{Jf.delete(e),r.unobserve(e)}}const C_={some:0,all:1};class E_ extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:C_[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:c}=this.node.getProps(),h=u?d:c;h&&h(l)};return T_(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(P_(t,n))&&this.startObserver()}unmount(){}}function P_({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const A_={inView:{Feature:E_},tap:{Feature:w_},focus:{Feature:x_},hover:{Feature:v_}},R_={layout:{ProjectionNode:bS,MeasureLayout:jS}},I_={...e_,...A_,...y_,...R_},ae=YO(I_,QO),D_=z1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ne=b.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?cA:"button";return x.jsx(s,{className:Ft(D_({variant:t,size:n,className:e})),ref:o,...i})});Ne.displayName="Button";const Bv=[{path:"/",label:"Home",icon:$1},{path:"/docs",label:"Documentation",icon:ya},{path:"/blog",label:"Blog",icon:cp},{path:"/about",label:"About",icon:k2}];function Sa(){const{theme:e,toggleTheme:t}=Xb(),n=or(),[r,i]=b.useState(!1);return x.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 h-nav glass border-b border-border",children:[x.jsxs("div",{className:"container mx-auto h-full flex items-center justify-between px-4 lg:px-8",children:[x.jsxs(We,{to:"/",className:"flex items-center gap-2 group",children:[x.jsx("img",{src:"/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),x.jsx("span",{className:"font-semibold text-lg hidden sm:block group-hover:text-primary transition-colors",children:"DeCoded"})]}),x.jsx("nav",{className:"hidden md:flex items-center gap-1",children:Bv.map(o=>{const s=n.pathname===o.path||o.path!=="/"&&n.pathname.startsWith(o.path);return x.jsxs(We,{to:o.path,className:Ft("relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",s?"text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[o.label,s&&x.jsx(ae.div,{layoutId:"nav-indicator",className:"absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full",transition:{type:"spring",bounce:.2,duration:.4}})]},o.path)})}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(Ne,{variant:"ghost",size:"icon",onClick:t,className:"rounded-lg","aria-label":"Toggle theme",children:x.jsx(ae.div,{initial:!1,animate:{rotate:e==="dark"?0:180},transition:{duration:.3},children:e==="dark"?x.jsx(m2,{className:"h-5 w-5"}):x.jsx(w2,{className:"h-5 w-5"})})}),x.jsx(Ne,{variant:"ghost",size:"icon",className:"md:hidden rounded-lg",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?x.jsx(hp,{className:"h-5 w-5"}):x.jsx(H1,{className:"h-5 w-5"})})]})]}),r&&x.jsx(ae.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"md:hidden absolute top-full left-0 right-0 glass border-b border-border",children:x.jsx("nav",{className:"container mx-auto py-4 px-4 flex flex-col gap-1",children:Bv.map(o=>{const s=o.icon,a=n.pathname===o.path||o.path!=="/"&&n.pathname.startsWith(o.path);return x.jsxs(We,{to:o.path,onClick:()=>i(!1),className:Ft("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",a?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[x.jsx(s,{className:"h-5 w-5"}),o.label]},o.path)})})})]})}const M_=[{icon:U1,href:"https://github.com/Rucha-1111/",label:"GitHub"},{icon:fp,href:"https://www.linkedin.com/in/rucha-gade/",label:"LinkedIn"},{icon:vf,href:"mailto:ruchagade20@gmail.com",label:"Email"}],N_=[{title:"Documentation",links:[{label:"Getting Started",href:"/docs/getting-started"},{label:"API Reference",href:"/docs/api-reference"},{label:"Tutorials",href:"/docs/tutorials"}]},{title:"Resources",links:[{label:"Blog",href:"/blog"},{label:"About",href:"/about"},{label:"Contact",href:"/about#contact"}]}];function Ta(){return x.jsx("footer",{className:"border-t border-border bg-card/50",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[x.jsxs("div",{className:"md:col-span-2",children:[x.jsxs(We,{to:"/",className:"flex items-center gap-2 mb-4",children:[x.jsx("img",{src:"/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),x.jsx("span",{className:"font-semibold text-lg",children:"DeCoded"})]}),x.jsx("p",{className:"text-muted-foreground text-sm max-w-xs mb-6",children:"Aspiring Technical Writer crafting clear, developer-focused documentation that bridges complex systems and human understanding."}),x.jsx("div",{className:"flex gap-3",children:M_.map(e=>x.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":e.label,children:x.jsx(e.icon,{className:"h-4 w-4"})},e.label))})]}),N_.map(e=>x.jsxs("div",{children:[x.jsx("h4",{className:"font-semibold text-sm mb-4",children:e.title}),x.jsx("ul",{className:"space-y-2",children:e.links.map(t=>x.jsx("li",{children:x.jsx(We,{to:t.href,className:"text-sm text-muted-foreground hover:text-primary transition-colors",children:t.label})},t.label))})]},e.title))]}),x.jsxs("div",{className:"border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4",children:[x.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",new Date().getFullYear()," TechWriter Portfolio. All rights reserved."]}),x.jsx("p",{className:"text-sm text-muted-foreground",children:"Built with precision and purpose."})]})]})})}const j_=[{icon:ya,title:"Technical Documentation",description:"Crystal-clear API references, guides, and tutorials that developers actually want to read."},{icon:cp,title:"Content Strategy",description:"Structured information architecture that scales with your product."},{icon:dp,title:"Developer Experience",description:"Documentation that reduces time-to-value and support overhead."}],L_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},nl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function O_(){return x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Sa,{}),x.jsxs("main",{className:"flex-1 pt-nav",children:[x.jsxs("section",{className:"relative overflow-hidden",children:[x.jsx("div",{className:"absolute inset-0 pointer-events-none",children:x.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px]",style:{background:"var(--gradient-glow)"}})}),x.jsx("div",{className:"container mx-auto px-4 lg:px-8 py-16 sm:py-20 md:py-32 relative z-10",children:x.jsxs(ae.div,{variants:L_,initial:"hidden",animate:"visible",className:"max-w-3xl mx-auto text-center",children:[x.jsx(ae.div,{variants:nl,className:"mb-6",children:x.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",children:[x.jsx(x2,{className:"h-4 w-4"}),"Aspiring Technical Writer"]})}),x.jsxs(ae.h1,{variants:nl,className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight",children:["Documentation that"," ",x.jsx("span",{className:"text-gradient",children:"developers love"})]}),x.jsx(ae.p,{variants:nl,className:"text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto",children:"I craft technical documentation that bridges complex systems and human understanding. Clear, precise, and developer-focused."}),x.jsxs(ae.div,{variants:nl,className:"flex flex-col sm:flex-row gap-4 justify-center",children:[x.jsx(Ne,{asChild:!0,size:"lg",className:"glow",children:x.jsxs(We,{to:"/docs",className:"gap-2",children:["Explore Documentation",x.jsx(yf,{className:"h-4 w-4"})]})}),x.jsx(Ne,{asChild:!0,variant:"outline",size:"lg",children:x.jsx(We,{to:"/about",children:"About Me"})})]})]})})]}),x.jsx("section",{className:"py-20 bg-card/50 border-t border-b border-border",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[x.jsx("h2",{className:"text-3xl font-bold mb-4",children:"What I Do"}),x.jsx("p",{className:"text-muted-foreground max-w-xl mx-auto",children:"Transforming complex technical concepts into accessible, actionable documentation."})]}),x.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:j_.map((e,t)=>x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},className:"group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[x.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",children:x.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),x.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),x.jsx("p",{className:"text-muted-foreground text-sm",children:e.description})]},e.title))})]})}),x.jsx("section",{className:"py-20",children:x.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:x.jsxs(ae.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12 text-center",children:[x.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"var(--gradient-glow)",opacity:.5}}),x.jsxs("div",{className:"relative z-10",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-4 break-words",children:"Ready to explore the documentation?"}),x.jsx("p",{className:"text-muted-foreground mb-8 max-w-lg mx-auto break-words",children:"Dive into sample documentation showcasing my approach to technical writing."}),x.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[x.jsx(Ne,{asChild:!0,size:"lg",className:"break-words",children:x.jsxs(We,{to:"/docs/introduction",className:"gap-2",children:["Start Reading",x.jsx(yf,{className:"h-4 w-4"})]})}),x.jsx(Ne,{asChild:!0,variant:"outline",size:"lg",className:"break-words",children:x.jsx(We,{to:"/blog",children:"Read the Blog"})})]})]})]})})})]}),x.jsx(Ta,{})]})}const LS=`# Welcome to the Documentation

Welcome to our comprehensive documentation portal! This is your starting point for exploring all the technical content and resources we have to offer.

## What You'll Find Here

Our documentation is organized into several key areas to help you find exactly what you need:

### REST API Documentation
Complete guides for building and understanding REST APIs, from fundamentals to advanced patterns.

- **REST API Fundamentals** - Core concepts and principles
- **HTTP Basics** - Understanding the protocol
- **Authentication & Authorization** - Securing your APIs
- **Error Handling** - Best practices for robust APIs
- **Testing Strategies** - Ensuring API reliability
- And much more...

### LeetCode Solutions
Detailed algorithmic solutions with explanations, time/space complexity analysis, and multiple approaches.

- **String Manipulation** - Merge, GCD, compression algorithms
- **Array Problems** - Product except self, triplet sequences
- **Data Structures** - Trees, graphs, and advanced structures

### Tutorials & How-To Guides

Step-by-step instructional content designed to help users accomplish specific tasks efficiently and correctly.

- **Getting Started Tutorials** – Clear walkthroughs for beginners
- **How-To Guides** – Task-oriented instructions focused on real-world use cases
- **Best Practices** – Recommended approaches and standards
- **Troubleshooting Guides** – Solutions to common problems and errors
- **Examples & Walkthroughs** – Practical, scenario-based explanations

## Getting Started

Choose your path based on your current needs:

- **New to APIs?** Start with [REST API Fundamentals](/docs/rest-api-fundamentals)
- **Preparing for interviews?** Check out our [LeetCode Solutions](/docs/merge-string-alternatively)
- **See our tutorials** Explore our [Tutorials and How-To Guides](/docs/set-up-git)

## Navigation Tips

- Use the sidebar to browse categories and topics
- Search functionality is available in the header
- All content is mobile-friendly and accessible
- Dark/light theme toggle available for comfortable reading

## Need Help?

If you can't find what you're looking for or have questions about the documentation:

- Check my [FAQ section](#) (coming soon)
- Contact me through the [About page](/about)
- Browse my [Blog](/blog) for additional insights

Happy learning!
`,OS="# LeetCode 605. Can Place Flowers\n\n**Difficulty:** Easy\n**Topics:** Arrays, Greedy Approach\n\n**Problem Link:** [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/)\n\n---\n\n## Problem Statement\n\nYou have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.\n\nGiven an integer array `flowerbed` containing `0'`s and `1'`s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if **n new flowers** can be planted in the flowerbed without violating the **no-adjacent-flowers rule** and `false` otherwise.\n\n**Example 1:**\n\nInput: flowerbed = `[1,0,0,0,1]`, n = 1\nOutput: `true`\n\n**Example 2:**\n\nInput: flowerbed = `[1,0,0,0,1]`, n = 2\nOutput: `false`\n\n---\n\n## Java Solution\n\n```java\nclass Solution {\n    public boolean canPlaceFlowers(int[] flowerbed, int n) {\n        int count = 0;\n\n        for (int i = 0; i < flowerbed.length; i++) {\n            if (flowerbed[i] == 0) {\n                boolean left = (i == 0) || (flowerbed[i - 1] == 0);\n                boolean right = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);\n\n                if (left && right) {\n                    flowerbed[i] = 1;\n                    count++;\n                }\n            }\n        }\n        return count >= n;\n    }\n}\n```\n\n## Explanation\n\n- `canPlaceFlowers` method evaluates the `int` array of `flowerbed` and the `int n` denoting the number of flowers that are to be planted in the flowerbed. The return type of the method is boolean, meaning if the `n` number of flowers can be planted in the `flowerbed`, then the value `true` is returned as the output, if not, then `false` is returned.\n  The key constraint in this problem is that _no two flowers can be planted in adjacent plots._\n- We start by initiating the variable of `int count = 0` to keep a track of how many flowers can be planted.\n- A `for` loop is initiated to iterate from the first plot of the _flowerbed_ array till the last plot.\n  - Inside this loop, we have a `if` condition that checks if the current plot in the `flowerbed` is an empty plot or not. If it is, we then proceed to check the plots adjacent to it.\n  - `boolean left` checks if the plot left to the _current plot_ is the first plot `(i==0)` or an empty plot `(flowerbed[i - 1] == 0)`. If the plots are empty, then the value of `left` becomes `true` else `false`.\n  - `boolean right` checks if the plot right to the _current plot_ is the last plot `(i==flowerbed.length-1)` or an empty plot `(flowerbed[i + 1] == 0)`. If the plots are empty, then the value of `right` becomes `true` else `false`.\n- If the values of both `left` and `right` are true, we change the value of _current plot_ to **1** inside the `if` condition. We also\n\n---\n\n## Time Complexity & Space Complexity\n\n### Time Complexity: **O(n)**\n\nThe algorithm processes the `flowerbed` array using a single `for` loop that iterates from the first index to the last.\n\n- Each element of the array is visited **exactly once**\n- All operations inside the loop, such as comparisons, boolean evaluations, and assignments run in **constant time** `O(1)`\n- There are no nested loops or repeated scans of the array\n\nAs a result, the total execution time grows **linearly** with the size of the input array.\n\nIf the flowerbed contains `n` plots, the algorithm performs `n` checks.\n\n---\n\n### Space Complexity: **O(1)**\n\nThe solution uses a fixed number of variables:\n\n- `count`\n- `left`\n- `right`\n- loop index `i`\n\nThese variables require constant memory regardless of the input size.\n\n- No additional arrays or data structures are created\n- The input array is modified **in place**\n- Memory usage does not increase as the size of the flowerbed grows\n\nTherefore, the space complexity remains **constant**.\n\n---\n\n## Key Takeaways\n\n- The problem is solved using a **greedy approach**, placing flowers whenever it is safe to do so.\n- The flowerbed is traversed **once**, ensuring linear time complexity.\n- **Boundary conditions** (first and last positions) are handled safely without extra checks.\n- Boolean logic (`left` and `right`) ensures no adjacent flowers are placed.\n- The `count` variable tracks **valid flower placements** only.\n- The final result depends on whether the number of placed flowers meets or exceeds `n`.\n- The solution is **space-efficient**, using constant extra memory and in-place updates.\n",_S='# LeetCode 1071 – Greatest Common Divisor of Strings\n\n**Difficulty:** Easy\n\n**Topics:** String\n\n**Problem Link:** [1071 - Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)\n\n---\n\n## Problem Statement\n\nYou are given two strings `str1` and `str2`.\nReturn the largest string `x` such that:\n\n1. `x` divides both `str1` and `str2`.\n2. A string `t` divides another string `s` if and only if `s` is formed by concatenating `t` with itself one or more times.\n\n---\n\n## Examples\n\n### Example 1\n\n**Input:** `str1 = "ABAB"`, `str2 = "AB"`\n**Output:** `"AB"`\n\n### Example 2\n\n**Input:** `str1 = "LEET"`, `str2 = "CODE"`\n**Output:** `""`\n\n---\n\n## Java Solution\n\n```java\nclass Solution {\n    public String gcdOfStrings(String str1, String str2) {\n        if (!(str1 + str2).equals(str2 + str1)) {\n            return "";\n        }\n\n        int g = gcd(str1.length(), str2.length());\n        return str1.substring(0, g);\n    }\n\n    private int gcd(int a, int b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n}\n```\n\n---\n\n## Explanation\n\n- First, we check whether both strings can actually have a common divisor string. This is done by concatenating the strings in both possible orders and comparing the results.\n\n```java if (!(str1 + str2).equals(str2 + str1))```\n\n- Here, we first concatenate `str1` and `str2`.\n  For example, if `str1 = "ABC"` and `str2 = "ABCABC"`, then:\n\n  - `str1 + str2 = "ABCABCABC"`\n  - `str2 + str1 = "ABCABCABC"`\n\n- The `.equals()` method checks whether both concatenated strings are **exactly the same**, character by character.\n\n- The condition is negated because if these two results are **not equal**, it means the strings do not follow the same repeating pattern. In such a case, there is no string that can divide both `str1` and `str2`, so we immediately return an empty string.\n\n- After confirming that a common repeating pattern is possible, we move to the core logic of the solution by passing the lengths of both strings to the `gcd()` function.\n\n- The `gcd()` method computes the **greatest common divisor** of the two string lengths. This step is important because any string that divides both `str1` and `str2` must have a length that divides both of their lengths.\n\n- Once we obtain the GCD value, we extract a substring from `str1` starting at index `0` and ending at index `g`. This substring represents the **largest possible string** that can be repeated to form both `str1` and `str2`.\n\n- The `gcd()` function uses the **Euclidean algorithm**, where the problem is repeatedly reduced using the remainder operation until one of the values becomes zero. The remaining value is the GCD.\n\n- Overall, this approach first **filters out invalid cases**, then **uses mathematics to determine the maximum possible divisor length**, and finally **extracts the correct answer efficiently without brute-force checking**.\n\n## Time Complexity\n\n- Overall time complexity is `O(n + m)`, where `n` and `m` are the lengths of `str1` and `str2`.\n- The main step that dominates the runtime is the concatenation check `(str1 + str2).equals(str2 + str1)`,\n  which ensures both strings follow the same repeating pattern.\n- After that, the GCD of the lengths is calculated using the Euclidean algorithm, which is very fast (`O(log(min(n, m)))`) compared to the concatenation.\n- Finally, extracting the substring of length `g = gcd(n, m)` is `O(g)`, which is ≤ `min(n, m)`.\n- Combining these, the overall time remains `O(n + m)`.\n\n## Space Complexity\n\n- Overall space complexity is `O(n + m)`.\n- This comes from creating the concatenated strings `(str1 + str2)` and `(str2 + str1)` of length `n + m`.\n- The substring of length `g = gcd(n, m)` also uses additional space, though smaller.\n- No extra data structures are used, so total space is dominated by the strings themselves.\n\n---\n\n## Key Takeaways\n\n1. Combines string properties and number theory efficiently.\n2. Concatenation check quickly determines if a common divisor exists.\n3. Using GCD of lengths gives the maximum possible divisor string.\n4. Avoids brute-force checking of all prefixes, making it optimal.\n',FS="",zS=`# LeetCode 1431. Kids With the Greatest Number of Candies

**Difficulty:** Easy

**Topics:** Arrays, Lists

**Problem Link:** [1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/)

---

## Problem Statement

There are \`n\` kids with candies. You are given an integer array \`candies\`, where \`candies[i]\` represents the number of candies the \`i\`th kid has, and an integer \`extraCandies\`, denoting the number of extra candies that you have.

Return a boolean array \`result\` of length \`n\`, where \`result[i]\` is \`true\` if, after giving the \`i\`th kid all the \`extraCandies\`, they will have the greatest number of candies among all the kids, or \`false\` otherwise.

> Note: Multiple kids can have the greatest number of candies.

---

## Examples

**Example 1:**

Input: candies = \`[2,3,5,1,3]\`, extraCandies = 3

Output: \`[true,true,true,false,true]\`

Explanation: If you give all extraCandies to:

- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

**Example 2:**

Input: candies = \`[4,2,1,1,2]\`, extraCandies = 1

Output: \`[true,false,false,false,false]\`

Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

**Example 3:**
Input: candies = \`[12,1,12]\`, extraCandies = 10

Output: \`[true,false,true]\`

---

## Java Solution

\`\`\`java
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<>();

        int maxCandies = candies[0];
        for(int i = 0; i < candies.length; i++) {
            if (candies[i] > maxCandies) {
                maxCandies = candies[i];
            }
        }

        for (int candy : candies) {
            ans.add(candy + extraCandies >= maxCandies);
        }
        return ans;
    }
}

\`\`\`

## Understanding The Approach

Before we understand the approach, let us first look into *what are *__lists***?* In **Java**, a list is an \`interface\` that represents an ordered collection(or a sequence) of elements, which allows for duplicates and null values, making it a core of **Java Collections Frameworks**, allowing us to store and manage a dynamic number of objects.

The reason we used \`Lists\` is to store an array of boolean values for a dynamic array, where we would not have to define the size of the array before.

- \`\`\`java List<Boolean> ans = new ArrayList<>();\`\`\` creates a list to store the result (true or false) for each kid.
- We define a \`\`\`java int maxCandies = candies[0];\`\`\` to assume the value of maximum candies to that of the first kid.

- \`\`\`java
  for(int i = 0; i < candies.length; i++) {
    if (candies[i] > maxCandies) {
      maxCandies = candies[i];
    }
  }
  \`\`\`

  We start the loop through all the kids, comparing the candies of the \`current kid (candies[i])\` to the value in the \`maxCandies\`. If the candies of the current kid are more than the value in the maxCandies, then the maxCandies' value is updated.

- \`\`\`java

  for (int candy : candies) {
    ans.add(candy + extraCandies >= maxCandies);
  }
  return ans;
  \`\`\`

  We start a second loop to check which kid has greater than or equal to the maximum number of candies amongst all the kids, which is stored in \`maxCandies\` variable.
- If the kid has more number of candies after being given the extra candies, then the value added to the list is \`True\`, else the value is \`False\`.
- After the loop is over, we simply return the result stored in the \`ans\` variable.

---

## Time Complexity

- The first loop iterates through the \`candies\` array to find the maximum value, which takes **O(n)** time.
- The second loop checks each kid’s candies after adding \`extraCandies\`, which also takes **O(n)** time.
- Since the loops run sequentially, the total time complexity is **O(n)**.

## Space Complexity

- A \`List<Boolean>\` is used to store the result for each kid, which requires **O(n)** extra space.
- Apart from the result list, only a few variables are used, which take **O(1)** space.
- Therefore, the overall space complexity is **O(n)**.

---

## Key Takeaways

- We break the problem in two parts - first we calculate the maximum value from the array, and then we check whether each element plus \`extraCandies\` meets or exceeds this maximum.
- A \`List\` is being used because the result size is dynamic.
- The original \`candies\` array is never modified; all checks are done using comparisons.
- The solution relies on comparison logic rather than sorting, which keeps the time complexity low.
- The method returns results in the same order as the input array.
`,BS=`# LeetCode 1768 – Merge Strings Alternately

**Difficulty:** Easy
**Topics:** String, Two Pointers

**Problem Link:** [1768 - Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

---

## Problem Statement

You are given two strings \`word1\` and \`word2\`.

Merge the strings by adding letters in **alternating order**, starting with \`word1\`.

If one string is longer than the other, append the **remaining letters** of the longer string to the end of the merged string.

Return the merged string.

---

## Examples

### Example 1

**Input:** \`word1 = "abc"\`, \`word2 = "pqr"\`
**Output:** \`"apbqcr"\`

### Example 2

**Input:** \`word1 = "ab"\`, \`word2 = "pqrs"\`
**Output:** \`"apbqrs"\`

---

## Java Solution 1 - Using StringBuilder

\`\`\`java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        StringBuilder sb = new StringBuilder();
        final int n = Math.min(word1.length(), word2.length());

        for(int i = 0; i < n; i++) {
            sb.append(word1.charAt(i));
            sb.append(word2.charAt(i));
        }

        return sb.append(word1.substring(n)).append(word2.substring(n)).toString();
    }
}
\`\`\`

- First we create the object *sb* of the **StringBuilder** class. ***StringBuilder*** is a dynamically resizable character buffer that allows in-place modification of text without creating new objects. But what does it actually mean?
- Basically when we create an object of a  **StringBuilder** class, **Java** creates an empty box or a container in the memory to store characters.
- When we append the characters to this object, they simply being placed in the same box. And if this box i.e., space gets full, Java simply creates more space automatically to store the characters. And all of this happens automatically.

**Time Complexity:** $O(n + m)$

- The loop runs $\\min(n, m)$ times, performing constant time operations.
- The \`substring()\` and \`append()\` operations at the end take time proportional to the number of remaining characters.
- Every character in both input strings is processed exactly once.

**Space Complexity:** $O(n + m)$

- The \`StringBuilder\` stores the combined length of both strings.
- While \`substring()\` creates new temporary string objects in Java, the total auxiliary space remains linear relative to the input size.

---

## Java Solution 2 - Using String

\`\`\`java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        final int n = Math.min(word1.length(), word2.length());
        String mergedString = "";

        for (int i = 0; i < n; i++) {
            mergedString += word1.charAt(i);
            mergedString += word2.charAt(i);
        }

        return mergedString + word1.substring(n) + word2.substring(n);
    }
}
\`\`\`

- To merge two strings into one we have to first calculate the length of the **shortest string** so that we can run the loop till that length.
- Upon receiving the minimum length, we run the loop through that string and retreive the first character from string 1 and then the first character from string 2.
- We repeat this process till the end of the shortest string and then we come out of the loop.
- After that, we return the **mergedString** by adding the rest of the characters of the longer string to the **mergedString** using the *substring()* method.

- **Time Complexity:** $O((n + m)^2)$

  - The loop runs $\\min(n, m)$ times, but each \`+=\` operation on a \`String\` creates a **new String object** and copies existing characters.
    - As the string grows, every concatenation takes longer, leading to repeated copying.
    - The final concatenation with \`substring()\` also creates new String objects.
    - Due to repeated reallocations and copying, the overall time complexity becomes **quadratic** in the combined length of both strings.

- **Space Complexity:** $O(n + m)$

  - The final merged string stores all characters from both input strings.
  - Multiple temporary String objects are created during concatenation, but they are discarded by the garbage collector.
  - The peak auxiliary space grows linearly with the total input size.

---

## Key Takeaways

Both the approaches solve the problem accurately and do produce the expected output, but their efficiency is to be taken into consideration. Using *Strings* in Java is inefficient since they create a new object for every concatenation, taking up a lot of space and causing unnecessary time overhead.

Using **StringBuilder** eradicates the above issues as they modify the same object in the memory, avoiding repeated object creation, thereby making it more efficient and effective in scenarios of frequent operations.
`,VS="",US=`# LeetCode 345. Reverse Vowels of a String

**Difficulty:** Easy
**Topics:** Two Pointers, Strings

**Problem Link:** [345. Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/description/)

---

## Problem Statement

Given a string \`s\`, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

**Example 1:**
Input: s = \`IceCreAm\`
Output: \`AceCreIm\`

**Explanation:**
The vowels in \`s\` are \`['I', 'e', 'e', 'A']\`. On reversing the vowels, \`s\` becomes \`"AceCreIm"\`.

**Example 2:**
Input: s = \`leetcode\`
Output: \`leotcede\`

---

## Java Solution

\`\`\`java
class Solution {
    public String reverseVowels(String s) {
        if(s == null || s.isEmpty()) return "";

        String vowels = "aeiouAEIOU";
        char[] c = s.toCharArray();
        int i = 0, j = s.length() - 1;

        while (i < j) {
            if(vowels.indexOf(c[i]) == -1) {i++; continue;}
            if(vowels.indexOf(c[j]) == -1) {j--; continue;}

            char temp = c[i];
            c[i++] = c[j];
            c[j--] = temp;
        }
        return new String(c);
    }
}
\`\`\`

Got it — neutral, professional, and natural. No fluff, no “story-time” tone. Here it is, **clean and human**:

---

## Explanation

* The \`reverseVowels\` method takes a string \`s\` and returns a new string where only the vowels are reversed. All non-vowel characters remain in their original positions.
* The initial \`if\` condition checks for \`null\` or empty input. In either case, there is nothing to process, so an empty string is returned.
* A string \`vowels = "aeiouAEIOU"\` is defined to represent all valid vowels, both lowercase and uppercase. This allows for quick vowel checks using \`indexOf\`.
* The input string is converted into a character array using \`toCharArray()\` since Java strings are immutable and characters need to be swapped in place.
* Two pointers are initialized:

  * \`i\` starts at the beginning of the array.
  * \`j\` starts at the end of the array.
* A \`while (i < j)\` loop is used to move both pointers toward the center.

  * If \`c[i]\` is not a vowel, \`i\` is incremented.
  * If \`c[j]\` is not a vowel, \`j\` is decremented.
* When both pointers point to vowels, their values are swapped, and both pointers are moved inward.
* After the loop completes, the modified character array is converted back into a string and returned.

---

## Time Complexity & Space Complexity

### Time Complexity: **O(n)**

The string is traversed using two pointers.

* Each character is checked at most once
* All operations inside the loop run in constant time
* There are no nested loops

As a result, the total time complexity is linear with respect to the length of the string.

---

### Space Complexity: **O(n)**

* A character array of size \`n\` is created from the input string
* Apart from a few variables, no additional memory is used

Therefore, the space complexity grows linearly with the input size.

---

## Key Takeaways

* The solution uses a two-pointer approach for efficient traversal.
* Only vowels are swapped; all other characters remain unchanged.
* Both uppercase and lowercase vowels are handled.
* The algorithm completes in a single pass over the string.

* The final result depends on whether the number of placed flowers meets or exceeds \`n\`.
* The solution is **space-efficient**, using constant extra memory and in-place updates.
`,$S=`# LeetCode 151. Reverse Words in a String

**Difficulty:** Medium

**Topics:** Two Pointers, String

**Problem Link:** [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/)

---

## Explanation

Given an input string \`s\`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in \`s\` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space._

**Note** that \`s\` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Examples

**Example 1:**
**Input**: s = "the sky is blue"

**Output**: "blue is sky the"

**Example 2:**

**Input**: s = "  hello world  "

**Output**: "world hello"

**Explanation**: Your reversed string should not contain leading or trailing spaces.

**Example 3:**

**Input**: s = "a good   example"

**Output**: "example good a"

**Explanation**: You need to reduce multiple spaces between two words to a single space in the reversed string.

---

## Java Solution

\`\`\`java
class Solution {
    public String reverseWords(String s) {

        s = s.trim().replaceAll("\\\\s+", " ");
        String[] words = s.split(" ");

        StringBuilder sb = new StringBuilder();

        for(int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]);
            if(i != 0) sb.append(" ");
        }
        return sb.toString();
    }
}
\`\`\`

---

## Approach

- The problem statement requires us to reverse the words of the entered strings, whilst also handling the edge cases, such as multiple spaces in a string, leading/ trailing spaces, or an empty string.
- The entered string first should be **cleaned** to remove any leading or trailing spaces.
- Also any **consecutive spaces should be replaced with a single space**, ensuring that we do not get empty words when splitting.
- Then we proceed to **break the string into an array** using spaces as separators.
- The use of \`StringBuilder\` allows us to append the words from the end of the array without creating a new ojbect in the memory.
- Then the strings are joined with spaces between words and **returned as a single string.**

## Explanation

- The entered string is first cleaned to remove any leading or trailing spaces via this \`s = s.trim().replaceAll("\\\\s+", " ");\`.
  - The \`trim()\` method **removes all the spaces** that are present at the **start** and the **end** of the string, _not in between the words_.
  - For example, if the string is \`"    hello world    "\`, then the \`trim()\` method would turn it to \`"hello world"\` .
  - The \`replaceAll("\\\\s+", " ")\` replaces all the extra spaces with a single space.
  - The \`\\\\s+\` is a regular expression that matches **one or more whitespace characters** anywhere in the string and **replaces** them with a **singular regular space**.
  - For example a string \`"hello     world"\` would become \`"hello world"\`.
- The **cleaned string** is now split into **words** separated by **spaces** in an **array** → \`String[] words = s.split(" ");\`
- An object is initialized of the **StringBuilder** class → \`StringBuilder sb = new StringBuilder();\`

> **StringBuilder** is being used instead of **String** because in **Java**, **strings are immutable**, and when you perform any operation on them, **Java creates a new string in memory.**
> \`StringBuilder\` is **mutable**, meaning you can **append, insert, or delete characters without creating new object every time in the memory.**

- A \`for\` loop is initialized which runs from the **last element** of the array, appending _(adding)_ each word to the \`sb\` object created.
  - Inside the \`for\` loop, we run a \`if\` condition to add a space after appending every word in the \`sb\` object, except for the last word.
- After the \`for\` loop runs through the entire array, the \`sb\` object storing the string is returned.

## Time Complexity

- Let \`n\` be the length of the input string.
- Cleaning the string (\`trim\` + \`replaceAll\`) scans the string once → \`O(n)\`.
- Splitting into words (\`split\`) also scans the string → \`O(n)\`.
- Reversing words with the \`for\` loop iterates through all words, appending to \`StringBuilder\` → \`O(n)\`.
- Converting \`StringBuilder\` to a string → \`O(n)\`.

**Overall time complexity:** \`O(n)\`

## Space Complexity

- Word array from \`split\` → \`O(n)\`.
- \`StringBuilder\` holding the reversed string → \`O(n)\`.
- Other variables → negligible.

**Overall space complexity:** \`O(n)\`

## Key Takeaways

1. Cleans input to handle extra spaces and edge cases.
2. Uses **split → reverse → join** strategy for clarity.
3. \`StringBuilder\` ensures efficient string concatenation.
4. Linear time and space complexity make it suitable for large inputs.
5. Avoids multiple immutable string concatenations, keeping it efficient.
`,HS="",WS=`# API Documentation Standards

Comprehensive API documentation is essential for developers to understand and effectively use an API. Well-structured documentation reduces integration errors, improves adoption, and accelerates development.

---

## What Good API Docs Include

Good API documentation clearly communicates the purpose, usage, and constraints of the API. Key elements include:

* Overview of the API and its functionality
* Authentication and authorization requirements
* Detailed descriptions of endpoints and resources
* Request and response formats with examples
* Error codes and handling guidelines
* Versioning and change history
* Rate limits, pagination, and filtering mechanisms

---

## Endpoint Descriptions

Each API endpoint should be documented with:

* **Endpoint URL**: The full URI or path
* **HTTP method**: GET, POST, PUT, PATCH, DELETE
* **Resource description**: Purpose and behavior of the endpoint
* **Parameters**: Path parameters, query parameters, and headers with data types and constraints
* **Authentication requirements**: Whether the endpoint requires API keys, tokens, or OAuth

Example:

\`\`\`
GET /users/{userId}
Description: Retrieve details of a specific user
Parameters:
  - userId (path, string, required): Unique ID of the user
Authentication: Bearer token required
\`\`\`

---

## Request Examples

Request examples illustrate how a client should interact with the API. They include:

* Complete URL with parameters
* HTTP method
* Required headers (e.g., Content-Type, Authorization)
* Request body (for POST, PUT, PATCH)

Example:

\`\`\`
POST /users
Headers:
  Content-Type: application/json
  Authorization: Bearer <token>
Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin"
}
\`\`\`

---

## Response Examples

Response examples show what the client can expect from the API. They should include:

* HTTP status code
* Response headers
* Response body (typically JSON or XML)

Example:

\`\`\`
HTTP/1.1 201 Created
Content-Type: application/json
Body:
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
  "createdAt": "2026-01-18T14:00:00Z"
}
\`\`\`

---

## Error Examples

Error examples provide guidance for handling failed requests. They should include:

* HTTP status code
* Error message
* Error code (optional)
* Possible causes and suggested actions

Example:

\`\`\`
HTTP/1.1 404 Not Found
Content-Type: application/json
Body:
{
  "error": "User not found",
  "code": "USER_404"
}
\`\`\`

---

## OpenAPI / Swagger Overview

**OpenAPI** (formerly Swagger) is a specification for describing RESTful APIs in a standardized format. It enables:

* Auto-generation of interactive documentation
* Code generation for client SDKs and server stubs
* Validation of requests and responses against the API contract

OpenAPI documents use YAML or JSON to define:

* Endpoints and HTTP methods
* Request and response structures
* Authentication schemes
* Parameters, headers, and status codes

Example snippet (YAML):

\`\`\`yaml
paths:
  /users/{userId}:
    get:
      summary: Retrieve a user by ID
      parameters:
        - in: path
          name: userId
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
\`\`\`
`,qS=`# Authentication & Authorization

Authentication and authorization are critical components of API security, ensuring that only legitimate users and applications can access resources and perform permitted actions.

---

## Authentication vs Authorization

* **Authentication**: The process of verifying the identity of a client or user. It answers the question: *“Who are you?”*
* **Authorization**: The process of determining whether an authenticated client has the right to access a specific resource or perform an action. It answers the question: *“Are you allowed to do this?”*

Both processes work together to secure APIs, but they serve distinct purposes.

---

## API Keys

API keys are unique identifiers issued to clients to access an API. They are included in requests as a query parameter or header.

* Simple to implement
* Suitable for identifying applications rather than users
* Limited security, as keys can be exposed if not handled properly

Example:

\`\`\`
GET /users
Headers:
  x-api-key: YOUR_API_KEY
\`\`\`

---

## Bearer Tokens

Bearer tokens are a form of access token that must be included in the HTTP Authorization header for API requests.

* Tokens are issued after authentication
* Do not require storing credentials in each request
* Provide better security than API keys

Example:

\`\`\`
GET /users
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
\`\`\`

---

## JWT Basics

**JSON Web Tokens (JWT)** are compact, URL-safe tokens used for authentication and authorization.

* Contain claims (user info, permissions) in a signed payload
* Can be verified without server-side storage
* Commonly used in stateless authentication

JWT structure:

1. **Header**: Specifies the token type and signing algorithm
2. **Payload**: Contains user claims and metadata
3. **Signature**: Ensures integrity and authenticity

Example payload:

\`\`\`json
{
  "sub": "12345",
  "name": "John Doe",
  "role": "admin",
  "iat": 1674000000,
  "exp": 1674003600
}
\`\`\`

---

## Token Expiration & Refresh

* **Expiration**: Access tokens are valid for a limited time to reduce risk if compromised.
* **Refresh tokens**: Longer-lived tokens used to obtain new access tokens without re-authenticating.

Typical flow:

1. Client authenticates and receives access + refresh tokens
2. Access token is used for API requests
3. On expiration, refresh token is sent to obtain a new access token

---

## Role-Based Access

Role-Based Access Control (RBAC) assigns permissions based on user roles.

* Roles define groups of actions a user can perform
* Reduces complexity in managing individual permissions
* Common roles: \`admin\`, \`editor\`, \`viewer\`

Example:

\`\`\`json
{
  "role": "editor",
  "permissions": ["read_articles", "edit_articles"]
}
\`\`\`

---

## Permission Scopes

Scopes provide fine-grained control over what actions a token or user can perform.

* Used in OAuth 2.0 and JWTs
* Each token can carry multiple scopes specifying allowed operations
* Scopes help enforce **least privilege** access

Example:

\`\`\`
Authorization: Bearer TOKEN
Scopes: read:users write:orders delete:products
\`\`\`
`,GS=`# Error Handling

Effective error handling in APIs is essential for reliability, usability, and security. Well-defined error responses allow clients to understand failures, take corrective action, and integrate smoothly with the API.

---

## Standard Error Response Structure

A standardized error response provides consistency across an API, making it easier for clients to parse and handle errors. Typical components of a structured error response include:

* **HTTP status code**: Indicates the general type of error (e.g., 400 for bad request, 401 for unauthorized)
* **Error code**: A machine-readable identifier for the specific error
* **Error message**: Human-readable description of the error
* **Details** (optional): Additional information such as invalid fields or hints for resolution

Example:

\`\`\`json
{
  "status": 400,
  "error": "INVALID_INPUT",
  "message": "The 'email' field is required.",
  "details": {
    "field": "email",
    "issue": "missing"
  }
}
\`\`\`

---

## Error Codes vs Error Messages

* **Error Codes**: Standardized identifiers for programmatic handling. They allow clients to react to specific errors without parsing messages. Examples: \`USER_NOT_FOUND\`, \`INVALID_TOKEN\`.
* **Error Messages**: Human-readable descriptions that provide context about the error. They are useful for debugging and displaying information to developers or users.

Both should be consistent, descriptive, and separated in the response.

---

## Validation Errors

Validation errors occur when the client provides input that does not meet the API’s requirements. Common examples include missing fields, invalid data types, or out-of-range values.

* HTTP Status Code: \`400 Bad Request\`
* Include specific information about which fields failed validation
* Helps clients quickly correct requests

Example:

\`\`\`json
{
  "status": 400,
  "error": "VALIDATION_FAILED",
  "message": "Input validation failed for one or more fields.",
  "details": [
    {
      "field": "password",
      "issue": "must be at least 8 characters"
    },
    {
      "field": "email",
      "issue": "invalid format"
    }
  ]
}
\`\`\`

---

## Authentication Errors

Authentication errors occur when the client fails to provide valid credentials or tokens. These errors indicate that the request cannot proceed due to security restrictions.

* HTTP Status Codes: \`401 Unauthorized\` for missing/invalid credentials, \`403 Forbidden\` for insufficient permissions
* Responses should avoid exposing sensitive details that could aid attackers

Example:

\`\`\`json
{
  "status": 401,
  "error": "INVALID_TOKEN",
  "message": "Access token is missing or invalid."
}
\`\`\`

---

## Rate-Limit Errors

Rate-limit errors occur when a client exceeds the allowed number of API requests within a given time period. These errors help protect API infrastructure from abuse and ensure fair usage.

* HTTP Status Code: \`429 Too Many Requests\`
* Include information about limits and retry timing

Example:

\`\`\`json
{
  "status": 429,
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "You have exceeded the maximum number of requests per minute.",
  "retry_after": 60
}
\`\`\`

---

## Debug vs User-Safe Errors

* **Debug Errors**: Include detailed information about failures, stack traces, and internal issues. Useful for development and troubleshooting but should **never be exposed in production**.
* **User-Safe Errors**: Simplified messages intended for end-users or clients that **do not reveal internal implementation details**, reducing the risk of information leakage.

Best practice is to log detailed errors internally while returning concise, safe messages to clients.

---

Proper error handling ensures APIs are robust, developer-friendly, and secure, enabling clients to respond to issues effectively while maintaining operational integrity.
`,KS=`# HTTP Basics for REST

Understanding HTTP is fundamental for designing and consuming RESTful APIs. HTTP defines the protocol for communication between clients and servers, specifying methods, headers, status codes, and message formats.

---

## HTTP Methods (GET, POST, PUT, PATCH, DELETE)

REST APIs use standard HTTP methods to define operations on resources:

* **GET**: Retrieve a resource or collection of resources. Safe and idempotent.
* **POST**: Create a new resource. Not idempotent; multiple identical requests may create multiple resources.
* **PUT**: Update or replace an existing resource entirely. Idempotent; repeated requests have the same effect.
* **PATCH**: Partially update a resource. Typically idempotent but modifies only specific fields.
* **DELETE**: Remove a resource. Idempotent; deleting an already deleted resource returns the same result.

---

## Safe vs Idempotent Methods

* **Safe methods**: Do not modify resources. Examples: \`GET\`, \`HEAD\`. Safe methods can be called without risk of changing server state.
* **Idempotent methods**: Repeated execution produces the same result as a single execution. Examples: \`GET\`, \`PUT\`, \`DELETE\`.
* **Non-idempotent methods**: May have side effects if called multiple times. Example: \`POST\`.

---

## HTTP Request Structure

A standard HTTP request consists of:

1. **Request Line**: Specifies the method, URI, and HTTP version.

   \`\`\`
   GET /users/123 HTTP/1.1
   \`\`\`
2. **Headers**: Key-value pairs conveying metadata (e.g., authentication, content type).
3. **Body** (optional): Contains data for methods like POST, PUT, or PATCH.

Example:

\`\`\`
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
\`\`\`

---

## HTTP Response Structure

A standard HTTP response consists of:

1. **Status Line**: HTTP version, status code, and reason phrase.

   \`\`\`
   HTTP/1.1 200 OK
   \`\`\`
2. **Headers**: Metadata about the response (e.g., content type, caching).
3. **Body** (optional): Contains the response data in a format like JSON or XML.

Example:

\`\`\`
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "12345",
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
\`\`\`

---

## Headers vs Body

* **Headers**: Metadata about the request or response. Examples include \`Content-Type\`, \`Authorization\`, \`Cache-Control\`.
* **Body**: The main content or payload of the message. Contains the data being sent or received.

Headers guide how clients and servers process the body but do not contain the primary data itself.

---

## Content-Type and Accept Headers

* **Content-Type**: Specifies the format of the data being sent in the request body. Example: \`application/json\`, \`application/xml\`.
* **Accept**: Indicates the format that the client expects in the response. Example: \`Accept: application/json\`.

Correct use of these headers ensures proper serialization, deserialization, and interpretation of API data across different clients and servers.
`,YS=`# HTTP Status Codes

HTTP status codes are standardized three-digit numbers that servers return to indicate the result of a client’s request. They provide crucial information about whether a request was successful, if the client made an error, or if the server encountered a problem. Understanding and using these codes correctly is fundamental to building and consuming RESTful APIs.

---

## Success Codes (200, 201, 204)

Success status codes indicate that a client’s request was processed successfully. Each code conveys a slightly different meaning:

* **200 OK**

  * Indicates the request was successful.
  * Typically used with \`GET\` requests when data is returned in the response body.
  * Example:

    \`\`\`json
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "id": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    \`\`\`
* **201 Created**

  * Indicates that a new resource was successfully created.
  * Commonly used with \`POST\` requests.
  * The response usually includes the location of the newly created resource via the \`Location\` header.
  * Example:

    \`\`\`json
    HTTP/1.1 201 Created
    Location: /users/12345
    Content-Type: application/json

    {
      "id": "12345",
      "name": "John Doe"
    }
    \`\`\`
* **204 No Content**

  * Indicates the request was successful but there is no content to return.
  * Commonly used with \`DELETE\` requests or successful \`PUT\`/\`PATCH\` requests where returning the updated resource is unnecessary.
  * Example:

    \`\`\`
    HTTP/1.1 204 No Content
    \`\`\`

---

## Client Errors (400, 401, 403, 404, 409)

Client error codes indicate that the request was invalid, incomplete, or unauthorized. These errors are caused by the client and generally require corrective action:

* **400 Bad Request**

  * The server cannot process the request due to invalid syntax, missing parameters, or invalid input data.
  * Example:

    \`\`\`json
    {
      "status": 400,
      "error": "INVALID_REQUEST",
      "message": "The 'email' field is required."
    }
    \`\`\`
* **401 Unauthorized**

  * The client is not authenticated or provided invalid credentials.
  * Typically requires sending proper authentication headers (e.g., API key, token).
  * Example:

    \`\`\`json
    {
      "status": 401,
      "error": "UNAUTHORIZED",
      "message": "Access token is missing or invalid."
    }
    \`\`\`
* **403 Forbidden**

  * The client is authenticated but does not have permission to access the requested resource.
  * Example:

    \`\`\`json
    {
      "status": 403,
      "error": "FORBIDDEN",
      "message": "You do not have permission to delete this resource."
    }
    \`\`\`
* **404 Not Found**

  * The requested resource does not exist on the server.
  * Example:

    \`\`\`json
    {
      "status": 404,
      "error": "NOT_FOUND",
      "message": "User with ID 12345 not found."
    }
    \`\`\`
* **409 Conflict**

  * Indicates a request conflict with the current state of the resource, such as attempting to create a resource that already exists.
  * Example:

    \`\`\`json
    {
      "status": 409,
      "error": "CONFLICT",
      "message": "User with this email already exists."
    }
    \`\`\`

---

## Server Errors (500, 502, 503)

Server error codes indicate that the client’s request was valid, but the server failed to process it. These errors usually require server-side investigation:

* **500 Internal Server Error**

  * A generic error indicating that the server encountered an unexpected condition.
  * Example:

    \`\`\`json
    {
      "status": 500,
      "error": "INTERNAL_SERVER_ERROR",
      "message": "An unexpected error occurred. Please try again later."
    }
    \`\`\`
* **502 Bad Gateway**

  * The server, acting as a gateway or proxy, received an invalid response from an upstream server.
  * Example:

    \`\`\`json
    {
      "status": 502,
      "error": "BAD_GATEWAY",
      "message": "Failed to retrieve data from the upstream service."
    }
    \`\`\`
* **503 Service Unavailable**

  * The server is temporarily unable to handle the request due to maintenance or overload.
  * Should include information about retry timing if possible.
  * Example:

    \`\`\`json
    {
      "status": 503,
      "error": "SERVICE_UNAVAILABLE",
      "message": "The server is temporarily unavailable. Please try again later."
    }
    \`\`\`

---

## When to Use Which Status Code

* Use **2xx codes** when the request is successfully processed.

  * \`200\` for successful data retrieval
  * \`201\` when a resource is created
  * \`204\` when no content needs to be returned
* Use **4xx codes** for client errors such as invalid input, authentication failures, or access restrictions.
* Use **5xx codes** for server-side errors or upstream service failures.
* Ensure consistency across endpoints to avoid confusion for API clients.

---

## Common Mistakes with Status Codes

* Returning **200 OK** for failed requests instead of an appropriate 4xx or 5xx code.
* Using **401 Unauthorized** for permission issues instead of **403 Forbidden**.
* Using **404 Not Found** for cases that should return a validation error (400).
* Overloading **500 Internal Server Error** without specifying the cause or differentiating server vs client issues.
* Inconsistent status codes across similar endpoints, making client error handling unpredictable.

Proper usage of HTTP status codes ensures clear communication between the API and its clients, improves developer experience, and facilitates automated error handling.
`,QS=`# API Performance & Optimization

Optimizing API performance is critical for ensuring that applications remain responsive, scalable, and cost-efficient. Poorly optimized APIs can lead to slow response times, higher server costs, and a poor user experience. This article provides a detailed guide on key strategies for improving API performance, including payload reduction, caching, compression, avoiding N+1 problems, and monitoring response times.

---

## Reducing Payload Size

Reducing the size of API responses minimizes network latency and speeds up client-side rendering. Large payloads can significantly degrade performance, especially on mobile or low-bandwidth networks.

### Strategies

1. **Field Selection (Sparse Fieldsets)**
   Allow clients to request only the fields they need. For example, using query parameters:

   \`\`\`http
   GET /users?fields=id,name,email
   \`\`\`

   Response:

   \`\`\`json
   [
     {
       "id": 1,
       "name": "Jane Doe",
       "email": "jane@example.com"
     }
   ]
   \`\`\`

2. **Pagination**
   When returning large lists, use pagination to break results into manageable chunks.

   \`\`\`http
   GET /orders?page=2&limit=50
   \`\`\`

   Response includes metadata:

   \`\`\`json
   {
     "page": 2,
     "limit": 50,
     "total": 230,
     "orders": [ ... ]
   }
   \`\`\`

3. **Filtering and Sorting**
   Reduce unnecessary data by allowing clients to filter results on the server side:

   \`\`\`http
   GET /products?category=electronics&sort=price_desc
   \`\`\`

4. **Minimizing Nested Structures**
   Flatten nested objects where possible, or allow clients to request related data separately.

---

## Caching Strategies

Caching reduces the number of requests to the server, improving response times and reducing server load.

### Types of Caching

| Type                      | Description                                                        | Example                                              |
| ------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| **Client-side caching**   | The client stores responses for reuse.                             | Using \`Cache-Control: max-age=3600\` in HTTP headers. |
| **Server-side caching**   | The API server caches responses to serve repeated requests faster. | In-memory cache using Redis or Memcached.            |
| **Reverse proxy caching** | A proxy server caches responses before reaching the API server.    | NGINX or Varnish caching static API responses.       |

### Best Practices

* Use \`ETag\` or \`Last-Modified\` headers for conditional requests.
* Cache GET requests only; avoid caching POST, PUT, DELETE unless explicitly safe.
* Set appropriate cache expiration times (\`Cache-Control\`, \`Expires\`).

---

## Compression

Compression reduces the size of HTTP responses, decreasing bandwidth usage and improving load times.

### Techniques

* **Gzip / Brotli Compression**
  Most web servers support response compression via \`Accept-Encoding\` headers.

  \`\`\`http
  GET /users
  Accept-Encoding: gzip, deflate, br
  \`\`\`

  The server responds with:

  \`\`\`http
  Content-Encoding: gzip
  \`\`\`

* **JSON Minification**
  Remove whitespace and unnecessary formatting in JSON responses.

  \`\`\`json
  [{"id":1,"name":"Jane Doe"},{"id":2,"name":"John Smith"}]
  \`\`\`

* **Binary Serialization**
  For extremely high-performance APIs, consider using formats like Protocol Buffers or MessagePack instead of JSON.

---

## Avoiding N+1 Problems

The N+1 query problem occurs when an API executes a separate database query for each related entity, leading to inefficient performance.

### Example Problem

\`\`\`sql
SELECT * FROM users;  -- 1 query
SELECT * FROM orders WHERE user_id = 1;  -- N queries for each user
\`\`\`

### Solutions

* **Eager Loading**
  Fetch related entities in a single query:

  \`\`\`sql
  SELECT u.id, u.name, o.id AS order_id, o.total
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id;
  \`\`\`

* **Batching Queries**
  Aggregate multiple requests into a single database call.

* **GraphQL**
  Use GraphQL to allow clients to specify exactly which data they need, reducing over-fetching and N+1 queries.

---

## Monitoring Response Times

Monitoring API performance helps detect slow endpoints and identify optimization opportunities.

### Metrics to Track

* **Average Response Time** – The mean latency of requests.
* **95th Percentile Latency** – The latency under which 95% of requests fall.
* **Error Rate** – Percentage of failed requests over total requests.
* **Throughput** – Number of requests handled per second.

### Tools

* **APM Tools**: New Relic, Datadog, Dynatrace
* **Logging and Metrics**: Prometheus + Grafana, ELK Stack
* **Custom Middleware**: Track request start/end times and log response durations.

### Best Practices

* Monitor both internal service endpoints and external APIs your service depends on.
* Set alerts for anomalies or performance regressions.
* Combine metrics with tracing for root-cause analysis of slow requests.
`,XS=`# Pagination, Filtering & Sorting in APIs

Efficiently retrieving data from APIs is critical for performance, scalability, and user experience. Pagination, filtering, and sorting allow clients to access only the necessary data, reducing payload sizes, server load, and network latency. This article provides a comprehensive guide to these techniques, including implementation strategies, best practices, and performance considerations.

---

## Offset-Based Pagination

Offset-based pagination is the most common form of pagination, where the client specifies the starting point (offset) and the number of records to retrieve (limit).

### Example

\`\`\`http
GET /users?offset=50&limit=10
\`\`\`

Response:

\`\`\`json
{
  "offset": 50,
  "limit": 10,
  "total": 230,
  "users": [
    {"id": 51, "name": "Alice"},
    {"id": 52, "name": "Bob"}
  ]
}
\`\`\`

### Pros

* Simple and easy to implement.
* Works well for small datasets.

### Cons

* Performance can degrade for large offsets.
* Records may shift if underlying data changes between requests.

---

## Cursor-Based Pagination

Cursor-based pagination avoids the performance pitfalls of offset-based pagination by using a pointer (cursor) to the last item fetched.

### Example

\`\`\`http
GET /users?cursor=eyJpZCI6NTB9&limit=10
\`\`\`

Response:

\`\`\`json
{
  "next_cursor": "eyJpZCI6NjB9",
  "users": [
    {"id": 51, "name": "Alice"},
    {"id": 52, "name": "Bob"}
  ]
}
\`\`\`

### Pros

* More efficient for large datasets.
* Avoids duplicate or missing records if data changes between requests.

### Cons

* Slightly more complex to implement.
* Cursors are opaque, making debugging harder.

---

## Limit & Page Parameters

Limit and page parameters are a common shorthand for offset-based pagination.

### Example

\`\`\`http
GET /products?page=3&limit=20
\`\`\`

* \`page\`: The page number to retrieve.
* \`limit\`: Number of records per page.

Response includes metadata:

\`\`\`json
{
  "page": 3,
  "limit": 20,
  "total_pages": 12,
  "products": [ ... ]
}
\`\`\`

### Best Practices

* Set a reasonable maximum limit to prevent server overload.
* Return metadata such as \`total\`, \`total_pages\`, or \`next_page\` for client convenience.

---

## Filtering Strategies

Filtering allows clients to retrieve only relevant data, improving performance and usability.

### Common Filtering Techniques

1. **Exact Match**

\`\`\`http
GET /orders?status=shipped
\`\`\`

2. **Range Filters**

\`\`\`http
GET /orders?date_from=2026-01-01&date_to=2026-01-18
\`\`\`

3. **Partial Match / Search**

\`\`\`http
GET /users?name_like=John
\`\`\`

4. **Multiple Values**

\`\`\`http
GET /products?category=electronics,appliances
\`\`\`

### Best Practices

* Clearly document supported filter fields and operations.
* Avoid overloading endpoints with complex filters; consider a dedicated search endpoint.
* Validate filter parameters to prevent invalid or malicious queries.

---

## Sorting Conventions

Sorting enables clients to receive results in a predictable order.

### Syntax Examples

1. **Single Field Sorting**

\`\`\`http
GET /users?sort=name
\`\`\`

2. **Descending Order**

\`\`\`http
GET /users?sort=-created_at
\`\`\`

3. **Multiple Fields**

\`\`\`http
GET /products?sort=category,-price
\`\`\`

### Best Practices

* Default to a consistent sort order if none is specified.
* Support ascending and descending sorting with explicit notation (e.g., \`-field\` for descending).
* Limit the number of sortable fields to maintain performance.

---

## Performance Considerations

* **Indexes**: Ensure database fields used for filtering, sorting, and pagination are indexed.
* **Cursor vs Offset**: Use cursor-based pagination for large datasets to avoid slow queries.
* **Limit Caps**: Restrict maximum limits to prevent excessive server load.
* **Caching**: Cache common queries to reduce database hits.
* **Partial Response**: Allow clients to request only necessary fields to reduce payload size.
`,JS=`# Rate Limiting & Throttling

---

## Why Rate Limiting Exists

Rate limiting is a technique used to control the number of requests a client can make to an API within a specified time frame. It helps:

* Prevent abuse and denial-of-service attacks.
* Ensure fair usage among clients.
* Protect backend resources and maintain performance.

---

## Rate Limit Headers

APIs often communicate rate limits through HTTP headers to inform clients about usage and remaining quota. Common headers include:

| Header                  | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| \`X-RateLimit-Limit\`     | Maximum number of requests allowed in the time window.                                     |
| \`X-RateLimit-Remaining\` | Number of requests remaining in the current window.                                        |
| \`X-RateLimit-Reset\`     | Time (usually in UNIX timestamp) when the rate limit resets.                               |
| \`Retry-After\`           | Suggested wait time (in seconds) before making the next request after exceeding the limit. |

### Example

\`\`\`http
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1674076800
Retry-After: 60
\`\`\`

---

## Per-User vs Per-IP Limits

### Per-User Limits

* Apply limits based on user accounts or API keys.
* Useful for authenticated APIs to provide fair access to registered users.

### Per-IP Limits

* Apply limits based on client IP addresses.
* Common for public endpoints without authentication.
* Helps prevent abuse by anonymous clients.

### Hybrid Approach

* Some APIs implement both per-user and per-IP limits to cover multiple abuse scenarios.

---

## Handling Limit Exceeded Responses

When clients exceed rate limits, the API responds with HTTP status code **429 Too Many Requests**.

### Example Response

\`\`\`json
{
  "error": "Rate limit exceeded",
  "message": "You have exceeded 100 requests per hour.",
  "retry_after": 60
}
\`\`\`

### Best Practices for Clients

* Respect \`Retry-After\` headers.
* Implement exponential backoff for retries.
* Monitor usage to avoid hitting limits proactively.

---

## Retry-After Strategies

Retry strategies define how clients handle requests after hitting a rate limit:

1. **Fixed Retry**
   Wait for a fixed duration specified by the \`Retry-After\` header before retrying.

2. **Exponential Backoff**
   Gradually increase the wait time between retries to reduce server load:

   \`\`\`text
   1s → 2s → 4s → 8s ...
   \`\`\`

3. **Jitter**
   Add random variation to retry intervals to prevent request bursts:

   \`\`\`text
   retry_time = base * 2^attempt + random(0, jitter_max)
   \`\`\`

4. **Client-Side Queueing**
   Queue requests locally and release them according to available quota.

### Implementation Example (Pseudo-code)

\`\`\`python
import time

def call_api():
    response = make_request()
    if response.status_code == 429:
        retry_after = int(response.headers.get("Retry-After", 60))
        time.sleep(retry_after)
        return call_api()
    return response
\`\`\`

---
`,ZS=`# Real-World REST API Patterns

---

## CRUD APIs

CRUD APIs provide endpoints for **Create, Read, Update, and Delete** operations on resources. These operations map to HTTP methods:

| Operation | HTTP Method | Endpoint     | Description                                     |
| --------- | ----------- | ------------ | ----------------------------------------------- |
| Create    | POST        | \`/users\`     | Create a new resource.                          |
| Read      | GET         | \`/users/123\` | Retrieve a specific resource.                   |
| Update    | PUT/PATCH   | \`/users/123\` | Update an existing resource fully or partially. |
| Delete    | DELETE      | \`/users/123\` | Remove a resource.                              |

### Guidelines

* Use plural nouns for resource names.
* Return proper HTTP status codes: \`201 Created\`, \`200 OK\`, \`204 No Content\`.
* Use PATCH for partial updates and PUT for full updates.
* Include resource URIs in responses where applicable.

---

## Search APIs

Search APIs allow querying resources with flexible criteria, often including filtering, sorting, and pagination.

### Example

\`\`\`http
GET /products/search?query=laptop&category=electronics&sort=price_desc&limit=20&page=2
\`\`\`

### Features

* Filtering by multiple fields.
* Sorting by one or more fields.
* Pagination to limit response size.

### Guidelines

* Support logical operators in filters (\`AND\`, \`OR\`).
* Return metadata like \`total_results\`, \`page\`, \`limit\`.
* Avoid returning excessively large datasets; use cursor-based pagination if needed.

---

## Bulk Operations

Bulk operations perform multiple actions in a single request, reducing network overhead.

### Examples

**Bulk Create**

\`\`\`http
POST /users/bulk
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Bob", "email": "bob@example.com"}
]
\`\`\`

**Bulk Update**

\`\`\`http
PATCH /orders/bulk
[
  {"id": 101, "status": "shipped"},
  {"id": 102, "status": "canceled"}
]
\`\`\`

### Guidelines

* Use transactional operations if atomicity is required.
* Return a summary of successes and failures.
* Enforce payload limits to prevent server overload.

---

## Webhooks

Webhooks notify external systems of events asynchronously.

### Workflow

1. Client registers a callback URL.
2. API triggers an event.
3. API sends an HTTP POST request to the callback URL.

### Example Payload

\`\`\`json
{
  "event": "order_shipped",
  "order_id": 12345,
  "status": "shipped",
  "timestamp": "2026-01-18T14:00:00Z"
}
\`\`\`

### Guidelines

* Secure webhooks using signatures or API keys.
* Retry failed deliveries with exponential backoff.
* Provide delivery status and logs for debugging.

---

## Async Processing Patterns

Asynchronous processing handles long-running operations without blocking clients.

### Job Queue Pattern

* Client submits a job:

\`\`\`http
POST /reports
\`\`\`

* API responds with a job ID:

\`\`\`json
{"job_id": "abc123", "status": "pending"}
\`\`\`

* Client polls for status:

\`\`\`http
GET /reports/abc123/status
\`\`\`

### Webhook Notification Pattern

* API notifies the client via webhook when processing completes.

### Event-Driven Pattern

* Use message brokers (RabbitMQ, Kafka) for scalable background processing.

### Guidelines

* Include job states: \`pending\`, \`in_progress\`, \`completed\`, \`failed\`.
* Provide retry policies and error messages.
* Avoid long synchronous requests that can timeout or block resources.
`,eT=`# Request & Response Format in APIs

## Understanding API Request & Response Format

An API request is a structured message that a client sends to a server to perform an operation, such as retrieving data, creating a resource, updating, or deleting it. A response is the structured message the server returns after processing the request. Clear formats ensure consistency, reduce errors, and make integration predictable.

**Key Elements of a Request**

* **HTTP Method:** GET, POST, PUT, DELETE, PATCH
* **Endpoint URL:** Identifies the resource (\`/users\`, \`/orders\`)
* **Headers:** Provide metadata, authentication, and content type
* **Body (optional):** Contains data for POST/PUT/PATCH requests

**Example Request: GET /users**

\`\`\`http
GET /users HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
Accept: application/json
\`\`\`

**Example Response: 200 OK**

\`\`\`json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}
\`\`\`

**Best Practices for Requests & Responses**

* Maintain consistent field names and data types
* Always return a \`status\` or HTTP status code to indicate success/failure
* Include error messages and codes for debugging
* Avoid sending unnecessary fields in responses

---

## JSON Structure Conventions

Most APIs use **JSON** because it is lightweight, readable, and language-agnostic. Proper JSON structure is essential for predictable parsing by clients.

**Key Conventions:**

* **Objects for single resources**, **arrays for collections**
* **Flat hierarchy** preferred; avoid deeply nested objects unless necessary
* **Use consistent data types** (e.g., string for dates, boolean for true/false)
* **Include meta-information** like \`status\`, \`timestamp\`, and \`requestId\`

**Example**

\`\`\`json
{
  "status": "success",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  },
  "timestamp": "2026-01-18T14:00:00Z",
  "requestId": "abc123xyz"
}
\`\`\`

**Common Mistakes**

* Mixing arrays and objects inconsistently
* Using inconsistent data types for the same field across endpoints
* Overly deep nesting which complicates parsing

---

## Field Naming Styles

API field naming should follow a **consistent convention** to avoid confusion. Two primary styles are used:

| Style      | Example                    | Notes                                         |
| ---------- | -------------------------- | --------------------------------------------- |
| camelCase  | \`firstName\`, \`userEmail\`   | Popular in JavaScript, React, Node.js APIs    |
| snake_case | \`first_name\`, \`user_email\` | Popular in Python, Django, and some REST APIs |

**Best Practices**

* Pick one convention per API version and stick with it
* Ensure all nested objects and arrays follow the same style
* Document the naming convention clearly in API documentation

---

## Pagination Response Format

APIs returning large datasets should implement pagination to improve performance and reduce payload size.

### Limit & Offset Pagination

**Request**

\`\`\`http
GET /users?limit=10&offset=20
\`\`\`

**Response**

\`\`\`json
{
  "status": "success",
  "data": [
    {"id": 21, "name": "User21"},
    {"id": 22, "name": "User22"}
  ],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 20
  }
}
\`\`\`

* \`limit\` defines the maximum records returned
* \`offset\` defines the starting point in the dataset
* \`total\` indicates total records available

### Page & Per Page Pagination

**Request**

\`\`\`http
GET /users?page=3&perPage=10
\`\`\`

**Response**

\`\`\`json
{
  "status": "success",
  "data": [...],
  "pagination": {
    "totalPages": 10,
    "currentPage": 3,
    "perPage": 10,
    "totalRecords": 100
  }
}
\`\`\`

* Easier for UI-based pagination
* \`currentPage\` and \`totalPages\` simplify navigation

**Best Practices**

* Always include total record count or total pages for clients
* Validate query parameters to avoid invalid offsets/pages
* Consider using cursor-based pagination for very large datasets

---

## Sorting and Filtering Parameters

Sorting and filtering allow clients to retrieve **specific subsets of data** efficiently.

**Sorting Example**

\`\`\`http
GET /users?sort=name_asc
\`\`\`

* \`sort\` parameter specifies field and order (\`_asc\` for ascending, \`_desc\` for descending)

**Filtering Example**

\`\`\`http
GET /users?role=admin&active=true
\`\`\`

* Each filter corresponds to a field
* Combine multiple filters using logical AND by default
* Support exact matches, ranges, and partial matches where necessary

**Best Practices**

* Clearly document supported sorting and filtering parameters
* Avoid implementing business logic in filters; keep it data-centric
* Return errors if unsupported parameters are used

---

## Metadata in Responses

Metadata provides **context about the response** without being part of the main data.

**Common Fields**

* \`status\`: success or error
* \`timestamp\`: server response time in ISO 8601 format
* \`requestId\`: unique request identifier for debugging
* \`pagination\`: paging information for collections

**Example**

\`\`\`json
{
  "status": "success",
  "timestamp": "2026-01-18T14:00:00Z",
  "data": [...],
  "requestId": "abc123xyz"
}
\`\`\`

**Best Practices**

* Include metadata in all responses for consistency
* Use \`requestId\` for tracing logs in production systems
* Standardize metadata keys across API endpoints

---

## Empty Responses and Status-Only Responses

Some endpoints return **no data**, such as DELETE requests, but still need to indicate success or failure.

**DELETE /users/1 Example (204 No Content)**

\`\`\`http
HTTP/1.1 204 No Content
\`\`\`

**Status-Only Response Example**

\`\`\`json
{
  "status": "success",
  "message": "User deleted successfully"
}
\`\`\`

**Best Practices**

* Use correct HTTP status codes (200, 201, 204, 400, 404, 500)
* Include JSON messages for clients that rely on response bodies
* Avoid returning empty objects unless standardized

---

## Common Mistakes to Avoid

* Inconsistent field naming across endpoints
* Returning different structures for similar resources
* Ignoring proper HTTP status codes
* Overly nested or bloated response payloads
* Missing pagination for large datasets
* Using ambiguous or generic error messages
`,tT=`# Resource Design in APIs

## Identifying Resources

Resources represent entities or concepts exposed by the API. Correct identification is crucial for clarity, consistency, and ease of use.

**Guidelines for Identifying Resources**

* A resource should represent a **noun**, not an action
* Focus on entities that the client needs to interact with, e.g., \`users\`, \`orders\`, \`products\`
* Avoid exposing internal implementation details as resources

**Example: Good Resource Identification**

| Resource      | Description                |
| ------------- | -------------------------- |
| \`/users\`      | Collection of all users    |
| \`/users/{id}\` | Specific user              |
| \`/orders\`     | Collection of all orders   |
| \`/products\`   | Collection of all products |

**Common Mistakes**

* Using actions as resource names, e.g., \`/getUsers\`
* Creating separate resources for related entities unnecessarily
* Including implementation details, e.g., \`/db/users\`

---

## Singular vs Plural Naming

Consistency in naming is critical for maintainable APIs.

* **Plural Naming** is recommended for collections: \`/users\`, \`/orders\`
* **Singular Naming** can be used for singletons or global resources: \`/profile\`, \`/settings\`

**Examples**

| Type            | Endpoint Example | Notes                                   |
| --------------- | ---------------- | --------------------------------------- |
| Collection      | \`/users\`         | Returns all users                       |
| Single Resource | \`/users/{id}\`    | Returns a single user                   |
| Singleton       | \`/profile\`       | Only one profile per authenticated user |

**Best Practices**

* Stick to plural for collections to maintain consistency
* Avoid mixing singular and plural arbitrarily
* Document singleton resources clearly

---

## Nested Resources

Nested resources represent **relationships between entities**. Use nesting sparingly and only for entities that are directly related.

**Example: Orders of a Specific User**

\`\`\`http
GET /users/123/orders
\`\`\`

* This endpoint returns all orders for user \`123\`
* Use nested resources when the hierarchy is meaningful
* Avoid deep nesting beyond 2-3 levels to keep URLs manageable

**Alternative Approach**

* Instead of deep nesting \`/users/123/orders/456/items/789\`, consider query parameters:

\`\`\`http
GET /orders?userId=123&orderId=456
\`\`\`

**Best Practices**

* Keep nested paths shallow
* Ensure the nesting reflects logical ownership, not just data structure
* Consider flattening with query parameters if hierarchy is complex

---

## Collection vs Single Resource Endpoints

Collection endpoints deal with **multiple resources**, while single resource endpoints deal with **specific items**.

**Collection Endpoint Example**

\`\`\`http
GET /users
POST /users
\`\`\`

* \`GET\` returns all users (possibly paginated)
* \`POST\` creates a new user

**Single Resource Endpoint Example**

\`\`\`http
GET /users/123
PUT /users/123
DELETE /users/123
\`\`\`

* \`GET\` retrieves the user with ID \`123\`
* \`PUT\` updates the user
* \`DELETE\` removes the user

**Best Practices**

* Collections are plural, single resources use IDs
* Avoid using query parameters to simulate a single resource retrieval, e.g., \`/users?id=123\`

---

## Versioning Resources

Versioning ensures backward compatibility as APIs evolve.

**Common Approaches**

* **URL Versioning:** Include version in path

\`\`\`http
GET /v1/users
GET /v2/users
\`\`\`

* **Header Versioning:** Specify version in HTTP header

\`\`\`http
GET /users
Accept: application/vnd.example.v2+json
\`\`\`

**Best Practices**

* Use URL versioning for public APIs for simplicity
* Maintain old versions until clients have migrated
* Avoid breaking changes in minor releases

---

## Avoiding Verbs in URLs

URLs should represent **resources**, not actions. The HTTP method defines the action.

**Incorrect Example**

\`\`\`
GET /getUsers
POST /createUser
DELETE /removeUser
\`\`\`

**Correct Example**

\`\`\`
GET /users
POST /users
DELETE /users/{id}
\`\`\`

**Best Practices**

* Use nouns for resources, actions are implied by HTTP methods
* Avoid \`/updateUser\` or \`/deleteOrder\` endpoints
* Keep URLs semantic, readable, and resource-centric
`,nT=`# REST API Fundamentals

In modern web applications, APIs are the backbone of system communication. **REST APIs**—short for **Representational State Transfer APIs**—are one of the most widely used types of APIs, enabling seamless interaction between clients (like web or mobile apps) and servers.

Imagine ordering a pizza online. You place your order via an app, the app sends your request to the kitchen, and soon the pizza is delivered to your door. You don’t need to know how the chef prepares it; you just expect your order to be fulfilled correctly. In the world of web apps, **REST APIs function in a similar manner**: they are intermediaries that receive requests from clients, communicate with the server, and return the data or results in a predictable format.

---

## What an API Is

Before diving into REST APIs specifically, it’s important to understand **what an API is**.

**API**, or **Application Programming Interface**, is a set of rules and protocols that allows **two software systems to communicate with each other**. It defines:

* How requests are structured
* What data formats are accepted and returned
* How responses and errors are communicated

APIs abstract the internal workings of a system, exposing only the necessary functionality. This enables developers to **leverage complex services** without needing to understand their internal implementation.

In essence, an API is a **contract between software components**: if the client sends a properly formatted request, the server guarantees a predictable response.

---

## What “REST” Actually Means

REST stands for **Representational State Transfer**, a design architecture for building APIs over the web. It was introduced by Roy Fielding in his doctoral dissertation in 2000 and has since become the standard for web-based APIs.

Key principles of REST include:

1. **Client–Server Separation**
   The client (frontend or consumer) and server (backend or provider) are independent systems. The client handles the user interface, while the server manages data and business logic. This separation **promotes modularity** and allows each to evolve independently.

2. **Stateless Communication**
   Every request from a client to a server must contain all the information needed to understand and process the request. The server does **not store client context** between requests. Statelessness ensures **scalability** and **reliability**, as servers can handle requests without tracking session data.

3. **Resources and Actions**
   In REST, everything is treated as a **resource**, which can be any entity such as a user, product, or document. Resources are identified by **URIs (Uniform Resource Identifiers)**, and standard HTTP methods define actions on them:

   | HTTP Method | Action         | Description                  |
   | ----------- | -------------- | ---------------------------- |
   | GET         | Read           | Retrieve data for a resource |
   | POST        | Create         | Add a new resource           |
   | PUT         | Update/Replace | Modify an existing resource  |
   | PATCH       | Update/Partial | Partially update a resource  |
   | DELETE      | Delete         | Remove a resource            |

4. **Uniform Interface**
   REST APIs adhere to a **consistent structure** so that clients can interact with any RESTful service in a standardized way. This includes consistent URIs, HTTP methods, status codes, and response formats (typically JSON or XML).

---

## URI Design Basics

Uniform Resource Identifiers (URIs) are the addresses used to identify resources in REST APIs. Good URI design is **intuitive, consistent, and hierarchical**, making APIs easy to use and maintain. Some best practices include:

* Use **nouns, not verbs**, to represent resources:

\`\`\`

  /users        → List all users
  /users/123    → Retrieve user with ID 123
\`\`\`

* Use **plural nouns** for collections:

\`\`\`
  /products     → All products
  /products/456 → Specific product
\`\`\`

* Avoid including action names in URIs; instead, use **HTTP methods** to indicate the action:

\`\`\`
  GET /orders   → Fetch orders
  POST /orders  → Create a new order
  DELETE /orders/789 → Delete order 789
\`\`\`

* Support **query parameters** for filtering, sorting, or pagination:

\`\`\`
  /orders?status=pending&limit=20
\`\`\`

---

## Summary

A **REST API** is a standardized way for software systems to communicate over the web, exposing resources and operations in a predictable, uniform manner. By following REST principles—client-server separation, statelessness, resource-based design, and uniform interfaces—developers can build scalable, maintainable, and interoperable web services.

REST APIs form the foundation of modern web and mobile applications, enabling integration between diverse systems and services efficiently and reliably.
`,rT=`# Security Best Practices for APIs

## HTTPS Enforcement

APIs must use HTTPS to ensure **encryption of data in transit**, protecting against eavesdropping and man-in-the-middle attacks.

**Implementation Guidelines**

* Enforce HTTPS on all endpoints; redirect HTTP requests to HTTPS automatically
* Use modern TLS versions (TLS 1.2 or 1.3)
* Avoid deprecated SSL/TLS protocols and weak ciphers
* Implement **HSTS (HTTP Strict Transport Security)** to force browsers to use HTTPS

**Example: Enforcing HTTPS in Express.js**

\`\`\`javascript
app.use((req, res, next) => {
  if (req.protocol === 'http') {
    return res.redirect(301, \`https://\${req.headers.host}\${req.url}\`);
  }
  next();
});
\`\`\`

**Best Practices**

* Ensure all third-party APIs your system consumes are HTTPS
* Regularly update certificates and monitor for expiry
* Test endpoints with tools like SSL Labs to validate configuration

---

## Preventing Injection Attacks

Injection attacks, such as SQL injection or NoSQL injection, allow attackers to manipulate queries and access unauthorized data.

**Preventive Measures**

* Use **parameterized queries** or prepared statements instead of string concatenation
* Validate and sanitize all user inputs
* Limit database privileges for API accounts
* Apply **ORM/ODM security features** (e.g., Mongoose for MongoDB, Hibernate for SQL)

**Example: Parameterized SQL Query (Node.js + PostgreSQL)**

\`\`\`javascript
const result = await client.query(
  'SELECT * FROM users WHERE email = $1',
  [userInputEmail]
);
\`\`\`

**Example: Preventing NoSQL Injection (MongoDB)**

\`\`\`javascript
const user = await User.findOne({ email: req.body.email });
\`\`\`

* Avoid passing raw JSON from the client into queries

**Best Practices**

* Never trust user input
* Perform server-side validation, even if client-side validation exists
* Use security linters or scanners to detect injection vulnerabilities

---

## Avoiding Sensitive Data Leaks

APIs can unintentionally expose sensitive data like passwords, API keys, or personal user information.

**Guidelines**

* Never include secrets in responses (e.g., passwords, tokens)
* Mask or hash sensitive fields before returning data
* Store secrets securely using encryption at rest and proper access controls
* Avoid verbose error messages that reveal internal implementation

**Example: Masking Sensitive Fields in JSON Response**

\`\`\`json
{
  "id": 123,
  "username": "john_doe",
  "email": "john@example.com",
  "password": "********"
}
\`\`\`

**Best Practices**

* Use hashed passwords (bcrypt, Argon2) and never return them in responses
* Avoid logging sensitive information
* Implement strict access control based on roles and permissions

---

## CORS Configuration

Cross-Origin Resource Sharing (CORS) controls which domains can access your API. Misconfigured CORS can allow malicious sites to interact with your API.

**Proper CORS Configuration**

* Specify allowed origins explicitly instead of using \`*\`
* Limit allowed methods (\`GET\`, \`POST\`, etc.)
* Restrict allowed headers to necessary ones
* Enable credentials only if required and with proper security

**Example: Express.js CORS Configuration**

\`\`\`javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
\`\`\`

**Best Practices**

* Test your API with different origins to ensure restrictions are working
* Avoid using wildcard \`*\` for production
* Combine CORS with authentication and authorization checks

---

## Logging and Monitoring APIs

Effective logging and monitoring help detect **security incidents, performance issues, and abuse**.

**Key Practices**

* Log requests and responses without exposing sensitive data
* Include metadata like timestamps, user IDs, and request IDs
* Monitor logs for unusual patterns (spikes in requests, repeated failed logins)
* Implement alerting for anomalies and potential attacks

**Example: Logging with Masked Sensitive Data**

\`\`\`javascript
console.log({
  requestId: req.id,
  userId: req.user?.id,
  endpoint: req.path,
  status: res.statusCode
});
\`\`\`

**Best Practices**

* Use centralized logging (ELK Stack, Datadog, Splunk)
* Rotate logs to avoid disk exhaustion
* Ensure logs are tamper-proof and access-controlled

---

## API Abuse Prevention

APIs are vulnerable to abuse such as excessive requests, brute force attacks, and scraping.

**Preventive Measures**

* Implement **rate limiting** to restrict the number of requests per client/IP
* Use **API keys or OAuth tokens** for authentication and throttling
* Detect and block unusual patterns with **IP blacklisting or throttling rules**
* Implement **CAPTCHA** or challenge-response for sensitive operations

**Example: Rate Limiting in Express.js**

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: "Too many requests, please try again later."
});

app.use('/api/', limiter);
\`\`\`

**Best Practices**

* Combine rate limiting with logging and alerting
* Adjust thresholds based on endpoint sensitivity
* Monitor abuse patterns and update security rules dynamically
`,iT=`# Testing REST APIs

## Manual Testing with Tools

Manual testing helps validate API behavior during development or for ad-hoc checks. Tools allow sending requests, inspecting responses, and testing endpoints interactively.

**Popular Tools**

* **Postman:** Create requests, run collections, visualize responses
* **cURL:** Command-line tool for quick testing

**Example: GET Request using Postman**

* Set method to \`GET\`
* Enter endpoint: \`https://api.example.com/users\`
* Add headers: \`Authorization: Bearer <token>\`
* Inspect status code, headers, and JSON response

**Example: GET Request using cURL**

\`\`\`bash
curl -X GET "https://api.example.com/users" \\
     -H "Authorization: Bearer <token>" \\
     -H "Accept: application/json"
\`\`\`

**Best Practices**

* Test both success and error scenarios manually
* Validate HTTP status codes, response structure, and headers
* Use environments or variables in tools like Postman for repeated tests

---

## Automated API Testing

Automated testing validates API behavior consistently and supports regression testing.

**Common Frameworks**

* **JavaScript:** Jest, Mocha, Supertest
* **Python:** Pytest, Requests, Locust for performance
* **Java:** RestAssured, JUnit

**Example: Automated Test using Jest + Supertest (Node.js)**

\`\`\`javascript
const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users').set('Authorization', 'Bearer <token>');
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });
});
\`\`\`

**Best Practices**

* Automate all critical endpoints
* Include success, failure, and edge-case scenarios
* Integrate tests into CI/CD pipelines for continuous validation

---

## Unit vs Integration Tests

Testing should be layered to ensure both **individual components** and **their interactions** work correctly.

**Unit Tests**

* Test single functions or endpoints in isolation
* Mock external dependencies (databases, other services)

\`\`\`javascript
const getUser = require('../services/userService');

test('getUser returns correct user', () => {
  const user = getUser(1);
  expect(user.id).toBe(1);
});
\`\`\`

**Integration Tests**

* Test API endpoints with real dependencies
* Validate database interactions, external services, and authentication

\`\`\`javascript
const request = require('supertest');
const app = require('../app');

describe('POST /users', () => {
  it('should create a new user and save to database', async () => {
    const res = await request(app).post('/users').send({ name: 'John', email: 'john@example.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.name).toBe('John');
  });
});
\`\`\`

**Best Practices**

* Maintain clear separation between unit and integration tests
* Mock external services for unit tests to reduce flakiness
* Use integration tests for critical workflows

---

## Mock APIs

Mock APIs simulate responses from endpoints that may not be available yet. Useful for frontend-backend parallel development and testing edge cases.

**Popular Tools**

* **Postman Mock Servers**
* **WireMock** (Java)
* **JSON Server** (Node.js)

**Example: Mock API Response (JSON Server)**

\`\`\`json
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]
}
\`\`\`

**Best Practices**

* Mock realistic responses including errors and delays
* Keep mock schemas in sync with real API contracts
* Use mocks in automated tests to isolate dependencies

---

## Testing Edge Cases

Edge cases ensure the API handles **unexpected or extreme scenarios** correctly.

**Examples**

* Sending invalid data types: \`/users\` POST with \`"age": "abc"\`
* Missing required fields: \`/users\` POST without \`"email"\`
* Unauthorized access: missing or invalid \`Authorization\` header
* Rate limits exceeded: simulate multiple requests in quick succession
* Large payloads: test upload limits and response handling

**Example: Edge Case Test using Jest**

\`\`\`javascript
test('POST /users with missing email should return 400', async () => {
  const res = await request(app).post('/users').send({ name: 'John' });
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toMatch(/email is required/);
});
\`\`\`

**Best Practices**

* Include both positive and negative scenarios in automated tests
* Validate proper HTTP status codes and error messages
* Test boundary conditions such as empty arrays, null values, and maximum field lengths
`,oT=`# Validation & Data Integrity in APIs

## Input Validation Rules

Input validation ensures that the data received by the API is **correct, safe, and usable**, protecting the system from errors, attacks, and inconsistent data.

**Common Validation Checks**

* **Format validation:** Ensure data matches expected patterns (e.g., email, phone number)
* **Range validation:** Numeric or date fields fall within allowed limits
* **Length validation:** Strings or arrays have acceptable lengths
* **Enumeration validation:** Fields accept only specific predefined values

**Example: Express.js Input Validation Using Joi**

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('admin', 'user', 'guest')
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
\`\`\`

**Best Practices**

* Validate **all user inputs** at the API boundary
* Apply both **client-side and server-side validation**
* Return clear, actionable error messages

---

## Required vs Optional Fields

Differentiating between required and optional fields ensures data completeness without forcing unnecessary input.

**Rules**

* **Required fields:** Must always be provided for the resource to be valid
* **Optional fields:** May be omitted; default values can be applied if necessary

**Example: JSON Schema**

\`\`\`json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer" }
  },
  "required": ["name", "email"]
}
\`\`\`

**Best Practices**

* Clearly document which fields are required and optional
* Avoid overloading requests with optional fields that are rarely used
* Apply defaults for optional fields where applicable

---

## Data Type Enforcement

Ensuring that fields conform to their expected data types prevents **runtime errors and data corruption**.

**Examples**

* Strings for text (\`name\`, \`email\`)
* Integers for IDs, quantities, or ages
* Booleans for flags (\`isActive\`)
* ISO 8601 format for date/time fields (\`2026-01-18T14:00:00Z\`)

**Example: Type Validation in Node.js**

\`\`\`javascript
if (typeof req.body.age !== 'number') {
  return res.status(400).json({ error: "Age must be a number" });
}
\`\`\`

**Best Practices**

* Enforce type checks at the API layer before persistence
* Normalize types (e.g., parse strings to integers if appropriate)
* Reject malformed or unexpected types with descriptive errors

---

## Handling Partial Updates

Partial updates allow clients to modify **only a subset of fields** without sending the entire resource. Typically implemented via \`PATCH\` requests.

**Example: PATCH /users/123**

Request:

\`\`\`json
{
  "email": "newemail@example.com",
  "age": 30
}
\`\`\`

Server Logic:

\`\`\`javascript
const user = await User.findById(123);
if (req.body.email) user.email = req.body.email;
if (req.body.age) user.age = req.body.age;
await user.save();
\`\`\`

**Best Practices**

* Validate only the fields being updated
* Preserve unchanged fields
* Apply the same validation rules as for full updates
* Use \`PATCH\` for partial updates, \`PUT\` for full replacements

---

## Preventing Invalid State Transitions

APIs must enforce **valid workflows and state changes** to maintain data integrity.

**Example: Order Status Transitions**

Allowed transitions:

| Current Status | Allowed Next Status |
| -------------- | ------------------- |
| pending        | confirmed, canceled |
| confirmed      | shipped, canceled   |
| shipped        | delivered           |
| delivered      | -                   |

Implementation:

\`\`\`javascript
const validTransitions = {
  pending: ['confirmed', 'canceled'],
  confirmed: ['shipped', 'canceled'],
  shipped: ['delivered'],
  delivered: []
};

if (!validTransitions[currentStatus].includes(newStatus)) {
  return res.status(400).json({ error: \`Invalid status transition from \${currentStatus} to \${newStatus}\` });
}
\`\`\`

**Best Practices**

* Define allowed state transitions in a table or configuration
* Enforce transitions in the API layer, not only in the database
* Return descriptive errors when invalid transitions are attempted

---

This ensures **input validation, data type enforcement, controlled updates, and consistent state management**, maintaining **high data integrity** and predictable API behavior.
`,sT=`# Versioning Strategies in APIs

## URL Versioning

URL versioning embeds the API version directly in the endpoint path. It is **clear, explicit, and easy to implement**.

**Example:**

\`\`\`
GET /v1/users
POST /v2/orders
\`\`\`

**Advantages**

* Easy to identify which version is being used
* Works with all HTTP clients without additional headers
* Simplifies routing logic on the server

**Best Practices**

* Use numeric or semantic versioning (\`v1\`, \`v2\`, \`v1.1\`)
* Maintain consistent versioning across all endpoints
* Avoid including version in query parameters (\`?version=1\`) as it is less intuitive

---

## Header-Based Versioning

Header-based versioning uses custom headers or \`Accept\` headers to specify the API version.

**Example: Custom Header**

\`\`\`
GET /users
X-API-Version: 2
\`\`\`

**Example: Accept Header Versioning**

\`\`\`
GET /users
Accept: application/vnd.example.v2+json
\`\`\`

**Advantages**

* Keeps URLs clean and resource-centric
* Allows version negotiation without changing endpoints

**Best Practices**

* Document required headers clearly for clients
* Combine with content negotiation if multiple representations exist
* Provide default versions if the header is missing

---

## Backward Compatibility

Backward compatibility ensures that **existing clients continue to work** when new versions or features are introduced.

**Strategies to Maintain Backward Compatibility**

* Additive changes only (e.g., new optional fields)
* Avoid removing or renaming existing fields
* Preserve existing response structures for older versions

**Example:** Adding a new optional \`phoneNumber\` field without breaking existing clients

\`\`\`json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890" // optional, new field
}
\`\`\`

**Best Practices**

* Always maintain older endpoints until clients migrate
* Clearly document changes that could break compatibility
* Test older clients against new API versions

---

## Deprecation Policies

Deprecation policies communicate to clients that **older versions or features will be removed** in the future.

**Key Guidelines**

* Mark endpoints or fields as deprecated in documentation and responses
* Include deprecation warnings in response headers

**Example: Deprecation Header**

\`\`\`
Warning: 299 - "Deprecated API version v1, please migrate to v2"
\`\`\`

**Best Practices**

* Provide a clear timeline for deprecation and removal
* Encourage clients to migrate early
* Avoid sudden breaking changes without notice

---

## Migration Strategies

Migration strategies help clients transition smoothly to new API versions.

**Common Approaches**

* Maintain old version alongside new version until all clients migrate
* Provide migration guides detailing changed endpoints, fields, and behaviors
* Offer **feature flags or dual support** to gradually roll out changes

**Example: Migration Steps**

1. Client uses \`/v1/users\`
2. Notify client of \`/v2/users\` availability
3. Client updates request to new version
4. Monitor usage of old version and phase out after defined period

**Best Practices**

* Communicate migrations via documentation, changelogs, or headers
* Provide examples of both old and new request/response formats
* Track client adoption metrics before decommissioning old versions

---

This ensures **controlled evolution of APIs**, smooth client migration, and predictable version management while maintaining backward compatibility and clear deprecation paths.
`,aT="",lT="",uT="",cT="",dT="",fT="# THIS IS THE TUTORIAL PART",hT="",pT=`---
title: Designing Before Implementation: When It Helps
date: 2026-01-15
tags: ['Software Design', 'Planning', 'Maintainability']
---



# Designing Before Implementation: When It Helps

## Backstory of the Chaos

Your group and your mentor have finally agreed upon one project. You have completed the papers and the research and now you are ready to set onto the actual implementation of the project. You divide your team members into the frontend team, backend team, the database and API team.

And then all of you open your code editors, and race your fingers against the keyboards to write that function responsible for handling the input, the database to store the sessions, the API that will respond to the data from the frontend.

After a few days, you encounter your first error—one that occurred because the project’s behavior was not fully thought through in advance. An API you wrote to handle user queries now ends up breaking the session flow because it conflicts with another API responsible for managing user data, each making different assumptions about the system’s state.

You seek your mentor and then you hear about the concept of designing before implementation.

---

## So What Does Designing Mean?

Designing does not necessarily mean:

- Writing 20-page documents
- Creating perfect diagrams for each UML diagram
- Knowing everything way well in advance

What it actually means is asking yourself:

- What am I actually building?
- What will the project contain?
- How many components is this project supposed to have?
- How will the data flow within the components?
- How will the different components communicate with each other?

For example, even in a simple chatbot project, deciding where user sessions live, who owns the conversation state, and how APIs talk to each other can prevent half the bugs before a single line of code is written.

That’s it. No fancy tools. No perfect diagrams. No lengthy documents. Just a bit of thinking before jumping right at it.

---

## Why Is Designing Before Implementation Important?

To avoid confusing dependencies, rewriting the logic, and most importantly avoiding the moments of *“why did I even write this?”*

That is it!

Designing allows us to see the whole picture roughly before things get messy.

This also helps you when you are learning new technology or a course. The whole purpose behind designing is to think and ponder over the project before diving into the implementation. It helps us ask ourselves:

- Why are we doing this?
- What does this problem solve?
- How is the data moving within my project?
- What state is my data in at the current component?

And so on, making learning intentional instead of mechanical.

---

## Code Becomes Maintainable

Circling back to old projects will be less of a hassle since the code will now be cleaner and enable future changes to be less painful and more effective.

---

## A Simple Way to Design (Without Overthinking)

Before writing code, answer these 5 questions on a piece of paper or a notes app:

1. What is the core problem this project solves?
2. What are the main components?
3. What data does each component own?
4. How do components talk to each other?
5. What can change later without breaking everything?

This reinforces that design is about thinking, not documentation.

Also, when part of a team, this simple method of shared design allows us to:

- Align expectations
- Reduce confusion
- Make collaboration smoother

Overall, saving time and avoiding misunderstandings in the future of the project.

Because the agenda behind designing does not have to be a perfect plan, but a clear vision of the purpose of the project.

---

## Final Thoughts

Designing before implementation isn’t about being perfect or knowing everything in advance, but rather understanding what you are building and learning instead of just finishing.
`,mT=`---
title: Documentation as Code: A Modern Approach
date: 2024-01-10
tags: ['Docs-as-Code', 'Git', 'Automation']
---

The docs-as-code approach treats documentation with the same rigor as software: version control, reviews, testing, and automation. Here's why it matters and how to implement it.

## What is Docs-as-Code?

Docs-as-code means:

- **Writing docs in plain text formats** (Markdown, AsciiDoc)
- **Storing docs in version control** (Git)
- **Reviewing docs through pull requests**
- **Automating builds and deployments**

## Why Adopt This Approach?

### 1. Single Source of Truth

No more "which Google Doc is the latest?" Everything lives in the repository.

\`\`\`

project/
├── src/
├── tests/
└── docs/
    ├── getting-started.md
    ├── api-reference.md
    └── tutorials/
        └── first-integration.md
\`\`\`

### 2. Collaboration at Scale

Developers already know Git. Pull request reviews work for documentation too.

\\\`\\\`\\\`bash
git checkout -b docs/update-auth-guide

# Make changes

git commit -m "docs: clarify OAuth flow"
git push origin docs/update-auth-guide

# Open PR for review

\\\`\\\`\\\`

### 3. Automation

- **Link checking** — Catch broken links before they go live
- **Spell checking** — Automated proofreading
- **Style linting** — Enforce writing standards
- **Preview builds** — See changes before merging

## Implementation Guide

### Step 1: Choose Your Tools

| Tool | Purpose |
|------|---------|
| Markdown | Content format |
| Git/GitHub | Version control |
| MDX/Docusaurus | Static site generator |
| GitHub Actions | CI/CD automation |

### Step 2: Set Up Linting

\\\`\\\`\\\`yaml

# .github/workflows/docs.yml

name: Docs
on: [pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check links
        uses: lycheeverse/lychee-action@v1
      - name: Check spelling
        uses: streetsidesoftware/cspell-action@v2
\\\`\\\`\\\`

### Step 3: Establish Style Guidelines

Document your documentation standards:

- Voice and tone
- Formatting conventions
- Code example requirements
- Image guidelines

## Real Results

Teams adopting docs-as-code report:

- **40% faster documentation updates**
- **90% reduction in outdated content**
- **Improved cross-team collaboration**

## Getting Started

1. Move your docs into your main repository
2. Set up a simple build pipeline
3. Add basic linting
4. Document your contribution process

The investment pays off quickly in quality and efficiency.
`,gT=`---
title: Error Handling as Part of Design
date: 2026-01-18
tags: ['Error Handling', 'Software Design', 'Maintainability']
---


# Error Handling as Part of Design

Planning for errors was a foreign concept for me during my first project. Because if the code runs on my entered test cases, then it is fine and ready to compete with a multi-billion dollar company!

When we think of design, as we did in our last article (Designing Before Implementation: When It Helps), we often think about how things work when everything goes right.

The happy path.

The perfect input.

The ideal user.

But real-life software is a combination of network failures, API chaos, invalid inputs, and so on, thereby making error handling an integral part of design. Because if the system goes crazy after something unexpected happens, then that is not a user problem but rather a design problem.

---

## Hiding Errors or Handling Errors

Error handling — try-catch blocks. That is our introduction to error handling for all of us. And for most of us, the thinking stops there as well. But error handling is much, much, **MUCH** bigger than that.

To understand it, let’s take a very basic example — a login form.

Simple. Right?

Well, if the user enters a correct email and password → done! But a lot can actually go wrong.

For instance:

- Email is in an invalid format
- Password field is empty
- The server is down
- Internet connection drops

During these instances, how should a system behave then?

- Crash! If only you want to have an unhappy lot of people.
- Fail silently. Worse than a crash!
- Tell the user what happened? Absolutely YES!!!

User sees:

- “Invalid email format” instead of “Login failed”
- “Incorrect password” instead of “Something went wrong”
- “Network issue, please try again” instead of a blank screen

This is proper error handling. Not writing more code, but rather respecting the person on the other side of the screen.

---

## Designing For Failure

Yes!

When we keep in mind, assuming the user will enter the correct password and email, we overlook input validation, user messages, and system failures, to name a few.

Now let us shift our mindset from:

**“How does this feature work?”** to **“How will this feature fail?”**

That is all.

You now start planning for:

- invalid inputs
- system failures
- network issues
- fewer crashes

Planning for failure, though it seems pessimistic, sets you up for a successful experience — not just when things work, but when they don’t.

When we design by keeping errors in mind, we become responsible.

---

## Error Handling For Maintainability

Well-designed errors allow:

- logs to be helpful
- code to be cleaner
- flows to be clearer
- fewer things to break unexpectedly
- systems to extend easily

Making the system understandable when it breaks.

---

## Final Thoughts

A system that works only when everything goes right is set up for failure from the start.

Real systems assume things will go wrong and respond to them gracefully. Planning things from the very beginning is how a system is shaped from the start.
`,yT=`---
title: The Impact of Naming on Long-Term Maintainability
date: 2026-01-06
tags: ['Naming Conventions', 'Maintainability']
---


# The Impact of Naming on Long-Term Maintainability

To run a case anyhow during the time of lab examinations, we have used random names for our variables or functions, such as \`abcTest\`, \`FinalResult23\`, \`temp54\`, and so on, because at that time the most important thing was to run the code.

If the code runs, it works!! At least during your exams.

But only after a few real projects is what it took to break that assumption.

---

## The Point of Realization

After revisiting my projects after that summer break, it was almost sweat-breaking to understand what the variable **“Alexander III”** stored!

Re-reading your code again to understand what you were thinking, and yet being left completely ambushed by your naivety is when the importance of nomenclature was realized by me.

I had written it.
I had tested it.
I had run it.
And yet I struggled to understand what I had done!

- Variables refused to explain their purpose
- Functions left me staring at their agenda
- I had to read the entire logic just to understand that one single line

Adding new features or updates to my projects became cumbersome tasks which I started to avoid at all costs.

This became my first lesson — **your code is meant to be understood by humans more than just written**.

---

## Names Form the First Layer of Communication

Before understanding your code, people first read your names:

- Variables that explain their intent
- Classes that explain their responsibility
- Functions that explain their behavior

Unclear names force readers to decode the meaning from the implementation, slowing down understanding and development.

Proper naming allows people to:

- Understand intent effectively
- Create mental maps of the system as they dive deeper into the code

---

## Why Naming Matters More Than We Think

Most freshers and students overlook nomenclature thinking:

- They will clean this later
- It obviously makes sense
- I am the only one working on it

But real software does not live in isolation. It gets:

- Reviewed by seniors
- Extended by teammates
- Reused in future projects
- Revisited by you after months

Poor naming turns simple logic into a maintenance problem.

---

## Technical Debt of Bad Naming

Apart from complex coding or complicated architecture, poor naming is also a cause of technical debt. Unclear naming slows down debugging and forces developers to rely heavily on comments instead of clarity.

This debt keeps growing silently with every new feature or commit.

---

## Intent — The Key Behind Naming

Examples:

- \`process()\` vs \`validateEmailInput()\`
- \`str\` vs \`UserID\`
- \`check\` vs \`isPhoneNumberValid\`

A name should not just exist — it should **explain why it exists**.

When we name variables, functions, classes, and code based on intent, it resolves:

- The need to read the whole logic to understand a single line of code
- Saves substantial time for anyone reading, updating, or integrating new features
- Makes life easier for your future self and teammates

Clear naming is one of the simplest ways of showing professionalism, especially in the early years of your career.

---

## Final Thoughts

If anyone can understand your code based on your naming, you have already done what most beginners overlook. If you haven’t done it yet, you’ve learned something new today.

Naming is a **design decision, not an afterthought**. This small mindset shift has already made my code — and my life — a lot better!
`,vT=`---
title: README Files As Technical Communication
date: 2026-01-10
tags: ['README', 'Technical Communication', 'Documentation']
---


# README Files As Technical Communication

Whilst working on a project often at times we touch the README file as the last thing we usually touch — something that is written as a formality for the world of collaboration, just before pushing the project to GitHub. However, a README is far more than a description file. It is a technical communication document that bridges the gap between the code and the people who interact with it.

README is the first file that users, recruiters, team members, and/or evaluators will read. Understanding its role as a communication tool is essential for any developer.

---

## Understanding Technical Communication in Software Engineering

Technical communication is the practice of conveying complex technical information clearly, accurately, and purposefully to a defined audience.

This communication includes:

- Documentation
- API references
- System design explanations
- Setup and usage guides

And it should balance:

- Technical accuracy
- Clarity and simplicity
- Audience awareness
- Clear purpose and context

A README file is often the entry point to all of this information.

---

## Why README Files Matter More Than We Think

A README file answers critical questions such as:

- What does this project do?
- Why does it exist?
- How do I run it?
- Who is it for?
- What technologies does it use?
- What problem does this project solve?
- What are its limitations?

Whoever the reader is — a recruiter, professor, teammate, or open-source contributor — the README shapes their perception of the project.

Different audiences use the README differently:

- **Recruiters** — clarity, structure, and professionalism
- **Developers** — setup steps, usage, and architecture
- **Reviewers and professors** — conceptual understanding
- **Open-source users** — installation and contribution guidance

A poorly written README can make even a strong project look incomplete.

---

## README as a First Impression

Whenever someone opens a repository, before seeing the code, folder structure, or commit history, they see the README. It provides context behind the code, intent behind design decisions, and guidance for correct usage.

In short, the README file is a technical summary of the project.

---

## Core Components of an Effective README

A well-written README follows a clear and logical flow, where each section serves a specific communication purpose:

- **Project Title and Overview** — Clearly states what the project does and the problem it solves
- **Technologies Used** — Lists the tech stack to set expectations and provide context
- **Installation and Setup Instructions** — Step-by-step guidance to run the project
- **Usage Explanation** — How the software is used (endpoints, inputs, workflows)
- **Project Structure (Optional)** — Explains code organization and architecture
- **Future Enhancements or Limitations** — Communicates constraints and scope for improvement

---

## Final Thoughts

A README file is more than a supporting document; it is a central piece of technical communication that conveys the purpose, structure, and usage of a project. When crafted effectively, it enhances understanding, facilitates collaboration, and ensures the project can be evaluated and used efficiently by any audience.

Clear, concise, and structured READMEs reflect not only the quality of the code but also the professionalism and maturity of the development process.
`,xT=`---
title: Scalability Considerations At A Basic Level
date: 2026-01-09
tags: ['Software Design', 'System Architecture']
---


# Scalability Considerations At A Basic Level

Scalability isn’t something you “add later”. It is something you design early.

---

## What Is Scalability?

Well in simple terms, scalability is about answering one simple question - What happens when the usage grows beyond what was initially expected?

It does not necessarily have to be dealing with a million users daily. It is about dealing with more than what was yesterday, and being confident that the system won’t collapse under that growth.

---

## Separation of Concerns

Scalability triumphs when clear boundaries are maintained. Scaling in a tightly coupled environment becomes extremely difficult. Because when request handling, business logic, and data access are tightly coupled, any change, either functional or performance related, tends to ripple across the system, making optimization risky and evolution slow.

Clear boundaries would look something like this -

- optimizing one layer without touching others
- altering implementations without breaking the flow
- accessing data without it impacting the core components

and so on.

In my recent project - A Programming Chatbot Application, the API layer was limited to HTTP concerns only, while response matching and knowledge-base logic were handled by their dedicated services.

This is not over-engineering, but a practical approach to ensure minor changes do not turn into a system-wide update!

---

## Reusability and Simplicity

Reusing code instead of rewriting it for every new feature is how systems can scale easily.

Another small but important aspect of scalability is avoiding unnecessary complexity early on.

When the system is simple, it is easier to understand, debug, and improve as the usage increases. Complexities in the implementation, such as running unrequired loops, checking the same thing multiple times, and doing more work than what is needed slows down the entire system.

What does it mean is -

- writing logic once and reusing it wherever required
- keeping methods and services focused on a single responsibility
- avoiding duplicate code paths that do the same work
- reducing unnecessary computations inside request flows
- making changes in one place instead of fixing the same issue in multiple places
- designing with readability in mind, not just functionality

---

## Final Thoughts

Scalability does not come from adding complex designs or infrastructure.

It starts with simple design choices such as separating responsibilities, keeping components reusable, and avoiding unnecessary complexities. Though these decisions seem small at first, they compound over time and shape how the system evolves.

A system that is simple, reusable, and clearly structured is far more prepared for growth than one that is complex from the beginning.
`,wT=`---
title: Writing Effective API Documentation
date: 2024-01-10
tags: ['API', 'Documentation', 'Best Practices']
---

# Writing Effective API Documentation

Learn the principles and best practices for creating API docs that developers actually want to read.

## Why Good Documentation Matters

API documentation is often the first impression developers have of your service. Poor documentation leads to:

- Increased support tickets
- Slower adoption
- Frustrated developers
- Lost business opportunities

## Core Principles

### 1. Start with Examples

Show, don't just tell. Include working code examples in multiple languages:

\\\`\\\`\\\`javascript
// JavaScript example
const response = await fetch('/api/users', {
  headers: {
    'Authorization': 'Bearer your-token'
  }
});
\\\`\\\`\\\`

### 2. Be Comprehensive but Concise

Cover all endpoints, parameters, and responses, but don't overwhelm with unnecessary details.

### 3. Use Clear Language

Avoid jargon. Explain technical terms. Write for humans, not machines.

## Best Practices

1. **Interactive Examples** — Let developers test endpoints directly
2. **Error Handling** — Document all possible error responses
3. **Rate Limits** — Be transparent about usage restrictions
4. **Changelogs** — Keep developers informed of updates
5. **Search Functionality** — Make documentation discoverable

## Tools and Frameworks

Consider using:
- OpenAPI/Swagger for API specifications
- Docusaurus or MkDocs for documentation sites
- Postman Collections for testing
- GitBook or ReadMe for hosted solutions

## Measuring Success

Track:
- Time to first API call
- Support ticket volume
- Developer satisfaction surveys
- API adoption rates

Remember: Documentation is never "done" — it evolves with your API.
`,Vv=Object.assign({"/src/content/docs/introduction/welcome.md":LS,"/src/content/docs/leetcode/can-place-flowers.md":OS,"/src/content/docs/leetcode/gcd-strings.md":_S,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":FS,"/src/content/docs/leetcode/kids-with-candies.md":zS,"/src/content/docs/leetcode/merge-string-alternatively.md":BS,"/src/content/docs/leetcode/product-of-array-except-self.md":VS,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":US,"/src/content/docs/leetcode/reverse-words-in-string.md":$S,"/src/content/docs/leetcode/string-compression.md":HS,"/src/content/docs/rest-api/api-doc-strategy.md":WS,"/src/content/docs/rest-api/authentication-and-authorization.md":qS,"/src/content/docs/rest-api/error-handling.md":GS,"/src/content/docs/rest-api/http-basics.md":KS,"/src/content/docs/rest-api/http-status-codes.md":YS,"/src/content/docs/rest-api/optimization.md":QS,"/src/content/docs/rest-api/pagination.md":XS,"/src/content/docs/rest-api/rate-limiting.md":JS,"/src/content/docs/rest-api/real-patterns.md":ZS,"/src/content/docs/rest-api/request-response-format.md":eT,"/src/content/docs/rest-api/resource-design.md":tT,"/src/content/docs/rest-api/rest-api-fundamentals.md":nT,"/src/content/docs/rest-api/security.md":rT,"/src/content/docs/rest-api/testing-reat-api.md":iT,"/src/content/docs/rest-api/validation.md":oT,"/src/content/docs/rest-api/versioning.md":sT,"/src/content/docs/tutorials/connect-mongodb.md":aT,"/src/content/docs/tutorials/create-basic-rest-api.md":lT,"/src/content/docs/tutorials/create-db-table.md":uT,"/src/content/docs/tutorials/handle-errors-in-java.md":cT,"/src/content/docs/tutorials/install-git.md":dT,"/src/content/docs/tutorials/set-up-git.md":fT,"/src/content/docs/tutorials/test-api.md":hT}),Uv=Object.assign({"/src/content/blogs/design-before-implementation.md":pT,"/src/content/blogs/documentation-as-code.md":mT,"/src/content/blogs/error-handling.md":gT,"/src/content/blogs/impact-of-naming.md":yT,"/src/content/blogs/readme-files.md":vT,"/src/content/blogs/scalability.md":xT,"/src/content/blogs/writing-effective-api-documentation.md":wT});function __(e){const t=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,n=e.match(t);if(!n)return{frontmatter:{},body:e};const r=n[1],i=n[2],o={};return r.split(`
`).forEach(s=>{const[a,...l]=s.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const c=d.replace(/'/g,'"');o[a.trim()]=JSON.parse(c)}else o[a.trim()]=d}}),{frontmatter:o,body:i}}function bT(e){const t=e.split(`
`);for(const n of t){if(n.startsWith("# "))return n.substring(2).trim();const r=n.match(/^\d+\.\s+(.+)$/);if(r)return r[1].trim()}return"Untitled"}function F_(){const e={},t={introduction:"Home","rest-api":"BookOpen",tutorials:"Code",reference:"FileText"},n=["rest-api-fundamentals","http-basics","request-response-format","resource-design","http-status-codes","authentication-and-authorization","validation","error-handling","pagination","rate-limiting","security","versioning","optimization","testing-rest-api","real-patterns","api-doc-strategy"],r=["merge-string-alternatively","gcd-strings","kids-with-candies","can-place-flowers","reverse-vowels-of-strings","reverse-words-in-string","product-of-array-except-self","increasing-triplet-subsequence","string-compression"];return Object.keys(Vv).forEach(i=>{const o=i.split("/"),s=o[4],l=o[5].replace(".md",""),u=Vv[i],d=bT(u);if(!e[s]){const c=s.split("-").map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ");e[s]={slug:s,title:c,icon:t[s]||"FileText",items:[]}}d!=="Untitled"&&e[s].items.push({slug:l,title:d})}),Object.values(e).forEach(i=>{i.slug==="rest-api"?i.items.sort((o,s)=>{const a=n.indexOf(o.slug),l=n.indexOf(s.slug);return a!==-1&&l!==-1?a-l:a!==-1?-1:l!==-1?1:o.slug.localeCompare(s.slug)}):i.slug==="leetcode"?i.items.sort((o,s)=>{const a=r.indexOf(o.slug),l=r.indexOf(s.slug);return a!==-1&&l!==-1?a-l:a!==-1?-1:l!==-1?1:o.slug.localeCompare(s.slug)}):i.items.sort((o,s)=>o.slug.localeCompare(s.slug))}),{categories:Object.values(e)}}function z_(){const e=[];return Object.keys(Uv).forEach(t=>{const r=t.split("/").pop().replace(".md",""),i=Uv[t],{frontmatter:o,body:s}=__(i),a=o.title||bT(s);let l="";const u=s.split(`

`).filter(d=>d.trim());for(const d of u){const c=d.trim();if(!c.startsWith("#")){l=c.replace(/^[#\s]*/,"").trim();break}}e.push({slug:r,title:a,description:l,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[]})}),e.sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime()),e}const Ei=F_(),am=z_();function kT(e){for(const t of Ei.categories){const n=t.items.find(r=>r.slug===e);if(n)return n}}const B_=["welcome","rest-api-fundamentals","rest-api-basics","introduction","getting-started"];function $v(){for(const e of B_)if(kT(e))return e;if(Ei.categories.length>0&&Ei.categories[0].items.length>0)return Ei.categories[0].items[0].slug}function V_(e){return am.find(t=>t.slug===e)}function U_(){const e=new Set;return am.forEach(t=>t.tags.forEach(n=>e.add(n))),Array.from(e).sort()}const $_={FileText:ya,BookOpen:cp,Rocket:g2,Code:dp,Settings:y2,Home:$1};function H_({isOpen:e,onClose:t}){const n=or(),[r,i]=b.useState(Ei.categories.map(a=>a.slug)),o=a=>{i(l=>l.includes(a)?l.filter(u=>u!==a):[...l,a])},s=x.jsxs("div",{className:"h-full overflow-y-auto py-6 px-4",children:[x.jsx("div",{className:"lg:hidden flex justify-end mb-4",children:x.jsx(Ne,{variant:"ghost",size:"icon",onClick:t,children:x.jsx(hp,{className:"h-5 w-5"})})}),x.jsx("nav",{className:"space-y-6",children:Ei.categories.map(a=>{const l=$_[a.icon]||ya,u=r.includes(a.slug);return x.jsxs("div",{children:[x.jsxs("button",{onClick:()=>o(a.slug),className:"w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors",children:[x.jsxs("span",{className:"flex items-center gap-2",children:[x.jsx(l,{className:"h-4 w-4"}),a.title]}),x.jsx(ae.span,{animate:{rotate:u?180:0},transition:{duration:.2},children:x.jsx(a2,{className:"h-4 w-4"})})]}),x.jsx(Ev,{initial:!1,children:u&&x.jsx(ae.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden ml-4 mt-1 space-y-0.5 border-l border-border",children:a.items.map(d=>{const c=n.pathname===`/docs/${d.slug}`;return x.jsx("li",{children:x.jsxs(We,{to:`/docs/${d.slug}`,onClick:t,className:Ft("block px-4 py-1.5 text-sm transition-colors relative",c?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:[c&&x.jsx(ae.div,{layoutId:"sidebar-indicator",className:"absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"}),d.title]})},d.slug)})})})]},a.slug)})})]});return x.jsxs(x.Fragment,{children:[x.jsx("aside",{className:"hidden lg:block w-sidebar flex-shrink-0 border-r border-border bg-sidebar sticky top-nav h-[calc(100vh-var(--nav-height))] overflow-hidden",children:s}),x.jsx(Ev,{children:e&&x.jsxs(x.Fragment,{children:[x.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40",onClick:t}),x.jsx(ae.aside,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25,stiffness:200},className:"lg:hidden fixed left-0 top-nav bottom-0 w-sidebar bg-sidebar border-r border-border z-50",children:s})]})})]})}function W_({headings:e}){const[t,n]=b.useState("");return b.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&n(o.target.id)})},{rootMargin:"-80px 0% -80% 0%"});return e.forEach(({id:i})=>{const o=document.getElementById(i);o&&r.observe(o)}),()=>r.disconnect()},[e]),e.length===0?null:x.jsxs("div",{className:"sticky top-24",children:[x.jsx("h4",{className:"text-sm font-semibold mb-4",children:"On this page"}),x.jsx("nav",{className:"space-y-1",children:e.map(r=>x.jsx("a",{href:`#${r.id}`,className:Ft("block text-sm py-1 transition-colors border-l-2 pl-3",r.level===3&&"ml-3",t===r.id?"border-primary text-primary font-medium":"border-transparent text-muted-foreground hover:text-foreground hover:border-border"),children:r.text},r.id))})]})}function q_({children:e,headings:t=[]}){const[n,r]=b.useState(!1);return x.jsxs("div",{className:"flex min-h-[calc(100vh-var(--nav-height))]",children:[x.jsx(H_,{isOpen:n,onClose:()=>r(!1)}),x.jsxs("div",{className:"flex-1 flex",children:[x.jsxs("main",{className:"flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[x.jsx("div",{className:"lg:hidden mb-6",children:x.jsxs(Ne,{variant:"outline",size:"sm",onClick:()=>r(!0),className:"gap-2",children:[x.jsx(H1,{className:"h-4 w-4"}),"Menu"]})}),x.jsx("div",{className:"max-w-3xl mx-auto overflow-x-auto",children:e})]}),t.length>0&&x.jsx("aside",{className:"hidden xl:block w-64 flex-shrink-0 py-8 pr-4",children:x.jsx(W_,{headings:t})})]})]})}function G_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const K_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Y_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Q_={};function Hv(e,t){return(Q_.jsx?Y_:K_).test(e)}const X_=/[ \t\n\f\r]/g;function J_(e){return typeof e=="object"?e.type==="text"?Wv(e.value):!1:Wv(e)}function Wv(e){return e.replace(X_,"")===""}class Ca{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ca.prototype.normal={};Ca.prototype.property={};Ca.prototype.space=void 0;function ST(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ca(n,r,t)}function Zf(e){return e.toLowerCase()}class Et{constructor(t,n){this.attribute=n,this.property=t}}Et.prototype.attribute="";Et.prototype.booleanish=!1;Et.prototype.boolean=!1;Et.prototype.commaOrSpaceSeparated=!1;Et.prototype.commaSeparated=!1;Et.prototype.defined=!1;Et.prototype.mustUseProperty=!1;Et.prototype.number=!1;Et.prototype.overloadedBoolean=!1;Et.prototype.property="";Et.prototype.spaceSeparated=!1;Et.prototype.space=void 0;let Z_=0;const ne=Oi(),_e=Oi(),eh=Oi(),z=Oi(),ve=Oi(),mo=Oi(),It=Oi();function Oi(){return 2**++Z_}const th=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:_e,commaOrSpaceSeparated:It,commaSeparated:mo,number:z,overloadedBoolean:eh,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),id=Object.keys(th);class lm extends Et{constructor(t,n,r,i){let o=-1;if(super(t,n),qv(this,"space",i),typeof r=="number")for(;++o<id.length;){const s=id[o];qv(this,id[o],(r&th[s])===th[s])}}}lm.prototype.defined=!0;function qv(e,t,n){n&&(e[t]=n)}function Go(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new lm(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Zf(r)]=r,n[Zf(o.attribute)]=r}return new Ca(t,n,e.space)}const TT=Go({properties:{ariaActiveDescendant:null,ariaAtomic:_e,ariaAutoComplete:null,ariaBusy:_e,ariaChecked:_e,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:_e,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:_e,ariaFlowTo:ve,ariaGrabbed:_e,ariaHasPopup:null,ariaHidden:_e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:z,ariaLive:null,ariaModal:_e,ariaMultiLine:_e,ariaMultiSelectable:_e,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:_e,ariaReadOnly:_e,ariaRelevant:null,ariaRequired:_e,ariaRoleDescription:ve,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:_e,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function CT(e,t){return t in e?e[t]:t}function ET(e,t){return CT(e,t.toLowerCase())}const e4=Go({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:mo,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:ve,autoFocus:ne,autoPlay:ne,blocking:ve,capture:null,charSet:null,checked:ne,cite:null,className:ve,cols:z,colSpan:null,content:null,contentEditable:_e,controls:ne,controlsList:ve,coords:z|mo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:eh,draggable:_e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:ve,height:z,hidden:eh,high:z,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:ve,itemRef:ve,itemScope:ne,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:z,pattern:null,ping:ve,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:ve,required:ne,reversed:ne,rows:z,rowSpan:z,sandbox:ve,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:_e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:_e,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:_e,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ne,disableRemotePlayback:ne,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:ET}),t4=Go({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:It,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:mo,g2:mo,glyphName:mo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:It,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:It,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:It,rev:It,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:It,requiredFeatures:It,requiredFonts:It,requiredFormats:It,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:It,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:It,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:It,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:CT}),PT=Go({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),AT=Go({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ET}),RT=Go({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),n4={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},r4=/[A-Z]/g,Gv=/-[a-z]/g,i4=/^data[-\w.:]+$/i;function o4(e,t){const n=Zf(t);let r=t,i=Et;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&i4.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Gv,a4);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Gv.test(o)){let s=o.replace(r4,s4);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=lm}return new i(r,t)}function s4(e){return"-"+e.toLowerCase()}function a4(e){return e.charAt(1).toUpperCase()}const l4=ST([TT,e4,PT,AT,RT],"html"),um=ST([TT,t4,PT,AT,RT],"svg");function u4(e){return e.join(" ").trim()}var cm={},Kv=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,c4=/\n/g,d4=/^\s*/,f4=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h4=/^:\s*/,p4=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m4=/^[;\s]*/,g4=/^\s+|\s+$/g,y4=`
`,Yv="/",Qv="*",di="",v4="comment",x4="declaration";function w4(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var g=m.match(c4);g&&(n+=g.length);var w=m.lastIndexOf(y4);r=~w?m.length-w:r+m.length}function o(){var m={line:n,column:r};return function(g){return g.position=new s(m),u(),g}}function s(m){this.start=m,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(m){var g=new Error(t.source+":"+n+":"+r+": "+m);if(g.reason=m,g.filename=t.source,g.line=n,g.column=r,g.source=e,!t.silent)throw g}function l(m){var g=m.exec(e);if(g){var w=g[0];return i(w),e=e.slice(w.length),g}}function u(){l(d4)}function d(m){var g;for(m=m||[];g=c();)g!==!1&&m.push(g);return m}function c(){var m=o();if(!(Yv!=e.charAt(0)||Qv!=e.charAt(1))){for(var g=2;di!=e.charAt(g)&&(Qv!=e.charAt(g)||Yv!=e.charAt(g+1));)++g;if(g+=2,di===e.charAt(g-1))return a("End of comment missing");var w=e.slice(2,g-2);return r+=2,i(w),e=e.slice(g),r+=2,m({type:v4,comment:w})}}function h(){var m=o(),g=l(f4);if(g){if(c(),!l(h4))return a("property missing ':'");var w=l(p4),p=m({type:x4,property:Xv(g[0].replace(Kv,di)),value:w?Xv(w[0].replace(Kv,di)):di});return l(m4),p}}function f(){var m=[];d(m);for(var g;g=h();)g!==!1&&(m.push(g),d(m));return m}return u(),f()}function Xv(e){return e?e.replace(g4,di):di}var b4=w4,k4=Rl&&Rl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cm,"__esModule",{value:!0});cm.default=T4;const S4=k4(b4);function T4(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,S4.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var Ju={};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.camelCase=void 0;var C4=/^--[a-zA-Z0-9_-]+$/,E4=/-([a-z])/g,P4=/^[^-]+$/,A4=/^-(webkit|moz|ms|o|khtml)-/,R4=/^-(ms)-/,I4=function(e){return!e||P4.test(e)||C4.test(e)},D4=function(e,t){return t.toUpperCase()},Jv=function(e,t){return"".concat(t,"-")},M4=function(e,t){return t===void 0&&(t={}),I4(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(R4,Jv):e=e.replace(A4,Jv),e.replace(E4,D4))};Ju.camelCase=M4;var N4=Rl&&Rl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},j4=N4(cm),L4=Ju;function nh(e,t){var n={};return!e||typeof e!="string"||(0,j4.default)(e,function(r,i){r&&i&&(n[(0,L4.camelCase)(r,t)]=i)}),n}nh.default=nh;var O4=nh;const _4=xu(O4),IT=DT("end"),dm=DT("start");function DT(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function F4(e){const t=dm(e),n=IT(e);if(t&&n)return{start:t,end:n}}function Rs(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Zv(e.position):"start"in e||"end"in e?Zv(e):"line"in e||"column"in e?rh(e):""}function rh(e){return ex(e&&e.line)+":"+ex(e&&e.column)}function Zv(e){return rh(e&&e.start)+"-"+rh(e&&e.end)}function ex(e){return e&&typeof e=="number"?e:1}class ot extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Rs(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ot.prototype.file="";ot.prototype.name="";ot.prototype.reason="";ot.prototype.message="";ot.prototype.stack="";ot.prototype.column=void 0;ot.prototype.line=void 0;ot.prototype.ancestors=void 0;ot.prototype.cause=void 0;ot.prototype.fatal=void 0;ot.prototype.place=void 0;ot.prototype.ruleId=void 0;ot.prototype.source=void 0;const fm={}.hasOwnProperty,z4=new Map,B4=/[A-Z]/g,V4=new Set(["table","tbody","thead","tfoot","tr"]),U4=new Set(["td","th"]),MT="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $4(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=X4(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Q4(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?um:l4,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=NT(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function NT(e,t,n){if(t.type==="element")return H4(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return W4(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return G4(e,t,n);if(t.type==="mdxjsEsm")return q4(e,t);if(t.type==="root")return K4(e,t,n);if(t.type==="text")return Y4(e,t)}function H4(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=um,e.schema=i),e.ancestors.push(t);const o=LT(e,t.tagName,!1),s=J4(e,t);let a=pm(e,t);return V4.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!J_(l):!0})),jT(e,s,o,t),hm(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function W4(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}sa(e,t.position)}function q4(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);sa(e,t.position)}function G4(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=um,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:LT(e,t.name,!0),s=Z4(e,t),a=pm(e,t);return jT(e,s,o,t),hm(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function K4(e,t,n){const r={};return hm(r,pm(e,t)),e.create(t,e.Fragment,r,n)}function Y4(e,t){return t.value}function jT(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hm(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Q4(e,t,n){return r;function r(i,o,s,a){const u=Array.isArray(s.children)?n:t;return a?u(o,s,a):u(o,s)}}function X4(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),l=dm(r);return t(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function J4(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&fm.call(t.properties,i)){const o=eF(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&U4.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Z4(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else sa(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else sa(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function pm(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:z4;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=i.get(l)||0;s=l+"-"+u,i.set(l,u+1)}}const a=NT(e,o,s);a!==void 0&&n.push(a)}return n}function eF(e,t,n){const r=o4(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?G_(n):u4(n)),r.property==="style"){let i=typeof n=="object"?n:tF(e,String(n));return e.stylePropertyNameCase==="css"&&(i=nF(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?n4[r.property]||r.property:r.attribute,n]}}function tF(e,t){try{return _4(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ot("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=MT+"#cannot-parse-style-attribute",i}}function LT(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=Hv(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=Hv(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return fm.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);sa(e)}function sa(e,t){const n=new ot("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=MT+"#cannot-handle-mdx-estrees-without-createevaluater",n}function nF(e){const t={};let n;for(n in e)fm.call(e,n)&&(t[rF(n)]=e[n]);return t}function rF(e){let t=e.replace(B4,iF);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function iF(e){return"-"+e.toLowerCase()}const od={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},oF={};function mm(e,t){const n=oF,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return OT(e,r,i)}function OT(e,t,n){if(sF(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return tx(e.children,t,n)}return Array.isArray(e)?tx(e,t,n):""}function tx(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=OT(e[i],t,n);return r.join("")}function sF(e){return!!(e&&typeof e=="object")}const nx=document.createElement("i");function gm(e){const t="&"+e+";";nx.innerHTML=t;const n=nx.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ot(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function qt(e,t){return e.length>0?(Ot(e,e.length,0,t),e):t}const rx={}.hasOwnProperty;function _T(e){const t={};let n=-1;for(;++n<e.length;)aF(t,e[n]);return t}function aF(e,t){let n;for(n in t){const i=(rx.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){rx.call(i,s)||(i[s]=[]);const a=o[s];lF(i[s],Array.isArray(a)?a:a?[a]:[])}}}function lF(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ot(e,0,0,r)}function FT(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function gn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=ti(/[A-Za-z]/),rt=ti(/[\dA-Za-z]/),uF=ti(/[#-'*+\--9=?A-Z^-~]/);function mu(e){return e!==null&&(e<32||e===127)}const ih=ti(/\d/),cF=ti(/[\dA-Fa-f]/),dF=ti(/[!-/:-@[-`{-~]/);function Q(e){return e!==null&&e<-2}function ye(e){return e!==null&&(e<0||e===32)}function ie(e){return e===-2||e===-1||e===32}const Zu=ti(new RegExp("\\p{P}|\\p{S}","u")),Ni=ti(/\s/);function ti(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ko(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&rt(e.charCodeAt(n+1))&&rt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ue(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return ie(l)?(e.enter(n),a(l)):t(l)}function a(l){return ie(l)&&o++<i?(e.consume(l),a):(e.exit(n),t(l))}}const fF={tokenize:hF};function hF(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ue(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return Q(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const pF={tokenize:mF},ix={tokenize:gF};function mF(e){const t=this,n=[];let r=0,i,o,s;return a;function a(v){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,l,u)(v)}return u(v)}function l(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&y();const S=t.events.length;let C=S,T;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){T=t.events[C][1].end;break}p(r);let A=S;for(;A<t.events.length;)t.events[A][1].end={...T},A++;return Ot(t.events,C+1,0,t.events.slice(S)),t.events.length=A,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ix,d,c)(v)}function d(v){return i&&y(),p(r),h(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,m(v)}function h(v){return t.containerState={},e.attempt(ix,f,m)(v)}function f(v){return r++,n.push([t.currentConstruct,t.containerState]),h(v)}function m(v){if(v===null){i&&y(),p(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),g(v)}function g(v){if(v===null){w(e.exit("chunkFlow"),!0),p(0),e.consume(v);return}return Q(v)?(e.consume(v),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),g)}function w(v,S){const C=t.sliceStream(v);if(S&&C.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(C),t.parser.lazy[v.start.line]){let T=i.events.length;for(;T--;)if(i.events[T][1].start.offset<s&&(!i.events[T][1].end||i.events[T][1].end.offset>s))return;const A=t.events.length;let R=A,M,P;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(M){P=t.events[R][1].end;break}M=!0}for(p(r),T=A;T<t.events.length;)t.events[T][1].end={...P},T++;Ot(t.events,R+1,0,t.events.slice(A)),t.events.length=T}}function p(v){let S=n.length;for(;S-- >v;){const C=n[S];t.containerState=C[1],C[0].exit.call(t,e)}n.length=v}function y(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function gF(e,t,n){return ue(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Lo(e){if(e===null||ye(e)||Ni(e))return 1;if(Zu(e))return 2}function ec(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const oh={name:"attention",resolveAll:yF,tokenize:vF};function yF(e,t){let n=-1,r,i,o,s,a,l,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},h={...e[n][1].start};ox(c,-l),ox(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=qt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=qt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=qt(u,ec(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=qt(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=qt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Ot(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vF(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Lo(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const u=e.exit("attentionSequence"),d=Lo(l),c=!d||d===2&&i||n.includes(l),h=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?c:c&&(i||!h)),u._close=!!(o===42?h:h&&(d||!c)),t(l)}}function ox(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const xF={name:"autolink",tokenize:wF};function wF(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return dt(f)?(e.consume(f),s):f===64?n(f):u(f)}function s(f){return f===43||f===45||f===46||rt(f)?(r=1,a(f)):u(f)}function a(f){return f===58?(e.consume(f),r=0,l):(f===43||f===45||f===46||rt(f))&&r++<32?(e.consume(f),a):(r=0,u(f))}function l(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||mu(f)?n(f):(e.consume(f),l)}function u(f){return f===64?(e.consume(f),d):uF(f)?(e.consume(f),u):n(f)}function d(f){return rt(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):h(f)}function h(f){if((f===45||rt(f))&&r++<63){const m=f===45?h:c;return e.consume(f),m}return n(f)}}const Ea={partial:!0,tokenize:bF};function bF(e,t,n){return r;function r(o){return ie(o)?ue(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||Q(o)?t(o):n(o)}}const zT={continuation:{tokenize:SF},exit:TF,name:"blockQuote",tokenize:kF};function kF(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return ie(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function SF(e,t,n){const r=this;return i;function i(s){return ie(s)?ue(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(zT,t,n)(s)}}function TF(e){e.exit("blockQuote")}const BT={name:"characterEscape",tokenize:CF};function CF(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return dF(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const VT={name:"characterReference",tokenize:EF};function EF(e,t,n){const r=this;let i=0,o,s;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=rt,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=cF,d):(e.enter("characterReferenceValue"),o=7,s=ih,d(c))}function d(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return s===rt&&!gm(r.sliceSerialize(h))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(c)&&i++<o?(e.consume(c),d):n(c)}}const sx={partial:!0,tokenize:AF},ax={concrete:!0,name:"codeFenced",tokenize:PF};function PF(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,s=0,a;return l;function l(T){return u(T)}function u(T){const A=r.events[r.events.length-1];return o=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,a=T,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(T)}function d(T){return T===a?(s++,e.consume(T),d):s<3?n(T):(e.exit("codeFencedFenceSequence"),ie(T)?ue(e,c,"whitespace")(T):c(T))}function c(T){return T===null||Q(T)?(e.exit("codeFencedFence"),r.interrupt?t(T):e.check(sx,g,S)(T)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(T))}function h(T){return T===null||Q(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(T)):ie(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ue(e,f,"whitespace")(T)):T===96&&T===a?n(T):(e.consume(T),h)}function f(T){return T===null||Q(T)?c(T):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(T))}function m(T){return T===null||Q(T)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(T)):T===96&&T===a?n(T):(e.consume(T),m)}function g(T){return e.attempt(i,S,w)(T)}function w(T){return e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),p}function p(T){return o>0&&ie(T)?ue(e,y,"linePrefix",o+1)(T):y(T)}function y(T){return T===null||Q(T)?e.check(sx,g,S)(T):(e.enter("codeFlowValue"),v(T))}function v(T){return T===null||Q(T)?(e.exit("codeFlowValue"),y(T)):(e.consume(T),v)}function S(T){return e.exit("codeFenced"),t(T)}function C(T,A,R){let M=0;return P;function P($){return T.enter("lineEnding"),T.consume($),T.exit("lineEnding"),O}function O($){return T.enter("codeFencedFence"),ie($)?ue(T,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):N($)}function N($){return $===a?(T.enter("codeFencedFenceSequence"),H($)):R($)}function H($){return $===a?(M++,T.consume($),H):M>=s?(T.exit("codeFencedFenceSequence"),ie($)?ue(T,_,"whitespace")($):_($)):R($)}function _($){return $===null||Q($)?(T.exit("codeFencedFence"),A($)):R($)}}}function AF(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const sd={name:"codeIndented",tokenize:IF},RF={partial:!0,tokenize:DF};function IF(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),ue(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):Q(u)?e.attempt(RF,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||Q(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function DF(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):Q(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):ue(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):Q(s)?i(s):n(s)}}const MF={name:"codeText",previous:jF,resolve:NF,tokenize:LF};function NF(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function jF(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function LF(e,t,n){let r=0,i,o;return s;function s(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),i=0,d(c)):Q(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||Q(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class OF{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&as(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),as(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),as(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);as(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);as(this.left,n.reverse())}}}function as(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function UT(e){const t={};let n=-1,r,i,o,s,a,l,u;const d=new OF(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,_F(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Ot(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function _F(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let d,c,h=-1,f=n,m=0,g=0;const w=[g];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(d=r.sliceStream(f),f.next||d.push(null),c&&s.defineSkip(f.start),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next}for(f=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(g=h+1,w.push(g),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(s.events=[],f?(f._tokenizer=void 0,f.previous=void 0):w.pop(),h=w.length;h--;){const p=a.slice(w[h],w[h+1]),y=o.pop();l.push([y,y+p.length-1]),e.splice(y,2,p)}for(l.reverse(),h=-1;++h<l.length;)u[m+l[h][0]]=m+l[h][1],m+=l[h][1]-l[h][0]-1;return u}const FF={resolve:BF,tokenize:VF},zF={partial:!0,tokenize:UF};function BF(e){return UT(e),e}function VF(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):Q(a)?e.check(zF,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function UF(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ue(e,o,"linePrefix")}function o(s){if(s===null||Q(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function $T(e,t,n,r,i,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return c;function c(p){return p===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(p),e.exit(o),h):p===null||p===32||p===41||mu(p)?n(p):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),g(p))}function h(p){return p===62?(e.enter(o),e.consume(p),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===62?(e.exit("chunkString"),e.exit(a),h(p)):p===null||p===60||Q(p)?n(p):(e.consume(p),p===92?m:f)}function m(p){return p===60||p===62||p===92?(e.consume(p),f):f(p)}function g(p){return!d&&(p===null||p===41||ye(p))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(p)):d<u&&p===40?(e.consume(p),d++,g):p===41?(e.consume(p),d--,g):p===null||p===32||p===40||mu(p)?n(p):(e.consume(p),p===92?w:g)}function w(p){return p===40||p===41||p===92?(e.consume(p),g):g(p)}}function HT(e,t,n,r,i,o){const s=this;let a=0,l;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),d}function d(f){return a>999||f===null||f===91||f===93&&!l||f===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):Q(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||Q(f)||a++>999?(e.exit("chunkString"),d(f)):(e.consume(f),l||(l=!ie(f)),f===92?h:c)}function h(f){return f===91||f===92||f===93?(e.consume(f),a++,c):c(f)}}function WT(e,t,n,r,i,o){let s;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,l):n(h)}function l(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),u(h))}function u(h){return h===s?(e.exit(o),l(s)):h===null?n(h):Q(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ue(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===s||h===null||Q(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?c:d)}function c(h){return h===s||h===92?(e.consume(h),d):d(h)}}function Is(e,t){let n;return r;function r(i){return Q(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ie(i)?ue(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const $F={name:"definition",tokenize:WF},HF={partial:!0,tokenize:qF};function WF(e,t,n){const r=this;let i;return o;function o(f){return e.enter("definition"),s(f)}function s(f){return HT.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=gn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),l):n(f)}function l(f){return ye(f)?Is(e,u)(f):u(f)}function u(f){return $T(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(HF,c,c)(f)}function c(f){return ie(f)?ue(e,h,"whitespace")(f):h(f)}function h(f){return f===null||Q(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function qF(e,t,n){return r;function r(a){return ye(a)?Is(e,i)(a):n(a)}function i(a){return WT(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ie(a)?ue(e,s,"whitespace")(a):s(a)}function s(a){return a===null||Q(a)?t(a):n(a)}}const GF={name:"hardBreakEscape",tokenize:KF};function KF(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return Q(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const YF={name:"headingAtx",resolve:QF,tokenize:XF};function QF(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ot(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function XF(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||ye(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Q(d)?(e.exit("atxHeading"),t(d)):ie(d)?ue(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||ye(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const JF=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],lx=["pre","script","style","textarea"],ZF={concrete:!0,name:"htmlFlow",resolveTo:n3,tokenize:r3},e3={partial:!0,tokenize:o3},t3={partial:!0,tokenize:i3};function n3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function r3(e,t,n){const r=this;let i,o,s,a,l;return u;function u(E){return d(E)}function d(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),c}function c(E){return E===33?(e.consume(E),h):E===47?(e.consume(E),o=!0,g):E===63?(e.consume(E),i=3,r.interrupt?t:k):dt(E)?(e.consume(E),s=String.fromCharCode(E),w):n(E)}function h(E){return E===45?(e.consume(E),i=2,f):E===91?(e.consume(E),i=5,a=0,m):dt(E)?(e.consume(E),i=4,r.interrupt?t:k):n(E)}function f(E){return E===45?(e.consume(E),r.interrupt?t:k):n(E)}function m(E){const X="CDATA[";return E===X.charCodeAt(a++)?(e.consume(E),a===X.length?r.interrupt?t:N:m):n(E)}function g(E){return dt(E)?(e.consume(E),s=String.fromCharCode(E),w):n(E)}function w(E){if(E===null||E===47||E===62||ye(E)){const X=E===47,me=s.toLowerCase();return!X&&!o&&lx.includes(me)?(i=1,r.interrupt?t(E):N(E)):JF.includes(s.toLowerCase())?(i=6,X?(e.consume(E),p):r.interrupt?t(E):N(E)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(E):o?y(E):v(E))}return E===45||rt(E)?(e.consume(E),s+=String.fromCharCode(E),w):n(E)}function p(E){return E===62?(e.consume(E),r.interrupt?t:N):n(E)}function y(E){return ie(E)?(e.consume(E),y):P(E)}function v(E){return E===47?(e.consume(E),P):E===58||E===95||dt(E)?(e.consume(E),S):ie(E)?(e.consume(E),v):P(E)}function S(E){return E===45||E===46||E===58||E===95||rt(E)?(e.consume(E),S):C(E)}function C(E){return E===61?(e.consume(E),T):ie(E)?(e.consume(E),C):v(E)}function T(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),l=E,A):ie(E)?(e.consume(E),T):R(E)}function A(E){return E===l?(e.consume(E),l=null,M):E===null||Q(E)?n(E):(e.consume(E),A)}function R(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||ye(E)?C(E):(e.consume(E),R)}function M(E){return E===47||E===62||ie(E)?v(E):n(E)}function P(E){return E===62?(e.consume(E),O):n(E)}function O(E){return E===null||Q(E)?N(E):ie(E)?(e.consume(E),O):n(E)}function N(E){return E===45&&i===2?(e.consume(E),G):E===60&&i===1?(e.consume(E),U):E===62&&i===4?(e.consume(E),Y):E===63&&i===3?(e.consume(E),k):E===93&&i===5?(e.consume(E),j):Q(E)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(e3,K,H)(E)):E===null||Q(E)?(e.exit("htmlFlowData"),H(E)):(e.consume(E),N)}function H(E){return e.check(t3,_,K)(E)}function _(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),$}function $(E){return E===null||Q(E)?H(E):(e.enter("htmlFlowData"),N(E))}function G(E){return E===45?(e.consume(E),k):N(E)}function U(E){return E===47?(e.consume(E),s="",I):N(E)}function I(E){if(E===62){const X=s.toLowerCase();return lx.includes(X)?(e.consume(E),Y):N(E)}return dt(E)&&s.length<8?(e.consume(E),s+=String.fromCharCode(E),I):N(E)}function j(E){return E===93?(e.consume(E),k):N(E)}function k(E){return E===62?(e.consume(E),Y):E===45&&i===2?(e.consume(E),k):N(E)}function Y(E){return E===null||Q(E)?(e.exit("htmlFlowData"),K(E)):(e.consume(E),Y)}function K(E){return e.exit("htmlFlow"),t(E)}}function i3(e,t,n){const r=this;return i;function i(s){return Q(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function o3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ea,t,n)}}const s3={name:"htmlText",tokenize:a3};function a3(e,t,n){const r=this;let i,o,s;return a;function a(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),l}function l(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),C):k===63?(e.consume(k),v):dt(k)?(e.consume(k),R):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,m):dt(k)?(e.consume(k),y):n(k)}function d(k){return k===45?(e.consume(k),f):n(k)}function c(k){return k===null?n(k):k===45?(e.consume(k),h):Q(k)?(s=c,U(k)):(e.consume(k),c)}function h(k){return k===45?(e.consume(k),f):c(k)}function f(k){return k===62?G(k):k===45?h(k):c(k)}function m(k){const Y="CDATA[";return k===Y.charCodeAt(o++)?(e.consume(k),o===Y.length?g:m):n(k)}function g(k){return k===null?n(k):k===93?(e.consume(k),w):Q(k)?(s=g,U(k)):(e.consume(k),g)}function w(k){return k===93?(e.consume(k),p):g(k)}function p(k){return k===62?G(k):k===93?(e.consume(k),p):g(k)}function y(k){return k===null||k===62?G(k):Q(k)?(s=y,U(k)):(e.consume(k),y)}function v(k){return k===null?n(k):k===63?(e.consume(k),S):Q(k)?(s=v,U(k)):(e.consume(k),v)}function S(k){return k===62?G(k):v(k)}function C(k){return dt(k)?(e.consume(k),T):n(k)}function T(k){return k===45||rt(k)?(e.consume(k),T):A(k)}function A(k){return Q(k)?(s=A,U(k)):ie(k)?(e.consume(k),A):G(k)}function R(k){return k===45||rt(k)?(e.consume(k),R):k===47||k===62||ye(k)?M(k):n(k)}function M(k){return k===47?(e.consume(k),G):k===58||k===95||dt(k)?(e.consume(k),P):Q(k)?(s=M,U(k)):ie(k)?(e.consume(k),M):G(k)}function P(k){return k===45||k===46||k===58||k===95||rt(k)?(e.consume(k),P):O(k)}function O(k){return k===61?(e.consume(k),N):Q(k)?(s=O,U(k)):ie(k)?(e.consume(k),O):M(k)}function N(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,H):Q(k)?(s=N,U(k)):ie(k)?(e.consume(k),N):(e.consume(k),_)}function H(k){return k===i?(e.consume(k),i=void 0,$):k===null?n(k):Q(k)?(s=H,U(k)):(e.consume(k),H)}function _(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||ye(k)?M(k):(e.consume(k),_)}function $(k){return k===47||k===62||ye(k)?M(k):n(k)}function G(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function U(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),I}function I(k){return ie(k)?ue(e,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):j(k)}function j(k){return e.enter("htmlTextData"),s(k)}}const ym={name:"labelEnd",resolveAll:d3,resolveTo:f3,tokenize:h3},l3={tokenize:p3},u3={tokenize:m3},c3={tokenize:g3};function d3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Ot(e,0,e.length,n),e}function f3(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=qt(a,e.slice(o+1,o+r+3)),a=qt(a,[["enter",d,t]]),a=qt(a,ec(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=qt(a,[["exit",d,t],e[s-2],e[s-1],["exit",u,t]]),a=qt(a,e.slice(s+1)),a=qt(a,[["exit",l,t]]),Ot(e,o,e.length,a),e}function h3(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?c(h):(s=r.parser.defined.includes(gn(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):n(h)}function l(h){return h===40?e.attempt(l3,d,s?d:c)(h):h===91?e.attempt(u3,d,s?u:c)(h):s?d(h):c(h)}function u(h){return e.attempt(c3,d,c)(h)}function d(h){return t(h)}function c(h){return o._balanced=!0,n(h)}}function p3(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ye(c)?Is(e,o)(c):o(c)}function o(c){return c===41?d(c):$T(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function s(c){return ye(c)?Is(e,l)(c):d(c)}function a(c){return n(c)}function l(c){return c===34||c===39||c===40?WT(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return ye(c)?Is(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function m3(e,t,n){const r=this;return i;function i(a){return HT.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(gn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function g3(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const y3={name:"labelStartImage",resolveAll:ym.resolveAll,tokenize:v3};function v3(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const x3={name:"labelStartLink",resolveAll:ym.resolveAll,tokenize:w3};function w3(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const ad={name:"lineEnding",tokenize:b3};function b3(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ue(e,t,"linePrefix")}}const El={name:"thematicBreak",tokenize:k3};function k3(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||Q(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),ie(u)?ue(e,a,"whitespace")(u):a(u))}}const vt={continuation:{tokenize:E3},exit:A3,name:"list",tokenize:C3},S3={partial:!0,tokenize:R3},T3={partial:!0,tokenize:P3};function C3(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(f){const m=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:ih(f)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(El,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(f)}return n(f)}function l(f){return ih(f)&&++s<10?(e.consume(f),l):(!r.interrupt||s<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ea,r.interrupt?n:d,e.attempt(S3,h,c))}function d(f){return r.containerState.initialBlankLine=!0,o++,h(f)}function c(f){return ie(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),h):n(f)}function h(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function E3(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ea,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ue(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ie(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(T3,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ue(e,e.attempt(vt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function P3(e,t,n){const r=this;return ue(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function A3(e){e.exit(this.containerState.type)}function R3(e,t,n){const r=this;return ue(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ie(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const ux={name:"setextUnderline",resolveTo:I3,tokenize:D3};function I3(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function D3(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ie(u)?ue(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Q(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const M3={tokenize:N3};function N3(e){const t=this,n=e.attempt(Ea,r,e.attempt(this.parser.constructs.flowInitial,i,ue(e,e.attempt(this.parser.constructs.flow,i,e.attempt(FF,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const j3={resolveAll:GT()},L3=qT("string"),O3=qT("text");function qT(e){return{resolveAll:GT(e==="text"?_3:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(d){return u(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const c=i[d];let h=-1;if(c)for(;++h<c.length;){const f=c[h];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function GT(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function _3(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const F3={42:vt,43:vt,45:vt,48:vt,49:vt,50:vt,51:vt,52:vt,53:vt,54:vt,55:vt,56:vt,57:vt,62:zT},z3={91:$F},B3={[-2]:sd,[-1]:sd,32:sd},V3={35:YF,42:El,45:[ux,El],60:ZF,61:ux,95:El,96:ax,126:ax},U3={38:VT,92:BT},$3={[-5]:ad,[-4]:ad,[-3]:ad,33:y3,38:VT,42:oh,60:[xF,s3],91:x3,92:[GF,BT],93:ym,95:oh,96:MF},H3={null:[oh,j3]},W3={null:[42,95]},q3={null:[]},G3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:W3,contentInitial:z3,disable:q3,document:F3,flow:V3,flowInitial:B3,insideSpan:H3,string:U3,text:$3},Symbol.toStringTag,{value:"Module"}));function K3(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:A(C),check:A(T),consume:y,enter:v,exit:S,interrupt:A(T,{interrupt:!0})},u={code:null,containerState:{},defineSkip:g,events:[],now:m,parser:e,previous:null,sliceSerialize:h,sliceStream:f,write:c};let d=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function c(O){return s=qt(s,O),w(),s[s.length-1]!==null?[]:(R(t,0),u.events=ec(o,u.events,u),u.events)}function h(O,N){return Q3(f(O),N)}function f(O){return Y3(s,O)}function m(){const{_bufferIndex:O,_index:N,line:H,column:_,offset:$}=r;return{_bufferIndex:O,_index:N,line:H,column:_,offset:$}}function g(O){i[O.line]=O.column,P()}function w(){let O;for(;r._index<s.length;){const N=s[r._index];if(typeof N=="string")for(O=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===O&&r._bufferIndex<N.length;)p(N.charCodeAt(r._bufferIndex));else p(N)}}function p(O){d=d(O)}function y(O){Q(O)?(r.line++,r.column=1,r.offset+=O===-3?2:1,P()):O!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=O}function v(O,N){const H=N||{};return H.type=O,H.start=m(),u.events.push(["enter",H,u]),a.push(H),H}function S(O){const N=a.pop();return N.end=m(),u.events.push(["exit",N,u]),N}function C(O,N){R(O,N.from)}function T(O,N){N.restore()}function A(O,N){return H;function H(_,$,G){let U,I,j,k;return Array.isArray(_)?K(_):"tokenize"in _?K([_]):Y(_);function Y(le){return se;function se(st){const at=st!==null&&le[st],yt=st!==null&&le.null,Pt=[...Array.isArray(at)?at:at?[at]:[],...Array.isArray(yt)?yt:yt?[yt]:[]];return K(Pt)(st)}}function K(le){return U=le,I=0,le.length===0?G:E(le[I])}function E(le){return se;function se(st){return k=M(),j=le,le.partial||(u.currentConstruct=le),le.name&&u.parser.constructs.disable.null.includes(le.name)?me():le.tokenize.call(N?Object.assign(Object.create(u),N):u,l,X,me)(st)}}function X(le){return O(j,k),$}function me(le){return k.restore(),++I<U.length?E(U[I]):G}}}function R(O,N){O.resolveAll&&!o.includes(O)&&o.push(O),O.resolve&&Ot(u.events,N,u.events.length-N,O.resolve(u.events.slice(N),u)),O.resolveTo&&(u.events=O.resolveTo(u.events,u))}function M(){const O=m(),N=u.previous,H=u.currentConstruct,_=u.events.length,$=Array.from(a);return{from:_,restore:G};function G(){r=O,u.previous=N,u.currentConstruct=H,u.events.length=_,a=$,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Y3(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function Q3(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function X3(e){const r={constructs:_T([G3,...(e||{}).extensions||[]]),content:i(fF),defined:[],document:i(pF),flow:i(M3),lazy:{},string:i(L3),text:i(O3)};return r;function i(o){return s;function s(a){return K3(r,o,a)}}}function J3(e){for(;!UT(e););return e}const cx=/[\0\t\n\r]/g;function Z3(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const l=[];let u,d,c,h,f;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(cx.lastIndex=c,u=cx.exec(o),h=u&&u.index!==void 0?u.index:o.length,f=o.charCodeAt(h),!u){t=o.slice(c);break}if(f===10&&c===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<h&&(l.push(o.slice(c,h)),e+=h-c),f){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const ez=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tz(e){return e.replace(ez,nz)}function nz(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return FT(n.slice(o?2:1),o?16:10)}return gm(n)||e}const KT={}.hasOwnProperty;function rz(e,t,n){return typeof t!="string"&&(n=t,t=void 0),iz(n)(J3(X3(n).document().write(Z3()(e,t,!0))))}function iz(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Bn),autolinkProtocol:M,autolinkEmail:M,atxHeading:o(Fi),blockQuote:o(yt),characterEscape:M,characterReference:M,codeFenced:o(Pt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(Pt,s),codeText:o(ar,s),codeTextData:M,data:M,codeFlowValue:M,definition:o(bn),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(_i),hardBreakEscape:o(ni),hardBreakTrailing:o(ni),htmlFlow:o(zi,s),htmlFlowData:M,htmlText:o(zi,s),htmlTextData:M,image:o(ri),label:s,link:o(Bn),listItem:o(ii),listItemValue:h,listOrdered:o(Yo,c),listUnordered:o(Yo),paragraph:o(Aa),reference:E,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Fi),strong:o(Vn),thematicBreak:o(oc)},exit:{atxHeading:l(),atxHeadingSequence:C,autolink:l(),autolinkEmail:at,autolinkProtocol:st,blockQuote:l(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:me,characterReferenceMarkerNumeric:me,characterReferenceValue:le,characterReference:se,codeFenced:l(w),codeFencedFence:g,codeFencedFenceInfo:f,codeFencedFenceMeta:m,codeFlowValue:P,codeIndented:l(p),codeText:l($),codeTextData:P,data:P,definition:l(),definitionDestinationString:S,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(N),hardBreakTrailing:l(N),htmlFlow:l(H),htmlFlowData:P,htmlText:l(_),htmlTextData:P,image:l(U),label:j,labelText:I,lineEnding:O,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:X,resourceDestinationString:k,resourceTitleString:Y,resource:K,setextHeading:l(R),setextHeadingLineSequence:A,setextHeadingText:T,strong:l(),thematicBreak:l()}};YT(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(D){let B={type:"root",children:[]};const J={stack:[B],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:d,data:n},re=[];let de=-1;for(;++de<D.length;)if(D[de][1].type==="listOrdered"||D[de][1].type==="listUnordered")if(D[de][0]==="enter")re.push(de);else{const At=re.pop();de=i(D,At,de)}for(de=-1;++de<D.length;){const At=t[D[de][0]];KT.call(At,D[de][1].type)&&At[D[de][1].type].call(Object.assign({sliceSerialize:D[de][2].sliceSerialize},J),D[de][1])}if(J.tokenStack.length>0){const At=J.tokenStack[J.tokenStack.length-1];(At[1]||dx).call(J,void 0,At[0])}for(B.position={start:gr(D.length>0?D[0][1].start:{line:1,column:1,offset:0}),end:gr(D.length>0?D[D.length-2][1].end:{line:1,column:1,offset:0})},de=-1;++de<t.transforms.length;)B=t.transforms[de](B)||B;return B}function i(D,B,J){let re=B-1,de=-1,At=!1,kn,Rt,Vt,lr;for(;++re<=J;){const Oe=D[re];switch(Oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Oe[0]==="enter"?de++:de--,lr=void 0;break}case"lineEndingBlank":{Oe[0]==="enter"&&(kn&&!lr&&!de&&!Vt&&(Vt=re),lr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:lr=void 0}if(!de&&Oe[0]==="enter"&&Oe[1].type==="listItemPrefix"||de===-1&&Oe[0]==="exit"&&(Oe[1].type==="listUnordered"||Oe[1].type==="listOrdered")){if(kn){let ur=re;for(Rt=void 0;ur--;){const Zt=D[ur];if(Zt[1].type==="lineEnding"||Zt[1].type==="lineEndingBlank"){if(Zt[0]==="exit")continue;Rt&&(D[Rt][1].type="lineEndingBlank",At=!0),Zt[1].type="lineEnding",Rt=ur}else if(!(Zt[1].type==="linePrefix"||Zt[1].type==="blockQuotePrefix"||Zt[1].type==="blockQuotePrefixWhitespace"||Zt[1].type==="blockQuoteMarker"||Zt[1].type==="listItemIndent"))break}Vt&&(!Rt||Vt<Rt)&&(kn._spread=!0),kn.end=Object.assign({},Rt?D[Rt][1].start:Oe[1].end),D.splice(Rt||re,0,["exit",kn,Oe[2]]),re++,J++}if(Oe[1].type==="listItemPrefix"){const ur={type:"listItem",_spread:!1,start:Object.assign({},Oe[1].start),end:void 0};kn=ur,D.splice(re,0,["enter",ur,Oe[2]]),re++,J++,Vt=void 0,lr=!0}}}return D[B][1]._spread=At,J}function o(D,B){return J;function J(re){a.call(this,D(re),re),B&&B.call(this,re)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(D,B,J){this.stack[this.stack.length-1].children.push(D),this.stack.push(D),this.tokenStack.push([B,J||void 0]),D.position={start:gr(B.start),end:void 0}}function l(D){return B;function B(J){D&&D.call(this,J),u.call(this,J)}}function u(D,B){const J=this.stack.pop(),re=this.tokenStack.pop();if(re)re[0].type!==D.type&&(B?B.call(this,D,re[0]):(re[1]||dx).call(this,D,re[0]));else throw new Error("Cannot close `"+D.type+"` ("+Rs({start:D.start,end:D.end})+"): it’s not open");J.position.end=gr(D.end)}function d(){return mm(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(D){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(D),10),this.data.expectingFirstListItemValue=void 0}}function f(){const D=this.resume(),B=this.stack[this.stack.length-1];B.lang=D}function m(){const D=this.resume(),B=this.stack[this.stack.length-1];B.meta=D}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D.replace(/(\r?\n|\r)$/g,"")}function y(D){const B=this.resume(),J=this.stack[this.stack.length-1];J.label=B,J.identifier=gn(this.sliceSerialize(D)).toLowerCase()}function v(){const D=this.resume(),B=this.stack[this.stack.length-1];B.title=D}function S(){const D=this.resume(),B=this.stack[this.stack.length-1];B.url=D}function C(D){const B=this.stack[this.stack.length-1];if(!B.depth){const J=this.sliceSerialize(D).length;B.depth=J}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function A(D){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(D).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function M(D){const J=this.stack[this.stack.length-1].children;let re=J[J.length-1];(!re||re.type!=="text")&&(re=ic(),re.position={start:gr(D.start),end:void 0},J.push(re)),this.stack.push(re)}function P(D){const B=this.stack.pop();B.value+=this.sliceSerialize(D),B.position.end=gr(D.end)}function O(D){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=B.children[B.children.length-1];J.position.end=gr(D.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(B.type)&&(M.call(this,D),P.call(this,D))}function N(){this.data.atHardBreak=!0}function H(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function _(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function $(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function G(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=B,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function U(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=B,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function I(D){const B=this.sliceSerialize(D),J=this.stack[this.stack.length-2];J.label=tz(B),J.identifier=gn(B).toLowerCase()}function j(){const D=this.stack[this.stack.length-1],B=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const re=D.children;J.children=re}else J.alt=B}function k(){const D=this.resume(),B=this.stack[this.stack.length-1];B.url=D}function Y(){const D=this.resume(),B=this.stack[this.stack.length-1];B.title=D}function K(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function X(D){const B=this.resume(),J=this.stack[this.stack.length-1];J.label=B,J.identifier=gn(this.sliceSerialize(D)).toLowerCase(),this.data.referenceType="full"}function me(D){this.data.characterReferenceType=D.type}function le(D){const B=this.sliceSerialize(D),J=this.data.characterReferenceType;let re;J?(re=FT(B,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):re=gm(B);const de=this.stack[this.stack.length-1];de.value+=re}function se(D){const B=this.stack.pop();B.position.end=gr(D.end)}function st(D){P.call(this,D);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(D)}function at(D){P.call(this,D);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(D)}function yt(){return{type:"blockquote",children:[]}}function Pt(){return{type:"code",lang:null,meta:null,value:""}}function ar(){return{type:"inlineCode",value:""}}function bn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function _i(){return{type:"emphasis",children:[]}}function Fi(){return{type:"heading",depth:0,children:[]}}function ni(){return{type:"break"}}function zi(){return{type:"html",value:""}}function ri(){return{type:"image",title:null,url:"",alt:null}}function Bn(){return{type:"link",title:null,url:"",children:[]}}function Yo(D){return{type:"list",ordered:D.type==="listOrdered",start:null,spread:D._spread,children:[]}}function ii(D){return{type:"listItem",spread:D._spread,checked:null,children:[]}}function Aa(){return{type:"paragraph",children:[]}}function Vn(){return{type:"strong",children:[]}}function ic(){return{type:"text",value:""}}function oc(){return{type:"thematicBreak"}}}function gr(e){return{line:e.line,column:e.column,offset:e.offset}}function YT(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?YT(e,r):oz(e,r)}}function oz(e,t){let n;for(n in t)if(KT.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function dx(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Rs({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Rs({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Rs({start:t.start,end:t.end})+") is still open")}function sz(e){const t=this;t.parser=n;function n(r){return rz(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function az(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function lz(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function uz(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function cz(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function dz(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fz(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ko(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function hz(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pz(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function QT(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function mz(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return QT(e,t);const i={src:Ko(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function gz(e,t){const n={src:Ko(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function yz(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function vz(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return QT(e,t);const i={href:Ko(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function xz(e,t){const n={href:Ko(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function wz(e,t,n){const r=e.all(t),i=n?bz(n):XT(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function bz(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=XT(n[r])}return t}function XT(e){const t=e.spread;return t??e.children.length>1}function kz(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Sz(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Tz(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Cz(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ez(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=dm(t.children[1]),l=IT(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Pz(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const c=t.children[l],h={},f=s?s[l]:void 0;f&&(h.align=f);let m={type:"element",tagName:o,properties:h,children:[]};c&&(m.children=e.all(c),e.patch(c,m),m=e.applyData(c,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function Az(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const fx=9,hx=32;function Rz(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(px(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(px(t.slice(i),i>0,!1)),o.join("")}function px(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===fx||o===hx;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===fx||o===hx;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Iz(e,t){const n={type:"text",value:Rz(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Dz(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Mz={blockquote:az,break:lz,code:uz,delete:cz,emphasis:dz,footnoteReference:fz,heading:hz,html:pz,imageReference:mz,image:gz,inlineCode:yz,linkReference:vz,link:xz,listItem:wz,list:kz,paragraph:Sz,root:Tz,strong:Cz,table:Ez,tableCell:Az,tableRow:Pz,text:Iz,thematicBreak:Dz,toml:rl,yaml:rl,definition:rl,footnoteDefinition:rl};function rl(){}const JT=-1,tc=0,Ds=1,gu=2,vm=3,xm=4,wm=5,bm=6,ZT=7,eC=8,mx=typeof self=="object"?self:globalThis,Nz=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case tc:case JT:return n(s,i);case Ds:{const a=n([],i);for(const l of s)a.push(r(l));return a}case gu:{const a=n({},i);for(const[l,u]of s)a[r(l)]=r(u);return a}case vm:return n(new Date(s),i);case xm:{const{source:a,flags:l}=s;return n(new RegExp(a,l),i)}case wm:{const a=n(new Map,i);for(const[l,u]of s)a.set(r(l),r(u));return a}case bm:{const a=n(new Set,i);for(const l of s)a.add(r(l));return a}case ZT:{const{name:a,message:l}=s;return n(new mx[a](l),i)}case eC:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new mx[o](s),i)};return r},gx=e=>Nz(new Map,e)(0),Vi="",{toString:jz}={},{keys:Lz}=Object,ls=e=>{const t=typeof e;if(t!=="object"||!e)return[tc,t];const n=jz.call(e).slice(8,-1);switch(n){case"Array":return[Ds,Vi];case"Object":return[gu,Vi];case"Date":return[vm,Vi];case"RegExp":return[xm,Vi];case"Map":return[wm,Vi];case"Set":return[bm,Vi];case"DataView":return[Ds,n]}return n.includes("Array")?[Ds,n]:n.includes("Error")?[ZT,n]:[gu,n]},il=([e,t])=>e===tc&&(t==="function"||t==="symbol"),Oz=(e,t,n,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=ls(s);switch(a){case tc:{let d=s;switch(l){case"bigint":a=eC,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([JT],s)}return i([a,d],s)}case Ds:{if(l){let h=s;return l==="DataView"?h=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(s)),i([l,[...h]],s)}const d=[],c=i([a,d],s);for(const h of s)d.push(o(h));return c}case gu:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],c=i([a,d],s);for(const h of Lz(s))(e||!il(ls(s[h])))&&d.push([o(h),o(s[h])]);return c}case vm:return i([a,s.toISOString()],s);case xm:{const{source:d,flags:c}=s;return i([a,{source:d,flags:c}],s)}case wm:{const d=[],c=i([a,d],s);for(const[h,f]of s)(e||!(il(ls(h))||il(ls(f))))&&d.push([o(h),o(f)]);return c}case bm:{const d=[],c=i([a,d],s);for(const h of s)(e||!il(ls(h)))&&d.push(o(h));return c}}const{message:u}=s;return i([a,{name:l,message:u}],s)};return o},yx=(e,{json:t,lossy:n}={})=>{const r=[];return Oz(!(t||n),!!t,new Map,r)(e),r},yu=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?gx(yx(e,t)):structuredClone(e):(e,t)=>gx(yx(e,t));function _z(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Fz(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function zz(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||_z,r=e.options.footnoteBackLabel||Fz,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),h=Ko(c.toLowerCase());let f=0;const m=[],g=e.footnoteCounts.get(c);for(;g!==void 0&&++f<=g;){m.length>0&&m.push({type:"text",value:" "});let y=typeof n=="string"?n:n(l,f);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,f),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const y=w.children[w.children.length-1];y&&y.type==="text"?y.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...m)}else d.push(...m);const p={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(u,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...yu(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const nc=function(e){if(e==null)return $z;if(typeof e=="function")return rc(e);if(typeof e=="object")return Array.isArray(e)?Bz(e):Vz(e);if(typeof e=="string")return Uz(e);throw new Error("Expected function, string, or object as test")};function Bz(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=nc(e[n]);return rc(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function Vz(e){const t=e;return rc(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Uz(e){return rc(t);function t(n){return n&&n.type===e}}function rc(e){return t;function t(n,r,i){return!!(Hz(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function $z(){return!0}function Hz(e){return e!==null&&typeof e=="object"&&"type"in e}const tC=[],Wz=!0,sh=!1,qz="skip";function nC(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=nc(i),s=r?-1:1;a(e,void 0,[])();function a(l,u,d){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return h;function h(){let f=tC,m,g,w;if((!t||o(l,u,d[d.length-1]||void 0))&&(f=Gz(n(l,d)),f[0]===sh))return f;if("children"in l&&l.children){const p=l;if(p.children&&f[0]!==qz)for(g=(r?p.children.length:-1)+s,w=d.concat(p);g>-1&&g<p.children.length;){const y=p.children[g];if(m=a(y,g,w)(),m[0]===sh)return m;g=typeof m[1]=="number"?m[1]:g+s}}return f}}}function Gz(e){return Array.isArray(e)?e:typeof e=="number"?[Wz,e]:e==null?tC:[e]}function km(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),nC(e,o,a,i);function a(l,u){const d=u[u.length-1],c=d?d.children.indexOf(l):void 0;return s(l,c,d)}}const ah={}.hasOwnProperty,Kz={};function Yz(e,t){const n=t||Kz,r=new Map,i=new Map,o=new Map,s={...Mz,...n.handlers},a={all:u,applyData:Xz,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:Qz,wrap:Zz};return km(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();c.has(h)||c.set(h,d)}}),a;function l(d,c){const h=d.type,f=a.handlers[h];if(ah.call(a.handlers,h)&&f)return f(a,d,c);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in d){const{children:g,...w}=d,p=yu(w);return p.children=a.all(d),p}return yu(d)}return(a.options.unknownHandler||Jz)(a,d,c)}function u(d){const c=[];if("children"in d){const h=d.children;let f=-1;for(;++f<h.length;){const m=a.one(h[f],d);if(m){if(f&&h[f-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=vx(m.value)),!Array.isArray(m)&&m.type==="element")){const g=m.children[0];g&&g.type==="text"&&(g.value=vx(g.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function Qz(e,t){e.position&&(t.position=F4(e))}function Xz(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,yu(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Jz(e,t){const n=t.data||{},r="value"in t&&!(ah.call(n,"hProperties")||ah.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Zz(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function vx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function xx(e,t){const n=Yz(e,t),r=n.one(e,void 0),i=zz(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function e5(e,t){return e&&"run"in e?async function(n,r){const i=xx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return xx(n,{file:r,...e||t})}}function wx(e){if(e)throw e}var Pl=Object.prototype.hasOwnProperty,rC=Object.prototype.toString,bx=Object.defineProperty,kx=Object.getOwnPropertyDescriptor,Sx=function(t){return typeof Array.isArray=="function"?Array.isArray(t):rC.call(t)==="[object Array]"},Tx=function(t){if(!t||rC.call(t)!=="[object Object]")return!1;var n=Pl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Pl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Pl.call(t,i)},Cx=function(t,n){bx&&n.name==="__proto__"?bx(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ex=function(t,n){if(n==="__proto__")if(Pl.call(t,n)){if(kx)return kx(t,n).value}else return;return t[n]},t5=function e(){var t,n,r,i,o,s,a=arguments[0],l=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Ex(a,n),i=Ex(t,n),a!==i&&(d&&i&&(Tx(i)||(o=Sx(i)))?(o?(o=!1,s=r&&Sx(r)?r:[]):s=r&&Tx(r)?r:{},Cx(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&Cx(a,{name:n,newValue:i}));return a};const ld=xu(t5);function lh(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function n5(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...u){const d=e[++o];let c=-1;if(l){s(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,d?r5(d,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function r5(e,t){let n;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const Cn={basename:i5,dirname:o5,extname:s5,join:a5,sep:"/"};function i5(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Pa(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function o5(e){if(Pa(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function s5(e){Pa(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function a5(...e){let t=-1,n;for(;++t<e.length;)Pa(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":l5(n)}function l5(e){Pa(e);const t=e.codePointAt(0)===47;let n=u5(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function u5(e,t){let n="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function Pa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const c5={cwd:d5};function d5(){return"/"}function uh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function f5(e){if(typeof e=="string")e=new URL(e);else if(!uh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return h5(e)}function h5(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ud=["history","path","basename","stem","extname","dirname"];class iC{constructor(t){let n;t?uh(t)?n={path:t}:typeof t=="string"||p5(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":c5.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ud.length;){const o=ud[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ud.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Cn.basename(this.path):void 0}set basename(t){dd(t,"basename"),cd(t,"basename"),this.path=Cn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Cn.dirname(this.path):void 0}set dirname(t){Px(this.basename,"dirname"),this.path=Cn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Cn.extname(this.path):void 0}set extname(t){if(cd(t,"extname"),Px(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Cn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){uh(t)&&(t=f5(t)),dd(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Cn.basename(this.path,this.extname):void 0}set stem(t){dd(t,"stem"),cd(t,"stem"),this.path=Cn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ot(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function cd(e,t){if(e&&e.includes(Cn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Cn.sep+"`")}function dd(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Px(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function p5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const m5=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},g5={}.hasOwnProperty;class Sm extends m5{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=n5()}copy(){const t=new Sm;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ld(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(pd("data",this.frozen),this.namespace[t]=n,this):g5.call(this.namespace,t)&&this.namespace[t]||void 0:t?(pd("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ol(t),r=this.parser||this.Parser;return fd("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),fd("process",this.parser||this.Parser),hd("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=ol(t),l=r.parse(a);r.run(l,a,function(d,c,h){if(d||!c||!h)return u(d);const f=c,m=r.stringify(f,h);x5(m)?h.value=m:h.result=m,u(d,h)});function u(d,c){d||!c?s(d):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),fd("processSync",this.parser||this.Parser),hd("processSync",this.compiler||this.Compiler),this.process(t,i),Rx("processSync","process",n),r;function i(o,s){n=!0,wx(o),r=s}}run(t,n,r){Ax(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=ol(n);i.run(t,l,u);function u(d,c,h){const f=c||t;d?a(d):s?s(f):r(void 0,f,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Rx("runSync","run",r),i;function o(s,a){wx(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=ol(n),i=this.compiler||this.Compiler;return hd("stringify",i),Ax(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(pd("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;l(d,c)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=ld(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===u){h=c;break}if(h===-1)r.push([u,...d]);else if(d.length>0){let[f,...m]=d;const g=r[h][1];lh(g)&&lh(f)&&(f=ld(!0,g,f)),r[h]=[u,f,...m]}}}}const y5=new Sm().freeze();function fd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function pd(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ax(e){if(!lh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Rx(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ol(e){return v5(e)?e:new iC(e)}function v5(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function x5(e){return typeof e=="string"||w5(e)}function w5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const b5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ix=[],Dx={allowDangerousHtml:!0},k5=/^(https?|ircs?|mailto|xmpp)$/i,S5=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function T5(e){const t=C5(e),n=E5(e);return P5(t.runSync(t.parse(n),n),e)}function C5(e){const t=e.rehypePlugins||Ix,n=e.remarkPlugins||Ix,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Dx}:Dx;return y5().use(sz).use(n).use(e5,r).use(t)}function E5(e){const t=e.children||"",n=new iC;return typeof t=="string"&&(n.value=t),n}function P5(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||A5;for(const d of S5)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+b5+d.id,void 0);return km(e,u),$4(e,{Fragment:x.Fragment,components:i,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function u(d,c,h){if(d.type==="raw"&&h&&typeof c=="number")return s?h.children.splice(c,1):h.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let f;for(f in od)if(Object.hasOwn(od,f)&&Object.hasOwn(d.properties,f)){const m=d.properties[f],g=od[f];(g===null||g.includes(d.tagName))&&(d.properties[f]=l(String(m||""),f,d))}}if(d.type==="element"){let f=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!f&&r&&typeof c=="number"&&(f=!r(d,c,h)),f&&h&&typeof c=="number")return a&&d.children?h.children.splice(c,1,...d.children):h.children.splice(c,1),c}}}function A5(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||k5.test(e.slice(0,t))?e:""}function Mx(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function R5(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function I5(e,t,n){const i=nc((n||{}).ignore||[]),o=D5(t);let s=-1;for(;++s<o.length;)nC(e,"text",a);function a(u,d){let c=-1,h;for(;++c<d.length;){const f=d[c],m=h?h.children:void 0;if(i(f,m?m.indexOf(f):void 0,h))return;h=f}if(h)return l(u,d)}function l(u,d){const c=d[d.length-1],h=o[s][0],f=o[s][1];let m=0;const w=c.children.indexOf(u);let p=!1,y=[];h.lastIndex=0;let v=h.exec(u.value);for(;v;){const S=v.index,C={index:v.index,input:v.input,stack:[...d,u]};let T=f(...v,C);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1?h.lastIndex=S+1:(m!==S&&y.push({type:"text",value:u.value.slice(m,S)}),Array.isArray(T)?y.push(...T):T&&y.push(T),m=S+v[0].length,p=!0),!h.global)break;v=h.exec(u.value)}return p?(m<u.value.length&&y.push({type:"text",value:u.value.slice(m)}),c.children.splice(w,1,...y)):y=[u],w+y.length}}function D5(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([M5(i[0]),N5(i[1])])}return t}function M5(e){return typeof e=="string"?new RegExp(R5(e),"g"):e}function N5(e){return typeof e=="function"?e:function(){return e}}const md="phrasing",gd=["autolink","link","image","label"];function j5(){return{transforms:[V5],enter:{literalAutolink:O5,literalAutolinkEmail:yd,literalAutolinkHttp:yd,literalAutolinkWww:yd},exit:{literalAutolink:B5,literalAutolinkEmail:z5,literalAutolinkHttp:_5,literalAutolinkWww:F5}}}function L5(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:":",before:"[ps]",after:"\\/",inConstruct:md,notInConstruct:gd}]}}function O5(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function yd(e){this.config.enter.autolinkProtocol.call(this,e)}function _5(e){this.config.exit.autolinkProtocol.call(this,e)}function F5(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function z5(e){this.config.exit.autolinkEmail.call(this,e)}function B5(e){this.exit(e)}function V5(e){I5(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,U5],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),$5]],{ignore:["link","linkReference"]})}function U5(e,t,n,r,i){let o="";if(!oC(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!H5(n)))return!1;const s=W5(n+r);if(!s[0])return!1;const a={type:"link",title:null,url:o+t+s[0],children:[{type:"text",value:t+s[0]}]};return s[1]?[a,{type:"text",value:s[1]}]:a}function $5(e,t,n,r){return!oC(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function H5(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function W5(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Mx(e,"(");let o=Mx(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function oC(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ni(n)||Zu(n))&&(!t||n!==47)}sC.peek=eB;function q5(){this.buffer()}function G5(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function K5(){this.buffer()}function Y5(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Q5(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function X5(e){this.exit(e)}function J5(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Z5(e){this.exit(e)}function eB(){return"["}function sC(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const s=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),s(),o+=i.move("]"),o}function tB(){return{enter:{gfmFootnoteCallString:q5,gfmFootnoteCall:G5,gfmFootnoteDefinitionLabelString:K5,gfmFootnoteDefinition:Y5},exit:{gfmFootnoteCallString:Q5,gfmFootnoteCall:X5,gfmFootnoteDefinitionLabelString:J5,gfmFootnoteDefinition:Z5}}}function nB(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:sC},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,s){const a=o.createTracker(s);let l=a.move("[^");const u=o.enter("footnoteDefinition"),d=o.enter("label");return l+=a.move(o.safe(o.associationId(r),{before:l,after:"]"})),d(),l+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),l+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),t?aC:rB))),u(),l}}function rB(e,t,n){return t===0?e:aC(e,t,n)}function aC(e,t,n){return(n?"":"    ")+e}const iB=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];lC.peek=uB;function oB(){return{canContainEols:["delete"],enter:{strikethrough:aB},exit:{strikethrough:lB}}}function sB(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:iB}],handlers:{delete:lC}}}function aB(e){this.enter({type:"delete",children:[]},e)}function lB(e){this.exit(e)}function lC(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let s=i.move("~~");return s+=n.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move("~~"),o(),s}function uB(){return"~"}function cB(e){return e.length}function dB(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||cB,o=[],s=[],a=[],l=[];let u=0,d=-1;for(;++d<e.length;){const g=[],w=[];let p=-1;for(e[d].length>u&&(u=e[d].length);++p<e[d].length;){const y=fB(e[d][p]);if(n.alignDelimiters!==!1){const v=i(y);w[p]=v,(l[p]===void 0||v>l[p])&&(l[p]=v)}g.push(y)}s[d]=g,a[d]=w}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Nx(r[c]);else{const g=Nx(r);for(;++c<u;)o[c]=g}c=-1;const h=[],f=[];for(;++c<u;){const g=o[c];let w="",p="";g===99?(w=":",p=":"):g===108?w=":":g===114&&(p=":");let y=n.alignDelimiters===!1?1:Math.max(1,l[c]-w.length-p.length);const v=w+"-".repeat(y)+p;n.alignDelimiters!==!1&&(y=w.length+y+p.length,y>l[c]&&(l[c]=y),f[c]=y),h[c]=v}s.splice(1,0,h),a.splice(1,0,f),d=-1;const m=[];for(;++d<s.length;){const g=s[d],w=a[d];c=-1;const p=[];for(;++c<u;){const y=g[c]||"";let v="",S="";if(n.alignDelimiters!==!1){const C=l[c]-(w[c]||0),T=o[c];T===114?v=" ".repeat(C):T===99?C%2?(v=" ".repeat(C/2+.5),S=" ".repeat(C/2-.5)):(v=" ".repeat(C/2),S=v):S=" ".repeat(C)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&y==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(v),p.push(y),n.alignDelimiters!==!1&&p.push(S),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function fB(e){return e==null?"":String(e)}function Nx(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function hB(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const s=n.indentLines(n.containerFlow(e,o.current()),pB);return i(),s}function pB(e,t,n){return">"+(n?"":" ")+e}function mB(e,t){return jx(e,t.inConstruct,!0)&&!jx(e,t.notInConstruct,!1)}function jx(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Lx(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&mB(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function gB(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,s=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+t.length,r=n.indexOf(t,i);return s}function yB(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function vB(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function xB(e,t,n,r){const i=vB(n),o=e.value||"",s=i==="`"?"GraveAccent":"Tilde";if(yB(e,n)){const c=n.enter("codeIndented"),h=n.indentLines(o,wB);return c(),h}const a=n.createTracker(r),l=i.repeat(Math.max(gB(o,i)+1,3)),u=n.enter("codeFenced");let d=a.move(l);if(e.lang){const c=n.enter(`codeFencedLang${s}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${s}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),c()}return d+=a.move(`
`),o&&(d+=a.move(o+`
`)),d+=a.move(l),u(),d}function wB(e,t,n){return(n?"":"    ")+e}function Tm(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function bB(e,t,n,r){const i=Tm(n),o=i==='"'?"Quote":"Apostrophe",s=n.enter("definition");let a=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),s(),u}function kB(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function aa(e){return"&#x"+e.toString(16).toUpperCase()+";"}function vu(e,t,n){const r=Lo(e),i=Lo(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}uC.peek=SB;function uC(e,t,n,r){const i=kB(n),o=n.enter("emphasis"),s=n.createTracker(r),a=s.move(i);let l=s.move(n.containerPhrasing(e,{after:i,before:a,...s.current()}));const u=l.charCodeAt(0),d=vu(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(l=aa(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=vu(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+aa(c));const f=s.move(i);return o(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+f}function SB(e,t,n){return n.options.emphasis||"*"}function TB(e,t){let n=!1;return km(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,sh}),!!((!e.depth||e.depth<3)&&mm(e)&&(t.options.setext||n))}function CB(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(TB(e,n)){const d=n.enter("headingSetext"),c=n.enter("phrasing"),h=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),d(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const s="#".repeat(i),a=n.enter("headingAtx"),l=n.enter("phrasing");o.move(s+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=aa(u.charCodeAt(0))+u.slice(1)),u=u?s+" "+u:s,n.options.closeAtx&&(u+=" "+s),l(),a(),u}cC.peek=EB;function cC(e){return e.value||""}function EB(){return"<"}dC.peek=PB;function dC(e,t,n,r){const i=Tm(n),o=i==='"'?"Quote":"Apostrophe",s=n.enter("image");let a=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),u+=l.move(")"),s(),u}function PB(){return"!"}fC.peek=AB;function fC(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let s=n.enter("label");const a=n.createTracker(r);let l=a.move("![");const u=n.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const d=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=d,o(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function AB(){return"!"}hC.peek=RB;function hC(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const s=n.unsafe[o],a=n.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function RB(){return"`"}function pC(e,t){const n=mm(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}mC.peek=IB;function mC(e,t,n,r){const i=Tm(n),o=i==='"'?"Quote":"Apostrophe",s=n.createTracker(r);let a,l;if(pC(e,n)){const d=n.stack;n.stack=[],a=n.enter("autolink");let c=s.move("<");return c+=s.move(n.containerPhrasing(e,{before:c,after:">",...s.current()})),c+=s.move(">"),a(),n.stack=d,c}a=n.enter("link"),l=n.enter("label");let u=s.move("[");return u+=s.move(n.containerPhrasing(e,{before:u,after:"](",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function IB(e,t,n){return pC(e,n)?"<":"["}gC.peek=DB;function gC(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let s=n.enter("label");const a=n.createTracker(r);let l=a.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const d=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=d,o(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function DB(){return"["}function Cm(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function MB(e){const t=Cm(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function NB(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function yC(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function jB(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let s=e.ordered?NB(n):Cm(n);const a=e.ordered?s==="."?")":".":MB(n);let l=t&&n.bulletLastUsed?s===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),yC(n)===s&&d){let c=-1;for(;++c<e.children.length;){const h=e.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),n.bulletCurrent=s;const u=n.containerFlow(e,r);return n.bulletLastUsed=s,n.bulletCurrent=o,i(),u}function LB(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function OB(e,t,n,r){const i=LB(n);let o=n.bulletCurrent||Cm(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(s=Math.ceil(s/4)*4);const a=n.createTracker(r);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),d);return l(),u;function d(c,h,f){return h?(f?"":" ".repeat(s))+c:(f?o:o+" ".repeat(s-o.length))+c}}function _B(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),s=n.containerPhrasing(e,r);return o(),i(),s}const FB=nc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function zB(e,t,n,r){return(e.children.some(function(s){return FB(s)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function BB(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}vC.peek=VB;function vC(e,t,n,r){const i=BB(n),o=n.enter("strong"),s=n.createTracker(r),a=s.move(i+i);let l=s.move(n.containerPhrasing(e,{after:i,before:a,...s.current()}));const u=l.charCodeAt(0),d=vu(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(l=aa(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=vu(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+aa(c));const f=s.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+f}function VB(e,t,n){return n.options.strong||"*"}function UB(e,t,n,r){return n.safe(e.value,r)}function $B(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function HB(e,t,n){const r=(yC(n)+(n.options.ruleSpaces?" ":"")).repeat($B(n));return n.options.ruleSpaces?r.slice(0,-1):r}const xC={blockquote:hB,break:Lx,code:xB,definition:bB,emphasis:uC,hardBreak:Lx,heading:CB,html:cC,image:dC,imageReference:fC,inlineCode:hC,link:mC,linkReference:gC,list:jB,listItem:OB,paragraph:_B,root:zB,strong:vC,text:UB,thematicBreak:HB};function WB(){return{enter:{table:qB,tableData:Ox,tableHeader:Ox,tableRow:KB},exit:{codeText:YB,table:GB,tableData:vd,tableHeader:vd,tableRow:vd}}}function qB(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function GB(e){this.exit(e),this.data.inTable=void 0}function KB(e){this.enter({type:"tableRow",children:[]},e)}function vd(e){this.exit(e)}function Ox(e){this.enter({type:"tableCell",children:[]},e)}function YB(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,QB));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function QB(e,t){return t==="|"?t:e}function XB(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:s,tableCell:l,tableRow:a}};function s(f,m,g,w){return u(d(f,g,w),f.align)}function a(f,m,g,w){const p=c(f,g,w),y=u([p]);return y.slice(0,y.indexOf(`
`))}function l(f,m,g,w){const p=g.enter("tableCell"),y=g.enter("phrasing"),v=g.containerPhrasing(f,{...w,before:o,after:o});return y(),p(),v}function u(f,m){return dB(f,{align:m,alignDelimiters:r,padding:n,stringLength:i})}function d(f,m,g){const w=f.children;let p=-1;const y=[],v=m.enter("table");for(;++p<w.length;)y[p]=c(w[p],m,g);return v(),y}function c(f,m,g){const w=f.children;let p=-1;const y=[],v=m.enter("tableRow");for(;++p<w.length;)y[p]=l(w[p],f,m,g);return v(),y}function h(f,m,g){let w=xC.inlineCode(f,m,g);return g.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}function JB(){return{exit:{taskListCheckValueChecked:_x,taskListCheckValueUnchecked:_x,paragraph:eV}}}function ZB(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:tV}}}function _x(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function eV(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,s;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){s=a;break}}s===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function tV(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(s);let l=xC.listItem(e,t,n,{...r,...a.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+s}}function nV(){return[j5(),tB(),oB(),WB(),JB()]}function rV(e){return{extensions:[L5(),nB(e),sB(),XB(e),ZB()]}}const iV={tokenize:cV,partial:!0},wC={tokenize:dV,partial:!0},bC={tokenize:fV,partial:!0},kC={tokenize:hV,partial:!0},oV={tokenize:pV,partial:!0},SC={name:"wwwAutolink",tokenize:lV,previous:CC},TC={name:"protocolAutolink",tokenize:uV,previous:EC},sr={name:"emailAutolink",tokenize:aV,previous:PC},zn={};function sV(){return{text:zn}}let ai=48;for(;ai<123;)zn[ai]=sr,ai++,ai===58?ai=65:ai===91&&(ai=97);zn[43]=sr;zn[45]=sr;zn[46]=sr;zn[95]=sr;zn[72]=[sr,TC];zn[104]=[sr,TC];zn[87]=[sr,SC];zn[119]=[sr,SC];function aV(e,t,n){const r=this;let i,o;return s;function s(c){return!ch(c)||!PC.call(r,r.previous)||Em(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return ch(c)?(e.consume(c),a):c===64?(e.consume(c),l):n(c)}function l(c){return c===46?e.check(oV,d,u)(c):c===45||c===95||rt(c)?(o=!0,e.consume(c),l):d(c)}function u(c){return e.consume(c),i=!0,l}function d(c){return o&&i&&dt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function lV(e,t,n){const r=this;return i;function i(s){return s!==87&&s!==119||!CC.call(r,r.previous)||Em(r.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(iV,e.attempt(wC,e.attempt(bC,o),n),n)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(s)}}function uV(e,t,n){const r=this;let i="",o=!1;return s;function s(c){return(c===72||c===104)&&EC.call(r,r.previous)&&!Em(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(dt(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(c),l}return n(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):n(c)}function u(c){return c===null||mu(c)||ye(c)||Ni(c)||Zu(c)?n(c):e.attempt(wC,e.attempt(bC,d),n)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function cV(e,t,n){let r=0;return i;function i(s){return(s===87||s===119)&&r<3?(r++,e.consume(s),i):s===46&&r===3?(e.consume(s),o):n(s)}function o(s){return s===null?n(s):t(s)}}function dV(e,t,n){let r,i,o;return s;function s(u){return u===46||u===95?e.check(kC,l,a)(u):u===null||ye(u)||Ni(u)||u!==45&&Zu(u)?l(u):(o=!0,e.consume(u),s)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),s}function l(u){return i||r||!o?n(u):t(u)}}function fV(e,t){let n=0,r=0;return i;function i(s){return s===40?(n++,e.consume(s),i):s===41&&r<n?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(kC,t,o)(s):s===null||ye(s)||Ni(s)?t(s):(e.consume(s),i)}function o(s){return s===41&&r++,e.consume(s),i}}function hV(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||ye(a)||Ni(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||ye(a)||Ni(a)?t(a):r(a)}function o(a){return dt(a)?s(a):n(a)}function s(a){return a===59?(e.consume(a),r):dt(a)?(e.consume(a),s):n(a)}}function pV(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return rt(o)?n(o):t(o)}}function CC(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ye(e)}function EC(e){return!dt(e)}function PC(e){return!(e===47||ch(e))}function ch(e){return e===43||e===45||e===46||e===95||rt(e)}function Em(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const mV={tokenize:SV,partial:!0};function gV(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:wV,continuation:{tokenize:bV},exit:kV}},text:{91:{name:"gfmFootnoteCall",tokenize:xV},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:yV,resolveTo:vV}}}}function yV(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!s||!s._balanced)return n(l);const u=gn(r.sliceSerialize({start:s.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function vV(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function xV(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,s;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!s||c===null||c===91||ye(c))return n(c);if(c===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(gn(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ye(c)||(s=!0),o++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function wV(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,s=0,a;return l;function l(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(m)}function d(m){if(s>999||m===93&&!a||m===null||m===91||ye(m))return n(m);if(m===93){e.exit("chunkString");const g=e.exit("gfmFootnoteDefinitionLabelString");return o=gn(r.sliceSerialize(g)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return ye(m)||(a=!0),s++,e.consume(m),m===92?c:d}function c(m){return m===91||m===92||m===93?(e.consume(m),s++,d):d(m)}function h(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),i.includes(o)||i.push(o),ue(e,f,"gfmFootnoteDefinitionWhitespace")):n(m)}function f(m){return t(m)}}function bV(e,t,n){return e.check(Ea,t,e.attempt(mV,t,n))}function kV(e){e.exit("gfmFootnoteDefinition")}function SV(e,t,n){const r=this;return ue(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?t(o):n(o)}}function TV(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(s,a){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let u=l;for(;u--;)if(s[u][0]==="exit"&&s[u][1].type==="strikethroughSequenceTemporary"&&s[u][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[u][1].end.offset-s[u][1].start.offset){s[l][1].type="strikethroughSequence",s[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},s[u][1].start),end:Object.assign({},s[l][1].end)},c={type:"strikethroughText",start:Object.assign({},s[u][1].end),end:Object.assign({},s[l][1].start)},h=[["enter",d,a],["enter",s[u][1],a],["exit",s[u][1],a],["enter",c,a]],f=a.parser.constructs.insideSpan.null;f&&Ot(h,h.length,0,ec(f,s.slice(u+1,l),a)),Ot(h,h.length,0,[["exit",c,a],["enter",s[l][1],a],["exit",s[l][1],a],["exit",d,a]]),Ot(s,u-1,l-u+3,h),l=u+h.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function o(s,a,l){const u=this.previous,d=this.events;let c=0;return h;function h(m){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(m):(s.enter("strikethroughSequenceTemporary"),f(m))}function f(m){const g=Lo(u);if(m===126)return c>1?l(m):(s.consume(m),c++,f);if(c<2&&!n)return l(m);const w=s.exit("strikethroughSequenceTemporary"),p=Lo(m);return w._open=!p||p===2&&!!g,w._close=!g||g===2&&!!p,a(m)}}}class CV{constructor(){this.map=[]}add(t,n,r){EV(this,t,n,r)}consume(t){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function EV(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function PV(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function AV(){return{flow:{null:{name:"table",tokenize:RV,resolveAll:IV}}}}function RV(e,t,n){const r=this;let i=0,o=0,s;return a;function a(P){let O=r.events.length-1;for(;O>-1;){const _=r.events[O][1].type;if(_==="lineEnding"||_==="linePrefix")O--;else break}const N=O>-1?r.events[O][1].type:null,H=N==="tableHead"||N==="tableRow"?T:l;return H===T&&r.parser.lazy[r.now().line]?n(P):H(P)}function l(P){return e.enter("tableHead"),e.enter("tableRow"),u(P)}function u(P){return P===124||(s=!0,o+=1),d(P)}function d(P){return P===null?n(P):Q(P)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),f):n(P):ie(P)?ue(e,d,"whitespace")(P):(o+=1,s&&(s=!1,i+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),s=!0,d):(e.enter("data"),c(P)))}function c(P){return P===null||P===124||ye(P)?(e.exit("data"),d(P)):(e.consume(P),P===92?h:c)}function h(P){return P===92||P===124?(e.consume(P),c):c(P)}function f(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(P):(e.enter("tableDelimiterRow"),s=!1,ie(P)?ue(e,m,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):m(P))}function m(P){return P===45||P===58?w(P):P===124?(s=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),g):C(P)}function g(P){return ie(P)?ue(e,w,"whitespace")(P):w(P)}function w(P){return P===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),p):P===45?(o+=1,p(P)):P===null||Q(P)?S(P):C(P)}function p(P){return P===45?(e.enter("tableDelimiterFiller"),y(P)):C(P)}function y(P){return P===45?(e.consume(P),y):P===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(P))}function v(P){return ie(P)?ue(e,S,"whitespace")(P):S(P)}function S(P){return P===124?m(P):P===null||Q(P)?!s||i!==o?C(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(P)):C(P)}function C(P){return n(P)}function T(P){return e.enter("tableRow"),A(P)}function A(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),A):P===null||Q(P)?(e.exit("tableRow"),t(P)):ie(P)?ue(e,A,"whitespace")(P):(e.enter("data"),R(P))}function R(P){return P===null||P===124||ye(P)?(e.exit("data"),A(P)):(e.consume(P),P===92?M:R)}function M(P){return P===92||P===124?(e.consume(P),R):R(P)}}function IV(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],s=[0,0,0,0],a=!1,l=0,u,d,c;const h=new CV;for(;++n<e.length;){const f=e[n],m=f[1];f[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(Fx(h,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",u,t]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],s=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",d,t]])),i=m.type==="tableDelimiterRow"?2:d?3:1):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(r=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],c=sl(h,t,o,i,void 0,c),o=[0,0,0,0]),s[2]=n)):m.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(s[0]=s[1],c=sl(h,t,o,i,void 0,c)),o=s,s=[o[1],n,0,0])):m.type==="tableHead"?(a=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,o[1]!==0?(s[0]=s[1],c=sl(h,t,o,i,n,c)):s[1]!==0&&(c=sl(h,t,s,i,n,c)),i=0):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(s[3]=n)}for(l!==0&&Fx(h,t,l,u,d),h.consume(t.events),n=-1;++n<t.events.length;){const f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=PV(t.events,n))}return e}function sl(e,t,n,r,i,o){const s=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Ui(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const l=Ui(t.events,n[1]);if(o={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=Ui(t.events,n[2]),d=Ui(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const h=t.events[n[2]],f=t.events[n[3]];if(h[1].end=Object.assign({},f[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,g=n[3]-n[2]-1;e.add(m,g,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},Ui(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function Fx(e,t,n,r,i){const o=[],s=Ui(t.events,n);i&&(i.end=Object.assign({},s),o.push(["exit",i,t])),r.end=Object.assign({},s),o.push(["exit",r,t]),e.add(n+1,0,o)}function Ui(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const DV={name:"tasklistCheck",tokenize:NV};function MV(){return{text:{91:DV}}}function NV(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return ye(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):n(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(l)}function a(l){return Q(l)?t(l):ie(l)?e.check({tokenize:jV},t,n)(l):n(l)}}function jV(e,t,n){return ue(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function LV(e){return _T([sV(),gV(),TV(e),AV(),MV()])}const OV={};function _V(e){const t=this,n=e||OV,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(LV(n)),o.push(nV()),s.push(rV(n))}function Al(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function AC({content:e,className:t,skipFirstH1:n=!1}){const{theme:r}=Xb();let i=!0;return x.jsx("div",{className:Ft("prose-docs",t),children:x.jsx(T5,{remarkPlugins:[_V],components:{h1:({children:o,...s})=>{if(n&&i)return i=!1,null;const a=Al(String(o));return x.jsx("h1",{id:a,...s,children:o})},h2:({children:o,...s})=>{const a=Al(String(o));return x.jsx("h2",{id:a,...s,children:o})},h3:({children:o,...s})=>{const a=Al(String(o));return x.jsx("h3",{id:a,...s,children:o})},code:({className:o,children:s,...a})=>{const l=/language-(\w+)/.exec(o||"");return l?x.jsx(FV,{language:l[1],theme:r,children:String(s).replace(/\n$/,"")}):x.jsx("code",{...a,children:s})},a:({href:o,children:s,...a})=>x.jsx("a",{href:o,target:o!=null&&o.startsWith("http")?"_blank":void 0,rel:o!=null&&o.startsWith("http")?"noopener noreferrer":void 0,...a,children:s})},children:e})})}function FV({language:e,children:t,theme:n}){const[r,i]=b.useState(!1),o=async()=>{await navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)};return x.jsxs("div",{className:"relative group",children:[x.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[x.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded",children:e}),x.jsx("button",{onClick:o,className:"p-1.5 rounded bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Copy code",children:r?x.jsx(s2,{className:"h-3.5 w-3.5"}):x.jsx(d2,{className:"h-3.5 w-3.5"})})]}),x.jsx("pre",{className:"bg-muted p-4 rounded-lg overflow-x-auto text-sm max-w-full",children:x.jsx("code",{className:"block whitespace-pre-wrap break-all",children:t})})]})}function zV(e){const t=/^(#{2,3})\s+(.+)$/gm,n=[];let r;for(;(r=t.exec(e))!==null;)n.push({id:Al(r[2]),text:r[2],level:r[1].length});return n}const zx=Object.assign({"/src/content/docs/introduction/welcome.md":LS,"/src/content/docs/leetcode/can-place-flowers.md":OS,"/src/content/docs/leetcode/gcd-strings.md":_S,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":FS,"/src/content/docs/leetcode/kids-with-candies.md":zS,"/src/content/docs/leetcode/merge-string-alternatively.md":BS,"/src/content/docs/leetcode/product-of-array-except-self.md":VS,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":US,"/src/content/docs/leetcode/reverse-words-in-string.md":$S,"/src/content/docs/leetcode/string-compression.md":HS,"/src/content/docs/rest-api/api-doc-strategy.md":WS,"/src/content/docs/rest-api/authentication-and-authorization.md":qS,"/src/content/docs/rest-api/error-handling.md":GS,"/src/content/docs/rest-api/http-basics.md":KS,"/src/content/docs/rest-api/http-status-codes.md":YS,"/src/content/docs/rest-api/optimization.md":QS,"/src/content/docs/rest-api/pagination.md":XS,"/src/content/docs/rest-api/rate-limiting.md":JS,"/src/content/docs/rest-api/real-patterns.md":ZS,"/src/content/docs/rest-api/request-response-format.md":eT,"/src/content/docs/rest-api/resource-design.md":tT,"/src/content/docs/rest-api/rest-api-fundamentals.md":nT,"/src/content/docs/rest-api/security.md":rT,"/src/content/docs/rest-api/testing-reat-api.md":iT,"/src/content/docs/rest-api/validation.md":oT,"/src/content/docs/rest-api/versioning.md":sT,"/src/content/docs/tutorials/connect-mongodb.md":aT,"/src/content/docs/tutorials/create-basic-rest-api.md":lT,"/src/content/docs/tutorials/create-db-table.md":uT,"/src/content/docs/tutorials/handle-errors-in-java.md":cT,"/src/content/docs/tutorials/install-git.md":dT,"/src/content/docs/tutorials/set-up-git.md":fT,"/src/content/docs/tutorials/test-api.md":hT});function BV(){const e={};return Object.keys(zx).forEach(t=>{const i=t.split("/")[5].replace(".md","");e[i]=zx[t]}),e}const VV=BV();function Bx(){const{slug:e}=qb(),t=e||$v()||"introduction",n=kT(t),r=VV[t];if(!n||!r){const u=$v();return x.jsx(Af,{to:`/docs/${u}`,replace:!0})}const i=zV(r),o=Ei.categories.flatMap(u=>u.items),s=o.findIndex(u=>u.slug===t),a=s>0?o[s-1]:null,l=s<o.length-1?o[s+1]:null;return x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Sa,{}),x.jsx("main",{className:"flex-1 pt-nav",children:x.jsx(q_,{headings:i,children:x.jsxs(ae.article,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[x.jsxs("nav",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-6",children:[x.jsx(We,{to:"/docs",className:"hover:text-foreground transition-colors",children:"Docs"}),x.jsx("span",{children:"/"}),x.jsx("span",{className:"text-foreground",children:n.title})]}),x.jsx(AC,{content:r}),x.jsxs("nav",{className:"mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a?x.jsx(Ne,{asChild:!0,variant:"outline",className:"justify-start h-auto py-4 px-4 min-w-0",children:x.jsxs(We,{to:`/docs/${a.slug}`,children:[x.jsx(l2,{className:"h-4 w-4 mr-2 flex-shrink-0"}),x.jsxs("div",{className:"text-left min-w-0",children:[x.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Previous"}),x.jsx("div",{className:"font-medium truncate",children:a.title})]})]})}):x.jsx("div",{}),l&&x.jsx(Ne,{asChild:!0,variant:"outline",className:"justify-end h-auto py-4 px-4 min-w-0",children:x.jsxs(We,{to:`/docs/${l.slug}`,children:[x.jsxs("div",{className:"text-right min-w-0",children:[x.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Next"}),x.jsx("div",{className:"font-medium truncate",children:l.title})]}),x.jsx(u2,{className:"h-4 w-4 ml-2 flex-shrink-0"})]})})]})]})})}),x.jsx(Ta,{})]})}function UV(){const[e,t]=b.useState(null),[n,r]=b.useState("newest"),i=U_(),o=b.useMemo(()=>{let a=[...am];return e&&(a=a.filter(l=>l.tags.includes(e))),a.sort((l,u)=>{const d=new Date(l.date).getTime(),c=new Date(u.date).getTime();return n==="newest"?c-d:d-c}),a},[e,n]),s=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Sa,{}),x.jsx("main",{className:"flex-1 pt-nav",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[x.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-2xl mb-12",children:[x.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Blog"}),x.jsx("p",{className:"text-lg text-muted-foreground",children:"Thoughts on technical writing, documentation strategy, and developer experience."})]}),x.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"flex flex-col sm:flex-row gap-4 mb-8",children:[x.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[x.jsx(h2,{className:"h-4 w-4 text-muted-foreground"}),x.jsx(Ne,{variant:e===null?"secondary":"ghost",size:"sm",onClick:()=>t(null),children:"All"}),i.map(a=>x.jsx(Ne,{variant:e===a?"secondary":"ghost",size:"sm",onClick:()=>t(a),children:a},a))]}),x.jsxs("div",{className:"flex items-center gap-2 sm:ml-auto",children:[x.jsx("span",{className:"text-sm text-muted-foreground",children:"Sort:"}),x.jsx(Ne,{variant:n==="newest"?"secondary":"ghost",size:"sm",onClick:()=>r("newest"),children:"Newest"}),x.jsx(Ne,{variant:n==="oldest"?"secondary":"ghost",size:"sm",onClick:()=>r("oldest"),children:"Oldest"})]})]}),x.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:o.map((a,l)=>x.jsx(ae.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1+l*.05},className:"group",children:x.jsxs(We,{to:`/blog/${a.slug}`,className:"block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[x.jsx("div",{className:"flex flex-wrap gap-1 mb-3",children:a.tags.map(u=>x.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",children:[x.jsx(W1,{className:"h-3 w-3"}),u]},u))}),x.jsx("h2",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2",children:a.title}),x.jsx("div",{className:"flex items-center gap-4 text-xs text-muted-foreground mt-auto",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(V1,{className:"h-3.5 w-3.5"}),s(a.date)]})})]})},a.slug))}),o.length===0&&x.jsxs("div",{className:"text-center py-12",children:[x.jsxs("p",{className:"text-muted-foreground",children:['No posts found for "',e,'"']}),x.jsx(Ne,{variant:"link",onClick:()=>t(null),className:"mt-2",children:"Clear filter"})]})]})}),x.jsx(Ta,{})]})}const Vx=Object.assign({"/src/content/blogs/design-before-implementation.md":pT,"/src/content/blogs/documentation-as-code.md":mT,"/src/content/blogs/error-handling.md":gT,"/src/content/blogs/impact-of-naming.md":yT,"/src/content/blogs/readme-files.md":vT,"/src/content/blogs/scalability.md":xT,"/src/content/blogs/writing-effective-api-documentation.md":wT});function $V(e){const t=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,n=e.match(t);if(!n)return{frontmatter:{},body:e};const r=n[1],i=n[2],o={};return r.split(`
`).forEach(s=>{const[a,...l]=s.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const c=d.replace(/'/g,'"');o[a.trim()]=JSON.parse(c)}else o[a.trim()]=d}}),{frontmatter:o,body:i}}function HV(){const e={};return Object.keys(Vx).forEach(t=>{const r=t.split("/").pop().replace(".md",""),{body:i}=$V(Vx[t]);e[r]=i}),e}const WV=HV();function qV(){const{slug:e}=qb();if(!e)return x.jsx(Af,{to:"/blog",replace:!0});const t=V_(e),n=WV[e];if(!t||!n)return x.jsx(Af,{to:"/blog",replace:!0});const r=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i=window.location.href,o=`${t.title} - TechWriter Portfolio`;return x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Sa,{}),x.jsx("main",{className:"flex-1 pt-nav",children:x.jsxs("article",{className:"container mx-auto px-4 lg:px-8 py-12",children:[x.jsx(ae.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"mb-8",children:x.jsx(Ne,{asChild:!0,variant:"ghost",size:"sm",className:"gap-2",children:x.jsxs(We,{to:"/blog",children:[x.jsx(o2,{className:"h-4 w-4"}),"Back to Blog"]})})}),x.jsxs(ae.header,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-3xl mx-auto mb-12",children:[x.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.tags.map(s=>x.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary",children:[x.jsx(W1,{className:"h-3.5 w-3.5"}),s]},s))}),x.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 leading-tight",children:t.title}),x.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border",children:[x.jsxs("span",{className:"flex items-center gap-2",children:[x.jsx(V1,{className:"h-4 w-4"}),r(t.date)]}),x.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[x.jsxs("span",{className:"flex items-center gap-1.5",children:[x.jsx(v2,{className:"h-4 w-4"}),"Share:"]}),x.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on Twitter",children:x.jsx(b2,{className:"h-4 w-4"})}),x.jsx("a",{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on LinkedIn",children:x.jsx(fp,{className:"h-4 w-4"})})]})]})]}),x.jsx(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"max-w-3xl mx-auto",children:x.jsx(AC,{content:n})}),x.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"max-w-3xl mx-auto mt-16 p-8 rounded-xl bg-card border border-border text-center",children:[x.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Enjoyed this article?"}),x.jsx("p",{className:"text-muted-foreground mb-6",children:"Explore more technical writing insights and documentation samples."}),x.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[x.jsx(Ne,{asChild:!0,children:x.jsx(We,{to:"/blog",children:"More Articles"})}),x.jsx(Ne,{asChild:!0,variant:"outline",children:x.jsx(We,{to:"/docs",children:"View Documentation"})})]})]})]})}),x.jsx(Ta,{})]})}const GV=[{icon:S2,title:"User-First",description:"Every piece of documentation starts with understanding the reader's goals and pain points."},{icon:p2,title:"Clarity Over Completeness",description:"Better to explain one thing perfectly than ten things poorly. Focus enables mastery."},{icon:dp,title:"Code That Works",description:"Every example is tested, every snippet runs. Trust is built through reliability."},{icon:ya,title:"Progressive Disclosure",description:"Layer complexity appropriately. Quick answers first, deep dives available."}],KV=["API Documentation","Developer Guides","SDK Documentation","Markdown/MDX","Docs-as-Code","Technical Editing","Content Strategy","Developer Experience","Git/GitHub","React/JavaScript","Java","SpringBoot","AWS","MongoDB","REST API","SDLC","JDBC","Data Structure & Algorithms","Postman"],YV=[{title:"REST API Complete Guide",description:"A single, structured guide covering REST fundamentals, real-world API design, best practices, and common mistakes — built for developers who want clarity, not confusion.",link:"/docs/rest-api-fundamentals"},{title:"LeetCode 75 (Hard) Mastery",description:"A pattern-driven walkthrough of the toughest LeetCode problems, focused on deep understanding, optimal solutions, and interview-ready thinking.",link:"/docs/merge-string-alternatively"},{title:"Engineering Blogs & Insights",description:"Clear, practical writing on software engineering, problem-solving, and real lessons learned while building and learning — no fluff, just signal.",link:"/blog"}],QV={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},xd={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function XV(){return x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Sa,{}),x.jsxs("main",{className:"flex-1 pt-nav",children:[x.jsx("section",{className:"container mx-auto px-4 lg:px-8 py-16 md:py-24",children:x.jsxs(ae.div,{variants:QV,initial:"hidden",animate:"visible",className:"max-w-3xl",children:[x.jsx(ae.h1,{variants:xd,className:"text-4xl md:text-5xl font-bold mb-6",children:"About Me"}),x.jsxs(ae.div,{variants:xd,className:"text-lg text-muted-foreground space-y-4 mb-8",children:[x.jsxs("p",{children:["I'm a ",x.jsx("span",{className:"text-foreground font-medium",children:"B.Tech graduate"})," with a strong interest in technical writing and documentation. I enjoy breaking down complex technical concepts and presenting them in a clear, structured way."]}),x.jsxs("p",{children:["I’m building experience in areas like ",x.jsx("span",{className:"text-foreground font-medium",children:"API documentation, developer guides, and technical content"}),", with a focus on writing documentation that’s accurate, easy to follow, and useful for developers."]})]}),x.jsxs(ae.div,{variants:xd,className:"flex flex-wrap gap-4",children:[x.jsx(Ne,{asChild:!0,className:"gap-2",children:x.jsxs("a",{href:"#contact",children:[x.jsx(vf,{className:"h-4 w-4"}),"Get in Touch"]})}),x.jsx(Ne,{asChild:!0,variant:"outline",className:"gap-2",children:x.jsxs("a",{href:"/resume.html",target:"_blank",rel:"noopener noreferrer",children:[x.jsx(f2,{className:"h-4 w-4"}),"View Resume"]})})]})]})}),x.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[x.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Documentation Philosophy"}),x.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Great documentation isn't just about explaining features—it's about empowering users to succeed. These principles guide every document I create."})]}),x.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:GV.map((e,t)=>x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},className:"flex gap-4 p-6 rounded-xl bg-background border border-border",children:[x.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",children:x.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-semibold mb-1",children:e.title}),x.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},e.title))})]})}),x.jsx("section",{className:"py-16",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[x.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-8",children:x.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Skills & Expertise"})}),x.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap gap-3",children:KV.map(e=>x.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium",children:[x.jsx(c2,{className:"h-4 w-4 text-primary"}),e]},e))})]})}),x.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:x.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[x.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Writing Samples"}),x.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Explore documentation samples that demonstrate my approach to technical writing."})]}),x.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:YV.map((e,t)=>x.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},children:x.jsxs(We,{to:e.link,className:"block h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group",children:[x.jsx("h3",{className:"font-semibold mb-2 group-hover:text-primary transition-colors",children:e.title}),x.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:e.description}),x.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-primary font-medium",children:["View Sample",x.jsx(yf,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform"})]})]})},e.title))})]})}),x.jsx("section",{id:"contact",className:"py-16",children:x.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:x.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"max-w-2xl mx-auto text-center",children:[x.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Let's Connect"}),x.jsx("p",{className:"text-muted-foreground mb-8",children:"Interested in working together? I'm always open to discussing new opportunities, documentation projects, or just chatting about technical writing."}),x.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[x.jsx("a",{href:"https://github.com/Rucha-1111/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"GitHub",children:x.jsx(U1,{className:"h-5 w-5"})}),x.jsx("a",{href:"https://www.linkedin.com/in/rucha-gade/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"LinkedIn",children:x.jsx(fp,{className:"h-5 w-5"})})]}),x.jsx(Ne,{asChild:!0,size:"lg",className:"glow",children:x.jsxs("a",{href:"mailto:ruchagade20@gmail.com",className:"gap-2",children:[x.jsx(vf,{className:"h-4 w-4"}),"ruchagade20@gmail.com"]})})]})})})]}),x.jsx(Ta,{})]})}const JV=()=>{const e=or();return b.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),x.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),x.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),x.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},ZV=new qD,eU=()=>x.jsx(KD,{client:ZV,children:x.jsx(KM,{children:x.jsxs(kD,{children:[x.jsx(oR,{}),x.jsx(_R,{}),x.jsxs(HM,{basename:"/Docs",children:[x.jsx(YM,{}),x.jsxs(_M,{children:[x.jsx(vr,{path:"/",element:x.jsx(O_,{})}),x.jsx(vr,{path:"/docs",element:x.jsx(Bx,{})}),x.jsx(vr,{path:"/docs/:slug",element:x.jsx(Bx,{})}),x.jsx(vr,{path:"/blog",element:x.jsx(UV,{})}),x.jsx(vr,{path:"/blog/:slug",element:x.jsx(qV,{})}),x.jsx(vr,{path:"/about",element:x.jsx(XV,{})}),x.jsx(vr,{path:"*",element:x.jsx(JV,{})})]})]})]})})});c1(document.getElementById("root")).render(x.jsx(eU,{}));
