const $v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};$v();function Br(e,r,n){return n.a=e,n.f=r,n}function $(e){return Br(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Br(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return Br(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Br(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ze(e){return Br(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ga(e){return Br(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return Br(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function mo(e){return Br(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function po(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ia(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function fv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var sv=[];function dv(e){return e.length}var mv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),pv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),bv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var gv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+hv()),r});function hv(e){return"<internals>"}function hn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ar(e,r){for(var n,a=[],t=jt(e,r,0,a);t&&(n=a.pop());t=jt(n.a,n.b,0,a));return t}function jt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&hn(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Fi(e),r=Fi(r));for(var t in e)if(!jt(e[t],r[t],n+1,a))return!1;return!0}$(Ar);$(function(e,r){return!Ar(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var _v=$(function(e,r){var n=O(e,r);return n<0?nl:n?cs:rl}),Wn=0;function k(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function ir(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=sr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=sr(e.a,r);return n}var z={$:0};function sr(e,r){return{$:1,a:e,b:r}}var wv=$(sr);function b(e){for(var r=z,n=e.length;n--;)r=sr(e[n],r);return r}function Oa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var yv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});U(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});Ze(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Oa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return b(Oa(r).sort(function(n,a){var t=o(e,n,a);return t===rl?0:t===nl?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var xv=$(Math.pow);$(function(e,r){return r%e});var Sv=$(function(e,r){var n=r%e;return e===0?hn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Cv=Math.PI,Lv=Math.cos,zv=Math.sin,kv=Math.tan,Pv=Math.acos,Mv=Math.atan;$(Math.atan2);function Tv(e){return e}function Dv(e){return e===1/0||e===-1/0}var Av=Math.ceil,Bv=Math.floor,Fv=Math.round,Vv=Math.sqrt,wi=Math.log,Uv=isNaN;function Ev(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Yv=$(function(e,r){return e+r});function jv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ne(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function Rv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Nv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Wv=$(function(e,r){return r.split(e)}),Gv=$(function(e,r){return r.join(e)}),Iv=y(function(e,r,n){return n.slice(e,r)});function Ov(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Jv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),qv=$(function(e,r){return r.indexOf(e)>-1}),Zv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Kv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Pc(e){return e+""}function Xv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ne(n==45?-r:r)}function Qv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ne(r):q}function e$(e){return Oa(e).join("")}function r$(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function n$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function a$(e){return{$:0,a:e}}function bo(e){return{$:2,b:e}}var t$=bo(function(e){return typeof e=="boolean"?ve(e):or("a BOOL",e)}),o$=bo(function(e){return typeof e=="number"?ve(e):or("a FLOAT",e)}),i$=bo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):or("a STRING",e)});function c$(e){return{$:3,b:e}}var l$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Fr(e,r){return{$:9,f:e,g:r}}var u$=$(function(e,r){return{$:10,b:r,h:e}}),v$=$(function(e,r){return Fr(e,[r])}),$$=y(function(e,r,n){return Fr(e,[r,n])});U(function(e,r,n,a){return Fr(e,[r,n,a])});he(function(e,r,n,a,t){return Fr(e,[r,n,a,t])});Ze(function(e,r,n,a,t,i){return Fr(e,[r,n,a,t,i])});Ga(function(e,r,n,a,t,i,c){return Fr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Fr(e,[r,n,a,t,i,c,l])});mo(function(e,r,n,a,t,i,c,l,u){return Fr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ie(e,n)}catch(a){return xe(o(Po,"This is not valid JSON! "+a.message,r))}});var Mc=$(function(e,r){return Ie(e,r)});function Ie(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):or("null",r);case 3:return ta(r)?yi(e.b,r,b):or("a LIST",r);case 4:return ta(r)?yi(e.b,r,f$):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var v=Ie(e.b,r[n]);return Qe(v)?v:xe(o(Vi,n,v.a));case 7:var a=e.e;if(!ta(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ie(e.b,r[a]);return Qe(v)?v:xe(o(al,a,v.a));case 8:if(typeof r!="object"||r===null||ta(r))return or("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=Ie(e.b,r[i]);if(!Qe(v))return xe(o(Vi,i,v.a));t=sr(k(i,v.a),t)}return ve(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ie(l[u],r);if(!Qe(v))return v;c=c(v.a)}return ve(c);case 10:var v=Ie(e.b,r);return Qe(v)?Ie(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=Ie(d.a,r);if(Qe(v))return v;s=sr(v.a,s)}return xe(ls(Re(s)));case 1:return xe(o(Po,e.a,r));case 0:return ve(e.a)}}function yi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ie(e,r[i]);if(!Qe(c))return xe(o(al,i,c.a));t[i]=c.a}return ve(n(t))}function ta(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function f$(e){return o(Cs,e.length,function(r){return e[r]})}function or(e,r){return xe(o(Po,"Expecting "+e,r))}function ln(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ln(e.b,r.b);case 6:return e.d===r.d&&ln(e.b,r.b);case 7:return e.e===r.e&&ln(e.b,r.b);case 9:return e.f===r.f&&xi(e.g,r.g);case 10:return e.h===r.h&&ln(e.b,r.b);case 11:return xi(e.g,r.g)}}function xi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!ln(e[a],r[a]))return!1;return!0}var s$=$(function(e,r){return JSON.stringify(r,null,e)+""});function Tc(e){return e}y(function(e,r,n){return n[e]=r,n});function Kr(e){return{$:0,a:e}}function d$(e){return{$:1,a:e}}function Lr(e){return{$:2,b:e,c:null}}var Rt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function m$(e){return{$:5,b:e}}var p$=0;function go(e){var r={$:0,e:p$++,f:e,g:null,h:[]};return ho(r),r}function Dc(e){return Lr(function(r){r(Kr(go(e)))})}function Ac(e,r){e.h.push(r),ho(e)}var b$=$(function(e,r){return Lr(function(n){Ac(e,r),n(Kr(Wn))})}),ht=!1,Si=[];function ho(e){if(Si.push(e),!ht){for(ht=!0;e=Si.shift();)g$(e);ht=!1}}function g$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ho(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return _o(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function _o(e,r,n,a,t,i){var c=o(Mc,e,r?r.flags:void 0);Qe(c)||hn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=h$(l,m);function m(f,h){var g=o(a,f,v);s(v=g.a,h),Li(l,g.b,t(v))}return Li(l,u.b,t(v)),d?{ports:d}:{}}var ur={};function h$(e,r){var n;for(var a in ur){var t=ur[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=w$(t,r)}return n}function _$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function w$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Rt,l,m$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=go(o(Rt,l,e.b))}var y$=$(function(e,r){return Lr(function(n){e.g(r),n(Kr(Wn))})});$(function(e,r){return o(b$,e.h,{$:0,a:r})});function Bc(e){return function(r){return{$:1,k:e,l:r}}}function x$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ci=[],_t=!1;function Li(e,r,n){if(Ci.push({p:e,q:r,r:n}),!_t){_t=!0;for(var a;a=Ci.shift();)S$(a.p,a.q,a.r);_t=!1}}function S$(e,r,n){var a={};Sa(!0,r,a,null),Sa(!1,n,a,null);for(var t in e)Ac(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function Sa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=C$(e,t,a,r.l);n[t]=L$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Sa(e,c.a,n,a);return;case 3:Sa(e,r.o,n,{s:r.n,t:a});return}}function C$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ur[r].e:ur[r].f;return o(i,t,a)}function L$(e,r,n){return n=n||{i:z,j:z},e?n.i=sr(r,n.i):n.j=sr(r,n.j),n}function z$(e){ur[e]&&hn(3)}$(function(e,r){return r});function k$(e,r){return z$(e),ur[e]={f:P$,u:r,a:M$},Bc(e)}var P$=$(function(e,r){return function(n){return e(r(n))}});function M$(e,r){var n=z,a=ur[e].u,t=Kr(null);ur[e].b=t,ur[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(Mc,a,c);Qe(l)||hn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Ca,_r=typeof document!="undefined"?document:{};function wo(e,r){e.appendChild(r)}U(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Mr(e,function(){}),t),{}});function Nt(e){return{$:0,a:e}}var Fc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:yo(n),e:t,f:e,b:i}})}),Xr=Fc(void 0),T$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:yo(n),e:t,f:e,b:i}})}),D$=T$(void 0);function A$(e,r,n,a){return{$:3,d:yo(e),g:r,h:n,i:a}}var B$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Vr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Vr([e,r],function(){return e(r)})});y(function(e,r,n){return Vr([e,r,n],function(){return o(e,r,n)})});U(function(e,r,n,a){return Vr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Vr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ze(function(e,r,n,a,t,i){return Vr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ga(function(e,r,n,a,t,i,c){return Vr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return Vr([e,r,n,a,t,i,c,l],function(){return po(e,r,n,a,t,i,c,l)})});mo(function(e,r,n,a,t,i,c,l,u){return Vr([e,r,n,a,t,i,c,l,u],function(){return Ia(e,r,n,a,t,i,c,l,u)})});var Vc=$(function(e,r){return{$:"a0",n:e,o:r}}),F$=$(function(e,r){return{$:"a1",n:e,o:r}}),Uc=$(function(e,r){return{$:"a2",n:e,o:r}}),Ur=$(function(e,r){return{$:"a3",n:e,o:r}}),V$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function U$(e){return e=="script"?"p":e}function E$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Vc,r.n,Y$(e,r.o)):r});function Y$(e,r){var n=Bo(r);return{$:r.$,a:n?p(Ls,n<3?j$:R$,Ee(e),r.a):o(Pa,e,r.a)}}var j$=$(function(e,r){return k(e(r.a),r.b)}),R$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function yo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?zi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?zi(c,t,i):c[t]=i}return r}function zi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Mr(e,r){var n=e.$;if(n===5)return Mr(e.k||(e.k=e.m()),r);if(n===0)return _r.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Mr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ht(c,r,e.d),c}var c=e.f?_r.createElementNS(e.f,e.c):_r.createElement(e.c);Ca&&e.c=="a"&&c.addEventListener("click",Ca(c)),Ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)wo(c,Mr(n===1?l[u]:l[u].b,r));return c}function Ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?N$(e,t):a==="a0"?G$(e,r,t):a==="a3"?H$(e,t):a==="a4"?W$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function N$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function H$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function W$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function G$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=I$(r,i),e.addEventListener(t,c,xo&&{passive:Bo(i)<2}),a[t]=c}}var xo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xo=!0}}))}catch{}function I$(e,r){function n(a){var t=n.q,i=Ie(t.a,a);if(!!Qe(i)){for(var c=Bo(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function O$(e,r){return e.$==r.$&&ln(e.a,r.a)}function Ec(e,r){var n=[];return er(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function er(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=rf(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];er(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!J$(d,m):d!==m)&&_e(n,2,a,m),er(h,g,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ki(e,r,n,a,q$);return;case 2:ki(e,r,n,a,Z$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=So(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function J$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ki(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=So(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function So(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=So(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&O$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function q$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];er(s,i[v],n,++a),a+=s.b||0}}function Z$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var h=l[d],g=u[m],w=h.a,x=g.a,_=h.b,C=g.b,M=void 0,R=void 0;if(w===x){f++,er(_,C,t,f),f+=_.b||0,d++,m++;continue}var Y=l[d+1],E=u[m+1];if(Y){var j=Y.a,N=Y.b;R=x===j}if(E){var F=E.a,Z=E.b;M=w===F}if(M&&R){f++,er(_,Z,t,f),Sn(i,t,w,C,m,c),f+=_.b||0,f++,Cn(i,t,w,N,f),f+=N.b||0,d+=2,m+=2;continue}if(M){f++,Sn(i,t,x,C,m,c),er(_,Z,t,f),f+=_.b||0,d+=1,m+=2;continue}if(R){f++,Cn(i,t,w,_,f),f+=_.b||0,f++,er(N,C,t,f),f+=N.b||0,d+=2,m+=1;continue}if(Y&&j===F){f++,Cn(i,t,w,_,f),Sn(i,t,x,C,m,c),f+=_.b||0,f++,er(N,Z,t,f),f+=N.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;Cn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],g=u[m];Sn(i,t,g.a,g.b,void 0,X),m++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var Yc="_elmW6BL";function Sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];er(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Sn(e,r,n+Yc,a,t,i)}function Cn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];er(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}Cn(e,r,n+Yc,a,t)}function jc(e,r,n,a){Ln(e,r,n,0,0,r.b,a)}function Ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)jc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Ln(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return Ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=Ln(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Rc(e,r,n,a){return n.length===0?e:(jc(e,r,n,a),La(e,n))}function La(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=K$(t,a);t===e&&(e=i)}return e}function K$(e,r){switch(r.$){case 0:return X$(e,r.s,r.u);case 4:return Ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return La(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=La(e,i.w),e;case 8:return Q$(e,r);case 5:return r.s(e);default:hn(10)}}function X$(e,r,n){var a=e.parentNode,t=Mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Q$(e,r){var n=r.s,a=ef(n.y,r);e=La(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Mr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&wo(e,a),e}function ef(e,r){if(!!e){for(var n=_r.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;wo(n,i.c===2?i.s:Mr(i.z,r.u))}return n}}function Co(e){if(e.nodeType===3)return Nt(e.textContent);if(e.nodeType!==1)return Nt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=sr(o(Ur,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=sr(Co(v[a]),u);return p(Xr,l,r,u)}function rf(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var nf=U(function(e,r,n,a){return _o(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=Co(l);return Nc(i,function(v){var s=c(v),d=Ec(u,s);l=Rc(l,u,d,t),u=s})})});U(function(e,r,n,a){return _o(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=_r.title,v=_r.body,s=Co(v);return Nc(i,function(d){Ca=c;var m=l(d),f=Xr("body")(z)(m.er),h=Ec(s,f);v=Rc(v,s,h,t),s=f,Ca=0,u!==m.fJ&&(_r.title=u=m.fJ)})})});var za=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Nc(e,r){r(e);var n=0;function a(){n=n===1?0:(za(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&za(a),n=2)}}$(function(e,r){return o(Uo,Fo,Lr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Uo,Fo,Lr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Uo,Fo,Lr(function(){history.replaceState({},"",r),e()}))});var af={addEventListener:function(){},removeEventListener:function(){}},tf=typeof window!="undefined"?window:af;y(function(e,r,n){return Dc(Lr(function(a){function t(i){go(n(i))}return e.addEventListener(r,t,xo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ie(e,r);return Qe(n)?ne(n.a):q});function Hc(e,r){return Lr(function(n){za(function(){var a=document.getElementById(e);n(a?Kr(r(a)):d$(ks(e)))})})}function of(e){return Lr(function(r){za(function(){r(Kr(e()))})})}$(function(e,r){return Hc(r,function(n){return n[e](),Wn})});$(function(e,r){return of(function(){return tf.scroll(e,r),Wn})});y(function(e,r,n){return Hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Wn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var cf=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var lf=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):q}a.push(L(Ul,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});U(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):q}return n(L(Ul,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Pi=0;function En(e,r){for(;r.b;r=r.b)e(r.a)}function Lo(e){for(var r=0;e.b;e=e.b)r++;return r}var uf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},vf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),$f=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),ff=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),df=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),pf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),bf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),gf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),hf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},_f=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},wf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},yf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Gc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},xf=function(e){e.gl.disable(e.gl.CULL_FACE)},Sf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Cf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Lf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Mi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],zf=[_f,wf,yf,Wc,Gc,xf,Sf,Cf,Lf];function Ti(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ic(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Pf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,w,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<h;_++)f[g++]=h===1?w[C][x]:w[C][x][_]})}var u=Ic(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Lo(n.b)*s);En(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Mf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=Tf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Lo(r.b),indexBuffer:null,buffers:{}}}function Tf(e,r){var n=new Uint32Array(Lo(e)*r),a=0,t;return En(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Di(e,r){return e+"#"+r}var Oc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Wc(n),Gc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Di(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Pi++,v||(v=Ti(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Pi++,s||(s=Ti(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=kf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Df(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=Di(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Af(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Mf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Pf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Ic(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(h+C),a.vertexAttribPointer(h+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,En(B0(n),i.a),u=0;u<Mi.length;u++){var M=n[Mi[u]];M.toggle!==n.toggle&&M.enabled&&(zf[u](n),M.enabled=!1,M.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dQ,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,g.numIndices)}}return En(t,e.g),r});function Df(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,w=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Af(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Bf=y(function(e,r,n){return A$(r,{g:n,f:{},h:e},Rf,Nf)}),Ff=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Vf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Uf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ef=$(function(e,r){e.contextAttributes.antialias=!0}),Yf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),jf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Rf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};En(function(t){return o(A0,r,t)},e.h);var n=_r.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),uf(function(){return o(Oc,e,n)})):(n=_r.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Nf(e,r){return r.f=e.f,Oc(r)}var Hf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var zo=new Float64Array(3),Ai=new Float64Array(3),Bi=new Float64Array(3),Gf=y(function(e,r,n){return new Float64Array([e,r,n])}),If=function(e){return e[0]},Of=function(e){return e[1]},Jf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var qf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Jc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Jc);function qc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ka(Jc(e,r,n),n)}$(qc);function Zc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ka(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Zc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Zf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),zn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(zn);function Wt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Wt);$(function(e,r){var n,a=zo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=zn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(zn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(zn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(zn(r,a)+e[14])/n,t});var Kf=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Xf=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},Qf=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/es(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function es(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var rs=new Float64Array(16),ns=new Float64Array(16),as=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},ts=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ze(Kc);U(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Kc(c,l,i,t,n,a)});function Xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ze(Xc);U(function(e,r,n,a){return Xc(e,r,n,a,-1,1)});function Qc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],w=e[13],x=e[14],_=e[15],C=r[0],M=r[1],R=r[2],Y=r[3],E=r[4],j=r[5],N=r[6],F=r[7],Z=r[8],X=r[9],ce=r[10],$e=r[11],oe=r[12],me=r[13],Fe=r[14],ke=r[15];return n[0]=a*C+l*M+d*R+g*Y,n[1]=t*C+u*M+m*R+w*Y,n[2]=i*C+v*M+f*R+x*Y,n[3]=c*C+s*M+h*R+_*Y,n[4]=a*E+l*j+d*N+g*F,n[5]=t*E+u*j+m*N+w*F,n[6]=i*E+v*j+f*N+x*F,n[7]=c*E+s*j+h*N+_*F,n[8]=a*Z+l*X+d*ce+g*$e,n[9]=t*Z+u*X+m*ce+w*$e,n[10]=i*Z+v*X+f*ce+x*$e,n[11]=c*Z+s*X+h*ce+_*$e,n[12]=a*oe+l*me+d*Fe+g*ke,n[13]=t*oe+u*me+m*Fe+w*ke,n[14]=i*oe+v*me+f*Fe+x*ke,n[15]=c*oe+s*me+h*Fe+_*ke,n}$(Qc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],w=r[1],x=r[2],_=r[4],C=r[5],M=r[6],R=r[8],Y=r[9],E=r[10],j=r[12],N=r[13],F=r[14];return n[0]=a*g+c*w+v*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*M,n[5]=t*_+l*C+s*M,n[6]=i*_+u*C+d*M,n[7]=0,n[8]=a*R+c*Y+v*E,n[9]=t*R+l*Y+s*E,n[10]=i*R+u*Y+d*E,n[11]=0,n[12]=a*j+c*N+v*F+m,n[13]=t*j+l*N+s*F+f,n[14]=i*j+u*N+d*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ka(r,zo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Zc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*v,g=i*l*v,w=c*l*v,x=i*i*v+u,_=h+f,C=g-m,M=h-f,R=c*c*v+u,Y=w+d,E=g+m,j=w-d,N=l*l*v+u,F=n[0],Z=n[1],X=n[2],ce=n[3],$e=n[4],oe=n[5],me=n[6],Fe=n[7],ke=n[8],kr=n[9],Pr=n[10],gt=n[11],cv=n[12],lv=n[13],uv=n[14],vv=n[15];return a[0]=F*x+$e*_+ke*C,a[1]=Z*x+oe*_+kr*C,a[2]=X*x+me*_+Pr*C,a[3]=ce*x+Fe*_+gt*C,a[4]=F*M+$e*R+ke*Y,a[5]=Z*M+oe*R+kr*Y,a[6]=X*M+me*R+Pr*Y,a[7]=ce*M+Fe*R+gt*Y,a[8]=F*E+$e*j+ke*N,a[9]=Z*E+oe*j+kr*N,a[10]=X*E+me*j+Pr*N,a[11]=ce*E+Fe*j+gt*N,a[12]=cv,a[13]=lv,a[14]=uv,a[15]=vv,a});function os(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(os);U(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function is(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(is);U(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=qc(e,r,zo),t=ka(Wt(n,a,Ai),Ai),i=ka(Wt(a,t,Bi),Bi),c=rs,l=ns;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Qc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=wv,oa=gv,el=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(oa,e,l,v)}else{var u=c.a;return p(oa,i,l,u)}});return p(oa,i,p(oa,e,r,t),a)}),ko=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ko,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Fi=function(e){return p(ko,y(function(r,n,a){return o(A,k(r,n),a)}),z,e)},rl=1,cs=2,nl=0,xe=function(e){return{$:1,a:e}},Po=$(function(e,r){return{$:3,a:e,b:r}}),Vi=$(function(e,r){return{$:0,a:e,b:r}}),al=$(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},ls=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},q={$:1},us=Jv,vs=s$,je=Pc,Nr=$(function(e,r){return o(Gv,e,Oa(r))}),Mo=$(function(e,r){return b(o(Wv,e,r))}),tl=function(e){return o(Nr,`
    `,o(Mo,`
`,e))},Gn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),qr=function(e){return p(Gn,$(function(r,n){return n+1}),0,e)},$s=yv,fs=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),xr=$(function(e,r){return p(fs,e,r,z)}),ol=$(function(e,r){return p($s,e,o(xr,0,qr(r)-1),r)}),vr=r$,il=function(e){var r=vr(e);return 97<=r&&r<=122},cl=function(e){var r=vr(e);return r<=90&&65<=r},ss=function(e){return il(e)||cl(e)},ds=function(e){var r=vr(e);return r<=57&&48<=r},ms=function(e){return il(e)||cl(e)||ds(e)},Re=function(e){return p(Gn,A,z,e)},_n=jv,ps=$(function(e,r){return`

(`+(je(e+1)+(") "+tl(bs(r))))}),bs=function(e){return o(gs,e,z)},gs=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=_n(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return ss(x)&&o(us,ms,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(je(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Nr,"",Re(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(je(qr(s))+" ways:"));return o(Nr,`

`,o(A,h,o(ol,ps,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Nr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Nr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return h+(tl(o(vs,4,f))+(`

`+m))}}),Ne=32,Gt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),It=sv,To=Av,Do=$(function(e,r){return wi(r)/wi(e)}),hs=Tv,Yn=To(o(Do,2,Ne)),ll=L(Gt,0,Yn,It,It),ul=mv,vl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var $l=Bv,Ot=dv,Be=$(function(e,r){return O(e,r)>0?e:r}),_s=function(e){return{$:0,a:e}},Ao=pv,ws=$(function(e,r){e:for(;;){var n=o(Ao,Ne,e),a=n.a,t=n.b,i=o(A,_s(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),ys=function(e){var r=e.a;return r},xs=$(function(e,r){e:for(;;){var n=To(r/Ne);if(n===1)return o(Ao,Ne,e).a;var a=o(ws,e,z),t=n;e=a,r=t;continue e}}),fl=$(function(e,r){if(r.l){var n=r.l*Ne,a=$l(o(Do,Ne,n-1)),t=e?Re(r.z):r.z,i=o(xs,t,r.l);return L(Gt,Ot(r.p)+n,o(Be,5,a*Yn),i,r.p)}else return L(Gt,Ot(r.p),Yn,It,r.p)}),Ss=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(fl,!1,{z:a,l:n/Ne|0,p:t});var i=vl(p(ul,Ne,r,e)),c=e,l=r-Ne,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Cs=$(function(e,r){if(e<=0)return ll;var n=e%Ne,a=p(ul,n,e-n,r),t=e-n-Ne;return S(Ss,r,t,e,z,a)}),Qe=function(e){return!e.$},D=u$,K=t$,T=l$,fe=o$,Pa=v$,Ls=$$,Ee=a$,Bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Xr("div"),zs=function(e){return{$:2,a:e}},sl=$(function(e,r){return e}),dl=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Wr=function(e){return e},ks=Wr,Ui=Ze(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Ps=qv,Hr=Rv,un=Iv,In=$(function(e,r){return e<1?r:p(un,e,Hr(r),r)}),Ja=Kv,qa=function(e){return e===""},Za=$(function(e,r){return e<1?"":p(un,0,e,r)}),ml=Xv,Ei=he(function(e,r,n,a,t){if(qa(t)||o(Ps,"@",t))return q;var i=o(Ja,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=ml(o(In,c+1,t));if(l.$===1)return q;var u=l;return ne(ye(Ui,e,o(Za,c,t),u,r,n,a))}else return ne(ye(Ui,e,t,q,r,n,a))}),Yi=U(function(e,r,n,a){if(qa(a))return q;var t=o(Ja,"/",a);if(t.b){var i=t.a;return S(Ei,e,o(In,i,a),r,n,o(Za,i,a))}else return S(Ei,e,"/",r,n,a)}),ji=y(function(e,r,n){if(qa(n))return q;var a=o(Ja,"?",n);if(a.b){var t=a.a;return L(Yi,e,ne(o(In,t+1,n)),r,o(Za,t,n))}else return L(Yi,e,q,r,n)});$(function(e,r){if(qa(r))return q;var n=o(Ja,"#",r);if(n.b){var a=n.a;return p(ji,e,ne(o(In,a+1,r)),o(Za,a,r))}else return p(ji,e,q,r)});var Ms=Zv,Fo=function(e){},On=Kr,Ts=On(0),pl=U(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Gn,e,r,Re(d)):L(pl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),zr=y(function(e,r,n){return L(pl,e,r,0,n)}),Q=$(function(e,r){return p(zr,$(function(n,a){return o(A,e(n),a)}),z,r)}),Ma=Rt,Vo=$(function(e,r){return o(Ma,function(n){return On(e(n))},r)}),Ds=y(function(e,r,n){return o(Ma,function(a){return o(Ma,function(t){return On(o(e,a,t))},n)},r)}),As=function(e){return p(zr,Ds(A),On(z),e)},Bs=y$,Fs=$(function(e,r){var n=r;return Dc(o(Ma,Bs(e),n))}),Vs=y(function(e,r,n){return o(Vo,function(a){return 0},As(o(Q,Fs(e),r)))}),Us=y(function(e,r,n){return On(0)}),Es=$(function(e,r){var n=r;return o(Vo,e,n)});ur.Task=_$(Ts,Vs,Us,Es);var Ys=Bc("Task"),Uo=$(function(e,r){return Ys(o(Vo,e,r))}),js=nf,Rs=Ev,Ta={$:1},bl=function(e){return{$:2,a:e}},Ka={$:0},Oe=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),wn=function(e){var r=e.b.B;return r.a},Ns=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return ne(o(Oe,r,{B:i,ac:c,U:o(A,a,n)}))}else return q},gl=function(e){var r=e.b;return o(Oe,Ka,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Hs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?gl(n):n;case 2:var i=a.a.cR;return(O(i+r.eH,wn(n).D)>0?o(te,Ns,dr(o(Oe,Ta,t))):Wr)(o(Oe,bl({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(dl,l.ey,ir(r,{D:l.D+r.eH})),s=o(e,v,u);return o(Oe,Ka,{B:k(v,s),ac:z,U:o(A,t.B,t.U)})}}),hl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Gs=$(function(e,r){return Re(p(Ws,e,r,z))}),_l=y(function(e,r,n){if(r<=0)return z;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,w=h.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,g,o(Gs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,g,p(_l,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),Is=$(function(e,r){return p(_l,0,e,r)}),Os=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=ue(Re(n),ue(b([a]),t)),c=o(Is,e,i),l=o(hl,e,i);if(l.b){var u=l.a,v=l.b;return o(Oe,Ta,{B:u,ac:v,U:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(Oe,Ta,{B:d,ac:z,U:m})}else return r}}),Js=function(e){var r=e.b;return o(Oe,Ta,r)},qs=function(e){var r=e.b;return o(Oe,bl({cR:wn(e).D}),r)},Zs=$(function(e,r){switch(e.$){case 1:return Js(r);case 2:return gl(r);case 3:return qs(r);default:var n=e.a;return o(Os,n,r)}}),wl=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Ks=$(function(e,r){return ir(r,{aw:e(r.aw)})}),Xs=function(e){return{$:3,a:e}},Qs=function(e){return{$:2,a:e}},yl=$(function(e,r){return{$:0,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return q;var n=r.a;return ne(e(n))}),J=function(e){return e<0?-e:e},Eo=Qv,ed=y(function(e,r,n){return o(dr,0/0,Eo(o(e,r,n)))}),Sl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),rd=Hv,Cl=function(e){return p(rd,A,z,e)},nd=$(function(e,r){var n=o(Sl,function(a){return a!=="0"&&a!=="."},Cl(r));return ue(e&&n?"-":"",r)}),be=Pc,Jt=Yv,Ll=n$,zl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=_n(n);if(a.$===1)return"01";var t=a.a;return o(Jt,"0",zl(t))}else{var i=vr(r);return i>=48&&i<57?o(Jt,Ll(i+1),n):"0"}},qt=Dv,ad=Uv,Xa=function(e){return o(Jt,e,"")},kl=y(function(e,r,n){return e<=0?n:p(kl,e>>1,ue(r,r),e&1?ue(n,r):n)}),jn=$(function(e,r){return p(kl,e,r,"")}),Zt=y(function(e,r,n){return ue(n,o(jn,e-Hr(n),Xa(r)))}),Kt=Nv,Pl=function(e){var r=o(Mo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},td=function(e){var r=o(Mo,"e",be(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,ml(o(Ms,"+",t)?o(In,1,t):t)),c=Pl(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?o(dr,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,wl(Xa),_n(ue(o(jn,J(i),"0"),v))))):p(Zt,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},od=y(function(e,r,n){if(qt(n)||ad(n))return be(n);var a=n<0,t=Pl(td(J(n))),i=t.a,c=t.b,l=Hr(i)+r,u=ue(o(jn,-l+1,"0"),p(Zt,l,"0",ue(i,c))),v=Hr(u),s=o(Be,1,l),d=o(e,a,p(un,s,v,u)),m=p(un,0,s,u),f=d?Kt(o(dr,"1",o(Ce,zl,_n(Kt(m))))):m,h=Hr(f),g=f==="0"?f:r<=0?ue(f,o(jn,J(r),"0")):O(r,Hr(c))<0?p(un,0,h-r,f)+("."+p(un,h-r,h,f)):ue(i+".",p(Zt,r,"0",c));return o(nd,a,g)}),Ml=od($(function(e,r){var n=_n(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(vr(t))})),id=ed(Ml),cd=y(function(e,r,n){var a=o(Do,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(id,t,n)}),Tl=_v,Qa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Tl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),mr={$:-2},mn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(W,0,r,n,S(W,1,v,s,d,m),S(W,1,i,c,l,u))}else return S(W,e,i,c,S(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,w=f.d,x=f.e,m=a.e;return S(W,0,v,s,S(W,1,h,g,w,x),S(W,1,r,n,m,t))}else return S(W,e,r,n,a,t)}),Xt=y(function(e,r,n){if(n.$===-2)return S(W,0,e,r,mr,mr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Tl,e,t);switch(u){case 0:return S(mn,a,t,i,p(Xt,e,r,c),l);case 1:return S(W,a,t,r,c,l);default:return S(mn,a,t,i,c,p(Xt,e,r,l))}}),Tn=y(function(e,r,n){var a=p(Xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(W,1,t,i,c,l)}else{var u=a;return u}}),ld=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Dl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,h=m.c,g=m.d,w=m.e,x=v.e;return S(W,0,f,h,S(W,1,n,a,S(W,0,i,c,l,u),g),S(W,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(W,1,n,a,S(W,0,i,c,l,u),S(W,0,s,d,m,x))}else return e},Ri=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,w=f.d,x=f.e;return S(W,0,i,c,S(W,1,u,v,s,d),S(W,1,n,a,m,S(W,0,h,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,M=e.e;M.a;var h=M.b,g=M.c,w=M.d,x=M.e;return S(W,1,n,a,S(W,0,i,c,C,m),S(W,0,h,g,w,x))}else return e},ud=Ga(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(W,n,l,u,v,S(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ri(r)}else break e;else return c.a,c.d,Ri(r);else break e;return r}}),pa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(W,r,n,a,pa(t),l);var u=Dl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(mn,v,s,d,pa(m),f)}else return mr}else return S(W,r,n,a,pa(t),l)}else return mr},Dn=$(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(W,n,a,t,o(Dn,e,i),c);var u=Dl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(mn,v,s,d,o(Dn,e,m),f)}else return mr}else return S(W,n,a,t,o(Dn,e,i),c);else return o(vd,e,po(ud,e,r,n,a,t,i,c))}),vd=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Ar(e,a)){var l=ld(c);if(l.$===-1){var u=l.b,v=l.c;return S(mn,n,u,v,i,pa(c))}else return mr}else return S(mn,n,a,t,i,o(Dn,e,c))}else return mr}),$d=$(function(e,r){var n=o(Dn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(W,1,a,t,i,c)}else{var l=n;return l}}),ia=y(function(e,r,n){var a=r(o(Qa,e,n));if(a.$)return o($d,e,n);var t=a.a;return p(Tn,e,t,n)}),fd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(ia,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(xl,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(ia,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(yl,k(i,c),p(cd,i,c,n))}));case 3:var r=e.a,n=e.b;return o(ia,r,Ce(function(a){return a.$===3?Xs(n):a}));default:var r=e.a,n=e.b;return o(ia,r,Ce(function(a){return a.$===2?Qs(n):a}))}},sd=function(e){return Ks(fd(e))},dd=$(function(e,r){return o(Q,sd(e),r)}),md=$(function(e,r){return ir(r,{ey:o(dd,e,r.ey)})}),pd=$(function(e,r){var n=r.a,a=r.b;return o(Oe,n,ir(a,{B:o(wl,md(e),a.B)}))}),bd=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),gd=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Oe,a,ir(t,{B:o(bd,o(e,i.a,r),i)}))}),hd=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ir(a,{aM:!a.aM});case 2:var t=n.a;return ir(a,{H:p(Hs,e,t,a.H)});case 3:var i=n.a;return ir(a,{H:o(pd,i,a.H)});case 4:var c=n.a;return ir(a,{H:p(gd,r,c,a.H)});default:var l=n.a;return ir(a,{H:o(Zs,l,a.H)})}}),_d=$(function(e,r){return o(Oe,Ka,{B:k(e,r(e)),ac:z,U:z})}),wd=x$,Ni=wd(z),Da=c$,Rn=i$,yd=k$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ee({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",Da(Rn)))},o(T,"left",K))},o(T,"pressedKeys",Da(Rn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ee({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({eV:n,fS:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({eC:r,eD:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe))))),xd=function(e){return{$:4,a:e}},Sd={$:0},Cd=Tc,Ke=$(function(e,r){return o(Uc,e,Cd(r))}),G=Ke("className"),Ld=function(e){var r=e.b.B;return r.b},Aa=Ke("id"),zd=B$,Ba=zd,kd=F$,de=kd,Pd={$:1},Md=function(e){return{$:3,a:e}},Td=function(e){return{$:5,a:e}},Hi=Xr("a"),Yo=Xr("button"),Wi=function(e){return o(Ke,"href",E$(e))},Dd=Ur("clip-rule"),Pe=Ur("d"),Ad=Ur("fill"),Al=Fc("http://www.w3.org/2000/svg"),Bd=Al("svg"),Fd=Ur("viewBox"),Vd=o(V$,"http://www.w3.org/XML/1998/namespace","xml:space"),We=Bd(b([Fd("0 0 24 24"),Ad("currentColor"),o(de,"width","100%"),o(de,"height","100%"),Vd("http://www.w3.org/2000/svg")])),Ud=Ur("fill-rule"),Me=Al("path"),$n={eB:We(b([o(Me,b([Pe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),eP:We(b([o(Me,b([Pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),eU:We(b([o(Me,b([Pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),fc:We(b([o(Me,b([Pe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(Me,b([Pe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fd:We(b([o(Me,b([Pe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(Me,b([Pe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),fn:We(b([o(Me,b([Pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),fo:We(b([o(Me,b([Pe("M7 5V19L18 12L7 5Z")]),z)])),fp:We(b([o(Me,b([Pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),fq:We(b([o(Me,b([Pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),fL:We(b([o(Me,b([Ud("evenodd"),Dd("evenodd"),Pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),fM:We(b([o(Me,b([Pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),f0:We(b([o(Me,b([Pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},Ed=function(e){return{$:0,a:e}},Bl=Vc,Fl=$(function(e,r){return o(Bl,e,Ed(r))}),jo=function(e){return o(Fl,"click",Ee(e))},Gi=Ke("target"),Yd=Ke("title"),Qt=$(function(e,r){if(r.$===-2)return mr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(W,n,a,o(e,a,t),o(Qt,e,i),o(Qt,e,c))}),jd=Nt,Sr=jd,Rd=function(e){return p(ko,y(function(r,n,a){return o(A,n,a)}),z,e)},Nd=$(function(e,r){return{$:3,a:e,b:r}}),Hd=$(function(e,r){return{$:2,a:e,b:r}}),Wd=$(function(e,r){return{$:0,a:e,b:r}}),Gd=$(function(e,r){return{$:1,a:e,b:r}}),Xe=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Id=L(Xe,0/255,0/255,0/255,1),Od=Tc,Jd=$(function(e,r){return o(Uc,e,Od(r))}),qd=Jd("checked"),nr=Fv,Zd=y(function(e,r,n){return ue(o(jn,e-Hr(n),Xa(r)),n)}),Fa=Sv,Vl=function(e){var r=function(n){return n<10?je(n):Xa(Ll(87+n))};return e<16?r(e):ue(Vl(e/16|0),r(o(Fa,16,e)))},Kd=o(te,Vl,o(Zd,2,"0")),Ro=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},Xd=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return o(Nr,"",o(A,"#",o(Q,o(te,nr,Kd),b([n*255,a*255,t*255]))))},eo=Ke("htmlFor"),ro=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Va=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Qd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),et=$(function(e,r){return p(zr,Qd(e),z,r)}),Ul=U(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),em=lf,rm=e$,nm=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ve(n)}),am=cf,tm=function(e){return o(am,{et:!1,fe:!1},e)},rt=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return q},om=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ve(e(n))}}),im=function(e){return{$:2,a:e}},cm=function(e){return{$:0,a:e}},lm=function(e){return{$:1,a:e}},wt=$(function(e,r){return vr(r)-vr(e)}),yt=y(function(e,r,n){var a=vr(n);return O(vr(e),a)<1&&O(a,vr(r))<1}),um=$(function(e,r){var n=function(t){return O(t,e)<0?ve(t):xe(lm(r))},a=p(yt,"0","9",r)?ve(o(wt,"0",r)):p(yt,"a","z",r)?ve(10+o(wt,"a",r)):p(yt,"A","Z",r)?ve(10+o(wt,"A",r)):xe(cm(r));return o(Va,n,a)}),El=$(function(e,r){var n=_n(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Va,function(c){return o(Va,function(l){return ve(c+l*e)},o(El,e,i))},o(um,e,t))}),vm=$(function(e,r){return 2<=e&&e<=36?o(El,e,Kt(r)):xe(im(e))}),$m=vm(16),fm=y(function(e,r,n){return L(Xe,e,r,n,1)}),sm=U(function(e,r,n,a){return L(Xe,e,r,n,a)}),Jn=xv,dm=$(function(e,r){var n=o(Jn,10,e);return nr(r*n)/n}),mm=Ov,pm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Cl(n);if(a.b&&!a.b.b){var t=a.a;return rm(b([t,t]))}else return n};return o(te,mm,o(te,function(n){return o(Ce,function(a){return p(em,1,a,n)},tm(e))},o(te,ro(rt),o(te,Ce(function(n){return n.fE}),o(te,Ce(et(Wr)),o(te,nm("Parsing hex regex failed"),Va(function(n){var a=o(Q,o(te,r,o(te,$m,om(hs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ve(L(sm,t/255,c/255,u/255,o(dm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(fm,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),Ua=Xr("input"),no=Xr("label"),ao=Ke("name"),Yl=$(function(e,r){return p(zr,T,r,e)}),bm=o(Yl,b(["target","checked"]),K),gm=function(e){return o(Fl,"change",o(Pa,e,bm))},hm=function(e){return k(e,!0)},_m=function(e){return{$:1,a:e}},wm=$(function(e,r){return o(Bl,e,_m(r))}),ym=o(Yl,b(["target","value"]),Rn),No=function(e){return o(wm,"input",o(Pa,hm,o(Pa,e,ym)))},jl=Ke("max"),Rl=Ke("min"),Nl=function(e){return o(Ke,"step",e)},Ea=Ke("type"),Ho=Ke("value"),Ii=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,z,b([o(no,b([eo(r)]),b([o(I,b([G("relative w-full")]),b([o(I,b([G("inline-block")]),b([Sr(r)])),o(I,b([G("inline-block float-right")]),b([Sr(be(n))]))]))])),o(Ua,b([Ea("range"),o(de,"width","100%"),Aa(r),ao(r),Rl(be(a)),jl(be(t)),Ho(be(n)),Nl(be(i)),No(o(te,Eo,o(te,dr(42),c)))]),z)]))},xm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Sm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,b([G("h-12 py-4")]),b([o(no,b([G("block"),eo(e)]),b([o(Ua,b([G("relative bottom-[1px] align-middle mr-2"),Ea("checkbox"),Aa(e),ao(e),gm(Nd(e)),qd(c)]),z),Sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ii({b9:e,cl:i,cp:t,ct:Wd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ii({b9:e,cl:i,cp:t,ct:o(te,nr,Gd(e)),cP:1,cW:c});default:var c=r.a;return o(I,z,b([o(I,b([o(de,"margin-bottom","6px")]),b([o(no,b([eo(e)]),b([Sr(e)]))])),o(Ua,b([Ea("color"),o(de,"width","100%"),o(de,"height","26px"),o(de,"padding","0px"),Aa(e),ao(e),No(function(l){return o(Hd,e,o(xm,Id,pm(l)))}),Ho(Xd(c))]),z)]))}}),Cm=function(e){return o(I,b([G("p-4 border-y-[0.5px] border-white20")]),b([o(I,b([G("text-lg pb-2")]),b([Sr(e.ff)])),o(I,b([G("pl-2 pr-2")]),Rd(o(Qt,Sm,e.aw)))]))},Lm=function(e){return o(I,b([G("text-xs text-white60")]),o(Q,Cm,e))},zm=function(e){return o(I,b([G("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Sr("clock: "+o(Ml,3,wn(e).D))]))},km=function(e){e.a;var r=e.b.U;return o(Ce,function(n){return nr(60/(wn(e).D-n))},o(Ce,o(te,ys,function(n){return n.D}),rt(o(hl,59,r))))},Pm=function(e){return o(I,b([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=km(e);if(r.$===1)return b([Sr("... Fps")]);var n=r.a;return b([Sr(je(n)+" Fps")])}())},Mm=function(e){return{$:0,a:e}},Tm=function(e){var r=e.b.U;return qr(r)},Dm=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return qr(r)+1+qr(n)},Am=function(e){return o(Ua,b([G("absolute w-full"),Ea("range"),Rl(je(0)),jl(je(Dm(e)-1)),Ho(je(Tm(e))),Nl(je(1)),No(o(te,Eo,o(te,dr(42),o(te,nr,Mm))))]),z)},Oi={$:1},Bm={$:3},Fm={$:2},Hl=function(e){return!e.b},Ji=$(function(e,r){return o(Yo,b([G("px-2 bg-black60 hover:bg-black80 active:bg-black"),G(r),jo(e)]),b([Sr("REC")]))}),qi=$(function(e,r){return o(Yo,b([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),jo(r)]),b([o(I,b([G("w-4 h-6 text-white60 hover:text-white80")]),b([e]))]))}),Vm=function(e){var r=e.a,n=e.b.ac;return o(I,b([G("py-1")]),b([function(){switch(r.$){case 0:return o(Ji,Oi,"text-red-500 font-bold");case 1:return o(Ji,Fm,"text-white60 hover:text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return Hl(n)?o(I,z,z):o(qi,$n.fo,Bm);default:return o(qi,$n.fn,Oi)}}()]))},Um=function(e){return o(I,b([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Am(e),Vm(e),Pm(e),zm(e)]))},Em=function(e){var r=e.a;return Ar(r,Ka)},Ym=$(function(e,r){var n=Em(r.H)?o(I,z,z):o(I,b([G("absolute pointer-events-none w-8 h-8"),o(de,"left",be(e.fq.fU+.5*e.cM.fS)+"px"),o(de,"top",be(-e.fq.fY+.5*e.cM.eV)+"px")]),b([o(I,b([G(e.fq.e1?"text-black80":"text-black40")]),b([$n.fq]))]));return o(I,z,b([n]))}),jm=$(function(e,r){var n=o(Yo,b([G(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),jo(Pd),Yd("Distraction Free Mode")]),b([$n.f0])),a=o(I,b([G("absolute w-8 bottom-12")]),b([o(Hi,b([G("text-twitterBlue40 hover:text-twitterBlue"),Wi("https://twitter.com/AzizErkalSelman"),Gi("_blank")]),b([$n.fM]))])),t=o(I,b([G("absolute w-8 bottom-2")]),b([o(Hi,b([G("text-githubCat40 hover:text-githubCat"),Wi("https://github.com/erkal/elm-3d-playground-exploration"),Gi("_blank")]),b([$n.eP]))]));return r.aM?o(I,b([G("fixed w-10 h-10 p-1")]),b([n])):o(I,z,b([o(I,b([G("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(I,b([G("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(de,"height",be(e.cM.eV-80)+"px")]),b([o(Ba,Md,Lm(wn(r.H).ey))])),o(I,b([G("absolute bottom-0 left-10 h-20"),o(de,"width",e.cM.fS>600?"600px":be(e.cM.fS-40)+"px")]),b([o(Ba,Td,Um(r.H))])),o(Ym,e,r)]))}),Rm=y(function(e,r,n){var a=Ld(n.H),t=wn(n.H);return o(I,b([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(de,"width",be(t.cM.fS)+"px"),o(de,"height",be(t.cM.eV)+"px")]),b([o(I,b([G("fixed")]),b([o(Ba,sl(Sd),o(e,t,a))])),o(I,b([Aa("gui")]),b([o(jm,t,n),o(Ba,xd,o(r,t,a))]))]))}),Nm=Ze(function(e,r,n,a,t,i){var c=$(function(u,v){return k(L(hd,r,i,u,v),Ni)}),l=function(u){var v=o(dl,n,u.e0);return k({aM:u.e0.cM.fS<500,H:o(_d,v,a)},Ni)};return js({e$:l,fF:sl(yd(zs)),fN:c,fP:o(Rm,e,t)})}),Hm=U(function(e,r,n,a){return ye(Nm,e,r,n,a,$(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),Wm=function(e){return{}},Gm=y(function(e,r,n){return{aw:n,e2:r,ff:e}}),Wl=mr,Im=function(e){return p(Gn,$(function(r,n){var a=r.a,t=r.b;return p(Tn,a,t,n)}),Wl,e)},Om=y(function(e,r,n){return p(Gm,e,r,Im(n))}),Zi=Om,xn=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(yl,k(a,t),n))}),Jm=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(xl,k(a,t),n))}),we=Cv,qm=b([p(Zi,"Parameters",!0,b([p(Jm,"number of tree blocks",k(1,20),16),p(xn,"turning speed of the tree",k(.1,4),1)])),p(Zi,"Lighting",!0,b([p(xn,"azimuth for third light",k(-we,we),1),p(xn,"elevation for third light",k(-we,we),-2),p(xn,"azimuth for fourth light",k(-we,we),1),p(xn,"elevation for fourth light",k(-we,we),-2)]))]),Zm=$(function(e,r){return r}),Km=Mv,hr=Vv,Xm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Be,J(c),o(Be,J(i),J(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return ne({fU:s/d,fY:v/d,c$:u/d})}else return q}),ba=function(e){return e},Wo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),ga=function(e){var r=e,n=o(Be,J(r.fU),o(Be,J(r.fY),J(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return ne({fU:i/c,fY:t/c,c$:a/c})}else return q},Ya=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),Qm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),Gl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),e0=$(function(e,r){var n=e,a=r;return O(a,n)<0}),r0=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),n0=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),a0=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},cr=0,Il={fU:0,fY:0,c$:0},t0=y(function(e,r,n){return o(ro,function(a){var t=o(r0,o(n0,a,r),r);return o(ro,function(i){var c=o(Wo,r,e),l=o(Qm,n,c),u=o(Gl,cr,l)?c:o(e0,cr,l)?a0(c):Il;return o(Ce,function(v){return B(a,i,v)},ga(u))},ga(t))},ga(e))}),o0=function(e){var r=e,n=J(r.c$),a=J(r.fY),t=J(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=hr(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(O(a,n)<1){var i=hr(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},Go=function(e){var r=o0(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return k(r,c)},vn=function(e){var r=e;return r},ar=function(e){return e},i0=$(function(e,r){var n=Go(e),a=n.a,t=n.b;return ar({cu:r,cZ:a,c_:t,c0:e})}),c0=function(e){var r=o(Ya,e.aS,e.dc),n=vn(e.ee),a=o(Wo,r,n),t=p(t0,r,n,a);if(t.$){var v=ga(r);if(v.$){var d=Go(e.ee),m=d.a,f=d.b;return ar({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(i0,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ar({cu:e.dc,cZ:u,c_:l,c0:c})}},Te={fU:0,fY:0,c$:0},l0=function(e){return{$:0,a:e}},ie=function(e){var r=e;return J(r)},ha=function(e){var r=e;return .5*r},u0=kv,v0=function(e){var r=e;return u0(r)},$0=function(e){var r=ha(ie(e.ef)),n=v0(r);return{cF:l0(n),cX:e.cX}},wr=function(e){return e},nt=wr({fU:0,fY:1,c$:0}),pr=function(e){return e},f0=function(e){var r=e.aS,n=e.dc,a=e.ee;return $0({ef:pr(2*Km(.5)),cX:c0({dc:ba(n),aS:ba(r),ee:o(dr,nt,o(Xm,Te,ba(a)))})})},s0=f0({dc:{fU:5,fY:5,c$:12},aS:{fU:0,fY:1,c$:0},ee:{fU:0,fY:1,c$:0}}),Io=function(e){return e},Ol=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),d0=function(e){var r=e;return r},m0=function(e){var r=p(Ol,1667,25e3,d0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Io({fU:n,fY:a})},p0=function(e){return e},b0=function(e){return{$:0,a:e}},g0=b0,h0={$:3},_0=h0,w0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),y0=w0,x0=$(function(e,r){return r.b?p(zr,A,r,e):e}),Je=function(e){return p(zr,x0,z,e)},Oo=$(function(e,r){return Je(o(Q,e,r))}),S0=function(e){return{$:1,a:e}},C0=S0,L0=function(e){return o(Ur,"height",je(e))},z0=function(e){return D$(U$(e))},k0=z0,P0=function(e){return{$:2,a:e}},M0=P0,T0=function(e){return o(Nr,"",e)},D0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return nr(l*1e3)/1e3},c=function(l){return nr(l*1e4)/100};return T0(b(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},A0=$(function(e,r){switch(r.$){case 0:return o(Ff,e,r);case 1:return o(Vf,e,r);case 2:return o(Uf,e,r);case 3:return o(Ef,e,r);case 4:return o(Yf,e,r);default:return o(jf,e,r)}}),B0=$(function(e,r){switch(r.$){case 0:return o($f,e,r);case 1:return o(ff,e,r);case 2:return o(sf,e,r);case 3:return o(df,e,r);case 4:return o(mf,e,r);case 5:return o(pf,e,r);case 6:return o(bf,e,r);case 7:return o(gf,e,r);default:return hf(e)}}),F0=y(function(e,r,n){return p(Bf,e,r,n)}),Ki=function(e){var r=e;return r},yn=Kf,xt=L(yn,1,1,1,1),tr=y(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),V0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(V0,n*a/t,n,n*(1-a-t)/t)}),qn=Gf,E0=function(e){var r=e.a,n=e.b,a=e.c;return p(qn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},at=$(function(e,r){return E0(o(U0,e,r))}),Jl=$(function(e,r){return{dk:Ar(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),lr=as,Y0=function(e){return lr({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},St=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=L(yn,a.bW,a.bW,a.bW,i);return ye(t,e,c,Y0(a),a.dk,r,n)}),ql=Ze(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Jl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(A,S(St,e,r,n,a,h),i.N);return{N:g,V:i.V,fz:i.fz};case 3:var w=t.b,x=o(A,S(St,e,r,n,a,w),i.V);return{N:i.N,V:x,fz:i.fz};case 2:var _=t.a,C=o(A,S(St,e,r,n,a,_),i.fz);return{N:i.N,V:i.V,fz:C};default:var M=t.a;return p(Gn,L(ql,e,r,n,a),i,M)}}),j0=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zl=j0,Jo=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),R0=function(e){var r=e._,n=e.X,a=e.W;return L(Jo,518,r,n,a)},N0=$(function(e,r){return{$:6,a:e,b:r}}),H0=N0,Kl=b([R0({W:1,X:0,_:!1}),L(Zl,!1,!1,!1,!1),o(H0,0,1)]),pn=519,qo=8,Xl=15,fn=7681,W0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=vf,G0=$(function(e,r){return{$:0,a:e,b:r}}),I0=G0({c8:1,dh:0,dQ:5}),Ye=Hf,O0=I0(b([{dY:o(Ye,-1,-1)},{dY:o(Ye,1,-1)},{dY:o(Ye,-1,1)},{dY:o(Ye,1,1)}])),J0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},q0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Zo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(q0,a,t,i)))}),Ko=function(e){return p(Zo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Xo=function(e){return S(ae,b([Ko(e),L(Zl,!1,!1,!1,!1)]),J0,W0,O0,{})},Z0=Xo({a9:fn,ci:0,cH:qo,bm:pn,cY:Xl,bu:fn,bv:fn}),K0=516,Xi=5386,Le=7680,X0=function(e){return o(Jn,2,e+4)},Ql=function(e){return Xo({a9:Le,ci:Xl,cH:qo,bm:K0,cY:X0(e),bu:Xi,bv:Xi})},Q0=y(function(e,r,n){return Je(b([p(tr,e,n,Kl),b([Ql(r),Z0])]))}),ep=$(function(e,r){return Je(o(ol,Q0(e),r))}),rp=function(e){var r=e._,n=e.X,a=e.W;return L(Jo,513,r,n,a)},np=rp({W:1,X:0,_:!0}),ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},tp=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,h=v.b,g=v.c;return ap(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},op=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qi=$(function(e,r){var n=e,a=r;return p(op,32774,n,a)}),ip=1,ec=771,cp=770,Qo=tp({bw:0,aI:o(Qi,ip,ec),bz:0,bB:o(Qi,cp,ec),bF:0,bU:0}),tn=b([np,Qo]),lp=function(e){var r=e;return r.dJ},up=function(e){var r=e;return r.dK},eu=function(e){var r=e;return r.dL},vp=function(e){var r=e;return r.dM},$p=function(e){var r=e;return r.dN},ru=function(e){var r=e;return r.dO},yr=$(function(e,r){var n=e,a=r;return a-n}),nu=function(e){return B(o(yr,vp(e),lp(e)),o(yr,$p(e),up(e)),o(yr,ru(e),eu(e)))},Qr=function(e){var r=e;return r.cu},rc=function(e){var r=e;return Qr(r)},fp=function(e){return e},sp=function(e){return ar({cu:fp({fU:e.I,fY:e.J,c$:e.K}),cZ:wr({fU:e.q,fY:e.r,c$:e.s}),c_:wr({fU:e.t,fY:e.u,c$:e.v}),c0:wr({fU:e.w,fY:e.x,c$:e.y})})},Ct=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),au=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,h=f;return{fU:c*h.fU+l*h.fY+u*h.c$,fY:c*m.fU+l*m.fY+u*m.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),Er=function(e){var r=e;return r.cZ},Yr=function(e){var r=e;return r.c_},jr=function(e){var r=e;return r.c0},tu=$(function(e,r){return{cu:o(au,e,Qr(r)),cZ:o(Ct,e,Er(r)),c_:o(Ct,e,Yr(r)),c0:o(Ct,e,jr(r))}}),Tr=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),ja=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(Be,n,a)}),An=$(function(e,r){return O(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(An,n,a)}),dp=$(function(e,r){var n=ja(r),a=ja(e);return{dJ:o(le,a.dJ,n.dJ),dK:o(le,a.dK,n.dK),dL:o(le,a.dL,n.dL),dM:o(se,a.dM,n.dM),dN:o(se,a.dN,n.dN),dO:o(se,a.dO,n.dO)}}),qe=function(e){var r=e;return r},mp=function(e){var r=e;return B(r.fU,r.fY,r.c$)},Bn=$(function(e,r){var n=e,a=r;return a+n}),pp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ha(ie(a)),c=ha(ie(n)),l=ha(ie(t)),u=mp(r),v=u.a,s=u.b,d=u.c;return{dJ:o(Bn,c,v),dK:o(Bn,i,s),dL:o(Bn,l,d),dM:o(yr,c,v),dN:o(yr,i,s),dO:o(yr,l,d)}}),nc=U(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,d=qe(jr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c$),f=qe(Yr(e)),h=J(l*f.fU)+J(c*f.fY)+J(i*f.c$),g=qe(Er(e)),w=J(l*g.fU)+J(c*g.fY)+J(i*g.c$),x=o(pp,B(w,h,m),o(au,e,p(Tr,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(dp,_,x))}),to=U(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 1:var c=t.a,l=L(nc,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 2:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 3:var c=t.a,l=L(nc,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 4:var u=t.a,f=e,h=r,g=L(to,e,r,n,u),w=i;e=f,r=h,n=g,a=w;continue e;default:var v=t.a,s=t.b,d=o(tu,sp(v),e),m=r*v.bW,f=e,h=r,g=L(to,d,m,n,b([s])),w=i;e=f,r=h,n=g,a=w;continue e}}else return n}),en=If,rn=Of,nn=Jf,ou=function(e){return{$:4,a:e}},bp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Zn=function(e){return ou(o(bp,e,z))},gp={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},hp=function(e){var r=e;return r},ac=Xo({a9:fn,ci:0,cH:qo,bm:pn,cY:255,bu:fn,bv:fn}),_p=function(e){var r=e,n=o(Be,J(r.fU),o(Be,J(r.fY),J(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return cr},Ue={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},Ge=$(function(e,r){var n=e,a=r;return lr({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),kn=k({be:o(Ge,Ue,Ue),bK:o(Ge,Ue,Ue),bL:o(Ge,Ue,Ue),bM:o(Ge,Ue,Ue)},L(yn,0,0,0,0)),ee=$(function(e,r){var n=r;return e*n}),tc=function(e){var r=e;return-r},iu=514,cu=function(e){var r=e._,n=e.X,a=e.W;return L(Jo,515,r,n,a)},lu=240,wp=b([cu({W:1,X:0,_:!0}),Ko({a9:Le,ci:lu,cH:0,bm:iu,cY:0,bu:Le,bv:Le}),Qo]),yp=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=ie(a),l=c,u=ie(t),v=u,s=n.cF;if(s.$){var m=s.a;return qt(v)?lr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):lr({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return qt(v)?lr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):lr({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),ca=$(function(e,r){return(1&e>>r)===1?0:1}),xp=function(e){return b([cu({W:1,X:0,_:!0}),Ko({a9:Le,ci:lu,cH:e,bm:iu,cY:0,bu:Le,bv:Le}),Qo])},Sp=y(function(e,r,n){return Je(o(Q,function(a){var t=a<<4,i=L(yn,o(ca,a,0),o(ca,a,1),o(ca,a,2),o(ca,a,3));return p(tr,e,k(r,i),xp(t))},o(xr,1,o(Jn,2,n)-1)))}),Dr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},sn=function(e){var r=e;return r},Cp=ts,oc=function(e){var r=e;return Dr(jr(r))},uu=wr({fU:1,fY:0,c$:0}),ei=uu,ri=nt,ni=wr({fU:0,fY:0,c$:1}),vu=ni,Lp={cu:Te,cZ:ei,c_:ri,c0:vu},Kn=function(e){var r=e;return r},zp=function(e){var r=Kn(Qr(e)),n=qe(jr(e)),a=qe(Yr(e)),t=qe(Er(e));return lr({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},kp=$(function(e,r){var n=r;return zp(o(tu,n,e))}),Pp=function(e){return o(kp,Lp,e)},Mp=function(e){var r=e;return r.cX},Tp=function(e){var r=e;return Er(r)},Dp=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),Ap=function(e){var r=e;return Yr(r)},Bp=function(e){var r=Mp(e.es),n=ar({cu:rc(r),cZ:Tp(r),c_:Ap(r),c0:Dr(oc(r))}),a=Zn(e.aQ),t=a,i=L(to,n,1,q,b([t]));if(i.$===1)return z;var c=i.a,l=Pp(r),u=o(ee,.99,o(le,ie(e.ex),tc(eu(c)))),v=nu(c),s=v.a,d=v.b,m=v.c,f=_p(p(Dp,s,d,m)),h=o(ee,1.01,o(Bn,f,tc(ru(c)))),g=o(yp,e.es,{en:e.en,eO:h,fg:u}),w=Cp(g).dH,x=w?qe(Dr(oc(r))):sn(rc(r)),_=function(){var oe=e.fK;switch(oe.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var me=oe.a;return k(3,me);case 4:var me=oe.a;return k(4,me);default:return k(5,0)}}(),C=_.a,M=_.b,R=e.eM,Y=R,E=o(at,Y,e.fR),j=E,N=lr({ds:0,dt:x.fU,du:en(j),dv:e.d8,dw:0,dx:x.fY,dy:rn(j),dz:hp(f),dA:0,dB:x.c$,dC:nn(j),dD:C,dE:0,dF:w,dG:0,dH:M}),F=ye(ql,N,l,g,gp,t,{N:z,V:z,fz:z}),Z=e.e8;switch(Z.$){case 0:var X=Z.a;return Je(b([p(tr,F.N,k(X,xt),tn),p(tr,F.V,kn,tn)]));case 1:var X=Z.a;return Je(b([p(tr,F.N,kn,tn),b([ac]),p(tr,F.fz,X.be,Kl),b([Ql(0)]),p(tr,F.N,k(X,xt),wp),p(tr,F.V,kn,tn)]));default:var ce=Z.a,$e=Z.b;return Je(b([p(tr,F.N,k($e,xt),tn),b([ac]),o(ep,F.fz,ce),p(Sp,F.N,$e,qr(ce)),p(tr,F.V,kn,tn)]))}},Fp=function(e){return o(Ur,"width",je(e))},Vp=$(function(e,r){var n=b([C0(1),M0(0),g0(!0),L(y0,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,_0,n),"1",1);default:var M=C.a;return B(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Ki(v),d=o(de,"height",je(s)+"px"),m=Ki(u),f=m/s,h=o(Oo,function(C){return Bp({en:f,es:e.es,ex:e.ex,aQ:C.aQ,eM:C.eM,e8:C.e8,d8:c,fK:C.fK,fR:C.fR})},r),g=o(de,"width",je(m)+"px"),w=e.aJ,x=w,_=D0(x);return p(k0,"div",b([o(de,"padding","0px"),g,d]),b([k(i,p(F0,t,b([Fp(nr(m*c)),L0(nr(s*c)),g,d,o(de,"display","block"),o(de,"background-color",_)]),h))]))}),Up=function(e){return{$:2,a:e}},Ep=function(e){return Up(e)},Yp=function(e){return o(Vp,{el:Ep(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},b([{aQ:e.aQ,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},ic=function(e){return e},$r=function(e){return e},jp=function(e){var r=e;return r},tt=function(e){var r=e;return jp(r.eo)},$u=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Rp=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),fu=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),su=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Np=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Hp=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Wp=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ai=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(Wp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L($u,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(Rp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(fu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(Hp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(su,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(Np,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ti={$:0},Gp=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ja(c(u)),d=o(se,s.dM,e),m=o(le,s.dJ,r),f=o(se,s.dN,n),h=o(le,s.dK,a),g=o(se,s.dO,t),w=o(le,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=h,t=g,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Ip=y(function(e,r,n){var a=ja(e(r));return Ia(Gp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),Lt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),du=function(e){return o(Lt,e.dJ,e.dM)&&o(Lt,e.dK,e.dN)&&o(Lt,e.dL,e.dO)?e:{dJ:o(le,e.dM,e.dJ),dK:o(le,e.dN,e.dK),dL:o(le,e.dO,e.dL),dM:o(se,e.dM,e.dJ),dN:o(se,e.dN,e.dK),dO:o(se,e.dO,e.dL)}},Nn=function(e){var r=e;return r},Gr=function(e){var r=e;return r.fU},Ir=function(e){var r=e;return r.fY},Or=function(e){var r=e;return r.c$},mu=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=Gr(n),c=Ir(n),l=Or(n),u=Gr(a),v=Ir(a),s=Or(a),d=Gr(t),m=Ir(t),f=Or(t);return du({dJ:o(le,i,o(le,u,d)),dK:o(le,c,o(le,v,m)),dL:o(le,l,o(le,s,f)),dM:o(se,i,o(se,u,d)),dN:o(se,c,o(se,v,m)),dO:o(se,l,o(se,s,f))})},pu=qf,De=function(e){return pu(Kn(e))},bu=function(e){var r=e;return r},ot=function(e){return pu(bu(e))},gu=function(e){return e},Op=$(function(e,r){var n=e,a=r,t=o(Be,J(a.fU),o(Be,J(a.fY),J(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return Il}),Jp=Op(gu(1)),hu=y(function(e,r,n){var a=o(Ya,r,n),t=o(Ya,e,r);return Jp(o(Wo,a,t))}),qp=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=ot(p(hu,n,a,t));return B({o:i,dY:De(n)},{o:i,dY:De(a)},{o:i,dY:De(t)})},Zp=$(function(e,r){return{$:2,a:e,b:r}}),_u=Zp({c8:3,dh:0,dQ:4}),Kp=function(e){if(e.b){var r=e.a,n=e.b,a=_u(o(Q,qp,e)),t=p(Ip,mu,r,n);return L($u,t,e,a,0)}else return ti},Ve=y(function(e,r,n){return B(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),wu=function(){var e=$r(1),r=$r(1),n=$r(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=p(pe,i,t,a),l=o(ee,.5,e),u=p(pe,i,t,l),v=o(ee,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(ee,.5,n),f=p(pe,m,t,a),h=p(pe,m,v,a),g=p(pe,m,t,l),w=p(pe,m,v,l);return ai(Kp(b([p(Ve,c,h,f),p(Ve,c,s,h),p(Ve,u,g,w),p(Ve,u,w,d),p(Ve,f,h,w),p(Ve,f,w,g),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,g),p(Ve,c,g,u),p(Ve,s,w,h),p(Ve,s,d,w)])))}(),la={$:0},Xp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Qp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ot(p(hu,u,l,c)),s={o:v,dY:De(u)},d={o:v,dY:De(l)},m={o:v,dY:De(c)};return o(A,s,o(A,d,o(A,m,n)))}),oi=function(e){var r=e;return r.E},e1=U(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ne(p(e,t,i,c))}),oo=4294967295>>>32-Yn,io=bv,r1=y(function(e,r,n){e:for(;;){var a=oo&r>>>e,t=o(io,a,n);if(t.$){var v=t.a;return o(io,oo&r,v)}else{var i=t.a,c=e-Yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),n1=function(e){return e>>>5<<5},a1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,n1(n))>-1?ne(o(io,oo&e,i)):ne(p(r1,a,e,t))}),ii=function(e){var r=e;return r.ai},zt=$(function(e,r){return o(a1,e,ii(r))}),t1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(e1,y(function(c,l,u){return B(c,l,u)}),o(zt,a,e),o(zt,t,e),o(zt,i,e))};return o(et,r,oi(e))},o1=y(function(e,r,n){e:for(;;){var a=o(Ao,Ne,e),t=a.a,i=a.b;if(O(Ot(t),Ne)<0)return o(fl,!0,{z:r,l:n,p:t});var c=i,l=o(A,vl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),ci=function(e){return e.b?p(o1,e,z,0):ll},i1=y(function(e,r,n){return e(r(n))}),c1=$(function(e,r){return!o(Sl,o(i1,Rs,e),r)}),l1=$(function(e,r){return p(zr,$(function(n,a){return e(n)?o(A,n,a):a}),z,r)}),u1=function(e){var r=e.a;return r},yu=$(function(e,r){var n=u1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(c1,a,r)?{E:r,ai:e}:{E:o(l1,a,r),ai:e}}),v1=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Xn=v1({c8:1,dh:3,dQ:4}),_a=$(function(e,r){var n=sn(r),a=sn(e);return k(B(a.fU,a.fY,a.c$),B(n.fU,n.fY,n.c$))}),cc=p(qn,0,0,0),kt=Ze(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Qa,o(_a,e,r),t);if(v.$){var d={o:cc,dY:De(r)},m={o:cc,dY:De(e)},f=u+1,h=u;return B(o(A,B(n,h,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),$1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,w=e,x=r,_=v,C=a+3,M=ye(kt,s,m,f,g,r,ye(kt,d,s,h,f,r,ye(kt,m,d,g,h,r,t)));e=w,r=x,n=_,a=C,t=M;continue e}else{var R=t,Y=R.a,E=R.b;return k(Y,Re(E))}}),f1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,w=p(Tn,o(_a,m,s),f,p(Tn,o(_a,s,d),h,p(Tn,o(_a,d,m),g,t))),x=o(A,B(g,h,f),a),_=e,C=v,M=n+3,R=x,Y=w;e=_,r=C,n=M,a=R,t=Y;continue e}else return B(a,t,n)}),Rr=y(function(e,r,n){var a=t1(n),t=p(zr,Qp(r),z,a),i=S(f1,r,a,0,z,Wl),c=i.a,l=i.b,u=i.c,v=S($1,r,l,a,0,B(c,z,u)),s=v.a,d=v.b,m=Hl(d)?t:ue(t,d);return p(Xp,e,o(yu,ci(m),s),o(Xn,m,s))}),co=function(e){return{E:o(Q,function(r){return B(3*r,3*r+1,3*r+2)},o(xr,0,qr(e)-1)),ai:ci(Je(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},xu=function(e){switch(e.$){case 0:return la;case 1:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Rr,a,Wr,co(n));case 2:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Rr,a,Wr,co(n));case 3:var a=e.a,t=e.b;return p(Rr,a,Wr,t);case 4:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Rr,a,function(i){return i.dY},t);case 8:return la;case 9:return la;default:return la}},lc=xu(wu),it=function(e){var r=e;return r.aL},Su={$:0},P=Su,ge=$(function(e,r){return{$:1,a:e,b:r}}),s1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},d1=1029,m1=function(e){return{$:5,a:e}},Cu=function(e){var r=e;return m1(r)},p1=Cu(d1),b1=1028,g1=Cu(b1),Ae=y(function(e,r,n){return r===1?e?o(A,p1,n):o(A,g1,n):n}),Lu={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pt=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Ae,l,a,d),Lu,s1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),li={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ax"}},zu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},br=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Ae,l,a,d),zu,li,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),ku=$(function(e,r){return{$:3,a:e,b:r}}),h1={src:`
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
    `,attributes:{},uniforms:{constantColor:"ax",pointRadius:"bS",sceneProperties:"e"}},Pu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_1=U(function(e,r,n,a){return o(ku,n,re(function(t,i,c,l,u,v,s,d){return S(ae,d,Pu,h1,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ui={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Qn=function(e){var r=e;return r},ct=Zf,gr=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Ae,u,t,m),zu,ui,a,{aO:o(ct,Qn(r),e),b:l,c,d:s,e:i,f:v})}))}),w1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},y1=he(function(e,r,n,a,t){return o(ku,a,re(function(i,c,l,u,v,s,d,m){return S(ae,m,Pu,w1,t,{aO:o(ct,Qn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},Tu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ua=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Ae,l,a,d),Tu,Mu,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),Du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Au={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},x1=Ze(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return S(ae,p(Ae,v,i,f),Au,Du,t,{Q:g,be:h.be,bK:h.bK,bL:h.bL,bM:h.bM,ck:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},S1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,re(function(d,m,f,h,g,w,x,_){var C=x.a,M=x.b;return S(ae,p(Ae,h,s,_),Au,Bu,v,{b0:e,b2:r,b3:i,b4:a,Q:M,be:C.be,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aX:c,d:w,cL:n,e:d,a0:l,f:g})}))}}}}}}}}}}},Fu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},va=Ze(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,d,m,f){var h=m.a,g=m.b;return S(ae,p(Ae,v,i,f),Tu,Fu,t,{b$:e,Q:g,be:h.be,bK:h.bK,bL:h.bL,bM:h.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),C1=function(e){return{$:0,a:e}},uc=$(function(e,r){return{$:1,a:e,b:r}}),Fn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),L1=function(e){return L(yn,en(e),rn(e),nn(e),1)},vi=L(yn,0,0,0,0),wa=$(function(e,r){if(r.$){var a=r.a.C;return k(a,vi)}else{var n=r.a;return k(e,L1(n))}}),Vu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(uc,k(t,vi),o(Fn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(uc,o(wa,t,e),o(Fn,t,r))}else{var a=n.a.a;return n.b.a,C1(a)}}),z1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),$a=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),k1=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),P1=function(e){return o(Ye,e,1)},lo=o(Ye,0,0),on=$(function(e,r){if(r.$){var a=r.a.C;return k(a,lo)}else{var n=r.a;return k(e,P1(n))}}),Uu=U(function(e,r,n,a){var t=L(k1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L($a,k(u,vi),o(on,u,r),o(on,u,n),o(Fn,u,a))}else if(t.b.$){var u=t.b.a.C;return L($a,o(wa,u,e),k(u,lo),o(on,u,n),o(Fn,u,a))}else if(t.c.$){var u=t.c.a.C;return L($a,o(wa,u,e),o(on,u,r),k(u,lo),o(Fn,u,a))}else if(t.d.$){var u=t.d.a.C;return L($a,o(wa,u,e),o(on,u,r),o(on,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(z1,i,c,l)}}),M1={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},Mt=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Ae,u,t,m),Lu,M1,a,{bZ:Qn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Eu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T1=U(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Ae,l,a,d),Eu,Du,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),D1=mo(function(e,r,n,a,t,i,c,l,u){return o(ge,c,re(function(v,s,d,m,f,h,g,w){var x=g.a,_=g.b;return S(ae,p(Ae,m,u,w),Eu,Bu,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:x.be,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:d,c:s,aX:e,d:h,cL:n,e:v,a0:0,f})}))}),Hn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),A1=function(e){var r=e;return p(Hn,r.dM,r.dJ,.5)},B1=function(e){var r=e;return p(Hn,r.dN,r.dK,.5)},F1=function(e){var r=e;return p(Hn,r.dO,r.dL,.5)},V1=function(e){return p(pe,A1(e),B1(e),F1(e))},H=function(e){var r=nu(e),n=r.a,a=r.b,t=r.c;return{ev:Kn(V1(e)),eR:n/2,eS:a/2,eT:t/2}},$i=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return L(Pt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Pt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Pt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(br,n,H(t),c,a);case 8:var t=r.a,c=r.c;return L(br,n,H(t),c,0);case 9:var t=r.a,c=r.c;return L(br,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(_1,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(Mt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Mt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Mt,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(gr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(gr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(gr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(y1,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,Y=e.c,d=o(Vu,s,Y);if(d.$){var h=d.a,g=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return L(T1,g,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(x1,g,x,_,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return L(ua,m,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return L(ua,m,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return L(ua,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(ua,m,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var C=e.b,M=e.c,R=e.d,Y=e.e,E=L(Uu,C,M,R,Y);if(E.$){var Z=E.a,X=Z.a,ce=Z.b,$e=E.b,oe=$e.a,me=$e.b,Fe=E.c,ke=Fe.a,kr=Fe.b,Pr=E.d,x=Pr.a,_=Pr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return fv(D1,X,ce,oe,me,ke,kr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S1(X)(ce)(oe)(me)(ke)(kr)(x)(_)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var j=E.a,N=E.b,F=E.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(va,j,N,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(va,j,N,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(va,j,N,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(va,j,N,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),Tt=function(e){var r=e;return r.fU},Dt=function(e){var r=e;return r.fY},At=function(e){var r=e;return r.c$},U1=function(e){var r=e,n=At(r.c0),a=Dt(r.c0),t=Tt(r.c0),i=At(r.c_),c=Dt(r.c_),l=Tt(r.c_),u=At(r.cZ),v=Dt(r.cZ),s=Tt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},E1=function(e){var r=Kn(Qr(e)),n=qe(jr(e)),a=qe(Yr(e)),t=qe(Er(e));return{dk:U1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,I:r.fU,J:r.fY,K:r.c$,bW:1}},cn=$(function(e,r){return{$:5,a:e,b:r}}),Yu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Jl,a,e);return o(cn,i,t);case 1:return o(cn,e,n);case 3:return o(cn,e,n);case 2:return o(cn,e,n);default:return o(cn,e,n)}}),ju=$(function(e,r){return o(Yu,E1(e),r)}),lt=function(e){return{$:2,a:e}},Y1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),j1=Qf,R1=Xf,vc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=R1(a),h=f.fU,g=f.fY,w=f.c$,x=f.ei,_=j1({ei:x,fU:h*s,fY:g*d,c$:w*m});return Ia(r,n,_,t,i,c,l,u,v)}}}}}}}}}},uo=$(function(e,r){switch(r.$){case 0:return Su;case 5:var n=r.a,a=r.b;return o(cn,n,o(uo,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(Y1,e,t),o(vc,e,i));case 3:return r;case 2:var i=r.a;return lt(o(vc,e,i));default:var c=r.a;return ou(o(Q,uo(e),c))}}),fi=$(function(e,r){var n=r;return o(uo,e,n)}),si={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ru=7683,Nu=7682,N1=p(Zo,{ci:0,cH:0,cY:15},{a9:Le,bm:pn,bu:Le,bv:Ru},{a9:Le,bm:pn,bu:Le,bv:Nu}),H1=p(Zo,{ci:0,cH:0,cY:15},{a9:Le,bm:pn,bu:Le,bv:Nu},{a9:Le,bm:pn,bu:Le,bv:Ru}),di=$(function(e,r){return e?o(A,H1,r):o(A,N1,r)}),W1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},G1=function(e){if(e.$){var r=e.c;return ne(re(function(n,a,t,i,c,l,u,v){return S(ae,o(di,i,v),W1,si,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Ra=function(e){var r=G1(e);if(r.$)return P;var n=r.a;return lt(n)},I1=U(function(e,r,n,a){var t=o($i,n,wu),i=function(){var s=k(e,r);return s.a?s.b?Zn(b([t,Ra(lc)])):t:s.b?Ra(lc):P}(),c=it(a),l=c.a,u=c.b,v=c.c;return o(ju,tt(a),o(fi,B(l,u,v),i))}),O1=$(function(e,r){return L(I1,!0,!0,e,r)}),vo=function(e){return{$:0,a:e}},Hu=$(function(e,r){return{$:0,a:e,b:r}}),J1=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,n,a,t)},q1=function(e){return o(Hu,0,vo(J1(e)))},mi=function(e){var r=e;return r.k},Zr=Lv,Vn=function(e){var r=e;return Zr(r)},Z1=$(function(e,r){var n=r;return n/e}),bn=zv,$c=function(e){var r=e;return{fU:Zr(r),fY:bn(r)}},K1=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ot(a),dY:De(n)},r)}),X1=Ga(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=nn(l.dY),s=rn(l.dY),d=en(l.dY),m=o(An,e,d),f=o(Be,r,d),h=o(An,n,s),g=o(Be,a,s),w=o(An,t,v),x=o(Be,i,v),_=u;e=m,r=f,n=h,a=g,t=w,i=x,c=_;continue e}else return du({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Wu=$(function(e,r){var n=nn(e.dY),a=rn(e.dY),t=en(e.dY);return po(X1,t,t,a,a,n,n,r)}),Q1=function(e){var r=p(el,K1,z,ii(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,oi(e)),i=o(Wu,n,a);return L(fu,i,e,t,0)}else return ti},Gu=wr({fU:0,fY:0,c$:-1}),fc=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),Na=function(e){var r=e;return bn(r)},$o=function(e){return pr(2*we*e)},eb=Wr,sc=eb({cu:Te,cZ:ei,c_:ri}),Iu=function(){var e=72,r=o(Z1,e,$o(1)),n=$r(1),a=vn(ni),t=vn(Gu),i=$r(1),c=o(ee,.5,i),l=p(pe,cr,cr,c),u=o(ee,-.5,i),v=p(pe,cr,cr,u),s=function(f){var h=o(ee,f,r),g=vn(o(fc,sc,$c(h))),w=o(ee,Vn(h),n),x=o(ee,Na(h),n),_=p(pe,w,x,c),C=p(pe,w,x,u),M=o(Fa,e,f+1),R=o(ee,M,r),Y=vn(o(fc,sc,$c(R))),E=o(ee,Vn(R),n),j=o(ee,Na(R),n),N=p(pe,E,j,u),F=p(pe,E,j,c);return b([B({o:t,dY:v},{o:t,dY:N},{o:t,dY:C}),B({o:g,dY:C},{o:Y,dY:N},{o:Y,dY:F}),B({o:g,dY:C},{o:Y,dY:F},{o:g,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(Q,s,o(xr,0,e-1)),m=co(Je(d));return ai(Q1(m))}(),dc=xu(Iu),Ou=function(e){var r=e;return r.eF},Ju=function(e){var r=e;return r.cu},rb=function(e){var r=Ou(e),n=Go(r),a=n.a,t=n.b;return ar({cu:Ju(e),cZ:a,c_:t,c0:r})},qu=function(e){var r=e;return r.e6},Zu=function(e){var r=e;return r.fs},nb=U(function(e,r,n,a){var t=rb(mi(a)),i=o($i,n,Iu),c=function(){var d=k(e,r);return d.a?d.b?Zn(b([i,Ra(dc)])):i:d.b?Ra(dc):P}(),l=Zu(a),u=l,v=qu(a),s=v;return o(ju,t,o(fi,B(u,u,s),c))}),ab=$(function(e,r){return L(nb,!0,!0,e,r)}),mc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},pc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Pn=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=sn(n),c=sn(a),l=sn(t);return lr({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},fa=_u(b([B({cS:0},{cS:1},{cS:2})])),tb=$(function(e,r){var n=mu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(ge,a,re(function(_,C,M,R,Y,E,j,N){return S(ae,p(Ae,R,0,N),mc,li,fa,{ax:t,b:M,c:C,d:E,e:_,br:Pn(r),f:Y})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(ge,a,re(function(_,C,M,R,Y,E,j,N){return S(ae,p(Ae,R,0,N),mc,ui,fa,{aO:o(ct,Qn(c),i),b:M,c:C,d:E,e:_,br:Pn(r),f:Y})}));case 2:e.a;var l=e.b,f=e.c,u=o(Vu,l,f);if(u.$)return P;var v=u.a;return o(ge,a,re(function(_,C,M,R,Y,E,j,N){var F=j.a,Z=j.b;return S(ae,p(Ae,R,0,N),pc,Mu,fa,{Q:Z,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:M,c:C,d:E,e:_,br:Pn(r),f:Y})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=L(Uu,s,d,m,f);if(h.$)return P;var g=h.a,w=h.b,x=h.c;return o(ge,a,re(function(_,C,M,R,Y,E,j,N){var F=j.a,Z=j.b;return S(ae,p(Ae,R,0,N),pc,Fu,fa,{b$:g,Q:Z,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:M,c:C,d:E,cK:w,e:_,br:Pn(r),f:Y})}))}}),ob=function(){var e=b([{a$:o(Ye,0,1)},{a$:o(Ye,1,1)},{a$:o(Ye,2,1)},{a$:o(Ye,0,-1)},{a$:o(Ye,1,-1)},{a$:o(Ye,2,-1)}]),r=b([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Xn,e,r)}(),ib={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},bc=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return S(ae,o(di,t,u),ib,si,ob,{b:a,c:n,d:c,e:r,bX:l,br:Pn(e),f:i})}))},cb=U(function(e,r,n,a){var t=o(tb,n,a),i=k(e,r);return i.a?i.b?Zn(b([t,bc(a)])):t:i.b?bc(a):P}),lb=$(function(e,r){return L(cb,!0,!0,e,r)}),pi=function(e){var r=e;return r},ub=$(function(e,r){var n=Or(r),a=Or(e),t=Ir(r),i=Ir(e),c=Gr(r),l=Gr(e);return{dJ:o(le,l,c),dK:o(le,i,t),dL:o(le,a,n),dM:o(se,l,c),dN:o(se,i,t),dO:o(se,a,n)}}),vb=function(e){var r=pi(e),n=r.a,a=r.b;return o(ub,n,a)},gc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},$b=$(function(e,r){return{$:1,a:e,b:r}}),fb=$b({c8:2,dh:0,dQ:1}),hc=fb(b([k({dr:0},{dr:1})])),sb=$(function(e,r){var n=vb(r),a=H(n),t=pi(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(ge,a,re(function(v,s,d,m,f,h,g,w){return S(ae,w,gc,li,hc,{ax:l,dp:De(c),dq:De(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(ge,a,re(function(s,d,m,f,h,g,w,x){return S(ae,x,gc,ui,hc,{aO:o(ct,Qn(u),l),dp:De(c),dq:De(i),b:m,c:d,d:g,e:s,f:h})}));case 2:return P;default:return P}}),db=$(function(e,r){return o(sb,e,r)}),ut=function(e){var r=e;return r.ev},vt=function(e){var r=e;return r.fs},sa=function(e){return pr(we*(e/180))},_c=$(function(e,r){var n=e,a=r;return n/a}),mb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(Ar(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),wc=$(function(e,r){return e<1?z:S(mb,0,e,e,r,z)}),pb=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(A,{o:ot(a),dY:De(n),M:o(Ye,c,l)},r)}),bb=function(e){var r=p(el,pb,z,ii(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,oi(e)),i=o(Wu,n,a);return L(su,i,e,t,0)}else return ti},bi=$(function(e,r){var n=e,a=r,t=Zr(a);return{fU:t*Zr(n),fY:t*bn(n),c$:bn(a)}}),gb=function(){var e=$r(1),r=72,n=o(xr,0,r-1),a=o(wc,r,o(Hn,cr,$o(1))),t=To(r/2),i=o(xr,0,t-1),c=o(wc,t,o(Hn,sa(90),sa(-90))),l=ci(Je(o(Q,function(s){return o(Q,function(d){return{o:vn(o(bi,s,d)),dY:p(pe,o(ee,Vn(d)*Vn(s),e),o(ee,Vn(d)*Na(s),e),o(ee,Na(d),e)),M:k(o(_c,s,$o(1)),o(_c,o(Bn,sa(90),d),sa(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Je(o(Q,function(s){return Je(o(Q,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),g=o(u,s,d+1);return b([B(g,h,m),B(g,m,f)])},i))},n));return ai(bb(o(yu,l,v)))}(),Ha=72,da=2*Ha,hb=$(function(e,r){e:for(;;){var n=da+1,a=o(Fa,da,2*e+3),t=o(Fa,da,2*e+2),i=2*e+1,c=2*e,l=da,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),_b=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),wb=$(function(e,r){e:for(;;){var n=p(_b,0,2*we,e/Ha),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),yb=function(){var e=o(wb,Ha-1,b([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(hb,Ha-1,z);return o(Xn,e,r)}(),xb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},yc=function(e){return lt(re(function(r,n,a,t,i,c,l,u){return S(ae,o(di,!0,u),xb,si,yb,{ax:p(qn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},Sb=function(e){var r=bu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fU,J:r.fY,K:r.c$,bW:1}},Cb=$(function(e,r){return o(Yu,Sb(e),r)}),Lb=U(function(e,r,n,a){var t=o($i,n,gb),i=function(){var u=k(e,r);return u.a?u.b?Zn(b([t,yc()])):t:u.b?yc():P}(),c=vt(a),l=c;return o(Cb,o(Ya,Te,ut(a)),o(fi,B(l,l,l),i))}),zb=$(function(e,r){return L(Lb,!0,!0,e,r)}),kb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ku=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Pb=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Mb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Hu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(kb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ku,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Pb,n,a,t,i,c)}},Tb=Mb,Xu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(O1,t,r)]);case 1:var t=e.a,n=e.b;return b([o(lb,t,n)]);case 3:var t=e.a,a=e.b;return b([o(zb,Tb(t),a)]);case 2:var t=e.a,i=e.b;return b([o(ab,t,i)]);case 4:var c=e.a,l=e.b;return b([o(db,q1(c),l)]);default:var u=e.a;return o(Oo,Xu,u)}},Db=function(e){return o(Oo,Xu,e)},Ab=$(function(e,r){return Yp({el:e.el,aJ:p0(e.ep),es:e.es,ex:$r(e.ex),b5:e.b5,aL:k(ic(nr(e.cM.fS)),ic(nr(e.cM.eV))),aQ:Db(r),eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),Qu=function(e){return e},Bb=$(function(e,r){var n=e,a=qe(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:nn(u),eu:n,bF:rn(u),cD:0,bU:en(u),cT:1,fU:-t,fY:-i,c$:-c}}),Fb=function(e){return o(Bb,Qu(!0),{aK:e.aK,eF:o(bi,pr(e.by),pr(e.bD)),bH:e.bH})},Vb=function(e){return e},Ub=function(e){return Vb(1.2*o(Jn,2,e))},Bt=Io({fU:.37208,fY:.37529}),Eb=$(function(e,r){return{$:2,a:e,b:r}}),ev=function(e){return{$:0,a:e}},ma=function(e){var r=e;return r},Yb=function(e){var r=e;return r.eu},jb=ev(kn.a),Rb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(A,a,i),c):k(i,o(A,a,c))});return p(zr,n,k(z,z),r)}),Nb=function(e){var r=e;return lr({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Hb=re(function(e,r,n,a,t,i,c,l){var u=o(Rb,Yb,b([ma(e),ma(r),ma(n),ma(a)])),v=u.a,s=u.b;if(v.b){var d=ue(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(Eb,o(Q,Nb,v),{be:o(Ge,m,h),bK:o(Ge,w,_),bL:o(Ge,t,i),bM:o(Ge,c,l)})}else return jb}else return ev({be:o(Ge,e,r),bK:o(Ge,n,a),bL:o(Ge,t,i),bM:o(Ge,c,l)})}),Wb=U(function(e,r,n,a){return Ia(Hb,e,r,n,a,Ue,Ue,Ue,Ue)}),Gb=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(Qa,e,r.aw))}),Ib=$(function(e,r){return o(dr,0,rt(o(et,Gb(e),r)))}),Ob=$(function(e,r){return o(Ib,e,r.ey)}),Mn=Ob,Jb={$:5},qb=Jb,Zb=Io({fU:.44757,fY:.40745}),Kb=function(e){return e},rv=L(Xe,114/255,159/255,207/255,1),xc=function(e){return e},Ft=function(e){return e},Xb={$:1},Qb=Xb,e3=$(function(e,r){var n=e,a=Kn(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(at,r.bH,r.aK),u=l;return{bz:nn(u),eu:n,bF:rn(u),cD:0,bU:en(u),cT:2,fU:t,fY:i,c$:c}}),Sc=function(e){return o(e3,Qu(!0),{aK:e.aK,bH:e.bH,dY:ba(e.dY)})},nv=L(Xe,52/255,101/255,164/255,1),ea=$(function(e,r){return{$:0,a:e,b:r}}),Vt=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),Ut=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),r3=wr({fU:-1,fY:0,c$:0}),n3=wr({fU:0,fY:-1,c$:0}),a3=Ze(function(e,r,n,a,t,i){var c=o(Vt,n,i)?ni:Gu,l=o(Vt,r,t)?nt:n3,u=o(Vt,e,a)?uu:r3,v=B(ie(o(yr,e,a)),ie(o(yr,r,t)),ie(o(yr,n,i))),s=p(pe,o(Ut,e,a),o(Ut,r,t),o(Ut,n,i)),d=ar({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aL:v}}),av=$(function(e,r){return ye(a3,Gr(e),Ir(e),Or(e),Gr(r),Ir(r),Or(r))}),dn=$(function(e,r){var n=r/2;return o(ea,e,o(av,p(Tr,-n,-n,-n),p(Tr,n,n,n)))}),$t=function(e){return{$:5,a:e}},He=function(e){return $t(e)},tv=L(Xe,138/255,226/255,52/255,1),t3=L(Xe,173/255,127/255,168/255,1),Et=function(e){return p(Ol,0,1,e<=.04045?e/12.92:o(Jn,(e+.055)/1.055,2.4))},o3=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(qn,Et(n),Et(a),Et(t))},ze=function(e){return p(Ku,0,vo(o3(e)),vo(0))},ft=$(function(e,r){return{$:2,a:e,b:r}}),gi=$(function(e,r){return{$:4,a:e,b:r}}),st=$(function(e,r){return{$:3,a:e,b:r}}),dt=$(function(e,r){return{$:1,a:e,b:r}}),i3=y(function(e,r,n){return{fU:e,fY:r,c$:n}}),ra=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c$:a.c$+n.c$}}),c3=$(function(e,r){return ar({cu:o(ra,e,Qr(r)),cZ:Er(r),c_:Yr(r),c0:jr(r)})}),l3=$(function(e,r){return{eo:o(c3,e,tt(r)),aL:it(r)}}),an=$(function(e,r){return{eF:r,cu:e}}),u3=$(function(e,r){var n=r;return o(an,o(ra,e,n.cu),n.eF)}),v3=$(function(e,r){var n=r;return{k:o(u3,e,n.k),e6:n.e6,fs:n.fs}}),$3=function(e){return e},hi=$(function(e,r){var n=pi(r),a=n.a,t=n.b;return $3(k(e(a),e(t)))}),f3=$(function(e,r){return o(hi,ra(e),r)}),mt=$(function(e,r){return{ev:r,fs:ie(e)}}),s3=$(function(e,r){return o(mt,vt(r),o(ra,e,ut(r)))}),_i=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),d3=$(function(e,r){return o(_i,ra(e),r)}),pt=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(i3,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ea,s,o(l3,i,c));case 1:var s=r.a,l=r.b;return o(dt,s,o(d3,i,l));case 3:var s=r.a,u=r.b;return o(st,s,o(s3,i,u));case 2:var s=r.a,v=r.b;return o(ft,s,o(v3,i,v));case 4:var s=r.a,d=r.b;return o(gi,s,o(f3,i,d));default:var m=r.a;return $t(o(Q,pt(B(n,a,t)),m))}}),Cr=function(e){return pt(B(e,0,0))},Se=function(e){return pt(B(0,e,0))},ya=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=bn(c),v=a.eF,s=v,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,g=l*h,w=d*h,x=h*h,_=1-2*(f+x),C=s.c$*u,M=l*C,R=2*(w-M),Y=2*(w+M),E=d*C,j=2*(E+g),N=2*(E-g),F=h*C,Z=2*(F-m),X=2*(F+m),ce=C*C,$e=1-2*(x+ce),oe=1-2*(f+ce);return{fU:$e*i.fU+R*i.fY+j*i.c$,fY:Y*i.fU+oe*i.fY+Z*i.c$,c$:N*i.fU+X*i.fY+_*i.c$}}),na=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=bn(c),v=a.cu,s=v,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c$-s.c$,h=a.eF,g=h,w=g.fU*u,x=l*w,_=w*w,C=g.fY*u,M=l*C,R=w*C,Y=C*C,E=1-2*(_+Y),j=g.c$*u,N=l*j,F=2*(R-N),Z=2*(R+N),X=w*j,ce=2*(X+M),$e=2*(X-M),oe=C*j,me=2*(oe-x),Fe=2*(oe+x),ke=j*j,kr=1-2*(Y+ke),Pr=1-2*(_+ke);return{fU:s.fU+kr*d+F*m+ce*f,fY:s.fY+Z*d+Pr*m+me*f,c$:s.c$+$e*d+Fe*m+E*f}}),m3=y(function(e,r,n){return ar({cu:p(na,e,r,Qr(n)),cZ:p(ya,e,r,Er(n)),c_:p(ya,e,r,Yr(n)),c0:p(ya,e,r,jr(n))})}),p3=y(function(e,r,n){return{eo:p(m3,e,r,tt(n)),aL:it(n)}}),b3=$(function(e,r){var n=o(na,e,r),a=o(ya,e,r);return function(t){var i=t;return o(an,n(i.cu),a(i.eF))}}),g3=y(function(e,r,n){var a=n;return{k:p(b3,e,r,a.k),e6:a.e6,fs:a.fs}}),h3=y(function(e,r,n){return o(hi,o(na,e,r),n)}),_3=y(function(e,r,n){return o(mt,vt(n),p(na,e,r,ut(n)))}),w3=y(function(e,r,n){return o(_i,o(na,e,r),n)}),bt=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(ea,l,p(p3,e,r,a));case 1:var l=n.a,t=n.b;return o(dt,l,p(w3,e,r,t));case 3:var l=n.a,i=n.b;return o(st,l,p(_3,e,r,i));case 2:var l=n.a,c=n.b;return o(ft,l,p(g3,e,r,c));case 4:var l=n.a,u=n.b;return o(gi,l,p(h3,e,r,u));default:var v=n.a;return $t(o(Q,o(bt,e,r),v))}}),y3=o(an,Te,ei),Wa=$(function(e,r){return p(bt,y3,pr(e),r)}),x3=o(an,Te,ri),fr=$(function(e,r){return p(bt,x3,pr(e),r)}),S3=o(an,Te,vu),gn=$(function(e,r){return p(bt,S3,pr(e),r)}),ov=$(function(e,r){return(r-$l(r/e)*e)/e}),rr=$(function(e,r){return 360*o(ov,e,r)}),C3=Pv,Jr=function(e){return e*we/180},L3=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(dt,e,p(Ve,p(Tr,n.fU,n.fY,n.c$),p(Tr,a.fU,a.fY,a.c$),p(Tr,t.fU,t.fY,t.c$)))}),xa=L(Xe,255/255,255/255,255/255,1),iv=function(){var e=hr(3)/2,r=o(L3,ze(xa),B({fU:e,fY:0,c$:0},{fU:0,fY:.5,c$:0},{fU:0,fY:-.5,c$:0})),n=o(Cr,-(e/3),o(fr,C3(1/3),r));return o(Se,-(e/3),o(Wa,Jr(90),He(b([o(Cr,-(e/3),r),n,o(gn,Jr(120),n),o(gn,Jr(240),n)]))))}(),z3=function(e){var r=function(n){return o(gn,o(rr,300,e.D),o(fr,o(rr,300,e.D),o(Wa,o(rr,300,e.D),n)))};return He(b([o(Se,2,o(Cr,-2,r(o(dn,ze(tv),1)))),o(Se,2,o(Cr,2,r(o(dn,ze(nv),1)))),o(Se,4,r(o(dn,ze(t3),1))),o(Se,1.5,r(iv))]))},fo=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ea,e,o(av,p(Tr,-c,-l,-u),p(Tr,c,l,u)))}),k3=y(function(e,r,n){return{k:o(an,e,r),e6:ie(n.e6),fs:ie(n.fs)}}),P3=y(function(e,r,n){return o(ft,e,p(k3,Te,nt,{e6:$r(n),fs:$r(r)}))}),aa=y(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c$:a.c$+r*(t.c$-a.c$)}}),M3=y(function(e,r,n){var a=tt(n),t=Er(a),i=Yr(a),c=jr(a),l=p(aa,e,r,Qr(a)),u=r>=0?ar({cu:l,cZ:t,c_:i,c0:c}):ar({cu:l,cZ:Dr(t),c_:Dr(i),c0:Dr(c)}),v=it(n),s=v.a,d=v.b,m=v.c,f=ie(o(ee,r,s)),h=ie(o(ee,r,d)),g=ie(o(ee,r,m));return{eo:u,aL:B(f,h,g)}}),Cc=function(e){return Ou(mi(e))},T3=function(e){return Ju(mi(e))},D3=y(function(e,r,n){var a=ie(o(ee,r,Zu(n))),t=ie(o(ee,r,qu(n))),i=r>=0?Cc(n):Dr(Cc(n)),c=p(aa,e,r,T3(n));return{k:o(an,c,i),e6:t,fs:a}}),A3=y(function(e,r,n){return o(hi,o(aa,e,r),n)}),B3=y(function(e,r,n){return o(mt,o(ee,J(r),vt(n)),p(aa,e,r,ut(n)))}),F3=y(function(e,r,n){return o(_i,o(aa,e,r),n)}),Un=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ea,c,p(M3,Te,e,n));case 1:var c=r.a,a=r.b;return o(dt,c,p(F3,Te,e,a));case 3:var c=r.a,t=r.b;return o(st,c,p(B3,Te,e,t));case 2:var c=r.a,i=r.b;return o(ft,c,p(D3,Te,e,i));case 4:var c=r.a,l=r.b;return o(gi,c,p(A3,Te,e,l));default:var u=r.a;return $t(o(Q,Un(e),u))}}),V3=function(){var e=He(b([o(dn,ze(xa),1),o(fr,Jr(45),o(dn,ze(xa),1))]));return He(b([He(b([e,o(Se,-.4,o(Un,1.3,e))])),o(Se,-.7,p(P3,ze(xa),1,.5))]))}(),Lc=L(Xe,211/255,215/255,207/255,1),U3=L(Xe,193/255,125/255,17/255,1),E3=$(function(e,r){return o(Ce,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Qa,e,r.aw))}),Y3=$(function(e,r){return o(dr,0,rt(o(et,E3(e),r)))}),j3=$(function(e,r){return o(Y3,e,r.ey)}),R3=j3,N3=U(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return L(Xe,f,m,d,a)}),H3=y(function(e,r,n){return L(N3,e,r,n,1)}),W3=function(e){return 2*we*e},so=U(function(e,r,n,a){return e+(r-e)*(1+Zr(W3(o(ov,n,a))))/2}),G3=function(e){var r=o(R3,"number of tree blocks",e),n=function(a){var t=o(An,2,.2*(r-a)),i=p(H3,L(so,a/r,1,10,e.D),.6,.6),c=.25;return o(fr,o(Mn,"turning speed of the tree",e)*a*L(so,3,5,10,e.D),o(Se,a*1.2*c,o(fo,ze(i),B(t,c,t))))};return He(b([o(fo,ze(U3),B(.2,8,.2)),He(o(Q,n,o(xr,0,r-1)))]))},I3=function(e){var r=function(a){return o(Se,-1,o(fo,a,B(10,1,10)))},n=function(a){return He(b([r(a),o(fr,Jr(45),r(a))]))};return o(fr,o(rr,1e3,e.D),He(b([V3,n(ze(Lc)),o(Se,-.1,o(Un,1.1,n(ze(nv)))),o(Se,-.2,o(Un,1.2,n(ze(Lc)))),o(Se,1,o(Cr,5,G3(e))),He(o(Q,function(a){return o(fr,Jr(a*45),o(Se,-1/3,o(Cr,5.5,o(Un,2,iv))))},o(xr,1,7)))])))},O3=L(Xe,245/255,121/255,0/255,1),J3=function(e){var r=14;return He(o(Q,function(n){return o(Se,4,o(gn,o(rr,1e3,e.D),o(Wa,o(rr,1e3,e.D),o(fr,-o(rr,200,e.D),o(fr,-(n/r*Jr(360)),o(Cr,1.3,o(Se,L(so,-1,1,10,e.D),o(Wa,o(rr,600,e.D),o(gn,o(rr,300,e.D),o(dn,ze(O3),.3))))))))))},o(xr,0,r-1)))},q3=function(e){return pt(B(0,0,e))},zc=$(function(e,r){return o(st,e,o(mt,$r(r),Te))}),Z3=function(e){return He(b([o(fr,-o(rr,640,e.D),o(q3,3.5,o(gn,o(rr,100,e.D),He(b([o(Cr,-.02,o(zc,ze(rv),.5)),o(Cr,.02,o(zc,ze(tv),.5))])))))]))},K3=$(function(e,r){return b([I3(e),z3(e),J3(e),Z3(e)])}),kc=function(e){var r=e;return r},X3=function(e){e:for(;;){if(Ar(e.di,cr)&&Ar(e.dj,cr))return Ue;if(o(Gl,ie(e.di),ie(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:Dr(e.ee)};e=r;continue e}else{var n=J(kc(e.dj)/we),a=J(kc(e.di)/we),t=qe(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(at,gu(1),e.aK),v=u;return{bz:a*nn(v),eu:!1,bF:a*rn(v),cD:n/a,bU:a*en(v),cT:3,fU:i,fY:c,c$:l}}}},Q3=function(e){return X3({aK:e.aK,di:e.di,dj:e.dj,ee:o(bi,pr(e.by),pr(e.bD))})},eg=$(function(e,r){var n=Fb({by:o(Mn,"azimuth for third light",e),aK:m0(Kb(2e3)),bD:o(Mn,"elevation for third light",e),bH:Ft(120)}),a=Sc({aK:Bt,bH:xc(6e3),dY:{fU:2,fY:3,c$:1}}),t=Q3({by:o(Mn,"azimuth for fourth light",e),aK:Bt,bD:o(Mn,"elevation for fourth light",e),di:Ft(20),dj:Ft(10)}),i=Sc({aK:Zb,bH:xc(6e3),dY:{fU:-2,fY:4,c$:1}});return o(Ab,{el:Qb,ep:rv,es:s0,ex:.1,b5:e.b5,eM:Ub(6),e8:L(Wb,i,a,n,t),cM:e.cM,fK:qb,fR:Bt},o(K3,e,r))}),rg=L(Hm,eg,Zm,qm,Wm);const ng={Main:{init:rg(o(D,function(e){return Ee({e0:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ee({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ee({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",K))},o(T,"control",K))},o(T,"down",K))},o(T,"downs",Da(Rn)))},o(T,"left",K))},o(T,"pressedKeys",Da(Rn)))},o(T,"right",K))},o(T,"shift",K))},o(T,"up",K))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ee({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",K))},o(T,"isDown",K))},o(T,"move",K))},o(T,"rightDown",K))},o(T,"rightUp",K))},o(T,"up",K))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({eV:n,fS:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({eC:r,eD:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ag=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},tg=()=>{Yt("pointerdown"),Yt("wheel"),Yt("keydown")},Yt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},og=ng.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});tg();ag(og);
