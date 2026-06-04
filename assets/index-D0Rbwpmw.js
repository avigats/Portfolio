(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Do={};var b0;function SS(){if(b0)return Do;b0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var T0;function MS(){return T0||(T0=1,Qf.exports=SS()),Qf.exports}var C=MS(),Jf={exports:{}},at={};var A0;function yS(){if(A0)return at;A0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function v(I,J,xe){this.props=I,this.context=J,this.refs=M,this.updater=xe||b}v.prototype.isReactComponent={},v.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=v.prototype;function P(I,J,xe){this.props=I,this.context=J,this.refs=M,this.updater=xe||b}var L=P.prototype=new D;L.constructor=P,N(L,v.prototype),L.isPureReactComponent=!0;var X=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function B(I,J,xe){var Ae=xe.ref;return{$$typeof:o,type:I,key:J,ref:Ae!==void 0?Ae:null,props:xe}}function Z(I,J){return B(I.type,J,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function K(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xe){return J[xe]})}var ue=/\/+/g;function pe(I,J){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):J.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function U(I,J,xe,Ae,De){var oe=typeof I;(oe==="undefined"||oe==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(oe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case o:case t:Se=!0;break;case S:return Se=I._init,U(Se(I._payload),J,xe,Ae,De)}}if(Se)return De=De(I),Se=Ae===""?"."+pe(I,0):Ae,X(De)?(xe="",Se!=null&&(xe=Se.replace(ue,"$&/")+"/"),U(De,J,xe,"",function($e){return $e})):De!=null&&(F(De)&&(De=Z(De,xe+(De.key==null||I&&I.key===De.key?"":(""+De.key).replace(ue,"$&/")+"/")+Se)),J.push(De)),1;Se=0;var be=Ae===""?".":Ae+":";if(X(I))for(var He=0;He<I.length;He++)Ae=I[He],oe=be+pe(Ae,He),Se+=U(Ae,J,xe,oe,De);else if(He=y(I),typeof He=="function")for(I=He.call(I),He=0;!(Ae=I.next()).done;)Ae=Ae.value,oe=be+pe(Ae,He++),Se+=U(Ae,J,xe,oe,De);else if(oe==="object"){if(typeof I.then=="function")return U(W(I),J,xe,Ae,De);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function H(I,J,xe){if(I==null)return I;var Ae=[],De=0;return U(I,Ae,"","",function(oe){return J.call(xe,oe,De++)}),Ae}function re(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(xe){(I._status===0||I._status===-1)&&(I._status=1,I._result=xe)},function(xe){(I._status===0||I._status===-1)&&(I._status=2,I._result=xe)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var ge=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ye={map:H,forEach:function(I,J,xe){H(I,function(){J.apply(this,arguments)},xe)},count:function(I){var J=0;return H(I,function(){J++}),J},toArray:function(I){return H(I,function(J){return J})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return at.Activity=x,at.Children=ye,at.Component=v,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},at.cache=function(I){return function(){return I.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(I,J,xe){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=N({},I.props),De=I.key;if(J!=null)for(oe in J.key!==void 0&&(De=""+J.key),J)!T.call(J,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&J.ref===void 0||(Ae[oe]=J[oe]);var oe=arguments.length-2;if(oe===1)Ae.children=xe;else if(1<oe){for(var Se=Array(oe),be=0;be<oe;be++)Se[be]=arguments[be+2];Ae.children=Se}return B(I.type,De,Ae)},at.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},at.createElement=function(I,J,xe){var Ae,De={},oe=null;if(J!=null)for(Ae in J.key!==void 0&&(oe=""+J.key),J)T.call(J,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=J[Ae]);var Se=arguments.length-2;if(Se===1)De.children=xe;else if(1<Se){for(var be=Array(Se),He=0;He<Se;He++)be[He]=arguments[He+2];De.children=be}if(I&&I.defaultProps)for(Ae in Se=I.defaultProps,Se)De[Ae]===void 0&&(De[Ae]=Se[Ae]);return B(I,oe,De)},at.createRef=function(){return{current:null}},at.forwardRef=function(I){return{$$typeof:p,render:I}},at.isValidElement=F,at.lazy=function(I){return{$$typeof:S,_payload:{_status:-1,_result:I},_init:re}},at.memo=function(I,J){return{$$typeof:h,type:I,compare:J===void 0?null:J}},at.startTransition=function(I){var J=z.T,xe={};z.T=xe;try{var Ae=I(),De=z.S;De!==null&&De(xe,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,ge)}catch(oe){ge(oe)}finally{J!==null&&xe.types!==null&&(J.types=xe.types),z.T=J}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(I){return z.H.use(I)},at.useActionState=function(I,J,xe){return z.H.useActionState(I,J,xe)},at.useCallback=function(I,J){return z.H.useCallback(I,J)},at.useContext=function(I){return z.H.useContext(I)},at.useDebugValue=function(){},at.useDeferredValue=function(I,J){return z.H.useDeferredValue(I,J)},at.useEffect=function(I,J){return z.H.useEffect(I,J)},at.useEffectEvent=function(I){return z.H.useEffectEvent(I)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(I,J,xe){return z.H.useImperativeHandle(I,J,xe)},at.useInsertionEffect=function(I,J){return z.H.useInsertionEffect(I,J)},at.useLayoutEffect=function(I,J){return z.H.useLayoutEffect(I,J)},at.useMemo=function(I,J){return z.H.useMemo(I,J)},at.useOptimistic=function(I,J){return z.H.useOptimistic(I,J)},at.useReducer=function(I,J,xe){return z.H.useReducer(I,J,xe)},at.useRef=function(I){return z.H.useRef(I)},at.useState=function(I){return z.H.useState(I)},at.useSyncExternalStore=function(I,J,xe){return z.H.useSyncExternalStore(I,J,xe)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.4",at}var R0;function Ch(){return R0||(R0=1,Jf.exports=yS()),Jf.exports}var Xo=Ch(),$f={exports:{}},No={},ed={exports:{}},td={};var C0;function ES(){return C0||(C0=1,(function(o){function t(U,H){var re=U.length;U.push(H);e:for(;0<re;){var ge=re-1>>>1,ye=U[ge];if(0<l(ye,H))U[ge]=H,U[re]=ye,re=ge;else break e}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var H=U[0],re=U.pop();if(re!==H){U[0]=re;e:for(var ge=0,ye=U.length,I=ye>>>1;ge<I;){var J=2*(ge+1)-1,xe=U[J],Ae=J+1,De=U[Ae];if(0>l(xe,re))Ae<ye&&0>l(De,xe)?(U[ge]=De,U[Ae]=re,ge=Ae):(U[ge]=xe,U[J]=re,ge=J);else if(Ae<ye&&0>l(De,re))U[ge]=De,U[Ae]=re,ge=Ae;else break e}}return H}function l(U,H){var re=U.sortIndex-H.sortIndex;return re!==0?re:U.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,g=3,y=!1,b=!1,N=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=U)s(h),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(h)}}function X(U){if(N=!1,L(U),!b)if(i(m)!==null)b=!0,O||(O=!0,K());else{var H=i(h);H!==null&&W(X,H.startTime-U)}}var O=!1,z=-1,T=5,B=-1;function Z(){return M?!0:!(o.unstable_now()-B<T)}function F(){if(M=!1,O){var U=o.unstable_now();B=U;var H=!0;try{e:{b=!1,N&&(N=!1,D(z),z=-1),y=!0;var re=g;try{t:{for(L(U),x=i(m);x!==null&&!(x.expirationTime>U&&Z());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,g=x.priorityLevel;var ye=ge(x.expirationTime<=U);if(U=o.unstable_now(),typeof ye=="function"){x.callback=ye,L(U),H=!0;break t}x===i(m)&&s(m),L(U)}else s(m);x=i(m)}if(x!==null)H=!0;else{var I=i(h);I!==null&&W(X,I.startTime-U),H=!1}}break e}finally{x=null,g=re,y=!1}H=void 0}}finally{H?K():O=!1}}}var K;if(typeof P=="function")K=function(){P(F)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=F,K=function(){pe.postMessage(null)}}else K=function(){v(F,0)};function W(U,H){z=v(function(){U(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var re=g;g=H;try{return U()}finally{g=re}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=g;g=U;try{return H()}finally{g=re}},o.unstable_scheduleCallback=function(U,H,re){var ge=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ge+re:ge):re=ge,U){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=re+ye,U={id:S++,callback:H,priorityLevel:U,startTime:re,expirationTime:ye,sortIndex:-1},re>ge?(U.sortIndex=re,t(h,U),i(m)===null&&U===i(h)&&(N?(D(z),z=-1):N=!0,W(X,re-ge))):(U.sortIndex=ye,t(m,U),b||y||(b=!0,O||(O=!0,K()))),U},o.unstable_shouldYield=Z,o.unstable_wrapCallback=function(U){var H=g;return function(){var re=g;g=H;try{return U.apply(this,arguments)}finally{g=re}}}})(td)),td}var w0;function bS(){return w0||(w0=1,ed.exports=ES()),ed.exports}var nd={exports:{}},Nn={};var D0;function TS(){if(D0)return Nn;D0=1;var o=Ch();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return u(m,h,null,S)},Nn.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):S==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var N0;function AS(){if(N0)return nd.exports;N0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=TS(),nd.exports}var U0;function RS(){if(U0)return No;U0=1;var o=bS(),t=Ch(),i=AS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,r=f;break}if(R===r){_=!0,r=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=c;break}if(R===r){_=!0,r=f,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case O:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case P:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var W=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ge=[],ye=-1;function I(e){return{current:e}}function J(e){0>ye||(e.current=ge[ye],ge[ye]=null,ye--)}function xe(e,n){ye++,ge[ye]=e.current,e.current=n}var Ae=I(null),De=I(null),oe=I(null),Se=I(null);function be(e,n){switch(xe(oe,n),xe(De,e),xe(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=qg(n),e=Yg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Ae),xe(Ae,e)}function He(){J(Ae),J(De),J(oe)}function $e(e){e.memoizedState!==null&&xe(Se,e);var n=Ae.current,a=Yg(n,e.type);n!==a&&(xe(De,e),xe(Ae,a))}function Qe(e){De.current===e&&(J(Ae),J(De)),Se.current===e&&(J(Se),Ao._currentValue=re)}var kt,ft;function _t(e){if(kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);kt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+ft}var Nt=!1;function lt(e,n){if(!e||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var se=le}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(le){se=le}e.call(ve.prototype)}}else{try{throw Error()}catch(le){se=le}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var G=_.split(`
`),ee=R.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===ee.length)for(r=G.length-1,c=ee.length-1;1<=r&&0<=c&&G[r]!==ee[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==ee[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==ee[c]){var de=`
`+G[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=c);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return _t("Activity");default:return""}}function Wt(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yn=Object.prototype.hasOwnProperty,j=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,dt=o.unstable_shouldYield,zt=o.unstable_requestPaint,Re=o.unstable_now,Zt=o.unstable_getCurrentPriorityLevel,w=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,Q=o.unstable_NormalPriority,_e=o.unstable_LowPriority,Ee=o.unstable_IdlePriority,Ce=o.log,Le=o.unstable_setDisableYieldValue,ce=null,fe=null;function Oe(e){if(typeof Ce=="function"&&Le(e),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,e)}catch{}}var Pe=Math.clz32?Math.clz32:nt,Ne=Math.log,we=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(Ne(e)/we|0)|0}var it=256,ht=262144,V=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function he(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=Te(r):(_&=R,_!==0?c=Te(_):a||(a=R&~e,a!==0&&(c=Te(a))))):(R=r&~f,R!==0?c=Te(R):_!==0?c=Te(_):a||(a=r&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ze(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function We(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function et(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ee=e.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),ve=1<<de;R[de]=0,G[de]=-1;var se=ee[de];if(se!==null)for(ee[de]=null,de=0;de<se.length;de++){var le=se[de];le!==null&&(le.lane&=-536870913)}a&=~ve}r!==0&&Rt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Rt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function si(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pe(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function qn(e,n){var a=n&-n;return a=(a&42)!==0?1:ss(a),(a&(e.suspendedLanes|n))!==0?0:a}function ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_0(e.type))}function Fr(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var wn=Math.random().toString(36).slice(2),sn="__reactFiber$"+wn,En="__reactProps$"+wn,Wi="__reactContainer$"+wn,Ma="__reactEvents$"+wn,Zo="__reactListeners$"+wn,Bs="__reactHandles$"+wn,Hr="__reactResources$"+wn,ya="__reactMarker$"+wn;function Gr(e){delete e[sn],delete e[En],delete e[Ma],delete e[Zo],delete e[Bs]}function Ea(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=t0(e);e!==null;){if(a=e[sn])return a;e=t0(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[sn]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[Hr];return n||(n=e[Hr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[ya]=!0}var Ko=new Set,A={};function q(e,n){ae(e,n),ae(e+"Capture",n)}function ae(e,n){for(A[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Be={};function Ve(e){return yn.call(Be,e)?!0:yn.call(ne,e)?!1:te.test(e)?Be[e]=!0:(ne[e]=!0,!1)}function Ie(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ke(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bt(e){if(!e._valueTracker){var n=rt(e)?"checked":"value";e._valueTracker=Ye(e,n,""+e[n])}}function Kt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=rt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Lt(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,r,c,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ze(n)):e.value!==""+Ze(n)&&(e.value=""+Ze(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?pt(e,_,Ze(n)):a!=null?pt(e,_,Ze(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Ze(R):e.removeAttribute("name")}function Dn(e,n,a,r,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bt(e);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),bt(e)}function pt(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Yn(e,n,a){if(n!=null&&(n=""+Ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ze(a):""}function Mi(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ze(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),bt(e)}function Zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ot=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Ot.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Qt(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Qt(e,f,n[f])}function Dt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Aa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function os(e){return Aa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var qc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Fs=null;function Wh(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[En]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[En]||null;if(!c)throw Error(s(90));Ge(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Kt(r)}break e;case"textarea":Yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var Zc=!1;function qh(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var r=e(n);return r}finally{if(Zc=!1,(zs!==null||Fs!==null)&&(Bl(),zs&&(n=zs,e=Fs,Fs=zs=null,Wh(n),e)))for(n=0;n<e.length;n++)Wh(e[n])}}function Vr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[En]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Yi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Kc=!1}var Ra=null,Qc=null,Qo=null;function Yh(){if(Qo)return Qo;var e,n=Qc,a=n.length,r,c="value"in Ra?Ra.value:Ra.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Qo=c.slice(e,1<r?1-r:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Zh(){return!1}function zn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Zh,this.isPropagationStopped=Zh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=zn(ls),Xr=x({},ls,{view:0,detail:0}),vv=zn(Xr),Jc,$c,jr,tl=x({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Jc=e.screenX-jr.screenX,$c=e.screenY-jr.screenY):$c=Jc=0,jr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Kh=zn(tl),xv=x({},tl,{dataTransfer:0}),Sv=zn(xv),Mv=x({},Xr,{relatedTarget:0}),eu=zn(Mv),yv=x({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=zn(yv),bv=x({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tv=zn(bv),Av=x({},ls,{data:0}),Qh=zn(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wv[e])?!!n[e]:!1}function tu(){return Dv}var Nv=x({},Xr,{key:function(e){if(e.key){var n=Rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uv=zn(Nv),Lv=x({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=zn(Lv),Ov=x({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Pv=zn(Ov),Iv=x({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=zn(Iv),zv=x({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=zn(zv),Hv=x({},ls,{newState:0,oldState:0}),Gv=zn(Hv),Vv=[9,13,27,32],nu=Yi&&"CompositionEvent"in window,Wr=null;Yi&&"documentMode"in document&&(Wr=document.documentMode);var kv=Yi&&"TextEvent"in window&&!Wr,$h=Yi&&(!nu||Wr&&8<Wr&&11>=Wr),ep=" ",tp=!1;function np(e,n){switch(e){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function Xv(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(tp=!0,ep);case"textInput":return e=n.data,e===ep&&tp?null:e;default:return null}}function jv(e,n){if(Hs)return e==="compositionend"||!nu&&np(e,n)?(e=Yh(),Qo=Qc=Ra=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $h&&n.locale!=="ko"?null:n.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wv[e.type]:n==="textarea"}function sp(e,n,a,r){zs?Fs?Fs.push(r):Fs=[r]:zs=r,n=Xl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var qr=null,Yr=null;function qv(e){Gg(e,0)}function nl(e){var n=rs(e);if(Kt(n))return e}function rp(e,n){if(e==="change")return n}var op=!1;if(Yi){var iu;if(Yi){var au="oninput"in document;if(!au){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),au=typeof lp.oninput=="function"}iu=au}else iu=!1;op=iu&&(!document.documentMode||9<document.documentMode)}function cp(){qr&&(qr.detachEvent("onpropertychange",up),Yr=qr=null)}function up(e){if(e.propertyName==="value"&&nl(Yr)){var n=[];sp(n,Yr,e,Yc(e)),qh(qv,n)}}function Yv(e,n,a){e==="focusin"?(cp(),qr=n,Yr=a,qr.attachEvent("onpropertychange",up)):e==="focusout"&&cp()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Yr)}function Kv(e,n){if(e==="click")return nl(n)}function Qv(e,n){if(e==="input"||e==="change")return nl(n)}function Jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Jv;function Zr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!yn.call(n,c)||!Kn(e[c],n[c]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=fp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $v=Yi&&"documentMode"in document&&11>=document.documentMode,Gs=null,ru=null,Kr=null,ou=!1;function mp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Gs==null||Gs!==Xt(r)||(r=Gs,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=Xl(ru,"onSelect"),0<r.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Gs)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},lu={},gp={};Yi&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function us(e){if(lu[e])return lu[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return lu[e]=n[a];return e}var _p=us("animationend"),vp=us("animationiteration"),xp=us("animationstart"),ex=us("transitionrun"),tx=us("transitionstart"),nx=us("transitioncancel"),Sp=us("transitionend"),Mp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function Ei(e,n){Mp.set(e,n),q(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],ks=0,uu=0;function al(){for(var e=ks,n=uu=ks=0;n<e;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&yp(a,c,f)}}function sl(e,n,a,r){ri[ks++]=e,ri[ks++]=n,ri[ks++]=a,ri[ks++]=r,uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fu(e,n,a,r){return sl(e,n,a,r),rl(e)}function fs(e,n){return sl(e,null,null,n),rl(e)}function yp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<xo)throw xo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function ix(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new ix(e,n,a,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,r,c,f){var _=0;if(r=e,typeof e=="function")du(e)&&(_=1);else if(typeof e=="string")_=lS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=Qn(31,a,n,c),e.elementType=B,e.lanes=f,e;case N:return ds(a.children,c,f,n);case M:_=8,c|=24;break;case v:return e=Qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case X:return e=Qn(13,a,n,c),e.elementType=X,e.lanes=f,e;case O:return e=Qn(19,a,n,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break e;case D:_=9;break e;case L:_=11;break e;case z:_=14;break e;case T:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ds(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function hu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function bp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Tp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Wt(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var js=[],Ws=0,ll=null,Qr=0,li=[],ci=0,Ca=null,Ui=1,Li="";function Ki(e,n){js[Ws++]=Qr,js[Ws++]=ll,ll=e,Qr=n}function Ap(e,n,a){li[ci++]=Ui,li[ci++]=Li,li[ci++]=Ca,Ca=e;var r=Ui;e=Li;var c=32-Pe(r)-1;r&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ui=1<<32-Pe(n)+c|a<<c|r,Li=f+e}else Ui=1<<f|a<<c|r,Li=e}function mu(e){e.return!==null&&(Ki(e,1),Ap(e,1,0))}function gu(e){for(;e===ll;)ll=js[--Ws],js[Ws]=null,Qr=js[--Ws],js[Ws]=null;for(;e===Ca;)Ca=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null,Ui=li[--ci],li[ci]=null}function Rp(e,n){li[ci++]=Ui,li[ci++]=Li,li[ci++]=Ca,Ui=n.id,Li=n.overflow,Ca=e}var bn=null,qt=null,St=!1,wa=null,ui=!1,_u=Error(s(519));function Da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(oi(n,e)),_u}function Cp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[En]=r,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)gt(Mo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||jg(n.textContent,a)?(r.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),r.onScroll!=null&&gt("scroll",n),r.onScrollEnd!=null&&gt("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Da(e,!0)}function wp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:bn=bn.return}}function qs(e){if(e!==bn)return!1;if(!St)return wp(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&qt&&Da(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=e0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=e0(e)}else n===27?(n=qt,Xa(e.type)?(e=Gf,Gf=null,qt=e):qt=n):qt=bn?di(e.stateNode.nextSibling):null;return!0}function hs(){qt=bn=null,St=!1}function vu(){var e=wa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),wa=null),e}function Jr(e){wa===null?wa=[e]:wa.push(e)}var xu=I(null),ps=null,Qi=null;function Na(e,n,a){xe(xu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=xu.current,J(xu)}function Su(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Su(f.return,a,e),r||(_=null);break e}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Su(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ys(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;Kn(c.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(c===Se.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Mu(n,e,a,r),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Dp(ps,e)}function ul(e,n){return ps===null&&ms(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,rx=o.unstable_NormalPriority,un={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new ax,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&sx(rx,function(){e.controller.abort()})}var eo=null,Eu=0,Zs=0,Ks=null;function ox(e,n){if(eo===null){var a=eo=[];Eu=0,Zs=Rf(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Np,Np),n}function Np(){if(--Eu===0&&eo!==null){Ks!==null&&(Ks.status="fulfilled");var e=eo;eo=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function lx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Up=U.S;U.S=function(e,n){mg=Re(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(e,n),Up!==null&&Up(e,n)};var gs=I(null);function bu(){var e=gs.current;return e!==null?e:jt.pooledCache}function fl(e,n){n===null?xe(gs,gs.current):xe(gs,n.pool)}function Lp(){var e=bu();return e===null?null:{parent:un._currentValue,pool:e}}var Qs=Error(s(460)),Tu=Error(s(474)),dl=Error(s(542)),hl={then:function(){}};function Op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw vs=n,Qs}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,Qs):a}}var vs=null;function Ip(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function Bp(e){if(e===Qs||e===dl)throw Error(s(483))}var Js=null,to=0;function pl(e){var n=to;return to+=1,Js===null&&(Js=[]),Pp(Js,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zp(e){function n(Y,k){if(e){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Zi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function _(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,$,me){return k===null||k.tag!==6?(k=hu($,Y.mode,me),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function G(Y,k,$,me){var Ke=$.type;return Ke===N?de(Y,k,$.props.children,me,$.key):k!==null&&(k.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&_s(Ke)===k.type)?(k=c(k,$.props),no(k,$),k.return=Y,k):(k=ol($.type,$.key,$.props,null,Y.mode,me),no(k,$),k.return=Y,k)}function ee(Y,k,$,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=pu($,Y.mode,me),k.return=Y,k):(k=c(k,$.children||[]),k.return=Y,k)}function de(Y,k,$,me,Ke){return k===null||k.tag!==7?(k=ds($,Y.mode,me,Ke),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function ve(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=hu(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=ol(k.type,k.key,k.props,null,Y.mode,$),no($,k),$.return=Y,$;case b:return k=pu(k,Y.mode,$),k.return=Y,k;case T:return k=_s(k),ve(Y,k,$)}if(W(k)||K(k))return k=ds(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return ve(Y,pl(k),$);if(k.$$typeof===P)return ve(Y,ul(Y,k),$);ml(Y,k)}return null}function se(Y,k,$,me){var Ke=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ke!==null?null:R(Y,k,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Ke?G(Y,k,$,me):null;case b:return $.key===Ke?ee(Y,k,$,me):null;case T:return $=_s($),se(Y,k,$,me)}if(W($)||K($))return Ke!==null?null:de(Y,k,$,me,null);if(typeof $.then=="function")return se(Y,k,pl($),me);if($.$$typeof===P)return se(Y,k,ul(Y,$),me);ml(Y,$)}return null}function le(Y,k,$,me,Ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get($)||null,R(k,Y,""+me,Ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return Y=Y.get(me.key===null?$:me.key)||null,G(k,Y,me,Ke);case b:return Y=Y.get(me.key===null?$:me.key)||null,ee(k,Y,me,Ke);case T:return me=_s(me),le(Y,k,$,me,Ke)}if(W(me)||K(me))return Y=Y.get($)||null,de(k,Y,me,Ke,null);if(typeof me.then=="function")return le(Y,k,$,pl(me),Ke);if(me.$$typeof===P)return le(Y,k,$,ul(k,me),Ke);ml(k,me)}return null}function je(Y,k,$,me){for(var Ke=null,Tt=null,qe=k,ct=k=0,xt=null;qe!==null&&ct<$.length;ct++){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var At=se(Y,qe,$[ct],me);if(At===null){qe===null&&(qe=xt);break}e&&qe&&At.alternate===null&&n(Y,qe),k=f(At,k,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At,qe=xt}if(ct===$.length)return a(Y,qe),St&&Ki(Y,ct),Ke;if(qe===null){for(;ct<$.length;ct++)qe=ve(Y,$[ct],me),qe!==null&&(k=f(qe,k,ct),Tt===null?Ke=qe:Tt.sibling=qe,Tt=qe);return St&&Ki(Y,ct),Ke}for(qe=r(qe);ct<$.length;ct++)xt=le(qe,Y,ct,$[ct],me),xt!==null&&(e&&xt.alternate!==null&&qe.delete(xt.key===null?ct:xt.key),k=f(xt,k,ct),Tt===null?Ke=xt:Tt.sibling=xt,Tt=xt);return e&&qe.forEach(function(Za){return n(Y,Za)}),St&&Ki(Y,ct),Ke}function Je(Y,k,$,me){if($==null)throw Error(s(151));for(var Ke=null,Tt=null,qe=k,ct=k=0,xt=null,At=$.next();qe!==null&&!At.done;ct++,At=$.next()){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var Za=se(Y,qe,At.value,me);if(Za===null){qe===null&&(qe=xt);break}e&&qe&&Za.alternate===null&&n(Y,qe),k=f(Za,k,ct),Tt===null?Ke=Za:Tt.sibling=Za,Tt=Za,qe=xt}if(At.done)return a(Y,qe),St&&Ki(Y,ct),Ke;if(qe===null){for(;!At.done;ct++,At=$.next())At=ve(Y,At.value,me),At!==null&&(k=f(At,k,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At);return St&&Ki(Y,ct),Ke}for(qe=r(qe);!At.done;ct++,At=$.next())At=le(qe,Y,ct,At.value,me),At!==null&&(e&&At.alternate!==null&&qe.delete(At.key===null?ct:At.key),k=f(At,k,ct),Tt===null?Ke=At:Tt.sibling=At,Tt=At);return e&&qe.forEach(function(xS){return n(Y,xS)}),St&&Ki(Y,ct),Ke}function Gt(Y,k,$,me){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var Ke=$.key;k!==null;){if(k.key===Ke){if(Ke=$.type,Ke===N){if(k.tag===7){a(Y,k.sibling),me=c(k,$.props.children),me.return=Y,Y=me;break e}}else if(k.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&_s(Ke)===k.type){a(Y,k.sibling),me=c(k,$.props),no(me,$),me.return=Y,Y=me;break e}a(Y,k);break}else n(Y,k);k=k.sibling}$.type===N?(me=ds($.props.children,Y.mode,me,$.key),me.return=Y,Y=me):(me=ol($.type,$.key,$.props,null,Y.mode,me),no(me,$),me.return=Y,Y=me)}return _(Y);case b:e:{for(Ke=$.key;k!==null;){if(k.key===Ke)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Y,k.sibling),me=c(k,$.children||[]),me.return=Y,Y=me;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}me=pu($,Y.mode,me),me.return=Y,Y=me}return _(Y);case T:return $=_s($),Gt(Y,k,$,me)}if(W($))return je(Y,k,$,me);if(K($)){if(Ke=K($),typeof Ke!="function")throw Error(s(150));return $=Ke.call($),Je(Y,k,$,me)}if(typeof $.then=="function")return Gt(Y,k,pl($),me);if($.$$typeof===P)return Gt(Y,k,ul(Y,$),me);ml(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Y,k.sibling),me=c(k,$),me.return=Y,Y=me):(a(Y,k),me=hu($,Y.mode,me),me.return=Y,Y=me),_(Y)):a(Y,k)}return function(Y,k,$,me){try{to=0;var Ke=Gt(Y,k,$,me);return Js=null,Ke}catch(qe){if(qe===Qs||qe===dl)throw qe;var Tt=Qn(29,qe,null,Y.mode);return Tt.lanes=me,Tt.return=Y,Tt}}}var xs=zp(!0),Fp=zp(!1),Ua=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ct&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(e),yp(e,null,a),n}return sl(e,r,n,a),rl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,si(e,a)}}function Cu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function ao(){if(wu){var e=Ks;if(e!==null)throw e}}function so(e,n,a,r){wu=!1;var c=e.updateQueue;Ua=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var G=R,ee=G.next;G.next=null,_===null?f=ee:_.next=ee,_=G;var de=e.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==_&&(R===null?de.firstBaseUpdate=ee:R.next=ee,de.lastBaseUpdate=G))}if(f!==null){var ve=c.baseState;_=0,de=ee=G=null,R=f;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(vt&se)===se:(r&se)===se){se!==0&&se===Zs&&(wu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=e,Je=R;se=n;var Gt=a;switch(Je.tag){case 1:if(je=Je.payload,typeof je=="function"){ve=je.call(Gt,ve,se);break e}ve=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Je.payload,se=typeof je=="function"?je.call(Gt,ve,se):je,se==null)break e;ve=x({},ve,se);break e;case 2:Ua=!0}}se=R.callback,se!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(ee=de=le,G=ve):de=de.next=le,_|=se;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(G=ve),c.baseState=G,c.firstBaseUpdate=ee,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Fa|=_,e.lanes=_,e.memoizedState=ve}}function Hp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hp(a[e],n)}var $s=I(null),gl=I(0);function Vp(e,n){e=oa,xe(gl,e),xe($s,n),oa=e|n.baseLanes}function Du(){xe(gl,oa),xe($s,$s.current)}function Nu(){oa=gl.current,J($s),J(gl)}var Jn=I(null),fi=null;function Pa(e){var n=e.alternate;xe(rn,rn.current&1),xe(Jn,e),fi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(fi=e)}function Uu(e){xe(rn,rn.current),xe(Jn,e),fi===null&&(fi=e)}function kp(e){e.tag===22?(xe(rn,rn.current),xe(Jn,e),fi===null&&(fi=e)):Ia()}function Ia(){xe(rn,rn.current),xe(Jn,Jn.current)}function $n(e){J(Jn),fi===e&&(fi=null),J(rn)}var rn=I(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ot=null,Ft=null,fn=null,vl=!1,er=!1,Ss=!1,xl=0,ro=0,tr=null,cx=0;function tn(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,r,c,f){return $i=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Am:Zu,Ss=!1,f=a(r,c),Ss=!1,er&&(f=jp(n,a,r,c)),Xp(e),f}function Xp(e){U.H=co;var n=Ft!==null&&Ft.next!==null;if($i=0,fn=Ft=ot=null,vl=!1,ro=0,tr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&cl(e)&&(dn=!0))}function jp(e,n,a,r){ot=e;var c=0;do{if(er&&(tr=null),ro=0,er=!1,25<=c)throw Error(s(301));if(c+=1,fn=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Rm,f=n(a,r)}while(er);return f}function ux(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ot.flags|=1024),n}function Pu(){var e=xl!==0;return xl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}$i=0,fn=Ft=ot=null,er=!1,ro=xl=0,tr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ot.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Ft===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=fn===null?ot.memoizedState:fn.next;if(n!==null)fn=n,Ft=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},fn===null?ot.memoizedState=fn=e:fn=fn.next=e}return fn}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,tr===null&&(tr=[]),e=Pp(tr,e,n),n=ot,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Am:Zu),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===P)return Tn(e)}throw Error(s(438,String(e)))}function zu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Z;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=on();return Fu(n,Ft,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=_=null,G=null,ee=n,de=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(vt&ve)===ve:($i&ve)===ve){var se=ee.revertLane;if(se===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===Zs&&(de=!0);else if(($i&se)===se){ee=ee.next,se===Zs&&(de=!0);continue}else ve={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(R=G=ve,_=f):G=G.next=ve,ot.lanes|=se,Fa|=se;ve=ee.action,Ss&&a(f,ve),f=ee.hasEagerState?ee.eagerState:a(f,ve)}else se={lane:ve,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(R=G=se,_=f):G=G.next=se,ot.lanes|=ve,Fa|=ve;ee=ee.next}while(ee!==null&&ee!==n);if(G===null?_=f:G.next=R,!Kn(f,e.memoizedState)&&(dn=!0,de&&(a=Ks,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Hu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Wp(e,n,a){var r=ot,c=on(),f=St;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Kn((Ft||c).memoizedState,a);if(_&&(c.memoizedState=a,dn=!0),c=c.queue,ku(Zp.bind(null,r,c,e),[e]),c.getSnapshot!==n||_||fn!==null&&fn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,c,a,n),null),jt===null)throw Error(s(349));f||($i&127)!==0||qp(r,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Sl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Yp(e,n,a,r){n.value=a,n.getSnapshot=r,Kp(n)&&Qp(e)}function Zp(e,n,a){return a(function(){Kp(n)&&Qp(e)})}function Kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function Qp(e){var n=fs(e,2);n!==null&&kn(n,e,2)}function Gu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),Ss){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function Jp(e,n,a,r){return e.baseState=a,Fu(e,Ft,typeof r=="function"?r:ea)}function fx(e,n,a,r,c){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var R=a(c,r),G=U.S;G!==null&&G(_,R),em(e,n,R)}catch(ee){Vu(e,n,ee)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(c,r),em(e,n,f)}catch(ee){Vu(e,n,ee)}}function em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){tm(e,n,r)},function(r){return Vu(e,n,r)}):tm(e,n,a)}function tm(e,n,a){n.status="fulfilled",n.value=a,nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,$p(e,a)))}function Vu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==r)}e.action=null}function nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function im(e,n){return n}function am(e,n){if(St){var a=jt.formState;if(a!==null){e:{var r=ot;if(St){if(qt){t:{for(var c=qt,f=ui;c.nodeType!==8;){if(!f){c=null;break t}if(c=di(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=di(c.nextSibling),r=c.data==="F!";break e}}Da(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=r,a=Em.bind(null,ot,r),r.dispatch=a,r=Gu(!1),f=Yu.bind(null,ot,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=fx.bind(null,ot,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function sm(e){var n=on();return rm(n,Ft,e)}function rm(e,n,a){if(n=Fu(e,n,im)[0],e=yl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(_){throw _===Qs?dl:_}else r=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,nr(9,{destroy:void 0},dx.bind(null,c,a),null)),[r,f,e]}function dx(e,n){e.action=n}function om(e){var n=on(),a=Ft;if(a!==null)return rm(n,a,e);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Sl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function lm(){return on().memoizedState}function El(e,n,a,r){var c=Pn();ot.flags|=e,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function bl(e,n,a,r){var c=on();r=r===void 0?null:r;var f=c.memoizedState.inst;Ft!==null&&r!==null&&Lu(r,Ft.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(ot.flags|=e,c.memoizedState=nr(1|n,f,a,r))}function cm(e,n){El(8390656,8,e,n)}function ku(e,n){bl(2048,8,e,n)}function hx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Sl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function um(e){var n=on().memoizedState;return hx({ref:n,nextImpl:e}),function(){if((Ct&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function fm(e,n){return bl(4,2,e,n)}function dm(e,n){return bl(4,4,e,n)}function hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pm(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,hm.bind(null,n,e),a)}function Xu(){}function mm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function gm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=e(),Ss){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function ju(e,n,a){return a===void 0||($i&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=_g(),ot.lanes|=e,Fa|=e,a)}function _m(e,n,a,r){return Kn(a,n)?a:$s.current!==null?(e=ju(e,a,r),Kn(e,n)||(dn=!0),e):($i&42)===0||($i&1073741824)!==0&&(vt&261930)===0?(dn=!0,e.memoizedState=a):(e=_g(),ot.lanes|=e,Fa|=e,n)}function vm(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var _=U.T,R={};U.T=R,Yu(e,!1,n,a);try{var G=c(),ee=U.S;if(ee!==null&&ee(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=lx(G,r);lo(e,n,de,ni(e))}else lo(e,n,r,ni(e))}catch(ve){lo(e,n,{then:function(){},status:"rejected",reason:ve},ni())}finally{H.p=f,_!==null&&R.types!==null&&(_.types=R.types),U.T=_}}function px(){}function Wu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=xm(e).queue;vm(e,c,n,re,a===null?px:function(){return Sm(e),a(r)})}function xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=xm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},ni())}function qu(){return Tn(Ao)}function Mm(){return on().memoizedState}function ym(){return on().memoizedState}function mx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=La(a);var r=Oa(n,e,a);r!==null&&(kn(r,n,a),io(r,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function gx(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?bm(n,a):(a=fu(e,n,a,r),a!==null&&(kn(a,e,r),Tm(a,n,r)))}function Em(e,n,a){var r=ni();lo(e,n,a,r)}function lo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))bm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,Kn(R,_))return sl(e,n,c,0),jt===null&&al(),!1}catch{}if(a=fu(e,n,c,r),a!==null)return kn(a,e,r),Tm(a,n,r),!0}return!1}function Yu(e,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=fu(e,a,r,2),n!==null&&kn(n,e,2)}function Tl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function bm(e,n){er=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Tm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,si(e,a)}}var co={readContext:Tn,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};co.useEffectEvent=tn;var Am={readContext:Tn,use:Ml,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(Ss){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(Ss){Oe(!0);try{a(n)}finally{Oe(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=gx.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Em.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Pn();return ju(a,e,n)},useTransition:function(){var e=Gu(!1);return e=vm.bind(null,ot,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ot,c=Pn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(vt&127)!==0||qp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,cm(Zp.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=jt.identifierPrefix;if(St){var a=Li,r=Ui;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:am,useActionState:am,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return Pn().memoizedState=mx.bind(null,ot)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Tn,use:Ml,useCallback:mm,useContext:Tn,useEffect:ku,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:yl,useRef:lm,useState:function(){return yl(ea)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=on();return _m(a,Ft.memoizedState,e,n)},useTransition:function(){var e=yl(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:Mm,useHostTransitionStatus:qu,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=on();return Jp(a,Ft,e,n)},useMemoCache:zu,useCacheRefresh:ym};Zu.useEffectEvent=um;var Rm={readContext:Tn,use:Ml,useCallback:mm,useContext:Tn,useEffect:ku,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:Hu,useRef:lm,useState:function(){return Hu(ea)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=on();return Ft===null?ju(a,e,n):_m(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Hu(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:Mm,useHostTransitionStatus:qu,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=on();return Ft!==null?Jp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:ym};Rm.useEffectEvent=um;function Ku(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),c=La(r);c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,r),n!==null&&(kn(n,e,r),io(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),c=La(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,r),n!==null&&(kn(n,e,r),io(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=La(a);r.tag=2,n!=null&&(r.callback=n),n=Oa(e,r,a),n!==null&&(kn(n,e,a),io(n,e,a))}};function Cm(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(c,f):!0}function wm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function Ms(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Dm(e){il(e)}function Nm(e){console.error(e)}function Um(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function Om(e){return e=La(e),e.tag=3,e}function Pm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Lm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,r),typeof c!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function _x(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?zl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(e,r,c)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(e,r,c)),!1}throw Error(s(435,a.tag))}return bf(e,r,c),zl(),!1}if(St)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==_u&&(e=Error(s(422),{cause:r}),Jr(oi(e,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),Jr(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=oi(r,a),c=Ju(e.stateNode,r,c),Cu(e,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),vo===null?vo=[f]:vo.push(f),nn!==4&&(nn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ju(a.stateNode,r,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Om(c),Pm(c,e,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),dn=!1;function An(e,n,a,r){n.child=e===null?Fp(n,null,a,r):xs(n,e.child,a,r)}function Im(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return ms(n),r=Ou(e,n,a,_,f,c),R=Pu(),e!==null&&!dn?(Iu(e,n,c),ta(e,n,c)):(St&&R&&mu(n),n.flags|=1,An(e,n,r,c),n.child)}function Bm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,r,c)):(e=ol(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(_,r)&&e.ref===n.ref)return ta(e,n,c)}return n.flags|=1,e=Zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Zr(f,r)&&e.ref===n.ref)if(dn=!1,n.pendingProps=r=f,lf(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ta(e,n,c)}return ef(e,n,a,r,c)}function Fm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Hm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):Du(),kp(n);else return r=n.lanes=536870912,Hm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),Vp(n,f),Ia(),n.memoizedState=null):(e!==null&&fl(n,null),Du(),Ia());return An(e,n,c,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hm(e,n,a,r,c){var f=bu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fl(n,null),Du(),kp(n),e!==null&&Ys(e,n,r,!0),n.childLanes=c,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Gm(e,n,a){return xs(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function vx(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=Rl(n,r),n.lanes=536870912,uo(null,e);if(Uu(n),(e=qt)?(e=$g(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=bp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return Rl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Gm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ys(e,n,a,!1),c=(a&e.childLanes)!==0,dn||c){if(r=jt,r!==null&&(_=qn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,fs(e,_),kn(r,e,_),$u;zl(),n=Gm(e,n,a)}else e=f.treeContext,qt=di(_.nextSibling),bn=n,St=!0,wa=null,ui=!1,e!==null&&Rp(n,e),n=Rl(n,r),n.flags|=4096;return n}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,r,c){return ms(n),a=Ou(e,n,a,r,void 0,c),r=Pu(),e!==null&&!dn?(Iu(e,n,c),ta(e,n,c)):(St&&r&&mu(n),n.flags|=1,An(e,n,a,c),n.child)}function Vm(e,n,a,r,c,f){return ms(n),n.updateQueue=null,a=jp(n,r,a,c),Xp(e),r=Pu(),e!==null&&!dn?(Iu(e,n,f),ta(e,n,f)):(St&&r&&mu(n),n.flags|=1,An(e,n,a,f),n.child)}function km(e,n,a,r,c){if(ms(n),n.stateNode===null){var f=Xs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):Xs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ku(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Qu.enqueueReplaceState(f,f.state,null),so(n,r,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Ms(a,R);f.props=G;var ee=f.context,de=a.contextType;_=Xs,typeof de=="object"&&de!==null&&(_=Tn(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==_)&&wm(n,f,r,_),Ua=!1;var se=n.memoizedState;f.state=se,so(n,r,f,c),ao(),ee=n.memoizedState,R||se!==ee||Ua?(typeof ve=="function"&&(Ku(n,a,ve,r),ee=n.memoizedState),(G=Ua||Cm(n,a,G,r,se,ee,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ee),f.props=r,f.state=ee,f.context=_,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(e,n),_=n.memoizedProps,de=Ms(a,_),f.props=de,ve=n.pendingProps,se=f.context,ee=a.contextType,G=Xs,typeof ee=="object"&&ee!==null&&(G=Tn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ve||se!==G)&&wm(n,f,r,G),Ua=!1,se=n.memoizedState,f.state=se,so(n,r,f,c),ao();var le=n.memoizedState;_!==ve||se!==le||Ua||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof R=="function"&&(Ku(n,a,R,r),le=n.memoizedState),(de=Ua||Cm(n,a,de,r,se,le,G)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=G,r=de):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=xs(n,e.child,null,c),n.child=xs(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ta(e,n,c),e}function Xm(e,n,a,r){return hs(),n.flags|=256,An(e,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Lp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function jm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(c?Pa(n):Ia(),(e=qt)?(e=$g(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=bp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Da(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,c?(Ia(),c=n.mode,R=wl({mode:"hidden",children:R},c),r=ds(r,c,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,_,a),n.memoizedState=tf,uo(null,r)):(Pa(n),sf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),R=r.fallback,c=n.mode,r=wl({mode:"visible",children:r.children},c),R=ds(R,c,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,xs(n,e.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,_,a),n.memoizedState=tf,n=uo(null,r));else if(Pa(n),Hf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ee=_.dgst;_=ee,r=Error(s(419)),r.stack="",r.digest=_,Jr({value:r,source:null,stack:null}),n=rf(e,n,a)}else if(dn||Ys(e,n,a,!1),_=(a&e.childLanes)!==0,dn||_){if(_=jt,_!==null&&(r=qn(_,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,fs(e,r),kn(_,e,r),$u;Ff(R)||zl(),n=rf(e,n,a)}else Ff(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,qt=di(R.nextSibling),bn=n,St=!0,wa=null,ui=!1,e!==null&&Rp(n,e),n=sf(n,r.children),n.flags|=4096);return n}return c?(Ia(),R=r.fallback,c=n.mode,G=e.child,ee=G.sibling,r=Zi(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,ee!==null?R=Zi(ee,R):(R=ds(R,c,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,uo(null,r),r=n.child,R=e.child.memoizedState,R===null?R=nf(a):(c=R.cachePool,c!==null?(G=un._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=Lp(),R={baseLanes:R.baseLanes|a,cachePool:c}),r.memoizedState=R,r.childLanes=af(e,_,a),n.memoizedState=tf,uo(e.child,r)):(Pa(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return xs(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Su(e.return,n,a)}function of(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function qm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=rn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,xe(rn,_),An(e,n,r,a),r=St?Qr:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&_l(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function xx(e,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Na(n,un,e.memoizedState.cache),hs();break;case 27:case 5:$e(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jm(e,n,a):(Pa(n),e=ta(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xe(rn,rn.current),r)break;return null;case 22:return n.lanes=0,Fm(e,n,a,n.pendingProps);case 24:Na(n,un,e.memoizedState.cache)}return ta(e,n,a)}function Ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return dn=!1,xx(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,St&&(n.flags&1048576)!==0&&Ap(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")du(e)?(r=Ms(e,r),n.tag=1,n=km(null,n,e,r,a)):(n.tag=0,n=ef(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Im(null,n,e,r,a);break e}else if(c===z){n.tag=14,n=Bm(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ms(r,n.pendingProps),km(e,n,r,c,a);case 3:e:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(e,n),so(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Na(n,un,r),r!==f.cache&&Mu(n,[un],a,!0),ao(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xm(e,n,r,a);break e}else if(r!==c){c=oi(Error(s(424)),n),Jr(c),n=Xm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=di(e.firstChild),bn=n,St=!0,wa=null,ui=!0,a=Fp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),r===c){n=ta(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=s0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,r=jl(oe.current).createElement(a),r[sn]=n,r[En]=e,Rn(r,a,e),cn(r),n.stateNode=r):n.memoizedState=s0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $e(n),e===null&&St&&(r=n.stateNode=n0(n.type,n.pendingProps,oe.current),bn=n,ui=!0,c=qt,Xa(n.type)?(Gf=c,qt=di(r.firstChild)):qt=c),An(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((c=r=qt)&&(r=Zx(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,bn=n,qt=di(r.firstChild),ui=!1,c=!0):c=!1),c||Da(n)),$e(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,If(c,f)?r=null:_!==null&&If(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(e,n,ux,null,null,a),Ao._currentValue=c),Cl(e,n),An(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=qt)&&(a=Kx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,bn=n,qt=null,e=!0):e=!1),e||Da(n)),null;case 13:return jm(e,n,a);case 4:return be(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=xs(n,null,r,a):An(e,n,r,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Na(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ms(n),c=Tn(c),r=r(c),n.flags|=1,An(e,n,r,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return vx(e,n,a);case 22:return Fm(e,n,a,n.pendingProps);case 24:return ms(n),r=Tn(un),e===null?(c=bu(),c===null&&(c=jt,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),Na(n,un,c)):((e.lanes&a)!==0&&(Ru(e,n),so(n,null,null,a),ao()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,un,r)):(r=f.cache,Na(n,un,r),r!==c.cache&&Mu(n,[un],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function cf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Mg())e.flags|=8192;else throw vs=hl,Tu}else e.flags&=-16777217}function Zm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u0(n))if(Mg())e.flags|=8192;else throw vs=hl,Tu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,rr|=n)}function fo(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Sx(e,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(un),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),Yt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(Yt(n),Zm(n,f)):(Yt(n),cf(n,c,null,r,a))):f?f!==e.memoizedState?(na(n),Yt(n),Zm(n,f)):(Yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),Yt(n),cf(n,c,e,r,a)),null;case 27:if(Qe(n),a=oe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}e=Ae.current,qs(n)?Cp(n):(e=n0(c,r,a),n.stateNode=e,na(n))}return Yt(n),null;case 5:if(Qe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(f=Ae.current,qs(n))Cp(n);else{var _=jl(oe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[sn]=n,f[En]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Rn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&na(n)}}return Yt(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=oe.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||Da(n,!0)}else e=jl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return Yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=qs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Yt(n),null);case 4:return He(),e===null&&Nf(n.stateNode.containerInfo),Yt(n),null;case 10:return Ji(n.type),Yt(n),null;case 19:if(J(rn),r=n.memoizedState,r===null)return Yt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)fo(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,fo(r,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ep(a,e),a=a.sibling;return xe(rn,rn.current&1|2),St&&Ki(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Re()>Pl&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304)}else{if(!c)if(e=_l(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!St)return Yt(n),null}else 2*Re()-r.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Re(),e.sibling=null,a=rn.current,xe(rn,c?a&1|2:a&1),St&&Ki(n,r.treeForkCount),e):(Yt(n),null);case 22:case 23:return $n(n),Nu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&J(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(un),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Mx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(un),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(rn),null;case 4:return He(),null;case 10:return Ji(n.type),null;case 22:case 23:return $n(n),Nu(),e!==null&&J(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(un),null;case 25:return null;default:return null}}function Km(e,n){switch(gu(n),n.tag){case 3:Ji(un),He();break;case 26:case 27:case 5:Qe(n);break;case 4:He();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:J(rn);break;case 10:Ji(n.type);break;case 22:case 23:$n(n),Nu(),e!==null&&J(gs);break;case 24:Ji(un)}}function ho(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(R){It(n,n.return,R)}}function Ba(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var G=a,ee=R;try{ee()}catch(de){It(c,G,de)}}}r=r.next}while(r!==f)}}catch(de){It(n,n.return,de)}}function Qm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Gp(n,a)}catch(r){It(e,e.return,r)}}}function Jm(e,n,a){a.props=Ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){It(e,n,r)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){It(e,n,c)}}function Oi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){It(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){It(e,n,c)}else a.current=null}function $m(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){It(e,e.return,c)}}function uf(e,n,a){try{var r=e.stateNode;kx(r,e.type,a,n),r[En]=n}catch(c){It(e,e.return,c)}}function eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(r!==4&&(r===27&&Xa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Nl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,r,a),n[sn]=e,n[En]=a}catch(f){It(e,e.return,f)}}var ia=!1,hn=!1,hf=!1,ng=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function yx(e,n){if(e=e.containerInfo,Of=Jl,e=pp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,G=-1,ee=0,de=0,ve=e,se=null;t:for(;;){for(var le;ve!==a||c!==0&&ve.nodeType!==3||(R=_+c),ve!==f||r!==0&&ve.nodeType!==3||(G=_+r),ve.nodeType===3&&(_+=ve.nodeValue.length),(le=ve.firstChild)!==null;)se=ve,ve=le;for(;;){if(ve===e)break t;if(se===a&&++ee===c&&(R=_),se===f&&++de===r&&(G=_),(le=ve.nextSibling)!==null)break;ve=se,se=ve.parentNode}ve=le}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},Jl=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var je=Ms(a.type,c);e=r.getSnapshotBeforeUpdate(je,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Je){It(a,a.return,Je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function ig(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&ho(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){It(a,a.return,_)}else{var c=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}r&64&&Qm(a),r&512&&po(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(e,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&r&4&&tg(a);case 26:case 5:sa(e,a),n===null&&r&4&&$m(a),r&512&&po(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&rg(e,a);break;case 13:sa(e,a),r&4&&og(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nx.bind(null,a),Qx(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||hn,c=ia;var f=hn;ia=r,(hn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=c,hn=f}break;case 30:break;default:sa(e,a)}}function ag(e){var n=e.alternate;n!==null&&(e.alternate=null,ag(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Fn=!1;function aa(e,n,a){for(a=a.child;a!==null;)sg(e,n,a),a=a.sibling}function sg(e,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:hn||Oi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Oi(a,n);var r=Jt,c=Fn;Xa(a.type)&&(Jt=a.stateNode,Fn=!1),aa(e,n,a),Eo(a.stateNode),Jt=r,Fn=c;break;case 5:hn||Oi(a,n);case 6:if(r=Jt,c=Fn,Jt=null,aa(e,n,a),Jt=r,Fn=c,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Jt!==null&&(Fn?(e=Jt,Qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):Qg(Jt,a.stateNode));break;case 4:r=Jt,c=Fn,Jt=a.stateNode.containerInfo,Fn=!0,aa(e,n,a),Jt=r,Fn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),aa(e,n,a);break;case 1:hn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Jm(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,aa(e,n,a),hn=r;break;default:aa(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){It(n,n.return,a)}}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){It(n,n.return,a)}}function Ex(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ng),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ng),n;default:throw Error(s(435,e.tag))}}function Ul(e,n){var a=Ex(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Ux.bind(null,e,r);r.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Xa(R.type)){Jt=R.stateNode,Fn=!1;break e}break;case 5:Jt=R.stateNode,Fn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Fn=!0;break e}R=R.return}if(Jt===null)throw Error(s(160));sg(f,_,c),Jt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lg(n,e),n=n.sibling}var bi=null;function lg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Ba(3,e,e.return),ho(3,e),Ba(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(hn||a===null||Oi(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=bi;if(Hn(n,e),Gn(e),r&512&&(hn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ya]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,r,a),f[sn]=e,cn(f),r=f;break e;case"link":var _=l0("link","href",c).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=l0("meta","content",c).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,cn(f),r=f}e.stateNode=r}else c0(c,e.type,e.stateNode);else e.stateNode=o0(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?c0(c,e.type,e.stateNode):o0(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(hn||a===null||Oi(a,a.return)),a!==null&&r&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(hn||a===null||Oi(a,a.return)),e.flags&32){c=e.stateNode;try{Zn(c,"")}catch(je){It(e,e.return,je)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(hf=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(je){It(e,e.return,je)}}break;case 3:if(Yl=null,c=bi,bi=Wl(n.containerInfo),Hn(n,e),bi=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(je){It(e,e.return,je)}hf&&(hf=!1,cg(e));break;case 4:r=bi,bi=Wl(e.stateNode.containerInfo),Hn(n,e),Gn(e),bi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=Re()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 22:c=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ee=ia,de=hn;if(ia=ee||c,hn=de||G,Hn(n,e),hn=de,ia=ee,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||ia||hn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var ve=G.memoizedProps.style,se=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(je){It(G,G.return,je)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(je){It(G,G.return,je)}}}else if(n.tag===18){if(a===null){G=n;try{var le=G.stateNode;c?Jg(le,!0):Jg(G.stateNode,!1)}catch(je){It(G,G.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(eg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(e);Nl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Zn(_,""),a.flags&=-33);var R=ff(e);Nl(e,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,ee=ff(e);df(e,ee,G);break;default:throw Error(s(161))}}catch(de){It(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ig(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),ys(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jm(n,n.return,a),ys(n);break;case 27:Eo(n.stateNode);case 26:case 5:Oi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ra(c,f,a),ho(4,f);break;case 1:if(ra(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){It(r,r.return,ee)}if(r=f,c=r.updateQueue,c!==null){var R=r.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)Hp(G[c],R)}catch(ee){It(r,r.return,ee)}}a&&_&64&&Qm(f),po(f,f.return);break;case 27:tg(f);case 26:case 5:ra(c,f,a),a&&r===null&&_&4&&$m(f),po(f,f.return);break;case 12:ra(c,f,a);break;case 31:ra(c,f,a),a&&_&4&&rg(c,f);break;case 13:ra(c,f,a),a&&_&4&&og(c,f);break;case 22:f.memoizedState===null&&ra(c,f,a),po(f,f.return);break;case 30:break;default:ra(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(e,n,a,r),n=n.sibling}function ug(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),c&2048&&ho(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(c&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){It(n,n.return,G)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):mo(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(_,n);break;case 24:Ti(e,n,a,r),c&2048&&mf(n.alternate,n);break;default:Ti(e,n,a,r)}}function ir(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,G=r,ee=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,R,G,c),ho(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?ir(f,_,R,G,c):mo(f,_):(de._visibility|=2,ir(f,_,R,G,c)),c&&ee&2048&&pf(_.alternate,_);break;case 24:ir(f,_,R,G,c),c&&ee&2048&&mf(_.alternate,_);break;default:ir(f,_,R,G,c)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:mo(a,r),c&2048&&pf(r.alternate,r);break;case 24:mo(a,r),c&2048&&mf(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var go=8192;function ar(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)fg(e,n,a),e=e.sibling}function fg(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&go&&e.memoizedState!==null&&cS(a,bi,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=bi;bi=Wl(e.stateNode.containerInfo),ar(e,n,a),bi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,ar(e,n,a),go=r):ar(e,n,a));break;default:ar(e,n,a)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,pg(r,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):_o(e);break;default:_o(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,pg(r,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function pg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else e:for(a=e;Sn!==null;){r=Sn;var c=r.sibling,f=r.return;if(ag(r),r===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var bx={getCacheForType:function(e){var n=Tn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},Tx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,jt=null,mt=null,vt=0,Pt=0,ei=null,za=!1,sr=!1,gf=!1,oa=0,nn=0,Fa=0,Es=0,_f=0,ti=0,rr=0,vo=null,Vn=null,vf=!1,Ol=0,mg=0,Pl=1/0,Il=null,Ha=null,_n=0,Ga=null,or=null,la=0,xf=0,Sf=null,gg=null,xo=0,Mf=null;function ni(){return(Ct&2)!==0&&vt!==0?vt&-vt:U.T!==null?Rf():zr()}function _g(){if(ti===0)if((vt&536870912)===0||St){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),ti=e}else ti=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ti}function kn(e,n,a){(e===jt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Va(e,vt,ti,!1)),et(e,a),((Ct&2)===0||e!==jt)&&(e===jt&&((Ct&2)===0&&(Es|=a),nn===4&&Va(e,vt,ti,!1)),Pi(e))}function vg(e,n,a){if((Ct&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ze(e,n),c=r?Cx(e,n):Ef(e,n,!0),f=r;do{if(c===0){sr&&!r&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ax(a)){c=Ef(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;c=vo;var G=R.current.memoizedState.isDehydrated;if(G&&(lr(R,_).flags|=256),_=Ef(R,_,!1),_!==2){if(gf&&!G){R.errorRecoveryDisabledLanes|=f,Es|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){lr(e,0),Va(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(r,n,ti,!za);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-Re(),10<c)){if(Va(r,n,ti,!za),he(r,0,!0)!==0)break e;la=n,r.timeoutHandle=Zg(xg.bind(null,r,a,Vn,Il,vf,n,ti,Es,rr,za,f,"Throttled",-0,0),c);break e}xg(r,a,Vn,Il,vf,n,ti,Es,rr,za,f,null,-0,0)}}break}while(!0);Pi(e)}function xg(e,n,a,r,c,f,_,R,G,ee,de,ve,se,le){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},fg(n,f,ve);var je=(f&62914560)===f?Ol-Re():(f&4194048)===f?mg-Re():0;if(je=uS(ve,je),je!==null){la=f,e.cancelPendingCommit=je(Rg.bind(null,e,n,f,a,r,c,_,R,G,de,ve,null,se,le)),Va(e,f,_,!ee);return}}Rg(e,n,f,a,r,c,_,R,G)}function Ax(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,r){n&=~_f,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Rt(e,a,n)}function Bl(){return(Ct&6)===0?(So(0),!1):!0}function yf(){if(mt!==null){if(Pt===0)var e=mt.return;else e=mt,Qi=ps=null,Bu(e),Js=null,to=0,e=mt;for(;e!==null;)Km(e.alternate,e),e=e.return;mt=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Wx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,yf(),jt=e,mt=a=Zi(e.current,null),vt=n,Pt=0,ei=null,za=!1,sr=ze(e,n),gf=!1,rr=ti=_f=Es=Fa=nn=0,Vn=vo=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Pe(r),f=1<<c;n|=e[c],r&=~f}return oa=n,al(),a}function Sg(e,n){ot=null,U.H=co,n===Qs||n===dl?(n=Ip(),Pt=3):n===Tu?(n=Ip(),Pt=4):Pt=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,mt===null&&(nn=1,Al(e,oi(n,e.current)))}function Mg(){var e=Jn.current;return e===null?!0:(vt&4194048)===vt?fi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===fi:!1}function yg(){var e=U.H;return U.H=co,e===null?co:e}function Eg(){var e=U.A;return U.A=bx,e}function zl(){nn=4,za||(vt&4194048)!==vt&&Jn.current!==null||(sr=!0),(Fa&134217727)===0&&(Es&134217727)===0||jt===null||Va(jt,vt,ti,!1)}function Ef(e,n,a){var r=Ct;Ct|=2;var c=yg(),f=Eg();(jt!==e||vt!==n)&&(Il=null,lr(e,n)),n=!1;var _=nn;e:do try{if(Pt!==0&&mt!==null){var R=mt,G=ei;switch(Pt){case 8:yf(),_=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ee=Pt;if(Pt=0,ei=null,cr(e,R,G,ee),a&&sr){_=0;break e}break;default:ee=Pt,Pt=0,ei=null,cr(e,R,G,ee)}}Rx(),_=nn;break}catch(de){Sg(e,de)}while(!0);return n&&e.shellSuspendCounter++,Qi=ps=null,Ct=r,U.H=c,U.A=f,mt===null&&(jt=null,vt=0,al()),_}function Rx(){for(;mt!==null;)bg(mt)}function Cx(e,n){var a=Ct;Ct|=2;var r=yg(),c=Eg();jt!==e||vt!==n?(Il=null,Pl=Re()+500,lr(e,n)):sr=ze(e,n);e:do try{if(Pt!==0&&mt!==null){n=mt;var f=ei;t:switch(Pt){case 1:Pt=0,ei=null,cr(e,n,f,1);break;case 2:case 9:if(Op(f)){Pt=0,ei=null,Tg(n);break}n=function(){Pt!==2&&Pt!==9||jt!==e||(Pt=7),Pi(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Op(f)?(Pt=0,ei=null,Tg(n)):(Pt=0,ei=null,cr(e,n,f,7));break;case 5:var _=null;switch(mt.tag){case 26:_=mt.memoizedState;case 5:case 27:var R=mt;if(_?u0(_):R.stateNode.complete){Pt=0,ei=null;var G=R.sibling;if(G!==null)mt=G;else{var ee=R.return;ee!==null?(mt=ee,Fl(ee)):mt=null}break t}}Pt=0,ei=null,cr(e,n,f,5);break;case 6:Pt=0,ei=null,cr(e,n,f,6);break;case 8:yf(),nn=6;break e;default:throw Error(s(462))}}wx();break}catch(de){Sg(e,de)}while(!0);return Qi=ps=null,U.H=r,U.A=c,Ct=a,mt!==null?0:(jt=null,vt=0,al(),nn)}function wx(){for(;mt!==null&&!dt();)bg(mt)}function bg(e){var n=Ym(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Fl(e):mt=n}function Tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Bu(n);default:Km(a,n),n=mt=Ep(n,oa),n=Ym(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Fl(e):mt=n}function cr(e,n,a,r){Qi=ps=null,Bu(n),Js=null,to=0;var c=n.return;try{if(_x(e,c,n,a,vt)){nn=1,Al(e,oi(a,e.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;nn=1,Al(e,oi(a,e.current)),mt=null;return}n.flags&32768?(St||r===1?e=!0:sr||(vt&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ag(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){Ag(n,za);return}e=n.return;var a=Sx(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);nn===0&&(nn=5)}function Ag(e,n){do{var a=Mx(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);nn=6,mt=null}function Rg(e,n,a,r,c,f,_,R,G){e.cancelPendingCommit=null;do Hl();while(_n!==0);if((Ct&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,en(e,a,f,_,R,G),e===jt&&(mt=jt=null,vt=0),or=n,Ga=e,la=a,xf=f,Sf=c,gg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lx(Q,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,c=H.p,H.p=2,_=Ct,Ct|=4;try{yx(e,n,a)}finally{Ct=_,H.p=c,U.T=r}}_n=1,Cg(),wg(),Dg()}}function Cg(){if(_n===1){_n=0;var e=Ga,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=H.p;H.p=2;var c=Ct;Ct|=4;try{lg(n,e);var f=Pf,_=pp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&hp(R.ownerDocument.documentElement,R)){if(G!==null&&su(R)){var ee=G.start,de=G.end;if(de===void 0&&(de=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(de,R.value.length);else{var ve=R.ownerDocument||document,se=ve&&ve.defaultView||window;if(se.getSelection){var le=se.getSelection(),je=R.textContent.length,Je=Math.min(G.start,je),Gt=G.end===void 0?Je:Math.min(G.end,je);!le.extend&&Je>Gt&&(_=Gt,Gt=Je,Je=_);var Y=dp(R,Je),k=dp(R,Gt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var $=ve.createRange();$.setStart(Y.node,Y.offset),le.removeAllRanges(),Je>Gt?(le.addRange($),le.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),le.addRange($))}}}}for(ve=[],le=R;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var me=ve[R];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Jl=!!Of,Pf=Of=null}finally{Ct=c,H.p=r,U.T=a}}e.current=n,_n=2}}function wg(){if(_n===2){_n=0;var e=Ga,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=H.p;H.p=2;var c=Ct;Ct|=4;try{ig(e,n.alternate,n)}finally{Ct=c,H.p=r,U.T=a}}_n=3}}function Dg(){if(_n===4||_n===3){_n=0,zt();var e=Ga,n=or,a=la,r=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,or=Ga=null,Ng(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ha=null),Br(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,c=H.p,H.p=2,U.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{U.T=n,H.p=c}}(la&3)!==0&&Hl(),Pi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mf?xo++:(xo=0,Mf=e):xo=0,So(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function Hl(){return Cg(),wg(),Dg(),Ug()}function Ug(){if(_n!==5)return!1;var e=Ga,n=xf;xf=0;var a=Br(la),r=U.T,c=H.p;try{H.p=32>a?32:a,U.T=null,a=Sf,Sf=null;var f=Ga,_=la;if(_n=0,or=Ga=null,la=0,(Ct&6)!==0)throw Error(s(331));var R=Ct;if(Ct|=4,hg(f.current),ug(f,f.current,_,a),Ct=R,So(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{H.p=c,U.T=r,Ng(e,n)}}function Lg(e,n,a){n=oi(a,n),n=Ju(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(et(e,2),Pi(e))}function It(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ha===null||!Ha.has(r))){e=oi(a,e),a=Om(2),r=Oa(n,a,2),r!==null&&(Pm(a,r,n,e),et(r,2),Pi(r));break}}n=n.return}}function bf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Dx.bind(null,e,n,a),n.then(e,e))}function Dx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>Re()-Ol?(Ct&2)===0&&lr(e,0):_f|=a,rr===vt&&(rr=0)),Pi(e)}function Og(e,n){n===0&&(n=Me()),e=fs(e,n),e!==null&&(et(e,n),Pi(e))}function Nx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(e,a)}function Ux(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Og(e,a)}function Lx(e,n){return j(e,n)}var Gl=null,ur=null,Tf=!1,Vl=!1,Af=!1,ka=0;function Pi(e){e!==ur&&e.next===null&&(ur===null?Gl=ur=e:ur=ur.next=e),Vl=!0,Tf||(Tf=!0,Px())}function So(e,n){if(!Af&&Vl){Af=!0;do for(var a=!1,r=Gl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,zg(r,f))}else f=vt,f=he(r,r===jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ze(r,f)||(a=!0,zg(r,f));r=r.next}while(a);Af=!1}}function Ox(){Pg()}function Pg(){Vl=Tf=!1;var e=0;ka!==0&&jx()&&(e=ka);for(var n=Re(),a=null,r=Gl;r!==null;){var c=r.next,f=Ig(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(Vl=!0)),r=c}_n!==0&&_n!==5||So(e),ka!==0&&(ka=0)}function Ig(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pe(f),R=1<<_,G=c[_];G===-1?((R&a)===0||(R&r)!==0)&&(c[_]=Ue(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=jt,a=vt,a=he(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ze(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$t(r),Br(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=Ee;break;default:a=Q}return r=Bg.bind(null,e),a=j(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$t(r),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var r=vt;return r=he(e,e===jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vg(e,r,n),Ig(e,Re()),e.callbackNode!=null&&e.callbackNode===a?Bg.bind(null,e):null)}function zg(e,n){if(Hl())return null;vg(e,n,!0)}function Px(){qx(function(){(Ct&6)!==0?j(w,Ox):Pg()})}function Rf(){if(ka===0){var e=Zs;e===0&&(e=it,it<<=1,(it&261888)===0&&(it=256)),ka=e}return ka}function Fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:os(""+e)}function Hg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ix(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Fg((c[En]||null).action),_=r.submitter;_&&(n=(n=_[En]||null)?Fg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new el("action","action",null,r,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var G=_?Hg(c,_):new FormData(c);Wu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=_?Hg(c,_):new FormData(c),Wu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Bx=wf.toLowerCase(),zx=wf[0].toUpperCase()+wf.slice(1);Ei(Bx,"on"+zx)}Ei(_p,"onAnimationEnd"),Ei(vp,"onAnimationIteration"),Ei(xp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(ex,"onTransitionRun"),Ei(tx,"onTransitionStart"),Ei(nx,"onTransitionCancel"),Ei(Sp,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Gg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],G=R.instance,ee=R.currentTarget;if(R=R.listener,G!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(de){il(de)}c.currentTarget=null,f=G}else for(_=0;_<r.length;_++){if(R=r[_],G=R.instance,ee=R.currentTarget,R=R.listener,G!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(de){il(de)}c.currentTarget=null,f=G}}}}function gt(e,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var r=e+"__bubble";a.has(r)||(Vg(n,e,2,!1),a.add(r))}function Df(e,n,a){var r=0;n&&(r|=4),Vg(a,e,r,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[kl]){e[kl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Df("selectionchange",!1,n))}}function Vg(e,n,a,r){switch(_0(n)){case 2:var c=hS;break;case 8:c=pS;break;default:c=Wf}a=c.bind(null,n,a,e),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Uf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=r.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=Ea(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){r=f=_;continue e}R=R.parentNode}}r=r.return}qh(function(){var ee=f,de=Yc(a),ve=[];e:{var se=Mp.get(e);if(se!==void 0){var le=el,je=e;switch(e){case"keypress":if(Jo(a)===0)break e;case"keydown":case"keyup":le=Uv;break;case"focusin":je="focus",le=eu;break;case"focusout":je="blur",le=eu;break;case"beforeblur":case"afterblur":le=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Pv;break;case _p:case vp:case xp:le=Ev;break;case Sp:le=Bv;break;case"scroll":case"scrollend":le=vv;break;case"wheel":le=Fv;break;case"copy":case"cut":case"paste":le=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Jh;break;case"toggle":case"beforetoggle":le=Gv}var Je=(n&4)!==0,Gt=!Je&&(e==="scroll"||e==="scrollend"),Y=Je?se!==null?se+"Capture":null:se;Je=[];for(var k=ee,$;k!==null;){var me=k;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Y===null||(me=Vr(k,Y),me!=null&&Je.push(yo(k,me,$))),Gt)break;k=k.return}0<Je.length&&(se=new le(se,je,null,a,de),ve.push({event:se,listeners:Je}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",se&&a!==qc&&(je=a.relatedTarget||a.fromElement)&&(Ea(je)||je[Wi]))break e;if((le||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=ee,je=je?Ea(je):null,je!==null&&(Gt=u(je),Je=je.tag,je!==Gt||Je!==5&&Je!==27&&Je!==6)&&(je=null)):(le=null,je=ee),le!==je)){if(Je=Kh,me="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Je=Jh,me="onPointerLeave",Y="onPointerEnter",k="pointer"),Gt=le==null?se:rs(le),$=je==null?se:rs(je),se=new Je(me,k+"leave",le,a,de),se.target=Gt,se.relatedTarget=$,me=null,Ea(de)===ee&&(Je=new Je(Y,k+"enter",je,a,de),Je.target=$,Je.relatedTarget=Gt,me=Je),Gt=me,le&&je)t:{for(Je=Hx,Y=le,k=je,$=0,me=Y;me;me=Je(me))$++;me=0;for(var Ke=k;Ke;Ke=Je(Ke))me++;for(;0<$-me;)Y=Je(Y),$--;for(;0<me-$;)k=Je(k),me--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){Je=Y;break t}Y=Je(Y),k=Je(k)}Je=null}else Je=null;le!==null&&kg(ve,se,le,Je,!1),je!==null&&Gt!==null&&kg(ve,Gt,je,Je,!0)}}e:{if(se=ee?rs(ee):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var Tt=rp;else if(ap(se))if(op)Tt=Qv;else{Tt=Zv;var qe=Yv}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ee&&Dt(ee.elementType)&&(Tt=rp):Tt=Kv;if(Tt&&(Tt=Tt(e,ee))){sp(ve,Tt,a,de);break e}qe&&qe(e,se,ee),e==="focusout"&&ee&&se.type==="number"&&ee.memoizedProps.value!=null&&pt(se,"number",se.value)}switch(qe=ee?rs(ee):window,e){case"focusin":(ap(qe)||qe.contentEditable==="true")&&(Gs=qe,ru=ee,Kr=null);break;case"focusout":Kr=ru=Gs=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,mp(ve,a,de);break;case"selectionchange":if($v)break;case"keydown":case"keyup":mp(ve,a,de)}var ct;if(nu)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Hs?np(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&($h&&a.locale!=="ko"&&(Hs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Hs&&(ct=Yh()):(Ra=de,Qc="value"in Ra?Ra.value:Ra.textContent,Hs=!0)),qe=Xl(ee,xt),0<qe.length&&(xt=new Qh(xt,e,null,a,de),ve.push({event:xt,listeners:qe}),ct?xt.data=ct:(ct=ip(a),ct!==null&&(xt.data=ct)))),(ct=kv?Xv(e,a):jv(e,a))&&(xt=Xl(ee,"onBeforeInput"),0<xt.length&&(qe=new Qh("onBeforeInput","beforeinput",null,a,de),ve.push({event:qe,listeners:xt}),qe.data=ct)),Ix(ve,e,ee,a,de)}Gg(ve,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vr(e,a),c!=null&&r.unshift(yo(e,c,f)),c=Vr(e,n),c!=null&&r.push(yo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function Hx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kg(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,G=R.alternate,ee=R.stateNode;if(R=R.tag,G!==null&&G===r)break;R!==5&&R!==26&&R!==27||ee===null||(G=ee,c?(ee=Vr(a,f),ee!=null&&_.unshift(yo(a,ee,G))):c||(ee=Vr(a,f),ee!=null&&_.push(yo(a,ee,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Xg(e){return(typeof e=="string"?e:""+e).replace(Gx,`
`).replace(Vx,"")}function jg(e,n){return n=Xg(n),Xg(e)===n}function Ht(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Zn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Zn(e,""+r);break;case"className":Xe(e,"class",r);break;case"tabIndex":Xe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,a,r);break;case"style":yi(e,r,f);break;case"data":if(n!=="object"){Xe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=os(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=os(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=qi);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=os(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":gt("beforetoggle",e),gt("toggle",e),Ie(e,"popover",r);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ie(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ni.get(a)||a,Ie(e,a,r))}}function Lf(e,n,a,r,c,f){switch(a){case"style":yi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Zn(e,r):(typeof r=="number"||typeof r=="bigint")&&Zn(e,""+r);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ie(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,_,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var R=f=_=c=null,G=null,ee=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":c=de;break;case"type":_=de;break;case"checked":G=de;break;case"defaultChecked":ee=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ht(e,n,r,de,a,null)}}Dn(e,f,R,G,ee,_,c,!1);return;case"select":gt("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Ht(e,n,c,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?gn(e,!!r,n,!1):a!=null&&gn(e,!!r,a,!0);return;case"textarea":gt("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(e,n,_,R,a,null)}Mi(e,r,c,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(r=a[G],r!=null)&&(G==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ht(e,n,G,r,a,null));return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)gt(Mo[r],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(r=a[ee],r!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,ee,r,a,null)}return;default:if(Dt(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Lf(e,n,de,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ht(e,n,R,r,a,null))}function kx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,G=null,ee=null,de=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":G=ve;default:r.hasOwnProperty(le)||Ht(e,n,le,null,r,ve)}}for(var se in r){var le=r[se];if(ve=a[se],r.hasOwnProperty(se)&&(le!=null||ve!=null))switch(se){case"type":f=le;break;case"name":c=le;break;case"checked":ee=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&Ht(e,n,se,le,r,ve)}}Ge(e,_,R,G,ee,de,f,c);return;case"select":le=_=R=se=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":le=G;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":se=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==G&&Ht(e,n,c,f,r,G)}n=R,a=_,r=le,se!=null?gn(e,!!a,se,!1):!!r!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(e,n,R,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":se=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ht(e,n,_,c,r,f)}Yn(e,se,le);return;case"option":for(var je in a)se=a[je],a.hasOwnProperty(je)&&se!=null&&!r.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:Ht(e,n,je,null,r,se));for(G in r)se=r[G],le=a[G],r.hasOwnProperty(G)&&se!==le&&(se!=null||le!=null)&&(G==="selected"?e.selected=se&&typeof se!="function"&&typeof se!="symbol":Ht(e,n,G,se,r,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)se=a[Je],a.hasOwnProperty(Je)&&se!=null&&!r.hasOwnProperty(Je)&&Ht(e,n,Je,null,r,se);for(ee in r)if(se=r[ee],le=a[ee],r.hasOwnProperty(ee)&&se!==le&&(se!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Ht(e,n,ee,se,r,le)}return;default:if(Dt(n)){for(var Gt in a)se=a[Gt],a.hasOwnProperty(Gt)&&se!==void 0&&!r.hasOwnProperty(Gt)&&Lf(e,n,Gt,void 0,r,se);for(de in r)se=r[de],le=a[de],!r.hasOwnProperty(de)||se===le||se===void 0&&le===void 0||Lf(e,n,de,se,r,le);return}}for(var Y in a)se=a[Y],a.hasOwnProperty(Y)&&se!=null&&!r.hasOwnProperty(Y)&&Ht(e,n,Y,null,r,se);for(ve in r)se=r[ve],le=a[ve],!r.hasOwnProperty(ve)||se===le||se==null&&le==null||Ht(e,n,ve,se,r,le)}function Wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&Wg(_)){for(_=0,R=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],ee=G.startTime;if(ee>R)break;var de=G.transferSize,ve=G.initiatorType;de&&Wg(ve)&&(G=G.responseEnd,_+=de*(G<R?1:(R-ee)/(G-ee)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(Yx)}:Zg;function Yx(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function Qg(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ya]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(e.ownerDocument.body);a=c}while(a);pr(n)}function Jg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Kx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function $g(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function e0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function t0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function n0(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gr(e)}var hi=new Map,i0=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=H.d;H.d={f:Jx,r:$x,D:eS,C:tS,L:nS,m:iS,X:sS,S:aS,M:rS};function Jx(){var e=ca.f(),n=Bl();return e||n}function $x(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):ca.r(e)}var fr=typeof document>"u"?null:document;function a0(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=Lt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),i0.has(c)||(i0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Rn(n,"link",e),cn(n),r.head.appendChild(n)))}}function eS(e){ca.D(e),a0("dns-prefetch",e,null)}function tS(e,n){ca.C(e,n),a0("preconnect",e,n)}function nS(e,n,a){ca.L(e,n,a);var r=fr;if(r&&e&&n){var c='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Lt(a.imageSizes)+'"]')):c+='[href="'+Lt(e)+'"]';var f=c;switch(n){case"style":f=dr(e);break;case"script":f=hr(e)}hi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),Rn(n,"link",e),cn(n),r.head.appendChild(n)))}}function iS(e,n){ca.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Lt(r)+'"][href="'+Lt(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(e)}if(!hi.has(f)&&(e=x({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),Rn(r,"link",e),cn(r),a.head.appendChild(r)}}}function aS(e,n,a){ca.S(e,n,a);var r=fr;if(r&&e){var c=Ta(r).hoistableStyles,f=dr(e);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(bo(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&Vf(e,a);var G=_=r.createElement("link");cn(G),Rn(G,"link",e),G._p=new Promise(function(ee,de){G.onload=ee,G.onerror=de}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ql(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function sS(e,n){ca.X(e,n);var a=fr;if(a&&e){var r=Ta(a).hoistableScripts,c=hr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=x({src:e,async:!0},n),(n=hi.get(c))&&kf(e,n),f=a.createElement("script"),cn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rS(e,n){ca.M(e,n);var a=fr;if(a&&e){var r=Ta(a).hoistableScripts,c=hr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=hi.get(c))&&kf(e,n),f=a.createElement("script"),cn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function s0(e,n,a,r){var c=(c=oe.current)?Wl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=Ta(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=Ta(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(bo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||oS(c,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Ta(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+Lt(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function r0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function oS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),cn(n),e.head.appendChild(n))}function hr(e){return'[src="'+Lt(e)+'"]'}function To(e){return"script[async]"+e}function o0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(r)return n.instance=r,cn(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),cn(r),Rn(r,"style",c),ql(r,a.precedence,e),n.instance=r;case"stylesheet":c=dr(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,cn(f),f;r=r0(a),(c=hi.get(c))&&Vf(r,c),f=(e.ownerDocument||e).createElement("link"),cn(f);var _=f;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Rn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=hr(a.src),(c=e.querySelector(To(f)))?(n.instance=c,cn(c),c):(r=a,(c=hi.get(f))&&(r=x({},a),kf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),cn(c),Rn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,e));return n.instance}function ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function l0(e,n,a){if(Yl===null){var r=new Map,c=Yl=new Map;c.set(a,r)}else c=Yl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ya]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function c0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function lS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=dr(r.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,cn(f);return}f=n.ownerDocument||n,r=r0(r),(c=hi.get(c))&&Vf(r,c),f=f.createElement("link"),cn(f);var _=f;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function uS(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*Xx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(fS,e),Kl=null,Zl.call(e))}function fS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var r=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:P,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function dS(e,n,a,r,c,f,_,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function f0(e,n,a,r,c,f,_,R,G,ee,de,ve){return e=new dS(e,n,a,_,G,ee,de,ve,R),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),e}function d0(e){return e?(e=Xs,e):Xs}function h0(e,n,a,r,c,f){c=d0(c),r.context===null?r.context=c:r.pendingContext=c,r=La(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Oa(e,r,n),a!==null&&(kn(a,e,n),io(a,e,n))}function p0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){p0(e,n),(e=e.alternate)&&p0(e,n)}function m0(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&kn(n,e,67108864),jf(e,67108864)}}function g0(e){if(e.tag===13||e.tag===31){var n=ni();n=ss(n);var a=fs(e,n);a!==null&&kn(a,e,n),jf(e,n)}}var Jl=!0;function hS(e,n,a,r){var c=U.T;U.T=null;var f=H.p;try{H.p=2,Wf(e,n,a,r)}finally{H.p=f,U.T=c}}function pS(e,n,a,r){var c=U.T;U.T=null;var f=H.p;try{H.p=8,Wf(e,n,a,r)}finally{H.p=f,U.T=c}}function Wf(e,n,a,r){if(Jl){var c=qf(r);if(c===null)Uf(e,n,r,$l,a),v0(e,r);else if(gS(c,e,n,a,r))r.stopPropagation();else if(v0(e,r),n&4&&-1<mS.indexOf(e)){for(;c!==null;){var f=ba(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Te(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-Pe(_);R.entanglements[1]|=G,_&=~G}Pi(f),(Ct&6)===0&&(Pl=Re()+500,So(0))}}break;case 31:case 13:R=fs(f,2),R!==null&&kn(R,f,2),Bl(),jf(f,2)}if(f=qf(r),f===null&&Uf(e,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Uf(e,n,r,null,a)}}function qf(e){return e=Yc(e),Yf(e)}var $l=null;function Yf(e){if($l=null,e=Ea(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function _0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case w:return 2;case E:return 8;case Q:case _e:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var Zf=!1,ja=null,Wa=null,qa=null,Ro=new Map,Co=new Map,Ya=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ba(n),n!==null&&m0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function gS(e,n,a,r,c){switch(n){case"focusin":return ja=wo(ja,e,n,a,r,c),!0;case"dragenter":return Wa=wo(Wa,e,n,a,r,c),!0;case"mouseover":return qa=wo(qa,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,r,c)),!0}return!1}function x0(e){var n=Ea(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){g0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){g0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=ba(a),n!==null&&m0(n),e.blockedOn=a,!1;n.shift()}return!0}function S0(e,n,a){ec(e)&&a.delete(n)}function _S(){Zf=!1,ja!==null&&ec(ja)&&(ja=null),Wa!==null&&ec(Wa)&&(Wa=null),qa!==null&&ec(qa)&&(qa=null),Ro.forEach(S0),Co.forEach(S0)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var nc=null;function M0(e){nc!==e&&(nc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Yf(r||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(e){function n(G){return tc(G,e)}ja!==null&&tc(ja,e),Wa!==null&&tc(Wa,e),qa!==null&&tc(qa,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)x0(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[En]||null;if(typeof f=="function")_||M0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[En]||null)R=_.formAction;else if(Yf(c)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),M0(a)}}}function y0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(e){this._internalRoot=e}ic.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();h0(a,r,e,n,null,null)},ic.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;h0(e.current,2,null,e,null,null),Bl(),n[Wi]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&x0(e)}};var E0=t.version;if(E0!=="19.2.4")throw Error(s(527,E0,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var vS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ce=ac.inject(vS),fe=ac}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Dm,f=Nm,_=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=f0(e,1,!1,null,null,a,r,null,c,f,_,y0),e[Wi]=n.current,Nf(e),new Kf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Dm,_=Nm,R=Um,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=f0(e,1,!0,n,a??null,r,c,G,f,_,R,y0),n.context=d0(null),a=n.current,r=ni(),r=ss(r),c=La(r),c.callback=null,Oa(a,c,r),a=r,n.current.lanes=a,et(n,a),Pi(n),e[Wi]=n.current,Nf(e),new ic(n)},No.version="19.2.4",No}var L0;function CS(){if(L0)return $f.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=RS(),$f.exports}var wS=CS();function DS(){const[o,t]=Xo.useState(!1);function i(){t(s=>!s)}return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"cursor"}),C.jsx("div",{className:"cursor-ring"}),C.jsxs("div",{className:o?"mobile-nav open":"mobile-nav",children:[C.jsx("a",{href:"#about",onClick:()=>t(!1),children:"About"}),C.jsx("a",{href:"#skills",onClick:()=>t(!1),children:"Skills"}),C.jsx("a",{href:"#experience",onClick:()=>t(!1),children:"Experience"}),C.jsx("a",{href:"#projects",onClick:()=>t(!1),children:"Projects"}),C.jsx("a",{href:"#achievements",onClick:()=>t(!1),children:"Impact"}),C.jsx("a",{href:"#education",onClick:()=>t(!1),children:"Education"}),C.jsx("a",{href:"#contact",onClick:()=>t(!1),children:"Contact"})]}),C.jsxs("nav",{children:[C.jsxs("div",{className:"nav-logo",children:["avigat",C.jsx("span",{children:".sharma"})]}),C.jsxs("ul",{className:"nav-links",children:[C.jsx("li",{children:C.jsx("a",{href:"#about",children:"About"})}),C.jsx("li",{children:C.jsx("a",{href:"#skills",children:"Skills"})}),C.jsx("li",{children:C.jsx("a",{href:"#experience",children:"Experience"})}),C.jsx("li",{children:C.jsx("a",{href:"#projects",children:"Projects"})}),C.jsx("li",{children:C.jsx("a",{href:"#achievements",children:"Impact"})}),C.jsx("li",{children:C.jsx("a",{href:"#education",children:"Education"})}),C.jsx("li",{children:C.jsx("a",{href:"#contact",children:"Contact"})})]}),C.jsxs("div",{className:o?"hamburger open":"hamburger",onClick:i,children:[C.jsx("span",{}),C.jsx("span",{}),C.jsx("span",{})]})]})]})}const wh="184",NS=0,O0=1,US=2,wc=1,LS=2,Fo=3,as=0,jn=1,ma=2,_a=0,wr=1,P0=2,I0=3,B0=4,OS=5,ws=100,PS=101,IS=102,BS=103,zS=104,FS=200,HS=201,GS=202,VS=203,Id=204,Bd=205,kS=206,XS=207,jS=208,WS=209,qS=210,YS=211,ZS=212,KS=213,QS=214,zd=0,Fd=1,Hd=2,Nr=3,Gd=4,Vd=5,kd=6,Xd=7,O_=0,JS=1,$S=2,Gi=0,P_=1,I_=2,B_=3,z_=4,F_=5,H_=6,G_=7,V_=300,Ls=301,Ur=302,id=303,ad=304,Vc=306,jd=1e3,ga=1001,Wd=1002,Cn=1003,eM=1004,sc=1005,On=1006,sd=1007,Ns=1008,_i=1009,k_=1010,X_=1011,Vo=1012,Dh=1013,ki=1014,Fi=1015,xa=1016,Nh=1017,Uh=1018,ko=1020,j_=35902,W_=35899,q_=1021,Y_=1022,Di=1023,Sa=1026,Us=1027,Z_=1028,Lh=1029,Os=1030,Oh=1031,Ph=1033,Dc=33776,Nc=33777,Uc=33778,Lc=33779,qd=35840,Yd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,eh=37488,th=37489,Pc=37490,nh=37491,ih=37808,ah=37809,sh=37810,rh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,Mh=36284,Ic=36285,yh=36286,tM=3200,z0=0,nM=1,ns="",mi="srgb",Bc="srgb-linear",zc="linear",Bt="srgb",mr=7680,F0=519,iM=512,aM=513,sM=514,Ih=515,rM=516,oM=517,Bh=518,lM=519,H0=35044,G0="300 es",Hi=2e3,Fc=2001;function cM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uM(){const o=Hc("canvas");return o.style.display="block",o}const V0={};function k0(...o){const t="THREE."+o.shift();console.log(t,...o)}function K_(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function tt(...o){o=K_(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Et(...o){o=K_(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Eh(...o){const t=o.join(" ");t in V0||(V0[t]=!0,tt(...o))}function fM(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const dM={[zd]:Fd,[Hd]:kd,[Gd]:Xd,[Nr]:Vd,[Fd]:zd,[kd]:Hd,[Xd]:Gd,[Vd]:Nr};class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,bh=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function hM(o,t){return(o%t+t)%t}function od(o,t,i){return(1-i)*o+i*t}function Uo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Gh=class Gh{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let Vt=Gh;class Pr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],x=s[l+3],g=u[d+0],y=u[d+1],b=u[d+2],N=u[d+3];if(x!==N||m!==g||h!==y||S!==b){let M=m*g+h*y+S*b+x*N;M<0&&(g=-g,y=-y,b=-b,N=-N,M=-M);let v=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);v=Math.sin(v*D)/P,p=Math.sin(p*D)/P,m=m*v+g*p,h=h*v+y*p,S=S*v+b*p,x=x*v+N*p}else{m=m*v+g*p,h=h*v+y*p,S=S*v+b*p,x=x*v+N*p;const D=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=D,h*=D,S*=D,x*=D}}t[i]=m,t[i+1]=h,t[i+2]=S,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],x=u[d],g=u[d+1],y=u[d+2],b=u[d+3];return t[i]=p*b+S*x+m*y-h*g,t[i+1]=m*b+S*g+h*x-p*y,t[i+2]=h*b+S*y+p*g-m*x,t[i+3]=S*b-p*x-m*g-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),x=p(u/2),g=m(s/2),y=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=g*S*x+h*y*b,this._y=h*y*x-g*S*b,this._z=h*S*b+g*y*x,this._w=h*S*x-g*y*b;break;case"YXZ":this._x=g*S*x+h*y*b,this._y=h*y*x-g*S*b,this._z=h*S*b-g*y*x,this._w=h*S*x+g*y*b;break;case"ZXY":this._x=g*S*x-h*y*b,this._y=h*y*x+g*S*b,this._z=h*S*b+g*y*x,this._w=h*S*x-g*y*b;break;case"ZYX":this._x=g*S*x-h*y*b,this._y=h*y*x+g*S*b,this._z=h*S*b-g*y*x,this._w=h*S*x+g*y*b;break;case"YZX":this._x=g*S*x+h*y*b,this._y=h*y*x+g*S*b,this._z=h*S*b-g*y*x,this._w=h*S*x-g*y*b;break;case"XZY":this._x=g*S*x-h*y*b,this._y=h*y*x-g*S*b,this._z=h*S*b+g*y*x,this._w=h*S*x+g*y*b;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],g=s+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(S-m)*y,this._y=(u-h)*y,this._z=(d-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(S-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+h)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(u-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(d-l)/y,this._x=(u+h)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-u*m,this._y=l*S+d*m+u*p-s*h,this._z=u*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),S=2*(p*i-u*l),x=2*(u*s-d*i);return this.x=i+m*h+d*x-p*S,this.y=s+m*S+p*h-u*x,this.z=l+m*x+u*S-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let ie=Vh;const ld=new ie,X0=new Pr,kh=class kh{constructor(t,i,s,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,m,h)}set(t,i,s,l,u,d,p,m,h){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],x=s[7],g=s[2],y=s[5],b=s[8],N=l[0],M=l[3],v=l[6],D=l[1],P=l[4],L=l[7],X=l[2],O=l[5],z=l[8];return u[0]=d*N+p*D+m*X,u[3]=d*M+p*P+m*O,u[6]=d*v+p*L+m*z,u[1]=h*N+S*D+x*X,u[4]=h*M+S*P+x*O,u[7]=h*v+S*L+x*z,u[2]=g*N+y*D+b*X,u[5]=g*M+y*P+b*O,u[8]=g*v+y*L+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8];return i*d*S-i*p*h-s*u*S+s*p*m+l*u*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=S*d-p*h,g=p*m-S*u,y=h*u-d*m,b=i*x+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/b;return t[0]=x*N,t[1]=(l*h-S*s)*N,t[2]=(p*s-l*d)*N,t[3]=g*N,t[4]=(S*i-l*m)*N,t[5]=(l*u-p*i)*N,t[6]=y*N,t[7]=(s*m-h*i)*N,t[8]=(d*i-s*u)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;let st=kh;const cd=new st,j0=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const o={enabled:!0,workingColorSpace:Bc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Bt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Eh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Eh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bc]:{primaries:t,whitePoint:s,transfer:zc,toXYZ:j0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:s,transfer:Bt,toXYZ:j0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const Mt=pM();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class mM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=Hc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=va(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gM=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(ud(l[d].image)):u.push(ud(l[d]))}else u=ud(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let _M=0;const fd=new ie;class Bn extends Is{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=ga,l=ga,u=On,d=Ns,p=Di,m=_i,h=Bn.DEFAULT_ANISOTROPY,S=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=jo(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=V_;Bn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,h=m[0],S=m[4],x=m[8],g=m[1],y=m[5],b=m[9],N=m[2],M=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(x-N)<.01&&Math.abs(b-M)<.01){if(Math.abs(S+g)<.1&&Math.abs(x+N)<.1&&Math.abs(b+M)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,L=(y+1)/2,X=(v+1)/2,O=(S+g)/4,z=(x+N)/4,T=(b+M)/4;return P>L&&P>X?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=O/s,u=z/s):L>X?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=O/l,u=T/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=z/u,l=T/u),this.set(s,l,u,i),this}let D=Math.sqrt((M-b)*(M-b)+(x-N)*(x-N)+(g-S)*(g-S));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(x-N)/D,this.z=(g-S)/D,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let ln=Xh;class vM extends Is{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new Bn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends vM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Q_ extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=class Gc{constructor(t,i,s,l,u,d,p,m,h,S,x,g,y,b,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,m,h,S,x,g,y,b,N,M)}set(t,i,s,l,u,d,p,m,h,S,x,g,y,b,N,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=g,v[3]=y,v[7]=b,v[11]=N,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),u=1/_r.setFromMatrixColumn(t,1).length(),d=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const g=d*S,y=d*x,b=p*S,N=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=y+b*h,i[5]=g-N*h,i[9]=-p*m,i[2]=N-g*h,i[6]=b+y*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*S,y=m*x,b=h*S,N=h*x;i[0]=g+N*p,i[4]=b*p-y,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=y*p-b,i[6]=N+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*S,y=m*x,b=h*S,N=h*x;i[0]=g-N*p,i[4]=-d*x,i[8]=b+y*p,i[1]=y+b*p,i[5]=d*S,i[9]=N-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*S,y=d*x,b=p*S,N=p*x;i[0]=m*S,i[4]=b*h-y,i[8]=g*h+N,i[1]=m*x,i[5]=N*h+g,i[9]=y*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,y=d*h,b=p*m,N=p*h;i[0]=m*S,i[4]=N-g*x,i[8]=b*x+y,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=y*x+b,i[10]=g-N*x}else if(t.order==="XZY"){const g=d*m,y=d*h,b=p*m,N=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=g*x+N,i[5]=d*S,i[9]=y*x-b,i[2]=b*x-y,i[6]=p*S,i[10]=N*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,MM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ka.crossVectors(s,ii),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ka.crossVectors(s,ii)),Ka.normalize(),rc.crossVectors(ii,Ka),l[0]=Ka.x,l[4]=rc.x,l[8]=ii.x,l[1]=Ka.y,l[5]=rc.y,l[9]=ii.y,l[2]=Ka.z,l[6]=rc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],x=s[5],g=s[9],y=s[13],b=s[2],N=s[6],M=s[10],v=s[14],D=s[3],P=s[7],L=s[11],X=s[15],O=l[0],z=l[4],T=l[8],B=l[12],Z=l[1],F=l[5],K=l[9],ue=l[13],pe=l[2],W=l[6],U=l[10],H=l[14],re=l[3],ge=l[7],ye=l[11],I=l[15];return u[0]=d*O+p*Z+m*pe+h*re,u[4]=d*z+p*F+m*W+h*ge,u[8]=d*T+p*K+m*U+h*ye,u[12]=d*B+p*ue+m*H+h*I,u[1]=S*O+x*Z+g*pe+y*re,u[5]=S*z+x*F+g*W+y*ge,u[9]=S*T+x*K+g*U+y*ye,u[13]=S*B+x*ue+g*H+y*I,u[2]=b*O+N*Z+M*pe+v*re,u[6]=b*z+N*F+M*W+v*ge,u[10]=b*T+N*K+M*U+v*ye,u[14]=b*B+N*ue+M*H+v*I,u[3]=D*O+P*Z+L*pe+X*re,u[7]=D*z+P*F+L*W+X*ge,u[11]=D*T+P*K+L*U+X*ye,u[15]=D*B+P*ue+L*H+X*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],p=t[5],m=t[9],h=t[13],S=t[2],x=t[6],g=t[10],y=t[14],b=t[3],N=t[7],M=t[11],v=t[15],D=m*y-h*g,P=p*y-h*x,L=p*g-m*x,X=d*y-h*S,O=d*g-m*S,z=d*x-p*S;return i*(N*D-M*P+v*L)-s*(b*D-M*X+v*O)+l*(b*P-N*X+v*z)-u*(b*L-N*O+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=t[9],g=t[10],y=t[11],b=t[12],N=t[13],M=t[14],v=t[15],D=i*p-s*d,P=i*m-l*d,L=i*h-u*d,X=s*m-l*p,O=s*h-u*p,z=l*h-u*m,T=S*N-x*b,B=S*M-g*b,Z=S*v-y*b,F=x*M-g*N,K=x*v-y*N,ue=g*v-y*M,pe=D*ue-P*K+L*F+X*Z-O*B+z*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/pe;return t[0]=(p*ue-m*K+h*F)*W,t[1]=(l*K-s*ue-u*F)*W,t[2]=(N*z-M*O+v*X)*W,t[3]=(g*O-x*z-y*X)*W,t[4]=(m*Z-d*ue-h*B)*W,t[5]=(i*ue-l*Z+u*B)*W,t[6]=(M*L-b*z-v*P)*W,t[7]=(S*z-g*L+y*P)*W,t[8]=(d*K-p*Z+h*T)*W,t[9]=(s*Z-i*K-u*T)*W,t[10]=(b*O-N*L+v*D)*W,t[11]=(x*L-S*O-y*D)*W,t[12]=(p*B-d*F-m*T)*W,t[13]=(i*F-s*B+l*T)*W,t[14]=(N*P-b*X-M*D)*W,t[15]=(S*X-x*P+g*D)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,p=t.y,m=t.z,h=u*d,S=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,S=d+d,x=p+p,g=u*h,y=u*S,b=u*x,N=d*S,M=d*x,v=p*x,D=m*h,P=m*S,L=m*x,X=s.x,O=s.y,z=s.z;return l[0]=(1-(N+v))*X,l[1]=(y+L)*X,l[2]=(b-P)*X,l[3]=0,l[4]=(y-L)*O,l[5]=(1-(g+v))*O,l[6]=(M+D)*O,l[7]=0,l[8]=(b+P)*z,l[9]=(M-D)*z,l[10]=(1-(g+N))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let d=_r.set(l[0],l[1],l[2]).length();const p=_r.set(l[4],l[5],l[6]).length(),m=_r.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ai.copy(this);const h=1/d,S=1/p,x=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=S,Ai.elements[5]*=S,Ai.elements[6]*=S,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,u,d,p=Hi,m=!1){const h=this.elements,S=2*u/(i-t),x=2*u/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,N;if(m)b=u/(d-u),N=d*u/(d-u);else if(p===Hi)b=-(d+u)/(d-u),N=-2*d*u/(d-u);else if(p===Fc)b=-d/(d-u),N=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,u,d,p=Hi,m=!1){const h=this.elements,S=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,N;if(m)b=1/(d-u),N=d/(d-u);else if(p===Hi)b=-2/(d-u),N=-(d+u)/(d-u);else if(p===Fc)b=-1/(d-u),N=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=b,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Gc.prototype.isMatrix4=!0;let mn=Gc;const _r=new ie,Ai=new mn,SM=new ie(0,0,0),MM=new ie(1,1,1),Ka=new ie,rc=new ie,ii=new ie,q0=new mn,Y0=new Pr;class Ps{constructor(t=0,i=0,s=0,l=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,y),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yM=0;const Z0=new ie,vr=new Pr,ua=new mn,oc=new ie,Lo=new ie,EM=new ie,bM=new Pr,K0=new ie(1,0,0),Q0=new ie(0,1,0),J0=new ie(0,0,1),$0={type:"added"},TM={type:"removed"},xr={type:"childadded",child:null},dd={type:"childremoved",child:null};class Wn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new ie,i=new Ps,s=new Pr,l=new ie(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new st}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(K0,t)}rotateY(t){return this.rotateOnAxis(Q0,t)}rotateZ(t){return this.rotateOnAxis(J0,t)}translateOnAxis(t,i){return Z0.copy(t).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(K0,t)}translateY(t){return this.translateOnAxis(Q0,t)}translateZ(t){return this.translateOnAxis(J0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Lo,oc,this.up):ua.lookAt(oc,Lo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(ua),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($0),xr.child=t,this.dispatchEvent(xr),xr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TM),dd.child=t,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($0),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,EM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,bM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(t.materials,this.material[m]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),S=d(t.images),x=d(t.shapes),g=d(t.skeletons),y=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new ie(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ho extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),v=this._getHandJoint(h,N);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=S.position.distanceTo(x.position),y=.02,b=.005;h.inputState.pinching&&g>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ho;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},lc={h:0,s:0,l:0};function pd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class wt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Mt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Mt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Mt.workingColorSpace){if(t=hM(t,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=pd(d,u,t+1/3),this.g=pd(d,u,t),this.b=pd(d,u,t-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(t,i=mi){function s(u){u!==void 0&&parseFloat(u)<1&&tt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:tt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=mi){const s=$_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Mt.workingToColorSpace(Ln.copy(this),t),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Mt.workingColorSpace){Mt.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=h,t.l=S,t}getRGB(t,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=mi){Mt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(lc);const s=od(Qa.h,lc.h,i),l=od(Qa.s,lc.s,i),u=od(Qa.l,lc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new wt;wt.NAMES=$_;class RM extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new ie,fa=new ie,md=new ie,da=new ie,Sr=new ie,Mr=new ie,e_=new ie,gd=new ie,_d=new ie,vd=new ie,xd=new ln,Sd=new ln,Md=new ln;class wi{constructor(t=new ie,i=new ie,s=new ie){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ri.subVectors(l,i),fa.subVectors(s,i),md.subVectors(t,i);const d=Ri.dot(Ri),p=Ri.dot(fa),m=Ri.dot(md),h=fa.dot(fa),S=fa.dot(md),x=d*h-p*p;if(x===0)return u.set(0,0,0),null;const g=1/x,y=(h*m-p*S)*g,b=(d*S-p*m)*g;return u.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,u,d,p,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(d,da.y),m.addScaledVector(p,da.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return xd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),xd.fromBufferAttribute(t,i),Sd.fromBufferAttribute(t,s),Md.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(xd,u.x),d.addScaledVector(Sd,u.y),d.addScaledVector(Md,u.z),d}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),fa.subVectors(t,i),Ri.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,p;Sr.subVectors(l,s),Mr.subVectors(u,s),gd.subVectors(t,s);const m=Sr.dot(gd),h=Mr.dot(gd);if(m<=0&&h<=0)return i.copy(s);_d.subVectors(t,l);const S=Sr.dot(_d),x=Mr.dot(_d);if(S>=0&&x<=S)return i.copy(l);const g=m*x-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Sr,d);vd.subVectors(t,u);const y=Sr.dot(vd),b=Mr.dot(vd);if(b>=0&&y<=b)return i.copy(u);const N=y*h-m*b;if(N<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Mr,p);const M=S*b-y*x;if(M<=0&&x-S>=0&&y-b>=0)return e_.subVectors(u,l),p=(x-S)/(x-S+(y-b)),i.copy(l).addScaledVector(e_,p);const v=1/(M+N+g);return d=N*v,p=g*v,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Wo{constructor(t=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ci):Ci.fromBufferAttribute(u,d),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),uc.subVectors(this.max,Oo),yr.subVectors(t.a,Oo),Er.subVectors(t.b,Oo),br.subVectors(t.c,Oo),Ja.subVectors(Er,yr),$a.subVectors(br,Er),bs.subVectors(yr,br);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-bs.z,bs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,bs.z,0,-bs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-bs.y,bs.x,0];return!yd(i,yr,Er,br,uc)||(i=[1,0,0,0,1,0,0,0,1],!yd(i,yr,Er,br,uc))?!1:(fc.crossVectors(Ja,$a),i=[fc.x,fc.y,fc.z],yd(i,yr,Er,br,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ci=new ie,cc=new Wo,yr=new ie,Er=new ie,br=new ie,Ja=new ie,$a=new ie,bs=new ie,Oo=new ie,uc=new ie,fc=new ie,Ts=new ie;function yd(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ts.fromArray(o,u);const p=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),h=i.dot(Ts),S=s.dot(Ts);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const pn=new ie,dc=new Vt;let CM=0;class vi extends Is{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=H0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ev extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class tv extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class xi extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const wM=new Wo,Po=new ie,Ed=new ie;class kc{constructor(t=new ie,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):wM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Ed)),this.expandByPoint(Po.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let DM=0;const pi=new mn,bd=new Wn,Tr=new ie,ai=new Wo,Io=new Wo,Mn=new ie;class Si extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cM(t)?tv:ev)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new st().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Io.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(ai.min,Io.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Io.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Io.min),ai.expandByPoint(Io.max))}ai.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Mn.fromBufferAttribute(p,h),m&&(Tr.fromBufferAttribute(t,h),Mn.add(Tr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new ie,m[T]=new ie;const h=new ie,S=new ie,x=new ie,g=new Vt,y=new Vt,b=new Vt,N=new ie,M=new ie;function v(T,B,Z){h.fromBufferAttribute(s,T),S.fromBufferAttribute(s,B),x.fromBufferAttribute(s,Z),g.fromBufferAttribute(u,T),y.fromBufferAttribute(u,B),b.fromBufferAttribute(u,Z),S.sub(h),x.sub(h),y.sub(g),b.sub(g);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(N.copy(S).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(F),M.copy(x).multiplyScalar(y.x).addScaledVector(S,-b.x).multiplyScalar(F),p[T].add(N),p[B].add(N),p[Z].add(N),m[T].add(M),m[B].add(M),m[Z].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,B=D.length;T<B;++T){const Z=D[T],F=Z.start,K=Z.count;for(let ue=F,pe=F+K;ue<pe;ue+=3)v(t.getX(ue+0),t.getX(ue+1),t.getX(ue+2))}const P=new ie,L=new ie,X=new ie,O=new ie;function z(T){X.fromBufferAttribute(l,T),O.copy(X);const B=p[T];P.copy(B),P.sub(X.multiplyScalar(X.dot(B))).normalize(),L.crossVectors(O,B);const F=L.dot(m[T])<0?-1:1;d.setXYZW(T,P.x,P.y,P.z,F)}for(let T=0,B=D.length;T<B;++T){const Z=D[T],F=Z.start,K=Z.count;for(let ue=F,pe=F+K;ue<pe;ue+=3)z(t.getX(ue+0)),z(t.getX(ue+1)),z(t.getX(ue+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new ie,u=new ie,d=new ie,p=new ie,m=new ie,h=new ie,S=new ie,x=new ie;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),N=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,N),h.fromBufferAttribute(s,M),p.add(S),m.add(S),h.add(S),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const h=p.array,S=p.itemSize,x=p.normalized,g=new h.constructor(m.length*S);let y=0,b=0;for(let N=0,M=m.length;N<M;N++){p.isInterleavedBufferAttribute?y=m[N]*p.data.stride+p.offset:y=m[N]*S;for(let v=0;v<S;v++)g[b++]=h[y++]}return new vi(g,S,x)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let S=0,x=h.length;S<x;S++){const g=h[S],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,g=h.length;x<g;x++){const y=h[x];S.push(y.toJSON(t.data))}S.length>0&&(l[m]=S,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const u=t.morphAttributes;for(const h in u){const S=[],x=u[h];for(let g=0,y=x.length;g<y;g++)S.push(x[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NM=0;class qo extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=wr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Bd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){tt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Id&&(s.blendSrc=this.blendSrc),this.blendDst!==Bd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pa=new ie,Td=new ie,hc=new ie,es=new ie,Ad=new ie,pc=new ie,Rd=new ie;class nv{constructor(t=new ie,i=new ie(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Td.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),es.copy(this.origin).sub(Td);const u=t.distanceTo(i)*.5,d=-this.direction.dot(hc),p=es.dot(this.direction),m=-es.dot(hc),h=es.lengthSq(),S=Math.abs(1-d*d);let x,g,y,b;if(S>0)if(x=d*m-p,g=d*p-m,b=u*S,x>=0)if(g>=-b)if(g<=b){const N=1/S;x*=N,g*=N,y=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=u,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g=-u,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g<=-b?(x=Math.max(0,-(-d*u+p)),g=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+g*(g+2*m)+h):g<=b?(x=0,g=Math.min(Math.max(-u,-m),u),y=g*(g+2*m)+h):(x=Math.max(0,-(d*u+p)),g=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+g*(g+2*m)+h);else g=d>0?-u:u,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Td).addScaledVector(hc,g),y}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),S>=0?(u=(t.min.y-g.y)*S,d=(t.max.y-g.y)*S):(u=(t.max.y-g.y)*S,d=(t.min.y-g.y)*S),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,u){Ad.subVectors(i,t),pc.subVectors(s,t),Rd.crossVectors(Ad,pc);let d=this.direction.dot(Rd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;es.subVectors(this.origin,t);const m=p*this.direction.dot(pc.crossVectors(es,pc));if(m<0)return null;const h=p*this.direction.dot(Ad.cross(es));if(h<0||m+h>d)return null;const S=-p*es.dot(Rd);return S<0?null:this.at(S/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fh extends qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const t_=new mn,As=new nv,mc=new kc,n_=new ie,gc=new ie,_c=new ie,vc=new ie,Cd=new ie,xc=new ie,i_=new ie,Sc=new ie;class Xi extends Wn{constructor(t=new Si,i=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){xc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const S=p[m],x=u[m];S!==0&&(Cd.fromBufferAttribute(x,t),d?xc.addScaledVector(Cd,S):xc.addScaledVector(Cd.sub(i),S))}i.add(xc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(u),As.copy(t.ray).recast(t.near),!(mc.containsPoint(As.origin)===!1&&(As.intersectSphere(mc,n_)===null||As.origin.distanceToSquared(n_)>(t.far-t.near)**2))&&(t_.copy(u).invert(),As.copy(t.ray).applyMatrix4(t_),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,g=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,N=g.length;b<N;b++){const M=g[b],v=d[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,X=P;L<X;L+=3){const O=p.getX(L),z=p.getX(L+1),T=p.getX(L+2);l=Mc(this,v,t,s,h,S,x,O,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),N=Math.min(p.count,y.start+y.count);for(let M=b,v=N;M<v;M+=3){const D=p.getX(M),P=p.getX(M+1),L=p.getX(M+2);l=Mc(this,d,t,s,h,S,x,D,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,N=g.length;b<N;b++){const M=g[b],v=d[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,X=P;L<X;L+=3){const O=L,z=L+1,T=L+2;l=Mc(this,v,t,s,h,S,x,O,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),N=Math.min(m.count,y.start+y.count);for(let M=b,v=N;M<v;M+=3){const D=M,P=M+1,L=M+2;l=Mc(this,d,t,s,h,S,x,D,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function UM(o,t,i,s,l,u,d,p){let m;if(t.side===jn?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,t.side===as,p),m===null)return null;Sc.copy(p),Sc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Sc);return h<i.near||h>i.far?null:{distance:h,point:Sc.clone(),object:o}}function Mc(o,t,i,s,l,u,d,p,m,h){o.getVertexPosition(p,gc),o.getVertexPosition(m,_c),o.getVertexPosition(h,vc);const S=UM(o,t,i,s,gc,_c,vc,i_);if(S){const x=new ie;wi.getBarycoord(i_,gc,_c,vc,x),l&&(S.uv=wi.getInterpolatedAttribute(l,p,m,h,x,new Vt)),u&&(S.uv1=wi.getInterpolatedAttribute(u,p,m,h,x,new Vt)),d&&(S.normal=wi.getInterpolatedAttribute(d,p,m,h,x,new ie),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ie,materialIndex:0};wi.getNormal(gc,_c,vc,g.normal),S.face=g,S.barycoord=x}return S}class LM extends Bn{constructor(t=null,i=1,s=1,l,u,d,p,m,h=Cn,S=Cn,x,g){super(null,d,p,m,h,S,l,u,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new ie,OM=new ie,PM=new st;class Cs{constructor(t=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=wd.subVectors(s,i).cross(OM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(wd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||PM.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new kc,IM=new Vt(.5,.5),yc=new ie;class iv{constructor(t=new Cs,i=new Cs,s=new Cs,l=new Cs,u=new Cs,d=new Cs){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Hi,s=!1){const l=this.planes,u=t.elements,d=u[0],p=u[1],m=u[2],h=u[3],S=u[4],x=u[5],g=u[6],y=u[7],b=u[8],N=u[9],M=u[10],v=u[11],D=u[12],P=u[13],L=u[14],X=u[15];if(l[0].setComponents(h-d,y-S,v-b,X-D).normalize(),l[1].setComponents(h+d,y+S,v+b,X+D).normalize(),l[2].setComponents(h+p,y+x,v+N,X+P).normalize(),l[3].setComponents(h-p,y-x,v-N,X-P).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(h-m,y-g,v-M,X-L).normalize();else if(l[4].setComponents(h-m,y-g,v-M,X-L).normalize(),i===Hi)l[5].setComponents(h+m,y+g,v+M,X+L).normalize();else if(i===Fc)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=IM.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends qo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const a_=new mn,Th=new nv,Ec=new kc,bc=new ie;class BM extends Wn{constructor(t=new Si,i=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,t.ray.intersectsSphere(Ec)===!1)return;a_.copy(l).invert(),Th.copy(t.ray).applyMatrix4(a_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,x=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),y=Math.min(h.count,d.start+d.count);for(let b=g,N=y;b<N;b++){const M=h.getX(b);bc.fromBufferAttribute(x,M),s_(bc,M,m,l,t,i,this)}}else{const g=Math.max(0,d.start),y=Math.min(x.count,d.start+d.count);for(let b=g,N=y;b<N;b++)bc.fromBufferAttribute(x,b),s_(bc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function s_(o,t,i,s,l,u,d){const p=Th.distanceSqToPoint(o);if(p<i){const m=new ie;Th.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;u.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class sv extends Bn{constructor(t=[],i=Ls,s,l,u,d,p,m,h,S){super(t,i,s,l,u,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lr extends Bn{constructor(t,i,s=ki,l,u,d,p=Cn,m=Cn,h,S=Sa,x=1){if(S!==Sa&&S!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,u,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zM extends Lr{constructor(t,i=ki,s=Ls,l,u,d=Cn,p=Cn,m,h=Sa){const S={width:t,height:t,depth:1},x=[S,S,S,S,S,S];super(t,t,i,s,l,u,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rv extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends Si{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],S=[],x=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,d,u,0),b("z","y","x",1,-1,s,i,-t,d,u,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new xi(h,3)),this.setAttribute("normal",new xi(S,3)),this.setAttribute("uv",new xi(x,2));function b(N,M,v,D,P,L,X,O,z,T,B){const Z=L/z,F=X/T,K=L/2,ue=X/2,pe=O/2,W=z+1,U=T+1;let H=0,re=0;const ge=new ie;for(let ye=0;ye<U;ye++){const I=ye*F-ue;for(let J=0;J<W;J++){const xe=J*Z-K;ge[N]=xe*D,ge[M]=I*P,ge[v]=pe,h.push(ge.x,ge.y,ge.z),ge[N]=0,ge[M]=0,ge[v]=O>0?1:-1,S.push(ge.x,ge.y,ge.z),x.push(J/z),x.push(1-ye/T),H+=1}}for(let ye=0;ye<T;ye++)for(let I=0;I<z;I++){const J=g+I+W*ye,xe=g+I+W*(ye+1),Ae=g+(I+1)+W*(ye+1),De=g+(I+1)+W*ye;m.push(J,xe,De),m.push(xe,Ae,De),re+=6}p.addGroup(y,re,B),y+=re,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xc extends Si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,x=t/p,g=i/m,y=[],b=[],N=[],M=[];for(let v=0;v<S;v++){const D=v*g-d;for(let P=0;P<h;P++){const L=P*x-u;b.push(L,-D,0),N.push(0,0,1),M.push(P/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<p;D++){const P=D+h*v,L=D+h*(v+1),X=D+1+h*(v+1),O=D+1+h*v;y.push(P,L,O),y.push(L,X,O)}this.setIndex(y),this.setAttribute("position",new xi(b,3)),this.setAttribute("normal",new xi(N,3)),this.setAttribute("uv",new xi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hh extends Si{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],x=new ie,g=new ie,y=[],b=[],N=[],M=[];for(let v=0;v<=s;v++){const D=[],P=v/s;let L=0;v===0&&d===0?L=.5/i:v===s&&m===Math.PI&&(L=-.5/i);for(let X=0;X<=i;X++){const O=X/i;x.x=-t*Math.cos(l+O*u)*Math.sin(d+P*p),x.y=t*Math.cos(d+P*p),x.z=t*Math.sin(l+O*u)*Math.sin(d+P*p),b.push(x.x,x.y,x.z),g.copy(x).normalize(),N.push(g.x,g.y,g.z),M.push(O+L,1-P),D.push(h++)}S.push(D)}for(let v=0;v<s;v++)for(let D=0;D<i;D++){const P=S[v][D+1],L=S[v][D],X=S[v+1][D],O=S[v+1][D+1];(v!==0||d>0)&&y.push(P,L,O),(v!==s-1||m<Math.PI)&&y.push(L,X,O)}this.setIndex(y),this.setAttribute("position",new xi(b,3)),this.setAttribute("normal",new xi(N,3)),this.setAttribute("uv",new xi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Or(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(r_(l))l.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(r_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function In(o){const t={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)t[l]=s[l]}return t}function r_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function FM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ov(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Mt.workingColorSpace}const HM={clone:Or,merge:In};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=FM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class kM extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XM extends qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jM extends qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tc=new ie,Ac=new Pr,Ii=new ie;class lv extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tc,Ac,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Tc,Ac,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new ie,o_=new Vt,l_=new Vt;class gi extends lv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,o_,l_),i.subVectors(l_,o_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cv extends lv{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=-90,Rr=1;class WM extends Wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const u=new gi(Ar,Rr,t,i);u.layers=this.layers,this.add(u);const d=new gi(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const p=new gi(Ar,Rr,t,i);p.layers=this.layers,this.add(p);const m=new gi(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const h=new gi(Ar,Rr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(t===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,S]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(x,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class qM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class YM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const jh=class jh{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};jh.prototype.isMatrix2=!0;let c_=jh;function u_(o,t,i,s){const l=ZM(s);switch(i){case q_:return o*t;case Z_:return o*t/l.components*l.byteLength;case Lh:return o*t/l.components*l.byteLength;case Os:return o*t*2/l.components*l.byteLength;case Oh:return o*t*2/l.components*l.byteLength;case Y_:return o*t*3/l.components*l.byteLength;case Di:return o*t*4/l.components*l.byteLength;case Ph:return o*t*4/l.components*l.byteLength;case Dc:case Nc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Kd:return Math.max(o,16)*Math.max(t,8)/4;case qd:case Zd:return Math.max(o,8)*Math.max(t,8)/2;case Qd:case Jd:case eh:case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case $d:case Pc:case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ic:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZM(o){switch(o){case _i:case k_:return{byteLength:1,components:1};case Vo:case X_:case xa:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case ki:case Dh:case Fi:return{byteLength:4,components:1};case j_:case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function uv(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function KM(o){const t=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,S),p.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const S=m.array,x=m.updateRanges;if(o.bindBuffer(h,p),x.length===0)o.bufferSubData(h,0,S);else{x.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<x.length;y++){const b=x[g],N=x[y];N.start<=b.start+b.count+1?b.count=Math.max(b.count,N.start+N.count-b.start):(++g,x[g]=N)}x.length=g+1;for(let y=0,b=x.length;y<b;y++){const N=x[y];o.bufferSubData(h,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
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
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
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
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
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
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uy=`#ifdef USE_IRIDESCENCE
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
#endif`,fy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sy=`#define PI 3.141592653589793
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
} // validated`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ky=`#ifdef USE_ENVMAP
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
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yy=`PhysicalMaterial material;
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
#endif`,Zy=`uniform sampler2D dfgLUT;
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
}`,Ky=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
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
}`,ab=`#if DEPTH_PACKING == 3200
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
}`,sb=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#define LAMBERT
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
}`,pb=`#define LAMBERT
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
}`,mb=`#define MATCAP
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
}`,gb=`#define MATCAP
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
}`,_b=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,xb=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,Eb=`#define TOON
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
}`,bb=`#define TOON
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
}`,Tb=`uniform float size;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Rb=`#include <common>
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
}`,Cb=`uniform vec3 color;
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
}`,wb=`uniform float rotation;
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
}`,Db=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:QM,alphahash_pars_fragment:JM,alphamap_fragment:$M,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:ay,batching_pars_vertex:sy,batching_vertex:ry,begin_vertex:oy,beginnormal_vertex:ly,bsdfs:cy,iridescence_fragment:uy,bumpmap_pars_fragment:fy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:_y,color_pars_vertex:vy,color_vertex:xy,common:Sy,cube_uv_reflection_fragment:My,defaultnormal_vertex:yy,displacementmap_pars_vertex:Ey,displacementmap_vertex:by,emissivemap_fragment:Ty,emissivemap_pars_fragment:Ay,colorspace_fragment:Ry,colorspace_pars_fragment:Cy,envmap_fragment:wy,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ny,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:ky,envmap_vertex:Ly,fog_vertex:Oy,fog_pars_vertex:Py,fog_fragment:Iy,fog_pars_fragment:By,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Fy,lights_lambert_fragment:Hy,lights_lambert_pars_fragment:Gy,lights_pars_begin:Vy,lights_toon_fragment:Xy,lights_toon_pars_fragment:jy,lights_phong_fragment:Wy,lights_phong_pars_fragment:qy,lights_physical_fragment:Yy,lights_physical_pars_fragment:Zy,lights_fragment_begin:Ky,lights_fragment_maps:Qy,lights_fragment_end:Jy,lightprobes_pars_fragment:$y,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:aE,map_pars_fragment:sE,map_particle_fragment:rE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:fE,morphnormal_vertex:dE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:_E,normal_pars_vertex:vE,normal_vertex:xE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:EE,iridescence_pars_fragment:bE,opaque_fragment:TE,packing:AE,premultiplied_alpha_fragment:RE,project_vertex:CE,dithering_fragment:wE,dithering_pars_fragment:DE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:OE,shadowmap_vertex:PE,shadowmask_pars_fragment:IE,skinbase_vertex:BE,skinning_pars_vertex:zE,skinning_vertex:FE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:kE,tonemapping_pars_fragment:XE,transmission_fragment:jE,transmission_pars_fragment:WE,uv_pars_fragment:qE,uv_pars_vertex:YE,uv_vertex:ZE,worldpos_vertex:KE,background_vert:QE,background_frag:JE,backgroundCube_vert:$E,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:ab,distance_vert:sb,distance_frag:rb,equirect_vert:ob,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:ub,meshbasic_vert:fb,meshbasic_frag:db,meshlambert_vert:hb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:_b,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:yb,meshtoon_vert:Eb,meshtoon_frag:bb,points_vert:Tb,points_frag:Ab,shadow_vert:Rb,shadow_frag:Cb,sprite_vert:wb,sprite_frag:Db},Fe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zi={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Rc={r:0,b:0,g:0},Nb=new mn,fv=new st;fv.set(-1,0,0,0,1,0,0,0,1);function Ub(o,t,i,s,l,u){const d=new wt(0);let p=l===!0?0:1,m,h,S=null,x=0,g=null;function y(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const L=D.backgroundBlurriness>0;P=t.get(P,L)}return P}function b(D){let P=!1;const L=y(D);L===null?M(d,p):L&&L.isColor&&(M(L,1),P=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,u):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(D,P){const L=y(P);L&&(L.isCubeTexture||L.mapping===Vc)?(h===void 0&&(h=new Xi(new Yo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Or(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(X,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(fv),h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Bt,(S!==L||x!==L.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,S=L,x=L.version,g=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Xi(new Xc(2,2),new ji({name:"BackgroundMaterial",uniforms:Or(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||x!==L.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,S=L,x=L.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(Rc,ov(o)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,P,u)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(d,p)},render:b,addToRenderList:N,dispose:v}}function Lb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,d=!1;function p(F,K,ue,pe,W){let U=!1;const H=x(F,pe,ue,K);u!==H&&(u=H,h(u.object)),U=y(F,pe,ue,W),U&&b(F,pe,ue,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,L(F,K,ue,pe),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return o.createVertexArray()}function h(F){return o.bindVertexArray(F)}function S(F){return o.deleteVertexArray(F)}function x(F,K,ue,pe){const W=pe.wireframe===!0;let U=s[K.id];U===void 0&&(U={},s[K.id]=U);const H=F.isInstancedMesh===!0?F.id:0;let re=U[H];re===void 0&&(re={},U[H]=re);let ge=re[ue.id];ge===void 0&&(ge={},re[ue.id]=ge);let ye=ge[W];return ye===void 0&&(ye=g(m()),ge[W]=ye),ye}function g(F){const K=[],ue=[],pe=[];for(let W=0;W<i;W++)K[W]=0,ue[W]=0,pe[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:pe,object:F,attributes:{},index:null}}function y(F,K,ue,pe){const W=u.attributes,U=K.attributes;let H=0;const re=ue.getAttributes();for(const ge in re)if(re[ge].location>=0){const I=W[ge];let J=U[ge];if(J===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;H++}return u.attributesNum!==H||u.index!==pe}function b(F,K,ue,pe){const W={},U=K.attributes;let H=0;const re=ue.getAttributes();for(const ge in re)if(re[ge].location>=0){let I=U[ge];I===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(I=F.instanceColor));const J={};J.attribute=I,I&&I.data&&(J.data=I.data),W[ge]=J,H++}u.attributes=W,u.attributesNum=H,u.index=pe}function N(){const F=u.newAttributes;for(let K=0,ue=F.length;K<ue;K++)F[K]=0}function M(F){v(F,0)}function v(F,K){const ue=u.newAttributes,pe=u.enabledAttributes,W=u.attributeDivisors;ue[F]=1,pe[F]===0&&(o.enableVertexAttribArray(F),pe[F]=1),W[F]!==K&&(o.vertexAttribDivisor(F,K),W[F]=K)}function D(){const F=u.newAttributes,K=u.enabledAttributes;for(let ue=0,pe=K.length;ue<pe;ue++)K[ue]!==F[ue]&&(o.disableVertexAttribArray(ue),K[ue]=0)}function P(F,K,ue,pe,W,U,H){H===!0?o.vertexAttribIPointer(F,K,ue,W,U):o.vertexAttribPointer(F,K,ue,pe,W,U)}function L(F,K,ue,pe){N();const W=pe.attributes,U=ue.getAttributes(),H=K.defaultAttributeValues;for(const re in U){const ge=U[re];if(ge.location>=0){let ye=W[re];if(ye===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),ye!==void 0){const I=ye.normalized,J=ye.itemSize,xe=t.get(ye);if(xe===void 0)continue;const Ae=xe.buffer,De=xe.type,oe=xe.bytesPerElement,Se=De===o.INT||De===o.UNSIGNED_INT||ye.gpuType===Dh;if(ye.isInterleavedBufferAttribute){const be=ye.data,He=be.stride,$e=ye.offset;if(be.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)v(ge.location+Qe,be.meshPerAttribute);F.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)M(ge.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<ge.locationSize;Qe++)P(ge.location+Qe,J/ge.locationSize,De,I,He*oe,($e+J/ge.locationSize*Qe)*oe,Se)}else{if(ye.isInstancedBufferAttribute){for(let be=0;be<ge.locationSize;be++)v(ge.location+be,ye.meshPerAttribute);F.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let be=0;be<ge.locationSize;be++)M(ge.location+be);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let be=0;be<ge.locationSize;be++)P(ge.location+be,J/ge.locationSize,De,I,J*oe,J/ge.locationSize*be*oe,Se)}}else if(H!==void 0){const I=H[re];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(ge.location,I);break;case 3:o.vertexAttrib3fv(ge.location,I);break;case 4:o.vertexAttrib4fv(ge.location,I);break;default:o.vertexAttrib1fv(ge.location,I)}}}}D()}function X(){B();for(const F in s){const K=s[F];for(const ue in K){const pe=K[ue];for(const W in pe){const U=pe[W];for(const H in U)S(U[H].object),delete U[H];delete pe[W]}}delete s[F]}}function O(F){if(s[F.id]===void 0)return;const K=s[F.id];for(const ue in K){const pe=K[ue];for(const W in pe){const U=pe[W];for(const H in U)S(U[H].object),delete U[H];delete pe[W]}}delete s[F.id]}function z(F){for(const K in s){const ue=s[K];for(const pe in ue){const W=ue[pe];if(W[F.id]===void 0)continue;const U=W[F.id];for(const H in U)S(U[H].object),delete U[H];delete W[F.id]}}}function T(F){for(const K in s){const ue=s[K],pe=F.isInstancedMesh===!0?F.id:0,W=ue[pe];if(W!==void 0){for(const U in W){const H=W[U];for(const re in H)S(H[re].object),delete H[re];delete W[U]}delete ue[pe],Object.keys(ue).length===0&&delete s[K]}}}function B(){Z(),d=!0,u!==l&&(u=l,h(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:Z,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:N,enableAttribute:M,disableUnusedAttributes:D}}function Ob(o,t,i){let s;function l(m){s=m}function u(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(o.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let g=0;for(let y=0;y<S;y++)g+=h[y];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Pb(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Di&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==_i&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(tt("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:N,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:L,maxSamples:X,samples:O}}function Ib(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Cs,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=S(x,g,0)},this.setState=function(x,g,y){const b=x.clippingPlanes,N=x.clipIntersection,M=x.clipShadows,v=o.get(x);if(!l||b===null||b.length===0||u&&!M)u?S(null):h();else{const D=u?0:s,P=D*4;let L=v.clippingState||null;m.value=L,L=S(b,g,P,y);for(let X=0;X!==P;++X)L[X]=i[X];v.clippingState=L,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(x,g,y,b){const N=x!==null?x.length:0;let M=null;if(N!==0){if(M=m.value,b!==!0||M===null){const v=y+N*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<v)&&(M=new Float32Array(v));for(let P=0,L=y;P!==N;++P,L+=4)d.copy(x[P]).applyMatrix4(D,p),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const is=4,f_=[.125,.215,.35,.446,.526,.582],Ds=20,Bb=256,Bo=new cv,d_=new wt;let Dd=null,Nd=0,Ud=0,Ld=!1;const zb=new ie;class h_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=zb}=u;Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Nd,Ud),this._renderer.xr.enabled=Ld,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:xa,format:Di,colorSpace:Bc,depthBuffer:!1},l=p_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fb(u)),this._blurMaterial=Gb(u,t,i),this._ggxMaterial=Hb(u,t,i)}return l}_compileMaterial(t){const i=new Xi(new Si,t);this._renderer.compile(i,Bo)}_sceneToCubeUV(t,i,s,l,u){const m=new gi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(d_),x.toneMapping=Gi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new Yo,new Fh({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let v=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,v=!0):(M.color.copy(d_),v=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[P],u.y,u.z)):L===1?(m.up.set(0,0,h[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[P],u.z)):(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[P]));const X=this._cubeSize;Cr(l,L*X,P>2?X:0,X,X),x.setRenderTarget(l),v&&x.render(N,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ls||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=t;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Bo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),g=0+h*1.25,y=x*g,{_lodMax:b}=this,N=this._sizeLods[s],M=3*N*(s>b-is?s-b+is:0),v=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Cr(u,M,v,3*N,2*N),l.setRenderTarget(u),l.render(p,Bo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Cr(t,M,v,3*N,2*N),l.setRenderTarget(t),l.render(p,Bo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),N=u/b,M=isFinite(u)?1+Math.floor(S*N):Ds;M>Ds&&tt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const v=[];let D=0;for(let z=0;z<Ds;++z){const T=z/N,B=Math.exp(-T*T/2);v.push(B),z===0?D+=B:z<M&&(D+=2*B)}for(let z=0;z<v.length;z++)v[z]=v[z]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=b,g.mipInt.value=P-s;const L=this._sizeLods[l],X=3*L*(l>P-is?l-P+is:0),O=4*(this._cubeSize-L);Cr(i,X,O,3*L,2*L),m.setRenderTarget(i),m.render(x,Bo)}}function Fb(o){const t=[],i=[],s=[];let l=o;const u=o-is+1+f_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-is?m=f_[d-o+is-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,g=[S,S,x,S,x,x,S,S,x,x,S,x],y=6,b=6,N=3,M=2,v=1,D=new Float32Array(N*b*y),P=new Float32Array(M*b*y),L=new Float32Array(v*b*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,T=O>2?0:-1,B=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];D.set(B,N*b*O),P.set(g,M*b*O);const Z=[O,O,O,O,O,O];L.set(Z,v*b*O)}const X=new Si;X.setAttribute("position",new vi(D,N)),X.setAttribute("uv",new vi(P,M)),X.setAttribute("faceIndex",new vi(L,v)),s.push(new Xi(X,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function p_(o,t,i){const s=new Vi(o,t,i);return s.texture.mapping=Vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function Hb(o,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Gb(o,t,i){const s=new Float32Array(Ds),l=new ie(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function m_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function g_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}class dv extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),u=new ji({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:_a});u.uniforms.tEquirect.value=i;const d=new Xi(l,u),p=i.minFilter;return i.minFilter===Ns&&(i.minFilter=On),new WM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}function Vb(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):u(g)}function u(g){if(g&&g.isTexture){const y=g.mapping;if(y===id||y===ad)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const N=new dv(b.height);return N.fromEquirectangularTexture(o,g),t.set(g,N),g.addEventListener("dispose",h),p(N.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,b=y===id||y===ad,N=y===Ls||y===Ur;if(b||N){let M=i.get(g);const v=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new h_(o)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return b&&D&&D.height>0||N&&D&&m(D)?(s===null&&(s=new h_(o)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",S),M.texture):null}}}return g}function p(g,y){return y===id?g.mapping=Ls:y===ad&&(g.mapping=Ur),g}function m(g){let y=0;const b=6;for(let N=0;N<b;N++)g[N]!==void 0&&y++;return y===b}function h(g){const y=g.target;y.removeEventListener("dispose",h);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function S(g){const y=g.target;y.removeEventListener("dispose",S);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function kb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Eh("WebGLRenderer: "+s+" extension not supported."),l}}}function Xb(o,t,i,s){const l={},u=new WeakMap;function d(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const y=u.get(g);y&&(t.remove(y),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function h(x){const g=[],y=x.index,b=x.attributes.position;let N=0;if(b===void 0)return;if(y!==null){const D=y.array;N=y.version;for(let P=0,L=D.length;P<L;P+=3){const X=D[P+0],O=D[P+1],z=D[P+2];g.push(X,O,O,z,z,X)}}else{const D=b.array;N=b.version;for(let P=0,L=D.length/3-1;P<L;P+=3){const X=P+0,O=P+1,z=P+2;g.push(X,O,O,z,z,X)}}const M=new(b.count>=65535?tv:ev)(g,1);M.version=N;const v=u.get(x);v&&t.remove(v),u.set(x,M)}function S(x){const g=u.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&h(x)}else h(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function jb(o,t,i){let s;function l(x){s=x}let u,d;function p(x){u=x.type,d=x.bytesPerElement}function m(x,g){o.drawElements(s,g,u,x*d),i.update(g,s,1)}function h(x,g,y){y!==0&&(o.drawElementsInstanced(s,g,u,x*d,y),i.update(g,s,y))}function S(x,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,x,0,y);let N=0;for(let M=0;M<y;M++)N+=g[M];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function Wb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qb(o,t,i){const s=new WeakMap,l=new ln;function u(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let Z=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Z)};var y=Z;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),N===!0&&(L=2),M===!0&&(L=3);let X=p.attributes.position.count*L,O=1;X>t.maxTextureSize&&(O=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const z=new Float32Array(X*O*4*x),T=new Q_(z,X,O,x);T.type=Fi,T.needsUpdate=!0;const B=L*4;for(let F=0;F<x;F++){const K=v[F],ue=D[F],pe=P[F],W=X*O*4*F;for(let U=0;U<K.count;U++){const H=U*B;b===!0&&(l.fromBufferAttribute(K,U),z[W+H+0]=l.x,z[W+H+1]=l.y,z[W+H+2]=l.z,z[W+H+3]=0),N===!0&&(l.fromBufferAttribute(ue,U),z[W+H+4]=l.x,z[W+H+5]=l.y,z[W+H+6]=l.z,z[W+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,U),z[W+H+8]=l.x,z[W+H+9]=l.y,z[W+H+10]=l.z,z[W+H+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new Vt(X,O)},s.set(p,g),p.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const N=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",N),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function Yb(o,t,i,s,l){let u=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,g=t.get(h,x);if(u.get(g)!==S&&(t.update(g),u.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==S&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),u.set(h,S))),h.isSkinnedMesh){const y=h.skeleton;u.get(y)!==S&&(y.update(),u.set(y,S))}return g}function p(){u=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const Zb={[P_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[B_]:"CINEON_TONE_MAPPING",[z_]:"ACES_FILMIC_TONE_MAPPING",[H_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[F_]:"CUSTOM_TONE_MAPPING"};function Kb(o,t,i,s,l){const u=new Vi(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Lr(t,i):void 0}),d=new Vi(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),p=new Si;p.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new xi([0,2,0,0,2,0],2));const m=new kM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Xi(p,m),S=new cv(-1,1,1,-1,0,1);let x=null,g=null,y=!1,b,N=null,M=[],v=!1;this.setSize=function(D,P){u.setSize(D,P),d.setSize(D,P);for(let L=0;L<M.length;L++){const X=M[L];X.setSize&&X.setSize(D,P)}},this.setEffects=function(D){M=D,v=M.length>0&&M[0].isRenderPass===!0;const P=u.width,L=u.height;for(let X=0;X<M.length;X++){const O=M[X];O.setSize&&O.setSize(P,L)}},this.begin=function(D,P){if(y||D.toneMapping===Gi&&M.length===0)return!1;if(N=P,P!==null){const L=P.width,X=P.height;(u.width!==L||u.height!==X)&&this.setSize(L,X)}return v===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(D,P){D.toneMapping=b,y=!0;let L=u,X=d;for(let O=0;O<M.length;O++){const z=M[O];if(z.enabled!==!1&&(z.render(D,X,L,P),z.needsSwap!==!1)){const T=L;L=X,X=T}}if(x!==D.outputColorSpace||g!==D.toneMapping){x=D.outputColorSpace,g=D.toneMapping,m.defines={},Mt.getTransfer(x)===Bt&&(m.defines.SRGB_TRANSFER="");const O=Zb[g];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(N),D.render(h,S),N=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const hv=new Bn,Ah=new Lr(1,1),pv=new Q_,mv=new xM,gv=new sv,__=[],v_=[],x_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Ir(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),t!==0){s.toArray(u,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(u,p)}return u}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Wc(o,t){let i=v_[t];i===void 0&&(i=new Int32Array(t),v_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Qb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function $b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function eT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function tT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;M_.set(s),o.uniformMatrix2fv(this.addr,!1,M_),xn(i,s)}}function nT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;S_.set(s),o.uniformMatrix3fv(this.addr,!1,S_),xn(i,s)}}function iT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;x_.set(s),o.uniformMatrix4fv(this.addr,!1,x_),xn(i,s)}}function aT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function lT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function dT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ah.compareFunction=i.isReversedDepthBuffer()?Bh:Ih,u=Ah):u=hv,i.setTexture2D(t||u,l)}function hT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||mv,l)}function pT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||gv,l)}function mT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||pv,l)}function gT(o){switch(o){case 5126:return Qb;case 35664:return Jb;case 35665:return $b;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return sT;case 35668:case 35672:return rT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(o,t){o.uniform1fv(this.addr,t)}function vT(o,t){const i=Ir(t,this.size,2);o.uniform2fv(this.addr,i)}function xT(o,t){const i=Ir(t,this.size,3);o.uniform3fv(this.addr,i)}function ST(o,t){const i=Ir(t,this.size,4);o.uniform4fv(this.addr,i)}function MT(o,t){const i=Ir(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ir(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ET(o,t){const i=Ir(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bT(o,t){o.uniform1iv(this.addr,t)}function TT(o,t){o.uniform2iv(this.addr,t)}function AT(o,t){o.uniform3iv(this.addr,t)}function RT(o,t){o.uniform4iv(this.addr,t)}function CT(o,t){o.uniform1uiv(this.addr,t)}function wT(o,t){o.uniform2uiv(this.addr,t)}function DT(o,t){o.uniform3uiv(this.addr,t)}function NT(o,t){o.uniform4uiv(this.addr,t)}function UT(o,t,i){const s=this.cache,l=t.length,u=Wc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ah:d=hv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,u[p])}function LT(o,t,i){const s=this.cache,l=t.length,u=Wc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||mv,u[d])}function OT(o,t,i){const s=this.cache,l=t.length,u=Wc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||gv,u[d])}function PT(o,t,i){const s=this.cache,l=t.length,u=Wc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||pv,u[d])}function IT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return ST;case 35674:return MT;case 35675:return yT;case 35676:return ET;case 5124:case 35670:return bT;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}class BT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gT(i.type)}}class zT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IT(i.type)}}class FT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(t,i[p.id],s)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function y_(o,t){o.seq.push(t),o.map[t.id]=t}function HT(o,t,i){const s=o.name,l=s.length;for(Od.lastIndex=0;;){const u=Od.exec(s),d=Od.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){y_(i,h===void 0?new BT(p,o,t):new zT(p,o,t));break}else{let x=i.map[p];x===void 0&&(x=new FT(p),y_(i,x)),i=x}}}class Oc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);HT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function E_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const GT=37297;let VT=0;function kT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const b_=new st;function XT(o){Mt._getMatrix(b_,Mt.workingColorSpace,o);const t=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(o)){case zc:return[t,"LinearTransferOETF"];case Bt:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function T_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+kT(o.getShaderSource(t),p)}else return u}function jT(o,t){const i=XT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WT={[P_]:"Linear",[I_]:"Reinhard",[B_]:"Cineon",[z_]:"ACESFilmic",[H_]:"AgX",[G_]:"Neutral",[F_]:"Custom"};function qT(o,t){const i=WT[t];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new ie;function YT(){Mt.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function KT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function QT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function Go(o){return o!==""}function A_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(JT,e1)}const $T=new Map;function e1(o,t){let i=ut[t];if(i===void 0){const s=$T.get(t);if(s!==void 0)i=ut[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(o){return o.replace(t1,n1)}function n1(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const i1={[wc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function a1(o){return i1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s1={[Ls]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function r1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":s1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const o1={[Ur]:"ENVMAP_MODE_REFRACTION"};function l1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":o1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c1={[O_]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function u1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":c1[o.combine]||"ENVMAP_BLENDING_NONE"}function f1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function d1(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=a1(i),h=r1(i),S=l1(i),x=u1(i),g=f1(i),y=ZT(i),b=KT(u),N=l.createProgram();let M,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),v.length>0&&(v+=`
`)):(M=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),v=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?ut.tonemapping_pars_fragment:"",i.toneMapping!==Gi?qT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,jT("linearToOutputTexel",i.outputColorSpace),YT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),d=Rh(d),d=A_(d,i),d=R_(d,i),p=Rh(p),p=A_(p,i),p=R_(p,i),d=C_(d),p=C_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=D+M+d,L=D+v+p,X=E_(l,l.VERTEX_SHADER,P),O=E_(l,l.FRAGMENT_SHADER,L);l.attachShader(N,X),l.attachShader(N,O),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function z(F){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(N)||"",ue=l.getShaderInfoLog(X)||"",pe=l.getShaderInfoLog(O)||"",W=K.trim(),U=ue.trim(),H=pe.trim();let re=!0,ge=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,X,O);else{const ye=T_(l,X,"vertex"),I=T_(l,O,"fragment");Et("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ye+`
`+I)}else W!==""?tt("WebGLProgram: Program Info Log:",W):(U===""||H==="")&&(ge=!1);ge&&(F.diagnostics={runnable:re,programLog:W,vertexShader:{log:U,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(X),l.deleteShader(O),T=new Oc(l,N),B=QT(l,N)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let B;this.getAttributes=function(){return B===void 0&&z(this),B};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(N,GT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VT++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=X,this.fragmentShader=O,this}let h1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new m1(t),i.set(t,s)),s}}class m1{constructor(t){this.id=h1++,this.code=t,this.usedTimes=0}}function g1(o){return o===Os||o===Pc||o===Ic}function _1(o,t,i,s,l,u){const d=new J_,p=new p1,m=new Set,h=[],S=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function N(T,B,Z,F,K,ue){const pe=F.fog,W=K.geometry,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,re=t.get(T.envMap||U,H),ge=re&&re.mapping===Vc?re.image.height:null,ye=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&tt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=I!==void 0?I.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let Ae,De,oe,Se;if(ye){const et=zi[ye];Ae=et.vertexShader,De=et.fragmentShader}else Ae=T.vertexShader,De=T.fragmentShader,p.update(T),oe=p.getVertexShaderID(T),Se=p.getFragmentShaderID(T);const be=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),$e=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,kt=!!T.map,ft=!!T.matcap,_t=!!re,Nt=!!T.aoMap,lt=!!T.lightMap,an=!!T.bumpMap,Wt=!!T.normalMap,yn=!!T.displacementMap,j=!!T.emissiveMap,$t=!!T.metalnessMap,dt=!!T.roughnessMap,zt=T.anisotropy>0,Re=T.clearcoat>0,Zt=T.dispersion>0,w=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,_e=zt&&!!T.anisotropyMap,Ee=Re&&!!T.clearcoatMap,Ce=Re&&!!T.clearcoatNormalMap,Le=Re&&!!T.clearcoatRoughnessMap,ce=w&&!!T.iridescenceMap,fe=w&&!!T.iridescenceThicknessMap,Oe=E&&!!T.sheenColorMap,Pe=E&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,we=!!T.specularColorMap,nt=!!T.specularIntensityMap,it=Q&&!!T.transmissionMap,ht=Q&&!!T.thicknessMap,V=!!T.gradientMap,Te=!!T.alphaMap,he=T.alphaTest>0,ze=!!T.alphaHash,Ue=!!T.extensions;let Me=Gi;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=o.toneMapping);const We={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:De,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:$e,instancingColor:$e&&K.instanceColor!==null,instancingMorph:$e&&K.morphTexture!==null,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ft,envMap:_t,envMapMode:_t&&re.mapping,envMapCubeUVHeight:ge,aoMap:Nt,lightMap:lt,bumpMap:an,normalMap:Wt,displacementMap:yn,emissiveMap:j,normalMapObjectSpace:Wt&&T.normalMapType===nM,normalMapTangentSpace:Wt&&T.normalMapType===z0,packedNormalMap:Wt&&T.normalMapType===z0&&g1(T.normalMap.format),metalnessMap:$t,roughnessMap:dt,anisotropy:zt,anisotropyMap:_e,clearcoat:Re,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Zt,iridescence:w,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:we,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:ht,gradientMap:V,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:ze,combine:T.combine,mapUv:kt&&b(T.map.channel),aoMapUv:Nt&&b(T.aoMap.channel),lightMapUv:lt&&b(T.lightMap.channel),bumpMapUv:an&&b(T.bumpMap.channel),normalMapUv:Wt&&b(T.normalMap.channel),displacementMapUv:yn&&b(T.displacementMap.channel),emissiveMapUv:j&&b(T.emissiveMap.channel),metalnessMapUv:$t&&b(T.metalnessMap.channel),roughnessMapUv:dt&&b(T.roughnessMap.channel),anisotropyMapUv:_e&&b(T.anisotropyMap.channel),clearcoatMapUv:Ee&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(T.sheenRoughnessMap.channel),specularMapUv:Ne&&b(T.specularMap.channel),specularColorMapUv:we&&b(T.specularColorMap.channel),specularIntensityMapUv:nt&&b(T.specularIntensityMap.channel),transmissionMapUv:it&&b(T.transmissionMap.channel),thicknessMapUv:ht&&b(T.thicknessMap.channel),alphaMapUv:Te&&b(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Wt||zt),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(kt||Te),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Wt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xe,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:j&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ma,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function M(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)B.push(Z),B.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(v(B,T),D(B,T),B.push(o.outputColorSpace)),B.push(T.customProgramCacheKey),B.join()}function v(T,B){T.push(B.precision),T.push(B.outputColorSpace),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.mapUv),T.push(B.alphaMapUv),T.push(B.lightMapUv),T.push(B.aoMapUv),T.push(B.bumpMapUv),T.push(B.normalMapUv),T.push(B.displacementMapUv),T.push(B.emissiveMapUv),T.push(B.metalnessMapUv),T.push(B.roughnessMapUv),T.push(B.anisotropyMapUv),T.push(B.clearcoatMapUv),T.push(B.clearcoatNormalMapUv),T.push(B.clearcoatRoughnessMapUv),T.push(B.iridescenceMapUv),T.push(B.iridescenceThicknessMapUv),T.push(B.sheenColorMapUv),T.push(B.sheenRoughnessMapUv),T.push(B.specularMapUv),T.push(B.specularColorMapUv),T.push(B.specularIntensityMapUv),T.push(B.transmissionMapUv),T.push(B.thicknessMapUv),T.push(B.combine),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numSpotLightMaps),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.numSpotLightShadowsWithMaps),T.push(B.numLightProbes),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function D(T,B){d.disableAll(),B.instancing&&d.enable(0),B.instancingColor&&d.enable(1),B.instancingMorph&&d.enable(2),B.matcap&&d.enable(3),B.envMap&&d.enable(4),B.normalMapObjectSpace&&d.enable(5),B.normalMapTangentSpace&&d.enable(6),B.clearcoat&&d.enable(7),B.iridescence&&d.enable(8),B.alphaTest&&d.enable(9),B.vertexColors&&d.enable(10),B.vertexAlphas&&d.enable(11),B.vertexUv1s&&d.enable(12),B.vertexUv2s&&d.enable(13),B.vertexUv3s&&d.enable(14),B.vertexTangents&&d.enable(15),B.anisotropy&&d.enable(16),B.alphaHash&&d.enable(17),B.batching&&d.enable(18),B.dispersion&&d.enable(19),B.batchingColor&&d.enable(20),B.gradientMap&&d.enable(21),B.packedNormalMap&&d.enable(22),B.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),B.fog&&d.enable(0),B.useFog&&d.enable(1),B.flatShading&&d.enable(2),B.logarithmicDepthBuffer&&d.enable(3),B.reversedDepthBuffer&&d.enable(4),B.skinning&&d.enable(5),B.morphTargets&&d.enable(6),B.morphNormals&&d.enable(7),B.morphColors&&d.enable(8),B.premultipliedAlpha&&d.enable(9),B.shadowMapEnabled&&d.enable(10),B.doubleSided&&d.enable(11),B.flipSided&&d.enable(12),B.useDepthPacking&&d.enable(13),B.dithering&&d.enable(14),B.transmission&&d.enable(15),B.sheen&&d.enable(16),B.opaque&&d.enable(17),B.pointsUvs&&d.enable(18),B.decodeVideoTexture&&d.enable(19),B.decodeVideoTextureEmissive&&d.enable(20),B.alphaToCoverage&&d.enable(21),B.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function P(T){const B=y[T.type];let Z;if(B){const F=zi[B];Z=HM.clone(F.uniforms)}else Z=T.uniforms;return Z}function L(T,B){let Z=S.get(B);return Z!==void 0?++Z.usedTimes:(Z=new d1(o,B,T,l),h.push(Z),S.set(B,Z)),Z}function X(T){if(--T.usedTimes===0){const B=h.indexOf(T);h[B]=h[h.length-1],h.pop(),S.delete(T.cacheKey),T.destroy()}}function O(T){p.remove(T)}function z(){p.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:P,acquireProgram:L,releaseProgram:X,releaseShaderCache:O,programs:h,dispose:z}}function v1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function x1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function D_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function N_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,N,M,v){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:y,material:b,materialVariant:d(g),groupOrder:N,renderOrder:g.renderOrder,z:M,group:v},o[t]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=b,D.materialVariant=d(g),D.groupOrder=N,D.renderOrder=g.renderOrder,D.z=M,D.group=v),t++,D}function m(g,y,b,N,M,v){const D=p(g,y,b,N,M,v);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function h(g,y,b,N,M,v){const D=p(g,y,b,N,M,v);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function S(g,y){i.length>1&&i.sort(g||x1),s.length>1&&s.sort(y||D_),l.length>1&&l.sort(y||D_)}function x(){for(let g=t,y=o.length;g<y;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:x,sort:S}}function S1(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new N_,o.set(s,[d])):l>=u.length?(d=new N_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function M1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ie,color:new wt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return o[t.id]=i,i}}}function y1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let E1=0;function b1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function T1(o){const t=new M1,i=y1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ie);const l=new ie,u=new mn,d=new mn;function p(h){let S=0,x=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let y=0,b=0,N=0,M=0,v=0,D=0,P=0,L=0,X=0,O=0,z=0;h.sort(b1);for(let B=0,Z=h.length;B<Z;B++){const F=h[B],K=F.color,ue=F.intensity,pe=F.distance;let W=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Os?W=F.shadow.map.texture:W=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)S+=K.r*ue,x+=K.g*ue,g+=K.b*ue;else if(F.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(F.sh.coefficients[U],ue);z++}else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const H=F.shadow,re=i.get(F);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,s.directionalShadow[y]=re,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=F.shadow.matrix,D++}s.directional[y]=U,y++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(K).multiplyScalar(ue),U.distance=pe,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,s.spot[N]=U;const H=F.shadow;if(F.map&&(s.spotLightMap[X]=F.map,X++,H.updateMatrices(F),F.castShadow&&O++),s.spotLightMatrix[N]=H.matrix,F.castShadow){const re=i.get(F);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,s.spotShadow[N]=re,s.spotShadowMap[N]=W,L++}N++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(K).multiplyScalar(ue),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=U,M++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const H=F.shadow,re=i.get(F);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,re.shadowCameraNear=H.camera.near,re.shadowCameraFar=H.camera.far,s.pointShadow[b]=re,s.pointShadowMap[b]=W,s.pointShadowMatrix[b]=F.shadow.matrix,P++}s.point[b]=U,b++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(ue),U.groundColor.copy(F.groundColor).multiplyScalar(ue),s.hemi[v]=U,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==N||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==X||T.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=N,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+X-O,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,T.directionalLength=y,T.pointLength=b,T.spotLength=N,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=X,T.numLightProbes=z,s.version=E1++)}function m(h,S){let x=0,g=0,y=0,b=0,N=0;const M=S.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const P=h[v];if(P.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(P.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),b++}else if(P.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const L=s.hemi[N];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),N++}}}return{setup:p,setupView:m,state:s}}function U_(o){const t=new T1(o),i=[],s=[],l=[];function u(g){x.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){t.setup(i)}function S(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function A1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let p;return d===void 0?(p=new U_(o),t.set(l,[p])):u>=d.length?(p=new U_(o),d.push(p)):p=d[u],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
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
}`,w1=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],D1=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],L_=new mn,zo=new ie,Pd=new ie;function N1(o,t,i){let s=new iv;const l=new Vt,u=new Vt,d=new ln,p=new XM,m=new jM,h={},S=i.maxTextureSize,x={[as]:jn,[jn]:as,[ma]:ma},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:R1,fragmentShader:C1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new Si;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Xi(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let v=this.type;this.render=function(O,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===LS&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const B=o.getRenderTarget(),Z=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),K=o.state;K.setBlending(_a),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=v!==this.type;ue&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(W=>W.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,W=O.length;pe<W;pe++){const U=O[pe],H=U.shadow;if(H===void 0){tt("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const re=H.getFrameExtents();l.multiply(re),u.copy(H.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/re.x),l.x=u.x*re.x,H.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/re.y),l.y=u.y*re.y,H.mapSize.y=u.y));const ge=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fo){if(U.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Os,type:xa,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Lr(l.x,l.y,Fi),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=Sa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else U.isPointLight?(H.map=new dv(l.x),H.map.depthTexture=new zM(l.x,ki)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new Lr(l.x,l.y,ki)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=Sa,this.type===wc?(H.map.depthTexture.compareFunction=ge?Bh:Ih,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn);H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ye;I++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,I),o.clear();else{I===0&&(o.setRenderTarget(H.map),o.clear());const J=H.getViewport(I);d.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),K.viewport(d)}if(U.isPointLight){const J=H.camera,xe=H.matrix,Ae=U.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),zo.setFromMatrixPosition(U.matrixWorld),J.position.copy(zo),Pd.copy(J.position),Pd.add(w1[I]),J.up.copy(D1[I]),J.lookAt(Pd),J.updateMatrixWorld(),xe.makeTranslation(-zo.x,-zo.y,-zo.z),L_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(L_,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(U);s=H.getFrustum(),L(z,T,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===Fo&&D(H,T),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(B,Z,F)};function D(O,z){const T=t.update(N);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Vi(l.x,l.y,{format:Os,type:xa})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(z,null,T,g,N,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(z,null,T,y,N,null)}function P(O,z,T,B){let Z=null;const F=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)Z=F;else if(Z=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=Z.uuid,ue=z.uuid;let pe=h[K];pe===void 0&&(pe={},h[K]=pe);let W=pe[ue];W===void 0&&(W=Z.clone(),pe[ue]=W,z.addEventListener("dispose",X)),Z=W}if(Z.visible=z.visible,Z.wireframe=z.wireframe,B===Fo?Z.side=z.shadowSide!==null?z.shadowSide:z.side:Z.side=z.shadowSide!==null?z.shadowSide:x[z.side],Z.alphaMap=z.alphaMap,Z.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Z.map=z.map,Z.clipShadows=z.clipShadows,Z.clippingPlanes=z.clippingPlanes,Z.clipIntersection=z.clipIntersection,Z.displacementMap=z.displacementMap,Z.displacementScale=z.displacementScale,Z.displacementBias=z.displacementBias,Z.wireframeLinewidth=z.wireframeLinewidth,Z.linewidth=z.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const K=o.properties.get(Z);K.light=T}return Z}function L(O,z,T,B,Z){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Z===Fo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const ue=t.update(O),pe=O.material;if(Array.isArray(pe)){const W=ue.groups;for(let U=0,H=W.length;U<H;U++){const re=W[U],ge=pe[re.materialIndex];if(ge&&ge.visible){const ye=P(O,ge,B,Z);O.onBeforeShadow(o,O,z,T,ue,ye,re),o.renderBufferDirect(T,null,ue,ye,O,re),O.onAfterShadow(o,O,z,T,ue,ye,re)}}}else if(pe.visible){const W=P(O,pe,B,Z);O.onBeforeShadow(o,O,z,T,ue,W,null),o.renderBufferDirect(T,null,ue,W,O,null),O.onAfterShadow(o,O,z,T,ue,W,null)}}const K=O.children;for(let ue=0,pe=K.length;ue<pe;ue++)L(K[ue],z,T,B,Z)}function X(O){O.target.removeEventListener("dispose",X);for(const T in h){const B=h[T],Z=O.target.uuid;Z in B&&(B[Z].dispose(),delete B[Z])}}}function U1(o,t){function i(){let V=!1;const Te=new ln;let he=null;const ze=new ln(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!V&&(o.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,Me,We,et,en){en===!0&&(Ue*=et,Me*=et,We*=et),Te.set(Ue,Me,We,et),ze.equals(Te)===!1&&(o.clearColor(Ue,Me,We,et),ze.copy(Te))},reset:function(){V=!1,he=null,ze.set(-1,0,0,0)}}}function s(){let V=!1,Te=!1,he=null,ze=null,Ue=null;return{setReversed:function(Me){if(Te!==Me){const We=t.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=Me;const et=Ue;Ue=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(Me){Me?be(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Me){he!==Me&&!V&&(o.depthMask(Me),he=Me)},setFunc:function(Me){if(Te&&(Me=dM[Me]),ze!==Me){switch(Me){case zd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case Vd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Ue!==Me&&(Ue=Me,Te&&(Me=1-Me),o.clearDepth(Me))},reset:function(){V=!1,he=null,ze=null,Ue=null,Te=!1}}}function l(){let V=!1,Te=null,he=null,ze=null,Ue=null,Me=null,We=null,et=null,en=null;return{setTest:function(Rt){V||(Rt?be(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!V&&(o.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,si,qn){(he!==Rt||ze!==si||Ue!==qn)&&(o.stencilFunc(Rt,si,qn),he=Rt,ze=si,Ue=qn)},setOp:function(Rt,si,qn){(Me!==Rt||We!==si||et!==qn)&&(o.stencilOp(Rt,si,qn),Me=Rt,We=si,et=qn)},setLocked:function(Rt){V=Rt},setClear:function(Rt){en!==Rt&&(o.clearStencil(Rt),en=Rt)},reset:function(){V=!1,Te=null,he=null,ze=null,Ue=null,Me=null,We=null,et=null,en=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},g={},y=new WeakMap,b=[],N=null,M=!1,v=null,D=null,P=null,L=null,X=null,O=null,z=null,T=new wt(0,0,0),B=0,Z=!1,F=null,K=null,ue=null,pe=null,W=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const ge=o.getParameter(o.VERSION);ge.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=re>=1):ge.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=re>=2);let ye=null,I={};const J=o.getParameter(o.SCISSOR_BOX),xe=o.getParameter(o.VIEWPORT),Ae=new ln().fromArray(J),De=new ln().fromArray(xe);function oe(V,Te,he,ze){const Ue=new Uint8Array(4),Me=o.createTexture();o.bindTexture(V,Me),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<he;We++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Te,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(Te+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Me}const Se={};Se[o.TEXTURE_2D]=oe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),be(o.DEPTH_TEST),d.setFunc(Nr),an(!1),Wt(O0),be(o.CULL_FACE),Nt(_a);function be(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function He(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function $e(V,Te){return g[V]!==Te?(o.bindFramebuffer(V,Te),g[V]=Te,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Te),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Te),!0):!1}function Qe(V,Te){let he=b,ze=!1;if(V){he=y.get(Te),he===void 0&&(he=[],y.set(Te,he));const Ue=V.textures;if(he.length!==Ue.length||he[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,We=Ue.length;Me<We;Me++)he[Me]=o.COLOR_ATTACHMENT0+Me;he.length=Ue.length,ze=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ze=!0);ze&&o.drawBuffers(he)}function kt(V){return N!==V?(o.useProgram(V),N=V,!0):!1}const ft={[ws]:o.FUNC_ADD,[PS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};ft[BS]=o.MIN,ft[zS]=o.MAX;const _t={[FS]:o.ZERO,[HS]:o.ONE,[GS]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[jS]:o.DST_COLOR,[kS]:o.DST_ALPHA,[VS]:o.ONE_MINUS_SRC_COLOR,[Bd]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[XS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[ZS]:o.ONE_MINUS_CONSTANT_COLOR,[KS]:o.CONSTANT_ALPHA,[QS]:o.ONE_MINUS_CONSTANT_ALPHA};function Nt(V,Te,he,ze,Ue,Me,We,et,en,Rt){if(V===_a){M===!0&&(He(o.BLEND),M=!1);return}if(M===!1&&(be(o.BLEND),M=!0),V!==OS){if(V!==v||Rt!==Z){if((D!==ws||X!==ws)&&(o.blendEquation(o.FUNC_ADD),D=ws,X=ws),Rt)switch(V){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case P0:o.blendFunc(o.ONE,o.ONE);break;case I0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Et("WebGLState: Invalid blending: ",V);break}else switch(V){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case P0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case I0:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",V);break}P=null,L=null,O=null,z=null,T.set(0,0,0),B=0,v=V,Z=Rt}return}Ue=Ue||Te,Me=Me||he,We=We||ze,(Te!==D||Ue!==X)&&(o.blendEquationSeparate(ft[Te],ft[Ue]),D=Te,X=Ue),(he!==P||ze!==L||Me!==O||We!==z)&&(o.blendFuncSeparate(_t[he],_t[ze],_t[Me],_t[We]),P=he,L=ze,O=Me,z=We),(et.equals(T)===!1||en!==B)&&(o.blendColor(et.r,et.g,et.b,en),T.copy(et),B=en),v=V,Z=!1}function lt(V,Te){V.side===ma?He(o.CULL_FACE):be(o.CULL_FACE);let he=V.side===jn;Te&&(he=!he),an(he),V.blending===wr&&V.transparent===!1?Nt(_a):Nt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const ze=V.stencilWrite;p.setTest(ze),ze&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),j(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function an(V){F!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),F=V)}function Wt(V){V!==NS?(be(o.CULL_FACE),V!==K&&(V===O0?o.cullFace(o.BACK):V===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),K=V}function yn(V){V!==ue&&(H&&o.lineWidth(V),ue=V)}function j(V,Te,he){V?(be(o.POLYGON_OFFSET_FILL),(pe!==Te||W!==he)&&(pe=Te,W=he,d.getReversed()&&(Te=-Te),o.polygonOffset(Te,he))):He(o.POLYGON_OFFSET_FILL)}function $t(V){V?be(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function dt(V){V===void 0&&(V=o.TEXTURE0+U-1),ye!==V&&(o.activeTexture(V),ye=V)}function zt(V,Te,he){he===void 0&&(ye===null?he=o.TEXTURE0+U-1:he=ye);let ze=I[he];ze===void 0&&(ze={type:void 0,texture:void 0},I[he]=ze),(ze.type!==V||ze.texture!==Te)&&(ye!==he&&(o.activeTexture(he),ye=he),o.bindTexture(V,Te||Se[V]),ze.type=V,ze.texture=Te)}function Re(){const V=I[ye];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Zt(){try{o.compressedTexImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function w(){try{o.compressedTexImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function E(){try{o.texSubImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Q(){try{o.texSubImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function _e(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Ee(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function Ce(){try{o.texStorage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Le(){try{o.texStorage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function ce(){try{o.texImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function fe(){try{o.texImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function Oe(V){return x[V]!==void 0?x[V]:o.getParameter(V)}function Pe(V,Te){x[V]!==Te&&(o.pixelStorei(V,Te),x[V]=Te)}function Ne(V){Ae.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function we(V){De.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function nt(V,Te){let he=h.get(Te);he===void 0&&(he=new WeakMap,h.set(Te,he));let ze=he.get(V);ze===void 0&&(ze=o.getUniformBlockIndex(Te,V.name),he.set(V,ze))}function it(V,Te){const ze=h.get(Te).get(V);m.get(Te)!==ze&&(o.uniformBlockBinding(Te,ze,V.__bindingPointIndex),m.set(Te,ze))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},x={},ye=null,I={},g={},y=new WeakMap,b=[],N=null,M=!1,v=null,D=null,P=null,L=null,X=null,O=null,z=null,T=new wt(0,0,0),B=0,Z=!1,F=null,K=null,ue=null,pe=null,W=null,Ae.set(0,0,o.canvas.width,o.canvas.height),De.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:be,disable:He,bindFramebuffer:$e,drawBuffers:Qe,useProgram:kt,setBlending:Nt,setMaterial:lt,setFlipSided:an,setCullFace:Wt,setLineWidth:yn,setPolygonOffset:j,setScissorTest:$t,activeTexture:dt,bindTexture:zt,unbindTexture:Re,compressedTexImage2D:Zt,compressedTexImage3D:w,texImage2D:ce,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:Ne,viewport:we,reset:ht}}function L1(o,t,i,s,l,u,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,S=new WeakMap,x=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(w,E){return b?new OffscreenCanvas(w,E):Hc("canvas")}function M(w,E,Q){let _e=1;const Ee=Zt(w);if((Ee.width>Q||Ee.height>Q)&&(_e=Q/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Ce=Math.floor(_e*Ee.width),Le=Math.floor(_e*Ee.height);g===void 0&&(g=N(Ce,Le));const ce=E?N(Ce,Le):g;return ce.width=Ce,ce.height=Le,ce.getContext("2d").drawImage(w,0,0,Ce,Le),tt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ce+"x"+Le+")."),ce}else return"data"in w&&tt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),w;return w}function v(w){return w.generateMipmaps}function D(w){o.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(w,E,Q,_e,Ee,Ce=!1){if(w!==null){if(o[w]!==void 0)return o[w];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Le;_e&&(Le=t.get("EXT_texture_norm16"),Le||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===o.RED&&(Q===o.FLOAT&&(ce=o.R32F),Q===o.HALF_FLOAT&&(ce=o.R16F),Q===o.UNSIGNED_BYTE&&(ce=o.R8),Q===o.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),Q===o.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.R8UI),Q===o.UNSIGNED_SHORT&&(ce=o.R16UI),Q===o.UNSIGNED_INT&&(ce=o.R32UI),Q===o.BYTE&&(ce=o.R8I),Q===o.SHORT&&(ce=o.R16I),Q===o.INT&&(ce=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(ce=o.RG32F),Q===o.HALF_FLOAT&&(ce=o.RG16F),Q===o.UNSIGNED_BYTE&&(ce=o.RG8),Q===o.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),Q===o.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),Q===o.UNSIGNED_INT&&(ce=o.RG32UI),Q===o.BYTE&&(ce=o.RG8I),Q===o.SHORT&&(ce=o.RG16I),Q===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),Q===o.UNSIGNED_INT&&(ce=o.RGB32UI),Q===o.BYTE&&(ce=o.RGB8I),Q===o.SHORT&&(ce=o.RGB16I),Q===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),Q===o.BYTE&&(ce=o.RGBA8I),Q===o.SHORT&&(ce=o.RGBA16I),Q===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),Q===o.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),E===o.RGBA){const fe=Ce?zc:Mt.getTransfer(Ee);Q===o.FLOAT&&(ce=o.RGBA32F),Q===o.HALF_FLOAT&&(ce=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ce=fe===Bt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),Q===o.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function X(w,E){let Q;return w?E===null||E===ki||E===ko?Q=o.DEPTH24_STENCIL8:E===Fi?Q=o.DEPTH32F_STENCIL8:E===Vo&&(Q=o.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===ko?Q=o.DEPTH_COMPONENT24:E===Fi?Q=o.DEPTH_COMPONENT32F:E===Vo&&(Q=o.DEPTH_COMPONENT16),Q}function O(w,E){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function z(w){const E=w.target;E.removeEventListener("dispose",z),B(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&x.delete(E)}function T(w){const E=w.target;E.removeEventListener("dispose",T),F(E)}function B(w){const E=s.get(w);if(E.__webglInit===void 0)return;const Q=w.source,_e=y.get(Q);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Z(w),Object.keys(_e).length===0&&y.delete(Q)}s.remove(w)}function Z(w){const E=s.get(w);o.deleteTexture(E.__webglTexture);const Q=w.source,_e=y.get(Q);delete _e[E.__cacheKey],d.memory.textures--}function F(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)o.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else o.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)o.deleteFramebuffer(E.__webglFramebuffer[_e]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=w.textures;for(let _e=0,Ee=Q.length;_e<Ee;_e++){const Ce=s.get(Q[_e]);Ce.__webglTexture&&(o.deleteTexture(Ce.__webglTexture),d.memory.textures--),s.remove(Q[_e])}s.remove(w)}let K=0;function ue(){K=0}function pe(){return K}function W(w){K=w}function U(){const w=K;return w>=l.maxTextures&&tt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),K+=1,w}function H(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function re(w,E){const Q=s.get(w);if(w.isVideoTexture&&zt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Q.__version!==w.version){const _e=w.image;if(_e===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,w,E);return}}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function ge(w,E){const Q=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){He(Q,w,E);return}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function ye(w,E){const Q=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){He(Q,w,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function I(w,E){const Q=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Q.__version!==w.version){$e(Q,w,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const J={[jd]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[Wd]:o.MIRRORED_REPEAT},xe={[Cn]:o.NEAREST,[eM]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},Ae={[iM]:o.NEVER,[lM]:o.ALWAYS,[aM]:o.LESS,[Ih]:o.LEQUAL,[sM]:o.EQUAL,[Bh]:o.GEQUAL,[rM]:o.GREATER,[oM]:o.NOTEQUAL};function De(w,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===sd||E.magFilter===sc||E.magFilter===Ns||E.minFilter===On||E.minFilter===sd||E.minFilter===sc||E.minFilter===Ns)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,J[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,J[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,J[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,xe[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==sc&&E.minFilter!==Ns||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function oe(w,E){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",z));const _e=E.source;let Ee=y.get(_e);Ee===void 0&&(Ee={},y.set(_e,Ee));const Ce=H(E);if(Ce!==w.__cacheKey){Ee[Ce]===void 0&&(Ee[Ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Ee[Ce].usedTimes++;const Le=Ee[w.__cacheKey];Le!==void 0&&(Ee[w.__cacheKey].usedTimes--,Le.usedTimes===0&&Z(E)),w.__cacheKey=Ce,w.__webglTexture=Ee[Ce].texture}return Q}function Se(w,E,Q){return Math.floor(Math.floor(w/Q)/E)}function be(w,E,Q,_e){const Ce=w.updateRanges;if(Ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,_e,E.data);else{Ce.sort((Pe,Ne)=>Pe.start-Ne.start);let Le=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ne=Ce[Le],we=Ce[Pe],nt=Ne.start+Ne.count,it=Se(we.start,E.width,4),ht=Se(Ne.start,E.width,4);we.start<=nt+1&&it===ht&&Se(we.start+we.count-1,E.width,4)===it?Ne.count=Math.max(Ne.count,we.start+we.count-Ne.start):(++Le,Ce[Le]=we)}Ce.length=Le+1;const ce=i.getParameter(o.UNPACK_ROW_LENGTH),fe=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ne=Ce.length;Pe<Ne;Pe++){const we=Ce[Pe],nt=Math.floor(we.start/4),it=Math.ceil(we.count/4),ht=nt%E.width,V=Math.floor(nt/E.width),Te=it,he=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ht,V,Te,he,Q,_e,E.data)}w.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ce),i.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function He(w,E,Q){let _e=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=o.TEXTURE_3D);const Ee=oe(w,E),Ce=E.source;i.bindTexture(_e,w.__webglTexture,o.TEXTURE0+Q);const Le=s.get(Ce);if(Ce.version!==Le.__version||Ee===!0){if(i.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=Mt.getPrimaries(Mt.workingColorSpace),ze=E.colorSpace===ns?null:Mt.getPrimaries(E.colorSpace),Ue=E.colorSpace===ns||he===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=M(E.image,!1,l.maxTextureSize);fe=Re(E,fe);const Oe=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type);let Ne=L(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);De(_e,E);let we;const nt=E.mipmaps,it=E.isVideoTexture!==!0,ht=Le.__version===void 0||Ee===!0,V=Ce.dataReady,Te=O(E,fe);if(E.isDepthTexture)Ne=X(E.format===Us,E.type),ht&&(it?i.texStorage2D(o.TEXTURE_2D,1,Ne,fe.width,fe.height):i.texImage2D(o.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,null));else if(E.isDataTexture)if(nt.length>0){it&&ht&&i.texStorage2D(o.TEXTURE_2D,Te,Ne,nt[0].width,nt[0].height);for(let he=0,ze=nt.length;he<ze;he++)we=nt[he],it?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(o.TEXTURE_2D,he,Ne,we.width,we.height,0,Oe,Pe,we.data);E.generateMipmaps=!1}else it?(ht&&i.texStorage2D(o.TEXTURE_2D,Te,Ne,fe.width,fe.height),V&&be(E,fe,Oe,Pe)):i.texImage2D(o.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Ne,nt[0].width,nt[0].height,fe.depth);for(let he=0,ze=nt.length;he<ze;he++)if(we=nt[he],E.format!==Di)if(Oe!==null)if(it){if(V)if(E.layerUpdates.size>0){const Ue=u_(we.width,we.height,E.format,E.type);for(const Me of E.layerUpdates){const We=we.data.subarray(Me*Ue/we.data.BYTES_PER_ELEMENT,(Me+1)*Ue/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,Me,we.width,we.height,1,Oe,We)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,fe.depth,Oe,we.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,fe.depth,0,we.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,fe.depth,Oe,Pe,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,fe.depth,0,Oe,Pe,we.data)}else{it&&ht&&i.texStorage2D(o.TEXTURE_2D,Te,Ne,nt[0].width,nt[0].height);for(let he=0,ze=nt.length;he<ze;he++)we=nt[he],E.format!==Di?Oe!==null?it?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,we.data):i.compressedTexImage2D(o.TEXTURE_2D,he,Ne,we.width,we.height,0,we.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,we.width,we.height,Oe,Pe,we.data):i.texImage2D(o.TEXTURE_2D,he,Ne,we.width,we.height,0,Oe,Pe,we.data)}else if(E.isDataArrayTexture)if(it){if(ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Ne,fe.width,fe.height,fe.depth),V)if(E.layerUpdates.size>0){const he=u_(fe.width,fe.height,E.format,E.type);for(const ze of E.layerUpdates){const Ue=fe.data.subarray(ze*he/fe.data.BYTES_PER_ELEMENT,(ze+1)*he/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ze,fe.width,fe.height,1,Oe,Pe,Ue)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isData3DTexture)it?(ht&&i.texStorage3D(o.TEXTURE_3D,Te,Ne,fe.width,fe.height,fe.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):i.texImage3D(o.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(E.isFramebufferTexture){if(ht)if(it)i.texStorage2D(o.TEXTURE_2D,Te,Ne,fe.width,fe.height);else{let he=fe.width,ze=fe.height;for(let Ue=0;Ue<Te;Ue++)i.texImage2D(o.TEXTURE_2D,Ue,Ne,he,ze,0,Oe,Pe,null),he>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const he=o.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),x.add(E),he.onpaint=et=>{const en=et.changedElements;for(const Rt of x)en.includes(Rt.image)&&(Rt.needsUpdate=!0)},he.requestPaint();return}const ze=0,Ue=o.RGBA,Me=o.RGBA,We=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,ze,Ue,Me,We,fe),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ht){const he=Zt(nt[0]);i.texStorage2D(o.TEXTURE_2D,Te,Ne,he.width,he.height)}for(let he=0,ze=nt.length;he<ze;he++)we=nt[he],it?V&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Oe,Pe,we):i.texImage2D(o.TEXTURE_2D,he,Ne,Oe,Pe,we);E.generateMipmaps=!1}else if(it){if(ht){const he=Zt(fe);i.texStorage2D(o.TEXTURE_2D,Te,Ne,he.width,he.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else i.texImage2D(o.TEXTURE_2D,0,Ne,Oe,Pe,fe);v(E)&&D(_e),Le.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,Q){if(E.image.length!==6)return;const _e=oe(w,E),Ee=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+Q);const Ce=s.get(Ee);if(Ee.version!==Ce.__version||_e===!0){i.activeTexture(o.TEXTURE0+Q);const Le=Mt.getPrimaries(Mt.workingColorSpace),ce=E.colorSpace===ns?null:Mt.getPrimaries(E.colorSpace),fe=E.colorSpace===ns||Le===ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ne[Me]=M(E.image[Me],!0,l.maxCubemapSize):Ne[Me]=Pe?E.image[Me].image:E.image[Me],Ne[Me]=Re(E,Ne[Me]);const we=Ne[0],nt=u.convert(E.format,E.colorSpace),it=u.convert(E.type),ht=L(E.internalFormat,nt,it,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Te=Ce.__version===void 0||_e===!0,he=Ee.dataReady;let ze=O(E,we);De(o.TEXTURE_CUBE_MAP,E);let Ue;if(Oe){V&&Te&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ht,we.width,we.height);for(let Me=0;Me<6;Me++){Ue=Ne[Me].mipmaps;for(let We=0;We<Ue.length;We++){const et=Ue[We];E.format!==Di?nt!==null?V?he&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,et.width,et.height,nt,et.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,ht,et.width,et.height,0,et.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,et.width,et.height,nt,it,et.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,ht,et.width,et.height,0,nt,it,et.data)}}}else{if(Ue=E.mipmaps,V&&Te){Ue.length>0&&ze++;const Me=Zt(Ne[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ht,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){V?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,nt,it,Ne[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,Ne[Me].width,Ne[Me].height,0,nt,it,Ne[Me].data);for(let We=0;We<Ue.length;We++){const en=Ue[We].image[Me].image;V?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,en.width,en.height,nt,it,en.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,ht,en.width,en.height,0,nt,it,en.data)}}else{V?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,nt,it,Ne[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,nt,it,Ne[Me]);for(let We=0;We<Ue.length;We++){const et=Ue[We];V?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,nt,it,et.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,ht,nt,it,et.image[Me])}}}v(E)&&D(o.TEXTURE_CUBE_MAP),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Qe(w,E,Q,_e,Ee,Ce){const Le=u.convert(Q.format,Q.colorSpace),ce=u.convert(Q.type),fe=L(Q.internalFormat,Le,ce,Q.normalized,Q.colorSpace),Oe=s.get(E),Pe=s.get(Q);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const Ne=Math.max(1,E.width>>Ce),we=Math.max(1,E.height>>Ce);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,Ce,fe,Ne,we,E.depth,0,Le,ce,null):i.texImage2D(Ee,Ce,fe,Ne,we,0,Le,ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),dt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,0,$t(E)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,Ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(w,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Ce=X(E.stencilBuffer,Ee),Le=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;dt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$t(E),Ce,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,$t(E),Ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,w)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const Ce=_e[Ee],Le=u.convert(Ce.format,Ce.colorSpace),ce=u.convert(Ce.type),fe=L(Ce.internalFormat,Le,ce,Ce.normalized,Ce.colorSpace);dt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$t(E),fe,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,$t(E),fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,fe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ft(w,E,Q){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Ee.__webglTexture===void 0){Ee.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),De(o.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=u.convert(E.depthTexture.format),Pe=u.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Sa?Ne=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(Ne=o.DEPTH24_STENCIL8);for(let we=0;we<6;we++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ne,E.width,E.height,0,Oe,Pe,null)}}else re(E.depthTexture,0);const Ce=Ee.__webglTexture,Le=$t(E),ce=_e?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,fe=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)dt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ce,Ce,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ce,Ce,0);else if(E.depthTexture.format===Us)dt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ce,Ce,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ce,Ce,0);else throw new Error("Unknown depthTexture format")}function _t(w){const E=s.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const _e=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let _e=0;_e<6;_e++)ft(E.__webglFramebuffer[_e],w,_e);else{const _e=w.texture.mipmaps;_e&&_e.length>0?ft(E.__webglFramebuffer[0],w,0):ft(E.__webglFramebuffer,w,0)}else if(Q){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[_e],w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,Ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,Ce)}}else{const _e=w.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,Ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(w,E,Q){const _e=s.get(w);E!==void 0&&Qe(_e.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&_t(w)}function lt(w){const E=w.texture,Q=s.get(w),_e=s.get(E);w.addEventListener("dispose",T);const Ee=w.textures,Ce=w.isWebGLCubeRenderTarget===!0,Le=Ee.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=E.version,d.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Q.__webglFramebuffer[ce][fe]=o.createFramebuffer()}else Q.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Le)for(let ce=0,fe=Ee.length;ce<fe;ce++){const Oe=s.get(Ee[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&dt(w)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<Ee.length;ce++){const fe=Ee[ce];Q.__webglColorRenderbuffer[ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);const Oe=u.convert(fe.format,fe.colorSpace),Pe=u.convert(fe.type),Ne=L(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,w.isXRRenderTarget===!0),we=$t(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,we,Ne,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(Q.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),De(o.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(Q.__webglFramebuffer[ce][fe],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Qe(Q.__webglFramebuffer[ce],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,fe=Ee.length;ce<fe;ce++){const Oe=Ee[ce],Pe=s.get(Oe);let Ne=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ne=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Pe.__webglTexture),De(Ne,Oe),Qe(Q.__webglFramebuffer,w,Oe,o.COLOR_ATTACHMENT0+ce,Ne,0),v(Oe)&&D(Ne)}i.unbindTexture()}else{let ce=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ce,_e.__webglTexture),De(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(Q.__webglFramebuffer[fe],w,E,o.COLOR_ATTACHMENT0,ce,fe);else Qe(Q.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,ce,0);v(E)&&D(ce),i.unbindTexture()}w.depthBuffer&&_t(w)}function an(w){const E=w.textures;for(let Q=0,_e=E.length;Q<_e;Q++){const Ee=E[Q];if(v(Ee)){const Ce=P(w),Le=s.get(Ee).__webglTexture;i.bindTexture(Ce,Le),D(Ce),i.unbindTexture()}}}const Wt=[],yn=[];function j(w){if(w.samples>0){if(dt(w)===!1){const E=w.textures,Q=w.width,_e=w.height;let Ee=o.COLOR_BUFFER_BIT;const Ce=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=s.get(w),ce=E.length>1;if(ce)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=w.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pe,0)}o.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,Ee,o.NEAREST),m===!0&&(Wt.length=0,yn.length=0,Wt.push(o.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Wt.push(Ce),yn.push(Ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,yn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,Pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function $t(w){return Math.min(l.maxSamples,w.samples)}function dt(w){const E=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(w){const E=d.render.frame;S.get(w)!==E&&(S.set(w,E),w.update())}function Re(w,E){const Q=w.colorSpace,_e=w.format,Ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==Bc&&Q!==ns&&(Mt.getTransfer(Q)===Bt?(_e!==Di||Ee!==_i)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),E}function Zt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=ue,this.getTextureUnits=pe,this.setTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=ge,this.setTexture3D=ye,this.setTextureCube=I,this.rebindTextures=Nt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function O1(o,t){function i(s,l=ns){let u;const d=Mt.getTransfer(l);if(s===_i)return o.UNSIGNED_BYTE;if(s===Nh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Uh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===j_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===W_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===k_)return o.BYTE;if(s===X_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Dh)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===xa)return o.HALF_FLOAT;if(s===q_)return o.ALPHA;if(s===Y_)return o.RGB;if(s===Di)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===Z_)return o.RED;if(s===Lh)return o.RED_INTEGER;if(s===Os)return o.RG;if(s===Oh)return o.RG_INTEGER;if(s===Ph)return o.RGBA_INTEGER;if(s===Dc||s===Nc||s===Uc||s===Lc)if(d===Bt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Yd||s===Zd||s===Kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===$d||s===eh||s===th||s===Pc||s===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Qd||s===Jd)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===$d)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===eh)return u.COMPRESSED_R11_EAC;if(s===th)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Pc)return u.COMPRESSED_RG11_EAC;if(s===nh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ih)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ah)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_h||s===vh||s===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===_h)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===Mh||s===Ic||s===yh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ic)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
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

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:P1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends Is{constructor(t,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,g=null,y=null,b=null;const N=typeof XRWebGLBinding<"u",M=new B1,v={},D=i.getContextAttributes();let P=null,L=null;const X=[],O=[],z=new Vt;let T=null;const B=new gi;B.viewport=new ln;const Z=new gi;Z.viewport=new ln;const F=[B,Z],K=new qM;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Se=X[oe];return Se===void 0&&(Se=new hd,X[oe]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(oe){let Se=X[oe];return Se===void 0&&(Se=new hd,X[oe]=Se),Se.getGripSpace()},this.getHand=function(oe){let Se=X[oe];return Se===void 0&&(Se=new hd,X[oe]=Se),Se.getHandSpace()};function W(oe){const Se=O.indexOf(oe.inputSource);if(Se===-1)return;const be=X[Se];be!==void 0&&(be.update(oe.inputSource,oe.frame,h||d),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function U(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",H);for(let oe=0;oe<X.length;oe++){const Se=O[oe];Se!==null&&(O[oe]=null,X[oe].disconnect(Se))}ue=null,pe=null,M.reset();for(const oe in v)delete v[oe];t.setRenderTarget(P),y=null,g=null,x=null,l=null,L=null,De.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){u=oe,s.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){p=oe,s.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",U),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,$e=null;D.depth&&($e=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=D.stencil?Us:Sa,He=D.stencil?ko:ki);const Qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Vi(g.textureWidth,g.textureHeight,{format:Di,type:_i,depthTexture:new Lr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Di,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(oe){for(let Se=0;Se<oe.removed.length;Se++){const be=oe.removed[Se],He=O.indexOf(be);He>=0&&(O[He]=null,X[He].disconnect(be))}for(let Se=0;Se<oe.added.length;Se++){const be=oe.added[Se];let He=O.indexOf(be);if(He===-1){for(let Qe=0;Qe<X.length;Qe++)if(Qe>=O.length){O.push(be),He=Qe;break}else if(O[Qe]===null){O[Qe]=be,He=Qe;break}if(He===-1)break}const $e=X[He];$e&&$e.connect(be)}}const re=new ie,ge=new ie;function ye(oe,Se,be){re.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(be.matrixWorld);const He=re.distanceTo(ge),$e=Se.projectionMatrix.elements,Qe=be.projectionMatrix.elements,kt=$e[14]/($e[10]-1),ft=$e[14]/($e[10]+1),_t=($e[9]+1)/$e[5],Nt=($e[9]-1)/$e[5],lt=($e[8]-1)/$e[0],an=(Qe[8]+1)/Qe[0],Wt=kt*lt,yn=kt*an,j=He/(-lt+an),$t=j*-lt;if(Se.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX($t),oe.translateZ(j),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(Se.projectionMatrix),oe.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const dt=kt+j,zt=ft+j,Re=Wt-$t,Zt=yn+(He-$t),w=_t*ft/zt*dt,E=Nt*ft/zt*dt;oe.projectionMatrix.makePerspective(Re,Zt,w,E,dt,zt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function I(oe,Se){Se===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Se.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let Se=oe.near,be=oe.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(be=M.depthFar)),K.near=Z.near=B.near=Se,K.far=Z.far=B.far=be,(ue!==K.near||pe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,pe=K.far),K.layers.mask=oe.layers.mask|6,B.layers.mask=K.layers.mask&-5,Z.layers.mask=K.layers.mask&-3;const He=oe.parent,$e=K.cameras;I(K,He);for(let Qe=0;Qe<$e.length;Qe++)I($e[Qe],He);$e.length===2?ye(K,B,Z):K.projectionMatrix.copy(B.projectionMatrix),J(oe,K,He)};function J(oe,Se,be){be===null?oe.matrix.copy(Se.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Se.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Se.projectionMatrix),oe.projectionMatrixInverse.copy(Se.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=bh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(oe){return v[oe]};let xe=null;function Ae(oe,Se){if(S=Se.getViewerPose(h||d),b=Se,S!==null){const be=S.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let He=!1;be.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let ft=0;ft<be.length;ft++){const _t=be[ft];let Nt=null;if(y!==null)Nt=y.getViewport(_t);else{const an=x.getViewSubImage(g,_t);Nt=an.viewport,ft===0&&(t.setRenderTargetTextures(L,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(L))}let lt=F[ft];lt===void 0&&(lt=new gi,lt.layers.enable(ft),lt.viewport=new ln,F[ft]=lt),lt.matrix.fromArray(_t.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(_t.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ft===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(lt)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){x=s.getBinding();const ft=x.getDepthInformation(be[0]);ft&&ft.isValid&&ft.texture&&M.init(ft,l.renderState)}if($e&&$e.includes("camera-access")&&N){t.state.unbindTexture(),x=s.getBinding();for(let ft=0;ft<be.length;ft++){const _t=be[ft].camera;if(_t){let Nt=v[_t];Nt||(Nt=new rv,v[_t]=Nt);const lt=x.getCameraImage(_t);Nt.sourceTexture=lt}}}}for(let be=0;be<X.length;be++){const He=O[be],$e=X[be];He!==null&&$e!==void 0&&$e.update(He,Se,h||d)}xe&&xe(oe,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),b=null}const De=new uv;De.setAnimationLoop(Ae),this.setAnimationLoop=function(oe){xe=oe},this.dispose=function(){}}}const F1=new mn,_v=new st;_v.set(-1,0,0,0,1,0,0,0,1);function H1(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,ov(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,D,P,L){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),S(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),g(M,v),v.isMeshPhysicalMaterial&&y(M,v,L)):v.isMeshMatcapMaterial?(u(M,v),b(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),N(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,D,P):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===jn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===jn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const D=t.get(v),P=D.envMap,L=D.envMapRotation;P&&(M.envMap.value=P,M.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(_v),M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,D,P){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*D,M.scale.value=P*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,D){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function N(M,v){const D=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function G1(o,t,i,s){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const L=P.program;s.uniformBlockBinding(D,L)}function h(D,P){let L=l[D.id];L===void 0&&(b(D),L=S(D),l[D.id]=L,D.addEventListener("dispose",M));const X=P.program;s.updateUBOMapping(D,X);const O=t.render.frame;u[D.id]!==O&&(g(D),u[D.id]=O)}function S(D){const P=x();D.__bindingPointIndex=P;const L=o.createBuffer(),X=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,X,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function x(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=l[D.id],L=D.uniforms,X=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,z=L.length;O<z;O++){const T=Array.isArray(L[O])?L[O]:[L[O]];for(let B=0,Z=T.length;B<Z;B++){const F=T[B];if(y(F,O,B,X)===!0){const K=F.__offset,ue=Array.isArray(F.value)?F.value:[F.value];let pe=0;for(let W=0;W<ue.length;W++){const U=ue[W],H=N(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,K+pe,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):ArrayBuffer.isView(U)?F.__data.set(new U.constructor(U.buffer,U.byteOffset,F.__data.length)):(U.toArray(F.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,P,L,X){const O=D.value,z=P+"_"+L;if(X[z]===void 0)return typeof O=="number"||typeof O=="boolean"?X[z]=O:ArrayBuffer.isView(O)?X[z]=O.slice():X[z]=O.clone(),!0;{const T=X[z];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return X[z]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(T.equals(O)===!1)return T.copy(O),!0}}return!1}function b(D){const P=D.uniforms;let L=0;const X=16;for(let z=0,T=P.length;z<T;z++){const B=Array.isArray(P[z])?P[z]:[P[z]];for(let Z=0,F=B.length;Z<F;Z++){const K=B[Z],ue=Array.isArray(K.value)?K.value:[K.value];for(let pe=0,W=ue.length;pe<W;pe++){const U=ue[pe],H=N(U),re=L%X,ge=re%H.boundary,ye=re+ge;L+=ge,ye!==0&&X-ye<H.storage&&(L+=X-ye),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=H.storage}}}const O=L%X;return O>0&&(L+=X-O),D.__size=L,D.__cache={},this}function N(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:h,dispose:v}}const V1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function k1(){return Bi===null&&(Bi=new LM(V1,16,16,Os,xa),Bi.name="DFG_LUT",Bi.minFilter=On,Bi.magFilter=On,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class X1{constructor(t={}){const{canvas:i=uM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=_i}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const N=y,M=new Set([Ph,Oh,Lh]),v=new Set([_i,ki,Vo,ko,Nh,Uh]),D=new Uint32Array(4),P=new Int32Array(4),L=new ie;let X=null,O=null;const z=[],T=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let F=!1,K=null;this._outputColorSpace=mi;let ue=0,pe=0,W=null,U=-1,H=null;const re=new ln,ge=new ln;let ye=null;const I=new wt(0);let J=0,xe=i.width,Ae=i.height,De=1,oe=null,Se=null;const be=new ln(0,0,xe,Ae),He=new ln(0,0,xe,Ae);let $e=!1;const Qe=new iv;let kt=!1,ft=!1;const _t=new mn,Nt=new ie,lt=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function yn(){return W===null?De:1}let j=s;function $t(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",et,!1),j===null){const q="webgl2";if(j=$t(q,A),j===null)throw $t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let dt,zt,Re,Zt,w,E,Q,_e,Ee,Ce,Le,ce,fe,Oe,Pe,Ne,we,nt,it,ht,V,Te,he;function ze(){dt=new kb(j),dt.init(),V=new O1(j,dt),zt=new Pb(j,dt,t,V),Re=new U1(j,dt),zt.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),Zt=new Wb(j),w=new v1,E=new L1(j,dt,Re,w,zt,V,Zt),Q=new Vb(Z),_e=new KM(j),Te=new Lb(j,_e),Ee=new Xb(j,_e,Zt,Te),Ce=new Yb(j,Ee,_e,Te,Zt),nt=new qb(j,zt,E),Pe=new Ib(w),Le=new _1(Z,Q,dt,zt,Te,Pe),ce=new H1(Z,w),fe=new S1,Oe=new A1(dt),we=new Ub(Z,Q,Re,Ce,b,m),Ne=new N1(Z,Ce,zt),he=new G1(j,Zt,zt,Re),it=new Ob(j,dt,Zt),ht=new jb(j,dt,Zt),Zt.programs=Le.programs,Z.capabilities=zt,Z.extensions=dt,Z.properties=w,Z.renderLists=fe,Z.shadowMap=Ne,Z.state=Re,Z.info=Zt}ze(),N!==_i&&(B=new Kb(N,i.width,i.height,l,u));const Ue=new z1(Z,j);this.xr=Ue,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(xe,Ae,!1))},this.getSize=function(A){return A.set(xe,Ae)},this.setSize=function(A,q,ae=!0){if(Ue.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Ae=q,i.width=Math.floor(A*De),i.height=Math.floor(q*De),ae===!0&&(i.style.width=A+"px",i.style.height=q+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(xe*De,Ae*De).floor()},this.setDrawingBufferSize=function(A,q,ae){xe=A,Ae=q,De=ae,i.width=Math.floor(A*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(N===_i){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(re)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,q,ae,te){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,q,ae,te),Re.viewport(re.copy(be).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,q,ae,te){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,q,ae,te),Re.scissor(ge.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Re.setScissorTest($e=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ae=!0){let te=0;if(A){let ne=!1;if(W!==null){const Be=W.texture.format;ne=M.has(Be)}if(ne){const Be=W.texture.type,Ve=v.has(Be),Ie=we.getClearColor(),Xe=we.getClearAlpha(),ke=Ie.r,Ze=Ie.g,rt=Ie.b;Ve?(D[0]=ke,D[1]=Ze,D[2]=rt,D[3]=Xe,j.clearBufferuiv(j.COLOR,0,D)):(P[0]=ke,P[1]=Ze,P[2]=rt,P[3]=Xe,j.clearBufferiv(j.COLOR,0,P))}else te|=j.COLOR_BUFFER_BIT}q&&(te|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",et,!1),we.dispose(),fe.dispose(),Oe.dispose(),w.dispose(),Q.dispose(),Ce.dispose(),Te.dispose(),he.dispose(),Le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",zr),Ue.removeEventListener("sessionend",Fr),wn.stop()};function Me(A){A.preventDefault(),k0("WebGLRenderer: Context Lost."),F=!0}function We(){k0("WebGLRenderer: Context Restored."),F=!1;const A=Zt.autoReset,q=Ne.enabled,ae=Ne.autoUpdate,te=Ne.needsUpdate,ne=Ne.type;ze(),Zt.autoReset=A,Ne.enabled=q,Ne.autoUpdate=ae,Ne.needsUpdate=te,Ne.type=ne}function et(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function en(A){const q=A.target;q.removeEventListener("dispose",en),Rt(q)}function Rt(A){si(A),w.remove(A)}function si(A){const q=w.get(A).programs;q!==void 0&&(q.forEach(function(ae){Le.releaseProgram(ae)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ae,te,ne,Be){q===null&&(q=an);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,Ie=Ea(A,q,ae,te,ne);Re.setMaterial(te,Ve);let Xe=ae.index,ke=1;if(te.wireframe===!0){if(Xe=Ee.getWireframeAttribute(ae),Xe===void 0)return;ke=2}const Ze=ae.drawRange,rt=ae.attributes.position;let Ye=Ze.start*ke,bt=(Ze.start+Ze.count)*ke;Be!==null&&(Ye=Math.max(Ye,Be.start*ke),bt=Math.min(bt,(Be.start+Be.count)*ke)),Xe!==null?(Ye=Math.max(Ye,0),bt=Math.min(bt,Xe.count)):rt!=null&&(Ye=Math.max(Ye,0),bt=Math.min(bt,rt.count));const Kt=bt-Ye;if(Kt<0||Kt===1/0)return;Te.setup(ne,te,Ie,ae,Xe);let Xt,Ut=it;if(Xe!==null&&(Xt=_e.get(Xe),Ut=ht,Ut.setIndex(Xt)),ne.isMesh)te.wireframe===!0?(Re.setLineWidth(te.wireframeLinewidth*yn()),Ut.setMode(j.LINES)):Ut.setMode(j.TRIANGLES);else if(ne.isLine){let Lt=te.linewidth;Lt===void 0&&(Lt=1),Re.setLineWidth(Lt*yn()),ne.isLineSegments?Ut.setMode(j.LINES):ne.isLineLoop?Ut.setMode(j.LINE_LOOP):Ut.setMode(j.LINE_STRIP)}else ne.isPoints?Ut.setMode(j.POINTS):ne.isSprite&&Ut.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Lt=ne._multiDrawStarts,Ge=ne._multiDrawCounts,Dn=ne._multiDrawCount,pt=Xe?_e.get(Xe).bytesPerElement:1,gn=w.get(te).currentProgram.getUniforms();for(let Yn=0;Yn<Dn;Yn++)gn.setValue(j,"_gl_DrawID",Yn),Ut.render(Lt[Yn]/pt,Ge[Yn])}else if(ne.isInstancedMesh)Ut.renderInstances(Ye,Kt,ne.count);else if(ae.isInstancedBufferGeometry){const Lt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,Lt);Ut.renderInstances(Ye,Kt,Ge)}else Ut.render(Ye,Kt)};function qn(A,q,ae){A.transparent===!0&&A.side===ma&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Bs(A,q,ae),A.side=as,A.needsUpdate=!0,Bs(A,q,ae),A.side=ma):Bs(A,q,ae)}this.compile=function(A,q,ae=null){ae===null&&(ae=A),O=Oe.get(ae),O.init(q),T.push(O),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),A!==ae&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),O.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Be=ne.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const Ie=Be[Ve];qn(Ie,ae,ne),te.add(Ie)}else qn(Be,ae,ne),te.add(Be)}),O=T.pop(),te},this.compileAsync=function(A,q,ae=null){const te=this.compile(A,q,ae);return new Promise(ne=>{function Be(){if(te.forEach(function(Ve){w.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){ne(A);return}setTimeout(Be,10)}dt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ss=null;function Br(A){ss&&ss(A)}function zr(){wn.stop()}function Fr(){wn.start()}const wn=new uv;wn.setAnimationLoop(Br),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(A){ss=A,Ue.setAnimationLoop(A),A===null?wn.stop():wn.start()},Ue.addEventListener("sessionstart",zr),Ue.addEventListener("sessionend",Fr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;K!==null&&K.renderStart(A,q);const ae=Ue.enabled===!0&&Ue.isPresenting===!0,te=B!==null&&(W===null||ae)&&B.begin(Z,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(q),q=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,q,W),O=Oe.get(A,T.length),O.init(q),O.state.textureUnits=E.getTextureUnits(),T.push(O),_t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,Hi,q.reversedDepth),ft=this.localClippingEnabled,kt=Pe.init(this.clippingPlanes,ft),X=fe.get(A,z.length),X.init(),z.push(X),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=Z.xr.getDepthSensingMesh();Ve!==null&&sn(Ve,q,-1/0,Z.sortObjects)}sn(A,q,0,Z.sortObjects),X.finish(),Z.sortObjects===!0&&X.sort(oe,Se),Wt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Wt&&we.addToRenderList(X,A),this.info.render.frame++,kt===!0&&Pe.beginShadows();const ne=O.state.shadowsArray;if(Ne.render(ne,A,q),kt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&B.hasRenderPass())===!1){const Ve=X.opaque,Ie=X.transmissive;if(O.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ie.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke];Wi(Ve,Ie,A,rt)}Wt&&we.render(A);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke];En(X,A,rt,rt.viewport)}}else Ie.length>0&&Wi(Ve,Ie,A,q),Wt&&we.render(A),En(X,A,q)}W!==null&&pe===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),te&&B.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,q),Te.resetDefaultState(),U=-1,H=null,T.pop(),T.length>0?(O=T[T.length-1],E.setTextureUnits(O.state.textureUnits),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?X=z[z.length-1]:X=null,K!==null&&K.renderEnd()};function sn(A,q,ae,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){te&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Ve=Ce.update(A),Ie=A.material;Ie.visible&&X.push(A,Ve,Ie,ae,lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Ve=Ce.update(A),Ie=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),lt.copy(Ve.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Ie)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const rt=Xe[ke],Ye=Ie[rt.materialIndex];Ye&&Ye.visible&&X.push(A,Ve,Ye,ae,lt.z,rt)}}else Ie.visible&&X.push(A,Ve,Ie,ae,lt.z,null)}}const Be=A.children;for(let Ve=0,Ie=Be.length;Ve<Ie;Ve++)sn(Be[Ve],q,ae,te)}function En(A,q,ae,te){const{opaque:ne,transmissive:Be,transparent:Ve}=A;O.setupLightsView(ae),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,ae),te&&Re.viewport(re.copy(te)),ne.length>0&&Ma(ne,q,ae),Be.length>0&&Ma(Be,q,ae),Ve.length>0&&Ma(Ve,q,ae),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Wi(A,q,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[te.id]===void 0){const Ye=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[te.id]=new Vi(1,1,{generateMipmaps:!0,type:Ye?xa:_i,minFilter:Ns,samples:Math.max(4,zt.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Be=O.state.transmissionRenderTarget[te.id],Ve=te.viewport||re;Be.setSize(Ve.z*Z.transmissionResolutionScale,Ve.w*Z.transmissionResolutionScale);const Ie=Z.getRenderTarget(),Xe=Z.getActiveCubeFace(),ke=Z.getActiveMipmapLevel();Z.setRenderTarget(Be),Z.getClearColor(I),J=Z.getClearAlpha(),J<1&&Z.setClearColor(16777215,.5),Z.clear(),Wt&&we.render(ae);const Ze=Z.toneMapping;Z.toneMapping=Gi;const rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),O.setupLightsView(te),kt===!0&&Pe.setGlobalState(Z.clippingPlanes,te),Ma(A,ae,te),E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let bt=0,Kt=q.length;bt<Kt;bt++){const Xt=q[bt],{object:Ut,geometry:Lt,material:Ge,group:Dn}=Xt;if(Ge.side===ma&&Ut.layers.test(te.layers)){const pt=Ge.side;Ge.side=jn,Ge.needsUpdate=!0,Zo(Ut,ae,te,Lt,Ge,Dn),Ge.side=pt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be))}Z.setRenderTarget(Ie,Xe,ke),Z.setClearColor(I,J),rt!==void 0&&(te.viewport=rt),Z.toneMapping=Ze}function Ma(A,q,ae){const te=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Be=A.length;ne<Be;ne++){const Ve=A[ne],{object:Ie,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&te!==null&&(Ze=te),Ie.layers.test(ae.layers)&&Zo(Ie,q,ae,Xe,Ze,ke)}}function Zo(A,q,ae,te,ne,Be){A.onBeforeRender(Z,q,ae,te,ne,Be),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Z,q,ae,te,A,Be),ne.transparent===!0&&ne.side===ma&&ne.forceSinglePass===!1?(ne.side=jn,ne.needsUpdate=!0,Z.renderBufferDirect(ae,q,te,ne,A,Be),ne.side=as,ne.needsUpdate=!0,Z.renderBufferDirect(ae,q,te,ne,A,Be),ne.side=ma):Z.renderBufferDirect(ae,q,te,ne,A,Be),A.onAfterRender(Z,q,ae,te,ne,Be)}function Bs(A,q,ae){q.isScene!==!0&&(q=an);const te=w.get(A),ne=O.state.lights,Be=O.state.shadowsArray,Ve=ne.state.version,Ie=Le.getParameters(A,ne.state,Be,q,ae,O.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(Ie);let ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Q.get(A.envMap||te.environment,Ze),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",en),ke=new Map,te.programs=ke);let rt=ke.get(Xe);if(rt!==void 0){if(te.currentProgram===rt&&te.lightsStateVersion===Ve)return ya(A,Ie),rt}else Ie.uniforms=Le.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,ae,Ie),A.onBeforeCompile(Ie,Z),rt=Le.acquireProgram(Ie,Xe),ke.set(Xe,rt),te.uniforms=Ie.uniforms;const Ye=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),ya(A,Ie),te.needsLights=rs(A),te.lightsStateVersion=Ve,te.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=O.state.lightProbeGridArray.length>0,te.currentProgram=rt,te.uniformsList=null,rt}function Hr(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ya(A,q){const ae=w.get(A);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Gr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let ae=0,te=A.length;ae<te;ae++){const ne=A[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(L))return ne}return null}function Ea(A,q,ae,te,ne){q.isScene!==!0&&(q=an),E.resetTextureUnits();const Be=q.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Ie=W===null?Z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Mt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=Q.get(te.envMap||Ve,Xe),Ze=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,rt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!ae.morphAttributes.position,bt=!!ae.morphAttributes.normal,Kt=!!ae.morphAttributes.color;let Xt=Gi;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=Z.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Lt=Ut!==void 0?Ut.length:0,Ge=w.get(te),Dn=O.state.lights;if(kt===!0&&(ft===!0||A!==H)){const Dt=A===H&&te.id===U;Pe.setState(te,A,Dt)}let pt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Dn.state.version||Ge.outputColorSpace!==Ie||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==ke||te.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==rt||Ge.morphTargets!==Ye||Ge.morphNormals!==bt||Ge.morphColors!==Kt||Ge.toneMapping!==Xt||Ge.morphTargetsCount!==Lt||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ge.__version=te.version);let gn=Ge.currentProgram;pt===!0&&(gn=Bs(te,q,ne),K&&te.isNodeMaterial&&K.onUpdateProgram(te,gn,Ge));let Yn=!1,Mi=!1,Zn=!1;const Ot=gn.getUniforms(),Qt=Ge.uniforms;if(Re.useProgram(gn.program)&&(Yn=!0,Mi=!0,Zn=!0),te.id!==U&&(U=te.id,Mi=!0),Ge.needsLights){const Dt=Gr(O.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==Dt&&(Ge.lightProbeGrid=Dt,Mi=!0)}if(Yn||H!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(j,"projectionMatrix",A.projectionMatrix),Ot.setValue(j,"viewMatrix",A.matrixWorldInverse);const Ni=Ot.map.cameraPosition;Ni!==void 0&&Ni.setValue(j,Nt.setFromMatrixPosition(A.matrixWorld)),zt.logarithmicDepthBuffer&&Ot.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Mi=!0,Zn=!0)}if(Ge.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ot.setValue(j,"directionalShadowMap",Dn.state.directionalShadowMap,E),Dn.state.spotShadowMap.length>0&&Ot.setValue(j,"spotShadowMap",Dn.state.spotShadowMap,E),Dn.state.pointShadowMap.length>0&&Ot.setValue(j,"pointShadowMap",Dn.state.pointShadowMap,E)),ne.isSkinnedMesh){Ot.setOptional(j,ne,"bindMatrix"),Ot.setOptional(j,ne,"bindMatrixInverse");const Dt=ne.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ot.setValue(j,"boneTexture",Dt.boneTexture,E))}ne.isBatchedMesh&&(Ot.setOptional(j,ne,"batchingTexture"),Ot.setValue(j,"batchingTexture",ne._matricesTexture,E),Ot.setOptional(j,ne,"batchingIdTexture"),Ot.setValue(j,"batchingIdTexture",ne._indirectTexture,E),Ot.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ot.setValue(j,"batchingColorTexture",ne._colorsTexture,E));const yi=ae.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&nt.update(ne,ae,gn),(Mi||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Ot.setValue(j,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(Qt.envMapIntensity.value=q.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=k1()),Mi){if(Ot.setValue(j,"toneMappingExposure",Z.toneMappingExposure),Ge.needsLights&&ba(Qt,Zn),Be&&te.fog===!0&&ce.refreshFogUniforms(Qt,Be),ce.refreshMaterialUniforms(Qt,te,De,Ae,O.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Dt=Ge.lightProbeGrid;Qt.probesSH.value=Dt.texture,Qt.probesMin.value.copy(Dt.boundingBox.min),Qt.probesMax.value.copy(Dt.boundingBox.max),Qt.probesResolution.value.copy(Dt.resolution)}Oc.upload(j,Hr(Ge),Qt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Oc.upload(j,Hr(Ge),Qt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(j,"center",ne.center),Ot.setValue(j,"modelViewMatrix",ne.modelViewMatrix),Ot.setValue(j,"normalMatrix",ne.normalMatrix),Ot.setValue(j,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Dt=te.uniformsGroups;for(let Ni=0,Aa=Dt.length;Ni<Aa;Ni++){const os=Dt[Ni];he.update(os,gn),he.bind(os,gn)}}return gn}function ba(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function rs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,q,ae){const te=w.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=q,w.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ae=w.get(A);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Ta=j.createFramebuffer();this.setRenderTarget=function(A,q=0,ae=0){W=A,ue=q,pe=ae;let te=null,ne=!1,Be=!1;if(A){const Ie=w.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(j.FRAMEBUFFER,Ie.__webglFramebuffer),re.copy(A.viewport),ge.copy(A.scissor),ye=A.scissorTest,Re.viewport(re),Re.scissor(ge),Re.setScissorTest(ye),U=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ie.__hasExternalTextures)E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&w.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const ke=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?te=ke[q][ae]:te=ke[q],ne=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=w.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[ae]:te=ke,re.copy(A.viewport),ge.copy(A.scissor),ye=A.scissorTest}else re.copy(be).multiplyScalar(De).floor(),ge.copy(He).multiplyScalar(De).floor(),ye=$e;if(ae!==0&&(te=Ta),Re.bindFramebuffer(j.FRAMEBUFFER,te)&&Re.drawBuffers(A,te),Re.viewport(re),Re.scissor(ge),Re.setScissorTest(ye),ne){const Ie=w.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(Be){const Ie=q;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=w.get(A.textures[Xe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ae,Ie)}}else if(A!==null&&ae!==0){const Ie=w.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ie.__webglTexture,ae)}U=-1},this.readRenderTargetPixels=function(A,q,ae,te,ne,Be,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Re.bindFramebuffer(j.FRAMEBUFFER,Xe);try{const ke=A.textures[Ie],Ze=ke.format,rt=ke.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ie),!zt.textureFormatReadable(Ze)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(rt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&ae>=0&&ae<=A.height-ne&&j.readPixels(q,ae,te,ne,V.convert(Ze),V.convert(rt),Be)}finally{const ke=W!==null?w.get(W).__webglFramebuffer:null;Re.bindFramebuffer(j.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,ae,te,ne,Be,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(q>=0&&q<=A.width-te&&ae>=0&&ae<=A.height-ne){Re.bindFramebuffer(j.FRAMEBUFFER,Xe);const ke=A.textures[Ie],Ze=ke.format,rt=ke.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ie),!zt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.bufferData(j.PIXEL_PACK_BUFFER,Be.byteLength,j.STREAM_READ),j.readPixels(q,ae,te,ne,V.convert(Ze),V.convert(rt),0);const bt=W!==null?w.get(W).__webglFramebuffer:null;Re.bindFramebuffer(j.FRAMEBUFFER,bt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await fM(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Be),j.deleteBuffer(Ye),j.deleteSync(Kt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ae=0){const te=Math.pow(2,-ae),ne=Math.floor(A.image.width*te),Be=Math.floor(A.image.height*te),Ve=q!==null?q.x:0,Ie=q!==null?q.y:0;E.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,ae,0,0,Ve,Ie,ne,Be),Re.unbindTexture()};const cn=j.createFramebuffer(),Ko=j.createFramebuffer();this.copyTextureToTexture=function(A,q,ae=null,te=null,ne=0,Be=0){let Ve,Ie,Xe,ke,Ze,rt,Ye,bt,Kt;const Xt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Ze=ae.min.y,rt=ae.isBox3?ae.min.z:0;else{const Qt=Math.pow(2,-ne);Ve=Math.floor(Xt.width*Qt),Ie=Math.floor(Xt.height*Qt),A.isDataArrayTexture?Xe=Xt.depth:A.isData3DTexture?Xe=Math.floor(Xt.depth*Qt):Xe=1,ke=0,Ze=0,rt=0}te!==null?(Ye=te.x,bt=te.y,Kt=te.z):(Ye=0,bt=0,Kt=0);const Ut=V.convert(q.format),Lt=V.convert(q.type);let Ge;q.isData3DTexture?(E.setTexture3D(q,0),Ge=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),Ge=j.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),Ge=j.TEXTURE_2D),Re.activeTexture(j.TEXTURE0),Re.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),Re.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Re.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Dn=Re.getParameter(j.UNPACK_ROW_LENGTH),pt=Re.getParameter(j.UNPACK_IMAGE_HEIGHT),gn=Re.getParameter(j.UNPACK_SKIP_PIXELS),Yn=Re.getParameter(j.UNPACK_SKIP_ROWS),Mi=Re.getParameter(j.UNPACK_SKIP_IMAGES);Re.pixelStorei(j.UNPACK_ROW_LENGTH,Xt.width),Re.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xt.height),Re.pixelStorei(j.UNPACK_SKIP_PIXELS,ke),Re.pixelStorei(j.UNPACK_SKIP_ROWS,Ze),Re.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const Zn=A.isDataArrayTexture||A.isData3DTexture,Ot=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Qt=w.get(A),yi=w.get(q),Dt=w.get(Qt.__renderTarget),Ni=w.get(yi.__renderTarget);Re.bindFramebuffer(j.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Re.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Aa=0;Aa<Xe;Aa++)Zn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(A).__webglTexture,ne,rt+Aa),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Be,Kt+Aa)),j.blitFramebuffer(ke,Ze,Ve,Ie,Ye,bt,Ve,Ie,j.DEPTH_BUFFER_BIT,j.NEAREST);Re.bindFramebuffer(j.READ_FRAMEBUFFER,null),Re.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||w.has(A)){const Qt=w.get(A),yi=w.get(q);Re.bindFramebuffer(j.READ_FRAMEBUFFER,cn),Re.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ko);for(let Dt=0;Dt<Xe;Dt++)Zn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qt.__webglTexture,ne,rt+Dt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Qt.__webglTexture,ne),Ot?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yi.__webglTexture,Be,Kt+Dt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yi.__webglTexture,Be),ne!==0?j.blitFramebuffer(ke,Ze,Ve,Ie,Ye,bt,Ve,Ie,j.COLOR_BUFFER_BIT,j.NEAREST):Ot?j.copyTexSubImage3D(Ge,Be,Ye,bt,Kt+Dt,ke,Ze,Ve,Ie):j.copyTexSubImage2D(Ge,Be,Ye,bt,ke,Ze,Ve,Ie);Re.bindFramebuffer(j.READ_FRAMEBUFFER,null),Re.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Ge,Be,Ye,bt,Kt,Ve,Ie,Xe,Ut,Lt,Xt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Ge,Be,Ye,bt,Kt,Ve,Ie,Xe,Ut,Xt.data):j.texSubImage3D(Ge,Be,Ye,bt,Kt,Ve,Ie,Xe,Ut,Lt,Xt):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Be,Ye,bt,Ve,Ie,Ut,Lt,Xt.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Be,Ye,bt,Xt.width,Xt.height,Ut,Xt.data):j.texSubImage2D(j.TEXTURE_2D,Be,Ye,bt,Ve,Ie,Ut,Lt,Xt);Re.pixelStorei(j.UNPACK_ROW_LENGTH,Dn),Re.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt),Re.pixelStorei(j.UNPACK_SKIP_PIXELS,gn),Re.pixelStorei(j.UNPACK_SKIP_ROWS,Yn),Re.pixelStorei(j.UNPACK_SKIP_IMAGES,Mi),Be===0&&q.generateMipmaps&&j.generateMipmap(Ge),Re.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){ue=0,pe=0,W=null,Re.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Mt._getUnpackColorSpace()}}function j1(){return Xo.useEffect(()=>{const o=document.getElementById("hero-canvas");if(!o)return;let t=o.clientWidth,i=o.clientHeight;const s=new RM,l=new gi(60,t/i,.1,100);l.position.z=12;const u=new X1({canvas:o,alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(t,i),u.setPixelRatio(Math.min(window.devicePixelRatio,2));const d=new Ho;s.add(d);const p=280,m=new Si,h=new Float32Array(p*3),S=new Float32Array(p*3),x=new wt("#00f2fe"),g=new wt("#9b51e0");for(let F=0;F<p;F++){const K=Math.acos(-1+2*F/p),ue=Math.sqrt(p*Math.PI)*K,pe=4.5+(Math.random()*.4-.2),W=pe*Math.cos(ue)*Math.sin(K),U=pe*Math.sin(ue)*Math.sin(K),H=pe*Math.cos(K);h[F*3]=W,h[F*3+1]=U,h[F*3+2]=H;const re=x.clone().lerp(g,(U+4.5)/9);S[F*3]=re.r,S[F*3+1]=re.g,S[F*3+2]=re.b}m.setAttribute("position",new vi(h,3)),m.setAttribute("color",new vi(S,3));const y=new av({size:.12,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),b=new BM(m,y);d.add(b);const N=new Hh(4.35,16,16),M=new Fh({color:10179040,wireframe:!0,transparent:!0,opacity:.04}),v=new Xi(N,M);d.add(v);let D=0,P=0,L=0,X=0;function O(F){D=F.clientX/window.innerWidth*2-1,P=-(F.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",O);function z(){t=window.innerWidth,i=window.innerHeight,l.aspect=t/i,l.updateProjectionMatrix(),u.setSize(t,i),u.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",z);const T=new YM;let B;function Z(){const F=T.getElapsedTime();b.rotation.y=F*.08,b.rotation.x=Math.sin(F*.2)*.1,v.rotation.y=-F*.05,L=D*.4,X=P*.4,d.rotation.y+=.05*(L-d.rotation.y),d.rotation.x+=.05*(X-d.rotation.x),u.render(s,l),B=requestAnimationFrame(Z)}return Z(),()=>{cancelAnimationFrame(B),window.removeEventListener("mousemove",O),window.removeEventListener("resize",z),m.dispose(),y.dispose(),N.dispose(),M.dispose(),u.dispose()}},[]),C.jsxs("section",{id:"hero",children:[C.jsx("canvas",{id:"hero-canvas"}),C.jsx("div",{className:"grid-overlay"}),C.jsx("div",{className:"glow-orb glow-orb-1"}),C.jsx("div",{className:"glow-orb glow-orb-2"}),C.jsx("div",{className:"code-float",style:{left:"5%",animationDuration:"24s",animationDelay:"0s"},children:"const security = true;"}),C.jsx("div",{className:"code-float",style:{left:"12%",animationDuration:"30s",animationDelay:"4s"},children:"npm audit --fix"}),C.jsx("div",{className:"code-float",style:{left:"78%",animationDuration:"28s",animationDelay:"1s"},children:"aws ec2 describe-instances"}),C.jsx("div",{className:"code-float",style:{left:"88%",animationDuration:"34s",animationDelay:"5s"},children:"<SecureApp auth={jwt} />"}),C.jsx("div",{className:"code-float",style:{left:"48%",animationDuration:"26s",animationDelay:"7s"},children:"OWASP.top10.map(patch)"}),C.jsx("div",{className:"code-float",style:{left:"93%",animationDuration:"32s",animationDelay:"2s"},children:"git push origin main"}),C.jsxs("div",{className:"hero-content",children:[C.jsx("div",{className:"hero-badge",children:"Available for Opportunities"}),C.jsx("div",{className:"hero-name",children:"Avigat Sharma"}),C.jsxs("h1",{className:"hero-title",children:[C.jsx("span",{className:"line1",children:"Full Stack Developer"}),C.jsx("span",{className:"line2",children:"& Security Engineer"})]}),C.jsx("p",{className:"hero-sub",children:"Building Secure, Scalable & High-Performance Web Applications"}),C.jsx("p",{className:"hero-intro",children:" // Security-first developer with expertise in AWS infrastructure & OWASP compliance"}),C.jsxs("div",{className:"hero-ctas",children:[C.jsx("a",{href:"#projects",className:"btn btn-primary",children:"⟡ View Projects"}),C.jsxs("a",{href:"https://drive.google.com/file/d/1PIg5fgv2AHClDs2VnfPl70u-4S_RpB1L/view?usp=drive_link",target:"_blank",rel:"noreferrer",className:"btn btn-outline",children:[C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"4px"},children:[C.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),C.jsx("polyline",{points:"7 10 12 15 17 10"}),C.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Resume"]}),C.jsxs("a",{href:"https://github.com/avigats",target:"_blank",rel:"noreferrer",className:"btn btn-outline",children:[C.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",style:{marginRight:"4px",verticalAlign:"middle"},children:C.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]}),C.jsxs("a",{href:"https://www.linkedin.com/in/avigat-sharma-867b11184",target:"_blank",rel:"noreferrer",className:"btn btn-outline",children:[C.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",style:{marginRight:"4px",verticalAlign:"middle"},children:C.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),"LinkedIn"]}),C.jsx("a",{href:"#contact",className:"btn btn-outline",children:"✉ Contact Me"})]})]})]})}const W1="/Portfolio/assets/profile-V1MQCC8J.jpg";function q1(){return C.jsx("section",{id:"about",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // About Me"}),C.jsx("h2",{className:"section-title reveal",children:"Who I Am"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"about-grid",children:[C.jsxs("div",{className:"about-text reveal",children:[C.jsxs("p",{children:["I am a ",C.jsx("strong",{children:"Full Stack Developer and Security Engineer"})," with experience in building secure, scalable, and high-performance web applications."]}),C.jsxs("p",{children:["Skilled in ",C.jsx("strong",{children:"PHP, JavaScript, Python, MySQL, and AWS"}),", I develop efficient solutions while optimizing application performance and infrastructure."]}),C.jsxs("p",{children:["I have hands-on experience in ",C.jsx("strong",{children:"web security, penetration testing, and vulnerability assessment"}),", helping organizations strengthen their digital platforms."]}),C.jsxs("p",{children:["Passionate about technology and problem-solving, I combine ",C.jsx("strong",{children:"development expertise with a security-first approach"})," to deliver reliable and resilient systems."]}),C.jsxs("div",{className:"stats-grid",children:[C.jsxs("div",{className:"stat-card",children:[C.jsx("span",{className:"stat-num","data-target":"1",children:"0"}),C.jsx("span",{className:"stat-label",children:"+ Years Experience"})]}),C.jsxs("div",{className:"stat-card",children:[C.jsx("span",{className:"stat-num","data-target":"10",children:"0"}),C.jsx("span",{className:"stat-label",children:"+ Security Audits"})]}),C.jsxs("div",{className:"stat-card",children:[C.jsx("span",{className:"stat-num","data-target":"3",children:"0"}),C.jsx("span",{className:"stat-label",children:"Live Systems Secured"})]}),C.jsxs("div",{className:"stat-card",children:[C.jsx("span",{className:"stat-num","data-target":"4",children:"0"}),C.jsx("span",{className:"stat-label",children:"AWS Services Managed"})]})]})]}),C.jsxs("div",{className:"profile-hud-container reveal",children:[C.jsx("div",{className:"profile-hud-ring ring-outer"}),C.jsx("div",{className:"profile-hud-ring ring-mid"}),C.jsx("div",{className:"profile-hud-ring ring-inner"}),C.jsxs("div",{className:"profile-avatar-wrapper",children:[C.jsx("div",{className:"profile-hud-scanner"}),C.jsx("img",{src:W1,alt:"Avigat Sharma Profile",className:"profile-avatar-img"})]}),C.jsx("div",{className:"profile-hud-tech-data tech-data-1",children:"SYS.LOC // 28.6139° N, 77.2090° E"}),C.jsx("div",{className:"profile-hud-tech-data tech-data-2",children:"STATUS // ACTIVE_NODE_73"})]})]})]})})}function Y1(){return C.jsx("section",{id:"skills",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Technical Stack"}),C.jsx("h2",{className:"section-title reveal",children:"Skills & Tools"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"skills-cats",children:[C.jsxs("div",{className:"skill-cat reveal","data-index":"1",children:[C.jsx("div",{className:"skill-cat-title","data-index":"1",children:"Development"}),C.jsxs("div",{className:"skill-tags",children:[C.jsx("span",{className:"skill-tag",children:"HTML5"}),C.jsx("span",{className:"skill-tag",children:"CSS3"}),C.jsx("span",{className:"skill-tag",children:"JavaScript"}),C.jsx("span",{className:"skill-tag",children:"React"}),C.jsx("span",{className:"skill-tag",children:"PHP"}),C.jsx("span",{className:"skill-tag",children:"Python"}),C.jsx("span",{className:"skill-tag",children:"MySQL"}),C.jsx("span",{className:"skill-tag",children:"REST APIs"}),C.jsx("span",{className:"skill-tag",children:"Git"}),C.jsx("span",{className:"skill-tag",children:"Responsive Design"}),C.jsx("span",{className:"skill-tag",children:"Performance Opt."})]})]}),C.jsxs("div",{className:"skill-cat reveal","data-index":"2",children:[C.jsx("div",{className:"skill-cat-title","data-index":"2",children:"Security"}),C.jsxs("div",{className:"skill-tags",children:[C.jsx("span",{className:"skill-tag",children:"Vulnerability Assessment"}),C.jsx("span",{className:"skill-tag",children:"Penetration Testing"}),C.jsx("span",{className:"skill-tag",children:"SQL Injection"}),C.jsx("span",{className:"skill-tag",children:"XSS Protection"}),C.jsx("span",{className:"skill-tag",children:"OWASP ZAP"}),C.jsx("span",{className:"skill-tag",children:"Burp Suite"}),C.jsx("span",{className:"skill-tag",children:"OWASP Top 10"})]})]}),C.jsxs("div",{className:"skill-cat reveal","data-index":"3",children:[C.jsx("div",{className:"skill-cat-title","data-index":"3",children:"Cloud & DevOps"}),C.jsxs("div",{className:"skill-tags",children:[C.jsx("span",{className:"skill-tag",children:"AWS EC2"}),C.jsx("span",{className:"skill-tag",children:"AWS S3"}),C.jsx("span",{className:"skill-tag",children:"AWS RDS"}),C.jsx("span",{className:"skill-tag",children:"Load Balancers"}),C.jsx("span",{className:"skill-tag",children:"Cost Optimization"}),C.jsx("span",{className:"skill-tag",children:"Server Monitoring"})]})]})]})]})})}function Z1(){return C.jsx("section",{id:"experience",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Career Path"}),C.jsx("h2",{className:"section-title reveal",children:"Experience"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"timeline",children:[C.jsx("div",{className:"timeline-scroll-progress"}),C.jsxs("div",{className:"timeline-item reveal",children:[C.jsx("div",{className:"timeline-node"}),C.jsx("div",{className:"timeline-date",children:"Feb 2025 – Present"}),C.jsx("div",{className:"timeline-role",children:"Associate Full Stack Developer"}),C.jsx("div",{className:"timeline-company",children:"Nishtya Infotech Pvt. Ltd."}),C.jsxs("ul",{className:"timeline-bullets",children:[C.jsx("li",{children:"Managed security infrastructure & compliance for Jobaaj Group platforms"}),C.jsx("li",{children:"Optimized Core Web Vitals (LCP, CLS, FID) for measurable performance gains"}),C.jsx("li",{children:"Monitored & managed AWS EC2, RDS, S3, and CloudWatch dashboards"}),C.jsx("li",{children:"Executed infrastructure cost optimization through right-sizing & resource scheduling"}),C.jsx("li",{children:"Database tuning, query optimization & scalability improvements"})]})]}),C.jsxs("div",{className:"timeline-item reveal",children:[C.jsx("div",{className:"timeline-node"}),C.jsx("div",{className:"timeline-date",children:"Nov 2024 – Feb 2025"}),C.jsx("div",{className:"timeline-role",children:"Security Hardening Engineer"}),C.jsx("div",{className:"timeline-company",children:"Nishtya Infotech Pvt. Ltd."}),C.jsxs("ul",{className:"timeline-bullets",children:[C.jsx("li",{children:"Secured jobaaj.com, jobaajlearnings.com & shastrahub.com from the ground up"}),C.jsx("li",{children:"Implemented robust access control & subdomain protection mechanisms"}),C.jsx("li",{children:"Conducted penetration tests covering SQLi, XSS, CSRF & OWASP Top 10"}),C.jsx("li",{children:"Set up real-time threat monitoring via AWS CloudWatch alerts"}),C.jsx("li",{children:"Hardened server configurations, session handling & authentication flows"})]})]}),C.jsxs("div",{className:"timeline-item reveal",children:[C.jsx("div",{className:"timeline-node"}),C.jsx("div",{className:"timeline-date",children:"Mar 2023 – Sep 2023"}),C.jsx("div",{className:"timeline-role",children:"Frontend Developer Intern"}),C.jsx("div",{className:"timeline-company",children:"Techwits IT"}),C.jsxs("ul",{className:"timeline-bullets",children:[C.jsx("li",{children:"Built and shipped a full-featured Admin Console dashboard from scratch"}),C.jsx("li",{children:"Improved team issue resolution efficiency by 25% through better tooling"}),C.jsx("li",{children:"Collaborated with cross-functional teams on UI/UX improvements"})]})]})]})]})})}function K1(){return C.jsx("section",{id:"projects",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Featured Work"}),C.jsx("h2",{className:"section-title reveal",children:"Projects"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"projects-grid",children:[C.jsxs("div",{className:"project-card reveal",children:[C.jsx("div",{className:"project-glow"}),C.jsx("span",{className:"project-tag",children:"PHP · MySQL · JavaScript · Python"}),C.jsx("div",{className:"project-title",children:"ATS & Job Fit Engine"}),C.jsxs("ul",{className:"project-bullets",children:[C.jsx("li",{children:"Built an end-to-end job-fit engine using PHP, MySQL, JS, and Python."}),C.jsx("li",{children:"Designed resume scoring and job recommendation features."}),C.jsx("li",{children:"Enabled real-time application fit analysis for users."}),C.jsx("li",{children:"Developed secure APIs and dashboards with OWASP testing."})]}),C.jsxs("a",{href:"#contact",className:"btn btn-outline",children:["View Case Study",C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"4px"},children:[C.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),C.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),C.jsxs("div",{className:"project-card reveal",children:[C.jsx("div",{className:"project-glow"}),C.jsx("span",{className:"project-tag",children:"OWASP ZAP · Burp Suite · Kali Linux"}),C.jsx("div",{className:"project-title",children:"Website Security & Hardening"}),C.jsxs("ul",{className:"project-bullets",children:[C.jsx("li",{children:"Secured web server, database, and APIs against SQLi, XSS, and CSRF attacks."}),C.jsx("li",{children:"Implemented secure authentication, input validation, and session control."}),C.jsx("li",{children:"Conducted vulnerability assessments using OWASP ZAP, Burp Suite, and Nikto."}),C.jsx("li",{children:"Enhanced backend security, data integrity, and real-time monitoring."}),C.jsx("li",{children:"Reduced attack surface by 60%+ through systematic remediation"})]}),C.jsxs("a",{href:"#contact",className:"btn btn-outline",children:["View Case Study",C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"4px"},children:[C.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),C.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),C.jsxs("div",{className:"project-card reveal",children:[C.jsx("div",{className:"project-glow"}),C.jsx("span",{className:"project-tag",children:"PHP · MySQL · JavaScript (AJAX) · HTML · CSS"}),C.jsx("div",{className:"project-title",children:"B2B Sales CRM | Jobaaj"}),C.jsxs("ul",{className:"project-bullets",children:[C.jsx("li",{children:"Developed a comprehensive CRM to manage companies, leads, and end-to-end sales workflows."}),C.jsx("li",{children:"Designed lead management and email automation modules, including customizable email templates for lead nurturing."}),C.jsx("li",{children:"Implemented role-based access control with hierarchical team structures (Super Admin, Manager, Executive)."}),C.jsx("li",{children:"Built lead lifecycle tracking, conversion analytics, and incentive calculation features to monitor sales performance and productivity."})]}),C.jsxs("a",{href:"#contact",className:"btn btn-outline",children:["View Case Study",C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"4px"},children:[C.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),C.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]})]})})}function Q1(){return C.jsx("section",{id:"achievements",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Impact & Results"}),C.jsx("h2",{className:"section-title reveal",children:"Measurable Impact"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"ach-grid",children:[C.jsxs("div",{className:"ach-card reveal",children:[C.jsx("span",{className:"ach-icon",children:"⚡"}),C.jsx("span",{className:"ach-metric",children:"↑ PERF"}),C.jsx("div",{className:"ach-desc",children:"Optimized Core Web Vitals across Jobaaj platforms, yielding major LCP, CLS & FID speed increases."})]}),C.jsxs("div",{className:"ach-card reveal",children:[C.jsx("span",{className:"ach-icon",children:"💰"}),C.jsx("span",{className:"ach-metric",children:"↓ COST"}),C.jsx("div",{className:"ach-desc",children:"Lowered cloud spend on AWS environments through right-sizing services and scheduling automation."})]}),C.jsxs("div",{className:"ach-card reveal",children:[C.jsx("span",{className:"ach-icon",children:"🛡️"}),C.jsx("span",{className:"ach-metric",children:"60%+"}),C.jsx("div",{className:"ach-desc",children:"Shrunk the system attack surface via secure headers, patching, and systematic OWASP audit mitigation."})]}),C.jsxs("div",{className:"ach-card reveal",children:[C.jsx("span",{className:"ach-icon",children:"📈"}),C.jsx("span",{className:"ach-metric",children:"25%"}),C.jsx("div",{className:"ach-desc",children:"Boosted ticket resolution velocity at Techwits IT by architecting a custom responsive Admin Console."})]})]})]})})}function J1(){return C.jsx("section",{id:"education",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Academic Background"}),C.jsx("h2",{className:"section-title reveal",children:"Education"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"edu-grid",children:[C.jsxs("div",{className:"edu-card reveal",children:[C.jsxs("div",{className:"edu-header",children:[C.jsx("div",{className:"edu-degree",children:"M.Tech"}),C.jsx("div",{className:"edu-field",children:"Computer Science & Engineering"})]}),C.jsxs("div",{children:[C.jsx("div",{className:"edu-uni",children:"Madhyanchal Professional University"}),C.jsx("div",{className:"edu-tag",children:" // Postgraduate"})]})]}),C.jsxs("div",{className:"edu-card reveal",children:[C.jsxs("div",{className:"edu-header",children:[C.jsx("div",{className:"edu-degree",children:"B.Tech"}),C.jsx("div",{className:"edu-field",children:"Computer Science & Engineering"})]}),C.jsxs("div",{children:[C.jsx("div",{className:"edu-uni",children:"AKTU (Dr. APJ Abdul Kalam Technical University)"}),C.jsx("div",{className:"edu-tag",children:" // Undergraduate"})]})]}),C.jsxs("div",{className:"edu-card reveal",children:[C.jsxs("div",{className:"edu-header",children:[C.jsx("div",{className:"edu-degree",children:"Diploma"}),C.jsx("div",{className:"edu-field",children:"Technical Engineering"})]}),C.jsxs("div",{children:[C.jsx("div",{className:"edu-uni",children:"DEI Technical College"}),C.jsx("div",{className:"edu-tag",children:" // Foundation"})]})]})]})]})})}function $1(){return Xo.useEffect(()=>{const o=document.getElementById("contactForm");if(!o)return;function t(l){const u=document.getElementById(l);u&&u.classList.add("show")}function i(){document.querySelectorAll(".form-error").forEach(l=>l.classList.remove("show"))}function s(l){l.preventDefault(),i();const u=document.getElementById("fname").value.trim(),d=document.getElementById("femail").value.trim(),p=document.getElementById("fsubject").value.trim(),m=document.getElementById("fmessage").value.trim();let h=!0;if(u||(t("fnameErr"),h=!1),(!d||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d))&&(t("femailErr"),h=!1),p||(t("fsubjectErr"),h=!1),m||(t("fmessageErr"),h=!1),h){const S=document.getElementById("formSuccess");S&&(S.style.display="block"),o.reset()}}return o.addEventListener("submit",s),()=>o.removeEventListener("submit",s)},[]),C.jsx("section",{id:"contact",children:C.jsxs("div",{className:"container",children:[C.jsx("div",{className:"section-label",children:" // Get in Touch"}),C.jsx("h2",{className:"section-title reveal",children:"Contact Me"}),C.jsx("div",{className:"section-line"}),C.jsxs("div",{className:"contact-grid",children:[C.jsxs("div",{className:"contact-info reveal",children:[C.jsxs("h3",{children:["Let's Build Something ",C.jsx("span",{style:{color:"var(--primary)"},children:"Secure"})]}),C.jsx("p",{children:"Whether you need a high-performance web application, security audit, or cloud infrastructure assistance — I'm available for new opportunities and collaborations."}),C.jsxs("div",{className:"contact-links",children:[C.jsxs("a",{href:"mailto:avigat.sharma@email.com",className:"contact-link",children:[C.jsx("div",{className:"contact-link-icon",children:"✉"}),"avigatsharma27@gmail.com"]}),C.jsxs("a",{href:"tel:+91XXXXXXXXXX",className:"contact-link",children:[C.jsx("div",{className:"contact-link-icon",children:"📞"}),"+91 9084461471"]}),C.jsxs("a",{href:"https://linkedin.com/in/avigat-sharma",target:"_blank",rel:"noreferrer",className:"contact-link",children:[C.jsx("div",{className:"contact-link-icon",children:"in"}),"www.linkedin.com/in/avigat-sharma-867b11184"]}),C.jsxs("a",{href:"https://github.com/avigat-sharma",target:"_blank",rel:"noreferrer",className:"contact-link",children:[C.jsx("div",{className:"contact-link-icon",children:"⌥"}),"https://github.com/avigats"]})]})]}),C.jsx("div",{className:"reveal",children:C.jsx("div",{className:"contact-form-container",children:C.jsxs("form",{className:"contact-form",id:"contactForm",children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Name"}),C.jsx("input",{type:"text",className:"form-input",id:"fname",placeholder:"Your full name"}),C.jsx("span",{className:"form-error",id:"fnameErr",children:"Please enter your name"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Email"}),C.jsx("input",{type:"email",className:"form-input",id:"femail",placeholder:"your@email.com"}),C.jsx("span",{className:"form-error",id:"femailErr",children:"Please enter a valid email"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Subject"}),C.jsx("input",{type:"text",className:"form-input",id:"fsubject",placeholder:"What's this about?"}),C.jsx("span",{className:"form-error",id:"fsubjectErr",children:"Please enter a subject"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Message"}),C.jsx("textarea",{className:"form-textarea",id:"fmessage",placeholder:"Tell me about your project, opportunity, or just say hi..."}),C.jsx("span",{className:"form-error",id:"fmessageErr",children:"Please enter a message"})]}),C.jsxs("button",{type:"submit",className:"btn btn-primary sendMesssage",children:["Send Message",C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"4px"},children:[C.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),C.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),C.jsx("div",{className:"form-success",id:"formSuccess",children:"✓ Message received! Connection established successfully."})]})})})]})]})})}function eA(){return C.jsxs("footer",{children:[C.jsxs("div",{className:"footer-text",children:["Designed & ",C.jsx("span",{children:"Secured"})," by Avigat Sharma   | ",C.jsxs("span",{style:{color:"var(--text-muted)"},children:["© ",new Date().getFullYear()]})]}),C.jsx("a",{href:"#hero",className:"back-top",title:"Back to top",children:"↑"})]})}function tA(){return Xo.useEffect(()=>{const o=document.querySelector(".cursor"),t=document.querySelector(".cursor-ring");function i(g){o&&(o.style.left=g.clientX+"px",o.style.top=g.clientY+"px"),t&&(t.style.left=g.clientX+"px",t.style.top=g.clientY+"px")}document.addEventListener("mousemove",i),document.querySelectorAll("a, button, .btn, .stat-card, .skill-tag, .project-card, .edu-card, .contact-link, .hamburger").forEach(g=>{g.addEventListener("mouseenter",()=>{o&&(o.style.transform="translate(-50%, -50%) scale(1.5)"),t&&(t.style.transform="translate(-50%, -50%) scale(1.5)",t.style.borderColor="var(--primary)")}),g.addEventListener("mouseleave",()=>{o&&(o.style.transform="translate(-50%, -50%) scale(1)"),t&&(t.style.transform="translate(-50%, -50%) scale(1)",t.style.borderColor="var(--secondary)")})});const l=document.querySelector(".scroll-progress"),u=document.querySelector("nav");function d(){const g=document.documentElement.scrollTop||document.body.scrollTop,y=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=y>0?g/y*100:0;l&&(l.style.width=b+"%"),u&&(window.scrollY>50?u.classList.add("scrolled"):u.classList.remove("scrolled"));const N=document.querySelector(".timeline"),M=document.querySelector(".timeline-scroll-progress"),v=document.querySelectorAll(".timeline-item");if(N&&M&&v.length>0){const D=N.getBoundingClientRect(),P=window.innerHeight,L=D.top-P/2,X=D.height;let O=0;L<0&&(O=Math.min(Math.max(-L/X,0),1)),M.style.height=O*100+"%",v.forEach(z=>{z.getBoundingClientRect().top<P/1.6?z.classList.add("active"):z.classList.remove("active")})}}window.addEventListener("scroll",d),d();const p=new IntersectionObserver(g=>{g.forEach(y=>{y.isIntersecting&&y.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".reveal").forEach(g=>p.observe(g));const m=new IntersectionObserver(g=>{g.forEach(y=>{if(y.isIntersecting){const b=parseInt(y.target.getAttribute("data-target"));if(!b)return;let N=0;const M=Math.ceil(b/45),v=setInterval(()=>{N+=M,N>=b&&(N=b,clearInterval(v)),y.target.textContent=N},35);m.unobserve(y.target)}})},{threshold:.4});document.querySelectorAll(".stat-num[data-target]").forEach(g=>m.observe(g));const h=document.querySelectorAll(".skill-cat, .project-card, .profile-avatar-wrapper, .stat-card, .edu-card");function S(g){const y=g.currentTarget,b=y.getBoundingClientRect(),N=g.clientX-b.left,M=g.clientY-b.top,v=b.width,D=b.height,P=(N/v-.5)*15,L=(M/D-.5)*-15;y.style.transform=`perspective(1000px) rotateX(${L}deg) rotateY(${P}deg) scale3d(1.02, 1.02, 1.02)`,y.style.transition="none"}function x(g){const y=g.currentTarget;y.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",y.style.transition="transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}return h.forEach(g=>{g.addEventListener("mousemove",S),g.addEventListener("mouseleave",x)}),()=>{document.removeEventListener("mousemove",i),window.removeEventListener("scroll",d),p.disconnect(),m.disconnect(),h.forEach(g=>{g.removeEventListener("mousemove",S),g.removeEventListener("mouseleave",x)})}},[]),C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"scroll-progress"}),C.jsx(DS,{}),C.jsx(j1,{}),C.jsx(q1,{}),C.jsx(Y1,{}),C.jsx(Z1,{}),C.jsx(K1,{}),C.jsx(Q1,{}),C.jsx(J1,{}),C.jsx($1,{}),C.jsx(eA,{})]})}wS.createRoot(document.getElementById("root")).render(C.jsx(Xo.StrictMode,{children:C.jsx(tA,{})}));
