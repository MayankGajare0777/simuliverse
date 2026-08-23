var OE=Object.defineProperty;var FE=(o,e,t)=>e in o?OE(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var it=(o,e,t)=>FE(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Qx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $d={exports:{}},Ql={},Kd={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function kE(){if(P0)return bt;P0=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,G,$){this.props=F,this.context=G,this.refs=M,this.updater=$||v}x.prototype.isReactComponent={},x.prototype.setState=function(F,G){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,G,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function R(F,G,$){this.props=F,this.context=G,this.refs=M,this.updater=$||v}var T=R.prototype=new y;T.constructor=R,E(T,x.prototype),T.isPureReactComponent=!0;var C=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function W(F,G,$){var ee,ce={},de=null,me=null;if(G!=null)for(ee in G.ref!==void 0&&(me=G.ref),G.key!==void 0&&(de=""+G.key),G)U.call(G,ee)&&!P.hasOwnProperty(ee)&&(ce[ee]=G[ee]);var Me=arguments.length-2;if(Me===1)ce.children=$;else if(1<Me){for(var Pe=Array(Me),ze=0;ze<Me;ze++)Pe[ze]=arguments[ze+2];ce.children=Pe}if(F&&F.defaultProps)for(ee in Me=F.defaultProps,Me)ce[ee]===void 0&&(ce[ee]=Me[ee]);return{$$typeof:o,type:F,key:de,ref:me,props:ce,_owner:I.current}}function A(F,G){return{$$typeof:o,type:F.type,key:G,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function te(F){var G={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function($){return G[$]})}var Y=/\/+/g;function he(F,G){return typeof F=="object"&&F!==null&&F.key!=null?te(""+F.key):G.toString(36)}function z(F,G,$,ee,ce){var de=typeof F;(de==="undefined"||de==="boolean")&&(F=null);var me=!1;if(F===null)me=!0;else switch(de){case"string":case"number":me=!0;break;case"object":switch(F.$$typeof){case o:case e:me=!0}}if(me)return me=F,ce=ce(me),F=ee===""?"."+he(me,0):ee,C(ce)?($="",F!=null&&($=F.replace(Y,"$&/")+"/"),z(ce,G,$,"",function(ze){return ze})):ce!=null&&(b(ce)&&(ce=A(ce,$+(!ce.key||me&&me.key===ce.key?"":(""+ce.key).replace(Y,"$&/")+"/")+F)),G.push(ce)),1;if(me=0,ee=ee===""?".":ee+":",C(F))for(var Me=0;Me<F.length;Me++){de=F[Me];var Pe=ee+he(de,Me);me+=z(de,G,$,Pe,ce)}else if(Pe=g(F),typeof Pe=="function")for(F=Pe.call(F),Me=0;!(de=F.next()).done;)de=de.value,Pe=ee+he(de,Me++),me+=z(de,G,$,Pe,ce);else if(de==="object")throw G=String(F),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return me}function j(F,G,$){if(F==null)return F;var ee=[],ce=0;return z(F,ee,"","",function(de){return G.call($,de,ce++)}),ee}function J(F){if(F._status===-1){var G=F._result;G=G(),G.then(function($){(F._status===0||F._status===-1)&&(F._status=1,F._result=$)},function($){(F._status===0||F._status===-1)&&(F._status=2,F._result=$)}),F._status===-1&&(F._status=0,F._result=G)}if(F._status===1)return F._result.default;throw F._result}var Z={current:null},B={transition:null},q={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function D(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:j,forEach:function(F,G,$){j(F,function(){G.apply(this,arguments)},$)},count:function(F){var G=0;return j(F,function(){G++}),G},toArray:function(F){return j(F,function(G){return G})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},bt.Component=x,bt.Fragment=t,bt.Profiler=r,bt.PureComponent=R,bt.StrictMode=n,bt.Suspense=f,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,bt.act=D,bt.cloneElement=function(F,G,$){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ee=E({},F.props),ce=F.key,de=F.ref,me=F._owner;if(G!=null){if(G.ref!==void 0&&(de=G.ref,me=I.current),G.key!==void 0&&(ce=""+G.key),F.type&&F.type.defaultProps)var Me=F.type.defaultProps;for(Pe in G)U.call(G,Pe)&&!P.hasOwnProperty(Pe)&&(ee[Pe]=G[Pe]===void 0&&Me!==void 0?Me[Pe]:G[Pe])}var Pe=arguments.length-2;if(Pe===1)ee.children=$;else if(1<Pe){Me=Array(Pe);for(var ze=0;ze<Pe;ze++)Me[ze]=arguments[ze+2];ee.children=Me}return{$$typeof:o,type:F.type,key:ce,ref:de,props:ee,_owner:me}},bt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},bt.createElement=W,bt.createFactory=function(F){var G=W.bind(null,F);return G.type=F,G},bt.createRef=function(){return{current:null}},bt.forwardRef=function(F){return{$$typeof:u,render:F}},bt.isValidElement=b,bt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:J}},bt.memo=function(F,G){return{$$typeof:d,type:F,compare:G===void 0?null:G}},bt.startTransition=function(F){var G=B.transition;B.transition={};try{F()}finally{B.transition=G}},bt.unstable_act=D,bt.useCallback=function(F,G){return Z.current.useCallback(F,G)},bt.useContext=function(F){return Z.current.useContext(F)},bt.useDebugValue=function(){},bt.useDeferredValue=function(F){return Z.current.useDeferredValue(F)},bt.useEffect=function(F,G){return Z.current.useEffect(F,G)},bt.useId=function(){return Z.current.useId()},bt.useImperativeHandle=function(F,G,$){return Z.current.useImperativeHandle(F,G,$)},bt.useInsertionEffect=function(F,G){return Z.current.useInsertionEffect(F,G)},bt.useLayoutEffect=function(F,G){return Z.current.useLayoutEffect(F,G)},bt.useMemo=function(F,G){return Z.current.useMemo(F,G)},bt.useReducer=function(F,G,$){return Z.current.useReducer(F,G,$)},bt.useRef=function(F){return Z.current.useRef(F)},bt.useState=function(F){return Z.current.useState(F)},bt.useSyncExternalStore=function(F,G,$){return Z.current.useSyncExternalStore(F,G,$)},bt.useTransition=function(){return Z.current.useTransition()},bt.version="18.3.1",bt}var L0;function Cm(){return L0||(L0=1,Kd.exports=kE()),Kd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function zE(){if(D0)return Ql;D0=1;var o=Cm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var p,_={},g=null,v=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(_[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)_[p]===void 0&&(_[p]=f[p]);return{$$typeof:e,type:u,key:g,ref:v,props:_,_owner:r.current}}return Ql.Fragment=t,Ql.jsx=c,Ql.jsxs=c,Ql}var N0;function BE(){return N0||(N0=1,$d.exports=zE()),$d.exports}var ke=BE(),Zt=Cm();const HE=Qx(Zt);var jc={},Zd={exports:{}},wi={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function VE(){return I0||(I0=1,(function(o){function e(B,q){var D=B.length;B.push(q);e:for(;0<D;){var F=D-1>>>1,G=B[F];if(0<r(G,q))B[F]=q,B[D]=G,D=F;else break e}}function t(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var q=B[0],D=B.pop();if(D!==q){B[0]=D;e:for(var F=0,G=B.length,$=G>>>1;F<$;){var ee=2*(F+1)-1,ce=B[ee],de=ee+1,me=B[de];if(0>r(ce,D))de<G&&0>r(me,ce)?(B[F]=me,B[de]=D,F=de):(B[F]=ce,B[ee]=D,F=ee);else if(de<G&&0>r(me,D))B[F]=me,B[de]=D,F=de;else break e}}return q}function r(B,q){var D=B.sortIndex-q.sortIndex;return D!==0?D:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],d=[],p=1,_=null,g=3,v=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var q=t(d);q!==null;){if(q.callback===null)n(d);else if(q.startTime<=B)n(d),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(d)}}function C(B){if(M=!1,T(B),!E)if(t(f)!==null)E=!0,J(U);else{var q=t(d);q!==null&&Z(C,q.startTime-B)}}function U(B,q){E=!1,M&&(M=!1,y(W),W=-1),v=!0;var D=g;try{for(T(q),_=t(f);_!==null&&(!(_.expirationTime>q)||B&&!te());){var F=_.callback;if(typeof F=="function"){_.callback=null,g=_.priorityLevel;var G=F(_.expirationTime<=q);q=o.unstable_now(),typeof G=="function"?_.callback=G:_===t(f)&&n(f),T(q)}else n(f);_=t(f)}if(_!==null)var $=!0;else{var ee=t(d);ee!==null&&Z(C,ee.startTime-q),$=!1}return $}finally{_=null,g=D,v=!1}}var I=!1,P=null,W=-1,A=5,b=-1;function te(){return!(o.unstable_now()-b<A)}function Y(){if(P!==null){var B=o.unstable_now();b=B;var q=!0;try{q=P(!0,B)}finally{q?he():(I=!1,P=null)}}else I=!1}var he;if(typeof R=="function")he=function(){R(Y)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,j=z.port2;z.port1.onmessage=Y,he=function(){j.postMessage(null)}}else he=function(){x(Y,0)};function J(B){P=B,I||(I=!0,he())}function Z(B,q){W=x(function(){B(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){E||v||(E=!0,J(U))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var D=g;g=q;try{return B()}finally{g=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var D=g;g=B;try{return q()}finally{g=D}},o.unstable_scheduleCallback=function(B,q,D){var F=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,B={id:p++,callback:q,priorityLevel:B,startTime:D,expirationTime:G,sortIndex:-1},D>F?(B.sortIndex=D,e(d,B),t(f)===null&&B===t(d)&&(M?(y(W),W=-1):M=!0,Z(C,D-F))):(B.sortIndex=G,e(f,B),E||v||(E=!0,J(U))),B},o.unstable_shouldYield=te,o.unstable_wrapCallback=function(B){var q=g;return function(){var D=g;g=q;try{return B.apply(this,arguments)}finally{g=D}}}})(Jd)),Jd}var U0;function GE(){return U0||(U0=1,Qd.exports=VE()),Qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function WE(){if(O0)return wi;O0=1;var o=Cm(),e=GE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(i){return f.call(_,i)?!0:f.call(p,i)?!1:d.test(i)?_[i]=!0:(p[i]=!0,!1)}function v(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,h){if(s===null||typeof s>"u"||v(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,h,m,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,R);x[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,R);x[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,R);x[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,s,l,h){var m=x.hasOwnProperty(s)?x[s]:null;(m!==null?m.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,h)&&(l=null),h||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,h=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),te=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),B=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var D=Object.assign,F;function G(i){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var $=!1;function ee(i,s){if(!i||$)return"";$=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var h=fe}Reflect.construct(i,[],s)}else{try{s.call()}catch(fe){h=fe}i.call(s.prototype)}else{try{throw Error()}catch(fe){h=fe}i()}}catch(fe){if(fe&&h&&typeof fe.stack=="string"){for(var m=fe.stack.split(`
`),S=h.stack.split(`
`),w=m.length-1,k=S.length-1;1<=w&&0<=k&&m[w]!==S[k];)k--;for(;1<=w&&0<=k;w--,k--)if(m[w]!==S[k]){if(w!==1||k!==1)do if(w--,k--,0>k||m[w]!==S[k]){var V=`
`+m[w].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=w&&0<=k);break}}}finally{$=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function ce(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=ee(i.type,!1),i;case 11:return i=ee(i.type.render,!1),i;case 1:return i=ee(i.type,!0),i;default:return""}}function de(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case I:return"Portal";case A:return"Profiler";case W:return"StrictMode";case he:return"Suspense";case z:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case te:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case Y:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case j:return s=i.displayName||null,s!==null?s:de(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return de(i(s))}catch{}}return null}function me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(s);case 8:return s===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ze(i){var s=Pe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,S=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(w){h=""+w,S.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function st(i){i._valueTracker||(i._valueTracker=ze(i))}function ie(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Pe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ut(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ue(i,s){var l=s.checked;return D({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Je(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Me(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Fe(i,s){s=s.checked,s!=null&&T(i,"checked",s,!1)}function se(i,s){Fe(i,s);var l=Me(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?O(i,s.type,l):s.hasOwnProperty("defaultValue")&&O(i,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function ct(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function O(i,s,l){(s!=="number"||ut(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var L=Array.isArray;function Q(i,s,l,h){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Me(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,h&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function _e(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ge(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(L(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Me(l)}}function ye(i,s){var l=Me(s.value),h=Me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Oe(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function De(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?De(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var je,ft=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(je=je||document.createElement("div"),je.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=je.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(i){et.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Tt[s]=Tt[i]})});function mt(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Tt.hasOwnProperty(i)&&Tt[i]?(""+s).trim():s+"px"}function qe(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=mt(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,m):i[l]=m}}var Be=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Et(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function Ne(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var we=null,H=null,Te=null;function Re(i){if(i=Fl(i)){if(typeof we!="function")throw Error(t(280));var s=i.stateNode;s&&(s=lc(s),we(i.stateNode,i.type,s))}}function ot(i){H?Te?Te.push(i):Te=[i]:H=i}function rt(){if(H){var i=H,s=Te;if(Te=H=null,Re(i),s)for(i=0;i<s.length;i++)Re(s[i])}}function At(i,s){return i(s)}function It(){}var We=!1;function Ve(i,s,l){if(We)return i(s,l);We=!0;try{return At(i,s,l)}finally{We=!1,(H!==null||Te!==null)&&(It(),rt())}}function $e(i,s){var l=i.stateNode;if(l===null)return null;var h=lc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ee=!1;if(u)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){Ee=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{Ee=!1}function at(i,s,l,h,m,S,w,k,V){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(l,fe)}catch(xe){this.onError(xe)}}var _t=!1,qt=null,Mt=!1,Gt=null,vn={onError:function(i){_t=!0,qt=i}};function Qt(i,s,l,h,m,S,w,k,V){_t=!1,qt=null,at.apply(vn,arguments)}function $t(i,s,l,h,m,S,w,k,V){if(Qt.apply(this,arguments),_t){if(_t){var fe=qt;_t=!1,qt=null}else throw Error(t(198));Mt||(Mt=!0,Gt=fe)}}function Nt(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function qn(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function N(i){if(Nt(i)!==i)throw Error(t(188))}function K(i){var s=i.alternate;if(!s){if(s=Nt(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var m=l.return;if(m===null)break;var S=m.alternate;if(S===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===l)return N(m),i;if(S===h)return N(m),s;S=S.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=S;else{for(var w=!1,k=m.child;k;){if(k===l){w=!0,l=m,h=S;break}if(k===h){w=!0,h=m,l=S;break}k=k.sibling}if(!w){for(k=S.child;k;){if(k===l){w=!0,l=S,h=m;break}if(k===h){w=!0,h=S,l=m;break}k=k.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ue(i){return i=K(i),i!==null?le(i):null}function le(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=le(i);if(s!==null)return s;i=i.sibling}return null}var re=e.unstable_scheduleCallback,be=e.unstable_cancelCallback,Xe=e.unstable_shouldYield,ht=e.unstable_requestPaint,Le=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,lt=e.unstable_ImmediatePriority,xt=e.unstable_UserBlockingPriority,Xt=e.unstable_NormalPriority,xn=e.unstable_LowPriority,Bt=e.unstable_IdlePriority,Tn=null,Rt=null;function vt(i){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Tn,i,void 0,(i.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:Xu,on=Math.log,Yr=Math.LN2;function Xu(i){return i>>>=0,i===0?32:31-(on(i)/Yr|0)|0}var Nr=64,vs=4194304;function mn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function tr(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,m=i.suspendedLanes,S=i.pingedLanes,w=l&268435455;if(w!==0){var k=w&~m;k!==0?h=mn(k):(S&=w,S!==0&&(h=mn(S)))}else w=l&~m,w!==0?h=mn(w):S!==0&&(h=mn(S));if(h===0)return 0;if(s!==0&&s!==h&&(s&m)===0&&(m=h&-h,S=s&-s,m>=S||m===16&&(S&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-ai(s),m=1<<l,h|=i[l],s&=~m;return h}function xl(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xi(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,m=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-ai(S),k=1<<w,V=m[w];V===-1?((k&l)===0||(k&h)!==0)&&(m[w]=xl(k,s)):V<=s&&(i.expiredLanes|=k),S&=~k}}function co(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Yu(){var i=Nr;return Nr<<=1,(Nr&4194240)===0&&(Nr=64),i}function ta(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function yl(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ai(s),i[s]=l}function iM(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-ai(l),S=1<<m;s[m]=0,h[m]=-1,i[m]=-1,l&=~S}}function vh(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-ai(l),m=1<<h;m&s|i[h]&s&&(i[h]|=s),l&=~m}}var Yt=0;function lg(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ug,xh,cg,fg,hg,yh=!1,ju=[],xs=null,ys=null,Ss=null,Sl=new Map,Ml=new Map,Ms=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(i,s){switch(i){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":Sl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(s.pointerId)}}function El(i,s,l,h,m,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:S,targetContainers:[m]},s!==null&&(s=Fl(s),s!==null&&xh(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function sM(i,s,l,h,m){switch(s){case"focusin":return xs=El(xs,i,s,l,h,m),!0;case"dragenter":return ys=El(ys,i,s,l,h,m),!0;case"mouseover":return Ss=El(Ss,i,s,l,h,m),!0;case"pointerover":var S=m.pointerId;return Sl.set(S,El(Sl.get(S)||null,i,s,l,h,m)),!0;case"gotpointercapture":return S=m.pointerId,Ml.set(S,El(Ml.get(S)||null,i,s,l,h,m)),!0}return!1}function pg(i){var s=fo(i.target);if(s!==null){var l=Nt(s);if(l!==null){if(s=l.tag,s===13){if(s=qn(l),s!==null){i.blockedOn=s,hg(i.priority,function(){cg(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function qu(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Mh(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Ot=h,l.target.dispatchEvent(h),Ot=null}else return s=Fl(l),s!==null&&xh(s),i.blockedOn=l,!1;s.shift()}return!0}function mg(i,s,l){qu(i)&&l.delete(s)}function oM(){yh=!1,xs!==null&&qu(xs)&&(xs=null),ys!==null&&qu(ys)&&(ys=null),Ss!==null&&qu(Ss)&&(Ss=null),Sl.forEach(mg),Ml.forEach(mg)}function Tl(i,s){i.blockedOn===s&&(i.blockedOn=null,yh||(yh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oM)))}function wl(i){function s(m){return Tl(m,i)}if(0<ju.length){Tl(ju[0],i);for(var l=1;l<ju.length;l++){var h=ju[l];h.blockedOn===i&&(h.blockedOn=null)}}for(xs!==null&&Tl(xs,i),ys!==null&&Tl(ys,i),Ss!==null&&Tl(Ss,i),Sl.forEach(s),Ml.forEach(s),l=0;l<Ms.length;l++)h=Ms[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<Ms.length&&(l=Ms[0],l.blockedOn===null);)pg(l),l.blockedOn===null&&Ms.shift()}var na=C.ReactCurrentBatchConfig,$u=!0;function aM(i,s,l,h){var m=Yt,S=na.transition;na.transition=null;try{Yt=1,Sh(i,s,l,h)}finally{Yt=m,na.transition=S}}function lM(i,s,l,h){var m=Yt,S=na.transition;na.transition=null;try{Yt=4,Sh(i,s,l,h)}finally{Yt=m,na.transition=S}}function Sh(i,s,l,h){if($u){var m=Mh(i,s,l,h);if(m===null)zh(i,s,h,Ku,l),dg(i,h);else if(sM(m,i,s,l,h))h.stopPropagation();else if(dg(i,h),s&4&&-1<rM.indexOf(i)){for(;m!==null;){var S=Fl(m);if(S!==null&&ug(S),S=Mh(i,s,l,h),S===null&&zh(i,s,h,Ku,l),S===m)break;m=S}m!==null&&h.stopPropagation()}else zh(i,s,h,null,l)}}var Ku=null;function Mh(i,s,l,h){if(Ku=null,i=Ne(h),i=fo(i),i!==null)if(s=Nt(i),s===null)i=null;else if(l=s.tag,l===13){if(i=qn(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ku=i,null}function gg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case lt:return 1;case xt:return 4;case Xt:case xn:return 16;case Bt:return 536870912;default:return 16}default:return 16}}var Es=null,Eh=null,Zu=null;function _g(){if(Zu)return Zu;var i,s=Eh,l=s.length,h,m="value"in Es?Es.value:Es.textContent,S=m.length;for(i=0;i<l&&s[i]===m[i];i++);var w=l-i;for(h=1;h<=w&&s[l-h]===m[S-h];h++);return Zu=m.slice(i,1<h?1-h:void 0)}function Qu(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ju(){return!0}function vg(){return!1}function Ui(i){function s(l,h,m,S,w){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(S):S[k]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Ju:vg,this.isPropagationStopped=vg,this}return D(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ju)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ju)},persist:function(){},isPersistent:Ju}),s}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Ui(ia),Al=D({},ia,{view:0,detail:0}),uM=Ui(Al),wh,Ah,Rl,ec=D({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Rl&&(Rl&&i.type==="mousemove"?(wh=i.screenX-Rl.screenX,Ah=i.screenY-Rl.screenY):Ah=wh=0,Rl=i),wh)},movementY:function(i){return"movementY"in i?i.movementY:Ah}}),xg=Ui(ec),cM=D({},ec,{dataTransfer:0}),fM=Ui(cM),hM=D({},Al,{relatedTarget:0}),Rh=Ui(hM),dM=D({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),pM=Ui(dM),mM=D({},ia,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),gM=Ui(mM),_M=D({},ia,{data:0}),yg=Ui(_M),vM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=yM[i])?!!s[i]:!1}function Ch(){return SM}var MM=D({},Al,{key:function(i){if(i.key){var s=vM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Qu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?xM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(i){return i.type==="keypress"?Qu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Qu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),EM=Ui(MM),TM=D({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Ui(TM),wM=D({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),AM=Ui(wM),RM=D({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),CM=Ui(RM),bM=D({},ec,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Ui(bM),LM=[9,13,27,32],bh=u&&"CompositionEvent"in window,Cl=null;u&&"documentMode"in document&&(Cl=document.documentMode);var DM=u&&"TextEvent"in window&&!Cl,Mg=u&&(!bh||Cl&&8<Cl&&11>=Cl),Eg=" ",Tg=!1;function wg(i,s){switch(i){case"keyup":return LM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ra=!1;function NM(i,s){switch(i){case"compositionend":return Ag(s);case"keypress":return s.which!==32?null:(Tg=!0,Eg);case"textInput":return i=s.data,i===Eg&&Tg?null:i;default:return null}}function IM(i,s){if(ra)return i==="compositionend"||!bh&&wg(i,s)?(i=_g(),Zu=Eh=Es=null,ra=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Mg&&s.locale!=="ko"?null:s.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!UM[i.type]:s==="textarea"}function Cg(i,s,l,h){ot(h),s=sc(s,"onChange"),0<s.length&&(l=new Th("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var bl=null,Pl=null;function OM(i){Yg(i,0)}function tc(i){var s=ua(i);if(ie(s))return i}function FM(i,s){if(i==="change")return s}var bg=!1;if(u){var Ph;if(u){var Lh="oninput"in document;if(!Lh){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),Lh=typeof Pg.oninput=="function"}Ph=Lh}else Ph=!1;bg=Ph&&(!document.documentMode||9<document.documentMode)}function Lg(){bl&&(bl.detachEvent("onpropertychange",Dg),Pl=bl=null)}function Dg(i){if(i.propertyName==="value"&&tc(Pl)){var s=[];Cg(s,Pl,i,Ne(i)),Ve(OM,s)}}function kM(i,s,l){i==="focusin"?(Lg(),bl=s,Pl=l,bl.attachEvent("onpropertychange",Dg)):i==="focusout"&&Lg()}function zM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return tc(Pl)}function BM(i,s){if(i==="click")return tc(s)}function HM(i,s){if(i==="input"||i==="change")return tc(s)}function VM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _r=typeof Object.is=="function"?Object.is:VM;function Ll(i,s){if(_r(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!f.call(s,m)||!_r(i[m],s[m]))return!1}return!0}function Ng(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ig(i,s){var l=Ng(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ng(l)}}function Ug(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Ug(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Og(){for(var i=window,s=ut();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ut(i.document)}return s}function Dh(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function GM(i){var s=Og(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Ug(l.ownerDocument.documentElement,l)){if(h!==null&&Dh(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,S=Math.min(h.start,m);h=h.end===void 0?S:Math.min(h.end,m),!i.extend&&S>h&&(m=h,h=S,S=m),m=Ig(l,S);var w=Ig(l,h);m&&w&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),S>h?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var WM=u&&"documentMode"in document&&11>=document.documentMode,sa=null,Nh=null,Dl=null,Ih=!1;function Fg(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ih||sa==null||sa!==ut(h)||(h=sa,"selectionStart"in h&&Dh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Dl&&Ll(Dl,h)||(Dl=h,h=sc(Nh,"onSelect"),0<h.length&&(s=new Th("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=sa)))}function nc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var oa={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Uh={},kg={};u&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function ic(i){if(Uh[i])return Uh[i];if(!oa[i])return i;var s=oa[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in kg)return Uh[i]=s[l];return i}var zg=ic("animationend"),Bg=ic("animationiteration"),Hg=ic("animationstart"),Vg=ic("transitionend"),Gg=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ts(i,s){Gg.set(i,s),a(s,[i])}for(var Oh=0;Oh<Wg.length;Oh++){var Fh=Wg[Oh],XM=Fh.toLowerCase(),YM=Fh[0].toUpperCase()+Fh.slice(1);Ts(XM,"on"+YM)}Ts(zg,"onAnimationEnd"),Ts(Bg,"onAnimationIteration"),Ts(Hg,"onAnimationStart"),Ts("dblclick","onDoubleClick"),Ts("focusin","onFocus"),Ts("focusout","onBlur"),Ts(Vg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function Xg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,$t(h,s,void 0,i),i.currentTarget=null}function Yg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],m=h.event;h=h.listeners;e:{var S=void 0;if(s)for(var w=h.length-1;0<=w;w--){var k=h[w],V=k.instance,fe=k.currentTarget;if(k=k.listener,V!==S&&m.isPropagationStopped())break e;Xg(m,k,fe),S=V}else for(w=0;w<h.length;w++){if(k=h[w],V=k.instance,fe=k.currentTarget,k=k.listener,V!==S&&m.isPropagationStopped())break e;Xg(m,k,fe),S=V}}}if(Mt)throw i=Gt,Mt=!1,Gt=null,i}function nn(i,s){var l=s[Xh];l===void 0&&(l=s[Xh]=new Set);var h=i+"__bubble";l.has(h)||(jg(s,i,2,!1),l.add(h))}function kh(i,s,l){var h=0;s&&(h|=4),jg(l,i,h,s)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Il(i){if(!i[rc]){i[rc]=!0,n.forEach(function(l){l!=="selectionchange"&&(jM.has(l)||kh(l,!1,i),kh(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[rc]||(s[rc]=!0,kh("selectionchange",!1,s))}}function jg(i,s,l,h){switch(gg(s)){case 1:var m=aM;break;case 4:m=lM;break;default:m=Sh}l=m.bind(null,s,l,i),m=void 0,!Ee||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),h?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function zh(i,s,l,h,m){var S=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var k=h.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(w===4)for(w=h.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;w=w.return}for(;k!==null;){if(w=fo(k),w===null)return;if(V=w.tag,V===5||V===6){h=S=w;continue e}k=k.parentNode}}h=h.return}Ve(function(){var fe=S,xe=Ne(l),Se=[];e:{var ve=Gg.get(i);if(ve!==void 0){var He=Th,Ke=i;switch(i){case"keypress":if(Qu(l)===0)break e;case"keydown":case"keyup":He=EM;break;case"focusin":Ke="focus",He=Rh;break;case"focusout":Ke="blur",He=Rh;break;case"beforeblur":case"afterblur":He=Rh;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=fM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=AM;break;case zg:case Bg:case Hg:He=pM;break;case Vg:He=CM;break;case"scroll":He=uM;break;case"wheel":He=PM;break;case"copy":case"cut":case"paste":He=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Sg}var Ze=(s&4)!==0,yn=!Ze&&i==="scroll",ne=Ze?ve!==null?ve+"Capture":null:ve;Ze=[];for(var X=fe,ae;X!==null;){ae=X;var Ae=ae.stateNode;if(ae.tag===5&&Ae!==null&&(ae=Ae,ne!==null&&(Ae=$e(X,ne),Ae!=null&&Ze.push(Ul(X,Ae,ae)))),yn)break;X=X.return}0<Ze.length&&(ve=new He(ve,Ke,null,l,xe),Se.push({event:ve,listeners:Ze}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",ve&&l!==Ot&&(Ke=l.relatedTarget||l.fromElement)&&(fo(Ke)||Ke[jr]))break e;if((He||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,He?(Ke=l.relatedTarget||l.toElement,He=fe,Ke=Ke?fo(Ke):null,Ke!==null&&(yn=Nt(Ke),Ke!==yn||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(He=null,Ke=fe),He!==Ke)){if(Ze=xg,Ae="onMouseLeave",ne="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(Ze=Sg,Ae="onPointerLeave",ne="onPointerEnter",X="pointer"),yn=He==null?ve:ua(He),ae=Ke==null?ve:ua(Ke),ve=new Ze(Ae,X+"leave",He,l,xe),ve.target=yn,ve.relatedTarget=ae,Ae=null,fo(xe)===fe&&(Ze=new Ze(ne,X+"enter",Ke,l,xe),Ze.target=ae,Ze.relatedTarget=yn,Ae=Ze),yn=Ae,He&&Ke)t:{for(Ze=He,ne=Ke,X=0,ae=Ze;ae;ae=aa(ae))X++;for(ae=0,Ae=ne;Ae;Ae=aa(Ae))ae++;for(;0<X-ae;)Ze=aa(Ze),X--;for(;0<ae-X;)ne=aa(ne),ae--;for(;X--;){if(Ze===ne||ne!==null&&Ze===ne.alternate)break t;Ze=aa(Ze),ne=aa(ne)}Ze=null}else Ze=null;He!==null&&qg(Se,ve,He,Ze,!1),Ke!==null&&yn!==null&&qg(Se,yn,Ke,Ze,!0)}}e:{if(ve=fe?ua(fe):window,He=ve.nodeName&&ve.nodeName.toLowerCase(),He==="select"||He==="input"&&ve.type==="file")var nt=FM;else if(Rg(ve))if(bg)nt=HM;else{nt=zM;var dt=kM}else(He=ve.nodeName)&&He.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(nt=BM);if(nt&&(nt=nt(i,fe))){Cg(Se,nt,l,xe);break e}dt&&dt(i,ve,fe),i==="focusout"&&(dt=ve._wrapperState)&&dt.controlled&&ve.type==="number"&&O(ve,"number",ve.value)}switch(dt=fe?ua(fe):window,i){case"focusin":(Rg(dt)||dt.contentEditable==="true")&&(sa=dt,Nh=fe,Dl=null);break;case"focusout":Dl=Nh=sa=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,Fg(Se,l,xe);break;case"selectionchange":if(WM)break;case"keydown":case"keyup":Fg(Se,l,xe)}var pt;if(bh)e:{switch(i){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else ra?wg(i,l)&&(yt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(yt="onCompositionStart");yt&&(Mg&&l.locale!=="ko"&&(ra||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&ra&&(pt=_g()):(Es=xe,Eh="value"in Es?Es.value:Es.textContent,ra=!0)),dt=sc(fe,yt),0<dt.length&&(yt=new yg(yt,i,null,l,xe),Se.push({event:yt,listeners:dt}),pt?yt.data=pt:(pt=Ag(l),pt!==null&&(yt.data=pt)))),(pt=DM?NM(i,l):IM(i,l))&&(fe=sc(fe,"onBeforeInput"),0<fe.length&&(xe=new yg("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:fe}),xe.data=pt))}Yg(Se,s)})}function Ul(i,s,l){return{instance:i,listener:s,currentTarget:l}}function sc(i,s){for(var l=s+"Capture",h=[];i!==null;){var m=i,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=$e(i,l),S!=null&&h.unshift(Ul(i,S,m)),S=$e(i,s),S!=null&&h.push(Ul(i,S,m))),i=i.return}return h}function aa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function qg(i,s,l,h,m){for(var S=s._reactName,w=[];l!==null&&l!==h;){var k=l,V=k.alternate,fe=k.stateNode;if(V!==null&&V===h)break;k.tag===5&&fe!==null&&(k=fe,m?(V=$e(l,S),V!=null&&w.unshift(Ul(l,V,k))):m||(V=$e(l,S),V!=null&&w.push(Ul(l,V,k)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var qM=/\r\n?/g,$M=/\u0000|\uFFFD/g;function $g(i){return(typeof i=="string"?i:""+i).replace(qM,`
`).replace($M,"")}function oc(i,s,l){if(s=$g(s),$g(i)!==s&&l)throw Error(t(425))}function ac(){}var Bh=null,Hh=null;function Vh(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,ZM=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(i){return Kg.resolve(null).then(i).catch(QM)}:Gh;function QM(i){setTimeout(function(){throw i})}function Wh(i,s){var l=s,h=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){i.removeChild(m),wl(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);wl(s)}function ws(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Zg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var la=Math.random().toString(36).slice(2),Ir="__reactFiber$"+la,Ol="__reactProps$"+la,jr="__reactContainer$"+la,Xh="__reactEvents$"+la,JM="__reactListeners$"+la,eE="__reactHandles$"+la;function fo(i){var s=i[Ir];if(s)return s;for(var l=i.parentNode;l;){if(s=l[jr]||l[Ir]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Zg(i);i!==null;){if(l=i[Ir])return l;i=Zg(i)}return s}i=l,l=i.parentNode}return null}function Fl(i){return i=i[Ir]||i[jr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ua(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function lc(i){return i[Ol]||null}var Yh=[],ca=-1;function As(i){return{current:i}}function rn(i){0>ca||(i.current=Yh[ca],Yh[ca]=null,ca--)}function tn(i,s){ca++,Yh[ca]=i.current,i.current=s}var Rs={},$n=As(Rs),yi=As(!1),ho=Rs;function fa(i,s){var l=i.type.contextTypes;if(!l)return Rs;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in l)m[S]=s[S];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Si(i){return i=i.childContextTypes,i!=null}function uc(){rn(yi),rn($n)}function Qg(i,s,l){if($n.current!==Rs)throw Error(t(168));tn($n,s),tn(yi,l)}function Jg(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in s))throw Error(t(108,me(i)||"Unknown",m));return D({},l,h)}function cc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Rs,ho=$n.current,tn($n,i),tn(yi,yi.current),!0}function e_(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Jg(i,s,ho),h.__reactInternalMemoizedMergedChildContext=i,rn(yi),rn($n),tn($n,i)):rn(yi),tn(yi,l)}var qr=null,fc=!1,jh=!1;function t_(i){qr===null?qr=[i]:qr.push(i)}function tE(i){fc=!0,t_(i)}function Cs(){if(!jh&&qr!==null){jh=!0;var i=0,s=Yt;try{var l=qr;for(Yt=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}qr=null,fc=!1}catch(m){throw qr!==null&&(qr=qr.slice(i+1)),re(lt,Cs),m}finally{Yt=s,jh=!1}}return null}var ha=[],da=0,hc=null,dc=0,nr=[],ir=0,po=null,$r=1,Kr="";function mo(i,s){ha[da++]=dc,ha[da++]=hc,hc=i,dc=s}function n_(i,s,l){nr[ir++]=$r,nr[ir++]=Kr,nr[ir++]=po,po=i;var h=$r;i=Kr;var m=32-ai(h)-1;h&=~(1<<m),l+=1;var S=32-ai(s)+m;if(30<S){var w=m-m%5;S=(h&(1<<w)-1).toString(32),h>>=w,m-=w,$r=1<<32-ai(s)+m|l<<m|h,Kr=S+i}else $r=1<<S|l<<m|h,Kr=i}function qh(i){i.return!==null&&(mo(i,1),n_(i,1,0))}function $h(i){for(;i===hc;)hc=ha[--da],ha[da]=null,dc=ha[--da],ha[da]=null;for(;i===po;)po=nr[--ir],nr[ir]=null,Kr=nr[--ir],nr[ir]=null,$r=nr[--ir],nr[ir]=null}var Oi=null,Fi=null,an=!1,vr=null;function i_(i,s){var l=ar(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function r_(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Oi=i,Fi=ws(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Oi=i,Fi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=po!==null?{id:$r,overflow:Kr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ar(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Oi=i,Fi=null,!0):!1;default:return!1}}function Kh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Zh(i){if(an){var s=Fi;if(s){var l=s;if(!r_(i,s)){if(Kh(i))throw Error(t(418));s=ws(l.nextSibling);var h=Oi;s&&r_(i,s)?i_(h,l):(i.flags=i.flags&-4097|2,an=!1,Oi=i)}}else{if(Kh(i))throw Error(t(418));i.flags=i.flags&-4097|2,an=!1,Oi=i}}}function s_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Oi=i}function pc(i){if(i!==Oi)return!1;if(!an)return s_(i),an=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Vh(i.type,i.memoizedProps)),s&&(s=Fi)){if(Kh(i))throw o_(),Error(t(418));for(;s;)i_(i,s),s=ws(s.nextSibling)}if(s_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Fi=ws(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Fi=null}}else Fi=Oi?ws(i.stateNode.nextSibling):null;return!0}function o_(){for(var i=Fi;i;)i=ws(i.nextSibling)}function pa(){Fi=Oi=null,an=!1}function Qh(i){vr===null?vr=[i]:vr.push(i)}var nE=C.ReactCurrentBatchConfig;function kl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var m=h,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var k=m.refs;w===null?delete k[S]:k[S]=w},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function mc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function a_(i){var s=i._init;return s(i._payload)}function l_(i){function s(ne,X){if(i){var ae=ne.deletions;ae===null?(ne.deletions=[X],ne.flags|=16):ae.push(X)}}function l(ne,X){if(!i)return null;for(;X!==null;)s(ne,X),X=X.sibling;return null}function h(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function m(ne,X){return ne=Os(ne,X),ne.index=0,ne.sibling=null,ne}function S(ne,X,ae){return ne.index=ae,i?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<X?(ne.flags|=2,X):ae):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function w(ne){return i&&ne.alternate===null&&(ne.flags|=2),ne}function k(ne,X,ae,Ae){return X===null||X.tag!==6?(X=Gd(ae,ne.mode,Ae),X.return=ne,X):(X=m(X,ae),X.return=ne,X)}function V(ne,X,ae,Ae){var nt=ae.type;return nt===P?xe(ne,X,ae.props.children,Ae,ae.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===J&&a_(nt)===X.type)?(Ae=m(X,ae.props),Ae.ref=kl(ne,X,ae),Ae.return=ne,Ae):(Ae=zc(ae.type,ae.key,ae.props,null,ne.mode,Ae),Ae.ref=kl(ne,X,ae),Ae.return=ne,Ae)}function fe(ne,X,ae,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=Wd(ae,ne.mode,Ae),X.return=ne,X):(X=m(X,ae.children||[]),X.return=ne,X)}function xe(ne,X,ae,Ae,nt){return X===null||X.tag!==7?(X=Eo(ae,ne.mode,Ae,nt),X.return=ne,X):(X=m(X,ae),X.return=ne,X)}function Se(ne,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Gd(""+X,ne.mode,ae),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return ae=zc(X.type,X.key,X.props,null,ne.mode,ae),ae.ref=kl(ne,null,X),ae.return=ne,ae;case I:return X=Wd(X,ne.mode,ae),X.return=ne,X;case J:var Ae=X._init;return Se(ne,Ae(X._payload),ae)}if(L(X)||q(X))return X=Eo(X,ne.mode,ae,null),X.return=ne,X;mc(ne,X)}return null}function ve(ne,X,ae,Ae){var nt=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return nt!==null?null:k(ne,X,""+ae,Ae);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case U:return ae.key===nt?V(ne,X,ae,Ae):null;case I:return ae.key===nt?fe(ne,X,ae,Ae):null;case J:return nt=ae._init,ve(ne,X,nt(ae._payload),Ae)}if(L(ae)||q(ae))return nt!==null?null:xe(ne,X,ae,Ae,null);mc(ne,ae)}return null}function He(ne,X,ae,Ae,nt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ne=ne.get(ae)||null,k(X,ne,""+Ae,nt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case U:return ne=ne.get(Ae.key===null?ae:Ae.key)||null,V(X,ne,Ae,nt);case I:return ne=ne.get(Ae.key===null?ae:Ae.key)||null,fe(X,ne,Ae,nt);case J:var dt=Ae._init;return He(ne,X,ae,dt(Ae._payload),nt)}if(L(Ae)||q(Ae))return ne=ne.get(ae)||null,xe(X,ne,Ae,nt,null);mc(X,Ae)}return null}function Ke(ne,X,ae,Ae){for(var nt=null,dt=null,pt=X,yt=X=0,Fn=null;pt!==null&&yt<ae.length;yt++){pt.index>yt?(Fn=pt,pt=null):Fn=pt.sibling;var Ht=ve(ne,pt,ae[yt],Ae);if(Ht===null){pt===null&&(pt=Fn);break}i&&pt&&Ht.alternate===null&&s(ne,pt),X=S(Ht,X,yt),dt===null?nt=Ht:dt.sibling=Ht,dt=Ht,pt=Fn}if(yt===ae.length)return l(ne,pt),an&&mo(ne,yt),nt;if(pt===null){for(;yt<ae.length;yt++)pt=Se(ne,ae[yt],Ae),pt!==null&&(X=S(pt,X,yt),dt===null?nt=pt:dt.sibling=pt,dt=pt);return an&&mo(ne,yt),nt}for(pt=h(ne,pt);yt<ae.length;yt++)Fn=He(pt,ne,yt,ae[yt],Ae),Fn!==null&&(i&&Fn.alternate!==null&&pt.delete(Fn.key===null?yt:Fn.key),X=S(Fn,X,yt),dt===null?nt=Fn:dt.sibling=Fn,dt=Fn);return i&&pt.forEach(function(Fs){return s(ne,Fs)}),an&&mo(ne,yt),nt}function Ze(ne,X,ae,Ae){var nt=q(ae);if(typeof nt!="function")throw Error(t(150));if(ae=nt.call(ae),ae==null)throw Error(t(151));for(var dt=nt=null,pt=X,yt=X=0,Fn=null,Ht=ae.next();pt!==null&&!Ht.done;yt++,Ht=ae.next()){pt.index>yt?(Fn=pt,pt=null):Fn=pt.sibling;var Fs=ve(ne,pt,Ht.value,Ae);if(Fs===null){pt===null&&(pt=Fn);break}i&&pt&&Fs.alternate===null&&s(ne,pt),X=S(Fs,X,yt),dt===null?nt=Fs:dt.sibling=Fs,dt=Fs,pt=Fn}if(Ht.done)return l(ne,pt),an&&mo(ne,yt),nt;if(pt===null){for(;!Ht.done;yt++,Ht=ae.next())Ht=Se(ne,Ht.value,Ae),Ht!==null&&(X=S(Ht,X,yt),dt===null?nt=Ht:dt.sibling=Ht,dt=Ht);return an&&mo(ne,yt),nt}for(pt=h(ne,pt);!Ht.done;yt++,Ht=ae.next())Ht=He(pt,ne,yt,Ht.value,Ae),Ht!==null&&(i&&Ht.alternate!==null&&pt.delete(Ht.key===null?yt:Ht.key),X=S(Ht,X,yt),dt===null?nt=Ht:dt.sibling=Ht,dt=Ht);return i&&pt.forEach(function(UE){return s(ne,UE)}),an&&mo(ne,yt),nt}function yn(ne,X,ae,Ae){if(typeof ae=="object"&&ae!==null&&ae.type===P&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case U:e:{for(var nt=ae.key,dt=X;dt!==null;){if(dt.key===nt){if(nt=ae.type,nt===P){if(dt.tag===7){l(ne,dt.sibling),X=m(dt,ae.props.children),X.return=ne,ne=X;break e}}else if(dt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===J&&a_(nt)===dt.type){l(ne,dt.sibling),X=m(dt,ae.props),X.ref=kl(ne,dt,ae),X.return=ne,ne=X;break e}l(ne,dt);break}else s(ne,dt);dt=dt.sibling}ae.type===P?(X=Eo(ae.props.children,ne.mode,Ae,ae.key),X.return=ne,ne=X):(Ae=zc(ae.type,ae.key,ae.props,null,ne.mode,Ae),Ae.ref=kl(ne,X,ae),Ae.return=ne,ne=Ae)}return w(ne);case I:e:{for(dt=ae.key;X!==null;){if(X.key===dt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){l(ne,X.sibling),X=m(X,ae.children||[]),X.return=ne,ne=X;break e}else{l(ne,X);break}else s(ne,X);X=X.sibling}X=Wd(ae,ne.mode,Ae),X.return=ne,ne=X}return w(ne);case J:return dt=ae._init,yn(ne,X,dt(ae._payload),Ae)}if(L(ae))return Ke(ne,X,ae,Ae);if(q(ae))return Ze(ne,X,ae,Ae);mc(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(l(ne,X.sibling),X=m(X,ae),X.return=ne,ne=X):(l(ne,X),X=Gd(ae,ne.mode,Ae),X.return=ne,ne=X),w(ne)):l(ne,X)}return yn}var ma=l_(!0),u_=l_(!1),gc=As(null),_c=null,ga=null,Jh=null;function ed(){Jh=ga=_c=null}function td(i){var s=gc.current;rn(gc),i._currentValue=s}function nd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function _a(i,s){_c=i,Jh=ga=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Mi=!0),i.firstContext=null)}function rr(i){var s=i._currentValue;if(Jh!==i)if(i={context:i,memoizedValue:s,next:null},ga===null){if(_c===null)throw Error(t(308));ga=i,_c.dependencies={lanes:0,firstContext:i}}else ga=ga.next=i;return s}var go=null;function id(i){go===null?go=[i]:go.push(i)}function c_(i,s,l,h){var m=s.interleaved;return m===null?(l.next=l,id(s)):(l.next=m.next,m.next=l),s.interleaved=l,Zr(i,h)}function Zr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var bs=!1;function rd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ft&2)!==0){var m=h.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),h.pending=s,Zr(i,l)}return m=h.interleaved,m===null?(s.next=s,id(h)):(s.next=m.next,m.next=s),h.interleaved=s,Zr(i,l)}function vc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,vh(i,l)}}function h_(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?m=S=w:S=S.next=w,l=l.next}while(l!==null);S===null?m=S=s:S=S.next=s}else m=S=s;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function xc(i,s,l,h){var m=i.updateQueue;bs=!1;var S=m.firstBaseUpdate,w=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var V=k,fe=V.next;V.next=null,w===null?S=fe:w.next=fe,w=V;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,k=xe.lastBaseUpdate,k!==w&&(k===null?xe.firstBaseUpdate=fe:k.next=fe,xe.lastBaseUpdate=V))}if(S!==null){var Se=m.baseState;w=0,xe=fe=V=null,k=S;do{var ve=k.lane,He=k.eventTime;if((h&ve)===ve){xe!==null&&(xe=xe.next={eventTime:He,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ke=i,Ze=k;switch(ve=s,He=l,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){Se=Ke.call(He,Se,ve);break e}Se=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,ve=typeof Ke=="function"?Ke.call(He,Se,ve):Ke,ve==null)break e;Se=D({},Se,ve);break e;case 2:bs=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,ve=m.effects,ve===null?m.effects=[k]:ve.push(k))}else He={eventTime:He,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},xe===null?(fe=xe=He,V=Se):xe=xe.next=He,w|=ve;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(xe===null&&(V=Se),m.baseState=V,m.firstBaseUpdate=fe,m.lastBaseUpdate=xe,s=m.shared.interleaved,s!==null){m=s;do w|=m.lane,m=m.next;while(m!==s)}else S===null&&(m.shared.lanes=0);xo|=w,i.lanes=w,i.memoizedState=Se}}function d_(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var zl={},Ur=As(zl),Bl=As(zl),Hl=As(zl);function _o(i){if(i===zl)throw Error(t(174));return i}function sd(i,s){switch(tn(Hl,s),tn(Bl,i),tn(Ur,zl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ce(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ce(s,i)}rn(Ur),tn(Ur,s)}function va(){rn(Ur),rn(Bl),rn(Hl)}function p_(i){_o(Hl.current);var s=_o(Ur.current),l=Ce(s,i.type);s!==l&&(tn(Bl,i),tn(Ur,l))}function od(i){Bl.current===i&&(rn(Ur),rn(Bl))}var cn=As(0);function yc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ad=[];function ld(){for(var i=0;i<ad.length;i++)ad[i]._workInProgressVersionPrimary=null;ad.length=0}var Sc=C.ReactCurrentDispatcher,ud=C.ReactCurrentBatchConfig,vo=0,fn=null,bn=null,Un=null,Mc=!1,Vl=!1,Gl=0,iE=0;function Kn(){throw Error(t(321))}function cd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!_r(i[l],s[l]))return!1;return!0}function fd(i,s,l,h,m,S){if(vo=S,fn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Sc.current=i===null||i.memoizedState===null?aE:lE,i=l(h,m),Vl){S=0;do{if(Vl=!1,Gl=0,25<=S)throw Error(t(301));S+=1,Un=bn=null,s.updateQueue=null,Sc.current=uE,i=l(h,m)}while(Vl)}if(Sc.current=wc,s=bn!==null&&bn.next!==null,vo=0,Un=bn=fn=null,Mc=!1,s)throw Error(t(300));return i}function hd(){var i=Gl!==0;return Gl=0,i}function Or(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?fn.memoizedState=Un=i:Un=Un.next=i,Un}function sr(){if(bn===null){var i=fn.alternate;i=i!==null?i.memoizedState:null}else i=bn.next;var s=Un===null?fn.memoizedState:Un.next;if(s!==null)Un=s,bn=i;else{if(i===null)throw Error(t(310));bn=i,i={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Un===null?fn.memoizedState=Un=i:Un=Un.next=i}return Un}function Wl(i,s){return typeof s=="function"?s(i):s}function dd(i){var s=sr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=bn,m=h.baseQueue,S=l.pending;if(S!==null){if(m!==null){var w=m.next;m.next=S.next,S.next=w}h.baseQueue=m=S,l.pending=null}if(m!==null){S=m.next,h=h.baseState;var k=w=null,V=null,fe=S;do{var xe=fe.lane;if((vo&xe)===xe)V!==null&&(V=V.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),h=fe.hasEagerState?fe.eagerState:i(h,fe.action);else{var Se={lane:xe,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};V===null?(k=V=Se,w=h):V=V.next=Se,fn.lanes|=xe,xo|=xe}fe=fe.next}while(fe!==null&&fe!==S);V===null?w=h:V.next=k,_r(h,s.memoizedState)||(Mi=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=V,l.lastRenderedState=h}if(i=l.interleaved,i!==null){m=i;do S=m.lane,fn.lanes|=S,xo|=S,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function pd(i){var s=sr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,m=l.pending,S=s.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do S=i(S,w.action),w=w.next;while(w!==m);_r(S,s.memoizedState)||(Mi=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),l.lastRenderedState=S}return[S,h]}function m_(){}function g_(i,s){var l=fn,h=sr(),m=s(),S=!_r(h.memoizedState,m);if(S&&(h.memoizedState=m,Mi=!0),h=h.queue,md(x_.bind(null,l,h,i),[i]),h.getSnapshot!==s||S||Un!==null&&Un.memoizedState.tag&1){if(l.flags|=2048,Xl(9,v_.bind(null,l,h,m,s),void 0,null),On===null)throw Error(t(349));(vo&30)!==0||__(l,s,m)}return m}function __(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=fn.updateQueue,s===null?(s={lastEffect:null,stores:null},fn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function v_(i,s,l,h){s.value=l,s.getSnapshot=h,y_(s)&&S_(i)}function x_(i,s,l){return l(function(){y_(s)&&S_(i)})}function y_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!_r(i,l)}catch{return!0}}function S_(i){var s=Zr(i,1);s!==null&&Mr(s,i,1,-1)}function M_(i){var s=Or();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:i},s.queue=i,i=i.dispatch=oE.bind(null,fn,i),[s.memoizedState,i]}function Xl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=fn.updateQueue,s===null?(s={lastEffect:null,stores:null},fn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function E_(){return sr().memoizedState}function Ec(i,s,l,h){var m=Or();fn.flags|=i,m.memoizedState=Xl(1|s,l,void 0,h===void 0?null:h)}function Tc(i,s,l,h){var m=sr();h=h===void 0?null:h;var S=void 0;if(bn!==null){var w=bn.memoizedState;if(S=w.destroy,h!==null&&cd(h,w.deps)){m.memoizedState=Xl(s,l,S,h);return}}fn.flags|=i,m.memoizedState=Xl(1|s,l,S,h)}function T_(i,s){return Ec(8390656,8,i,s)}function md(i,s){return Tc(2048,8,i,s)}function w_(i,s){return Tc(4,2,i,s)}function A_(i,s){return Tc(4,4,i,s)}function R_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function C_(i,s,l){return l=l!=null?l.concat([i]):null,Tc(4,4,R_.bind(null,s,i),l)}function gd(){}function b_(i,s){var l=sr();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&cd(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function P_(i,s){var l=sr();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&cd(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function L_(i,s,l){return(vo&21)===0?(i.baseState&&(i.baseState=!1,Mi=!0),i.memoizedState=l):(_r(l,s)||(l=Yu(),fn.lanes|=l,xo|=l,i.baseState=!0),s)}function rE(i,s){var l=Yt;Yt=l!==0&&4>l?l:4,i(!0);var h=ud.transition;ud.transition={};try{i(!1),s()}finally{Yt=l,ud.transition=h}}function D_(){return sr().memoizedState}function sE(i,s,l){var h=Is(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},N_(i))I_(s,l);else if(l=c_(i,s,l,h),l!==null){var m=ui();Mr(l,i,h,m),U_(l,s,h)}}function oE(i,s,l){var h=Is(i),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(N_(i))I_(s,m);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,k=S(w,l);if(m.hasEagerState=!0,m.eagerState=k,_r(k,w)){var V=s.interleaved;V===null?(m.next=m,id(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}l=c_(i,s,m,h),l!==null&&(m=ui(),Mr(l,i,h,m),U_(l,s,h))}}function N_(i){var s=i.alternate;return i===fn||s!==null&&s===fn}function I_(i,s){Vl=Mc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function U_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,vh(i,l)}}var wc={readContext:rr,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useInsertionEffect:Kn,useLayoutEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useMutableSource:Kn,useSyncExternalStore:Kn,useId:Kn,unstable_isNewReconciler:!1},aE={readContext:rr,useCallback:function(i,s){return Or().memoizedState=[i,s===void 0?null:s],i},useContext:rr,useEffect:T_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Ec(4194308,4,R_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ec(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ec(4,2,i,s)},useMemo:function(i,s){var l=Or();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=Or();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=sE.bind(null,fn,i),[h.memoizedState,i]},useRef:function(i){var s=Or();return i={current:i},s.memoizedState=i},useState:M_,useDebugValue:gd,useDeferredValue:function(i){return Or().memoizedState=i},useTransition:function(){var i=M_(!1),s=i[0];return i=rE.bind(null,i[1]),Or().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=fn,m=Or();if(an){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),On===null)throw Error(t(349));(vo&30)!==0||__(h,s,l)}m.memoizedState=l;var S={value:l,getSnapshot:s};return m.queue=S,T_(x_.bind(null,h,S,i),[i]),h.flags|=2048,Xl(9,v_.bind(null,h,S,l,s),void 0,null),l},useId:function(){var i=Or(),s=On.identifierPrefix;if(an){var l=Kr,h=$r;l=(h&~(1<<32-ai(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Gl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=iE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},lE={readContext:rr,useCallback:b_,useContext:rr,useEffect:md,useImperativeHandle:C_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:P_,useReducer:dd,useRef:E_,useState:function(){return dd(Wl)},useDebugValue:gd,useDeferredValue:function(i){var s=sr();return L_(s,bn.memoizedState,i)},useTransition:function(){var i=dd(Wl)[0],s=sr().memoizedState;return[i,s]},useMutableSource:m_,useSyncExternalStore:g_,useId:D_,unstable_isNewReconciler:!1},uE={readContext:rr,useCallback:b_,useContext:rr,useEffect:md,useImperativeHandle:C_,useInsertionEffect:w_,useLayoutEffect:A_,useMemo:P_,useReducer:pd,useRef:E_,useState:function(){return pd(Wl)},useDebugValue:gd,useDeferredValue:function(i){var s=sr();return bn===null?s.memoizedState=i:L_(s,bn.memoizedState,i)},useTransition:function(){var i=pd(Wl)[0],s=sr().memoizedState;return[i,s]},useMutableSource:m_,useSyncExternalStore:g_,useId:D_,unstable_isNewReconciler:!1};function xr(i,s){if(i&&i.defaultProps){s=D({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function _d(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:D({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ac={isMounted:function(i){return(i=i._reactInternals)?Nt(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=ui(),m=Is(i),S=Qr(h,m);S.payload=s,l!=null&&(S.callback=l),s=Ps(i,S,m),s!==null&&(Mr(s,i,m,h),vc(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=ui(),m=Is(i),S=Qr(h,m);S.tag=1,S.payload=s,l!=null&&(S.callback=l),s=Ps(i,S,m),s!==null&&(Mr(s,i,m,h),vc(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=ui(),h=Is(i),m=Qr(l,h);m.tag=2,s!=null&&(m.callback=s),s=Ps(i,m,h),s!==null&&(Mr(s,i,h,l),vc(s,i,h))}};function O_(i,s,l,h,m,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,S,w):s.prototype&&s.prototype.isPureReactComponent?!Ll(l,h)||!Ll(m,S):!0}function F_(i,s,l){var h=!1,m=Rs,S=s.contextType;return typeof S=="object"&&S!==null?S=rr(S):(m=Si(s)?ho:$n.current,h=s.contextTypes,S=(h=h!=null)?fa(i,m):Rs),s=new s(l,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ac,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=S),s}function k_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Ac.enqueueReplaceState(s,s.state,null)}function vd(i,s,l,h){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},rd(i);var S=s.contextType;typeof S=="object"&&S!==null?m.context=rr(S):(S=Si(s)?ho:$n.current,m.context=fa(i,S)),m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(_d(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Ac.enqueueReplaceState(m,m.state,null),xc(i,l,m,h),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function xa(i,s){try{var l="",h=s;do l+=ce(h),h=h.return;while(h);var m=l}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:m,digest:null}}function xd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function yd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var cE=typeof WeakMap=="function"?WeakMap:Map;function z_(i,s,l){l=Qr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Nc||(Nc=!0,Ud=h),yd(i,s)},l}function B_(i,s,l){l=Qr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var m=s.value;l.payload=function(){return h(m)},l.callback=function(){yd(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){yd(i,s),typeof h!="function"&&(Ds===null?Ds=new Set([this]):Ds.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function H_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new cE;var m=new Set;h.set(s,m)}else m=h.get(s),m===void 0&&(m=new Set,h.set(s,m));m.has(l)||(m.add(l),i=TE.bind(null,i,s,l),s.then(i,i))}function V_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function G_(i,s,l,h,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Qr(-1,1),s.tag=2,Ps(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var fE=C.ReactCurrentOwner,Mi=!1;function li(i,s,l,h){s.child=i===null?u_(s,null,l,h):ma(s,i.child,l,h)}function W_(i,s,l,h,m){l=l.render;var S=s.ref;return _a(s,m),h=fd(i,s,l,h,S,m),l=hd(),i!==null&&!Mi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Jr(i,s,m)):(an&&l&&qh(s),s.flags|=1,li(i,s,h,m),s.child)}function X_(i,s,l,h,m){if(i===null){var S=l.type;return typeof S=="function"&&!Vd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=S,Y_(i,s,S,h,m)):(i=zc(l.type,null,h,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&m)===0){var w=S.memoizedProps;if(l=l.compare,l=l!==null?l:Ll,l(w,h)&&i.ref===s.ref)return Jr(i,s,m)}return s.flags|=1,i=Os(S,h),i.ref=s.ref,i.return=s,s.child=i}function Y_(i,s,l,h,m){if(i!==null){var S=i.memoizedProps;if(Ll(S,h)&&i.ref===s.ref)if(Mi=!1,s.pendingProps=h=S,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Mi=!0);else return s.lanes=i.lanes,Jr(i,s,m)}return Sd(i,s,l,h,m)}function j_(i,s,l){var h=s.pendingProps,m=h.children,S=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Sa,ki),ki|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,tn(Sa,ki),ki|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=S!==null?S.baseLanes:l,tn(Sa,ki),ki|=h}else S!==null?(h=S.baseLanes|l,s.memoizedState=null):h=l,tn(Sa,ki),ki|=h;return li(i,s,m,l),s.child}function q_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Sd(i,s,l,h,m){var S=Si(l)?ho:$n.current;return S=fa(s,S),_a(s,m),l=fd(i,s,l,h,S,m),h=hd(),i!==null&&!Mi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Jr(i,s,m)):(an&&h&&qh(s),s.flags|=1,li(i,s,l,m),s.child)}function $_(i,s,l,h,m){if(Si(l)){var S=!0;cc(s)}else S=!1;if(_a(s,m),s.stateNode===null)Cc(i,s),F_(s,l,h),vd(s,l,h,m),h=!0;else if(i===null){var w=s.stateNode,k=s.memoizedProps;w.props=k;var V=w.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=rr(fe):(fe=Si(l)?ho:$n.current,fe=fa(s,fe));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==h||V!==fe)&&k_(s,w,h,fe),bs=!1;var ve=s.memoizedState;w.state=ve,xc(s,h,w,m),V=s.memoizedState,k!==h||ve!==V||yi.current||bs?(typeof xe=="function"&&(_d(s,l,xe,h),V=s.memoizedState),(k=bs||O_(s,l,k,h,ve,V,fe))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=V),w.props=h,w.state=V,w.context=fe,h=k):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,f_(i,s),k=s.memoizedProps,fe=s.type===s.elementType?k:xr(s.type,k),w.props=fe,Se=s.pendingProps,ve=w.context,V=l.contextType,typeof V=="object"&&V!==null?V=rr(V):(V=Si(l)?ho:$n.current,V=fa(s,V));var He=l.getDerivedStateFromProps;(xe=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==Se||ve!==V)&&k_(s,w,h,V),bs=!1,ve=s.memoizedState,w.state=ve,xc(s,h,w,m);var Ke=s.memoizedState;k!==Se||ve!==Ke||yi.current||bs?(typeof He=="function"&&(_d(s,l,He,h),Ke=s.memoizedState),(fe=bs||O_(s,l,fe,h,ve,Ke,V)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,Ke,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,Ke,V)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Ke),w.props=h,w.state=Ke,w.context=V,h=fe):(typeof w.componentDidUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),h=!1)}return Md(i,s,l,h,S,m)}function Md(i,s,l,h,m,S){q_(i,s);var w=(s.flags&128)!==0;if(!h&&!w)return m&&e_(s,l,!1),Jr(i,s,S);h=s.stateNode,fE.current=s;var k=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&w?(s.child=ma(s,i.child,null,S),s.child=ma(s,null,k,S)):li(i,s,k,S),s.memoizedState=h.state,m&&e_(s,l,!0),s.child}function K_(i){var s=i.stateNode;s.pendingContext?Qg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Qg(i,s.context,!1),sd(i,s.containerInfo)}function Z_(i,s,l,h,m){return pa(),Qh(m),s.flags|=256,li(i,s,l,h),s.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(i){return{baseLanes:i,cachePool:null,transitions:null}}function Q_(i,s,l){var h=s.pendingProps,m=cn.current,S=!1,w=(s.flags&128)!==0,k;if((k=w)||(k=i!==null&&i.memoizedState===null?!1:(m&2)!==0),k?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),tn(cn,m&1),i===null)return Zh(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,i=h.fallback,S?(h=s.mode,S=s.child,w={mode:"hidden",children:w},(h&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Bc(w,h,0,null),i=Eo(i,h,l,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=Td(l),s.memoizedState=Ed,i):wd(s,w));if(m=i.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return hE(i,s,w,h,k,m,l);if(S){S=h.fallback,w=s.mode,m=i.child,k=m.sibling;var V={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==m?(h=s.child,h.childLanes=0,h.pendingProps=V,s.deletions=null):(h=Os(m,V),h.subtreeFlags=m.subtreeFlags&14680064),k!==null?S=Os(k,S):(S=Eo(S,w,l,null),S.flags|=2),S.return=s,h.return=s,h.sibling=S,s.child=h,h=S,S=s.child,w=i.child.memoizedState,w=w===null?Td(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~l,s.memoizedState=Ed,h}return S=i.child,i=S.sibling,h=Os(S,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function wd(i,s){return s=Bc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Rc(i,s,l,h){return h!==null&&Qh(h),ma(s,i.child,null,l),i=wd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function hE(i,s,l,h,m,S,w){if(l)return s.flags&256?(s.flags&=-257,h=xd(Error(t(422))),Rc(i,s,w,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=h.fallback,m=s.mode,h=Bc({mode:"visible",children:h.children},m,0,null),S=Eo(S,m,w,null),S.flags|=2,h.return=s,S.return=s,h.sibling=S,s.child=h,(s.mode&1)!==0&&ma(s,i.child,null,w),s.child.memoizedState=Td(w),s.memoizedState=Ed,S);if((s.mode&1)===0)return Rc(i,s,w,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var k=h.dgst;return h=k,S=Error(t(419)),h=xd(S,h,void 0),Rc(i,s,w,h)}if(k=(w&i.childLanes)!==0,Mi||k){if(h=On,h!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|w))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,Zr(i,m),Mr(h,i,m,-1))}return Hd(),h=xd(Error(t(421))),Rc(i,s,w,h)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=wE.bind(null,i),m._reactRetry=s,null):(i=S.treeContext,Fi=ws(m.nextSibling),Oi=s,an=!0,vr=null,i!==null&&(nr[ir++]=$r,nr[ir++]=Kr,nr[ir++]=po,$r=i.id,Kr=i.overflow,po=s),s=wd(s,h.children),s.flags|=4096,s)}function J_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),nd(i.return,s,l)}function Ad(i,s,l,h,m){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=h,S.tail=l,S.tailMode=m)}function e0(i,s,l){var h=s.pendingProps,m=h.revealOrder,S=h.tail;if(li(i,s,h.children,l),h=cn.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&J_(i,l,s);else if(i.tag===19)J_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(tn(cn,h),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&yc(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Ad(s,!1,m,l,S);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&yc(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Ad(s,!0,l,null,S);break;case"together":Ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Jr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),xo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Os(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Os(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function dE(i,s,l){switch(s.tag){case 3:K_(s),pa();break;case 5:p_(s);break;case 1:Si(s.type)&&cc(s);break;case 4:sd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,m=s.memoizedProps.value;tn(gc,h._currentValue),h._currentValue=m;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(tn(cn,cn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Q_(i,s,l):(tn(cn,cn.current&1),i=Jr(i,s,l),i!==null?i.sibling:null);tn(cn,cn.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return e0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),tn(cn,cn.current),h)break;return null;case 22:case 23:return s.lanes=0,j_(i,s,l)}return Jr(i,s,l)}var t0,Rd,n0,i0;t0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Rd=function(){},n0=function(i,s,l,h){var m=i.memoizedProps;if(m!==h){i=s.stateNode,_o(Ur.current);var S=null;switch(l){case"input":m=Ue(i,m),h=Ue(i,h),S=[];break;case"select":m=D({},m,{value:void 0}),h=D({},h,{value:void 0}),S=[];break;case"textarea":m=_e(i,m),h=_e(i,h),S=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=ac)}gt(l,h);var w;l=null;for(fe in m)if(!h.hasOwnProperty(fe)&&m.hasOwnProperty(fe)&&m[fe]!=null)if(fe==="style"){var k=m[fe];for(w in k)k.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(r.hasOwnProperty(fe)?S||(S=[]):(S=S||[]).push(fe,null));for(fe in h){var V=h[fe];if(k=m!=null?m[fe]:void 0,h.hasOwnProperty(fe)&&V!==k&&(V!=null||k!=null))if(fe==="style")if(k){for(w in k)!k.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in V)V.hasOwnProperty(w)&&k[w]!==V[w]&&(l||(l={}),l[w]=V[w])}else l||(S||(S=[]),S.push(fe,l)),l=V;else fe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(S=S||[]).push(fe,V)):fe==="children"?typeof V!="string"&&typeof V!="number"||(S=S||[]).push(fe,""+V):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(r.hasOwnProperty(fe)?(V!=null&&fe==="onScroll"&&nn("scroll",i),S||k===V||(S=[])):(S=S||[]).push(fe,V))}l&&(S=S||[]).push("style",l);var fe=S;(s.updateQueue=fe)&&(s.flags|=4)}},i0=function(i,s,l,h){l!==h&&(s.flags|=4)};function Yl(i,s){if(!an)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function pE(i,s,l){var h=s.pendingProps;switch($h(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(s),null;case 1:return Si(s.type)&&uc(),Zn(s),null;case 3:return h=s.stateNode,va(),rn(yi),rn($n),ld(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(pc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,vr!==null&&(kd(vr),vr=null))),Rd(i,s),Zn(s),null;case 5:od(s);var m=_o(Hl.current);if(l=s.type,i!==null&&s.stateNode!=null)n0(i,s,l,h,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Zn(s),null}if(i=_o(Ur.current),pc(s)){h=s.stateNode,l=s.type;var S=s.memoizedProps;switch(h[Ir]=s,h[Ol]=S,i=(s.mode&1)!==0,l){case"dialog":nn("cancel",h),nn("close",h);break;case"iframe":case"object":case"embed":nn("load",h);break;case"video":case"audio":for(m=0;m<Nl.length;m++)nn(Nl[m],h);break;case"source":nn("error",h);break;case"img":case"image":case"link":nn("error",h),nn("load",h);break;case"details":nn("toggle",h);break;case"input":Je(h,S),nn("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!S.multiple},nn("invalid",h);break;case"textarea":ge(h,S),nn("invalid",h)}gt(l,S),m=null;for(var w in S)if(S.hasOwnProperty(w)){var k=S[w];w==="children"?typeof k=="string"?h.textContent!==k&&(S.suppressHydrationWarning!==!0&&oc(h.textContent,k,i),m=["children",k]):typeof k=="number"&&h.textContent!==""+k&&(S.suppressHydrationWarning!==!0&&oc(h.textContent,k,i),m=["children",""+k]):r.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&nn("scroll",h)}switch(l){case"input":st(h),ct(h,S,!0);break;case"textarea":st(h),Oe(h);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(h.onclick=ac)}h=m,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=De(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Ir]=s,i[Ol]=h,t0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Et(l,h),l){case"dialog":nn("cancel",i),nn("close",i),m=h;break;case"iframe":case"object":case"embed":nn("load",i),m=h;break;case"video":case"audio":for(m=0;m<Nl.length;m++)nn(Nl[m],i);m=h;break;case"source":nn("error",i),m=h;break;case"img":case"image":case"link":nn("error",i),nn("load",i),m=h;break;case"details":nn("toggle",i),m=h;break;case"input":Je(i,h),m=Ue(i,h),nn("invalid",i);break;case"option":m=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},m=D({},h,{value:void 0}),nn("invalid",i);break;case"textarea":ge(i,h),m=_e(i,h),nn("invalid",i);break;default:m=h}gt(l,m),k=m;for(S in k)if(k.hasOwnProperty(S)){var V=k[S];S==="style"?qe(i,V):S==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ft(i,V)):S==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&pe(i,V):typeof V=="number"&&pe(i,""+V):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?V!=null&&S==="onScroll"&&nn("scroll",i):V!=null&&T(i,S,V,w))}switch(l){case"input":st(i),ct(i,h,!1);break;case"textarea":st(i),Oe(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Me(h.value));break;case"select":i.multiple=!!h.multiple,S=h.value,S!=null?Q(i,!!h.multiple,S,!1):h.defaultValue!=null&&Q(i,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=ac)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Zn(s),null;case 6:if(i&&s.stateNode!=null)i0(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=_o(Hl.current),_o(Ur.current),pc(s)){if(h=s.stateNode,l=s.memoizedProps,h[Ir]=s,(S=h.nodeValue!==l)&&(i=Oi,i!==null))switch(i.tag){case 3:oc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&oc(h.nodeValue,l,(i.mode&1)!==0)}S&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ir]=s,s.stateNode=h}return Zn(s),null;case 13:if(rn(cn),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(an&&Fi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)o_(),pa(),s.flags|=98560,S=!1;else if(S=pc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ir]=s}else pa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Zn(s),S=!1}else vr!==null&&(kd(vr),vr=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(cn.current&1)!==0?Pn===0&&(Pn=3):Hd())),s.updateQueue!==null&&(s.flags|=4),Zn(s),null);case 4:return va(),Rd(i,s),i===null&&Il(s.stateNode.containerInfo),Zn(s),null;case 10:return td(s.type._context),Zn(s),null;case 17:return Si(s.type)&&uc(),Zn(s),null;case 19:if(rn(cn),S=s.memoizedState,S===null)return Zn(s),null;if(h=(s.flags&128)!==0,w=S.rendering,w===null)if(h)Yl(S,!1);else{if(Pn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=yc(i),w!==null){for(s.flags|=128,Yl(S,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)S=l,i=h,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return tn(cn,cn.current&1|2),s.child}i=i.sibling}S.tail!==null&&Le()>Ma&&(s.flags|=128,h=!0,Yl(S,!1),s.lanes=4194304)}else{if(!h)if(i=yc(w),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Yl(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!an)return Zn(s),null}else 2*Le()-S.renderingStartTime>Ma&&l!==1073741824&&(s.flags|=128,h=!0,Yl(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(l=S.last,l!==null?l.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=Le(),s.sibling=null,l=cn.current,tn(cn,h?l&1|2:l&1),s):(Zn(s),null);case 22:case 23:return Bd(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(ki&1073741824)!==0&&(Zn(s),s.subtreeFlags&6&&(s.flags|=8192)):Zn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function mE(i,s){switch($h(s),s.tag){case 1:return Si(s.type)&&uc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return va(),rn(yi),rn($n),ld(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return od(s),null;case 13:if(rn(cn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));pa()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return rn(cn),null;case 4:return va(),null;case 10:return td(s.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var bc=!1,Qn=!1,gE=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ya(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){gn(i,s,h)}else l.current=null}function Cd(i,s,l){try{l()}catch(h){gn(i,s,h)}}var r0=!1;function _E(i,s){if(Bh=$u,i=Og(),Dh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,S=h.focusNode;h=h.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var w=0,k=-1,V=-1,fe=0,xe=0,Se=i,ve=null;t:for(;;){for(var He;Se!==l||m!==0&&Se.nodeType!==3||(k=w+m),Se!==S||h!==0&&Se.nodeType!==3||(V=w+h),Se.nodeType===3&&(w+=Se.nodeValue.length),(He=Se.firstChild)!==null;)ve=Se,Se=He;for(;;){if(Se===i)break t;if(ve===l&&++fe===m&&(k=w),ve===S&&++xe===h&&(V=w),(He=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=He}l=k===-1||V===-1?null:{start:k,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hh={focusedElem:i,selectionRange:l},$u=!1,Ge=s;Ge!==null;)if(s=Ge,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ge=i;else for(;Ge!==null;){s=Ge;try{var Ke=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,yn=Ke.memoizedState,ne=s.stateNode,X=ne.getSnapshotBeforeUpdate(s.elementType===s.type?Ze:xr(s.type,Ze),yn);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){gn(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,Ge=i;break}Ge=s.return}return Ke=r0,r0=!1,Ke}function jl(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&i)===i){var S=m.destroy;m.destroy=void 0,S!==void 0&&Cd(s,l,S)}m=m.next}while(m!==h)}}function Pc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function bd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function s0(i){var s=i.alternate;s!==null&&(i.alternate=null,s0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ir],delete s[Ol],delete s[Xh],delete s[JM],delete s[eE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function o0(i){return i.tag===5||i.tag===3||i.tag===4}function a0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||o0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Pd(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=ac));else if(h!==4&&(i=i.child,i!==null))for(Pd(i,s,l),i=i.sibling;i!==null;)Pd(i,s,l),i=i.sibling}function Ld(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ld(i,s,l),i=i.sibling;i!==null;)Ld(i,s,l),i=i.sibling}var Vn=null,yr=!1;function Ls(i,s,l){for(l=l.child;l!==null;)l0(i,s,l),l=l.sibling}function l0(i,s,l){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Tn,l)}catch{}switch(l.tag){case 5:Qn||ya(l,s);case 6:var h=Vn,m=yr;Vn=null,Ls(i,s,l),Vn=h,yr=m,Vn!==null&&(yr?(i=Vn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(yr?(i=Vn,l=l.stateNode,i.nodeType===8?Wh(i.parentNode,l):i.nodeType===1&&Wh(i,l),wl(i)):Wh(Vn,l.stateNode));break;case 4:h=Vn,m=yr,Vn=l.stateNode.containerInfo,yr=!0,Ls(i,s,l),Vn=h,yr=m;break;case 0:case 11:case 14:case 15:if(!Qn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var S=m,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&Cd(l,s,w),m=m.next}while(m!==h)}Ls(i,s,l);break;case 1:if(!Qn&&(ya(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(k){gn(l,s,k)}Ls(i,s,l);break;case 21:Ls(i,s,l);break;case 22:l.mode&1?(Qn=(h=Qn)||l.memoizedState!==null,Ls(i,s,l),Qn=h):Ls(i,s,l);break;default:Ls(i,s,l)}}function u0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new gE),s.forEach(function(h){var m=AE.bind(null,i,h);l.has(h)||(l.add(h),h.then(m,m))})}}function Sr(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var S=i,w=s,k=w;e:for(;k!==null;){switch(k.tag){case 5:Vn=k.stateNode,yr=!1;break e;case 3:Vn=k.stateNode.containerInfo,yr=!0;break e;case 4:Vn=k.stateNode.containerInfo,yr=!0;break e}k=k.return}if(Vn===null)throw Error(t(160));l0(S,w,m),Vn=null,yr=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(fe){gn(m,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)c0(s,i),s=s.sibling}function c0(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Sr(s,i),Fr(i),h&4){try{jl(3,i,i.return),Pc(3,i)}catch(Ze){gn(i,i.return,Ze)}try{jl(5,i,i.return)}catch(Ze){gn(i,i.return,Ze)}}break;case 1:Sr(s,i),Fr(i),h&512&&l!==null&&ya(l,l.return);break;case 5:if(Sr(s,i),Fr(i),h&512&&l!==null&&ya(l,l.return),i.flags&32){var m=i.stateNode;try{pe(m,"")}catch(Ze){gn(i,i.return,Ze)}}if(h&4&&(m=i.stateNode,m!=null)){var S=i.memoizedProps,w=l!==null?l.memoizedProps:S,k=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{k==="input"&&S.type==="radio"&&S.name!=null&&Fe(m,S),Et(k,w);var fe=Et(k,S);for(w=0;w<V.length;w+=2){var xe=V[w],Se=V[w+1];xe==="style"?qe(m,Se):xe==="dangerouslySetInnerHTML"?ft(m,Se):xe==="children"?pe(m,Se):T(m,xe,Se,fe)}switch(k){case"input":se(m,S);break;case"textarea":ye(m,S);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var He=S.value;He!=null?Q(m,!!S.multiple,He,!1):ve!==!!S.multiple&&(S.defaultValue!=null?Q(m,!!S.multiple,S.defaultValue,!0):Q(m,!!S.multiple,S.multiple?[]:"",!1))}m[Ol]=S}catch(Ze){gn(i,i.return,Ze)}}break;case 6:if(Sr(s,i),Fr(i),h&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,S=i.memoizedProps;try{m.nodeValue=S}catch(Ze){gn(i,i.return,Ze)}}break;case 3:if(Sr(s,i),Fr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{wl(s.containerInfo)}catch(Ze){gn(i,i.return,Ze)}break;case 4:Sr(s,i),Fr(i);break;case 13:Sr(s,i),Fr(i),m=i.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(Id=Le())),h&4&&u0(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(Qn=(fe=Qn)||xe,Sr(s,i),Qn=fe):Sr(s,i),Fr(i),h&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!xe&&(i.mode&1)!==0)for(Ge=i,xe=i.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(ve=Ge,He=ve.child,ve.tag){case 0:case 11:case 14:case 15:jl(4,ve,ve.return);break;case 1:ya(ve,ve.return);var Ke=ve.stateNode;if(typeof Ke.componentWillUnmount=="function"){h=ve,l=ve.return;try{s=h,Ke.props=s.memoizedProps,Ke.state=s.memoizedState,Ke.componentWillUnmount()}catch(Ze){gn(h,l,Ze)}}break;case 5:ya(ve,ve.return);break;case 22:if(ve.memoizedState!==null){d0(Se);continue}}He!==null?(He.return=ve,Ge=He):d0(Se)}xe=xe.sibling}e:for(xe=null,Se=i;;){if(Se.tag===5){if(xe===null){xe=Se;try{m=Se.stateNode,fe?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(k=Se.stateNode,V=Se.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=mt("display",w))}catch(Ze){gn(i,i.return,Ze)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=fe?"":Se.memoizedProps}catch(Ze){gn(i,i.return,Ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Sr(s,i),Fr(i),h&4&&u0(i);break;case 21:break;default:Sr(s,i),Fr(i)}}function Fr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(o0(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(pe(m,""),h.flags&=-33);var S=a0(i);Ld(i,S,m);break;case 3:case 4:var w=h.stateNode.containerInfo,k=a0(i);Pd(i,k,w);break;default:throw Error(t(161))}}catch(V){gn(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function vE(i,s,l){Ge=i,f0(i)}function f0(i,s,l){for(var h=(i.mode&1)!==0;Ge!==null;){var m=Ge,S=m.child;if(m.tag===22&&h){var w=m.memoizedState!==null||bc;if(!w){var k=m.alternate,V=k!==null&&k.memoizedState!==null||Qn;k=bc;var fe=Qn;if(bc=w,(Qn=V)&&!fe)for(Ge=m;Ge!==null;)w=Ge,V=w.child,w.tag===22&&w.memoizedState!==null?p0(m):V!==null?(V.return=w,Ge=V):p0(m);for(;S!==null;)Ge=S,f0(S),S=S.sibling;Ge=m,bc=k,Qn=fe}h0(i)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,Ge=S):h0(i)}}function h0(i){for(;Ge!==null;){var s=Ge;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Qn||Pc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Qn)if(l===null)h.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:xr(s.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&d_(s,S,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}d_(s,w,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var xe=fe.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&wl(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Qn||s.flags&512&&bd(s)}catch(ve){gn(s,s.return,ve)}}if(s===i){Ge=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function d0(i){for(;Ge!==null;){var s=Ge;if(s===i){Ge=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function p0(i){for(;Ge!==null;){var s=Ge;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Pc(4,s)}catch(V){gn(s,l,V)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var m=s.return;try{h.componentDidMount()}catch(V){gn(s,m,V)}}var S=s.return;try{bd(s)}catch(V){gn(s,S,V)}break;case 5:var w=s.return;try{bd(s)}catch(V){gn(s,w,V)}}}catch(V){gn(s,s.return,V)}if(s===i){Ge=null;break}var k=s.sibling;if(k!==null){k.return=s.return,Ge=k;break}Ge=s.return}}var xE=Math.ceil,Lc=C.ReactCurrentDispatcher,Dd=C.ReactCurrentOwner,or=C.ReactCurrentBatchConfig,Ft=0,On=null,wn=null,Gn=0,ki=0,Sa=As(0),Pn=0,ql=null,xo=0,Dc=0,Nd=0,$l=null,Ei=null,Id=0,Ma=1/0,es=null,Nc=!1,Ud=null,Ds=null,Ic=!1,Ns=null,Uc=0,Kl=0,Od=null,Oc=-1,Fc=0;function ui(){return(Ft&6)!==0?Le():Oc!==-1?Oc:Oc=Le()}function Is(i){return(i.mode&1)===0?1:(Ft&2)!==0&&Gn!==0?Gn&-Gn:nE.transition!==null?(Fc===0&&(Fc=Yu()),Fc):(i=Yt,i!==0||(i=window.event,i=i===void 0?16:gg(i.type)),i)}function Mr(i,s,l,h){if(50<Kl)throw Kl=0,Od=null,Error(t(185));yl(i,l,h),((Ft&2)===0||i!==On)&&(i===On&&((Ft&2)===0&&(Dc|=l),Pn===4&&Us(i,Gn)),Ti(i,h),l===1&&Ft===0&&(s.mode&1)===0&&(Ma=Le()+500,fc&&Cs()))}function Ti(i,s){var l=i.callbackNode;xi(i,s);var h=tr(i,i===On?Gn:0);if(h===0)l!==null&&be(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&be(l),s===1)i.tag===0?tE(g0.bind(null,i)):t_(g0.bind(null,i)),ZM(function(){(Ft&6)===0&&Cs()}),l=null;else{switch(lg(h)){case 1:l=lt;break;case 4:l=xt;break;case 16:l=Xt;break;case 536870912:l=Bt;break;default:l=Xt}l=T0(l,m0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function m0(i,s){if(Oc=-1,Fc=0,(Ft&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ea()&&i.callbackNode!==l)return null;var h=tr(i,i===On?Gn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=kc(i,h);else{s=h;var m=Ft;Ft|=2;var S=v0();(On!==i||Gn!==s)&&(es=null,Ma=Le()+500,So(i,s));do try{ME();break}catch(k){_0(i,k)}while(!0);ed(),Lc.current=S,Ft=m,wn!==null?s=0:(On=null,Gn=0,s=Pn)}if(s!==0){if(s===2&&(m=co(i),m!==0&&(h=m,s=Fd(i,m))),s===1)throw l=ql,So(i,0),Us(i,h),Ti(i,Le()),l;if(s===6)Us(i,h);else{if(m=i.current.alternate,(h&30)===0&&!yE(m)&&(s=kc(i,h),s===2&&(S=co(i),S!==0&&(h=S,s=Fd(i,S))),s===1))throw l=ql,So(i,0),Us(i,h),Ti(i,Le()),l;switch(i.finishedWork=m,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Mo(i,Ei,es);break;case 3:if(Us(i,h),(h&130023424)===h&&(s=Id+500-Le(),10<s)){if(tr(i,0)!==0)break;if(m=i.suspendedLanes,(m&h)!==h){ui(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Gh(Mo.bind(null,i,Ei,es),s);break}Mo(i,Ei,es);break;case 4:if(Us(i,h),(h&4194240)===h)break;for(s=i.eventTimes,m=-1;0<h;){var w=31-ai(h);S=1<<w,w=s[w],w>m&&(m=w),h&=~S}if(h=m,h=Le()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*xE(h/1960))-h,10<h){i.timeoutHandle=Gh(Mo.bind(null,i,Ei,es),h);break}Mo(i,Ei,es);break;case 5:Mo(i,Ei,es);break;default:throw Error(t(329))}}}return Ti(i,Le()),i.callbackNode===l?m0.bind(null,i):null}function Fd(i,s){var l=$l;return i.current.memoizedState.isDehydrated&&(So(i,s).flags|=256),i=kc(i,s),i!==2&&(s=Ei,Ei=l,s!==null&&kd(s)),i}function kd(i){Ei===null?Ei=i:Ei.push.apply(Ei,i)}function yE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],S=m.getSnapshot;m=m.value;try{if(!_r(S(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Us(i,s){for(s&=~Nd,s&=~Dc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ai(s),h=1<<l;i[l]=-1,s&=~h}}function g0(i){if((Ft&6)!==0)throw Error(t(327));Ea();var s=tr(i,0);if((s&1)===0)return Ti(i,Le()),null;var l=kc(i,s);if(i.tag!==0&&l===2){var h=co(i);h!==0&&(s=h,l=Fd(i,h))}if(l===1)throw l=ql,So(i,0),Us(i,s),Ti(i,Le()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Mo(i,Ei,es),Ti(i,Le()),null}function zd(i,s){var l=Ft;Ft|=1;try{return i(s)}finally{Ft=l,Ft===0&&(Ma=Le()+500,fc&&Cs())}}function yo(i){Ns!==null&&Ns.tag===0&&(Ft&6)===0&&Ea();var s=Ft;Ft|=1;var l=or.transition,h=Yt;try{if(or.transition=null,Yt=1,i)return i()}finally{Yt=h,or.transition=l,Ft=s,(Ft&6)===0&&Cs()}}function Bd(){ki=Sa.current,rn(Sa)}function So(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,KM(l)),wn!==null)for(l=wn.return;l!==null;){var h=l;switch($h(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&uc();break;case 3:va(),rn(yi),rn($n),ld();break;case 5:od(h);break;case 4:va();break;case 13:rn(cn);break;case 19:rn(cn);break;case 10:td(h.type._context);break;case 22:case 23:Bd()}l=l.return}if(On=i,wn=i=Os(i.current,null),Gn=ki=s,Pn=0,ql=null,Nd=Dc=xo=0,Ei=$l=null,go!==null){for(s=0;s<go.length;s++)if(l=go[s],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,S=l.pending;if(S!==null){var w=S.next;S.next=m,h.next=w}l.pending=h}go=null}return i}function _0(i,s){do{var l=wn;try{if(ed(),Sc.current=wc,Mc){for(var h=fn.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Mc=!1}if(vo=0,Un=bn=fn=null,Vl=!1,Gl=0,Dd.current=null,l===null||l.return===null){Pn=1,ql=s,wn=null;break}e:{var S=i,w=l.return,k=l,V=s;if(s=Gn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var fe=V,xe=k,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var He=V_(w);if(He!==null){He.flags&=-257,G_(He,w,k,S,s),He.mode&1&&H_(S,fe,s),s=He,V=fe;var Ke=s.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(V),s.updateQueue=Ze}else Ke.add(V);break e}else{if((s&1)===0){H_(S,fe,s),Hd();break e}V=Error(t(426))}}else if(an&&k.mode&1){var yn=V_(w);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),G_(yn,w,k,S,s),Qh(xa(V,k));break e}}S=V=xa(V,k),Pn!==4&&(Pn=2),$l===null?$l=[S]:$l.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var ne=z_(S,V,s);h_(S,ne);break e;case 1:k=V;var X=S.type,ae=S.stateNode;if((S.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Ds===null||!Ds.has(ae)))){S.flags|=65536,s&=-s,S.lanes|=s;var Ae=B_(S,k,s);h_(S,Ae);break e}}S=S.return}while(S!==null)}y0(l)}catch(nt){s=nt,wn===l&&l!==null&&(wn=l=l.return);continue}break}while(!0)}function v0(){var i=Lc.current;return Lc.current=wc,i===null?wc:i}function Hd(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),On===null||(xo&268435455)===0&&(Dc&268435455)===0||Us(On,Gn)}function kc(i,s){var l=Ft;Ft|=2;var h=v0();(On!==i||Gn!==s)&&(es=null,So(i,s));do try{SE();break}catch(m){_0(i,m)}while(!0);if(ed(),Ft=l,Lc.current=h,wn!==null)throw Error(t(261));return On=null,Gn=0,Pn}function SE(){for(;wn!==null;)x0(wn)}function ME(){for(;wn!==null&&!Xe();)x0(wn)}function x0(i){var s=E0(i.alternate,i,ki);i.memoizedProps=i.pendingProps,s===null?y0(i):wn=s,Dd.current=null}function y0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=pE(l,s,ki),l!==null){wn=l;return}}else{if(l=mE(l,s),l!==null){l.flags&=32767,wn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Pn=6,wn=null;return}}if(s=s.sibling,s!==null){wn=s;return}wn=s=i}while(s!==null);Pn===0&&(Pn=5)}function Mo(i,s,l){var h=Yt,m=or.transition;try{or.transition=null,Yt=1,EE(i,s,l,h)}finally{or.transition=m,Yt=h}return null}function EE(i,s,l,h){do Ea();while(Ns!==null);if((Ft&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(iM(i,S),i===On&&(wn=On=null,Gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ic||(Ic=!0,T0(Xt,function(){return Ea(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=or.transition,or.transition=null;var w=Yt;Yt=1;var k=Ft;Ft|=4,Dd.current=null,_E(i,l),c0(l,i),GM(Hh),$u=!!Bh,Hh=Bh=null,i.current=l,vE(l),ht(),Ft=k,Yt=w,or.transition=S}else i.current=l;if(Ic&&(Ic=!1,Ns=i,Uc=m),S=i.pendingLanes,S===0&&(Ds=null),vt(l.stateNode),Ti(i,Le()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(Nc)throw Nc=!1,i=Ud,Ud=null,i;return(Uc&1)!==0&&i.tag!==0&&Ea(),S=i.pendingLanes,(S&1)!==0?i===Od?Kl++:(Kl=0,Od=i):Kl=0,Cs(),null}function Ea(){if(Ns!==null){var i=lg(Uc),s=or.transition,l=Yt;try{if(or.transition=null,Yt=16>i?16:i,Ns===null)var h=!1;else{if(i=Ns,Ns=null,Uc=0,(Ft&6)!==0)throw Error(t(331));var m=Ft;for(Ft|=4,Ge=i.current;Ge!==null;){var S=Ge,w=S.child;if((Ge.flags&16)!==0){var k=S.deletions;if(k!==null){for(var V=0;V<k.length;V++){var fe=k[V];for(Ge=fe;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:jl(8,xe,S)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,He=xe.return;if(s0(xe),xe===fe){Ge=null;break}if(ve!==null){ve.return=He,Ge=ve;break}Ge=He}}}var Ke=S.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var yn=Ze.sibling;Ze.sibling=null,Ze=yn}while(Ze!==null)}}Ge=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,Ge=w;else e:for(;Ge!==null;){if(S=Ge,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:jl(9,S,S.return)}var ne=S.sibling;if(ne!==null){ne.return=S.return,Ge=ne;break e}Ge=S.return}}var X=i.current;for(Ge=X;Ge!==null;){w=Ge;var ae=w.child;if((w.subtreeFlags&2064)!==0&&ae!==null)ae.return=w,Ge=ae;else e:for(w=X;Ge!==null;){if(k=Ge,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Pc(9,k)}}catch(nt){gn(k,k.return,nt)}if(k===w){Ge=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,Ge=Ae;break e}Ge=k.return}}if(Ft=m,Cs(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Tn,i)}catch{}h=!0}return h}finally{Yt=l,or.transition=s}}return!1}function S0(i,s,l){s=xa(l,s),s=z_(i,s,1),i=Ps(i,s,1),s=ui(),i!==null&&(yl(i,1,s),Ti(i,s))}function gn(i,s,l){if(i.tag===3)S0(i,i,l);else for(;s!==null;){if(s.tag===3){S0(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ds===null||!Ds.has(h))){i=xa(l,i),i=B_(s,i,1),s=Ps(s,i,1),i=ui(),s!==null&&(yl(s,1,i),Ti(s,i));break}}s=s.return}}function TE(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=ui(),i.pingedLanes|=i.suspendedLanes&l,On===i&&(Gn&l)===l&&(Pn===4||Pn===3&&(Gn&130023424)===Gn&&500>Le()-Id?So(i,0):Nd|=l),Ti(i,s)}function M0(i,s){s===0&&((i.mode&1)===0?s=1:(s=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var l=ui();i=Zr(i,s),i!==null&&(yl(i,s,l),Ti(i,l))}function wE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),M0(i,l)}function AE(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),M0(i,l)}var E0;E0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||yi.current)Mi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Mi=!1,dE(i,s,l);Mi=(i.flags&131072)!==0}else Mi=!1,an&&(s.flags&1048576)!==0&&n_(s,dc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Cc(i,s),i=s.pendingProps;var m=fa(s,$n.current);_a(s,l),m=fd(null,s,h,i,m,l);var S=hd();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Si(h)?(S=!0,cc(s)):S=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,rd(s),m.updater=Ac,s.stateNode=m,m._reactInternals=s,vd(s,h,i,l),s=Md(null,s,h,!0,S,l)):(s.tag=0,an&&S&&qh(s),li(null,s,m,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Cc(i,s),i=s.pendingProps,m=h._init,h=m(h._payload),s.type=h,m=s.tag=CE(h),i=xr(h,i),m){case 0:s=Sd(null,s,h,i,l);break e;case 1:s=$_(null,s,h,i,l);break e;case 11:s=W_(null,s,h,i,l);break e;case 14:s=X_(null,s,h,xr(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:xr(h,m),Sd(i,s,h,m,l);case 1:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:xr(h,m),$_(i,s,h,m,l);case 3:e:{if(K_(s),i===null)throw Error(t(387));h=s.pendingProps,S=s.memoizedState,m=S.element,f_(i,s),xc(s,h,null,l);var w=s.memoizedState;if(h=w.element,S.isDehydrated)if(S={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){m=xa(Error(t(423)),s),s=Z_(i,s,h,l,m);break e}else if(h!==m){m=xa(Error(t(424)),s),s=Z_(i,s,h,l,m);break e}else for(Fi=ws(s.stateNode.containerInfo.firstChild),Oi=s,an=!0,vr=null,l=u_(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pa(),h===m){s=Jr(i,s,l);break e}li(i,s,h,l)}s=s.child}return s;case 5:return p_(s),i===null&&Zh(s),h=s.type,m=s.pendingProps,S=i!==null?i.memoizedProps:null,w=m.children,Vh(h,m)?w=null:S!==null&&Vh(h,S)&&(s.flags|=32),q_(i,s),li(i,s,w,l),s.child;case 6:return i===null&&Zh(s),null;case 13:return Q_(i,s,l);case 4:return sd(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=ma(s,null,h,l):li(i,s,h,l),s.child;case 11:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:xr(h,m),W_(i,s,h,m,l);case 7:return li(i,s,s.pendingProps,l),s.child;case 8:return li(i,s,s.pendingProps.children,l),s.child;case 12:return li(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,m=s.pendingProps,S=s.memoizedProps,w=m.value,tn(gc,h._currentValue),h._currentValue=w,S!==null)if(_r(S.value,w)){if(S.children===m.children&&!yi.current){s=Jr(i,s,l);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var k=S.dependencies;if(k!==null){w=S.child;for(var V=k.firstContext;V!==null;){if(V.context===h){if(S.tag===1){V=Qr(-1,l&-l),V.tag=2;var fe=S.updateQueue;if(fe!==null){fe=fe.shared;var xe=fe.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),fe.pending=V}}S.lanes|=l,V=S.alternate,V!==null&&(V.lanes|=l),nd(S.return,l,s),k.lanes|=l;break}V=V.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=l,k=w.alternate,k!==null&&(k.lanes|=l),nd(w,l,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}li(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,h=s.pendingProps.children,_a(s,l),m=rr(m),h=h(m),s.flags|=1,li(i,s,h,l),s.child;case 14:return h=s.type,m=xr(h,s.pendingProps),m=xr(h.type,m),X_(i,s,h,m,l);case 15:return Y_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:xr(h,m),Cc(i,s),s.tag=1,Si(h)?(i=!0,cc(s)):i=!1,_a(s,l),F_(s,h,m),vd(s,h,m,l),Md(null,s,h,!0,i,l);case 19:return e0(i,s,l);case 22:return j_(i,s,l)}throw Error(t(156,s.tag))};function T0(i,s){return re(i,s)}function RE(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(i,s,l,h){return new RE(i,s,l,h)}function Vd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function CE(i){if(typeof i=="function")return Vd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Y)return 11;if(i===j)return 14}return 2}function Os(i,s){var l=i.alternate;return l===null?(l=ar(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function zc(i,s,l,h,m,S){var w=2;if(h=i,typeof i=="function")Vd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case P:return Eo(l.children,m,S,s);case W:w=8,m|=8;break;case A:return i=ar(12,l,s,m|2),i.elementType=A,i.lanes=S,i;case he:return i=ar(13,l,s,m),i.elementType=he,i.lanes=S,i;case z:return i=ar(19,l,s,m),i.elementType=z,i.lanes=S,i;case Z:return Bc(l,m,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:w=10;break e;case te:w=9;break e;case Y:w=11;break e;case j:w=14;break e;case J:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ar(w,l,s,m),s.elementType=i,s.type=h,s.lanes=S,s}function Eo(i,s,l,h){return i=ar(7,i,h,s),i.lanes=l,i}function Bc(i,s,l,h){return i=ar(22,i,h,s),i.elementType=Z,i.lanes=l,i.stateNode={isHidden:!1},i}function Gd(i,s,l){return i=ar(6,i,null,s),i.lanes=l,i}function Wd(i,s,l){return s=ar(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function bE(i,s,l,h,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Xd(i,s,l,h,m,S,w,k,V){return i=new bE(i,s,l,k,V),s===1?(s=1,S===!0&&(s|=8)):s=0,S=ar(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(S),i}function PE(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function w0(i){if(!i)return Rs;i=i._reactInternals;e:{if(Nt(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Si(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Si(l))return Jg(i,l,s)}return s}function A0(i,s,l,h,m,S,w,k,V){return i=Xd(l,h,!0,i,m,S,w,k,V),i.context=w0(null),l=i.current,h=ui(),m=Is(l),S=Qr(h,m),S.callback=s??null,Ps(l,S,m),i.current.lanes=m,yl(i,m,h),Ti(i,h),i}function Hc(i,s,l,h){var m=s.current,S=ui(),w=Is(m);return l=w0(l),s.context===null?s.context=l:s.pendingContext=l,s=Qr(S,w),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Ps(m,s,w),i!==null&&(Mr(i,m,w,S),vc(i,m,w)),w}function Vc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function R0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Yd(i,s){R0(i,s),(i=i.alternate)&&R0(i,s)}function LE(){return null}var C0=typeof reportError=="function"?reportError:function(i){console.error(i)};function jd(i){this._internalRoot=i}Gc.prototype.render=jd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Hc(i,s,null,null)},Gc.prototype.unmount=jd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;yo(function(){Hc(null,i,null,null)}),s[jr]=null}};function Gc(i){this._internalRoot=i}Gc.prototype.unstable_scheduleHydration=function(i){if(i){var s=fg();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ms.length&&s!==0&&s<Ms[l].priority;l++);Ms.splice(l,0,i),l===0&&pg(i)}};function qd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Wc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function b0(){}function DE(i,s,l,h,m){if(m){if(typeof h=="function"){var S=h;h=function(){var fe=Vc(w);S.call(fe)}}var w=A0(s,h,i,0,null,!1,!1,"",b0);return i._reactRootContainer=w,i[jr]=w.current,Il(i.nodeType===8?i.parentNode:i),yo(),w}for(;m=i.lastChild;)i.removeChild(m);if(typeof h=="function"){var k=h;h=function(){var fe=Vc(V);k.call(fe)}}var V=Xd(i,0,!1,null,null,!1,!1,"",b0);return i._reactRootContainer=V,i[jr]=V.current,Il(i.nodeType===8?i.parentNode:i),yo(function(){Hc(s,V,l,h)}),V}function Xc(i,s,l,h,m){var S=l._reactRootContainer;if(S){var w=S;if(typeof m=="function"){var k=m;m=function(){var V=Vc(w);k.call(V)}}Hc(s,w,i,m)}else w=DE(l,s,i,m,h);return Vc(w)}ug=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=mn(s.pendingLanes);l!==0&&(vh(s,l|1),Ti(s,Le()),(Ft&6)===0&&(Ma=Le()+500,Cs()))}break;case 13:yo(function(){var h=Zr(i,1);if(h!==null){var m=ui();Mr(h,i,1,m)}}),Yd(i,1)}},xh=function(i){if(i.tag===13){var s=Zr(i,134217728);if(s!==null){var l=ui();Mr(s,i,134217728,l)}Yd(i,134217728)}},cg=function(i){if(i.tag===13){var s=Is(i),l=Zr(i,s);if(l!==null){var h=ui();Mr(l,i,s,h)}Yd(i,s)}},fg=function(){return Yt},hg=function(i,s){var l=Yt;try{return Yt=i,s()}finally{Yt=l}},we=function(i,s,l){switch(s){case"input":if(se(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var m=lc(h);if(!m)throw Error(t(90));ie(h),se(h,m)}}}break;case"textarea":ye(i,l);break;case"select":s=l.value,s!=null&&Q(i,!!l.multiple,s,!1)}},At=zd,It=yo;var NE={usingClientEntryPoint:!1,Events:[Fl,ua,lc,ot,rt,zd]},Zl={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IE={bundleType:Zl.bundleType,version:Zl.version,rendererPackageName:Zl.rendererPackageName,rendererConfig:Zl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ue(i),i===null?null:i.stateNode},findFiberByHostInstance:Zl.findFiberByHostInstance||LE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Tn=Yc.inject(IE),Rt=Yc}catch{}}return wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NE,wi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(s))throw Error(t(200));return PE(i,s,null,l)},wi.createRoot=function(i,s){if(!qd(i))throw Error(t(299));var l=!1,h="",m=C0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Xd(i,1,!1,null,null,l,!1,h,m),i[jr]=s.current,Il(i.nodeType===8?i.parentNode:i),new jd(s)},wi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ue(s),i=i===null?null:i.stateNode,i},wi.flushSync=function(i){return yo(i)},wi.hydrate=function(i,s,l){if(!Wc(s))throw Error(t(200));return Xc(null,i,s,!0,l)},wi.hydrateRoot=function(i,s,l){if(!qd(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,S="",w=C0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=A0(s,null,i,1,l??null,m,!1,S,w),i[jr]=s.current,Il(i),h)for(i=0;i<h.length;i++)l=h[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new Gc(s)},wi.render=function(i,s,l){if(!Wc(s))throw Error(t(200));return Xc(null,i,s,!1,l)},wi.unmountComponentAtNode=function(i){if(!Wc(i))throw Error(t(40));return i._reactRootContainer?(yo(function(){Xc(null,null,i,!1,function(){i._reactRootContainer=null,i[jr]=null})}),!0):!1},wi.unstable_batchedUpdates=zd,wi.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Wc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Xc(i,s,l,!1,h)},wi.version="18.3.1-next-f1338f8080-20240426",wi}var F0;function XE(){if(F0)return Zd.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zd.exports=WE(),Zd.exports}var k0;function YE(){if(k0)return jc;k0=1;var o=XE();return jc.createRoot=o.createRoot,jc.hydrateRoot=o.hydrateRoot,jc}var jE=YE();const qE=Qx(jE);var z0="1.3.26";function Jx(o,e,t){return Math.max(o,Math.min(e,t))}function $E(o,e,t){return(1-t)*o+t*e}function KE(o,e,t,n){return $E(o,e,1-Math.exp(-t*n))}function ZE(o,e){return(o%e+e)%e}var QE=class{constructor(){it(this,"isRunning",!1);it(this,"value",0);it(this,"from",0);it(this,"to",0);it(this,"currentTime",0);it(this,"lerp");it(this,"duration");it(this,"easing");it(this,"onUpdate")}advance(o){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const n=Jx(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=KE(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:c}){this.from=this.value=o,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function JE(o,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,o.apply(this,n)},e)}}var e1=class{constructor(o,e,{autoResize:t=!0,debounce:n=250}={}){it(this,"width",0);it(this,"height",0);it(this,"scrollHeight",0);it(this,"scrollWidth",0);it(this,"debouncedResize");it(this,"wrapperResizeObserver");it(this,"contentResizeObserver");it(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});it(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});it(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=o,this.content=e,t&&(this.debouncedResize=JE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var o,e;(o=this.wrapperResizeObserver)==null||o.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ey=class{constructor(){it(this,"events",{})}emit(o,...e){var n;const t=this.events[o]||[];for(let r=0,a=t.length;r<a;r++)(n=t[r])==null||n.call(t,...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}}off(o,e){var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const t1=100/6,ks={passive:!1};function B0(o,e){return o===1?t1:o===2?e:1}var n1=class{constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){it(this,"touchStart",{x:0,y:0});it(this,"lastDelta",{x:0,y:0});it(this,"window",{width:0,height:0});it(this,"emitter",new ey);it(this,"onTouchStart",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})});it(this,"onTouchMove",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:o})});it(this,"onTouchEnd",o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})});it(this,"onWheel",o=>{let{deltaX:e,deltaY:t,deltaMode:n}=o;const r=B0(n,this.window.width),a=B0(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:o})});it(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ks),this.element.addEventListener("touchstart",this.onTouchStart,ks),this.element.addEventListener("touchmove",this.onTouchMove,ks),this.element.addEventListener("touchend",this.onTouchEnd,ks)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ks),this.element.removeEventListener("touchstart",this.onTouchStart,ks),this.element.removeEventListener("touchmove",this.onTouchMove,ks),this.element.removeEventListener("touchend",this.onTouchEnd,ks)}};const H0=o=>Math.min(1,1.001-2**(-10*o));var i1=class{constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:t=o,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:u,easing:f,lerp:d=.1,infinite:p=!1,orientation:_="vertical",gestureOrientation:g=_==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:E=1,autoResize:M=!0,prevent:x,virtualScroll:y,overscroll:R=!0,autoRaf:T=!1,anchors:C=!1,autoToggle:U=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:P=!1,naiveDimensions:W=P,stopInertiaOnNavigate:A=!1,respectReducedMotion:b=!0}={}){it(this,"_isScrolling",!1);it(this,"_isStopped",!1);it(this,"_isLocked",!1);it(this,"_preventNextNativeScrollEvent",!1);it(this,"_resetVelocityTimeout",null);it(this,"_rafId",null);it(this,"_isDraggingSelection",!1);it(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));it(this,"isTouching");it(this,"isIos");it(this,"time",0);it(this,"userData",{});it(this,"lastVelocity",0);it(this,"velocity",0);it(this,"direction",0);it(this,"options");it(this,"targetScroll");it(this,"animatedScroll");it(this,"animate",new QE);it(this,"emitter",new ey);it(this,"dimensions");it(this,"virtualScroll");it(this,"onScrollEnd",o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()});it(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});it(this,"onTransitionEnd",o=>{var e;(e=o.propertyName)!=null&&e.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()});it(this,"onClick",o=>{const e=o.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(n.hash);this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});it(this,"onPointerDown",o=>{o.button===1&&this.reset()});it(this,"onVirtualScroll",o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:t,event:n}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||u)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(E=>{var M,x,y,R,T;return E instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(E))||((M=E.hasAttribute)==null?void 0:M.call(E,"data-lenis-prevent"))||p==="vertical"&&((x=E.hasAttribute)==null?void 0:x.call(E,"data-lenis-prevent-vertical"))||p==="horizontal"&&((y=E.hasAttribute)==null?void 0:y.call(E,"data-lenis-prevent-horizontal"))||r&&((R=E.hasAttribute)==null?void 0:R.call(E,"data-lenis-prevent-touch"))||a&&((T=E.hasAttribute)==null?void 0:T.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let _=t;this.options.gestureOrientation==="both"?_=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const g=r&&this.options.syncTouch,v=r&&n.type==="touchend";v&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...g?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});it(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});it(this,"raf",o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=z0,window.lenis||(window.lenis={}),window.lenis.version=z0,_==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!o||o===document.documentElement)&&(o=window),typeof u=="number"&&typeof f!="function"?f=H0:typeof f=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:o,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:c,duration:u,easing:f,lerp:d,infinite:p,gestureOrientation:g,orientation:_,touchMultiplier:v,wheelMultiplier:E,autoResize:M,prevent:x,virtualScroll:y,overscroll:R,autoRaf:T,anchors:C,autoToggle:U,allowNestedScroll:I,naiveDimensions:W,stopInertiaOnNavigate:A,respectReducedMotion:b},this.dimensions=new e1(o,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new n1(t,{touchMultiplier:v,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}isTouchOnSelectionHandle(o){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=o.targetTouches[0]??o.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],a=n[n.length-1],c=40,u=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=c,f=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=c;return u||f}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(o,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:c=r?this.options.duration:void 0,easing:u=r?this.options.easing:void 0,onStart:f,onComplete:d,force:p=!1,userData:_}={}){if(this.prefersReducedMotion&&(r?t=!0:(a=1,c=void 0,u=void 0)),(this.isStopped||this.isLocked)&&!p)return;let g=o,v=e;if(typeof g=="string"&&["top","left","start","#"].includes(g))g=0;else if(typeof g=="string"&&["bottom","right","end"].includes(g))g=this.limit;else{let E=null;if(typeof g=="string"?(E=g.startsWith("#")?document.getElementById(g.slice(1)):document.querySelector(g),E||(g==="#top"?g=0:console.warn("Lenis: Target not found",g))):g instanceof HTMLElement&&(g!=null&&g.nodeType)&&(E=g),E){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?C.left:C.top}const M=E.getBoundingClientRect(),x=getComputedStyle(E),y=this.isHorizontal?Number.parseFloat(x.scrollMarginLeft):Number.parseFloat(x.scrollMarginTop),R=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(R.scrollPaddingLeft):Number.parseFloat(R.scrollPaddingTop);g=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(T)?0:T)}}if(typeof g=="number"){if(g+=v,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const E=g-this.animatedScroll;E>this.limit/2?g-=this.limit:E<-this.limit/2&&(g+=this.limit)}}else g=Jx(0,g,this.limit);if(g===this.targetScroll){f==null||f(this),d==null||d(this);return}if(this.userData=_??{},t){this.animatedScroll=this.targetScroll=g,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=g),typeof c=="number"&&typeof u!="function"?u=H0:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,g,{duration:c,easing:u,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(E,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),r&&(this.targetScroll=E),M||this.emit(),M&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:t}){const n=Date.now();o._lenis||(o._lenis={});const r=o._lenis;let a,c,u,f,d,p,_,g,v,E;if(n-(r.time??0)>2e3){r.time=Date.now();const I=window.getComputedStyle(o);if(r.computedStyle=I,a=["auto","overlay","scroll"].includes(I.overflowX),c=["auto","overlay","scroll"].includes(I.overflowY),d=["auto"].includes(I.overscrollBehaviorX),p=["auto"].includes(I.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=c,!(a||c))return!1;_=o.scrollWidth,g=o.scrollHeight,v=o.clientWidth,E=o.clientHeight,u=_>v,f=g>E,r.isScrollableX=u,r.isScrollableY=f,r.scrollWidth=_,r.scrollHeight=g,r.clientWidth=v,r.clientHeight=E,r.hasOverscrollBehaviorX=d,r.hasOverscrollBehaviorY=p}else u=r.isScrollableX,f=r.isScrollableY,a=r.hasOverflowX,c=r.hasOverflowY,_=r.scrollWidth,g=r.scrollHeight,v=r.clientWidth,E=r.clientHeight,d=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&u||c&&f))return!1;const M=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let x,y,R,T,C,U;if(M==="horizontal")x=Math.round(o.scrollLeft),y=_-v,R=e,T=a,C=u,U=d;else if(M==="vertical")x=Math.round(o.scrollTop),y=g-E,R=t,T=c,C=f,U=p;else return!1;return!U&&(x>=y||x<=0)?!0:(R>0?x<y:x>0)&&T&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?ZE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};function as(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ty(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cu={duration:.5,overwrite:!1,delay:0},bm,jn,ln,pr=1e8,en=1/pr,jp=Math.PI*2,r1=jp/4,s1=0,ny=Math.sqrt,o1=Math.cos,a1=Math.sin,Hn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},ps=function(e){return typeof e=="number"},Pm=function(e){return typeof e>"u"},Xr=function(e){return typeof e=="object"},Pi=function(e){return e!==!1},Lm=function(){return typeof window<"u"},qc=function(e){return _n(e)||Hn(e)},iy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},si=Array.isArray,l1=/random\([^)]+\)/g,u1=/,\s*/g,V0=/(?:-?\.?\d|\.)+/gi,ry=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ya=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ep=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sy=/[+-]=-?[.\d]+/,c1=/[^,'"\[\]\s]+/gi,f1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dn,kr,qp,Dm,Ji={},Gf={},oy,ay=function(e){return(Gf=ol(e,Ji))&&Ii},Nm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bu=function(e,t){return!t&&console.warn(e)},ly=function(e,t){return e&&(Ji[e]=t)&&Gf&&(Gf[e]=t)||Ji},Pu=function(){return 0},h1={suppressEvents:!0,isStart:!0,kill:!1},Nf={suppressEvents:!0,kill:!1},d1={suppressEvents:!0},Im={},Qs=[],$p={},uy,Gi={},tp={},G0=30,If=[],Um="",Om=function(e){var t=e[0],n,r;if(Xr(t)||_n(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=If.length;r--&&!If[r].targetTest(t););n=If[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ly(e[r],n)))||e.splice(r,1);return e},Bo=function(e){return e._gsap||Om(mr(e))[0]._gsap},cy=function(e,t,n){return(n=e[t])&&_n(n)?e[t]():Pm(n)&&e.getAttribute&&e.getAttribute(t)||n},Li=function(e,t){return(e=e.split(",")).forEach(t)||e},Sn=function(e){return Math.round(e*1e5)/1e5||0},hn=function(e){return Math.round(e*1e7)/1e7||0},Za=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},p1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Wf=function(){var e=Qs.length,t=Qs.slice(0),n,r;for($p={},Qs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fm=function(e){return!!(e._initted||e._startAt||e.add)},fy=function(e,t,n,r){Qs.length&&!jn&&Wf(),e.render(t,n,!!(jn&&t<0&&Fm(e))),Qs.length&&!jn&&Wf()},hy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(c1).length<2?t:Hn(e)?e.trim():e},dy=function(e){return e},er=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},m1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ol=function(e,t){for(var n in t)e[n]=t[n];return e},W0=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xr(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Xf=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},mu=function(e){var t=e.parent||dn,n=e.keyframes?m1(si(e.keyframes)):er;if(Pi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},g1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},py=function(e,t,n,r,a){var c=e[r],u;if(a)for(u=t[a];c&&c[a]>u;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=c,t.parent=t._dp=e,t},lh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,c=t._next;a?a._next=c:e[n]===t&&(e[n]=c),c?c._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},ro=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ho=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kp=function(e,t,n,r){return e._startAt&&(jn?e._startAt.revert(Nf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},v1=function o(e){return!e||e._ts&&o(e.parent)},X0=function(e){return e._repeat?al(e._tTime,e=e.duration()+e._rDelay)*e:0},al=function(e,t){var n=Math.floor(e=hn(e/t));return e&&n===e?n-1:n},Yf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uh=function(e){return e._end=hn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},ch=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=hn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uh(e),n._dirty||Ho(n,e)),e},my=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Yf(e.rawTime(),t),(!t._dur||Bu(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),Ho(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},Hr=function(e,t,n,r){return t.parent&&ro(t),t._start=hn((ps(n)?n:n||e!==dn?ur(e,n,t):e._time)+t._delay),t._end=hn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),py(e,t,"_first","_last",e._sort?"_start":0),Zp(t)||(e._recent=t),r||my(e,t),e._ts<0&&ch(e,e._tTime),e},gy=function(e,t){return(Ji.ScrollTrigger||Nm("scrollTrigger",t))&&Ji.ScrollTrigger.create(t,e)},_y=function(e,t,n,r,a){if(zm(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!jn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uy!==Yi.frame)return Qs.push(e),e._lazy=[a,r],1},x1=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Zp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},y1=function(e,t,n,r){var a=e.ratio,c=t<0||!t&&(!e._start&&x1(e)&&!(!e._initted&&Zp(e))||(e._ts<0||e._dp._ts<0)&&!Zp(e))?0:1,u=e._rDelay,f=0,d,p,_;if(u&&e._repeat&&(f=Bu(0,e._tDur,t),p=al(f,u),e._yoyo&&p&1&&(c=1-c),p!==al(e._tTime,u)&&(a=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==a||jn||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&_y(e,t,r,n,f))return;for(_=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=f,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&Kp(e,t,n,!0),e._onUpdate&&!n&&qi(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&ro(e,1),!n&&!jn&&(qi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},S1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ll=function(e,t,n,r){var a=e._repeat,c=hn(t)||0,u=e._tTime/e._tDur;return u&&!r&&(e._time*=c/e._dur),e._dur=c,e._tDur=a?a<0?1e10:hn(c*(a+1)+e._rDelay*a):c,u>0&&!r&&ch(e,e._tTime=e._tDur*u),e.parent&&uh(e),n||Ho(e.parent,e),e},Y0=function(e){return e instanceof bi?Ho(e):ll(e,e._dur)},M1={_start:0,endTime:Pu,totalDuration:Pu},ur=function o(e,t,n){var r=e.labels,a=e._recent||M1,c=e.duration()>=pr?a.endTime(!1):e._dur,u,f,d;return Hn(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),d=t.substr(-1)==="%",u=t.indexOf("="),f==="<"||f===">"?(u>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(u<0?a:n).totalDuration()/100:1)):u<0?(t in r||(r[t]=c),r[t]):(f=parseFloat(t.charAt(u-1)+t.substr(u+1)),d&&n&&(f=f/100*(si(n)?n[0]:n).totalDuration()),u>1?o(e,t.substr(0,u-1),n)+f:c+f)):t==null?c:+t},gu=function(e,t,n){var r=ps(t[1]),a=(r?2:1)+(e<2?0:1),c=t[a],u,f;if(r&&(c.duration=t[1]),c.parent=n,e){for(u=c,f=n;f&&!("immediateRender"in u);)u=f.vars.defaults||{},f=Pi(f.vars.inherit)&&f.parent;c.immediateRender=Pi(u.immediateRender),e<2?c.runBackwards=1:c.startAt=t[a-1]}return new Cn(t[0],c,t[a+1])},uo=function(e,t){return e||e===0?t(e):t},Bu=function(e,t,n){return n<e?e:n>t?t:n},ii=function(e,t){return!Hn(e)||!(t=f1.exec(e))?"":t[1]},E1=function(e,t,n){return uo(n,function(r){return Bu(e,t,r)})},Qp=[].slice,vy=function(e,t){return e&&Xr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xr(e[0]))&&!e.nodeType&&e!==kr},T1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Hn(r)&&!t||vy(r,1)?(a=n).push.apply(a,mr(r)):n.push(r)})||n},mr=function(e,t,n){return ln&&!t&&ln.selector?ln.selector(e):Hn(e)&&!n&&(qp||!ul())?Qp.call((t||Dm).querySelectorAll(e),0):si(e)?T1(e,n):vy(e)?Qp.call(e,0):e?[e]:[]},Jp=function(e){return e=mr(e)[0]||bu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mr(t,n.querySelectorAll?n:n===e?bu("Invalid scope")||Dm.createElement("div"):e)}},xy=function(e){return e.sort(function(){return .5-Math.random()})},yy=function(e){if(_n(e))return e;var t=Xr(e)?e:{each:e},n=Vo(t.ease),r=t.from||0,a=parseFloat(t.base)||0,c={},u=r>0&&r<1,f=isNaN(r)||u,d=t.axis,p=r,_=r;return Hn(r)?p=_={center:.5,edges:.5,end:1}[r]||0:!u&&f&&(p=r[0],_=r[1]),function(g,v,E){var M=(E||t).length,x=c[M],y,R,T,C,U,I,P,W,A;if(!x){if(A=t.grid==="auto"?0:(t.grid||[1,pr])[1],!A){for(P=-pr;P<(P=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(x=c[M]=[],y=f?Math.min(A,M)*p-.5:r%A,R=A===pr?0:f?M*_/A-.5:r/A|0,P=0,W=pr,I=0;I<M;I++)T=I%A-y,C=R-(I/A|0),x[I]=U=d?Math.abs(d==="y"?C:T):ny(T*T+C*C),U>P&&(P=U),U<W&&(W=U);r==="random"&&xy(x),x.max=P-W,x.min=W,x.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:d?d==="y"?M/A:A:Math.max(A,M/A))||0)*(r==="edges"?-1:1),x.b=M<0?a-M:a,x.u=ii(t.amount||t.each)||0,n=n&&M<0?F1(n):n}return M=(x[g]-x.min)/x.max||0,hn(x.b+(n?n(M):M)*x.v)+x.u}},em=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=hn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ps(n)?0:ii(n))}},Sy=function(e,t){var n=si(e),r,a;return!n&&Xr(e)&&(r=n=e.radius||pr,e.values?(e=mr(e.values),(a=!ps(e[0]))&&(r*=r)):e=em(e.increment)),uo(t,n?_n(e)?function(c){return a=e(c),Math.abs(a-c)<=r?a:c}:function(c){for(var u=parseFloat(a?c.x:c),f=parseFloat(a?c.y:0),d=pr,p=0,_=e.length,g,v;_--;)a?(g=e[_].x-u,v=e[_].y-f,g=g*g+v*v):g=Math.abs(e[_]-u),g<d&&(d=g,p=_);return p=!r||d<=r?e[p]:c,a||p===c||ps(c)?p:p+ii(c)}:em(e))},My=function(e,t,n,r){return uo(si(e)?!t:n===!0?!!(n=0):!r,function(){return si(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},w1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,c){return c(a)},r)}},A1=function(e,t){return function(n){return e(parseFloat(n))+(t||ii(n))}},R1=function(e,t,n){return Ty(e,t,0,1,n)},Ey=function(e,t,n){return uo(n,function(r){return e[~~t(r)]})},C1=function o(e,t,n){var r=t-e;return si(e)?Ey(e,o(0,e.length),t):uo(n,function(a){return(r+(a-e)%r)%r+e})},b1=function o(e,t,n){var r=t-e,a=r*2;return si(e)?Ey(e,o(0,e.length-1),t):uo(n,function(c){return c=(a+(c-e)%a)%a||0,e+(c>r?a-c:c)})},Lu=function(e){return e.replace(l1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(u1);return My(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Ty=function(e,t,n,r,a){var c=t-e,u=r-n;return uo(a,function(f){return n+((f-e)/c*u||0)})},P1=function o(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var c=Hn(e),u={},f,d,p,_,g;if(n===!0&&(r=1)&&(n=null),c)e={p:e},t={p:t};else if(si(e)&&!si(t)){for(p=[],_=e.length,g=_-2,d=1;d<_;d++)p.push(o(e[d-1],e[d]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else r||(e=ol(si(e)?[]:{},e));if(!p){for(f in t)km.call(u,e,f,"get",t[f]);a=function(E){return Vm(E,u)||(c?e.p:e)}}}return uo(n,a)},j0=function(e,t,n){var r=e.labels,a=pr,c,u,f;for(c in r)u=r[c]-t,u<0==!!n&&u&&a>(u=Math.abs(u))&&(f=c,a=u);return f},qi=function(e,t,n){var r=e.vars,a=r[t],c=ln,u=e._ctx,f,d,p;if(a)return f=r[t+"Params"],d=r.callbackScope||e,n&&Qs.length&&Wf(),u&&(ln=u),p=f?a.apply(d,f):a.call(d),ln=c,p},lu=function(e){return ro(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jn),e.progress()<1&&qi(e,"onInterrupt"),e},ja,wy=[],Ay=function(e){if(e)if(e=!e.name&&e.default||e,Lm()||e.headless){var t=e.name,n=_n(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Pu,render:Vm,add:km,kill:j1,modifier:Y1,rawVars:0},c={targetTest:0,get:0,getSetter:Hm,aliases:{},register:0};if(ul(),e!==r){if(Gi[t])return;er(r,er(Xf(e,a),c)),ol(r.prototype,ol(a,Xf(e,c))),Gi[r.prop=t]=r,e.targetTest&&(If.push(r),Im[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ly(t,r),e.register&&e.register(Ii,r,Di)}else wy.push(e)},Jt=255,uu={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},np=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},Ry=function(e,t,n){var r=e?ps(e)?[e>>16,e>>8&Jt,e&Jt]:0:uu.black,a,c,u,f,d,p,_,g,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uu[e])r=uu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),c=e.charAt(2),u=e.charAt(3),e="#"+a+a+c+c+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(V0),!t)f=+r[0]%360/360,d=+r[1]/100,p=+r[2]/100,c=p<=.5?p*(d+1):p+d-p*d,a=p*2-c,r.length>3&&(r[3]*=1),r[0]=np(f+1/3,a,c),r[1]=np(f,a,c),r[2]=np(f-1/3,a,c);else if(~e.indexOf("="))return r=e.match(ry),n&&r.length<4&&(r[3]=1),r}else r=e.match(V0)||uu.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/Jt,c=r[1]/Jt,u=r[2]/Jt,_=Math.max(a,c,u),g=Math.min(a,c,u),p=(_+g)/2,_===g?f=d=0:(v=_-g,d=p>.5?v/(2-_-g):v/(_+g),f=_===a?(c-u)/v+(c<u?6:0):_===c?(u-a)/v+2:(a-c)/v+4,f*=60),r[0]=~~(f+.5),r[1]=~~(d*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},Cy=function(e){var t=[],n=[],r=-1;return e.split(Js).forEach(function(a){var c=a.match(Ya)||[];t.push.apply(t,c),n.push(r+=c.length+1)}),t.c=n,t},q0=function(e,t,n){var r="",a=(e+r).match(Js),c=t?"hsla(":"rgba(",u=0,f,d,p,_;if(!a)return e;if(a=a.map(function(g){return(g=Ry(g,t,1))&&c+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=Cy(e),f=n.c,f.join(r)!==p.c.join(r)))for(d=e.replace(Js,"1").split(Ya),_=d.length-1;u<_;u++)r+=d[u]+(~f.indexOf(u)?a.shift()||c+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(Js),_=d.length-1;u<_;u++)r+=d[u]+a[u];return r+d[_]},Js=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),L1=/hsl[a]?\(/,by=function(e){var t=e.join(" "),n;if(Js.lastIndex=0,Js.test(t))return n=L1.test(t),e[1]=q0(e[1],n),e[0]=q0(e[0],n,Cy(e[1])),!0},Du,Yi=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,c=a,u=[],f,d,p,_,g,v,E=function M(x){var y=o()-r,R=x===!0,T,C,U,I;if((y>e||y<0)&&(n+=y-t),r+=y,U=r-n,T=U-c,(T>0||R)&&(I=++_.frame,g=U-_.time*1e3,_.time=U=U/1e3,c+=T+(T>=a?4:a-T),C=1),R||(f=d(M)),C)for(v=0;v<u.length;v++)u[v](U,g,I,x)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){oy&&(!qp&&Lm()&&(kr=qp=window,Dm=kr.document||{},Ji.gsap=Ii,(kr.gsapVersions||(kr.gsapVersions=[])).push(Ii.version),ay(Gf||kr.GreenSockGlobals||!kr.gsap&&kr||{}),wy.forEach(Ay)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&_.sleep(),d=p||function(x){return setTimeout(x,c-_.time*1e3+1|0)},Du=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Du=0,d=Pu},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){a=1e3/(x||240),c=_.time*1e3+a},add:function(x,y,R){var T=y?function(C,U,I,P){x(C,U,I,P),_.remove(T)}:x;return _.remove(x),u[R?"unshift":"push"](T),ul(),T},remove:function(x,y){~(y=u.indexOf(x))&&u.splice(y,1)&&v>=y&&v--},_listeners:u},_})(),ul=function(){return!Du&&Yi.wake()},Ut={},D1=/^[\d.\-M][\d.\-,\s]/,N1=/["']/g,I1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,c=n.length,u,f,d;a<c;a++)f=n[a],u=a!==c-1?f.lastIndexOf(","):f.length,d=f.substr(0,u),t[r]=isNaN(d)?d.replace(N1,"").trim():+d,r=f.substr(u+1).trim();return t},U1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},O1=function(e){var t=(e+"").split("("),n=Ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[I1(t[1])]:U1(e).split(",").map(hy)):Ut._CE&&D1.test(e)?Ut._CE("",e):n},F1=function(e){return function(t){return 1-e(1-t)}},Vo=function(e,t){return e&&(_n(e)?e:Ut[e]||O1(e))||t},ea=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},c;return Li(e,function(u){Ut[u]=Ji[u]=a,Ut[c=u.toLowerCase()]=n;for(var f in a)Ut[c+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Ut[u+"."+f]=a[f]}),a},Py=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ip=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),c=a/jp*(Math.asin(1/r)||0),u=function(p){return p===1?1:r*Math.pow(2,-10*p)*a1((p-c)*a)+1},f=e==="out"?u:e==="in"?function(d){return 1-u(1-d)}:Py(u);return a=jp/a,f.config=function(d,p){return o(e,d,p)},f},rp=function o(e,t){t===void 0&&(t=1.70158);var n=function(c){return c?--c*c*((t+1)*c+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Py(n);return r.config=function(a){return o(e,a)},r};Li("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ea(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ut.Linear.easeNone=Ut.none=Ut.Linear.easeIn;ea("Elastic",ip("in"),ip("out"),ip());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(u){return u<t?o*u*u:u<n?o*Math.pow(u-1.5/e,2)+.75:u<r?o*(u-=2.25/e)*u+.9375:o*Math.pow(u-2.625/e,2)+.984375};ea("Bounce",function(c){return 1-a(1-c)},a)})(7.5625,2.75);ea("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ea("Circ",function(o){return-(ny(1-o*o)-1)});ea("Sine",function(o){return o===1?1:-o1(o*r1)+1});ea("Back",rp("in"),rp("out"),rp());Ut.SteppedEase=Ut.steps=Ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,c=1-en;return function(u){return((r*Bu(0,c,u)|0)+a)*n}}};Cu.ease=Ut["quad.out"];Li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Um+=o+","+o+"Params,"});var Ly=function(e,t){this.id=s1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cy,this.set=t?t.getSetter:Hm},Nu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ll(this,+t.duration,1,1),this.data=t.data,ln&&(this._ctx=ln,ln.data.push(this)),Du||Yi.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ll(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ul(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ch(this,n),!a._dp||a.parent||my(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fy(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+X0(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+X0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?al(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Yf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(Bu(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),uh(this),_1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ul(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=hn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Hr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yf(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=d1);var r=jn;return jn=n,Fm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jn=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Y0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Y0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ur(this,n),Pi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Pi(r)),this._dur||(this._zTime=-en),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-en)},e.eventCallback=function(n,r,a){var c=this.vars;return arguments.length>1?(r?(c[n]=r,a&&(c[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete c[n],this):c[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(c){var u=_n(n)?n:dy,f=function(){var p=r.then;r.then=null,a&&a(),_n(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=p),c(u),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){lu(this)},o})();er(Nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var bi=(function(o){ty(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Pi(n.sortChildren),dn&&Hr(n.parent||dn,as(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&gy(as(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,c){return gu(0,arguments,this),this},t.from=function(r,a,c){return gu(1,arguments,this),this},t.fromTo=function(r,a,c,u){return gu(2,arguments,this),this},t.set=function(r,a,c){return a.duration=0,a.parent=this,mu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Cn(r,a,ur(this,c),1),this},t.call=function(r,a,c){return Hr(this,Cn.delayedCall(0,r,a),c)},t.staggerTo=function(r,a,c,u,f,d,p){return c.duration=a,c.stagger=c.stagger||u,c.onComplete=d,c.onCompleteParams=p,c.parent=this,new Cn(r,c,ur(this,f)),this},t.staggerFrom=function(r,a,c,u,f,d,p){return c.runBackwards=1,mu(c).immediateRender=Pi(c.immediateRender),this.staggerTo(r,a,c,u,f,d,p)},t.staggerFromTo=function(r,a,c,u,f,d,p,_){return u.startAt=c,mu(u).immediateRender=Pi(u.immediateRender),this.staggerTo(r,a,u,f,d,p,_)},t.render=function(r,a,c){var u=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=r<=0?0:hn(r),_=this._zTime<0!=r<0&&(this._initted||!d),g,v,E,M,x,y,R,T,C,U,I,P;if(this!==dn&&p>f&&r>=0&&(p=f),p!==this._tTime||c||_){if(u!==this._time&&d&&(p+=this._time-u,r+=this._time-u),g=p,C=this._start,T=this._ts,y=!T,_&&(d||(u=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,x=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,c);if(g=hn(p%x),p===f?(M=this._repeat,g=d):(U=hn(p/x),M=~~U,M&&M===U&&(g=d,M--),g>d&&(g=d)),U=al(this._tTime,x),!u&&this._tTime&&U!==M&&this._tTime-U*x-this._dur<=0&&(U=M),I&&M&1&&(g=d-g,P=1),M!==U&&!this._lock){var W=I&&U&1,A=W===(I&&M&1);if(M<U&&(W=!W),u=W?0:p%d?d:p,this._lock=1,this.render(u||(P?0:hn(M*x)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&qi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1,U=M),u&&u!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,A&&(this._lock=2,u=W?d:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=S1(this,hn(u),hn(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,u=0),!u&&p&&d&&!a&&!U&&(qi(this,"onStart"),this._tTime!==p))return this;if(g>=u&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&R!==v){if(v.parent!==this)return this.render(r,a,c);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,a,c),g!==this._time||!this._ts&&!y){R=0,E&&(p+=this._zTime=-en);break}}v=E}else{v=this._last;for(var b=r<0?r:g;v;){if(E=v._prev,(v._act||b<=v._end)&&v._ts&&R!==v){if(v.parent!==this)return this.render(r,a,c);if(v.render(v._ts>0?(b-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(b-v._start)*v._ts,a,c||jn&&Fm(v)),g!==this._time||!this._ts&&!y){R=0,E&&(p+=this._zTime=b?-en:en);break}}v=E}}if(R&&!a&&(this.pause(),R.render(g>=u?0:-en)._zTime=g>=u?1:-1,this._ts))return this._start=C,uh(this),this.render(r,a,c);this._onUpdate&&!a&&qi(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&u)&&(C===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(p===f&&this._ts>0||!p&&this._ts<0)&&ro(this,1),!a&&!(r<0&&!u)&&(p||u||!f)&&(qi(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var c=this;if(ps(a)||(a=ur(this,a,r)),!(r instanceof Nu)){if(si(r))return r.forEach(function(u){return c.add(u,a)}),this;if(Hn(r))return this.addLabel(r,a);if(_n(r))r=Cn.delayedCall(0,r);else return this}return this!==r?Hr(this,r,a):this},t.getChildren=function(r,a,c,u){r===void 0&&(r=!0),a===void 0&&(a=!0),c===void 0&&(c=!0),u===void 0&&(u=-pr);for(var f=[],d=this._first;d;)d._start>=u&&(d instanceof Cn?a&&f.push(d):(c&&f.push(d),r&&f.push.apply(f,d.getChildren(!0,a,c)))),d=d._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),c=a.length;c--;)if(a[c].vars.id===r)return a[c]},t.remove=function(r){return Hn(r)?this.removeLabel(r):_n(r)?this.killTweensOf(r):(r.parent===this&&lh(this,r),r===this._recent&&(this._recent=this._last),Ho(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=hn(Yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=ur(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,c){var u=Cn.delayedCall(0,a||Pu,c);return u.data="isPause",this._hasPause=1,Hr(this,u,ur(this,r))},t.removePause=function(r){var a=this._first;for(r=ur(this,r);a;)a._start===r&&a.data==="isPause"&&ro(a),a=a._next},t.killTweensOf=function(r,a,c){for(var u=this.getTweensOf(r,c),f=u.length;f--;)Xs!==u[f]&&u[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var c=[],u=mr(r),f=this._first,d=ps(a),p;f;)f instanceof Cn?p1(f._targets,u)&&(d?(!Xs||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&c.push(f):(p=f.getTweensOf(u,a)).length&&c.push.apply(c,p),f=f._next;return c},t.tweenTo=function(r,a){a=a||{};var c=this,u=ur(c,r),f=a,d=f.startAt,p=f.onStart,_=f.onStartParams,g=f.immediateRender,v,E=Cn.to(c,er({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:a.duration||Math.abs((u-(d&&"time"in d?d.time:c._time))/c.timeScale())||en,onStart:function(){if(c.pause(),!v){var x=a.duration||Math.abs((u-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==x&&ll(E,x,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(r,a,c){return this.tweenTo(a,er({startAt:{time:ur(this,r)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),j0(this,ur(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),j0(this,ur(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,a,c){c===void 0&&(c=0);var u=this._first,f=this.labels,d;for(r=hn(r);u;)u._start>=c&&(u._start+=r,u._end+=r),u=u._next;if(a)for(d in f)f[d]>=c&&(f[d]+=r);return Ho(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,c;a;)c=a._next,this.remove(a),a=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ho(this)},t.totalDuration=function(r){var a=0,c=this,u=c._last,f=pr,d,p,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(_=c.parent;u;)d=u._prev,u._dirty&&u.totalDuration(),p=u._start,p>f&&c._sort&&u._ts&&!c._lock?(c._lock=1,Hr(c,u,p-u._delay,1)._lock=0):f=p,p<0&&u._ts&&(a-=p,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=hn(p/c._ts),c._time-=p,c._tTime-=p),c.shiftChildren(-p,!1,-1/0),f=0),u._end>a&&u._ts&&(a=u._end),u=d;ll(c,c===dn&&c._time>a?c._time:a,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(r){if(dn._ts&&(fy(dn,Yf(r,dn)),uy=Yi.frame),Yi.frame>=G0){G0+=Ki.autoSleep||120;var a=dn._first;if((!a||!a._ts)&&Ki.autoSleep&&Yi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Yi.sleep()}}},e})(Nu);er(bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var k1=function(e,t,n,r,a,c,u){var f=new Di(this._pt,e,t,0,1,Fy,null,a),d=0,p=0,_,g,v,E,M,x,y,R;for(f.b=n,f.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=Lu(r)),c&&(R=[n,r],c(R,e,t),n=R[0],r=R[1]),g=n.match(ep)||[];_=ep.exec(r);)E=_[0],M=r.substring(d,_.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(x=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:x,c:E.charAt(1)==="="?Za(x,E)-x:parseFloat(E)-x,m:v&&v<4?Math.round:0},d=ep.lastIndex);return f.c=d<r.length?r.substring(d,r.length):"",f.fp=u,(sy.test(r)||y)&&(f.e=0),this._pt=f,f},km=function(e,t,n,r,a,c,u,f,d,p){_n(r)&&(r=r(a||0,e,c));var _=e[t],g=n!=="get"?n:_n(_)?d?e[t.indexOf("set")||!_n(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():_,v=_n(_)?d?G1:Uy:Bm,E;if(Hn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(E=Za(g,r)+(ii(g)||0),(E||E===0)&&(r=E))),!p||g!==r||tm)return!isNaN(g*r)&&r!==""?(E=new Di(this._pt,e,t,+g||0,r-(g||0),typeof _=="boolean"?X1:Oy,0,v),d&&(E.fp=d),u&&E.modifier(u,this,e),this._pt=E):(!_&&!(t in e)&&Nm(t,r),k1.call(this,e,t,g,r,v,f||Ki.stringFilter,d))},z1=function(e,t,n,r,a){if(_n(e)&&(e=_u(e,a,t,n,r)),!Xr(e)||e.style&&e.nodeType||si(e)||iy(e))return Hn(e)?_u(e,a,t,n,r):e;var c={},u;for(u in e)c[u]=_u(e[u],a,t,n,r);return c},Dy=function(e,t,n,r,a,c){var u,f,d,p;if(Gi[e]&&(u=new Gi[e]).init(a,u.rawVars?t[e]:z1(t[e],r,a,c,n),n,r,c)!==!1&&(n._pt=f=new Di(n._pt,a,e,0,1,u.render,u,0,u.priority),n!==ja))for(d=n._ptLookup[n._targets.indexOf(a)],p=u._props.length;p--;)d[u._props[p]]=f;return u},Xs,tm,zm=function o(e,t,n){var r=e.vars,a=r.ease,c=r.startAt,u=r.immediateRender,f=r.lazy,d=r.onUpdate,p=r.runBackwards,_=r.yoyoEase,g=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,x=e._targets,y=e.parent,R=y&&y.data==="nested"?y.vars.targets:x,T=e._overwrite==="auto"&&!bm,C=e.timeline,U=r.easeReverse||_,I,P,W,A,b,te,Y,he,z,j,J,Z,B;if(C&&(!g||!a)&&(a="none"),e._ease=Vo(a,Cu.ease),e._rEase=U&&(Vo(U)||e._ease),e._from=!C&&!!r.runBackwards,e._from&&(e.ratio=1),!C||g&&!r.stagger){if(he=x[0]?Bo(x[0]).harness:0,Z=he&&r[he.prop],I=Xf(r,Im),M&&(M._zTime<0&&M.progress(1),t<0&&p&&u&&!v?M.render(-1,!0):M.revert(p&&E?Nf:h1),M._lazy=0),c){if(ro(e._startAt=Cn.set(x,er({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&Pi(f),startAt:null,delay:0,onUpdate:d&&function(){return qi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn||!u&&!v)&&e._startAt.revert(Nf),u&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(u=!1),W=er({overwrite:!1,data:"isFromStart",lazy:u&&!M&&Pi(f),immediateRender:u,stagger:0,parent:y},I),Z&&(W[he.prop]=Z),ro(e._startAt=Cn.set(x,W)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn?e._startAt.revert(Nf):e._startAt.render(-1,!0)),e._zTime=t,!u)o(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&Pi(f)||f&&!E,P=0;P<x.length;P++){if(b=x[P],Y=b._gsap||Om(x)[P]._gsap,e._ptLookup[P]=j={},$p[Y.id]&&Qs.length&&Wf(),J=R===x?P:R.indexOf(b),he&&(z=new he).init(b,Z||I,e,J,R)!==!1&&(e._pt=A=new Di(e._pt,b,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(q){j[q]=A}),z.priority&&(te=1)),!he||Z)for(W in I)Gi[W]&&(z=Dy(W,I,e,J,b,R))?z.priority&&(te=1):j[W]=A=km.call(e,b,W,"get",I[W],J,R,0,r.stringFilter);e._op&&e._op[P]&&e.kill(b,e._op[P]),T&&e._pt&&(Xs=e,dn.killTweensOf(b,j,e.globalTime(t)),B=!e.parent,Xs=0),e._pt&&f&&($p[Y.id]=1)}te&&ky(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!B,g&&t<=0&&C.render(pr,!0,!0)},B1=function(e,t,n,r,a,c,u,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,v;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return tm=1,e.vars[t]="+=0",zm(e,u),tm=0,f?bu(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(v=d.length;v--;)_=d[v],p=_._pt||_,p.s=(r||r===0)&&!a?r:p.s+(r||0)+c*p.c,p.c=n-p.s,_.e&&(_.e=Sn(n)+ii(_.e)),_.b&&(_.b=p.s+ii(_.b))},H1=function(e,t){var n=e[0]?Bo(e[0]).harness:0,r=n&&n.aliases,a,c,u,f;if(!r)return t;a=ol({},t);for(c in r)if(c in a)for(f=r[c].split(","),u=f.length;u--;)a[f[u]]=a[c];return a},V1=function(e,t,n,r){var a=t.ease||r||"power1.inOut",c,u;if(si(t))u=n[e]||(n[e]=[]),t.forEach(function(f,d){return u.push({t:d/(t.length-1)*100,v:f,e:a})});else for(c in t)u=n[c]||(n[c]=[]),c==="ease"||u.push({t:parseFloat(e),v:t[c],e:a})},_u=function(e,t,n,r,a){return _n(e)?e.call(t,n,r,a):Hn(e)&&~e.indexOf("random(")?Lu(e):e},Ny=Um+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Iy={};Li(Ny+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Iy[o]=1});var Cn=(function(o){ty(e,o);function e(n,r,a,c){var u;typeof r=="number"&&(a.duration=r,r=a,a=null),u=o.call(this,c?r:mu(r))||this;var f=u.vars,d=f.duration,p=f.delay,_=f.immediateRender,g=f.stagger,v=f.overwrite,E=f.keyframes,M=f.defaults,x=f.scrollTrigger,y=r.parent||dn,R=(si(n)||iy(n)?ps(n[0]):"length"in r)?[n]:mr(n),T,C,U,I,P,W,A,b;if(u._targets=R.length?Om(R):bu("GSAP target "+n+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=v,E||g||qc(d)||qc(p)){r=u.vars;var te=r.easeReverse||r.yoyoEase;if(T=u.timeline=new bi({data:"nested",defaults:M||{},targets:y&&y.data==="nested"?y.vars.targets:R}),T.kill(),T.parent=T._dp=as(u),T._start=0,g||qc(d)||qc(p)){if(I=R.length,A=g&&yy(g),Xr(g))for(P in g)~Ny.indexOf(P)&&(b||(b={}),b[P]=g[P]);for(C=0;C<I;C++)U=Xf(r,Iy),U.stagger=0,te&&(U.easeReverse=te),b&&ol(U,b),W=R[C],U.duration=+_u(d,as(u),C,W,R),U.delay=(+_u(p,as(u),C,W,R)||0)-u._delay,!g&&I===1&&U.delay&&(u._delay=p=U.delay,u._start+=p,U.delay=0),T.to(W,U,A?A(C,W,R):0),T._ease=Ut.none;T.duration()?d=p=0:u.timeline=0}else if(E){mu(er(T.vars.defaults,{ease:"none"})),T._ease=Vo(E.ease||r.ease||"none");var Y=0,he,z,j;if(si(E))E.forEach(function(J){return T.to(R,J,">")}),T.duration();else{U={};for(P in E)P==="ease"||P==="easeEach"||V1(P,E[P],U,E.easeEach);for(P in U)for(he=U[P].sort(function(J,Z){return J.t-Z.t}),Y=0,C=0;C<he.length;C++)z=he[C],j={ease:z.e,duration:(z.t-(C?he[C-1].t:0))/100*d},j[P]=z.v,T.to(R,j,Y),Y+=j.duration;T.duration()<d&&T.to({},{duration:d-T.duration()})}}d||u.duration(d=T.duration())}else u.timeline=0;return v===!0&&!bm&&(Xs=as(u),dn.killTweensOf(R),Xs=0),Hr(y,as(u),a),r.reversed&&u.reverse(),r.paused&&u.paused(!0),(_||!d&&!E&&u._start===hn(y._time)&&Pi(_)&&v1(as(u))&&y.data!=="nested")&&(u._tTime=-en,u.render(Math.max(0,-p)||0)),x&&gy(as(u),x),u}var t=e.prototype;return t.render=function(r,a,c){var u=this._time,f=this._tDur,d=this._dur,p=r<0,_=r>f-en&&!p?f:r<en?0:r,g,v,E,M,x,y,R,T;if(!d)y1(this,r,a,c);else if(_!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=_,T=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,a,c);if(g=hn(_%M),_===f?(E=this._repeat,g=d):(x=hn(_/M),E=~~x,E&&E===x?(g=d,E--):g>d&&(g=d)),y=this._yoyo&&E&1,y&&(g=d-g),x=al(this._tTime,M),g===u&&!c&&this._initted&&E===x)return this._tTime=_,this;E!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&g!==M&&this._initted&&(this._lock=c=1,this.render(hn(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(_y(this,p?r:g,c,a,_))return this._tTime=0,this;if(u!==this._time&&!(c&&this.vars.repeatRefresh&&E!==x))return this;if(d!==this._dur)return this.render(r,a,c)}if(this._rEase){var C=g<u;if(C!==this._inv){var U=C?u:d-u;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=u,this._invRecip=U?(C?-1:1)/U:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(g/d);if(this._from&&(this.ratio=R=1-R),this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!u&&_&&!a&&!x&&(qi(this,"onStart"),this._tTime!==_))return this;for(v=this._pt;v;)v.r(R,v.d),v=v._next;T&&T.render(r<0?r:T._dur*T._ease(g/this._dur),a,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&Kp(this,r,a,c),qi(this,"onUpdate")),this._repeat&&E!==x&&this.vars.onRepeat&&!a&&this.parent&&qi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Kp(this,r,!0,!0),(r||!d)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&ro(this,1),!a&&!(p&&!u)&&(_||u||y)&&(qi(this,_===f?"onComplete":"onReverseComplete",!0),this._prom&&!(_<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,c,u,f){Du||Yi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||zm(this,d),p=this._ease(d/this._dur),B1(this,r,a,c,u,p,d,f)?this.resetTo(r,a,c,u,1):(ch(this,0),this.parent||py(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?lu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Xs&&Xs.vars.overwrite!==!0)._first||lu(this),this.parent&&c!==this.timeline.totalDuration()&&ll(this,this._dur*this.timeline._tDur/c,0,1),this}var u=this._targets,f=r?mr(r):u,d=this._ptLookup,p=this._pt,_,g,v,E,M,x,y;if((!a||a==="all")&&g1(u,f))return a==="all"&&(this._pt=0),lu(this);for(_=this._op=this._op||[],a!=="all"&&(Hn(a)&&(M={},Li(a,function(R){return M[R]=1}),a=M),a=H1(u,a)),y=u.length;y--;)if(~f.indexOf(u[y])){g=d[y],a==="all"?(_[y]=a,E=g,v={}):(v=_[y]=_[y]||{},E=a);for(M in E)x=g&&g[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&lh(this,x,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&lu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return gu(1,arguments)},e.delayedCall=function(r,a,c,u){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:u})},e.fromTo=function(r,a,c){return gu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,c){return dn.killTweensOf(r,a,c)},e})(Nu);er(Cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Li("staggerTo,staggerFrom,staggerFromTo",function(o){Cn[o]=function(){var e=new bi,t=Qp.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Bm=function(e,t,n){return e[t]=n},Uy=function(e,t,n){return e[t](n)},G1=function(e,t,n,r){return e[t](r.fp,n)},W1=function(e,t,n){return e.setAttribute(t,n)},Hm=function(e,t){return _n(e[t])?Uy:Pm(e[t])&&e.setAttribute?W1:Bm},Oy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},X1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fy=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Vm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Y1=function(e,t,n,r){for(var a=this._pt,c;a;)c=a._next,a.p===r&&a.modifier(e,t,n),a=c},j1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?lh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},q1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ky=function(e){for(var t=e._pt,n,r,a,c;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:c)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:c=t,t=n}e._pt=a},Di=(function(){function o(t,n,r,a,c,u,f,d,p){this.t=n,this.s=a,this.c=c,this.p=r,this.r=u||Oy,this.d=f||this,this.set=d||Bm,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=q1,this.m=n,this.mt=a,this.tween=r},o})();Li(Um+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Im[o]=1});Ji.TweenMax=Ji.TweenLite=Cn;Ji.TimelineLite=Ji.TimelineMax=bi;dn=new bi({sortChildren:!1,defaults:Cu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=by;var Go=[],Uf={},$1=[],$0=0,K1=0,sp=function(e){return(Uf[e]||$1).map(function(t){return t()})},nm=function(){var e=Date.now(),t=[];e-$0>2&&(sp("matchMediaInit"),Go.forEach(function(n){var r=n.queries,a=n.conditions,c,u,f,d;for(u in r)c=kr.matchMedia(r[u]).matches,c&&(f=1),c!==a[u]&&(a[u]=c,d=1);d&&(n.revert(),f&&t.push(n))}),sp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),$0=e,sp("matchMedia"))},zy=(function(){function o(t,n){this.selector=n&&Jp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=K1++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){_n(n)&&(a=r,r=n,n=_n);var c=this,u=function(){var d=ln,p=c.selector,_;return d&&d!==c&&d.data.push(c),a&&(c.selector=Jp(a)),ln=c,_=r.apply(c,arguments),_n(_)&&c._r.push(_),ln=d,c.selector=p,c.isReverted=!1,_};return c.last=u,n===_n?u(c,function(f){return c.add(null,f)}):n?c[n]=u:u},e.ignore=function(n){var r=ln;ln=null,n(this),ln=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof Cn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var u=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return u.splice(u.indexOf(p),1)}));for(u.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof bi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Cn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),r)for(var c=Go.length;c--;)Go[c].id===this.id&&Go.splice(c,1)},e.revert=function(n){this.kill(n||{})},o})(),Z1=(function(){function o(t){this.contexts=[],this.scope=t,ln&&ln.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){Xr(n)||(n={matches:n});var c=new zy(0,a||this.scope),u=c.conditions={},f,d,p;ln&&!c.selector&&(c.selector=ln.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=n;for(d in n)d==="all"?p=1:(f=kr.matchMedia(n[d]),f&&(Go.indexOf(c)<0&&Go.push(c),(u[d]=f.matches)&&(p=1),f.addListener?f.addListener(nm):f.addEventListener("change",nm)));return p&&r(c,function(_){return c.add(null,_)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ay(r)})},timeline:function(e){return new bi(e)},getTweensOf:function(e,t){return dn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Hn(e)&&(e=mr(e)[0]);var a=Bo(e||{}).get,c=n?dy:hy;return n==="native"&&(n=""),e&&(t?c((Gi[t]&&Gi[t].get||a)(e,t,n,r)):function(u,f,d){return c((Gi[u]&&Gi[u].get||a)(e,u,f,d))})},quickSetter:function(e,t,n){if(e=mr(e),e.length>1){var r=e.map(function(p){return Ii.quickSetter(p,t,n)}),a=r.length;return function(p){for(var _=a;_--;)r[_](p)}}e=e[0]||{};var c=Gi[t],u=Bo(e),f=u.harness&&(u.harness.aliases||{})[t]||t,d=c?function(p){var _=new c;ja._pt=0,_.init(e,n?p+n:p,ja,0,[e]),_.render(1,_),ja._pt&&Vm(1,ja)}:u.set(e,f);return c?d:function(p){return d(e,f,n?p+n:p,u,1)}},quickTo:function(e,t,n){var r,a=Ii.to(e,er((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),c=function(f,d,p){return a.resetTo(t,f,d,p)};return c.tween=a,c},isTweening:function(e){return dn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vo(e.ease,Cu.ease)),W0(Cu,e||{})},config:function(e){return W0(Ki,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,c=e.extendTimeline;(r||"").split(",").forEach(function(u){return u&&!Gi[u]&&!Ji[u]&&bu(t+" effect requires "+u+" plugin.")}),tp[t]=function(u,f,d){return n(mr(u),er(f||{},a),d)},c&&(bi.prototype[t]=function(u,f,d){return this.add(tp[t](u,Xr(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){Ut[e]=Vo(t)},parseEase:function(e,t){return arguments.length?Vo(e,t):Ut},getById:function(e){return dn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bi(e),r,a;for(n.smoothChildTiming=Pi(e.smoothChildTiming),dn.remove(n),n._dp=0,n._time=n._tTime=dn._time,r=dn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Cn&&r.vars.onComplete===r._targets[0]))&&Hr(n,r,r._start-r._delay),r=a;return Hr(dn,n,0),n},context:function(e,t){return e?new zy(e,t):ln},matchMedia:function(e){return new Z1(e)},matchMediaRefresh:function(){return Go.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||nm()},addEventListener:function(e,t){var n=Uf[e]||(Uf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:C1,wrapYoyo:b1,distribute:yy,random:My,snap:Sy,normalize:R1,getUnit:ii,clamp:E1,splitColor:Ry,toArray:mr,selector:Jp,mapRange:Ty,pipe:w1,unitize:A1,interpolate:P1,shuffle:xy},install:ay,effects:tp,ticker:Yi,updateRoot:bi.updateRoot,plugins:Gi,globalTimeline:dn,core:{PropTween:Di,globals:ly,Tween:Cn,Timeline:bi,Animation:Nu,getCache:Bo,_removeLinkedListItem:lh,reverting:function(){return jn},context:function(e){return e&&ln&&(ln.data.push(e),e._ctx=ln),ln},suppressOverwrites:function(e){return bm=e}}};Li("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return jf[o]=Cn[o]});Yi.add(bi.updateRoot);ja=jf.to({},{duration:0});var Q1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},J1=function(e,t){var n=e._targets,r,a,c;for(r in t)for(a=n.length;a--;)c=e._ptLookup[a][r],c&&(c=c.d)&&(c._pt&&(c=Q1(c,r)),c&&c.modifier&&c.modifier(t[r],e,n[a],r))},op=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,c){c._onInit=function(u){var f,d;if(Hn(a)&&(f={},Li(a,function(p){return f[p]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}J1(u,a)}}}},Ii=jf.registerPlugin({name:"attr",init:function(e,t,n,r,a){var c,u,f;this.tween=n;for(c in t)f=e.getAttribute(c)||"",u=this.add(e,"setAttribute",(f||0)+"",t[c],r,a,0,0,c),u.op=c,u.b=f,this._props.push(c)},render:function(e,t){for(var n=t._pt;n;)jn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},op("roundProps",em),op("modifiers"),op("snap",Sy))||jf;Cn.version=bi.version=Ii.version="3.15.0";oy=1;Lm()&&ul();Ut.Power0;Ut.Power1;Ut.Power2;Ut.Power3;Ut.Power4;Ut.Linear;Ut.Quad;Ut.Cubic;Ut.Quart;Ut.Quint;Ut.Strong;Ut.Elastic;Ut.Back;Ut.SteppedEase;Ut.Bounce;Ut.Sine;Ut.Expo;Ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var K0,Ys,Qa,Gm,ko,Z0,Wm,eT=function(){return typeof window<"u"},ms={},Po=180/Math.PI,Ja=Math.PI/180,Ta=Math.atan2,Q0=1e8,Xm=/([A-Z])/g,tT=/(left|right|width|margin|padding|x)/i,nT=/[\s,\(]\S/,Vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},im=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},By=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aT=function(e,t,n){return e.style[t]=n},lT=function(e,t,n){return e.style.setProperty(t,n)},uT=function(e,t,n){return e._gsap[t]=n},cT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fT=function(e,t,n,r,a){var c=e._gsap;c.scaleX=c.scaleY=n,c.renderTransform(a,c)},hT=function(e,t,n,r,a){var c=e._gsap;c[t]=n,c.renderTransform(a,c)},pn="transform",Ni=pn+"Origin",dT=function o(e,t){var n=this,r=this.target,a=r.style,c=r._gsap;if(e in ms&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return n.tfm[u]=us(r,u)}):this.tfm[e]=c.x?c[e]:us(r,e),e===Ni&&(this.tfm.zOrigin=c.zOrigin);else return Vr.transform.split(",").forEach(function(u){return o.call(n,u,t)});if(this.props.indexOf(pn)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ni,t,"")),e=pn}(a||t)&&this.props.push(e,t,a[e])},Vy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,c;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Xm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Wm(),(!a||!a.isStart)&&!n[pn]&&(Vy(n),r.zOrigin&&n[Ni]&&(n[Ni]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gy=function(e,t){var n={target:e,props:[],revert:pT,save:dT};return e._gsap||Ii.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Wy,rm=function(e,t){var n=Ys.createElementNS?Ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ys.createElement(e);return n&&n.style?n:Ys.createElement(e)},$i=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Xm,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,cl(t)||t,1)||""},J0="O,Moz,ms,Ms,Webkit".split(","),cl=function(e,t,n){var r=t||ko,a=r.style,c=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(J0[c]+e in a););return c<0?null:(c===3?"ms":c>=0?J0[c]:"")+e},sm=function(){eT()&&window.document&&(K0=window,Ys=K0.document,Qa=Ys.documentElement,ko=rm("div")||{style:{}},rm("div"),pn=cl(pn),Ni=pn+"Origin",ko.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wy=!!cl("perspective"),Wm=Ii.core.reverting,Gm=1)},ev=function(e){var t=e.ownerSVGElement,n=rm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),Qa.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),Qa.removeChild(n),a},tv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xy=function(e){var t,n;try{t=e.getBBox()}catch{t=ev(e),n=1}return t&&(t.width||t.height)||n||(t=ev(e)),t&&!t.width&&!t.x&&!t.y?{x:+tv(e,["x","cx","x1"])||0,y:+tv(e,["y","cy","y1"])||0,width:0,height:0}:t},Yy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xy(e))},so=function(e,t){if(t){var n=e.style,r;t in ms&&t!==Ni&&(t=pn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Xm,"-$1").toLowerCase())):n.removeAttribute(t)}},js=function(e,t,n,r,a,c){var u=new Di(e._pt,t,n,0,1,c?Hy:By);return e._pt=u,u.b=r,u.e=a,e._props.push(n),u},nv={deg:1,rad:1,turn:1},mT={grid:1,flex:1},oo=function o(e,t,n,r){var a=parseFloat(n)||0,c=(n+"").trim().substr((a+"").length)||"px",u=ko.style,f=tT.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(f?"Width":"Height"),_=100,g=r==="px",v=r==="%",E,M,x,y;if(r===c||!a||nv[r]||nv[c])return a;if(c!=="px"&&!g&&(a=o(e,t,n,"px")),y=e.getCTM&&Yy(e),(v||c==="%")&&(ms[t]||~t.indexOf("adius")))return E=y?e.getBBox()[f?"width":"height"]:e[p],Sn(v?a/E*_:a/100*E);if(u[f?"width":"height"]=_+(g?c:r),M=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Ys||!M.appendChild)&&(M=Ys.body),x=M._gsap,x&&v&&x.width&&f&&x.time===Yi.time&&!x.uncache)return Sn(a/x.width*_);if(v&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=_+r,E=e[p],R?e.style[t]=R:so(e,t)}else(v||c==="%")&&!mT[$i(M,"display")]&&(u.position=$i(e,"position")),M===e&&(u.position="static"),M.appendChild(ko),E=ko[p],M.removeChild(ko),u.position="absolute";return f&&v&&(x=Bo(M),x.time=Yi.time,x.width=M[p]),Sn(g?E*a/_:E&&a?_/E*a:0)},us=function(e,t,n,r){var a;return Gm||sm(),t in Vr&&t!=="transform"&&(t=Vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ms[t]&&t!=="transform"?(a=Uu(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:$f($i(e,Ni))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=qf[t]&&qf[t](e,t,n)||$i(e,t)||cy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?oo(e,t,a,n)+n:a},gT=function(e,t,n,r){if(!n||n==="none"){var a=cl(t,e,1),c=a&&$i(e,a,1);c&&c!==n?(t=a,n=c):t==="borderColor"&&(n=$i(e,"borderTopColor"))}var u=new Di(this._pt,e.style,t,0,1,Fy),f=0,d=0,p,_,g,v,E,M,x,y,R,T,C,U;if(u.b=n,u.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=$i(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=e.style[t],e.style[t]=r,r=$i(e,t)||r,M?e.style[t]=M:so(e,t)),p=[n,r],by(p),n=p[0],r=p[1],g=n.match(Ya)||[],U=r.match(Ya)||[],U.length){for(;_=Ya.exec(r);)x=_[0],R=r.substring(f,_.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),x!==(M=g[d++]||"")&&(v=parseFloat(M)||0,C=M.substr((v+"").length),x.charAt(1)==="="&&(x=Za(v,x)+C),y=parseFloat(x),T=x.substr((y+"").length),f=Ya.lastIndex-T.length,T||(T=T||Ki.units[t]||C,f===r.length&&(r+=T,u.e+=T)),C!==T&&(v=oo(e,t,M,T)||0),u._pt={_next:u._pt,p:R||d===1?R:",",s:v,c:y-v,m:E&&E<4||t==="zIndex"?Math.round:0});u.c=f<r.length?r.substring(f,r.length):""}else u.r=t==="display"&&r==="none"?Hy:By;return sy.test(r)&&(u.e=0),this._pt=u,u},iv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_T=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=iv[n]||n,t[1]=iv[r]||r,t.join(" ")},vT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,c=n._gsap,u,f,d;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)u=a[d],ms[u]&&(f=1,u=u==="transformOrigin"?Ni:pn),so(n,u);f&&(so(n,pn),c&&(c.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Uu(n,1),c.uncache=1,Vy(r)))}},qf={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var c=e._pt=new Di(e._pt,t,n,0,0,vT);return c.u=r,c.pr=-10,c.tween=a,e._props.push(n),1}}},Iu=[1,0,0,1,0,0],jy={},qy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rv=function(e){var t=$i(e,pn);return qy(t)?Iu:t.substr(7).match(ry).map(Sn)},Ym=function(e,t){var n=e._gsap||Bo(e),r=e.style,a=rv(e),c,u,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Iu:a):(a===Iu&&!e.offsetParent&&e!==Qa&&!n.svg&&(f=r.display,r.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,u=e.nextElementSibling,Qa.appendChild(e)),a=rv(e),f?r.display=f:so(e,"display"),d&&(u?c.insertBefore(e,u):c?c.appendChild(e):Qa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},om=function(e,t,n,r,a,c){var u=e._gsap,f=a||Ym(e,!0),d=u.xOrigin||0,p=u.yOrigin||0,_=u.xOffset||0,g=u.yOffset||0,v=f[0],E=f[1],M=f[2],x=f[3],y=f[4],R=f[5],T=t.split(" "),C=parseFloat(T[0])||0,U=parseFloat(T[1])||0,I,P,W,A;n?f!==Iu&&(P=v*x-E*M)&&(W=C*(x/P)+U*(-M/P)+(M*R-x*y)/P,A=C*(-E/P)+U*(v/P)-(v*R-E*y)/P,C=W,U=A):(I=Xy(e),C=I.x+(~T[0].indexOf("%")?C/100*I.width:C),U=I.y+(~(T[1]||T[0]).indexOf("%")?U/100*I.height:U)),r||r!==!1&&u.smooth?(y=C-d,R=U-p,u.xOffset=_+(y*v+R*M)-y,u.yOffset=g+(y*E+R*x)-R):u.xOffset=u.yOffset=0,u.xOrigin=C,u.yOrigin=U,u.smooth=!!r,u.origin=t,u.originIsAbsolute=!!n,e.style[Ni]="0px 0px",c&&(js(c,u,"xOrigin",d,C),js(c,u,"yOrigin",p,U),js(c,u,"xOffset",_,u.xOffset),js(c,u,"yOffset",g,u.yOffset)),e.setAttribute("data-svg-origin",C+" "+U)},Uu=function(e,t){var n=e._gsap||new Ly(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,c="px",u="deg",f=getComputedStyle(e),d=$i(e,Ni)||"0",p,_,g,v,E,M,x,y,R,T,C,U,I,P,W,A,b,te,Y,he,z,j,J,Z,B,q,D,F,G,$,ee,ce;return p=_=g=M=x=y=R=T=C=0,v=E=1,n.svg=!!(e.getCTM&&Yy(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[pn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[pn]!=="none"?f[pn]:"")),r.scale=r.rotate=r.translate="none"),P=Ym(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),d=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),om(e,Z||d,!!Z||n.originIsAbsolute,n.smooth!==!1,P)),U=n.xOrigin||0,I=n.yOrigin||0,P!==Iu&&(te=P[0],Y=P[1],he=P[2],z=P[3],p=j=P[4],_=J=P[5],P.length===6?(v=Math.sqrt(te*te+Y*Y),E=Math.sqrt(z*z+he*he),M=te||Y?Ta(Y,te)*Po:0,R=he||z?Ta(he,z)*Po+M:0,R&&(E*=Math.abs(Math.cos(R*Ja))),n.svg&&(p-=U-(U*te+I*he),_-=I-(U*Y+I*z))):(ce=P[6],$=P[7],D=P[8],F=P[9],G=P[10],ee=P[11],p=P[12],_=P[13],g=P[14],W=Ta(ce,G),x=W*Po,W&&(A=Math.cos(-W),b=Math.sin(-W),Z=j*A+D*b,B=J*A+F*b,q=ce*A+G*b,D=j*-b+D*A,F=J*-b+F*A,G=ce*-b+G*A,ee=$*-b+ee*A,j=Z,J=B,ce=q),W=Ta(-he,G),y=W*Po,W&&(A=Math.cos(-W),b=Math.sin(-W),Z=te*A-D*b,B=Y*A-F*b,q=he*A-G*b,ee=z*b+ee*A,te=Z,Y=B,he=q),W=Ta(Y,te),M=W*Po,W&&(A=Math.cos(W),b=Math.sin(W),Z=te*A+Y*b,B=j*A+J*b,Y=Y*A-te*b,J=J*A-j*b,te=Z,j=B),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,y=180-y),v=Sn(Math.sqrt(te*te+Y*Y+he*he)),E=Sn(Math.sqrt(J*J+ce*ce)),W=Ta(j,J),R=Math.abs(W)>2e-4?W*Po:0,C=ee?1/(ee<0?-ee:ee):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qy($i(e,pn)),Z&&e.setAttribute("transform",Z))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(v*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+c,n.y=_-((n.yPercent=_&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+c,n.z=g+c,n.scaleX=Sn(v),n.scaleY=Sn(E),n.rotation=Sn(M)+u,n.rotationX=Sn(x)+u,n.rotationY=Sn(y)+u,n.skewX=R+u,n.skewY=T+u,n.transformPerspective=C+c,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Ni]=$f(d)),n.xOffset=n.yOffset=0,n.force3D=Ki.force3D,n.renderTransform=n.svg?yT:Wy?$y:xT,n.uncache=0,n},$f=function(e){return(e=e.split(" "))[0]+" "+e[1]},ap=function(e,t,n){var r=ii(t);return Sn(parseFloat(t)+parseFloat(oo(e,"x",n+"px",r)))+r},xT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$y(e,t)},To="0deg",Jl="0px",wo=") ",$y=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,c=n.x,u=n.y,f=n.z,d=n.rotation,p=n.rotationY,_=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,x=n.transformPerspective,y=n.force3D,R=n.target,T=n.zOrigin,C="",U=y==="auto"&&e&&e!==1||y===!0;if(T&&(_!==To||p!==To)){var I=parseFloat(p)*Ja,P=Math.sin(I),W=Math.cos(I),A;I=parseFloat(_)*Ja,A=Math.cos(I),c=ap(R,c,P*A*-T),u=ap(R,u,-Math.sin(I)*-T),f=ap(R,f,W*A*-T+T)}x!==Jl&&(C+="perspective("+x+wo),(r||a)&&(C+="translate("+r+"%, "+a+"%) "),(U||c!==Jl||u!==Jl||f!==Jl)&&(C+=f!==Jl||U?"translate3d("+c+", "+u+", "+f+") ":"translate("+c+", "+u+wo),d!==To&&(C+="rotate("+d+wo),p!==To&&(C+="rotateY("+p+wo),_!==To&&(C+="rotateX("+_+wo),(g!==To||v!==To)&&(C+="skew("+g+", "+v+wo),(E!==1||M!==1)&&(C+="scale("+E+", "+M+wo),R.style[pn]=C||"translate(0, 0)"},yT=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,c=n.x,u=n.y,f=n.rotation,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,x=n.xOffset,y=n.yOffset,R=n.forceCSS,T=parseFloat(c),C=parseFloat(u),U,I,P,W,A;f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=Ja,d*=Ja,U=Math.cos(f)*_,I=Math.sin(f)*_,P=Math.sin(f-d)*-g,W=Math.cos(f-d)*g,d&&(p*=Ja,A=Math.tan(d-p),A=Math.sqrt(1+A*A),P*=A,W*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),U*=A,I*=A)),U=Sn(U),I=Sn(I),P=Sn(P),W=Sn(W)):(U=_,W=g,I=P=0),(T&&!~(c+"").indexOf("px")||C&&!~(u+"").indexOf("px"))&&(T=oo(v,"x",c,"px"),C=oo(v,"y",u,"px")),(E||M||x||y)&&(T=Sn(T+E-(E*U+M*P)+x),C=Sn(C+M-(E*I+M*W)+y)),(r||a)&&(A=v.getBBox(),T=Sn(T+r/100*A.width),C=Sn(C+a/100*A.height)),A="matrix("+U+","+I+","+P+","+W+","+T+","+C+")",v.setAttribute("transform",A),R&&(v.style[pn]=A)},ST=function(e,t,n,r,a){var c=360,u=Hn(a),f=parseFloat(a)*(u&&~a.indexOf("rad")?Po:1),d=f-r,p=r+d+"deg",_,g;return u&&(_=a.split("_")[1],_==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),_==="cw"&&d<0?d=(d+c*Q0)%c-~~(d/c)*c:_==="ccw"&&d>0&&(d=(d-c*Q0)%c-~~(d/c)*c)),e._pt=g=new Di(e._pt,t,n,r,d,iT),g.e=p,g.u="deg",e._props.push(n),g},sv=function(e,t){for(var n in t)e[n]=t[n];return e},MT=function(e,t,n){var r=sv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",c=n.style,u,f,d,p,_,g,v,E;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),c[pn]=t,u=Uu(n,1),so(n,pn),n.setAttribute("transform",d)):(d=getComputedStyle(n)[pn],c[pn]=t,u=Uu(n,1),c[pn]=d);for(f in ms)d=r[f],p=u[f],d!==p&&a.indexOf(f)<0&&(v=ii(d),E=ii(p),_=v!==E?oo(n,f,d,E):parseFloat(d),g=parseFloat(p),e._pt=new Di(e._pt,u,f,_,g-_,im),e._pt.u=E||0,e._props.push(f));sv(u,r)};Li("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",c=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(u){return e<2?o+u:"border"+u+o});qf[e>1?"border"+o:o]=function(u,f,d,p,_){var g,v;if(arguments.length<4)return g=c.map(function(E){return us(u,E,d)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},c.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),u.init(f,v,_)}});var Ky={name:"css",register:sm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var c=this._props,u=e.style,f=n.vars.startAt,d,p,_,g,v,E,M,x,y,R,T,C,U,I,P,W,A;Gm||sm(),this.styles=this.styles||Gy(e),W=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(Gi[M]&&Dy(M,t,n,r,e,a)))){if(v=typeof p,E=qf[M],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=Lu(p)),E)E(this,e,M,p,n)&&(P=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",Js.lastIndex=0,Js.test(d)||(x=ii(d),y=ii(p),y?x!==y&&(d=oo(e,M,d,y)+y):x&&(p+=x)),this.add(u,"setProperty",d,p,r,a,0,0,M),c.push(M),W.push(M,0,u[M]);else if(v!=="undefined"){if(f&&M in f?(d=typeof f[M]=="function"?f[M].call(n,r,e,a):f[M],Hn(d)&&~d.indexOf("random(")&&(d=Lu(d)),ii(d+"")||d==="auto"||(d+=Ki.units[M]||ii(us(e,M))||""),(d+"").charAt(1)==="="&&(d=us(e,M))):d=us(e,M),g=parseFloat(d),R=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),_=parseFloat(p),M in Vr&&(M==="autoAlpha"&&(g===1&&us(e,"visibility")==="hidden"&&_&&(g=0),W.push("visibility",0,u.visibility),js(this,u,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=Vr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),T=M in ms,T){if(this.styles.save(M),A=p,v==="string"&&p.substring(0,6)==="var(--"){if(p=$i(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=p,p=$i(e,"perspective"),b?e.style.perspective=b:so(e,"perspective")}_=parseFloat(p)}if(C||(U=e._gsap,U.renderTransform&&!t.parseTransform||Uu(e,t.parseTransform),I=t.smoothOrigin!==!1&&U.smooth,C=this._pt=new Di(this._pt,u,pn,0,1,U.renderTransform,U,0,-1),C.dep=1),M==="scale")this._pt=new Di(this._pt,U,"scaleY",U.scaleY,(R?Za(U.scaleY,R+_):_)-U.scaleY||0,im),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){W.push(Ni,0,u[Ni]),p=_T(p),U.svg?om(e,p,0,I,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==U.zOrigin&&js(this,U,"zOrigin",U.zOrigin,y),js(this,u,M,$f(d),$f(p)));continue}else if(M==="svgOrigin"){om(e,p,1,I,0,this);continue}else if(M in jy){ST(this,U,M,g,R?Za(g,R+p):p);continue}else if(M==="smoothOrigin"){js(this,U,"smooth",U.smooth,p);continue}else if(M==="force3D"){U[M]=p;continue}else if(M==="transform"){MT(this,p,e);continue}}else M in u||(M=cl(M)||M);if(T||(_||_===0)&&(g||g===0)&&!nT.test(p)&&M in u)x=(d+"").substr((g+"").length),_||(_=0),y=ii(p)||(M in Ki.units?Ki.units[M]:x),x!==y&&(g=oo(e,M,d,y)),this._pt=new Di(this._pt,T?U:u,M,g,(R?Za(g,R+_):_)-g,!T&&(y==="px"||M==="zIndex")&&t.autoRound!==!1?oT:im),this._pt.u=y||0,T&&A!==p?(this._pt.b=d,this._pt.e=A,this._pt.r=sT):x!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=rT);else if(M in u)gT.call(this,e,M,d,R?R+p:p);else if(M in e)this.add(e,M,d||e[M],R?R+p:p,r,a);else if(M!=="parseTransform"){Nm(M,p);continue}T||(M in u?W.push(M,0,u[M]):typeof e[M]=="function"?W.push(M,2,e[M]()):W.push(M,1,d||e[M])),c.push(M)}}P&&ky(this)},render:function(e,t){if(t.tween._time||!Wm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:us,aliases:Vr,getSetter:function(e,t,n){var r=Vr[t];return r&&r.indexOf(",")<0&&(t=r),t in ms&&t!==Ni&&(e._gsap.x||us(e,"x"))?n&&Z0===n?t==="scale"?cT:uT:(Z0=n||{})&&(t==="scale"?fT:hT):e.style&&!Pm(e.style[t])?aT:~t.indexOf("-")?lT:Hm(e,t)},core:{_removeProperty:so,_getMatrix:Ym}};Ii.utils.checkPrefix=cl;Ii.core.getStyleSaver=Gy;(function(o,e,t,n){var r=Li(o+","+e+","+t,function(a){ms[a]=1});Li(e,function(a){Ki.units[a]="deg",jy[a]=1}),Vr[r[13]]=o+","+e,Li(n,function(a){var c=a.split(":");Vr[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ki.units[o]="px"});Ii.registerPlugin(Ky);var Vt=Ii.registerPlugin(Ky)||Ii;Vt.core.Tween;function ET(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function TT(o,e,t){return e&&ET(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn,Of,ji,qs,$s,el,Zy,Lo,tl,Qy,fs,Ar,Jy,eS=function(){return Yn||typeof window<"u"&&(Yn=window.gsap)&&Yn.registerPlugin&&Yn},tS=1,qa=[],Dt=[],Wr=[],vu=Date.now,am=function(e,t){return t},wT=function(){var e=tl.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Dt),r.push.apply(r,Wr),Dt=n,Wr=r,am=function(c,u){return t[c](u)}},eo=function(e,t){return~Wr.indexOf(e)&&Wr[Wr.indexOf(e)+1][t]},xu=function(e){return!!~Qy.indexOf(e)},fi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},ci=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},$c="scrollLeft",Kc="scrollTop",lm=function(){return fs&&fs.isPressed||Dt.cache++},Kf=function(e,t){var n=function r(a){if(a||a===0){tS&&(ji.history.scrollRestoration="manual");var c=fs&&fs.isPressed;a=r.v=Math.round(a)||(fs&&fs.iOS?1:0),e(a),r.cacheID=Dt.cache,c&&am("ss",a)}else(t||Dt.cache!==r.cacheID||am("ref"))&&(r.cacheID=Dt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},_i={s:$c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kf(function(o){return arguments.length?ji.scrollTo(o,Dn.sc()):ji.pageXOffset||qs[$c]||$s[$c]||el[$c]||0})},Dn={s:Kc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_i,sc:Kf(function(o){return arguments.length?ji.scrollTo(_i.sc(),o):ji.pageYOffset||qs[Kc]||$s[Kc]||el[Kc]||0})},Ri=function(e,t){return(t&&t._ctx&&t._ctx.selector||Yn.utils.toArray)(e)[0]||(typeof e=="string"&&Yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},AT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ao=function(e,t){var n=t.s,r=t.sc;xu(e)&&(e=qs.scrollingElement||$s);var a=Dt.indexOf(e),c=r===Dn.sc?1:2;!~a&&(a=Dt.push(e)-1),Dt[a+c]||fi(e,"scroll",lm);var u=Dt[a+c],f=u||(Dt[a+c]=Kf(eo(e,n),!0)||(xu(e)?r:Kf(function(d){return arguments.length?e[n]=d:e[n]})));return f.target=e,u||(f.smooth=Yn.getProperty(e,"scrollBehavior")==="smooth"),f},um=function(e,t,n){var r=e,a=e,c=vu(),u=c,f=t||50,d=Math.max(500,f*3),p=function(E,M){var x=vu();M||x-c>f?(a=r,r=E,u=c,c=x):n?r+=E:r=a+(E-a)/(x-u)*(c-u)},_=function(){a=r=n?0:r,u=c=0},g=function(E){var M=u,x=a,y=vu();return(E||E===0)&&E!==r&&p(E),c===u||y-u>d?0:(r+(n?x:-x))/((n?y:c)-M)*1e3};return{update:p,reset:_,getVelocity:g}},eu=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ov=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},nS=function(){tl=Yn.core.globals().ScrollTrigger,tl&&tl.core&&wT()},iS=function(e){return Yn=e||eS(),!Of&&Yn&&typeof document<"u"&&document.body&&(ji=window,qs=document,$s=qs.documentElement,el=qs.body,Qy=[ji,qs,$s,el],Yn.utils.clamp,Jy=Yn.core.context||function(){},Lo="onpointerenter"in el?"pointer":"mouse",Zy=Mn.isTouch=ji.matchMedia&&ji.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ji||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ar=Mn.eventTypes=("ontouchstart"in $s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tS=0},500),Of=1),tl||nS(),Of};_i.op=Dn;Dt.cache=0;var Mn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Of||iS(Yn)||console.warn("Please gsap.registerPlugin(Observer)"),tl||nS();var r=n.tolerance,a=n.dragMinimum,c=n.type,u=n.target,f=n.lineHeight,d=n.debounce,p=n.preventDefault,_=n.onStop,g=n.onStopDelay,v=n.ignore,E=n.wheelSpeed,M=n.event,x=n.onDragStart,y=n.onDragEnd,R=n.onDrag,T=n.onPress,C=n.onRelease,U=n.onRight,I=n.onLeft,P=n.onUp,W=n.onDown,A=n.onChangeX,b=n.onChangeY,te=n.onChange,Y=n.onToggleX,he=n.onToggleY,z=n.onHover,j=n.onHoverEnd,J=n.onMove,Z=n.ignoreCheck,B=n.isNormalizer,q=n.onGestureStart,D=n.onGestureEnd,F=n.onWheel,G=n.onEnable,$=n.onDisable,ee=n.onClick,ce=n.scrollSpeed,de=n.capture,me=n.allowClicks,Me=n.lockAxis,Pe=n.onLockAxis;this.target=u=Ri(u)||$s,this.vars=n,v&&(v=Yn.utils.toArray(v)),r=r||1e-9,a=a||0,E=E||1,ce=ce||1,c=c||"wheel,touch,pointer",d=d!==!1,f||(f=parseFloat(ji.getComputedStyle(el).lineHeight)||22);var ze,st,ie,ut,Ue,Je,Fe,se=this,ct=0,O=0,L=n.passive||!p&&n.passive!==!1,Q=ao(u,_i),_e=ao(u,Dn),ge=Q(),ye=_e(),Oe=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Ar[0]==="pointerdown",De=xu(u),Ce=u.ownerDocument||qs,je=[0,0,0],ft=[0,0,0],pe=0,Tt=function(){return pe=vu()},et=function(Ve,$e){return(se.event=Ve)&&v&&AT(Ve.target,v)||$e&&Oe&&Ve.pointerType!=="touch"||Z&&Z(Ve,$e)},mt=function(){se._vx.reset(),se._vy.reset(),st.pause(),_&&_(se)},qe=function(){var Ve=se.deltaX=ov(je),$e=se.deltaY=ov(ft),Ee=Math.abs(Ve)>=r,tt=Math.abs($e)>=r;te&&(Ee||tt)&&te(se,Ve,$e,je,ft),Ee&&(U&&se.deltaX>0&&U(se),I&&se.deltaX<0&&I(se),A&&A(se),Y&&se.deltaX<0!=ct<0&&Y(se),ct=se.deltaX,je[0]=je[1]=je[2]=0),tt&&(W&&se.deltaY>0&&W(se),P&&se.deltaY<0&&P(se),b&&b(se),he&&se.deltaY<0!=O<0&&he(se),O=se.deltaY,ft[0]=ft[1]=ft[2]=0),(ut||ie)&&(J&&J(se),ie&&(x&&ie===1&&x(se),R&&R(se),ie=0),ut=!1),Je&&!(Je=!1)&&Pe&&Pe(se),Ue&&(F(se),Ue=!1),ze=0},Be=function(Ve,$e,Ee){je[Ee]+=Ve,ft[Ee]+=$e,se._vx.update(Ve),se._vy.update($e),d?ze||(ze=requestAnimationFrame(qe)):qe()},gt=function(Ve,$e){Me&&!Fe&&(se.axis=Fe=Math.abs(Ve)>Math.abs($e)?"x":"y",Je=!0),Fe!=="y"&&(je[2]+=Ve,se._vx.update(Ve,!0)),Fe!=="x"&&(ft[2]+=$e,se._vy.update($e,!0)),d?ze||(ze=requestAnimationFrame(qe)):qe()},Et=function(Ve){if(!et(Ve,1)){Ve=eu(Ve,p);var $e=Ve.clientX,Ee=Ve.clientY,tt=$e-se.x,at=Ee-se.y,_t=se.isDragging;se.x=$e,se.y=Ee,(_t||(tt||at)&&(Math.abs(se.startX-$e)>=a||Math.abs(se.startY-Ee)>=a))&&(ie||(ie=_t?2:1),_t||(se.isDragging=!0),gt(tt,at))}},Ot=se.onPress=function(We){et(We,1)||We&&We.button||(se.axis=Fe=null,st.pause(),se.isPressed=!0,We=eu(We),ct=O=0,se.startX=se.x=We.clientX,se.startY=se.y=We.clientY,se._vx.reset(),se._vy.reset(),fi(B?u:Ce,Ar[1],Et,L,!0),se.deltaX=se.deltaY=0,T&&T(se))},Ne=se.onRelease=function(We){if(!et(We,1)){ci(B?u:Ce,Ar[1],Et,!0);var Ve=!isNaN(se.y-se.startY),$e=se.isDragging,Ee=$e&&(Math.abs(se.x-se.startX)>3||Math.abs(se.y-se.startY)>3),tt=eu(We);!Ee&&Ve&&(se._vx.reset(),se._vy.reset(),p&&me&&Yn.delayedCall(.08,function(){if(vu()-pe>300&&!We.defaultPrevented){if(We.target.click)We.target.click();else if(Ce.createEvent){var at=Ce.createEvent("MouseEvents");at.initMouseEvent("click",!0,!0,ji,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),We.target.dispatchEvent(at)}}})),se.isDragging=se.isGesturing=se.isPressed=!1,_&&$e&&!B&&st.restart(!0),ie&&qe(),y&&$e&&y(se),C&&C(se,Ee)}},we=function(Ve){return Ve.touches&&Ve.touches.length>1&&(se.isGesturing=!0)&&q(Ve,se.isDragging)},H=function(){return(se.isGesturing=!1)||D(se)},Te=function(Ve){if(!et(Ve)){var $e=Q(),Ee=_e();Be(($e-ge)*ce,(Ee-ye)*ce,1),ge=$e,ye=Ee,_&&st.restart(!0)}},Re=function(Ve){if(!et(Ve)){Ve=eu(Ve,p),F&&(Ue=!0);var $e=(Ve.deltaMode===1?f:Ve.deltaMode===2?ji.innerHeight:1)*E;Be(Ve.deltaX*$e,Ve.deltaY*$e,0),_&&!B&&st.restart(!0)}},ot=function(Ve){if(!et(Ve)){var $e=Ve.clientX,Ee=Ve.clientY,tt=$e-se.x,at=Ee-se.y;se.x=$e,se.y=Ee,ut=!0,_&&st.restart(!0),(tt||at)&&gt(tt,at)}},rt=function(Ve){se.event=Ve,z(se)},At=function(Ve){se.event=Ve,j(se)},It=function(Ve){return et(Ve)||eu(Ve,p)&&ee(se)};st=se._dc=Yn.delayedCall(g||.25,mt).pause(),se.deltaX=se.deltaY=0,se._vx=um(0,50,!0),se._vy=um(0,50,!0),se.scrollX=Q,se.scrollY=_e,se.isDragging=se.isGesturing=se.isPressed=!1,Jy(this),se.enable=function(We){return se.isEnabled||(fi(De?Ce:u,"scroll",lm),c.indexOf("scroll")>=0&&fi(De?Ce:u,"scroll",Te,L,de),c.indexOf("wheel")>=0&&fi(u,"wheel",Re,L,de),(c.indexOf("touch")>=0&&Zy||c.indexOf("pointer")>=0)&&(fi(u,Ar[0],Ot,L,de),fi(Ce,Ar[2],Ne),fi(Ce,Ar[3],Ne),me&&fi(u,"click",Tt,!0,!0),ee&&fi(u,"click",It),q&&fi(Ce,"gesturestart",we),D&&fi(Ce,"gestureend",H),z&&fi(u,Lo+"enter",rt),j&&fi(u,Lo+"leave",At),J&&fi(u,Lo+"move",ot)),se.isEnabled=!0,se.isDragging=se.isGesturing=se.isPressed=ut=ie=!1,se._vx.reset(),se._vy.reset(),ge=Q(),ye=_e(),We&&We.type&&Ot(We),G&&G(se)),se},se.disable=function(){se.isEnabled&&(qa.filter(function(We){return We!==se&&xu(We.target)}).length||ci(De?Ce:u,"scroll",lm),se.isPressed&&(se._vx.reset(),se._vy.reset(),ci(B?u:Ce,Ar[1],Et,!0)),ci(De?Ce:u,"scroll",Te,de),ci(u,"wheel",Re,de),ci(u,Ar[0],Ot,de),ci(Ce,Ar[2],Ne),ci(Ce,Ar[3],Ne),ci(u,"click",Tt,!0),ci(u,"click",It),ci(Ce,"gesturestart",we),ci(Ce,"gestureend",H),ci(u,Lo+"enter",rt),ci(u,Lo+"leave",At),ci(u,Lo+"move",ot),se.isEnabled=se.isPressed=se.isDragging=!1,$&&$(se))},se.kill=se.revert=function(){se.disable();var We=qa.indexOf(se);We>=0&&qa.splice(We,1),fs===se&&(fs=0)},qa.push(se),B&&xu(u)&&(fs=se),se.enable(M)},TT(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Mn.version="3.15.0";Mn.create=function(o){return new Mn(o)};Mn.register=iS;Mn.getAll=function(){return qa.slice()};Mn.getById=function(o){return qa.filter(function(e){return e.vars.id===o})[0]};eS()&&Yn.registerPlugin(Mn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,Wa,Pt,jt,Wi,Wt,jm,Zf,Ou,yu,cu,Zc,ti,fh,cm,pi,av,lv,Xa,rS,lp,sS,di,fm,oS,aS,Ws,hm,qm,nl,$m,Su,dm,up,Qc=1,ni=Date.now,cp=ni(),gr=0,fu=0,uv=function(e,t,n){var r=Vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},cv=function(e,t){return t&&(!Vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RT=function o(){return fu&&requestAnimationFrame(o)},fv=function(){return fh=1},hv=function(){return fh=0},zr=function(e){return e},hu=function(e){return Math.round(e*1e5)/1e5||0},lS=function(){return typeof window<"u"},uS=function(){return Ye||lS()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},Ko=function(e){return!!~jm.indexOf(e)},cS=function(e){return(e==="Height"?$m:Pt["inner"+e])||Wi["client"+e]||Wt["client"+e]},fS=function(e){return eo(e,"getBoundingClientRect")||(Ko(e)?function(){return Hf.width=Pt.innerWidth,Hf.height=$m,Hf}:function(){return cs(e)})},CT=function(e,t,n){var r=n.d,a=n.d2,c=n.a;return(c=eo(e,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(t?cS(a):e["client"+a])||0}},bT=function(e,t){return!t||~Wr.indexOf(e)?fS(e):function(){return Hf}},Gr=function(e,t){var n=t.s,r=t.d2,a=t.d,c=t.a;return Math.max(0,(n="scroll"+r)&&(c=eo(e,n))?c()-fS(e)()[a]:Ko(e)?(Wi[n]||Wt[n])-cS(r):e[n]-e["offset"+r])},Jc=function(e,t){for(var n=0;n<Xa.length;n+=3)(!t||~t.indexOf(Xa[n+1]))&&e(Xa[n],Xa[n+1],Xa[n+2])},Vi=function(e){return typeof e=="string"},ri=function(e){return typeof e=="function"},du=function(e){return typeof e=="number"},Do=function(e){return typeof e=="object"},tu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},wa=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Aa=Math.abs,hS="left",dS="top",Km="right",Zm="bottom",Wo="width",Xo="height",Mu="Right",Eu="Left",Tu="Top",wu="Bottom",Rn="padding",cr="margin",fl="Width",Qm="Height",Ln="px",fr=function(e){return Pt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},PT=function(e){var t=fr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dv=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cs=function(e,t){var n=t&&fr(e)[cm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Qf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},pS=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},LT=function(e){return function(t){return Ye.utils.snap(pS(e),t)}},Jm=function(e){var t=Ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,c){c===void 0&&(c=.001);var u;if(!a)return t(r);if(a>0){for(r-=c,u=0;u<n.length;u++)if(n[u]>=r)return n[u];return n[u-1]}else for(u=n.length,r+=c;u--;)if(n[u]<=r)return n[u];return n[0]}:function(r,a,c){c===void 0&&(c=.001);var u=t(r);return!a||Math.abs(u-r)<c||u-r<0==a<0?u:t(a<0?r-e:r+e)}},DT=function(e){return function(t,n){return Jm(pS(e))(t,n.direction)}},ef=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Bn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},zn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},tf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},pv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nf={toggleActions:"play",anticipatePin:0},Jf={top:0,left:0,center:.5,bottom:1,right:1},Ff=function(e,t){if(Vi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Jf?Jf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rf=function(e,t,n,r,a,c,u,f){var d=a.startColor,p=a.endColor,_=a.fontSize,g=a.indent,v=a.fontWeight,E=jt.createElement("div"),M=Ko(n)||eo(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,y=M?Wt:n.tagName==="IFRAME"?n.contentDocument.body:n,R=e.indexOf("start")!==-1,T=R?d:p,C="border-color:"+T+";font-size:"+_+";color:"+T+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((x||f)&&M?"fixed;":"absolute;"),(x||f||!M)&&(C+=(r===Dn?Km:Zm)+":"+(c+parseFloat(g))+"px;"),u&&(C+="box-sizing:border-box;text-align:left;width:"+u.offsetWidth+"px;"),E._isStart=R,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=C,E.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(E,y.children[0]):y.appendChild(E),E._offset=E["offset"+r.op.d2],kf(E,0,r,R),E},kf=function(e,t,n,r){var a={display:"block"},c=n[r?"os2":"p2"],u=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+c+fl]=1,a["border"+u+fl]=0,a[n.p]=t+"px",Ye.set(e,a)},Ct=[],pm={},Fu,mv=function(){return ni()-gr>34&&(Fu||(Fu=requestAnimationFrame(ds)))},Ra=function(){(!di||!di.isPressed||di.startX>Wt.clientWidth)&&(Dt.cache++,di?Fu||(Fu=requestAnimationFrame(ds)):ds(),gr||Qo("scrollStart"),gr=ni())},fp=function(){aS=Pt.innerWidth,oS=Pt.innerHeight},pu=function(e){Dt.cache++,(e===!0||!ti&&!sS&&!jt.fullscreenElement&&!jt.webkitFullscreenElement&&(!fm||aS!==Pt.innerWidth||Math.abs(Pt.innerHeight-oS)>Pt.innerHeight*.25))&&Zf.restart(!0)},Zo={},NT=[],mS=function o(){return zn(St,"scrollEnd",o)||zo(!0)},Qo=function(e){return Zo[e]&&Zo[e].map(function(t){return t()})||NT},Hi=[],gS=function(e){for(var t=0;t<Hi.length;t+=5)(!e||Hi[t+4]&&Hi[t+4].query===e)&&(Hi[t].style.cssText=Hi[t+1],Hi[t].getBBox&&Hi[t].setAttribute("transform",Hi[t+2]||""),Hi[t+3].uncache=1)},_S=function(){return Dt.forEach(function(e){return ri(e)&&++e.cacheID&&(e.rec=e())})},eg=function(e,t){var n;for(pi=0;pi<Ct.length;pi++)n=Ct[pi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Su=!0,t&&gS(t),t||Qo("revert")},vS=function(e,t){Dt.cache++,(t||!mi)&&Dt.forEach(function(n){return ri(n)&&n.cacheID++&&(n.rec=0)}),Vi(e)&&(Pt.history.scrollRestoration=qm=e)},mi,Yo=0,gv,IT=function(){if(gv!==Yo){var e=gv=Yo;requestAnimationFrame(function(){return e===Yo&&zo(!0)})}},xS=function(){Wt.appendChild(nl),$m=!di&&nl.offsetHeight||Pt.innerHeight,Wt.removeChild(nl)},_v=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zo=function(e,t){if(Wi=jt.documentElement,Wt=jt.body,jm=[Pt,jt,Wi,Wt],gr&&!e&&!Su){Bn(St,"scrollEnd",mS);return}xS(),mi=St.isRefreshing=!0,Su||_S();var n=Qo("refreshInit");rS&&St.sort(),t||eg(),Dt.forEach(function(r){ri(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ct.slice(0).forEach(function(r){return r.refresh()}),Su=!1,Ct.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-c),r.refresh()}}),dm=1,_v(!0),Ct.forEach(function(r){var a=Gr(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>a,u=r._startClamp&&r.start>=a;(c||u)&&r.setPositions(u?a-1:r.start,c?Math.max(u?a:r.start+1,a):r.end,!0)}),_v(!1),dm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Dt.forEach(function(r){ri(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vS(qm,1),Zf.pause(),Yo++,mi=2,ds(2),Ct.forEach(function(r){return ri(r.vars.onRefresh)&&r.vars.onRefresh(r)}),mi=St.isRefreshing=!1,Qo("refresh")},mm=0,zf=1,Au,ds=function(e){if(e===2||!mi&&!Su){St.isUpdating=!0,Au&&Au.update(0);var t=Ct.length,n=ni(),r=n-cp>=50,a=t&&Ct[0].scroll();if(zf=mm>a?-1:1,mi||(mm=a),r&&(gr&&!fh&&n-gr>200&&(gr=0,Qo("scrollEnd")),cu=cp,cp=n),zf<0){for(pi=t;pi-- >0;)Ct[pi]&&Ct[pi].update(0,r);zf=1}else for(pi=0;pi<t;pi++)Ct[pi]&&Ct[pi].update(0,r);St.isUpdating=!1}Fu=0},gm=[hS,dS,Zm,Km,cr+wu,cr+Mu,cr+Tu,cr+Eu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bf=gm.concat([Wo,Xo,"boxSizing","max"+fl,"max"+Qm,"position",cr,Rn,Rn+Tu,Rn+Mu,Rn+wu,Rn+Eu]),UT=function(e,t,n){il(n);var r=e._gsap;if(r.spacerIsNative)il(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},hp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=gm.length,c=t.style,u=e.style,f;a--;)f=gm[a],c[f]=n[f];c.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(c.display="inline-block"),u[Zm]=u[Km]="auto",c.flexBasis=n.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Wo]=Qf(e,_i)+Ln,c[Xo]=Qf(e,Dn)+Ln,c[Rn]=u[cr]=u[dS]=u[hS]="0",il(r),u[Wo]=u["max"+fl]=n[Wo],u[Xo]=u["max"+Qm]=n[Xo],u[Rn]=n[Rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},OT=/([A-Z])/g,il=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,c;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;r<n;r+=2)c=e[r+1],a=e[r],c?t[a]=c:t[a]&&t.removeProperty(a.replace(OT,"-$1").toLowerCase())}},sf=function(e){for(var t=Bf.length,n=e.style,r=[],a=0;a<t;a++)r.push(Bf[a],n[Bf[a]]);return r.t=e,r},FT=function(e,t,n){for(var r=[],a=e.length,c=n?8:0,u;c<a;c+=2)u=e[c],r.push(u,u in t?t[u]:e[c+1]);return r.t=e.t,r},Hf={left:0,top:0},vv=function(e,t,n,r,a,c,u,f,d,p,_,g,v,E){ri(e)&&(e=e(f)),Vi(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Ff("0"+e.substr(3),n):0));var M=v?v.time():0,x,y,R;if(v&&v.seek(0),isNaN(e)||(e=+e),du(e))v&&(e=Ye.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,e)),u&&kf(u,n,r,!0);else{ri(t)&&(t=t(f));var T=(e||"0").split(" "),C,U,I,P;R=Ri(t,f)||Wt,C=cs(R)||{},(!C||!C.left&&!C.top)&&fr(R).display==="none"&&(P=R.style.display,R.style.display="block",C=cs(R),P?R.style.display=P:R.style.removeProperty("display")),U=Ff(T[0],C[r.d]),I=Ff(T[1]||"0",n),e=C[r.p]-d[r.p]-p+U+a-I,u&&kf(u,I,r,n-I<20||u._isStart&&I>20),n-=n-I}if(E&&(f[E]=e||-.001,e<0&&(e=0)),c){var W=e+n,A=c._isStart;x="scroll"+r.d2,kf(c,W,r,A&&W>20||!A&&(_?Math.max(Wt[x],Wi[x]):c.parentNode[x])<=W+1),_&&(d=cs(u),_&&(c.style[r.op.p]=d[r.op.p]-r.op.m-c._offset+Ln))}return v&&R&&(x=cs(R),v.seek(g),y=cs(R),v._caScrollDist=x[r.p]-y[r.p],e=e/v._caScrollDist*g),v&&v.seek(M),v?e:Math.round(e)},kT=/(webkit|moz|length|cssText|inset)/i,xv=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,c,u;if(t===Wt){e._stOrig=a.cssText,u=fr(e);for(c in u)!+c&&!kT.test(c)&&u[c]&&typeof a[c]=="string"&&c!=="0"&&(a[c]=u[c]);a.top=n,a.left=r}else a.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},yS=function(e,t,n){var r=t,a=r;return function(c){var u=Math.round(e());return u!==r&&u!==a&&Math.abs(u-r)>3&&Math.abs(u-a)>3&&(c=u,n&&n()),a=r,r=Math.round(c),r}},of=function(e,t,n){var r={};r[t.p]="+="+n,Ye.set(e,r)},yv=function(e,t){var n=ao(e,t),r="_scroll"+t.p2,a=function c(u,f,d,p,_){var g=c.tween,v=f.onComplete,E={};d=d||n();var M=yS(n,d,function(){g.kill(),c.tween=0});return _=p&&_||0,p=p||u-d,g&&g.kill(),f[r]=u,f.inherit=!1,f.modifiers=E,E[r]=function(){return M(d+p*g.ratio+_*g.ratio*g.ratio)},f.onUpdate=function(){Dt.cache++,c.tween&&ds()},f.onComplete=function(){c.tween=0,v&&v.call(g)},g=c.tween=Ye.to(e,f),g};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Bn(e,"wheel",n.wheelHandler),St.isTouch&&Bn(e,"touchmove",n.wheelHandler),a},St=(function(){function o(t,n){Wa||o.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hm(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fu){this.update=this.refresh=this.kill=zr;return}n=dv(Vi(n)||du(n)||n.nodeType?{trigger:n}:n,nf);var a=n,c=a.onUpdate,u=a.toggleClass,f=a.id,d=a.onToggle,p=a.onRefresh,_=a.scrub,g=a.trigger,v=a.pin,E=a.pinSpacing,M=a.invalidateOnRefresh,x=a.anticipatePin,y=a.onScrubComplete,R=a.onSnapComplete,T=a.once,C=a.snap,U=a.pinReparent,I=a.pinSpacer,P=a.containerAnimation,W=a.fastScrollEnd,A=a.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_i:Dn,te=!_&&_!==0,Y=Ri(n.scroller||Pt),he=Ye.core.getCache(Y),z=Ko(Y),j=("pinType"in n?n.pinType:eo(Y,"pinType")||z&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=te&&n.toggleActions.split(" "),B="markers"in n?n.markers:nf.markers,q=z?0:parseFloat(fr(Y)["border"+b.p2+fl])||0,D=this,F=n.onRefreshInit&&function(){return n.onRefreshInit(D)},G=CT(Y,z,b),$=bT(Y,z),ee=0,ce=0,de=0,me=ao(Y,b),Me,Pe,ze,st,ie,ut,Ue,Je,Fe,se,ct,O,L,Q,_e,ge,ye,Oe,De,Ce,je,ft,pe,Tt,et,mt,qe,Be,gt,Et,Ot,Ne,we,H,Te,Re,ot,rt,At;if(D._startClamp=D._endClamp=!1,D._dir=b,x*=45,D.scroller=Y,D.scroll=P?P.time.bind(P):me,st=me(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(rS=1,n.refreshPriority===-9999&&(Au=D)),he.tweenScroll=he.tweenScroll||{top:yv(Y,Dn),left:yv(Y,_i)},D.tweenTo=Me=he.tweenScroll[b.p],D.scrubDuration=function(Ee){we=du(Ee)&&Ee,we?Ne?Ne.duration(Ee):Ne=Ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:we,paused:!0,onComplete:function(){return y&&y(D)}}):(Ne&&Ne.progress(1).kill(),Ne=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(_),Et=0,f||(f=r.vars.id)),C&&((!Do(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in Wt.style&&Ye.set(z?[Wt,Wi]:Y,{scrollBehavior:"auto"}),Dt.forEach(function(Ee){return ri(Ee)&&Ee.target===(z?jt.scrollingElement||Wi:Y)&&(Ee.smooth=!1)}),ze=ri(C.snapTo)?C.snapTo:C.snapTo==="labels"?LT(r):C.snapTo==="labelsDirectional"?DT(r):C.directional!==!1?function(Ee,tt){return Jm(C.snapTo)(Ee,ni()-ce<500?0:tt.direction)}:Ye.utils.snap(C.snapTo),H=C.duration||{min:.1,max:2},H=Do(H)?yu(H.min,H.max):yu(H,H),Te=Ye.delayedCall(C.delay||we/2||.1,function(){var Ee=me(),tt=ni()-ce<500,at=Me.tween;if((tt||Math.abs(D.getVelocity())<10)&&!at&&!fh&&ee!==Ee){var _t=(Ee-ut)/Q,qt=r&&!te?r.totalProgress():_t,Mt=tt?0:(qt-Ot)/(ni()-cu)*1e3||0,Gt=Ye.utils.clamp(-_t,1-_t,Aa(Mt/2)*Mt/.185),vn=_t+(C.inertia===!1?0:Gt),Qt,$t,Nt=C,qn=Nt.onStart,N=Nt.onInterrupt,K=Nt.onComplete;if(Qt=ze(vn,D),du(Qt)||(Qt=vn),$t=Math.max(0,Math.round(ut+Qt*Q)),Ee<=Ue&&Ee>=ut&&$t!==Ee){if(at&&!at._initted&&at.data<=Aa($t-Ee))return;C.inertia===!1&&(Gt=Qt-_t),Me($t,{duration:H(Aa(Math.max(Aa(vn-qt),Aa(Qt-qt))*.185/Mt/.05||0)),ease:C.ease||"power3",data:Aa($t-Ee),onInterrupt:function(){return Te.restart(!0)&&N&&wa(D,N)},onComplete:function(){D.update(),ee=me(),r&&!te&&(Ne?Ne.resetTo("totalProgress",Qt,r._tTime/r._tDur):r.progress(Qt)),Et=Ot=r&&!te?r.totalProgress():D.progress,R&&R(D),K&&wa(D,K)}},Ee,Gt*Q,$t-Ee-Gt*Q),qn&&wa(D,qn,Me.tween)}}else D.isActive&&ee!==Ee&&Te.restart(!0)}).pause()),f&&(pm[f]=D),g=D.trigger=Ri(g||v!==!0&&v),At=g&&g._gsap&&g._gsap.stRevert,At&&(At=At(D)),v=v===!0?g:Ri(v),Vi(u)&&(u={targets:g,className:u}),v&&(E===!1||E===cr||(E=!E&&v.parentNode&&v.parentNode.style&&fr(v.parentNode).display==="flex"?!1:Rn),D.pin=v,Pe=Ye.core.getCache(v),Pe.spacer?_e=Pe.pinState:(I&&(I=Ri(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Pe.spacerIsNative=!!I,I&&(Pe.spacerState=sf(I))),Pe.spacer=Oe=I||jt.createElement("div"),Oe.classList.add("pin-spacer"),f&&Oe.classList.add("pin-spacer-"+f),Pe.pinState=_e=sf(v)),n.force3D!==!1&&Ye.set(v,{force3D:!0}),D.spacer=Oe=Pe.spacer,gt=fr(v),Tt=gt[E+b.os2],Ce=Ye.getProperty(v),je=Ye.quickSetter(v,b.a,Ln),hp(v,Oe,gt),ye=sf(v)),B){O=Do(B)?dv(B,pv):pv,se=rf("scroller-start",f,Y,b,O,0),ct=rf("scroller-end",f,Y,b,O,0,se),De=se["offset"+b.op.d2];var It=Ri(eo(Y,"content")||Y);Je=this.markerStart=rf("start",f,It,b,O,De,0,P),Fe=this.markerEnd=rf("end",f,It,b,O,De,0,P),P&&(rt=Ye.quickSetter([Je,Fe],b.a,Ln)),!j&&!(Wr.length&&eo(Y,"fixedMarkers")===!0)&&(PT(z?Wt:Y),Ye.set([se,ct],{force3D:!0}),mt=Ye.quickSetter(se,b.a,Ln),Be=Ye.quickSetter(ct,b.a,Ln))}if(P){var We=P.vars.onUpdate,Ve=P.vars.onUpdateParams;P.eventCallback("onUpdate",function(){D.update(0,0,1),We&&We.apply(P,Ve||[])})}if(D.previous=function(){return Ct[Ct.indexOf(D)-1]},D.next=function(){return Ct[Ct.indexOf(D)+1]},D.revert=function(Ee,tt){if(!tt)return D.kill(!0);var at=Ee!==!1||!D.enabled,_t=ti;at!==D.isReverted&&(at&&(Re=Math.max(me(),D.scroll.rec||0),de=D.progress,ot=r&&r.progress()),Je&&[Je,Fe,se,ct].forEach(function(qt){return qt.style.display=at?"none":"block"}),at&&(ti=D,D.update(at)),v&&(!U||!D.isActive)&&(at?UT(v,Oe,_e):hp(v,Oe,fr(v),et)),at||D.update(at),ti=_t,D.isReverted=at)},D.refresh=function(Ee,tt,at,_t){if(!((ti||!D.enabled)&&!tt)){if(v&&Ee&&gr){Bn(o,"scrollEnd",mS);return}!mi&&F&&F(D),ti=D,Me.tween&&!at&&(Me.tween.kill(),Me.tween=0),Ne&&Ne.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(vt){return vt.vars.immediateRender&&vt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var qt=G(),Mt=$(),Gt=P?P.duration():Gr(Y,b),vn=Q<=.01||!Q,Qt=0,$t=_t||0,Nt=Do(at)?at.end:n.end,qn=n.endTrigger||g,N=Do(at)?at.start:n.start||(n.start===0||!g?0:v?"0 0":"0 100%"),K=D.pinnedContainer=n.pinnedContainer&&Ri(n.pinnedContainer,D),ue=g&&Math.max(0,Ct.indexOf(D))||0,le=ue,re,be,Xe,ht,Le,Qe,lt,xt,Xt,xn,Bt,Tn,Rt;for(B&&Do(at)&&(Tn=Ye.getProperty(se,b.p),Rt=Ye.getProperty(ct,b.p));le-- >0;)Qe=Ct[le],Qe.end||Qe.refresh(0,1)||(ti=D),lt=Qe.pin,lt&&(lt===g||lt===v||lt===K)&&!Qe.isReverted&&(xn||(xn=[]),xn.unshift(Qe),Qe.revert(!0,!0)),Qe!==Ct[le]&&(ue--,le--);for(ri(N)&&(N=N(D)),N=uv(N,"start",D),ut=vv(N,g,qt,b,me(),Je,se,D,Mt,q,j,Gt,P,D._startClamp&&"_startClamp")||(v?-.001:0),ri(Nt)&&(Nt=Nt(D)),Vi(Nt)&&!Nt.indexOf("+=")&&(~Nt.indexOf(" ")?Nt=(Vi(N)?N.split(" ")[0]:"")+Nt:(Qt=Ff(Nt.substr(2),qt),Nt=Vi(N)?N:(P?Ye.utils.mapRange(0,P.duration(),P.scrollTrigger.start,P.scrollTrigger.end,ut):ut)+Qt,qn=g)),Nt=uv(Nt,"end",D),Ue=Math.max(ut,vv(Nt||(qn?"100% 0":Gt),qn,qt,b,me()+Qt,Fe,ct,D,Mt,q,j,Gt,P,D._endClamp&&"_endClamp"))||-.001,Qt=0,le=ue;le--;)Qe=Ct[le]||{},lt=Qe.pin,lt&&Qe.start-Qe._pinPush<=ut&&!P&&Qe.end>0&&(re=Qe.end-(D._startClamp?Math.max(0,Qe.start):Qe.start),(lt===g&&Qe.start-Qe._pinPush<ut||lt===K)&&isNaN(N)&&(Qt+=re*(1-Qe.progress)),lt===v&&($t+=re));if(ut+=Qt,Ue+=Qt,D._startClamp&&(D._startClamp+=Qt),D._endClamp&&!mi&&(D._endClamp=Ue||-.001,Ue=Math.min(Ue,Gr(Y,b))),Q=Ue-ut||(ut-=.01)&&.001,vn&&(de=Ye.utils.clamp(0,1,Ye.utils.normalize(ut,Ue,Re))),D._pinPush=$t,Je&&Qt&&(re={},re[b.a]="+="+Qt,K&&(re[b.p]="-="+me()),Ye.set([Je,Fe],re)),v&&!(dm&&D.end>=Gr(Y,b)))re=fr(v),ht=b===Dn,Xe=me(),ft=parseFloat(Ce(b.a))+$t,!Gt&&Ue>1&&(Bt=(z?jt.scrollingElement||Wi:Y).style,Bt={style:Bt,value:Bt["overflow"+b.a.toUpperCase()]},z&&fr(Wt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Bt.style["overflow"+b.a.toUpperCase()]="scroll")),hp(v,Oe,re),ye=sf(v),be=cs(v,!0),xt=j&&ao(Y,ht?_i:Dn)(),E?(et=[E+b.os2,Q+$t+Ln],et.t=Oe,le=E===Rn?Qf(v,b)+Q+$t:0,le&&(et.push(b.d,le+Ln),Oe.style.flexBasis!=="auto"&&(Oe.style.flexBasis=le+Ln)),il(et),K&&Ct.forEach(function(vt){vt.pin===K&&vt.vars.pinSpacing!==!1&&(vt._subPinOffset=!0)}),j&&me(Re)):(le=Qf(v,b),le&&Oe.style.flexBasis!=="auto"&&(Oe.style.flexBasis=le+Ln)),j&&(Le={top:be.top+(ht?Xe-ut:xt)+Ln,left:be.left+(ht?xt:Xe-ut)+Ln,boxSizing:"border-box",position:"fixed"},Le[Wo]=Le["max"+fl]=Math.ceil(be.width)+Ln,Le[Xo]=Le["max"+Qm]=Math.ceil(be.height)+Ln,Le[cr]=Le[cr+Tu]=Le[cr+Mu]=Le[cr+wu]=Le[cr+Eu]="0",Le[Rn]=re[Rn],Le[Rn+Tu]=re[Rn+Tu],Le[Rn+Mu]=re[Rn+Mu],Le[Rn+wu]=re[Rn+wu],Le[Rn+Eu]=re[Rn+Eu],ge=FT(_e,Le,U),mi&&me(0)),r?(Xt=r._initted,lp(1),r.render(r.duration(),!0,!0),pe=Ce(b.a)-ft+Q+$t,qe=Math.abs(Q-pe)>1,j&&qe&&ge.splice(ge.length-2,2),r.render(0,!0,!0),Xt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),lp(0)):pe=Q,Bt&&(Bt.value?Bt.style["overflow"+b.a.toUpperCase()]=Bt.value:Bt.style.removeProperty("overflow-"+b.a));else if(g&&me()&&!P)for(be=g.parentNode;be&&be!==Wt;)be._pinOffset&&(ut-=be._pinOffset,Ue-=be._pinOffset),be=be.parentNode;xn&&xn.forEach(function(vt){return vt.revert(!1,!0)}),D.start=ut,D.end=Ue,st=ie=mi?Re:me(),!P&&!mi&&(st<Re&&me(Re),D.scroll.rec=0),D.revert(!1,!0),ce=ni(),Te&&(ee=-1,Te.restart(!0)),ti=0,r&&te&&(r._initted||ot)&&r.progress()!==ot&&r.progress(ot||0,!0).render(r.time(),!0,!0),(vn||de!==D.progress||P||M||r&&!r._initted)&&(r&&!te&&(r._initted||de||r.vars.immediateRender!==!1)&&r.totalProgress(P&&ut<-.001&&!de?Ye.utils.normalize(ut,Ue,0):de,!0),D.progress=vn||(st-ut)/Q===de?0:de),v&&E&&(Oe._pinOffset=Math.round(D.progress*pe)),Ne&&Ne.invalidate(),isNaN(Tn)||(Tn-=Ye.getProperty(se,b.p),Rt-=Ye.getProperty(ct,b.p),of(se,b,Tn),of(Je,b,Tn-(_t||0)),of(ct,b,Rt),of(Fe,b,Rt-(_t||0))),vn&&!mi&&D.update(),p&&!mi&&!L&&(L=!0,p(D),L=!1)}},D.getVelocity=function(){return(me()-ie)/(ni()-cu)*1e3||0},D.endAnimation=function(){tu(D.callbackAnimation),r&&(Ne?Ne.progress(1):r.paused()?te||tu(r,D.direction<0,1):tu(r,r.reversed()))},D.labelToScroll=function(Ee){return r&&r.labels&&(ut||D.refresh()||ut)+r.labels[Ee]/r.duration()*Q||0},D.getTrailing=function(Ee){var tt=Ct.indexOf(D),at=D.direction>0?Ct.slice(0,tt).reverse():Ct.slice(tt+1);return(Vi(Ee)?at.filter(function(_t){return _t.vars.preventOverlaps===Ee}):at).filter(function(_t){return D.direction>0?_t.end<=ut:_t.start>=Ue})},D.update=function(Ee,tt,at){if(!(P&&!at&&!Ee)){var _t=mi===!0?Re:D.scroll(),qt=Ee?0:(_t-ut)/Q,Mt=qt<0?0:qt>1?1:qt||0,Gt=D.progress,vn,Qt,$t,Nt,qn,N,K,ue;if(tt&&(ie=st,st=P?me():_t,C&&(Ot=Et,Et=r&&!te?r.totalProgress():Mt)),x&&v&&!ti&&!Qc&&gr&&(!Mt&&ut<_t+(_t-ie)/(ni()-cu)*x?Mt=1e-4:Mt===1&&Ue>_t+(_t-ie)/(ni()-cu)*x&&(Mt=.9999)),Mt!==Gt&&D.enabled){if(vn=D.isActive=!!Mt&&Mt<1,Qt=!!Gt&&Gt<1,N=vn!==Qt,qn=N||!!Mt!=!!Gt,D.direction=Mt>Gt?1:-1,D.progress=Mt,qn&&!ti&&($t=Mt&&!Gt?0:Mt===1?1:Gt===1?2:3,te&&(Nt=!N&&Z[$t+1]!=="none"&&Z[$t+1]||Z[$t],ue=r&&(Nt==="complete"||Nt==="reset"||Nt in r))),A&&(N||ue)&&(ue||_||!r)&&(ri(A)?A(D):D.getTrailing(A).forEach(function(Xe){return Xe.endAnimation()})),te||(Ne&&!ti&&!Qc?(Ne._dp._time-Ne._start!==Ne._time&&Ne.render(Ne._dp._time-Ne._start),Ne.resetTo?Ne.resetTo("totalProgress",Mt,r._tTime/r._tDur):(Ne.vars.totalProgress=Mt,Ne.invalidate().restart())):r&&r.totalProgress(Mt,!!(ti&&(ce||Ee)))),v){if(Ee&&E&&(Oe.style[E+b.os2]=Tt),!j)je(hu(ft+pe*Mt));else if(qn){if(K=!Ee&&Mt>Gt&&Ue+1>_t&&_t+1>=Gr(Y,b),U)if(!Ee&&(vn||K)){var le=cs(v,!0),re=_t-ut;xv(v,Wt,le.top+(b===Dn?re:0)+Ln,le.left+(b===Dn?0:re)+Ln)}else xv(v,Oe);il(vn||K?ge:ye),qe&&Mt<1&&vn||je(ft+(Mt===1&&!K?pe:0))}}C&&!Me.tween&&!ti&&!Qc&&Te.restart(!0),u&&(N||T&&Mt&&(Mt<1||!up))&&Ou(u.targets).forEach(function(Xe){return Xe.classList[vn||T?"add":"remove"](u.className)}),c&&!te&&!Ee&&c(D),qn&&!ti?(te&&(ue&&(Nt==="complete"?r.pause().totalProgress(1):Nt==="reset"?r.restart(!0).pause():Nt==="restart"?r.restart(!0):r[Nt]()),c&&c(D)),(N||!up)&&(d&&N&&wa(D,d),J[$t]&&wa(D,J[$t]),T&&(Mt===1?D.kill(!1,1):J[$t]=0),N||($t=Mt===1?1:3,J[$t]&&wa(D,J[$t]))),W&&!vn&&Math.abs(D.getVelocity())>(du(W)?W:2500)&&(tu(D.callbackAnimation),Ne?Ne.progress(1):tu(r,Nt==="reverse"?1:!Mt,1))):te&&c&&!ti&&c(D)}if(Be){var be=P?_t/P.duration()*(P._caScrollDist||0):_t;mt(be+(se._isFlipped?1:0)),Be(be)}rt&&rt(-_t/P.duration()*(P._caScrollDist||0))}},D.enable=function(Ee,tt){D.enabled||(D.enabled=!0,Bn(Y,"resize",pu),z||Bn(Y,"scroll",Ra),F&&Bn(o,"refreshInit",F),Ee!==!1&&(D.progress=de=0,st=ie=ee=me()),tt!==!1&&D.refresh())},D.getTween=function(Ee){return Ee&&Me?Me.tween:Ne},D.setPositions=function(Ee,tt,at,_t){if(P){var qt=P.scrollTrigger,Mt=P.duration(),Gt=qt.end-qt.start;Ee=qt.start+Gt*Ee/Mt,tt=qt.start+Gt*tt/Mt}D.refresh(!1,!1,{start:cv(Ee,at&&!!D._startClamp),end:cv(tt,at&&!!D._endClamp)},_t),D.update()},D.adjustPinSpacing=function(Ee){if(et&&Ee){var tt=et.indexOf(b.d)+1;et[tt]=parseFloat(et[tt])+Ee+Ln,et[1]=parseFloat(et[1])+Ee+Ln,il(et)}},D.disable=function(Ee,tt){if(Ee!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,tt||Ne&&Ne.pause(),Re=0,Pe&&(Pe.uncache=1),F&&zn(o,"refreshInit",F),Te&&(Te.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!z)){for(var at=Ct.length;at--;)if(Ct[at].scroller===Y&&Ct[at]!==D)return;zn(Y,"resize",pu),z||zn(Y,"scroll",Ra)}},D.kill=function(Ee,tt){D.disable(Ee,tt),Ne&&!tt&&Ne.kill(),f&&delete pm[f];var at=Ct.indexOf(D);at>=0&&Ct.splice(at,1),at===pi&&zf>0&&pi--,at=0,Ct.forEach(function(_t){return _t.scroller===D.scroller&&(at=1)}),at||mi||(D.scroll.rec=0),r&&(r.scrollTrigger=null,Ee&&r.revert({kill:!1}),tt||r.kill()),Je&&[Je,Fe,se,ct].forEach(function(_t){return _t.parentNode&&_t.parentNode.removeChild(_t)}),Au===D&&(Au=0),v&&(Pe&&(Pe.uncache=1),at=0,Ct.forEach(function(_t){return _t.pin===v&&at++}),at||(Pe.spacer=0)),n.onKill&&n.onKill(D)},Ct.push(D),D.enable(!1,!1),At&&At(D),r&&r.add&&!Q){var $e=D.update;D.update=function(){D.update=$e,Dt.cache++,ut||Ue||D.refresh()},Ye.delayedCall(.01,D.update),Q=.01,ut=Ue=0}else D.refresh();v&&IT()},o.register=function(n){return Wa||(Ye=n||uS(),lS()&&window.document&&o.enable(),Wa=fu),Wa},o.defaults=function(n){if(n)for(var r in n)nf[r]=n[r];return nf},o.disable=function(n,r){fu=0,Ct.forEach(function(c){return c[r?"kill":"disable"](n)}),zn(Pt,"wheel",Ra),zn(jt,"scroll",Ra),clearInterval(Zc),zn(jt,"touchcancel",zr),zn(Wt,"touchstart",zr),ef(zn,jt,"pointerdown,touchstart,mousedown",fv),ef(zn,jt,"pointerup,touchend,mouseup",hv),Zf.kill(),Jc(zn);for(var a=0;a<Dt.length;a+=3)tf(zn,Dt[a],Dt[a+1]),tf(zn,Dt[a],Dt[a+2])},o.enable=function(){if(Pt=window,jt=document,Wi=jt.documentElement,Wt=jt.body,Ye){if(Ou=Ye.utils.toArray,yu=Ye.utils.clamp,hm=Ye.core.context||zr,lp=Ye.core.suppressOverwrites||zr,qm=Pt.history.scrollRestoration||"auto",mm=Pt.pageYOffset||0,Ye.core.globals("ScrollTrigger",o),Wt){fu=1,nl=document.createElement("div"),nl.style.height="100vh",nl.style.position="absolute",xS(),RT(),Mn.register(Ye),o.isTouch=Mn.isTouch,Ws=Mn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fm=Mn.isTouch===1,Bn(Pt,"wheel",Ra),jm=[Pt,jt,Wi,Wt],Ye.matchMedia?(o.matchMedia=function(p){var _=Ye.matchMedia(),g;for(g in p)_.add(g,p[g]);return _},Ye.addEventListener("matchMediaInit",function(){_S(),eg()}),Ye.addEventListener("matchMediaRevert",function(){return gS()}),Ye.addEventListener("matchMedia",function(){zo(0,1),Qo("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return fp(),fp})):console.warn("Requires GSAP 3.11.0 or later"),fp(),Bn(jt,"scroll",Ra);var n=Wt.hasAttribute("style"),r=Wt.style,a=r.borderTopStyle,c=Ye.core.Animation.prototype,u,f;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",u=cs(Wt),Dn.m=Math.round(u.top+Dn.sc())||0,_i.m=Math.round(u.left+_i.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(Wt.setAttribute("style",""),Wt.removeAttribute("style")),Zc=setInterval(mv,250),Ye.delayedCall(.5,function(){return Qc=0}),Bn(jt,"touchcancel",zr),Bn(Wt,"touchstart",zr),ef(Bn,jt,"pointerdown,touchstart,mousedown",fv),ef(Bn,jt,"pointerup,touchend,mouseup",hv),cm=Ye.utils.checkPrefix("transform"),Bf.push(cm),Wa=ni(),Zf=Ye.delayedCall(.2,zo).pause(),Xa=[jt,"visibilitychange",function(){var p=Pt.innerWidth,_=Pt.innerHeight;jt.hidden?(av=p,lv=_):(av!==p||lv!==_)&&pu()},jt,"DOMContentLoaded",zo,Pt,"load",zo,Pt,"resize",pu],Jc(Bn),Ct.forEach(function(p){return p.enable(0,1)}),f=0;f<Dt.length;f+=3)tf(zn,Dt[f],Dt[f+1]),tf(zn,Dt[f],Dt[f+2])}else if(jt){var d=function p(){o.enable(),jt.removeEventListener("DOMContentLoaded",p)};jt.addEventListener("DOMContentLoaded",d)}}},o.config=function(n){"limitCallbacks"in n&&(up=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Zc)||(Zc=r)&&setInterval(mv,r),"ignoreMobileResize"in n&&(fm=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jc(zn)||Jc(Bn,n.autoRefreshEvents||"none"),sS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=Ri(n),c=Dt.indexOf(a),u=Ko(a);~c&&Dt.splice(c,u?6:2),r&&(u?Wr.unshift(Pt,r,Wt,r,Wi,r):Wr.unshift(a,r))},o.clearMatchMedia=function(n){Ct.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var c=(Vi(n)?Ri(n):n).getBoundingClientRect(),u=c[a?Wo:Xo]*r||0;return a?c.right-u>0&&c.left+u<Pt.innerWidth:c.bottom-u>0&&c.top+u<Pt.innerHeight},o.positionInViewport=function(n,r,a){Vi(n)&&(n=Ri(n));var c=n.getBoundingClientRect(),u=c[a?Wo:Xo],f=r==null?u/2:r in Jf?Jf[r]*u:~r.indexOf("%")?parseFloat(r)*u/100:parseFloat(r)||0;return a?(c.left+f)/Pt.innerWidth:(c.top+f)/Pt.innerHeight},o.killAll=function(n){if(Ct.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=Zo.killAll||[];Zo={},r.forEach(function(a){return a()})}},o})();St.version="3.15.0";St.saveStyles=function(o){return o?Ou(o).forEach(function(e){if(e&&e.style){var t=Hi.indexOf(e);t>=0&&Hi.splice(t,5),Hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),hm())}}):Hi};St.revert=function(o,e){return eg(!o,e)};St.create=function(o,e){return new St(o,e)};St.refresh=function(o){return o?pu(!0):(Wa||St.register())&&zo(!0)};St.update=function(o){return++Dt.cache&&ds(o===!0?2:0)};St.clearScrollMemory=vS;St.maxScroll=function(o,e){return Gr(o,e?_i:Dn)};St.getScrollFunc=function(o,e){return ao(Ri(o),e?_i:Dn)};St.getById=function(o){return pm[o]};St.getAll=function(){return Ct.filter(function(o){return o.vars.id!=="ScrollSmoother"})};St.isScrolling=function(){return!!gr};St.snapDirectional=Jm;St.addEventListener=function(o,e){var t=Zo[o]||(Zo[o]=[]);~t.indexOf(e)||t.push(e)};St.removeEventListener=function(o,e){var t=Zo[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};St.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,c=function(d,p){var _=[],g=[],v=Ye.delayedCall(r,function(){p(_,g),_=[],g=[]}).pause();return function(E){_.length||v.restart(!0),_.push(E.trigger),g.push(E),a<=_.length&&v.progress(1)}},u;for(u in e)n[u]=u.substr(0,2)==="on"&&ri(e[u])&&u!=="onRefreshInit"?c(u,e[u]):e[u];return ri(a)&&(a=a(),Bn(St,"refresh",function(){return a=e.batchMax()})),Ou(o).forEach(function(f){var d={};for(u in n)d[u]=n[u];d.trigger=f,t.push(St.create(d))}),t};var Sv=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},dp=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Mn.isTouch?" pinch-zoom":""):"none",e===Wi&&o(Wt,t)},af={auto:1,scroll:1},zT=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,c=a._gsap||Ye.core.getCache(a),u=ni(),f;if(!c._isScrollT||u-c._isScrollT>2e3){for(;a&&a!==Wt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(af[(f=fr(a)).overflowY]||af[f.overflowX]));)a=a.parentNode;c._isScroll=a&&a!==n&&!Ko(a)&&(af[(f=fr(a)).overflowY]||af[f.overflowX]),c._isScrollT=u}(c._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},SS=function(e,t,n,r){return Mn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&zT,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Bn(jt,Mn.eventTypes[0],Ev,!1,!0)},onDisable:function(){return zn(jt,Mn.eventTypes[0],Ev,!0)}})},BT=/(input|label|select|textarea)/i,Mv,Ev=function(e){var t=BT.test(e.target.tagName);(t||Mv)&&(e._gsapAllow=!0,Mv=t)},HT=function(e){Do(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,c=t.onRelease,u,f,d=Ri(e.target)||Wi,p=Ye.core.globals().ScrollSmoother,_=p&&p.get(),g=Ws&&(e.content&&Ri(e.content)||_&&e.content!==!1&&!_.smooth()&&_.content()),v=ao(d,Dn),E=ao(d,_i),M=1,x=(Mn.isTouch&&Pt.visualViewport?Pt.visualViewport.scale*Pt.visualViewport.width:Pt.outerWidth)/Pt.innerWidth,y=0,R=ri(r)?function(){return r(u)}:function(){return r||2.8},T,C,U=SS(d,e.type,!0,a),I=function(){return C=!1},P=zr,W=zr,A=function(){f=Gr(d,Dn),W=yu(Ws?1:0,f),n&&(P=yu(0,Gr(d,_i))),T=Yo},b=function(){g._gsap.y=hu(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},te=function(){if(C){requestAnimationFrame(I);var B=hu(u.deltaY/2),q=W(v.v-B);if(g&&q!==v.v+v.offset){v.offset=q-v.v;var D=hu((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",g._gsap.y=D+"px",v.cacheID=Dt.cache,ds()}return!0}v.offset&&b(),C=!0},Y,he,z,j,J=function(){A(),Y.isActive()&&Y.vars.scrollY>f&&(v()>f?Y.progress(1)&&v(f):Y.resetTo("scrollY",f))};return g&&Ye.set(g,{y:"+=0"}),e.ignoreCheck=function(Z){return Ws&&Z.type==="touchmove"&&te()||M>1.05&&Z.type!=="touchstart"||u.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){C=!1;var Z=M;M=hu((Pt.visualViewport&&Pt.visualViewport.scale||1)/x),Y.pause(),Z!==M&&dp(d,M>1.01?!0:n?!1:"x"),he=E(),z=v(),A(),T=Yo},e.onRelease=e.onGestureStart=function(Z,B){if(v.offset&&b(),!B)j.restart(!0);else{Dt.cache++;var q=R(),D,F;n&&(D=E(),F=D+q*.05*-Z.velocityX/.227,q*=Sv(E,D,F,Gr(d,_i)),Y.vars.scrollX=P(F)),D=v(),F=D+q*.05*-Z.velocityY/.227,q*=Sv(v,D,F,Gr(d,Dn)),Y.vars.scrollY=W(F),Y.invalidate().duration(q).play(.01),(Ws&&Y.vars.scrollY>=f||D>=f-1)&&Ye.to({},{onUpdate:J,duration:q})}c&&c(Z)},e.onWheel=function(){Y._ts&&Y.pause(),ni()-y>1e3&&(T=0,y=ni())},e.onChange=function(Z,B,q,D,F){if(Yo!==T&&A(),B&&n&&E(P(D[2]===B?he+(Z.startX-Z.x):E()+B-D[1])),q){v.offset&&b();var G=F[2]===q,$=G?z+Z.startY-Z.y:v()+q-F[1],ee=W($);G&&$!==ee&&(z+=ee-$),v(ee)}(q||B)&&ds()},e.onEnable=function(){dp(d,n?!1:"x"),St.addEventListener("refresh",J),Bn(Pt,"resize",J),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),U.enable()},e.onDisable=function(){dp(d,!0),zn(Pt,"resize",J),St.removeEventListener("refresh",J),U.kill()},e.lockAxis=e.lockAxis!==!1,u=new Mn(e),u.iOS=Ws,Ws&&!v()&&v(1),Ws&&Ye.ticker.add(zr),j=u._dc,Y=Ye.to(u,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yS(v,v(),function(){return Y.pause()})},onUpdate:ds,onComplete:j.vars.onComplete}),u};St.sort=function(o){if(ri(o))return Ct.sort(o);var e=Pt.pageYOffset||0;return St.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Pt.innerHeight}),Ct.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};St.observe=function(o){return new Mn(o)};St.normalizeScroll=function(o){if(typeof o>"u")return di;if(o===!0&&di)return di.enable();if(o===!1){di&&di.kill(),di=o;return}var e=o instanceof Mn?o:HT(o);return di&&di.target===e.target&&di.kill(),Ko(e.target)&&(di=e),e};St.core={_getVelocityProp:um,_inputObserver:SS,_scrollers:Dt,_proxies:Wr,bridge:{ss:function(){gr||Qo("scrollStart"),gr=ni()},ref:function(){return ti}}};uS()&&Ye.registerPlugin(St);Vt.registerPlugin(St);function VT(){Zt.useEffect(()=>{const o=new i1({duration:1.4,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0,wheelMultiplier:.8});return o.on("scroll",St.update),Vt.ticker.add(e=>{o.raf(e*1e3)}),Vt.ticker.lagSmoothing(0),()=>{o.destroy(),Vt.ticker.remove(o.raf)}},[])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tg="160",GT=0,Tv=1,WT=2,MS=1,XT=2,os=3,lo=0,oi=1,Cr=2,to=0,rl=1,eh=2,wv=3,Av=4,YT=5,Uo=100,jT=101,qT=102,Rv=103,Cv=104,$T=200,KT=201,ZT=202,QT=203,_m=204,vm=205,JT=206,ew=207,tw=208,nw=209,iw=210,rw=211,sw=212,ow=213,aw=214,lw=0,uw=1,cw=2,th=3,fw=4,hw=5,dw=6,pw=7,ES=0,mw=1,gw=2,no=0,_w=1,vw=2,xw=3,yw=4,Sw=5,Mw=6,TS=300,hl=301,dl=302,xm=303,ym=304,hh=306,Sm=1e3,br=1001,Mm=1002,gi=1003,bv=1004,pp=1005,hr=1006,Ew=1007,ku=1008,io=1009,Tw=1010,ww=1011,ng=1012,wS=1013,Ks=1014,Zs=1015,zu=1016,AS=1017,RS=1018,jo=1020,Aw=1021,Pr=1023,Rw=1024,Cw=1025,qo=1026,pl=1027,bw=1028,CS=1029,Pw=1030,bS=1031,PS=1033,mp=33776,gp=33777,_p=33778,vp=33779,Pv=35840,Lv=35841,Dv=35842,Nv=35843,LS=36196,Iv=37492,Uv=37496,Ov=37808,Fv=37809,kv=37810,zv=37811,Bv=37812,Hv=37813,Vv=37814,Gv=37815,Wv=37816,Xv=37817,Yv=37818,jv=37819,qv=37820,$v=37821,xp=36492,Kv=36494,Zv=36495,Lw=36283,Qv=36284,Jv=36285,ex=36286,DS=3e3,$o=3001,Dw=3200,Nw=3201,NS=0,Iw=1,dr="",Xn="srgb",gs="srgb-linear",ig="display-p3",dh="display-p3-linear",nh="linear",sn="srgb",ih="rec709",rh="p3",Ca=7680,tx=519,Uw=512,Ow=513,Fw=514,IS=515,kw=516,zw=517,Bw=518,Hw=519,nx=35044,ix="300 es",Em=1035,hs=2e3,sh=2001;class gl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=Math.PI/180,Tm=180/Math.PI;function Hu(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[o&255]+Jn[o>>8&255]+Jn[o>>16&255]+Jn[o>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function Ci(o,e,t){return Math.max(e,Math.min(t,o))}function Vw(o,e){return(o%e+e)%e}function Sp(o,e,t){return(1-t)*o+t*e}function rx(o){return(o&o-1)===0&&o!==0}function wm(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function nu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class zt{constructor(e=0,t=0){zt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(e,t,n,r,a,c,u,f,d){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,f,d)}set(e,t,n,r,a,c,u,f,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[3],f=n[6],d=n[1],p=n[4],_=n[7],g=n[2],v=n[5],E=n[8],M=r[0],x=r[3],y=r[6],R=r[1],T=r[4],C=r[7],U=r[2],I=r[5],P=r[8];return a[0]=c*M+u*R+f*U,a[3]=c*x+u*T+f*I,a[6]=c*y+u*C+f*P,a[1]=d*M+p*R+_*U,a[4]=d*x+p*T+_*I,a[7]=d*y+p*C+_*P,a[2]=g*M+v*R+E*U,a[5]=g*x+v*T+E*I,a[8]=g*y+v*C+E*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-n*a*p+n*u*f+r*a*d-r*c*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],_=p*c-u*d,g=u*f-p*a,v=d*a-c*f,E=t*_+n*g+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(r*d-p*n)*M,e[2]=(u*n-r*c)*M,e[3]=g*M,e[4]=(p*t-r*f)*M,e[5]=(r*a-u*t)*M,e[6]=v*M,e[7]=(n*f-d*t)*M,e[8]=(c*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*c+d*u)+c+e,-r*d,r*f,-r*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Mp.makeScale(e,t)),this}rotate(e){return this.premultiply(Mp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mp=new Lt;function US(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function oh(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gw(){const o=oh("canvas");return o.style.display="block",o}const sx={};function Ru(o){o in sx||(sx[o]=!0,console.warn(o))}const ox=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ax=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lf={[gs]:{transfer:nh,primaries:ih,toReference:o=>o,fromReference:o=>o},[Xn]:{transfer:sn,primaries:ih,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[dh]:{transfer:nh,primaries:rh,toReference:o=>o.applyMatrix3(ax),fromReference:o=>o.applyMatrix3(ox)},[ig]:{transfer:sn,primaries:rh,toReference:o=>o.convertSRGBToLinear().applyMatrix3(ax),fromReference:o=>o.applyMatrix3(ox).convertLinearToSRGB()}},Ww=new Set([gs,dh]),Kt={enabled:!0,_workingColorSpace:gs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Ww.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=lf[e].toReference,r=lf[t].fromReference;return r(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return lf[o].primaries},getTransfer:function(o){return o===dr?nh:lf[o].transfer}};function sl(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ep(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ba;class OS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ba===void 0&&(ba=oh("canvas")),ba.width=e.width,ba.height=e.height;const n=ba.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ba}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oh("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=sl(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sl(t[n]/255)*255):t[n]=sl(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xw=0;class FS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=Hu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push(Tp(r[c].image)):a.push(Tp(r[c]))}else a=Tp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Tp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yw=0;class Zi extends gl{constructor(e=Zi.DEFAULT_IMAGE,t=Zi.DEFAULT_MAPPING,n=br,r=br,a=hr,c=ku,u=Pr,f=io,d=Zi.DEFAULT_ANISOTROPY,p=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=Hu(),this.name="",this.source=new FS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===$o?Xn:dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==TS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sm:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sm:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xn?$o:DS}set encoding(e){Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$o?Xn:dr}}Zi.DEFAULT_IMAGE=null;Zi.DEFAULT_MAPPING=TS;Zi.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,t=0,n=0,r=1){un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,d=f[0],p=f[4],_=f[8],g=f[1],v=f[5],E=f[9],M=f[2],x=f[6],y=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,C=(v+1)/2,U=(y+1)/2,I=(p+g)/4,P=(_+M)/4,W=(E+x)/4;return T>C&&T>U?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=I/n,a=P/n):C>U?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=I/r,a=W/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=P/a,r=W/a),this.set(n,r,a,t),this}let R=Math.sqrt((x-E)*(x-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(_-M)/R,this.z=(g-p)/R,this.w=Math.acos((d+v+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jw extends gl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ru("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$o?Xn:dr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new FS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jo extends jw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kS extends Zi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qw extends Zi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vu{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,u){let f=n[r+0],d=n[r+1],p=n[r+2],_=n[r+3];const g=a[c+0],v=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u===1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(_!==M||f!==g||d!==v||p!==E){let x=1-u;const y=f*g+d*v+p*E+_*M,R=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){const U=Math.sqrt(T),I=Math.atan2(U,y*R);x=Math.sin(x*I)/U,u=Math.sin(u*I)/U}const C=u*R;if(f=f*x+g*C,d=d*x+v*C,p=p*x+E*C,_=_*x+M*C,x===1-u){const U=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=U,d*=U,p*=U,_*=U}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,c){const u=n[r],f=n[r+1],d=n[r+2],p=n[r+3],_=a[c],g=a[c+1],v=a[c+2],E=a[c+3];return e[t]=u*E+p*_+f*v-d*g,e[t+1]=f*E+p*g+d*_-u*v,e[t+2]=d*E+p*v+u*g-f*_,e[t+3]=p*E-u*_-f*g-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(n/2),p=u(r/2),_=u(a/2),g=f(n/2),v=f(r/2),E=f(a/2);switch(c){case"XYZ":this._x=g*p*_+d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_-g*v*E;break;case"YXZ":this._x=g*p*_+d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_+g*v*E;break;case"ZXY":this._x=g*p*_-d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_-g*v*E;break;case"ZYX":this._x=g*p*_-d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_+g*v*E;break;case"YZX":this._x=g*p*_+d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_-g*v*E;break;case"XZY":this._x=g*p*_-d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_+g*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],p=t[6],_=t[10],g=n+u+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(a-d)*v,this._z=(c-r)*v}else if(n>u&&n>_){const v=2*Math.sqrt(1+n-u-_);this._w=(p-f)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(a+d)/v}else if(u>_){const v=2*Math.sqrt(1+u-n-_);this._w=(a-d)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+_-n-u);this._w=(c-r)/v,this._x=(a+d)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ci(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+c*u+r*d-a*f,this._y=r*p+c*f+a*u-n*d,this._z=a*p+c*d+n*f-r*u,this._w=c*p-n*u-r*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-t;return this._w=v*c+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),_=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=c*_+this._w*g,this._x=n*_+this._x*g,this._y=r*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,n=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*r-u*n),p=2*(u*t-a*r),_=2*(a*n-c*t);return this.x=t+f*d+c*_-u*p,this.y=n+f*p+u*d-a*_,this.z=r+f*_+a*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=r*f-a*u,this.y=a*c-n*f,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wp.copy(this).projectOnVector(e),this.sub(wp)}reflect(e){return this.sub(wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wp=new oe,lx=new Vu;class Gu{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Er):Er.fromBufferAttribute(a,c),Er.applyMatrix4(e.matrixWorld),this.expandByPoint(Er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uf.copy(n.boundingBox)),uf.applyMatrix4(e.matrixWorld),this.union(uf)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Er),Er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(iu),cf.subVectors(this.max,iu),Pa.subVectors(e.a,iu),La.subVectors(e.b,iu),Da.subVectors(e.c,iu),zs.subVectors(La,Pa),Bs.subVectors(Da,La),Ao.subVectors(Pa,Da);let t=[0,-zs.z,zs.y,0,-Bs.z,Bs.y,0,-Ao.z,Ao.y,zs.z,0,-zs.x,Bs.z,0,-Bs.x,Ao.z,0,-Ao.x,-zs.y,zs.x,0,-Bs.y,Bs.x,0,-Ao.y,Ao.x,0];return!Ap(t,Pa,La,Da,cf)||(t=[1,0,0,0,1,0,0,0,1],!Ap(t,Pa,La,Da,cf))?!1:(ff.crossVectors(zs,Bs),t=[ff.x,ff.y,ff.z],Ap(t,Pa,La,Da,cf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ts=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Er=new oe,uf=new Gu,Pa=new oe,La=new oe,Da=new oe,zs=new oe,Bs=new oe,Ao=new oe,iu=new oe,cf=new oe,ff=new oe,Ro=new oe;function Ap(o,e,t,n,r){for(let a=0,c=o.length-3;a<=c;a+=3){Ro.fromArray(o,a);const u=r.x*Math.abs(Ro.x)+r.y*Math.abs(Ro.y)+r.z*Math.abs(Ro.z),f=e.dot(Ro),d=t.dot(Ro),p=n.dot(Ro);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const $w=new Gu,ru=new oe,Rp=new oe;class ph{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$w.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ru.subVectors(e,this.center);const t=ru.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ru,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ru.copy(e.center).add(Rp)),this.expandByPoint(ru.copy(e.center).sub(Rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ns=new oe,Cp=new oe,hf=new oe,Hs=new oe,bp=new oe,df=new oe,Pp=new oe;class zS{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cp.copy(e).add(t).multiplyScalar(.5),hf.copy(t).sub(e).normalize(),Hs.copy(this.origin).sub(Cp);const a=e.distanceTo(t)*.5,c=-this.direction.dot(hf),u=Hs.dot(this.direction),f=-Hs.dot(hf),d=Hs.lengthSq(),p=Math.abs(1-c*c);let _,g,v,E;if(p>0)if(_=c*f-u,g=c*u-f,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,v=_*(_+c*g+2*u)+g*(c*_+g+2*f)+d}else g=a,_=Math.max(0,-(c*g+u)),v=-_*_+g*(g+2*f)+d;else g=-a,_=Math.max(0,-(c*g+u)),v=-_*_+g*(g+2*f)+d;else g<=-E?(_=Math.max(0,-(-c*a+u)),g=_>0?-a:Math.min(Math.max(-a,-f),a),v=-_*_+g*(g+2*f)+d):g<=E?(_=0,g=Math.min(Math.max(-a,-f),a),v=g*(g+2*f)+d):(_=Math.max(0,-(c*a+u)),g=_>0?a:Math.min(Math.max(-a,-f),a),v=-_*_+g*(g+2*f)+d);else g=c>0?-a:a,_=Math.max(0,-(c*g+u)),v=-_*_+g*(g+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Cp).addScaledVector(hf,g),v}intersectSphere(e,t){ns.subVectors(e.center,this.origin);const n=ns.dot(this.direction),r=ns.dot(ns)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),u=n-c,f=n+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,u,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),_>=0?(u=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),n>f||u>r)||((u>n||n!==n)&&(n=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,r,a){bp.subVectors(t,e),df.subVectors(n,e),Pp.crossVectors(bp,df);let c=this.direction.dot(Pp),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Hs.subVectors(this.origin,e);const f=u*this.direction.dot(df.crossVectors(Hs,df));if(f<0)return null;const d=u*this.direction.dot(bp.cross(Hs));if(d<0||f+d>c)return null;const p=-u*Hs.dot(Pp);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,t,n,r,a,c,u,f,d,p,_,g,v,E,M,x){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,f,d,p,_,g,v,E,M,x)}set(e,t,n,r,a,c,u,f,d,p,_,g,v,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=d,y[6]=p,y[10]=_,y[14]=g,y[3]=v,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Na.setFromMatrixColumn(e,0).length(),a=1/Na.setFromMatrixColumn(e,1).length(),c=1/Na.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=c*p,v=c*_,E=u*p,M=u*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=v+E*d,t[5]=g-M*d,t[9]=-u*f,t[2]=M-g*d,t[6]=E+v*d,t[10]=c*f}else if(e.order==="YXZ"){const g=f*p,v=f*_,E=d*p,M=d*_;t[0]=g+M*u,t[4]=E*u-v,t[8]=c*d,t[1]=c*_,t[5]=c*p,t[9]=-u,t[2]=v*u-E,t[6]=M+g*u,t[10]=c*f}else if(e.order==="ZXY"){const g=f*p,v=f*_,E=d*p,M=d*_;t[0]=g-M*u,t[4]=-c*_,t[8]=E+v*u,t[1]=v+E*u,t[5]=c*p,t[9]=M-g*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const g=c*p,v=c*_,E=u*p,M=u*_;t[0]=f*p,t[4]=E*d-v,t[8]=g*d+M,t[1]=f*_,t[5]=M*d+g,t[9]=v*d-E,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,v=c*d,E=u*f,M=u*d;t[0]=f*p,t[4]=M-g*_,t[8]=E*_+v,t[1]=_,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=v*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=c*f,v=c*d,E=u*f,M=u*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=g*_+M,t[5]=c*p,t[9]=v*_-E,t[2]=E*_-v,t[6]=u*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kw,e,Zw)}lookAt(e,t,n){const r=this.elements;return zi.subVectors(e,t),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),Vs.crossVectors(n,zi),Vs.lengthSq()===0&&(Math.abs(n.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),Vs.crossVectors(n,zi)),Vs.normalize(),pf.crossVectors(zi,Vs),r[0]=Vs.x,r[4]=pf.x,r[8]=zi.x,r[1]=Vs.y,r[5]=pf.y,r[9]=zi.y,r[2]=Vs.z,r[6]=pf.z,r[10]=zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[4],f=n[8],d=n[12],p=n[1],_=n[5],g=n[9],v=n[13],E=n[2],M=n[6],x=n[10],y=n[14],R=n[3],T=n[7],C=n[11],U=n[15],I=r[0],P=r[4],W=r[8],A=r[12],b=r[1],te=r[5],Y=r[9],he=r[13],z=r[2],j=r[6],J=r[10],Z=r[14],B=r[3],q=r[7],D=r[11],F=r[15];return a[0]=c*I+u*b+f*z+d*B,a[4]=c*P+u*te+f*j+d*q,a[8]=c*W+u*Y+f*J+d*D,a[12]=c*A+u*he+f*Z+d*F,a[1]=p*I+_*b+g*z+v*B,a[5]=p*P+_*te+g*j+v*q,a[9]=p*W+_*Y+g*J+v*D,a[13]=p*A+_*he+g*Z+v*F,a[2]=E*I+M*b+x*z+y*B,a[6]=E*P+M*te+x*j+y*q,a[10]=E*W+M*Y+x*J+y*D,a[14]=E*A+M*he+x*Z+y*F,a[3]=R*I+T*b+C*z+U*B,a[7]=R*P+T*te+C*j+U*q,a[11]=R*W+T*Y+C*J+U*D,a[15]=R*A+T*he+C*Z+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],p=e[2],_=e[6],g=e[10],v=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+a*f*_-r*d*_-a*u*g+n*d*g+r*u*v-n*f*v)+M*(+t*f*v-t*d*g+a*c*g-r*c*v+r*d*p-a*f*p)+x*(+t*d*_-t*u*v-a*c*_+n*c*v+a*u*p-n*d*p)+y*(-r*u*p-t*f*_+t*u*g+r*c*_-n*c*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],_=e[9],g=e[10],v=e[11],E=e[12],M=e[13],x=e[14],y=e[15],R=_*x*d-M*g*d+M*f*v-u*x*v-_*f*y+u*g*y,T=E*g*d-p*x*d-E*f*v+c*x*v+p*f*y-c*g*y,C=p*M*d-E*_*d+E*u*v-c*M*v-p*u*y+c*_*y,U=E*_*f-p*M*f-E*u*g+c*M*g+p*u*x-c*_*x,I=t*R+n*T+r*C+a*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=R*P,e[1]=(M*g*a-_*x*a-M*r*v+n*x*v+_*r*y-n*g*y)*P,e[2]=(u*x*a-M*f*a+M*r*d-n*x*d-u*r*y+n*f*y)*P,e[3]=(_*f*a-u*g*a-_*r*d+n*g*d+u*r*v-n*f*v)*P,e[4]=T*P,e[5]=(p*x*a-E*g*a+E*r*v-t*x*v-p*r*y+t*g*y)*P,e[6]=(E*f*a-c*x*a-E*r*d+t*x*d+c*r*y-t*f*y)*P,e[7]=(c*g*a-p*f*a+p*r*d-t*g*d-c*r*v+t*f*v)*P,e[8]=C*P,e[9]=(E*_*a-p*M*a-E*n*v+t*M*v+p*n*y-t*_*y)*P,e[10]=(c*M*a-E*u*a+E*n*d-t*M*d-c*n*y+t*u*y)*P,e[11]=(p*u*a-c*_*a-p*n*d+t*_*d+c*n*v-t*u*v)*P,e[12]=U*P,e[13]=(p*M*r-E*_*r+E*n*g-t*M*g-p*n*x+t*_*x)*P,e[14]=(E*u*r-c*M*r-E*n*f+t*M*f+c*n*x-t*u*x)*P,e[15]=(c*_*r-p*u*r+p*n*f-t*_*f-c*n*g+t*u*g)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,u=e.y,f=e.z,d=a*c,p=a*u;return this.set(d*c+n,d*u-r*f,d*f+r*u,0,d*u+r*f,p*u+n,p*f-r*c,0,d*f-r*u,p*f+r*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,p=c+c,_=u+u,g=a*d,v=a*p,E=a*_,M=c*p,x=c*_,y=u*_,R=f*d,T=f*p,C=f*_,U=n.x,I=n.y,P=n.z;return r[0]=(1-(M+y))*U,r[1]=(v+C)*U,r[2]=(E-T)*U,r[3]=0,r[4]=(v-C)*I,r[5]=(1-(g+y))*I,r[6]=(x+R)*I,r[7]=0,r[8]=(E+T)*P,r[9]=(x-R)*P,r[10]=(1-(g+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Na.set(r[0],r[1],r[2]).length();const c=Na.set(r[4],r[5],r[6]).length(),u=Na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Tr.copy(this);const d=1/a,p=1/c,_=1/u;return Tr.elements[0]*=d,Tr.elements[1]*=d,Tr.elements[2]*=d,Tr.elements[4]*=p,Tr.elements[5]*=p,Tr.elements[6]*=p,Tr.elements[8]*=_,Tr.elements[9]*=_,Tr.elements[10]*=_,t.setFromRotationMatrix(Tr),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,c,u=hs){const f=this.elements,d=2*a/(t-e),p=2*a/(n-r),_=(t+e)/(t-e),g=(n+r)/(n-r);let v,E;if(u===hs)v=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===sh)v=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,c,u=hs){const f=this.elements,d=1/(t-e),p=1/(n-r),_=1/(c-a),g=(t+e)*d,v=(n+r)*p;let E,M;if(u===hs)E=(c+a)*_,M=-2*_;else if(u===sh)E=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Na=new oe,Tr=new En,Kw=new oe(0,0,0),Zw=new oe(1,1,1),Vs=new oe,pf=new oe,zi=new oe,ux=new En,cx=new Vu;class mh{constructor(e=0,t=0,n=0,r=mh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],u=r[8],f=r[1],d=r[5],p=r[9],_=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Ci(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ci(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ci(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Ci(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Ci(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-Ci(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ux,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cx.setFromEuler(this),this.setFromQuaternion(cx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mh.DEFAULT_ORDER="XYZ";class BS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qw=0;const fx=new oe,Ia=new Vu,is=new En,mf=new oe,su=new oe,Jw=new oe,eA=new Vu,hx=new oe(1,0,0),dx=new oe(0,1,0),px=new oe(0,0,1),tA={type:"added"},nA={type:"removed"};class vi extends gl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Hu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new oe,t=new mh,n=new Vu,r=new oe(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new En},normalMatrix:{value:new Lt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ia.setFromAxisAngle(e,t),this.quaternion.multiply(Ia),this}rotateOnWorldAxis(e,t){return Ia.setFromAxisAngle(e,t),this.quaternion.premultiply(Ia),this}rotateX(e){return this.rotateOnAxis(hx,e)}rotateY(e){return this.rotateOnAxis(dx,e)}rotateZ(e){return this.rotateOnAxis(px,e)}translateOnAxis(e,t){return fx.copy(e).applyQuaternion(this.quaternion),this.position.add(fx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hx,e)}translateY(e){return this.translateOnAxis(dx,e)}translateZ(e){return this.translateOnAxis(px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mf.copy(e):mf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),su.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(su,mf,this.up):is.lookAt(mf,su,this.up),this.quaternion.setFromRotationMatrix(is),r&&(is.extractRotation(r.matrixWorld),Ia.setFromRotationMatrix(is),this.quaternion.premultiply(Ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,e,Jw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,eA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++){const u=r[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),v=c(e.animations),E=c(e.nodes);u.length>0&&(n.geometries=u),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function c(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vi.DEFAULT_UP=new oe(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wr=new oe,rs=new oe,Lp=new oe,ss=new oe,Ua=new oe,Oa=new oe,mx=new oe,Dp=new oe,Np=new oe,Ip=new oe;let gf=!1;class Rr{constructor(e=new oe,t=new oe,n=new oe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wr.subVectors(e,t),r.cross(wr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){wr.subVectors(r,t),rs.subVectors(n,t),Lp.subVectors(e,t);const c=wr.dot(wr),u=wr.dot(rs),f=wr.dot(Lp),d=rs.dot(rs),p=rs.dot(Lp),_=c*d-u*u;if(_===0)return a.set(0,0,0),null;const g=1/_,v=(d*f-u*p)*g,E=(c*p-u*f)*g;return a.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getUV(e,t,n,r,a,c,u,f){return gf===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gf=!0),this.getInterpolation(e,t,n,r,a,c,u,f)}static getInterpolation(e,t,n,r,a,c,u,f){return this.getBarycoord(e,t,n,r,ss)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ss.x),f.addScaledVector(c,ss.y),f.addScaledVector(u,ss.z),f)}static isFrontFacing(e,t,n,r){return wr.subVectors(n,t),rs.subVectors(e,t),wr.cross(rs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wr.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),wr.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return gf===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gf=!0),Rr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return Rr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,u;Ua.subVectors(r,n),Oa.subVectors(a,n),Dp.subVectors(e,n);const f=Ua.dot(Dp),d=Oa.dot(Dp);if(f<=0&&d<=0)return t.copy(n);Np.subVectors(e,r);const p=Ua.dot(Np),_=Oa.dot(Np);if(p>=0&&_<=p)return t.copy(r);const g=f*_-p*d;if(g<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(n).addScaledVector(Ua,c);Ip.subVectors(e,a);const v=Ua.dot(Ip),E=Oa.dot(Ip);if(E>=0&&v<=E)return t.copy(a);const M=v*d-f*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(n).addScaledVector(Oa,u);const x=p*E-v*_;if(x<=0&&_-p>=0&&v-E>=0)return mx.subVectors(a,r),u=(_-p)/(_-p+(v-E)),t.copy(r).addScaledVector(mx,u);const y=1/(x+M+g);return c=M*y,u=g*y,t.copy(n).addScaledVector(Ua,c).addScaledVector(Oa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},_f={h:0,s:0,l:0};function Up(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class kt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Kt.workingColorSpace){if(e=Vw(e,1),t=Ci(t,0,1),n=Ci(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Up(c,a,e+1/3),this.g=Up(c,a,e),this.b=Up(c,a,e-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=HS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sl(e.r),this.g=sl(e.g),this.b=sl(e.b),this}copyLinearToSRGB(e){return this.r=Ep(e.r),this.g=Ep(e.g),this.b=Ep(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Kt.fromWorkingColorSpace(ei.copy(this),e),Math.round(Ci(ei.r*255,0,255))*65536+Math.round(Ci(ei.g*255,0,255))*256+Math.round(Ci(ei.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ei.copy(this),t);const n=ei.r,r=ei.g,a=ei.b,c=Math.max(n,r,a),u=Math.min(n,r,a);let f,d;const p=(u+c)/2;if(u===c)f=0,d=0;else{const _=c-u;switch(d=p<=.5?_/(c+u):_/(2-c-u),c){case n:f=(r-a)/_+(r<a?6:0);break;case r:f=(a-n)/_+2;break;case a:f=(n-r)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Xn){Kt.fromWorkingColorSpace(ei.copy(this),e);const t=ei.r,n=ei.g,r=ei.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(_f);const n=Sp(Gs.h,_f.h,t),r=Sp(Gs.s,_f.s,t),a=Sp(Gs.l,_f.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new kt;kt.NAMES=HS;let iA=0;class _l extends gl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iA++}),this.uuid=Hu(),this.name="",this.type="Material",this.blending=rl,this.side=lo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_m,this.blendDst=vm,this.blendEquation=Uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=th,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rl&&(n.blending=this.blending),this.side!==lo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_m&&(n.blendSrc=this.blendSrc),this.blendDst!==vm&&(n.blendDst=this.blendDst),this.blendEquation!==Uo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==th&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ca&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ca&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ca&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oo extends _l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ES,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new oe,vf=new zt;class Lr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vf.fromBufferAttribute(this,t),vf.applyMatrix3(e),this.setXY(t,vf.x,vf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ai(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array),r=Ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array),r=Ai(r,this.array),a=Ai(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nx&&(e.usage=this.usage),e}}class VS extends Lr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class GS extends Lr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qi extends Lr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rA=0;const lr=new En,Op=new vi,Fa=new oe,Bi=new Gu,ou=new Gu,kn=new oe;class Dr extends gl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Hu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(US(e)?GS:VS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return lr.makeRotationFromQuaternion(e),this.applyMatrix4(lr),this}rotateX(e){return lr.makeRotationX(e),this.applyMatrix4(lr),this}rotateY(e){return lr.makeRotationY(e),this.applyMatrix4(lr),this}rotateZ(e){return lr.makeRotationZ(e),this.applyMatrix4(lr),this}translate(e,t,n){return lr.makeTranslation(e,t,n),this.applyMatrix4(lr),this}scale(e,t,n){return lr.makeScale(e,t,n),this.applyMatrix4(lr),this}lookAt(e){return Op.lookAt(e),Op.updateMatrix(),this.applyMatrix4(Op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fa).negate(),this.translate(Fa.x,Fa.y,Fa.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Qi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new oe,1/0);return}if(e){const n=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ou.setFromBufferAttribute(u),this.morphTargetsRelative?(kn.addVectors(Bi.min,ou.min),Bi.expandByPoint(kn),kn.addVectors(Bi.max,ou.max),Bi.expandByPoint(kn)):(Bi.expandByPoint(ou.min),Bi.expandByPoint(ou.max))}Bi.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)kn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(kn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)kn.fromBufferAttribute(u,d),f&&(Fa.fromBufferAttribute(e,d),kn.add(Fa)),r=Math.max(r,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,c=t.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lr(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let b=0;b<u;b++)d[b]=new oe,p[b]=new oe;const _=new oe,g=new oe,v=new oe,E=new zt,M=new zt,x=new zt,y=new oe,R=new oe;function T(b,te,Y){_.fromArray(r,b*3),g.fromArray(r,te*3),v.fromArray(r,Y*3),E.fromArray(c,b*2),M.fromArray(c,te*2),x.fromArray(c,Y*2),g.sub(_),v.sub(_),M.sub(E),x.sub(E);const he=1/(M.x*x.y-x.x*M.y);isFinite(he)&&(y.copy(g).multiplyScalar(x.y).addScaledVector(v,-M.y).multiplyScalar(he),R.copy(v).multiplyScalar(M.x).addScaledVector(g,-x.x).multiplyScalar(he),d[b].add(y),d[te].add(y),d[Y].add(y),p[b].add(R),p[te].add(R),p[Y].add(R))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let b=0,te=C.length;b<te;++b){const Y=C[b],he=Y.start,z=Y.count;for(let j=he,J=he+z;j<J;j+=3)T(n[j+0],n[j+1],n[j+2])}const U=new oe,I=new oe,P=new oe,W=new oe;function A(b){P.fromArray(a,b*3),W.copy(P);const te=d[b];U.copy(te),U.sub(P.multiplyScalar(P.dot(te))).normalize(),I.crossVectors(W,te);const he=I.dot(p[b])<0?-1:1;f[b*4]=U.x,f[b*4+1]=U.y,f[b*4+2]=U.z,f[b*4+3]=he}for(let b=0,te=C.length;b<te;++b){const Y=C[b],he=Y.start,z=Y.count;for(let j=he,J=he+z;j<J;j+=3)A(n[j+0]),A(n[j+1]),A(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new oe,a=new oe,c=new oe,u=new oe,f=new oe,d=new oe,p=new oe,_=new oe;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),p.subVectors(c,a),_.subVectors(r,a),p.cross(_),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),u.add(p),f.add(p),d.add(p),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),_.subVectors(r,a),p.cross(_),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,_=u.normalized,g=new d.constructor(f.length*p);let v=0,E=0;for(let M=0,x=f.length;M<x;M++){u.isInterleavedBufferAttribute?v=f[M]*u.data.stride+u.offset:v=f[M]*p;for(let y=0;y<p;y++)g[E++]=d[v++]}return new Lr(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dr,n=this.index.array,r=this.attributes;for(const u in r){const f=r[u],d=e(f,n);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let p=0,_=d.length;p<_;p++){const g=d[p],v=e(g,n);f.push(v)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,g=d.length;_<g;_++){const v=d[_];p.push(v.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let g=0,v=_.length;g<v;g++)p.push(_[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gx=new En,Co=new zS,xf=new ph,_x=new oe,ka=new oe,za=new oe,Ba=new oe,Fp=new oe,yf=new oe,Sf=new zt,Mf=new zt,Ef=new zt,vx=new oe,xx=new oe,yx=new oe,Tf=new oe,wf=new oe;class Wn extends vi{constructor(e=new Dr,t=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){yf.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=u[f],_=a[f];p!==0&&(Fp.fromBufferAttribute(_,e),c?yf.addScaledVector(Fp,p):yf.addScaledVector(Fp.sub(t),p))}t.add(yf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xf.copy(n.boundingSphere),xf.applyMatrix4(a),Co.copy(e.ray).recast(e.near),!(xf.containsPoint(Co.origin)===!1&&(Co.intersectSphere(xf,_x)===null||Co.origin.distanceToSquared(_x)>(e.far-e.near)**2))&&(gx.copy(a).invert(),Co.copy(e.ray).applyMatrix4(gx),!(n.boundingBox!==null&&Co.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Co)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=g.length;E<M;E++){const x=g[E],y=c[x.materialIndex],R=Math.max(x.start,v.start),T=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let C=R,U=T;C<U;C+=3){const I=u.getX(C),P=u.getX(C+1),W=u.getX(C+2);r=Af(this,y,e,n,d,p,_,I,P,W),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(u.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const R=u.getX(x),T=u.getX(x+1),C=u.getX(x+2);r=Af(this,c,e,n,d,p,_,R,T,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=g.length;E<M;E++){const x=g[E],y=c[x.materialIndex],R=Math.max(x.start,v.start),T=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let C=R,U=T;C<U;C+=3){const I=C,P=C+1,W=C+2;r=Af(this,y,e,n,d,p,_,I,P,W),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const R=x,T=x+1,C=x+2;r=Af(this,c,e,n,d,p,_,R,T,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function sA(o,e,t,n,r,a,c,u){let f;if(e.side===oi?f=n.intersectTriangle(c,a,r,!0,u):f=n.intersectTriangle(r,a,c,e.side===lo,u),f===null)return null;wf.copy(u),wf.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(wf);return d<t.near||d>t.far?null:{distance:d,point:wf.clone(),object:o}}function Af(o,e,t,n,r,a,c,u,f,d){o.getVertexPosition(u,ka),o.getVertexPosition(f,za),o.getVertexPosition(d,Ba);const p=sA(o,e,t,n,ka,za,Ba,Tf);if(p){r&&(Sf.fromBufferAttribute(r,u),Mf.fromBufferAttribute(r,f),Ef.fromBufferAttribute(r,d),p.uv=Rr.getInterpolation(Tf,ka,za,Ba,Sf,Mf,Ef,new zt)),a&&(Sf.fromBufferAttribute(a,u),Mf.fromBufferAttribute(a,f),Ef.fromBufferAttribute(a,d),p.uv1=Rr.getInterpolation(Tf,ka,za,Ba,Sf,Mf,Ef,new zt),p.uv2=p.uv1),c&&(vx.fromBufferAttribute(c,u),xx.fromBufferAttribute(c,f),yx.fromBufferAttribute(c,d),p.normal=Rr.getInterpolation(Tf,ka,za,Ba,vx,xx,yx,new oe),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new oe,materialIndex:0};Rr.getNormal(ka,za,Ba,_.normal),p.face=_}return p}class Wu extends Dr{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],p=[],_=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,c,a,0),E("z","y","x",1,-1,n,t,-e,c,a,1),E("x","z","y",1,1,e,n,t,r,c,2),E("x","z","y",1,-1,e,n,-t,r,c,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new Qi(d,3)),this.setAttribute("normal",new Qi(p,3)),this.setAttribute("uv",new Qi(_,2));function E(M,x,y,R,T,C,U,I,P,W,A){const b=C/P,te=U/W,Y=C/2,he=U/2,z=I/2,j=P+1,J=W+1;let Z=0,B=0;const q=new oe;for(let D=0;D<J;D++){const F=D*te-he;for(let G=0;G<j;G++){const $=G*b-Y;q[M]=$*R,q[x]=F*T,q[y]=z,d.push(q.x,q.y,q.z),q[M]=0,q[x]=0,q[y]=I>0?1:-1,p.push(q.x,q.y,q.z),_.push(G/P),_.push(1-D/W),Z+=1}}for(let D=0;D<W;D++)for(let F=0;F<P;F++){const G=g+F+j*D,$=g+F+j*(D+1),ee=g+(F+1)+j*(D+1),ce=g+(F+1)+j*D;f.push(G,$,ce),f.push($,ee,ce),B+=6}u.addGroup(v,B,A),v+=B,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ml(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hi(o){const e={};for(let t=0;t<o.length;t++){const n=ml(o[t]);for(const r in n)e[r]=n[r]}return e}function oA(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function WS(o){return o.getRenderTarget()===null?o.outputColorSpace:Kt.workingColorSpace}const aA={clone:ml,merge:hi};var lA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _s extends _l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lA,this.fragmentShader=uA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ml(e.uniforms),this.uniformsGroups=oA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class XS extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xi extends XS{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tm*2*Math.atan(Math.tan(yp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/f,t-=c.offsetY*n/d,r*=c.width/f,n*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ha=-90,Va=1;class cA extends vi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xi(Ha,Va,e,t);r.layers=this.layers,this.add(r);const a=new Xi(Ha,Va,e,t);a.layers=this.layers,this.add(a);const c=new Xi(Ha,Va,e,t);c.layers=this.layers,this.add(c);const u=new Xi(Ha,Va,e,t);u.layers=this.layers,this.add(u);const f=new Xi(Ha,Va,e,t);f.layers=this.layers,this.add(f);const d=new Xi(Ha,Va,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===hs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===sh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class YS extends Zi{constructor(e,t,n,r,a,c,u,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:hl,super(e,t,n,r,a,c,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fA extends Jo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ru("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$o?Xn:dr),this.texture=new YS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wu(5,5,5),a=new _s({name:"CubemapFromEquirect",uniforms:ml(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:to});a.uniforms.tEquirect.value=t;const c=new Wn(r,a),u=t.minFilter;return t.minFilter===ku&&(t.minFilter=hr),new cA(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const kp=new oe,hA=new oe,dA=new Lt;class No{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=kp.subVectors(n,t).cross(hA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dA.getNormalMatrix(e),r=this.coplanarPoint(kp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bo=new ph,Rf=new oe;class rg{constructor(e=new No,t=new No,n=new No,r=new No,a=new No,c=new No){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hs){const n=this.planes,r=e.elements,a=r[0],c=r[1],u=r[2],f=r[3],d=r[4],p=r[5],_=r[6],g=r[7],v=r[8],E=r[9],M=r[10],x=r[11],y=r[12],R=r[13],T=r[14],C=r[15];if(n[0].setComponents(f-a,g-d,x-v,C-y).normalize(),n[1].setComponents(f+a,g+d,x+v,C+y).normalize(),n[2].setComponents(f+c,g+p,x+E,C+R).normalize(),n[3].setComponents(f-c,g-p,x-E,C-R).normalize(),n[4].setComponents(f-u,g-_,x-M,C-T).normalize(),t===hs)n[5].setComponents(f+u,g+_,x+M,C+T).normalize();else if(t===sh)n[5].setComponents(u,_,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bo)}intersectsSprite(e){return bo.center.set(0,0,0),bo.radius=.7071067811865476,bo.applyMatrix4(e.matrixWorld),this.intersectsSphere(bo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Rf.x=r.normal.x>0?e.max.x:e.min.x,Rf.y=r.normal.y>0?e.max.y:e.min.y,Rf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jS(){let o=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function pA(o,e){const t=e.isWebGL2,n=new WeakMap;function r(d,p){const _=d.array,g=d.usage,v=_.byteLength,E=o.createBuffer();o.bindBuffer(p,E),o.bufferData(p,_,g),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)M=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,_){const g=p.array,v=p._updateRange,E=p.updateRanges;if(o.bindBuffer(_,d),v.count===-1&&E.length===0&&o.bufferSubData(_,0,g),E.length!==0){for(let M=0,x=E.length;M<x;M++){const y=E[M];t?o.bufferSubData(_,y.start*g.BYTES_PER_ELEMENT,g,y.start,y.count):o.bufferSubData(_,y.start*g.BYTES_PER_ELEMENT,g.subarray(y.start,y.start+y.count))}p.clearUpdateRanges()}v.count!==-1&&(t?o.bufferSubData(_,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count):o.bufferSubData(_,v.offset*g.BYTES_PER_ELEMENT,g.subarray(v.offset,v.offset+v.count)),v.count=-1),p.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(o.deleteBuffer(p.buffer),n.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const g=n.get(d);(!g||g.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=n.get(d);if(_===void 0)n.set(d,r(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:c,remove:u,update:f}}class sg extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,u=Math.floor(n),f=Math.floor(r),d=u+1,p=f+1,_=e/u,g=t/f,v=[],E=[],M=[],x=[];for(let y=0;y<p;y++){const R=y*g-c;for(let T=0;T<d;T++){const C=T*_-a;E.push(C,-R,0),M.push(0,0,1),x.push(T/u),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let R=0;R<u;R++){const T=R+d*y,C=R+d*(y+1),U=R+1+d*(y+1),I=R+1+d*y;v.push(T,C,I),v.push(C,U,I)}this.setIndex(v),this.setAttribute("position",new Qi(E,3)),this.setAttribute("normal",new Qi(M,3)),this.setAttribute("uv",new Qi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sg(e.width,e.height,e.widthSegments,e.heightSegments)}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
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
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SA=`#ifdef USE_AOMAP
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
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,TA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CA=`#ifdef USE_IRIDESCENCE
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
#endif`,bA=`#ifdef USE_BUMPMAP
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
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kA=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,zA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BA=`vec3 transformedNormal = objectNormal;
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
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XA="gl_FragColor = linearToOutputTexel( gl_FragColor );",YA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jA=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$A=`#ifdef USE_ENVMAP
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
#endif`,KA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
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
#endif`,QA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nR=`#ifdef USE_GRADIENTMAP
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
}`,iR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aR=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,uR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,pR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mR=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,_R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,SR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,MR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ER=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wR=`#if defined( USE_POINTS_UV )
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
#endif`,AR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,DR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FR=`#ifdef USE_NORMALMAP
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
#endif`,kR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$R=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,JR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iC=`#ifdef USE_SKINNING
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
#endif`,rC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aC=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lC=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uC=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mC=`uniform sampler2D t2D;
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
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yC=`#include <common>
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
}`,SC=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,MC=`#define DISTANCE
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
}`,EC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AC=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CC=`#include <common>
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
}`,bC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,PC=`#define LAMBERT
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
}`,LC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DC=`#define MATCAP
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
}`,NC=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IC=`#define NORMAL
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
}`,UC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OC=`#define PHONG
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
}`,FC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kC=`#define STANDARD
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
}`,zC=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,BC=`#define TOON
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
}`,HC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,VC=`uniform float size;
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
}`,GC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,XC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,YC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,jC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wt={alphahash_fragment:mA,alphahash_pars_fragment:gA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:xA,alphatest_pars_fragment:yA,aomap_fragment:SA,aomap_pars_fragment:MA,batching_pars_vertex:EA,batching_vertex:TA,begin_vertex:wA,beginnormal_vertex:AA,bsdfs:RA,iridescence_fragment:CA,bumpmap_pars_fragment:bA,clipping_planes_fragment:PA,clipping_planes_pars_fragment:LA,clipping_planes_pars_vertex:DA,clipping_planes_vertex:NA,color_fragment:IA,color_pars_fragment:UA,color_pars_vertex:OA,color_vertex:FA,common:kA,cube_uv_reflection_fragment:zA,defaultnormal_vertex:BA,displacementmap_pars_vertex:HA,displacementmap_vertex:VA,emissivemap_fragment:GA,emissivemap_pars_fragment:WA,colorspace_fragment:XA,colorspace_pars_fragment:YA,envmap_fragment:jA,envmap_common_pars_fragment:qA,envmap_pars_fragment:$A,envmap_pars_vertex:KA,envmap_physical_pars_fragment:lR,envmap_vertex:ZA,fog_vertex:QA,fog_pars_vertex:JA,fog_fragment:eR,fog_pars_fragment:tR,gradientmap_pars_fragment:nR,lightmap_fragment:iR,lightmap_pars_fragment:rR,lights_lambert_fragment:sR,lights_lambert_pars_fragment:oR,lights_pars_begin:aR,lights_toon_fragment:uR,lights_toon_pars_fragment:cR,lights_phong_fragment:fR,lights_phong_pars_fragment:hR,lights_physical_fragment:dR,lights_physical_pars_fragment:pR,lights_fragment_begin:mR,lights_fragment_maps:gR,lights_fragment_end:_R,logdepthbuf_fragment:vR,logdepthbuf_pars_fragment:xR,logdepthbuf_pars_vertex:yR,logdepthbuf_vertex:SR,map_fragment:MR,map_pars_fragment:ER,map_particle_fragment:TR,map_particle_pars_fragment:wR,metalnessmap_fragment:AR,metalnessmap_pars_fragment:RR,morphcolor_vertex:CR,morphnormal_vertex:bR,morphtarget_pars_vertex:PR,morphtarget_vertex:LR,normal_fragment_begin:DR,normal_fragment_maps:NR,normal_pars_fragment:IR,normal_pars_vertex:UR,normal_vertex:OR,normalmap_pars_fragment:FR,clearcoat_normal_fragment_begin:kR,clearcoat_normal_fragment_maps:zR,clearcoat_pars_fragment:BR,iridescence_pars_fragment:HR,opaque_fragment:VR,packing:GR,premultiplied_alpha_fragment:WR,project_vertex:XR,dithering_fragment:YR,dithering_pars_fragment:jR,roughnessmap_fragment:qR,roughnessmap_pars_fragment:$R,shadowmap_pars_fragment:KR,shadowmap_pars_vertex:ZR,shadowmap_vertex:QR,shadowmask_pars_fragment:JR,skinbase_vertex:eC,skinning_pars_vertex:tC,skinning_vertex:nC,skinnormal_vertex:iC,specularmap_fragment:rC,specularmap_pars_fragment:sC,tonemapping_fragment:oC,tonemapping_pars_fragment:aC,transmission_fragment:lC,transmission_pars_fragment:uC,uv_pars_fragment:cC,uv_pars_vertex:fC,uv_vertex:hC,worldpos_vertex:dC,background_vert:pC,background_frag:mC,backgroundCube_vert:gC,backgroundCube_frag:_C,cube_vert:vC,cube_frag:xC,depth_vert:yC,depth_frag:SC,distanceRGBA_vert:MC,distanceRGBA_frag:EC,equirect_vert:TC,equirect_frag:wC,linedashed_vert:AC,linedashed_frag:RC,meshbasic_vert:CC,meshbasic_frag:bC,meshlambert_vert:PC,meshlambert_frag:LC,meshmatcap_vert:DC,meshmatcap_frag:NC,meshnormal_vert:IC,meshnormal_frag:UC,meshphong_vert:OC,meshphong_frag:FC,meshphysical_vert:kC,meshphysical_frag:zC,meshtoon_vert:BC,meshtoon_frag:HC,points_vert:VC,points_frag:GC,shadow_vert:WC,shadow_frag:XC,sprite_vert:YC,sprite_frag:jC},Ie={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Br={basic:{uniforms:hi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:hi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new kt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:hi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:hi([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:hi([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new kt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:hi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:hi([Ie.points,Ie.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:hi([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:hi([Ie.common,Ie.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:hi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:hi([Ie.sprite,Ie.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:hi([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:hi([Ie.lights,Ie.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Br.physical={uniforms:hi([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Cf={r:0,b:0,g:0};function qC(o,e,t,n,r,a,c){const u=new kt(0);let f=a===!0?0:1,d,p,_=null,g=0,v=null;function E(x,y){let R=!1,T=y.isScene===!0?y.background:null;T&&T.isTexture&&(T=(y.backgroundBlurriness>0?t:e).get(T)),T===null?M(u,f):T&&T.isColor&&(M(T,1),R=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),T&&(T.isCubeTexture||T.mapping===hh)?(p===void 0&&(p=new Wn(new Wu(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:ml(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=Kt.getTransfer(T.colorSpace)!==sn,(_!==T||g!==T.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=T,g=T.version,v=o.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Wn(new sg(2,2),new _s({name:"BackgroundMaterial",uniforms:ml(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:lo,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.toneMapped=Kt.getTransfer(T.colorSpace)!==sn,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||g!==T.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,_=T,g=T.version,v=o.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function M(x,y){x.getRGB(Cf,WS(o)),n.buffers.color.setClear(Cf.r,Cf.g,Cf.b,y,c)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),f=y,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,M(u,f)},render:E}}function $C(o,e,t,n){const r=o.getParameter(o.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,u={},f=x(null);let d=f,p=!1;function _(z,j,J,Z,B){let q=!1;if(c){const D=M(Z,J,j);d!==D&&(d=D,v(d.object)),q=y(z,Z,J,B),q&&R(z,Z,J,B)}else{const D=j.wireframe===!0;(d.geometry!==Z.id||d.program!==J.id||d.wireframe!==D)&&(d.geometry=Z.id,d.program=J.id,d.wireframe=D,q=!0)}B!==null&&t.update(B,o.ELEMENT_ARRAY_BUFFER),(q||p)&&(p=!1,W(z,j,J,Z),B!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function g(){return n.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function v(z){return n.isWebGL2?o.bindVertexArray(z):a.bindVertexArrayOES(z)}function E(z){return n.isWebGL2?o.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function M(z,j,J){const Z=J.wireframe===!0;let B=u[z.id];B===void 0&&(B={},u[z.id]=B);let q=B[j.id];q===void 0&&(q={},B[j.id]=q);let D=q[Z];return D===void 0&&(D=x(g()),q[Z]=D),D}function x(z){const j=[],J=[],Z=[];for(let B=0;B<r;B++)j[B]=0,J[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:Z,object:z,attributes:{},index:null}}function y(z,j,J,Z){const B=d.attributes,q=j.attributes;let D=0;const F=J.getAttributes();for(const G in F)if(F[G].location>=0){const ee=B[G];let ce=q[G];if(ce===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;D++}return d.attributesNum!==D||d.index!==Z}function R(z,j,J,Z){const B={},q=j.attributes;let D=0;const F=J.getAttributes();for(const G in F)if(F[G].location>=0){let ee=q[G];ee===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),B[G]=ce,D++}d.attributes=B,d.attributesNum=D,d.index=Z}function T(){const z=d.newAttributes;for(let j=0,J=z.length;j<J;j++)z[j]=0}function C(z){U(z,0)}function U(z,j){const J=d.newAttributes,Z=d.enabledAttributes,B=d.attributeDivisors;J[z]=1,Z[z]===0&&(o.enableVertexAttribArray(z),Z[z]=1),B[z]!==j&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,j),B[z]=j)}function I(){const z=d.newAttributes,j=d.enabledAttributes;for(let J=0,Z=j.length;J<Z;J++)j[J]!==z[J]&&(o.disableVertexAttribArray(J),j[J]=0)}function P(z,j,J,Z,B,q,D){D===!0?o.vertexAttribIPointer(z,j,J,B,q):o.vertexAttribPointer(z,j,J,Z,B,q)}function W(z,j,J,Z){if(n.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const B=Z.attributes,q=J.getAttributes(),D=j.defaultAttributeValues;for(const F in q){const G=q[F];if(G.location>=0){let $=B[F];if($===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),$!==void 0){const ee=$.normalized,ce=$.itemSize,de=t.get($);if(de===void 0)continue;const me=de.buffer,Me=de.type,Pe=de.bytesPerElement,ze=n.isWebGL2===!0&&(Me===o.INT||Me===o.UNSIGNED_INT||$.gpuType===wS);if($.isInterleavedBufferAttribute){const st=$.data,ie=st.stride,ut=$.offset;if(st.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)U(G.location+Ue,st.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)C(G.location+Ue);o.bindBuffer(o.ARRAY_BUFFER,me);for(let Ue=0;Ue<G.locationSize;Ue++)P(G.location+Ue,ce/G.locationSize,Me,ee,ie*Pe,(ut+ce/G.locationSize*Ue)*Pe,ze)}else{if($.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)U(G.location+st,$.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<G.locationSize;st++)C(G.location+st);o.bindBuffer(o.ARRAY_BUFFER,me);for(let st=0;st<G.locationSize;st++)P(G.location+st,ce/G.locationSize,Me,ee,ce*Pe,ce/G.locationSize*st*Pe,ze)}}else if(D!==void 0){const ee=D[F];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(G.location,ee);break;case 3:o.vertexAttrib3fv(G.location,ee);break;case 4:o.vertexAttrib4fv(G.location,ee);break;default:o.vertexAttrib1fv(G.location,ee)}}}}I()}function A(){Y();for(const z in u){const j=u[z];for(const J in j){const Z=j[J];for(const B in Z)E(Z[B].object),delete Z[B];delete j[J]}delete u[z]}}function b(z){if(u[z.id]===void 0)return;const j=u[z.id];for(const J in j){const Z=j[J];for(const B in Z)E(Z[B].object),delete Z[B];delete j[J]}delete u[z.id]}function te(z){for(const j in u){const J=u[j];if(J[z.id]===void 0)continue;const Z=J[z.id];for(const B in Z)E(Z[B].object),delete Z[B];delete J[z.id]}}function Y(){he(),p=!0,d!==f&&(d=f,v(d.object))}function he(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:Y,resetDefaultState:he,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:te,initAttributes:T,enableAttribute:C,disableUnusedAttributes:I}}function KC(o,e,t,n){const r=n.isWebGL2;let a;function c(p){a=p}function u(p,_){o.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,g){if(g===0)return;let v,E;if(r)v=o,E="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[E](a,p,_,g),t.update(_,a,g)}function d(p,_,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<g;E++)this.render(p[E],_[E]);else{v.multiDrawArraysWEBGL(a,p,0,_,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M];t.update(E,a,1)}}this.setMode=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function ZC(o,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const f=a(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,C=c||e.has("OES_texture_float"),U=T&&C,I=c?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:E,maxAttributes:M,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:R,vertexTextures:T,floatFragmentTextures:C,floatVertexTextures:U,maxSamples:I}}function QC(o){const e=this;let t=null,n=0,r=!1,a=!1;const c=new No,u=new Lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||n!==0||r;return r=g,n=_.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,v){const E=_.clippingPlanes,M=_.clipIntersection,x=_.clipShadows,y=o.get(_);if(!r||E===null||E.length===0||a&&!x)a?p(null):d();else{const R=a?0:n,T=R*4;let C=y.clippingState||null;f.value=C,C=p(E,g,T,v);for(let U=0;U!==T;++U)C[U]=t[U];y.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,g,v,E){const M=_!==null?_.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const y=v+M*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(x===null||x.length<y)&&(x=new Float32Array(y));for(let T=0,C=v;T!==M;++T,C+=4)c.copy(_[T]).applyMatrix4(R,u),c.normal.toArray(x,C),x[C+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function JC(o){let e=new WeakMap;function t(c,u){return u===xm?c.mapping=hl:u===ym&&(c.mapping=dl),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===xm||u===ym)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new fA(f.height/2);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class e2 extends XS{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $a=4,Sx=[.125,.215,.35,.446,.526,.582],Fo=20,zp=new e2,Mx=new kt;let Bp=null,Hp=0,Vp=0;const Io=(1+Math.sqrt(5))/2,Ga=1/Io,Ex=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,Io,Ga),new oe(0,Io,-Ga),new oe(Ga,0,Io),new oe(-Ga,0,Io),new oe(Io,Ga,0),new oe(-Io,Ga,0)];class Tx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Bp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Vp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bp,Hp,Vp),e.scissorTest=!1,bf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hl||e.mapping===dl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Vp=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hr,minFilter:hr,generateMipmaps:!1,type:zu,format:Pr,colorSpace:gs,depthBuffer:!1},r=wx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t2(a)),this._blurMaterial=n2(a,e,t)}return r}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,zp)}_sceneToCubeUV(e,t,n,r){const u=new Xi(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(Mx),p.toneMapping=no,p.autoClear=!1;const v=new Oo({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),E=new Wn(new Wu,v);let M=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,M=!0):(v.color.copy(Mx),M=!0);for(let y=0;y<6;y++){const R=y%3;R===0?(u.up.set(0,f[y],0),u.lookAt(d[y],0,0)):R===1?(u.up.set(0,0,f[y]),u.lookAt(0,d[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,d[y]));const T=this._cubeSize;bf(r,R*T,y>2?T:0,T,T),p.setRenderTarget(r),M&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hl||e.mapping===dl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ax());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new Wn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;bf(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,zp)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Ex[(r-1)%Ex.length];this._blur(e,r-1,r,a,c)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Wn(this._lodPlanes[r],d),g=d.uniforms,v=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Fo-1),M=a/E,x=isFinite(a)?1+Math.floor(p*M):Fo;x>Fo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fo}`);const y=[];let R=0;for(let P=0;P<Fo;++P){const W=P/M,A=Math.exp(-W*W/2);y.push(A),P===0?R+=A:P<x&&(R+=2*A)}for(let P=0;P<y.length;P++)y[P]=y[P]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:T}=this;g.dTheta.value=E,g.mipInt.value=T-n;const C=this._sizeLods[r],U=3*C*(r>T-$a?r-T+$a:0),I=4*(this._cubeSize-C);bf(t,U,I,3*C,2*C),f.setRenderTarget(t),f.render(_,zp)}}function t2(o){const e=[],t=[],n=[];let r=o;const a=o-$a+1+Sx.length;for(let c=0;c<a;c++){const u=Math.pow(2,r);t.push(u);let f=1/u;c>o-$a?f=Sx[c-o+$a-1]:c===0&&(f=0),n.push(f);const d=1/(u-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,E=6,M=3,x=2,y=1,R=new Float32Array(M*E*v),T=new Float32Array(x*E*v),C=new Float32Array(y*E*v);for(let I=0;I<v;I++){const P=I%3*2/3-1,W=I>2?0:-1,A=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];R.set(A,M*E*I),T.set(g,x*E*I);const b=[I,I,I,I,I,I];C.set(b,y*E*I)}const U=new Dr;U.setAttribute("position",new Lr(R,M)),U.setAttribute("uv",new Lr(T,x)),U.setAttribute("faceIndex",new Lr(C,y)),e.push(U),r>$a&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wx(o,e,t){const n=new Jo(o,e,t);return n.texture.mapping=hh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bf(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function n2(o,e,t){const n=new Float32Array(Fo),r=new oe(0,1,0);return new _s({name:"SphericalGaussianBlur",defines:{n:Fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:og(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function Ax(){return new _s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:og(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function Rx(){return new _s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:to,depthTest:!1,depthWrite:!1})}function og(){return`

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
	`}function i2(o){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const f=u.mapping,d=f===xm||f===ym,p=f===hl||f===dl;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=e.get(u);return t===null&&(t=new Tx(o)),_=d?t.fromEquirectangular(u,_):t.fromCubemap(u,_),e.set(u,_),_.texture}else{if(e.has(u))return e.get(u).texture;{const _=u.image;if(d&&_&&_.height>0||p&&_&&r(_)){t===null&&(t=new Tx(o));const g=d?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",a),g.texture}else return null}}}return u}function r(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function r2(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function s2(o,e,t,n){const r={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const M=g.morphAttributes[E];for(let x=0,y=M.length;x<y;x++)e.remove(M[x])}g.removeEventListener("dispose",c),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return r[g.id]===!0||(g.addEventListener("dispose",c),r[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER);const v=_.morphAttributes;for(const E in v){const M=v[E];for(let x=0,y=M.length;x<y;x++)e.update(M[x],o.ARRAY_BUFFER)}}function d(_){const g=[],v=_.index,E=_.attributes.position;let M=0;if(v!==null){const R=v.array;M=v.version;for(let T=0,C=R.length;T<C;T+=3){const U=R[T+0],I=R[T+1],P=R[T+2];g.push(U,I,I,P,P,U)}}else if(E!==void 0){const R=E.array;M=E.version;for(let T=0,C=R.length/3-1;T<C;T+=3){const U=T+0,I=T+1,P=T+2;g.push(U,I,I,P,P,U)}}else return;const x=new(US(g)?GS:VS)(g,1);x.version=M;const y=a.get(_);y&&e.remove(y),a.set(_,x)}function p(_){const g=a.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&d(_)}else d(_);return a.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function o2(o,e,t,n){const r=n.isWebGL2;let a;function c(v){a=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,E){o.drawElements(a,E,u,v*f),t.update(E,a,1)}function _(v,E,M){if(M===0)return;let x,y;if(r)x=o,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,E,u,v*f,M),t.update(E,a,M)}function g(v,E,M){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<M;y++)this.render(v[y]/f,E[y]);else{x.multiDrawElementsWEBGL(a,E,0,u,v,0,M);let y=0;for(let R=0;R<M;R++)y+=E[R];t.update(y,a,1)}}this.setMode=c,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=g}function a2(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function l2(o,e){return o[0]-e[0]}function u2(o,e){return Math.abs(e[1])-Math.abs(o[1])}function c2(o,e,t){const n={},r=new Float32Array(8),a=new WeakMap,c=new un,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function f(d,p,_){const g=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=E!==void 0?E.length:0;let x=a.get(p);if(x===void 0||x.count!==M){let j=function(){he.dispose(),a.delete(p),p.removeEventListener("dispose",j)};var v=j;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,U=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],W=p.morphAttributes.color||[];let A=0;T===!0&&(A=1),C===!0&&(A=2),U===!0&&(A=3);let b=p.attributes.position.count*A,te=1;b>e.maxTextureSize&&(te=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Y=new Float32Array(b*te*4*M),he=new kS(Y,b,te,M);he.type=Zs,he.needsUpdate=!0;const z=A*4;for(let J=0;J<M;J++){const Z=I[J],B=P[J],q=W[J],D=b*te*4*J;for(let F=0;F<Z.count;F++){const G=F*z;T===!0&&(c.fromBufferAttribute(Z,F),Y[D+G+0]=c.x,Y[D+G+1]=c.y,Y[D+G+2]=c.z,Y[D+G+3]=0),C===!0&&(c.fromBufferAttribute(B,F),Y[D+G+4]=c.x,Y[D+G+5]=c.y,Y[D+G+6]=c.z,Y[D+G+7]=0),U===!0&&(c.fromBufferAttribute(q,F),Y[D+G+8]=c.x,Y[D+G+9]=c.y,Y[D+G+10]=c.z,Y[D+G+11]=q.itemSize===4?c.w:1)}}x={count:M,texture:he,size:new zt(b,te)},a.set(p,x),p.addEventListener("dispose",j)}let y=0;for(let T=0;T<g.length;T++)y+=g[T];const R=p.morphTargetsRelative?1:1-y;_.getUniforms().setValue(o,"morphTargetBaseInfluence",R),_.getUniforms().setValue(o,"morphTargetInfluences",g),_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const E=g===void 0?0:g.length;let M=n[p.id];if(M===void 0||M.length!==E){M=[];for(let C=0;C<E;C++)M[C]=[C,0];n[p.id]=M}for(let C=0;C<E;C++){const U=M[C];U[0]=C,U[1]=g[C]}M.sort(u2);for(let C=0;C<8;C++)C<E&&M[C][1]?(u[C][0]=M[C][0],u[C][1]=M[C][1]):(u[C][0]=Number.MAX_SAFE_INTEGER,u[C][1]=0);u.sort(l2);const x=p.morphAttributes.position,y=p.morphAttributes.normal;let R=0;for(let C=0;C<8;C++){const U=u[C],I=U[0],P=U[1];I!==Number.MAX_SAFE_INTEGER&&P?(x&&p.getAttribute("morphTarget"+C)!==x[I]&&p.setAttribute("morphTarget"+C,x[I]),y&&p.getAttribute("morphNormal"+C)!==y[I]&&p.setAttribute("morphNormal"+C,y[I]),r[C]=P,R+=P):(x&&p.hasAttribute("morphTarget"+C)===!0&&p.deleteAttribute("morphTarget"+C),y&&p.hasAttribute("morphNormal"+C)===!0&&p.deleteAttribute("morphNormal"+C),r[C]=0)}const T=p.morphTargetsRelative?1:1-R;_.getUniforms().setValue(o,"morphTargetBaseInfluence",T),_.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:f}}function f2(o,e,t,n){let r=new WeakMap;function a(f){const d=n.render.frame,p=f.geometry,_=e.get(f,p);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return _}function c(){r=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}class qS extends Zi{constructor(e,t,n,r,a,c,u,f,d,p){if(p=p!==void 0?p:qo,p!==qo&&p!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===qo&&(n=Ks),n===void 0&&p===pl&&(n=jo),super(null,r,a,c,u,f,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:gi,this.minFilter=f!==void 0?f:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $S=new Zi,KS=new qS(1,1);KS.compareFunction=IS;const ZS=new kS,QS=new qw,JS=new YS,Cx=[],bx=[],Px=new Float32Array(16),Lx=new Float32Array(9),Dx=new Float32Array(4);function vl(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Cx[r];if(a===void 0&&(a=new Float32Array(r),Cx[r]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function Nn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function In(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function gh(o,e){let t=bx[e];t===void 0&&(t=new Int32Array(e),bx[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function h2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function d2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2fv(this.addr,e),In(t,e)}}function p2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;o.uniform3fv(this.addr,e),In(t,e)}}function m2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4fv(this.addr,e),In(t,e)}}function g2(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,n))return;Dx.set(n),o.uniformMatrix2fv(this.addr,!1,Dx),In(t,n)}}function _2(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,n))return;Lx.set(n),o.uniformMatrix3fv(this.addr,!1,Lx),In(t,n)}}function v2(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,n))return;Px.set(n),o.uniformMatrix4fv(this.addr,!1,Px),In(t,n)}}function x2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function y2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2iv(this.addr,e),In(t,e)}}function S2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;o.uniform3iv(this.addr,e),In(t,e)}}function M2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4iv(this.addr,e),In(t,e)}}function E2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function T2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;o.uniform2uiv(this.addr,e),In(t,e)}}function w2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;o.uniform3uiv(this.addr,e),In(t,e)}}function A2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;o.uniform4uiv(this.addr,e),In(t,e)}}function R2(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);const a=this.type===o.SAMPLER_2D_SHADOW?KS:$S;t.setTexture2D(e||a,r)}function C2(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||QS,r)}function b2(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||JS,r)}function P2(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ZS,r)}function L2(o){switch(o){case 5126:return h2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return _2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return E2;case 36294:return T2;case 36295:return w2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return P2}}function D2(o,e){o.uniform1fv(this.addr,e)}function N2(o,e){const t=vl(e,this.size,2);o.uniform2fv(this.addr,t)}function I2(o,e){const t=vl(e,this.size,3);o.uniform3fv(this.addr,t)}function U2(o,e){const t=vl(e,this.size,4);o.uniform4fv(this.addr,t)}function O2(o,e){const t=vl(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function F2(o,e){const t=vl(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function k2(o,e){const t=vl(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function z2(o,e){o.uniform1iv(this.addr,e)}function B2(o,e){o.uniform2iv(this.addr,e)}function H2(o,e){o.uniform3iv(this.addr,e)}function V2(o,e){o.uniform4iv(this.addr,e)}function G2(o,e){o.uniform1uiv(this.addr,e)}function W2(o,e){o.uniform2uiv(this.addr,e)}function X2(o,e){o.uniform3uiv(this.addr,e)}function Y2(o,e){o.uniform4uiv(this.addr,e)}function j2(o,e,t){const n=this.cache,r=e.length,a=gh(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),In(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||$S,a[c])}function q2(o,e,t){const n=this.cache,r=e.length,a=gh(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),In(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||QS,a[c])}function $2(o,e,t){const n=this.cache,r=e.length,a=gh(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),In(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||JS,a[c])}function K2(o,e,t){const n=this.cache,r=e.length,a=gh(t,r);Nn(n,a)||(o.uniform1iv(this.addr,a),In(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||ZS,a[c])}function Z2(o){switch(o){case 5126:return D2;case 35664:return N2;case 35665:return I2;case 35666:return U2;case 35674:return O2;case 35675:return F2;case 35676:return k2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return H2;case 35669:case 35673:return V2;case 5125:return G2;case 36294:return W2;case 36295:return X2;case 36296:return Y2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return K2}}class Q2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L2(t.type)}}class J2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z2(t.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const Gp=/(\w+)(\])?(\[|\.)?/g;function Nx(o,e){o.seq.push(e),o.map[e.id]=e}function tb(o,e,t){const n=o.name,r=n.length;for(Gp.lastIndex=0;;){const a=Gp.exec(n),c=Gp.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===r){Nx(t,d===void 0?new Q2(u,o,e):new J2(u,o,e));break}else{let _=t.map[u];_===void 0&&(_=new eb(u),Nx(t,_)),t=_}}}class Vf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);tb(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=n[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Ix(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const nb=37297;let ib=0;function rb(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function sb(o){const e=Kt.getPrimaries(Kt.workingColorSpace),t=Kt.getPrimaries(o);let n;switch(e===t?n="":e===rh&&t===ih?n="LinearDisplayP3ToLinearSRGB":e===ih&&t===rh&&(n="LinearSRGBToLinearDisplayP3"),o){case gs:case dh:return[n,"LinearTransferOETF"];case Xn:case ig:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Ux(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rb(o.getShaderSource(e),c)}else return r}function ob(o,e){const t=sb(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ab(o,e){let t;switch(e){case _w:t="Linear";break;case vw:t="Reinhard";break;case xw:t="OptimizedCineon";break;case yw:t="ACESFilmic";break;case Mw:t="AgX";break;case Sw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ka).join(`
`)}function ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ka).join(`
`)}function cb(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fb(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Ka(o){return o!==""}function Ox(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(o){return o.replace(hb,pb)}const db=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pb(o,e){let t=wt[e];if(t===void 0){const n=db.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Am(t)}const mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(mb,gb)}function gb(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function zx(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _b(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===MS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===XT?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function vb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hl:case dl:e="ENVMAP_TYPE_CUBE";break;case hh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case dl:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ES:e="ENVMAP_BLENDING_MULTIPLY";break;case mw:e="ENVMAP_BLENDING_MIX";break;case gw:e="ENVMAP_BLENDING_ADD";break}return e}function Sb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mb(o,e,t,n){const r=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=_b(t),d=vb(t),p=xb(t),_=yb(t),g=Sb(t),v=t.isWebGL2?"":lb(t),E=ub(t),M=cb(a),x=r.createProgram();let y,R,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ka).join(`
`),y.length>0&&(y+=`
`),R=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ka).join(`
`),R.length>0&&(R+=`
`)):(y=[zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),R=[v,zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==no?"#define TONE_MAPPING":"",t.toneMapping!==no?wt.tonemapping_pars_fragment:"",t.toneMapping!==no?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,ob("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),c=Am(c),c=Ox(c,t),c=Fx(c,t),u=Am(u),u=Ox(u,t),u=Fx(u,t),c=kx(c),u=kx(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const C=T+y+c,U=T+R+u,I=Ix(r,r.VERTEX_SHADER,C),P=Ix(r,r.FRAGMENT_SHADER,U);r.attachShader(x,I),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function W(Y){if(o.debug.checkShaderErrors){const he=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(P).trim();let J=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,x,I,P);else{const B=Ux(r,I,"vertex"),q=Ux(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+B+`
`+q)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(z===""||j==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:J,programLog:he,vertexShader:{log:z,prefix:y},fragmentShader:{log:j,prefix:R}})}r.deleteShader(I),r.deleteShader(P),A=new Vf(r,x),b=fb(r,x)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let b;this.getAttributes=function(){return b===void 0&&W(this),b};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=r.getProgramParameter(x,nb)),te},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ib++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let Eb=0;class Tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wb(e),t.set(e,n)),n}}class wb{constructor(e){this.id=Eb++,this.code=e,this.usedTimes=0}}function Ab(o,e,t,n,r,a,c){const u=new BS,f=new Tb,d=[],p=r.isWebGL2,_=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return A===0?"uv":`uv${A}`}function x(A,b,te,Y,he){const z=Y.fog,j=he.geometry,J=A.isMeshStandardMaterial?Y.environment:null,Z=(A.isMeshStandardMaterial?t:e).get(A.envMap||J),B=Z&&Z.mapping===hh?Z.image.height:null,q=E[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const D=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,F=D!==void 0?D.length:0;let G=0;j.morphAttributes.position!==void 0&&(G=1),j.morphAttributes.normal!==void 0&&(G=2),j.morphAttributes.color!==void 0&&(G=3);let $,ee,ce,de;if(q){const Ve=Br[q];$=Ve.vertexShader,ee=Ve.fragmentShader}else $=A.vertexShader,ee=A.fragmentShader,f.update(A),ce=f.getVertexShaderID(A),de=f.getFragmentShaderID(A);const me=o.getRenderTarget(),Me=he.isInstancedMesh===!0,Pe=he.isBatchedMesh===!0,ze=!!A.map,st=!!A.matcap,ie=!!Z,ut=!!A.aoMap,Ue=!!A.lightMap,Je=!!A.bumpMap,Fe=!!A.normalMap,se=!!A.displacementMap,ct=!!A.emissiveMap,O=!!A.metalnessMap,L=!!A.roughnessMap,Q=A.anisotropy>0,_e=A.clearcoat>0,ge=A.iridescence>0,ye=A.sheen>0,Oe=A.transmission>0,De=Q&&!!A.anisotropyMap,Ce=_e&&!!A.clearcoatMap,je=_e&&!!A.clearcoatNormalMap,ft=_e&&!!A.clearcoatRoughnessMap,pe=ge&&!!A.iridescenceMap,Tt=ge&&!!A.iridescenceThicknessMap,et=ye&&!!A.sheenColorMap,mt=ye&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Be=!!A.specularColorMap,gt=!!A.specularIntensityMap,Et=Oe&&!!A.transmissionMap,Ot=Oe&&!!A.thicknessMap,Ne=!!A.gradientMap,we=!!A.alphaMap,H=A.alphaTest>0,Te=!!A.alphaHash,Re=!!A.extensions,ot=!!j.attributes.uv1,rt=!!j.attributes.uv2,At=!!j.attributes.uv3;let It=no;return A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(It=o.toneMapping),{isWebGL2:p,shaderID:q,shaderType:A.type,shaderName:A.name,vertexShader:$,fragmentShader:ee,defines:A.defines,customVertexShaderID:ce,customFragmentShaderID:de,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Pe,instancing:Me,instancingColor:Me&&he.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gs,map:ze,matcap:st,envMap:ie,envMapMode:ie&&Z.mapping,envMapCubeUVHeight:B,aoMap:ut,lightMap:Ue,bumpMap:Je,normalMap:Fe,displacementMap:g&&se,emissiveMap:ct,normalMapObjectSpace:Fe&&A.normalMapType===Iw,normalMapTangentSpace:Fe&&A.normalMapType===NS,metalnessMap:O,roughnessMap:L,anisotropy:Q,anisotropyMap:De,clearcoat:_e,clearcoatMap:Ce,clearcoatNormalMap:je,clearcoatRoughnessMap:ft,iridescence:ge,iridescenceMap:pe,iridescenceThicknessMap:Tt,sheen:ye,sheenColorMap:et,sheenRoughnessMap:mt,specularMap:qe,specularColorMap:Be,specularIntensityMap:gt,transmission:Oe,transmissionMap:Et,thicknessMap:Ot,gradientMap:Ne,opaque:A.transparent===!1&&A.blending===rl,alphaMap:we,alphaTest:H,alphaHash:Te,combine:A.combine,mapUv:ze&&M(A.map.channel),aoMapUv:ut&&M(A.aoMap.channel),lightMapUv:Ue&&M(A.lightMap.channel),bumpMapUv:Je&&M(A.bumpMap.channel),normalMapUv:Fe&&M(A.normalMap.channel),displacementMapUv:se&&M(A.displacementMap.channel),emissiveMapUv:ct&&M(A.emissiveMap.channel),metalnessMapUv:O&&M(A.metalnessMap.channel),roughnessMapUv:L&&M(A.roughnessMap.channel),anisotropyMapUv:De&&M(A.anisotropyMap.channel),clearcoatMapUv:Ce&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:je&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:mt&&M(A.sheenRoughnessMap.channel),specularMapUv:qe&&M(A.specularMap.channel),specularColorMapUv:Be&&M(A.specularColorMap.channel),specularIntensityMapUv:gt&&M(A.specularIntensityMap.channel),transmissionMapUv:Et&&M(A.transmissionMap.channel),thicknessMapUv:Ot&&M(A.thicknessMap.channel),alphaMapUv:we&&M(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Fe||Q),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:ot,vertexUv2s:rt,vertexUv3s:At,pointsUvs:he.isPoints===!0&&!!j.attributes.uv&&(ze||we),fog:!!z,useFog:A.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:he.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&te.length>0,shadowMapType:o.shadowMap.type,toneMapping:It,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ze&&A.map.isVideoTexture===!0&&Kt.getTransfer(A.map.colorSpace)===sn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Cr,flipSided:A.side===oi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:Re&&A.extensions.derivatives===!0,extensionFragDepth:Re&&A.extensions.fragDepth===!0,extensionDrawBuffers:Re&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&A.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function y(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const te in A.defines)b.push(te),b.push(A.defines[te]);return A.isRawShaderMaterial===!1&&(R(b,A),T(b,A),b.push(o.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function R(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function T(A,b){u.disableAll(),b.isWebGL2&&u.enable(0),b.supportsVertexTextures&&u.enable(1),b.instancing&&u.enable(2),b.instancingColor&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),A.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.skinning&&u.enable(4),b.morphTargets&&u.enable(5),b.morphNormals&&u.enable(6),b.morphColors&&u.enable(7),b.premultipliedAlpha&&u.enable(8),b.shadowMapEnabled&&u.enable(9),b.useLegacyLights&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),A.push(u.mask)}function C(A){const b=E[A.type];let te;if(b){const Y=Br[b];te=aA.clone(Y.uniforms)}else te=A.uniforms;return te}function U(A,b){let te;for(let Y=0,he=d.length;Y<he;Y++){const z=d[Y];if(z.cacheKey===b){te=z,++te.usedTimes;break}}return te===void 0&&(te=new Mb(o,b,A,a),d.push(te)),te}function I(A){if(--A.usedTimes===0){const b=d.indexOf(A);d[b]=d[d.length-1],d.pop(),A.destroy()}}function P(A){f.remove(A)}function W(){f.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:C,acquireProgram:U,releaseProgram:I,releaseShaderCache:P,programs:d,dispose:W}}function Rb(){let o=new WeakMap;function e(a){let c=o.get(a);return c===void 0&&(c={},o.set(a,c)),c}function t(a){o.delete(a)}function n(a,c,u){o.get(a)[c]=u}function r(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Cb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hx(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(_,g,v,E,M,x){let y=o[e];return y===void 0?(y={id:_.id,object:_,geometry:g,material:v,groupOrder:E,renderOrder:_.renderOrder,z:M,group:x},o[e]=y):(y.id=_.id,y.object=_,y.geometry=g,y.material=v,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=M,y.group=x),e++,y}function u(_,g,v,E,M,x){const y=c(_,g,v,E,M,x);v.transmission>0?n.push(y):v.transparent===!0?r.push(y):t.push(y)}function f(_,g,v,E,M,x){const y=c(_,g,v,E,M,x);v.transmission>0?n.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function d(_,g){t.length>1&&t.sort(_||Cb),n.length>1&&n.sort(g||Bx),r.length>1&&r.sort(g||Bx)}function p(){for(let _=e,g=o.length;_<g;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:f,finish:p,sort:d}}function bb(){let o=new WeakMap;function e(n,r){const a=o.get(n);let c;return a===void 0?(c=new Hx,o.set(n,[c])):r>=a.length?(c=new Hx,a.push(c)):c=a[r],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new kt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return o[e.id]=t,t}}}function Lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Db=0;function Nb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ib(o,e){const t=new Pb,n=Lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const a=new oe,c=new En,u=new En;function f(p,_){let g=0,v=0,E=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let M=0,x=0,y=0,R=0,T=0,C=0,U=0,I=0,P=0,W=0,A=0;p.sort(Nb);const b=_===!0?Math.PI:1;for(let Y=0,he=p.length;Y<he;Y++){const z=p[Y],j=z.color,J=z.intensity,Z=z.distance,B=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=j.r*J*b,v+=j.g*J*b,E+=j.b*J*b;else if(z.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(z.sh.coefficients[q],J);A++}else if(z.isDirectionalLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*b),z.castShadow){const D=z.shadow,F=n.get(z);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,r.directionalShadow[M]=F,r.directionalShadowMap[M]=B,r.directionalShadowMatrix[M]=z.shadow.matrix,C++}r.directional[M]=q,M++}else if(z.isSpotLight){const q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(j).multiplyScalar(J*b),q.distance=Z,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,r.spot[y]=q;const D=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,D.updateMatrices(z),z.castShadow&&W++),r.spotLightMatrix[y]=D.matrix,z.castShadow){const F=n.get(z);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,r.spotShadow[y]=F,r.spotShadowMap[y]=B,I++}y++}else if(z.isRectAreaLight){const q=t.get(z);q.color.copy(j).multiplyScalar(J),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),r.rectArea[R]=q,R++}else if(z.isPointLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*b),q.distance=z.distance,q.decay=z.decay,z.castShadow){const D=z.shadow,F=n.get(z);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,r.pointShadow[x]=F,r.pointShadowMap[x]=B,r.pointShadowMatrix[x]=z.shadow.matrix,U++}r.point[x]=q,x++}else if(z.isHemisphereLight){const q=t.get(z);q.skyColor.copy(z.color).multiplyScalar(J*b),q.groundColor.copy(z.groundColor).multiplyScalar(J*b),r.hemi[T]=q,T++}}R>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=E;const te=r.hash;(te.directionalLength!==M||te.pointLength!==x||te.spotLength!==y||te.rectAreaLength!==R||te.hemiLength!==T||te.numDirectionalShadows!==C||te.numPointShadows!==U||te.numSpotShadows!==I||te.numSpotMaps!==P||te.numLightProbes!==A)&&(r.directional.length=M,r.spot.length=y,r.rectArea.length=R,r.point.length=x,r.hemi.length=T,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=I+P-W,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=A,te.directionalLength=M,te.pointLength=x,te.spotLength=y,te.rectAreaLength=R,te.hemiLength=T,te.numDirectionalShadows=C,te.numPointShadows=U,te.numSpotShadows=I,te.numSpotMaps=P,te.numLightProbes=A,r.version=Db++)}function d(p,_){let g=0,v=0,E=0,M=0,x=0;const y=_.matrixWorldInverse;for(let R=0,T=p.length;R<T;R++){const C=p[R];if(C.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(y),g++}else if(C.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(y),E++}else if(C.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),u.identity(),c.copy(C.matrixWorld),c.premultiply(y),u.extractRotation(c),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const U=r.hemi[x];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),x++}}}return{setup:f,setupView:d,state:r}}function Vx(o,e){const t=new Ib(o,e),n=[],r=[];function a(){n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function f(_){t.setup(n,_)}function d(_){t.setupView(n,_)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:f,setupLightsView:d,pushLight:c,pushShadow:u}}function Ub(o,e){let t=new WeakMap;function n(a,c=0){const u=t.get(a);let f;return u===void 0?(f=new Vx(o,e),t.set(a,[f])):c>=u.length?(f=new Vx(o,e),u.push(f)):f=u[c],f}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ob extends _l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fb extends _l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bb(o,e,t){let n=new rg;const r=new zt,a=new zt,c=new un,u=new Ob({depthPacking:Nw}),f=new Fb,d={},p=t.maxTextureSize,_={[lo]:oi,[oi]:lo,[Cr]:Cr},g=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:kb,fragmentShader:zb}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new Dr;E.setAttribute("position",new Lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Wn(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=MS;let y=this.type;this.render=function(I,P,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const A=o.getRenderTarget(),b=o.getActiveCubeFace(),te=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(to),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const he=y!==os&&this.type===os,z=y===os&&this.type!==os;for(let j=0,J=I.length;j<J;j++){const Z=I[j],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const q=B.getFrameExtents();if(r.multiply(q),a.copy(B.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/q.x),r.x=a.x*q.x,B.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/q.y),r.y=a.y*q.y,B.mapSize.y=a.y)),B.map===null||he===!0||z===!0){const F=this.type!==os?{minFilter:gi,magFilter:gi}:{};B.map!==null&&B.map.dispose(),B.map=new Jo(r.x,r.y,F),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const D=B.getViewportCount();for(let F=0;F<D;F++){const G=B.getViewport(F);c.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),Y.viewport(c),B.updateMatrices(Z,F),n=B.getFrustum(),C(P,W,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===os&&R(B,W),B.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(A,b,te)};function R(I,P){const W=e.update(M);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,v.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Jo(r.x,r.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,W,g,M,null),v.uniforms.shadow_pass.value=I.mapPass.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,W,v,M,null)}function T(I,P,W,A){let b=null;const te=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(te!==void 0)b=te;else if(b=W.isPointLight===!0?f:u,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=b.uuid,he=P.uuid;let z=d[Y];z===void 0&&(z={},d[Y]=z);let j=z[he];j===void 0&&(j=b.clone(),z[he]=j,P.addEventListener("dispose",U)),b=j}if(b.visible=P.visible,b.wireframe=P.wireframe,A===os?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:_[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=o.properties.get(b);Y.light=W}return b}function C(I,P,W,A,b){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===os)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const he=e.update(I),z=I.material;if(Array.isArray(z)){const j=he.groups;for(let J=0,Z=j.length;J<Z;J++){const B=j[J],q=z[B.materialIndex];if(q&&q.visible){const D=T(I,q,A,b);I.onBeforeShadow(o,I,P,W,he,D,B),o.renderBufferDirect(W,null,he,D,I,B),I.onAfterShadow(o,I,P,W,he,D,B)}}}else if(z.visible){const j=T(I,z,A,b);I.onBeforeShadow(o,I,P,W,he,j,null),o.renderBufferDirect(W,null,he,j,I,null),I.onAfterShadow(o,I,P,W,he,j,null)}}const Y=I.children;for(let he=0,z=Y.length;he<z;he++)C(Y[he],P,W,A,b)}function U(I){I.target.removeEventListener("dispose",U);for(const W in d){const A=d[W],b=I.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function Hb(o,e,t){const n=t.isWebGL2;function r(){let H=!1;const Te=new un;let Re=null;const ot=new un(0,0,0,0);return{setMask:function(rt){Re!==rt&&!H&&(o.colorMask(rt,rt,rt,rt),Re=rt)},setLocked:function(rt){H=rt},setClear:function(rt,At,It,We,Ve){Ve===!0&&(rt*=We,At*=We,It*=We),Te.set(rt,At,It,We),ot.equals(Te)===!1&&(o.clearColor(rt,At,It,We),ot.copy(Te))},reset:function(){H=!1,Re=null,ot.set(-1,0,0,0)}}}function a(){let H=!1,Te=null,Re=null,ot=null;return{setTest:function(rt){rt?Pe(o.DEPTH_TEST):ze(o.DEPTH_TEST)},setMask:function(rt){Te!==rt&&!H&&(o.depthMask(rt),Te=rt)},setFunc:function(rt){if(Re!==rt){switch(rt){case lw:o.depthFunc(o.NEVER);break;case uw:o.depthFunc(o.ALWAYS);break;case cw:o.depthFunc(o.LESS);break;case th:o.depthFunc(o.LEQUAL);break;case fw:o.depthFunc(o.EQUAL);break;case hw:o.depthFunc(o.GEQUAL);break;case dw:o.depthFunc(o.GREATER);break;case pw:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=rt}},setLocked:function(rt){H=rt},setClear:function(rt){ot!==rt&&(o.clearDepth(rt),ot=rt)},reset:function(){H=!1,Te=null,Re=null,ot=null}}}function c(){let H=!1,Te=null,Re=null,ot=null,rt=null,At=null,It=null,We=null,Ve=null;return{setTest:function($e){H||($e?Pe(o.STENCIL_TEST):ze(o.STENCIL_TEST))},setMask:function($e){Te!==$e&&!H&&(o.stencilMask($e),Te=$e)},setFunc:function($e,Ee,tt){(Re!==$e||ot!==Ee||rt!==tt)&&(o.stencilFunc($e,Ee,tt),Re=$e,ot=Ee,rt=tt)},setOp:function($e,Ee,tt){(At!==$e||It!==Ee||We!==tt)&&(o.stencilOp($e,Ee,tt),At=$e,It=Ee,We=tt)},setLocked:function($e){H=$e},setClear:function($e){Ve!==$e&&(o.clearStencil($e),Ve=$e)},reset:function(){H=!1,Te=null,Re=null,ot=null,rt=null,At=null,It=null,We=null,Ve=null}}}const u=new r,f=new a,d=new c,p=new WeakMap,_=new WeakMap;let g={},v={},E=new WeakMap,M=[],x=null,y=!1,R=null,T=null,C=null,U=null,I=null,P=null,W=null,A=new kt(0,0,0),b=0,te=!1,Y=null,he=null,z=null,j=null,J=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const D=o.getParameter(o.VERSION);D.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(D)[1]),B=q>=1):D.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),B=q>=2);let F=null,G={};const $=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),ce=new un().fromArray($),de=new un().fromArray(ee);function me(H,Te,Re,ot){const rt=new Uint8Array(4),At=o.createTexture();o.bindTexture(H,At),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Re;It++)n&&(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)?o.texImage3D(Te,0,o.RGBA,1,1,ot,0,o.RGBA,o.UNSIGNED_BYTE,rt):o.texImage2D(Te+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,rt);return At}const Me={};Me[o.TEXTURE_2D]=me(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=me(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[o.TEXTURE_2D_ARRAY]=me(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=me(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Pe(o.DEPTH_TEST),f.setFunc(th),ct(!1),O(Tv),Pe(o.CULL_FACE),Fe(to);function Pe(H){g[H]!==!0&&(o.enable(H),g[H]=!0)}function ze(H){g[H]!==!1&&(o.disable(H),g[H]=!1)}function st(H,Te){return v[H]!==Te?(o.bindFramebuffer(H,Te),v[H]=Te,n&&(H===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Te),H===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Te)),!0):!1}function ie(H,Te){let Re=M,ot=!1;if(H)if(Re=E.get(Te),Re===void 0&&(Re=[],E.set(Te,Re)),H.isWebGLMultipleRenderTargets){const rt=H.texture;if(Re.length!==rt.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let At=0,It=rt.length;At<It;At++)Re[At]=o.COLOR_ATTACHMENT0+At;Re.length=rt.length,ot=!0}}else Re[0]!==o.COLOR_ATTACHMENT0&&(Re[0]=o.COLOR_ATTACHMENT0,ot=!0);else Re[0]!==o.BACK&&(Re[0]=o.BACK,ot=!0);ot&&(t.isWebGL2?o.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function ut(H){return x!==H?(o.useProgram(H),x=H,!0):!1}const Ue={[Uo]:o.FUNC_ADD,[jT]:o.FUNC_SUBTRACT,[qT]:o.FUNC_REVERSE_SUBTRACT};if(n)Ue[Rv]=o.MIN,Ue[Cv]=o.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Ue[Rv]=H.MIN_EXT,Ue[Cv]=H.MAX_EXT)}const Je={[$T]:o.ZERO,[KT]:o.ONE,[ZT]:o.SRC_COLOR,[_m]:o.SRC_ALPHA,[iw]:o.SRC_ALPHA_SATURATE,[tw]:o.DST_COLOR,[JT]:o.DST_ALPHA,[QT]:o.ONE_MINUS_SRC_COLOR,[vm]:o.ONE_MINUS_SRC_ALPHA,[nw]:o.ONE_MINUS_DST_COLOR,[ew]:o.ONE_MINUS_DST_ALPHA,[rw]:o.CONSTANT_COLOR,[sw]:o.ONE_MINUS_CONSTANT_COLOR,[ow]:o.CONSTANT_ALPHA,[aw]:o.ONE_MINUS_CONSTANT_ALPHA};function Fe(H,Te,Re,ot,rt,At,It,We,Ve,$e){if(H===to){y===!0&&(ze(o.BLEND),y=!1);return}if(y===!1&&(Pe(o.BLEND),y=!0),H!==YT){if(H!==R||$e!==te){if((T!==Uo||I!==Uo)&&(o.blendEquation(o.FUNC_ADD),T=Uo,I=Uo),$e)switch(H){case rl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eh:o.blendFunc(o.ONE,o.ONE);break;case wv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case wv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}C=null,U=null,P=null,W=null,A.set(0,0,0),b=0,R=H,te=$e}return}rt=rt||Te,At=At||Re,It=It||ot,(Te!==T||rt!==I)&&(o.blendEquationSeparate(Ue[Te],Ue[rt]),T=Te,I=rt),(Re!==C||ot!==U||At!==P||It!==W)&&(o.blendFuncSeparate(Je[Re],Je[ot],Je[At],Je[It]),C=Re,U=ot,P=At,W=It),(We.equals(A)===!1||Ve!==b)&&(o.blendColor(We.r,We.g,We.b,Ve),A.copy(We),b=Ve),R=H,te=!1}function se(H,Te){H.side===Cr?ze(o.CULL_FACE):Pe(o.CULL_FACE);let Re=H.side===oi;Te&&(Re=!Re),ct(Re),H.blending===rl&&H.transparent===!1?Fe(to):Fe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),u.setMask(H.colorWrite);const ot=H.stencilWrite;d.setTest(ot),ot&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Pe(o.SAMPLE_ALPHA_TO_COVERAGE):ze(o.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){Y!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),Y=H)}function O(H){H!==GT?(Pe(o.CULL_FACE),H!==he&&(H===Tv?o.cullFace(o.BACK):H===WT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ze(o.CULL_FACE),he=H}function L(H){H!==z&&(B&&o.lineWidth(H),z=H)}function Q(H,Te,Re){H?(Pe(o.POLYGON_OFFSET_FILL),(j!==Te||J!==Re)&&(o.polygonOffset(Te,Re),j=Te,J=Re)):ze(o.POLYGON_OFFSET_FILL)}function _e(H){H?Pe(o.SCISSOR_TEST):ze(o.SCISSOR_TEST)}function ge(H){H===void 0&&(H=o.TEXTURE0+Z-1),F!==H&&(o.activeTexture(H),F=H)}function ye(H,Te,Re){Re===void 0&&(F===null?Re=o.TEXTURE0+Z-1:Re=F);let ot=G[Re];ot===void 0&&(ot={type:void 0,texture:void 0},G[Re]=ot),(ot.type!==H||ot.texture!==Te)&&(F!==Re&&(o.activeTexture(Re),F=Re),o.bindTexture(H,Te||Me[H]),ot.type=H,ot.texture=Te)}function Oe(){const H=G[F];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function De(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(H){ce.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ce.copy(H))}function Et(H){de.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),de.copy(H))}function Ot(H,Te){let Re=_.get(Te);Re===void 0&&(Re=new WeakMap,_.set(Te,Re));let ot=Re.get(H);ot===void 0&&(ot=o.getUniformBlockIndex(Te,H.name),Re.set(H,ot))}function Ne(H,Te){const ot=_.get(Te).get(H);p.get(Te)!==ot&&(o.uniformBlockBinding(Te,ot,H.__bindingPointIndex),p.set(Te,ot))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},F=null,G={},v={},E=new WeakMap,M=[],x=null,y=!1,R=null,T=null,C=null,U=null,I=null,P=null,W=null,A=new kt(0,0,0),b=0,te=!1,Y=null,he=null,z=null,j=null,J=null,ce.set(0,0,o.canvas.width,o.canvas.height),de.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Pe,disable:ze,bindFramebuffer:st,drawBuffers:ie,useProgram:ut,setBlending:Fe,setMaterial:se,setFlipSided:ct,setCullFace:O,setLineWidth:L,setPolygonOffset:Q,setScissorTest:_e,activeTexture:ge,bindTexture:ye,unbindTexture:Oe,compressedTexImage2D:De,compressedTexImage3D:Ce,texImage2D:qe,texImage3D:Be,updateUBOMapping:Ot,uniformBlockBinding:Ne,texStorage2D:et,texStorage3D:mt,texSubImage2D:je,texSubImage3D:ft,compressedTexSubImage2D:pe,compressedTexSubImage3D:Tt,scissor:gt,viewport:Et,reset:we}}function Vb(o,e,t,n,r,a,c){const u=r.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,L){return v?new OffscreenCanvas(O,L):oh("canvas")}function M(O,L,Q,_e){let ge=1;if((O.width>_e||O.height>_e)&&(ge=_e/Math.max(O.width,O.height)),ge<1||L===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const ye=L?wm:Math.floor,Oe=ye(ge*O.width),De=ye(ge*O.height);_===void 0&&(_=E(Oe,De));const Ce=Q?E(Oe,De):_;return Ce.width=Oe,Ce.height=De,Ce.getContext("2d").drawImage(O,0,0,Oe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Oe+"x"+De+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function x(O){return rx(O.width)&&rx(O.height)}function y(O){return u?!1:O.wrapS!==br||O.wrapT!==br||O.minFilter!==gi&&O.minFilter!==hr}function R(O,L){return O.generateMipmaps&&L&&O.minFilter!==gi&&O.minFilter!==hr}function T(O){o.generateMipmap(O)}function C(O,L,Q,_e,ge=!1){if(u===!1)return L;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ye=L;if(L===o.RED&&(Q===o.FLOAT&&(ye=o.R32F),Q===o.HALF_FLOAT&&(ye=o.R16F),Q===o.UNSIGNED_BYTE&&(ye=o.R8)),L===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ye=o.R8UI),Q===o.UNSIGNED_SHORT&&(ye=o.R16UI),Q===o.UNSIGNED_INT&&(ye=o.R32UI),Q===o.BYTE&&(ye=o.R8I),Q===o.SHORT&&(ye=o.R16I),Q===o.INT&&(ye=o.R32I)),L===o.RG&&(Q===o.FLOAT&&(ye=o.RG32F),Q===o.HALF_FLOAT&&(ye=o.RG16F),Q===o.UNSIGNED_BYTE&&(ye=o.RG8)),L===o.RGBA){const Oe=ge?nh:Kt.getTransfer(_e);Q===o.FLOAT&&(ye=o.RGBA32F),Q===o.HALF_FLOAT&&(ye=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ye=Oe===sn?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ye=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ye=o.RGB5_A1)}return(ye===o.R16F||ye===o.R32F||ye===o.RG16F||ye===o.RG32F||ye===o.RGBA16F||ye===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function U(O,L,Q){return R(O,Q)===!0||O.isFramebufferTexture&&O.minFilter!==gi&&O.minFilter!==hr?Math.log2(Math.max(L.width,L.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?L.mipmaps.length:1}function I(O){return O===gi||O===bv||O===pp?o.NEAREST:o.LINEAR}function P(O){const L=O.target;L.removeEventListener("dispose",P),A(L),L.isVideoTexture&&p.delete(L)}function W(O){const L=O.target;L.removeEventListener("dispose",W),te(L)}function A(O){const L=n.get(O);if(L.__webglInit===void 0)return;const Q=O.source,_e=g.get(Q);if(_e){const ge=_e[L.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(O),Object.keys(_e).length===0&&g.delete(Q)}n.remove(O)}function b(O){const L=n.get(O);o.deleteTexture(L.__webglTexture);const Q=O.source,_e=g.get(Q);delete _e[L.__cacheKey],c.memory.textures--}function te(O){const L=O.texture,Q=n.get(O),_e=n.get(L);if(_e.__webglTexture!==void 0&&(o.deleteTexture(_e.__webglTexture),c.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(Q.__webglFramebuffer[ge]))for(let ye=0;ye<Q.__webglFramebuffer[ge].length;ye++)o.deleteFramebuffer(Q.__webglFramebuffer[ge][ye]);else o.deleteFramebuffer(Q.__webglFramebuffer[ge]);Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer[ge])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ge=0;ge<Q.__webglFramebuffer.length;ge++)o.deleteFramebuffer(Q.__webglFramebuffer[ge]);else o.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ge=0;ge<Q.__webglColorRenderbuffer.length;ge++)Q.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(Q.__webglColorRenderbuffer[ge]);Q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let ge=0,ye=L.length;ge<ye;ge++){const Oe=n.get(L[ge]);Oe.__webglTexture&&(o.deleteTexture(Oe.__webglTexture),c.memory.textures--),n.remove(L[ge])}n.remove(L),n.remove(O)}let Y=0;function he(){Y=0}function z(){const O=Y;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),Y+=1,O}function j(O){const L=[];return L.push(O.wrapS),L.push(O.wrapT),L.push(O.wrapR||0),L.push(O.magFilter),L.push(O.minFilter),L.push(O.anisotropy),L.push(O.internalFormat),L.push(O.format),L.push(O.type),L.push(O.generateMipmaps),L.push(O.premultiplyAlpha),L.push(O.flipY),L.push(O.unpackAlignment),L.push(O.colorSpace),L.join()}function J(O,L){const Q=n.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Q,O,L);return}}t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+L)}function Z(O,L){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){ce(Q,O,L);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+L)}function B(O,L){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){ce(Q,O,L);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+L)}function q(O,L){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){de(Q,O,L);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+L)}const D={[Sm]:o.REPEAT,[br]:o.CLAMP_TO_EDGE,[Mm]:o.MIRRORED_REPEAT},F={[gi]:o.NEAREST,[bv]:o.NEAREST_MIPMAP_NEAREST,[pp]:o.NEAREST_MIPMAP_LINEAR,[hr]:o.LINEAR,[Ew]:o.LINEAR_MIPMAP_NEAREST,[ku]:o.LINEAR_MIPMAP_LINEAR},G={[Uw]:o.NEVER,[Hw]:o.ALWAYS,[Ow]:o.LESS,[IS]:o.LEQUAL,[Fw]:o.EQUAL,[Bw]:o.GEQUAL,[kw]:o.GREATER,[zw]:o.NOTEQUAL};function $(O,L,Q){if(Q?(o.texParameteri(O,o.TEXTURE_WRAP_S,D[L.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,D[L.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,D[L.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,F[L.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,F[L.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(L.wrapS!==br||L.wrapT!==br)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,I(L.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,I(L.minFilter)),L.minFilter!==gi&&L.minFilter!==hr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,G[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===gi||L.minFilter!==pp&&L.minFilter!==ku||L.type===Zs&&e.has("OES_texture_float_linear")===!1||u===!1&&L.type===zu&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(o.texParameterf(O,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function ee(O,L){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,L.addEventListener("dispose",P));const _e=L.source;let ge=g.get(_e);ge===void 0&&(ge={},g.set(_e,ge));const ye=j(L);if(ye!==O.__cacheKey){ge[ye]===void 0&&(ge[ye]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ge[ye].usedTimes++;const Oe=ge[O.__cacheKey];Oe!==void 0&&(ge[O.__cacheKey].usedTimes--,Oe.usedTimes===0&&b(L)),O.__cacheKey=ye,O.__webglTexture=ge[ye].texture}return Q}function ce(O,L,Q){let _e=o.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_e=o.TEXTURE_3D);const ge=ee(O,L),ye=L.source;t.bindTexture(_e,O.__webglTexture,o.TEXTURE0+Q);const Oe=n.get(ye);if(ye.version!==Oe.__version||ge===!0){t.activeTexture(o.TEXTURE0+Q);const De=Kt.getPrimaries(Kt.workingColorSpace),Ce=L.colorSpace===dr?null:Kt.getPrimaries(L.colorSpace),je=L.colorSpace===dr||De===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const ft=y(L)&&x(L.image)===!1;let pe=M(L.image,ft,!1,r.maxTextureSize);pe=ct(L,pe);const Tt=x(pe)||u,et=a.convert(L.format,L.colorSpace);let mt=a.convert(L.type),qe=C(L.internalFormat,et,mt,L.colorSpace,L.isVideoTexture);$(_e,L,Tt);let Be;const gt=L.mipmaps,Et=u&&L.isVideoTexture!==!0&&qe!==LS,Ot=Oe.__version===void 0||ge===!0,Ne=U(L,pe,Tt);if(L.isDepthTexture)qe=o.DEPTH_COMPONENT,u?L.type===Zs?qe=o.DEPTH_COMPONENT32F:L.type===Ks?qe=o.DEPTH_COMPONENT24:L.type===jo?qe=o.DEPTH24_STENCIL8:qe=o.DEPTH_COMPONENT16:L.type===Zs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===qo&&qe===o.DEPTH_COMPONENT&&L.type!==ng&&L.type!==Ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Ks,mt=a.convert(L.type)),L.format===pl&&qe===o.DEPTH_COMPONENT&&(qe=o.DEPTH_STENCIL,L.type!==jo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=jo,mt=a.convert(L.type))),Ot&&(Et?t.texStorage2D(o.TEXTURE_2D,1,qe,pe.width,pe.height):t.texImage2D(o.TEXTURE_2D,0,qe,pe.width,pe.height,0,et,mt,null));else if(L.isDataTexture)if(gt.length>0&&Tt){Et&&Ot&&t.texStorage2D(o.TEXTURE_2D,Ne,qe,gt[0].width,gt[0].height);for(let we=0,H=gt.length;we<H;we++)Be=gt[we],Et?t.texSubImage2D(o.TEXTURE_2D,we,0,0,Be.width,Be.height,et,mt,Be.data):t.texImage2D(o.TEXTURE_2D,we,qe,Be.width,Be.height,0,et,mt,Be.data);L.generateMipmaps=!1}else Et?(Ot&&t.texStorage2D(o.TEXTURE_2D,Ne,qe,pe.width,pe.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,pe.width,pe.height,et,mt,pe.data)):t.texImage2D(o.TEXTURE_2D,0,qe,pe.width,pe.height,0,et,mt,pe.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Et&&Ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,qe,gt[0].width,gt[0].height,pe.depth);for(let we=0,H=gt.length;we<H;we++)Be=gt[we],L.format!==Pr?et!==null?Et?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,pe.depth,et,Be.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,we,qe,Be.width,Be.height,pe.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?t.texSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,pe.depth,et,mt,Be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,we,qe,Be.width,Be.height,pe.depth,0,et,mt,Be.data)}else{Et&&Ot&&t.texStorage2D(o.TEXTURE_2D,Ne,qe,gt[0].width,gt[0].height);for(let we=0,H=gt.length;we<H;we++)Be=gt[we],L.format!==Pr?et!==null?Et?t.compressedTexSubImage2D(o.TEXTURE_2D,we,0,0,Be.width,Be.height,et,Be.data):t.compressedTexImage2D(o.TEXTURE_2D,we,qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?t.texSubImage2D(o.TEXTURE_2D,we,0,0,Be.width,Be.height,et,mt,Be.data):t.texImage2D(o.TEXTURE_2D,we,qe,Be.width,Be.height,0,et,mt,Be.data)}else if(L.isDataArrayTexture)Et?(Ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,qe,pe.width,pe.height,pe.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,et,mt,pe.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,pe.width,pe.height,pe.depth,0,et,mt,pe.data);else if(L.isData3DTexture)Et?(Ot&&t.texStorage3D(o.TEXTURE_3D,Ne,qe,pe.width,pe.height,pe.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,et,mt,pe.data)):t.texImage3D(o.TEXTURE_3D,0,qe,pe.width,pe.height,pe.depth,0,et,mt,pe.data);else if(L.isFramebufferTexture){if(Ot)if(Et)t.texStorage2D(o.TEXTURE_2D,Ne,qe,pe.width,pe.height);else{let we=pe.width,H=pe.height;for(let Te=0;Te<Ne;Te++)t.texImage2D(o.TEXTURE_2D,Te,qe,we,H,0,et,mt,null),we>>=1,H>>=1}}else if(gt.length>0&&Tt){Et&&Ot&&t.texStorage2D(o.TEXTURE_2D,Ne,qe,gt[0].width,gt[0].height);for(let we=0,H=gt.length;we<H;we++)Be=gt[we],Et?t.texSubImage2D(o.TEXTURE_2D,we,0,0,et,mt,Be):t.texImage2D(o.TEXTURE_2D,we,qe,et,mt,Be);L.generateMipmaps=!1}else Et?(Ot&&t.texStorage2D(o.TEXTURE_2D,Ne,qe,pe.width,pe.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,et,mt,pe)):t.texImage2D(o.TEXTURE_2D,0,qe,et,mt,pe);R(L,Tt)&&T(_e),Oe.__version=ye.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function de(O,L,Q){if(L.image.length!==6)return;const _e=ee(O,L),ge=L.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Q);const ye=n.get(ge);if(ge.version!==ye.__version||_e===!0){t.activeTexture(o.TEXTURE0+Q);const Oe=Kt.getPrimaries(Kt.workingColorSpace),De=L.colorSpace===dr?null:Kt.getPrimaries(L.colorSpace),Ce=L.colorSpace===dr||Oe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const je=L.isCompressedTexture||L.image[0].isCompressedTexture,ft=L.image[0]&&L.image[0].isDataTexture,pe=[];for(let we=0;we<6;we++)!je&&!ft?pe[we]=M(L.image[we],!1,!0,r.maxCubemapSize):pe[we]=ft?L.image[we].image:L.image[we],pe[we]=ct(L,pe[we]);const Tt=pe[0],et=x(Tt)||u,mt=a.convert(L.format,L.colorSpace),qe=a.convert(L.type),Be=C(L.internalFormat,mt,qe,L.colorSpace),gt=u&&L.isVideoTexture!==!0,Et=ye.__version===void 0||_e===!0;let Ot=U(L,Tt,et);$(o.TEXTURE_CUBE_MAP,L,et);let Ne;if(je){gt&&Et&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,Be,Tt.width,Tt.height);for(let we=0;we<6;we++){Ne=pe[we].mipmaps;for(let H=0;H<Ne.length;H++){const Te=Ne[H];L.format!==Pr?mt!==null?gt?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,Te.width,Te.height,mt,Te.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,Te.width,Te.height,mt,qe,Te.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Be,Te.width,Te.height,0,mt,qe,Te.data)}}}else{Ne=L.mipmaps,gt&&Et&&(Ne.length>0&&Ot++,t.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,Be,pe[0].width,pe[0].height));for(let we=0;we<6;we++)if(ft){gt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,pe[we].width,pe[we].height,mt,qe,pe[we].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,pe[we].width,pe[we].height,0,mt,qe,pe[we].data);for(let H=0;H<Ne.length;H++){const Re=Ne[H].image[we].image;gt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,Re.width,Re.height,mt,qe,Re.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Be,Re.width,Re.height,0,mt,qe,Re.data)}}else{gt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,mt,qe,pe[we]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,mt,qe,pe[we]);for(let H=0;H<Ne.length;H++){const Te=Ne[H];gt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,mt,qe,Te.image[we]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Be,mt,qe,Te.image[we])}}}R(L,et)&&T(o.TEXTURE_CUBE_MAP),ye.__version=ge.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function me(O,L,Q,_e,ge,ye){const Oe=a.convert(Q.format,Q.colorSpace),De=a.convert(Q.type),Ce=C(Q.internalFormat,Oe,De,Q.colorSpace);if(!n.get(L).__hasExternalTextures){const ft=Math.max(1,L.width>>ye),pe=Math.max(1,L.height>>ye);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ye,Ce,ft,pe,L.depth,0,Oe,De,null):t.texImage2D(ge,ye,Ce,ft,pe,0,Oe,De,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),Fe(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,ge,n.get(Q).__webglTexture,0,Je(L)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,ge,n.get(Q).__webglTexture,ye),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Me(O,L,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),L.depthBuffer&&!L.stencilBuffer){let _e=u===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Q||Fe(L)){const ge=L.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Zs?_e=o.DEPTH_COMPONENT32F:ge.type===Ks&&(_e=o.DEPTH_COMPONENT24));const ye=Je(L);Fe(L)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,_e,L.width,L.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,_e,L.width,L.height)}else o.renderbufferStorage(o.RENDERBUFFER,_e,L.width,L.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(L.depthBuffer&&L.stencilBuffer){const _e=Je(L);Q&&Fe(L)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,o.DEPTH24_STENCIL8,L.width,L.height):Fe(L)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,o.DEPTH24_STENCIL8,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const _e=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ge=0;ge<_e.length;ge++){const ye=_e[ge],Oe=a.convert(ye.format,ye.colorSpace),De=a.convert(ye.type),Ce=C(ye.internalFormat,Oe,De,ye.colorSpace),je=Je(L);Q&&Fe(L)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Ce,L.width,L.height):Fe(L)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Ce,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,L.width,L.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(O,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),J(L.depthTexture,0);const _e=n.get(L.depthTexture).__webglTexture,ge=Je(L);if(L.depthTexture.format===qo)Fe(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(L.depthTexture.format===pl)Fe(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ze(O){const L=n.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!L.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Pe(L.__webglFramebuffer,O)}else if(Q){L.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer[_e]),L.__webglDepthbuffer[_e]=o.createRenderbuffer(),Me(L.__webglDepthbuffer[_e],O,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=o.createRenderbuffer(),Me(L.__webglDepthbuffer,O,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function st(O,L,Q){const _e=n.get(O);L!==void 0&&me(_e.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&ze(O)}function ie(O){const L=O.texture,Q=n.get(O),_e=n.get(L);O.addEventListener("dispose",W),O.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=L.version,c.memory.textures++);const ge=O.isWebGLCubeRenderTarget===!0,ye=O.isWebGLMultipleRenderTargets===!0,Oe=x(O)||u;if(ge){Q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(u&&L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer[De]=[];for(let Ce=0;Ce<L.mipmaps.length;Ce++)Q.__webglFramebuffer[De][Ce]=o.createFramebuffer()}else Q.__webglFramebuffer[De]=o.createFramebuffer()}else{if(u&&L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer=[];for(let De=0;De<L.mipmaps.length;De++)Q.__webglFramebuffer[De]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(ye)if(r.drawBuffers){const De=O.texture;for(let Ce=0,je=De.length;Ce<je;Ce++){const ft=n.get(De[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&O.samples>0&&Fe(O)===!1){const De=ye?L:[L];Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<De.length;Ce++){const je=De[Ce];Q.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ft=a.convert(je.format,je.colorSpace),pe=a.convert(je.type),Tt=C(je.internalFormat,ft,pe,je.colorSpace,O.isXRRenderTarget===!0),et=Je(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Tt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Me(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){t.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),$(o.TEXTURE_CUBE_MAP,L,Oe);for(let De=0;De<6;De++)if(u&&L.mipmaps&&L.mipmaps.length>0)for(let Ce=0;Ce<L.mipmaps.length;Ce++)me(Q.__webglFramebuffer[De][Ce],O,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ce);else me(Q.__webglFramebuffer[De],O,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);R(L,Oe)&&T(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const De=O.texture;for(let Ce=0,je=De.length;Ce<je;Ce++){const ft=De[Ce],pe=n.get(ft);t.bindTexture(o.TEXTURE_2D,pe.__webglTexture),$(o.TEXTURE_2D,ft,Oe),me(Q.__webglFramebuffer,O,ft,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),R(ft,Oe)&&T(o.TEXTURE_2D)}t.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(u?De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,_e.__webglTexture),$(De,L,Oe),u&&L.mipmaps&&L.mipmaps.length>0)for(let Ce=0;Ce<L.mipmaps.length;Ce++)me(Q.__webglFramebuffer[Ce],O,L,o.COLOR_ATTACHMENT0,De,Ce);else me(Q.__webglFramebuffer,O,L,o.COLOR_ATTACHMENT0,De,0);R(L,Oe)&&T(De),t.unbindTexture()}O.depthBuffer&&ze(O)}function ut(O){const L=x(O)||u,Q=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let _e=0,ge=Q.length;_e<ge;_e++){const ye=Q[_e];if(R(ye,L)){const Oe=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,De=n.get(ye).__webglTexture;t.bindTexture(Oe,De),T(Oe),t.unbindTexture()}}}function Ue(O){if(u&&O.samples>0&&Fe(O)===!1){const L=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Q=O.width,_e=O.height;let ge=o.COLOR_BUFFER_BIT;const ye=[],Oe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=n.get(O),Ce=O.isWebGLMultipleRenderTargets===!0;if(Ce)for(let je=0;je<L.length;je++)t.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let je=0;je<L.length;je++){ye.push(o.COLOR_ATTACHMENT0+je),O.depthBuffer&&ye.push(Oe);const ft=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(ft===!1&&(O.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ce&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,De.__webglColorRenderbuffer[je]),ft===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Oe]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Oe])),Ce){const pe=n.get(L[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,ge,o.NEAREST),d&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let je=0;je<L.length;je++){t.bindFramebuffer(o.FRAMEBUFFER,De.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,De.__webglColorRenderbuffer[je]);const ft=n.get(L[je]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,De.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,ft,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Je(O){return Math.min(r.maxSamples,O.samples)}function Fe(O){const L=n.get(O);return u&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function se(O){const L=c.render.frame;p.get(O)!==L&&(p.set(O,L),O.update())}function ct(O,L){const Q=O.colorSpace,_e=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Em||Q!==gs&&Q!==dr&&(Kt.getTransfer(Q)===sn?u===!1?e.has("EXT_sRGB")===!0&&_e===Pr?(O.format=Em,O.minFilter=hr,O.generateMipmaps=!1):L=OS.sRGBToLinear(L):(_e!==Pr||ge!==io)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),L}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=st,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Fe}function Gb(o,e,t){const n=t.isWebGL2;function r(a,c=dr){let u;const f=Kt.getTransfer(c);if(a===io)return o.UNSIGNED_BYTE;if(a===AS)return o.UNSIGNED_SHORT_4_4_4_4;if(a===RS)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Tw)return o.BYTE;if(a===ww)return o.SHORT;if(a===ng)return o.UNSIGNED_SHORT;if(a===wS)return o.INT;if(a===Ks)return o.UNSIGNED_INT;if(a===Zs)return o.FLOAT;if(a===zu)return n?o.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===Aw)return o.ALPHA;if(a===Pr)return o.RGBA;if(a===Rw)return o.LUMINANCE;if(a===Cw)return o.LUMINANCE_ALPHA;if(a===qo)return o.DEPTH_COMPONENT;if(a===pl)return o.DEPTH_STENCIL;if(a===Em)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===bw)return o.RED;if(a===CS)return o.RED_INTEGER;if(a===Pw)return o.RG;if(a===bS)return o.RG_INTEGER;if(a===PS)return o.RGBA_INTEGER;if(a===mp||a===gp||a===_p||a===vp)if(f===sn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===mp)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===_p)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===vp)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===mp)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gp)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===_p)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===vp)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pv||a===Lv||a===Dv||a===Nv)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Pv)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Lv)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dv)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Nv)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===LS)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Iv||a===Uv)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Iv)return f===sn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Uv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ov||a===Fv||a===kv||a===zv||a===Bv||a===Hv||a===Vv||a===Gv||a===Wv||a===Xv||a===Yv||a===jv||a===qv||a===$v)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Ov)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Fv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===kv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Hv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Vv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Wv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Xv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Yv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===jv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===qv)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===$v)return f===sn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===xp||a===Kv||a===Zv)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===xp)return f===sn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Kv)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zv)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Lw||a===Qv||a===Jv||a===ex)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===xp)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Qv)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Jv)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ex)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jo?n?o.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:r}}class Wb extends Xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pf extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Wp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),y=this._getHandJoint(d,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),v=.02,E=.005;d.inputState.pinching&&g>v+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=v-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yb extends gl{constructor(e,t){super();const n=this;let r=null,a=1,c=null,u="local-floor",f=1,d=null,p=null,_=null,g=null,v=null,E=null;const M=t.getContextAttributes();let x=null,y=null;const R=[],T=[],C=new zt;let U=null;const I=new Xi;I.layers.enable(1),I.viewport=new un;const P=new Xi;P.layers.enable(2),P.viewport=new un;const W=[I,P],A=new Wb;A.layers.enable(1),A.layers.enable(2);let b=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=R[$];return ee===void 0&&(ee=new Wp,R[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=R[$];return ee===void 0&&(ee=new Wp,R[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=R[$];return ee===void 0&&(ee=new Wp,R[$]=ee),ee.getHandSpace()};function Y($){const ee=T.indexOf($.inputSource);if(ee===-1)return;const ce=R[ee];ce!==void 0&&(ce.update($.inputSource,$.frame,d||c),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function he(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",z);for(let $=0;$<R.length;$++){const ee=T[$];ee!==null&&(T[$]=null,R[$].disconnect(ee))}b=null,te=null,e.setRenderTarget(x),v=null,g=null,_=null,r=null,y=null,G.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){u=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",he),r.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),y=new Jo(v.framebufferWidth,v.framebufferHeight,{format:Pr,type:io,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ee=null,ce=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?pl:qo,ce=M.stencil?jo:Ks);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};_=new XRWebGLBinding(r,t),g=_.createProjectionLayer(me),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),y=new Jo(g.textureWidth,g.textureHeight,{format:Pr,type:io,depthTexture:new qS(g.textureWidth,g.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Me=e.properties.get(y);Me.__ignoreDepthValues=g.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(u),G.setContext(r),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z($){for(let ee=0;ee<$.removed.length;ee++){const ce=$.removed[ee],de=T.indexOf(ce);de>=0&&(T[de]=null,R[de].disconnect(ce))}for(let ee=0;ee<$.added.length;ee++){const ce=$.added[ee];let de=T.indexOf(ce);if(de===-1){for(let Me=0;Me<R.length;Me++)if(Me>=T.length){T.push(ce),de=Me;break}else if(T[Me]===null){T[Me]=ce,de=Me;break}if(de===-1)break}const me=R[de];me&&me.connect(ce)}}const j=new oe,J=new oe;function Z($,ee,ce){j.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const de=j.distanceTo(J),me=ee.projectionMatrix.elements,Me=ce.projectionMatrix.elements,Pe=me[14]/(me[10]-1),ze=me[14]/(me[10]+1),st=(me[9]+1)/me[5],ie=(me[9]-1)/me[5],ut=(me[8]-1)/me[0],Ue=(Me[8]+1)/Me[0],Je=Pe*ut,Fe=Pe*Ue,se=de/(-ut+Ue),ct=se*-ut;ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const O=Pe+se,L=ze+se,Q=Je-ct,_e=Fe+(de-ct),ge=st*ze/L*O,ye=ie*ze/L*O;$.projectionMatrix.makePerspective(Q,_e,ge,ye,O,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function B($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;A.near=P.near=I.near=$.near,A.far=P.far=I.far=$.far,(b!==A.near||te!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),b=A.near,te=A.far);const ee=$.parent,ce=A.cameras;B(A,ee);for(let de=0;de<ce.length;de++)B(ce[de],ee);ce.length===2?Z(A,I,P):A.projectionMatrix.copy(I.projectionMatrix),q($,A,ee)};function q($,ee,ce){ce===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function($){f=$,g!==null&&(g.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)};let D=null;function F($,ee){if(p=ee.getViewerPose(d||c),E=ee,p!==null){const ce=p.views;v!==null&&(e.setRenderTargetFramebuffer(y,v.framebuffer),e.setRenderTarget(y));let de=!1;ce.length!==A.cameras.length&&(A.cameras.length=0,de=!0);for(let me=0;me<ce.length;me++){const Me=ce[me];let Pe=null;if(v!==null)Pe=v.getViewport(Me);else{const st=_.getViewSubImage(g,Me);Pe=st.viewport,me===0&&(e.setRenderTargetTextures(y,st.colorTexture,g.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(y))}let ze=W[me];ze===void 0&&(ze=new Xi,ze.layers.enable(me),ze.viewport=new un,W[me]=ze),ze.matrix.fromArray(Me.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Me.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(A.matrix.copy(ze.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),de===!0&&A.cameras.push(ze)}}for(let ce=0;ce<R.length;ce++){const de=T[ce],me=R[ce];de!==null&&me!==void 0&&me.update(de,ee,d||c)}D&&D($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),E=null}const G=new jS;G.setAnimationLoop(F),this.setAnimationLoop=function($){D=$},this.dispose=function(){}}}function jb(o,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,WS(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,R,T,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(x,y):y.isMeshToonMaterial?(a(x,y),_(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y)):y.isMeshStandardMaterial?(a(x,y),g(x,y),y.isMeshPhysicalMaterial&&v(x,y,C)):y.isMeshMatcapMaterial?(a(x,y),E(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),M(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?f(x,y,R,T):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===oi&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===oi&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const R=e.get(y).envMap;if(R&&(x.envMap.value=R,x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const T=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*T,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,R,T){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*R,x.scale.value=T*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,R){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===oi&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const R=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qb(o,e,t,n){let r={},a={},c=[];const u=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(R,T){const C=T.program;n.uniformBlockBinding(R,C)}function d(R,T){let C=r[R.id];C===void 0&&(E(R),C=p(R),r[R.id]=C,R.addEventListener("dispose",x));const U=T.program;n.updateUBOMapping(R,U);const I=e.render.frame;a[R.id]!==I&&(g(R),a[R.id]=I)}function p(R){const T=_();R.__bindingPointIndex=T;const C=o.createBuffer(),U=R.__size,I=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,U,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,T,C),C}function _(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const T=r[R.id],C=R.uniforms,U=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,T);for(let I=0,P=C.length;I<P;I++){const W=Array.isArray(C[I])?C[I]:[C[I]];for(let A=0,b=W.length;A<b;A++){const te=W[A];if(v(te,I,A,U)===!0){const Y=te.__offset,he=Array.isArray(te.value)?te.value:[te.value];let z=0;for(let j=0;j<he.length;j++){const J=he[j],Z=M(J);typeof J=="number"||typeof J=="boolean"?(te.__data[0]=J,o.bufferSubData(o.UNIFORM_BUFFER,Y+z,te.__data)):J.isMatrix3?(te.__data[0]=J.elements[0],te.__data[1]=J.elements[1],te.__data[2]=J.elements[2],te.__data[3]=0,te.__data[4]=J.elements[3],te.__data[5]=J.elements[4],te.__data[6]=J.elements[5],te.__data[7]=0,te.__data[8]=J.elements[6],te.__data[9]=J.elements[7],te.__data[10]=J.elements[8],te.__data[11]=0):(J.toArray(te.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,te.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(R,T,C,U){const I=R.value,P=T+"_"+C;if(U[P]===void 0)return typeof I=="number"||typeof I=="boolean"?U[P]=I:U[P]=I.clone(),!0;{const W=U[P];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return U[P]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function E(R){const T=R.uniforms;let C=0;const U=16;for(let P=0,W=T.length;P<W;P++){const A=Array.isArray(T[P])?T[P]:[T[P]];for(let b=0,te=A.length;b<te;b++){const Y=A[b],he=Array.isArray(Y.value)?Y.value:[Y.value];for(let z=0,j=he.length;z<j;z++){const J=he[z],Z=M(J),B=C%U;B!==0&&U-B<Z.boundary&&(C+=U-B),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=Z.storage}}}const I=C%U;return I>0&&(C+=U-I),R.__size=C,R.__cache={},this}function M(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function x(R){const T=R.target;T.removeEventListener("dispose",x);const C=c.indexOf(T.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function y(){for(const R in r)o.deleteBuffer(r[R]);c=[],r={},a={}}return{bind:f,update:d,dispose:y}}class eM{constructor(e={}){const{canvas:t=Gw(),context:n=null,depth:r=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=c;const v=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=no,this.toneMappingExposure=1;const T=this;let C=!1,U=0,I=0,P=null,W=-1,A=null;const b=new un,te=new un;let Y=null;const he=new kt(0);let z=0,j=t.width,J=t.height,Z=1,B=null,q=null;const D=new un(0,0,j,J),F=new un(0,0,j,J);let G=!1;const $=new rg;let ee=!1,ce=!1,de=null;const me=new En,Me=new zt,Pe=new oe,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return P===null?Z:1}let ie=n;function ut(N,K){for(let ue=0;ue<N.length;ue++){const le=N[ue],re=t.getContext(le,K);if(re!==null)return re}return null}try{const N={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tg}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Te,!1),ie===null){const K=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&K.shift(),ie=ut(K,N),ie===null)throw ut(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ue,Je,Fe,se,ct,O,L,Q,_e,ge,ye,Oe,De,Ce,je,ft,pe,Tt,et,mt,qe,Be,gt,Et;function Ot(){Ue=new r2(ie),Je=new ZC(ie,Ue,e),Ue.init(Je),Be=new Gb(ie,Ue,Je),Fe=new Hb(ie,Ue,Je),se=new a2(ie),ct=new Rb,O=new Vb(ie,Ue,Fe,ct,Je,Be,se),L=new JC(T),Q=new i2(T),_e=new pA(ie,Je),gt=new $C(ie,Ue,_e,Je),ge=new s2(ie,_e,se,gt),ye=new f2(ie,ge,_e,se),et=new c2(ie,Je,O),ft=new QC(ct),Oe=new Ab(T,L,Q,Ue,Je,gt,ft),De=new jb(T,ct),Ce=new bb,je=new Ub(Ue,Je),Tt=new qC(T,L,Q,Fe,ye,g,f),pe=new Bb(T,ye,Je),Et=new qb(ie,se,Je,Fe),mt=new KC(ie,Ue,se,Je),qe=new o2(ie,Ue,se,Je),se.programs=Oe.programs,T.capabilities=Je,T.extensions=Ue,T.properties=ct,T.renderLists=Ce,T.shadowMap=pe,T.state=Fe,T.info=se}Ot();const Ne=new Yb(T,ie);this.xr=Ne,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const N=Ue.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ue.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(N){N!==void 0&&(Z=N,this.setSize(j,J,!1))},this.getSize=function(N){return N.set(j,J)},this.setSize=function(N,K,ue=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=N,J=K,t.width=Math.floor(N*Z),t.height=Math.floor(K*Z),ue===!0&&(t.style.width=N+"px",t.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(j*Z,J*Z).floor()},this.setDrawingBufferSize=function(N,K,ue){j=N,J=K,Z=ue,t.width=Math.floor(N*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(D)},this.setViewport=function(N,K,ue,le){N.isVector4?D.set(N.x,N.y,N.z,N.w):D.set(N,K,ue,le),Fe.viewport(b.copy(D).multiplyScalar(Z).floor())},this.getScissor=function(N){return N.copy(F)},this.setScissor=function(N,K,ue,le){N.isVector4?F.set(N.x,N.y,N.z,N.w):F.set(N,K,ue,le),Fe.scissor(te.copy(F).multiplyScalar(Z).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(N){Fe.setScissorTest(G=N)},this.setOpaqueSort=function(N){B=N},this.setTransparentSort=function(N){q=N},this.getClearColor=function(N){return N.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(N=!0,K=!0,ue=!0){let le=0;if(N){let re=!1;if(P!==null){const be=P.texture.format;re=be===PS||be===bS||be===CS}if(re){const be=P.texture.type,Xe=be===io||be===Ks||be===ng||be===jo||be===AS||be===RS,ht=Tt.getClearColor(),Le=Tt.getClearAlpha(),Qe=ht.r,lt=ht.g,xt=ht.b;Xe?(v[0]=Qe,v[1]=lt,v[2]=xt,v[3]=Le,ie.clearBufferuiv(ie.COLOR,0,v)):(E[0]=Qe,E[1]=lt,E[2]=xt,E[3]=Le,ie.clearBufferiv(ie.COLOR,0,E))}else le|=ie.COLOR_BUFFER_BIT}K&&(le|=ie.DEPTH_BUFFER_BIT),ue&&(le|=ie.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ce.dispose(),je.dispose(),ct.dispose(),L.dispose(),Q.dispose(),ye.dispose(),gt.dispose(),Et.dispose(),Oe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ve),Ne.removeEventListener("sessionend",$e),de&&(de.dispose(),de=null),Ee.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const N=se.autoReset,K=pe.enabled,ue=pe.autoUpdate,le=pe.needsUpdate,re=pe.type;Ot(),se.autoReset=N,pe.enabled=K,pe.autoUpdate=ue,pe.needsUpdate=le,pe.type=re}function Te(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Re(N){const K=N.target;K.removeEventListener("dispose",Re),ot(K)}function ot(N){rt(N),ct.remove(N)}function rt(N){const K=ct.get(N).programs;K!==void 0&&(K.forEach(function(ue){Oe.releaseProgram(ue)}),N.isShaderMaterial&&Oe.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,ue,le,re,be){K===null&&(K=ze);const Xe=re.isMesh&&re.matrixWorld.determinant()<0,ht=$t(N,K,ue,le,re);Fe.setMaterial(le,Xe);let Le=ue.index,Qe=1;if(le.wireframe===!0){if(Le=ge.getWireframeAttribute(ue),Le===void 0)return;Qe=2}const lt=ue.drawRange,xt=ue.attributes.position;let Xt=lt.start*Qe,xn=(lt.start+lt.count)*Qe;be!==null&&(Xt=Math.max(Xt,be.start*Qe),xn=Math.min(xn,(be.start+be.count)*Qe)),Le!==null?(Xt=Math.max(Xt,0),xn=Math.min(xn,Le.count)):xt!=null&&(Xt=Math.max(Xt,0),xn=Math.min(xn,xt.count));const Bt=xn-Xt;if(Bt<0||Bt===1/0)return;gt.setup(re,le,ht,ue,Le);let Tn,Rt=mt;if(Le!==null&&(Tn=_e.get(Le),Rt=qe,Rt.setIndex(Tn)),re.isMesh)le.wireframe===!0?(Fe.setLineWidth(le.wireframeLinewidth*st()),Rt.setMode(ie.LINES)):Rt.setMode(ie.TRIANGLES);else if(re.isLine){let vt=le.linewidth;vt===void 0&&(vt=1),Fe.setLineWidth(vt*st()),re.isLineSegments?Rt.setMode(ie.LINES):re.isLineLoop?Rt.setMode(ie.LINE_LOOP):Rt.setMode(ie.LINE_STRIP)}else re.isPoints?Rt.setMode(ie.POINTS):re.isSprite&&Rt.setMode(ie.TRIANGLES);if(re.isBatchedMesh)Rt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)Rt.renderInstances(Xt,Bt,re.count);else if(ue.isInstancedBufferGeometry){const vt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ai=Math.min(ue.instanceCount,vt);Rt.renderInstances(Xt,Bt,ai)}else Rt.render(Xt,Bt)};function At(N,K,ue){N.transparent===!0&&N.side===Cr&&N.forceSinglePass===!1?(N.side=oi,N.needsUpdate=!0,Gt(N,K,ue),N.side=lo,N.needsUpdate=!0,Gt(N,K,ue),N.side=Cr):Gt(N,K,ue)}this.compile=function(N,K,ue=null){ue===null&&(ue=N),x=je.get(ue),x.init(),R.push(x),ue.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(x.pushLight(re),re.castShadow&&x.pushShadow(re))}),N!==ue&&N.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(x.pushLight(re),re.castShadow&&x.pushShadow(re))}),x.setupLights(T._useLegacyLights);const le=new Set;return N.traverse(function(re){const be=re.material;if(be)if(Array.isArray(be))for(let Xe=0;Xe<be.length;Xe++){const ht=be[Xe];At(ht,ue,re),le.add(ht)}else At(be,ue,re),le.add(be)}),R.pop(),x=null,le},this.compileAsync=function(N,K,ue=null){const le=this.compile(N,K,ue);return new Promise(re=>{function be(){if(le.forEach(function(Xe){ct.get(Xe).currentProgram.isReady()&&le.delete(Xe)}),le.size===0){re(N);return}setTimeout(be,10)}Ue.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let It=null;function We(N){It&&It(N)}function Ve(){Ee.stop()}function $e(){Ee.start()}const Ee=new jS;Ee.setAnimationLoop(We),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(N){It=N,Ne.setAnimationLoop(N),N===null?Ee.stop():Ee.start()},Ne.addEventListener("sessionstart",Ve),Ne.addEventListener("sessionend",$e),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(K),K=Ne.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,K,P),x=je.get(N,R.length),x.init(),R.push(x),me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),$.setFromProjectionMatrix(me),ce=this.localClippingEnabled,ee=ft.init(this.clippingPlanes,ce),M=Ce.get(N,y.length),M.init(),y.push(M),tt(N,K,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(B,q),this.info.render.frame++,ee===!0&&ft.beginShadows();const ue=x.state.shadowsArray;if(pe.render(ue,N,K),ee===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(M,N),x.setupLights(T._useLegacyLights),K.isArrayCamera){const le=K.cameras;for(let re=0,be=le.length;re<be;re++){const Xe=le[re];at(M,N,Xe,Xe.viewport)}}else at(M,N,K);P!==null&&(O.updateMultisampleRenderTarget(P),O.updateRenderTargetMipmap(P)),N.isScene===!0&&N.onAfterRender(T,N,K),gt.resetDefaultState(),W=-1,A=null,R.pop(),R.length>0?x=R[R.length-1]:x=null,y.pop(),y.length>0?M=y[y.length-1]:M=null};function tt(N,K,ue,le){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||$.intersectsSprite(N)){le&&Pe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(me);const Xe=ye.update(N),ht=N.material;ht.visible&&M.push(N,Xe,ht,ue,Pe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||$.intersectsObject(N))){const Xe=ye.update(N),ht=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Pe.copy(N.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Pe.copy(Xe.boundingSphere.center)),Pe.applyMatrix4(N.matrixWorld).applyMatrix4(me)),Array.isArray(ht)){const Le=Xe.groups;for(let Qe=0,lt=Le.length;Qe<lt;Qe++){const xt=Le[Qe],Xt=ht[xt.materialIndex];Xt&&Xt.visible&&M.push(N,Xe,Xt,ue,Pe.z,xt)}}else ht.visible&&M.push(N,Xe,ht,ue,Pe.z,null)}}const be=N.children;for(let Xe=0,ht=be.length;Xe<ht;Xe++)tt(be[Xe],K,ue,le)}function at(N,K,ue,le){const re=N.opaque,be=N.transmissive,Xe=N.transparent;x.setupLightsView(ue),ee===!0&&ft.setGlobalState(T.clippingPlanes,ue),be.length>0&&_t(re,be,K,ue),le&&Fe.viewport(b.copy(le)),re.length>0&&qt(re,K,ue),be.length>0&&qt(be,K,ue),Xe.length>0&&qt(Xe,K,ue),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function _t(N,K,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const be=Je.isWebGL2;de===null&&(de=new Jo(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?zu:io,minFilter:ku,samples:be?4:0})),T.getDrawingBufferSize(Me),be?de.setSize(Me.x,Me.y):de.setSize(wm(Me.x),wm(Me.y));const Xe=T.getRenderTarget();T.setRenderTarget(de),T.getClearColor(he),z=T.getClearAlpha(),z<1&&T.setClearColor(16777215,.5),T.clear();const ht=T.toneMapping;T.toneMapping=no,qt(N,ue,le),O.updateMultisampleRenderTarget(de),O.updateRenderTargetMipmap(de);let Le=!1;for(let Qe=0,lt=K.length;Qe<lt;Qe++){const xt=K[Qe],Xt=xt.object,xn=xt.geometry,Bt=xt.material,Tn=xt.group;if(Bt.side===Cr&&Xt.layers.test(le.layers)){const Rt=Bt.side;Bt.side=oi,Bt.needsUpdate=!0,Mt(Xt,ue,le,xn,Bt,Tn),Bt.side=Rt,Bt.needsUpdate=!0,Le=!0}}Le===!0&&(O.updateMultisampleRenderTarget(de),O.updateRenderTargetMipmap(de)),T.setRenderTarget(Xe),T.setClearColor(he,z),T.toneMapping=ht}function qt(N,K,ue){const le=K.isScene===!0?K.overrideMaterial:null;for(let re=0,be=N.length;re<be;re++){const Xe=N[re],ht=Xe.object,Le=Xe.geometry,Qe=le===null?Xe.material:le,lt=Xe.group;ht.layers.test(ue.layers)&&Mt(ht,K,ue,Le,Qe,lt)}}function Mt(N,K,ue,le,re,be){N.onBeforeRender(T,K,ue,le,re,be),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(T,K,ue,le,N,be),re.transparent===!0&&re.side===Cr&&re.forceSinglePass===!1?(re.side=oi,re.needsUpdate=!0,T.renderBufferDirect(ue,K,le,re,N,be),re.side=lo,re.needsUpdate=!0,T.renderBufferDirect(ue,K,le,re,N,be),re.side=Cr):T.renderBufferDirect(ue,K,le,re,N,be),N.onAfterRender(T,K,ue,le,re,be)}function Gt(N,K,ue){K.isScene!==!0&&(K=ze);const le=ct.get(N),re=x.state.lights,be=x.state.shadowsArray,Xe=re.state.version,ht=Oe.getParameters(N,re.state,be,K,ue),Le=Oe.getProgramCacheKey(ht);let Qe=le.programs;le.environment=N.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(N.isMeshStandardMaterial?Q:L).get(N.envMap||le.environment),Qe===void 0&&(N.addEventListener("dispose",Re),Qe=new Map,le.programs=Qe);let lt=Qe.get(Le);if(lt!==void 0){if(le.currentProgram===lt&&le.lightsStateVersion===Xe)return Qt(N,ht),lt}else ht.uniforms=Oe.getUniforms(N),N.onBuild(ue,ht,T),N.onBeforeCompile(ht,T),lt=Oe.acquireProgram(ht,Le),Qe.set(Le,lt),le.uniforms=ht.uniforms;const xt=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(xt.clippingPlanes=ft.uniform),Qt(N,ht),le.needsLights=qn(N),le.lightsStateVersion=Xe,le.needsLights&&(xt.ambientLightColor.value=re.state.ambient,xt.lightProbe.value=re.state.probe,xt.directionalLights.value=re.state.directional,xt.directionalLightShadows.value=re.state.directionalShadow,xt.spotLights.value=re.state.spot,xt.spotLightShadows.value=re.state.spotShadow,xt.rectAreaLights.value=re.state.rectArea,xt.ltc_1.value=re.state.rectAreaLTC1,xt.ltc_2.value=re.state.rectAreaLTC2,xt.pointLights.value=re.state.point,xt.pointLightShadows.value=re.state.pointShadow,xt.hemisphereLights.value=re.state.hemi,xt.directionalShadowMap.value=re.state.directionalShadowMap,xt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,xt.spotShadowMap.value=re.state.spotShadowMap,xt.spotLightMatrix.value=re.state.spotLightMatrix,xt.spotLightMap.value=re.state.spotLightMap,xt.pointShadowMap.value=re.state.pointShadowMap,xt.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=lt,le.uniformsList=null,lt}function vn(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=Vf.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function Qt(N,K){const ue=ct.get(N);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function $t(N,K,ue,le,re){K.isScene!==!0&&(K=ze),O.resetTextureUnits();const be=K.fog,Xe=le.isMeshStandardMaterial?K.environment:null,ht=P===null?T.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gs,Le=(le.isMeshStandardMaterial?Q:L).get(le.envMap||Xe),Qe=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,lt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),xt=!!ue.morphAttributes.position,Xt=!!ue.morphAttributes.normal,xn=!!ue.morphAttributes.color;let Bt=no;le.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Bt=T.toneMapping);const Tn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Rt=Tn!==void 0?Tn.length:0,vt=ct.get(le),ai=x.state.lights;if(ee===!0&&(ce===!0||N!==A)){const xi=N===A&&le.id===W;ft.setState(le,N,xi)}let on=!1;le.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==ai.state.version||vt.outputColorSpace!==ht||re.isBatchedMesh&&vt.batching===!1||!re.isBatchedMesh&&vt.batching===!0||re.isInstancedMesh&&vt.instancing===!1||!re.isInstancedMesh&&vt.instancing===!0||re.isSkinnedMesh&&vt.skinning===!1||!re.isSkinnedMesh&&vt.skinning===!0||re.isInstancedMesh&&vt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&vt.instancingColor===!1&&re.instanceColor!==null||vt.envMap!==Le||le.fog===!0&&vt.fog!==be||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==ft.numPlanes||vt.numIntersection!==ft.numIntersection)||vt.vertexAlphas!==Qe||vt.vertexTangents!==lt||vt.morphTargets!==xt||vt.morphNormals!==Xt||vt.morphColors!==xn||vt.toneMapping!==Bt||Je.isWebGL2===!0&&vt.morphTargetsCount!==Rt)&&(on=!0):(on=!0,vt.__version=le.version);let Yr=vt.currentProgram;on===!0&&(Yr=Gt(le,K,re));let Xu=!1,Nr=!1,vs=!1;const mn=Yr.getUniforms(),tr=vt.uniforms;if(Fe.useProgram(Yr.program)&&(Xu=!0,Nr=!0,vs=!0),le.id!==W&&(W=le.id,Nr=!0),Xu||A!==N){mn.setValue(ie,"projectionMatrix",N.projectionMatrix),mn.setValue(ie,"viewMatrix",N.matrixWorldInverse);const xi=mn.map.cameraPosition;xi!==void 0&&xi.setValue(ie,Pe.setFromMatrixPosition(N.matrixWorld)),Je.logarithmicDepthBuffer&&mn.setValue(ie,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&mn.setValue(ie,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,Nr=!0,vs=!0)}if(re.isSkinnedMesh){mn.setOptional(ie,re,"bindMatrix"),mn.setOptional(ie,re,"bindMatrixInverse");const xi=re.skeleton;xi&&(Je.floatVertexTextures?(xi.boneTexture===null&&xi.computeBoneTexture(),mn.setValue(ie,"boneTexture",xi.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(mn.setOptional(ie,re,"batchingTexture"),mn.setValue(ie,"batchingTexture",re._matricesTexture,O));const xl=ue.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&Je.isWebGL2===!0)&&et.update(re,ue,Yr),(Nr||vt.receiveShadow!==re.receiveShadow)&&(vt.receiveShadow=re.receiveShadow,mn.setValue(ie,"receiveShadow",re.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(tr.envMap.value=Le,tr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Nr&&(mn.setValue(ie,"toneMappingExposure",T.toneMappingExposure),vt.needsLights&&Nt(tr,vs),be&&le.fog===!0&&De.refreshFogUniforms(tr,be),De.refreshMaterialUniforms(tr,le,Z,J,de),Vf.upload(ie,vn(vt),tr,O)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Vf.upload(ie,vn(vt),tr,O),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&mn.setValue(ie,"center",re.center),mn.setValue(ie,"modelViewMatrix",re.modelViewMatrix),mn.setValue(ie,"normalMatrix",re.normalMatrix),mn.setValue(ie,"modelMatrix",re.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const xi=le.uniformsGroups;for(let co=0,Yu=xi.length;co<Yu;co++)if(Je.isWebGL2){const ta=xi[co];Et.update(ta,Yr),Et.bind(ta,Yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yr}function Nt(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function qn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(N,K,ue){ct.get(N.texture).__webglTexture=K,ct.get(N.depthTexture).__webglTexture=ue;const le=ct.get(N);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=ue===void 0,le.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,K){const ue=ct.get(N);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(N,K=0,ue=0){P=N,U=K,I=ue;let le=!0,re=null,be=!1,Xe=!1;if(N){const Le=ct.get(N);Le.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(ie.FRAMEBUFFER,null),le=!1):Le.__webglFramebuffer===void 0?O.setupRenderTarget(N):Le.__hasExternalTextures&&O.rebindTextures(N,ct.get(N.texture).__webglTexture,ct.get(N.depthTexture).__webglTexture);const Qe=N.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Xe=!0);const lt=ct.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?re=lt[K][ue]:re=lt[K],be=!0):Je.isWebGL2&&N.samples>0&&O.useMultisampledRTT(N)===!1?re=ct.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?re=lt[ue]:re=lt,b.copy(N.viewport),te.copy(N.scissor),Y=N.scissorTest}else b.copy(D).multiplyScalar(Z).floor(),te.copy(F).multiplyScalar(Z).floor(),Y=G;if(Fe.bindFramebuffer(ie.FRAMEBUFFER,re)&&Je.drawBuffers&&le&&Fe.drawBuffers(N,re),Fe.viewport(b),Fe.scissor(te),Fe.setScissorTest(Y),be){const Le=ct.get(N.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+K,Le.__webglTexture,ue)}else if(Xe){const Le=ct.get(N.texture),Qe=K||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,Le.__webglTexture,ue||0,Qe)}W=-1},this.readRenderTargetPixels=function(N,K,ue,le,re,be,Xe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=ct.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(ht=ht[Xe]),ht){Fe.bindFramebuffer(ie.FRAMEBUFFER,ht);try{const Le=N.texture,Qe=Le.format,lt=Le.type;if(Qe!==Pr&&Be.convert(Qe)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=lt===zu&&(Ue.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(lt!==io&&Be.convert(lt)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Zs&&(Je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-le&&ue>=0&&ue<=N.height-re&&ie.readPixels(K,ue,le,re,Be.convert(Qe),Be.convert(lt),be)}finally{const Le=P!==null?ct.get(P).__webglFramebuffer:null;Fe.bindFramebuffer(ie.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(N,K,ue=0){const le=Math.pow(2,-ue),re=Math.floor(K.image.width*le),be=Math.floor(K.image.height*le);O.setTexture2D(K,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,ue,0,0,N.x,N.y,re,be),Fe.unbindTexture()},this.copyTextureToTexture=function(N,K,ue,le=0){const re=K.image.width,be=K.image.height,Xe=Be.convert(ue.format),ht=Be.convert(ue.type);O.setTexture2D(ue,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,ue.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,ue.unpackAlignment),K.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,le,N.x,N.y,re,be,Xe,ht,K.image.data):K.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,le,N.x,N.y,K.mipmaps[0].width,K.mipmaps[0].height,Xe,K.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,le,N.x,N.y,Xe,ht,K.image),le===0&&ue.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(N,K,ue,le,re=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=N.max.x-N.min.x+1,Xe=N.max.y-N.min.y+1,ht=N.max.z-N.min.z+1,Le=Be.convert(le.format),Qe=Be.convert(le.type);let lt;if(le.isData3DTexture)O.setTexture3D(le,0),lt=ie.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)O.setTexture2DArray(le,0),lt=ie.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,le.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,le.unpackAlignment);const xt=ie.getParameter(ie.UNPACK_ROW_LENGTH),Xt=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),xn=ie.getParameter(ie.UNPACK_SKIP_PIXELS),Bt=ie.getParameter(ie.UNPACK_SKIP_ROWS),Tn=ie.getParameter(ie.UNPACK_SKIP_IMAGES),Rt=ue.isCompressedTexture?ue.mipmaps[re]:ue.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,Rt.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,Rt.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,N.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,N.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,N.min.z),ue.isDataTexture||ue.isData3DTexture?ie.texSubImage3D(lt,re,K.x,K.y,K.z,be,Xe,ht,Le,Qe,Rt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(lt,re,K.x,K.y,K.z,be,Xe,ht,Le,Rt.data)):ie.texSubImage3D(lt,re,K.x,K.y,K.z,be,Xe,ht,Le,Qe,Rt),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,xt),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,Xt),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,xn),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,Bt),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,Tn),re===0&&le.generateMipmaps&&ie.generateMipmap(lt),Fe.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?O.setTextureCube(N,0):N.isData3DTexture?O.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?O.setTexture2DArray(N,0):O.setTexture2D(N,0),Fe.unbindTexture()},this.resetState=function(){U=0,I=0,P=null,Fe.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ig?"display-p3":"srgb",t.unpackColorSpace=Kt.workingColorSpace===dh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xn?$o:DS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$o?Xn:gs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $b extends eM{}$b.prototype.isWebGL1Renderer=!0;class ag{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(e),this.density=t}clone(){return new ag(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kb extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class tM extends _l{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new En,Rm=new zS,Lf=new ph,Df=new oe;class Zb extends vi{constructor(e=new Dr,t=new tM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lf.copy(n.boundingSphere),Lf.applyMatrix4(r),Lf.radius+=a,e.ray.intersectsSphere(Lf)===!1)return;Gx.copy(r).invert(),Rm.copy(e.ray).applyMatrix4(Gx);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=n.index,_=n.attributes.position;if(d!==null){const g=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let E=g,M=v;E<M;E++){const x=d.getX(E);Df.fromBufferAttribute(_,x),Wx(Df,x,f,r,e,t,this)}}else{const g=Math.max(0,c.start),v=Math.min(_.count,c.start+c.count);for(let E=g,M=v;E<M;E++)Df.fromBufferAttribute(_,E),Wx(Df,E,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Wx(o,e,t,n,r,a,c){const u=Rm.distanceSqToPoint(o);if(u<t){const f=new oe;Rm.closestPointToPoint(o,f),f.applyMatrix4(n);const d=r.ray.origin.distanceTo(f);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:c})}}class ah extends Dr{constructor(e=.5,t=1,n=32,r=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:c},n=Math.max(3,n),r=Math.max(1,r);const u=[],f=[],d=[],p=[];let _=e;const g=(t-e)/r,v=new oe,E=new zt;for(let M=0;M<=r;M++){for(let x=0;x<=n;x++){const y=a+x/n*c;v.x=_*Math.cos(y),v.y=_*Math.sin(y),f.push(v.x,v.y,v.z),d.push(0,0,1),E.x=(v.x/t+1)/2,E.y=(v.y/t+1)/2,p.push(E.x,E.y)}_+=g}for(let M=0;M<r;M++){const x=M*(n+1);for(let y=0;y<n;y++){const R=y+x,T=R,C=R+n+1,U=R+n+2,I=R+1;u.push(T,C,I),u.push(C,U,I)}}this.setIndex(u),this.setAttribute("position",new Qi(f,3)),this.setAttribute("normal",new Qi(d,3)),this.setAttribute("uv",new Qi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ls extends Dr{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(c+u,Math.PI);let d=0;const p=[],_=new oe,g=new oe,v=[],E=[],M=[],x=[];for(let y=0;y<=n;y++){const R=[],T=y/n;let C=0;y===0&&c===0?C=.5/t:y===n&&f===Math.PI&&(C=-.5/t);for(let U=0;U<=t;U++){const I=U/t;_.x=-e*Math.cos(r+I*a)*Math.sin(c+T*u),_.y=e*Math.cos(c+T*u),_.z=e*Math.sin(r+I*a)*Math.sin(c+T*u),E.push(_.x,_.y,_.z),g.copy(_).normalize(),M.push(g.x,g.y,g.z),x.push(I+C,1-T),R.push(d++)}p.push(R)}for(let y=0;y<n;y++)for(let R=0;R<t;R++){const T=p[y][R+1],C=p[y][R],U=p[y+1][R],I=p[y+1][R+1];(y!==0||c>0)&&v.push(T,C,I),(y!==n-1||f<Math.PI)&&v.push(C,U,I)}this.setIndex(v),this.setAttribute("position",new Qi(E,3)),this.setAttribute("normal",new Qi(M,3)),this.setAttribute("uv",new Qi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xx extends _l{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=NS,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nM extends vi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xp=new En,Yx=new oe,jx=new oe;class Qb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new En,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rg,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yx),jx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jx),t.updateMatrixWorld(),Xp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qx=new En,au=new oe,Yp=new oe;class Jb extends Qb{constructor(){super(new Xi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new un(2,1,1,1),new un(0,1,1,1),new un(3,1,1,1),new un(1,1,1,1),new un(3,0,1,1),new un(1,0,1,1)],this._cubeDirections=[new oe(1,0,0),new oe(-1,0,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,1,0),new oe(0,-1,0)],this._cubeUps=[new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,0,1),new oe(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),au.setFromMatrixPosition(e.matrixWorld),n.position.copy(au),Yp.copy(n.position),Yp.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yp),n.updateMatrixWorld(),r.makeTranslation(-au.x,-au.y,-au.z),qx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qx)}}class eP extends nM{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Jb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tP extends nM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$x(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$x();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $x(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tg);Vt.registerPlugin(St);const iP=`
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,rP=`
  uniform float uTime;
  uniform vec3 uSunDir;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec2 vUv;

  // Simplex-like noise
  float hash(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return fract(sin(p.x * p.y * p.z) * 43758.5453);
  }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = i.x + i.y * 57.0 + i.z * 113.0;
    return mix(mix(mix(hash(vec3(n)), hash(vec3(n+1.0)), f.x),
                   mix(hash(vec3(n+57.0)), hash(vec3(n+58.0)), f.x), f.y),
               mix(mix(hash(vec3(n+113.0)), hash(vec3(n+114.0)), f.x),
                   mix(hash(vec3(n+170.0)), hash(vec3(n+171.0)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 pos = vPos * 2.0 + vec3(uTime * 0.012, 0.0, 0.0);
    float n1 = fbm(pos);
    float n2 = fbm(pos * 2.2 + vec3(100.0));
    float land = smoothstep(0.30, 0.50, n1 + n2 * 0.22);

    // Ghibli palette — soft, saturated, painterly
    vec3 oceanDeep  = vec3(0.04, 0.18, 0.28);
    vec3 oceanShal  = vec3(0.08, 0.32, 0.42);
    vec3 landLow    = vec3(0.22, 0.48, 0.32);
    vec3 landHigh   = vec3(0.38, 0.58, 0.30);
    vec3 oceanColor = mix(oceanDeep, oceanShal, n2);
    vec3 landColor  = mix(landLow, landHigh, n2);
    vec3 color = mix(oceanColor, landColor, land);

    // Soft Ghibli lighting — high ambient, gentle diffuse
    float light = dot(vNormal, normalize(uSunDir));
    light = smoothstep(-0.4, 1.0, light);
    float ambient = 0.50;
    float diffuse = light * 0.50;
    color *= (ambient + diffuse);

    // Wispy clouds
    float cloudNoise = fbm(vPos * 4.5 + vec3(uTime * 0.015, uTime * 0.006, 0.0));
    float cloud = smoothstep(0.46, 0.66, cloudNoise) * (1.0 - land * 0.35);
    vec3 cloudCol = vec3(0.94, 0.97, 0.99);
    color = mix(color, cloudCol, cloud * 0.40);

    // Atmospheric rim glow
    float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    rim = pow(rim, 4.0);
    vec3 atmo = vec3(0.28, 0.75, 0.92);
    color += atmo * rim * 0.60;

    // Soft haze
    color = mix(color, vec3(0.50, 0.70, 0.80), 0.05);

    gl_FragColor = vec4(color, 1.0);
  }
`,sP=`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,oP=`
  varying vec3 vNormal;
  void main() {
    float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    rim = pow(rim, 3.0);
    gl_FragColor = vec4(0.20, 0.70, 0.90, rim * 0.50);
  }
`;function aP(){const o=Zt.useRef(null),e=Zt.useRef(null);return Zt.useEffect(()=>{const t=o.current;if(!t)return;const n=new eM({canvas:t,antialias:!0,alpha:!1});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(131588,1);const r=new Kb;r.fog=new ag(131588,.012);const a=new Xi(55,window.innerWidth/window.innerHeight,.1,1e3);a.position.set(0,16,36);const u=window.innerWidth<768?1e3:3e3,f=new Dr,d=new Float32Array(u*3),p=new Float32Array(u);for(let ce=0;ce<u;ce++){const de=50+Math.random()*150,me=Math.random()*Math.PI*2,Me=Math.acos(2*Math.random()-1);d[ce*3]=de*Math.sin(Me)*Math.cos(me),d[ce*3+1]=de*Math.sin(Me)*Math.sin(me),d[ce*3+2]=de*Math.cos(Me),p[ce]=Math.random()*1+.2}f.setAttribute("position",new Lr(d,3));const _=new tM({color:16777215,size:.06,transparent:!0,opacity:.7,sizeAttenuation:!0}),g=new Zb(f,_);r.add(g);const v=new ls(2.5,40,40),E=new Oo({color:16763972}),M=new Wn(v,E);r.add(M);const x=new ls(3.8,40,40),y=new Oo({color:16755234,transparent:!0,opacity:.1,blending:eh,side:oi}),R=new Wn(x,y);M.add(R);const T=new eP(16764040,2,100);T.position.set(0,0,0),r.add(T),r.add(new tP(1118498,.5));const C=[{d:5,s:.25,c:10066329,sp:.032},{d:7.5,s:.38,c:15259040,sp:.022},{d:10.5,s:.48,c:2783898,sp:.016},{d:14,s:.35,c:12868154,sp:.011},{d:20,s:1.3,c:12886128,sp:.007},{d:28,s:1.1,c:13943968,sp:.004,rings:!0}],U=[],I=[];C.forEach(ce=>{const de=new ah(ce.d-.02,ce.d+.02,128),me=new Oo({color:16777215,transparent:!0,opacity:.03,side:Cr}),Me=new Wn(de,me);Me.rotation.x=Math.PI/2,r.add(Me),I.push(Me);const Pe=new ls(ce.s,32,32),ze=new Xx({color:ce.c,roughness:.9,metalness:0}),st=new Wn(Pe,ze);if(ce.rings){const ie=new ah(ce.s*1.5,ce.s*2.2,64),ut=new Oo({color:13154456,transparent:!0,opacity:.4,side:Cr}),Ue=new Wn(ie,ut);Ue.rotation.x=Math.PI/2.3,st.add(Ue)}r.add(st),U.push({mesh:st,...ce,angle:Math.random()*Math.PI*2})});const P=new ls(4.2,128,128),W=new _s({vertexShader:iP,fragmentShader:rP,uniforms:{uTime:{value:0},uSunDir:{value:new oe(1,.3,.5).normalize()}}}),A=new Wn(P,W);A.position.set(0,-65,0),r.add(A);const b=new ls(4.6,64,64),te=new _s({vertexShader:sP,fragmentShader:oP,transparent:!0,side:oi,blending:eh,depthWrite:!1}),Y=new Wn(b,te);A.add(Y);const he=new ls(5,32,32),z=new Oo({color:58879,transparent:!0,opacity:0,wireframe:!0}),j=new Wn(he,z);A.add(j);const J=new ls(.8,20,20),Z=new Xx({color:11184810,roughness:.95}),B=new Wn(J,Z);r.add(B),e.current={renderer:n,scene:r,camera:a,earth:A,sun:M,planets:U,stars:g,moon:B,grid:j,orbitRings:I,earthMat:W,gridMat:z,sunGlow:R};let q;const D=new nP,F=()=>{q=requestAnimationFrame(F);const ce=D.getElapsedTime();W.uniforms.uTime.value=ce,A.rotation.y=ce*.035,j.rotation.y=ce*.035,U.forEach(de=>{de.angle+=de.sp*.3,de.mesh.position.x=Math.cos(de.angle)*de.d,de.mesh.position.z=Math.sin(de.angle)*de.d,de.mesh.rotation.y+=.005}),B.position.x=Math.cos(ce*.22)*8.5,B.position.z=Math.sin(ce*.22)*8.5,B.position.y=Math.sin(ce*.06)*1,g.rotation.y=ce*.0012,R.scale.setScalar(1+Math.sin(ce*.35)*.05),n.render(r,a)};F();const G=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",G);const $=document.getElementById("cosmos-wrapper");let ee=null;return $&&(ee=Vt.timeline({scrollTrigger:{trigger:$,start:"top top",end:"+=400%",pin:!0,scrub:1,anticipatePin:1}}),ee.to(a.position,{x:3,y:14,z:30,duration:.25,ease:"none"},0),ee.to(M.scale,{x:.2,y:.2,z:.2,duration:.4,ease:"none"},.25),ee.to(M.position,{x:-16,y:8,z:-22,duration:.4,ease:"none"},.25),U.forEach(ce=>{ee.to(ce.mesh.scale,{x:.2,y:.2,z:.2,duration:.4,ease:"none"},.25)}),I.forEach(ce=>{ee.to(ce.material,{opacity:0,duration:.4,ease:"none"},.25)}),ee.to(A.position,{x:0,y:0,z:0,duration:.4,ease:"none"},.25),ee.to(a.position,{x:0,y:0,z:12,duration:.4,ease:"none"},.25),ee.to(z,{opacity:.1,duration:.2,ease:"none"},.65),ee.to(a.position,{x:2,y:1,z:9,duration:.35,ease:"none"},.65)),()=>{cancelAnimationFrame(q),window.removeEventListener("resize",G),ee&&ee.kill(),St.getAll().forEach(ce=>ce.kill()),n.dispose()}},[]),ke.jsx("canvas",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1}})}function lP(){const o=Zt.useRef(null),[e,t]=Zt.useState(!1);return Zt.useEffect(()=>{const n=o.current;Vt.from(n,{y:-80,opacity:0,duration:1.2,ease:"power3.out",delay:.5});const r=()=>t(window.scrollY>60);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),ke.jsxs("nav",{ref:o,style:{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"20px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:e?"blur(16px)":"none",background:e?"rgba(2,2,6,0.75)":"transparent",borderBottom:e?"1px solid rgba(0,229,255,0.06)":"1px solid transparent",transition:"all 0.4s ease"},children:[ke.jsx("div",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"18px",fontWeight:700,letterSpacing:"4px",color:"var(--cyan)",textShadow:"0 0 12px rgba(0,229,255,0.35)"},children:"SIMULIVERSE"}),ke.jsx("div",{className:"hide-mobile",style:{display:"flex",gap:"32px",fontFamily:"'Space Mono', monospace",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase"},children:["Foundry","Terminal","Metrics"].map(n=>ke.jsx("a",{href:`#${n.toLowerCase()}`,style:{color:"rgba(224,230,240,0.50)",textDecoration:"none",transition:"color 0.3s",cursor:"pointer"},onMouseEnter:r=>r.target.style.color="var(--cyan)",onMouseLeave:r=>r.target.style.color="rgba(224,230,240,0.50)",children:n},n))})]})}function uP({text:o,as:e="div",className:t="",style:n={}}){const r=Zt.useRef(null);return Zt.useEffect(()=>{const a=r.current;if(!a)return;const c=()=>{a.classList.add("glitch-active"),setTimeout(()=>a.classList.remove("glitch-active"),250)},u=setInterval(()=>{Math.random()>.6&&c()},3e3+Math.random()*4e3);return()=>clearInterval(u)},[]),ke.jsxs(e,{ref:r,className:`glitch-text ${t}`,style:n,"data-text":o,children:[o,ke.jsx("style",{children:`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          opacity: 0;
        }
        .glitch-text::before {
          color: var(--magenta);
          z-index: -1;
        }
        .glitch-text::after {
          color: var(--cyan);
          z-index: -2;
        }
        .glitch-active::before {
          animation: glitch1 0.25s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }
        .glitch-active::after {
          animation: glitch2 0.25s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }
        @keyframes glitch1 {
          0% { opacity: 0.8; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(-3px, 2px); }
          40% { opacity: 0.8; transform: translate(-3px, -2px); }
          60% { opacity: 0.8; transform: translate(3px, 2px); }
          80% { opacity: 0.8; transform: translate(3px, -2px); }
          100% { opacity: 0; transform: translate(0); }
        }
        @keyframes glitch2 {
          0% { opacity: 0.8; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(3px, -2px); }
          40% { opacity: 0.8; transform: translate(3px, 2px); }
          60% { opacity: 0.8; transform: translate(-3px, -2px); }
          80% { opacity: 0.8; transform: translate(-3px, 2px); }
          100% { opacity: 0; transform: translate(0); }
        }
      `})]})}function cP({children:o,onClick:e,className:t=""}){const n=Zt.useRef(null),r=c=>{const u=n.current;if(!u)return;const f=u.getBoundingClientRect(),d=c.clientX-f.left-f.width/2,p=c.clientY-f.top-f.height/2;u.style.transform=`translate(${d*.3}px, ${p*.3}px)`},a=()=>{const c=n.current;c&&(c.style.transform="translate(0,0)")};return ke.jsxs("button",{ref:n,onClick:e,onMouseMove:r,onMouseLeave:a,className:`magnetic-btn ${t}`,style:{position:"relative",display:"inline-block",padding:"20px 52px",fontFamily:"'Space Mono', monospace",fontSize:"12px",letterSpacing:"3px",fontWeight:700,textTransform:"uppercase",color:"var(--void)",background:"var(--cyan)",border:"none",cursor:"pointer",overflow:"hidden",boxShadow:"0 0 30px rgba(0,240,255,0.35), inset 0 0 20px rgba(255,255,255,0.15)",transition:"transform 0.15s ease-out, box-shadow 0.3s ease",willChange:"transform"},children:[o,ke.jsx("span",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",transition:"left 0.5s ease"},className:"magnetic-shine"}),ke.jsx("style",{children:`
        .magnetic-btn:hover { box-shadow: 0 0 50px rgba(0,240,255,0.55), inset 0 0 30px rgba(255,255,255,0.25); }
        .magnetic-btn:hover .magnetic-shine { left: 100% !important; }
      `})]})}Vt.registerPlugin(St);function fP(){const o=Zt.useRef(null);return Zt.useEffect(()=>{const e=Vt.context(()=>{Vt.from(".hero-title-v2",{opacity:0,y:50,duration:1.5,ease:"power3.out",delay:.5}),Vt.from(".hero-tagline-v2",{opacity:0,y:25,duration:1,ease:"power3.out",delay:1.4}),Vt.from(".hero-cta-v2",{opacity:0,y:20,duration:1,ease:"power3.out",delay:2}),Vt.from(".scroll-hint-v2",{opacity:0,duration:1.2,delay:2.8}),Vt.to(".hero-content-v2",{scrollTrigger:{trigger:"#cosmos-wrapper",start:"8% top",end:"28% top",scrub:!0},opacity:0,y:-30,ease:"none"});const t="Birth your AI in a world before it touches reality.",n=o.current;let r=0;const a=()=>{r<=t.length?(n.innerHTML=t.substring(0,r)+'<span class="cursor-blink">|</span>',r++,setTimeout(a,26+Math.random()*30)):n.innerHTML=t+'<span class="cursor-blink">|</span>'};setTimeout(a,2e3)});return()=>e.revert()},[]),ke.jsxs("section",{style:{position:"relative",zIndex:5,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px",pointerEvents:"none"},children:[ke.jsxs("div",{className:"hero-content-v2",style:{pointerEvents:"auto"},children:[ke.jsx("div",{className:"hero-title-v2",style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(38px, 11vw, 140px)",fontWeight:900,letterSpacing:"14px",color:"var(--ghost)",lineHeight:1.05,textShadow:"0 0 50px rgba(0,229,255,0.12), 0 0 120px rgba(0,229,255,0.04)"},children:ke.jsx(uP,{text:"SIMULIVERSE"})}),ke.jsx("div",{ref:o,className:"hero-tagline-v2",style:{fontFamily:"'Space Mono', monospace",fontSize:"clamp(10px, 1.2vw, 13px)",color:"rgba(224,230,240,0.50)",marginTop:"28px",maxWidth:"520px",lineHeight:1.9,letterSpacing:"1px",minHeight:"55px"}}),ke.jsx("div",{className:"hero-cta-v2",style:{marginTop:"44px"},children:ke.jsx(cP,{onClick:()=>{var e;return(e=document.getElementById("foundry"))==null?void 0:e.scrollIntoView({behavior:"smooth"})},children:"> INITIATE_SIMULATION()"})})]}),ke.jsxs("div",{className:"scroll-hint-v2",style:{position:"absolute",bottom:"36px",left:"50%",transform:"translateX(-50%)",fontFamily:"'Space Mono', monospace",fontSize:"9px",letterSpacing:"5px",color:"rgba(224,230,240,0.22)",textAlign:"center"},children:["SCROLL TO DESCEND",ke.jsx("div",{style:{width:"1px",height:"36px",background:"linear-gradient(to bottom, var(--cyan), transparent)",margin:"12px auto 0",animation:"scrollLine 2.5s ease-in-out infinite"}})]})]})}const Kx="!<>-_/[]{}—=+*^?#________";function _h({text:o,className:e="",delay:t=0}){const n=Zt.useRef(null);return Zt.useEffect(()=>{const r=n.current;if(!r)return;const a=o;let c=0;const u=40;let f;const d=()=>{let _="";const g=c/u;for(let v=0;v<a.length;v++)a[v]===" "?_+=" ":v/a.length<g?_+=a[v]:_+=Kx[Math.floor(Math.random()*Kx.length)];r.textContent=_,c++,c<=u?f=requestAnimationFrame(d):r.textContent=a},p=setTimeout(()=>{f=requestAnimationFrame(d)},t);return()=>{clearTimeout(p),cancelAnimationFrame(f)}},[o,t]),ke.jsx("span",{ref:n,className:e,children:o})}Vt.registerPlugin(St);function hP(){const o=Zt.useRef(null);return Zt.useEffect(()=>{const e=Vt.context(()=>{Vt.from(".earth-label",{scrollTrigger:{trigger:"#cosmos-wrapper",start:"50% top",end:"68% top",scrub:!0},y:35,opacity:0,ease:"none"}),Vt.from(".earth-sub",{scrollTrigger:{trigger:"#cosmos-wrapper",start:"55% top",end:"72% top",scrub:!0},y:25,opacity:0,ease:"none"}),Vt.utils.toArray(".earth-data-line").forEach((t,n)=>{Vt.from(t,{scrollTrigger:{trigger:"#cosmos-wrapper",start:`${60+n*5}% top`,end:`${72+n*5}% top`,scrub:!0},x:-18,opacity:0,ease:"none"})})},o);return()=>e.revert()},[]),ke.jsx("section",{ref:o,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none",zIndex:5},children:ke.jsxs("div",{style:{textAlign:"center"},children:[ke.jsx("div",{className:"earth-label",style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(16px, 3vw, 36px)",fontWeight:700,letterSpacing:"10px",color:"var(--ghost)",textShadow:"0 0 30px rgba(0,229,255,0.20), 0 0 80px rgba(0,229,255,0.06)",marginBottom:"14px"},children:ke.jsx(_h,{text:"ENTERING THE SIMULATION"})}),ke.jsx("div",{className:"earth-sub",style:{fontFamily:"'Space Mono', monospace",fontSize:"clamp(8px, 1vw, 11px)",letterSpacing:"5px",color:"rgba(224,230,240,0.30)",textTransform:"uppercase"},children:"UNIVERSE OF SIMULATION // EARTH NODE_01"}),ke.jsx("div",{style:{marginTop:"36px",textAlign:"left",fontFamily:"'Space Mono', monospace",fontSize:"10px",letterSpacing:"1px",lineHeight:2.2,color:"rgba(0,229,255,0.40)"},children:["> gravitational_constant: 6.67430e-11","> atmospheric_density: 1.225 kg/m³","> simulation_fidelity: 99.997%","> active_agents: 8,192,000,000","> render_mode: GHIBLI_SHADED"].map((e,t)=>ke.jsx("div",{className:"earth-data-line",children:e},t))})]})})}Vt.registerPlugin(St);const dP=[{icon:"◈",title:"ARCHITECT",desc:"Neural architecture search across 10,000 candidates. Predict training cost and accuracy before burning a single GPU hour.",color:"var(--cyan)"},{icon:"◉",title:"CRITIC",desc:"1,000 AI judge personas rate every response. No human labelers. No bias blindspots. Pure automated feedback at scale.",color:"var(--magenta)"},{icon:"◆",title:"ORACLE",desc:"Predicts training trajectory from the first 1% of steps. Know when to stop, when to pivot, when your model is ready.",color:"var(--amber)"}];function pP(){const o=Zt.useRef(null);return Zt.useEffect(()=>{const e=Vt.context(()=>{Vt.utils.toArray(".foundry-card").forEach((t,n)=>{Vt.from(t,{scrollTrigger:{trigger:t,start:"top 88%",toggleActions:"play none none none"},y:70,opacity:0,duration:.9,delay:n*.12,ease:"power3.out"})})},o);return()=>e.revert()},[]),ke.jsxs("section",{id:"foundry",ref:o,style:{position:"relative",zIndex:10,maxWidth:"1200px",margin:"0 auto",padding:"140px 24px"},children:[ke.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:"10px",letterSpacing:"4px",color:"var(--cyan)",opacity:.5,textTransform:"uppercase",marginBottom:"14px"},children:"02 // THE FOUNDRY"}),ke.jsx("h2",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(26px, 5vw, 52px)",fontWeight:700,letterSpacing:"2px",marginBottom:"20px"},children:ke.jsx(_h,{text:"Where AI Is Born",delay:0})}),ke.jsx("p",{style:{fontSize:"15px",lineHeight:1.8,color:"rgba(224,230,240,0.50)",maxWidth:"640px",marginBottom:"60px"},children:"Every agent that graduates from Simuliverse has survived a lifetime of adversarial testing before touching a real human. We do not guess. We simulate. We break. We harden."}),ke.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:dP.map((e,t)=>ke.jsxs("div",{className:"foundry-card",style:{position:"relative",background:"rgba(4,4,10,0.70)",border:"1px solid rgba(0,229,255,0.07)",padding:"48px 36px",overflow:"hidden",backdropFilter:"blur(14px)",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",cursor:"default"},onMouseEnter:n=>{n.currentTarget.style.borderColor=e.color,n.currentTarget.style.transform="translateY(-8px)",n.currentTarget.style.boxShadow=`0 24px 48px ${e.color}12, 0 0 0 1px ${e.color}18`},onMouseLeave:n=>{n.currentTarget.style.borderColor="rgba(0,229,255,0.07)",n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="none"},children:[ke.jsx("div",{style:{position:"absolute",top:0,left:0,width:"20px",height:"20px",borderTop:`2px solid ${e.color}`,borderLeft:`2px solid ${e.color}`,opacity:.35}}),ke.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"20px",height:"20px",borderBottom:`2px solid ${e.color}`,borderRight:`2px solid ${e.color}`,opacity:.35}}),ke.jsx("div",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"38px",color:e.color,marginBottom:"18px",textShadow:`0 0 20px ${e.color}55`},children:e.icon}),ke.jsx("h3",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"14px",letterSpacing:"3px",fontWeight:700,marginBottom:"14px",color:"var(--ghost)"},children:e.title}),ke.jsx("p",{style:{fontSize:"13px",lineHeight:1.8,color:"rgba(224,230,240,0.45)"},children:e.desc})]},e.title))})]})}Vt.registerPlugin(St);const Zx=["[00:00:01] Initializing simulation environment...","[00:00:02] Loading 10,000 synthetic personas...","[00:00:03] Personas loaded: angry_customer_v2.1, confused_elder_v1.4","[00:00:04] Spawning adversarial red-team agents...","[00:00:05] Red team deployed: 50 jailbreak strategies active","[00:00:06] Agent_7B_customer_service: first contact established","[00:00:07] Agent_7B: hallucination detected on query #342","[00:00:08] Agent_7B: policy violation — unauthorized refund promise","[00:00:09] Critic scoring: empathy 3/10, compliance 2/10","[00:00:10] Agent_7B: FAILED — graduation denied","[00:00:11] Patching system prompt... guardrail layer v2 added","[00:00:12] Agent_7B_v2: re-entering simulation","[00:00:15] Agent_7B_v2: 1,000 conversations completed","[00:00:18] Agent_7B_v2: 9,847 conversations completed","[00:00:20] Critic scoring: empathy 9/10, compliance 10/10","[00:00:21] Agent_7B_v2: PASSED — graduation certificate issued","[00:00:22] Exporting weights to production cluster...","[00:00:23] Deployment complete. Zero real-world failures."];function mP(){const o=Zt.useRef(null),e=Zt.useRef(null),t=Zt.useRef(!1);return Zt.useEffect(()=>{const n=Vt.context(()=>{St.create({trigger:e.current,start:"top 82%",onEnter:()=>{if(t.current)return;t.current=!0;let r=0;const a=()=>{if(r>=Zx.length)return;const c=document.createElement("div");c.textContent=Zx[r],c.style.color="#00ff41",c.style.opacity="0",c.style.transform="translateX(-8px)",c.style.transition="all 0.3s ease",c.style.marginBottom="4px",e.current.appendChild(c),requestAnimationFrame(()=>{c.style.opacity="0.8",c.style.transform="translateX(0)"}),e.current.scrollTop=e.current.scrollHeight,r++,setTimeout(a,160+Math.random()*280)};a()},once:!0})},o);return()=>n.revert()},[]),ke.jsxs("section",{id:"terminal",ref:o,style:{position:"relative",zIndex:10,maxWidth:"1200px",margin:"0 auto",padding:"100px 24px"},children:[ke.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:"10px",letterSpacing:"4px",color:"var(--cyan)",opacity:.5,textTransform:"uppercase",marginBottom:"14px"},children:"03 // LIVE SIMULATION LOG"}),ke.jsx("h2",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(26px, 5vw, 52px)",fontWeight:700,letterSpacing:"2px",marginBottom:"32px"},children:ke.jsx(_h,{text:"Terminal Output",delay:0})}),ke.jsxs("div",{style:{background:"rgba(2,2,6,0.60)",border:"1px solid rgba(0,229,255,0.10)",borderRadius:"3px",padding:"28px",fontFamily:"'Space Mono', monospace",fontSize:"12px",lineHeight:2,position:"relative",overflow:"hidden",boxShadow:"0 0 40px rgba(0,229,255,0.03)",maxHeight:"420px",overflowY:"auto"},children:[ke.jsx("div",{style:{color:"var(--cyan)",marginBottom:"16px",paddingBottom:"10px",borderBottom:"1px solid rgba(0,229,255,0.10)",fontSize:"11px",letterSpacing:"1px"},children:"simuliverse@foundry:~$ ./init_simulation.sh --agents=10000 --mode=adversarial"}),ke.jsx("div",{ref:e})]})]})}Vt.registerPlugin(St);const gP=[{target:1e4,label:"Synthetic Personas",suffix:"+"},{target:1e6,label:"Adversarial Tests",suffix:"+"},{target:99.7,label:"Failure Detection %",suffix:"%",decimal:1},{target:80,label:"% Cost Reduction",suffix:"%"}];function _P({target:o,decimal:e,suffix:t}){const n=Zt.useRef(null),r=Zt.useRef(!1);return Zt.useEffect(()=>{const a=n.current;if(!a||r.current)return;const c="0123456789",u=2200;let f;const d=St.create({trigger:a,start:"top 85%",onEnter:()=>{if(r.current)return;r.current=!0;const p=performance.now(),_=e?o.toFixed(1):o.toLocaleString(),g=v=>{const E=Math.min((v-p)/u,1);let M="";for(let x=0;x<_.length;x++)_[x]==="."||_[x]===","?M+=_[x]:Math.random()>E?M+=c[Math.floor(Math.random()*c.length)]:M+=_[x];a.textContent=M+t,E<1?f=requestAnimationFrame(g):a.textContent=(e?o.toFixed(1):o.toLocaleString())+t};f=requestAnimationFrame(g)},once:!0});return()=>{d.kill(),cancelAnimationFrame(f)}},[o,e,t]),ke.jsxs("span",{ref:n,style:{fontVariantNumeric:"tabular-nums"},children:["0",t]})}function vP(){const o=Zt.useRef(null);return Zt.useEffect(()=>{const e=Vt.context(()=>{Vt.utils.toArray(".stat-item").forEach((t,n)=>{Vt.from(t,{scrollTrigger:{trigger:t,start:"top 90%"},y:40,opacity:0,duration:.7,delay:n*.1,ease:"power2.out"})})},o);return()=>e.revert()},[]),ke.jsxs("section",{id:"metrics",ref:o,style:{position:"relative",zIndex:10,maxWidth:"1200px",margin:"0 auto",padding:"100px 24px"},children:[ke.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:"10px",letterSpacing:"4px",color:"var(--cyan)",opacity:.5,textTransform:"uppercase",marginBottom:"14px"},children:"04 // METRICS"}),ke.jsx("h2",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(26px, 5vw, 52px)",fontWeight:700,letterSpacing:"2px",marginBottom:"20px"},children:ke.jsx(_h,{text:"By The Numbers",delay:0})}),ke.jsx("p",{style:{fontSize:"15px",lineHeight:1.8,color:"rgba(224,230,240,0.50)",maxWidth:"640px",marginBottom:"60px"},children:"Our simulation engine has tested, broken, and graduated AI agents at a scale no manual QA team can match."}),ke.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"28px"},children:gP.map(e=>ke.jsxs("div",{className:"stat-item",style:{textAlign:"center",padding:"40px 20px",border:"1px solid rgba(0,229,255,0.05)",background:"rgba(0,229,255,0.012)",position:"relative",overflow:"hidden"},children:[ke.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, var(--cyan), transparent)",opacity:.45}}),ke.jsx("div",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"clamp(28px, 4vw, 48px)",fontWeight:900,color:"var(--cyan)",textShadow:"0 0 20px rgba(0,229,255,0.30)",letterSpacing:"2px"},children:ke.jsx(_P,{target:e.target,decimal:e.decimal,suffix:e.suffix})}),ke.jsx("div",{style:{fontFamily:"'Space Mono', monospace",fontSize:"10px",letterSpacing:"2px",color:"rgba(224,230,240,0.35)",marginTop:"10px",textTransform:"uppercase"},children:e.label})]},e.label))})]})}function xP(){return ke.jsxs("footer",{style:{position:"relative",zIndex:10,textAlign:"center",padding:"70px 24px",fontFamily:"'Space Mono', monospace",fontSize:"10px",color:"rgba(224,230,240,0.18)",letterSpacing:"3px",borderTop:"1px solid rgba(0,229,255,0.05)"},children:[ke.jsx("div",{style:{fontFamily:"'Orbitron', sans-serif",fontSize:"14px",letterSpacing:"6px",color:"rgba(0,229,255,0.12)",marginBottom:"16px"},children:"SIMULIVERSE"}),"© 2026 SIMULIVERSE. BUILT IN THE SIMULATION."]})}function yP(){return VT(),ke.jsxs("div",{className:"crt cosmos-theme",style:{position:"relative",minHeight:"100vh"},children:[ke.jsx(aP,{}),ke.jsx(lP,{}),ke.jsxs("div",{id:"cosmos-wrapper",style:{position:"relative",zIndex:5,height:"100vh"},children:[ke.jsx(fP,{}),ke.jsx(hP,{})]}),ke.jsxs("div",{style:{position:"relative",zIndex:10,background:"linear-gradient(to bottom, transparent 0%, rgba(2,2,4,0.82) 6%, var(--void) 18%)"},children:[ke.jsx(pP,{}),ke.jsx(mP,{}),ke.jsx(vP,{}),ke.jsx(xP,{})]})]})}qE.createRoot(document.getElementById("root")).render(ke.jsx(HE.StrictMode,{children:ke.jsx(yP,{})}));
