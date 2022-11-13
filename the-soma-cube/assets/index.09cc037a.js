(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function zr(e,r,n){return n.a=e,n.f=r,n}function $(e){return zr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return zr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return zr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Oe(e){return zr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Fa(e){return zr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return zr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function ro(e){return zr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function d(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function no(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Va(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function uv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var vv=[];function $v(e){return e.length}var fv=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),sv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),mv=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var dv=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+pv()),r});function pv(e){return"<internals>"}function vn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Pr(e,r){for(var n,a=[],t=Pt(e,r,0,a);t&&(n=a.pop());t=Pt(n.a,n.b,0,a));return t}function Pt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&vn(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=Li(e),r=Li(r));for(var t in e)if(!Pt(e[t],r[t],n+1,a))return!1;return!0}$(Pr);$(function(e,r){return!Pr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var bv=$(function(e,r){var n=O(e,r);return n<0?Hc:n?as:Gc}),Rn=0;function T(e,r){return{a:e,b:r}}function C(e,r,n){return{a:e,b:r,c:n}}function rr(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=cr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=cr(e.a,r);return n}var z={$:0};function cr(e,r){return{$:1,a:e,b:r}}var gv=$(cr);function b(e){for(var r=z,n=e.length;n--;)r=cr(e[n],r);return r}function Ra(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var hv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(d(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return b(i)});Oe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(w(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Ra(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return b(Ra(r).sort(function(n,a){var t=o(e,n,a);return t===Gc?0:t===Hc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var _v=$(Math.pow);$(function(e,r){return r%e});var yv=$(function(e,r){var n=r%e;return e===0?vn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Sv=Math.PI,xv=Math.cos,Cv=Math.sin,wv=Math.tan,Lv=Math.atan;$(Math.atan2);function Pv(e){return e}function zv(e){return e===1/0||e===-1/0}var Tv=Math.ceil,Mv=Math.floor,kv=Math.round,Dv=Math.sqrt,fi=Math.log,Av=isNaN;function Bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Fv=$(function(e,r){return e+r});function Vv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ie(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function Rv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Ev(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var jv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Wv=$(function(e,r){return r.split(e)}),Nv=$(function(e,r){return r.join(e)}),Yv=S(function(e,r,n){return n.slice(e,r)});function Gv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Hv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Iv=$(function(e,r){return r.indexOf(e)>-1}),Uv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ov=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function bc(e){return e+""}function Jv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ie(n==45?-r:r)}function qv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ie(r):q}function Xv(e){return Ra(e).join("")}function Zv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Kv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Qv(e){return{$:0,a:e}}function ao(e){return{$:2,b:e}}var e$=ao(function(e){return typeof e=="boolean"?$e(e):er("a BOOL",e)}),r$=ao(function(e){return typeof e=="number"?$e(e):er("a FLOAT",e)}),n$=ao(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):er("a STRING",e)});function a$(e){return{$:3,b:e}}var t$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Tr(e,r){return{$:9,f:e,g:r}}var o$=$(function(e,r){return{$:10,b:r,h:e}}),i$=$(function(e,r){return Tr(e,[r])}),c$=S(function(e,r,n){return Tr(e,[r,n])});R(function(e,r,n,a){return Tr(e,[r,n,a])});he(function(e,r,n,a,t){return Tr(e,[r,n,a,t])});Oe(function(e,r,n,a,t,i){return Tr(e,[r,n,a,t,i])});Fa(function(e,r,n,a,t,i,c){return Tr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Tr(e,[r,n,a,t,i,c,l])});ro(function(e,r,n,a,t,i,c,l,u){return Tr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return xe(o(po,"This is not valid JSON! "+a.message,r))}});var gc=$(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):er("null",r);case 3:return Zn(r)?si(e.b,r,b):er("a LIST",r);case 4:return Zn(r)?si(e.b,r,l$):er("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return er("an OBJECT with a field named `"+n+"`",r);var v=Ye(e.b,r[n]);return qe(v)?v:xe(o(Pi,n,v.a));case 7:var a=e.e;if(!Zn(r))return er("an ARRAY",r);if(a>=r.length)return er("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ye(e.b,r[a]);return qe(v)?v:xe(o(Ic,a,v.a));case 8:if(typeof r!="object"||r===null||Zn(r))return er("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=Ye(e.b,r[i]);if(!qe(v))return xe(o(Pi,i,v.a));t=cr(T(i,v.a),t)}return $e(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ye(l[u],r);if(!qe(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ye(e.b,r);return qe(v)?Ye(e.h(v.a),r):v;case 11:for(var s=z,m=e.g;m.b;m=m.b){var v=Ye(m.a,r);if(qe(v))return v;s=cr(v.a,s)}return xe(ts(Re(s)));case 1:return xe(o(po,e.a,r));case 0:return $e(e.a)}}function si(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!qe(c))return xe(o(Ic,i,c.a));t[i]=c.a}return $e(n(t))}function Zn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function l$(e){return o(ys,e.length,function(r){return e[r]})}function er(e,r){return xe(o(po,"Expecting "+e,r))}function Qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Qr(e.b,r.b);case 6:return e.d===r.d&&Qr(e.b,r.b);case 7:return e.e===r.e&&Qr(e.b,r.b);case 9:return e.f===r.f&&mi(e.g,r.g);case 10:return e.h===r.h&&Qr(e.b,r.b);case 11:return mi(e.g,r.g)}}function mi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Qr(e[a],r[a]))return!1;return!0}var u$=$(function(e,r){return JSON.stringify(r,null,e)+""});function hc(e){return e}S(function(e,r,n){return n[e]=r,n});function Jr(e){return{$:0,a:e}}function v$(e){return{$:1,a:e}}function hr(e){return{$:2,b:e,c:null}}var zt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function $$(e){return{$:5,b:e}}var f$=0;function to(e){var r={$:0,e:f$++,f:e,g:null,h:[]};return oo(r),r}function _c(e){return hr(function(r){r(Jr(to(e)))})}function yc(e,r){e.h.push(r),oo(e)}var s$=$(function(e,r){return hr(function(n){yc(e,r),n(Jr(Rn))})}),tt=!1,di=[];function oo(e){if(di.push(e),!tt){for(tt=!0;e=di.shift();)m$(e);tt=!1}}function m$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,oo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return io(r,a,e.e1,e.fS,e.fL,function(){return function(){}})});function io(e,r,n,a,t,i){var c=o(gc,e,r?r.flags:void 0);qe(c)||vn(2);var l={},u=n(c.a),v=u.a,s=i(p,v),m=d$(l,p);function p(f,h){var g=o(a,f,v);s(v=g.a,h),bi(l,g.b,t(v))}return bi(l,u.b,t(v)),m?{ports:m}:{}}var ar={};function d$(e,r){var n;for(var a in ar){var t=ar[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=b$(t,r)}return n}function p$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function b$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(zt,l,$$(function(v){var s=v.a;return v.$===0?d(t,n,s,u):i&&c?P(a,n,s.i,s.j,u):d(a,n,i?s.i:s.j,u)}))}return n.h=to(o(zt,l,e.b))}var g$=$(function(e,r){return hr(function(n){e.g(r),n(Jr(Rn))})});$(function(e,r){return o(s$,e.h,{$:0,a:r})});function Sc(e){return function(r){return{$:1,k:e,l:r}}}function h$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var pi=[],ot=!1;function bi(e,r,n){if(pi.push({p:e,q:r,r:n}),!ot){ot=!0;for(var a;a=pi.shift();)_$(a.p,a.q,a.r);ot=!1}}function _$(e,r,n){var a={};pa(!0,r,a,null),pa(!1,n,a,null);for(var t in e)yc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function pa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=y$(e,t,a,r.l);n[t]=S$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)pa(e,c.a,n,a);return;case 3:pa(e,r.o,n,{s:r.n,t:a});return}}function y$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ar[r].e:ar[r].f;return o(i,t,a)}function S$(e,r,n){return n=n||{i:z,j:z},e?n.i=cr(r,n.i):n.j=cr(r,n.j),n}function x$(e){ar[e]&&vn(3)}$(function(e,r){return r});function C$(e,r){return x$(e),ar[e]={f:w$,u:r,a:L$},Sc(e)}var w$=$(function(e,r){return function(n){return e(r(n))}});function L$(e,r){var n=z,a=ar[e].u,t=Jr(null);ar[e].b=t,ar[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(gc,a,c);qe(l)||vn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ba,sr=typeof document<"u"?document:{};function co(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(wr(e,function(){}),t),{}});function Tt(e){return{$:0,a:e}}var xc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:lo(n),e:t,f:e,b:i}})}),Mr=xc(void 0),P$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:lo(n),e:t,f:e,b:i}})}),z$=P$(void 0);function T$(e,r,n,a){return{$:3,d:lo(e),g:r,h:n,i:a}}var M$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return kr([e,r],function(){return e(r)})});S(function(e,r,n){return kr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return kr([e,r,n,a],function(){return d(e,r,n,a)})});he(function(e,r,n,a,t){return kr([e,r,n,a,t],function(){return P(e,r,n,a,t)})});Oe(function(e,r,n,a,t,i){return kr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});Fa(function(e,r,n,a,t,i,c){return kr([e,r,n,a,t,i,c],function(){return Se(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return kr([e,r,n,a,t,i,c,l],function(){return no(e,r,n,a,t,i,c,l)})});ro(function(e,r,n,a,t,i,c,l,u){return kr([e,r,n,a,t,i,c,l,u],function(){return Va(e,r,n,a,t,i,c,l,u)})});var Cc=$(function(e,r){return{$:"a0",n:e,o:r}}),k$=$(function(e,r){return{$:"a1",n:e,o:r}}),wc=$(function(e,r){return{$:"a2",n:e,o:r}}),Dr=$(function(e,r){return{$:"a3",n:e,o:r}}),D$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function A$(e){return e=="script"?"p":e}function B$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Cc,r.n,F$(e,r.o)):r});function F$(e,r){var n=So(r);return{$:r.$,a:n?d(Ss,n<3?V$:R$,De(e),r.a):o(ya,e,r.a)}}var V$=$(function(e,r){return T(e(r.a),r.b)}),R$=$(function(e,r){return{al:e(r.al),cV:r.cV,cJ:r.cJ}});function lo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?gi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?gi(c,t,i):c[t]=i}return r}function gi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function wr(e,r){var n=e.$;if(n===5)return wr(e.k||(e.k=e.m()),r);if(n===0)return sr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=wr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Mt(c,r,e.d),c}var c=e.f?sr.createElementNS(e.f,e.c):sr.createElement(e.c);ba&&e.c=="a"&&c.addEventListener("click",ba(c)),Mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)co(c,wr(n===1?l[u]:l[u].b,r));return c}function Mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?E$(e,t):a==="a0"?N$(e,r,t):a==="a3"?j$(e,t):a==="a4"?W$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function E$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function j$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function W$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function N$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Y$(r,i),e.addEventListener(t,c,uo&&{passive:So(i)<2}),a[t]=c}}var uo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){uo=!0}}))}catch{}function Y$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!qe(i)){for(var c=So(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cV,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cJ)&&a.preventDefault(),e),m,p;m=s.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);s=s.p}s(u,v)}}return n.q=r,n}function G$(e,r){return e.$==r.$&&Qr(e.a,r.a)}function Lc(e,r){var n=[];return Xe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Z$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Xe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,p=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof p!="object"?p=[p,g.j]:p.push(g.j),g=g.k;if(f&&m.length!==p.length){_e(n,0,a,r);return}(f?!H$(m,p):m!==p)&&_e(n,2,a,p),Xe(h,g,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:hi(e,r,n,a,I$);return;case 2:hi(e,r,n,a,U$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=vo(e.d,r.d);y&&_e(n,4,a,y);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function H$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function hi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=vo(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function vo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=vo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&G$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function I$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Xe(s,i[v],n,++a),a+=s.b||0}}function U$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,p=0,f=a;m<v&&p<s;){var h=l[m],g=u[p],y=h.a,x=g.a,_=h.b,L=g.b,k=void 0,N=void 0;if(y===x){f++,Xe(_,L,t,f),f+=_.b||0,m++,p++;continue}var j=l[m+1],E=u[p+1];if(j){var W=j.a,Y=j.b;N=x===W}if(E){var F=E.a,J=E.b;k=y===F}if(k&&N){f++,Xe(_,J,t,f),bn(i,t,y,L,p,c),f+=_.b||0,f++,gn(i,t,y,Y,f),f+=Y.b||0,m+=2,p+=2;continue}if(k){f++,bn(i,t,x,L,p,c),Xe(_,J,t,f),f+=_.b||0,m+=1,p+=2;continue}if(N){f++,gn(i,t,y,_,f),f+=_.b||0,f++,Xe(Y,L,t,f),f+=Y.b||0,m+=2,p+=1;continue}if(j&&W===F){f++,gn(i,t,y,_,f),bn(i,t,x,L,p,c),f+=_.b||0,f++,Xe(Y,J,t,f),f+=Y.b||0,m+=2,p+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;gn(i,t,h.a,_,f),f+=_.b||0,m++}for(;p<s;){var Q=Q||[],g=u[p];bn(i,t,g.a,g.b,void 0,Q),p++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var Pc="_elmW6BL";function bn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Xe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}bn(e,r,n+Pc,a,t,i)}function gn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Xe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}gn(e,r,n+Pc,a,t)}function zc(e,r,n,a){hn(e,r,n,0,0,r.b,a)}function hn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)zc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&hn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&hn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var f=r.k;f.$===4;)f=f.k;return hn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,y=0;y<h.length;y++){t++;var x=p===1?h[y]:h[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=hn(g[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Tc(e,r,n,a){return n.length===0?e:(zc(e,r,n,a),ga(e,n))}function ga(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=O$(t,a);t===e&&(e=i)}return e}function O$(e,r){switch(r.$){case 0:return J$(e,r.s,r.u);case 4:return Mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ga(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(wr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=ga(e,i.w),e;case 8:return q$(e,r);case 5:return r.s(e);default:vn(10)}}function J$(e,r,n){var a=e.parentNode,t=wr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function q$(e,r){var n=r.s,a=X$(n.y,r);e=ga(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:wr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&co(e,a),e}function X$(e,r){if(!!e){for(var n=sr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;co(n,i.c===2?i.s:wr(i.z,r.u))}return n}}function $o(e){if(e.nodeType===3)return Tt(e.textContent);if(e.nodeType!==1)return Tt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=cr(o(Dr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=cr($o(v[a]),u);return d(Mr,l,r,u)}function Z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var K$=R(function(e,r,n,a){return io(r,a,e.e1,e.fS,e.fL,function(t,i){var c=e.fU,l=a.node,u=$o(l);return Mc(i,function(v){var s=c(v),m=Lc(u,s);l=Tc(l,u,m,t),u=s})})});R(function(e,r,n,a){return io(r,a,e.e1,e.fS,e.fL,function(t,i){var c=e.cS&&e.cS(t),l=e.fU,u=sr.title,v=sr.body,s=$o(v);return Mc(i,function(m){ba=c;var p=l(m),f=Mr("body")(z)(p.eu),h=Lc(s,f);v=Tc(v,s,h,t),s=f,ba=0,u!==p.fP&&(sr.title=u=p.fP)})})});var ha=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Mc(e,r){r(e);var n=0;function a(){n=n===1?0:(ha(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ha(a),n=2)}}$(function(e,r){return o(wo,xo,hr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(wo,xo,hr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(wo,xo,hr(function(){history.replaceState({},"",r),e()}))});var Q$={addEventListener:function(){},removeEventListener:function(){}},ef=typeof window<"u"?window:Q$;S(function(e,r,n){return _c(hr(function(a){function t(i){to(n(i))}return e.addEventListener(r,t,uo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ye(e,r);return qe(n)?ie(n.a):q});function kc(e,r){return hr(function(n){ha(function(){var a=document.getElementById(e);n(a?Jr(r(a)):v$(Cs(e)))})})}function rf(e){return hr(function(r){ha(function(){r(Jr(e()))})})}$(function(e,r){return kc(r,function(n){return n[e](),Rn})});$(function(e,r){return rf(function(){return ef.scroll(e,r),Rn})});S(function(e,r,n){return kc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var nf=$(function(e,r){var n="g";e.fh&&(n+="m"),e.ew&&(n+="i");try{return ie(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var af=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ie(m):q}a.push(P(Ll,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ie(v):q}return n(P(Ll,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var tf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/of(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function of(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var fo=new Float64Array(3),_i=new Float64Array(3),yi=new Float64Array(3),cf=S(function(e,r,n){return new Float64Array([e,r,n])}),lf=function(e){return e[0]},uf=function(e){return e[1]},vf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var $f=function(e){return new Float64Array([e.fY,e.f0,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Dc);function Ac(e,r,n){return n===void 0&&(n=new Float64Array(3)),_a(Dc(e,r,n),n)}$(Ac);function Bc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function _a(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Bc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ff=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),_n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(_n);function kt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(kt);$(function(e,r){var n,a=fo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=_n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(_n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(_n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(_n(r,a)+e[14])/n,t});var sf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var mf=function(e){return{fY:e[0],f0:e[1],c5:e[2],em:e[3]}},df=function(e){return new Float64Array([e.fY,e.f0,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/pf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function pf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var bf=new Float64Array(16),gf=new Float64Array(16),hf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},_f=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Fc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Oe(Fc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Fc(c,l,i,t,n,a)});function Vc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Oe(Vc);R(function(e,r,n,a){return Vc(e,r,n,a,-1,1)});function Rc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],p=e[9],f=e[10],h=e[11],g=e[12],y=e[13],x=e[14],_=e[15],L=r[0],k=r[1],N=r[2],j=r[3],E=r[4],W=r[5],Y=r[6],F=r[7],J=r[8],Q=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],ke=r[14],we=r[15];return n[0]=a*L+l*k+m*N+g*j,n[1]=t*L+u*k+p*N+y*j,n[2]=i*L+v*k+f*N+x*j,n[3]=c*L+s*k+h*N+_*j,n[4]=a*E+l*W+m*Y+g*F,n[5]=t*E+u*W+p*Y+y*F,n[6]=i*E+v*W+f*Y+x*F,n[7]=c*E+s*W+h*Y+_*F,n[8]=a*J+l*Q+m*le+g*fe,n[9]=t*J+u*Q+p*le+y*fe,n[10]=i*J+v*Q+f*le+x*fe,n[11]=c*J+s*Q+h*le+_*fe,n[12]=a*ce+l*pe+m*ke+g*we,n[13]=t*ce+u*pe+p*ke+y*we,n[14]=i*ce+v*pe+f*ke+x*we,n[15]=c*ce+s*pe+h*ke+_*we,n}$(Rc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],p=e[12],f=e[13],h=e[14],g=r[0],y=r[1],x=r[2],_=r[4],L=r[5],k=r[6],N=r[8],j=r[9],E=r[10],W=r[12],Y=r[13],F=r[14];return n[0]=a*g+c*y+v*x,n[1]=t*g+l*y+s*x,n[2]=i*g+u*y+m*x,n[3]=0,n[4]=a*_+c*L+v*k,n[5]=t*_+l*L+s*k,n[6]=i*_+u*L+m*k,n[7]=0,n[8]=a*N+c*j+v*E,n[9]=t*N+l*j+s*E,n[10]=i*N+u*j+m*E,n[11]=0,n[12]=a*W+c*Y+v*F+p,n[13]=t*W+l*Y+s*F+f,n[14]=i*W+u*Y+m*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=_a(r,fo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Bc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,p=c*s,f=l*s,h=i*c*v,g=i*l*v,y=c*l*v,x=i*i*v+u,_=h+f,L=g-p,k=h-f,N=c*c*v+u,j=y+m,E=g+p,W=y-m,Y=l*l*v+u,F=n[0],J=n[1],Q=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],ke=n[7],we=n[8],Sr=n[9],xr=n[10],at=n[11],ov=n[12],iv=n[13],cv=n[14],lv=n[15];return a[0]=F*x+fe*_+we*L,a[1]=J*x+ce*_+Sr*L,a[2]=Q*x+pe*_+xr*L,a[3]=le*x+ke*_+at*L,a[4]=F*k+fe*N+we*j,a[5]=J*k+ce*N+Sr*j,a[6]=Q*k+pe*N+xr*j,a[7]=le*k+ke*N+at*j,a[8]=F*E+fe*W+we*Y,a[9]=J*E+ce*W+Sr*Y,a[10]=Q*E+pe*W+xr*Y,a[11]=le*E+ke*W+at*Y,a[12]=ov,a[13]=iv,a[14]=cv,a[15]=lv,a});function yf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(yf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(Sf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],p=a[7],f=a[8],h=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=p,t[8]=f,t[9]=h,t[10]=g,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+p*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],p=r[6],f=r[7],h=r[8],g=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=p,n[7]=f,n[8]=h,n[9]=g,n[10]=y,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+p*t+y*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=Ac(e,r,fo),t=_a(kt(n,a,_i),_i),i=_a(kt(a,t,yi),yi),c=bf,l=gf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Rc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Si=0;function Tn(e,r){for(;r.b;r=r.b)e(r.a)}function so(e){for(var r=0;e.b;e=e.b)r++;return r}var xf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Cf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),wf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Lf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Pf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),zf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Tf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Mf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),kf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Df=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Af=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ff=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Vf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ec=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},jc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Rf=function(e){e.gl.disable(e.gl.CULL_FACE)},Ef=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},jf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},xi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Nf=[Bf,Ff,Vf,Ec,jc,Rf,Ef,jf,Wf];function Ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Yf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Wc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Gf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,y,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?y[x]:y[x][_];else i.forEach(function(L){for(_=0;_<h;_++)f[g++]=h===1?y[L][x]:y[L][x][_]})}var u=Wc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(so(n.b)*s);Tn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function Hf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=If(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*so(r.b),indexBuffer:null,buffers:{}}}function If(e,r){var n=new Uint32Array(so(e)*r),a=0,t;return Tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function wi(e,r){return e+"#"+r}var Nc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ec(n),jc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=wi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Si++,v||(v=Ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Si++,s||(s=Ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Yf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=wi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Of(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Hf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Gf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var y=Wc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,L=0;L<y.arraySize;L++)a.enableVertexAttribArray(h+L),a.vertexAttribPointer(h+L,y.size,y.baseType,!1,_,x*L)}for(n.toggle=!n.toggle,Tn(xp(n),i.a),u=0;u<xi.length;u++){var k=n[xi[u]];k.toggle!==n.toggle&&k.enabled&&(Nf[u](n),k.enabled=!1,k.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return Tn(t,e.g),r});function Uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,y=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var L=l.textures.get(_);L||(L=_.eC(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[g]!==_&&(e.uniform1i(y,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var p=e.getActiveUniform(t,m);v[a[p.name]||p.name]=u(t,p)}return v}function Of(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Jf=S(function(e,r,n){return T$(r,{g:n,f:{},h:e},rs,ns)}),qf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Xf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Zf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Kf=$(function(e,r){e.contextAttributes.antialias=!0}),Qf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),es=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function rs(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tn(function(t){return o(Sp,r,t)},e.h);var n=sr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),xf(function(){return o(Nc,e,n)})):(n=sr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ns(e,r){return r.f=e.f,Nc(r)}var B=gv,Kn=dv,Yc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return d(Kn,e,l,v)}else{var u=c.a;return d(Kn,i,l,u)}});return d(Kn,i,d(Kn,e,r,t),a)}),mo=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=d(e,a,t,d(mo,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Li=function(e){return d(mo,S(function(r,n,a){return o(B,T(r,n),a)}),z,e)},Gc=1,as=2,Hc=0,xe=function(e){return{$:1,a:e}},po=$(function(e,r){return{$:3,a:e,b:r}}),Pi=$(function(e,r){return{$:0,a:e,b:r}}),Ic=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},ts=function(e){return{$:2,a:e}},ie=function(e){return{$:0,a:e}},q={$:1},os=Hv,is=u$,Fe=bc,Er=$(function(e,r){return o(Nv,e,Ra(r))}),bo=$(function(e,r){return b(o(Wv,e,r))}),Uc=function(e){return o(Er,`
    `,o(bo,`
`,e))},En=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ir=function(e){return d(En,$(function(r,n){return n+1}),0,e)},cs=hv,ls=S(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Ur=$(function(e,r){return d(ls,e,r,z)}),go=$(function(e,r){return d(cs,e,o(Ur,0,Ir(r)-1),r)}),tr=Zv,Oc=function(e){var r=tr(e);return 97<=r&&r<=122},Jc=function(e){var r=tr(e);return r<=90&&65<=r},us=function(e){return Oc(e)||Jc(e)},vs=function(e){var r=tr(e);return r<=57&&48<=r},$s=function(e){return Oc(e)||Jc(e)||vs(e)},Re=function(e){return d(En,B,z,e)},$n=Vv,fs=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Uc(ss(r))))}),ss=function(e){return o(ms,e,z)},ms=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=$n(n);if(g.$===1)return!1;var y=g.a,x=y.a,_=y.b;return us(x)&&o(os,$s,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Er,"",Re(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Fe(Ir(s))+" ways:"));return o(Er,`

`,o(B,h,o(go,fs,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Er,"",Re(r)):"!"}();default:var p=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Er,"",Re(r))+`:

    `):`Problem with the given value:

`}();return h+(Uc(o(is,4,f))+(`

`+p))}}),Ee=32,Dt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),At=vv,ho=Tv,_o=$(function(e,r){return fi(r)/fi(e)}),ds=Pv,Mn=ho(o(_o,2,Ee)),qc=P(Dt,0,Mn,At,At),Xc=fv,Zc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Kc=Mv,Bt=$v,or=$(function(e,r){return O(e,r)>0?e:r}),ps=function(e){return{$:0,a:e}},yo=sv,bs=$(function(e,r){e:for(;;){var n=o(yo,Ee,e),a=n.a,t=n.b,i=o(B,ps(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),gs=function(e){var r=e.a;return r},hs=$(function(e,r){e:for(;;){var n=ho(r/Ee);if(n===1)return o(yo,Ee,e).a;var a=o(bs,e,z),t=n;e=a,r=t;continue e}}),Qc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Kc(o(_o,Ee,n-1)),t=e?Re(r.z):r.z,i=o(hs,t,r.l);return P(Dt,Bt(r.p)+n,o(or,5,a*Mn),i,r.p)}else return P(Dt,Bt(r.p),Mn,At,r.p)}),_s=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Qc,!1,{z:a,l:n/Ee|0,p:t});var i=Zc(d(Xc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ys=$(function(e,r){if(e<=0)return qc;var n=e%Ee,a=d(Xc,n,e-n,r),t=e-n-Ee;return w(_s,r,t,e,z,a)}),qe=function(e){return!e.$},A=o$,Z=e$,D=t$,se=r$,ya=i$,Ss=c$,De=Qv,So=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Mr("div"),xs=function(e){return{$:2,a:e}},el=$(function(e,r){return e}),rl=$(function(e,r){return{db:r.db,eA:e,b9:r.b9,eK:r.eK,e8:r.e8,fu:r.fu,cR:r.cR,fV:r.fV}}),Wr=function(e){return e},Cs=Wr,zi=Oe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ws=Iv,jr=Rv,en=Yv,jn=$(function(e,r){return e<1?r:d(en,e,jr(r),r)}),Ea=Ov,ja=function(e){return e===""},Wa=$(function(e,r){return e<1?"":d(en,0,e,r)}),nl=Jv,Ti=he(function(e,r,n,a,t){if(ja(t)||o(ws,"@",t))return q;var i=o(Ea,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=nl(o(jn,c+1,t));if(l.$===1)return q;var u=l;return ie(Se(zi,e,o(Wa,c,t),u,r,n,a))}else return ie(Se(zi,e,t,q,r,n,a))}),Mi=R(function(e,r,n,a){if(ja(a))return q;var t=o(Ea,"/",a);if(t.b){var i=t.a;return w(Ti,e,o(jn,i,a),r,n,o(Wa,i,a))}else return w(Ti,e,"/",r,n,a)}),ki=S(function(e,r,n){if(ja(n))return q;var a=o(Ea,"?",n);if(a.b){var t=a.a;return P(Mi,e,ie(o(jn,t+1,n)),r,o(Wa,t,n))}else return P(Mi,e,q,r,n)});$(function(e,r){if(ja(r))return q;var n=o(Ea,"#",r);if(n.b){var a=n.a;return d(ki,e,ie(o(jn,a+1,r)),o(Wa,a,r))}else return d(ki,e,q,r)});var Ls=Uv,xo=function(e){},Wn=Jr,Ps=Wn(0),al=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,p=n>500?d(En,e,r,Re(m)):P(al,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,p))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),_r=S(function(e,r,n){return P(al,e,r,0,n)}),ne=$(function(e,r){return d(_r,$(function(n,a){return o(B,e(n),a)}),z,r)}),Sa=zt,Co=$(function(e,r){return o(Sa,function(n){return Wn(e(n))},r)}),zs=S(function(e,r,n){return o(Sa,function(a){return o(Sa,function(t){return Wn(o(e,a,t))},n)},r)}),Ts=function(e){return d(_r,zs(B),Wn(z),e)},Ms=g$,ks=$(function(e,r){var n=r;return _c(o(Sa,Ms(e),n))}),Ds=S(function(e,r,n){return o(Co,function(a){return 0},Ts(o(ne,ks(e),r)))}),As=S(function(e,r,n){return Wn(0)}),Bs=$(function(e,r){var n=r;return o(Co,e,n)});ar.Task=p$(Ps,Ds,As,Bs);var Fs=Sc("Task"),wo=$(function(e,r){return Fs(o(Co,e,r))}),Vs=K$,Rs=Bv,xa={$:1},tl=function(e){return{$:2,a:e}},Na={$:0},He=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),fn=function(e){var r=e.b.B;return r.a},Es=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ie(o(He,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},ol=function(e){var r=e.b;return o(He,Na,r)},br=$(function(e,r){if(r.$)return e;var n=r.a;return n}),js=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fu.de?ol(n):n;case 2:var i=a.a.cW;return(O(i+r.eK,fn(n).db)>0?o(te,Es,br(o(He,xa,t))):Wr)(o(He,tl({cW:i+r.eK}),t));default:var c=t.B,l=c.a,u=c.b,v=o(rl,l.eA,rr(r,{db:l.db+r.eK})),s=o(e,v,u);return o(He,Na,{B:T(v,s),ab:z,T:o(B,t.B,t.T)})}}),il=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ws=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Ns=$(function(e,r){return Re(d(Ws,e,r,z))}),cl=S(function(e,r,n){if(r<=0)return z;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,f=p.b,s=f.a,h=f.b,g=h.a,y=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,g,o(Ns,r-4,y))))):o(B,_,o(B,c,o(B,s,o(B,g,d(cl,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),Ys=$(function(e,r){return d(cl,0,e,r)}),Gs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Re(n),ve(b([a]),t)),c=o(Ys,e,i),l=o(il,e,i);if(l.b){var u=l.a,v=l.b;return o(He,xa,{B:u,ab:v,T:Re(c)})}else{var s=Re(c);if(s.b){var m=s.a,p=s.b;return o(He,xa,{B:m,ab:z,T:p})}else return r}}),Hs=function(e){var r=e.b;return o(He,xa,r)},Is=function(e){var r=e.b;return o(He,tl({cW:fn(e).db}),r)},Us=$(function(e,r){switch(e.$){case 1:return Hs(r);case 2:return ol(r);case 3:return Is(r);default:var n=e.a;return o(Gs,n,r)}}),ll=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Os=$(function(e,r){return rr(r,{av:e(r.av)})}),Js=function(e){return{$:3,a:e}},ul=function(e){return{$:2,a:e}},vl=$(function(e,r){return{$:0,a:e,b:r}}),qs=$(function(e,r){return{$:1,a:e,b:r}}),Ve=$(function(e,r){if(r.$)return q;var n=r.a;return ie(e(n))}),K=function(e){return e<0?-e:e},Lo=qv,Xs=S(function(e,r,n){return o(br,0/0,Lo(o(e,r,n)))}),$l=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Zs=jv,fl=function(e){return d(Zs,B,z,e)},Ks=$(function(e,r){var n=o($l,function(a){return a!=="0"&&a!=="."},fl(r));return ve(e&&n?"-":"",r)}),oe=bc,Ft=Fv,sl=Kv,ml=function(e){var r=e.a,n=e.b;if(r==="9"){var a=$n(n);if(a.$===1)return"01";var t=a.a;return o(Ft,"0",ml(t))}else{var i=tr(r);return i>=48&&i<57?o(Ft,sl(i+1),n):"0"}},Vt=zv,Qs=Av,Ya=function(e){return o(Ft,e,"")},dl=S(function(e,r,n){return e<=0?n:d(dl,e>>1,ve(r,r),e&1?ve(n,r):n)}),kn=$(function(e,r){return d(dl,e,r,"")}),Rt=S(function(e,r,n){return ve(n,o(kn,e-jr(n),Ya(r)))}),Et=Ev,pl=function(e){var r=o(bo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},em=function(e){var r=o(bo,"e",oe(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(br,0,nl(o(Ls,"+",t)?o(jn,1,t):t)),c=pl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(br,"0",o(Ve,function(m){var p=m.a,f=m.b;return p+("."+f)},o(Ve,ll(Ya),$n(ve(o(kn,K(i),"0"),v))))):d(Rt,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},rm=S(function(e,r,n){if(Vt(n)||Qs(n))return oe(n);var a=n<0,t=pl(em(K(n))),i=t.a,c=t.b,l=jr(i)+r,u=ve(o(kn,-l+1,"0"),d(Rt,l,"0",ve(i,c))),v=jr(u),s=o(or,1,l),m=o(e,a,d(en,s,v,u)),p=d(en,0,s,u),f=m?Et(o(br,"1",o(Ve,ml,$n(Et(p))))):p,h=jr(f),g=f==="0"?f:r<=0?ve(f,o(kn,K(r),"0")):O(r,jr(c))<0?d(en,0,h-r,f)+("."+d(en,h-r,h,f)):ve(i+".",d(Rt,r,"0",c));return o(Ks,a,g)}),bl=rm($(function(e,r){var n=$n(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(tr(t))})),nm=Xs(bl),am=S(function(e,r,n){var a=o(_o,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(nm,t,n)}),gl=bv,Po=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(gl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ie(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),lr={$:-2},cn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,p=a.e;return w(H,0,r,n,w(H,1,v,s,m,p),w(H,1,i,c,l,u))}else return w(H,e,i,c,w(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,y=f.d,x=f.e,p=a.e;return w(H,0,v,s,w(H,1,h,g,y,x),w(H,1,r,n,p,t))}else return w(H,e,r,n,a,t)}),jt=S(function(e,r,n){if(n.$===-2)return w(H,0,e,r,lr,lr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(gl,e,t);switch(u){case 0:return w(cn,a,t,i,d(jt,e,r,c),l);case 1:return w(H,a,t,r,c,l);default:return w(cn,a,t,i,c,d(jt,e,r,l))}}),Cn=S(function(e,r,n){var a=d(jt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return w(H,1,t,i,c,l)}else{var u=a;return u}}),tm=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},hl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,p=v.d;p.a;var f=p.b,h=p.c,g=p.d,y=p.e,x=v.e;return w(H,0,f,h,w(H,1,n,a,w(H,0,i,c,l,u),g),w(H,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,m=L.c,p=L.d,x=L.e;return w(H,1,n,a,w(H,0,i,c,l,u),w(H,0,s,m,p,x))}else return e},Di=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,p=t.e,f=e.e;f.a;var h=f.b,g=f.c,y=f.d,x=f.e;return w(H,0,i,c,w(H,1,u,v,s,m),w(H,1,n,a,p,w(H,0,h,g,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,p=_.e,k=e.e;k.a;var h=k.b,g=k.c,y=k.d,x=k.e;return w(H,1,n,a,w(H,0,i,c,L,p),w(H,0,h,g,y,x))}else return e},om=Fa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return w(H,n,l,u,v,w(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Di(r)}else break e;else return c.a,c.d,Di(r);else break e;return r}}),ua=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,w(H,r,n,a,ua(t),l);var u=hl(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,f=u.e;return w(cn,v,s,m,ua(p),f)}else return lr}else return w(H,r,n,a,ua(t),l)}else return lr},wn=$(function(e,r){if(r.$===-2)return lr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,w(H,n,a,t,o(wn,e,i),c);var u=hl(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,f=u.e;return w(cn,v,s,m,o(wn,e,p),f)}else return lr}else return w(H,n,a,t,o(wn,e,i),c);else return o(im,e,no(om,e,r,n,a,t,i,c))}),im=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Pr(e,a)){var l=tm(c);if(l.$===-1){var u=l.b,v=l.c;return w(cn,n,u,v,i,ua(c))}else return lr}else return w(cn,n,a,t,i,o(wn,e,c))}else return lr}),cm=$(function(e,r){var n=o(wn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return w(H,1,a,t,i,c)}else{var l=n;return l}}),Qn=S(function(e,r,n){var a=r(o(Po,e,n));if(a.$)return o(cm,e,n);var t=a.a;return d(Cn,e,t,n)}),lm=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Qn,r,Ve(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(qs,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Qn,r,Ve(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(vl,T(i,c),d(am,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Qn,r,Ve(function(a){return a.$===3?Js(n):a}));default:var r=e.a,n=e.b;return o(Qn,r,Ve(function(a){return a.$===2?ul(n):a}))}},um=function(e){return Os(lm(e))},vm=$(function(e,r){return o(ne,um(e),r)}),$m=$(function(e,r){return rr(r,{eA:o(vm,e,r.eA)})}),fm=$(function(e,r){var n=r.a,a=r.b;return o(He,n,rr(a,{B:o(ll,$m(e),a.B)}))}),sm=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),mm=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(He,a,rr(t,{B:o(sm,o(e,i.a,r),i)}))}),dm=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return rr(a,{aL:!a.aL});case 2:var t=n.a;return rr(a,{G:d(js,e,t,a.G)});case 3:var i=n.a;return rr(a,{G:o(fm,i,a.G)});case 4:var c=n.a;return rr(a,{G:d(mm,r,c,a.G)});default:var l=n.a;return rr(a,{G:o(Us,l,a.G)})}}),pm=$(function(e,r){return o(He,Na,{B:T(e,r(e)),ab:z,T:z})}),bm=h$,Ai=bm(z),Ca=a$,Dn=n$,gm=C$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({db:c,b9:i,eK:t,e8:a,fu:n,cR:r,fV:e})},o(D,"clock",se))},o(D,"devicePixelRatio",se))},o(D,"dt",se))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return De({eo:m,eB:s,de:v,eJ:u,e9:l,fw:c,fA:i,fG:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Ca(Dn)))},o(D,"left",Z))},o(D,"pressedKeys",Ca(Dn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({de:v,e5:u,fe:l,fB:c,fC:i,eh:t,fY:a,f0:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",se))},o(D,"y",se))))},o(D,"screen",o(A,function(r){return o(A,function(n){return De({eX:n,fW:r})},o(D,"height",se))},o(D,"width",se))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return De({eF:r,eG:e})},o(D,"deltaX",se))},o(D,"deltaY",se))))),hm=function(e){return{$:4,a:e}},_m={$:0},ym=hc,Je=$(function(e,r){return o(wc,e,ym(r))}),U=Je("className"),Sm=function(e){var r=e.b.B;return r.b},wa=Je("id"),xm=M$,La=xm,Cm=k$,X=Cm,wm={$:1},Lm=function(e){return{$:3,a:e}},Pm=function(e){return{$:5,a:e}},Bi=Mr("a"),zo=Mr("button"),Fi=function(e){return o(Je,"href",B$(e))},zm=Dr("clip-rule"),Le=Dr("d"),Tm=Dr("fill"),_l=xc("http://www.w3.org/2000/svg"),Mm=_l("svg"),km=Dr("viewBox"),Dm=o(D$,"http://www.w3.org/XML/1998/namespace","xml:space"),je=Mm(b([km("0 0 24 24"),Tm("currentColor"),o(X,"width","100%"),o(X,"height","100%"),Dm("http://www.w3.org/2000/svg")])),Am=Dr("fill-rule"),Pe=_l("path"),Nr={eD:je(b([o(Pe,b([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),eR:je(b([o(Pe,b([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),eW:je(b([o(Pe,b([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),ff:je(b([o(Pe,b([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(Pe,b([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fg:je(b([o(Pe,b([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(Pe,b([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),fq:je(b([o(Pe,b([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),fs:je(b([o(Pe,b([Le("M7 5V19L18 12L7 5Z")]),z)])),ft:je(b([o(Pe,b([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),fu:je(b([o(Pe,b([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),fQ:je(b([o(Pe,b([Am("evenodd"),zm("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),fR:je(b([o(Pe,b([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),f4:je(b([o(Pe,b([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},Bm=function(e){return{$:0,a:e}},yl=Cc,Sl=$(function(e,r){return o(yl,e,Bm(r))}),To=function(e){return o(Sl,"click",De(e))},Vi=Je("target"),Fm=Je("title"),Wt=$(function(e,r){if(r.$===-2)return lr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return w(H,n,a,o(e,a,t),o(Wt,e,i),o(Wt,e,c))}),Vm=Tt,ye=Vm,Rm=function(e){return d(mo,S(function(r,n,a){return o(B,n,a)}),z,e)},Em=$(function(e,r){return{$:3,a:e,b:r}}),jm=$(function(e,r){return{$:2,a:e,b:r}}),Wm=$(function(e,r){return{$:0,a:e,b:r}}),Nm=$(function(e,r){return{$:1,a:e,b:r}}),Nn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xl=P(Nn,0/255,0/255,0/255,1),Ym=hc,Cl=$(function(e,r){return o(wc,e,Ym(r))}),Gm=Cl("checked"),Ke=kv,Hm=S(function(e,r,n){return ve(o(kn,e-jr(n),Ya(r)),n)}),An=yv,wl=function(e){var r=function(n){return n<10?Fe(n):Ya(sl(87+n))};return e<16?r(e):ve(wl(e/16|0),r(o(An,16,e)))},Im=o(te,wl,o(Hm,2,"0")),Mo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b4:a,cb:n,cL:r}},Um=function(e){var r=Mo(e),n=r.cL,a=r.cb,t=r.b4;return o(Er,"",o(B,"#",o(ne,o(te,Ke,Im),b([n*255,a*255,t*255]))))},Nt=Je("htmlFor"),Om=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Pa=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Jm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),ko=$(function(e,r){return d(_r,Jm(e),z,r)}),Ll=R(function(e,r,n,a){return{e0:r,fc:e,fl:n,fK:a}}),qm=af,Xm=Xv,Zm=$(function(e,r){if(r.$)return xe(e);var n=r.a;return $e(n)}),Km=nf,Qm=function(e){return o(Km,{ew:!1,fh:!1},e)},Do=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return q},ed=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return $e(e(n))}}),rd=function(e){return{$:2,a:e}},nd=function(e){return{$:0,a:e}},ad=function(e){return{$:1,a:e}},it=$(function(e,r){return tr(r)-tr(e)}),ct=S(function(e,r,n){var a=tr(n);return O(tr(e),a)<1&&O(a,tr(r))<1}),td=$(function(e,r){var n=function(t){return O(t,e)<0?$e(t):xe(ad(r))},a=d(ct,"0","9",r)?$e(o(it,"0",r)):d(ct,"a","z",r)?$e(10+o(it,"a",r)):d(ct,"A","Z",r)?$e(10+o(it,"A",r)):xe(nd(r));return o(Pa,n,a)}),Pl=$(function(e,r){var n=$n(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(Pa,function(c){return o(Pa,function(l){return $e(c+l*e)},o(Pl,e,i))},o(td,e,t))}),od=$(function(e,r){return 2<=e&&e<=36?o(Pl,e,Et(r)):xe(rd(e))}),id=od(16),cd=S(function(e,r,n){return P(Nn,e,r,n,1)}),zl=R(function(e,r,n,a){return P(Nn,e,r,n,a)}),Yn=_v,ld=$(function(e,r){var n=o(Yn,10,e);return Ke(r*n)/n}),ud=Gv,vd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=fl(n);if(a.b&&!a.b.b){var t=a.a;return Xm(b([t,t]))}else return n};return o(te,ud,o(te,function(n){return o(Ve,function(a){return d(qm,1,a,n)},Qm(e))},o(te,Om(Do),o(te,Ve(function(n){return n.fK}),o(te,Ve(ko(Wr)),o(te,Zm("Parsing hex regex failed"),Pa(function(n){var a=o(ne,o(te,r,o(te,id,ed(ds))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(P(zl,t/255,c/255,u/255,o(ld,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return $e(d(cd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),za=Mr("input"),Yt=Mr("label"),Gt=Je("name"),Tl=$(function(e,r){return d(_r,D,r,e)}),$d=o(Tl,b(["target","checked"]),Z),fd=function(e){return o(Sl,"change",o(ya,e,$d))},sd=function(e){return T(e,!0)},md=function(e){return{$:1,a:e}},dd=$(function(e,r){return o(yl,e,md(r))}),pd=o(Tl,b(["target","value"]),Dn),Ao=function(e){return o(dd,"input",o(ya,sd,o(ya,e,pd)))},Ml=Je("max"),kl=Je("min"),Dl=function(e){return o(Je,"step",e)},Ta=Je("type"),Bo=Je("value"),Ri=function(e){var r=e.ce,n=e.c$,a=e.cu,t=e.cq,i=e.cU,c=e.cy;return o(I,z,b([o(Yt,b([Nt(r)]),b([o(I,b([U("relative w-full")]),b([o(I,b([U("inline-block")]),b([ye(r)])),o(I,b([U("inline-block float-right")]),b([ye(oe(n))]))]))])),o(za,b([Ta("range"),o(X,"width","100%"),wa(r),Gt(r),kl(oe(a)),Ml(oe(t)),Bo(oe(n)),Dl(oe(i)),Ao(o(te,Lo,o(te,br(42),c)))]),z)]))},bd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,b([U("h-12 py-4")]),b([o(Yt,b([U("block"),Nt(e)]),b([o(za,b([U("relative bottom-[1px] align-middle mr-2"),Ta("checkbox"),wa(e),Gt(e),fd(Em(e)),Gm(c)]),z),ye(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ri({ce:e,cq:i,cu:t,cy:Wm(e),cU:.01*(i-t),c$:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ri({ce:e,cq:i,cu:t,cy:o(te,Ke,Nm(e)),cU:1,c$:c});default:var c=r.a;return o(I,z,b([o(I,b([o(X,"margin-bottom","6px")]),b([o(Yt,b([Nt(e)]),b([ye(e)]))])),o(za,b([Ta("color"),o(X,"width","100%"),o(X,"height","26px"),o(X,"padding","0px"),wa(e),Gt(e),Ao(function(l){return o(jm,e,o(bd,xl,vd(l)))}),Bo(Um(c))]),z)]))}}),hd=function(e){return o(I,b([U("p-4 border-y-[0.5px] border-white20")]),b([o(I,b([U("text-lg pb-2")]),b([ye(e.fi)])),o(I,b([U("pl-2 pr-2")]),Rm(o(Wt,gd,e.av)))]))},_d=function(e){return o(I,b([U("text-xs text-white60")]),o(ne,hd,e))},yd=function(e){return o(I,b([U("absolute left-[104px] bottom-2 text-sm text-white40")]),b([ye("clock: "+o(bl,3,fn(e).db))]))},Sd=function(e){e.a;var r=e.b.T;return o(Ve,function(n){return Ke(60/(fn(e).db-n))},o(Ve,o(te,gs,function(n){return n.db}),Do(o(il,59,r))))},xd=function(e){return o(I,b([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Sd(e);if(r.$===1)return b([ye("... Fps")]);var n=r.a;return b([ye(Fe(n)+" Fps")])}())},Cd=function(e){return{$:0,a:e}},wd=function(e){var r=e.b.T;return Ir(r)},Ld=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ir(r)+1+Ir(n)},Pd=function(e){return o(za,b([U("absolute w-full"),Ta("range"),kl(Fe(0)),Ml(Fe(Ld(e)-1)),Bo(Fe(wd(e))),Dl(Fe(1)),Ao(o(te,Lo,o(te,br(42),o(te,Ke,Cd))))]),z)},Ei={$:1},ji={$:3},Wi={$:2},Ht=function(e){return!e.b},Al=Cl("disabled"),lt=S(function(e,r,n){return o(zo,b([U("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),U(n),Al(e),To(r)]),b([ye("REC")]))}),ut=S(function(e,r,n){return o(zo,b([U("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Al(e),To(n)]),b([o(I,b([U("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),zd=function(e){var r=e.a,n=e.b.ab;return o(I,b([U("py-1")]),b([function(){switch(r.$){case 0:return d(lt,!1,Ei,"text-red-500 font-bold");case 1:return d(lt,!1,Wi,"text-white60 hover:text-white80 font-bold");default:return d(lt,!0,Wi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return d(ut,Ht(n),Nr.fs,ji);case 1:return d(ut,Ht(n),Nr.fs,ji);default:return d(ut,!1,Nr.fq,Ei)}}()]))},Td=function(e){return o(I,b([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Pd(e),zd(e),xd(e),yd(e)]))},Md=function(e){var r=e.a;return Pr(r,Na)},kd=$(function(e,r){var n=Md(r.G)?o(I,z,z):o(I,b([U("absolute pointer-events-none w-8 h-8"),o(X,"left",oe(e.fu.fY+.5*e.cR.fW)+"px"),o(X,"top",oe(-e.fu.f0+.5*e.cR.eX)+"px")]),b([o(I,b([U(e.fu.e5?"text-black80":"text-black40")]),b([Nr.fu]))]));return o(I,z,b([n]))}),Dd=$(function(e,r){var n=o(zo,b([U(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),To(wm),Fm("Distraction Free Mode")]),b([Nr.f4])),a=40,t=260,i=o(I,b([U("absolute w-8 bottom-12")]),b([o(Bi,b([U("text-twitterBlue40 hover:text-twitterBlue"),Fi("https://twitter.com/AzizErkalSelman"),Vi("_blank")]),b([Nr.fR]))])),c=80,l=o(I,b([U("absolute w-8 bottom-2")]),b([o(Bi,b([U("text-githubCat40 hover:text-githubCat"),Fi("https://github.com/erkal/elm-3d-playground-exploration"),Vi("_blank")]),b([Nr.eR]))])),u=e.cR.fW>640?C(e.cR.eX,a+t,e.cR.fW-(a+t)):C(e.cR.eX-c,a,e.cR.fW-a),v=u.a,s=u.b,m=u.c;return r.aL?o(I,b([U("fixed w-10 h-10 p-1")]),b([n])):o(I,z,b([o(I,b([U("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(X,"width",oe(a)+"px")]),b([n,i,l])),o(I,b([U("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(X,"width",oe(t)+"px"),o(X,"height",oe(v)+"px")]),b([o(La,Lm,_d(fn(r.G).eA))])),o(I,b([U("absolute bottom-0"),o(X,"left",oe(s)+"px"),o(X,"height",oe(c)+"px"),o(X,"width",oe(m)+"px")]),b([o(La,Pm,Td(r.G))])),o(kd,e,r)]))}),Ad=S(function(e,r,n){var a=Sm(n.G),t=fn(n.G);return o(I,b([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(X,"width",oe(t.cR.fW)+"px"),o(X,"height",oe(t.cR.eX)+"px")]),b([o(I,b([U("fixed")]),b([o(La,el(_m),o(e,t,a))])),o(I,b([wa("gui")]),b([o(Dd,t,n),o(La,hm,o(r,t,a))]))]))}),Bd=Oe(function(e,r,n,a,t,i){var c=$(function(u,v){return T(P(dm,r,i,u,v),Ai)}),l=function(u){var v=o(rl,n,u.e2);return T({aL:u.e2.cR.fW<500,G:o(pm,v,a)},Ai)};return Vs({e1:l,fL:el(gm(xs)),fS:c,fU:o(Ad,e,t)})}),Fd=R(function(e,r,n,a){return Se(Bd,e,r,n,a,$(function(t,i){return o(I,z,z)}),S(function(t,i,c){return c}))}),Vr=S(function(e,r,n){return{eE:n,fv:e,fD:r}}),Vd={fr:b([d(Vr,C(-3,3,0),C(0,0,0),b([C(0,0,0),C(1,0,0),C(0,1,0)])),d(Vr,C(0,3,0),C(0,0,0),b([C(0,0,0),C(1,0,0),C(0,1,0),C(0,2,0)])),d(Vr,C(3,3,0),C(0,0,0),b([C(0,0,0),C(1,1,0),C(0,1,0),C(0,2,0)])),d(Vr,C(-3,-1,0),C(0,0,0),b([C(0,0,0),C(0,1,0),C(1,1,0),C(1,2,0)])),d(Vr,C(3,0,0),C(0,0,0),b([C(0,0,0),C(1,0,0),C(0,0,1),C(0,1,1)])),d(Vr,C(-2,-3,0),C(0,0,0),b([C(0,0,0),C(1,0,0),C(0,0,1),C(1,1,0)])),d(Vr,C(2,-3,0),C(0,0,0),b([C(0,0,0),C(1,0,0),C(0,0,1),C(0,1,0)]))])},Rd=function(e){return{c1:Vd}},Ed=$(function(e,r){return T(e,ul(r))}),jd=S(function(e,r,n){return{av:n,e6:r,fi:e}}),Bl=lr,Wd=function(e){return d(En,$(function(r,n){var a=r.a,t=r.b;return d(Cn,a,t,n)}),Bl,e)},Nd=S(function(e,r,n){return d(jd,e,r,Wd(n))}),vt=Nd,ur=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(vl,T(a,t),n))}),Ae=Sv,Yd=b([d(vt,"Camera",!0,b([d(ur,"camera distance",T(3,60),20),d(ur,"camera azimuth",T(0,2*Ae),.6),d(ur,"camera elevation",T(-Ae/2,Ae/2),.4)])),d(vt,"Parameters",!0,b([d(ur,"cube scale",T(.1,1),.95),d(ur,"edge width",T(.001,.5),.1)])),d(vt,"Colors and light",!0,b([d(ur,"sunlight azimuth",T(0,2*Ae),5.5),d(ur,"sunlight elevation",T(-Ae/2,Ae/2),-1),d(ur,"saturation",T(0,1),.6),d(ur,"lightning",T(0,1),.8),o(Ed,"edge color",xl)]))]),Gd=$(function(e,r){return r}),Hd=Mr("p"),Id=$(function(e,r){return o(I,b([o(X,"min-width","320px"),o(X,"max-width","500px"),o(X,"margin","0 auto")]),b([o(I,b([U("m-2 text-center")]),b([ye("The Soma Cube")])),o(Hd,b([U("p-2 text-xs")]),b([o(I,b([o(X,"color","darkred")]),b([ye("Following controls are not implemented yet")])),o(I,z,b([ye("Space Key to chose the next piece")])),o(I,z,b([ye("Arrow keys to rotate the cube")])),o(I,z,b([ye("WASDQE to move the cube")])),o(I,z,b([ye("Shift + Arrow Keys to rotate the camera")]))]))]))}),Ud=$(function(e,r){return o(Ve,function(n){if(n.$)return 0;var a=n.b;return a},o(Po,e,r.av))}),Od=$(function(e,r){return o(br,0,Do(o(ko,Ud(e),r)))}),Jd=$(function(e,r){return o(Od,e,r.eA)}),Ze=Jd,qd=Lv,Xd=function(e){return e},Lr=function(e){return e},It=function(e){var r=e;return-r},Zd=$(function(e,r){var n=e,a=r;return{fY:n.f0*a.c5-n.c5*a.f0,f0:n.c5*a.fY-n.fY*a.c5,c5:n.fY*a.f0-n.f0*a.fY}}),Fl=function(e){var r=e;return r.c3},Vl=function(e){var r=e;return r.c4},Kd=function(e){return o(Zd,Fl(e),Vl(e))},qr=function(e){var r=e;return r.cz},Or=xv,ln=Cv,va=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Or(c),u=ln(c),v=a.eI,s=v,m=s.fY*u,p=l*m,f=m*m,h=s.f0*u,g=l*h,y=m*h,x=h*h,_=1-2*(f+x),L=s.c5*u,k=l*L,N=2*(y-k),j=2*(y+k),E=m*L,W=2*(E+g),Y=2*(E-g),F=h*L,J=2*(F-p),Q=2*(F+p),le=L*L,fe=1-2*(x+le),ce=1-2*(f+le);return{fY:fe*i.fY+N*i.f0+W*i.c5,f0:j*i.fY+ce*i.f0+J*i.c5,c5:Y*i.fY+Q*i.f0+_*i.c5}}),Gn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Or(c),u=ln(c),v=a.cz,s=v,m=i.fY-s.fY,p=i.f0-s.f0,f=i.c5-s.c5,h=a.eI,g=h,y=g.fY*u,x=l*y,_=y*y,L=g.f0*u,k=l*L,N=y*L,j=L*L,E=1-2*(_+j),W=g.c5*u,Y=l*W,F=2*(N-Y),J=2*(N+Y),Q=y*W,le=2*(Q+k),fe=2*(Q-k),ce=L*W,pe=2*(ce-x),ke=2*(ce+x),we=W*W,Sr=1-2*(j+we),xr=1-2*(_+we);return{fY:s.fY+Sr*m+F*p+le*f,f0:s.f0+J*m+xr*p+pe*f,c5:s.c5+fe*m+ke*p+E*f}}),gr=function(e){return e},Ar=function(e){var r=e;return r.c3},Br=function(e){var r=e;return r.c4},Fr=function(e){var r=e;return r.c6},Rl=S(function(e,r,n){return gr({cz:d(Gn,e,r,qr(n)),c3:d(va,e,r,Ar(n)),c4:d(va,e,r,Br(n)),c6:d(va,e,r,Fr(n))})}),Ni=S(function(e,r,n){return d(Rl,e(n),r,n)}),Fo=function(e){var r=e;return r.eI},Hn=$(function(e,r){var n=e,a=r;return{fY:a.fY+n.fY,f0:a.f0+n.f0,c5:a.c5+n.c5}}),El=$(function(e,r){return gr({cz:o(Hn,e,qr(r)),c3:Ar(r),c4:Br(r),c6:Fr(r)})}),Qd=$(function(e,r){var n=e,a=r;return{fY:n*a.fY,f0:n*a.f0,c5:n*a.c5}}),e0=S(function(e,r,n){return o(El,o(Qd,r,e),n)}),r0=S(function(e,r,n){return d(e0,Fo(e(n)),r,n)}),yr=$(function(e,r){return{eI:r,cz:e}}),n0=function(e){var r=e;return o(yr,r.cz,r.c3)},a0=function(e){var r=e;return o(yr,r.cz,r.c4)},t0=function(e){var r=e;return o(yr,r.cz,r.c6)},o0=function(e){var r=gr({cz:e.aR,c3:Vl(e.dl),c4:Kd(e.dl),c6:Fl(e.dl)}),n=d(r0,t0,e.ca,d(Ni,n0,It(e.bC),d(Ni,a0,e.bx,r)));return n},i0=function(e){return{$:0,a:e}},de=function(e){var r=e;return K(r)},$a=function(e){var r=e;return .5*r},c0=wv,l0=function(e){var r=e;return c0(r)},u0=function(e){var r=$a(de(e.ej)),n=l0(r);return{cK:i0(n),c0:e.c0}},ir=function(e){return e},Ge={fY:0,f0:0,c5:0},jl=Wr,mr=function(e){return e},Wl=mr({fY:1,f0:0,c5:0}),Ga=Wl,Vo=mr({fY:0,f0:0,c5:1}),Ha=Vo,v0=jl({cz:Ge,c3:Ha,c4:Ga}),$0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.ca;return u0({ej:ir(2*qd(.5)),c0:o0({bx:ir(n),ca:Lr(t),bC:ir(a),aR:Xd(r),dl:v0})})},f0=function(e){return $0({bx:o(Ze,"camera azimuth",e),ca:o(Ze,"camera distance",e),bC:o(Ze,"camera elevation",e),aR:{fY:.5,f0:1,c5:0}})},In=$(function(e,r){return{$:0,a:e,b:r}}),$t=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),ft=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),dr=$(function(e,r){var n=e,a=r;return a-n}),s0=mr({fY:-1,f0:0,c5:0}),m0=mr({fY:0,f0:-1,c5:0}),Nl=mr({fY:0,f0:0,c5:-1}),Yl=mr({fY:0,f0:1,c5:0}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,c5:i}}),d0=Oe(function(e,r,n,a,t,i){var c=o($t,n,i)?Vo:Nl,l=o($t,r,t)?Yl:m0,u=o($t,e,a)?Wl:s0,v=C(de(o(dr,e,a)),de(o(dr,r,t)),de(o(dr,n,i))),s=d(be,o(ft,e,a),o(ft,r,t),o(ft,n,i)),m=gr({cz:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),Yr=function(e){var r=e;return r.fY},Gr=function(e){var r=e;return r.f0},Hr=function(e){var r=e;return r.c5},Gl=$(function(e,r){return Se(d0,Yr(e),Gr(e),Hr(e),Yr(r),Gr(r),Hr(r))}),Bn=S(function(e,r,n){return{fY:e,f0:r,c5:n}}),p0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=C(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(In,e,o(Gl,d(Bn,-c,-l,-u),d(Bn,c,l,u)))}),Cr=function(e){return e*Ae/180},Ia=function(e){return{$:5,a:e}},Ma=function(e){return Ia(e)},b0=R(function(e,r,n,a){var t=C(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),p=s(i),f=s(i+1/3);return P(Nn,f,p,m,a)}),Hl=S(function(e,r,n){return P(b0,e,r,n,1)}),Ut=function(e){return{$:0,a:e}},Il=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ul=S(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),st=function(e){return d(Ul,0,1,e<=.04045?e/12.92:o(Yn,(e+.055)/1.055,2.4))},Un=cf,g0=function(e){var r=Mo(e),n=r.cL,a=r.cb,t=r.b4;return d(Un,st(n),st(a),st(t))},Ol=function(e){return d(Il,0,Ut(g0(e)),Ut(0))},Ro=$(function(e,r){return{$:2,a:e,b:r}}),Eo=$(function(e,r){return{$:4,a:e,b:r}}),jo=$(function(e,r){return{$:3,a:e,b:r}}),Wo=$(function(e,r){return{$:1,a:e,b:r}}),h0=S(function(e,r,n){return{fY:e,f0:r,c5:n}}),_0=function(e){var r=e;return r},Ua=function(e){var r=e;return _0(r.er)},Oa=function(e){var r=e;return r.aK},y0=$(function(e,r){return{er:o(El,e,Ua(r)),aK:Oa(r)}}),S0=$(function(e,r){var n=r;return o(yr,o(Hn,e,n.cz),n.eI)}),x0=$(function(e,r){var n=r;return{k:o(S0,e,n.k),fa:n.fa,fx:n.fx}}),No=function(e){var r=e;return r},C0=function(e){return e},Yo=$(function(e,r){var n=No(r),a=n.a,t=n.b;return C0(T(e(a),e(t)))}),w0=$(function(e,r){return o(Yo,Hn(e),r)}),Ja=function(e){var r=e;return r.ey},qa=function(e){var r=e;return r.fx},Go=$(function(e,r){return{ey:r,fx:de(e)}}),L0=$(function(e,r){return o(Go,qa(r),o(Hn,e,Ja(r)))}),Ho=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return C(e(a),e(t),e(i))}),P0=$(function(e,r){return o(Ho,Hn(e),r)}),Xa=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=d(h0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(In,s,o(y0,i,c));case 1:var s=r.a,l=r.b;return o(Wo,s,o(P0,i,l));case 3:var s=r.a,u=r.b;return o(jo,s,o(L0,i,u));case 2:var s=r.a,v=r.b;return o(Ro,s,o(x0,i,v));case 4:var s=r.a,m=r.b;return o(Eo,s,o(w0,i,m));default:var p=r.a;return Ia(o(ne,Xa(C(n,a,t)),p))}}),rn=function(e){return Xa(C(e,0,0))},nn=function(e){return Xa(C(0,0,e))},z0=S(function(e,r,n){return{er:d(Rl,e,r,Ua(n)),aK:Oa(n)}}),T0=$(function(e,r){var n=o(Gn,e,r),a=o(va,e,r);return function(t){var i=t;return o(yr,n(i.cz),a(i.eI))}}),M0=S(function(e,r,n){var a=n;return{k:d(T0,e,r,a.k),fa:a.fa,fx:a.fx}}),k0=S(function(e,r,n){return o(Yo,o(Gn,e,r),n)}),D0=S(function(e,r,n){return o(Go,qa(n),d(Gn,e,r,Ja(n)))}),A0=S(function(e,r,n){return o(Ho,o(Gn,e,r),n)}),Za=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(In,l,d(z0,e,r,a));case 1:var l=n.a,t=n.b;return o(Wo,l,d(A0,e,r,t));case 3:var l=n.a,i=n.b;return o(jo,l,d(D0,e,r,i));case 2:var l=n.a,c=n.b;return o(Ro,l,d(M0,e,r,c));case 4:var l=n.a,u=n.b;return o(Eo,l,d(k0,e,r,u));default:var v=n.a;return Ia(o(ne,o(Za,e,r),v))}}),B0=o(yr,Ge,Ga),Jl=$(function(e,r){return d(Za,B0,ir(e),r)}),Io=Yl,F0=o(yr,Ge,Io),fa=$(function(e,r){return d(Za,F0,ir(e),r)}),V0=o(yr,Ge,Ha),ql=$(function(e,r){return d(Za,V0,ir(e),r)}),R0=$(function(e,r){return(r-Kc(r/e)*e)/e}),E0=function(e){return 2*Ae*e},j0=R(function(e,r,n,a){return e+(r-e)*(1+Or(E0(o(R0,n,a))))/2}),W0=function(e){var r=o(Ze,"edge width",e),n=d(Hl,P(j0,0,1,7,e.db),o(Ze,"saturation",e),o(Ze,"lightning",e)),a=o(p0,Ol(n),C(r,3+r,r)),t=Ma(b([o(rn,1.5,o(nn,1.5,a)),o(fa,Cr(90),o(rn,1.5,o(nn,1.5,a))),o(fa,Cr(180),o(rn,1.5,o(nn,1.5,a))),o(fa,Cr(270),o(rn,1.5,o(nn,1.5,a)))]));return Ma(b([t,o(Jl,Cr(90),t),o(ql,Cr(90),t)]))},N0=$(function(e,r){var n=r/2;return o(In,e,o(Gl,d(Bn,-n,-n,-n),d(Bn,n,n,n)))}),Xl=function(e){return Xa(C(0,e,0))},ee=$(function(e,r){var n=r;return e*n}),pr=function(e){var r=e;return{fY:-r.fY,f0:-r.f0,c5:-r.c5}},On=S(function(e,r,n){var a=e,t=n;return{fY:a.fY+r*(t.fY-a.fY),f0:a.f0+r*(t.f0-a.f0),c5:a.c5+r*(t.c5-a.c5)}}),Y0=S(function(e,r,n){var a=Ua(n),t=Ar(a),i=Br(a),c=Fr(a),l=d(On,e,r,qr(a)),u=r>=0?gr({cz:l,c3:t,c4:i,c6:c}):gr({cz:l,c3:pr(t),c4:pr(i),c6:pr(c)}),v=Oa(n),s=v.a,m=v.b,p=v.c,f=de(o(ee,r,s)),h=de(o(ee,r,m)),g=de(o(ee,r,p));return{er:u,aK:C(f,h,g)}}),Uo=function(e){var r=e;return r.k},Yi=function(e){return Fo(Uo(e))},Zl=function(e){var r=e;return r.cz},G0=function(e){return Zl(Uo(e))},Kl=function(e){var r=e;return r.fa},Ql=function(e){var r=e;return r.fx},H0=S(function(e,r,n){var a=de(o(ee,r,Ql(n))),t=de(o(ee,r,Kl(n))),i=r>=0?Yi(n):pr(Yi(n)),c=d(On,e,r,G0(n));return{k:o(yr,c,i),fa:t,fx:a}}),I0=S(function(e,r,n){return o(Yo,o(On,e,r),n)}),U0=S(function(e,r,n){return o(Go,o(ee,K(r),qa(n)),d(On,e,r,Ja(n)))}),O0=S(function(e,r,n){return o(Ho,o(On,e,r),n)}),eu=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(In,c,d(Y0,Ge,e,n));case 1:var c=r.a,a=r.b;return o(Wo,c,d(O0,Ge,e,a));case 3:var c=r.a,t=r.b;return o(jo,c,d(U0,Ge,e,t));case 2:var c=r.a,i=r.b;return o(Ro,c,d(H0,Ge,e,i));case 4:var c=r.a,l=r.b;return o(Eo,c,d(I0,Ge,e,l));default:var u=r.a;return Ia(o(ne,eu(e),u))}}),J0=S(function(e,r,n){var a=n.a,t=n.b,i=n.c;return o(nn,i,o(Xl,t,o(rn,a,o(eu,o(Ze,"cube scale",e),o(N0,Ol(r),1)))))}),q0=S(function(e,r,n){var a=n.fD,t=a.a,i=a.b,c=a.c,l=n.fv,u=l.a,v=l.b,s=l.c;return o(nn,s,o(Xl,v,o(rn,u,o(ql,c*Cr(90),o(fa,i*Cr(90),o(Jl,t*Cr(90),Ma(o(ne,o(J0,e,r),n.eE))))))))}),Ot=4294967295>>>32-Mn,Jt=mv,X0=S(function(e,r,n){e:for(;;){var a=Ot&r>>>e,t=o(Jt,a,n);if(t.$){var v=t.a;return o(Jt,Ot&r,v)}else{var i=t.a,c=e-Mn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Z0=function(e){return e>>>5<<5},ru=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,Z0(n))>-1?ie(o(Jt,Ot&e,i)):ie(d(X0,a,e,t))}),K0=P(Nn,211/255,215/255,207/255,1),nu=function(e){var r=e.a;return r},Q0=$(function(e,r){return o(br,K0,o(ru,o(An,nu(r),e),r))}),ep=S(function(e,r,n){e:for(;;){var a=o(yo,Ee,e),t=a.a,i=a.b;if(O(Bt(t),Ee)<0)return o(Qc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Zc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ka=function(e){return e.b?d(ep,e,z,0):qc},rp=function(e){var r=8,n=function(a){return d(Hl,a/r,o(Ze,"saturation",e),o(Ze,"lightning",e))};return Ka(o(ne,n,o(Ur,0,r)))},np=$(function(e,r){var n=function(a){return o(q0,e,o(Q0,a,rp(e)))};return Ma(o(go,n,r.c1.fr))}),ap=function(e){return e},tp=function(e){return Lr(.01*e)},Gi=function(e){return e},op=function(e){return e},ip=function(e){return{$:0,a:e}},cp=ip,lp={$:3},up=lp,vp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),$p=vp,fp=$(function(e,r){return r.b?d(_r,B,r,e):e}),Ie=function(e){return d(_r,fp,z,e)},Oo=$(function(e,r){return Ie(o(ne,e,r))}),sp=function(e){return{$:1,a:e}},mp=sp,dp=function(e){return o(Dr,"height",Fe(e))},pp=function(e){return z$(A$(e))},bp=pp,gp=function(e){return{$:2,a:e}},hp=gp,_p=function(e){return o(Er,"",e)},yp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ke(l*1e3)/1e3},c=function(l){return Ke(l*1e4)/100};return _p(b(["rgba(",oe(c(r)),"%,",oe(c(n)),"%,",oe(c(a)),"%,",oe(i(t)),")"]))},Sp=$(function(e,r){switch(r.$){case 0:return o(qf,e,r);case 1:return o(Xf,e,r);case 2:return o(Zf,e,r);case 3:return o(Kf,e,r);case 4:return o(Qf,e,r);default:return o(es,e,r)}}),xp=$(function(e,r){switch(r.$){case 0:return o(wf,e,r);case 1:return o(Lf,e,r);case 2:return o(Pf,e,r);case 3:return o(zf,e,r);case 4:return o(Tf,e,r);case 5:return o(Mf,e,r);case 6:return o(kf,e,r);case 7:return o(Df,e,r);default:return Af(e)}}),Cp=S(function(e,r,n){return d(Jf,e,r,n)}),Hi=function(e){var r=e;return r},sn=sf,mt=P(sn,1,1,1,1),Qe=S(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),wp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Lp=$(function(e,r){var n=e,a=r.fY,t=r.f0;return d(wp,n*a/t,n,n*(1-a-t)/t)}),Pp=function(e){var r=e.a,n=e.b,a=e.c;return d(Un,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Jo=$(function(e,r){return Pp(o(Lp,e,r))}),au=$(function(e,r){return{dp:Pr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),nr=hf,zp=function(e){return nr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},dt=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=P(sn,a.bW,a.bW,a.bW,i);return Se(t,e,c,zp(a),a.dp,r,n)}),tu=Oe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(au,c,a),p=l,f=i;e=u,r=v,n=s,a=m,t=p,i=f;continue e;case 1:var h=t.b,g=o(B,w(dt,e,r,n,a,h),i.M);return{M:g,U:i.U,fF:i.fF};case 3:var y=t.b,x=o(B,w(dt,e,r,n,a,y),i.U);return{M:i.M,U:x,fF:i.fF};case 2:var _=t.a,L=o(B,w(dt,e,r,n,a,_),i.fF);return{M:i.M,U:i.U,fF:L};default:var k=t.a;return d(En,P(tu,e,r,n,a),i,k)}}),Tp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=Tp,qo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Mp=function(e){var r=e.Z,n=e.W,a=e.V;return P(qo,518,r,n,a)},kp=$(function(e,r){return{$:6,a:e,b:r}}),Dp=kp,iu=b([Mp({V:1,W:0,Z:!1}),P(ou,!1,!1,!1,!1),o(Dp,0,1)]),un=519,Xo=8,cu=15,tn=7681,Ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=Cf,Bp=$(function(e,r){return{$:0,a:e,b:r}}),Fp=Bp({df:1,$7:0,dV:5}),Be=tf,Vp=Fp(b([{fv:o(Be,-1,-1)},{fv:o(Be,1,-1)},{fv:o(Be,-1,1)},{fv:o(Be,1,1)}])),Rp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fv"},uniforms:{}},Ep=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Zo=S(function(e,r,n){var a=e.cM,t=e.cn,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,d(Ep,a,t,i)))}),Ko=function(e){return d(Zo,{cn:e.cn,cM:e.cM,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Qo=function(e){return w(ae,b([Ko(e),P(ou,!1,!1,!1,!1)]),Rp,Ap,Vp,{})},jp=Qo({a8:tn,cn:0,cM:Xo,bl:un,c2:cu,bt:tn,bu:tn}),Wp=516,Ii=5386,Ce=7680,Np=function(e){return o(Yn,2,e+4)},lu=function(e){return Qo({a8:Ce,cn:cu,cM:Xo,bl:Wp,c2:Np(e),bt:Ii,bu:Ii})},Yp=S(function(e,r,n){return Ie(b([d(Qe,e,n,iu),b([lu(r),jp])]))}),Gp=$(function(e,r){return Ie(o(go,Yp(e),r))}),Hp=function(e){var r=e.Z,n=e.W,a=e.V;return P(qo,513,r,n,a)},Ip=Hp({V:1,W:0,Z:!0}),Up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Op=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,p=u.c,f=v.a,h=v.b,g=v.c;return Up(s)(m)(p)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},Jp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ui=$(function(e,r){var n=e,a=r;return d(Jp,32774,n,a)}),qp=1,Oi=771,Xp=770,ei=Op({bv:0,aH:o(Ui,qp,Oi),by:0,bA:o(Ui,Xp,Oi),bF:0,bU:0}),Xr=b([Ip,ei]),Zp=function(e){var r=e;return r.dO},Kp=function(e){var r=e;return r.dP},uu=function(e){var r=e;return r.dQ},Qp=function(e){var r=e;return r.dR},e1=function(e){var r=e;return r.dS},vu=function(e){var r=e;return r.dT},$u=function(e){return C(o(dr,Qp(e),Zp(e)),o(dr,e1(e),Kp(e)),o(dr,vu(e),uu(e)))},Ji=function(e){var r=e;return qr(r)},r1=function(e){return e},n1=function(e){return gr({cz:r1({fY:e.H,f0:e.I,c5:e.J}),c3:mr({fY:e.q,f0:e.r,c5:e.s}),c4:mr({fY:e.t,f0:e.u,c5:e.v}),c6:mr({fY:e.w,f0:e.x,c5:e.y})})},pt=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fY:a.fY*v.fY+a.f0*v.f0+a.c5*v.c5,f0:a.fY*l.fY+a.f0*l.f0+a.c5*l.c5,c5:a.fY*i.fY+a.f0*i.f0+a.c5*i.c5}}),fu=$(function(e,r){var n=e,a=r,t=n.cz,i=t,c=a.fY-i.fY,l=a.f0-i.f0,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,p=m,f=n.c3,h=f;return{fY:c*h.fY+l*h.f0+u*h.c5,f0:c*p.fY+l*p.f0+u*p.c5,c5:c*s.fY+l*s.f0+u*s.c5}}),su=$(function(e,r){return{cz:o(fu,e,qr(r)),c3:o(pt,e,Ar(r)),c4:o(pt,e,Br(r)),c6:o(pt,e,Fr(r))}}),ka=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(or,n,a)}),sa=$(function(e,r){return O(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(sa,n,a)}),a1=$(function(e,r){var n=ka(r),a=ka(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),Ue=function(e){var r=e;return r},t1=function(e){var r=e;return C(r.fY,r.f0,r.c5)},Ln=$(function(e,r){var n=e,a=r;return a+n}),o1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=$a(de(a)),c=$a(de(n)),l=$a(de(t)),u=t1(r),v=u.a,s=u.b,m=u.c;return{dO:o(Ln,c,v),dP:o(Ln,i,s),dQ:o(Ln,l,m),dR:o(dr,c,v),dS:o(dr,i,s),dT:o(dr,l,m)}}),qi=R(function(e,r,n,a){var t=n.ey,i=2*n.eV*r,c=2*n.eU*r,l=2*n.eT*r,u=t.c5*r,v=t.f0*r,s=t.fY*r,m=Ue(Fr(e)),p=K(l*m.fY)+K(c*m.f0)+K(i*m.c5),f=Ue(Br(e)),h=K(l*f.fY)+K(c*f.f0)+K(i*f.c5),g=Ue(Ar(e)),y=K(l*g.fY)+K(c*g.f0)+K(i*g.c5),x=o(o1,C(y,h,p),o(fu,e,d(Bn,s,v,u)));if(a.$)return ie(x);var _=a.a;return ie(o(a1,_,x))}),qt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 1:var c=t.a,l=P(qi,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 2:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 3:var c=t.a,l=P(qi,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 4:var u=t.a,f=e,h=r,g=P(qt,e,r,n,u),y=i;e=f,r=h,n=g,a=y;continue e;default:var v=t.a,s=t.b,m=o(su,n1(v),e),p=r*v.bW,f=e,h=r,g=P(qt,m,p,n,b([s])),y=i;e=f,r=h,n=g,a=y;continue e}}else return n}),mn=lf,dn=uf,pn=vf,mu=function(e){return{$:4,a:e}},i1=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Jn=function(e){return mu(o(i1,e,z))},c1={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},l1=function(e){var r=e;return r},Xi=Qo({a8:tn,cn:0,cM:Xo,bl:un,c2:255,bt:tn,bu:tn}),an=Dv,fr=0,u1=function(e){var r=e,n=o(or,K(r.fY),o(or,K(r.f0),K(r.c5)));if(n){var a=r.c5/n,t=r.f0/n,i=r.fY/n,c=an(i*i+t*t+a*a);return c*n}else return fr},ze={by:0,ex:!1,bF:0,cI:0,bU:0,cY:0,fY:0,f0:0,c5:0},Ne=$(function(e,r){var n=e,a=r;return nr({dx:n.fY,dy:n.bU,dz:a.fY,dA:a.bU,dB:n.f0,dC:n.bF,dD:a.f0,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cY,dK:n.cI,dL:a.cY,dM:a.cI})}),yn=T({bd:o(Ne,ze,ze),bK:o(Ne,ze,ze),bL:o(Ne,ze,ze),bM:o(Ne,ze,ze)},P(sn,0,0,0,0)),du=514,pu=function(e){var r=e.Z,n=e.W,a=e.V;return P(qo,515,r,n,a)},bu=240,v1=b([pu({V:1,W:0,Z:!0}),Ko({a8:Ce,cn:bu,cM:0,bl:du,c2:0,bt:Ce,bu:Ce}),ei]),$1=$(function(e,r){var n=e,a=r.fj,t=r.eQ,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cK;if(s.$){var p=s.a;return Vt(v)?nr({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):nr({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return Vt(v)?nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):nr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),ea=$(function(e,r){return(1&e>>r)===1?0:1}),f1=function(e){return b([pu({V:1,W:0,Z:!0}),Ko({a8:Ce,cn:bu,cM:e,bl:du,c2:0,bt:Ce,bu:Ce}),ei])},s1=S(function(e,r,n){return Ie(o(ne,function(a){var t=a<<4,i=P(sn,o(ea,a,0),o(ea,a,1),o(ea,a,2),o(ea,a,3));return d(Qe,e,T(r,i),f1(t))},o(Ur,1,o(Yn,2,n)-1)))}),on=function(e){var r=e;return r},m1=_f,Zi=function(e){var r=e;return pr(Fr(r))},d1={cz:Ge,c3:Ga,c4:Io,c6:Ha},Qa=function(e){var r=e;return r},p1=function(e){var r=Qa(qr(e)),n=Ue(Fr(e)),a=Ue(Br(e)),t=Ue(Ar(e));return nr({dx:t.fY,dy:a.fY,dz:n.fY,dA:r.fY,dB:t.f0,dC:a.f0,dD:n.f0,dE:r.f0,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},b1=$(function(e,r){var n=r;return p1(o(su,n,e))}),g1=function(e){return o(b1,d1,e)},h1=function(e){var r=e;return r.c0},_1=function(e){var r=e;return Ar(r)},y1=S(function(e,r,n){var a=e,t=r,i=n;return{fY:a,f0:t,c5:i}}),S1=function(e){var r=e;return Br(r)},x1=function(e){var r=h1(e.ev),n=gr({cz:Ji(r),c3:_1(r),c4:S1(r),c6:pr(Zi(r))}),a=Jn(e.aP),t=a,i=P(qt,n,1,q,b([t]));if(i.$===1)return z;var c=i.a,l=g1(r),u=o(ee,.99,o(ue,de(e.aJ),It(uu(c)))),v=$u(c),s=v.a,m=v.b,p=v.c,f=u1(d(y1,s,m,p)),h=o(ee,1.01,o(Ln,f,It(vu(c)))),g=o($1,e.ev,{eq:e.eq,eQ:h,fj:u}),y=m1(g).dM,x=y?Ue(pr(Zi(r))):on(Ji(r)),_=function(){var ce=e.bY;switch(ce.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var pe=ce.a;return T(3,pe);case 4:var pe=ce.a;return T(4,pe);default:return T(5,0)}}(),L=_.a,k=_.b,N=e.bD,j=N,E=o(Jo,j,e.b_),W=E,Y=nr({dx:0,dy:x.fY,dz:mn(W),dA:e.ec,dB:0,dC:x.f0,dD:dn(W),dE:l1(f),dF:0,dG:x.c5,dH:pn(W),dI:L,dJ:0,dK:y,dL:0,dM:k}),F=Se(tu,Y,l,g,c1,t,{M:z,U:z,fF:z}),J=e.bJ;switch(J.$){case 0:var Q=J.a;return Ie(b([d(Qe,F.M,T(Q,mt),Xr),d(Qe,F.U,yn,Xr)]));case 1:var Q=J.a;return Ie(b([d(Qe,F.M,yn,Xr),b([Xi]),d(Qe,F.fF,Q.bd,iu),b([lu(0)]),d(Qe,F.M,T(Q,mt),v1),d(Qe,F.U,yn,Xr)]));default:var le=J.a,fe=J.b;return Ie(b([d(Qe,F.M,T(fe,mt),Xr),b([Xi]),o(Gp,F.fF,le),d(s1,F.M,fe,Ir(le)),d(Qe,F.U,yn,Xr)]))}},C1=function(e){return o(Dr,"width",Fe(e))},w1=$(function(e,r){var n=b([mp(1),hp(0),cp(!0),P($p,0,0,0,0)]),a=function(){var L=e.b$;switch(L.$){case 0:return C(n,"0",1);case 1:return C(o(B,up,n),"1",1);default:var k=L.a;return C(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Hi(v),m=o(X,"height",Fe(s)+"px"),p=Hi(u),f=p/s,h=o(Oo,function(L){return x1({eq:f,ev:e.ev,aJ:e.aJ,aP:L.aP,bD:L.bD,bJ:L.bJ,ec:c,bY:L.bY,b_:L.b_})},r),g=o(X,"width",Fe(p)+"px"),y=e.aI,x=y,_=yp(x);return d(bp,"div",b([o(X,"padding","0px"),g,m]),b([T(i,d(Cp,t,b([C1(Ke(p*c)),dp(Ke(s*c)),g,m,o(X,"display","block"),o(X,"background-color",_)]),h))]))}),L1=function(e){return o(w1,{b$:e.b$,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bY:e.bY,b_:e.b_}]))},gu=function(e){return e},Ki=gu({fY:.31271,f0:.32902}),P1=$(function(e,r){var n=e,a=Ue(r.eI),t=a.fY,i=a.f0,c=a.c5,l=o(Jo,r.cc,r.b5),u=l;return{by:pn(u),ex:n,bF:dn(u),cI:0,bU:mn(u),cY:1,fY:-t,f0:-i,c5:-c}}),z1=function(e){return e},T1=function(e){return z1(1.2*o(Yn,2,e))},bt=function(e){return e},M1={$:0},k1=M1,hu=function(e){return e},D1=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Qi=function(e){var r=e;return r},A1=function(e){e:for(;;){if(Pr(e.e3,fr)&&Pr(e.e4,fr))return ze;if(o(D1,de(e.e3),de(e.e4))){var r={b5:e.b5,e3:e.e4,e4:e.e3,ei:pr(e.ei)};e=r;continue e}else{var n=K(Qi(e.e4)/Ae),a=K(Qi(e.e3)/Ae),t=Ue(e.ei),i=t.fY,c=t.f0,l=t.c5,u=o(Jo,hu(1),e.b5),v=u;return{by:a*pn(v),ex:!1,bF:a*dn(v),cI:n/a,bU:a*mn(v),cY:3,fY:i,f0:c,c5:l}}}},ec=function(e){return A1({b5:e.b5,e3:e.cc,e4:fr,ei:e.ei})},B1=function(e){var r=e;return r},_u=function(e){var r=d(Ul,1667,25e3,B1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return gu({fY:n,f0:a})},yu=function(e){return e},F1=_u(yu(12e3)),V1=_u(yu(5600)),R1=function(e){return{$:2,a:e}},E1=function(e){return R1(e)},j1=$(function(e,r){return{$:2,a:e,b:r}}),Su=function(e){return{$:0,a:e}},ra=function(e){var r=e;return r},W1=function(e){var r=e;return r.ex},N1=Su(yn.a),Y1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return d(_r,n,T(z,z),r)}),G1=function(e){var r=e;return nr({dx:r.fY,dy:r.bU,dz:0,dA:0,dB:r.f0,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cY,dK:r.cI,dL:0,dM:0})},H1=re(function(e,r,n,a,t,i,c,l){var u=o(Y1,W1,b([ra(e),ra(r),ra(n),ra(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,f=m.b,h=f.a,g=f.b,y=g.a,x=g.b,_=x.a;return o(j1,o(ne,G1,v),{bd:o(Ne,p,h),bK:o(Ne,y,_),bL:o(Ne,t,i),bM:o(Ne,c,l)})}else return N1}else return Su({bd:o(Ne,e,r),bK:o(Ne,n,a),bL:o(Ne,t,i),bM:o(Ne,c,l)})}),I1=S(function(e,r,n){return Va(H1,e,r,n,ze,ze,ze,ze,ze)}),U1=function(e){var r=o(P1,op(e.fF),{b5:V1,eI:e.fN,cc:bt(8e4)}),n=ec({b5:F1,cc:bt(2e4),ei:e.ei}),a=ec({b5:Ki,cc:bt(15e3),ei:pr(e.ei)}),t=d(I1,r,n,a);return L1({b$:E1(e.b9),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:T1(15),bJ:t,bY:k1,b_:Ki})},xu=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),O1=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Cu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),wu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),J1=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),q1=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),X1=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ri=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return P(X1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return P(xu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return P(O1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return P(Cu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return P(q1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return P(wu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return P(J1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ni={$:0},Z1=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ka(c(u)),m=o(me,s.dR,e),p=o(ue,s.dO,r),f=o(me,s.dS,n),h=o(ue,s.dP,a),g=o(me,s.dT,t),y=o(ue,s.dQ,i),x=c,_=v;e=m,r=p,n=f,a=h,t=g,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),K1=S(function(e,r,n){var a=ka(e(r));return Va(Z1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),gt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),Lu=function(e){return o(gt,e.dO,e.dR)&&o(gt,e.dP,e.dS)&&o(gt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Fn=function(e){var r=e;return r},Pu=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=Yr(n),c=Gr(n),l=Hr(n),u=Yr(a),v=Gr(a),s=Hr(a),m=Yr(t),p=Gr(t),f=Hr(t);return Lu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,p)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,p)),dT:o(me,l,o(me,s,f))})},zu=$f,Te=function(e){return zu(Qa(e))},Tu=function(e){var r=e;return r},et=function(e){return zu(Tu(e))},Q1=$(function(e,r){var n=e,a=r;return{fY:a.f0*n.c5-a.c5*n.f0,f0:a.c5*n.fY-a.fY*n.c5,c5:a.fY*n.f0-a.f0*n.fY}}),Xt=$(function(e,r){var n=e,a=r;return{fY:a.fY-n.fY,f0:a.f0-n.f0,c5:a.c5-n.c5}}),e3={fY:0,f0:0,c5:0},r3=$(function(e,r){var n=e,a=r,t=o(or,K(a.fY),o(or,K(a.f0),K(a.c5)));if(t){var i=a.c5/t,c=a.f0/t,l=a.fY/t,u=an(l*l+c*c+i*i);return{fY:n*l/u,f0:n*c/u,c5:n*i/u}}else return e3}),n3=r3(hu(1)),Mu=S(function(e,r,n){var a=o(Xt,r,n),t=o(Xt,e,r);return n3(o(Q1,a,t))}),a3=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=et(d(Mu,n,a,t));return C({o:i,fv:Te(n)},{o:i,fv:Te(a)},{o:i,fv:Te(t)})},t3=$(function(e,r){return{$:2,a:e,b:r}}),ku=t3({df:3,$7:0,dV:4}),o3=function(e){if(e.b){var r=e.a,n=e.b,a=ku(o(ne,a3,e)),t=d(K1,Pu,r,n);return P(xu,t,e,a,0)}else return ni},We=S(function(e,r,n){return C(e,r,n)}),Du=function(){var e=Lr(1),r=Lr(1),n=Lr(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=d(be,i,t,a),l=o(ee,.5,e),u=d(be,i,t,l),v=o(ee,.5,r),s=d(be,i,v,a),m=d(be,i,v,l),p=o(ee,.5,n),f=d(be,p,t,a),h=d(be,p,v,a),g=d(be,p,t,l),y=d(be,p,v,l);return ri(o3(b([d(We,c,h,f),d(We,c,s,h),d(We,u,g,y),d(We,u,y,m),d(We,f,h,y),d(We,f,y,g),d(We,c,m,s),d(We,c,u,m),d(We,c,f,g),d(We,c,g,u),d(We,s,y,h),d(We,s,m,y)])))}(),na={$:0},i3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),c3=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=et(d(Mu,u,l,c)),s={o:v,fv:Te(u)},m={o:v,fv:Te(l)},p={o:v,fv:Te(c)};return o(B,s,o(B,m,o(B,p,n)))}),ai=function(e){var r=e;return r.D},l3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ie(d(e,t,i,c))}),ti=function(e){var r=e;return r.ah},ht=$(function(e,r){return o(ru,e,ti(r))}),u3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(l3,S(function(c,l,u){return C(c,l,u)}),o(ht,a,e),o(ht,t,e),o(ht,i,e))};return o(ko,r,ai(e))},v3=S(function(e,r,n){return e(r(n))}),$3=$(function(e,r){return!o($l,o(v3,Rs,e),r)}),f3=$(function(e,r){return d(_r,$(function(n,a){return e(n)?o(B,n,a):a}),z,r)}),Au=$(function(e,r){var n=nu(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o($3,a,r)?{D:r,ah:e}:{D:o(f3,a,r),ah:e}}),s3=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),qn=s3({df:1,$7:3,dV:4}),ma=$(function(e,r){var n=on(r),a=on(e);return T(C(a.fY,a.f0,a.c5),C(n.fY,n.f0,n.c5))}),rc=d(Un,0,0,0),_t=Oe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Po,o(ma,e,r),t);if(v.$){var m={o:rc,fv:Te(r)},p={o:rc,fv:Te(e)},f=u+1,h=u;return C(o(B,C(n,h,f),o(B,C(n,f,a),c)),o(B,m,o(B,p,l)),u+2)}else{var s=v.a;return C(o(B,C(n,s,a),c),l,u)}}),m3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),p=e(c),f=a+2,h=a+1,g=a,y=e,x=r,_=v,L=a+3,k=Se(_t,s,p,f,g,r,Se(_t,m,s,h,f,r,Se(_t,p,m,g,h,r,t)));e=y,r=x,n=_,a=L,t=k;continue e}else{var N=t,j=N.a,E=N.b;return T(j,Re(E))}}),d3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),p=e(c),f=n+2,h=n+1,g=n,y=d(Cn,o(ma,p,s),f,d(Cn,o(ma,s,m),h,d(Cn,o(ma,m,p),g,t))),x=o(B,C(g,h,f),a),_=e,L=v,k=n+3,N=x,j=y;e=_,r=L,n=k,a=N,t=j;continue e}else return C(a,t,n)}),Rr=S(function(e,r,n){var a=u3(n),t=d(_r,c3(r),z,a),i=w(d3,r,a,0,z,Bl),c=i.a,l=i.b,u=i.c,v=w(m3,r,l,a,0,C(c,z,u)),s=v.a,m=v.b,p=Ht(m)?t:ve(t,m);return d(i3,e,o(Au,Ka(p),s),o(qn,p,s))}),Zt=function(e){return{D:o(ne,function(r){return C(3*r,3*r+1,3*r+2)},o(Ur,0,Ir(e)-1)),ah:Ka(Ie(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Bu=function(e){switch(e.$){case 0:return na;case 1:var a=e.a,r=e.b,n=o(ne,Fn,r);return d(Rr,a,Wr,Zt(n));case 2:var a=e.a,r=e.b,n=o(ne,Fn,r);return d(Rr,a,Wr,Zt(n));case 3:var a=e.a,t=e.b;return d(Rr,a,Wr,t);case 4:var a=e.a,t=e.b;return d(Rr,a,function(i){return i.fv},t);case 5:var a=e.a,t=e.b;return d(Rr,a,function(i){return i.fv},t);case 6:var a=e.a,t=e.b;return d(Rr,a,function(i){return i.fv},t);case 7:var a=e.a,t=e.b;return d(Rr,a,function(i){return i.fv},t);case 8:return na;case 9:return na;default:return na}},nc=Bu(Du),Fu={$:0},M=Fu,ge=$(function(e,r){return{$:1,a:e,b:r}}),p3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},b3=1029,g3=function(e){return{$:5,a:e}},Vu=function(e){var r=e;return g3(r)},h3=Vu(b3),_3=1028,y3=Vu(_3),Me=S(function(e,r,n){return r===1?e?o(B,h3,n):o(B,y3,n):n}),Ru={src:`
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
    `,attributes:{position:"fv",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},yt=R(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){return w(ae,d(Me,l,a,m),Ru,p3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),oi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Eu={src:`
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
    `,attributes:{position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vr=R(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){return w(ae,d(Me,l,a,m),Eu,oi,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),ju=$(function(e,r){return{$:3,a:e,b:r}}),S3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Wu={src:`
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
    `,attributes:{position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},x3=R(function(e,r,n,a){return o(ju,n,re(function(t,i,c,l,u,v,s,m){return w(ae,m,Wu,S3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ii={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Xn=function(e){var r=e;return r},rt=ff,$r=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,m,p){return w(ae,d(Me,u,t,p),Eu,ii,a,{aN:o(rt,Xn(r),e),b:l,c,d:s,e:i,f:v})}))}),C3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},w3=he(function(e,r,n,a,t){return o(ju,a,re(function(i,c,l,u,v,s,m,p){return w(ae,p,Wu,C3,t,{aN:o(rt,Xn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Nu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"co",sceneProperties:"e",viewMatrix:"f"}},Yu={src:`
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
    `,attributes:{normal:"o",position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},aa=R(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){var p=s.a,f=s.b;return w(ae,d(Me,l,a,m),Yu,Nu,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,co:e,b:c,c:i,d:v,e:t,f:u})}))}),Gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cp",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Hu={src:`
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
    `,attributes:{normal:"o",position:"fv",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},L3=Oe(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,m,p,f){var h=p.a,g=p.b;return w(ae,d(Me,v,i,f),Hu,Gu,t,{P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cp:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),Iu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b6",constantMetallic:"b7",constantRoughness:"b8",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"ct",normalMapTexture:"aW",roughnessTexture:"cQ",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},P3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,re(function(m,p,f,h,g,y,x,_){var L=x.a,k=x.b;return w(ae,d(Me,h,s,_),Hu,Iu,v,{b3:e,b6:r,b7:i,b8:a,P:k,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,ct:t,b:f,c:p,aW:c,d:y,cQ:n,e:m,a$:l,f:g})}))}}}}}}}}}}},Uu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cs",roughness:"cP",sceneProperties:"e",viewMatrix:"f"}},ta=Oe(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,m,p,f){var h=p.a,g=p.b;return w(ae,d(Me,v,i,f),Yu,Uu,t,{b2:e,P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cs:n,b:u,c:l,d:m,cP:r,e:c,f:s})}))}),z3=function(e){return{$:0,a:e}},ac=$(function(e,r){return{$:1,a:e,b:r}}),Pn=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),T3=function(e){return P(sn,mn(e),dn(e),pn(e),1)},ci=P(sn,0,0,0,0),da=$(function(e,r){if(r.$){var a=r.a.C;return T(a,ci)}else{var n=r.a;return T(e,T3(n))}}),Ou=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(ac,T(t,ci),o(Pn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ac,o(da,t,e),o(Pn,t,r))}else{var a=n.a.a;return n.b.a,z3(a)}}),M3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),oa=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),k3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),D3=function(e){return o(Be,e,1)},Kt=o(Be,0,0),Zr=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Kt)}else{var n=r.a;return T(e,D3(n))}}),Ju=R(function(e,r,n,a){var t=P(k3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return P(oa,T(u,ci),o(Zr,u,r),o(Zr,u,n),o(Pn,u,a))}else if(t.b.$){var u=t.b.a.C;return P(oa,o(da,u,e),T(u,Kt),o(Zr,u,n),o(Pn,u,a))}else if(t.c.$){var u=t.c.a.C;return P(oa,o(da,u,e),o(Zr,u,r),T(u,Kt),o(Pn,u,a))}else if(t.d.$){var u=t.d.a.C;return P(oa,o(da,u,e),o(Zr,u,r),o(Zr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,d(M3,i,c,l)}}),A3={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bB",sceneProperties:"e"}},St=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,m,p){return w(ae,d(Me,u,t,p),Ru,A3,a,{b0:Xn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),qu={src:`
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
    `,attributes:{normal:"o",position:"fv",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},B3=R(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,m){var p=s.a,f=s.b;return w(ae,d(Me,l,a,m),qu,Gu,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,cp:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),F3=ro(function(e,r,n,a,t,i,c,l,u){return o(ge,c,re(function(v,s,m,p,f,h,g,y){var x=g.a,_=g.b;return w(ae,d(Me,p,u,y),qu,Iu,l,{b3:e,b6:r,b7:i,b8:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,ct:t,b:m,c:s,aW:e,d:h,cQ:n,e:v,a$:0,f})}))}),Vn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),V3=function(e){var r=e;return d(Vn,r.dR,r.dO,.5)},R3=function(e){var r=e;return d(Vn,r.dS,r.dP,.5)},E3=function(e){var r=e;return d(Vn,r.dT,r.dQ,.5)},j3=function(e){return d(be,V3(e),R3(e),E3(e))},G=function(e){var r=$u(e),n=r.a,a=r.b,t=r.c;return{ey:Qa(j3(e)),eT:n/2,eU:a/2,eV:t/2}},li=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return P(yt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(yt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(yt,l,G(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P(vr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return P(vr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return P(vr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return P(x3,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return w(St,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(St,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(St,l,v,G(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w($r,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return w($r,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return w($r,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(w3,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,j=e.c,m=o(Ou,s,j);if(m.$){var h=m.a,g=h.a;h.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return P(B3,g,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Se(L3,g,x,_,G(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var p=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return P(aa,p,G(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return P(aa,p,G(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return P(aa,p,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return P(aa,p,G(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var L=e.b,k=e.c,N=e.d,j=e.e,E=P(Ju,L,k,N,j);if(E.$){var J=E.a,Q=J.a,le=J.b,fe=E.b,ce=fe.a,pe=fe.b,ke=E.c,we=ke.a,Sr=ke.b,xr=E.d,x=xr.a,_=xr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return uv(F3,Q,le,ce,pe,we,Sr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return P3(Q)(le)(ce)(pe)(we)(Sr)(x)(_)(G(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var W=E.a,Y=E.b,F=E.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return Se(ta,W,Y,F,G(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return Se(ta,W,Y,F,G(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Se(ta,W,Y,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Se(ta,W,Y,F,G(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),xt=function(e){var r=e;return r.fY},Ct=function(e){var r=e;return r.f0},wt=function(e){var r=e;return r.c5},W3=function(e){var r=e,n=wt(r.c6),a=Ct(r.c6),t=xt(r.c6),i=wt(r.c4),c=Ct(r.c4),l=xt(r.c4),u=wt(r.c3),v=Ct(r.c3),s=xt(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},N3=function(e){var r=Qa(qr(e)),n=Ue(Fr(e)),a=Ue(Br(e)),t=Ue(Ar(e));return{dp:W3(e),q:t.fY,r:t.f0,s:t.c5,t:a.fY,u:a.f0,v:a.c5,w:n.fY,x:n.f0,y:n.c5,H:r.fY,I:r.f0,J:r.c5,bW:1}},Kr=$(function(e,r){return{$:5,a:e,b:r}}),Xu=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(au,a,e);return o(Kr,i,t);case 1:return o(Kr,e,n);case 3:return o(Kr,e,n);case 2:return o(Kr,e,n);default:return o(Kr,e,n)}}),Zu=$(function(e,r){return o(Xu,N3(e),r)}),nt=function(e){return{$:2,a:e}},Y3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fY:n*i.fY,f0:a*i.f0,c5:t*i.c5},eT:n*r.eT,eU:a*r.eU,eV:t*r.eV}}),G3=df,H3=mf,tc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,p=e.c,f=H3(a),h=f.fY,g=f.f0,y=f.c5,x=f.em,_=G3({em:x,fY:h*s,f0:g*m,c5:y*p});return Va(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Qt=$(function(e,r){switch(r.$){case 0:return Fu;case 5:var n=r.a,a=r.b;return o(Kr,n,o(Qt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Y3,e,t),o(tc,e,i));case 3:return r;case 2:var i=r.a;return nt(o(tc,e,i));default:var c=r.a;return mu(o(ne,Qt(e),c))}}),ui=$(function(e,r){var n=r;return o(Qt,e,n)}),vi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ku=7683,Qu=7682,I3=d(Zo,{cn:0,cM:0,c2:15},{a8:Ce,bl:un,bt:Ce,bu:Ku},{a8:Ce,bl:un,bt:Ce,bu:Qu}),U3=d(Zo,{cn:0,cM:0,c2:15},{a8:Ce,bl:un,bt:Ce,bu:Qu},{a8:Ce,bl:un,bt:Ce,bu:Ku}),$i=$(function(e,r){return e?o(B,U3,r):o(B,I3,r)}),O3={src:`
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
    `,attributes:{normal:"o",position:"fv"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},J3=function(e){if(e.$){var r=e.c;return ie(re(function(n,a,t,i,c,l,u,v){return w(ae,o($i,i,v),O3,vi,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Da=function(e){var r=J3(e);if(r.$)return M;var n=r.a;return nt(n)},q3=R(function(e,r,n,a){var t=o(li,n,Du),i=function(){var s=T(e,r);return s.a?s.b?Jn(b([t,Da(nc)])):t:s.b?Da(nc):M}(),c=Oa(a),l=c.a,u=c.b,v=c.c;return o(Zu,Ua(a),o(ui,C(l,u,v),i))}),X3=$(function(e,r){return P(q3,!0,!0,e,r)}),ev=$(function(e,r){return{$:0,a:e,b:r}}),Z3=function(e){var r=Mo(e),n=r.cL,a=r.cb,t=r.b4;return d(Un,n,a,t)},K3=function(e){return o(ev,0,Ut(Z3(e)))},zn=function(e){var r=e;return Or(r)},Q3=$(function(e,r){var n=r;return n/e}),oc=function(e){var r=e;return{fY:Or(r),f0:ln(r)}},eb=$(function(e,r){var n=e.fv,a=e.o;return o(B,{o:et(a),fv:Te(n)},r)}),rb=Fa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=pn(l.fv),s=dn(l.fv),m=mn(l.fv),p=o(sa,e,m),f=o(or,r,m),h=o(sa,n,s),g=o(or,a,s),y=o(sa,t,v),x=o(or,i,v),_=u;e=p,r=f,n=h,a=g,t=y,i=x,c=_;continue e}else return Lu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),rv=$(function(e,r){var n=pn(e.fv),a=dn(e.fv),t=mn(e.fv);return no(rb,t,t,a,a,n,n,r)}),nb=function(e){var r=d(Yc,eb,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(qn,r,ai(e)),i=o(rv,n,a);return P(Cu,i,e,t,0)}else return ni},ic=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fY:a.fY*l.fY+a.f0*i.fY,f0:a.fY*l.f0+a.f0*i.f0,c5:a.fY*l.c5+a.f0*i.c5}}),Aa=function(e){var r=e;return ln(r)},Sn=function(e){var r=e;return r},eo=function(e){return ir(2*Ae*e)},cc=jl({cz:Ge,c3:Ga,c4:Io}),nv=function(){var e=72,r=o(Q3,e,eo(1)),n=Lr(1),a=Sn(Vo),t=Sn(Nl),i=Lr(1),c=o(ee,.5,i),l=d(be,fr,fr,c),u=o(ee,-.5,i),v=d(be,fr,fr,u),s=function(f){var h=o(ee,f,r),g=Sn(o(ic,cc,oc(h))),y=o(ee,zn(h),n),x=o(ee,Aa(h),n),_=d(be,y,x,c),L=d(be,y,x,u),k=o(An,e,f+1),N=o(ee,k,r),j=Sn(o(ic,cc,oc(N))),E=o(ee,zn(N),n),W=o(ee,Aa(N),n),Y=d(be,E,W,u),F=d(be,E,W,c);return b([C({o:t,fv:v},{o:t,fv:Y},{o:t,fv:L}),C({o:g,fv:L},{o:j,fv:Y},{o:j,fv:F}),C({o:g,fv:L},{o:j,fv:F},{o:g,fv:_}),C({o:a,fv:l},{o:a,fv:_},{o:a,fv:F})])},m=o(ne,s,o(Ur,0,e-1)),p=Zt(Ie(m));return ri(nb(p))}(),lc=Bu(nv),ab=function(e){var r=e,n=K(r.c5),a=K(r.f0),t=K(r.fY);if(O(t,a)<1)if(O(t,n)<1){var i=an(r.c5*r.c5+r.f0*r.f0);return{fY:0,f0:-r.c5/i,c5:r.f0/i}}else{var i=an(r.f0*r.f0+r.fY*r.fY);return{fY:-r.f0/i,f0:r.fY/i,c5:0}}else if(O(a,n)<1){var i=an(r.c5*r.c5+r.fY*r.fY);return{fY:r.c5/i,f0:0,c5:-r.fY/i}}else{var i=an(r.fY*r.fY+r.f0*r.f0);return{fY:-r.f0/i,f0:r.fY/i,c5:0}}},tb=function(e){var r=ab(e),n=r,a=n,t=e,i=t,c={fY:i.f0*a.c5-i.c5*a.f0,f0:i.c5*a.fY-i.fY*a.c5,c5:i.fY*a.f0-i.f0*a.fY};return T(r,c)},ob=function(e){var r=Fo(e),n=tb(r),a=n.a,t=n.b;return gr({cz:Zl(e),c3:a,c4:t,c6:r})},ib=R(function(e,r,n,a){var t=ob(Uo(a)),i=o(li,n,nv),c=function(){var m=T(e,r);return m.a?m.b?Jn(b([i,Da(lc)])):i:m.b?Da(lc):M}(),l=Ql(a),u=l,v=Kl(a),s=v;return o(Zu,t,o(ui,C(u,u,s),c))}),cb=$(function(e,r){return P(ib,!0,!0,e,r)}),uc={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},vc={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},xn=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=on(n),c=on(a),l=on(t);return nr({dx:i.fY,dy:c.fY,dz:l.fY,dA:0,dB:i.f0,dC:c.f0,dD:l.f0,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},ia=ku(b([C({cX:0},{cX:1},{cX:2})])),lb=$(function(e,r){var n=Pu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var t=e.b.a;return o(ge,a,re(function(_,L,k,N,j,E,W,Y){return w(ae,d(Me,N,0,Y),uc,oi,ia,{aw:t,b:k,c:L,d:E,e:_,bq:xn(r),f:j})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(ge,a,re(function(_,L,k,N,j,E,W,Y){return w(ae,d(Me,N,0,Y),uc,ii,ia,{aN:o(rt,Xn(c),i),b:k,c:L,d:E,e:_,bq:xn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Ou,l,f);if(u.$)return M;var v=u.a;return o(ge,a,re(function(_,L,k,N,j,E,W,Y){var F=W.a,J=W.b;return w(ae,d(Me,N,0,Y),vc,Nu,ia,{P:J,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,co:v,b:k,c:L,d:E,e:_,bq:xn(r),f:j})}));default:e.a;var s=e.b,m=e.c,p=e.d,f=e.e,h=P(Ju,s,m,p,f);if(h.$)return M;var g=h.a,y=h.b,x=h.c;return o(ge,a,re(function(_,L,k,N,j,E,W,Y){var F=W.a,J=W.b;return w(ae,d(Me,N,0,Y),vc,Uu,ia,{b2:g,P:J,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cs:x,b:k,c:L,d:E,cP:y,e:_,bq:xn(r),f:j})}))}}),ub=function(){var e=b([{a_:o(Be,0,1)},{a_:o(Be,1,1)},{a_:o(Be,2,1)},{a_:o(Be,0,-1)},{a_:o(Be,1,-1)},{a_:o(Be,2,-1)}]),r=b([C(0,1,2),C(3,5,4),C(3,4,1),C(3,1,0),C(4,5,2),C(4,2,1),C(5,3,0),C(5,0,2)]);return o(qn,e,r)}(),vb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},$c=function(e){return nt(re(function(r,n,a,t,i,c,l,u){return w(ae,o($i,t,u),vb,vi,ub,{b:a,c:n,d:c,e:r,bX:l,bq:xn(e),f:i})}))},$b=R(function(e,r,n,a){var t=o(lb,n,a),i=T(e,r);return i.a?i.b?Jn(b([t,$c(a)])):t:i.b?$c(a):M}),fb=$(function(e,r){return P($b,!0,!0,e,r)}),sb=$(function(e,r){var n=Hr(r),a=Hr(e),t=Gr(r),i=Gr(e),c=Yr(r),l=Yr(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),mb=function(e){var r=No(e),n=r.a,a=r.b;return o(sb,n,a)},fc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},db=$(function(e,r){return{$:1,a:e,b:r}}),pb=db({df:2,$7:0,dV:1}),sc=pb(b([T({dw:0},{dw:1})])),bb=$(function(e,r){var n=mb(r),a=G(n),t=No(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var l=e.b.a;return o(ge,a,re(function(v,s,m,p,f,h,g,y){return w(ae,y,fc,oi,sc,{aw:l,du:Te(c),dv:Te(i),b:m,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return o(ge,a,re(function(s,m,p,f,h,g,y,x){return w(ae,x,fc,ii,sc,{aN:o(rt,Xn(u),l),du:Te(c),dv:Te(i),b:p,c:m,d:g,e:s,f:h})}));case 2:return M;default:return M}}),gb=$(function(e,r){return o(bb,e,r)}),ca=function(e){return ir(Ae*(e/180))},mc=$(function(e,r){var n=e,a=r;return n/a}),hb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(Pr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),dc=$(function(e,r){return e<1?z:w(hb,0,e,e,r,z)}),_b=$(function(e,r){var n=e.fv,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:et(a),fv:Te(n),L:o(Be,c,l)},r)}),yb=function(e){var r=d(Yc,_b,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(qn,r,ai(e)),i=o(rv,n,a);return P(wu,i,e,t,0)}else return ni},av=$(function(e,r){var n=e,a=r,t=Or(a);return{fY:t*Or(n),f0:t*ln(n),c5:ln(a)}}),Sb=function(){var e=Lr(1),r=72,n=o(Ur,0,r-1),a=o(dc,r,o(Vn,fr,eo(1))),t=ho(r/2),i=o(Ur,0,t-1),c=o(dc,t,o(Vn,ca(90),ca(-90))),l=Ka(Ie(o(ne,function(s){return o(ne,function(m){return{o:Sn(o(av,s,m)),fv:d(be,o(ee,zn(m)*zn(s),e),o(ee,zn(m)*Aa(s),e),o(ee,Aa(m),e)),L:T(o(mc,s,eo(1)),o(mc,o(Ln,ca(90),m),ca(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=Ie(o(ne,function(s){return Ie(o(ne,function(m){var p=o(u,s+1,m),f=o(u,s,m),h=o(u,s+1,m+1),g=o(u,s,m+1);return b([C(g,h,p),C(g,p,f)])},i))},n));return ri(yb(o(Au,l,v)))}(),Ba=72,la=2*Ba,xb=$(function(e,r){e:for(;;){var n=la+1,a=o(An,la,2*e+3),t=o(An,la,2*e+2),i=2*e+1,c=2*e,l=la,u=o(B,C(l,c,t),o(B,C(c,a,t),o(B,C(c,i,a),o(B,C(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Cb=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),wb=$(function(e,r){e:for(;;){var n=d(Cb,0,2*Ae,e/Ba),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Lb=function(){var e=o(wb,Ba-1,b([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(xb,Ba-1,z);return o(qn,e,r)}(),Pb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},pc=function(e){return nt(re(function(r,n,a,t,i,c,l,u){return w(ae,o($i,!0,u),Pb,vi,Lb,{aw:d(Un,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},zb=function(e){var r=Tu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fY,I:r.f0,J:r.c5,bW:1}},Tb=$(function(e,r){return o(Xu,zb(e),r)}),Mb=R(function(e,r,n,a){var t=o(li,n,Sb),i=function(){var u=T(e,r);return u.a?u.b?Jn(b([t,pc()])):t:u.b?pc():M}(),c=qa(a),l=c;return o(Tb,o(Xt,Ge,Ja(a)),o(ui,C(l,l,l),i))}),kb=$(function(e,r){return P(Mb,!0,!0,e,r)}),Db=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ab=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Bb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ev,n,a);case 1:var n=e.a,a=e.b,r=e.c;return d(Db,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return d(Il,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return w(Ab,n,a,t,i,c)}},Fb=Bb,tv=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(X3,t,r)]);case 1:var t=e.a,n=e.b;return b([o(fb,t,n)]);case 3:var t=e.a,a=e.b;return b([o(kb,Fb(t),a)]);case 2:var t=e.a,i=e.b;return b([o(cb,t,i)]);case 4:var c=e.a,l=e.b;return b([o(gb,K3(c),l)]);default:var u=e.a;return o(Oo,tv,u)}},Vb=function(e){return o(Oo,tv,e)},Rb=$(function(e,r){return U1({aI:ap(e.es),ev:e.ev,aJ:tp(.5),b9:e.b9,aK:T(Gi(Ke(e.cR.fW)),Gi(Ke(e.cR.eX))),aP:Vb(r),fF:!0,fN:o(av,ir(e.fM),ir(e.fO)),ei:Ha})}),Eb=$(function(e,r){return o(Rb,{es:P(zl,0,0,0,0),ev:f0(e),b9:e.b9,cR:e.cR,fM:o(Ze,"sunlight azimuth",e),fO:o(Ze,"sunlight elevation",e)},b([o(np,e,r),W0(e)]))}),jb=$(function(e,r){return o(I,z,b([o(I,b([o(X,"position","absolute"),o(X,"width","100%")]),b([o(Id,e,r)])),o(Eb,e,r)]))}),Wb=P(Fd,jb,Gd,Yd,Rd);const Nb={Main:{init:Wb(o(A,function(e){return De({e2:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return De({db:c,b9:i,eK:t,e8:a,fu:n,cR:r,fV:e})},o(D,"clock",se))},o(D,"devicePixelRatio",se))},o(D,"dt",se))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return o(A,function(s){return o(A,function(m){return De({eo:m,eB:s,de:v,eJ:u,e9:l,fw:c,fA:i,fG:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",Ca(Dn)))},o(D,"left",Z))},o(D,"pressedKeys",Ca(Dn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function(v){return De({de:v,e5:u,fe:l,fB:c,fC:i,eh:t,fY:a,f0:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",se))},o(D,"y",se))))},o(D,"screen",o(A,function(r){return o(A,function(n){return De({eX:n,fW:r})},o(D,"height",se))},o(D,"width",se))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return De({eF:r,eG:e})},o(D,"deltaX",se))},o(D,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Yb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(p)}},Gb=()=>{Lt("pointerdown"),Lt("wheel"),Lt("keydown")},Lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Hb=Nb.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Gb();Yb(Hb);
