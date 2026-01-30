var Im=e=>{throw TypeError(e)};var au=(e,n,t)=>n.has(e)||Im("Cannot "+t);var L=(e,n,t)=>(au(e,n,"read from private field"),t?t.call(e):n.get(e)),pe=(e,n,t)=>n.has(e)?Im("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),ee=(e,n,t,r)=>(au(e,n,"write to private field"),r?r.call(e,t):n.set(e,t),t),Qe=(e,n,t)=>(au(e,n,"access private method"),t);var Ia=(e,n,t,r)=>({set _(i){ee(e,n,i,t)},get _(){return L(e,n,r)}});function KT(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yw={exports:{}},bc={},Jw={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),YT=Symbol.for("react.portal"),JT=Symbol.for("react.fragment"),QT=Symbol.for("react.strict_mode"),XT=Symbol.for("react.profiler"),ZT=Symbol.for("react.provider"),eP=Symbol.for("react.context"),nP=Symbol.for("react.forward_ref"),tP=Symbol.for("react.suspense"),rP=Symbol.for("react.memo"),iP=Symbol.for("react.lazy"),Rm=Symbol.iterator;function oP(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var Qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xw=Object.assign,Zw={};function No(e,n,t){this.props=e,this.context=n,this.refs=Zw,this.updater=t||Qw}No.prototype.isReactComponent={};No.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};No.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eb(){}eb.prototype=No.prototype;function uh(e,n,t){this.props=e,this.context=n,this.refs=Zw,this.updater=t||Qw}var dh=uh.prototype=new eb;dh.constructor=uh;Xw(dh,No.prototype);dh.isPureReactComponent=!0;var Dm=Array.isArray,nb=Object.prototype.hasOwnProperty,ph={current:null},tb={key:!0,ref:!0,__self:!0,__source:!0};function rb(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)nb.call(n,r)&&!tb.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ua,type:e,key:o,ref:s,props:i,_owner:ph.current}}function sP(e,n){return{$$typeof:ua,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ua}function aP(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Mm=/\/+/g;function lu(e,n){return typeof e=="object"&&e!==null&&e.key!=null?aP(""+e.key):n.toString(36)}function al(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ua:case YT:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+lu(s,0):r,Dm(i)?(t="",e!=null&&(t=e.replace(Mm,"$&/")+"/"),al(i,n,t,"",function(c){return c})):i!=null&&(hh(i)&&(i=sP(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",Dm(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+lu(o,a);s+=al(o,n,t,l,i)}else if(l=oP(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+lu(o,a++),s+=al(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ra(e,n,t){if(e==null)return e;var r=[],i=0;return al(e,r,"","",function(o){return n.call(t,o,i++)}),r}function lP(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var gn={current:null},ll={transition:null},cP={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:ll,ReactCurrentOwner:ph};function ib(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Ra,forEach:function(e,n,t){Ra(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ra(e,function(){n++}),n},toArray:function(e){return Ra(e,function(n){return n})||[]},only:function(e){if(!hh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=No;oe.Fragment=JT;oe.Profiler=XT;oe.PureComponent=uh;oe.StrictMode=QT;oe.Suspense=tP;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cP;oe.act=ib;oe.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xw({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=ph.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)nb.call(n,l)&&!tb.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ua,type:e.type,key:i,ref:o,props:r,_owner:s}};oe.createContext=function(e){return e={$$typeof:eP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ZT,_context:e},e.Consumer=e};oe.createElement=rb;oe.createFactory=function(e){var n=rb.bind(null,e);return n.type=e,n};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:nP,render:e}};oe.isValidElement=hh;oe.lazy=function(e){return{$$typeof:iP,_payload:{_status:-1,_result:e},_init:lP}};oe.memo=function(e,n){return{$$typeof:rP,type:e,compare:n===void 0?null:n}};oe.startTransition=function(e){var n=ll.transition;ll.transition={};try{e()}finally{ll.transition=n}};oe.unstable_act=ib;oe.useCallback=function(e,n){return gn.current.useCallback(e,n)};oe.useContext=function(e){return gn.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return gn.current.useDeferredValue(e)};oe.useEffect=function(e,n){return gn.current.useEffect(e,n)};oe.useId=function(){return gn.current.useId()};oe.useImperativeHandle=function(e,n,t){return gn.current.useImperativeHandle(e,n,t)};oe.useInsertionEffect=function(e,n){return gn.current.useInsertionEffect(e,n)};oe.useLayoutEffect=function(e,n){return gn.current.useLayoutEffect(e,n)};oe.useMemo=function(e,n){return gn.current.useMemo(e,n)};oe.useReducer=function(e,n,t){return gn.current.useReducer(e,n,t)};oe.useRef=function(e){return gn.current.useRef(e)};oe.useState=function(e){return gn.current.useState(e)};oe.useSyncExternalStore=function(e,n,t){return gn.current.useSyncExternalStore(e,n,t)};oe.useTransition=function(){return gn.current.useTransition()};oe.version="18.3.1";Jw.exports=oe;var x=Jw.exports;const V=wc(x),ob=KT({__proto__:null,default:V},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uP=x,dP=Symbol.for("react.element"),pP=Symbol.for("react.fragment"),hP=Object.prototype.hasOwnProperty,fP=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mP={key:!0,ref:!0,__self:!0,__source:!0};function sb(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)hP.call(n,r)&&!mP.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:dP,type:e,key:o,ref:s,props:i,_owner:fP.current}}bc.Fragment=pP;bc.jsx=sb;bc.jsxs=sb;Yw.exports=bc;var w=Yw.exports,ab={exports:{}},Bn={},lb={exports:{}},cb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,j){var k=R.length;R.push(j);e:for(;0<k;){var Y=k-1>>>1,K=R[Y];if(0<i(K,j))R[Y]=j,R[k]=K,k=Y;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],k=R.pop();if(k!==j){R[0]=k;e:for(var Y=0,K=R.length,P=K>>>1;Y<P;){var Q=2*(Y+1)-1,me=R[Q],le=Q+1,se=R[le];if(0>i(me,k))le<K&&0>i(se,me)?(R[Y]=se,R[le]=k,Y=le):(R[Y]=me,R[Q]=k,Y=Q);else if(le<K&&0>i(se,k))R[Y]=se,R[le]=k,Y=le;else break e}}return j}function i(R,j){var k=R.sortIndex-j.sortIndex;return k!==0?k:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,u=null,h=3,p=!1,m=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=R)r(c),j.sortIndex=j.expirationTime,n(l,j);else break;j=t(c)}}function S(R){if(g=!1,v(R),!m)if(t(l)!==null)m=!0,G(T);else{var j=t(c);j!==null&&U(S,j.startTime-R)}}function T(R,j){m=!1,g&&(g=!1,f(I),I=-1),p=!0;var k=h;try{for(v(j),u=t(l);u!==null&&(!(u.expirationTime>j)||R&&!N());){var Y=u.callback;if(typeof Y=="function"){u.callback=null,h=u.priorityLevel;var K=Y(u.expirationTime<=j);j=e.unstable_now(),typeof K=="function"?u.callback=K:u===t(l)&&r(l),v(j)}else r(l);u=t(l)}if(u!==null)var P=!0;else{var Q=t(c);Q!==null&&U(S,Q.startTime-j),P=!1}return P}finally{u=null,h=k,p=!1}}var C=!1,A=null,I=-1,M=5,E=-1;function N(){return!(e.unstable_now()-E<M)}function O(){if(A!==null){var R=e.unstable_now();E=R;var j=!0;try{j=A(!0,R)}finally{j?q():(C=!1,A=null)}}else C=!1}var q;if(typeof y=="function")q=function(){y(O)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,H=_.port2;_.port1.onmessage=O,q=function(){H.postMessage(null)}}else q=function(){b(O,0)};function G(R){A=R,C||(C=!0,q())}function U(R,j){I=b(function(){R(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,G(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var k=h;h=j;try{return R()}finally{h=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=h;h=R;try{return j()}finally{h=k}},e.unstable_scheduleCallback=function(R,j,k){var Y=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=k+K,R={id:d++,callback:j,priorityLevel:R,startTime:k,expirationTime:K,sortIndex:-1},k>Y?(R.sortIndex=k,n(c,R),t(l)===null&&R===t(c)&&(g?(f(I),I=-1):g=!0,U(S,k-Y))):(R.sortIndex=K,n(l,R),m||p||(m=!0,G(T))),R},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(R){var j=h;return function(){var k=h;h=j;try{return R.apply(this,arguments)}finally{h=k}}}})(cb);lb.exports=cb;var gP=lb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yP=x,Fn=gP;function F(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ub=new Set,Ms={};function ji(e,n){Co(e,n),Co(e+"Capture",n)}function Co(e,n){for(Ms[e]=n,e=0;e<n.length;e++)ub.add(n[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,vP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},jm={};function wP(e){return bd.call(jm,e)?!0:bd.call(Om,e)?!1:vP.test(e)?jm[e]=!0:(Om[e]=!0,!1)}function bP(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xP(e,n,t,r){if(n===null||typeof n>"u"||bP(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function yn(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Je[n]=new yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function mh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fh,mh);Je[n]=new yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fh,mh);Je[n]=new yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fh,mh);Je[n]=new yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function gh(e,n,t,r){var i=Je.hasOwnProperty(n)?Je[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xP(n,t,i,r)&&(t=null),r||i===null?wP(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rr=yP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),db=Symbol.for("react.provider"),pb=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),hb=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Jo(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,cu;function cs(e){if(cu===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);cu=n&&n[1]||""}return`
`+cu+e}var uu=!1;function du(e,n){if(!e||uu)return"";uu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?cs(e):""}function kP(e){switch(e.tag){case 5:return cs(e.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return e=du(e.type,!1),e;case 11:return e=du(e.type.render,!1),e;case 1:return e=du(e.type,!0),e;default:return""}}function Cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qi:return"Fragment";case Hi:return"Portal";case xd:return"Profiler";case yh:return"StrictMode";case kd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pb:return(e.displayName||"Context")+".Consumer";case db:return(e._context.displayName||"Context")+".Provider";case vh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wh:return n=e.displayName||null,n!==null?n:Cd(e.type)||"Memo";case br:n=e._payload,e=e._init;try{return Cd(e(n))}catch{}}return null}function SP(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(n);case 8:return n===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fb(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function CP(e){var n=fb(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ma(e){e._valueTracker||(e._valueTracker=CP(e))}function mb(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fb(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Td(e,n){var t=n.checked;return Re({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Nm(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Ur(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gb(e,n){n=n.checked,n!=null&&gh(e,"checked",n,!1)}function Pd(e,n){gb(e,n);var t=Ur(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ed(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ed(e,n.type,Ur(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _m(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ed(e,n,t){(n!=="number"||Rl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var us=Array.isArray;function oo(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Ur(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ad(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fm(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(F(92));if(us(t)){if(1<t.length)throw Error(F(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Ur(t)}}function yb(e,n){var t=Ur(n.value),r=Ur(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function zm(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vb(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oa,wb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Os(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TP=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(e){TP.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ms[n]=ms[e]})});function bb(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ms.hasOwnProperty(e)&&ms[e]?(""+n).trim():n+"px"}function xb(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=bb(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var PP=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(e,n){if(n){if(PP[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(F(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(F(61))}if(n.style!=null&&typeof n.style!="object")throw Error(F(62))}}function Dd(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function bh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Od=null,so=null,ao=null;function Bm(e){if(e=ha(e)){if(typeof Od!="function")throw Error(F(280));var n=e.stateNode;n&&(n=Tc(n),Od(e.stateNode,e.type,n))}}function kb(e){so?ao?ao.push(e):ao=[e]:so=e}function Sb(){if(so){var e=so,n=ao;if(ao=so=null,Bm(e),n)for(e=0;e<n.length;e++)Bm(n[e])}}function Cb(e,n){return e(n)}function Tb(){}var pu=!1;function Pb(e,n,t){if(pu)return e(n,t);pu=!0;try{return Cb(e,n,t)}finally{pu=!1,(so!==null||ao!==null)&&(Tb(),Sb())}}function js(e,n){var t=e.stateNode;if(t===null)return null;var r=Tc(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(F(231,n,typeof t));return t}var jd=!1;if(Jt)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){jd=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{jd=!1}function EP(e,n,t,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var gs=!1,Dl=null,Ml=!1,Ld=null,AP={onError:function(e){gs=!0,Dl=e}};function IP(e,n,t,r,i,o,s,a,l){gs=!1,Dl=null,EP.apply(AP,arguments)}function RP(e,n,t,r,i,o,s,a,l){if(IP.apply(this,arguments),gs){if(gs){var c=Dl;gs=!1,Dl=null}else throw Error(F(198));Ml||(Ml=!0,Ld=c)}}function Li(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eb(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Vm(e){if(Li(e)!==e)throw Error(F(188))}function DP(e){var n=e.alternate;if(!n){if(n=Li(e),n===null)throw Error(F(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Vm(i),e;if(o===r)return Vm(i),n;o=o.sibling}throw Error(F(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(F(189))}}if(t.alternate!==r)throw Error(F(190))}if(t.tag!==3)throw Error(F(188));return t.stateNode.current===t?e:n}function Ab(e){return e=DP(e),e!==null?Ib(e):null}function Ib(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ib(e);if(n!==null)return n;e=e.sibling}return null}var Rb=Fn.unstable_scheduleCallback,Um=Fn.unstable_cancelCallback,MP=Fn.unstable_shouldYield,OP=Fn.unstable_requestPaint,je=Fn.unstable_now,jP=Fn.unstable_getCurrentPriorityLevel,xh=Fn.unstable_ImmediatePriority,Db=Fn.unstable_UserBlockingPriority,Ol=Fn.unstable_NormalPriority,LP=Fn.unstable_LowPriority,Mb=Fn.unstable_IdlePriority,xc=null,Dt=null;function NP(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(xc,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:zP,_P=Math.log,FP=Math.LN2;function zP(e){return e>>>=0,e===0?32:31-(_P(e)/FP|0)|0}var ja=64,La=4194304;function ds(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=ds(a):(o&=s,o!==0&&(r=ds(o)))}else s=t&~i,s!==0?r=ds(s):o!==0&&(r=ds(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ft(n),i=1<<t,r|=e[t],n&=~i;return r}function BP(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VP(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ft(o),a=1<<s,l=i[s];l===-1?(!(a&t)||a&r)&&(i[s]=BP(a,n)):l<=n&&(e.expiredLanes|=a),o&=~a}}function Nd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ob(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function hu(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function da(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ft(n),e[n]=t}function UP(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ft(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function kh(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ft(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var fe=0;function jb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lb,Sh,Nb,_b,Fb,_d=!1,Na=[],Or=null,jr=null,Lr=null,Ls=new Map,Ns=new Map,kr=[],HP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(e,n){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Ls.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(n.pointerId)}}function Xo(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ha(n),n!==null&&Sh(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function qP(e,n,t,r,i){switch(n){case"focusin":return Or=Xo(Or,e,n,t,r,i),!0;case"dragenter":return jr=Xo(jr,e,n,t,r,i),!0;case"mouseover":return Lr=Xo(Lr,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Ls.set(o,Xo(Ls.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ns.set(o,Xo(Ns.get(o)||null,e,n,t,r,i)),!0}return!1}function zb(e){var n=pi(e.target);if(n!==null){var t=Li(n);if(t!==null){if(n=t.tag,n===13){if(n=Eb(t),n!==null){e.blockedOn=n,Fb(e.priority,function(){Nb(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fd(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Md=r,t.target.dispatchEvent(r),Md=null}else return n=ha(t),n!==null&&Sh(n),e.blockedOn=t,!1;n.shift()}return!0}function qm(e,n,t){cl(e)&&t.delete(n)}function WP(){_d=!1,Or!==null&&cl(Or)&&(Or=null),jr!==null&&cl(jr)&&(jr=null),Lr!==null&&cl(Lr)&&(Lr=null),Ls.forEach(qm),Ns.forEach(qm)}function Zo(e,n){e.blockedOn===n&&(e.blockedOn=null,_d||(_d=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,WP)))}function _s(e){function n(i){return Zo(i,e)}if(0<Na.length){Zo(Na[0],e);for(var t=1;t<Na.length;t++){var r=Na[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&Zo(Or,e),jr!==null&&Zo(jr,e),Lr!==null&&Zo(Lr,e),Ls.forEach(n),Ns.forEach(n),t=0;t<kr.length;t++)r=kr[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kr.length&&(t=kr[0],t.blockedOn===null);)zb(t),t.blockedOn===null&&kr.shift()}var lo=rr.ReactCurrentBatchConfig,Ll=!0;function $P(e,n,t,r){var i=fe,o=lo.transition;lo.transition=null;try{fe=1,Ch(e,n,t,r)}finally{fe=i,lo.transition=o}}function GP(e,n,t,r){var i=fe,o=lo.transition;lo.transition=null;try{fe=4,Ch(e,n,t,r)}finally{fe=i,lo.transition=o}}function Ch(e,n,t,r){if(Ll){var i=Fd(e,n,t,r);if(i===null)Su(e,n,r,Nl,t),Hm(e,r);else if(qP(i,e,n,t,r))r.stopPropagation();else if(Hm(e,r),n&4&&-1<HP.indexOf(e)){for(;i!==null;){var o=ha(i);if(o!==null&&Lb(o),o=Fd(e,n,t,r),o===null&&Su(e,n,r,Nl,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Su(e,n,r,null,t)}}var Nl=null;function Fd(e,n,t,r){if(Nl=null,e=bh(r),e=pi(e),e!==null)if(n=Li(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eb(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Nl=e,null}function Bb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jP()){case xh:return 1;case Db:return 4;case Ol:case LP:return 16;case Mb:return 536870912;default:return 16}default:return 16}}var Ir=null,Th=null,ul=null;function Vb(){if(ul)return ul;var e,n=Th,t=n.length,r,i="value"in Ir?Ir.value:Ir.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return ul=i.slice(e,1<r?1-r:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function Wm(){return!1}function Vn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_a:Wm,this.isPropagationStopped=Wm,this}return Re(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),n}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Vn(_o),pa=Re({},_o,{view:0,detail:0}),KP=Vn(pa),fu,mu,es,kc=Re({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(fu=e.screenX-es.screenX,mu=e.screenY-es.screenY):mu=fu=0,es=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),$m=Vn(kc),YP=Re({},kc,{dataTransfer:0}),JP=Vn(YP),QP=Re({},pa,{relatedTarget:0}),gu=Vn(QP),XP=Re({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),ZP=Vn(XP),eE=Re({},_o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nE=Vn(eE),tE=Re({},_o,{data:0}),Gm=Vn(tE),rE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oE[e])?!!n[e]:!1}function Eh(){return sE}var aE=Re({},pa,{key:function(e){if(e.key){var n=rE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lE=Vn(aE),cE=Re({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Vn(cE),uE=Re({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),dE=Vn(uE),pE=Re({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),hE=Vn(pE),fE=Re({},kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mE=Vn(fE),gE=[9,13,27,32],Ah=Jt&&"CompositionEvent"in window,ys=null;Jt&&"documentMode"in document&&(ys=document.documentMode);var yE=Jt&&"TextEvent"in window&&!ys,Ub=Jt&&(!Ah||ys&&8<ys&&11>=ys),Ym=" ",Jm=!1;function Hb(e,n){switch(e){case"keyup":return gE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function vE(e,n){switch(e){case"compositionend":return qb(n);case"keypress":return n.which!==32?null:(Jm=!0,Ym);case"textInput":return e=n.data,e===Ym&&Jm?null:e;default:return null}}function wE(e,n){if(Wi)return e==="compositionend"||!Ah&&Hb(e,n)?(e=Vb(),ul=Th=Ir=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ub&&n.locale!=="ko"?null:n.data;default:return null}}var bE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bE[e.type]:n==="textarea"}function Wb(e,n,t,r){kb(r),n=_l(n,"onChange"),0<n.length&&(t=new Ph("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var vs=null,Fs=null;function xE(e){tx(e,0)}function Sc(e){var n=Ki(e);if(mb(n))return e}function kE(e,n){if(e==="change")return n}var $b=!1;if(Jt){var yu;if(Jt){var vu="oninput"in document;if(!vu){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),vu=typeof Xm.oninput=="function"}yu=vu}else yu=!1;$b=yu&&(!document.documentMode||9<document.documentMode)}function Zm(){vs&&(vs.detachEvent("onpropertychange",Gb),Fs=vs=null)}function Gb(e){if(e.propertyName==="value"&&Sc(Fs)){var n=[];Wb(n,Fs,e,bh(e)),Pb(xE,n)}}function SE(e,n,t){e==="focusin"?(Zm(),vs=n,Fs=t,vs.attachEvent("onpropertychange",Gb)):e==="focusout"&&Zm()}function CE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(Fs)}function TE(e,n){if(e==="click")return Sc(n)}function PE(e,n){if(e==="input"||e==="change")return Sc(n)}function EE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yt=typeof Object.is=="function"?Object.is:EE;function zs(e,n){if(yt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!bd.call(n,i)||!yt(e[i],n[i]))return!1}return!0}function eg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ng(e,n){var t=eg(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=eg(t)}}function Kb(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kb(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yb(){for(var e=window,n=Rl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rl(e.document)}return n}function Ih(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function AE(e){var n=Yb(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Kb(t.ownerDocument.documentElement,t)){if(r!==null&&Ih(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ng(t,o);var s=ng(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var IE=Jt&&"documentMode"in document&&11>=document.documentMode,$i=null,zd=null,ws=null,Bd=!1;function tg(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bd||$i==null||$i!==Rl(r)||(r=$i,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&zs(ws,r)||(ws=r,r=_l(zd,"onSelect"),0<r.length&&(n=new Ph("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$i)))}function Fa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},wu={},Jb={};Jt&&(Jb=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Cc(e){if(wu[e])return wu[e];if(!Gi[e])return e;var n=Gi[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Jb)return wu[e]=n[t];return e}var Qb=Cc("animationend"),Xb=Cc("animationiteration"),Zb=Cc("animationstart"),ex=Cc("transitionend"),nx=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(e,n){nx.set(e,n),ji(n,[e])}for(var bu=0;bu<rg.length;bu++){var xu=rg[bu],RE=xu.toLowerCase(),DE=xu[0].toUpperCase()+xu.slice(1);Jr(RE,"on"+DE)}Jr(Qb,"onAnimationEnd");Jr(Xb,"onAnimationIteration");Jr(Zb,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(ex,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));function ig(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,RP(r,n,void 0,e),e.currentTarget=null}function tx(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ig(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ig(i,a,c),o=l}}}if(Ml)throw e=Ld,Ml=!1,Ld=null,e}function xe(e,n){var t=n[Wd];t===void 0&&(t=n[Wd]=new Set);var r=e+"__bubble";t.has(r)||(rx(n,e,2,!1),t.add(r))}function ku(e,n,t){var r=0;n&&(r|=4),rx(t,e,r,n)}var za="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[za]){e[za]=!0,ub.forEach(function(t){t!=="selectionchange"&&(ME.has(t)||ku(t,!1,e),ku(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[za]||(n[za]=!0,ku("selectionchange",!1,n))}}function rx(e,n,t,r){switch(Bb(n)){case 1:var i=$P;break;case 4:i=GP;break;default:i=Ch}t=i.bind(null,n,t,e),i=void 0,!jd||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Su(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=pi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Pb(function(){var c=o,d=bh(t),u=[];e:{var h=nx.get(e);if(h!==void 0){var p=Ph,m=e;switch(e){case"keypress":if(dl(t)===0)break e;case"keydown":case"keyup":p=lE;break;case"focusin":m="focus",p=gu;break;case"focusout":m="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dE;break;case Qb:case Xb:case Zb:p=ZP;break;case ex:p=hE;break;case"scroll":p=KP;break;case"wheel":p=mE;break;case"copy":case"cut":case"paste":p=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Km}var g=(n&4)!==0,b=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var y=c,v;y!==null;){v=y;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=js(y,f),S!=null&&g.push(Vs(y,S,v)))),b)break;y=y.return}0<g.length&&(h=new p(h,m,null,t,d),u.push({event:h,listeners:g}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&t!==Md&&(m=t.relatedTarget||t.fromElement)&&(pi(m)||m[Qt]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?pi(m):null,m!==null&&(b=Li(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(g=$m,S="onMouseLeave",f="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(g=Km,S="onPointerLeave",f="onPointerEnter",y="pointer"),b=p==null?h:Ki(p),v=m==null?h:Ki(m),h=new g(S,y+"leave",p,t,d),h.target=b,h.relatedTarget=v,S=null,pi(d)===c&&(g=new g(f,y+"enter",m,t,d),g.target=v,g.relatedTarget=b,S=g),b=S,p&&m)n:{for(g=p,f=m,y=0,v=g;v;v=Bi(v))y++;for(v=0,S=f;S;S=Bi(S))v++;for(;0<y-v;)g=Bi(g),y--;for(;0<v-y;)f=Bi(f),v--;for(;y--;){if(g===f||f!==null&&g===f.alternate)break n;g=Bi(g),f=Bi(f)}g=null}else g=null;p!==null&&og(u,h,p,g,!1),m!==null&&b!==null&&og(u,b,m,g,!0)}}e:{if(h=c?Ki(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=kE;else if(Qm(h))if($b)T=PE;else{T=CE;var C=SE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=TE);if(T&&(T=T(e,c))){Wb(u,T,t,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ed(h,"number",h.value)}switch(C=c?Ki(c):window,e){case"focusin":(Qm(C)||C.contentEditable==="true")&&($i=C,zd=c,ws=null);break;case"focusout":ws=zd=$i=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,tg(u,t,d);break;case"selectionchange":if(IE)break;case"keydown":case"keyup":tg(u,t,d)}var A;if(Ah)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Wi?Hb(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Ub&&t.locale!=="ko"&&(Wi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Wi&&(A=Vb()):(Ir=d,Th="value"in Ir?Ir.value:Ir.textContent,Wi=!0)),C=_l(c,I),0<C.length&&(I=new Gm(I,e,null,t,d),u.push({event:I,listeners:C}),A?I.data=A:(A=qb(t),A!==null&&(I.data=A)))),(A=yE?vE(e,t):wE(e,t))&&(c=_l(c,"onBeforeInput"),0<c.length&&(d=new Gm("onBeforeInput","beforeinput",null,t,d),u.push({event:d,listeners:c}),d.data=A))}tx(u,n)})}function Vs(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _l(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=js(e,t),o!=null&&r.unshift(Vs(e,o,i)),o=js(e,n),o!=null&&r.push(Vs(e,o,i))),e=e.return}return r}function Bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function og(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=js(t,o),l!=null&&s.unshift(Vs(t,l,a))):i||(l=js(t,o),l!=null&&s.push(Vs(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var OE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(OE,`
`).replace(jE,"")}function Ba(e,n,t){if(n=sg(n),sg(e)!==n&&t)throw Error(F(425))}function Fl(){}var Vd=null,Ud=null;function Hd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,LE=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(e){return ag.resolve(null).then(e).catch(_E)}:qd;function _E(e){setTimeout(function(){throw e})}function Cu(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),_s(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);_s(n)}function Nr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),It="__reactFiber$"+Fo,Us="__reactProps$"+Fo,Qt="__reactContainer$"+Fo,Wd="__reactEvents$"+Fo,FE="__reactListeners$"+Fo,zE="__reactHandles$"+Fo;function pi(e){var n=e[It];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qt]||t[It]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lg(e);e!==null;){if(t=e[It])return t;e=lg(e)}return n}e=t,t=e.parentNode}return null}function ha(e){return e=e[It]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Tc(e){return e[Us]||null}var $d=[],Yi=-1;function Qr(e){return{current:e}}function ke(e){0>Yi||(e.current=$d[Yi],$d[Yi]=null,Yi--)}function we(e,n){Yi++,$d[Yi]=e.current,e.current=n}var Hr={},on=Qr(Hr),Sn=Qr(!1),Ei=Hr;function To(e,n){var t=e.type.contextTypes;if(!t)return Hr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Cn(e){return e=e.childContextTypes,e!=null}function zl(){ke(Sn),ke(on)}function cg(e,n,t){if(on.current!==Hr)throw Error(F(168));we(on,n),we(Sn,t)}function ix(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(F(108,SP(e)||"Unknown",i));return Re({},t,r)}function Bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,Ei=on.current,we(on,e),we(Sn,Sn.current),!0}function ug(e,n,t){var r=e.stateNode;if(!r)throw Error(F(169));t?(e=ix(e,n,Ei),r.__reactInternalMemoizedMergedChildContext=e,ke(Sn),ke(on),we(on,e)):ke(Sn),we(Sn,t)}var Wt=null,Pc=!1,Tu=!1;function ox(e){Wt===null?Wt=[e]:Wt.push(e)}function BE(e){Pc=!0,ox(e)}function Xr(){if(!Tu&&Wt!==null){Tu=!0;var e=0,n=fe;try{var t=Wt;for(fe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Wt=null,Pc=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),Rb(xh,Xr),i}finally{fe=n,Tu=!1}}return null}var Ji=[],Qi=0,Vl=null,Ul=0,Wn=[],$n=0,Ai=null,Gt=1,Kt="";function li(e,n){Ji[Qi++]=Ul,Ji[Qi++]=Vl,Vl=e,Ul=n}function sx(e,n,t){Wn[$n++]=Gt,Wn[$n++]=Kt,Wn[$n++]=Ai,Ai=e;var r=Gt;e=Kt;var i=32-ft(r)-1;r&=~(1<<i),t+=1;var o=32-ft(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gt=1<<32-ft(n)+i|t<<i|r,Kt=o+e}else Gt=1<<o|t<<i|r,Kt=e}function Rh(e){e.return!==null&&(li(e,1),sx(e,1,0))}function Dh(e){for(;e===Vl;)Vl=Ji[--Qi],Ji[Qi]=null,Ul=Ji[--Qi],Ji[Qi]=null;for(;e===Ai;)Ai=Wn[--$n],Wn[$n]=null,Kt=Wn[--$n],Wn[$n]=null,Gt=Wn[--$n],Wn[$n]=null}var Ln=null,jn=null,Te=!1,ht=null;function ax(e,n){var t=Kn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function dg(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ln=e,jn=Nr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ln=e,jn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ai!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Kn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ln=e,jn=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kd(e){if(Te){var n=jn;if(n){var t=n;if(!dg(e,n)){if(Gd(e))throw Error(F(418));n=Nr(t.nextSibling);var r=Ln;n&&dg(e,n)?ax(r,t):(e.flags=e.flags&-4097|2,Te=!1,Ln=e)}}else{if(Gd(e))throw Error(F(418));e.flags=e.flags&-4097|2,Te=!1,Ln=e}}}function pg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ln=e}function Va(e){if(e!==Ln)return!1;if(!Te)return pg(e),Te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Hd(e.type,e.memoizedProps)),n&&(n=jn)){if(Gd(e))throw lx(),Error(F(418));for(;n;)ax(e,n),n=Nr(n.nextSibling)}if(pg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){jn=Nr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}jn=null}}else jn=Ln?Nr(e.stateNode.nextSibling):null;return!0}function lx(){for(var e=jn;e;)e=Nr(e.nextSibling)}function Po(){jn=Ln=null,Te=!1}function Mh(e){ht===null?ht=[e]:ht.push(e)}var VE=rr.ReactCurrentBatchConfig;function ns(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(F(309));var r=t.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(F(284));if(!t._owner)throw Error(F(290,e))}return e}function Ua(e,n){throw e=Object.prototype.toString.call(n),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hg(e){var n=e._init;return n(e._payload)}function cx(e){function n(f,y){if(e){var v=f.deletions;v===null?(f.deletions=[y],f.flags|=16):v.push(y)}}function t(f,y){if(!e)return null;for(;y!==null;)n(f,y),y=y.sibling;return null}function r(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function i(f,y){return f=Br(f,y),f.index=0,f.sibling=null,f}function o(f,y,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<y?(f.flags|=2,y):v):(f.flags|=2,y)):(f.flags|=1048576,y)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,y,v,S){return y===null||y.tag!==6?(y=Mu(v,f.mode,S),y.return=f,y):(y=i(y,v),y.return=f,y)}function l(f,y,v,S){var T=v.type;return T===qi?d(f,y,v.props.children,S,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===br&&hg(T)===y.type)?(S=i(y,v.props),S.ref=ns(f,y,v),S.return=f,S):(S=vl(v.type,v.key,v.props,null,f.mode,S),S.ref=ns(f,y,v),S.return=f,S)}function c(f,y,v,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Ou(v,f.mode,S),y.return=f,y):(y=i(y,v.children||[]),y.return=f,y)}function d(f,y,v,S,T){return y===null||y.tag!==7?(y=Ci(v,f.mode,S,T),y.return=f,y):(y=i(y,v),y.return=f,y)}function u(f,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Mu(""+y,f.mode,v),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return v=vl(y.type,y.key,y.props,null,f.mode,v),v.ref=ns(f,null,y),v.return=f,v;case Hi:return y=Ou(y,f.mode,v),y.return=f,y;case br:var S=y._init;return u(f,S(y._payload),v)}if(us(y)||Jo(y))return y=Ci(y,f.mode,v,null),y.return=f,y;Ua(f,y)}return null}function h(f,y,v,S){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(f,y,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return v.key===T?l(f,y,v,S):null;case Hi:return v.key===T?c(f,y,v,S):null;case br:return T=v._init,h(f,y,T(v._payload),S)}if(us(v)||Jo(v))return T!==null?null:d(f,y,v,S,null);Ua(f,v)}return null}function p(f,y,v,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(y,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return f=f.get(S.key===null?v:S.key)||null,l(y,f,S,T);case Hi:return f=f.get(S.key===null?v:S.key)||null,c(y,f,S,T);case br:var C=S._init;return p(f,y,v,C(S._payload),T)}if(us(S)||Jo(S))return f=f.get(v)||null,d(y,f,S,T,null);Ua(y,S)}return null}function m(f,y,v,S){for(var T=null,C=null,A=y,I=y=0,M=null;A!==null&&I<v.length;I++){A.index>I?(M=A,A=null):M=A.sibling;var E=h(f,A,v[I],S);if(E===null){A===null&&(A=M);break}e&&A&&E.alternate===null&&n(f,A),y=o(E,y,I),C===null?T=E:C.sibling=E,C=E,A=M}if(I===v.length)return t(f,A),Te&&li(f,I),T;if(A===null){for(;I<v.length;I++)A=u(f,v[I],S),A!==null&&(y=o(A,y,I),C===null?T=A:C.sibling=A,C=A);return Te&&li(f,I),T}for(A=r(f,A);I<v.length;I++)M=p(A,f,I,v[I],S),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?I:M.key),y=o(M,y,I),C===null?T=M:C.sibling=M,C=M);return e&&A.forEach(function(N){return n(f,N)}),Te&&li(f,I),T}function g(f,y,v,S){var T=Jo(v);if(typeof T!="function")throw Error(F(150));if(v=T.call(v),v==null)throw Error(F(151));for(var C=T=null,A=y,I=y=0,M=null,E=v.next();A!==null&&!E.done;I++,E=v.next()){A.index>I?(M=A,A=null):M=A.sibling;var N=h(f,A,E.value,S);if(N===null){A===null&&(A=M);break}e&&A&&N.alternate===null&&n(f,A),y=o(N,y,I),C===null?T=N:C.sibling=N,C=N,A=M}if(E.done)return t(f,A),Te&&li(f,I),T;if(A===null){for(;!E.done;I++,E=v.next())E=u(f,E.value,S),E!==null&&(y=o(E,y,I),C===null?T=E:C.sibling=E,C=E);return Te&&li(f,I),T}for(A=r(f,A);!E.done;I++,E=v.next())E=p(A,f,I,E.value,S),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?I:E.key),y=o(E,y,I),C===null?T=E:C.sibling=E,C=E);return e&&A.forEach(function(O){return n(f,O)}),Te&&li(f,I),T}function b(f,y,v,S){if(typeof v=="object"&&v!==null&&v.type===qi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:e:{for(var T=v.key,C=y;C!==null;){if(C.key===T){if(T=v.type,T===qi){if(C.tag===7){t(f,C.sibling),y=i(C,v.props.children),y.return=f,f=y;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===br&&hg(T)===C.type){t(f,C.sibling),y=i(C,v.props),y.ref=ns(f,C,v),y.return=f,f=y;break e}t(f,C);break}else n(f,C);C=C.sibling}v.type===qi?(y=Ci(v.props.children,f.mode,S,v.key),y.return=f,f=y):(S=vl(v.type,v.key,v.props,null,f.mode,S),S.ref=ns(f,y,v),S.return=f,f=S)}return s(f);case Hi:e:{for(C=v.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){t(f,y.sibling),y=i(y,v.children||[]),y.return=f,f=y;break e}else{t(f,y);break}else n(f,y);y=y.sibling}y=Ou(v,f.mode,S),y.return=f,f=y}return s(f);case br:return C=v._init,b(f,y,C(v._payload),S)}if(us(v))return m(f,y,v,S);if(Jo(v))return g(f,y,v,S);Ua(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(t(f,y.sibling),y=i(y,v),y.return=f,f=y):(t(f,y),y=Mu(v,f.mode,S),y.return=f,f=y),s(f)):t(f,y)}return b}var Eo=cx(!0),ux=cx(!1),Hl=Qr(null),ql=null,Xi=null,Oh=null;function jh(){Oh=Xi=ql=null}function Lh(e){var n=Hl.current;ke(Hl),e._currentValue=n}function Yd(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function co(e,n){ql=e,Oh=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(kn=!0),e.firstContext=null)}function Xn(e){var n=e._currentValue;if(Oh!==e)if(e={context:e,memoizedValue:n,next:null},Xi===null){if(ql===null)throw Error(F(308));Xi=e,ql.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return n}var hi=null;function Nh(e){hi===null?hi=[e]:hi.push(e)}function dx(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Nh(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xt(e,r)}function Xt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xr=!1;function _h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function px(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function _r(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Xt(e,t)}return i=r.interleaved,i===null?(n.next=n,Nh(r)):(n.next=i.next,i.next=n),r.interleaved=n,Xt(e,t)}function pl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kh(e,t)}}function fg(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wl(e,n,t,r){var i=e.updateQueue;xr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var u=i.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,g=a;switch(h=n,p=t,g.tag){case 1:if(m=g.payload,typeof m=="function"){u=m.call(p,u,h);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,h=typeof m=="function"?m.call(p,u,h):m,h==null)break e;u=Re({},u,h);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=u):d=d.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Ri|=s,e.lanes=s,e.memoizedState=u}}function mg(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fa={},Mt=Qr(fa),Hs=Qr(fa),qs=Qr(fa);function fi(e){if(e===fa)throw Error(F(174));return e}function Fh(e,n){switch(we(qs,n),we(Hs,e),we(Mt,fa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Id(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Id(n,e)}ke(Mt),we(Mt,n)}function Ao(){ke(Mt),ke(Hs),ke(qs)}function hx(e){fi(qs.current);var n=fi(Mt.current),t=Id(n,e.type);n!==t&&(we(Hs,e),we(Mt,t))}function zh(e){Hs.current===e&&(ke(Mt),ke(Hs))}var Ee=Qr(0);function $l(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pu=[];function Bh(){for(var e=0;e<Pu.length;e++)Pu[e]._workInProgressVersionPrimary=null;Pu.length=0}var hl=rr.ReactCurrentDispatcher,Eu=rr.ReactCurrentBatchConfig,Ii=0,Ie=null,Ve=null,qe=null,Gl=!1,bs=!1,Ws=0,UE=0;function Xe(){throw Error(F(321))}function Vh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!yt(e[t],n[t]))return!1;return!0}function Uh(e,n,t,r,i,o){if(Ii=o,Ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hl.current=e===null||e.memoizedState===null?$E:GE,e=t(r,i),bs){o=0;do{if(bs=!1,Ws=0,25<=o)throw Error(F(301));o+=1,qe=Ve=null,n.updateQueue=null,hl.current=KE,e=t(r,i)}while(bs)}if(hl.current=Kl,n=Ve!==null&&Ve.next!==null,Ii=0,qe=Ve=Ie=null,Gl=!1,n)throw Error(F(300));return e}function Hh(){var e=Ws!==0;return Ws=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ie.memoizedState=qe=e:qe=qe.next=e,qe}function Zn(){if(Ve===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=qe===null?Ie.memoizedState:qe.next;if(n!==null)qe=n,Ve=e;else{if(e===null)throw Error(F(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},qe===null?Ie.memoizedState=qe=e:qe=qe.next=e}return qe}function $s(e,n){return typeof n=="function"?n(e):n}function Au(e){var n=Zn(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Ii&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=r):l=l.next=u,Ie.lanes|=d,Ri|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,yt(r,n.memoizedState)||(kn=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,Ri|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Iu(e){var n=Zn(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yt(o,n.memoizedState)||(kn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function fx(){}function mx(e,n){var t=Ie,r=Zn(),i=n(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,kn=!0),r=r.queue,qh(vx.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||qe!==null&&qe.memoizedState.tag&1){if(t.flags|=2048,Gs(9,yx.bind(null,t,r,i,n),void 0,null),$e===null)throw Error(F(349));Ii&30||gx(t,n,i)}return i}function gx(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ie.updateQueue,n===null?(n={lastEffect:null,stores:null},Ie.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yx(e,n,t,r){n.value=t,n.getSnapshot=r,wx(n)&&bx(e)}function vx(e,n,t){return t(function(){wx(n)&&bx(e)})}function wx(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!yt(e,t)}catch{return!0}}function bx(e){var n=Xt(e,1);n!==null&&mt(n,e,1,-1)}function gg(e){var n=Ct();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},n.queue=e,e=e.dispatch=WE.bind(null,Ie,e),[n.memoizedState,e]}function Gs(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ie.updateQueue,n===null?(n={lastEffect:null,stores:null},Ie.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function xx(){return Zn().memoizedState}function fl(e,n,t,r){var i=Ct();Ie.flags|=e,i.memoizedState=Gs(1|n,t,void 0,r===void 0?null:r)}function Ec(e,n,t,r){var i=Zn();r=r===void 0?null:r;var o=void 0;if(Ve!==null){var s=Ve.memoizedState;if(o=s.destroy,r!==null&&Vh(r,s.deps)){i.memoizedState=Gs(n,t,o,r);return}}Ie.flags|=e,i.memoizedState=Gs(1|n,t,o,r)}function yg(e,n){return fl(8390656,8,e,n)}function qh(e,n){return Ec(2048,8,e,n)}function kx(e,n){return Ec(4,2,e,n)}function Sx(e,n){return Ec(4,4,e,n)}function Cx(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tx(e,n,t){return t=t!=null?t.concat([e]):null,Ec(4,4,Cx.bind(null,n,e),t)}function Wh(){}function Px(e,n){var t=Zn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ex(e,n){var t=Zn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ax(e,n,t){return Ii&21?(yt(t,n)||(t=Ob(),Ie.lanes|=t,Ri|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,kn=!0),e.memoizedState=t)}function HE(e,n){var t=fe;fe=t!==0&&4>t?t:4,e(!0);var r=Eu.transition;Eu.transition={};try{e(!1),n()}finally{fe=t,Eu.transition=r}}function Ix(){return Zn().memoizedState}function qE(e,n,t){var r=zr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Rx(e))Dx(n,t);else if(t=dx(e,n,t,r),t!==null){var i=mn();mt(t,e,r,i),Mx(t,n,r)}}function WE(e,n,t){var r=zr(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rx(e))Dx(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,yt(a,s)){var l=n.interleaved;l===null?(i.next=i,Nh(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=dx(e,n,i,r),t!==null&&(i=mn(),mt(t,e,r,i),Mx(t,n,r))}}function Rx(e){var n=e.alternate;return e===Ie||n!==null&&n===Ie}function Dx(e,n){bs=Gl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Mx(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kh(e,t)}}var Kl={readContext:Xn,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},$E={readContext:Xn,useCallback:function(e,n){return Ct().memoizedState=[e,n===void 0?null:n],e},useContext:Xn,useEffect:yg,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fl(4194308,4,Cx.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){return fl(4,2,e,n)},useMemo:function(e,n){var t=Ct();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ct();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=qE.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var n=Ct();return e={current:e},n.memoizedState=e},useState:gg,useDebugValue:Wh,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=gg(!1),n=e[0];return e=HE.bind(null,e[1]),Ct().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ie,i=Ct();if(Te){if(t===void 0)throw Error(F(407));t=t()}else{if(t=n(),$e===null)throw Error(F(349));Ii&30||gx(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,yg(vx.bind(null,r,o,e),[e]),r.flags|=2048,Gs(9,yx.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ct(),n=$e.identifierPrefix;if(Te){var t=Kt,r=Gt;t=(r&~(1<<32-ft(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ws++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=UE++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},GE={readContext:Xn,useCallback:Px,useContext:Xn,useEffect:qh,useImperativeHandle:Tx,useInsertionEffect:kx,useLayoutEffect:Sx,useMemo:Ex,useReducer:Au,useRef:xx,useState:function(){return Au($s)},useDebugValue:Wh,useDeferredValue:function(e){var n=Zn();return Ax(n,Ve.memoizedState,e)},useTransition:function(){var e=Au($s)[0],n=Zn().memoizedState;return[e,n]},useMutableSource:fx,useSyncExternalStore:mx,useId:Ix,unstable_isNewReconciler:!1},KE={readContext:Xn,useCallback:Px,useContext:Xn,useEffect:qh,useImperativeHandle:Tx,useInsertionEffect:kx,useLayoutEffect:Sx,useMemo:Ex,useReducer:Iu,useRef:xx,useState:function(){return Iu($s)},useDebugValue:Wh,useDeferredValue:function(e){var n=Zn();return Ve===null?n.memoizedState=e:Ax(n,Ve.memoizedState,e)},useTransition:function(){var e=Iu($s)[0],n=Zn().memoizedState;return[e,n]},useMutableSource:fx,useSyncExternalStore:mx,useId:Ix,unstable_isNewReconciler:!1};function lt(e,n){if(e&&e.defaultProps){n=Re({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Jd(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Re({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ac={isMounted:function(e){return(e=e._reactInternals)?Li(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=mn(),i=zr(e),o=Yt(r,i);o.payload=n,t!=null&&(o.callback=t),n=_r(e,o,i),n!==null&&(mt(n,e,i,r),pl(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=mn(),i=zr(e),o=Yt(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=_r(e,o,i),n!==null&&(mt(n,e,i,r),pl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=mn(),r=zr(e),i=Yt(t,r);i.tag=2,n!=null&&(i.callback=n),n=_r(e,i,r),n!==null&&(mt(n,e,r,t),pl(n,e,r))}};function vg(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!zs(t,r)||!zs(i,o):!0}function Ox(e,n,t){var r=!1,i=Hr,o=n.contextType;return typeof o=="object"&&o!==null?o=Xn(o):(i=Cn(n)?Ei:on.current,r=n.contextTypes,o=(r=r!=null)?To(e,i):Hr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ac,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function wg(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ac.enqueueReplaceState(n,n.state,null)}function Qd(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},_h(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Xn(o):(o=Cn(n)?Ei:on.current,i.context=To(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Jd(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ac.enqueueReplaceState(i,i.state,null),Wl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Io(e,n){try{var t="",r=n;do t+=kP(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ru(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xd(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var YE=typeof WeakMap=="function"?WeakMap:Map;function jx(e,n,t){t=Yt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Jl||(Jl=!0,lp=r),Xd(e,n)},t}function Lx(e,n,t){t=Yt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Xd(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Xd(e,n),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function bg(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new YE;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=cA.bind(null,e,n,t),n.then(e,e))}function xg(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kg(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Yt(-1,1),n.tag=2,_r(t,n,1))),t.lanes|=1),e)}var JE=rr.ReactCurrentOwner,kn=!1;function un(e,n,t,r){n.child=e===null?ux(n,null,t,r):Eo(n,e.child,t,r)}function Sg(e,n,t,r,i){t=t.render;var o=n.ref;return co(n,i),r=Uh(e,n,t,r,o,i),t=Hh(),e!==null&&!kn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Zt(e,n,i)):(Te&&t&&Rh(n),n.flags|=1,un(e,n,r,i),n.child)}function Cg(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Zh(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Nx(e,n,o,r,i)):(e=vl(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:zs,t(s,r)&&e.ref===n.ref)return Zt(e,n,i)}return n.flags|=1,e=Br(o,r),e.ref=n.ref,e.return=n,n.child=e}function Nx(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(zs(o,r)&&e.ref===n.ref)if(kn=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(kn=!0);else return n.lanes=e.lanes,Zt(e,n,i)}return Zd(e,n,t,r,i)}function _x(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(eo,Mn),Mn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(eo,Mn),Mn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,we(eo,Mn),Mn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,we(eo,Mn),Mn|=r;return un(e,n,i,t),n.child}function Fx(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zd(e,n,t,r,i){var o=Cn(t)?Ei:on.current;return o=To(n,o),co(n,i),t=Uh(e,n,t,r,o,i),r=Hh(),e!==null&&!kn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Zt(e,n,i)):(Te&&r&&Rh(n),n.flags|=1,un(e,n,t,i),n.child)}function Tg(e,n,t,r,i){if(Cn(t)){var o=!0;Bl(n)}else o=!1;if(co(n,i),n.stateNode===null)ml(e,n),Ox(n,t,r),Qd(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=Cn(t)?Ei:on.current,c=To(n,c));var d=t.getDerivedStateFromProps,u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&wg(n,s,r,c),xr=!1;var h=n.memoizedState;s.state=h,Wl(n,r,s,i),l=n.memoizedState,a!==r||h!==l||Sn.current||xr?(typeof d=="function"&&(Jd(n,t,d,r),l=n.memoizedState),(a=xr||vg(n,t,a,r,h,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,px(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:lt(n.type,a),s.props=c,u=n.pendingProps,h=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=Cn(t)?Ei:on.current,l=To(n,l));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||h!==l)&&wg(n,s,r,l),xr=!1,h=n.memoizedState,s.state=h,Wl(n,r,s,i);var m=n.memoizedState;a!==u||h!==m||Sn.current||xr?(typeof p=="function"&&(Jd(n,t,p,r),m=n.memoizedState),(c=xr||vg(n,t,c,r,h,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),s.props=r,s.state=m,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return ep(e,n,t,r,o,i)}function ep(e,n,t,r,i,o){Fx(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&ug(n,t,!1),Zt(e,n,o);r=n.stateNode,JE.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Eo(n,e.child,null,o),n.child=Eo(n,null,a,o)):un(e,n,a,o),n.memoizedState=r.state,i&&ug(n,t,!0),n.child}function zx(e){var n=e.stateNode;n.pendingContext?cg(e,n.pendingContext,n.pendingContext!==n.context):n.context&&cg(e,n.context,!1),Fh(e,n.containerInfo)}function Pg(e,n,t,r,i){return Po(),Mh(i),n.flags|=256,un(e,n,t,r),n.child}var np={dehydrated:null,treeContext:null,retryLane:0};function tp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bx(e,n,t){var r=n.pendingProps,i=Ee.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return Kd(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Dc(s,r,0,null),e=Ci(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=tp(t),n.memoizedState=np,e):$h(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return QE(e,n,s,r,a,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Br(a,o):(o=Ci(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?tp(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=np,r}return o=e.child,e=o.sibling,r=Br(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $h(e,n){return n=Dc({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ha(e,n,t,r){return r!==null&&Mh(r),Eo(n,e.child,null,t),e=$h(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function QE(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=Ru(Error(F(422))),Ha(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Dc({mode:"visible",children:r.children},i,0,null),o=Ci(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Eo(n,e.child,null,s),n.child.memoizedState=tp(s),n.memoizedState=np,o);if(!(n.mode&1))return Ha(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(F(419)),r=Ru(o,r,void 0),Ha(e,n,s,r)}if(a=(s&e.childLanes)!==0,kn||a){if(r=$e,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),mt(r,e,i,-1))}return Xh(),r=Ru(Error(F(421))),Ha(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=uA.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,jn=Nr(i.nextSibling),Ln=n,Te=!0,ht=null,e!==null&&(Wn[$n++]=Gt,Wn[$n++]=Kt,Wn[$n++]=Ai,Gt=e.id,Kt=e.overflow,Ai=n),n=$h(n,r.children),n.flags|=4096,n)}function Eg(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yd(e.return,n,t)}function Du(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Vx(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(un(e,n,r.children,t),r=Ee.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,t,n);else if(e.tag===19)Eg(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ee,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&$l(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Du(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$l(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Du(n,!0,t,null,o);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ml(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Zt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ri|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(F(153));if(n.child!==null){for(e=n.child,t=Br(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Br(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function XE(e,n,t){switch(n.tag){case 3:zx(n),Po();break;case 5:hx(n);break;case 1:Cn(n.type)&&Bl(n);break;case 4:Fh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;we(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(we(Ee,Ee.current&1),n.flags|=128,null):t&n.child.childLanes?Bx(e,n,t):(we(Ee,Ee.current&1),e=Zt(e,n,t),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Vx(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),r)break;return null;case 22:case 23:return n.lanes=0,_x(e,n,t)}return Zt(e,n,t)}var Ux,rp,Hx,qx;Ux=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rp=function(){};Hx=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,fi(Mt.current);var o=null;switch(t){case"input":i=Td(e,i),r=Td(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Ad(e,i),r=Ad(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fl)}Rd(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};qx=function(e,n,t,r){t!==r&&(n.flags|=4)};function ts(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ZE(e,n,t){var r=n.pendingProps;switch(Dh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Cn(n.type)&&zl(),Ze(n),null;case 3:return r=n.stateNode,Ao(),ke(Sn),ke(on),Bh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Va(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ht!==null&&(dp(ht),ht=null))),rp(e,n),Ze(n),null;case 5:zh(n);var i=fi(qs.current);if(t=n.type,e!==null&&n.stateNode!=null)Hx(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(F(166));return Ze(n),null}if(e=fi(Mt.current),Va(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[It]=n,r[Us]=o,e=(n.mode&1)!==0,t){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<ps.length;i++)xe(ps[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Nm(r,o),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},xe("invalid",r);break;case"textarea":Fm(r,o),xe("invalid",r)}Rd(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ba(r.textContent,a,e),i=["children",""+a]):Ms.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&xe("scroll",r)}switch(t){case"input":Ma(r),_m(r,o,!0);break;case"textarea":Ma(r),zm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vb(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[It]=n,e[Us]=r,Ux(e,n,!1,!1),n.stateNode=e;e:{switch(s=Dd(t,r),t){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ps.length;i++)xe(ps[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Nm(e,r),i=Td(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Fm(e,r),i=Ad(e,r),xe("invalid",e);break;default:i=r}Rd(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?xb(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wb(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Os(e,l):typeof l=="number"&&Os(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ms.hasOwnProperty(o)?l!=null&&o==="onScroll"&&xe("scroll",e):l!=null&&gh(e,o,l,s))}switch(t){case"input":Ma(e),_m(e,r,!1);break;case"textarea":Ma(e),zm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ur(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?oo(e,!!r.multiple,o,!1):r.defaultValue!=null&&oo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)qx(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(F(166));if(t=fi(qs.current),fi(Mt.current),Va(n)){if(r=n.stateNode,t=n.memoizedProps,r[It]=n,(o=r.nodeValue!==t)&&(e=Ln,e!==null))switch(e.tag){case 3:Ba(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[It]=n,n.stateNode=r}return Ze(n),null;case 13:if(ke(Ee),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&jn!==null&&n.mode&1&&!(n.flags&128))lx(),Po(),n.flags|=98560,o=!1;else if(o=Va(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[It]=n}else Po(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ze(n),o=!1}else ht!==null&&(dp(ht),ht=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Ee.current&1?He===0&&(He=3):Xh())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return Ao(),rp(e,n),e===null&&Bs(n.stateNode.containerInfo),Ze(n),null;case 10:return Lh(n.type._context),Ze(n),null;case 17:return Cn(n.type)&&zl(),Ze(n),null;case 19:if(ke(Ee),o=n.memoizedState,o===null)return Ze(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)ts(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=$l(e),s!==null){for(n.flags|=128,ts(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Ee,Ee.current&1|2),n.child}e=e.sibling}o.tail!==null&&je()>Ro&&(n.flags|=128,r=!0,ts(o,!1),n.lanes=4194304)}else{if(!r)if(e=$l(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ts(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return Ze(n),null}else 2*je()-o.renderingStartTime>Ro&&t!==1073741824&&(n.flags|=128,r=!0,ts(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=je(),n.sibling=null,t=Ee.current,we(Ee,r?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return Qh(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Mn&1073741824&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(F(156,n.tag))}function eA(e,n){switch(Dh(n),n.tag){case 1:return Cn(n.type)&&zl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ao(),ke(Sn),ke(on),Bh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zh(n),null;case 13:if(ke(Ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(F(340));Po()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ke(Ee),null;case 4:return Ao(),null;case 10:return Lh(n.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var qa=!1,nn=!1,nA=typeof WeakSet=="function"?WeakSet:Set,$=null;function Zi(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Me(e,n,r)}else t.current=null}function ip(e,n,t){try{t()}catch(r){Me(e,n,r)}}var Ag=!1;function tA(e,n){if(Vd=Ll,e=Yb(),Ih(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,c=0,d=0,u=e,h=null;n:for(;;){for(var p;u!==t||i!==0&&u.nodeType!==3||(a=s+i),u!==o||r!==0&&u.nodeType!==3||(l=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===e)break n;if(h===t&&++c===i&&(a=s),h===o&&++d===r&&(l=s),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ud={focusedElem:e,selectionRange:t},Ll=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,b=m.memoizedState,f=n.stateNode,y=f.getSnapshotBeforeUpdate(n.elementType===n.type?g:lt(n.type,g),b);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){Me(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return m=Ag,Ag=!1,m}function xs(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ip(n,t,o)}i=i.next}while(i!==r)}}function Ic(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function op(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wx(e){var n=e.alternate;n!==null&&(e.alternate=null,Wx(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[It],delete n[Us],delete n[Wd],delete n[FE],delete n[zE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $x(e){return e.tag===5||e.tag===3||e.tag===4}function Ig(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$x(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fl));else if(r!==4&&(e=e.child,e!==null))for(sp(e,n,t),e=e.sibling;e!==null;)sp(e,n,t),e=e.sibling}function ap(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ap(e,n,t),e=e.sibling;e!==null;)ap(e,n,t),e=e.sibling}var Ge=null,pt=!1;function hr(e,n,t){for(t=t.child;t!==null;)Gx(e,n,t),t=t.sibling}function Gx(e,n,t){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(xc,t)}catch{}switch(t.tag){case 5:nn||Zi(t,n);case 6:var r=Ge,i=pt;Ge=null,hr(e,n,t),Ge=r,pt=i,Ge!==null&&(pt?(e=Ge,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ge.removeChild(t.stateNode));break;case 18:Ge!==null&&(pt?(e=Ge,t=t.stateNode,e.nodeType===8?Cu(e.parentNode,t):e.nodeType===1&&Cu(e,t),_s(e)):Cu(Ge,t.stateNode));break;case 4:r=Ge,i=pt,Ge=t.stateNode.containerInfo,pt=!0,hr(e,n,t),Ge=r,pt=i;break;case 0:case 11:case 14:case 15:if(!nn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ip(t,n,s),i=i.next}while(i!==r)}hr(e,n,t);break;case 1:if(!nn&&(Zi(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Me(t,n,a)}hr(e,n,t);break;case 21:hr(e,n,t);break;case 22:t.mode&1?(nn=(r=nn)||t.memoizedState!==null,hr(e,n,t),nn=r):hr(e,n,t);break;default:hr(e,n,t)}}function Rg(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new nA),n.forEach(function(r){var i=dA.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function it(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,pt=!1;break e;case 3:Ge=a.stateNode.containerInfo,pt=!0;break e;case 4:Ge=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Ge===null)throw Error(F(160));Gx(o,s,i),Ge=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Me(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Kx(n,e),n=n.sibling}function Kx(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(n,e),St(e),r&4){try{xs(3,e,e.return),Ic(3,e)}catch(g){Me(e,e.return,g)}try{xs(5,e,e.return)}catch(g){Me(e,e.return,g)}}break;case 1:it(n,e),St(e),r&512&&t!==null&&Zi(t,t.return);break;case 5:if(it(n,e),St(e),r&512&&t!==null&&Zi(t,t.return),e.flags&32){var i=e.stateNode;try{Os(i,"")}catch(g){Me(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gb(i,o),Dd(a,s);var c=Dd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],u=l[s+1];d==="style"?xb(i,u):d==="dangerouslySetInnerHTML"?wb(i,u):d==="children"?Os(i,u):gh(i,d,u,c)}switch(a){case"input":Pd(i,o);break;case"textarea":yb(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?oo(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?oo(i,!!o.multiple,o.defaultValue,!0):oo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Us]=o}catch(g){Me(e,e.return,g)}}break;case 6:if(it(n,e),St(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Me(e,e.return,g)}}break;case 3:if(it(n,e),St(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(g){Me(e,e.return,g)}break;case 4:it(n,e),St(e);break;case 13:it(n,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yh=je())),r&4&&Rg(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(nn=(c=nn)||d,it(n,e),nn=c):it(n,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(u=$=d;$!==null;){switch(h=$,p=h.child,h.tag){case 0:case 11:case 14:case 15:xs(4,h,h.return);break;case 1:Zi(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(g){Me(r,t,g)}}break;case 5:Zi(h,h.return);break;case 22:if(h.memoizedState!==null){Mg(u);continue}}p!==null?(p.return=h,$=p):Mg(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bb("display",s))}catch(g){Me(e,e.return,g)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(g){Me(e,e.return,g)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:it(n,e),St(e),r&4&&Rg(e);break;case 21:break;default:it(n,e),St(e)}}function St(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($x(t)){var r=t;break e}t=t.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Os(i,""),r.flags&=-33);var o=Ig(e);ap(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ig(e);sp(e,a,s);break;default:throw Error(F(161))}}catch(l){Me(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rA(e,n,t){$=e,Yx(e)}function Yx(e,n,t){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||qa;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nn;a=qa;var c=nn;if(qa=s,(nn=l)&&!c)for($=i;$!==null;)s=$,l=s.child,s.tag===22&&s.memoizedState!==null?Og(i):l!==null?(l.return=s,$=l):Og(i);for(;o!==null;)$=o,Yx(o),o=o.sibling;$=i,qa=a,nn=c}Dg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Dg(e)}}function Dg(e){for(;$!==null;){var n=$;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:nn||Ic(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!nn)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:lt(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&mg(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}mg(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&_s(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}nn||n.flags&512&&op(n)}catch(h){Me(n,n.return,h)}}if(n===e){$=null;break}if(t=n.sibling,t!==null){t.return=n.return,$=t;break}$=n.return}}function Mg(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var t=n.sibling;if(t!==null){t.return=n.return,$=t;break}$=n.return}}function Og(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ic(4,n)}catch(l){Me(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){Me(n,i,l)}}var o=n.return;try{op(n)}catch(l){Me(n,o,l)}break;case 5:var s=n.return;try{op(n)}catch(l){Me(n,s,l)}}}catch(l){Me(n,n.return,l)}if(n===e){$=null;break}var a=n.sibling;if(a!==null){a.return=n.return,$=a;break}$=n.return}}var iA=Math.ceil,Yl=rr.ReactCurrentDispatcher,Gh=rr.ReactCurrentOwner,Jn=rr.ReactCurrentBatchConfig,ue=0,$e=null,ze=null,Ye=0,Mn=0,eo=Qr(0),He=0,Ks=null,Ri=0,Rc=0,Kh=0,ks=null,xn=null,Yh=0,Ro=1/0,qt=null,Jl=!1,lp=null,Fr=null,Wa=!1,Rr=null,Ql=0,Ss=0,cp=null,gl=-1,yl=0;function mn(){return ue&6?je():gl!==-1?gl:gl=je()}function zr(e){return e.mode&1?ue&2&&Ye!==0?Ye&-Ye:VE.transition!==null?(yl===0&&(yl=Ob()),yl):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Bb(e.type)),e):1}function mt(e,n,t,r){if(50<Ss)throw Ss=0,cp=null,Error(F(185));da(e,t,r),(!(ue&2)||e!==$e)&&(e===$e&&(!(ue&2)&&(Rc|=t),He===4&&Sr(e,Ye)),Tn(e,r),t===1&&ue===0&&!(n.mode&1)&&(Ro=je()+500,Pc&&Xr()))}function Tn(e,n){var t=e.callbackNode;VP(e,n);var r=jl(e,e===$e?Ye:0);if(r===0)t!==null&&Um(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Um(t),n===1)e.tag===0?BE(jg.bind(null,e)):ox(jg.bind(null,e)),NE(function(){!(ue&6)&&Xr()}),t=null;else{switch(jb(r)){case 1:t=xh;break;case 4:t=Db;break;case 16:t=Ol;break;case 536870912:t=Mb;break;default:t=Ol}t=r0(t,Jx.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Jx(e,n){if(gl=-1,yl=0,ue&6)throw Error(F(327));var t=e.callbackNode;if(uo()&&e.callbackNode!==t)return null;var r=jl(e,e===$e?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Xl(e,r);else{n=r;var i=ue;ue|=2;var o=Xx();($e!==e||Ye!==n)&&(qt=null,Ro=je()+500,Si(e,n));do try{aA();break}catch(a){Qx(e,a)}while(!0);jh(),Yl.current=o,ue=i,ze!==null?n=0:($e=null,Ye=0,n=He)}if(n!==0){if(n===2&&(i=Nd(e),i!==0&&(r=i,n=up(e,i))),n===1)throw t=Ks,Si(e,0),Sr(e,r),Tn(e,je()),t;if(n===6)Sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!oA(i)&&(n=Xl(e,r),n===2&&(o=Nd(e),o!==0&&(r=o,n=up(e,o))),n===1))throw t=Ks,Si(e,0),Sr(e,r),Tn(e,je()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(F(345));case 2:ci(e,xn,qt);break;case 3:if(Sr(e,r),(r&130023424)===r&&(n=Yh+500-je(),10<n)){if(jl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qd(ci.bind(null,e,xn,qt),n);break}ci(e,xn,qt);break;case 4:if(Sr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-ft(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iA(r/1960))-r,10<r){e.timeoutHandle=qd(ci.bind(null,e,xn,qt),r);break}ci(e,xn,qt);break;case 5:ci(e,xn,qt);break;default:throw Error(F(329))}}}return Tn(e,je()),e.callbackNode===t?Jx.bind(null,e):null}function up(e,n){var t=ks;return e.current.memoizedState.isDehydrated&&(Si(e,n).flags|=256),e=Xl(e,n),e!==2&&(n=xn,xn=t,n!==null&&dp(n)),e}function dp(e){xn===null?xn=e:xn.push.apply(xn,e)}function oA(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sr(e,n){for(n&=~Kh,n&=~Rc,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ft(n),r=1<<t;e[t]=-1,n&=~r}}function jg(e){if(ue&6)throw Error(F(327));uo();var n=jl(e,0);if(!(n&1))return Tn(e,je()),null;var t=Xl(e,n);if(e.tag!==0&&t===2){var r=Nd(e);r!==0&&(n=r,t=up(e,r))}if(t===1)throw t=Ks,Si(e,0),Sr(e,n),Tn(e,je()),t;if(t===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ci(e,xn,qt),Tn(e,je()),null}function Jh(e,n){var t=ue;ue|=1;try{return e(n)}finally{ue=t,ue===0&&(Ro=je()+500,Pc&&Xr())}}function Di(e){Rr!==null&&Rr.tag===0&&!(ue&6)&&uo();var n=ue;ue|=1;var t=Jn.transition,r=fe;try{if(Jn.transition=null,fe=1,e)return e()}finally{fe=r,Jn.transition=t,ue=n,!(ue&6)&&Xr()}}function Qh(){Mn=eo.current,ke(eo)}function Si(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,LE(t)),ze!==null)for(t=ze.return;t!==null;){var r=t;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Ao(),ke(Sn),ke(on),Bh();break;case 5:zh(r);break;case 4:Ao();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:Lh(r.type._context);break;case 22:case 23:Qh()}t=t.return}if($e=e,ze=e=Br(e.current,null),Ye=Mn=n,He=0,Ks=null,Kh=Rc=Ri=0,xn=ks=null,hi!==null){for(n=0;n<hi.length;n++)if(t=hi[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}hi=null}return e}function Qx(e,n){do{var t=ze;try{if(jh(),hl.current=Kl,Gl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Ii=0,qe=Ve=Ie=null,bs=!1,Ws=0,Gh.current=null,t===null||t.return===null){He=1,Ks=n,ze=null;break}e:{var o=e,s=t.return,a=t,l=n;if(n=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=xg(s);if(p!==null){p.flags&=-257,kg(p,s,a,o,n),p.mode&1&&bg(o,c,n),n=p,l=c;var m=n.updateQueue;if(m===null){var g=new Set;g.add(l),n.updateQueue=g}else m.add(l);break e}else{if(!(n&1)){bg(o,c,n),Xh();break e}l=Error(F(426))}}else if(Te&&a.mode&1){var b=xg(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),kg(b,s,a,o,n),Mh(Io(l,a));break e}}o=l=Io(l,a),He!==4&&(He=2),ks===null?ks=[o]:ks.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=jx(o,l,n);fg(o,f);break e;case 1:a=l;var y=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var S=Lx(o,a,n);fg(o,S);break e}}o=o.return}while(o!==null)}e0(t)}catch(T){n=T,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(!0)}function Xx(){var e=Yl.current;return Yl.current=Kl,e===null?Kl:e}function Xh(){(He===0||He===3||He===2)&&(He=4),$e===null||!(Ri&268435455)&&!(Rc&268435455)||Sr($e,Ye)}function Xl(e,n){var t=ue;ue|=2;var r=Xx();($e!==e||Ye!==n)&&(qt=null,Si(e,n));do try{sA();break}catch(i){Qx(e,i)}while(!0);if(jh(),ue=t,Yl.current=r,ze!==null)throw Error(F(261));return $e=null,Ye=0,He}function sA(){for(;ze!==null;)Zx(ze)}function aA(){for(;ze!==null&&!MP();)Zx(ze)}function Zx(e){var n=t0(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,n===null?e0(e):ze=n,Gh.current=null}function e0(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=eA(t,n),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,ze=null;return}}else if(t=ZE(t,n,Mn),t!==null){ze=t;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);He===0&&(He=5)}function ci(e,n,t){var r=fe,i=Jn.transition;try{Jn.transition=null,fe=1,lA(e,n,t,r)}finally{Jn.transition=i,fe=r}return null}function lA(e,n,t,r){do uo();while(Rr!==null);if(ue&6)throw Error(F(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(UP(e,o),e===$e&&(ze=$e=null,Ye=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wa||(Wa=!0,r0(Ol,function(){return uo(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Jn.transition,Jn.transition=null;var s=fe;fe=1;var a=ue;ue|=4,Gh.current=null,tA(e,t),Kx(t,e),AE(Ud),Ll=!!Vd,Ud=Vd=null,e.current=t,rA(t),OP(),ue=a,fe=s,Jn.transition=o}else e.current=t;if(Wa&&(Wa=!1,Rr=e,Ql=i),o=e.pendingLanes,o===0&&(Fr=null),NP(t.stateNode),Tn(e,je()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,e=lp,lp=null,e;return Ql&1&&e.tag!==0&&uo(),o=e.pendingLanes,o&1?e===cp?Ss++:(Ss=0,cp=e):Ss=0,Xr(),null}function uo(){if(Rr!==null){var e=jb(Ql),n=Jn.transition,t=fe;try{if(Jn.transition=null,fe=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Ql=0,ue&6)throw Error(F(331));var i=ue;for(ue|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:xs(8,d,o)}var u=d.child;if(u!==null)u.return=d,$=u;else for(;$!==null;){d=$;var h=d.sibling,p=d.return;if(Wx(d),d===c){$=null;break}if(h!==null){h.return=p,$=h;break}$=p}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,$=f;break e}$=o.return}}var y=e.current;for($=y;$!==null;){s=$;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,$=v;else e:for(s=y;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(T){Me(a,a.return,T)}if(a===s){$=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,$=S;break e}$=a.return}}if(ue=i,Xr(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(xc,e)}catch{}r=!0}return r}finally{fe=t,Jn.transition=n}}return!1}function Lg(e,n,t){n=Io(t,n),n=jx(e,n,1),e=_r(e,n,1),n=mn(),e!==null&&(da(e,1,n),Tn(e,n))}function Me(e,n,t){if(e.tag===3)Lg(e,e,t);else for(;n!==null;){if(n.tag===3){Lg(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){e=Io(t,e),e=Lx(n,e,1),n=_r(n,e,1),e=mn(),n!==null&&(da(n,1,e),Tn(n,e));break}}n=n.return}}function cA(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=mn(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Ye&t)===t&&(He===4||He===3&&(Ye&130023424)===Ye&&500>je()-Yh?Si(e,0):Kh|=t),Tn(e,n)}function n0(e,n){n===0&&(e.mode&1?(n=La,La<<=1,!(La&130023424)&&(La=4194304)):n=1);var t=mn();e=Xt(e,n),e!==null&&(da(e,n,t),Tn(e,t))}function uA(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),n0(e,t)}function dA(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(n),n0(e,t)}var t0;t0=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Sn.current)kn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return kn=!1,XE(e,n,t);kn=!!(e.flags&131072)}else kn=!1,Te&&n.flags&1048576&&sx(n,Ul,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ml(e,n),e=n.pendingProps;var i=To(n,on.current);co(n,t),i=Uh(null,n,r,e,i,t);var o=Hh();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Cn(r)?(o=!0,Bl(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(n),i.updater=Ac,n.stateNode=i,i._reactInternals=n,Qd(n,r,e,t),n=ep(null,n,r,!0,o,t)):(n.tag=0,Te&&o&&Rh(n),un(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ml(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=hA(r),e=lt(r,e),i){case 0:n=Zd(null,n,r,e,t);break e;case 1:n=Tg(null,n,r,e,t);break e;case 11:n=Sg(null,n,r,e,t);break e;case 14:n=Cg(null,n,r,lt(r.type,e),t);break e}throw Error(F(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:lt(r,i),Zd(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:lt(r,i),Tg(e,n,r,i,t);case 3:e:{if(zx(n),e===null)throw Error(F(387));r=n.pendingProps,o=n.memoizedState,i=o.element,px(e,n),Wl(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Io(Error(F(423)),n),n=Pg(e,n,r,t,i);break e}else if(r!==i){i=Io(Error(F(424)),n),n=Pg(e,n,r,t,i);break e}else for(jn=Nr(n.stateNode.containerInfo.firstChild),Ln=n,Te=!0,ht=null,t=ux(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Po(),r===i){n=Zt(e,n,t);break e}un(e,n,r,t)}n=n.child}return n;case 5:return hx(n),e===null&&Kd(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Hd(r,i)?s=null:o!==null&&Hd(r,o)&&(n.flags|=32),Fx(e,n),un(e,n,s,t),n.child;case 6:return e===null&&Kd(n),null;case 13:return Bx(e,n,t);case 4:return Fh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Eo(n,null,r,t):un(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:lt(r,i),Sg(e,n,r,i,t);case 7:return un(e,n,n.pendingProps,t),n.child;case 8:return un(e,n,n.pendingProps.children,t),n.child;case 12:return un(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,we(Hl,r._currentValue),r._currentValue=s,o!==null)if(yt(o.value,s)){if(o.children===i.children&&!Sn.current){n=Zt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yt(-1,t&-t),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Yd(o.return,t,n),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Yd(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}un(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,co(n,t),i=Xn(i),r=r(i),n.flags|=1,un(e,n,r,t),n.child;case 14:return r=n.type,i=lt(r,n.pendingProps),i=lt(r.type,i),Cg(e,n,r,i,t);case 15:return Nx(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:lt(r,i),ml(e,n),n.tag=1,Cn(r)?(e=!0,Bl(n)):e=!1,co(n,t),Ox(n,r,i),Qd(n,r,i,t),ep(null,n,r,!0,e,t);case 19:return Vx(e,n,t);case 22:return _x(e,n,t)}throw Error(F(156,n.tag))};function r0(e,n){return Rb(e,n)}function pA(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,t,r){return new pA(e,n,t,r)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hA(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vh)return 11;if(e===wh)return 14}return 2}function Br(e,n){var t=e.alternate;return t===null?(t=Kn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vl(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Zh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qi:return Ci(t.children,i,o,n);case yh:s=8,i|=8;break;case xd:return e=Kn(12,t,n,i|2),e.elementType=xd,e.lanes=o,e;case kd:return e=Kn(13,t,n,i),e.elementType=kd,e.lanes=o,e;case Sd:return e=Kn(19,t,n,i),e.elementType=Sd,e.lanes=o,e;case hb:return Dc(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case db:s=10;break e;case pb:s=9;break e;case vh:s=11;break e;case wh:s=14;break e;case br:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return n=Kn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Ci(e,n,t,r){return e=Kn(7,e,r,n),e.lanes=t,e}function Dc(e,n,t,r){return e=Kn(22,e,r,n),e.elementType=hb,e.lanes=t,e.stateNode={isHidden:!1},e}function Mu(e,n,t){return e=Kn(6,e,null,n),e.lanes=t,e}function Ou(e,n,t){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fA(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(e,n,t,r,i,o,s,a,l){return e=new fA(e,n,t,a,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Kn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(o),e}function mA(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function i0(e){if(!e)return Hr;e=e._reactInternals;e:{if(Li(e)!==e||e.tag!==1)throw Error(F(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Cn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(F(171))}if(e.tag===1){var t=e.type;if(Cn(t))return ix(e,t,n)}return n}function o0(e,n,t,r,i,o,s,a,l){return e=ef(t,r,!0,e,i,o,s,a,l),e.context=i0(null),t=e.current,r=mn(),i=zr(t),o=Yt(r,i),o.callback=n??null,_r(t,o,i),e.current.lanes=i,da(e,i,r),Tn(e,r),e}function Mc(e,n,t,r){var i=n.current,o=mn(),s=zr(i);return t=i0(t),n.context===null?n.context=t:n.pendingContext=t,n=Yt(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=_r(i,n,s),e!==null&&(mt(e,i,s,o),pl(e,i,s)),s}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ng(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function nf(e,n){Ng(e,n),(e=e.alternate)&&Ng(e,n)}function gA(){return null}var s0=typeof reportError=="function"?reportError:function(e){console.error(e)};function tf(e){this._internalRoot=e}Oc.prototype.render=tf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(F(409));Mc(e,n,null,null)};Oc.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Di(function(){Mc(null,e,null,null)}),n[Qt]=null}};function Oc(e){this._internalRoot=e}Oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=_b();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kr.length&&n!==0&&n<kr[t].priority;t++);kr.splice(t,0,e),t===0&&zb(e)}};function rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _g(){}function yA(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Zl(s);o.call(c)}}var s=o0(n,r,e,0,null,!1,!1,"",_g);return e._reactRootContainer=s,e[Qt]=s.current,Bs(e.nodeType===8?e.parentNode:e),Di(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zl(l);a.call(c)}}var l=ef(e,0,!1,null,null,!1,!1,"",_g);return e._reactRootContainer=l,e[Qt]=l.current,Bs(e.nodeType===8?e.parentNode:e),Di(function(){Mc(n,l,t,r)}),l}function Lc(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Zl(s);a.call(l)}}Mc(n,s,e,i)}else s=yA(t,n,e,i,r);return Zl(s)}Lb=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ds(n.pendingLanes);t!==0&&(kh(n,t|1),Tn(n,je()),!(ue&6)&&(Ro=je()+500,Xr()))}break;case 13:Di(function(){var r=Xt(e,1);if(r!==null){var i=mn();mt(r,e,1,i)}}),nf(e,1)}};Sh=function(e){if(e.tag===13){var n=Xt(e,134217728);if(n!==null){var t=mn();mt(n,e,134217728,t)}nf(e,134217728)}};Nb=function(e){if(e.tag===13){var n=zr(e),t=Xt(e,n);if(t!==null){var r=mn();mt(t,e,n,r)}nf(e,n)}};_b=function(){return fe};Fb=function(e,n){var t=fe;try{return fe=e,n()}finally{fe=t}};Od=function(e,n,t){switch(n){case"input":if(Pd(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Tc(r);if(!i)throw Error(F(90));mb(r),Pd(r,i)}}}break;case"textarea":yb(e,t);break;case"select":n=t.value,n!=null&&oo(e,!!t.multiple,n,!1)}};Cb=Jh;Tb=Di;var vA={usingClientEntryPoint:!1,Events:[ha,Ki,Tc,kb,Sb,Jh]},rs={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wA={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ab(e),e===null?null:e.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{xc=$a.inject(wA),Dt=$a}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;Bn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(n))throw Error(F(200));return mA(e,n,null,t)};Bn.createRoot=function(e,n){if(!rf(e))throw Error(F(299));var t=!1,r="",i=s0;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ef(e,1,!1,null,null,t,!1,r,i),e[Qt]=n.current,Bs(e.nodeType===8?e.parentNode:e),new tf(n)};Bn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ab(n),e=e===null?null:e.stateNode,e};Bn.flushSync=function(e){return Di(e)};Bn.hydrate=function(e,n,t){if(!jc(n))throw Error(F(200));return Lc(null,e,n,!0,t)};Bn.hydrateRoot=function(e,n,t){if(!rf(e))throw Error(F(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=s0;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=o0(n,null,e,1,t??null,i,!1,o,s),e[Qt]=n.current,Bs(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Oc(n)};Bn.render=function(e,n,t){if(!jc(n))throw Error(F(200));return Lc(null,e,n,!1,t)};Bn.unmountComponentAtNode=function(e){if(!jc(e))throw Error(F(40));return e._reactRootContainer?(Di(function(){Lc(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};Bn.unstable_batchedUpdates=Jh;Bn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!jc(t))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Lc(e,n,t,!1,r)};Bn.version="18.3.1-next-f1338f8080-20240426";function a0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0)}catch(e){console.error(e)}}a0(),ab.exports=Bn;var ma=ab.exports;const l0=wc(ma);var c0,Fg=ma;c0=Fg.createRoot,Fg.hydrateRoot;const bA=1,xA=1e6;let ju=0;function kA(){return ju=(ju+1)%Number.MAX_SAFE_INTEGER,ju.toString()}const Lu=new Map,zg=e=>{if(Lu.has(e))return;const n=setTimeout(()=>{Lu.delete(e),Cs({type:"REMOVE_TOAST",toastId:e})},xA);Lu.set(e,n)},SA=(e,n)=>{switch(n.type){case"ADD_TOAST":return{...e,toasts:[n.toast,...e.toasts].slice(0,bA)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(t=>t.id===n.toast.id?{...t,...n.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=n;return t?zg(t):e.toasts.forEach(r=>{zg(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===t||t===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==n.toastId)}}},wl=[];let bl={toasts:[]};function Cs(e){bl=SA(bl,e),wl.forEach(n=>{n(bl)})}function CA({...e}){const n=kA(),t=i=>Cs({type:"UPDATE_TOAST",toast:{...i,id:n}}),r=()=>Cs({type:"DISMISS_TOAST",toastId:n});return Cs({type:"ADD_TOAST",toast:{...e,id:n,open:!0,onOpenChange:i=>{i||r()}}}),{id:n,dismiss:r,update:t}}function TA(){const[e,n]=x.useState(bl);return x.useEffect(()=>(wl.push(n),()=>{const t=wl.indexOf(n);t>-1&&wl.splice(t,1)}),[e]),{...e,toast:CA,dismiss:t=>Cs({type:"DISMISS_TOAST",toastId:t})}}function Ue(e,n,{checkForDefaultPrevented:t=!0}={}){return function(i){if(e==null||e(i),t===!1||!i.defaultPrevented)return n==null?void 0:n(i)}}function Bg(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function u0(...e){return n=>{let t=!1;const r=e.map(i=>{const o=Bg(i,n);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Bg(e[i],null)}}}}function vt(...e){return x.useCallback(u0(...e),e)}function Nc(e,n=[]){let t=[];function r(o,s){const a=x.createContext(s),l=t.length;t=[...t,s];const c=u=>{var f;const{scope:h,children:p,...m}=u,g=((f=h==null?void 0:h[e])==null?void 0:f[l])||a,b=x.useMemo(()=>m,Object.values(m));return w.jsx(g.Provider,{value:b,children:p})};c.displayName=o+"Provider";function d(u,h){var g;const p=((g=h==null?void 0:h[e])==null?void 0:g[l])||a,m=x.useContext(p);if(m)return m;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${o}\``)}return[c,d]}const i=()=>{const o=t.map(s=>x.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return x.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,PA(i,...n)]}function PA(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const u=l(o)[`__scope${c}`];return{...a,...u}},{});return x.useMemo(()=>({[`__scope${n.scopeName}`]:s}),[s])}};return t.scopeName=n.scopeName,t}function ec(e){const n=AA(e),t=x.forwardRef((r,i)=>{const{children:o,...s}=r,a=x.Children.toArray(o),l=a.find(RA);if(l){const c=l.props.children,d=a.map(u=>u===l?x.Children.count(c)>1?x.Children.only(null):x.isValidElement(c)?c.props.children:null:u);return w.jsx(n,{...s,ref:i,children:x.isValidElement(c)?x.cloneElement(c,void 0,d):null})}return w.jsx(n,{...s,ref:i,children:o})});return t.displayName=`${e}.Slot`,t}var EA=ec("Slot");function AA(e){const n=x.forwardRef((t,r)=>{const{children:i,...o}=t;if(x.isValidElement(i)){const s=MA(i),a=DA(o,i.props);return i.type!==x.Fragment&&(a.ref=r?u0(r,s):s),x.cloneElement(i,a)}return x.Children.count(i)>1?x.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var d0=Symbol("radix.slottable");function IA(e){const n=({children:t})=>w.jsx(w.Fragment,{children:t});return n.displayName=`${e}.Slottable`,n.__radixId=d0,n}function RA(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===d0}function DA(e,n){const t={...n};for(const r in n){const i=e[r],o=n[r];/^on[A-Z]/.test(r)?i&&o?t[r]=(...a)=>{const l=o(...a);return i(...a),l}:i&&(t[r]=i):r==="style"?t[r]={...i,...o}:r==="className"&&(t[r]=[i,o].filter(Boolean).join(" "))}return{...e,...t}}function MA(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function OA(e){const n=e+"CollectionProvider",[t,r]=Nc(n),[i,o]=t(n,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:b,children:f}=g,y=V.useRef(null),v=V.useRef(new Map).current;return w.jsx(i,{scope:b,itemMap:v,collectionRef:y,children:f})};s.displayName=n;const a=e+"CollectionSlot",l=ec(a),c=V.forwardRef((g,b)=>{const{scope:f,children:y}=g,v=o(a,f),S=vt(b,v.collectionRef);return w.jsx(l,{ref:S,children:y})});c.displayName=a;const d=e+"CollectionItemSlot",u="data-radix-collection-item",h=ec(d),p=V.forwardRef((g,b)=>{const{scope:f,children:y,...v}=g,S=V.useRef(null),T=vt(b,S),C=o(d,f);return V.useEffect(()=>(C.itemMap.set(S,{ref:S,...v}),()=>void C.itemMap.delete(S))),w.jsx(h,{[u]:"",ref:T,children:y})});p.displayName=d;function m(g){const b=o(e+"CollectionConsumer",g);return V.useCallback(()=>{const y=b.collectionRef.current;if(!y)return[];const v=Array.from(y.querySelectorAll(`[${u}]`));return Array.from(b.itemMap.values()).sort((C,A)=>v.indexOf(C.ref.current)-v.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:c,ItemSlot:p},m,r]}var jA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pn=jA.reduce((e,n)=>{const t=ec(`Primitive.${n}`),r=x.forwardRef((i,o)=>{const{asChild:s,...a}=i,l=s?t:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(l,{...a,ref:o})});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function p0(e,n){e&&ma.flushSync(()=>e.dispatchEvent(n))}function qr(e){const n=x.useRef(e);return x.useEffect(()=>{n.current=e}),x.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function LA(e,n=globalThis==null?void 0:globalThis.document){const t=qr(e);x.useEffect(()=>{const r=i=>{i.key==="Escape"&&t(i)};return n.addEventListener("keydown",r,{capture:!0}),()=>n.removeEventListener("keydown",r,{capture:!0})},[t,n])}var NA="DismissableLayer",pp="dismissableLayer.update",_A="dismissableLayer.pointerDownOutside",FA="dismissableLayer.focusOutside",Vg,h0=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),of=x.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,c=x.useContext(h0),[d,u]=x.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=x.useState({}),m=vt(n,A=>u(A)),g=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=g.indexOf(b),y=d?g.indexOf(d):-1,v=c.layersWithOutsidePointerEventsDisabled.size>0,S=y>=f,T=BA(A=>{const I=A.target,M=[...c.branches].some(E=>E.contains(I));!S||M||(i==null||i(A),s==null||s(A),A.defaultPrevented||a==null||a())},h),C=VA(A=>{const I=A.target;[...c.branches].some(E=>E.contains(I))||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},h);return LA(A=>{y===c.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},h),x.useEffect(()=>{if(d)return t&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Vg=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Ug(),()=>{t&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Vg)}},[d,h,t,c]),x.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Ug())},[d,c]),x.useEffect(()=>{const A=()=>p({});return document.addEventListener(pp,A),()=>document.removeEventListener(pp,A)},[]),w.jsx(Pn.div,{...l,ref:m,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Ue(e.onFocusCapture,C.onFocusCapture),onBlurCapture:Ue(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Ue(e.onPointerDownCapture,T.onPointerDownCapture)})});of.displayName=NA;var zA="DismissableLayerBranch",f0=x.forwardRef((e,n)=>{const t=x.useContext(h0),r=x.useRef(null),i=vt(n,r);return x.useEffect(()=>{const o=r.current;if(o)return t.branches.add(o),()=>{t.branches.delete(o)}},[t.branches]),w.jsx(Pn.div,{...e,ref:i})});f0.displayName=zA;function BA(e,n=globalThis==null?void 0:globalThis.document){const t=qr(e),r=x.useRef(!1),i=x.useRef(()=>{});return x.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){m0(_A,t,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(n.removeEventListener("click",i.current),i.current=l,n.addEventListener("click",i.current,{once:!0})):l()}else n.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{n.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),n.removeEventListener("pointerdown",o),n.removeEventListener("click",i.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}function VA(e,n=globalThis==null?void 0:globalThis.document){const t=qr(e),r=x.useRef(!1);return x.useEffect(()=>{const i=o=>{o.target&&!r.current&&m0(FA,t,{originalEvent:o},{discrete:!1})};return n.addEventListener("focusin",i),()=>n.removeEventListener("focusin",i)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ug(){const e=new CustomEvent(pp);document.dispatchEvent(e)}function m0(e,n,t,{discrete:r}){const i=t.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),r?p0(i,o):i.dispatchEvent(o)}var UA=of,HA=f0,Wr=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},qA="Portal",g0=x.forwardRef((e,n)=>{var a;const{container:t,...r}=e,[i,o]=x.useState(!1);Wr(()=>o(!0),[]);const s=t||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?l0.createPortal(w.jsx(Pn.div,{...r,ref:n}),s):null});g0.displayName=qA;function WA(e,n){return x.useReducer((t,r)=>n[t][r]??t,e)}var sf=e=>{const{present:n,children:t}=e,r=$A(n),i=typeof t=="function"?t({present:r.isPresent}):x.Children.only(t),o=vt(r.ref,GA(i));return typeof t=="function"||r.isPresent?x.cloneElement(i,{ref:o}):null};sf.displayName="Presence";function $A(e){const[n,t]=x.useState(),r=x.useRef(null),i=x.useRef(e),o=x.useRef("none"),s=e?"mounted":"unmounted",[a,l]=WA(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const c=Ga(r.current);o.current=a==="mounted"?c:"none"},[a]),Wr(()=>{const c=r.current,d=i.current;if(d!==e){const h=o.current,p=Ga(c);e?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Wr(()=>{if(n){let c;const d=n.ownerDocument.defaultView??window,u=p=>{const g=Ga(r.current).includes(p.animationName);if(p.target===n&&g&&(l("ANIMATION_END"),!i.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",c=d.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},h=p=>{p.target===n&&(o.current=Ga(r.current))};return n.addEventListener("animationstart",h),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{d.clearTimeout(c),n.removeEventListener("animationstart",h),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:x.useCallback(c=>{r.current=c?getComputedStyle(c):null,t(c)},[])}}function Ga(e){return(e==null?void 0:e.animationName)||"none"}function GA(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var KA=ob[" useInsertionEffect ".trim().toString()]||Wr;function YA({prop:e,defaultProp:n,onChange:t=()=>{},caller:r}){const[i,o,s]=JA({defaultProp:n,onChange:t}),a=e!==void 0,l=a?e:i;{const d=x.useRef(e!==void 0);x.useEffect(()=>{const u=d.current;u!==a&&console.warn(`${r} is changing from ${u?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const c=x.useCallback(d=>{var u;if(a){const h=QA(d)?d(e):d;h!==e&&((u=s.current)==null||u.call(s,h))}else o(d)},[a,e,o,s]);return[l,c]}function JA({defaultProp:e,onChange:n}){const[t,r]=x.useState(e),i=x.useRef(t),o=x.useRef(n);return KA(()=>{o.current=n},[n]),x.useEffect(()=>{var s;i.current!==t&&((s=o.current)==null||s.call(o,t),i.current=t)},[t,i]),[t,r,o]}function QA(e){return typeof e=="function"}var XA=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),ZA="VisuallyHidden",_c=x.forwardRef((e,n)=>w.jsx(Pn.span,{...e,ref:n,style:{...XA,...e.style}}));_c.displayName=ZA;var eI=_c,af="ToastProvider",[lf,nI,tI]=OA("Toast"),[y0,bU]=Nc("Toast",[tI]),[rI,Fc]=y0(af),v0=e=>{const{__scopeToast:n,label:t="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=x.useState(null),[c,d]=x.useState(0),u=x.useRef(!1),h=x.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${af}\`. Expected non-empty \`string\`.`),w.jsx(lf.Provider,{scope:n,children:w.jsx(rI,{scope:n,label:t,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:x.useCallback(()=>d(p=>p+1),[]),onToastRemove:x.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:u,isClosePausedRef:h,children:s})})};v0.displayName=af;var w0="ToastViewport",iI=["F8"],hp="toast.viewportPause",fp="toast.viewportResume",b0=x.forwardRef((e,n)=>{const{__scopeToast:t,hotkey:r=iI,label:i="Notifications ({hotkey})",...o}=e,s=Fc(w0,t),a=nI(t),l=x.useRef(null),c=x.useRef(null),d=x.useRef(null),u=x.useRef(null),h=vt(n,u,s.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=s.toastCount>0;x.useEffect(()=>{const b=f=>{var v;r.length!==0&&r.every(S=>f[S]||f.code===S)&&((v=u.current)==null||v.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),x.useEffect(()=>{const b=l.current,f=u.current;if(m&&b&&f){const y=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(hp);f.dispatchEvent(C),s.isClosePausedRef.current=!0}},v=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(fp);f.dispatchEvent(C),s.isClosePausedRef.current=!1}},S=C=>{!b.contains(C.relatedTarget)&&v()},T=()=>{b.contains(document.activeElement)||v()};return b.addEventListener("focusin",y),b.addEventListener("focusout",S),b.addEventListener("pointermove",y),b.addEventListener("pointerleave",T),window.addEventListener("blur",y),window.addEventListener("focus",v),()=>{b.removeEventListener("focusin",y),b.removeEventListener("focusout",S),b.removeEventListener("pointermove",y),b.removeEventListener("pointerleave",T),window.removeEventListener("blur",y),window.removeEventListener("focus",v)}}},[m,s.isClosePausedRef]);const g=x.useCallback(({tabbingDirection:b})=>{const y=a().map(v=>{const S=v.ref.current,T=[S,...yI(S)];return b==="forwards"?T:T.reverse()});return(b==="forwards"?y.reverse():y).flat()},[a]);return x.useEffect(()=>{const b=u.current;if(b){const f=y=>{var T,C,A;const v=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!v){const I=document.activeElement,M=y.shiftKey;if(y.target===b&&M){(T=c.current)==null||T.focus();return}const O=g({tabbingDirection:M?"backwards":"forwards"}),q=O.findIndex(_=>_===I);Nu(O.slice(q+1))?y.preventDefault():M?(C=c.current)==null||C.focus():(A=d.current)==null||A.focus()}};return b.addEventListener("keydown",f),()=>b.removeEventListener("keydown",f)}},[a,g]),w.jsxs(HA,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:m?void 0:"none"},children:[m&&w.jsx(mp,{ref:c,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"forwards"});Nu(b)}}),w.jsx(lf.Slot,{scope:t,children:w.jsx(Pn.ol,{tabIndex:-1,...o,ref:h})}),m&&w.jsx(mp,{ref:d,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"backwards"});Nu(b)}})]})});b0.displayName=w0;var x0="ToastFocusProxy",mp=x.forwardRef((e,n)=>{const{__scopeToast:t,onFocusFromOutsideViewport:r,...i}=e,o=Fc(x0,t);return w.jsx(_c,{"aria-hidden":!0,tabIndex:0,...i,ref:n,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&r()}})});mp.displayName=x0;var ga="Toast",oI="toast.swipeStart",sI="toast.swipeMove",aI="toast.swipeCancel",lI="toast.swipeEnd",k0=x.forwardRef((e,n)=>{const{forceMount:t,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=YA({prop:r,defaultProp:i??!0,onChange:o,caller:ga});return w.jsx(sf,{present:t||a,children:w.jsx(dI,{open:a,...s,ref:n,onClose:()=>l(!1),onPause:qr(e.onPause),onResume:qr(e.onResume),onSwipeStart:Ue(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ue(e.onSwipeMove,c=>{const{x:d,y:u}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${u}px`)}),onSwipeCancel:Ue(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ue(e.onSwipeEnd,c=>{const{x:d,y:u}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${u}px`),l(!1)})})})});k0.displayName=ga;var[cI,uI]=y0(ga,{onClose(){}}),dI=x.forwardRef((e,n)=>{const{__scopeToast:t,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:u,onSwipeCancel:h,onSwipeEnd:p,...m}=e,g=Fc(ga,t),[b,f]=x.useState(null),y=vt(n,_=>f(_)),v=x.useRef(null),S=x.useRef(null),T=i||g.duration,C=x.useRef(0),A=x.useRef(T),I=x.useRef(0),{onToastAdd:M,onToastRemove:E}=g,N=qr(()=>{var H;(b==null?void 0:b.contains(document.activeElement))&&((H=g.viewport)==null||H.focus()),s()}),O=x.useCallback(_=>{!_||_===1/0||(window.clearTimeout(I.current),C.current=new Date().getTime(),I.current=window.setTimeout(N,_))},[N]);x.useEffect(()=>{const _=g.viewport;if(_){const H=()=>{O(A.current),c==null||c()},G=()=>{const U=new Date().getTime()-C.current;A.current=A.current-U,window.clearTimeout(I.current),l==null||l()};return _.addEventListener(hp,G),_.addEventListener(fp,H),()=>{_.removeEventListener(hp,G),_.removeEventListener(fp,H)}}},[g.viewport,T,l,c,O]),x.useEffect(()=>{o&&!g.isClosePausedRef.current&&O(T)},[o,T,g.isClosePausedRef,O]),x.useEffect(()=>(M(),()=>E()),[M,E]);const q=x.useMemo(()=>b?I0(b):null,[b]);return g.viewport?w.jsxs(w.Fragment,{children:[q&&w.jsx(pI,{__scopeToast:t,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:q}),w.jsx(cI,{scope:t,onClose:N,children:ma.createPortal(w.jsx(lf.ItemSlot,{scope:t,children:w.jsx(UA,{asChild:!0,onEscapeKeyDown:Ue(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||N(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Pn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":g.swipeDirection,...m,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Ue(e.onKeyDown,_=>{_.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,N()))}),onPointerDown:Ue(e.onPointerDown,_=>{_.button===0&&(v.current={x:_.clientX,y:_.clientY})}),onPointerMove:Ue(e.onPointerMove,_=>{if(!v.current)return;const H=_.clientX-v.current.x,G=_.clientY-v.current.y,U=!!S.current,R=["left","right"].includes(g.swipeDirection),j=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,k=R?j(0,H):0,Y=R?0:j(0,G),K=_.pointerType==="touch"?10:2,P={x:k,y:Y},Q={originalEvent:_,delta:P};U?(S.current=P,Ka(sI,u,Q,{discrete:!1})):Hg(P,g.swipeDirection,K)?(S.current=P,Ka(oI,d,Q,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(H)>K||Math.abs(G)>K)&&(v.current=null)}),onPointerUp:Ue(e.onPointerUp,_=>{const H=S.current,G=_.target;if(G.hasPointerCapture(_.pointerId)&&G.releasePointerCapture(_.pointerId),S.current=null,v.current=null,H){const U=_.currentTarget,R={originalEvent:_,delta:H};Hg(H,g.swipeDirection,g.swipeThreshold)?Ka(lI,p,R,{discrete:!0}):Ka(aI,h,R,{discrete:!0}),U.addEventListener("click",j=>j.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),pI=e=>{const{__scopeToast:n,children:t,...r}=e,i=Fc(ga,n),[o,s]=x.useState(!1),[a,l]=x.useState(!1);return mI(()=>s(!0)),x.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:w.jsx(g0,{asChild:!0,children:w.jsx(_c,{...r,children:o&&w.jsxs(w.Fragment,{children:[i.label," ",t]})})})},hI="ToastTitle",S0=x.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e;return w.jsx(Pn.div,{...r,ref:n})});S0.displayName=hI;var fI="ToastDescription",C0=x.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e;return w.jsx(Pn.div,{...r,ref:n})});C0.displayName=fI;var T0="ToastAction",P0=x.forwardRef((e,n)=>{const{altText:t,...r}=e;return t.trim()?w.jsx(A0,{altText:t,asChild:!0,children:w.jsx(cf,{...r,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${T0}\`. Expected non-empty \`string\`.`),null)});P0.displayName=T0;var E0="ToastClose",cf=x.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e,i=uI(E0,t);return w.jsx(A0,{asChild:!0,children:w.jsx(Pn.button,{type:"button",...r,ref:n,onClick:Ue(e.onClick,i.onClose)})})});cf.displayName=E0;var A0=x.forwardRef((e,n)=>{const{__scopeToast:t,altText:r,...i}=e;return w.jsx(Pn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:n})});function I0(e){const n=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&n.push(r.textContent),gI(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&n.push(s)}else n.push(...I0(r))}}),n}function Ka(e,n,t,{discrete:r}){const i=t.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),r?p0(i,o):i.dispatchEvent(o)}var Hg=(e,n,t=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return n==="left"||n==="right"?o&&r>t:!o&&i>t};function mI(e=()=>{}){const n=qr(e);Wr(()=>{let t=0,r=0;return t=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(r)}},[n])}function gI(e){return e.nodeType===e.ELEMENT_NODE}function yI(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function Nu(e){const n=document.activeElement;return e.some(t=>t===n?!0:(t.focus(),document.activeElement!==n))}var vI=v0,R0=b0,D0=k0,M0=S0,O0=C0,j0=P0,L0=cf;function N0(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=N0(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function _0(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=N0(e))&&(r&&(r+=" "),r+=n);return r}const qg=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Wg=_0,F0=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return Wg(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:o}=n,s=Object.keys(i).map(c=>{const d=t==null?void 0:t[c],u=o==null?void 0:o[c];if(d===null)return null;const h=qg(d)||qg(u);return i[c][h]}),a=t&&Object.entries(t).reduce((c,d)=>{let[u,h]=d;return h===void 0||(c[u]=h),c},{}),l=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:u,className:h,...p}=d;return Object.entries(p).every(m=>{let[g,b]=m;return Array.isArray(b)?b.includes({...o,...a}[g]):{...o,...a}[g]===b})?[...c,u,h]:c},[]);return Wg(e,s,l,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z0=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=x.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>x.createElement("svg",{ref:l,...bI,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:z0("lucide",i),...a},[...s.map(([c,d])=>x.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,n)=>{const t=x.forwardRef(({className:r,...i},o)=>x.createElement(xI,{ref:o,iconNode:n,className:z0(`lucide-${wI(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=he("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=he("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=he("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=he("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=he("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=he("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=he("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=he("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=he("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=he("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ff="-",VI=e=>{const n=HI(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(ff);return a[0]===""&&a.length!==1&&a.shift(),W0(a,n)||UI(s)},getConflictingClassGroupIds:(s,a)=>{const l=t[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},W0=(e,n)=>{var s;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),i=r?W0(e.slice(1),r):void 0;if(i)return i;if(n.validators.length===0)return;const o=e.join(ff);return(s=n.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},$g=/^\[(.+)\]$/,UI=e=>{if($g.test(e)){const n=$g.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},HI=e=>{const{theme:n,prefix:t}=e,r={nextPart:new Map,validators:[]};return WI(Object.entries(e.classGroups),t).forEach(([o,s])=>{vp(s,r,o,n)}),r},vp=(e,n,t,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?n:Gg(n,i);o.classGroupId=t;return}if(typeof i=="function"){if(qI(i)){vp(i(r),n,t,r);return}n.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([o,s])=>{vp(s,Gg(n,o),t,r)})})},Gg=(e,n)=>{let t=e;return n.split(ff).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},qI=e=>e.isThemeGetter,WI=(e,n)=>n?e.map(([t,r])=>{const i=r.map(o=>typeof o=="string"?n+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[n+s,a])):o);return[t,i]}):e,$I=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const i=(o,s)=>{t.set(o,s),n++,n>e&&(n=0,r=t,t=new Map)};return{get(o){let s=t.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){t.has(o)?t.set(o,s):i(o,s)}}},$0="!",GI=e=>{const{separator:n,experimentalParseClassName:t}=e,r=n.length===1,i=n[0],o=n.length,s=a=>{const l=[];let c=0,d=0,u;for(let b=0;b<a.length;b++){let f=a[b];if(c===0){if(f===i&&(r||a.slice(b,b+o)===n)){l.push(a.slice(d,b)),d=b+o;continue}if(f==="/"){u=b;continue}}f==="["?c++:f==="]"&&c--}const h=l.length===0?a:a.substring(d),p=h.startsWith($0),m=p?h.substring(1):h,g=u&&u>d?u-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:g}};return t?a=>t({className:a,parseClassName:s}):s},KI=e=>{if(e.length<=1)return e;const n=[];let t=[];return e.forEach(r=>{r[0]==="["?(n.push(...t.sort(),r),t=[]):t.push(r)}),n.push(...t.sort()),n},YI=e=>({cache:$I(e.cacheSize),parseClassName:GI(e),...VI(e)}),JI=/\s+/,QI=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i}=n,o=[],s=e.trim().split(JI);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:d,hasImportantModifier:u,baseClassName:h,maybePostfixModifierPosition:p}=t(c);let m=!!p,g=r(m?h.substring(0,p):h);if(!g){if(!m){a=c+(a.length>0?" "+a:a);continue}if(g=r(h),!g){a=c+(a.length>0?" "+a:a);continue}m=!1}const b=KI(d).join(":"),f=u?b+$0:b,y=f+g;if(o.includes(y))continue;o.push(y);const v=i(g,m);for(let S=0;S<v.length;++S){const T=v[S];o.push(f+T)}a=c+(a.length>0?" "+a:a)}return a};function XI(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=G0(n))&&(r&&(r+=" "),r+=t);return r}const G0=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=G0(e[r]))&&(t&&(t+=" "),t+=n);return t};function ZI(e,...n){let t,r,i,o=s;function s(l){const c=n.reduce((d,u)=>u(d),e());return t=YI(c),r=t.cache.get,i=t.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const d=QI(l,t);return i(l,d),d}return function(){return o(XI.apply(null,arguments))}}const be=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},K0=/^\[(?:([a-z-]+):)?(.+)\]$/i,eR=/^\d+\/\d+$/,nR=new Set(["px","full","screen"]),tR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,oR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ut=e=>po(e)||nR.has(e)||eR.test(e),fr=e=>zo(e,"length",fR),po=e=>!!e&&!Number.isNaN(Number(e)),_u=e=>zo(e,"number",po),is=e=>!!e&&Number.isInteger(Number(e)),aR=e=>e.endsWith("%")&&po(e.slice(0,-1)),ne=e=>K0.test(e),mr=e=>tR.test(e),lR=new Set(["length","size","percentage"]),cR=e=>zo(e,lR,Y0),uR=e=>zo(e,"position",Y0),dR=new Set(["image","url"]),pR=e=>zo(e,dR,gR),hR=e=>zo(e,"",mR),os=()=>!0,zo=(e,n,t)=>{const r=K0.exec(e);return r?r[1]?typeof n=="string"?r[1]===n:n.has(r[1]):t(r[2]):!1},fR=e=>rR.test(e)&&!iR.test(e),Y0=()=>!1,mR=e=>oR.test(e),gR=e=>sR.test(e),yR=()=>{const e=be("colors"),n=be("spacing"),t=be("blur"),r=be("brightness"),i=be("borderColor"),o=be("borderRadius"),s=be("borderSpacing"),a=be("borderWidth"),l=be("contrast"),c=be("grayscale"),d=be("hueRotate"),u=be("invert"),h=be("gap"),p=be("gradientColorStops"),m=be("gradientColorStopPositions"),g=be("inset"),b=be("margin"),f=be("opacity"),y=be("padding"),v=be("saturate"),S=be("scale"),T=be("sepia"),C=be("skew"),A=be("space"),I=be("translate"),M=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",ne,n],O=()=>[ne,n],q=()=>["",Ut,fr],_=()=>["auto",po,ne],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",ne],k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[po,ne];return{cacheSize:500,separator:":",theme:{colors:[os],spacing:[Ut,fr],blur:["none","",mr,ne],brightness:Y(),borderColor:[e],borderRadius:["none","","full",mr,ne],borderSpacing:O(),borderWidth:q(),contrast:Y(),grayscale:j(),hueRotate:Y(),invert:j(),gap:O(),gradientColorStops:[e],gradientColorStopPositions:[aR,fr],inset:N(),margin:N(),opacity:Y(),padding:O(),saturate:Y(),scale:Y(),sepia:j(),skew:Y(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",ne]}],container:["container"],columns:[{columns:[mr]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),ne]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",is,ne]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ne]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",is,ne]}],"grid-cols":[{"grid-cols":[os]}],"col-start-end":[{col:["auto",{span:["full",is,ne]},ne]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[os]}],"row-start-end":[{row:["auto",{span:[is,ne]},ne]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ne]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ne]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ne,n]}],"min-w":[{"min-w":[ne,n,"min","max","fit"]}],"max-w":[{"max-w":[ne,n,"none","full","min","max","fit","prose",{screen:[mr]},mr]}],h:[{h:[ne,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ne,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ne,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ne,n,"auto","min","max","fit"]}],"font-size":[{text:["base",mr,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_u]}],"font-family":[{font:[os]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ne]}],"line-clamp":[{"line-clamp":["none",po,_u]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ut,ne]}],"list-image":[{"list-image":["none",ne]}],"list-style-type":[{list:["none","disc","decimal",ne]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ut,fr]}],"underline-offset":[{"underline-offset":["auto",Ut,ne]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),uR]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",cR]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},pR]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Ut,ne]}],"outline-w":[{outline:[Ut,fr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ut,fr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",mr,hR]}],"shadow-color":[{shadow:[os]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",mr,ne]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ne]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",ne]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",ne]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[is,ne]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ne]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ne]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ne]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ut,fr,_u]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vR=ZI(yR);function zn(...e){return vR(_0(e))}const wR=vI,J0=x.forwardRef(({className:e,...n},t)=>w.jsx(R0,{ref:t,className:zn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...n}));J0.displayName=R0.displayName;const bR=F0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Q0=x.forwardRef(({className:e,variant:n,...t},r)=>w.jsx(D0,{ref:r,className:zn(bR({variant:n}),e),...t}));Q0.displayName=D0.displayName;const xR=x.forwardRef(({className:e,...n},t)=>w.jsx(j0,{ref:t,className:zn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...n}));xR.displayName=j0.displayName;const X0=x.forwardRef(({className:e,...n},t)=>w.jsx(L0,{ref:t,className:zn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...n,children:w.jsx(hf,{className:"h-4 w-4"})}));X0.displayName=L0.displayName;const Z0=x.forwardRef(({className:e,...n},t)=>w.jsx(M0,{ref:t,className:zn("text-sm font-semibold",e),...n}));Z0.displayName=M0.displayName;const e1=x.forwardRef(({className:e,...n},t)=>w.jsx(O0,{ref:t,className:zn("text-sm opacity-90",e),...n}));e1.displayName=O0.displayName;function kR(){const{toasts:e}=TA();return w.jsxs(wR,{children:[e.map(function({id:n,title:t,description:r,action:i,...o}){return w.jsxs(Q0,{...o,children:[w.jsxs("div",{className:"grid gap-1",children:[t&&w.jsx(Z0,{children:t}),r&&w.jsx(e1,{children:r})]}),i,w.jsx(X0,{})]},n)}),w.jsx(J0,{})]})}var Kg=["light","dark"],SR="(prefers-color-scheme: dark)",CR=x.createContext(void 0),TR={setTheme:e=>{},themes:[]},PR=()=>{var e;return(e=x.useContext(CR))!=null?e:TR};x.memo(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let c=o==="system",d=t==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(m=>`'${m}'`).join(",")})`};`:`var d=document.documentElement,n='${t}',s='setAttribute';`,u=i?Kg.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(m,g=!1,b=!0)=>{let f=s?s[m]:m,y=g?m+"|| ''":`'${f}'`,v="";return i&&b&&!g&&Kg.includes(m)&&(v+=`d.style.colorScheme = '${m}';`),t==="class"?g||f?v+=`c.add(${y})`:v+="null":f&&(v+=`d[s](n,${y})`),v},p=e?`!function(){${d}${h(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${c})){var t='${SR}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}${c?"":"else{"+h(o,!1,!1)+"}"}${u}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${n}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${u}}catch(t){}}();`;return x.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var ER=e=>{switch(e){case"success":return RR;case"info":return MR;case"warning":return DR;case"error":return OR;default:return null}},AR=Array(12).fill(0),IR=({visible:e,className:n})=>V.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":e},V.createElement("div",{className:"sonner-spinner"},AR.map((t,r)=>V.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),RR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),DR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),MR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),OR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),jR=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},V.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),LR=()=>{let[e,n]=V.useState(document.hidden);return V.useEffect(()=>{let t=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),e},wp=1,NR=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;let{message:t,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:wp++,o=this.toasts.find(a=>a.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:t}),{...a,...e,id:i,dismissible:s,title:t}):a):this.addToast({title:t,...r,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(t=>t({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let t;n.loading!==void 0&&(t=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));let r=e instanceof Promise?e:e(),i=t!==void 0,o,s=r.then(async l=>{if(o=["resolve",l],V.isValidElement(l))i=!1,this.create({id:t,type:"default",message:l});else if(FR(l)&&!l.ok){i=!1;let c=typeof n.error=="function"?await n.error(`HTTP error! status: ${l.status}`):n.error,d=typeof n.description=="function"?await n.description(`HTTP error! status: ${l.status}`):n.description;this.create({id:t,type:"error",message:c,description:d})}else if(n.success!==void 0){i=!1;let c=typeof n.success=="function"?await n.success(l):n.success,d=typeof n.description=="function"?await n.description(l):n.description;this.create({id:t,type:"success",message:c,description:d})}}).catch(async l=>{if(o=["reject",l],n.error!==void 0){i=!1;let c=typeof n.error=="function"?await n.error(l):n.error,d=typeof n.description=="function"?await n.description(l):n.description;this.create({id:t,type:"error",message:c,description:d})}}).finally(()=>{var l;i&&(this.dismiss(t),t=void 0),(l=n.finally)==null||l.call(n)}),a=()=>new Promise((l,c)=>s.then(()=>o[0]==="reject"?c(o[1]):l(o[1])).catch(c));return typeof t!="string"&&typeof t!="number"?{unwrap:a}:Object.assign(t,{unwrap:a})},this.custom=(e,n)=>{let t=(n==null?void 0:n.id)||wp++;return this.create({jsx:e(t),id:t,...n}),t},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},bn=new NR,_R=(e,n)=>{let t=(n==null?void 0:n.id)||wp++;return bn.addToast({title:e,...n,id:t}),t},FR=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",zR=_R,BR=()=>bn.toasts,VR=()=>bn.getActiveToasts();Object.assign(zR,{success:bn.success,info:bn.info,warning:bn.warning,error:bn.error,custom:bn.custom,message:bn.message,promise:bn.promise,dismiss:bn.dismiss,loading:bn.loading},{getHistory:BR,getToasts:VR});function UR(e,{insertAt:n}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}UR(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ya(e){return e.label!==void 0}var HR=3,qR="32px",WR="16px",Yg=4e3,$R=356,GR=14,KR=20,YR=200;function ot(...e){return e.filter(Boolean).join(" ")}function JR(e){let[n,t]=e.split("-"),r=[];return n&&r.push(n),t&&r.push(t),r}var QR=e=>{var n,t,r,i,o,s,a,l,c,d,u;let{invert:h,toast:p,unstyled:m,interacting:g,setHeights:b,visibleToasts:f,heights:y,index:v,toasts:S,expanded:T,removeToast:C,defaultRichColors:A,closeButton:I,style:M,cancelButtonStyle:E,actionButtonStyle:N,className:O="",descriptionClassName:q="",duration:_,position:H,gap:G,loadingIcon:U,expandByDefault:R,classNames:j,icons:k,closeButtonAriaLabel:Y="Close toast",pauseWhenPageIsHidden:K}=e,[P,Q]=V.useState(null),[me,le]=V.useState(null),[se,an]=V.useState(!1),[ln,vn]=V.useState(!1),[An,ar]=V.useState(!1),[xt,_i]=V.useState(!1),[Fi,ti]=V.useState(!1),[zi,ri]=V.useState(0),[Bt,Yo]=V.useState(0),ii=V.useRef(p.duration||_||Yg),Aa=V.useRef(null),Vt=V.useRef(null),iu=v===0,ou=v+1<=f,D=p.type,B=p.dismissible!==!1,X=p.className||"",re=p.descriptionClassName||"",de=V.useMemo(()=>y.findIndex(Z=>Z.toastId===p.id)||0,[y,p.id]),In=V.useMemo(()=>{var Z;return(Z=p.closeButton)!=null?Z:I},[p.closeButton,I]),kt=V.useMemo(()=>p.duration||_||Yg,[p.duration,_]),Rn=V.useRef(0),Un=V.useRef(0),lr=V.useRef(0),Ne=V.useRef(null),[cr,et]=H.split("-"),Em=V.useMemo(()=>y.reduce((Z,ge,Ce)=>Ce>=de?Z:Z+ge.height,0),[y,de]),Am=LR(),$T=p.invert||h,su=D==="loading";Un.current=V.useMemo(()=>de*G+Em,[de,Em]),V.useEffect(()=>{ii.current=kt},[kt]),V.useEffect(()=>{an(!0)},[]),V.useEffect(()=>{let Z=Vt.current;if(Z){let ge=Z.getBoundingClientRect().height;return Yo(ge),b(Ce=>[{toastId:p.id,height:ge,position:p.position},...Ce]),()=>b(Ce=>Ce.filter(nt=>nt.toastId!==p.id))}},[b,p.id]),V.useLayoutEffect(()=>{if(!se)return;let Z=Vt.current,ge=Z.style.height;Z.style.height="auto";let Ce=Z.getBoundingClientRect().height;Z.style.height=ge,Yo(Ce),b(nt=>nt.find(tt=>tt.toastId===p.id)?nt.map(tt=>tt.toastId===p.id?{...tt,height:Ce}:tt):[{toastId:p.id,height:Ce,position:p.position},...nt])},[se,p.title,p.description,b,p.id]);let ur=V.useCallback(()=>{vn(!0),ri(Un.current),b(Z=>Z.filter(ge=>ge.toastId!==p.id)),setTimeout(()=>{C(p)},YR)},[p,C,b,Un]);V.useEffect(()=>{if(p.promise&&D==="loading"||p.duration===1/0||p.type==="loading")return;let Z;return T||g||K&&Am?(()=>{if(lr.current<Rn.current){let ge=new Date().getTime()-Rn.current;ii.current=ii.current-ge}lr.current=new Date().getTime()})():ii.current!==1/0&&(Rn.current=new Date().getTime(),Z=setTimeout(()=>{var ge;(ge=p.onAutoClose)==null||ge.call(p,p),ur()},ii.current)),()=>clearTimeout(Z)},[T,g,p,D,K,Am,ur]),V.useEffect(()=>{p.delete&&ur()},[ur,p.delete]);function GT(){var Z,ge,Ce;return k!=null&&k.loading?V.createElement("div",{className:ot(j==null?void 0:j.loader,(Z=p==null?void 0:p.classNames)==null?void 0:Z.loader,"sonner-loader"),"data-visible":D==="loading"},k.loading):U?V.createElement("div",{className:ot(j==null?void 0:j.loader,(ge=p==null?void 0:p.classNames)==null?void 0:ge.loader,"sonner-loader"),"data-visible":D==="loading"},U):V.createElement(IR,{className:ot(j==null?void 0:j.loader,(Ce=p==null?void 0:p.classNames)==null?void 0:Ce.loader),visible:D==="loading"})}return V.createElement("li",{tabIndex:0,ref:Vt,className:ot(O,X,j==null?void 0:j.toast,(n=p==null?void 0:p.classNames)==null?void 0:n.toast,j==null?void 0:j.default,j==null?void 0:j[D],(t=p==null?void 0:p.classNames)==null?void 0:t[D]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:A,"data-styled":!(p.jsx||p.unstyled||m),"data-mounted":se,"data-promise":!!p.promise,"data-swiped":Fi,"data-removed":ln,"data-visible":ou,"data-y-position":cr,"data-x-position":et,"data-index":v,"data-front":iu,"data-swiping":An,"data-dismissible":B,"data-type":D,"data-invert":$T,"data-swipe-out":xt,"data-swipe-direction":me,"data-expanded":!!(T||R&&se),style:{"--index":v,"--toasts-before":v,"--z-index":S.length-v,"--offset":`${ln?zi:Un.current}px`,"--initial-height":R?"auto":`${Bt}px`,...M,...p.style},onDragEnd:()=>{ar(!1),Q(null),Ne.current=null},onPointerDown:Z=>{su||!B||(Aa.current=new Date,ri(Un.current),Z.target.setPointerCapture(Z.pointerId),Z.target.tagName!=="BUTTON"&&(ar(!0),Ne.current={x:Z.clientX,y:Z.clientY}))},onPointerUp:()=>{var Z,ge,Ce,nt;if(xt||!B)return;Ne.current=null;let tt=Number(((Z=Vt.current)==null?void 0:Z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),dr=Number(((ge=Vt.current)==null?void 0:ge.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),oi=new Date().getTime()-((Ce=Aa.current)==null?void 0:Ce.getTime()),rt=P==="x"?tt:dr,pr=Math.abs(rt)/oi;if(Math.abs(rt)>=KR||pr>.11){ri(Un.current),(nt=p.onDismiss)==null||nt.call(p,p),le(P==="x"?tt>0?"right":"left":dr>0?"down":"up"),ur(),_i(!0),ti(!1);return}ar(!1),Q(null)},onPointerMove:Z=>{var ge,Ce,nt,tt;if(!Ne.current||!B||((ge=window.getSelection())==null?void 0:ge.toString().length)>0)return;let dr=Z.clientY-Ne.current.y,oi=Z.clientX-Ne.current.x,rt=(Ce=e.swipeDirections)!=null?Ce:JR(H);!P&&(Math.abs(oi)>1||Math.abs(dr)>1)&&Q(Math.abs(oi)>Math.abs(dr)?"x":"y");let pr={x:0,y:0};P==="y"?(rt.includes("top")||rt.includes("bottom"))&&(rt.includes("top")&&dr<0||rt.includes("bottom")&&dr>0)&&(pr.y=dr):P==="x"&&(rt.includes("left")||rt.includes("right"))&&(rt.includes("left")&&oi<0||rt.includes("right")&&oi>0)&&(pr.x=oi),(Math.abs(pr.x)>0||Math.abs(pr.y)>0)&&ti(!0),(nt=Vt.current)==null||nt.style.setProperty("--swipe-amount-x",`${pr.x}px`),(tt=Vt.current)==null||tt.style.setProperty("--swipe-amount-y",`${pr.y}px`)}},In&&!p.jsx?V.createElement("button",{"aria-label":Y,"data-disabled":su,"data-close-button":!0,onClick:su||!B?()=>{}:()=>{var Z;ur(),(Z=p.onDismiss)==null||Z.call(p,p)},className:ot(j==null?void 0:j.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(o=k==null?void 0:k.close)!=null?o:jR):null,p.jsx||x.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:V.createElement(V.Fragment,null,D||p.icon||p.promise?V.createElement("div",{"data-icon":"",className:ot(j==null?void 0:j.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||GT():null,p.type!=="loading"?p.icon||(k==null?void 0:k[D])||ER(D):null):null,V.createElement("div",{"data-content":"",className:ot(j==null?void 0:j.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},V.createElement("div",{"data-title":"",className:ot(j==null?void 0:j.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?V.createElement("div",{"data-description":"",className:ot(q,re,j==null?void 0:j.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),x.isValidElement(p.cancel)?p.cancel:p.cancel&&Ya(p.cancel)?V.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||E,onClick:Z=>{var ge,Ce;Ya(p.cancel)&&B&&((Ce=(ge=p.cancel).onClick)==null||Ce.call(ge,Z),ur())},className:ot(j==null?void 0:j.cancelButton,(d=p==null?void 0:p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,x.isValidElement(p.action)?p.action:p.action&&Ya(p.action)?V.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||N,onClick:Z=>{var ge,Ce;Ya(p.action)&&((Ce=(ge=p.action).onClick)==null||Ce.call(ge,Z),!Z.defaultPrevented&&ur())},className:ot(j==null?void 0:j.actionButton,(u=p==null?void 0:p.classNames)==null?void 0:u.actionButton)},p.action.label):null))};function Jg(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function XR(e,n){let t={};return[e,n].forEach((r,i)=>{let o=i===1,s=o?"--mobile-offset":"--offset",a=o?WR:qR;function l(c){["top","right","bottom","left"].forEach(d=>{t[`${s}-${d}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?t[`${s}-${c}`]=a:t[`${s}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):l(a)}),t}var ZR=x.forwardRef(function(e,n){let{invert:t,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:c,theme:d="light",richColors:u,duration:h,style:p,visibleToasts:m=HR,toastOptions:g,dir:b=Jg(),gap:f=GR,loadingIcon:y,icons:v,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:T}=e,[C,A]=V.useState([]),I=V.useMemo(()=>Array.from(new Set([r].concat(C.filter(K=>K.position).map(K=>K.position)))),[C,r]),[M,E]=V.useState([]),[N,O]=V.useState(!1),[q,_]=V.useState(!1),[H,G]=V.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=V.useRef(null),R=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=V.useRef(null),k=V.useRef(!1),Y=V.useCallback(K=>{A(P=>{var Q;return(Q=P.find(me=>me.id===K.id))!=null&&Q.delete||bn.dismiss(K.id),P.filter(({id:me})=>me!==K.id)})},[]);return V.useEffect(()=>bn.subscribe(K=>{if(K.dismiss){A(P=>P.map(Q=>Q.id===K.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{l0.flushSync(()=>{A(P=>{let Q=P.findIndex(me=>me.id===K.id);return Q!==-1?[...P.slice(0,Q),{...P[Q],...K},...P.slice(Q+1)]:[K,...P]})})})}),[]),V.useEffect(()=>{if(d!=="system"){G(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let K=window.matchMedia("(prefers-color-scheme: dark)");try{K.addEventListener("change",({matches:P})=>{G(P?"dark":"light")})}catch{K.addListener(({matches:Q})=>{try{G(Q?"dark":"light")}catch(me){console.error(me)}})}},[d]),V.useEffect(()=>{C.length<=1&&O(!1)},[C]),V.useEffect(()=>{let K=P=>{var Q,me;i.every(le=>P[le]||P.code===le)&&(O(!0),(Q=U.current)==null||Q.focus()),P.code==="Escape"&&(document.activeElement===U.current||(me=U.current)!=null&&me.contains(document.activeElement))&&O(!1)};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[i]),V.useEffect(()=>{if(U.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,k.current=!1)}},[U.current]),V.createElement("section",{ref:n,"aria-label":`${S} ${R}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},I.map((K,P)=>{var Q;let[me,le]=K.split("-");return C.length?V.createElement("ol",{key:K,dir:b==="auto"?Jg():b,tabIndex:-1,ref:U,className:a,"data-sonner-toaster":!0,"data-theme":H,"data-y-position":me,"data-lifted":N&&C.length>1&&!o,"data-x-position":le,style:{"--front-toast-height":`${((Q=M[0])==null?void 0:Q.height)||0}px`,"--width":`${$R}px`,"--gap":`${f}px`,...p,...XR(l,c)},onBlur:se=>{k.current&&!se.currentTarget.contains(se.relatedTarget)&&(k.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:se=>{se.target instanceof HTMLElement&&se.target.dataset.dismissible==="false"||k.current||(k.current=!0,j.current=se.relatedTarget)},onMouseEnter:()=>O(!0),onMouseMove:()=>O(!0),onMouseLeave:()=>{q||O(!1)},onDragEnd:()=>O(!1),onPointerDown:se=>{se.target instanceof HTMLElement&&se.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},C.filter(se=>!se.position&&P===0||se.position===K).map((se,an)=>{var ln,vn;return V.createElement(QR,{key:se.id,icons:v,index:an,toast:se,defaultRichColors:u,duration:(ln=g==null?void 0:g.duration)!=null?ln:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:t,visibleToasts:m,closeButton:(vn=g==null?void 0:g.closeButton)!=null?vn:s,interacting:q,position:K,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:Y,toasts:C.filter(An=>An.position==se.position),heights:M.filter(An=>An.position==se.position),setHeights:E,expandByDefault:o,gap:f,loadingIcon:y,expanded:N,pauseWhenPageIsHidden:T,swipeDirections:e.swipeDirections})})):null}))});const e2=({...e})=>{const{theme:n="system"}=PR();return w.jsx(ZR,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},n2=["top","right","bottom","left"],$r=Math.min,On=Math.max,nc=Math.round,Ja=Math.floor,Ot=e=>({x:e,y:e}),t2={left:"right",right:"left",bottom:"top",top:"bottom"},r2={start:"end",end:"start"};function bp(e,n,t){return On(e,$r(n,t))}function er(e,n){return typeof e=="function"?e(n):e}function nr(e){return e.split("-")[0]}function Bo(e){return e.split("-")[1]}function mf(e){return e==="x"?"y":"x"}function gf(e){return e==="y"?"height":"width"}const i2=new Set(["top","bottom"]);function Rt(e){return i2.has(nr(e))?"y":"x"}function yf(e){return mf(Rt(e))}function o2(e,n,t){t===void 0&&(t=!1);const r=Bo(e),i=yf(e),o=gf(i);let s=i==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[o]>n.floating[o]&&(s=tc(s)),[s,tc(s)]}function s2(e){const n=tc(e);return[xp(e),n,xp(n)]}function xp(e){return e.replace(/start|end/g,n=>r2[n])}const Qg=["left","right"],Xg=["right","left"],a2=["top","bottom"],l2=["bottom","top"];function c2(e,n,t){switch(e){case"top":case"bottom":return t?n?Xg:Qg:n?Qg:Xg;case"left":case"right":return n?a2:l2;default:return[]}}function u2(e,n,t,r){const i=Bo(e);let o=c2(nr(e),t==="start",r);return i&&(o=o.map(s=>s+"-"+i),n&&(o=o.concat(o.map(xp)))),o}function tc(e){return e.replace(/left|right|bottom|top/g,n=>t2[n])}function d2(e){return{top:0,right:0,bottom:0,left:0,...e}}function n1(e){return typeof e!="number"?d2(e):{top:e,right:e,bottom:e,left:e}}function rc(e){const{x:n,y:t,width:r,height:i}=e;return{width:r,height:i,top:t,left:n,right:n+r,bottom:t+i,x:n,y:t}}function Zg(e,n,t){let{reference:r,floating:i}=e;const o=Rt(n),s=yf(n),a=gf(s),l=nr(n),c=o==="y",d=r.x+r.width/2-i.width/2,u=r.y+r.height/2-i.height/2,h=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:d,y:r.y-i.height};break;case"bottom":p={x:d,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:u};break;case"left":p={x:r.x-i.width,y:u};break;default:p={x:r.x,y:r.y}}switch(Bo(n)){case"start":p[s]-=h*(t&&c?-1:1);break;case"end":p[s]+=h*(t&&c?-1:1);break}return p}const p2=async(e,n,t)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=t,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(n));let c=await s.getElementRects({reference:e,floating:n,strategy:i}),{x:d,y:u}=Zg(c,r,l),h=r,p={},m=0;for(let g=0;g<a.length;g++){const{name:b,fn:f}=a[g],{x:y,y:v,data:S,reset:T}=await f({x:d,y:u,initialPlacement:r,placement:h,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:n}});d=y??d,u=v??u,p={...p,[b]:{...p[b],...S}},T&&m<=50&&(m++,typeof T=="object"&&(T.placement&&(h=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:e,floating:n,strategy:i}):T.rects),{x:d,y:u}=Zg(c,h,l)),g=-1)}return{x:d,y:u,placement:h,strategy:i,middlewareData:p}};async function Ys(e,n){var t;n===void 0&&(n={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:p=0}=er(n,e),m=n1(p),b=a[h?u==="floating"?"reference":"floating":u],f=rc(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(b)))==null||t?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),y=u==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,v=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),S=await(o.isElement==null?void 0:o.isElement(v))?await(o.getScale==null?void 0:o.getScale(v))||{x:1,y:1}:{x:1,y:1},T=rc(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:l}):y);return{top:(f.top-T.top+m.top)/S.y,bottom:(T.bottom-f.bottom+m.bottom)/S.y,left:(f.left-T.left+m.left)/S.x,right:(T.right-f.right+m.right)/S.x}}const h2=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=n,{element:c,padding:d=0}=er(e,n)||{};if(c==null)return{};const u=n1(d),h={x:t,y:r},p=yf(i),m=gf(p),g=await s.getDimensions(c),b=p==="y",f=b?"top":"left",y=b?"bottom":"right",v=b?"clientHeight":"clientWidth",S=o.reference[m]+o.reference[p]-h[p]-o.floating[m],T=h[p]-o.reference[p],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=C?C[v]:0;(!A||!await(s.isElement==null?void 0:s.isElement(C)))&&(A=a.floating[v]||o.floating[m]);const I=S/2-T/2,M=A/2-g[m]/2-1,E=$r(u[f],M),N=$r(u[y],M),O=E,q=A-g[m]-N,_=A/2-g[m]/2+I,H=bp(O,_,q),G=!l.arrow&&Bo(i)!=null&&_!==H&&o.reference[m]/2-(_<O?E:N)-g[m]/2<0,U=G?_<O?_-O:_-q:0;return{[p]:h[p]+U,data:{[p]:H,centerOffset:_-H-U,...G&&{alignmentOffset:U}},reset:G}}}),f2=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=n,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...b}=er(e,n);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const f=nr(i),y=Rt(a),v=nr(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=h||(v||!g?[tc(a)]:s2(a)),C=m!=="none";!h&&C&&T.push(...u2(a,g,m,S));const A=[a,...T],I=await Ys(n,b),M=[];let E=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&M.push(I[f]),u){const _=o2(i,s,S);M.push(I[_[0]],I[_[1]])}if(E=[...E,{placement:i,overflows:M}],!M.every(_=>_<=0)){var N,O;const _=(((N=o.flip)==null?void 0:N.index)||0)+1,H=A[_];if(H&&(!(u==="alignment"?y!==Rt(H):!1)||E.every(R=>R.overflows[0]>0&&Rt(R.placement)===y)))return{data:{index:_,overflows:E},reset:{placement:H}};let G=(O=E.filter(U=>U.overflows[0]<=0).sort((U,R)=>U.overflows[1]-R.overflows[1])[0])==null?void 0:O.placement;if(!G)switch(p){case"bestFit":{var q;const U=(q=E.filter(R=>{if(C){const j=Rt(R.placement);return j===y||j==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(j=>j>0).reduce((j,k)=>j+k,0)]).sort((R,j)=>R[1]-j[1])[0])==null?void 0:q[0];U&&(G=U);break}case"initialPlacement":G=a;break}if(i!==G)return{reset:{placement:G}}}return{}}}};function ey(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function ny(e){return n2.some(n=>e[n]>=0)}const m2=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:r="referenceHidden",...i}=er(e,n);switch(r){case"referenceHidden":{const o=await Ys(n,{...i,elementContext:"reference"}),s=ey(o,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ny(s)}}}case"escaped":{const o=await Ys(n,{...i,altBoundary:!0}),s=ey(o,t.floating);return{data:{escapedOffsets:s,escaped:ny(s)}}}default:return{}}}}},t1=new Set(["left","top"]);async function g2(e,n){const{placement:t,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=nr(t),a=Bo(t),l=Rt(t)==="y",c=t1.has(s)?-1:1,d=o&&l?-1:1,u=er(n,e);let{mainAxis:h,crossAxis:p,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof m=="number"&&(p=a==="end"?m*-1:m),l?{x:p*d,y:h*c}:{x:h*c,y:p*d}}const y2=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:i,y:o,placement:s,middlewareData:a}=n,l=await g2(n,e);return s===((t=a.offset)==null?void 0:t.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},v2=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:i}=n,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:f,y}=b;return{x:f,y}}},...l}=er(e,n),c={x:t,y:r},d=await Ys(n,l),u=Rt(nr(i)),h=mf(u);let p=c[h],m=c[u];if(o){const b=h==="y"?"top":"left",f=h==="y"?"bottom":"right",y=p+d[b],v=p-d[f];p=bp(y,p,v)}if(s){const b=u==="y"?"top":"left",f=u==="y"?"bottom":"right",y=m+d[b],v=m-d[f];m=bp(y,m,v)}const g=a.fn({...n,[h]:p,[u]:m});return{...g,data:{x:g.x-t,y:g.y-r,enabled:{[h]:o,[u]:s}}}}}},w2=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:r,placement:i,rects:o,middlewareData:s}=n,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=er(e,n),d={x:t,y:r},u=Rt(i),h=mf(u);let p=d[h],m=d[u];const g=er(a,n),b=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const v=h==="y"?"height":"width",S=o.reference[h]-o.floating[v]+b.mainAxis,T=o.reference[h]+o.reference[v]-b.mainAxis;p<S?p=S:p>T&&(p=T)}if(c){var f,y;const v=h==="y"?"width":"height",S=t1.has(nr(i)),T=o.reference[u]-o.floating[v]+(S&&((f=s.offset)==null?void 0:f[u])||0)+(S?0:b.crossAxis),C=o.reference[u]+o.reference[v]+(S?0:((y=s.offset)==null?void 0:y[u])||0)-(S?b.crossAxis:0);m<T?m=T:m>C&&(m=C)}return{[h]:p,[u]:m}}}},b2=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,r;const{placement:i,rects:o,platform:s,elements:a}=n,{apply:l=()=>{},...c}=er(e,n),d=await Ys(n,c),u=nr(i),h=Bo(i),p=Rt(i)==="y",{width:m,height:g}=o.floating;let b,f;u==="top"||u==="bottom"?(b=u,f=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(f=u,b=h==="end"?"top":"bottom");const y=g-d.top-d.bottom,v=m-d.left-d.right,S=$r(g-d[b],y),T=$r(m-d[f],v),C=!n.middlewareData.shift;let A=S,I=T;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(I=v),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(A=y),C&&!h){const E=On(d.left,0),N=On(d.right,0),O=On(d.top,0),q=On(d.bottom,0);p?I=m-2*(E!==0||N!==0?E+N:On(d.left,d.right)):A=g-2*(O!==0||q!==0?O+q:On(d.top,d.bottom))}await l({...n,availableWidth:I,availableHeight:A});const M=await s.getDimensions(a.floating);return m!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function zc(){return typeof window<"u"}function Vo(e){return r1(e)?(e.nodeName||"").toLowerCase():"#document"}function Nn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Ft(e){var n;return(n=(r1(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function r1(e){return zc()?e instanceof Node||e instanceof Nn(e).Node:!1}function wt(e){return zc()?e instanceof Element||e instanceof Nn(e).Element:!1}function Nt(e){return zc()?e instanceof HTMLElement||e instanceof Nn(e).HTMLElement:!1}function ty(e){return!zc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Nn(e).ShadowRoot}const x2=new Set(["inline","contents"]);function va(e){const{overflow:n,overflowX:t,overflowY:r,display:i}=bt(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!x2.has(i)}const k2=new Set(["table","td","th"]);function S2(e){return k2.has(Vo(e))}const C2=[":popover-open",":modal"];function Bc(e){return C2.some(n=>{try{return e.matches(n)}catch{return!1}})}const T2=["transform","translate","scale","rotate","perspective"],P2=["transform","translate","scale","rotate","perspective","filter"],E2=["paint","layout","strict","content"];function vf(e){const n=wf(),t=wt(e)?bt(e):e;return T2.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||P2.some(r=>(t.willChange||"").includes(r))||E2.some(r=>(t.contain||"").includes(r))}function A2(e){let n=Gr(e);for(;Nt(n)&&!Do(n);){if(vf(n))return n;if(Bc(n))return null;n=Gr(n)}return null}function wf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const I2=new Set(["html","body","#document"]);function Do(e){return I2.has(Vo(e))}function bt(e){return Nn(e).getComputedStyle(e)}function Vc(e){return wt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Vo(e)==="html")return e;const n=e.assignedSlot||e.parentNode||ty(e)&&e.host||Ft(e);return ty(n)?n.host:n}function i1(e){const n=Gr(e);return Do(n)?e.ownerDocument?e.ownerDocument.body:e.body:Nt(n)&&va(n)?n:i1(n)}function Js(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const i=i1(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Nn(i);if(o){const a=kp(s);return n.concat(s,s.visualViewport||[],va(i)?i:[],a&&t?Js(a):[])}return n.concat(i,Js(i,[],t))}function kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function o1(e){const n=bt(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const i=Nt(e),o=i?e.offsetWidth:t,s=i?e.offsetHeight:r,a=nc(t)!==o||nc(r)!==s;return a&&(t=o,r=s),{width:t,height:r,$:a}}function bf(e){return wt(e)?e:e.contextElement}function ho(e){const n=bf(e);if(!Nt(n))return Ot(1);const t=n.getBoundingClientRect(),{width:r,height:i,$:o}=o1(n);let s=(o?nc(t.width):t.width)/r,a=(o?nc(t.height):t.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const R2=Ot(0);function s1(e){const n=Nn(e);return!wf()||!n.visualViewport?R2:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function D2(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==Nn(e)?!1:n}function Mi(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),o=bf(e);let s=Ot(1);n&&(r?wt(r)&&(s=ho(r)):s=ho(e));const a=D2(o,t,r)?s1(o):Ot(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(o){const h=Nn(o),p=r&&wt(r)?Nn(r):r;let m=h,g=kp(m);for(;g&&r&&p!==m;){const b=ho(g),f=g.getBoundingClientRect(),y=bt(g),v=f.left+(g.clientLeft+parseFloat(y.paddingLeft))*b.x,S=f.top+(g.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,u*=b.y,l+=v,c+=S,m=Nn(g),g=kp(m)}}return rc({width:d,height:u,x:l,y:c})}function xf(e,n){const t=Vc(e).scrollLeft;return n?n.left+t:Mi(Ft(e)).left+t}function a1(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),i=r.left+n.scrollLeft-(t?0:xf(e,r)),o=r.top+n.scrollTop;return{x:i,y:o}}function M2(e){let{elements:n,rect:t,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=Ft(r),a=n?Bc(n.floating):!1;if(r===s||a&&o)return t;let l={scrollLeft:0,scrollTop:0},c=Ot(1);const d=Ot(0),u=Nt(r);if((u||!u&&!o)&&((Vo(r)!=="body"||va(s))&&(l=Vc(r)),Nt(r))){const p=Mi(r);c=ho(r),d.x=p.x+r.clientLeft,d.y=p.y+r.clientTop}const h=s&&!u&&!o?a1(s,l,!0):Ot(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:t.y*c.y-l.scrollTop*c.y+d.y+h.y}}function O2(e){return Array.from(e.getClientRects())}function j2(e){const n=Ft(e),t=Vc(e),r=e.ownerDocument.body,i=On(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),o=On(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let s=-t.scrollLeft+xf(e);const a=-t.scrollTop;return bt(r).direction==="rtl"&&(s+=On(n.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function L2(e,n){const t=Nn(e),r=Ft(e),i=t.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=wf();(!c||c&&n==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}const N2=new Set(["absolute","fixed"]);function _2(e,n){const t=Mi(e,!0,n==="fixed"),r=t.top+e.clientTop,i=t.left+e.clientLeft,o=Nt(e)?ho(e):Ot(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function ry(e,n,t){let r;if(n==="viewport")r=L2(e,t);else if(n==="document")r=j2(Ft(e));else if(wt(n))r=_2(n,t);else{const i=s1(e);r={x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height}}return rc(r)}function l1(e,n){const t=Gr(e);return t===n||!wt(t)||Do(t)?!1:bt(t).position==="fixed"||l1(t,n)}function F2(e,n){const t=n.get(e);if(t)return t;let r=Js(e,[],!1).filter(a=>wt(a)&&Vo(a)!=="body"),i=null;const o=bt(e).position==="fixed";let s=o?Gr(e):e;for(;wt(s)&&!Do(s);){const a=bt(s),l=vf(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&N2.has(i.position)||va(s)&&!l&&l1(e,s))?r=r.filter(d=>d!==s):i=a,s=Gr(s)}return n.set(e,r),r}function z2(e){let{element:n,boundary:t,rootBoundary:r,strategy:i}=e;const s=[...t==="clippingAncestors"?Bc(n)?[]:F2(n,this._c):[].concat(t),r],a=s[0],l=s.reduce((c,d)=>{const u=ry(n,d,i);return c.top=On(u.top,c.top),c.right=$r(u.right,c.right),c.bottom=$r(u.bottom,c.bottom),c.left=On(u.left,c.left),c},ry(n,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function B2(e){const{width:n,height:t}=o1(e);return{width:n,height:t}}function V2(e,n,t){const r=Nt(n),i=Ft(n),o=t==="fixed",s=Mi(e,!0,o,n);let a={scrollLeft:0,scrollTop:0};const l=Ot(0);function c(){l.x=xf(i)}if(r||!r&&!o)if((Vo(n)!=="body"||va(i))&&(a=Vc(n)),r){const p=Mi(n,!0,o,n);l.x=p.x+n.clientLeft,l.y=p.y+n.clientTop}else i&&c();o&&!r&&i&&c();const d=i&&!r&&!o?a1(i,a):Ot(0),u=s.left+a.scrollLeft-l.x-d.x,h=s.top+a.scrollTop-l.y-d.y;return{x:u,y:h,width:s.width,height:s.height}}function Fu(e){return bt(e).position==="static"}function iy(e,n){if(!Nt(e)||bt(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Ft(e)===t&&(t=t.ownerDocument.body),t}function c1(e,n){const t=Nn(e);if(Bc(e))return t;if(!Nt(e)){let i=Gr(e);for(;i&&!Do(i);){if(wt(i)&&!Fu(i))return i;i=Gr(i)}return t}let r=iy(e,n);for(;r&&S2(r)&&Fu(r);)r=iy(r,n);return r&&Do(r)&&Fu(r)&&!vf(r)?t:r||A2(e)||t}const U2=async function(e){const n=this.getOffsetParent||c1,t=this.getDimensions,r=await t(e.floating);return{reference:V2(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function H2(e){return bt(e).direction==="rtl"}const q2={convertOffsetParentRelativeRectToViewportRelativeRect:M2,getDocumentElement:Ft,getClippingRect:z2,getOffsetParent:c1,getElementRects:U2,getClientRects:O2,getDimensions:B2,getScale:ho,isElement:wt,isRTL:H2};function u1(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function W2(e,n){let t=null,r;const i=Ft(e);function o(){var a;clearTimeout(r),(a=t)==null||a.disconnect(),t=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:d,top:u,width:h,height:p}=c;if(a||n(),!h||!p)return;const m=Ja(u),g=Ja(i.clientWidth-(d+h)),b=Ja(i.clientHeight-(u+p)),f=Ja(d),v={rootMargin:-m+"px "+-g+"px "+-b+"px "+-f+"px",threshold:On(0,$r(1,l))||1};let S=!0;function T(C){const A=C[0].intersectionRatio;if(A!==l){if(!S)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!u1(c,e.getBoundingClientRect())&&s(),S=!1}try{t=new IntersectionObserver(T,{...v,root:i.ownerDocument})}catch{t=new IntersectionObserver(T,v)}t.observe(e)}return s(!0),o}function $2(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=bf(e),d=i||o?[...c?Js(c):[],...Js(n)]:[];d.forEach(f=>{i&&f.addEventListener("scroll",t,{passive:!0}),o&&f.addEventListener("resize",t)});const u=c&&a?W2(c,t):null;let h=-1,p=null;s&&(p=new ResizeObserver(f=>{let[y]=f;y&&y.target===c&&p&&(p.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(n)})),t()}),c&&!l&&p.observe(c),p.observe(n));let m,g=l?Mi(e):null;l&&b();function b(){const f=Mi(e);g&&!u1(g,f)&&t(),g=f,m=requestAnimationFrame(b)}return t(),()=>{var f;d.forEach(y=>{i&&y.removeEventListener("scroll",t),o&&y.removeEventListener("resize",t)}),u==null||u(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(m)}}const G2=y2,K2=v2,Y2=f2,J2=b2,Q2=m2,oy=h2,X2=w2,Z2=(e,n,t)=>{const r=new Map,i={platform:q2,...t},o={...i.platform,_c:r};return p2(e,n,{...i,platform:o})};var eD=typeof document<"u",nD=function(){},xl=eD?x.useLayoutEffect:nD;function ic(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,i;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!ic(e[r],n[r]))return!1;return!0}if(i=Object.keys(e),t=i.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,i[r]))return!1;for(r=t;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!ic(e[o],n[o]))return!1}return!0}return e!==e&&n!==n}function d1(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function sy(e,n){const t=d1(e);return Math.round(n*t)/t}function zu(e){const n=x.useRef(e);return xl(()=>{n.current=e}),n}function tD(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[d,u]=x.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[h,p]=x.useState(r);ic(h,r)||p(r);const[m,g]=x.useState(null),[b,f]=x.useState(null),y=x.useCallback(R=>{R!==C.current&&(C.current=R,g(R))},[]),v=x.useCallback(R=>{R!==A.current&&(A.current=R,f(R))},[]),S=o||m,T=s||b,C=x.useRef(null),A=x.useRef(null),I=x.useRef(d),M=l!=null,E=zu(l),N=zu(i),O=zu(c),q=x.useCallback(()=>{if(!C.current||!A.current)return;const R={placement:n,strategy:t,middleware:h};N.current&&(R.platform=N.current),Z2(C.current,A.current,R).then(j=>{const k={...j,isPositioned:O.current!==!1};_.current&&!ic(I.current,k)&&(I.current=k,ma.flushSync(()=>{u(k)}))})},[h,n,t,N,O]);xl(()=>{c===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[c]);const _=x.useRef(!1);xl(()=>(_.current=!0,()=>{_.current=!1}),[]),xl(()=>{if(S&&(C.current=S),T&&(A.current=T),S&&T){if(E.current)return E.current(S,T,q);q()}},[S,T,q,E,M]);const H=x.useMemo(()=>({reference:C,floating:A,setReference:y,setFloating:v}),[y,v]),G=x.useMemo(()=>({reference:S,floating:T}),[S,T]),U=x.useMemo(()=>{const R={position:t,left:0,top:0};if(!G.floating)return R;const j=sy(G.floating,d.x),k=sy(G.floating,d.y);return a?{...R,transform:"translate("+j+"px, "+k+"px)",...d1(G.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:j,top:k}},[t,a,G.floating,d.x,d.y]);return x.useMemo(()=>({...d,update:q,refs:H,elements:G,floatingStyles:U}),[d,q,H,G,U])}const rD=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:i}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?oy({element:r.current,padding:i}).fn(t):{}:r?oy({element:r,padding:i}).fn(t):{}}}},iD=(e,n)=>({...G2(e),options:[e,n]}),oD=(e,n)=>({...K2(e),options:[e,n]}),sD=(e,n)=>({...X2(e),options:[e,n]}),aD=(e,n)=>({...Y2(e),options:[e,n]}),lD=(e,n)=>({...J2(e),options:[e,n]}),cD=(e,n)=>({...Q2(e),options:[e,n]}),uD=(e,n)=>({...rD(e),options:[e,n]});var dD="Arrow",p1=x.forwardRef((e,n)=>{const{children:t,width:r=10,height:i=5,...o}=e;return w.jsx(Pn.svg,{...o,ref:n,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});p1.displayName=dD;var pD=p1;function hD(e){const[n,t]=x.useState(void 0);return Wr(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=e.offsetWidth,a=e.offsetHeight;t({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),n}var h1="Popper",[f1,m1]=Nc(h1),[xU,g1]=f1(h1),y1="PopperAnchor",v1=x.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:r,...i}=e,o=g1(y1,t),s=x.useRef(null),a=vt(n,s);return x.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:w.jsx(Pn.div,{...i,ref:a})});v1.displayName=y1;var kf="PopperContent",[fD,mD]=f1(kf),w1=x.forwardRef((e,n)=>{var se,an,ln,vn,An,ar;const{__scopePopper:t,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:u="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:m,...g}=e,b=g1(kf,t),[f,y]=x.useState(null),v=vt(n,xt=>y(xt)),[S,T]=x.useState(null),C=hD(S),A=(C==null?void 0:C.width)??0,I=(C==null?void 0:C.height)??0,M=r+(o!=="center"?"-"+o:""),E=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},N=Array.isArray(c)?c:[c],O=N.length>0,q={padding:E,boundary:N.filter(yD),altBoundary:O},{refs:_,floatingStyles:H,placement:G,isPositioned:U,middlewareData:R}=tD({strategy:"fixed",placement:M,whileElementsMounted:(...xt)=>$2(...xt,{animationFrame:p==="always"}),elements:{reference:b.anchor},middleware:[iD({mainAxis:i+I,alignmentAxis:s}),l&&oD({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?sD():void 0,...q}),l&&aD({...q}),lD({...q,apply:({elements:xt,rects:_i,availableWidth:Fi,availableHeight:ti})=>{const{width:zi,height:ri}=_i.reference,Bt=xt.floating.style;Bt.setProperty("--radix-popper-available-width",`${Fi}px`),Bt.setProperty("--radix-popper-available-height",`${ti}px`),Bt.setProperty("--radix-popper-anchor-width",`${zi}px`),Bt.setProperty("--radix-popper-anchor-height",`${ri}px`)}}),S&&uD({element:S,padding:a}),vD({arrowWidth:A,arrowHeight:I}),h&&cD({strategy:"referenceHidden",...q})]}),[j,k]=k1(G),Y=qr(m);Wr(()=>{U&&(Y==null||Y())},[U,Y]);const K=(se=R.arrow)==null?void 0:se.x,P=(an=R.arrow)==null?void 0:an.y,Q=((ln=R.arrow)==null?void 0:ln.centerOffset)!==0,[me,le]=x.useState();return Wr(()=>{f&&le(window.getComputedStyle(f).zIndex)},[f]),w.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...H,transform:U?H.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[(vn=R.transformOrigin)==null?void 0:vn.x,(An=R.transformOrigin)==null?void 0:An.y].join(" "),...((ar=R.hide)==null?void 0:ar.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:w.jsx(fD,{scope:t,placedSide:j,onArrowChange:T,arrowX:K,arrowY:P,shouldHideArrow:Q,children:w.jsx(Pn.div,{"data-side":j,"data-align":k,...g,ref:v,style:{...g.style,animation:U?void 0:"none"}})})})});w1.displayName=kf;var b1="PopperArrow",gD={top:"bottom",right:"left",bottom:"top",left:"right"},x1=x.forwardRef(function(n,t){const{__scopePopper:r,...i}=n,o=mD(b1,r),s=gD[o.placedSide];return w.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:w.jsx(pD,{...i,ref:t,style:{...i.style,display:"block"}})})});x1.displayName=b1;function yD(e){return e!==null}var vD=e=>({name:"transformOrigin",options:e,fn(n){var b,f,y;const{placement:t,rects:r,middlewareData:i}=n,s=((b=i.arrow)==null?void 0:b.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[c,d]=k1(t),u={start:"0%",center:"50%",end:"100%"}[d],h=(((f=i.arrow)==null?void 0:f.x)??0)+a/2,p=(((y=i.arrow)==null?void 0:y.y)??0)+l/2;let m="",g="";return c==="bottom"?(m=s?u:`${h}px`,g=`${-l}px`):c==="top"?(m=s?u:`${h}px`,g=`${r.floating.height+l}px`):c==="right"?(m=`${-l}px`,g=s?u:`${p}px`):c==="left"&&(m=`${r.floating.width+l}px`,g=s?u:`${p}px`),{data:{x:m,y:g}}}});function k1(e){const[n,t="center"]=e.split("-");return[n,t]}var wD=v1,bD=w1,xD=x1,[Uc,kU]=Nc("Tooltip",[m1]),Sf=m1(),S1="TooltipProvider",kD=700,ay="tooltip.open",[SD,C1]=Uc(S1),T1=e=>{const{__scopeTooltip:n,delayDuration:t=kD,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=x.useRef(!0),a=x.useRef(!1),l=x.useRef(0);return x.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),w.jsx(SD,{scope:n,isOpenDelayedRef:s,delayDuration:t,onOpen:x.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:x.useCallback(c=>{a.current=c},[]),disableHoverableContent:i,children:o})};T1.displayName=S1;var P1="Tooltip",[SU,Hc]=Uc(P1),Sp="TooltipTrigger",CD=x.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,i=Hc(Sp,t),o=C1(Sp,t),s=Sf(t),a=x.useRef(null),l=vt(n,a,i.onTriggerChange),c=x.useRef(!1),d=x.useRef(!1),u=x.useCallback(()=>c.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),w.jsx(wD,{asChild:!0,...s,children:w.jsx(Pn.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Ue(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ue(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Ue(e.onPointerDown,()=>{i.open&&i.onClose(),c.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:Ue(e.onFocus,()=>{c.current||i.onOpen()}),onBlur:Ue(e.onBlur,i.onClose),onClick:Ue(e.onClick,i.onClose)})})});CD.displayName=Sp;var TD="TooltipPortal",[CU,PD]=Uc(TD,{forceMount:void 0}),Mo="TooltipContent",E1=x.forwardRef((e,n)=>{const t=PD(Mo,e.__scopeTooltip),{forceMount:r=t.forceMount,side:i="top",...o}=e,s=Hc(Mo,e.__scopeTooltip);return w.jsx(sf,{present:r||s.open,children:s.disableHoverableContent?w.jsx(A1,{side:i,...o,ref:n}):w.jsx(ED,{side:i,...o,ref:n})})}),ED=x.forwardRef((e,n)=>{const t=Hc(Mo,e.__scopeTooltip),r=C1(Mo,e.__scopeTooltip),i=x.useRef(null),o=vt(n,i),[s,a]=x.useState(null),{trigger:l,onClose:c}=t,d=i.current,{onPointerInTransitChange:u}=r,h=x.useCallback(()=>{a(null),u(!1)},[u]),p=x.useCallback((m,g)=>{const b=m.currentTarget,f={x:m.clientX,y:m.clientY},y=MD(f,b.getBoundingClientRect()),v=OD(f,y),S=jD(g.getBoundingClientRect()),T=ND([...v,...S]);a(T),u(!0)},[u]);return x.useEffect(()=>()=>h(),[h]),x.useEffect(()=>{if(l&&d){const m=b=>p(b,d),g=b=>p(b,l);return l.addEventListener("pointerleave",m),d.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",m),d.removeEventListener("pointerleave",g)}}},[l,d,p,h]),x.useEffect(()=>{if(s){const m=g=>{const b=g.target,f={x:g.clientX,y:g.clientY},y=(l==null?void 0:l.contains(b))||(d==null?void 0:d.contains(b)),v=!LD(f,s);y?h():v&&(h(),c())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[l,d,s,c,h]),w.jsx(A1,{...e,ref:o})}),[AD,ID]=Uc(P1,{isInside:!1}),RD=IA("TooltipContent"),A1=x.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=e,l=Hc(Mo,t),c=Sf(t),{onClose:d}=l;return x.useEffect(()=>(document.addEventListener(ay,d),()=>document.removeEventListener(ay,d)),[d]),x.useEffect(()=>{if(l.trigger){const u=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[l.trigger,d]),w.jsx(of,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:d,children:w.jsxs(bD,{"data-state":l.stateAttribute,...c,...a,ref:n,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(RD,{children:r}),w.jsx(AD,{scope:t,isInside:!0,children:w.jsx(eI,{id:l.contentId,role:"tooltip",children:i||r})})]})})});E1.displayName=Mo;var I1="TooltipArrow",DD=x.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,i=Sf(t);return ID(I1,t).isInside?null:w.jsx(xD,{...i,...r,ref:n})});DD.displayName=I1;function MD(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),i=Math.abs(n.right-e.x),o=Math.abs(n.left-e.x);switch(Math.min(t,r,i,o)){case o:return"left";case i:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function OD(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function jD(e){const{top:n,right:t,bottom:r,left:i}=e;return[{x:i,y:n},{x:t,y:n},{x:t,y:r},{x:i,y:r}]}function LD(e,n){const{x:t,y:r}=e;let i=!1;for(let o=0,s=n.length-1;o<n.length;s=o++){const a=n[o],l=n[s],c=a.x,d=a.y,u=l.x,h=l.y;d>r!=h>r&&t<(u-c)*(r-d)/(h-d)+c&&(i=!i)}return i}function ND(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),_D(n)}function _D(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}var FD=T1,R1=E1;const zD=FD,BD=x.forwardRef(({className:e,sideOffset:n=4,...t},r)=>w.jsx(R1,{ref:r,sideOffset:n,className:zn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));BD.displayName=R1.displayName;var qc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Wc=typeof window>"u"||"Deno"in globalThis;function ct(){}function VD(e,n){return typeof e=="function"?e(n):e}function UD(e){return typeof e=="number"&&e>=0&&e!==1/0}function HD(e,n){return Math.max(e+(n||0)-Date.now(),0)}function Cp(e,n){return typeof e=="function"?e(n):e}function qD(e,n){return typeof e=="function"?e(n):e}function ly(e,n){const{type:t="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(n.queryHash!==Cf(s,n.options))return!1}else if(!Xs(n.queryKey,s))return!1}if(t!=="all"){const l=n.isActive();if(t==="active"&&!l||t==="inactive"&&l)return!1}return!(typeof a=="boolean"&&n.isStale()!==a||i&&i!==n.state.fetchStatus||o&&!o(n))}function cy(e,n){const{exact:t,status:r,predicate:i,mutationKey:o}=e;if(o){if(!n.options.mutationKey)return!1;if(t){if(Qs(n.options.mutationKey)!==Qs(o))return!1}else if(!Xs(n.options.mutationKey,o))return!1}return!(r&&n.state.status!==r||i&&!i(n))}function Cf(e,n){return((n==null?void 0:n.queryKeyHashFn)||Qs)(e)}function Qs(e){return JSON.stringify(e,(n,t)=>Tp(t)?Object.keys(t).sort().reduce((r,i)=>(r[i]=t[i],r),{}):t)}function Xs(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(t=>Xs(e[t],n[t])):!1}function D1(e,n){if(e===n)return e;const t=uy(e)&&uy(n);if(t||Tp(e)&&Tp(n)){const r=t?e:Object.keys(e),i=r.length,o=t?n:Object.keys(n),s=o.length,a=t?[]:{},l=new Set(r);let c=0;for(let d=0;d<s;d++){const u=t?d:o[d];(!t&&l.has(u)||t)&&e[u]===void 0&&n[u]===void 0?(a[u]=void 0,c++):(a[u]=D1(e[u],n[u]),a[u]===e[u]&&e[u]!==void 0&&c++)}return i===s&&c===i?e:a}return n}function uy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Tp(e){if(!dy(e))return!1;const n=e.constructor;if(n===void 0)return!0;const t=n.prototype;return!(!dy(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function dy(e){return Object.prototype.toString.call(e)==="[object Object]"}function WD(e){return new Promise(n=>{setTimeout(n,e)})}function $D(e,n,t){return typeof t.structuralSharing=="function"?t.structuralSharing(e,n):t.structuralSharing!==!1?D1(e,n):n}function GD(e,n,t=0){const r=[...e,n];return t&&r.length>t?r.slice(1):r}function KD(e,n,t=0){const r=[n,...e];return t&&r.length>t?r.slice(0,-1):r}var Tf=Symbol();function M1(e,n){return!e.queryFn&&(n!=null&&n.initialPromise)?()=>n.initialPromise:!e.queryFn||e.queryFn===Tf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var yi,Cr,go,Vw,YD=(Vw=class extends qc{constructor(){super();pe(this,yi);pe(this,Cr);pe(this,go);ee(this,go,n=>{if(!Wc&&window.addEventListener){const t=()=>n();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){L(this,Cr)||this.setEventListener(L(this,go))}onUnsubscribe(){var n;this.hasListeners()||((n=L(this,Cr))==null||n.call(this),ee(this,Cr,void 0))}setEventListener(n){var t;ee(this,go,n),(t=L(this,Cr))==null||t.call(this),ee(this,Cr,n(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(n){L(this,yi)!==n&&(ee(this,yi,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(t=>{t(n)})}isFocused(){var n;return typeof L(this,yi)=="boolean"?L(this,yi):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},yi=new WeakMap,Cr=new WeakMap,go=new WeakMap,Vw),O1=new YD,yo,Tr,vo,Uw,JD=(Uw=class extends qc{constructor(){super();pe(this,yo,!0);pe(this,Tr);pe(this,vo);ee(this,vo,n=>{if(!Wc&&window.addEventListener){const t=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){L(this,Tr)||this.setEventListener(L(this,vo))}onUnsubscribe(){var n;this.hasListeners()||((n=L(this,Tr))==null||n.call(this),ee(this,Tr,void 0))}setEventListener(n){var t;ee(this,vo,n),(t=L(this,Tr))==null||t.call(this),ee(this,Tr,n(this.setOnline.bind(this)))}setOnline(n){L(this,yo)!==n&&(ee(this,yo,n),this.listeners.forEach(r=>{r(n)}))}isOnline(){return L(this,yo)}},yo=new WeakMap,Tr=new WeakMap,vo=new WeakMap,Uw),oc=new JD;function QD(){let e,n;const t=new Promise((i,o)=>{e=i,n=o});t.status="pending",t.catch(()=>{});function r(i){Object.assign(t,i),delete t.resolve,delete t.reject}return t.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},t.reject=i=>{r({status:"rejected",reason:i}),n(i)},t}function XD(e){return Math.min(1e3*2**e,3e4)}function j1(e){return(e??"online")==="online"?oc.isOnline():!0}var L1=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Bu(e){return e instanceof L1}function N1(e){let n=!1,t=0,r=!1,i;const o=QD(),s=g=>{var b;r||(h(new L1(g)),(b=e.abort)==null||b.call(e))},a=()=>{n=!0},l=()=>{n=!1},c=()=>O1.isFocused()&&(e.networkMode==="always"||oc.isOnline())&&e.canRun(),d=()=>j1(e.networkMode)&&e.canRun(),u=g=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,g),i==null||i(),o.resolve(g))},h=g=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,g),i==null||i(),o.reject(g))},p=()=>new Promise(g=>{var b;i=f=>{(r||c())&&g(f)},(b=e.onPause)==null||b.call(e)}).then(()=>{var g;i=void 0,r||(g=e.onContinue)==null||g.call(e)}),m=()=>{if(r)return;let g;const b=t===0?e.initialPromise:void 0;try{g=b??e.fn()}catch(f){g=Promise.reject(f)}Promise.resolve(g).then(u).catch(f=>{var C;if(r)return;const y=e.retry??(Wc?0:3),v=e.retryDelay??XD,S=typeof v=="function"?v(t,f):v,T=y===!0||typeof y=="number"&&t<y||typeof y=="function"&&y(t,f);if(n||!T){h(f);return}t++,(C=e.onFail)==null||C.call(e,t,f),WD(S).then(()=>c()?void 0:p()).then(()=>{n?h(f):m()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?m():p().then(m),o)}}var ZD=e=>setTimeout(e,0);function eM(){let e=[],n=0,t=a=>{a()},r=a=>{a()},i=ZD;const o=a=>{n?e.push(a):i(()=>{t(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{t(l)})})})};return{batch:a=>{let l;n++;try{l=a()}finally{n--,n||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{t=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var dn=eM(),vi,Hw,_1=(Hw=class{constructor(){pe(this,vi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),UD(this.gcTime)&&ee(this,vi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Wc?1/0:5*60*1e3))}clearGcTimeout(){L(this,vi)&&(clearTimeout(L(this,vi)),ee(this,vi,void 0))}},vi=new WeakMap,Hw),wo,wi,qn,bi,en,la,xi,ut,Ht,qw,nM=(qw=class extends _1{constructor(n){super();pe(this,ut);pe(this,wo);pe(this,wi);pe(this,qn);pe(this,bi);pe(this,en);pe(this,la);pe(this,xi);ee(this,xi,!1),ee(this,la,n.defaultOptions),this.setOptions(n.options),this.observers=[],ee(this,bi,n.client),ee(this,qn,L(this,bi).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,ee(this,wo,rM(this.options)),this.state=n.state??L(this,wo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var n;return(n=L(this,en))==null?void 0:n.promise}setOptions(n){this.options={...L(this,la),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&L(this,qn).remove(this)}setData(n,t){const r=$D(this.state.data,n,this.options);return Qe(this,ut,Ht).call(this,{data:r,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),r}setState(n,t){Qe(this,ut,Ht).call(this,{type:"setState",state:n,setStateOptions:t})}cancel(n){var r,i;const t=(r=L(this,en))==null?void 0:r.promise;return(i=L(this,en))==null||i.cancel(n),t?t.then(ct).catch(ct):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(L(this,wo))}isActive(){return this.observers.some(n=>qD(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Tf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>Cp(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!HD(this.state.dataUpdatedAt,n)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(t=L(this,en))==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(t=L(this,en))==null||t.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),L(this,qn).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(t=>t!==n),this.observers.length||(L(this,en)&&(L(this,xi)?L(this,en).cancel({revert:!0}):L(this,en).cancelRetry()),this.scheduleGc()),L(this,qn).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Qe(this,ut,Ht).call(this,{type:"invalidate"})}fetch(n,t){var c,d,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(L(this,en))return L(this,en).continueRetry(),L(this,en).promise}if(n&&this.setOptions(n),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(ee(this,xi,!0),r.signal)})},o=()=>{const h=M1(this.options,t),m=(()=>{const g={client:L(this,bi),queryKey:this.queryKey,meta:this.meta};return i(g),g})();return ee(this,xi,!1),this.options.persister?this.options.persister(h,m,this):h(m)},a=(()=>{const h={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:L(this,bi),state:this.state,fetchFn:o};return i(h),h})();(c=this.options.behavior)==null||c.onFetch(a,this),ee(this,wi,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Qe(this,ut,Ht).call(this,{type:"fetch",meta:(u=a.fetchOptions)==null?void 0:u.meta});const l=h=>{var p,m,g,b;Bu(h)&&h.silent||Qe(this,ut,Ht).call(this,{type:"error",error:h}),Bu(h)||((m=(p=L(this,qn).config).onError)==null||m.call(p,h,this),(b=(g=L(this,qn).config).onSettled)==null||b.call(g,this.state.data,h,this)),this.scheduleGc()};return ee(this,en,N1({initialPromise:t==null?void 0:t.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var p,m,g,b;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(f){l(f);return}(m=(p=L(this,qn).config).onSuccess)==null||m.call(p,h,this),(b=(g=L(this,qn).config).onSettled)==null||b.call(g,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,p)=>{Qe(this,ut,Ht).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Qe(this,ut,Ht).call(this,{type:"pause"})},onContinue:()=>{Qe(this,ut,Ht).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),L(this,en).start()}},wo=new WeakMap,wi=new WeakMap,qn=new WeakMap,bi=new WeakMap,en=new WeakMap,la=new WeakMap,xi=new WeakMap,ut=new WeakSet,Ht=function(n){const t=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...tM(r.data,this.options),fetchMeta:n.meta??null};case"success":return ee(this,wi,void 0),{...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=n.error;return Bu(i)&&i.revert&&L(this,wi)?{...L(this,wi),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=t(this.state),dn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),L(this,qn).notify({query:this,type:"updated",action:n})})},qw);function tM(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:j1(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function rM(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,t=n!==void 0,r=t?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var Pt,Ww,iM=(Ww=class extends qc{constructor(n={}){super();pe(this,Pt);this.config=n,ee(this,Pt,new Map)}build(n,t,r){const i=t.queryKey,o=t.queryHash??Cf(i,t);let s=this.get(o);return s||(s=new nM({client:n,queryKey:i,queryHash:o,options:n.defaultQueryOptions(t),state:r,defaultOptions:n.getQueryDefaults(i)}),this.add(s)),s}add(n){L(this,Pt).has(n.queryHash)||(L(this,Pt).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const t=L(this,Pt).get(n.queryHash);t&&(n.destroy(),t===n&&L(this,Pt).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){dn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return L(this,Pt).get(n)}getAll(){return[...L(this,Pt).values()]}find(n){const t={exact:!0,...n};return this.getAll().find(r=>ly(t,r))}findAll(n={}){const t=this.getAll();return Object.keys(n).length>0?t.filter(r=>ly(n,r)):t}notify(n){dn.batch(()=>{this.listeners.forEach(t=>{t(n)})})}onFocus(){dn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){dn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Pt=new WeakMap,Ww),Et,cn,ki,At,yr,$w,oM=($w=class extends _1{constructor(n){super();pe(this,At);pe(this,Et);pe(this,cn);pe(this,ki);this.mutationId=n.mutationId,ee(this,cn,n.mutationCache),ee(this,Et,[]),this.state=n.state||sM(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){L(this,Et).includes(n)||(L(this,Et).push(n),this.clearGcTimeout(),L(this,cn).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){ee(this,Et,L(this,Et).filter(t=>t!==n)),this.scheduleGc(),L(this,cn).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){L(this,Et).length||(this.state.status==="pending"?this.scheduleGc():L(this,cn).remove(this))}continue(){var n;return((n=L(this,ki))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var o,s,a,l,c,d,u,h,p,m,g,b,f,y,v,S,T,C,A,I;const t=()=>{Qe(this,At,yr).call(this,{type:"continue"})};ee(this,ki,N1({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(M,E)=>{Qe(this,At,yr).call(this,{type:"failed",failureCount:M,error:E})},onPause:()=>{Qe(this,At,yr).call(this,{type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>L(this,cn).canRun(this)}));const r=this.state.status==="pending",i=!L(this,ki).canStart();try{if(r)t();else{Qe(this,At,yr).call(this,{type:"pending",variables:n,isPaused:i}),await((s=(o=L(this,cn).config).onMutate)==null?void 0:s.call(o,n,this));const E=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,n));E!==this.state.context&&Qe(this,At,yr).call(this,{type:"pending",context:E,variables:n,isPaused:i})}const M=await L(this,ki).start();return await((d=(c=L(this,cn).config).onSuccess)==null?void 0:d.call(c,M,n,this.state.context,this)),await((h=(u=this.options).onSuccess)==null?void 0:h.call(u,M,n,this.state.context)),await((m=(p=L(this,cn).config).onSettled)==null?void 0:m.call(p,M,null,this.state.variables,this.state.context,this)),await((b=(g=this.options).onSettled)==null?void 0:b.call(g,M,null,n,this.state.context)),Qe(this,At,yr).call(this,{type:"success",data:M}),M}catch(M){try{throw await((y=(f=L(this,cn).config).onError)==null?void 0:y.call(f,M,n,this.state.context,this)),await((S=(v=this.options).onError)==null?void 0:S.call(v,M,n,this.state.context)),await((C=(T=L(this,cn).config).onSettled)==null?void 0:C.call(T,void 0,M,this.state.variables,this.state.context,this)),await((I=(A=this.options).onSettled)==null?void 0:I.call(A,void 0,M,n,this.state.context)),M}finally{Qe(this,At,yr).call(this,{type:"error",error:M})}}finally{L(this,cn).runNext(this)}}},Et=new WeakMap,cn=new WeakMap,ki=new WeakMap,At=new WeakSet,yr=function(n){const t=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=t(this.state),dn.batch(()=>{L(this,Et).forEach(r=>{r.onMutationUpdate(n)}),L(this,cn).notify({mutation:this,type:"updated",action:n})})},$w);function sM(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $t,dt,ca,Gw,aM=(Gw=class extends qc{constructor(n={}){super();pe(this,$t);pe(this,dt);pe(this,ca);this.config=n,ee(this,$t,new Set),ee(this,dt,new Map),ee(this,ca,0)}build(n,t,r){const i=new oM({mutationCache:this,mutationId:++Ia(this,ca)._,options:n.defaultMutationOptions(t),state:r});return this.add(i),i}add(n){L(this,$t).add(n);const t=Qa(n);if(typeof t=="string"){const r=L(this,dt).get(t);r?r.push(n):L(this,dt).set(t,[n])}this.notify({type:"added",mutation:n})}remove(n){if(L(this,$t).delete(n)){const t=Qa(n);if(typeof t=="string"){const r=L(this,dt).get(t);if(r)if(r.length>1){const i=r.indexOf(n);i!==-1&&r.splice(i,1)}else r[0]===n&&L(this,dt).delete(t)}}this.notify({type:"removed",mutation:n})}canRun(n){const t=Qa(n);if(typeof t=="string"){const r=L(this,dt).get(t),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===n}else return!0}runNext(n){var r;const t=Qa(n);if(typeof t=="string"){const i=(r=L(this,dt).get(t))==null?void 0:r.find(o=>o!==n&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){dn.batch(()=>{L(this,$t).forEach(n=>{this.notify({type:"removed",mutation:n})}),L(this,$t).clear(),L(this,dt).clear()})}getAll(){return Array.from(L(this,$t))}find(n){const t={exact:!0,...n};return this.getAll().find(r=>cy(t,r))}findAll(n={}){return this.getAll().filter(t=>cy(n,t))}notify(n){dn.batch(()=>{this.listeners.forEach(t=>{t(n)})})}resumePausedMutations(){const n=this.getAll().filter(t=>t.state.isPaused);return dn.batch(()=>Promise.all(n.map(t=>t.continue().catch(ct))))}},$t=new WeakMap,dt=new WeakMap,ca=new WeakMap,Gw);function Qa(e){var n;return(n=e.options.scope)==null?void 0:n.id}function py(e){return{onFetch:(n,t)=>{var d,u,h,p,m;const r=n.options,i=(h=(u=(d=n.fetchOptions)==null?void 0:d.meta)==null?void 0:u.fetchMore)==null?void 0:h.direction,o=((p=n.state.data)==null?void 0:p.pages)||[],s=((m=n.state.data)==null?void 0:m.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const b=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(n.signal.aborted?g=!0:n.signal.addEventListener("abort",()=>{g=!0}),n.signal)})},f=M1(n.options,n.fetchOptions),y=async(v,S,T)=>{if(g)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const A=(()=>{const N={client:n.client,queryKey:n.queryKey,pageParam:S,direction:T?"backward":"forward",meta:n.options.meta};return b(N),N})(),I=await f(A),{maxPages:M}=n.options,E=T?KD:GD;return{pages:E(v.pages,I,M),pageParams:E(v.pageParams,S,M)}};if(i&&o.length){const v=i==="backward",S=v?lM:hy,T={pages:o,pageParams:s},C=S(r,T);a=await y(T,C,v)}else{const v=e??o.length;do{const S=l===0?s[0]??r.initialPageParam:hy(r,a);if(l>0&&S==null)break;a=await y(a,S),l++}while(l<v)}return a};n.options.persister?n.fetchFn=()=>{var g,b;return(b=(g=n.options).persister)==null?void 0:b.call(g,c,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},t)}:n.fetchFn=c}}}function hy(e,{pages:n,pageParams:t}){const r=n.length-1;return n.length>0?e.getNextPageParam(n[r],n,t[r],t):void 0}function lM(e,{pages:n,pageParams:t}){var r;return n.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,n[0],n,t[0],t):void 0}var De,Pr,Er,bo,xo,Ar,ko,So,Kw,cM=(Kw=class{constructor(e={}){pe(this,De);pe(this,Pr);pe(this,Er);pe(this,bo);pe(this,xo);pe(this,Ar);pe(this,ko);pe(this,So);ee(this,De,e.queryCache||new iM),ee(this,Pr,e.mutationCache||new aM),ee(this,Er,e.defaultOptions||{}),ee(this,bo,new Map),ee(this,xo,new Map),ee(this,Ar,0)}mount(){Ia(this,Ar)._++,L(this,Ar)===1&&(ee(this,ko,O1.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,De).onFocus())})),ee(this,So,oc.subscribe(async e=>{e&&(await this.resumePausedMutations(),L(this,De).onOnline())})))}unmount(){var e,n;Ia(this,Ar)._--,L(this,Ar)===0&&((e=L(this,ko))==null||e.call(this),ee(this,ko,void 0),(n=L(this,So))==null||n.call(this),ee(this,So,void 0))}isFetching(e){return L(this,De).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return L(this,Pr).findAll({...e,status:"pending"}).length}getQueryData(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=L(this,De).get(n.queryHash))==null?void 0:t.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),t=L(this,De).build(this,n),r=t.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&t.isStaleByTime(Cp(n.staleTime,t))&&this.prefetchQuery(n),Promise.resolve(r))}getQueriesData(e){return L(this,De).findAll(e).map(({queryKey:n,state:t})=>{const r=t.data;return[n,r]})}setQueryData(e,n,t){const r=this.defaultQueryOptions({queryKey:e}),i=L(this,De).get(r.queryHash),o=i==null?void 0:i.state.data,s=VD(n,o);if(s!==void 0)return L(this,De).build(this,r).setData(s,{...t,manual:!0})}setQueriesData(e,n,t){return dn.batch(()=>L(this,De).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,n,t)]))}getQueryState(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=L(this,De).get(n.queryHash))==null?void 0:t.state}removeQueries(e){const n=L(this,De);dn.batch(()=>{n.findAll(e).forEach(t=>{n.remove(t)})})}resetQueries(e,n){const t=L(this,De);return dn.batch(()=>(t.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const t={revert:!0,...n},r=dn.batch(()=>L(this,De).findAll(e).map(i=>i.cancel(t)));return Promise.all(r).then(ct).catch(ct)}invalidateQueries(e,n={}){return dn.batch(()=>(L(this,De).findAll(e).forEach(t=>{t.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const t={...n,cancelRefetch:n.cancelRefetch??!0},r=dn.batch(()=>L(this,De).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,t);return t.throwOnError||(o=o.catch(ct)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(ct)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const t=L(this,De).build(this,n);return t.isStaleByTime(Cp(n.staleTime,t))?t.fetch(n):Promise.resolve(t.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ct).catch(ct)}fetchInfiniteQuery(e){return e.behavior=py(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ct).catch(ct)}ensureInfiniteQueryData(e){return e.behavior=py(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return oc.isOnline()?L(this,Pr).resumePausedMutations():Promise.resolve()}getQueryCache(){return L(this,De)}getMutationCache(){return L(this,Pr)}getDefaultOptions(){return L(this,Er)}setDefaultOptions(e){ee(this,Er,e)}setQueryDefaults(e,n){L(this,bo).set(Qs(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...L(this,bo).values()],t={};return n.forEach(r=>{Xs(e,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(e,n){L(this,xo).set(Qs(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...L(this,xo).values()],t={};return n.forEach(r=>{Xs(e,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(e){if(e._defaulted)return e;const n={...L(this,Er).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Cf(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Tf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...L(this,Er).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){L(this,De).clear(),L(this,Pr).clear()}},De=new WeakMap,Pr=new WeakMap,Er=new WeakMap,bo=new WeakMap,xo=new WeakMap,Ar=new WeakMap,ko=new WeakMap,So=new WeakMap,Kw),uM=x.createContext(void 0),dM=({client:e,children:n})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),w.jsx(uM.Provider,{value:e,children:n}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Zs.apply(this,arguments)}var Dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dr||(Dr={}));const fy="popstate";function pM(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:s,hash:a}=r.location;return Pp("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:sc(i)}return fM(n,t,null,e)}function Le(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function F1(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function hM(){return Math.random().toString(36).substr(2,8)}function my(e,n){return{usr:e.state,key:e.key,idx:n}}function Pp(e,n,t,r){return t===void 0&&(t=null),Zs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Uo(n):n,{state:t,key:n&&n.key||r||hM()})}function sc(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Uo(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function fM(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Dr.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Zs({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function u(){a=Dr.Pop;let b=d(),f=b==null?null:b-c;c=b,l&&l({action:a,location:g.location,delta:f})}function h(b,f){a=Dr.Push;let y=Pp(g.location,b,f);c=d()+1;let v=my(y,c),S=g.createHref(y);try{s.pushState(v,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}o&&l&&l({action:a,location:g.location,delta:1})}function p(b,f){a=Dr.Replace;let y=Pp(g.location,b,f);c=d();let v=my(y,c),S=g.createHref(y);s.replaceState(v,"",S),o&&l&&l({action:a,location:g.location,delta:0})}function m(b){let f=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof b=="string"?b:sc(b);return y=y.replace(/ $/,"%20"),Le(f,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,f)}let g={get action(){return a},get location(){return e(i,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fy,u),l=b,()=>{i.removeEventListener(fy,u),l=null}},createHref(b){return n(i,b)},createURL:m,encodeLocation(b){let f=m(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(b){return s.go(b)}};return g}var gy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gy||(gy={}));function mM(e,n,t){return t===void 0&&(t="/"),gM(e,n,t,!1)}function gM(e,n,t,r){let i=typeof n=="string"?Uo(n):n,o=Pf(i.pathname||"/",t);if(o==null)return null;let s=z1(e);yM(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=AM(o);a=PM(s[l],c,r)}return a}function z1(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Vr([r,l.relativePath]),d=t.concat(l);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),z1(o.children,n,d,c)),!(o.path==null&&!o.index)&&n.push({path:c,score:CM(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of B1(o.path))i(o,s,l)}),n}function B1(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=B1(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function yM(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:TM(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const vM=/^:[\w-]+$/,wM=3,bM=2,xM=1,kM=10,SM=-2,yy=e=>e==="*";function CM(e,n){let t=e.split("/"),r=t.length;return t.some(yy)&&(r+=SM),n&&(r+=bM),t.filter(i=>!yy(i)).reduce((i,o)=>i+(vM.test(o)?wM:o===""?xM:kM),r)}function TM(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function PM(e,n,t){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?n:n.slice(o.length)||"/",u=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!u&&c&&t&&!r[r.length-1].route.index&&(u=vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:Vr([o,u.pathname]),pathnameBase:MM(Vr([o,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(o=Vr([o,u.pathnameBase]))}return s}function vy(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=EM(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let g=a[u]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const m=a[u];return p&&!m?c[h]=void 0:c[h]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function EM(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),F1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function AM(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return F1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Pf(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function IM(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Uo(e):e;return{pathname:t?t.startsWith("/")?t:RM(t,n):n,search:OM(r),hash:jM(i)}}function RM(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Vu(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DM(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Ef(e,n){let t=DM(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Af(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Uo(e):(i=Zs({},e),Le(!i.pathname||!i.pathname.includes("?"),Vu("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Vu("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Vu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=t;else{let u=n.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),u-=1;i.pathname=h.join("/")}a=u>=0?n[u]:"/"}let l=IM(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Vr=e=>e.join("/").replace(/\/\/+/g,"/"),MM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),OM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function LM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const V1=["post","put","patch","delete"];new Set(V1);const NM=["get",...V1];new Set(NM);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ea.apply(this,arguments)}const If=x.createContext(null),_M=x.createContext(null),Zr=x.createContext(null),$c=x.createContext(null),ir=x.createContext({outlet:null,matches:[],isDataRoute:!1}),U1=x.createContext(null);function FM(e,n){let{relative:t}=n===void 0?{}:n;Ho()||Le(!1);let{basename:r,navigator:i}=x.useContext(Zr),{hash:o,pathname:s,search:a}=$1(e,{relative:t}),l=s;return r!=="/"&&(l=s==="/"?r:Vr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ho(){return x.useContext($c)!=null}function or(){return Ho()||Le(!1),x.useContext($c).location}function H1(e){x.useContext(Zr).static||x.useLayoutEffect(e)}function q1(){let{isDataRoute:e}=x.useContext(ir);return e?QM():zM()}function zM(){Ho()||Le(!1);let e=x.useContext(If),{basename:n,future:t,navigator:r}=x.useContext(Zr),{matches:i}=x.useContext(ir),{pathname:o}=or(),s=JSON.stringify(Ef(i,t.v7_relativeSplatPath)),a=x.useRef(!1);return H1(()=>{a.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=Af(c,JSON.parse(s),o,d.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Vr([n,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[n,r,s,o,e])}function W1(){let{matches:e}=x.useContext(ir),n=e[e.length-1];return n?n.params:{}}function $1(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=x.useContext(Zr),{matches:i}=x.useContext(ir),{pathname:o}=or(),s=JSON.stringify(Ef(i,r.v7_relativeSplatPath));return x.useMemo(()=>Af(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function BM(e,n){return VM(e,n)}function VM(e,n,t,r){Ho()||Le(!1);let{navigator:i}=x.useContext(Zr),{matches:o}=x.useContext(ir),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=or(),d;if(n){var u;let b=typeof n=="string"?Uo(n):n;l==="/"||(u=b.pathname)!=null&&u.startsWith(l)||Le(!1),d=b}else d=c;let h=d.pathname||"/",p=h;if(l!=="/"){let b=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=mM(e,{pathname:p}),g=$M(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,t,r);return n&&g?x.createElement($c.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Dr.Pop}},g):g}function UM(){let e=JM(),n=LM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:i},t):null,null)}const HM=x.createElement(UM,null);class qM extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?x.createElement(ir.Provider,{value:this.props.routeContext},x.createElement(U1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WM(e){let{routeContext:n,match:t,children:r}=e,i=x.useContext(If);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ir.Provider,{value:n},r)}function $M(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||Le(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let u=s[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:h,errors:p}=t,m=u.route.loader&&h[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,u,h)=>{let p,m=!1,g=null,b=null;t&&(p=a&&u.route.id?a[u.route.id]:void 0,g=u.route.errorElement||HM,l&&(c<0&&h===0?(m=!0,b=null):c===h&&(m=!0,b=u.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,h+1)),y=()=>{let v;return p?v=g:m?v=b:u.route.Component?v=x.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=d,x.createElement(WM,{match:u,routeContext:{outlet:d,matches:f,isDataRoute:t!=null},children:v})};return t&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?x.createElement(qM,{location:t.location,revalidation:t.revalidation,component:g,error:p,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var G1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(G1||{}),ac=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ac||{});function GM(e){let n=x.useContext(If);return n||Le(!1),n}function KM(e){let n=x.useContext(_M);return n||Le(!1),n}function YM(e){let n=x.useContext(ir);return n||Le(!1),n}function K1(e){let n=YM(),t=n.matches[n.matches.length-1];return t.route.id||Le(!1),t.route.id}function JM(){var e;let n=x.useContext(U1),t=KM(ac.UseRouteError),r=K1(ac.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function QM(){let{router:e}=GM(G1.UseNavigateStable),n=K1(ac.UseNavigateStable),t=x.useRef(!1);return H1(()=>{t.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ea({fromRouteId:n},o)))},[e,n])}function XM(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ep(e){let{to:n,replace:t,state:r,relative:i}=e;Ho()||Le(!1);let{future:o,static:s}=x.useContext(Zr),{matches:a}=x.useContext(ir),{pathname:l}=or(),c=q1(),d=Af(n,Ef(a,o.v7_relativeSplatPath),l,i==="path"),u=JSON.stringify(d);return x.useEffect(()=>c(JSON.parse(u),{replace:t,state:r,relative:i}),[c,u,i,t,r]),null}function vr(e){Le(!1)}function ZM(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Dr.Pop,navigator:o,static:s=!1,future:a}=e;Ho()&&Le(!1);let l=n.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:o,static:s,future:ea({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Uo(r));let{pathname:d="/",search:u="",hash:h="",state:p=null,key:m="default"}=r,g=x.useMemo(()=>{let b=Pf(d,l);return b==null?null:{location:{pathname:b,search:u,hash:h,state:p,key:m},navigationType:i}},[l,d,u,h,p,m,i]);return g==null?null:x.createElement(Zr.Provider,{value:c},x.createElement($c.Provider,{children:t,value:g}))}function eO(e){let{children:n,location:t}=e;return BM(Ap(n),t)}new Promise(()=>{});function Ap(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...n,i];if(r.type===x.Fragment){t.push.apply(t,Ap(r.props.children,o));return}r.type!==vr&&Le(!1),!r.props.index||!r.props.children||Le(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ap(r.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ip(){return Ip=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ip.apply(this,arguments)}function nO(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function tO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rO(e,n){return e.button===0&&(!n||n==="_self")&&!tO(e)}const iO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oO="6";try{window.__reactRouterVersion=oO}catch{}const sO="startTransition",wy=ob[sO];function aO(e){let{basename:n,children:t,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=pM({window:i,v5Compat:!0}));let s=o.current,[a,l]=x.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=x.useCallback(u=>{c&&wy?wy(()=>l(u)):l(u)},[l,c]);return x.useLayoutEffect(()=>s.listen(d),[s,d]),x.useEffect(()=>XM(r),[r]),x.createElement(ZM,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const lO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=x.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:u}=n,h=nO(n,iO),{basename:p}=x.useContext(Zr),m,g=!1;if(typeof c=="string"&&cO.test(c)&&(m=c,lO))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),T=Pf(S.pathname,p);S.origin===v.origin&&T!=null?c=T+S.search+S.hash:g=!0}catch{}let b=FM(c,{relative:i}),f=uO(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:u});function y(v){r&&r(v),v.defaultPrevented||f(v)}return x.createElement("a",Ip({},h,{href:m||b,onClick:g||o?r:y,ref:t,target:l}))});var by;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(by||(by={}));var xy;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xy||(xy={}));function uO(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=n===void 0?{}:n,l=q1(),c=or(),d=$1(e,{relative:s});return x.useCallback(u=>{if(rO(u,t)){u.preventDefault();let h=r!==void 0?r:sc(c)===sc(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,d,r,i,t,e,o,s,a])}const Y1=x.createContext(void 0);function dO({children:e}){const[n,t]=x.useState(()=>localStorage.getItem("portfolio-theme")||"dark");x.useEffect(()=>{const i=window.document.documentElement;i.classList.remove("light","dark"),i.classList.add(n),localStorage.setItem("portfolio-theme",n)},[n]);const r=()=>{t(i=>i==="dark"?"light":"dark")};return w.jsx(Y1.Provider,{value:{theme:n,toggleTheme:r},children:e})}function J1(){const e=x.useContext(Y1);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}function pO(){const{pathname:e}=or();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Rf=x.createContext({});function Df(e){const n=x.useRef(null);return n.current===null&&(n.current=e()),n.current}const Q1=typeof window<"u",X1=Q1?x.useLayoutEffect:x.useEffect,Gc=x.createContext(null);function Mf(e,n){e.indexOf(n)===-1&&e.push(n)}function Of(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}const _t=(e,n,t)=>t>n?n:t<e?e:t;let Kc=()=>{},Oo=()=>{};const tr={},Z1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ek(e){return typeof e=="object"&&e!==null}const nk=e=>/^0[^.\s]+$/u.test(e);function jf(e){let n;return()=>(n===void 0&&(n=e()),n)}const Qn=e=>e,hO=(e,n)=>t=>n(e(t)),wa=(...e)=>e.reduce(hO),na=(e,n,t)=>{const r=n-e;return r===0?1:(t-e)/r};class Lf{constructor(){this.subscriptions=[]}add(n){return Mf(this.subscriptions,n),()=>Of(this.subscriptions,n)}notify(n,t,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](n,t,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(n,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jt=e=>e*1e3,Yn=e=>e/1e3;function tk(e,n){return n?e*(1e3/n):0}const rk=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,fO=1e-7,mO=12;function gO(e,n,t,r,i){let o,s,a=0;do s=n+(t-n)/2,o=rk(s,r,i)-e,o>0?t=s:n=s;while(Math.abs(o)>fO&&++a<mO);return s}function ba(e,n,t,r){if(e===n&&t===r)return Qn;const i=o=>gO(o,0,1,e,t);return o=>o===0||o===1?o:rk(i(o),n,r)}const ik=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,ok=e=>n=>1-e(1-n),sk=ba(.33,1.53,.69,.99),Nf=ok(sk),ak=ik(Nf),lk=e=>(e*=2)<1?.5*Nf(e):.5*(2-Math.pow(2,-10*(e-1))),_f=e=>1-Math.sin(Math.acos(e)),ck=ok(_f),uk=ik(_f),yO=ba(.42,0,1,1),vO=ba(0,0,.58,1),dk=ba(.42,0,.58,1),wO=e=>Array.isArray(e)&&typeof e[0]!="number",pk=e=>Array.isArray(e)&&typeof e[0]=="number",ky={linear:Qn,easeIn:yO,easeInOut:dk,easeOut:vO,circIn:_f,circInOut:uk,circOut:ck,backIn:Nf,backInOut:ak,backOut:sk,anticipate:lk},bO=e=>typeof e=="string",Sy=e=>{if(pk(e)){Oo(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[n,t,r,i]=e;return ba(n,t,r,i)}else if(bO(e))return Oo(ky[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),ky[e];return e},Xa=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Cy={value:null,addProjectionMetrics:null};function xO(e,n){let t=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(u){s.has(u)&&(d.schedule(u),e()),l++,u(a)}const d={schedule:(u,h=!1,p=!1)=>{const g=p&&i?t:r;return h&&s.add(u),g.has(u)||g.add(u),u},cancel:u=>{r.delete(u),s.delete(u)},process:u=>{if(a=u,i){o=!0;return}i=!0,[t,r]=[r,t],t.forEach(c),n&&Cy.value&&Cy.value.frameloop[n].push(l),l=0,t.clear(),i=!1,o&&(o=!1,d.process(u))}};return d}const kO=40;function hk(e,n){let t=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>t=!0,s=Xa.reduce((v,S)=>(v[S]=xO(o,n?S:void 0),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:u,preRender:h,render:p,postRender:m}=s,g=()=>{const v=tr.useManualTiming?i.timestamp:performance.now();t=!1,tr.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,kO),1)),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),u.process(i),h.process(i),p.process(i),m.process(i),i.isProcessing=!1,t&&n&&(r=!1,e(g))},b=()=>{t=!0,r=!0,i.isProcessing||e(g)};return{schedule:Xa.reduce((v,S)=>{const T=s[S];return v[S]=(C,A=!1,I=!1)=>(t||b(),T.schedule(C,A,I)),v},{}),cancel:v=>{for(let S=0;S<Xa.length;S++)s[Xa[S]].cancel(v)},state:i,steps:s}}const{schedule:Se,cancel:Kr,state:Ke,steps:Uu}=hk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qn,!0);let kl;function SO(){kl=void 0}const hn={now:()=>(kl===void 0&&hn.set(Ke.isProcessing||tr.useManualTiming?Ke.timestamp:performance.now()),kl),set:e=>{kl=e,queueMicrotask(SO)}},fk=e=>n=>typeof n=="string"&&n.startsWith(e),mk=fk("--"),CO=fk("var(--"),Ff=e=>CO(e)?TO.test(e.split("/*")[0].trim()):!1,TO=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ty(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const qo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ta={...qo,transform:e=>_t(0,1,e)},Za={...qo,default:1},Ts=e=>Math.round(e*1e5)/1e5,zf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function PO(e){return e==null}const EO=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bf=(e,n)=>t=>!!(typeof t=="string"&&EO.test(t)&&t.startsWith(e)||n&&!PO(t)&&Object.prototype.hasOwnProperty.call(t,n)),gk=(e,n,t)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(zf);return{[e]:parseFloat(i),[n]:parseFloat(o),[t]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},AO=e=>_t(0,255,e),Hu={...qo,transform:e=>Math.round(AO(e))},mi={test:Bf("rgb","red"),parse:gk("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:r=1})=>"rgba("+Hu.transform(e)+", "+Hu.transform(n)+", "+Hu.transform(t)+", "+Ts(ta.transform(r))+")"};function IO(e){let n="",t="",r="",i="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),n+=n,t+=t,r+=r,i+=i),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Rp={test:Bf("#"),parse:IO,transform:mi.transform},xa=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),wr=xa("deg"),Lt=xa("%"),W=xa("px"),RO=xa("vh"),DO=xa("vw"),Py={...Lt,parse:e=>Lt.parse(e)/100,transform:e=>Lt.transform(e*100)},no={test:Bf("hsl","hue"),parse:gk("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:r=1})=>"hsla("+Math.round(e)+", "+Lt.transform(Ts(n))+", "+Lt.transform(Ts(t))+", "+Ts(ta.transform(r))+")"},Fe={test:e=>mi.test(e)||Rp.test(e)||no.test(e),parse:e=>mi.test(e)?mi.parse(e):no.test(e)?no.parse(e):Rp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mi.transform(e):no.transform(e),getAnimatableNone:e=>{const n=Fe.parse(e);return n.alpha=0,Fe.transform(n)}},MO=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function OO(e){var n,t;return isNaN(e)&&typeof e=="string"&&(((n=e.match(zf))==null?void 0:n.length)||0)+(((t=e.match(MO))==null?void 0:t.length)||0)>0}const yk="number",vk="color",jO="var",LO="var(",Ey="${}",NO=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ra(e){const n=e.toString(),t=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=n.replace(NO,l=>(Fe.test(l)?(r.color.push(o),i.push(vk),t.push(Fe.parse(l))):l.startsWith(LO)?(r.var.push(o),i.push(jO),t.push(l)):(r.number.push(o),i.push(yk),t.push(parseFloat(l))),++o,Ey)).split(Ey);return{values:t,split:a,indexes:r,types:i}}function wk(e){return ra(e).values}function bk(e){const{split:n,types:t}=ra(e),r=n.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=n[s],i[s]!==void 0){const a=t[s];a===yk?o+=Ts(i[s]):a===vk?o+=Fe.transform(i[s]):o+=i[s]}return o}}const _O=e=>typeof e=="number"?0:Fe.test(e)?Fe.getAnimatableNone(e):e;function FO(e){const n=wk(e);return bk(e)(n.map(_O))}const Yr={test:OO,parse:wk,createTransformer:bk,getAnimatableNone:FO};function qu(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function zO({hue:e,saturation:n,lightness:t,alpha:r}){e/=360,n/=100,t/=100;let i=0,o=0,s=0;if(!n)i=o=s=t;else{const a=t<.5?t*(1+n):t+n-t*n,l=2*t-a;i=qu(l,a,e+1/3),o=qu(l,a,e),s=qu(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function lc(e,n){return t=>t>0?n:e}const Ae=(e,n,t)=>e+(n-e)*t,Wu=(e,n,t)=>{const r=e*e,i=t*(n*n-r)+r;return i<0?0:Math.sqrt(i)},BO=[Rp,mi,no],VO=e=>BO.find(n=>n.test(e));function Ay(e){const n=VO(e);if(Kc(!!n,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!n)return!1;let t=n.parse(e);return n===no&&(t=zO(t)),t}const Iy=(e,n)=>{const t=Ay(e),r=Ay(n);if(!t||!r)return lc(e,n);const i={...t};return o=>(i.red=Wu(t.red,r.red,o),i.green=Wu(t.green,r.green,o),i.blue=Wu(t.blue,r.blue,o),i.alpha=Ae(t.alpha,r.alpha,o),mi.transform(i))},Dp=new Set(["none","hidden"]);function UO(e,n){return Dp.has(e)?t=>t<=0?e:n:t=>t>=1?n:e}function HO(e,n){return t=>Ae(e,n,t)}function Vf(e){return typeof e=="number"?HO:typeof e=="string"?Ff(e)?lc:Fe.test(e)?Iy:$O:Array.isArray(e)?xk:typeof e=="object"?Fe.test(e)?Iy:qO:lc}function xk(e,n){const t=[...e],r=t.length,i=e.map((o,s)=>Vf(o)(o,n[s]));return o=>{for(let s=0;s<r;s++)t[s]=i[s](o);return t}}function qO(e,n){const t={...e,...n},r={};for(const i in t)e[i]!==void 0&&n[i]!==void 0&&(r[i]=Vf(e[i])(e[i],n[i]));return i=>{for(const o in r)t[o]=r[o](i);return t}}function WO(e,n){const t=[],r={color:0,var:0,number:0};for(let i=0;i<n.values.length;i++){const o=n.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;t[i]=a,r[o]++}return t}const $O=(e,n)=>{const t=Yr.createTransformer(n),r=ra(e),i=ra(n);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Dp.has(e)&&!i.values.length||Dp.has(n)&&!r.values.length?UO(e,n):wa(xk(WO(r,i),i.values),t):(Kc(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),lc(e,n))};function kk(e,n,t){return typeof e=="number"&&typeof n=="number"&&typeof t=="number"?Ae(e,n,t):Vf(e)(e,n)}const GO=e=>{const n=({timestamp:t})=>e(t);return{start:(t=!0)=>Se.update(n,t),stop:()=>Kr(n),now:()=>Ke.isProcessing?Ke.timestamp:hn.now()}},Sk=(e,n,t=10)=>{let r="";const i=Math.max(Math.round(n/t),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},cc=2e4;function Uf(e){let n=0;const t=50;let r=e.next(n);for(;!r.done&&n<cc;)n+=t,r=e.next(n);return n>=cc?1/0:n}function KO(e,n=100,t){const r=t({...e,keyframes:[0,n]}),i=Math.min(Uf(r),cc);return{type:"keyframes",ease:o=>r.next(i*o).value/n,duration:Yn(i)}}const YO=5;function Ck(e,n,t){const r=Math.max(n-YO,0);return tk(t-e(r),n-r)}const Pe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$u=.001;function JO({duration:e=Pe.duration,bounce:n=Pe.bounce,velocity:t=Pe.velocity,mass:r=Pe.mass}){let i,o;Kc(e<=jt(Pe.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-n;s=_t(Pe.minDamping,Pe.maxDamping,s),e=_t(Pe.minDuration,Pe.maxDuration,Yn(e)),s<1?(i=c=>{const d=c*s,u=d*e,h=d-t,p=Mp(c,s),m=Math.exp(-u);return $u-h/p*m},o=c=>{const u=c*s*e,h=u*t+t,p=Math.pow(s,2)*Math.pow(c,2)*e,m=Math.exp(-u),g=Mp(Math.pow(c,2),s);return(-i(c)+$u>0?-1:1)*((h-p)*m)/g}):(i=c=>{const d=Math.exp(-c*e),u=(c-t)*e+1;return-$u+d*u},o=c=>{const d=Math.exp(-c*e),u=(t-c)*(e*e);return d*u});const a=5/e,l=XO(i,o,a);if(e=jt(e),isNaN(l))return{stiffness:Pe.stiffness,damping:Pe.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const QO=12;function XO(e,n,t){let r=t;for(let i=1;i<QO;i++)r=r-e(r)/n(r);return r}function Mp(e,n){return e*Math.sqrt(1-n*n)}const ZO=["duration","bounce"],ej=["stiffness","damping","mass"];function Ry(e,n){return n.some(t=>e[t]!==void 0)}function nj(e){let n={velocity:Pe.velocity,stiffness:Pe.stiffness,damping:Pe.damping,mass:Pe.mass,isResolvedFromDuration:!1,...e};if(!Ry(e,ej)&&Ry(e,ZO))if(e.visualDuration){const t=e.visualDuration,r=2*Math.PI/(t*1.2),i=r*r,o=2*_t(.05,1,1-(e.bounce||0))*Math.sqrt(i);n={...n,mass:Pe.mass,stiffness:i,damping:o}}else{const t=JO(e);n={...n,...t,mass:Pe.mass},n.isResolvedFromDuration=!0}return n}function uc(e=Pe.visualDuration,n=Pe.bounce){const t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:r,restDelta:i}=t;const o=t.keyframes[0],s=t.keyframes[t.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:u,velocity:h,isResolvedFromDuration:p}=nj({...t,velocity:-Yn(t.velocity||0)}),m=h||0,g=c/(2*Math.sqrt(l*d)),b=s-o,f=Yn(Math.sqrt(l/d)),y=Math.abs(b)<5;r||(r=y?Pe.restSpeed.granular:Pe.restSpeed.default),i||(i=y?Pe.restDelta.granular:Pe.restDelta.default);let v;if(g<1){const T=Mp(f,g);v=C=>{const A=Math.exp(-g*f*C);return s-A*((m+g*f*b)/T*Math.sin(T*C)+b*Math.cos(T*C))}}else if(g===1)v=T=>s-Math.exp(-f*T)*(b+(m+f*b)*T);else{const T=f*Math.sqrt(g*g-1);v=C=>{const A=Math.exp(-g*f*C),I=Math.min(T*C,300);return s-A*((m+g*f*b)*Math.sinh(I)+T*b*Math.cosh(I))/T}}const S={calculatedDuration:p&&u||null,next:T=>{const C=v(T);if(p)a.done=T>=u;else{let A=T===0?m:0;g<1&&(A=T===0?jt(m):Ck(v,T,C));const I=Math.abs(A)<=r,M=Math.abs(s-C)<=i;a.done=I&&M}return a.value=a.done?s:C,a},toString:()=>{const T=Math.min(Uf(S),cc),C=Sk(A=>S.next(T*A).value,T,30);return T+"ms "+C},toTransition:()=>{}};return S}uc.applyToOptions=e=>{const n=KO(e,100,uc);return e.ease=n.ease,e.duration=jt(n.duration),e.type="keyframes",e};function Op({keyframes:e,velocity:n=0,power:t=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const u=e[0],h={done:!1,value:u},p=I=>a!==void 0&&I<a||l!==void 0&&I>l,m=I=>a===void 0?l:l===void 0||Math.abs(a-I)<Math.abs(l-I)?a:l;let g=t*n;const b=u+g,f=s===void 0?b:s(b);f!==b&&(g=f-u);const y=I=>-g*Math.exp(-I/r),v=I=>f+y(I),S=I=>{const M=y(I),E=v(I);h.done=Math.abs(M)<=c,h.value=h.done?f:E};let T,C;const A=I=>{p(h.value)&&(T=I,C=uc({keyframes:[h.value,m(h.value)],velocity:Ck(v,I,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return A(0),{calculatedDuration:null,next:I=>{let M=!1;return!C&&T===void 0&&(M=!0,S(I),A(I)),T!==void 0&&I>=T?C.next(I-T):(!M&&S(I),h)}}}function tj(e,n,t){const r=[],i=t||tr.mix||kk,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(n){const l=Array.isArray(n)?n[s]||Qn:n;a=wa(l,a)}r.push(a)}return r}function rj(e,n,{clamp:t=!0,ease:r,mixer:i}={}){const o=e.length;if(Oo(o===n.length,"Both input and output ranges must be the same length","range-length"),o===1)return()=>n[0];if(o===2&&n[0]===n[1])return()=>n[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),n=[...n].reverse());const a=tj(n,r,i),l=a.length,c=d=>{if(s&&d<e[0])return n[0];let u=0;if(l>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const h=na(e[u],e[u+1],d);return a[u](h)};return t?d=>c(_t(e[0],e[o-1],d)):c}function ij(e,n){const t=e[e.length-1];for(let r=1;r<=n;r++){const i=na(0,n,r);e.push(Ae(t,1,i))}}function oj(e){const n=[0];return ij(n,e.length-1),n}function sj(e,n){return e.map(t=>t*n)}function aj(e,n){return e.map(()=>n||dk).splice(0,e.length-1)}function Ps({duration:e=300,keyframes:n,times:t,ease:r="easeInOut"}){const i=wO(r)?r.map(Sy):Sy(r),o={done:!1,value:n[0]},s=sj(t&&t.length===n.length?t:oj(n),e),a=rj(s,n,{ease:Array.isArray(i)?i:aj(n,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const lj=e=>e!==null;function Hf(e,{repeat:n,repeatType:t="loop"},r,i=1){const o=e.filter(lj),a=i<0||n&&t!=="loop"&&n%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const cj={decay:Op,inertia:Op,tween:Ps,keyframes:Ps,spring:uc};function Tk(e){typeof e.type=="string"&&(e.type=cj[e.type])}class qf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,t){return this.finished.then(n,t)}}const uj=e=>e/100;class Wf extends qf{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:t}=this.options;t&&t.updatedAt!==hn.now()&&this.tick(hn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Tk(n);const{type:t=Ps,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=n;let{keyframes:a}=n;const l=t||Ps;l!==Ps&&typeof a[0]!="number"&&(this.mixKeyframes=wa(uj,kk(a[0],a[1])),a=[0,100]);const c=l({...n,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...n,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Uf(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(n){const t=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(n,t=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:u,repeatType:h,repeatDelay:p,type:m,onUpdate:g,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-i/this.speed,this.startTime)),t?this.currentTime=n:this.updateTime(n);const f=this.currentTime-c*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?f<0:f>i;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,S=r;if(u){const I=Math.min(this.currentTime,i)/a;let M=Math.floor(I),E=I%1;!E&&I>=1&&(E=1),E===1&&M--,M=Math.min(M,u+1),!!(M%2)&&(h==="reverse"?(E=1-E,p&&(E-=p/a)):h==="mirror"&&(S=s)),v=_t(0,1,E)*a}const T=y?{done:!1,value:d[0]}:S.next(v);o&&(T.value=o(T.value));let{done:C}=T;!y&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&m!==Op&&(T.value=Hf(d,this.options,b,this.speed)),g&&g(T.value),A&&this.finish(),T}then(n,t){return this.finished.then(n,t)}get duration(){return Yn(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Yn(n)}get time(){return Yn(this.currentTime)}set time(n){var t;n=jt(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(hn.now());const t=this.playbackSpeed!==n;this.playbackSpeed=n,t&&(this.time=Yn(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:n=GO,startTime:t}=this.options;this.driver||(this.driver=n(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(hn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(n=this.options).onComplete)==null||t.call(n)}cancel(){var n,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(n=this.options).onCancel)==null||t.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),n.observe(this)}}function dj(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const gi=e=>e*180/Math.PI,jp=e=>{const n=gi(Math.atan2(e[1],e[0]));return Lp(n)},pj={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:jp,rotateZ:jp,skewX:e=>gi(Math.atan(e[1])),skewY:e=>gi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Lp=e=>(e=e%360,e<0&&(e+=360),e),Dy=jp,My=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Oy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),hj={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:My,scaleY:Oy,scale:e=>(My(e)+Oy(e))/2,rotateX:e=>Lp(gi(Math.atan2(e[6],e[5]))),rotateY:e=>Lp(gi(Math.atan2(-e[2],e[0]))),rotateZ:Dy,rotate:Dy,skewX:e=>gi(Math.atan(e[4])),skewY:e=>gi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Np(e){return e.includes("scale")?1:0}function _p(e,n){if(!e||e==="none")return Np(n);const t=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(t)r=hj,i=t;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=pj,i=a}if(!i)return Np(n);const o=r[n],s=i[1].split(",").map(mj);return typeof o=="function"?o(s):s[o]}const fj=(e,n)=>{const{transform:t="none"}=getComputedStyle(e);return _p(t,n)};function mj(e){return parseFloat(e.trim())}const Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$o=new Set(Wo),jy=e=>e===qo||e===W,gj=new Set(["x","y","z"]),yj=Wo.filter(e=>!gj.has(e));function vj(e){const n=[];return yj.forEach(t=>{const r=e.getValue(t);r!==void 0&&(n.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),n}const Mr={width:({x:e},{paddingLeft:n="0",paddingRight:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),height:({y:e},{paddingTop:n="0",paddingBottom:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>_p(n,"x"),y:(e,{transform:n})=>_p(n,"y")};Mr.translateX=Mr.x;Mr.translateY=Mr.y;const Ti=new Set;let Fp=!1,zp=!1,Bp=!1;function Pk(){if(zp){const e=Array.from(Ti).filter(r=>r.needsMeasurement),n=new Set(e.map(r=>r.element)),t=new Map;n.forEach(r=>{const i=vj(r);i.length&&(t.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),n.forEach(r=>{r.render();const i=t.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}zp=!1,Fp=!1,Ti.forEach(e=>e.complete(Bp)),Ti.clear()}function Ek(){Ti.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(zp=!0)})}function wj(){Bp=!0,Ek(),Pk(),Bp=!1}class $f{constructor(n,t,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=t,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(Ti.add(this),Fp||(Fp=!0,Se.read(Ek),Se.resolveKeyframes(Pk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:t,element:r,motionValue:i}=this;if(n[0]===null){const o=i==null?void 0:i.get(),s=n[n.length-1];if(o!==void 0)n[0]=o;else if(r&&t){const a=r.readValue(t,s);a!=null&&(n[0]=a)}n[0]===void 0&&(n[0]=s),i&&o===void 0&&i.set(n[0])}dj(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ti.delete(this)}cancel(){this.state==="scheduled"&&(Ti.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bj=e=>e.startsWith("--");function xj(e,n,t){bj(n)?e.style.setProperty(n,t):e.style[n]=t}const kj=jf(()=>window.ScrollTimeline!==void 0),Sj={};function Cj(e,n){const t=jf(e);return()=>Sj[n]??t()}const Ak=Cj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hs=([e,n,t,r])=>`cubic-bezier(${e}, ${n}, ${t}, ${r})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hs([0,.65,.55,1]),circOut:hs([.55,0,1,.45]),backIn:hs([.31,.01,.66,-.59]),backOut:hs([.33,1.53,.69,.99])};function Ik(e,n){if(e)return typeof e=="function"?Ak()?Sk(e,n):"ease-out":pk(e)?hs(e):Array.isArray(e)?e.map(t=>Ik(t,n)||Ly.easeOut):Ly[e]}function Tj(e,n,t,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const d={[n]:t};l&&(d.offset=l);const u=Ik(a,i);Array.isArray(u)&&(d.easing=u);const h={delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(d,h)}function Rk(e){return typeof e=="function"&&"applyToOptions"in e}function Pj({type:e,...n}){return Rk(e)&&Ak()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class Ej extends qf{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:t,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=n;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=n,Oo(typeof n.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const c=Pj(n);this.animation=Tj(t,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Hf(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):xj(t,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,t;(t=(n=this.animation).finish)==null||t.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,t;this.isPseudoElement||(t=(n=this.animation).commitStyles)==null||t.call(n)}get duration(){var t,r;const n=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return Yn(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Yn(n)}get time(){return Yn(Number(this.animation.currentTime)||0)}set time(n){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jt(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,observe:t}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&kj()?(this.animation.timeline=n,Qn):t(this)}}const Dk={anticipate:lk,backInOut:ak,circInOut:uk};function Aj(e){return e in Dk}function Ij(e){typeof e.ease=="string"&&Aj(e.ease)&&(e.ease=Dk[e.ease])}const Gu=10;class Rj extends Ej{constructor(n){Ij(n),Tk(n),super(n),n.startTime!==void 0&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:t,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!t)return;if(n!==void 0){t.set(n);return}const a=new Wf({...s,autoplay:!1}),l=Math.max(Gu,hn.now()-this.startTime),c=_t(0,Gu,l-Gu);t.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const Ny=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yr.test(e)||e==="0")&&!e.startsWith("url("));function Dj(e){const n=e[0];if(e.length===1)return!0;for(let t=0;t<e.length;t++)if(e[t]!==n)return!0}function Mj(e,n,t,r){const i=e[0];if(i===null)return!1;if(n==="display"||n==="visibility")return!0;const o=e[e.length-1],s=Ny(i,n),a=Ny(o,n);return Kc(s===a,`You are trying to animate ${n} from "${i}" to "${o}". "${s?o:i}" is not an animatable value.`,"value-not-animatable"),!s||!a?!1:Dj(e)||(t==="spring"||Rk(t))&&r}function Vp(e){e.duration=0,e.type="keyframes"}const Oj=new Set(["opacity","clipPath","filter","transform"]),jj=jf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Lj(e){var d;const{motionValue:n,name:t,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=n==null?void 0:n.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return jj()&&t&&Oj.has(t)&&(t!=="transform"||!c)&&!l&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const Nj=40;class _j extends qf{constructor({autoplay:n=!0,delay:t=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:d,...u}){var m;super(),this.stop=()=>{var g,b;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=hn.now();const h={autoplay:n,delay:t,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:d,...u},p=(d==null?void 0:d.KeyframeResolver)||$f;this.keyframeResolver=new p(a,(g,b,f)=>this.onKeyframesResolved(g,b,h,!f),l,c,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(n,t,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=r;this.resolvedAt=hn.now(),Mj(n,o,s,a)||((tr.instantAnimations||!l)&&(d==null||d(Hf(n,r,t))),n[0]=n[n.length-1],Vp(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>Nj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:n},p=!c&&Lj(h)?new Rj({...h,element:h.motionValue.owner.current}):new Wf(h);p.finished.then(()=>this.notifyFinished()).catch(Qn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(n,t){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),wj()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}const Fj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zj(e){const n=Fj.exec(e);if(!n)return[,];const[,t,r,i]=n;return[`--${t??r}`,i]}const Bj=4;function Mk(e,n,t=1){Oo(t<=Bj,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=zj(e);if(!r)return;const o=window.getComputedStyle(n).getPropertyValue(r);if(o){const s=o.trim();return Z1(s)?parseFloat(s):s}return Ff(i)?Mk(i,n,t+1):i}function Gf(e,n){return(e==null?void 0:e[n])??(e==null?void 0:e.default)??e}const Vj={type:"spring",stiffness:500,damping:25,restSpeed:10},Uj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Hj={type:"keyframes",duration:.8},qj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Wj=(e,{keyframes:n})=>n.length>2?Hj:$o.has(e)?e.startsWith("scale")?Uj(n[1]):Vj:qj;function $j({when:e,delay:n,delayChildren:t,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Gj=e=>e!==null;function Kj(e,{repeat:n,repeatType:t="loop"},r){const i=e.filter(Gj),o=n&&t!=="loop"&&n%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}function Ok(e,n,t,r=0,i=1){const o=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(n),s=e.size,a=(s-1)*r;return typeof t=="function"?t(o,s):i===1?o*r:a-o*r}const Kf=(e,n,t,r={},i,o)=>s=>{const a=Gf(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-jt(l);const d={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:n.getVelocity(),...a,delay:-c,onUpdate:h=>{n.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:n,element:o?void 0:i};$j(a)||Object.assign(d,Wj(e,d)),d.duration&&(d.duration=jt(d.duration)),d.repeatDelay&&(d.repeatDelay=jt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let u=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Vp(d),d.delay===0&&(u=!0)),(tr.instantAnimations||tr.skipAnimations)&&(u=!0,Vp(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,u&&!o&&n.get()!==void 0){const h=Kj(d.keyframes,a);if(h!==void 0){Se.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new Wf(d):new _j(d)},jk=new Set(["width","height","top","left","right","bottom",...Wo]),_y=30,Yj=e=>!isNaN(parseFloat(e));class Jj{constructor(n,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=hn.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=t.owner}setCurrent(n){this.current=n,this.updatedAt=hn.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Yj(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,t){this.events[n]||(this.events[n]=new Lf);const r=this.events[n].add(t);return n==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-r}jump(n,t=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>_y)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,_y);return tk(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(n){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=n(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,t;(n=this.dependents)==null||n.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jo(e,n){return new Jj(e,n)}function Fy(e){const n=[{},{}];return e==null||e.values.forEach((t,r)=>{n[0][r]=t.get(),n[1][r]=t.getVelocity()}),n}function Yf(e,n,t,r){if(typeof n=="function"){const[i,o]=Fy(r);n=n(t!==void 0?t:e.custom,i,o)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[i,o]=Fy(r);n=n(t!==void 0?t:e.custom,i,o)}return n}function fo(e,n,t){const r=e.getProps();return Yf(r,n,t!==void 0?t:r.custom,e)}const Up=e=>Array.isArray(e);function Qj(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,jo(t))}function Xj(e){return Up(e)?e[e.length-1]||0:e}function Zj(e,n){const t=fo(e,n);let{transitionEnd:r={},transition:i={},...o}=t||{};o={...o,...r};for(const s in o){const a=Xj(o[s]);Qj(e,s,a)}}const tn=e=>!!(e&&e.getVelocity);function eL(e){return!!(tn(e)&&e.add)}function Hp(e,n){const t=e.getValue("willChange");if(eL(t))return t.add(n);if(!t&&tr.WillChange){const r=new tr.WillChange("auto");e.addValue("willChange",r),r.add(n)}}function Jf(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const nL="framerAppearId",Lk="data-"+Jf(nL);function Nk(e){return e.props[Lk]}function tL({protectedKeys:e,needsAnimating:n},t){const r=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,r}function _k(e,n,{delay:t=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=n;r&&(o=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const u=e.getValue(d,e.latestValues[d]??null),h=a[d];if(h===void 0||c&&tL(c,d))continue;const p={delay:t,...Gf(o||{},d)},m=u.get();if(m!==void 0&&!u.isAnimating&&!Array.isArray(h)&&h===m&&!p.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const f=Nk(e);if(f){const y=window.MotionHandoffAnimation(f,d,Se);y!==null&&(p.startTime=y,g=!0)}}Hp(e,d),u.start(Kf(d,u,h,e.shouldReduceMotion&&jk.has(d)?{type:!1}:p,e,g));const b=u.animation;b&&l.push(b)}return s&&Promise.all(l).then(()=>{Se.update(()=>{s&&Zj(e,s)})}),l}function qp(e,n,t={}){var l;const r=fo(e,n,t.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(i=t.transitionOverride);const o=r?()=>Promise.all(_k(e,r,t)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:h}=i;return rL(e,n,c,d,u,h,t)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(t.delay)])}function rL(e,n,t=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",n),a.push(qp(l,n,{...s,delay:t+(typeof r=="function"?0:r)+Ok(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",n)));return Promise.all(a)}function iL(e,n,t={}){e.notify("AnimationStart",n);let r;if(Array.isArray(n)){const i=n.map(o=>qp(e,o,t));r=Promise.all(i)}else if(typeof n=="string")r=qp(e,n,t);else{const i=typeof n=="function"?fo(e,n,t.custom):n;r=Promise.all(_k(e,i,t))}return r.then(()=>{e.notify("AnimationComplete",n)})}const oL={test:e=>e==="auto",parse:e=>e},Fk=e=>n=>n.test(e),zk=[qo,W,Lt,wr,DO,RO,oL],zy=e=>zk.find(Fk(e));function sL(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||nk(e):!0}const aL=new Set(["brightness","contrast","saturate","opacity"]);function lL(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[r]=t.match(zf)||[];if(!r)return e;const i=t.replace(r,"");let o=aL.has(n)?1:0;return r!==t&&(o*=100),n+"("+o+i+")"}const cL=/\b([a-z-]*)\(.*?\)/gu,Wp={...Yr,getAnimatableNone:e=>{const n=e.match(cL);return n?n.map(lL).join(" "):e}},By={...qo,transform:Math.round},uL={rotate:wr,rotateX:wr,rotateY:wr,rotateZ:wr,scale:Za,scaleX:Za,scaleY:Za,scaleZ:Za,skew:wr,skewX:wr,skewY:wr,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:ta,originX:Py,originY:Py,originZ:W},Qf={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,...uL,zIndex:By,fillOpacity:ta,strokeOpacity:ta,numOctaves:By},dL={...Qf,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Wp,WebkitFilter:Wp},Bk=e=>dL[e];function Vk(e,n){let t=Bk(e);return t!==Wp&&(t=Yr),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const pL=new Set(["auto","none","0"]);function hL(e,n,t){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!pL.has(o)&&ra(o).values.length&&(i=e[r]),r++}if(i&&t)for(const o of n)e[o]=Vk(t,i)}class fL extends $f{constructor(n,t,r,i,o){super(n,t,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<n.length;d++){let u=n[d];if(typeof u=="string"&&(u=u.trim(),Ff(u))){const h=Mk(u,t.current);h!==void 0&&(n[d]=h),d===n.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!jk.has(r)||n.length!==2)return;const[i,o]=n,s=zy(i),a=zy(o),l=Ty(i),c=Ty(o);if(l!==c&&Mr[r]){this.needsMeasurement=!0;return}if(s!==a)if(jy(s)&&jy(a))for(let d=0;d<n.length;d++){const u=n[d];typeof u=="string"&&(n[d]=parseFloat(u))}else Mr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:t}=this,r=[];for(let i=0;i<n.length;i++)(n[i]===null||sL(n[i]))&&r.push(i);r.length&&hL(n,r,t)}measureInitialState(){const{element:n,unresolvedKeyframes:t,name:r}=this;if(!n||!n.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];i!==void 0&&n.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:n,name:t,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const i=n.getValue(t);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Mr[t](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function mL(e,n,t){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const Uk=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Hk(e){return ek(e)&&"offsetHeight"in e}const{schedule:Xf,cancel:TU}=hk(queueMicrotask,!1),at={x:!1,y:!1};function qk(){return at.x||at.y}function gL(e){return e==="x"||e==="y"?at[e]?null:(at[e]=!0,()=>{at[e]=!1}):at.x||at.y?null:(at.x=at.y=!0,()=>{at.x=at.y=!1})}function Wk(e,n){const t=mL(e),r=new AbortController,i={passive:!0,...n,signal:r.signal};return[t,i,()=>r.abort()]}function Vy(e){return!(e.pointerType==="touch"||qk())}function yL(e,n,t={}){const[r,i,o]=Wk(e,t),s=a=>{if(!Vy(a))return;const{target:l}=a,c=n(l,a);if(typeof c!="function"||!l)return;const d=u=>{Vy(u)&&(c(u),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const $k=(e,n)=>n?e===n?!0:$k(e,n.parentElement):!1,Zf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,vL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Gk(e){return vL.has(e.tagName)||e.isContentEditable===!0}const Sl=new WeakSet;function Uy(e){return n=>{n.key==="Enter"&&e(n)}}function Ku(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const wL=(e,n)=>{const t=e.currentTarget;if(!t)return;const r=Uy(()=>{if(Sl.has(t))return;Ku(t,"down");const i=Uy(()=>{Ku(t,"up")}),o=()=>Ku(t,"cancel");t.addEventListener("keyup",i,n),t.addEventListener("blur",o,n)});t.addEventListener("keydown",r,n),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),n)};function Hy(e){return Zf(e)&&!qk()}function bL(e,n,t={}){const[r,i,o]=Wk(e,t),s=a=>{const l=a.currentTarget;if(!Hy(a))return;Sl.add(l);const c=n(l,a),d=(p,m)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",h),Sl.has(l)&&Sl.delete(l),Hy(p)&&typeof c=="function"&&c(p,{success:m})},u=p=>{d(p,l===window||l===document||t.useGlobalTarget||$k(l,p.target))},h=p=>{d(p,!1)};window.addEventListener("pointerup",u,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(t.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),Hk(a)&&(a.addEventListener("focus",c=>wL(c,i)),!Gk(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Kk(e){return ek(e)&&"ownerSVGElement"in e}function xL(e){return Kk(e)&&e.tagName==="svg"}const kL=[...zk,Fe,Yr],SL=e=>kL.find(Fk(e)),qy=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:qy(),y:qy()}),Wy=()=>({min:0,max:0}),Be=()=>({x:Wy(),y:Wy()}),$p={current:null},Yk={current:!1},CL=typeof window<"u";function TL(){if(Yk.current=!0,!!CL)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>$p.current=e.matches;e.addEventListener("change",n),n()}else $p.current=!1}const PL=new WeakMap;function Yc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ia(e){return typeof e=="string"||Array.isArray(e)}const em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nm=["initial",...em];function Jc(e){return Yc(e.animate)||nm.some(n=>ia(e[n]))}function Jk(e){return!!(Jc(e)||e.variants)}function EL(e,n,t){for(const r in n){const i=n[r],o=t[r];if(tn(i))e.addValue(r,i);else if(tn(o))e.addValue(r,jo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,jo(s!==void 0?s:i,{owner:e}))}}for(const r in t)n[r]===void 0&&e.removeValue(r);return n}const $y=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let dc={};function Qk(e){dc=e}function AL(){return dc}class IL{scrapeMotionValuesFromProps(n,t,r){return{}}constructor({parent:n,props:t,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$f,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=hn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Se.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=n,this.props=t,this.presenceContext=r,this.depth=n?n.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Jc(t),this.isVariantNode=Jk(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(const h in u){const p=u[h];l[h]!==void 0&&tn(p)&&p.set(l[h])}}mount(n){var t;this.current=n,PL.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Yk.current||TL(),this.shouldReduceMotion=$p.current),(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var n;this.projection&&this.projection.unmount(),Kr(this.notifyUpdate),Kr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,t){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const r=$o.has(n);r&&this.onBindTransform&&this.onBindTransform();const i=t.on("change",s=>{this.latestValues[n]=s,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,n,t)),this.valueSubscriptions.set(n,()=>{i(),o&&o(),t.owner&&t.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in dc){const t=dc[n];if(!t)continue;const{isEnabled:r,Feature:i}=t;if(!this.features[n]&&i&&r(this.props)&&(this.features[n]=new i(this)),this.features[n]){const o=this.features[n];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<$y.length;r++){const i=$y[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=n[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=EL(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){const r=this.values.get(n);t!==r&&(r&&this.removeValue(n),this.bindToMotionValue(n,t),this.values.set(n,t),this.latestValues[n]=t.get())}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let r=this.values.get(n);return r===void 0&&t!==void 0&&(r=jo(t===null?void 0:t,{owner:this}),this.addValue(n,r)),r}readValue(n,t){let r=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return r!=null&&(typeof r=="string"&&(Z1(r)||nk(r))?r=parseFloat(r):!SL(r)&&Yr.test(t)&&(r=Vk(n,t)),this.setBaseTarget(n,tn(r)?r.get():r)),tn(r)?r.get():r}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var o;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const s=Yf(this.props,t,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[n])}if(t&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,n);return i!==void 0&&!tn(i)?i:this.initialValues[n]!==void 0&&r===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Lf),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}scheduleRenderMicrotask(){Xf.render(this.render)}}class ei{constructor(n){this.isMounted=!1,this.node=n}update(){}}class Xk extends IL{constructor(){super(...arguments),this.KeyframeResolver=fL}sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){const r=n.style;return r?r[t]:void 0}removeValueFromRenderState(n,{vars:t,style:r}){delete t[n],delete r[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;tn(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Zk({top:e,left:n,right:t,bottom:r}){return{x:{min:n,max:t},y:{min:e,max:r}}}function RL({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function DL(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),r=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Yu(e){return e===void 0||e===1}function Gp({scale:e,scaleX:n,scaleY:t}){return!Yu(e)||!Yu(n)||!Yu(t)}function ui(e){return Gp(e)||eS(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function eS(e){return Gy(e.x)||Gy(e.y)}function Gy(e){return e&&e!=="0%"}function pc(e,n,t){const r=e-t,i=n*r;return t+i}function Ky(e,n,t,r,i){return i!==void 0&&(e=pc(e,i,r)),pc(e,t,r)+n}function Kp(e,n=0,t=1,r,i){e.min=Ky(e.min,n,t,r,i),e.max=Ky(e.max,n,t,r,i)}function nS(e,{x:n,y:t}){Kp(e.x,n.translate,n.scale,n.originPoint),Kp(e.y,t.translate,t.scale,t.originPoint)}const Yy=.999999999999,Jy=1.0000000000001;function ML(e,n,t,r=!1){const i=t.length;if(!i)return;n.x=n.y=1;let o,s;for(let a=0;a<i;a++){o=t[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&io(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(n.x*=s.x.scale,n.y*=s.y.scale,nS(e,s)),r&&ui(o.latestValues)&&io(e,o.latestValues))}n.x<Jy&&n.x>Yy&&(n.x=1),n.y<Jy&&n.y>Yy&&(n.y=1)}function ro(e,n){e.min=e.min+n,e.max=e.max+n}function Qy(e,n,t,r,i=.5){const o=Ae(e.min,e.max,i);Kp(e,n,t,o,r)}function io(e,n){Qy(e.x,n.x,n.scaleX,n.scale,n.originX),Qy(e.y,n.y,n.scaleY,n.scale,n.originY)}function tS(e,n){return Zk(DL(e.getBoundingClientRect(),n))}function OL(e,n,t){const r=tS(e,t),{scroll:i}=n;return i&&(ro(r.x,i.offset.x),ro(r.y,i.offset.y)),r}const jL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LL=Wo.length;function NL(e,n,t){let r="",i=!0;for(let o=0;o<LL;o++){const s=Wo[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||t){const c=Uk(a,Qf[s]);if(!l){i=!1;const d=jL[s]||s;r+=`${d}(${c}) `}t&&(n[s]=c)}}return r=r.trim(),t?r=t(n,i?"":r):i&&(r="none"),r}function tm(e,n,t){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in n){const c=n[l];if($o.has(l)){s=!0;continue}else if(mk(l)){i[l]=c;continue}else{const d=Uk(c,Qf[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(n.transform||(s||t?r.transform=NL(n,e.transform,t):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function rS(e,{style:n,vars:t},r,i){const o=e.style;let s;for(s in n)o[s]=n[s];i==null||i.applyProjectionStyles(o,r);for(s in t)o.setProperty(s,t[s])}function Xy(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const ss={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const t=Xy(e,n.target.x),r=Xy(e,n.target.y);return`${t}% ${r}%`}},_L={correct:(e,{treeScale:n,projectionDelta:t})=>{const r=e,i=Yr.parse(e);if(i.length>5)return r;const o=Yr.createTransformer(e),s=typeof i[0]!="number"?1:0,a=t.x.scale*n.x,l=t.y.scale*n.y;i[0+s]/=a,i[1+s]/=l;const c=Ae(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},Yp={borderRadius:{...ss,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ss,borderTopRightRadius:ss,borderBottomLeftRadius:ss,borderBottomRightRadius:ss,boxShadow:_L};function iS(e,{layout:n,layoutId:t}){return $o.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!Yp[e]||e==="opacity")}function rm(e,n,t){var s;const r=e.style,i=n==null?void 0:n.style,o={};if(!r)return o;for(const a in r)(tn(r[a])||i&&tn(i[a])||iS(a,e)||((s=t==null?void 0:t.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function FL(e){return window.getComputedStyle(e)}class zL extends Xk{constructor(){super(...arguments),this.type="html",this.renderInstance=rS}readValueFromInstance(n,t){var r;if($o.has(t))return(r=this.projection)!=null&&r.isProjecting?Np(t):fj(n,t);{const i=FL(n),o=(mk(t)?i.getPropertyValue(t):i[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(n,{transformPagePoint:t}){return tS(n,t)}build(n,t,r){tm(n,t,r.transformTemplate)}scrapeMotionValuesFromProps(n,t,r){return rm(n,t,r)}}const BL={offset:"stroke-dashoffset",array:"stroke-dasharray"},VL={offset:"strokeDashoffset",array:"strokeDasharray"};function UL(e,n,t=1,r=0,i=!0){e.pathLength=1;const o=i?BL:VL;e[o.offset]=W.transform(-r);const s=W.transform(n),a=W.transform(t);e[o.array]=`${s} ${a}`}const HL=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function oS(e,{attrX:n,attrY:t,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(tm(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:u,style:h}=e;u.transform&&(h.transform=u.transform,delete u.transform),(h.transform||u.transformOrigin)&&(h.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete u.transformBox);for(const p of HL)u[p]!==void 0&&(h[p]=u[p],delete u[p]);n!==void 0&&(u.x=n),t!==void 0&&(u.y=t),r!==void 0&&(u.scale=r),i!==void 0&&UL(u,i,o,s,!1)}const sS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),aS=e=>typeof e=="string"&&e.toLowerCase()==="svg";function qL(e,n,t,r){rS(e,n,void 0,r);for(const i in n.attrs)e.setAttribute(sS.has(i)?i:Jf(i),n.attrs[i])}function lS(e,n,t){const r=rm(e,n,t);for(const i in e)if(tn(e[i])||tn(n[i])){const o=Wo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class WL extends Xk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if($o.has(t)){const r=Bk(t);return r&&r.default||0}return t=sS.has(t)?t:Jf(t),n.getAttribute(t)}scrapeMotionValuesFromProps(n,t,r){return lS(n,t,r)}build(n,t,r){oS(n,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(n,t,r,i){qL(n,t,r,i)}mount(n){this.isSVGTag=aS(n.tagName),super.mount(n)}}const $L=nm.length;function cS(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent?cS(e.parent)||{}:{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}const n={};for(let t=0;t<$L;t++){const r=nm[t],i=e.props[r];(ia(i)||i===!1)&&(n[r]=i)}return n}function uS(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let r=0;r<t;r++)if(n[r]!==e[r])return!1;return!0}const GL=[...em].reverse(),KL=em.length;function YL(e){return n=>Promise.all(n.map(({animation:t,options:r})=>iL(e,t,r)))}function JL(e){let n=YL(e),t=Zy(),r=!0;const i=l=>(c,d)=>{var h;const u=fo(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(u){const{transition:p,transitionEnd:m,...g}=u;c={...c,...g,...m}}return c};function o(l){n=l(e)}function s(l){const{props:c}=e,d=cS(e.parent)||{},u=[],h=new Set;let p={},m=1/0;for(let b=0;b<KL;b++){const f=GL[b],y=t[f],v=c[f]!==void 0?c[f]:d[f],S=ia(v),T=f===l?y.isActive:null;T===!1&&(m=b);let C=v===d[f]&&v!==c[f]&&S;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),y.protectedKeys={...p},!y.isActive&&T===null||!v&&!y.prevProp||Yc(v)||typeof v=="boolean")continue;const A=QL(y.prevProp,v);let I=A||f===l&&y.isActive&&!C&&S||b>m&&S,M=!1;const E=Array.isArray(v)?v:[v];let N=E.reduce(i(f),{});T===!1&&(N={});const{prevResolvedValues:O={}}=y,q={...O,...N},_=U=>{I=!0,h.has(U)&&(M=!0,h.delete(U)),y.needsAnimating[U]=!0;const R=e.getValue(U);R&&(R.liveStyle=!1)};for(const U in q){const R=N[U],j=O[U];if(p.hasOwnProperty(U))continue;let k=!1;Up(R)&&Up(j)?k=!uS(R,j):k=R!==j,k?R!=null?_(U):h.add(U):R!==void 0&&h.has(U)?_(U):y.protectedKeys[U]=!0}y.prevProp=v,y.prevResolvedValues=N,y.isActive&&(p={...p,...N}),r&&e.blockInitialAnimation&&(I=!1);const H=C&&A;I&&(!H||M)&&u.push(...E.map(U=>{const R={type:f};if(typeof U=="string"&&r&&!H&&e.manuallyAnimateOnMount&&e.parent){const{parent:j}=e,k=fo(j,U);if(j.enteringChildren&&k){const{delayChildren:Y}=k.transition||{};R.delay=Ok(j.enteringChildren,e,Y)}}return{animation:U,options:R}}))}if(h.size){const b={};if(typeof c.initial!="boolean"){const f=fo(e,Array.isArray(c.initial)?c.initial[0]:c.initial);f&&f.transition&&(b.transition=f.transition)}h.forEach(f=>{const y=e.getBaseTarget(f),v=e.getValue(f);v&&(v.liveStyle=!0),b[f]=y??null}),u.push({animation:b})}let g=!!u.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?n(u):Promise.resolve()}function a(l,c){var u;if(t[l].isActive===c)return Promise.resolve();(u=e.variantChildren)==null||u.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,c)}),t[l].isActive=c;const d=s(l);for(const h in t)t[h].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>t,reset:()=>{t=Zy()}}}function QL(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!uS(n,e):!1}function si(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zy(){return{animate:si(!0),whileInView:si(),whileHover:si(),whileTap:si(),whileDrag:si(),whileFocus:si(),exit:si()}}const dS=1e-4,XL=1-dS,ZL=1+dS,pS=.01,eN=0-pS,nN=0+pS;function fn(e){return e.max-e.min}function tN(e,n,t){return Math.abs(e-n)<=t}function ev(e,n,t,r=.5){e.origin=r,e.originPoint=Ae(n.min,n.max,e.origin),e.scale=fn(t)/fn(n),e.translate=Ae(t.min,t.max,e.origin)-e.originPoint,(e.scale>=XL&&e.scale<=ZL||isNaN(e.scale))&&(e.scale=1),(e.translate>=eN&&e.translate<=nN||isNaN(e.translate))&&(e.translate=0)}function Es(e,n,t,r){ev(e.x,n.x,t.x,r?r.originX:void 0),ev(e.y,n.y,t.y,r?r.originY:void 0)}function nv(e,n,t){e.min=t.min+n.min,e.max=e.min+fn(n)}function rN(e,n,t){nv(e.x,n.x,t.x),nv(e.y,n.y,t.y)}function tv(e,n,t){e.min=n.min-t.min,e.max=e.min+fn(n)}function hc(e,n,t){tv(e.x,n.x,t.x),tv(e.y,n.y,t.y)}function rv(e,n,t,r,i){return e-=n,e=pc(e,1/t,r),i!==void 0&&(e=pc(e,1/i,r)),e}function iN(e,n=0,t=1,r=.5,i,o=e,s=e){if(Lt.test(n)&&(n=parseFloat(n),n=Ae(s.min,s.max,n/100)-s.min),typeof n!="number")return;let a=Ae(o.min,o.max,r);e===o&&(a-=n),e.min=rv(e.min,n,t,a,i),e.max=rv(e.max,n,t,a,i)}function iv(e,n,[t,r,i],o,s){iN(e,n[t],n[r],n[i],n.scale,o,s)}const oN=["x","scaleX","originX"],sN=["y","scaleY","originY"];function ov(e,n,t,r){iv(e.x,n,oN,t?t.x:void 0,r?r.x:void 0),iv(e.y,n,sN,t?t.y:void 0,r?r.y:void 0)}function sv(e,n){e.min=n.min,e.max=n.max}function st(e,n){sv(e.x,n.x),sv(e.y,n.y)}function av(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function lv(e){return e.translate===0&&e.scale===1}function hS(e){return lv(e.x)&&lv(e.y)}function cv(e,n){return e.min===n.min&&e.max===n.max}function aN(e,n){return cv(e.x,n.x)&&cv(e.y,n.y)}function uv(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function fS(e,n){return uv(e.x,n.x)&&uv(e.y,n.y)}function dv(e){return fn(e.x)/fn(e.y)}function pv(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function Hn(e){return[e("x"),e("y")]}function lN(e,n,t){let r="";const i=e.x.translate/n.x,o=e.y.translate/n.y,s=(t==null?void 0:t.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(n.x!==1||n.y!==1)&&(r+=`scale(${1/n.x}, ${1/n.y}) `),t){const{transformPerspective:c,rotate:d,rotateX:u,rotateY:h,skewX:p,skewY:m}=t;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),u&&(r+=`rotateX(${u}deg) `),h&&(r+=`rotateY(${h}deg) `),p&&(r+=`skewX(${p}deg) `),m&&(r+=`skewY(${m}deg) `)}const a=e.x.scale*n.x,l=e.y.scale*n.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const mS=["TopLeft","TopRight","BottomLeft","BottomRight"],cN=mS.length,hv=e=>typeof e=="string"?parseFloat(e):e,fv=e=>typeof e=="number"||W.test(e);function uN(e,n,t,r,i,o){i?(e.opacity=Ae(0,t.opacity??1,dN(r)),e.opacityExit=Ae(n.opacity??1,0,pN(r))):o&&(e.opacity=Ae(n.opacity??1,t.opacity??1,r));for(let s=0;s<cN;s++){const a=`border${mS[s]}Radius`;let l=mv(n,a),c=mv(t,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||fv(l)===fv(c)?(e[a]=Math.max(Ae(hv(l),hv(c),r),0),(Lt.test(c)||Lt.test(l))&&(e[a]+="%")):e[a]=c}(n.rotate||t.rotate)&&(e.rotate=Ae(n.rotate||0,t.rotate||0,r))}function mv(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const dN=gS(0,.5,ck),pN=gS(.5,.95,Qn);function gS(e,n,t){return r=>r<e?0:r>n?1:t(na(e,n,r))}function hN(e,n){const t=hn.now(),r=({timestamp:i})=>{const o=i-t;o>=n&&(Kr(r),e(o-n))};return Se.setup(r,!0),()=>Kr(r)}function oa(e,n,t,r={passive:!0}){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t)}function Cl(e){return tn(e)?e.get():e}function fN(e,n,t){const r=tn(e)?e:jo(e);return r.start(Kf("",r,n,t)),r.animation}const mN=(e,n)=>e.depth-n.depth;class gN{constructor(){this.children=[],this.isDirty=!1}add(n){Mf(this.children,n),this.isDirty=!0}remove(n){Of(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(mN),this.isDirty=!1,this.children.forEach(n)}}class yN{constructor(){this.members=[]}add(n){Mf(this.members,n),n.scheduleRender()}remove(n){if(Of(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){const t=this.members.findIndex(i=>n===i);if(t===0)return!1;let r;for(let i=t;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(n,t){const r=this.lead;if(n!==r&&(this.prevLead=r,this.lead=n,n.show(),r)){r.instance&&r.scheduleRender(),n.scheduleRender(),n.resumeFrom=r,t&&(n.resumeFrom.preserveOpacity=!0),r.snapshot&&(n.snapshot=r.snapshot,n.snapshot.latestValues=r.animationValues||r.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:i}=n.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:t,resumingFrom:r}=n;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Tl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ju=["","X","Y","Z"],vN=1e3;let wN=0;function Qu(e,n,t,r){const{latestValues:i}=n;i[e]&&(t[e]=i[e],n.setStaticValue(e,0),r&&(r[e]=0))}function yS(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const t=Nk(n);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(t,"transform",Se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&yS(r)}function vS({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=n==null?void 0:n()){this.id=wN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(kN),this.nodes.forEach(PN),this.nodes.forEach(EN),this.nodes.forEach(SN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new gN)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Lf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Kk(s)&&!xL(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,u=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{u=window.innerWidth}),e(s,()=>{const p=window.innerWidth;p!==u&&(u=p,this.root.updateBlockedByResize=!0,d&&d(),d=hN(h,250),Tl.hasAnimatedSinceResize&&(Tl.hasAnimatedSinceResize=!1,this.nodes.forEach(vv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||MN,{onLayoutAnimationStart:g,onLayoutAnimationComplete:b}=c.getProps(),f=!this.targetLayout||!fS(this.targetLayout,p),y=!u&&h;if(this.options.layoutRoot||this.resumeFrom||y||u&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Gf(m,"layout"),onPlay:g,onComplete:b};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,y)}else u||vv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AN),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const u=this.path[d];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(TN),this.nodes.forEach(bN),this.nodes.forEach(xN)):this.nodes.forEach(yv),this.clearAllSnapshots();const a=hn.now();Ke.delta=_t(0,1e3/60,a-Ke.timestamp),Ke.timestamp=a,Ke.isProcessing=!0,Uu.update.process(Ke),Uu.preRender.process(Ke),Uu.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(CN),this.sharedNodes.forEach(IN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!hS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||ui(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),ON(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return Be();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(jN))){const{scroll:d}=this.root;d&&(ro(a.x,d.offset.x),ro(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=Be();if(st(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:h}=d;d!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&st(a,s),ro(a.x,u.offset.x),ro(a.y,u.offset.y))}return a}applyTransform(s,a=!1){const l=Be();st(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&io(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ui(d.latestValues)&&io(l,d.latestValues)}return ui(this.latestValues)&&io(l,this.latestValues),l}removeTransform(s){const a=Be();st(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ui(c.latestValues))continue;Gp(c.latestValues)&&c.updateSnapshot();const d=Be(),u=c.measurePageBox();st(d,u),ov(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return ui(this.latestValues)&&ov(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:u}=this.options;if(!this.layout||!(d||u))return;this.resolvedRelativeTargetAt=Ke.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):st(this.target,this.layout.layoutBox),nS(this.target,this.targetDelta)):st(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Gp(this.parent.latestValues)||eS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),hc(this.relativeTargetOrigin,a,l),st(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;st(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,h=this.treeScale.y;ML(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Be());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(av(this.prevProjectionDelta.x,this.projectionDelta.x),av(this.prevProjectionDelta.y,this.projectionDelta.y)),Es(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==h||!pv(this.projectionDelta.x,this.prevProjectionDelta.x)||!pv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},u=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Be(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=p!==m,b=this.getStack(),f=!b||b.members.length<=1,y=!!(g&&!f&&this.options.crossfade===!0&&!this.path.some(DN));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const T=S/1e3;wv(u.x,s.x,T),wv(u.y,s.y,T),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hc(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),RN(this.relativeTarget,this.relativeTargetOrigin,h,T),v&&aN(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Be()),st(v,this.relativeTarget)),g&&(this.animationValues=d,uN(d,c,this.latestValues,T,y,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Tl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jo(0)),this.currentAnimation=fN(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&wS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Be();const u=fn(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+u;const h=fn(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}st(a,l),io(a,d),Es(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new yN),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Qu("z",s,c,this.animationValues);for(let d=0;d<Ju.length;d++)Qu(`rotate${Ju[d]}`,s,c,this.animationValues),Qu(`skew${Ju[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=Cl(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=Cl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ui(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let u=lN(this.projectionDeltaWithTransform,this.treeScale,d);l&&(u=l(d,u)),s.transform=u;const{x:h,y:p}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,c.animationValues?s.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Yp){if(d[m]===void 0)continue;const{correct:g,applyTo:b,isCSSVariable:f}=Yp[m],y=u==="none"?d[m]:g(d[m],c);if(b){const v=b.length;for(let S=0;S<v;S++)s[b[S]]=y}else f?this.options.visualElement.renderState.vars[m]=y:s[m]=y}this.options.layoutId&&(s.pointerEvents=c===this?Cl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(gv),this.root.sharedNodes.clear()}}}function bN(e){e.updateLayout()}function xN(e){var t;const n=((t=e.resumeFrom)==null?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Hn(u=>{const h=s?n.measuredBox[u]:n.layoutBox[u],p=fn(h);h.min=r[u].min,h.max=h.min+p}):wS(o,n.layoutBox,r)&&Hn(u=>{const h=s?n.measuredBox[u]:n.layoutBox[u],p=fn(r[u]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+p)});const a=to();Es(a,r,n.layoutBox);const l=to();s?Es(l,e.applyTransform(i,!0),n.measuredBox):Es(l,r,n.layoutBox);const c=!hS(a);let d=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:h,layout:p}=u;if(h&&p){const m=Be();hc(m,n.layoutBox,h.layoutBox);const g=Be();hc(g,r,p.layoutBox),fS(m,g)||(d=!0),u.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=m,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function kN(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function SN(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function CN(e){e.clearSnapshot()}function gv(e){e.clearMeasurements()}function yv(e){e.isLayoutDirty=!1}function TN(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function vv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function PN(e){e.resolveTargetDelta()}function EN(e){e.calcProjection()}function AN(e){e.resetSkewAndRotation()}function IN(e){e.removeLeadSnapshot()}function wv(e,n,t){e.translate=Ae(n.translate,0,t),e.scale=Ae(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function bv(e,n,t,r){e.min=Ae(n.min,t.min,r),e.max=Ae(n.max,t.max,r)}function RN(e,n,t,r){bv(e.x,n.x,t.x,r),bv(e.y,n.y,t.y,r)}function DN(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const MN={duration:.45,ease:[.4,0,.1,1]},xv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),kv=xv("applewebkit/")&&!xv("chrome/")?Math.round:Qn;function Sv(e){e.min=kv(e.min),e.max=kv(e.max)}function ON(e){Sv(e.x),Sv(e.y)}function wS(e,n,t){return e==="position"||e==="preserve-aspect"&&!tN(dv(n),dv(t),.2)}function jN(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const LN=vS({attachResizeListener:(e,n)=>oa(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xu={current:void 0},bS=vS({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xu.current){const e=new LN({});e.mount(window),e.setOptions({layoutScroll:!0}),Xu.current=e}return Xu.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),im=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Cv(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function NN(...e){return n=>{let t=!1;const r=e.map(i=>{const o=Cv(i,n);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Cv(e[i],null)}}}}function _N(...e){return x.useCallback(NN(...e),e)}class FN extends x.Component{getSnapshotBeforeUpdate(n){const t=this.props.childRef.current;if(t&&n.isPresent&&!this.props.isPresent){const r=t.offsetParent,i=Hk(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function zN({children:e,isPresent:n,anchorX:t,root:r}){var d;const i=x.useId(),o=x.useRef(null),s=x.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=x.useContext(im),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),c=_N(o,l);return x.useInsertionEffect(()=>{const{width:u,height:h,top:p,left:m,right:g}=s.current;if(n||!o.current||!u||!h)return;const b=t==="left"?`left: ${m}`:`right: ${g}`;o.current.dataset.motionPopId=i;const f=document.createElement("style");a&&(f.nonce=a);const y=r??document.head;return y.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${h}px !important;
            ${b}px !important;
            top: ${p}px !important;
          }
        `),()=>{y.contains(f)&&y.removeChild(f)}},[n]),w.jsx(FN,{isPresent:n,childRef:o,sizeRef:s,children:x.cloneElement(e,{ref:c})})}const BN=({children:e,initial:n,isPresent:t,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:l})=>{const c=Df(VN),d=x.useId();let u=!0,h=x.useMemo(()=>(u=!1,{id:d,initial:n,isPresent:t,custom:i,onExitComplete:p=>{c.set(p,!0);for(const m of c.values())if(!m)return;r&&r()},register:p=>(c.set(p,!1),()=>c.delete(p))}),[t,c,r]);return o&&u&&(h={...h}),x.useMemo(()=>{c.forEach((p,m)=>c.set(m,!1))},[t]),x.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),s==="popLayout"&&(e=w.jsx(zN,{isPresent:t,anchorX:a,root:l,children:e})),w.jsx(Gc.Provider,{value:h,children:e})};function VN(){return new Map}function xS(e=!0){const n=x.useContext(Gc);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:i}=n,o=x.useId();x.useEffect(()=>{if(e)return i(o)},[e]);const s=x.useCallback(()=>e&&r&&r(o),[o,r,e]);return!t&&r?[!1,s]:[!0]}const el=e=>e.key||"";function Tv(e){const n=[];return x.Children.forEach(e,t=>{x.isValidElement(t)&&n.push(t)}),n}const Pv=({children:e,custom:n,initial:t=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:l})=>{const[c,d]=xS(s),u=x.useMemo(()=>Tv(e),[e]),h=s&&!c?[]:u.map(el),p=x.useRef(!0),m=x.useRef(u),g=Df(()=>new Map),b=x.useRef(new Set),[f,y]=x.useState(u),[v,S]=x.useState(u);X1(()=>{p.current=!1,m.current=u;for(let A=0;A<v.length;A++){const I=el(v[A]);h.includes(I)?(g.delete(I),b.current.delete(I)):g.get(I)!==!0&&g.set(I,!1)}},[v,h.length,h.join("-")]);const T=[];if(u!==f){let A=[...u];for(let I=0;I<v.length;I++){const M=v[I],E=el(M);h.includes(E)||(A.splice(I,0,M),T.push(M))}return o==="wait"&&T.length&&(A=T),S(Tv(A)),y(u),null}const{forceRender:C}=x.useContext(Rf);return w.jsx(w.Fragment,{children:v.map(A=>{const I=el(A),M=s&&!c?!1:u===v||h.includes(I),E=()=>{if(b.current.has(I))return;if(b.current.add(I),g.has(I))g.set(I,!0);else return;let N=!0;g.forEach(O=>{O||(N=!1)}),N&&(C==null||C(),S(m.current),s&&(d==null||d()),r&&r())};return w.jsx(BN,{isPresent:M,initial:!p.current||t?void 0:!1,custom:n,presenceAffectsLayout:i,mode:o,root:l,onExitComplete:M?void 0:E,anchorX:a,children:A},I)})})},kS=x.createContext({strict:!1}),Ev={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Av=!1;function UN(){if(Av)return;const e={};for(const n in Ev)e[n]={isEnabled:t=>Ev[n].some(r=>!!t[r])};Qk(e),Av=!0}function SS(){return UN(),AL()}function HN(e){const n=SS();for(const t in e)n[t]={...n[t],...e[t]};Qk(n)}const qN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||qN.has(e)}let CS=e=>!fc(e);function WN(e){typeof e=="function"&&(CS=n=>n.startsWith("on")?!fc(n):e(n))}try{WN(require("@emotion/is-prop-valid").default)}catch{}function $N(e,n,t){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(CS(i)||t===!0&&fc(i)||!n&&!fc(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Qc=x.createContext({});function GN(e,n){if(Jc(e)){const{initial:t,animate:r}=e;return{initial:t===!1||ia(t)?t:void 0,animate:ia(r)?r:void 0}}return e.inherit!==!1?n:{}}function KN(e){const{initial:n,animate:t}=GN(e,x.useContext(Qc));return x.useMemo(()=>({initial:n,animate:t}),[Iv(n),Iv(t)])}function Iv(e){return Array.isArray(e)?e.join(" "):e}const om=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function TS(e,n,t){for(const r in n)!tn(n[r])&&!iS(r,t)&&(e[r]=n[r])}function YN({transformTemplate:e},n){return x.useMemo(()=>{const t=om();return tm(t,n,e),Object.assign({},t.vars,t.style)},[n])}function JN(e,n){const t=e.style||{},r={};return TS(r,t,e),Object.assign(r,YN(e,n)),r}function QN(e,n){const t={},r=JN(e,n);return e.drag&&e.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(t.tabIndex=0),t.style=r,t}const PS=()=>({...om(),attrs:{}});function XN(e,n,t,r){const i=x.useMemo(()=>{const o=PS();return oS(o,n,aS(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[n]);if(e.style){const o={};TS(o,e.style,e),i.style={...o,...i.style}}return i}const ZN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sm(e){return typeof e!="string"||e.includes("-")?!1:!!(ZN.indexOf(e)>-1||/[A-Z]/u.test(e))}function e_(e,n,t,{latestValues:r},i,o=!1,s){const l=(s??sm(e)?XN:QN)(n,r,i,e),c=$N(n,typeof e=="string",o),d=e!==x.Fragment?{...c,...l,ref:t}:{},{children:u}=n,h=x.useMemo(()=>tn(u)?u.get():u,[u]);return x.createElement(e,{...d,children:h})}function n_({scrapeMotionValuesFromProps:e,createRenderState:n},t,r,i){return{latestValues:t_(t,r,i,e),renderState:n()}}function t_(e,n,t,r){const i={},o=r(e,{});for(const h in o)i[h]=Cl(o[h]);let{initial:s,animate:a}=e;const l=Jc(e),c=Jk(e);n&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=n.initial),a===void 0&&(a=n.animate));let d=t?t.initial===!1:!1;d=d||s===!1;const u=d?a:s;if(u&&typeof u!="boolean"&&!Yc(u)){const h=Array.isArray(u)?u:[u];for(let p=0;p<h.length;p++){const m=Yf(e,h[p]);if(m){const{transitionEnd:g,transition:b,...f}=m;for(const y in f){let v=f[y];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[y]=v)}for(const y in g)i[y]=g[y]}}}return i}const ES=e=>(n,t)=>{const r=x.useContext(Qc),i=x.useContext(Gc),o=()=>n_(e,n,r,i);return t?o():Df(o)},r_=ES({scrapeMotionValuesFromProps:rm,createRenderState:om}),i_=ES({scrapeMotionValuesFromProps:lS,createRenderState:PS}),o_=Symbol.for("motionComponentSymbol");function s_(e,n,t){const r=x.useRef(t);x.useInsertionEffect(()=>{r.current=t});const i=x.useRef(null);return x.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),n&&(o?n.mount(o):n.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[n])}const AS=x.createContext({});function fs(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function a_(e,n,t,r,i,o){var b,f;const{visualElement:s}=x.useContext(Qc),a=x.useContext(kS),l=x.useContext(Gc),c=x.useContext(im).reducedMotion,d=x.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:n,parent:s,props:t,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,isSVG:o}));const u=d.current,h=x.useContext(AS);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&l_(d.current,t,i,h);const p=x.useRef(!1);x.useInsertionEffect(()=>{u&&p.current&&u.update(t,l)});const m=t[Lk],g=x.useRef(!!m&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,m))&&((f=window.MotionHasOptimisedAnimation)==null?void 0:f.call(window,m)));return X1(()=>{u&&(p.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),g.current&&u.animationState&&u.animationState.animateChanges())}),x.useEffect(()=>{u&&(!g.current&&u.animationState&&u.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,m)}),g.current=!1),u.enteringChildren=void 0)}),u}function l_(e,n,t,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:d}=n;e.projection=new t(e.latestValues,n["data-framer-portal-id"]?void 0:IS(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&fs(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:c})}function IS(e){if(e)return e.options.allowProjection!==!1?e.projection:IS(e.parent)}function Zu(e,{forwardMotionProps:n=!1,type:t}={},r,i){r&&HN(r);const o=t?t==="svg":sm(e),s=o?i_:r_;function a(c,d){let u;const h={...x.useContext(im),...c,layoutId:c_(c)},{isStatic:p}=h,m=KN(c),g=s(c,p);if(!p&&Q1){u_();const b=d_(h);u=b.MeasureLayout,m.visualElement=a_(e,g,h,i,b.ProjectionNode,o)}return w.jsxs(Qc.Provider,{value:m,children:[u&&m.visualElement?w.jsx(u,{visualElement:m.visualElement,...h}):null,e_(e,c,s_(g,m.visualElement,d),g,p,n,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=x.forwardRef(a);return l[o_]=e,l}function c_({layoutId:e}){const n=x.useContext(Rf).id;return n&&e!==void 0?n+"-"+e:e}function u_(e,n){x.useContext(kS).strict}function d_(e){const n=SS(),{drag:t,layout:r}=n;if(!t&&!r)return{};const i={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function p_(e,n){if(typeof Proxy>"u")return Zu;const t=new Map,r=(o,s)=>Zu(o,s,e,n),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(t.has(s)||t.set(s,Zu(s,void 0,e,n)),t.get(s))})}const h_=(e,n)=>n.isSVG??sm(e)?new WL(n):new zL(n,{allowProjection:e!==x.Fragment});class f_ extends ei{constructor(n){super(n),n.animationState||(n.animationState=JL(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Yc(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let m_=0;class g_ extends ei{constructor(){super(...arguments),this.id=m_++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===r)return;const i=this.node.animationState.setActive("exit",!n);t&&!n&&i.then(()=>{t(this.id)})}mount(){const{register:n,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const y_={animation:{Feature:f_},exit:{Feature:g_}};function ka(e){return{point:{x:e.pageX,y:e.pageY}}}const v_=e=>n=>Zf(n)&&e(n,ka(n));function As(e,n,t,r){return oa(e,n,v_(t),r)}const RS=({current:e})=>e?e.ownerDocument.defaultView:null,Rv=(e,n)=>Math.abs(e-n);function w_(e,n){const t=Rv(e.x,n.x),r=Rv(e.y,n.y);return Math.sqrt(t**2+r**2)}const Dv=new Set(["auto","scroll"]);class DS{constructor(n,t,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=nd(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=w_(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!g)return;const{point:b}=p,{timestamp:f}=Ke;this.history.push({...b,timestamp:f});const{onStart:y,onMove:v}=this.handlers;m||(y&&y(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,m)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=ed(m,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(p,m)=>{this.end();const{onEnd:g,onSessionEnd:b,resumeAnimation:f}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&f&&f(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=nd(p.type==="pointercancel"?this.lastMoveEventInfo:ed(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,y),b&&b(p,y)},!Zf(n))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=ka(n),c=ed(l,this.transformPagePoint),{point:d}=c,{timestamp:u}=Ke;this.history=[{...d,timestamp:u}];const{onSessionStart:h}=t;h&&h(n,nd(c,this.history)),this.removeListeners=wa(As(this.contextWindow,"pointermove",this.handlePointerMove),As(this.contextWindow,"pointerup",this.handlePointerUp),As(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(n){let t=n.parentElement;for(;t;){const r=getComputedStyle(t);(Dv.has(r.overflowX)||Dv.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const t=this.scrollPositions.get(n);if(!t)return;const r=n===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},o={x:i.x-t.x,y:i.y-t.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(n,i),Se.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Kr(this.updatePoint)}}function ed(e,n){return n?{point:n(e.point)}:e}function Mv(e,n){return{x:e.x-n.x,y:e.y-n.y}}function nd({point:e},n){return{point:e,delta:Mv(e,MS(n)),offset:Mv(e,b_(n)),velocity:x_(n,.1)}}function b_(e){return e[0]}function MS(e){return e[e.length-1]}function x_(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,r=null;const i=MS(e);for(;t>=0&&(r=e[t],!(i.timestamp-r.timestamp>jt(n)));)t--;if(!r)return{x:0,y:0};const o=Yn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function k_(e,{min:n,max:t},r){return n!==void 0&&e<n?e=r?Ae(n,e,r.min):Math.max(e,n):t!==void 0&&e>t&&(e=r?Ae(t,e,r.max):Math.min(e,t)),e}function Ov(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function S_(e,{top:n,left:t,bottom:r,right:i}){return{x:Ov(e.x,t,i),y:Ov(e.y,n,r)}}function jv(e,n){let t=n.min-e.min,r=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,r]=[r,t]),{min:t,max:r}}function C_(e,n){return{x:jv(e.x,n.x),y:jv(e.y,n.y)}}function T_(e,n){let t=.5;const r=fn(e),i=fn(n);return i>r?t=na(n.min,n.max-r,e.min):r>i&&(t=na(e.min,e.max-i,n.min)),_t(0,1,t)}function P_(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const Jp=.35;function E_(e=Jp){return e===!1?e=0:e===!0&&(e=Jp),{x:Lv(e,"left","right"),y:Lv(e,"top","bottom")}}function Lv(e,n,t){return{min:Nv(e,n),max:Nv(e,t)}}function Nv(e,n){return typeof e=="number"?e:e[n]||0}const A_=new WeakMap;class I_{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=u=>{t?(this.stopAnimation(),this.snapToCursor(ka(u).point)):this.pauseAnimation()},s=(u,h)=>{this.stopAnimation();const{drag:p,dragPropagation:m,onDragStart:g}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gL(p),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hn(f=>{let y=this.getAxisMotionValue(f).get()||0;if(Lt.test(y)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[f];S&&(y=fn(S)*(parseFloat(y)/100))}}this.originPoint[f]=y}),g&&Se.postRender(()=>g(u,h)),Hp(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:g,onDrag:b}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:f}=h;if(m&&this.currentDirection===null){this.currentDirection=R_(f),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,f),this.updateAxis("y",h.point,f),this.visualElement.render(),b&&b(u,h)},l=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h,this.stop(u,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Hn(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new DS(n,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:RS(this.visualElement),element:this.visualElement.current})}stop(n,t){const r=n||this.latestPointerEvent,i=t||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&Se.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(n,t,r){const{drag:i}=this.getProps();if(!r||!nl(n,i,this.currentDirection))return;const o=this.getAxisMotionValue(n);let s=this.originPoint[n]+r[n];this.constraints&&this.constraints[n]&&(s=k_(s,this.constraints[n],this.elastic[n])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:n,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;n&&fs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=S_(r.layoutBox,n):this.constraints=!1,this.elastic=E_(t),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Hn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=P_(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!fs(n))return!1;const r=n.current;Oo(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=OL(r,i.root,this.visualElement.getTransformPagePoint());let s=C_(i.layout.layoutBox,o);if(t){const a=t(RL(s));this.hasMutatedConstraints=!!a,a&&(s=Zk(a))}return s}startAnimation(n){const{drag:t,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Hn(d=>{if(!nl(d,t,this.currentDirection))return;let u=l&&l[d]||{};s&&(u={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,m={type:"inertia",velocity:r?n[d]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...u};return this.startAxisValueAnimation(d,m)});return Promise.all(c).then(a)}startAxisValueAnimation(n,t){const r=this.getAxisMotionValue(n);return Hp(this.visualElement,n),r.start(Kf(n,r,0,t,this.visualElement,!1))}stopAnimation(){Hn(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Hn(n=>{var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.pause()})}getAnimationState(n){var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.state}getAxisMotionValue(n){const t=`_drag${n.toUpperCase()}`,r=this.visualElement.getProps(),i=r[t];return i||this.visualElement.getValue(n,(r.initial?r.initial[n]:void 0)||0)}snapToCursor(n){Hn(t=>{const{drag:r}=this.getProps();if(!nl(t,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(t);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[t],l=o.get()||0;o.set(n[t]-Ae(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!fs(t)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Hn(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=T_({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Hn(s=>{if(!nl(s,n,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(Ae(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;A_.set(this.visualElement,this);const n=this.visualElement.current,t=As(n,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&!Gk(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();fs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(r);const s=oa(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Hn(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=l[d].translate,u.set(u.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),t(),o(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Jp,dragMomentum:a=!0}=n;return{...n,drag:t,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function nl(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function R_(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class D_ extends ei{constructor(n){super(n),this.removeGroupControls=Qn,this.removeListeners=Qn,this.controls=new I_(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qn}update(){const{dragControls:n}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};n!==t&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const _v=e=>(n,t)=>{e&&Se.postRender(()=>e(n,t))};class M_ extends ei{constructor(){super(...arguments),this.removePointerDownListener=Qn}onPointerDown(n){this.session=new DS(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:RS(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_v(n),onStart:_v(t),onMove:r,onEnd:(o,s)=>{delete this.session,i&&Se.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=As(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let td=!1;class O_ extends x.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=n;o&&(t.group&&t.group.add(o),r&&r.register&&i&&r.register(o),td&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Tl.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,td=!0,i||n.layoutDependency!==t||t===void 0||n.isPresent!==o?s.willUpdate():this.safeToRemove(),n.isPresent!==o&&(o?s.promote():s.relegate()||Se.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Xf.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:i}=n;td=!0,i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function OS(e){const[n,t]=xS(),r=x.useContext(Rf);return w.jsx(O_,{...e,layoutGroup:r,switchLayoutGroup:x.useContext(AS),isPresent:n,safeToRemove:t})}const j_={pan:{Feature:M_},drag:{Feature:D_,ProjectionNode:bS,MeasureLayout:OS}};function Fv(e,n,t){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",t==="Start");const i="onHover"+t,o=r[i];o&&Se.postRender(()=>o(n,ka(n)))}class L_ extends ei{mount(){const{current:n}=this.node;n&&(this.unmount=yL(n,(t,r)=>(Fv(this.node,r,"Start"),i=>Fv(this.node,i,"End"))))}unmount(){}}class N_ extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wa(oa(this.node.current,"focus",()=>this.onFocus()),oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zv(e,n,t){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",t==="Start");const i="onTap"+(t==="End"?"":t),o=r[i];o&&Se.postRender(()=>o(n,ka(n)))}class __ extends ei{mount(){const{current:n}=this.node;n&&(this.unmount=bL(n,(t,r)=>(zv(this.node,r,"Start"),(i,{success:o})=>zv(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qp=new WeakMap,rd=new WeakMap,F_=e=>{const n=Qp.get(e.target);n&&n(e)},z_=e=>{e.forEach(F_)};function B_({root:e,...n}){const t=e||document;rd.has(t)||rd.set(t,{});const r=rd.get(t),i=JSON.stringify(n);return r[i]||(r[i]=new IntersectionObserver(z_,{root:e,...n})),r[i]}function V_(e,n,t){const r=B_(n);return Qp.set(e,t),r.observe(e),()=>{Qp.delete(e),r.unobserve(e)}}const U_={some:0,all:1};class H_ extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:t,margin:r,amount:i="some",once:o}=n,s={root:t?t.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:U_[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),h=c?d:u;h&&h(l)};return V_(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(q_(n,t))&&this.startObserver()}unmount(){}}function q_({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const W_={inView:{Feature:H_},tap:{Feature:__},focus:{Feature:N_},hover:{Feature:L_}},$_={layout:{ProjectionNode:bS,MeasureLayout:OS}},G_={...y_,...W_,...j_,...$_},ae=p_(G_,h_),K_=F0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Oe=x.forwardRef(({className:e,variant:n,size:t,asChild:r=!1,...i},o)=>{const s=r?EA:"button";return w.jsx(s,{className:zn(K_({variant:n,size:t,className:e})),ref:o,...i})});Oe.displayName="Button";const Bv=[{path:"/",label:"Home",icon:U0},{path:"/docs",label:"Documentation",icon:ya},{path:"/blog",label:"Blog",icon:uf},{path:"/about",label:"About",icon:zI}];function Sa(){const{theme:e,toggleTheme:n}=J1(),t=or(),[r,i]=x.useState(!1);return w.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 h-nav glass border-b border-border",children:[w.jsxs("div",{className:"container mx-auto h-full flex items-center justify-between px-4 lg:px-8",children:[w.jsxs(We,{to:"/",className:"flex items-center gap-2 group",children:[w.jsx("img",{src:"/Docs/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),w.jsx("span",{className:"font-semibold text-lg hidden sm:block group-hover:text-primary transition-colors",children:"DeCoded"})]}),w.jsx("nav",{className:"hidden md:flex items-center gap-1",children:Bv.map(o=>{const s=t.pathname===o.path||o.path!=="/"&&t.pathname.startsWith(o.path);return w.jsxs(We,{to:o.path,className:zn("relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",s?"text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[o.label,s&&w.jsx(ae.div,{layoutId:"nav-indicator",className:"absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full",transition:{type:"spring",bounce:.2,duration:.4}})]},o.path)})}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(Oe,{variant:"ghost",size:"icon",onClick:n,className:"rounded-lg","aria-label":"Toggle theme",children:w.jsx(ae.div,{initial:!1,animate:{rotate:e==="dark"?0:180},transition:{duration:.3},children:e==="dark"?w.jsx(MI,{className:"h-5 w-5"}):w.jsx(_I,{className:"h-5 w-5"})})}),w.jsx(Oe,{variant:"ghost",size:"icon",className:"md:hidden rounded-lg",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?w.jsx(hf,{className:"h-5 w-5"}):w.jsx(H0,{className:"h-5 w-5"})})]})]}),r&&w.jsx(ae.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"md:hidden absolute top-full left-0 right-0 glass border-b border-border",children:w.jsx("nav",{className:"container mx-auto py-4 px-4 flex flex-col gap-1",children:Bv.map(o=>{const s=o.icon,a=t.pathname===o.path||o.path!=="/"&&t.pathname.startsWith(o.path);return w.jsxs(We,{to:o.path,onClick:()=>i(!1),className:zn("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",a?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[w.jsx(s,{className:"h-5 w-5"}),o.label]},o.path)})})})]})}const Y_=[{icon:V0,href:"https://github.com/Rucha-1111/",label:"GitHub"},{icon:pf,href:"https://www.linkedin.com/in/rucha-gade/",label:"LinkedIn"},{icon:yp,href:"mailto:ruchagade20@gmail.com",label:"Email"}],J_=[{title:"Documentation",links:[{label:"Getting Started",href:"/docs/getting-started"},{label:"API Reference",href:"/docs/api-reference"},{label:"Tutorials",href:"/docs/tutorials"}]},{title:"Resources",links:[{label:"Blog",href:"/blog"},{label:"About",href:"/about"},{label:"Contact",href:"/about#contact"}]}];function Ca(){return w.jsx("footer",{className:"border-t border-border bg-card/50",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[w.jsxs("div",{className:"md:col-span-2",children:[w.jsxs(We,{to:"/",className:"flex items-center gap-2 mb-4",children:[w.jsx("img",{src:"/Docs/web-icon.png",alt:"DeCoded Logo",className:"w-8 h-8 rounded-lg glow-pulse"}),w.jsx("span",{className:"font-semibold text-lg",children:"DeCoded"})]}),w.jsx("p",{className:"text-muted-foreground text-sm max-w-xs mb-6",children:"Aspiring Technical Writer crafting clear, developer-focused documentation that bridges complex systems and human understanding."}),w.jsx("div",{className:"flex gap-3",children:Y_.map(e=>w.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":e.label,children:w.jsx(e.icon,{className:"h-4 w-4"})},e.label))})]}),J_.map(e=>w.jsxs("div",{children:[w.jsx("h4",{className:"font-semibold text-sm mb-4",children:e.title}),w.jsx("ul",{className:"space-y-2",children:e.links.map(n=>w.jsx("li",{children:w.jsx(We,{to:n.href,className:"text-sm text-muted-foreground hover:text-primary transition-colors",children:n.label})},n.label))})]},e.title))]}),w.jsxs("div",{className:"border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4",children:[w.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",new Date().getFullYear()," TechWriter Portfolio. All rights reserved."]}),w.jsx("p",{className:"text-sm text-muted-foreground",children:"Built with precision and purpose."})]})]})})}const Q_=[{icon:ya,title:"Technical Documentation",description:"Crystal-clear API references, guides, and tutorials that developers actually want to read."},{icon:uf,title:"Content Strategy",description:"Structured information architecture that scales with your product."},{icon:df,title:"Developer Experience",description:"Documentation that reduces time-to-value and support overhead."}],X_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},tl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function Z_(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsxs("main",{className:"flex-1 pt-nav",children:[w.jsxs("section",{className:"relative overflow-hidden",children:[w.jsx("div",{className:"absolute inset-0 pointer-events-none",children:w.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px]",style:{background:"var(--gradient-glow)"}})}),w.jsx("div",{className:"container mx-auto px-4 lg:px-8 py-16 sm:py-20 md:py-32 relative z-10",children:w.jsxs(ae.div,{variants:X_,initial:"hidden",animate:"visible",className:"max-w-3xl mx-auto text-center",children:[w.jsx(ae.div,{variants:tl,className:"mb-6",children:w.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",children:[w.jsx(NI,{className:"h-4 w-4"}),"Aspiring Technical Writer"]})}),w.jsxs(ae.h1,{variants:tl,className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight",children:["Documentation that"," ",w.jsx("span",{className:"text-gradient",children:"developers love"})]}),w.jsx(ae.p,{variants:tl,className:"text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto",children:"I craft technical documentation that bridges complex systems and human understanding. Clear, precise, and developer-focused."}),w.jsxs(ae.div,{variants:tl,className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Oe,{asChild:!0,size:"lg",className:"glow",children:w.jsxs(We,{to:"/docs",className:"gap-2",children:["Explore Documentation",w.jsx(gp,{className:"h-4 w-4"})]})}),w.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",children:w.jsx(We,{to:"/about",children:"About Me"})})]})]})})]}),w.jsx("section",{className:"py-20 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"What I Do"}),w.jsx("p",{className:"text-muted-foreground max-w-xl mx-auto",children:"Transforming complex technical concepts into accessible, actionable documentation."})]}),w.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:Q_.map((e,n)=>w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},className:"group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[w.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",children:w.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),w.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),w.jsx("p",{className:"text-muted-foreground text-sm",children:e.description})]},e.title))})]})}),w.jsx("section",{className:"py-20",children:w.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:w.jsxs(ae.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12 text-center",children:[w.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"var(--gradient-glow)",opacity:.5}}),w.jsxs("div",{className:"relative z-10",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-4 break-words",children:"Ready to explore the documentation?"}),w.jsx("p",{className:"text-muted-foreground mb-8 max-w-lg mx-auto break-words",children:"Dive into sample documentation showcasing my approach to technical writing."}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Oe,{asChild:!0,size:"lg",className:"break-words",children:w.jsxs(We,{to:"/docs/introduction",className:"gap-2",children:["Start Reading",w.jsx(gp,{className:"h-4 w-4"})]})}),w.jsx(Oe,{asChild:!0,variant:"outline",size:"lg",className:"break-words",children:w.jsx(We,{to:"/blog",children:"Read the Blog"})})]})]})]})})})]}),w.jsx(Ca,{})]})}const jS=`# Java Stdin and Stdout I

> [Link](https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem?isFullScreen=true)

**Most HackerRank challenges require you to read input from stdin (standard input) and write output to stdout (standard output).**

### Task

In this challenge, you must read  integers from stdin and then print them to stdout. Each integer must be printed on a new line. To make the problem a little easier, a portion of the code is provided for you in the editor below.

**Input Format**

There are  lines of input, and each line contains a single integer.

**Sample Input**

\`\`\`
42
100
125
\`\`\`

**Sample Output**

\`\`\`
42
100
125
\`\`\`

### Solution

\`\`\`java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        sc.close();
    }
}
\`\`\`

### Java Basics For This Challenge

- Here’s a clean **“Java Basics for This Challenge”** explanation you can use.

---

## Java Basics for This Challenge

- **Import Statements**

  - \`import java.io.*;\` and \`import java.util.*;\` allow us to use built-in Java classes.
  - These libraries include tools for handling input, output, and utilities like \`Scanner\`.

- **Class Declaration**

  - \`public class Solution\` defines the main class of the program.
  - In Java, every program must have at least one class.
  - The class name must match the file name when submitting on platforms like HackerRank.

- **Main Method**

  - \`public static void main(String[] args)\` is the entry point of the program.
  - Java starts executing the code from this method.
  - Whatever is written inside this method runs when the program is executed.

- **Scanner for Input**

  - \`Scanner sc = new Scanner(System.in);\`
  - The \`Scanner\` class is used to take input from the user through the keyboard.
  - \`System.in\` tells the program to read input from standard input (console).

- **Reading Integers**

  - \`int a = sc.nextInt();\`
  - \`int b = sc.nextInt();\`
  - \`int c = sc.nextInt();\`
  - \`nextInt()\` reads integer values entered by the user.
  - Each value is stored in a separate variable.

- **Printing Output**

  - \`System.out.println(a);\`
  - \`System.out.println(b);\`
  - \`System.out.println(c);\`
  - \`println()\` prints the value to the screen and moves to the next line after printing.

- **Closing the Scanner**

  - \`sc.close();\`
  - This is used to free system resources after input is taken.
  - It is considered good programming practice.

---

### Explanation

- This program reads three integer inputs from the user and prints them on separate lines.
- The \`Scanner\` class is used to take input from standard input (keyboard).
- Each call to \`nextInt()\` reads one integer value entered by the user.
- The values are stored in three variables: \`a\`, \`b\`, and \`c\`.
- \`System.out.println()\` is then used to print each value on a new line.
- The challenge mainly tests your understanding of basic input and output operations in Java.
- Closing the scanner using \`sc.close()\` is good practice as it prevents resource leaks.

---

### Time Complexity

- **O(1)** — The program performs a fixed number of operations.
- It reads three integers and prints them without using loops or complex logic.
- Execution time does not depend on input size.

---

### Space Complexity

- **O(1)** — Only three integer variables are stored.
- No additional data structures are used.
- Memory usage remains constant.

---

### Key Takeaways

- The \`Scanner\` class is commonly used for taking input in Java.
- \`nextInt()\` reads integer values from user input.
- \`System.out.println()\` prints output and moves to the next line automatically.
- Java programs always start execution from the \`main\` method.
- Closing resources like \`Scanner\` is considered good coding practice.
- Understanding input and output is essential before moving to advanced Java concepts.
`,LS=`# Java - Introduction

> [Link](https://www.hackerrank.com/challenges/welcome-to-java/problem?isFullScreen=true)

**Welcome to the world of Java! In this challenge, we practice printing to stdout**

The code stubs in your editor declare a Solution class and a main method. Complete the main method by copying the two lines of code below and pasting them inside the body of your main method.

\`\`\` java
System.out.println("Hello, World.");
System.out.println("Hello, Java.");
\`\`\`

**Input Format**
There is no input for this challenge.

**Output Format**

You must print two lines of output:

Print \`Hello, World.\` on the first line.
Print \`Hello, Java.\` on the second line.

**Sample Output**

\`\`\` java
Hello, World.
Hello, Java.
\`\`\`

### Solution

\`\`\` java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        System.out.println("Hello, World. \\nHello, Java.");
    }
}
\`\`\`

### Java Basics for This Challenge

**1. Class**

- A class is like a **blueprint** or **container** for your program.
- Every Java program must have at least one class.

**2. Main Method**

- \`public static void main(String[] args)\` is **the entry point** of any Java program.
- When you run the program, Java starts executing from this method.
- Think of it like the “start button” of your program.

**3. System.out.println()**

- This prints text to the screen.
- \`println\` automatically moves to the **next line** after printing.

    \`\`\`System.out.println("Hello, World.");\`\`\`

    \`\`\`System.out.println("Hello, Java.");\`\`\`

**4. Why Two Print Statements?**

- The challenge requires **two separate lines**, so we can either use **two \`println\` statements** or include a newline character (\`\\n\`) within a single print statement. The purpose of \`\\n\` is to insert a **line break**, which moves the cursor to the next line so that the text appearing after it is printed on a new line.
    \`\`\`System.out.println("Hello, World.\\nHello, Java.");\`\`\`

> In Java, you define a class, start execution from the main method, and use \`System.out.println()\` to print to the screen.

---

### Explanation

- This challenge is to get familiar with printing statements on the output screens in Java.
- Java program always starts the execution from the \`main()\` method.
- \`System.out.println\` is used to display output on the main screen.
- \`println\` displays the output on the screen and moves the cursor on the next line. \`print\` on the other hand keeps the cursor on the same line.
- \`\\n\` can be used instead of two separate \`println\` to get the output on two lines.
- There is no input for this challenge. The goal is to display a text on the screen and get familiar with the Java syntax.

### Time Complexity - O(1)

The program executes the fixed amount of statements i.e., 2 output statements every time the program is run. There is no input so the program remains static.

### Space Complexity - O(1)

The program always used a constant amount of memory, and no extra variables or data structures are required.

### Key Takeaways

- Every Java program should have a **class** and a \`main()\` method.
- The \`main\` method is the starting point of the program.
- \`System.out.println()\` is used to print output to the console.
- \`println\` automatically adds a new line after printing.
- The newline character \`(\\n)\` can be used to print multiple lines within a single statement.
- Java syntax is strict, so proper structure and formatting are important.
- This challenge builds the foundation for understanding more advanced Java concepts.
`,NS=`# Welcome to the Documentation

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
`,_S="# LeetCode 605. Can Place Flowers\n\n**Difficulty:** Easy\n**Topics:** Arrays, Greedy Approach\n\n**Problem Link:** [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/)\n\n---\n\n## Problem Statement\n\nYou have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.\n\nGiven an integer array `flowerbed` containing `0'`s and `1'`s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if **n new flowers** can be planted in the flowerbed without violating the **no-adjacent-flowers rule** and `false` otherwise.\n\n**Example 1:**\n\nInput: flowerbed = `[1,0,0,0,1]`, n = 1\nOutput: `true`\n\n**Example 2:**\n\nInput: flowerbed = `[1,0,0,0,1]`, n = 2\nOutput: `false`\n\n---\n\n## Java Solution\n\n```java\nclass Solution {\n    public boolean canPlaceFlowers(int[] flowerbed, int n) {\n        int count = 0;\n\n        for (int i = 0; i < flowerbed.length; i++) {\n            if (flowerbed[i] == 0) {\n                boolean left = (i == 0) || (flowerbed[i - 1] == 0);\n                boolean right = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);\n\n                if (left && right) {\n                    flowerbed[i] = 1;\n                    count++;\n                }\n            }\n        }\n        return count >= n;\n    }\n}\n```\n\n## Explanation\n\n- `canPlaceFlowers` method evaluates the `int` array of `flowerbed` and the `int n` denoting the number of flowers that are to be planted in the flowerbed. The return type of the method is boolean, meaning if the `n` number of flowers can be planted in the `flowerbed`, then the value `true` is returned as the output, if not, then `false` is returned.\n  The key constraint in this problem is that _no two flowers can be planted in adjacent plots._\n- We start by initiating the variable of `int count = 0` to keep a track of how many flowers can be planted.\n- A `for` loop is initiated to iterate from the first plot of the _flowerbed_ array till the last plot.\n  - Inside this loop, we have a `if` condition that checks if the current plot in the `flowerbed` is an empty plot or not. If it is, we then proceed to check the plots adjacent to it.\n  - `boolean left` checks if the plot left to the _current plot_ is the first plot `(i==0)` or an empty plot `(flowerbed[i - 1] == 0)`. If the plots are empty, then the value of `left` becomes `true` else `false`.\n  - `boolean right` checks if the plot right to the _current plot_ is the last plot `(i==flowerbed.length-1)` or an empty plot `(flowerbed[i + 1] == 0)`. If the plots are empty, then the value of `right` becomes `true` else `false`.\n- If the values of both `left` and `right` are true, we change the value of _current plot_ to **1** inside the `if` condition. We also\n\n---\n\n## Time Complexity & Space Complexity\n\n### Time Complexity: **O(n)**\n\nThe algorithm processes the `flowerbed` array using a single `for` loop that iterates from the first index to the last.\n\n- Each element of the array is visited **exactly once**\n- All operations inside the loop, such as comparisons, boolean evaluations, and assignments run in **constant time** `O(1)`\n- There are no nested loops or repeated scans of the array\n\nAs a result, the total execution time grows **linearly** with the size of the input array.\n\nIf the flowerbed contains `n` plots, the algorithm performs `n` checks.\n\n---\n\n### Space Complexity: **O(1)**\n\nThe solution uses a fixed number of variables:\n\n- `count`\n- `left`\n- `right`\n- loop index `i`\n\nThese variables require constant memory regardless of the input size.\n\n- No additional arrays or data structures are created\n- The input array is modified **in place**\n- Memory usage does not increase as the size of the flowerbed grows\n\nTherefore, the space complexity remains **constant**.\n\n---\n\n## Key Takeaways\n\n- The problem is solved using a **greedy approach**, placing flowers whenever it is safe to do so.\n- The flowerbed is traversed **once**, ensuring linear time complexity.\n- **Boundary conditions** (first and last positions) are handled safely without extra checks.\n- Boolean logic (`left` and `right`) ensures no adjacent flowers are placed.\n- The `count` variable tracks **valid flower placements** only.\n- The final result depends on whether the number of placed flowers meets or exceeds `n`.\n- The solution is **space-efficient**, using constant extra memory and in-place updates.\n",FS='# LeetCode 1071 – Greatest Common Divisor of Strings\n\n**Difficulty:** Easy\n\n**Topics:** String\n\n**Problem Link:** [1071 - Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)\n\n---\n\n## Problem Statement\n\nYou are given two strings `str1` and `str2`.\nReturn the largest string `x` such that:\n\n1. `x` divides both `str1` and `str2`.\n2. A string `t` divides another string `s` if and only if `s` is formed by concatenating `t` with itself one or more times.\n\n---\n\n## Examples\n\n### Example 1\n\n**Input:** `str1 = "ABAB"`, `str2 = "AB"`\n**Output:** `"AB"`\n\n### Example 2\n\n**Input:** `str1 = "LEET"`, `str2 = "CODE"`\n**Output:** `""`\n\n---\n\n## Java Solution\n\n```java\nclass Solution {\n    public String gcdOfStrings(String str1, String str2) {\n        if (!(str1 + str2).equals(str2 + str1)) {\n            return "";\n        }\n\n        int g = gcd(str1.length(), str2.length());\n        return str1.substring(0, g);\n    }\n\n    private int gcd(int a, int b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n}\n```\n\n---\n\n## Explanation\n\n- First, we check whether both strings can actually have a common divisor string. This is done by concatenating the strings in both possible orders and comparing the results.\n\n```java if (!(str1 + str2).equals(str2 + str1))```\n\n- Here, we first concatenate `str1` and `str2`.\n  For example, if `str1 = "ABC"` and `str2 = "ABCABC"`, then:\n\n  - `str1 + str2 = "ABCABCABC"`\n  - `str2 + str1 = "ABCABCABC"`\n\n- The `.equals()` method checks whether both concatenated strings are **exactly the same**, character by character.\n\n- The condition is negated because if these two results are **not equal**, it means the strings do not follow the same repeating pattern. In such a case, there is no string that can divide both `str1` and `str2`, so we immediately return an empty string.\n\n- After confirming that a common repeating pattern is possible, we move to the core logic of the solution by passing the lengths of both strings to the `gcd()` function.\n\n- The `gcd()` method computes the **greatest common divisor** of the two string lengths. This step is important because any string that divides both `str1` and `str2` must have a length that divides both of their lengths.\n\n- Once we obtain the GCD value, we extract a substring from `str1` starting at index `0` and ending at index `g`. This substring represents the **largest possible string** that can be repeated to form both `str1` and `str2`.\n\n- The `gcd()` function uses the **Euclidean algorithm**, where the problem is repeatedly reduced using the remainder operation until one of the values becomes zero. The remaining value is the GCD.\n\n- Overall, this approach first **filters out invalid cases**, then **uses mathematics to determine the maximum possible divisor length**, and finally **extracts the correct answer efficiently without brute-force checking**.\n\n## Time Complexity\n\n- Overall time complexity is `O(n + m)`, where `n` and `m` are the lengths of `str1` and `str2`.\n- The main step that dominates the runtime is the concatenation check `(str1 + str2).equals(str2 + str1)`,\n  which ensures both strings follow the same repeating pattern.\n- After that, the GCD of the lengths is calculated using the Euclidean algorithm, which is very fast (`O(log(min(n, m)))`) compared to the concatenation.\n- Finally, extracting the substring of length `g = gcd(n, m)` is `O(g)`, which is ≤ `min(n, m)`.\n- Combining these, the overall time remains `O(n + m)`.\n\n## Space Complexity\n\n- Overall space complexity is `O(n + m)`.\n- This comes from creating the concatenated strings `(str1 + str2)` and `(str2 + str1)` of length `n + m`.\n- The substring of length `g = gcd(n, m)` also uses additional space, though smaller.\n- No extra data structures are used, so total space is dominated by the strings themselves.\n\n---\n\n## Key Takeaways\n\n1. Combines string properties and number theory efficiently.\n2. Concatenation check quickly determines if a common divisor exists.\n3. Using GCD of lengths gives the maximum possible divisor string.\n4. Avoids brute-force checking of all prefixes, making it optimal.\n',zS=`# LeetCode 334. Increasing Triplet Subsequence

**Difficulty:** Medium

**Topics:** Arrays, Greedy

**Problem Link:** [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/description/)

---

## Problem Statement

Given an integer array \`nums\`, return \`true\` if there exists a triple of indices \`(i, j, k)\` such that \`i < j < k\` and \`nums[i] < nums[j] < nums[k]\`. If no such indices exists, return \`false\`.

**Example 1:**

Input: nums = \`[1,2,3,4,5]\`
Output: \`true\`
Explanation: Any triplet where i < j < k is valid.

**Example 2:**

Input: nums = \`[5,4,3,2,1]\`
Output: \`false\`
Explanation: No triplet exists.

**Example 3:**

Input: nums = \`[2,1,5,0,4,6]\`
Output: \`true\`
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.

---

## Java

\`\`\`java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;

        for(int num : nums) {
            if (num <= first) {
                first = num;
            }
            else if (num <= second) {
                second = num;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
\`\`\`

## Explanation

- The \`increasingTriplet\` method takes an integer array \`nums\` and returns a boolean value indicating whether an increasing triplet subsequence exists.

- Two variables are initialized:
  - \`first\` - tracks the smallest element encountered so far, initialized to \`Integer.MAX_VALUE\`
  - \`second\` - tracks the smallest element greater than \`first\`, initialized to \`Integer.MAX_VALUE\`

- A **for-each loop** iterates through each element \`num\` in the array:

  - **First condition:** \`if (num <= first)\`
    - If the current number is less than or equal to \`first\`, update \`first\` to \`num\`
    - This ensures \`first\` always holds the smallest value seen so far

  - **Second condition:** \`else if (num <= second)\`
    - If the current number is greater than \`first\` but less than or equal to \`second\`, update \`second\` to \`num\`
    - This means we've found a potential second element of the triplet
    - \`second\` now holds the smallest number that is greater than \`first\`

  - **Third condition:** \`else\`
    - If the current number is greater than both \`first\` and \`second\`, an increasing triplet exists
    - The triplet is: \`first < second < num\`
    - Return \`true\` immediately

- If the loop completes without finding a triplet, return \`false\`.

- **Key insight:** We don't need to track the actual indices. We only need to maintain two values (\`first\` and \`second\`) that represent potential candidates for the first two elements of an increasing triplet. When we find a third element larger than both, we know a valid triplet exists.

---

## Time Complexity & Space Complexity

### Time Complexity: O(n)

The algorithm performs a single pass through the array:

- The **for-each loop** iterates through each element in \`nums\` exactly once
- Inside the loop, all operations (comparisons, assignments) execute in **constant time** \`O(1)\`
- There are no nested loops or recursive calls
- Early termination occurs when a triplet is found, but worst-case still requires checking all elements

If the array contains \`n\` elements, the algorithm performs at most \`n\` comparisons, resulting in **linear time complexity**.

---

### Space Complexity: O(1)

The solution uses only a constant amount of extra space:

- Two integer variables: \`first\` and \`second\`
- Loop variable \`num\` (used in for-each loop)
- No additional data structures are created
- Memory usage remains constant regardless of input size

The space complexity is **constant** as it does not scale with the size of the input array.

---

## Key Takeaways

- The problem is solved using a **greedy approach** with two tracking variables.
- \`first\` maintains the smallest element encountered, acting as a potential first element of the triplet.
- \`second\` maintains the smallest element greater than \`first\`, acting as a potential second element.
- When any element larger than both \`first\` and \`second\` is found, a valid triplet exists.
- The algorithm achieves **O(n) time complexity** with a single pass through the array.
- **Early termination** occurs as soon as a valid triplet is discovered.
- The solution uses **O(1) space complexity**, requiring only two variables.
- The actual **indices are not stored**, only the values needed to detect the increasing pattern.
- The algorithm handles **edge cases** naturally, including arrays with duplicates and descending sequences.
- This approach is more efficient than brute force \`O(n³)\` or sorting-based \`O(n log n)\` solutions.`,BS=`# LeetCode 1431. Kids With the Greatest Number of Candies

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
`,VS=`# LeetCode 1768 – Merge Strings Alternately

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
`,US="# LeetCode 238. Product of Array Except Self\n\n**Difficulty:** Medium\n\n**Topics:** Arrays, Prefix Sum\n\n**Problem Link:** [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)\n\n---\n\n## Problem Statement\n\nGiven an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a **32-bit** integer.\n\nYou must write an algorithm that runs in **O(n) time** and **without using the division operation**.\n\n**Example 1:**\n\nInput: nums = `[1,2,3,4]`\nOutput: `[24,12,8,6]`\n\n**Example 2:**\n\nInput: nums = `[-1,1,0,-3,3]`\nOutput: `[0,0,9,0,0]`\n\n---\n\n## Java\n\n```java\nclass Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int ans[] = new int[n];\n        int prefix[] = new int[n];\n        int suffix[] = new int[n];\n\n        prefix[0] = 1;\n        for (int i = 1; i < n; ++i) {\n            prefix[i] = prefix[i-1] * nums[i-1];\n        }\n\n        suffix[n-1] = 1;\n        for (int i = n - 2; i >= 0; --i) {\n            suffix[i] = suffix[i+1] * nums[i+1];\n        }\n\n        for (int i = 0; i < n; ++i) {\n            ans[i] = prefix[i] * suffix[i];\n        }\n\n        return ans;\n    }\n}\n```\n\n## Explanation\n\n- The `productExceptSelf` method takes an integer array `nums` and returns an array `ans` where each element at index `i` contains the product of all elements in `nums` except `nums[i]`.\n\n- Three arrays are created:\n  - `ans[]` - stores the final result\n  - `prefix[]` - stores the product of all elements to the left of each index\n  - `suffix[]` - stores the product of all elements to the right of each index\n\n- **Building the prefix array:**\n  - `prefix[0]` is initialized to `1` since there are no elements to the left of the first element\n  - The `for` loop iterates from index `1` to `n-1`\n  - For each index `i`, `prefix[i]` is calculated as `prefix[i-1] * nums[i-1]`\n  - This means `prefix[i]` contains the product of all elements before index `i`\n\n- **Building the suffix array:**\n  - `suffix[n-1]` is initialized to `1` since there are no elements to the right of the last element\n  - The `for` loop iterates backwards from index `n-2` to `0`\n  - For each index `i`, `suffix[i]` is calculated as `suffix[i+1] * nums[i+1]`\n  - This means `suffix[i]` contains the product of all elements after index `i`\n\n- **Computing the final answer:**\n  - The final `for` loop iterates through all indices\n  - For each index `i`, `ans[i]` is calculated as `prefix[i] * suffix[i]`\n  - This gives the product of all elements except `nums[i]`, since:\n    - `prefix[i]` = product of all elements before `i`\n    - `suffix[i]` = product of all elements after `i`\n    - Their product excludes only `nums[i]`\n\n- The method returns the `ans` array containing the desired products.\n\n---\n\n## Time Complexity & Space Complexity\n\n### Time Complexity: O(n)\n\nThe algorithm performs three separate passes through the array:\n\n- **First pass:** Building the `prefix` array by iterating from index `1` to `n-1`\n- **Second pass:** Building the `suffix` array by iterating from index `n-2` to `0`\n- **Third pass:** Computing the final `ans` array by iterating through all indices\n\nEach pass visits every element exactly once, and all operations within the loops (multiplication, assignment) run in **constant time** `O(1)`.\n\nSince there are three sequential loops, each taking `O(n)` time, the total time complexity is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.\n\n---\n\n### Space Complexity: O(n)\n\nThe solution uses three additional arrays:\n\n- `ans[]` of size `n` - stores the final result\n- `prefix[]` of size `n` - stores prefix products\n- `suffix[]` of size `n` - stores suffix products\n\nEach array requires linear space proportional to the input size.\n\nThe total auxiliary space used is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.\n\n**Note:** If the output array `ans[]` is not counted towards space complexity (as per some conventions), the space complexity would still be **O(n)** due to the `prefix` and `suffix` arrays.\n\n---\n\n## Key Takeaways\n\n- The problem is solved using the **prefix-suffix product approach**, avoiding division.\n- Two auxiliary arrays (`prefix` and `suffix`) store cumulative products from left and right respectively.\n- The **prefix array** at index `i` contains the product of all elements before index `i`.\n- The **suffix array** at index `i` contains the product of all elements after index `i`.\n- Multiplying `prefix[i]` and `suffix[i]` gives the product of all elements except `nums[i]`.\n- The algorithm handles **edge cases** naturally, including arrays with zeros.\n- The solution achieves **O(n) time complexity** with three linear passes.\n- **No division operation** is used, satisfying the problem constraint.\n- The approach can be optimized to _O(1) extra space_ by computing prefix and suffix products directly in the output array.",HS=`# LeetCode 345. Reverse Vowels of a String

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
`,qS=`# LeetCode 151. Reverse Words in a String

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
`,WS=`# LeetCode 443. String Compression

**Difficulty:** Medium
**Topics:** Two Pointers, String
**Problem Link:** [443. String Compression](https://leetcode.com/problems/string-compression/description/)

---

## Explanation

Given an array of characters \`chars\`, compress it using the following algorithm:

Begin with an empty string \`s\`. For each group of **consecutive repeating characters** in \`chars\`:

- If the group's length is 1, append the character to \`s\`.
- Otherwise, append the character followed by the group's length.

The compressed string \`s\` **should not be returned separately**, but instead, be stored **in the input character array \`chars\`**. Note that group lengths that are 10 or longer will be split into multiple characters in \`chars\`.

After you are done **modifying the input array**, return _the new length of the array_.

You must write an algorithm that uses only **constant extra space**.

## Examples

**Example 1:**

**Input**: chars = ["a","a","b","b","c","c","c"]
**Output**: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
**Explanation**: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

**Example 2:**

**Input**: chars = ["a"]
**Output**: Return 1, and the first character of the input array should be: ["a"]
**Explanation**: The only group is "a", which remains uncompressed since it's a single character.

**Example 3:**

**Input**: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
**Output**: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"]
**Explanation**: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

---

## Java Solution

\`\`\`java
class Solution {
    public int compress(char[] chars) {
        int ans = 0;

        for (int i = 0; i < chars.length;) {
            final char letter = chars[i];
            int count = 0;
            while (i < chars.length && chars[i] == letter) {
                ++count;
                ++i;
            }
            chars[ans++] = letter;
            if (count > 1)
                for (final char c : String.valueOf(count).toCharArray())
                    chars[ans++] = c;
        }

        return ans;
    }
}
\`\`\`

---

## Approach

- The problem requires **in-place compression** of consecutive repeating characters with constant extra space.
- We use a **write pointer** (\`ans\`) to track where to write compressed data and a **read pointer** (\`i\`) to traverse the array.
- For each group of consecutive characters, we **count the occurrences** and write the character followed by its count (if greater than 1).
- The count is converted to a string and each digit is written individually to handle counts ≥ 10.
- The function returns the new length of the compressed array.

## Explanation

- The variable \`ans\` is initialized to track the **write position** in the array → \`int ans = 0;\`.
- A \`for\` loop is used where \`i\` serves as the **read pointer**, starting at 0 and continuing until all characters are processed.
  - Note that \`i\` is **not incremented in the loop header** but inside the inner \`while\` loop.
- For each iteration, the current character is stored → \`final char letter = chars[i];\` and a counter is initialized → \`int count = 0;\`.
- The inner \`while\` loop counts consecutive occurrences of the current character:
  - It checks if \`i\` is within bounds and if \`chars[i]\` equals the current \`letter\`.
  - Both \`count\` and \`i\` are incremented with each matching character → \`++count; ++i;\`.
  - For example, if \`chars = ['a','a','a','b','b']\`, when \`letter = 'a'\`, the loop counts 3 occurrences and moves \`i\` to index 3.
- After counting, the character is written to the array at position \`ans\` → \`chars[ans++] = letter;\`.
  - The post-increment operator \`ans++\` writes at the current position then increments for the next write.
- If the count is greater than 1, the count must be written as well:
  - The count is converted to a string → \`String.valueOf(count)\`.
  - This string is converted to a character array → \`.toCharArray()\`.
  - A \`for-each\` loop iterates through each digit character and writes it to the array → \`chars[ans++] = c;\`.
  - For example, if \`count = 12\`, it writes \`'1'\` and \`'2'\` as separate characters at positions \`ans\` and \`ans+1\`.
- The outer loop continues until \`i\` reaches the end of the array, at which point all characters have been processed.
- Finally, \`ans\` represents the new length of the compressed array and is returned.

> **Two Pointers Technique:** The variable \`i\` acts as the read pointer to traverse and group consecutive characters, while \`ans\` acts as the write pointer to place compressed output, ensuring in-place modification without extra space.

## Time Complexity

- Let \`n\` be the length of the input array \`chars\`.
- The outer loop processes each character exactly once, as \`i\` advances through the entire array → \`O(n)\`.
- The inner \`while\` loop counts consecutive characters, but each character is visited only once across all iterations → \`O(n)\` total.
- Converting count to string and writing digits takes \`O(d)\` where \`d\` is the number of digits (at most \`log₁₀(n)\`), but across all groups this is amortized into \`O(n)\`.

**Overall time complexity:** \`O(n)\`

## Space Complexity

- The algorithm uses only a constant number of variables (\`ans\`, \`i\`, \`letter\`, \`count\`) → \`O(1)\`.
- The output is stored in the input array itself, requiring no additional space.
- The \`String.valueOf(count).toCharArray()\` creates a temporary character array, but this uses \`O(log n)\` space for each count, which is still considered constant space in the context of the problem constraints.

**Overall space complexity:** \`O(1)\`

## Key Takeaways

1. Uses **two pointers** (\`i\` for reading, \`ans\` for writing) for in-place array modification without extra space.
2. Efficiently counts consecutive characters with a single pass through the array.
3. Handles multi-digit counts by converting to string and writing each digit individually.
4. Modifies the input array directly, returning only the new length.
5. Achieves linear time complexity with constant space, meeting problem constraints.
6. The post-increment operator \`ans++\` simplifies writing and advancing the write pointer in one step.
7. The outer loop's increment is handled by the inner loop, allowing flexible advancement based on group size.`,$S=`# Part 1: Introduction to Containers and Containerization

Modern application development and deployment have been revolutionized by containerization technology. This guide introduces the fundamental concepts that form the foundation of container technology and explains why containers have become essential in today's software landscape.

---

## Why Containers Matter

Traditional application deployment faces several challenges: dependency conflicts, environment inconsistencies, and resource inefficiency. Containers solve these problems by providing a standardized way to package and run applications.

**Containers are used to package an application with all its dependencies**, ensuring it runs identically across different environments. They provide:

* **Consistency across environments**: Development, testing, and production environments behave identically
* **Lightweight execution**: Containers share the host OS kernel, requiring fewer resources than virtual machines
* **Fast startup times**: Containers start in seconds rather than minutes
* **Portability**: Run anywhere containers are supported - laptops, data centers, or cloud platforms
* **Isolation**: Applications run independently without interfering with each other

---

## Understanding the Linux Kernel

The **Linux kernel** serves as the foundation for container technology. It is the **core component of the Linux operating system** that acts as a **bridge between hardware and software**.

The kernel manages critical system resources:

* **CPU scheduling**: Allocates processor time to running processes
* **Memory management**: Controls RAM allocation and virtual memory
* **Device drivers**: Enables communication with hardware devices
* **Process management**: Creates, schedules, and terminates processes
* **Security**: Enforces access controls and permissions

The kernel ensures **efficient execution, security, and stability** of all applications running on the system. Without the kernel's resource management capabilities, containers could not achieve their isolation and efficiency.

---

## Core Container Concepts

### What is a Container?

A **container is a lightweight runtime environment** that packages an application with its **dependencies and libraries**, allowing it to run **consistently across different systems**.

Unlike virtual machines, containers:

* Share the host operating system kernel
* Include only the application and its dependencies
* Start almost instantaneously
* Consume minimal disk space and memory
* Can be created and destroyed rapidly

### Container Images: The Blueprint

A **container image is a read-only template** that contains an application, its dependencies, and configuration. It serves as the foundation for creating containers at runtime.

Container images:

* Are **immutable**: Once built, they don't change
* **Ensure consistency**: Every container from the same image behaves identically
* Support **layered architecture**: Images are built in layers, enabling efficient storage and distribution
* Enable **version control**: Different versions can coexist and be deployed as needed

### The Entry Point: Starting Your Container

The **entry point** in a container is the **main command or process** that starts automatically when the container runs. Defined using the **\`ENTRYPOINT\`** instruction in the Dockerfile, it specifies the **executable** that should be launched.

The entry point process is critical because:

* It **keeps the container alive**: When this process exits, the container stops
* It represents the **primary purpose** of the container
* It determines the container's behavior and functionality

---

## Linux Kernel Technologies for Containerization

Container technology relies on several **Linux kernel features** working together to provide isolation, security, and resource management.

### Kernel Namespaces: Isolation

**Namespaces** provide **isolated instances of system resources** for processes. They ensure that processes have their **own view of resources** without seeing or affecting other processes.

Different namespace types provide isolation for:

* **Process IDs (PID)**: Each container has its own process numbering
* **Network interfaces**: Separate network stacks for each container
* **Mount points**: Independent filesystem views
* **User IDs**: Container-specific user and group mappings
* **Interprocess Communication (IPC)**: Isolated message queues and shared memory
* **UTS (hostname)**: Separate hostname and domain name

This isolation enables **containers to run independently** without interfering with the **host system** or other containers.

### Control Groups (cgroups): Resource Management

**Control groups (cgroups)** manage and limit **CPU, memory, and I/O usage** for processes and containers. They ensure:

* Fair resource distribution among containers
* Prevention of resource exhaustion by a single container
* Guaranteed minimum resources for critical applications
* Accurate resource accounting and monitoring

### SELinux: Security Enhancement

**SELinux (Security-Enhanced Linux)** adds a mandatory access control security layer that:

* Enforces strict **access controls** on files, processes, and resources
* Limits what containers can access on the host system
* Provides defense-in-depth security beyond traditional permissions
* Reduces the impact of compromised containers

### Seccomp: System Call Filtering

**Seccomp (Secure Computing Mode)** restricts the **system calls** that containers are allowed to make, providing an additional security layer by:

* Limiting the kernel attack surface
* Preventing containers from making dangerous system calls
* Reducing the risk of privilege escalation
* Enforcing the principle of least privilege

---

## System Calls: The Kernel Interface

A **system call is a mechanism** that allows a **program or process** to request **services from the operating system kernel**. System calls provide controlled access to **hardware resources** like **files, memory, and devices**.

System calls act as a **bridge between user applications and the kernel** to perform **privileged operations safely**, such as:

* Reading or writing files
* Creating network connections
* Allocating memory
* Creating new processes
* Accessing hardware devices

Container security often involves restricting which system calls containers can make, reducing potential attack vectors.

---

## Building Blocks: Creating Containers

To achieve an **end state as a running container**, you need several components:

1. **Container Image**: The blueprint containing the application and dependencies
2. **Container Runtime**: Software that instantiates and runs the image (like Docker or Podman)
3. **Configuration**: Proper settings including:
   * Entry point definition
   * Resource limits (CPU, memory)
   * Network configuration
   * Volume mounts
   * Environment variables

The container runtime reads the image, applies the configuration, and creates the isolated execution environment using kernel features.

---

## What is Containerization?

**Containerization of an application** is the process of **packaging the application along with its dependencies, libraries, and configuration** into a **single container image**.

This packaging approach:

* Ensures applications run **consistently across different environments** (development, testing, production)
* Makes applications **portable** across different infrastructure
* Enables **rapid deployment** and scaling
* Simplifies **dependency management**
* Provides **isolation** from other applications

The containerization process transforms traditional applications into cloud-native workloads that can be efficiently deployed, scaled, and managed in modern infrastructure.

---

## Key Takeaways

* Containers package applications with dependencies for consistent execution across environments
* The Linux kernel provides essential features (namespaces, cgroups, SELinux, seccomp) that enable containerization
* Container images serve as immutable templates for creating containers
* Containers are lightweight, fast, and portable compared to virtual machines
* Multiple kernel technologies work together to provide isolation, security, and resource management
* Understanding these fundamentals is essential before diving into container orchestration and management

---

**Next in this series:** Part 2 will explore container tools and runtimes, including Docker, Podman, and Buildah, and examine how they leverage these kernel features to manage containers effectively.
`,GS=`# Part 10: Production Deployment Guide and Best Practices

Successfully running production workloads on OpenShift requires careful planning, robust deployment processes, effective troubleshooting strategies, and operational discipline. This final guide provides a comprehensive framework for production deployments and ongoing operations.

---

## Pre-Production Checklist

### Infrastructure Readiness

**Cluster configuration:**

* ✓ Control plane nodes: Minimum 3 nodes for HA
* ✓ Worker nodes: Adequate capacity with room for growth
* ✓ Infrastructure nodes: Dedicated nodes for platform services
* ✓ Network configuration: Proper CIDR ranges, DNS, firewall rules
* ✓ Storage configuration: Storage classes configured and tested
* ✓ Load balancers: External load balancers for ingress traffic
* ✓ Certificate management: Valid SSL/TLS certificates configured

**Security configuration:**

* ✓ Authentication provider: LDAP/AD or enterprise SSO configured
* ✓ RBAC policies: Roles and permissions defined and assigned
* ✓ Security Context Constraints: Appropriate SCCs configured
* ✓ Network policies: Traffic restrictions implemented
* ✓ Image scanning: Vulnerability scanning enabled
* ✓ Secrets management: Secure secret storage configured
* ✓ Audit logging: Enabled and forwarding to SIEM

**Monitoring and logging:**

* ✓ Cluster monitoring: Prometheus stack operational
* ✓ Application monitoring: ServiceMonitors configured
* ✓ Alerting: AlertManager rules and routing configured
* ✓ Centralized logging: Log aggregation configured
* ✓ Log retention: Policies defined and implemented
* ✓ Dashboards: Key metrics dashboards created

**Backup and recovery:**

* ✓ Backup strategy: Defined and documented
* ✓ etcd backups: Automated and tested
* ✓ Application backups: PV snapshots or OADP configured
* ✓ Disaster recovery plan: Documented and tested
* ✓ RTO/RPO defined: Recovery objectives established

### Application Readiness

**Container images:**

* ✓ Security scanning: Images scanned and vulnerabilities addressed
* ✓ Image signing: Images signed for verification
* ✓ Base images: Minimal, regularly updated base images
* ✓ Registry access: Proper authentication configured
* ✓ Image tags: Semantic versioning, never use 'latest'

**Resource configuration:**

* ✓ Resource requests: Set based on actual usage patterns
* ✓ Resource limits: Defined with appropriate headroom
* ✓ QoS classes: Understanding Guaranteed vs Burstable
* ✓ Storage requirements: PVCs created and sized appropriately
* ✓ Network requirements: Services and routes configured

**Application configuration:**

* ✓ ConfigMaps: Non-sensitive configuration externalized
* ✓ Secrets: Sensitive data properly secured
* ✓ Environment variables: Properly configured
* ✓ Health checks: Readiness and liveness probes implemented
* ✓ Graceful shutdown: Proper signal handling implemented

**Scalability:**

* ✓ Horizontal scaling: Deployment configured with multiple replicas
* ✓ Autoscaling: HPA configured if appropriate
* ✓ Anti-affinity: Pods distributed across nodes
* ✓ Load testing: Application tested under load
* ✓ Resource consumption: Baseline metrics established

---

## Production Deployment Workflow

### Phase 1: Development Environment Deployment

**Purpose:** Initial development and testing

**Process:**

\`\`\`bash
# Create development project
oc new-project myapp-dev

# Deploy application using S2I
oc new-app python~https://github.com/myorg/myapp.git \\
  --name=myapp \\
  --labels=app=myapp,env=dev

# Configure environment
oc create configmap app-config --from-file=config.properties
oc create secret generic app-secrets --from-literal=db-password=devpassword

# Update deployment to use config
oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add storage if needed
oc set volume deployment/myapp \\
  --add \\
  --name=data \\
  --type=persistentVolumeClaim \\
  --claim-name=myapp-data \\
  --mount-path=/data

# Expose service
oc expose service/myapp

# Get route URL
oc get route myapp -o jsonpath='{.spec.host}'
\`\`\`

**Validation:**

* Application starts successfully
* Health checks passing
* Basic functionality verified
* Logs show no errors

### Phase 2: Staging Environment Deployment

**Purpose:** Pre-production validation and testing

**Process:**

\`\`\`bash
# Create staging project
oc new-project myapp-staging

# Set resource quotas
oc create quota staging-quota \\
  --hard=requests.cpu=4,requests.memory=8Gi,pods=20

# Deploy application (using tested image from dev)
oc new-app --docker-image=image-registry.openshift-image-registry.svc:5000/myapp-dev/myapp:v1.2.3 \\
  --name=myapp \\
  --labels=app=myapp,env=staging

# Scale for staging load
oc scale deployment/myapp --replicas=2

# Configure staging environment
oc create configmap app-config --from-file=staging-config.properties
oc create secret generic app-secrets --from-literal=db-password=\${STAGING_PASSWORD}

# Apply configuration
oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add persistent storage
oc create -f myapp-pvc.yaml
oc set volume deployment/myapp \\
  --add \\
  --name=data \\
  --type=persistentVolumeClaim \\
  --claim-name=myapp-data \\
  --mount-path=/data

# Configure resource limits
oc set resources deployment/myapp \\
  --requests=cpu=250m,memory=512Mi \\
  --limits=cpu=500m,memory=1Gi

# Expose with TLS
oc create route edge myapp \\
  --service=myapp \\
  --hostname=myapp-staging.example.com \\
  --cert=staging-cert.pem \\
  --key=staging-key.pem
\`\`\`

**Testing in staging:**

* Load testing and performance validation
* Integration testing with dependent services
* Security scanning and penetration testing
* User acceptance testing (UAT)
* Failure scenario testing
* Backup and restore testing

### Phase 3: Production Deployment

**Purpose:** Live production environment

**Pre-deployment steps:**

1. **Change management approval**: Follow organizational change process
2. **Communication**: Notify stakeholders of deployment window
3. **Backup verification**: Ensure recent backups exist
4. **Rollback plan**: Document rollback procedures
5. **Monitoring preparation**: Ensure alerts and dashboards ready

**Production deployment:**

\`\`\`bash
# Create production project
oc new-project myapp-prod

# Set production quotas
oc create quota prod-quota \\
  --hard=requests.cpu=16,requests.memory=32Gi,pods=50

# Deploy application with production image
oc new-app --docker-image=registry.example.com/myapp:v1.2.3 \\
  --name=myapp \\
  --labels=app=myapp,env=prod,version=v1.2.3

# Scale for production load
oc scale deployment/myapp --replicas=5

# Apply production configuration
oc create configmap app-config --from-file=prod-config.properties
oc create secret generic app-secrets \\
  --from-literal=db-password=\${PROD_PASSWORD} \\
  --from-literal=api-key=\${PROD_API_KEY}

oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add persistent storage with backup
oc create -f myapp-prod-pvc.yaml
oc set volume deployment/myapp \\
  --add \\
  --name=data \\
  --type=persistentVolumeClaim \\
  --claim-name=myapp-data \\
  --mount-path=/data

# Set production resource limits
oc set resources deployment/myapp \\
  --requests=cpu=500m,memory=1Gi \\
  --limits=cpu=1000m,memory=2Gi

# Configure autoscaling
oc autoscale deployment/myapp --min=5 --max=20 --cpu-percent=70

# Set pod anti-affinity for HA
oc patch deployment/myapp -p '
{
  "spec": {
    "template": {
      "spec": {
        "affinity": {
          "podAntiAffinity": {
            "requiredDuringSchedulingIgnoredDuringExecution": [
              {
                "labelSelector": {
                  "matchLabels": {
                    "app": "myapp"
                  }
                },
                "topologyKey": "kubernetes.io/hostname"
              }
            ]
          }
        }
      }
    }
  }
}'

# Create production route with TLS
oc create route edge myapp \\
  --service=myapp \\
  --hostname=myapp.example.com \\
  --cert=prod-cert.pem \\
  --key=prod-key.pem \\
  --ca-cert=ca-chain.pem

# Configure health checks
oc set probe deployment/myapp \\
  --readiness \\
  --get-url=http://:8080/health/ready \\
  --initial-delay-seconds=10 \\
  --period-seconds=10 \\
  --failure-threshold=3

oc set probe deployment/myapp \\
  --liveness \\
  --get-url=http://:8080/health/live \\
  --initial-delay-seconds=30 \\
  --period-seconds=30 \\
  --failure-threshold=3
\`\`\`

**Post-deployment verification:**

1. **Health checks**: All pods healthy and ready
2. **Monitoring**: Metrics flowing to Prometheus
3. **Logging**: Logs appearing in aggregation system
4. **Application testing**: Critical paths validated
5. **Performance**: Response times within SLA
6. **Traffic verification**: External access working correctly

---

## Deployment Strategies

### Rolling Deployment (Default)

**Characteristics:**

* Gradual replacement of old pods with new pods
* Zero downtime deployment
* Both versions running temporarily
* Automatic rollback on failure

**Configuration:**

\`\`\`yaml
strategy:
  type: Rolling
  rollingUpdate:
    maxUnavailable: 25%
    maxSurge: 25%
\`\`\`

**When to use:** Standard deployments where brief coexistence of versions is acceptable

### Blue-Green Deployment

**Characteristics:**

* Complete new environment (green) deployed alongside old (blue)
* Traffic switched instantly from blue to green
* Easy rollback by switching back
* Requires double resources temporarily

**Implementation:**

\`\`\`bash
# Deploy green version
oc new-app myapp:v2 --name=myapp-green

# Test green version
oc expose service/myapp-green --name=myapp-green-test

# Switch traffic to green
oc patch route/myapp -p '{"spec":{"to":{"name":"myapp-green"}}}'

# Keep blue for quick rollback if needed
# Delete blue after validation period
\`\`\`

**When to use:** Critical applications requiring instant rollback capability

### Canary Deployment

**Characteristics:**

* New version deployed to small subset of users
* Gradual traffic increase to new version
* Monitor for issues before full rollout
* Risk mitigation through phased approach

**Implementation:**

\`\`\`bash
# Deploy canary version with 1 replica
oc new-app myapp:v2 --name=myapp-canary
oc scale deployment/myapp-canary --replicas=1

# Configure route to split traffic (90% stable, 10% canary)
oc set route-backends myapp myapp=90 myapp-canary=10

# Monitor canary performance
# Gradually increase canary traffic
oc set route-backends myapp myapp=70 myapp-canary=30
oc set route-backends myapp myapp=50 myapp-canary=50

# Eventually replace entirely
oc set route-backends myapp myapp-canary=100
\`\`\`

**When to use:** High-risk deployments requiring gradual rollout and validation

---

## Troubleshooting Guide

### Pod Issues

**Pod won't start:**

\`\`\`bash
# Check pod status
oc get pods

# Describe pod for events
oc describe pod myapp-xxx

# Common issues and solutions:
# - ImagePullBackOff: Check image name, registry credentials
# - CrashLoopBackOff: Check application logs for startup errors
# - Pending: Check resource availability, node selectors, taints
# - CreateContainerConfigError: Check configmaps and secrets exist
\`\`\`

**Check pod logs:**

\`\`\`bash
# Current logs
oc logs myapp-xxx

# Previous container logs
oc logs --previous myapp-xxx

# Follow logs
oc logs -f myapp-xxx

# Logs from specific container
oc logs myapp-xxx -c container-name
\`\`\`

**Debug running container:**

\`\`\`bash
# Execute commands in container
oc exec myapp-xxx -- ls -la /app

# Interactive shell
oc exec -it myapp-xxx -- /bin/bash

# Debug with ephemeral container
oc debug pod/myapp-xxx
\`\`\`

### Networking Issues

**Service not accessible:**

\`\`\`bash
# Check service
oc get service myapp
oc describe service myapp

# Verify endpoints exist
oc get endpoints myapp

# Test service connectivity from another pod
oc run test --rm -it --image=busybox -- wget -O- http://myapp:8080

# Check network policies
oc get networkpolicy
oc describe networkpolicy
\`\`\`

**Route not working:**

\`\`\`bash
# Check route
oc get route myapp
oc describe route myapp

# Verify DNS resolution
nslookup myapp.example.com

# Test route
curl -v https://myapp.example.com

# Check router logs
oc logs -n openshift-ingress -l app=router
\`\`\`

### Resource Issues

**Out of resources:**

\`\`\`bash
# Check node resources
oc describe nodes | grep -A 5 "Allocated resources"

# Check pod resource usage
oc adm top pods
oc adm top nodes

# Check quota usage
oc describe quota

# View resource requests and limits
oc describe deployment myapp | grep -A 10 "Limits"
\`\`\`

### Storage Issues

**PVC not binding:**

\`\`\`bash
# Check PVC status
oc get pvc

# Describe PVC for events
oc describe pvc myapp-data

# Check storage class
oc get storageclass

# Check PV availability
oc get pv

# Common issues:
# - No PV matching requirements
# - Storage class doesn't exist
# - Provisioner not working
\`\`\`

### Application Performance Issues

**Slow response times:**

\`\`\`bash
# Check pod metrics
oc adm top pods

# Check application logs for errors
oc logs deployment/myapp | grep ERROR

# Check database connections
# Check external service dependencies
# Review application profiling data

# Scale if needed
oc scale deployment/myapp --replicas=10
\`\`\`

**Memory leaks:**

\`\`\`bash
# Monitor memory usage over time
oc adm top pods --watch

# Check for OOMKilled containers
oc get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\\t"}{.status.containerStatuses[*].lastState.terminated.reason}{"\\n"}{end}'

# Review application memory management
# Consider increasing limits if justified
# Fix application memory leaks
\`\`\`

### Build Failures

**S2I build fails:**

\`\`\`bash
# Check build status
oc get builds

# View build logs
oc logs -f bc/myapp

# Common issues:
# - Source repository access denied
# - Build dependencies unavailable
# - Insufficient build resources
# - Builder image incompatible

# Rebuild with debugging
oc start-build myapp --follow

# Cancel stuck build
oc cancel-build myapp-2
\`\`\`

---

## Operational Best Practices

### Day 1: Deployment

**Initial deployment:**

* Follow deployment workflow systematically
* Verify each step before proceeding
* Monitor closely during and after deployment
* Keep rollback plan ready
* Document any deviations or issues

**Post-deployment:**

* Validate application functionality
* Check monitoring and alerting
* Verify backup jobs running
* Update documentation
* Communicate success to stakeholders

### Day 2: Operations

**Daily operations:**

* Monitor cluster and application health
* Review alerts and respond appropriately
* Check resource utilization trends
* Review logs for errors or anomalies
* Verify backup completion

**Weekly operations:**

* Review capacity trends
* Analyze performance metrics
* Update applications and base images
* Review security scan results
* Test disaster recovery procedures

**Monthly operations:**

* Cluster updates and patches
* Review and update quotas
* Audit user access and permissions
* Capacity planning based on growth
* Review and update runbooks

### Continuous Improvement

**Metrics-driven optimization:**

* Track deployment frequency
* Measure deployment success rate
* Monitor mean time to recovery (MTTR)
* Track resource utilization efficiency
* Measure application performance SLAs

**Automation expansion:**

* Automate repetitive tasks
* Implement GitOps for configurations
* Enhance CI/CD pipelines
* Expand monitoring coverage
* Improve alerting accuracy

**Knowledge sharing:**

* Document lessons learned
* Create runbooks for common issues
* Conduct post-mortem analysis
* Share best practices across teams
* Provide training and mentoring

---

## Production Readiness Checklist

### Application Level

* ☐ Health checks implemented (readiness and liveness)
* ☐ Graceful shutdown handling
* ☐ Resource requests and limits configured
* ☐ Multiple replicas for high availability
* ☐ Pod anti-affinity rules configured
* ☐ Horizontal autoscaling configured
* ☐ Persistent storage configured and tested
* ☐ Configuration externalized (ConfigMaps, Secrets)
* ☐ Logging structured and comprehensive
* ☐ Metrics exposed for monitoring
* ☐ Security context configured appropriately

### Platform Level

* ☐ Cluster monitoring operational
* ☐ Centralized logging configured
* ☐ Alerting rules configured and tested
* ☐ Backup strategy implemented and tested
* ☐ Disaster recovery plan documented
* ☐ Network policies implemented
* ☐ RBAC configured appropriately
* ☐ Resource quotas defined
* ☐ Certificate management automated
* ☐ Image scanning integrated
* ☐ Audit logging enabled

### Operational Level

* ☐ Runbooks created for common scenarios
* ☐ On-call rotation established
* ☐ Escalation procedures defined
* ☐ Monitoring dashboards created
* ☐ Performance baselines established
* ☐ Capacity planning completed
* ☐ Change management process followed
* ☐ Documentation complete and updated
* ☐ Training provided to operators
* ☐ Communication plan established

---

## Common Anti-Patterns to Avoid

### Deployment Anti-Patterns

**Running as root unnecessarily:**

* Use non-root user in containers
* Avoid privileged SCCs unless required
* Follow least privilege principle

**Using 'latest' tag:**

* Always use specific version tags
* Enables version tracking and rollback
* Prevents unexpected updates

**No health checks:**

* Always implement readiness and liveness probes
* Prevents traffic to unhealthy pods
* Enables automatic recovery

**Inadequate resource configuration:**

* Set appropriate requests and limits
* Prevents resource starvation
* Enables proper scheduling

### Operational Anti-Patterns

**Manual configuration changes:**

* Use declarative configurations
* Version control all changes
* Follow GitOps principles

**Ignoring monitoring data:**

* Set up alerts for critical metrics
* Review trends regularly
* Act on anomalies proactively

**Infrequent backups:**

* Automate backup processes
* Test restore procedures regularly
* Maintain multiple backup copies

**No disaster recovery testing:**

* Test recovery procedures regularly
* Update plans based on lessons learned
* Ensure team knows procedures

---

## Scaling Best Practices

### Horizontal Scaling

**Application scaling:**

\`\`\`bash
# Manual scaling
oc scale deployment/myapp --replicas=10

# Autoscaling
oc autoscale deployment/myapp --min=3 --max=20 --cpu-percent=70

# Custom metrics autoscaling
# Using custom metrics from application
\`\`\`

**When to scale horizontally:**

* CPU or memory utilization consistently high
* Response times degrading
* Request queue growing
* Anticipating traffic spike

### Vertical Scaling

**Increase pod resources:**

\`\`\`bash
# Update resource limits
oc set resources deployment/myapp \\
  --requests=cpu=1000m,memory=2Gi \\
  --limits=cpu=2000m,memory=4Gi
\`\`\`

**When to scale vertically:**

* Single-threaded workloads
* Memory-intensive operations
* Cannot horizontally scale application
* Requires more resources per instance

### Cluster Scaling

**Add worker nodes:**

\`\`\`bash
# Scale machine set
oc scale machineset/worker --replicas=10

# Enable cluster autoscaler
# Configure per machine set
\`\`\`

**When to scale cluster:**

* Pods pending due to insufficient resources
* Node resource utilization high
* Planning for growth
* Availability zone expansion

---

## Key Takeaways

* Production readiness requires comprehensive preparation across infrastructure, security, monitoring, and backup
* Follow structured deployment workflow: Development → Staging → Production
* Choose appropriate deployment strategy (Rolling, Blue-Green, Canary) based on risk tolerance
* Systematic troubleshooting follows the workflow: pods → networking → storage → application
* Day 2 operations require ongoing monitoring, maintenance, and continuous improvement
* Production readiness checklists ensure nothing is overlooked
* Avoid common anti-patterns in deployment and operations
* Scale appropriately based on metrics and workload characteristics
* Automation and documentation are critical for sustainable operations
* Regular testing of backup and disaster recovery procedures is essential

---

## Conclusion: Your OpenShift Journey

This 10-part series has covered the complete journey from container basics to production-ready OpenShift deployments:

1. **Container Fundamentals**: Understanding containers and their underlying technologies
2. **Container Tools**: Docker, Podman, Buildah, and container runtimes
3. **Kubernetes Introduction**: Container orchestration and declarative architecture
4. **OpenShift Basics**: Enterprise Kubernetes platform and deployment options
5. **Operators and Automation**: Managing machines, nodes, and cluster infrastructure
6. **Command-Line Tools**: kubectl and oc for efficient cluster management
7. **Application Deployment**: Multiple deployment methods and service exposure
8. **Access Control**: Authentication, RBAC, quotas, and security
9. **Advanced Features**: Storage, networking, monitoring, logging, and HA
10. **Production Operations**: Deployment workflows, troubleshooting, and best practices

You now have the knowledge foundation to effectively design, deploy, and operate containerized applications on OpenShift. Continue learning through hands-on practice, community engagement, and real-world experience.

**Additional resources:**

* Red Hat OpenShift documentation: docs.openshift.com
* Kubernetes documentation: kubernetes.io/docs
* OpenShift blog: blog.openshift.com
* Red Hat Developer: developers.redhat.com
* OpenShift YouTube channel
* Local user groups and meetups

Welcome to the container orchestration community! Keep building, learning, and sharing your knowledge with others on their journey.
`,KS=`# Part 2: Container Tools and Runtimes

Understanding the tools and runtimes that manage containers is essential for working with containerized applications. This guide explores the ecosystem of container management tools, build utilities, and runtime engines that bring containers to life.

---

## Container Runtimes: Executing Containers

A **container runtime** is software that **runs and manages containers** based on container images. The runtime handles the low-level operations of creating, starting, stopping, and destroying containers while interfacing with the operating system kernel.

### runC: The Foundation

**runC** is a lightweight **command-line tool** designed to run containers according to **OCI (Open Container Initiative) standards**. It represents the reference implementation of the OCI runtime specification.

Key characteristics of runC:

* **Lightweight and fast**: Minimal overhead for container execution
* **Standards-compliant**: Follows OCI specifications exactly
* **Low-level**: Provides basic container lifecycle management
* **Foundation for other runtimes**: Many higher-level runtimes use runC under the hood
* **CLI-based**: Operated through command-line interface

runC handles the actual creation of namespaces, setup of cgroups, mounting of filesystems, and execution of the container process.

### CRI-O: Kubernetes-Native Runtime

**CRI-O** is a **lightweight container runtime** specifically designed for Kubernetes. It implements the Kubernetes Container Runtime Interface (CRI) and focuses on:

* **Kubernetes integration**: Built specifically to work with Kubernetes
* **Minimal overhead**: Only includes features needed for Kubernetes
* **OCI compliance**: Runs OCI-compliant container images
* **Stability**: Designed for production Kubernetes clusters
* **Security**: Integrates with SELinux and seccomp profiles

CRI-O provides the essential runtime capabilities Kubernetes needs without the additional features of full container platforms.

### Docker: The Complete Platform

**Docker** is a comprehensive **container platform** that provides:

* **Container runtime**: Executes containers using containerd and runC
* **Build system**: Creates container images from Dockerfiles
* **Image management**: Stores and distributes container images
* **Networking**: Provides container networking solutions
* **Orchestration capabilities**: Docker Swarm for basic orchestration
* **Developer tools**: Docker Compose for multi-container applications

Docker popularized containers and remains widely used, though Kubernetes environments often use more specialized runtimes.

---

## Understanding OCI Compliance

**OCI-compliant** means a container image **follows the Open Container Initiative (OCI) standards**, ensuring it can be **used across different container runtimes** without compatibility issues.

The OCI defines specifications for:

* **Image Format**: How container images are structured and stored
* **Runtime Specification**: How containers should be executed
* **Distribution Specification**: How images are distributed across registries

OCI compliance ensures:

* **Interoperability**: Images work with any OCI-compliant runtime
* **Portability**: Move images between different environments and platforms
* **Standardization**: Common understanding across the container ecosystem
* **Future-proofing**: Protection against vendor lock-in

---

## Container Build Tools

Building container images requires specialized tools that can create layered filesystems and package applications efficiently.

### Buildah: Image Building Without Daemons

**Buildah** is a **tool for building container images** without requiring a full container runtime or daemon. It allows creating, modifying, and managing **OCI-compliant images** directly from the command line.

Buildah advantages:

* **Daemon-less**: No background service required
* **Rootless builds**: Can build images without root privileges
* **Dockerfile support**: Compatible with standard Dockerfiles
* **Scripted builds**: Build images using shell scripts
* **Layer control**: Fine-grained control over image layers
* **Minimal dependencies**: Lightweight and focused tool

Buildah excels in automated build pipelines and environments where you need precise control over image creation.

### Podman: Docker-Compatible Container Management

**Podman** is a **daemon-less, rootless container runtime** that can **run, manage, and orchestrate containers** while providing a **Docker-compatible command-line experience**.

Key features of Podman:

* **Daemon-less architecture**: No central service; containers run as child processes
* **Rootless execution**: Run containers without root privileges for enhanced security
* **Docker CLI compatible**: Commands mirror Docker for easy transition
* **Pod support**: Native support for Kubernetes-style pods
* **Systemd integration**: Generate systemd unit files for containers
* **Kubernetes YAML**: Can run containers from Kubernetes YAML definitions

The relationship between Podman and Buildah:

* Buildah focuses on **building images**
* Podman focuses on **running containers**
* They share common libraries and can work together seamlessly
* Both support daemon-less, rootless operation

---

## Container Management Tools

Beyond individual runtimes, several platforms provide comprehensive container management capabilities.

### Docker Platform

**Docker** provides:

* Container lifecycle management
* Image building and registry integration
* Basic networking and volume management
* Docker Compose for multi-container applications
* Docker Swarm for simple orchestration

Ideal for: Development environments, small deployments, and learning containers.

### Podman

**Podman** offers:

* Drop-in replacement for Docker CLI
* Enhanced security through rootless operation
* Pod management similar to Kubernetes
* Direct Kubernetes YAML support
* Integration with systemd for production deployments

Ideal for: Security-conscious environments, Kubernetes development, and production systems.

### Kubernetes

**Kubernetes** is a **container orchestration platform** used to **deploy, manage, and scale containers automatically** (covered in detail in Part 3).

* Handles large-scale container deployments
* Provides automated scaling and healing
* Manages complex distributed applications
* Supports multiple container runtimes

Ideal for: Production environments, microservices, and cloud-native applications.

### OpenShift

**OpenShift** extends Kubernetes with enterprise features (covered in detail in Part 4).

* Built on Kubernetes foundation
* Adds developer tools and CI/CD integration
* Enhanced security and multi-tenancy
* Integrated monitoring and logging
* Enterprise support and lifecycle management

Ideal for: Enterprise deployments requiring comprehensive platform capabilities.

### Rancher

**Rancher** provides:

* Multi-cluster Kubernetes management
* Unified interface for managing multiple clusters
* Built-in security policies
* Application catalog
* Cluster provisioning automation

Ideal for: Organizations managing multiple Kubernetes clusters across different environments.

---

## Image Registries: Storing and Distributing Images

Container images need centralized storage for distribution and sharing. Image registries serve this purpose.

### What is an Image Registry?

An **image registry** is a centralized repository for storing, managing, and distributing container images. Registries enable:

* **Image storage**: Persistent storage of container images
* **Version management**: Track multiple versions of images
* **Distribution**: Share images across teams and environments
* **Access control**: Manage who can pull or push images
* **Content trust**: Verify image authenticity and integrity

### Types of Registries

**Public Registries:**

* **Docker Hub**: Largest public registry with official images
* **Quay.io**: Red Hat's container registry
* **GitHub Container Registry**: Integrated with GitHub repositories
* **Google Container Registry**: Part of Google Cloud Platform

**Private Registries:**

* **Self-hosted**: Run your own registry server
* **OpenShift Integrated Registry**: Built into OpenShift clusters
* **Cloud provider registries**: AWS ECR, Azure ACR, Google GCR
* **Enterprise solutions**: JFrog Artifactory, Harbor, Nexus

### Registry Operations

Common registry operations include:

* **Pushing images**: Upload images to the registry
* **Pulling images**: Download images from the registry
* **Tagging**: Apply version labels to images
* **Searching**: Find available images
* **Deleting**: Remove outdated or unnecessary images

---

## Containers vs Virtual Machines

Understanding the differences between containers and virtual machines helps you choose the right technology for your needs.

### Virtual Machines: Full OS Virtualization

A **Virtual Machine (VM)** is a **software-based emulation** of a physical computer that runs a **complete operating system and applications**.

VMs require:

* **Dedicated CPU cores**: Allocated processor resources
* **Memory (RAM)**: Reserved memory for each VM
* **Storage (disk space)**: Virtual disks for the operating system and data
* **Network interfaces**: Virtual network adapters
* **Hypervisor**: Software layer managing hardware allocation
* **Full operating system**: Complete OS installation per VM

VMs provide **strong isolation** but are **resource-intensive**:

* **Heavy footprint**: Each VM includes full OS (gigabytes of storage)
* **Slow startup**: Minutes to boot a complete operating system
* **Resource overhead**: Significant CPU and memory for the OS itself
* **Lower density**: Fewer VMs per physical host

### Containers: Shared Kernel Approach

**Containers** share the **host OS kernel**, making them **lightweight, faster to start**, and more **portable**.

Containers require:

* Shared kernel access (no separate OS)
* Application binaries and libraries only
* Minimal isolation layers
* Container runtime and image

Containers provide **efficient resource usage**:

* **Small footprint**: Megabytes instead of gigabytes
* **Fast startup**: Seconds to start applications
* **High density**: Hundreds of containers per host
* **Efficient scaling**: Rapid creation and destruction

### When to Use Each

**Use Virtual Machines when:**

* You need complete OS isolation
* Running different operating systems on the same hardware
* Maximum security isolation is required
* Legacy applications require full OS environments
* Compliance requires VM-level separation

**Use Containers when:**

* Running microservices architectures
* Rapid deployment and scaling are priorities
* Resource efficiency matters
* Application portability across environments is needed
* Development and production environment consistency is important

**Use both together:**

* Run containers inside VMs for defense-in-depth security
* Use VMs for tenant isolation with containers for workload density
* Hybrid cloud deployments with different security requirements

---

## Root Privileges and Container Security

Understanding privilege levels is crucial for secure container operations.

### What are Root Privileges?

**Root privileges** are **administrative permissions** in Linux systems that allow a user to **perform any action** on the system.

Root access enables:

* **Installing software**: System-wide package installation
* **Modifying system files**: Edit critical configuration files
* **Managing users**: Create, modify, or delete user accounts
* **Controlling hardware**: Direct access to hardware resources
* **Bypassing permissions**: Override file and directory permissions
* **Full system control**: Complete access to all resources

### Containers and Root

Traditional container runtimes (like Docker) require root privileges to:

* Create namespaces and cgroups
* Mount filesystems
* Configure network interfaces
* Manage container processes

This creates security concerns:

* Container escapes could compromise the host
* Malicious images could damage the system
* Accidental misconfigurations pose risks

### Rootless Containers

Rootless container execution (supported by Podman and recent Docker versions) allows:

* Running containers without root privileges
* Enhanced security through privilege reduction
* Protection of the host system
* Safer multi-tenant environments

Rootless containers use user namespaces to map container root to unprivileged host users, significantly reducing security risks.

---

## Key Takeaways

* Container runtimes (runC, CRI-O, Docker) execute containers using kernel features
* Buildah builds images without requiring a daemon or root privileges
* Podman provides Docker-compatible container management with enhanced security
* Image registries store and distribute container images
* Containers are lighter and faster than VMs but VMs provide stronger isolation
* Rootless containers enhance security by eliminating the need for root privileges
* OCI compliance ensures container portability across different runtimes

---

**Next in this series**: Part 3 will introduce Kubernetes, exploring how it orchestrates containers at scale and provides automated management of containerized applications.
`,YS=`# Part 3: Introduction to Kubernetes

Kubernetes has become the de facto standard for container orchestration, transforming how organizations deploy and manage containerized applications at scale. This guide introduces Kubernetes fundamentals and explains why it has become essential for modern cloud-native infrastructure.

---

## What is Kubernetes?

**Kubernetes** (often abbreviated as **K8s**, where **"8" represents the eight letters between K and s**) is a **container orchestration platform** used to **deploy, manage, and scale containers automatically**.

Kubernetes automates the complex tasks involved in running containerized applications across multiple machines:

* **Automated deployment**: Deploy containers across a cluster of machines
* **Scaling**: Automatically increase or decrease the number of containers based on demand
* **Load balancing**: Distribute traffic evenly across container instances
* **Self-healing**: Automatically restart failed containers and replace unhealthy instances
* **Service discovery**: Automatically discover and connect services
* **Configuration management**: Manage application configuration and secrets
* **Storage orchestration**: Automatically mount storage systems

Kubernetes ensures containers run **reliably across multiple machines** by managing **resources and failures**, making it easier to run **large, distributed applications** efficiently.

---

## The Problem Kubernetes Solves

Before Kubernetes, running containerized applications at scale presented several challenges:

* **Manual container management**: Starting, stopping, and monitoring containers manually
* **Resource allocation**: Deciding which server should run which container
* **Failure handling**: Detecting and recovering from container or server failures
* **Networking complexity**: Connecting containers across different machines
* **Scaling challenges**: Manually adding or removing containers based on load
* **Configuration drift**: Keeping configuration consistent across environments
* **Update management**: Rolling out new versions without downtime

Kubernetes addresses these challenges through automation, providing a declarative approach where you specify the desired state and Kubernetes maintains it.

---

## Core Kubernetes Concepts

### Clusters: The Foundation

A **cluster** is a group of **multiple computers (nodes)** that work together as a **single system**.

Kubernetes clusters provide:

* **Unified resource pool**: All machines work as one logical system
* **High availability**: Applications continue running even if individual machines fail
* **Workload distribution**: Tasks are distributed across available machines
* **Scalability**: Add or remove machines as needed
* **Centralized management**: Control all machines through a single interface

In Kubernetes, a cluster manages **resources and containers** across all nodes efficiently, ensuring applications have the computing power they need.

### Nodes: The Workers

A **node** is an individual **machine** (physical or virtual) within a **cluster** that runs **applications or containers**.

Each node contains:

* **Container runtime**: Software to run containers (CRI-O, containerd, etc.)
* **Kubelet service**: Agent that communicates with the control plane
* **Kube-proxy**: Manages network rules for container communication
* **System resources**: CPU, memory, and storage available for workloads

Nodes execute workloads assigned by the **control plane**, which decides where containers should run based on resource availability and scheduling policies.

### The Kubelet Service

The **kubelet** is an **agent service** that runs on **each node** in a **Kubernetes cluster**.

The kubelet's responsibilities:

* **Communicates with the control plane**: Receives instructions about what to run
* **Ensures containers are running**: Starts containers based on Pod specifications
* **Monitors Pod health**: Continuously checks if containers are running correctly
* **Reports status**: Sends information about node and Pod status to the control plane
* **Manages resources**: Enforces resource limits and requests
* **Executes Pod lifecycle operations**: Starts, stops, and restarts containers as needed

The kubelet continuously **monitors, starts, and manages pods** on its node, ensuring the node's actual state matches the desired state defined by the control plane.

---

## Declarative Architecture: The Kubernetes Way

### What is Declarative Architecture?

A **declarative architecture** is an approach where you **define the desired end state** of a system, and the platform automatically figures out **how to achieve and maintain that state**.

In declarative systems:

* You describe **what you want**, not **how to do it**
* The system continuously **reconciles changes** to match your configuration
* The platform handles the implementation details
* You focus on outcomes rather than procedures

This contrasts with imperative approaches where you specify step-by-step instructions for every action.

### Declarative vs Imperative Architecture

**Declarative Architecture:**

\`\`\`yaml
# You define: "I want 3 replicas of my application"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  # Kubernetes figures out how to achieve this
\`\`\`

**Imperative Architecture:**

\`\`\`bash
# You specify each step:
1. Create container instance 1 on node A
2. Create container instance 2 on node B
3. Create container instance 3 on node C
4. Configure networking for each instance
5. Set up load balancing
# You manage all the details
\`\`\`

### Benefits of Declarative Architecture

Kubernetes' declarative approach provides:

* **Self-healing**: Automatically recovers from failures to maintain desired state
* **Consistency**: Configuration is version-controlled and auditable
* **Simplicity**: Focus on desired outcomes rather than implementation
* **Scalability**: Easy to modify desired state (e.g., change replicas from 3 to 10)
* **Automation**: Platform handles complex orchestration logic
* **Predictability**: Same configuration produces same results

The declarative model is fundamental to Kubernetes' power and ease of use at scale.

---

## Other Architectural Patterns

Understanding different architectural patterns helps contextualize Kubernetes' approach.

### Imperative Architecture

In **imperative architecture**, you explicitly specify **how to perform each step** of an operation.

Characteristics:

* Step-by-step instructions
* Direct control over execution
* Manual error handling
* Procedural approach
* Suitable for one-off tasks

Example: Bash scripts that manually deploy applications.

### Monolithic Architecture

**Monolithic architecture** builds applications as a **single, tightly coupled unit**.

Characteristics:

* All components in one codebase
* Shared resources and memory
* Single deployment unit
* Tight coupling between modules
* Simpler initial development

Challenges with scale:

* Difficult to scale individual components
* Changes require redeploying entire application
* Technology stack limitations
* Complex coordination for large teams

### Microservices Architecture

**Microservices architecture** splits applications into **independent, loosely coupled services**.

Characteristics:

* Each service has a specific business function
* Services communicate via APIs
* Independent deployment and scaling
* Technology diversity (different languages, databases)
* Distributed system patterns

Benefits for containerization:

* Each microservice runs in its own container
* Independent scaling of services
* Isolated failures don't affect entire system
* Easier updates and rollbacks
* Natural fit for Kubernetes orchestration

Kubernetes excels at managing microservices architectures, providing the orchestration needed for distributed systems.

---

## How Kubernetes Works: The Control Loop

Kubernetes operates through continuous control loops that maintain desired state:

1. **Observe**: Monitor the current state of the cluster
2. **Compare**: Compare current state with desired state (defined in manifests)
3. **Act**: Take actions to reconcile differences
4. **Repeat**: Continuously loop through this process

This control loop pattern enables:

* **Automatic recovery**: When a container crashes, Kubernetes restarts it
* **Scaling**: When load increases, Kubernetes adds more containers
* **Updates**: When deploying new versions, Kubernetes gradually replaces old containers
* **Self-optimization**: Kubernetes continuously optimizes resource allocation

---

## Kubernetes Components Overview

While detailed architecture will be covered later, understanding the basic components helps contextualize Kubernetes operation.

### Control Plane Components

The control plane manages the overall cluster:

* **API Server**: Entry point for all administrative tasks
* **Scheduler**: Decides which node should run each Pod
* **Controller Manager**: Runs controller processes that maintain desired state
* **etcd**: Distributed key-value store holding cluster state

### Node Components

Each node runs:

* **Kubelet**: Ensures containers are running as specified
* **Container Runtime**: Actually runs the containers (CRI-O, containerd)
* **Kube-proxy**: Manages networking and service connectivity

---

## Kubernetes Workload Types

Kubernetes supports different types of workloads through various resource types:

### Pods

The smallest deployable unit in Kubernetes (covered in detail in Part 6):

* One or more containers that share resources
* Co-located on the same node
* Share network namespace and storage

### Deployments

Manage stateless applications:

* Declare desired number of replicas
* Handle rolling updates
* Enable rollbacks
* Ensure high availability

### StatefulSets

Manage stateful applications:

* Stable network identities
* Persistent storage
* Ordered deployment and scaling
* Suitable for databases and similar services

### DaemonSets

Run a copy of a Pod on every node:

* Cluster-wide monitoring agents
* Log collectors
* Node-level services

### Jobs and CronJobs

Run tasks to completion:

* Batch processing
* Scheduled tasks
* One-time operations

---

## Kubernetes Networking Basics

Kubernetes provides a flat network model where:

* **Every Pod gets its own IP address**
* **Pods can communicate directly** without NAT
* **Services provide stable endpoints** for groups of Pods
* **DNS resolution** automatically discovers services

This networking model simplifies application communication and makes distributed systems easier to build.

---

## Configuration Management in Kubernetes

Kubernetes manages configuration through several mechanisms:

### ConfigMaps

Store non-sensitive configuration data:

* Application settings
* Configuration files
* Command-line arguments

### Secrets

Store sensitive information:

* Passwords
* API keys
* TLS certificates
* Database credentials

### Environment Variables

Pass configuration to containers:

* Simple key-value pairs
* Can reference ConfigMaps and Secrets
* Available to application code

---

## Why Kubernetes Matters

Kubernetes has become the standard for container orchestration because it:

* **Abstracts infrastructure**: Run on any cloud or on-premises
* **Provides portability**: Move workloads between environments
* **Enables automation**: Reduces manual operations
* **Improves reliability**: Self-healing and high availability
* **Facilitates scaling**: Automatically adapt to load
* **Accelerates development**: Faster deployment cycles
* **Supports modern patterns**: Native support for microservices and cloud-native applications

Organizations adopting Kubernetes gain operational efficiency, developer productivity, and infrastructure flexibility.

---

## Kubernetes Ecosystem

Kubernetes' success has created a rich ecosystem:

* **Cloud providers**: Managed Kubernetes services (EKS, AKS, GKE)
* **Distributions**: OpenShift, Rancher, Tanzu
* **Tools**: Helm (package manager), Kustomize (configuration management)
* **Monitoring**: Prometheus, Grafana
* **Service meshes**: Istio, Linkerd
* **CI/CD integration**: Jenkins, GitLab, ArgoCD

This ecosystem extends Kubernetes capabilities and provides solutions for common operational needs.

---

## Key Takeaways

* Kubernetes is a container orchestration platform that automates deployment, scaling, and management
* Clusters consist of multiple nodes working together as a unified system
* The kubelet service on each node ensures containers run according to specifications
* Declarative architecture allows you to specify desired state rather than step-by-step procedures
* Kubernetes continuously reconciles actual state with desired state through control loops
* The platform supports multiple workload types for different application patterns
* Kubernetes abstracts infrastructure, providing portability across environments
* A rich ecosystem extends Kubernetes with additional capabilities and tools

---

**Next in this series**: Part 4 will introduce OpenShift, Red Hat's enterprise Kubernetes platform, explaining how it extends Kubernetes with enterprise features, security enhancements, and developer tools.
`,JS=`# Part 4: Getting Started with OpenShift

OpenShift is Red Hat's enterprise Kubernetes platform that extends Kubernetes with additional features designed for production deployments. This guide introduces OpenShift, explains how it builds upon Kubernetes, and covers deployment options and cluster management.

---

## What is OpenShift?

**OpenShift** is Red Hat's **enterprise Kubernetes platform** that helps organizations build, deploy, and manage containerized applications with enhanced security, developer tools, and operational capabilities.

While Kubernetes provides the orchestration foundation, OpenShift adds:

* **Enhanced security**: Built-in security policies, image scanning, and compliance tools
* **Developer tools**: Integrated development workflows and CI/CD pipelines
* **Operational features**: Advanced monitoring, logging, and lifecycle management
* **Enterprise support**: Professional support and stability guarantees from Red Hat
* **User-friendly interfaces**: Both web console and CLI optimized for productivity
* **Multi-tenancy**: Strong isolation between projects and teams
* **Integrated ecosystem**: Pre-integrated tools for complete application lifecycle

OpenShift transforms Kubernetes from an orchestration platform into a complete application platform suitable for enterprise production environments.

---

## OpenShift vs Kubernetes

Understanding the relationship between OpenShift and Kubernetes helps clarify what OpenShift provides.

### Core Relationship

* **Foundation**: OpenShift is built on Kubernetes
* **Compatibility**: OpenShift runs standard Kubernetes workloads
* **Extensions**: OpenShift adds enterprise features on top
* **Certification**: OpenShift is a certified Kubernetes distribution

### Key Differences

**Security:**

* OpenShift enforces stricter security policies by default
* Includes Security Context Constraints (SCCs) for fine-grained security control
* Integrated image scanning and vulnerability management
* Enhanced network security and segmentation

**Developer Experience:**

* Source-to-Image (S2I) for building containers from source code
* Integrated CI/CD with OpenShift Pipelines (Tekton)
* Developer web console with topology view
* Templates and Helm charts for application deployment
* Integrated container registry

**Operations:**

* Automated cluster updates and lifecycle management
* Built-in monitoring with Prometheus and Grafana
* Centralized logging with Elasticsearch, Fluentd, and Kibana (EFK)
* Integrated metrics and alerting
* Node management through Machine API

**Enterprise Features:**

* Multi-tenancy with project isolation
* Integrated authentication and authorization (LDAP, OAuth, SAML)
* Quota management and chargeback capabilities
* Commercial support from Red Hat
* Compliance and audit features

---

## OpenShift Cluster Architecture

An **OpenShift cluster** is a group of machines called **nodes** that work together to run applications.

### Cluster Components

**Control Plane Nodes:**

* Manage the overall cluster state and orchestration
* Run core Kubernetes and OpenShift services
* Handle API requests and scheduling decisions
* Store cluster configuration in etcd database
* Typically run in high-availability configuration (3 or more nodes)

**Worker Nodes:**

* Execute application workloads in containers
* Run kubelet, container runtime, and kube-proxy
* Provide computing resources (CPU, memory, storage)
* Can be scaled horizontally to handle more workload

**Infrastructure Nodes** (optional):

* Run platform-level services separate from user workloads
* Host ingress routers for external traffic
* Run internal image registry
* Execute logging and monitoring components
* Isolate infrastructure workload from applications

### Cluster Networking

OpenShift clusters include:

* **Pod network**: Internal communication between containers
* **Service network**: Stable endpoints for service discovery
* **External routes**: Ingress for external traffic via routers
* **Network policies**: Control traffic flow between applications

### Cluster Storage

OpenShift integrates with various storage systems:

* **Persistent volumes**: Long-term storage for stateful applications
* **Storage classes**: Different tiers of storage (SSD, HDD, etc.)
* **Dynamic provisioning**: Automatic storage allocation
* **Container-native storage**: Solutions like OpenShift Data Foundation

---

## Types of OpenShift Clusters

OpenShift supports different cluster configurations for various use cases and environments.

### Single-Node OpenShift

**Single-node clusters** run all control plane and worker functions on one machine:

* **Use cases**: Development, testing, edge computing, resource-constrained environments
* **Benefits**: Minimal resource requirements, simple setup, full OpenShift features
* **Limitations**: No high availability, limited scaling, suitable only for non-production
* **Resource requirements**: Typically 8 CPU cores, 32GB RAM minimum

### Multi-Node Clusters

**Multi-node clusters** separate control plane from worker nodes:

* **Use cases**: Production environments, high-availability applications, scalable workloads
* **Configuration**:
  * Minimum: 3 control plane nodes + 2 worker nodes
  * Recommended: 3 control plane + 3+ worker nodes
* **Benefits**: High availability, horizontal scaling, better resource utilization
* **Characteristics**: Production-ready, fault-tolerant, scalable

### Managed Clusters

**Managed OpenShift** services are provided by cloud providers with Red Hat:

**ROSA (Red Hat OpenShift Service on AWS):**

* Fully managed OpenShift on Amazon Web Services
* Red Hat and AWS jointly manage infrastructure
* Integrated with AWS services
* Pay-as-you-go pricing

**OpenShift Dedicated:**

* Fully managed OpenShift on major cloud providers (AWS, Google Cloud, Azure)
* Dedicated clusters for single customers
* Red Hat manages platform operations
* Customizable configurations

**Azure Red Hat OpenShift (ARO):**

* Jointly managed by Microsoft and Red Hat
* Native Azure integration
* Seamless access to Azure services
* Enterprise support from both companies

**Benefits of managed clusters:**

* Reduced operational overhead
* Automatic updates and patching
* Expert management from Red Hat
* Focus on applications rather than infrastructure
* SLA-backed availability guarantees

---

## Deploying OpenShift Clusters

OpenShift provides multiple deployment methods suited to different environments and requirements.

### OpenShift Installer (IPI - Installer Provisioned Infrastructure)

The **OpenShift Installer** is the primary tool for automated cluster deployment:

**Capabilities:**

* Automatically provisions infrastructure (VMs, networking, storage)
* Configures cluster components
* Sets up control plane and worker nodes
* Establishes networking and security
* Supports multiple cloud providers and virtualization platforms

**Deployment process:**

1. Prepare installation configuration file (install-config.yaml)
2. Run openshift-install command
3. Installer provisions infrastructure
4. Installer deploys OpenShift components
5. Cluster becomes available

**Supported platforms:**

* AWS, Azure, Google Cloud
* VMware vSphere
* OpenStack
* Bare metal (with some manual prerequisites)

### Assisted Installer

The **Assisted Installer** provides a user-friendly web interface for cluster deployment:

**Features:**

* Web-based workflow with guided steps
* Automatic hardware discovery
* Pre-flight validation checks
* Visual progress tracking
* Suitable for bare-metal and virtual environments

**Deployment process:**

1. Access Red Hat Hybrid Cloud Console
2. Create cluster definition
3. Generate and download Discovery ISO
4. Boot target machines with Discovery ISO
5. Machines register with Assisted Installer
6. Configure cluster settings through web UI
7. Assisted Installer deploys cluster

### Discovery ISO

A **Discovery ISO** is a bootable image used in assisted installations:

**Purpose:**

* Discover bare-metal or virtual machine hardware
* Register hosts with the Assisted Installer
* Collect hardware information (CPU, memory, storage, network)
* Enable hosts to join the cluster during installation

**Usage:**

1. Generate ISO from Assisted Installer web console
2. Download ISO image
3. Boot target machines from the ISO
4. Machines automatically connect to Assisted Installer
5. Hardware information appears in web console
6. Proceed with cluster installation

---

## Infrastructure Requirements

### Data Center Considerations

A **data center** is a physical location that contains servers, storage, networking equipment, and power systems.

OpenShift can be deployed:

* **On-premises data centers**: Organization's own facilities
* **Colocation facilities**: Shared data center space
* **Public cloud**: AWS, Azure, Google Cloud data centers
* **Hybrid environments**: Mix of on-premises and cloud

**Data center requirements:**

* Adequate power and cooling
* Network connectivity with sufficient bandwidth
* Physical security
* Redundant infrastructure for high availability

### Deployment Platforms

**OpenShift can be deployed on:**

**Bare Metal:**

* Physical servers without virtualization layer
* Maximum performance and resource efficiency
* Direct hardware access
* Requires more manual infrastructure management

**Virtual Machines:**

* Deployed on hypervisors (VMware, KVM, Hyper-V)
* Easier infrastructure management
* Resource flexibility
* Suitable for most deployments

**Public Cloud:**

* AWS, Azure, Google Cloud, IBM Cloud
* Elastic infrastructure
* Integrated cloud services
* Pay-as-you-go pricing

**Fully Managed Services:**

* ROSA, OpenShift Dedicated, ARO
* Minimal operational overhead
* Professional management included
* Fastest time to value

---

## Authentication and Access Control

### Pull Secrets

A **pull secret** is a credential file used by OpenShift to authenticate with container registries.

**Purpose:**

* Authenticate with Red Hat registries
* Pull container images during installation
* Access additional images during runtime
* Verify subscription entitlement

**Obtaining pull secrets:**

1. Create Red Hat account
2. Access Red Hat Hybrid Cloud Console
3. Navigate to OpenShift cluster creation
4. Download pull secret JSON file
5. Use during cluster installation

**Contents:**

* Registry authentication credentials
* Multiple registry endpoints
* Encoded authentication tokens
* Subscription verification data

---

## OpenShift Nodes Deep Dive

### What is an OpenShift Node?

An **OpenShift node** is a **machine** (physical or virtual) that is part of a cluster and runs OpenShift components and containerized workloads.

Each node includes:

* **Operating system**: Red Hat CoreOS (RHCOS)
* **Container runtime**: CRI-O for running containers
* **Kubelet**: Agent managing pods on the node
* **Kube-proxy**: Network proxy for service connectivity
* **Node components**: Monitoring, logging agents

### Running OpenShift on Virtual Machines

OpenShift can run on **virtual machines** by installing it on hypervisors:

**Supported hypervisors:**

* **VMware vSphere**: Enterprise virtualization platform
* **KVM**: Linux kernel-based virtualization
* **VirtualBox**: Desktop virtualization (development only)
* **Hyper-V**: Microsoft virtualization platform

**Each node runs as a separate VM with:**

* Dedicated CPU cores
* Allocated memory
* Virtual disks
* Virtual network interfaces

**Benefits:**

* Easier resource management
* Snapshot and backup capabilities
* Hardware abstraction
* Resource isolation

---

## OpenShift Local (Formerly CodeReady Containers)

**OpenShift Local** is a lightweight, single-node OpenShift cluster designed for local development and testing on a developer's machine.

### Features

* **Full OpenShift experience**: Includes core OpenShift features
* **Single-node deployment**: Runs on laptop or workstation
* **Quick setup**: Minutes to get running
* **Development tools**: Integrated developer tools and CLI
* **Resource efficient**: Optimized for local development

### Use Cases

* Learning OpenShift without cloud resources
* Local application development
* Testing OpenShift features
* Developing operators and extensions
* CI/CD pipeline development

### Requirements

* **CPU**: 4 cores minimum (recommended 6+)
* **Memory**: 9GB minimum (recommended 16GB+)
* **Storage**: 35GB available disk space
* **Hypervisor**: Native hypervisor support (Hyper-V, HyperKit, KVM)

### Limitations

* Not suitable for production
* Limited to single node (no HA)
* Reduced performance compared to full clusters
* Cannot test multi-node scenarios

---

## Initial Cluster Configuration

### What a Cluster Includes When Created

When an OpenShift cluster is created, it automatically includes:

**Core Components:**

* Kubernetes control plane services
* OpenShift-specific operators and controllers
* Authentication and authorization systems
* Default networking configuration

**Infrastructure Services:**

* Internal image registry
* Ingress routers for external access
* Monitoring stack (Prometheus, Alertmanager, Grafana)
* Logging infrastructure

**Storage Integration:**

* Storage class definitions
* Persistent volume provisioning
* Container storage interface (CSI) drivers

**Security Configurations:**

* Default security policies and SCCs
* Network policies
* Certificate management
* Secret encryption

**Networking:**

* Pod network (CNI plugin)
* Service network
* DNS services
* Network policies

**User Projects:**

* Default projects for system services
* Namespace isolation
* Resource quotas

---

## Key Takeaways

* OpenShift is an enterprise Kubernetes platform with enhanced security, developer tools, and operational features
* Clusters consist of control plane nodes (management) and worker nodes (workloads)
* Single-node clusters serve development needs while multi-node clusters provide production capabilities
* Managed OpenShift services (ROSA, OpenShift Dedicated, ARO) reduce operational overhead
* Deployment options include OpenShift Installer (IPI) and Assisted Installer for different environments
* OpenShift can run on bare metal, virtual machines, or public clouds
* Pull secrets authenticate cluster access to Red Hat registries
* OpenShift Local provides full OpenShift experience for local development
* Newly created clusters include core services, monitoring, logging, and networking pre-configured

---

**Next in this series**: Part 5 will explore OpenShift operators, explaining how they automate platform management through machine management, node configuration, and cluster state reconciliation.
`,QS=`# Part 5: Managing Machines and Nodes with Operators

OpenShift uses operators extensively to automate platform management. This guide explores how operators work, how they manage cluster infrastructure, and how machine management automates node lifecycle operations.

---

## Understanding Operators

### What are Operators in OpenShift?

**Operators** in OpenShift are **Kubernetes-native controllers** that automate the full lifecycle management of applications and platform components by encoding operational knowledge into software.

Operators represent a fundamental shift in how complex systems are managed:

* **Operational knowledge as code**: Expert knowledge encoded in software
* **Continuous reconciliation**: Automatically maintain desired state
* **Lifecycle automation**: Handle installation, upgrades, scaling, and recovery
* **Self-healing**: Detect and correct issues automatically
* **Declarative management**: Define desired state; operator handles implementation

### How Operators Work

Operators follow a continuous control loop pattern:

1. **Observe**: Monitor the current state of managed resources
2. **Analyze**: Compare current state with desired state (defined in custom resources)
3. **Act**: Take actions to reconcile differences
4. **Repeat**: Continuously loop through this process

This pattern enables operators to:

* Automatically recover from failures
* Maintain consistency across the cluster
* Respond to changes without manual intervention
* Scale services based on demand
* Perform complex operational tasks safely

### Tasks Automated by Operators

Operators handle complex operational procedures:

* **Installation**: Deploy applications with proper configuration
* **Configuration**: Apply and update settings automatically
* **Upgrades**: Safely upgrade applications and components
* **Scaling**: Adjust capacity based on requirements
* **Healing**: Detect and recover from failures
* **Backup and restore**: Automate data protection
* **Monitoring**: Collect metrics and generate alerts

These capabilities make complex systems easier and safer to operate at scale.

---

## Types of Operators in OpenShift

OpenShift uses two main categories of operators with distinct purposes.

### Cluster Operators

**Cluster Operators** are core, built-in operators provided and managed by Red Hat that are essential for the functioning of the OpenShift platform.

**Key characteristics:**

* **Pre-installed**: Included with every OpenShift cluster
* **Platform-critical**: Required for cluster operation
* **Red Hat managed**: Maintained by Red Hat engineering
* **Automatic updates**: Updated with cluster upgrades
* **Health monitoring**: Cluster health depends on their status

**Essential Cluster Operators:**

* **Authentication Operator**: Manages cluster authentication mechanisms
* **API Server Operator**: Maintains Kubernetes API server
* **Cluster Network Operator**: Manages pod networking (CNI plugin)
* **Ingress Operator**: Manages ingress controllers and routers
* **Monitoring Operator**: Maintains monitoring stack (Prometheus, Grafana)
* **Etcd Operator**: Manages etcd cluster state database
* **Machine API Operator**: Handles node lifecycle management
* **Image Registry Operator**: Manages internal container registry
* **DNS Operator**: Maintains cluster DNS services
* **Storage Operator**: Manages storage provisioning

**Health requirements:**

* All cluster operators must be healthy for proper cluster function
* Degraded operators indicate platform issues
* Cluster upgrades cannot proceed with unhealthy operators
* Monitoring operator status is crucial for cluster administration

### OpenShift Marketplace Operators

**OpenShift Marketplace Operators** are optional, user-installed operators sourced from OperatorHub that manage applications or additional services.

**Key characteristics:**

* **User-selected**: Installed on-demand from OperatorHub
* **Application-focused**: Manage specific applications or services
* **Third-party or community**: May come from Red Hat, partners, or community
* **Not platform-critical**: Cluster operates without them
* **Lifecycle controlled by users**: Users install, upgrade, and remove them

**Common Marketplace Operators:**

* **Database operators**: PostgreSQL, MongoDB, MySQL, Redis
* **Messaging operators**: Apache Kafka, RabbitMQ, AMQ
* **CI/CD operators**: Jenkins, ArgoCD, Tekton
* **Middleware operators**: JBoss EAP, Camel-K, AMQ Streams
* **Monitoring operators**: Splunk, Datadog, New Relic integrations
* **Service mesh operators**: Istio, Kiali, Jaeger

**OperatorHub:**

* Centralized catalog of available operators
* Browse and install from web console
* Categories: Databases, Monitoring, Security, Networking, Storage
* Multiple channels for version selection
* Automatic update management

---

## Custom Resource Definitions (CRDs)

### What is a CRD?

A **Custom Resource Definition (CRD)** extends the Kubernetes API by allowing users and operators to define new resource types beyond the default ones like Pods or Services.

**CRDs enable:**

* **API extensibility**: Add new resource types to Kubernetes
* **Domain-specific resources**: Represent concepts relevant to specific applications
* **Declarative management**: Use kubectl/oc commands with custom resources
* **Operator integration**: Operators watch and act on custom resources
* **Schema validation**: Define structure and validation rules for custom resources

### How Operators Use CRDs

Operators leverage CRDs to manage complex applications:

1. **Define custom objects**: CRDs define new resource types (e.g., PostgresCluster, KafkaTopics)
2. **User declares intent**: Users create custom resources with desired configuration
3. **Operator observes**: Operator watches for changes to custom resources
4. **Operator reconciles**: Operator creates and manages underlying Kubernetes resources
5. **Maintain state**: Operator continuously ensures actual state matches desired state

### Example: Database Operator

A PostgreSQL operator might define a CRD like:

\`\`\`yaml
apiVersion: postgres.example.com/v1
kind: PostgresCluster
metadata:
  name: my-database
spec:
  version: "13"
  replicas: 3
  storage: 100Gi
  backup:
    enabled: true
    schedule: "0 2 * * *"
\`\`\`

The operator then:

* Creates StatefulSet for database pods
* Configures replication between instances
* Sets up persistent volumes
* Schedules automated backups
* Monitors health and performance
* Handles upgrades and scaling

This abstraction simplifies database management without users needing to manage individual Kubernetes resources.

---

## Node Types in OpenShift

OpenShift clusters contain different node types optimized for specific purposes.

### Control Plane Nodes

**Control Plane Nodes** manage the overall cluster state and orchestration by running core services.

**Responsibilities:**

* **API Server**: Entry point for all cluster operations
* **Scheduler**: Decides which node runs each pod
* **Controller Manager**: Runs core controllers maintaining desired state
* **etcd**: Distributed database storing cluster state

**Characteristics:**

* Typically run in high-availability configuration (3 nodes minimum)
* Do not run user workloads
* Require reliable, low-latency connectivity
* Critical for cluster operation

**Resource requirements:**

* Higher CPU and memory than worker nodes
* Fast storage for etcd
* Network bandwidth for API traffic

### Infrastructure Nodes

**Infrastructure Nodes** host platform-level workloads like ingress routers, internal registries, logging, and monitoring to isolate them from application workloads.

**Hosted services:**

* **Ingress routers**: Handle external traffic routing
* **Internal registry**: Store container images
* **Monitoring stack**: Prometheus, Grafana, Alertmanager
* **Logging stack**: Elasticsearch, Fluentd, Kibana
* **Cluster metrics**: Metrics collection and aggregation

**Benefits:**

* **Workload isolation**: Separate platform services from applications
* **Resource management**: Dedicate resources to infrastructure
* **Billing separation**: Distinguish infrastructure from application costs
* **Performance**: Ensure platform services have adequate resources

**Configuration:**

* Typically 2-3 nodes for high availability
* Labeled with specific node selectors
* Configured with taints to prevent application scheduling
* Sized based on cluster scale and monitoring requirements

### Worker Nodes

**Worker Nodes** run user application workloads in the form of pods and containers and handle actual business logic execution.

**Characteristics:**

* Execute application containers
* Scalable horizontally based on demand
* Provide compute, memory, and storage for workloads
* Can be specialized for specific workload types

**Workload types:**

* Web applications and APIs
* Microservices
* Batch processing jobs
* Stateful applications with persistent storage
* Machine learning workloads

**Scaling:**

* Add nodes to increase capacity
* Remove nodes during low demand
* Automatic scaling via Machine Autoscaler
* Different instance types for different workloads

---

## Red Hat CoreOS (RHCOS)

### What is Red Hat CoreOS?

**Red Hat CoreOS (RHCOS)** is a lightweight, immutable, container-optimized operating system designed specifically for OpenShift.

**Design principles:**

* **Immutable infrastructure**: OS is not modified after deployment
* **Container-optimized**: Minimal footprint optimized for running containers
* **Atomic updates**: OS updates applied as complete units
* **Automated management**: Cluster manages OS configuration

**Lineage:**

RHCOS combines features from:

* **Red Hat Enterprise Linux (RHEL)**: Enterprise stability and security
* **Fedora CoreOS**: Modern container technologies and automation
* **OpenShift requirements**: Specific optimizations for OpenShift

### Key Features

**Immutability:**

* No manual OS-level changes allowed
* Configuration applied via Machine Configs
* Consistent state across all nodes
* Reduced configuration drift

**Automatic updates:**

* OS updates delivered with OpenShift upgrades
* Coordinated updates across cluster
* Rolling updates with validation
* Automatic rollback on failures

**Minimal attack surface:**

* Only essential packages included
* Reduced potential vulnerabilities
* Smaller OS footprint
* Faster security patching

**Container integration:**

* Optimized for CRI-O container runtime
* Built-in container networking
* Efficient storage drivers
* Performance-tuned kernel

**Consistency:**

* All nodes run identical OS configuration
* Predictable behavior
* Simplified troubleshooting
* Easier compliance and auditing

---

## Machine Configuration Management

### Machine Configs

A **Machine Config** defines low-level node configurations such as kernel parameters, systemd services, SSH keys, and file changes.

**Machine Configs can specify:**

* **Kernel parameters**: sysctl settings, kernel modules
* **Systemd units**: Services, timers, paths
* **File creation**: Configuration files, scripts
* **SSH keys**: Authorized keys for node access
* **Ignition configuration**: First-boot configuration
* **Storage configuration**: Disk partitioning, filesystem setup

**Example configurations:**

* Tuning kernel parameters for performance
* Installing custom systemd services
* Configuring network settings
* Adding monitoring agents
* Security hardening settings

### Machine Config Pools (MCPs)

A **Machine Config Pool** groups nodes with identical configurations and applies those Machine Configs consistently.

**MCP responsibilities:**

* **Group nodes**: Nodes with same configuration requirements
* **Apply configs**: Distribute Machine Configs to member nodes
* **Coordinate updates**: Control update rollout
* **Track status**: Monitor configuration application
* **Ensure consistency**: Verify all nodes match target configuration

**Update process:**

1. New Machine Config created or updated
2. MCP validates configuration
3. MCP begins rolling update of member nodes
4. Nodes updated one at a time (or in batches)
5. Each node reboots to apply changes
6. MCP waits for node health before continuing
7. Process repeats until all nodes updated

**Safety mechanisms:**

* Automatic validation before applying
* Rolling updates prevent total cluster disruption
* Pause periods between node updates
* Automatic rollback on persistent failures
* Health checks before proceeding to next node

### Types of Machine Config Pools

OpenShift includes default MCPs and supports custom pools for specialized needs.

**Default Machine Config Pools:**

* **Master MCP**: Controls plane nodes configuration
  * Updates control plane nodes
  * Ensures consistent control plane configuration
  * Typically smaller pool size

* **Worker MCP**: Application worker nodes configuration
  * Updates worker nodes running applications
  * Usually the largest pool
  * Can be subdivided into custom pools

**Custom Machine Config Pools:**

Organizations can create custom MCPs for:

* **Infrastructure nodes**: Separate configuration for infrastructure services
* **GPU nodes**: Special drivers and configurations for GPU workloads
* **High-memory nodes**: Tuned for memory-intensive applications
* **Specialized workloads**: Custom kernel parameters or services

**Benefits of custom MCPs:**

* Granular configuration control
* Different update schedules
* Workload-specific optimizations
* Reduced blast radius of changes

---

## Machine API and Node Lifecycle

### Machine API Operator

**Machines and MachineSets** in OpenShift are managed by the **Machine API Operator**, which interacts with underlying cloud or virtualization providers.

**Machine API Operator responsibilities:**

* **Create machines**: Provision new nodes via cloud/infrastructure APIs
* **Update machines**: Modify machine specifications
* **Delete machines**: Decommission nodes
* **Heal machines**: Replace unhealthy nodes automatically
* **Monitor status**: Track machine health and readiness

**Provider integration:**

The operator interfaces with:

* **Cloud providers**: AWS, Azure, Google Cloud
* **Virtualization platforms**: VMware vSphere, OpenStack
* **Bare metal**: Through bare-metal operator
* **Custom providers**: Extensible architecture

### MachineSets

**MachineSets** act like Kubernetes ReplicaSets but for nodes instead of pods.

**MachineSet characteristics:**

* **Desired replica count**: Specify number of machines to maintain
* **Machine template**: Define machine specifications (instance type, disk size, etc.)
* **Automatic replacement**: Replace failed machines automatically
* **Scaling**: Adjust replica count to add or remove nodes

**Example MachineSet operations:**

* Set replicas to 5: MachineSet ensures 5 nodes exist
* Node fails: MachineSet creates replacement node
* Scale to 10: MachineSet provisions 5 additional nodes
* Scale to 3: MachineSet terminates 2 excess nodes

### Machine Autoscaler

A **Machine Autoscaler** automatically adjusts the number of machines in a MachineSet based on workload demand.

**How it works:**

1. **Monitor pod scheduling**: Detect pods that cannot be scheduled (insufficient resources)
2. **Trigger scale-up**: When pods are pending due to resource constraints
3. **Add machines**: Create additional nodes within configured limits
4. **Trigger scale-down**: When nodes are underutilized for extended periods
5. **Remove machines**: Terminate excess nodes while respecting minimum limits

**Configuration:**

* **Minimum replicas**: Smallest allowed cluster size
* **Maximum replicas**: Largest allowed cluster size
* **Target MachineSet**: Which MachineSet to scale
* **Resource thresholds**: When to trigger scaling

**Integration with Cluster Autoscaler:**

* Works alongside Cluster Autoscaler
* Cluster Autoscaler determines scaling need
* Machine Autoscaler executes the scaling
* Together ensure sufficient capacity while optimizing cost

**Benefits:**

* **Cost optimization**: Scale down during low demand
* **Performance**: Scale up when needed
* **Automation**: No manual intervention required
* **Resource efficiency**: Right-size infrastructure dynamically

---

## Cluster States and Health

### What Types of States Does a Cluster Go Through?

An OpenShift cluster transitions through various states that reflect its health and operational status.

**Common cluster states:**

* **Installing**: Initial cluster deployment in progress
  * Provisioning infrastructure
  * Installing components
  * Configuring services

* **Available**: Cluster is healthy and fully operational
  * All operators running correctly
  * API server responsive
  * Workloads can be deployed

* **Updating**: Cluster upgrade in progress
  * Control plane updating
  * Nodes updating in rolling fashion
  * New version being deployed

* **Degraded**: Cluster operating but with issues
  * Some operators reporting problems
  * Reduced functionality
  * Requires administrator attention

* **Unavailable**: Cluster not functioning correctly
  * Critical operators failing
  * API server unreachable
  * Immediate intervention required

**Monitoring cluster state:**

* View operator status via console or CLI
* Check individual operator conditions
* Review error messages and logs
* Track upgrade progress
* Monitor component health

**Responding to states:**

* **Degraded**: Investigate operator issues, check logs, resolve problems
* **Updating**: Monitor progress, avoid changes during updates
* **Unavailable**: Emergency response, check control plane, restore backups if needed

---

## OpenShift Architecture Overview

### Complete Architecture

OpenShift architecture is built on Kubernetes with additional layers for enterprise capabilities.

**Foundation:**

* **Kubernetes core**: Container orchestration engine
* **RHCOS**: Immutable operating system
* **CRI-O**: Container runtime

**Control plane:**

* Manage orchestration and cluster state
* Run API server, scheduler, controllers
* Store cluster state in etcd
* Provide cluster-wide services

**Worker nodes:**

* Execute application workloads
* Provide compute, memory, storage
* Run user containers and pods
* Scale based on demand

**Infrastructure services:**

* **Networking**: Pod network, service network, ingress
* **Storage**: Persistent volumes, dynamic provisioning
* **Monitoring**: Metrics, logging, alerting
* **Registry**: Internal image storage

**Automation layer:**

* **Operators**: Automate platform management
* **Machine API**: Manage node lifecycle
* **Configuration management**: Machine Configs and MCPs

**Enterprise features:**

* Security policies and SCCs
* Multi-tenancy and project isolation
* Integrated authentication
* Advanced networking capabilities
* Lifecycle management

This layered architecture provides a highly automated, scalable, and enterprise-ready container platform.

---

## Key Takeaways

* Operators encode operational knowledge as software, automating complex lifecycle management
* Cluster Operators are platform-critical; Marketplace Operators extend functionality
* Custom Resource Definitions (CRDs) extend the Kubernetes API with new resource types
* Control plane nodes manage orchestration; infrastructure nodes run platform services; worker nodes execute applications
* Red Hat CoreOS is an immutable, container-optimized OS managed entirely by the cluster
* Machine Configs define low-level node configuration; Machine Config Pools group nodes and manage updates
* Machine API Operator automates node lifecycle through cloud/infrastructure provider integration
* MachineSets maintain desired node counts; Machine Autoscaler dynamically adjusts capacity
* Clusters transition through states (installing, available, updating, degraded, unavailable)
* OpenShift architecture layers enterprise capabilities on Kubernetes foundation

---

**Next in this series**: Part 6 will explore interfacing with OpenShift using command-line tools, covering kubectl, oc (OpenShift CLI), and how to effectively manage clusters from the terminal.
`,XS=`# Part 6: Command Line Tools for OpenShift

Command-line interfaces provide powerful, scriptable access to OpenShift and Kubernetes clusters. This guide explores kubectl and oc, explaining their relationship and demonstrating how to effectively manage clusters from the terminal.

---

## Introduction to Command Line Management

While web consoles provide user-friendly interfaces, command-line tools offer advantages for cluster management:

* **Automation**: Script repetitive tasks and integrate with CI/CD pipelines
* **Precision**: Exact control over resources and configurations
* **Speed**: Faster for experienced users than clicking through interfaces
* **Remote access**: Manage clusters from any terminal
* **Portability**: Scripts work across different environments
* **Version control**: Store commands and configurations in git repositories
* **Troubleshooting**: Direct access to logs, events, and resource details

Professional Kubernetes and OpenShift administrators rely heavily on CLI tools for day-to-day operations.

---

## kubectl: The Kubernetes CLI

### What is kubectl?

**kubectl** is the command-line tool used to interact with Kubernetes clusters, allowing users and administrators to deploy applications, inspect and manage cluster resources, view logs, execute commands inside pods, and control cluster behavior.

kubectl communicates directly with the Kubernetes API server using declarative or imperative commands, providing complete control over cluster resources.

### Core kubectl Capabilities

**Resource management:**

* Create, read, update, and delete Kubernetes resources
* Apply configuration files (YAML/JSON)
* Scale deployments and statefulsets
* Rollout and rollback application versions
* Patch resources with specific changes

**Cluster inspection:**

* List resources across namespaces
* Describe resources in detail
* View resource status and conditions
* Get resource specifications
* Monitor resource events

**Application debugging:**

* View container logs
* Execute commands inside running containers
* Port-forward to access services locally
* Copy files to/from containers
* Attach to running containers

**Configuration management:**

* Manage kubeconfig contexts
* Switch between clusters
* Set default namespaces
* Configure authentication

### kubectl Command Structure

kubectl follows a consistent command structure:

\`\`\`bash
kubectl [command] [resource_type] [resource_name] [flags]
\`\`\`

**Common commands:**

* \`get\`: List resources
* \`describe\`: Show detailed resource information
* \`create\`: Create resources from files or arguments
* \`apply\`: Apply configurations from files
* \`delete\`: Remove resources
* \`edit\`: Edit resources in default editor
* \`logs\`: View container logs
* \`exec\`: Execute commands in containers
* \`scale\`: Change replica counts
* \`rollout\`: Manage rollouts and rollbacks

**Common resource types:**

* \`pods\`, \`pod\`, \`po\`: Pods
* \`deployments\`, \`deployment\`, \`deploy\`: Deployments
* \`services\`, \`service\`, \`svc\`: Services
* \`configmaps\`, \`configmap\`, \`cm\`: ConfigMaps
* \`secrets\`, \`secret\`: Secrets
* \`nodes\`, \`node\`, \`no\`: Nodes
* \`namespaces\`, \`namespace\`, \`ns\`: Namespaces

**Common flags:**

* \`-n, --namespace\`: Specify namespace
* \`-o, --output\`: Output format (json, yaml, wide, etc.)
* \`--all-namespaces\`: Operate across all namespaces
* \`-l, --selector\`: Filter by labels
* \`-w, --watch\`: Watch for changes
* \`--dry-run\`: Simulate command without making changes

### kubectl Examples

**Viewing resources:**

\`\`\`bash
# List all pods in current namespace
kubectl get pods

# List pods across all namespaces
kubectl get pods --all-namespaces

# Get detailed information about a pod
kubectl describe pod my-pod

# View pod logs
kubectl logs my-pod

# Follow log output
kubectl logs -f my-pod

# View logs from specific container in multi-container pod
kubectl logs my-pod -c container-name
\`\`\`

**Creating and managing resources:**

\`\`\`bash
# Create resources from a file
kubectl create -f deployment.yaml

# Apply configuration (create or update)
kubectl apply -f deployment.yaml

# Delete resources
kubectl delete -f deployment.yaml
kubectl delete pod my-pod
kubectl delete deployment my-deployment

# Scale a deployment
kubectl scale deployment my-deployment --replicas=5
\`\`\`

**Interacting with containers:**

\`\`\`bash
# Execute command in container
kubectl exec my-pod -- ls /app

# Open interactive shell
kubectl exec -it my-pod -- /bin/bash

# Copy files to container
kubectl cp local-file.txt my-pod:/app/file.txt

# Copy files from container
kubectl cp my-pod:/app/log.txt local-log.txt
\`\`\`

**Working with namespaces:**

\`\`\`bash
# List namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace my-namespace

# Set default namespace for context
kubectl config set-context --current --namespace=my-namespace

# Delete namespace
kubectl delete namespace my-namespace
\`\`\`

---

## oc: The OpenShift CLI

### What is oc?

The **OpenShift command-line tool (oc)** is a superset of kubectl that includes all standard Kubernetes functionality while adding OpenShift-specific features.

**oc is a superset of kubectl because it includes:**

* All kubectl commands and functionality
* OpenShift-specific resources and operations
* Additional convenience commands
* Enhanced user experience features
* Integrated authentication mechanisms

This means any kubectl command works with oc, but oc provides additional capabilities specifically designed for OpenShift.

### OpenShift-Specific Features in oc

**Project management:**

OpenShift uses "projects" as an extension of Kubernetes namespaces with additional features:

\`\`\`bash
# Create a new project
oc new-project my-project

# Switch to a project
oc project my-project

# List all projects
oc projects

# Delete a project
oc delete project my-project
\`\`\`

Projects provide enhanced multi-tenancy with built-in RBAC and resource quotas.

**Build and deployment commands:**

\`\`\`bash
# Create a new application from source code
oc new-app https://github.com/user/repo.git

# Create application from Docker image
oc new-app nginx:latest

# Start a build
oc start-build my-app

# View build logs
oc logs -f bc/my-app

# Get build status
oc get builds

# Cancel a build
oc cancel-build my-app-1
\`\`\`

**Image streams:**

Image streams are OpenShift-specific resources for managing container images:

\`\`\`bash
# List image streams
oc get imagestreams

# Import external image
oc import-image my-image --from=docker.io/library/nginx:latest --confirm

# Tag image
oc tag source-image:latest destination-image:v1.0

# Get image stream details
oc describe imagestream my-image
\`\`\`

**Routes (external access):**

Routes provide external access to services (covered in detail in Part 7):

\`\`\`bash
# Expose service via route
oc expose service my-service

# Create route with custom hostname
oc create route edge my-route --service=my-service --hostname=app.example.com

# List routes
oc get routes

# Get route URL
oc get route my-route -o jsonpath='{.spec.host}'
\`\`\`

**Security context constraints:**

\`\`\`bash
# List SCCs
oc get scc

# Add SCC to service account
oc adm policy add-scc-to-user anyuid -z my-serviceaccount

# View SCC details
oc describe scc restricted
\`\`\`

**User and permission management:**

\`\`\`bash
# Get current user
oc whoami

# Get current user token
oc whoami -t

# Add role to user
oc adm policy add-role-to-user edit user1 -n my-project

# Add cluster role to user
oc adm policy add-cluster-role-to-user cluster-admin user1

# View role bindings
oc get rolebindings
\`\`\`

**Cluster administration:**

\`\`\`bash
# View cluster operators
oc get clusteroperators

# View cluster version
oc get clusterversion

# View nodes
oc get nodes

# View node details
oc describe node worker-0

# Drain node for maintenance
oc adm drain worker-0 --ignore-daemonsets

# Make node schedulable again
oc adm uncordon worker-0
\`\`\`

### Enhanced User Experience Features

**Login and authentication:**

\`\`\`bash
# Login to OpenShift cluster
oc login https://api.cluster.example.com:6443

# Login with token
oc login --token=my-token --server=https://api.cluster.example.com:6443

# Logout
oc logout

# Get login token
oc whoami -t
\`\`\`

**Integrated help:**

\`\`\`bash
# Get help for any command
oc help
oc new-app --help

# Explain resource types
oc explain pod
oc explain pod.spec.containers
\`\`\`

**Status and overview:**

\`\`\`bash
# Get project status
oc status

# View resource quotas and limits
oc describe quota

# View resource usage
oc adm top nodes
oc adm top pods
\`\`\`

---

## Working with Configuration Files

Both kubectl and oc work with YAML or JSON configuration files that define resource specifications.

### Applying Configurations

**Create or update resources from files:**

\`\`\`bash
# Apply single file
oc apply -f deployment.yaml

# Apply multiple files
oc apply -f deployment.yaml -f service.yaml

# Apply all files in directory
oc apply -f ./manifests/

# Apply with recursive directory search
oc apply -R -f ./manifests/
\`\`\`

**Differences between create and apply:**

* \`create\`: Creates new resources, fails if they already exist
* \`apply\`: Creates new resources or updates existing ones (declarative management)

**Best practice:** Use \`apply\` for declarative management, where configuration files are the source of truth.

### Generating Configuration Files

**Generate YAML without creating resources:**

\`\`\`bash
# Generate deployment YAML
oc create deployment my-app --image=nginx:latest --dry-run=client -o yaml

# Generate service YAML
oc create service clusterip my-service --tcp=80:8080 --dry-run=client -o yaml

# Save to file
oc create deployment my-app --image=nginx:latest --dry-run=client -o yaml > deployment.yaml
\`\`\`

**Export existing resources:**

\`\`\`bash
# Export deployment as YAML
oc get deployment my-app -o yaml

# Export and save to file
oc get deployment my-app -o yaml > deployment-backup.yaml

# Export with cleaned output (remove runtime info)
oc get deployment my-app --export -o yaml > deployment-clean.yaml
\`\`\`

### Patching Resources

**Make specific changes without editing entire resource:**

\`\`\`bash
# Patch using JSON patch
oc patch deployment my-app -p '{"spec":{"replicas":5}}'

# Patch using strategic merge
oc patch deployment my-app --type=merge -p '{"spec":{"replicas":5}}'

# Patch from file
oc patch deployment my-app --patch-file=patch.yaml
\`\`\`

---

## Debugging and Troubleshooting

### Viewing Logs

\`\`\`bash
# View pod logs
oc logs my-pod

# Follow logs (stream updates)
oc logs -f my-pod

# View logs from previous container instance
oc logs my-pod --previous

# View logs from specific container in pod
oc logs my-pod -c container-name

# View logs from all pods with label
oc logs -l app=my-app

# Tail last 100 lines
oc logs --tail=100 my-pod
\`\`\`

### Inspecting Resources

\`\`\`bash
# Describe resource with detailed information
oc describe pod my-pod
oc describe deployment my-deployment
oc describe node worker-0

# Get events for debugging
oc get events
oc get events --sort-by='.lastTimestamp'

# Watch resources for changes
oc get pods -w

# Get resource with additional details
oc get pod my-pod -o wide
oc get nodes -o wide
\`\`\`

### Executing Commands in Containers

\`\`\`bash
# Execute single command
oc exec my-pod -- env

# Interactive shell
oc exec -it my-pod -- bash
oc exec -it my-pod -- sh

# Execute in specific container
oc exec my-pod -c container-name -- command

# Debug with temporary container
oc debug pod/my-pod
oc debug node/worker-0
\`\`\`

### Port Forwarding

\`\`\`bash
# Forward local port to pod
oc port-forward pod/my-pod 8080:80

# Forward to service
oc port-forward service/my-service 8080:80

# Listen on all interfaces
oc port-forward --address 0.0.0.0 pod/my-pod 8080:80
\`\`\`

---

## Context and Configuration Management

### Understanding Contexts

Contexts define connection parameters for clusters:

* **Cluster**: API server endpoint
* **User**: Authentication credentials
* **Namespace**: Default namespace for commands

### Managing Contexts

\`\`\`bash
# View current context
oc config current-context

# List all contexts
oc config get-contexts

# Switch context
oc config use-context my-context

# Set namespace for current context
oc config set-context --current --namespace=my-namespace

# Create new context
oc config set-context new-context --cluster=my-cluster --user=my-user --namespace=my-namespace
\`\`\`

### Viewing Configuration

\`\`\`bash
# View complete kubeconfig
oc config view

# View kubeconfig for specific context
oc config view --minify

# Get specific config value
oc config view -o jsonpath='{.users[*].name}'
\`\`\`

---

## Productivity Tips

### Command Aliases

Create shell aliases for commonly used commands:

\`\`\`bash
# Add to ~/.bashrc or ~/.zshrc
alias k='kubectl'
alias ocp='oc'
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kdp='kubectl describe pod'
alias kl='kubectl logs'
alias kx='kubectl exec -it'
\`\`\`

### Shell Completion

Enable tab completion for faster command entry:

\`\`\`bash
# Bash completion
source <(oc completion bash)
echo "source <(oc completion bash)" >> ~/.bashrc

# Zsh completion
source <(oc completion zsh)
echo "source <(oc completion zsh)" >> ~/.zshrc

# Use completion
oc get po<TAB>  # Completes to 'pods'
oc logs my-<TAB>  # Completes to available pod names
\`\`\`

### Output Formatting

\`\`\`bash
# JSON output
oc get pod my-pod -o json

# YAML output
oc get pod my-pod -o yaml

# Custom columns
oc get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase

# JSONPath queries
oc get pods -o jsonpath='{.items[*].metadata.name}'

# Wide output (more information)
oc get pods -o wide

# Show labels
oc get pods --show-labels

# Select specific fields
oc get pod my-pod -o jsonpath='{.status.podIP}'
\`\`\`

### Label Selectors

\`\`\`bash
# Filter by single label
oc get pods -l app=my-app

# Multiple labels (AND)
oc get pods -l app=my-app,tier=frontend

# Label existence
oc get pods -l environment

# Label non-existence
oc get pods -l '!environment'

# Set-based selectors
oc get pods -l 'environment in (production,staging)'
\`\`\`

---

## Imperative vs Declarative Management

### Imperative Approach

Direct commands that immediately change cluster state:

\`\`\`bash
# Create resources with commands
oc create deployment my-app --image=nginx:latest
oc expose deployment my-app --port=80
oc scale deployment my-app --replicas=3
\`\`\`

**Advantages:**

* Quick for one-off tasks
* Easy to learn
* Immediate feedback

**Disadvantages:**

* Hard to track changes
* Not version-controlled
* Difficult to reproduce
* Manual and error-prone

### Declarative Approach

Define desired state in files and apply:

\`\`\`bash
# Apply configurations from files
oc apply -f deployment.yaml
oc apply -f service.yaml

# Apply entire directory
oc apply -f ./manifests/

# Update by modifying files and reapplying
vim deployment.yaml
oc apply -f deployment.yaml
\`\`\`

**Advantages:**

* Version-controlled configurations
* Reproducible deployments
* Easy to audit changes
* Better for automation
* Self-documenting

**Disadvantages:**

* More initial setup
* Requires file management
* Less immediate than imperative commands

**Best practice:** Use declarative management for production environments and imperative commands for quick debugging or testing.

---

## Key Takeaways

* kubectl is the standard Kubernetes CLI providing full cluster management capabilities
* oc is a superset of kubectl, adding OpenShift-specific features while maintaining kubectl compatibility
* Both tools communicate with the cluster API server to manage resources
* OpenShift extensions include project management, builds, deployments, image streams, and routes
* Command-line tools enable automation, scripting, and efficient cluster management
* Declarative management with configuration files is preferred for production environments
* Debugging tools include logs, exec, describe, events, and port forwarding
* Context management allows switching between clusters and namespaces
* Shell completion and aliases significantly improve productivity
* Output formatting options provide flexible data extraction and viewing

---

**Next in this series**: Part 7 will explore deploying applications on OpenShift, covering deployment strategies, application lifecycle management, and exposing services through routes.
`,ZS=`# Part 7: Deploying Applications on OpenShift

Deploying applications effectively requires understanding OpenShift's deployment methods, application lifecycle management, and service exposure mechanisms. This guide covers the complete application deployment workflow from source code to production.

---

## Application Deployment Overview

OpenShift provides multiple pathways for deploying applications, each suited to different scenarios and development workflows.

### Deployment Methods

**From Container Images:**

* Deploy pre-built images from registries
* Fast deployment for ready-made applications
* Suitable for production images

**From Source Code (Source-to-Image):**

* Build and deploy directly from Git repositories
* Automated build process
* Ideal for development workflows

**From Templates and Helm Charts:**

* Deploy complex applications with predefined configurations
* Reusable application definitions
* Simplified deployment of multi-component systems

**From Operators:**

* Deploy and manage applications using operators
* Automated lifecycle management
* Best for complex stateful applications

---

## Understanding Pods

### What is a Pod?

A **pod** in OpenShift is the **smallest deployable unit** that represents one or more tightly coupled containers sharing the same network namespace, storage volumes, and lifecycle.

**Pod characteristics:**

* **Atomic deployment unit**: Scheduled and managed as a single entity
* **Shared networking**: All containers share the same IP address and port space
* **Shared storage**: Containers can access the same volumes
* **Coordinated lifecycle**: Containers start and stop together
* **Co-location**: Always scheduled on the same node

### Multi-Container Pods

Pods can contain multiple containers that work together:

**Common patterns:**

* **Sidecar pattern**: Helper container supporting the main application
  * Log aggregation container
  * Monitoring agent
  * Proxy or adapter

* **Ambassador pattern**: Proxy container handling external communications
  * Database connection proxy
  * API gateway

* **Adapter pattern**: Container transforming main container output
  * Log format converter
  * Metrics translator

**Example use case:**

A web application pod with:

1. Main application container (Python Flask app)
2. Sidecar log shipping container (Fluentd)
3. Metrics exporter container (Prometheus exporter)

All three containers:

* Share the same network (localhost communication)
* Access shared volumes
* Are managed as one unit

### Pod Lifecycle

**Pod phases:**

* **Pending**: Pod created but containers not yet running (pulling images, scheduling)
* **Running**: At least one container is running
* **Succeeded**: All containers completed successfully
* **Failed**: At least one container failed
* **Unknown**: Pod status cannot be determined

**Container states:**

* **Waiting**: Container waiting to start (pulling image, checking dependencies)
* **Running**: Container executing normally
* **Terminated**: Container finished execution or crashed

---

## Deploying from Container Images

### What Does "Deploy Image" Mean?

**Deploy Image** in OpenShift refers to deploying an application directly from a container image stored in an internal or external container registry.

Instead of building the image from source code, OpenShift:

1. Pulls the specified image from a registry
2. Creates necessary deployment resources
3. Runs the image as containerized application
4. Manages the application lifecycle

### Deploying from Images via CLI

\`\`\`bash
# Deploy from Docker Hub public image
oc new-app nginx:latest

# Deploy from Red Hat registry
oc new-app registry.redhat.io/rhel8/nginx-118

# Deploy with custom name
oc new-app --name=my-web nginx:latest

# Deploy from private registry
oc new-app --docker-image=private-registry.example.com/my-image:v1

# Deploy with environment variables
oc new-app nginx:latest -e NGINX_PORT=8080

# Deploy and expose immediately
oc new-app nginx:latest && oc expose svc/nginx
\`\`\`

### Deploying from Images via Web Console

1. Navigate to Developer perspective
2. Click "Add" → "Container Image"
3. Select "Image name from external registry" or "Image stream tag from internal registry"
4. Enter image name or select from available streams
5. Configure application settings:
   * Application name
   * Component name
   * Resource limits
   * Environment variables
   * Labels
6. Choose whether to create route
7. Click "Create"

OpenShift automatically creates:

* **Deployment**: Manages pods and replicas
* **Service**: Internal networking endpoint
* **ImageStream**: Tracks image changes (optional)
* **Route**: External access (if selected)

---

## Source-to-Image (S2I) Deployment

### What is Source-to-Image?

**Source-to-Image (S2I)** is an OpenShift build mechanism that takes application source code, injects it into a builder image, and produces a runnable container image without requiring users to write a Dockerfile.

**S2I advantages:**

* **No Dockerfile needed**: Simplifies container image creation
* **Consistent builds**: Same builder image ensures reproducibility
* **Security**: Builder images maintained and patched by image providers
* **Speed**: Incremental builds reuse layers for faster subsequent builds
* **Developer focus**: Developers focus on code, not containerization

### How S2I Works

The S2I process:

1. **Source code provided**: From Git repository or local directory
2. **Builder image selected**: Contains language runtime and build tools
3. **Build process**:
   * Clone source code
   * Inject code into builder image
   * Execute build scripts (compile, package)
   * Create application layer
   * Produce final container image
4. **Image stored**: Pushed to internal registry
5. **Deployment**: Image deployed to cluster

### Builder Images

A **builder image** is a container image that contains the necessary runtime, dependencies, and build tools required to compile and package application source code into a runnable image.

**Common builder images:**

* **Python**: python:3.9, python:3.11
* **Node.js**: nodejs:16, nodejs:18
* **Java**: openjdk-11, openjdk-17
* **Ruby**: ruby:3.0, ruby:3.1
* **Go**: golang:1.19, golang:1.20
* **PHP**: php:8.0, php:8.1
* **.NET Core**: dotnet:6.0, dotnet:7.0

**Builder image contents:**

* Language runtime (Python interpreter, Node.js, JVM)
* Build tools (pip, npm, Maven, Gradle)
* Common dependencies and libraries
* S2I scripts for build automation
* Security patches and updates

### Deploying with S2I via CLI

\`\`\`bash
# Deploy from Git repository (auto-detect language)
oc new-app https://github.com/user/python-app.git

# Specify builder image explicitly
oc new-app python:3.9~https://github.com/user/python-app.git

# Deploy from specific branch
oc new-app https://github.com/user/python-app.git#develop

# Deploy from subdirectory
oc new-app https://github.com/user/monorepo.git --context-dir=apps/backend

# Set environment variables
oc new-app python~https://github.com/user/app.git -e DATABASE_URL=postgresql://...

# Specify build environment variables
oc new-app python~https://github.com/user/app.git --build-env PYTHON_VERSION=3.9

# Create application with custom name
oc new-app --name=my-python-app python~https://github.com/user/app.git
\`\`\`

### Deploying with S2I via Web Console

1. Navigate to Developer perspective
2. Click "Add" → "From Git"
3. Enter Git repository URL
4. OpenShift auto-detects language and suggests builder image
5. Configure build settings:
   * Select builder image version
   * Specify Git reference (branch/tag)
   * Set context directory if needed
   * Configure build environment variables
6. Configure deployment settings:
   * Application name
   * Resource limits
   * Deployment environment variables
   * Scaling options
7. Choose to create route for external access
8. Click "Create"

OpenShift automatically:

* Creates BuildConfig for building image
* Creates ImageStream for storing built images
* Creates Deployment for running application
* Creates Service for internal networking
* Creates Route for external access (if selected)

### Managing Builds

\`\`\`bash
# View build configurations
oc get buildconfig

# View builds
oc get builds

# Start new build
oc start-build my-app

# Start build from local directory
oc start-build my-app --from-dir=.

# Follow build logs
oc logs -f bc/my-app

# Cancel running build
oc cancel-build my-app-2

# Delete old builds
oc delete build my-app-1 my-app-2

# Trigger rebuild on git push
oc set triggers bc/my-app --from-github
\`\`\`

---

## Managing Deployments

### Scaling Applications

**Horizontal scaling** adjusts the number of pod replicas running your application.

**Scaling via CLI:**

\`\`\`bash
# Scale deployment to 3 replicas
oc scale deployment/my-app --replicas=3

# Scale to zero (pause application)
oc scale deployment/my-app --replicas=0

# Check current replicas
oc get deployment my-app
\`\`\`

**Scaling via Web Console:**

1. Navigate to Topology view
2. Click on application
3. In details panel, find "Pod" section
4. Use up/down arrows to adjust replica count
5. Changes apply immediately

**Autoscaling:**

\`\`\`bash
# Create horizontal pod autoscaler
oc autoscale deployment/my-app --min=2 --max=10 --cpu-percent=80

# View autoscaler
oc get hpa

# Delete autoscaler
oc delete hpa my-app
\`\`\`

### Rolling Updates

OpenShift performs rolling updates by default, gradually replacing old pods with new ones to maintain availability.

**Update strategies:**

* **Rolling (default)**: Gradually replace pods, zero downtime
* **Recreate**: Stop all pods, then start new ones, brief downtime

**Triggering updates:**

\`\`\`bash
# Update container image
oc set image deployment/my-app container-name=new-image:v2

# Update environment variable
oc set env deployment/my-app DATABASE_URL=new-connection-string

# Update resource limits
oc set resources deployment/my-app --limits=cpu=500m,memory=512Mi
\`\`\`

**Monitoring rollouts:**

\`\`\`bash
# Watch rollout status
oc rollout status deployment/my-app

# View rollout history
oc rollout history deployment/my-app

# View specific revision
oc rollout history deployment/my-app --revision=2
\`\`\`

**Rollback deployments:**

\`\`\`bash
# Rollback to previous version
oc rollout undo deployment/my-app

# Rollback to specific revision
oc rollout undo deployment/my-app --to-revision=3

# Pause rollout
oc rollout pause deployment/my-app

# Resume rollout
oc rollout resume deployment/my-app
\`\`\`

---

## Exposing Applications with Services and Routes

### Services: Internal Networking

Services provide stable internal endpoints for pods.

**Service types:**

* **ClusterIP**: Internal-only access (default)
* **NodePort**: Exposes service on each node's IP at a static port
* **LoadBalancer**: External load balancer (cloud environments)

**Creating services:**

\`\`\`bash
# Expose deployment as service
oc expose deployment/my-app --port=8080 --target-port=8080

# Create service with custom name
oc expose deployment/my-app --port=8080 --name=my-service

# View services
oc get services

# Get service details
oc describe service my-app
\`\`\`

### Routes: External Access

### What is a Route?

A **route** in OpenShift is a platform-specific resource that exposes a service externally by mapping a public hostname to an internal service, enabling HTTP and HTTPS access to applications running inside the cluster.

**Route capabilities:**

* **External access**: Make services accessible from outside the cluster
* **Hostname mapping**: Assign friendly URLs to services
* **TLS termination**: Handle HTTPS encryption at the router
* **Path-based routing**: Route different paths to different services
* **Load balancing**: Distribute traffic across service pods

### TLS/SSL for Routes

### What is TLS?

**TLS (Transport Layer Security)** is a cryptographic protocol that provides secure communication over a network by encrypting data, ensuring integrity, and authenticating endpoints.

In OpenShift, TLS is commonly used in routes to secure external access to applications using HTTPS.

**TLS termination types:**

* **Edge**: TLS terminates at the router, internal traffic is HTTP
* **Passthrough**: TLS traffic passes through router to pod, pod handles decryption
* **Re-encrypt**: TLS terminates at router, then re-encrypts for internal traffic

### Creating Routes

**Expose service via CLI:**

\`\`\`bash
# Create simple HTTP route
oc expose service/my-app

# Create route with custom hostname
oc expose service/my-app --hostname=myapp.example.com

# Create secure route with edge TLS termination
oc create route edge my-app --service=my-app --hostname=myapp.example.com

# Create passthrough route
oc create route passthrough my-app --service=my-app --hostname=myapp.example.com

# Create route with path
oc expose service/my-app --path=/api
\`\`\`

**View routes:**

\`\`\`bash
# List routes
oc get routes

# Get route details
oc describe route my-app

# Get route URL
oc get route my-app -o jsonpath='{.spec.host}'

# Test route
curl $(oc get route my-app -o jsonpath='{.spec.host}')
\`\`\`

**Creating routes via Web Console:**

1. Navigate to Networking → Routes
2. Click "Create Route"
3. Configure route:
   * Name
   * Hostname (optional, auto-generated if blank)
   * Path (optional)
   * Service to route to
   * Target port
   * Security settings (TLS termination type, certificates)
4. Click "Create"

---

## Application Lifecycle Management

### Topology View

The **Topology view** in OpenShift Web Console provides a visual representation of applications, services, pods, and their relationships.

**Topology features:**

* **Visual overview**: See all application components at a glance
* **Relationship mapping**: Understand connections between services
* **Health status**: Color-coded indicators for pod health
* **Quick actions**: Scale, view logs, edit from context menu
* **Traffic flow**: Visualize service communication

**Using Topology:**

1. Navigate to Developer perspective
2. Select project from dropdown
3. View visual representation of deployments
4. Click components for details and actions
5. Use right-click menu for quick operations

### Project Deployment Steps

**Complete deployment workflow:**

1. **Create project/namespace:**

   \`\`\`bash
   oc new-project my-application
   \`\`\`

2. **Deploy application:**

   \`\`\`bash
   # From Git (S2I)
   oc new-app python~https://github.com/user/app.git

   # From image
   oc new-app nginx:latest
   \`\`\`

3. **Monitor deployment:**

   \`\`\`bash
   oc get pods -w
   oc logs -f deployment/my-app
   \`\`\`

4. **Expose service:**

   \`\`\`bash
   oc expose service/my-app
   \`\`\`

5. **Verify application:**

   \`\`\`bash
   oc get routes
   curl $(oc get route my-app -o jsonpath='{.spec.host}')
   \`\`\`

6. **Scale if needed:**

   \`\`\`bash
   oc scale deployment/my-app --replicas=3
   \`\`\`

7. **Configure environment:**

   \`\`\`bash
   oc set env deployment/my-app DATABASE_URL=...
   \`\`\`

8. **Setup monitoring and alerts** (covered in later sections)

---

## Helm: Kubernetes Package Manager

### What is Helm?

The **Helm command** is used to manage Kubernetes and OpenShift applications through **Helm charts**, which are packaged collections of YAML manifests defining resources such as Deployments, Services, and ConfigMaps.

**Helm benefits:**

* **Versioned deployments**: Track application versions
* **Reusable templates**: Define once, deploy many times
* **Configuration management**: Separate configuration from manifests
* **Simplified upgrades**: Update applications with single command
* **Rollback capability**: Revert to previous versions easily

### Helm Concepts

**Chart**: Package of pre-configured Kubernetes resources

**Release**: Instance of a chart running in a cluster

**Repository**: Collection of charts available for installation

### Using Helm with OpenShift

\`\`\`bash
# Add Helm repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Update repositories
helm repo update

# Search for charts
helm search repo postgresql

# Install chart
helm install my-database bitnami/postgresql

# Install with custom values
helm install my-database bitnami/postgresql --set auth.password=mypassword

# Install with values file
helm install my-database bitnami/postgresql -f values.yaml

# List installed releases
helm list

# Upgrade release
helm upgrade my-database bitnami/postgresql

# Rollback release
helm rollback my-database 1

# Uninstall release
helm uninstall my-database

# View chart details
helm show chart bitnami/postgresql
helm show values bitnami/postgresql
\`\`\`

---

## Configuration Management

### Environment Variables

\`\`\`bash
# Set environment variable
oc set env deployment/my-app DATABASE_URL=postgresql://...

# Set multiple variables
oc set env deployment/my-app VAR1=value1 VAR2=value2

# View environment variables
oc set env deployment/my-app --list

# Remove environment variable
oc set env deployment/my-app VAR1-
\`\`\`

### ConfigMaps

\`\`\`bash
# Create ConfigMap from literals
oc create configmap my-config --from-literal=key1=value1 --from-literal=key2=value2

# Create ConfigMap from file
oc create configmap my-config --from-file=config.properties

# Use ConfigMap in deployment
oc set env deployment/my-app --from=configmap/my-config

# Mount ConfigMap as volume
oc set volume deployment/my-app --add --name=config-vol --mount-path=/etc/config --configmap-name=my-config
\`\`\`

### Secrets

\`\`\`bash
# Create secret from literals
oc create secret generic my-secret --from-literal=password=supersecret

# Create secret from file
oc create secret generic my-secret --from-file=credentials.json

# Use secret in deployment
oc set env deployment/my-app --from=secret/my-secret

# Mount secret as volume
oc set volume deployment/my-app --add --name=secret-vol --mount-path=/etc/secrets --secret-name=my-secret
\`\`\`

---

## Key Takeaways

* Pods are the smallest deployment unit, containing one or more tightly coupled containers
* OpenShift supports multiple deployment methods: container images, S2I, templates, Helm, and operators
* Deploy Image creates applications directly from pre-built container images
* Source-to-Image (S2I) builds container images from source code without Dockerfiles
* Builder images contain runtimes and tools needed to build applications
* Applications can be scaled horizontally by adjusting replica counts
* Rolling updates provide zero-downtime deployments with automatic rollback capability
* Routes expose services externally with TLS/SSL support for secure HTTPS access
* TLS termination can occur at edge, passthrough, or re-encrypt modes
* Topology view provides visual application management and monitoring
* Helm simplifies deployment of complex applications through packaged charts
* Configuration management uses environment variables, ConfigMaps, and Secrets

---

**Next in this series**: Part 8 will cover access control in OpenShift, exploring authentication providers, role-based access control (RBAC), security context constraints, and resource quotas.
`,eC=`# Part 8: Controlling Access to OpenShift

Security and access control are fundamental to multi-tenant OpenShift environments. This guide explores authentication mechanisms, role-based access control (RBAC), resource quotas, and project management to ensure secure and fair resource usage across teams.

---

## Authentication in OpenShift

Authentication verifies user identity before granting cluster access. OpenShift supports multiple authentication providers to integrate with existing enterprise identity systems.

### Identity Providers

OpenShift can authenticate users through various identity provider configurations:

* **LDAP/Active Directory**: Enterprise directory services
* **HTPasswd**: File-based authentication (development/testing)
* **OAuth providers**: GitHub, GitLab, Google
* **OpenID Connect**: Standards-based authentication
* **Request Header**: Proxy-based authentication
* **Keystone**: OpenStack identity service

Multiple identity providers can be configured simultaneously, allowing different authentication methods for different user groups.

---

## LDAP Identity Provider

### What is LDAP Identity Provider?

An **LDAP Identity Provider** in OpenShift is an external authentication mechanism that allows users to log in to the cluster using credentials stored in an LDAP directory service such as Active Directory.

**How it works:**

1. User attempts to log in to OpenShift
2. OpenShift forwards credentials to LDAP server
3. LDAP server validates credentials against directory
4. Upon successful authentication, LDAP returns user information
5. OpenShift creates or updates user account in cluster
6. OpenShift maps LDAP groups to OpenShift roles (optional)
7. User gains access based on assigned permissions

### Benefits of LDAP Integration

**Centralized user management:**

* Single source of truth for user accounts
* Consistent credentials across systems
* Simplified user lifecycle management
* No need to duplicate user accounts

**Enterprise integration:**

* Leverage existing Active Directory infrastructure
* Integrate with corporate security policies
* Compliance with authentication requirements
* Single sign-on (SSO) capabilities

**Group-based access control:**

* Map LDAP groups to OpenShift roles
* Automatic permission assignment
* Simplified permission management
* Dynamic access based on directory membership

### LDAP Configuration

LDAP identity providers require configuration specifying:

* **LDAP server URL**: Connection endpoint
* **Bind credentials**: Service account for LDAP queries
* **User search base**: Where to find user accounts
* **Attribute mappings**: Map LDAP attributes to OpenShift user properties
* **Group search**: Optional group membership queries

Example LDAP configuration elements:

\`\`\`yaml
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: ldap_provider
    type: LDAP
    ldap:
      url: ldaps://ldap.example.com:636
      bindDN: cn=service,ou=users,dc=example,dc=com
      bindPassword:
        name: ldap-secret
      attributes:
        id: ['dn']
        email: ['mail']
        name: ['cn']
        preferredUsername: ['uid']
\`\`\`

---

## Role-Based Access Control (RBAC)

OpenShift uses Kubernetes RBAC extended with additional capabilities for fine-grained access control.

### RBAC Concepts

**User**: Individual or service account accessing the cluster

**Role**: Set of permissions (rules) defining what actions can be performed

**RoleBinding**: Grants permissions to users by binding them to roles

**ClusterRole**: Cluster-wide role applicable across all projects

**ClusterRoleBinding**: Grants cluster-wide permissions to users

### Built-in Roles

OpenShift provides several predefined roles:

**Cluster-level roles:**

* **cluster-admin**: Full cluster control, all operations on all resources
* **cluster-status**: Read-only access to cluster status
* **self-provisioner**: Can create new projects

**Project-level roles:**

* **admin**: Project administrator, full control within project
* **edit**: Can modify project resources (deployments, services, etc.)
* **view**: Read-only access to project resources
* **basic-user**: Minimal permissions for authenticated users

### Granting Permissions

**Project-level permissions:**

\`\`\`bash
# Add admin role to user in project
oc adm policy add-role-to-user admin user1 -n my-project

# Add edit role to user
oc adm policy add-role-to-user edit user2 -n my-project

# Add view role to user
oc adm policy add-role-to-user view user3 -n my-project

# Add role to group
oc adm policy add-role-to-group edit developers -n my-project

# Remove role from user
oc adm policy remove-role-from-user edit user2 -n my-project
\`\`\`

**Cluster-level permissions:**

\`\`\`bash
# Add cluster-admin role to user
oc adm policy add-cluster-role-to-user cluster-admin admin-user

# Add cluster role to user for specific use
oc adm policy add-cluster-role-to-user cluster-reader monitor-user

# Remove cluster role from user
oc adm policy remove-cluster-role-from-user cluster-admin former-admin
\`\`\`

### Service Accounts

Service accounts provide identity for processes running in pods.

**Creating and using service accounts:**

\`\`\`bash
# Create service account
oc create serviceaccount my-sa

# Grant permissions to service account
oc adm policy add-role-to-user edit system:serviceaccount:my-project:my-sa

# Use service account in deployment
oc set serviceaccount deployment/my-app my-sa

# Get service account token
oc sa get-token my-sa
\`\`\`

### Viewing Permissions

\`\`\`bash
# View role bindings in project
oc get rolebindings

# View cluster role bindings
oc get clusterrolebindings

# Describe specific role binding
oc describe rolebinding admin

# Check if user can perform action
oc auth can-i create pods
oc auth can-i delete projects --as=user1

# View user's permissions
oc policy who-can delete pods
\`\`\`

---

## Security Context Constraints (SCCs)

Security Context Constraints control what actions pods can perform and what resources they can access, going beyond standard Kubernetes Pod Security Standards.

### Built-in SCCs

OpenShift includes predefined SCCs:

* **restricted**: Default, most restrictive
* **restricted-v2**: Updated restricted policy (OpenShift 4.11+)
* **nonroot**: Can run as any non-root user
* **anyuid**: Can run as any user ID
* **hostaccess**: Can access host resources
* **hostmount-anyuid**: Can mount host volumes and run as any UID
* **hostnetwork**: Can use host networking
* **privileged**: Unrestricted access (highest privileges)

### Granting SCC Access

\`\`\`bash
# List available SCCs
oc get scc

# View SCC details
oc describe scc restricted-v2

# Add SCC to service account
oc adm policy add-scc-to-user anyuid -z my-serviceaccount

# Add SCC to user
oc adm policy add-scc-to-user anyuid user1

# Remove SCC from service account
oc adm policy remove-scc-from-user anyuid -z my-serviceaccount

# Check which SCC will be used
oc get pod my-pod -o yaml | grep scc
\`\`\`

### Common SCC Use Cases

**Running as root:**

Applications requiring root privileges need \`anyuid\` or higher SCC.

**Accessing host resources:**

Applications needing host filesystem or networking require appropriate SCCs.

**Legacy applications:**

Applications not designed for restricted environments may need elevated SCCs.

---

## Project Management

### Projects vs Namespaces

In OpenShift, **projects** extend Kubernetes namespaces with additional features:

* **Namespace isolation**: Separate resources between projects
* **RBAC integration**: Built-in role bindings
* **Resource quotas**: Automatic quota assignment
* **Network policies**: Project-level network isolation
* **Annotations and labels**: Additional metadata

### Project Lifecycle

**Creating projects:**

\`\`\`bash
# Create new project
oc new-project my-application

# Create with display name and description
oc new-project my-app --display-name="My Application" --description="Production application"

# Create project with specific node selector
oc adm new-project my-app --node-selector='env=prod'
\`\`\`

**Managing projects:**

\`\`\`bash
# List projects
oc projects

# Switch to project
oc project my-project

# Get current project
oc project

# View project details
oc describe project my-project

# Delete project (deletes all resources)
oc delete project my-project
\`\`\`

### Default Project Resources

### What Resources Are Automatically Granted?

When a user creates a project in OpenShift, default resources are automatically applied:

**Namespace**: Kubernetes namespace for resource isolation

**Service Accounts**: Default service accounts for pod execution:

* \`default\`: Used by pods without specified service account
* \`builder\`: Used by build pods
* \`deployer\`: Used by deployment pods

**Role Bindings**: Automatic permission assignments:

* Project creator gets \`admin\` role
* Service accounts get appropriate permissions

**Network Policies**: Default network isolation (if configured)

**Resource Quotas**: Cluster-configured default quotas (if applicable)

**Limit Ranges**: Default resource limits for pods and containers (if configured)

These defaults ensure projects are immediately usable and secured according to cluster policies.

---

## Resource Quotas

### What are Quotas?

**Quotas** in an OpenShift project are limits imposed on resource consumption to control how much CPU, memory, storage, pods, or other objects a project can use.

**Purpose of quotas:**

* **Fair resource sharing**: Prevent single project from consuming excessive resources
* **Cluster stability**: Ensure enough resources for all projects
* **Cost management**: Control infrastructure costs
* **Multi-tenancy**: Enable multiple teams to share cluster safely
* **Capacity planning**: Predictable resource allocation

### Types of Resource Quotas

**Compute resources:**

* **CPU**: Total CPU cores available to project
* **Memory**: Total RAM available to project
* **Ephemeral storage**: Temporary storage for pods

**Storage resources:**

* **Persistent volume claims**: Number of PVCs allowed
* **Storage capacity**: Total storage across all PVCs
* **Storage by class**: Limits per storage class

**Object counts:**

* **Pods**: Maximum number of pods
* **Services**: Maximum number of services
* **Routes**: Maximum number of routes
* **Secrets**: Maximum number of secrets
* **ConfigMaps**: Maximum number of ConfigMaps
* **Persistent Volume Claims**: Maximum number of PVCs

### Creating and Managing Quotas

### How Are Quotas Decided and By Whom?

**Quotas are typically decided by:**

* **Cluster administrators**: Overall cluster resource management
* **Platform teams**: Infrastructure capacity planning
* **Management**: Business and financial considerations

**Decision factors:**

* **Available cluster capacity**: Total resources in cluster
* **Organizational policies**: Company resource allocation rules
* **Workload requirements**: Anticipated application needs
* **Cost considerations**: Budget constraints
* **Fair usage goals**: Equitable resource distribution

**Quota enforcement:**

Quotas are enforced using:

* **ResourceQuota objects**: Define quota limits
* **LimitRange objects**: Default and maximum resource limits
* **Admission controllers**: Validate resource requests against quotas

**Creating quotas:**

\`\`\`bash
# Create basic quota
oc create quota my-quota \\
  --hard=pods=10,services=5 \\
  -n my-project

# Create compute quota
oc create quota compute-quota \\
  --hard=requests.cpu=4,requests.memory=8Gi,limits.cpu=8,limits.memory=16Gi \\
  -n my-project

# Create storage quota
oc create quota storage-quota \\
  --hard=persistentvolumeclaims=5,requests.storage=100Gi \\
  -n my-project

# View quotas
oc get quota -n my-project

# Describe quota (shows usage)
oc describe quota my-quota -n my-project
\`\`\`

**Quota YAML example:**

\`\`\`yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: project-quota
  namespace: my-project
spec:
  hard:
    # Compute resources
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi

    # Object counts
    pods: "20"
    services: "10"
    secrets: "50"
    configmaps: "30"
    persistentvolumeclaims: "10"

    # Storage
    requests.storage: "100Gi"
\`\`\`

**Updating quotas:**

\`\`\`bash
# Edit quota
oc edit quota my-quota -n my-project

# Delete quota
oc delete quota my-quota -n my-project
\`\`\`

### Limit Ranges

LimitRanges set default and maximum limits for individual containers and pods:

\`\`\`yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: resource-limits
  namespace: my-project
spec:
  limits:
  - type: Pod
    max:
      cpu: "2"
      memory: 4Gi
    min:
      cpu: 100m
      memory: 128Mi
  - type: Container
    default:
      cpu: 500m
      memory: 512Mi
    defaultRequest:
      cpu: 250m
      memory: 256Mi
    max:
      cpu: "1"
      memory: 2Gi
    min:
      cpu: 50m
      memory: 64Mi
\`\`\`

**Creating LimitRange:**

\`\`\`bash
# Create from file
oc create -f limitrange.yaml

# View limit ranges
oc get limitrange -n my-project

# Describe limit range
oc describe limitrange resource-limits -n my-project
\`\`\`

---

## Cluster Administrator Role

### What is a Cluster Administrator?

A **cluster administrator** is a user with elevated privileges responsible for managing and maintaining the OpenShift cluster.

**Responsibilities:**

* **User access management**: Control who can access cluster
* **Resource quotas**: Set and enforce resource limits
* **Node management**: Add, remove, and maintain cluster nodes
* **Cluster upgrades**: Plan and execute platform upgrades
* **Security policies**: Define and enforce security rules
* **Monitoring**: Oversee cluster health and performance
* **Backup and disaster recovery**: Ensure data protection
* **Troubleshooting**: Resolve cluster-wide issues

**Capabilities:**

* **Full cluster access**: All operations on all resources
* **Cross-project operations**: Manage all projects
* **Infrastructure control**: Modify cluster configuration
* **Operator management**: Install and configure operators
* **Policy enforcement**: Apply cluster-wide policies

**Best practices:**

* **Limit cluster-admin access**: Grant sparingly
* **Use project-specific roles**: Prefer scoped permissions
* **Audit administrator actions**: Track privileged operations
* **Separate duties**: Different admins for different areas
* **Use service accounts**: Automate with service accounts instead of user accounts

---

## YAML Configuration Files

### What is YAML?

**YAML (YAML Ain't Markup Language)** is a human-readable data serialization format commonly used in Kubernetes and OpenShift to define configuration files and resource manifests.

**YAML characteristics:**

* **Human-readable**: Easy to read and write
* **Indentation-based**: Uses spaces (not tabs) for structure
* **Declarative**: Describes desired state
* **Key-value pairs**: Simple data representation
* **Support for complex types**: Lists, nested objects, multi-line strings

**YAML structure:**

\`\`\`yaml
# Comments start with #
apiVersion: v1  # Key-value pair
kind: Pod       # Another key-value pair
metadata:       # Nested object
  name: my-pod
  labels:       # Nested object within object
    app: web
    tier: frontend
spec:           # Another nested object
  containers:   # List of objects
  - name: nginx # First list item (object)
    image: nginx:latest
    ports:      # List within object
    - containerPort: 80
\`\`\`

**Common YAML patterns in OpenShift:**

* **Two-space indentation**: Standard formatting
* **Lists with dashes**: \`- item\` for list elements
* **Multi-line strings**: Using \`|\` or \`>\` for long text
* **References**: \`&anchor\` and \`*alias\` for reusable values

**Working with YAML:**

\`\`\`bash
# Apply YAML file
oc apply -f resource.yaml

# Create from YAML
oc create -f resource.yaml

# Get resource as YAML
oc get pod my-pod -o yaml

# Edit resource in YAML
oc edit pod my-pod

# Validate YAML without applying
oc apply -f resource.yaml --dry-run=client

# Diff changes
oc diff -f resource.yaml
\`\`\`

---

## Access Control Best Practices

### Principle of Least Privilege

* Grant minimum permissions needed for tasks
* Use project-scoped roles over cluster roles when possible
* Regularly review and revoke unnecessary permissions

### Role Assignment Strategy

* **Developers**: \`edit\` role in development projects
* **Operations**: \`view\` role for monitoring, \`edit\` for deployments
* **Project leads**: \`admin\` role in their projects
* **Cluster admins**: Reserved for platform team

### Service Account Security

* Use dedicated service accounts for applications
* Grant minimal required permissions
* Avoid using default service account for applications
* Rotate service account tokens regularly

### Quota Management

* Set quotas based on expected usage plus buffer
* Monitor quota usage regularly
* Adjust quotas based on actual consumption
* Document quota allocation decisions

### Audit and Compliance

* Enable audit logging for security events
* Review user access periodically
* Track permission changes
* Maintain documentation of access policies

---

## Key Takeaways

* Authentication providers integrate OpenShift with enterprise identity systems
* LDAP identity providers enable centralized user management through directory services
* RBAC provides fine-grained access control through roles and bindings
* Security Context Constraints control pod privileges and capabilities
* Projects extend namespaces with RBAC, quotas, and isolation
* Resource quotas ensure fair resource distribution and cluster stability
* Quotas are decided by administrators based on capacity and organizational policies
* LimitRanges set default and maximum resource limits for containers
* Cluster administrators manage overall platform health, security, and operations
* YAML files provide declarative resource definitions for version control and automation
* Following security best practices ensures safe multi-tenant cluster operation

---

**Next in this series**: Part 9 will explore advanced OpenShift features including persistent storage, networking, monitoring, and logging to enable production-ready deployments.
`,nC=`# Part 9: Advanced OpenShift Features for Production

Production-ready applications require sophisticated infrastructure capabilities including persistent storage, advanced networking, comprehensive monitoring, centralized logging, and automated backup strategies. This guide explores these advanced features that make OpenShift suitable for enterprise production environments.

---

## Persistent Storage in OpenShift

### Understanding Storage in Containers

Containers are ephemeral by nature—when a container stops, its data is lost. Persistent storage solves this problem by providing data that survives container restarts and moves with applications.

### Storage Concepts

**Persistent Volume (PV):**

* Cluster-level storage resource provisioned by administrators
* Independent of any pod lifecycle
* Represents actual storage backend (disk, NFS, cloud storage)
* Remains available after pod deletion

**Persistent Volume Claim (PVC):**

* User request for storage
* Specifies size, access mode, and storage class
* Binds to available PV that matches requirements
* Used by pods to access persistent storage

**Storage Class:**

* Defines types of storage available (SSD, HDD, network storage)
* Enables dynamic provisioning
* Specifies provisioner and parameters
* Allows users to request different storage tiers

### Access Modes

Storage supports different access patterns:

* **ReadWriteOnce (RWO)**: Single node can mount for read-write
* **ReadOnlyMany (ROX)**: Multiple nodes can mount read-only
* **ReadWriteMany (RWX)**: Multiple nodes can mount read-write

### Using Persistent Storage

**Creating PVC:**

\`\`\`bash
# Create PVC from command line
oc create -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard
EOF

# View PVCs
oc get pvc

# Describe PVC
oc describe pvc my-pvc
\`\`\`

**Attaching storage to pods:**

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: data
      mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: my-pvc
\`\`\`

**Adding storage to deployments:**

\`\`\`bash
# Add volume to deployment
oc set volume deployment/my-app \\
  --add \\
  --name=data-volume \\
  --type=persistentVolumeClaim \\
  --claim-name=my-pvc \\
  --mount-path=/data

# Remove volume
oc set volume deployment/my-app --remove --name=data-volume
\`\`\`

### Dynamic Provisioning

**How dynamic provisioning works:**

1. User creates PVC requesting storage
2. Storage class provisioner automatically creates PV
3. PV bound to PVC
4. Pod can immediately use storage

**Benefits:**

* No manual PV creation required
* Automatic provisioning on demand
* Consistent storage allocation
* Simplified storage management

**Storage classes example:**

\`\`\`yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
  iopsPerGB: "10"
  fsType: ext4
allowVolumeExpansion: true
volumeBindingMode: WaitForFirstConsumer
\`\`\`

### Storage Best Practices

* **Right-size storage**: Request appropriate capacity
* **Choose appropriate access modes**: Match application needs
* **Use storage classes**: Leverage dynamic provisioning
* **Plan for backups**: Implement regular backup strategies
* **Monitor usage**: Track storage consumption
* **Clean up unused PVCs**: Remove when no longer needed

---

## Advanced Networking

### Network Policies

Network policies control traffic flow between pods, providing security through network segmentation.

**Default behavior:**

* Without network policies, all pods can communicate
* Network policies are additive (deny by default, allow explicitly)
* Policies apply to pods selected by labels

**Creating network policies:**

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-frontend
  namespace: my-app
spec:
  podSelector:
    matchLabels:
      tier: backend
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          tier: frontend
    ports:
    - protocol: TCP
      port: 8080
  egress:
  - to:
    - podSelector:
        matchLabels:
          tier: database
    ports:
    - protocol: TCP
      port: 5432
\`\`\`

**Common network policy patterns:**

* **Deny all traffic**: Default deny, explicit allow
* **Allow from namespace**: Permit traffic from specific projects
* **Allow to external services**: Control egress to outside cluster
* **Isolate applications**: Separate workloads by network

**Managing network policies:**

\`\`\`bash
# Create network policy
oc create -f network-policy.yaml

# View network policies
oc get networkpolicy

# Describe policy
oc describe networkpolicy allow-from-frontend

# Delete policy
oc delete networkpolicy allow-from-frontend
\`\`\`

### Service Mesh

Service mesh (Istio on OpenShift) provides advanced networking features:

* **Traffic management**: Routing, load balancing, circuit breaking
* **Security**: mTLS encryption, authentication, authorization
* **Observability**: Distributed tracing, metrics, logs
* **Policy enforcement**: Rate limiting, access control

### Ingress and Egress Control

**Ingress controllers:**

* Route external traffic to services
* TLS termination
* Path-based routing
* Load balancing

**Egress control:**

* Restrict outbound traffic
* Proxy external requests
* Monitor external communications
* Compliance with network policies

---

## Monitoring and Observability

### Built-in Monitoring Stack

OpenShift includes integrated monitoring based on Prometheus:

* **Metrics collection**: Automatic metrics from cluster and applications
* **Alerting**: Pre-configured alerts for common issues
* **Visualization**: Grafana dashboards for metrics viewing
* **Multi-tenancy**: Project-isolated metrics and dashboards

### Monitoring Components

**Prometheus:**

* Time-series database for metrics
* Scrapes metrics from applications and infrastructure
* Stores historical data
* Executes alerting rules

**Alertmanager:**

* Handles alerts from Prometheus
* Deduplicates and groups alerts
* Routes to notification channels
* Manages silences and inhibitions

**Grafana:**

* Visualization and dashboards
* Pre-built dashboards for cluster and applications
* Custom dashboard creation
* Data exploration and analysis

### Application Monitoring

**Enabling user workload monitoring:**

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: cluster-monitoring-config
  namespace: openshift-monitoring
data:
  config.yaml: |
    enableUserWorkload: true
\`\`\`

**Exposing application metrics:**

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  ports:
  - name: metrics
    port: 8080
    targetPort: 8080
  selector:
    app: my-app
---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: my-app-monitor
spec:
  selector:
    matchLabels:
      app: my-app
  endpoints:
  - port: metrics
    interval: 30s
\`\`\`

### Creating Alerts

**PrometheusRule example:**

\`\`\`yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: my-app-alerts
spec:
  groups:
  - name: my-app
    interval: 30s
    rules:
    - alert: HighPodMemory
      expr: container_memory_usage_bytes{pod=~"my-app-.*"} > 512000000
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "High memory usage detected"
        description: "Pod {{ $labels.pod }} memory usage is above 512MB"
    - alert: PodDown
      expr: up{job="my-app"} == 0
      for: 2m
      labels:
        severity: critical
      annotations:
        summary: "Application pod is down"
        description: "{{ $labels.pod }} has been down for more than 2 minutes"
\`\`\`

### Viewing Metrics and Alerts

**Via Web Console:**

1. Navigate to Observe → Metrics
2. Enter PromQL queries
3. View graphs and data
4. Navigate to Observe → Alerts to view firing alerts

**Via CLI:**

\`\`\`bash
# View alerts
oc get prometheusrule

# Describe alert rule
oc describe prometheusrule my-app-alerts

# Query metrics (requires port-forward to Prometheus)
oc port-forward -n openshift-monitoring prometheus-k8s-0 9090
# Then access Prometheus UI at localhost:9090
\`\`\`

### Key Metrics to Monitor

**Cluster-level:**

* Node CPU and memory utilization
* Disk usage and I/O
* Network throughput
* etcd performance
* API server latency

**Application-level:**

* Pod CPU and memory usage
* Container restart counts
* HTTP request rates and latency
* Application-specific business metrics
* Database query performance

---

## Centralized Logging

### Logging Architecture

OpenShift logging typically uses the EFK stack:

* **Elasticsearch**: Log storage and search
* **Fluentd**: Log collection and forwarding
* **Kibana**: Log visualization and analysis

Alternative: OpenShift Logging with Loki provides a lighter-weight option.

### Log Types

**Infrastructure logs:**

* Node system logs
* Kubernetes API server logs
* Operator logs
* Network plugin logs

**Application logs:**

* Container stdout/stderr
* Application-generated logs
* Custom log formats

**Audit logs:**

* API access logs
* Authentication events
* RBAC decisions
* Security events

### Viewing Logs

**Via CLI:**

\`\`\`bash
# View pod logs
oc logs my-pod

# Follow logs
oc logs -f my-pod

# View logs from previous container instance
oc logs --previous my-pod

# View logs from all pods with label
oc logs -l app=my-app --tail=50

# View logs from specific timeframe
oc logs my-pod --since=1h
oc logs my-pod --since-time=2024-01-30T10:00:00Z
\`\`\`

**Via Web Console:**

1. Navigate to Observe → Logs
2. Select project
3. Filter by pod, container, or search terms
4. View streaming or historical logs

**Via Kibana:**

1. Access Kibana console
2. Create index patterns
3. Build queries and filters
4. Create visualizations and dashboards
5. Set up alerts on log patterns

### Log Aggregation Strategies

**Centralized logging benefits:**

* Single interface for all logs
* Long-term log retention
* Advanced search capabilities
* Correlation across services
* Compliance and audit trails

**Best practices:**

* **Structured logging**: Use JSON format for better searchability
* **Log levels**: Implement appropriate logging levels (DEBUG, INFO, WARN, ERROR)
* **Correlation IDs**: Track requests across services
* **Retention policies**: Balance storage costs with retention needs
* **Sensitive data**: Avoid logging passwords, tokens, PII

---

## High Availability and Disaster Recovery

### High Availability Strategies

**Control plane HA:**

* Multiple control plane nodes (minimum 3)
* etcd clustering for state storage
* Load-balanced API servers
* Automatic leader election

**Application HA:**

* Multiple pod replicas
* Pod anti-affinity to spread across nodes
* Readiness and liveness probes
* Graceful shutdown handling

**Infrastructure HA:**

* Multiple worker nodes across availability zones
* Redundant networking
* Replicated storage systems
* Load balancers for ingress traffic

### Backup Strategies

**What to backup:**

* **etcd**: Cluster state and configuration
* **Persistent volumes**: Application data
* **Configuration files**: Custom resources, secrets, configmaps
* **CI/CD pipelines**: Build and deployment configurations

**Backup tools:**

* **OADP (OpenShift API for Data Protection)**: Based on Velero
* **etcd snapshots**: Native etcd backup
* **Storage snapshots**: Volume-level backups
* **GitOps**: Configuration stored in Git repositories

**Creating etcd backup:**

\`\`\`bash
# Run etcd backup (on control plane node)
/usr/local/bin/cluster-backup.sh /backup/location

# Verify backup
ls -lh /backup/location
\`\`\`

**Using OADP/Velero:**

\`\`\`bash
# Install OADP operator via OperatorHub

# Create backup
velero backup create my-backup --include-namespaces my-app

# List backups
velero backup get

# Restore from backup
velero restore create --from-backup my-backup

# Scheduled backups
velero schedule create daily-backup --schedule="0 2 * * *" --include-namespaces my-app
\`\`\`

### Disaster Recovery Planning

**RTO (Recovery Time Objective):**

* How quickly must services be restored?
* Determines architecture and backup frequency

**RPO (Recovery Point Objective):**

* How much data loss is acceptable?
* Determines backup frequency and replication strategy

**DR best practices:**

* **Regular backups**: Automated, scheduled backups
* **Test restores**: Regularly verify backup integrity
* **Documentation**: Maintain recovery procedures
* **Multiple backup locations**: Store backups off-site
* **Disaster simulation**: Practice recovery scenarios

---

## Configuration Management at Scale

### GitOps Approach

Store all configurations in Git repositories:

* **Version control**: Track all changes
* **Code review**: Approve changes through pull requests
* **Rollback**: Easy revert to previous configurations
* **Audit trail**: Complete change history

**Tools:**

* **ArgoCD**: Declarative GitOps for Kubernetes
* **Flux**: GitOps operator for cluster sync
* **OpenShift GitOps**: Red Hat's ArgoCD distribution

### Configuration Strategies

**Environment promotion:**

\`\`\`
Development → Staging → Production
\`\`\`

* Use separate Git branches or repos
* Promote tested configurations
* Environment-specific overlays (Kustomize)

**Secrets management:**

* **Sealed Secrets**: Encrypt secrets in Git
* **External Secrets Operator**: Integrate with vault/cloud secret managers
* **HashiCorp Vault**: Enterprise secrets management

### Infrastructure as Code

**Benefits:**

* **Reproducible infrastructure**: Recreate environments consistently
* **Automated deployment**: CI/CD for infrastructure
* **Reduced errors**: Eliminate manual configuration
* **Documentation**: Code documents infrastructure

**Tools:**

* **Terraform**: Multi-cloud infrastructure provisioning
* **Ansible**: Configuration management and automation
* **Operators**: Kubernetes-native automation

---

## Performance Optimization

### Resource Management

**Requests vs Limits:**

* **Requests**: Guaranteed minimum resources
* **Limits**: Maximum resources allowed

\`\`\`yaml
resources:
  requests:
    cpu: 250m
    memory: 512Mi
  limits:
    cpu: 500m
    memory: 1Gi
\`\`\`

**Right-sizing workloads:**

* Monitor actual resource usage
* Set requests based on typical usage
* Set limits with headroom for spikes
* Avoid over-provisioning

### Horizontal Pod Autoscaling

**Automatic scaling based on metrics:**

\`\`\`bash
# Create HPA based on CPU
oc autoscale deployment/my-app --min=2 --max=10 --cpu-percent=80

# Create HPA based on custom metrics
oc create -f - <<EOF
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
EOF
\`\`\`

### Cluster Capacity Planning

**Monitoring capacity:**

* Track node resource utilization
* Identify resource bottlenecks
* Plan for growth
* Optimize resource allocation

**Scaling strategies:**

* **Vertical scaling**: Increase node sizes
* **Horizontal scaling**: Add more nodes
* **Cluster autoscaling**: Automatic node provisioning

---

## Security Hardening

### Security Best Practices

**Image security:**

* Use minimal base images
* Scan images for vulnerabilities
* Sign images for verification
* Use private registries
* Regular image updates

**Network security:**

* Implement network policies
* Use TLS for all communications
* Segment networks by security zones
* Monitor network traffic

**Access control:**

* Principle of least privilege
* Regular access reviews
* MFA for administrators
* Service account security

**Runtime security:**

* Security Context Constraints
* Pod Security Standards
* Runtime monitoring
* Intrusion detection

### Compliance and Auditing

**Audit logging:**

* Enable Kubernetes audit logs
* Log authentication events
* Track API access
* Monitor privilege escalation

**Compliance frameworks:**

* PCI-DSS for payment processing
* HIPAA for healthcare data
* SOC 2 for service organizations
* GDPR for data privacy

---

## Key Takeaways

* Persistent storage provides data durability through PVs, PVCs, and storage classes
* Dynamic provisioning automates storage allocation on demand
* Network policies control pod-to-pod communication for security
* Built-in monitoring with Prometheus, Alertmanager, and Grafana provides comprehensive observability
* Centralized logging (EFK stack) aggregates logs for analysis and troubleshooting
* High availability requires redundant infrastructure across control plane and applications
* Regular backups and disaster recovery planning protect against data loss
* GitOps and infrastructure-as-code enable version-controlled configuration management
* Resource requests and limits optimize cluster capacity utilization
* Horizontal pod autoscaling dynamically adjusts application capacity
* Security hardening requires multiple layers of defense across images, network, access, and runtime

---

**Next in this series**: Part 10 will provide a comprehensive production deployment guide, covering pre-flight checks, deployment workflows, troubleshooting strategies, and operational best practices for running production workloads on OpenShift.
`,tC=`# API Documentation Standards

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
`,rC=`# Authentication & Authorization

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
`,iC=`# Error Handling

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
`,oC=`# HTTP Basics for REST

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
`,sC=`# HTTP Status Codes

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
`,aC=`# API Performance & Optimization

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
`,lC=`# Pagination, Filtering & Sorting in APIs

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
`,cC=`# Rate Limiting & Throttling

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
`,uC=`# Real-World REST API Patterns

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
`,dC=`# Request & Response Format in APIs

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
`,pC=`# Resource Design in APIs

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
`,hC=`# REST API Fundamentals

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
`,fC=`# Security Best Practices for APIs

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
`,mC=`# Testing REST APIs

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
`,gC=`# Validation & Data Integrity in APIs

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
`,yC=`# Versioning Strategies in APIs

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
`,vC="",wC=`# How to Create a Basic REST API from Scratch

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
`,bC="",xC="",kC="",SC="",CC="",TC=`---
title: Designing Before Implementation: When It Helps
date: 2026-01-15
tags: ['Software Design', 'Developer Practices']
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
`,PC=`---
title: Documentation as Code: A Modern Approach
date: 2024-01-10
tags: ['Documentation', 'Developer Practices', 'DevOps & Platforms']
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
`,EC=`---
title: Error Handling as Part of Design
date: 2026-01-18
tags: ['Software Design', 'Developer Practices']
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
`,AC=`---
title: "What I Learned About Technical Writing "
date: 2026-01-23
tags: ['Technical Writing', 'Documentation', 'Developer Practices']
---

Let's be honest, most technical documentation is terrible. You know it, I know it, and that frustrated developer at 2 AM googling "how to implement OAuth" definitely knows it. After completing Google's Technical Writing course, I finally understand why—and more importantly, how to fix it.

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
`,IC=`---
title: The Impact of Naming on Long-Term Maintainability
date: 2026-01-06
tags: ['Software Design', 'Developer Practices']
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
`,RC="# LeetCode 238. Product of Array Except Self\n\n**Difficulty:** Medium\n\n**Topics:** Arrays, Prefix Sum\n\n**Problem Link:** [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)\n\n---\n\n## Problem Statement\n\nGiven an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a **32-bit** integer.\n\nYou must write an algorithm that runs in **O(n) time** and **without using the division operation**.\n\n**Example 1:**\n\nInput: nums = `[1,2,3,4]`\nOutput: `[24,12,8,6]`\n\n**Example 2:**\n\nInput: nums = `[-1,1,0,-3,3]`\nOutput: `[0,0,9,0,0]`\n\n---\n\n## Java\n\n```java\nclass Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int ans[] = new int[n];\n        int prefix[] = new int[n];\n        int suffix[] = new int[n];\n\n        prefix[0] = 1;\n        for (int i = 1; i < n; ++i) {\n            prefix[i] = prefix[i-1] * nums[i-1];\n        }\n\n        suffix[n-1] = 1;\n        for (int i = n - 2; i >= 0; --i) {\n            suffix[i] = suffix[i+1] * nums[i+1];\n        }\n\n        for (int i = 0; i < n; ++i) {\n            ans[i] = prefix[i] * suffix[i];\n        }\n\n        return ans;\n    }\n}\n```\n\n## Explanation\n\n- The `productExceptSelf` method takes an integer array `nums` and returns an array `ans` where each element at index `i` contains the product of all elements in `nums` except `nums[i]`.\n\n- Three arrays are created:\n  - `ans[]` - stores the final result\n  - `prefix[]` - stores the product of all elements to the left of each index\n  - `suffix[]` - stores the product of all elements to the right of each index\n\n- **Building the prefix array:**\n  - `prefix[0]` is initialized to `1` since there are no elements to the left of the first element\n  - The `for` loop iterates from index `1` to `n-1`\n  - For each index `i`, `prefix[i]` is calculated as `prefix[i-1] * nums[i-1]`\n  - This means `prefix[i]` contains the product of all elements before index `i`\n\n- **Building the suffix array:**\n  - `suffix[n-1]` is initialized to `1` since there are no elements to the right of the last element\n  - The `for` loop iterates backwards from index `n-2` to `0`\n  - For each index `i`, `suffix[i]` is calculated as `suffix[i+1] * nums[i+1]`\n  - This means `suffix[i]` contains the product of all elements after index `i`\n\n- **Computing the final answer:**\n  - The final `for` loop iterates through all indices\n  - For each index `i`, `ans[i]` is calculated as `prefix[i] * suffix[i]`\n  - This gives the product of all elements except `nums[i]`, since:\n    - `prefix[i]` = product of all elements before `i`\n    - `suffix[i]` = product of all elements after `i`\n    - Their product excludes only `nums[i]`\n\n- The method returns the `ans` array containing the desired products.\n\n---\n\n## Time Complexity & Space Complexity\n\n### Time Complexity: **O(n)**\n\nThe algorithm performs three separate passes through the array:\n\n- **First pass:** Building the `prefix` array by iterating from index `1` to `n-1`\n- **Second pass:** Building the `suffix` array by iterating from index `n-2` to `0`\n- **Third pass:** Computing the final `ans` array by iterating through all indices\n\nEach pass visits every element exactly once, and all operations within the loops (multiplication, assignment) run in **constant time** `O(1)`.\n\nSince there are three sequential loops, each taking `O(n)` time, the total time complexity is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.\n\n---\n\n### Space Complexity: **O(n)**\n\nThe solution uses three additional arrays:\n\n- `ans[]` of size `n` - stores the final result\n- `prefix[]` of size `n` - stores prefix products\n- `suffix[]` of size `n` - stores suffix products\n\nEach array requires linear space proportional to the input size.\n\nThe total auxiliary space used is `O(n) + O(n) + O(n) = O(3n)`, which simplifies to **O(n)**.\n\n**Note:** If the output array `ans[]` is not counted towards space complexity (as per some conventions), the space complexity would still be **O(n)** due to the `prefix` and `suffix` arrays.\n\n---\n\n## Key Takeaways\n\n- The problem is solved using the **prefix-suffix product approach**, avoiding division.\n- Two auxiliary arrays (`prefix` and `suffix`) store cumulative products from left and right respectively.\n- The **prefix array** at index `i` contains the product of all elements before index `i`.\n- The **suffix array** at index `i` contains the product of all elements after index `i`.\n- Multiplying `prefix[i]` and `suffix[i]` gives the product of all elements except `nums[i]`.\n- The algorithm handles **edge cases** naturally, including arrays with zeros.\n- The solution achieves **O(n) time complexity** with three linear passes.\n- **No division operation** is used, satisfying the problem constraint.\n- The approach can be optimized to **O(1) extra space** by computing prefix and suffix products directly in the output array.",DC=`---
title: README Files As Technical Communication
date: 2026-01-10
tags: ['Documentation', 'Technical Writing', 'Developer Practices']
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
`,MC=`---
title: Scalability Considerations At A Basic Level
date: 2026-01-09
tags: ['Software Design', 'Developer Practices']
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
`,OC=`---
title: Why Documentation Is More Than Just Writing
date: 2026-01-20
tags: ['Documentation', 'Technical Writing', 'Developer Practices']
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
`,jC=`---
title: Writing Effective API Documentation
date: 2024-01-10
tags: ['Documentation', 'Technical Writing', 'Developer Practices']
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
`,LC=Object.assign({"/src/content/docs/hackerrank-java/input-output.md":jS,"/src/content/docs/hackerrank-java/introduction.md":LS,"/src/content/docs/introduction/welcome.md":NS,"/src/content/docs/leetcode/can-place-flowers.md":_S,"/src/content/docs/leetcode/gcd-strings.md":FS,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":zS,"/src/content/docs/leetcode/kids-with-candies.md":BS,"/src/content/docs/leetcode/merge-string-alternatively.md":VS,"/src/content/docs/leetcode/product-of-array-except-self.md":US,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":HS,"/src/content/docs/leetcode/reverse-words-in-string.md":qS,"/src/content/docs/leetcode/string-compression.md":WS,"/src/content/docs/openshift-redhat/part-1-introduction.md":$S,"/src/content/docs/openshift-redhat/part-10-production.md":GS,"/src/content/docs/openshift-redhat/part-2-container-tools.md":KS,"/src/content/docs/openshift-redhat/part-3-kubernetes.md":YS,"/src/content/docs/openshift-redhat/part-4-openshift.md":JS,"/src/content/docs/openshift-redhat/part-5-operatingmachines.md":QS,"/src/content/docs/openshift-redhat/part-6-cli-tools.md":XS,"/src/content/docs/openshift-redhat/part-7-deployment.md":ZS,"/src/content/docs/openshift-redhat/part-8-access-control.md":eC,"/src/content/docs/openshift-redhat/part-9-features.md":nC,"/src/content/docs/rest-api/api-doc-strategy.md":tC,"/src/content/docs/rest-api/authentication-and-authorization.md":rC,"/src/content/docs/rest-api/error-handling.md":iC,"/src/content/docs/rest-api/http-basics.md":oC,"/src/content/docs/rest-api/http-status-codes.md":sC,"/src/content/docs/rest-api/optimization.md":aC,"/src/content/docs/rest-api/pagination.md":lC,"/src/content/docs/rest-api/rate-limiting.md":cC,"/src/content/docs/rest-api/real-patterns.md":uC,"/src/content/docs/rest-api/request-response-format.md":dC,"/src/content/docs/rest-api/resource-design.md":pC,"/src/content/docs/rest-api/rest-api-fundamentals.md":hC,"/src/content/docs/rest-api/security.md":fC,"/src/content/docs/rest-api/testing-reat-api.md":mC,"/src/content/docs/rest-api/validation.md":gC,"/src/content/docs/rest-api/versioning.md":yC,"/src/content/docs/tutorials/connect-mongodb.md":vC,"/src/content/docs/tutorials/create-basic-rest-api.md":wC,"/src/content/docs/tutorials/create-db-table.md":bC,"/src/content/docs/tutorials/handle-errors-in-java.md":xC,"/src/content/docs/tutorials/install-git.md":kC,"/src/content/docs/tutorials/set-up-git.md":SC,"/src/content/docs/tutorials/test-api.md":CC}),Vv=Object.assign({"/src/content/blogs/design-before-implementation.md":TC,"/src/content/blogs/documentation-as-code.md":PC,"/src/content/blogs/error-handling.md":EC,"/src/content/blogs/google-technical-writer-course.md":AC,"/src/content/blogs/impact-of-naming.md":IC,"/src/content/blogs/product-of-array-except-self.md":RC,"/src/content/blogs/readme-files.md":DC,"/src/content/blogs/scalability.md":MC,"/src/content/blogs/why-documentation-is-more-than-just-writing.md":OC,"/src/content/blogs/writing-effective-api-documentation.md":jC});function e4(e){const n=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,t=e.match(n);if(!t)return{frontmatter:{},body:e};const r=t[1],i=t[2],o={};return r.split(`
`).forEach(s=>{const[a,...l]=s.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const u=d.replace(/'/g,'"');o[a.trim()]=JSON.parse(u)}else o[a.trim()]=d}}),{frontmatter:o,body:i}}function NC(e){const n=e.split(`
`);for(const t of n){if(t.startsWith("# "))return t.substring(2).trim();const r=t.match(/^\d+\.\s+(.+)$/);if(r)return r[1].trim()}return"Untitled"}function n4(){const e={},n={},t={introduction:"Home","rest-api":"BookOpen",tutorials:"Code",reference:"FileText"};Object.keys(LC).forEach(o=>{const a=o.split("/")[4];if(!e[a]){const l=a.split("-").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ");e[a]={slug:a,title:l,icon:t[a]||"FileText",items:[]}}n[a]||(n[a]=[]),n[a].push(o)}),Object.keys(e).forEach(o=>{e[o].items=t4(n[o],o)});const r=["introduction","rest-api","openshift-redhat","leetcode","hackerrank-java","hackerrank-algorithms","hackerrank-datastructures","hackerrank-sql","tutorials"],i=Object.values(e);return i.sort((o,s)=>{const a=r.indexOf(o.slug),l=r.indexOf(s.slug);return a===-1&&l===-1?o.slug.localeCompare(s.slug):a===-1?1:l===-1?-1:a-l}),{categories:i}}function t4(e,n){const t=[];return e.forEach(r=>{const i=r.replace(`/src/content/docs/${n}/`,"").replace(".md",""),o=i.split("/"),s=LC[r],a=NC(s);a!=="Untitled"&&_C(t,o,i,a)}),FC(t),t}function _C(e,n,t,r){const i=n[0];let o=e.find(s=>s.slug===i);o||(o={slug:i,title:n.length>1?i.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):r,items:n.length>1?[]:void 0},e.push(o)),n.length>1?_C(o.items,n.slice(1),t,r):(o.slug=t,o.title=r,o.items=void 0)}function FC(e){e.sort((n,t)=>{if(n.slug.startsWith("part-")&&t.slug.startsWith("part-")){const r=parseInt(n.slug.split("-")[1]),i=parseInt(t.slug.split("-")[1]);return r-i}return n.slug.localeCompare(t.slug)}),e.forEach(n=>{n.items&&FC(n.items)})}function r4(){const e=[];return Object.keys(Vv).forEach(n=>{const r=n.split("/").pop().replace(".md",""),i=Vv[n],{frontmatter:o,body:s}=e4(i),a=o.title||NC(s);let l="";const c=s.split(`

`).filter(d=>d.trim());for(const d of c){const u=d.trim();if(!u.startsWith("#")){l=u.replace(/^[#\s]*/,"").trim();break}}e.push({slug:r,title:a,description:l,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[]})}),e.sort((n,t)=>new Date(t.date).getTime()-new Date(n.date).getTime()),e}const Pi=n4(),am=r4();function zC(e){for(const n of Pi.categories){const t=n.items.find(r=>r.slug===e);if(t)return t}}const i4=["welcome","rest-api-fundamentals","rest-api-basics","introduction","getting-started"];function Uv(){for(const e of i4)if(zC(e))return e;if(Pi.categories.length>0&&Pi.categories[0].items.length>0)return Pi.categories[0].items[0].slug}function o4(e){return am.find(n=>n.slug===e)}function s4(){const e=new Set;return am.forEach(n=>n.tags.forEach(t=>e.add(t))),Array.from(e).sort()}const a4={FileText:ya,BookOpen:uf,Rocket:OI,Code:df,Settings:jI,Home:U0};function l4({isOpen:e,onClose:n}){const t=or(),[r,i]=x.useState(Pi.categories.map(a=>a.slug)),o=a=>{i(l=>l.includes(a)?l.filter(c=>c!==a):[...l,a])},s=w.jsxs("div",{className:"h-full overflow-y-auto py-6 px-4",children:[w.jsx("div",{className:"lg:hidden flex justify-end mb-4",children:w.jsx(Oe,{variant:"ghost",size:"icon",onClick:n,children:w.jsx(hf,{className:"h-5 w-5"})})}),w.jsx("nav",{className:"space-y-6",children:Pi.categories.map(a=>{const l=a4[a.icon]||ya,c=r.includes(a.slug);return w.jsxs("div",{children:[w.jsxs("button",{onClick:()=>o(a.slug),className:"w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors",children:[w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx(l,{className:"h-4 w-4"}),a.title]}),w.jsx(ae.span,{animate:{rotate:c?180:0},transition:{duration:.2},children:w.jsx(CI,{className:"h-4 w-4"})})]}),w.jsx(Pv,{initial:!1,children:c&&w.jsx(ae.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden ml-4 mt-1 space-y-0.5 border-l border-border",children:a.items.map(d=>{const u=t.pathname===`/docs/${d.slug}`;return w.jsx("li",{children:w.jsxs(We,{to:`/docs/${d.slug}`,onClick:n,className:zn("block px-4 py-1.5 text-sm transition-colors relative",u?"text-primary font-medium":"text-muted-foreground hover:text-foreground"),children:[u&&w.jsx(ae.div,{layoutId:"sidebar-indicator",className:"absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"}),d.title]})},d.slug)})})})]},a.slug)})})]});return w.jsxs(w.Fragment,{children:[w.jsx("aside",{className:"hidden lg:block w-sidebar flex-shrink-0 border-r border-border bg-sidebar sticky top-nav h-[calc(100vh-var(--nav-height))] overflow-hidden",children:s}),w.jsx(Pv,{children:e&&w.jsxs(w.Fragment,{children:[w.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40",onClick:n}),w.jsx(ae.aside,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25,stiffness:200},className:"lg:hidden fixed left-0 top-nav bottom-0 w-sidebar bg-sidebar border-r border-border z-50",children:s})]})})]})}function c4({headings:e}){const[n,t]=x.useState("");return x.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&t(o.target.id)})},{rootMargin:"-80px 0% -80% 0%"});return e.forEach(({id:i})=>{const o=document.getElementById(i);o&&r.observe(o)}),()=>r.disconnect()},[e]),e.length===0?null:w.jsxs("div",{className:"sticky top-24",children:[w.jsx("h4",{className:"text-sm font-semibold mb-4",children:"On this page"}),w.jsx("nav",{className:"space-y-1",children:e.map(r=>w.jsx("a",{href:`#${r.id}`,className:zn("block text-sm py-1 transition-colors border-l-2 pl-3",r.level===3&&"ml-3",n===r.id?"border-primary text-primary font-medium":"border-transparent text-muted-foreground hover:text-foreground hover:border-border"),children:r.text},r.id))})]})}function u4({children:e,headings:n=[]}){const[t,r]=x.useState(!1);return w.jsxs("div",{className:"flex min-h-[calc(100vh-var(--nav-height))]",children:[w.jsx(l4,{isOpen:t,onClose:()=>r(!1)}),w.jsxs("div",{className:"flex-1 flex",children:[w.jsxs("main",{className:"flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[w.jsx("div",{className:"lg:hidden mb-6",children:w.jsxs(Oe,{variant:"outline",size:"sm",onClick:()=>r(!0),className:"gap-2",children:[w.jsx(H0,{className:"h-4 w-4"}),"Menu"]})}),w.jsx("div",{className:"max-w-3xl mx-auto overflow-x-auto",children:e})]}),n.length>0&&w.jsx("aside",{className:"hidden xl:block w-64 flex-shrink-0 py-8 pr-4",children:w.jsx(c4,{headings:n})})]})]})}function d4(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const p4=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,h4=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,f4={};function Hv(e,n){return(f4.jsx?h4:p4).test(e)}const m4=/[ \t\n\f\r]/g;function g4(e){return typeof e=="object"?e.type==="text"?qv(e.value):!1:qv(e)}function qv(e){return e.replace(m4,"")===""}class Ta{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ta.prototype.normal={};Ta.prototype.property={};Ta.prototype.space=void 0;function BC(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ta(t,r,n)}function Xp(e){return e.toLowerCase()}class En{constructor(n,t){this.attribute=t,this.property=n}}En.prototype.attribute="";En.prototype.booleanish=!1;En.prototype.boolean=!1;En.prototype.commaOrSpaceSeparated=!1;En.prototype.commaSeparated=!1;En.prototype.defined=!1;En.prototype.mustUseProperty=!1;En.prototype.number=!1;En.prototype.overloadedBoolean=!1;En.prototype.property="";En.prototype.spaceSeparated=!1;En.prototype.space=void 0;let y4=0;const te=Ni(),_e=Ni(),Zp=Ni(),z=Ni(),ve=Ni(),mo=Ni(),Dn=Ni();function Ni(){return 2**++y4}const eh=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:_e,commaOrSpaceSeparated:Dn,commaSeparated:mo,number:z,overloadedBoolean:Zp,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),id=Object.keys(eh);class lm extends En{constructor(n,t,r,i){let o=-1;if(super(n,t),Wv(this,"space",i),typeof r=="number")for(;++o<id.length;){const s=id[o];Wv(this,id[o],(r&eh[s])===eh[s])}}}lm.prototype.defined=!0;function Wv(e,n,t){t&&(e[n]=t)}function Go(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const o=new lm(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,t[Xp(r)]=r,t[Xp(o.attribute)]=r}return new Ta(n,t,e.space)}const VC=Go({properties:{ariaActiveDescendant:null,ariaAtomic:_e,ariaAutoComplete:null,ariaBusy:_e,ariaChecked:_e,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:_e,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:_e,ariaFlowTo:ve,ariaGrabbed:_e,ariaHasPopup:null,ariaHidden:_e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:z,ariaLive:null,ariaModal:_e,ariaMultiLine:_e,ariaMultiSelectable:_e,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:_e,ariaReadOnly:_e,ariaRelevant:null,ariaRequired:_e,ariaRoleDescription:ve,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:_e,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function UC(e,n){return n in e?e[n]:n}function HC(e,n){return UC(e,n.toLowerCase())}const v4=Go({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:mo,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:ve,autoFocus:te,autoPlay:te,blocking:ve,capture:null,charSet:null,checked:te,cite:null,className:ve,cols:z,colSpan:null,content:null,contentEditable:_e,controls:te,controlsList:ve,coords:z|mo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Zp,draggable:_e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:ve,height:z,hidden:Zp,high:z,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:ve,itemRef:ve,itemScope:te,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:z,pattern:null,ping:ve,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:ve,required:te,reversed:te,rows:z,rowSpan:z,sandbox:ve,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:_e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:_e,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:_e,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:te,disableRemotePlayback:te,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:HC}),w4=Go({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dn,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:mo,g2:mo,glyphName:mo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Dn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dn,rev:Dn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dn,requiredFeatures:Dn,requiredFonts:Dn,requiredFormats:Dn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Dn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dn,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:UC}),qC=Go({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),WC=Go({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:HC}),$C=Go({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),b4={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},x4=/[A-Z]/g,$v=/-[a-z]/g,k4=/^data[-\w.:]+$/i;function S4(e,n){const t=Xp(n);let r=n,i=En;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&k4.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace($v,T4);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!$v.test(o)){let s=o.replace(x4,C4);s.charAt(0)!=="-"&&(s="-"+s),n="data"+s}}i=lm}return new i(r,n)}function C4(e){return"-"+e.toLowerCase()}function T4(e){return e.charAt(1).toUpperCase()}const P4=BC([VC,v4,qC,WC,$C],"html"),cm=BC([VC,w4,qC,WC,$C],"svg");function E4(e){return e.join(" ").trim()}var um={},Gv=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,A4=/\n/g,I4=/^\s*/,R4=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,D4=/^:\s*/,M4=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,O4=/^[;\s]*/,j4=/^\s+|\s+$/g,L4=`
`,Kv="/",Yv="*",di="",N4="comment",_4="declaration";function F4(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(m){var g=m.match(A4);g&&(t+=g.length);var b=m.lastIndexOf(L4);r=~b?m.length-b:r+m.length}function o(){var m={line:t,column:r};return function(g){return g.position=new s(m),c(),g}}function s(m){this.start=m,this.end={line:t,column:r},this.source=n.source}s.prototype.content=e;function a(m){var g=new Error(n.source+":"+t+":"+r+": "+m);if(g.reason=m,g.filename=n.source,g.line=t,g.column=r,g.source=e,!n.silent)throw g}function l(m){var g=m.exec(e);if(g){var b=g[0];return i(b),e=e.slice(b.length),g}}function c(){l(I4)}function d(m){var g;for(m=m||[];g=u();)g!==!1&&m.push(g);return m}function u(){var m=o();if(!(Kv!=e.charAt(0)||Yv!=e.charAt(1))){for(var g=2;di!=e.charAt(g)&&(Yv!=e.charAt(g)||Kv!=e.charAt(g+1));)++g;if(g+=2,di===e.charAt(g-1))return a("End of comment missing");var b=e.slice(2,g-2);return r+=2,i(b),e=e.slice(g),r+=2,m({type:N4,comment:b})}}function h(){var m=o(),g=l(R4);if(g){if(u(),!l(D4))return a("property missing ':'");var b=l(M4),f=m({type:_4,property:Jv(g[0].replace(Gv,di)),value:b?Jv(b[0].replace(Gv,di)):di});return l(O4),f}}function p(){var m=[];d(m);for(var g;g=h();)g!==!1&&(m.push(g),d(m));return m}return c(),p()}function Jv(e){return e?e.replace(j4,di):di}var z4=F4,B4=Il&&Il.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(um,"__esModule",{value:!0});um.default=U4;const V4=B4(z4);function U4(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,V4.default)(e),i=typeof n=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?n(s,a,o):a&&(t=t||{},t[s]=a)}),t}var Xc={};Object.defineProperty(Xc,"__esModule",{value:!0});Xc.camelCase=void 0;var H4=/^--[a-zA-Z0-9_-]+$/,q4=/-([a-z])/g,W4=/^[^-]+$/,$4=/^-(webkit|moz|ms|o|khtml)-/,G4=/^-(ms)-/,K4=function(e){return!e||W4.test(e)||H4.test(e)},Y4=function(e,n){return n.toUpperCase()},Qv=function(e,n){return"".concat(n,"-")},J4=function(e,n){return n===void 0&&(n={}),K4(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(G4,Qv):e=e.replace($4,Qv),e.replace(q4,Y4))};Xc.camelCase=J4;var Q4=Il&&Il.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},X4=Q4(um),Z4=Xc;function nh(e,n){var t={};return!e||typeof e!="string"||(0,X4.default)(e,function(r,i){r&&i&&(t[(0,Z4.camelCase)(r,n)]=i)}),t}nh.default=nh;var eF=nh;const nF=wc(eF),GC=KC("end"),dm=KC("start");function KC(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function tF(e){const n=dm(e),t=GC(e);if(n&&t)return{start:n,end:t}}function Is(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Xv(e.position):"start"in e||"end"in e?Xv(e):"line"in e||"column"in e?th(e):""}function th(e){return Zv(e&&e.line)+":"+Zv(e&&e.column)}function Xv(e){return th(e&&e.start)+"-"+th(e&&e.end)}function Zv(e){return e&&typeof e=="number"?e:1}class sn extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(s=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Is(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}sn.prototype.file="";sn.prototype.name="";sn.prototype.reason="";sn.prototype.message="";sn.prototype.stack="";sn.prototype.column=void 0;sn.prototype.line=void 0;sn.prototype.ancestors=void 0;sn.prototype.cause=void 0;sn.prototype.fatal=void 0;sn.prototype.place=void 0;sn.prototype.ruleId=void 0;sn.prototype.source=void 0;const pm={}.hasOwnProperty,rF=new Map,iF=/[A-Z]/g,oF=new Set(["table","tbody","thead","tfoot","tr"]),sF=new Set(["td","th"]),YC="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function aF(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=mF(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=fF(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?cm:P4,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=JC(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function JC(e,n,t){if(n.type==="element")return lF(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return cF(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return dF(e,n,t);if(n.type==="mdxjsEsm")return uF(e,n);if(n.type==="root")return pF(e,n,t);if(n.type==="text")return hF(e,n)}function lF(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=cm,e.schema=i),e.ancestors.push(n);const o=XC(e,n.tagName,!1),s=gF(e,n);let a=fm(e,n);return oF.has(n.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!g4(l):!0})),QC(e,s,o,n),hm(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function cF(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}sa(e,n.position)}function uF(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);sa(e,n.position)}function dF(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=cm,e.schema=i),e.ancestors.push(n);const o=n.name===null?e.Fragment:XC(e,n.name,!0),s=yF(e,n),a=fm(e,n);return QC(e,s,o,n),hm(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function pF(e,n,t){const r={};return hm(r,fm(e,n)),e.create(n,e.Fragment,r,t)}function hF(e,n){return n.value}function QC(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function hm(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function fF(e,n,t){return r;function r(i,o,s,a){const c=Array.isArray(s.children)?t:n;return a?c(o,s,a):c(o,s)}}function mF(e,n){return t;function t(r,i,o,s){const a=Array.isArray(o.children),l=dm(r);return n(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function gF(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&pm.call(n.properties,i)){const o=vF(e,i,n.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&sF.has(n.tagName)?r=a:t[s]=a}}if(r){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function yF(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(t,e.evaluater.evaluateExpression(a.argument))}else sa(e,n.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else sa(e,n.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function fm(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:rF;for(;++r<n.children.length;){const o=n.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const c=i.get(l)||0;s=l+"-"+c,i.set(l,c+1)}}const a=JC(e,o,s);a!==void 0&&t.push(a)}return t}function vF(e,n,t){const r=S4(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?d4(t):E4(t)),r.property==="style"){let i=typeof t=="object"?t:wF(e,String(t));return e.stylePropertyNameCase==="css"&&(i=bF(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?b4[r.property]||r.property:r.attribute,t]}}function wF(e,n){try{return nF(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new sn("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=YC+"#cannot-parse-style-attribute",i}}function XC(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let o=-1,s;for(;++o<i.length;){const a=Hv(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=Hv(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return pm.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);sa(e)}function sa(e,n){const t=new sn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=YC+"#cannot-handle-mdx-estrees-without-createevaluater",t}function bF(e){const n={};let t;for(t in e)pm.call(e,t)&&(n[xF(t)]=e[t]);return n}function xF(e){let n=e.replace(iF,kF);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function kF(e){return"-"+e.toLowerCase()}const od={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},SF={};function mm(e,n){const t=SF,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return ZC(e,r,i)}function ZC(e,n,t){if(CF(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ew(e.children,n,t)}return Array.isArray(e)?ew(e,n,t):""}function ew(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=ZC(e[i],n,t);return r.join("")}function CF(e){return!!(e&&typeof e=="object")}const nw=document.createElement("i");function gm(e){const n="&"+e+";";nw.innerHTML=n;const t=nw.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function _n(e,n,t,r){const i=e.length;let o=0,s;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)s=Array.from(r),s.unshift(n,t),e.splice(...s);else for(t&&e.splice(n,t);o<r.length;)s=r.slice(o,o+1e4),s.unshift(n,0),e.splice(...s),o+=1e4,n+=1e4}function Gn(e,n){return e.length>0?(_n(e,e.length,0,n),e):n}const tw={}.hasOwnProperty;function eT(e){const n={};let t=-1;for(;++t<e.length;)TF(n,e[t]);return n}function TF(e,n){let t;for(t in n){const i=(tw.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let s;if(o)for(s in o){tw.call(i,s)||(i[s]=[]);const a=o[s];PF(i[s],Array.isArray(a)?a:a?[a]:[])}}}function PF(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);_n(e,0,0,r)}function nT(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function gt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pn=ni(/[A-Za-z]/),rn=ni(/[\dA-Za-z]/),EF=ni(/[#-'*+\--9=?A-Z^-~]/);function mc(e){return e!==null&&(e<32||e===127)}const rh=ni(/\d/),AF=ni(/[\dA-Fa-f]/),IF=ni(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function ye(e){return e!==null&&(e<0||e===32)}function ie(e){return e===-2||e===-1||e===32}const Zc=ni(new RegExp("\\p{P}|\\p{S}","u")),Oi=ni(/\s/);function ni(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Ko(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const o=e.charCodeAt(t);let s="";if(o===37&&rn(e.charCodeAt(t+1))&&rn(e.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(n.push(e.slice(r,t),encodeURIComponent(s)),r=t+i+1,s=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function ce(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return ie(l)?(e.enter(t),a(l)):n(l)}function a(l){return ie(l)&&o++<i?(e.consume(l),a):(e.exit(t),n(l))}}const RF={tokenize:DF};function DF(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ce(e,n,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return J(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const MF={tokenize:OF},rw={tokenize:jF};function OF(e){const n=this,t=[];let r=0,i,o,s;return a;function a(v){if(r<t.length){const S=t[r];return n.containerState=S[1],e.attempt(S[0].continuation,l,c)(v)}return c(v)}function l(v){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&y();const S=n.events.length;let T=S,C;for(;T--;)if(n.events[T][0]==="exit"&&n.events[T][1].type==="chunkFlow"){C=n.events[T][1].end;break}f(r);let A=S;for(;A<n.events.length;)n.events[A][1].end={...C},A++;return _n(n.events,T+1,0,n.events.slice(S)),n.events.length=A,c(v)}return a(v)}function c(v){if(r===t.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return m(v);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(rw,d,u)(v)}function d(v){return i&&y(),f(r),h(v)}function u(v){return n.parser.lazy[n.now().line]=r!==t.length,s=n.now().offset,m(v)}function h(v){return n.containerState={},e.attempt(rw,p,m)(v)}function p(v){return r++,t.push([n.currentConstruct,n.containerState]),h(v)}function m(v){if(v===null){i&&y(),f(0),e.consume(v);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),g(v)}function g(v){if(v===null){b(e.exit("chunkFlow"),!0),f(0),e.consume(v);return}return J(v)?(e.consume(v),b(e.exit("chunkFlow")),r=0,n.interrupt=void 0,a):(e.consume(v),g)}function b(v,S){const T=n.sliceStream(v);if(S&&T.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(T),n.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<s&&(!i.events[C][1].end||i.events[C][1].end.offset>s))return;const A=n.events.length;let I=A,M,E;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){if(M){E=n.events[I][1].end;break}M=!0}for(f(r),C=A;C<n.events.length;)n.events[C][1].end={...E},C++;_n(n.events,I+1,0,n.events.slice(A)),n.events.length=C}}function f(v){let S=t.length;for(;S-- >v;){const T=t[S];n.containerState=T[1],T[0].exit.call(n,e)}t.length=v}function y(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function jF(e,n,t){return ce(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Lo(e){if(e===null||ye(e)||Oi(e))return 1;if(Zc(e))return 2}function eu(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const ih={name:"attention",resolveAll:LF,tokenize:NF};function LF(e,n){let t=-1,r,i,o,s,a,l,c,d;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const u={...e[r][1].end},h={...e[t][1].start};iw(u,-l),iw(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:u,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[t][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Gn(c,[["enter",e[r][1],n],["exit",e[r][1],n]])),c=Gn(c,[["enter",i,n],["enter",s,n],["exit",s,n],["enter",o,n]]),c=Gn(c,eu(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),c=Gn(c,[["exit",o,n],["enter",a,n],["exit",a,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(d=2,c=Gn(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):d=0,_n(e,r-1,t-r+3,c),t=r+c.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function NF(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Lo(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const c=e.exit("attentionSequence"),d=Lo(l),u=!d||d===2&&i||t.includes(l),h=!i||i===2&&d||t.includes(r);return c._open=!!(o===42?u:u&&(i||!h)),c._close=!!(o===42?h:h&&(d||!u)),n(l)}}function iw(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const _F={name:"autolink",tokenize:FF};function FF(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return pn(p)?(e.consume(p),s):p===64?t(p):c(p)}function s(p){return p===43||p===45||p===46||rn(p)?(r=1,a(p)):c(p)}function a(p){return p===58?(e.consume(p),r=0,l):(p===43||p===45||p===46||rn(p))&&r++<32?(e.consume(p),a):(r=0,c(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||mc(p)?t(p):(e.consume(p),l)}function c(p){return p===64?(e.consume(p),d):EF(p)?(e.consume(p),c):t(p)}function d(p){return rn(p)?u(p):t(p)}function u(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||rn(p))&&r++<63){const m=p===45?h:u;return e.consume(p),m}return t(p)}}const Pa={partial:!0,tokenize:zF};function zF(e,n,t){return r;function r(o){return ie(o)?ce(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||J(o)?n(o):t(o)}}const tT={continuation:{tokenize:VF},exit:UF,name:"blockQuote",tokenize:BF};function BF(e,n,t){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return t(s)}function o(s){return ie(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(s))}}function VF(e,n,t){const r=this;return i;function i(s){return ie(s)?ce(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(tT,n,t)(s)}}function UF(e){e.exit("blockQuote")}const rT={name:"characterEscape",tokenize:HF};function HF(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return IF(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const iT={name:"characterReference",tokenize:qF};function qF(e,n,t){const r=this;let i=0,o,s;return a;function a(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),l}function l(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=rn,d(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=AF,d):(e.enter("characterReferenceValue"),o=7,s=rh,d(u))}function d(u){if(u===59&&i){const h=e.exit("characterReferenceValue");return s===rn&&!gm(r.sliceSerialize(h))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return s(u)&&i++<o?(e.consume(u),d):t(u)}}const ow={partial:!0,tokenize:$F},sw={concrete:!0,name:"codeFenced",tokenize:WF};function WF(e,n,t){const r=this,i={partial:!0,tokenize:T};let o=0,s=0,a;return l;function l(C){return c(C)}function c(C){const A=r.events[r.events.length-1];return o=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,a=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===a?(s++,e.consume(C),d):s<3?t(C):(e.exit("codeFencedFenceSequence"),ie(C)?ce(e,u,"whitespace")(C):u(C))}function u(C){return C===null||J(C)?(e.exit("codeFencedFence"),r.interrupt?n(C):e.check(ow,g,S)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(C))}function h(C){return C===null||J(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(C)):ie(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ce(e,p,"whitespace")(C)):C===96&&C===a?t(C):(e.consume(C),h)}function p(C){return C===null||J(C)?u(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||J(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(C)):C===96&&C===a?t(C):(e.consume(C),m)}function g(C){return e.attempt(i,S,b)(C)}function b(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),f}function f(C){return o>0&&ie(C)?ce(e,y,"linePrefix",o+1)(C):y(C)}function y(C){return C===null||J(C)?e.check(ow,g,S)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||J(C)?(e.exit("codeFlowValue"),y(C)):(e.consume(C),v)}function S(C){return e.exit("codeFenced"),n(C)}function T(C,A,I){let M=0;return E;function E(H){return C.enter("lineEnding"),C.consume(H),C.exit("lineEnding"),N}function N(H){return C.enter("codeFencedFence"),ie(H)?ce(C,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):O(H)}function O(H){return H===a?(C.enter("codeFencedFenceSequence"),q(H)):I(H)}function q(H){return H===a?(M++,C.consume(H),q):M>=s?(C.exit("codeFencedFenceSequence"),ie(H)?ce(C,_,"whitespace")(H):_(H)):I(H)}function _(H){return H===null||J(H)?(C.exit("codeFencedFence"),A(H)):I(H)}}}function $F(e,n,t){const r=this;return i;function i(s){return s===null?t(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}const sd={name:"codeIndented",tokenize:KF},GF={partial:!0,tokenize:YF};function KF(e,n,t){const r=this;return i;function i(c){return e.enter("codeIndented"),ce(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(c):t(c)}function s(c){return c===null?l(c):J(c)?e.attempt(GF,s,l)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||J(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function l(c){return e.exit("codeIndented"),n(c)}}function YF(e,n,t){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?t(s):J(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):ce(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):J(s)?i(s):t(s)}}const JF={name:"codeText",previous:XF,resolve:QF,tokenize:ZF};function QF(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function XF(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ZF(e,n,t){let r=0,i,o;return s;function s(u){return e.enter("codeText"),e.enter("codeTextSequence"),a(u)}function a(u){return u===96?(e.consume(u),r++,a):(e.exit("codeTextSequence"),l(u))}function l(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),l):u===96?(o=e.enter("codeTextSequence"),i=0,d(u)):J(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(u))}function c(u){return u===null||u===32||u===96||J(u)?(e.exit("codeTextData"),l(u)):(e.consume(u),c)}function d(u){return u===96?(e.consume(u),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(o.type="codeTextData",c(u))}}class e3{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&as(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),as(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),as(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);as(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);as(this.left,t.reverse())}}}function as(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function oT(e){const n={};let t=-1,r,i,o,s,a,l,c;const d=new e3(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,n3(d,t)),t=n[t],c=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,t),a.unshift(r),d.splice(i,t-i+1,a))}}return _n(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function n3(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let s=t._tokenizer;s||(s=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],c={};let d,u,h=-1,p=t,m=0,g=0;const b=[g];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),u&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),u=p,p=p.next}for(p=t;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(g=h+1,b.push(g),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),h=b.length;h--;){const f=a.slice(b[h],b[h+1]),y=o.pop();l.push([y,y+f.length-1]),e.splice(y,2,f)}for(l.reverse(),h=-1;++h<l.length;)c[m+l[h][0]]=m+l[h][1],m+=l[h][1]-l[h][0]-1;return c}const t3={resolve:i3,tokenize:o3},r3={partial:!0,tokenize:s3};function i3(e){return oT(e),e}function o3(e,n){let t;return r;function r(a){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):J(a)?e.check(r3,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),n(a)}function s(a){return e.consume(a),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function s3(e,n,t){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ce(e,o,"linePrefix")}function o(s){if(s===null||J(s))return t(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):e.interrupt(r.parser.constructs.flow,t,n)(s)}}function sT(e,n,t,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return u;function u(f){return f===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(f),e.exit(o),h):f===null||f===32||f===41||mc(f)?t(f):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),g(f))}function h(f){return f===62?(e.enter(o),e.consume(f),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===62?(e.exit("chunkString"),e.exit(a),h(f)):f===null||f===60||J(f)?t(f):(e.consume(f),f===92?m:p)}function m(f){return f===60||f===62||f===92?(e.consume(f),p):p(f)}function g(f){return!d&&(f===null||f===41||ye(f))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),n(f)):d<c&&f===40?(e.consume(f),d++,g):f===41?(e.consume(f),d--,g):f===null||f===32||f===40||mc(f)?t(f):(e.consume(f),f===92?b:g)}function b(f){return f===40||f===41||f===92?(e.consume(f),g):g(f)}}function aT(e,n,t,r,i,o){const s=this;let a=0,l;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),d}function d(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?t(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):J(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),u(p))}function u(p){return p===null||p===91||p===93||J(p)||a++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!ie(p)),p===92?h:u)}function h(p){return p===91||p===92||p===93?(e.consume(p),a++,u):u(p)}}function lT(e,n,t,r,i,o){let s;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,l):t(h)}function l(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):(e.enter(o),c(h))}function c(h){return h===s?(e.exit(o),l(s)):h===null?t(h):J(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ce(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===s||h===null||J(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?u:d)}function u(h){return h===s||h===92?(e.consume(h),d):d(h)}}function Rs(e,n){let t;return r;function r(i){return J(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):ie(i)?ce(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const a3={name:"definition",tokenize:c3},l3={partial:!0,tokenize:u3};function c3(e,n,t){const r=this;let i;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return aT.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=gt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):t(p)}function l(p){return ye(p)?Rs(e,c)(p):c(p)}function c(p){return sT(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(l3,u,u)(p)}function u(p){return ie(p)?ce(e,h,"whitespace")(p):h(p)}function h(p){return p===null||J(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function u3(e,n,t){return r;function r(a){return ye(a)?Rs(e,i)(a):t(a)}function i(a){return lT(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ie(a)?ce(e,s,"whitespace")(a):s(a)}function s(a){return a===null||J(a)?n(a):t(a)}}const d3={name:"hardBreakEscape",tokenize:p3};function p3(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return J(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const h3={name:"headingAtx",resolve:f3,tokenize:m3};function f3(e,n){let t=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},_n(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])),e}function m3(e,n,t){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||ye(d)?(e.exit("atxHeadingSequence"),a(d)):t(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||J(d)?(e.exit("atxHeading"),n(d)):ie(d)?ce(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||ye(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const g3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],aw=["pre","script","style","textarea"],y3={concrete:!0,name:"htmlFlow",resolveTo:b3,tokenize:x3},v3={partial:!0,tokenize:S3},w3={partial:!0,tokenize:k3};function b3(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function x3(e,n,t){const r=this;let i,o,s,a,l;return c;function c(P){return d(P)}function d(P){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(P),u}function u(P){return P===33?(e.consume(P),h):P===47?(e.consume(P),o=!0,g):P===63?(e.consume(P),i=3,r.interrupt?n:k):pn(P)?(e.consume(P),s=String.fromCharCode(P),b):t(P)}function h(P){return P===45?(e.consume(P),i=2,p):P===91?(e.consume(P),i=5,a=0,m):pn(P)?(e.consume(P),i=4,r.interrupt?n:k):t(P)}function p(P){return P===45?(e.consume(P),r.interrupt?n:k):t(P)}function m(P){const Q="CDATA[";return P===Q.charCodeAt(a++)?(e.consume(P),a===Q.length?r.interrupt?n:O:m):t(P)}function g(P){return pn(P)?(e.consume(P),s=String.fromCharCode(P),b):t(P)}function b(P){if(P===null||P===47||P===62||ye(P)){const Q=P===47,me=s.toLowerCase();return!Q&&!o&&aw.includes(me)?(i=1,r.interrupt?n(P):O(P)):g3.includes(s.toLowerCase())?(i=6,Q?(e.consume(P),f):r.interrupt?n(P):O(P)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(P):o?y(P):v(P))}return P===45||rn(P)?(e.consume(P),s+=String.fromCharCode(P),b):t(P)}function f(P){return P===62?(e.consume(P),r.interrupt?n:O):t(P)}function y(P){return ie(P)?(e.consume(P),y):E(P)}function v(P){return P===47?(e.consume(P),E):P===58||P===95||pn(P)?(e.consume(P),S):ie(P)?(e.consume(P),v):E(P)}function S(P){return P===45||P===46||P===58||P===95||rn(P)?(e.consume(P),S):T(P)}function T(P){return P===61?(e.consume(P),C):ie(P)?(e.consume(P),T):v(P)}function C(P){return P===null||P===60||P===61||P===62||P===96?t(P):P===34||P===39?(e.consume(P),l=P,A):ie(P)?(e.consume(P),C):I(P)}function A(P){return P===l?(e.consume(P),l=null,M):P===null||J(P)?t(P):(e.consume(P),A)}function I(P){return P===null||P===34||P===39||P===47||P===60||P===61||P===62||P===96||ye(P)?T(P):(e.consume(P),I)}function M(P){return P===47||P===62||ie(P)?v(P):t(P)}function E(P){return P===62?(e.consume(P),N):t(P)}function N(P){return P===null||J(P)?O(P):ie(P)?(e.consume(P),N):t(P)}function O(P){return P===45&&i===2?(e.consume(P),G):P===60&&i===1?(e.consume(P),U):P===62&&i===4?(e.consume(P),Y):P===63&&i===3?(e.consume(P),k):P===93&&i===5?(e.consume(P),j):J(P)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(v3,K,q)(P)):P===null||J(P)?(e.exit("htmlFlowData"),q(P)):(e.consume(P),O)}function q(P){return e.check(w3,_,K)(P)}function _(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),H}function H(P){return P===null||J(P)?q(P):(e.enter("htmlFlowData"),O(P))}function G(P){return P===45?(e.consume(P),k):O(P)}function U(P){return P===47?(e.consume(P),s="",R):O(P)}function R(P){if(P===62){const Q=s.toLowerCase();return aw.includes(Q)?(e.consume(P),Y):O(P)}return pn(P)&&s.length<8?(e.consume(P),s+=String.fromCharCode(P),R):O(P)}function j(P){return P===93?(e.consume(P),k):O(P)}function k(P){return P===62?(e.consume(P),Y):P===45&&i===2?(e.consume(P),k):O(P)}function Y(P){return P===null||J(P)?(e.exit("htmlFlowData"),K(P)):(e.consume(P),Y)}function K(P){return e.exit("htmlFlow"),n(P)}}function k3(e,n,t){const r=this;return i;function i(s){return J(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):t(s)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}function S3(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Pa,n,t)}}const C3={name:"htmlText",tokenize:T3};function T3(e,n,t){const r=this;let i,o,s;return a;function a(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),l}function l(k){return k===33?(e.consume(k),c):k===47?(e.consume(k),T):k===63?(e.consume(k),v):pn(k)?(e.consume(k),I):t(k)}function c(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,m):pn(k)?(e.consume(k),y):t(k)}function d(k){return k===45?(e.consume(k),p):t(k)}function u(k){return k===null?t(k):k===45?(e.consume(k),h):J(k)?(s=u,U(k)):(e.consume(k),u)}function h(k){return k===45?(e.consume(k),p):u(k)}function p(k){return k===62?G(k):k===45?h(k):u(k)}function m(k){const Y="CDATA[";return k===Y.charCodeAt(o++)?(e.consume(k),o===Y.length?g:m):t(k)}function g(k){return k===null?t(k):k===93?(e.consume(k),b):J(k)?(s=g,U(k)):(e.consume(k),g)}function b(k){return k===93?(e.consume(k),f):g(k)}function f(k){return k===62?G(k):k===93?(e.consume(k),f):g(k)}function y(k){return k===null||k===62?G(k):J(k)?(s=y,U(k)):(e.consume(k),y)}function v(k){return k===null?t(k):k===63?(e.consume(k),S):J(k)?(s=v,U(k)):(e.consume(k),v)}function S(k){return k===62?G(k):v(k)}function T(k){return pn(k)?(e.consume(k),C):t(k)}function C(k){return k===45||rn(k)?(e.consume(k),C):A(k)}function A(k){return J(k)?(s=A,U(k)):ie(k)?(e.consume(k),A):G(k)}function I(k){return k===45||rn(k)?(e.consume(k),I):k===47||k===62||ye(k)?M(k):t(k)}function M(k){return k===47?(e.consume(k),G):k===58||k===95||pn(k)?(e.consume(k),E):J(k)?(s=M,U(k)):ie(k)?(e.consume(k),M):G(k)}function E(k){return k===45||k===46||k===58||k===95||rn(k)?(e.consume(k),E):N(k)}function N(k){return k===61?(e.consume(k),O):J(k)?(s=N,U(k)):ie(k)?(e.consume(k),N):M(k)}function O(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(e.consume(k),i=k,q):J(k)?(s=O,U(k)):ie(k)?(e.consume(k),O):(e.consume(k),_)}function q(k){return k===i?(e.consume(k),i=void 0,H):k===null?t(k):J(k)?(s=q,U(k)):(e.consume(k),q)}function _(k){return k===null||k===34||k===39||k===60||k===61||k===96?t(k):k===47||k===62||ye(k)?M(k):(e.consume(k),_)}function H(k){return k===47||k===62||ye(k)?M(k):t(k)}function G(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),n):t(k)}function U(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),R}function R(k){return ie(k)?ce(e,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):j(k)}function j(k){return e.enter("htmlTextData"),s(k)}}const ym={name:"labelEnd",resolveAll:I3,resolveTo:R3,tokenize:D3},P3={tokenize:M3},E3={tokenize:O3},A3={tokenize:j3};function I3(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&_n(e,0,e.length,t),e}function R3(e,n){let t=e.length,r=0,i,o,s,a;for(;t--;)if(i=e[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=t);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,n],["enter",c,n]],a=Gn(a,e.slice(o+1,o+r+3)),a=Gn(a,[["enter",d,n]]),a=Gn(a,eu(n.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),n)),a=Gn(a,[["exit",d,n],e[s-2],e[s-1],["exit",c,n]]),a=Gn(a,e.slice(s+1)),a=Gn(a,[["exit",l,n]]),_n(e,o,e.length,a),e}function D3(e,n,t){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?u(h):(s=r.parser.defined.includes(gt(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):t(h)}function l(h){return h===40?e.attempt(P3,d,s?d:u)(h):h===91?e.attempt(E3,d,s?c:u)(h):s?d(h):u(h)}function c(h){return e.attempt(A3,d,u)(h)}function d(h){return n(h)}function u(h){return o._balanced=!0,t(h)}}function M3(e,n,t){return r;function r(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),i}function i(u){return ye(u)?Rs(e,o)(u):o(u)}function o(u){return u===41?d(u):sT(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function s(u){return ye(u)?Rs(e,l)(u):d(u)}function a(u){return t(u)}function l(u){return u===34||u===39||u===40?lT(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):d(u)}function c(u){return ye(u)?Rs(e,d)(u):d(u)}function d(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function O3(e,n,t){const r=this;return i;function i(a){return aT.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(gt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}function s(a){return t(a)}}function j3(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const L3={name:"labelStartImage",resolveAll:ym.resolveAll,tokenize:N3};function N3(e,n,t){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):t(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const _3={name:"labelStartLink",resolveAll:ym.resolveAll,tokenize:F3};function F3(e,n,t){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):n(s)}}const ad={name:"lineEnding",tokenize:z3};function z3(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ce(e,n,"linePrefix")}}const Pl={name:"thematicBreak",tokenize:B3};function B3(e,n,t){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||J(c))?(e.exit("thematicBreak"),n(c)):t(c)}function l(c){return c===i?(e.consume(c),r++,l):(e.exit("thematicBreakSequence"),ie(c)?ce(e,a,"whitespace")(c):a(c))}}const wn={continuation:{tokenize:q3},exit:$3,name:"list",tokenize:H3},V3={partial:!0,tokenize:G3},U3={partial:!0,tokenize:W3};function H3(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(p){const m=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:rh(p)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Pl,t,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return t(p)}function l(p){return rh(p)&&++s<10?(e.consume(p),l):(!r.interrupt||s<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):t(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Pa,r.interrupt?t:d,e.attempt(V3,h,u))}function d(p){return r.containerState.initialBlankLine=!0,o++,h(p)}function u(p){return ie(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function q3(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Pa,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ce(e,n,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ie(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(U3,n,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ce(e,e.attempt(wn,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function W3(e,n,t){const r=this;return ce(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?n(o):t(o)}}function $3(e){e.exit(this.containerState.type)}function G3(e,n,t){const r=this;return ce(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ie(o)&&s&&s[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const lw={name:"setextUnderline",resolveTo:K3,tokenize:Y3};function K3(e,n){let t=e.length,r,i,o;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!o&&e[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,n]),e.splice(o+1,0,["exit",e[r][1],n]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,n]),e}function Y3(e,n,t){const r=this;let i;return o;function o(c){let d=r.events.length,u;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){u=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||u)?(e.enter("setextHeadingLine"),i=c,s(c)):t(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),ie(c)?ce(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||J(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const J3={tokenize:Q3};function Q3(e){const n=this,t=e.attempt(Pa,r,e.attempt(this.parser.constructs.flowInitial,i,ce(e,e.attempt(this.parser.constructs.flow,i,e.attempt(t3,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const X3={resolveAll:uT()},Z3=cT("string"),ez=cT("text");function cT(e){return{resolveAll:uT(e==="text"?nz:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,s,a);return s;function s(d){return c(d)?o(d):a(d)}function a(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),l}function l(d){return c(d)?(t.exit("data"),o(d)):(t.consume(d),l)}function c(d){if(d===null)return!0;const u=i[d];let h=-1;if(u)for(;++h<u.length;){const p=u[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function uT(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function nz(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(a=0),a){const c={type:t===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}const tz={42:wn,43:wn,45:wn,48:wn,49:wn,50:wn,51:wn,52:wn,53:wn,54:wn,55:wn,56:wn,57:wn,62:tT},rz={91:a3},iz={[-2]:sd,[-1]:sd,32:sd},oz={35:h3,42:Pl,45:[lw,Pl],60:y3,61:lw,95:Pl,96:sw,126:sw},sz={38:iT,92:rT},az={[-5]:ad,[-4]:ad,[-3]:ad,33:L3,38:iT,42:ih,60:[_F,C3],91:_3,92:[d3,rT],93:ym,95:ih,96:JF},lz={null:[ih,X3]},cz={null:[42,95]},uz={null:[]},dz=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cz,contentInitial:rz,disable:uz,document:tz,flow:oz,flowInitial:iz,insideSpan:lz,string:sz,text:az},Symbol.toStringTag,{value:"Module"}));function pz(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:A(T),check:A(C),consume:y,enter:v,exit:S,interrupt:A(C,{interrupt:!0})},c={code:null,containerState:{},defineSkip:g,events:[],now:m,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:u};let d=n.tokenize.call(c,l);return n.resolveAll&&o.push(n),c;function u(N){return s=Gn(s,N),b(),s[s.length-1]!==null?[]:(I(n,0),c.events=eu(o,c.events,c),c.events)}function h(N,O){return fz(p(N),O)}function p(N){return hz(s,N)}function m(){const{_bufferIndex:N,_index:O,line:q,column:_,offset:H}=r;return{_bufferIndex:N,_index:O,line:q,column:_,offset:H}}function g(N){i[N.line]=N.column,E()}function b(){let N;for(;r._index<s.length;){const O=s[r._index];if(typeof O=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<O.length;)f(O.charCodeAt(r._bufferIndex));else f(O)}}function f(N){d=d(N)}function y(N){J(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,E()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=N}function v(N,O){const q=O||{};return q.type=N,q.start=m(),c.events.push(["enter",q,c]),a.push(q),q}function S(N){const O=a.pop();return O.end=m(),c.events.push(["exit",O,c]),O}function T(N,O){I(N,O.from)}function C(N,O){O.restore()}function A(N,O){return q;function q(_,H,G){let U,R,j,k;return Array.isArray(_)?K(_):"tokenize"in _?K([_]):Y(_);function Y(le){return se;function se(an){const ln=an!==null&&le[an],vn=an!==null&&le.null,An=[...Array.isArray(ln)?ln:ln?[ln]:[],...Array.isArray(vn)?vn:vn?[vn]:[]];return K(An)(an)}}function K(le){return U=le,R=0,le.length===0?G:P(le[R])}function P(le){return se;function se(an){return k=M(),j=le,le.partial||(c.currentConstruct=le),le.name&&c.parser.constructs.disable.null.includes(le.name)?me():le.tokenize.call(O?Object.assign(Object.create(c),O):c,l,Q,me)(an)}}function Q(le){return N(j,k),H}function me(le){return k.restore(),++R<U.length?P(U[R]):G}}}function I(N,O){N.resolveAll&&!o.includes(N)&&o.push(N),N.resolve&&_n(c.events,O,c.events.length-O,N.resolve(c.events.slice(O),c)),N.resolveTo&&(c.events=N.resolveTo(c.events,c))}function M(){const N=m(),O=c.previous,q=c.currentConstruct,_=c.events.length,H=Array.from(a);return{from:_,restore:G};function G(){r=N,c.previous=O,c.currentConstruct=q,c.events.length=_,a=H,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function hz(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let s;if(t===i)s=[e[t].slice(r,o)];else{if(s=e.slice(t,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function fz(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=n?" ":"	";break}case-1:{if(!n&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function mz(e){const r={constructs:eT([dz,...(e||{}).extensions||[]]),content:i(RF),defined:[],document:i(MF),flow:i(J3),lazy:{},string:i(Z3),text:i(ez)};return r;function i(o){return s;function s(a){return pz(r,o,a)}}}function gz(e){for(;!oT(e););return e}const cw=/[\0\t\n\r]/g;function yz(){let e=1,n="",t=!0,r;return i;function i(o,s,a){const l=[];let c,d,u,h,p;for(o=n+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),u=0,n="",t&&(o.charCodeAt(0)===65279&&u++,t=void 0);u<o.length;){if(cw.lastIndex=u,c=cw.exec(o),h=c&&c.index!==void 0?c.index:o.length,p=o.charCodeAt(h),!c){n=o.slice(u);break}if(p===10&&u===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<h&&(l.push(o.slice(u,h)),e+=h-u),p){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=h+1}return a&&(r&&l.push(-5),n&&l.push(n),l.push(null)),l}}const vz=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wz(e){return e.replace(vz,bz)}function bz(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return nT(t.slice(o?2:1),o?16:10)}return gm(t)||e}const dT={}.hasOwnProperty;function xz(e,n,t){return typeof n!="string"&&(t=n,n=void 0),kz(t)(gz(mz(t).document().write(yz()(e,n,!0))))}function kz(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Bt),autolinkProtocol:M,autolinkEmail:M,atxHeading:o(Fi),blockQuote:o(vn),characterEscape:M,characterReference:M,codeFenced:o(An),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(An,s),codeText:o(ar,s),codeTextData:M,data:M,codeFlowValue:M,definition:o(xt),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(_i),hardBreakEscape:o(ti),hardBreakTrailing:o(ti),htmlFlow:o(zi,s),htmlFlowData:M,htmlText:o(zi,s),htmlTextData:M,image:o(ri),label:s,link:o(Bt),listItem:o(ii),listItemValue:h,listOrdered:o(Yo,u),listUnordered:o(Yo),paragraph:o(Aa),reference:P,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Fi),strong:o(Vt),thematicBreak:o(ou)},exit:{atxHeading:l(),atxHeadingSequence:T,autolink:l(),autolinkEmail:ln,autolinkProtocol:an,blockQuote:l(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:me,characterReferenceMarkerNumeric:me,characterReferenceValue:le,characterReference:se,codeFenced:l(b),codeFencedFence:g,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:l(f),codeText:l(H),codeTextData:E,data:E,definition:l(),definitionDestinationString:S,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(O),hardBreakTrailing:l(O),htmlFlow:l(q),htmlFlowData:E,htmlText:l(_),htmlTextData:E,image:l(U),label:j,labelText:R,lineEnding:N,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Q,resourceDestinationString:k,resourceTitleString:Y,resource:K,setextHeading:l(I),setextHeadingLineSequence:A,setextHeadingText:C,strong:l(),thematicBreak:l()}};pT(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(D){let B={type:"root",children:[]};const X={stack:[B],tokenStack:[],config:n,enter:a,exit:c,buffer:s,resume:d,data:t},re=[];let de=-1;for(;++de<D.length;)if(D[de][1].type==="listOrdered"||D[de][1].type==="listUnordered")if(D[de][0]==="enter")re.push(de);else{const In=re.pop();de=i(D,In,de)}for(de=-1;++de<D.length;){const In=n[D[de][0]];dT.call(In,D[de][1].type)&&In[D[de][1].type].call(Object.assign({sliceSerialize:D[de][2].sliceSerialize},X),D[de][1])}if(X.tokenStack.length>0){const In=X.tokenStack[X.tokenStack.length-1];(In[1]||uw).call(X,void 0,In[0])}for(B.position={start:gr(D.length>0?D[0][1].start:{line:1,column:1,offset:0}),end:gr(D.length>0?D[D.length-2][1].end:{line:1,column:1,offset:0})},de=-1;++de<n.transforms.length;)B=n.transforms[de](B)||B;return B}function i(D,B,X){let re=B-1,de=-1,In=!1,kt,Rn,Un,lr;for(;++re<=X;){const Ne=D[re];switch(Ne[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ne[0]==="enter"?de++:de--,lr=void 0;break}case"lineEndingBlank":{Ne[0]==="enter"&&(kt&&!lr&&!de&&!Un&&(Un=re),lr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:lr=void 0}if(!de&&Ne[0]==="enter"&&Ne[1].type==="listItemPrefix"||de===-1&&Ne[0]==="exit"&&(Ne[1].type==="listUnordered"||Ne[1].type==="listOrdered")){if(kt){let cr=re;for(Rn=void 0;cr--;){const et=D[cr];if(et[1].type==="lineEnding"||et[1].type==="lineEndingBlank"){if(et[0]==="exit")continue;Rn&&(D[Rn][1].type="lineEndingBlank",In=!0),et[1].type="lineEnding",Rn=cr}else if(!(et[1].type==="linePrefix"||et[1].type==="blockQuotePrefix"||et[1].type==="blockQuotePrefixWhitespace"||et[1].type==="blockQuoteMarker"||et[1].type==="listItemIndent"))break}Un&&(!Rn||Un<Rn)&&(kt._spread=!0),kt.end=Object.assign({},Rn?D[Rn][1].start:Ne[1].end),D.splice(Rn||re,0,["exit",kt,Ne[2]]),re++,X++}if(Ne[1].type==="listItemPrefix"){const cr={type:"listItem",_spread:!1,start:Object.assign({},Ne[1].start),end:void 0};kt=cr,D.splice(re,0,["enter",cr,Ne[2]]),re++,X++,Un=void 0,lr=!0}}}return D[B][1]._spread=In,X}function o(D,B){return X;function X(re){a.call(this,D(re),re),B&&B.call(this,re)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(D,B,X){this.stack[this.stack.length-1].children.push(D),this.stack.push(D),this.tokenStack.push([B,X||void 0]),D.position={start:gr(B.start),end:void 0}}function l(D){return B;function B(X){D&&D.call(this,X),c.call(this,X)}}function c(D,B){const X=this.stack.pop(),re=this.tokenStack.pop();if(re)re[0].type!==D.type&&(B?B.call(this,D,re[0]):(re[1]||uw).call(this,D,re[0]));else throw new Error("Cannot close `"+D.type+"` ("+Is({start:D.start,end:D.end})+"): it’s not open");X.position.end=gr(D.end)}function d(){return mm(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function h(D){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(D),10),this.data.expectingFirstListItemValue=void 0}}function p(){const D=this.resume(),B=this.stack[this.stack.length-1];B.lang=D}function m(){const D=this.resume(),B=this.stack[this.stack.length-1];B.meta=D}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function f(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D.replace(/(\r?\n|\r)$/g,"")}function y(D){const B=this.resume(),X=this.stack[this.stack.length-1];X.label=B,X.identifier=gt(this.sliceSerialize(D)).toLowerCase()}function v(){const D=this.resume(),B=this.stack[this.stack.length-1];B.title=D}function S(){const D=this.resume(),B=this.stack[this.stack.length-1];B.url=D}function T(D){const B=this.stack[this.stack.length-1];if(!B.depth){const X=this.sliceSerialize(D).length;B.depth=X}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function A(D){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(D).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function M(D){const X=this.stack[this.stack.length-1].children;let re=X[X.length-1];(!re||re.type!=="text")&&(re=iu(),re.position={start:gr(D.start),end:void 0},X.push(re)),this.stack.push(re)}function E(D){const B=this.stack.pop();B.value+=this.sliceSerialize(D),B.position.end=gr(D.end)}function N(D){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=B.children[B.children.length-1];X.position.end=gr(D.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(B.type)&&(M.call(this,D),E.call(this,D))}function O(){this.data.atHardBreak=!0}function q(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function _(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function H(){const D=this.resume(),B=this.stack[this.stack.length-1];B.value=D}function G(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=B,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function U(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=B,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function R(D){const B=this.sliceSerialize(D),X=this.stack[this.stack.length-2];X.label=wz(B),X.identifier=gt(B).toLowerCase()}function j(){const D=this.stack[this.stack.length-1],B=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const re=D.children;X.children=re}else X.alt=B}function k(){const D=this.resume(),B=this.stack[this.stack.length-1];B.url=D}function Y(){const D=this.resume(),B=this.stack[this.stack.length-1];B.title=D}function K(){this.data.inReference=void 0}function P(){this.data.referenceType="collapsed"}function Q(D){const B=this.resume(),X=this.stack[this.stack.length-1];X.label=B,X.identifier=gt(this.sliceSerialize(D)).toLowerCase(),this.data.referenceType="full"}function me(D){this.data.characterReferenceType=D.type}function le(D){const B=this.sliceSerialize(D),X=this.data.characterReferenceType;let re;X?(re=nT(B,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):re=gm(B);const de=this.stack[this.stack.length-1];de.value+=re}function se(D){const B=this.stack.pop();B.position.end=gr(D.end)}function an(D){E.call(this,D);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(D)}function ln(D){E.call(this,D);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(D)}function vn(){return{type:"blockquote",children:[]}}function An(){return{type:"code",lang:null,meta:null,value:""}}function ar(){return{type:"inlineCode",value:""}}function xt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function _i(){return{type:"emphasis",children:[]}}function Fi(){return{type:"heading",depth:0,children:[]}}function ti(){return{type:"break"}}function zi(){return{type:"html",value:""}}function ri(){return{type:"image",title:null,url:"",alt:null}}function Bt(){return{type:"link",title:null,url:"",children:[]}}function Yo(D){return{type:"list",ordered:D.type==="listOrdered",start:null,spread:D._spread,children:[]}}function ii(D){return{type:"listItem",spread:D._spread,checked:null,children:[]}}function Aa(){return{type:"paragraph",children:[]}}function Vt(){return{type:"strong",children:[]}}function iu(){return{type:"text",value:""}}function ou(){return{type:"thematicBreak"}}}function gr(e){return{line:e.line,column:e.column,offset:e.offset}}function pT(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?pT(e,r):Sz(e,r)}}function Sz(e,n){let t;for(t in n)if(dT.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function uw(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Is({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Is({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Is({start:n.start,end:n.end})+") is still open")}function Cz(e){const n=this;n.parser=t;function t(r){return xz(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Tz(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Pz(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Ez(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function Az(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Iz(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Rz(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Ko(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(n,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,c),e.applyData(n,c)}function Dz(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Mz(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function hT(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function Oz(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return hT(e,n);const i={src:Ko(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,o),e.applyData(n,o)}function jz(e,n){const t={src:Ko(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Lz(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function Nz(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return hT(e,n);const i={href:Ko(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function _z(e,n){const t={href:Ko(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Fz(e,n,t){const r=e.all(n),i=t?zz(t):fT(n),o={},s=[];if(typeof n.checked=="boolean"){const d=r[0];let u;d&&d.type==="element"&&d.tagName==="p"?u=d:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(n,c),e.applyData(n,c)}function zz(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=fT(t[r])}return n}function fT(e){const n=e.spread;return n??e.children.length>1}function Bz(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function Vz(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Uz(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Hz(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function qz(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],s),i.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},a=dm(n.children[1]),l=GC(n.children[n.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function Wz(e,n,t){const r=t?t.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,a=s?s.length:n.children.length;let l=-1;const c=[];for(;++l<a;){const u=n.children[l],h={},p=s?s[l]:void 0;p&&(h.align=p);let m={type:"element",tagName:o,properties:h,children:[]};u&&(m.children=e.all(u),e.patch(u,m),m=e.applyData(u,m)),c.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,d),e.applyData(n,d)}function $z(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const dw=9,pw=32;function Gz(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const o=[];for(;r;)o.push(hw(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return o.push(hw(n.slice(i),i>0,!1)),o.join("")}function hw(e,n,t){let r=0,i=e.length;if(n){let o=e.codePointAt(r);for(;o===dw||o===pw;)r++,o=e.codePointAt(r)}if(t){let o=e.codePointAt(i-1);for(;o===dw||o===pw;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Kz(e,n){const t={type:"text",value:Gz(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Yz(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Jz={blockquote:Tz,break:Pz,code:Ez,delete:Az,emphasis:Iz,footnoteReference:Rz,heading:Dz,html:Mz,imageReference:Oz,image:jz,inlineCode:Lz,linkReference:Nz,link:_z,listItem:Fz,list:Bz,paragraph:Vz,root:Uz,strong:Hz,table:qz,tableCell:$z,tableRow:Wz,text:Kz,thematicBreak:Yz,toml:rl,yaml:rl,definition:rl,footnoteDefinition:rl};function rl(){}const mT=-1,nu=0,Ds=1,gc=2,vm=3,wm=4,bm=5,xm=6,gT=7,yT=8,fw=typeof self=="object"?self:globalThis,Qz=(e,n)=>{const t=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=n[i];switch(o){case nu:case mT:return t(s,i);case Ds:{const a=t([],i);for(const l of s)a.push(r(l));return a}case gc:{const a=t({},i);for(const[l,c]of s)a[r(l)]=r(c);return a}case vm:return t(new Date(s),i);case wm:{const{source:a,flags:l}=s;return t(new RegExp(a,l),i)}case bm:{const a=t(new Map,i);for(const[l,c]of s)a.set(r(l),r(c));return a}case xm:{const a=t(new Set,i);for(const l of s)a.add(r(l));return a}case gT:{const{name:a,message:l}=s;return t(new fw[a](l),i)}case yT:return t(BigInt(s),i);case"BigInt":return t(Object(BigInt(s)),i);case"ArrayBuffer":return t(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return t(new DataView(a),s)}}return t(new fw[o](s),i)};return r},mw=e=>Qz(new Map,e)(0),Vi="",{toString:Xz}={},{keys:Zz}=Object,ls=e=>{const n=typeof e;if(n!=="object"||!e)return[nu,n];const t=Xz.call(e).slice(8,-1);switch(t){case"Array":return[Ds,Vi];case"Object":return[gc,Vi];case"Date":return[vm,Vi];case"RegExp":return[wm,Vi];case"Map":return[bm,Vi];case"Set":return[xm,Vi];case"DataView":return[Ds,t]}return t.includes("Array")?[Ds,t]:t.includes("Error")?[gT,t]:[gc,t]},il=([e,n])=>e===nu&&(n==="function"||n==="symbol"),eB=(e,n,t,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return t.set(a,l),l},o=s=>{if(t.has(s))return t.get(s);let[a,l]=ls(s);switch(a){case nu:{let d=s;switch(l){case"bigint":a=yT,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([mT],s)}return i([a,d],s)}case Ds:{if(l){let h=s;return l==="DataView"?h=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(s)),i([l,[...h]],s)}const d=[],u=i([a,d],s);for(const h of s)d.push(o(h));return u}case gc:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(n&&"toJSON"in s)return o(s.toJSON());const d=[],u=i([a,d],s);for(const h of Zz(s))(e||!il(ls(s[h])))&&d.push([o(h),o(s[h])]);return u}case vm:return i([a,s.toISOString()],s);case wm:{const{source:d,flags:u}=s;return i([a,{source:d,flags:u}],s)}case bm:{const d=[],u=i([a,d],s);for(const[h,p]of s)(e||!(il(ls(h))||il(ls(p))))&&d.push([o(h),o(p)]);return u}case xm:{const d=[],u=i([a,d],s);for(const h of s)(e||!il(ls(h)))&&d.push(o(h));return u}}const{message:c}=s;return i([a,{name:l,message:c}],s)};return o},gw=(e,{json:n,lossy:t}={})=>{const r=[];return eB(!(n||t),!!n,new Map,r)(e),r},yc=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?mw(gw(e,n)):structuredClone(e):(e,n)=>mw(gw(e,n));function nB(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function tB(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function rB(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||nB,r=e.options.footnoteBackLabel||tB,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),u=String(c.identifier).toUpperCase(),h=Ko(u.toLowerCase());let p=0;const m=[],g=e.footnoteCounts.get(u);for(;g!==void 0&&++p<=g;){m.length>0&&m.push({type:"text",value:" "});let y=typeof t=="string"?t:t(l,p);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,p),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const y=b.children[b.children.length-1];y&&y.type==="text"?y.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...m)}else d.push(...m);const f={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(d,!0)};e.patch(c,f),a.push(f)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...yc(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const tu=function(e){if(e==null)return aB;if(typeof e=="function")return ru(e);if(typeof e=="object")return Array.isArray(e)?iB(e):oB(e);if(typeof e=="string")return sB(e);throw new Error("Expected function, string, or object as test")};function iB(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=tu(e[t]);return ru(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function oB(e){const n=e;return ru(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function sB(e){return ru(n);function n(t){return t&&t.type===e}}function ru(e){return n;function n(t,r,i){return!!(lB(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function aB(){return!0}function lB(e){return e!==null&&typeof e=="object"&&"type"in e}const vT=[],cB=!0,oh=!1,uB="skip";function wT(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const o=tu(i),s=r?-1:1;a(e,void 0,[])();function a(l,c,d){const u=l&&typeof l=="object"?l:{};if(typeof u.type=="string"){const p=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=vT,m,g,b;if((!n||o(l,c,d[d.length-1]||void 0))&&(p=dB(t(l,d)),p[0]===oh))return p;if("children"in l&&l.children){const f=l;if(f.children&&p[0]!==uB)for(g=(r?f.children.length:-1)+s,b=d.concat(f);g>-1&&g<f.children.length;){const y=f.children[g];if(m=a(y,g,b)(),m[0]===oh)return m;g=typeof m[1]=="number"?m[1]:g+s}}return p}}}function dB(e){return Array.isArray(e)?e:typeof e=="number"?[cB,e]:e==null?vT:[e]}function km(e,n,t,r){let i,o,s;typeof n=="function"&&typeof t!="function"?(o=void 0,s=n,i=t):(o=n,s=t,i=r),wT(e,o,a,i);function a(l,c){const d=c[c.length-1],u=d?d.children.indexOf(l):void 0;return s(l,u,d)}}const sh={}.hasOwnProperty,pB={};function hB(e,n){const t=n||pB,r=new Map,i=new Map,o=new Map,s={...Jz,...t.handlers},a={all:c,applyData:mB,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:t,patch:fB,wrap:yB};return km(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const u=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();u.has(h)||u.set(h,d)}}),a;function l(d,u){const h=d.type,p=a.handlers[h];if(sh.call(a.handlers,h)&&p)return p(a,d,u);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in d){const{children:g,...b}=d,f=yc(b);return f.children=a.all(d),f}return yc(d)}return(a.options.unknownHandler||gB)(a,d,u)}function c(d){const u=[];if("children"in d){const h=d.children;let p=-1;for(;++p<h.length;){const m=a.one(h[p],d);if(m){if(p&&h[p-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=yw(m.value)),!Array.isArray(m)&&m.type==="element")){const g=m.children[0];g&&g.type==="text"&&(g.value=yw(g.value))}Array.isArray(m)?u.push(...m):u.push(m)}}}return u}}function fB(e,n){e.position&&(n.position=tF(e))}function mB(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const s="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,yc(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function gB(e,n){const t=n.data||{},r="value"in n&&!(sh.call(t,"hProperties")||sh.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function yB(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function yw(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function vw(e,n){const t=hB(e,n),r=t.one(e,void 0),i=rB(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function vB(e,n){return e&&"run"in e?async function(t,r){const i=vw(t,{file:r,...n});await e.run(i,r)}:function(t,r){return vw(t,{file:r,...e||n})}}function ww(e){if(e)throw e}var El=Object.prototype.hasOwnProperty,bT=Object.prototype.toString,bw=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,kw=function(n){return typeof Array.isArray=="function"?Array.isArray(n):bT.call(n)==="[object Array]"},Sw=function(n){if(!n||bT.call(n)!=="[object Object]")return!1;var t=El.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&El.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||El.call(n,i)},Cw=function(n,t){bw&&t.name==="__proto__"?bw(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},Tw=function(n,t){if(t==="__proto__")if(El.call(n,t)){if(xw)return xw(n,t).value}else return;return n[t]},wB=function e(){var n,t,r,i,o,s,a=arguments[0],l=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(n=arguments[l],n!=null)for(t in n)r=Tw(a,t),i=Tw(n,t),a!==i&&(d&&i&&(Sw(i)||(o=kw(i)))?(o?(o=!1,s=r&&kw(r)?r:[]):s=r&&Sw(r)?r:{},Cw(a,{name:t,newValue:e(d,s,i)})):typeof i<"u"&&Cw(a,{name:t,newValue:i}));return a};const ld=wc(wB);function ah(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function bB(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...c){const d=e[++o];let u=-1;if(l){s(l);return}for(;++u<i.length;)(c[u]===null||c[u]===void 0)&&(c[u]=i[u]);i=c,d?xB(d,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function xB(e,n){let t;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(c){const d=c;if(a&&t)throw d;return i(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){t||(t=!0,n(s,...a))}function o(s){i(null,s)}}const Tt={basename:kB,dirname:SB,extname:CB,join:TB,sep:"/"};function kB(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ea(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let s=-1,a=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===n.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return t===r?r=s:r<0&&(r=e.length),e.slice(t,r)}function SB(e){if(Ea(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function CB(e){Ea(e);let n=e.length,t=-1,r=0,i=-1,o=0,s;for(;n--;){const a=e.codePointAt(n);if(a===47){if(s){r=n+1;break}continue}t<0&&(s=!0,t=n+1),a===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function TB(...e){let n=-1,t;for(;++n<e.length;)Ea(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":PB(t)}function PB(e){Ea(e);const n=e.codePointAt(0)===47;let t=EB(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function EB(e,n){let t="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length>0){t="",r=0,i=s,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,s):t=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return t}function Ea(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const AB={cwd:IB};function IB(){return"/"}function lh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function RB(e){if(typeof e=="string")e=new URL(e);else if(!lh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return DB(e)}function DB(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const cd=["history","path","basename","stem","extname","dirname"];class xT{constructor(n){let t;n?lh(n)?t={path:n}:typeof n=="string"||MB(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":AB.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<cd.length;){const o=cd[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)cd.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Tt.basename(this.path):void 0}set basename(n){dd(n,"basename"),ud(n,"basename"),this.path=Tt.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Tt.dirname(this.path):void 0}set dirname(n){Pw(this.basename,"dirname"),this.path=Tt.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Tt.extname(this.path):void 0}set extname(n){if(ud(n,"extname"),Pw(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Tt.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){lh(n)&&(n=RB(n)),dd(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Tt.basename(this.path,this.extname):void 0}set stem(n){dd(n,"stem"),ud(n,"stem"),this.path=Tt.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new sn(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function ud(e,n){if(e&&e.includes(Tt.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Tt.sep+"`")}function dd(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Pw(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function MB(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const OB=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},jB={}.hasOwnProperty;class Sm extends OB{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=bB()}copy(){const n=new Sm;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(ld(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(fd("data",this.frozen),this.namespace[n]=t,this):jB.call(this.namespace,n)&&this.namespace[n]||void 0:n?(fd("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=ol(n),r=this.parser||this.Parser;return pd("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),pd("process",this.parser||this.Parser),hd("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,s){const a=ol(n),l=r.parse(a);r.run(l,a,function(d,u,h){if(d||!u||!h)return c(d);const p=u,m=r.stringify(p,h);_B(m)?h.value=m:h.result=m,c(d,h)});function c(d,u){d||!u?s(d):o?o(u):t(void 0,u)}}}processSync(n){let t=!1,r;return this.freeze(),pd("processSync",this.parser||this.Parser),hd("processSync",this.compiler||this.Compiler),this.process(n,i),Aw("processSync","process",t),r;function i(o,s){t=!0,ww(o),r=s}}run(n,t,r){Ew(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=ol(t);i.run(n,l,c);function c(d,u,h){const p=u||n;d?a(d):s?s(p):r(void 0,p,h)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),Aw("runSync","run",r),i;function o(s,a){ww(s),i=a,r=!0}}stringify(n,t){this.freeze();const r=ol(t),i=this.compiler||this.Compiler;return hd("stringify",i),Ew(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(fd("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?a(n):s(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...u]=c;l(d,u)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=ld(!0,i.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const u=c[d];o(u)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let u=-1,h=-1;for(;++u<r.length;)if(r[u][0]===c){h=u;break}if(h===-1)r.push([c,...d]);else if(d.length>0){let[p,...m]=d;const g=r[h][1];ah(g)&&ah(p)&&(p=ld(!0,g,p)),r[h]=[c,p,...m]}}}}const LB=new Sm().freeze();function pd(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hd(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function fd(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ew(e){if(!ah(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Aw(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ol(e){return NB(e)?e:new xT(e)}function NB(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function _B(e){return typeof e=="string"||FB(e)}function FB(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const zB="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Iw=[],Rw={allowDangerousHtml:!0},BB=/^(https?|ircs?|mailto|xmpp)$/i,VB=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function UB(e){const n=HB(e),t=qB(e);return WB(n.runSync(n.parse(t),t),e)}function HB(e){const n=e.rehypePlugins||Iw,t=e.remarkPlugins||Iw,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Rw}:Rw;return LB().use(Cz).use(t).use(vB,r).use(n)}function qB(e){const n=e.children||"",t=new xT;return typeof n=="string"&&(t.value=n),t}function WB(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,o=n.disallowedElements,s=n.skipHtml,a=n.unwrapDisallowed,l=n.urlTransform||$B;for(const d of VB)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+zB+d.id,void 0);return km(e,c),aF(e,{Fragment:w.Fragment,components:i,ignoreInvalidStyle:!0,jsx:w.jsx,jsxs:w.jsxs,passKeys:!0,passNode:!0});function c(d,u,h){if(d.type==="raw"&&h&&typeof u=="number")return s?h.children.splice(u,1):h.children[u]={type:"text",value:d.value},u;if(d.type==="element"){let p;for(p in od)if(Object.hasOwn(od,p)&&Object.hasOwn(d.properties,p)){const m=d.properties[p],g=od[p];(g===null||g.includes(d.tagName))&&(d.properties[p]=l(String(m||""),p,d))}}if(d.type==="element"){let p=t?!t.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof u=="number"&&(p=!r(d,u,h)),p&&h&&typeof u=="number")return a&&d.children?h.children.splice(u,1,...d.children):h.children.splice(u,1),u}}}function $B(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||BB.test(e.slice(0,n))?e:""}function Dw(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function GB(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function KB(e,n,t){const i=tu((t||{}).ignore||[]),o=YB(n);let s=-1;for(;++s<o.length;)wT(e,"text",a);function a(c,d){let u=-1,h;for(;++u<d.length;){const p=d[u],m=h?h.children:void 0;if(i(p,m?m.indexOf(p):void 0,h))return;h=p}if(h)return l(c,d)}function l(c,d){const u=d[d.length-1],h=o[s][0],p=o[s][1];let m=0;const b=u.children.indexOf(c);let f=!1,y=[];h.lastIndex=0;let v=h.exec(c.value);for(;v;){const S=v.index,T={index:v.index,input:v.input,stack:[...d,c]};let C=p(...v,T);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?h.lastIndex=S+1:(m!==S&&y.push({type:"text",value:c.value.slice(m,S)}),Array.isArray(C)?y.push(...C):C&&y.push(C),m=S+v[0].length,f=!0),!h.global)break;v=h.exec(c.value)}return f?(m<c.value.length&&y.push({type:"text",value:c.value.slice(m)}),u.children.splice(b,1,...y)):y=[c],b+y.length}}function YB(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([JB(i[0]),QB(i[1])])}return n}function JB(e){return typeof e=="string"?new RegExp(GB(e),"g"):e}function QB(e){return typeof e=="function"?e:function(){return e}}const md="phrasing",gd=["autolink","link","image","label"];function XB(){return{transforms:[oV],enter:{literalAutolink:eV,literalAutolinkEmail:yd,literalAutolinkHttp:yd,literalAutolinkWww:yd},exit:{literalAutolink:iV,literalAutolinkEmail:rV,literalAutolinkHttp:nV,literalAutolinkWww:tV}}}function ZB(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:md,notInConstruct:gd},{character:":",before:"[ps]",after:"\\/",inConstruct:md,notInConstruct:gd}]}}function eV(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function yd(e){this.config.enter.autolinkProtocol.call(this,e)}function nV(e){this.config.exit.autolinkProtocol.call(this,e)}function tV(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function rV(e){this.config.exit.autolinkEmail.call(this,e)}function iV(e){this.exit(e)}function oV(e){KB(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sV],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),aV]],{ignore:["link","linkReference"]})}function sV(e,n,t,r,i){let o="";if(!kT(i)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!lV(t)))return!1;const s=cV(t+r);if(!s[0])return!1;const a={type:"link",title:null,url:o+n+s[0],children:[{type:"text",value:n+s[0]}]};return s[1]?[a,{type:"text",value:s[1]}]:a}function aV(e,n,t,r){return!kT(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function lV(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function cV(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=Dw(e,"(");let o=Dw(e,")");for(;r!==-1&&i>o;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[e,t]}function kT(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Oi(t)||Zc(t))&&(!n||t!==47)}ST.peek=vV;function uV(){this.buffer()}function dV(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function pV(){this.buffer()}function hV(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function fV(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=gt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function mV(e){this.exit(e)}function gV(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=gt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function yV(e){this.exit(e)}function vV(){return"["}function ST(e,n,t,r){const i=t.createTracker(r);let o=i.move("[^");const s=t.enter("footnoteReference"),a=t.enter("reference");return o+=i.move(t.safe(t.associationId(e),{after:"]",before:o})),a(),s(),o+=i.move("]"),o}function wV(){return{enter:{gfmFootnoteCallString:uV,gfmFootnoteCall:dV,gfmFootnoteDefinitionLabelString:pV,gfmFootnoteDefinition:hV},exit:{gfmFootnoteCallString:fV,gfmFootnoteCall:mV,gfmFootnoteDefinitionLabelString:gV,gfmFootnoteDefinition:yV}}}function bV(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:ST},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,s){const a=o.createTracker(s);let l=a.move("[^");const c=o.enter("footnoteDefinition"),d=o.enter("label");return l+=a.move(o.safe(o.associationId(r),{before:l,after:"]"})),d(),l+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),l+=a.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),n?CT:xV))),c(),l}}function xV(e,n,t){return n===0?e:CT(e,n,t)}function CT(e,n,t){return(t?"":"    ")+e}const kV=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];TT.peek=EV;function SV(){return{canContainEols:["delete"],enter:{strikethrough:TV},exit:{strikethrough:PV}}}function CV(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:kV}],handlers:{delete:TT}}}function TV(e){this.enter({type:"delete",children:[]},e)}function PV(e){this.exit(e)}function TT(e,n,t,r){const i=t.createTracker(r),o=t.enter("strikethrough");let s=i.move("~~");return s+=t.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move("~~"),o(),s}function EV(){return"~"}function AV(e){return e.length}function IV(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||AV,o=[],s=[],a=[],l=[];let c=0,d=-1;for(;++d<e.length;){const g=[],b=[];let f=-1;for(e[d].length>c&&(c=e[d].length);++f<e[d].length;){const y=RV(e[d][f]);if(t.alignDelimiters!==!1){const v=i(y);b[f]=v,(l[f]===void 0||v>l[f])&&(l[f]=v)}g.push(y)}s[d]=g,a[d]=b}let u=-1;if(typeof r=="object"&&"length"in r)for(;++u<c;)o[u]=Mw(r[u]);else{const g=Mw(r);for(;++u<c;)o[u]=g}u=-1;const h=[],p=[];for(;++u<c;){const g=o[u];let b="",f="";g===99?(b=":",f=":"):g===108?b=":":g===114&&(f=":");let y=t.alignDelimiters===!1?1:Math.max(1,l[u]-b.length-f.length);const v=b+"-".repeat(y)+f;t.alignDelimiters!==!1&&(y=b.length+y+f.length,y>l[u]&&(l[u]=y),p[u]=y),h[u]=v}s.splice(1,0,h),a.splice(1,0,p),d=-1;const m=[];for(;++d<s.length;){const g=s[d],b=a[d];u=-1;const f=[];for(;++u<c;){const y=g[u]||"";let v="",S="";if(t.alignDelimiters!==!1){const T=l[u]-(b[u]||0),C=o[u];C===114?v=" ".repeat(T):C===99?T%2?(v=" ".repeat(T/2+.5),S=" ".repeat(T/2-.5)):(v=" ".repeat(T/2),S=v):S=" ".repeat(T)}t.delimiterStart!==!1&&!u&&f.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||u)&&f.push(" "),t.alignDelimiters!==!1&&f.push(v),f.push(y),t.alignDelimiters!==!1&&f.push(S),t.padding!==!1&&f.push(" "),(t.delimiterEnd!==!1||u!==c-1)&&f.push("|")}m.push(t.delimiterEnd===!1?f.join("").replace(/ +$/,""):f.join(""))}return m.join(`
`)}function RV(e){return e==null?"":String(e)}function Mw(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function DV(e,n,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const s=t.indentLines(t.containerFlow(e,o.current()),MV);return i(),s}function MV(e,n,t){return">"+(t?"":" ")+e}function OV(e,n){return Ow(e,n.inConstruct,!0)&&!Ow(e,n.notInConstruct,!1)}function Ow(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function jw(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&OV(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function jV(e,n){const t=String(e);let r=t.indexOf(n),i=r,o=0,s=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+n.length,r=t.indexOf(n,i);return s}function LV(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function NV(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function _V(e,n,t,r){const i=NV(t),o=e.value||"",s=i==="`"?"GraveAccent":"Tilde";if(LV(e,t)){const u=t.enter("codeIndented"),h=t.indentLines(o,FV);return u(),h}const a=t.createTracker(r),l=i.repeat(Math.max(jV(o,i)+1,3)),c=t.enter("codeFenced");let d=a.move(l);if(e.lang){const u=t.enter(`codeFencedLang${s}`);d+=a.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${s}`);d+=a.move(" "),d+=a.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),u()}return d+=a.move(`
`),o&&(d+=a.move(o+`
`)),d+=a.move(l),c(),d}function FV(e,n,t){return(t?"":"    ")+e}function Cm(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function zV(e,n,t,r){const i=Cm(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("definition");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("[");return c+=l.move(t.safe(t.associationId(e),{before:c,after:"]",...l.current()})),c+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(e.url,{before:c,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(e.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),s(),c}function BV(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function aa(e){return"&#x"+e.toString(16).toUpperCase()+";"}function vc(e,n,t){const r=Lo(e),i=Lo(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}PT.peek=VV;function PT(e,n,t,r){const i=BV(t),o=t.enter("emphasis"),s=t.createTracker(r),a=s.move(i);let l=s.move(t.containerPhrasing(e,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),d=vc(r.before.charCodeAt(r.before.length-1),c,i);d.inside&&(l=aa(c)+l.slice(1));const u=l.charCodeAt(l.length-1),h=vc(r.after.charCodeAt(0),u,i);h.inside&&(l=l.slice(0,-1)+aa(u));const p=s.move(i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+p}function VV(e,n,t){return t.options.emphasis||"*"}function UV(e,n){let t=!1;return km(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,oh}),!!((!e.depth||e.depth<3)&&mm(e)&&(n.options.setext||t))}function HV(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(r);if(UV(e,t)){const d=t.enter("headingSetext"),u=t.enter("phrasing"),h=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return u(),d(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const s="#".repeat(i),a=t.enter("headingAtx"),l=t.enter("phrasing");o.move(s+" ");let c=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(c)&&(c=aa(c.charCodeAt(0))+c.slice(1)),c=c?s+" "+c:s,t.options.closeAtx&&(c+=" "+s),l(),a(),c}ET.peek=qV;function ET(e){return e.value||""}function qV(){return"<"}AT.peek=WV;function AT(e,n,t,r){const i=Cm(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("image");let a=t.enter("label");const l=t.createTracker(r);let c=l.move("![");return c+=l.move(t.safe(e.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(a=t.enter("destinationRaw"),c+=l.move(t.safe(e.url,{before:c,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=t.enter(`title${o}`),c+=l.move(" "+i),c+=l.move(t.safe(e.title,{before:c,after:i,...l.current()})),c+=l.move(i),a()),c+=l.move(")"),s(),c}function WV(){return"!"}IT.peek=$V;function IT(e,n,t,r){const i=e.referenceType,o=t.enter("imageReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("![");const c=t.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const d=t.stack;t.stack=[],s=t.enter("reference");const u=t.safe(t.associationId(e),{before:l,after:"]",...a.current()});return s(),t.stack=d,o(),i==="full"||!c||c!==u?l+=a.move(u+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function $V(){return"!"}RT.peek=GV;function RT(e,n,t){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const s=t.unsafe[o],a=t.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(r);){let c=l.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(l.index+1)}}return i+r+i}function GV(){return"`"}function DT(e,n){const t=mm(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}MT.peek=KV;function MT(e,n,t,r){const i=Cm(t),o=i==='"'?"Quote":"Apostrophe",s=t.createTracker(r);let a,l;if(DT(e,t)){const d=t.stack;t.stack=[],a=t.enter("autolink");let u=s.move("<");return u+=s.move(t.containerPhrasing(e,{before:u,after:">",...s.current()})),u+=s.move(">"),a(),t.stack=d,u}a=t.enter("link"),l=t.enter("label");let c=s.move("[");return c+=s.move(t.containerPhrasing(e,{before:c,after:"](",...s.current()})),c+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(t.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=t.enter("destinationRaw"),c+=s.move(t.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=t.enter(`title${o}`),c+=s.move(" "+i),c+=s.move(t.safe(e.title,{before:c,after:i,...s.current()})),c+=s.move(i),l()),c+=s.move(")"),a(),c}function KV(e,n,t){return DT(e,t)?"<":"["}OT.peek=YV;function OT(e,n,t,r){const i=e.referenceType,o=t.enter("linkReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("[");const c=t.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(c+"]["),s();const d=t.stack;t.stack=[],s=t.enter("reference");const u=t.safe(t.associationId(e),{before:l,after:"]",...a.current()});return s(),t.stack=d,o(),i==="full"||!c||c!==u?l+=a.move(u+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function YV(){return"["}function Tm(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function JV(e){const n=Tm(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function QV(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function jT(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function XV(e,n,t,r){const i=t.enter("list"),o=t.bulletCurrent;let s=e.ordered?QV(t):Tm(t);const a=e.ordered?s==="."?")":".":JV(t);let l=n&&t.bulletLastUsed?s===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),jT(t)===s&&d){let u=-1;for(;++u<e.children.length;){const h=e.children[u];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),t.bulletCurrent=s;const c=t.containerFlow(e,r);return t.bulletLastUsed=s,t.bulletCurrent=o,i(),c}function ZV(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function e5(e,n,t,r){const i=ZV(t);let o=t.bulletCurrent||Tm(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(s=Math.ceil(s/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=t.enter("listItem"),c=t.indentLines(t.containerFlow(e,a.current()),d);return l(),c;function d(u,h,p){return h?(p?"":" ".repeat(s))+u:(p?o:o+" ".repeat(s-o.length))+u}}function n5(e,n,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),s=t.containerPhrasing(e,r);return o(),i(),s}const t5=tu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function r5(e,n,t,r){return(e.children.some(function(s){return t5(s)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function i5(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}LT.peek=o5;function LT(e,n,t,r){const i=i5(t),o=t.enter("strong"),s=t.createTracker(r),a=s.move(i+i);let l=s.move(t.containerPhrasing(e,{after:i,before:a,...s.current()}));const c=l.charCodeAt(0),d=vc(r.before.charCodeAt(r.before.length-1),c,i);d.inside&&(l=aa(c)+l.slice(1));const u=l.charCodeAt(l.length-1),h=vc(r.after.charCodeAt(0),u,i);h.inside&&(l=l.slice(0,-1)+aa(u));const p=s.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},a+l+p}function o5(e,n,t){return t.options.strong||"*"}function s5(e,n,t,r){return t.safe(e.value,r)}function a5(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function l5(e,n,t){const r=(jT(t)+(t.options.ruleSpaces?" ":"")).repeat(a5(t));return t.options.ruleSpaces?r.slice(0,-1):r}const NT={blockquote:DV,break:jw,code:_V,definition:zV,emphasis:PT,hardBreak:jw,heading:HV,html:ET,image:AT,imageReference:IT,inlineCode:RT,link:MT,linkReference:OT,list:XV,listItem:e5,paragraph:n5,root:r5,strong:LT,text:s5,thematicBreak:l5};function c5(){return{enter:{table:u5,tableData:Lw,tableHeader:Lw,tableRow:p5},exit:{codeText:h5,table:d5,tableData:vd,tableHeader:vd,tableRow:vd}}}function u5(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function d5(e){this.exit(e),this.data.inTable=void 0}function p5(e){this.enter({type:"tableRow",children:[]},e)}function vd(e){this.exit(e)}function Lw(e){this.enter({type:"tableCell",children:[]},e)}function h5(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,f5));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function f5(e,n){return n==="|"?n:e}function m5(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:s,tableCell:l,tableRow:a}};function s(p,m,g,b){return c(d(p,g,b),p.align)}function a(p,m,g,b){const f=u(p,g,b),y=c([f]);return y.slice(0,y.indexOf(`
`))}function l(p,m,g,b){const f=g.enter("tableCell"),y=g.enter("phrasing"),v=g.containerPhrasing(p,{...b,before:o,after:o});return y(),f(),v}function c(p,m){return IV(p,{align:m,alignDelimiters:r,padding:t,stringLength:i})}function d(p,m,g){const b=p.children;let f=-1;const y=[],v=m.enter("table");for(;++f<b.length;)y[f]=u(b[f],m,g);return v(),y}function u(p,m,g){const b=p.children;let f=-1;const y=[],v=m.enter("tableRow");for(;++f<b.length;)y[f]=l(b[f],p,m,g);return v(),y}function h(p,m,g){let b=NT.inlineCode(p,m,g);return g.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function g5(){return{exit:{taskListCheckValueChecked:Nw,taskListCheckValueUnchecked:Nw,paragraph:v5}}}function y5(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:w5}}}function Nw(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function v5(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let o=-1,s;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){s=a;break}}s===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function w5(e,n,t,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",a=t.createTracker(r);o&&a.move(s);let l=NT.listItem(e,n,t,{...r,...a.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),l;function c(d){return d+s}}function b5(){return[XB(),wV(),SV(),c5(),g5()]}function x5(e){return{extensions:[ZB(),bV(e),CV(),m5(e),y5()]}}const k5={tokenize:A5,partial:!0},_T={tokenize:I5,partial:!0},FT={tokenize:R5,partial:!0},zT={tokenize:D5,partial:!0},S5={tokenize:M5,partial:!0},BT={name:"wwwAutolink",tokenize:P5,previous:UT},VT={name:"protocolAutolink",tokenize:E5,previous:HT},sr={name:"emailAutolink",tokenize:T5,previous:qT},zt={};function C5(){return{text:zt}}let ai=48;for(;ai<123;)zt[ai]=sr,ai++,ai===58?ai=65:ai===91&&(ai=97);zt[43]=sr;zt[45]=sr;zt[46]=sr;zt[95]=sr;zt[72]=[sr,VT];zt[104]=[sr,VT];zt[87]=[sr,BT];zt[119]=[sr,BT];function T5(e,n,t){const r=this;let i,o;return s;function s(u){return!ch(u)||!qT.call(r,r.previous)||Pm(r.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(u))}function a(u){return ch(u)?(e.consume(u),a):u===64?(e.consume(u),l):t(u)}function l(u){return u===46?e.check(S5,d,c)(u):u===45||u===95||rn(u)?(o=!0,e.consume(u),l):d(u)}function c(u){return e.consume(u),i=!0,l}function d(u){return o&&i&&pn(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function P5(e,n,t){const r=this;return i;function i(s){return s!==87&&s!==119||!UT.call(r,r.previous)||Pm(r.events)?t(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(k5,e.attempt(_T,e.attempt(FT,o),t),t)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(s)}}function E5(e,n,t){const r=this;let i="",o=!1;return s;function s(u){return(u===72||u===104)&&HT.call(r,r.previous)&&!Pm(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(u),e.consume(u),a):t(u)}function a(u){if(pn(u)&&i.length<5)return i+=String.fromCodePoint(u),e.consume(u),a;if(u===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(u),l}return t(u)}function l(u){return u===47?(e.consume(u),o?c:(o=!0,l)):t(u)}function c(u){return u===null||mc(u)||ye(u)||Oi(u)||Zc(u)?t(u):e.attempt(_T,e.attempt(FT,d),t)(u)}function d(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function A5(e,n,t){let r=0;return i;function i(s){return(s===87||s===119)&&r<3?(r++,e.consume(s),i):s===46&&r===3?(e.consume(s),o):t(s)}function o(s){return s===null?t(s):n(s)}}function I5(e,n,t){let r,i,o;return s;function s(c){return c===46||c===95?e.check(zT,l,a)(c):c===null||ye(c)||Oi(c)||c!==45&&Zc(c)?l(c):(o=!0,e.consume(c),s)}function a(c){return c===95?r=!0:(i=r,r=void 0),e.consume(c),s}function l(c){return i||r||!o?t(c):n(c)}}function R5(e,n){let t=0,r=0;return i;function i(s){return s===40?(t++,e.consume(s),i):s===41&&r<t?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(zT,n,o)(s):s===null||ye(s)||Oi(s)?n(s):(e.consume(s),i)}function o(s){return s===41&&r++,e.consume(s),i}}function D5(e,n,t){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||ye(a)||Oi(a)?n(a):t(a)}function i(a){return a===null||a===40||a===91||ye(a)||Oi(a)?n(a):r(a)}function o(a){return pn(a)?s(a):t(a)}function s(a){return a===59?(e.consume(a),r):pn(a)?(e.consume(a),s):t(a)}}function M5(e,n,t){return r;function r(o){return e.consume(o),i}function i(o){return rn(o)?t(o):n(o)}}function UT(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ye(e)}function HT(e){return!pn(e)}function qT(e){return!(e===47||ch(e))}function ch(e){return e===43||e===45||e===46||e===95||rn(e)}function Pm(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const O5={tokenize:V5,partial:!0};function j5(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:F5,continuation:{tokenize:z5},exit:B5}},text:{91:{name:"gfmFootnoteCall",tokenize:_5},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:L5,resolveTo:N5}}}}function L5(e,n,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!s||!s._balanced)return t(l);const c=gt(r.sliceSerialize({start:s.end,end:r.now()}));return c.codePointAt(0)!==94||!o.includes(c.slice(1))?t(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),n(l))}}function N5(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",o,n],["enter",s,n],["exit",s,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...a),e}function _5(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,s;return a;function a(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),l}function l(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(o>999||u===93&&!s||u===null||u===91||ye(u))return t(u);if(u===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(gt(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return ye(u)||(s=!0),o++,e.consume(u),u===92?d:c}function d(u){return u===91||u===92||u===93?(e.consume(u),o++,c):c(u)}}function F5(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,s=0,a;return l;function l(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(m)}function d(m){if(s>999||m===93&&!a||m===null||m===91||ye(m))return t(m);if(m===93){e.exit("chunkString");const g=e.exit("gfmFootnoteDefinitionLabelString");return o=gt(r.sliceSerialize(g)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return ye(m)||(a=!0),s++,e.consume(m),m===92?u:d}function u(m){return m===91||m===92||m===93?(e.consume(m),s++,d):d(m)}function h(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),i.includes(o)||i.push(o),ce(e,p,"gfmFootnoteDefinitionWhitespace")):t(m)}function p(m){return n(m)}}function z5(e,n,t){return e.check(Pa,n,e.attempt(O5,n,t))}function B5(e){e.exit("gfmFootnoteDefinition")}function V5(e,n,t){const r=this;return ce(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?n(o):t(o)}}function U5(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(s,a){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let c=l;for(;c--;)if(s[c][0]==="exit"&&s[c][1].type==="strikethroughSequenceTemporary"&&s[c][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[c][1].end.offset-s[c][1].start.offset){s[l][1].type="strikethroughSequence",s[c][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},s[c][1].start),end:Object.assign({},s[l][1].end)},u={type:"strikethroughText",start:Object.assign({},s[c][1].end),end:Object.assign({},s[l][1].start)},h=[["enter",d,a],["enter",s[c][1],a],["exit",s[c][1],a],["enter",u,a]],p=a.parser.constructs.insideSpan.null;p&&_n(h,h.length,0,eu(p,s.slice(c+1,l),a)),_n(h,h.length,0,[["exit",u,a],["enter",s[l][1],a],["exit",s[l][1],a],["exit",d,a]]),_n(s,c-1,l-c+3,h),l=c+h.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function o(s,a,l){const c=this.previous,d=this.events;let u=0;return h;function h(m){return c===126&&d[d.length-1][1].type!=="characterEscape"?l(m):(s.enter("strikethroughSequenceTemporary"),p(m))}function p(m){const g=Lo(c);if(m===126)return u>1?l(m):(s.consume(m),u++,p);if(u<2&&!t)return l(m);const b=s.exit("strikethroughSequenceTemporary"),f=Lo(m);return b._open=!f||f===2&&!!g,b._close=!g||g===2&&!!f,a(m)}}}class H5{constructor(){this.map=[]}add(n,t,r){q5(this,n,t,r)}consume(n){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0}}function q5(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function W5(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function $5(){return{flow:{null:{name:"table",tokenize:G5,resolveAll:K5}}}}function G5(e,n,t){const r=this;let i=0,o=0,s;return a;function a(E){let N=r.events.length-1;for(;N>-1;){const _=r.events[N][1].type;if(_==="lineEnding"||_==="linePrefix")N--;else break}const O=N>-1?r.events[N][1].type:null,q=O==="tableHead"||O==="tableRow"?C:l;return q===C&&r.parser.lazy[r.now().line]?t(E):q(E)}function l(E){return e.enter("tableHead"),e.enter("tableRow"),c(E)}function c(E){return E===124||(s=!0,o+=1),d(E)}function d(E){return E===null?t(E):J(E)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),p):t(E):ie(E)?ce(e,d,"whitespace")(E):(o+=1,s&&(s=!1,i+=1),E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),s=!0,d):(e.enter("data"),u(E)))}function u(E){return E===null||E===124||ye(E)?(e.exit("data"),d(E)):(e.consume(E),E===92?h:u)}function h(E){return E===92||E===124?(e.consume(E),u):u(E)}function p(E){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(E):(e.enter("tableDelimiterRow"),s=!1,ie(E)?ce(e,m,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):m(E))}function m(E){return E===45||E===58?b(E):E===124?(s=!0,e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),g):T(E)}function g(E){return ie(E)?ce(e,b,"whitespace")(E):b(E)}function b(E){return E===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),f):E===45?(o+=1,f(E)):E===null||J(E)?S(E):T(E)}function f(E){return E===45?(e.enter("tableDelimiterFiller"),y(E)):T(E)}function y(E){return E===45?(e.consume(E),y):E===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(E))}function v(E){return ie(E)?ce(e,S,"whitespace")(E):S(E)}function S(E){return E===124?m(E):E===null||J(E)?!s||i!==o?T(E):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(E)):T(E)}function T(E){return t(E)}function C(E){return e.enter("tableRow"),A(E)}function A(E){return E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),A):E===null||J(E)?(e.exit("tableRow"),n(E)):ie(E)?ce(e,A,"whitespace")(E):(e.enter("data"),I(E))}function I(E){return E===null||E===124||ye(E)?(e.exit("data"),A(E)):(e.consume(E),E===92?M:I)}function M(E){return E===92||E===124?(e.consume(E),I):I(E)}}function K5(e,n){let t=-1,r=!0,i=0,o=[0,0,0,0],s=[0,0,0,0],a=!1,l=0,c,d,u;const h=new H5;for(;++t<e.length;){const p=e[t],m=p[1];p[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(_w(h,n,l,c,d),d=void 0,l=0),c={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(t,0,[["enter",c,n]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(r=!0,u=void 0,o=[0,0,0,0],s=[0,t+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(t,0,[["enter",d,n]])),i=m.type==="tableDelimiterRow"?2:d?3:1):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(r=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],u=sl(h,n,o,i,void 0,u),o=[0,0,0,0]),s[2]=t)):m.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(s[0]=s[1],u=sl(h,n,o,i,void 0,u)),o=s,s=[o[1],t,0,0])):m.type==="tableHead"?(a=!0,l=t):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=t,o[1]!==0?(s[0]=s[1],u=sl(h,n,o,i,t,u)):s[1]!==0&&(u=sl(h,n,s,i,t,u)),i=0):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(s[3]=t)}for(l!==0&&_w(h,n,l,c,d),h.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=W5(n.events,t))}return e}function sl(e,n,t,r,i,o){const s=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";t[0]!==0&&(o.end=Object.assign({},Ui(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const l=Ui(n.events,t[1]);if(o={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const c=Ui(n.events,t[2]),d=Ui(n.events,t[3]),u={type:a,start:Object.assign({},c),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",u,n]]),r!==2){const h=n.events[t[2]],p=n.events[t[3]];if(h[1].end=Object.assign({},p[1].end),h[1].type="chunkText",h[1].contentType="text",t[3]>t[2]+1){const m=t[2]+1,g=t[3]-t[2]-1;e.add(m,g,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return i!==void 0&&(o.end=Object.assign({},Ui(n.events,i)),e.add(i,0,[["exit",o,n]]),o=void 0),o}function _w(e,n,t,r,i){const o=[],s=Ui(n.events,t);i&&(i.end=Object.assign({},s),o.push(["exit",i,n])),r.end=Object.assign({},s),o.push(["exit",r,n]),e.add(t+1,0,o)}function Ui(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Y5={name:"tasklistCheck",tokenize:Q5};function J5(){return{text:{91:Y5}}}function Q5(e,n,t){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return ye(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):t(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):t(l)}function a(l){return J(l)?n(l):ie(l)?e.check({tokenize:X5},n,t)(l):t(l)}}function X5(e,n,t){return ce(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Z5(e){return eT([C5(),j5(),U5(e),$5(),J5()])}const eU={};function nU(e){const n=this,t=e||eU,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Z5(t)),o.push(b5()),s.push(x5(t))}function Al(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function WT({content:e,className:n,skipFirstH1:t=!1}){const{theme:r}=J1();let i=!0;return w.jsx("div",{className:zn("prose-docs",n),children:w.jsx(UB,{remarkPlugins:[nU],components:{h1:({children:o,...s})=>{if(t&&i)return i=!1,null;const a=Al(String(o));return w.jsx("h1",{id:a,...s,children:o})},h2:({children:o,...s})=>{const a=Al(String(o));return w.jsx("h2",{id:a,...s,children:o})},h3:({children:o,...s})=>{const a=Al(String(o));return w.jsx("h3",{id:a,...s,children:o})},code:({className:o,children:s,...a})=>{const l=/language-(\w+)/.exec(o||"");return l?w.jsx(tU,{language:l[1],theme:r,children:String(s).replace(/\n$/,"")}):w.jsx("code",{...a,children:s})},a:({href:o,children:s,...a})=>w.jsx("a",{href:o,target:o!=null&&o.startsWith("http")?"_blank":void 0,rel:o!=null&&o.startsWith("http")?"noopener noreferrer":void 0,...a,children:s})},children:e})})}function tU({language:e,children:n,theme:t}){const[r,i]=x.useState(!1),o=async()=>{await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),2e3)};return w.jsxs("div",{className:"relative group",children:[w.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[w.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded",children:e}),w.jsx("button",{onClick:o,className:"p-1.5 rounded bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Copy code",children:r?w.jsx(SI,{className:"h-3.5 w-3.5"}):w.jsx(AI,{className:"h-3.5 w-3.5"})})]}),w.jsx("pre",{className:"bg-muted p-4 rounded-lg overflow-x-auto text-sm max-w-full",children:w.jsx("code",{className:"block whitespace-pre-wrap break-all",children:n})})]})}function rU(e){const n=/^(#{2,3})\s+(.+)$/gm,t=[];let r;for(;(r=n.exec(e))!==null;)t.push({id:Al(r[2]),text:r[2],level:r[1].length});return t}const Fw=Object.assign({"/src/content/docs/hackerrank-java/input-output.md":jS,"/src/content/docs/hackerrank-java/introduction.md":LS,"/src/content/docs/introduction/welcome.md":NS,"/src/content/docs/leetcode/can-place-flowers.md":_S,"/src/content/docs/leetcode/gcd-strings.md":FS,"/src/content/docs/leetcode/increasing-triplet-subsequence.md":zS,"/src/content/docs/leetcode/kids-with-candies.md":BS,"/src/content/docs/leetcode/merge-string-alternatively.md":VS,"/src/content/docs/leetcode/product-of-array-except-self.md":US,"/src/content/docs/leetcode/reverse-vowels-of-strings.md":HS,"/src/content/docs/leetcode/reverse-words-in-string.md":qS,"/src/content/docs/leetcode/string-compression.md":WS,"/src/content/docs/openshift-redhat/part-1-introduction.md":$S,"/src/content/docs/openshift-redhat/part-10-production.md":GS,"/src/content/docs/openshift-redhat/part-2-container-tools.md":KS,"/src/content/docs/openshift-redhat/part-3-kubernetes.md":YS,"/src/content/docs/openshift-redhat/part-4-openshift.md":JS,"/src/content/docs/openshift-redhat/part-5-operatingmachines.md":QS,"/src/content/docs/openshift-redhat/part-6-cli-tools.md":XS,"/src/content/docs/openshift-redhat/part-7-deployment.md":ZS,"/src/content/docs/openshift-redhat/part-8-access-control.md":eC,"/src/content/docs/openshift-redhat/part-9-features.md":nC,"/src/content/docs/rest-api/api-doc-strategy.md":tC,"/src/content/docs/rest-api/authentication-and-authorization.md":rC,"/src/content/docs/rest-api/error-handling.md":iC,"/src/content/docs/rest-api/http-basics.md":oC,"/src/content/docs/rest-api/http-status-codes.md":sC,"/src/content/docs/rest-api/optimization.md":aC,"/src/content/docs/rest-api/pagination.md":lC,"/src/content/docs/rest-api/rate-limiting.md":cC,"/src/content/docs/rest-api/real-patterns.md":uC,"/src/content/docs/rest-api/request-response-format.md":dC,"/src/content/docs/rest-api/resource-design.md":pC,"/src/content/docs/rest-api/rest-api-fundamentals.md":hC,"/src/content/docs/rest-api/security.md":fC,"/src/content/docs/rest-api/testing-reat-api.md":mC,"/src/content/docs/rest-api/validation.md":gC,"/src/content/docs/rest-api/versioning.md":yC,"/src/content/docs/tutorials/connect-mongodb.md":vC,"/src/content/docs/tutorials/create-basic-rest-api.md":wC,"/src/content/docs/tutorials/create-db-table.md":bC,"/src/content/docs/tutorials/handle-errors-in-java.md":xC,"/src/content/docs/tutorials/install-git.md":kC,"/src/content/docs/tutorials/set-up-git.md":SC,"/src/content/docs/tutorials/test-api.md":CC});function iU(){const e={};return Object.keys(Fw).forEach(n=>{const i=n.split("/")[5].replace(".md","");e[i]=Fw[n]}),e}const oU=iU();function zw(){const{slug:e}=W1(),n=e||Uv()||"introduction",t=zC(n),r=oU[n];if(!t||!r){const c=Uv();return w.jsx(Ep,{to:`/docs/${c}`,replace:!0})}const i=rU(r),o=Pi.categories.flatMap(c=>c.items),s=o.findIndex(c=>c.slug===n),a=s>0?o[s-1]:null,l=s<o.length-1?o[s+1]:null;return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsx(u4,{headings:i,children:w.jsxs(ae.article,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[w.jsxs("nav",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-6",children:[w.jsx(We,{to:"/docs",className:"hover:text-foreground transition-colors",children:"Docs"}),w.jsx("span",{children:"/"}),w.jsx("span",{className:"text-foreground",children:t.title})]}),w.jsx(WT,{content:r}),w.jsxs("nav",{className:"mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a?w.jsx(Oe,{asChild:!0,variant:"outline",className:"justify-start h-auto py-4 px-4 min-w-0",children:w.jsxs(We,{to:`/docs/${a.slug}`,children:[w.jsx(TI,{className:"h-4 w-4 mr-2 flex-shrink-0"}),w.jsxs("div",{className:"text-left min-w-0",children:[w.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Previous"}),w.jsx("div",{className:"font-medium truncate",children:a.title})]})]})}):w.jsx("div",{}),l&&w.jsx(Oe,{asChild:!0,variant:"outline",className:"justify-end h-auto py-4 px-4 min-w-0",children:w.jsxs(We,{to:`/docs/${l.slug}`,children:[w.jsxs("div",{className:"text-right min-w-0",children:[w.jsx("div",{className:"text-xs text-muted-foreground mb-0.5",children:"Next"}),w.jsx("div",{className:"font-medium truncate",children:l.title})]}),w.jsx(PI,{className:"h-4 w-4 ml-2 flex-shrink-0"})]})})]})]})})}),w.jsx(Ca,{})]})}function sU(){const[e,n]=x.useState(null),[t,r]=x.useState("newest"),i=s4(),o=x.useMemo(()=>{let a=[...am];return e&&(a=a.filter(l=>l.tags.includes(e))),a.sort((l,c)=>{const d=new Date(l.date).getTime(),u=new Date(c.date).getTime();return t==="newest"?u-d:d-u}),a},[e,t]),s=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-2xl mb-12",children:[w.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Blog"}),w.jsx("p",{className:"text-lg text-muted-foreground",children:"Thoughts on technical writing, documentation strategy, and developer experience."})]}),w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"flex flex-col sm:flex-row gap-4 mb-8",children:[w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsx(RI,{className:"h-4 w-4 text-muted-foreground"}),w.jsx(Oe,{variant:e===null?"secondary":"ghost",size:"sm",onClick:()=>n(null),children:"All"}),i.map(a=>w.jsx(Oe,{variant:e===a?"secondary":"ghost",size:"sm",onClick:()=>n(a),children:a},a))]}),w.jsxs("div",{className:"flex items-center gap-2 sm:ml-auto",children:[w.jsx("span",{className:"text-sm text-muted-foreground",children:"Sort:"}),w.jsx(Oe,{variant:t==="newest"?"secondary":"ghost",size:"sm",onClick:()=>r("newest"),children:"Newest"}),w.jsx(Oe,{variant:t==="oldest"?"secondary":"ghost",size:"sm",onClick:()=>r("oldest"),children:"Oldest"})]})]}),w.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:o.map((a,l)=>w.jsx(ae.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1+l*.05},className:"group",children:w.jsxs(We,{to:`/blog/${a.slug}`,className:"block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",children:[w.jsx("div",{className:"flex flex-wrap gap-1 mb-3",children:a.tags.map(c=>w.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",children:[w.jsx(q0,{className:"h-3 w-3"}),c]},c))}),w.jsx("h2",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2",children:a.title}),w.jsx("div",{className:"flex items-center gap-4 text-xs text-muted-foreground mt-auto",children:w.jsxs("span",{className:"flex items-center gap-1",children:[w.jsx(B0,{className:"h-3.5 w-3.5"}),s(a.date)]})})]})},a.slug))}),o.length===0&&w.jsxs("div",{className:"text-center py-12",children:[w.jsxs("p",{className:"text-muted-foreground",children:['No posts found for "',e,'"']}),w.jsx(Oe,{variant:"link",onClick:()=>n(null),className:"mt-2",children:"Clear filter"})]})]})}),w.jsx(Ca,{})]})}const Bw=Object.assign({"/src/content/blogs/design-before-implementation.md":TC,"/src/content/blogs/documentation-as-code.md":PC,"/src/content/blogs/error-handling.md":EC,"/src/content/blogs/google-technical-writer-course.md":AC,"/src/content/blogs/impact-of-naming.md":IC,"/src/content/blogs/product-of-array-except-self.md":RC,"/src/content/blogs/readme-files.md":DC,"/src/content/blogs/scalability.md":MC,"/src/content/blogs/why-documentation-is-more-than-just-writing.md":OC,"/src/content/blogs/writing-effective-api-documentation.md":jC});function aU(e){const n=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,t=e.match(n);if(!t)return{frontmatter:{},body:e};const r=t[1],i=t[2],o={};return r.split(`
`).forEach(s=>{const[a,...l]=s.split(":");if(a&&l.length>0){const d=l.join(":").trim().replace(/^["']|["']$/g,"");if(a.trim()==="tags"&&d.startsWith("[")){const u=d.replace(/'/g,'"');o[a.trim()]=JSON.parse(u)}else o[a.trim()]=d}}),{frontmatter:o,body:i}}function lU(){const e={};return Object.keys(Bw).forEach(n=>{const r=n.split("/").pop().replace(".md",""),{body:i}=aU(Bw[n]);e[r]=i}),e}const cU=lU();function uU(){const{slug:e}=W1();if(!e)return w.jsx(Ep,{to:"/blog",replace:!0});const n=o4(e),t=cU[e];if(!n||!t)return w.jsx(Ep,{to:"/blog",replace:!0});const r=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),i=window.location.href,o=`${n.title} - TechWriter Portfolio`;return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsx("main",{className:"flex-1 pt-nav",children:w.jsxs("article",{className:"container mx-auto px-4 lg:px-8 py-12",children:[w.jsx(ae.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"mb-8",children:w.jsx(Oe,{asChild:!0,variant:"ghost",size:"sm",className:"gap-2",children:w.jsxs(We,{to:"/blog",children:[w.jsx(kI,{className:"h-4 w-4"}),"Back to Blog"]})})}),w.jsxs(ae.header,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-3xl mx-auto mb-12",children:[w.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.tags.map(s=>w.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary",children:[w.jsx(q0,{className:"h-3.5 w-3.5"}),s]},s))}),w.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 leading-tight",children:n.title}),w.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border",children:[w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx(B0,{className:"h-4 w-4"}),r(n.date)]}),w.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx(LI,{className:"h-4 w-4"}),"Share:"]}),w.jsx("a",{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on Twitter",children:w.jsx(FI,{className:"h-4 w-4"})}),w.jsx("a",{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Share on LinkedIn",children:w.jsx(pf,{className:"h-4 w-4"})})]})]})]}),w.jsx(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"max-w-3xl mx-auto",children:w.jsx(WT,{content:t})}),w.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"max-w-3xl mx-auto mt-16 p-8 rounded-xl bg-card border border-border text-center",children:[w.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Enjoyed this article?"}),w.jsx("p",{className:"text-muted-foreground mb-6",children:"Explore more technical writing insights and documentation samples."}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[w.jsx(Oe,{asChild:!0,children:w.jsx(We,{to:"/blog",children:"More Articles"})}),w.jsx(Oe,{asChild:!0,variant:"outline",children:w.jsx(We,{to:"/docs",children:"View Documentation"})})]})]})]})}),w.jsx(Ca,{})]})}const dU=[{icon:BI,title:"User-First",description:"Every piece of documentation starts with understanding the reader's goals and pain points."},{icon:DI,title:"Clarity Over Completeness",description:"Better to explain one thing perfectly than ten things poorly. Focus enables mastery."},{icon:df,title:"Code That Works",description:"Every example is tested, every snippet runs. Trust is built through reliability."},{icon:ya,title:"Progressive Disclosure",description:"Layer complexity appropriately. Quick answers first, deep dives available."}],pU=["API Documentation","Developer Guides","SDK Documentation","Markdown/MDX","Docs-as-Code","Technical Editing","Content Strategy","Developer Experience","Git/GitHub","React/JavaScript","Java","SpringBoot","AWS","MongoDB","REST API","SDLC","JDBC","Data Structure & Algorithms","Postman"],hU=[{title:"REST API Complete Guide",description:"A single, structured guide covering REST fundamentals, real-world API design, best practices, and common mistakes — built for developers who want clarity, not confusion.",link:"/docs/rest-api-fundamentals"},{title:"LeetCode 75 (Hard) Mastery",description:"A pattern-driven walkthrough of the toughest LeetCode problems, focused on deep understanding, optimal solutions, and interview-ready thinking.",link:"/docs/merge-string-alternatively"},{title:"Engineering Blogs & Insights",description:"Clear, practical writing on software engineering, problem-solving, and real lessons learned while building and learning — no fluff, just signal.",link:"/blog"}],fU={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},wd={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function mU(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(Sa,{}),w.jsxs("main",{className:"flex-1 pt-nav",children:[w.jsx("section",{className:"container mx-auto px-4 lg:px-8 py-16 md:py-24",children:w.jsxs(ae.div,{variants:fU,initial:"hidden",animate:"visible",className:"max-w-3xl",children:[w.jsx(ae.h1,{variants:wd,className:"text-4xl md:text-5xl font-bold mb-6",children:"About Me"}),w.jsxs(ae.div,{variants:wd,className:"text-lg text-muted-foreground space-y-4 mb-8",children:[w.jsxs("p",{children:["I'm a ",w.jsx("span",{className:"text-foreground font-medium",children:"B.Tech graduate"})," with a strong interest in technical writing and documentation. I enjoy breaking down complex technical concepts and presenting them in a clear, structured way."]}),w.jsxs("p",{children:["I’m building experience in areas like ",w.jsx("span",{className:"text-foreground font-medium",children:"API documentation, developer guides, and technical content"}),", with a focus on writing documentation that’s accurate, easy to follow, and useful for developers."]})]}),w.jsxs(ae.div,{variants:wd,className:"flex flex-wrap gap-4",children:[w.jsx(Oe,{asChild:!0,className:"gap-2",children:w.jsxs("a",{href:"#contact",children:[w.jsx(yp,{className:"h-4 w-4"}),"Get in Touch"]})}),w.jsx(Oe,{asChild:!0,variant:"outline",className:"gap-2",children:w.jsxs("a",{href:"/Docs/resume.html",target:"_blank",rel:"noopener noreferrer",children:[w.jsx(II,{className:"h-4 w-4"}),"View Resume"]})})]})]})}),w.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Documentation Philosophy"}),w.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Great documentation isn't just about explaining features—it's about empowering users to succeed. These principles guide every document I create."})]}),w.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:dU.map((e,n)=>w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},className:"flex gap-4 p-6 rounded-xl bg-background border border-border",children:[w.jsx("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",children:w.jsx(e.icon,{className:"h-6 w-6 text-primary"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"font-semibold mb-1",children:e.title}),w.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},e.title))})]})}),w.jsx("section",{className:"py-16",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-8",children:w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Skills & Expertise"})}),w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap gap-3",children:pU.map(e=>w.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium",children:[w.jsx(EI,{className:"h-4 w-4 text-primary"}),e]},e))})]})}),w.jsx("section",{className:"py-16 bg-card/50 border-t border-b border-border",children:w.jsxs("div",{className:"container mx-auto px-4 lg:px-8",children:[w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Writing Samples"}),w.jsx("p",{className:"text-muted-foreground max-w-2xl",children:"Explore documentation samples that demonstrate my approach to technical writing."})]}),w.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:hU.map((e,n)=>w.jsx(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},children:w.jsxs(We,{to:e.link,className:"block h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group",children:[w.jsx("h3",{className:"font-semibold mb-2 group-hover:text-primary transition-colors",children:e.title}),w.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:e.description}),w.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-primary font-medium",children:["View Sample",w.jsx(gp,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform"})]})]})},e.title))})]})}),w.jsx("section",{id:"contact",className:"py-16",children:w.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:w.jsxs(ae.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"max-w-2xl mx-auto text-center",children:[w.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Let's Connect"}),w.jsx("p",{className:"text-muted-foreground mb-8",children:"Interested in working together? I'm always open to discussing new opportunities, documentation projects, or just chatting about technical writing."}),w.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[w.jsx("a",{href:"https://github.com/Rucha-1111/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"GitHub",children:w.jsx(V0,{className:"h-5 w-5"})}),w.jsx("a",{href:"https://www.linkedin.com/in/rucha-gade/",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors","aria-label":"LinkedIn",children:w.jsx(pf,{className:"h-5 w-5"})})]}),w.jsx(Oe,{asChild:!0,size:"lg",className:"glow",children:w.jsxs("a",{href:"mailto:ruchagade20@gmail.com",className:"gap-2",children:[w.jsx(yp,{className:"h-4 w-4"}),"ruchagade20@gmail.com"]})})]})})})]}),w.jsx(Ca,{})]})}const gU=()=>{const e=or();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),w.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:w.jsxs("div",{className:"text-center",children:[w.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),w.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),w.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},yU=new cM,vU=()=>w.jsx(dM,{client:yU,children:w.jsx(dO,{children:w.jsxs(zD,{children:[w.jsx(kR,{}),w.jsx(e2,{}),w.jsxs(aO,{basename:"/Docs",children:[w.jsx(pO,{}),w.jsxs(eO,{children:[w.jsx(vr,{path:"/",element:w.jsx(Z_,{})}),w.jsx(vr,{path:"/docs",element:w.jsx(zw,{})}),w.jsx(vr,{path:"/docs/:slug",element:w.jsx(zw,{})}),w.jsx(vr,{path:"/blog",element:w.jsx(sU,{})}),w.jsx(vr,{path:"/blog/:slug",element:w.jsx(uU,{})}),w.jsx(vr,{path:"/about",element:w.jsx(mU,{})}),w.jsx(vr,{path:"*",element:w.jsx(gU,{})})]})]})]})})});c0(document.getElementById("root")).render(w.jsx(vU,{}));
