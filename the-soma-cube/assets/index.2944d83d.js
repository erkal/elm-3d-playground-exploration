const ov=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};ov();function Pr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Pr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return Pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return Pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Xe(e){return Pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Fa(e){return Pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Kt(e){return Pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function m(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Qt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Va(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function iv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var cv=[];function lv(e){return e.length}var uv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),vv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),$v=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var fv=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+sv()),r});function sv(e){return"<internals>"}function cn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Lr(e,r){for(var n,a=[],t=Ct(e,r,0,a);t&&(n=a.pop());t=Ct(n.a,n.b,0,a));return t}function Ct(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&cn(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=xi(e),r=xi(r));for(var t in e)if(!Ct(e[t],r[t],n+1,a))return!1;return!0}$(Lr);$(function(e,r){return!Lr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var dv=$(function(e,r){var n=J(e,r);return n<0?Nc:n?Kf:Wc}),Rn=0;function k(e,r){return{a:e,b:r}}function S(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var mv=$(ar);function b(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Ra(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var pv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(m(e,r.a,n.a,a.a));return b(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return b(i)});Xe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Ra(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return b(Ra(r).sort(function(n,a){var t=o(e,n,a);return t===Wc?0:t===Nc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var bv=$(Math.pow);$(function(e,r){return r%e});var gv=$(function(e,r){var n=r%e;return e===0?cn(11):n>0&&e<0||n<0&&e>0?n+e:n}),hv=Math.PI,_v=Math.cos,wv=Math.sin,yv=Math.tan;$(Math.atan2);function xv(e){return e}function Sv(e){return e===1/0||e===-1/0}var Cv=Math.ceil,Lv=Math.floor,Pv=Math.round,zv=Math.sqrt,ui=Math.log,kv=isNaN;function Tv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Mv=$(function(e,r){return e+r});function Dv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ie(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}$(function(e,r){return e+r});function Av(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Bv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Fv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Vv=$(function(e,r){return r.split(e)}),Rv=$(function(e,r){return r.join(e)}),Ev=y(function(e,r,n){return n.slice(e,r)});function jv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Wv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Nv=$(function(e,r){return r.indexOf(e)>-1}),Hv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Gv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function dc(e){return e+""}function Xv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ie(n==45?-r:r)}function Iv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ie(r):q}function Uv(e){return Ra(e).join("")}function Jv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ov(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function qv(e){return{$:0,a:e}}function eo(e){return{$:2,b:e}}var Yv=eo(function(e){return typeof e=="boolean"?$e(e):Ze("a BOOL",e)}),Zv=eo(function(e){return typeof e=="number"?$e(e):Ze("a FLOAT",e)}),Kv=eo(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ze("a STRING",e)});function Qv(e){return{$:3,b:e}}var e$=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function zr(e,r){return{$:9,f:e,g:r}}var r$=$(function(e,r){return{$:10,b:r,h:e}}),n$=$(function(e,r){return zr(e,[r])}),a$=y(function(e,r,n){return zr(e,[r,n])});R(function(e,r,n,a){return zr(e,[r,n,a])});_e(function(e,r,n,a,t){return zr(e,[r,n,a,t])});Xe(function(e,r,n,a,t,i){return zr(e,[r,n,a,t,i])});Fa(function(e,r,n,a,t,i,c){return zr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return zr(e,[r,n,a,t,i,c,l])});Kt(function(e,r,n,a,t,i,c,l,u){return zr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return xe(o(fo,"This is not valid JSON! "+a.message,r))}});var mc=$(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ze("null",r);case 3:return Kn(r)?vi(e.b,r,b):Ze("a LIST",r);case 4:return Kn(r)?vi(e.b,r,t$):Ze("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ze("an OBJECT with a field named `"+n+"`",r);var v=je(e.b,r[n]);return Ue(v)?v:xe(o(Si,n,v.a));case 7:var a=e.e;if(!Kn(r))return Ze("an ARRAY",r);if(a>=r.length)return Ze("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=je(e.b,r[a]);return Ue(v)?v:xe(o(Hc,a,v.a));case 8:if(typeof r!="object"||r===null||Kn(r))return Ze("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=je(e.b,r[i]);if(!Ue(v))return xe(o(Si,i,v.a));t=ar(k(i,v.a),t)}return $e(Fe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=je(l[u],r);if(!Ue(v))return v;c=c(v.a)}return $e(c);case 10:var v=je(e.b,r);return Ue(v)?je(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=je(d.a,r);if(Ue(v))return v;s=ar(v.a,s)}return xe(Qf(Fe(s)));case 1:return xe(o(fo,e.a,r));case 0:return $e(e.a)}}function vi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ue(c))return xe(o(Hc,i,c.a));t[i]=c.a}return $e(n(t))}function Kn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function t$(e){return o(ps,e.length,function(r){return e[r]})}function Ze(e,r){return xe(o(fo,"Expecting "+e,r))}function qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return qr(e.b,r.b);case 6:return e.d===r.d&&qr(e.b,r.b);case 7:return e.e===r.e&&qr(e.b,r.b);case 9:return e.f===r.f&&$i(e.g,r.g);case 10:return e.h===r.h&&qr(e.b,r.b);case 11:return $i(e.g,r.g)}}function $i(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!qr(e[a],r[a]))return!1;return!0}var o$=$(function(e,r){return JSON.stringify(r,null,e)+""});function pc(e){return e}y(function(e,r,n){return n[e]=r,n});function Xr(e){return{$:0,a:e}}function i$(e){return{$:1,a:e}}function br(e){return{$:2,b:e,c:null}}var Lt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function c$(e){return{$:5,b:e}}var l$=0;function ro(e){var r={$:0,e:l$++,f:e,g:null,h:[]};return no(r),r}function bc(e){return br(function(r){r(Xr(ro(e)))})}function gc(e,r){e.h.push(r),no(e)}var u$=$(function(e,r){return br(function(n){gc(e,r),n(Xr(Rn))})}),tt=!1,fi=[];function no(e){if(fi.push(e),!tt){for(tt=!0;e=fi.shift();)v$(e);tt=!1}}function v$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,no(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return ao(r,a,e.e1,e.fQ,e.fK,function(){return function(){}})});function ao(e,r,n,a,t,i){var c=o(mc,e,r?r.flags:void 0);Ue(c)||cn(2);var l={},u=n(c.a),v=u.a,s=i(p,v),d=$$(l,p);function p(f,h){var g=o(a,f,v);s(v=g.a,h),di(l,g.b,t(v))}return di(l,u.b,t(v)),d?{ports:d}:{}}var er={};function $$(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=s$(t,r)}return n}function f$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function s$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Lt,l,c$(function(v){var s=v.a;return v.$===0?m(t,n,s,u):i&&c?z(a,n,s.i,s.j,u):m(a,n,i?s.i:s.j,u)}))}return n.h=ro(o(Lt,l,e.b))}var d$=$(function(e,r){return br(function(n){e.g(r),n(Xr(Rn))})});$(function(e,r){return o(u$,e.h,{$:0,a:r})});function hc(e){return function(r){return{$:1,k:e,l:r}}}function m$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var si=[],ot=!1;function di(e,r,n){if(si.push({p:e,q:r,r:n}),!ot){ot=!0;for(var a;a=si.shift();)p$(a.p,a.q,a.r);ot=!1}}function p$(e,r,n){var a={};pa(!0,r,a,null),pa(!1,n,a,null);for(var t in e)gc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function pa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=b$(e,t,a,r.l);n[t]=g$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)pa(e,c.a,n,a);return;case 3:pa(e,r.o,n,{s:r.n,t:a});return}}function b$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function g$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function h$(e){er[e]&&cn(3)}$(function(e,r){return r});function _$(e,r){return h$(e),er[e]={f:w$,u:r,a:y$},hc(e)}var w$=$(function(e,r){return function(n){return e(r(n))}});function y$(e,r){var n=P,a=er[e].u,t=Xr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(mc,a,c);Ue(l)||cn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ba,vr=typeof document!="undefined"?document:{};function to(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Sr(e,function(){}),t),{}});function Pt(e){return{$:0,a:e}}var _c=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:oo(n),e:t,f:e,b:i}})}),gr=_c(void 0),x$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:oo(n),e:t,f:e,b:i}})}),S$=x$(void 0);function C$(e,r,n,a){return{$:3,d:oo(e),g:r,h:n,i:a}}var L$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return kr([e,r],function(){return e(r)})});y(function(e,r,n){return kr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return kr([e,r,n,a],function(){return m(e,r,n,a)})});_e(function(e,r,n,a,t){return kr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});Xe(function(e,r,n,a,t,i){return kr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Fa(function(e,r,n,a,t,i,c){return kr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return kr([e,r,n,a,t,i,c,l],function(){return Qt(e,r,n,a,t,i,c,l)})});Kt(function(e,r,n,a,t,i,c,l,u){return kr([e,r,n,a,t,i,c,l,u],function(){return Va(e,r,n,a,t,i,c,l,u)})});var wc=$(function(e,r){return{$:"a0",n:e,o:r}}),P$=$(function(e,r){return{$:"a1",n:e,o:r}}),yc=$(function(e,r){return{$:"a2",n:e,o:r}}),En=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function z$(e){return e=="script"?"p":e}function k$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(wc,r.n,T$(e,r.o)):r});function T$(e,r){var n=ho(r);return{$:r.$,a:n?m(bs,n<3?M$:D$,Te(e),r.a):o(wa,e,r.a)}}var M$=$(function(e,r){return k(e(r.a),r.b)}),D$=$(function(e,r){return{al:e(r.al),cV:r.cV,cJ:r.cJ}});function oo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?mi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?mi(c,t,i):c[t]=i}return r}function mi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Sr(e,r){var n=e.$;if(n===5)return Sr(e.k||(e.k=e.m()),r);if(n===0)return vr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Sr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return zt(c,r,e.d),c}var c=e.f?vr.createElementNS(e.f,e.c):vr.createElement(e.c);ba&&e.c=="a"&&c.addEventListener("click",ba(c)),zt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)to(c,Sr(n===1?l[u]:l[u].b,r));return c}function zt(e,r,n){for(var a in n){var t=n[a];a==="a1"?A$(e,t):a==="a0"?V$(e,r,t):a==="a3"?B$(e,t):a==="a4"?F$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function A$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function B$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function F$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function V$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=R$(r,i),e.addEventListener(t,c,io&&{passive:ho(i)<2}),a[t]=c}}var io;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){io=!0}}))}catch{}function R$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ue(i)){for(var c=ho(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cV,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cJ)&&a.preventDefault(),e),d,p;d=s.j;){if(typeof d=="function")u=d(u);else for(var p=d.length;p--;)u=d[p](u);s=s.p}s(u,v)}}return n.q=r,n}function E$(e,r){return e.$==r.$&&qr(e.a,r.a)}function xc(e,r){var n=[];return Je(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=U$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,p=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof p!="object"?p=[p,g.j]:p.push(g.j),g=g.k;if(f&&d.length!==p.length){we(n,0,a,r);return}(f?!j$(d,p):d!==p)&&we(n,2,a,p),Je(h,g,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:pi(e,r,n,a,W$);return;case 2:pi(e,r,n,a,N$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=co(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function j$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function pi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=co(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function co(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=co(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&E$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function W$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function N$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,p=0,f=a;d<v&&p<s;){var h=l[d],g=u[p],w=h.a,x=g.a,_=h.b,L=g.b,D=void 0,H=void 0;if(w===x){f++,Je(_,L,t,f),f+=_.b||0,d++,p++;continue}var j=l[d+1],E=u[p+1];if(j){var W=j.a,G=j.b;H=x===W}if(E){var F=E.a,O=E.b;D=w===F}if(D&&H){f++,Je(_,O,t,f),dn(i,t,w,L,p,c),f+=_.b||0,f++,mn(i,t,w,G,f),f+=G.b||0,d+=2,p+=2;continue}if(D){f++,dn(i,t,x,L,p,c),Je(_,O,t,f),f+=_.b||0,d+=1,p+=2;continue}if(H){f++,mn(i,t,w,_,f),f+=_.b||0,f++,Je(G,L,t,f),f+=G.b||0,d+=2,p+=1;continue}if(j&&W===F){f++,mn(i,t,w,_,f),dn(i,t,x,L,p,c),f+=_.b||0,f++,Je(G,O,t,f),f+=G.b||0,d+=2,p+=2;continue}break}for(;d<v;){f++;var h=l[d],_=h.b;mn(i,t,h.a,_,f),f+=_.b||0,d++}for(;p<s;){var K=K||[],g=u[p];dn(i,t,g.a,g.b,void 0,K),p++}(t.length>0||c.length>0||K)&&we(n,8,a,{w:t,x:c,y:K})}var Sc="_elmW6BL";function dn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}dn(e,r,n+Sc,a,t,i)}function mn(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}mn(e,r,n+Sc,a,t)}function Cc(e,r,n,a){pn(e,r,n,0,0,r.b,a)}function pn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Cc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&pn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&pn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var f=r.k;f.$===4;)f=f.k;return pn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,w=0;w<h.length;w++){t++;var x=p===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=pn(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Lc(e,r,n,a){return n.length===0?e:(Cc(e,r,n,a),ga(e,n))}function ga(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=H$(t,a);t===e&&(e=i)}return e}function H$(e,r){switch(r.$){case 0:return G$(e,r.s,r.u);case 4:return zt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ga(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Sr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ga(e,i.w),e;case 8:return X$(e,r);case 5:return r.s(e);default:cn(10)}}function G$(e,r,n){var a=e.parentNode,t=Sr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function X$(e,r){var n=r.s,a=I$(n.y,r);e=ga(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Sr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&to(e,a),e}function I$(e,r){if(!!e){for(var n=vr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;to(n,i.c===2?i.s:Sr(i.z,r.u))}return n}}function lo(e){if(e.nodeType===3)return Pt(e.textContent);if(e.nodeType!==1)return Pt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(En,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=ar(lo(v[a]),u);return m(gr,l,r,u)}function U$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var J$=R(function(e,r,n,a){return ao(r,a,e.e1,e.fQ,e.fK,function(t,i){var c=e.fT,l=a.node,u=lo(l);return Pc(i,function(v){var s=c(v),d=xc(u,s);l=Lc(l,u,d,t),u=s})})});R(function(e,r,n,a){return ao(r,a,e.e1,e.fQ,e.fK,function(t,i){var c=e.cS&&e.cS(t),l=e.fT,u=vr.title,v=vr.body,s=lo(v);return Pc(i,function(d){ba=c;var p=l(d),f=gr("body")(P)(p.eu),h=xc(s,f);v=Lc(v,s,h,t),s=f,ba=0,u!==p.fO&&(vr.title=u=p.fO)})})});var ha=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Pc(e,r){r(e);var n=0;function a(){n=n===1?0:(ha(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ha(a),n=2)}}$(function(e,r){return o(yo,_o,br(function(){r&&history.go(r),e()}))});$(function(e,r){return o(yo,_o,br(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(yo,_o,br(function(){history.replaceState({},"",r),e()}))});var O$={addEventListener:function(){},removeEventListener:function(){}},q$=typeof window!="undefined"?window:O$;y(function(e,r,n){return bc(br(function(a){function t(i){ro(n(i))}return e.addEventListener(r,t,io&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=je(e,r);return Ue(n)?ie(n.a):q});function zc(e,r){return br(function(n){ha(function(){var a=document.getElementById(e);n(a?Xr(r(a)):i$(hs(e)))})})}function Y$(e){return br(function(r){ha(function(){r(Xr(e()))})})}$(function(e,r){return zc(r,function(n){return n[e](),Rn})});$(function(e,r){return Y$(function(){return q$.scroll(e,r),Rn})});y(function(e,r,n){return zc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Z$=$(function(e,r){var n="g";e.ff&&(n+="m"),e.ew&&(n+="i");try{return ie(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var K$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ie(d):q}a.push(z(wl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ie(v):q}return n(z(wl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Q$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ef(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ef(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var uo=new Float64Array(3),bi=new Float64Array(3),gi=new Float64Array(3),rf=y(function(e,r,n){return new Float64Array([e,r,n])}),nf=function(e){return e[0]},af=function(e){return e[1]},tf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var of=function(e){return new Float64Array([e.fX,e.f$,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function kc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(kc);function Tc(e,r,n){return n===void 0&&(n=new Float64Array(3)),_a(kc(e,r,n),n)}$(Tc);function Mc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function _a(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Mc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var cf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),bn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(bn);function kt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(kt);$(function(e,r){var n,a=uo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=bn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(bn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(bn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(bn(r,a)+e[14])/n,t});var lf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var uf=function(e){return{fX:e[0],f$:e[1],c5:e[2],em:e[3]}},vf=function(e){return new Float64Array([e.fX,e.f$,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/$f(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function $f(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var ff=new Float64Array(16),sf=new Float64Array(16),df=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},mf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Dc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Xe(Dc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Dc(c,l,i,t,n,a)});function Ac(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Xe(Ac);R(function(e,r,n,a){return Ac(e,r,n,a,-1,1)});function Bc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],p=e[9],f=e[10],h=e[11],g=e[12],w=e[13],x=e[14],_=e[15],L=r[0],D=r[1],H=r[2],j=r[3],E=r[4],W=r[5],G=r[6],F=r[7],O=r[8],K=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],ke=r[14],Ce=r[15];return n[0]=a*L+l*D+d*H+g*j,n[1]=t*L+u*D+p*H+w*j,n[2]=i*L+v*D+f*H+x*j,n[3]=c*L+s*D+h*H+_*j,n[4]=a*E+l*W+d*G+g*F,n[5]=t*E+u*W+p*G+w*F,n[6]=i*E+v*W+f*G+x*F,n[7]=c*E+s*W+h*G+_*F,n[8]=a*O+l*K+d*le+g*fe,n[9]=t*O+u*K+p*le+w*fe,n[10]=i*O+v*K+f*le+x*fe,n[11]=c*O+s*K+h*le+_*fe,n[12]=a*ce+l*pe+d*ke+g*Ce,n[13]=t*ce+u*pe+p*ke+w*Ce,n[14]=i*ce+v*pe+f*ke+x*Ce,n[15]=c*ce+s*pe+h*ke+_*Ce,n}$(Bc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],p=e[12],f=e[13],h=e[14],g=r[0],w=r[1],x=r[2],_=r[4],L=r[5],D=r[6],H=r[8],j=r[9],E=r[10],W=r[12],G=r[13],F=r[14];return n[0]=a*g+c*w+v*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+d*x,n[3]=0,n[4]=a*_+c*L+v*D,n[5]=t*_+l*L+s*D,n[6]=i*_+u*L+d*D,n[7]=0,n[8]=a*H+c*j+v*E,n[9]=t*H+l*j+s*E,n[10]=i*H+u*j+d*E,n[11]=0,n[12]=a*W+c*G+v*F+p,n[13]=t*W+l*G+s*F+f,n[14]=i*W+u*G+d*F+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=_a(r,uo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Mc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,p=c*s,f=l*s,h=i*c*v,g=i*l*v,w=c*l*v,x=i*i*v+u,_=h+f,L=g-p,D=h-f,H=c*c*v+u,j=w+d,E=g+p,W=w-d,G=l*l*v+u,F=n[0],O=n[1],K=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],ke=n[7],Ce=n[8],_r=n[9],wr=n[10],at=n[11],rv=n[12],nv=n[13],av=n[14],tv=n[15];return a[0]=F*x+fe*_+Ce*L,a[1]=O*x+ce*_+_r*L,a[2]=K*x+pe*_+wr*L,a[3]=le*x+ke*_+at*L,a[4]=F*D+fe*H+Ce*j,a[5]=O*D+ce*H+_r*j,a[6]=K*D+pe*H+wr*j,a[7]=le*D+ke*H+at*j,a[8]=F*E+fe*W+Ce*G,a[9]=O*E+ce*W+_r*G,a[10]=K*E+pe*W+wr*G,a[11]=le*E+ke*W+at*G,a[12]=rv,a[13]=nv,a[14]=av,a[15]=tv,a});function pf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(pf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function bf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(bf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],p=a[7],f=a[8],h=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=p,t[8]=f,t[9]=h,t[10]=g,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+p*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],p=r[6],f=r[7],h=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=p,n[7]=f,n[8]=h,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+p*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Tc(e,r,uo),t=_a(kt(n,a,bi),bi),i=_a(kt(a,t,gi),gi),c=ff,l=sf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Bc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var hi=0;function kn(e,r){for(;r.b;r=r.b)e(r.a)}function vo(e){for(var r=0;e.b;e=e.b)r++;return r}var gf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},hf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),_f=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),wf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),yf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),xf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Lf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Pf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),zf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},kf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Tf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Mf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Fc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Vc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Df=function(e){e.gl.disable(e.gl.CULL_FACE)},Af=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Bf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ff=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},_i=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Vf=[kf,Tf,Mf,Fc,Vc,Df,Af,Bf,Ff];function wi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Rf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Rc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ef(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,w,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?w[x]:w[x][_];else i.forEach(function(L){for(_=0;_<h;_++)f[g++]=h===1?w[L][x]:w[L][x][_]})}var u=Rc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(vo(n.b)*s);kn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),p}function jf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Wf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*vo(r.b),indexBuffer:null,buffers:{}}}function Wf(e,r){var n=new Uint32Array(vo(e)*r),a=0,t;return kn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function yi(e,r){return e+"#"+r}var Ec=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Fc(n),Vc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=yi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=hi++,v||(v=wi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=hi++,s||(s=wi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Rf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Nf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=yi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Hf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=jf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Ef(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Rc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,L=0;L<w.arraySize;L++)a.enableVertexAttribArray(h+L),a.vertexAttribPointer(h+L,w.size,w.baseType,!1,_,x*L)}for(n.toggle=!n.toggle,kn(gp(n),i.a),u=0;u<_i.length;u++){var D=n[_i[u]];D.toggle!==n.toggle&&D.enabled&&(Vf[u](n),D.enabled=!1,D.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return kn(t,e.g),r});function Nf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,w=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var L=l.textures.get(_);L||(L=_.eC(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var p=e.getActiveUniform(t,d);v[a[p.name]||p.name]=u(t,p)}return v}function Hf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Gf=y(function(e,r,n){return C$(r,{g:n,f:{},h:e},Yf,Zf)}),Xf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),If=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Uf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Jf=$(function(e,r){e.contextAttributes.antialias=!0}),Of=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),qf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Yf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};kn(function(t){return o(bp,r,t)},e.h);var n=vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),gf(function(){return o(Ec,e,n)})):(n=vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Zf(e,r){return r.f=e.f,Ec(r)}var M=mv,Qn=fv,jc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return m(Qn,e,l,v)}else{var u=c.a;return m(Qn,i,l,u)}});return m(Qn,i,m(Qn,e,r,t),a)}),$o=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=m(e,a,t,m($o,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),xi=function(e){return m($o,y(function(r,n,a){return o(M,k(r,n),a)}),P,e)},Wc=1,Kf=2,Nc=0,xe=function(e){return{$:1,a:e}},fo=$(function(e,r){return{$:3,a:e,b:r}}),Si=$(function(e,r){return{$:0,a:e,b:r}}),Hc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Qf=function(e){return{$:2,a:e}},ie=function(e){return{$:0,a:e}},q={$:1},es=Wv,rs=o$,Ae=dc,Fr=$(function(e,r){return o(Rv,e,Ra(r))}),so=$(function(e,r){return b(o(Vv,e,r))}),Gc=function(e){return o(Fr,`
    `,o(so,`
`,e))},jn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Nr=function(e){return m(jn,$(function(r,n){return n+1}),0,e)},ns=pv,as=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Hr=$(function(e,r){return m(as,e,r,P)}),mo=$(function(e,r){return m(ns,e,o(Hr,0,Nr(r)-1),r)}),rr=Jv,Xc=function(e){var r=rr(e);return 97<=r&&r<=122},Ic=function(e){var r=rr(e);return r<=90&&65<=r},ts=function(e){return Xc(e)||Ic(e)},os=function(e){var r=rr(e);return r<=57&&48<=r},is=function(e){return Xc(e)||Ic(e)||os(e)},Fe=function(e){return m(jn,M,P,e)},ln=Dv,cs=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Gc(ls(r))))}),ls=function(e){return o(us,e,P)},us=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=ln(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return ts(x)&&o(es,is,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(M,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(M,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Fr,"",Fe(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Ae(Nr(s))+" ways:"));return o(Fr,`

`,o(M,h,o(mo,cs,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Fr,"",Fe(r)):"!"}();default:var p=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Fr,"",Fe(r))+`:

    `):`Problem with the given value:

`}();return h+(Gc(o(rs,4,f))+(`

`+p))}}),Ve=32,Tt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mt=cv,po=Cv,bo=$(function(e,r){return ui(r)/ui(e)}),vs=xv,Tn=po(o(bo,2,Ve)),Uc=z(Tt,0,Tn,Mt,Mt),Jc=uv,Oc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var qc=Lv,Dt=lv,nr=$(function(e,r){return J(e,r)>0?e:r}),$s=function(e){return{$:0,a:e}},go=vv,fs=$(function(e,r){e:for(;;){var n=o(go,Ve,e),a=n.a,t=n.b,i=o(M,$s(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Fe(i)}}),ss=function(e){var r=e.a;return r},ds=$(function(e,r){e:for(;;){var n=po(r/Ve);if(n===1)return o(go,Ve,e).a;var a=o(fs,e,P),t=n;e=a,r=t;continue e}}),Yc=$(function(e,r){if(r.l){var n=r.l*Ve,a=qc(o(bo,Ve,n-1)),t=e?Fe(r.z):r.z,i=o(ds,t,r.l);return z(Tt,Dt(r.p)+n,o(nr,5,a*Tn),i,r.p)}else return z(Tt,Dt(r.p),Tn,Mt,r.p)}),ms=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Yc,!1,{z:a,l:n/Ve|0,p:t});var i=Oc(m(Jc,Ve,r,e)),c=e,l=r-Ve,u=n,v=o(M,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ps=$(function(e,r){if(e<=0)return Uc;var n=e%Ve,a=m(Jc,n,e-n,r),t=e-n-Ve;return C(ms,r,t,e,P,a)}),Ue=function(e){return!e.$},B=r$,Y=Yv,A=e$,se=Zv,wa=n$,bs=a$,Te=qv,ho=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},N=gr("div"),gs=function(e){return{$:2,a:e}},Zc=$(function(e,r){return e}),Kc=$(function(e,r){return{db:r.db,eA:e,b9:r.b9,eK:r.eK,e8:r.e8,fr:r.fr,cR:r.cR,fU:r.fU}}),Rr=function(e){return e},hs=Rr,Ci=Xe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),_s=Nv,Vr=Av,Yr=Ev,Wn=$(function(e,r){return e<1?r:m(Yr,e,Vr(r),r)}),Ea=Gv,ja=function(e){return e===""},Wa=$(function(e,r){return e<1?"":m(Yr,0,e,r)}),Qc=Xv,Li=_e(function(e,r,n,a,t){if(ja(t)||o(_s,"@",t))return q;var i=o(Ea,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Qc(o(Wn,c+1,t));if(l.$===1)return q;var u=l;return ie(ye(Ci,e,o(Wa,c,t),u,r,n,a))}else return ie(ye(Ci,e,t,q,r,n,a))}),Pi=R(function(e,r,n,a){if(ja(a))return q;var t=o(Ea,"/",a);if(t.b){var i=t.a;return C(Li,e,o(Wn,i,a),r,n,o(Wa,i,a))}else return C(Li,e,"/",r,n,a)}),zi=y(function(e,r,n){if(ja(n))return q;var a=o(Ea,"?",n);if(a.b){var t=a.a;return z(Pi,e,ie(o(Wn,t+1,n)),r,o(Wa,t,n))}else return z(Pi,e,q,r,n)});$(function(e,r){if(ja(r))return q;var n=o(Ea,"#",r);if(n.b){var a=n.a;return m(zi,e,ie(o(Wn,a+1,r)),o(Wa,a,r))}else return m(zi,e,q,r)});var ws=Hv,_o=function(e){},Nn=Xr,ys=Nn(0),el=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,p=n>500?m(jn,e,r,Fe(d)):z(el,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,p))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=y(function(e,r,n){return z(el,e,r,0,n)}),re=$(function(e,r){return m(or,$(function(n,a){return o(M,e(n),a)}),P,r)}),ya=Lt,wo=$(function(e,r){return o(ya,function(n){return Nn(e(n))},r)}),xs=y(function(e,r,n){return o(ya,function(a){return o(ya,function(t){return Nn(o(e,a,t))},n)},r)}),Ss=function(e){return m(or,xs(M),Nn(P),e)},Cs=d$,Ls=$(function(e,r){var n=r;return bc(o(ya,Cs(e),n))}),Ps=y(function(e,r,n){return o(wo,function(a){return 0},Ss(o(re,Ls(e),r)))}),zs=y(function(e,r,n){return Nn(0)}),ks=$(function(e,r){var n=r;return o(wo,e,n)});er.Task=f$(ys,Ps,zs,ks);var Ts=hc("Task"),yo=$(function(e,r){return Ts(o(wo,e,r))}),Ms=J$,Ds=Tv,xa={$:1},rl=function(e){return{$:2,a:e}},Na={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),oe=y(function(e,r,n){return r(e(n))}),un=function(e){var r=e.b.B;return r.a},As=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ie(o(Ne,r,{B:i,ab:c,T:o(M,a,n)}))}else return q},nl=function(e){var r=e.b;return o(Ne,Na,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Bs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fr.de?nl(n):n;case 2:var i=a.a.cW;return(J(i+r.eK,un(n).db)>0?o(oe,As,dr(o(Ne,xa,t))):Rr)(o(Ne,rl({cW:i+r.eK}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Kc,l.eA,Ke(r,{db:l.db+r.eK})),s=o(e,v,u);return o(Ne,Na,{B:k(v,s),ab:P,T:o(M,t.B,t.T)})}}),al=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Fs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(M,a,n);e=i,r=c,n=l;continue e}else return n}}),Vs=$(function(e,r){return Fe(m(Fs,e,r,P))}),tl=y(function(e,r,n){if(r<=0)return P;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,p=d.b,c=p.a,f=p.b,s=f.a,h=f.b,g=h.a,w=h.b;return e>1e3?o(M,_,o(M,c,o(M,s,o(M,g,o(Vs,r-4,w))))):o(M,_,o(M,c,o(M,s,o(M,g,m(tl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),Rs=$(function(e,r){return m(tl,0,e,r)}),Es=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Fe(n),ve(b([a]),t)),c=o(Rs,e,i),l=o(al,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,xa,{B:u,ab:v,T:Fe(c)})}else{var s=Fe(c);if(s.b){var d=s.a,p=s.b;return o(Ne,xa,{B:d,ab:P,T:p})}else return r}}),js=function(e){var r=e.b;return o(Ne,xa,r)},Ws=function(e){var r=e.b;return o(Ne,rl({cW:un(e).db}),r)},Ns=$(function(e,r){switch(e.$){case 1:return js(r);case 2:return nl(r);case 3:return Ws(r);default:var n=e.a;return o(Es,n,r)}}),ol=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Hs=$(function(e,r){return Ke(r,{av:e(r.av)})}),Gs=function(e){return{$:3,a:e}},il=function(e){return{$:2,a:e}},cl=$(function(e,r){return{$:0,a:e,b:r}}),Xs=$(function(e,r){return{$:1,a:e,b:r}}),Be=$(function(e,r){if(r.$)return q;var n=r.a;return ie(e(n))}),Z=function(e){return e<0?-e:e},xo=Iv,Is=y(function(e,r,n){return o(dr,0/0,xo(o(e,r,n)))}),ll=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Us=Fv,ul=function(e){return m(Us,M,P,e)},Js=$(function(e,r){var n=o(ll,function(a){return a!=="0"&&a!=="."},ul(r));return ve(e&&n?"-":"",r)}),ge=dc,At=Mv,vl=Ov,$l=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ln(n);if(a.$===1)return"01";var t=a.a;return o(At,"0",$l(t))}else{var i=rr(r);return i>=48&&i<57?o(At,vl(i+1),n):"0"}},Bt=Sv,Os=kv,Ha=function(e){return o(At,e,"")},fl=y(function(e,r,n){return e<=0?n:m(fl,e>>1,ve(r,r),e&1?ve(n,r):n)}),Mn=$(function(e,r){return m(fl,e,r,"")}),Ft=y(function(e,r,n){return ve(n,o(Mn,e-Vr(n),Ha(r)))}),Vt=Bv,sl=function(e){var r=o(so,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},qs=function(e){var r=o(so,"e",ge(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,Qc(o(ws,"+",t)?o(Wn,1,t):t)),c=sl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(dr,"0",o(Be,function(d){var p=d.a,f=d.b;return p+("."+f)},o(Be,ol(Ha),ln(ve(o(Mn,Z(i),"0"),v))))):m(Ft,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ys=y(function(e,r,n){if(Bt(n)||Os(n))return ge(n);var a=n<0,t=sl(qs(Z(n))),i=t.a,c=t.b,l=Vr(i)+r,u=ve(o(Mn,-l+1,"0"),m(Ft,l,"0",ve(i,c))),v=Vr(u),s=o(nr,1,l),d=o(e,a,m(Yr,s,v,u)),p=m(Yr,0,s,u),f=d?Vt(o(dr,"1",o(Be,$l,ln(Vt(p))))):p,h=Vr(f),g=f==="0"?f:r<=0?ve(f,o(Mn,Z(r),"0")):J(r,Vr(c))<0?m(Yr,0,h-r,f)+("."+m(Yr,h-r,h,f)):ve(i+".",m(Ft,r,"0",c));return o(Js,a,g)}),yn=Ys($(function(e,r){var n=ln(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Zs=Is(yn),Ks=y(function(e,r,n){var a=o(bo,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Zs,t,n)}),dl=dv,So=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(dl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ie(a);default:var l=e,u=i;e=l,r=u;continue e}}}),I=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},an=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,p=a.e;return C(I,0,r,n,C(I,1,v,s,d,p),C(I,1,i,c,l,u))}else return C(I,e,i,c,C(I,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,w=f.d,x=f.e,p=a.e;return C(I,0,v,s,C(I,1,h,g,w,x),C(I,1,r,n,p,t))}else return C(I,e,r,n,a,t)}),Rt=y(function(e,r,n){if(n.$===-2)return C(I,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(dl,e,t);switch(u){case 0:return C(an,a,t,i,m(Rt,e,r,c),l);case 1:return C(I,a,t,r,c,l);default:return C(an,a,t,i,c,m(Rt,e,r,l))}}),xn=y(function(e,r,n){var a=m(Rt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(I,1,t,i,c,l)}else{var u=a;return u}}),Qs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ml=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,p=v.d;p.a;var f=p.b,h=p.c,g=p.d,w=p.e,x=v.e;return C(I,0,f,h,C(I,1,n,a,C(I,0,i,c,l,u),g),C(I,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,d=L.c,p=L.d,x=L.e;return C(I,1,n,a,C(I,0,i,c,l,u),C(I,0,s,d,p,x))}else return e},ki=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,p=t.e,f=e.e;f.a;var h=f.b,g=f.c,w=f.d,x=f.e;return C(I,0,i,c,C(I,1,u,v,s,d),C(I,1,n,a,p,C(I,0,h,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,p=_.e,D=e.e;D.a;var h=D.b,g=D.c,w=D.d,x=D.e;return C(I,1,n,a,C(I,0,i,c,L,p),C(I,0,h,g,w,x))}else return e},ed=Fa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(I,n,l,u,v,C(I,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,ki(r)}else break e;else return c.a,c.d,ki(r);else break e;return r}}),ua=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(I,r,n,a,ua(t),l);var u=ml(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,p=u.d,f=u.e;return C(an,v,s,d,ua(p),f)}else return tr}else return C(I,r,n,a,ua(t),l)}else return tr},Sn=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(I,n,a,t,o(Sn,e,i),c);var u=ml(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,p=u.d,f=u.e;return C(an,v,s,d,o(Sn,e,p),f)}else return tr}else return C(I,n,a,t,o(Sn,e,i),c);else return o(rd,e,Qt(ed,e,r,n,a,t,i,c))}),rd=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Lr(e,a)){var l=Qs(c);if(l.$===-1){var u=l.b,v=l.c;return C(an,n,u,v,i,ua(c))}else return tr}else return C(an,n,a,t,i,o(Sn,e,c))}else return tr}),nd=$(function(e,r){var n=o(Sn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(I,1,a,t,i,c)}else{var l=n;return l}}),ea=y(function(e,r,n){var a=r(o(So,e,n));if(a.$)return o(nd,e,n);var t=a.a;return m(xn,e,t,n)}),ad=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(ea,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Xs,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(ea,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(cl,k(i,c),m(Ks,i,c,n))}));case 3:var r=e.a,n=e.b;return o(ea,r,Be(function(a){return a.$===3?Gs(n):a}));default:var r=e.a,n=e.b;return o(ea,r,Be(function(a){return a.$===2?il(n):a}))}},td=function(e){return Hs(ad(e))},od=$(function(e,r){return o(re,td(e),r)}),id=$(function(e,r){return Ke(r,{eA:o(od,e,r.eA)})}),cd=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ke(a,{B:o(ol,id(e),a.B)}))}),ld=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),ud=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ke(t,{B:o(ld,o(e,i.a,r),i)}))}),vd=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:m(Bs,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(cd,i,a.G)});case 4:var c=n.a;return Ke(a,{G:m(ud,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ns,l,a.G)})}}),$d=$(function(e,r){return o(Ne,Na,{B:k(e,r(e)),ab:P,T:P})}),fd=m$,Ti=fd(P),Sa=Qv,Dn=Kv,sd=_$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Te({db:c,b9:i,eK:t,e8:a,fr:n,cR:r,fU:e})},o(A,"clock",se))},o(A,"devicePixelRatio",se))},o(A,"dt",se))},o(A,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Te({eo:d,eB:s,de:v,eJ:u,e9:l,ft:c,fy:i,fE:t,eh:a})},o(A,"alt",Y))},o(A,"control",Y))},o(A,"down",Y))},o(A,"downs",Sa(Dn)))},o(A,"left",Y))},o(A,"pressedKeys",Sa(Dn)))},o(A,"right",Y))},o(A,"shift",Y))},o(A,"up",Y))))},o(A,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Te({de:v,e5:u,fe:l,fz:c,fA:i,eh:t,fX:a,f$:n})},o(A,"down",Y))},o(A,"isDown",Y))},o(A,"move",Y))},o(A,"rightDown",Y))},o(A,"rightUp",Y))},o(A,"up",Y))},o(A,"x",se))},o(A,"y",se))))},o(A,"screen",o(B,function(r){return o(B,function(n){return Te({eX:n,fV:r})},o(A,"height",se))},o(A,"width",se))))},o(A,"wheel",o(B,function(e){return o(B,function(r){return Te({eE:r,eF:e})},o(A,"deltaX",se))},o(A,"deltaY",se))))),dd=function(e){return{$:4,a:e}},md={$:0},pd=pc,Ie=$(function(e,r){return o(yc,e,pd(r))}),U=Ie("className"),bd=function(e){var r=e.b.B;return r.b},Ca=Ie("id"),gd=L$,La=gd,hd=P$,ae=hd,_d={$:1},wd=function(e){return{$:3,a:e}},yd=function(e){return{$:5,a:e}},Mi=gr("a"),Co=gr("button"),xd=En("d"),pl=_c("http://www.w3.org/2000/svg"),Sd=pl("path"),Cd=pl("svg"),Ld=En("viewBox"),Cn=function(e){return o(Cd,b([Ld("0 0 100 100"),o(ae,"width","100%"),o(ae,"height","100%")]),b([o(Sd,b([xd(e)]),P)]))},Di=function(e){return o(Ie,"href",k$(e))},en={eI:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eR:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eW:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fo:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fq:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fr:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fv:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fG:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fP:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fR:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f3:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Pd=function(e){return{$:0,a:e}},bl=wc,gl=$(function(e,r){return o(bl,e,Pd(r))}),Lo=function(e){return o(gl,"click",Te(e))},Ai=Ie("target"),zd=Ie("title"),Et=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(I,n,a,o(e,a,t),o(Et,e,i),o(Et,e,c))}),kd=Pt,ne=kd,Td=function(e){return m($o,y(function(r,n,a){return o(M,n,a)}),P,e)},Md=$(function(e,r){return{$:3,a:e,b:r}}),Dd=$(function(e,r){return{$:2,a:e,b:r}}),Ad=$(function(e,r){return{$:0,a:e,b:r}}),Bd=$(function(e,r){return{$:1,a:e,b:r}}),Hn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hl=z(Hn,0/255,0/255,0/255,1),Fd=pc,Vd=$(function(e,r){return o(yc,e,Fd(r))}),Rd=Vd("checked"),qe=Pv,Ed=y(function(e,r,n){return ve(o(Mn,e-Vr(n),Ha(r)),n)}),An=gv,_l=function(e){var r=function(n){return n<10?Ae(n):Ha(vl(87+n))};return e<16?r(e):ve(_l(e/16|0),r(o(An,16,e)))},jd=o(oe,_l,o(Ed,2,"0")),Po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b4:a,cb:n,cL:r}},Wd=function(e){var r=Po(e),n=r.cL,a=r.cb,t=r.b4;return o(Fr,"",o(M,"#",o(re,o(oe,qe,jd),b([n*255,a*255,t*255]))))},jt=Ie("htmlFor"),Nd=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Pa=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Hd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(M,t,n)}),zo=$(function(e,r){return m(or,Hd(e),P,r)}),wl=R(function(e,r,n,a){return{e0:r,fc:e,fj:n,fJ:a}}),Gd=K$,Xd=Uv,Id=$(function(e,r){if(r.$)return xe(e);var n=r.a;return $e(n)}),Ud=Z$,Jd=function(e){return o(Ud,{ew:!1,ff:!1},e)},ko=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return q},Od=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return $e(e(n))}}),qd=function(e){return{$:2,a:e}},Yd=function(e){return{$:0,a:e}},Zd=function(e){return{$:1,a:e}},it=$(function(e,r){return rr(r)-rr(e)}),ct=y(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),Kd=$(function(e,r){var n=function(t){return J(t,e)<0?$e(t):xe(Zd(r))},a=m(ct,"0","9",r)?$e(o(it,"0",r)):m(ct,"a","z",r)?$e(10+o(it,"a",r)):m(ct,"A","Z",r)?$e(10+o(it,"A",r)):xe(Yd(r));return o(Pa,n,a)}),yl=$(function(e,r){var n=ln(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(Pa,function(c){return o(Pa,function(l){return $e(c+l*e)},o(yl,e,i))},o(Kd,e,t))}),Qd=$(function(e,r){return 2<=e&&e<=36?o(yl,e,Vt(r)):xe(qd(e))}),em=Qd(16),rm=y(function(e,r,n){return z(Hn,e,r,n,1)}),xl=R(function(e,r,n,a){return z(Hn,e,r,n,a)}),Gn=bv,nm=$(function(e,r){var n=o(Gn,10,e);return qe(r*n)/n}),am=jv,tm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ul(n);if(a.b&&!a.b.b){var t=a.a;return Xd(b([t,t]))}else return n};return o(oe,am,o(oe,function(n){return o(Be,function(a){return m(Gd,1,a,n)},Jd(e))},o(oe,Nd(ko),o(oe,Be(function(n){return n.fJ}),o(oe,Be(zo(Rr)),o(oe,Id("Parsing hex regex failed"),Pa(function(n){var a=o(re,o(oe,r,o(oe,em,Od(vs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(z(xl,t/255,c/255,u/255,o(nm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,p=d.b,u=p.a.a;return $e(m(rm,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),za=gr("input"),Wt=gr("label"),Nt=Ie("name"),Sl=$(function(e,r){return m(or,A,r,e)}),om=o(Sl,b(["target","checked"]),Y),im=function(e){return o(gl,"change",o(wa,e,om))},cm=function(e){return k(e,!0)},lm=function(e){return{$:1,a:e}},um=$(function(e,r){return o(bl,e,lm(r))}),vm=o(Sl,b(["target","value"]),Dn),To=function(e){return o(um,"input",o(wa,cm,o(wa,e,vm)))},Cl=Ie("max"),Ll=Ie("min"),Pl=function(e){return o(Ie,"step",e)},ka=Ie("type"),Mo=Ie("value"),Bi=function(e){var r=e.ce,n=e.c$,a=e.cu,t=e.cq,i=e.cU,c=e.cy;return o(N,P,b([o(Wt,b([jt(r)]),b([o(N,b([U("relative w-full")]),b([o(N,b([U("inline-block")]),b([ne(r)])),o(N,b([U("inline-block float-right")]),b([ne(ge(n))]))]))])),o(za,b([ka("range"),o(ae,"width","100%"),Ca(r),Nt(r),Ll(ge(a)),Cl(ge(t)),Mo(ge(n)),Pl(ge(i)),To(o(oe,xo,o(oe,dr(42),c)))]),P)]))},$m=$(function(e,r){if(r.$)return e;var n=r.a;return n}),fm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(N,P,b([o(N,b([U("mb-2")]),b([o(Wt,b([jt(e)]),b([ne(e)]))])),o(za,b([ka("checkbox"),Ca(e),Nt(e),im(Md(e)),Rd(c)]),P)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Bi({ce:e,cq:i,cu:t,cy:Ad(e),cU:.01*(i-t),c$:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Bi({ce:e,cq:i,cu:t,cy:o(oe,qe,Bd(e)),cU:1,c$:c});default:var c=r.a;return o(N,P,b([o(N,b([o(ae,"margin-bottom","6px")]),b([o(Wt,b([jt(e)]),b([ne(e)]))])),o(za,b([ka("color"),o(ae,"width","100%"),o(ae,"height","26px"),o(ae,"padding","0px"),Ca(e),Nt(e),To(function(l){return o(Dd,e,o($m,hl,tm(l)))}),Mo(Wd(c))]),P)]))}}),sm=function(e){return o(N,b([U("p-6 border-y-[0.5px] border-white20")]),b([o(N,b([U("text-lg pb-2")]),b([ne(e.fg)])),o(N,b([U("pl-2 pr-2")]),Td(o(Et,fm,e.av)))]))},dm=function(e){return o(N,b([U("text-xs text-white60")]),o(re,sm,e))},mm=function(e){return o(N,b([U("absolute left-[104px] bottom-2 text-sm text-white40")]),b([ne("clock: "+o(yn,3,un(e).db))]))},pm=function(e){e.a;var r=e.b.T;return o(Be,function(n){return qe(60/(un(e).db-n))},o(Be,o(oe,ss,function(n){return n.db}),ko(o(al,59,r))))},bm=function(e){return o(N,b([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=pm(e);if(r.$===1)return b([ne("... Fps")]);var n=r.a;return b([ne(Ae(n)+" Fps")])}())},gm=function(e){return{$:0,a:e}},hm=function(e){var r=e.b.T;return Nr(r)},_m=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Nr(r)+1+Nr(n)},wm=function(e){return o(za,b([U("absolute left-[100px] w-[490px]"),ka("range"),Ll(Ae(0)),Cl(Ae(_m(e)-1)),Mo(Ae(hm(e))),Pl(Ae(1)),To(o(oe,xo,o(oe,dr(42),o(oe,qe,gm))))]),P)},Fi={$:1},ym={$:3},xm={$:2},zl=function(e){return!e.b},Vi=$(function(e,r){return o(Co,b([U("px-2 bg-black40"),U(r),Lo(e)]),b([ne("REC")]))}),Ri=$(function(e,r){return o(Co,b([U("absolute left-[60px] mx-1 px-1 bg-black40"),Lo(r)]),b([o(N,b([U("w-4 h-6 fill-white80")]),b([Cn(e)]))]))}),Sm=function(e){var r=e.a,n=e.b.ab;return o(N,b([U("py-1")]),b([function(){switch(r.$){case 0:return o(Vi,Fi,"text-red-500 font-bold");case 1:return o(Vi,xm,"text-white80 font-bold");default:return o(N,P,P)}}(),function(){switch(r.$){case 0:return o(N,P,P);case 1:return zl(n)?o(N,P,P):o(Ri,en.fq,ym);default:return o(Ri,en.fo,Fi)}}()]))},Cm=function(e){return o(N,b([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),b([wm(e),Sm(e),bm(e),mm(e)]))},kl=function(e){return o(Fr,"",e)},Lm=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(M,e,o(M,c,l))}),i=m(or,t,P,a);return o(M,n,i)}else return P}),Pm=function(e){var r=e.a;return Lr(r,Na)},yr=gr("p"),zm=gr("pre"),km=$(function(e,r){var n=Pm(r.G)?o(N,P,P):o(N,b([U("absolute pointer-events-none w-8 h-8"),o(ae,"left",ge(e.fr.fX+.5*e.cR.fV)+"px"),o(ae,"top",ge(-e.fr.f$+.5*e.cR.eX)+"px")]),b([o(N,b([U(e.fr.e5?"fill-black80":"fill-white40")]),b([Cn(en.fr)]))]));return o(N,P,b([n,o(zm,b([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),b([o(yr,P,b([ne("pressedKeys: "+kl(o(Lm," ",e.e8.ft)))])),o(yr,P,b([ne("delta time: "+o(yn,4,e.eK))])),o(yr,P,b([ne("pointer is down: "+(e.fr.e5?"yes":"no"))])),o(yr,P,b([ne("pointer.x: "+o(yn,2,e.fr.fX))])),o(yr,P,b([ne("pointer.y: "+o(yn,2,e.fr.f$))])),o(yr,P,b([ne("wheel deltaX: "+ge(e.fU.eE))])),o(yr,P,b([ne("wheel deltaY: "+ge(e.fU.eF))]))]))]))}),Tm=$(function(e,r){var n=o(Co,b([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Lo(_d),zd("Distraction Free Mode")]),b([Cn(en.f3)])),a=o(N,b([U("absolute w-8 bottom-12")]),b([o(Mi,b([U("fill-twitterBlue40 hover:fill-twitterBlue"),Di("https://twitter.com/AzizErkalSelman"),Ai("_blank")]),b([Cn(en.fP)]))])),t=o(N,b([U("absolute w-8 bottom-2")]),b([o(Mi,b([U("fill-githubCat40 hover:fill-githubCat"),Di("https://github.com/erkal/elm-3d-playground-exploration"),Ai("_blank")]),b([Cn(en.eR)]))]));return r.aL?o(N,b([U("fixed w-10 h-10 p-1")]),b([n])):o(N,P,b([o(N,b([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(N,b([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),b([o(La,wd,dm(un(r.G).eA))])),o(La,yd,Cm(r.G)),o(km,e,r)]))}),Mm=y(function(e,r,n){var a=bd(n.G),t=un(n.G);return o(N,b([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ae,"width",ge(t.cR.fV)+"px"),o(ae,"height",ge(t.cR.eX)+"px")]),b([o(N,b([U("fixed")]),b([o(La,Zc(md),o(e,t,a))])),o(N,b([Ca("gui")]),b([o(Tm,t,n),o(N,b([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),b([o(La,dd,o(r,t,a))]))]))]))}),Dm=Xe(function(e,r,n,a,t,i){var c=$(function(u,v){return k(z(vd,r,i,u,v),Ti)}),l=function(u){var v=o(Kc,n,u.e2);return k({aL:u.e2.cR.fV<500,G:o($d,v,a)},Ti)};return Ms({e1:l,fK:Zc(sd(gs)),fQ:c,fT:o(Mm,e,t)})}),Am=R(function(e,r,n,a){return ye(Dm,e,r,n,a,$(function(t,i){return o(N,P,P)}),y(function(t,i,c){return c}))}),Ar=y(function(e,r,n){return{eD:n,fs:e,fB:r}}),Bm={fp:b([m(Ar,S(-3,3,0),S(0,0,0),b([S(0,0,0),S(1,0,0),S(0,1,0)])),m(Ar,S(0,3,0),S(0,0,0),b([S(0,0,0),S(1,0,0),S(0,1,0),S(0,2,0)])),m(Ar,S(3,3,0),S(0,0,0),b([S(0,0,0),S(1,1,0),S(0,1,0),S(0,2,0)])),m(Ar,S(-3,-1,0),S(0,0,0),b([S(0,0,0),S(0,1,0),S(1,1,0),S(1,2,0)])),m(Ar,S(3,0,0),S(0,0,0),b([S(0,0,0),S(1,0,0),S(0,0,1),S(0,1,1)])),m(Ar,S(-2,-3,0),S(0,0,0),b([S(0,0,0),S(1,0,0),S(0,0,1),S(1,1,0)])),m(Ar,S(2,-3,0),S(0,0,0),b([S(0,0,0),S(1,0,0),S(0,0,1),S(0,1,0)]))])},Fm=function(e){return{c1:Bm}},Vm=$(function(e,r){return k(e,il(r))}),Rm=y(function(e,r,n){return{av:n,e6:r,fg:e}}),Tl=tr,Em=function(e){return m(jn,$(function(r,n){var a=r.a,t=r.b;return m(xn,a,t,n)}),Tl,e)},jm=y(function(e,r,n){return m(Rm,e,r,Em(n))}),lt=jm,ir=y(function(e,r,n){var a=r.a,t=r.b;return k(e,o(cl,k(a,t),n))}),Me=hv,Wm=b([m(lt,"Camera",!0,b([m(ir,"camera distance",k(3,60),20),m(ir,"camera azimuth",k(0,2*Me),.6),m(ir,"camera elevation",k(-Me/2,Me/2),.4)])),m(lt,"Parameters",!0,b([m(ir,"cube scale",k(.1,1),.95),m(ir,"edge width",k(.001,.5),.1)])),m(lt,"Colors and light",!0,b([m(ir,"sunlight azimuth",k(0,2*Me),5.5),m(ir,"sunlight elevation",k(-Me/2,Me/2),-1),m(ir,"saturation",k(0,1),.6),m(ir,"lightning",k(0,1),.8),o(Vm,"edge color",hl)]))]),Nm=$(function(e,r){return r}),Hm=$(function(e,r){return o(N,b([o(ae,"min-width","320px"),o(ae,"max-width","500px"),o(ae,"margin","0 auto")]),b([o(N,b([U("m-2 text-center")]),b([ne("The Soma Cube")])),o(yr,b([U("p-2 text-xs")]),b([o(N,b([o(ae,"color","darkred")]),b([ne("Following controls are not implemented yet")])),o(N,P,b([ne("Space Key to chose the next piece")])),o(N,P,b([ne("Arrow keys to rotate the cube")])),o(N,P,b([ne("WASDQE to move the cube")])),o(N,P,b([ne("Shift + Arrow Keys to rotate the camera")]))]))]))}),Gm=$(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(So,e,r.av))}),Xm=$(function(e,r){return o(dr,0,ko(o(zo,Gm(e),r)))}),Im=$(function(e,r){return o(Xm,e,r.eA)}),Oe=Im,mr=function(e){return e},gn=function(e){return mr(Me*(e/180))},Um=function(e){return e},Cr=function(e){return e},Ht=function(e){var r=e;return-r},Jm=$(function(e,r){var n=e,a=r;return{fX:n.f$*a.c5-n.c5*a.f$,f$:n.c5*a.fX-n.fX*a.c5,c5:n.fX*a.f$-n.f$*a.fX}}),Ml=function(e){var r=e;return r.c3},Dl=function(e){var r=e;return r.c4},Om=function(e){return o(Jm,Ml(e),Dl(e))},Ir=function(e){var r=e;return r.cz},Gr=_v,tn=wv,va=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Gr(c),u=tn(c),v=a.eH,s=v,d=s.fX*u,p=l*d,f=d*d,h=s.f$*u,g=l*h,w=d*h,x=h*h,_=1-2*(f+x),L=s.c5*u,D=l*L,H=2*(w-D),j=2*(w+D),E=d*L,W=2*(E+g),G=2*(E-g),F=h*L,O=2*(F-p),K=2*(F+p),le=L*L,fe=1-2*(x+le),ce=1-2*(f+le);return{fX:fe*i.fX+H*i.f$+W*i.c5,f$:j*i.fX+ce*i.f$+O*i.c5,c5:G*i.fX+K*i.f$+_*i.c5}}),Xn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Gr(c),u=tn(c),v=a.cz,s=v,d=i.fX-s.fX,p=i.f$-s.f$,f=i.c5-s.c5,h=a.eH,g=h,w=g.fX*u,x=l*w,_=w*w,L=g.f$*u,D=l*L,H=w*L,j=L*L,E=1-2*(_+j),W=g.c5*u,G=l*W,F=2*(H-G),O=2*(H+G),K=w*W,le=2*(K+D),fe=2*(K-D),ce=L*W,pe=2*(ce-x),ke=2*(ce+x),Ce=W*W,_r=1-2*(j+Ce),wr=1-2*(_+Ce);return{fX:s.fX+_r*d+F*p+le*f,f$:s.f$+O*d+wr*p+pe*f,c5:s.c5+fe*d+ke*p+E*f}}),pr=function(e){return e},Tr=function(e){var r=e;return r.c3},Mr=function(e){var r=e;return r.c4},Dr=function(e){var r=e;return r.c6},Al=y(function(e,r,n){return pr({cz:m(Xn,e,r,Ir(n)),c3:m(va,e,r,Tr(n)),c4:m(va,e,r,Mr(n)),c6:m(va,e,r,Dr(n))})}),Ei=y(function(e,r,n){return m(Al,e(n),r,n)}),Do=function(e){var r=e;return r.eH},In=$(function(e,r){var n=e,a=r;return{fX:a.fX+n.fX,f$:a.f$+n.f$,c5:a.c5+n.c5}}),Bl=$(function(e,r){return pr({cz:o(In,e,Ir(r)),c3:Tr(r),c4:Mr(r),c6:Dr(r)})}),qm=$(function(e,r){var n=e,a=r;return{fX:n*a.fX,f$:n*a.f$,c5:n*a.c5}}),Ym=y(function(e,r,n){return o(Bl,o(qm,r,e),n)}),Zm=y(function(e,r,n){return m(Ym,Do(e(n)),r,n)}),hr=$(function(e,r){return{eH:r,cz:e}}),Km=function(e){var r=e;return o(hr,r.cz,r.c3)},Qm=function(e){var r=e;return o(hr,r.cz,r.c4)},e0=function(e){var r=e;return o(hr,r.cz,r.c6)},r0=function(e){var r=pr({cz:e.aR,c3:Dl(e.dl),c4:Om(e.dl),c6:Ml(e.dl)}),n=m(Zm,e0,e.ca,m(Ei,Km,Ht(e.bC),m(Ei,Qm,e.bx,r)));return n},n0=function(e){return{$:0,a:e}},me=function(e){var r=e;return Z(r)},$a=function(e){var r=e;return .5*r},a0=yv,t0=function(e){var r=e;return a0(r)},o0=function(e){var r=$a(me(e.ej)),n=t0(r);return{cK:n0(n),c0:e.c0}},We={fX:0,f$:0,c5:0},Fl=Rr,$r=function(e){return e},Vl=$r({fX:1,f$:0,c5:0}),Ga=Vl,Ao=$r({fX:0,f$:0,c5:1}),Xa=Ao,i0=Fl({cz:We,c3:Xa,c4:Ga}),c0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.ca;return o0({ej:gn(40),c0:r0({bx:mr(n),ca:Cr(t),bC:mr(a),aR:Um(r),dl:i0})})},l0=function(e){return c0({bx:o(Oe,"camera azimuth",e),ca:o(Oe,"camera distance",e),bC:o(Oe,"camera elevation",e),aR:{fX:.5,f$:1,c5:0}})},Un=$(function(e,r){return{$:0,a:e,b:r}}),ut=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),vt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),fr=$(function(e,r){var n=e,a=r;return a-n}),u0=$r({fX:-1,f$:0,c5:0}),v0=$r({fX:0,f$:-1,c5:0}),Rl=$r({fX:0,f$:0,c5:-1}),El=$r({fX:0,f$:1,c5:0}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,c5:i}}),$0=Xe(function(e,r,n,a,t,i){var c=o(ut,n,i)?Ao:Rl,l=o(ut,r,t)?El:v0,u=o(ut,e,a)?Vl:u0,v=S(me(o(fr,e,a)),me(o(fr,r,t)),me(o(fr,n,i))),s=m(be,o(vt,e,a),o(vt,r,t),o(vt,n,i)),d=pr({cz:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Er=function(e){var r=e;return r.fX},jr=function(e){var r=e;return r.f$},Wr=function(e){var r=e;return r.c5},jl=$(function(e,r){return ye($0,Er(e),jr(e),Wr(e),Er(r),jr(r),Wr(r))}),Bn=y(function(e,r,n){return{fX:e,f$:r,c5:n}}),f0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=S(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Un,e,o(jl,m(Bn,-c,-l,-u),m(Bn,c,l,u)))}),xr=function(e){return e*Me/180},Ia=function(e){return{$:5,a:e}},Ta=function(e){return Ia(e)},s0=R(function(e,r,n,a){var t=S(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},d=s(i-1/3),p=s(i),f=s(i+1/3);return z(Hn,f,p,d,a)}),Wl=y(function(e,r,n){return z(s0,e,r,n,1)}),Gt=function(e){return{$:0,a:e}},Nl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Hl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),$t=function(e){return m(Hl,0,1,e<=.04045?e/12.92:o(Gn,(e+.055)/1.055,2.4))},Jn=rf,d0=function(e){var r=Po(e),n=r.cL,a=r.cb,t=r.b4;return m(Jn,$t(n),$t(a),$t(t))},Gl=function(e){return m(Nl,0,Gt(d0(e)),Gt(0))},Bo=$(function(e,r){return{$:2,a:e,b:r}}),Fo=$(function(e,r){return{$:4,a:e,b:r}}),Vo=$(function(e,r){return{$:3,a:e,b:r}}),Ro=$(function(e,r){return{$:1,a:e,b:r}}),m0=y(function(e,r,n){return{fX:e,f$:r,c5:n}}),p0=function(e){var r=e;return r},Ua=function(e){var r=e;return p0(r.er)},Ja=function(e){var r=e;return r.aK},b0=$(function(e,r){return{er:o(Bl,e,Ua(r)),aK:Ja(r)}}),g0=$(function(e,r){var n=r;return o(hr,o(In,e,n.cz),n.eH)}),h0=$(function(e,r){var n=r;return{k:o(g0,e,n.k),fa:n.fa,fu:n.fu}}),Eo=function(e){var r=e;return r},_0=function(e){return e},jo=$(function(e,r){var n=Eo(r),a=n.a,t=n.b;return _0(k(e(a),e(t)))}),w0=$(function(e,r){return o(jo,In(e),r)}),Oa=function(e){var r=e;return r.ey},qa=function(e){var r=e;return r.fu},Wo=$(function(e,r){return{ey:r,fu:me(e)}}),y0=$(function(e,r){return o(Wo,qa(r),o(In,e,Oa(r)))}),No=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return S(e(a),e(t),e(i))}),x0=$(function(e,r){return o(No,In(e),r)}),Ya=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=m(m0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Un,s,o(b0,i,c));case 1:var s=r.a,l=r.b;return o(Ro,s,o(x0,i,l));case 3:var s=r.a,u=r.b;return o(Vo,s,o(y0,i,u));case 2:var s=r.a,v=r.b;return o(Bo,s,o(h0,i,v));case 4:var s=r.a,d=r.b;return o(Fo,s,o(w0,i,d));default:var p=r.a;return Ia(o(re,Ya(S(n,a,t)),p))}}),Zr=function(e){return Ya(S(e,0,0))},Kr=function(e){return Ya(S(0,0,e))},S0=y(function(e,r,n){return{er:m(Al,e,r,Ua(n)),aK:Ja(n)}}),C0=$(function(e,r){var n=o(Xn,e,r),a=o(va,e,r);return function(t){var i=t;return o(hr,n(i.cz),a(i.eH))}}),L0=y(function(e,r,n){var a=n;return{k:m(C0,e,r,a.k),fa:a.fa,fu:a.fu}}),P0=y(function(e,r,n){return o(jo,o(Xn,e,r),n)}),z0=y(function(e,r,n){return o(Wo,qa(n),m(Xn,e,r,Oa(n)))}),k0=y(function(e,r,n){return o(No,o(Xn,e,r),n)}),Za=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Un,l,m(S0,e,r,a));case 1:var l=n.a,t=n.b;return o(Ro,l,m(k0,e,r,t));case 3:var l=n.a,i=n.b;return o(Vo,l,m(z0,e,r,i));case 2:var l=n.a,c=n.b;return o(Bo,l,m(L0,e,r,c));case 4:var l=n.a,u=n.b;return o(Fo,l,m(P0,e,r,u));default:var v=n.a;return Ia(o(re,o(Za,e,r),v))}}),T0=o(hr,We,Ga),Xl=$(function(e,r){return m(Za,T0,mr(e),r)}),Ho=El,M0=o(hr,We,Ho),fa=$(function(e,r){return m(Za,M0,mr(e),r)}),D0=o(hr,We,Xa),Il=$(function(e,r){return m(Za,D0,mr(e),r)}),A0=$(function(e,r){return(r-qc(r/e)*e)/e}),B0=function(e){return 2*Me*e},F0=R(function(e,r,n,a){return e+(r-e)*(1+Gr(B0(o(A0,n,a))))/2}),V0=function(e){var r=o(Oe,"edge width",e),n=m(Wl,z(F0,0,1,7,e.db),o(Oe,"saturation",e),o(Oe,"lightning",e)),a=o(f0,Gl(n),S(r,3+r,r)),t=Ta(b([o(Zr,1.5,o(Kr,1.5,a)),o(fa,xr(90),o(Zr,1.5,o(Kr,1.5,a))),o(fa,xr(180),o(Zr,1.5,o(Kr,1.5,a))),o(fa,xr(270),o(Zr,1.5,o(Kr,1.5,a)))]));return Ta(b([t,o(Xl,xr(90),t),o(Il,xr(90),t)]))},R0=$(function(e,r){var n=r/2;return o(Un,e,o(jl,m(Bn,-n,-n,-n),m(Bn,n,n,n)))}),Ul=function(e){return Ya(S(0,e,0))},Q=$(function(e,r){var n=r;return e*n}),sr=function(e){var r=e;return{fX:-r.fX,f$:-r.f$,c5:-r.c5}},On=y(function(e,r,n){var a=e,t=n;return{fX:a.fX+r*(t.fX-a.fX),f$:a.f$+r*(t.f$-a.f$),c5:a.c5+r*(t.c5-a.c5)}}),E0=y(function(e,r,n){var a=Ua(n),t=Tr(a),i=Mr(a),c=Dr(a),l=m(On,e,r,Ir(a)),u=r>=0?pr({cz:l,c3:t,c4:i,c6:c}):pr({cz:l,c3:sr(t),c4:sr(i),c6:sr(c)}),v=Ja(n),s=v.a,d=v.b,p=v.c,f=me(o(Q,r,s)),h=me(o(Q,r,d)),g=me(o(Q,r,p));return{er:u,aK:S(f,h,g)}}),Go=function(e){var r=e;return r.k},ji=function(e){return Do(Go(e))},Jl=function(e){var r=e;return r.cz},j0=function(e){return Jl(Go(e))},Ol=function(e){var r=e;return r.fa},ql=function(e){var r=e;return r.fu},W0=y(function(e,r,n){var a=me(o(Q,r,ql(n))),t=me(o(Q,r,Ol(n))),i=r>=0?ji(n):sr(ji(n)),c=m(On,e,r,j0(n));return{k:o(hr,c,i),fa:t,fu:a}}),N0=y(function(e,r,n){return o(jo,o(On,e,r),n)}),H0=y(function(e,r,n){return o(Wo,o(Q,Z(r),qa(n)),m(On,e,r,Oa(n)))}),G0=y(function(e,r,n){return o(No,o(On,e,r),n)}),Yl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Un,c,m(E0,We,e,n));case 1:var c=r.a,a=r.b;return o(Ro,c,m(G0,We,e,a));case 3:var c=r.a,t=r.b;return o(Vo,c,m(H0,We,e,t));case 2:var c=r.a,i=r.b;return o(Bo,c,m(W0,We,e,i));case 4:var c=r.a,l=r.b;return o(Fo,c,m(N0,We,e,l));default:var u=r.a;return Ia(o(re,Yl(e),u))}}),X0=y(function(e,r,n){var a=n.a,t=n.b,i=n.c;return o(Kr,i,o(Ul,t,o(Zr,a,o(Yl,o(Oe,"cube scale",e),o(R0,Gl(r),1)))))}),I0=y(function(e,r,n){var a=n.fB,t=a.a,i=a.b,c=a.c,l=n.fs,u=l.a,v=l.b,s=l.c;return o(Kr,s,o(Ul,v,o(Zr,u,o(Il,c*xr(90),o(fa,i*xr(90),o(Xl,t*xr(90),Ta(o(re,o(X0,e,r),n.eD))))))))}),Xt=4294967295>>>32-Tn,It=$v,U0=y(function(e,r,n){e:for(;;){var a=Xt&r>>>e,t=o(It,a,n);if(t.$){var v=t.a;return o(It,Xt&r,v)}else{var i=t.a,c=e-Tn,l=r,u=i;e=c,r=l,n=u;continue e}}}),J0=function(e){return e>>>5<<5},Zl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,J0(n))>-1?ie(o(It,Xt&e,i)):ie(m(U0,a,e,t))}),O0=z(Hn,211/255,215/255,207/255,1),Kl=function(e){var r=e.a;return r},q0=$(function(e,r){return o(dr,O0,o(Zl,o(An,Kl(r),e),r))}),Y0=y(function(e,r,n){e:for(;;){var a=o(go,Ve,e),t=a.a,i=a.b;if(J(Dt(t),Ve)<0)return o(Yc,!0,{z:r,l:n,p:t});var c=i,l=o(M,Oc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ka=function(e){return e.b?m(Y0,e,P,0):Uc},Z0=function(e){var r=8,n=function(a){return m(Wl,a/r,o(Oe,"saturation",e),o(Oe,"lightning",e))};return Ka(o(re,n,o(Hr,0,r)))},K0=$(function(e,r){var n=function(a){return o(I0,e,o(q0,a,Z0(e)))};return Ta(o(mo,n,r.c1.fp))}),Q0=function(e){return e},ep=function(e){return Cr(.01*e)},Wi=function(e){return e},rp=function(e){return e},np=function(e){return{$:0,a:e}},ap=np,tp={$:3},op=tp,ip=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cp=ip,lp=$(function(e,r){return r.b?m(or,M,r,e):e}),He=function(e){return m(or,lp,P,e)},Xo=$(function(e,r){return He(o(re,e,r))}),up=function(e){return{$:1,a:e}},vp=up,$p=function(e){return o(En,"height",Ae(e))},fp=function(e){return S$(z$(e))},sp=fp,dp=function(e){return{$:2,a:e}},mp=dp,pp=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return qe(l*1e3)/1e3},c=function(l){return qe(l*1e4)/100};return kl(b(["rgba(",ge(c(r)),"%,",ge(c(n)),"%,",ge(c(a)),"%,",ge(i(t)),")"]))},bp=$(function(e,r){switch(r.$){case 0:return o(Xf,e,r);case 1:return o(If,e,r);case 2:return o(Uf,e,r);case 3:return o(Jf,e,r);case 4:return o(Of,e,r);default:return o(qf,e,r)}}),gp=$(function(e,r){switch(r.$){case 0:return o(_f,e,r);case 1:return o(wf,e,r);case 2:return o(yf,e,r);case 3:return o(xf,e,r);case 4:return o(Sf,e,r);case 5:return o(Cf,e,r);case 6:return o(Lf,e,r);case 7:return o(Pf,e,r);default:return zf(e)}}),hp=y(function(e,r,n){return m(Gf,e,r,n)}),Ni=function(e){var r=e;return r},vn=lf,ft=z(vn,1,1,1,1),Ye=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),_p=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),wp=$(function(e,r){var n=e,a=r.fX,t=r.f$;return m(_p,n*a/t,n,n*(1-a-t)/t)}),yp=function(e){var r=e.a,n=e.b,a=e.c;return m(Jn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Io=$(function(e,r){return yp(o(wp,e,r))}),Ql=$(function(e,r){return{dp:Lr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),Qe=df,xp=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},st=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=z(vn,a.bW,a.bW,a.bW,i);return ye(t,e,c,xp(a),a.dp,r,n)}),eu=Xe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ql,c,a),p=l,f=i;e=u,r=v,n=s,a=d,t=p,i=f;continue e;case 1:var h=t.b,g=o(M,C(st,e,r,n,a,h),i.M);return{M:g,U:i.U,fD:i.fD};case 3:var w=t.b,x=o(M,C(st,e,r,n,a,w),i.U);return{M:i.M,U:x,fD:i.fD};case 2:var _=t.a,L=o(M,C(st,e,r,n,a,_),i.fD);return{M:i.M,U:i.U,fD:L};default:var D=t.a;return m(jn,z(eu,e,r,n,a),i,D)}}),Sp=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ru=Sp,Uo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Cp=function(e){var r=e.Z,n=e.W,a=e.V;return z(Uo,518,r,n,a)},Lp=$(function(e,r){return{$:6,a:e,b:r}}),Pp=Lp,nu=b([Cp({V:1,W:0,Z:!1}),z(ru,!1,!1,!1,!1),o(Pp,0,1)]),on=519,Jo=8,au=15,rn=7681,zp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=hf,kp=$(function(e,r){return{$:0,a:e,b:r}}),Tp=kp({df:1,$7:0,dV:5}),De=Q$,Mp=Tp(b([{fs:o(De,-1,-1)},{fs:o(De,1,-1)},{fs:o(De,-1,1)},{fs:o(De,1,1)}])),Dp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fs"},uniforms:{}},Ap=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Oo=y(function(e,r,n){var a=e.cM,t=e.cn,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(oe,c(v.bl),o(oe,l(v.a8),o(oe,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,m(Ap,a,t,i)))}),qo=function(e){return m(Oo,{cn:e.cn,cM:e.cM,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Yo=function(e){return C(te,b([qo(e),z(ru,!1,!1,!1,!1)]),Dp,zp,Mp,{})},Bp=Yo({a8:rn,cn:0,cM:Jo,bl:on,c2:au,bt:rn,bu:rn}),Fp=516,Hi=5386,Se=7680,Vp=function(e){return o(Gn,2,e+4)},tu=function(e){return Yo({a8:Se,cn:au,cM:Jo,bl:Fp,c2:Vp(e),bt:Hi,bu:Hi})},Rp=y(function(e,r,n){return He(b([m(Ye,e,n,nu),b([tu(r),Bp])]))}),Ep=$(function(e,r){return He(o(mo,Rp(e),r))}),jp=function(e){var r=e.Z,n=e.W,a=e.V;return z(Uo,513,r,n,a)},Wp=jp({V:1,W:0,Z:!0}),Np=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Hp=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,p=u.c,f=v.a,h=v.b,g=v.c;return Np(s)(d)(p)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},Gp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gi=$(function(e,r){var n=e,a=r;return m(Gp,32774,n,a)}),Xp=1,Xi=771,Ip=770,Zo=Hp({bv:0,aH:o(Gi,Xp,Xi),by:0,bA:o(Gi,Ip,Xi),bF:0,bU:0}),Ur=b([Wp,Zo]),Up=function(e){var r=e;return r.dO},Jp=function(e){var r=e;return r.dP},ou=function(e){var r=e;return r.dQ},Op=function(e){var r=e;return r.dR},qp=function(e){var r=e;return r.dS},iu=function(e){var r=e;return r.dT},cu=function(e){return S(o(fr,Op(e),Up(e)),o(fr,qp(e),Jp(e)),o(fr,iu(e),ou(e)))},Ii=function(e){var r=e;return Ir(r)},Yp=function(e){return e},Zp=function(e){return pr({cz:Yp({fX:e.H,f$:e.I,c5:e.J}),c3:$r({fX:e.q,f$:e.r,c5:e.s}),c4:$r({fX:e.t,f$:e.u,c5:e.v}),c6:$r({fX:e.w,f$:e.x,c5:e.y})})},dt=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fX:a.fX*v.fX+a.f$*v.f$+a.c5*v.c5,f$:a.fX*l.fX+a.f$*l.f$+a.c5*l.c5,c5:a.fX*i.fX+a.f$*i.f$+a.c5*i.c5}}),lu=$(function(e,r){var n=e,a=r,t=n.cz,i=t,c=a.fX-i.fX,l=a.f$-i.f$,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,p=d,f=n.c3,h=f;return{fX:c*h.fX+l*h.f$+u*h.c5,f$:c*p.fX+l*p.f$+u*p.c5,c5:c*s.fX+l*s.f$+u*s.c5}}),uu=$(function(e,r){return{cz:o(lu,e,Ir(r)),c3:o(dt,e,Tr(r)),c4:o(dt,e,Mr(r)),c6:o(dt,e,Dr(r))}}),Ma=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(nr,n,a)}),sa=$(function(e,r){return J(e,r)<0?e:r}),de=$(function(e,r){var n=e,a=r;return o(sa,n,a)}),Kp=$(function(e,r){var n=Ma(r),a=Ma(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},Qp=function(e){var r=e;return S(r.fX,r.f$,r.c5)},Ln=$(function(e,r){var n=e,a=r;return a+n}),e3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=$a(me(a)),c=$a(me(n)),l=$a(me(t)),u=Qp(r),v=u.a,s=u.b,d=u.c;return{dO:o(Ln,c,v),dP:o(Ln,i,s),dQ:o(Ln,l,d),dR:o(fr,c,v),dS:o(fr,i,s),dT:o(fr,l,d)}}),Ui=R(function(e,r,n,a){var t=n.ey,i=2*n.eV*r,c=2*n.eU*r,l=2*n.eT*r,u=t.c5*r,v=t.f$*r,s=t.fX*r,d=Ge(Dr(e)),p=Z(l*d.fX)+Z(c*d.f$)+Z(i*d.c5),f=Ge(Mr(e)),h=Z(l*f.fX)+Z(c*f.f$)+Z(i*f.c5),g=Ge(Tr(e)),w=Z(l*g.fX)+Z(c*g.f$)+Z(i*g.c5),x=o(e3,S(w,h,p),o(lu,e,m(Bn,s,v,u)));if(a.$)return ie(x);var _=a.a;return ie(o(Kp,_,x))}),Ut=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 1:var c=t.a,l=z(Ui,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 2:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 3:var c=t.a,l=z(Ui,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 4:var u=t.a,f=e,h=r,g=z(Ut,e,r,n,u),w=i;e=f,r=h,n=g,a=w;continue e;default:var v=t.a,s=t.b,d=o(uu,Zp(v),e),p=r*v.bW,f=e,h=r,g=z(Ut,d,p,n,b([s])),w=i;e=f,r=h,n=g,a=w;continue e}}else return n}),$n=nf,fn=af,sn=tf,vu=function(e){return{$:4,a:e}},r3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),qn=function(e){return vu(o(r3,e,P))},n3={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},a3=function(e){var r=e;return r},Ji=Yo({a8:rn,cn:0,cM:Jo,bl:on,c2:255,bt:rn,bu:rn}),Qr=zv,ur=0,t3=function(e){var r=e,n=o(nr,Z(r.fX),o(nr,Z(r.f$),Z(r.c5)));if(n){var a=r.c5/n,t=r.f$/n,i=r.fX/n,c=Qr(i*i+t*t+a*a);return c*n}else return ur},Le={by:0,ex:!1,bF:0,cI:0,bU:0,cY:0,fX:0,f$:0,c5:0},Ee=$(function(e,r){var n=e,a=r;return Qe({dx:n.fX,dy:n.bU,dz:a.fX,dA:a.bU,dB:n.f$,dC:n.bF,dD:a.f$,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cY,dK:n.cI,dL:a.cY,dM:a.cI})}),hn=k({bd:o(Ee,Le,Le),bK:o(Ee,Le,Le),bL:o(Ee,Le,Le),bM:o(Ee,Le,Le)},z(vn,0,0,0,0)),$u=514,fu=function(e){var r=e.Z,n=e.W,a=e.V;return z(Uo,515,r,n,a)},su=240,o3=b([fu({V:1,W:0,Z:!0}),qo({a8:Se,cn:su,cM:0,bl:$u,c2:0,bt:Se,bu:Se}),Zo]),i3=$(function(e,r){var n=e,a=r.fh,t=r.eQ,i=r.eq,c=me(a),l=c,u=me(t),v=u,s=n.cK;if(s.$){var p=s.a;return Bt(v)?Qe({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*p),dy:0,dz:0,dA:0,dB:0,dC:2/p,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return Bt(v)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),ra=$(function(e,r){return(1&e>>r)===1?0:1}),c3=function(e){return b([fu({V:1,W:0,Z:!0}),qo({a8:Se,cn:su,cM:e,bl:$u,c2:0,bt:Se,bu:Se}),Zo])},l3=y(function(e,r,n){return He(o(re,function(a){var t=a<<4,i=z(vn,o(ra,a,0),o(ra,a,1),o(ra,a,2),o(ra,a,3));return m(Ye,e,k(r,i),c3(t))},o(Hr,1,o(Gn,2,n)-1)))}),nn=function(e){var r=e;return r},u3=mf,Oi=function(e){var r=e;return sr(Dr(r))},v3={cz:We,c3:Ga,c4:Ho,c6:Xa},Qa=function(e){var r=e;return r},$3=function(e){var r=Qa(Ir(e)),n=Ge(Dr(e)),a=Ge(Mr(e)),t=Ge(Tr(e));return Qe({dx:t.fX,dy:a.fX,dz:n.fX,dA:r.fX,dB:t.f$,dC:a.f$,dD:n.f$,dE:r.f$,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},f3=$(function(e,r){var n=r;return $3(o(uu,n,e))}),s3=function(e){return o(f3,v3,e)},d3=function(e){var r=e;return r.c0},m3=function(e){var r=e;return Tr(r)},p3=y(function(e,r,n){var a=e,t=r,i=n;return{fX:a,f$:t,c5:i}}),b3=function(e){var r=e;return Mr(r)},g3=function(e){var r=d3(e.ev),n=pr({cz:Ii(r),c3:m3(r),c4:b3(r),c6:sr(Oi(r))}),a=qn(e.aP),t=a,i=z(Ut,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=s3(r),u=o(Q,.99,o(ue,me(e.aJ),Ht(ou(c)))),v=cu(c),s=v.a,d=v.b,p=v.c,f=t3(m(p3,s,d,p)),h=o(Q,1.01,o(Ln,f,Ht(iu(c)))),g=o(i3,e.ev,{eq:e.eq,eQ:h,fh:u}),w=u3(g).dM,x=w?Ge(sr(Oi(r))):nn(Ii(r)),_=function(){var ce=e.bY;switch(ce.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var pe=ce.a;return k(3,pe);case 4:var pe=ce.a;return k(4,pe);default:return k(5,0)}}(),L=_.a,D=_.b,H=e.bD,j=H,E=o(Io,j,e.b_),W=E,G=Qe({dx:0,dy:x.fX,dz:$n(W),dA:e.ec,dB:0,dC:x.f$,dD:fn(W),dE:a3(f),dF:0,dG:x.c5,dH:sn(W),dI:L,dJ:0,dK:w,dL:0,dM:D}),F=ye(eu,G,l,g,n3,t,{M:P,U:P,fD:P}),O=e.bJ;switch(O.$){case 0:var K=O.a;return He(b([m(Ye,F.M,k(K,ft),Ur),m(Ye,F.U,hn,Ur)]));case 1:var K=O.a;return He(b([m(Ye,F.M,hn,Ur),b([Ji]),m(Ye,F.fD,K.bd,nu),b([tu(0)]),m(Ye,F.M,k(K,ft),o3),m(Ye,F.U,hn,Ur)]));default:var le=O.a,fe=O.b;return He(b([m(Ye,F.M,k(fe,ft),Ur),b([Ji]),o(Ep,F.fD,le),m(l3,F.M,fe,Nr(le)),m(Ye,F.U,hn,Ur)]))}},h3=function(e){return o(En,"width",Ae(e))},_3=$(function(e,r){var n=b([vp(1),mp(0),ap(!0),z(cp,0,0,0,0)]),a=function(){var L=e.b$;switch(L.$){case 0:return S(n,"0",1);case 1:return S(o(M,op,n),"1",1);default:var D=L.a;return S(n,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ni(v),d=o(ae,"height",Ae(s)+"px"),p=Ni(u),f=p/s,h=o(Xo,function(L){return g3({eq:f,ev:e.ev,aJ:e.aJ,aP:L.aP,bD:L.bD,bJ:L.bJ,ec:c,bY:L.bY,b_:L.b_})},r),g=o(ae,"width",Ae(p)+"px"),w=e.aI,x=w,_=pp(x);return m(sp,"div",b([o(ae,"padding","0px"),g,d]),b([k(i,m(hp,t,b([h3(qe(p*c)),$p(qe(s*c)),g,d,o(ae,"display","block"),o(ae,"background-color",_)]),h))]))}),w3=function(e){return o(_3,{b$:e.b$,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bY:e.bY,b_:e.b_}]))},du=function(e){return e},qi=du({fX:.31271,f$:.32902}),y3=$(function(e,r){var n=e,a=Ge(r.eH),t=a.fX,i=a.f$,c=a.c5,l=o(Io,r.cc,r.b5),u=l;return{by:sn(u),ex:n,bF:fn(u),cI:0,bU:$n(u),cY:1,fX:-t,f$:-i,c5:-c}}),x3=function(e){return e},S3=function(e){return x3(1.2*o(Gn,2,e))},mt=function(e){return e},C3={$:0},L3=C3,mu=function(e){return e},P3=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Yi=function(e){var r=e;return r},z3=function(e){e:for(;;){if(Lr(e.e3,ur)&&Lr(e.e4,ur))return Le;if(o(P3,me(e.e3),me(e.e4))){var r={b5:e.b5,e3:e.e4,e4:e.e3,ei:sr(e.ei)};e=r;continue e}else{var n=Z(Yi(e.e4)/Me),a=Z(Yi(e.e3)/Me),t=Ge(e.ei),i=t.fX,c=t.f$,l=t.c5,u=o(Io,mu(1),e.b5),v=u;return{by:a*sn(v),ex:!1,bF:a*fn(v),cI:n/a,bU:a*$n(v),cY:3,fX:i,f$:c,c5:l}}}},Zi=function(e){return z3({b5:e.b5,e3:e.cc,e4:ur,ei:e.ei})},k3=function(e){var r=e;return r},pu=function(e){var r=m(Hl,1667,25e3,k3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return du({fX:n,f$:a})},bu=function(e){return e},T3=pu(bu(12e3)),M3=pu(bu(5600)),D3=function(e){return{$:2,a:e}},A3=function(e){return D3(e)},B3=$(function(e,r){return{$:2,a:e,b:r}}),gu=function(e){return{$:0,a:e}},na=function(e){var r=e;return r},F3=function(e){var r=e;return r.ex},V3=gu(hn.a),R3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(M,a,i),c):k(i,o(M,a,c))});return m(or,n,k(P,P),r)}),E3=function(e){var r=e;return Qe({dx:r.fX,dy:r.bU,dz:0,dA:0,dB:r.f$,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cY,dK:r.cI,dL:0,dM:0})},j3=ee(function(e,r,n,a,t,i,c,l){var u=o(R3,F3,b([na(e),na(r),na(n),na(a)])),v=u.a,s=u.b;if(v.b){var d=ve(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var p=d.a,f=d.b,h=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(B3,o(re,E3,v),{bd:o(Ee,p,h),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return V3}else return gu({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),W3=y(function(e,r,n){return Va(j3,e,r,n,Le,Le,Le,Le,Le)}),N3=function(e){var r=o(y3,rp(e.fD),{b5:M3,eH:e.fM,cc:mt(8e4)}),n=Zi({b5:T3,cc:mt(2e4),ei:e.ei}),a=Zi({b5:qi,cc:mt(15e3),ei:sr(e.ei)}),t=m(W3,r,n,a);return w3({b$:A3(e.b9),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:S3(15),bJ:t,bY:L3,b_:qi})},hu=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),H3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),_u=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),wu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),G3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),X3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),I3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ko=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return z(I3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return z(hu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return z(H3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return z(_u,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return z(X3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return z(wu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return z(G3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Qo={$:0},U3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Ma(c(u)),d=o(de,s.dR,e),p=o(ue,s.dO,r),f=o(de,s.dS,n),h=o(ue,s.dP,a),g=o(de,s.dT,t),w=o(ue,s.dQ,i),x=c,_=v;e=d,r=p,n=f,a=h,t=g,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),J3=y(function(e,r,n){var a=Ma(e(r));return Va(U3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),pt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),yu=function(e){return o(pt,e.dO,e.dR)&&o(pt,e.dP,e.dS)&&o(pt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Fn=function(e){var r=e;return r},xu=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=Er(n),c=jr(n),l=Wr(n),u=Er(a),v=jr(a),s=Wr(a),d=Er(t),p=jr(t),f=Wr(t);return yu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,v,p)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,v,p)),dT:o(de,l,o(de,s,f))})},Su=of,Pe=function(e){return Su(Qa(e))},Cu=function(e){var r=e;return r},et=function(e){return Su(Cu(e))},O3=$(function(e,r){var n=e,a=r;return{fX:a.f$*n.c5-a.c5*n.f$,f$:a.c5*n.fX-a.fX*n.c5,c5:a.fX*n.f$-a.f$*n.fX}}),Jt=$(function(e,r){var n=e,a=r;return{fX:a.fX-n.fX,f$:a.f$-n.f$,c5:a.c5-n.c5}}),q3={fX:0,f$:0,c5:0},Y3=$(function(e,r){var n=e,a=r,t=o(nr,Z(a.fX),o(nr,Z(a.f$),Z(a.c5)));if(t){var i=a.c5/t,c=a.f$/t,l=a.fX/t,u=Qr(l*l+c*c+i*i);return{fX:n*l/u,f$:n*c/u,c5:n*i/u}}else return q3}),Z3=Y3(mu(1)),Lu=y(function(e,r,n){var a=o(Jt,r,n),t=o(Jt,e,r);return Z3(o(O3,a,t))}),K3=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=et(m(Lu,n,a,t));return S({o:i,fs:Pe(n)},{o:i,fs:Pe(a)},{o:i,fs:Pe(t)})},Q3=$(function(e,r){return{$:2,a:e,b:r}}),Pu=Q3({df:3,$7:0,dV:4}),eb=function(e){if(e.b){var r=e.a,n=e.b,a=Pu(o(re,K3,e)),t=m(J3,xu,r,n);return z(hu,t,e,a,0)}else return Qo},Re=y(function(e,r,n){return S(e,r,n)}),zu=function(){var e=Cr(1),r=Cr(1),n=Cr(1),a=o(Q,-.5,e),t=o(Q,-.5,r),i=o(Q,-.5,n),c=m(be,i,t,a),l=o(Q,.5,e),u=m(be,i,t,l),v=o(Q,.5,r),s=m(be,i,v,a),d=m(be,i,v,l),p=o(Q,.5,n),f=m(be,p,t,a),h=m(be,p,v,a),g=m(be,p,t,l),w=m(be,p,v,l);return Ko(eb(b([m(Re,c,h,f),m(Re,c,s,h),m(Re,u,g,w),m(Re,u,w,d),m(Re,f,h,w),m(Re,f,w,g),m(Re,c,d,s),m(Re,c,u,d),m(Re,c,f,g),m(Re,c,g,u),m(Re,s,w,h),m(Re,s,d,w)])))}(),aa={$:0},rb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),nb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=et(m(Lu,u,l,c)),s={o:v,fs:Pe(u)},d={o:v,fs:Pe(l)},p={o:v,fs:Pe(c)};return o(M,s,o(M,d,o(M,p,n)))}),ei=function(e){var r=e;return r.D},ab=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ie(m(e,t,i,c))}),ri=function(e){var r=e;return r.ah},bt=$(function(e,r){return o(Zl,e,ri(r))}),tb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z(ab,y(function(c,l,u){return S(c,l,u)}),o(bt,a,e),o(bt,t,e),o(bt,i,e))};return o(zo,r,ei(e))},ob=y(function(e,r,n){return e(r(n))}),ib=$(function(e,r){return!o(ll,o(ob,Ds,e),r)}),cb=$(function(e,r){return m(or,$(function(n,a){return e(n)?o(M,n,a):a}),P,r)}),ku=$(function(e,r){var n=Kl(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(ib,a,r)?{D:r,ah:e}:{D:o(cb,a,r),ah:e}}),lb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Yn=lb({df:1,$7:3,dV:4}),da=$(function(e,r){var n=nn(r),a=nn(e);return k(S(a.fX,a.f$,a.c5),S(n.fX,n.f$,n.c5))}),Ki=m(Jn,0,0,0),gt=Xe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(So,o(da,e,r),t);if(v.$){var d={o:Ki,fs:Pe(r)},p={o:Ki,fs:Pe(e)},f=u+1,h=u;return S(o(M,S(n,h,f),o(M,S(n,f,a),c)),o(M,d,o(M,p,l)),u+2)}else{var s=v.a;return S(o(M,S(n,s,a),c),l,u)}}),ub=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),p=e(c),f=a+2,h=a+1,g=a,w=e,x=r,_=v,L=a+3,D=ye(gt,s,p,f,g,r,ye(gt,d,s,h,f,r,ye(gt,p,d,g,h,r,t)));e=w,r=x,n=_,a=L,t=D;continue e}else{var H=t,j=H.a,E=H.b;return k(j,Fe(E))}}),vb=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),p=e(c),f=n+2,h=n+1,g=n,w=m(xn,o(da,p,s),f,m(xn,o(da,s,d),h,m(xn,o(da,d,p),g,t))),x=o(M,S(g,h,f),a),_=e,L=v,D=n+3,H=x,j=w;e=_,r=L,n=D,a=H,t=j;continue e}else return S(a,t,n)}),Br=y(function(e,r,n){var a=tb(n),t=m(or,nb(r),P,a),i=C(vb,r,a,0,P,Tl),c=i.a,l=i.b,u=i.c,v=C(ub,r,l,a,0,S(c,P,u)),s=v.a,d=v.b,p=zl(d)?t:ve(t,d);return m(rb,e,o(ku,Ka(p),s),o(Yn,p,s))}),Ot=function(e){return{D:o(re,function(r){return S(3*r,3*r+1,3*r+2)},o(Hr,0,Nr(e)-1)),ah:Ka(He(o(re,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},Tu=function(e){switch(e.$){case 0:return aa;case 1:var a=e.a,r=e.b,n=o(re,Fn,r);return m(Br,a,Rr,Ot(n));case 2:var a=e.a,r=e.b,n=o(re,Fn,r);return m(Br,a,Rr,Ot(n));case 3:var a=e.a,t=e.b;return m(Br,a,Rr,t);case 4:var a=e.a,t=e.b;return m(Br,a,function(i){return i.fs},t);case 5:var a=e.a,t=e.b;return m(Br,a,function(i){return i.fs},t);case 6:var a=e.a,t=e.b;return m(Br,a,function(i){return i.fs},t);case 7:var a=e.a,t=e.b;return m(Br,a,function(i){return i.fs},t);case 8:return aa;case 9:return aa;default:return aa}},Qi=Tu(zu),Mu={$:0},T=Mu,he=$(function(e,r){return{$:1,a:e,b:r}}),$b={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},fb=1029,sb=function(e){return{$:5,a:e}},Du=function(e){var r=e;return sb(r)},db=Du(fb),mb=1028,pb=Du(mb),ze=y(function(e,r,n){return r===1?e?o(M,db,n):o(M,pb,n):n}),Au={src:`
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
    `,attributes:{position:"fs",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ht=R(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return C(te,m(ze,l,a,d),Au,$b,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),ni={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Bu={src:`
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
    `,attributes:{position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=R(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){return C(te,m(ze,l,a,d),Bu,ni,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Fu=$(function(e,r){return{$:3,a:e,b:r}}),bb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Vu={src:`
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
    `,attributes:{position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},gb=R(function(e,r,n,a){return o(Fu,n,ee(function(t,i,c,l,u,v,s,d){return C(te,d,Vu,bb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),ai={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Zn=function(e){var r=e;return r},rt=cf,lr=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,p){return C(te,m(ze,u,t,p),Bu,ai,a,{aN:o(rt,Zn(r),e),b:l,c,d:s,e:i,f:v})}))}),hb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},_b=_e(function(e,r,n,a,t){return o(Fu,a,ee(function(i,c,l,u,v,s,d,p){return C(te,p,Vu,hb,t,{aN:o(rt,Zn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Ru={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"co",sceneProperties:"e",viewMatrix:"f"}},Eu={src:`
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
    `,attributes:{normal:"o",position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ta=R(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var p=s.a,f=s.b;return C(te,m(ze,l,a,d),Eu,Ru,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,co:e,b:c,c:i,d:v,e:t,f:u})}))}),ju={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cp",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Wu={src:`
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
    `,attributes:{normal:"o",position:"fs",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},wb=Xe(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,p,f){var h=p.a,g=p.b;return C(te,m(ze,v,i,f),Wu,ju,t,{P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cp:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Nu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b6",constantMetallic:"b7",constantRoughness:"b8",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"ct",normalMapTexture:"aW",roughnessTexture:"cQ",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(he,u,ee(function(d,p,f,h,g,w,x,_){var L=x.a,D=x.b;return C(te,m(ze,h,s,_),Wu,Nu,v,{b3:e,b6:r,b7:i,b8:a,P:D,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,ct:t,b:f,c:p,aW:c,d:w,cQ:n,e:d,a$:l,f:g})}))}}}}}}}}}}},Hu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cs",roughness:"cP",sceneProperties:"e",viewMatrix:"f"}},oa=Xe(function(e,r,n,a,t,i){return o(he,a,ee(function(c,l,u,v,s,d,p,f){var h=p.a,g=p.b;return C(te,m(ze,v,i,f),Eu,Hu,t,{b2:e,P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cs:n,b:u,c:l,d,cP:r,e:c,f:s})}))}),xb=function(e){return{$:0,a:e}},ec=$(function(e,r){return{$:1,a:e,b:r}}),Pn=$(function(e,r){if(r.$){var n=r.a.C;return k(n,1)}else return r.a,k(e,0)}),Sb=function(e){return z(vn,$n(e),fn(e),sn(e),1)},ti=z(vn,0,0,0,0),ma=$(function(e,r){if(r.$){var a=r.a.C;return k(a,ti)}else{var n=r.a;return k(e,Sb(n))}}),Gu=$(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.C;return o(ec,k(t,ti),o(Pn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ec,o(ma,t,e),o(Pn,t,r))}else{var a=n.a.a;return n.b.a,xb(a)}}),Cb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ia=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Lb=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pb=function(e){return o(De,e,1)},qt=o(De,0,0),Jr=$(function(e,r){if(r.$){var a=r.a.C;return k(a,qt)}else{var n=r.a;return k(e,Pb(n))}}),Xu=R(function(e,r,n,a){var t=z(Lb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return z(ia,k(u,ti),o(Jr,u,r),o(Jr,u,n),o(Pn,u,a))}else if(t.b.$){var u=t.b.a.C;return z(ia,o(ma,u,e),k(u,qt),o(Jr,u,n),o(Pn,u,a))}else if(t.c.$){var u=t.c.a.C;return z(ia,o(ma,u,e),o(Jr,u,r),k(u,qt),o(Pn,u,a))}else if(t.d.$){var u=t.d.a.C;return z(ia,o(ma,u,e),o(Jr,u,r),o(Jr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(Cb,i,c,l)}}),zb={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bB",sceneProperties:"e"}},_t=_e(function(e,r,n,a,t){return o(he,n,ee(function(i,c,l,u,v,s,d,p){return C(te,m(ze,u,t,p),Au,zb,a,{b0:Zn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Iu={src:`
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
    `,attributes:{normal:"o",position:"fs",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kb=R(function(e,r,n,a){return o(he,r,ee(function(t,i,c,l,u,v,s,d){var p=s.a,f=s.b;return C(te,m(ze,l,a,d),Iu,ju,n,{P:f,bd:p.bd,bK:p.bK,bL:p.bL,bM:p.bM,cp:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Tb=Kt(function(e,r,n,a,t,i,c,l,u){return o(he,c,ee(function(v,s,d,p,f,h,g,w){var x=g.a,_=g.b;return C(te,m(ze,p,u,w),Iu,Nu,l,{b3:e,b6:r,b7:i,b8:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,ct:t,b:d,c:s,aW:e,d:h,cQ:n,e:v,a$:0,f})}))}),Vn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Mb=function(e){var r=e;return m(Vn,r.dR,r.dO,.5)},Db=function(e){var r=e;return m(Vn,r.dS,r.dP,.5)},Ab=function(e){var r=e;return m(Vn,r.dT,r.dQ,.5)},Bb=function(e){return m(be,Mb(e),Db(e),Ab(e))},X=function(e){var r=cu(e),n=r.a,a=r.b,t=r.c;return{ey:Qa(Bb(e)),eT:n/2,eU:a/2,eV:t/2}},oi=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return z(ht,l,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return z(ht,l,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return z(ht,l,X(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return z(cr,n,X(t),c,a);case 8:var t=r.a,c=r.c;return z(cr,n,X(t),c,0);case 9:var t=r.a,c=r.c;return z(cr,n,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return z(gb,n,i,X(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var t=r.a,c=r.c,a=r.d;return C(_t,l,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(_t,l,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(_t,l,v,X(t),c,a);case 8:return T;case 9:return T;default:return T}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return T;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,X(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,X(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(_b,u,v,i,X(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Gu,s,j);if(d.$){var h=d.a,g=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return z(kb,g,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(wb,g,x,_,X(t),c,f);case 8:return T;case 9:return T;default:return T}}else{var p=d.a;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,f=r.d;return z(ta,p,X(t),c,f);case 3:return T;case 4:var t=r.a,c=r.c,f=r.d;return z(ta,p,X(t),c,f);case 5:return T;case 6:var t=r.a,c=r.c,f=r.d;return z(ta,p,X(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return z(ta,p,X(t),c,f);case 8:return T;case 9:return T;default:return T}}default:e.a;var L=e.b,D=e.c,H=e.d,j=e.e,E=z(Xu,L,D,H,j);if(E.$){var O=E.a,K=O.a,le=O.b,fe=E.b,ce=fe.a,pe=fe.b,ke=E.c,Ce=ke.a,_r=ke.b,wr=E.d,x=wr.a,_=wr.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return iv(Tb,K,le,ce,pe,Ce,_r,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return yb(K)(le)(ce)(pe)(Ce)(_r)(x)(_)(X(t))(c)(a);case 8:return T;case 9:return T;default:return T}}else{var W=E.a,G=E.b,F=E.c;switch(r.$){case 0:return T;case 1:return T;case 2:var t=r.a,c=r.c,a=r.d;return ye(oa,W,G,F,X(t),c,a);case 3:return T;case 4:var t=r.a,c=r.c,a=r.d;return ye(oa,W,G,F,X(t),c,a);case 5:return T;case 6:var t=r.a,c=r.c,a=r.d;return ye(oa,W,G,F,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(oa,W,G,F,X(t),c,a);case 8:return T;case 9:return T;default:return T}}}}),wt=function(e){var r=e;return r.fX},yt=function(e){var r=e;return r.f$},xt=function(e){var r=e;return r.c5},Fb=function(e){var r=e,n=xt(r.c6),a=yt(r.c6),t=wt(r.c6),i=xt(r.c4),c=yt(r.c4),l=wt(r.c4),u=xt(r.c3),v=yt(r.c3),s=wt(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Vb=function(e){var r=Qa(Ir(e)),n=Ge(Dr(e)),a=Ge(Mr(e)),t=Ge(Tr(e));return{dp:Fb(e),q:t.fX,r:t.f$,s:t.c5,t:a.fX,u:a.f$,v:a.c5,w:n.fX,x:n.f$,y:n.c5,H:r.fX,I:r.f$,J:r.c5,bW:1}},Or=$(function(e,r){return{$:5,a:e,b:r}}),Uu=$(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,t=n.b,i=o(Ql,a,e);return o(Or,i,t);case 1:return o(Or,e,n);case 3:return o(Or,e,n);case 2:return o(Or,e,n);default:return o(Or,e,n)}}),Ju=$(function(e,r){return o(Uu,Vb(e),r)}),nt=function(e){return{$:2,a:e}},Rb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fX:n*i.fX,f$:a*i.f$,c5:t*i.c5},eT:n*r.eT,eU:a*r.eU,eV:t*r.eV}}),Eb=vf,jb=uf,rc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,p=e.c,f=jb(a),h=f.fX,g=f.f$,w=f.c5,x=f.em,_=Eb({em:x,fX:h*s,f$:g*d,c5:w*p});return Va(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Yt=$(function(e,r){switch(r.$){case 0:return Mu;case 5:var n=r.a,a=r.b;return o(Or,n,o(Yt,e,a));case 1:var t=r.a,i=r.b;return o(he,o(Rb,e,t),o(rc,e,i));case 3:return r;case 2:var i=r.a;return nt(o(rc,e,i));default:var c=r.a;return vu(o(re,Yt(e),c))}}),ii=$(function(e,r){var n=r;return o(Yt,e,n)}),ci={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ou=7683,qu=7682,Wb=m(Oo,{cn:0,cM:0,c2:15},{a8:Se,bl:on,bt:Se,bu:Ou},{a8:Se,bl:on,bt:Se,bu:qu}),Nb=m(Oo,{cn:0,cM:0,c2:15},{a8:Se,bl:on,bt:Se,bu:qu},{a8:Se,bl:on,bt:Se,bu:Ou}),li=$(function(e,r){return e?o(M,Nb,r):o(M,Wb,r)}),Hb={src:`
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
    `,attributes:{normal:"o",position:"fs"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Gb=function(e){if(e.$){var r=e.c;return ie(ee(function(n,a,t,i,c,l,u,v){return C(te,o(li,i,v),Hb,ci,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Da=function(e){var r=Gb(e);if(r.$)return T;var n=r.a;return nt(n)},Xb=R(function(e,r,n,a){var t=o(oi,n,zu),i=function(){var s=k(e,r);return s.a?s.b?qn(b([t,Da(Qi)])):t:s.b?Da(Qi):T}(),c=Ja(a),l=c.a,u=c.b,v=c.c;return o(Ju,Ua(a),o(ii,S(l,u,v),i))}),Ib=$(function(e,r){return z(Xb,!0,!0,e,r)}),Yu=$(function(e,r){return{$:0,a:e,b:r}}),Ub=function(e){var r=Po(e),n=r.cL,a=r.cb,t=r.b4;return m(Jn,n,a,t)},Jb=function(e){return o(Yu,0,Gt(Ub(e)))},zn=function(e){var r=e;return Gr(r)},Ob=$(function(e,r){var n=r;return n/e}),nc=function(e){var r=e;return{fX:Gr(r),f$:tn(r)}},qb=$(function(e,r){var n=e.fs,a=e.o;return o(M,{o:et(a),fs:Pe(n)},r)}),Yb=Fa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=sn(l.fs),s=fn(l.fs),d=$n(l.fs),p=o(sa,e,d),f=o(nr,r,d),h=o(sa,n,s),g=o(nr,a,s),w=o(sa,t,v),x=o(nr,i,v),_=u;e=p,r=f,n=h,a=g,t=w,i=x,c=_;continue e}else return yu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Zu=$(function(e,r){var n=sn(e.fs),a=fn(e.fs),t=$n(e.fs);return Qt(Yb,t,t,a,a,n,n,r)}),Zb=function(e){var r=m(jc,qb,P,ri(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,ei(e)),i=o(Zu,n,a);return z(_u,i,e,t,0)}else return Qo},ac=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fX:a.fX*l.fX+a.f$*i.fX,f$:a.fX*l.f$+a.f$*i.f$,c5:a.fX*l.c5+a.f$*i.c5}}),Aa=function(e){var r=e;return tn(r)},_n=function(e){var r=e;return r},Zt=function(e){return mr(2*Me*e)},tc=Fl({cz:We,c3:Ga,c4:Ho}),Ku=function(){var e=72,r=o(Ob,e,Zt(1)),n=Cr(1),a=_n(Ao),t=_n(Rl),i=Cr(1),c=o(Q,.5,i),l=m(be,ur,ur,c),u=o(Q,-.5,i),v=m(be,ur,ur,u),s=function(f){var h=o(Q,f,r),g=_n(o(ac,tc,nc(h))),w=o(Q,zn(h),n),x=o(Q,Aa(h),n),_=m(be,w,x,c),L=m(be,w,x,u),D=o(An,e,f+1),H=o(Q,D,r),j=_n(o(ac,tc,nc(H))),E=o(Q,zn(H),n),W=o(Q,Aa(H),n),G=m(be,E,W,u),F=m(be,E,W,c);return b([S({o:t,fs:v},{o:t,fs:G},{o:t,fs:L}),S({o:g,fs:L},{o:j,fs:G},{o:j,fs:F}),S({o:g,fs:L},{o:j,fs:F},{o:g,fs:_}),S({o:a,fs:l},{o:a,fs:_},{o:a,fs:F})])},d=o(re,s,o(Hr,0,e-1)),p=Ot(He(d));return Ko(Zb(p))}(),oc=Tu(Ku),Kb=function(e){var r=e,n=Z(r.c5),a=Z(r.f$),t=Z(r.fX);if(J(t,a)<1)if(J(t,n)<1){var i=Qr(r.c5*r.c5+r.f$*r.f$);return{fX:0,f$:-r.c5/i,c5:r.f$/i}}else{var i=Qr(r.f$*r.f$+r.fX*r.fX);return{fX:-r.f$/i,f$:r.fX/i,c5:0}}else if(J(a,n)<1){var i=Qr(r.c5*r.c5+r.fX*r.fX);return{fX:r.c5/i,f$:0,c5:-r.fX/i}}else{var i=Qr(r.fX*r.fX+r.f$*r.f$);return{fX:-r.f$/i,f$:r.fX/i,c5:0}}},Qb=function(e){var r=Kb(e),n=r,a=n,t=e,i=t,c={fX:i.f$*a.c5-i.c5*a.f$,f$:i.c5*a.fX-i.fX*a.c5,c5:i.fX*a.f$-i.f$*a.fX};return k(r,c)},eg=function(e){var r=Do(e),n=Qb(r),a=n.a,t=n.b;return pr({cz:Jl(e),c3:a,c4:t,c6:r})},rg=R(function(e,r,n,a){var t=eg(Go(a)),i=o(oi,n,Ku),c=function(){var d=k(e,r);return d.a?d.b?qn(b([i,Da(oc)])):i:d.b?Da(oc):T}(),l=ql(a),u=l,v=Ol(a),s=v;return o(Ju,t,o(ii,S(u,u,s),c))}),ng=$(function(e,r){return z(rg,!0,!0,e,r)}),ic={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},cc={src:`
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
    `,attributes:{triangleVertex:"cX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},wn=function(e){var r=Fn(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=nn(a),l=nn(t);return Qe({dx:i.fX,dy:c.fX,dz:l.fX,dA:0,dB:i.f$,dC:c.f$,dD:l.f$,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},ca=Pu(b([S({cX:0},{cX:1},{cX:2})])),ag=$(function(e,r){var n=xu(r),a=X(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var t=e.b.a;return o(he,a,ee(function(_,L,D,H,j,E,W,G){return C(te,m(ze,H,0,G),ic,ni,ca,{aw:t,b:D,c:L,d:E,e:_,bq:wn(r),f:j})}));case 1:if(e.b.$)return e.a,T;var i=e.b.a,c=e.c;return o(he,a,ee(function(_,L,D,H,j,E,W,G){return C(te,m(ze,H,0,G),ic,ai,ca,{aN:o(rt,Zn(c),i),b:D,c:L,d:E,e:_,bq:wn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Gu,l,f);if(u.$)return T;var v=u.a;return o(he,a,ee(function(_,L,D,H,j,E,W,G){var F=W.a,O=W.b;return C(te,m(ze,H,0,G),cc,Ru,ca,{P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,co:v,b:D,c:L,d:E,e:_,bq:wn(r),f:j})}));default:e.a;var s=e.b,d=e.c,p=e.d,f=e.e,h=z(Xu,s,d,p,f);if(h.$)return T;var g=h.a,w=h.b,x=h.c;return o(he,a,ee(function(_,L,D,H,j,E,W,G){var F=W.a,O=W.b;return C(te,m(ze,H,0,G),cc,Hu,ca,{b2:g,P:O,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cs:x,b:D,c:L,d:E,cP:w,e:_,bq:wn(r),f:j})}))}}),tg=function(){var e=b([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=b([S(0,1,2),S(3,5,4),S(3,4,1),S(3,1,0),S(4,5,2),S(4,2,1),S(5,3,0),S(5,0,2)]);return o(Yn,e,r)}(),og={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},lc=function(e){return nt(ee(function(r,n,a,t,i,c,l,u){return C(te,o(li,t,u),og,ci,tg,{b:a,c:n,d:c,e:r,bX:l,bq:wn(e),f:i})}))},ig=R(function(e,r,n,a){var t=o(ag,n,a),i=k(e,r);return i.a?i.b?qn(b([t,lc(a)])):t:i.b?lc(a):T}),cg=$(function(e,r){return z(ig,!0,!0,e,r)}),lg=$(function(e,r){var n=Wr(r),a=Wr(e),t=jr(r),i=jr(e),c=Er(r),l=Er(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),ug=function(e){var r=Eo(e),n=r.a,a=r.b;return o(lg,n,a)},uc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vg=$(function(e,r){return{$:1,a:e,b:r}}),$g=vg({df:2,$7:0,dV:1}),vc=$g(b([k({dw:0},{dw:1})])),fg=$(function(e,r){var n=ug(r),a=X(n),t=Eo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,T;var l=e.b.a;return o(he,a,ee(function(v,s,d,p,f,h,g,w){return C(te,w,uc,ni,vc,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:h,e:v,f})}));case 1:if(e.b.$)return T;var l=e.b.a,u=e.c;return o(he,a,ee(function(s,d,p,f,h,g,w,x){return C(te,x,uc,ai,vc,{aN:o(rt,Zn(u),l),du:Pe(c),dv:Pe(i),b:p,c:d,d:g,e:s,f:h})}));case 2:return T;default:return T}}),sg=$(function(e,r){return o(fg,e,r)}),$c=$(function(e,r){var n=e,a=r;return n/a}),dg=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(M,i,t);if(Lr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),fc=$(function(e,r){return e<1?P:C(dg,0,e,e,r,P)}),mg=$(function(e,r){var n=e.fs,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(M,{o:et(a),fs:Pe(n),L:o(De,c,l)},r)}),pg=function(e){var r=m(jc,mg,P,ri(e));if(r.b){var n=r.a,a=r.b,t=o(Yn,r,ei(e)),i=o(Zu,n,a);return z(wu,i,e,t,0)}else return Qo},Qu=$(function(e,r){var n=e,a=r,t=Gr(a);return{fX:t*Gr(n),f$:t*tn(n),c5:tn(a)}}),bg=function(){var e=Cr(1),r=72,n=o(Hr,0,r-1),a=o(fc,r,o(Vn,ur,Zt(1))),t=po(r/2),i=o(Hr,0,t-1),c=o(fc,t,o(Vn,gn(90),gn(-90))),l=Ka(He(o(re,function(s){return o(re,function(d){return{o:_n(o(Qu,s,d)),fs:m(be,o(Q,zn(d)*zn(s),e),o(Q,zn(d)*Aa(s),e),o(Q,Aa(d),e)),L:k(o($c,s,Zt(1)),o($c,o(Ln,gn(90),d),gn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=He(o(re,function(s){return He(o(re,function(d){var p=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),g=o(u,s,d+1);return b([S(g,h,p),S(g,p,f)])},i))},n));return Ko(pg(o(ku,l,v)))}(),Ba=72,la=2*Ba,gg=$(function(e,r){e:for(;;){var n=la+1,a=o(An,la,2*e+3),t=o(An,la,2*e+2),i=2*e+1,c=2*e,l=la,u=o(M,S(l,c,t),o(M,S(c,a,t),o(M,S(c,i,a),o(M,S(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),hg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),_g=$(function(e,r){e:for(;;){var n=m(hg,0,2*Me,e/Ba),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(M,a,o(M,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),wg=function(){var e=o(_g,Ba-1,b([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(gg,Ba-1,P);return o(Yn,e,r)}(),yg={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},sc=function(e){return nt(ee(function(r,n,a,t,i,c,l,u){return C(te,o(li,!0,u),yg,ci,wg,{aw:m(Jn,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},xg=function(e){var r=Cu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fX,I:r.f$,J:r.c5,bW:1}},Sg=$(function(e,r){return o(Uu,xg(e),r)}),Cg=R(function(e,r,n,a){var t=o(oi,n,bg),i=function(){var u=k(e,r);return u.a?u.b?qn(b([t,sc()])):t:u.b?sc():T}(),c=qa(a),l=c;return o(Sg,o(Jt,We,Oa(a)),o(ii,S(l,l,l),i))}),Lg=$(function(e,r){return z(Cg,!0,!0,e,r)}),Pg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zg=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),kg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Yu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return m(Pg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return m(Nl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(zg,n,a,t,i,c)}},Tg=kg,ev=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(Ib,t,r)]);case 1:var t=e.a,n=e.b;return b([o(cg,t,n)]);case 3:var t=e.a,a=e.b;return b([o(Lg,Tg(t),a)]);case 2:var t=e.a,i=e.b;return b([o(ng,t,i)]);case 4:var c=e.a,l=e.b;return b([o(sg,Jb(c),l)]);default:var u=e.a;return o(Xo,ev,u)}},Mg=function(e){return o(Xo,ev,e)},Dg=$(function(e,r){return N3({aI:Q0(e.es),ev:e.ev,aJ:ep(.5),b9:e.b9,aK:k(Wi(qe(e.cR.fV)),Wi(qe(e.cR.eX))),aP:Mg(r),fD:!0,fM:o(Qu,mr(e.fL),mr(e.fN)),ei:Xa})}),Ag=$(function(e,r){return o(Dg,{es:z(xl,0,0,0,0),ev:l0(e),b9:e.b9,cR:e.cR,fL:o(Oe,"sunlight azimuth",e),fN:o(Oe,"sunlight elevation",e)},b([o(K0,e,r),V0(e)]))}),Bg=$(function(e,r){return o(N,P,b([o(N,b([o(ae,"position","absolute"),o(ae,"width","100%")]),b([o(Hm,e,r)])),o(Ag,e,r)]))}),Fg=z(Am,Bg,Nm,Wm,Fm);const Vg={Main:{init:Fg(o(B,function(e){return Te({e2:e})},o(A,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Te({db:c,b9:i,eK:t,e8:a,fr:n,cR:r,fU:e})},o(A,"clock",se))},o(A,"devicePixelRatio",se))},o(A,"dt",se))},o(A,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(s){return o(B,function(d){return Te({eo:d,eB:s,de:v,eJ:u,e9:l,ft:c,fy:i,fE:t,eh:a})},o(A,"alt",Y))},o(A,"control",Y))},o(A,"down",Y))},o(A,"downs",Sa(Dn)))},o(A,"left",Y))},o(A,"pressedKeys",Sa(Dn)))},o(A,"right",Y))},o(A,"shift",Y))},o(A,"up",Y))))},o(A,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Te({de:v,e5:u,fe:l,fz:c,fA:i,eh:t,fX:a,f$:n})},o(A,"down",Y))},o(A,"isDown",Y))},o(A,"move",Y))},o(A,"rightDown",Y))},o(A,"rightUp",Y))},o(A,"up",Y))},o(A,"x",se))},o(A,"y",se))))},o(A,"screen",o(B,function(r){return o(B,function(n){return Te({eX:n,fV:r})},o(A,"height",se))},o(A,"width",se))))},o(A,"wheel",o(B,function(e){return o(B,function(r){return Te({eE:r,eF:e})},o(A,"deltaX",se))},o(A,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Rg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(p)}},Eg=()=>{St("pointerdown"),St("wheel"),St("keydown")},St=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},jg=Vg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Eg();Rg(jg);
