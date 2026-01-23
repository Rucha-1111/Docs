var Im=e=>{throw TypeError(e)};var ac=(e,t,n)=>t.has(e)||Im("Cannot "+n);var L=(e,t,n)=>(ac(e,t,"read from private field"),n?n.call(e):t.get(e)),fe=(e,t,n)=>t.has(e)?Im("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ee=(e,t,n,r)=>(ac(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Je=(e,t,n)=>(ac(e,t,"access private method"),n);var Ia=(e,t,n,r)=>({set _(i){ee(e,t,i,n)},get _(){return L(e,t,r)}});function NE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qw={exports:{}},xu={},Jw={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),ME=Symbol.for("react.portal"),LE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),_E=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),UE=Symbol.for("react.memo"),HE=Symbol.for("react.lazy"),Rm=Symbol.iterator;function $E(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var Xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zw=Object.assign,ex={};function Ls(e,t,n){this.props=e,this.context=t,this.refs=ex,this.updater=n||Xw}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tx(){}tx.prototype=Ls.prototype;function dh(e,t,n){this.props=e,this.context=t,this.refs=ex,this.updater=n||Xw}var fh=dh.prototype=new tx;fh.constructor=dh;Zw(fh,Ls.prototype);fh.isPureReactComponent=!0;var jm=Array.isArray,nx=Object.prototype.hasOwnProperty,hh={current:null},rx={key:!0,ref:!0,__self:!0,__source:!0};function ix(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)nx.call(t,r)&&!rx.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:e,key:s,ref:o,props:i,_owner:hh.current}}function WE(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ph(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function qE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dm=/\/+/g;function lc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qE(""+e.key):t.toString(36)}function al(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ca:case ME:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+lc(o,0):r,jm(i)?(n="",e!=null&&(n=e.replace(Dm,"$&/")+"/"),al(i,t,n,"",function(u){return u})):i!=null&&(ph(i)&&(i=WE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jm(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+lc(s,a);o+=al(s,t,n,l,i)}else if(l=$E(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+lc(s,a++),o+=al(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(e,t,n){if(e==null)return e;var r=[],i=0;return al(e,r,"","",function(s){return t.call(n,s,i++)}),r}function GE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},ll={transition:null},KE={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:hh};function sx(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ra,forEach:function(e,t,n){Ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ra(e,function(){t++}),t},toArray:function(e){return Ra(e,function(t){return t})||[]},only:function(e){if(!ph(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Ls;se.Fragment=LE;se.Profiler=_E;se.PureComponent=dh;se.StrictMode=OE;se.Suspense=VE;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE;se.act=sx;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zw({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=hh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)nx.call(t,l)&&!rx.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ca,type:e.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(e){return e={$$typeof:zE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:FE,_context:e},e.Consumer=e};se.createElement=ix;se.createFactory=function(e){var t=ix.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:BE,render:e}};se.isValidElement=ph;se.lazy=function(e){return{$$typeof:HE,_payload:{_status:-1,_result:e},_init:GE}};se.memo=function(e,t){return{$$typeof:UE,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=ll.transition;ll.transition={};try{e()}finally{ll.transition=t}};se.unstable_act=sx;se.useCallback=function(e,t){return mt.current.useCallback(e,t)};se.useContext=function(e){return mt.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};se.useEffect=function(e,t){return mt.current.useEffect(e,t)};se.useId=function(){return mt.current.useId()};se.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return mt.current.useMemo(e,t)};se.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};se.useRef=function(e){return mt.current.useRef(e)};se.useState=function(e){return mt.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return mt.current.useTransition()};se.version="18.3.1";Jw.exports=se;var b=Jw.exports;const V=wu(b),ox=NE({__proto__:null,default:V},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=b,QE=Symbol.for("react.element"),JE=Symbol.for("react.fragment"),XE=Object.prototype.hasOwnProperty,ZE=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eC={key:!0,ref:!0,__self:!0,__source:!0};function ax(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)XE.call(t,r)&&!eC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:QE,type:e,key:s,ref:o,props:i,_owner:ZE.current}}xu.Fragment=JE;xu.jsx=ax;xu.jsxs=ax;Qw.exports=xu;var w=Qw.exports,lx={exports:{}},zt={},ux={exports:{}},cx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var k=R.length;R.push(M);e:for(;0<k;){var Y=k-1>>>1,K=R[Y];if(0<i(K,M))R[Y]=M,R[k]=K,k=Y;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],k=R.pop();if(k!==M){R[0]=k;e:for(var Y=0,K=R.length,C=K>>>1;Y<C;){var J=2*(Y+1)-1,me=R[J],le=J+1,oe=R[le];if(0>i(me,k))le<K&&0>i(oe,me)?(R[Y]=oe,R[le]=k,Y=le):(R[Y]=me,R[J]=k,Y=J);else if(le<K&&0>i(oe,k))R[Y]=oe,R[le]=k,Y=le;else break e}}return M}function i(R,M){var k=R.sortIndex-M.sortIndex;return k!==0?k:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,f=!1,m=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function S(R){if(g=!1,v(R),!m)if(n(l)!==null)m=!0,G(E);else{var M=n(u);M!==null&&U(S,M.startTime-R)}}function E(R,M){m=!1,g&&(g=!1,p(I),I=-1),f=!0;var k=h;try{for(v(M),c=n(l);c!==null&&(!(c.expirationTime>M)||R&&!O());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,h=c.priorityLevel;var K=Y(c.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(l)&&r(l),v(M)}else r(l);c=n(l)}if(c!==null)var C=!0;else{var J=n(u);J!==null&&U(S,J.startTime-M),C=!1}return C}finally{c=null,h=k,f=!1}}var T=!1,A=null,I=-1,D=5,P=-1;function O(){return!(e.unstable_now()-P<D)}function N(){if(A!==null){var R=e.unstable_now();P=R;var M=!0;try{M=A(!0,R)}finally{M?$():(T=!1,A=null)}}else T=!1}var $;if(typeof y=="function")$=function(){y(N)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,H=_.port2;_.port1.onmessage=N,$=function(){H.postMessage(null)}}else $=function(){x(N,0)};function G(R){A=R,T||(T=!0,$())}function U(R,M){I=x(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,G(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var k=h;h=M;try{return R()}finally{h=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=h;h=R;try{return M()}finally{h=k}},e.unstable_scheduleCallback=function(R,M,k){var Y=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,R={id:d++,callback:M,priorityLevel:R,startTime:k,expirationTime:K,sortIndex:-1},k>Y?(R.sortIndex=k,t(u,R),n(l)===null&&R===n(u)&&(g?(p(I),I=-1):g=!0,U(S,k-Y))):(R.sortIndex=K,t(l,R),m||f||(m=!0,G(E))),R},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(R){var M=h;return function(){var k=h;h=M;try{return R.apply(this,arguments)}finally{h=k}}}})(cx);ux.exports=cx;var tC=ux.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nC=b,_t=tC;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,Do={};function Mi(e,t){Ss(e,t),Ss(e+"Capture",t)}function Ss(e,t){for(Do[e]=t,e=0;e<t.length;e++)dx.add(t[e])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,rC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},Mm={};function iC(e){return xd.call(Mm,e)?!0:xd.call(Nm,e)?!1:rC.test(e)?Mm[e]=!0:(Nm[e]=!0,!1)}function sC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oC(e,t,n,r){if(t===null||typeof t>"u"||sC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function gh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mh,gh);Qe[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yh(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oC(t,n,i,r)&&(n=null),r||i===null?iC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=nC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),hx=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),px=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Ys(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,uc;function lo(e){if(uc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||""}return`
`+uc+e}var cc=!1;function dc(e,t){if(!e||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function aC(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=dc(e.type,!1),e;case 11:return e=dc(e.type.render,!1),e;case 1:return e=dc(e.type,!0),e;default:return""}}function Td(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $i:return"Fragment";case Hi:return"Portal";case bd:return"Profiler";case vh:return"StrictMode";case kd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hx:return(e.displayName||"Context")+".Consumer";case fx:return(e._context.displayName||"Context")+".Provider";case wh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xh:return t=e.displayName||null,t!==null?t:Td(e.type)||"Memo";case xr:t=e._payload,e=e._init;try{return Td(e(t))}catch{}}return null}function lC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Td(t);case 8:return t===vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uC(e){var t=mx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){e._valueTracker||(e._valueTracker=uC(e))}function gx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ed(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Om(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yx(e,t){t=t.checked,t!=null&&yh(e,"checked",t,!1)}function Cd(e,t){yx(e,t);var n=Ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pd(e,t.type,Ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _m(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pd(e,t,n){(t!=="number"||Rl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function ss(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(uo(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ur(n)}}function vx(e,t){var n=Ur(t.value),r=Ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,xx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function No(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cC=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){cC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function bx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function kx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dC=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(e,t){if(t){if(dC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function jd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function bh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nd=null,os=null,as=null;function Bm(e){if(e=ha(e)){if(typeof Nd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Eu(t),Nd(e.stateNode,e.type,t))}}function Sx(e){os?as?as.push(e):as=[e]:os=e}function Tx(){if(os){var e=os,t=as;if(as=os=null,Bm(e),t)for(e=0;e<t.length;e++)Bm(t[e])}}function Ex(e,t){return e(t)}function Cx(){}var fc=!1;function Px(e,t,n){if(fc)return e(t,n);fc=!0;try{return Ex(e,t,n)}finally{fc=!1,(os!==null||as!==null)&&(Cx(),Tx())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=Eu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Md=!1;if(Qn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Md=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Md=!1}function fC(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var go=!1,jl=null,Dl=!1,Ld=null,hC={onError:function(e){go=!0,jl=e}};function pC(e,t,n,r,i,s,o,a,l){go=!1,jl=null,fC.apply(hC,arguments)}function mC(e,t,n,r,i,s,o,a,l){if(pC.apply(this,arguments),go){if(go){var u=jl;go=!1,jl=null}else throw Error(F(198));Dl||(Dl=!0,Ld=u)}}function Li(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ax(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vm(e){if(Li(e)!==e)throw Error(F(188))}function gC(e){var t=e.alternate;if(!t){if(t=Li(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vm(i),e;if(s===r)return Vm(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Ix(e){return e=gC(e),e!==null?Rx(e):null}function Rx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rx(e);if(t!==null)return t;e=e.sibling}return null}var jx=_t.unstable_scheduleCallback,Um=_t.unstable_cancelCallback,yC=_t.unstable_shouldYield,vC=_t.unstable_requestPaint,Me=_t.unstable_now,wC=_t.unstable_getCurrentPriorityLevel,kh=_t.unstable_ImmediatePriority,Dx=_t.unstable_UserBlockingPriority,Nl=_t.unstable_NormalPriority,xC=_t.unstable_LowPriority,Nx=_t.unstable_IdlePriority,bu=null,jn=null;function bC(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(bu,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:TC,kC=Math.log,SC=Math.LN2;function TC(e){return e>>>=0,e===0?32:31-(kC(e)/SC|0)|0}var Ma=64,La=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=co(a):(s&=o,s!==0&&(r=co(s)))}else o=n&~i,o!==0?r=co(o):s!==0&&(r=co(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pn(t),i=1<<n,r|=e[n],t&=~i;return r}function EC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=EC(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Od(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mx(){var e=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),e}function hc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function PC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Sh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function Lx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ox,Th,_x,Fx,zx,_d=!1,Oa=[],Nr=null,Mr=null,Lr=null,Lo=new Map,Oo=new Map,kr=[],AC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(t.pointerId)}}function Js(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ha(t),t!==null&&Th(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function IC(e,t,n,r,i){switch(t){case"focusin":return Nr=Js(Nr,e,t,n,r,i),!0;case"dragenter":return Mr=Js(Mr,e,t,n,r,i),!0;case"mouseover":return Lr=Js(Lr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Js(Lo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,Js(Oo.get(s)||null,e,t,n,r,i)),!0}return!1}function Bx(e){var t=fi(e.target);if(t!==null){var n=Li(t);if(n!==null){if(t=n.tag,t===13){if(t=Ax(n),t!==null){e.blockedOn=t,zx(e.priority,function(){_x(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dd=r,n.target.dispatchEvent(r),Dd=null}else return t=ha(n),t!==null&&Th(t),e.blockedOn=n,!1;t.shift()}return!0}function $m(e,t,n){ul(e)&&n.delete(t)}function RC(){_d=!1,Nr!==null&&ul(Nr)&&(Nr=null),Mr!==null&&ul(Mr)&&(Mr=null),Lr!==null&&ul(Lr)&&(Lr=null),Lo.forEach($m),Oo.forEach($m)}function Xs(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,RC)))}function _o(e){function t(i){return Xs(i,e)}if(0<Oa.length){Xs(Oa[0],e);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nr!==null&&Xs(Nr,e),Mr!==null&&Xs(Mr,e),Lr!==null&&Xs(Lr,e),Lo.forEach(t),Oo.forEach(t),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)Bx(n),n.blockedOn===null&&kr.shift()}var ls=rr.ReactCurrentBatchConfig,Ll=!0;function jC(e,t,n,r){var i=pe,s=ls.transition;ls.transition=null;try{pe=1,Eh(e,t,n,r)}finally{pe=i,ls.transition=s}}function DC(e,t,n,r){var i=pe,s=ls.transition;ls.transition=null;try{pe=4,Eh(e,t,n,r)}finally{pe=i,ls.transition=s}}function Eh(e,t,n,r){if(Ll){var i=Fd(e,t,n,r);if(i===null)Sc(e,t,r,Ol,n),Hm(e,r);else if(IC(i,e,t,n,r))r.stopPropagation();else if(Hm(e,r),t&4&&-1<AC.indexOf(e)){for(;i!==null;){var s=ha(i);if(s!==null&&Ox(s),s=Fd(e,t,n,r),s===null&&Sc(e,t,r,Ol,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sc(e,t,r,null,n)}}var Ol=null;function Fd(e,t,n,r){if(Ol=null,e=bh(r),e=fi(e),e!==null)if(t=Li(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ax(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ol=e,null}function Vx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wC()){case kh:return 1;case Dx:return 4;case Nl:case xC:return 16;case Nx:return 536870912;default:return 16}default:return 16}}var Ir=null,Ch=null,cl=null;function Ux(){if(cl)return cl;var e,t=Ch,n=t.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return cl=i.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function Wm(){return!1}function Bt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:Wm,this.isPropagationStopped=Wm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Bt(Os),fa=Re({},Os,{view:0,detail:0}),NC=Bt(fa),pc,mc,Zs,ku=Re({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(pc=e.screenX-Zs.screenX,mc=e.screenY-Zs.screenY):mc=pc=0,Zs=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),qm=Bt(ku),MC=Re({},ku,{dataTransfer:0}),LC=Bt(MC),OC=Re({},fa,{relatedTarget:0}),gc=Bt(OC),_C=Re({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),FC=Bt(_C),zC=Re({},Os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),BC=Bt(zC),VC=Re({},Os,{data:0}),Gm=Bt(VC),UC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$C={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$C[e])?!!t[e]:!1}function Ah(){return WC}var qC=Re({},fa,{key:function(e){if(e.key){var t=UC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GC=Bt(qC),KC=Re({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Bt(KC),YC=Re({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),QC=Bt(YC),JC=Re({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),XC=Bt(JC),ZC=Re({},ku,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eP=Bt(ZC),tP=[9,13,27,32],Ih=Qn&&"CompositionEvent"in window,yo=null;Qn&&"documentMode"in document&&(yo=document.documentMode);var nP=Qn&&"TextEvent"in window&&!yo,Hx=Qn&&(!Ih||yo&&8<yo&&11>=yo),Ym=" ",Qm=!1;function $x(e,t){switch(e){case"keyup":return tP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function rP(e,t){switch(e){case"compositionend":return Wx(t);case"keypress":return t.which!==32?null:(Qm=!0,Ym);case"textInput":return e=t.data,e===Ym&&Qm?null:e;default:return null}}function iP(e,t){if(Wi)return e==="compositionend"||!Ih&&$x(e,t)?(e=Ux(),cl=Ch=Ir=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hx&&t.locale!=="ko"?null:t.data;default:return null}}var sP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sP[e.type]:t==="textarea"}function qx(e,t,n,r){Sx(r),t=_l(t,"onChange"),0<t.length&&(n=new Ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,Fo=null;function oP(e){r0(e,0)}function Su(e){var t=Ki(e);if(gx(t))return e}function aP(e,t){if(e==="change")return t}var Gx=!1;if(Qn){var yc;if(Qn){var vc="oninput"in document;if(!vc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),vc=typeof Xm.oninput=="function"}yc=vc}else yc=!1;Gx=yc&&(!document.documentMode||9<document.documentMode)}function Zm(){vo&&(vo.detachEvent("onpropertychange",Kx),Fo=vo=null)}function Kx(e){if(e.propertyName==="value"&&Su(Fo)){var t=[];qx(t,Fo,e,bh(e)),Px(oP,t)}}function lP(e,t,n){e==="focusin"?(Zm(),vo=t,Fo=n,vo.attachEvent("onpropertychange",Kx)):e==="focusout"&&Zm()}function uP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Su(Fo)}function cP(e,t){if(e==="click")return Su(t)}function dP(e,t){if(e==="input"||e==="change")return Su(t)}function fP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:fP;function zo(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xd.call(t,i)||!yn(e[i],t[i]))return!1}return!0}function eg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tg(e,t){var n=eg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function Yx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qx(){for(var e=window,t=Rl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rl(e.document)}return t}function Rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hP(e){var t=Qx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yx(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=tg(n,s);var o=tg(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pP=Qn&&"documentMode"in document&&11>=document.documentMode,qi=null,zd=null,wo=null,Bd=!1;function ng(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||qi==null||qi!==Rl(r)||(r=qi,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&zo(wo,r)||(wo=r,r=_l(zd,"onSelect"),0<r.length&&(t=new Ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qi)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},wc={},Jx={};Qn&&(Jx=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Tu(e){if(wc[e])return wc[e];if(!Gi[e])return e;var t=Gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jx)return wc[e]=t[n];return e}var Xx=Tu("animationend"),Zx=Tu("animationiteration"),e0=Tu("animationstart"),t0=Tu("transitionend"),n0=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){n0.set(e,t),Mi(t,[e])}for(var xc=0;xc<rg.length;xc++){var bc=rg[xc],mP=bc.toLowerCase(),gP=bc[0].toUpperCase()+bc.slice(1);Qr(mP,"on"+gP)}Qr(Xx,"onAnimationEnd");Qr(Zx,"onAnimationIteration");Qr(e0,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(t0,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yP=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function ig(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mC(r,t,void 0,e),e.currentTarget=null}function r0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}}}if(Dl)throw e=Ld,Dl=!1,Ld=null,e}function be(e,t){var n=t[Wd];n===void 0&&(n=t[Wd]=new Set);var r=e+"__bubble";n.has(r)||(i0(t,e,2,!1),n.add(r))}function kc(e,t,n){var r=0;t&&(r|=4),i0(n,e,r,t)}var za="_reactListening"+Math.random().toString(36).slice(2);function Bo(e){if(!e[za]){e[za]=!0,dx.forEach(function(n){n!=="selectionchange"&&(yP.has(n)||kc(n,!1,e),kc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[za]||(t[za]=!0,kc("selectionchange",!1,t))}}function i0(e,t,n,r){switch(Vx(t)){case 1:var i=jC;break;case 4:i=DC;break;default:i=Eh}n=i.bind(null,t,n,e),i=void 0,!Md||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Px(function(){var u=s,d=bh(n),c=[];e:{var h=n0.get(e);if(h!==void 0){var f=Ph,m=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":f=GC;break;case"focusin":m="focus",f=gc;break;case"focusout":m="blur",f=gc;break;case"beforeblur":case"afterblur":f=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=LC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=QC;break;case Xx:case Zx:case e0:f=FC;break;case t0:f=XC;break;case"scroll":f=NC;break;case"wheel":f=eP;break;case"copy":case"cut":case"paste":f=BC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Km}var g=(t&4)!==0,x=!g&&e==="scroll",p=g?h!==null?h+"Capture":null:h;g=[];for(var y=u,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=Mo(y,p),S!=null&&g.push(Vo(y,S,v)))),x)break;y=y.return}0<g.length&&(h=new f(h,m,null,n,d),c.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Dd&&(m=n.relatedTarget||n.fromElement)&&(fi(m)||m[Jn]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?fi(m):null,m!==null&&(x=Li(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(g=qm,S="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(g=Km,S="onPointerLeave",p="onPointerEnter",y="pointer"),x=f==null?h:Ki(f),v=m==null?h:Ki(m),h=new g(S,y+"leave",f,n,d),h.target=x,h.relatedTarget=v,S=null,fi(d)===u&&(g=new g(p,y+"enter",m,n,d),g.target=v,g.relatedTarget=x,S=g),x=S,f&&m)t:{for(g=f,p=m,y=0,v=g;v;v=Bi(v))y++;for(v=0,S=p;S;S=Bi(S))v++;for(;0<y-v;)g=Bi(g),y--;for(;0<v-y;)p=Bi(p),v--;for(;y--;){if(g===p||p!==null&&g===p.alternate)break t;g=Bi(g),p=Bi(p)}g=null}else g=null;f!==null&&sg(c,h,f,g,!1),m!==null&&x!==null&&sg(c,x,m,g,!0)}}e:{if(h=u?Ki(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var E=aP;else if(Jm(h))if(Gx)E=dP;else{E=uP;var T=lP}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=cP);if(E&&(E=E(e,u))){qx(c,E,n,d);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Pd(h,"number",h.value)}switch(T=u?Ki(u):window,e){case"focusin":(Jm(T)||T.contentEditable==="true")&&(qi=T,zd=u,wo=null);break;case"focusout":wo=zd=qi=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,ng(c,n,d);break;case"selectionchange":if(pP)break;case"keydown":case"keyup":ng(c,n,d)}var A;if(Ih)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Wi?$x(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Hx&&n.locale!=="ko"&&(Wi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Wi&&(A=Ux()):(Ir=d,Ch="value"in Ir?Ir.value:Ir.textContent,Wi=!0)),T=_l(u,I),0<T.length&&(I=new Gm(I,e,null,n,d),c.push({event:I,listeners:T}),A?I.data=A:(A=Wx(n),A!==null&&(I.data=A)))),(A=nP?rP(e,n):iP(e,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}r0(c,t)})}function Vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _l(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(e,n),s!=null&&r.unshift(Vo(e,s,i)),s=Mo(e,t),s!=null&&r.push(Vo(e,s,i))),e=e.return}return r}function Bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sg(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mo(n,s),l!=null&&o.unshift(Vo(n,l,a))):i||(l=Mo(n,s),l!=null&&o.push(Vo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var vP=/\r\n?/g,wP=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(vP,`
`).replace(wP,"")}function Ba(e,t,n){if(t=og(t),og(e)!==t&&n)throw Error(F(425))}function Fl(){}var Vd=null,Ud=null;function Hd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,xP=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,bP=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(e){return ag.resolve(null).then(e).catch(kP)}:$d;function kP(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(t)}function Or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _s=Math.random().toString(36).slice(2),In="__reactFiber$"+_s,Uo="__reactProps$"+_s,Jn="__reactContainer$"+_s,Wd="__reactEvents$"+_s,SP="__reactListeners$"+_s,TP="__reactHandles$"+_s;function fi(e){var t=e[In];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jn]||n[In]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lg(e);e!==null;){if(n=e[In])return n;e=lg(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[In]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Eu(e){return e[Uo]||null}var qd=[],Yi=-1;function Jr(e){return{current:e}}function ke(e){0>Yi||(e.current=qd[Yi],qd[Yi]=null,Yi--)}function we(e,t){Yi++,qd[Yi]=e.current,e.current=t}var Hr={},it=Jr(Hr),kt=Jr(!1),Pi=Hr;function Ts(e,t){var n=e.type.contextTypes;if(!n)return Hr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function zl(){ke(kt),ke(it)}function ug(e,t,n){if(it.current!==Hr)throw Error(F(168));we(it,t),we(kt,n)}function s0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,lC(e)||"Unknown",i));return Re({},n,r)}function Bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,Pi=it.current,we(it,e),we(kt,kt.current),!0}function cg(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=s0(e,t,Pi),r.__reactInternalMemoizedMergedChildContext=e,ke(kt),ke(it),we(it,e)):ke(kt),we(kt,n)}var Wn=null,Cu=!1,Ec=!1;function o0(e){Wn===null?Wn=[e]:Wn.push(e)}function EP(e){Cu=!0,o0(e)}function Xr(){if(!Ec&&Wn!==null){Ec=!0;var e=0,t=pe;try{var n=Wn;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wn=null,Cu=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(e+1)),jx(kh,Xr),i}finally{pe=t,Ec=!1}}return null}var Qi=[],Ji=0,Vl=null,Ul=0,$t=[],Wt=0,Ai=null,Gn=1,Kn="";function li(e,t){Qi[Ji++]=Ul,Qi[Ji++]=Vl,Vl=e,Ul=t}function a0(e,t,n){$t[Wt++]=Gn,$t[Wt++]=Kn,$t[Wt++]=Ai,Ai=e;var r=Gn;e=Kn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-pn(t)+i|n<<i|r,Kn=s+e}else Gn=1<<s|n<<i|r,Kn=e}function jh(e){e.return!==null&&(li(e,1),a0(e,1,0))}function Dh(e){for(;e===Vl;)Vl=Qi[--Ji],Qi[Ji]=null,Ul=Qi[--Ji],Qi[Ji]=null;for(;e===Ai;)Ai=$t[--Wt],$t[Wt]=null,Kn=$t[--Wt],$t[Wt]=null,Gn=$t[--Wt],$t[Wt]=null}var Mt=null,Nt=null,Ee=!1,hn=null;function l0(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=Or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ai!==null?{id:Gn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Mt=e,Nt=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kd(e){if(Ee){var t=Nt;if(t){var n=t;if(!dg(e,t)){if(Gd(e))throw Error(F(418));t=Or(n.nextSibling);var r=Mt;t&&dg(e,t)?l0(r,n):(e.flags=e.flags&-4097|2,Ee=!1,Mt=e)}}else{if(Gd(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ee=!1,Mt=e}}}function fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mt=e}function Va(e){if(e!==Mt)return!1;if(!Ee)return fg(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hd(e.type,e.memoizedProps)),t&&(t=Nt)){if(Gd(e))throw u0(),Error(F(418));for(;t;)l0(e,t),t=Or(t.nextSibling)}if(fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=Or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Mt?Or(e.stateNode.nextSibling):null;return!0}function u0(){for(var e=Nt;e;)e=Or(e.nextSibling)}function Es(){Nt=Mt=null,Ee=!1}function Nh(e){hn===null?hn=[e]:hn.push(e)}var CP=rr.ReactCurrentBatchConfig;function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ua(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hg(e){var t=e._init;return t(e._payload)}function c0(e){function t(p,y){if(e){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function r(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function i(p,y){return p=Br(p,y),p.index=0,p.sibling=null,p}function s(p,y,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,S){return y===null||y.tag!==6?(y=Dc(v,p.mode,S),y.return=p,y):(y=i(y,v),y.return=p,y)}function l(p,y,v,S){var E=v.type;return E===$i?d(p,y,v.props.children,S,v.key):y!==null&&(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xr&&hg(E)===y.type)?(S=i(y,v.props),S.ref=eo(p,y,v),S.return=p,S):(S=vl(v.type,v.key,v.props,null,p.mode,S),S.ref=eo(p,y,v),S.return=p,S)}function u(p,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Nc(v,p.mode,S),y.return=p,y):(y=i(y,v.children||[]),y.return=p,y)}function d(p,y,v,S,E){return y===null||y.tag!==7?(y=Ti(v,p.mode,S,E),y.return=p,y):(y=i(y,v),y.return=p,y)}function c(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Dc(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return v=vl(y.type,y.key,y.props,null,p.mode,v),v.ref=eo(p,null,y),v.return=p,v;case Hi:return y=Nc(y,p.mode,v),y.return=p,y;case xr:var S=y._init;return c(p,S(y._payload),v)}if(uo(y)||Ys(y))return y=Ti(y,p.mode,v,null),y.return=p,y;Ua(p,y)}return null}function h(p,y,v,S){var E=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(p,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return v.key===E?l(p,y,v,S):null;case Hi:return v.key===E?u(p,y,v,S):null;case xr:return E=v._init,h(p,y,E(v._payload),S)}if(uo(v)||Ys(v))return E!==null?null:d(p,y,v,S,null);Ua(p,v)}return null}function f(p,y,v,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(y,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return p=p.get(S.key===null?v:S.key)||null,l(y,p,S,E);case Hi:return p=p.get(S.key===null?v:S.key)||null,u(y,p,S,E);case xr:var T=S._init;return f(p,y,v,T(S._payload),E)}if(uo(S)||Ys(S))return p=p.get(v)||null,d(y,p,S,E,null);Ua(y,S)}return null}function m(p,y,v,S){for(var E=null,T=null,A=y,I=y=0,D=null;A!==null&&I<v.length;I++){A.index>I?(D=A,A=null):D=A.sibling;var P=h(p,A,v[I],S);if(P===null){A===null&&(A=D);break}e&&A&&P.alternate===null&&t(p,A),y=s(P,y,I),T===null?E=P:T.sibling=P,T=P,A=D}if(I===v.length)return n(p,A),Ee&&li(p,I),E;if(A===null){for(;I<v.length;I++)A=c(p,v[I],S),A!==null&&(y=s(A,y,I),T===null?E=A:T.sibling=A,T=A);return Ee&&li(p,I),E}for(A=r(p,A);I<v.length;I++)D=f(A,p,I,v[I],S),D!==null&&(e&&D.alternate!==null&&A.delete(D.key===null?I:D.key),y=s(D,y,I),T===null?E=D:T.sibling=D,T=D);return e&&A.forEach(function(O){return t(p,O)}),Ee&&li(p,I),E}function g(p,y,v,S){var E=Ys(v);if(typeof E!="function")throw Error(F(150));if(v=E.call(v),v==null)throw Error(F(151));for(var T=E=null,A=y,I=y=0,D=null,P=v.next();A!==null&&!P.done;I++,P=v.next()){A.index>I?(D=A,A=null):D=A.sibling;var O=h(p,A,P.value,S);if(O===null){A===null&&(A=D);break}e&&A&&O.alternate===null&&t(p,A),y=s(O,y,I),T===null?E=O:T.sibling=O,T=O,A=D}if(P.done)return n(p,A),Ee&&li(p,I),E;if(A===null){for(;!P.done;I++,P=v.next())P=c(p,P.value,S),P!==null&&(y=s(P,y,I),T===null?E=P:T.sibling=P,T=P);return Ee&&li(p,I),E}for(A=r(p,A);!P.done;I++,P=v.next())P=f(A,p,I,P.value,S),P!==null&&(e&&P.alternate!==null&&A.delete(P.key===null?I:P.key),y=s(P,y,I),T===null?E=P:T.sibling=P,T=P);return e&&A.forEach(function(N){return t(p,N)}),Ee&&li(p,I),E}function x(p,y,v,S){if(typeof v=="object"&&v!==null&&v.type===$i&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:e:{for(var E=v.key,T=y;T!==null;){if(T.key===E){if(E=v.type,E===$i){if(T.tag===7){n(p,T.sibling),y=i(T,v.props.children),y.return=p,p=y;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xr&&hg(E)===T.type){n(p,T.sibling),y=i(T,v.props),y.ref=eo(p,T,v),y.return=p,p=y;break e}n(p,T);break}else t(p,T);T=T.sibling}v.type===$i?(y=Ti(v.props.children,p.mode,S,v.key),y.return=p,p=y):(S=vl(v.type,v.key,v.props,null,p.mode,S),S.ref=eo(p,y,v),S.return=p,p=S)}return o(p);case Hi:e:{for(T=v.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(p,y.sibling),y=i(y,v.children||[]),y.return=p,p=y;break e}else{n(p,y);break}else t(p,y);y=y.sibling}y=Nc(v,p.mode,S),y.return=p,p=y}return o(p);case xr:return T=v._init,x(p,y,T(v._payload),S)}if(uo(v))return m(p,y,v,S);if(Ys(v))return g(p,y,v,S);Ua(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(p,y.sibling),y=i(y,v),y.return=p,p=y):(n(p,y),y=Dc(v,p.mode,S),y.return=p,p=y),o(p)):n(p,y)}return x}var Cs=c0(!0),d0=c0(!1),Hl=Jr(null),$l=null,Xi=null,Mh=null;function Lh(){Mh=Xi=$l=null}function Oh(e){var t=Hl.current;ke(Hl),e._currentValue=t}function Yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function us(e,t){$l=e,Mh=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Mh!==e)if(e={context:e,memoizedValue:t,next:null},Xi===null){if($l===null)throw Error(F(308));Xi=e,$l.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return t}var hi=null;function _h(e){hi===null?hi=[e]:hi.push(e)}function f0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_h(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xn(e,r)}function Xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var br=!1;function Fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xn(e,n)}return i=r.interleaved,i===null?(t.next=t,_h(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xn(e,n)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}function pg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var i=e.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,g=a;switch(h=t,f=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){c=m.call(f,c,h);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,h=typeof m=="function"?m.call(f,c,h):m,h==null)break e;c=Re({},c,h);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=f,l=c):d=d.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ri|=o,e.lanes=o,e.memoizedState=c}}function mg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var pa={},Dn=Jr(pa),Ho=Jr(pa),$o=Jr(pa);function pi(e){if(e===pa)throw Error(F(174));return e}function zh(e,t){switch(we($o,t),we(Ho,e),we(Dn,pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Id(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Id(t,e)}ke(Dn),we(Dn,t)}function Ps(){ke(Dn),ke(Ho),ke($o)}function p0(e){pi($o.current);var t=pi(Dn.current),n=Id(t,e.type);t!==n&&(we(Ho,e),we(Dn,n))}function Bh(e){Ho.current===e&&(ke(Dn),ke(Ho))}var Pe=Jr(0);function ql(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cc=[];function Vh(){for(var e=0;e<Cc.length;e++)Cc[e]._workInProgressVersionPrimary=null;Cc.length=0}var hl=rr.ReactCurrentDispatcher,Pc=rr.ReactCurrentBatchConfig,Ii=0,Ie=null,Ve=null,$e=null,Gl=!1,xo=!1,Wo=0,PP=0;function Xe(){throw Error(F(321))}function Uh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function Hh(e,t,n,r,i,s){if(Ii=s,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?jP:DP,e=n(r,i),xo){s=0;do{if(xo=!1,Wo=0,25<=s)throw Error(F(301));s+=1,$e=Ve=null,t.updateQueue=null,hl.current=NP,e=n(r,i)}while(xo)}if(hl.current=Kl,t=Ve!==null&&Ve.next!==null,Ii=0,$e=Ve=Ie=null,Gl=!1,t)throw Error(F(300));return e}function $h(){var e=Wo!==0;return Wo=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ie.memoizedState=$e=e:$e=$e.next=e,$e}function Xt(){if(Ve===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=$e===null?Ie.memoizedState:$e.next;if(t!==null)$e=t,Ve=e;else{if(e===null)throw Error(F(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},$e===null?Ie.memoizedState=$e=e:$e=$e.next=e}return $e}function qo(e,t){return typeof t=="function"?t(e):t}function Ac(e){var t=Xt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ii&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,Ie.lanes|=d,Ri|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,t.memoizedState)||(bt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ie.lanes|=s,Ri|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ic(e){var t=Xt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);yn(s,t.memoizedState)||(bt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function m0(){}function g0(e,t){var n=Ie,r=Xt(),i=t(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,Wh(w0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Go(9,v0.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(F(349));Ii&30||y0(n,t,i)}return i}function y0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v0(e,t,n,r){t.value=n,t.getSnapshot=r,x0(t)&&b0(e)}function w0(e,t,n){return n(function(){x0(t)&&b0(e)})}function x0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function b0(e){var t=Xn(e,1);t!==null&&mn(t,e,1,-1)}function gg(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=RP.bind(null,Ie,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function k0(){return Xt().memoizedState}function pl(e,t,n,r){var i=Tn();Ie.flags|=e,i.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function Pu(e,t,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Uh(r,o.deps)){i.memoizedState=Go(t,n,s,r);return}}Ie.flags|=e,i.memoizedState=Go(1|t,n,s,r)}function yg(e,t){return pl(8390656,8,e,t)}function Wh(e,t){return Pu(2048,8,e,t)}function S0(e,t){return Pu(4,2,e,t)}function T0(e,t){return Pu(4,4,e,t)}function E0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function C0(e,t,n){return n=n!=null?n.concat([e]):null,Pu(4,4,E0.bind(null,t,e),n)}function qh(){}function P0(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function A0(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function I0(e,t,n){return Ii&21?(yn(n,t)||(n=Mx(),Ie.lanes|=n,Ri|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=n)}function AP(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Pc.transition;Pc.transition={};try{e(!1),t()}finally{pe=n,Pc.transition=r}}function R0(){return Xt().memoizedState}function IP(e,t,n){var r=zr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j0(e))D0(t,n);else if(n=f0(e,t,n,r),n!==null){var i=pt();mn(n,e,r,i),N0(n,t,r)}}function RP(e,t,n){var r=zr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j0(e))D0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=t.interleaved;l===null?(i.next=i,_h(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=f0(e,t,i,r),n!==null&&(i=pt(),mn(n,e,r,i),N0(n,t,r))}}function j0(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function D0(e,t){xo=Gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}var Kl={readContext:Jt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},jP={readContext:Jt,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:yg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pl(4194308,4,E0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return pl(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=IP.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:gg,useDebugValue:qh,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=gg(!1),t=e[0];return e=AP.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=Tn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),qe===null)throw Error(F(349));Ii&30||y0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yg(w0.bind(null,r,s,e),[e]),r.flags|=2048,Go(9,v0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tn(),t=qe.identifierPrefix;if(Ee){var n=Kn,r=Gn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=PP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},DP={readContext:Jt,useCallback:P0,useContext:Jt,useEffect:Wh,useImperativeHandle:C0,useInsertionEffect:S0,useLayoutEffect:T0,useMemo:A0,useReducer:Ac,useRef:k0,useState:function(){return Ac(qo)},useDebugValue:qh,useDeferredValue:function(e){var t=Xt();return I0(t,Ve.memoizedState,e)},useTransition:function(){var e=Ac(qo)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:m0,useSyncExternalStore:g0,useId:R0,unstable_isNewReconciler:!1},NP={readContext:Jt,useCallback:P0,useContext:Jt,useEffect:Wh,useImperativeHandle:C0,useInsertionEffect:S0,useLayoutEffect:T0,useMemo:A0,useReducer:Ic,useRef:k0,useState:function(){return Ic(qo)},useDebugValue:qh,useDeferredValue:function(e){var t=Xt();return Ve===null?t.memoizedState=e:I0(t,Ve.memoizedState,e)},useTransition:function(){var e=Ic(qo)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:m0,useSyncExternalStore:g0,useId:R0,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Au={isMounted:function(e){return(e=e._reactInternals)?Li(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=zr(e),s=Yn(r,i);s.payload=t,n!=null&&(s.callback=n),t=_r(e,s,i),t!==null&&(mn(t,e,i,r),fl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=zr(e),s=Yn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=_r(e,s,i),t!==null&&(mn(t,e,i,r),fl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=zr(e),i=Yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,r),t!==null&&(mn(t,e,r,n),fl(t,e,r))}};function vg(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function M0(e,t,n){var r=!1,i=Hr,s=t.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=St(t)?Pi:it.current,r=t.contextTypes,s=(r=r!=null)?Ts(e,i):Hr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Au,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function wg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function Jd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fh(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=St(t)?Pi:it.current,i.context=Ts(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Qd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Au.enqueueReplaceState(i,i.state,null),Wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function As(e,t){try{var n="",r=t;do n+=aC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var MP=typeof WeakMap=="function"?WeakMap:Map;function L0(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ql||(Ql=!0,uf=r),Xd(e,t)},n}function O0(e,t,n){n=Yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(e,t),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new MP;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=KP.bind(null,e,t,n),t.then(e,e))}function bg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var LP=rr.ReactCurrentOwner,bt=!1;function ut(e,t,n,r){t.child=e===null?d0(t,null,n,r):Cs(t,e.child,n,r)}function Sg(e,t,n,r,i){n=n.render;var s=t.ref;return us(t,i),r=Hh(e,t,n,r,s,i),n=$h(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ee&&n&&jh(t),t.flags|=1,ut(e,t,r,i),t.child)}function Tg(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,_0(e,t,s,r,i)):(e=vl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=Br(s,r),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(zo(s,r)&&e.ref===t.ref)if(bt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return Zd(e,t,n,r,i)}function F0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(es,jt),jt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(es,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(es,jt),jt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,we(es,jt),jt|=r;return ut(e,t,i,n),t.child}function z0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zd(e,t,n,r,i){var s=St(n)?Pi:it.current;return s=Ts(t,s),us(t,i),n=Hh(e,t,n,r,s,i),r=$h(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(Ee&&r&&jh(t),t.flags|=1,ut(e,t,n,i),t.child)}function Eg(e,t,n,r,i){if(St(n)){var s=!0;Bl(t)}else s=!1;if(us(t,i),t.stateNode===null)ml(e,t),M0(t,n,r),Jd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=St(n)?Pi:it.current,u=Ts(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wg(t,o,r,u),br=!1;var h=t.memoizedState;o.state=h,Wl(t,r,o,i),l=t.memoizedState,a!==r||h!==l||kt.current||br?(typeof d=="function"&&(Qd(t,n,d,r),l=t.memoizedState),(a=br||vg(t,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,h0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ln(t.type,a),o.props=u,c=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=St(n)?Pi:it.current,l=Ts(t,l));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&wg(t,o,r,l),br=!1,h=t.memoizedState,o.state=h,Wl(t,r,o,i);var m=t.memoizedState;a!==c||h!==m||kt.current||br?(typeof f=="function"&&(Qd(t,n,f,r),m=t.memoizedState),(u=br||vg(t,n,u,r,h,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ef(e,t,n,r,s,i)}function ef(e,t,n,r,i,s){z0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&cg(t,n,!1),Zn(e,t,s);r=t.stateNode,LP.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cs(t,e.child,null,s),t.child=Cs(t,null,a,s)):ut(e,t,a,s),t.memoizedState=r.state,i&&cg(t,n,!0),t.child}function B0(e){var t=e.stateNode;t.pendingContext?ug(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ug(e,t.context,!1),zh(e,t.containerInfo)}function Cg(e,t,n,r,i){return Es(),Nh(i),t.flags|=256,ut(e,t,n,r),t.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:null,transitions:null}}function V0(e,t,n){var r=t.pendingProps,i=Pe.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Pe,i&1),e===null)return Kd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ju(o,r,0,null),e=Ti(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nf(n),t.memoizedState=tf,e):Gh(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OP(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tf,r}return s=e.child,e=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gh(e,t){return t=ju({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ha(e,t,n,r){return r!==null&&Nh(r),Cs(t,e.child,null,n),e=Gh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OP(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Rc(Error(F(422))),Ha(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ju({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Cs(t,e.child,null,o),t.child.memoizedState=nf(o),t.memoizedState=tf,s);if(!(t.mode&1))return Ha(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(F(419)),r=Rc(s,r,void 0),Ha(e,t,o,r)}if(a=(o&e.childLanes)!==0,bt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(e,i),mn(r,e,i,-1))}return Zh(),r=Rc(Error(F(421))),Ha(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=YP.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Nt=Or(i.nextSibling),Mt=t,Ee=!0,hn=null,e!==null&&($t[Wt++]=Gn,$t[Wt++]=Kn,$t[Wt++]=Ai,Gn=e.id,Kn=e.overflow,Ai=t),t=Gh(t,r.children),t.flags|=4096,t)}function Pg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yd(e.return,t,n)}function jc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function U0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ut(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pg(e,n,t);else if(e.tag===19)Pg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ql(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ql(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,s);break;case"together":jc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ml(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ri|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _P(e,t,n){switch(t.tag){case 3:B0(t),Es();break;case 5:p0(t);break;case 1:St(t.type)&&Bl(t);break;case 4:zh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;we(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?V0(e,t,n):(we(Pe,Pe.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return U0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,F0(e,t,n)}return Zn(e,t,n)}var H0,rf,$0,W0;H0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};$0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pi(Dn.current);var s=null;switch(n){case"input":i=Ed(e,i),r=Ed(e,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Ad(e,i),r=Ad(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fl)}Rd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Do.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Do.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};W0=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function FP(e,t,n){var r=t.pendingProps;switch(Dh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return St(t.type)&&zl(),Ze(t),null;case 3:return r=t.stateNode,Ps(),ke(kt),ke(it),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(ff(hn),hn=null))),rf(e,t),Ze(t),null;case 5:Bh(t);var i=pi($o.current);if(n=t.type,e!==null&&t.stateNode!=null)$0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ze(t),null}if(e=pi(Dn.current),Va(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[In]=t,r[Uo]=s,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)be(fo[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Om(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":Fm(r,s),be("invalid",r)}Rd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",""+a]):Do.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Da(r),_m(r,s,!0);break;case"textarea":Da(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[In]=t,e[Uo]=r,H0(e,t,!1,!1),t.stateNode=e;e:{switch(o=jd(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)be(fo[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":Om(e,r),i=Ed(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),be("invalid",e);break;case"textarea":Fm(e,r),i=Ad(e,r),be("invalid",e);break;default:i=r}Rd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kx(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xx(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(e,l):typeof l=="number"&&No(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",e):l!=null&&yh(e,s,l,o))}switch(n){case"input":Da(e),_m(e,r,!1);break;case"textarea":Da(e),zm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ur(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ss(e,!!r.multiple,s,!1):r.defaultValue!=null&&ss(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)W0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=pi($o.current),pi(Dn.current),Va(t)){if(r=t.stateNode,n=t.memoizedProps,r[In]=t,(s=r.nodeValue!==n)&&(e=Mt,e!==null))switch(e.tag){case 3:Ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=t,t.stateNode=r}return Ze(t),null;case 13:if(ke(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Nt!==null&&t.mode&1&&!(t.flags&128))u0(),Es(),t.flags|=98560,s=!1;else if(s=Va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[In]=t}else Es(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),s=!1}else hn!==null&&(ff(hn),hn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?He===0&&(He=3):Zh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ps(),rf(e,t),e===null&&Bo(t.stateNode.containerInfo),Ze(t),null;case 10:return Oh(t.type._context),Ze(t),null;case 17:return St(t.type)&&zl(),Ze(t),null;case 19:if(ke(Pe),s=t.memoizedState,s===null)return Ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)to(s,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ql(e),o!==null){for(t.flags|=128,to(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Me()>Is&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304)}else{if(!r)if(e=ql(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return Ze(t),null}else 2*Me()-s.renderingStartTime>Is&&n!==1073741824&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Me(),t.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Xh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function zP(e,t){switch(Dh(t),t.tag){case 1:return St(t.type)&&zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ps(),ke(kt),ke(it),Vh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bh(t),null;case 13:if(ke(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Es()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Pe),null;case 4:return Ps(),null;case 10:return Oh(t.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var $a=!1,tt=!1,BP=typeof WeakSet=="function"?WeakSet:Set,q=null;function Zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function sf(e,t,n){try{n()}catch(r){De(e,t,r)}}var Ag=!1;function VP(e,t){if(Vd=Ll,e=Qx(),Rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=e,h=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(f=c.firstChild)!==null;)h=c,c=f;for(;;){if(c===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(f=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},Ll=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,x=m.memoizedState,p=t.stateNode,y=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:ln(t.type,g),x);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){De(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return m=Ag,Ag=!1,m}function bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&sf(t,n,s)}i=i.next}while(i!==r)}}function Iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function q0(e){var t=e.alternate;t!==null&&(e.alternate=null,q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[In],delete t[Uo],delete t[Wd],delete t[SP],delete t[TP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function G0(e){return e.tag===5||e.tag===3||e.tag===4}function Ig(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||G0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fl));else if(r!==4&&(e=e.child,e!==null))for(af(e,t,n),e=e.sibling;e!==null;)af(e,t,n),e=e.sibling}function lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lf(e,t,n),e=e.sibling;e!==null;)lf(e,t,n),e=e.sibling}var Ge=null,fn=!1;function hr(e,t,n){for(n=n.child;n!==null;)K0(e,t,n),n=n.sibling}function K0(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:tt||Zi(n,t);case 6:var r=Ge,i=fn;Ge=null,hr(e,t,n),Ge=r,fn=i,Ge!==null&&(fn?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(fn?(e=Ge,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),_o(e)):Tc(Ge,n.stateNode));break;case 4:r=Ge,i=fn,Ge=n.stateNode.containerInfo,fn=!0,hr(e,t,n),Ge=r,fn=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sf(n,t,o),i=i.next}while(i!==r)}hr(e,t,n);break;case 1:if(!tt&&(Zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,t,a)}hr(e,t,n);break;case 21:hr(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,hr(e,t,n),tt=r):hr(e,t,n);break;default:hr(e,t,n)}}function Rg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new BP),t.forEach(function(r){var i=QP.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,fn=!1;break e;case 3:Ge=a.stateNode.containerInfo,fn=!0;break e;case 4:Ge=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(Ge===null)throw Error(F(160));K0(s,o,i),Ge=null,fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y0(t,e),t=t.sibling}function Y0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(t,e),Sn(e),r&4){try{bo(3,e,e.return),Iu(3,e)}catch(g){De(e,e.return,g)}try{bo(5,e,e.return)}catch(g){De(e,e.return,g)}}break;case 1:rn(t,e),Sn(e),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(rn(t,e),Sn(e),r&512&&n!==null&&Zi(n,n.return),e.flags&32){var i=e.stateNode;try{No(i,"")}catch(g){De(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yx(i,s),jd(a,o);var u=jd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?kx(i,c):d==="dangerouslySetInnerHTML"?xx(i,c):d==="children"?No(i,c):yh(i,d,c,u)}switch(a){case"input":Cd(i,s);break;case"textarea":vx(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ss(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(g){De(e,e.return,g)}}break;case 6:if(rn(t,e),Sn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(g){De(e,e.return,g)}}break;case 3:if(rn(t,e),Sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(g){De(e,e.return,g)}break;case 4:rn(t,e),Sn(e);break;case 13:rn(t,e),Sn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qh=Me())),r&4&&Rg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||d,rn(t,e),tt=u):rn(t,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(c=q=d;q!==null;){switch(h=q,f=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:Zi(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){De(r,n,g)}}break;case 5:Zi(h,h.return);break;case 22:if(h.memoizedState!==null){Dg(c);continue}}f!==null?(f.return=h,q=f):Dg(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bx("display",o))}catch(g){De(e,e.return,g)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){De(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rn(t,e),Sn(e),r&4&&Rg(e);break;case 21:break;default:rn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(G0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=Ig(e);lf(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ig(e);af(e,a,o);break;default:throw Error(F(161))}}catch(l){De(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function UP(e,t,n){q=e,Q0(e)}function Q0(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$a;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=$a;var u=tt;if($a=o,(tt=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?Ng(i):l!==null?(l.return=o,q=l):Ng(i);for(;s!==null;)q=s,Q0(s),s=s.sibling;q=i,$a=a,tt=u}jg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):jg(e)}}function jg(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Iu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&mg(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mg(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&_o(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||t.flags&512&&of(t)}catch(h){De(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Dg(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Ng(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Iu(4,t)}catch(l){De(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){De(t,i,l)}}var s=t.return;try{of(t)}catch(l){De(t,s,l)}break;case 5:var o=t.return;try{of(t)}catch(l){De(t,o,l)}}}catch(l){De(t,t.return,l)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var HP=Math.ceil,Yl=rr.ReactCurrentDispatcher,Kh=rr.ReactCurrentOwner,Yt=rr.ReactCurrentBatchConfig,ce=0,qe=null,ze=null,Ye=0,jt=0,es=Jr(0),He=0,Ko=null,Ri=0,Ru=0,Yh=0,ko=null,xt=null,Qh=0,Is=1/0,$n=null,Ql=!1,uf=null,Fr=null,Wa=!1,Rr=null,Jl=0,So=0,cf=null,gl=-1,yl=0;function pt(){return ce&6?Me():gl!==-1?gl:gl=Me()}function zr(e){return e.mode&1?ce&2&&Ye!==0?Ye&-Ye:CP.transition!==null?(yl===0&&(yl=Mx()),yl):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Vx(e.type)),e):1}function mn(e,t,n,r){if(50<So)throw So=0,cf=null,Error(F(185));da(e,n,r),(!(ce&2)||e!==qe)&&(e===qe&&(!(ce&2)&&(Ru|=n),He===4&&Sr(e,Ye)),Tt(e,r),n===1&&ce===0&&!(t.mode&1)&&(Is=Me()+500,Cu&&Xr()))}function Tt(e,t){var n=e.callbackNode;CC(e,t);var r=Ml(e,e===qe?Ye:0);if(r===0)n!==null&&Um(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Um(n),t===1)e.tag===0?EP(Mg.bind(null,e)):o0(Mg.bind(null,e)),bP(function(){!(ce&6)&&Xr()}),n=null;else{switch(Lx(r)){case 1:n=kh;break;case 4:n=Dx;break;case 16:n=Nl;break;case 536870912:n=Nx;break;default:n=Nl}n=i1(n,J0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J0(e,t){if(gl=-1,yl=0,ce&6)throw Error(F(327));var n=e.callbackNode;if(cs()&&e.callbackNode!==n)return null;var r=Ml(e,e===qe?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xl(e,r);else{t=r;var i=ce;ce|=2;var s=Z0();(qe!==e||Ye!==t)&&($n=null,Is=Me()+500,Si(e,t));do try{qP();break}catch(a){X0(e,a)}while(!0);Lh(),Yl.current=s,ce=i,ze!==null?t=0:(qe=null,Ye=0,t=He)}if(t!==0){if(t===2&&(i=Od(e),i!==0&&(r=i,t=df(e,i))),t===1)throw n=Ko,Si(e,0),Sr(e,r),Tt(e,Me()),n;if(t===6)Sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!$P(i)&&(t=Xl(e,r),t===2&&(s=Od(e),s!==0&&(r=s,t=df(e,s))),t===1))throw n=Ko,Si(e,0),Sr(e,r),Tt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:ui(e,xt,$n);break;case 3:if(Sr(e,r),(r&130023424)===r&&(t=Qh+500-Me(),10<t)){if(Ml(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$d(ui.bind(null,e,xt,$n),t);break}ui(e,xt,$n);break;case 4:if(Sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HP(r/1960))-r,10<r){e.timeoutHandle=$d(ui.bind(null,e,xt,$n),r);break}ui(e,xt,$n);break;case 5:ui(e,xt,$n);break;default:throw Error(F(329))}}}return Tt(e,Me()),e.callbackNode===n?J0.bind(null,e):null}function df(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(Si(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=xt,xt=n,t!==null&&ff(t)),e}function ff(e){xt===null?xt=e:xt.push.apply(xt,e)}function $P(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sr(e,t){for(t&=~Yh,t&=~Ru,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),r=1<<n;e[n]=-1,t&=~r}}function Mg(e){if(ce&6)throw Error(F(327));cs();var t=Ml(e,0);if(!(t&1))return Tt(e,Me()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=Od(e);r!==0&&(t=r,n=df(e,r))}if(n===1)throw n=Ko,Si(e,0),Sr(e,t),Tt(e,Me()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ui(e,xt,$n),Tt(e,Me()),null}function Jh(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Is=Me()+500,Cu&&Xr())}}function ji(e){Rr!==null&&Rr.tag===0&&!(ce&6)&&cs();var t=ce;ce|=1;var n=Yt.transition,r=pe;try{if(Yt.transition=null,pe=1,e)return e()}finally{pe=r,Yt.transition=n,ce=t,!(ce&6)&&Xr()}}function Xh(){jt=es.current,ke(es)}function Si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xP(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Ps(),ke(kt),ke(it),Vh();break;case 5:Bh(r);break;case 4:Ps();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:Oh(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(qe=e,ze=e=Br(e.current,null),Ye=jt=t,He=0,Ko=null,Yh=Ru=Ri=0,xt=ko=null,hi!==null){for(t=0;t<hi.length;t++)if(n=hi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return e}function X0(e,t){do{var n=ze;try{if(Lh(),hl.current=Kl,Gl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Ii=0,$e=Ve=Ie=null,xo=!1,Wo=0,Kh.current=null,n===null||n.return===null){He=1,Ko=t,ze=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=bg(o);if(f!==null){f.flags&=-257,kg(f,o,a,s,t),f.mode&1&&xg(s,u,t),t=f,l=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}else{if(!(t&1)){xg(s,u,t),Zh();break e}l=Error(F(426))}}else if(Ee&&a.mode&1){var x=bg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),kg(x,o,a,s,t),Nh(As(l,a));break e}}s=l=As(l,a),He!==4&&(He=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=L0(s,l,t);pg(s,p);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=O0(s,a,t);pg(s,S);break e}}s=s.return}while(s!==null)}t1(n)}catch(E){t=E,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Z0(){var e=Yl.current;return Yl.current=Kl,e===null?Kl:e}function Zh(){(He===0||He===3||He===2)&&(He=4),qe===null||!(Ri&268435455)&&!(Ru&268435455)||Sr(qe,Ye)}function Xl(e,t){var n=ce;ce|=2;var r=Z0();(qe!==e||Ye!==t)&&($n=null,Si(e,t));do try{WP();break}catch(i){X0(e,i)}while(!0);if(Lh(),ce=n,Yl.current=r,ze!==null)throw Error(F(261));return qe=null,Ye=0,He}function WP(){for(;ze!==null;)e1(ze)}function qP(){for(;ze!==null&&!yC();)e1(ze)}function e1(e){var t=r1(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?t1(e):ze=t,Kh.current=null}function t1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zP(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,ze=null;return}}else if(n=FP(n,t,jt),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);He===0&&(He=5)}function ui(e,t,n){var r=pe,i=Yt.transition;try{Yt.transition=null,pe=1,GP(e,t,n,r)}finally{Yt.transition=i,pe=r}return null}function GP(e,t,n,r){do cs();while(Rr!==null);if(ce&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(PC(e,s),e===qe&&(ze=qe=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,i1(Nl,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=pe;pe=1;var a=ce;ce|=4,Kh.current=null,VP(e,n),Y0(n,e),hP(Ud),Ll=!!Vd,Ud=Vd=null,e.current=n,UP(n),vC(),ce=a,pe=o,Yt.transition=s}else e.current=n;if(Wa&&(Wa=!1,Rr=e,Jl=i),s=e.pendingLanes,s===0&&(Fr=null),bC(n.stateNode),Tt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ql)throw Ql=!1,e=uf,uf=null,e;return Jl&1&&e.tag!==0&&cs(),s=e.pendingLanes,s&1?e===cf?So++:(So=0,cf=e):So=0,Xr(),null}function cs(){if(Rr!==null){var e=Lx(Jl),t=Yt.transition,n=pe;try{if(Yt.transition=null,pe=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Jl=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,q=e.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var c=d.child;if(c!==null)c.return=d,q=c;else for(;q!==null;){d=q;var h=d.sibling,f=d.return;if(q0(d),d===u){q=null;break}if(h!==null){h.return=f,q=h;break}q=f}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,q=p;break e}q=s.return}}var y=e.current;for(q=y;q!==null;){o=q;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,q=v;else e:for(o=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Iu(9,a)}}catch(E){De(a,a.return,E)}if(a===o){q=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,q=S;break e}q=a.return}}if(ce=i,Xr(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(bu,e)}catch{}r=!0}return r}finally{pe=n,Yt.transition=t}}return!1}function Lg(e,t,n){t=As(n,t),t=L0(e,t,1),e=_r(e,t,1),t=pt(),e!==null&&(da(e,1,t),Tt(e,t))}function De(e,t,n){if(e.tag===3)Lg(e,e,n);else for(;t!==null;){if(t.tag===3){Lg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){e=As(n,e),e=O0(t,e,1),t=_r(t,e,1),e=pt(),t!==null&&(da(t,1,e),Tt(t,e));break}}t=t.return}}function KP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ye&n)===n&&(He===4||He===3&&(Ye&130023424)===Ye&&500>Me()-Qh?Si(e,0):Yh|=n),Tt(e,t)}function n1(e,t){t===0&&(e.mode&1?(t=La,La<<=1,!(La&130023424)&&(La=4194304)):t=1);var n=pt();e=Xn(e,t),e!==null&&(da(e,t,n),Tt(e,n))}function YP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n1(e,n)}function QP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),n1(e,n)}var r1;r1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return bt=!1,_P(e,t,n);bt=!!(e.flags&131072)}else bt=!1,Ee&&t.flags&1048576&&a0(t,Ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ml(e,t),e=t.pendingProps;var i=Ts(t,it.current);us(t,n),i=Hh(null,t,r,e,i,n);var s=$h();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(s=!0,Bl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fh(t),i.updater=Au,t.stateNode=i,i._reactInternals=t,Jd(t,r,e,n),t=ef(null,t,r,!0,s,n)):(t.tag=0,Ee&&s&&jh(t),ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ml(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=XP(r),e=ln(r,e),i){case 0:t=Zd(null,t,r,e,n);break e;case 1:t=Eg(null,t,r,e,n);break e;case 11:t=Sg(null,t,r,e,n);break e;case 14:t=Tg(null,t,r,ln(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Zd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Eg(e,t,r,i,n);case 3:e:{if(B0(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,h0(e,t),Wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=As(Error(F(423)),t),t=Cg(e,t,r,n,i);break e}else if(r!==i){i=As(Error(F(424)),t),t=Cg(e,t,r,n,i);break e}else for(Nt=Or(t.stateNode.containerInfo.firstChild),Mt=t,Ee=!0,hn=null,n=d0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){t=Zn(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return p0(t),e===null&&Kd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Hd(r,i)?o=null:s!==null&&Hd(r,s)&&(t.flags|=32),z0(e,t),ut(e,t,o,n),t.child;case 6:return e===null&&Kd(t),null;case 13:return V0(e,t,n);case 4:return zh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cs(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),Sg(e,t,r,i,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,we(Hl,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!kt.current){t=Zn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yd(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,us(t,n),i=Jt(i),r=r(i),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,i=ln(r,t.pendingProps),i=ln(r.type,i),Tg(e,t,r,i,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ln(r,i),ml(e,t),t.tag=1,St(r)?(e=!0,Bl(t)):e=!1,us(t,n),M0(t,r,i),Jd(t,r,i,n),ef(null,t,r,!0,e,n);case 19:return U0(e,t,n);case 22:return F0(e,t,n)}throw Error(F(156,t.tag))};function i1(e,t){return jx(e,t)}function JP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,r){return new JP(e,t,n,r)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function XP(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wh)return 11;if(e===xh)return 14}return 2}function Br(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vl(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ep(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $i:return Ti(n.children,i,s,t);case vh:o=8,i|=8;break;case bd:return e=Gt(12,n,t,i|2),e.elementType=bd,e.lanes=s,e;case kd:return e=Gt(13,n,t,i),e.elementType=kd,e.lanes=s,e;case Sd:return e=Gt(19,n,t,i),e.elementType=Sd,e.lanes=s,e;case px:return ju(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fx:o=10;break e;case hx:o=9;break e;case wh:o=11;break e;case xh:o=14;break e;case xr:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ti(e,t,n,r){return e=Gt(7,e,r,t),e.lanes=n,e}function ju(e,t,n,r){return e=Gt(22,e,r,t),e.elementType=px,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function Nc(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ZP(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tp(e,t,n,r,i,s,o,a,l){return e=new ZP(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(s),e}function eA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s1(e){if(!e)return Hr;e=e._reactInternals;e:{if(Li(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(St(n))return s0(e,n,t)}return t}function o1(e,t,n,r,i,s,o,a,l){return e=tp(n,r,!0,e,i,s,o,a,l),e.context=s1(null),n=e.current,r=pt(),i=zr(n),s=Yn(r,i),s.callback=t??null,_r(n,s,i),e.current.lanes=i,da(e,i,r),Tt(e,r),e}function Du(e,t,n,r){var i=t.current,s=pt(),o=zr(i);return n=s1(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(i,t,o),e!==null&&(mn(e,i,o,s),fl(e,i,o)),o}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function np(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function tA(){return null}var a1=typeof reportError=="function"?reportError:function(e){console.error(e)};function rp(e){this._internalRoot=e}Nu.prototype.render=rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Du(e,t,null,null)};Nu.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ji(function(){Du(null,e,null,null)}),t[Jn]=null}};function Nu(e){this._internalRoot=e}Nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kr.length&&t!==0&&t<kr[n].priority;n++);kr.splice(n,0,e),n===0&&Bx(e)}};function ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _g(){}function nA(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zl(o);s.call(u)}}var o=o1(t,r,e,0,null,!1,!1,"",_g);return e._reactRootContainer=o,e[Jn]=o.current,Bo(e.nodeType===8?e.parentNode:e),ji(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zl(l);a.call(u)}}var l=tp(e,0,!1,null,null,!1,!1,"",_g);return e._reactRootContainer=l,e[Jn]=l.current,Bo(e.nodeType===8?e.parentNode:e),ji(function(){Du(t,l,n,r)}),l}function Lu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zl(o);a.call(l)}}Du(t,o,e,i)}else o=nA(n,t,e,i,r);return Zl(o)}Ox=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Sh(t,n|1),Tt(t,Me()),!(ce&6)&&(Is=Me()+500,Xr()))}break;case 13:ji(function(){var r=Xn(e,1);if(r!==null){var i=pt();mn(r,e,1,i)}}),np(e,1)}};Th=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var n=pt();mn(t,e,134217728,n)}np(e,134217728)}};_x=function(e){if(e.tag===13){var t=zr(e),n=Xn(e,t);if(n!==null){var r=pt();mn(n,e,t,r)}np(e,t)}};Fx=function(){return pe};zx=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Nd=function(e,t,n){switch(t){case"input":if(Cd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eu(r);if(!i)throw Error(F(90));gx(r),Cd(r,i)}}}break;case"textarea":vx(e,n);break;case"select":t=n.value,t!=null&&ss(e,!!n.multiple,t,!1)}};Ex=Jh;Cx=ji;var rA={usingClientEntryPoint:!1,Events:[ha,Ki,Eu,Sx,Tx,Jh]},no={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iA={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ix(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{bu=qa.inject(iA),jn=qa}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(t))throw Error(F(200));return eA(e,t,null,n)};zt.createRoot=function(e,t){if(!ip(e))throw Error(F(299));var n=!1,r="",i=a1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,!1,r,i),e[Jn]=t.current,Bo(e.nodeType===8?e.parentNode:e),new rp(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ix(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return ji(e)};zt.hydrate=function(e,t,n){if(!Mu(t))throw Error(F(200));return Lu(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!ip(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=o1(t,null,e,1,n??null,i,!1,s,o),e[Jn]=t.current,Bo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Nu(t)};zt.render=function(e,t,n){if(!Mu(t))throw Error(F(200));return Lu(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Mu(e))throw Error(F(40));return e._reactRootContainer?(ji(function(){Lu(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1};zt.unstable_batchedUpdates=Jh;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mu(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Lu(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function l1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1)}catch(e){console.error(e)}}l1(),lx.exports=zt;var ma=lx.exports;const u1=wu(ma);var c1,Fg=ma;c1=Fg.createRoot,Fg.hydrateRoot;const sA=1,oA=1e6;let Mc=0;function aA(){return Mc=(Mc+1)%Number.MAX_SAFE_INTEGER,Mc.toString()}const Lc=new Map,zg=e=>{if(Lc.has(e))return;const t=setTimeout(()=>{Lc.delete(e),To({type:"REMOVE_TOAST",toastId:e})},oA);Lc.set(e,t)},lA=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,sA)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?zg(n):e.toasts.forEach(r=>{zg(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},wl=[];let xl={toasts:[]};function To(e){xl=lA(xl,e),wl.forEach(t=>{t(xl)})}function uA({...e}){const t=aA(),n=i=>To({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>To({type:"DISMISS_TOAST",toastId:t});return To({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function cA(){const[e,t]=b.useState(xl);return b.useEffect(()=>(wl.push(t),()=>{const n=wl.indexOf(t);n>-1&&wl.splice(n,1)}),[e]),{...e,toast:uA,dismiss:n=>To({type:"DISMISS_TOAST",toastId:n})}}function Ue(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Bg(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function d1(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Bg(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Bg(e[i],null)}}}}function vn(...e){return b.useCallback(d1(...e),e)}function Ou(e,t=[]){let n=[];function r(s,o){const a=b.createContext(o),l=n.length;n=[...n,o];const u=c=>{var p;const{scope:h,children:f,...m}=c,g=((p=h==null?void 0:h[e])==null?void 0:p[l])||a,x=b.useMemo(()=>m,Object.values(m));return w.jsx(g.Provider,{value:x,children:f})};u.displayName=s+"Provider";function d(c,h){var g;const f=((g=h==null?void 0:h[e])==null?void 0:g[l])||a,m=b.useContext(f);if(m)return m;if(o!==void 0)return o;throw new Error(`\`${c}\` must be used within \`${s}\``)}return[u,d]}const i=()=>{const s=n.map(o=>b.createContext(o));return function(a){const l=(a==null?void 0:a[e])||s;return b.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,dA(i,...t)]}function dA(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const o=r.reduce((a,{useScope:l,scopeName:u})=>{const c=l(s)[`__scope${u}`];return{...a,...c}},{});return b.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}function eu(e){const t=hA(e),n=b.forwardRef((r,i)=>{const{children:s,...o}=r,a=b.Children.toArray(s),l=a.find(mA);if(l){const u=l.props.children,d=a.map(c=>c===l?b.Children.count(u)>1?b.Children.only(null):b.isValidElement(u)?u.props.children:null:c);return w.jsx(t,{...o,ref:i,children:b.isValidElement(u)?b.cloneElement(u,void 0,d):null})}return w.jsx(t,{...o,ref:i,children:s})});return n.displayName=`${e}.Slot`,n}var fA=eu("Slot");function hA(e){const t=b.forwardRef((n,r)=>{const{children:i,...s}=n;if(b.isValidElement(i)){const o=yA(i),a=gA(s,i.props);return i.type!==b.Fragment&&(a.ref=r?d1(r,o):o),b.cloneElement(i,a)}return b.Children.count(i)>1?b.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var f1=Symbol("radix.slottable");function pA(e){const t=({children:n})=>w.jsx(w.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=f1,t}function mA(e){return b.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===f1}function gA(e,t){const n={...t};for(const r in t){const i=e[r],s=t[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{const l=s(...a);return i(...a),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...e,...n}}function yA(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function vA(e){const t=e+"CollectionProvider",[n,r]=Ou(t),[i,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=g=>{const{scope:x,children:p}=g,y=V.useRef(null),v=V.useRef(new Map).current;return w.jsx(i,{scope:x,itemMap:v,collectionRef:y,children:p})};o.displayName=t;const a=e+"CollectionSlot",l=eu(a),u=V.forwardRef((g,x)=>{const{scope:p,children:y}=g,v=s(a,p),S=vn(x,v.collectionRef);return w.jsx(l,{ref:S,children:y})});u.displayName=a;const d=e+"CollectionItemSlot",c="data-radix-collection-item",h=eu(d),f=V.forwardRef((g,x)=>{const{scope:p,children:y,...v}=g,S=V.useRef(null),E=vn(x,S),T=s(d,p);return V.useEffect(()=>(T.itemMap.set(S,{ref:S,...v}),()=>void T.itemMap.delete(S))),w.jsx(h,{[c]:"",ref:E,children:y})});f.displayName=d;function m(g){const x=s(e+"CollectionConsumer",g);return V.useCallback(()=>{const y=x.collectionRef.current;if(!y)return[];const v=Array.from(y.querySelectorAll(`[${c}]`));return Array.from(x.itemMap.values()).sort((T,A)=>v.indexOf(T.ref.current)-v.indexOf(A.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:o,Slot:u,ItemSlot:f},m,r]}var wA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Et=wA.reduce((e,t)=>{const n=eu(`Primitive.${t}`),r=b.forwardRef((i,s)=>{const{asChild:o,...a}=i,l=o?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function h1(e,t){e&&ma.flushSync(()=>e.dispatchEvent(t))}function $r(e){const t=b.useRef(e);return b.useEffect(()=>{t.current=e}),b.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function xA(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e);b.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var bA="DismissableLayer",hf="dismissableLayer.update",kA="dismissableLayer.pointerDownOutside",SA="dismissableLayer.focusOutside",Vg,p1=b.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),sp=b.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=e,u=b.useContext(p1),[d,c]=b.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=b.useState({}),m=vn(t,A=>c(A)),g=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),p=g.indexOf(x),y=d?g.indexOf(d):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,S=y>=p,E=EA(A=>{const I=A.target,D=[...u.branches].some(P=>P.contains(I));!S||D||(i==null||i(A),o==null||o(A),A.defaultPrevented||a==null||a())},h),T=CA(A=>{const I=A.target;[...u.branches].some(P=>P.contains(I))||(s==null||s(A),o==null||o(A),A.defaultPrevented||a==null||a())},h);return xA(A=>{y===u.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},h),b.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Vg=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Ug(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Vg)}},[d,h,n,u]),b.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Ug())},[d,u]),b.useEffect(()=>{const A=()=>f({});return document.addEventListener(hf,A),()=>document.removeEventListener(hf,A)},[]),w.jsx(Et.div,{...l,ref:m,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Ue(e.onFocusCapture,T.onFocusCapture),onBlurCapture:Ue(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:Ue(e.onPointerDownCapture,E.onPointerDownCapture)})});sp.displayName=bA;var TA="DismissableLayerBranch",m1=b.forwardRef((e,t)=>{const n=b.useContext(p1),r=b.useRef(null),i=vn(t,r);return b.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),w.jsx(Et.div,{...e,ref:i})});m1.displayName=TA;function EA(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e),r=b.useRef(!1),i=b.useRef(()=>{});return b.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){g1(kA,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",s),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function CA(e,t=globalThis==null?void 0:globalThis.document){const n=$r(e),r=b.useRef(!1);return b.useEffect(()=>{const i=s=>{s.target&&!r.current&&g1(SA,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ug(){const e=new CustomEvent(hf);document.dispatchEvent(e)}function g1(e,t,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?h1(i,s):i.dispatchEvent(s)}var PA=sp,AA=m1,Wr=globalThis!=null&&globalThis.document?b.useLayoutEffect:()=>{},IA="Portal",y1=b.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,s]=b.useState(!1);Wr(()=>s(!0),[]);const o=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?u1.createPortal(w.jsx(Et.div,{...r,ref:t}),o):null});y1.displayName=IA;function RA(e,t){return b.useReducer((n,r)=>t[n][r]??n,e)}var op=e=>{const{present:t,children:n}=e,r=jA(t),i=typeof n=="function"?n({present:r.isPresent}):b.Children.only(n),s=vn(r.ref,DA(i));return typeof n=="function"||r.isPresent?b.cloneElement(i,{ref:s}):null};op.displayName="Presence";function jA(e){const[t,n]=b.useState(),r=b.useRef(null),i=b.useRef(e),s=b.useRef("none"),o=e?"mounted":"unmounted",[a,l]=RA(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return b.useEffect(()=>{const u=Ga(r.current);s.current=a==="mounted"?u:"none"},[a]),Wr(()=>{const u=r.current,d=i.current;if(d!==e){const h=s.current,f=Ga(u);e?l("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Wr(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,c=f=>{const g=Ga(r.current).includes(f.animationName);if(f.target===t&&g&&(l("ANIMATION_END"),!i.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},h=f=>{f.target===t&&(s.current=Ga(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:b.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Ga(e){return(e==null?void 0:e.animationName)||"none"}function DA(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var NA=ox[" useInsertionEffect ".trim().toString()]||Wr;function MA({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,s,o]=LA({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:i;{const d=b.useRef(e!==void 0);b.useEffect(()=>{const c=d.current;c!==a&&console.warn(`${r} is changing from ${c?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const u=b.useCallback(d=>{var c;if(a){const h=OA(d)?d(e):d;h!==e&&((c=o.current)==null||c.call(o,h))}else s(d)},[a,e,s,o]);return[l,u]}function LA({defaultProp:e,onChange:t}){const[n,r]=b.useState(e),i=b.useRef(n),s=b.useRef(t);return NA(()=>{s.current=t},[t]),b.useEffect(()=>{var o;i.current!==n&&((o=s.current)==null||o.call(s,n),i.current=n)},[n,i]),[n,r,s]}function OA(e){return typeof e=="function"}var _A=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),FA="VisuallyHidden",_u=b.forwardRef((e,t)=>w.jsx(Et.span,{...e,ref:t,style:{..._A,...e.style}}));_u.displayName=FA;var zA=_u,ap="ToastProvider",[lp,BA,VA]=vA("Toast"),[v1,iU]=Ou("Toast",[VA]),[UA,Fu]=v1(ap),w1=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:o}=e,[a,l]=b.useState(null),[u,d]=b.useState(0),c=b.useRef(!1),h=b.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${ap}\`. Expected non-empty \`string\`.`),w.jsx(lp.Provider,{scope:t,children:w.jsx(UA,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:s,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:b.useCallback(()=>d(f=>f+1),[]),onToastRemove:b.useCallback(()=>d(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:c,isClosePausedRef:h,children:o})})};w1.displayName=ap;var x1="ToastViewport",HA=["F8"],pf="toast.viewportPause",mf="toast.viewportResume",b1=b.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=HA,label:i="Notifications ({hotkey})",...s}=e,o=Fu(x1,n),a=BA(n),l=b.useRef(null),u=b.useRef(null),d=b.useRef(null),c=b.useRef(null),h=vn(t,c,o.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=o.toastCount>0;b.useEffect(()=>{const x=p=>{var v;r.length!==0&&r.every(S=>p[S]||p.code===S)&&((v=c.current)==null||v.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),b.useEffect(()=>{const x=l.current,p=c.current;if(m&&x&&p){const y=()=>{if(!o.isClosePausedRef.current){const T=new CustomEvent(pf);p.dispatchEvent(T),o.isClosePausedRef.current=!0}},v=()=>{if(o.isClosePausedRef.current){const T=new CustomEvent(mf);p.dispatchEvent(T),o.isClosePausedRef.current=!1}},S=T=>{!x.contains(T.relatedTarget)&&v()},E=()=>{x.contains(document.activeElement)||v()};return x.addEventListener("focusin",y),x.addEventListener("focusout",S),x.addEventListener("pointermove",y),x.addEventListener("pointerleave",E),window.addEventListener("blur",y),window.addEventListener("focus",v),()=>{x.removeEventListener("focusin",y),x.removeEventListener("focusout",S),x.removeEventListener("pointermove",y),x.removeEventListener("pointerleave",E),window.removeEventListener("blur",y),window.removeEventListener("focus",v)}}},[m,o.isClosePausedRef]);const g=b.useCallback(({tabbingDirection:x})=>{const y=a().map(v=>{const S=v.ref.current,E=[S,...n2(S)];return x==="forwards"?E:E.reverse()});return(x==="forwards"?y.reverse():y).flat()},[a]);return b.useEffect(()=>{const x=c.current;if(x){const p=y=>{var E,T,A;const v=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!v){const I=document.activeElement,D=y.shiftKey;if(y.target===x&&D){(E=u.current)==null||E.focus();return}const N=g({tabbingDirection:D?"backwards":"forwards"}),$=N.findIndex(_=>_===I);Oc(N.slice($+1))?y.preventDefault():D?(T=u.current)==null||T.focus():(A=d.current)==null||A.focus()}};return x.addEventListener("keydown",p),()=>x.removeEventListener("keydown",p)}},[a,g]),w.jsxs(AA,{ref:l,role:"region","aria-label":i.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:m?void 0:"none"},children:[m&&w.jsx(gf,{ref:u,onFocusFromOutsideViewport:()=>{const x=g({tabbingDirection:"forwards"});Oc(x)}}),w.jsx(lp.Slot,{scope:n,children:w.jsx(Et.ol,{tabIndex:-1,...s,ref:h})}),m&&w.jsx(gf,{ref:d,onFocusFromOutsideViewport:()=>{const x=g({tabbingDirection:"backwards"});Oc(x)}})]})});b1.displayName=x1;var k1="ToastFocusProxy",gf=b.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,s=Fu(k1,n);return w.jsx(_u,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:o=>{var u;const a=o.relatedTarget;!((u=s.viewport)!=null&&u.contains(a))&&r()}})});gf.displayName=k1;var ga="Toast",$A="toast.swipeStart",WA="toast.swipeMove",qA="toast.swipeCancel",GA="toast.swipeEnd",S1=b.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...o}=e,[a,l]=MA({prop:r,defaultProp:i??!0,onChange:s,caller:ga});return w.jsx(op,{present:n||a,children:w.jsx(QA,{open:a,...o,ref:t,onClose:()=>l(!1),onPause:$r(e.onPause),onResume:$r(e.onResume),onSwipeStart:Ue(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ue(e.onSwipeMove,u=>{const{x:d,y:c}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${c}px`)}),onSwipeCancel:Ue(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ue(e.onSwipeEnd,u=>{const{x:d,y:c}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${c}px`),l(!1)})})})});S1.displayName=ga;var[KA,YA]=v1(ga,{onClose(){}}),QA=b.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:d,onSwipeMove:c,onSwipeCancel:h,onSwipeEnd:f,...m}=e,g=Fu(ga,n),[x,p]=b.useState(null),y=vn(t,_=>p(_)),v=b.useRef(null),S=b.useRef(null),E=i||g.duration,T=b.useRef(0),A=b.useRef(E),I=b.useRef(0),{onToastAdd:D,onToastRemove:P}=g,O=$r(()=>{var H;(x==null?void 0:x.contains(document.activeElement))&&((H=g.viewport)==null||H.focus()),o()}),N=b.useCallback(_=>{!_||_===1/0||(window.clearTimeout(I.current),T.current=new Date().getTime(),I.current=window.setTimeout(O,_))},[O]);b.useEffect(()=>{const _=g.viewport;if(_){const H=()=>{N(A.current),u==null||u()},G=()=>{const U=new Date().getTime()-T.current;A.current=A.current-U,window.clearTimeout(I.current),l==null||l()};return _.addEventListener(pf,G),_.addEventListener(mf,H),()=>{_.removeEventListener(pf,G),_.removeEventListener(mf,H)}}},[g.viewport,E,l,u,N]),b.useEffect(()=>{s&&!g.isClosePausedRef.current&&N(E)},[s,E,g.isClosePausedRef,N]),b.useEffect(()=>(D(),()=>P()),[D,P]);const $=b.useMemo(()=>x?R1(x):null,[x]);return g.viewport?w.jsxs(w.Fragment,{children:[$&&w.jsx(JA,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:$}),w.jsx(KA,{scope:n,onClose:O,children:ma.createPortal(w.jsx(lp.ItemSlot,{scope:n,children:w.jsx(PA,{asChild:!0,onEscapeKeyDown:Ue(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||O(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Et.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,...m,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Ue(e.onKeyDown,_=>{_.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:Ue(e.onPointerDown,_=>{_.button===0&&(v.current={x:_.clientX,y:_.clientY})}),onPointerMove:Ue(e.onPointerMove,_=>{if(!v.current)return;const H=_.clientX-v.current.x,G=_.clientY-v.current.y,U=!!S.current,R=["left","right"].includes(g.swipeDirection),M=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,k=R?M(0,H):0,Y=R?0:M(0,G),K=_.pointerType==="touch"?10:2,C={x:k,y:Y},J={originalEvent:_,delta:C};U?(S.current=C,Ka(WA,c,J,{discrete:!1})):Hg(C,g.swipeDirection,K)?(S.current=C,Ka($A,d,J,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(H)>K||Math.abs(G)>K)&&(v.current=null)}),onPointerUp:Ue(e.onPointerUp,_=>{const H=S.current,G=_.target;if(G.hasPointerCapture(_.pointerId)&&G.releasePointerCapture(_.pointerId),S.current=null,v.current=null,H){const U=_.currentTarget,R={originalEvent:_,delta:H};Hg(H,g.swipeDirection,g.swipeThreshold)?Ka(GA,f,R,{discrete:!0}):Ka(qA,h,R,{discrete:!0}),U.addEventListener("click",M=>M.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),JA=e=>{const{__scopeToast:t,children:n,...r}=e,i=Fu(ga,t),[s,o]=b.useState(!1),[a,l]=b.useState(!1);return e2(()=>o(!0)),b.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:w.jsx(y1,{asChild:!0,children:w.jsx(_u,{...r,children:s&&w.jsxs(w.Fragment,{children:[i.label," ",n]})})})},XA="ToastTitle",T1=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return w.jsx(Et.div,{...r,ref:t})});T1.displayName=XA;var ZA="ToastDescription",E1=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return w.jsx(Et.div,{...r,ref:t})});E1.displayName=ZA;var C1="ToastAction",P1=b.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?w.jsx(I1,{altText:n,asChild:!0,children:w.jsx(up,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${C1}\`. Expected non-empty \`string\`.`),null)});P1.displayName=C1;var A1="ToastClose",up=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=YA(A1,n);return w.jsx(I1,{asChild:!0,children:w.jsx(Et.button,{type:"button",...r,ref:t,onClick:Ue(e.onClick,i.onClose)})})});up.displayName=A1;var I1=b.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return w.jsx(Et.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function R1(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),t2(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!i)if(s){const o=r.dataset.radixToastAnnounceAlt;o&&t.push(o)}else t.push(...R1(r))}}),t}function Ka(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?h1(i,s):i.dispatchEvent(s)}var Hg=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),s=r>i;return t==="left"||t==="right"?s&&r>n:!s&&i>n};function e2(e=()=>{}){const t=$r(e);Wr(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function t2(e){return e.nodeType===e.ELEMENT_NODE}function n2(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Oc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var r2=w1,j1=b1,D1=S1,N1=T1,M1=E1,L1=P1,O1=up;function _1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function F1(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_1(e))&&(r&&(r+=" "),r+=t);return r}const $g=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Wg=F1,z1=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Wg(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=t,o=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],c=s==null?void 0:s[u];if(d===null)return null;const h=$g(d)||$g(c);return i[u][h]}),a=n&&Object.entries(n).reduce((u,d)=>{let[c,h]=d;return h===void 0||(u[c]=h),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:c,className:h,...f}=d;return Object.entries(f).every(m=>{let[g,x]=m;return Array.isArray(x)?x.includes({...s,...a}[g]):{...s,...a}[g]===x})?[...u,c,h]:u},[]);return Wg(e,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>b.createElement("svg",{ref:l,...s2,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:B1("lucide",i),...a},[...o.map(([u,d])=>b.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,t)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(o2,{ref:s,iconNode:t,className:B1(`lucide-${i2(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
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
 */const l2=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=he("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=he("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=he("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=he("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
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
 */const $1=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=he("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=he("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=he("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=he("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pp="-",C2=e=>{const t=A2(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const a=o.split(pp);return a[0]===""&&a.length!==1&&a.shift(),q1(a,t)||P2(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},q1=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?q1(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const s=e.join(pp);return(o=t.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},qg=/^\[(.+)\]$/,P2=e=>{if(qg.test(e)){const t=qg.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},A2=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return R2(Object.entries(e.classGroups),n).forEach(([s,o])=>{wf(o,r,s,t)}),r},wf=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?t:Gg(t,i);s.classGroupId=n;return}if(typeof i=="function"){if(I2(i)){wf(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{wf(o,Gg(t,s),n,r)})})},Gg=(e,t)=>{let n=e;return t.split(pp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},I2=e=>e.isThemeGetter,R2=(e,t)=>t?e.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[t+o,a])):s);return[n,i]}):e,j2=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},G1="!",D2=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],s=t.length,o=a=>{const l=[];let u=0,d=0,c;for(let x=0;x<a.length;x++){let p=a[x];if(u===0){if(p===i&&(r||a.slice(x,x+s)===t)){l.push(a.slice(d,x)),d=x+s;continue}if(p==="/"){c=x;continue}}p==="["?u++:p==="]"&&u--}const h=l.length===0?a:a.substring(d),f=h.startsWith(G1),m=f?h.substring(1):h,g=c&&c>d?c-d:void 0;return{modifiers:l,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},N2=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},M2=e=>({cache:j2(e.cacheSize),parseClassName:D2(e),...C2(e)}),L2=/\s+/,O2=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,s=[],o=e.trim().split(L2);let a="";for(let l=o.length-1;l>=0;l-=1){const u=o[l],{modifiers:d,hasImportantModifier:c,baseClassName:h,maybePostfixModifierPosition:f}=n(u);let m=!!f,g=r(m?h.substring(0,f):h);if(!g){if(!m){a=u+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=u+(a.length>0?" "+a:a);continue}m=!1}const x=N2(d).join(":"),p=c?x+G1:x,y=p+g;if(s.includes(y))continue;s.push(y);const v=i(g,m);for(let S=0;S<v.length;++S){const E=v[S];s.push(p+E)}a=u+(a.length>0?" "+a:a)}return a};function _2(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=K1(t))&&(r&&(r+=" "),r+=n);return r}const K1=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=K1(e[r]))&&(n&&(n+=" "),n+=t);return n};function F2(e,...t){let n,r,i,s=o;function o(l){const u=t.reduce((d,c)=>c(d),e());return n=M2(u),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const u=r(l);if(u)return u;const d=O2(l,n);return i(l,d),d}return function(){return s(_2.apply(null,arguments))}}const xe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Y1=/^\[(?:([a-z-]+):)?(.+)\]$/i,z2=/^\d+\/\d+$/,B2=new Set(["px","full","screen"]),V2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,U2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,H2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,W2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Un=e=>ds(e)||B2.has(e)||z2.test(e),pr=e=>Fs(e,"length",Z2),ds=e=>!!e&&!Number.isNaN(Number(e)),_c=e=>Fs(e,"number",ds),ro=e=>!!e&&Number.isInteger(Number(e)),q2=e=>e.endsWith("%")&&ds(e.slice(0,-1)),te=e=>Y1.test(e),mr=e=>V2.test(e),G2=new Set(["length","size","percentage"]),K2=e=>Fs(e,G2,Q1),Y2=e=>Fs(e,"position",Q1),Q2=new Set(["image","url"]),J2=e=>Fs(e,Q2,tI),X2=e=>Fs(e,"",eI),io=()=>!0,Fs=(e,t,n)=>{const r=Y1.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Z2=e=>U2.test(e)&&!H2.test(e),Q1=()=>!1,eI=e=>$2.test(e),tI=e=>W2.test(e),nI=()=>{const e=xe("colors"),t=xe("spacing"),n=xe("blur"),r=xe("brightness"),i=xe("borderColor"),s=xe("borderRadius"),o=xe("borderSpacing"),a=xe("borderWidth"),l=xe("contrast"),u=xe("grayscale"),d=xe("hueRotate"),c=xe("invert"),h=xe("gap"),f=xe("gradientColorStops"),m=xe("gradientColorStopPositions"),g=xe("inset"),x=xe("margin"),p=xe("opacity"),y=xe("padding"),v=xe("saturate"),S=xe("scale"),E=xe("sepia"),T=xe("skew"),A=xe("space"),I=xe("translate"),D=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",te,t],N=()=>[te,t],$=()=>["",Un,pr],_=()=>["auto",ds,te],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",te],k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[ds,te];return{cacheSize:500,separator:":",theme:{colors:[io],spacing:[Un,pr],blur:["none","",mr,te],brightness:Y(),borderColor:[e],borderRadius:["none","","full",mr,te],borderSpacing:N(),borderWidth:$(),contrast:Y(),grayscale:M(),hueRotate:Y(),invert:M(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[q2,pr],inset:O(),margin:O(),opacity:Y(),padding:N(),saturate:Y(),scale:Y(),sepia:M(),skew:Y(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[mr]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),te]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ro,te]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",ro,te]}],"grid-cols":[{"grid-cols":[io]}],"col-start-end":[{col:["auto",{span:["full",ro,te]},te]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[io]}],"row-start-end":[{row:["auto",{span:[ro,te]},te]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[mr]},mr]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",mr,pr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_c]}],"font-family":[{font:[io]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",ds,_c]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Un,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Un,pr]}],"underline-offset":[{"underline-offset":["auto",Un,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),Y2]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",K2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},J2]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Un,te]}],"outline-w":[{outline:[Un,pr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Un,pr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",mr,X2]}],"shadow-color":[{shadow:[io]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",mr,te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[c]}],saturate:[{saturate:[v]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ro,te]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Un,pr,_c]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},rI=F2(nI);function Ft(...e){return rI(F1(e))}const iI=r2,J1=b.forwardRef(({className:e,...t},n)=>w.jsx(j1,{ref:n,className:Ft("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));J1.displayName=j1.displayName;const sI=z1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),X1=b.forwardRef(({className:e,variant:t,...n},r)=>w.jsx(D1,{ref:r,className:Ft(sI({variant:t}),e),...n}));X1.displayName=D1.displayName;const oI=b.forwardRef(({className:e,...t},n)=>w.jsx(L1,{ref:n,className:Ft("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));oI.displayName=L1.displayName;const Z1=b.forwardRef(({className:e,...t},n)=>w.jsx(O1,{ref:n,className:Ft("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:w.jsx(hp,{className:"h-4 w-4"})}));Z1.displayName=O1.displayName;const eb=b.forwardRef(({className:e,...t},n)=>w.jsx(N1,{ref:n,className:Ft("text-sm font-semibold",e),...t}));eb.displayName=N1.displayName;const tb=b.forwardRef(({className:e,...t},n)=>w.jsx(M1,{ref:n,className:Ft("text-sm opacity-90",e),...t}));tb.displayName=M1.displayName;function aI(){const{toasts:e}=cA();return w.jsxs(iI,{children:[e.map(function({id:t,title:n,description:r,action:i,...s}){return w.jsxs(X1,{...s,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(eb,{children:n}),r&&w.jsx(tb,{children:r})]}),i,w.jsx(Z1,{})]},t)}),w.jsx(J1,{})]})}var Kg=["light","dark"],lI="(prefers-color-scheme: dark)",uI=b.createContext(void 0),cI={setTheme:e=>{},themes:[]},dI=()=>{var e;return(e=b.useContext(uI))!=null?e:cI};b.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let u=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(m=>`'${m}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,c=i?Kg.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(m,g=!1,x=!0)=>{let p=o?o[m]:m,y=g?m+"|| ''":`'${p}'`,v="";return i&&x&&!g&&Kg.includes(m)&&(v+=`d.style.colorScheme = '${m}';`),n==="class"?g||p?v+=`c.add(${y})`:v+="null":p&&(v+=`d[s](n,${y})`),v},f=e?`!function(){${d}${h(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${lI}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}${u?"":"else{"+h(s,!1,!1)+"}"}${c}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${c}}catch(t){}}();`;return b.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:f}})});var fI=e=>{switch(e){case"success":return mI;case"info":return yI;case"warning":return gI;case"error":return vI;default:return null}},hI=Array(12).fill(0),pI=({visible:e,className:t})=>V.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},V.createElement("div",{className:"sonner-spinner"},hI.map((n,r)=>V.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),mI=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),gI=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),yI=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),vI=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),wI=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},V.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),xI=()=>{let[e,t]=V.useState(document.hidden);return V.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},xf=1,bI=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:xf++,s=this.toasts.find(a=>a.id===i),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),s?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:n}),{...a,...e,id:i,dismissible:o,title:n}):a):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,s,o=r.then(async l=>{if(s=["resolve",l],V.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(SI(l)&&!l.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(l):t.success,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async l=>{if(s=["reject",l],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>o.then(()=>s[0]==="reject"?u(s[1]):l(s[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||xf++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},wt=new bI,kI=(e,t)=>{let n=(t==null?void 0:t.id)||xf++;return wt.addToast({title:e,...t,id:n}),n},SI=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",TI=kI,EI=()=>wt.toasts,CI=()=>wt.getActiveToasts();Object.assign(TI,{success:wt.success,info:wt.info,warning:wt.warning,error:wt.error,custom:wt.custom,message:wt.message,promise:wt.promise,dismiss:wt.dismiss,loading:wt.loading},{getHistory:EI,getToasts:CI});function PI(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}PI(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ya(e){return e.label!==void 0}var AI=3,II="32px",RI="16px",Yg=4e3,jI=356,DI=14,NI=20,MI=200;function sn(...e){return e.filter(Boolean).join(" ")}function LI(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var OI=e=>{var t,n,r,i,s,o,a,l,u,d,c;let{invert:h,toast:f,unstyled:m,interacting:g,setHeights:x,visibleToasts:p,heights:y,index:v,toasts:S,expanded:E,removeToast:T,defaultRichColors:A,closeButton:I,style:D,cancelButtonStyle:P,actionButtonStyle:O,className:N="",descriptionClassName:$="",duration:_,position:H,gap:G,loadingIcon:U,expandByDefault:R,classNames:M,icons:k,closeButtonAriaLabel:Y="Close toast",pauseWhenPageIsHidden:K}=e,[C,J]=V.useState(null),[me,le]=V.useState(null),[oe,ot]=V.useState(!1),[at,yt]=V.useState(!1),[Pt,ar]=V.useState(!1),[bn,_i]=V.useState(!1),[Fi,ni]=V.useState(!1),[zi,ri]=V.useState(0),[Bn,Ks]=V.useState(0),ii=V.useRef(f.duration||_||Yg),Aa=V.useRef(null),Vn=V.useRef(null),ic=v===0,sc=v+1<=p,j=f.type,B=f.dismissible!==!1,X=f.className||"",re=f.descriptionClassName||"",de=V.useMemo(()=>y.findIndex(Z=>Z.toastId===f.id)||0,[y,f.id]),At=V.useMemo(()=>{var Z;return(Z=f.closeButton)!=null?Z:I},[f.closeButton,I]),kn=V.useMemo(()=>f.duration||_||Yg,[f.duration,_]),It=V.useRef(0),Vt=V.useRef(0),lr=V.useRef(0),Oe=V.useRef(null),[ur,Zt]=H.split("-"),Pm=V.useMemo(()=>y.reduce((Z,ge,Te)=>Te>=de?Z:Z+ge.height,0),[y,de]),Am=xI(),jE=f.invert||h,oc=j==="loading";Vt.current=V.useMemo(()=>de*G+Pm,[de,Pm]),V.useEffect(()=>{ii.current=kn},[kn]),V.useEffect(()=>{ot(!0)},[]),V.useEffect(()=>{let Z=Vn.current;if(Z){let ge=Z.getBoundingClientRect().height;return Ks(ge),x(Te=>[{toastId:f.id,height:ge,position:f.position},...Te]),()=>x(Te=>Te.filter(en=>en.toastId!==f.id))}},[x,f.id]),V.useLayoutEffect(()=>{if(!oe)return;let Z=Vn.current,ge=Z.style.height;Z.style.height="auto";let Te=Z.getBoundingClientRect().height;Z.style.height=ge,Ks(Te),x(en=>en.find(tn=>tn.toastId===f.id)?en.map(tn=>tn.toastId===f.id?{...tn,height:Te}:tn):[{toastId:f.id,height:Te,position:f.position},...en])},[oe,f.title,f.description,x,f.id]);let cr=V.useCallback(()=>{yt(!0),ri(Vt.current),x(Z=>Z.filter(ge=>ge.toastId!==f.id)),setTimeout(()=>{T(f)},MI)},[f,T,x,Vt]);V.useEffect(()=>{if(f.promise&&j==="loading"||f.duration===1/0||f.type==="loading")return;let Z;return E||g||K&&Am?(()=>{if(lr.current<It.current){let ge=new Date().getTime()-It.current;ii.current=ii.current-ge}lr.current=new Date().getTime()})():ii.current!==1/0&&(It.current=new Date().getTime(),Z=setTimeout(()=>{var ge;(ge=f.onAutoClose)==null||ge.call(f,f),cr()},ii.current)),()=>clearTimeout(Z)},[E,g,f,j,K,Am,cr]),V.useEffect(()=>{f.delete&&cr()},[cr,f.delete]);function DE(){var Z,ge,Te;return k!=null&&k.loading?V.createElement("div",{className:sn(M==null?void 0:M.loader,(Z=f==null?void 0:f.classNames)==null?void 0:Z.loader,"sonner-loader"),"data-visible":j==="loading"},k.loading):U?V.createElement("div",{className:sn(M==null?void 0:M.loader,(ge=f==null?void 0:f.classNames)==null?void 0:ge.loader,"sonner-loader"),"data-visible":j==="loading"},U):V.createElement(pI,{className:sn(M==null?void 0:M.loader,(Te=f==null?void 0:f.classNames)==null?void 0:Te.loader),visible:j==="loading"})}return V.createElement("li",{tabIndex:0,ref:Vn,className:sn(N,X,M==null?void 0:M.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,M==null?void 0:M.default,M==null?void 0:M[j],(n=f==null?void 0:f.classNames)==null?void 0:n[j]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:A,"data-styled":!(f.jsx||f.unstyled||m),"data-mounted":oe,"data-promise":!!f.promise,"data-swiped":Fi,"data-removed":at,"data-visible":sc,"data-y-position":ur,"data-x-position":Zt,"data-index":v,"data-front":ic,"data-swiping":Pt,"data-dismissible":B,"data-type":j,"data-invert":jE,"data-swipe-out":bn,"data-swipe-direction":me,"data-expanded":!!(E||R&&oe),style:{"--index":v,"--toasts-before":v,"--z-index":S.length-v,"--offset":`${at?zi:Vt.current}px`,"--initial-height":R?"auto":`${Bn}px`,...D,...f.style},onDragEnd:()=>{ar(!1),J(null),Oe.current=null},onPointerDown:Z=>{oc||!B||(Aa.current=new Date,ri(Vt.current),Z.target.setPointerCapture(Z.pointerId),Z.target.tagName!=="BUTTON"&&(ar(!0),Oe.current={x:Z.clientX,y:Z.clientY}))},onPointerUp:()=>{var Z,ge,Te,en;if(bn||!B)return;Oe.current=null;let tn=Number(((Z=Vn.current)==null?void 0:Z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),dr=Number(((ge=Vn.current)==null?void 0:ge.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),si=new Date().getTime()-((Te=Aa.current)==null?void 0:Te.getTime()),nn=C==="x"?tn:dr,fr=Math.abs(nn)/si;if(Math.abs(nn)>=NI||fr>.11){ri(Vt.current),(en=f.onDismiss)==null||en.call(f,f),le(C==="x"?tn>0?"right":"left":dr>0?"down":"up"),cr(),_i(!0),ni(!1);return}ar(!1),J(null)},onPointerMove:Z=>{var ge,Te,en,tn;if(!Oe.current||!B||((ge=window.getSelection())==null?void 0:ge.toString().length)>0)return;let dr=Z.clientY-Oe.current.y,si=Z.clientX-Oe.current.x,nn=(Te=e.swipeDirections)!=null?Te:LI(H);!C&&(Math.abs(si)>1||Math.abs(dr)>1)&&J(Math.abs(si)>Math.abs(dr)?"x":"y");let fr={x:0,y:0};C==="y"?(nn.includes("top")||nn.includes("bottom"))&&(nn.includes("top")&&dr<0||nn.includes("bottom")&&dr>0)&&(fr.y=dr):C==="x"&&(nn.includes("left")||nn.includes("right"))&&(nn.includes("left")&&si<0||nn.includes("right")&&si>0)&&(fr.x=si),(Math.abs(fr.x)>0||Math.abs(fr.y)>0)&&ni(!0),(en=Vn.current)==null||en.style.setProperty("--swipe-amount-x",`${fr.x}px`),(tn=Vn.current)==null||tn.style.setProperty("--swipe-amount-y",`${fr.y}px`)}},At&&!f.jsx?V.createElement("button",{"aria-label":Y,"data-disabled":oc,"data-close-button":!0,onClick:oc||!B?()=>{}:()=>{var Z;cr(),(Z=f.onDismiss)==null||Z.call(f,f)},className:sn(M==null?void 0:M.closeButton,(i=f==null?void 0:f.classNames)==null?void 0:i.closeButton)},(s=k==null?void 0:k.close)!=null?s:wI):null,f.jsx||b.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:V.createElement(V.Fragment,null,j||f.icon||f.promise?V.createElement("div",{"data-icon":"",className:sn(M==null?void 0:M.icon,(o=f==null?void 0:f.classNames)==null?void 0:o.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||DE():null,f.type!=="loading"?f.icon||(k==null?void 0:k[j])||fI(j):null):null,V.createElement("div",{"data-content":"",className:sn(M==null?void 0:M.content,(a=f==null?void 0:f.classNames)==null?void 0:a.content)},V.createElement("div",{"data-title":"",className:sn(M==null?void 0:M.title,(l=f==null?void 0:f.classNames)==null?void 0:l.title)},typeof f.title=="function"?f.title():f.title),f.description?V.createElement("div",{"data-description":"",className:sn($,re,M==null?void 0:M.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)},typeof f.description=="function"?f.description():f.description):null),b.isValidElement(f.cancel)?f.cancel:f.cancel&&Ya(f.cancel)?V.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||P,onClick:Z=>{var ge,Te;Ya(f.cancel)&&B&&((Te=(ge=f.cancel).onClick)==null||Te.call(ge,Z),cr())},className:sn(M==null?void 0:M.cancelButton,(d=f==null?void 0:f.classNames)==null?void 0:d.cancelButton)},f.cancel.label):null,b.isValidElement(f.action)?f.action:f.action&&Ya(f.action)?V.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||O,onClick:Z=>{var ge,Te;Ya(f.action)&&((Te=(ge=f.action).onClick)==null||Te.call(ge,Z),!Z.defaultPrevented&&cr())},className:sn(M==null?void 0:M.actionButton,(c=f==null?void 0:f.classNames)==null?void 0:c.actionButton)},f.action.label):null))};function Qg(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function _I(e,t){let n={};return[e,t].forEach((r,i)=>{let s=i===1,o=s?"--mobile-offset":"--offset",a=s?RI:II;function l(u){["top","right","bottom","left"].forEach(d=>{n[`${o}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${o}-${u}`]=a:n[`${o}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var FI=b.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:u,theme:d="light",richColors:c,duration:h,style:f,visibleToasts:m=AI,toastOptions:g,dir:x=Qg(),gap:p=DI,loadingIcon:y,icons:v,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:E}=e,[T,A]=V.useState([]),I=V.useMemo(()=>Array.from(new Set([r].concat(T.filter(K=>K.position).map(K=>K.position)))),[T,r]),[D,P]=V.useState([]),[O,N]=V.useState(!1),[$,_]=V.useState(!1),[H,G]=V.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=V.useRef(null),R=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),M=V.useRef(null),k=V.useRef(!1),Y=V.useCallback(K=>{A(C=>{var J;return(J=C.find(me=>me.id===K.id))!=null&&J.delete||wt.dismiss(K.id),C.filter(({id:me})=>me!==K.id)})},[]);return V.useEffect(()=>wt.subscribe(K=>{if(K.dismiss){A(C=>C.map(J=>J.id===K.id?{...J,delete:!0}:J));return}setTimeout(()=>{u1.flushSync(()=>{A(C=>{let J=C.findIndex(me=>me.id===K.id);return J!==-1?[...C.slice(0,J),{...C[J],...K},...C.slice(J+1)]:[K,...C]})})})}),[]),V.useEffect(()=>{if(d!=="system"){G(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let K=window.matchMedia("(prefers-color-scheme: dark)");try{K.addEventListener("change",({matches:C})=>{G(C?"dark":"light")})}catch{K.addListener(({matches:J})=>{try{G(J?"dark":"light")}catch(me){console.error(me)}})}},[d]),V.useEffect(()=>{T.length<=1&&N(!1)},[T]),V.useEffect(()=>{let K=C=>{var J,me;i.every(le=>C[le]||C.code===le)&&(N(!0),(J=U.current)==null||J.focus()),C.code==="Escape"&&(document.activeElement===U.current||(me=U.current)!=null&&me.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[i]),V.useEffect(()=>{if(U.current)return()=>{M.current&&(M.current.focus({preventScroll:!0}),M.current=null,k.current=!1)}},[U.current]),V.createElement("section",{ref:t,"aria-label":`${S} ${R}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},I.map((K,C)=>{var J;let[me,le]=K.split("-");return T.length?V.createElement("ol",{key:K,dir:x==="auto"?Qg():x,tabIndex:-1,ref:U,className:a,"data-sonner-toaster":!0,"data-theme":H,"data-y-position":me,"data-lifted":O&&T.length>1&&!s,"data-x-position":le,style:{"--front-toast-height":`${((J=D[0])==null?void 0:J.height)||0}px`,"--width":`${jI}px`,"--gap":`${p}px`,...f,..._I(l,u)},onBlur:oe=>{k.current&&!oe.currentTarget.contains(oe.relatedTarget)&&(k.current=!1,M.current&&(M.current.focus({preventScroll:!0}),M.current=null))},onFocus:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||k.current||(k.current=!0,M.current=oe.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{$||N(!1)},onDragEnd:()=>N(!1),onPointerDown:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},T.filter(oe=>!oe.position&&C===0||oe.position===K).map((oe,ot)=>{var at,yt;return V.createElement(OI,{key:oe.id,icons:v,index:ot,toast:oe,defaultRichColors:c,duration:(at=g==null?void 0:g.duration)!=null?at:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:m,closeButton:(yt=g==null?void 0:g.closeButton)!=null?yt:o,interacting:$,position:K,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:Y,toasts:T.filter(Pt=>Pt.position==oe.position),heights:D.filter(Pt=>Pt.position==oe.position),setHeights:P,expandByDefault:s,gap:p,loadingIcon:y,expanded:O,pauseWhenPageIsHidden:E,swipeDirections:e.swipeDirections})})):null}))});const zI=({...e})=>{const{theme:t="system"}=dI();return w.jsx(FI,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},BI=["top","right","bottom","left"],qr=Math.min,Dt=Math.max,tu=Math.round,Qa=Math.floor,Nn=e=>({x:e,y:e}),VI={left:"right",right:"left",bottom:"top",top:"bottom"},UI={start:"end",end:"start"};function bf(e,t,n){return Dt(e,qr(t,n))}function er(e,t){return typeof e=="function"?e(t):e}function tr(e){return e.split("-")[0]}function zs(e){return e.split("-")[1]}function mp(e){return e==="x"?"y":"x"}function gp(e){return e==="y"?"height":"width"}const HI=new Set(["top","bottom"]);function Rn(e){return HI.has(tr(e))?"y":"x"}function yp(e){return mp(Rn(e))}function $I(e,t,n){n===void 0&&(n=!1);const r=zs(e),i=yp(e),s=gp(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=nu(o)),[o,nu(o)]}function WI(e){const t=nu(e);return[kf(e),t,kf(t)]}function kf(e){return e.replace(/start|end/g,t=>UI[t])}const Jg=["left","right"],Xg=["right","left"],qI=["top","bottom"],GI=["bottom","top"];function KI(e,t,n){switch(e){case"top":case"bottom":return n?t?Xg:Jg:t?Jg:Xg;case"left":case"right":return t?qI:GI;default:return[]}}function YI(e,t,n,r){const i=zs(e);let s=KI(tr(e),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),t&&(s=s.concat(s.map(kf)))),s}function nu(e){return e.replace(/left|right|bottom|top/g,t=>VI[t])}function QI(e){return{top:0,right:0,bottom:0,left:0,...e}}function nb(e){return typeof e!="number"?QI(e):{top:e,right:e,bottom:e,left:e}}function ru(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Zg(e,t,n){let{reference:r,floating:i}=e;const s=Rn(t),o=yp(t),a=gp(o),l=tr(t),u=s==="y",d=r.x+r.width/2-i.width/2,c=r.y+r.height/2-i.height/2,h=r[a]/2-i[a]/2;let f;switch(l){case"top":f={x:d,y:r.y-i.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:c};break;case"left":f={x:r.x-i.width,y:c};break;default:f={x:r.x,y:r.y}}switch(zs(t)){case"start":f[o]-=h*(n&&u?-1:1);break;case"end":f[o]+=h*(n&&u?-1:1);break}return f}const JI=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:c}=Zg(u,r,l),h=r,f={},m=0;for(let g=0;g<a.length;g++){const{name:x,fn:p}=a[g],{x:y,y:v,data:S,reset:E}=await p({x:d,y:c,initialPlacement:r,placement:h,strategy:i,middlewareData:f,rects:u,platform:o,elements:{reference:e,floating:t}});d=y??d,c=v??c,f={...f,[x]:{...f[x],...S}},E&&m<=50&&(m++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(u=E.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):E.rects),{x:d,y:c}=Zg(u,h,l)),g=-1)}return{x:d,y:c,placement:h,strategy:i,middlewareData:f}};async function Yo(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:h=!1,padding:f=0}=er(t,e),m=nb(f),x=a[h?c==="floating"?"reference":"floating":c],p=ru(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),y=c==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},E=ru(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:l}):y);return{top:(p.top-E.top+m.top)/S.y,bottom:(E.bottom-p.bottom+m.bottom)/S.y,left:(p.left-E.left+m.left)/S.x,right:(E.right-p.right+m.right)/S.x}}const XI=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:l}=t,{element:u,padding:d=0}=er(e,t)||{};if(u==null)return{};const c=nb(d),h={x:n,y:r},f=yp(i),m=gp(f),g=await o.getDimensions(u),x=f==="y",p=x?"top":"left",y=x?"bottom":"right",v=x?"clientHeight":"clientWidth",S=s.reference[m]+s.reference[f]-h[f]-s.floating[m],E=h[f]-s.reference[f],T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let A=T?T[v]:0;(!A||!await(o.isElement==null?void 0:o.isElement(T)))&&(A=a.floating[v]||s.floating[m]);const I=S/2-E/2,D=A/2-g[m]/2-1,P=qr(c[p],D),O=qr(c[y],D),N=P,$=A-g[m]-O,_=A/2-g[m]/2+I,H=bf(N,_,$),G=!l.arrow&&zs(i)!=null&&_!==H&&s.reference[m]/2-(_<N?P:O)-g[m]/2<0,U=G?_<N?_-N:_-$:0;return{[f]:h[f]+U,data:{[f]:H,centerOffset:_-H-U,...G&&{alignmentOffset:U}},reset:G}}}),ZI=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...x}=er(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=tr(i),y=Rn(a),v=tr(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),E=h||(v||!g?[nu(a)]:WI(a)),T=m!=="none";!h&&T&&E.push(...YI(a,g,m,S));const A=[a,...E],I=await Yo(t,x),D=[];let P=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&D.push(I[p]),c){const _=$I(i,o,S);D.push(I[_[0]],I[_[1]])}if(P=[...P,{placement:i,overflows:D}],!D.every(_=>_<=0)){var O,N;const _=(((O=s.flip)==null?void 0:O.index)||0)+1,H=A[_];if(H&&(!(c==="alignment"?y!==Rn(H):!1)||P.every(R=>R.overflows[0]>0&&Rn(R.placement)===y)))return{data:{index:_,overflows:P},reset:{placement:H}};let G=(N=P.filter(U=>U.overflows[0]<=0).sort((U,R)=>U.overflows[1]-R.overflows[1])[0])==null?void 0:N.placement;if(!G)switch(f){case"bestFit":{var $;const U=($=P.filter(R=>{if(T){const M=Rn(R.placement);return M===y||M==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(M=>M>0).reduce((M,k)=>M+k,0)]).sort((R,M)=>R[1]-M[1])[0])==null?void 0:$[0];U&&(G=U);break}case"initialPlacement":G=a;break}if(i!==G)return{reset:{placement:G}}}return{}}}};function ey(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ty(e){return BI.some(t=>e[t]>=0)}const eR=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=er(e,t);switch(r){case"referenceHidden":{const s=await Yo(t,{...i,elementContext:"reference"}),o=ey(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:ty(o)}}}case"escaped":{const s=await Yo(t,{...i,altBoundary:!0}),o=ey(s,n.floating);return{data:{escapedOffsets:o,escaped:ty(o)}}}default:return{}}}}},rb=new Set(["left","top"]);async function tR(e,t){const{placement:n,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=tr(n),a=zs(n),l=Rn(n)==="y",u=rb.has(o)?-1:1,d=s&&l?-1:1,c=er(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),l?{x:f*d,y:h*u}:{x:h*u,y:f*d}}const nR=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=t,l=await tR(t,e);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:o}}}}},rR=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:x=>{let{x:p,y}=x;return{x:p,y}}},...l}=er(e,t),u={x:n,y:r},d=await Yo(t,l),c=Rn(tr(i)),h=mp(c);let f=u[h],m=u[c];if(s){const x=h==="y"?"top":"left",p=h==="y"?"bottom":"right",y=f+d[x],v=f-d[p];f=bf(y,f,v)}if(o){const x=c==="y"?"top":"left",p=c==="y"?"bottom":"right",y=m+d[x],v=m-d[p];m=bf(y,m,v)}const g=a.fn({...t,[h]:f,[c]:m});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:s,[c]:o}}}}}},iR=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:s,middlewareData:o}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=er(e,t),d={x:n,y:r},c=Rn(i),h=mp(c);let f=d[h],m=d[c];const g=er(a,t),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const v=h==="y"?"height":"width",S=s.reference[h]-s.floating[v]+x.mainAxis,E=s.reference[h]+s.reference[v]-x.mainAxis;f<S?f=S:f>E&&(f=E)}if(u){var p,y;const v=h==="y"?"width":"height",S=rb.has(tr(i)),E=s.reference[c]-s.floating[v]+(S&&((p=o.offset)==null?void 0:p[c])||0)+(S?0:x.crossAxis),T=s.reference[c]+s.reference[v]+(S?0:((y=o.offset)==null?void 0:y[c])||0)-(S?x.crossAxis:0);m<E?m=E:m>T&&(m=T)}return{[h]:f,[c]:m}}}},sR=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:s,platform:o,elements:a}=t,{apply:l=()=>{},...u}=er(e,t),d=await Yo(t,u),c=tr(i),h=zs(i),f=Rn(i)==="y",{width:m,height:g}=s.floating;let x,p;c==="top"||c==="bottom"?(x=c,p=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(p=c,x=h==="end"?"top":"bottom");const y=g-d.top-d.bottom,v=m-d.left-d.right,S=qr(g-d[x],y),E=qr(m-d[p],v),T=!t.middlewareData.shift;let A=S,I=E;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(I=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(A=y),T&&!h){const P=Dt(d.left,0),O=Dt(d.right,0),N=Dt(d.top,0),$=Dt(d.bottom,0);f?I=m-2*(P!==0||O!==0?P+O:Dt(d.left,d.right)):A=g-2*(N!==0||$!==0?N+$:Dt(d.top,d.bottom))}await l({...t,availableWidth:I,availableHeight:A});const D=await o.getDimensions(a.floating);return m!==D.width||g!==D.height?{reset:{rects:!0}}:{}}}};function zu(){return typeof window<"u"}function Bs(e){return ib(e)?(e.nodeName||"").toLowerCase():"#document"}function Lt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fn(e){var t;return(t=(ib(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ib(e){return zu()?e instanceof Node||e instanceof Lt(e).Node:!1}function wn(e){return zu()?e instanceof Element||e instanceof Lt(e).Element:!1}function On(e){return zu()?e instanceof HTMLElement||e instanceof Lt(e).HTMLElement:!1}function ny(e){return!zu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Lt(e).ShadowRoot}const oR=new Set(["inline","contents"]);function va(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=xn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!oR.has(i)}const aR=new Set(["table","td","th"]);function lR(e){return aR.has(Bs(e))}const uR=[":popover-open",":modal"];function Bu(e){return uR.some(t=>{try{return e.matches(t)}catch{return!1}})}const cR=["transform","translate","scale","rotate","perspective"],dR=["transform","translate","scale","rotate","perspective","filter"],fR=["paint","layout","strict","content"];function vp(e){const t=wp(),n=wn(e)?xn(e):e;return cR.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||dR.some(r=>(n.willChange||"").includes(r))||fR.some(r=>(n.contain||"").includes(r))}function hR(e){let t=Gr(e);for(;On(t)&&!Rs(t);){if(vp(t))return t;if(Bu(t))return null;t=Gr(t)}return null}function wp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const pR=new Set(["html","body","#document"]);function Rs(e){return pR.has(Bs(e))}function xn(e){return Lt(e).getComputedStyle(e)}function Vu(e){return wn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Bs(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ny(e)&&e.host||Fn(e);return ny(t)?t.host:t}function sb(e){const t=Gr(e);return Rs(t)?e.ownerDocument?e.ownerDocument.body:e.body:On(t)&&va(t)?t:sb(t)}function Qo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=sb(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=Lt(i);if(s){const a=Sf(o);return t.concat(o,o.visualViewport||[],va(i)?i:[],a&&n?Qo(a):[])}return t.concat(i,Qo(i,[],n))}function Sf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ob(e){const t=xn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=On(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,a=tu(n)!==s||tu(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function xp(e){return wn(e)?e:e.contextElement}function fs(e){const t=xp(e);if(!On(t))return Nn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=ob(t);let o=(s?tu(n.width):n.width)/r,a=(s?tu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const mR=Nn(0);function ab(e){const t=Lt(e);return!wp()||!t.visualViewport?mR:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gR(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Lt(e)?!1:t}function Di(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=xp(e);let o=Nn(1);t&&(r?wn(r)&&(o=fs(r)):o=fs(e));const a=gR(s,n,r)?ab(s):Nn(0);let l=(i.left+a.x)/o.x,u=(i.top+a.y)/o.y,d=i.width/o.x,c=i.height/o.y;if(s){const h=Lt(s),f=r&&wn(r)?Lt(r):r;let m=h,g=Sf(m);for(;g&&r&&f!==m;){const x=fs(g),p=g.getBoundingClientRect(),y=xn(g),v=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*x.x,S=p.top+(g.clientTop+parseFloat(y.paddingTop))*x.y;l*=x.x,u*=x.y,d*=x.x,c*=x.y,l+=v,u+=S,m=Lt(g),g=Sf(m)}}return ru({width:d,height:c,x:l,y:u})}function bp(e,t){const n=Vu(e).scrollLeft;return t?t.left+n:Di(Fn(e)).left+n}function lb(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:bp(e,r)),s=r.top+t.scrollTop;return{x:i,y:s}}function yR(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",o=Fn(r),a=t?Bu(t.floating):!1;if(r===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},u=Nn(1);const d=Nn(0),c=On(r);if((c||!c&&!s)&&((Bs(r)!=="body"||va(o))&&(l=Vu(r)),On(r))){const f=Di(r);u=fs(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const h=o&&!c&&!s?lb(o,l,!0):Nn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x+h.x,y:n.y*u.y-l.scrollTop*u.y+d.y+h.y}}function vR(e){return Array.from(e.getClientRects())}function wR(e){const t=Fn(e),n=Vu(e),r=e.ownerDocument.body,i=Dt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Dt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+bp(e);const a=-n.scrollTop;return xn(r).direction==="rtl"&&(o+=Dt(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function xR(e,t){const n=Lt(e),r=Fn(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;const u=wp();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a,y:l}}const bR=new Set(["absolute","fixed"]);function kR(e,t){const n=Di(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=On(e)?fs(e):Nn(1),o=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,u=r*s.y;return{width:o,height:a,x:l,y:u}}function ry(e,t,n){let r;if(t==="viewport")r=xR(e,n);else if(t==="document")r=wR(Fn(e));else if(wn(t))r=kR(t,n);else{const i=ab(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ru(r)}function ub(e,t){const n=Gr(e);return n===t||!wn(n)||Rs(n)?!1:xn(n).position==="fixed"||ub(n,t)}function SR(e,t){const n=t.get(e);if(n)return n;let r=Qo(e,[],!1).filter(a=>wn(a)&&Bs(a)!=="body"),i=null;const s=xn(e).position==="fixed";let o=s?Gr(e):e;for(;wn(o)&&!Rs(o);){const a=xn(o),l=vp(o);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&bR.has(i.position)||va(o)&&!l&&ub(e,o))?r=r.filter(d=>d!==o):i=a,o=Gr(o)}return t.set(e,r),r}function TR(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?Bu(t)?[]:SR(t,this._c):[].concat(n),r],a=o[0],l=o.reduce((u,d)=>{const c=ry(t,d,i);return u.top=Dt(c.top,u.top),u.right=qr(c.right,u.right),u.bottom=qr(c.bottom,u.bottom),u.left=Dt(c.left,u.left),u},ry(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ER(e){const{width:t,height:n}=ob(e);return{width:t,height:n}}function CR(e,t,n){const r=On(t),i=Fn(t),s=n==="fixed",o=Di(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Nn(0);function u(){l.x=bp(i)}if(r||!r&&!s)if((Bs(t)!=="body"||va(i))&&(a=Vu(t)),r){const f=Di(t,!0,s,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&u();s&&!r&&i&&u();const d=i&&!r&&!s?lb(i,a):Nn(0),c=o.left+a.scrollLeft-l.x-d.x,h=o.top+a.scrollTop-l.y-d.y;return{x:c,y:h,width:o.width,height:o.height}}function Fc(e){return xn(e).position==="static"}function iy(e,t){if(!On(e)||xn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Fn(e)===n&&(n=n.ownerDocument.body),n}function cb(e,t){const n=Lt(e);if(Bu(e))return n;if(!On(e)){let i=Gr(e);for(;i&&!Rs(i);){if(wn(i)&&!Fc(i))return i;i=Gr(i)}return n}let r=iy(e,t);for(;r&&lR(r)&&Fc(r);)r=iy(r,t);return r&&Rs(r)&&Fc(r)&&!vp(r)?n:r||hR(e)||n}const PR=async function(e){const t=this.getOffsetParent||cb,n=this.getDimensions,r=await n(e.floating);return{reference:CR(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function AR(e){return xn(e).direction==="rtl"}const IR={convertOffsetParentRelativeRectToViewportRelativeRect:yR,getDocumentElement:Fn,getClippingRect:TR,getOffsetParent:cb,getElementRects:PR,getClientRects:vR,getDimensions:ER,getScale:fs,isElement:wn,isRTL:AR};function db(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function RR(e,t){let n=null,r;const i=Fn(e);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const u=e.getBoundingClientRect(),{left:d,top:c,width:h,height:f}=u;if(a||t(),!h||!f)return;const m=Qa(c),g=Qa(i.clientWidth-(d+h)),x=Qa(i.clientHeight-(c+f)),p=Qa(d),v={rootMargin:-m+"px "+-g+"px "+-x+"px "+-p+"px",threshold:Dt(0,qr(1,l))||1};let S=!0;function E(T){const A=T[0].intersectionRatio;if(A!==l){if(!S)return o();A?o(!1,A):r=setTimeout(()=>{o(!1,1e-7)},1e3)}A===1&&!db(u,e.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(E,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,v)}n.observe(e)}return o(!0),s}function jR(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=xp(e),d=i||s?[...u?Qo(u):[],...Qo(t)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const c=u&&a?RR(u,n):null;let h=-1,f=null;o&&(f=new ResizeObserver(p=>{let[y]=p;y&&y.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),n()}),u&&!l&&f.observe(u),f.observe(t));let m,g=l?Di(e):null;l&&x();function x(){const p=Di(e);g&&!db(g,p)&&n(),g=p,m=requestAnimationFrame(x)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),c==null||c(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const DR=nR,NR=rR,MR=ZI,LR=sR,OR=eR,sy=XI,_R=iR,FR=(e,t,n)=>{const r=new Map,i={platform:IR,...n},s={...i.platform,_c:r};return JI(e,t,{...i,platform:s})};var zR=typeof document<"u",BR=function(){},bl=zR?b.useLayoutEffect:BR;function iu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!iu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const s=i[r];if(!(s==="_owner"&&e.$$typeof)&&!iu(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function fb(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function oy(e,t){const n=fb(e);return Math.round(t*n)/n}function zc(e){const t=b.useRef(e);return bl(()=>{t.current=e}),t}function VR(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[d,c]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=b.useState(r);iu(h,r)||f(r);const[m,g]=b.useState(null),[x,p]=b.useState(null),y=b.useCallback(R=>{R!==T.current&&(T.current=R,g(R))},[]),v=b.useCallback(R=>{R!==A.current&&(A.current=R,p(R))},[]),S=s||m,E=o||x,T=b.useRef(null),A=b.useRef(null),I=b.useRef(d),D=l!=null,P=zc(l),O=zc(i),N=zc(u),$=b.useCallback(()=>{if(!T.current||!A.current)return;const R={placement:t,strategy:n,middleware:h};O.current&&(R.platform=O.current),FR(T.current,A.current,R).then(M=>{const k={...M,isPositioned:N.current!==!1};_.current&&!iu(I.current,k)&&(I.current=k,ma.flushSync(()=>{c(k)}))})},[h,t,n,O,N]);bl(()=>{u===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,c(R=>({...R,isPositioned:!1})))},[u]);const _=b.useRef(!1);bl(()=>(_.current=!0,()=>{_.current=!1}),[]),bl(()=>{if(S&&(T.current=S),E&&(A.current=E),S&&E){if(P.current)return P.current(S,E,$);$()}},[S,E,$,P,D]);const H=b.useMemo(()=>({reference:T,floating:A,setReference:y,setFloating:v}),[y,v]),G=b.useMemo(()=>({reference:S,floating:E}),[S,E]),U=b.useMemo(()=>{const R={position:n,left:0,top:0};if(!G.floating)return R;const M=oy(G.floating,d.x),k=oy(G.floating,d.y);return a?{...R,transform:"translate("+M+"px, "+k+"px)",...fb(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:k}},[n,a,G.floating,d.x,d.y]);return b.useMemo(()=>({...d,update:$,refs:H,elements:G,floatingStyles:U}),[d,$,H,G,U])}const UR=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?sy({element:r.current,padding:i}).fn(n):{}:r?sy({element:r,padding:i}).fn(n):{}}}},HR=(e,t)=>({...DR(e),options:[e,t]}),$R=(e,t)=>({...NR(e),options:[e,t]}),WR=(e,t)=>({..._R(e),options:[e,t]}),qR=(e,t)=>({...MR(e),options:[e,t]}),GR=(e,t)=>({...LR(e),options:[e,t]}),KR=(e,t)=>({...OR(e),options:[e,t]}),YR=(e,t)=>({...UR(e),options:[e,t]});var QR="Arrow",hb=b.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...s}=e;return w.jsx(Et.svg,{...s,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});hb.displayName=QR;var JR=hb;function XR(e){const[t,n]=b.useState(void 0);return Wr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,u=Array.isArray(l)?l[0]:l;o=u.inlineSize,a=u.blockSize}else o=e.offsetWidth,a=e.offsetHeight;n({width:o,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var pb="Popper",[mb,gb]=Ou(pb),[sU,yb]=mb(pb),vb="PopperAnchor",wb=b.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,s=yb(vb,n),o=b.useRef(null),a=vn(t,o);return b.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||o.current)}),r?null:w.jsx(Et.div,{...i,ref:a})});wb.displayName=vb;var kp="PopperContent",[ZR,ej]=mb(kp),xb=b.forwardRef((e,t)=>{var oe,ot,at,yt,Pt,ar;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:c="partial",hideWhenDetached:h=!1,updatePositionStrategy:f="optimized",onPlaced:m,...g}=e,x=yb(kp,n),[p,y]=b.useState(null),v=vn(t,bn=>y(bn)),[S,E]=b.useState(null),T=XR(S),A=(T==null?void 0:T.width)??0,I=(T==null?void 0:T.height)??0,D=r+(s!=="center"?"-"+s:""),P=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(u)?u:[u],N=O.length>0,$={padding:P,boundary:O.filter(nj),altBoundary:N},{refs:_,floatingStyles:H,placement:G,isPositioned:U,middlewareData:R}=VR({strategy:"fixed",placement:D,whileElementsMounted:(...bn)=>jR(...bn,{animationFrame:f==="always"}),elements:{reference:x.anchor},middleware:[HR({mainAxis:i+I,alignmentAxis:o}),l&&$R({mainAxis:!0,crossAxis:!1,limiter:c==="partial"?WR():void 0,...$}),l&&qR({...$}),GR({...$,apply:({elements:bn,rects:_i,availableWidth:Fi,availableHeight:ni})=>{const{width:zi,height:ri}=_i.reference,Bn=bn.floating.style;Bn.setProperty("--radix-popper-available-width",`${Fi}px`),Bn.setProperty("--radix-popper-available-height",`${ni}px`),Bn.setProperty("--radix-popper-anchor-width",`${zi}px`),Bn.setProperty("--radix-popper-anchor-height",`${ri}px`)}}),S&&YR({element:S,padding:a}),rj({arrowWidth:A,arrowHeight:I}),h&&KR({strategy:"referenceHidden",...$})]}),[M,k]=Sb(G),Y=$r(m);Wr(()=>{U&&(Y==null||Y())},[U,Y]);const K=(oe=R.arrow)==null?void 0:oe.x,C=(ot=R.arrow)==null?void 0:ot.y,J=((at=R.arrow)==null?void 0:at.centerOffset)!==0,[me,le]=b.useState();return Wr(()=>{p&&le(window.getComputedStyle(p).zIndex)},[p]),w.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...H,transform:U?H.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[(yt=R.transformOrigin)==null?void 0:yt.x,(Pt=R.transformOrigin)==null?void 0:Pt.y].join(" "),...((ar=R.hide)==null?void 0:ar.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:w.jsx(ZR,{scope:n,placedSide:M,onArrowChange:E,arrowX:K,arrowY:C,shouldHideArrow:J,children:w.jsx(Et.div,{"data-side":M,"data-align":k,...g,ref:v,style:{...g.style,animation:U?void 0:"none"}})})})});xb.displayName=kp;var bb="PopperArrow",tj={top:"bottom",right:"left",bottom:"top",left:"right"},kb=b.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,s=ej(bb,r),o=tj[s.placedSide];return w.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:w.jsx(JR,{...i,ref:n,style:{...i.style,display:"block"}})})});kb.displayName=bb;function nj(e){return e!==null}var rj=e=>({name:"transformOrigin",options:e,fn(t){var x,p,y;const{placement:n,rects:r,middlewareData:i}=t,o=((x=i.arrow)==null?void 0:x.centerOffset)!==0,a=o?0:e.arrowWidth,l=o?0:e.arrowHeight,[u,d]=Sb(n),c={start:"0%",center:"50%",end:"100%"}[d],h=(((p=i.arrow)==null?void 0:p.x)??0)+a/2,f=(((y=i.arrow)==null?void 0:y.y)??0)+l/2;let m="",g="";return u==="bottom"?(m=o?c:`${h}px`,g=`${-l}px`):u==="top"?(m=o?c:`${h}px`,g=`${r.floating.height+l}px`):u==="right"?(m=`${-l}px`,g=o?c:`${f}px`):u==="left"&&(m=`${r.floating.width+l}px`,g=o?c:`${f}px`),{data:{x:m,y:g}}}});function Sb(e){const[t,n="center"]=e.split("-");return[t,n]}var ij=wb,sj=xb,oj=kb,[Uu,oU]=Ou("Tooltip",[gb]),Sp=gb(),Tb="TooltipProvider",aj=700,ay="tooltip.open",[lj,Eb]=Uu(Tb),Cb=e=>{const{__scopeTooltip:t,delayDuration:n=aj,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:s}=e,o=b.useRef(!0),a=b.useRef(!1),l=b.useRef(0);return b.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),w.jsx(lj,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:b.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:b.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:b.useCallback(u=>{a.current=u},[]),disableHoverableContent:i,children:s})};Cb.displayName=Tb;var Pb="Tooltip",[aU,Hu]=Uu(Pb),Tf="TooltipTrigger",uj=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Hu(Tf,n),s=Eb(Tf,n),o=Sp(n),a=b.useRef(null),l=vn(t,a,i.onTriggerChange),u=b.useRef(!1),d=b.useRef(!1),c=b.useCallback(()=>u.current=!1,[]);return b.useEffect(()=>()=>document.removeEventListener("pointerup",c),[c]),w.jsx(ij,{asChild:!0,...o,children:w.jsx(Et.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Ue(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ue(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Ue(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",c,{once:!0})}),onFocus:Ue(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:Ue(e.onBlur,i.onClose),onClick:Ue(e.onClick,i.onClose)})})});uj.displayName=Tf;var cj="TooltipPortal",[lU,dj]=Uu(cj,{forceMount:void 0}),js="TooltipContent",Ab=b.forwardRef((e,t)=>{const n=dj(js,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...s}=e,o=Hu(js,e.__scopeTooltip);return w.jsx(op,{present:r||o.open,children:o.disableHoverableContent?w.jsx(Ib,{side:i,...s,ref:t}):w.jsx(fj,{side:i,...s,ref:t})})}),fj=b.forwardRef((e,t)=>{const n=Hu(js,e.__scopeTooltip),r=Eb(js,e.__scopeTooltip),i=b.useRef(null),s=vn(t,i),[o,a]=b.useState(null),{trigger:l,onClose:u}=n,d=i.current,{onPointerInTransitChange:c}=r,h=b.useCallback(()=>{a(null),c(!1)},[c]),f=b.useCallback((m,g)=>{const x=m.currentTarget,p={x:m.clientX,y:m.clientY},y=yj(p,x.getBoundingClientRect()),v=vj(p,y),S=wj(g.getBoundingClientRect()),E=bj([...v,...S]);a(E),c(!0)},[c]);return b.useEffect(()=>()=>h(),[h]),b.useEffect(()=>{if(l&&d){const m=x=>f(x,d),g=x=>f(x,l);return l.addEventListener("pointerleave",m),d.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",m),d.removeEventListener("pointerleave",g)}}},[l,d,f,h]),b.useEffect(()=>{if(o){const m=g=>{const x=g.target,p={x:g.clientX,y:g.clientY},y=(l==null?void 0:l.contains(x))||(d==null?void 0:d.contains(x)),v=!xj(p,o);y?h():v&&(h(),u())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[l,d,o,u,h]),w.jsx(Ib,{...e,ref:s})}),[hj,pj]=Uu(Pb,{isInside:!1}),mj=pA("TooltipContent"),Ib=b.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=e,l=Hu(js,n),u=Sp(n),{onClose:d}=l;return b.useEffect(()=>(document.addEventListener(ay,d),()=>document.removeEventListener(ay,d)),[d]),b.useEffect(()=>{if(l.trigger){const c=h=>{const f=h.target;f!=null&&f.contains(l.trigger)&&d()};return window.addEventListener("scroll",c,{capture:!0}),()=>window.removeEventListener("scroll",c,{capture:!0})}},[l.trigger,d]),w.jsx(sp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:c=>c.preventDefault(),onDismiss:d,children:w.jsxs(sj,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(mj,{children:r}),w.jsx(hj,{scope:n,isInside:!0,children:w.jsx(zA,{id:l.contentId,role:"tooltip",children:i||r})})]})})});Ab.displayName=js;var Rb="TooltipArrow",gj=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Sp(n);return pj(Rb,n).isInside?null:w.jsx(oj,{...i,...r,ref:t})});gj.displayName=Rb;function yj(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,i,s)){case s:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function vj(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function wj(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function xj(e,t){const{x:n,y:r}=e;let i=!1;for(let s=0,o=t.length-1;s<t.length;o=s++){const a=t[s],l=t[o],u=a.x,d=a.y,c=l.x,h=l.y;d>r!=h>r&&n<(c-u)*(r-d)/(h-d)+u&&(i=!i)}return i}function bj(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),kj(t)}function kj(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const s=t[t.length-1],o=t[t.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Sj=Cb,jb=Ab;const Tj=Sj,Ej=b.forwardRef(({className:e,sideOffset:t=4,...n},r)=>w.jsx(jb,{ref:r,sideOffset:t,className:Ft("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Ej.displayName=jb.displayName;var $u=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Wu=typeof window>"u"||"Deno"in globalThis;function un(){}function Cj(e,t){return typeof e=="function"?e(t):e}function Pj(e){return typeof e=="number"&&e>=0&&e!==1/0}function Aj(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ef(e,t){return typeof e=="function"?e(t):e}function Ij(e,t){return typeof e=="function"?e(t):e}function ly(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=e;if(o){if(r){if(t.queryHash!==Tp(o,t.options))return!1}else if(!Xo(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||s&&!s(t))}function uy(e,t){const{exact:n,status:r,predicate:i,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(Jo(t.options.mutationKey)!==Jo(s))return!1}else if(!Xo(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Tp(e,t){return((t==null?void 0:t.queryKeyHashFn)||Jo)(e)}function Jo(e){return JSON.stringify(e,(t,n)=>Cf(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Xo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Xo(e[n],t[n])):!1}function Db(e,t){if(e===t)return e;const n=cy(e)&&cy(t);if(n||Cf(e)&&Cf(t)){const r=n?e:Object.keys(e),i=r.length,s=n?t:Object.keys(t),o=s.length,a=n?[]:{},l=new Set(r);let u=0;for(let d=0;d<o;d++){const c=n?d:s[d];(!n&&l.has(c)||n)&&e[c]===void 0&&t[c]===void 0?(a[c]=void 0,u++):(a[c]=Db(e[c],t[c]),a[c]===e[c]&&e[c]!==void 0&&u++)}return i===o&&u===i?e:a}return t}function cy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Cf(e){if(!dy(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!dy(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function dy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Rj(e){return new Promise(t=>{setTimeout(t,e)})}function jj(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Db(e,t):t}function Dj(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Nj(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Ep=Symbol();function Nb(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Ep?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var yi,Tr,ms,Uw,Mj=(Uw=class extends $u{constructor(){super();fe(this,yi);fe(this,Tr);fe(this,ms);ee(this,ms,t=>{if(!Wu&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){L(this,Tr)||this.setEventListener(L(this,ms))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Tr))==null||t.call(this),ee(this,Tr,void 0))}setEventListener(t){var n;ee(this,ms,t),(n=L(this,Tr))==null||n.call(this),ee(this,Tr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){L(this,yi)!==t&&(ee(this,yi,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof L(this,yi)=="boolean"?L(this,yi):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},yi=new WeakMap,Tr=new WeakMap,ms=new WeakMap,Uw),Mb=new Mj,gs,Er,ys,Hw,Lj=(Hw=class extends $u{constructor(){super();fe(this,gs,!0);fe(this,Er);fe(this,ys);ee(this,ys,t=>{if(!Wu&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,Er)||this.setEventListener(L(this,ys))}onUnsubscribe(){var t;this.hasListeners()||((t=L(this,Er))==null||t.call(this),ee(this,Er,void 0))}setEventListener(t){var n;ee(this,ys,t),(n=L(this,Er))==null||n.call(this),ee(this,Er,t(this.setOnline.bind(this)))}setOnline(t){L(this,gs)!==t&&(ee(this,gs,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return L(this,gs)}},gs=new WeakMap,Er=new WeakMap,ys=new WeakMap,Hw),su=new Lj;function Oj(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function _j(e){return Math.min(1e3*2**e,3e4)}function Lb(e){return(e??"online")==="online"?su.isOnline():!0}var Ob=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Bc(e){return e instanceof Ob}function _b(e){let t=!1,n=0,r=!1,i;const s=Oj(),o=g=>{var x;r||(h(new Ob(g)),(x=e.abort)==null||x.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>Mb.isFocused()&&(e.networkMode==="always"||su.isOnline())&&e.canRun(),d=()=>Lb(e.networkMode)&&e.canRun(),c=g=>{var x;r||(r=!0,(x=e.onSuccess)==null||x.call(e,g),i==null||i(),s.resolve(g))},h=g=>{var x;r||(r=!0,(x=e.onError)==null||x.call(e,g),i==null||i(),s.reject(g))},f=()=>new Promise(g=>{var x;i=p=>{(r||u())&&g(p)},(x=e.onPause)==null||x.call(e)}).then(()=>{var g;i=void 0,r||(g=e.onContinue)==null||g.call(e)}),m=()=>{if(r)return;let g;const x=n===0?e.initialPromise:void 0;try{g=x??e.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(c).catch(p=>{var T;if(r)return;const y=e.retry??(Wu?0:3),v=e.retryDelay??_j,S=typeof v=="function"?v(n,p):v,E=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,p);if(t||!E){h(p);return}n++,(T=e.onFail)==null||T.call(e,n,p),Rj(S).then(()=>u()?void 0:f()).then(()=>{t?h(p):m()})})};return{promise:s,cancel:o,continue:()=>(i==null||i(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?m():f().then(m),s)}}var Fj=e=>setTimeout(e,0);function zj(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=Fj;const s=a=>{t?e.push(a):i(()=>{n(a)})},o=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var ct=zj(),vi,$w,Fb=($w=class{constructor(){fe(this,vi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Pj(this.gcTime)&&ee(this,vi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Wu?1/0:5*60*1e3))}clearGcTimeout(){L(this,vi)&&(clearTimeout(L(this,vi)),ee(this,vi,void 0))}},vi=new WeakMap,$w),vs,wi,Ht,xi,et,la,bi,cn,Hn,Ww,Bj=(Ww=class extends Fb{constructor(t){super();fe(this,cn);fe(this,vs);fe(this,wi);fe(this,Ht);fe(this,xi);fe(this,et);fe(this,la);fe(this,bi);ee(this,bi,!1),ee(this,la,t.defaultOptions),this.setOptions(t.options),this.observers=[],ee(this,xi,t.client),ee(this,Ht,L(this,xi).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ee(this,vs,Uj(this.options)),this.state=t.state??L(this,vs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=L(this,et))==null?void 0:t.promise}setOptions(t){this.options={...L(this,la),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,Ht).remove(this)}setData(t,n){const r=jj(this.state.data,t,this.options);return Je(this,cn,Hn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Je(this,cn,Hn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=L(this,et))==null?void 0:r.promise;return(i=L(this,et))==null||i.cancel(t),n?n.then(un).catch(un):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,vs))}isActive(){return this.observers.some(t=>Ij(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ep||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Ef(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Aj(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,et))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=L(this,et))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),L(this,Ht).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(L(this,et)&&(L(this,bi)?L(this,et).cancel({revert:!0}):L(this,et).cancelRetry()),this.scheduleGc()),L(this,Ht).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Je(this,cn,Hn).call(this,{type:"invalidate"})}fetch(t,n){var u,d,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(L(this,et))return L(this,et).continueRetry(),L(this,et).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(f=>f.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(ee(this,bi,!0),r.signal)})},s=()=>{const h=Nb(this.options,n),m=(()=>{const g={client:L(this,xi),queryKey:this.queryKey,meta:this.meta};return i(g),g})();return ee(this,bi,!1),this.options.persister?this.options.persister(h,m,this):h(m)},a=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:L(this,xi),state:this.state,fetchFn:s};return i(h),h})();(u=this.options.behavior)==null||u.onFetch(a,this),ee(this,wi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Je(this,cn,Hn).call(this,{type:"fetch",meta:(c=a.fetchOptions)==null?void 0:c.meta});const l=h=>{var f,m,g,x;Bc(h)&&h.silent||Je(this,cn,Hn).call(this,{type:"error",error:h}),Bc(h)||((m=(f=L(this,Ht).config).onError)==null||m.call(f,h,this),(x=(g=L(this,Ht).config).onSettled)==null||x.call(g,this.state.data,h,this)),this.scheduleGc()};return ee(this,et,_b({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var f,m,g,x;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(p){l(p);return}(m=(f=L(this,Ht).config).onSuccess)==null||m.call(f,h,this),(x=(g=L(this,Ht).config).onSettled)==null||x.call(g,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,f)=>{Je(this,cn,Hn).call(this,{type:"failed",failureCount:h,error:f})},onPause:()=>{Je(this,cn,Hn).call(this,{type:"pause"})},onContinue:()=>{Je(this,cn,Hn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),L(this,et).start()}},vs=new WeakMap,wi=new WeakMap,Ht=new WeakMap,xi=new WeakMap,et=new WeakMap,la=new WeakMap,bi=new WeakMap,cn=new WeakSet,Hn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Vj(r.data,this.options),fetchMeta:t.meta??null};case"success":return ee(this,wi,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Bc(i)&&i.revert&&L(this,wi)?{...L(this,wi),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),ct.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),L(this,Ht).notify({query:this,type:"updated",action:t})})},Ww);function Vj(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Lb(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Uj(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Cn,qw,Hj=(qw=class extends $u{constructor(t={}){super();fe(this,Cn);this.config=t,ee(this,Cn,new Map)}build(t,n,r){const i=n.queryKey,s=n.queryHash??Tp(i,n);let o=this.get(s);return o||(o=new Bj({client:t,queryKey:i,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){L(this,Cn).has(t.queryHash)||(L(this,Cn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=L(this,Cn).get(t.queryHash);n&&(t.destroy(),n===t&&L(this,Cn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ct.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return L(this,Cn).get(t)}getAll(){return[...L(this,Cn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>ly(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>ly(t,r)):n}notify(t){ct.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ct.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ct.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Cn=new WeakMap,qw),Pn,lt,ki,An,yr,Gw,$j=(Gw=class extends Fb{constructor(t){super();fe(this,An);fe(this,Pn);fe(this,lt);fe(this,ki);this.mutationId=t.mutationId,ee(this,lt,t.mutationCache),ee(this,Pn,[]),this.state=t.state||Wj(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){L(this,Pn).includes(t)||(L(this,Pn).push(t),this.clearGcTimeout(),L(this,lt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ee(this,Pn,L(this,Pn).filter(n=>n!==t)),this.scheduleGc(),L(this,lt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){L(this,Pn).length||(this.state.status==="pending"?this.scheduleGc():L(this,lt).remove(this))}continue(){var t;return((t=L(this,ki))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,o,a,l,u,d,c,h,f,m,g,x,p,y,v,S,E,T,A,I;const n=()=>{Je(this,An,yr).call(this,{type:"continue"})};ee(this,ki,_b({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(D,P)=>{Je(this,An,yr).call(this,{type:"failed",failureCount:D,error:P})},onPause:()=>{Je(this,An,yr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,lt).canRun(this)}));const r=this.state.status==="pending",i=!L(this,ki).canStart();try{if(r)n();else{Je(this,An,yr).call(this,{type:"pending",variables:t,isPaused:i}),await((o=(s=L(this,lt).config).onMutate)==null?void 0:o.call(s,t,this));const P=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));P!==this.state.context&&Je(this,An,yr).call(this,{type:"pending",context:P,variables:t,isPaused:i})}const D=await L(this,ki).start();return await((d=(u=L(this,lt).config).onSuccess)==null?void 0:d.call(u,D,t,this.state.context,this)),await((h=(c=this.options).onSuccess)==null?void 0:h.call(c,D,t,this.state.context)),await((m=(f=L(this,lt).config).onSettled)==null?void 0:m.call(f,D,null,this.state.variables,this.state.context,this)),await((x=(g=this.options).onSettled)==null?void 0:x.call(g,D,null,t,this.state.context)),Je(this,An,yr).call(this,{type:"success",data:D}),D}catch(D){try{throw await((y=(p=L(this,lt).config).onError)==null?void 0:y.call(p,D,t,this.state.context,this)),await((S=(v=this.options).onError)==null?void 0:S.call(v,D,t,this.state.context)),await((T=(E=L(this,lt).config).onSettled)==null?void 0:T.call(E,void 0,D,this.state.variables,this.state.context,this)),await((I=(A=this.options).onSettled)==null?void 0:I.call(A,void 0,D,t,this.state.context)),D}finally{Je(this,An,yr).call(this,{type:"error",error:D})}}finally{L(this,lt).runNext(this)}}},Pn=new WeakMap,lt=new WeakMap,ki=new WeakMap,An=new WeakSet,yr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ct.batch(()=>{L(this,Pn).forEach(r=>{r.onMutationUpdate(t)}),L(this,lt).notify({mutation:this,type:"updated",action:t})})},Gw);function Wj(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var qn,dn,ua,Kw,qj=(Kw=class extends $u{constructor(t={}){super();fe(this,qn);fe(this,dn);fe(this,ua);this.config=t,ee(this,qn,new Set),ee(this,dn,new Map),ee(this,ua,0)}build(t,n,r){const i=new $j({mutationCache:this,mutationId:++Ia(this,ua)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){L(this,qn).add(t);const n=Ja(t);if(typeof n=="string"){const r=L(this,dn).get(n);r?r.push(t):L(this,dn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(L(this,qn).delete(t)){const n=Ja(t);if(typeof n=="string"){const r=L(this,dn).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&L(this,dn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ja(t);if(typeof n=="string"){const r=L(this,dn).get(n),i=r==null?void 0:r.find(s=>s.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Ja(t);if(typeof n=="string"){const i=(r=L(this,dn).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ct.batch(()=>{L(this,qn).forEach(t=>{this.notify({type:"removed",mutation:t})}),L(this,qn).clear(),L(this,dn).clear()})}getAll(){return Array.from(L(this,qn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>uy(n,r))}findAll(t={}){return this.getAll().filter(n=>uy(t,n))}notify(t){ct.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ct.batch(()=>Promise.all(t.map(n=>n.continue().catch(un))))}},qn=new WeakMap,dn=new WeakMap,ua=new WeakMap,Kw);function Ja(e){var t;return(t=e.options.scope)==null?void 0:t.id}function fy(e){return{onFetch:(t,n)=>{var d,c,h,f,m;const r=t.options,i=(h=(c=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:c.fetchMore)==null?void 0:h.direction,s=((f=t.state.data)==null?void 0:f.pages)||[],o=((m=t.state.data)==null?void 0:m.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let g=!1;const x=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},p=Nb(t.options,t.fetchOptions),y=async(v,S,E)=>{if(g)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const A=(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:S,direction:E?"backward":"forward",meta:t.options.meta};return x(O),O})(),I=await p(A),{maxPages:D}=t.options,P=E?Nj:Dj;return{pages:P(v.pages,I,D),pageParams:P(v.pageParams,S,D)}};if(i&&s.length){const v=i==="backward",S=v?Gj:hy,E={pages:s,pageParams:o},T=S(r,E);a=await y(E,T,v)}else{const v=e??s.length;do{const S=l===0?o[0]??r.initialPageParam:hy(r,a);if(l>0&&S==null)break;a=await y(a,S),l++}while(l<v)}return a};t.options.persister?t.fetchFn=()=>{var g,x;return(x=(g=t.options).persister)==null?void 0:x.call(g,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function hy(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Gj(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var je,Cr,Pr,ws,xs,Ar,bs,ks,Yw,Kj=(Yw=class{constructor(e={}){fe(this,je);fe(this,Cr);fe(this,Pr);fe(this,ws);fe(this,xs);fe(this,Ar);fe(this,bs);fe(this,ks);ee(this,je,e.queryCache||new Hj),ee(this,Cr,e.mutationCache||new qj),ee(this,Pr,e.defaultOptions||{}),ee(this,ws,new Map),ee(this,xs,new Map),ee(this,Ar,0)}mount(){Ia(this,Ar)._++,L(this,Ar)===1&&(ee(this,bs,Mb.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,je).onFocus())})),ee(this,ks,su.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,je).onOnline())})))}unmount(){var e,t;Ia(this,Ar)._--,L(this,Ar)===0&&((e=L(this,bs))==null||e.call(this),ee(this,bs,void 0),(t=L(this,ks))==null||t.call(this),ee(this,ks,void 0))}isFetching(e){return L(this,je).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return L(this,Cr).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,je).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=L(this,je).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Ef(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return L(this,je).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=L(this,je).get(r.queryHash),s=i==null?void 0:i.state.data,o=Cj(t,s);if(o!==void 0)return L(this,je).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return ct.batch(()=>L(this,je).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=L(this,je).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=L(this,je);ct.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=L(this,je);return ct.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=ct.batch(()=>L(this,je).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(un).catch(un)}invalidateQueries(e,t={}){return ct.batch(()=>(L(this,je).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=ct.batch(()=>L(this,je).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(un)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(un)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=L(this,je).build(this,t);return n.isStaleByTime(Ef(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(un).catch(un)}fetchInfiniteQuery(e){return e.behavior=fy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(un).catch(un)}ensureInfiniteQueryData(e){return e.behavior=fy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return su.isOnline()?L(this,Cr).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,je)}getMutationCache(){return L(this,Cr)}getDefaultOptions(){return L(this,Pr)}setDefaultOptions(e){ee(this,Pr,e)}setQueryDefaults(e,t){L(this,ws).set(Jo(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...L(this,ws).values()],n={};return t.forEach(r=>{Xo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){L(this,xs).set(Jo(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...L(this,xs).values()],n={};return t.forEach(r=>{Xo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...L(this,Pr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Tp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Ep&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...L(this,Pr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){L(this,je).clear(),L(this,Cr).clear()}},je=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,ws=new WeakMap,xs=new WeakMap,Ar=new WeakMap,bs=new WeakMap,ks=new WeakMap,Yw),Yj=b.createContext(void 0),Qj=({client:e,children:t})=>(b.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),w.jsx(Yj.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}var jr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jr||(jr={}));const py="popstate";function Jj(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Pf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ou(i)}return Zj(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zb(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xj(){return Math.random().toString(36).substr(2,8)}function my(e,t){return{usr:e.state,key:e.key,idx:t}}function Pf(e,t,n,r){return n===void 0&&(n=null),Zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vs(t):t,{state:n,key:t&&t.key||r||Xj()})}function ou(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Zj(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Zo({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=jr.Pop;let x=d(),p=x==null?null:x-u;u=x,l&&l({action:a,location:g.location,delta:p})}function h(x,p){a=jr.Push;let y=Pf(g.location,x,p);u=d()+1;let v=my(y,u),S=g.createHref(y);try{o.pushState(v,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}s&&l&&l({action:a,location:g.location,delta:1})}function f(x,p){a=jr.Replace;let y=Pf(g.location,x,p);u=d();let v=my(y,u),S=g.createHref(y);o.replaceState(v,"",S),s&&l&&l({action:a,location:g.location,delta:0})}function m(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:ou(x);return y=y.replace(/ $/,"%20"),Le(p,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,p)}let g={get action(){return a},get location(){return e(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(py,c),l=x,()=>{i.removeEventListener(py,c),l=null}},createHref(x){return t(i,x)},createURL:m,encodeLocation(x){let p=m(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:f,go(x){return o.go(x)}};return g}var gy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gy||(gy={}));function eD(e,t,n){return n===void 0&&(n="/"),tD(e,t,n,!1)}function tD(e,t,n,r){let i=typeof t=="string"?Vs(t):t,s=Cp(i.pathname||"/",n);if(s==null)return null;let o=Bb(e);nD(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=hD(s);a=dD(o[l],u,r)}return a}function Bb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bb(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:uD(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Vb(s.path))i(s,o,l)}),t}function Vb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Vb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function nD(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cD(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rD=/^:[\w-]+$/,iD=3,sD=2,oD=1,aD=10,lD=-2,yy=e=>e==="*";function uD(e,t){let n=e.split("/"),r=n.length;return n.some(yy)&&(r+=lD),t&&(r+=sD),n.filter(i=>!yy(i)).reduce((i,s)=>i+(rD.test(s)?iD:s===""?oD:aD),r)}function cD(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dD(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",c=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Vr([s,c.pathname]),pathnameBase:yD(Vr([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=Vr([s,c.pathnameBase]))}return o}function vy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fD(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let g=a[c]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const m=a[c];return f&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function fD(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zb(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hD(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zb(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pD(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vs(e):e;return{pathname:n?n.startsWith("/")?n:mD(n,t):t,search:vD(r),hash:wD(i)}}function mD(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e,t){let n=gD(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vs(e):(i=Zo({},e),Le(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?t[c]:"/"}let l=pD(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Vr=e=>e.join("/").replace(/\/\/+/g,"/"),yD=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vD=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wD=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xD(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ub=["post","put","patch","delete"];new Set(Ub);const bD=["get",...Ub];new Set(bD);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}const Ip=b.createContext(null),kD=b.createContext(null),Zr=b.createContext(null),qu=b.createContext(null),ir=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Hb=b.createContext(null);function SD(e,t){let{relative:n}=t===void 0?{}:t;Us()||Le(!1);let{basename:r,navigator:i}=b.useContext(Zr),{hash:s,pathname:o,search:a}=Gb(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Us(){return b.useContext(qu)!=null}function sr(){return Us()||Le(!1),b.useContext(qu).location}function $b(e){b.useContext(Zr).static||b.useLayoutEffect(e)}function Wb(){let{isDataRoute:e}=b.useContext(ir);return e?OD():TD()}function TD(){Us()||Le(!1);let e=b.useContext(Ip),{basename:t,future:n,navigator:r}=b.useContext(Zr),{matches:i}=b.useContext(ir),{pathname:s}=sr(),o=JSON.stringify(Pp(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return $b(()=>{a.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Ap(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Vr([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,o,s,e])}function qb(){let{matches:e}=b.useContext(ir),t=e[e.length-1];return t?t.params:{}}function Gb(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Zr),{matches:i}=b.useContext(ir),{pathname:s}=sr(),o=JSON.stringify(Pp(i,r.v7_relativeSplatPath));return b.useMemo(()=>Ap(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function ED(e,t){return CD(e,t)}function CD(e,t,n,r){Us()||Le(!1);let{navigator:i}=b.useContext(Zr),{matches:s}=b.useContext(ir),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=sr(),d;if(t){var c;let x=typeof t=="string"?Vs(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||Le(!1),d=x}else d=u;let h=d.pathname||"/",f=h;if(l!=="/"){let x=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let m=eD(e,{pathname:f}),g=jD(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return t&&g?b.createElement(qu.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jr.Pop}},g):g}function PD(){let e=LD(),t=xD(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const AD=b.createElement(PD,null);class ID extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(ir.Provider,{value:this.props.routeContext},b.createElement(Hb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RD(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Ip);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ir.Provider,{value:t},r)}function jD(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||Le(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:f}=n,m=c.route.loader&&h[c.route.id]===void 0&&(!f||f[c.route.id]===void 0);if(c.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let f,m=!1,g=null,x=null;n&&(f=a&&c.route.id?a[c.route.id]:void 0,g=c.route.errorElement||AD,l&&(u<0&&h===0?(m=!0,x=null):u===h&&(m=!0,x=c.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,h+1)),y=()=>{let v;return f?v=g:m?v=x:c.route.Component?v=b.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,b.createElement(RD,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?b.createElement(ID,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var Kb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kb||{}),au=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(au||{});function DD(e){let t=b.useContext(Ip);return t||Le(!1),t}function ND(e){let t=b.useContext(kD);return t||Le(!1),t}function MD(e){let t=b.useContext(ir);return t||Le(!1),t}function Yb(e){let t=MD(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function LD(){var e;let t=b.useContext(Hb),n=ND(au.UseRouteError),r=Yb(au.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function OD(){let{router:e}=DD(Kb.UseNavigateStable),t=Yb(au.UseNavigateStable),n=b.useRef(!1);return $b(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ea({fromRouteId:t},s)))},[e,t])}function _D(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Af(e){let{to:t,replace:n,state:r,relative:i}=e;Us()||Le(!1);let{future:s,static:o}=b.useContext(Zr),{matches:a}=b.useContext(ir),{pathname:l}=sr(),u=Wb(),d=Ap(t,Pp(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function vr(e){Le(!1)}function FD(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:a}=e;Us()&&Le(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:s,static:o,future:ea({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Vs(r));let{pathname:d="/",search:c="",hash:h="",state:f=null,key:m="default"}=r,g=b.useMemo(()=>{let x=Cp(d,l);return x==null?null:{location:{pathname:x,search:c,hash:h,state:f,key:m},navigationType:i}},[l,d,c,h,f,m,i]);return g==null?null:b.createElement(Zr.Provider,{value:u},b.createElement(qu.Provider,{children:n,value:g}))}function zD(e){let{children:t,location:n}=e;return ED(If(t),n)}new Promise(()=>{});function If(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,If(r.props.children,s));return}r.type!==vr&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=If(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rf(){return Rf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rf.apply(this,arguments)}function BD(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function VD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function UD(e,t){return e.button===0&&(!t||t==="_self")&&!VD(e)}const HD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$D="6";try{window.__reactRouterVersion=$D}catch{}const WD="startTransition",wy=ox[WD];function qD(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=Jj({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&wy?wy(()=>l(c)):l(c)},[l,u]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>_D(r),[r]),b.createElement(FD,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const GD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:c}=t,h=BD(t,HD),{basename:f}=b.useContext(Zr),m,g=!1;if(typeof u=="string"&&KD.test(u)&&(m=u,GD))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),E=Cp(S.pathname,f);S.origin===v.origin&&E!=null?u=E+S.search+S.hash:g=!0}catch{}let x=SD(u,{relative:i}),p=YD(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:c});function y(v){r&&r(v),v.defaultPrevented||p(v)}return b.createElement("a",Rf({},h,{href:m||x,onClick:g||s?r:y,ref:n,target:l}))});var xy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xy||(xy={}));var by;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function YD(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=Wb(),u=sr(),d=Gb(e,{relative:o});return b.useCallback(c=>{if(UD(c,n)){c.preventDefault();let h=r!==void 0?r:ou(u)===ou(d);l(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}const Qb=b.createContext(void 0);function QD({children:e}){const[t,n]=b.useState(()=>localStorage.getItem("portfolio-theme")||"dark");b.useEffect(()=>{const i=window.document.documentElement;i.classList.remove("light","dark"),i.classList.add(t),localStorage.setItem("portfolio-theme",t)},[t]);const r=()=>{n(i=>i==="dark"?"light":"dark")};return w.jsx(Qb.Provider,{value:{theme:t,toggleTheme:r},children:e})}function Jb(){const e=b.useContext(Qb);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}function JD(){const{pathname:e}=sr();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Rp=b.createContext({});function jp(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Xb=typeof window<"u",Zb=Xb?b.useLayoutEffect:b.useEffect,Gu=b.createContext(null);function Dp(e,t){e.indexOf(t)===-1&&e.push(t)}function Np(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const _n=(e,t,n)=>n>t?t:n<e?e:n;let Ku=()=>{},Ds=()=>{};const nr={},ek=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function tk(e){return typeof e=="object"&&e!==null}const nk=e=>/^0[^.\s]+$/u.test(e);function Mp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Qt=e=>e,XD=(e,t)=>n=>t(e(n)),wa=(...e)=>e.reduce(XD),ta=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Lp{constructor(){this.subscriptions=[]}add(t){return Dp(this.subscriptions,t),()=>Np(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mn=e=>e*1e3,Kt=e=>e/1e3;function rk(e,t){return t?e*(1e3/t):0}const ik=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ZD=1e-7,eN=12;function tN(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=ik(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>ZD&&++a<eN);return o}function xa(e,t,n,r){if(e===t&&n===r)return Qt;const i=s=>tN(s,0,1,e,n);return s=>s===0||s===1?s:ik(i(s),t,r)}const sk=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ok=e=>t=>1-e(1-t),ak=xa(.33,1.53,.69,.99),Op=ok(ak),lk=sk(Op),uk=e=>(e*=2)<1?.5*Op(e):.5*(2-Math.pow(2,-10*(e-1))),_p=e=>1-Math.sin(Math.acos(e)),ck=ok(_p),dk=sk(_p),nN=xa(.42,0,1,1),rN=xa(0,0,.58,1),fk=xa(.42,0,.58,1),iN=e=>Array.isArray(e)&&typeof e[0]!="number",hk=e=>Array.isArray(e)&&typeof e[0]=="number",ky={linear:Qt,easeIn:nN,easeInOut:fk,easeOut:rN,circIn:_p,circInOut:dk,circOut:ck,backIn:Op,backInOut:lk,backOut:ak,anticipate:uk},sN=e=>typeof e=="string",Sy=e=>{if(hk(e)){Ds(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,i]=e;return xa(t,n,r,i)}else if(sN(e))return Ds(ky[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),ky[e];return e},Xa=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Ty={value:null,addProjectionMetrics:null};function oN(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(c){o.has(c)&&(d.schedule(c),e()),l++,c(a)}const d={schedule:(c,h=!1,f=!1)=>{const g=f&&i?n:r;return h&&o.add(c),g.has(c)||g.add(c),c},cancel:c=>{r.delete(c),o.delete(c)},process:c=>{if(a=c,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(u),t&&Ty.value&&Ty.value.frameloop[t].push(l),l=0,n.clear(),i=!1,s&&(s=!1,d.process(c))}};return d}const aN=40;function pk(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Xa.reduce((v,S)=>(v[S]=oN(s,t?S:void 0),v),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:d,update:c,preRender:h,render:f,postRender:m}=o,g=()=>{const v=nr.useManualTiming?i.timestamp:performance.now();n=!1,nr.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,aN),1)),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),d.process(i),c.process(i),h.process(i),f.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Xa.reduce((v,S)=>{const E=o[S];return v[S]=(T,A=!1,I=!1)=>(n||x(),E.schedule(T,A,I)),v},{}),cancel:v=>{for(let S=0;S<Xa.length;S++)o[Xa[S]].cancel(v)},state:i,steps:o}}const{schedule:Se,cancel:Kr,state:Ke,steps:Uc}=pk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qt,!0);let kl;function lN(){kl=void 0}const ft={now:()=>(kl===void 0&&ft.set(Ke.isProcessing||nr.useManualTiming?Ke.timestamp:performance.now()),kl),set:e=>{kl=e,queueMicrotask(lN)}},mk=e=>t=>typeof t=="string"&&t.startsWith(e),gk=mk("--"),uN=mk("var(--"),Fp=e=>uN(e)?cN.test(e.split("/*")[0].trim()):!1,cN=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ey(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Hs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},na={...Hs,transform:e=>_n(0,1,e)},Za={...Hs,default:1},Eo=e=>Math.round(e*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dN(e){return e==null}const fN=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bp=(e,t)=>n=>!!(typeof n=="string"&&fN.test(n)&&n.startsWith(e)||t&&!dN(n)&&Object.prototype.hasOwnProperty.call(n,t)),yk=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(zp);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},hN=e=>_n(0,255,e),Hc={...Hs,transform:e=>Math.round(hN(e))},mi={test:Bp("rgb","red"),parse:yk("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Hc.transform(e)+", "+Hc.transform(t)+", "+Hc.transform(n)+", "+Eo(na.transform(r))+")"};function pN(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const jf={test:Bp("#"),parse:pN,transform:mi.transform},ba=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),wr=ba("deg"),Ln=ba("%"),W=ba("px"),mN=ba("vh"),gN=ba("vw"),Cy={...Ln,parse:e=>Ln.parse(e)/100,transform:e=>Ln.transform(e*100)},ts={test:Bp("hsl","hue"),parse:yk("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ln.transform(Eo(t))+", "+Ln.transform(Eo(n))+", "+Eo(na.transform(r))+")"},Fe={test:e=>mi.test(e)||jf.test(e)||ts.test(e),parse:e=>mi.test(e)?mi.parse(e):ts.test(e)?ts.parse(e):jf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mi.transform(e):ts.transform(e),getAnimatableNone:e=>{const t=Fe.parse(e);return t.alpha=0,Fe.transform(t)}},yN=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vN(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zp))==null?void 0:t.length)||0)+(((n=e.match(yN))==null?void 0:n.length)||0)>0}const vk="number",wk="color",wN="var",xN="var(",Py="${}",bN=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ra(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(bN,l=>(Fe.test(l)?(r.color.push(s),i.push(wk),n.push(Fe.parse(l))):l.startsWith(xN)?(r.var.push(s),i.push(wN),n.push(l)):(r.number.push(s),i.push(vk),n.push(parseFloat(l))),++s,Py)).split(Py);return{values:n,split:a,indexes:r,types:i}}function xk(e){return ra(e).values}function bk(e){const{split:t,types:n}=ra(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===vk?s+=Eo(i[o]):a===wk?s+=Fe.transform(i[o]):s+=i[o]}return s}}const kN=e=>typeof e=="number"?0:Fe.test(e)?Fe.getAnimatableNone(e):e;function SN(e){const t=xk(e);return bk(e)(t.map(kN))}const Yr={test:vN,parse:xk,createTransformer:bk,getAnimatableNone:SN};function $c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function TN({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=$c(l,a,e+1/3),s=$c(l,a,e),o=$c(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function lu(e,t){return n=>n>0?t:e}const Ae=(e,t,n)=>e+(t-e)*n,Wc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},EN=[jf,mi,ts],CN=e=>EN.find(t=>t.test(e));function Ay(e){const t=CN(e);if(Ku(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===ts&&(n=TN(n)),n}const Iy=(e,t)=>{const n=Ay(e),r=Ay(t);if(!n||!r)return lu(e,t);const i={...n};return s=>(i.red=Wc(n.red,r.red,s),i.green=Wc(n.green,r.green,s),i.blue=Wc(n.blue,r.blue,s),i.alpha=Ae(n.alpha,r.alpha,s),mi.transform(i))},Df=new Set(["none","hidden"]);function PN(e,t){return Df.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function AN(e,t){return n=>Ae(e,t,n)}function Vp(e){return typeof e=="number"?AN:typeof e=="string"?Fp(e)?lu:Fe.test(e)?Iy:jN:Array.isArray(e)?kk:typeof e=="object"?Fe.test(e)?Iy:IN:lu}function kk(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Vp(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function IN(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vp(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function RN(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const jN=(e,t)=>{const n=Yr.createTransformer(t),r=ra(e),i=ra(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Df.has(e)&&!i.values.length||Df.has(t)&&!r.values.length?PN(e,t):wa(kk(RN(r,i),i.values),n):(Ku(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),lu(e,t))};function Sk(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ae(e,t,n):Vp(e)(e,t)}const DN=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(t,n),stop:()=>Kr(t),now:()=>Ke.isProcessing?Ke.timestamp:ft.now()}},Tk=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},uu=2e4;function Up(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<uu;)t+=n,r=e.next(t);return t>=uu?1/0:t}function NN(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Up(r),uu);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:Kt(i)}}const MN=5;function Ek(e,t,n){const r=Math.max(t-MN,0);return rk(n-e(r),t-r)}const Ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qc=.001;function LN({duration:e=Ce.duration,bounce:t=Ce.bounce,velocity:n=Ce.velocity,mass:r=Ce.mass}){let i,s;Ku(e<=Mn(Ce.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-t;o=_n(Ce.minDamping,Ce.maxDamping,o),e=_n(Ce.minDuration,Ce.maxDuration,Kt(e)),o<1?(i=u=>{const d=u*o,c=d*e,h=d-n,f=Nf(u,o),m=Math.exp(-c);return qc-h/f*m},s=u=>{const c=u*o*e,h=c*n+n,f=Math.pow(o,2)*Math.pow(u,2)*e,m=Math.exp(-c),g=Nf(Math.pow(u,2),o);return(-i(u)+qc>0?-1:1)*((h-f)*m)/g}):(i=u=>{const d=Math.exp(-u*e),c=(u-n)*e+1;return-qc+d*c},s=u=>{const d=Math.exp(-u*e),c=(n-u)*(e*e);return d*c});const a=5/e,l=_N(i,s,a);if(e=Mn(e),isNaN(l))return{stiffness:Ce.stiffness,damping:Ce.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const ON=12;function _N(e,t,n){let r=n;for(let i=1;i<ON;i++)r=r-e(r)/t(r);return r}function Nf(e,t){return e*Math.sqrt(1-t*t)}const FN=["duration","bounce"],zN=["stiffness","damping","mass"];function Ry(e,t){return t.some(n=>e[n]!==void 0)}function BN(e){let t={velocity:Ce.velocity,stiffness:Ce.stiffness,damping:Ce.damping,mass:Ce.mass,isResolvedFromDuration:!1,...e};if(!Ry(e,zN)&&Ry(e,FN))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*_n(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ce.mass,stiffness:i,damping:s}}else{const n=LN(e);t={...t,...n,mass:Ce.mass},t.isResolvedFromDuration=!0}return t}function cu(e=Ce.visualDuration,t=Ce.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:c,velocity:h,isResolvedFromDuration:f}=BN({...n,velocity:-Kt(n.velocity||0)}),m=h||0,g=u/(2*Math.sqrt(l*d)),x=o-s,p=Kt(Math.sqrt(l/d)),y=Math.abs(x)<5;r||(r=y?Ce.restSpeed.granular:Ce.restSpeed.default),i||(i=y?Ce.restDelta.granular:Ce.restDelta.default);let v;if(g<1){const E=Nf(p,g);v=T=>{const A=Math.exp(-g*p*T);return o-A*((m+g*p*x)/E*Math.sin(E*T)+x*Math.cos(E*T))}}else if(g===1)v=E=>o-Math.exp(-p*E)*(x+(m+p*x)*E);else{const E=p*Math.sqrt(g*g-1);v=T=>{const A=Math.exp(-g*p*T),I=Math.min(E*T,300);return o-A*((m+g*p*x)*Math.sinh(I)+E*x*Math.cosh(I))/E}}const S={calculatedDuration:f&&c||null,next:E=>{const T=v(E);if(f)a.done=E>=c;else{let A=E===0?m:0;g<1&&(A=E===0?Mn(m):Ek(v,E,T));const I=Math.abs(A)<=r,D=Math.abs(o-T)<=i;a.done=I&&D}return a.value=a.done?o:T,a},toString:()=>{const E=Math.min(Up(S),uu),T=Tk(A=>S.next(E*A).value,E,30);return E+"ms "+T},toTransition:()=>{}};return S}cu.applyToOptions=e=>{const t=NN(e,100,cu);return e.ease=t.ease,e.duration=Mn(t.duration),e.type="keyframes",e};function Mf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const c=e[0],h={done:!1,value:c},f=I=>a!==void 0&&I<a||l!==void 0&&I>l,m=I=>a===void 0?l:l===void 0||Math.abs(a-I)<Math.abs(l-I)?a:l;let g=n*t;const x=c+g,p=o===void 0?x:o(x);p!==x&&(g=p-c);const y=I=>-g*Math.exp(-I/r),v=I=>p+y(I),S=I=>{const D=y(I),P=v(I);h.done=Math.abs(D)<=u,h.value=h.done?p:P};let E,T;const A=I=>{f(h.value)&&(E=I,T=cu({keyframes:[h.value,m(h.value)],velocity:Ek(v,I,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return A(0),{calculatedDuration:null,next:I=>{let D=!1;return!T&&E===void 0&&(D=!0,S(I),A(I)),E!==void 0&&I>=E?T.next(I-E):(!D&&S(I),h)}}}function VN(e,t,n){const r=[],i=n||nr.mix||Sk,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Qt:t;a=wa(l,a)}r.push(a)}return r}function UN(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Ds(s===t.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=VN(t,r,i),l=a.length,u=d=>{if(o&&d<e[0])return t[0];let c=0;if(l>1)for(;c<e.length-2&&!(d<e[c+1]);c++);const h=ta(e[c],e[c+1],d);return a[c](h)};return n?d=>u(_n(e[0],e[s-1],d)):u}function HN(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ta(0,t,r);e.push(Ae(n,1,i))}}function $N(e){const t=[0];return HN(t,e.length-1),t}function WN(e,t){return e.map(n=>n*t)}function qN(e,t){return e.map(()=>t||fk).splice(0,e.length-1)}function Co({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=iN(r)?r.map(Sy):Sy(r),s={done:!1,value:t[0]},o=WN(n&&n.length===t.length?n:$N(t),e),a=UN(o,t,{ease:Array.isArray(i)?i:qN(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const GN=e=>e!==null;function Hp(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(GN),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const KN={decay:Mf,inertia:Mf,tween:Co,keyframes:Co,spring:cu};function Ck(e){typeof e.type=="string"&&(e.type=KN[e.type])}class $p{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const YN=e=>e/100;class Wp extends $p{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Ck(t);const{type:n=Co,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const l=n||Co;l!==Co&&typeof a[0]!="number"&&(this.mixKeyframes=wa(YN,Sk(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Up(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:c,repeatType:h,repeatDelay:f,type:m,onUpdate:g,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const p=this.currentTime-u*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,S=r;if(c){const I=Math.min(this.currentTime,i)/a;let D=Math.floor(I),P=I%1;!P&&I>=1&&(P=1),P===1&&D--,D=Math.min(D,c+1),!!(D%2)&&(h==="reverse"?(P=1-P,f&&(P-=f/a)):h==="mirror"&&(S=o)),v=_n(0,1,P)*a}const E=y?{done:!1,value:d[0]}:S.next(v);s&&(E.value=s(E.value));let{done:T}=E;!y&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&m!==Mf&&(E.value=Hp(d,this.options,x,this.speed)),g&&g(E.value),A&&this.finish(),E}then(t,n){return this.finished.then(t,n)}get duration(){return Kt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Kt(t)}get time(){return Kt(this.currentTime)}set time(t){var n;t=Mn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(ft.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Kt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=DN,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function QN(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const gi=e=>e*180/Math.PI,Lf=e=>{const t=gi(Math.atan2(e[1],e[0]));return Of(t)},JN={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Lf,rotateZ:Lf,skewX:e=>gi(Math.atan(e[1])),skewY:e=>gi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Of=e=>(e=e%360,e<0&&(e+=360),e),jy=Lf,Dy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ny=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),XN={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dy,scaleY:Ny,scale:e=>(Dy(e)+Ny(e))/2,rotateX:e=>Of(gi(Math.atan2(e[6],e[5]))),rotateY:e=>Of(gi(Math.atan2(-e[2],e[0]))),rotateZ:jy,rotate:jy,skewX:e=>gi(Math.atan(e[4])),skewY:e=>gi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _f(e){return e.includes("scale")?1:0}function Ff(e,t){if(!e||e==="none")return _f(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=XN,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=JN,i=a}if(!i)return _f(t);const s=r[t],o=i[1].split(",").map(eM);return typeof s=="function"?s(o):o[s]}const ZN=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ff(n,t)};function eM(e){return parseFloat(e.trim())}const $s=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ws=new Set($s),My=e=>e===Hs||e===W,tM=new Set(["x","y","z"]),nM=$s.filter(e=>!tM.has(e));function rM(e){const t=[];return nM.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Dr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ff(t,"x"),y:(e,{transform:t})=>Ff(t,"y")};Dr.translateX=Dr.x;Dr.translateY=Dr.y;const Ei=new Set;let zf=!1,Bf=!1,Vf=!1;function Pk(){if(Bf){const e=Array.from(Ei).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=rM(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bf=!1,zf=!1,Ei.forEach(e=>e.complete(Vf)),Ei.clear()}function Ak(){Ei.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Bf=!0)})}function iM(){Vf=!0,Ak(),Pk(),Vf=!1}class qp{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ei.add(this),zf||(zf=!0,Se.read(Ak),Se.resolveKeyframes(Pk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}QN(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ei.delete(this)}cancel(){this.state==="scheduled"&&(Ei.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sM=e=>e.startsWith("--");function oM(e,t,n){sM(t)?e.style.setProperty(t,n):e.style[t]=n}const aM=Mp(()=>window.ScrollTimeline!==void 0),lM={};function uM(e,t){const n=Mp(e);return()=>lM[t]??n()}const Ik=uM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ho=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ho([0,.65,.55,1]),circOut:ho([.55,0,1,.45]),backIn:ho([.31,.01,.66,-.59]),backOut:ho([.33,1.53,.69,.99])};function Rk(e,t){if(e)return typeof e=="function"?Ik()?Tk(e,t):"ease-out":hk(e)?ho(e):Array.isArray(e)?e.map(n=>Rk(n,t)||Ly.easeOut):Ly[e]}function cM(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const d={[t]:n};l&&(d.offset=l);const c=Rk(a,i);Array.isArray(c)&&(d.easing=c);const h={delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),e.animate(d,h)}function jk(e){return typeof e=="function"&&"applyToOptions"in e}function dM({type:e,...t}){return jk(e)&&Ik()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class fM extends $p{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,Ds(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=dM(t);this.animation=cM(n,r,i,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=Hp(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):oM(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Kt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Kt(t)}get time(){return Kt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Mn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&aM()?(this.animation.timeline=t,Qt):n(this)}}const Dk={anticipate:uk,backInOut:lk,circInOut:dk};function hM(e){return e in Dk}function pM(e){typeof e.ease=="string"&&hM(e.ease)&&(e.ease=Dk[e.ease])}const Gc=10;class mM extends fM{constructor(t){pM(t),Ck(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Wp({...o,autoplay:!1}),l=Math.max(Gc,ft.now()-this.startTime),u=_n(0,Gc,l-Gc);n.setWithVelocity(a.sample(Math.max(0,l-u)).value,a.sample(l).value,u),a.stop()}}const Oy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yr.test(e)||e==="0")&&!e.startsWith("url("));function gM(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yM(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Oy(i,t),a=Oy(s,t);return Ku(o===a,`You are trying to animate ${t} from "${i}" to "${s}". "${o?s:i}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:gM(e)||(n==="spring"||jk(n))&&r}function Uf(e){e.duration=0,e.type="keyframes"}const vM=new Set(["opacity","clipPath","filter","transform"]),wM=Mp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xM(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return wM()&&n&&vM.has(n)&&(n!=="transform"||!u)&&!l&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const bM=40;class kM extends $p{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:d,...c}){var m;super(),this.stop=()=>{var g,x;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=ft.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:d,...c},f=(d==null?void 0:d.KeyframeResolver)||qp;this.keyframeResolver=new f(a,(g,x,p)=>this.onKeyframesResolved(g,x,h,!p),l,u,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:d}=r;this.resolvedAt=ft.now(),yM(t,s,o,a)||((nr.instantAnimations||!l)&&(d==null||d(Hp(t,r,n))),t[0]=t[t.length-1],Uf(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>bM?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},f=!u&&xM(h)?new mM({...h,element:h.motionValue.owner.current}):new Wp(h);f.finished.then(()=>this.notifyFinished()).catch(Qt),this.pendingTimeline&&(this.stopTimeline=f.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=f}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),iM()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const SM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TM(e){const t=SM.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}const EM=4;function Nk(e,t,n=1){Ds(n<=EM,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=TM(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return ek(o)?parseFloat(o):o}return Fp(i)?Nk(i,t,n+1):i}function Gp(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const CM={type:"spring",stiffness:500,damping:25,restSpeed:10},PM=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),AM={type:"keyframes",duration:.8},IM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},RM=(e,{keyframes:t})=>t.length>2?AM:Ws.has(e)?e.startsWith("scale")?PM(t[1]):CM:IM;function jM({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const DM=e=>e!==null;function NM(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(DM),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}function Mk(e,t,n,r=0,i=1){const s=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}const Kp=(e,t,n,r={},i,s)=>o=>{const a=Gp(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Mn(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};jM(a)||Object.assign(d,RM(e,d)),d.duration&&(d.duration=Mn(d.duration)),d.repeatDelay&&(d.repeatDelay=Mn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let c=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Uf(d),d.delay===0&&(c=!0)),(nr.instantAnimations||nr.skipAnimations)&&(c=!0,Uf(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,c&&!s&&t.get()!==void 0){const h=NM(d.keyframes,a);if(h!==void 0){Se.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new Wp(d):new kM(d)},Lk=new Set(["width","height","top","left","right","bottom",...$s]),_y=30,MM=e=>!isNaN(parseFloat(e));class LM{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=ft.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=MM(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Lp);const r=this.events[t].add(n);return t==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_y)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_y);return rk(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ns(e,t){return new LM(e,t)}function Fy(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Yp(e,t,n,r){if(typeof t=="function"){const[i,s]=Fy(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Fy(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function hs(e,t,n){const r=e.getProps();return Yp(r,t,n!==void 0?n:r.custom,e)}const Hf=e=>Array.isArray(e);function OM(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ns(n))}function _M(e){return Hf(e)?e[e.length-1]||0:e}function FM(e,t){const n=hs(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=_M(s[o]);OM(e,o,a)}}const nt=e=>!!(e&&e.getVelocity);function zM(e){return!!(nt(e)&&e.add)}function $f(e,t){const n=e.getValue("willChange");if(zM(n))return n.add(t);if(!n&&nr.WillChange){const r=new nr.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Qp(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const BM="framerAppearId",Ok="data-"+Qp(BM);function _k(e){return e.props[Ok]}function VM({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Fk(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=t;r&&(s=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const c=e.getValue(d,e.latestValues[d]??null),h=a[d];if(h===void 0||u&&VM(u,d))continue;const f={delay:n,...Gp(s||{},d)},m=c.get();if(m!==void 0&&!c.isAnimating&&!Array.isArray(h)&&h===m&&!f.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const p=_k(e);if(p){const y=window.MotionHandoffAnimation(p,d,Se);y!==null&&(f.startTime=y,g=!0)}}$f(e,d),c.start(Kp(d,c,h,e.shouldReduceMotion&&Lk.has(d)?{type:!1}:f,e,g));const x=c.animation;x&&l.push(x)}return o&&Promise.all(l).then(()=>{Se.update(()=>{o&&FM(e,o)})}),l}function Wf(e,t,n={}){var l;const r=hs(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Fk(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:c,staggerDirection:h}=i;return UM(e,t,u,d,c,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function UM(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(Wf(l,t,{...o,delay:n+(typeof r=="function"?0:r)+Mk(e.variantChildren,l,r,i,s)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function HM(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Wf(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Wf(e,t,n);else{const i=typeof t=="function"?hs(e,t,n.custom):t;r=Promise.all(Fk(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const $M={test:e=>e==="auto",parse:e=>e},zk=e=>t=>t.test(e),Bk=[Hs,W,Ln,wr,gN,mN,$M],zy=e=>Bk.find(zk(e));function WM(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||nk(e):!0}const qM=new Set(["brightness","contrast","saturate","opacity"]);function GM(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zp)||[];if(!r)return e;const i=n.replace(r,"");let s=qM.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const KM=/\b([a-z-]*)\(.*?\)/gu,qf={...Yr,getAnimatableNone:e=>{const t=e.match(KM);return t?t.map(GM).join(" "):e}},By={...Hs,transform:Math.round},YM={rotate:wr,rotateX:wr,rotateY:wr,rotateZ:wr,scale:Za,scaleX:Za,scaleY:Za,scaleZ:Za,skew:wr,skewX:wr,skewY:wr,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:na,originX:Cy,originY:Cy,originZ:W},Jp={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,...YM,zIndex:By,fillOpacity:na,strokeOpacity:na,numOctaves:By},QM={...Jp,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:qf,WebkitFilter:qf},Vk=e=>QM[e];function Uk(e,t){let n=Vk(e);return n!==qf&&(n=Yr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const JM=new Set(["auto","none","0"]);function XM(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!JM.has(s)&&ra(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Uk(n,i)}class ZM extends qp{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let c=t[d];if(typeof c=="string"&&(c=c.trim(),Fp(c))){const h=Nk(c,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Lk.has(r)||t.length!==2)return;const[i,s]=t,o=zy(i),a=zy(s),l=Ey(i),u=Ey(s);if(l!==u&&Dr[r]){this.needsMeasurement=!0;return}if(o!==a)if(My(o)&&My(a))for(let d=0;d<t.length;d++){const c=t[d];typeof c=="string"&&(t[d]=parseFloat(c))}else Dr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||WM(t[i]))&&r.push(i);r.length&&XM(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Dr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Dr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function eL(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const Hk=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function $k(e){return tk(e)&&"offsetHeight"in e}const{schedule:Xp,cancel:uU}=pk(queueMicrotask,!1),an={x:!1,y:!1};function Wk(){return an.x||an.y}function tL(e){return e==="x"||e==="y"?an[e]?null:(an[e]=!0,()=>{an[e]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}function qk(e,t){const n=eL(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Vy(e){return!(e.pointerType==="touch"||Wk())}function nL(e,t,n={}){const[r,i,s]=qk(e,n),o=a=>{if(!Vy(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const d=c=>{Vy(c)&&(u(c),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Gk=(e,t)=>t?e===t?!0:Gk(e,t.parentElement):!1,Zp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,rL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Kk(e){return rL.has(e.tagName)||e.isContentEditable===!0}const Sl=new WeakSet;function Uy(e){return t=>{t.key==="Enter"&&e(t)}}function Kc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const iL=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Uy(()=>{if(Sl.has(n))return;Kc(n,"down");const i=Uy(()=>{Kc(n,"up")}),s=()=>Kc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Hy(e){return Zp(e)&&!Wk()}function sL(e,t,n={}){const[r,i,s]=qk(e,n),o=a=>{const l=a.currentTarget;if(!Hy(a))return;Sl.add(l);const u=t(l,a),d=(f,m)=>{window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",h),Sl.has(l)&&Sl.delete(l),Hy(f)&&typeof u=="function"&&u(f,{success:m})},c=f=>{d(f,l===window||l===document||n.useGlobalTarget||Gk(l,f.target))},h=f=>{d(f,!1)};window.addEventListener("pointerup",c,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),$k(a)&&(a.addEventListener("focus",u=>iL(u,i)),!Kk(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Yk(e){return tk(e)&&"ownerSVGElement"in e}function oL(e){return Yk(e)&&e.tagName==="svg"}const aL=[...Bk,Fe,Yr],lL=e=>aL.find(zk(e)),$y=()=>({translate:0,scale:1,origin:0,originPoint:0}),ns=()=>({x:$y(),y:$y()}),Wy=()=>({min:0,max:0}),Be=()=>({x:Wy(),y:Wy()}),Gf={current:null},Qk={current:!1},uL=typeof window<"u";function cL(){if(Qk.current=!0,!!uL)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gf.current=e.matches;e.addEventListener("change",t),t()}else Gf.current=!1}const dL=new WeakMap;function Yu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ia(e){return typeof e=="string"||Array.isArray(e)}const em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tm=["initial",...em];function Qu(e){return Yu(e.animate)||tm.some(t=>ia(e[t]))}function Jk(e){return!!(Qu(e)||e.variants)}function fL(e,t,n){for(const r in t){const i=t[r],s=n[r];if(nt(i))e.addValue(r,i);else if(nt(s))e.addValue(r,Ns(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Ns(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const qy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let du={};function Xk(e){du=e}function hL(){return du}class pL{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=ft.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Se.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Qu(n),this.isVariantNode=Jk(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...c}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in c){const f=c[h];l[h]!==void 0&&nt(f)&&f.set(l[h])}}mount(t){var n;this.current=t,dL.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Qk.current||cL(),this.shouldReduceMotion=Gf.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Kr(this.notifyUpdate),Kr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Ws.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in du){const n=du[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<qy.length;r++){const i=qy[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=fL(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ns(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(ek(r)||nk(r))?r=parseFloat(r):!lL(r)&&Yr.test(n)&&(r=Uk(t,n)),this.setBaseTarget(t,nt(r)?r.get():r)),nt(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=Yp(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!nt(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Lp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Xp.render(this.render)}}class ei{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Zk extends pL{constructor(){super(...arguments),this.KeyframeResolver=ZM}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;nt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function eS({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function mL({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function gL(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Yc(e){return e===void 0||e===1}function Kf({scale:e,scaleX:t,scaleY:n}){return!Yc(e)||!Yc(t)||!Yc(n)}function ci(e){return Kf(e)||tS(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function tS(e){return Gy(e.x)||Gy(e.y)}function Gy(e){return e&&e!=="0%"}function fu(e,t,n){const r=e-n,i=t*r;return n+i}function Ky(e,t,n,r,i){return i!==void 0&&(e=fu(e,i,r)),fu(e,n,r)+t}function Yf(e,t=0,n=1,r,i){e.min=Ky(e.min,t,n,r,i),e.max=Ky(e.max,t,n,r,i)}function nS(e,{x:t,y:n}){Yf(e.x,t.translate,t.scale,t.originPoint),Yf(e.y,n.translate,n.scale,n.originPoint)}const Yy=.999999999999,Qy=1.0000000000001;function yL(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&is(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,nS(e,o)),r&&ci(s.latestValues)&&is(e,s.latestValues))}t.x<Qy&&t.x>Yy&&(t.x=1),t.y<Qy&&t.y>Yy&&(t.y=1)}function rs(e,t){e.min=e.min+t,e.max=e.max+t}function Jy(e,t,n,r,i=.5){const s=Ae(e.min,e.max,i);Yf(e,t,n,s,r)}function is(e,t){Jy(e.x,t.x,t.scaleX,t.scale,t.originX),Jy(e.y,t.y,t.scaleY,t.scale,t.originY)}function rS(e,t){return eS(gL(e.getBoundingClientRect(),t))}function vL(e,t,n){const r=rS(e,n),{scroll:i}=t;return i&&(rs(r.x,i.offset.x),rs(r.y,i.offset.y)),r}const wL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xL=$s.length;function bL(e,t,n){let r="",i=!0;for(let s=0;s<xL;s++){const o=$s[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Hk(a,Jp[o]);if(!l){i=!1;const d=wL[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function nm(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(Ws.has(l)){o=!0;continue}else if(gk(l)){i[l]=u;continue}else{const d=Hk(u,Jp[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=bL(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}function iS(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function Xy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const so={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=Xy(e,t.target.x),r=Xy(e,t.target.y);return`${n}% ${r}%`}},kL={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yr.parse(e);if(i.length>5)return r;const s=Yr.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=Ae(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}},Qf={borderRadius:{...so,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:so,borderTopRightRadius:so,borderBottomLeftRadius:so,borderBottomRightRadius:so,boxShadow:kL};function sS(e,{layout:t,layoutId:n}){return Ws.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Qf[e]||e==="opacity")}function rm(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const a in r)(nt(r[a])||i&&nt(i[a])||sS(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function SL(e){return window.getComputedStyle(e)}class TL extends Zk{constructor(){super(...arguments),this.type="html",this.renderInstance=iS}readValueFromInstance(t,n){var r;if(Ws.has(n))return(r=this.projection)!=null&&r.isProjecting?_f(n):ZN(t,n);{const i=SL(t),s=(gk(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return rS(t,n)}build(t,n,r){nm(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return rm(t,n,r)}}const EL={offset:"stroke-dashoffset",array:"stroke-dasharray"},CL={offset:"strokeDashoffset",array:"strokeDasharray"};function PL(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?EL:CL;e[s.offset]=W.transform(-r);const o=W.transform(t),a=W.transform(n);e[s.array]=`${o} ${a}`}const AL=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function oS(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,u,d){if(nm(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:c,style:h}=e;c.transform&&(h.transform=c.transform,delete c.transform),(h.transform||c.transformOrigin)&&(h.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete c.transformBox);for(const f of AL)c[f]!==void 0&&(h[f]=c[f],delete c[f]);t!==void 0&&(c.x=t),n!==void 0&&(c.y=n),r!==void 0&&(c.scale=r),i!==void 0&&PL(c,i,s,o,!1)}const aS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),lS=e=>typeof e=="string"&&e.toLowerCase()==="svg";function IL(e,t,n,r){iS(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(aS.has(i)?i:Qp(i),t.attrs[i])}function uS(e,t,n){const r=rm(e,t,n);for(const i in e)if(nt(e[i])||nt(t[i])){const s=$s.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class RL extends Zk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ws.has(n)){const r=Vk(n);return r&&r.default||0}return n=aS.has(n)?n:Qp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return uS(t,n,r)}build(t,n,r){oS(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){IL(t,n,r,i)}mount(t){this.isSVGTag=lS(t.tagName),super.mount(t)}}const jL=tm.length;function cS(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?cS(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<jL;n++){const r=tm[n],i=e.props[r];(ia(i)||i===!1)&&(t[r]=i)}return t}function dS(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const DL=[...em].reverse(),NL=em.length;function ML(e){return t=>Promise.all(t.map(({animation:n,options:r})=>HM(e,n,r)))}function LL(e){let t=ML(e),n=Zy(),r=!0;const i=l=>(u,d)=>{var h;const c=hs(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(c){const{transition:f,transitionEnd:m,...g}=c;u={...u,...g,...m}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,d=cS(e.parent)||{},c=[],h=new Set;let f={},m=1/0;for(let x=0;x<NL;x++){const p=DL[x],y=n[p],v=u[p]!==void 0?u[p]:d[p],S=ia(v),E=p===l?y.isActive:null;E===!1&&(m=x);let T=v===d[p]&&v!==u[p]&&S;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),y.protectedKeys={...f},!y.isActive&&E===null||!v&&!y.prevProp||Yu(v)||typeof v=="boolean")continue;const A=OL(y.prevProp,v);let I=A||p===l&&y.isActive&&!T&&S||x>m&&S,D=!1;const P=Array.isArray(v)?v:[v];let O=P.reduce(i(p),{});E===!1&&(O={});const{prevResolvedValues:N={}}=y,$={...N,...O},_=U=>{I=!0,h.has(U)&&(D=!0,h.delete(U)),y.needsAnimating[U]=!0;const R=e.getValue(U);R&&(R.liveStyle=!1)};for(const U in $){const R=O[U],M=N[U];if(f.hasOwnProperty(U))continue;let k=!1;Hf(R)&&Hf(M)?k=!dS(R,M):k=R!==M,k?R!=null?_(U):h.add(U):R!==void 0&&h.has(U)?_(U):y.protectedKeys[U]=!0}y.prevProp=v,y.prevResolvedValues=O,y.isActive&&(f={...f,...O}),r&&e.blockInitialAnimation&&(I=!1);const H=T&&A;I&&(!H||D)&&c.push(...P.map(U=>{const R={type:p};if(typeof U=="string"&&r&&!H&&e.manuallyAnimateOnMount&&e.parent){const{parent:M}=e,k=hs(M,U);if(M.enteringChildren&&k){const{delayChildren:Y}=k.transition||{};R.delay=Mk(M.enteringChildren,e,Y)}}return{animation:U,options:R}}))}if(h.size){const x={};if(typeof u.initial!="boolean"){const p=hs(e,Array.isArray(u.initial)?u.initial[0]:u.initial);p&&p.transition&&(x.transition=p.transition)}h.forEach(p=>{const y=e.getBaseTarget(p),v=e.getValue(p);v&&(v.liveStyle=!0),x[p]=y??null}),c.push({animation:x})}let g=!!c.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(c):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)==null||c.forEach(h=>{var f;return(f=h.animationState)==null?void 0:f.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Zy()}}}function OL(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!dS(t,e):!1}function oi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zy(){return{animate:oi(!0),whileInView:oi(),whileHover:oi(),whileTap:oi(),whileDrag:oi(),whileFocus:oi(),exit:oi()}}const fS=1e-4,_L=1-fS,FL=1+fS,hS=.01,zL=0-hS,BL=0+hS;function ht(e){return e.max-e.min}function VL(e,t,n){return Math.abs(e-t)<=n}function ev(e,t,n,r=.5){e.origin=r,e.originPoint=Ae(t.min,t.max,e.origin),e.scale=ht(n)/ht(t),e.translate=Ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=_L&&e.scale<=FL||isNaN(e.scale))&&(e.scale=1),(e.translate>=zL&&e.translate<=BL||isNaN(e.translate))&&(e.translate=0)}function Po(e,t,n,r){ev(e.x,t.x,n.x,r?r.originX:void 0),ev(e.y,t.y,n.y,r?r.originY:void 0)}function tv(e,t,n){e.min=n.min+t.min,e.max=e.min+ht(t)}function UL(e,t,n){tv(e.x,t.x,n.x),tv(e.y,t.y,n.y)}function nv(e,t,n){e.min=t.min-n.min,e.max=e.min+ht(t)}function hu(e,t,n){nv(e.x,t.x,n.x),nv(e.y,t.y,n.y)}function rv(e,t,n,r,i){return e-=t,e=fu(e,1/n,r),i!==void 0&&(e=fu(e,1/i,r)),e}function HL(e,t=0,n=1,r=.5,i,s=e,o=e){if(Ln.test(t)&&(t=parseFloat(t),t=Ae(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Ae(s.min,s.max,r);e===s&&(a-=t),e.min=rv(e.min,t,n,a,i),e.max=rv(e.max,t,n,a,i)}function iv(e,t,[n,r,i],s,o){HL(e,t[n],t[r],t[i],t.scale,s,o)}const $L=["x","scaleX","originX"],WL=["y","scaleY","originY"];function sv(e,t,n,r){iv(e.x,t,$L,n?n.x:void 0,r?r.x:void 0),iv(e.y,t,WL,n?n.y:void 0,r?r.y:void 0)}function ov(e,t){e.min=t.min,e.max=t.max}function on(e,t){ov(e.x,t.x),ov(e.y,t.y)}function av(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function lv(e){return e.translate===0&&e.scale===1}function pS(e){return lv(e.x)&&lv(e.y)}function uv(e,t){return e.min===t.min&&e.max===t.max}function qL(e,t){return uv(e.x,t.x)&&uv(e.y,t.y)}function cv(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function mS(e,t){return cv(e.x,t.x)&&cv(e.y,t.y)}function dv(e){return ht(e.x)/ht(e.y)}function fv(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ut(e){return[e("x"),e("y")]}function GL(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:c,rotateY:h,skewX:f,skewY:m}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),c&&(r+=`rotateX(${c}deg) `),h&&(r+=`rotateY(${h}deg) `),f&&(r+=`skewX(${f}deg) `),m&&(r+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const gS=["TopLeft","TopRight","BottomLeft","BottomRight"],KL=gS.length,hv=e=>typeof e=="string"?parseFloat(e):e,pv=e=>typeof e=="number"||W.test(e);function YL(e,t,n,r,i,s){i?(e.opacity=Ae(0,n.opacity??1,QL(r)),e.opacityExit=Ae(t.opacity??1,0,JL(r))):s&&(e.opacity=Ae(t.opacity??1,n.opacity??1,r));for(let o=0;o<KL;o++){const a=`border${gS[o]}Radius`;let l=mv(t,a),u=mv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||pv(l)===pv(u)?(e[a]=Math.max(Ae(hv(l),hv(u),r),0),(Ln.test(u)||Ln.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Ae(t.rotate||0,n.rotate||0,r))}function mv(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const QL=yS(0,.5,ck),JL=yS(.5,.95,Qt);function yS(e,t,n){return r=>r<e?0:r>t?1:n(ta(e,t,r))}function XL(e,t){const n=ft.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Kr(r),e(s-t))};return Se.setup(r,!0),()=>Kr(r)}function sa(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Tl(e){return nt(e)?e.get():e}function ZL(e,t,n){const r=nt(e)?e:Ns(e);return r.start(Kp("",r,t,n)),r.animation}const eO=(e,t)=>e.depth-t.depth;class tO{constructor(){this.children=[],this.isDirty=!1}add(t){Dp(this.children,t),this.isDirty=!0}remove(t){Np(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(eO),this.isDirty=!1,this.children.forEach(t)}}class nO{constructor(){this.members=[]}add(t){Dp(this.members,t),t.scheduleRender()}remove(t){if(Np(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const El={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Qc=["","X","Y","Z"],rO=1e3;let iO=0;function Jc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vS(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=_k(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&vS(r)}function wS({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=iO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aO),this.nodes.forEach(dO),this.nodes.forEach(fO),this.nodes.forEach(lO)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new tO)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Lp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Yk(o)&&!oL(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,c=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{c=window.innerWidth}),e(o,()=>{const f=window.innerWidth;f!==c&&(c=f,this.root.updateBlockedByResize=!0,d&&d(),d=XL(h,250),El.hasAnimatedSinceResize&&(El.hasAnimatedSinceResize=!1,this.nodes.forEach(vv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:c,hasRelativeLayoutChanged:h,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||yO,{onLayoutAnimationStart:g,onLayoutAnimationComplete:x}=u.getProps(),p=!this.targetLayout||!mS(this.targetLayout,f),y=!c&&h;if(this.options.layoutRoot||this.resumeFrom||y||c&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Gp(m,"layout"),onPlay:g,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,y)}else c||vv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hO),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const c=this.path[d];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cO),this.nodes.forEach(sO),this.nodes.forEach(oO)):this.nodes.forEach(yv),this.clearAllSnapshots();const a=ft.now();Ke.delta=_n(0,1e3/60,a-Ke.timestamp),Ke.timestamp=a,Ke.isProcessing=!0,Uc.update.process(Ke),Uc.preRender.process(Ke),Uc.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uO),this.sharedNodes.forEach(pO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!pS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||ci(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),vO(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return Be();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(wO))){const{scroll:d}=this.root;d&&(rs(a.x,d.offset.x),rs(a.y,d.offset.y))}return a}removeElementScroll(o){var l;const a=Be();if(on(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:c,options:h}=d;d!==this.root&&c&&h.layoutScroll&&(c.wasRoot&&on(a,o),rs(a.x,c.offset.x),rs(a.y,c.offset.y))}return a}applyTransform(o,a=!1){const l=Be();on(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&is(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ci(d.latestValues)&&is(l,d.latestValues)}return ci(this.latestValues)&&is(l,this.latestValues),l}removeTransform(o){const a=Be();on(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ci(u.latestValues))continue;Kf(u.latestValues)&&u.updateSnapshot();const d=Be(),c=u.measurePageBox();on(d,c),sv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return ci(this.latestValues)&&sv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:c}=this.options;if(!this.layout||!(d||c))return;this.resolvedRelativeTargetAt=Ke.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):on(this.target,this.layout.layoutBox),nS(this.target,this.targetDelta)):on(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Kf(this.parent.latestValues)||tS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),hu(this.relativeTargetOrigin,a,l),on(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;on(this.layoutCorrected,this.layout.layoutBox);const c=this.treeScale.x,h=this.treeScale.y;yL(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Be());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(av(this.prevProjectionDelta.x,this.projectionDelta.x),av(this.prevProjectionDelta.y,this.projectionDelta.y)),Po(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==c||this.treeScale.y!==h||!fv(this.projectionDelta.x,this.prevProjectionDelta.x)||!fv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ns(),this.projectionDelta=ns(),this.projectionDeltaWithTransform=ns()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},c=ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Be(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=f!==m,x=this.getStack(),p=!x||x.members.length<=1,y=!!(g&&!p&&this.options.crossfade===!0&&!this.path.some(gO));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const E=S/1e3;wv(c.x,o.x,E),wv(c.y,o.y,E),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hu(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mO(this.relativeTarget,this.relativeTargetOrigin,h,E),v&&qL(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Be()),on(v,this.relativeTarget)),g&&(this.animationValues=d,YL(d,u,this.latestValues,E,y,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{El.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ns(0)),this.currentAnimation=ZL(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&xS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Be();const c=ht(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+c;const h=ht(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}on(a,l),is(a,d),Po(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new nO),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Jc("z",o,u,this.animationValues);for(let d=0;d<Qc.length;d++)Jc(`rotate${Qc[d]}`,o,u,this.animationValues),Jc(`skew${Qc[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Tl(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Tl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ci(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let c=GL(this.projectionDeltaWithTransform,this.treeScale,d);l&&(c=l(d,c)),o.transform=c;const{x:h,y:f}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${f.origin*100}% 0`,u.animationValues?o.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Qf){if(d[m]===void 0)continue;const{correct:g,applyTo:x,isCSSVariable:p}=Qf[m],y=c==="none"?d[m]:g(d[m],u);if(x){const v=x.length;for(let S=0;S<v;S++)o[x[S]]=y}else p?this.options.visualElement.renderState.vars[m]=y:o[m]=y}this.options.layoutId&&(o.pointerEvents=u===this?Tl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(gv),this.root.sharedNodes.clear()}}}function sO(e){e.updateLayout()}function oO(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;s==="size"?Ut(c=>{const h=o?t.measuredBox[c]:t.layoutBox[c],f=ht(h);h.min=r[c].min,h.max=h.min+f}):xS(s,t.layoutBox,r)&&Ut(c=>{const h=o?t.measuredBox[c]:t.layoutBox[c],f=ht(r[c]);h.max=h.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+f)});const a=ns();Po(a,r,t.layoutBox);const l=ns();o?Po(l,e.applyTransform(i,!0),t.measuredBox):Po(l,r,t.layoutBox);const u=!pS(a);let d=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:h,layout:f}=c;if(h&&f){const m=Be();hu(m,t.layoutBox,h.layoutBox);const g=Be();hu(g,r,f.layoutBox),mS(m,g)||(d=!0),c.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=m,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function aO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function lO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function uO(e){e.clearSnapshot()}function gv(e){e.clearMeasurements()}function yv(e){e.isLayoutDirty=!1}function cO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function dO(e){e.resolveTargetDelta()}function fO(e){e.calcProjection()}function hO(e){e.resetSkewAndRotation()}function pO(e){e.removeLeadSnapshot()}function wv(e,t,n){e.translate=Ae(t.translate,0,n),e.scale=Ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function xv(e,t,n,r){e.min=Ae(t.min,n.min,r),e.max=Ae(t.max,n.max,r)}function mO(e,t,n,r){xv(e.x,t.x,n.x,r),xv(e.y,t.y,n.y,r)}function gO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const yO={duration:.45,ease:[.4,0,.1,1]},bv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),kv=bv("applewebkit/")&&!bv("chrome/")?Math.round:Qt;function Sv(e){e.min=kv(e.min),e.max=kv(e.max)}function vO(e){Sv(e.x),Sv(e.y)}function xS(e,t,n){return e==="position"||e==="preserve-aspect"&&!VL(dv(t),dv(n),.2)}function wO(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const xO=wS({attachResizeListener:(e,t)=>sa(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xc={current:void 0},bS=wS({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xc.current){const e=new xO({});e.mount(window),e.setOptions({layoutScroll:!0}),Xc.current=e}return Xc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),im=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Tv(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function bO(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Tv(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Tv(e[i],null)}}}}function kO(...e){return b.useCallback(bO(...e),e)}class SO extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=$k(r)&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function TO({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=b.useId(),s=b.useRef(null),o=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=b.useContext(im),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=kO(s,l);return b.useInsertionEffect(()=>{const{width:c,height:h,top:f,left:m,right:g}=o.current;if(t||!s.current||!c||!h)return;const x=n==="left"?`left: ${m}`:`right: ${g}`;s.current.dataset.motionPopId=i;const p=document.createElement("style");a&&(p.nonce=a);const y=r??document.head;return y.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${f}px !important;
          }
        `),()=>{y.contains(p)&&y.removeChild(p)}},[t]),w.jsx(SO,{isPresent:t,childRef:s,sizeRef:o,children:b.cloneElement(e,{ref:u})})}const EO=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a,root:l})=>{const u=jp(CO),d=b.useId();let c=!0,h=b.useMemo(()=>(c=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:f=>{u.set(f,!0);for(const m of u.values())if(!m)return;r&&r()},register:f=>(u.set(f,!1),()=>u.delete(f))}),[n,u,r]);return s&&c&&(h={...h}),b.useMemo(()=>{u.forEach((f,m)=>u.set(m,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o==="popLayout"&&(e=w.jsx(TO,{isPresent:n,anchorX:a,root:l,children:e})),w.jsx(Gu.Provider,{value:h,children:e})};function CO(){return new Map}function kS(e=!0){const t=b.useContext(Gu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=b.useId();b.useEffect(()=>{if(e)return i(s)},[e]);const o=b.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const el=e=>e.key||"";function Ev(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Cv=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",root:l})=>{const[u,d]=kS(o),c=b.useMemo(()=>Ev(e),[e]),h=o&&!u?[]:c.map(el),f=b.useRef(!0),m=b.useRef(c),g=jp(()=>new Map),x=b.useRef(new Set),[p,y]=b.useState(c),[v,S]=b.useState(c);Zb(()=>{f.current=!1,m.current=c;for(let A=0;A<v.length;A++){const I=el(v[A]);h.includes(I)?(g.delete(I),x.current.delete(I)):g.get(I)!==!0&&g.set(I,!1)}},[v,h.length,h.join("-")]);const E=[];if(c!==p){let A=[...c];for(let I=0;I<v.length;I++){const D=v[I],P=el(D);h.includes(P)||(A.splice(I,0,D),E.push(D))}return s==="wait"&&E.length&&(A=E),S(Ev(A)),y(c),null}const{forceRender:T}=b.useContext(Rp);return w.jsx(w.Fragment,{children:v.map(A=>{const I=el(A),D=o&&!u?!1:c===v||h.includes(I),P=()=>{if(x.current.has(I))return;if(x.current.add(I),g.has(I))g.set(I,!0);else return;let O=!0;g.forEach(N=>{N||(O=!1)}),O&&(T==null||T(),S(m.current),o&&(d==null||d()),r&&r())};return w.jsx(EO,{isPresent:D,initial:!f.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:l,onExitComplete:D?void 0:P,anchorX:a,children:A},I)})})},SS=b.createContext({strict:!1}),Pv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Av=!1;function PO(){if(Av)return;const e={};for(const t in Pv)e[t]={isEnabled:n=>Pv[t].some(r=>!!n[r])};Xk(e),Av=!0}function TS(){return PO(),hL()}function AO(e){const t=TS();for(const n in e)t[n]={...t[n],...e[n]};Xk(t)}const IO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||IO.has(e)}let ES=e=>!pu(e);function RO(e){typeof e=="function"&&(ES=t=>t.startsWith("on")?!pu(t):e(t))}try{RO(require("@emotion/is-prop-valid").default)}catch{}function jO(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ES(i)||n===!0&&pu(i)||!t&&!pu(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Ju=b.createContext({});function DO(e,t){if(Qu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ia(n)?n:void 0,animate:ia(r)?r:void 0}}return e.inherit!==!1?t:{}}function NO(e){const{initial:t,animate:n}=DO(e,b.useContext(Ju));return b.useMemo(()=>({initial:t,animate:n}),[Iv(t),Iv(n)])}function Iv(e){return Array.isArray(e)?e.join(" "):e}const sm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function CS(e,t,n){for(const r in t)!nt(t[r])&&!sS(r,n)&&(e[r]=t[r])}function MO({transformTemplate:e},t){return b.useMemo(()=>{const n=sm();return nm(n,t,e),Object.assign({},n.vars,n.style)},[t])}function LO(e,t){const n=e.style||{},r={};return CS(r,n,e),Object.assign(r,MO(e,t)),r}function OO(e,t){const n={},r=LO(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const PS=()=>({...sm(),attrs:{}});function _O(e,t,n,r){const i=b.useMemo(()=>{const s=PS();return oS(s,t,lS(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};CS(s,e.style,e),i.style={...s,...i.style}}return i}const FO=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function om(e){return typeof e!="string"||e.includes("-")?!1:!!(FO.indexOf(e)>-1||/[A-Z]/u.test(e))}function zO(e,t,n,{latestValues:r},i,s=!1,o){const l=(o??om(e)?_O:OO)(t,r,i,e),u=jO(t,typeof e=="string",s),d=e!==b.Fragment?{...u,...l,ref:n}:{},{children:c}=t,h=b.useMemo(()=>nt(c)?c.get():c,[c]);return b.createElement(e,{...d,children:h})}function BO({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:VO(n,r,i,e),renderState:t()}}function VO(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=Tl(s[h]);let{initial:o,animate:a}=e;const l=Qu(e),u=Jk(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const c=d?a:o;if(c&&typeof c!="boolean"&&!Yu(c)){const h=Array.isArray(c)?c:[c];for(let f=0;f<h.length;f++){const m=Yp(e,h[f]);if(m){const{transitionEnd:g,transition:x,...p}=m;for(const y in p){let v=p[y];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[y]=v)}for(const y in g)i[y]=g[y]}}}return i}const AS=e=>(t,n)=>{const r=b.useContext(Ju),i=b.useContext(Gu),s=()=>BO(e,t,r,i);return n?s():jp(s)},UO=AS({scrapeMotionValuesFromProps:rm,createRenderState:sm}),HO=AS({scrapeMotionValuesFromProps:uS,createRenderState:PS}),$O=Symbol.for("motionComponentSymbol");function WO(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(s=>{var a;s&&((a=e.onMount)==null||a.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=r.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const IS=b.createContext({});function po(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function qO(e,t,n,r,i,s){var x,p;const{visualElement:o}=b.useContext(Ju),a=b.useContext(SS),l=b.useContext(Gu),u=b.useContext(im).reducedMotion,d=b.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,isSVG:s}));const c=d.current,h=b.useContext(IS);c&&!c.projection&&i&&(c.type==="html"||c.type==="svg")&&GO(d.current,n,i,h);const f=b.useRef(!1);b.useInsertionEffect(()=>{c&&f.current&&c.update(n,l)});const m=n[Ok],g=b.useRef(!!m&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,m))&&((p=window.MotionHasOptimisedAnimation)==null?void 0:p.call(window,m)));return Zb(()=>{c&&(f.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),c.scheduleRenderMicrotask(),g.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(!g.current&&c.animationState&&c.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,m)}),g.current=!1),c.enteringChildren=void 0)}),c}function GO(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:RS(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&po(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u})}function RS(e){if(e)return e.options.allowProjection!==!1?e.projection:RS(e.parent)}function Zc(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&AO(r);const s=n?n==="svg":om(e),o=s?HO:UO;function a(u,d){let c;const h={...b.useContext(im),...u,layoutId:KO(u)},{isStatic:f}=h,m=NO(u),g=o(u,f);if(!f&&Xb){YO();const x=QO(h);c=x.MeasureLayout,m.visualElement=qO(e,g,h,i,x.ProjectionNode,s)}return w.jsxs(Ju.Provider,{value:m,children:[c&&m.visualElement?w.jsx(c,{visualElement:m.visualElement,...h}):null,zO(e,u,WO(g,m.visualElement,d),g,f,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=b.forwardRef(a);return l[$O]=e,l}function KO({layoutId:e}){const t=b.useContext(Rp).id;return t&&e!==void 0?t+"-"+e:e}function YO(e,t){b.useContext(SS).strict}function QO(e){const t=TS(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function JO(e,t){if(typeof Proxy>"u")return Zc;const n=new Map,r=(s,o)=>Zc(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,Zc(o,void 0,e,t)),n.get(o))})}const XO=(e,t)=>t.isSVG??om(e)?new RL(t):new TL(t,{allowProjection:e!==b.Fragment});class ZO extends ei{constructor(t){super(t),t.animationState||(t.animationState=LL(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let e_=0;class t_ extends ei{constructor(){super(...arguments),this.id=e_++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const n_={animation:{Feature:ZO},exit:{Feature:t_}};function ka(e){return{point:{x:e.pageX,y:e.pageY}}}const r_=e=>t=>Zp(t)&&e(t,ka(t));function Ao(e,t,n,r){return sa(e,t,r_(n),r)}const jS=({current:e})=>e?e.ownerDocument.defaultView:null,Rv=(e,t)=>Math.abs(e-t);function i_(e,t){const n=Rv(e.x,t.x),r=Rv(e.y,t.y);return Math.sqrt(n**2+r**2)}const jv=new Set(["auto","scroll"]);class DS{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=td(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=i_(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!g)return;const{point:x}=f,{timestamp:p}=Ke;this.history.push({...x,timestamp:p});const{onStart:y,onMove:v}=this.handlers;m||(y&&y(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ed(m,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:p}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=td(f.type==="pointercancel"?this.lastMoveEventInfo:ed(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,y),x&&x(f,y)},!Zp(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const l=ka(t),u=ed(l,this.transformPagePoint),{point:d}=u,{timestamp:c}=Ke;this.history=[{...d,timestamp:c}];const{onSessionStart:h}=n;h&&h(t,td(u,this.history)),this.removeListeners=wa(Ao(this.contextWindow,"pointermove",this.handlePointerMove),Ao(this.contextWindow,"pointerup",this.handlePointerUp),Ao(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(jv.has(r.overflowX)||jv.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Kr(this.updatePoint)}}function ed(e,t){return t?{point:t(e.point)}:e}function Dv(e,t){return{x:e.x-t.x,y:e.y-t.y}}function td({point:e},t){return{point:e,delta:Dv(e,NS(t)),offset:Dv(e,s_(t)),velocity:o_(t,.1)}}function s_(e){return e[0]}function NS(e){return e[e.length-1]}function o_(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=NS(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Mn(t)));)n--;if(!r)return{x:0,y:0};const s=Kt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function a_(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ae(n,e,r.max):Math.min(e,n)),e}function Nv(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function l_(e,{top:t,left:n,bottom:r,right:i}){return{x:Nv(e.x,n,i),y:Nv(e.y,t,r)}}function Mv(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function u_(e,t){return{x:Mv(e.x,t.x),y:Mv(e.y,t.y)}}function c_(e,t){let n=.5;const r=ht(e),i=ht(t);return i>r?n=ta(t.min,t.max-r,e.min):r>i&&(n=ta(e.min,e.max-i,t.min)),_n(0,1,n)}function d_(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Jf=.35;function f_(e=Jf){return e===!1?e=0:e===!0&&(e=Jf),{x:Lv(e,"left","right"),y:Lv(e,"top","bottom")}}function Lv(e,t,n){return{min:Ov(e,t),max:Ov(e,n)}}function Ov(e,t){return typeof e=="number"?e:e[t]||0}const h_=new WeakMap;class p_{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=c=>{n?(this.stopAnimation(),this.snapToCursor(ka(c).point)):this.pauseAnimation()},o=(c,h)=>{this.stopAnimation();const{drag:f,dragPropagation:m,onDragStart:g}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tL(f),!this.openDragLock))return;this.latestPointerEvent=c,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ut(p=>{let y=this.getAxisMotionValue(p).get()||0;if(Ln.test(y)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[p];S&&(y=ht(S)*(parseFloat(y)/100))}}this.originPoint[p]=y}),g&&Se.postRender(()=>g(c,h)),$f(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(c,h)=>{this.latestPointerEvent=c,this.latestPanInfo=h;const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:g,onDrag:x}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:p}=h;if(m&&this.currentDirection===null){this.currentDirection=m_(p),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),x&&x(c,h)},l=(c,h)=>{this.latestPointerEvent=c,this.latestPanInfo=h,this.stop(c,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Ut(c=>{var h;return this.getAnimationState(c)==="paused"&&((h=this.getAxisMotionValue(c).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new DS(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:jS(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Se.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!tl(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=a_(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&po(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=l_(r.layoutBox,t):this.constraints=!1,this.elastic=f_(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ut(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=d_(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!po(t))return!1;const r=t.current;Ds(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=vL(r,i.root,this.visualElement.getTransformPagePoint());let o=u_(i.layout.layoutBox,s);if(n){const a=n(mL(o));this.hasMutatedConstraints=!!a,a&&(o=eS(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ut(d=>{if(!tl(d,n,this.currentDirection))return;let c=l&&l[d]||{};o&&(c={min:0,max:0});const h=i?200:1e6,f=i?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...s,...c};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return $f(this.visualElement,t),r.start(Kp(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ut(n=>{const{drag:r}=this.getProps();if(!tl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=s.get()||0;s.set(t[n]-Ae(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!po(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ut(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=c_({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ut(o=>{if(!tl(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Ae(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;h_.set(this.visualElement,this);const t=this.visualElement.current,n=Ao(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!Kk(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();po(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(r);const o=sa(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ut(d=>{const c=this.getAxisMotionValue(d);c&&(this.originPoint[d]+=l[d].translate,c.set(c.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Jf,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function tl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function m_(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class g_ extends ei{constructor(t){super(t),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new p_(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const _v=e=>(t,n)=>{e&&Se.postRender(()=>e(t,n))};class y_ extends ei{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(t){this.session=new DS(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jS(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_v(t),onStart:_v(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Se.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ao(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nd=!1;class v_ extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),nd&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),El.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,nd=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Se.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Xp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;nd=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function MS(e){const[t,n]=kS(),r=b.useContext(Rp);return w.jsx(v_,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(IS),isPresent:t,safeToRemove:n})}const w_={pan:{Feature:y_},drag:{Feature:g_,ProjectionNode:bS,MeasureLayout:MS}};function Fv(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Se.postRender(()=>s(t,ka(t)))}class x_ extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=nL(t,(n,r)=>(Fv(this.node,r,"Start"),i=>Fv(this.node,i,"End"))))}unmount(){}}class b_ extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wa(sa(this.node.current,"focus",()=>this.onFocus()),sa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zv(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Se.postRender(()=>s(t,ka(t)))}class k_ extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=sL(t,(n,r)=>(zv(this.node,r,"Start"),(i,{success:s})=>zv(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xf=new WeakMap,rd=new WeakMap,S_=e=>{const t=Xf.get(e.target);t&&t(e)},T_=e=>{e.forEach(S_)};function E_({root:e,...t}){const n=e||document;rd.has(n)||rd.set(n,{});const r=rd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(T_,{root:e,...t})),r[i]}function C_(e,t,n){const r=E_(t);return Xf.set(e,n),r.observe(e),()=>{Xf.delete(e),r.unobserve(e)}}const P_={some:0,all:1};class A_ extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:P_[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:c}=this.node.getProps(),h=u?d:c;h&&h(l)};return C_(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(I_(t,n))&&this.startObserver()}unmount(){}}function I_({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const R_={inView:{Feature:A_},tap:{Feature:k_},focus:{Feature:b_},hover:{Feature:x_}},j_={layout:{ProjectionNode:bS,MeasureLayout:MS}},D_={...n_,...R_,...w_,...j_},ae=JO(D_,XO),N_=z1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ne=b.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},s)=>{const o=r?fA:"button";return w.jsx(o,{className:Ft(N_({variant:t,size:n,className:e})),ref:s,...i})});Ne.displayName="Button";const Bv=[{path:"/",label:"Home",icon:H1},{path:"/docs",label:"Documentation",icon:ya},{path:"/blog",label:"Blog",icon:cp},{path:"/about",label:"About",icon:T2}];function Sa(){const{theme:e,toggleTheme:t}=Jb(),n=sr(),[r,i]=b.useState(!1);return w.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 h-nav glass border-b border-border",children:[w.jsxs("div",{className:"container mx-auto h-full flex items-center justify-between px-4 lg:px-8",children:[w.jsxs(We,{to:"/",className:"flex items-center gap-2 group",children:[w.jsx("img",{src:"/Docs/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),w.jsx("span",{className:"font-semibold text-lg hidden sm:block group-hover:text-primary transition-colors",children:"DeCoded"})]}),w.jsx("nav",{className:"hidden md:flex items-center gap-1",children:Bv.map(s=>{const o=n.pathname===s.path||s.path!=="/"&&n.pathname.startsWith(s.path);return w.jsxs(We,{to:s.path,className:Ft("relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",o?"text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[s.label,o&&w.jsx(ae.div,{layoutId:"nav-indicator",className:"absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full",transition:{type:"spring",bounce:.2,duration:.4}})]},s.path)})}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(Ne,{variant:"ghost",size:"icon",onClick:t,className:"rounded-lg","aria-label":"Toggle theme",children:w.jsx(ae.div,{initial:!1,animate:{rotate:e==="dark"?0:180},transition:{duration:.3},children:e==="dark"?w.jsx(y2,{className:"h-5 w-5"}):w.jsx(k2,{className:"h-5 w-5"})})}),w.jsx(Ne,{variant:"ghost",size:"icon",className:"md:hidden rounded-lg",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?w.jsx(hp,{className:"h-5 w-5"}):w.jsx($1,{className:"h-5 w-5"})})]})]}),r&&w.jsx(ae.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"md:hidden absolute top-full left-0 right-0 glass border-b border-border",children:w.jsx("nav",{className:"container mx-auto py-4 px-4 flex flex-col gap-1",children:Bv.map(s=>{const o=s.icon,a=n.pathname===s.path||s.path!=="/"&&n.pathname.startsWith(s.path);return w.jsxs(We,{to:s.path,onClick:()=>i(!1),className:Ft("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",a?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[w.jsx(o,{className:"h-5 w-5"}),s.label]},s.path)})})})]})}const M_=[{icon:U1,href:"https://github.com/Rucha-1111/",label:"GitHub"},{icon:fp,href:"https://www.linkedin.com/in/rucha-gade/",label:"LinkedIn"},{icon:vf,href:"mailto:ruchagade20@gmail.com",label:"Email"}],L_=[{title:"Documentation",links:[{label:"Getting Started",href:"/docs/getting-started"},{label:"API Reference",href:"/docs/api-reference"},{label:"Tutorials",href:"/docs/tutorials"}]},{title:"Resources",links:[{label:"Blog",href:"/blog"},{label:"About",href:"/about"},{label:"Contact",href:"/about#contact"}]}];function Ta(){return w.jsx("footer",{className:"border-t border-border bg-card/50",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[w.jsxs("div",{className:"md:col-span-2",children:[w.jsxs(We,{to:"/",className:"flex items-center gap-2 mb-4",children:[w.jsx("img",{src:"/Docs/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),w.jsx("span",{className:"font-semibold text-lg",children:"DeCoded"})]}),w.jsx("p",{className:"text-muted-foreground text-sm max-w-xs mb-6",children:"Aspiring Technical Writer crafting clear, developer-focused documentation that bridges complex systems and human understanding."}),w.jsx("div",{className:"flex gap-3",children:M_.map(e=>w.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":e.label,children:w.jsx(e.icon,{className:"h-4 w-4"})},e.label))})]}),L_.map(e=>w.jsxs("div",{children:[w.jsx("h4",{className:"font-semibold text-sm mb-4",children:e.title}),w.jsx("ul",{className:"space-y-2",children:e.links.map(t=>w.jsx("li",{children:w.jsx(We,{to:t.href,className:"text-sm text-muted-foreground hover:text-primary transition-colors",children:t.label})},t.label))})]},e.title))]}),w.jsxs("div",{className:"border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4",children:[w.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",new Date().getFullYear()," TechWriter Portfolio. All rights reserved."]}),w.jsx("p",{className:"text-sm text-muted-foreground",children:"Built with precision and purpose."})]})]})})}const O_=[{icon:ya,title:"Technical Documentation",description:"Crystal-clear API references, guides, and tutorials that developers actually want to read."},{icon:cp,title:"Content Strategy",description:"Structured information architecture that scales with your product."},{icon:dp,title:"Developer Experience",description:"Documentation that reduces time-to-value and support overhead."}],__={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},nl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function F_(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsxs("main",{className:"flex-1 pt-nav",children:[w.jsxs("section",{className:"relative overflow-hidden",children:[w.jsx("div",{className:"absolute inset-0 pointer-events-none",children:w.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px]",style:{background:"var(--gradient-glow)"}})}),w.jsx("div",{className:"container mx-auto px-4 lg:px-8 py-16 sm:py-20 md:py-32 relative z-10",children:w.jsxs(ae.div,{variants:__,initial:"hidden",animate:"visible",className:"max-w-3xl mx-auto text-center",children:[w.jsx(ae.div,{variants:nl,className:"mb-6",children:w.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",children:[w.jsx(b2,{className:"h-4 w-4"}),"Aspiring Technical Writer"]})}),w.jsxs(ae.h1,{variants:nl,className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight",children:["Documentation that"," ",w.jsx("span",{className:"text-gradient",children:"developers love"})]}),w.jsx(ae.p,{variants:nl,className:"text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto",children:"I craft technical documentation that bridges complex systems and human understanding. Clear, precise, and developer-focused."}),w.jsxs(ae.div,{variants:nl,className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Ne,{asChild:!0,size:"lg",className:"glow",children:w.jsxs(We,{to:"/docs",className:"gap-2",children:["Explore Documentation",w.jsx(yf,{className:"h-4 w-4"})]})}),w.jsx(Ne,{asChild:!0,variant:"outline",size:"lg",children:w.jsx(We,{to:"/about",children:"About Me"})})]})]})})]}),w.jsx("section",{className:"py-20 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"What I Do"}),w.jsx("p",{className:"text-muted-foreground max-w-xl mx-auto",children:"Transforming complex technical concepts into accessible, actionable documentation."})]}),w.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:O_.map((e,t)=>w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},className:"group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[w.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",children:w.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),w.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),w.jsx("p",{className:"text-muted-foreground text-sm",children:e.description})]},e.title))})]})}),w.jsx("section",{className:"py-20",children:w.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:w.jsxs(ae.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12 text-center",children:[w.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"var(--gradient-glow)",opacity:.5}}),w.jsxs("div",{className:"relative z-10",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-4 break-words",children:"Ready to explore the documentation?"}),w.jsx("p",{className:"text-muted-foreground mb-8 max-w-lg mx-auto break-words",children:"Dive into sample documentation showcasing my approach to technical writing."}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Ne,{asChild:!0,size:"lg",className:"break-words",children:w.jsxs(We,{to:"/docs/introduction",className:"gap-2",children:["Start Reading",w.jsx(yf,{className:"h-4 w-4"})]})}),w.jsx(Ne,{asChild:!0,variant:"outline",size:"lg",className:"break-words",children:w.jsx(We,{to:"/blog",children:"Read the Blog"})})]})]})]})})})]}),w.jsx(Ta,{})]})}const LS=`# Welcome to the Documentation

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
`,HS=`# LeetCode 151. Reverse Words in a String

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
`,$S="",WS=`# API Documentation Standards

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
`,JS=`# Pagination, Filtering & Sorting in APIs

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
`,XS=`# Rate Limiting & Throttling

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
`,sT=`# Validation & Data Integrity in APIs

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
`,oT=`# Versioning Strategies in APIs

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
`,aT="",lT=`# How to Create a Basic REST API from Scratch

## Introduction

APIs (Application Programming Interfaces) are the backbone of modern web development. They allow different software applications to communicate with each other by sending and receiving data in a structured format. Think of an API as a waiter in a restaurant: you (the client) tell the waiter (the API) what you want, and the waiter brings your request to the kitchen (the server) and returns with your food (the data).

In this comprehensive tutorial, we will build a **simple REST API** using **Node.js and Express**. REST (Representational State Transfer) is an architectural style that uses standard HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.

### What You Will Learn

By the end of this tutorial, you will have:

* A fully functional REST API with multiple endpoints
* Practical knowledge of using \`GET\` and \`POST\` HTTP methods
* Understanding of how to structure an API project
* Experience testing APIs using different tools
* A complete, documented project ready to deploy

### Why Node.js and Express?

**Node.js** is a JavaScript runtime that allows you to run JavaScript on the server side, not just in the browser. It's fast, scalable, and has a massive ecosystem of packages.

**Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating server-side applications and APIs.

---

## Prerequisites

Before diving into the tutorial, ensure you have the following tools installed on your computer:

### Required Software

* **Node.js** (version 14 or higher) and **npm** (Node Package Manager)
  * npm comes bundled with Node.js
  * [Download Node.js](https://nodejs.org/)
  * To verify installation, run: \`node --version\` and \`npm --version\`

* **Code Editor**
  * We recommend [Visual Studio Code](https://code.visualstudio.com/) (free and powerful)
  * Alternatives: Sublime Text, Atom, or any text editor you're comfortable with

* **API Testing Tool** (optional but highly recommended)
  * [Postman](https://www.postman.com/downloads/) - User-friendly GUI for API testing
  * [Insomnia](https://insomnia.rest/download) - Lightweight alternative to Postman
  * Alternative: Use browser extensions like REST Client or curl commands

### Recommended Knowledge

* Basic understanding of JavaScript
* Familiarity with command line/terminal
* Basic understanding of how the web works (HTTP requests/responses)

---

## Step 1: Initialize Your Project

The first step in creating any Node.js project is to set up your project structure and initialize it with npm.

### 1.1 Create Project Folder

Open your terminal or command prompt and create a new directory for your API project:

\`\`\`bash
mkdir basic-api
cd basic-api
\`\`\`

**Explanation:**

* \`mkdir basic-api\` creates a new folder named "basic-api"
* \`cd basic-api\` changes your current directory to the newly created folder

### 1.2 Initialize Node.js Project

Now, initialize a new Node.js project by running:

\`\`\`bash
npm init -y
\`\`\`

**What does this do?**

The \`npm init\` command creates a \`package.json\` file, which is the heart of any Node.js project. This file contains:

* Project metadata (name, version, description)
* Dependencies (packages your project needs)
* Scripts for running tasks
* Other configuration details

The \`-y\` flag automatically answers "yes" to all prompts, creating a default \`package.json\` file. Without this flag, you would need to manually answer questions about your project.

### 1.3 Verify package.json

Open the newly created \`package.json\` file. It should look something like this:

\`\`\`json
{
  "name": "basic-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
\`\`\`

You can edit this file to add a description, author name, or other details if you wish.

![Initialize Project](/Docs/rest-api/step1-init.png)

---

## Step 2: Install Express

Express is a third-party package that we need to install as a dependency for our project.

### 2.1 Install Express Package

Run the following command in your terminal:

\`\`\`bash
npm install express
\`\`\`

**What happens during installation?**

1. npm downloads the Express package from the npm registry
2. It saves Express to a \`node_modules\` folder in your project
3. It adds Express as a dependency in your \`package.json\` file
4. It creates or updates a \`package-lock.json\` file that locks the exact versions of all packages

### 2.2 Verify Installation

After installation, check your \`package.json\` file. You should now see Express listed under dependencies:

\`\`\`json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
\`\`\`

The version number may differ depending on when you're following this tutorial. The \`^\` symbol means npm will accept minor version updates.

### 2.3 Understanding node_modules

You'll notice a new \`node_modules\` folder has been created. This folder contains Express and all its dependencies. **_Never edit files in this folder manually_**, and you typically don't include it in version control (add it to \`.gitignore\` if using Git).

![Install Express](/Docs/rest-api/step2-express.png)

---

## Step 3: Create the Server

Now we'll create the actual server file that will run our API.

### 3.1 Create server.js

In your project root directory, create a new file called \`server.js\`. This will be the entry point of our application.

### 3.2 Import Express and Initialize

Add the following code to \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;
\`\`\`

**Code Breakdown:**

* \`const express = require('express');\` - Imports the Express module using CommonJS syntax
* \`const app = express();\` - Creates an Express application instance. This \`app\` object has methods for routing HTTP requests, configuring middleware, rendering HTML, and more
* \`const port = 3000;\` - Defines the port number our server will listen on. Port 3000 is commonly used for local development

### 3.3 Add Middleware

Add this line next:

\`\`\`javascript
// Middleware to parse JSON
app.use(express.json());
\`\`\`

**What is Middleware?**

Middleware functions are functions that have access to the request object (\`req\`), the response object (\`res\`), and the next middleware function in the application's request-response cycle.

\`express.json()\` is a built-in middleware that parses incoming requests with JSON payloads. Without this, your API wouldn't be able to read JSON data sent in POST requests.

### 3.4 Create Your First Route

Add a simple test route:

\`\`\`javascript
// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
\`\`\`

**Understanding Routes:**

* \`app.get()\` defines a route that responds to HTTP GET requests
* The first parameter \`'/'\` is the path (root path in this case)
* The second parameter is a callback function with two parameters:
  * \`req\` (request) - contains information about the HTTP request
  * \`res\` (response) - used to send back the desired HTTP response
* \`res.send()\` sends a simple string response to the client

### 3.5 Start the Server

Finally, tell the server to start listening for requests:

\`\`\`javascript
// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

**What does app.listen() do?**

* Binds and listens for connections on the specified host and port
* The callback function runs once the server starts successfully
* The backticks (\`) allow us to use template literals to embed the port variable

### 3.6 Complete server.js Code

Your complete \`server.js\` file should now look like this:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

### 3.7 Run Your Server

In your terminal, start the server by running:

\`\`\`bash
node server.js
\`\`\`

You should see the message: \`Server running at http://localhost:3000\`

### 3.8 Test in Browser

Open your web browser and navigate to:

\`\`\`
http://localhost:3000
\`\`\`

You should see **"Hello, World!"** displayed on the page. Congratulations! Your server is running.

**Troubleshooting:**

* If you see "Cannot GET /", make sure your server.js file is correct and restart the server
* If the port is already in use, change the port number to something else (like 3001, 8000, etc.)
* To stop the server, press \`Ctrl+C\` in the terminal

![Browser Test](/Docs/rest-api/step3-browser.png)

---

## Step 4: Create a Simple API Endpoint

Now let's create a more realistic API endpoint that returns actual data in JSON format.

### 4.1 Add Sample Data

At the top of your \`server.js\` file, after the variable declarations, add an array of user objects:

\`\`\`javascript
const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];
\`\`\`

**Understanding the Data Structure:**

This is a simple JavaScript array containing objects. Each object represents a user with:

* \`id\`: A unique identifier for the user
* \`name\`: The user's name

In a real application, this data would typically come from a database like MongoDB, PostgreSQL, or MySQL. For learning purposes, we're using an in-memory array.

### 4.2 Create the /users Endpoint

Add a new route to retrieve all users:

\`\`\`javascript
app.get('/users', (req, res) => {
  res.json(users);
});
\`\`\`

**Code Explanation:**

* \`app.get('/users', ...)\` - Defines a GET endpoint at the \`/users\` path
* \`res.json(users)\` - Sends the users array as a JSON response
  * The \`json()\` method automatically:
    * Converts the JavaScript object/array to JSON format
    * Sets the \`Content-Type\` header to \`application/json\`
    * Sends the response to the client

### 4.3 Complete Code So Far

Your \`server.js\` should now look like this:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

### 4.4 Restart Your Server

Since we modified the code, we need to restart the server:

1. Stop the current server (press \`Ctrl+C\` in terminal)
2. Start it again:

\`\`\`bash
node server.js
\`\`\`

**Pro Tip:** Later, you can install \`nodemon\` which automatically restarts your server when files change:

\`\`\`bash
npm install --save-dev nodemon
\`\`\`

Then run with: \`npx nodemon server.js\`

### 4.5 Test the Endpoint

You can test this endpoint in multiple ways:

#### Method 1: Browser

Navigate to:

\`\`\`
http://localhost:3000/users
\`\`\`

You should see the JSON response:

\`\`\`json
[
  { "id": 1, "name": "Rucha" },
  { "id": 2, "name": "John" }
]
\`\`\`

#### Method 2: Postman

1. Open Postman
2. Create a new request
3. Set method to \`GET\`
4. Enter URL: \`http://localhost:3000/users\`
5. Click "Send"
6. View the response in the body section

#### Method 3: curl (Command Line)

If you prefer command line, use:

\`\`\`bash
curl http://localhost:3000/users
\`\`\`

![Users API Response](/Docs/rest-api/step4-users.png)

### 4.6 Understanding REST Principles

This endpoint follows REST principles:

* **Resource-based:** \`/users\` represents a collection of user resources
* **HTTP Methods:** We use GET to retrieve data (read-only operation)
* **Stateless:** Each request is independent; the server doesn't store client state
* **JSON Format:** We use JSON, the standard format for API data exchange

---

## Step 5: Add a POST Endpoint

So far, we can only read data. Let's add functionality to create new users using the POST method.

### 5.1 Understanding HTTP POST

The POST method is used to submit data to be processed. Unlike GET requests, POST requests:

* Can send data in the request body
* Are not cached by browsers
* Don't remain in browser history
* Have no restrictions on data length

### 5.2 Create the POST Route

Add this code to your \`server.js\`:

\`\`\`javascript
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
\`\`\`

**Detailed Code Explanation:**

1. \`app.post('/users', ...)\` - Defines a POST endpoint at \`/users\` path
   * Notice we're using the same path as our GET endpoint
   * Express automatically routes to the correct handler based on HTTP method

2. \`const newUser = { ... }\` - Creates a new user object:
   * \`id: users.length + 1\` - Generates a simple incremental ID
     * In production, databases handle ID generation automatically
   * \`name: req.body.name\` - Gets the name from the request body
     * \`req.body\` is populated by the \`express.json()\` middleware we added earlier

3. \`users.push(newUser)\` - Adds the new user to our users array
   * This modifies the in-memory array
   * In a real app, you'd save to a database

4. \`res.status(201).json(newUser)\` - Sends the response:
   * \`status(201)\` - Sets HTTP status code to 201 (Created)
     * Status codes are important in REST APIs
     * 201 specifically means a resource was successfully created
   * \`json(newUser)\` - Returns the newly created user as JSON

### 5.3 HTTP Status Codes

Here are common status codes you'll use in APIs:

* **200 OK** - Successful GET, PUT, or DELETE
* **201 Created** - Successful POST (resource created)
* **204 No Content** - Successful request with no response body
* **400 Bad Request** - Invalid request data
* **404 Not Found** - Resource doesn't exist
* **500 Internal Server Error** - Server-side error

### 5.4 Complete server.js

Your final \`server.js\` should look like this:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Rucha' },
  { id: 2, name: 'John' },
];

// Middleware to parse JSON
app.use(express.json());

// Test GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

### 5.5 Restart Server

Remember to restart your server to apply changes:

\`\`\`bash
# Stop with Ctrl+C, then:
node server.js
\`\`\`

### 5.6 Test with Postman

To test the POST endpoint, you can't use a browser directly (browsers default to GET requests). Use Postman instead:

#### Step-by-Step Postman Instructions

1. **Open Postman** and create a new request

2. **Set the Method** to \`POST\` (dropdown next to URL)

3. **Enter the URL**: \`http://localhost:3000/users\`

4. **Configure the Body**:
   * Click on the "Body" tab
   * Select "raw"
   * Choose "JSON" from the dropdown (right side)

5. **Enter JSON Data**:

   \`\`\`json
   {
     "name": "Alice"
   }
   \`\`\`

6. **Click "Send"**

7. **View the Response**:
   * You should receive a 201 status code
   * Response body should show:

   \`\`\`json
   {
     "id": 3,
     "name": "Alice"
   }
   \`\`\`

### 5.7 Verify the User Was Added

Make a GET request to \`http://localhost:3000/users\` again. You should now see all three users:

\`\`\`json
[
  { "id": 1, "name": "Rucha" },
  { "id": 2, "name": "John" },
  { "id": 3, "name": "Alice" }
]
\`\`\`

### 5.8 Test with curl

Alternatively, test with curl:

\`\`\`bash
curl -X POST http://localhost:3000/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice"}'
\`\`\`

![Add User](/Docs/rest-api/step5-post.png)

---

## Conclusion

This tutorial demonstrated the end-to-end process of creating a basic REST API using Node.js and Express. It covered project initialization, server setup, route creation, and handling HTTP requests and responses.

You implemented:

* A GET endpoint to retrieve a collection of users
* A POST endpoint to create a new user using JSON request data
* Proper use of middleware for request parsing
* Basic API testing using browser tools, Postman, and curl

The API uses in-memory data and is intended for learning purposes. In a production environment, this data would be persisted using a database and enhanced with validation, error handling, and authentication.

This example provides a foundational reference for understanding REST concepts and documenting simple API workflows.
`,uT="",cT="",dT="",fT="",hT="",pT=`---
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
title: "What I Learned About Technical Writing "
date: 2026-01-23
tags: ['Documentation', 'Technical Writing', 'Software Development']
---

Let's be honest: most technical documentation is terrible. You know it, I know it, and that frustrated developer at 2 AM googling "how to implement OAuth" definitely knows it. After completing Google's Technical Writing course, I finally understand why—and more importantly, how to fix it.

## What Actually Is Technical Writing?

_[**Technical writing**](https://technicalwriterhq.com/writing/technical-writing/) is a form of writing that focuses on conveying complex information in a clear, concise, and easy-to-understand manner. It creates user manuals, instructional guides, technical reports, and software documentation. The goal is to break down technical concepts and processes into simple, digestible information that the intended audience can easily follow, whether they are experts or novices._

Or to put it in simple words :- Technical writing is the art of explaining complex stuff without making people's brains hurt. It's the difference between documentation that gets you promoted and documentation that gets thrown into the digital bin.

At its core, technical writing transforms complicated technical concepts into clear, actionable information. Whether you're writing API documentation, user guides, or internal wikis, the mission stays the same: help your reader accomplish something without needing a PhD to understand you.

Now before we get into the grammar rules and technical details, a fair question: _why did I take this course in the first place?_
I realized that writing had quietly become my favorite part of building things. Not just writing code, but writing about it, explaining how something works, why it exists, and how someone else can use it without frustration. I’d often spend more time refining README files, guides, and explanations than the actual implementation. This course felt like the right way to turn that instinct into a real skill—to learn how clarity is designed, not guessed, and how good documentation can be just as impactful as good code.

## The Grammar Refresher Nobody Asked For (But Everyone Needs)

Here's something embarrassing I discovered: I'd completely forgotten what half the parts of speech actually do. When you speak a language fluently, you stop thinking about _why_ sentences work - you just know they do. Turns out, that's a problem when you're trying to write crystal-clear documentation.

Let me break down the building blocks:

### The Core Players

**Nouns** are your people, places, things, and concepts. In code, they are your classes and variables. When I write "The database stores user credentials," both "database" and "credentials" are nouns.

**Pronouns** are shortcuts that reference nouns you've already mentioned. They're like pointers in programming - super useful until they create confusion. More on that disaster later.

**Verbs** are action words that show what's happening. Every sentence needs at least one. "The API returns JSON" has a nice, clear verb. "The API is being used for JSON returning" has a verb that should be fired.

**Adjectives** describe nouns (red balloon, critical error, annoying bug), while **adverbs** modify verbs, adjectives, or other adverbs (runs quickly, extremely important, very slowly).

**Prepositions** show relationships between things, usually answering "where?" The config file is _in_ the root directory, _on_ the server, _under_ version control.

**Conjunctions** connect words or phrases _within_ a sentence (and, but, or), while **transitions** connect entire sentences together (however, therefore, meanwhile).

### Why This Actually Matters

Understanding these components isn't an academic exercise. When your documentation confuses users, it's usually because one of these elements went rogue. Pronouns point to the wrong noun. Weak verbs muddy the action. Transitions vanish, leaving readers lost between ideas.

## The Terminology Tightrope: Acronyms, Glossaries, and Consistency

One lesson hit hard: inconsistent terminology destroys comprehension faster than anything else.

### The Acronym Problem

Remember when acronyms meant something to you? HTML used to stand for HyperText Markup Language. Now? Most web developers just call it HTML and move on. The expansion has become irrelevant.

Here's the rule: spell out an acronym on first use if your audience might not know it, then use the acronym consistently afterward. For example:

> "Configure your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The CI/CD system will automatically run tests on each commit."

Don't flip-flop between "CI/CD," "continuous integration," and "the deployment system." Pick one term and stick with it like your documentation depends on it (because it does).

### When You Need a Glossary

If you're using more than five specialized terms that readers might not know, create a glossary. Think of it as a mini-FAQ for your terminology. Your future self, and every confused reader, will thank you!

## Pronouns: The Silent Documentation Killer

Pronouns are evil geniuses. They make writing flow smoothly but create ambiguity that can ruin your documentation.

Consider this nightmare:

> "After the API calls the webhook, it processes the response. If it fails, it retries up to three times before it logs an error."

What does "it" refer to in each instance? The API? The webhook? The response? Nobody knows, and that's the problem.

Here's the fix:

> "After the API calls the webhook, the API processes the response. If the webhook fails, the API retries up to three times before logging an error."

Yes, it's more repetitive. Yes, it's also crystal clear. In technical writing, clarity beats elegance. Every. Single. Time.

### The "This" and "That" Trap

These pronouns are particularly sneaky:

> "The function validates input before processing. This improves security."

What's "this"? The validation? The processing? The entire previous sentence? Clarify it:

> "The function validates input before processing. This validation step improves security."

One extra word eliminates all ambiguity.

## Active Voice vs. Passive Voice: The Showdown

Here's the formula:

- **Active Voice:** Actor + Verb + Target
- **Passive Voice:** Target + Verb + Actor

Active voice examples:

- The developer writes the code.
- The system processes requests.
- You configure the settings.

Passive voice examples:

- The code is written by the developer.
- Requests are processed by the system.
- The settings are configured.

### Why Active Voice Wins

Active voice is direct, clear, and assigns responsibility. It tells you who does what. Passive voice hides the actor, which creates confusion in technical documentation:

> "The database was deleted."

By whom? A script? A user? A very confused intern? We'll never know.

Compare it to:

> "The automated cleanup script deleted the database."

Now we know exactly what happened and can debug accordingly.

**Important note:** Passive voice isn't always wrong. Sometimes the actor doesn't matter ("The server was restarted at 3 AM"). Just use it deliberately, not by accident.

## Writing with Clarity: Strong Verbs and Concrete Language

### Pick Strong Verbs

Weak verbs make documentation squishy and vague. Strong verbs make it precise and actionable.

**Weak:** The application is able to handle 10,000 requests.
**Strong:** The application handles 10,000 requests.

**Weak:** The function makes a determination about user permissions.
**Strong:** The function determines user permissions.

**Weak:** There is a process that validates the input.
**Strong:** The validator checks the input.

See the pattern? Strong verbs cut the fluff and get to the point.

### Eliminate "There Is" and "There Are"

These phrases are documentation weeds. They add words without adding meaning.

**Before:** There are three configuration options available to users.
**After:** Three configuration options are available to users.
**Even better:** Users can configure three options.

### Ditch the Dictionary Words and Flowery Language T

Turns out, elegance in poetry can be chaos in documentation. Technical documentation should be packed with facts, not with adjectives like "extremely," "very," or "incredibly." Your readers don't need poetry, they need instructions.

**Bad:** The API provides incredibly robust and extremely powerful functionality.
**Good:** The API provides authentication, rate limiting, and caching.

Facts beat flattery every time.

## The Power of Shorter Sentences

Long sentences are like long meetings: occasionally necessary, usually avoidable, and almost always painful.

**Too long:** "The system, which processes user requests by first validating authentication tokens and then checking rate limits before finally executing the requested operation, can handle approximately 50,000 requests per minute during peak load times."

**Better:** "The system processes user requests in three steps: validate authentication, check rate limits, and execute operations. It handles 50,000 requests per minute during peak loads."

Break complex ideas into digestible chunks. Your readers' working memory will thank you.

### When to Use Lists Instead

If you're explaining three or more things, consider using a list instead of a run-on sentence. Lists make information scannable and reduce cognitive load.

## Bulleted vs. Numbered Lists: There's Actually a Difference

Before this course, I used bullet points and numbered lists interchangeably. Rookie mistake.

Here's the rule: **Order matters? Use numbers. Order doesn't matter? Use bullets.**

### Bulleted Lists (Unordered)

Use bullets when the sequence is irrelevant:

The API supports the following authentication methods:

- OAuth 2.0
- API keys
- JWT tokens

You can rearrange these items without changing the meaning.

### Numbered Lists (Ordered)

Use numbers when sequence matters:

To make a peanut butter and jelly sandwich:

**Prerequisites:** 2 slices of bread, peanut butter, jelly, a knife

1. Take 2 slices of bread
2. Spread peanut butter on one slice
3. Spread jelly on the other slice
4. Press the slices together
5. Cut and serve

Doing step 2 before step 1 will get messy. Order matters!

### Start with Imperative Verbs

Numbered lists work best when each item starts with a command verb (imperative verb). This creates parallel structure and makes instructions action-oriented:

1. **Download** the installer from the website
2. **Run** the installation wizard
3. **Configure** your preferences
4. **Restart** the application

This pattern is scannable, clear, and impossible to misunderstand. Take our "Peanut Butter & Jelly Sandwich" example. The first word of each point is a **verb**.

### Parallel Structure Matters

Keep your list items grammatically consistent—each item should start the same way (same verb form, tone, and structure).

**Non-parallel (bad):**

- Configuring the database  ← starts with a gerund (-ing)
- Set up authentication     ← starts with an imperative verb
- The cache should be enabled ← starts with a full sentence

**Parallel (good):**

- Configure the database    ← all imperative verbs
- Set up authentication
- Enable the cache

Notice how in the good version, every item **starts with a verb in the same form**. This makes lists easier to scan, more professional, and prevents your reader from stumbling over inconsistent phrasing.

### What's an Embedded List?

An **embedded list** is a list of items included **inside a sentence**, separated by commas (and usually with “and” before the last item).

**Example:**
"The system supports JSON, XML, and CSV formats."

Embedded lists are best when:

- The items are short
- There are only a few items
- You want to keep the sentence flowing

Use **bulleted or numbered lists** instead when:

- Items are long or complex
- Each item needs explanation
- You want the reader to scan them quickly

Think of it this way: embedded lists are like a **mini list inside a sentence**, while bulleted/numbered lists are like **full, standalone lists** for clarity.

## The "That" vs. "Which" Mystery Solved

This one trips up even experienced writers.

**That** introduces essential information (restrictive clause):
> "Install the packages that are listed in requirements.txt."

The phrase "that are listed in requirements.txt" is essential, we're only talking about those specific packages.

**Which** introduces bonus information (non-restrictive clause) and uses commas:
> "The authentication system, which uses OAuth 2.0, requires HTTPS."

The phrase "which uses OAuth 2.0" is extra context. The sentence works without it.

Pro tip: If you can remove the clause and the sentence still makes sense, use "which" with commas. If removing it breaks the meaning, use "that" without commas.

## Paragraphs: The Forgotten Foundation

Good paragraphs are like good functions: they do one thing well. (_Just a little programming humour so you do not get bored mid-blog!_)

### One Paragraph = One Topic

Each paragraph should focus on a single idea. When you switch topics, start a new paragraph. This keeps your documentation organized and scannable.

### The Sweet Spot

Too short (one sentence): feels choppy and disconnected.
Too long (15+ sentences): becomes a wall of text nobody reads.
Just right (3-6 sentences): provides context, details, and breathing room.

### Answers the Reader's Questions

A strong paragraph answers three questions:

- **What:** What is this thing?
- **Why:** Why does it matter?
- **How:** How does it work or how do I use it?

Example:

> **What:** You should only hit snooze a limited number of times, **Why:** because infinite snoozing turns a calm morning into a full-blown life crisis, **How:** after the fifth snooze, you wake up late, skip breakfast, and spend the rest of the day blaming that one “just five more minutes.”

## Know Your Audience (Or Watch Your Documentation Fail)

Here's a truth bomb: documentation written for everyone works for no one.

Good documentation explicitly states its intended audience at the beginning. For example:

> **Audience:** This guide is for backend developers familiar with Node.js and Express who want to implement authentication in their APIs.

When you know your audience, you can:

- Use the right level of technical detail
- Skip explaining things they already know
- Focus on what they actually need

Writing for senior developers? Skip the "what is a REST API" intro. Writing for beginners? Define your terms and provide context.

## Tables: When to Use Them

Tables organize information that has multiple attributes. Use them when you're comparing things or presenting structured data:

| HTTP Method | Action | Example |
|-------------|--------|---------|
| GET | Retrieve data | Fetch user profile |
| POST | Create data | Create new user |
| PUT | Update data | Update user email |
| DELETE | Remove data | Delete user account |

Tables work great for reference material but terrible for narrative explanations!

## Why This All Matters

Technical writing isn't just about following rules, it's about respecting your readers' time and brain power. Every ambiguous pronoun, every weak verb, every wall-of-text paragraph makes your documentation harder to use. And hard-to-use documentation means frustrated users, wasted time, and angry developers.

The difference between good documentation and great documentation is often just attention to these fundamentals. Clear pronouns. Strong verbs. Active voice. Appropriate lists. Focused paragraphs.

Master these basics, and you'll write documentation that people actually want to read. And in a world drowning in terrible docs, that's a superpower worth having.

---

## Final Thoughts

Taking [Google's Technical Writing Course](https://developers.google.com/tech-writing) forced me to confront uncomfortable truths about my writing. I'd been using pronouns carelessly, mixing up list types, and drowning sentences in passive voice.

But here's the good news: technical writing is a skill, not a talent. You can learn it, practice it, and get dramatically better at it. Start with one improvement, maybe eliminating "there is" constructions or using active voice, and build from there.

Your future readers (and your career) will thank you.

---

_Want to improve your technical writing? Start by reviewing your last piece of documentation through this lens. How many ambiguous pronouns can you find? How many passive voice constructions? The answers might surprise you._
`,vT=`---
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
`,wT=`---
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
`,bT=`---
title: Why Documentation Is More Than Just Writing
date: 2026-01-20
tags: ['Documentation', 'Technical Writing', 'Software Development']
---

# Why Documentation Is More Than Just Writing

## Introduction

Documentation isn’t something you write because you know everything. Documentation is written because clarity matters more than assumptions.

Documentation is not, and should not be an afterthought—something that is written once the “real work” is done. Documentation enables people to work better by allowing us to understand how software is built, used, and maintained. It is not simply about describing features, but about enabling people to interact with complex systems confidently and efficiently.

Well-written documentation creates shared understanding. Poorly written or missing documentation creates confusion, delays, and frustration—for developers, users, and the entire organization.

---

## A Bridge Between Complexity and Clarity

Modern software systems are complex by nature. They involve multiple services, APIs, configurations, and workflows. Documentation acts as a bridge that translates this complexity into something understandable.

When I was learning REST APIs, understanding how different endpoints worked together—requests, responses, headers, authentication, and error handling—often meant switching between code, tools, and scattered notes.

Without documentation, knowledge remains fragmented, spread across codebases, chats, and individual team members’ memories. Documentation consolidates this knowledge into a single, reliable source of truth that anyone can refer to.

---

## Making Development Less Confusing

Developers already juggle multiple tasks—writing logic, fixing bugs, understanding requirements, and meeting deadlines. Poor documentation adds unnecessary mental effort.

Good documentation helps by:

* Explaining how components interact
* Clarifying assumptions and constraints
* Providing examples of correct usage

When developers don’t have to figure things out from scratch, they can focus on building better solutions instead of interpreting unclear systems.

Documentation also supports better decision-making. When developers understand system limitations and best practices upfront, they can choose the right approach instead of relying on trial and error. Over time, this clarity improves overall team efficiency. Developers spend less time asking for clarification and more time writing meaningful code.

---

## A Tool for Clear Thinking

Imagine a scenario where a team is building a feature in which multiple modules must interact, such as a user authentication system with different login methods, permission checks, and session handling. Without documentation, inconsistencies can easily creep in:

* One module may handle errors differently
* Another may assume a different data format
* Teams may repeat the same logic unnecessarily

Documentation does not just explain systems—it improves them.

When processes, APIs, or workflows are written down, gaps and inconsistencies become visible. If something is difficult to explain clearly, it often indicates underlying complexity or poor design.

This makes documentation a valuable feedback mechanism. It encourages teams to:

* Simplify workflows
* Standardize behavior
* Make intentional design decisions

In this way, documentation contributes directly to better software design.

---

## Improving Team Collaboration

As teams grow, more people are involved in building, testing, and supporting a product. With multiple people making decisions and contributing work, relying solely on verbal explanations becomes inefficient, and assumptions can easily differ between team members.

For example:

* Development teams may interpret requirements differently, leading to inconsistencies in how features are implemented.
* QA teams might test workflows under assumptions that don’t match developers’ expectations, causing missed bugs or repeated feedback cycles.
* Support teams may struggle to answer user questions accurately if internal processes and troubleshooting steps aren’t documented clearly.

Without a single source of truth, knowledge becomes fragmented, mistakes are repeated, and productivity slows down.

Documentation ensures that:

* Everyone works with the same understanding
* Decisions are recorded and accessible
* Knowledge is not siloed within individuals or teams

Clear documentation aligns developers, testers, support teams, and stakeholders around shared expectations.

---

## Accelerating Developer Onboarding

Onboarding new developers is one of the most critical phases of any project, and it is highly dependent on documentation quality. When documentation is lacking, new team members spend significant time trying to understand system behavior, tools, and workflows.

They often have to interrupt colleagues with repeated questions or spend hours digging through code and notes, slowing both their own progress and the team’s overall productivity.

For example:

* Backend developers may struggle to understand how services communicate or how data flows through modules.
* Frontend developers may take time to grasp component hierarchy, state management, or styling conventions.
* In cross-functional projects, new hires may waste time figuring out environment setup, build processes, or testing guidelines.

Good documentation provides a clear map of the system, explains best practices, and outlines workflows. With proper guidance, new developers can set up their environment efficiently, follow conventions, and start contributing with confidence.

Strong onboarding documentation reduces ramp-up time, minimizes interruptions, and helps new team members become productive faster.

---

## Empowering Users Through Self-Service

From a user’s perspective, documentation is often the first place they turn when something doesn’t work.

When I was learning a new software tool, I initially struggled to understand how features worked together. Without clear guidance, I spent time experimenting and making mistakes, which was frustrating and inefficient.

Clear documentation—step-by-step instructions, examples, and explanations—helped me understand functionality, configure the tool correctly, and troubleshoot issues independently.

I often watched YouTube tutorials, but those videos were effective only because their creators had already understood the documentation. Without reading the documentation first, videos alone felt incomplete and confusing.

User-focused documentation:

* Explains functionality in plain language
* Provides step-by-step guides and examples
* Helps users troubleshoot independently

By enabling self-service, documentation reduces dependency on support teams and creates a smoother, more satisfying user experience.

---

## Building Trust Through Reliable Documentation

Accurate and up-to-date documentation builds trust. When users consistently find correct, clear, and helpful information, they gain confidence in the product.

Documentation builds trust by:

* Providing clear instructions that reduce mistakes and frustration
* Making workflows easier to understand and follow
* Allowing users to solve problems independently

Outdated or misleading documentation can quickly erode trust, even if the product itself works well. Users may question their understanding or the reliability of the software.

Documentation reflects the team and product by:

* Showing attention to detail and professionalism
* Demonstrating care for user success
* Maintaining credibility and reliability

Documentation quality directly reflects a team’s commitment to usability and long-term success.

---

## Supporting Long-Term Maintenance and Scalability

Software is rarely static. Teams evolve, features change, and systems scale. Without documentation, knowledge fades and maintenance becomes risky.

Documentation ensures that:

* **Critical knowledge is preserved** — design decisions, workflows, and logic are recorded for future reference.
* **System behavior remains understandable** — even as complexity grows through new features and integrations.
* **Future contributors can make informed changes** — reducing the risk of breaking existing functionality.

Without documentation, teams spend time rediscovering information, troubleshooting avoidable issues, or introducing bugs due to unclear understanding.

Proper documentation reduces these risks and ensures systems remain reliable and scalable.

---

## Documentation Is About Communication

Good documentation is not about showing off technical expertise. Its value lies in how effectively it communicates ideas, processes, and systems.

Strong documentation focuses on:

* **Clear language over jargon** — writing so readers of different experience levels can understand.
* **Structure over length** — using headings, lists, and examples for easy navigation.
* **Usability over impressiveness** — helping readers complete tasks and understand systems.

The goal is to make knowledge accessible, actionable, and reliable.

---

## Why Documentation Deserves More Respect

Documentation is not just an afterthought—it drives success. It shapes productivity, collaboration, user experience, and software quality.

Even the most well-engineered systems fail if the knowledge behind them is unclear or inaccessible.

When treated as a first-class priority, documentation becomes a force multiplier. It empowers developers to build confidently, enables users to achieve their goals without frustration, and keeps systems understandable as they grow.

Good documentation doesn’t just support a product—it makes it unstoppable.
`,kT=`---
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
`,Vv=Object.assign({"/src/content/docs/introduction/welcome.md":LS,"/src/content/docs/leetcode/can-place-flowers.md":OS,"/src/content/docs/leetcode/gcd-strings.md":_S,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":FS,"/src/content/docs/leetcode/kids-with-candies.md":zS,"/src/content/docs/leetcode/merge-string-alternatively.md":BS,"/src/content/docs/leetcode/product-of-array-except-self.md":VS,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":US,"/src/content/docs/leetcode/reverse-words-in-string.md":HS,"/src/content/docs/leetcode/string-compression.md":$S,"/src/content/docs/rest-api/api-doc-strategy.md":WS,"/src/content/docs/rest-api/authentication-and-authorization.md":qS,"/src/content/docs/rest-api/error-handling.md":GS,"/src/content/docs/rest-api/http-basics.md":KS,"/src/content/docs/rest-api/http-status-codes.md":YS,"/src/content/docs/rest-api/optimization.md":QS,"/src/content/docs/rest-api/pagination.md":JS,"/src/content/docs/rest-api/rate-limiting.md":XS,"/src/content/docs/rest-api/real-patterns.md":ZS,"/src/content/docs/rest-api/request-response-format.md":eT,"/src/content/docs/rest-api/resource-design.md":tT,"/src/content/docs/rest-api/rest-api-fundamentals.md":nT,"/src/content/docs/rest-api/security.md":rT,"/src/content/docs/rest-api/testing-reat-api.md":iT,"/src/content/docs/rest-api/validation.md":sT,"/src/content/docs/rest-api/versioning.md":oT,"/src/content/docs/tutorials/connect-mongodb.md":aT,"/src/content/docs/tutorials/create-basic-rest-api.md":lT,"/src/content/docs/tutorials/create-db-table.md":uT,"/src/content/docs/tutorials/handle-errors-in-java.md":cT,"/src/content/docs/tutorials/install-git.md":dT,"/src/content/docs/tutorials/set-up-git.md":fT,"/src/content/docs/tutorials/test-api.md":hT}),Uv=Object.assign({"/src/content/blogs/design-before-implementation.md":pT,"/src/content/blogs/documentation-as-code.md":mT,"/src/content/blogs/error-handling.md":gT,"/src/content/blogs/google-technical-writer-course.md":yT,"/src/content/blogs/impact-of-naming.md":vT,"/src/content/blogs/readme-files.md":wT,"/src/content/blogs/scalability.md":xT,"/src/content/blogs/why-documentation-is-more-than-just-writing.md":bT,"/src/content/blogs/writing-effective-api-documentation.md":kT});function z_(e){const t=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,n=e.match(t);if(!n)return{frontmatter:{},body:e};const r=n[1],i=n[2],s={};return r.split(`
`).forEach(o=>{const[a,...l]=o.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const c=d.replace(/'/g,'"');s[a.trim()]=JSON.parse(c)}else s[a.trim()]=d}}),{frontmatter:s,body:i}}function ST(e){const t=e.split(`
`);for(const n of t){if(n.startsWith("# "))return n.substring(2).trim();const r=n.match(/^\d+\.\s+(.+)$/);if(r)return r[1].trim()}return"Untitled"}function B_(){const e={},t={introduction:"Home","rest-api":"BookOpen",tutorials:"Code",reference:"FileText"},n=["rest-api-fundamentals","http-basics","request-response-format","resource-design","http-status-codes","authentication-and-authorization","validation","error-handling","pagination","rate-limiting","security","versioning","optimization","testing-rest-api","real-patterns","api-doc-strategy"],r=["merge-string-alternatively","gcd-strings","kids-with-candies","can-place-flowers","reverse-vowels-of-strings","reverse-words-in-string","product-of-array-except-self","increasing-triplet-subsequence","string-compression"];return Object.keys(Vv).forEach(i=>{const s=i.split("/"),o=s[4],l=s[5].replace(".md",""),u=Vv[i],d=ST(u);if(!e[o]){const c=o.split("-").map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ");e[o]={slug:o,title:c,icon:t[o]||"FileText",items:[]}}d!=="Untitled"&&e[o].items.push({slug:l,title:d})}),Object.values(e).forEach(i=>{i.slug==="rest-api"?i.items.sort((s,o)=>{const a=n.indexOf(s.slug),l=n.indexOf(o.slug);return a!==-1&&l!==-1?a-l:a!==-1?-1:l!==-1?1:s.slug.localeCompare(o.slug)}):i.slug==="leetcode"?i.items.sort((s,o)=>{const a=r.indexOf(s.slug),l=r.indexOf(o.slug);return a!==-1&&l!==-1?a-l:a!==-1?-1:l!==-1?1:s.slug.localeCompare(o.slug)}):i.items.sort((s,o)=>s.slug.localeCompare(o.slug))}),{categories:Object.values(e)}}function V_(){const e=[];return Object.keys(Uv).forEach(t=>{const r=t.split("/").pop().replace(".md",""),i=Uv[t],{frontmatter:s,body:o}=z_(i),a=s.title||ST(o);let l="";const u=o.split(`

`).filter(d=>d.trim());for(const d of u){const c=d.trim();if(!c.startsWith("#")){l=c.replace(/^[#\s]*/,"").trim();break}}e.push({slug:r,title:a,description:l,date:s.date||new Date().toISOString().split("T")[0],tags:s.tags||[]})}),e.sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime()),e}const Ci=B_(),am=V_();function TT(e){for(const t of Ci.categories){const n=t.items.find(r=>r.slug===e);if(n)return n}}const U_=["welcome","rest-api-fundamentals","rest-api-basics","introduction","getting-started"];function Hv(){for(const e of U_)if(TT(e))return e;if(Ci.categories.length>0&&Ci.categories[0].items.length>0)return Ci.categories[0].items[0].slug}function H_(e){return am.find(t=>t.slug===e)}function $_(){const e=new Set;return am.forEach(t=>t.tags.forEach(n=>e.add(n))),Array.from(e).sort()}const W_={FileText:ya,BookOpen:cp,Rocket:v2,Code:dp,Settings:w2,Home:H1};function q_({isOpen:e,onClose:t}){const n=sr(),[r,i]=b.useState(Ci.categories.map(a=>a.slug)),s=a=>{i(l=>l.includes(a)?l.filter(u=>u!==a):[...l,a])},o=w.jsxs("div",{className:"h-full overflow-y-auto py-6 px-4",children:[w.jsx("div",{className:"lg:hidden flex justify-end mb-4",children:w.jsx(Ne,{variant:"ghost",size:"icon",onClick:t,children:w.jsx(hp,{className:"h-5 w-5"})})}),w.jsx("nav",{className:"space-y-6",children:Ci.categories.map(a=>{const l=W_[a.icon]||ya,u=r.includes(a.slug);return w.jsxs("div",{children:[w.jsxs("button",{onClick:()=>s(a.slug),className:"w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors",children:[w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx(l,{className:"h-4 w-4"}),a.title]}),w.jsx(ae.span,{animate:{rotate:u?180:0},transition:{duration:.2},children:w.jsx(u2,{className:"h-4 w-4"})})]}),w.jsx(Cv,{initial:!1,children:u&&w.jsx(ae.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden ml-4 mt-1 space-y-0.5 border-l border-border",children:a.items.map(d=>{const c=n.pathname===`/docs/${d.slug}`;return w.jsx("li",{children:w.jsxs(We,{to:`/docs/${d.slug}`,onClick:t,className:Ft("block px-4 py-1.5 text-sm transition-colors relative",c?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:[c&&w.jsx(ae.div,{layoutId:"sidebar-indicator",className:"absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"}),d.title]})},d.slug)})})})]},a.slug)})})]});return w.jsxs(w.Fragment,{children:[w.jsx("aside",{className:"hidden lg:block w-sidebar flex-shrink-0 border-r border-border bg-sidebar sticky top-nav h-[calc(100vh-var(--nav-height))] overflow-hidden",children:o}),w.jsx(Cv,{children:e&&w.jsxs(w.Fragment,{children:[w.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40",onClick:t}),w.jsx(ae.aside,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25,stiffness:200},className:"lg:hidden fixed left-0 top-nav bottom-0 w-sidebar bg-sidebar border-r border-border z-50",children:o})]})})]})}function G_({headings:e}){const[t,n]=b.useState("");return b.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&n(s.target.id)})},{rootMargin:"-80px 0% -80% 0%"});return e.forEach(({id:i})=>{const s=document.getElementById(i);s&&r.observe(s)}),()=>r.disconnect()},[e]),e.length===0?null:w.jsxs("div",{className:"sticky top-24",children:[w.jsx("h4",{className:"text-sm font-semibold mb-4",children:"On this page"}),w.jsx("nav",{className:"space-y-1",children:e.map(r=>w.jsx("a",{href:`#${r.id}`,className:Ft("block text-sm py-1 transition-colors border-l-2 pl-3",r.level===3&&"ml-3",t===r.id?"border-primary text-primary font-medium":"border-transparent text-muted-foreground hover:text-foreground hover:border-border"),children:r.text},r.id))})]})}function K_({children:e,headings:t=[]}){const[n,r]=b.useState(!1);return w.jsxs("div",{className:"flex min-h-[calc(100vh-var(--nav-height))]",children:[w.jsx(q_,{isOpen:n,onClose:()=>r(!1)}),w.jsxs("div",{className:"flex-1 flex",children:[w.jsxs("main",{className:"flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[w.jsx("div",{className:"lg:hidden mb-6",children:w.jsxs(Ne,{variant:"outline",size:"sm",onClick:()=>r(!0),className:"gap-2",children:[w.jsx($1,{className:"h-4 w-4"}),"Menu"]})}),w.jsx("div",{className:"max-w-3xl mx-auto overflow-x-auto",children:e})]}),t.length>0&&w.jsx("aside",{className:"hidden xl:block w-64 flex-shrink-0 py-8 pr-4",children:w.jsx(G_,{headings:t})})]})]})}function Y_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Q_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,J_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,X_={};function $v(e,t){return(X_.jsx?J_:Q_).test(e)}const Z_=/[ \t\n\f\r]/g;function e4(e){return typeof e=="object"?e.type==="text"?Wv(e.value):!1:Wv(e)}function Wv(e){return e.replace(Z_,"")===""}class Ea{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ea.prototype.normal={};Ea.prototype.property={};Ea.prototype.space=void 0;function ET(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ea(n,r,t)}function Zf(e){return e.toLowerCase()}class Ct{constructor(t,n){this.attribute=n,this.property=t}}Ct.prototype.attribute="";Ct.prototype.booleanish=!1;Ct.prototype.boolean=!1;Ct.prototype.commaOrSpaceSeparated=!1;Ct.prototype.commaSeparated=!1;Ct.prototype.defined=!1;Ct.prototype.mustUseProperty=!1;Ct.prototype.number=!1;Ct.prototype.overloadedBoolean=!1;Ct.prototype.property="";Ct.prototype.spaceSeparated=!1;Ct.prototype.space=void 0;let t4=0;const ne=Oi(),_e=Oi(),eh=Oi(),z=Oi(),ve=Oi(),ps=Oi(),Rt=Oi();function Oi(){return 2**++t4}const th=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:_e,commaOrSpaceSeparated:Rt,commaSeparated:ps,number:z,overloadedBoolean:eh,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),id=Object.keys(th);class lm extends Ct{constructor(t,n,r,i){let s=-1;if(super(t,n),qv(this,"space",i),typeof r=="number")for(;++s<id.length;){const o=id[s];qv(this,id[s],(r&th[o])===th[o])}}}lm.prototype.defined=!0;function qv(e,t,n){n&&(e[t]=n)}function qs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new lm(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Zf(r)]=r,n[Zf(s.attribute)]=r}return new Ea(t,n,e.space)}const CT=qs({properties:{ariaActiveDescendant:null,ariaAtomic:_e,ariaAutoComplete:null,ariaBusy:_e,ariaChecked:_e,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:_e,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:_e,ariaFlowTo:ve,ariaGrabbed:_e,ariaHasPopup:null,ariaHidden:_e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:z,ariaLive:null,ariaModal:_e,ariaMultiLine:_e,ariaMultiSelectable:_e,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:_e,ariaReadOnly:_e,ariaRelevant:null,ariaRequired:_e,ariaRoleDescription:ve,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:_e,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function PT(e,t){return t in e?e[t]:t}function AT(e,t){return PT(e,t.toLowerCase())}const n4=qs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ps,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:ve,autoFocus:ne,autoPlay:ne,blocking:ve,capture:null,charSet:null,checked:ne,cite:null,className:ve,cols:z,colSpan:null,content:null,contentEditable:_e,controls:ne,controlsList:ve,coords:z|ps,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:eh,draggable:_e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:ve,height:z,hidden:eh,high:z,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:ve,itemRef:ve,itemScope:ne,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:z,pattern:null,ping:ve,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:ve,required:ne,reversed:ne,rows:z,rowSpan:z,sandbox:ve,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:_e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:_e,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:_e,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ne,disableRemotePlayback:ne,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:AT}),r4=qs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Rt,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ps,g2:ps,glyphName:ps,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Rt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Rt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Rt,rev:Rt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Rt,requiredFeatures:Rt,requiredFonts:Rt,requiredFormats:Rt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Rt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Rt,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Rt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:PT}),IT=qs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),RT=qs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:AT}),jT=qs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),i4={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},s4=/[A-Z]/g,Gv=/-[a-z]/g,o4=/^data[-\w.:]+$/i;function a4(e,t){const n=Zf(t);let r=t,i=Ct;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&o4.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Gv,u4);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Gv.test(s)){let o=s.replace(s4,l4);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=lm}return new i(r,t)}function l4(e){return"-"+e.toLowerCase()}function u4(e){return e.charAt(1).toUpperCase()}const c4=ET([CT,n4,IT,RT,jT],"html"),um=ET([CT,r4,IT,RT,jT],"svg");function d4(e){return e.join(" ").trim()}var cm={},Kv=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,f4=/\n/g,h4=/^\s*/,p4=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,m4=/^:\s*/,g4=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y4=/^[;\s]*/,v4=/^\s+|\s+$/g,w4=`
`,Yv="/",Qv="*",di="",x4="comment",b4="declaration";function k4(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var g=m.match(f4);g&&(n+=g.length);var x=m.lastIndexOf(w4);r=~x?m.length-x:r+m.length}function s(){var m={line:n,column:r};return function(g){return g.position=new o(m),u(),g}}function o(m){this.start=m,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function a(m){var g=new Error(t.source+":"+n+":"+r+": "+m);if(g.reason=m,g.filename=t.source,g.line=n,g.column=r,g.source=e,!t.silent)throw g}function l(m){var g=m.exec(e);if(g){var x=g[0];return i(x),e=e.slice(x.length),g}}function u(){l(h4)}function d(m){var g;for(m=m||[];g=c();)g!==!1&&m.push(g);return m}function c(){var m=s();if(!(Yv!=e.charAt(0)||Qv!=e.charAt(1))){for(var g=2;di!=e.charAt(g)&&(Qv!=e.charAt(g)||Yv!=e.charAt(g+1));)++g;if(g+=2,di===e.charAt(g-1))return a("End of comment missing");var x=e.slice(2,g-2);return r+=2,i(x),e=e.slice(g),r+=2,m({type:x4,comment:x})}}function h(){var m=s(),g=l(p4);if(g){if(c(),!l(m4))return a("property missing ':'");var x=l(g4),p=m({type:b4,property:Jv(g[0].replace(Kv,di)),value:x?Jv(x[0].replace(Kv,di)):di});return l(y4),p}}function f(){var m=[];d(m);for(var g;g=h();)g!==!1&&(m.push(g),d(m));return m}return u(),f()}function Jv(e){return e?e.replace(v4,di):di}var S4=k4,T4=Il&&Il.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cm,"__esModule",{value:!0});cm.default=C4;const E4=T4(S4);function C4(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,E4.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:a}=s;i?t(o,a,s):a&&(n=n||{},n[o]=a)}),n}var Xu={};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.camelCase=void 0;var P4=/^--[a-zA-Z0-9_-]+$/,A4=/-([a-z])/g,I4=/^[^-]+$/,R4=/^-(webkit|moz|ms|o|khtml)-/,j4=/^-(ms)-/,D4=function(e){return!e||I4.test(e)||P4.test(e)},N4=function(e,t){return t.toUpperCase()},Xv=function(e,t){return"".concat(t,"-")},M4=function(e,t){return t===void 0&&(t={}),D4(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(j4,Xv):e=e.replace(R4,Xv),e.replace(A4,N4))};Xu.camelCase=M4;var L4=Il&&Il.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},O4=L4(cm),_4=Xu;function nh(e,t){var n={};return!e||typeof e!="string"||(0,O4.default)(e,function(r,i){r&&i&&(n[(0,_4.camelCase)(r,t)]=i)}),n}nh.default=nh;var F4=nh;const z4=wu(F4),DT=NT("end"),dm=NT("start");function NT(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function B4(e){const t=dm(e),n=DT(e);if(t&&n)return{start:t,end:n}}function Io(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Zv(e.position):"start"in e||"end"in e?Zv(e):"line"in e||"column"in e?rh(e):""}function rh(e){return ew(e&&e.line)+":"+ew(e&&e.column)}function Zv(e){return rh(e&&e.start)+"-"+rh(e&&e.end)}function ew(e){return e&&typeof e=="number"?e:1}class st extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},o=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(o=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Io(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}st.prototype.file="";st.prototype.name="";st.prototype.reason="";st.prototype.message="";st.prototype.stack="";st.prototype.column=void 0;st.prototype.line=void 0;st.prototype.ancestors=void 0;st.prototype.cause=void 0;st.prototype.fatal=void 0;st.prototype.place=void 0;st.prototype.ruleId=void 0;st.prototype.source=void 0;const fm={}.hasOwnProperty,V4=new Map,U4=/[A-Z]/g,H4=new Set(["table","tbody","thead","tfoot","tr"]),$4=new Set(["td","th"]),MT="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function W4(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Z4(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=X4(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?um:c4,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=LT(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function LT(e,t,n){if(t.type==="element")return q4(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return G4(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Y4(e,t,n);if(t.type==="mdxjsEsm")return K4(e,t);if(t.type==="root")return Q4(e,t,n);if(t.type==="text")return J4(e,t)}function q4(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=um,e.schema=i),e.ancestors.push(t);const s=_T(e,t.tagName,!1),o=eF(e,t);let a=pm(e,t);return H4.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!e4(l):!0})),OT(e,o,s,t),hm(o,a),e.ancestors.pop(),e.schema=r,e.create(t,s,o,n)}function G4(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}oa(e,t.position)}function K4(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);oa(e,t.position)}function Y4(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=um,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:_T(e,t.name,!0),o=tF(e,t),a=pm(e,t);return OT(e,o,s,t),hm(o,a),e.ancestors.pop(),e.schema=r,e.create(t,s,o,n)}function Q4(e,t,n){const r={};return hm(r,pm(e,t)),e.create(t,e.Fragment,r,n)}function J4(e,t){return t.value}function OT(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hm(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function X4(e,t,n){return r;function r(i,s,o,a){const u=Array.isArray(o.children)?n:t;return a?u(s,o,a):u(s,o)}}function Z4(e,t){return n;function n(r,i,s,o){const a=Array.isArray(s.children),l=dm(r);return t(i,s,o,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function eF(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&fm.call(t.properties,i)){const s=nF(e,i,t.properties[i]);if(s){const[o,a]=s;e.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&$4.has(t.tagName)?r=a:n[o]=a}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function tF(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else oa(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,s=e.evaluater.evaluateExpression(a.expression)}else oa(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function pm(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:V4;for(;++r<t.children.length;){const s=t.children[r];let o;if(e.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=i.get(l)||0;o=l+"-"+u,i.set(l,u+1)}}const a=LT(e,s,o);a!==void 0&&n.push(a)}return n}function nF(e,t,n){const r=a4(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Y_(n):d4(n)),r.property==="style"){let i=typeof n=="object"?n:rF(e,String(n));return e.stylePropertyNameCase==="css"&&(i=iF(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?i4[r.property]||r.property:r.attribute,n]}}function rF(e,t){try{return z4(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new st("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=MT+"#cannot-parse-style-attribute",i}}function _T(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,o;for(;++s<i.length;){const a=$v(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=o}else r=$v(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return fm.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);oa(e)}function oa(e,t){const n=new st("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=MT+"#cannot-handle-mdx-estrees-without-createevaluater",n}function iF(e){const t={};let n;for(n in e)fm.call(e,n)&&(t[sF(n)]=e[n]);return t}function sF(e){let t=e.replace(U4,oF);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function oF(e){return"-"+e.toLowerCase()}const sd={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},aF={};function mm(e,t){const n=aF,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return FT(e,r,i)}function FT(e,t,n){if(lF(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return tw(e.children,t,n)}return Array.isArray(e)?tw(e,t,n):""}function tw(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=FT(e[i],t,n);return r.join("")}function lF(e){return!!(e&&typeof e=="object")}const nw=document.createElement("i");function gm(e){const t="&"+e+";";nw.innerHTML=t;const n=nw.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ot(e,t,n,r){const i=e.length;let s=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);s<r.length;)o=r.slice(s,s+1e4),o.unshift(t,0),e.splice(...o),s+=1e4,t+=1e4}function qt(e,t){return e.length>0?(Ot(e,e.length,0,t),e):t}const rw={}.hasOwnProperty;function zT(e){const t={};let n=-1;for(;++n<e.length;)uF(t,e[n]);return t}function uF(e,t){let n;for(n in t){const i=(rw.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let o;if(s)for(o in s){rw.call(i,o)||(i[o]=[]);const a=s[o];cF(i[o],Array.isArray(a)?a:a?[a]:[])}}}function cF(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ot(e,0,0,r)}function BT(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function gn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=ti(/[A-Za-z]/),rt=ti(/[\dA-Za-z]/),dF=ti(/[#-'*+\--9=?A-Z^-~]/);function mu(e){return e!==null&&(e<32||e===127)}const ih=ti(/\d/),fF=ti(/[\dA-Fa-f]/),hF=ti(/[!-/:-@[-`{-~]/);function Q(e){return e!==null&&e<-2}function ye(e){return e!==null&&(e<0||e===32)}function ie(e){return e===-2||e===-1||e===32}const Zu=ti(new RegExp("\\p{P}|\\p{S}","u")),Ni=ti(/\s/);function ti(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Gs(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let o="";if(s===37&&rt(e.charCodeAt(n+1))&&rt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const a=e.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(o=String.fromCharCode(s,a),i=1):o="�"}else o=String.fromCharCode(s);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ue(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(l){return ie(l)?(e.enter(n),a(l)):t(l)}function a(l){return ie(l)&&s++<i?(e.consume(l),a):(e.exit(n),t(l))}}const pF={tokenize:mF};function mF(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ue(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),s(a)}function s(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,o(a)}function o(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return Q(a)?(e.consume(a),e.exit("chunkText"),s):(e.consume(a),o)}}const gF={tokenize:yF},iw={tokenize:vF};function yF(e){const t=this,n=[];let r=0,i,s,o;return a;function a(v){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,l,u)(v)}return u(v)}function l(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&y();const S=t.events.length;let E=S,T;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){T=t.events[E][1].end;break}p(r);let A=S;for(;A<t.events.length;)t.events[A][1].end={...T},A++;return Ot(t.events,E+1,0,t.events.slice(S)),t.events.length=A,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(iw,d,c)(v)}function d(v){return i&&y(),p(r),h(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(v)}function h(v){return t.containerState={},e.attempt(iw,f,m)(v)}function f(v){return r++,n.push([t.currentConstruct,t.containerState]),h(v)}function m(v){if(v===null){i&&y(),p(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),g(v)}function g(v){if(v===null){x(e.exit("chunkFlow"),!0),p(0),e.consume(v);return}return Q(v)?(e.consume(v),x(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),g)}function x(v,S){const E=t.sliceStream(v);if(S&&E.push(null),v.previous=s,s&&(s.next=v),s=v,i.defineSkip(v.start),i.write(E),t.parser.lazy[v.start.line]){let T=i.events.length;for(;T--;)if(i.events[T][1].start.offset<o&&(!i.events[T][1].end||i.events[T][1].end.offset>o))return;const A=t.events.length;let I=A,D,P;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){if(D){P=t.events[I][1].end;break}D=!0}for(p(r),T=A;T<t.events.length;)t.events[T][1].end={...P},T++;Ot(t.events,I+1,0,t.events.slice(A)),t.events.length=T}}function p(v){let S=n.length;for(;S-- >v;){const E=n[S];t.containerState=E[1],E[0].exit.call(t,e)}n.length=v}function y(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function vF(e,t,n){return ue(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ms(e){if(e===null||ye(e)||Ni(e))return 1;if(Zu(e))return 2}function ec(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const sh={name:"attention",resolveAll:wF,tokenize:xF};function wF(e,t){let n=-1,r,i,s,o,a,l,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},h={...e[n][1].start};sw(c,-l),sw(h,l),o={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},s={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},e[r][1].end={...o.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=qt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=qt(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",s,t]]),u=qt(u,ec(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=qt(u,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=qt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Ot(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function xF(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ms(r);let s;return o;function o(l){return s=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===s)return e.consume(l),a;const u=e.exit("attentionSequence"),d=Ms(l),c=!d||d===2&&i||n.includes(l),h=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?c:c&&(i||!h)),u._close=!!(s===42?h:h&&(d||!c)),t(l)}}function sw(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const bF={name:"autolink",tokenize:kF};function kF(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(f){return dt(f)?(e.consume(f),o):f===64?n(f):u(f)}function o(f){return f===43||f===45||f===46||rt(f)?(r=1,a(f)):u(f)}function a(f){return f===58?(e.consume(f),r=0,l):(f===43||f===45||f===46||rt(f))&&r++<32?(e.consume(f),a):(r=0,u(f))}function l(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||mu(f)?n(f):(e.consume(f),l)}function u(f){return f===64?(e.consume(f),d):dF(f)?(e.consume(f),u):n(f)}function d(f){return rt(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):h(f)}function h(f){if((f===45||rt(f))&&r++<63){const m=f===45?h:c;return e.consume(f),m}return n(f)}}const Ca={partial:!0,tokenize:SF};function SF(e,t,n){return r;function r(s){return ie(s)?ue(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Q(s)?t(s):n(s)}}const VT={continuation:{tokenize:EF},exit:CF,name:"blockQuote",tokenize:TF};function TF(e,t,n){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),s}return n(o)}function s(o){return ie(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function EF(e,t,n){const r=this;return i;function i(o){return ie(o)?ue(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return e.attempt(VT,t,n)(o)}}function CF(e){e.exit("blockQuote")}const UT={name:"characterEscape",tokenize:PF};function PF(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return hF(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const HT={name:"characterReference",tokenize:AF};function AF(e,t,n){const r=this;let i=0,s,o;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,o=rt,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,o=fF,d):(e.enter("characterReferenceValue"),s=7,o=ih,d(c))}function d(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return o===rt&&!gm(r.sliceSerialize(h))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(c)&&i++<s?(e.consume(c),d):n(c)}}const ow={partial:!0,tokenize:RF},aw={concrete:!0,name:"codeFenced",tokenize:IF};function IF(e,t,n){const r=this,i={partial:!0,tokenize:E};let s=0,o=0,a;return l;function l(T){return u(T)}function u(T){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,a=T,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(T)}function d(T){return T===a?(o++,e.consume(T),d):o<3?n(T):(e.exit("codeFencedFenceSequence"),ie(T)?ue(e,c,"whitespace")(T):c(T))}function c(T){return T===null||Q(T)?(e.exit("codeFencedFence"),r.interrupt?t(T):e.check(ow,g,S)(T)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(T))}function h(T){return T===null||Q(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(T)):ie(T)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ue(e,f,"whitespace")(T)):T===96&&T===a?n(T):(e.consume(T),h)}function f(T){return T===null||Q(T)?c(T):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(T))}function m(T){return T===null||Q(T)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(T)):T===96&&T===a?n(T):(e.consume(T),m)}function g(T){return e.attempt(i,S,x)(T)}function x(T){return e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),p}function p(T){return s>0&&ie(T)?ue(e,y,"linePrefix",s+1)(T):y(T)}function y(T){return T===null||Q(T)?e.check(ow,g,S)(T):(e.enter("codeFlowValue"),v(T))}function v(T){return T===null||Q(T)?(e.exit("codeFlowValue"),y(T)):(e.consume(T),v)}function S(T){return e.exit("codeFenced"),t(T)}function E(T,A,I){let D=0;return P;function P(H){return T.enter("lineEnding"),T.consume(H),T.exit("lineEnding"),O}function O(H){return T.enter("codeFencedFence"),ie(H)?ue(T,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):N(H)}function N(H){return H===a?(T.enter("codeFencedFenceSequence"),$(H)):I(H)}function $(H){return H===a?(D++,T.consume(H),$):D>=o?(T.exit("codeFencedFenceSequence"),ie(H)?ue(T,_,"whitespace")(H):_(H)):I(H)}function _(H){return H===null||Q(H)?(T.exit("codeFencedFence"),A(H)):I(H)}}}function RF(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const od={name:"codeIndented",tokenize:DF},jF={partial:!0,tokenize:NF};function DF(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),ue(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?l(u):Q(u)?e.attempt(jF,o,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||Q(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function NF(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):Q(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ue(e,s,"linePrefix",5)(o)}function s(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):Q(o)?i(o):n(o)}}const MF={name:"codeText",previous:OF,resolve:LF,tokenize:_F};function LF(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function OF(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function _F(e,t,n){let r=0,i,s;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(s=e.enter("codeTextSequence"),i=0,d(c)):Q(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||Q(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(s.type="codeTextData",u(c))}}class FF{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&oo(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),oo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),oo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);oo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);oo(this.left,n.reverse())}}}function oo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function $T(e){const t={};let n=-1,r,i,s,o,a,l,u;const d=new FF(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,zF(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Ot(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function zF(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,l=[],u={};let d,c,h=-1,f=n,m=0,g=0;const x=[g];for(;f;){for(;e.get(++i)[1]!==f;);s.push(i),f._tokenizer||(d=r.sliceStream(f),f.next||d.push(null),c&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next}for(f=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(g=h+1,x.push(g),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):x.pop(),h=x.length;h--;){const p=a.slice(x[h],x[h+1]),y=s.pop();l.push([y,y+p.length-1]),e.splice(y,2,p)}for(l.reverse(),h=-1;++h<l.length;)u[m+l[h][0]]=m+l[h][1],m+=l[h][1]-l[h][0]-1;return u}const BF={resolve:UF,tokenize:HF},VF={partial:!0,tokenize:$F};function UF(e){return $T(e),e}function HF(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):Q(a)?e.check(VF,o,s)(a):(e.consume(a),i)}function s(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function o(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function $F(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ue(e,s,"linePrefix")}function s(o){if(o===null||Q(o))return n(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function WT(e,t,n,r,i,s,o,a,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return c;function c(p){return p===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(p),e.exit(s),h):p===null||p===32||p===41||mu(p)?n(p):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),g(p))}function h(p){return p===62?(e.enter(s),e.consume(p),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===62?(e.exit("chunkString"),e.exit(a),h(p)):p===null||p===60||Q(p)?n(p):(e.consume(p),p===92?m:f)}function m(p){return p===60||p===62||p===92?(e.consume(p),f):f(p)}function g(p){return!d&&(p===null||p===41||ye(p))?(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),t(p)):d<u&&p===40?(e.consume(p),d++,g):p===41?(e.consume(p),d--,g):p===null||p===32||p===40||mu(p)?n(p):(e.consume(p),p===92?x:g)}function x(p){return p===40||p===41||p===92?(e.consume(p),g):g(p)}}function qT(e,t,n,r,i,s){const o=this;let a=0,l;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(s),d}function d(f){return a>999||f===null||f===91||f===93&&!l||f===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(e.exit(s),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):Q(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||Q(f)||a++>999?(e.exit("chunkString"),d(f)):(e.consume(f),l||(l=!ie(f)),f===92?h:c)}function h(f){return f===91||f===92||f===93?(e.consume(f),a++,c):c(f)}}function GT(e,t,n,r,i,s){let o;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,l):n(h)}function l(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(s),u(h))}function u(h){return h===o?(e.exit(s),l(o)):h===null?n(h):Q(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ue(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===o||h===null||Q(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?c:d)}function c(h){return h===o||h===92?(e.consume(h),d):d(h)}}function Ro(e,t){let n;return r;function r(i){return Q(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ie(i)?ue(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const WF={name:"definition",tokenize:GF},qF={partial:!0,tokenize:KF};function GF(e,t,n){const r=this;let i;return s;function s(f){return e.enter("definition"),o(f)}function o(f){return qT.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=gn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),l):n(f)}function l(f){return ye(f)?Ro(e,u)(f):u(f)}function u(f){return WT(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(qF,c,c)(f)}function c(f){return ie(f)?ue(e,h,"whitespace")(f):h(f)}function h(f){return f===null||Q(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function KF(e,t,n){return r;function r(a){return ye(a)?Ro(e,i)(a):n(a)}function i(a){return GT(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return ie(a)?ue(e,o,"whitespace")(a):o(a)}function o(a){return a===null||Q(a)?t(a):n(a)}}const YF={name:"hardBreakEscape",tokenize:QF};function QF(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Q(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const JF={name:"headingAtx",resolve:XF,tokenize:ZF};function XF(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ot(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function ZF(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(e.consume(d),o):d===null||ye(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Q(d)?(e.exit("atxHeading"),t(d)):ie(d)?ue(e,a,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function u(d){return d===null||d===35||ye(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),u)}}const e3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],lw=["pre","script","style","textarea"],t3={concrete:!0,name:"htmlFlow",resolveTo:i3,tokenize:s3},n3={partial:!0,tokenize:a3},r3={partial:!0,tokenize:o3};function i3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function s3(e,t,n){const r=this;let i,s,o,a,l;return u;function u(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),c}function c(C){return C===33?(e.consume(C),h):C===47?(e.consume(C),s=!0,g):C===63?(e.consume(C),i=3,r.interrupt?t:k):dt(C)?(e.consume(C),o=String.fromCharCode(C),x):n(C)}function h(C){return C===45?(e.consume(C),i=2,f):C===91?(e.consume(C),i=5,a=0,m):dt(C)?(e.consume(C),i=4,r.interrupt?t:k):n(C)}function f(C){return C===45?(e.consume(C),r.interrupt?t:k):n(C)}function m(C){const J="CDATA[";return C===J.charCodeAt(a++)?(e.consume(C),a===J.length?r.interrupt?t:N:m):n(C)}function g(C){return dt(C)?(e.consume(C),o=String.fromCharCode(C),x):n(C)}function x(C){if(C===null||C===47||C===62||ye(C)){const J=C===47,me=o.toLowerCase();return!J&&!s&&lw.includes(me)?(i=1,r.interrupt?t(C):N(C)):e3.includes(o.toLowerCase())?(i=6,J?(e.consume(C),p):r.interrupt?t(C):N(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):s?y(C):v(C))}return C===45||rt(C)?(e.consume(C),o+=String.fromCharCode(C),x):n(C)}function p(C){return C===62?(e.consume(C),r.interrupt?t:N):n(C)}function y(C){return ie(C)?(e.consume(C),y):P(C)}function v(C){return C===47?(e.consume(C),P):C===58||C===95||dt(C)?(e.consume(C),S):ie(C)?(e.consume(C),v):P(C)}function S(C){return C===45||C===46||C===58||C===95||rt(C)?(e.consume(C),S):E(C)}function E(C){return C===61?(e.consume(C),T):ie(C)?(e.consume(C),E):v(C)}function T(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),l=C,A):ie(C)?(e.consume(C),T):I(C)}function A(C){return C===l?(e.consume(C),l=null,D):C===null||Q(C)?n(C):(e.consume(C),A)}function I(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||ye(C)?E(C):(e.consume(C),I)}function D(C){return C===47||C===62||ie(C)?v(C):n(C)}function P(C){return C===62?(e.consume(C),O):n(C)}function O(C){return C===null||Q(C)?N(C):ie(C)?(e.consume(C),O):n(C)}function N(C){return C===45&&i===2?(e.consume(C),G):C===60&&i===1?(e.consume(C),U):C===62&&i===4?(e.consume(C),Y):C===63&&i===3?(e.consume(C),k):C===93&&i===5?(e.consume(C),M):Q(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(n3,K,$)(C)):C===null||Q(C)?(e.exit("htmlFlowData"),$(C)):(e.consume(C),N)}function $(C){return e.check(r3,_,K)(C)}function _(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),H}function H(C){return C===null||Q(C)?$(C):(e.enter("htmlFlowData"),N(C))}function G(C){return C===45?(e.consume(C),k):N(C)}function U(C){return C===47?(e.consume(C),o="",R):N(C)}function R(C){if(C===62){const J=o.toLowerCase();return lw.includes(J)?(e.consume(C),Y):N(C)}return dt(C)&&o.length<8?(e.consume(C),o+=String.fromCharCode(C),R):N(C)}function M(C){return C===93?(e.consume(C),k):N(C)}function k(C){return C===62?(e.consume(C),Y):C===45&&i===2?(e.consume(C),k):N(C)}function Y(C){return C===null||Q(C)?(e.exit("htmlFlowData"),K(C)):(e.consume(C),Y)}function K(C){return e.exit("htmlFlow"),t(C)}}function o3(e,t,n){const r=this;return i;function i(o){return Q(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s):n(o)}function s(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function a3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ca,t,n)}}const l3={name:"htmlText",tokenize:u3};function u3(e,t,n){const r=this;let i,s,o;return a;function a(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),l}function l(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),E):k===63?(e.consume(k),v):dt(k)?(e.consume(k),I):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),s=0,m):dt(k)?(e.consume(k),y):n(k)}function d(k){return k===45?(e.consume(k),f):n(k)}function c(k){return k===null?n(k):k===45?(e.consume(k),h):Q(k)?(o=c,U(k)):(e.consume(k),c)}function h(k){return k===45?(e.consume(k),f):c(k)}function f(k){return k===62?G(k):k===45?h(k):c(k)}function m(k){const Y="CDATA[";return k===Y.charCodeAt(s++)?(e.consume(k),s===Y.length?g:m):n(k)}function g(k){return k===null?n(k):k===93?(e.consume(k),x):Q(k)?(o=g,U(k)):(e.consume(k),g)}function x(k){return k===93?(e.consume(k),p):g(k)}function p(k){return k===62?G(k):k===93?(e.consume(k),p):g(k)}function y(k){return k===null||k===62?G(k):Q(k)?(o=y,U(k)):(e.consume(k),y)}function v(k){return k===null?n(k):k===63?(e.consume(k),S):Q(k)?(o=v,U(k)):(e.consume(k),v)}function S(k){return k===62?G(k):v(k)}function E(k){return dt(k)?(e.consume(k),T):n(k)}function T(k){return k===45||rt(k)?(e.consume(k),T):A(k)}function A(k){return Q(k)?(o=A,U(k)):ie(k)?(e.consume(k),A):G(k)}function I(k){return k===45||rt(k)?(e.consume(k),I):k===47||k===62||ye(k)?D(k):n(k)}function D(k){return k===47?(e.consume(k),G):k===58||k===95||dt(k)?(e.consume(k),P):Q(k)?(o=D,U(k)):ie(k)?(e.consume(k),D):G(k)}function P(k){return k===45||k===46||k===58||k===95||rt(k)?(e.consume(k),P):O(k)}function O(k){return k===61?(e.consume(k),N):Q(k)?(o=O,U(k)):ie(k)?(e.consume(k),O):D(k)}function N(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,$):Q(k)?(o=N,U(k)):ie(k)?(e.consume(k),N):(e.consume(k),_)}function $(k){return k===i?(e.consume(k),i=void 0,H):k===null?n(k):Q(k)?(o=$,U(k)):(e.consume(k),$)}function _(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||ye(k)?D(k):(e.consume(k),_)}function H(k){return k===47||k===62||ye(k)?D(k):n(k)}function G(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function U(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),R}function R(k){return ie(k)?ue(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):M(k)}function M(k){return e.enter("htmlTextData"),o(k)}}const ym={name:"labelEnd",resolveAll:h3,resolveTo:p3,tokenize:m3},c3={tokenize:g3},d3={tokenize:y3},f3={tokenize:v3};function h3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Ot(e,0,e.length,n),e}function p3(e,t){let n=e.length,r=0,i,s,o,a;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const l={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=qt(a,e.slice(s+1,s+r+3)),a=qt(a,[["enter",d,t]]),a=qt(a,ec(t.parser.constructs.insideSpan.null,e.slice(s+r+4,o-3),t)),a=qt(a,[["exit",d,t],e[o-2],e[o-1],["exit",u,t]]),a=qt(a,e.slice(o+1)),a=qt(a,[["exit",l,t]]),Ot(e,s,e.length,a),e}function m3(e,t,n){const r=this;let i=r.events.length,s,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(h){return s?s._inactive?c(h):(o=r.parser.defined.includes(gn(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):n(h)}function l(h){return h===40?e.attempt(c3,d,o?d:c)(h):h===91?e.attempt(d3,d,o?u:c)(h):o?d(h):c(h)}function u(h){return e.attempt(f3,d,c)(h)}function d(h){return t(h)}function c(h){return s._balanced=!0,n(h)}}function g3(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ye(c)?Ro(e,s)(c):s(c)}function s(c){return c===41?d(c):WT(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return ye(c)?Ro(e,l)(c):d(c)}function a(c){return n(c)}function l(c){return c===34||c===39||c===40?GT(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return ye(c)?Ro(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function y3(e,t,n){const r=this;return i;function i(a){return qT.call(r,e,s,o,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(gn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function o(a){return n(a)}}function v3(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const w3={name:"labelStartImage",resolveAll:ym.resolveAll,tokenize:x3};function x3(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),s}function s(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const b3={name:"labelStartLink",resolveAll:ym.resolveAll,tokenize:k3};function k3(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const ad={name:"lineEnding",tokenize:S3};function S3(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ue(e,t,"linePrefix")}}const Cl={name:"thematicBreak",tokenize:T3};function T3(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||Q(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),ie(u)?ue(e,a,"whitespace")(u):a(u))}}const vt={continuation:{tokenize:A3},exit:R3,name:"list",tokenize:P3},E3={partial:!0,tokenize:j3},C3={partial:!0,tokenize:I3};function P3(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(f){const m=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:ih(f)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(Cl,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(f)}return n(f)}function l(f){return ih(f)&&++o<10?(e.consume(f),l):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ca,r.interrupt?n:d,e.attempt(E3,h,c))}function d(f){return r.containerState.initialBlankLine=!0,s++,h(f)}function c(f){return ie(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),h):n(f)}function h(f){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function A3(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ca,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ue(e,t,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!ie(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(C3,t,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ue(e,e.attempt(vt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function I3(e,t,n){const r=this;return ue(e,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(s):n(s)}}function R3(e){e.exit(this.containerState.type)}function j3(e,t,n){const r=this;return ue(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=r.events[r.events.length-1];return!ie(s)&&o&&o[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const uw={name:"setextUnderline",resolveTo:D3,tokenize:N3};function D3(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",o,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function N3(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ie(u)?ue(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Q(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const M3={tokenize:L3};function L3(e){const t=this,n=e.attempt(Ca,r,e.attempt(this.parser.constructs.flowInitial,i,ue(e,e.attempt(this.parser.constructs.flow,i,e.attempt(BF,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const O3={resolveAll:YT()},_3=KT("string"),F3=KT("text");function KT(e){return{resolveAll:YT(e==="text"?z3:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,o,a);return o;function o(d){return u(d)?s(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const c=i[d];let h=-1;if(c)for(;++h<c.length;){const f=c[h];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function YT(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function z3(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,o=-1,a=0,l;for(;s--;){const u=i[s];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)l=!0,a++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:r.start._bufferIndex+o,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const B3={42:vt,43:vt,45:vt,48:vt,49:vt,50:vt,51:vt,52:vt,53:vt,54:vt,55:vt,56:vt,57:vt,62:VT},V3={91:WF},U3={[-2]:od,[-1]:od,32:od},H3={35:JF,42:Cl,45:[uw,Cl],60:t3,61:uw,95:Cl,96:aw,126:aw},$3={38:HT,92:UT},W3={[-5]:ad,[-4]:ad,[-3]:ad,33:w3,38:HT,42:sh,60:[bF,l3],91:b3,92:[YF,UT],93:ym,95:sh,96:MF},q3={null:[sh,O3]},G3={null:[42,95]},K3={null:[]},Y3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:G3,contentInitial:V3,disable:K3,document:B3,flow:H3,flowInitial:U3,insideSpan:q3,string:$3,text:W3},Symbol.toStringTag,{value:"Module"}));function Q3(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let o=[],a=[];const l={attempt:A(E),check:A(T),consume:y,enter:v,exit:S,interrupt:A(T,{interrupt:!0})},u={code:null,containerState:{},defineSkip:g,events:[],now:m,parser:e,previous:null,sliceSerialize:h,sliceStream:f,write:c};let d=t.tokenize.call(u,l);return t.resolveAll&&s.push(t),u;function c(O){return o=qt(o,O),x(),o[o.length-1]!==null?[]:(I(t,0),u.events=ec(s,u.events,u),u.events)}function h(O,N){return X3(f(O),N)}function f(O){return J3(o,O)}function m(){const{_bufferIndex:O,_index:N,line:$,column:_,offset:H}=r;return{_bufferIndex:O,_index:N,line:$,column:_,offset:H}}function g(O){i[O.line]=O.column,P()}function x(){let O;for(;r._index<o.length;){const N=o[r._index];if(typeof N=="string")for(O=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===O&&r._bufferIndex<N.length;)p(N.charCodeAt(r._bufferIndex));else p(N)}}function p(O){d=d(O)}function y(O){Q(O)?(r.line++,r.column=1,r.offset+=O===-3?2:1,P()):O!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=O}function v(O,N){const $=N||{};return $.type=O,$.start=m(),u.events.push(["enter",$,u]),a.push($),$}function S(O){const N=a.pop();return N.end=m(),u.events.push(["exit",N,u]),N}function E(O,N){I(O,N.from)}function T(O,N){N.restore()}function A(O,N){return $;function $(_,H,G){let U,R,M,k;return Array.isArray(_)?K(_):"tokenize"in _?K([_]):Y(_);function Y(le){return oe;function oe(ot){const at=ot!==null&&le[ot],yt=ot!==null&&le.null,Pt=[...Array.isArray(at)?at:at?[at]:[],...Array.isArray(yt)?yt:yt?[yt]:[]];return K(Pt)(ot)}}function K(le){return U=le,R=0,le.length===0?G:C(le[R])}function C(le){return oe;function oe(ot){return k=D(),M=le,le.partial||(u.currentConstruct=le),le.name&&u.parser.constructs.disable.null.includes(le.name)?me():le.tokenize.call(N?Object.assign(Object.create(u),N):u,l,J,me)(ot)}}function J(le){return O(M,k),H}function me(le){return k.restore(),++R<U.length?C(U[R]):G}}}function I(O,N){O.resolveAll&&!s.includes(O)&&s.push(O),O.resolve&&Ot(u.events,N,u.events.length-N,O.resolve(u.events.slice(N),u)),O.resolveTo&&(u.events=O.resolveTo(u.events,u))}function D(){const O=m(),N=u.previous,$=u.currentConstruct,_=u.events.length,H=Array.from(a);return{from:_,restore:G};function G(){r=O,u.previous=N,u.currentConstruct=$,u.events.length=_,a=H,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function J3(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,s)];else{if(o=e.slice(n,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}s>0&&o.push(e[i].slice(0,s))}return o}function X3(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function Z3(e){const r={constructs:zT([Y3,...(e||{}).extensions||[]]),content:i(pF),defined:[],document:i(gF),flow:i(M3),lazy:{},string:i(_3),text:i(F3)};return r;function i(s){return o;function o(a){return Q3(r,s,a)}}}function ez(e){for(;!$T(e););return e}const cw=/[\0\t\n\r]/g;function tz(){let e=1,t="",n=!0,r;return i;function i(s,o,a){const l=[];let u,d,c,h,f;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),c=0,t="",n&&(s.charCodeAt(0)===65279&&c++,n=void 0);c<s.length;){if(cw.lastIndex=c,u=cw.exec(s),h=u&&u.index!==void 0?u.index:s.length,f=s.charCodeAt(h),!u){t=s.slice(c);break}if(f===10&&c===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<h&&(l.push(s.slice(c,h)),e+=h-c),f){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return a&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const nz=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function rz(e){return e.replace(nz,iz)}function iz(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return BT(n.slice(s?2:1),s?16:10)}return gm(n)||e}const QT={}.hasOwnProperty;function sz(e,t,n){return typeof t!="string"&&(n=t,t=void 0),oz(n)(ez(Z3(n).document().write(tz()(e,t,!0))))}function oz(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Bn),autolinkProtocol:D,autolinkEmail:D,atxHeading:s(Fi),blockQuote:s(yt),characterEscape:D,characterReference:D,codeFenced:s(Pt),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Pt,o),codeText:s(ar,o),codeTextData:D,data:D,codeFlowValue:D,definition:s(bn),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(_i),hardBreakEscape:s(ni),hardBreakTrailing:s(ni),htmlFlow:s(zi,o),htmlFlowData:D,htmlText:s(zi,o),htmlTextData:D,image:s(ri),label:o,link:s(Bn),listItem:s(ii),listItemValue:h,listOrdered:s(Ks,c),listUnordered:s(Ks),paragraph:s(Aa),reference:C,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(Fi),strong:s(Vn),thematicBreak:s(sc)},exit:{atxHeading:l(),atxHeadingSequence:E,autolink:l(),autolinkEmail:at,autolinkProtocol:ot,blockQuote:l(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:me,characterReferenceMarkerNumeric:me,characterReferenceValue:le,characterReference:oe,codeFenced:l(x),codeFencedFence:g,codeFencedFenceInfo:f,codeFencedFenceMeta:m,codeFlowValue:P,codeIndented:l(p),codeText:l(H),codeTextData:P,data:P,definition:l(),definitionDestinationString:S,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(N),hardBreakTrailing:l(N),htmlFlow:l($),htmlFlowData:P,htmlText:l(_),htmlTextData:P,image:l(U),label:M,labelText:R,lineEnding:O,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:J,resourceDestinationString:k,resourceTitleString:Y,resource:K,setextHeading:l(I),setextHeadingLineSequence:A,setextHeadingText:T,strong:l(),thematicBreak:l()}};JT(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(j){let B={type:"root",children:[]};const X={stack:[B],tokenStack:[],config:t,enter:a,exit:u,buffer:o,resume:d,data:n},re=[];let de=-1;for(;++de<j.length;)if(j[de][1].type==="listOrdered"||j[de][1].type==="listUnordered")if(j[de][0]==="enter")re.push(de);else{const At=re.pop();de=i(j,At,de)}for(de=-1;++de<j.length;){const At=t[j[de][0]];QT.call(At,j[de][1].type)&&At[j[de][1].type].call(Object.assign({sliceSerialize:j[de][2].sliceSerialize},X),j[de][1])}if(X.tokenStack.length>0){const At=X.tokenStack[X.tokenStack.length-1];(At[1]||dw).call(X,void 0,At[0])}for(B.position={start:gr(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:gr(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},de=-1;++de<t.transforms.length;)B=t.transforms[de](B)||B;return B}function i(j,B,X){let re=B-1,de=-1,At=!1,kn,It,Vt,lr;for(;++re<=X;){const Oe=j[re];switch(Oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Oe[0]==="enter"?de++:de--,lr=void 0;break}case"lineEndingBlank":{Oe[0]==="enter"&&(kn&&!lr&&!de&&!Vt&&(Vt=re),lr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:lr=void 0}if(!de&&Oe[0]==="enter"&&Oe[1].type==="listItemPrefix"||de===-1&&Oe[0]==="exit"&&(Oe[1].type==="listUnordered"||Oe[1].type==="listOrdered")){if(kn){let ur=re;for(It=void 0;ur--;){const Zt=j[ur];if(Zt[1].type==="lineEnding"||Zt[1].type==="lineEndingBlank"){if(Zt[0]==="exit")continue;It&&(j[It][1].type="lineEndingBlank",At=!0),Zt[1].type="lineEnding",It=ur}else if(!(Zt[1].type==="linePrefix"||Zt[1].type==="blockQuotePrefix"||Zt[1].type==="blockQuotePrefixWhitespace"||Zt[1].type==="blockQuoteMarker"||Zt[1].type==="listItemIndent"))break}Vt&&(!It||Vt<It)&&(kn._spread=!0),kn.end=Object.assign({},It?j[It][1].start:Oe[1].end),j.splice(It||re,0,["exit",kn,Oe[2]]),re++,X++}if(Oe[1].type==="listItemPrefix"){const ur={type:"listItem",_spread:!1,start:Object.assign({},Oe[1].start),end:void 0};kn=ur,j.splice(re,0,["enter",ur,Oe[2]]),re++,X++,Vt=void 0,lr=!0}}}return j[B][1]._spread=At,X}function s(j,B){return X;function X(re){a.call(this,j(re),re),B&&B.call(this,re)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(j,B,X){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([B,X||void 0]),j.position={start:gr(B.start),end:void 0}}function l(j){return B;function B(X){j&&j.call(this,X),u.call(this,X)}}function u(j,B){const X=this.stack.pop(),re=this.tokenStack.pop();if(re)re[0].type!==j.type&&(B?B.call(this,j,re[0]):(re[1]||dw).call(this,j,re[0]));else throw new Error("Cannot close `"+j.type+"` ("+Io({start:j.start,end:j.end})+"): it’s not open");X.position.end=gr(j.end)}function d(){return mm(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(j){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function f(){const j=this.resume(),B=this.stack[this.stack.length-1];B.lang=j}function m(){const j=this.resume(),B=this.stack[this.stack.length-1];B.meta=j}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const j=this.resume(),B=this.stack[this.stack.length-1];B.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const j=this.resume(),B=this.stack[this.stack.length-1];B.value=j.replace(/(\r?\n|\r)$/g,"")}function y(j){const B=this.resume(),X=this.stack[this.stack.length-1];X.label=B,X.identifier=gn(this.sliceSerialize(j)).toLowerCase()}function v(){const j=this.resume(),B=this.stack[this.stack.length-1];B.title=j}function S(){const j=this.resume(),B=this.stack[this.stack.length-1];B.url=j}function E(j){const B=this.stack[this.stack.length-1];if(!B.depth){const X=this.sliceSerialize(j).length;B.depth=X}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function A(j){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function D(j){const X=this.stack[this.stack.length-1].children;let re=X[X.length-1];(!re||re.type!=="text")&&(re=ic(),re.position={start:gr(j.start),end:void 0},X.push(re)),this.stack.push(re)}function P(j){const B=this.stack.pop();B.value+=this.sliceSerialize(j),B.position.end=gr(j.end)}function O(j){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=B.children[B.children.length-1];X.position.end=gr(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(B.type)&&(D.call(this,j),P.call(this,j))}function N(){this.data.atHardBreak=!0}function $(){const j=this.resume(),B=this.stack[this.stack.length-1];B.value=j}function _(){const j=this.resume(),B=this.stack[this.stack.length-1];B.value=j}function H(){const j=this.resume(),B=this.stack[this.stack.length-1];B.value=j}function G(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=B,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function U(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=B,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function R(j){const B=this.sliceSerialize(j),X=this.stack[this.stack.length-2];X.label=rz(B),X.identifier=gn(B).toLowerCase()}function M(){const j=this.stack[this.stack.length-1],B=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const re=j.children;X.children=re}else X.alt=B}function k(){const j=this.resume(),B=this.stack[this.stack.length-1];B.url=j}function Y(){const j=this.resume(),B=this.stack[this.stack.length-1];B.title=j}function K(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function J(j){const B=this.resume(),X=this.stack[this.stack.length-1];X.label=B,X.identifier=gn(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function me(j){this.data.characterReferenceType=j.type}function le(j){const B=this.sliceSerialize(j),X=this.data.characterReferenceType;let re;X?(re=BT(B,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):re=gm(B);const de=this.stack[this.stack.length-1];de.value+=re}function oe(j){const B=this.stack.pop();B.position.end=gr(j.end)}function ot(j){P.call(this,j);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(j)}function at(j){P.call(this,j);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(j)}function yt(){return{type:"blockquote",children:[]}}function Pt(){return{type:"code",lang:null,meta:null,value:""}}function ar(){return{type:"inlineCode",value:""}}function bn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function _i(){return{type:"emphasis",children:[]}}function Fi(){return{type:"heading",depth:0,children:[]}}function ni(){return{type:"break"}}function zi(){return{type:"html",value:""}}function ri(){return{type:"image",title:null,url:"",alt:null}}function Bn(){return{type:"link",title:null,url:"",children:[]}}function Ks(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function ii(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function Aa(){return{type:"paragraph",children:[]}}function Vn(){return{type:"strong",children:[]}}function ic(){return{type:"text",value:""}}function sc(){return{type:"thematicBreak"}}}function gr(e){return{line:e.line,column:e.column,offset:e.offset}}function JT(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?JT(e,r):az(e,r)}}function az(e,t){let n;for(n in t)if(QT.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function dw(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Io({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Io({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Io({start:t.start,end:t.end})+") is still open")}function lz(e){const t=this;t.parser=n;function n(r){return sz(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function uz(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function cz(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function dz(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function fz(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hz(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function pz(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Gs(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let o,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=s+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function mz(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gz(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function XT(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function yz(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return XT(e,t);const i={src:Gs(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function vz(e,t){const n={src:Gs(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function wz(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function xz(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return XT(e,t);const i={href:Gs(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function bz(e,t){const n={href:Gs(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function kz(e,t,n){const r=e.all(t),i=n?Sz(n):ZT(t),s={},o=[];if(typeof t.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:o};return e.patch(t,u),e.applyData(t,u)}function Sz(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=ZT(n[r])}return t}function ZT(e){const t=e.spread;return t??e.children.length>1}function Tz(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function Ez(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Cz(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Pz(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Az(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=dm(t.children[1]),l=DT(t.children[t.children.length-1]);a&&l&&(o.position={start:a,end:l}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function Iz(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const c=t.children[l],h={},f=o?o[l]:void 0;f&&(h.align=f);let m={type:"element",tagName:s,properties:h,children:[]};c&&(m.children=e.all(c),e.patch(c,m),m=e.applyData(c,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function Rz(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const fw=9,hw=32;function jz(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(pw(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(pw(t.slice(i),i>0,!1)),s.join("")}function pw(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===fw||s===hw;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===fw||s===hw;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Dz(e,t){const n={type:"text",value:jz(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Nz(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Mz={blockquote:uz,break:cz,code:dz,delete:fz,emphasis:hz,footnoteReference:pz,heading:mz,html:gz,imageReference:yz,image:vz,inlineCode:wz,linkReference:xz,link:bz,listItem:kz,list:Tz,paragraph:Ez,root:Cz,strong:Pz,table:Az,tableCell:Rz,tableRow:Iz,text:Dz,thematicBreak:Nz,toml:rl,yaml:rl,definition:rl,footnoteDefinition:rl};function rl(){}const eE=-1,tc=0,jo=1,gu=2,vm=3,wm=4,xm=5,bm=6,tE=7,nE=8,mw=typeof self=="object"?self:globalThis,Lz=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,o]=t[i];switch(s){case tc:case eE:return n(o,i);case jo:{const a=n([],i);for(const l of o)a.push(r(l));return a}case gu:{const a=n({},i);for(const[l,u]of o)a[r(l)]=r(u);return a}case vm:return n(new Date(o),i);case wm:{const{source:a,flags:l}=o;return n(new RegExp(a,l),i)}case xm:{const a=n(new Map,i);for(const[l,u]of o)a.set(r(l),r(u));return a}case bm:{const a=n(new Set,i);for(const l of o)a.add(r(l));return a}case tE:{const{name:a,message:l}=o;return n(new mw[a](l),i)}case nE:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n(new mw[s](o),i)};return r},gw=e=>Lz(new Map,e)(0),Vi="",{toString:Oz}={},{keys:_z}=Object,ao=e=>{const t=typeof e;if(t!=="object"||!e)return[tc,t];const n=Oz.call(e).slice(8,-1);switch(n){case"Array":return[jo,Vi];case"Object":return[gu,Vi];case"Date":return[vm,Vi];case"RegExp":return[wm,Vi];case"Map":return[xm,Vi];case"Set":return[bm,Vi];case"DataView":return[jo,n]}return n.includes("Array")?[jo,n]:n.includes("Error")?[tE,n]:[gu,n]},il=([e,t])=>e===tc&&(t==="function"||t==="symbol"),Fz=(e,t,n,r)=>{const i=(o,a)=>{const l=r.push(o)-1;return n.set(a,l),l},s=o=>{if(n.has(o))return n.get(o);let[a,l]=ao(o);switch(a){case tc:{let d=o;switch(l){case"bigint":a=nE,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([eE],o)}return i([a,d],o)}case jo:{if(l){let h=o;return l==="DataView"?h=new Uint8Array(o.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(o)),i([l,[...h]],o)}const d=[],c=i([a,d],o);for(const h of o)d.push(s(h));return c}case gu:{if(l)switch(l){case"BigInt":return i([l,o.toString()],o);case"Boolean":case"Number":case"String":return i([l,o.valueOf()],o)}if(t&&"toJSON"in o)return s(o.toJSON());const d=[],c=i([a,d],o);for(const h of _z(o))(e||!il(ao(o[h])))&&d.push([s(h),s(o[h])]);return c}case vm:return i([a,o.toISOString()],o);case wm:{const{source:d,flags:c}=o;return i([a,{source:d,flags:c}],o)}case xm:{const d=[],c=i([a,d],o);for(const[h,f]of o)(e||!(il(ao(h))||il(ao(f))))&&d.push([s(h),s(f)]);return c}case bm:{const d=[],c=i([a,d],o);for(const h of o)(e||!il(ao(h)))&&d.push(s(h));return c}}const{message:u}=o;return i([a,{name:l,message:u}],o)};return s},yw=(e,{json:t,lossy:n}={})=>{const r=[];return Fz(!(t||n),!!t,new Map,r)(e),r},yu=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?gw(yw(e,t)):structuredClone(e):(e,t)=>gw(yw(e,t));function zz(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Bz(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Vz(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||zz,r=e.options.footnoteBackLabel||Bz,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),h=Gs(c.toLowerCase());let f=0;const m=[],g=e.footnoteCounts.get(c);for(;g!==void 0&&++f<=g;){m.length>0&&m.push({type:"text",value:" "});let y=typeof n=="string"?n:n(l,f);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,f),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const x=d[d.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const y=x.children[x.children.length-1];y&&y.type==="text"?y.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...m)}else d.push(...m);const p={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(u,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...yu(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const nc=function(e){if(e==null)return Wz;if(typeof e=="function")return rc(e);if(typeof e=="object")return Array.isArray(e)?Uz(e):Hz(e);if(typeof e=="string")return $z(e);throw new Error("Expected function, string, or object as test")};function Uz(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=nc(e[n]);return rc(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function Hz(e){const t=e;return rc(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function $z(e){return rc(t);function t(n){return n&&n.type===e}}function rc(e){return t;function t(n,r,i){return!!(qz(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Wz(){return!0}function qz(e){return e!==null&&typeof e=="object"&&"type"in e}const rE=[],Gz=!0,oh=!1,Kz="skip";function iE(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=nc(i),o=r?-1:1;a(e,void 0,[])();function a(l,u,d){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return h;function h(){let f=rE,m,g,x;if((!t||s(l,u,d[d.length-1]||void 0))&&(f=Yz(n(l,d)),f[0]===oh))return f;if("children"in l&&l.children){const p=l;if(p.children&&f[0]!==Kz)for(g=(r?p.children.length:-1)+o,x=d.concat(p);g>-1&&g<p.children.length;){const y=p.children[g];if(m=a(y,g,x)(),m[0]===oh)return m;g=typeof m[1]=="number"?m[1]:g+o}}return f}}}function Yz(e){return Array.isArray(e)?e:typeof e=="number"?[Gz,e]:e==null?rE:[e]}function km(e,t,n,r){let i,s,o;typeof t=="function"&&typeof n!="function"?(s=void 0,o=t,i=n):(s=t,o=n,i=r),iE(e,s,a,i);function a(l,u){const d=u[u.length-1],c=d?d.children.indexOf(l):void 0;return o(l,c,d)}}const ah={}.hasOwnProperty,Qz={};function Jz(e,t){const n=t||Qz,r=new Map,i=new Map,s=new Map,o={...Mz,...n.handlers},a={all:u,applyData:Zz,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:l,options:n,patch:Xz,wrap:t5};return km(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();c.has(h)||c.set(h,d)}}),a;function l(d,c){const h=d.type,f=a.handlers[h];if(ah.call(a.handlers,h)&&f)return f(a,d,c);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in d){const{children:g,...x}=d,p=yu(x);return p.children=a.all(d),p}return yu(d)}return(a.options.unknownHandler||e5)(a,d,c)}function u(d){const c=[];if("children"in d){const h=d.children;let f=-1;for(;++f<h.length;){const m=a.one(h[f],d);if(m){if(f&&h[f-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=vw(m.value)),!Array.isArray(m)&&m.type==="element")){const g=m.children[0];g&&g.type==="text"&&(g.value=vw(g.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function Xz(e,t){e.position&&(t.position=B4(e))}function Zz(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&s&&Object.assign(n.properties,yu(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function e5(e,t){const n=t.data||{},r="value"in t&&!(ah.call(n,"hProperties")||ah.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function t5(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function vw(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function ww(e,t){const n=Jz(e,t),r=n.one(e,void 0),i=Vz(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function n5(e,t){return e&&"run"in e?async function(n,r){const i=ww(n,{file:r,...t});await e.run(i,r)}:function(n,r){return ww(n,{file:r,...e||t})}}function xw(e){if(e)throw e}var Pl=Object.prototype.hasOwnProperty,sE=Object.prototype.toString,bw=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Sw=function(t){return typeof Array.isArray=="function"?Array.isArray(t):sE.call(t)==="[object Array]"},Tw=function(t){if(!t||sE.call(t)!=="[object Object]")return!1;var n=Pl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Pl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Pl.call(t,i)},Ew=function(t,n){bw&&n.name==="__proto__"?bw(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Cw=function(t,n){if(n==="__proto__")if(Pl.call(t,n)){if(kw)return kw(t,n).value}else return;return t[n]},r5=function e(){var t,n,r,i,s,o,a=arguments[0],l=1,u=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Cw(a,n),i=Cw(t,n),a!==i&&(d&&i&&(Tw(i)||(s=Sw(i)))?(s?(s=!1,o=r&&Sw(r)?r:[]):o=r&&Tw(r)?r:{},Ew(a,{name:n,newValue:e(d,o,i)})):typeof i<"u"&&Ew(a,{name:n,newValue:i}));return a};const ld=wu(r5);function lh(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function i5(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(l,...u){const d=e[++s];let c=-1;if(l){o(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,d?s5(d,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function s5(e,t){let n;return r;function r(...o){const a=e.length>o.length;let l;a&&o.push(i);try{l=e.apply(this,o)}catch(u){const d=u;if(a&&n)throw d;return i(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(o,...a){n||(n=!0,t(o,...a))}function s(o){i(null,o)}}const En={basename:o5,dirname:a5,extname:l5,join:u5,sep:"/"};function o5(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Pa(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else o<0&&(s=!0,o=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function a5(e){if(Pa(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function l5(e){Pa(e);let t=e.length,n=-1,r=0,i=-1,s=0,o;for(;t--;){const a=e.codePointAt(t);if(a===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),a===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function u5(...e){let t=-1,n;for(;++t<e.length;)Pa(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":c5(n)}function c5(e){Pa(e);const t=e.codePointAt(0)===47;let n=d5(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function d5(e,t){let n="",r=0,i=-1,s=0,o=-1,a,l;for(;++o<=e.length;){if(o<e.length)a=e.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=o,s=0;continue}}else if(n.length>0){n="",r=0,i=o,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,s=0}else a===46&&s>-1?s++:s=-1}return n}function Pa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const f5={cwd:h5};function h5(){return"/"}function uh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function p5(e){if(typeof e=="string")e=new URL(e);else if(!uh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return m5(e)}function m5(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ud=["history","path","basename","stem","extname","dirname"];class oE{constructor(t){let n;t?uh(t)?n={path:t}:typeof t=="string"||g5(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":f5.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ud.length;){const s=ud[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)ud.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?En.basename(this.path):void 0}set basename(t){dd(t,"basename"),cd(t,"basename"),this.path=En.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?En.dirname(this.path):void 0}set dirname(t){Pw(this.basename,"dirname"),this.path=En.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?En.extname(this.path):void 0}set extname(t){if(cd(t,"extname"),Pw(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=En.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){uh(t)&&(t=p5(t)),dd(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?En.basename(this.path,this.extname):void 0}set stem(t){dd(t,"stem"),cd(t,"stem"),this.path=En.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new st(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function cd(e,t){if(e&&e.includes(En.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+En.sep+"`")}function dd(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Pw(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function g5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const y5=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},v5={}.hasOwnProperty;class Sm extends y5{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=i5()}copy(){const t=new Sm;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ld(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(pd("data",this.frozen),this.namespace[t]=n,this):v5.call(this.namespace,t)&&this.namespace[t]||void 0:t?(pd("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=sl(t),r=this.parser||this.Parser;return fd("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),fd("process",this.parser||this.Parser),hd("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,o){const a=sl(t),l=r.parse(a);r.run(l,a,function(d,c,h){if(d||!c||!h)return u(d);const f=c,m=r.stringify(f,h);b5(m)?h.value=m:h.result=m,u(d,h)});function u(d,c){d||!c?o(d):s?s(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),fd("processSync",this.parser||this.Parser),hd("processSync",this.compiler||this.Compiler),this.process(t,i),Iw("processSync","process",n),r;function i(s,o){n=!0,xw(s),r=o}}run(t,n,r){Aw(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(o,a){const l=sl(n);i.run(t,l,u);function u(d,c,h){const f=c||t;d?a(d):o?o(f):r(void 0,f,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Iw("runSync","run",r),i;function s(o,a){xw(o),i=a,r=!0}}stringify(t,n){this.freeze();const r=sl(n),i=this.compiler||this.Compiler;return hd("stringify",i),Aw(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(pd("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;l(d,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=ld(!0,i.settings,u.settings))}function a(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];s(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===u){h=c;break}if(h===-1)r.push([u,...d]);else if(d.length>0){let[f,...m]=d;const g=r[h][1];lh(g)&&lh(f)&&(f=ld(!0,g,f)),r[h]=[u,f,...m]}}}}const w5=new Sm().freeze();function fd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hd(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function pd(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Aw(e){if(!lh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Iw(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function sl(e){return x5(e)?e:new oE(e)}function x5(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function b5(e){return typeof e=="string"||k5(e)}function k5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const S5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rw=[],jw={allowDangerousHtml:!0},T5=/^(https?|ircs?|mailto|xmpp)$/i,E5=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function C5(e){const t=P5(e),n=A5(e);return I5(t.runSync(t.parse(n),n),e)}function P5(e){const t=e.rehypePlugins||Rw,n=e.remarkPlugins||Rw,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...jw}:jw;return w5().use(lz).use(n).use(n5,r).use(t)}function A5(e){const t=e.children||"",n=new oE;return typeof t=="string"&&(n.value=t),n}function I5(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,o=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||R5;for(const d of E5)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+S5+d.id,void 0);return km(e,u),W4(e,{Fragment:w.Fragment,components:i,ignoreInvalidStyle:!0,jsx:w.jsx,jsxs:w.jsxs,passKeys:!0,passNode:!0});function u(d,c,h){if(d.type==="raw"&&h&&typeof c=="number")return o?h.children.splice(c,1):h.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let f;for(f in sd)if(Object.hasOwn(sd,f)&&Object.hasOwn(d.properties,f)){const m=d.properties[f],g=sd[f];(g===null||g.includes(d.tagName))&&(d.properties[f]=l(String(m||""),f,d))}}if(d.type==="element"){let f=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!f&&r&&typeof c=="number"&&(f=!r(d,c,h)),f&&h&&typeof c=="number")return a&&d.children?h.children.splice(c,1,...d.children):h.children.splice(c,1),c}}}function R5(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||T5.test(e.slice(0,t))?e:""}function Dw(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function j5(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function D5(e,t,n){const i=nc((n||{}).ignore||[]),s=N5(t);let o=-1;for(;++o<s.length;)iE(e,"text",a);function a(u,d){let c=-1,h;for(;++c<d.length;){const f=d[c],m=h?h.children:void 0;if(i(f,m?m.indexOf(f):void 0,h))return;h=f}if(h)return l(u,d)}function l(u,d){const c=d[d.length-1],h=s[o][0],f=s[o][1];let m=0;const x=c.children.indexOf(u);let p=!1,y=[];h.lastIndex=0;let v=h.exec(u.value);for(;v;){const S=v.index,E={index:v.index,input:v.input,stack:[...d,u]};let T=f(...v,E);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1?h.lastIndex=S+1:(m!==S&&y.push({type:"text",value:u.value.slice(m,S)}),Array.isArray(T)?y.push(...T):T&&y.push(T),m=S+v[0].length,p=!0),!h.global)break;v=h.exec(u.value)}return p?(m<u.value.length&&y.push({type:"text",value:u.value.slice(m)}),c.children.splice(x,1,...y)):y=[u],x+y.length}}function N5(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([M5(i[0]),L5(i[1])])}return t}function M5(e){return typeof e=="string"?new RegExp(j5(e),"g"):e}function L5(e){return typeof e=="function"?e:function(){return e}}const md="phrasing",gd=["autolink","link","image","label"];function O5(){return{transforms:[H5],enter:{literalAutolink:F5,literalAutolinkEmail:yd,literalAutolinkHttp:yd,literalAutolinkWww:yd},exit:{literalAutolink:U5,literalAutolinkEmail:V5,literalAutolinkHttp:z5,literalAutolinkWww:B5}}}function _5(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:":",before:"[ps]",after:"\\/",inConstruct:md,notInConstruct:gd}]}}function F5(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function yd(e){this.config.enter.autolinkProtocol.call(this,e)}function z5(e){this.config.exit.autolinkProtocol.call(this,e)}function B5(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function V5(e){this.config.exit.autolinkEmail.call(this,e)}function U5(e){this.exit(e)}function H5(e){D5(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$5],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),W5]],{ignore:["link","linkReference"]})}function $5(e,t,n,r,i){let s="";if(!aE(i)||(/^w/i.test(t)&&(n=t+n,t="",s="http://"),!q5(n)))return!1;const o=G5(n+r);if(!o[0])return!1;const a={type:"link",title:null,url:s+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function W5(e,t,n,r){return!aE(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function q5(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function G5(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Dw(e,"(");let s=Dw(e,")");for(;r!==-1&&i>s;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),s++;return[e,n]}function aE(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ni(n)||Zu(n))&&(!t||n!==47)}lE.peek=nB;function K5(){this.buffer()}function Y5(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Q5(){this.buffer()}function J5(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function X5(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Z5(e){this.exit(e)}function eB(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function tB(e){this.exit(e)}function nB(){return"["}function lE(e,t,n,r){const i=n.createTracker(r);let s=i.move("[^");const o=n.enter("footnoteReference"),a=n.enter("reference");return s+=i.move(n.safe(n.associationId(e),{after:"]",before:s})),a(),o(),s+=i.move("]"),s}function rB(){return{enter:{gfmFootnoteCallString:K5,gfmFootnoteCall:Y5,gfmFootnoteDefinitionLabelString:Q5,gfmFootnoteDefinition:J5},exit:{gfmFootnoteCallString:X5,gfmFootnoteCall:Z5,gfmFootnoteDefinitionLabelString:eB,gfmFootnoteDefinition:tB}}}function iB(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:lE},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,s,o){const a=s.createTracker(o);let l=a.move("[^");const u=s.enter("footnoteDefinition"),d=s.enter("label");return l+=a.move(s.safe(s.associationId(r),{before:l,after:"]"})),d(),l+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),l+=a.move((t?`
`:" ")+s.indentLines(s.containerFlow(r,a.current()),t?uE:sB))),u(),l}}function sB(e,t,n){return t===0?e:uE(e,t,n)}function uE(e,t,n){return(n?"":"    ")+e}const oB=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];cE.peek=dB;function aB(){return{canContainEols:["delete"],enter:{strikethrough:uB},exit:{strikethrough:cB}}}function lB(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:oB}],handlers:{delete:cE}}}function uB(e){this.enter({type:"delete",children:[]},e)}function cB(e){this.exit(e)}function cE(e,t,n,r){const i=n.createTracker(r),s=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),s(),o}function dB(){return"~"}function fB(e){return e.length}function hB(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||fB,s=[],o=[],a=[],l=[];let u=0,d=-1;for(;++d<e.length;){const g=[],x=[];let p=-1;for(e[d].length>u&&(u=e[d].length);++p<e[d].length;){const y=pB(e[d][p]);if(n.alignDelimiters!==!1){const v=i(y);x[p]=v,(l[p]===void 0||v>l[p])&&(l[p]=v)}g.push(y)}o[d]=g,a[d]=x}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)s[c]=Nw(r[c]);else{const g=Nw(r);for(;++c<u;)s[c]=g}c=-1;const h=[],f=[];for(;++c<u;){const g=s[c];let x="",p="";g===99?(x=":",p=":"):g===108?x=":":g===114&&(p=":");let y=n.alignDelimiters===!1?1:Math.max(1,l[c]-x.length-p.length);const v=x+"-".repeat(y)+p;n.alignDelimiters!==!1&&(y=x.length+y+p.length,y>l[c]&&(l[c]=y),f[c]=y),h[c]=v}o.splice(1,0,h),a.splice(1,0,f),d=-1;const m=[];for(;++d<o.length;){const g=o[d],x=a[d];c=-1;const p=[];for(;++c<u;){const y=g[c]||"";let v="",S="";if(n.alignDelimiters!==!1){const E=l[c]-(x[c]||0),T=s[c];T===114?v=" ".repeat(E):T===99?E%2?(v=" ".repeat(E/2+.5),S=" ".repeat(E/2-.5)):(v=" ".repeat(E/2),S=v):S=" ".repeat(E)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&y==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(v),p.push(y),n.alignDelimiters!==!1&&p.push(S),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function pB(e){return e==null?"":String(e)}function Nw(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function mB(e,t,n,r){const i=n.enter("blockquote"),s=n.createTracker(r);s.move("> "),s.shift(2);const o=n.indentLines(n.containerFlow(e,s.current()),gB);return i(),o}function gB(e,t,n){return">"+(n?"":" ")+e}function yB(e,t){return Mw(e,t.inConstruct,!0)&&!Mw(e,t.notInConstruct,!1)}function Mw(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Lw(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&yB(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function vB(e,t){const n=String(e);let r=n.indexOf(t),i=r,s=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++s>o&&(o=s):s=1,i=r+t.length,r=n.indexOf(t,i);return o}function wB(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xB(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function bB(e,t,n,r){const i=xB(n),s=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(wB(e,n)){const c=n.enter("codeIndented"),h=n.indentLines(s,kB);return c(),h}const a=n.createTracker(r),l=i.repeat(Math.max(vB(s,i)+1,3)),u=n.enter("codeFenced");let d=a.move(l);if(e.lang){const c=n.enter(`codeFencedLang${o}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${o}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),c()}return d+=a.move(`
`),s&&(d+=a.move(s+`
`)),d+=a.move(l),u(),d}function kB(e,t,n){return(n?"":"    ")+e}function Tm(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function SB(e,t,n,r){const i=Tm(n),s=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let a=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),o(),u}function TB(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function aa(e){return"&#x"+e.toString(16).toUpperCase()+";"}function vu(e,t,n){const r=Ms(e),i=Ms(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}dE.peek=EB;function dE(e,t,n,r){const i=TB(n),s=n.enter("emphasis"),o=n.createTracker(r),a=o.move(i);let l=o.move(n.containerPhrasing(e,{after:i,before:a,...o.current()}));const u=l.charCodeAt(0),d=vu(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(l=aa(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=vu(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+aa(c));const f=o.move(i);return s(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+f}function EB(e,t,n){return n.options.emphasis||"*"}function CB(e,t){let n=!1;return km(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,oh}),!!((!e.depth||e.depth<3)&&mm(e)&&(t.options.setext||n))}function PB(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),s=n.createTracker(r);if(CB(e,n)){const d=n.enter("headingSetext"),c=n.enter("phrasing"),h=n.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return c(),d(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const o="#".repeat(i),a=n.enter("headingAtx"),l=n.enter("phrasing");s.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(u)&&(u=aa(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),l(),a(),u}fE.peek=AB;function fE(e){return e.value||""}function AB(){return"<"}hE.peek=IB;function hE(e,t,n,r){const i=Tm(n),s=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let a=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),u+=l.move(")"),o(),u}function IB(){return"!"}pE.peek=RB;function pE(e,t,n,r){const i=e.referenceType,s=n.enter("imageReference");let o=n.enter("label");const a=n.createTracker(r);let l=a.move("![");const u=n.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const d=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return o(),n.stack=d,s(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function RB(){return"!"}mE.peek=jB;function mE(e,t,n){let r=e.value||"",i="`",s=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<n.unsafe.length;){const o=n.unsafe[s],a=n.compilePattern(o);let l;if(o.atBreak)for(;l=a.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function jB(){return"`"}function gE(e,t){const n=mm(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}yE.peek=DB;function yE(e,t,n,r){const i=Tm(n),s=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let a,l;if(gE(e,n)){const d=n.stack;n.stack=[],a=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),a(),n.stack=d,c}a=n.enter("link"),l=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(l=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),l(),e.title&&(l=n.enter(`title${s}`),u+=o.move(" "+i),u+=o.move(n.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),l()),u+=o.move(")"),a(),u}function DB(e,t,n){return gE(e,n)?"<":"["}vE.peek=NB;function vE(e,t,n,r){const i=e.referenceType,s=n.enter("linkReference");let o=n.enter("label");const a=n.createTracker(r);let l=a.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const d=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return o(),n.stack=d,s(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function NB(){return"["}function Em(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function MB(e){const t=Em(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function LB(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function wE(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function OB(e,t,n,r){const i=n.enter("list"),s=n.bulletCurrent;let o=e.ordered?LB(n):Em(n);const a=e.ordered?o==="."?")":".":MB(n);let l=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),wE(n)===o&&d){let c=-1;for(;++c<e.children.length;){const h=e.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(o=a),n.bulletCurrent=o;const u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=s,i(),u}function _B(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function FB(e,t,n,r){const i=_B(n);let s=n.bulletCurrent||Em(n);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let o=s.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const a=n.createTracker(r);a.move(s+" ".repeat(o-s.length)),a.shift(o);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),d);return l(),u;function d(c,h,f){return h?(f?"":" ".repeat(o))+c:(f?s:s+" ".repeat(o-s.length))+c}}function zB(e,t,n,r){const i=n.enter("paragraph"),s=n.enter("phrasing"),o=n.containerPhrasing(e,r);return s(),i(),o}const BB=nc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function VB(e,t,n,r){return(e.children.some(function(o){return BB(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function UB(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}xE.peek=HB;function xE(e,t,n,r){const i=UB(n),s=n.enter("strong"),o=n.createTracker(r),a=o.move(i+i);let l=o.move(n.containerPhrasing(e,{after:i,before:a,...o.current()}));const u=l.charCodeAt(0),d=vu(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(l=aa(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=vu(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+aa(c));const f=o.move(i+i);return s(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+f}function HB(e,t,n){return n.options.strong||"*"}function $B(e,t,n,r){return n.safe(e.value,r)}function WB(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function qB(e,t,n){const r=(wE(n)+(n.options.ruleSpaces?" ":"")).repeat(WB(n));return n.options.ruleSpaces?r.slice(0,-1):r}const bE={blockquote:mB,break:Lw,code:bB,definition:SB,emphasis:dE,hardBreak:Lw,heading:PB,html:fE,image:hE,imageReference:pE,inlineCode:mE,link:yE,linkReference:vE,list:OB,listItem:FB,paragraph:zB,root:VB,strong:xE,text:$B,thematicBreak:qB};function GB(){return{enter:{table:KB,tableData:Ow,tableHeader:Ow,tableRow:QB},exit:{codeText:JB,table:YB,tableData:vd,tableHeader:vd,tableRow:vd}}}function KB(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function YB(e){this.exit(e),this.data.inTable=void 0}function QB(e){this.enter({type:"tableRow",children:[]},e)}function vd(e){this.exit(e)}function Ow(e){this.enter({type:"tableCell",children:[]},e)}function JB(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,XB));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function XB(e,t){return t==="|"?t:e}function ZB(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:o,tableCell:l,tableRow:a}};function o(f,m,g,x){return u(d(f,g,x),f.align)}function a(f,m,g,x){const p=c(f,g,x),y=u([p]);return y.slice(0,y.indexOf(`
`))}function l(f,m,g,x){const p=g.enter("tableCell"),y=g.enter("phrasing"),v=g.containerPhrasing(f,{...x,before:s,after:s});return y(),p(),v}function u(f,m){return hB(f,{align:m,alignDelimiters:r,padding:n,stringLength:i})}function d(f,m,g){const x=f.children;let p=-1;const y=[],v=m.enter("table");for(;++p<x.length;)y[p]=c(x[p],m,g);return v(),y}function c(f,m,g){const x=f.children;let p=-1;const y=[],v=m.enter("tableRow");for(;++p<x.length;)y[p]=l(x[p],f,m,g);return v(),y}function h(f,m,g){let x=bE.inlineCode(f,m,g);return g.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function eV(){return{exit:{taskListCheckValueChecked:_w,taskListCheckValueUnchecked:_w,paragraph:nV}}}function tV(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:rV}}}function _w(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function nV(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let s=-1,o;for(;++s<i.length;){const a=i[s];if(a.type==="paragraph"){o=a;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function rV(e,t,n,r){const i=e.children[0],s=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);s&&a.move(o);let l=bE.listItem(e,t,n,{...r,...a.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+o}}function iV(){return[O5(),rB(),aB(),GB(),eV()]}function sV(e){return{extensions:[_5(),iB(e),lB(),ZB(e),tV()]}}const oV={tokenize:fV,partial:!0},kE={tokenize:hV,partial:!0},SE={tokenize:pV,partial:!0},TE={tokenize:mV,partial:!0},aV={tokenize:gV,partial:!0},EE={name:"wwwAutolink",tokenize:cV,previous:PE},CE={name:"protocolAutolink",tokenize:dV,previous:AE},or={name:"emailAutolink",tokenize:uV,previous:IE},zn={};function lV(){return{text:zn}}let ai=48;for(;ai<123;)zn[ai]=or,ai++,ai===58?ai=65:ai===91&&(ai=97);zn[43]=or;zn[45]=or;zn[46]=or;zn[95]=or;zn[72]=[or,CE];zn[104]=[or,CE];zn[87]=[or,EE];zn[119]=[or,EE];function uV(e,t,n){const r=this;let i,s;return o;function o(c){return!ch(c)||!IE.call(r,r.previous)||Cm(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return ch(c)?(e.consume(c),a):c===64?(e.consume(c),l):n(c)}function l(c){return c===46?e.check(aV,d,u)(c):c===45||c===95||rt(c)?(s=!0,e.consume(c),l):d(c)}function u(c){return e.consume(c),i=!0,l}function d(c){return s&&i&&dt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function cV(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!PE.call(r,r.previous)||Cm(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(oV,e.attempt(kE,e.attempt(SE,s),n),n)(o))}function s(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function dV(e,t,n){const r=this;let i="",s=!1;return o;function o(c){return(c===72||c===104)&&AE.call(r,r.previous)&&!Cm(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(dt(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(c),l}return n(c)}function l(c){return c===47?(e.consume(c),s?u:(s=!0,l)):n(c)}function u(c){return c===null||mu(c)||ye(c)||Ni(c)||Zu(c)?n(c):e.attempt(kE,e.attempt(SE,d),n)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function fV(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),s):n(o)}function s(o){return o===null?n(o):t(o)}}function hV(e,t,n){let r,i,s;return o;function o(u){return u===46||u===95?e.check(TE,l,a)(u):u===null||ye(u)||Ni(u)||u!==45&&Zu(u)?l(u):(s=!0,e.consume(u),o)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),o}function l(u){return i||r||!s?n(u):t(u)}}function pV(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?s(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(TE,t,s)(o):o===null||ye(o)||Ni(o)?t(o):(e.consume(o),i)}function s(o){return o===41&&r++,e.consume(o),i}}function mV(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),s):a===93?(e.consume(a),i):a===60||a===null||ye(a)||Ni(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||ye(a)||Ni(a)?t(a):r(a)}function s(a){return dt(a)?o(a):n(a)}function o(a){return a===59?(e.consume(a),r):dt(a)?(e.consume(a),o):n(a)}}function gV(e,t,n){return r;function r(s){return e.consume(s),i}function i(s){return rt(s)?n(s):t(s)}}function PE(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ye(e)}function AE(e){return!dt(e)}function IE(e){return!(e===47||ch(e))}function ch(e){return e===43||e===45||e===46||e===95||rt(e)}function Cm(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const yV={tokenize:EV,partial:!0};function vV(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:kV,continuation:{tokenize:SV},exit:TV}},text:{91:{name:"gfmFootnoteCall",tokenize:bV},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:wV,resolveTo:xV}}}}function wV(e,t,n){const r=this;let i=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){o=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!o||!o._balanced)return n(l);const u=gn(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function xV(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",s,t],["enter",o,t],["exit",o,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function bV(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,o;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(s>999||c===93&&!o||c===null||c===91||ye(c))return n(c);if(c===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(gn(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ye(c)||(o=!0),s++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),s++,u):u(c)}}function kV(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,o=0,a;return l;function l(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(m)}function d(m){if(o>999||m===93&&!a||m===null||m===91||ye(m))return n(m);if(m===93){e.exit("chunkString");const g=e.exit("gfmFootnoteDefinitionLabelString");return s=gn(r.sliceSerialize(g)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return ye(m)||(a=!0),o++,e.consume(m),m===92?c:d}function c(m){return m===91||m===92||m===93?(e.consume(m),o++,d):d(m)}function h(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),i.includes(s)||i.push(s),ue(e,f,"gfmFootnoteDefinitionWhitespace")):n(m)}function f(m){return t(m)}}function SV(e,t,n){return e.check(Ca,t,e.attempt(yV,t,n))}function TV(e){e.exit("gfmFootnoteDefinition")}function EV(e,t,n){const r=this;return ue(e,i,"gfmFootnoteDefinitionIndent",5);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(s):n(s)}}function CV(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,a){let l=-1;for(;++l<o.length;)if(o[l][0]==="enter"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._close){let u=l;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[l][1].end.offset-o[l][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[l][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[l][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[l][1].start)},h=[["enter",d,a],["enter",o[u][1],a],["exit",o[u][1],a],["enter",c,a]],f=a.parser.constructs.insideSpan.null;f&&Ot(h,h.length,0,ec(f,o.slice(u+1,l),a)),Ot(h,h.length,0,[["exit",c,a],["enter",o[l][1],a],["exit",o[l][1],a],["exit",d,a]]),Ot(o,u-1,l-u+3,h),l=u+h.length-2;break}}for(l=-1;++l<o.length;)o[l][1].type==="strikethroughSequenceTemporary"&&(o[l][1].type="data");return o}function s(o,a,l){const u=this.previous,d=this.events;let c=0;return h;function h(m){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(m):(o.enter("strikethroughSequenceTemporary"),f(m))}function f(m){const g=Ms(u);if(m===126)return c>1?l(m):(o.consume(m),c++,f);if(c<2&&!n)return l(m);const x=o.exit("strikethroughSequenceTemporary"),p=Ms(m);return x._open=!p||p===2&&!!g,x._close=!g||g===2&&!!p,a(m)}}}class PV{constructor(){this.map=[]}add(t,n,r){AV(this,t,n,r)}consume(t){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0}}function AV(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function IV(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function RV(){return{flow:{null:{name:"table",tokenize:jV,resolveAll:DV}}}}function jV(e,t,n){const r=this;let i=0,s=0,o;return a;function a(P){let O=r.events.length-1;for(;O>-1;){const _=r.events[O][1].type;if(_==="lineEnding"||_==="linePrefix")O--;else break}const N=O>-1?r.events[O][1].type:null,$=N==="tableHead"||N==="tableRow"?T:l;return $===T&&r.parser.lazy[r.now().line]?n(P):$(P)}function l(P){return e.enter("tableHead"),e.enter("tableRow"),u(P)}function u(P){return P===124||(o=!0,s+=1),d(P)}function d(P){return P===null?n(P):Q(P)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),f):n(P):ie(P)?ue(e,d,"whitespace")(P):(s+=1,o&&(o=!1,i+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),o=!0,d):(e.enter("data"),c(P)))}function c(P){return P===null||P===124||ye(P)?(e.exit("data"),d(P)):(e.consume(P),P===92?h:c)}function h(P){return P===92||P===124?(e.consume(P),c):c(P)}function f(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(P):(e.enter("tableDelimiterRow"),o=!1,ie(P)?ue(e,m,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):m(P))}function m(P){return P===45||P===58?x(P):P===124?(o=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),g):E(P)}function g(P){return ie(P)?ue(e,x,"whitespace")(P):x(P)}function x(P){return P===58?(s+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),p):P===45?(s+=1,p(P)):P===null||Q(P)?S(P):E(P)}function p(P){return P===45?(e.enter("tableDelimiterFiller"),y(P)):E(P)}function y(P){return P===45?(e.consume(P),y):P===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(P))}function v(P){return ie(P)?ue(e,S,"whitespace")(P):S(P)}function S(P){return P===124?m(P):P===null||Q(P)?!o||i!==s?E(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(P)):E(P)}function E(P){return n(P)}function T(P){return e.enter("tableRow"),A(P)}function A(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),A):P===null||Q(P)?(e.exit("tableRow"),t(P)):ie(P)?ue(e,A,"whitespace")(P):(e.enter("data"),I(P))}function I(P){return P===null||P===124||ye(P)?(e.exit("data"),A(P)):(e.consume(P),P===92?D:I)}function D(P){return P===92||P===124?(e.consume(P),I):I(P)}}function DV(e,t){let n=-1,r=!0,i=0,s=[0,0,0,0],o=[0,0,0,0],a=!1,l=0,u,d,c;const h=new PV;for(;++n<e.length;){const f=e[n],m=f[1];f[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(Fw(h,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",u,t]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(r=!0,c=void 0,s=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",d,t]])),i=m.type==="tableDelimiterRow"?2:d?3:1):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(s[1]!==0&&(o[0]=o[1],c=ol(h,t,s,i,void 0,c),s=[0,0,0,0]),o[2]=n)):m.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(o[0]=o[1],c=ol(h,t,s,i,void 0,c)),s=o,o=[s[1],n,0,0])):m.type==="tableHead"?(a=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,s[1]!==0?(o[0]=o[1],c=ol(h,t,s,i,n,c)):o[1]!==0&&(c=ol(h,t,o,i,n,c)),i=0):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(o[3]=n)}for(l!==0&&Fw(h,t,l,u,d),h.consume(t.events),n=-1;++n<t.events.length;){const f=t.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=IV(t.events,n))}return e}function ol(e,t,n,r,i,s){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(s.end=Object.assign({},Ui(t.events,n[0])),e.add(n[0],0,[["exit",s,t]]));const l=Ui(t.events,n[1]);if(s={type:o,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",s,t]]),n[2]!==0){const u=Ui(t.events,n[2]),d=Ui(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const h=t.events[n[2]],f=t.events[n[3]];if(h[1].end=Object.assign({},f[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,g=n[3]-n[2]-1;e.add(m,g,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(s.end=Object.assign({},Ui(t.events,i)),e.add(i,0,[["exit",s,t]]),s=void 0),s}function Fw(e,t,n,r,i){const s=[],o=Ui(t.events,n);i&&(i.end=Object.assign({},o),s.push(["exit",i,t])),r.end=Object.assign({},o),s.push(["exit",r,t]),e.add(n+1,0,s)}function Ui(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const NV={name:"tasklistCheck",tokenize:LV};function MV(){return{text:{91:NV}}}function LV(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),s)}function s(l){return ye(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),o):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),o):n(l)}function o(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(l)}function a(l){return Q(l)?t(l):ie(l)?e.check({tokenize:OV},t,n)(l):n(l)}}function OV(e,t,n){return ue(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function _V(e){return zT([lV(),vV(),CV(e),RV(),MV()])}const FV={};function zV(e){const t=this,n=e||FV,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(_V(n)),s.push(iV()),o.push(sV(n))}function Al(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function RE({content:e,className:t,skipFirstH1:n=!1}){const{theme:r}=Jb();let i=!0;return w.jsx("div",{className:Ft("prose-docs",t),children:w.jsx(C5,{remarkPlugins:[zV],components:{h1:({children:s,...o})=>{if(n&&i)return i=!1,null;const a=Al(String(s));return w.jsx("h1",{id:a,...o,children:s})},h2:({children:s,...o})=>{const a=Al(String(s));return w.jsx("h2",{id:a,...o,children:s})},h3:({children:s,...o})=>{const a=Al(String(s));return w.jsx("h3",{id:a,...o,children:s})},code:({className:s,children:o,...a})=>{const l=/language-(\w+)/.exec(s||"");return l?w.jsx(BV,{language:l[1],theme:r,children:String(o).replace(/\n$/,"")}):w.jsx("code",{...a,children:o})},a:({href:s,children:o,...a})=>w.jsx("a",{href:s,target:s!=null&&s.startsWith("http")?"_blank":void 0,rel:s!=null&&s.startsWith("http")?"noopener noreferrer":void 0,...a,children:o})},children:e})})}function BV({language:e,children:t,theme:n}){const[r,i]=b.useState(!1),s=async()=>{await navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)};return w.jsxs("div",{className:"relative group",children:[w.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[w.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded",children:e}),w.jsx("button",{onClick:s,className:"p-1.5 rounded bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Copy code",children:r?w.jsx(l2,{className:"h-3.5 w-3.5"}):w.jsx(h2,{className:"h-3.5 w-3.5"})})]}),w.jsx("pre",{className:"bg-muted p-4 rounded-lg overflow-x-auto text-sm max-w-full",children:w.jsx("code",{className:"block whitespace-pre-wrap break-all",children:t})})]})}function VV(e){const t=/^(#{2,3})\s+(.+)$/gm,n=[];let r;for(;(r=t.exec(e))!==null;)n.push({id:Al(r[2]),text:r[2],level:r[1].length});return n}const zw=Object.assign({"/src/content/docs/introduction/welcome.md":LS,"/src/content/docs/leetcode/can-place-flowers.md":OS,"/src/content/docs/leetcode/gcd-strings.md":_S,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":FS,"/src/content/docs/leetcode/kids-with-candies.md":zS,"/src/content/docs/leetcode/merge-string-alternatively.md":BS,"/src/content/docs/leetcode/product-of-array-except-self.md":VS,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":US,"/src/content/docs/leetcode/reverse-words-in-string.md":HS,"/src/content/docs/leetcode/string-compression.md":$S,"/src/content/docs/rest-api/api-doc-strategy.md":WS,"/src/content/docs/rest-api/authentication-and-authorization.md":qS,"/src/content/docs/rest-api/error-handling.md":GS,"/src/content/docs/rest-api/http-basics.md":KS,"/src/content/docs/rest-api/http-status-codes.md":YS,"/src/content/docs/rest-api/optimization.md":QS,"/src/content/docs/rest-api/pagination.md":JS,"/src/content/docs/rest-api/rate-limiting.md":XS,"/src/content/docs/rest-api/real-patterns.md":ZS,"/src/content/docs/rest-api/request-response-format.md":eT,"/src/content/docs/rest-api/resource-design.md":tT,"/src/content/docs/rest-api/rest-api-fundamentals.md":nT,"/src/content/docs/rest-api/security.md":rT,"/src/content/docs/rest-api/testing-reat-api.md":iT,"/src/content/docs/rest-api/validation.md":sT,"/src/content/docs/rest-api/versioning.md":oT,"/src/content/docs/tutorials/connect-mongodb.md":aT,"/src/content/docs/tutorials/create-basic-rest-api.md":lT,"/src/content/docs/tutorials/create-db-table.md":uT,"/src/content/docs/tutorials/handle-errors-in-java.md":cT,"/src/content/docs/tutorials/install-git.md":dT,"/src/content/docs/tutorials/set-up-git.md":fT,"/src/content/docs/tutorials/test-api.md":hT});function UV(){const e={};return Object.keys(zw).forEach(t=>{const i=t.split("/")[5].replace(".md","");e[i]=zw[t]}),e}const HV=UV();function Bw(){const{slug:e}=qb(),t=e||Hv()||"introduction",n=TT(t),r=HV[t];if(!n||!r){const u=Hv();return w.jsx(Af,{to:`/docs/${u}`,replace:!0})}const i=VV(r),s=Ci.categories.flatMap(u=>u.items),o=s.findIndex(u=>u.slug===t),a=o>0?s[o-1]:null,l=o<s.length-1?s[o+1]:null;return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsx(K_,{headings:i,children:w.jsxs(ae.article,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[w.jsxs("nav",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-6",children:[w.jsx(We,{to:"/docs",className:"hover:text-foreground transition-colors",children:"Docs"}),w.jsx("span",{children:"/"}),w.jsx("span",{className:"text-foreground",children:n.title})]}),w.jsx(RE,{content:r}),w.jsxs("nav",{className:"mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a?w.jsx(Ne,{asChild:!0,variant:"outline",className:"justify-start h-auto py-4 px-4 min-w-0",children:w.jsxs(We,{to:`/docs/${a.slug}`,children:[w.jsx(c2,{className:"h-4 w-4 mr-2 flex-shrink-0"}),w.jsxs("div",{className:"text-left min-w-0",children:[w.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Previous"}),w.jsx("div",{className:"font-medium truncate",children:a.title})]})]})}):w.jsx("div",{}),l&&w.jsx(Ne,{asChild:!0,variant:"outline",className:"justify-end h-auto py-4 px-4 min-w-0",children:w.jsxs(We,{to:`/docs/${l.slug}`,children:[w.jsxs("div",{className:"text-right min-w-0",children:[w.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Next"}),w.jsx("div",{className:"font-medium truncate",children:l.title})]}),w.jsx(d2,{className:"h-4 w-4 ml-2 flex-shrink-0"})]})})]})]})})}),w.jsx(Ta,{})]})}function $V(){const[e,t]=b.useState(null),[n,r]=b.useState("newest"),i=$_(),s=b.useMemo(()=>{let a=[...am];return e&&(a=a.filter(l=>l.tags.includes(e))),a.sort((l,u)=>{const d=new Date(l.date).getTime(),c=new Date(u.date).getTime();return n==="newest"?c-d:d-c}),a},[e,n]),o=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-2xl mb-12",children:[w.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Blog"}),w.jsx("p",{className:"text-lg text-muted-foreground",children:"Thoughts on technical writing, documentation strategy, and developer experience."})]}),w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"flex flex-col sm:flex-row gap-4 mb-8",children:[w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsx(m2,{className:"h-4 w-4 text-muted-foreground"}),w.jsx(Ne,{variant:e===null?"secondary":"ghost",size:"sm",onClick:()=>t(null),children:"All"}),i.map(a=>w.jsx(Ne,{variant:e===a?"secondary":"ghost",size:"sm",onClick:()=>t(a),children:a},a))]}),w.jsxs("div",{className:"flex items-center gap-2 sm:ml-auto",children:[w.jsx("span",{className:"text-sm text-muted-foreground",children:"Sort:"}),w.jsx(Ne,{variant:n==="newest"?"secondary":"ghost",size:"sm",onClick:()=>r("newest"),children:"Newest"}),w.jsx(Ne,{variant:n==="oldest"?"secondary":"ghost",size:"sm",onClick:()=>r("oldest"),children:"Oldest"})]})]}),w.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:s.map((a,l)=>w.jsx(ae.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1+l*.05},className:"group",children:w.jsxs(We,{to:`/blog/${a.slug}`,className:"block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[w.jsx("div",{className:"flex flex-wrap gap-1 mb-3",children:a.tags.map(u=>w.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",children:[w.jsx(W1,{className:"h-3 w-3"}),u]},u))}),w.jsx("h2",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2",children:a.title}),w.jsx("div",{className:"flex items-center gap-4 text-xs text-muted-foreground mt-auto",children:w.jsxs("span",{className:"flex items-center gap-1",children:[w.jsx(V1,{className:"h-3.5 w-3.5"}),o(a.date)]})})]})},a.slug))}),s.length===0&&w.jsxs("div",{className:"text-center py-12",children:[w.jsxs("p",{className:"text-muted-foreground",children:['No posts found for "',e,'"']}),w.jsx(Ne,{variant:"link",onClick:()=>t(null),className:"mt-2",children:"Clear filter"})]})]})}),w.jsx(Ta,{})]})}const Vw=Object.assign({"/src/content/blogs/design-before-implementation.md":pT,"/src/content/blogs/documentation-as-code.md":mT,"/src/content/blogs/error-handling.md":gT,"/src/content/blogs/google-technical-writer-course.md":yT,"/src/content/blogs/impact-of-naming.md":vT,"/src/content/blogs/readme-files.md":wT,"/src/content/blogs/scalability.md":xT,"/src/content/blogs/why-documentation-is-more-than-just-writing.md":bT,"/src/content/blogs/writing-effective-api-documentation.md":kT});function WV(e){const t=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,n=e.match(t);if(!n)return{frontmatter:{},body:e};const r=n[1],i=n[2],s={};return r.split(`
`).forEach(o=>{const[a,...l]=o.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const c=d.replace(/'/g,'"');s[a.trim()]=JSON.parse(c)}else s[a.trim()]=d}}),{frontmatter:s,body:i}}function qV(){const e={};return Object.keys(Vw).forEach(t=>{const r=t.split("/").pop().replace(".md",""),{body:i}=WV(Vw[t]);e[r]=i}),e}const GV=qV();function KV(){const{slug:e}=qb();if(!e)return w.jsx(Af,{to:"/blog",replace:!0});const t=H_(e),n=GV[e];if(!t||!n)return w.jsx(Af,{to:"/blog",replace:!0});const r=o=>new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i=window.location.href,s=`${t.title} - TechWriter Portfolio`;return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsxs("article",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsx(ae.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"mb-8",children:w.jsx(Ne,{asChild:!0,variant:"ghost",size:"sm",className:"gap-2",children:w.jsxs(We,{to:"/blog",children:[w.jsx(a2,{className:"h-4 w-4"}),"Back to Blog"]})})}),w.jsxs(ae.header,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-3xl mx-auto mb-12",children:[w.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.tags.map(o=>w.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary",children:[w.jsx(W1,{className:"h-3.5 w-3.5"}),o]},o))}),w.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 leading-tight",children:t.title}),w.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border",children:[w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx(V1,{className:"h-4 w-4"}),r(t.date)]}),w.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx(x2,{className:"h-4 w-4"}),"Share:"]}),w.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(s)}&url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on Twitter",children:w.jsx(S2,{className:"h-4 w-4"})}),w.jsx("a",{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on LinkedIn",children:w.jsx(fp,{className:"h-4 w-4"})})]})]})]}),w.jsx(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"max-w-3xl mx-auto",children:w.jsx(RE,{content:n})}),w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"max-w-3xl mx-auto mt-16 p-8 rounded-xl bg-card border border-border text-center",children:[w.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Enjoyed this article?"}),w.jsx("p",{className:"text-muted-foreground mb-6",children:"Explore more technical writing insights and documentation samples."}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Ne,{asChild:!0,children:w.jsx(We,{to:"/blog",children:"More Articles"})}),w.jsx(Ne,{asChild:!0,variant:"outline",children:w.jsx(We,{to:"/docs",children:"View Documentation"})})]})]})]})}),w.jsx(Ta,{})]})}const YV=[{icon:E2,title:"User-First",description:"Every piece of documentation starts with understanding the reader's goals and pain points."},{icon:g2,title:"Clarity Over Completeness",description:"Better to explain one thing perfectly than ten things poorly. Focus enables mastery."},{icon:dp,title:"Code That Works",description:"Every example is tested, every snippet runs. Trust is built through reliability."},{icon:ya,title:"Progressive Disclosure",description:"Layer complexity appropriately. Quick answers first, deep dives available."}],QV=["API Documentation","Developer Guides","SDK Documentation","Markdown/MDX","Docs-as-Code","Technical Editing","Content Strategy","Developer Experience","Git/GitHub","React/JavaScript","Java","SpringBoot","AWS","MongoDB","REST API","SDLC","JDBC","Data Structure & Algorithms","Postman"],JV=[{title:"REST API Complete Guide",description:"A single, structured guide covering REST fundamentals, real-world API design, best practices, and common mistakes — built for developers who want clarity, not confusion.",link:"/docs/rest-api-fundamentals"},{title:"LeetCode 75 (Hard) Mastery",description:"A pattern-driven walkthrough of the toughest LeetCode problems, focused on deep understanding, optimal solutions, and interview-ready thinking.",link:"/docs/merge-string-alternatively"},{title:"Engineering Blogs & Insights",description:"Clear, practical writing on software engineering, problem-solving, and real lessons learned while building and learning — no fluff, just signal.",link:"/blog"}],XV={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},wd={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function ZV(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsxs("main",{className:"flex-1 pt-nav",children:[w.jsx("section",{className:"container mx-auto px-4 lg:px-8 py-16 md:py-24",children:w.jsxs(ae.div,{variants:XV,initial:"hidden",animate:"visible",className:"max-w-3xl",children:[w.jsx(ae.h1,{variants:wd,className:"text-4xl md:text-5xl font-bold mb-6",children:"About Me"}),w.jsxs(ae.div,{variants:wd,className:"text-lg text-muted-foreground space-y-4 mb-8",children:[w.jsxs("p",{children:["I'm a ",w.jsx("span",{className:"text-foreground font-medium",children:"B.Tech graduate"})," with a strong interest in technical writing and documentation. I enjoy breaking down complex technical concepts and presenting them in a clear, structured way."]}),w.jsxs("p",{children:["I’m building experience in areas like ",w.jsx("span",{className:"text-foreground font-medium",children:"API documentation, developer guides, and technical content"}),", with a focus on writing documentation that’s accurate, easy to follow, and useful for developers."]})]}),w.jsxs(ae.div,{variants:wd,className:"flex flex-wrap gap-4",children:[w.jsx(Ne,{asChild:!0,className:"gap-2",children:w.jsxs("a",{href:"#contact",children:[w.jsx(vf,{className:"h-4 w-4"}),"Get in Touch"]})}),w.jsx(Ne,{asChild:!0,variant:"outline",className:"gap-2",children:w.jsxs("a",{href:"/Docs/resume.html",target:"_blank",rel:"noopener noreferrer",children:[w.jsx(p2,{className:"h-4 w-4"}),"View Resume"]})})]})]})}),w.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Documentation Philosophy"}),w.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Great documentation isn't just about explaining features—it's about empowering users to succeed. These principles guide every document I create."})]}),w.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:YV.map((e,t)=>w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},className:"flex gap-4 p-6 rounded-xl bg-background border border-border",children:[w.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",children:w.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"font-semibold mb-1",children:e.title}),w.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},e.title))})]})}),w.jsx("section",{className:"py-16",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-8",children:w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Skills & Expertise"})}),w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap gap-3",children:QV.map(e=>w.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium",children:[w.jsx(f2,{className:"h-4 w-4 text-primary"}),e]},e))})]})}),w.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Writing Samples"}),w.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Explore documentation samples that demonstrate my approach to technical writing."})]}),w.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:JV.map((e,t)=>w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},children:w.jsxs(We,{to:e.link,className:"block h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group",children:[w.jsx("h3",{className:"font-semibold mb-2 group-hover:text-primary transition-colors",children:e.title}),w.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:e.description}),w.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-primary font-medium",children:["View Sample",w.jsx(yf,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform"})]})]})},e.title))})]})}),w.jsx("section",{id:"contact",className:"py-16",children:w.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"max-w-2xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Let's Connect"}),w.jsx("p",{className:"text-muted-foreground mb-8",children:"Interested in working together? I'm always open to discussing new opportunities, documentation projects, or just chatting about technical writing."}),w.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[w.jsx("a",{href:"https://github.com/Rucha-1111/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"GitHub",children:w.jsx(U1,{className:"h-5 w-5"})}),w.jsx("a",{href:"https://www.linkedin.com/in/rucha-gade/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"LinkedIn",children:w.jsx(fp,{className:"h-5 w-5"})})]}),w.jsx(Ne,{asChild:!0,size:"lg",className:"glow",children:w.jsxs("a",{href:"mailto:ruchagade20@gmail.com",className:"gap-2",children:[w.jsx(vf,{className:"h-4 w-4"}),"ruchagade20@gmail.com"]})})]})})})]}),w.jsx(Ta,{})]})}const eU=()=>{const e=sr();return b.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),w.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:w.jsxs("div",{className:"text-center",children:[w.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),w.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),w.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},tU=new Kj,nU=()=>w.jsx(Qj,{client:tU,children:w.jsx(QD,{children:w.jsxs(Tj,{children:[w.jsx(aI,{}),w.jsx(zI,{}),w.jsxs(qD,{basename:"/Docs",children:[w.jsx(JD,{}),w.jsxs(zD,{children:[w.jsx(vr,{path:"/",element:w.jsx(F_,{})}),w.jsx(vr,{path:"/docs",element:w.jsx(Bw,{})}),w.jsx(vr,{path:"/docs/:slug",element:w.jsx(Bw,{})}),w.jsx(vr,{path:"/blog",element:w.jsx($V,{})}),w.jsx(vr,{path:"/blog/:slug",element:w.jsx(KV,{})}),w.jsx(vr,{path:"/about",element:w.jsx(ZV,{})}),w.jsx(vr,{path:"*",element:w.jsx(eU,{})})]})]})]})})});c1(document.getElementById("root")).render(w.jsx(nU,{}));
