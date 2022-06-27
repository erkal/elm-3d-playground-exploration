const uv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};uv();function Mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return Mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Oe(e){return Mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Wa(e){return Mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return Mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function fo(e){return Mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function T(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function so(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ga(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function vv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var $v=[];function fv(e){return e.length}var sv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),dv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),mv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var pv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+bv()),r});function bv(e){return"<internals>"}function mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function kr(e,r){for(var n,a=[],t=jt(e,r,0,a);t&&(n=a.pop());t=jt(n.a,n.b,0,a));return t}function jt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&mn(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=Ai(e),r=Ai(r));for(var t in e)if(!jt(e[t],r[t],n+1,a))return!1;return!0}$(kr);$(function(e,r){return!kr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var gv=$(function(e,r){var n=U(e,r);return n<0?el:n?as:Qc}),Xn=0;function L(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function ar(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=vr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=vr(e.a,r);return n}var z={$:0};function vr(e,r){return{$:1,a:e,b:r}}var hv=$(vr);function h(e){for(var r=z,n=e.length;n--;)r=vr(e[n],r);return r}function Ia(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var _v=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(T(e,r.a,n.a,a.a,t.a));return h(i)});Oe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ia(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return h(Ia(r).sort(function(n,a){var t=o(e,n,a);return t===Qc?0:t===el?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var wv=$(Math.pow);$(function(e,r){return r%e});var yv=$(function(e,r){var n=r%e;return e===0?mn(11):n>0&&e<0||n<0&&e>0?n+e:n}),xv=Math.PI,Sv=Math.cos,Cv=Math.sin,Tv=Math.tan,Lv=Math.acos;$(Math.atan2);function zv(e){return e}function Pv(e){return e===1/0||e===-1/0}var kv=Math.ceil,Mv=Math.floor,Dv=Math.round,Av=Math.sqrt,hi=Math.log,Bv=isNaN;function Fv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Vv=$(function(e,r){return e+r});function Ev(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ne(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}$(function(e,r){return e+r});function jv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Rv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Nv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Hv=$(function(e,r){return r.split(e)}),Xv=$(function(e,r){return r.join(e)}),Wv=y(function(e,r,n){return n.slice(e,r)});function Gv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Iv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Uv=$(function(e,r){return r.indexOf(e)>-1}),Ov=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Jv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Lc(e){return e+""}function Yv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:ne(n==45?-r:r)}function qv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ne(r):Y}function Zv(e){return Ia(e).join("")}function Kv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Qv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function e$(e){return{$:0,a:e}}function mo(e){return{$:2,b:e}}var r$=mo(function(e){return typeof e=="boolean"?ve(e):nr("a BOOL",e)}),n$=mo(function(e){return typeof e=="number"?ve(e):nr("a FLOAT",e)}),a$=mo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):nr("a STRING",e)});function t$(e){return{$:3,b:e}}var o$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Dr(e,r){return{$:9,f:e,g:r}}var i$=$(function(e,r){return{$:10,b:r,h:e}}),c$=$(function(e,r){return Dr(e,[r])}),l$=y(function(e,r,n){return Dr(e,[r,n])});E(function(e,r,n,a){return Dr(e,[r,n,a])});ge(function(e,r,n,a,t){return Dr(e,[r,n,a,t])});Oe(function(e,r,n,a,t,i){return Dr(e,[r,n,a,t,i])});Wa(function(e,r,n,a,t,i,c){return Dr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Dr(e,[r,n,a,t,i,c,l])});fo(function(e,r,n,a,t,i,c,l,u){return Dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return We(e,n)}catch(a){return ye(o(Lo,"This is not valid JSON! "+a.message,r))}});var zc=$(function(e,r){return We(e,r)});function We(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):nr("null",r);case 3:return aa(r)?_i(e.b,r,h):nr("a LIST",r);case 4:return aa(r)?_i(e.b,r,u$):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var v=We(e.b,r[n]);return qe(v)?v:ye(o(Bi,n,v.a));case 7:var a=e.e;if(!aa(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=We(e.b,r[a]);return qe(v)?v:ye(o(rl,a,v.a));case 8:if(typeof r!="object"||r===null||aa(r))return nr("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=We(e.b,r[i]);if(!qe(v))return ye(o(Bi,i,v.a));t=vr(L(i,v.a),t)}return ve(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=We(l[u],r);if(!qe(v))return v;c=c(v.a)}return ve(c);case 10:var v=We(e.b,r);return qe(v)?We(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=We(d.a,r);if(qe(v))return v;s=vr(v.a,s)}return ye(ts(Re(s)));case 1:return ye(o(Lo,e.a,r));case 0:return ve(e.a)}}function _i(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=We(e,r[i]);if(!qe(c))return ye(o(rl,i,c.a));t[i]=c.a}return ve(n(t))}function aa(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function u$(e){return o(ws,e.length,function(r){return e[r]})}function nr(e,r){return ye(o(Lo,"Expecting "+e,r))}function an(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return an(e.b,r.b);case 6:return e.d===r.d&&an(e.b,r.b);case 7:return e.e===r.e&&an(e.b,r.b);case 9:return e.f===r.f&&wi(e.g,r.g);case 10:return e.h===r.h&&an(e.b,r.b);case 11:return wi(e.g,r.g)}}function wi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!an(e[a],r[a]))return!1;return!0}var v$=$(function(e,r){return JSON.stringify(r,null,e)+""});function Pc(e){return e}y(function(e,r,n){return n[e]=r,n});function Or(e){return{$:0,a:e}}function $$(e){return{$:1,a:e}}function xr(e){return{$:2,b:e,c:null}}var Rt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function f$(e){return{$:5,b:e}}var s$=0;function po(e){var r={$:0,e:s$++,f:e,g:null,h:[]};return bo(r),r}function kc(e){return xr(function(r){r(Or(po(e)))})}function Mc(e,r){e.h.push(r),bo(e)}var d$=$(function(e,r){return xr(function(n){Mc(e,r),n(Or(Xn))})}),bt=!1,yi=[];function bo(e){if(yi.push(e),!bt){for(bt=!0;e=yi.shift();)m$(e);bt=!1}}function m$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,bo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function go(e,r,n,a,t,i){var c=o(zc,e,r?r.flags:void 0);qe(c)||mn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=p$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Si(l,b.b,t(v))}return Si(l,u.b,t(v)),d?{ports:d}:{}}var ir={};function p$(e,r){var n;for(var a in ir){var t=ir[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=g$(t,r)}return n}function b$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function g$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Rt,l,f$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?T(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=po(o(Rt,l,e.b))}var h$=$(function(e,r){return xr(function(n){e.g(r),n(Or(Xn))})});$(function(e,r){return o(d$,e.h,{$:0,a:r})});function Dc(e){return function(r){return{$:1,k:e,l:r}}}function _$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var xi=[],gt=!1;function Si(e,r,n){if(xi.push({p:e,q:r,r:n}),!gt){gt=!0;for(var a;a=xi.shift();)w$(a.p,a.q,a.r);gt=!1}}function w$(e,r,n){var a={};ya(!0,r,a,null),ya(!1,n,a,null);for(var t in e)Mc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ya(e,r,n,a){switch(r.$){case 1:var t=r.k,i=y$(e,t,a,r.l);n[t]=x$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ya(e,c.a,n,a);return;case 3:ya(e,r.o,n,{s:r.n,t:a});return}}function y$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ir[r].e:ir[r].f;return o(i,t,a)}function x$(e,r,n){return n=n||{i:z,j:z},e?n.i=vr(r,n.i):n.j=vr(r,n.j),n}function S$(e){ir[e]&&mn(3)}$(function(e,r){return r});function C$(e,r){return S$(e),ir[e]={f:T$,u:r,a:L$},Dc(e)}var T$=$(function(e,r){return function(n){return e(r(n))}});function L$(e,r){var n=z,a=ir[e].u,t=Or(null);ir[e].b=t,ir[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(zc,a,c);qe(l)||mn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var xa,pr=typeof document!="undefined"?document:{};function ho(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Lr(e,function(){}),t),{}});function Nt(e){return{$:0,a:e}}var Ac=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:_o(n),e:t,f:e,b:i}})}),Jr=Ac(void 0),z$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:_o(n),e:t,f:e,b:i}})}),P$=z$(void 0);function k$(e,r,n,a){return{$:3,d:_o(e),g:r,h:n,i:a}}var M$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Ar(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Ar([e,r],function(){return e(r)})});y(function(e,r,n){return Ar([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Ar([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return Ar([e,r,n,a,t],function(){return T(e,r,n,a,t)})});Oe(function(e,r,n,a,t,i){return Ar([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Wa(function(e,r,n,a,t,i,c){return Ar([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return Ar([e,r,n,a,t,i,c,l],function(){return so(e,r,n,a,t,i,c,l)})});fo(function(e,r,n,a,t,i,c,l,u){return Ar([e,r,n,a,t,i,c,l,u],function(){return Ga(e,r,n,a,t,i,c,l,u)})});var Bc=$(function(e,r){return{$:"a0",n:e,o:r}}),D$=$(function(e,r){return{$:"a1",n:e,o:r}}),Fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Wn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function A$(e){return e=="script"?"p":e}function B$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Bc,r.n,F$(e,r.o)):r});function F$(e,r){var n=Do(r);return{$:r.$,a:n?p(ys,n<3?V$:E$,Ve(e),r.a):o(La,e,r.a)}}var V$=$(function(e,r){return L(e(r.a),r.b)}),E$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function _o(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ci(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ci(c,t,i):c[t]=i}return r}function Ci(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Lr(e,r){var n=e.$;if(n===5)return Lr(e.k||(e.k=e.m()),r);if(n===0)return pr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Lr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ht(c,r,e.d),c}var c=e.f?pr.createElementNS(e.f,e.c):pr.createElement(e.c);xa&&e.c=="a"&&c.addEventListener("click",xa(c)),Ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ho(c,Lr(n===1?l[u]:l[u].b,r));return c}function Ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?j$(e,t):a==="a0"?H$(e,r,t):a==="a3"?R$(e,t):a==="a4"?N$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function j$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function R$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function N$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function H$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=X$(r,i),e.addEventListener(t,c,wo&&{passive:Do(i)<2}),a[t]=c}}var wo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wo=!0}}))}catch{}function X$(e,r){function n(a){var t=n.q,i=We(t.a,a);if(!!qe(i)){for(var c=Do(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function W$(e,r){return e.$==r.$&&an(e.a,r.a)}function Vc(e,r){var n=[];return Ze(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Z$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ze(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!G$(d,m):d!==m)&&he(n,2,a,m),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:Ti(e,r,n,a,I$);return;case 2:Ti(e,r,n,a,U$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=yo(e.d,r.d);w&&he(n,4,a,w);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function G$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ti(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=yo(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function yo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=yo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&W$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function I$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ze(s,i[v],n,++a),a+=s.b||0}}function U$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,k=void 0,H=void 0;if(w===x){f++,Ze(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],j=u[m+1];if(R){var N=R.a,X=R.b;H=x===N}if(j){var F=j.a,q=j.b;k=w===F}if(k&&H){f++,Ze(_,q,t,f),_n(i,t,w,C,m,c),f+=_.b||0,f++,wn(i,t,w,X,f),f+=X.b||0,d+=2,m+=2;continue}if(k){f++,_n(i,t,x,C,m,c),Ze(_,q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(H){f++,wn(i,t,w,_,f),f+=_.b||0,f++,Ze(X,C,t,f),f+=X.b||0,d+=2,m+=1;continue}if(R&&N===F){f++,wn(i,t,w,_,f),_n(i,t,x,C,m,c),f+=_.b||0,f++,Ze(X,q,t,f),f+=X.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;wn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];_n(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&he(n,8,a,{w:t,x:c,y:K})}var Ec="_elmW6BL";function _n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}_n(e,r,n+Ec,a,t,i)}function wn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}wn(e,r,n+Ec,a,t)}function jc(e,r,n,a){yn(e,r,n,0,0,r.b,a)}function yn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)jc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&yn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&yn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return yn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=yn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Rc(e,r,n,a){return n.length===0?e:(jc(e,r,n,a),Sa(e,n))}function Sa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=O$(t,a);t===e&&(e=i)}return e}function O$(e,r){switch(r.$){case 0:return J$(e,r.s,r.u);case 4:return Ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Sa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Lr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Sa(e,i.w),e;case 8:return Y$(e,r);case 5:return r.s(e);default:mn(10)}}function J$(e,r,n){var a=e.parentNode,t=Lr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Y$(e,r){var n=r.s,a=q$(n.y,r);e=Sa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Lr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ho(e,a),e}function q$(e,r){if(!!e){for(var n=pr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ho(n,i.c===2?i.s:Lr(i.z,r.u))}return n}}function xo(e){if(e.nodeType===3)return Nt(e.textContent);if(e.nodeType!==1)return Nt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=vr(o(Wn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=vr(xo(v[a]),u);return p(Jr,l,r,u)}function Z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var K$=E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=xo(l);return Nc(i,function(v){var s=c(v),d=Vc(u,s);l=Rc(l,u,d,t),u=s})})});E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=pr.title,v=pr.body,s=xo(v);return Nc(i,function(d){xa=c;var m=l(d),f=Jr("body")(z)(m.er),g=Vc(s,f);v=Rc(v,s,g,t),s=f,xa=0,u!==m.fI&&(pr.title=u=m.fI)})})});var Ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Nc(e,r){r(e);var n=0;function a(){n=n===1?0:(Ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Ca(a),n=2)}}$(function(e,r){return o(Fo,Ao,xr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Fo,Ao,xr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Fo,Ao,xr(function(){history.replaceState({},"",r),e()}))});var Q$={addEventListener:function(){},removeEventListener:function(){}},ef=typeof window!="undefined"?window:Q$;y(function(e,r,n){return kc(xr(function(a){function t(i){po(n(i))}return e.addEventListener(r,t,wo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=We(e,r);return qe(n)?ne(n.a):Y});function Hc(e,r){return xr(function(n){Ca(function(){var a=document.getElementById(e);n(a?Or(r(a)):$$(Ss(e)))})})}function rf(e){return xr(function(r){Ca(function(){r(Or(e()))})})}$(function(e,r){return Hc(r,function(n){return n[e](),Xn})});$(function(e,r){return rf(function(){return ef.scroll(e,r),Xn})});y(function(e,r,n){return Hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Xn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var nf=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var af=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):Y}a.push(T(Fl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):Y}return n(T(Fl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Li=0;function Vn(e,r){for(;r.b;r=r.b)e(r.a)}function So(e){for(var r=0;e.b;e=e.b)r++;return r}var tf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},of=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),cf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),sf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),df=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},pf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Xc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},_f=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},wf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},yf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},zi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xf=[pf,bf,gf,Xc,Wc,hf,_f,wf,yf];function Pi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Sf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Cf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(So(n.b)*s);Vn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Tf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=Lf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*So(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(So(e)*r),a=0,t;return Vn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ki(e,r){return e+"#"+r}var Ic=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Xc(n),Wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ki(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Li++,v||(v=Pi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Li++,s||(s=Pi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Sf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=zf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ki(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Pf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Tf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Cf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Vn(L0(n),i.a),u=0;u<zi.length;u++){var k=n[zi[u]];k.toggle!==n.toggle&&k.enabled&&(xf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Vn(t,e.g),r});function zf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Pf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var kf=y(function(e,r,n){return k$(r,{g:n,f:{},h:e},Ef,jf)}),Mf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=$(function(e,r){e.contextAttributes.antialias=!0}),Ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Vf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ef(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Vn(function(t){return o(T0,r,t)},e.h);var n=pr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tf(function(){return o(Ic,e,n)})):(n=pr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function jf(e,r){return r.f=e.f,Ic(r)}var Rf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Nf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Nf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Co=new Float64Array(3),Mi=new Float64Array(3),Di=new Float64Array(3),Hf=y(function(e,r,n){return new Float64Array([e,r,n])}),Xf=function(e){return e[0]},Wf=function(e){return e[1]},Gf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var If=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Uc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Uc);function Oc(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ta(Uc(e,r,n),n)}$(Oc);function Jc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Ta(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Jc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Uf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),xn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(xn);function Xt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Xt);$(function(e,r){var n,a=Co,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=xn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(xn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(xn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(xn(r,a)+e[14])/n,t});var Of=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Jf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},Yf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/qf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function qf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Zf=new Float64Array(16),Kf=new Float64Array(16),Qf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},es=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Oe(Yc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Yc(c,l,i,t,n,a)});function qc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Oe(qc);E(function(e,r,n,a){return qc(e,r,n,a,-1,1)});function Zc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],k=r[1],H=r[2],R=r[3],j=r[4],N=r[5],X=r[6],F=r[7],q=r[8],K=r[9],ce=r[10],$e=r[11],oe=r[12],de=r[13],Ae=r[14],ze=r[15];return n[0]=a*C+l*k+d*H+b*R,n[1]=t*C+u*k+m*H+w*R,n[2]=i*C+v*k+f*H+x*R,n[3]=c*C+s*k+g*H+_*R,n[4]=a*j+l*N+d*X+b*F,n[5]=t*j+u*N+m*X+w*F,n[6]=i*j+v*N+f*X+x*F,n[7]=c*j+s*N+g*X+_*F,n[8]=a*q+l*K+d*ce+b*$e,n[9]=t*q+u*K+m*ce+w*$e,n[10]=i*q+v*K+f*ce+x*$e,n[11]=c*q+s*K+g*ce+_*$e,n[12]=a*oe+l*de+d*Ae+b*ze,n[13]=t*oe+u*de+m*Ae+w*ze,n[14]=i*oe+v*de+f*Ae+x*ze,n[15]=c*oe+s*de+g*Ae+_*ze,n}$(Zc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],k=r[6],H=r[8],R=r[9],j=r[10],N=r[12],X=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*k,n[5]=t*_+l*C+s*k,n[6]=i*_+u*C+d*k,n[7]=0,n[8]=a*H+c*R+v*j,n[9]=t*H+l*R+s*j,n[10]=i*H+u*R+d*j,n[11]=0,n[12]=a*N+c*X+v*F+m,n[13]=t*N+l*X+s*F+f,n[14]=i*N+u*X+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Ta(r,Co);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Jc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,k=g-f,H=c*c*v+u,R=w+d,j=b+m,N=w-d,X=l*l*v+u,F=n[0],q=n[1],K=n[2],ce=n[3],$e=n[4],oe=n[5],de=n[6],Ae=n[7],ze=n[8],Cr=n[9],Tr=n[10],pt=n[11],ov=n[12],iv=n[13],cv=n[14],lv=n[15];return a[0]=F*x+$e*_+ze*C,a[1]=q*x+oe*_+Cr*C,a[2]=K*x+de*_+Tr*C,a[3]=ce*x+Ae*_+pt*C,a[4]=F*k+$e*H+ze*R,a[5]=q*k+oe*H+Cr*R,a[6]=K*k+de*H+Tr*R,a[7]=ce*k+Ae*H+pt*R,a[8]=F*j+$e*N+ze*X,a[9]=q*j+oe*N+Cr*X,a[10]=K*j+de*N+Tr*X,a[11]=ce*j+Ae*N+pt*X,a[12]=ov,a[13]=iv,a[14]=cv,a[15]=lv,a});function rs(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(rs);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ns(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ns);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Oc(e,r,Co),t=Ta(Xt(n,a,Mi),Mi),i=Ta(Xt(a,t,Di),Di),c=Zf,l=Kf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Zc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=hv,ta=pv,Kc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(ta,e,l,v)}else{var u=c.a;return p(ta,i,l,u)}});return p(ta,i,p(ta,e,r,t),a)}),To=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(To,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Ai=function(e){return p(To,y(function(r,n,a){return o(A,L(r,n),a)}),z,e)},Qc=1,as=2,el=0,ye=function(e){return{$:1,a:e}},Lo=$(function(e,r){return{$:3,a:e,b:r}}),Bi=$(function(e,r){return{$:0,a:e,b:r}}),rl=$(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},ts=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},Y={$:1},os=Iv,is=v$,je=Lc,jr=$(function(e,r){return o(Xv,e,Ia(r))}),zo=$(function(e,r){return h(o(Hv,e,r))}),nl=function(e){return o(jr,`
    `,o(zo,`
`,e))},Gn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ir=function(e){return p(Gn,$(function(r,n){return n+1}),0,e)},cs=_v,ls=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),hr=$(function(e,r){return p(ls,e,r,z)}),al=$(function(e,r){return p(cs,e,o(hr,0,Ir(r)-1),r)}),cr=Kv,tl=function(e){var r=cr(e);return 97<=r&&r<=122},ol=function(e){var r=cr(e);return r<=90&&65<=r},us=function(e){return tl(e)||ol(e)},vs=function(e){var r=cr(e);return r<=57&&48<=r},$s=function(e){return tl(e)||ol(e)||vs(e)},Re=function(e){return p(Gn,A,z,e)},pn=Ev,fs=$(function(e,r){return`

(`+(je(e+1)+(") "+nl(ss(r))))}),ss=function(e){return o(ds,e,z)},ds=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=pn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return us(x)&&o(os,$s,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(je(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(jr,"",Re(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(je(Ir(s))+" ways:"));return o(jr,`

`,o(A,g,o(al,fs,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(jr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(jr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return g+(nl(o(is,4,f))+(`

`+m))}}),Ne=32,Wt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Gt=$v,Po=kv,ko=$(function(e,r){return hi(r)/hi(e)}),ms=zv,En=Po(o(ko,2,Ne)),il=T(Wt,0,En,Gt,Gt),cl=sv,ll=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ul=Mv,It=fv,De=$(function(e,r){return U(e,r)>0?e:r}),ps=function(e){return{$:0,a:e}},Mo=dv,bs=$(function(e,r){e:for(;;){var n=o(Mo,Ne,e),a=n.a,t=n.b,i=o(A,ps(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),gs=function(e){var r=e.a;return r},hs=$(function(e,r){e:for(;;){var n=Po(r/Ne);if(n===1)return o(Mo,Ne,e).a;var a=o(bs,e,z),t=n;e=a,r=t;continue e}}),vl=$(function(e,r){if(r.l){var n=r.l*Ne,a=ul(o(ko,Ne,n-1)),t=e?Re(r.z):r.z,i=o(hs,t,r.l);return T(Wt,It(r.p)+n,o(De,5,a*En),i,r.p)}else return T(Wt,It(r.p),En,Gt,r.p)}),_s=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(vl,!1,{z:a,l:n/Ne|0,p:t});var i=ll(p(cl,Ne,r,e)),c=e,l=r-Ne,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ws=$(function(e,r){if(e<=0)return il;var n=e%Ne,a=p(cl,n,e-n,r),t=e-n-Ne;return S(_s,r,t,e,z,a)}),qe=function(e){return!e.$},D=i$,Z=r$,M=o$,fe=n$,La=c$,ys=l$,Ve=e$,Do=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Jr("div"),xs=function(e){return{$:2,a:e}},$l=$(function(e,r){return e}),fl=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Nr=function(e){return e},Ss=Nr,Fi=Oe(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Cs=Uv,Rr=jv,tn=Wv,In=$(function(e,r){return e<1?r:p(tn,e,Rr(r),r)}),Ua=Jv,Oa=function(e){return e===""},Ja=$(function(e,r){return e<1?"":p(tn,0,e,r)}),sl=Yv,Vi=ge(function(e,r,n,a,t){if(Oa(t)||o(Cs,"@",t))return Y;var i=o(Ua,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=sl(o(In,c+1,t));if(l.$===1)return Y;var u=l;return ne(we(Fi,e,o(Ja,c,t),u,r,n,a))}else return ne(we(Fi,e,t,Y,r,n,a))}),Ei=E(function(e,r,n,a){if(Oa(a))return Y;var t=o(Ua,"/",a);if(t.b){var i=t.a;return S(Vi,e,o(In,i,a),r,n,o(Ja,i,a))}else return S(Vi,e,"/",r,n,a)}),ji=y(function(e,r,n){if(Oa(n))return Y;var a=o(Ua,"?",n);if(a.b){var t=a.a;return T(Ei,e,ne(o(In,t+1,n)),r,o(Ja,t,n))}else return T(Ei,e,Y,r,n)});$(function(e,r){if(Oa(r))return Y;var n=o(Ua,"#",r);if(n.b){var a=n.a;return p(ji,e,ne(o(In,a+1,r)),o(Ja,a,r))}else return p(ji,e,Y,r)});var Ts=Ov,Ao=function(e){},Un=Or,Ls=Un(0),dl=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Gn,e,r,Re(d)):T(dl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Sr=y(function(e,r,n){return T(dl,e,r,0,n)}),Q=$(function(e,r){return p(Sr,$(function(n,a){return o(A,e(n),a)}),z,r)}),za=Rt,Bo=$(function(e,r){return o(za,function(n){return Un(e(n))},r)}),zs=y(function(e,r,n){return o(za,function(a){return o(za,function(t){return Un(o(e,a,t))},n)},r)}),Ps=function(e){return p(Sr,zs(A),Un(z),e)},ks=h$,Ms=$(function(e,r){var n=r;return kc(o(za,ks(e),n))}),Ds=y(function(e,r,n){return o(Bo,function(a){return 0},Ps(o(Q,Ms(e),r)))}),As=y(function(e,r,n){return Un(0)}),Bs=$(function(e,r){var n=r;return o(Bo,e,n)});ir.Task=b$(Ls,Ds,As,Bs);var Fs=Dc("Task"),Fo=$(function(e,r){return Fs(o(Bo,e,r))}),Vs=K$,Es=Fv,Pa={$:1},ml=function(e){return{$:2,a:e}},Ya={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),bn=function(e){var r=e.b.B;return r.a},js=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return ne(o(Ge,r,{B:i,ac:c,U:o(A,a,n)}))}else return Y},pl=function(e){var r=e.b;return o(Ge,Ya,r)},$r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Rs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?pl(n):n;case 2:var i=a.a.cR;return(U(i+r.eH,bn(n).D)>0?o(te,js,$r(o(Ge,Pa,t))):Nr)(o(Ge,ml({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(fl,l.ey,ar(r,{D:l.D+r.eH})),s=o(e,v,u);return o(Ge,Ya,{B:L(v,s),ac:z,U:o(A,t.B,t.U)})}}),bl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ns=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),Hs=$(function(e,r){return Re(p(Ns,e,r,z))}),gl=y(function(e,r,n){if(r<=0)return z;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,_,o(A,c,o(A,s,o(A,b,o(Hs,r-4,w))))):o(A,_,o(A,c,o(A,s,o(A,b,p(gl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Xs=$(function(e,r){return p(gl,0,e,r)}),Ws=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=ue(Re(n),ue(h([a]),t)),c=o(Xs,e,i),l=o(bl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,Pa,{B:u,ac:v,U:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(Ge,Pa,{B:d,ac:z,U:m})}else return r}}),Gs=function(e){var r=e.b;return o(Ge,Pa,r)},Is=function(e){var r=e.b;return o(Ge,ml({cR:bn(e).D}),r)},Us=$(function(e,r){switch(e.$){case 1:return Gs(r);case 2:return pl(r);case 3:return Is(r);default:var n=e.a;return o(Ws,n,r)}}),hl=$(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Os=$(function(e,r){return ar(r,{aw:e(r.aw)})}),Js=function(e){return{$:3,a:e}},Ys=function(e){return{$:2,a:e}},_l=$(function(e,r){return{$:0,a:e,b:r}}),wl=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return Y;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},Vo=qv,qs=y(function(e,r,n){return o($r,0/0,Vo(o(e,r,n)))}),yl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Zs=Nv,xl=function(e){return p(Zs,A,z,e)},Ks=$(function(e,r){var n=o(yl,function(a){return a!=="0"&&a!=="."},xl(r));return ue(e&&n?"-":"",r)}),xe=Lc,Ut=Vv,Sl=Qv,Cl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=pn(n);if(a.$===1)return"01";var t=a.a;return o(Ut,"0",Cl(t))}else{var i=cr(r);return i>=48&&i<57?o(Ut,Sl(i+1),n):"0"}},Ot=Pv,Qs=Bv,qa=function(e){return o(Ut,e,"")},Tl=y(function(e,r,n){return e<=0?n:p(Tl,e>>1,ue(r,r),e&1?ue(n,r):n)}),jn=$(function(e,r){return p(Tl,e,r,"")}),Jt=y(function(e,r,n){return ue(n,o(jn,e-Rr(n),qa(r)))}),Yt=Rv,Ll=function(e){var r=o(zo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},ed=function(e){var r=o(zo,"e",xe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,sl(o(Ts,"+",t)?o(In,1,t):t)),c=Ll(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?o($r,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,hl(qa),pn(ue(o(jn,O(i),"0"),v))))):p(Jt,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},rd=y(function(e,r,n){if(Ot(n)||Qs(n))return xe(n);var a=n<0,t=Ll(ed(O(n))),i=t.a,c=t.b,l=Rr(i)+r,u=ue(o(jn,-l+1,"0"),p(Jt,l,"0",ue(i,c))),v=Rr(u),s=o(De,1,l),d=o(e,a,p(tn,s,v,u)),m=p(tn,0,s,u),f=d?Yt(o($r,"1",o(Ce,Cl,pn(Yt(m))))):m,g=Rr(f),b=f==="0"?f:r<=0?ue(f,o(jn,O(r),"0")):U(r,Rr(c))<0?p(tn,0,g-r,f)+("."+p(tn,g-r,g,f)):ue(i+".",p(Jt,r,"0",c));return o(Ks,a,b)}),zl=rd($(function(e,r){var n=pn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(cr(t))})),nd=qs(zl),ad=y(function(e,r,n){var a=o(ko,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(nd,t,n)}),Pl=gv,Za=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Pl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),fr={$:-2},$n=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),qt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,fr,fr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Pl,e,t);switch(u){case 0:return S($n,a,t,i,p(qt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S($n,a,t,i,c,p(qt,e,r,l))}}),zn=y(function(e,r,n){var a=p(qt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),td=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},kl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Ri=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},od=Wa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ri(r)}else break e;else return c.a,c.d,Ri(r);else break e;return r}}),da=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,da(t),l);var u=kl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S($n,v,s,d,da(m),f)}else return fr}else return S(G,r,n,a,da(t),l)}else return fr},Pn=$(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(Pn,e,i),c);var u=kl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S($n,v,s,d,o(Pn,e,m),f)}else return fr}else return S(G,n,a,t,o(Pn,e,i),c);else return o(id,e,so(od,e,r,n,a,t,i,c))}),id=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(kr(e,a)){var l=td(c);if(l.$===-1){var u=l.b,v=l.c;return S($n,n,u,v,i,da(c))}else return fr}else return S($n,n,a,t,i,o(Pn,e,c))}else return fr}),cd=$(function(e,r){var n=o(Pn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),oa=y(function(e,r,n){var a=r(o(Za,e,n));if(a.$)return o(cd,e,n);var t=a.a;return p(zn,e,t,n)}),ld=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(wl,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(_l,L(i,c),p(ad,i,c,n))}));case 3:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$===3?Js(n):a}));default:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$===2?Ys(n):a}))}},ud=function(e){return Os(ld(e))},vd=$(function(e,r){return o(Q,ud(e),r)}),$d=$(function(e,r){return ar(r,{ey:o(vd,e,r.ey)})}),fd=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,ar(a,{B:o(hl,$d(e),a.B)}))}),sd=$(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),dd=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,ar(t,{B:o(sd,o(e,i.a,r),i)}))}),md=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ar(a,{aM:!a.aM});case 2:var t=n.a;return ar(a,{H:p(Rs,e,t,a.H)});case 3:var i=n.a;return ar(a,{H:o(fd,i,a.H)});case 4:var c=n.a;return ar(a,{H:p(dd,r,c,a.H)});default:var l=n.a;return ar(a,{H:o(Us,l,a.H)})}}),pd=$(function(e,r){return o(Ge,Ya,{B:L(e,r(e)),ac:z,U:z})}),bd=_$,Ni=bd(z),ka=t$,Rn=a$,gd=C$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ve({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ve({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ka(Rn)))},o(M,"left",Z))},o(M,"pressedKeys",ka(Rn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ve({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ve({eV:n,fR:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ve({eB:r,eC:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe))))),hd=function(e){return{$:4,a:e}},_d={$:0},wd=Pc,Je=$(function(e,r){return o(Fc,e,wd(r))}),J=Je("className"),yd=function(e){var r=e.b.B;return r.b},Ma=Je("id"),xd=M$,Da=xd,Sd=D$,be=Sd,Cd={$:1},Td=function(e){return{$:3,a:e}},Ld=function(e){return{$:5,a:e}},Hi=Jr("a"),Eo=Jr("button"),zd=Wn("d"),Ml=Ac("http://www.w3.org/2000/svg"),Pd=Ml("path"),kd=Ml("svg"),Md=Wn("viewBox"),kn=function(e){return o(kd,h([Md("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),h([o(Pd,h([zd(e)]),z)]))},Xi=function(e){return o(Je,"href",B$(e))},cn={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Dd=function(e){return{$:0,a:e}},Dl=Bc,Al=$(function(e,r){return o(Dl,e,Dd(r))}),jo=function(e){return o(Al,"click",Ve(e))},Wi=Je("target"),Ad=Je("title"),Zt=$(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Zt,e,i),o(Zt,e,c))}),Bd=Nt,_r=Bd,Fd=function(e){return p(To,y(function(r,n,a){return o(A,n,a)}),z,e)},Vd=$(function(e,r){return{$:3,a:e,b:r}}),Ed=$(function(e,r){return{$:2,a:e,b:r}}),jd=$(function(e,r){return{$:0,a:e,b:r}}),Rd=$(function(e,r){return{$:1,a:e,b:r}}),Ye=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Nd=T(Ye,0/255,0/255,0/255,1),Hd=Pc,Xd=$(function(e,r){return o(Fc,e,Hd(r))}),Wd=Xd("checked"),Qe=Dv,Gd=y(function(e,r,n){return ue(o(jn,e-Rr(n),qa(r)),n)}),Aa=yv,Bl=function(e){var r=function(n){return n<10?je(n):qa(Sl(87+n))};return e<16?r(e):ue(Bl(e/16|0),r(o(Aa,16,e)))},Id=o(te,Bl,o(Gd,2,"0")),Ro=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},Ud=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return o(jr,"",o(A,"#",o(Q,o(te,Qe,Id),h([n*255,a*255,t*255]))))},Kt=Je("htmlFor"),Qt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),Ba=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Od=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ka=$(function(e,r){return p(Sr,Od(e),z,r)}),Fl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),Jd=af,Yd=Zv,qd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ve(n)}),Zd=nf,Kd=function(e){return o(Zd,{et:!1,fc:!1},e)},Qa=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return Y},Qd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ve(e(n))}}),em=function(e){return{$:2,a:e}},rm=function(e){return{$:0,a:e}},nm=function(e){return{$:1,a:e}},ht=$(function(e,r){return cr(r)-cr(e)}),_t=y(function(e,r,n){var a=cr(n);return U(cr(e),a)<1&&U(a,cr(r))<1}),am=$(function(e,r){var n=function(t){return U(t,e)<0?ve(t):ye(nm(r))},a=p(_t,"0","9",r)?ve(o(ht,"0",r)):p(_t,"a","z",r)?ve(10+o(ht,"a",r)):p(_t,"A","Z",r)?ve(10+o(ht,"A",r)):ye(rm(r));return o(Ba,n,a)}),Vl=$(function(e,r){var n=pn(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Ba,function(c){return o(Ba,function(l){return ve(c+l*e)},o(Vl,e,i))},o(am,e,t))}),tm=$(function(e,r){return 2<=e&&e<=36?o(Vl,e,Yt(r)):ye(em(e))}),om=tm(16),im=y(function(e,r,n){return T(Ye,e,r,n,1)}),cm=E(function(e,r,n,a){return T(Ye,e,r,n,a)}),On=wv,lm=$(function(e,r){var n=o(On,10,e);return Qe(r*n)/n}),um=Gv,vm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=xl(n);if(a.b&&!a.b.b){var t=a.a;return Yd(h([t,t]))}else return n};return o(te,um,o(te,function(n){return o(Ce,function(a){return p(Jd,1,a,n)},Kd(e))},o(te,Qt(Qa),o(te,Ce(function(n){return n.fD}),o(te,Ce(Ka(Nr)),o(te,qd("Parsing hex regex failed"),Ba(function(n){var a=o(Q,o(te,r,o(te,om,Qd(ms))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ve(T(cm,t/255,c/255,u/255,o(lm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(im,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),Fa=Jr("input"),eo=Jr("label"),ro=Je("name"),El=$(function(e,r){return p(Sr,M,r,e)}),$m=o(El,h(["target","checked"]),Z),fm=function(e){return o(Al,"change",o(La,e,$m))},sm=function(e){return L(e,!0)},dm=function(e){return{$:1,a:e}},mm=$(function(e,r){return o(Dl,e,dm(r))}),pm=o(El,h(["target","value"]),Rn),No=function(e){return o(mm,"input",o(La,sm,o(La,e,pm)))},jl=Je("max"),Rl=Je("min"),Nl=function(e){return o(Je,"step",e)},Va=Je("type"),Ho=Je("value"),Gi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,z,h([o(eo,h([Kt(r)]),h([o(I,h([J("relative w-full")]),h([o(I,h([J("inline-block")]),h([_r(r)])),o(I,h([J("inline-block float-right")]),h([_r(xe(n))]))]))])),o(Fa,h([Va("range"),o(be,"width","100%"),Ma(r),ro(r),Rl(xe(a)),jl(xe(t)),Ho(xe(n)),Nl(xe(i)),No(o(te,Vo,o(te,$r(42),c)))]),z)]))},bm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,z,h([o(I,h([J("mb-2")]),h([o(eo,h([Kt(e)]),h([_r(e)]))])),o(Fa,h([Va("checkbox"),Ma(e),ro(e),fm(Vd(e)),Wd(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Gi({b9:e,cl:i,cp:t,ct:jd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Gi({b9:e,cl:i,cp:t,ct:o(te,Qe,Rd(e)),cP:1,cW:c});default:var c=r.a;return o(I,z,h([o(I,h([o(be,"margin-bottom","6px")]),h([o(eo,h([Kt(e)]),h([_r(e)]))])),o(Fa,h([Va("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),Ma(e),ro(e),No(function(l){return o(Ed,e,o(bm,Nd,vm(l)))}),Ho(Ud(c))]),z)]))}}),hm=function(e){return o(I,h([J("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([J("text-lg pb-2")]),h([_r(e.fd)])),o(I,h([J("pl-2 pr-2")]),Fd(o(Zt,gm,e.aw)))]))},_m=function(e){return o(I,h([J("text-xs text-white60")]),o(Q,hm,e))},wm=function(e){return o(I,h([J("absolute left-[104px] bottom-2 text-sm text-white40")]),h([_r("clock: "+o(zl,3,bn(e).D))]))},ym=function(e){e.a;var r=e.b.U;return o(Ce,function(n){return Qe(60/(bn(e).D-n))},o(Ce,o(te,gs,function(n){return n.D}),Qa(o(bl,59,r))))},xm=function(e){return o(I,h([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ym(e);if(r.$===1)return h([_r("... Fps")]);var n=r.a;return h([_r(je(n)+" Fps")])}())},Sm=function(e){return{$:0,a:e}},Cm=function(e){var r=e.b.U;return Ir(r)},Tm=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return Ir(r)+1+Ir(n)},Lm=function(e){return o(Fa,h([J("absolute left-[100px] w-[490px]"),Va("range"),Rl(je(0)),jl(je(Tm(e)-1)),Ho(je(Cm(e))),Nl(je(1)),No(o(te,Vo,o(te,$r(42),o(te,Qe,Sm))))]),z)},Ii={$:1},zm={$:3},Pm={$:2},Hl=function(e){return!e.b},Ui=$(function(e,r){return o(Eo,h([J("px-2 bg-black40"),J(r),jo(e)]),h([_r("REC")]))}),Oi=$(function(e,r){return o(Eo,h([J("absolute left-[60px] mx-1 px-1 bg-black40"),jo(r)]),h([o(I,h([J("w-4 h-6 fill-white80")]),h([kn(e)]))]))}),km=function(e){var r=e.a,n=e.b.ac;return o(I,h([J("py-1")]),h([function(){switch(r.$){case 0:return o(Ui,Ii,"text-red-500 font-bold");case 1:return o(Ui,Pm,"text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return Hl(n)?o(I,z,z):o(Oi,cn.fm,zm);default:return o(Oi,cn.fl,Ii)}}()]))},Mm=function(e){return o(I,h([J("pl-4 py-4 border-[0.5px] border-white20 bg-black20")]),h([Lm(e),km(e),xm(e),wm(e)]))},Dm=function(e){var r=e.a;return kr(r,Ya)},Am=$(function(e,r){var n=Dm(r.H)?o(I,z,z):o(I,h([J("absolute pointer-events-none w-8 h-8"),o(be,"left",xe(e.fn.fT+.5*e.cM.fR)+"px"),o(be,"top",xe(-e.fn.fX+.5*e.cM.eV)+"px")]),h([o(I,h([J(e.fn.e1?"fill-black80":"fill-white40")]),h([kn(cn.fn)]))]));return o(I,z,h([n]))}),Bm=$(function(e,r){var n=o(Eo,h([J(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),jo(Cd),Ad("Distraction Free Mode")]),h([kn(cn.f$)])),a=o(I,h([J("absolute w-8 bottom-12")]),h([o(Hi,h([J("fill-twitterBlue40 hover:fill-twitterBlue"),Xi("https://twitter.com/AzizErkalSelman"),Wi("_blank")]),h([kn(cn.fK)]))])),t=o(I,h([J("absolute w-8 bottom-2")]),h([o(Hi,h([J("fill-githubCat40 hover:fill-githubCat"),Xi("https://github.com/erkal/elm-3d-playground-exploration"),Wi("_blank")]),h([kn(cn.eP)]))]));return r.aM?o(I,h([J("fixed w-10 h-10 p-1")]),h([n])):o(I,z,h([o(I,h([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([J("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),h([o(Da,Td,_m(bn(r.H).ey))])),o(I,h([J("absolute bottom-0 left-[300px] w-[600px] h-16")]),h([o(Da,Ld,Mm(r.H))])),o(Am,e,r)]))}),Fm=y(function(e,r,n){var a=yd(n.H),t=bn(n.H);return o(I,h([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(be,"width",xe(t.cM.fR)+"px"),o(be,"height",xe(t.cM.eV)+"px")]),h([o(I,h([J("fixed")]),h([o(Da,$l(_d),o(e,t,a))])),o(I,h([Ma("gui")]),h([o(Bm,t,n),o(Da,hd,o(r,t,a))]))]))}),Vm=Oe(function(e,r,n,a,t,i){var c=$(function(u,v){return L(T(md,r,i,u,v),Ni)}),l=function(u){var v=o(fl,n,u.e0);return L({aM:u.e0.cM.fR<500,H:o(pd,v,a)},Ni)};return Vs({e$:l,fE:$l(gd(xs)),fL:c,fO:o(Fm,e,t)})}),Em=E(function(e,r,n,a){return we(Vm,e,r,n,a,$(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),jm=function(e){return{}},Rm=y(function(e,r,n){return{aw:n,e2:r,fd:e}}),Xl=fr,Nm=function(e){return p(Gn,$(function(r,n){var a=r.a,t=r.b;return p(zn,a,t,n)}),Xl,e)},Hm=y(function(e,r,n){return p(Rm,e,r,Nm(n))}),Ji=Hm,hn=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(_l,L(a,t),n))}),Xm=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(wl,L(a,t),n))}),_e=xv,Wm=h([p(Ji,"Parameters",!0,h([p(Xm,"number of tree blocks",L(1,20),16),p(hn,"turning speed of the tree",L(.1,4),1)])),p(Ji,"Lighting",!0,h([p(hn,"azimuth for third light",L(-_e,_e),1),p(hn,"elevation for third light",L(-_e,_e),-2),p(hn,"azimuth for fourth light",L(-_e,_e),1),p(hn,"elevation for fourth light",L(-_e,_e),-2)]))]),Gm=$(function(e,r){return r}),wr=function(e){return e},Sn=function(e){return wr(_e*(e/180))},mr=Av,Im=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(De,O(c),o(De,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=mr(s*s+v*v+u*u);return ne({fT:s/d,fX:v/d,c$:u/d})}else return Y}),ma=function(e){return e},Xo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),pa=function(e){var r=e,n=o(De,O(r.fT),o(De,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c$:a/c})}else return Y},Ea=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Um=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),Wl=$(function(e,r){var n=e,a=r;return U(a,n)>0}),Om=$(function(e,r){var n=e,a=r;return U(a,n)<0}),Jm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Ym=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),qm=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},tr=0,Gl={fT:0,fX:0,c$:0},Zm=y(function(e,r,n){return o(Qt,function(a){var t=o(Jm,o(Ym,a,r),r);return o(Qt,function(i){var c=o(Xo,r,e),l=o(Um,n,c),u=o(Wl,tr,l)?c:o(Om,tr,l)?qm(c):Gl;return o(Ce,function(v){return B(a,i,v)},pa(u))},pa(t))},pa(e))}),Km=function(e){var r=e,n=O(r.c$),a=O(r.fX),t=O(r.fT);if(U(t,a)<1)if(U(t,n)<1){var i=mr(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=mr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(U(a,n)<1){var i=mr(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=mr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},Wo=function(e){var r=Km(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return L(r,c)},on=function(e){var r=e;return r},er=function(e){return e},Qm=$(function(e,r){var n=Wo(e),a=n.a,t=n.b;return er({cu:r,cZ:a,c_:t,c0:e})}),e0=function(e){var r=o(Ea,e.aS,e.dc),n=on(e.ee),a=o(Xo,r,n),t=p(Zm,r,n,a);if(t.$){var v=pa(r);if(v.$){var d=Wo(e.ee),m=d.a,f=d.b;return er({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Qm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return er({cu:e.dc,cZ:u,c_:l,c0:c})}},Pe={fT:0,fX:0,c$:0},r0=function(e){return{$:0,a:e}},ie=function(e){var r=e;return O(r)},ba=function(e){var r=e;return .5*r},n0=Tv,a0=function(e){var r=e;return n0(r)},t0=function(e){var r=ba(ie(e.ef)),n=a0(r);return{cF:r0(n),cX:e.cX}},br=function(e){return e},et=br({fT:0,fX:1,c$:0}),o0=function(e){var r=e.aS,n=e.dc,a=e.ee;return t0({ef:Sn(40),cX:e0({dc:ma(n),aS:ma(r),ee:o($r,et,o(Im,Pe,ma(a)))})})},i0=o0({dc:{fT:5,fX:5,c$:12},aS:{fT:0,fX:1,c$:0},ee:{fT:0,fX:1,c$:0}}),Go=function(e){return e},Il=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),c0=function(e){var r=e;return r},l0=function(e){var r=p(Il,1667,25e3,c0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Go({fT:n,fX:a})},u0=function(e){return e},v0=function(e){return{$:0,a:e}},$0=v0,f0={$:3},s0=f0,d0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),m0=d0,p0=$(function(e,r){return r.b?p(Sr,A,r,e):e}),Ie=function(e){return p(Sr,p0,z,e)},Io=$(function(e,r){return Ie(o(Q,e,r))}),b0=function(e){return{$:1,a:e}},g0=b0,h0=function(e){return o(Wn,"height",je(e))},_0=function(e){return P$(A$(e))},w0=_0,y0=function(e){return{$:2,a:e}},x0=y0,S0=function(e){return o(jr,"",e)},C0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return S0(h(["rgba(",xe(c(r)),"%,",xe(c(n)),"%,",xe(c(a)),"%,",xe(i(t)),")"]))},T0=$(function(e,r){switch(r.$){case 0:return o(Mf,e,r);case 1:return o(Df,e,r);case 2:return o(Af,e,r);case 3:return o(Bf,e,r);case 4:return o(Ff,e,r);default:return o(Vf,e,r)}}),L0=$(function(e,r){switch(r.$){case 0:return o(cf,e,r);case 1:return o(lf,e,r);case 2:return o(uf,e,r);case 3:return o(vf,e,r);case 4:return o($f,e,r);case 5:return o(ff,e,r);case 6:return o(sf,e,r);case 7:return o(df,e,r);default:return mf(e)}}),z0=y(function(e,r,n){return p(kf,e,r,n)}),Yi=function(e){var r=e;return r},gn=Of,wt=T(gn,1,1,1,1),rr=y(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),P0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),k0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(P0,n*a/t,n,n*(1-a-t)/t)}),Jn=Hf,M0=function(e){var r=e.a,n=e.b,a=e.c;return p(Jn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},rt=$(function(e,r){return M0(o(k0,e,r))}),Ul=$(function(e,r){return{dk:kr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),or=Qf,D0=function(e){return or({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},yt=ge(function(e,r,n,a,t){var i=a.dk?1:-1,c=T(gn,a.bW,a.bW,a.bW,i);return we(t,e,c,D0(a),a.dk,r,n)}),Ol=Oe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ul,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(yt,e,r,n,a,g),i.N);return{N:b,V:i.V,fx:i.fx};case 3:var w=t.b,x=o(A,S(yt,e,r,n,a,w),i.V);return{N:i.N,V:x,fx:i.fx};case 2:var _=t.a,C=o(A,S(yt,e,r,n,a,_),i.fx);return{N:i.N,V:i.V,fx:C};default:var k=t.a;return p(Gn,T(Ol,e,r,n,a),i,k)}}),A0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Jl=A0,Uo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),B0=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,518,r,n,a)},F0=$(function(e,r){return{$:6,a:e,b:r}}),V0=F0,Yl=h([B0({W:1,X:0,_:!1}),T(Jl,!1,!1,!1,!1),o(V0,0,1)]),fn=519,Oo=8,ql=15,ln=7681,E0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=of,j0=$(function(e,r){return{$:0,a:e,b:r}}),R0=j0({c8:1,dh:0,dQ:5}),Ee=Rf,N0=R0(h([{dY:o(Ee,-1,-1)},{dY:o(Ee,1,-1)},{dY:o(Ee,-1,1)},{dY:o(Ee,1,1)}])),H0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},X0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Jo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(X0,a,t,i)))}),Yo=function(e){return p(Jo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},qo=function(e){return S(ae,h([Yo(e),T(Jl,!1,!1,!1,!1)]),H0,E0,N0,{})},W0=qo({a9:ln,ci:0,cH:Oo,bm:fn,cY:ql,bu:ln,bv:ln}),G0=516,qi=5386,Te=7680,I0=function(e){return o(On,2,e+4)},Zl=function(e){return qo({a9:Te,ci:ql,cH:Oo,bm:G0,cY:I0(e),bu:qi,bv:qi})},U0=y(function(e,r,n){return Ie(h([p(rr,e,n,Yl),h([Zl(r),W0])]))}),O0=$(function(e,r){return Ie(o(al,U0(e),r))}),J0=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,513,r,n,a)},Y0=J0({W:1,X:0,_:!0}),q0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Z0=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return q0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},K0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zi=$(function(e,r){var n=e,a=r;return p(K0,32774,n,a)}),Q0=1,Ki=771,ep=770,Zo=Z0({bw:0,aI:o(Zi,Q0,Ki),bz:0,bB:o(Zi,ep,Ki),bF:0,bU:0}),en=h([Y0,Zo]),rp=function(e){var r=e;return r.dJ},np=function(e){var r=e;return r.dK},Kl=function(e){var r=e;return r.dL},ap=function(e){var r=e;return r.dM},tp=function(e){var r=e;return r.dN},Ql=function(e){var r=e;return r.dO},gr=$(function(e,r){var n=e,a=r;return a-n}),eu=function(e){return B(o(gr,ap(e),rp(e)),o(gr,tp(e),np(e)),o(gr,Ql(e),Kl(e)))},Yr=function(e){var r=e;return r.cu},Qi=function(e){var r=e;return Yr(r)},op=function(e){return e},ip=function(e){return er({cu:op({fT:e.I,fX:e.J,c$:e.K}),cZ:br({fT:e.q,fX:e.r,c$:e.s}),c_:br({fT:e.t,fX:e.u,c$:e.v}),c0:br({fT:e.w,fX:e.x,c$:e.y})})},xt=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),ru=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Br=function(e){var r=e;return r.cZ},Fr=function(e){var r=e;return r.c_},Vr=function(e){var r=e;return r.c0},nu=$(function(e,r){return{cu:o(ru,e,Yr(r)),cZ:o(xt,e,Br(r)),c_:o(xt,e,Fr(r)),c0:o(xt,e,Vr(r))}}),zr=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),ja=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(De,n,a)}),Mn=$(function(e,r){return U(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(Mn,n,a)}),cp=$(function(e,r){var n=ja(r),a=ja(e);return{dJ:o(le,a.dJ,n.dJ),dK:o(le,a.dK,n.dK),dL:o(le,a.dL,n.dL),dM:o(se,a.dM,n.dM),dN:o(se,a.dN,n.dN),dO:o(se,a.dO,n.dO)}}),Ue=function(e){var r=e;return r},lp=function(e){var r=e;return B(r.fT,r.fX,r.c$)},Dn=$(function(e,r){var n=e,a=r;return a+n}),up=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ba(ie(a)),c=ba(ie(n)),l=ba(ie(t)),u=lp(r),v=u.a,s=u.b,d=u.c;return{dJ:o(Dn,c,v),dK:o(Dn,i,s),dL:o(Dn,l,d),dM:o(gr,c,v),dN:o(gr,i,s),dO:o(gr,l,d)}}),ec=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=Ue(Vr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c$),f=Ue(Fr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c$),b=Ue(Br(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c$),x=o(up,B(w,g,m),o(ru,e,p(zr,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(cp,_,x))}),no=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=T(ec,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=T(ec,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=T(no,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(nu,ip(v),e),m=r*v.bW,f=e,g=r,b=T(no,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),qr=Xf,Zr=Wf,Kr=Gf,au=function(e){return{$:4,a:e}},vp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Yn=function(e){return au(o(vp,e,z))},$p={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},fp=function(e){var r=e;return r},rc=qo({a9:ln,ci:0,cH:Oo,bm:fn,cY:255,bu:ln,bv:ln}),sp=function(e){var r=e,n=o(De,O(r.fT),o(De,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return c*n}else return tr},Fe={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fT:0,fX:0,c$:0},Xe=$(function(e,r){var n=e,a=r;return or({ds:n.fT,dt:n.bU,du:a.fT,dv:a.bU,dw:n.fX,dx:n.bF,dy:a.fX,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),Cn=L({be:o(Xe,Fe,Fe),bK:o(Xe,Fe,Fe),bL:o(Xe,Fe,Fe),bM:o(Xe,Fe,Fe)},T(gn,0,0,0,0)),ee=$(function(e,r){var n=r;return e*n}),nc=function(e){var r=e;return-r},tu=514,ou=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,515,r,n,a)},iu=240,dp=h([ou({W:1,X:0,_:!0}),Yo({a9:Te,ci:iu,cH:0,bm:tu,cY:0,bu:Te,bv:Te}),Zo]),mp=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=ie(a),l=c,u=ie(t),v=u,s=n.cF;if(s.$){var m=s.a;return Ot(v)?or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Ot(v)?or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),ia=$(function(e,r){return(1&e>>r)===1?0:1}),pp=function(e){return h([ou({W:1,X:0,_:!0}),Yo({a9:Te,ci:iu,cH:e,bm:tu,cY:0,bu:Te,bv:Te}),Zo])},bp=y(function(e,r,n){return Ie(o(Q,function(a){var t=a<<4,i=T(gn,o(ia,a,0),o(ia,a,1),o(ia,a,2),o(ia,a,3));return p(rr,e,L(r,i),pp(t))},o(hr,1,o(On,2,n)-1)))}),Pr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},un=function(e){var r=e;return r},gp=es,ac=function(e){var r=e;return Pr(Vr(r))},cu=br({fT:1,fX:0,c$:0}),Ko=cu,Qo=et,ei=br({fT:0,fX:0,c$:1}),lu=ei,hp={cu:Pe,cZ:Ko,c_:Qo,c0:lu},qn=function(e){var r=e;return r},_p=function(e){var r=qn(Yr(e)),n=Ue(Vr(e)),a=Ue(Fr(e)),t=Ue(Br(e));return or({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},wp=$(function(e,r){var n=r;return _p(o(nu,n,e))}),yp=function(e){return o(wp,hp,e)},xp=function(e){var r=e;return r.cX},Sp=function(e){var r=e;return Br(r)},Cp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),Tp=function(e){var r=e;return Fr(r)},Lp=function(e){var r=xp(e.es),n=er({cu:Qi(r),cZ:Sp(r),c_:Tp(r),c0:Pr(ac(r))}),a=Yn(e.aQ),t=a,i=T(no,n,1,Y,h([t]));if(i.$===1)return z;var c=i.a,l=yp(r),u=o(ee,.99,o(le,ie(e.ex),nc(Kl(c)))),v=eu(c),s=v.a,d=v.b,m=v.c,f=sp(p(Cp,s,d,m)),g=o(ee,1.01,o(Dn,f,nc(Ql(c)))),b=o(mp,e.es,{en:e.en,eO:g,fe:u}),w=gp(b).dH,x=w?Ue(Pr(ac(r))):un(Qi(r)),_=function(){var oe=e.fJ;switch(oe.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var de=oe.a;return L(3,de);case 4:var de=oe.a;return L(4,de);default:return L(5,0)}}(),C=_.a,k=_.b,H=e.eM,R=H,j=o(rt,R,e.fQ),N=j,X=or({ds:0,dt:x.fT,du:qr(N),dv:e.d8,dw:0,dx:x.fX,dy:Zr(N),dz:fp(f),dA:0,dB:x.c$,dC:Kr(N),dD:C,dE:0,dF:w,dG:0,dH:k}),F=we(Ol,X,l,b,$p,t,{N:z,V:z,fx:z}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ie(h([p(rr,F.N,L(K,wt),en),p(rr,F.V,Cn,en)]));case 1:var K=q.a;return Ie(h([p(rr,F.N,Cn,en),h([rc]),p(rr,F.fx,K.be,Yl),h([Zl(0)]),p(rr,F.N,L(K,wt),dp),p(rr,F.V,Cn,en)]));default:var ce=q.a,$e=q.b;return Ie(h([p(rr,F.N,L($e,wt),en),h([rc]),o(O0,F.fx,ce),p(bp,F.N,$e,Ir(ce)),p(rr,F.V,Cn,en)]))}},zp=function(e){return o(Wn,"width",je(e))},Pp=$(function(e,r){var n=h([g0(1),x0(0),$0(!0),T(m0,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return B(n,"0",1);case 1:return B(o(A,s0,n),"1",1);default:var k=C.a;return B(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Yi(v),d=o(be,"height",je(s)+"px"),m=Yi(u),f=m/s,g=o(Io,function(C){return Lp({en:f,es:e.es,ex:e.ex,aQ:C.aQ,eM:C.eM,e8:C.e8,d8:c,fJ:C.fJ,fQ:C.fQ})},r),b=o(be,"width",je(m)+"px"),w=e.aJ,x=w,_=C0(x);return p(w0,"div",h([o(be,"padding","0px"),b,d]),h([L(i,p(z0,t,h([zp(Qe(m*c)),h0(Qe(s*c)),b,d,o(be,"display","block"),o(be,"background-color",_)]),g))]))}),kp=function(e){return{$:2,a:e}},Mp=function(e){return kp(e)},Dp=function(e){return o(Pp,{el:Mp(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},h([{aQ:e.aQ,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},tc=function(e){return e},lr=function(e){return e},Ap=function(e){var r=e;return r},nt=function(e){var r=e;return Ap(r.eo)},uu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Bp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),vu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),$u=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Fp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Vp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Ep=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ri=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return T(Ep,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return T(uu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return T(Bp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return T(vu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return T(Vp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return T($u,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return T(Fp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ni={$:0},jp=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ja(c(u)),d=o(se,s.dM,e),m=o(le,s.dJ,r),f=o(se,s.dN,n),g=o(le,s.dK,a),b=o(se,s.dO,t),w=o(le,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Rp=y(function(e,r,n){var a=ja(e(r));return Ga(jp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),St=$(function(e,r){var n=e,a=r;return U(a,n)<1}),fu=function(e){return o(St,e.dJ,e.dM)&&o(St,e.dK,e.dN)&&o(St,e.dL,e.dO)?e:{dJ:o(le,e.dM,e.dJ),dK:o(le,e.dN,e.dK),dL:o(le,e.dO,e.dL),dM:o(se,e.dM,e.dJ),dN:o(se,e.dN,e.dK),dO:o(se,e.dO,e.dL)}},Nn=function(e){var r=e;return r},Hr=function(e){var r=e;return r.fT},Xr=function(e){var r=e;return r.fX},Wr=function(e){var r=e;return r.c$},su=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=Hr(n),c=Xr(n),l=Wr(n),u=Hr(a),v=Xr(a),s=Wr(a),d=Hr(t),m=Xr(t),f=Wr(t);return fu({dJ:o(le,i,o(le,u,d)),dK:o(le,c,o(le,v,m)),dL:o(le,l,o(le,s,f)),dM:o(se,i,o(se,u,d)),dN:o(se,c,o(se,v,m)),dO:o(se,l,o(se,s,f))})},du=If,ke=function(e){return du(qn(e))},mu=function(e){var r=e;return r},at=function(e){return du(mu(e))},pu=function(e){return e},Np=$(function(e,r){var n=e,a=r,t=o(De,O(a.fT),o(De,O(a.fX),O(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=mr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return Gl}),Hp=Np(pu(1)),bu=y(function(e,r,n){var a=o(Ea,r,n),t=o(Ea,e,r);return Hp(o(Xo,a,t))}),Xp=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=at(p(bu,n,a,t));return B({o:i,dY:ke(n)},{o:i,dY:ke(a)},{o:i,dY:ke(t)})},Wp=$(function(e,r){return{$:2,a:e,b:r}}),gu=Wp({c8:3,dh:0,dQ:4}),Gp=function(e){if(e.b){var r=e.a,n=e.b,a=gu(o(Q,Xp,e)),t=p(Rp,su,r,n);return T(uu,t,e,a,0)}else return ni},Be=y(function(e,r,n){return B(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),hu=function(){var e=lr(1),r=lr(1),n=lr(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=p(me,i,t,a),l=o(ee,.5,e),u=p(me,i,t,l),v=o(ee,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ee,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return ri(Gp(h([p(Be,c,g,f),p(Be,c,s,g),p(Be,u,b,w),p(Be,u,w,d),p(Be,f,g,w),p(Be,f,w,b),p(Be,c,d,s),p(Be,c,u,d),p(Be,c,f,b),p(Be,c,b,u),p(Be,s,w,g),p(Be,s,d,w)])))}(),ca={$:0},Ip=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Up=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=at(p(bu,u,l,c)),s={o:v,dY:ke(u)},d={o:v,dY:ke(l)},m={o:v,dY:ke(c)};return o(A,s,o(A,d,o(A,m,n)))}),ai=function(e){var r=e;return r.E},Op=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return ne(p(e,t,i,c))}),ao=4294967295>>>32-En,to=mv,Jp=y(function(e,r,n){e:for(;;){var a=ao&r>>>e,t=o(to,a,n);if(t.$){var v=t.a;return o(to,ao&r,v)}else{var i=t.a,c=e-En,l=r,u=i;e=c,r=l,n=u;continue e}}}),Yp=function(e){return e>>>5<<5},qp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?Y:U(e,Yp(n))>-1?ne(o(to,ao&e,i)):ne(p(Jp,a,e,t))}),ti=function(e){var r=e;return r.ai},Ct=$(function(e,r){return o(qp,e,ti(r))}),Zp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return T(Op,y(function(c,l,u){return B(c,l,u)}),o(Ct,a,e),o(Ct,t,e),o(Ct,i,e))};return o(Ka,r,ai(e))},Kp=y(function(e,r,n){e:for(;;){var a=o(Mo,Ne,e),t=a.a,i=a.b;if(U(It(t),Ne)<0)return o(vl,!0,{z:r,l:n,p:t});var c=i,l=o(A,ll(t),r),u=n+1;e=c,r=l,n=u;continue e}}),oi=function(e){return e.b?p(Kp,e,z,0):il},Qp=y(function(e,r,n){return e(r(n))}),e3=$(function(e,r){return!o(yl,o(Qp,Es,e),r)}),r3=$(function(e,r){return p(Sr,$(function(n,a){return e(n)?o(A,n,a):a}),z,r)}),n3=function(e){var r=e.a;return r},_u=$(function(e,r){var n=n3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(e3,a,r)?{E:r,ai:e}:{E:o(r3,a,r),ai:e}}),a3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Zn=a3({c8:1,dh:3,dQ:4}),ga=$(function(e,r){var n=un(r),a=un(e);return L(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),oc=p(Jn,0,0,0),Tt=Oe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Za,o(ga,e,r),t);if(v.$){var d={o:oc,dY:ke(r)},m={o:oc,dY:ke(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),t3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,k=we(Tt,s,m,f,b,r,we(Tt,d,s,g,f,r,we(Tt,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=k;continue e}else{var H=t,R=H.a,j=H.b;return L(R,Re(j))}}),o3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(zn,o(ga,m,s),f,p(zn,o(ga,s,d),g,p(zn,o(ga,d,m),b,t))),x=o(A,B(b,g,f),a),_=e,C=v,k=n+3,H=x,R=w;e=_,r=C,n=k,a=H,t=R;continue e}else return B(a,t,n)}),Er=y(function(e,r,n){var a=Zp(n),t=p(Sr,Up(r),z,a),i=S(o3,r,a,0,z,Xl),c=i.a,l=i.b,u=i.c,v=S(t3,r,l,a,0,B(c,z,u)),s=v.a,d=v.b,m=Hl(d)?t:ue(t,d);return p(Ip,e,o(_u,oi(m),s),o(Zn,m,s))}),oo=function(e){return{E:o(Q,function(r){return B(3*r,3*r+1,3*r+2)},o(hr,0,Ir(e)-1)),ai:oi(Ie(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},wu=function(e){switch(e.$){case 0:return ca;case 1:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Er,a,Nr,oo(n));case 2:var a=e.a,r=e.b,n=o(Q,Nn,r);return p(Er,a,Nr,oo(n));case 3:var a=e.a,t=e.b;return p(Er,a,Nr,t);case 4:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 8:return ca;case 9:return ca;default:return ca}},ic=wu(hu),tt=function(e){var r=e;return r.aL},yu={$:0},P=yu,pe=$(function(e,r){return{$:1,a:e,b:r}}),i3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},c3=1029,l3=function(e){return{$:5,a:e}},xu=function(e){var r=e;return l3(r)},u3=xu(c3),v3=1028,$3=xu(v3),Me=y(function(e,r,n){return r===1?e?o(A,u3,n):o(A,$3,n):n}),Su={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Lt=E(function(e,r,n,a){return o(pe,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Me,l,a,d),Su,i3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ii={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ax"}},Cu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sr=E(function(e,r,n,a){return o(pe,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Me,l,a,d),Cu,ii,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),Tu=$(function(e,r){return{$:3,a:e,b:r}}),f3={src:`
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
    `,attributes:{},uniforms:{constantColor:"ax",pointRadius:"bS",sceneProperties:"e"}},Lu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},s3=E(function(e,r,n,a){return o(Tu,n,re(function(t,i,c,l,u,v,s,d){return S(ae,d,Lu,f3,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ci={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Kn=function(e){var r=e;return r},ot=Uf,dr=ge(function(e,r,n,a,t){return o(pe,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Me,u,t,m),Cu,ci,a,{aO:o(ot,Kn(r),e),b:l,c,d:s,e:i,f:v})}))}),d3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},m3=ge(function(e,r,n,a,t){return o(Tu,a,re(function(i,c,l,u,v,s,d,m){return S(ae,m,Lu,d3,t,{aO:o(ot,Kn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),zu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},Pu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},la=E(function(e,r,n,a){return o(pe,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Pu,zu,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),ku={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},p3=Oe(function(e,r,n,a,t,i){return o(pe,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Me,v,i,f),Mu,ku,t,{Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Du={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},b3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(pe,u,re(function(d,m,f,g,b,w,x,_){var C=x.a,k=x.b;return S(ae,p(Me,g,s,_),Mu,Du,v,{b0:e,b2:r,b3:i,b4:a,Q:k,be:C.be,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aX:c,d:w,cL:n,e:d,a0:l,f:b})}))}}}}}}}}}}},Au={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},ua=Oe(function(e,r,n,a,t,i){return o(pe,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Me,v,i,f),Pu,Au,t,{b$:e,Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),g3=function(e){return{$:0,a:e}},cc=$(function(e,r){return{$:1,a:e,b:r}}),An=$(function(e,r){if(r.$){var n=r.a.C;return L(n,1)}else return r.a,L(e,0)}),h3=function(e){return T(gn,qr(e),Zr(e),Kr(e),1)},li=T(gn,0,0,0,0),ha=$(function(e,r){if(r.$){var a=r.a.C;return L(a,li)}else{var n=r.a;return L(e,h3(n))}}),Bu=$(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.C;return o(cc,L(t,li),o(An,t,r))}else if(n.b.$){var t=n.b.a.C;return o(cc,o(ha,t,e),o(An,t,r))}else{var a=n.a.a;return n.b.a,g3(a)}}),_3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),va=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),w3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),y3=function(e){return o(Ee,e,1)},io=o(Ee,0,0),rn=$(function(e,r){if(r.$){var a=r.a.C;return L(a,io)}else{var n=r.a;return L(e,y3(n))}}),Fu=E(function(e,r,n,a){var t=T(w3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return T(va,L(u,li),o(rn,u,r),o(rn,u,n),o(An,u,a))}else if(t.b.$){var u=t.b.a.C;return T(va,o(ha,u,e),L(u,io),o(rn,u,n),o(An,u,a))}else if(t.c.$){var u=t.c.a.C;return T(va,o(ha,u,e),o(rn,u,r),L(u,io),o(An,u,a))}else if(t.d.$){var u=t.d.a.C;return T(va,o(ha,u,e),o(rn,u,r),o(rn,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(_3,i,c,l)}}),x3={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},zt=ge(function(e,r,n,a,t){return o(pe,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Me,u,t,m),Su,x3,a,{bZ:Kn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Vu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},S3=E(function(e,r,n,a){return o(pe,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Vu,ku,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),C3=fo(function(e,r,n,a,t,i,c,l,u){return o(pe,c,re(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Me,m,u,w),Vu,Du,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:x.be,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:d,c:s,aX:e,d:g,cL:n,e:v,a0:0,f})}))}),Hn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),T3=function(e){var r=e;return p(Hn,r.dM,r.dJ,.5)},L3=function(e){var r=e;return p(Hn,r.dN,r.dK,.5)},z3=function(e){var r=e;return p(Hn,r.dO,r.dL,.5)},P3=function(e){return p(me,T3(e),L3(e),z3(e))},W=function(e){var r=eu(e),n=r.a,a=r.b,t=r.c;return{ev:qn(P3(e)),eR:n/2,eS:a/2,eT:t/2}},ui=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(sr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return T(sr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return T(sr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return T(s3,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(dr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(dr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(dr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(m3,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Bu,s,R);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(S3,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(p3,b,x,_,W(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return T(la,m,W(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return T(la,m,W(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(la,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return T(la,m,W(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var C=e.b,k=e.c,H=e.d,R=e.e,j=T(Fu,C,k,H,R);if(j.$){var q=j.a,K=q.a,ce=q.b,$e=j.b,oe=$e.a,de=$e.b,Ae=j.c,ze=Ae.a,Cr=Ae.b,Tr=j.d,x=Tr.a,_=Tr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return vv(C3,K,ce,oe,de,ze,Cr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return b3(K)(ce)(oe)(de)(ze)(Cr)(x)(_)(W(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=j.a,X=j.b,F=j.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return we(ua,N,X,F,W(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return we(ua,N,X,F,W(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return we(ua,N,X,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(ua,N,X,F,W(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),Pt=function(e){var r=e;return r.fT},kt=function(e){var r=e;return r.fX},Mt=function(e){var r=e;return r.c$},k3=function(e){var r=e,n=Mt(r.c0),a=kt(r.c0),t=Pt(r.c0),i=Mt(r.c_),c=kt(r.c_),l=Pt(r.c_),u=Mt(r.cZ),v=kt(r.cZ),s=Pt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},M3=function(e){var r=qn(Yr(e)),n=Ue(Vr(e)),a=Ue(Fr(e)),t=Ue(Br(e));return{dk:k3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,I:r.fT,J:r.fX,K:r.c$,bW:1}},nn=$(function(e,r){return{$:5,a:e,b:r}}),Eu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Ul,a,e);return o(nn,i,t);case 1:return o(nn,e,n);case 3:return o(nn,e,n);case 2:return o(nn,e,n);default:return o(nn,e,n)}}),ju=$(function(e,r){return o(Eu,M3(e),r)}),it=function(e){return{$:2,a:e}},D3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),A3=Yf,B3=Jf,lc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=B3(a),g=f.fT,b=f.fX,w=f.c$,x=f.ei,_=A3({ei:x,fT:g*s,fX:b*d,c$:w*m});return Ga(r,n,_,t,i,c,l,u,v)}}}}}}}}}},co=$(function(e,r){switch(r.$){case 0:return yu;case 5:var n=r.a,a=r.b;return o(nn,n,o(co,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(D3,e,t),o(lc,e,i));case 3:return r;case 2:var i=r.a;return it(o(lc,e,i));default:var c=r.a;return au(o(Q,co(e),c))}}),vi=$(function(e,r){var n=r;return o(co,e,n)}),$i={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ru=7683,Nu=7682,F3=p(Jo,{ci:0,cH:0,cY:15},{a9:Te,bm:fn,bu:Te,bv:Ru},{a9:Te,bm:fn,bu:Te,bv:Nu}),V3=p(Jo,{ci:0,cH:0,cY:15},{a9:Te,bm:fn,bu:Te,bv:Nu},{a9:Te,bm:fn,bu:Te,bv:Ru}),fi=$(function(e,r){return e?o(A,V3,r):o(A,F3,r)}),E3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},j3=function(e){if(e.$){var r=e.c;return ne(re(function(n,a,t,i,c,l,u,v){return S(ae,o(fi,i,v),E3,$i,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return Y},Ra=function(e){var r=j3(e);if(r.$)return P;var n=r.a;return it(n)},R3=E(function(e,r,n,a){var t=o(ui,n,hu),i=function(){var s=L(e,r);return s.a?s.b?Yn(h([t,Ra(ic)])):t:s.b?Ra(ic):P}(),c=tt(a),l=c.a,u=c.b,v=c.c;return o(ju,nt(a),o(vi,B(l,u,v),i))}),N3=$(function(e,r){return T(R3,!0,!0,e,r)}),lo=function(e){return{$:0,a:e}},Hu=$(function(e,r){return{$:0,a:e,b:r}}),H3=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(Jn,n,a,t)},X3=function(e){return o(Hu,0,lo(H3(e)))},si=function(e){var r=e;return r.k},Ur=Sv,Bn=function(e){var r=e;return Ur(r)},W3=$(function(e,r){var n=r;return n/e}),sn=Cv,uc=function(e){var r=e;return{fT:Ur(r),fX:sn(r)}},G3=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:at(a),dY:ke(n)},r)}),I3=Wa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Kr(l.dY),s=Zr(l.dY),d=qr(l.dY),m=o(Mn,e,d),f=o(De,r,d),g=o(Mn,n,s),b=o(De,a,s),w=o(Mn,t,v),x=o(De,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return fu({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Xu=$(function(e,r){var n=Kr(e.dY),a=Zr(e.dY),t=qr(e.dY);return so(I3,t,t,a,a,n,n,r)}),U3=function(e){var r=p(Kc,G3,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(Zn,r,ai(e)),i=o(Xu,n,a);return T(vu,i,e,t,0)}else return ni},Wu=br({fT:0,fX:0,c$:-1}),vc=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Na=function(e){var r=e;return sn(r)},uo=function(e){return wr(2*_e*e)},O3=Nr,$c=O3({cu:Pe,cZ:Ko,c_:Qo}),Gu=function(){var e=72,r=o(W3,e,uo(1)),n=lr(1),a=on(ei),t=on(Wu),i=lr(1),c=o(ee,.5,i),l=p(me,tr,tr,c),u=o(ee,-.5,i),v=p(me,tr,tr,u),s=function(f){var g=o(ee,f,r),b=on(o(vc,$c,uc(g))),w=o(ee,Bn(g),n),x=o(ee,Na(g),n),_=p(me,w,x,c),C=p(me,w,x,u),k=o(Aa,e,f+1),H=o(ee,k,r),R=on(o(vc,$c,uc(H))),j=o(ee,Bn(H),n),N=o(ee,Na(H),n),X=p(me,j,N,u),F=p(me,j,N,c);return h([B({o:t,dY:v},{o:t,dY:X},{o:t,dY:C}),B({o:b,dY:C},{o:R,dY:X},{o:R,dY:F}),B({o:b,dY:C},{o:R,dY:F},{o:b,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(Q,s,o(hr,0,e-1)),m=oo(Ie(d));return ri(U3(m))}(),fc=wu(Gu),Iu=function(e){var r=e;return r.eE},Uu=function(e){var r=e;return r.cu},J3=function(e){var r=Iu(e),n=Wo(r),a=n.a,t=n.b;return er({cu:Uu(e),cZ:a,c_:t,c0:r})},Ou=function(e){var r=e;return r.e6},Ju=function(e){var r=e;return r.fp},Y3=E(function(e,r,n,a){var t=J3(si(a)),i=o(ui,n,Gu),c=function(){var d=L(e,r);return d.a?d.b?Yn(h([i,Ra(fc)])):i:d.b?Ra(fc):P}(),l=Ju(a),u=l,v=Ou(a),s=v;return o(ju,t,o(vi,B(u,u,s),c))}),q3=$(function(e,r){return T(Y3,!0,!0,e,r)}),sc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},dc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Tn=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=un(n),c=un(a),l=un(t);return or({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},$a=gu(h([B({cS:0},{cS:1},{cS:2})])),Z3=$(function(e,r){var n=su(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(pe,a,re(function(_,C,k,H,R,j,N,X){return S(ae,p(Me,H,0,X),sc,ii,$a,{ax:t,b:k,c:C,d:j,e:_,br:Tn(r),f:R})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(pe,a,re(function(_,C,k,H,R,j,N,X){return S(ae,p(Me,H,0,X),sc,ci,$a,{aO:o(ot,Kn(c),i),b:k,c:C,d:j,e:_,br:Tn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Bu,l,f);if(u.$)return P;var v=u.a;return o(pe,a,re(function(_,C,k,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(Me,H,0,X),dc,zu,$a,{Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:k,c:C,d:j,e:_,br:Tn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=T(Fu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(pe,a,re(function(_,C,k,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(Me,H,0,X),dc,Au,$a,{b$:b,Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:k,c:C,d:j,cK:w,e:_,br:Tn(r),f:R})}))}}),K3=function(){var e=h([{a$:o(Ee,0,1)},{a$:o(Ee,1,1)},{a$:o(Ee,2,1)},{a$:o(Ee,0,-1)},{a$:o(Ee,1,-1)},{a$:o(Ee,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Zn,e,r)}(),Q3={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},mc=function(e){return it(re(function(r,n,a,t,i,c,l,u){return S(ae,o(fi,t,u),Q3,$i,K3,{b:a,c:n,d:c,e:r,bX:l,br:Tn(e),f:i})}))},eb=E(function(e,r,n,a){var t=o(Z3,n,a),i=L(e,r);return i.a?i.b?Yn(h([t,mc(a)])):t:i.b?mc(a):P}),rb=$(function(e,r){return T(eb,!0,!0,e,r)}),di=function(e){var r=e;return r},nb=$(function(e,r){var n=Wr(r),a=Wr(e),t=Xr(r),i=Xr(e),c=Hr(r),l=Hr(e);return{dJ:o(le,l,c),dK:o(le,i,t),dL:o(le,a,n),dM:o(se,l,c),dN:o(se,i,t),dO:o(se,a,n)}}),ab=function(e){var r=di(e),n=r.a,a=r.b;return o(nb,n,a)},pc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tb=$(function(e,r){return{$:1,a:e,b:r}}),ob=tb({c8:2,dh:0,dQ:1}),bc=ob(h([L({dr:0},{dr:1})])),ib=$(function(e,r){var n=ab(r),a=W(n),t=di(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(pe,a,re(function(v,s,d,m,f,g,b,w){return S(ae,w,pc,ii,bc,{ax:l,dp:ke(c),dq:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(pe,a,re(function(s,d,m,f,g,b,w,x){return S(ae,x,pc,ci,bc,{aO:o(ot,Kn(u),l),dp:ke(c),dq:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),cb=$(function(e,r){return o(ib,e,r)}),ct=function(e){var r=e;return r.ev},lt=function(e){var r=e;return r.fp},gc=$(function(e,r){var n=e,a=r;return n/a}),lb=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(kr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),hc=$(function(e,r){return e<1?z:S(lb,0,e,e,r,z)}),ub=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(A,{o:at(a),dY:ke(n),M:o(Ee,c,l)},r)}),vb=function(e){var r=p(Kc,ub,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(Zn,r,ai(e)),i=o(Xu,n,a);return T($u,i,e,t,0)}else return ni},mi=$(function(e,r){var n=e,a=r,t=Ur(a);return{fT:t*Ur(n),fX:t*sn(n),c$:sn(a)}}),$b=function(){var e=lr(1),r=72,n=o(hr,0,r-1),a=o(hc,r,o(Hn,tr,uo(1))),t=Po(r/2),i=o(hr,0,t-1),c=o(hc,t,o(Hn,Sn(90),Sn(-90))),l=oi(Ie(o(Q,function(s){return o(Q,function(d){return{o:on(o(mi,s,d)),dY:p(me,o(ee,Bn(d)*Bn(s),e),o(ee,Bn(d)*Na(s),e),o(ee,Na(d),e)),M:L(o(gc,s,uo(1)),o(gc,o(Dn,Sn(90),d),Sn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ie(o(Q,function(s){return Ie(o(Q,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return ri(vb(o(_u,l,v)))}(),Ha=72,fa=2*Ha,fb=$(function(e,r){e:for(;;){var n=fa+1,a=o(Aa,fa,2*e+3),t=o(Aa,fa,2*e+2),i=2*e+1,c=2*e,l=fa,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),sb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),db=$(function(e,r){e:for(;;){var n=p(sb,0,2*_e,e/Ha),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),mb=function(){var e=o(db,Ha-1,h([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(fb,Ha-1,z);return o(Zn,e,r)}(),pb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},_c=function(e){return it(re(function(r,n,a,t,i,c,l,u){return S(ae,o(fi,!0,u),pb,$i,mb,{ax:p(Jn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},bb=function(e){var r=mu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fT,J:r.fX,K:r.c$,bW:1}},gb=$(function(e,r){return o(Eu,bb(e),r)}),hb=E(function(e,r,n,a){var t=o(ui,n,$b),i=function(){var u=L(e,r);return u.a?u.b?Yn(h([t,_c()])):t:u.b?_c():P}(),c=lt(a),l=c;return o(gb,o(Ea,Pe,ct(a)),o(vi,B(l,l,l),i))}),_b=$(function(e,r){return T(hb,!0,!0,e,r)}),wb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Yu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),yb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),xb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Hu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(wb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Yu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(yb,n,a,t,i,c)}},Sb=xb,qu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(N3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(rb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(_b,Sb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(q3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(cb,X3(c),l)]);default:var u=e.a;return o(Io,qu,u)}},Cb=function(e){return o(Io,qu,e)},Tb=$(function(e,r){return Dp({el:e.el,aJ:u0(e.ep),es:e.es,ex:lr(e.ex),b5:e.b5,aL:L(tc(Qe(e.cM.fR)),tc(Qe(e.cM.eV))),aQ:Cb(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),Zu=function(e){return e},Lb=$(function(e,r){var n=e,a=Ue(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(rt,r.bH,r.aK),u=l;return{bz:Kr(u),eu:n,bF:Zr(u),cD:0,bU:qr(u),cT:1,fT:-t,fX:-i,c$:-c}}),zb=function(e){return o(Lb,Zu(!0),{aK:e.aK,eE:o(mi,wr(e.by),wr(e.bD)),bH:e.bH})},Pb=function(e){return e},kb=function(e){return Pb(1.2*o(On,2,e))},Dt=Go({fT:.37208,fX:.37529}),Mb=$(function(e,r){return{$:2,a:e,b:r}}),Ku=function(e){return{$:0,a:e}},sa=function(e){var r=e;return r},Db=function(e){var r=e;return r.eu},Ab=Ku(Cn.a),Bb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(A,a,i),c):L(i,o(A,a,c))});return p(Sr,n,L(z,z),r)}),Fb=function(e){var r=e;return or({ds:r.fT,dt:r.bU,du:0,dv:0,dw:r.fX,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Vb=re(function(e,r,n,a,t,i,c,l){var u=o(Bb,Db,h([sa(e),sa(r),sa(n),sa(a)])),v=u.a,s=u.b;if(v.b){var d=ue(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Mb,o(Q,Fb,v),{be:o(Xe,m,g),bK:o(Xe,w,_),bL:o(Xe,t,i),bM:o(Xe,c,l)})}else return Ab}else return Ku({be:o(Xe,e,r),bK:o(Xe,n,a),bL:o(Xe,t,i),bM:o(Xe,c,l)})}),Eb=E(function(e,r,n,a){return Ga(Vb,e,r,n,a,Fe,Fe,Fe,Fe)}),jb=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(Za,e,r.aw))}),Rb=$(function(e,r){return o($r,0,Qa(o(Ka,jb(e),r)))}),Nb=$(function(e,r){return o(Rb,e,r.ey)}),Ln=Nb,Hb={$:5},Xb=Hb,Wb=Go({fT:.44757,fX:.40745}),Gb=function(e){return e},Qu=T(Ye,114/255,159/255,207/255,1),wc=function(e){return e},At=function(e){return e},Ib={$:1},Ub=Ib,Ob=$(function(e,r){var n=e,a=qn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(rt,r.bH,r.aK),u=l;return{bz:Kr(u),eu:n,bF:Zr(u),cD:0,bU:qr(u),cT:2,fT:t,fX:i,c$:c}}),yc=function(e){return o(Ob,Zu(!0),{aK:e.aK,bH:e.bH,dY:ma(e.dY)})},ev=T(Ye,52/255,101/255,164/255,1),Qn=$(function(e,r){return{$:0,a:e,b:r}}),Bt=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),Ft=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Jb=br({fT:-1,fX:0,c$:0}),Yb=br({fT:0,fX:-1,c$:0}),qb=Oe(function(e,r,n,a,t,i){var c=o(Bt,n,i)?ei:Wu,l=o(Bt,r,t)?et:Yb,u=o(Bt,e,a)?cu:Jb,v=B(ie(o(gr,e,a)),ie(o(gr,r,t)),ie(o(gr,n,i))),s=p(me,o(Ft,e,a),o(Ft,r,t),o(Ft,n,i)),d=er({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aL:v}}),rv=$(function(e,r){return we(qb,Hr(e),Xr(e),Wr(e),Hr(r),Xr(r),Wr(r))}),vn=$(function(e,r){var n=r/2;return o(Qn,e,o(rv,p(zr,-n,-n,-n),p(zr,n,n,n)))}),ut=function(e){return{$:5,a:e}},He=function(e){return ut(e)},nv=T(Ye,138/255,226/255,52/255,1),Zb=T(Ye,173/255,127/255,168/255,1),Vt=function(e){return p(Il,0,1,e<=.04045?e/12.92:o(On,(e+.055)/1.055,2.4))},Kb=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(Jn,Vt(n),Vt(a),Vt(t))},Le=function(e){return p(Yu,0,lo(Kb(e)),lo(0))},vt=$(function(e,r){return{$:2,a:e,b:r}}),pi=$(function(e,r){return{$:4,a:e,b:r}}),$t=$(function(e,r){return{$:3,a:e,b:r}}),ft=$(function(e,r){return{$:1,a:e,b:r}}),Qb=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),ea=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),eg=$(function(e,r){return er({cu:o(ea,e,Yr(r)),cZ:Br(r),c_:Fr(r),c0:Vr(r)})}),rg=$(function(e,r){return{eo:o(eg,e,nt(r)),aL:tt(r)}}),Qr=$(function(e,r){return{eE:r,cu:e}}),ng=$(function(e,r){var n=r;return o(Qr,o(ea,e,n.cu),n.eE)}),ag=$(function(e,r){var n=r;return{k:o(ng,e,n.k),e6:n.e6,fp:n.fp}}),tg=function(e){return e},bi=$(function(e,r){var n=di(r),a=n.a,t=n.b;return tg(L(e(a),e(t)))}),og=$(function(e,r){return o(bi,ea(e),r)}),st=$(function(e,r){return{ev:r,fp:ie(e)}}),ig=$(function(e,r){return o(st,lt(r),o(ea,e,ct(r)))}),gi=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),cg=$(function(e,r){return o(gi,ea(e),r)}),dt=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Qb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Qn,s,o(rg,i,c));case 1:var s=r.a,l=r.b;return o(ft,s,o(cg,i,l));case 3:var s=r.a,u=r.b;return o($t,s,o(ig,i,u));case 2:var s=r.a,v=r.b;return o(vt,s,o(ag,i,v));case 4:var s=r.a,d=r.b;return o(pi,s,o(og,i,d));default:var m=r.a;return ut(o(Q,dt(B(n,a,t)),m))}}),yr=function(e){return dt(B(e,0,0))},Se=function(e){return dt(B(0,e,0))},_a=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=sn(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c$*u,k=l*C,H=2*(w-k),R=2*(w+k),j=d*C,N=2*(j+b),X=2*(j-b),F=g*C,q=2*(F-m),K=2*(F+m),ce=C*C,$e=1-2*(x+ce),oe=1-2*(f+ce);return{fT:$e*i.fT+H*i.fX+N*i.c$,fX:R*i.fT+oe*i.fX+q*i.c$,c$:X*i.fT+K*i.fX+_*i.c$}}),ra=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=sn(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,x=l*w,_=w*w,C=b.fX*u,k=l*C,H=w*C,R=C*C,j=1-2*(_+R),N=b.c$*u,X=l*N,F=2*(H-X),q=2*(H+X),K=w*N,ce=2*(K+k),$e=2*(K-k),oe=C*N,de=2*(oe-x),Ae=2*(oe+x),ze=N*N,Cr=1-2*(R+ze),Tr=1-2*(_+ze);return{fT:s.fT+Cr*d+F*m+ce*f,fX:s.fX+q*d+Tr*m+de*f,c$:s.c$+$e*d+Ae*m+j*f}}),lg=y(function(e,r,n){return er({cu:p(ra,e,r,Yr(n)),cZ:p(_a,e,r,Br(n)),c_:p(_a,e,r,Fr(n)),c0:p(_a,e,r,Vr(n))})}),ug=y(function(e,r,n){return{eo:p(lg,e,r,nt(n)),aL:tt(n)}}),vg=$(function(e,r){var n=o(ra,e,r),a=o(_a,e,r);return function(t){var i=t;return o(Qr,n(i.cu),a(i.eE))}}),$g=y(function(e,r,n){var a=n;return{k:p(vg,e,r,a.k),e6:a.e6,fp:a.fp}}),fg=y(function(e,r,n){return o(bi,o(ra,e,r),n)}),sg=y(function(e,r,n){return o(st,lt(n),p(ra,e,r,ct(n)))}),dg=y(function(e,r,n){return o(gi,o(ra,e,r),n)}),mt=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Qn,l,p(ug,e,r,a));case 1:var l=n.a,t=n.b;return o(ft,l,p(dg,e,r,t));case 3:var l=n.a,i=n.b;return o($t,l,p(sg,e,r,i));case 2:var l=n.a,c=n.b;return o(vt,l,p($g,e,r,c));case 4:var l=n.a,u=n.b;return o(pi,l,p(fg,e,r,u));default:var v=n.a;return ut(o(Q,o(mt,e,r),v))}}),mg=o(Qr,Pe,Ko),Xa=$(function(e,r){return p(mt,mg,wr(e),r)}),pg=o(Qr,Pe,Qo),ur=$(function(e,r){return p(mt,pg,wr(e),r)}),bg=o(Qr,Pe,lu),dn=$(function(e,r){return p(mt,bg,wr(e),r)}),av=$(function(e,r){return(r-ul(r/e)*e)/e}),Ke=$(function(e,r){return 360*o(av,e,r)}),gg=Lv,Gr=function(e){return e*_e/180},hg=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(ft,e,p(Be,p(zr,n.fT,n.fX,n.c$),p(zr,a.fT,a.fX,a.c$),p(zr,t.fT,t.fX,t.c$)))}),wa=T(Ye,255/255,255/255,255/255,1),tv=function(){var e=mr(3)/2,r=o(hg,Le(wa),B({fT:e,fX:0,c$:0},{fT:0,fX:.5,c$:0},{fT:0,fX:-.5,c$:0})),n=o(yr,-(e/3),o(ur,gg(1/3),r));return o(Se,-(e/3),o(Xa,Gr(90),He(h([o(yr,-(e/3),r),n,o(dn,Gr(120),n),o(dn,Gr(240),n)]))))}(),_g=function(e){var r=function(n){return o(dn,o(Ke,300,e.D),o(ur,o(Ke,300,e.D),o(Xa,o(Ke,300,e.D),n)))};return He(h([o(Se,2,o(yr,-2,r(o(vn,Le(nv),1)))),o(Se,2,o(yr,2,r(o(vn,Le(ev),1)))),o(Se,4,r(o(vn,Le(Zb),1))),o(Se,1.5,r(tv))]))},vo=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Qn,e,o(rv,p(zr,-c,-l,-u),p(zr,c,l,u)))}),wg=y(function(e,r,n){return{k:o(Qr,e,r),e6:ie(n.e6),fp:ie(n.fp)}}),yg=y(function(e,r,n){return o(vt,e,p(wg,Pe,et,{e6:lr(n),fp:lr(r)}))}),na=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c$:a.c$+r*(t.c$-a.c$)}}),xg=y(function(e,r,n){var a=nt(n),t=Br(a),i=Fr(a),c=Vr(a),l=p(na,e,r,Yr(a)),u=r>=0?er({cu:l,cZ:t,c_:i,c0:c}):er({cu:l,cZ:Pr(t),c_:Pr(i),c0:Pr(c)}),v=tt(n),s=v.a,d=v.b,m=v.c,f=ie(o(ee,r,s)),g=ie(o(ee,r,d)),b=ie(o(ee,r,m));return{eo:u,aL:B(f,g,b)}}),xc=function(e){return Iu(si(e))},Sg=function(e){return Uu(si(e))},Cg=y(function(e,r,n){var a=ie(o(ee,r,Ju(n))),t=ie(o(ee,r,Ou(n))),i=r>=0?xc(n):Pr(xc(n)),c=p(na,e,r,Sg(n));return{k:o(Qr,c,i),e6:t,fp:a}}),Tg=y(function(e,r,n){return o(bi,o(na,e,r),n)}),Lg=y(function(e,r,n){return o(st,o(ee,O(r),lt(n)),p(na,e,r,ct(n)))}),zg=y(function(e,r,n){return o(gi,o(na,e,r),n)}),Fn=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Qn,c,p(xg,Pe,e,n));case 1:var c=r.a,a=r.b;return o(ft,c,p(zg,Pe,e,a));case 3:var c=r.a,t=r.b;return o($t,c,p(Lg,Pe,e,t));case 2:var c=r.a,i=r.b;return o(vt,c,p(Cg,Pe,e,i));case 4:var c=r.a,l=r.b;return o(pi,c,p(Tg,Pe,e,l));default:var u=r.a;return ut(o(Q,Fn(e),u))}}),Pg=function(){var e=He(h([o(vn,Le(wa),1),o(ur,Gr(45),o(vn,Le(wa),1))]));return He(h([He(h([e,o(Se,-.4,o(Fn,1.3,e))])),o(Se,-.7,p(yg,Le(wa),1,.5))]))}(),Sc=T(Ye,211/255,215/255,207/255,1),kg=T(Ye,193/255,125/255,17/255,1),Mg=$(function(e,r){return o(Ce,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Za,e,r.aw))}),Dg=$(function(e,r){return o($r,0,Qa(o(Ka,Mg(e),r)))}),Ag=$(function(e,r){return o(Dg,e,r.ey)}),Bg=Ag,Fg=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return T(Ye,f,m,d,a)}),Vg=y(function(e,r,n){return T(Fg,e,r,n,1)}),Eg=function(e){return 2*_e*e},$o=E(function(e,r,n,a){return e+(r-e)*(1+Ur(Eg(o(av,n,a))))/2}),jg=function(e){var r=o(Bg,"number of tree blocks",e),n=function(a){var t=o(Mn,2,.2*(r-a)),i=p(Vg,T($o,a/r,1,10,e.D),.6,.6),c=.25;return o(ur,o(Ln,"turning speed of the tree",e)*a*T($o,3,5,10,e.D),o(Se,a*1.2*c,o(vo,Le(i),B(t,c,t))))};return He(h([o(vo,Le(kg),B(.2,8,.2)),He(o(Q,n,o(hr,0,r-1)))]))},Rg=function(e){var r=function(a){return o(Se,-1,o(vo,a,B(10,1,10)))},n=function(a){return He(h([r(a),o(ur,Gr(45),r(a))]))};return o(ur,o(Ke,1e3,e.D),He(h([Pg,n(Le(Sc)),o(Se,-.1,o(Fn,1.1,n(Le(ev)))),o(Se,-.2,o(Fn,1.2,n(Le(Sc)))),o(Se,1,o(yr,5,jg(e))),He(o(Q,function(a){return o(ur,Gr(a*45),o(Se,-1/3,o(yr,5.5,o(Fn,2,tv))))},o(hr,1,7)))])))},Ng=T(Ye,245/255,121/255,0/255,1),Hg=function(e){var r=14;return He(o(Q,function(n){return o(Se,4,o(dn,o(Ke,1e3,e.D),o(Xa,o(Ke,1e3,e.D),o(ur,-o(Ke,200,e.D),o(ur,-(n/r*Gr(360)),o(yr,1.3,o(Se,T($o,-1,1,10,e.D),o(Xa,o(Ke,600,e.D),o(dn,o(Ke,300,e.D),o(vn,Le(Ng),.3))))))))))},o(hr,0,r-1)))},Xg=function(e){return dt(B(0,0,e))},Cc=$(function(e,r){return o($t,e,o(st,lr(r),Pe))}),Wg=function(e){return He(h([o(ur,-o(Ke,640,e.D),o(Xg,3.5,o(dn,o(Ke,100,e.D),He(h([o(yr,-.02,o(Cc,Le(Qu),.5)),o(yr,.02,o(Cc,Le(nv),.5))])))))]))},Gg=$(function(e,r){return h([Rg(e),_g(e),Hg(e),Wg(e)])}),Tc=function(e){var r=e;return r},Ig=function(e){e:for(;;){if(kr(e.di,tr)&&kr(e.dj,tr))return Fe;if(o(Wl,ie(e.di),ie(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:Pr(e.ee)};e=r;continue e}else{var n=O(Tc(e.dj)/_e),a=O(Tc(e.di)/_e),t=Ue(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(rt,pu(1),e.aK),v=u;return{bz:a*Kr(v),eu:!1,bF:a*Zr(v),cD:n/a,bU:a*qr(v),cT:3,fT:i,fX:c,c$:l}}}},Ug=function(e){return Ig({aK:e.aK,di:e.di,dj:e.dj,ee:o(mi,wr(e.by),wr(e.bD))})},Og=$(function(e,r){var n=zb({by:o(Ln,"azimuth for third light",e),aK:l0(Gb(2e3)),bD:o(Ln,"elevation for third light",e),bH:At(120)}),a=yc({aK:Dt,bH:wc(6e3),dY:{fT:2,fX:3,c$:1}}),t=Ug({by:o(Ln,"azimuth for fourth light",e),aK:Dt,bD:o(Ln,"elevation for fourth light",e),di:At(20),dj:At(10)}),i=yc({aK:Wb,bH:wc(6e3),dY:{fT:-2,fX:4,c$:1}});return o(Tb,{el:Ub,ep:Qu,es:i0,ex:.1,b5:e.b5,eM:kb(6),e8:T(Eb,i,a,n,t),cM:e.cM,fJ:Xb,fQ:Dt},o(Gg,e,r))}),Jg=T(Em,Og,Gm,Wm,jm);const Yg={Main:{init:Jg(o(D,function(e){return Ve({e0:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ve({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ve({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ka(Rn)))},o(M,"left",Z))},o(M,"pressedKeys",ka(Rn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ve({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ve({eV:n,fR:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ve({eB:r,eC:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},qg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Zg=()=>{Et("pointerdown"),Et("wheel"),Et("keydown")},Et=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Kg=Yg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Zg();qg(Kg);
