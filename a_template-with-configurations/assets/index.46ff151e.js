(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Cr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Cr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Cr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Cr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Cr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return Cr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function wa(e){return Cr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Cr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return Cr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function x(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Gt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function qu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Zu=[];function Xu(e){return e.length}var Qu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ku=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),ev=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var rv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+nv()),r});function nv(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Sr(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=vi(e),r=vi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}$(Sr);$(function(e,r){return!Sr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var av=$(function(e,r){var n=I(e,r);return n<0?Mc:n?Gf:zc}),Tn=0;function T(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Xe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var tv=$(ar);function h(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ov=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ye(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(x(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Pa(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===zc?0:t===Mc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var iv=$(Math.pow);$(function(e,r){return r%e});var cv=$(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),lv=Math.PI,uv=Math.cos,vv=Math.sin,$v=Math.tan,fv=Math.atan;$(Math.atan2);function sv(e){return e}function mv(e){return e===1/0||e===-1/0}var dv=Math.ceil,pv=Math.floor,bv=Math.round,gv=Math.sqrt,Zo=Math.log,hv=isNaN;function _v(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var yv=$(function(e,r){return e+r});function Sv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ie(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function Cv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function xv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var wv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Lv=$(function(e,r){return r.split(e)}),Pv=$(function(e,r){return r.join(e)}),Tv=S(function(e,r,n){return n.slice(e,r)});function zv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Mv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),kv=$(function(e,r){return r.indexOf(e)>-1}),Dv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Av=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ac(e){return e+""}function Bv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ie(n==45?-r:r)}function Fv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ie(r):q}function Vv(e){return Pa(e).join("")}function Ev(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Uv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Rv(e){return{$:0,a:e}}function Yt(e){return{$:2,b:e}}var jv=Yt(function(e){return typeof e=="boolean"?$e(e):Ze("a BOOL",e)}),Nv=Yt(function(e){return typeof e=="number"?$e(e):Ze("a FLOAT",e)}),Wv=Yt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ze("a STRING",e)});function Gv(e){return{$:3,b:e}}var Yv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Hv=$(function(e,r){return{$:10,b:r,h:e}}),Iv=$(function(e,r){return xr(e,[r])}),Jv=S(function(e,r,n){return xr(e,[r,n])});E(function(e,r,n,a){return xr(e,[r,n,a])});he(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});wa(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return Se(o(no,"This is not valid JSON! "+a.message,r))}});var tc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ze("null",r);case 3:return Nn(r)?Xo(e.b,r,h):Ze("a LIST",r);case 4:return Nn(r)?Xo(e.b,r,Ov):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:Se(o($i,n,v.a));case 7:var a=e.e;if(!Nn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:Se(o(kc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return Se(o($i,i,v.a));t=ar(T(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return $e(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=je(m.a,r);if(Ie(v))return v;s=ar(v.a,s)}return Se(Yf(Fe(s)));case 1:return Se(o(no,e.a,r));case 0:return $e(e.a)}}function Xo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return Se(o(kc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Ov(e){return o(cs,e.length,function(r){return e[r]})}function Ze(e,r){return Se(o(no,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&Qo(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return Qo(e.g,r.g)}}function Qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var qv=$(function(e,r){return JSON.stringify(r,null,e)+""});function oc(e){return e}S(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Zv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var mt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Xv(e){return{$:5,b:e}}var Qv=0;function Ht(e){var r={$:0,e:Qv++,f:e,g:null,h:[]};return It(r),r}function ic(e){return pr(function(r){r(Nr(Ht(e)))})}function cc(e,r){e.h.push(r),It(e)}var Kv=$(function(e,r){return pr(function(n){cc(e,r),n(Nr(Tn))})}),Na=!1,Ko=[];function It(e){if(Ko.push(e),!Na){for(Na=!0;e=Ko.shift();)e$(e);Na=!1}}function e$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,It(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Jt(e,r,n,a,t,i){var c=o(tc,e,r?r.flags:void 0);Ie(c)||nn(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=r$(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),ri(l,b.b,t(v))}return ri(l,u.b,t(v)),m?{ports:m}:{}}var Ke={};function r$(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=a$(t,r)}return n}function n$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function a$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,Xv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(mt,l,e.b))}var t$=$(function(e,r){return pr(function(n){e.g(r),n(Nr(Tn))})});$(function(e,r){return o(Kv,e.h,{$:0,a:r})});function lc(e){return function(r){return{$:1,k:e,l:r}}}function o$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ei=[],Wa=!1;function ri(e,r,n){if(ei.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=ei.shift();)i$(a.p,a.q,a.r);Wa=!1}}function i$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)cc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=c$(e,t,a,r.l);n[t]=l$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function c$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function l$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function u$(e){Ke[e]&&nn(3)}$(function(e,r){return r});function v$(e,r){return u$(e),Ke[e]={f:$$,u:r,a:f$},lc(e)}var $$=$(function(e,r){return function(n){return e(r(n))}});function f$(e,r){var n=P,a=Ke[e].u,t=Nr(null);Ke[e].b=t,Ke[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(tc,a,c);Ie(l)||nn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document<"u"?document:{};function Ot(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(_r(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var uc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:qt(n),e:t,f:e,b:i}})}),Wr=uc(void 0),s$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:qt(n),e:t,f:e,b:i}})}),m$=s$(void 0);function d$(e,r,n,a){return{$:3,d:qt(e),g:r,h:n,i:a}}var p$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});S(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return x(e,r,n,a,t,i)})});wa(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Gt(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var vc=$(function(e,r){return{$:"a0",n:e,o:r}}),b$=$(function(e,r){return{$:"a1",n:e,o:r}}),$c=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),g$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function h$(e){return e=="script"?"p":e}function _$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(vc,r.n,y$(e,r.o)):r});function y$(e,r){var n=co(r);return{$:r.$,a:n?p(ls,n<3?S$:C$,De(e),r.a):o($a,e,r.a)}}var S$=$(function(e,r){return T(e(r.a),r.b)}),C$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function qt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ni(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ni(c,t,i):c[t]=i}return r}function ni(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=_r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ot(c,_r(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?x$(e,t):a==="a0"?P$(e,r,t):a==="a3"?w$(e,t):a==="a4"?L$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function x$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function w$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function L$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function P$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=T$(r,i),e.addEventListener(t,c,Zt&&{passive:co(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function T$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=co(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function z$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function fc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=E$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){_e(n,0,a,r);return}(f?!M$(m,d):m!==d)&&_e(n,2,a,d),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ai(e,r,n,a,k$);return;case 2:ai(e,r,n,a,D$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=Xt(e.d,r.d);y&&_e(n,4,a,y);var C=r.i(e.g,r.g);C&&_e(n,5,a,C);return}}}function M$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ai(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Xt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&z$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function k$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function D$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],y=g.a,C=b.a,_=g.b,w=b.b,M=void 0,N=void 0;if(y===C){f++,Je(_,w,t,f),f+=_.b||0,m++,d++;continue}var R=l[m+1],U=u[d+1];if(R){var j=R.a,W=R.b;N=C===j}if(U){var F=U.a,O=U.b;M=y===F}if(M&&N){f++,Je(_,O,t,f),vn(i,t,y,w,d,c),f+=_.b||0,f++,$n(i,t,y,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,vn(i,t,C,w,d,c),Je(_,O,t,f),f+=_.b||0,m+=1,d+=2;continue}if(N){f++,$n(i,t,y,_,f),f+=_.b||0,f++,Je(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(R&&j===F){f++,$n(i,t,y,_,f),vn(i,t,C,w,d,c),f+=_.b||0,f++,Je(W,O,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];vn(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var sc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+sc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+sc,a,t)}function mc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)mc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,y=0;y<g.length;y++){t++;var C=d===1?g[y]:g[y].b,_=t+(C.b||0);if(t<=u&&u<=_&&(a=fn(b[y],C,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function dc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=A$(t,a);t===e&&(e=i)}return e}function A$(e,r){switch(r.$){case 0:return B$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return F$(e,r);case 5:return r.s(e);default:nn(10)}}function B$(e,r,n){var a=e.parentNode,t=_r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function F$(e,r){var n=r.s,a=V$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:_r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ot(e,a),e}function V$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ot(n,i.c===2?i.s:_r(i.z,r.u))}return n}}function Qt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Lr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(Qt(v[a]),u);return p(Wr,l,r,u)}function E$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var U$=E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Qt(l);return pc(i,function(v){var s=c(v),m=fc(u,s);l=dc(l,u,m,t),u=s})})});E(function(e,r,n,a){return Jt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=ur.title,v=ur.body,s=Qt(v);return pc(i,function(m){ca=c;var d=l(m),f=Wr("body")(P)(d.eu),g=fc(s,f);v=dc(v,s,g,t),s=f,ca=0,u!==d.fL&&(ur.title=u=d.fL)})})});var ua=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function pc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(vo,lo,pr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(vo,lo,pr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(vo,lo,pr(function(){history.replaceState({},"",r),e()}))});var R$={addEventListener:function(){},removeEventListener:function(){}},j$=typeof window<"u"?window:R$;S(function(e,r,n){return ic(pr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?ie(n.a):q});function bc(e,r){return pr(function(n){ua(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Zv(vs(e)))})})}function N$(e){return pr(function(r){ua(function(){r(Nr(e()))})})}$(function(e,r){return bc(r,function(n){return n[e](),Tn})});$(function(e,r){return N$(function(){return j$.scroll(e,r),Tn})});S(function(e,r,n){return bc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var W$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ie(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var G$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ie(m):q}a.push(L(fl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ie(v):q}return n(L(fl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ti=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function Kt(e){for(var r=0;e.b;e=e.b)r++;return r}var Y$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},H$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),I$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),J$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),O$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),q$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Z$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Q$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),K$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ef=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},rf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},nf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},af=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},hc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},tf=function(e){e.gl.disable(e.gl.CULL_FACE)},of=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},cf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},lf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},oi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],uf=[rf,nf,af,gc,hc,tf,of,cf,lf];function ii(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function vf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function _c(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function $f(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,y,C){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?y[C]:y[C][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?y[w][C]:y[w][C][_]})}var u=_c(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Kt(n.b)*s);Sn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function ff(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=sf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Kt(r.b),indexBuffer:null,buffers:{}}}function sf(e,r){var n=new Uint32Array(Kt(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ci(e,r){return e+"#"+r}var yc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),gc(n),hc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ci(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ti++,v||(v=ii(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ti++,s||(s=ii(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=vf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ci(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),df(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=ff(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=$f(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=_c(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,_=C*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,y.size,y.baseType,!1,_,C*w)}for(n.toggle=!n.toggle,Sn(k0(n),i.a),u=0;u<oi.length;u++){var M=n[oi[u]];M.toggle!==n.toggle&&M.enabled&&(uf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Sn(t,e.g),r});function mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,y=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var C=c++;return function(_){e.activeTexture(e.TEXTURE0+C);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,C),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function df(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var pf=S(function(e,r,n){return d$(r,{g:n,f:{},h:e},Cf,xf)}),bf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),gf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),hf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),_f=$(function(e,r){e.contextAttributes.antialias=!0}),yf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Sf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Cf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(M0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Y$(function(){return o(yc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function xf(e,r){return r.f=e.f,yc(r)}var wf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Lf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Lf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var eo=new Float64Array(3),li=new Float64Array(3),ui=new Float64Array(3),Pf=S(function(e,r,n){return new Float64Array([e,r,n])}),Tf=function(e){return e[0]},zf=function(e){return e[1]},Mf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var kf=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Sc);function Cc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(Sc(e,r,n),n)}$(Cc);function xc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Df=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bt);$(function(e,r){var n,a=eo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Af=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Bf=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Ff=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Vf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Vf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Ef=new Float64Array(16),Uf=new Float64Array(16),Rf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},jf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ye(wc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return wc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ye(Lc);E(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],y=e[13],C=e[14],_=e[15],w=r[0],M=r[1],N=r[2],R=r[3],U=r[4],j=r[5],W=r[6],F=r[7],O=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],ke=r[14],xe=r[15];return n[0]=a*w+l*M+m*N+b*R,n[1]=t*w+u*M+d*N+y*R,n[2]=i*w+v*M+f*N+C*R,n[3]=c*w+s*M+g*N+_*R,n[4]=a*U+l*j+m*W+b*F,n[5]=t*U+u*j+d*W+y*F,n[6]=i*U+v*j+f*W+C*F,n[7]=c*U+s*j+g*W+_*F,n[8]=a*O+l*Q+m*le+b*fe,n[9]=t*O+u*Q+d*le+y*fe,n[10]=i*O+v*Q+f*le+C*fe,n[11]=c*O+s*Q+g*le+_*fe,n[12]=a*ce+l*pe+m*ke+b*xe,n[13]=t*ce+u*pe+d*ke+y*xe,n[14]=i*ce+v*pe+f*ke+C*xe,n[15]=c*ce+s*pe+g*ke+_*xe,n}$(Pc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],y=r[1],C=r[2],_=r[4],w=r[5],M=r[6],N=r[8],R=r[9],U=r[10],j=r[12],W=r[13],F=r[14];return n[0]=a*b+c*y+v*C,n[1]=t*b+l*y+s*C,n[2]=i*b+u*y+m*C,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*R+v*U,n[9]=t*N+l*R+s*U,n[10]=i*N+u*R+m*U,n[11]=0,n[12]=a*j+c*W+v*F+d,n[13]=t*j+l*W+s*F+f,n[14]=i*j+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,eo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/xc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,y=c*l*v,C=i*i*v+u,_=g+f,w=b-d,M=g-f,N=c*c*v+u,R=y+m,U=b+d,j=y-m,W=l*l*v+u,F=n[0],O=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],ke=n[7],xe=n[8],gr=n[9],hr=n[10],ja=n[11],Hu=n[12],Iu=n[13],Ju=n[14],Ou=n[15];return a[0]=F*C+fe*_+xe*w,a[1]=O*C+ce*_+gr*w,a[2]=Q*C+pe*_+hr*w,a[3]=le*C+ke*_+ja*w,a[4]=F*M+fe*N+xe*R,a[5]=O*M+ce*N+gr*R,a[6]=Q*M+pe*N+hr*R,a[7]=le*M+ke*N+ja*R,a[8]=F*U+fe*j+xe*W,a[9]=O*U+ce*j+gr*W,a[10]=Q*U+pe*j+hr*W,a[11]=le*U+ke*j+ja*W,a[12]=Hu,a[13]=Iu,a[14]=Ju,a[15]=Ou,a});function Nf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(Nf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Wf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(Wf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],y=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=y,n[11]=C,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+C*i+r[15],n});S(function(e,r,n){var a=Cc(e,r,eo),t=va(bt(n,a,li),li),i=va(bt(a,t,ui),ui),c=Ef,l=Uf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=tv,Wn=rv,Tc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Wn,e,l,v)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),ro=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ro,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),vi=function(e){return p(ro,S(function(r,n,a){return o(A,T(r,n),a)}),P,e)},zc=1,Gf=2,Mc=0,Se=function(e){return{$:1,a:e}},no=$(function(e,r){return{$:3,a:e,b:r}}),$i=$(function(e,r){return{$:0,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Yf=function(e){return{$:2,a:e}},ie=function(e){return{$:0,a:e}},q={$:1},Hf=Mv,If=qv,Be=ac,kr=$(function(e,r){return o(Pv,e,Pa(r))}),ao=$(function(e,r){return h(o(Lv,e,r))}),Dc=function(e){return o(kr,`
    `,o(ao,`
`,e))},zn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Rr=function(e){return p(zn,$(function(r,n){return n+1}),0,e)},Jf=ov,Of=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Qr=$(function(e,r){return p(Of,e,r,P)}),Ac=$(function(e,r){return p(Jf,e,o(Qr,0,Rr(r)-1),r)}),er=Ev,Bc=function(e){var r=er(e);return 97<=r&&r<=122},Fc=function(e){var r=er(e);return r<=90&&65<=r},qf=function(e){return Bc(e)||Fc(e)},Zf=function(e){var r=er(e);return r<=57&&48<=r},Xf=function(e){return Bc(e)||Fc(e)||Zf(e)},Fe=function(e){return p(zn,A,P,e)},an=Sv,Qf=$(function(e,r){return`

(`+(Be(e+1)+(") "+Dc(Kf(r))))}),Kf=function(e){return o(es,e,P)},es=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var y=b.a,C=y.a,_=y.b;return qf(C)&&o(Hf,Xf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Be(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(kr,"",Fe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Be(Rr(s))+" ways:"));return o(kr,`

`,o(A,g,o(Ac,Qf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(kr,"",Fe(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(kr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return g+(Dc(o(If,4,f))+(`

`+d))}}),Ve=32,gt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=Zu,to=dv,oo=$(function(e,r){return Zo(r)/Zo(e)}),rs=sv,Cn=to(o(oo,2,Ve)),Vc=L(gt,0,Cn,ht,ht),Ec=Qu,Uc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Rc=pv,_t=Xu,rr=$(function(e,r){return I(e,r)>0?e:r}),ns=function(e){return{$:0,a:e}},io=Ku,as=$(function(e,r){e:for(;;){var n=o(io,Ve,e),a=n.a,t=n.b,i=o(A,ns(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),ts=function(e){var r=e.a;return r},os=$(function(e,r){e:for(;;){var n=to(r/Ve);if(n===1)return o(io,Ve,e).a;var a=o(as,e,P),t=n;e=a,r=t;continue e}}),jc=$(function(e,r){if(r.l){var n=r.l*Ve,a=Rc(o(oo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(os,t,r.l);return L(gt,_t(r.p)+n,o(rr,5,a*Cn),i,r.p)}else return L(gt,_t(r.p),Cn,ht,r.p)}),is=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Ve|0,p:t});var i=Uc(p(Ec,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),cs=$(function(e,r){if(e<=0)return Vc;var n=e%Ve,a=p(Ec,n,e-n,r),t=e-n-Ve;return x(is,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Hv,Z=jv,k=Yv,se=Nv,$a=Iv,ls=Jv,De=Rv,co=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Wr("div"),us=function(e){return{$:2,a:e}},Nc=$(function(e,r){return e}),Wc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Ar=function(e){return e},vs=Ar,fi=Ye(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),$s=kv,Dr=Cv,Or=Tv,Mn=$(function(e,r){return e<1?r:p(Or,e,Dr(r),r)}),Ta=Av,za=function(e){return e===""},Ma=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Gc=Bv,si=he(function(e,r,n,a,t){if(za(t)||o($s,"@",t))return q;var i=o(Ta,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Gc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return ie(ye(fi,e,o(Ma,c,t),u,r,n,a))}else return ie(ye(fi,e,t,q,r,n,a))}),mi=E(function(e,r,n,a){if(za(a))return q;var t=o(Ta,"/",a);if(t.b){var i=t.a;return x(si,e,o(Mn,i,a),r,n,o(Ma,i,a))}else return x(si,e,"/",r,n,a)}),di=S(function(e,r,n){if(za(n))return q;var a=o(Ta,"?",n);if(a.b){var t=a.a;return L(mi,e,ie(o(Mn,t+1,n)),r,o(Ma,t,n))}else return L(mi,e,q,r,n)});$(function(e,r){if(za(r))return q;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(di,e,ie(o(Mn,a+1,r)),o(Ma,a,r))}else return p(di,e,q,r)});var fs=Dv,lo=function(e){},kn=Nr,ss=kn(0),Yc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(zn,e,r,Fe(m)):L(Yc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=S(function(e,r,n){return L(Yc,e,r,0,n)}),ne=$(function(e,r){return p(br,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=mt,uo=$(function(e,r){return o(fa,function(n){return kn(e(n))},r)}),ms=S(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return kn(o(e,a,t))},n)},r)}),ds=function(e){return p(br,ms(A),kn(P),e)},ps=t$,bs=$(function(e,r){var n=r;return ic(o(fa,ps(e),n))}),gs=S(function(e,r,n){return o(uo,function(a){return 0},ds(o(ne,bs(e),r)))}),hs=S(function(e,r,n){return kn(0)}),_s=$(function(e,r){var n=r;return o(uo,e,n)});Ke.Task=n$(ss,gs,hs,_s);var ys=lc("Task"),vo=$(function(e,r){return ys(o(uo,e,r))}),Ss=U$,Cs=_v,sa={$:1},Hc=function(e){return{$:2,a:e}},ka={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.B;return r.a},xs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ie(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Ic=function(e){var r=e.b;return o(Ne,ka,r)},sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ws=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Ic(n):n;case 2:var i=a.a.cX;return(I(i+r.eJ,tn(n).db)>0?o(te,xs,sr(o(Ne,sa,t))):Ar)(o(Ne,Hc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Wc,l.eA,Xe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,ka,{B:T(v,s),ab:P,T:o(A,t.B,t.T)})}}),Jc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ls=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Ps=$(function(e,r){return Fe(p(Ls,e,r,P))}),Oc=S(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,y=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Ps,r-4,y))))):o(A,_,o(A,c,o(A,s,o(A,b,p(Oc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var C=a.b,_=C.a;return h([_])}}),Ts=$(function(e,r){return p(Oc,0,e,r)}),zs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(h([a]),t)),c=o(Ts,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var m=s.a,d=s.b;return o(Ne,sa,{B:m,ab:P,T:d})}else return r}}),Ms=function(e){var r=e.b;return o(Ne,sa,r)},ks=function(e){var r=e.b;return o(Ne,Hc({cX:tn(e).db}),r)},Ds=$(function(e,r){switch(e.$){case 1:return Ms(r);case 2:return Ic(r);case 3:return ks(r);default:var n=e.a;return o(zs,n,r)}}),qc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),As=$(function(e,r){return Xe(r,{av:e(r.av)})}),Bs=function(e){return{$:3,a:e}},Zc=function(e){return{$:2,a:e}},Xc=$(function(e,r){return{$:0,a:e,b:r}}),Fs=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return q;var n=r.a;return ie(e(n))}),X=function(e){return e<0?-e:e},$o=Fv,Vs=S(function(e,r,n){return o(sr,0/0,$o(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Es=wv,Kc=function(e){return p(Es,A,P,e)},Us=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Kc(r));return ve(e&&n?"-":"",r)}),oe=ac,yt=yv,el=Uv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",rl(t))}else{var i=er(r);return i>=48&&i<57?o(yt,el(i+1),n):"0"}},St=mv,Rs=hv,Da=function(e){return o(yt,e,"")},nl=S(function(e,r,n){return e<=0?n:p(nl,e>>1,ve(r,r),e&1?ve(n,r):n)}),xn=$(function(e,r){return p(nl,e,r,"")}),Ct=S(function(e,r,n){return ve(n,o(xn,e-Dr(n),Da(r)))}),xt=xv,al=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},js=function(e){var r=o(ao,"e",oe(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(sr,0,Gc(o(fs,"+",t)?o(Mn,1,t):t)),c=al(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(sr,"0",o(Te,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Te,qc(Da),an(ve(o(xn,X(i),"0"),v))))):p(Ct,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ns=S(function(e,r,n){if(St(n)||Rs(n))return oe(n);var a=n<0,t=al(js(X(n))),i=t.a,c=t.b,l=Dr(i)+r,u=ve(o(xn,-l+1,"0"),p(Ct,l,"0",ve(i,c))),v=Dr(u),s=o(rr,1,l),m=o(e,a,p(Or,s,v,u)),d=p(Or,0,s,u),f=m?xt(o(sr,"1",o(Te,rl,an(xt(d))))):d,g=Dr(f),b=f==="0"?f:r<=0?ve(f,o(xn,X(r),"0")):I(r,Dr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):ve(i+".",p(Ct,r,"0",c));return o(Us,a,b)}),tl=Ns($(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Ws=Vs(tl),Gs=S(function(e,r,n){var a=o(oo,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ws,t,n)}),ol=av,Aa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ol,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ie(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Kr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return x(Y,0,r,n,x(Y,1,v,s,m,d),x(Y,1,i,c,l,u))}else return x(Y,e,i,c,x(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,y=f.d,C=f.e,d=a.e;return x(Y,0,v,s,x(Y,1,g,b,y,C),x(Y,1,r,n,d,t))}else return x(Y,e,r,n,a,t)}),wt=S(function(e,r,n){if(n.$===-2)return x(Y,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ol,e,t);switch(u){case 0:return x(Kr,a,t,i,p(wt,e,r,c),l);case 1:return x(Y,a,t,r,c,l);default:return x(Kr,a,t,i,c,p(wt,e,r,l))}}),bn=S(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return x(Y,1,t,i,c,l)}else{var u=a;return u}}),Ys=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,y=d.e,C=v.e;return x(Y,0,f,g,x(Y,1,n,a,x(Y,0,i,c,l,u),b),x(Y,1,s,m,y,C))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,C=w.e;return x(Y,1,n,a,x(Y,0,i,c,l,u),x(Y,0,s,m,d,C))}else return e},pi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,y=f.d,C=f.e;return x(Y,0,i,c,x(Y,1,u,v,s,m),x(Y,1,n,a,d,x(Y,0,g,b,y,C)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,y=M.d,C=M.e;return x(Y,1,n,a,x(Y,0,i,c,w,d),x(Y,0,g,b,y,C))}else return e},Hs=wa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return x(Y,n,l,u,v,x(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,pi(r)}else break e;else return c.a,c.d,pi(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(Y,r,n,a,ea(t),l);var u=il(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return x(Kr,v,s,m,ea(d),f)}else return tr}else return x(Y,r,n,a,ea(t),l)}else return tr},gn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(Y,n,a,t,o(gn,e,i),c);var u=il(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return x(Kr,v,s,m,o(gn,e,d),f)}else return tr}else return x(Y,n,a,t,o(gn,e,i),c);else return o(Is,e,Gt(Hs,e,r,n,a,t,i,c))}),Is=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Sr(e,a)){var l=Ys(c);if(l.$===-1){var u=l.b,v=l.c;return x(Kr,n,u,v,i,ea(c))}else return tr}else return x(Kr,n,a,t,i,o(gn,e,c))}else return tr}),Js=$(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return x(Y,1,a,t,i,c)}else{var l=n;return l}}),Gn=S(function(e,r,n){var a=r(o(Aa,e,n));if(a.$)return o(Js,e,n);var t=a.a;return p(bn,e,t,n)}),Os=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Gn,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Fs,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Gn,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Xc,T(i,c),p(Gs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Gn,r,Te(function(a){return a.$===3?Bs(n):a}));default:var r=e.a,n=e.b;return o(Gn,r,Te(function(a){return a.$===2?Zc(n):a}))}},qs=function(e){return As(Os(e))},Zs=$(function(e,r){return o(ne,qs(e),r)}),Xs=$(function(e,r){return Xe(r,{eA:o(Zs,e,r.eA)})}),Qs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Xe(a,{B:o(qc,Xs(e),a.B)}))}),Ks=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),em=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Xe(t,{B:o(Ks,o(e,i.a,r),i)}))}),rm=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Xe(a,{aL:!a.aL});case 2:var t=n.a;return Xe(a,{G:p(ws,e,t,a.G)});case 3:var i=n.a;return Xe(a,{G:o(Qs,i,a.G)});case 4:var c=n.a;return Xe(a,{G:p(em,r,c,a.G)});default:var l=n.a;return Xe(a,{G:o(Ds,l,a.G)})}}),nm=$(function(e,r){return o(Ne,ka,{B:T(e,r(e)),ab:P,T:P})}),am=o$,bi=am(P),ma=Gv,wn=Wv,tm=v$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ma(wn)))},o(k,"left",Z))},o(k,"pressedKeys",ma(wn)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),om=function(e){return{$:4,a:e}},im={$:0},cm=oc,He=$(function(e,r){return o($c,e,cm(r))}),H=He("className"),lm=function(e){var r=e.b.B;return r.b},da=He("id"),um=p$,pa=um,vm=b$,re=vm,$m={$:1},fm=function(e){return{$:3,a:e}},sm=function(e){return{$:5,a:e}},gi=Wr("a"),fo=Wr("button"),hi=function(e){return o(He,"href",_$(e))},mm=Lr("clip-rule"),we=Lr("d"),dm=Lr("fill"),cl=uc("http://www.w3.org/2000/svg"),pm=cl("svg"),bm=Lr("viewBox"),gm=o(g$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=pm(h([bm("0 0 24 24"),dm("currentColor"),o(re,"width","100%"),o(re,"height","100%"),gm("http://www.w3.org/2000/svg")])),hm=Lr("fill-rule"),Le=cl("path"),Br={eD:Ee(h([o(Le,h([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(h([o(Le,h([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(h([o(Le,h([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(h([o(Le,h([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(h([o(Le,h([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(h([o(Le,h([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(h([o(Le,h([we("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(h([o(Le,h([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(h([o(Le,h([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(h([o(Le,h([hm("evenodd"),mm("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(h([o(Le,h([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(h([o(Le,h([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},_m=function(e){return{$:0,a:e}},ll=vc,ul=$(function(e,r){return o(ll,e,_m(r))}),so=function(e){return o(ul,"click",De(e))},_i=He("target"),ym=He("title"),Lt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return x(Y,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),Sm=dt,mr=Sm,Cm=function(e){return p(ro,S(function(r,n,a){return o(A,n,a)}),P,e)},xm=$(function(e,r){return{$:3,a:e,b:r}}),wm=$(function(e,r){return{$:2,a:e,b:r}}),Lm=$(function(e,r){return{$:0,a:e,b:r}}),Pm=$(function(e,r){return{$:1,a:e,b:r}}),Dn=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mo=L(Dn,0/255,0/255,0/255,1),Tm=oc,vl=$(function(e,r){return o($c,e,Tm(r))}),zm=vl("checked"),Oe=bv,Mm=S(function(e,r,n){return ve(o(xn,e-Dr(n),Da(r)),n)}),ba=cv,$l=function(e){var r=function(n){return n<10?Be(n):Da(el(87+n))};return e<16?r(e):ve($l(e/16|0),r(o(ba,16,e)))},km=o(te,$l,o(Mm,2,"0")),po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Dm=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return o(kr,"",o(A,"#",o(ne,o(te,Oe,km),h([n*255,a*255,t*255]))))},Pt=He("htmlFor"),Am=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Bm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ba=$(function(e,r){return p(br,Bm(e),P,r)}),fl=E(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Fm=G$,Vm=Vv,Em=$(function(e,r){if(r.$)return Se(e);var n=r.a;return $e(n)}),Um=W$,Rm=function(e){return o(Um,{ew:!1,fg:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return q},jm=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return $e(e(n))}}),Nm=function(e){return{$:2,a:e}},Wm=function(e){return{$:0,a:e}},Gm=function(e){return{$:1,a:e}},Ga=$(function(e,r){return er(r)-er(e)}),Ya=S(function(e,r,n){var a=er(n);return I(er(e),a)<1&&I(a,er(r))<1}),Ym=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):Se(Gm(r))},a=p(Ya,"0","9",r)?$e(o(Ga,"0",r)):p(Ya,"a","z",r)?$e(10+o(Ga,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Ga,"A",r)):Se(Wm(r));return o(ga,n,a)}),sl=$(function(e,r){var n=an(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(sl,e,i))},o(Ym,e,t))}),Hm=$(function(e,r){return 2<=e&&e<=36?o(sl,e,xt(r)):Se(Nm(e))}),Im=Hm(16),Jm=S(function(e,r,n){return L(Dn,e,r,n,1)}),Om=E(function(e,r,n,a){return L(Dn,e,r,n,a)}),An=iv,qm=$(function(e,r){var n=o(An,10,e);return Oe(r*n)/n}),Zm=zv,Xm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Kc(n);if(a.b&&!a.b.b){var t=a.a;return Vm(h([t,t]))}else return n};return o(te,Zm,o(te,function(n){return o(Te,function(a){return p(Fm,1,a,n)},Rm(e))},o(te,Am(Fa),o(te,Te(function(n){return n.fG}),o(te,Te(Ba(Ar)),o(te,Em("Parsing hex regex failed"),ga(function(n){var a=o(ne,o(te,r,o(te,Im,jm(rs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(Om,t/255,c/255,u/255,o(qm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Jm,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),ha=Wr("input"),Tt=Wr("label"),zt=He("name"),ml=$(function(e,r){return p(br,k,r,e)}),Qm=o(ml,h(["target","checked"]),Z),Km=function(e){return o(ul,"change",o($a,e,Qm))},ed=function(e){return T(e,!0)},rd=function(e){return{$:1,a:e}},nd=$(function(e,r){return o(ll,e,rd(r))}),ad=o(ml,h(["target","value"]),wn),bo=function(e){return o(nd,"input",o($a,ed,o($a,e,ad)))},dl=He("max"),pl=He("min"),bl=function(e){return o(He,"step",e)},_a=He("type"),go=He("value"),yi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(J,P,h([o(Tt,h([Pt(r)]),h([o(J,h([H("relative w-full")]),h([o(J,h([H("inline-block")]),h([mr(r)])),o(J,h([H("inline-block float-right")]),h([mr(oe(n))]))]))])),o(ha,h([_a("range"),o(re,"width","100%"),da(r),zt(r),pl(oe(a)),dl(oe(t)),go(oe(n)),bl(oe(i)),bo(o(te,$o,o(te,sr(42),c)))]),P)]))},td=$(function(e,r){if(r.$)return e;var n=r.a;return n}),od=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([H("h-12 py-4")]),h([o(Tt,h([H("block"),Pt(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),da(e),zt(e),Km(xm(e)),zm(c)]),P),mr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return yi({cf:e,cr:i,cv:t,cz:Lm(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return yi({cf:e,cr:i,cv:t,cz:o(te,Oe,Pm(e)),cV:1,c0:c});default:var c=r.a;return o(J,P,h([o(J,h([o(re,"margin-bottom","6px")]),h([o(Tt,h([Pt(e)]),h([mr(e)]))])),o(ha,h([_a("color"),o(re,"width","100%"),o(re,"height","26px"),o(re,"padding","0px"),da(e),zt(e),bo(function(l){return o(wm,e,o(td,mo,Xm(l)))}),go(Dm(c))]),P)]))}}),id=function(e){return o(J,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([H("text-lg pb-2")]),h([mr(e.fh)])),o(J,h([H("pl-2 pr-2")]),Cm(o(Lt,od,e.av)))]))},cd=function(e){return o(J,h([H("text-xs text-white60")]),o(ne,id,e))},ld=function(e){return o(J,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([mr("clock: "+o(tl,3,tn(e).db))]))},ud=function(e){e.a;var r=e.b.T;return o(Te,function(n){return Oe(60/(tn(e).db-n))},o(Te,o(te,ts,function(n){return n.db}),Fa(o(Jc,59,r))))},vd=function(e){return o(J,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ud(e);if(r.$===1)return h([mr("... Fps")]);var n=r.a;return h([mr(Be(n)+" Fps")])}())},$d=function(e){return{$:0,a:e}},fd=function(e){var r=e.b.T;return Rr(r)},sd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Rr(r)+1+Rr(n)},md=function(e){return o(ha,h([H("absolute w-full"),_a("range"),pl(Be(0)),dl(Be(sd(e)-1)),go(Be(fd(e))),bl(Be(1)),bo(o(te,$o,o(te,sr(42),o(te,Oe,$d))))]),P)},Si={$:1},Ci={$:3},xi={$:2},Mt=function(e){return!e.b},gl=vl("disabled"),Ha=S(function(e,r,n){return o(fo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),gl(e),so(r)]),h([mr("REC")]))}),Ia=S(function(e,r,n){return o(fo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),gl(e),so(n)]),h([o(J,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),dd=function(e){var r=e.a,n=e.b.ab;return o(J,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ha,!1,Si,"text-red-500 font-bold");case 1:return p(Ha,!1,xi,"text-white60 hover:text-white80 font-bold");default:return p(Ha,!0,xi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ia,Mt(n),Br.fq,Ci);case 1:return p(Ia,Mt(n),Br.fq,Ci);default:return p(Ia,!1,Br.fp,Si)}}()]))},pd=function(e){return o(J,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([md(e),dd(e),vd(e),ld(e)]))},bd=function(e){var r=e.a;return Sr(r,ka)},gd=$(function(e,r){var n=bd(r.G)?o(J,P,P):o(J,h([H("absolute pointer-events-none w-8 h-8"),o(re,"left",oe(e.fs.fU+.5*e.cS.fS)+"px"),o(re,"top",oe(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(J,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Br.fs]))]));return o(J,P,h([n]))}),hd=$(function(e,r){var n=o(fo,h([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),so($m),ym("Distraction Free Mode")]),h([Br.f0])),a=40,t=260,i=o(J,h([H("absolute w-8 bottom-12")]),h([o(gi,h([H("text-twitterBlue40 hover:text-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),_i("_blank")]),h([Br.fN]))])),c=80,l=o(J,h([H("absolute w-8 bottom-2")]),h([o(gi,h([H("text-githubCat40 hover:text-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),_i("_blank")]),h([Br.eQ]))])),u=e.cS.fS>640?B(e.cS.eW,a+t,e.cS.fS-(a+t)):B(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(J,h([H("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(re,"width",oe(a)+"px")]),h([n,i,l])),o(J,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(re,"width",oe(t)+"px"),o(re,"height",oe(v)+"px")]),h([o(pa,fm,cd(tn(r.G).eA))])),o(J,h([H("absolute bottom-0"),o(re,"left",oe(s)+"px"),o(re,"height",oe(c)+"px"),o(re,"width",oe(m)+"px")]),h([o(pa,sm,pd(r.G))])),o(gd,e,r)]))}),_d=S(function(e,r,n){var a=lm(n.G),t=tn(n.G);return o(J,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(re,"width",oe(t.cS.fS)+"px"),o(re,"height",oe(t.cS.eW)+"px")]),h([o(J,h([H("fixed")]),h([o(pa,Nc(im),o(e,t,a))])),o(J,h([da("gui")]),h([o(hd,t,n),o(pa,om,o(r,t,a))]))]))}),yd=Ye(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(rm,r,i,u,v),bi)}),l=function(u){var v=o(Wc,n,u.e1);return T({aL:u.e1.cS.fS<500,G:o(nm,v,a)},bi)};return Ss({e0:l,fH:Nc(tm(us)),fO:c,fQ:o(_d,e,t)})}),Sd=E(function(e,r,n,a){return ye(yd,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),Cd=function(e){return{}},xd=$(function(e,r){return T(e,Zc(r))}),wd=S(function(e,r,n){return{av:n,e5:r,fh:e}}),hl=tr,Ld=function(e){return p(zn,$(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),hl,e)},Pd=S(function(e,r,n){return p(wd,e,r,Ld(n))}),Ja=Pd,Yn=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(Xc,T(a,t),n))}),Td=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(Dn,f,d,m,a)}),zd=S(function(e,r,n){return L(Td,e,r,n,1)}),nr=lv,Md=h([p(Ja,"Camera",!0,h([p(Yn,"camera distance",T(3,8),8),p(Yn,"camera azimuth",T(0,2*nr),0),p(Yn,"camera elevation",T(-nr/2,nr/2),.5)])),p(Ja,"Color",!0,h([o(xd,"cube color",p(zd,0,.36,.5))])),p(Ja,"Time",!0,h([p(Yn,"period",T(.1,5),.7)]))]),kd=$(function(e,r){return r}),Dd=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(Aa,e,r.av))}),Ad=$(function(e,r){return o(sr,0,Fa(o(Ba,Dd(e),r)))}),Bd=$(function(e,r){return o(Ad,e,r.eA)}),ra=Bd,Fd=fv,Vd=function(e){return e},yr=function(e){return e},kt=function(e){var r=e;return-r},Ed=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),_l=function(e){var r=e;return r.c3},yl=function(e){var r=e;return r.c4},Ud=function(e){return o(Ed,_l(e),yl(e))},Gr=function(e){var r=e;return r.cA},jr=uv,en=vv,Oa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=en(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,g=s.fY*u,b=l*g,y=m*g,C=g*g,_=1-2*(f+C),w=s.c5*u,M=l*w,N=2*(y-M),R=2*(y+M),U=m*w,j=2*(U+b),W=2*(U-b),F=g*w,O=2*(F-d),Q=2*(F+d),le=w*w,fe=1-2*(C+le),ce=1-2*(f+le);return{fU:fe*i.fU+N*i.fY+j*i.c5,fY:R*i.fU+ce*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),Rd=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=jr(c),u=en(c),v=a.cA,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,y=b.fU*u,C=l*y,_=y*y,w=b.fY*u,M=l*w,N=y*w,R=w*w,U=1-2*(_+R),j=b.c5*u,W=l*j,F=2*(N-W),O=2*(N+W),Q=y*j,le=2*(Q+M),fe=2*(Q-M),ce=w*j,pe=2*(ce-C),ke=2*(ce+C),xe=j*j,gr=1-2*(R+xe),hr=1-2*(_+xe);return{fU:s.fU+gr*m+F*d+le*f,fY:s.fY+O*m+hr*d+pe*f,c5:s.c5+fe*m+ke*d+U*f}}),dr=function(e){return e},Pr=function(e){var r=e;return r.c3},Tr=function(e){var r=e;return r.c4},zr=function(e){var r=e;return r.c6},jd=S(function(e,r,n){return dr({cA:p(Rd,e,r,Gr(n)),c3:p(Oa,e,r,Pr(n)),c4:p(Oa,e,r,Tr(n)),c6:p(Oa,e,r,zr(n))})}),wi=S(function(e,r,n){return p(jd,e(n),r,n)}),ho=function(e){var r=e;return r.eH},Bn=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),Sl=$(function(e,r){return dr({cA:o(Bn,e,Gr(r)),c3:Pr(r),c4:Tr(r),c6:zr(r)})}),Nd=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Wd=S(function(e,r,n){return o(Sl,o(Nd,r,e),n)}),Gd=S(function(e,r,n){return p(Wd,ho(e(n)),r,n)}),Fn=$(function(e,r){return{eH:r,cA:e}}),Yd=function(e){var r=e;return o(Fn,r.cA,r.c3)},Hd=function(e){var r=e;return o(Fn,r.cA,r.c4)},Id=function(e){var r=e;return o(Fn,r.cA,r.c6)},Jd=function(e){var r=dr({cA:e.aR,c3:yl(e.dl),c4:Ud(e.dl),c6:_l(e.dl)}),n=p(Gd,Id,e.cb,p(wi,Yd,kt(e.bC),p(wi,Hd,e.bx,r)));return n},Od=function(e){return{$:0,a:e}},de=function(e){var r=e;return X(r)},na=function(e){var r=e;return .5*r},qd=$v,Zd=function(e){var r=e;return qd(r)},Xd=function(e){var r=na(de(e.ej)),n=Zd(r);return{cL:Od(n),c1:e.c1}},Fr=function(e){return e},cr={fU:0,fY:0,c5:0},Cl=Ar,vr=function(e){return e},xl=vr({fU:1,fY:0,c5:0}),_o=xl,yo=vr({fU:0,fY:0,c5:1}),So=yo,Qd=Cl({cA:cr,c3:So,c4:_o}),Kd=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Xd({ej:Fr(2*Fd(.5)),c1:Jd({bx:Fr(n),cb:yr(t),bC:Fr(a),aR:Vd(r),dl:Qd})})},e0=function(e){return Kd({bx:o(ra,"camera azimuth",e),cb:o(ra,"camera distance",e),bC:o(ra,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},Li=function(e){return e*nr/180},Co=$(function(e,r){return{$:0,a:e,b:r}}),wl=$(function(e,r){return{$:2,a:e,b:r}}),Ll=function(e){return{$:5,a:e}},Pl=$(function(e,r){return{$:4,a:e,b:r}}),Tl=$(function(e,r){return{$:3,a:e,b:r}}),zl=$(function(e,r){return{$:1,a:e,b:r}}),r0=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),n0=function(e){var r=e;return r},xo=function(e){var r=e;return n0(r.er)},wo=function(e){var r=e;return r.aK},a0=$(function(e,r){return{er:o(Sl,e,xo(r)),aK:wo(r)}}),t0=$(function(e,r){var n=r;return o(Fn,o(Bn,e,n.cA),n.eH)}),o0=$(function(e,r){var n=r;return{k:o(t0,e,n.k),e9:n.e9,fu:n.fu}}),Lo=function(e){var r=e;return r},i0=function(e){return e},Ml=$(function(e,r){var n=Lo(r),a=n.a,t=n.b;return i0(T(e(a),e(t)))}),c0=$(function(e,r){return o(Ml,Bn(e),r)}),Po=function(e){var r=e;return r.ey},To=function(e){var r=e;return r.fu},kl=$(function(e,r){return{ey:r,fu:de(e)}}),l0=$(function(e,r){return o(kl,To(r),o(Bn,e,Po(r)))}),Dl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),u0=$(function(e,r){return o(Dl,Bn(e),r)}),Al=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(r0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Co,s,o(a0,i,c));case 1:var s=r.a,l=r.b;return o(zl,s,o(u0,i,l));case 3:var s=r.a,u=r.b;return o(Tl,s,o(l0,i,u));case 2:var s=r.a,v=r.b;return o(wl,s,o(o0,i,v));case 4:var s=r.a,m=r.b;return o(Pl,s,o(c0,i,m));default:var d=r.a;return Ll(o(ne,Al(B(n,a,t)),d))}}),Pi=function(e){return Al(B(e,0,0))},qa=function(e){return e/255},v0=S(function(e,r,n){return L(Dn,qa(e),qa(r),qa(n),1)}),$0=function(e){return e},f0=function(e){return yr(.01*e)},Ti=function(e){return e},s0=function(e){return e},m0=function(e){return{$:0,a:e}},d0=m0,p0={$:3},b0=p0,g0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),h0=g0,_0=$(function(e,r){return r.b?p(br,A,r,e):e}),We=function(e){return p(br,_0,P,e)},zo=$(function(e,r){return We(o(ne,e,r))}),y0=function(e){return{$:1,a:e}},S0=y0,C0=function(e){return o(Lr,"height",Be(e))},x0=function(e){return m$(h$(e))},w0=x0,L0=function(e){return{$:2,a:e}},P0=L0,T0=function(e){return o(kr,"",e)},z0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return T0(h(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},M0=$(function(e,r){switch(r.$){case 0:return o(bf,e,r);case 1:return o(gf,e,r);case 2:return o(hf,e,r);case 3:return o(_f,e,r);case 4:return o(yf,e,r);default:return o(Sf,e,r)}}),k0=$(function(e,r){switch(r.$){case 0:return o(I$,e,r);case 1:return o(J$,e,r);case 2:return o(O$,e,r);case 3:return o(q$,e,r);case 4:return o(Z$,e,r);case 5:return o(X$,e,r);case 6:return o(Q$,e,r);case 7:return o(K$,e,r);default:return ef(e)}}),D0=S(function(e,r,n){return p(pf,e,r,n)}),zi=function(e){var r=e;return r},on=Af,Za=L(on,1,1,1,1),qe=S(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),A0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),B0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(A0,n*a/t,n,n*(1-a-t)/t)}),Vn=Pf,F0=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Mo=$(function(e,r){return F0(o(B0,e,r))}),Bl=$(function(e,r){return{dp:Sr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=Rf,V0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Xa=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return ye(t,e,c,V0(a),a.dp,r,n)}),Fl=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Bl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(A,x(Xa,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,C=o(A,x(Xa,e,r,n,a,y),i.U);return{M:i.M,U:C,fB:i.fB};case 2:var _=t.a,w=o(A,x(Xa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(zn,L(Fl,e,r,n,a),i,M)}}),E0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Vl=E0,ko=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),U0=function(e){var r=e.Z,n=e.W,a=e.V;return L(ko,518,r,n,a)},R0=$(function(e,r){return{$:6,a:e,b:r}}),j0=R0,El=h([U0({V:1,W:0,Z:!1}),L(Vl,!1,!1,!1,!1),o(j0,0,1)]),rn=519,Do=8,Ul=15,Zr=7681,N0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=H$,W0=$(function(e,r){return{$:0,a:e,b:r}}),G0=W0({df:1,$7:0,dV:5}),Ae=wf,Y0=G0(h([{bT:o(Ae,-1,-1)},{bT:o(Ae,1,-1)},{bT:o(Ae,-1,1)},{bT:o(Ae,1,1)}])),H0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},I0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ao=S(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(I0,a,t,i)))}),Bo=function(e){return p(Ao,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return x(ae,h([Bo(e),L(Vl,!1,!1,!1,!1)]),H0,N0,Y0,{})},J0=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:Ul,bt:Zr,bu:Zr}),O0=516,Mi=5386,Ce=7680,q0=function(e){return o(An,2,e+4)},Rl=function(e){return Fo({a8:Ce,co:Ul,cN:Do,bl:O0,c2:q0(e),bt:Mi,bu:Mi})},Z0=S(function(e,r,n){return We(h([p(qe,e,n,El),h([Rl(r),J0])]))}),X0=$(function(e,r){return We(o(Ac,Z0(e),r))}),Q0=function(e){var r=e.Z,n=e.W,a=e.V;return L(ko,513,r,n,a)},K0=Q0({V:1,W:0,Z:!0}),ep=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},rp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return ep(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},np=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ki=$(function(e,r){var n=e,a=r;return p(np,32774,n,a)}),ap=1,Di=771,tp=770,Vo=rp({bv:0,aH:o(ki,ap,Di),by:0,bA:o(ki,tp,Di),bF:0,bV:0}),Yr=h([K0,Vo]),op=function(e){var r=e;return r.dO},ip=function(e){var r=e;return r.dP},jl=function(e){var r=e;return r.dQ},cp=function(e){var r=e;return r.dR},lp=function(e){var r=e;return r.dS},Nl=function(e){var r=e;return r.dT},$r=$(function(e,r){var n=e,a=r;return a-n}),Wl=function(e){return B(o($r,cp(e),op(e)),o($r,lp(e),ip(e)),o($r,Nl(e),jl(e)))},Ai=function(e){var r=e;return Gr(r)},up=function(e){return e},vp=function(e){return dr({cA:up({fU:e.H,fY:e.I,c5:e.J}),c3:vr({fU:e.q,fY:e.r,c5:e.s}),c4:vr({fU:e.t,fY:e.u,c5:e.v}),c6:vr({fU:e.w,fY:e.x,c5:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Gl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Yl=$(function(e,r){return{cA:o(Gl,e,Gr(r)),c3:o(Qa,e,Pr(r)),c4:o(Qa,e,Tr(r)),c6:o(Qa,e,zr(r))}}),Dt=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),ya=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(rr,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),$p=$(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},fp=function(e){var r=e;return B(r.fU,r.fY,r.c5)},hn=$(function(e,r){var n=e,a=r;return a+n}),sp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(de(a)),c=na(de(n)),l=na(de(t)),u=fp(r),v=u.a,s=u.b,m=u.c;return{dO:o(hn,c,v),dP:o(hn,i,s),dQ:o(hn,l,m),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,m)}}),Bi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=Ge(zr(e)),d=X(l*m.fU)+X(c*m.fY)+X(i*m.c5),f=Ge(Tr(e)),g=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Pr(e)),y=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),C=o(sp,B(y,g,d),o(Gl,e,p(Dt,s,v,u)));if(a.$)return ie(C);var _=a.a;return ie(o($p,_,C))}),At=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 1:var c=t.a,l=L(Bi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 2:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 3:var c=t.a,l=L(Bi,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 4:var u=t.a,f=e,g=r,b=L(At,e,r,n,u),y=i;e=f,r=g,n=b,a=y;continue e;default:var v=t.a,s=t.b,m=o(Yl,vp(v),e),d=r*v.bX,f=e,g=r,b=L(At,m,d,n,h([s])),y=i;e=f,r=g,n=b,a=y;continue e}}else return n}),cn=Tf,ln=zf,un=Mf,Hl=function(e){return{$:4,a:e}},mp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Hl(o(mp,e,P))},dp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},pp=function(e){var r=e;return r},Fi=Fo({a8:Zr,co:0,cN:Do,bl:rn,c2:255,bt:Zr,bu:Zr}),qr=gv,lr=0,bp=function(e){var r=e,n=o(rr,X(r.fU),o(rr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=qr(i*i+t*t+a*a);return c*n}else return lr},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Re=$(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),mn=T({bd:o(Re,Pe,Pe),bK:o(Re,Pe,Pe),bL:o(Re,Pe,Pe),bM:o(Re,Pe,Pe)},L(on,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Il=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return L(ko,515,r,n,a)},Ol=240,gp=h([Jl({V:1,W:0,Z:!0}),Bo({a8:Ce,co:Ol,cN:0,bl:Il,c2:0,bt:Ce,bu:Ce}),Vo]),hp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cL;if(s.$){var d=s.a;return St(v)?Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return St(v)?Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Hn=$(function(e,r){return(1&e>>r)===1?0:1}),_p=function(e){return h([Jl({V:1,W:0,Z:!0}),Bo({a8:Ce,co:Ol,cN:e,bl:Il,c2:0,bt:Ce,bu:Ce}),Vo])},yp=S(function(e,r,n){return We(o(ne,function(a){var t=a<<4,i=L(on,o(Hn,a,0),o(Hn,a,1),o(Hn,a,2),o(Hn,a,3));return p(qe,e,T(r,i),_p(t))},o(Qr,1,o(An,2,n)-1)))}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Xr=function(e){var r=e;return r},Sp=jf,Vi=function(e){var r=e;return fr(zr(r))},ql=vr({fU:0,fY:1,c5:0}),Zl=ql,Cp={cA:cr,c3:_o,c4:Zl,c6:So},Va=function(e){var r=e;return r},xp=function(e){var r=Va(Gr(e)),n=Ge(zr(e)),a=Ge(Tr(e)),t=Ge(Pr(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},wp=$(function(e,r){var n=r;return xp(o(Yl,n,e))}),Lp=function(e){return o(wp,Cp,e)},Pp=function(e){var r=e;return r.c1},Tp=function(e){var r=e;return Pr(r)},zp=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Mp=function(e){var r=e;return Tr(r)},kp=function(e){var r=Pp(e.ev),n=dr({cA:Ai(r),c3:Tp(r),c4:Mp(r),c6:fr(Vi(r))}),a=En(e.aP),t=a,i=L(At,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Lp(r),u=o(K,.99,o(ue,de(e.aJ),kt(jl(c)))),v=Wl(c),s=v.a,m=v.b,d=v.c,f=bp(p(zp,s,m,d)),g=o(K,1.01,o(hn,f,kt(Nl(c)))),b=o(hp,e.ev,{eq:e.eq,eP:g,fi:u}),y=Sp(b).dM,C=y?Ge(fr(Vi(r))):Xr(Ai(r)),_=function(){var ce=e.bZ;switch(ce.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var pe=ce.a;return T(3,pe);case 4:var pe=ce.a;return T(4,pe);default:return T(5,0)}}(),w=_.a,M=_.b,N=e.bD,R=N,U=o(Mo,R,e.b$),j=U,W=Qe({dx:0,dy:C.fU,dz:cn(j),dA:e.ec,dB:0,dC:C.fY,dD:ln(j),dE:pp(f),dF:0,dG:C.c5,dH:un(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),F=ye(Fl,W,l,b,dp,t,{M:P,U:P,fB:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(h([p(qe,F.M,T(Q,Za),Yr),p(qe,F.U,mn,Yr)]));case 1:var Q=O.a;return We(h([p(qe,F.M,mn,Yr),h([Fi]),p(qe,F.fB,Q.bd,El),h([Rl(0)]),p(qe,F.M,T(Q,Za),gp),p(qe,F.U,mn,Yr)]));default:var le=O.a,fe=O.b;return We(h([p(qe,F.M,T(fe,Za),Yr),h([Fi]),o(X0,F.fB,le),p(yp,F.M,fe,Rr(le)),p(qe,F.U,mn,Yr)]))}},Dp=function(e){return o(Lr,"width",Be(e))},Ap=$(function(e,r){var n=h([S0(1),P0(0),d0(!0),L(h0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return B(n,"0",1);case 1:return B(o(A,b0,n),"1",1);default:var M=w.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=zi(v),m=o(re,"height",Be(s)+"px"),d=zi(u),f=d/s,g=o(zo,function(w){return kp({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(re,"width",Be(d)+"px"),y=e.aI,C=y,_=z0(C);return p(w0,"div",h([o(re,"padding","0px"),b,m]),h([T(i,p(D0,t,h([Dp(Oe(d*c)),C0(Oe(s*c)),b,m,o(re,"display","block"),o(re,"background-color",_)]),g))]))}),Bp=function(e){return o(Ap,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Xl=function(e){return e},Ei=Xl({fU:.31271,fY:.32902}),Fp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Mo,r.cd,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cJ:0,bV:cn(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Vp=function(e){return e},Ep=function(e){return Vp(1.2*o(An,2,e))},Ka=function(e){return e},Up={$:0},Rp=Up,Ql=function(e){return e},jp=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Ui=function(e){var r=e;return r},Np=function(e){e:for(;;){if(Sr(e.e2,lr)&&Sr(e.e3,lr))return Pe;if(o(jp,de(e.e2),de(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(Ui(e.e3)/nr),a=X(Ui(e.e2)/nr),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Mo,Ql(1),e.b6),v=u;return{by:a*un(v),ex:!1,bF:a*ln(v),cJ:n/a,bV:a*cn(v),cZ:3,fU:i,fY:c,c5:l}}}},Ri=function(e){return Np({b6:e.b6,e2:e.cd,e3:lr,ei:e.ei})},Kl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Wp=function(e){var r=e;return r},eu=function(e){var r=p(Kl,1667,25e3,Wp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Xl({fU:n,fY:a})},ru=function(e){return e},Gp=eu(ru(12e3)),Yp=eu(ru(5600)),Hp=function(e){return{$:2,a:e}},Ip=function(e){return Hp(e)},Jp=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},In=function(e){var r=e;return r},Op=function(e){var r=e;return r.ex},qp=nu(mn.a),Zp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(A,a,i),c):T(i,o(A,a,c))});return p(br,n,T(P,P),r)}),Xp=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Qp=ee(function(e,r,n,a,t,i,c,l){var u=o(Zp,Op,h([In(e),In(r),In(n),In(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,y=b.a,C=b.b,_=C.a;return o(Jp,o(ne,Xp,v),{bd:o(Re,d,g),bK:o(Re,y,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return qp}else return nu({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),Kp=S(function(e,r,n){return La(Qp,e,r,n,Pe,Pe,Pe,Pe,Pe)}),e1=function(e){var r=o(Fp,s0(e.fB),{b6:Yp,eH:e.fJ,cd:Ka(8e4)}),n=Ri({b6:Gp,cd:Ka(2e4),ei:e.ei}),a=Ri({b6:Ei,cd:Ka(15e3),ei:fr(e.ei)}),t=p(Kp,r,n,a);return Bp({b0:Ip(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Ep(15),bJ:t,bZ:Rp,b$:Ei})},au=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),r1=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),n1=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),a1=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),t1=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(t1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(r1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(a1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(n1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Uo={$:0},o1=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),g=o(ue,s.dP,a),b=o(me,s.dT,t),y=o(ue,s.dQ,i),C=c,_=v;e=m,r=d,n=f,a=g,t=b,i=y,c=C,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),i1=S(function(e,r,n){var a=ya(e(r));return La(o1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),et=$(function(e,r){var n=e,a=r;return I(a,n)<1}),iu=function(e){return o(et,e.dO,e.dR)&&o(et,e.dP,e.dS)&&o(et,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},Vr=function(e){var r=e;return r.fU},Er=function(e){var r=e;return r.fY},Ur=function(e){var r=e;return r.c5},cu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Vr(n),c=Er(n),l=Ur(n),u=Vr(a),v=Er(a),s=Ur(a),m=Vr(t),d=Er(t),f=Ur(t);return iu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},lu=kf,ze=function(e){return lu(Va(e))},uu=function(e){var r=e;return r},Ea=function(e){return lu(uu(e))},c1=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Bt=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),l1={fU:0,fY:0,c5:0},u1=$(function(e,r){var n=e,a=r,t=o(rr,X(a.fU),o(rr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=qr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return l1}),v1=u1(Ql(1)),vu=S(function(e,r,n){var a=o(Bt,r,n),t=o(Bt,e,r);return v1(o(c1,a,t))}),$1=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Ea(p(vu,n,a,t));return B({o:i,bT:ze(n)},{o:i,bT:ze(a)},{o:i,bT:ze(t)})},f1=$(function(e,r){return{$:2,a:e,b:r}}),$u=f1({df:3,$7:0,dV:4}),s1=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ne,$1,e)),t=p(i1,cu,r,n);return L(au,t,e,a,0)}else return Uo},Ue=S(function(e,r,n){return B(e,r,n)}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),fu=function(){var e=yr(1),r=yr(1),n=yr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),m=p(be,i,v,l),d=o(K,.5,n),f=p(be,d,t,a),g=p(be,d,v,a),b=p(be,d,t,l),y=p(be,d,v,l);return Eo(s1(h([p(Ue,c,g,f),p(Ue,c,s,g),p(Ue,u,b,y),p(Ue,u,y,m),p(Ue,f,g,y),p(Ue,f,y,b),p(Ue,c,m,s),p(Ue,c,u,m),p(Ue,c,f,b),p(Ue,c,b,u),p(Ue,s,y,g),p(Ue,s,m,y)])))}(),Jn={$:0},m1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),d1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ea(p(vu,u,l,c)),s={o:v,bT:ze(u)},m={o:v,bT:ze(l)},d={o:v,bT:ze(c)};return o(A,s,o(A,m,o(A,d,n)))}),Ro=function(e){var r=e;return r.D},p1=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ie(p(e,t,i,c))}),Ft=4294967295>>>32-Cn,Vt=ev,b1=S(function(e,r,n){e:for(;;){var a=Ft&r>>>e,t=o(Vt,a,n);if(t.$){var v=t.a;return o(Vt,Ft&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),g1=function(e){return e>>>5<<5},h1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,g1(n))>-1?ie(o(Vt,Ft&e,i)):ie(p(b1,a,e,t))}),jo=function(e){var r=e;return r.ah},rt=$(function(e,r){return o(h1,e,jo(r))}),_1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(p1,S(function(c,l,u){return B(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(Ba,r,Ro(e))},y1=S(function(e,r,n){e:for(;;){var a=o(io,Ve,e),t=a.a,i=a.b;if(I(_t(t),Ve)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(y1,e,P,0):Vc},S1=S(function(e,r,n){return e(r(n))}),C1=$(function(e,r){return!o(Qc,o(S1,Cs,e),r)}),x1=$(function(e,r){return p(br,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),w1=function(e){var r=e.a;return r},su=$(function(e,r){var n=w1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(C1,a,r)?{D:r,ah:e}:{D:o(x1,a,r),ah:e}}),L1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Un=L1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return T(B(a.fU,a.fY,a.c5),B(n.fU,n.fY,n.c5))}),ji=p(Vn,0,0,0),nt=Ye(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Aa,o(ta,e,r),t);if(v.$){var m={o:ji,bT:ze(r)},d={o:ji,bT:ze(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),P1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,y=e,C=r,_=v,w=a+3,M=ye(nt,s,d,f,b,r,ye(nt,m,s,g,f,r,ye(nt,d,m,b,g,r,t)));e=y,r=C,n=_,a=w,t=M;continue e}else{var N=t,R=N.a,U=N.b;return T(R,Fe(U))}}),T1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,y=p(bn,o(ta,d,s),f,p(bn,o(ta,s,m),g,p(bn,o(ta,m,d),b,t))),C=o(A,B(b,g,f),a),_=e,w=v,M=n+3,N=C,R=y;e=_,r=w,n=M,a=N,t=R;continue e}else return B(a,t,n)}),Mr=S(function(e,r,n){var a=_1(n),t=p(br,d1(r),P,a),i=x(T1,r,a,0,P,hl),c=i.a,l=i.b,u=i.c,v=x(P1,r,l,a,0,B(c,P,u)),s=v.a,m=v.b,d=Mt(m)?t:ve(t,m);return p(m1,e,o(su,No(d),s),o(Un,d,s))}),Et=function(e){return{D:o(ne,function(r){return B(3*r,3*r+1,3*r+2)},o(Qr,0,Rr(e)-1)),ah:No(We(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},mu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(Mr,a,Ar,Et(n));case 2:var a=e.a,r=e.b,n=o(ne,Ln,r);return p(Mr,a,Ar,Et(n));case 3:var a=e.a,t=e.b;return p(Mr,a,Ar,t);case 4:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Mr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ni=mu(fu),du={$:0},z=du,ge=$(function(e,r){return{$:1,a:e,b:r}}),z1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},M1=1029,k1=function(e){return{$:5,a:e}},pu=function(e){var r=e;return k1(r)},D1=pu(M1),A1=1028,B1=pu(A1),Me=S(function(e,r,n){return r===1?e?o(A,D1,n):o(A,B1,n):n}),bu={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute mediump vec2 uv;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying mediump vec2 interpolatedUv;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedUv = uv;
        }
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return x(ae,p(Me,l,a,m),bu,z1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},gu={src:`
        precision highp float;
        
        attribute highp vec3 position;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return x(ae,p(Me,l,a,m),gu,Wo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),hu=$(function(e,r){return{$:3,a:e,b:r}}),F1={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        uniform lowp float pointRadius;
        uniform highp mat4 sceneProperties;
        
        float pointAlpha(float pointRadius, vec2 pointCoord) {
            float pointSize = 2.0 * pointRadius;
            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);
            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);
            float r = sqrt(x * x + y * y);
            float innerRadius = pointRadius;
            float outerRadius = pointRadius + 1.0;
            if (r > outerRadius) {
                return 0.0;
            } else if (r > innerRadius) {
                return outerRadius - r;
            } else {
                return 1.0;
            }
        }
        
        void main () {
            float supersampling = sceneProperties[3][0];
            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);
            gl_FragColor = vec4(constantColor, alpha);
        }
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},_u={src:`
        precision highp float;
        
        attribute highp vec3 position;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform lowp float pointRadius;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            float supersampling = sceneProperties[3][0];
            gl_PointSize = 2.0 * pointRadius * supersampling + 2.0;
        }
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},V1=E(function(e,r,n,a){return o(hu,n,ee(function(t,i,c,l,u,v,s,m){return x(ae,m,_u,F1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Go={src:`
        precision mediump float;
        
        uniform mediump vec3 emissiveColor;
        uniform highp mat4 sceneProperties;
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main () {
            gl_FragColor = toSrgb(emissiveColor, sceneProperties);
        }
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Ua=Df,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return x(ae,p(Me,u,t,d),gu,Go,a,{aN:o(Ua,Rn(r),e),b:l,c,d:s,e:i,f:v})}))}),E1={src:`
        precision mediump float;
        
        uniform mediump vec3 emissiveColor;
        uniform lowp float pointRadius;
        uniform highp mat4 sceneProperties;
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        float pointAlpha(float pointRadius, vec2 pointCoord) {
            float pointSize = 2.0 * pointRadius;
            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);
            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);
            float r = sqrt(x * x + y * y);
            float innerRadius = pointRadius;
            float outerRadius = pointRadius + 1.0;
            if (r > outerRadius) {
                return 0.0;
            } else if (r > innerRadius) {
                return outerRadius - r;
            } else {
                return 1.0;
            }
        }
        
        void main () {
            vec4 color = toSrgb(emissiveColor, sceneProperties);
            float supersampling = sceneProperties[3][0];
            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);
            gl_FragColor = vec4(color.rgb, alpha);
        }
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},U1=he(function(e,r,n,a,t){return o(hu,a,ee(function(i,c,l,u,v,s,m,d){return x(ae,d,_u,E1,t,{aN:o(Ua,Rn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),yu={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform lowp vec3 materialColor;
        uniform highp mat4 viewMatrix;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 lambertianLight(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                vec3 upDirection = xyz_type.xyz;
                vec3 aboveLuminance = rgb_parameter.rgb;
                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;
                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);
                return luminance * materialColor;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(
                xyz_type,
                rgb_parameter,
                surfacePosition,
                directionToLight,
                normalIlluminance
            );
        
            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);
            return (normalIlluminance * dotNL) * (materialColor / kPi);
        }
        
        vec3 lambertianLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[0], lights56[1]);
            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[2], lights56[3]);
            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[0], lights78[1]);
            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[2], lights78[3]);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main() {
            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = lambertianLighting(
                interpolatedPosition,
                normalDirection,
                materialColor,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(linearColor, sceneProperties);
        }
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Su={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
        }
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return x(ae,p(Me,l,a,m),Su,yu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),Cu={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform mediump sampler2D materialColorTexture;
        uniform mediump sampler2D normalMapTexture;
        uniform lowp float useNormalMap;
        uniform highp mat4 viewMatrix;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec3 interpolatedTangent;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        vec3 getLocalNormal(sampler2D normalMap, float useNormalMap, vec2 uv) {
            vec3 rgb = useNormalMap * texture2D(normalMap, uv).rgb + (1.0 - useNormalMap) * vec3(0.5, 0.5, 1.0);
            float x = 2.0 * (rgb.r - 0.5);
            float y = 2.0 * (rgb.g - 0.5);
            float z = 2.0 * (rgb.b - 0.5);
            return normalize(vec3(-x, -y, z));
        }
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getMappedNormal(vec3 normal, vec3 tangent, float normalSign, vec3 localNormal) {
            vec3 bitangent = cross(normal, tangent) * normalSign;
            return normalize(localNormal.x * tangent + localNormal.y * bitangent + localNormal.z * normal);
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 lambertianLight(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                vec3 upDirection = xyz_type.xyz;
                vec3 aboveLuminance = rgb_parameter.rgb;
                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;
                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);
                return luminance * materialColor;
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(
                xyz_type,
                rgb_parameter,
                surfacePosition,
                directionToLight,
                normalIlluminance
            );
        
            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);
            return (normalIlluminance * dotNL) * (materialColor / kPi);
        }
        
        vec3 lambertianLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 materialColor,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[0], lights56[1]);
            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[2], lights56[3]);
            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[0], lights78[1]);
            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[2], lights78[3]);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        vec3 fromSrgb(vec3 srgbColor) {
            return vec3(
                inverseGamma(srgbColor.r),
                inverseGamma(srgbColor.g),
                inverseGamma(srgbColor.b)
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main() {
            vec3 localNormal = getLocalNormal(normalMapTexture, useNormalMap, interpolatedUv);
            float normalSign = getNormalSign();
            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;
            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, normalSign, localNormal);
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
            vec3 materialColor = fromSrgb(texture2D(materialColorTexture, interpolatedUv).rgb);
        
            vec3 linearColor = lambertianLighting(
                interpolatedPosition,
                normalDirection,
                materialColor,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(linearColor, sceneProperties);
        }
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},xu={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        attribute mediump vec2 uv;
        attribute highp vec3 tangent;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec3 interpolatedTangent;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getWorldTangent(vec3 modelTangent, vec4 modelScale, mat4 modelMatrix) {
            return (modelMatrix * vec4(safeNormalize(modelScale.xyz * modelTangent), 0.0)).xyz;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
            interpolatedUv = uv;
            interpolatedTangent = getWorldTangent(tangent, modelScale, modelMatrix);
        }
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},R1=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return x(ae,p(Me,v,i,f),xu,Cu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),wu={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform mediump sampler2D baseColorTexture;
        uniform lowp vec4 constantBaseColor;
        uniform mediump sampler2D roughnessTexture;
        uniform lowp vec2 constantRoughness;
        uniform mediump sampler2D metallicTexture;
        uniform lowp vec2 constantMetallic;
        uniform mediump sampler2D normalMapTexture;
        uniform lowp float useNormalMap;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec3 interpolatedTangent;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const mediump float kMediumpFloatMax = 65504.0;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getFloatValue(sampler2D texture, vec2 uv, vec2 constantValue) {
            if (constantValue.y == 1.0) {
                return constantValue.x;
            } else {
                vec4 textureColor = texture2D(texture, uv);
                return dot(textureColor, vec4(0.2126, 0.7152, 0.0722, 0.0));
            }
        }
        
        vec3 getLocalNormal(sampler2D normalMap, float useNormalMap, vec2 uv) {
            vec3 rgb = useNormalMap * texture2D(normalMap, uv).rgb + (1.0 - useNormalMap) * vec3(0.5, 0.5, 1.0);
            float x = 2.0 * (rgb.r - 0.5);
            float y = 2.0 * (rgb.g - 0.5);
            float z = 2.0 * (rgb.b - 0.5);
            return normalize(vec3(-x, -y, z));
        }
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getMappedNormal(vec3 normal, vec3 tangent, float normalSign, vec3 localNormal) {
            vec3 bitangent = cross(normal, tangent) * normalSign;
            return normalize(localNormal.x * tangent + localNormal.y * bitangent + localNormal.z * normal);
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)
        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {
            vec3 crossNH = cross(normalDirection, halfDirection);
            float a = dotNH * alpha;
            float k = alpha / (dot(crossNH, crossNH) + a * a);
            float d = k * k * (1.0 / kPi);
            return min(d, kMediumpFloatMax);
        }
        
        float safeQuotient(float numerator, float denominator) {
            if (denominator == 0.0) {
                return 0.0;
            } else {
                return numerator / denominator;
            }
        }
        
        float g1(float dotNV, float alphaSquared) {
            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));
        }
        
        float specularG(float dotNL, float dotNV, float alphaSquared) {
            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);
        }
        
        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {
            vec3 one = vec3(1.0, 1.0, 1.0);
            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
            return specularBaseColor + (one - specularBaseColor) * scale;
        }
        
        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {
            vec3 halfDirection = normalize(directionToCamera + directionToLight);
            float dotVH = positiveDotProduct(directionToCamera, halfDirection);
            float dotNH = positiveDotProduct(normalDirection, halfDirection);
            float dotNHSquared = dotNH * dotNH;
        
            float d = specularD(alpha, dotNH, normalDirection, halfDirection);
            float g = specularG(dotNL, dotNV, alpha * alpha);
            vec3 f = fresnelColor(specularBaseColor, dotVH);
            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;
        }
        
        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {
            float t2 = (1.0 - s);
            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;
            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 softLightingSpecularSample(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localViewDirection,
            vec3 localLightDirection,
            vec3 localHalfDirection,
            float alphaSquared,
            vec3 specularBaseColor
        ) {
            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);
            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);
            float dotNL = localLightDirection.z;
            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));
        }
        
        vec3 softLighting(
            vec3 normalDirection,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            vec3 directionToCamera,
            vec3 viewY,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float alphaSquared = alpha * alpha;
            vec3 upDirection = xyz_type.xyz;
            vec3 luminanceAbove = rgb_parameter.rgb;
            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;
            vec3 crossProduct = cross(normalDirection, directionToCamera);
            float crossMagnitude = length(crossProduct);
            vec3 xDirection = vec3(0.0, 0.0, 0.0);
            vec3 yDirection = vec3(0.0, 0.0, 0.0);
            if (crossMagnitude > 1.0e-6) {
                yDirection = (1.0 / crossMagnitude) * crossProduct;
                xDirection = cross(yDirection, normalDirection);
            } else {
                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                xDirection = normalize(cross(viewY, normalDirection));
                yDirection = cross(normalDirection, xDirection);
            }
            float localViewX = dot(directionToCamera, xDirection);
            float localViewZ = dot(directionToCamera, normalDirection);
            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);
            float localUpX = dot(upDirection, xDirection);
            float localUpY = dot(upDirection, yDirection);
            float localUpZ = dot(upDirection, normalDirection);
            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);
        
            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));
            vec3 vT1 = vec3(0.0, 1.0, 0.0);
            vec3 vT2 = cross(vH, vT1);
            float s = 0.5 * (1.0 + vH.z);
            
            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);
            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);
            
            localLightDirection = -reflect(localViewDirection, localHalfDirection);
            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);
            
            localLightDirection = vec3(0.000000, 0.000000, 1.000000);
            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;
            
            return specular + diffuse * diffuseBaseColor;
        }
        
        vec3 physicalLight(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            vec3 normalDirection,
            vec3 directionToCamera,
            vec3 viewY,
            float dotNV,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter);
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);
        
            float dotNL = positiveDotProduct(normalDirection, directionToLight);
            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);
            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);
        }
        
        vec3 physicalLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 baseColor,
            vec3 directionToCamera,
            mat4 viewMatrix,
            float roughness,
            float metallic,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);
            float alpha = roughness * roughness;
            float nonmetallic = 1.0 - metallic;
            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;
            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;
            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        
            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        vec3 fromSrgb(vec3 srgbColor) {
            return vec3(
                inverseGamma(srgbColor.r),
                inverseGamma(srgbColor.g),
                inverseGamma(srgbColor.b)
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main() {
            vec3 baseColor = fromSrgb(texture2D(baseColorTexture, interpolatedUv).rgb) * (1.0 - constantBaseColor.w) + constantBaseColor.rgb * constantBaseColor.w;
            float roughness = getFloatValue(roughnessTexture, interpolatedUv, constantRoughness);
            float metallic = getFloatValue(metallicTexture, interpolatedUv, constantMetallic);
        
            vec3 localNormal = getLocalNormal(normalMapTexture, useNormalMap, interpolatedUv);
            float normalSign = getNormalSign();
            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;
            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, normalSign, localNormal);
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = physicalLighting(
                interpolatedPosition,
                normalDirection,
                baseColor,
                directionToCamera,
                viewMatrix,
                roughness,
                metallic,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(linearColor, sceneProperties);
        }
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},j1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(m,d,f,g,b,y,C,_){var w=C.a,M=C.b;return x(ae,p(Me,g,s,_),xu,wu,v,{b4:e,b7:r,b8:i,b9:a,P:M,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:d,aW:c,d:y,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Lu={src:`
        precision highp float;
        
        uniform highp mat4 sceneProperties;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 lights12;
        uniform highp mat4 lights34;
        uniform highp mat4 lights56;
        uniform highp mat4 lights78;
        uniform lowp vec4 enabledLights;
        uniform lowp vec3 baseColor;
        uniform lowp float roughness;
        uniform lowp float metallic;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        const lowp float kPerspectiveProjection = 0.0;
        const lowp float kOrthographicProjection = 1.0;
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const highp float kPi = 3.14159265359;
        const mediump float kMediumpFloatMax = 65504.0;
        const lowp float kDisabledLight = 0.0;
        const lowp float kSoftLighting = 3.0;
        
        float getNormalSign() {
            return 2.0 * float(gl_FrontFacing) - 1.0;
        }
        
        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {
            float projectionType = sceneProperties[1].w;
            if (projectionType == kPerspectiveProjection) {
                vec3 cameraPoint = sceneProperties[1].xyz;
                return normalize(cameraPoint - surfacePosition);
            } else if (projectionType == kOrthographicProjection) {
                return sceneProperties[1].xyz;
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        void getDirectionToLightAndNormalIlluminance(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            out vec3 directionToLight,
            out vec3 normalIlluminance
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                directionToLight = xyz_type.xyz;
                normalIlluminance = rgb_parameter.rgb;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                vec3 displacement = lightPosition - surfacePosition;
                float distance = length(displacement);
                directionToLight = displacement / distance;
                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);
            }
        }
        
        float positiveDotProduct(vec3 v1, vec3 v2) {
            return clamp(dot(v1, v2), 0.0, 1.0);
        }
        
        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)
        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {
            vec3 crossNH = cross(normalDirection, halfDirection);
            float a = dotNH * alpha;
            float k = alpha / (dot(crossNH, crossNH) + a * a);
            float d = k * k * (1.0 / kPi);
            return min(d, kMediumpFloatMax);
        }
        
        float safeQuotient(float numerator, float denominator) {
            if (denominator == 0.0) {
                return 0.0;
            } else {
                return numerator / denominator;
            }
        }
        
        float g1(float dotNV, float alphaSquared) {
            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));
        }
        
        float specularG(float dotNL, float dotNV, float alphaSquared) {
            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);
        }
        
        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {
            vec3 one = vec3(1.0, 1.0, 1.0);
            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
            return specularBaseColor + (one - specularBaseColor) * scale;
        }
        
        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {
            vec3 halfDirection = normalize(directionToCamera + directionToLight);
            float dotVH = positiveDotProduct(directionToCamera, halfDirection);
            float dotNH = positiveDotProduct(normalDirection, halfDirection);
            float dotNHSquared = dotNH * dotNH;
        
            float d = specularD(alpha, dotNH, normalDirection, halfDirection);
            float g = specularG(dotNL, dotNV, alpha * alpha);
            vec3 f = fresnelColor(specularBaseColor, dotVH);
            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;
        }
        
        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {
            float t2 = (1.0 - s);
            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;
            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));
        }
        
        vec3 softLightingLuminance(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localLightDirection
        ) {
            float sinElevation = dot(localLightDirection, localUpDirection);
            float t = (sinElevation + 1.0) / 2.0;
            return aboveLuminance * t + belowLuminance * (1.0 - t);
        }
        
        vec3 softLightingSpecularSample(
            vec3 aboveLuminance,
            vec3 belowLuminance,
            vec3 localUpDirection,
            vec3 localViewDirection,
            vec3 localLightDirection,
            vec3 localHalfDirection,
            float alphaSquared,
            vec3 specularBaseColor
        ) {
            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);
            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);
            float dotNL = localLightDirection.z;
            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));
        }
        
        vec3 softLighting(
            vec3 normalDirection,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha,
            vec3 directionToCamera,
            vec3 viewY,
            vec4 xyz_type,
            vec4 rgb_parameter
        ) {
            float alphaSquared = alpha * alpha;
            vec3 upDirection = xyz_type.xyz;
            vec3 luminanceAbove = rgb_parameter.rgb;
            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;
            vec3 crossProduct = cross(normalDirection, directionToCamera);
            float crossMagnitude = length(crossProduct);
            vec3 xDirection = vec3(0.0, 0.0, 0.0);
            vec3 yDirection = vec3(0.0, 0.0, 0.0);
            if (crossMagnitude > 1.0e-6) {
                yDirection = (1.0 / crossMagnitude) * crossProduct;
                xDirection = cross(yDirection, normalDirection);
            } else {
                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                xDirection = normalize(cross(viewY, normalDirection));
                yDirection = cross(normalDirection, xDirection);
            }
            float localViewX = dot(directionToCamera, xDirection);
            float localViewZ = dot(directionToCamera, normalDirection);
            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);
            float localUpX = dot(upDirection, xDirection);
            float localUpY = dot(upDirection, yDirection);
            float localUpZ = dot(upDirection, normalDirection);
            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);
        
            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));
            vec3 vT1 = vec3(0.0, 1.0, 0.0);
            vec3 vT2 = cross(vH, vT1);
            float s = 0.5 * (1.0 + vH.z);
            
            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);
            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);
            
            localLightDirection = -reflect(localViewDirection, localHalfDirection);
            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);
            
            localLightDirection = vec3(0.000000, 0.000000, 1.000000);
            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;
            
            return specular + diffuse * diffuseBaseColor;
        }
        
        vec3 physicalLight(
            vec4 xyz_type,
            vec4 rgb_parameter,
            vec3 surfacePosition,
            vec3 normalDirection,
            vec3 directionToCamera,
            vec3 viewY,
            float dotNV,
            vec3 diffuseBaseColor,
            vec3 specularBaseColor,
            float alpha
        ) {
            float lightType = xyz_type.w;
            if (lightType == kDisabledLight) {
                return vec3(0.0, 0.0, 0.0);
            } else if (lightType == kSoftLighting) {
                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter);
            }
        
            vec3 directionToLight = vec3(0.0, 0.0, 0.0);
            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);
            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);
        
            float dotNL = positiveDotProduct(normalDirection, directionToLight);
            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);
            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);
        }
        
        vec3 physicalLighting(
            vec3 surfacePosition,
            vec3 surfaceNormal,
            vec3 baseColor,
            vec3 directionToCamera,
            mat4 viewMatrix,
            float roughness,
            float metallic,
            mat4 lights12,
            mat4 lights34,
            mat4 lights56,
            mat4 lights78,
            vec4 enabledLights
        ) {
            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);
            float alpha = roughness * roughness;
            float nonmetallic = 1.0 - metallic;
            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;
            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;
            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        
            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);
            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);
            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main() {
            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();
            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);
        
            vec3 linearColor = physicalLighting(
                interpolatedPosition,
                normalDirection,
                baseColor,
                directionToCamera,
                viewMatrix,
                roughness,
                metallic,
                lights12,
                lights34,
                lights56,
                lights78,
                enabledLights
            );
        
            gl_FragColor = toSrgb(linearColor, sceneProperties);
        }
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},qn=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return x(ae,p(Me,v,i,f),Su,Lu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),N1=function(e){return{$:0,a:e}},Wi=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),W1=function(e){return L(on,cn(e),ln(e),un(e),1)},Yo=L(on,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Yo)}else{var n=r.a;return T(e,W1(n))}}),Pu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,T(t,Yo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,N1(a)}}),G1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y1=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),H1=function(e){return o(Ae,e,1)},Ut=o(Ae,0,0),Hr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Ut)}else{var n=r.a;return T(e,H1(n))}}),Tu=E(function(e,r,n,a){var t=L(Y1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Zn,T(u,Yo),o(Hr,u,r),o(Hr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Zn,o(oa,u,e),T(u,Ut),o(Hr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Zn,o(oa,u,e),o(Hr,u,r),T(u,Ut),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Zn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(G1,i,c,l)}}),I1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        uniform mediump float backlight;
        uniform highp mat4 sceneProperties;
        
        varying mediump vec2 interpolatedUv;
        
        float inverseGamma(float u) {
            if (u <= 0.04045) {
                return clamp(u / 12.92, 0.0, 1.0);
            } else {
                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);
            }
        }
        
        vec3 fromSrgb(vec3 srgbColor) {
            return vec3(
                inverseGamma(srgbColor.r),
                inverseGamma(srgbColor.g),
                inverseGamma(srgbColor.b)
            );
        }
        
        float gammaCorrect(float u) {
            if (u <= 0.0031308) {
                return 12.92 * u;
            } else {
                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;
            }
        }
        
        vec3 gammaCorrectedColor(vec3 color) {
            float red = gammaCorrect(color.r);
            float green = gammaCorrect(color.g);
            float blue = gammaCorrect(color.b);
            return vec3(red, green, blue);
        }
        
        vec3 reinhardLuminanceToneMap(vec3 color) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scale = 1.0 / (1.0 + luminance);
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 reinhardPerChannelToneMap(vec3 color) {
            return gammaCorrectedColor(color / (color + 1.0));
        }
        
        float extendedReinhardToneMap(float x, float xMax) {
            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);
        }
        
        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {
            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);
            float scale = scaledLuminance / luminance;
            return gammaCorrectedColor(color * scale);
        }
        
        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {
            float red = extendedReinhardToneMap(color.r, overexposureLimit);
            float green = extendedReinhardToneMap(color.g, overexposureLimit);
            float blue = extendedReinhardToneMap(color.b, overexposureLimit);
            return gammaCorrectedColor(vec3(red, green, blue));
        }
        
        vec3 hableFilmicHelper(vec3 color) {
            float a = 0.15;
            float b = 0.5;
            float c = 0.1;
            float d = 0.2;
            float e = 0.02;
            float f = 0.3;
            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;
        }
        
        vec3 hableFilmicToneMap(vec3 color) {
            float exposureBias = 2.0;
            vec3 unscaled = hableFilmicHelper(exposureBias * color);
            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));
            return gammaCorrectedColor(scale * unscaled);
        }
        
        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {
            if (toneMapType == 0.0) {
                return gammaCorrectedColor(color);
            } else if (toneMapType == 1.0) {
                return reinhardLuminanceToneMap(color);
            } else if (toneMapType == 2.0) {
                return reinhardPerChannelToneMap(color);
            } else if (toneMapType == 3.0) {
                return extendedReinhardLuminanceToneMap(color, toneMapParam);
            } else if (toneMapType == 4.0) {
                return extendedReinhardPerChannelToneMap(color, toneMapParam);
            } else if (toneMapType == 5.0) {
                return hableFilmicToneMap(color);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {
            vec3 referenceWhite = sceneProperties[2].rgb;
            float unitR = linearColor.r / referenceWhite.r;
            float unitG = linearColor.g / referenceWhite.g;
            float unitB = linearColor.b / referenceWhite.b;
            float toneMapType = sceneProperties[3][2];
            float toneMapParam = sceneProperties[3][3];
            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);
            return vec4(toneMapped, 1.0);
        }
        
        void main () {
            vec3 emissiveColor = fromSrgb(texture2D(colorTexture, interpolatedUv).rgb) * backlight;
            gl_FragColor = toSrgb(emissiveColor, sceneProperties);
        }
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},tt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return x(ae,p(Me,u,t,d),bu,I1,a,{b1:Rn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),zu={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        attribute mediump vec2 uv;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        varying mediump vec2 interpolatedUv;
        varying highp vec3 interpolatedTangent;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main () {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
            interpolatedUv = uv;
            interpolatedTangent = vec3(0.0, 0.0, 0.0);
        }
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J1=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return x(ae,p(Me,l,a,m),zu,Cu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),O1=Wt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,m,d,f,g,b,y){var C=b.a,_=b.b;return x(ae,p(Me,d,u,y),zu,wu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cu:t,b:m,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Pn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),q1=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},Z1=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},X1=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},Q1=function(e){return p(be,q1(e),Z1(e),X1(e))},G=function(e){var r=Wl(e),n=r.a,a=r.b,t=r.c;return{ey:Va(Q1(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(V1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return x(tt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(tt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(tt,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(ir,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return x(ir,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return x(ir,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(U1,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,R=e.c,m=o(Pu,s,R);if(m.$){var g=m.a,b=g.a;g.b;var y=m.b,C=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(J1,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(R1,b,C,_,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(On,d,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(On,d,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(On,d,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(On,d,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var w=e.b,M=e.c,N=e.d,R=e.e,U=L(Tu,w,M,N,R);if(U.$){var O=U.a,Q=O.a,le=O.b,fe=U.b,ce=fe.a,pe=fe.b,ke=U.c,xe=ke.a,gr=ke.b,hr=U.d,C=hr.a,_=hr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return qu(O1,Q,le,ce,pe,xe,gr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return j1(Q)(le)(ce)(pe)(xe)(gr)(C)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=U.a,W=U.b,F=U.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return ye(qn,j,W,F,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return ye(qn,j,W,F,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ye(qn,j,W,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(qn,j,W,F,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ot=function(e){var r=e;return r.fU},it=function(e){var r=e;return r.fY},ct=function(e){var r=e;return r.c5},K1=function(e){var r=e,n=ct(r.c6),a=it(r.c6),t=ot(r.c6),i=ct(r.c4),c=it(r.c4),l=ot(r.c4),u=ct(r.c3),v=it(r.c3),s=ot(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},e3=function(e){var r=Va(Gr(e)),n=Ge(zr(e)),a=Ge(Tr(e)),t=Ge(Pr(e));return{dp:K1(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Mu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Bl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),ku=$(function(e,r){return o(Mu,e3(e),r)}),Ra=function(e){return{$:2,a:e}},r3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),n3=Ff,a3=Bf,Gi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=a3(a),g=f.fU,b=f.fY,y=f.c5,C=f.em,_=n3({em:C,fU:g*s,fY:b*m,c5:y*d});return La(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Rt=$(function(e,r){switch(r.$){case 0:return du;case 5:var n=r.a,a=r.b;return o(Ir,n,o(Rt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(r3,e,t),o(Gi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Gi,e,i));default:var c=r.a;return Hl(o(ne,Rt(e),c))}}),Io=$(function(e,r){var n=r;return o(Rt,e,n)}),Jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Au=7682,t3=p(Ao,{co:0,cN:0,c2:15},{a8:Ce,bl:rn,bt:Ce,bu:Du},{a8:Ce,bl:rn,bt:Ce,bu:Au}),o3=p(Ao,{co:0,cN:0,c2:15},{a8:Ce,bl:rn,bt:Ce,bu:Au},{a8:Ce,bl:rn,bt:Ce,bu:Du}),Oo=$(function(e,r){return e?o(A,o3,r):o(A,t3,r)}),i3={src:`
        precision highp float;
        
        attribute highp vec3 position;
        attribute highp vec3 normal;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);
            vec3 offset = vec3(0.0, 0.0, 0.0);
            float sceneDiameter = sceneProperties[3][1];
            if (dot(directionToLight, worldNormal) <= 0.0) {
                offset = -sceneDiameter * directionToLight;
            } else {
                offset = -0.001 * sceneDiameter * directionToLight;
            }
            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);
            return projectionMatrix * (viewMatrix * offsetPosition);
        }
        
        void main () {
            gl_Position = shadowVertexPosition(
                position,
                normal,
                shadowLight,
                modelScale,
                modelMatrix,
                viewMatrix,
                projectionMatrix,
                sceneProperties
            );
        }
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},c3=function(e){if(e.$){var r=e.c;return ie(ee(function(n,a,t,i,c,l,u,v){return x(ae,o(Oo,i,v),i3,Jo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Sa=function(e){var r=c3(e);if(r.$)return z;var n=r.a;return Ra(n)},l3=E(function(e,r,n,a){var t=o(Ho,n,fu),i=function(){var s=T(e,r);return s.a?s.b?En(h([t,Sa(Ni)])):t:s.b?Sa(Ni):z}(),c=wo(a),l=c.a,u=c.b,v=c.c;return o(ku,xo(a),o(Io,B(l,u,v),i))}),u3=$(function(e,r){return L(l3,!0,!0,e,r)}),jt=function(e){return{$:0,a:e}},Bu=$(function(e,r){return{$:0,a:e,b:r}}),v3=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,n,a,t)},$3=function(e){return o(Bu,0,jt(v3(e)))},qo=function(e){var r=e;return r.k},yn=function(e){var r=e;return jr(r)},f3=$(function(e,r){var n=r;return n/e}),Yi=function(e){var r=e;return{fU:jr(r),fY:en(r)}},s3=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ea(a),bT:ze(n)},r)}),m3=wa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=un(l.bT),s=ln(l.bT),m=cn(l.bT),d=o(aa,e,m),f=o(rr,r,m),g=o(aa,n,s),b=o(rr,a,s),y=o(aa,t,v),C=o(rr,i,v),_=u;e=d,r=f,n=g,a=b,t=y,i=C,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Gt(m3,t,t,a,a,n,n,r)}),d3=function(e){var r=p(Tc,s3,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,Ro(e)),i=o(Fu,n,a);return L(tu,i,e,t,0)}else return Uo},Vu=vr({fU:0,fY:0,c5:-1}),Hi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),Ca=function(e){var r=e;return en(r)},dn=function(e){var r=e;return r},Nt=function(e){return Fr(2*nr*e)},Ii=Cl({cA:cr,c3:_o,c4:Zl}),Eu=function(){var e=72,r=o(f3,e,Nt(1)),n=yr(1),a=dn(yo),t=dn(Vu),i=yr(1),c=o(K,.5,i),l=p(be,lr,lr,c),u=o(K,-.5,i),v=p(be,lr,lr,u),s=function(f){var g=o(K,f,r),b=dn(o(Hi,Ii,Yi(g))),y=o(K,yn(g),n),C=o(K,Ca(g),n),_=p(be,y,C,c),w=p(be,y,C,u),M=o(ba,e,f+1),N=o(K,M,r),R=dn(o(Hi,Ii,Yi(N))),U=o(K,yn(N),n),j=o(K,Ca(N),n),W=p(be,U,j,u),F=p(be,U,j,c);return h([B({o:t,bT:v},{o:t,bT:W},{o:t,bT:w}),B({o:b,bT:w},{o:R,bT:W},{o:R,bT:F}),B({o:b,bT:w},{o:R,bT:F},{o:b,bT:_}),B({o:a,bT:l},{o:a,bT:_},{o:a,bT:F})])},m=o(ne,s,o(Qr,0,e-1)),d=Et(We(m));return Eo(d3(d))}(),Ji=mu(Eu),Uu=function(e){var r=e;return r.cA},p3=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=qr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=qr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(I(a,n)<1){var i=qr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=qr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},b3=function(e){var r=p3(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return T(r,c)},g3=function(e){var r=ho(e),n=b3(r),a=n.a,t=n.b;return dr({cA:Uu(e),c3:a,c4:t,c6:r})},Ru=function(e){var r=e;return r.e9},ju=function(e){var r=e;return r.fu},h3=E(function(e,r,n,a){var t=g3(qo(a)),i=o(Ho,n,Eu),c=function(){var m=T(e,r);return m.a?m.b?En(h([i,Sa(Ji)])):i:m.b?Sa(Ji):z}(),l=ju(a),u=l,v=Ru(a),s=v;return o(ku,t,o(Io,B(u,u,s),c))}),_3=$(function(e,r){return L(h3,!0,!0,e,r)}),Oi={src:`
        precision highp float;
        
        attribute lowp float triangleVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 triangleVertexPositions;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},qi={src:`
        precision highp float;
        
        attribute lowp float triangleVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 triangleVertexPositions;
        
        varying highp vec3 interpolatedPosition;
        varying highp vec3 interpolatedNormal;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        void main() {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
            interpolatedPosition = worldPosition.xyz;
            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);
        }
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Xn=$u(h([B({cY:0},{cY:1},{cY:2})])),y3=$(function(e,r){var n=cu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(ge,a,ee(function(_,w,M,N,R,U,j,W){return x(ae,p(Me,N,0,W),Oi,Wo,Xn,{aw:t,b:M,c:w,d:U,e:_,bq:pn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,w,M,N,R,U,j,W){return x(ae,p(Me,N,0,W),Oi,Go,Xn,{aN:o(Ua,Rn(c),i),b:M,c:w,d:U,e:_,bq:pn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return z;var v=u.a;return o(ge,a,ee(function(_,w,M,N,R,U,j,W){var F=j.a,O=j.b;return x(ae,p(Me,N,0,W),qi,yu,Xn,{P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cp:v,b:M,c:w,d:U,e:_,bq:pn(r),f:R})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=L(Tu,s,m,d,f);if(g.$)return z;var b=g.a,y=g.b,C=g.c;return o(ge,a,ee(function(_,w,M,N,R,U,j,W){var F=j.a,O=j.b;return x(ae,p(Me,N,0,W),qi,Lu,Xn,{b3:b,P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,ct:C,b:M,c:w,d:U,cQ:y,e:_,bq:pn(r),f:R})}))}}),S3=function(){var e=h([{a_:o(Ae,0,1)},{a_:o(Ae,1,1)},{a_:o(Ae,2,1)},{a_:o(Ae,0,-1)},{a_:o(Ae,1,-1)},{a_:o(Ae,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Un,e,r)}(),C3={src:`
        precision highp float;
        
        attribute highp vec2 triangleShadowVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        uniform highp mat4 triangleVertexPositions;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        
        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {
            vec3 p1 = triangleVertexPositions[0].xyz;
            vec3 p2 = triangleVertexPositions[1].xyz;
            vec3 p3 = triangleVertexPositions[2].xyz;
            normal = normalize(cross(p2 - p1, p3 - p2));
            float t1 = float(triangleVertexIndex == 0);
            float t2 = float(triangleVertexIndex == 1);
            float t3 = float(triangleVertexIndex == 2);
            position = t1 * p1 + t2 * p2 + t3 * p3;
        }
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 safeNormalize(vec3 vector) {
            if (vector == vec3(0.0, 0.0, 0.0)) {
                return vector;
            } else {
                return normalize(vector);
            }
        }
        
        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {
            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);
            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);
            vec3 offset = vec3(0.0, 0.0, 0.0);
            float sceneDiameter = sceneProperties[3][1];
            if (dot(directionToLight, worldNormal) <= 0.0) {
                offset = -sceneDiameter * directionToLight;
            } else {
                offset = -0.001 * sceneDiameter * directionToLight;
            }
            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);
            return projectionMatrix * (viewMatrix * offsetPosition);
        }
        
        void main () {
            vec3 position = vec3(0.0, 0.0, 0.0);
            vec3 normal = vec3(0.0, 0.0, 0.0);
            getTriangleVertex(int(triangleShadowVertex.x), triangleVertexPositions, position, normal);
            normal *= triangleShadowVertex.y;
            gl_Position = shadowVertexPosition(
                position,
                normal,
                shadowLight,
                modelScale,
                modelMatrix,
                viewMatrix,
                projectionMatrix,
                sceneProperties
            );
        }
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Zi=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return x(ae,o(Oo,t,u),C3,Jo,S3,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},x3=E(function(e,r,n,a){var t=o(y3,n,a),i=T(e,r);return i.a?i.b?En(h([t,Zi(a)])):t:i.b?Zi(a):z}),w3=$(function(e,r){return L(x3,!0,!0,e,r)}),L3=$(function(e,r){var n=Ur(r),a=Ur(e),t=Er(r),i=Er(e),c=Vr(r),l=Vr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),P3=function(e){var r=Lo(e),n=r.a,a=r.b;return o(L3,n,a)},Xi={src:`
        precision highp float;
        
        attribute lowp float lineSegmentVertex;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp vec3 lineSegmentStartPoint;
        uniform highp vec3 lineSegmentEndPoint;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        void main() {
            vec3 position = (1.0 - lineSegmentVertex) * lineSegmentStartPoint + lineSegmentVertex * lineSegmentEndPoint;
            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);
            gl_Position = projectionMatrix * (viewMatrix * worldPosition);
        }
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T3=$(function(e,r){return{$:1,a:e,b:r}}),z3=T3({df:2,$7:0,dV:1}),Qi=z3(h([T({dw:0},{dw:1})])),M3=$(function(e,r){var n=P3(r),a=G(n),t=Lo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(ge,a,ee(function(v,s,m,d,f,g,b,y){return x(ae,y,Xi,Wo,Qi,{aw:l,du:ze(c),dv:ze(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,m,d,f,g,b,y,C){return x(ae,C,Xi,Go,Qi,{aN:o(Ua,Rn(u),l),du:ze(c),dv:ze(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return z;default:return z}}),k3=$(function(e,r){return o(M3,e,r)}),Qn=function(e){return Fr(nr*(e/180))},Ki=$(function(e,r){var n=e,a=r;return n/a}),D3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(Sr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),ec=$(function(e,r){return e<1?P:x(D3,0,e,e,r,P)}),A3=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ea(a),bT:ze(n),L:o(Ae,c,l)},r)}),B3=function(e){var r=p(Tc,A3,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Un,r,Ro(e)),i=o(Fu,n,a);return L(ou,i,e,t,0)}else return Uo},Nu=$(function(e,r){var n=e,a=r,t=jr(a);return{fU:t*jr(n),fY:t*en(n),c5:en(a)}}),F3=function(){var e=yr(1),r=72,n=o(Qr,0,r-1),a=o(ec,r,o(Pn,lr,Nt(1))),t=to(r/2),i=o(Qr,0,t-1),c=o(ec,t,o(Pn,Qn(90),Qn(-90))),l=No(We(o(ne,function(s){return o(ne,function(m){return{o:dn(o(Nu,s,m)),bT:p(be,o(K,yn(m)*yn(s),e),o(K,yn(m)*Ca(s),e),o(K,Ca(m),e)),L:T(o(Ki,s,Nt(1)),o(Ki,o(hn,Qn(90),m),Qn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=We(o(ne,function(s){return We(o(ne,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return h([B(b,g,d),B(b,d,f)])},i))},n));return Eo(B3(o(su,l,v)))}(),xa=72,Kn=2*xa,V3=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ba,Kn,2*e+3),t=o(ba,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),E3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),U3=$(function(e,r){e:for(;;){var n=p(E3,0,2*nr,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),R3=function(){var e=o(U3,xa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(V3,xa-1,P);return o(Un,e,r)}(),j3={src:`
        precision highp float;
        
        attribute highp float angle;
        attribute highp float offsetScale;
        attribute highp float radiusScale;
        
        uniform highp vec4 modelScale;
        uniform highp mat4 modelMatrix;
        uniform highp mat4 viewMatrix;
        uniform highp mat4 projectionMatrix;
        uniform highp mat4 sceneProperties;
        uniform highp mat4 shadowLight;
        
        const lowp float kDirectionalLight = 1.0;
        const lowp float kPointLight = 2.0;
        const lowp float kPerspectiveProjection = 0.0;
        
        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {
            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);
            return modelMatrix * scaledPosition;
        }
        
        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {
            float lightType = xyz_type.w;
            if (lightType == kDirectionalLight) {
                return xyz_type.xyz;
            } else if (lightType == kPointLight) {
                vec3 lightPosition = xyz_type.xyz;
                return normalize(lightPosition - surfacePosition);
            } else {
                return vec3(0.0, 0.0, 0.0);
            }
        }
        
        vec3 perpendicularTo(vec3 d) {
            float absX = abs(d.x);
            float absY = abs(d.y);
            float absZ = abs(d.z);
            if (absX <= absY) {
                if (absX <= absZ) {
                    float scale = 1.0 / length(d.zy);
                    return vec3(0.0, -d.z * scale, d.y * scale);
                } else {
                    float scale = 1.0 / length(d.xy);
                    return vec3(-d.y * scale, d.x * scale, 0.0);
                }
            } else {
                if (absY <= absZ) {
                    float scale = 1.0 / length(d.xz);
                    return vec3(d.z * scale, 0.0, -d.x * scale);
                } else {
                    float scale = 1.0 / length(d.xy);
                    return vec3(-d.y * scale, d.x * scale, 0.0);
                }
            }
        }
        
        void main () {
            vec4 worldCenter = getWorldPosition(vec3(0.0, 0.0, 0.0), modelScale, modelMatrix);
            vec4 xyz_type = shadowLight[0];
            vec4 rgb_parameter = shadowLight[1];
            vec3 zDirection = getDirectionToLight(worldCenter.xyz, xyz_type, rgb_parameter);
            vec3 xDirection = perpendicularTo(zDirection);
            vec3 yDirection = cross(zDirection, xDirection);
            float r = modelScale.x;
            float adjustedRadius = r;
            float zOffset = 0.0;
            if (xyz_type.w == kPointLight) {
                float distanceToLight = length(xyz_type.xyz - worldCenter.xyz);
                float rSquared = r * r;
                zOffset = rSquared / distanceToLight;
                float zSquared = zOffset * zOffset;
                adjustedRadius = sqrt(rSquared - zSquared) * radiusScale;
            }
            vec3 worldPosition =
                worldCenter.xyz
                    + zDirection * zOffset
                    + xDirection * adjustedRadius * cos(angle)
                    + yDirection * adjustedRadius * sin(angle);
            vec3 directionToLight = getDirectionToLight(worldPosition, xyz_type, rgb_parameter);
            float sceneDiameter = sceneProperties[3][1];
            vec3 offset = -sceneDiameter * offsetScale * directionToLight;
            vec4 offsetPosition = vec4(worldPosition + offset, 1.0);
            gl_Position = projectionMatrix * (viewMatrix * offsetPosition);
        }
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},rc=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return x(ae,o(Oo,!0,u),j3,Jo,R3,{aw:p(Vn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},N3=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},W3=$(function(e,r){return o(Mu,N3(e),r)}),G3=E(function(e,r,n,a){var t=o(Ho,n,F3),i=function(){var u=T(e,r);return u.a?u.b?En(h([t,rc()])):t:u.b?rc():z}(),c=To(a),l=c;return o(W3,o(Bt,cr,Po(a)),o(Io,B(l,l,l),i))}),Y3=$(function(e,r){return L(G3,!0,!0,e,r)}),H3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Wu=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),I3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),J3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Bu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(H3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Wu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return x(I3,n,a,t,i,c)}},O3=J3,Gu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(u3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(w3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Y3,O3(t),a)]);case 2:var t=e.a,i=e.b;return h([o(_3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(k3,$3(c),l)]);default:var u=e.a;return o(zo,Gu,u)}},q3=function(e){return o(zo,Gu,e)},Z3=$(function(e,r){return e1({aI:$0(e.es),ev:e.ev,aJ:f0(.5),ca:e.ca,aK:T(Ti(Oe(e.cS.fS)),Ti(Oe(e.cS.eW))),aP:q3(r),fB:!0,fJ:o(Nu,Fr(e.fI),Fr(e.fK)),ei:So})}),lt=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),X3=vr({fU:-1,fY:0,c5:0}),Q3=vr({fU:0,fY:-1,c5:0}),K3=Ye(function(e,r,n,a,t,i){var c=o(lt,n,i)?yo:Vu,l=o(lt,r,t)?ql:Q3,u=o(lt,e,a)?xl:X3,v=B(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(be,o(ut,e,a),o(ut,r,t),o(ut,n,i)),m=dr({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),eb=$(function(e,r){return ye(K3,Vr(e),Er(e),Ur(e),Vr(r),Er(r),Ur(r))}),rb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Co,e,o(eb,p(Dt,-c,-l,-u),p(Dt,c,l,u)))}),nb=$(function(e,r){return o(Te,function(n){if(n.$===2){var a=n.a;return a}else return mo},o(Aa,e,r.av))}),ab=$(function(e,r){return o(sr,mo,Fa(o(Ba,nb(e),r)))}),tb=$(function(e,r){return o(ab,e,r.eA)}),ob=tb,vt=function(e){return p(Kl,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},ib=function(e){var r=po(e),n=r.cM,a=r.cc,t=r.b5;return p(Vn,vt(n),vt(a),vt(t))},cb=function(e){return p(Wu,0,jt(ib(e)),jt(0))},jn=S(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),lb=S(function(e,r,n){var a=xo(n),t=Pr(a),i=Tr(a),c=zr(a),l=p(jn,e,r,Gr(a)),u=r>=0?dr({cA:l,c3:t,c4:i,c6:c}):dr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=wo(n),s=v.a,m=v.b,d=v.c,f=de(o(K,r,s)),g=de(o(K,r,m)),b=de(o(K,r,d));return{er:u,aK:B(f,g,b)}}),nc=function(e){return ho(qo(e))},ub=function(e){return Uu(qo(e))},vb=S(function(e,r,n){var a=de(o(K,r,ju(n))),t=de(o(K,r,Ru(n))),i=r>=0?nc(n):fr(nc(n)),c=p(jn,e,r,ub(n));return{k:o(Fn,c,i),e9:t,fu:a}}),$b=S(function(e,r,n){return o(Ml,o(jn,e,r),n)}),fb=S(function(e,r,n){return o(kl,o(K,X(r),To(n)),p(jn,e,r,Po(n)))}),sb=S(function(e,r,n){return o(Dl,o(jn,e,r),n)}),Yu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Co,c,p(lb,cr,e,n));case 1:var c=r.a,a=r.b;return o(zl,c,p(sb,cr,e,a));case 3:var c=r.a,t=r.b;return o(Tl,c,p(fb,cr,e,t));case 2:var c=r.a,i=r.b;return o(wl,c,p(vb,cr,e,i));case 4:var c=r.a,l=r.b;return o(Pl,c,p($b,cr,e,l));default:var u=r.a;return Ll(o(ne,Yu(e),u))}}),mb=$(function(e,r){return(r-Rc(r/e)*e)/e}),db=function(e){return 2*nr*e},pb=E(function(e,r,n,a){return e+(r-e)*(1+jr(db(o(mb,n,a))))/2}),$t=function(e){return o(Yu,L(pb,1,1.1,o(ra,"period",e),e.db),o(rb,cb(o(ob,"cube color",e)),B(1,1,1)))},bb=$(function(e,r){return o(Z3,{es:p(v0,46,46,46),ev:e0(e),ca:e.ca,cS:e.cS,fI:-Li(135),fK:-Li(45)},h([$t(e),o(Pi,-2,$t(e)),o(Pi,2,$t(e))]))}),gb=L(Sd,bb,kd,Md,Cd);const hb={Main:{init:gb(o(D,function(e){return De({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ma(wn)))},o(k,"left",Z))},o(k,"pressedKeys",ma(wn)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},_b=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},yb=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Sb=hb.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});yb();_b(Sb);
