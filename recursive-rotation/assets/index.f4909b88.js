(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Sr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Gt(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Yt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function wa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function qu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Zu=[];function Xu(e){return e.length}var Qu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ku=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),ev=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var rv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+nv()),r});function nv(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=pi(e),r=pi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var av=$(function(e,r){var n=I(e,r);return n<0?Vc:n?Nf:Fc}),Mn=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Xe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var tv=$(ar);function g(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function La(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ov=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return g(i)});Ye(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return g(c)});$(function(e,r){return g(La(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return g(La(r).sort(function(n,a){var t=o(e,n,a);return t===Fc?0:t===Vc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var iv=$(Math.pow);$(function(e,r){return r%e});var cv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),lv=Math.PI,uv=Math.cos,vv=Math.sin;$(Math.atan2);function $v(e){return e}function fv(e){return e===1/0||e===-1/0}var sv=Math.ceil,mv=Math.floor,dv=Math.round,pv=Math.sqrt,ni=Math.log,bv=isNaN;function gv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var hv=$(function(e,r){return e+r});function _v(e){var r=e.charCodeAt(0);return isNaN(r)?q:ie(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function yv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Sv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var xv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=$(function(e,r){return r.split(e)}),wv=$(function(e,r){return r.join(e)}),Lv=S(function(e,r,n){return n.slice(e,r)});function Pv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Tv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=$(function(e,r){return r.indexOf(e)>-1}),Mv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var kv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function uc(e){return e+""}function Dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ie(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ie(r):q}function Bv(e){return La(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Vv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ev(e){return{$:0,a:e}}function Ht(e){return{$:2,b:e}}var Uv=Ht(function(e){return typeof e=="boolean"?$e(e):Ze("a BOOL",e)}),Rv=Ht(function(e){return typeof e=="number"?$e(e):Ze("a FLOAT",e)}),jv=Ht(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ze("a STRING",e)});function Nv(e){return{$:3,b:e}}var Wv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function xr(e,r){return{$:9,f:e,g:r}}var Gv=$(function(e,r){return{$:10,b:r,h:e}}),Yv=$(function(e,r){return xr(e,[r])}),Hv=S(function(e,r,n){return xr(e,[r,n])});U(function(e,r,n,a){return xr(e,[r,n,a])});he(function(e,r,n,a,t){return xr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return xr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return xr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return xr(e,[r,n,a,t,i,c,l])});Gt(function(e,r,n,a,t,i,c,l,u){return xr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return Se(o(ao,"This is not valid JSON! "+a.message,r))}});var vc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ze("null",r);case 3:return Gn(r)?ai(e.b,r,g):Ze("a LIST",r);case 4:return Gn(r)?ai(e.b,r,Iv):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ie(v)?v:Se(o(bi,n,v.a));case 7:var a=e.e;if(!Gn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ie(v)?v:Se(o(Ec,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ie(v))return Se(o(bi,i,v.a));t=ar(z(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ie(v))return v;c=c(v.a)}return $e(c);case 10:var v=je(e.b,r);return Ie(v)?je(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=je(m.a,r);if(Ie(v))return v;s=ar(v.a,s)}return Se(Wf(Fe(s)));case 1:return Se(o(ao,e.a,r));case 0:return $e(e.a)}}function ai(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ie(c))return Se(o(Ec,i,c.a));t[i]=c.a}return $e(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Iv(e){return o(os,e.length,function(r){return e[r]})}function Ze(e,r){return Se(o(ao,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&ti(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return ti(e.g,r.g)}}function ti(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function $c(e){return e}S(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Ov(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var mt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function qv(e){return{$:5,b:e}}var Zv=0;function It(e){var r={$:0,e:Zv++,f:e,g:null,h:[]};return Jt(r),r}function fc(e){return dr(function(r){r(Nr(It(e)))})}function sc(e,r){e.h.push(r),Jt(e)}var Xv=$(function(e,r){return dr(function(n){sc(e,r),n(Nr(Mn))})}),Ga=!1,oi=[];function Jt(e){if(oi.push(e),!Ga){for(Ga=!0;e=oi.shift();)Qv(e);Ga=!1}}function Qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return Ot(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Ot(e,r,n,a,t,i){var c=o(vc,e,r?r.flags:void 0);Ie(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Kv(l,d);function d(f,h){var b=o(a,f,v);s(v=b.a,h),ci(l,b.b,t(v))}return ci(l,u.b,t(v)),m?{ports:m}:{}}var er={};function Kv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=r$(t,r)}return n}function e$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function r$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,qv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=It(o(mt,l,e.b))}var n$=$(function(e,r){return dr(function(n){e.g(r),n(Nr(Mn))})});$(function(e,r){return o(Xv,e.h,{$:0,a:r})});function mc(e){return function(r){return{$:1,k:e,l:r}}}function a$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ii=[],Ya=!1;function ci(e,r,n){if(ii.push({p:e,q:r,r:n}),!Ya){Ya=!0;for(var a;a=ii.shift();)t$(a.p,a.q,a.r);Ya=!1}}function t$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)sc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=o$(e,t,a,r.l);n[t]=i$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function o$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function i$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function c$(e){er[e]&&an(3)}$(function(e,r){return r});function l$(e,r){return c$(e),er[e]={f:u$,u:r,a:v$},mc(e)}var u$=$(function(e,r){return function(n){return e(r(n))}});function v$(e,r){var n=P,a=er[e].u,t=Nr(null);er[e].b=t,er[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(vc,a,c);Ie(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,lr=typeof document<"u"?document:{};function qt(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function dt(e){return{$:0,a:e}}var dc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Zt(n),e:t,f:e,b:i}})}),Wr=dc(void 0),$$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Zt(n),e:t,f:e,b:i}})}),f$=$$(void 0);function s$(e,r,n,a){return{$:3,d:Zt(e),g:r,h:n,i:a}}var m$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Cr([e,r],function(){return e(r)})});S(function(e,r,n){return Cr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Cr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Cr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return Cr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return Cr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Cr([e,r,n,a,t,i,c,l],function(){return Yt(e,r,n,a,t,i,c,l)})});Gt(function(e,r,n,a,t,i,c,l,u){return Cr([e,r,n,a,t,i,c,l,u],function(){return wa(e,r,n,a,t,i,c,l,u)})});var pc=$(function(e,r){return{$:"a0",n:e,o:r}}),d$=$(function(e,r){return{$:"a1",n:e,o:r}}),bc=$(function(e,r){return{$:"a2",n:e,o:r}}),wr=$(function(e,r){return{$:"a3",n:e,o:r}}),p$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function b$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(pc,r.n,h$(e,r.o)):r});function h$(e,r){var n=lo(r);return{$:r.$,a:n?p(is,n<3?_$:y$,ke(e),r.a):o($a,e,r.a)}}var _$=$(function(e,r){return z(e(r.a),r.b)}),y$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Zt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?li(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?li(c,t,i):c[t]=i}return r}function li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)qt(c,hr(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?S$(e,t):a==="a0"?w$(e,r,t):a==="a3"?x$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function S$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function x$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function w$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=L$(r,i),e.addEventListener(t,c,Xt&&{passive:lo(i)<2}),a[t]=c}}var Xt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Xt=!0}}))}catch{}function L$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ie(i)){for(var c=lo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function P$(e,r){return e.$==r.$&&Or(e.a,r.a)}function gc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){_e(n,0,a,r);return}(f?!T$(m,d):m!==d)&&_e(n,2,a,d),Je(h,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ui(e,r,n,a,z$);return;case 2:ui(e,r,n,a,M$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=Qt(e.d,r.d);y&&_e(n,4,a,y);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function T$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ui(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Qt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&P$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function M$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],b=u[d],y=h.a,x=b.a,_=h.b,w=b.b,M=void 0,N=void 0;if(y===x){f++,Je(_,w,t,f),f+=_.b||0,m++,d++;continue}var R=l[m+1],E=u[d+1];if(R){var j=R.a,W=R.b;N=x===j}if(E){var B=E.a,O=E.b;M=y===B}if(M&&N){f++,Je(_,O,t,f),$n(i,t,y,w,d,c),f+=_.b||0,f++,fn(i,t,y,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,$n(i,t,x,w,d,c),Je(_,O,t,f),f+=_.b||0,m+=1,d+=2;continue}if(N){f++,fn(i,t,y,_,f),f+=_.b||0,f++,Je(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(R&&j===B){f++,fn(i,t,y,_,f),$n(i,t,x,w,d,c),f+=_.b||0,f++,Je(W,O,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;fn(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var Q=Q||[],b=u[d];$n(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var hc="_elmW6BL";function $n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}$n(e,r,n+hc,a,t,i)}function fn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}fn(e,r,n+hc,a,t)}function _c(e,r,n,a){sn(e,r,n,0,0,r.b,a)}function sn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)_c(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&sn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&sn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return sn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,y=0;y<h.length;y++){t++;var x=d===1?h[y]:h[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=sn(b[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function yc(e,r,n,a){return n.length===0?e:(_c(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=k$(t,a);t===e&&(e=i)}return e}function k$(e,r){switch(r.$){case 0:return D$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return A$(e,r);case 5:return r.s(e);default:an(10)}}function D$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function A$(e,r){var n=r.s,a=B$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&qt(e,a),e}function B$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;qt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Kt(e){if(e.nodeType===3)return dt(e.textContent);if(e.nodeType!==1)return dt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(wr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(Kt(v[a]),u);return p(Wr,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var V$=U(function(e,r,n,a){return Ot(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Kt(l);return Sc(i,function(v){var s=c(v),m=gc(u,s);l=yc(l,u,m,t),u=s})})});U(function(e,r,n,a){return Ot(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=lr.title,v=lr.body,s=Kt(v);return Sc(i,function(m){ca=c;var d=l(m),f=Wr("body")(P)(d.eu),h=gc(s,f);v=yc(v,s,h,t),s=f,ca=0,u!==d.fL&&(lr.title=u=d.fL)})})});var ua=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Sc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o($o,uo,dr(function(){r&&history.go(r),e()}))});$(function(e,r){return o($o,uo,dr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o($o,uo,dr(function(){history.replaceState({},"",r),e()}))});var E$={addEventListener:function(){},removeEventListener:function(){}},U$=typeof window<"u"?window:E$;S(function(e,r,n){return fc(dr(function(a){function t(i){It(n(i))}return e.addEventListener(r,t,Xt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ie(n)?ie(n.a):q});function xc(e,r){return dr(function(n){ua(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Ov(ls(e)))})})}function R$(e){return dr(function(r){ua(function(){r(Nr(e()))})})}$(function(e,r){return xc(r,function(n){return n[e](),Mn})});$(function(e,r){return R$(function(){return U$.scroll(e,r),Mn})});S(function(e,r,n){return xc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var j$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ie(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var N$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ie(m):q}a.push(L(bl,u[0],u.index,t,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ie(v):q}return n(L(bl,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var vi=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var W$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},G$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Y$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),H$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),J$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),O$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),q$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Z$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),X$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Q$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},K$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ef=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},rf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},nf=function(e){e.gl.disable(e.gl.CULL_FACE)},af=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},tf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},of=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$i=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],cf=[K$,ef,rf,Cc,wc,nf,af,tf,of];function fi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function lf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Lc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function uf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,y,x){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<h;_++)f[b++]=h===1?y[w][x]:y[w][x][_]})}var u=Lc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(eo(n.b)*s);xn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function vf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=$f(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*eo(r.b),indexBuffer:null,buffers:{}}}function $f(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function si(e,r){return e+"#"+r}var Pc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=si(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=vi++,v||(v=fi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=vi++,s||(s=fi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=lf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=ff(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=si(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),sf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=vf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=uf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=Lc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,xn(m0(n),i.a),u=0;u<$i.length;u++){var M=n[$i[u]];M.toggle!==n.toggle&&M.enabled&&(cf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function ff(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,y=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function sf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var mf=S(function(e,r,n){return s$(r,{g:n,f:{},h:e},yf,Sf)}),df=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),pf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),bf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),gf=$(function(e,r){e.contextAttributes.antialias=!0}),hf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),_f=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function yf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(s0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),W$(function(){return o(Pc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Sf(e,r){return r.f=e.f,Pc(r)}var xf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Cf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Cf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),mi=new Float64Array(3),di=new Float64Array(3),wf=S(function(e,r,n){return new Float64Array([e,r,n])}),Lf=function(e){return e[0]},Pf=function(e){return e[1]},Tf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var zf=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Tc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Tc);function zc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(Tc(e,r,n),n)}$(zc);function Mc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Mc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Mf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(mn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bt);$(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var kf=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Df=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},Af=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Bf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Bf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Ff=new Float64Array(16),Vf=new Float64Array(16),Ef=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Uf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ye(kc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return kc(c,l,i,t,n,a)});function Dc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ye(Dc);U(function(e,r,n,a){return Dc(e,r,n,a,-1,1)});function Ac(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],b=e[12],y=e[13],x=e[14],_=e[15],w=r[0],M=r[1],N=r[2],R=r[3],E=r[4],j=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],Me=r[14],Ce=r[15];return n[0]=a*w+l*M+m*N+b*R,n[1]=t*w+u*M+d*N+y*R,n[2]=i*w+v*M+f*N+x*R,n[3]=c*w+s*M+h*N+_*R,n[4]=a*E+l*j+m*W+b*B,n[5]=t*E+u*j+d*W+y*B,n[6]=i*E+v*j+f*W+x*B,n[7]=c*E+s*j+h*W+_*B,n[8]=a*O+l*Q+m*le+b*fe,n[9]=t*O+u*Q+d*le+y*fe,n[10]=i*O+v*Q+f*le+x*fe,n[11]=c*O+s*Q+h*le+_*fe,n[12]=a*ce+l*pe+m*Me+b*Ce,n[13]=t*ce+u*pe+d*Me+y*Ce,n[14]=i*ce+v*pe+f*Me+x*Ce,n[15]=c*ce+s*pe+h*Me+_*Ce,n}$(Ac);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],b=r[0],y=r[1],x=r[2],_=r[4],w=r[5],M=r[6],N=r[8],R=r[9],E=r[10],j=r[12],W=r[13],B=r[14];return n[0]=a*b+c*y+v*x,n[1]=t*b+l*y+s*x,n[2]=i*b+u*y+m*x,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*R+v*E,n[9]=t*N+l*R+s*E,n[10]=i*N+u*R+m*E,n[11]=0,n[12]=a*j+c*W+v*B+d,n[13]=t*j+l*W+s*B+f,n[14]=i*j+u*W+m*B+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Mc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,b=i*l*v,y=c*l*v,x=i*i*v+u,_=h+f,w=b-d,M=h-f,N=c*c*v+u,R=y+m,E=b+d,j=y-m,W=l*l*v+u,B=n[0],O=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],Me=n[7],Ce=n[8],br=n[9],gr=n[10],Wa=n[11],Hu=n[12],Iu=n[13],Ju=n[14],Ou=n[15];return a[0]=B*x+fe*_+Ce*w,a[1]=O*x+ce*_+br*w,a[2]=Q*x+pe*_+gr*w,a[3]=le*x+Me*_+Wa*w,a[4]=B*M+fe*N+Ce*R,a[5]=O*M+ce*N+br*R,a[6]=Q*M+pe*N+gr*R,a[7]=le*M+Me*N+Wa*R,a[8]=B*E+fe*j+Ce*W,a[9]=O*E+ce*j+br*W,a[10]=Q*E+pe*j+gr*W,a[11]=le*E+Me*j+Wa*W,a[12]=Hu,a[13]=Iu,a[14]=Ju,a[15]=Ou,a});function Rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(Rf);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function jf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(jf);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],b=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=b,n[10]=y,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=zc(e,r,ro),t=va(bt(n,a,mi),mi),i=va(bt(a,t,di),di),c=Ff,l=Vf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Ac(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=tv,Yn=rv,Bc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Yn,e,l,v)}else{var u=c.a;return p(Yn,i,l,u)}});return p(Yn,i,p(Yn,e,r,t),a)}),no=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(no,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),pi=function(e){return p(no,S(function(r,n,a){return o(A,z(r,n),a)}),P,e)},Fc=1,Nf=2,Vc=0,Se=function(e){return{$:1,a:e}},ao=$(function(e,r){return{$:3,a:e,b:r}}),bi=$(function(e,r){return{$:0,a:e,b:r}}),Ec=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Wf=function(e){return{$:2,a:e}},ie=function(e){return{$:0,a:e}},q={$:1},Gf=Tv,Yf=Jv,Ae=uc,Mr=$(function(e,r){return o(wv,e,La(r))}),to=$(function(e,r){return g(o(Cv,e,r))}),Uc=function(e){return o(Mr,`
    `,o(to,`
`,e))},kn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Er=function(e){return p(kn,$(function(r,n){return n+1}),0,e)},Hf=ov,If=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(If,e,r,P)}),Rc=$(function(e,r){return p(Hf,e,o(Kr,0,Er(r)-1),r)}),rr=Fv,jc=function(e){var r=rr(e);return 97<=r&&r<=122},Nc=function(e){var r=rr(e);return r<=90&&65<=r},Jf=function(e){return jc(e)||Nc(e)},Of=function(e){var r=rr(e);return r<=57&&48<=r},qf=function(e){return jc(e)||Nc(e)||Of(e)},Fe=function(e){return p(kn,A,P,e)},tn=_v,Zf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Uc(Xf(r))))}),Xf=function(e){return o(Qf,e,P)},Qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var y=b.a,x=y.a,_=y.b;return Jf(x)&&o(Gf,qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Mr,"",Fe(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Ae(Er(s))+" ways:"));return o(Mr,`

`,o(A,h,o(Rc,Zf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Mr,"",Fe(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Mr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return h+(Uc(o(Yf,4,f))+(`

`+d))}}),Ve=32,gt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=Zu,oo=sv,io=$(function(e,r){return ni(r)/ni(e)}),Kf=$v,Cn=oo(o(io,2,Ve)),Wc=L(gt,0,Cn,ht,ht),Gc=Qu,Yc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Hc=mv,_t=Xu,nr=$(function(e,r){return I(e,r)>0?e:r}),es=function(e){return{$:0,a:e}},co=Ku,rs=$(function(e,r){e:for(;;){var n=o(co,Ve,e),a=n.a,t=n.b,i=o(A,es(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),ns=function(e){var r=e.a;return r},as=$(function(e,r){e:for(;;){var n=oo(r/Ve);if(n===1)return o(co,Ve,e).a;var a=o(rs,e,P),t=n;e=a,r=t;continue e}}),Ic=$(function(e,r){if(r.l){var n=r.l*Ve,a=Hc(o(io,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(as,t,r.l);return L(gt,_t(r.p)+n,o(nr,5,a*Cn),i,r.p)}else return L(gt,_t(r.p),Cn,ht,r.p)}),ts=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ic,!1,{z:a,l:n/Ve|0,p:t});var i=Yc(p(Gc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),os=$(function(e,r){if(e<=0)return Wc;var n=e%Ve,a=p(Gc,n,e-n,r),t=e-n-Ve;return C(ts,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Gv,Z=Uv,k=Wv,se=Rv,$a=Yv,is=Hv,ke=Ev,lo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Wr("div"),cs=function(e){return{$:2,a:e}},Jc=$(function(e,r){return e}),Oc=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Dr=function(e){return e},ls=Dr,gi=Ye(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),us=zv,kr=yv,qr=Lv,Dn=$(function(e,r){return e<1?r:p(qr,e,kr(r),r)}),Pa=kv,Ta=function(e){return e===""},za=$(function(e,r){return e<1?"":p(qr,0,e,r)}),qc=Dv,hi=he(function(e,r,n,a,t){if(Ta(t)||o(us,"@",t))return q;var i=o(Pa,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=qc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return ie(ye(gi,e,o(za,c,t),u,r,n,a))}else return ie(ye(gi,e,t,q,r,n,a))}),_i=U(function(e,r,n,a){if(Ta(a))return q;var t=o(Pa,"/",a);if(t.b){var i=t.a;return C(hi,e,o(Dn,i,a),r,n,o(za,i,a))}else return C(hi,e,"/",r,n,a)}),yi=S(function(e,r,n){if(Ta(n))return q;var a=o(Pa,"?",n);if(a.b){var t=a.a;return L(_i,e,ie(o(Dn,t+1,n)),r,o(za,t,n))}else return L(_i,e,q,r,n)});$(function(e,r){if(Ta(r))return q;var n=o(Pa,"#",r);if(n.b){var a=n.a;return p(yi,e,ie(o(Dn,a+1,r)),o(za,a,r))}else return p(yi,e,q,r)});var vs=Mv,uo=function(e){},An=Nr,$s=An(0),Zc=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(kn,e,r,Fe(m)):L(Zc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),pr=S(function(e,r,n){return L(Zc,e,r,0,n)}),re=$(function(e,r){return p(pr,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=mt,vo=$(function(e,r){return o(fa,function(n){return An(e(n))},r)}),fs=S(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return An(o(e,a,t))},n)},r)}),ss=function(e){return p(pr,fs(A),An(P),e)},ms=n$,ds=$(function(e,r){var n=r;return fc(o(fa,ms(e),n))}),ps=S(function(e,r,n){return o(vo,function(a){return 0},ss(o(re,ds(e),r)))}),bs=S(function(e,r,n){return An(0)}),gs=$(function(e,r){var n=r;return o(vo,e,n)});er.Task=e$($s,ps,bs,gs);var hs=mc("Task"),$o=$(function(e,r){return hs(o(vo,e,r))}),_s=V$,ys=gv,sa={$:1},Xc=function(e){return{$:2,a:e}},Ma={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},Ss=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ie(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Qc=function(e){var r=e.b;return o(Ne,Ma,r)},yr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),xs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Qc(n):n;case 2:var i=a.a.cX;return(I(i+r.eJ,on(n).db)>0?o(te,Ss,yr(o(Ne,sa,t))):Dr)(o(Ne,Xc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Oc,l.eA,Xe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ne,Ma,{B:z(v,s),ab:P,T:o(A,t.B,t.T)})}}),Kc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ws=$(function(e,r){return Fe(p(Cs,e,r,P))}),el=S(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,b=h.a,y=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(ws,r-4,y))))):o(A,_,o(A,c,o(A,s,o(A,b,p(el,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),Ls=$(function(e,r){return p(el,0,e,r)}),Ps=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(g([a]),t)),c=o(Ls,e,i),l=o(Kc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,sa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var m=s.a,d=s.b;return o(Ne,sa,{B:m,ab:P,T:d})}else return r}}),Ts=function(e){var r=e.b;return o(Ne,sa,r)},zs=function(e){var r=e.b;return o(Ne,Xc({cX:on(e).db}),r)},Ms=$(function(e,r){switch(e.$){case 1:return Ts(r);case 2:return Qc(r);case 3:return zs(r);default:var n=e.a;return o(Ps,n,r)}}),rl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),ks=$(function(e,r){return Xe(r,{av:e(r.av)})}),Ds=function(e){return{$:3,a:e}},As=function(e){return{$:2,a:e}},nl=$(function(e,r){return{$:0,a:e,b:r}}),Bs=$(function(e,r){return{$:1,a:e,b:r}}),Be=$(function(e,r){if(r.$)return q;var n=r.a;return ie(e(n))}),X=function(e){return e<0?-e:e},fo=Av,Fs=S(function(e,r,n){return o(yr,0/0,fo(o(e,r,n)))}),al=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Vs=xv,tl=function(e){return p(Vs,A,P,e)},Es=$(function(e,r){var n=o(al,function(a){return a!=="0"&&a!=="."},tl(r));return ve(e&&n?"-":"",r)}),oe=uc,yt=hv,ol=Vv,il=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",il(t))}else{var i=rr(r);return i>=48&&i<57?o(yt,ol(i+1),n):"0"}},St=fv,Us=bv,ka=function(e){return o(yt,e,"")},cl=S(function(e,r,n){return e<=0?n:p(cl,e>>1,ve(r,r),e&1?ve(n,r):n)}),wn=$(function(e,r){return p(cl,e,r,"")}),xt=S(function(e,r,n){return ve(n,o(wn,e-kr(n),ka(r)))}),Ct=Sv,ll=function(e){var r=o(to,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Rs=function(e){var r=o(to,"e",oe(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(yr,0,qc(o(vs,"+",t)?o(Dn,1,t):t)),c=ll(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(yr,"0",o(Be,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Be,rl(ka),tn(ve(o(wn,X(i),"0"),v))))):p(xt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},js=S(function(e,r,n){if(St(n)||Us(n))return oe(n);var a=n<0,t=ll(Rs(X(n))),i=t.a,c=t.b,l=kr(i)+r,u=ve(o(wn,-l+1,"0"),p(xt,l,"0",ve(i,c))),v=kr(u),s=o(nr,1,l),m=o(e,a,p(qr,s,v,u)),d=p(qr,0,s,u),f=m?Ct(o(yr,"1",o(Be,il,tn(Ct(d))))):d,h=kr(f),b=f==="0"?f:r<=0?ve(f,o(wn,X(r),"0")):I(r,kr(c))<0?p(qr,0,h-r,f)+("."+p(qr,h-r,h,f)):ve(i+".",p(xt,r,"0",c));return o(Es,a,b)}),ul=js($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Ns=Fs(ul),Ws=S(function(e,r,n){var a=o(io,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ns,t,n)}),vl=av,so=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(vl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ie(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},en=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return C(Y,0,r,n,C(Y,1,v,s,m,d),C(Y,1,i,c,l,u))}else return C(Y,e,i,c,C(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,y=f.d,x=f.e,d=a.e;return C(Y,0,v,s,C(Y,1,h,b,y,x),C(Y,1,r,n,d,t))}else return C(Y,e,r,n,a,t)}),wt=S(function(e,r,n){if(n.$===-2)return C(Y,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(vl,e,t);switch(u){case 0:return C(en,a,t,i,p(wt,e,r,c),l);case 1:return C(Y,a,t,r,c,l);default:return C(en,a,t,i,c,p(wt,e,r,l))}}),gn=S(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(Y,1,t,i,c,l)}else{var u=a;return u}}),Gs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},$l=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,b=d.d,y=d.e,x=v.e;return C(Y,0,f,h,C(Y,1,n,a,C(Y,0,i,c,l,u),b),C(Y,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,x=w.e;return C(Y,1,n,a,C(Y,0,i,c,l,u),C(Y,0,s,m,d,x))}else return e},Si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,b=f.c,y=f.d,x=f.e;return C(Y,0,i,c,C(Y,1,u,v,s,m),C(Y,1,n,a,d,C(Y,0,h,b,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var h=M.b,b=M.c,y=M.d,x=M.e;return C(Y,1,n,a,C(Y,0,i,c,w,d),C(Y,0,h,b,y,x))}else return e},Ys=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(Y,n,l,u,v,C(Y,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Si(r)}else break e;else return c.a,c.d,Si(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(Y,r,n,a,ra(t),l);var u=$l(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(en,v,s,m,ra(d),f)}else return tr}else return C(Y,r,n,a,ra(t),l)}else return tr},hn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(Y,n,a,t,o(hn,e,i),c);var u=$l(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(en,v,s,m,o(hn,e,d),f)}else return tr}else return C(Y,n,a,t,o(hn,e,i),c);else return o(Hs,e,Yt(Ys,e,r,n,a,t,i,c))}),Hs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=Gs(c);if(l.$===-1){var u=l.b,v=l.c;return C(en,n,u,v,i,ra(c))}else return tr}else return C(en,n,a,t,i,o(hn,e,c))}else return tr}),Is=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(Y,1,a,t,i,c)}else{var l=n;return l}}),Hn=S(function(e,r,n){var a=r(o(so,e,n));if(a.$)return o(Is,e,n);var t=a.a;return p(gn,e,t,n)}),Js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Bs,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(nl,z(i,c),p(Ws,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===3?Ds(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===2?As(n):a}))}},Os=function(e){return ks(Js(e))},qs=$(function(e,r){return o(re,Os(e),r)}),Zs=$(function(e,r){return Xe(r,{eA:o(qs,e,r.eA)})}),Xs=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Xe(a,{B:o(rl,Zs(e),a.B)}))}),Qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Ks=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Xe(t,{B:o(Qs,o(e,i.a,r),i)}))}),em=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Xe(a,{aL:!a.aL});case 2:var t=n.a;return Xe(a,{G:p(xs,e,t,a.G)});case 3:var i=n.a;return Xe(a,{G:o(Xs,i,a.G)});case 4:var c=n.a;return Xe(a,{G:p(Ks,r,c,a.G)});default:var l=n.a;return Xe(a,{G:o(Ms,l,a.G)})}}),rm=$(function(e,r){return o(Ne,Ma,{B:z(e,r(e)),ab:P,T:P})}),nm=a$,xi=nm(P),ma=Nv,Ln=jv,am=l$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return ke({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ma(Ln)))},o(k,"left",Z))},o(k,"pressedKeys",ma(Ln)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return ke({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),tm=function(e){return{$:4,a:e}},om={$:0},im=$c,He=$(function(e,r){return o(bc,e,im(r))}),H=He("className"),cm=function(e){var r=e.b.B;return r.b},da=He("id"),lm=m$,pa=lm,um=d$,ne=um,vm={$:1},$m=function(e){return{$:3,a:e}},fm=function(e){return{$:5,a:e}},Ci=Wr("a"),mo=Wr("button"),wi=function(e){return o(He,"href",g$(e))},sm=wr("clip-rule"),we=wr("d"),mm=wr("fill"),fl=dc("http://www.w3.org/2000/svg"),dm=fl("svg"),pm=wr("viewBox"),bm=o(p$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ee=dm(g([pm("0 0 24 24"),mm("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),bm("http://www.w3.org/2000/svg")])),gm=wr("fill-rule"),Le=fl("path"),Ar={eD:Ee(g([o(Le,g([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ee(g([o(Le,g([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ee(g([o(Le,g([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ee(g([o(Le,g([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,g([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ee(g([o(Le,g([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,g([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ee(g([o(Le,g([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ee(g([o(Le,g([we("M7 5V19L18 12L7 5Z")]),P)])),fr:Ee(g([o(Le,g([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ee(g([o(Le,g([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ee(g([o(Le,g([gm("evenodd"),sm("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ee(g([o(Le,g([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ee(g([o(Le,g([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},hm=function(e){return{$:0,a:e}},sl=pc,ml=$(function(e,r){return o(sl,e,hm(r))}),po=function(e){return o(ml,"click",ke(e))},Li=He("target"),_m=He("title"),Lt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(Y,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),ym=dt,sr=ym,Sm=function(e){return p(no,S(function(r,n,a){return o(A,n,a)}),P,e)},xm=$(function(e,r){return{$:3,a:e,b:r}}),Cm=$(function(e,r){return{$:2,a:e,b:r}}),wm=$(function(e,r){return{$:0,a:e,b:r}}),Lm=$(function(e,r){return{$:1,a:e,b:r}}),Bn=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pm=L(Bn,0/255,0/255,0/255,1),Tm=$c,dl=$(function(e,r){return o(bc,e,Tm(r))}),zm=dl("checked"),Oe=dv,Mm=S(function(e,r,n){return ve(o(wn,e-kr(n),ka(r)),n)}),Pn=cv,pl=function(e){var r=function(n){return n<10?Ae(n):ka(ol(87+n))};return e<16?r(e):ve(pl(e/16|0),r(o(Pn,16,e)))},km=o(te,pl,o(Mm,2,"0")),bo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Dm=function(e){var r=bo(e),n=r.cM,a=r.cc,t=r.b5;return o(Mr,"",o(A,"#",o(re,o(te,Oe,km),g([n*255,a*255,t*255]))))},Pt=He("htmlFor"),Am=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ba=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Bm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),go=$(function(e,r){return p(pr,Bm(e),P,r)}),bl=U(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Fm=N$,Vm=Bv,Em=$(function(e,r){if(r.$)return Se(e);var n=r.a;return $e(n)}),Um=j$,Rm=function(e){return o(Um,{ew:!1,fg:!1},e)},ho=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return q},jm=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return $e(e(n))}}),Nm=function(e){return{$:2,a:e}},Wm=function(e){return{$:0,a:e}},Gm=function(e){return{$:1,a:e}},Ha=$(function(e,r){return rr(r)-rr(e)}),Ia=S(function(e,r,n){var a=rr(n);return I(rr(e),a)<1&&I(a,rr(r))<1}),Ym=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):Se(Gm(r))},a=p(Ia,"0","9",r)?$e(o(Ha,"0",r)):p(Ia,"a","z",r)?$e(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?$e(10+o(Ha,"A",r)):Se(Wm(r));return o(ba,n,a)}),gl=$(function(e,r){var n=tn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ba,function(c){return o(ba,function(l){return $e(c+l*e)},o(gl,e,i))},o(Ym,e,t))}),Hm=$(function(e,r){return 2<=e&&e<=36?o(gl,e,Ct(r)):Se(Nm(e))}),Im=Hm(16),Jm=S(function(e,r,n){return L(Bn,e,r,n,1)}),hl=U(function(e,r,n,a){return L(Bn,e,r,n,a)}),Fn=iv,Om=$(function(e,r){var n=o(Fn,10,e);return Oe(r*n)/n}),qm=Pv,Zm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=tl(n);if(a.b&&!a.b.b){var t=a.a;return Vm(g([t,t]))}else return n};return o(te,qm,o(te,function(n){return o(Be,function(a){return p(Fm,1,a,n)},Rm(e))},o(te,Am(ho),o(te,Be(function(n){return n.fG}),o(te,Be(go(Dr)),o(te,Em("Parsing hex regex failed"),ba(function(n){var a=o(re,o(te,r,o(te,Im,jm(Kf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(hl,t/255,c/255,u/255,o(Om,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Jm,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),ga=Wr("input"),Tt=Wr("label"),zt=He("name"),_l=$(function(e,r){return p(pr,k,r,e)}),Xm=o(_l,g(["target","checked"]),Z),Qm=function(e){return o(ml,"change",o($a,e,Xm))},Km=function(e){return z(e,!0)},ed=function(e){return{$:1,a:e}},rd=$(function(e,r){return o(sl,e,ed(r))}),nd=o(_l,g(["target","value"]),Ln),_o=function(e){return o(rd,"input",o($a,Km,o($a,e,nd)))},yl=He("max"),Sl=He("min"),xl=function(e){return o(He,"step",e)},ha=He("type"),yo=He("value"),Pi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(J,P,g([o(Tt,g([Pt(r)]),g([o(J,g([H("relative w-full")]),g([o(J,g([H("inline-block")]),g([sr(r)])),o(J,g([H("inline-block float-right")]),g([sr(oe(n))]))]))])),o(ga,g([ha("range"),o(ne,"width","100%"),da(r),zt(r),Sl(oe(a)),yl(oe(t)),yo(oe(n)),xl(oe(i)),_o(o(te,fo,o(te,yr(42),c)))]),P)]))},ad=$(function(e,r){if(r.$)return e;var n=r.a;return n}),td=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,g([H("h-12 py-4")]),g([o(Tt,g([H("block"),Pt(e)]),g([o(ga,g([H("relative bottom-[1px] align-middle mr-2"),ha("checkbox"),da(e),zt(e),Qm(xm(e)),zm(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Pi({cf:e,cr:i,cv:t,cz:wm(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Pi({cf:e,cr:i,cv:t,cz:o(te,Oe,Lm(e)),cV:1,c0:c});default:var c=r.a;return o(J,P,g([o(J,g([o(ne,"margin-bottom","6px")]),g([o(Tt,g([Pt(e)]),g([sr(e)]))])),o(ga,g([ha("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),da(e),zt(e),_o(function(l){return o(Cm,e,o(ad,Pm,Zm(l)))}),yo(Dm(c))]),P)]))}}),od=function(e){return o(J,g([H("p-4 border-y-[0.5px] border-white20")]),g([o(J,g([H("text-lg pb-2")]),g([sr(e.fh)])),o(J,g([H("pl-2 pr-2")]),Sm(o(Lt,td,e.av)))]))},id=function(e){return o(J,g([H("text-xs text-white60")]),o(re,od,e))},cd=function(e){return o(J,g([H("absolute left-[104px] bottom-2 text-sm text-white40")]),g([sr("clock: "+o(ul,3,on(e).db))]))},ld=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Oe(60/(on(e).db-n))},o(Be,o(te,ns,function(n){return n.db}),ho(o(Kc,59,r))))},ud=function(e){return o(J,g([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ld(e);if(r.$===1)return g([sr("... Fps")]);var n=r.a;return g([sr(Ae(n)+" Fps")])}())},vd=function(e){return{$:0,a:e}},$d=function(e){var r=e.b.T;return Er(r)},fd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Er(r)+1+Er(n)},sd=function(e){return o(ga,g([H("absolute w-full"),ha("range"),Sl(Ae(0)),yl(Ae(fd(e)-1)),yo(Ae($d(e))),xl(Ae(1)),_o(o(te,fo,o(te,yr(42),o(te,Oe,vd))))]),P)},Ti={$:1},zi={$:3},Mi={$:2},Mt=function(e){return!e.b},Cl=dl("disabled"),Ja=S(function(e,r,n){return o(mo,g([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),Cl(e),po(r)]),g([sr("REC")]))}),Oa=S(function(e,r,n){return o(mo,g([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Cl(e),po(n)]),g([o(J,g([H("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),md=function(e){var r=e.a,n=e.b.ab;return o(J,g([H("py-1")]),g([function(){switch(r.$){case 0:return p(Ja,!1,Ti,"text-red-500 font-bold");case 1:return p(Ja,!1,Mi,"text-white60 hover:text-white80 font-bold");default:return p(Ja,!0,Mi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Oa,Mt(n),Ar.fq,zi);case 1:return p(Oa,Mt(n),Ar.fq,zi);default:return p(Oa,!1,Ar.fp,Ti)}}()]))},dd=function(e){return o(J,g([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([sd(e),md(e),ud(e),cd(e)]))},pd=function(e){var r=e.a;return _r(r,Ma)},bd=$(function(e,r){var n=pd(r.G)?o(J,P,P):o(J,g([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",oe(e.fs.fU+.5*e.cS.fS)+"px"),o(ne,"top",oe(-e.fs.fY+.5*e.cS.eW)+"px")]),g([o(J,g([H(e.fs.e4?"text-black80":"text-black40")]),g([Ar.fs]))]));return o(J,P,g([n]))}),gd=$(function(e,r){var n=o(mo,g([H(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),po(vm),_m("Distraction Free Mode")]),g([Ar.f0])),a=40,t=260,i=o(J,g([H("absolute w-8 bottom-12")]),g([o(Ci,g([H("text-twitterBlue40 hover:text-twitterBlue"),wi("https://twitter.com/AzizErkalSelman"),Li("_blank")]),g([Ar.fN]))])),c=80,l=o(J,g([H("absolute w-8 bottom-2")]),g([o(Ci,g([H("text-githubCat40 hover:text-githubCat"),wi("https://github.com/erkal/elm-3d-playground-exploration"),Li("_blank")]),g([Ar.eQ]))])),u=e.cS.fS>640?V(e.cS.eW,a+t,e.cS.fS-(a+t)):V(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(J,g([H("fixed w-10 h-10 p-1")]),g([n])):o(J,P,g([o(J,g([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",oe(a)+"px")]),g([n,i,l])),o(J,g([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",oe(t)+"px"),o(ne,"height",oe(v)+"px")]),g([o(pa,$m,id(on(r.G).eA))])),o(J,g([H("absolute bottom-0"),o(ne,"left",oe(s)+"px"),o(ne,"height",oe(c)+"px"),o(ne,"width",oe(m)+"px")]),g([o(pa,fm,dd(r.G))])),o(bd,e,r)]))}),hd=S(function(e,r,n){var a=cm(n.G),t=on(n.G);return o(J,g([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",oe(t.cS.fS)+"px"),o(ne,"height",oe(t.cS.eW)+"px")]),g([o(J,g([H("fixed")]),g([o(pa,Jc(om),o(e,t,a))])),o(J,g([da("gui")]),g([o(gd,t,n),o(pa,tm,o(r,t,a))]))]))}),_d=Ye(function(e,r,n,a,t,i){var c=$(function(u,v){return z(L(em,r,i,u,v),xi)}),l=function(u){var v=o(Oc,n,u.e1);return z({aL:u.e1.cS.fS<500,G:o(rm,v,a)},xi)};return _s({e0:l,fH:Jc(am(cs)),fO:c,fQ:o(hd,e,t)})}),yd=U(function(e,r,n,a){return ye(_d,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),Sd=function(e){return{}},xd=S(function(e,r,n){return{av:n,e5:r,fh:e}}),wl=tr,Cd=function(e){return p(kn,$(function(r,n){var a=r.a,t=r.b;return p(gn,a,t,n)}),wl,e)},wd=S(function(e,r,n){return p(xd,e,r,Cd(n))}),Ld=wd,Pd=S(function(e,r,n){var a=r.a,t=r.b;return z(e,o(nl,z(a,t),n))}),Td=g([p(Ld,"Camera",!0,g([p(Pd,"camera height",z(1.4,1.57),1.57)]))]),zd=$(function(e,r){return r}),Md=$(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(so,e,r.av))}),kd=$(function(e,r){return o(yr,0,ho(o(go,Md(e),r)))}),Dd=$(function(e,r){return o(kd,e,r.eA)}),ki=Dd,Ad=function(e){return e},ur=function(e){return e},kt=function(e){var r=e;return-r},Bd=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),Ll=function(e){var r=e;return r.c3},Pl=function(e){var r=e;return r.c4},Fd=function(e){return o(Bd,Ll(e),Pl(e))},Gr=function(e){var r=e;return r.cA},Ur=uv,rn=vv,na=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=rn(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,h=s.fY*u,b=l*h,y=m*h,x=h*h,_=1-2*(f+x),w=s.c5*u,M=l*w,N=2*(y-M),R=2*(y+M),E=m*w,j=2*(E+b),W=2*(E-b),B=h*w,O=2*(B-d),Q=2*(B+d),le=w*w,fe=1-2*(x+le),ce=1-2*(f+le);return{fU:fe*i.fU+N*i.fY+j*i.c5,fY:R*i.fU+ce*i.fY+O*i.c5,c5:W*i.fU+Q*i.fY+_*i.c5}}),Vn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=rn(c),v=a.cA,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c5-s.c5,h=a.eH,b=h,y=b.fU*u,x=l*y,_=y*y,w=b.fY*u,M=l*w,N=y*w,R=w*w,E=1-2*(_+R),j=b.c5*u,W=l*j,B=2*(N-W),O=2*(N+W),Q=y*j,le=2*(Q+M),fe=2*(Q-M),ce=w*j,pe=2*(ce-x),Me=2*(ce+x),Ce=j*j,br=1-2*(R+Ce),gr=1-2*(_+Ce);return{fU:s.fU+br*m+B*d+le*f,fY:s.fY+O*m+gr*d+pe*f,c5:s.c5+fe*m+Me*d+E*f}}),mr=function(e){return e},Lr=function(e){var r=e;return r.c3},Pr=function(e){var r=e;return r.c4},Tr=function(e){var r=e;return r.c6},Tl=S(function(e,r,n){return mr({cA:p(Vn,e,r,Gr(n)),c3:p(na,e,r,Lr(n)),c4:p(na,e,r,Pr(n)),c6:p(na,e,r,Tr(n))})}),Di=S(function(e,r,n){return p(Tl,e(n),r,n)}),So=function(e){var r=e;return r.eH},En=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),zl=$(function(e,r){return mr({cA:o(En,e,Gr(r)),c3:Lr(r),c4:Pr(r),c6:Tr(r)})}),Vd=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),Ed=S(function(e,r,n){return o(zl,o(Vd,r,e),n)}),Ud=S(function(e,r,n){return p(Ed,So(e(n)),r,n)}),Yr=$(function(e,r){return{eH:r,cA:e}}),Rd=function(e){var r=e;return o(Yr,r.cA,r.c3)},jd=function(e){var r=e;return o(Yr,r.cA,r.c4)},Nd=function(e){var r=e;return o(Yr,r.cA,r.c6)},Wd=function(e){var r=mr({cA:e.aR,c3:Pl(e.dl),c4:Fd(e.dl),c6:Ll(e.dl)}),n=p(Ud,Nd,e.cb,p(Di,Rd,kt(e.bC),p(Di,jd,e.bx,r)));return n},Gd=function(e){return{$:1,a:e}},de=function(e){var r=e;return X(r)},Yd=function(e){return{cL:Gd(de(e.el)),c1:e.c1}},Rr=function(e){return e},Qe={fU:0,fY:0,c5:0},Ml=Dr,vr=function(e){return e},kl=vr({fU:1,fY:0,c5:0}),xo=kl,Co=vr({fU:0,fY:0,c5:1}),wo=Co,Hd=Ml({cA:Qe,c3:wo,c4:xo}),Id=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.el;return Yd({c1:Wd({bx:Rr(n),cb:ur(1e3),bC:Rr(a),aR:Ad(r),dl:Hd}),el:ur(t)})},Jd=function(e){return Id({bx:o(ki,"camera height",e),bC:o(ki,"camera height",e),aR:{fU:0,fY:2,c5:0},el:2})},jr=lv,Dt=function(e){return e*jr/180},Od=function(e){return e},qd=function(e){return ur(.01*e)},Ai=function(e){return e},Zd=function(e){return e},Xd=function(e){return{$:0,a:e}},Qd=Xd,Kd={$:3},e0=Kd,r0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),n0=r0,a0=$(function(e,r){return r.b?p(pr,A,r,e):e}),We=function(e){return p(pr,a0,P,e)},Lo=$(function(e,r){return We(o(re,e,r))}),t0=function(e){return{$:1,a:e}},o0=t0,i0=function(e){return o(wr,"height",Ae(e))},c0=function(e){return f$(b$(e))},l0=c0,u0=function(e){return{$:2,a:e}},v0=u0,$0=function(e){return o(Mr,"",e)},f0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return $0(g(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},s0=$(function(e,r){switch(r.$){case 0:return o(df,e,r);case 1:return o(pf,e,r);case 2:return o(bf,e,r);case 3:return o(gf,e,r);case 4:return o(hf,e,r);default:return o(_f,e,r)}}),m0=$(function(e,r){switch(r.$){case 0:return o(Y$,e,r);case 1:return o(H$,e,r);case 2:return o(I$,e,r);case 3:return o(J$,e,r);case 4:return o(O$,e,r);case 5:return o(q$,e,r);case 6:return o(Z$,e,r);case 7:return o(X$,e,r);default:return Q$(e)}}),d0=S(function(e,r,n){return p(mf,e,r,n)}),Bi=function(e){var r=e;return r},cn=kf,qa=L(cn,1,1,1,1),qe=S(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),p0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),b0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(p0,n*a/t,n,n*(1-a-t)/t)}),Un=wf,g0=function(e){var r=e.a,n=e.b,a=e.c;return p(Un,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Po=$(function(e,r){return g0(o(b0,e,r))}),Dl=$(function(e,r){return{dp:_r(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ke=Ef,h0=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Za=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(cn,a.bX,a.bX,a.bX,i);return ye(t,e,c,h0(a),a.dp,r,n)}),Al=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Dl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,b=o(A,C(Za,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,x=o(A,C(Za,e,r,n,a,y),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,w=o(A,C(Za,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(kn,L(Al,e,r,n,a),i,M)}}),_0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Bl=_0,To=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),y0=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,518,r,n,a)},S0=$(function(e,r){return{$:6,a:e,b:r}}),x0=S0,Fl=g([y0({V:1,W:0,Z:!1}),L(Bl,!1,!1,!1,!1),o(x0,0,1)]),nn=519,zo=8,Vl=15,Xr=7681,C0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=G$,w0=$(function(e,r){return{$:0,a:e,b:r}}),L0=w0({df:1,$7:0,dV:5}),De=xf,P0=L0(g([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),T0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},z0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=S(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(z0,a,t,i)))}),ko=function(e){return p(Mo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Do=function(e){return C(ae,g([ko(e),L(Bl,!1,!1,!1,!1)]),T0,C0,P0,{})},M0=Do({a8:Xr,co:0,cN:zo,bl:nn,c2:Vl,bt:Xr,bu:Xr}),k0=516,Fi=5386,xe=7680,D0=function(e){return o(Fn,2,e+4)},El=function(e){return Do({a8:xe,co:Vl,cN:zo,bl:k0,c2:D0(e),bt:Fi,bu:Fi})},A0=S(function(e,r,n){return We(g([p(qe,e,n,Fl),g([El(r),M0])]))}),B0=$(function(e,r){return We(o(Rc,A0(e),r))}),F0=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,513,r,n,a)},V0=F0({V:1,W:0,Z:!0}),E0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},U0=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,b=v.c;return E0(s)(m)(d)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},R0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=$(function(e,r){var n=e,a=r;return p(R0,32774,n,a)}),j0=1,Ei=771,N0=770,Ao=U0({bv:0,aH:o(Vi,j0,Ei),by:0,bA:o(Vi,N0,Ei),bF:0,bV:0}),Hr=g([V0,Ao]),W0=function(e){var r=e;return r.dO},G0=function(e){var r=e;return r.dP},Ul=function(e){var r=e;return r.dQ},Y0=function(e){var r=e;return r.dR},H0=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},$r=$(function(e,r){var n=e,a=r;return a-n}),jl=function(e){return V(o($r,Y0(e),W0(e)),o($r,H0(e),G0(e)),o($r,Rl(e),Ul(e)))},Ui=function(e){var r=e;return Gr(r)},I0=function(e){return e},J0=function(e){return mr({cA:I0({fU:e.H,fY:e.I,c5:e.J}),c3:vr({fU:e.q,fY:e.r,c5:e.s}),c4:vr({fU:e.t,fY:e.u,c5:e.v}),c6:vr({fU:e.w,fY:e.x,c5:e.y})})},Xa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Nl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,h=f;return{fU:c*h.fU+l*h.fY+u*h.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Wl=$(function(e,r){return{cA:o(Nl,e,Gr(r)),c3:o(Xa,e,Lr(r)),c4:o(Xa,e,Pr(r)),c6:o(Xa,e,Tr(r))}}),At=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),_a=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(nr,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),O0=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},q0=function(e){var r=e;return V(r.fU,r.fY,r.c5)},Qa=function(e){var r=e;return .5*r},_n=$(function(e,r){var n=e,a=r;return a+n}),Z0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qa(de(a)),c=Qa(de(n)),l=Qa(de(t)),u=q0(r),v=u.a,s=u.b,m=u.c;return{dO:o(_n,c,v),dP:o(_n,i,s),dQ:o(_n,l,m),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,m)}}),Ri=U(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=Ge(Tr(e)),d=X(l*m.fU)+X(c*m.fY)+X(i*m.c5),f=Ge(Pr(e)),h=X(l*f.fU)+X(c*f.fY)+X(i*f.c5),b=Ge(Lr(e)),y=X(l*b.fU)+X(c*b.fY)+X(i*b.c5),x=o(Z0,V(y,h,d),o(Nl,e,p(At,s,v,u)));if(a.$)return ie(x);var _=a.a;return ie(o(O0,_,x))}),Bt=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,y=i;e=f,r=h,n=b,a=y;continue e;case 1:var c=t.a,l=L(Ri,e,r,c,n),f=e,h=r,b=l,y=i;e=f,r=h,n=b,a=y;continue e;case 2:var f=e,h=r,b=n,y=i;e=f,r=h,n=b,a=y;continue e;case 3:var c=t.a,l=L(Ri,e,r,c,n),f=e,h=r,b=l,y=i;e=f,r=h,n=b,a=y;continue e;case 4:var u=t.a,f=e,h=r,b=L(Bt,e,r,n,u),y=i;e=f,r=h,n=b,a=y;continue e;default:var v=t.a,s=t.b,m=o(Wl,J0(v),e),d=r*v.bX,f=e,h=r,b=L(Bt,m,d,n,g([s])),y=i;e=f,r=h,n=b,a=y;continue e}}else return n}),ln=Lf,un=Pf,vn=Tf,Gl=function(e){return{$:4,a:e}},X0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return Gl(o(X0,e,P))},Q0={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},K0=function(e){var r=e;return r},ji=Do({a8:Xr,co:0,cN:zo,bl:nn,c2:255,bt:Xr,bu:Xr}),Zr=pv,cr=0,ep=function(e){var r=e,n=o(nr,X(r.fU),o(nr,X(r.fY),X(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=Zr(i*i+t*t+a*a);return c*n}else return cr},Pe={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Re=$(function(e,r){var n=e,a=r;return Ke({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),dn=z({bd:o(Re,Pe,Pe),bK:o(Re,Pe,Pe),bL:o(Re,Pe,Pe),bM:o(Re,Pe,Pe)},L(cn,0,0,0,0)),K=$(function(e,r){var n=r;return e*n}),Yl=514,Hl=function(e){var r=e.Z,n=e.W,a=e.V;return L(To,515,r,n,a)},Il=240,rp=g([Hl({V:1,W:0,Z:!0}),ko({a8:xe,co:Il,cN:0,bl:Yl,c2:0,bt:xe,bu:xe}),Ao]),np=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cL;if(s.$){var d=s.a;return St(v)?Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return St(v)?Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=$(function(e,r){return(1&e>>r)===1?0:1}),ap=function(e){return g([Hl({V:1,W:0,Z:!0}),ko({a8:xe,co:Il,cN:e,bl:Yl,c2:0,bt:xe,bu:xe}),Ao])},tp=S(function(e,r,n){return We(o(re,function(a){var t=a<<4,i=L(cn,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(qe,e,z(r,i),ap(t))},o(Kr,1,o(Fn,2,n)-1)))}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Qr=function(e){var r=e;return r},op=Uf,Ni=function(e){var r=e;return fr(Tr(r))},Jl=vr({fU:0,fY:1,c5:0}),Bo=Jl,ip={cA:Qe,c3:xo,c4:Bo,c6:wo},Da=function(e){var r=e;return r},cp=function(e){var r=Da(Gr(e)),n=Ge(Tr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return Ke({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},lp=$(function(e,r){var n=r;return cp(o(Wl,n,e))}),up=function(e){return o(lp,ip,e)},vp=function(e){var r=e;return r.c1},$p=function(e){var r=e;return Lr(r)},fp=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),sp=function(e){var r=e;return Pr(r)},mp=function(e){var r=vp(e.ev),n=mr({cA:Ui(r),c3:$p(r),c4:sp(r),c6:fr(Ni(r))}),a=Rn(e.aP),t=a,i=L(Bt,n,1,q,g([t]));if(i.$===1)return P;var c=i.a,l=up(r),u=o(K,.99,o(ue,de(e.aJ),kt(Ul(c)))),v=jl(c),s=v.a,m=v.b,d=v.c,f=ep(p(fp,s,m,d)),h=o(K,1.01,o(_n,f,kt(Rl(c)))),b=o(np,e.ev,{eq:e.eq,eP:h,fi:u}),y=op(b).dM,x=y?Ge(fr(Ni(r))):Qr(Ui(r)),_=function(){var ce=e.bZ;switch(ce.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var pe=ce.a;return z(3,pe);case 4:var pe=ce.a;return z(4,pe);default:return z(5,0)}}(),w=_.a,M=_.b,N=e.bD,R=N,E=o(Po,R,e.b$),j=E,W=Ke({dx:0,dy:x.fU,dz:ln(j),dA:e.ec,dB:0,dC:x.fY,dD:un(j),dE:K0(f),dF:0,dG:x.c5,dH:vn(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),B=ye(Al,W,l,b,Q0,t,{M:P,U:P,fB:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return We(g([p(qe,B.M,z(Q,qa),Hr),p(qe,B.U,dn,Hr)]));case 1:var Q=O.a;return We(g([p(qe,B.M,dn,Hr),g([ji]),p(qe,B.fB,Q.bd,Fl),g([El(0)]),p(qe,B.M,z(Q,qa),rp),p(qe,B.U,dn,Hr)]));default:var le=O.a,fe=O.b;return We(g([p(qe,B.M,z(fe,qa),Hr),g([ji]),o(B0,B.fB,le),p(tp,B.M,fe,Er(le)),p(qe,B.U,dn,Hr)]))}},dp=function(e){return o(wr,"width",Ae(e))},pp=$(function(e,r){var n=g([o0(1),v0(0),Qd(!0),L(n0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return V(n,"0",1);case 1:return V(o(A,e0,n),"1",1);default:var M=w.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Bi(v),m=o(ne,"height",Ae(s)+"px"),d=Bi(u),f=d/s,h=o(Lo,function(w){return mp({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(ne,"width",Ae(d)+"px"),y=e.aI,x=y,_=f0(x);return p(l0,"div",g([o(ne,"padding","0px"),b,m]),g([z(i,p(d0,t,g([dp(Oe(d*c)),i0(Oe(s*c)),b,m,o(ne,"display","block"),o(ne,"background-color",_)]),h))]))}),bp=function(e){return o(pp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},g([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Ol=function(e){return e},Wi=Ol({fU:.31271,fY:.32902}),gp=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Po,r.cd,r.b6),u=l;return{by:vn(u),ex:n,bF:un(u),cJ:0,bV:ln(u),cZ:1,fU:-t,fY:-i,c5:-c}}),hp=function(e){return e},_p=function(e){return hp(1.2*o(Fn,2,e))},Ka=function(e){return e},yp={$:0},Sp=yp,ql=function(e){return e},xp=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Gi=function(e){var r=e;return r},Cp=function(e){e:for(;;){if(_r(e.e2,cr)&&_r(e.e3,cr))return Pe;if(o(xp,de(e.e2),de(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=X(Gi(e.e3)/jr),a=X(Gi(e.e2)/jr),t=Ge(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Po,ql(1),e.b6),v=u;return{by:a*vn(v),ex:!1,bF:a*un(v),cJ:n/a,bV:a*ln(v),cZ:3,fU:i,fY:c,c5:l}}}},Yi=function(e){return Cp({b6:e.b6,e2:e.cd,e3:cr,ei:e.ei})},Zl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),wp=function(e){var r=e;return r},Xl=function(e){var r=p(Zl,1667,25e3,wp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ol({fU:n,fY:a})},Ql=function(e){return e},Lp=Xl(Ql(12e3)),Pp=Xl(Ql(5600)),Tp=function(e){return{$:2,a:e}},zp=function(e){return Tp(e)},Mp=$(function(e,r){return{$:2,a:e,b:r}}),Kl=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},kp=function(e){var r=e;return r.ex},Dp=Kl(dn.a),Ap=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(pr,n,z(P,P),r)}),Bp=function(e){var r=e;return Ke({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Fp=ee(function(e,r,n,a,t,i,c,l){var u=o(Ap,kp,g([Jn(e),Jn(r),Jn(n),Jn(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,b=f.b,y=b.a,x=b.b,_=x.a;return o(Mp,o(re,Bp,v),{bd:o(Re,d,h),bK:o(Re,y,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return Dp}else return Kl({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),Vp=S(function(e,r,n){return wa(Fp,e,r,n,Pe,Pe,Pe,Pe,Pe)}),Ep=function(e){var r=o(gp,Zd(e.fB),{b6:Pp,eH:e.fJ,cd:Ka(8e4)}),n=Yi({b6:Lp,cd:Ka(2e4),ei:e.ei}),a=Yi({b6:Wi,cd:Ka(15e3),ei:fr(e.ei)}),t=p(Vp,r,n,a);return bp({b0:zp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:_p(15),bJ:t,bZ:Sp,b$:Wi})},Up=function(e){var r=e;return r},Aa=function(e){var r=e;return Up(r.er)},eu=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Rp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ru=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),nu=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),jp=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Np=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Wp=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(eu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(Rp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(ru,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Np,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(nu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(jp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},Gp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),h=o(ue,s.dP,a),b=o(me,s.dT,t),y=o(ue,s.dQ,i),x=c,_=v;e=m,r=d,n=f,a=h,t=b,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),Yp=S(function(e,r,n){var a=_a(e(r));return wa(Gp,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),et=$(function(e,r){var n=e,a=r;return I(a,n)<1}),au=function(e){return o(et,e.dO,e.dR)&&o(et,e.dP,e.dS)&&o(et,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},Br=function(e){var r=e;return r.fU},Fr=function(e){var r=e;return r.fY},Vr=function(e){var r=e;return r.c5},tu=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Br(n),c=Fr(n),l=Vr(n),u=Br(a),v=Fr(a),s=Vr(a),m=Br(t),d=Fr(t),f=Vr(t);return au({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},ou=zf,Te=function(e){return ou(Da(e))},iu=function(e){var r=e;return r},Ba=function(e){return ou(iu(e))},Hp=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Ft=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),Ip={fU:0,fY:0,c5:0},Jp=$(function(e,r){var n=e,a=r,t=o(nr,X(a.fU),o(nr,X(a.fY),X(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=Zr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return Ip}),Op=Jp(ql(1)),cu=S(function(e,r,n){var a=o(Ft,r,n),t=o(Ft,e,r);return Op(o(Hp,a,t))}),qp=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ba(p(cu,n,a,t));return V({o:i,bT:Te(n)},{o:i,bT:Te(a)},{o:i,bT:Te(t)})},Zp=$(function(e,r){return{$:2,a:e,b:r}}),lu=Zp({df:3,$7:0,dV:4}),Xp=function(e){if(e.b){var r=e.a,n=e.b,a=lu(o(re,qp,e)),t=p(Yp,tu,r,n);return L(eu,t,e,a,0)}else return Vo},Ue=S(function(e,r,n){return V(e,r,n)}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),uu=function(){var e=ur(1),r=ur(1),n=ur(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),m=p(be,i,v,l),d=o(K,.5,n),f=p(be,d,t,a),h=p(be,d,v,a),b=p(be,d,t,l),y=p(be,d,v,l);return Fo(Xp(g([p(Ue,c,h,f),p(Ue,c,s,h),p(Ue,u,b,y),p(Ue,u,y,m),p(Ue,f,h,y),p(Ue,f,y,b),p(Ue,c,m,s),p(Ue,c,u,m),p(Ue,c,f,b),p(Ue,c,b,u),p(Ue,s,y,h),p(Ue,s,m,y)])))}(),On={$:0},Qp=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Kp=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ba(p(cu,u,l,c)),s={o:v,bT:Te(u)},m={o:v,bT:Te(l)},d={o:v,bT:Te(c)};return o(A,s,o(A,m,o(A,d,n)))}),Eo=function(e){var r=e;return r.D},e1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ie(p(e,t,i,c))}),Vt=4294967295>>>32-Cn,Et=ev,r1=S(function(e,r,n){e:for(;;){var a=Vt&r>>>e,t=o(Et,a,n);if(t.$){var v=t.a;return o(Et,Vt&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),n1=function(e){return e>>>5<<5},a1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,n1(n))>-1?ie(o(Et,Vt&e,i)):ie(p(r1,a,e,t))}),Uo=function(e){var r=e;return r.ah},rt=$(function(e,r){return o(a1,e,Uo(r))}),t1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(e1,S(function(c,l,u){return V(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(go,r,Eo(e))},o1=S(function(e,r,n){e:for(;;){var a=o(co,Ve,e),t=a.a,i=a.b;if(I(_t(t),Ve)<0)return o(Ic,!0,{z:r,l:n,p:t});var c=i,l=o(A,Yc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ro=function(e){return e.b?p(o1,e,P,0):Wc},i1=S(function(e,r,n){return e(r(n))}),c1=$(function(e,r){return!o(al,o(i1,ys,e),r)}),l1=$(function(e,r){return p(pr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),u1=function(e){var r=e.a;return r},vu=$(function(e,r){var n=u1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(c1,a,r)?{D:r,ah:e}:{D:o(l1,a,r),ah:e}}),v1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=v1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Qr(r),a=Qr(e);return z(V(a.fU,a.fY,a.c5),V(n.fU,n.fY,n.c5))}),Hi=p(Un,0,0,0),nt=Ye(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(so,o(ta,e,r),t);if(v.$){var m={o:Hi,bT:Te(r)},d={o:Hi,bT:Te(e)},f=u+1,h=u;return V(o(A,V(n,h,f),o(A,V(n,f,a),c)),o(A,m,o(A,d,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),$1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,b=a,y=e,x=r,_=v,w=a+3,M=ye(nt,s,d,f,b,r,ye(nt,m,s,h,f,r,ye(nt,d,m,b,h,r,t)));e=y,r=x,n=_,a=w,t=M;continue e}else{var N=t,R=N.a,E=N.b;return z(R,Fe(E))}}),f1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,b=n,y=p(gn,o(ta,d,s),f,p(gn,o(ta,s,m),h,p(gn,o(ta,m,d),b,t))),x=o(A,V(b,h,f),a),_=e,w=v,M=n+3,N=x,R=y;e=_,r=w,n=M,a=N,t=R;continue e}else return V(a,t,n)}),zr=S(function(e,r,n){var a=t1(n),t=p(pr,Kp(r),P,a),i=C(f1,r,a,0,P,wl),c=i.a,l=i.b,u=i.c,v=C($1,r,l,a,0,V(c,P,u)),s=v.a,m=v.b,d=Mt(m)?t:ve(t,m);return p(Qp,e,o(vu,Ro(d),s),o(jn,d,s))}),Ut=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Kr,0,Er(e)-1)),ah:Ro(We(o(re,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},$u=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,Tn,r);return p(zr,a,Dr,Ut(n));case 2:var a=e.a,r=e.b,n=o(re,Tn,r);return p(zr,a,Dr,Ut(n));case 3:var a=e.a,t=e.b;return p(zr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(zr,a,function(i){return i.bT},t);case 8:return On;case 9:return On;default:return On}},Ii=$u(uu),Fa=function(e){var r=e;return r.aK},fu={$:0},T=fu,ge=$(function(e,r){return{$:1,a:e,b:r}}),s1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},m1=1029,d1=function(e){return{$:5,a:e}},su=function(e){var r=e;return d1(r)},p1=su(m1),b1=1028,g1=su(b1),ze=S(function(e,r,n){return r===1?e?o(A,p1,n):o(A,g1,n):n}),mu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return C(ae,p(ze,l,a,m),mu,s1,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},du={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return C(ae,p(ze,l,a,m),du,jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),pu=$(function(e,r){return{$:3,a:e,b:r}}),h1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},bu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_1=U(function(e,r,n,a){return o(pu,n,ee(function(t,i,c,l,u,v,s,m){return C(ae,m,bu,h1,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),No={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Va=Mf,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return C(ae,p(ze,u,t,d),du,No,a,{aN:o(Va,Nn(r),e),b:l,c,d:s,e:i,f:v})}))}),y1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},S1=he(function(e,r,n,a,t){return o(pu,a,ee(function(i,c,l,u,v,s,m,d){return C(ae,d,bu,y1,t,{aN:o(Va,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},hu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(ae,p(ze,l,a,m),hu,gu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),_u={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},x1=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return C(ae,p(ze,v,i,f),yu,_u,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Su={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},C1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(m,d,f,h,b,y,x,_){var w=x.a,M=x.b;return C(ae,p(ze,h,s,_),yu,Su,v,{b4:e,b7:r,b8:i,b9:a,P:M,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:d,aW:c,d:y,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},xu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Zn=Ye(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var h=d.a,b=d.b;return C(ae,p(ze,v,i,f),hu,xu,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),w1=function(e){return{$:0,a:e}},Ji=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),L1=function(e){return L(cn,ln(e),un(e),vn(e),1)},Wo=L(cn,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Wo)}else{var n=r.a;return z(e,L1(n))}}),Cu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ji,z(t,Wo),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ji,o(oa,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,w1(a)}}),P1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xn=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),T1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),z1=function(e){return o(De,e,1)},Rt=o(De,0,0),Ir=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Rt)}else{var n=r.a;return z(e,z1(n))}}),wu=U(function(e,r,n,a){var t=L(T1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Xn,z(u,Wo),o(Ir,u,r),o(Ir,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Xn,o(oa,u,e),z(u,Rt),o(Ir,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Xn,o(oa,u,e),o(Ir,u,r),z(u,Rt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Xn,o(oa,u,e),o(Ir,u,r),o(Ir,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(P1,i,c,l)}}),M1={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},tt=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return C(ae,p(ze,u,t,d),mu,M1,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Lu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},k1=U(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(ae,p(ze,l,a,m),Lu,_u,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),D1=Gt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,m,d,f,h,b,y){var x=b.a,_=b.b;return C(ae,p(ze,d,u,y),Lu,Su,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:m,c:s,aW:e,d:h,cR:n,e:v,a$:0,f})}))}),zn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),A1=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},B1=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},F1=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},V1=function(e){return p(be,A1(e),B1(e),F1(e))},G=function(e){var r=jl(e),n=r.a,a=r.b,t=r.c;return{ey:Da(V1(e)),eS:n/2,eT:a/2,eU:t/2}},Go=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(at,l,G(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(_1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return C(tt,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tt,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tt,l,v,G(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(S1,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,R=e.c,m=o(Cu,s,R);if(m.$){var h=m.a,b=h.a;h.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return L(k1,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(x1,b,x,_,G(t),c,f);case 8:return T;case 9:return T;default:return T}}else{var d=m.a;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 3:return T;case 4:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 8:return T;case 9:return T;default:return T}}default:e.a;var w=e.b,M=e.c,N=e.d,R=e.e,E=L(wu,w,M,N,R);if(E.$){var O=E.a,Q=O.a,le=O.b,fe=E.b,ce=fe.a,pe=fe.b,Me=E.c,Ce=Me.a,br=Me.b,gr=E.d,x=gr.a,_=gr.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return qu(D1,Q,le,ce,pe,Ce,br,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C1(Q)(le)(ce)(pe)(Ce)(br)(x)(_)(G(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var j=E.a,W=E.b,B=E.c;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,a=r.d;return ye(Zn,j,W,B,G(t),c,a);case 3:return T;case 4:var t=r.a,c=r.c,a=r.d;return ye(Zn,j,W,B,G(t),c,a);case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return ye(Zn,j,W,B,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Zn,j,W,B,G(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),ot=function(e){var r=e;return r.fU},it=function(e){var r=e;return r.fY},ct=function(e){var r=e;return r.c5},E1=function(e){var r=e,n=ct(r.c6),a=it(r.c6),t=ot(r.c6),i=ct(r.c4),c=it(r.c4),l=ot(r.c4),u=ct(r.c3),v=it(r.c3),s=ot(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},U1=function(e){var r=Da(Gr(e)),n=Ge(Tr(e)),a=Ge(Pr(e)),t=Ge(Lr(e));return{dp:E1(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},Jr=$(function(e,r){return{$:5,a:e,b:r}}),Pu=$(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,t=n.b,i=o(Dl,a,e);return o(Jr,i,t);case 1:return o(Jr,e,n);case 3:return o(Jr,e,n);case 2:return o(Jr,e,n);default:return o(Jr,e,n)}}),Tu=$(function(e,r){return o(Pu,U1(e),r)}),Ea=function(e){return{$:2,a:e}},R1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),j1=Af,N1=Df,Oi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=N1(a),h=f.fU,b=f.fY,y=f.c5,x=f.em,_=j1({em:x,fU:h*s,fY:b*m,c5:y*d});return wa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},jt=$(function(e,r){switch(r.$){case 0:return fu;case 5:var n=r.a,a=r.b;return o(Jr,n,o(jt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(R1,e,t),o(Oi,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(Oi,e,i));default:var c=r.a;return Gl(o(re,jt(e),c))}}),Yo=$(function(e,r){var n=r;return o(jt,e,n)}),Ho={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zu=7683,Mu=7682,W1=p(Mo,{co:0,cN:0,c2:15},{a8:xe,bl:nn,bt:xe,bu:zu},{a8:xe,bl:nn,bt:xe,bu:Mu}),G1=p(Mo,{co:0,cN:0,c2:15},{a8:xe,bl:nn,bt:xe,bu:Mu},{a8:xe,bl:nn,bt:xe,bu:zu}),Io=$(function(e,r){return e?o(A,G1,r):o(A,W1,r)}),Y1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},H1=function(e){if(e.$){var r=e.c;return ie(ee(function(n,a,t,i,c,l,u,v){return C(ae,o(Io,i,v),Y1,Ho,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},ya=function(e){var r=H1(e);if(r.$)return T;var n=r.a;return Ea(n)},I1=U(function(e,r,n,a){var t=o(Go,n,uu),i=function(){var s=z(e,r);return s.a?s.b?Rn(g([t,ya(Ii)])):t:s.b?ya(Ii):T}(),c=Fa(a),l=c.a,u=c.b,v=c.c;return o(Tu,Aa(a),o(Yo,V(l,u,v),i))}),J1=$(function(e,r){return L(I1,!0,!0,e,r)}),Nt=function(e){return{$:0,a:e}},ku=$(function(e,r){return{$:0,a:e,b:r}}),O1=function(e){var r=bo(e),n=r.cM,a=r.cc,t=r.b5;return p(Un,n,a,t)},q1=function(e){return o(ku,0,Nt(O1(e)))},Jo=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Ur(r)},Z1=$(function(e,r){var n=r;return n/e}),qi=function(e){var r=e;return{fU:Ur(r),fY:rn(r)}},X1=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ba(a),bT:Te(n)},r)}),Q1=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=vn(l.bT),s=un(l.bT),m=ln(l.bT),d=o(aa,e,m),f=o(nr,r,m),h=o(aa,n,s),b=o(nr,a,s),y=o(aa,t,v),x=o(nr,i,v),_=u;e=d,r=f,n=h,a=b,t=y,i=x,c=_;continue e}else return au({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Du=$(function(e,r){var n=vn(e.bT),a=un(e.bT),t=ln(e.bT);return Yt(Q1,t,t,a,a,n,n,r)}),K1=function(e){var r=p(Bc,X1,P,Uo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Eo(e)),i=o(Du,n,a);return L(ru,i,e,t,0)}else return Vo},Au=vr({fU:0,fY:0,c5:-1}),Zi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c5:a.fU*l.c5+a.fY*i.c5}}),Sa=function(e){var r=e;return rn(r)},pn=function(e){var r=e;return r},Wt=function(e){return Rr(2*jr*e)},Xi=Ml({cA:Qe,c3:xo,c4:Bo}),Bu=function(){var e=72,r=o(Z1,e,Wt(1)),n=ur(1),a=pn(Co),t=pn(Au),i=ur(1),c=o(K,.5,i),l=p(be,cr,cr,c),u=o(K,-.5,i),v=p(be,cr,cr,u),s=function(f){var h=o(K,f,r),b=pn(o(Zi,Xi,qi(h))),y=o(K,Sn(h),n),x=o(K,Sa(h),n),_=p(be,y,x,c),w=p(be,y,x,u),M=o(Pn,e,f+1),N=o(K,M,r),R=pn(o(Zi,Xi,qi(N))),E=o(K,Sn(N),n),j=o(K,Sa(N),n),W=p(be,E,j,u),B=p(be,E,j,c);return g([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:w}),V({o:b,bT:w},{o:R,bT:W},{o:R,bT:B}),V({o:b,bT:w},{o:R,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},m=o(re,s,o(Kr,0,e-1)),d=Ut(We(m));return Fo(K1(d))}(),Qi=$u(Bu),Fu=function(e){var r=e;return r.cA},e3=function(e){var r=e,n=X(r.c5),a=X(r.fY),t=X(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=Zr(r.c5*r.c5+r.fY*r.fY);return{fU:0,fY:-r.c5/i,c5:r.fY/i}}else{var i=Zr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}else if(I(a,n)<1){var i=Zr(r.c5*r.c5+r.fU*r.fU);return{fU:r.c5/i,fY:0,c5:-r.fU/i}}else{var i=Zr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c5:0}}},r3=function(e){var r=e3(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c5-i.c5*a.fY,fY:i.c5*a.fU-i.fU*a.c5,c5:i.fU*a.fY-i.fY*a.fU};return z(r,c)},n3=function(e){var r=So(e),n=r3(r),a=n.a,t=n.b;return mr({cA:Fu(e),c3:a,c4:t,c6:r})},Vu=function(e){var r=e;return r.e9},Eu=function(e){var r=e;return r.fu},a3=U(function(e,r,n,a){var t=n3(Jo(a)),i=o(Go,n,Bu),c=function(){var m=z(e,r);return m.a?m.b?Rn(g([i,ya(Qi)])):i:m.b?ya(Qi):T}(),l=Eu(a),u=l,v=Vu(a),s=v;return o(Tu,t,o(Yo,V(u,u,s),c))}),t3=$(function(e,r){return L(a3,!0,!0,e,r)}),Ki={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},ec={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},bn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return Ke({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Qn=lu(g([V({cY:0},{cY:1},{cY:2})])),o3=$(function(e,r){var n=tu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var t=e.b.a;return o(ge,a,ee(function(_,w,M,N,R,E,j,W){return C(ae,p(ze,N,0,W),Ki,jo,Qn,{aw:t,b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));case 1:if(e.b.$)return e.a,T;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,w,M,N,R,E,j,W){return C(ae,p(ze,N,0,W),Ki,No,Qn,{aN:o(Va,Nn(c),i),b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Cu,l,f);if(u.$)return T;var v=u.a;return o(ge,a,ee(function(_,w,M,N,R,E,j,W){var B=j.a,O=j.b;return C(ae,p(ze,N,0,W),ec,gu,Qn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:M,c:w,d:E,e:_,bq:bn(r),f:R})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,h=L(wu,s,m,d,f);if(h.$)return T;var b=h.a,y=h.b,x=h.c;return o(ge,a,ee(function(_,w,M,N,R,E,j,W){var B=j.a,O=j.b;return C(ae,p(ze,N,0,W),ec,xu,Qn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:M,c:w,d:E,cQ:y,e:_,bq:bn(r),f:R})}))}}),i3=function(){var e=g([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=g([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(jn,e,r)}(),c3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},rc=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return C(ae,o(Io,t,u),c3,Ho,i3,{b:a,c:n,d:c,e:r,bY:l,bq:bn(e),f:i})}))},l3=U(function(e,r,n,a){var t=o(o3,n,a),i=z(e,r);return i.a?i.b?Rn(g([t,rc(a)])):t:i.b?rc(a):T}),u3=$(function(e,r){return L(l3,!0,!0,e,r)}),Oo=function(e){var r=e;return r},v3=$(function(e,r){var n=Vr(r),a=Vr(e),t=Fr(r),i=Fr(e),c=Br(r),l=Br(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),$3=function(e){var r=Oo(e),n=r.a,a=r.b;return o(v3,n,a)},nc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},f3=$(function(e,r){return{$:1,a:e,b:r}}),s3=f3({df:2,$7:0,dV:1}),ac=s3(g([z({dw:0},{dw:1})])),m3=$(function(e,r){var n=$3(r),a=G(n),t=Oo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var l=e.b.a;return o(ge,a,ee(function(v,s,m,d,f,h,b,y){return C(ae,y,nc,jo,ac,{aw:l,du:Te(c),dv:Te(i),b:m,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return T;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,m,d,f,h,b,y,x){return C(ae,x,nc,No,ac,{aN:o(Va,Nn(u),l),du:Te(c),dv:Te(i),b:d,c:m,d:b,e:s,f:h})}));case 2:return T;default:return T}}),d3=$(function(e,r){return o(m3,e,r)}),Ua=function(e){var r=e;return r.ey},Ra=function(e){var r=e;return r.fu},Kn=function(e){return Rr(jr*(e/180))},tc=$(function(e,r){var n=e,a=r;return n/a}),p3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),oc=$(function(e,r){return e<1?P:C(p3,0,e,e,r,P)}),b3=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ba(a),bT:Te(n),L:o(De,c,l)},r)}),g3=function(e){var r=p(Bc,b3,P,Uo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Eo(e)),i=o(Du,n,a);return L(nu,i,e,t,0)}else return Vo},Uu=$(function(e,r){var n=e,a=r,t=Ur(a);return{fU:t*Ur(n),fY:t*rn(n),c5:rn(a)}}),h3=function(){var e=ur(1),r=72,n=o(Kr,0,r-1),a=o(oc,r,o(zn,cr,Wt(1))),t=oo(r/2),i=o(Kr,0,t-1),c=o(oc,t,o(zn,Kn(90),Kn(-90))),l=Ro(We(o(re,function(s){return o(re,function(m){return{o:pn(o(Uu,s,m)),bT:p(be,o(K,Sn(m)*Sn(s),e),o(K,Sn(m)*Sa(s),e),o(K,Sa(m),e)),L:z(o(tc,s,Wt(1)),o(tc,o(_n,Kn(90),m),Kn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=We(o(re,function(s){return We(o(re,function(m){var d=o(u,s+1,m),f=o(u,s,m),h=o(u,s+1,m+1),b=o(u,s,m+1);return g([V(b,h,d),V(b,d,f)])},i))},n));return Fo(g3(o(vu,l,v)))}(),xa=72,ea=2*xa,_3=$(function(e,r){e:for(;;){var n=ea+1,a=o(Pn,ea,2*e+3),t=o(Pn,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),y3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),S3=$(function(e,r){e:for(;;){var n=p(y3,0,2*jr,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),x3=function(){var e=o(S3,xa-1,g([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(_3,xa-1,P);return o(jn,e,r)}(),C3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ic=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return C(ae,o(Io,!0,u),C3,Ho,x3,{aw:p(Un,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},w3=function(e){var r=iu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},L3=$(function(e,r){return o(Pu,w3(e),r)}),P3=U(function(e,r,n,a){var t=o(Go,n,h3),i=function(){var u=z(e,r);return u.a?u.b?Rn(g([t,ic()])):t:u.b?ic():T}(),c=Ra(a),l=c;return o(L3,o(Ft,Qe,Ua(a)),o(Yo,V(l,l,l),i))}),T3=$(function(e,r){return L(P3,!0,!0,e,r)}),z3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ru=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),M3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),k3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ku,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(z3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ru,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(M3,n,a,t,i,c)}},D3=k3,ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return g([o(J1,t,r)]);case 1:var t=e.a,n=e.b;return g([o(u3,t,n)]);case 3:var t=e.a,a=e.b;return g([o(T3,D3(t),a)]);case 2:var t=e.a,i=e.b;return g([o(t3,t,i)]);case 4:var c=e.a,l=e.b;return g([o(d3,q1(c),l)]);default:var u=e.a;return o(Lo,ju,u)}},A3=function(e){return o(Lo,ju,e)},B3=$(function(e,r){return Ep({aI:Od(e.es),ev:e.ev,aJ:qd(.5),ca:e.ca,aK:z(Ai(Oe(e.cS.fS)),Ai(Oe(e.cS.eW))),aP:A3(r),fB:!0,fJ:o(Uu,Rr(e.fI),Rr(e.fK)),ei:wo})}),ja=$(function(e,r){return{$:0,a:e,b:r}}),lt=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),F3=vr({fU:-1,fY:0,c5:0}),V3=vr({fU:0,fY:-1,c5:0}),E3=Ye(function(e,r,n,a,t,i){var c=o(lt,n,i)?Co:Au,l=o(lt,r,t)?Jl:V3,u=o(lt,e,a)?kl:F3,v=V(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(be,o(ut,e,a),o(ut,r,t),o(ut,n,i)),m=mr({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),U3=$(function(e,r){return ye(E3,Br(e),Fr(e),Vr(e),Br(r),Fr(r),Vr(r))}),R3=$(function(e,r){var n=r/2;return o(ja,e,o(U3,p(At,-n,-n,-n),p(At,n,n,n)))}),Na=function(e){return{$:5,a:e}},cc=function(e){return Na(e)},vt=function(e){return p(Zl,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},j3=function(e){var r=bo(e),n=r.cM,a=r.cc,t=r.b5;return p(Un,vt(n),vt(a),vt(t))},N3=function(e){return p(Ru,0,Nt(j3(e)),Nt(0))},qo=$(function(e,r){return{$:2,a:e,b:r}}),Zo=$(function(e,r){return{$:4,a:e,b:r}}),Xo=$(function(e,r){return{$:3,a:e,b:r}}),Qo=$(function(e,r){return{$:1,a:e,b:r}}),W3=S(function(e,r,n){return{fU:e,fY:r,c5:n}}),G3=$(function(e,r){return{er:o(zl,e,Aa(r)),aK:Fa(r)}}),Y3=$(function(e,r){var n=r;return o(Yr,o(En,e,n.cA),n.eH)}),H3=$(function(e,r){var n=r;return{k:o(Y3,e,n.k),e9:n.e9,fu:n.fu}}),I3=function(e){return e},Ko=$(function(e,r){var n=Oo(r),a=n.a,t=n.b;return I3(z(e(a),e(t)))}),J3=$(function(e,r){return o(Ko,En(e),r)}),ei=$(function(e,r){return{ey:r,fu:de(e)}}),O3=$(function(e,r){return o(ei,Ra(r),o(En,e,Ua(r)))}),ri=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),q3=$(function(e,r){return o(ri,En(e),r)}),Nu=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(W3,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ja,s,o(G3,i,c));case 1:var s=r.a,l=r.b;return o(Qo,s,o(q3,i,l));case 3:var s=r.a,u=r.b;return o(Xo,s,o(O3,i,u));case 2:var s=r.a,v=r.b;return o(qo,s,o(H3,i,v));case 4:var s=r.a,m=r.b;return o(Zo,s,o(J3,i,m));default:var d=r.a;return Na(o(re,Nu(V(n,a,t)),d))}}),Z3=function(e){return Nu(V(0,e,0))},$t=function(e){return e/255},X3=S(function(e,r,n){return L(Bn,$t(e),$t(r),$t(n),1)}),Q3=S(function(e,r,n){return{er:p(Tl,e,r,Aa(n)),aK:Fa(n)}}),K3=$(function(e,r){var n=o(Vn,e,r),a=o(na,e,r);return function(t){var i=t;return o(Yr,n(i.cA),a(i.eH))}}),eb=S(function(e,r,n){var a=n;return{k:p(K3,e,r,a.k),e9:a.e9,fu:a.fu}}),rb=S(function(e,r,n){return o(Ko,o(Vn,e,r),n)}),nb=S(function(e,r,n){return o(ei,Ra(n),p(Vn,e,r,Ua(n)))}),ab=S(function(e,r,n){return o(ri,o(Vn,e,r),n)}),Wu=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ja,l,p(Q3,e,r,a));case 1:var l=n.a,t=n.b;return o(Qo,l,p(ab,e,r,t));case 3:var l=n.a,i=n.b;return o(Xo,l,p(nb,e,r,i));case 2:var l=n.a,c=n.b;return o(qo,l,p(eb,e,r,c));case 4:var l=n.a,u=n.b;return o(Zo,l,p(rb,e,r,u));default:var v=n.a;return Na(o(re,o(Wu,e,r),v))}}),tb=o(Yr,Qe,Bo),ob=$(function(e,r){return p(Wu,tb,Rr(e),r)}),Wn=S(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c5:a.c5+r*(t.c5-a.c5)}}),ib=S(function(e,r,n){var a=Aa(n),t=Lr(a),i=Pr(a),c=Tr(a),l=p(Wn,e,r,Gr(a)),u=r>=0?mr({cA:l,c3:t,c4:i,c6:c}):mr({cA:l,c3:fr(t),c4:fr(i),c6:fr(c)}),v=Fa(n),s=v.a,m=v.b,d=v.c,f=de(o(K,r,s)),h=de(o(K,r,m)),b=de(o(K,r,d));return{er:u,aK:V(f,h,b)}}),lc=function(e){return So(Jo(e))},cb=function(e){return Fu(Jo(e))},lb=S(function(e,r,n){var a=de(o(K,r,Eu(n))),t=de(o(K,r,Vu(n))),i=r>=0?lc(n):fr(lc(n)),c=p(Wn,e,r,cb(n));return{k:o(Yr,c,i),e9:t,fu:a}}),ub=S(function(e,r,n){return o(Ko,o(Wn,e,r),n)}),vb=S(function(e,r,n){return o(ei,o(K,X(r),Ra(n)),p(Wn,e,r,Ua(n)))}),$b=S(function(e,r,n){return o(ri,o(Wn,e,r),n)}),Gu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ja,c,p(ib,Qe,e,n));case 1:var c=r.a,a=r.b;return o(Qo,c,p($b,Qe,e,a));case 3:var c=r.a,t=r.b;return o(Xo,c,p(vb,Qe,e,t));case 2:var c=r.a,i=r.b;return o(qo,c,p(lb,Qe,e,i));case 4:var c=r.a,l=r.b;return o(Zo,c,p(ub,Qe,e,l));default:var u=r.a;return Na(o(re,Gu(e),u))}}),fb=$(function(e,r){return(r-Hc(r/e)*e)/e}),sb=$(function(e,r){return 360*o(fb,e,r)}),mb=L(Bn,255/255,255/255,255/255,1),Yu=$(function(e,r){var n=o(Pn,2,r)?mb:p(X3,17,147,216),a=Dt(o(sb,8,e.db))/4,t=.707/Ur(jr/4-a);return cc(r?g([o(R3,N3(n),1),o(Z3,.3,o(ob,a,o(Gu,t,o(Yu,e,r-1))))]):P)}),db=function(e){return o(Yu,e,20)},pb=$(function(e,r){return o(B3,{es:L(hl,0,0,0,.7),ev:Jd(e),ca:e.ca,cS:e.cS,fI:Dt(90),fK:-Dt(180)},g([db(e)]))}),bb=L(yd,pb,zd,Td,Sd);const gb={Main:{init:bb(o(D,function(e){return ke({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return ke({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ma(Ln)))},o(k,"left",Z))},o(k,"pressedKeys",ma(Ln)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return ke({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},hb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,b=h-F.clock;b<.009||(F.dt=b,F.clock=h,e.ports.tick.send(F),m(F)),window.requestAnimationFrame(d)}},_b=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},yb=gb.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});_b();hb(yb);
