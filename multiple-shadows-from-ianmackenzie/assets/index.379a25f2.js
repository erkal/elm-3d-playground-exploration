const uv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};uv();function Mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Oe(e){return Mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Wa(e){return Mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function re(e){return Mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function fo(e){return Mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function T(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function so(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ga(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function vv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var $v=[];function fv(e){return e.length}var sv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),dv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),mv=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var pv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+bv()),r});function bv(e){return"<internals>"}function mn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function kr(e,r){for(var n,a=[],t=jt(e,r,0,a);t&&(n=a.pop());t=jt(n.a,n.b,0,a));return t}function jt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&mn(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=Bi(e),r=Bi(r));for(var t in e)if(!jt(e[t],r[t],n+1,a))return!1;return!0}$(kr);$(function(e,r){return!kr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var gv=$(function(e,r){var n=U(e,r);return n<0?el:n?ts:Qc}),Hn=0;function L(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function ar(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=vr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=vr(e.a,r);return n}var z={$:0};function vr(e,r){return{$:1,a:e,b:r}}var hv=$(vr);function h(e){for(var r=z,n=e.length;n--;)r=vr(e[n],r);return r}function Ia(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var _v=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(T(e,r.a,n.a,a.a,t.a));return h(i)});Oe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Ia(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return h(Ia(r).sort(function(n,a){var t=o(e,n,a);return t===Qc?0:t===el?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var wv=$(Math.pow);$(function(e,r){return r%e});var yv=$(function(e,r){var n=r%e;return e===0?mn(11):n>0&&e<0||n<0&&e>0?n+e:n}),xv=Math.PI,Sv=Math.cos,Cv=Math.sin,Tv=Math.tan,Lv=Math.acos,zv=Math.atan;$(Math.atan2);function Pv(e){return e}function kv(e){return e===1/0||e===-1/0}var Mv=Math.ceil,Dv=Math.floor,Bv=Math.round,Av=Math.sqrt,hi=Math.log,Fv=isNaN;function Vv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Ev=$(function(e,r){return e+r});function jv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ne(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}$(function(e,r){return e+r});function Rv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Nv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Xv=$(function(e,r){return r.split(e)}),Wv=$(function(e,r){return r.join(e)}),Gv=y(function(e,r,n){return n.slice(e,r)});function Iv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Uv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Ov=$(function(e,r){return r.indexOf(e)>-1}),Jv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Yv=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Lc(e){return e+""}function qv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:ne(n==45?-r:r)}function Zv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ne(r):Y}function Kv(e){return Ia(e).join("")}function Qv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function e$(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function r$(e){return{$:0,a:e}}function mo(e){return{$:2,b:e}}var n$=mo(function(e){return typeof e=="boolean"?ve(e):nr("a BOOL",e)}),a$=mo(function(e){return typeof e=="number"?ve(e):nr("a FLOAT",e)}),t$=mo(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):nr("a STRING",e)});function o$(e){return{$:3,b:e}}var i$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Dr(e,r){return{$:9,f:e,g:r}}var c$=$(function(e,r){return{$:10,b:r,h:e}}),l$=$(function(e,r){return Dr(e,[r])}),u$=y(function(e,r,n){return Dr(e,[r,n])});E(function(e,r,n,a){return Dr(e,[r,n,a])});he(function(e,r,n,a,t){return Dr(e,[r,n,a,t])});Oe(function(e,r,n,a,t,i){return Dr(e,[r,n,a,t,i])});Wa(function(e,r,n,a,t,i,c){return Dr(e,[r,n,a,t,i,c])});re(function(e,r,n,a,t,i,c,l){return Dr(e,[r,n,a,t,i,c,l])});fo(function(e,r,n,a,t,i,c,l,u){return Dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return We(e,n)}catch(a){return xe(o(Lo,"This is not valid JSON! "+a.message,r))}});var zc=$(function(e,r){return We(e,r)});function We(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):nr("null",r);case 3:return na(r)?_i(e.b,r,h):nr("a LIST",r);case 4:return na(r)?_i(e.b,r,v$):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var v=We(e.b,r[n]);return qe(v)?v:xe(o(Ai,n,v.a));case 7:var a=e.e;if(!na(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=We(e.b,r[a]);return qe(v)?v:xe(o(rl,a,v.a));case 8:if(typeof r!="object"||r===null||na(r))return nr("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=We(e.b,r[i]);if(!qe(v))return xe(o(Ai,i,v.a));t=vr(L(i,v.a),t)}return ve(Re(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=We(l[u],r);if(!qe(v))return v;c=c(v.a)}return ve(c);case 10:var v=We(e.b,r);return qe(v)?We(e.h(v.a),r):v;case 11:for(var s=z,d=e.g;d.b;d=d.b){var v=We(d.a,r);if(qe(v))return v;s=vr(v.a,s)}return xe(os(Re(s)));case 1:return xe(o(Lo,e.a,r));case 0:return ve(e.a)}}function _i(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=We(e,r[i]);if(!qe(c))return xe(o(rl,i,c.a));t[i]=c.a}return ve(n(t))}function na(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function v$(e){return o(ys,e.length,function(r){return e[r]})}function nr(e,r){return xe(o(Lo,"Expecting "+e,r))}function an(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return an(e.b,r.b);case 6:return e.d===r.d&&an(e.b,r.b);case 7:return e.e===r.e&&an(e.b,r.b);case 9:return e.f===r.f&&wi(e.g,r.g);case 10:return e.h===r.h&&an(e.b,r.b);case 11:return wi(e.g,r.g)}}function wi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!an(e[a],r[a]))return!1;return!0}var $$=$(function(e,r){return JSON.stringify(r,null,e)+""});function Pc(e){return e}y(function(e,r,n){return n[e]=r,n});function Or(e){return{$:0,a:e}}function f$(e){return{$:1,a:e}}function xr(e){return{$:2,b:e,c:null}}var Rt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function s$(e){return{$:5,b:e}}var d$=0;function po(e){var r={$:0,e:d$++,f:e,g:null,h:[]};return bo(r),r}function kc(e){return xr(function(r){r(Or(po(e)))})}function Mc(e,r){e.h.push(r),bo(e)}var m$=$(function(e,r){return xr(function(n){Mc(e,r),n(Or(Hn))})}),bt=!1,yi=[];function bo(e){if(yi.push(e),!bt){for(bt=!0;e=yi.shift();)p$(e);bt=!1}}function p$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,bo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function go(e,r,n,a,t,i){var c=o(zc,e,r?r.flags:void 0);qe(c)||mn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=b$(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Si(l,b.b,t(v))}return Si(l,u.b,t(v)),d?{ports:d}:{}}var ir={};function b$(e,r){var n;for(var a in ir){var t=ir[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=h$(t,r)}return n}function g$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function h$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Rt,l,s$(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?T(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=po(o(Rt,l,e.b))}var _$=$(function(e,r){return xr(function(n){e.g(r),n(Or(Hn))})});$(function(e,r){return o(m$,e.h,{$:0,a:r})});function Dc(e){return function(r){return{$:1,k:e,l:r}}}function w$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var xi=[],gt=!1;function Si(e,r,n){if(xi.push({p:e,q:r,r:n}),!gt){gt=!0;for(var a;a=xi.shift();)y$(a.p,a.q,a.r);gt=!1}}function y$(e,r,n){var a={};ya(!0,r,a,null),ya(!1,n,a,null);for(var t in e)Mc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ya(e,r,n,a){switch(r.$){case 1:var t=r.k,i=x$(e,t,a,r.l);n[t]=S$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ya(e,c.a,n,a);return;case 3:ya(e,r.o,n,{s:r.n,t:a});return}}function x$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ir[r].e:ir[r].f;return o(i,t,a)}function S$(e,r,n){return n=n||{i:z,j:z},e?n.i=vr(r,n.i):n.j=vr(r,n.j),n}function C$(e){ir[e]&&mn(3)}$(function(e,r){return r});function T$(e,r){return C$(e),ir[e]={f:L$,u:r,a:z$},Dc(e)}var L$=$(function(e,r){return function(n){return e(r(n))}});function z$(e,r){var n=z,a=ir[e].u,t=Or(null);ir[e].b=t,ir[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(zc,a,c);qe(l)||mn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var xa,br=typeof document!="undefined"?document:{};function ho(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Lr(e,function(){}),t),{}});function Nt(e){return{$:0,a:e}}var Bc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:_o(n),e:t,f:e,b:i}})}),Jr=Bc(void 0),P$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:_o(n),e:t,f:e,b:i}})}),k$=P$(void 0);function M$(e,r,n,a){return{$:3,d:_o(e),g:r,h:n,i:a}}var D$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Br([e,r],function(){return e(r)})});y(function(e,r,n){return Br([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Br([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Br([e,r,n,a,t],function(){return T(e,r,n,a,t)})});Oe(function(e,r,n,a,t,i){return Br([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Wa(function(e,r,n,a,t,i,c){return Br([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});re(function(e,r,n,a,t,i,c,l){return Br([e,r,n,a,t,i,c,l],function(){return so(e,r,n,a,t,i,c,l)})});fo(function(e,r,n,a,t,i,c,l,u){return Br([e,r,n,a,t,i,c,l,u],function(){return Ga(e,r,n,a,t,i,c,l,u)})});var Ac=$(function(e,r){return{$:"a0",n:e,o:r}}),B$=$(function(e,r){return{$:"a1",n:e,o:r}}),Fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Xn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function A$(e){return e=="script"?"p":e}function F$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Ac,r.n,V$(e,r.o)):r});function V$(e,r){var n=Do(r);return{$:r.$,a:n?p(xs,n<3?E$:j$,Ve(e),r.a):o(La,e,r.a)}}var E$=$(function(e,r){return L(e(r.a),r.b)}),j$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function _o(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ci(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ci(c,t,i):c[t]=i}return r}function Ci(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Lr(e,r){var n=e.$;if(n===5)return Lr(e.k||(e.k=e.m()),r);if(n===0)return br.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Lr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ht(c,r,e.d),c}var c=e.f?br.createElementNS(e.f,e.c):br.createElement(e.c);xa&&e.c=="a"&&c.addEventListener("click",xa(c)),Ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ho(c,Lr(n===1?l[u]:l[u].b,r));return c}function Ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?R$(e,t):a==="a0"?X$(e,r,t):a==="a3"?N$(e,t):a==="a4"?H$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function R$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function N$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function H$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function X$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=W$(r,i),e.addEventListener(t,c,wo&&{passive:Do(i)<2}),a[t]=c}}var wo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wo=!0}}))}catch{}function W$(e,r){function n(a){var t=n.q,i=We(t.a,a);if(!!qe(i)){for(var c=Do(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function G$(e,r){return e.$==r.$&&an(e.a,r.a)}function Vc(e,r){var n=[];return Ze(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=K$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ze(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!I$(d,m):d!==m)&&_e(n,2,a,m),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:Ti(e,r,n,a,U$);return;case 2:Ti(e,r,n,a,O$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=yo(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function I$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ti(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=yo(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function yo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=yo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&G$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function U$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ze(s,i[v],n,++a),a+=s.b||0}}function O$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,C=b.b,k=void 0,H=void 0;if(w===x){f++,Ze(_,C,t,f),f+=_.b||0,d++,m++;continue}var R=l[d+1],j=u[m+1];if(R){var N=R.a,X=R.b;H=x===N}if(j){var F=j.a,q=j.b;k=w===F}if(k&&H){f++,Ze(_,q,t,f),_n(i,t,w,C,m,c),f+=_.b||0,f++,wn(i,t,w,X,f),f+=X.b||0,d+=2,m+=2;continue}if(k){f++,_n(i,t,x,C,m,c),Ze(_,q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(H){f++,wn(i,t,w,_,f),f+=_.b||0,f++,Ze(X,C,t,f),f+=X.b||0,d+=2,m+=1;continue}if(R&&N===F){f++,wn(i,t,w,_,f),_n(i,t,x,C,m,c),f+=_.b||0,f++,Ze(X,q,t,f),f+=X.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;wn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var K=K||[],b=u[m];_n(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&_e(n,8,a,{w:t,x:c,y:K})}var Ec="_elmW6BL";function _n(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}_n(e,r,n+Ec,a,t,i)}function wn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}wn(e,r,n+Ec,a,t)}function jc(e,r,n,a){yn(e,r,n,0,0,r.b,a)}function yn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)jc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&yn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&yn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return yn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=yn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Rc(e,r,n,a){return n.length===0?e:(jc(e,r,n,a),Sa(e,n))}function Sa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=J$(t,a);t===e&&(e=i)}return e}function J$(e,r){switch(r.$){case 0:return Y$(e,r.s,r.u);case 4:return Ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Sa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Lr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Sa(e,i.w),e;case 8:return q$(e,r);case 5:return r.s(e);default:mn(10)}}function Y$(e,r,n){var a=e.parentNode,t=Lr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function q$(e,r){var n=r.s,a=Z$(n.y,r);e=Sa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Lr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ho(e,a),e}function Z$(e,r){if(!!e){for(var n=br.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ho(n,i.c===2?i.s:Lr(i.z,r.u))}return n}}function xo(e){if(e.nodeType===3)return Nt(e.textContent);if(e.nodeType!==1)return Nt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=vr(o(Xn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=vr(xo(v[a]),u);return p(Jr,l,r,u)}function K$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Q$=E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=xo(l);return Nc(i,function(v){var s=c(v),d=Vc(u,s);l=Rc(l,u,d,t),u=s})})});E(function(e,r,n,a){return go(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=br.title,v=br.body,s=xo(v);return Nc(i,function(d){xa=c;var m=l(d),f=Jr("body")(z)(m.er),g=Vc(s,f);v=Rc(v,s,g,t),s=f,xa=0,u!==m.fI&&(br.title=u=m.fI)})})});var Ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Nc(e,r){r(e);var n=0;function a(){n=n===1?0:(Ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Ca(a),n=2)}}$(function(e,r){return o(Fo,Bo,xr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Fo,Bo,xr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Fo,Bo,xr(function(){history.replaceState({},"",r),e()}))});var ef={addEventListener:function(){},removeEventListener:function(){}},rf=typeof window!="undefined"?window:ef;y(function(e,r,n){return kc(xr(function(a){function t(i){po(n(i))}return e.addEventListener(r,t,wo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=We(e,r);return qe(n)?ne(n.a):Y});function Hc(e,r){return xr(function(n){Ca(function(){var a=document.getElementById(e);n(a?Or(r(a)):f$(Cs(e)))})})}function nf(e){return xr(function(r){Ca(function(){r(Or(e()))})})}$(function(e,r){return Hc(r,function(n){return n[e](),Hn})});$(function(e,r){return nf(function(){return rf.scroll(e,r),Hn})});y(function(e,r,n){return Hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Hn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var af=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var tf=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):Y}a.push(T(Fl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):Y}return n(T(Fl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var Li=0;function Fn(e,r){for(;r.b;r=r.b)e(r.a)}function So(e){for(var r=0;e.b;e=e.b)r++;return r}var of=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},cf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),lf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),uf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$f=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},gf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},hf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Xc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},_f=function(e){e.gl.disable(e.gl.CULL_FACE)},wf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},yf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},xf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},zi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Sf=[bf,gf,hf,Xc,Wc,_f,wf,yf,xf];function Pi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Gc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Tf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[b++]=g===1?w[C][x]:w[C][x][_]})}var u=Gc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(So(n.b)*s);Fn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Lf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=zf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*So(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(So(e)*r),a=0,t;return Fn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ki(e,r){return e+"#"+r}var Ic=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Xc(n),Wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ki(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Li++,v||(v=Pi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Li++,s||(s=Pi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Cf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ki(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),kf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Lf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Tf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Gc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Fn(P0(n),i.a),u=0;u<zi.length;u++){var k=n[zi[u]];k.toggle!==n.toggle&&k.enabled&&(Sf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return Fn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eA(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function kf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Mf=y(function(e,r,n){return M$(r,{g:n,f:{},h:e},jf,Rf)}),Df=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Bf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ff=$(function(e,r){e.contextAttributes.antialias=!0}),Vf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ef=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function jf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Fn(function(t){return o(z0,r,t)},e.h);var n=br.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),of(function(){return o(Ic,e,n)})):(n=br.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,Ic(r)}var Nf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Hf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Hf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Co=new Float64Array(3),Mi=new Float64Array(3),Di=new Float64Array(3),Xf=y(function(e,r,n){return new Float64Array([e,r,n])}),Wf=function(e){return e[0]},Gf=function(e){return e[1]},If=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Uf=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Uc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Uc);function Oc(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ta(Uc(e,r,n),n)}$(Oc);function Jc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Ta(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Jc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Of=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),xn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(xn);function Xt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Xt);$(function(e,r){var n,a=Co,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=xn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(xn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(xn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(xn(r,a)+e[14])/n,t});var Jf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Yf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},qf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Zf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Zf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Kf=new Float64Array(16),Qf=new Float64Array(16),es=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},rs=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Oe(Yc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Yc(c,l,i,t,n,a)});function qc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Oe(qc);E(function(e,r,n,a){return qc(e,r,n,a,-1,1)});function Zc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],C=r[0],k=r[1],H=r[2],R=r[3],j=r[4],N=r[5],X=r[6],F=r[7],q=r[8],K=r[9],ce=r[10],$e=r[11],oe=r[12],me=r[13],Be=r[14],ze=r[15];return n[0]=a*C+l*k+d*H+b*R,n[1]=t*C+u*k+m*H+w*R,n[2]=i*C+v*k+f*H+x*R,n[3]=c*C+s*k+g*H+_*R,n[4]=a*j+l*N+d*X+b*F,n[5]=t*j+u*N+m*X+w*F,n[6]=i*j+v*N+f*X+x*F,n[7]=c*j+s*N+g*X+_*F,n[8]=a*q+l*K+d*ce+b*$e,n[9]=t*q+u*K+m*ce+w*$e,n[10]=i*q+v*K+f*ce+x*$e,n[11]=c*q+s*K+g*ce+_*$e,n[12]=a*oe+l*me+d*Be+b*ze,n[13]=t*oe+u*me+m*Be+w*ze,n[14]=i*oe+v*me+f*Be+x*ze,n[15]=c*oe+s*me+g*Be+_*ze,n}$(Zc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],C=r[5],k=r[6],H=r[8],R=r[9],j=r[10],N=r[12],X=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*C+v*k,n[5]=t*_+l*C+s*k,n[6]=i*_+u*C+d*k,n[7]=0,n[8]=a*H+c*R+v*j,n[9]=t*H+l*R+s*j,n[10]=i*H+u*R+d*j,n[11]=0,n[12]=a*N+c*X+v*F+m,n[13]=t*N+l*X+s*F+f,n[14]=i*N+u*X+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Ta(r,Co);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Jc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,_=g+f,C=b-m,k=g-f,H=c*c*v+u,R=w+d,j=b+m,N=w-d,X=l*l*v+u,F=n[0],q=n[1],K=n[2],ce=n[3],$e=n[4],oe=n[5],me=n[6],Be=n[7],ze=n[8],Cr=n[9],Tr=n[10],pt=n[11],ov=n[12],iv=n[13],cv=n[14],lv=n[15];return a[0]=F*x+$e*_+ze*C,a[1]=q*x+oe*_+Cr*C,a[2]=K*x+me*_+Tr*C,a[3]=ce*x+Be*_+pt*C,a[4]=F*k+$e*H+ze*R,a[5]=q*k+oe*H+Cr*R,a[6]=K*k+me*H+Tr*R,a[7]=ce*k+Be*H+pt*R,a[8]=F*j+$e*N+ze*X,a[9]=q*j+oe*N+Cr*X,a[10]=K*j+me*N+Tr*X,a[11]=ce*j+Be*N+pt*X,a[12]=ov,a[13]=iv,a[14]=cv,a[15]=lv,a});function ns(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(ns);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function as(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(as);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Oc(e,r,Co),t=Ta(Xt(n,a,Mi),Mi),i=Ta(Xt(a,t,Di),Di),c=Kf,l=Qf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Zc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var B=hv,aa=pv,Kc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(aa,e,l,v)}else{var u=c.a;return p(aa,i,l,u)}});return p(aa,i,p(aa,e,r,t),a)}),To=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(To,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Bi=function(e){return p(To,y(function(r,n,a){return o(B,L(r,n),a)}),z,e)},Qc=1,ts=2,el=0,xe=function(e){return{$:1,a:e}},Lo=$(function(e,r){return{$:3,a:e,b:r}}),Ai=$(function(e,r){return{$:0,a:e,b:r}}),rl=$(function(e,r){return{$:1,a:e,b:r}}),ve=function(e){return{$:0,a:e}},os=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},Y={$:1},is=Uv,cs=$$,je=Lc,jr=$(function(e,r){return o(Wv,e,Ia(r))}),zo=$(function(e,r){return h(o(Xv,e,r))}),nl=function(e){return o(jr,`
    `,o(zo,`
`,e))},Wn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ir=function(e){return p(Wn,$(function(r,n){return n+1}),0,e)},ls=_v,us=y(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),_r=$(function(e,r){return p(us,e,r,z)}),al=$(function(e,r){return p(ls,e,o(_r,0,Ir(r)-1),r)}),cr=Qv,tl=function(e){var r=cr(e);return 97<=r&&r<=122},ol=function(e){var r=cr(e);return r<=90&&65<=r},vs=function(e){return tl(e)||ol(e)},$s=function(e){var r=cr(e);return r<=57&&48<=r},fs=function(e){return tl(e)||ol(e)||$s(e)},Re=function(e){return p(Wn,B,z,e)},pn=jv,ss=$(function(e,r){return`

(`+(je(e+1)+(") "+nl(ds(r))))}),ds=function(e){return o(ms,e,z)},ms=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=pn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return vs(x)&&o(is,fs,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(je(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(jr,"",Re(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(je(Ir(s))+" ways:"));return o(jr,`

`,o(B,g,o(al,ss,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(jr,"",Re(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(jr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return g+(nl(o(cs,4,f))+(`

`+m))}}),Ne=32,Wt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Gt=$v,Po=Mv,ko=$(function(e,r){return hi(r)/hi(e)}),ps=Pv,Vn=Po(o(ko,2,Ne)),il=T(Wt,0,Vn,Gt,Gt),cl=sv,ll=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ul=Dv,It=fv,De=$(function(e,r){return U(e,r)>0?e:r}),bs=function(e){return{$:0,a:e}},Mo=dv,gs=$(function(e,r){e:for(;;){var n=o(Mo,Ne,e),a=n.a,t=n.b,i=o(B,bs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Re(i)}}),hs=function(e){var r=e.a;return r},_s=$(function(e,r){e:for(;;){var n=Po(r/Ne);if(n===1)return o(Mo,Ne,e).a;var a=o(gs,e,z),t=n;e=a,r=t;continue e}}),vl=$(function(e,r){if(r.l){var n=r.l*Ne,a=ul(o(ko,Ne,n-1)),t=e?Re(r.z):r.z,i=o(_s,t,r.l);return T(Wt,It(r.p)+n,o(De,5,a*Vn),i,r.p)}else return T(Wt,It(r.p),Vn,Gt,r.p)}),ws=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(vl,!1,{z:a,l:n/Ne|0,p:t});var i=ll(p(cl,Ne,r,e)),c=e,l=r-Ne,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ys=$(function(e,r){if(e<=0)return il;var n=e%Ne,a=p(cl,n,e-n,r),t=e-n-Ne;return S(ws,r,t,e,z,a)}),qe=function(e){return!e.$},D=c$,Z=n$,M=i$,fe=a$,La=l$,xs=u$,Ve=r$,Do=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Jr("div"),Ss=function(e){return{$:2,a:e}},$l=$(function(e,r){return e}),fl=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Nr=function(e){return e},Cs=Nr,Fi=Oe(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Ts=Ov,Rr=Rv,tn=Gv,Gn=$(function(e,r){return e<1?r:p(tn,e,Rr(r),r)}),Ua=Yv,Oa=function(e){return e===""},Ja=$(function(e,r){return e<1?"":p(tn,0,e,r)}),sl=qv,Vi=he(function(e,r,n,a,t){if(Oa(t)||o(Ts,"@",t))return Y;var i=o(Ua,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=sl(o(Gn,c+1,t));if(l.$===1)return Y;var u=l;return ne(ye(Fi,e,o(Ja,c,t),u,r,n,a))}else return ne(ye(Fi,e,t,Y,r,n,a))}),Ei=E(function(e,r,n,a){if(Oa(a))return Y;var t=o(Ua,"/",a);if(t.b){var i=t.a;return S(Vi,e,o(Gn,i,a),r,n,o(Ja,i,a))}else return S(Vi,e,"/",r,n,a)}),ji=y(function(e,r,n){if(Oa(n))return Y;var a=o(Ua,"?",n);if(a.b){var t=a.a;return T(Ei,e,ne(o(Gn,t+1,n)),r,o(Ja,t,n))}else return T(Ei,e,Y,r,n)});$(function(e,r){if(Oa(r))return Y;var n=o(Ua,"#",r);if(n.b){var a=n.a;return p(ji,e,ne(o(Gn,a+1,r)),o(Ja,a,r))}else return p(ji,e,Y,r)});var Ls=Jv,Bo=function(e){},In=Or,zs=In(0),dl=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Wn,e,r,Re(d)):T(dl,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Sr=y(function(e,r,n){return T(dl,e,r,0,n)}),Q=$(function(e,r){return p(Sr,$(function(n,a){return o(B,e(n),a)}),z,r)}),za=Rt,Ao=$(function(e,r){return o(za,function(n){return In(e(n))},r)}),Ps=y(function(e,r,n){return o(za,function(a){return o(za,function(t){return In(o(e,a,t))},n)},r)}),ks=function(e){return p(Sr,Ps(B),In(z),e)},Ms=_$,Ds=$(function(e,r){var n=r;return kc(o(za,Ms(e),n))}),Bs=y(function(e,r,n){return o(Ao,function(a){return 0},ks(o(Q,Ds(e),r)))}),As=y(function(e,r,n){return In(0)}),Fs=$(function(e,r){var n=r;return o(Ao,e,n)});ir.Task=g$(zs,Bs,As,Fs);var Vs=Dc("Task"),Fo=$(function(e,r){return Vs(o(Ao,e,r))}),Es=Q$,js=Vv,Pa={$:1},ml=function(e){return{$:2,a:e}},Ya={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),bn=function(e){var r=e.b.B;return r.a},Rs=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return ne(o(Ge,r,{B:i,ac:c,U:o(B,a,n)}))}else return Y},pl=function(e){var r=e.b;return o(Ge,Ya,r)},$r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ns=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?pl(n):n;case 2:var i=a.a.cR;return(U(i+r.eH,bn(n).D)>0?o(te,Rs,$r(o(Ge,Pa,t))):Nr)(o(Ge,ml({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(fl,l.ey,ar(r,{D:l.D+r.eH})),s=o(e,v,u);return o(Ge,Ya,{B:L(v,s),ac:z,U:o(B,t.B,t.U)})}}),bl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Xs=$(function(e,r){return Re(p(Hs,e,r,z))}),gl=y(function(e,r,n){if(r<=0)return z;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Xs,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,b,p(gl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),Ws=$(function(e,r){return p(gl,0,e,r)}),Gs=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=ue(Re(n),ue(h([a]),t)),c=o(Ws,e,i),l=o(bl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,Pa,{B:u,ac:v,U:Re(c)})}else{var s=Re(c);if(s.b){var d=s.a,m=s.b;return o(Ge,Pa,{B:d,ac:z,U:m})}else return r}}),Is=function(e){var r=e.b;return o(Ge,Pa,r)},Us=function(e){var r=e.b;return o(Ge,ml({cR:bn(e).D}),r)},Os=$(function(e,r){switch(e.$){case 1:return Is(r);case 2:return pl(r);case 3:return Us(r);default:var n=e.a;return o(Gs,n,r)}}),hl=$(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Js=$(function(e,r){return ar(r,{aw:e(r.aw)})}),Ys=function(e){return{$:3,a:e}},qs=function(e){return{$:2,a:e}},_l=$(function(e,r){return{$:0,a:e,b:r}}),wl=$(function(e,r){return{$:1,a:e,b:r}}),Ce=$(function(e,r){if(r.$)return Y;var n=r.a;return ne(e(n))}),O=function(e){return e<0?-e:e},Vo=Zv,Zs=y(function(e,r,n){return o($r,0/0,Vo(o(e,r,n)))}),yl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ks=Hv,xl=function(e){return p(Ks,B,z,e)},Qs=$(function(e,r){var n=o(yl,function(a){return a!=="0"&&a!=="."},xl(r));return ue(e&&n?"-":"",r)}),be=Lc,Ut=Ev,Sl=e$,Cl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=pn(n);if(a.$===1)return"01";var t=a.a;return o(Ut,"0",Cl(t))}else{var i=cr(r);return i>=48&&i<57?o(Ut,Sl(i+1),n):"0"}},Ot=kv,ed=Fv,qa=function(e){return o(Ut,e,"")},Tl=y(function(e,r,n){return e<=0?n:p(Tl,e>>1,ue(r,r),e&1?ue(n,r):n)}),En=$(function(e,r){return p(Tl,e,r,"")}),Jt=y(function(e,r,n){return ue(n,o(En,e-Rr(n),qa(r)))}),Yt=Nv,Ll=function(e){var r=o(zo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},rd=function(e){var r=o(zo,"e",be(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,sl(o(Ls,"+",t)?o(Gn,1,t):t)),c=Ll(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?o($r,"0",o(Ce,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ce,hl(qa),pn(ue(o(En,O(i),"0"),v))))):p(Jt,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},nd=y(function(e,r,n){if(Ot(n)||ed(n))return be(n);var a=n<0,t=Ll(rd(O(n))),i=t.a,c=t.b,l=Rr(i)+r,u=ue(o(En,-l+1,"0"),p(Jt,l,"0",ue(i,c))),v=Rr(u),s=o(De,1,l),d=o(e,a,p(tn,s,v,u)),m=p(tn,0,s,u),f=d?Yt(o($r,"1",o(Ce,Cl,pn(Yt(m))))):m,g=Rr(f),b=f==="0"?f:r<=0?ue(f,o(En,O(r),"0")):U(r,Rr(c))<0?p(tn,0,g-r,f)+("."+p(tn,g-r,g,f)):ue(i+".",p(Jt,r,"0",c));return o(Qs,a,b)}),zl=nd($(function(e,r){var n=pn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(cr(t))})),ad=Zs(zl),td=y(function(e,r,n){var a=o(ko,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(ad,t,n)}),Pl=gv,Za=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Pl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),G=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),fr={$:-2},$n=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(G,0,r,n,S(G,1,v,s,d,m),S(G,1,i,c,l,u))}else return S(G,e,i,c,S(G,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(G,0,v,s,S(G,1,g,b,w,x),S(G,1,r,n,m,t))}else return S(G,e,r,n,a,t)}),qt=y(function(e,r,n){if(n.$===-2)return S(G,0,e,r,fr,fr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Pl,e,t);switch(u){case 0:return S($n,a,t,i,p(qt,e,r,c),l);case 1:return S(G,a,t,r,c,l);default:return S($n,a,t,i,c,p(qt,e,r,l))}}),Ln=y(function(e,r,n){var a=p(qt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(G,1,t,i,c,l)}else{var u=a;return u}}),od=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},kl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(G,0,f,g,S(G,1,n,a,S(G,0,i,c,l,u),b),S(G,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(G,1,n,a,S(G,0,i,c,l,u),S(G,0,s,d,m,x))}else return e},Ri=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(G,0,i,c,S(G,1,u,v,s,d),S(G,1,n,a,m,S(G,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(G,1,n,a,S(G,0,i,c,C,m),S(G,0,g,b,w,x))}else return e},id=Wa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(G,n,l,u,v,S(G,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ri(r)}else break e;else return c.a,c.d,Ri(r);else break e;return r}}),da=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(G,r,n,a,da(t),l);var u=kl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S($n,v,s,d,da(m),f)}else return fr}else return S(G,r,n,a,da(t),l)}else return fr},zn=$(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(G,n,a,t,o(zn,e,i),c);var u=kl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S($n,v,s,d,o(zn,e,m),f)}else return fr}else return S(G,n,a,t,o(zn,e,i),c);else return o(cd,e,so(id,e,r,n,a,t,i,c))}),cd=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(kr(e,a)){var l=od(c);if(l.$===-1){var u=l.b,v=l.c;return S($n,n,u,v,i,da(c))}else return fr}else return S($n,n,a,t,i,o(zn,e,c))}else return fr}),ld=$(function(e,r){var n=o(zn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(G,1,a,t,i,c)}else{var l=n;return l}}),ta=y(function(e,r,n){var a=r(o(Za,e,n));if(a.$)return o(ld,e,n);var t=a.a;return p(Ln,e,t,n)}),ud=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(ta,r,Ce(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(wl,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(ta,r,Ce(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(_l,L(i,c),p(td,i,c,n))}));case 3:var r=e.a,n=e.b;return o(ta,r,Ce(function(a){return a.$===3?Ys(n):a}));default:var r=e.a,n=e.b;return o(ta,r,Ce(function(a){return a.$===2?qs(n):a}))}},vd=function(e){return Js(ud(e))},$d=$(function(e,r){return o(Q,vd(e),r)}),fd=$(function(e,r){return ar(r,{ey:o($d,e,r.ey)})}),sd=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,ar(a,{B:o(hl,fd(e),a.B)}))}),dd=$(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),md=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,ar(t,{B:o(dd,o(e,i.a,r),i)}))}),pd=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ar(a,{aM:!a.aM});case 2:var t=n.a;return ar(a,{H:p(Ns,e,t,a.H)});case 3:var i=n.a;return ar(a,{H:o(sd,i,a.H)});case 4:var c=n.a;return ar(a,{H:p(md,r,c,a.H)});default:var l=n.a;return ar(a,{H:o(Os,l,a.H)})}}),bd=$(function(e,r){return o(Ge,Ya,{B:L(e,r(e)),ac:z,U:z})}),gd=w$,Ni=gd(z),ka=o$,jn=t$,hd=T$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ve({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ve({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ka(jn)))},o(M,"left",Z))},o(M,"pressedKeys",ka(jn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ve({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ve({eV:n,fR:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ve({eB:r,eC:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe))))),_d=function(e){return{$:4,a:e}},wd={$:0},yd=Pc,Je=$(function(e,r){return o(Fc,e,yd(r))}),J=Je("className"),xd=function(e){var r=e.b.B;return r.b},Ma=Je("id"),Sd=D$,Da=Sd,Cd=B$,de=Cd,Td={$:1},Ld=function(e){return{$:3,a:e}},zd=function(e){return{$:5,a:e}},Hi=Jr("a"),Eo=Jr("button"),Pd=Xn("d"),Ml=Bc("http://www.w3.org/2000/svg"),kd=Ml("path"),Md=Ml("svg"),Dd=Xn("viewBox"),Pn=function(e){return o(Md,h([Dd("0 0 100 100"),o(de,"width","100%"),o(de,"height","100%")]),h([o(kd,h([Pd(e)]),z)]))},Xi=function(e){return o(Je,"href",F$(e))},cn={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Bd=function(e){return{$:0,a:e}},Dl=Ac,Bl=$(function(e,r){return o(Dl,e,Bd(r))}),jo=function(e){return o(Bl,"click",Ve(e))},Wi=Je("target"),Ad=Je("title"),Zt=$(function(e,r){if(r.$===-2)return fr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(G,n,a,o(e,a,t),o(Zt,e,i),o(Zt,e,c))}),Fd=Nt,wr=Fd,Vd=function(e){return p(To,y(function(r,n,a){return o(B,n,a)}),z,e)},Ed=$(function(e,r){return{$:3,a:e,b:r}}),jd=$(function(e,r){return{$:2,a:e,b:r}}),Rd=$(function(e,r){return{$:0,a:e,b:r}}),Nd=$(function(e,r){return{$:1,a:e,b:r}}),Ye=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Hd=T(Ye,0/255,0/255,0/255,1),Xd=Pc,Wd=$(function(e,r){return o(Fc,e,Xd(r))}),Gd=Wd("checked"),Qe=Bv,Id=y(function(e,r,n){return ue(o(En,e-Rr(n),qa(r)),n)}),Ba=yv,Al=function(e){var r=function(n){return n<10?je(n):qa(Sl(87+n))};return e<16?r(e):ue(Al(e/16|0),r(o(Ba,16,e)))},Ud=o(te,Al,o(Id,2,"0")),Ro=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},Od=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return o(jr,"",o(B,"#",o(Q,o(te,Qe,Ud),h([n*255,a*255,t*255]))))},Kt=Je("htmlFor"),Qt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),Aa=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Jd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),Ka=$(function(e,r){return p(Sr,Jd(e),z,r)}),Fl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),Yd=tf,qd=Kv,Zd=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ve(n)}),Kd=af,Qd=function(e){return o(Kd,{et:!1,fc:!1},e)},Qa=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return Y},em=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ve(e(n))}}),rm=function(e){return{$:2,a:e}},nm=function(e){return{$:0,a:e}},am=function(e){return{$:1,a:e}},ht=$(function(e,r){return cr(r)-cr(e)}),_t=y(function(e,r,n){var a=cr(n);return U(cr(e),a)<1&&U(a,cr(r))<1}),tm=$(function(e,r){var n=function(t){return U(t,e)<0?ve(t):xe(am(r))},a=p(_t,"0","9",r)?ve(o(ht,"0",r)):p(_t,"a","z",r)?ve(10+o(ht,"a",r)):p(_t,"A","Z",r)?ve(10+o(ht,"A",r)):xe(nm(r));return o(Aa,n,a)}),Vl=$(function(e,r){var n=pn(r);if(n.$===1)return ve(0);var a=n.a,t=a.a,i=a.b;return o(Aa,function(c){return o(Aa,function(l){return ve(c+l*e)},o(Vl,e,i))},o(tm,e,t))}),om=$(function(e,r){return 2<=e&&e<=36?o(Vl,e,Yt(r)):xe(rm(e))}),im=om(16),cm=y(function(e,r,n){return T(Ye,e,r,n,1)}),lm=E(function(e,r,n,a){return T(Ye,e,r,n,a)}),Un=wv,um=$(function(e,r){var n=o(Un,10,e);return Qe(r*n)/n}),vm=Iv,$m=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=xl(n);if(a.b&&!a.b.b){var t=a.a;return qd(h([t,t]))}else return n};return o(te,vm,o(te,function(n){return o(Ce,function(a){return p(Yd,1,a,n)},Qd(e))},o(te,Qt(Qa),o(te,Ce(function(n){return n.fD}),o(te,Ce(Ka(Nr)),o(te,Zd("Parsing hex regex failed"),Aa(function(n){var a=o(Q,o(te,r,o(te,im,em(ps))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ve(T(lm,t/255,c/255,u/255,o(um,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ve(p(cm,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),Fa=Jr("input"),eo=Jr("label"),ro=Je("name"),El=$(function(e,r){return p(Sr,M,r,e)}),fm=o(El,h(["target","checked"]),Z),sm=function(e){return o(Bl,"change",o(La,e,fm))},dm=function(e){return L(e,!0)},mm=function(e){return{$:1,a:e}},pm=$(function(e,r){return o(Dl,e,mm(r))}),bm=o(El,h(["target","value"]),jn),No=function(e){return o(pm,"input",o(La,dm,o(La,e,bm)))},jl=Je("max"),Rl=Je("min"),Nl=function(e){return o(Je,"step",e)},Va=Je("type"),Ho=Je("value"),Gi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,z,h([o(eo,h([Kt(r)]),h([o(I,h([J("relative w-full")]),h([o(I,h([J("inline-block")]),h([wr(r)])),o(I,h([J("inline-block float-right")]),h([wr(be(n))]))]))])),o(Fa,h([Va("range"),o(de,"width","100%"),Ma(r),ro(r),Rl(be(a)),jl(be(t)),Ho(be(n)),Nl(be(i)),No(o(te,Vo,o(te,$r(42),c)))]),z)]))},gm=$(function(e,r){if(r.$)return e;var n=r.a;return n}),hm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,z,h([o(I,h([J("mb-2")]),h([o(eo,h([Kt(e)]),h([wr(e)]))])),o(Fa,h([Va("checkbox"),Ma(e),ro(e),sm(Ed(e)),Gd(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Gi({b9:e,cl:i,cp:t,ct:Rd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Gi({b9:e,cl:i,cp:t,ct:o(te,Qe,Nd(e)),cP:1,cW:c});default:var c=r.a;return o(I,z,h([o(I,h([o(de,"margin-bottom","6px")]),h([o(eo,h([Kt(e)]),h([wr(e)]))])),o(Fa,h([Va("color"),o(de,"width","100%"),o(de,"height","26px"),o(de,"padding","0px"),Ma(e),ro(e),No(function(l){return o(jd,e,o(gm,Hd,$m(l)))}),Ho(Od(c))]),z)]))}}),_m=function(e){return o(I,h([J("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([J("text-lg pb-2")]),h([wr(e.fd)])),o(I,h([J("pl-2 pr-2")]),Vd(o(Zt,hm,e.aw)))]))},wm=function(e){return o(I,h([J("text-xs text-white60")]),o(Q,_m,e))},ym=function(e){return o(I,h([J("absolute left-[104px] bottom-2 text-sm text-white40")]),h([wr("clock: "+o(zl,3,bn(e).D))]))},xm=function(e){e.a;var r=e.b.U;return o(Ce,function(n){return Qe(60/(bn(e).D-n))},o(Ce,o(te,hs,function(n){return n.D}),Qa(o(bl,59,r))))},Sm=function(e){return o(I,h([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=xm(e);if(r.$===1)return h([wr("... Fps")]);var n=r.a;return h([wr(je(n)+" Fps")])}())},Cm=function(e){return{$:0,a:e}},Tm=function(e){var r=e.b.U;return Ir(r)},Lm=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return Ir(r)+1+Ir(n)},zm=function(e){return o(Fa,h([J("absolute w-full"),Va("range"),Rl(je(0)),jl(je(Lm(e)-1)),Ho(je(Tm(e))),Nl(je(1)),No(o(te,Vo,o(te,$r(42),o(te,Qe,Cm))))]),z)},Ii={$:1},Pm={$:3},km={$:2},Hl=function(e){return!e.b},Ui=$(function(e,r){return o(Eo,h([J("px-2 bg-black40"),J(r),jo(e)]),h([wr("REC")]))}),Oi=$(function(e,r){return o(Eo,h([J("absolute left-[60px] mx-1 px-1 bg-black40"),jo(r)]),h([o(I,h([J("w-4 h-6 fill-white80")]),h([Pn(e)]))]))}),Mm=function(e){var r=e.a,n=e.b.ac;return o(I,h([J("py-1")]),h([function(){switch(r.$){case 0:return o(Ui,Ii,"text-red-500 font-bold");case 1:return o(Ui,km,"text-white80 font-bold");default:return o(I,z,z)}}(),function(){switch(r.$){case 0:return o(I,z,z);case 1:return Hl(n)?o(I,z,z):o(Oi,cn.fm,Pm);default:return o(Oi,cn.fl,Ii)}}()]))},Dm=function(e){return o(I,h([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([zm(e),Mm(e),Sm(e),ym(e)]))},Bm=function(e){var r=e.a;return kr(r,Ya)},Am=$(function(e,r){var n=Bm(r.H)?o(I,z,z):o(I,h([J("absolute pointer-events-none w-8 h-8"),o(de,"left",be(e.fn.fT+.5*e.cM.fR)+"px"),o(de,"top",be(-e.fn.fX+.5*e.cM.eV)+"px")]),h([o(I,h([J(e.fn.e1?"fill-black80":"fill-white40")]),h([Pn(cn.fn)]))]));return o(I,z,h([n]))}),Fm=$(function(e,r){var n=o(Eo,h([J(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),jo(Td),Ad("Distraction Free Mode")]),h([Pn(cn.f$)])),a=o(I,h([J("absolute w-8 bottom-12")]),h([o(Hi,h([J("fill-twitterBlue40 hover:fill-twitterBlue"),Xi("https://twitter.com/AzizErkalSelman"),Wi("_blank")]),h([Pn(cn.fK)]))])),t=o(I,h([J("absolute w-8 bottom-2")]),h([o(Hi,h([J("fill-githubCat40 hover:fill-githubCat"),Xi("https://github.com/erkal/elm-3d-playground-exploration"),Wi("_blank")]),h([Pn(cn.eP)]))]));return r.aM?o(I,h([J("fixed w-10 h-10 p-1")]),h([n])):o(I,z,h([o(I,h([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(de,"height",be(e.cM.eV-80)+"px")]),h([o(Da,Ld,wm(bn(r.H).ey))])),o(I,h([J("absolute bottom-0 left-10 h-20"),o(de,"width",e.cM.fR>600?"600px":be(e.cM.fR-40)+"px")]),h([o(Da,zd,Dm(r.H))])),o(Am,e,r)]))}),Vm=y(function(e,r,n){var a=xd(n.H),t=bn(n.H);return o(I,h([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(de,"width",be(t.cM.fR)+"px"),o(de,"height",be(t.cM.eV)+"px")]),h([o(I,h([J("fixed")]),h([o(Da,$l(wd),o(e,t,a))])),o(I,h([Ma("gui")]),h([o(Fm,t,n),o(Da,_d,o(r,t,a))]))]))}),Em=Oe(function(e,r,n,a,t,i){var c=$(function(u,v){return L(T(pd,r,i,u,v),Ni)}),l=function(u){var v=o(fl,n,u.e0);return L({aM:u.e0.cM.fR<500,H:o(bd,v,a)},Ni)};return Es({e$:l,fE:$l(hd(Ss)),fL:c,fO:o(Vm,e,t)})}),jm=E(function(e,r,n,a){return ye(Em,e,r,n,a,$(function(t,i){return o(I,z,z)}),y(function(t,i,c){return c}))}),Rm=function(e){return{}},Nm=y(function(e,r,n){return{aw:n,e2:r,fd:e}}),Xl=fr,Hm=function(e){return p(Wn,$(function(r,n){var a=r.a,t=r.b;return p(Ln,a,t,n)}),Xl,e)},Xm=y(function(e,r,n){return p(Nm,e,r,Hm(n))}),Ji=Xm,hn=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(_l,L(a,t),n))}),Wm=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(wl,L(a,t),n))}),we=xv,Gm=h([p(Ji,"Parameters",!0,h([p(Wm,"number of tree blocks",L(1,20),16),p(hn,"turning speed of the tree",L(.1,4),1)])),p(Ji,"Lighting",!0,h([p(hn,"azimuth for third light",L(-we,we),1),p(hn,"elevation for third light",L(-we,we),-2),p(hn,"azimuth for fourth light",L(-we,we),1),p(hn,"elevation for fourth light",L(-we,we),-2)]))]),Im=$(function(e,r){return r}),Um=zv,pr=Av,Om=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(De,O(c),o(De,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=pr(s*s+v*v+u*u);return ne({fT:s/d,fX:v/d,c$:u/d})}else return Y}),ma=function(e){return e},Xo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),pa=function(e){var r=e,n=o(De,O(r.fT),o(De,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c$:a/c})}else return Y},Ea=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Jm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),Wl=$(function(e,r){var n=e,a=r;return U(a,n)>0}),Ym=$(function(e,r){var n=e,a=r;return U(a,n)<0}),qm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Zm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),Km=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},tr=0,Gl={fT:0,fX:0,c$:0},Qm=y(function(e,r,n){return o(Qt,function(a){var t=o(qm,o(Zm,a,r),r);return o(Qt,function(i){var c=o(Xo,r,e),l=o(Jm,n,c),u=o(Wl,tr,l)?c:o(Ym,tr,l)?Km(c):Gl;return o(Ce,function(v){return A(a,i,v)},pa(u))},pa(t))},pa(e))}),e0=function(e){var r=e,n=O(r.c$),a=O(r.fX),t=O(r.fT);if(U(t,a)<1)if(U(t,n)<1){var i=pr(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=pr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(U(a,n)<1){var i=pr(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=pr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},Wo=function(e){var r=e0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return L(r,c)},on=function(e){var r=e;return r},er=function(e){return e},r0=$(function(e,r){var n=Wo(e),a=n.a,t=n.b;return er({cu:r,cZ:a,c_:t,c0:e})}),n0=function(e){var r=o(Ea,e.aS,e.dc),n=on(e.ee),a=o(Xo,r,n),t=p(Qm,r,n,a);if(t.$){var v=pa(r);if(v.$){var d=Wo(e.ee),m=d.a,f=d.b;return er({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(r0,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return er({cu:e.dc,cZ:u,c_:l,c0:c})}},Pe={fT:0,fX:0,c$:0},a0=function(e){return{$:0,a:e}},ie=function(e){var r=e;return O(r)},ba=function(e){var r=e;return .5*r},t0=Tv,o0=function(e){var r=e;return t0(r)},i0=function(e){var r=ba(ie(e.ef)),n=o0(r);return{cF:a0(n),cX:e.cX}},gr=function(e){return e},et=gr({fT:0,fX:1,c$:0}),sr=function(e){return e},c0=function(e){var r=e.aS,n=e.dc,a=e.ee;return i0({ef:sr(2*Um(.5)),cX:n0({dc:ma(n),aS:ma(r),ee:o($r,et,o(Om,Pe,ma(a)))})})},l0=c0({dc:{fT:5,fX:5,c$:12},aS:{fT:0,fX:1,c$:0},ee:{fT:0,fX:1,c$:0}}),Go=function(e){return e},Il=y(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),u0=function(e){var r=e;return r},v0=function(e){var r=p(Il,1667,25e3,u0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Go({fT:n,fX:a})},$0=function(e){return e},f0=function(e){return{$:0,a:e}},s0=f0,d0={$:3},m0=d0,p0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),b0=p0,g0=$(function(e,r){return r.b?p(Sr,B,r,e):e}),Ie=function(e){return p(Sr,g0,z,e)},Io=$(function(e,r){return Ie(o(Q,e,r))}),h0=function(e){return{$:1,a:e}},_0=h0,w0=function(e){return o(Xn,"height",je(e))},y0=function(e){return k$(A$(e))},x0=y0,S0=function(e){return{$:2,a:e}},C0=S0,T0=function(e){return o(jr,"",e)},L0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return T0(h(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},z0=$(function(e,r){switch(r.$){case 0:return o(Df,e,r);case 1:return o(Bf,e,r);case 2:return o(Af,e,r);case 3:return o(Ff,e,r);case 4:return o(Vf,e,r);default:return o(Ef,e,r)}}),P0=$(function(e,r){switch(r.$){case 0:return o(lf,e,r);case 1:return o(uf,e,r);case 2:return o(vf,e,r);case 3:return o($f,e,r);case 4:return o(ff,e,r);case 5:return o(sf,e,r);case 6:return o(df,e,r);case 7:return o(mf,e,r);default:return pf(e)}}),k0=y(function(e,r,n){return p(Mf,e,r,n)}),Yi=function(e){var r=e;return r},gn=Jf,wt=T(gn,1,1,1,1),rr=y(function(e,r,n){return o(Q,function(a){return o(a,r,n)},e)}),M0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),D0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(M0,n*a/t,n,n*(1-a-t)/t)}),On=Xf,B0=function(e){var r=e.a,n=e.b,a=e.c;return p(On,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},rt=$(function(e,r){return B0(o(D0,e,r))}),Ul=$(function(e,r){return{dk:kr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),or=es,A0=function(e){return or({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},yt=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=T(gn,a.bW,a.bW,a.bW,i);return ye(t,e,c,A0(a),a.dk,r,n)}),Ol=Oe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ul,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(B,S(yt,e,r,n,a,g),i.N);return{N:b,V:i.V,fx:i.fx};case 3:var w=t.b,x=o(B,S(yt,e,r,n,a,w),i.V);return{N:i.N,V:x,fx:i.fx};case 2:var _=t.a,C=o(B,S(yt,e,r,n,a,_),i.fx);return{N:i.N,V:i.V,fx:C};default:var k=t.a;return p(Wn,T(Ol,e,r,n,a),i,k)}}),F0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Jl=F0,Uo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),V0=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,518,r,n,a)},E0=$(function(e,r){return{$:6,a:e,b:r}}),j0=E0,Yl=h([V0({W:1,X:0,_:!1}),T(Jl,!1,!1,!1,!1),o(j0,0,1)]),fn=519,Oo=8,ql=15,ln=7681,R0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=cf,N0=$(function(e,r){return{$:0,a:e,b:r}}),H0=N0({c8:1,dh:0,dQ:5}),Ee=Nf,X0=H0(h([{dY:o(Ee,-1,-1)},{dY:o(Ee,1,-1)},{dY:o(Ee,-1,1)},{dY:o(Ee,1,1)}])),W0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},G0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Jo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bm),o(te,l(v.a9),o(te,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(G0,a,t,i)))}),Yo=function(e){return p(Jo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},qo=function(e){return S(ae,h([Yo(e),T(Jl,!1,!1,!1,!1)]),W0,R0,X0,{})},I0=qo({a9:ln,ci:0,cH:Oo,bm:fn,cY:ql,bu:ln,bv:ln}),U0=516,qi=5386,Te=7680,O0=function(e){return o(Un,2,e+4)},Zl=function(e){return qo({a9:Te,ci:ql,cH:Oo,bm:U0,cY:O0(e),bu:qi,bv:qi})},J0=y(function(e,r,n){return Ie(h([p(rr,e,n,Yl),h([Zl(r),I0])]))}),Y0=$(function(e,r){return Ie(o(al,J0(e),r))}),q0=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,513,r,n,a)},Z0=q0({W:1,X:0,_:!0}),K0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Q0=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return K0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},ep=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zi=$(function(e,r){var n=e,a=r;return p(ep,32774,n,a)}),rp=1,Ki=771,np=770,Zo=Q0({bw:0,aI:o(Zi,rp,Ki),bz:0,bB:o(Zi,np,Ki),bF:0,bU:0}),en=h([Z0,Zo]),ap=function(e){var r=e;return r.dJ},tp=function(e){var r=e;return r.dK},Kl=function(e){var r=e;return r.dL},op=function(e){var r=e;return r.dM},ip=function(e){var r=e;return r.dN},Ql=function(e){var r=e;return r.dO},hr=$(function(e,r){var n=e,a=r;return a-n}),eu=function(e){return A(o(hr,op(e),ap(e)),o(hr,ip(e),tp(e)),o(hr,Ql(e),Kl(e)))},Yr=function(e){var r=e;return r.cu},Qi=function(e){var r=e;return Yr(r)},cp=function(e){return e},lp=function(e){return er({cu:cp({fT:e.I,fX:e.J,c$:e.K}),cZ:gr({fT:e.q,fX:e.r,c$:e.s}),c_:gr({fT:e.t,fX:e.u,c$:e.v}),c0:gr({fT:e.w,fX:e.x,c$:e.y})})},xt=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),ru=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Ar=function(e){var r=e;return r.cZ},Fr=function(e){var r=e;return r.c_},Vr=function(e){var r=e;return r.c0},nu=$(function(e,r){return{cu:o(ru,e,Yr(r)),cZ:o(xt,e,Ar(r)),c_:o(xt,e,Fr(r)),c0:o(xt,e,Vr(r))}}),zr=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),ja=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(De,n,a)}),kn=$(function(e,r){return U(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(kn,n,a)}),up=$(function(e,r){var n=ja(r),a=ja(e);return{dJ:o(le,a.dJ,n.dJ),dK:o(le,a.dK,n.dK),dL:o(le,a.dL,n.dL),dM:o(se,a.dM,n.dM),dN:o(se,a.dN,n.dN),dO:o(se,a.dO,n.dO)}}),Ue=function(e){var r=e;return r},vp=function(e){var r=e;return A(r.fT,r.fX,r.c$)},Mn=$(function(e,r){var n=e,a=r;return a+n}),$p=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ba(ie(a)),c=ba(ie(n)),l=ba(ie(t)),u=vp(r),v=u.a,s=u.b,d=u.c;return{dJ:o(Mn,c,v),dK:o(Mn,i,s),dL:o(Mn,l,d),dM:o(hr,c,v),dN:o(hr,i,s),dO:o(hr,l,d)}}),ec=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=Ue(Vr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c$),f=Ue(Fr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c$),b=Ue(Ar(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c$),x=o($p,A(w,g,m),o(ru,e,p(zr,s,v,u)));if(a.$)return ne(x);var _=a.a;return ne(o(up,_,x))}),no=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=T(ec,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=T(ec,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=T(no,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(nu,lp(v),e),m=r*v.bW,f=e,g=r,b=T(no,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),qr=Wf,Zr=Gf,Kr=If,au=function(e){return{$:4,a:e}},fp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Jn=function(e){return au(o(fp,e,z))},sp={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},dp=function(e){var r=e;return r},rc=qo({a9:ln,ci:0,cH:Oo,bm:fn,cY:255,bu:ln,bv:ln}),mp=function(e){var r=e,n=o(De,O(r.fT),o(De,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return c*n}else return tr},Fe={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fT:0,fX:0,c$:0},Xe=$(function(e,r){var n=e,a=r;return or({ds:n.fT,dt:n.bU,du:a.fT,dv:a.bU,dw:n.fX,dx:n.bF,dy:a.fX,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),Sn=L({be:o(Xe,Fe,Fe),bK:o(Xe,Fe,Fe),bL:o(Xe,Fe,Fe),bM:o(Xe,Fe,Fe)},T(gn,0,0,0,0)),ee=$(function(e,r){var n=r;return e*n}),nc=function(e){var r=e;return-r},tu=514,ou=function(e){var r=e._,n=e.X,a=e.W;return T(Uo,515,r,n,a)},iu=240,pp=h([ou({W:1,X:0,_:!0}),Yo({a9:Te,ci:iu,cH:0,bm:tu,cY:0,bu:Te,bv:Te}),Zo]),bp=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=ie(a),l=c,u=ie(t),v=u,s=n.cF;if(s.$){var m=s.a;return Ot(v)?or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Ot(v)?or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),oa=$(function(e,r){return(1&e>>r)===1?0:1}),gp=function(e){return h([ou({W:1,X:0,_:!0}),Yo({a9:Te,ci:iu,cH:e,bm:tu,cY:0,bu:Te,bv:Te}),Zo])},hp=y(function(e,r,n){return Ie(o(Q,function(a){var t=a<<4,i=T(gn,o(oa,a,0),o(oa,a,1),o(oa,a,2),o(oa,a,3));return p(rr,e,L(r,i),gp(t))},o(_r,1,o(Un,2,n)-1)))}),Pr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},un=function(e){var r=e;return r},_p=rs,ac=function(e){var r=e;return Pr(Vr(r))},cu=gr({fT:1,fX:0,c$:0}),Ko=cu,Qo=et,ei=gr({fT:0,fX:0,c$:1}),lu=ei,wp={cu:Pe,cZ:Ko,c_:Qo,c0:lu},Yn=function(e){var r=e;return r},yp=function(e){var r=Yn(Yr(e)),n=Ue(Vr(e)),a=Ue(Fr(e)),t=Ue(Ar(e));return or({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},xp=$(function(e,r){var n=r;return yp(o(nu,n,e))}),Sp=function(e){return o(xp,wp,e)},Cp=function(e){var r=e;return r.cX},Tp=function(e){var r=e;return Ar(r)},Lp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),zp=function(e){var r=e;return Fr(r)},Pp=function(e){var r=Cp(e.es),n=er({cu:Qi(r),cZ:Tp(r),c_:zp(r),c0:Pr(ac(r))}),a=Jn(e.aQ),t=a,i=T(no,n,1,Y,h([t]));if(i.$===1)return z;var c=i.a,l=Sp(r),u=o(ee,.99,o(le,ie(e.ex),nc(Kl(c)))),v=eu(c),s=v.a,d=v.b,m=v.c,f=mp(p(Lp,s,d,m)),g=o(ee,1.01,o(Mn,f,nc(Ql(c)))),b=o(bp,e.es,{en:e.en,eO:g,fe:u}),w=_p(b).dH,x=w?Ue(Pr(ac(r))):un(Qi(r)),_=function(){var oe=e.fJ;switch(oe.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var me=oe.a;return L(3,me);case 4:var me=oe.a;return L(4,me);default:return L(5,0)}}(),C=_.a,k=_.b,H=e.eM,R=H,j=o(rt,R,e.fQ),N=j,X=or({ds:0,dt:x.fT,du:qr(N),dv:e.d8,dw:0,dx:x.fX,dy:Zr(N),dz:dp(f),dA:0,dB:x.c$,dC:Kr(N),dD:C,dE:0,dF:w,dG:0,dH:k}),F=ye(Ol,X,l,b,sp,t,{N:z,V:z,fx:z}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ie(h([p(rr,F.N,L(K,wt),en),p(rr,F.V,Sn,en)]));case 1:var K=q.a;return Ie(h([p(rr,F.N,Sn,en),h([rc]),p(rr,F.fx,K.be,Yl),h([Zl(0)]),p(rr,F.N,L(K,wt),pp),p(rr,F.V,Sn,en)]));default:var ce=q.a,$e=q.b;return Ie(h([p(rr,F.N,L($e,wt),en),h([rc]),o(Y0,F.fx,ce),p(hp,F.N,$e,Ir(ce)),p(rr,F.V,Sn,en)]))}},kp=function(e){return o(Xn,"width",je(e))},Mp=$(function(e,r){var n=h([_0(1),C0(0),s0(!0),T(b0,0,0,0,0)]),a=function(){var C=e.el;switch(C.$){case 0:return A(n,"0",1);case 1:return A(o(B,m0,n),"1",1);default:var k=C.a;return A(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Yi(v),d=o(de,"height",je(s)+"px"),m=Yi(u),f=m/s,g=o(Io,function(C){return Pp({en:f,es:e.es,ex:e.ex,aQ:C.aQ,eM:C.eM,e8:C.e8,d8:c,fJ:C.fJ,fQ:C.fQ})},r),b=o(de,"width",je(m)+"px"),w=e.aJ,x=w,_=L0(x);return p(x0,"div",h([o(de,"padding","0px"),b,d]),h([L(i,p(k0,t,h([kp(Qe(m*c)),w0(Qe(s*c)),b,d,o(de,"display","block"),o(de,"background-color",_)]),g))]))}),Dp=function(e){return{$:2,a:e}},Bp=function(e){return Dp(e)},Ap=function(e){return o(Mp,{el:Bp(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},h([{aQ:e.aQ,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},tc=function(e){return e},lr=function(e){return e},Fp=function(e){var r=e;return r},nt=function(e){var r=e;return Fp(r.eo)},uu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Vp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),vu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),$u=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Ep=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),jp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Rp=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ri=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return T(Rp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return T(uu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return T(Vp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return T(vu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return T(jp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return T($u,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return T(Ep,n,a,t,1);case 8:return e;case 9:return e;default:return e}},ni={$:0},Np=re(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ja(c(u)),d=o(se,s.dM,e),m=o(le,s.dJ,r),f=o(se,s.dN,n),g=o(le,s.dK,a),b=o(se,s.dO,t),w=o(le,s.dL,i),x=c,_=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Hp=y(function(e,r,n){var a=ja(e(r));return Ga(Np,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),St=$(function(e,r){var n=e,a=r;return U(a,n)<1}),fu=function(e){return o(St,e.dJ,e.dM)&&o(St,e.dK,e.dN)&&o(St,e.dL,e.dO)?e:{dJ:o(le,e.dM,e.dJ),dK:o(le,e.dN,e.dK),dL:o(le,e.dO,e.dL),dM:o(se,e.dM,e.dJ),dN:o(se,e.dN,e.dK),dO:o(se,e.dO,e.dL)}},Rn=function(e){var r=e;return r},Hr=function(e){var r=e;return r.fT},Xr=function(e){var r=e;return r.fX},Wr=function(e){var r=e;return r.c$},su=function(e){var r=Rn(e),n=r.a,a=r.b,t=r.c,i=Hr(n),c=Xr(n),l=Wr(n),u=Hr(a),v=Xr(a),s=Wr(a),d=Hr(t),m=Xr(t),f=Wr(t);return fu({dJ:o(le,i,o(le,u,d)),dK:o(le,c,o(le,v,m)),dL:o(le,l,o(le,s,f)),dM:o(se,i,o(se,u,d)),dN:o(se,c,o(se,v,m)),dO:o(se,l,o(se,s,f))})},du=Uf,ke=function(e){return du(Yn(e))},mu=function(e){var r=e;return r},at=function(e){return du(mu(e))},pu=function(e){return e},Xp=$(function(e,r){var n=e,a=r,t=o(De,O(a.fT),o(De,O(a.fX),O(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=pr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return Gl}),Wp=Xp(pu(1)),bu=y(function(e,r,n){var a=o(Ea,r,n),t=o(Ea,e,r);return Wp(o(Xo,a,t))}),Gp=function(e){var r=Rn(e),n=r.a,a=r.b,t=r.c,i=at(p(bu,n,a,t));return A({o:i,dY:ke(n)},{o:i,dY:ke(a)},{o:i,dY:ke(t)})},Ip=$(function(e,r){return{$:2,a:e,b:r}}),gu=Ip({c8:3,dh:0,dQ:4}),Up=function(e){if(e.b){var r=e.a,n=e.b,a=gu(o(Q,Gp,e)),t=p(Hp,su,r,n);return T(uu,t,e,a,0)}else return ni},Ae=y(function(e,r,n){return A(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),hu=function(){var e=lr(1),r=lr(1),n=lr(1),a=o(ee,-.5,e),t=o(ee,-.5,r),i=o(ee,-.5,n),c=p(pe,i,t,a),l=o(ee,.5,e),u=p(pe,i,t,l),v=o(ee,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(ee,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return ri(Up(h([p(Ae,c,g,f),p(Ae,c,s,g),p(Ae,u,b,w),p(Ae,u,w,d),p(Ae,f,g,w),p(Ae,f,w,b),p(Ae,c,d,s),p(Ae,c,u,d),p(Ae,c,f,b),p(Ae,c,b,u),p(Ae,s,w,g),p(Ae,s,d,w)])))}(),ia={$:0},Op=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Jp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=at(p(bu,u,l,c)),s={o:v,dY:ke(u)},d={o:v,dY:ke(l)},m={o:v,dY:ke(c)};return o(B,s,o(B,d,o(B,m,n)))}),ai=function(e){var r=e;return r.E},Yp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return ne(p(e,t,i,c))}),ao=4294967295>>>32-Vn,to=mv,qp=y(function(e,r,n){e:for(;;){var a=ao&r>>>e,t=o(to,a,n);if(t.$){var v=t.a;return o(to,ao&r,v)}else{var i=t.a,c=e-Vn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Zp=function(e){return e>>>5<<5},Kp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?Y:U(e,Zp(n))>-1?ne(o(to,ao&e,i)):ne(p(qp,a,e,t))}),ti=function(e){var r=e;return r.ai},Ct=$(function(e,r){return o(Kp,e,ti(r))}),Qp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return T(Yp,y(function(c,l,u){return A(c,l,u)}),o(Ct,a,e),o(Ct,t,e),o(Ct,i,e))};return o(Ka,r,ai(e))},e3=y(function(e,r,n){e:for(;;){var a=o(Mo,Ne,e),t=a.a,i=a.b;if(U(It(t),Ne)<0)return o(vl,!0,{z:r,l:n,p:t});var c=i,l=o(B,ll(t),r),u=n+1;e=c,r=l,n=u;continue e}}),oi=function(e){return e.b?p(e3,e,z,0):il},r3=y(function(e,r,n){return e(r(n))}),n3=$(function(e,r){return!o(yl,o(r3,js,e),r)}),a3=$(function(e,r){return p(Sr,$(function(n,a){return e(n)?o(B,n,a):a}),z,r)}),t3=function(e){var r=e.a;return r},_u=$(function(e,r){var n=t3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(n3,a,r)?{E:r,ai:e}:{E:o(a3,a,r),ai:e}}),o3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),qn=o3({c8:1,dh:3,dQ:4}),ga=$(function(e,r){var n=un(r),a=un(e);return L(A(a.fT,a.fX,a.c$),A(n.fT,n.fX,n.c$))}),oc=p(On,0,0,0),Tt=Oe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Za,o(ga,e,r),t);if(v.$){var d={o:oc,dY:ke(r)},m={o:oc,dY:ke(e)},f=u+1,g=u;return A(o(B,A(n,g,f),o(B,A(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),i3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=v,C=a+3,k=ye(Tt,s,m,f,b,r,ye(Tt,d,s,g,f,r,ye(Tt,m,d,b,g,r,t)));e=w,r=x,n=_,a=C,t=k;continue e}else{var H=t,R=H.a,j=H.b;return L(R,Re(j))}}),c3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(Ln,o(ga,m,s),f,p(Ln,o(ga,s,d),g,p(Ln,o(ga,d,m),b,t))),x=o(B,A(b,g,f),a),_=e,C=v,k=n+3,H=x,R=w;e=_,r=C,n=k,a=H,t=R;continue e}else return A(a,t,n)}),Er=y(function(e,r,n){var a=Qp(n),t=p(Sr,Jp(r),z,a),i=S(c3,r,a,0,z,Xl),c=i.a,l=i.b,u=i.c,v=S(i3,r,l,a,0,A(c,z,u)),s=v.a,d=v.b,m=Hl(d)?t:ue(t,d);return p(Op,e,o(_u,oi(m),s),o(qn,m,s))}),oo=function(e){return{E:o(Q,function(r){return A(3*r,3*r+1,3*r+2)},o(_r,0,Ir(e)-1)),ai:oi(Ie(o(Q,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},wu=function(e){switch(e.$){case 0:return ia;case 1:var a=e.a,r=e.b,n=o(Q,Rn,r);return p(Er,a,Nr,oo(n));case 2:var a=e.a,r=e.b,n=o(Q,Rn,r);return p(Er,a,Nr,oo(n));case 3:var a=e.a,t=e.b;return p(Er,a,Nr,t);case 4:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Er,a,function(i){return i.dY},t);case 8:return ia;case 9:return ia;default:return ia}},ic=wu(hu),tt=function(e){var r=e;return r.aL},yu={$:0},P=yu,ge=$(function(e,r){return{$:1,a:e,b:r}}),l3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},u3=1029,v3=function(e){return{$:5,a:e}},xu=function(e){var r=e;return v3(r)},$3=xu(u3),f3=1028,s3=xu(f3),Me=y(function(e,r,n){return r===1?e?o(B,$3,n):o(B,s3,n):n}),Su={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Lt=E(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Me,l,a,d),Su,l3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),ii={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},dr=E(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){return S(ae,p(Me,l,a,d),Cu,ii,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),Tu=$(function(e,r){return{$:3,a:e,b:r}}),d3={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},m3=E(function(e,r,n,a){return o(Tu,n,re(function(t,i,c,l,u,v,s,d){return S(ae,d,Lu,d3,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ci={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Zn=function(e){var r=e;return r},ot=Of,mr=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Me,u,t,m),Cu,ci,a,{aO:o(ot,Zn(r),e),b:l,c,d:s,e:i,f:v})}))}),p3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},b3=he(function(e,r,n,a,t){return o(Tu,a,re(function(i,c,l,u,v,s,d,m){return S(ae,m,Lu,p3,t,{aO:o(ot,Zn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),zu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ca=E(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Pu,zu,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),ku={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g3=Oe(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Me,v,i,f),Mu,ku,t,{Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),Du={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},h3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,re(function(d,m,f,g,b,w,x,_){var C=x.a,k=x.b;return S(ae,p(Me,g,s,_),Mu,Du,v,{b0:e,b2:r,b3:i,b4:a,Q:k,be:C.be,bK:C.bK,bL:C.bL,bM:C.bM,co:t,b:f,c:m,aX:c,d:w,cL:n,e:d,a0:l,f:b})}))}}}}}}}}}}},Bu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},la=Oe(function(e,r,n,a,t,i){return o(ge,a,re(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Me,v,i,f),Pu,Bu,t,{b$:e,Q:b,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),_3=function(e){return{$:0,a:e}},cc=$(function(e,r){return{$:1,a:e,b:r}}),Dn=$(function(e,r){if(r.$){var n=r.a.C;return L(n,1)}else return r.a,L(e,0)}),w3=function(e){return T(gn,qr(e),Zr(e),Kr(e),1)},li=T(gn,0,0,0,0),ha=$(function(e,r){if(r.$){var a=r.a.C;return L(a,li)}else{var n=r.a;return L(e,w3(n))}}),Au=$(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.C;return o(cc,L(t,li),o(Dn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(cc,o(ha,t,e),o(Dn,t,r))}else{var a=n.a.a;return n.b.a,_3(a)}}),y3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ua=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),x3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),S3=function(e){return o(Ee,e,1)},io=o(Ee,0,0),rn=$(function(e,r){if(r.$){var a=r.a.C;return L(a,io)}else{var n=r.a;return L(e,S3(n))}}),Fu=E(function(e,r,n,a){var t=T(x3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return T(ua,L(u,li),o(rn,u,r),o(rn,u,n),o(Dn,u,a))}else if(t.b.$){var u=t.b.a.C;return T(ua,o(ha,u,e),L(u,io),o(rn,u,n),o(Dn,u,a))}else if(t.c.$){var u=t.c.a.C;return T(ua,o(ha,u,e),o(rn,u,r),L(u,io),o(Dn,u,a))}else if(t.d.$){var u=t.d.a.C;return T(ua,o(ha,u,e),o(rn,u,r),o(rn,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(y3,i,c,l)}}),C3={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},zt=he(function(e,r,n,a,t){return o(ge,n,re(function(i,c,l,u,v,s,d,m){return S(ae,p(Me,u,t,m),Su,C3,a,{bZ:Zn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Vu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T3=E(function(e,r,n,a){return o(ge,r,re(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Me,l,a,d),Vu,ku,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),L3=fo(function(e,r,n,a,t,i,c,l,u){return o(ge,c,re(function(v,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ae,p(Me,m,u,w),Vu,Du,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:x.be,bK:x.bK,bL:x.bL,bM:x.bM,co:t,b:d,c:s,aX:e,d:g,cL:n,e:v,a0:0,f})}))}),Nn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),z3=function(e){var r=e;return p(Nn,r.dM,r.dJ,.5)},P3=function(e){var r=e;return p(Nn,r.dN,r.dK,.5)},k3=function(e){var r=e;return p(Nn,r.dO,r.dL,.5)},M3=function(e){return p(pe,z3(e),P3(e),k3(e))},W=function(e){var r=eu(e),n=r.a,a=r.b,t=r.c;return{ev:Yn(M3(e)),eR:n/2,eS:a/2,eT:t/2}},ui=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(Lt,l,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return T(dr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return T(dr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return T(dr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return T(m3,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(zt,l,v,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(mr,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(mr,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(mr,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(b3,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,R=e.c,d=o(Au,s,R);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(T3,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(g3,b,x,_,W(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return T(ca,m,W(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return T(ca,m,W(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return T(ca,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return T(ca,m,W(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var C=e.b,k=e.c,H=e.d,R=e.e,j=T(Fu,C,k,H,R);if(j.$){var q=j.a,K=q.a,ce=q.b,$e=j.b,oe=$e.a,me=$e.b,Be=j.c,ze=Be.a,Cr=Be.b,Tr=j.d,x=Tr.a,_=Tr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return vv(L3,K,ce,oe,me,ze,Cr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return h3(K)(ce)(oe)(me)(ze)(Cr)(x)(_)(W(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=j.a,X=j.b,F=j.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(la,N,X,F,W(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(la,N,X,F,W(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(la,N,X,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(la,N,X,F,W(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),Pt=function(e){var r=e;return r.fT},kt=function(e){var r=e;return r.fX},Mt=function(e){var r=e;return r.c$},D3=function(e){var r=e,n=Mt(r.c0),a=kt(r.c0),t=Pt(r.c0),i=Mt(r.c_),c=kt(r.c_),l=Pt(r.c_),u=Mt(r.cZ),v=kt(r.cZ),s=Pt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},B3=function(e){var r=Yn(Yr(e)),n=Ue(Vr(e)),a=Ue(Fr(e)),t=Ue(Ar(e));return{dk:D3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,I:r.fT,J:r.fX,K:r.c$,bW:1}},nn=$(function(e,r){return{$:5,a:e,b:r}}),Eu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Ul,a,e);return o(nn,i,t);case 1:return o(nn,e,n);case 3:return o(nn,e,n);case 2:return o(nn,e,n);default:return o(nn,e,n)}}),ju=$(function(e,r){return o(Eu,B3(e),r)}),it=function(e){return{$:2,a:e}},A3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),F3=qf,V3=Yf,lc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=V3(a),g=f.fT,b=f.fX,w=f.c$,x=f.ei,_=F3({ei:x,fT:g*s,fX:b*d,c$:w*m});return Ga(r,n,_,t,i,c,l,u,v)}}}}}}}}}},co=$(function(e,r){switch(r.$){case 0:return yu;case 5:var n=r.a,a=r.b;return o(nn,n,o(co,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(A3,e,t),o(lc,e,i));case 3:return r;case 2:var i=r.a;return it(o(lc,e,i));default:var c=r.a;return au(o(Q,co(e),c))}}),vi=$(function(e,r){var n=r;return o(co,e,n)}),$i={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ru=7683,Nu=7682,E3=p(Jo,{ci:0,cH:0,cY:15},{a9:Te,bm:fn,bu:Te,bv:Ru},{a9:Te,bm:fn,bu:Te,bv:Nu}),j3=p(Jo,{ci:0,cH:0,cY:15},{a9:Te,bm:fn,bu:Te,bv:Nu},{a9:Te,bm:fn,bu:Te,bv:Ru}),fi=$(function(e,r){return e?o(B,j3,r):o(B,E3,r)}),R3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},N3=function(e){if(e.$){var r=e.c;return ne(re(function(n,a,t,i,c,l,u,v){return S(ae,o(fi,i,v),R3,$i,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return Y},Ra=function(e){var r=N3(e);if(r.$)return P;var n=r.a;return it(n)},H3=E(function(e,r,n,a){var t=o(ui,n,hu),i=function(){var s=L(e,r);return s.a?s.b?Jn(h([t,Ra(ic)])):t:s.b?Ra(ic):P}(),c=tt(a),l=c.a,u=c.b,v=c.c;return o(ju,nt(a),o(vi,A(l,u,v),i))}),X3=$(function(e,r){return T(H3,!0,!0,e,r)}),lo=function(e){return{$:0,a:e}},Hu=$(function(e,r){return{$:0,a:e,b:r}}),W3=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(On,n,a,t)},G3=function(e){return o(Hu,0,lo(W3(e)))},si=function(e){var r=e;return r.k},Ur=Sv,Bn=function(e){var r=e;return Ur(r)},I3=$(function(e,r){var n=r;return n/e}),sn=Cv,uc=function(e){var r=e;return{fT:Ur(r),fX:sn(r)}},U3=$(function(e,r){var n=e.dY,a=e.o;return o(B,{o:at(a),dY:ke(n)},r)}),O3=Wa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Kr(l.dY),s=Zr(l.dY),d=qr(l.dY),m=o(kn,e,d),f=o(De,r,d),g=o(kn,n,s),b=o(De,a,s),w=o(kn,t,v),x=o(De,i,v),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return fu({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Xu=$(function(e,r){var n=Kr(e.dY),a=Zr(e.dY),t=qr(e.dY);return so(O3,t,t,a,a,n,n,r)}),J3=function(e){var r=p(Kc,U3,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(qn,r,ai(e)),i=o(Xu,n,a);return T(vu,i,e,t,0)}else return ni},Wu=gr({fT:0,fX:0,c$:-1}),vc=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Na=function(e){var r=e;return sn(r)},uo=function(e){return sr(2*we*e)},Y3=Nr,$c=Y3({cu:Pe,cZ:Ko,c_:Qo}),Gu=function(){var e=72,r=o(I3,e,uo(1)),n=lr(1),a=on(ei),t=on(Wu),i=lr(1),c=o(ee,.5,i),l=p(pe,tr,tr,c),u=o(ee,-.5,i),v=p(pe,tr,tr,u),s=function(f){var g=o(ee,f,r),b=on(o(vc,$c,uc(g))),w=o(ee,Bn(g),n),x=o(ee,Na(g),n),_=p(pe,w,x,c),C=p(pe,w,x,u),k=o(Ba,e,f+1),H=o(ee,k,r),R=on(o(vc,$c,uc(H))),j=o(ee,Bn(H),n),N=o(ee,Na(H),n),X=p(pe,j,N,u),F=p(pe,j,N,c);return h([A({o:t,dY:v},{o:t,dY:X},{o:t,dY:C}),A({o:b,dY:C},{o:R,dY:X},{o:R,dY:F}),A({o:b,dY:C},{o:R,dY:F},{o:b,dY:_}),A({o:a,dY:l},{o:a,dY:_},{o:a,dY:F})])},d=o(Q,s,o(_r,0,e-1)),m=oo(Ie(d));return ri(J3(m))}(),fc=wu(Gu),Iu=function(e){var r=e;return r.eE},Uu=function(e){var r=e;return r.cu},q3=function(e){var r=Iu(e),n=Wo(r),a=n.a,t=n.b;return er({cu:Uu(e),cZ:a,c_:t,c0:r})},Ou=function(e){var r=e;return r.e6},Ju=function(e){var r=e;return r.fp},Z3=E(function(e,r,n,a){var t=q3(si(a)),i=o(ui,n,Gu),c=function(){var d=L(e,r);return d.a?d.b?Jn(h([i,Ra(fc)])):i:d.b?Ra(fc):P}(),l=Ju(a),u=l,v=Ou(a),s=v;return o(ju,t,o(vi,A(u,u,s),c))}),K3=$(function(e,r){return T(Z3,!0,!0,e,r)}),sc={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Cn=function(e){var r=Rn(e),n=r.a,a=r.b,t=r.c,i=un(n),c=un(a),l=un(t);return or({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},va=gu(h([A({cS:0},{cS:1},{cS:2})])),Q3=$(function(e,r){var n=su(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(ge,a,re(function(_,C,k,H,R,j,N,X){return S(ae,p(Me,H,0,X),sc,ii,va,{ax:t,b:k,c:C,d:j,e:_,br:Cn(r),f:R})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(ge,a,re(function(_,C,k,H,R,j,N,X){return S(ae,p(Me,H,0,X),sc,ci,va,{aO:o(ot,Zn(c),i),b:k,c:C,d:j,e:_,br:Cn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Au,l,f);if(u.$)return P;var v=u.a;return o(ge,a,re(function(_,C,k,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(Me,H,0,X),dc,zu,va,{Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:k,c:C,d:j,e:_,br:Cn(r),f:R})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=T(Fu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(ge,a,re(function(_,C,k,H,R,j,N,X){var F=N.a,q=N.b;return S(ae,p(Me,H,0,X),dc,Bu,va,{b$:b,Q:q,be:F.be,bK:F.bK,bL:F.bL,bM:F.bM,cn:x,b:k,c:C,d:j,cK:w,e:_,br:Cn(r),f:R})}))}}),eb=function(){var e=h([{a$:o(Ee,0,1)},{a$:o(Ee,1,1)},{a$:o(Ee,2,1)},{a$:o(Ee,0,-1)},{a$:o(Ee,1,-1)},{a$:o(Ee,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(qn,e,r)}(),rb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},mc=function(e){return it(re(function(r,n,a,t,i,c,l,u){return S(ae,o(fi,t,u),rb,$i,eb,{b:a,c:n,d:c,e:r,bX:l,br:Cn(e),f:i})}))},nb=E(function(e,r,n,a){var t=o(Q3,n,a),i=L(e,r);return i.a?i.b?Jn(h([t,mc(a)])):t:i.b?mc(a):P}),ab=$(function(e,r){return T(nb,!0,!0,e,r)}),di=function(e){var r=e;return r},tb=$(function(e,r){var n=Wr(r),a=Wr(e),t=Xr(r),i=Xr(e),c=Hr(r),l=Hr(e);return{dJ:o(le,l,c),dK:o(le,i,t),dL:o(le,a,n),dM:o(se,l,c),dN:o(se,i,t),dO:o(se,a,n)}}),ob=function(e){var r=di(e),n=r.a,a=r.b;return o(tb,n,a)},pc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=$(function(e,r){return{$:1,a:e,b:r}}),cb=ib({c8:2,dh:0,dQ:1}),bc=cb(h([L({dr:0},{dr:1})])),lb=$(function(e,r){var n=ob(r),a=W(n),t=di(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(ge,a,re(function(v,s,d,m,f,g,b,w){return S(ae,w,pc,ii,bc,{ax:l,dp:ke(c),dq:ke(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(ge,a,re(function(s,d,m,f,g,b,w,x){return S(ae,x,pc,ci,bc,{aO:o(ot,Zn(u),l),dp:ke(c),dq:ke(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),ub=$(function(e,r){return o(lb,e,r)}),ct=function(e){var r=e;return r.ev},lt=function(e){var r=e;return r.fp},$a=function(e){return sr(we*(e/180))},gc=$(function(e,r){var n=e,a=r;return n/a}),vb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(kr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),hc=$(function(e,r){return e<1?z:S(vb,0,e,e,r,z)}),$b=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(B,{o:at(a),dY:ke(n),M:o(Ee,c,l)},r)}),fb=function(e){var r=p(Kc,$b,z,ti(e));if(r.b){var n=r.a,a=r.b,t=o(qn,r,ai(e)),i=o(Xu,n,a);return T($u,i,e,t,0)}else return ni},mi=$(function(e,r){var n=e,a=r,t=Ur(a);return{fT:t*Ur(n),fX:t*sn(n),c$:sn(a)}}),sb=function(){var e=lr(1),r=72,n=o(_r,0,r-1),a=o(hc,r,o(Nn,tr,uo(1))),t=Po(r/2),i=o(_r,0,t-1),c=o(hc,t,o(Nn,$a(90),$a(-90))),l=oi(Ie(o(Q,function(s){return o(Q,function(d){return{o:on(o(mi,s,d)),dY:p(pe,o(ee,Bn(d)*Bn(s),e),o(ee,Bn(d)*Na(s),e),o(ee,Na(d),e)),M:L(o(gc,s,uo(1)),o(gc,o(Mn,$a(90),d),$a(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ie(o(Q,function(s){return Ie(o(Q,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([A(b,g,m),A(b,m,f)])},i))},n));return ri(fb(o(_u,l,v)))}(),Ha=72,fa=2*Ha,db=$(function(e,r){e:for(;;){var n=fa+1,a=o(Ba,fa,2*e+3),t=o(Ba,fa,2*e+2),i=2*e+1,c=2*e,l=fa,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),mb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),pb=$(function(e,r){e:for(;;){var n=p(mb,0,2*we,e/Ha),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),bb=function(){var e=o(pb,Ha-1,h([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(db,Ha-1,z);return o(qn,e,r)}(),gb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},_c=function(e){return it(re(function(r,n,a,t,i,c,l,u){return S(ae,o(fi,!0,u),gb,$i,bb,{ax:p(On,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},hb=function(e){var r=mu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fT,J:r.fX,K:r.c$,bW:1}},_b=$(function(e,r){return o(Eu,hb(e),r)}),wb=E(function(e,r,n,a){var t=o(ui,n,sb),i=function(){var u=L(e,r);return u.a?u.b?Jn(h([t,_c()])):t:u.b?_c():P}(),c=lt(a),l=c;return o(_b,o(Ea,Pe,ct(a)),o(vi,A(l,l,l),i))}),yb=$(function(e,r){return T(wb,!0,!0,e,r)}),xb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Yu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Sb=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Hu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(xb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Yu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Sb,n,a,t,i,c)}},Tb=Cb,qu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(X3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(ab,t,n)]);case 3:var t=e.a,a=e.b;return h([o(yb,Tb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(K3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(ub,G3(c),l)]);default:var u=e.a;return o(Io,qu,u)}},Lb=function(e){return o(Io,qu,e)},zb=$(function(e,r){return Ap({el:e.el,aJ:$0(e.ep),es:e.es,ex:lr(e.ex),b5:e.b5,aL:L(tc(Qe(e.cM.fR)),tc(Qe(e.cM.eV))),aQ:Lb(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),Zu=function(e){return e},Pb=$(function(e,r){var n=e,a=Ue(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(rt,r.bH,r.aK),u=l;return{bz:Kr(u),eu:n,bF:Zr(u),cD:0,bU:qr(u),cT:1,fT:-t,fX:-i,c$:-c}}),kb=function(e){return o(Pb,Zu(!0),{aK:e.aK,eE:o(mi,sr(e.by),sr(e.bD)),bH:e.bH})},Mb=function(e){return e},Db=function(e){return Mb(1.2*o(Un,2,e))},Dt=Go({fT:.37208,fX:.37529}),Bb=$(function(e,r){return{$:2,a:e,b:r}}),Ku=function(e){return{$:0,a:e}},sa=function(e){var r=e;return r},Ab=function(e){var r=e;return r.eu},Fb=Ku(Sn.a),Vb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(B,a,i),c):L(i,o(B,a,c))});return p(Sr,n,L(z,z),r)}),Eb=function(e){var r=e;return or({ds:r.fT,dt:r.bU,du:0,dv:0,dw:r.fX,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},jb=re(function(e,r,n,a,t,i,c,l){var u=o(Vb,Ab,h([sa(e),sa(r),sa(n),sa(a)])),v=u.a,s=u.b;if(v.b){var d=ue(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Bb,o(Q,Eb,v),{be:o(Xe,m,g),bK:o(Xe,w,_),bL:o(Xe,t,i),bM:o(Xe,c,l)})}else return Fb}else return Ku({be:o(Xe,e,r),bK:o(Xe,n,a),bL:o(Xe,t,i),bM:o(Xe,c,l)})}),Rb=E(function(e,r,n,a){return Ga(jb,e,r,n,a,Fe,Fe,Fe,Fe)}),Nb=$(function(e,r){return o(Ce,function(n){if(n.$)return 0;var a=n.b;return a},o(Za,e,r.aw))}),Hb=$(function(e,r){return o($r,0,Qa(o(Ka,Nb(e),r)))}),Xb=$(function(e,r){return o(Hb,e,r.ey)}),Tn=Xb,Wb={$:5},Gb=Wb,Ib=Go({fT:.44757,fX:.40745}),Ub=function(e){return e},Qu=T(Ye,114/255,159/255,207/255,1),wc=function(e){return e},Bt=function(e){return e},Ob={$:1},Jb=Ob,Yb=$(function(e,r){var n=e,a=Yn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(rt,r.bH,r.aK),u=l;return{bz:Kr(u),eu:n,bF:Zr(u),cD:0,bU:qr(u),cT:2,fT:t,fX:i,c$:c}}),yc=function(e){return o(Yb,Zu(!0),{aK:e.aK,bH:e.bH,dY:ma(e.dY)})},ev=T(Ye,52/255,101/255,164/255,1),Kn=$(function(e,r){return{$:0,a:e,b:r}}),At=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),Ft=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),qb=gr({fT:-1,fX:0,c$:0}),Zb=gr({fT:0,fX:-1,c$:0}),Kb=Oe(function(e,r,n,a,t,i){var c=o(At,n,i)?ei:Wu,l=o(At,r,t)?et:Zb,u=o(At,e,a)?cu:qb,v=A(ie(o(hr,e,a)),ie(o(hr,r,t)),ie(o(hr,n,i))),s=p(pe,o(Ft,e,a),o(Ft,r,t),o(Ft,n,i)),d=er({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aL:v}}),rv=$(function(e,r){return ye(Kb,Hr(e),Xr(e),Wr(e),Hr(r),Xr(r),Wr(r))}),vn=$(function(e,r){var n=r/2;return o(Kn,e,o(rv,p(zr,-n,-n,-n),p(zr,n,n,n)))}),ut=function(e){return{$:5,a:e}},He=function(e){return ut(e)},nv=T(Ye,138/255,226/255,52/255,1),Qb=T(Ye,173/255,127/255,168/255,1),Vt=function(e){return p(Il,0,1,e<=.04045?e/12.92:o(Un,(e+.055)/1.055,2.4))},eg=function(e){var r=Ro(e),n=r.cG,a=r.b7,t=r.b1;return p(On,Vt(n),Vt(a),Vt(t))},Le=function(e){return p(Yu,0,lo(eg(e)),lo(0))},vt=$(function(e,r){return{$:2,a:e,b:r}}),pi=$(function(e,r){return{$:4,a:e,b:r}}),$t=$(function(e,r){return{$:3,a:e,b:r}}),ft=$(function(e,r){return{$:1,a:e,b:r}}),rg=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Qn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),ng=$(function(e,r){return er({cu:o(Qn,e,Yr(r)),cZ:Ar(r),c_:Fr(r),c0:Vr(r)})}),ag=$(function(e,r){return{eo:o(ng,e,nt(r)),aL:tt(r)}}),Qr=$(function(e,r){return{eE:r,cu:e}}),tg=$(function(e,r){var n=r;return o(Qr,o(Qn,e,n.cu),n.eE)}),og=$(function(e,r){var n=r;return{k:o(tg,e,n.k),e6:n.e6,fp:n.fp}}),ig=function(e){return e},bi=$(function(e,r){var n=di(r),a=n.a,t=n.b;return ig(L(e(a),e(t)))}),cg=$(function(e,r){return o(bi,Qn(e),r)}),st=$(function(e,r){return{ev:r,fp:ie(e)}}),lg=$(function(e,r){return o(st,lt(r),o(Qn,e,ct(r)))}),gi=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),ug=$(function(e,r){return o(gi,Qn(e),r)}),dt=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(rg,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Kn,s,o(ag,i,c));case 1:var s=r.a,l=r.b;return o(ft,s,o(ug,i,l));case 3:var s=r.a,u=r.b;return o($t,s,o(lg,i,u));case 2:var s=r.a,v=r.b;return o(vt,s,o(og,i,v));case 4:var s=r.a,d=r.b;return o(pi,s,o(cg,i,d));default:var m=r.a;return ut(o(Q,dt(A(n,a,t)),m))}}),yr=function(e){return dt(A(e,0,0))},Se=function(e){return dt(A(0,e,0))},_a=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=sn(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c$*u,k=l*C,H=2*(w-k),R=2*(w+k),j=d*C,N=2*(j+b),X=2*(j-b),F=g*C,q=2*(F-m),K=2*(F+m),ce=C*C,$e=1-2*(x+ce),oe=1-2*(f+ce);return{fT:$e*i.fT+H*i.fX+N*i.c$,fX:R*i.fT+oe*i.fX+q*i.c$,c$:X*i.fT+K*i.fX+_*i.c$}}),ea=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=sn(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,x=l*w,_=w*w,C=b.fX*u,k=l*C,H=w*C,R=C*C,j=1-2*(_+R),N=b.c$*u,X=l*N,F=2*(H-X),q=2*(H+X),K=w*N,ce=2*(K+k),$e=2*(K-k),oe=C*N,me=2*(oe-x),Be=2*(oe+x),ze=N*N,Cr=1-2*(R+ze),Tr=1-2*(_+ze);return{fT:s.fT+Cr*d+F*m+ce*f,fX:s.fX+q*d+Tr*m+me*f,c$:s.c$+$e*d+Be*m+j*f}}),vg=y(function(e,r,n){return er({cu:p(ea,e,r,Yr(n)),cZ:p(_a,e,r,Ar(n)),c_:p(_a,e,r,Fr(n)),c0:p(_a,e,r,Vr(n))})}),$g=y(function(e,r,n){return{eo:p(vg,e,r,nt(n)),aL:tt(n)}}),fg=$(function(e,r){var n=o(ea,e,r),a=o(_a,e,r);return function(t){var i=t;return o(Qr,n(i.cu),a(i.eE))}}),sg=y(function(e,r,n){var a=n;return{k:p(fg,e,r,a.k),e6:a.e6,fp:a.fp}}),dg=y(function(e,r,n){return o(bi,o(ea,e,r),n)}),mg=y(function(e,r,n){return o(st,lt(n),p(ea,e,r,ct(n)))}),pg=y(function(e,r,n){return o(gi,o(ea,e,r),n)}),mt=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Kn,l,p($g,e,r,a));case 1:var l=n.a,t=n.b;return o(ft,l,p(pg,e,r,t));case 3:var l=n.a,i=n.b;return o($t,l,p(mg,e,r,i));case 2:var l=n.a,c=n.b;return o(vt,l,p(sg,e,r,c));case 4:var l=n.a,u=n.b;return o(pi,l,p(dg,e,r,u));default:var v=n.a;return ut(o(Q,o(mt,e,r),v))}}),bg=o(Qr,Pe,Ko),Xa=$(function(e,r){return p(mt,bg,sr(e),r)}),gg=o(Qr,Pe,Qo),ur=$(function(e,r){return p(mt,gg,sr(e),r)}),hg=o(Qr,Pe,lu),dn=$(function(e,r){return p(mt,hg,sr(e),r)}),av=$(function(e,r){return(r-ul(r/e)*e)/e}),Ke=$(function(e,r){return 360*o(av,e,r)}),_g=Lv,Gr=function(e){return e*we/180},wg=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(ft,e,p(Ae,p(zr,n.fT,n.fX,n.c$),p(zr,a.fT,a.fX,a.c$),p(zr,t.fT,t.fX,t.c$)))}),wa=T(Ye,255/255,255/255,255/255,1),tv=function(){var e=pr(3)/2,r=o(wg,Le(wa),A({fT:e,fX:0,c$:0},{fT:0,fX:.5,c$:0},{fT:0,fX:-.5,c$:0})),n=o(yr,-(e/3),o(ur,_g(1/3),r));return o(Se,-(e/3),o(Xa,Gr(90),He(h([o(yr,-(e/3),r),n,o(dn,Gr(120),n),o(dn,Gr(240),n)]))))}(),yg=function(e){var r=function(n){return o(dn,o(Ke,300,e.D),o(ur,o(Ke,300,e.D),o(Xa,o(Ke,300,e.D),n)))};return He(h([o(Se,2,o(yr,-2,r(o(vn,Le(nv),1)))),o(Se,2,o(yr,2,r(o(vn,Le(ev),1)))),o(Se,4,r(o(vn,Le(Qb),1))),o(Se,1.5,r(tv))]))},vo=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Kn,e,o(rv,p(zr,-c,-l,-u),p(zr,c,l,u)))}),xg=y(function(e,r,n){return{k:o(Qr,e,r),e6:ie(n.e6),fp:ie(n.fp)}}),Sg=y(function(e,r,n){return o(vt,e,p(xg,Pe,et,{e6:lr(n),fp:lr(r)}))}),ra=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c$:a.c$+r*(t.c$-a.c$)}}),Cg=y(function(e,r,n){var a=nt(n),t=Ar(a),i=Fr(a),c=Vr(a),l=p(ra,e,r,Yr(a)),u=r>=0?er({cu:l,cZ:t,c_:i,c0:c}):er({cu:l,cZ:Pr(t),c_:Pr(i),c0:Pr(c)}),v=tt(n),s=v.a,d=v.b,m=v.c,f=ie(o(ee,r,s)),g=ie(o(ee,r,d)),b=ie(o(ee,r,m));return{eo:u,aL:A(f,g,b)}}),xc=function(e){return Iu(si(e))},Tg=function(e){return Uu(si(e))},Lg=y(function(e,r,n){var a=ie(o(ee,r,Ju(n))),t=ie(o(ee,r,Ou(n))),i=r>=0?xc(n):Pr(xc(n)),c=p(ra,e,r,Tg(n));return{k:o(Qr,c,i),e6:t,fp:a}}),zg=y(function(e,r,n){return o(bi,o(ra,e,r),n)}),Pg=y(function(e,r,n){return o(st,o(ee,O(r),lt(n)),p(ra,e,r,ct(n)))}),kg=y(function(e,r,n){return o(gi,o(ra,e,r),n)}),An=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Kn,c,p(Cg,Pe,e,n));case 1:var c=r.a,a=r.b;return o(ft,c,p(kg,Pe,e,a));case 3:var c=r.a,t=r.b;return o($t,c,p(Pg,Pe,e,t));case 2:var c=r.a,i=r.b;return o(vt,c,p(Lg,Pe,e,i));case 4:var c=r.a,l=r.b;return o(pi,c,p(zg,Pe,e,l));default:var u=r.a;return ut(o(Q,An(e),u))}}),Mg=function(){var e=He(h([o(vn,Le(wa),1),o(ur,Gr(45),o(vn,Le(wa),1))]));return He(h([He(h([e,o(Se,-.4,o(An,1.3,e))])),o(Se,-.7,p(Sg,Le(wa),1,.5))]))}(),Sc=T(Ye,211/255,215/255,207/255,1),Dg=T(Ye,193/255,125/255,17/255,1),Bg=$(function(e,r){return o(Ce,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Za,e,r.aw))}),Ag=$(function(e,r){return o($r,0,Qa(o(Ka,Bg(e),r)))}),Fg=$(function(e,r){return o(Ag,e,r.ey)}),Vg=Fg,Eg=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return T(Ye,f,m,d,a)}),jg=y(function(e,r,n){return T(Eg,e,r,n,1)}),Rg=function(e){return 2*we*e},$o=E(function(e,r,n,a){return e+(r-e)*(1+Ur(Rg(o(av,n,a))))/2}),Ng=function(e){var r=o(Vg,"number of tree blocks",e),n=function(a){var t=o(kn,2,.2*(r-a)),i=p(jg,T($o,a/r,1,10,e.D),.6,.6),c=.25;return o(ur,o(Tn,"turning speed of the tree",e)*a*T($o,3,5,10,e.D),o(Se,a*1.2*c,o(vo,Le(i),A(t,c,t))))};return He(h([o(vo,Le(Dg),A(.2,8,.2)),He(o(Q,n,o(_r,0,r-1)))]))},Hg=function(e){var r=function(a){return o(Se,-1,o(vo,a,A(10,1,10)))},n=function(a){return He(h([r(a),o(ur,Gr(45),r(a))]))};return o(ur,o(Ke,1e3,e.D),He(h([Mg,n(Le(Sc)),o(Se,-.1,o(An,1.1,n(Le(ev)))),o(Se,-.2,o(An,1.2,n(Le(Sc)))),o(Se,1,o(yr,5,Ng(e))),He(o(Q,function(a){return o(ur,Gr(a*45),o(Se,-1/3,o(yr,5.5,o(An,2,tv))))},o(_r,1,7)))])))},Xg=T(Ye,245/255,121/255,0/255,1),Wg=function(e){var r=14;return He(o(Q,function(n){return o(Se,4,o(dn,o(Ke,1e3,e.D),o(Xa,o(Ke,1e3,e.D),o(ur,-o(Ke,200,e.D),o(ur,-(n/r*Gr(360)),o(yr,1.3,o(Se,T($o,-1,1,10,e.D),o(Xa,o(Ke,600,e.D),o(dn,o(Ke,300,e.D),o(vn,Le(Xg),.3))))))))))},o(_r,0,r-1)))},Gg=function(e){return dt(A(0,0,e))},Cc=$(function(e,r){return o($t,e,o(st,lr(r),Pe))}),Ig=function(e){return He(h([o(ur,-o(Ke,640,e.D),o(Gg,3.5,o(dn,o(Ke,100,e.D),He(h([o(yr,-.02,o(Cc,Le(Qu),.5)),o(yr,.02,o(Cc,Le(nv),.5))])))))]))},Ug=$(function(e,r){return h([Hg(e),yg(e),Wg(e),Ig(e)])}),Tc=function(e){var r=e;return r},Og=function(e){e:for(;;){if(kr(e.di,tr)&&kr(e.dj,tr))return Fe;if(o(Wl,ie(e.di),ie(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:Pr(e.ee)};e=r;continue e}else{var n=O(Tc(e.dj)/we),a=O(Tc(e.di)/we),t=Ue(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(rt,pu(1),e.aK),v=u;return{bz:a*Kr(v),eu:!1,bF:a*Zr(v),cD:n/a,bU:a*qr(v),cT:3,fT:i,fX:c,c$:l}}}},Jg=function(e){return Og({aK:e.aK,di:e.di,dj:e.dj,ee:o(mi,sr(e.by),sr(e.bD))})},Yg=$(function(e,r){var n=kb({by:o(Tn,"azimuth for third light",e),aK:v0(Ub(2e3)),bD:o(Tn,"elevation for third light",e),bH:Bt(120)}),a=yc({aK:Dt,bH:wc(6e3),dY:{fT:2,fX:3,c$:1}}),t=Jg({by:o(Tn,"azimuth for fourth light",e),aK:Dt,bD:o(Tn,"elevation for fourth light",e),di:Bt(20),dj:Bt(10)}),i=yc({aK:Ib,bH:wc(6e3),dY:{fT:-2,fX:4,c$:1}});return o(zb,{el:Jb,ep:Qu,es:l0,ex:.1,b5:e.b5,eM:Db(6),e8:T(Rb,i,a,n,t),cM:e.cM,fJ:Gb,fQ:Dt},o(Ug,e,r))}),qg=T(jm,Yg,Im,Gm,Rm);const Zg={Main:{init:qg(o(D,function(e){return Ve({e0:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ve({D:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",fe))},o(M,"devicePixelRatio",fe))},o(M,"dt",fe))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Ve({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ka(jn)))},o(M,"left",Z))},o(M,"pressedKeys",ka(jn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Ve({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",fe))},o(M,"y",fe))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Ve({eV:n,fR:r})},o(M,"height",fe))},o(M,"width",fe))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Ve({eB:r,eC:e})},o(M,"deltaX",fe))},o(M,"deltaY",fe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Kg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Qg=()=>{Et("pointerdown"),Et("wheel"),Et("keydown")},Et=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},eh=Zg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Qg();Kg(eh);
